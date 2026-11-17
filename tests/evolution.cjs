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
 // v0.6 files keep all three old investments; new attributes begin at zero.
 save=freshSave();const legacy={...save,scales:86,embers:9,cores:2,up:{atk:2,hp:3,speed:1}};
 localStorage.setItem(SAVEKEY,JSON.stringify(legacy));save=loadSave();assert.deepEqual(save.up,{atk:2,energy:0,hp:3,def:0,speed:1,regen:0});assert.equal(save.scales,86);assert.equal(save.embers,9);
 assert.deepEqual(normalizeUpgrades({atk:9,hp:-1,def:1.5,energy:4}),{atk:4,energy:4,hp:0,def:0,speed:0,regen:0});
 save=freshSave();let before=JSON.stringify(save);assert.equal(purchaseUpgrade('atk'),false);assert.equal(purchaseUpgrade('__proto__'),false);assert.equal(JSON.stringify(save),before);
 assert.equal(upgradeCost('atk',0).scales,18);
 assert.equal(upgradeCost('atk',3).scales,105);
 assert.equal(upgradeCost('def',2).cores,1);
 assert.equal(upgradeCost('energy',3).scales,190);
 assert.equal(upgradeCost('regen',2).embers,8);
 assert.deepEqual(nestUpgradeCost(1),{scales:25,cores:0});
 assert.deepEqual(nestUpgradeCost(4),{scales:210,cores:3});
 save.scales=17;assert.equal(purchaseUpgrade('atk'),false);assert.equal(save.scales,17);
 save.scales=18;assert.equal(purchaseUpgrade('atk'),true);assert.equal(save.scales,0);assert.equal(save.up.atk,1);assert.equal(purchaseUpgrade('atk'),false);
 // Requirements are checked by the purchase function, not just by disabled buttons.
 save.scales=5000;save.embers=100;save.cores=20;
 assert.equal(purchaseUpgrade('energy'),false);assert.ok(upgradeState('energy').missing.includes('Ninho nível 3'));
 save.nest=3;assert.equal(purchaseUpgrade('energy'),true);assert.equal(save.up.energy,1);assert.equal(purchaseUpgrade('regen'),false);
 assert.equal(purchaseUpgrade('speed'),true);assert.equal(purchaseUpgrade('regen'),true);
 assert.equal(purchaseUpgrade('def'),false);purchaseUpgrade('hp');const cost=upgradeState('def').cost,previous={scales:save.scales,embers:save.embers,cores:save.cores};
 assert.equal(purchaseUpgrade('def'),true);for(const k of Object.keys(cost))assert.equal(save[k],previous[k]-cost[k]);
 purchaseUpgrade('atk');assert.equal(purchaseUpgrade('energy'),true);assert.equal(purchaseUpgrade('energy'),false);
 save.nest=4;assert.equal(purchaseUpgrade('energy'),false);save.medals[4]='Bronze';assert.equal(purchaseUpgrade('energy'),true);
 purchaseUpgrade('atk');assert.equal(purchaseUpgrade('energy'),false);save.medals[8]='Bronze';assert.equal(purchaseUpgrade('energy'),true);
 const rich=JSON.stringify(save);assert.equal(purchaseUpgrade('energy'),false);assert.equal(JSON.stringify(save),rich);
 // A core shortage prevents the final tier without spending any other resource.
 save.up.hp=3;save.up.def=2;save.cores=0;before=JSON.stringify(save);assert.equal(purchaseUpgrade('def'),false);assert.equal(JSON.stringify(save),before);assert.ok(upgradeState('def').shortfall.some(x=>x.includes('núcleos')));
 save.cores=20;assert.equal(purchaseUpgrade('def'),true);purchaseUpgrade('regen');purchaseUpgrade('regen');assert.equal(save.up.regen,3);
 writeSave();assert.deepEqual(loadSave().up,save.up);
 const markup=evolutionUI();assert.ok(markup.includes('Ofensiva'));assert.ok(markup.includes('Proteção'));assert.ok(markup.includes('Mobilidade'));assert.ok(markup.includes('Nível máximo'));
 // Actual flight uses the upgraded capacity, refill rate and shield charges.
 save.companions=[];save.companion=null;save.cp=null;await startFlight(1);
 level={...level,events:[],duration:99999};run=freshRun();mode='flight';assert.equal(run.p.energy,180);assert.equal(flightStats().energyRegen,17);assert.equal(run.p.shield,2);assert.equal(flightStats().shieldDelay,10);
 run.shots=[];run.p.fire=0;keys.add('Space');update(.05);keys.clear();assert.equal(run.shots.length,2);assert.ok(run.shots.every(s=>s.d===4));
 run.shots=[];run.p.energy=180;run.p.power=0;keys.add('KeyE');update(.01);keys.clear();assert.equal(run.shots.filter(s=>s.special).length,3);assert.ok(run.shots.every(s=>s.d===7));assert.equal(run.p.energy,152);
 const dummy=entity('bruto',190,71);dummy.hp=100;dummy.x=350;run.entities=[dummy];run.p.fury=100;keys.add('KeyF');update(.01);keys.clear();assert.equal(dummy.hp,87);run.entities=[];
 run.p.dash=0;const px=run.p.x;keys.add('ArrowRight');update(.05);keys.clear();assert.ok(Math.abs(run.p.x-px-5.6)<1e-8);
 run.p.cool=0;keys.add('ShiftLeft');update(.01);keys.clear();assert.equal(run.p.cool,2.25);run.p.dash=0;
 run.p.energy=0;run.p.inv=10;update(.5);assert.equal(run.p.energy,8.5);run.p.energy=179;update(.5);assert.equal(run.p.energy,180);
 const hp=run.p.hp;run.p.inv=0;hurt();assert.equal(run.p.hp,hp);assert.equal(run.p.shield,1);assert.equal(run.blocks,1);assert.equal(run.hits,0);hurt();assert.equal(run.p.shield,1);
 run.p.inv=0;hurt();assert.equal(run.p.shield,0);assert.equal(run.blocks,2);run.p.inv=0;hurt();assert.equal(run.p.hp,hp-1);assert.equal(run.hits,1);
 for(let i=0;i<190;i++)update(.05);assert.equal(run.p.shield,0);for(let i=0;i<13;i++)update(.05);assert.equal(run.p.shield,1);for(let i=0;i<200;i++)update(.05);assert.equal(run.p.shield,2);
 // The shield timer and all combat attributes survive checkpoint round trips.
 run.p.shield=0;run.p.shieldClock=7;run.t=40;run.p.x=151;checkpoint();pauseFlight();const oldStats=JSON.stringify(run.stats),oldCp=JSON.stringify(save.cp);const oldUp=run.upgrades.hp;
 save.up.hp=4;writeSave();await startFlight(1,true);assert.equal(JSON.stringify(run.stats),oldStats);assert.equal(run.upgrades.hp,oldUp);assert.equal(run.p.shieldClock,7);assert.equal(run.p.x,151);
 // A new flight receives the new investment and a legacy checkpoint is migrated in place.
 await startFlight(1,false);assert.equal(run.upgrades.hp,4);assert.equal(run.stats.hp,13);checkpoint();delete save.cp.run.stats;delete save.cp.run.upgrades;delete save.cp.run.p.shield;delete save.cp.run.p.shieldClock;
 await startFlight(1,true);assert.ok(run.stats);assert.equal(run.p.shield,2);assert.equal(run.p.shieldClock,0);
 // Training can consume and refill its own shield and energy without saving.
 pauseFlight();const protectedSave=JSON.stringify(save);startTraining();assert.equal(run.p.energy,180);run.p.inv=0;hurt();assert.equal(run.p.shield,1);assert.equal(run.blocks,1);assert.equal(run.hits,0);
 run.p.energy=0;refillTraining();assert.equal(run.p.energy,180);assert.equal(run.p.shield,2);assert.equal(JSON.stringify(save),protectedSave);
 const oldRate=flightStats().energyRegen;save.up.regen=0;changeTrainingDrill('moving');assert.equal(flightStats().energyRegen,oldRate-6);
})()`,scope);console.log('OK · migração das melhorias, custos exatos, pré-requisitos, limite, escudo, energia/recuperação reais, atributos do checkpoint e isolamento no treino.');}
verify().catch(e=>{console.error(e);process.exitCode=1});
