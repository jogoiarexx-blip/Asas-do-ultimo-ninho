/* Teste de integração da campanha, dos resgates e da retomada, sem dependências externas. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const dir=path.resolve(__dirname,'../dist');
const source=['catalog','dragons','relics','evolution','save','art','flight','training','app'].map(n=>fs.readFileSync(path.join(dir,n+'.js'),'utf8')).join('\n');
const nodes=new Map(),storage=new Map(),requests=[];
const nullFn=()=>{};
function node(k){if(!nodes.has(k))nodes.set(k,{style:{},classList:{toggle:nullFn,add:nullFn,remove:nullFn},dataset:{},getContext:()=>({}),setAttribute:nullFn,focus:nullFn,addEventListener:nullFn,showModal:nullFn,close:nullFn});return nodes.get(k)}
const scope={console,performance,document:{querySelector:node,querySelectorAll:()=>[],getElementById:node,addEventListener:nullFn},window:{addEventListener:nullFn},location:{protocol:'https:'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},requestAnimationFrame:()=>1,cancelAnimationFrame:nullFn,setTimeout:()=>1,clearTimeout:nullFn,fetch:async url=>{requests.push(url);return {ok:true,json:()=>JSON.parse(fs.readFileSync(path.join(dir,url),'utf8'))}},assert};
scope.Ninho3D={FlightView:class {reset(){}update(){}release(){}},nestView:()=>()=>{}};

async function verify(){await vm.runInNewContext(source+`
(async()=>{
 save=freshSave();save.nest=2;const locked=JSON.stringify(save);assert.equal(startTraining(),false);assert.equal(JSON.stringify(save),locked);
 save.nest=3;save.scales=123;save.embers=8;save.cores=2;save.medals[1]='Ouro';save.eggs={protected:{species:'Rubro',left:1,hatched:false}};save.babies={a:'Rubro',b:'Cristalino'};save.companions=['Rubro','Cristalino'];
 await startFlight(1);run.p.x=121;run.t=7;checkpoint();pauseFlight();
 const before=JSON.stringify(save),stored=localStorage.getItem(SAVEKEY),backup=localStorage.getItem(BACKUP),current=cache.current,next=cache.next;
 assert.equal(startTraining('invalid'),false);assert.equal(JSON.stringify(save),before);
 assert.equal(startTraining(),true);assert.equal(level.id,0);assert.equal(mode,'flight');assert.equal(run.entities.length,3);assert.deepEqual(run.companions,['Rubro','Cristalino']);assert.equal(run.p.hp,7);
 assert.equal(cache.current,current);assert.equal(cache.next,next);assert.ok($('#hudPhase').innerHTML.includes('TREINO'));assert.ok(!$('#hudPhase').innerHTML.includes('FASE 00'));
 // Live projectiles damage a target, award no currency, and cause a delayed respawn.
 run.p.y=68;keys.add('Space');for(let i=0;i<130;i++)update(.05);keys.clear();
 assert.ok(run.kills>=1);assert.ok(run.training.damage>=30);assert.equal(run.loot,0);
 let target=run.entities.find(e=>e.slot===1);const damageBefore=run.training.damage;strike(target,999);assert.equal(run.training.damage-damageBefore,30);assert.equal(run.entities.filter(e=>!e.dead&&e.slot===1).length,0);
 update(.1);assert.equal(run.entities.filter(e=>!e.dead&&e.slot===1).length,0);for(let i=0;i<21;i++)update(.05);assert.equal(run.entities.filter(e=>!e.dead&&e.slot===1).length,1);
 // Practice powers are available even before campaign phase 04.
 assert.equal(save.medals[4],undefined);run.shots=[];run.p.power=0;run.p.energy=100;keys.add('KeyE');update(.05);keys.clear();assert.equal(run.shots.filter(s=>s.special).length,3);assert.equal(run.p.energy,72);assert.equal(save.medals[4],undefined);
 refillTraining();assert.equal(run.p.fury,100);assert.equal(run.p.energy,100);keys.add('KeyF');update(.05);keys.clear();assert.ok(run.training.damage>damageBefore);assert.equal(run.p.fury,0);
 // Pausing never serializes the practice run into the campaign checkpoint.
 const time=run.t;pauseFlight();loop(performance.now()+1000);assert.equal(run.t,time);assert.equal(mode,'paused');assert.ok($('#overlay').innerHTML.includes('Treino pausado'));checkpoint();resumeFlight();assert.equal($('#ready').textContent,'TREINAMENTO');
 changeTrainingDrill('moving');assert.equal(run.entities.length,1);const y=run.entities[0].y;update(.4);assert.notEqual(run.entities[0].y,y);assert.equal(run.training.damage,0);
 changeTrainingDrill('dodge');update(2);assert.ok(run.training.warning);assert.equal(run.bullets.length,0);draw();assert.equal($('#trainingSignal').hidden,false);update(.95);assert.equal(run.training.warning,null);assert.equal(run.bullets.length,3);
 // A successful Shift crossing is counted; an ordinary hit only changes virtual life.
 run.p.inv=0;run.p.cool=0;run.bullets=[{x:run.p.x,y:run.p.y,vx:0,vy:0,training:true}];keys.add('ShiftLeft');const hp=run.p.hp;update(.01);keys.clear();assert.equal(run.training.dodges,1);assert.equal(run.p.hp,hp);assert.equal(run.hits,0);
 run.p.dash=0;run.p.inv=0;run.bullets=[{x:run.p.x,y:run.p.y,vx:0,vy:0,training:true}];update(.01);assert.equal(run.p.hp,hp-1);assert.equal(run.hits,1);
 run.p.hp=1;for(let i=0;i<20;i++){run.p.inv=0;hurt();}assert.equal(run.p.hp,1);assert.equal(mode,'flight');
 refillTraining();assert.equal(run.p.hp,7);assert.equal(run.p.cool,0);assert.equal(run.p.energy,100);
 // Guard the persistent paths even when called directly from practice.
 awardItem(entity('ovo',100,99));collectTreasure({...entity('tesouro',100,98),reward:'ecos'});checkpoint();
 assert.equal(JSON.stringify(save),before);assert.equal(localStorage.getItem(SAVEKEY),stored);assert.equal(localStorage.getItem(BACKUP),backup);
 // Long practice sessions stay bounded and do not end or unlock medals.
 changeTrainingDrill('targets');keys.add('Space');run.p.y=68;
 for(let i=0;i<6000;i++){update(.05);assert.ok(run.entities.length<=3);assert.ok(run.shots.length<16);}keys.clear();assert.equal(mode,'flight');assert.ok(run.t>299);
 assert.equal(JSON.stringify(save),before);assert.equal(cache.current,current);assert.equal(cache.next,next);
 // Leaving by the generic finish path is safe, and the exact campaign position resumes.
 endFlight(true);assert.equal(page,'ninho');assert.equal(mode,'menu');assert.equal($('#trainingPanel').hidden,true);assert.equal(JSON.stringify(save),before);
 await startFlight(save.cp.id,true);assert.equal(isTraining(),false);assert.equal(run.p.x,121);assert.equal(run.t,7);assert.equal(run.training,undefined);assert.equal($('#trainingPanel').hidden,true);
 // The passives work on training targets too, without changing the nursery team.
 save.companions=['Tempestade','Sombrio'];save.babies.c='Tempestade';save.babies.d='Sombrio';pauseFlight();startTraining();run.t=4.95;update(.1);assert.equal(run.training.damage,10);
 changeTrainingDrill('targets');const targetHp=run.entities[0].hp;keys.add('KeyF');update(.05);keys.clear();assert.ok(run.entities[0].hp<targetHp);
})()`,scope);console.log('OK · três exercícios, tiros reais, poderes temporários, estatísticas, esquiva, sessão longa limitada, nenhum ganho ou sobrescrita de checkpoint e retomada exata da campanha.');}
verify().catch(e=>{console.error(e);process.exitCode=1});
