import {Group} from 'three';
import {Sculpture} from './mesh.js';

const dyes={
  rubro:['#bd4939','#ff9651','#ffe6a9','#8c2f45'],verde:['#287e77','#74cbb3','#e5eeb8','#315768'],
  glacial:['#537fb0','#9de7eb','#f3ffeb','#5665a0'],cristalino:['#996da3','#d8bce2','#fff3c6','#574777'],
  tempestade:['#6e67ae','#c0a6e9','#ffea8b','#515177'],sombrio:['#694361','#ba819b','#f4c3aa','#45324d'],
  batedor:['#66466e','#ab7391','#ffdca5','#583953'],arqueiro:['#2d617b','#61a1a5','#ffdca3','#324c68'],
  bruto:['#6c5367','#c18372','#ffd2a3','#554057']
};
function wing(side,dye){
  const w=new Sculpture(),s=side;
  const root=[2,1,2*s],joint=[-3,10,6*s],knuckle=[-8,18,10*s];
  const tips=[[-24,22,14*s],[-22,10,12*s],[-18,5,8*s],[-12,1,6*s],[-6,-1,4*s]];
  const inner=[-6,6,7*s];
  w.tri(root,joint,inner,dye[0]);w.tri(joint,knuckle,inner,dye[1]);
  for(let i=0;i<tips.length-1;i++){
    let a=tips[i],b=tips[i+1],cut=[(a[0]+b[0])/2+2,(a[1]+b[1])/2+1.6,(a[2]+b[2])/2];
    w.tri(knuckle,a,cut,i%2?dye[1]:dye[0]);w.tri(knuckle,cut,b,dye[1],.88);
  }
  w.tri(inner,knuckle,tips[4],dye[0]);w.tri(inner,tips[4],root,dye[3]);
  w.rod(root,joint,1.2,.8,dye[3]);w.rod(joint,knuckle,.8,.65,dye[0]);for(const tip of tips)w.rod(knuckle,tip,.48,.08,dye[3],4);
  w.rod(knuckle,[-7,20.7,11*s],.7,0,dye[2]);return w.mesh()
}
export function dragonModel(type='rubro',crowned=false){
  const d=dyes[type]||dyes.rubro, body=new Sculpture(), g=new Group();
  body.body([[-11,-.4,0,1.8,1.9],[-7,1,0,3.6,3.6],[0,2,0,4.1,3.8],[4,2.2,0,3.4,3.2],[7,3.6,0,2.4,2.5],[10,6.2,0,2.2,2.3],[12,6.8,0,2.7,2.8],[15,7,0,2.1,2.7],[19,6.2,0,1.2,1.8]],d[0]);
  body.body([[-8,-.4,.1,1.8,2],[0,-.1,.2,2.1,2.5],[5,1.3,.2,1.5,2.2],[9,4.1,.3,1.2,1.5],[14,5.1,.3,.8,1.8],[18.8,5.6,.2,.45,1.5]],d[2],7);
  for(const s of [-1,1]){
    body.rod([12,8.3,1.7*s],[9,12,2.6*s],1.15,.55,d[2]);body.rod([9,12,2.6*s],[6.5,crowned?15:12.8,3*s],.6,0,d[2]);
    body.rod([13.9,7.8,2.55*s],[14.5,7.9,2.8*s],.7,.6,'#ffde73');body.box(14.4,7.9,2.91*s,.28,.92,.3,'#271e30');
    body.rod([-5,-.6,2*s],[-7,-4.8,2.7*s],1.3,.9,d[0]);body.rod([-7,-4.8,2.7*s],[-10,-4.4,3*s],.9,.3,d[2]);
    body.rod([3,1.3,2.2*s],[2,-2.6,3.4*s],.95,.62,d[0]);body.rod([2,-2.6,3.4*s],[.2,-3.6,3.4*s],.65,.18,d[2]);
  }
  for(let i=0;i<6;i++){const x=-8+i*3;const y=4.6+i*.36;body.rod([x,y,0],[x-1.7,y+1.9+(crowned?.7:0),0],.9,0,d[2],4)}
  if(type==='bruto'||crowned)for(let i=0;i<3;i++)body.rod([-6+i*3,3.5,2],[-6+i*3,6,2.5],1.4,.5,d[3]);
  g.add(body.mesh());
  const tail=new Sculpture();tail.body([[-18,4,-2,.12,.2],[-15,1,-1,.7,.8],[-11,-1,0,1,1.2],[-6,-1.6,0,1.35,1.4],[0,0,0,1.85,1.9]],d[0],7);
  const tailMesh=tail.mesh();tailMesh.name='tail';tailMesh.position.set(-10,-.3,0);g.add(tailMesh);
  for(const s of [-1,1]){const w=wing(s,d);w.name=s===1?'nearWing':'farWing';g.add(w)}
  return g;
}
export function animateDragon(g,t,tilt=0){
  const phase=t*6.3;
  g.getObjectByName('nearWing').rotation.x=.22+Math.sin(phase)*.48;
  g.getObjectByName('farWing').rotation.x=-.43-Math.sin(phase)*.5;
  g.getObjectByName('tail').rotation.z=Math.sin(t*4)*.11;
  g.rotation.z=tilt+Math.sin(t*3.3)*.025;
}
export function objectModel(kind){
  const a=new Sculpture();
  if(kind==='ovo'){
    a.body([[-5,0,0,.4,.5],[-3.5,0,0,3.9,3.5],[0,0,0,5.3,4.7],[3.5,0,0,3.5,3.2],[6.8,0,0,.2,.2]],'#ffc35e',9);
    const m=a.mesh();m.rotation.z=Math.PI/2;const g=new Group();g.add(m);
    const spark=new Sculpture();spark.rod([6,2,1],[6,6,1],1.1,0,'#fff2a3',4);spark.rod([6,2,1],[6,-.3,1],1.1,0,'#ffdc7a',4);g.add(spark.mesh());return g;
  }
  if(kind==='jaula'){
    const g=new Group(),baby=dragonModel('verde');baby.scale.setScalar(.36);g.add(baby);
    a.box(0,-8.4,0,20,2.3,14,'#714d4a');a.box(0,8.7,0,20,2,14,'#7e6863');
    for(const x of [-8.4,-3,3,8.4])for(const z of [-6,6])a.rod([x,-7.5,z],[x,8,z],.57,.57,'#d3b29b',4);
    a.rod([0,9,0],[0,13,0],1.5,.6,'#ffde85');g.add(a.mesh());return g;
  }
  if(kind==='barreira'){a.rod([0,-20,0],[0,-6,0],0,7,'#6b577f',6);a.rod([0,-6,0],[1,12,0],7,5,'#a67d96',6);a.rod([1,12,0],[-2,22,0],5,0,'#dc9eac',6)}
  else if(kind==='raio'){a.box(0,0,0,480,1.3,1,'#ffcaa4')}
  else if(kind==='perigo'){a.rod([0,-2.8,0],[0,0,0],0,3,'#ff5c84',6);a.rod([0,0,0],[0,3,0],3,0,'#fff3d3',6)}
  else if(kind==='fagulha'){a.rod([0,-.7,0],[0,1.1,0],.8,0,'#ffcc91',4)}
  else{const special=kind==='poder';a.body([[-9,0,0,0,0],[-2,0,0,1.7,1.8],[1,0,0,2.1,2],[4,0,0,.2,.3]],special?'#87c7ff':'#ff923c',6);a.body([[-4,.4,1,0,0],[0,.4,1,1.2,1.3],[3,.4,1,.3,.4]],special?'#ecfbff':'#fff7ac',5)}
  const g=new Group();g.add(a.mesh());return g;
}
