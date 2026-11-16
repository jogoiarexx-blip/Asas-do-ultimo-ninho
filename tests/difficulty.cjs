/* Regressao do modo Normal, dos seis chefes e da orientacao 3D. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const dist=path.resolve(__dirname,'../dist');
const code=['catalog','dragons','evolution','save','art','flight','training','app'].map(n=>fs.readFileSync(path.join(dist,n+'.js'),'utf8')).join('\n');
const nodes=new Map(),storage=new Map();
const noop=()=>{};
function node(id) { if(!nodes.has(id)) nodes.set(id,{style:{},dataset:{},classList:{add:noop,remove:noop,toggle:noop},setAttribute:noop,addEventListener:noop,getContext:()=>({}),showModal:noop,close:noop});return nodes.get(id); }
const ctx={assert,console,performance,location:{protocol:'https:'},document:{querySelector:node,querySelectorAll:()=>[],getElementById:node,addEventListener:noop},window:{addEventListener:noop},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout:noop,clearTimeout:noop,requestAnimationFrame:noop,cancelAnimationFrame:noop};
const checks=[
 "save=freshSave();level={id:4,region:0,events:[],duration:9999,boss:true};run=freshRun();mode='flight';",
 "let results={};for(const dif of ['Fácil','Normal','Difícil']){save.difficulty=dif;const tune=encounterDifficulty();results[dif]={hp:entity('boss',92,99).hp,speed:tune.movement,shots:tune.shots,cadence:tune.volleyCooldown,archer:entity('arqueiro',92,33).hp};}",
 "assert.ok(results['Fácil'].hp<results.Normal.hp && results.Normal.hp<results['Difícil'].hp);",
 "assert.ok(results['Fácil'].archer<results.Normal.archer && results.Normal.archer<results['Difícil'].archer);",
 "assert.ok(results['Fácil'].speed<results.Normal.speed && results.Normal.speed<results['Difícil'].speed);",
 "assert.ok(results['Fácil'].shots<results.Normal.shots && results.Normal.shots<results['Difícil'].shots);",
 "assert.ok(results['Fácil'].cadence>results.Normal.cadence && results.Normal.cadence>results['Difícil'].cadence);",
 "save.difficulty='Normal';assert.equal(entity('alvo',80,1).hp,30);assert.equal(entity('ovo',80,2).hp,1);",
 "for(let id of [4,8,12,16,20,24]){level={id,region:id/4-1,boss:true,events:[],duration:99};run=freshRun();const boss=entity('boss',92,999);boss.x=401;boss.cool=0;bossAct(boss,.01);assert.equal(boss.phase,0);boss.hp=boss.max*.48;boss.cool=0;boss.state='idle';bossAct(boss,.01);assert.equal(boss.phase,1);boss.hp=boss.max*.2;boss.cool=0;boss.state='idle';bossAct(boss,.01);assert.equal(boss.phase,2);}"
].join('\n');
vm.runInNewContext(code+'\n'+checks,ctx);
const render=fs.readFileSync(path.resolve(__dirname,'../src/flight-view.js'),'utf8');
const built=fs.readFileSync(path.join(dist,'vendor/flight-view.js'),'utf8');
assert.match(render,/model\.scale\.x\s*\*=\s*-1/);
assert.match(built,/n\.scale\.x\*=-1/);
assert.doesNotMatch(built,/n\.rotation\.y=Math\.PI/);
for(let id=1;id<=24;id++){
 const level=JSON.parse(fs.readFileSync(path.join(dist,'levels',String(id).padStart(2,'0')+'.json'),'utf8'));
 assert.equal(!!level.boss,id%4===0);
}
console.log('OK · 6 chefes / 3 etapas, modo Normal mais exigente e inimigos 3D espelhados sem giro vertical.');