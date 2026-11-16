import {mkdirSync,writeFileSync} from 'node:fs';
import {AmbientLight,DirectionalLight,OrthographicCamera,Scene} from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import {dragonModel,animateDragon} from '../src/creatures.js';
import {disposeTree} from '../src/mesh.js';
import {installSVGDocument} from './svg_dom.mjs';
installSVGDocument();
const out=new URL('../dist/portraits/',import.meta.url);mkdirSync(out,{recursive:true});
for(const type of ['rubro','verde','cristalino','glacial','tempestade','sombrio']){
 const scene=new Scene(),ambient=new AmbientLight(0xffefee,1.22),key=new DirectionalLight(0xffe7c5,2.05);
 key.position.set(120,205,115);scene.add(ambient,key);
 const camera=new OrthographicCamera(-29,29,20,-20,.1,300);camera.position.set(0,5,80);camera.lookAt(0,5,0);
 const model=dragonModel(type);model.position.x=4;animateDragon(model,.5);scene.add(model);
 const renderer=new SVGRenderer();renderer.setPrecision(1);renderer.setSize(174,120);renderer.render(scene,camera);
 renderer.domElement.setAttribute('xmlns','http://www.w3.org/2000/svg');
 writeFileSync(new URL(type+'.svg',out),renderer.domElement.outerHTML);disposeTree(model);
}
console.log('OK · retratos das seis espécies gerados a partir dos modelos do jogo.');
