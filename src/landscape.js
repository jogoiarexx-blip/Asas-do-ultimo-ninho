import {Group} from 'three';
import {Sculpture,disposeTree} from './mesh.js';
const themes=[
  {sky:['#66527a','#eaa581','#ffdb9a'],ridge:'#aa7e94',rock:'#895972',near:'#564760',top:'#917966',tree:'#3b5350',leaf:'#628071'},
  {sky:['#557b8d','#a6cfc0','#eef4bc'],ridge:'#81a4a0',rock:'#538383',near:'#3c6362',top:'#81ae7d',tree:'#386b69',leaf:'#6cad87'},
  {sky:['#8c748d','#efbb87','#ffe4a2'],ridge:'#c19085',rock:'#ac785f',near:'#8a625c',top:'#e3b482',tree:'#9b7778',leaf:'#ebc6a7'},
  {sky:['#636e9c','#b8cee0','#f2f0e2'],ridge:'#9da7c6',rock:'#7d8baf',near:'#566789',top:'#ccdee0',tree:'#55758a',leaf:'#8eafb8'},
  {sky:['#5d465d','#cd7767','#ffc18c'],ridge:'#a76b78',rock:'#794956',near:'#513c50',top:'#93665f',tree:'#754756',leaf:'#f18c58'},
  {sky:['#3b3756','#986f93','#d9a99e'],ridge:'#876983',rock:'#624f70',near:'#40394e',top:'#766879',tree:'#50465c',leaf:'#aa849a'}
];
function rand(seed){return ()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296}}
const WIDTH=640;
function hills(s,rng,color,base,relief,z,step){
  let last=[-step,base, z];for(let x=0;x<=WIDTH+step;x+=step){
    const y=base+(rng()-.44)*relief,p=[x,y,z],rock=[x-step*.55,y-relief*.18,z+5];
    s.tri(last,p,rock,color,.97);s.tri(last,rock,[last[0],-25,z+4],color,.86);s.quad(rock,p,[p[0],-25,z+4],[last[0],-25,z+4],color,.92);
    last=p;
  }
}
function pine(s,x,y,z,size,th){
  s.rod([x,y,z],[x,y+size*.56,z],size*.065,size*.035,th.near,4);
  for(let i=0;i<3;i++)s.rod([x,y+size*(.12+i*.21),z],[x,y+size*(.66+i*.17),z],size*(.25-i*.055),0,i===2?th.leaf:th.tree,5);
}
function crystal(s,x,y,z,k,th){s.rod([x,y,z],[x+k*.05,y+k*.7,z],k*.2,k*.15,th.tree,5);s.rod([x+k*.05,y+k*.7,z],[x-k*.13,y+k,z],k*.15,0,th.leaf,5)}
function bridge(s,th){
  // Stone voussoirs form an open semicircular arch in each span.
  const stone='#a58c84',edge='#d4ac91',z=-35,span=35,cy=13,inner=13,outer=16;
  for(let i=0;i<6;i++){
    const cx=128+i*span;
    for(let k=0;k<9;k++){
      const at=(r,a,depth)=>[cx+Math.cos(a)*r,cy+Math.sin(a)*r,z+depth];
      const a=k*Math.PI/9,b=(k+1)*Math.PI/9;
      s.quad(at(inner,a,4),at(outer,a,4),at(outer,b,4),at(inner,b,4),k%3?stone:edge);
      s.quad(at(inner,b,-4),at(inner,a,-4),at(inner,a,4),at(inner,b,4),th.near);
      s.quad(at(outer,b,4),at(outer,a,4),[cx+Math.cos(a)*outer,32,z+4],[cx+Math.cos(b)*outer,32,z+4],stone,.86);
    }
    s.box(cx-span/2,cy-5,z,7,33,10,stone);s.box(cx,33,z,35,3,12,edge);
    for(let j=-1;j<=1;j++)s.box(cx+j*12,36,z+5,5,4,2,stone);
  }
  for(const x of [109,321]){s.box(x,40,z,12,27,13,th.rock);s.rod([x,53,z],[x,65,z],10,0,th.tree,4);s.box(x,45,z+6.7,2.2,7,.2,th.near)}
}
function ruins(s,x,y,z,th){
  s.rod([x-2,y-54,z],[x,y-2,z],25,12,th.rock,7);s.rod([x,y-2,z],[x,y+.3,z],12,11,th.top,7);
  s.box(x,y+9,z,11,18,10,th.rock);s.box(x,y+19,z,14,2,12,th.top);for(const dx of [-5,0,5])s.box(x+dx,y+21,z+4,2.5,3,3,th.rock);s.box(x,y+13,z+5.2,2.4,6,.4,th.near)}
