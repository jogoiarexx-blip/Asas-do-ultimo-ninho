// Minimal SVG document for generating static art from the actual Three.js models.
export class SVGNode {
 constructor(tag){this.tag=tag;this.attrs={};this.childNodes=[];this.style={};this.dataset={};}
 setAttribute(key,value){this.attrs[key]=String(value)}
 appendChild(node){node.parent=this;this.childNodes.push(node)}
 removeChild(node){this.childNodes.splice(this.childNodes.indexOf(node),1)}
 replaceChildren(...nodes){this.childNodes=nodes}
 addEventListener(){}
 remove(){}
 getContext(){return null}
 get outerHTML(){return '<'+this.tag+' '+Object.entries(this.attrs).map(([key,value])=>key+'="'+value.replaceAll('"','&quot;')+'"').join(' ')+'>'+this.childNodes.map(node=>node.outerHTML).join('')+'</'+this.tag+'>'}
}
export function installSVGDocument(){globalThis.document={createElementNS:(ns,tag)=>new SVGNode(tag)};}
