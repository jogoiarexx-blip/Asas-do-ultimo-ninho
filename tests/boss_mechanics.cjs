/* v0.7.8 — six bosses, unique volleys, weakpoints, transitions and old saves. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const dir=path.resolve(__dirname,'../dist');
const code=['catalog','dragons','evolution','save','art','flight','training','app'].map(x=>fs.readFileSync(path.join(dir,x+'.js'),'utf8')).join('\n');
const noop=()=>{},elements=new Map(),storage=new Map();
const node=k=>{if(!elements.has(k))elements.set(k,{style:{},dataset:{},classList:{toggle:noop,add:noop,remove:noop},getContext:()=>({}),setAttribute:noop,addEventListener:noop,showModal:noop,close:noop});return elements.get(k)};
const sandbox={assert,console,performance,document:{querySelector:node,getElementById:node,querySelectorAll:()=>[],addEventListener:noop},window:{addEventListener:noop},location:{protocol:'https:'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout:noop,clearTimeout:noop,requestAnimationFrame:noop,cancelAnimationFrame:noop};
const tests=[
"save=freshSave();mode='flight';save.difficulty='Normal';",
"const ids=[4,8,12,16,20,24],effects=['ember','thorn','crystal','frost','lava','shadow'];",
"for(let i=0;i<ids.length;i++){const id=ids[i];level={id,region:i,boss:true,events:[],duration:9999};run=freshRun();run.p.inv=50;",
"const boss=entity('boss',105,999);boss.x=401;boss.cool=0;run.entities=[boss];ensureBossArmor(boss);",
"assert.equal(boss.parts.length,2);assert.equal(BOSS_PROFILES[id].attacks.length,3);",
"bossAct(boss,.01);assert.equal(boss.state,'warning');assert.equal(run.bullets.length,0);",
"bossAct(boss,2);assert.equal(boss.state,'recover');assert.ok(run.bullets.length>=3);",
"if(id===4){boss.hp=boss.max*.5;boss.state='idle';boss.cool=0;bossAct(boss,.01);bossAct(boss,2)}",
"assert.ok(run.bullets.some(b=>b.kind===effects[i]),'golpe exclusivo da fase '+id);",
"const legacy=JSON.parse(JSON.stringify(boss));delete legacy.parts;ensureBossArmor(legacy);assert.equal(legacy.parts.length,2);",
"const hp=boss.hp,fury=run.p.fury,upper=boss.parts[0];assert.equal(strikeBossArmor(boss,upper,upper.max),true);",
"assert.equal(upper.broken,true);assert.equal(livingBossArmor(boss),1);assert.ok(boss.hp<hp);assert.ok(run.p.fury>fury);",
"assert.equal(strikeBossArmor(boss,upper,1),false);const lower=boss.parts[1];strikeBossArmor(boss,lower,lower.max);",
"assert.equal(livingBossArmor(boss),0);assert.ok(JSON.parse(JSON.stringify(boss)).parts.every(p=>p.broken));",
"const next=entity('boss',92,1000);next.x=401;run.entities=[next];ensureBossArmor(next);const max=next.hp;",
"strike(next,max*.43);assert.equal(next.phase,1);assert.equal(next.state,'transform');",
"bossAct(next,.2);assert.equal(next.state,'transform');bossAct(next,.8);assert.equal(next.state,'idle');",
"strike(next,max*.28);assert.equal(next.phase,2);assert.equal(next.state,'transform');",
"run.entities=[next];checkpoint();assert.ok(save.cp.run.entities[0].parts.length===2);",
"}",
"level={id:20,region:4,boss:true,events:[],duration:9999};run=freshRun();mode='flight';run.p.inv=20;",
"const target=entity('boss',105,999);target.x=401;target.cool=2.1;run.entities=[target];ensureBossArmor(target);",
"run.shots=[{x:target.x-17,y:105-21,v:0,vy:0,d:target.parts[0].max}];",
"update(.001);assert.equal(target.parts[0].broken,true);assert.equal(livingBossArmor(target),1);",
"assert.equal(run.shots.length,0);assert.equal(run.loot,0);assert.equal(run.wonBoss,false);"
].join('\n');
vm.runInNewContext(code+'\n'+tests,sandbox,{timeout:12000});
const vendor=fs.readFileSync(path.join(dir,'vendor/flight-view.js'),'utf8');
assert.match(vendor,/battleCrest/);assert.match(vendor,/transform/);assert.match(vendor,/magnitude/);
const fx=fs.readFileSync(path.join(dir,'fx.js'),'utf8');assert.match(fx,/part\.offsetY/);assert.match(fx,/realmColors/);
console.log('OK · seis chefes, 12 pontos de armadura, ataques por reino, fases e checkpoints.');
