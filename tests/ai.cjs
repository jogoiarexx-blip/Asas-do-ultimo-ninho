/* Regression tests for enemy tactical AI and serializable checkpoints. */
const assert=require('node:assert/strict'), fs=require('node:fs'), path=require('node:path'), vm=require('node:vm');
const dir=path.resolve(__dirname,'../dist');
const code=['catalog','dragons','evolution','save','art','flight','training','app'].map(k=>fs.readFileSync(path.join(dir,k+'.js'),'utf8')).join('\n');
const noop=()=>{}, elements=new Map(), storage=new Map();
const getNode=k=>{if(!elements.has(k))elements.set(k,{style:{},dataset:{},classList:{add:noop,remove:noop,toggle:noop},setAttribute:noop,addEventListener:noop,getContext:()=>({}),showModal:noop,close:noop});return elements.get(k);};
const scope={assert,console,performance,Math,document:{querySelector:getNode,getElementById:getNode,querySelectorAll:()=>[],addEventListener:noop},window:{addEventListener:noop},location:{protocol:'https:'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout:noop,clearTimeout:noop,requestAnimationFrame:noop,cancelAnimationFrame:noop};
const tests=`
 save=freshSave();save.difficulty='Normal';level={id:3,region:0,events:[],duration:9999};run=freshRun();mode='flight';
 run.p.x=85;run.p.y=140;run.p.inv=500;
 const scout=entity('batedor',100,11);scout.x=330;
 const scout2=entity('batedor',100,12);scout2.x=330;
 run.entities=[scout,scout2];
 enemyTactic(scout,.12);enemyTactic(scout2,.12);
 assert.equal(scout.ai.state,'approach');assert.ok(scout.ai.targetY!==scout2.ai.targetY,'formation offsets must differ');
 assert.ok(scout.y>100 && scout.y<111,'scouts must track gradually, not teleport');
 run.shots=[{x:scout.x-12,y:scout.y,v:244}];scout.ai.think=0;enemyTactic(scout,.02);assert.ok(scout.ai.dodge>0);
 assert.ok(scout.x<330);assert.equal(JSON.parse(JSON.stringify(scout)).ai.dodgeDir,scout.ai.dodgeDir);
 // Archers acquire a target, warn, then fire only at the snapshot point.
 run.shots=[];const archer=entity('arqueiro',116,6);archer.x=354;archer.cool=-1;run.entities=[archer];
 enemyTactic(archer,.01);assert.equal(archer.ai.state,'windup');assert.equal(run.bullets.length,0);
 const snapshot=archer.ai.aimY;run.p.y=38;enemyTactic(archer,.7);
 assert.equal(archer.ai.state,'recover');assert.equal(run.bullets.length,1);assert.equal(archer.ai.aimY,snapshot);
 assert.ok(archer.cool>2);
 // Sentinels warn before firing their three-shot spread.
 run.bullets=[];const sentinel=entity('sentinela',128,7);sentinel.x=345;sentinel.cool=-1;run.entities=[sentinel];
 enemyTactic(sentinel,.01);assert.equal(sentinel.ai.state,'windup');assert.equal(run.bullets.length,0);
 enemyTactic(sentinel,.8);assert.equal(run.bullets.length,3);
 assert.equal(sentinel.ai.state,'recover');
 // Brutes prepare and charge, then recover instead of chain-charging instantly.
 const brute=entity('bruto',100,8);brute.x=343;brute.cool=-1;run.bullets=[];run.entities=[brute];run.p.x=85;run.p.y=100;
 enemyTactic(brute,.01);assert.equal(brute.ai.state,'windup');const initial=brute.x;
 enemyTactic(brute,.7);assert.equal(brute.ai.state,'charge');
 enemyTactic(brute,.15);assert.ok(initial-brute.x>20,'charge must be faster than approach');
 enemyTactic(brute,.5);assert.equal(brute.ai.state,'recover');
 enemyTactic(brute,.6);assert.equal(brute.ai.state,'approach');
 // Old checkpoints without ai state migrate during their first frame.
 const legacy=entity('arqueiro',100,19);legacy.x=320;delete legacy.ai;run.entities=[legacy];
 enemyTactic(legacy,.016);assert.ok(legacy.ai && Number.isFinite(legacy.ai.aimY));
 checkpoint();assert.ok(save.cp.run.entities[0].ai);
 const copy=JSON.parse(JSON.stringify(save.cp.run));assert.deepEqual(copy.entities[0].ai,legacy.ai);
 // Glacial remains effective against AI speed, without modifying other buffs.
 save.babies={gl:'Glacial'};save.nest=2;save.companions=['Glacial'];save.companion='Glacial';
 run=freshRun();run.p.inv=500;const slow=entity('batedor',100,23);slow.x=300;run.entities=[slow];
 enemyTactic(slow,.05);assert.ok(Math.abs(slow.x-(300-46*encounterDifficulty().movement*.79*.05))<1e-7);
 assert.equal(ENEMY_TYPES.size,4);
 `;
vm.runInNewContext(code+tests,scope);
const fx=fs.readFileSync(path.join(dir,'fx.js'),'utf8');assert.match(fx,/enemy\.ai\?\.state!=='windup'/);
const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');assert.equal((html.match(/\?v=0\.7\.7/g)||[]).length,11);
console.log('OK · 4 arquétipos táticos, formações, esquiva, preparação, tiros travados, investida, Glacial e checkpoint legado.');
