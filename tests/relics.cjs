'use strict';
// v0.7.9 — Integration tests for boss drops, equipment, old saves and combat effects.
const assert=require('node:assert/strict'), fs=require('node:fs'), path=require('node:path'), vm=require('node:vm');
const dir=path.resolve(__dirname,'../dist'), store=new Map(), nodes=new Map(), noop=()=>{};
const scripts=['catalog','dragons','relics','evolution','save','art','flight','training','app'];
const code=scripts.map(k=>fs.readFileSync(path.join(dir,k+'.js'),'utf8')).join('\n');
function node(key){if(!nodes.has(key)) nodes.set(key,{style:{},dataset:{},classList:{toggle:noop,add:noop,remove:noop},addEventListener:noop,getContext:()=>({}),setAttribute:noop,focus:noop,showModal:noop,close:noop});return nodes.get(key);}
const scope={assert,console,Math,performance,location:{protocol:'https:'},window:{addEventListener:noop},document:{querySelector:node,getElementById:node,querySelectorAll:()=>[],addEventListener:noop},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},requestAnimationFrame:noop,cancelAnimationFrame:noop,setTimeout:noop,clearTimeout:noop};
const tests=[
 "save=freshSave();assert.equal(RELIC_IDS.length,6);assert.equal(relicSlots(save),1);assert.equal(changeRelic('4'),'locked');",
 "assert.ok(relicUI().includes('Relicário do Último Ninho'));",
 "level={id:4,region:0,boss:true,events:[],eggs:0,babies:0,duration:999};run=freshRun();run.wonBoss=true;mode='flight';",
 "const scalesBefore=save.scales;endFlight(true);assert.ok(save.medals[4]);assert.equal(save.relics['4'],true);assert.equal(save.scales,scalesBefore+8);",
 "assert.equal(grantRelic(4),false);assert.equal(changeRelic('4'),'added');assert.equal(changeRelic('4'),'removed');assert.equal(changeRelic('4'),'added');",
 "level={id:4,region:0,boss:true,events:[],eggs:0,babies:0,duration:999};run=freshRun();run.wonBoss=true;mode='flight';endFlight(true);assert.equal(Object.keys(save.relics).length,1);",
 "assert.equal(grantRelic(8),true);assert.equal(changeRelic('8'),'full');save.nest=4;assert.equal(relicSlots(save),2);assert.equal(changeRelic('8'),'added');",
 "assert.equal(grantRelic(12),true);assert.equal(changeRelic('12'),'full');",
 "let old=dragonStats(save.up,[],save.nest,'Normal',[]),buffed=dragonStats(save.up,[],save.nest,'Normal',['4','8']);assert.equal(buffed.primary,old.primary+1);",
 "run=freshRun();assert.equal(run.stats.primary,old.primary+1);assert.deepEqual(run.relics,['4','8']);",
 "assert.equal(changeRelic('8'),'removed');assert.equal(changeRelic('12'),'added');assert.deepEqual(run.relics,['4','8']);",
 "level={id:1,region:0,boss:false,events:[],eggs:0,babies:0,duration:999};run=freshRun();",
 "run.relics=['8'];run.stats=dragonStats(save.up,[],save.nest,'Normal',['8']);run.beat=5;run.t=29.8;run.p.hp=1;run.p.inv=20;mode='flight';",
 "update(.25);assert.equal(run.p.hp,2);run.p.hp=run.stats.hp;run.beat=11;run.t=59.8;update(.25);assert.equal(run.p.hp,run.stats.hp);",
 "const prism=dragonStats(save.up,[],1,'Normal',['12']);assert.equal(prism.shieldMax,1);assert.equal(prism.shieldDelay,16);",
 "const ice=dragonStats(save.up,[],1,'Normal',['16']);assert.equal(ice.dashCooldown,2.15);",
 "const lava=dragonStats(save.up,[],1,'Normal',['20']);assert.equal(lava.elemental,6);",
 "const eclipse=dragonStats(save.up,[],1,'Normal',['24']);assert.equal(eclipse.furyRegen,1.5);",
 "run=freshRun();run.stats=eclipse;run.relics=['24'];run.p.inv=20;run.p.fury=0;mode='flight';run.beat=0;run.t=0;update(.4);assert.ok(Math.abs(run.p.fury-.6)<1e-8);",
 "run=freshRun();run.stats=lava;run.relics=['20'];run.p.inv=20;run.p.energy=100;run.p.power=0;run.t=0;mode='flight';keys.add('KeyE');update(.02);keys.clear();",
 "assert.equal(run.shots.filter(s=>s.special).length,3);assert.ok(run.shots.every(s=>s.d===6));",
 "run=freshRun();delete run.relics;run.stats=old;initializeFlightBuild();assert.equal(run.relics.length,0);assert.equal(run.stats.primary,old.primary);",
 "const legacy=freshSave();legacy.medals={4:'Bronze',8:'Prata',12:'Ouro',24:'Bronze'};delete legacy.relics;delete legacy.equippedRelics;",
 "localStorage.setItem(SAVEKEY,JSON.stringify(legacy));let loaded=loadSave();assert.deepEqual(Object.keys(loaded.relics),['4','8','12','24']);assert.deepEqual(loaded.equippedRelics,[]);",
 "const corrupt=freshSave();corrupt.relics={'4':true};corrupt.equippedRelics=['4','20','4','999'];normalizeRelics(corrupt);assert.deepEqual(corrupt.equippedRelics,['4']);"
].join('\n');
vm.runInNewContext(code+'\n'+tests,scope,{timeout:14000});
const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');
assert.ok(html.indexOf('relics.js?v=0.7.9')<html.indexOf('evolution.js?v=0.7.9'));
assert.equal((html.match(/\?v=0\.7\.9/g)||[]).length,12);
console.log('OK · 6 relíquias, 2 espaços, bônus reais, migração de saves e checkpoint preservado.');
