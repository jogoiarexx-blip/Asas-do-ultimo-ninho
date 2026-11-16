import {AmbientLight,DirectionalLight,Group,OrthographicCamera,PerspectiveCamera,Scene,WebGLRenderer,REVISION} from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import {dragonModel,animateDragon,objectModel} from './creatures.js';
import {Landscape} from './landscape.js';
import {Sculpture,disposeTree} from './mesh.js';

function viewport(host){
  let backend,soft=false;
  try {backend=new WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});backend.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));backend.setClearColor(0x000000,0)}
  catch {soft=true;backend=new SVGRenderer();backend.setPrecision(1)}
  host.replaceChildren(backend.domElement);host.dataset.engine='Three.js r'+REVISION;host.dataset.renderer=soft?'SVG':'WebGL';
  let w=0,h=0;
  return {soft,render(scene,camera){
    const width=host.clientWidth,height=host.clientHeight;if(!width||!height)return;
    if(width!==w||height!==h){
      w=width;h=height;backend.setSize(w,h);
      if(camera.isPerspectiveCamera){camera.aspect=w/h;camera.updateProjectionMatrix()}
      else if(camera.isOrthographicCamera){
        const worldWidth=480,worldHeight=222,aspect=w/h;
        const viewWidth=Math.max(worldWidth,worldHeight*aspect);
        const viewHeight=Math.max(worldHeight,worldWidth/aspect);
        camera.left=-viewWidth/2;camera.right=viewWidth/2;
        camera.top=viewHeight/2;camera.bottom=-viewHeight/2;
        camera.updateProjectionMatrix();
      }
    }
    backend.render(scene,camera);if(soft)backend.domElement.style.backgroundColor='transparent';
  },dispose(){backend.dispose?.();backend.forceContextLoss?.();backend.domElement.remove()}}
}
function lightScene(){
  const s=new Scene();s.add(new AmbientLight(0xffefee,1.22));
  const key=new DirectionalLight(0xffe7c5,2.05);key.position.set(120,205,115);s.add(key);
  const rim=new DirectionalLight(0xb8b8f0,.7);rim.position.set(-130,78,-60);s.add(rim);return s;
}
const elemental=['rubro','verde','cristalino','glacial','tempestade','sombrio'];
const family={Rubro:'rubro',Verde:'verde',Cristalino:'cristalino',Glacial:'glacial',Tempestade:'tempestade',Sombrio:'sombrio'};
const creatures=new Set(['jogador','companheiro','filhote','boss','sentinela','bruto','arqueiro','batedor']);
function modelFor(kind,region,save){
  let model,scale=1;
  if(creatures.has(kind)){
    const type={jogador:'rubro',companheiro:family[save.companion]||'verde',filhote:'verde',boss:elemental[region],sentinela:'bruto'}[kind]||kind;
    model=dragonModel(type,kind==='boss'||(kind==='jogador'&&!!save.medals[4]));
    scale={jogador:save.medals[12]?1:.79,companheiro:.37,filhote:.45,boss:1.77,sentinela:.88,bruto:.63,arqueiro:.52,batedor:.46}[kind];
    model.scale.setScalar(scale);
    if(!['jogador','filhote','companheiro'].includes(kind))model.rotation.y=Math.PI;
  }else model=objectModel(kind);
  return model;
}
export class FlightView{
  constructor(host){
    this.host=host;this.view=viewport(host);this.scene=lightScene();
    this.camera=new OrthographicCamera(-240,240,111,-111,.1,750);
    this.camera.position.set(240,111,310);this.camera.lookAt(240,111,0);
    this.actors=new Group();this.scene.add(this.actors);
    this.active=new Map();this.templates=new Map();this.playerKey={};this.buddyKey={};this.lastFrame=-10;
  }
  reset(level){
    this.land?.dispose();this.clearActors();this.land=new Landscape(this.scene,level,this.view.soft);
    this.host.style.background=this.land.gradient;this.lastFrame=-10;this.lastY=null;
  }
  clearActors(){this.actors.clear();this.active.clear();for(const mesh of this.templates.values())disposeTree(mesh);this.templates.clear()}
  release(){this.land?.dispose();this.land=null;this.clearActors()}
  update(level,run,save,particles){
    const t=run.t;
    if(this.view.soft && t>=this.lastFrame && t-this.lastFrame<1/22)return;
    this.lastFrame=t;this.land.update(t);
    const visited=new Set();
    const place=(key,kind,x,y,z=0)=>{
      visited.add(key);let item=this.active.get(key);
      if(!item||item.kind!==kind){
        if(item)item.model.removeFromParent();
        if(!this.templates.has(kind))this.templates.set(kind,modelFor(kind,level.region,save));
        const model=this.templates.get(kind).clone();this.actors.add(model);item={kind,model};this.active.set(key,item);
      }
      item.model.position.set(x,222-y,z);item.model.visible=true;return item.model;
    };
    const p=run.p,player=place(this.playerKey,'jogador',p.x,p.y,6);
    const slope=Math.max(-.3,Math.min(.3,((this.lastY??p.y)-p.y)*.075));this.lastY=p.y;
    this.bank=(this.bank||0)*.76+slope*.24;animateDragon(player,t,this.bank);
    player.visible=p.inv<=0||Math.floor(t*11)%4!==0||t<1;
    if(save.companion){const b=place(this.buddyKey,'companheiro',p.x-21,p.y+8+Math.sin(t*3)*2,2);animateDragon(b,t+.5)}
    for(const e of run.entities){
      if(e.dead)continue;const m=place(e,e.kind,e.kind==='raio'?240:e.x,e.y,1);
      if(creatures.has(e.kind))animateDragon(m,t+e.serial*.23);
      else if(e.kind==='ovo'){m.rotation.y=t*1.4;m.position.y+=Math.sin(t*3.3)*1.5}
      else if(e.kind==='jaula')m.rotation.y=.28+Math.sin(t)*.09;
      else if(e.kind==='barreira')m.rotation.y=t*.4;
      else if(e.kind==='raio'){m.scale.y=e.age<1.8?.4:5;m.visible=e.age>=1.8||Math.floor(t*10)%3!==0}
      if(['boss','sentinela','bruto','arqueiro'].includes(e.kind)&&e.cool<.48&&e.x<450){
        const aim=place('aviso:'+e.serial,'poder',e.x-(e.kind==='boss'?26:10),e.y-2,5);aim.scale.setScalar(.45+Math.max(0,.48-e.cool)*1.2);
      }
    }
    for(const s of run.shots){const m=place(s,s.special?'poder':'fogo',s.x,s.y,7);m.rotation.z=-Math.atan2(s.vy,s.v)}
    for(const b of run.bullets){const m=place(b,'perigo',b.x,b.y,7);m.rotation.z=t*5}
    for(const fx of particles.slice(-(this.view.soft?18:65))){const m=place(fx,'fagulha',fx.x,fx.y,8);m.scale.setScalar(Math.max(.24,fx.life*4))}
    for(const [key,item] of this.active)if(!visited.has(key)){item.model.removeFromParent();this.active.delete(key)}
    this.view.render(this.scene,this.camera);
  }
}
export function nestView(host,save){
  const screen=viewport(host),scene=lightScene(),group=new Group();scene.add(group);
  const camera=new PerspectiveCamera(32,1,.1,420);camera.position.set(30,25,77);camera.lookAt(0,5,0);
  const island=new Sculpture();island.rod([0,-9,0],[0,-3,0],10,22,'#735566',9);island.rod([0,-3,0],[0,-1,0],22,21,'#88926e',9);
  for(let k=0;k<14;k++){
    const a=k*Math.PI/7,b=(k+1.6)*Math.PI/7;island.rod([Math.cos(a)*17,-.2,Math.sin(a)*12],[Math.cos(b)*17,1.1,Math.sin(b)*12],.9,1.25,k%2?'#a97e56':'#ca9f6f',5);
  }
  group.add(island.mesh());const hero=dragonModel('rubro',!!save.medals[4]);hero.scale.setScalar(.65);hero.position.set(2,6,0);group.add(hero);
  const eggCount=Object.values(save.eggs).filter(e=>!e.hatched).length;
  for(let i=0;i<Math.min(eggCount,4);i++){const egg=objectModel('ovo');egg.scale.setScalar(.33);egg.position.set(-12+i*3.2,1.6,8);group.add(egg)}
  if(save.companion){const b=dragonModel(family[save.companion]||'verde');b.scale.setScalar(.25);b.position.set(10,2,9);group.add(b)}
  let yaw=-.44,drag=null,frame=0,prev=-1;
  host.onpointerdown=e=>{drag=[e.clientX,yaw];host.setPointerCapture(e.pointerId)};
  host.onpointermove=e=>{if(drag)yaw=drag[1]+(e.clientX-drag[0])*.012};
  host.onpointerup=host.onpointercancel=()=>drag=null;
  host.onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){yaw+=e.key==='ArrowLeft'?-.2:.2;e.preventDefault()}};
  function render(now){frame=requestAnimationFrame(render);if(now-prev<(screen.soft?100:40))return;prev=now;group.rotation.y=yaw;animateDragon(hero,now/1400,.03);screen.render(scene,camera)}
  frame=requestAnimationFrame(render);
  return ()=>{cancelAnimationFrame(frame);disposeTree(group);screen.dispose();host.onpointerdown=host.onpointermove=host.onpointerup=host.onpointercancel=host.onkeydown=null};
}
