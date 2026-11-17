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

// A light render stub allows the real start/resume path to run in the VM.
scope.Ninho3D={FlightView:class {reset(){}update(){}release(){}}};
async function verify(){await vm.runInNewContext(source+`
(async()=>{
 save=freshSave();save.babies={a:'Rubro',b:'Verde',c:'Cristalino',d:'Glacial',e:'Tempestade',f:'Sombrio'};
 assert.equal(companionSlots(),0);assert.equal(changeCompanion('Rubro'),'full');
 save.nest=2;assert.equal(changeCompanion('Rubro'),'added');assert.equal(changeCompanion('Verde'),'full');assert.deepEqual(activeCompanions(),['Rubro']);
 assert.equal(changeCompanion('Rubro'),'removed');assert.deepEqual(activeCompanions(),[]);
 save.nest=3;assert.equal(changeCompanion('Rubro'),'added');assert.equal(changeCompanion('Verde'),'added');assert.equal(changeCompanion('Glacial'),'full');
 assert.deepEqual(activeCompanions(),['Rubro','Verde']);assert.equal(changeCompanion('inexistente'),'locked');
 writeSave();assert.deepEqual(loadSave().companions,['Rubro','Verde']);
 const old={...save,companion:'Cristalino'};delete old.companions;localStorage.setItem(SAVEKEY,JSON.stringify(old));save=loadSave();assert.deepEqual(save.companions,['Cristalino']);assert.equal(save.companion,'Cristalino');
 save.companions=['Cristalino','Cristalino','Nulo','Verde','Rubro'];writeSave();assert.deepEqual(loadSave().companions,['Cristalino','Verde']);
 // The saved flight keeps its own team even after a nursery change.
 save.cp=null;save.medals={};await startFlight(1);assert.deepEqual(run.companions,['Cristalino','Verde']);assert.equal(run.p.hp,7);
 checkpoint();changeCompanion('Cristalino');changeCompanion('Rubro');writeSave();
 await startFlight(1,true);assert.deepEqual(activeCompanions(),['Verde','Rubro']);assert.deepEqual(flightTeam(),['Cristalino','Verde']);
 keys.add('Space');update(.05);keys.clear();assert.equal(run.shots[0].d,1);assert.equal(health(flightTeam()),7);
 await startFlight(1,false);assert.deepEqual(flightTeam(),['Verde','Rubro']);assert.equal(run.p.hp,5);keys.add('Space');update(.05);keys.clear();assert.equal(run.shots[0].d,2);
 // Existing checkpoints without a team inherit the migrated selection at resume.
 checkpoint();delete save.cp.run.companions;await startFlight(1,true);assert.deepEqual(run.companions,['Verde','Rubro']);
 // Distinct passive abilities work together, including the second slot.
 level={...level,events:[],duration:9999};
 save.companions=['Verde','Cristalino'];run=freshRun();mode='flight';run.t=14.95;run.p.hp=4;run.p.inv=10;update(.1);assert.equal(run.p.hp,5);update(.05);assert.equal(run.p.hp,5);
 save.companions=['Rubro','Glacial'];run=freshRun();mode='flight';const slow=entity('batedor',100,10);slow.x=300;run.entities=[slow];run.p.inv=10;update(.05);assert.ok(Math.abs(slow.x-(300-46*encounterDifficulty().movement*.79*.05))<1e-8);
 save.companions=['Tempestade','Sombrio'];run=freshRun();mode='flight';run.t=4.95;run.p.inv=10;
 const first=entity('bruto',55,10),second=entity('bruto',150,11);first.hp=second.hp=10;first.x=second.x=300;run.entities=[first,second];update(.1);assert.equal(first.hp,5);assert.equal(second.hp,5);
 // Unknown and locked species cannot be equipped through a direct action.
 save.babies={a:'Rubro'};save.companions=[];assert.equal(changeCompanion('Sombrio'),'locked');assert.equal(changeCompanion('__proto__'),'locked');
 const markup=nurseryUI();assert.ok(markup.includes('portraits/rubro.svg'));assert.ok(markup.includes('Ainda não resgatado'));assert.ok(markup.includes('COMPANHEIRO 2'));
 save.nest=2;save.companions=['Rubro','Verde'];normalizeCompanions(save);assert.deepEqual(activeCompanions(),['Rubro']);
})()`,scope);console.log('OK · dois espaços, migração de companheiro único, limite e posse, retirada, seis habilidades, equipe fixa por voo e retomada do checkpoint.');}
verify().catch(e=>{console.error(e);process.exitCode=1});