export class Landscape{
  constructor(scene,level,lightweight){
    this.group=new Group();scene.add(this.group);this.layers=[];
    const th=themes[level.region],rng=rand(level.id*8191);
    this.gradient='linear-gradient('+th.sky[0]+', '+th.sky[1]+' 53%, '+th.sky[2]+' 89%)';
    const sky=new Sculpture();const sun=[360,159,-175],radius=21;for(let k=0;k<36;k++){const a=k*Math.PI/18,b=(k+1)*Math.PI/18;sky.tri(sun,[sun[0]+Math.cos(a)*radius,sun[1]+Math.sin(a)*radius,-175],[sun[0]+Math.cos(b)*radius,sun[1]+Math.sin(b)*radius,-175],'#fff1bc')}
    this.group.add(sky.mesh());
    const clouds=new Sculpture();for(let i=0;i<12;i++){
      const x=rng()*WIDTH,y=118+rng()*78,w=9+rng()*30;
      clouds.body([[x-w,y,0,.2,.1],[x-w*.45,y+.5,0,1.1,1],[x,y+2,0,2.8,1.5],[x+w*.65,y+.2,0,1.6,1],[x+w,y,0,.1,.1]],'#f4c6ad',4);
    }
    this.layer(clouds,1.5,-150);
    const far=new Sculpture();hills(far,rng,th.ridge,102,72,-115,32);this.layer(far,3.6,0);
    const mid=new Sculpture();hills(mid,rng,th.rock,65,56,-78,23);
    if(level.id===2){const viaduct=new Sculpture();bridge(viaduct,th);for(let i=1;i<viaduct.positions.length;i+=3)viaduct.positions[i]+=17;mid.positions.push(...viaduct.positions);mid.colors.push(...viaduct.colors)}else{for(let k=0;k<3;k++){const x=72+k*207;if(level.region===0||level.region===5)ruins(mid,x,65,-59,th);else crystal(mid,x,68,-59,22+rng()*23,th)}}
    this.layer(mid,level.id===2?5.2:6.2,0);
    const front=new Sculpture();let pts=[];const step=32;
    for(let x=0;x<=WIDTH;x+=step){const y=13+(rng()-.5)*14;pts.push([x,y,-26]);}
    for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],m=[(a[0]+b[0])/2-3,Math.min(a[1],b[1])-10,-18];front.tri(a,b,m,th.top);front.quad(a,m,[m[0],-22,-13],[a[0],-22,-13],th.near);front.quad(m,b,[b[0],-22,-13],[m[0],-22,-13],th.rock,.77);
      const n=lightweight?1:2;for(let j=0;j<n;j++){
        const x=a[0]+4+j*13+rng()*6,size=9+rng()*15;
        if([0,1,3].includes(level.region))pine(front,x,a[1],-25-rng()*5,size,th);else crystal(front,x,a[1],-25,size,th);
      }
    }
    this.layer(front,14,0);
    const grove=new Sculpture();
    for(let k=0;k<6;k++){
      const x=28+k*110+rng()*30,h=14+rng()*10;
      grove.rod([x,-28,-10],[x,2,-10],30,14,th.near,6);
      if([0,1,3].includes(level.region)){pine(grove,x-7,1,-8,h,th);pine(grove,x+4,1,-9,h*1.5,th)}
      else crystal(grove,x,1,-9,h*1.25,th);
    }
    this.layer(grove,20,0);
  }
  layer(s,speed,z){const m=s.mesh();const pair=new Group();pair.add(m);const twin=m.clone();twin.position.x=WIDTH;pair.add(twin);pair.position.z=z;this.group.add(pair);this.layers.push({pair,speed})}
  update(t){for(const {pair,speed} of this.layers)pair.position.x=-(t*speed%WIDTH)}
  dispose(){this.group.removeFromParent();disposeTree(this.group)}
}
