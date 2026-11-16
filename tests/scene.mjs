import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Scene} from 'three';
import {Landscape} from '../src/landscape.js';
import {dragonModel,objectModel,animateDragon} from '../src/creatures.js';
import {disposeTree} from '../src/mesh.js';
import {buildNest} from '../src/nest.js';

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
  inspect(scene);stage.update(17);if(level.exploration){for(const route of ['upper','lower','secret']){stage.update(65,{route});inspect(scene);assert.ok(stage.exploreGroup);assert.equal(stage.exploreGroup.children.length,2);}stage.update(91,{route:'secret'});assert.equal(stage.exploreGroup,null);const soft=new Landscape(scene,level,true);soft.update(70,{route:'secret'});inspect(soft.group);soft.dispose();}stage.dispose();assert.equal(scene.children.length,0);
}
for(const kind of ['rubro','glacial','verde','cristalino','tempestade','sombrio','arqueiro','bruto','batedor']){
  const model=dragonModel(kind,true);
  const wing=model.getObjectByName('nearWing');animateDragon(model,1.4);
  assert.ok(wing.rotation.x!==0);inspect(model);disposeTree(model);
}
for(const kind of ['ovo','jaula','barreira','raio','perigo','fagulha','fogo','poder','rota','selo','passagem','tesouro','rotaBaixa','alvo']){
  const model=objectModel(kind);inspect(model);disposeTree(model);
}
console.log('OK · 24 cenas, anatomia articulada, objetos de combate e descarte de geometrias.');

let previousVertices=0;
for(let nest=1;nest<=5;nest++){
 const save={nest,medals:{},eggs:{a:{hatched:false,species:'Verde'}},babies:{a:'Verde',b:'Glacial',c:'Cristalino',d:'Rubro',e:'Sombrio',f:'Tempestade'},companions:['Rubro','Verde']};
 for(const soft of [true,false]){
  const {group,residents}=buildNest(save,soft);inspect(group);
  assert.equal(!!group.getObjectByName('incubator'),nest>=2);
  assert.equal(!!group.getObjectByName('nursery'),nest>=2);
  assert.equal(!!group.getObjectByName('workshop'),nest>=3);
  assert.equal(!!group.getObjectByName('training-target'),nest>=3);
  assert.equal(!!group.getObjectByName('double-perch'),nest>=3);
  assert.equal(!!group.getObjectByName('sanctuary'),nest>=4);
  assert.equal(!!group.getObjectByName('grand-nest'),nest>=5);
  assert.equal(residents.length,soft?3:6);
  let vertices=0;group.traverse(o=>{if(o.isMesh)vertices+=o.geometry.attributes.position.count;});
  if(!soft){assert.ok(vertices>previousVertices);previousVertices=vertices;}
  const geometries=new Set();group.traverse(o=>{if(o.geometry)geometries.add(o.geometry)});let disposed=0;
  for(const g of geometries)g.addEventListener('dispose',()=>disposed++);
  disposeTree(group);assert.equal(disposed,geometries.size);
 }
}
for(const name of ['rubro','verde','glacial','cristalino','tempestade','sombrio']){
 const svg=readFileSync(new URL('../dist/portraits/'+name+'.svg',import.meta.url),'utf8');
 assert.ok(svg.startsWith('<svg'));assert.ok(svg.includes('<path'));assert.ok(!svg.includes('<script'));assert.ok(!svg.includes('http:')||svg.includes('http://www.w3.org/2000/svg'));
}
console.log('OK · cinco níveis do ninho, construções progressivas, população limitada, retratos e descarte de todas as geometrias.');

{
 const scene=new Scene(),yard=new Landscape(scene,{id:0,region:0,training:true},true);
 assert.ok(yard.group.getObjectByName('training-yard'));inspect(yard.group);
 yard.update(0);const positions=yard.layers.map(({pair})=>pair.position.x);yard.update(900);
 assert.deepEqual(yard.layers.map(({pair})=>pair.position.x),positions);
 yard.dispose();assert.equal(scene.children.length,0);
}
console.log('OK · alvo 3D, campo estático e indicador de treino no ninho.');
