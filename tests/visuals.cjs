'use strict';
// Tests run against the actual browser bundle without installing three.js.
// They catch uncompiled source changes that a source-only scene test would miss.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
let bundle = fs.readFileSync(path.join(dist, 'vendor/flight-view.js'), 'utf8');
const marker = 'return Mh(jm);})();';
assert.equal(bundle.split(marker).length - 1, 1, 'Compiled vendor changed: update this test helper.');
bundle = bundle.replace(marker, 'return Object.assign(Mh(jm),{__test:{dragonModel:zi,animateDragon:ki,Landscape:Co}});})();');
const isolate = {console, Math, Float32Array, Uint8Array, Uint16Array, performance: {now: () => 0}};
vm.runInNewContext(bundle + '\nthis.testEngine=Ninho3D.__test', isolate, {timeout:14000});
const {dragonModel, animateDragon, Landscape} = isolate.testEngine;
let modelTriangles = 0;
for (const kind of ['rubro','verde','glacial','cristalino','tempestade','sombrio','arqueiro','bruto','batedor']) {
  for (const crowned of [false, true]) {
    const model = dragonModel(kind, crowned);
    const near = model.getObjectByName('nearWing'), far = model.getObjectByName('farWing');
    assert.ok(near && far && model.getObjectByName('tail'));
    if (crowned || ['arqueiro','bruto','batedor'].includes(kind)) assert.ok(model.getObjectByName('battleCrest'));
    animateDragon(model, 1, 0, 1.3);
    const first = near.rotation.x;
    animateDragon(model, 1.25, .05, .92);
    assert.notEqual(first, near.rotation.x, 'Wings must animate over time');
    assert.ok(Number.isFinite(model.rotation.x) && Number.isFinite(model.rotation.z));
    model.traverse(obj => {
      if (!obj.isMesh) return;
      const {position,color,normal} = obj.geometry.attributes;
      assert.equal(position.count,color.count);
      assert.equal(position.count,normal.count);
      assert.ok(position.count % 3 === 0);
      for (const v of position.array) assert.ok(Number.isFinite(v));
      modelTriangles += position.count / 3;
    });
  }
}
assert.ok(modelTriangles < 30000, 'Geometry budget: too many character triangles');
let landmarkVertices = 0;
for (let id = 1; id <= 24; id++) {
  const scene = {add(){},remove(){}};
  const level = JSON.parse(fs.readFileSync(path.join(dist,'levels',String(id).padStart(2,'0')+'.json'),'utf8'));
  for (const lightweight of [false,true]) {
    const land = new Landscape(scene,level,lightweight);
    assert.equal(land.layers.length, 6, `Level ${id} must have landmarks and five original layers`);
    const detail = land.layers[5];
    detail.pair.traverse(node=>{if(node.isMesh)landmarkVertices += node.geometry.attributes.position.count;});
    land.update(28);
    assert.ok(Number.isFinite(detail.pair.position.x));
    land.dispose();
  }
}
assert.ok(landmarkVertices < 100000, 'Too many extra level vertices');
let t = 100, drawCalls = 0, effectCanvas;
const paint = () => new Proxy({}, {get:(_target,key)=>{
  if(['clearRect','setTransform','beginPath','arc','fill','stroke','moveTo','lineTo'].includes(key)) return ()=>{drawCalls++};
  return undefined;
},set:()=>true});
const document = {createElement(tag) {
  assert.equal(tag,'canvas');
  effectCanvas = {className:'',style:{},parentNode:null,hidden:false, setAttribute(){},getContext:()=>paint(),remove(){this.parentNode=null}};
  return effectCanvas;
}};
const window = {devicePixelRatio:1.2};
const fxScope = {window,document,performance:{now:()=>t},Math,matchMedia:()=>({matches:false})};
vm.runInNewContext(fs.readFileSync(path.join(dist,'fx.js'),'utf8'),fxScope);
const game = {clientWidth:1280,clientHeight:650,hidden:false,appendChild(element){element.parentNode=this}};
const run = {t:24,p:{x:85,y:100,dash:.1,inv:.2},shots:[{x:150,y:95,v:240}],bullets:[{x:245,y:150,vx:-90,vy:0}],entities:[{kind:'boss',x:400,y:120,hp:40,max:100,state:'warning'}]};
window.drawFlightEffects(run,{id:4,region:0},[{x:100,y:90,life:.25,col:'#ffccaa'}],game);
assert.ok(effectCanvas && effectCanvas.parentNode === game);
assert.equal(effectCanvas.className,'flight-fx');
assert.ok(drawCalls > 50);
const reused = effectCanvas;
t += 50;run.entities[0].state='recover';window.drawFlightEffects(run,{id:4,region:0},[],game);
assert.equal(reused,effectCanvas,'Canvas should be reused between frames');
window.resetFlightEffects();assert.equal(effectCanvas.hidden,true);
const html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
assert.ok(html.includes('fx.js?v=0.7.7'));
assert.equal((html.match(/\?v=0\.7\.7/g)||[]).length,11,'All CSS and script assets must bust previous cache');
const scripts=[...html.matchAll(/<script src="([^"?]+)/g)].map(m=>m[1]);
for(const file of scripts) assert.ok(fs.existsSync(path.join(dist,file)),`Missing browser asset ${file}`);
console.log(`OK: 18 dragon variants, ${modelTriangles} model triangles, 24 scenes, 6 layers, ${landmarkVertices} landmark vertices, animated combat effects and complete browser assets.`);
