import {Group} from 'three';
import {Sculpture} from './mesh.js';
import {dragonModel, objectModel} from './creatures.js';

const family={Rubro:'rubro',Verde:'verde',Cristalino:'cristalino',Glacial:'glacial',Tempestade:'tempestade',Sombrio:'sombrio'};
function structure(name,sculpture,group){const mesh=sculpture.mesh();mesh.name=name;group.add(mesh);return mesh;}
function ring(s,x,y,z,r,color){for(let i=0;i<14;i++){const a=i*Math.PI/7,b=(i+1)*Math.PI/7;s.rod([x+Math.cos(a)*r,y,z+Math.sin(a)*r*.7],[x+Math.cos(b)*r,y,z+Math.sin(b)*r*.7],.35,.35,color,4);}}
function crystal(s,x,y,z,size,color){s.rod([x,y,z],[x,y+size*.5,z],0,size*.22,color,5);s.rod([x,y+size*.5,z],[x,y+size,z],size*.22,0,color,5);}

// All buildings use the same mesh pipeline as the flight scene; no external assets.
export function buildNest(save,lightweight=false){
  const group=new Group(),level=Math.max(1,Math.min(5,save.nest||1)),residents=[];
  group.name='nest-level-'+level;
  const land=new Sculpture(),radius=level>=5?30:level>=3?27:24;
  land.rod([0,-13,0],[0,-4,0],10,radius,'#6e566a',10);
  land.rod([0,-4,0],[0,-1,0],radius,radius-1,'#6b8876',10);
  land.rod([0,-1,0],[0,0,0],radius-1,radius-1,'#91a783',10);
  structure('island',land,group);
  const nest=new Sculpture();
  for(let k=0;k<(level===1?11:16);k++){
    const a=k*Math.PI/8,b=(k+1.8)*Math.PI/8;
    nest.rod([Math.cos(a)*10,1,Math.sin(a)*7],[Math.cos(b)*10,2,Math.sin(b)*7],.7,1,k%2?'#ac805d':'#d2a980',5);
  }
  ring(nest,0,.3,0,10,'#c7ac79');structure('hero-nest',nest,group);
  const hero=dragonModel('rubro',!!save.medals[4]);hero.scale.setScalar(.46);hero.position.set(1,4,0);hero.name='hero';group.add(hero);

  if(level>=2){
    const a=new Sculpture(),x=-16,z=3;
    a.rod([x,0,z],[x,1,z],6.5,6.5,'#d1b288',8);ring(a,x,1.4,z,5,'#e7c599');
    for(const dx of [-4.5,4.5]){a.rod([x+dx,1,z],[x+dx,10,z],.45,.45,'#c09c73',5);}
    a.rod([x,10,z],[x,14,z],6.4,0,'#7a9e91',7);
    crystal(a,x,12,z,2,'#f7d89a');structure('incubator',a,group);
    const beds=new Sculpture();
    for(const dz of [-1,6]){beds.rod([15,0,dz],[15,.7,dz],4,4,'#a79c72',7);ring(beds,15,1,dz,3.7,'#d8b68c');}
    structure('nursery',beds,group);
  }
  if(level>=3){
    const a=new Sculpture(),x=-15,z=-12;
    for(const dx of [-4,4])for(const dz of [-3,3])a.rod([x+dx,0,z+dz],[x+dx,8,z+dz],.5,.5,'#b59b80',5);
    a.box(x,8,z,11,1.2,9,'#8f7686');a.rod([x,8,z],[x,13,z],7,0,'#bd8b7a',4);
    a.box(x,2.2,z,5,1,3,'#6d6779');a.box(x,1,z,2,2,2,'#6d6779');
    a.rod([x+1,2.8,z],[x+3,5,z],.3,.3,'#bd986e',4);a.box(x+3,5,z,2,1,1,'#d3c5b5');
    structure('workshop',a,group);
    const training=new Sculpture();
    training.rod([1,0,17],[1,4,17],.5,.5,'#c8ac88',5);
    for(const [r,color,z] of [[3.3,'#dfc6a1',17],[2.3,'#b7798b',17.2],[1.2,'#e9dda8',17.4]]){
      for(let k=0;k<12;k++){const u=k*Math.PI/6,v=(k+1)*Math.PI/6;training.tri([1,6,z],[1+Math.cos(u)*r,6+Math.sin(u)*r,z],[1+Math.cos(v)*r,6+Math.sin(v)*r,z],color);}
    }
    structure('training-target',training,group);
    const perch=new Sculpture();
    for(const dx of [-4,4]){perch.rod([15+dx,0,-10],[15+dx,7,-10],.6,.6,'#d4b792',5);ring(perch,15+dx,7,-10,2.5,'#d4b792');}
    perch.box(15,4,-10,12,.7,2,'#ad9278');structure('double-perch',perch,group);
  }
  if(level>=4){
    const a=new Sculpture();
    for(const x of [-5.5,5.5]){a.rod([x,0,-17],[x,13,-17],1,1,'#d3b9b5',6);a.box(x,13,-17,3.2,1,3,'#f1d8b8');}
    a.box(0,14,-17,14,1.4,3,'#d3b9b5');a.rod([0,.1,-17],[0,1.8,-17],6,5,'#a295ac',7);
    crystal(a,0,7,-17,5,'#b9e4ec');ring(a,0,2,-17,4.2,'#bedcd5');
    structure('sanctuary',a,group);
  }
  if(level>=5){
    const a=new Sculpture();
    for(const x of [-23,23]){
      a.rod([x,0,-7],[x,16,-7],2.2,2,'#d5b7a6',7);a.rod([x,16,-7],[x,22,-7],3,0,'#879c9f',6);
      a.rod([x,16,-7],[x,25,-7],.3,.3,'#f7d89a',4);
      a.quad([x,24,-7],[x+4,23,-7],[x+4,18,-7],[x,19,-7],'#b7788c');
    }
    ring(a,0,.5,0,27,'#ddcda5');
    for(let i=0;i<8;i++){const angle=i*Math.PI/4;crystal(a,Math.cos(angle)*25,1,Math.sin(angle)*19,2,'#c7e4c4');}
    structure('grand-nest',a,group);
  }

  const eggs=Object.values(save.eggs).filter(e=>!e.hatched);
  for(let i=0;i<Math.min(eggs.length,3);i++){
    const egg=objectModel('ovo');egg.scale.setScalar(.22);egg.position.set(level>=2?-18+i*1.8:-5+i*2,level>=2?2:1.6,level>=2?4:6);egg.name='incubating-egg';group.add(egg);
  }
  const known=[...new Set(Object.values(save.babies))].filter(s=>family[s]);
  const team=(save.companions||[save.companion]).filter(s=>family[s]);
  const population=[...new Set([...team,...known])].slice(0,lightweight?3:6);
  population.forEach((name,i)=>{
    const baby=dragonModel(family[name]);baby.scale.setScalar(.18);
    const angle=i*1.08-.7;
    const home=[Math.cos(angle)*16,2,Math.sin(angle)*12+1];
    baby.position.set(...home);baby.rotation.y=-angle;baby.name='resident-'+name;
    residents.push({model:baby,home,phase:i*1.2});group.add(baby);
  });
  return {group,hero,residents,level};
}
