// Static parts share one colored buffer per articulated piece. Coordinates use Y up.
import {BufferGeometry,Float32BufferAttribute,Color,Mesh,MeshLambertMaterial,DoubleSide,Vector3} from 'three';

const surface=new MeshLambertMaterial({vertexColors:true,flatShading:true,side:DoubleSide});
const colors=new Map();
function colorOf(key){if(!colors.has(key))colors.set(key,new Color(key));return colors.get(key)}
export class Sculpture{
  constructor(){this.positions=[];this.colors=[]}
  tri(a,b,c,color,shade=1){
    this.positions.push(...a,...b,...c);
    const v=colorOf(color);
    for(let i=0;i<3;i++)this.colors.push(v.r*shade,v.g*shade,v.b*shade);
  }
  quad(a,b,c,d,color,shade=1){this.tri(a,b,c,color,shade);this.tri(a,c,d,color,shade)}
  // Cross sections along the X axis form snouts, torsos and tapering tails.
  body(rings,color,n=8){
    const circles=rings.map(([x,y,z,ry,rz])=>Array.from({length:n},(_,i)=>{
      const a=2*Math.PI*i/n;return [x,y+Math.cos(a)*ry,z+Math.sin(a)*rz];
    }));
    for(let j=1;j<circles.length;j++)for(let i=0;i<n;i++){
      const k=(i+1)%n;this.quad(circles[j-1][i],circles[j-1][k],circles[j][k],circles[j][i],color,1-(i%3)*.035);
    }
    for(const [j,reverse] of [[0,true],[rings.length-1,false]])for(let i=1;i<n-1;i++){
      const a=circles[j];this.tri(a[0],a[reverse?i+1:i],a[reverse?i:i+1],color);
    }
  }
  // Tapered rods in any direction, used for horns, wing bones and terrain.
  rod(a,b,ra,rb,color,n=5){
    const axis=new Vector3(b[0]-a[0],b[1]-a[1],b[2]-a[2]).normalize();
    const tangent=new Vector3().crossVectors(axis,Math.abs(axis.y)>.88?new Vector3(1,0,0):new Vector3(0,1,0)).normalize();
    const normal=new Vector3().crossVectors(axis,tangent);
    const ring=(p,r)=>Array.from({length:n},(_,i)=>{
      const v=tangent.clone().multiplyScalar(r*Math.cos(i*2*Math.PI/n)).addScaledVector(normal,r*Math.sin(i*2*Math.PI/n));return [p[0]+v.x,p[1]+v.y,p[2]+v.z]
    });
    const lo=ring(a,ra),hi=ring(b,rb);
    for(let i=0;i<n;i++){const k=(i+1)%n;this.quad(lo[i],lo[k],hi[k],hi[i],color);if(rb)this.tri(b,hi[i],hi[k],color);if(ra)this.tri(a,lo[k],lo[i],color)}
  }
  box(x,y,z,w,h,d,color){
    const a=[x-w/2,y-h/2,z-d/2],b=[x+w/2,y+h/2,z+d/2],p=(i,j,k)=>[i?b[0]:a[0],j?b[1]:a[1],k?b[2]:a[2]];
    const faces=[[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]];
    for(const f of faces)this.quad(...f.map(t=>p(...t)),color);
  }
  mesh(){
    const g=new BufferGeometry();g.setAttribute('position',new Float32BufferAttribute(this.positions,3));g.setAttribute('color',new Float32BufferAttribute(this.colors,3));g.computeVertexNormals();g.computeBoundingSphere();
    return new Mesh(g,surface);
  }
}
export function disposeTree(tree){
  const unique=new Set();tree.traverse(obj=>{if(obj.geometry)unique.add(obj.geometry)});for(const geo of unique)geo.dispose();
}
