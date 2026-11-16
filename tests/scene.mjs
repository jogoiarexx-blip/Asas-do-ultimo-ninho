import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Scene} from 'three';
import {Landscape} from '../src/landscape.js';
import {dragonModel,objectModel,animateDragon} from '../src/creatures.js';
import {disposeTree} from '../src/mesh.js';

function inspect(model){
  let count=0;
  model.traverse(obj=>{
    if(!obj.isMesh)return;
    const {position,color,normal}=obj.geometry.attributes;
    assert.ok(position.count>0 && position.count%3===0);
    assert.equal(color.count,position.count);
    assert.equal(normal.count,position.count);
    for(const value of position.array)assert.ok(Number.isFinite(value));
    count++;
  });
  assert.ok(count>0);
}
for(let id=1;id<=24;id++){
  const source=new URL('../dist/levels/'+String(id).padStart(2,'0')+'.json',import.meta.url);
  const level=JSON.parse(readFileSync(source,'utf8'));
  const scene=new Scene(),stage=new Landscape(scene,level,false);
  inspect(scene);stage.update(17);stage.dispose();assert.equal(scene.children.length,0);
}
for(const kind of ['rubro','glacial','verde','cristalino','tempestade','sombrio','arqueiro','bruto','batedor']){
  const model=dragonModel(kind,true);
  const wing=model.getObjectByName('nearWing');animateDragon(model,1.4);
  assert.ok(wing.rotation.x!==0);inspect(model);disposeTree(model);
}
for(const kind of ['ovo','jaula','barreira','raio','perigo','fagulha','fogo','poder']){
  const model=objectModel(kind);inspect(model);disposeTree(model);
}
console.log('OK · 24 cenas, anatomia articulada, objetos de combate e descarte de geometrias.');
