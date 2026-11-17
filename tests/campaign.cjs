/* Teste de integração da campanha, dos resgates e da retomada, sem dependências externas. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const dir=path.resolve(__dirname,'../dist');
const source=['catalog','dragons','evolution','save','art','flight','training','app'].map(n=>fs.readFileSync(path.join(dir,n+'.js'),'utf8')).join('\n');
const nodes=new Map(),storage=new Map(),requests=[];
const nullFn=()=>{};
function node(k){if(!nodes.has(k))nodes.set(k,{style:{},classList:{toggle:nullFn,add:nullFn,remove:nullFn},dataset:{},getContext:()=>({}),setAttribute:nullFn,focus:nullFn,addEventListener:nullFn,showModal:nullFn,close:nullFn});return nodes.get(k)}
// Regressao: checkpoints e o menu inicial funcionam mesmo sem o painel #journal.
const scope={console,performance,document:{querySelector:k=>k==='#journal'?null:node(k),querySelectorAll:()=>[],getElementById:k=>k==='journal'?null:node('#'+k),addEventListener:nullFn},window:{addEventListener:nullFn},location:{protocol:'https:'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},requestAnimationFrame:()=>1,cancelAnimationFrame:nullFn,setTimeout:()=>1,clearTimeout:nullFn,fetch:async url=>{requests.push(url);return {ok:true,json:()=>JSON.parse(fs.readFileSync(path.join(dir,url),'utf8'))}},assert};
async function verify(){await vm.runInNewContext(source+`
(async()=>{
 assert.equal(unlocked(),1); assert.equal(cardCount(save.eggs),0);
 assert.equal(document.getElementById('journal'),null); journal(); journalUI(); assert.equal(document.getElementById('journal'),null);
 const first=await getLevel(1); assert.equal(first.id,1); assert.equal(cache.next.id,2);
 level=first;run=freshRun();mode='flight';keys.add('ArrowRight');keys.add('Space');update(.05);keys.clear();assert.ok(run.p.x>85);assert.equal(run.shots.length,1);
 const egg=entity('ovo',run.p.y,71);egg.x=run.p.x;run.entities=[egg];update(.02);assert.equal(cardCount(save.eggs),1);assert.equal(run.eggs.length,1);
 checkpoint();let loaded=loadSave();assert.deepEqual(loaded.cp.run,save.cp.run);
 run=JSON.parse(JSON.stringify(loaded.cp.run));awardItem(egg);assert.equal(cardCount(save.eggs),1);
 const cage=entity('jaula',90,72);strike(cage,2);assert.equal(cage.kind,'filhote');awardItem(cage);assert.equal(cardCount(save.babies),1);
 checkpoint();localStorage.setItem(SAVEKEY,'{bad');assert.ok(loadSave().cp);writeSave();
 endFlight(true);assert.equal(unlocked(),2);assert.equal(save.cp,null);assert.equal(Object.values(save.eggs)[0].left,0);
 const beforeNest=save.scales;buy('nest');assert.equal(save.nest,1);assert.equal(save.scales,beforeNest);
 save.scales=25;buy('nest');assert.equal(save.nest,2);assert.equal(save.scales,0);
 save.scales=59;buy('nest');assert.equal(save.nest,2);save.scales=60;buy('nest');assert.equal(save.nest,3);
 save.scales=120;save.cores=1;buy('nest');assert.equal(save.nest,3);assert.equal(save.scales,120);
 save.cores=2;buy('nest');assert.equal(save.nest,4);assert.equal(save.scales,0);assert.equal(save.cores,0);
 save.scales=210;save.cores=3;buy('nest');assert.equal(save.nest,5);assert.equal(save.scales,0);assert.equal(save.cores,0);
 level=await getLevel(4);run=freshRun();mode='flight';const guardian=entity('boss',92,999);guardian.x=401;run.entities=[guardian];guardian.cool=0;bossAct(guardian,.01);assert.equal(guardian.state,'warning');assert.equal(guardian.pattern,'lane');assert.ok(guardian.telegraphLeft>0);bossAct(guardian,1.1);assert.equal(guardian.state,'recover');assert.equal(run.bullets.length,3);guardian.hp=guardian.max*.5;guardian.state='idle';guardian.cool=0;bossAct(guardian,.01);assert.equal(guardian.pattern,'fan');bossAct(guardian,1.1);assert.equal(run.bullets.length,10);guardian.hp=guardian.max*.2;guardian.state='idle';guardian.cool=0;bossAct(guardian,.01);assert.equal(guardian.pattern,'burst');bossAct(guardian,.9);assert.equal(run.bullets.length,19);guardian.state='recover';const hpBefore=guardian.hp;strike(guardian,2);assert.equal(guardian.hp,hpBefore-2.8);
 for(let id=2;id<=24;id++){
   level=await getLevel(id);assert.equal(level.id,id);assert.equal(level.boss,id%4===0);
   assert.equal(cache.next?.id,id===24?undefined:id+1);
   if(id===2){
     run=freshRun();run.t=10;assert.match(missionTip(),/jaula se aproxima/);
     const target=entity('jaula',69,5);run.entities=[target];assert.match(missionTip(),/dispare/);
     strike(target,2);assert.match(missionTip(),/Encoste/);
     target.x=run.p.x;target.y=run.p.y;mode='flight';update(.01);assert.match(missionTip(),/a salvo/);
   }
   assert.equal(level.eggs,level.events.filter(x=>x[1]==='ovo').length);assert.equal(level.babies,level.events.filter(x=>x[1]==='jaula').length);
   run=freshRun();mode='flight';run.p.x=70;run.p.y=26;
   // Piloto de teste invulnerável percorre toda a linha do tempo; alinha o sopro ao chefe.
   for(let frame=0;mode==='flight'&&frame<6000;frame++){
     run.p.inv=10;keys.add('Space');const boss=run.entities.find(e=>e.kind==='boss');if(boss)run.p.y=boss.y;
     update(.05);
   }
   keys.clear();assert.equal(mode,'won','falha na fase '+id);assert.ok(save.medals[id]);
 }
 assert.equal(cardCount(save.medals),24);assert.equal(save.nest,5);assert.ok(freshRun().ancient);const previousEggs=JSON.parse(JSON.stringify(save.eggs)),previousBabies=JSON.parse(JSON.stringify(save.babies));save.eggs={'hatch-test':{species:'Rubro',left:0,hatched:false},'hatch-test-2':{species:'Glacial',left:0,hatched:false}};save.babies={};startHatchSequence();assert.ok(hatchSequence);advanceHatchSequence();assert.equal(hatchSequence.index,1);advanceHatchSequence();assert.equal(save.eggs['hatch-test'].hatched,true);assert.equal(save.eggs['hatch-test-2'].hatched,true);assert.equal(save.babies['ovo-hatch-test'],'Rubro');assert.equal(save.babies['ovo-hatch-test-2'],'Glacial');save.eggs=previousEggs;save.babies=previousBabies;
})()`,scope);assert.equal(requests.length,27);console.log('OK · 24 fases, cache sequencial, três padrões do Guardião das Cinzas, combate, resgates, gravação e recuperação, progressão e seis chefes.')}
verify().catch(e=>{console.error(e);process.exitCode=1});
