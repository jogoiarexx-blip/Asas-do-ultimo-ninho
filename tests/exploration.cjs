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

async function verify(){await vm.runInNewContext(source+`
(async()=>{
 level=await getLevel(2); const stage=level;
 // Serialized progression and entity IDs from v0.3 stay valid.
 const oldSave={...freshSave()};delete oldSave.exploration;
 localStorage.setItem(SAVEKEY,JSON.stringify(oldSave));save=loadSave();
 assert.deepEqual(save.exploration,{rewards:{},routes:{}});
 run=freshRun();delete run.exploration;run.t=36;run.event=12;mode='flight';
 checkpoint();run=JSON.parse(JSON.stringify(loadSave().cp.run));update(.02);
 assert.ok(run.exploration);assert.equal(run.entities.filter(e=>e.kind==='rota').length,2);
 assert.equal(run.event,12);assert.equal(run.eggs.length,0);
 // Leaving both gates alone retains the main bridge.
 run.p.x=70;run.p.y=115;run.t=43;explorationTick();assert.equal(run.exploration.route,'main');
 // A missed entry cannot be entered after its deadline.
 run.t=63;explorationTick();const expired=run.entities.find(e=>e.kind==='selo');
 strike(expired,8);assert.equal(expired.kind,'passagem');
 run.t=76;run.p.x=expired.x;run.p.y=expired.y;update(.01);
 assert.equal(run.exploration.route,'main');
 // Both routes work with real movement, collision, shots, rewards and full timelines.
 for(const route of ['upper','lower','main']){
   level=stage;save=freshSave();run=freshRun();mode='flight';let peak=0;
   for(let frame=0;mode==='flight'&&frame<2500;frame++){
     const t=run.t,x=explorationState();
     let targetX=85,targetY=112;
     if(t>=32&&t<60&&route!=='main'){targetX=340;targetY=route==='upper'?74:165;}
     run.p.inv=10;keys.clear();keys.add('Space');
     if(Math.abs(run.p.x-targetX)>2)keys.add(run.p.x<targetX?'ArrowRight':'ArrowLeft');
     if(Math.abs(run.p.y-targetY)>2)keys.add(run.p.y<targetY?'ArrowDown':'ArrowUp');
     update(.05);peak=Math.max(peak,run.entities.length);
     if(t>44&&t<45){
       assert.equal(x.route,route);
       if(route==='upper')assert.ok(!run.entities.some(e=>e.kind==='bruto'&&e.serial>=12));
       if(route==='lower')assert.ok(!run.entities.some(e=>e.kind==='arqueiro'&&e.serial>=12));
     }
   }
   keys.clear();assert.equal(mode,'won');assert.ok(save.exploration.routes['2-'+route]);
   assert.ok(peak<28,'entidades devem permanecer limitadas');
   if(route!=='main'){
     const reward=route==='upper'?'ruinas':'canion';
     assert.ok(save.exploration.rewards['2-'+reward]);
     assert.equal(run.exploration.bonus,8);
   }
 }
 // Secret seal blocks contact until eight actual fire hits have broken it.
 level=stage;save=freshSave();run=freshRun();mode='flight';run.t=63;run.event=stage.events.findIndex(e=>e[0]>=65);
 explorationTick();const seal=run.entities.find(e=>e.kind==='selo');
 run.p.x=seal.x;run.p.y=seal.y;run.p.inv=10;update(.05);assert.notEqual(run.exploration.route,'secret');
 run.p.x=220;keys.add('Space');
 for(let i=0;i<65;i++){run.p.inv=10;update(.05);}
 keys.clear();assert.equal(seal.kind,'passagem');
 checkpoint();const openSnapshot=JSON.parse(JSON.stringify(loadSave().cp.run));
 run=openSnapshot;assert.ok(run.entities.some(e=>e.kind==='passagem'));
 run.p.x=355;run.p.y=119;update(.05);assert.equal(run.exploration.route,'secret');
 assert.equal(run.exploration.path,'main');
 for(let i=0;run.t<88&&i<600;i++){run.p.inv=10;update(.05);}
 assert.ok(save.exploration.rewards['2-ecos']);assert.equal(run.exploration.bonus,20);
 checkpoint();let stored=loadSave();assert.equal(stored.cp.run.exploration.route,'secret');assert.deepEqual(stored.cp.run.exploration.rewards,['ecos']);
 const total=save.scales;
 collectTreasure({...entity('tesouro',116,'repeat'),reward:'ecos'});assert.equal(save.scales,total);
 run=JSON.parse(JSON.stringify(stored.cp.run));
 for(let i=0;mode==='flight'&&i<600;i++){run.p.inv=10;update(.05);}
 assert.equal(mode,'won');assert.ok(save.exploration.routes['2-secret']);
 // HTTP and offline data must be byte-equivalent after parsing.
})()`,scope);for(let id=1;id<=24;id++){
 const json=JSON.parse(fs.readFileSync(path.join(dir,'levels',String(id).padStart(2,'0')+'.json'),'utf8'));
 let local;vm.runInNewContext(fs.readFileSync(path.join(dir,'levels-local',String(id).padStart(2,'0')+'.js'),'utf8'),{registerLocalLevel:l=>local=l});
 assert.equal(JSON.stringify(local),JSON.stringify(json));
}
const offlineFiles=[];
const offline=vm.createContext({...scope,location:{protocol:'file:'},document:{...scope.document,createElement:()=>({remove:nullFn}),head:{append(script){offlineFiles.push(script.src);vm.runInContext(fs.readFileSync(path.join(dir,script.src),'utf8'),offline);script.onload();}}}});
vm.runInContext(fs.readFileSync(path.join(dir,'dragons.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'evolution.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'save.js'),'utf8'),offline);
await vm.runInContext('(async()=>{const current=await getLevel(2);assert.equal(current.duration,105);assert.ok(current.exploration);assert.equal(cache.current.id,2);assert.equal(cache.next.id,3);await cache.next.promise;assert.equal(pendingLocal.size,0)})()',offline);
assert.deepEqual(offlineFiles,['levels-local/02.js','levels-local/03.js']);
console.log('OK · três rotas completas, entrada secreta por tiros e contato, prazo da entrada, tesouros únicos, checkpoint antigo, retomada e 24 pacotes offline.');}
verify().catch(e=>{console.error(e);process.exitCode=1});
