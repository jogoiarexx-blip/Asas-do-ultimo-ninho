var Ninho3D=(()=>{var Io=Object.defineProperty;var gh=Object.getOwnPropertyDescriptor;var _h=Object.getOwnPropertyNames;var xh=Object.prototype.hasOwnProperty;var vh=(i,t)=>{for(var e in t)Io(i,e,{get:t[e],enumerable:!0})},yh=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _h(t))!xh.call(i,s)&&s!==e&&Io(i,s,{get:()=>t[s],enumerable:!(n=gh(t,s))||n.enumerable});return i};var Mh=i=>yh(Io({},"__esModule",{value:!0}),i);var jm={};vh(jm,{FlightView:()=>tl,nestView:()=>Qm});var Fl=0,aa=1,Ol=2;var us=1,Bl=2,Li=3,qn=0,ze=1,ke=2,ii=0,Di=1,la=2,ca=3,ha=4,zl=5;var si=100,kl=101,Vl=102,Gl=103,Hl=104,Wl=200,Xl=201,ql=202,Yl=203,ua=204,da=205,Zl=206,Jl=207,$l=208,Kl=209,Ql=210,jl=211,tc=212,ec=213,nc=214,Qs=0,js=1,tr=2,Si=3,er=4,nr=5,ir=6,sr=7,Ir=0,ic=1,sc=2,mn=0,fa=1,pa=2,ma=3,ga=4,_a=5,xa=6,va=7;var ya=300,ri=301,Ni=302,Lr=303,Dr=304,rr=1e3,ln=1001,or=1002,Ae=1003,rc=1004;var ds=1005;var Be=1006,Nr=1007;var Rn=1008;var Ge=1009,Ma=1010,Sa=1011,Ui=1012,Ur=1013,nn=1014,sn=1015,rn=1016,Fr=1017,Or=1018,oi=1020,ba=35902,wa=35899,Ta=1021,Aa=1022,on=1023,An=1026,Pn=1027,Ea=1028,Br=1029,Yn=1030,zr=1031;var kr=1033,fs=33776,ps=33777,ms=33778,gs=33779,Vr=35840,Gr=35841,Hr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,Zr=37488,Jr=37489,_s=37490,$r=37491,Kr=37808,Qr=37809,jr=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,oo=37817,ao=37818,lo=37819,co=37820,ho=37821,uo=36492,fo=36494,po=36495,mo=36283,go=36284,xs=36285,_o=36286;var Zi=2300,ar=2301,$s=2302,ta=2303,ea=2400,na=2401,ia=2402;var oc=3200;var xo=0,ac=1,In="",Ue="srgb",Ji="srgb-linear",$i="linear",le="srgb";var Ks=7680;var lc=519,cc=512,hc=513,uc=514,Ca=515,dc=516,fc=517,Ra=518,Pa=519,pc=35044;var Ia="300 es",Ze=2e3,bi=2001;function Sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mc(){let i=Ki("canvas");return i.style.display="block",i}var dl={},wi=null;function La(...i){let t="THREE."+i.shift();wi?wi("log",t,...i):console.log(t,...i)}function gc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=gc(i);let t="THREE."+i.shift();if(wi)wi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=gc(i);let t="THREE."+i.shift();if(wi)wi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Yi(...i){let t=i.join(" ");t in dl||(dl[t]=!0,Vt(...i))}function _c(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xc={[Qs]:Qs,[tr]:ir,[er]:er,[Si]:nr,[js]:js,[ir]:tr,[sr]:sr,[nr]:Si},hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lo=Math.PI/180,lr=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function wh(i,t){return(i%t+t)%t}function Do(i,t,e){return(1-e)*i+e*t}function vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Da(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Th(i,t){if(t.constructor===Float32Array)return i;let e=Da(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Ah(i,t){if(t.constructor===Float32Array)return i;let e=Da(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Zt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],m=n[s+3],h=r[o+0],u=r[o+1],g=r[o+2],S=r[o+3];if(m!==S||l!==h||c!==u||f!==g){let p=l*h+c*u+f*g+m*S;p<0&&(h=-h,u=-u,g=-g,S=-S,p=-p);let d=1-a;if(p<.9995){let M=Math.acos(p),T=Math.sin(M);d=Math.sin(d*M)/T,a=Math.sin(a*M)/T,l=l*d+h*a,c=c*d+u*a,f=f*d+g*a,m=m*d+S*a}else{l=l*d+h*a,c=c*d+u*a,f=f*d+g*a,m=m*d+S*a;let M=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=M,c*=M,f*=M,m*=M}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],m=r[o],h=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+f*m+l*u-c*h,t[e+1]=l*g+f*h+c*m-a*u,t[e+2]=c*g+f*u+a*h-l*m,t[e+3]=f*g-a*m-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),m=a(r/2),h=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*f*m+c*u*g,this._y=c*u*m-h*f*g,this._z=c*f*g+h*u*m,this._w=c*f*m-h*u*g;break;case"YXZ":this._x=h*f*m+c*u*g,this._y=c*u*m-h*f*g,this._z=c*f*g-h*u*m,this._w=c*f*m+h*u*g;break;case"ZXY":this._x=h*f*m-c*u*g,this._y=c*u*m+h*f*g,this._z=c*f*g+h*u*m,this._w=c*f*m-h*u*g;break;case"ZYX":this._x=h*f*m-c*u*g,this._y=c*u*m+h*f*g,this._z=c*f*g-h*u*m,this._w=c*f*m+h*u*g;break;case"YZX":this._x=h*f*m+c*u*g,this._y=c*u*m+h*f*g,this._z=c*f*g-h*u*m,this._w=c*f*m-h*u*g;break;case"XZY":this._x=h*f*m-c*u*g,this._y=c*u*m-h*f*g,this._z=c*f*g+h*u*m,this._w=c*f*m+h*u*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],m=e[10],h=n+a+m;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>m){let u=2*Math.sqrt(1+n-a-m);this._w=(f-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>m){let u=2*Math.sqrt(1+a-n-m);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+f)/u}else{let u=2*Math.sqrt(1+m-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),m=2*(r*n-o*e);return this.x=e+l*c+o*m-a*f,this.y=n+l*f+a*c-r*m,this.z=s+l*m+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new U,fl=new un,kt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],m=n[7],h=n[2],u=n[5],g=n[8],S=s[0],p=s[3],d=s[6],M=s[1],T=s[4],w=s[7],E=s[2],A=s[5],x=s[8];return r[0]=o*S+a*M+l*E,r[3]=o*p+a*T+l*A,r[6]=o*d+a*w+l*x,r[1]=c*S+f*M+m*E,r[4]=c*p+f*T+m*A,r[7]=c*d+f*w+m*x,r[2]=h*S+u*M+g*E,r[5]=h*p+u*T+g*A,r[8]=h*d+u*w+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],m=f*o-a*c,h=a*l-f*r,u=c*r-o*l,g=e*m+n*h+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=m*S,t[1]=(s*c-f*n)*S,t[2]=(a*n-s*o)*S,t[3]=h*S,t[4]=(f*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=u*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new kt,pl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eh(){let i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?$i:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:t,whitePoint:n,transfer:$i,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:le,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var ee=Eh();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var li,cr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{li===void 0&&(li=Ki("canvas")),li.width=t.width,li.height=t.height;let s=li.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ki("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ch=0,Ti=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fo(s[o].image)):r.push(Fo(s[o]))}else r=Fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Rh=0,Oo=new U,Ve=class i extends hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,s=ln,r=Be,o=Rn,a=on,l=Ge,c=i.DEFAULT_ANISOTROPY,f=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=vs(),this.name="",this.source=new Ti(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ya)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ya;Ve.DEFAULT_ANISOTROPY=1;var re=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],m=l[8],h=l[1],u=l[5],g=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(m-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,w=(u+1)/2,E=(d+1)/2,A=(f+h)/4,x=(m+S)/4,b=(g+p)/4;return T>w&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=x/n):w>E?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(m-S)*(m-S)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(m-S)/M,this.z=(h-f)/M,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hr=class extends hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ve({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ti(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends hr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qi=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ur=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,f,m,h,u,g,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,m,h,u,g,S,p)}set(t,e,n,s,r,o,a,l,c,f,m,h,u,g,S,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=m,d[14]=h,d[3]=u,d[7]=g,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let h=o*f,u=o*m,g=a*f,S=a*m;e[0]=l*f,e[4]=-l*m,e[8]=c,e[1]=u+g*c,e[5]=h-S*c,e[9]=-a*l,e[2]=S-h*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*f,u=l*m,g=c*f,S=c*m;e[0]=h+S*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*m,e[5]=o*f,e[9]=-a,e[2]=u*a-g,e[6]=S+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*f,u=l*m,g=c*f,S=c*m;e[0]=h-S*a,e[4]=-o*m,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*f,e[9]=S-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*f,u=o*m,g=a*f,S=a*m;e[0]=l*f,e[4]=g*c-u,e[8]=h*c+S,e[1]=l*m,e[5]=S*c+h,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,u=o*c,g=a*l,S=a*c;e[0]=l*f,e[4]=S-h*m,e[8]=g*m+u,e[1]=m,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=u*m+g,e[10]=h-S*m}else if(t.order==="XZY"){let h=o*l,u=o*c,g=a*l,S=a*c;e[0]=l*f,e[4]=-m,e[8]=c*f,e[1]=h*m+S,e[5]=o*f,e[9]=u*m-g,e[2]=g*m-u,e[6]=a*f,e[10]=S*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Ih)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Fn.crossVectors(n,He),Fn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Fn.crossVectors(n,He)),Fn.normalize(),Ps.crossVectors(He,Fn),s[0]=Fn.x,s[4]=Ps.x,s[8]=He.x,s[1]=Fn.y,s[5]=Ps.y,s[9]=He.y,s[2]=Fn.z,s[6]=Ps.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],m=n[5],h=n[9],u=n[13],g=n[2],S=n[6],p=n[10],d=n[14],M=n[3],T=n[7],w=n[11],E=n[15],A=s[0],x=s[4],b=s[8],O=s[12],D=s[1],N=s[5],z=s[9],K=s[13],P=s[2],X=s[6],j=s[10],G=s[14],rt=s[3],q=s[7],tt=s[11],it=s[15];return r[0]=o*A+a*D+l*P+c*rt,r[4]=o*x+a*N+l*X+c*q,r[8]=o*b+a*z+l*j+c*tt,r[12]=o*O+a*K+l*G+c*it,r[1]=f*A+m*D+h*P+u*rt,r[5]=f*x+m*N+h*X+u*q,r[9]=f*b+m*z+h*j+u*tt,r[13]=f*O+m*K+h*G+u*it,r[2]=g*A+S*D+p*P+d*rt,r[6]=g*x+S*N+p*X+d*q,r[10]=g*b+S*z+p*j+d*tt,r[14]=g*O+S*K+p*G+d*it,r[3]=M*A+T*D+w*P+E*rt,r[7]=M*x+T*N+w*X+E*q,r[11]=M*b+T*z+w*j+E*tt,r[15]=M*O+T*K+w*G+E*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],m=t[6],h=t[10],u=t[14],g=t[3],S=t[7],p=t[11],d=t[15],M=l*u-c*h,T=a*u-c*m,w=a*h-l*m,E=o*u-c*f,A=o*h-l*f,x=o*m-a*f;return e*(S*M-p*T+d*w)-n*(g*M-p*E+d*A)+s*(g*T-S*E+d*x)-r*(g*w-S*A+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(r*f-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],m=t[9],h=t[10],u=t[11],g=t[12],S=t[13],p=t[14],d=t[15],M=e*a-n*o,T=e*l-s*o,w=e*c-r*o,E=n*l-s*a,A=n*c-r*a,x=s*c-r*l,b=f*S-m*g,O=f*p-h*g,D=f*d-u*g,N=m*p-h*S,z=m*d-u*S,K=h*d-u*p,P=M*K-T*z+w*N+E*D-A*O+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return t[0]=(a*K-l*z+c*N)*X,t[1]=(s*z-n*K-r*N)*X,t[2]=(S*x-p*A+d*E)*X,t[3]=(h*A-m*x-u*E)*X,t[4]=(l*D-o*K-c*O)*X,t[5]=(e*K-s*D+r*O)*X,t[6]=(p*w-g*x-d*T)*X,t[7]=(f*x-h*w+u*T)*X,t[8]=(o*z-a*D+c*b)*X,t[9]=(n*D-e*z-r*b)*X,t[10]=(g*A-S*w+d*M)*X,t[11]=(m*w-f*A-u*M)*X,t[12]=(a*O-o*N-l*b)*X,t[13]=(e*N-n*O+s*b)*X,t[14]=(S*T-g*E-p*M)*X,t[15]=(f*E-m*T+h*M)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,m=a+a,h=r*c,u=r*f,g=r*m,S=o*f,p=o*m,d=a*m,M=l*c,T=l*f,w=l*m,E=n.x,A=n.y,x=n.z;return s[0]=(1-(S+d))*E,s[1]=(u+w)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(u-w)*A,s[5]=(1-(h+d))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+T)*x,s[9]=(p-M)*x,s[10]=(1-(h+S))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ci.set(s[0],s[1],s[2]).length(),a=ci.set(s[4],s[5],s[6]).length(),l=ci.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ke.copy(this);let c=1/o,f=1/a,m=1/l;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=f,Ke.elements[5]*=f,Ke.elements[6]*=f,Ke.elements[8]*=m,Ke.elements[9]*=m,Ke.elements[10]*=m,e.setFromRotationMatrix(Ke),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Ze,l=!1){let c=this.elements,f=2*r/(e-t),m=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===Ze)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===bi)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ze,l=!1){let c=this.elements,f=2/(e-t),m=2/(n-s),h=-(e+t)/(e-t),u=-(n+s)/(n-s),g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===Ze)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===bi)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ci=new U,Ke=new ae,Ph=new U(0,0,0),Ih=new U(1,1,1),Fn=new U,Ps=new U,He=new U,gl=new ae,_l=new un,En=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],m=s[2],h=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lh=0,xl=new U,hi=new un,yn=new ae,Is=new U,Hi=new U,Dh=new U,Nh=new un,vl=new U(1,0,0),yl=new U(0,1,0),Ml=new U(0,0,1),Sl={type:"added"},Uh={type:"removed"},ui={type:"childadded",child:null},Bo={type:"childremoved",child:null},Le=class i extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new En,n=new un,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Hi,Is,this.up):yn.lookAt(Is,Hi,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(yn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),ui.child=t,this.dispatchEvent(ui),ui.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,Dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),m=o(t.shapes),h=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new U(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fh={type:"move"},Ai=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,n),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=f.position.distanceTo(m.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=wh(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zo(o,r,t+1/3),this.g=zo(o,r,t),this.b=zo(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ee.workingToColorSpace(Ie.copy(this),t),Math.round(ne(Ie.r*255,0,255))*65536+Math.round(ne(Ie.g*255,0,255))*256+Math.round(ne(Ie.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let m=o-a;switch(c=f<=.5?m/(o+a):m/(2-o-a),o){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ue){ee.workingToColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ls);let n=Do(On.h,Ls.h,e),s=Do(On.s,Ls.s,e),r=Do(On.l,Ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Gt;Gt.NAMES=yc;var ts=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qe=new U,Mn=new U,ko=new U,Sn=new U,di=new U,fi=new U,bl=new U,Vo=new U,Go=new U,Ho=new U,Wo=new re,Xo=new re,qo=new re,Vn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),Mn.subVectors(n,e),ko.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(Mn),l=Qe.dot(ko),c=Mn.dot(Mn),f=Mn.dot(ko),m=o*c-a*a;if(m===0)return r.set(0,0,0),null;let h=1/m,u=(c*l-a*f)*h,g=(o*f-a*l)*h;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(qo,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),Mn.subVectors(t,e),Qe.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Qe.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;di.subVectors(s,n),fi.subVectors(r,n),Vo.subVectors(t,n);let l=di.dot(Vo),c=fi.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Go.subVectors(t,s);let f=di.dot(Go),m=fi.dot(Go);if(f>=0&&m<=f)return e.copy(s);let h=l*m-f*c;if(h<=0&&l>=0&&f<=0&&l-f>0)return o=l/(l-f),e.copy(n).addScaledVector(di,o);Ho.subVectors(t,r);let u=di.dot(Ho),g=fi.dot(Ho);if(g>=0&&u<=g)return e.copy(r);let S=u*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fi,a);let p=f*g-u*m;if(p<=0&&m-f>=0&&u-g>=0)return bl.subVectors(r,s),a=(m-f)/(m-f+(u-g)),e.copy(s).addScaledVector(bl,a);let d=1/(p+S+h);return o=S*d,a=h*d,e.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},en=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),Ns.subVectors(this.max,Wi),pi.subVectors(t.a,Wi),mi.subVectors(t.b,Wi),gi.subVectors(t.c,Wi),Bn.subVectors(mi,pi),zn.subVectors(gi,mi),Kn.subVectors(pi,gi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Kn.z,Kn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Kn.z,0,-Kn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Kn.y,Kn.x,0];return!Yo(e,pi,mi,gi,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,pi,mi,gi,Ns))?!1:(Us.crossVectors(Bn,zn),e=[Us.x,Us.y,Us.z],Yo(e,pi,mi,gi,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bn=[new U,new U,new U,new U,new U,new U,new U,new U],je=new U,Ds=new en,pi=new U,mi=new U,gi=new U,Bn=new U,zn=new U,Kn=new U,Wi=new U,Ns=new U,Us=new U,Qn=new U;function Yo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);let a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),f=n.dot(Qn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var ye=new U,Fs=new Zt,Oh=0,cn=class extends hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=t!==void 0?Da(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Th(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ah(t,this.array)}};var es=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ns=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Oe=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bh=new en,Xi=new U,Zo=new U,Ei=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);let e=Xi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(Zo)),this.expandByPoint(Xi.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zh=0,Ye=new ae,Jo=new Le,_i=new U,We=new en,qi=new en,Te=new U,dn=class i extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?ns:es)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(We.min,qi.min),We.expandByPoint(Te),Te.addVectors(We.max,qi.max),We.expandByPoint(Te)):(We.expandByPoint(qi.min),We.expandByPoint(qi.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Te.fromBufferAttribute(a,c),l&&(_i.fromBufferAttribute(t,c),Te.add(_i)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new U,l[O]=new U;let f=new U,m=new U,h=new U,u=new Zt,g=new Zt,S=new Zt,p=new U,d=new U;function M(O,D,N){c[O]=c[D]=c[N]=1,f.fromBufferAttribute(n,O),m.fromBufferAttribute(n,D),h.fromBufferAttribute(n,N),u.fromBufferAttribute(r,O),g.fromBufferAttribute(r,D),S.fromBufferAttribute(r,N),m.sub(f),h.sub(f),g.sub(u),S.sub(u);let z=1/(g.x*S.y-S.x*g.y);isFinite(z)&&(p.copy(m).multiplyScalar(S.y).addScaledVector(h,-g.y).multiplyScalar(z),d.copy(h).multiplyScalar(g.x).addScaledVector(m,-S.x).multiplyScalar(z),a[O].add(p),a[D].add(p),a[N].add(p),l[O].add(d),l[D].add(d),l[N].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,D=T.length;O<D;++O){let N=T[O],z=N.start,K=N.count;for(let P=z,X=z+K;P<X;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let w=new U,E=new U,A=new U,x=new U;function b(O){A.fromBufferAttribute(s,O),x.copy(A);let D=a[O];w.copy(D),w.sub(A.multiplyScalar(A.dot(D))).normalize(),E.crossVectors(x,D);let z=E.dot(l[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,z)}for(let O=0,D=n.count;O<D;++O)c[O]&&b(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,f=new U,m=new U;if(t)for(let h=0,u=t.count;h<u;h+=3){let g=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,p),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,m=a.normalized,h=new c.constructor(l.length*f),u=0,g=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?u=l[S]*a.data.stride+a.offset:u=l[S]*f;for(let d=0;d<f;d++)h[g++]=c[u++]}return new cn(h,f,m)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,m=c.length;f<m;f++){let h=c[f],u=t(h,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let m=0,h=c.length;m<h;m++){let u=c[m];f.push(u.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],m=r[c];for(let h=0,u=m.length;h<u;h++)f.push(m[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=new U,kh=new U,Vh=new kt,tn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vh.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gh=0,Gn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Di,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wn=new U,Ko=new U,Os=new U,Bs=new U,dr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ko.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Bs.copy(this.origin).sub(Ko);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=Bs.dot(this.direction),l=-Bs.dot(Os),c=Bs.lengthSq(),f=Math.abs(1-o*o),m,h,u,g;if(f>0)if(m=o*l-a,h=o*a-l,g=r*f,m>=0)if(h>=-g)if(h<=g){let S=1/f;m*=S,h*=S,u=m*(m+o*h+2*a)+h*(o*m+h+2*l)+c}else h=r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*l)+c;else h<=-g?(m=Math.max(0,-(-o*r+a)),h=m>0?-r:Math.min(Math.max(-r,-l),r),u=-m*m+h*(h+2*l)+c):h<=g?(m=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(m=Math.max(0,-(o*r+a)),h=m>0?r:Math.min(Math.max(-r,-l),r),u=-m*m+h*(h+2*l)+c);else h=o>0?-r:r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ko).addScaledVector(Os,h),u}intersectSphere(t,e){if(t.radius<0)return null;wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(r=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(a=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,m=t.x-o.x,h=t.y-o.y,u=t.z-o.z,g=e.x-o.x,S=e.y-o.y,p=e.z-o.z,d=n.x-o.x,M=n.y-o.y,T=n.z-o.z,w=Math.abs(l),E=Math.abs(c),A=Math.abs(f),x,b,O,D,N,z,K,P,X,j,G,rt;if(w>=E&&w>=A?(O=l,z=m,X=g,rt=d,l>=0?(x=c,b=f,D=h,N=u,K=S,P=p,j=M,G=T):(x=f,b=c,D=u,N=h,K=p,P=S,j=T,G=M)):E>=A?(O=c,z=h,X=S,rt=M,c>=0?(x=f,b=l,D=u,N=m,K=p,P=g,j=T,G=d):(x=l,b=f,D=m,N=u,K=g,P=p,j=d,G=T)):(O=f,z=u,X=p,rt=T,f>=0?(x=l,b=c,D=m,N=h,K=g,P=S,j=d,G=M):(x=c,b=l,D=h,N=m,K=S,P=g,j=M,G=d)),O===0)return null;let q=x/O,tt=b/O,it=1/O,wt=D-q*z,It=N-tt*z,Q=K-q*X,ct=P-tt*X,yt=j-q*rt,Ft=G-tt*rt,Mt=yt*ct-Ft*Q,Ht=wt*Ft-It*yt,fe=Q*It-ct*wt;if(s){if(Mt<0||Ht<0||fe<0)return null}else if((Mt<0||Ht<0||fe<0)&&(Mt>0||Ht>0||fe>0))return null;let Ot=Mt+Ht+fe;if(Ot===0)return null;let Kt=it*(Mt*z+Ht*X+fe*rt);return(Ot>0?Kt<0:Kt>0)?null:this.at(Kt/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fr=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wl=new ae,jn=new dr,zs=new Ei,Tl=new U,ks=new U,Vs=new U,Gs=new U,Qo=new U,Hs=new U,Al=new U,Ws=new U,Je=class extends Le{constructor(t=new dn,e=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],m=r[l];f!==0&&(Qo.fromBufferAttribute(m,t),o?Hs.addScaledVector(Qo,f):Hs.addScaledVector(Qo.sub(e),f))}e.add(Hs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(zs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(zs,Tl)===null||jn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(wl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(wl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let p=h[g],d=o[p.materialIndex],M=Math.max(p.start,u.start),T=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let w=M,E=T;w<E;w+=3){let A=a.getX(w),x=a.getX(w+1),b=a.getX(w+2);s=Xs(this,d,t,n,c,f,m,A,x,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),S=Math.min(a.count,u.start+u.count);for(let p=g,d=S;p<d;p+=3){let M=a.getX(p),T=a.getX(p+1),w=a.getX(p+2);s=Xs(this,o,t,n,c,f,m,M,T,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let p=h[g],d=o[p.materialIndex],M=Math.max(p.start,u.start),T=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let w=M,E=T;w<E;w+=3){let A=w,x=w+1,b=w+2;s=Xs(this,d,t,n,c,f,m,A,x,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),S=Math.min(l.count,u.start+u.count);for(let p=g,d=S;p<d;p+=3){let M=p,T=p+1,w=p+2;s=Xs(this,o,t,n,c,f,m,M,T,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Hh(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===qn,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ks),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Gs);let f=Hh(i,t,e,n,ks,Vs,Gs,Al);if(f){let m=new U;Vn.getBarycoord(Al,ks,Vs,Gs,m),s&&(f.uv=Vn.getInterpolatedAttribute(s,a,l,c,m,new Zt)),r&&(f.uv1=Vn.getInterpolatedAttribute(r,a,l,c,m,new Zt)),o&&(f.normal=Vn.getInterpolatedAttribute(o,a,l,c,m,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new U,materialIndex:0};Vn.getNormal(ks,Vs,Gs,h.normal),f.face=h,f.barycoord=m}return f}var pr=class extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ae,f=Ae,m,h){super(null,o,a,l,c,f,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=new Ei,Wh=new Zt(.5,.5),qs=new U,fn=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,o=new tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],m=r[5],h=r[6],u=r[7],g=r[8],S=r[9],p=r[10],d=r[11],M=r[12],T=r[13],w=r[14],E=r[15];if(s[0].setComponents(c-o,u-f,d-g,E-M).normalize(),s[1].setComponents(c+o,u+f,d+g,E+M).normalize(),s[2].setComponents(c+a,u+m,d+S,E+T).normalize(),s[3].setComponents(c-a,u-m,d-S,E-T).normalize(),n)s[4].setComponents(l,h,p,w).normalize(),s[5].setComponents(c-l,u-h,d-p,E-w).normalize();else if(s[4].setComponents(c-l,u-h,d-p,E-w).normalize(),e===Ze)s[5].setComponents(c+l,u+h,d+p,E+w).normalize();else if(e===bi)s[5].setComponents(l,h,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);let e=Wh.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},El=new ae,mr=class i{constructor(){this.coordinateSystem=Ze,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];El.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fn),n[s].setFromProjectionMatrix(El,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new fn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var is=class extends Ve{constructor(t=[],e=ri,n,s,r,o,a,l,c,f){super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Cn=class extends Ve{constructor(t,e,n=nn,s,r,o,a=Ae,l=Ae,c,f=An,m=1){if(f!==An&&f!==Pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:m};super(h,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ti(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ss=class extends Cn{constructor(t,e=nn,n=ri,s,r,o=Ae,a=Ae,l,c=An){let f={width:t,height:t,depth:1},m=[f,f,f,f,f,f];super(t,t,e,n,s,r,o,a,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},rs=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ci=class i extends dn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],m=[],h=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(m,2));function g(S,p,d,M,T,w,E,A,x,b,O){let D=w/x,N=E/b,z=w/2,K=E/2,P=A/2,X=x+1,j=b+1,G=0,rt=0,q=new U;for(let tt=0;tt<j;tt++){let it=tt*N-K;for(let wt=0;wt<X;wt++){let It=wt*D-z;q[S]=It*M,q[p]=it*T,q[d]=P,c.push(q.x,q.y,q.z),q[S]=0,q[p]=0,q[d]=A>0?1:-1,f.push(q.x,q.y,q.z),m.push(wt/x),m.push(1-tt/b),G+=1}}for(let tt=0;tt<b;tt++)for(let it=0;it<x;it++){let wt=h+it+X*tt,It=h+it+X*(tt+1),Q=h+(it+1)+X*(tt+1),ct=h+(it+1)+X*tt;l.push(wt,It,ct),l.push(It,Q,ct),rt+=6}a.addGroup(u,rt,O),u+=rt,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var os=class i extends dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,m=t/a,h=e/l,u=[],g=[],S=[],p=[];for(let d=0;d<f;d++){let M=d*h-o;for(let T=0;T<c;T++){let w=T*m-r;g.push(w,-M,0),S.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let T=M+c*d,w=M+c*(d+1),E=M+1+c*(d+1),A=M+1+c*d;u.push(T,w,A),u.push(w,E,A)}this.setIndex(u),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(S,3)),this.setAttribute("uv",new Oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Cl(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Cl(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function De(i){let t={};for(let e=0;e<i.length;e++){let n=ai(i[e]);for(let s in n)t[s]=n[s]}return t}function Cl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Na(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Mc={clone:ai,merge:De},qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ai(t.uniforms),this.uniformsGroups=Xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},gr=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var as=class extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_r=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xr=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ys(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vr=class extends Hn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ea,endingEnd:ea}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case na:r=t,a=2*e-n;break;case ia:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case na:o=t,l=2*n-e;break;case ia:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),S=g*g,p=S*g,d=-h*p+2*h*S-h*g,M=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*g+1,T=(-1-u)*p+(1.5+u)*S+.5*g,w=u*p-u*S;for(let E=0;E!==a;++E)r[E]=d*o[f+E]+M*o[c+E]+T*o[l+E]+w*o[m+E];return r}},yr=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),m=1-f;for(let h=0;h!==a;++h)r[h]=o[c+h]*m+o[l+h]*f;return r}},Mr=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sr=class extends Hn{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,m=this.outTangents;if(!f||!m){let g=(n-e)/(s-e),S=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*S+o[l+p]*g;return r}let h=a*2,u=t-1;for(let g=0;g!==a;++g){let S=o[c+g],p=o[l+g],d=u*h+g*2,M=m[d],T=m[d+1],w=t*h+g*2,E=f[w],A=f[w+1],x=Jh(n,e,M,E,s);r[g]=Sc(x,S,T,A,p)}return r}};function Sc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zh(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jh(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Sc(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Zh(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xi(e,this.TimeBufferType),this.values=xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xi(t.times,Array),values:xi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ys(t.settings)&&(n.settings={inTangents:xi(t.settings.inTangents,Array),outTangents:xi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zi:e=this.InterpolantFactoryMethodDiscrete;break;case ar:e=this.InterpolantFactoryMethodLinear;break;case $s:e=this.InterpolantFactoryMethodSmooth;break;case ta:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return $s;case this.InterpolantFactoryMethodBezier:return ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ys(this.settings)&&(Rl(this.settings.inTangents,t),Rl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ys(this.settings)&&(Pl(this.settings.inTangents,t),Pl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&bh(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$s,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let m=a*n,h=m-n,u=m+n;for(let g=0;g!==n;++g){let S=e[m+g];if(S!==e[h+g]||S!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let m=a*n,h=o*n;for(let u=0;u!==n;++u)e[h+u]=e[m+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ys(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Pl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}qe.prototype.ValueTypeName="";qe.prototype.TimeBufferType=Float32Array;qe.prototype.ValueBufferType=Float32Array;qe.prototype.DefaultInterpolation=ar;var Wn=class extends qe{constructor(t,e,n){super(t,e,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Zi;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}};br.prototype.ValueTypeName="color";var wr=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}};wr.prototype.ValueTypeName="number";var Tr=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},ls=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Tr(this.times,this.values,this.getValueSize(),t)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends qe{constructor(t,e,n){super(t,e,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Zi;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ar=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}};Ar.prototype.ValueTypeName="vector";var Er=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,m){return c.push(f,m),this},this.removeHandler=function(f){let m=c.indexOf(f);return m!==-1&&c.splice(m,2),this},this.getHandler=function(f){for(let m=0,h=c.length;m<h;m+=2){let u=c[m],g=c[m+1];if(u.global&&(u.lastIndex=0),u.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bc=new Er,Cr=class{constructor(t){this.manager=t!==void 0?t:bc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var jo=new ae,Il=new U,Ll=new U,Rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fn,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===bi||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zs=new U,Js=new un,an=new U,ei=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zs,Js,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Js,an.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zs,Js,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Js,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kn=new U,Dl=new Zt,Nl=new Zt,Fe=class extends ei{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Nl),e.subVectors(Nl,Dl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ni=class extends ei{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sa=class extends Rr{constructor(){super(new ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new sa}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},hs=class extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var vi=-90,yi=1,Pi=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(vi,yi,t,e);s.layers=this.layers,this.add(s);let r=new Fe(vi,yi,t,e);r.layers=this.layers,this.add(r);let o=new Fe(vi,yi,t,e);o.layers=this.layers,this.add(o);let a=new Fe(vi,yi,t,e);a.layers=this.layers,this.add(a);let l=new Fe(vi,yi,t,e);l.layers=this.layers,this.add(l);let c=new Fe(vi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(m,h,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pr=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ua="\\[\\]\\.:\\/",$h=new RegExp("["+Ua+"]","g"),Fa="[^"+Ua+"]",Kh="[^"+Ua.replace("\\.","")+"]",Qh=/((?:WC+[\/:])*)/.source.replace("WC",Fa),jh=/(WCOD+)?/.source.replace("WCOD",Kh),tu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fa),eu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fa),nu=new RegExp("^"+Qh+jh+tu+eu+"$"),iu=["material","materials","bones","map"],ra=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($h,"")}static parseTrackName(t){let e=nu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);iu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=ra;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eg=new Float32Array(1);var oa=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}},Ul=new Zt,Ii=class{constructor(t=new Zt(1/0,1/0),e=new Zt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ul.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ul).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};function Oa(i,t,e,n){let s=su(n);switch(e){case Ta:return i*t;case Ea:return i*t/s.components*s.byteLength;case Br:return i*t/s.components*s.byteLength;case Yn:return i*t*2/s.components*s.byteLength;case zr:return i*t*2/s.components*s.byteLength;case Aa:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case kr:return i*t*4/s.components*s.byteLength;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gr:case Wr:return Math.max(i,16)*Math.max(t,8)/4;case Vr:case Hr:return Math.max(i,8)*Math.max(t,8)/2;case Xr:case qr:case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case _s:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uo:case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xs:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function su(i){switch(i){case Ge:case Ma:return{byteLength:1,components:1};case Ui:case Sa:case rn:return{byteLength:2,components:1};case Fr:case Or:return{byteLength:2,components:4};case nn:case Ur:case sn:return{byteLength:4,components:1};case ba:case wa:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xc(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ru(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,c){let f=l.array,m=l.updateRanges;if(i.bindBuffer(c,a),m.length===0)i.bufferSubData(c,0,f);else{m.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<m.length;u++){let g=m[h],S=m[u];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,m[h]=S)}m.length=h+1;for(let u=0,g=m.length;u<g;u++){let S=m[u];i.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,du=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,If=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:ou,alphahash_pars_fragment:au,alphamap_fragment:lu,alphamap_pars_fragment:cu,alphatest_fragment:hu,alphatest_pars_fragment:uu,aomap_fragment:du,aomap_pars_fragment:fu,batching_pars_vertex:pu,batching_vertex:mu,begin_vertex:gu,beginnormal_vertex:_u,bsdfs:xu,iridescence_fragment:vu,bumpmap_pars_fragment:yu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:bu,clipping_planes_vertex:wu,color_fragment:Tu,color_pars_fragment:Au,color_pars_vertex:Eu,color_vertex:Cu,common:Ru,defaultnormal_vertex:Pu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Lu,emissivemap_fragment:Du,emissivemap_pars_fragment:Nu,colorspace_fragment:Uu,colorspace_pars_fragment:Fu,envmap_fragment:Ou,envmap_common_pars_fragment:Bu,envmap_pars_fragment:zu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Ku,envmap_vertex:Vu,fog_vertex:Gu,fog_pars_vertex:Hu,fog_fragment:Wu,fog_pars_fragment:Xu,gradientmap_pars_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:$u,lights_toon_fragment:Qu,lights_toon_pars_fragment:ju,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:od,lightprobes_pars_fragment:ad,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:dd,map_pars_fragment:fd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:_d,morphinstance_vertex:xd,morphcolor_vertex:vd,morphnormal_vertex:yd,morphtarget_pars_vertex:Md,morphtarget_vertex:Sd,normal_fragment_begin:bd,normal_fragment_maps:wd,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Ed,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Ld,opaque_fragment:Dd,packing:Nd,premultiplied_alpha_fragment:Ud,project_vertex:Fd,dithering_fragment:Od,dithering_pars_fragment:Bd,roughnessmap_fragment:zd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:Zd,specularmap_fragment:Jd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:Qd,transmission_fragment:jd,transmission_pars_fragment:tf,uv_pars_fragment:ef,uv_pars_vertex:nf,uv_vertex:sf,worldpos_vertex:rf,background_vert:of,background_frag:af,backgroundCube_vert:lf,backgroundCube_frag:cf,cube_vert:hf,cube_frag:uf,depth_vert:df,depth_frag:ff,distance_vert:pf,distance_frag:mf,equirect_vert:gf,equirect_frag:_f,linedashed_vert:xf,linedashed_frag:vf,meshbasic_vert:yf,meshbasic_frag:Mf,meshlambert_vert:Sf,meshlambert_frag:bf,meshmatcap_vert:wf,meshmatcap_frag:Tf,meshnormal_vert:Af,meshnormal_frag:Ef,meshphong_vert:Cf,meshphong_frag:Rf,meshphysical_vert:Pf,meshphysical_frag:If,meshtoon_vert:Lf,meshtoon_frag:Df,points_vert:Nf,points_frag:Uf,shadow_vert:Ff,shadow_frag:Of,sprite_vert:Bf,sprite_frag:zf},St={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},_n={basic:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:De([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:De([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:De([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:De([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:De([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:De([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:De([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:De([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:De([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:De([St.lights,St.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};_n.physical={uniforms:De([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var vo={r:0,b:0,g:0},kf=new ae,qc=new kt;qc.set(-1,0,0,0,1,0,0,0,1);function Vf(i,t,e,n,s,r){let o=new Gt(0),a=s===!0?0:1,l,c,f=null,m=0,h=null;function u(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let w=M.backgroundBlurriness>0;T=t.get(T,w)}return T}function g(M){let T=!1,w=u(M);w===null?p(o,a):w&&w.isColor&&(p(w,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,T){let w=u(T);w&&w.isCubeTexture?(c===void 0&&(c=new Je(new Ci(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ai(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qc),c.material.toneMapped=ee.getTransfer(w.colorSpace)!==le,(f!==w||m!==w.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,m=w.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Je(new os(2,2),new pn({name:"BackgroundMaterial",uniforms:ai(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ee.getTransfer(w.colorSpace)!==le,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||m!==w.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,m=w.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(vo,Na(i)),e.buffers.color.setClear(vo.r,vo.g,vo.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:S,dispose:d}}function Gf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(N,z,K,P,X){let j=!1,G=m(N,P,K,z);r!==G&&(r=G,c(r.object)),j=u(N,P,K,X),j&&g(N,P,K,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,w(N,z,K,P),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function f(N){return i.deleteVertexArray(N)}function m(N,z,K,P){let X=P.wireframe===!0,j=n[z.id];j===void 0&&(j={},n[z.id]=j);let G=N.isInstancedMesh===!0?N.id:0,rt=j[G];rt===void 0&&(rt={},j[G]=rt);let q=rt[K.id];q===void 0&&(q={},rt[K.id]=q);let tt=q[X];return tt===void 0&&(tt=h(l()),q[X]=tt),tt}function h(N){let z=[],K=[],P=[];for(let X=0;X<e;X++)z[X]=0,K[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:P,object:N,attributes:{},index:null}}function u(N,z,K,P){let X=r.attributes,j=z.attributes,G=0,rt=K.getAttributes();for(let q in rt)if(rt[q].location>=0){let it=X[q],wt=j[q];if(wt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),it===void 0||it.attribute!==wt||wt&&it.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function g(N,z,K,P){let X={},j=z.attributes,G=0,rt=K.getAttributes();for(let q in rt)if(rt[q].location>=0){let it=j[q];it===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));let wt={};wt.attribute=it,it&&it.data&&(wt.data=it.data),X[q]=wt,G++}r.attributes=X,r.attributesNum=G,r.index=P}function S(){let N=r.newAttributes;for(let z=0,K=N.length;z<K;z++)N[z]=0}function p(N){d(N,0)}function d(N,z){let K=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;K[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),X[N]!==z&&(i.vertexAttribDivisor(N,z),X[N]=z)}function M(){let N=r.newAttributes,z=r.enabledAttributes;for(let K=0,P=z.length;K<P;K++)z[K]!==N[K]&&(i.disableVertexAttribArray(K),z[K]=0)}function T(N,z,K,P,X,j,G){G===!0?i.vertexAttribIPointer(N,z,K,X,j):i.vertexAttribPointer(N,z,K,P,X,j)}function w(N,z,K,P){S();let X=P.attributes,j=K.getAttributes(),G=z.defaultAttributeValues;for(let rt in j){let q=j[rt];if(q.location>=0){let tt=X[rt];if(tt===void 0&&(rt==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),rt==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),tt!==void 0){let it=tt.normalized,wt=tt.itemSize,It=t.get(tt);if(It===void 0)continue;let Q=It.buffer,ct=It.type,yt=It.bytesPerElement,Ft=ct===i.INT||ct===i.UNSIGNED_INT||tt.gpuType===Ur;if(tt.isInterleavedBufferAttribute){let Mt=tt.data,Ht=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,fe=tt.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let Ot=0;Ot<q.locationSize;Ot++)d(q.location+Ot,Mt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)p(q.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ot=0;Ot<q.locationSize;Ot++)T(q.location+Ot,wt/q.locationSize,ct,it,Ht*yt,(fe+wt/q.locationSize*Ot)*yt,Ft)}else{if(tt.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)d(q.location+Mt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)p(q.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Mt=0;Mt<q.locationSize;Mt++)T(q.location+Mt,wt/q.locationSize,ct,it,wt*yt,wt/q.locationSize*Mt*yt,Ft)}}else if(G!==void 0){let it=G[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(q.location,it);break;case 3:i.vertexAttrib3fv(q.location,it);break;case 4:i.vertexAttrib4fv(q.location,it);break;default:i.vertexAttrib1fv(q.location,it)}}}}M()}function E(){O();for(let N in n){let z=n[N];for(let K in z){let P=z[K];for(let X in P){let j=P[X];for(let G in j)f(j[G].object),delete j[G];delete P[X]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let K in z){let P=z[K];for(let X in P){let j=P[X];for(let G in j)f(j[G].object),delete j[G];delete P[X]}}delete n[N.id]}function x(N){for(let z in n){let K=n[z];for(let P in K){let X=K[P];if(X[N.id]===void 0)continue;let j=X[N.id];for(let G in j)f(j[G].object),delete j[G];delete X[N.id]}}}function b(N){for(let z in n){let K=n[z],P=N.isInstancedMesh===!0?N.id:0,X=K[P];if(X!==void 0){for(let j in X){let G=X[j];for(let rt in G)f(G[rt].object),delete G[rt];delete X[j]}delete K[P],Object.keys(K).length===0&&delete n[z]}}}function O(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function Hf(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let u=0;u<f;u++)h+=c[u];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==on&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Ge&&x!==sn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Vt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:w,maxSamples:E,samples:A}}function Xf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new tn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let u=m.length!==0||h||n!==0||s;return s=h,n=m.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=f(m,h,0)},this.setState=function(m,h,u){let g=m.clippingPlanes,S=m.clipIntersection,p=m.clipShadows,d=i.get(m);if(!s||g===null||g.length===0||r&&!p)r?f(null):c();else{let M=r?0:n,T=M*4,w=d.clippingState||null;l.value=w,w=f(g,h,T,u);for(let E=0;E!==T;++E)w[E]=e[E];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(m,h,u,g){let S=m!==null?m.length:0,p=null;if(S!==0){if(p=l.value,g!==!0||p===null){let d=u+S*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,w=u;T!==S;++T,w+=4)o.copy(m[T]).applyMatrix4(M,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var Ss=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new is(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ci(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:ii});r.uniforms.tEquirect.value=e;let o=new Je(s,r),a=e.minFilter;return e.minFilter===Rn&&(e.minFilter=Be),new Pi(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},wc=256,qf=3,Yf=20,Yc=256,Zc=16,Zf=3,Jf=new U,$f=new Gt,Mo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pi(1,10,null),this._boxMesh=new Je(new Ci(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Jf}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),f=this._getSourceTarget(!0);e>0&&(f.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,h=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor($f));let p=new Pi(n,s,f);return p.position.copy(a),p.update(l,t),l.autoClear=m,l.autoClearColor=h,l.autoClearDepth=u,l.autoClearStencil=g,t.background=S,e>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wc,vc(t))}_fromTexture(t,e){t.mapping===ri||t.mapping===Ni?this._setSize(t.image.length===0?wc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Tc(t,!1,!1),n=Math.log2(t)-qf;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ri||t.mapping===Ni?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ac()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Kf(),this._integrationMaterial=Qf());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Zc);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Zf)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Yc*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=jf());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Tc(i,t,e){return new Ss(i,{minFilter:Rn,generateMipmaps:t,type:rn,colorSpace:Ji,depthBuffer:e})}function bs(i,t,e){return new pn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:ze,blending:ii,depthTest:!1,depthWrite:!1})}function Kf(){return bs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qf(){return bs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jf(){return bs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ac(){return bs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ec(){return bs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===Lr||u===Dr)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new Ss(g.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let u=h.mapping,g=u===Lr||u===Dr,S=u===ri||u===Ni;if(g||S){let p=e.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Mo(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Mo(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function a(h,u){return u===Lr?h.mapping=ri:u===Dr&&(h.mapping=Ni),h}function l(h){let u=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&u++;return u===g}function c(h){let u=h.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function f(h){let u=h.target;u.removeEventListener("dispose",f);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function ep(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yi("WebGLRenderer: "+n+" extension not supported."),s}}}function np(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let S=r.get(g);S&&(t.remove(S),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),e.memory.geometries++),S}function f(g){let S=g.attributes;for(let p in S)t.update(S[p],i.ARRAY_BUFFER)}function m(g){let S=g.index,p=g.attributes.position,d=0;if(p===void 0)return;let M=S!==null?S.array.length:p.array.length/3-1,T=p.count>=65535?ns:es,w=new T(Math.ceil(M/3)*6,1),E=w.array;if(S!==null){let x=S.array;d=S.version;for(let b=0,O=0;b<M;b+=3){let D=x[b+0],N=x[b+1],z=x[b+2];E[O++]=D,E[O++]=N,E[O++]=N,E[O++]=z,E[O++]=z,E[O++]=D}}else{d=p.version;for(let x=0,b=0;x<M;x+=3){let O=x+0,D=x+1,N=x+2;E[b++]=O,E[b++]=D,E[b++]=D,E[b++]=N,E[b++]=N,E[b++]=O}}w.version=d;let A=r.get(g);A&&t.remove(A),r.set(g,w)}function h(g){let S=r.get(g);if(S){let p=g.index;p!==null&&S.version<p.version&&m(g)}else m(g);return r.get(g)}function u(){for(let g in s){let S=s[g].deref();S!==void 0&&l(S)}}return{get:c,update:f,getWireframeAttribute:h,dispose:u}}function ip(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*o),e.update(h,n,1)}function c(m,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,m*o,u),e.update(h,n,u))}function f(m,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,u);let S=0;for(let p=0;p<u;p++)S+=h[p];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function sp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rp(i,t,e){let n=new WeakMap,s=new re;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=f!==void 0?f.length:0,h=n.get(a);if(h===void 0||h.count!==m){let O=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;u===!0&&(T=1),g===!0&&(T=2),S===!0&&(T=3);let w=a.attributes.position.count*T,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let A=new Float32Array(w*E*4*m),x=new Qi(A,w,E,m);x.type=sn,x.needsUpdate=!0;let b=T*4;for(let D=0;D<m;D++){let N=p[D],z=d[D],K=M[D],P=w*E*4*D;for(let X=0;X<N.count;X++){let j=X*b;u===!0&&(s.fromBufferAttribute(N,X),A[P+j+0]=s.x,A[P+j+1]=s.y,A[P+j+2]=s.z,A[P+j+3]=0),g===!0&&(s.fromBufferAttribute(z,X),A[P+j+4]=s.x,A[P+j+5]=s.y,A[P+j+6]=s.z,A[P+j+7]=0),S===!0&&(s.fromBufferAttribute(K,X),A[P+j+8]=s.x,A[P+j+9]=s.y,A[P+j+10]=s.z,A[P+j+11]=K.itemSize===4?s.w:1)}}h={count:m,texture:x,size:new Zt(w,E)},n.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let S=0;S<c.length;S++)u+=c[S];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function op(i,t,e,n,s){let r=new WeakMap;function o(c){let f=s.render.frame,m=c.geometry,h=t.get(c,m);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return h}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var ap={[fa]:"LINEAR_TONE_MAPPING",[pa]:"REINHARD_TONE_MAPPING",[ma]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[xa]:"AGX_TONE_MAPPING",[va]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function lp(i,t,e,n,s,r){let o=new Xe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,f=new dn;f.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let m=new gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Je(f,m),u=new ni(-1,1,1,-1,0,1),g=null,S=null,p=!1,d,M=null,T=[],w=!1;this.setSize=function(E,A){o.setSize(E,A),a!==null&&a.setSize(E,A),l!==null&&l.setSize(E,A);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(E,A)}},this.setEffects=function(E){T=E,w=T.length>0&&T[0].isRenderPass===!0;let A=o.width,x=o.height;T.length>0&&a===null&&(a=new Xe(A,x,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(A,x,{type:rn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(O=>O.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Cn(A,x),r===!0&&(c.format=Pn,c.type=oi)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let O=0;O<T.length;O++){let D=T[O];D.setSize&&D.setSize(A,x),b&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(E,A){if(p||E.toneMapping===mn&&T.length===0)return!1;if(M=A,A!==null){let x=A.width,b=A.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return w===!1&&E.setRenderTarget(o),d=E.toneMapping,E.toneMapping=mn,!0},this.hasRenderPass=function(){return w},this.end=function(E,A){E.toneMapping=d,p=!0;let x=o,b=a;for(let O=0;O<T.length;O++){let D=T[O];D.enabled!==!1&&(D.render(E,b,x,A),D.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(g!==E.outputColorSpace||S!==E.toneMapping){g=E.outputColorSpace,S=E.toneMapping,m.defines={},ee.getTransfer(g)===le&&(m.defines.SRGB_TRANSFER="");let O=ap[S];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(M),E.render(h,u),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),f.dispose(),m.dispose()}}var Jc=new Ve,$c=new Cn(1,1),Kc=new ss(1),Qc=new Qi,jc=new ur,th=new is,Cc=[],Rc=[],Pc=new Float32Array(16),Ic=new Float32Array(9),Lc=new Float32Array(4);function Oi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bo(i,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),be(e,n)}}function pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),be(e,n)}}function mp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Pc.set(n),i.uniformMatrix4fv(this.addr,!1,Pc),be(e,n)}}function gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function wo(i){return i.version===0&&(i.compareFunction=Pa,i.needsUpdate=!0),i}function wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=wo($c):r=Jc,e.setTexture2D(t||r,s)}function Tp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jc,s)}function Ap(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=wo(Kc):r=th,e.setTextureCube(t||r,s)}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qc,s)}function Cp(i){switch(i){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return xp;case 35669:case 35673:return vp;case 5125:return yp;case 36294:return Mp;case 36295:return Sp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Ep}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Pp(i,t){let e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ip(i,t){let e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Lp(i,t){let e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Dp(i,t){let e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Np(i,t){let e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Up(i,t){let e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fp(i,t){i.uniform1iv(this.addr,t)}function Op(i,t){i.uniform2iv(this.addr,t)}function Bp(i,t){i.uniform3iv(this.addr,t)}function zp(i,t){i.uniform4iv(this.addr,t)}function kp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Gp(i,t){i.uniform3uiv(this.addr,t)}function Hp(i,t){i.uniform4uiv(this.addr,t)}function Wp(i,t,e){let n=this.cache,s=t.length,r=bo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wo($c):o=Jc;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Xp(i,t,e){let n=this.cache,s=t.length,r=bo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jc,r[o])}function qp(i,t,e){let n=this.cache,s=t.length,r=bo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=wo(Kc):o=th;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Yp(i,t,e){let n=this.cache,s=t.length,r=bo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qc,r[o])}function Zp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Ip;case 35666:return Lp;case 35674:return Dp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Vp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}var ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cp(e.type)}},Va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}},Ga=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ba=/(\w+)(\])?(\[|\.)?/g;function Dc(i,t){i.seq.push(t),i.map[t.id]=t}function Jp(i,t,e){let n=i.name,s=n.length;for(Ba.lastIndex=0;;){let r=Ba.exec(n),o=Ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dc(e,c===void 0?new ka(a,i,t):new Va(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new Ga(a),Dc(e,m)),e=m}}}var Fi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Jp(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Nc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $p=37297,Kp=0;function Qp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uc=new kt;function jp(i){ee._getMatrix(Uc,ee.workingColorSpace,i);let t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case $i:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qp(i.getShaderSource(t),a)}else return r}function tm(i,t){let e=jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var em={[fa]:"Linear",[pa]:"Reinhard",[ma]:"Cineon",[ga]:"ACESFilmic",[xa]:"AgX",[va]:"Neutral",[_a]:"Custom"};function nm(i,t){let e=em[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yo=new U;function im(){ee.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function rm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function om(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ms(i){return i!==""}function Oc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(am,lm)}function lm(i,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ha(e)}var cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(i){return i.replace(cm,hm)}function hm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var um={[us]:"SHADOWMAP_TYPE_PCF",[Li]:"SHADOWMAP_TYPE_VSM"};function dm(i){return um[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fm={[Ni]:"ENVMAP_MODE_REFRACTION"};function pm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mm={[Ir]:"ENVMAP_BLENDING_MULTIPLY",[ic]:"ENVMAP_BLENDING_MIX",[sc]:"ENVMAP_BLENDING_ADD"};function gm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mm[i.combine]||"ENVMAP_BLENDING_NONE"}function _m(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=pm(e),m=gm(e),h=sm(e),u=rm(r),g=s.createProgram(),S,p,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ms).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(S=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?$t.tonemapping_pars_fragment:"",e.toneMapping!==mn?nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,tm("linearToOutputTexel",e.outputColorSpace),im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Ha(o),o=Oc(o,e),o=Bc(o,e),a=Ha(a),a=Oc(a,e),a=Bc(a,e),o=zc(o),a=zc(a),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",e.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=d+S+o,T=d+p+a,w=Nc(s,s.VERTEX_SHADER,M),E=Nc(s,s.FRAGMENT_SHADER,T);s.attachShader(g,w),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(w)||"",K=s.getShaderInfoLog(E)||"",P=N.trim(),X=z.trim(),j=K.trim(),G=!0,rt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,E);else{let q=Fc(s,w,"vertex"),tt=Fc(s,E,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+q+`
`+tt)}else P!==""?Vt("WebGLProgram: Program Info Log:",P):(X===""||j==="")&&(rt=!1);rt&&(D.diagnostics={runnable:G,programLog:P,vertexShader:{log:X,prefix:S},fragmentShader:{log:j,prefix:p}})}s.deleteShader(w),s.deleteShader(E),x=new Fi(s,g),b=om(s,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,$p)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}var xm=0,Wa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xa(t),e.set(t,n)),n}},Xa=class{constructor(t){this.id=xm++,this.code=t,this.usedTimes=0}};function vm(i){return i===Yn||i===_s||i===xs}function ym(i,t,e,n,s,r){let o=new ji,a=new Wa,l=new Set,c=[],f=new Map,m=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,O,D,N,z){let K=D.fog,P=N.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||X,j),rt=h[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let tt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,it=tt!==void 0?tt.length:0,wt=0;P.morphAttributes.position!==void 0&&(wt=1),P.morphAttributes.normal!==void 0&&(wt=2),P.morphAttributes.color!==void 0&&(wt=3);let It,Q,ct,yt;if(rt){let _t=_n[rt];It=_t.vertexShader,Q=_t.fragmentShader}else{It=x.vertexShader,Q=x.fragmentShader;let _t=a.getVertexShaderStage(x),Qt=a.getFragmentShaderStage(x);a.update(x,_t,Qt),ct=_t.id,yt=Qt.id}let Ft=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Ht=N.isInstancedMesh===!0,fe=N.isBatchedMesh===!0,Ot=!!x.map,Kt=!!x.matcap,ie=!!G,Jt=ie&&G.isPMREMTexture===!0,_e=!!x.aoMap,me=!!x.lightMap,Me=!!x.bumpMap&&x.wireframe===!1,k=!!x.normalMap,nt=!!x.displacementMap,ft=!!x.emissiveMap,ut=!!x.metalnessMap,lt=!!x.roughnessMap,Ut=x.anisotropy>0,C=x.clearcoat>0,Bt=x.diffuseRoughness>0,Wt=x.dispersion>0,Et=x.retroreflectivity>0,ot=x.iridescence>0,Nt=x.sheen>0,mt=x.transmission>0,Tt=Ut&&!!x.anisotropyMap,y=C&&!!x.clearcoatMap,_=C&&!!x.clearcoatNormalMap,L=C&&!!x.clearcoatRoughnessMap,J=Bt&&!!x.diffuseRoughnessMap,V=ot&&!!x.iridescenceMap,st=ot&&!!x.iridescenceThicknessMap,at=Nt&&!!x.sheenColorMap,W=Nt&&!!x.sheenRoughnessMap,Y=!!x.specularMap,ht=!!x.specularColorMap,R=!!x.specularIntensityMap,$=mt&&!!x.transmissionMap,Z=mt&&!!x.thicknessMap,gt=!!x.gradientMap,dt=!!x.alphaMap,pt=x.alphaTest>0,Lt=!!x.alphaHash,qt=!!x.extensions,et=mn;x.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(et=i.toneMapping);let At=Jt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,zt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:It,fragmentShader:Q,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:fe,batchingColor:fe&&N._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&N.instanceColor!==null,instancingMorph:Ht&&N.morphTexture!==null,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Kt,envMap:ie,envMapMode:ie&&G.mapping,envMapPMREM:Jt,envMapMaxLod:Jt?At.length-1:null,envMapSize:Jt?At[0].width:null,aoMap:_e,lightMap:me,bumpMap:Me,normalMap:k,displacementMap:nt,emissiveMap:ft,normalMapObjectSpace:k&&x.normalMapType===ac,normalMapTangentSpace:k&&x.normalMapType===xo,packedNormalMap:k&&x.normalMapType===xo&&vm(x.normalMap.format),metalnessMap:ut,roughnessMap:lt,anisotropy:Ut,anisotropyMap:Tt,clearcoat:C,clearcoatMap:y,clearcoatNormalMap:_,clearcoatRoughnessMap:L,diffuseRoughness:Bt,diffuseRoughnessMap:J,dispersion:Wt,retroreflection:Et,iridescence:ot,iridescenceMap:V,iridescenceThicknessMap:st,sheen:Nt,sheenColorMap:at,sheenRoughnessMap:W,specularMap:Y,specularColorMap:ht,specularIntensityMap:R,transmission:mt,transmissionMap:$,thicknessMap:Z,gradientMap:gt,opaque:x.transparent===!1&&x.blending===Di&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:pt,alphaHash:Lt,combine:x.combine,mapUv:Ot&&u(x.map.channel),aoMapUv:_e&&u(x.aoMap.channel),lightMapUv:me&&u(x.lightMap.channel),bumpMapUv:Me&&u(x.bumpMap.channel),normalMapUv:k&&u(x.normalMap.channel),displacementMapUv:nt&&u(x.displacementMap.channel),emissiveMapUv:ft&&u(x.emissiveMap.channel),metalnessMapUv:ut&&u(x.metalnessMap.channel),roughnessMapUv:lt&&u(x.roughnessMap.channel),anisotropyMapUv:Tt&&u(x.anisotropyMap.channel),clearcoatMapUv:y&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:J&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:V&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:st&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:at&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(x.sheenRoughnessMap.channel),specularMapUv:Y&&u(x.specularMap.channel),specularColorMapUv:ht&&u(x.specularColorMap.channel),specularIntensityMapUv:R&&u(x.specularIntensityMap.channel),transmissionMapUv:$&&u(x.transmissionMap.channel),thicknessMapUv:Z&&u(x.thicknessMap.channel),alphaMapUv:dt&&u(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(k||Ut),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ot||dt),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&k===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:wt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ke,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&x.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function S(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)b.push(O),b.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(p(b,x),d(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function d(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let b=h[x.type],O;if(b){let D=_n[b];O=Mc.clone(D.uniforms)}else O=x.uniforms;return O}function T(x,b){let O=f.get(b);return O!==void 0?++O.usedTimes:(O=new _m(i,b,x,s),c.push(O),f.set(b,O)),O}function w(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:M,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:A}}function Mm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,g,S,p,d){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:u,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},i[t]=M):(M.id=h.id,M.object=h,M.geometry=u,M.material=g,M.materialVariant=o(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=p,M.group=d),t++,M}function l(h,u,g,S,p,d,M){M.reversedDepth===!0&&(p=-p);let T=a(h,u,g,S,p,d);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(h,u,g,S,p,d){let M=a(h,u,g,S,p,d);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function f(h,u){e.length>1&&e.sort(h||Sm),n.length>1&&n.sort(u||Vc),s.length>1&&s.sort(u||Vc)}function m(){for(let h=t,u=i.length;h<u;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:f}}function bm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Gc,i.set(n,[o])):s>=r.length?(o=new Gc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Tm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Am=0;function Em(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){let t=new wm,e=Tm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ae,o=new ae;function a(c){let f=0,m=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let u=0,g=0,S=0,p=0,d=0,M=0,T=0,w=0,E=0,A=0,x=0,b=0,O=0,D=0;c.sort(Em);for(let z=0,K=c.length;z<K;z++){let P=c[z],X=P.color,j=P.intensity,G=P.distance,rt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Yn?rt=P.shadow.map.texture:rt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=X.r*j,m+=X.g*j,h+=X.b*j;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],j);D++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=rt;let wt=tt.getViewportCount();for(let It=0;It<wt;It++)n.sunShadowMatrix[S+It]=tt.getMatrix(It),n.sunShadowCascade[S+It]=tt._cascadeData[It];S+=wt,g++}n.sun[u]=q,u++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=rt,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(X).multiplyScalar(j),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;let tt=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,tt.updateMatrices(P),P.castShadow&&O++),n.spotLightMatrix[M]=tt.matrix,P.castShadow){let it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[M]=it,n.spotShadowMap[M]=rt,x++}M++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(X).multiplyScalar(j),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=q,T++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let tt=P.shadow,it=e.get(P);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=rt,n.pointShadowMatrix[d]=P.shadow.matrix,A++}n.point[d]=q,d++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(j),q.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[w]=q,w++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=h;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==M||N.rectAreaLength!==T||N.hemiLength!==w||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==A||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==D)&&(n.sun.length=u,n.directional.length=p,n.spot.length=M,n.rectArea.length=T,n.point.length=d,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-O,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=D,N.sunLength=u,N.directionalLength=p,N.pointLength=d,N.spotLength=M,N.rectAreaLength=T,N.hemiLength=w,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=A,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=D,n.version=Am++)}function l(c,f){let m=0,h=0,u=0,g=0,S=0,p=0,d=f.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let w=c[M];if(w.isSunLight){let E=n.sun[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),m++}else if(w.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(w.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(w.isRectAreaLight){let E=n.rectArea[S];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(w.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(w.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),u++}else if(w.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:n}}function Hc(i){let t=new Cm(i),e=[],n=[],s=[];function r(m){f.camera=m,e.length=0,n.length=0,s.length=0}function o(m){m.isLightProbeGrid?s.push(m):e.push(m)}function a(m){n.push(m)}function l(){t.setup(e),s.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function c(m){t.setupView(e,m)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Rm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hc(i),t.set(s,[a])):r>=o.length?(a=new Hc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lm=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Dm=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Wc=new ae,ys=new U,za=new U;function Nm(i,t,e){let n=new fn,s=new Zt,r=new Zt,o=new re,a=new _r,l=new xr,c={},f=e.maxTextureSize,m={[qn]:ze,[ze]:qn,[ke]:ke},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Pm,fragmentShader:Im}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let g=new dn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Je(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let d=this.type;this.render=function(A,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Bl&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let O=i.getRenderTarget(),D=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ii),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let K=d!==this.type;K&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=A.length;P<X;P++){let j=A[P],G=j.shadow;if(G===void 0){Vt("WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let rt=G.getFrameExtents();s.multiply(rt),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Li){if(j.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Xe(s.x,s.y,{format:Yn,type:rn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),G.map.texture.name=j.name+".shadowMap",G.map.depthTexture=new Cn(s.x,s.y,sn),G.map.depthTexture.name=j.name+".shadowMapDepth",G.map.depthTexture.format=An,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae}else j.isPointLight?(G.map=new Ss(s.x),G.map.depthTexture=new ss(s.x,nn)):(G.map=new Xe(s.x,s.y),G.map.depthTexture=new Cn(s.x,s.y,nn)),G.map.depthTexture.name=j.name+".shadowMap",G.map.depthTexture.format=An,this.type===us?(G.map.depthTexture.compareFunction=q?Ra:Ca,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let tt=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();j.isPointLight!==!0&&G.updateMatrices(j,b);let it=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let wt=0;wt<tt;wt++){let It=G.getCamera(wt);if(j.isPointLight){let Q=G.camera,ct=G.matrix,yt=j.distance||Q.far;yt!==Q.far&&(Q.far=yt,Q.updateProjectionMatrix()),ys.setFromMatrixPosition(j.matrixWorld),Q.position.copy(ys),za.copy(Q.position),za.add(Lm[wt]),Q.up.copy(Dm[wt]),Q.lookAt(za),Q.updateMatrixWorld(),ct.makeTranslation(-ys.x,-ys.y,-ys.z),Wc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Wc,Q.coordinateSystem,Q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(G.map),i.clear());let Q=G.getViewport(wt);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),z.viewport(o)}n=G.getFrustum(wt),w(x,b,It,j,it,this.type)}G.isPointLightShadow!==!0&&this.type===Li&&M(G,b),G.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(O,D,N)};function M(A,x){let b=t.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new Xe(s.x,s.y,{format:Yn,type:rn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(x,null,b,h,S,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(x,null,b,u,S,null)}function T(A,x,b,O){let D=null,N=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)D=N;else if(D=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=D.uuid,K=x.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let X=P[K];X===void 0&&(X=D.clone(),P[K]=X,x.addEventListener("dispose",E)),D=X}if(D.visible=x.visible,D.wireframe=x.wireframe,O===Li?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:m[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=i.properties.get(D);z.light=b}return D}function w(A,x,b,O,D,N){if(A.visible===!1)return;if(A.layers.test(D)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Li)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let P=t.update(A),X=A.material;if(Array.isArray(X)){let j=P.groups;for(let G=0,rt=j.length;G<rt;G++){let q=j[G],tt=X[q.materialIndex];if(tt&&tt.visible){let it=T(A,tt,O,N);A.onBeforeShadow(i,A,x,b,P,it,q),i.renderBufferDirect(b,null,P,it,A,q),A.onAfterShadow(i,A,x,b,P,it,q)}}}else if(X.visible){let j=T(A,X,O,N);A.onBeforeShadow(i,A,x,b,P,j,null),i.renderBufferDirect(b,null,P,j,A,null),A.onAfterShadow(i,A,x,b,P,j,null)}}let K=A.children;for(let P=0,X=K.length;P<X;P++)w(K[P],x,b,O,D,N)}function E(A){A.target.removeEventListener("dispose",E);for(let b in c){let O=c[b],D=A.target.uuid;D in O&&(O[D].dispose(),delete O[D])}}}function Um(i,t){function e(){let R=!1,$=new re,Z=null,gt=new re(0,0,0,0);return{setMask:function(dt){Z!==dt&&!R&&(i.colorMask(dt,dt,dt,dt),Z=dt)},setLocked:function(dt){R=dt},setClear:function(dt,pt,Lt,qt,et){et===!0&&(dt*=qt,pt*=qt,Lt*=qt),$.set(dt,pt,Lt,qt),gt.equals($)===!1&&(i.clearColor(dt,pt,Lt,qt),gt.copy($))},reset:function(){R=!1,Z=null,gt.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,Z=null,gt=null,dt=null;return{setReversed:function(pt){if($!==pt){let Lt=t.get("EXT_clip_control");pt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),$=pt;let qt=dt;dt=null,this.setClear(qt)}},getReversed:function(){return $},setTest:function(pt){pt?Mt(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(pt){Z!==pt&&!R&&(i.depthMask(pt),Z=pt)},setFunc:function(pt){if($&&(pt=xc[pt]),gt!==pt){switch(pt){case Qs:i.depthFunc(i.NEVER);break;case js:i.depthFunc(i.ALWAYS);break;case tr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case er:i.depthFunc(i.EQUAL);break;case nr:i.depthFunc(i.GEQUAL);break;case ir:i.depthFunc(i.GREATER);break;case sr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=pt}},setLocked:function(pt){R=pt},setClear:function(pt){dt!==pt&&(dt=pt,$&&(pt=1-pt),i.clearDepth(pt))},reset:function(){R=!1,Z=null,gt=null,dt=null,$=!1}}}function s(){let R=!1,$=null,Z=null,gt=null,dt=null,pt=null,Lt=null,qt=null,et=null;return{setTest:function(At){R||(At?Mt(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(At){$!==At&&!R&&(i.stencilMask(At),$=At)},setFunc:function(At,zt,_t){(Z!==At||gt!==zt||dt!==_t)&&(i.stencilFunc(At,zt,_t),Z=At,gt=zt,dt=_t)},setOp:function(At,zt,_t){(pt!==At||Lt!==zt||qt!==_t)&&(i.stencilOp(At,zt,_t),pt=At,Lt=zt,qt=_t)},setLocked:function(At){R=At},setClear:function(At){et!==At&&(i.clearStencil(At),et=At)},reset:function(){R=!1,$=null,Z=null,gt=null,dt=null,pt=null,Lt=null,qt=null,et=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,f={},m={},h={},u=new WeakMap,g=[],S=null,p=!1,d=null,M=null,T=null,w=null,E=null,A=null,x=null,b=new Gt(0,0,0),O=0,D=!1,N=null,z=null,K=null,P=null,X=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,rt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=rt>=2);let tt=null,it={},wt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Q=new re().fromArray(wt),ct=new re().fromArray(It);function yt(R,$,Z,gt){let dt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(R,pt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Z;Lt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D($+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return pt}let Ft={};Ft[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(Si),Me(!1),k(aa),Mt(i.CULL_FACE),_e(ii);function Mt(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function Ht(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function fe(R,$){return h[R]!==$?(i.bindFramebuffer(R,$),h[R]=$,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ot(R,$){let Z=g,gt=!1;if(R){Z=u.get($),Z===void 0&&(Z=[],u.set($,Z));let dt=R.textures;if(Z.length!==dt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Lt=dt.length;pt<Lt;pt++)Z[pt]=i.COLOR_ATTACHMENT0+pt;Z.length=dt.length,gt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Z)}function Kt(R){return S!==R?(i.useProgram(R),S=R,!0):!1}let ie={[si]:i.FUNC_ADD,[kl]:i.FUNC_SUBTRACT,[Vl]:i.FUNC_REVERSE_SUBTRACT};ie[Gl]=i.MIN,ie[Hl]=i.MAX;let Jt={[Wl]:i.ZERO,[Xl]:i.ONE,[ql]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[Ql]:i.SRC_ALPHA_SATURATE,[$l]:i.DST_COLOR,[Zl]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[Jl]:i.ONE_MINUS_DST_ALPHA,[jl]:i.CONSTANT_COLOR,[tc]:i.ONE_MINUS_CONSTANT_COLOR,[ec]:i.CONSTANT_ALPHA,[nc]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(R,$,Z,gt,dt,pt,Lt,qt,et,At){if(R===ii){p===!0&&(Ht(i.BLEND),p=!1);return}if(p===!1&&(Mt(i.BLEND),p=!0),R!==zl){if(R!==d||At!==D){if((M!==si||E!==si)&&(i.blendEquation(i.FUNC_ADD),M=si,E=si),At)switch(R){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.ONE,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ha:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",R);break}else switch(R){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ca:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ha:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",R);break}T=null,w=null,A=null,x=null,b.set(0,0,0),O=0,d=R,D=At}return}dt=dt||$,pt=pt||Z,Lt=Lt||gt,($!==M||dt!==E)&&(i.blendEquationSeparate(ie[$],ie[dt]),M=$,E=dt),(Z!==T||gt!==w||pt!==A||Lt!==x)&&(i.blendFuncSeparate(Jt[Z],Jt[gt],Jt[pt],Jt[Lt]),T=Z,w=gt,A=pt,x=Lt),(qt.equals(b)===!1||et!==O)&&(i.blendColor(qt.r,qt.g,qt.b,et),b.copy(qt),O=et),d=R,D=!1}function me(R,$){R.side===ke?Ht(i.CULL_FACE):Mt(i.CULL_FACE);let Z=R.side===ze;$&&(Z=!Z),Me(Z),R.blending===Di&&R.transparent===!1?_e(ii):_e(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let gt=R.stencilWrite;a.setTest(gt),gt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ft(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function k(R){R!==Fl?(Mt(i.CULL_FACE),R!==z&&(R===aa?i.cullFace(i.BACK):R===Ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),z=R}function nt(R){R!==K&&(G&&i.lineWidth(R),K=R)}function ft(R,$,Z){R?(Mt(i.POLYGON_OFFSET_FILL),(P!==$||X!==Z)&&(P=$,X=Z,o.getReversed()&&($=-$,Z=-Z),i.polygonOffset($,Z))):Ht(i.POLYGON_OFFSET_FILL)}function ut(R){R?Mt(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function lt(R){R===void 0&&(R=i.TEXTURE0+j-1),tt!==R&&(i.activeTexture(R),tt=R)}function Ut(R,$,Z){Z===void 0&&(tt===null?Z=i.TEXTURE0+j-1:Z=tt);let gt=it[Z];gt===void 0&&(gt={type:void 0,texture:void 0},it[Z]=gt),(gt.type!==R||gt.texture!==$)&&(tt!==Z&&(i.activeTexture(Z),tt=Z),i.bindTexture(R,$||Ft[R]),gt.type=R,gt.texture=$)}function C(){let R=it[tt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Bt(){try{i.compressedTexImage2D(...arguments)}catch(R){Xt("WebGLState:",R)}}function Wt(){try{i.compressedTexImage3D(...arguments)}catch(R){Xt("WebGLState:",R)}}function Et(){try{i.texSubImage2D(...arguments)}catch(R){Xt("WebGLState:",R)}}function ot(){try{i.texSubImage3D(...arguments)}catch(R){Xt("WebGLState:",R)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Xt("WebGLState:",R)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Xt("WebGLState:",R)}}function Tt(){try{i.texStorage2D(...arguments)}catch(R){Xt("WebGLState:",R)}}function y(){try{i.texStorage3D(...arguments)}catch(R){Xt("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){Xt("WebGLState:",R)}}function L(){try{i.texImage3D(...arguments)}catch(R){Xt("WebGLState:",R)}}function J(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function V(R,$){m[R]!==$&&(i.pixelStorei(R,$),m[R]=$)}function st(R){Q.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function at(R){ct.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ct.copy(R))}function W(R,$){let Z=c.get($);Z===void 0&&(Z=new WeakMap,c.set($,Z));let gt=Z.get(R);gt===void 0&&(gt=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,gt,gt),Z.set(R,gt))}function Y(R,$,Z){let dt=c.get($).get(R);l[dt]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,dt,Z),l[dt]=Z)}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},tt=null,it={},h={},l={},u=new WeakMap,g=[],S=null,p=!1,d=null,M=null,T=null,w=null,E=null,A=null,x=null,b=new Gt(0,0,0),O=0,D=!1,N=null,z=null,K=null,P=null,X=null,Q.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Ht,bindFramebuffer:fe,drawBuffers:Ot,useProgram:Kt,setBlending:_e,setMaterial:me,setFlipSided:Me,setCullFace:k,setLineWidth:nt,setPolygonOffset:ft,setScissorTest:ut,activeTexture:lt,bindTexture:Ut,unbindTexture:C,compressedTexImage2D:Bt,compressedTexImage3D:Wt,texImage2D:_,texImage3D:L,pixelStorei:V,getParameter:J,updateUBOMapping:W,uniformBlockBinding:Y,texStorage2D:Tt,texStorage3D:y,texSubImage2D:Et,texSubImage3D:ot,compressedTexSubImage2D:Nt,compressedTexSubImage3D:mt,scissor:st,viewport:at,reset:ht}}function Fm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,f=new WeakMap,m=new Set,h,u=new WeakMap,g=new Set,S=new FinalizationRegistry(y=>g.delete(y)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(y,_){return p?new OffscreenCanvas(y,_):Ki("canvas")}function M(y,_,L){let J=1,V=Tt(y);if((V.width>L||V.height>L)&&(J=L/Math.max(V.width,V.height)),J<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let st=Math.floor(J*V.width),at=Math.floor(J*V.height);h===void 0&&(h=d(st,at));let W=_?d(st,at):h;return W.width=st,W.height=at,W.getContext("2d").drawImage(y,0,0,st,at),Vt("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+st+"x"+at+")."),W}else return"data"in y&&Vt("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),y;return y}function T(y){return y.generateMipmaps}function w(y){i.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(y,_,L,J,V,st=!1){if(y!==null){if(i[y]!==void 0)return i[y];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let at;J&&(at=t.get("EXT_texture_norm16"),at||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===i.RED&&(L===i.FLOAT&&(W=i.R32F),L===i.HALF_FLOAT&&(W=i.R16F),L===i.UNSIGNED_BYTE&&(W=i.R8),L===i.UNSIGNED_SHORT&&at&&(W=at.R16_EXT),L===i.SHORT&&at&&(W=at.R16_SNORM_EXT)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.R8UI),L===i.UNSIGNED_SHORT&&(W=i.R16UI),L===i.UNSIGNED_INT&&(W=i.R32UI),L===i.BYTE&&(W=i.R8I),L===i.SHORT&&(W=i.R16I),L===i.INT&&(W=i.R32I)),_===i.RG&&(L===i.FLOAT&&(W=i.RG32F),L===i.HALF_FLOAT&&(W=i.RG16F),L===i.UNSIGNED_BYTE&&(W=i.RG8),L===i.UNSIGNED_SHORT&&at&&(W=at.RG16_EXT),L===i.SHORT&&at&&(W=at.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RG8UI),L===i.UNSIGNED_SHORT&&(W=i.RG16UI),L===i.UNSIGNED_INT&&(W=i.RG32UI),L===i.BYTE&&(W=i.RG8I),L===i.SHORT&&(W=i.RG16I),L===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGB8UI),L===i.UNSIGNED_SHORT&&(W=i.RGB16UI),L===i.UNSIGNED_INT&&(W=i.RGB32UI),L===i.BYTE&&(W=i.RGB8I),L===i.SHORT&&(W=i.RGB16I),L===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),L===i.UNSIGNED_INT&&(W=i.RGBA32UI),L===i.BYTE&&(W=i.RGBA8I),L===i.SHORT&&(W=i.RGBA16I),L===i.INT&&(W=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_SHORT&&at&&(W=at.RGB16_EXT),L===i.SHORT&&at&&(W=at.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),_===i.RGBA){let Y=st?$i:ee.getTransfer(V);L===i.FLOAT&&(W=i.RGBA32F),L===i.HALF_FLOAT&&(W=i.RGBA16F),L===i.UNSIGNED_BYTE&&(W=Y===le?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&at&&(W=at.RGBA16_EXT),L===i.SHORT&&at&&(W=at.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(y,_){let L;return y?_===null||_===nn||_===oi?L=i.DEPTH24_STENCIL8:_===sn?L=i.DEPTH32F_STENCIL8:_===Ui&&(L=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===nn||_===oi?L=i.DEPTH_COMPONENT24:_===sn?L=i.DEPTH_COMPONENT32F:_===Ui&&(L=i.DEPTH_COMPONENT16),L}function b(y,_){return T(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ae&&y.minFilter!==Be?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function O(y){let _=new WeakRef(y);n.get(y).__ref=_,g.add(_),S.register(y,_,_)}function D(y){let _=n.get(y).__ref;_!==void 0&&(g.delete(_),S.unregister(_))}function N(y){K(y.target)}function z(y){P(y.target)}function K(y){y.removeEventListener("dispose",N),D(y),j(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&m.delete(y)}function P(y){y.removeEventListener("dispose",z),D(y),rt(y)}function X(){for(let y of g){let _=y.deref();_!==void 0&&(_.isRenderTarget===!0?P(_):K(_))}g.clear(),m.clear()}function j(y){let _=n.get(y);if(_.__webglInit===void 0)return;let L=y.source,J=u.get(L);if(J){let V=J[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&G(y),Object.keys(J).length===0&&u.delete(L)}n.remove(y)}function G(y){let _=n.get(y);i.deleteTexture(_.__webglTexture);let L=y.source,J=u.get(L);delete J[_.__cacheKey],o.memory.textures--}function rt(y){let _=n.get(y);_.__depthDisposeCallback&&_.__depthDisposeCallback();let L=y.depthTexture;if(L&&L.renderTarget===y&&K(L),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let st=0;st<_.__webglFramebuffer[V].length;st++)i.deleteFramebuffer(_.__webglFramebuffer[V][st]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let J=y.textures;for(let V=0,st=J.length;V<st;V++){let at=n.get(J[V]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(J[V])}n.remove(y)}let q=0;function tt(){q=0}function it(){return q}function wt(y){q=y}function It(){let y=q;return y>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,y}function Q(y){let _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.mipmapsAutoUpdate),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function ct(y,_){let L=n.get(y);if(y.isVideoTexture&&Nt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){let J=y.image;if(J===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{me(L,y,_);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function yt(y,_){let L=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){me(L,y,_);return}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function Ft(y,_){let L=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){me(L,y,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function Mt(y,_){let L=n.get(y);if(y.version>0&&L.__version!==y.version){Me(L,y,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let Ht={[rr]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[or]:i.MIRRORED_REPEAT},fe={[Ae]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},Ot={[cc]:i.NEVER,[Pa]:i.ALWAYS,[hc]:i.LESS,[Ca]:i.LEQUAL,[uc]:i.EQUAL,[Ra]:i.GEQUAL,[dc]:i.GREATER,[fc]:i.NOTEQUAL};function Kt(y,_){if(_.type===sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Be||_.magFilter===Nr||_.magFilter===ds||_.magFilter===Rn||_.minFilter===Be||_.minFilter===Nr||_.minFilter===ds||_.minFilter===Rn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ht[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ht[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ht[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,fe[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ae||_.minFilter!==ds&&_.minFilter!==Rn||_.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(y,_){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",N),O(_));let J=_.source,V=u.get(J);V===void 0&&(V={},u.set(J,V));let st=Q(_);if(st!==y.__cacheKey){V[st]===void 0&&(V[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),V[st].usedTimes++;let at=V[y.__cacheKey];at!==void 0&&(V[y.__cacheKey].usedTimes--,at.usedTimes===0&&G(_)),y.__cacheKey=st,y.__webglTexture=V[st].texture}return L}function Jt(y,_,L){return Math.floor(Math.floor(y/L)/_)}function _e(y,_,L,J){let st=y.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,J,_.data);else{st.sort((R,$)=>R.start-$.start);let at=0;for(let R=1;R<st.length;R++){let $=st[at],Z=st[R],gt=$.start+$.count,dt=Jt(Z.start,_.width,4),pt=Jt($.start,_.width,4);Z.start<=gt+1&&dt===pt&&Jt(Z.start+Z.count-1,_.width,4)===dt?$.count=Math.max($.count,Z.start+Z.count-$.start):(++at,st[at]=Z)}st.length=at+1;let W=e.getParameter(i.UNPACK_ROW_LENGTH),Y=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,$=st.length;R<$;R++){let Z=st[R],gt=Math.floor(Z.start/4),dt=Math.ceil(Z.count/4),pt=gt%_.width,Lt=Math.floor(gt/_.width),qt=dt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(i.TEXTURE_2D,0,pt,Lt,qt,et,L,J,_.data)}y.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,W),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function me(y,_,L){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let V=ie(y,_),st=_.source;e.bindTexture(J,y.__webglTexture,i.TEXTURE0+L);let at=n.get(st);if(st.version!==at.__version||V===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let et=ee.getPrimaries(ee.workingColorSpace),At=_.colorSpace===In?null:ee.getPrimaries(_.colorSpace),zt=_.colorSpace===In||et===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=M(_.image,!1,s.maxTextureSize);Y=mt(_,Y);let ht=r.convert(_.format,_.colorSpace),R=r.convert(_.type),$=A(_.internalFormat,ht,R,_.normalized,_.colorSpace,_.isVideoTexture);Kt(J,_);let Z,gt=_.mipmaps,dt=_.isVideoTexture!==!0,pt=at.__version===void 0||V===!0,Lt=st.dataReady,qt=b(_,Y);if(_.isDepthTexture)$=x(_.format===Pn,_.type),pt&&(dt?e.texStorage2D(i.TEXTURE_2D,1,$,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,ht,R,null));else if(_.isDataTexture)if(gt.length>0){dt&&pt&&e.texStorage2D(i.TEXTURE_2D,qt,$,gt[0].width,gt[0].height);for(let et=0,At=gt.length;et<At;et++)Z=gt[et],dt?Lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Z.width,Z.height,ht,R,Z.data):e.texImage2D(i.TEXTURE_2D,et,$,Z.width,Z.height,0,ht,R,Z.data);_.generateMipmaps=!1}else dt?(pt&&e.texStorage2D(i.TEXTURE_2D,qt,$,Y.width,Y.height),Lt&&_e(_,Y,ht,R)):e.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,ht,R,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){dt&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,$,gt[0].width,gt[0].height,Y.depth);for(let et=0,At=gt.length;et<At;et++)if(Z=gt[et],_.format!==on)if(ht!==null)if(dt){if(Lt)if(_.layerUpdates.size>0){let zt=Oa(Z.width,Z.height,_.format,_.type);for(let _t of _.layerUpdates){let Qt=Z.data.subarray(_t*zt/Z.data.BYTES_PER_ELEMENT,(_t+1)*zt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,_t,Z.width,Z.height,1,ht,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Z.width,Z.height,Y.depth,ht,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,$,Z.width,Z.height,Y.depth,0,Z.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Z.width,Z.height,Y.depth,ht,R,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,$,Z.width,Z.height,Y.depth,0,ht,R,Z.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{dt&&pt&&e.texStorage2D(i.TEXTURE_2D,qt,$,gt[0].width,gt[0].height);for(let et=0,At=gt.length;et<At;et++)Z=gt[et],_.format!==on?ht!==null?dt?Lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Z.width,Z.height,ht,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,et,$,Z.width,Z.height,0,Z.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Z.width,Z.height,ht,R,Z.data):e.texImage2D(i.TEXTURE_2D,et,$,Z.width,Z.height,0,ht,R,Z.data)}else if(_.isDataArrayTexture)if(dt){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,$,Y.width,Y.height,Y.depth),Lt)if(_.layerUpdates.size>0){let et=Oa(Y.width,Y.height,_.format,_.type);for(let At of _.layerUpdates){let zt=Y.data.subarray(At*et/Y.data.BYTES_PER_ELEMENT,(At+1)*et/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,Y.width,Y.height,1,ht,R,zt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ht,R,Y.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Y.width,Y.height,Y.depth,0,ht,R,Y.data);else if(_.isData3DTexture)dt?(pt&&e.texStorage3D(i.TEXTURE_3D,qt,$,Y.width,Y.height,Y.depth),Lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ht,R,Y.data)):e.texImage3D(i.TEXTURE_3D,0,$,Y.width,Y.height,Y.depth,0,ht,R,Y.data);else if(_.isFramebufferTexture){if(pt)if(dt)e.texStorage2D(i.TEXTURE_2D,qt,$,Y.width,Y.height);else{let et=Y.width,At=Y.height;for(let zt=0;zt<qt;zt++)e.texImage2D(i.TEXTURE_2D,zt,$,et,At,0,ht,R,null),et>>=1,At>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),Y.parentNode!==et){et.appendChild(Y),m.add(_),et.onpaint=At=>{let zt=At.changedElements;for(let _t of m)zt.includes(_t.image)&&(_t.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let zt=i.RGBA,_t=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,_t,Qt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(dt&&pt){let et=Tt(gt[0]);e.texStorage2D(i.TEXTURE_2D,qt,$,et.width,et.height)}for(let et=0,At=gt.length;et<At;et++)Z=gt[et],dt?Lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht,R,Z):e.texImage2D(i.TEXTURE_2D,et,$,ht,R,Z);_.generateMipmaps=!1}else if(dt){if(pt){let et=Tt(Y);e.texStorage2D(i.TEXTURE_2D,qt,$,et.width,et.height)}Lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,R,Y)}else e.texImage2D(i.TEXTURE_2D,0,$,ht,R,Y);T(_)&&_.mipmapsAutoUpdate===!0&&w(J),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Me(y,_,L){if(_.image.length!==6)return;let J=ie(y,_),V=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+L);let st=n.get(V);if(V.version!==st.__version||J===!0){e.activeTexture(i.TEXTURE0+L);let at=ee.getPrimaries(ee.workingColorSpace),W=_.colorSpace===In?null:ee.getPrimaries(_.colorSpace),Y=_.colorSpace===In||at===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,$=[];for(let _t=0;_t<6;_t++)!ht&&!R?$[_t]=M(_.image[_t],!0,s.maxCubemapSize):$[_t]=R?_.image[_t].image:_.image[_t],$[_t]=mt(_,$[_t]);let Z=$[0],gt=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),pt=A(_.internalFormat,gt,dt,_.normalized,_.colorSpace),Lt=_.isVideoTexture!==!0,qt=st.__version===void 0||J===!0,et=V.dataReady,At=b(_,Z);Kt(i.TEXTURE_CUBE_MAP,_);let zt;if(_.isDepthTexture){if(pt=x(_.format===Pn,_.type),qt)if(Lt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,pt,Z.width,Z.height);else for(let _t=0;_t<6;_t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pt,Z.width,Z.height,0,gt,dt,null)}else if(ht){Lt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,pt,Z.width,Z.height);for(let _t=0;_t<6;_t++){zt=$[_t].mipmaps;for(let Qt=0;Qt<zt.length;Qt++){let xe=zt[Qt];_.format!==on?gt!==null?Lt?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt,0,0,xe.width,xe.height,gt,xe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt,pt,xe.width,xe.height,0,xe.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt,0,0,xe.width,xe.height,gt,dt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt,pt,xe.width,xe.height,0,gt,dt,xe.data)}}}else{if(zt=_.mipmaps,Lt&&qt){zt.length>0&&At++;let _t=Tt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,pt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(R){Lt?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,$[_t].width,$[_t].height,gt,dt,$[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pt,$[_t].width,$[_t].height,0,gt,dt,$[_t].data);for(let Qt=0;Qt<zt.length;Qt++){let xn=zt[Qt].image[_t].image;Lt?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt+1,0,0,xn.width,xn.height,gt,dt,xn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt+1,pt,xn.width,xn.height,0,gt,dt,xn.data)}}else{Lt?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,gt,dt,$[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pt,gt,dt,$[_t]);for(let Qt=0;Qt<zt.length;Qt++){let xe=zt[Qt];Lt?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt+1,0,0,gt,dt,xe.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Qt+1,pt,gt,dt,xe.image[_t])}}}T(_)&&_.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),st.__version=V.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function k(y,_,L,J,V,st){let at=r.convert(L.format,L.colorSpace),W=r.convert(L.type),Y=A(L.internalFormat,at,W,L.normalized,L.colorSpace),ht=n.get(_),R=n.get(L);if(R.__renderTarget=_,!ht.__hasExternalTextures){let $=Math.max(1,_.width>>st),Z=Math.max(1,_.height>>st);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?e.texImage3D(V,st,Y,$,Z,_.depth,0,at,W,null):e.texImage2D(V,st,Y,$,Z,0,at,W,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,V,R.__webglTexture,0,Et(_)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,V,R.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(y,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){let J=_.depthTexture,V=J&&J.isDepthTexture?J.type:null,st=x(_.stencilBuffer,V),at=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et(_),st,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,y)}else{let J=_.textures;for(let V=0;V<J.length;V++){let st=J[V],at=r.convert(st.format,st.colorSpace),W=r.convert(st.type),Y=A(st.internalFormat,at,W,st.normalized,st.colorSpace);ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et(_),Y,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(y,_,L){let J=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(_.depthTexture);V.__renderTarget=_;let st=J?_.depthTexture.image[0]:_.depthTexture.image;(!V.__webglTexture||st.width!==_.width||st.height!==_.height)&&(st.width=_.width,st.height=_.height,_.depthTexture.needsUpdate=!0),J?Mt(_.depthTexture,0):ct(_.depthTexture,0);let at=V.__webglTexture,W=Et(_),Y=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,ht=_.depthTexture.format===Pn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===An)ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,Y,at,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,ht,Y,at,0);else if(_.depthTexture.format===Pn)ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,Y,at,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,ht,Y,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(y){let _=n.get(y),L=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){let J=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",V)};J.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=J}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let J=0;J<6;J++)ft(_.__webglFramebuffer[J],y,J);else y.texture.mipmaps.length>0?ft(_.__webglFramebuffer[0],y,0):ft(_.__webglFramebuffer,y,0);else if(L){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),nt(_.__webglDepthbuffer[J],y,!1);else{let V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,st)}}else if(y.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),nt(_.__webglDepthbuffer,y,!1);else{let V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(y,_,L){let J=n.get(y);_!==void 0&&k(J.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ut(y)}function Ut(y){let _=y.texture,L=n.get(y),J=n.get(_);y.addEventListener("dispose",z),O(y);let V=y.textures,st=y.isWebGLCubeRenderTarget===!0,at=V.length>1;if(at||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,o.memory.textures++),st){L.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps.length>0){L.__webglFramebuffer[W]=[];for(let Y=0;Y<_.mipmaps.length;Y++)L.__webglFramebuffer[W][Y]=i.createFramebuffer()}else L.__webglFramebuffer[W]=i.createFramebuffer()}else{if(_.mipmaps.length>0){L.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)L.__webglFramebuffer[W]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(at)for(let W=0,Y=V.length;W<Y;W++){let ht=n.get(V[W]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&ot(y)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let W=0;W<V.length;W++){let Y=V[W];L.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[W]);let ht=r.convert(Y.format,Y.colorSpace),R=r.convert(Y.type),$=A(Y.internalFormat,ht,R,Y.normalized,Y.colorSpace,y.isXRRenderTarget===!0),Z=Et(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,L.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(L.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)k(L.__webglFramebuffer[W][Y],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else k(L.__webglFramebuffer[W],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);T(_)?w(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(at){for(let W=0,Y=V.length;W<Y;W++){let ht=V[W],R=n.get(ht),$=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),Kt($,ht),k(L.__webglFramebuffer,y,ht,i.COLOR_ATTACHMENT0+W,$,0),T(ht)&&w($)}e.unbindTexture()}else{let W=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(W=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,J.__webglTexture),Kt(W,_),_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)k(L.__webglFramebuffer[Y],y,_,i.COLOR_ATTACHMENT0,W,Y);else k(L.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,W,0);T(_)?w(W):_.mipmaps.length>0&&i.texParameteri(W,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}y.depthBuffer&&ut(y)}function C(y){let _=y.textures;for(let L=0,J=_.length;L<J;L++){let V=_[L];if(T(V)&&V.mipmapsAutoUpdate===!0){let st=E(y),at=n.get(V).__webglTexture;e.bindTexture(st,at),w(st),e.unbindTexture()}}}let Bt=[];function Wt(y){if(y.samples>0){if(ot(y)===!1){let _=y.textures,L=y.width,J=y.height,V=i.COLOR_BUFFER_BIT,st=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(y),W=_.length>1;if(W)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);let R=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,L,J,0,0,L,J,V,i.NEAREST),l===!0&&(Bt.length=0,Bt.push(i.COLOR_ATTACHMENT0+ht),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&Bt.push(st),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);let R=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){let _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Et(y){return Math.min(s.maxSamples,y.samples)}function ot(y){let _=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Nt(y){let _=o.render.frame;f.get(y)!==_&&(f.set(y,_),y.update())}function mt(y,_){let L=y.colorSpace,J=y.format,V=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Ji&&L!==In&&(ee.getTransfer(L)===le?(J!==on||V!==Ge)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",L)),_}function Tt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=tt,this.getTextureUnits=it,this.setTextureUnits=wt,this.setTexture2D=ct,this.setTexture2DArray=yt,this.setTexture3D=Ft,this.setTextureCube=Mt,this.rebindTextures=lt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=k,this.useMultisampledRTT=ot,this.dispose=X}function Om(i,t){function e(n,s=In){let r,o=ee.getTransfer(s);if(n===Ge)return i.UNSIGNED_BYTE;if(n===Fr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Or)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ba)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wa)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ma)return i.BYTE;if(n===Sa)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===Ur)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Ta)return i.ALPHA;if(n===Aa)return i.RGB;if(n===on)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===Pn)return i.DEPTH_STENCIL;if(n===Ea)return i.RED;if(n===Br)return i.RED_INTEGER;if(n===Yn)return i.RG;if(n===zr)return i.RG_INTEGER;if(n===kr)return i.RGBA_INTEGER;if(n===fs||n===ps||n===ms||n===gs)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===Gr||n===Hr||n===Wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===Yr||n===Zr||n===Jr||n===_s||n===$r)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===qr)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yr)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zr)return r.COMPRESSED_R11_EAC;if(n===Jr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_s)return r.COMPRESSED_RG11_EAC;if(n===$r)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kr||n===Qr||n===jr||n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jr)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===xs||n===_o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ya=class extends hn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,m=null,h=null,u=null,g=null,S=typeof XRWebGLBinding<"u",p=new qa,d={},M=e.getContextAttributes(),T=null,w=null,E=[],A=[],x=new Zt,b=null,O=null,D=new Fe;D.viewport=new re;let N=new Fe;N.viewport=new re;let z=[D,N],K=new Pr,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ct=E[Q];return ct===void 0&&(ct=new Ai,E[Q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Q){let ct=E[Q];return ct===void 0&&(ct=new Ai,E[Q]=ct),ct.getGripSpace()},this.getHand=function(Q){let ct=E[Q];return ct===void 0&&(ct=new Ai,E[Q]=ct),ct.getHandSpace()};function j(Q){let ct=A.indexOf(Q.inputSource);if(ct===-1)return;let yt=E[ct];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,c||o),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",rt);for(let Q=0;Q<E.length;Q++){let ct=A[Q];ct!==null&&(A[Q]=null,E[Q].disconnect(ct))}P=null,X=null,p.reset();for(let Q in d)delete d[Q];if(t.setRenderTarget(T),u=null,h=null,m=null,s=null,w=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),O!==null){let Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",G),s.addEventListener("inputsourceschange",rt),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ft=null,Mt=null;M.depth&&(Mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=M.stencil?Pn:An,Ft=M.stencil?oi:nn);let Ht={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new Xe(h.textureWidth,h.textureHeight,{format:on,type:Ge,depthTexture:new Cn(h.textureWidth,h.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Xe(u.framebufferWidth,u.framebufferHeight,{format:on,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function rt(Q){for(let ct=0;ct<Q.removed.length;ct++){let yt=Q.removed[ct],Ft=A.indexOf(yt);Ft>=0&&(A[Ft]=null,E[Ft].disconnect(yt))}for(let ct=0;ct<Q.added.length;ct++){let yt=Q.added[ct],Ft=A.indexOf(yt);if(Ft===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=A.length){A.push(yt),Ft=Ht;break}else if(A[Ht]===null){A[Ht]=yt,Ft=Ht;break}if(Ft===-1)break}let Mt=E[Ft];Mt&&Mt.connect(yt)}}function q(Q,ct){ct===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ct.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ct=Q.near,yt=Q.far;p.texture!==null&&(p.depthNear>0&&(ct=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),K.near=N.near=D.near=ct,K.far=N.far=D.far=yt,(P!==K.near||X!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),P=K.near,X=K.far),K.layers.mask=Q.layers.mask|6,D.layers.mask=K.layers.mask&-5,N.layers.mask=K.layers.mask&-3;let Ft=Q.parent,Mt=K.cameras;q(K,Ft);for(let Ht=0;Ht<Mt.length;Ht++)q(Mt[Ht],Ft);K.projectionMatrix.copy(D.projectionMatrix),K.projectionMatrixInverse.copy(D.projectionMatrixInverse),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),tt(Q,K,Ft)};function tt(Q,ct,yt){yt===null?Q.matrix.copy(ct.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ct.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(K)},this.getCameraTexture=function(Q){return d[Q]};let it=null;function wt(Q,ct){if(f=ct.getViewerPose(c||o),g=ct,f!==null){let yt=f.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let Ft=!1;yt.length!==K.cameras.length&&(K.cameras.length=0,Ft=!0);for(let Ot=0;Ot<yt.length;Ot++){let Kt=yt[Ot],ie=null;if(u!==null)ie=u.getViewport(Kt);else{let _e=m.getViewSubImage(h,Kt);ie=_e.viewport,Ot===0&&(t.setRenderTargetTextures(w,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(w))}let Jt=z[Ot];Jt===void 0&&(Jt=new Fe,Jt.layers.enable(Ot),Jt.viewport=new re,z[Ot]=Jt),Jt.matrix.fromArray(Kt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Kt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ot===0&&(K.matrix.copy(Jt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ft===!0&&K.cameras.push(Jt)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=n.getBinding();let Ot=m.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&p.init(Ot,s.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),m=n.getBinding();for(let Ot=0;Ot<yt.length;Ot++){let Kt=yt[Ot].camera;if(Kt){let ie=d[Kt];ie||(ie=new rs,d[Kt]=ie);let Jt=m.getCameraImage(Kt);ie.sourceTexture=Jt}}}}for(let yt=0;yt<E.length;yt++){let Ft=A[yt],Mt=E[yt];Ft!==null&&Mt!==void 0&&Mt.update(Ft,ct,c||o)}it&&it(Q,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let It=new Xc;It.setAnimationLoop(wt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}},km=new ae,eh=new kt;eh.set(-1,0,0,0,1,0,0,0,1);function Vm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Na(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,T,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),m(p,d)):d.isMeshPhongMaterial?(r(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&u(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ze&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ze&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=t.get(d),T=M.envMap,w=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(eh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=T*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function m(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,M){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gm(i,t,e,n){let s={},r={};function o(M,T){let w=T.program;n.uniformBlockBinding(M,w,s[M.id])}function a(M,T){let w=s[M.id];w===void 0&&(g(M),w=l(M),s[M.id]=w,M.addEventListener("dispose",p));let E=T.program;n.updateUBOMapping(M,E);let A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){let T=i.createBuffer(),w=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],w=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,x=w.length;A<x;A++){let b=w[A];if(Array.isArray(b))for(let O=0,D=b.length;O<D;O++)f(b[O],A,O,E);else f(b,A,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,T,w,E){if(h(M,T,w,E)===!0){let A=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let O=0;O<x.length;O++){let D=x[O],N=S(D,!0);m(D,M.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else m(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function m(M,T,w){typeof M=="number"||typeof M=="boolean"?T[w]=M:M.isMatrix3?(T[w]=M.elements[0],T[w+1]=M.elements[1],T[w+2]=M.elements[2],T[w+3]=0,T[w+4]=M.elements[3],T[w+5]=M.elements[4],T[w+6]=M.elements[5],T[w+7]=0,T[w+8]=M.elements[6],T[w+9]=M.elements[7],T[w+10]=M.elements[8],T[w+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-w),w):M.toArray(T,w)}function h(M,T,w,E){let A=M.value,x=T+"_"+w;if(Array.isArray(A)){E[x]===void 0&&(E[x]=[]);let b=E[x],O=!1;for(let D=0;D<A.length;D++)u(A[D],b,D)===!0&&(O=!0);return O}return u(A,E,x)}function u(M,T,w){if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{let E=T[w];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function g(M){let T=M.uniforms,w=0,E=16;for(let x=0,b=T.length;x<b;x++){let O=Array.isArray(T[x])?T[x]:[T[x]];for(let D=0,N=O.length;D<N;D++){let z=O[D],K=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(T[x])||Array.isArray(z.value),X=w;for(let G=0,rt=K.length;G<rt;G++){let q=K[G],tt=S(q,P),it=w%E,wt=it%tt.boundary,It=it+wt;w+=wt,It!==0&&E-It<tt.storage&&(w+=E-It),G===0&&(X=w),w+=tt.storage}let j=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new j((w-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}let A=w%E;return A>0&&(w+=E-A),M.__size=w,M.__cache={},this}function S(M,T){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function p(M){let T=M.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:d}}var Hm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gn=null;function Wm(){return gn===null&&(gn=new pr(Hm,16,16,Yn,rn),gn.name="DFG_LUT",gn.minFilter=Be,gn.magFilter=Be,gn.wrapS=ln,gn.wrapT=ln,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}var So=class{constructor(t={}){let{canvas:e=mc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Ge}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let S=u,p=new Set([kr,zr,Br]),d=new Set([Ge,nn,Ui,oi,Fr,Or]),M=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},E=null,A=null,x=[],b=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,N=!1,z=null,K=null,P=null,X=null;this._outputColorSpace=Ue;let j=0,G=0,rt=null,q=-1,tt=null,it=new re,wt=new re,It=null,Q=new Gt(0),ct=0,yt=e.width,Ft=e.height,Mt=1,Ht=null,fe=null,Ot=new re(0,0,yt,Ft),Kt=new re(0,0,yt,Ft),ie=!1,Jt=new fn,_e=new mr,me=!1,Me=!1,k=new ae,nt=new U,ft=new re,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Ut(){return rt===null?Mt:1}let C=n;function Bt(v,I){return e.getContext(v,I)}let Wt,Et,ot,Nt,mt,Tt,y,_,L,J,V,st,at,W,Y,ht,R,$,Z,gt,dt,pt,Lt;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),C===null){let I="webgl2";if(C=Bt(I,v),C===null)throw Bt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(v){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Xt("WebGLRenderer: "+v.message),v}function qt(){Wt=new ep(C),Wt.init(),dt=new Om(C,Wt),Et=new Wf(C,Wt,t,dt),ot=new Um(C,Wt),Et.reversedDepthBuffer&&h&&ot.buffers.depth.setReversed(!0),K=C.createFramebuffer(),P=C.createFramebuffer(),X=C.createFramebuffer(),Nt=new sp(C),mt=new Mm,Tt=new Fm(C,Wt,ot,mt,Et,dt,Nt),y=new tp(D),_=new ru(C),pt=new Gf(C,_),L=new np(C,_,Nt,pt),J=new op(C,L,_,pt,Nt),$=new rp(C,Et,Tt),Y=new Xf(mt),V=new ym(D,y,Wt,Et,pt,Y),st=new Vm(D,mt),at=new bm,W=new Rm(Wt),R=new Vf(D,y,ot,J,g,l),ht=new Nm(D,J,Et),Lt=new Gm(C,Nt,Et,ot),Z=new Hf(C,Wt,Nt),gt=new ip(C,Wt,Nt),Nt.programs=V.programs,D.capabilities=Et,D.extensions=Wt,D.properties=mt,D.renderLists=at,D.shadowMap=ht,D.state=ot,D.info=Nt}S!==Ge&&(O=new lp(S,e.width,e.height,a,s,r));let et=new Ya(D,C);this.xr=et,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=Wt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Wt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(v){v!==void 0&&(Mt=v,this.setSize(yt,Ft,!1))},this.getSize=function(v){return v.set(yt,Ft)},this.setSize=function(v,I,H=!0){if(et.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=v,Ft=I,e.width=Math.floor(v*Mt),e.height=Math.floor(I*Mt),H===!0&&(e.style.width=v+"px",e.style.height=I+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(yt*Mt,Ft*Mt).floor()},this.setDrawingBufferSize=function(v,I,H){yt=v,Ft=I,Mt=H,e.width=Math.floor(v*H),e.height=Math.floor(I*H),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(S===Ge){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(Ot)},this.setViewport=function(v,I,H,F){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,I,H,F),ot.viewport(it.copy(Ot).multiplyScalar(Ut()).round())},this.getScissor=function(v){return v.copy(Kt)},this.setScissor=function(v,I,H,F){v.isVector4?Kt.set(v.x,v.y,v.z,v.w):Kt.set(v,I,H,F),ot.scissor(wt.copy(Kt).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(v){ot.setScissorTest(ie=v)},this.setOpaqueSort=function(v){Ht=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,H=!0){let F=0;if(v){let B=!1;if(rt!==null){let vt=rt.texture.format;B=p.has(vt)}if(B){let vt=rt.texture.type,Ct=d.has(vt),xt=R.getClearColor(),bt=R.getClearAlpha(),Dt=xt.r,Yt=xt.g,jt=xt.b;Ct?(M[0]=Dt,M[1]=Yt,M[2]=jt,M[3]=bt,C.clearBufferuiv(C.COLOR,0,M)):(T[0]=Dt,T[1]=Yt,T[2]=jt,T[3]=bt,C.clearBufferiv(C.COLOR,0,T))}else F|=C.COLOR_BUFFER_BIT}I&&(F|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),R.dispose(),at.dispose(),W.dispose(),Tt.dispose(),mt.dispose(),y.dispose(),J.dispose(),L.dispose(),pt.dispose(),Lt.dispose(),V.dispose(),et.dispose(),et.removeEventListener("sessionstart",nl),et.removeEventListener("sessionend",il),Zn.stop()};function At(v){v.preventDefault(),La("WebGLRenderer: Context Lost."),N=!0}function zt(){La("WebGLRenderer: Context Restored."),N=!1;let v=Nt.autoReset,I=ht.enabled,H=ht.autoUpdate,F=ht.needsUpdate,B=ht.type;qt(),Nt.autoReset=v,ht.enabled=I,ht.autoUpdate=H,ht.needsUpdate=F,ht.type=B}function _t(v){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qt(v){let I=v.target;I.removeEventListener("dispose",Qt),xe(I)}function xe(v){xn(v),mt.remove(v)}function xn(v){let I=mt.get(v).programs;I!==void 0&&(I.forEach(function(H){V.releaseProgram(H)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,H,F,B,vt){I===null&&(I=ut);let Ct=B.isMesh&&B.matrixWorld.determinantAffine()<0,xt=fh(v,I,H,F,B);ot.setMaterial(F,Ct);let bt=H.index,Dt=1;if(F.wireframe===!0){if(bt=L.getWireframeAttribute(H),bt===void 0)return;Dt=2}let Yt=H.drawRange,jt=H.attributes.position,Rt=Yt.start*Dt,te=(Yt.start+Yt.count)*Dt;vt!==null&&(Rt=Math.max(Rt,vt.start*Dt),te=Math.min(te,(vt.start+vt.count)*Dt)),bt!==null?(Rt=Math.max(Rt,0),te=Math.min(te,bt.count)):jt!=null&&(Rt=Math.max(Rt,0),te=Math.min(te,jt.count));let ve=te-Rt;if(ve<0||ve===1/0)return;pt.setup(B,F,xt,H,bt);let ue,he=Z;if(bt!==null&&(ue=_.get(bt),he=gt,he.setIndex(ue)),B.isMesh)F.wireframe===!0?(ot.setLineWidth(F.wireframeLinewidth*Ut()),he.setMode(C.LINES)):he.setMode(C.TRIANGLES);else if(B.isLine){let Ce=F.linewidth;Ce===void 0&&(Ce=1),ot.setLineWidth(Ce*Ut()),B.isLineSegments?he.setMode(C.LINES):B.isLineLoop?he.setMode(C.LINE_LOOP):he.setMode(C.LINE_STRIP)}else B.isPoints?he.setMode(C.POINTS):B.isSprite&&he.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ce=B._multiDrawStarts,Pt=B._multiDrawCounts,Ne=B._multiDrawCount,oe=bt?_.get(bt).bytesPerElement:1,Jn=mt.get(F).currentProgram.getUniforms();for(let Re=0;Re<Ne;Re++)Jn.setValue(C,"_gl_DrawID",Re),he.render(Ce[Re]/oe,Pt[Re])}else if(B.isInstancedMesh)he.renderInstances(Rt,ve,B.count);else if(H.isInstancedBufferGeometry){let Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Pt=Math.min(H.instanceCount,Ce);he.renderInstances(Rt,ve,Pt)}else he.render(Rt,ve)};function el(v,I,H,F){z!==null&&v.isNodeMaterial&&z.setObject(F,v),me===!0&&Y.setState(v,H,!1),v.transparent===!0&&v.side===ke&&v.forceSinglePass===!1?(v.side=ze,v.needsUpdate=!0,Gi(v,I,F),v.side=qn,v.needsUpdate=!0,Gi(v,I,F),v.side=ke):Gi(v,I,F)}this.compile=function(v,I,H=null){H===null&&(H=v),z!==null&&z.renderStart(v,I,H),A=W.get(H),A.init(I),b.push(A),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),v!==H&&v.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),Me=this.localClippingEnabled,me=Y.init(this.clippingPlanes,Me),me===!0&&Y.setGlobalState(this.clippingPlanes,I),z!==null&&ht.render(A.state.shadowsArray,H,I);let F=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let vt=B.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let xt=vt[Ct];el(xt,H,I,B),F.add(xt)}else el(vt,H,I,B),F.add(vt)}),A=b.pop(),z!==null&&z.renderEnd(),F},this.compileAsync=function(v,I,H=null){let F=this.compile(v,I,H);return new Promise(B=>{function vt(){if(F.forEach(function(Ct){let bt=mt.get(Ct).currentProgram;(bt===void 0||bt.isReady())&&F.delete(Ct)}),F.size===0){B(v);return}setTimeout(vt,10)}Wt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ro=null;function uh(v){Ro&&Ro(v)}function nl(){Zn.stop()}function il(){Zn.start()}let Zn=new Xc;Zn.setAnimationLoop(uh),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(v){Ro=v,et.setAnimationLoop(v),v===null?Zn.stop():Zn.start()},et.addEventListener("sessionstart",nl),et.addEventListener("sessionend",il),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(v,I);let H=et.enabled===!0&&et.isPresenting===!0,F=O!==null&&(rt===null||H)&&O.begin(D,rt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,I,rt),A=W.get(v,b.length),A.init(I),A.state.textureUnits=Tt.getTextureUnits(),b.push(A),k.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?_e.setFromArrayCamera(I):Jt.setFromProjectionMatrix(k,Ze,I.reversedDepth),Me=this.localClippingEnabled,me=Y.init(this.clippingPlanes,Me),E=at.get(v,x.length),E.init(),x.push(E),this.info.render.frame++,et.enabled===!0&&et.isPresenting===!0){let Ct=D.xr.getDepthSensingMesh();Ct!==null&&Po(Ct,I,-1/0,D.sortObjects)}Po(v,I,0,D.sortObjects),E.finish(),z!==null&&z.updateLights(A.state.lightsArray),D.sortObjects===!0&&E.sort(Ht,fe),lt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,lt&&R.addToRenderList(E,v),this.info.autoReset===!0&&this.info.reset(),me===!0&&Y.beginShadows();let B=A.state.shadowsArray;if(ht.render(B,v,I),me===!0&&Y.endShadows(),(F&&O.hasRenderPass())===!1){let Ct=E.opaque,xt=E.transmissive;if(A.setupLights(),I.isArrayCamera){let bt=I.cameras;if(xt.length>0)for(let Dt=0,Yt=bt.length;Dt<Yt;Dt++){let jt=bt[Dt];rl(Ct,xt,v,jt)}lt&&R.render(v);for(let Dt=0,Yt=bt.length;Dt<Yt;Dt++){let jt=bt[Dt];sl(E,v,jt,jt.viewport)}}else xt.length>0&&rl(Ct,xt,v,I),lt&&R.render(v),sl(E,v,I)}rt!==null&&G===0&&(Tt.updateMultisampleRenderTarget(rt),Tt.updateRenderTargetMipmap(rt)),F&&O.end(D),v.isScene===!0&&v.onAfterRender(D,v,I),pt.resetDefaultState(),q=-1,tt=null,b.pop(),b.length>0?(A=b[b.length-1],Tt.setTextureUnits(A.state.textureUnits),me===!0&&Y.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function Po(v,I,H,F){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let Ct=I.isArrayCamera?_e:Jt;if(!v.frustumCulled||v.intersectsFrustum(Ct)){F&&ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(k);let xt=J.update(v),bt=v.material;bt.visible&&E.push(v,xt,bt,H,ft.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let Ct=I.isArrayCamera?_e:Jt;if(!v.frustumCulled||v.intersectsFrustum(Ct)){let xt=J.update(v),bt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ft.copy(v.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ft.copy(xt.boundingSphere.center)),ft.applyMatrix4(v.matrixWorld).applyMatrix4(k)),Array.isArray(bt)){let Dt=xt.groups;for(let Yt=0,jt=Dt.length;Yt<jt;Yt++){let Rt=Dt[Yt],te=bt[Rt.materialIndex];te&&te.visible&&E.push(v,xt,te,H,ft.z,Rt,I)}}else bt.visible&&E.push(v,xt,bt,H,ft.z,null,I)}}}let vt=v.children;for(let Ct=0,xt=vt.length;Ct<xt;Ct++)Po(vt[Ct],I,H,F)}function sl(v,I,H,F){let{opaque:B,transmissive:vt,transparent:Ct}=v;A.setupLightsView(H),me===!0&&Y.setGlobalState(D.clippingPlanes,H),F&&ot.viewport(it.copy(F)),B.length>0&&Cs(B,I,H),vt.length>0&&Cs(vt,I,H),Ct.length>0&&Cs(Ct,I,H),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function rl(v,I,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let Rt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new Xe(1,1,{generateMipmaps:!0,type:Rt?rn:Ge,minFilter:Rn,samples:Math.max(4,Et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let vt=A.state.transmissionRenderTarget[F.id],Ct=F.viewport||it;vt.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);let xt=D.getRenderTarget(),bt=D.getActiveCubeFace(),Dt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(Q),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),lt&&R.render(H);let Yt=D.toneMapping;D.toneMapping=mn;let jt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),me===!0&&Y.setGlobalState(D.clippingPlanes,F),Cs(v,H,F),Tt.updateMultisampleRenderTarget(vt),Tt.updateRenderTargetMipmap(vt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let te=0,ve=I.length;te<ve;te++){let ue=I[te],{object:he,geometry:Ce,material:Pt,group:Ne}=ue;if(Pt.side===ke&&he.layers.test(F.layers)){let oe=Pt.side;Pt.side=ze,Pt.needsUpdate=!0,ol(he,H,F,Ce,Pt,Ne),Pt.side=oe,Pt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Tt.updateMultisampleRenderTarget(vt),Tt.updateRenderTargetMipmap(vt))}D.setRenderTarget(xt,bt,Dt),D.setClearColor(Q,ct),jt!==void 0&&(F.viewport=jt),D.toneMapping=Yt}function Cs(v,I,H){let F=I.isScene===!0?I.overrideMaterial:null;for(let B=0,vt=v.length;B<vt;B++){let Ct=v[B],{object:xt,geometry:bt,group:Dt}=Ct,Yt=Ct.material;Yt.allowOverride===!0&&F!==null&&(Yt=F),xt.layers.test(H.layers)&&ol(xt,I,H,bt,Yt,Dt)}}function ol(v,I,H,F,B,vt){z!==null&&B.isNodeMaterial&&z.setObject(v,B),v.onBeforeRender(D,I,H,F,B,vt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(D,I,H,F,v,vt),B.transparent===!0&&B.side===ke&&B.forceSinglePass===!1?(B.side=ze,B.needsUpdate=!0,D.renderBufferDirect(H,I,F,B,v,vt),B.side=qn,B.needsUpdate=!0,D.renderBufferDirect(H,I,F,B,v,vt),B.side=ke):D.renderBufferDirect(H,I,F,B,v,vt),v.onAfterRender(D,I,H,F,B,vt)}function al(v){let I=0;for(let H of v)H.texture!==null&&I++;return I}function Gi(v,I,H){I.isScene!==!0&&(I=ut);let F=mt.get(v),B=A.state.lights,vt=A.state.shadowsArray,Ct=B.state.version,xt=V.getParameters(v,B.state,vt,I,H,A.state.lightProbeGridArray),bt=V.getProgramCacheKey(xt),Dt=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,F.fog=I.fog;let Yt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=y.get(v.envMap||F.environment,Yt),F.envMapRotation=F.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",Qt),Dt=new Map,F.programs=Dt,F.programVariants=new Map);let jt=Dt.get(bt);if(jt!==void 0){if(F.currentProgram===jt&&F.lightsStateVersion===Ct)return cl(v,xt),jt}else xt.uniforms=V.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,H,xt),v.onBeforeCompile(xt,D),jt=V.acquireProgram(xt,bt),Dt.set(bt,jt),F.uniforms=xt.uniforms;let Rt=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Rt.clippingPlanes=Y.uniform),cl(v,xt),F.needsLights=mh(v),F.lightsStateVersion=Ct,F.needsLights&&(Rt.ambientLightColor.value=B.state.ambient,Rt.lightProbe.value=B.state.probe,Rt.sunLights.value=B.state.sun,Rt.sunLightShadows.value=B.state.sunShadow,Rt.directionalLights.value=B.state.directional,Rt.directionalLightShadows.value=B.state.directionalShadow,Rt.spotLights.value=B.state.spot,Rt.spotLightShadows.value=B.state.spotShadow,Rt.rectAreaLights.value=B.state.rectArea,Rt.ltc_1.value=B.state.rectAreaLTC1,Rt.ltc_2.value=B.state.rectAreaLTC2,Rt.pointLights.value=B.state.point,Rt.pointLightShadows.value=B.state.pointShadow,Rt.hemisphereLights.value=B.state.hemi,Rt.sunShadowMatrix.value=B.state.sunShadowMatrix,Rt.sunShadowCascade.value=B.state.sunShadowCascade,Rt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Rt.spotLightMatrix.value=B.state.spotLightMatrix,Rt.spotLightMap.value=B.state.spotLightMap,Rt.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=al(A.state.lightProbeGridArray),F.currentProgram=jt,F.uniformsList=null,jt}function dh(v,I,H,F,B){let vt=mt.get(v),Ct=vt.currentProgram.id+","+F+","+B,xt=vt.programVariants.get(Ct);return xt===void 0?(xt=Gi(v,I,H),vt.programVariants.set(Ct,xt)):(vt.currentProgram=xt,vt.uniformsList=null,vt.outputColorSpace=F,vt.toneMapping=B),xt}function ll(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Fi.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function cl(v,I){let H=mt.get(v);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function fh(v,I,H,F,B){I.isScene!==!0&&(I=ut),Tt.resetTextureUnits();let vt=I.fog,Ct=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?I.environment:null,xt=rt===null?D.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ee.workingColorSpace,bt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Dt=y.get(F.envMap||Ct,bt),Yt=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,jt=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Rt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ve=!!H.morphAttributes.color,ue=mn;F.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=D.toneMapping);let he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ce=he!==void 0?he.length:0,Pt=mt.get(F),Ne=A.state.lights;if(me===!0&&(Me===!0||v!==tt)){let ge=v===tt&&F.id===q;Y.setState(F,v,ge)}let oe=!1,Jn=!1;F.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==Ne.state.version||B.isBatchedMesh&&Pt.batching===!1||!B.isBatchedMesh&&Pt.batching===!0||B.isBatchedMesh&&Pt.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Pt.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Pt.instancing===!1||!B.isInstancedMesh&&Pt.instancing===!0||B.isSkinnedMesh&&Pt.skinning===!1||!B.isSkinnedMesh&&Pt.skinning===!0||B.isInstancedMesh&&Pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pt.instancingMorph===!1&&B.morphTexture!==null||Pt.envMap!==Dt||F.fog===!0&&Pt.fog!==vt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Y.numPlanes||Pt.numIntersection!==Y.numIntersection)||Pt.vertexAlphas!==Yt||Pt.vertexTangents!==jt||Pt.morphTargets!==Rt||Pt.morphNormals!==te||Pt.morphColors!==ve||Pt.morphTargetsCount!==Ce||Pt.numLightProbeGrids!==al(A.state.lightProbeGridArray)?oe=!0:(Pt.outputColorSpace!==xt||Pt.toneMapping!==ue)&&(Jn=!0):(oe=!0,Pt.__version=F.version);let Re=Pt.currentProgram;(oe===!0||Jn===!0)&&(Re=Jn===!0?dh(F,I,B,xt,ue):Gi(F,I,B),z&&F.isNodeMaterial&&z.onUpdateProgram(F,Re,Pt));let Rs=!1,Un=!1,$n=!1,se=Re.getUniforms(),Ee=Pt.uniforms;if(ot.useProgram(Re.program)&&(Rs=!0,Un=!0,$n=!0),F.id!==q&&(q=F.id,Un=!0),Rs||tt!==v){ot.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),se.setValue(C,"projectionMatrix",v.projectionMatrix),se.setValue(C,"viewMatrix",v.matrixWorldInverse);let we=se.map.cameraPosition;we!==void 0&&we.setValue(C,nt.setFromMatrixPosition(v.matrixWorld)),Et.logarithmicDepthBuffer&&se.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&se.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,Un=!0,$n=!0)}if(Pt.needsLights&&(Ne.state.sunShadowMap.length>0&&se.setValue(C,"sunShadowMap",Ne.state.sunShadowMap,Tt),Ne.state.directionalShadowMap.length>0&&se.setValue(C,"directionalShadowMap",Ne.state.directionalShadowMap,Tt),Ne.state.spotShadowMap.length>0&&se.setValue(C,"spotShadowMap",Ne.state.spotShadowMap,Tt),Ne.state.pointShadowMap.length>0&&se.setValue(C,"pointShadowMap",Ne.state.pointShadowMap,Tt)),B.isSkinnedMesh){se.setOptional(C,B,"bindMatrix"),se.setOptional(C,B,"bindMatrixInverse");let ge=B.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),se.setValue(C,"boneTexture",ge.boneTexture,Tt))}B.isBatchedMesh&&(se.setOptional(C,B,"batchingTexture"),se.setValue(C,"batchingTexture",B._matricesTexture,Tt),se.setOptional(C,B,"batchingIdTexture"),se.setValue(C,"batchingIdTexture",B._indirectTexture,Tt),se.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&se.setValue(C,"batchingColorTexture",B._colorsTexture,Tt));let $e=H.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&$.update(B,H,Re),(Un||Pt.receiveShadow!==B.receiveShadow)&&(Pt.receiveShadow=B.receiveShadow,se.setValue(C,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&I.environment!==null&&(Ee.envMapIntensity.value=I.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Wm()),Un){if(se.setValue(C,"toneMappingExposure",D.toneMappingExposure),Pt.needsLights&&ph(Ee,$n),vt&&F.fog===!0&&st.refreshFogUniforms(Ee,vt),st.refreshMaterialUniforms(Ee,F,Mt,Ft,A.state.transmissionRenderTarget[v.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let ge=w,we=0;for(let vn of A.state.lightProbeGridArray)vn.texture!==null&&(ge.textures[we]=vn.texture,ge.min[we]=vn.boundingBox.min,ge.max[we]=vn.boundingBox.max,ge.resolution[we]=vn.resolution,we++);for(let vn in ge)ge[vn].length=we;Ee.probesSH.value=ge.textures,Ee.probesMin.value=ge.min,Ee.probesMax.value=ge.max,Ee.probesResolution.value=ge.resolution}Fi.upload(C,ll(Pt),Ee,Tt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Fi.upload(C,ll(Pt),Ee,Tt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&se.setValue(C,"center",B.center),se.setValue(C,"modelViewMatrix",B.modelViewMatrix),se.setValue(C,"normalMatrix",B.normalMatrix),se.setValue(C,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let ge=F.uniformsGroups;for(let we=0,vn=ge.length;we<vn;we++){let ul=ge[we];Lt.update(ul,Re),Lt.bind(ul,Re)}}return Re}function ph(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function mh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(v,I,H){let F=mt.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),mt.get(v.texture).__webglTexture=I,mt.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let H=mt.get(v);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,H=0){rt=v,j=I,G=H;let F=null,B=!1,vt=!1;if(v){let xt=mt.get(v);if(xt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(C.FRAMEBUFFER,xt.__webglFramebuffer),it.copy(v.viewport),wt.copy(v.scissor),It=v.scissorTest,ot.viewport(it),ot.scissor(wt),ot.setScissorTest(It),q=-1;return}else if(xt.__webglFramebuffer===void 0)Tt.setupRenderTarget(v);else if(xt.__hasExternalTextures)Tt.rebindTextures(v,mt.get(v.texture).__webglTexture,mt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Yt=v.depthTexture;if(xt.__boundDepthTexture!==Yt){if(Yt!==null&&mt.has(Yt)&&(v.width!==Yt.image.width||v.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(v)}}let bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(vt=!0);let Dt=mt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?F=Dt[I][H]:F=Dt[I],B=!0):v.samples>0&&Tt.useMultisampledRTT(v)===!1?F=mt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[H]:F=Dt,it.copy(v.viewport),wt.copy(v.scissor),It=v.scissorTest}else it.copy(Ot).multiplyScalar(Mt).floor(),wt.copy(Kt).multiplyScalar(Mt).floor(),It=ie;if(H!==0&&(F=K),ot.bindFramebuffer(C.FRAMEBUFFER,F)&&ot.drawBuffers(v,F),ot.viewport(it),ot.scissor(wt),ot.setScissorTest(It),B){let xt=mt.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,H)}else if(vt){let xt=I;for(let bt=0;bt<v.textures.length;bt++){let Dt=mt.get(v.textures[bt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+bt,Dt.__webglTexture,H,xt)}}else if(v!==null&&H!==0){let xt=mt.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,H)}q=-1};function hl(v){let I=mt.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=Et.textureFormatReadable(v.format),I.__typeReadable=Et.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,H,F,B,vt,Ct,xt=0){if(!(v&&v.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(bt=bt[Ct],Array.isArray(bt)&&(bt=bt[0])),bt){ot.bindFramebuffer(C.FRAMEBUFFER,bt);try{let Dt=v.textures[xt],Yt=Dt.format,jt=Dt.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xt);let Rt=hl(Dt);if(Rt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-F&&H>=0&&H<=v.height-B&&C.readPixels(I,H,F,B,dt.convert(Yt),dt.convert(jt),vt)}finally{let Dt=rt!==null?mt.get(rt).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(v,I,H,F,B,vt,Ct,xt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(bt=bt[Ct],Array.isArray(bt)&&(bt=bt[0])),bt)if(I>=0&&I<=v.width-F&&H>=0&&H<=v.height-B){ot.bindFramebuffer(C.FRAMEBUFFER,bt);let Dt=v.textures[xt],Yt=Dt.format,jt=Dt.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xt);let Rt=hl(Dt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,te),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(I,H,F,B,dt.convert(Yt),dt.convert(jt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let ve=rt!==null?mt.get(rt).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,ve);let ue=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await _c(C,ue,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,te),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(te),C.deleteSync(ue),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,H=0){let F=Math.pow(2,-H),B=Math.floor(v.image.width*F),vt=Math.floor(v.image.height*F),Ct=I!==null?I.x:0,xt=I!==null?I.y:0;Tt.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,Ct,xt,B,vt),ot.unbindTexture()},this.copyTextureToTexture=function(v,I,H=null,F=null,B=0,vt=0){let Ct,xt,bt,Dt,Yt,jt,Rt,te,ve,ue=v.isCompressedTexture?v.mipmaps[vt]:v.image;if(H!==null)Ct=H.max.x-H.min.x,xt=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Yt=H.min.y,jt=H.isBox3?H.min.z:0;else{let se=Math.pow(2,-B);Ct=Math.floor(ue.width*se),xt=Math.floor(ue.height*se),v.isDataArrayTexture?bt=ue.depth:v.isData3DTexture?bt=Math.floor(ue.depth*se):bt=1,Dt=0,Yt=0,jt=0}F!==null?(Rt=F.x,te=F.y,ve=F.z):(Rt=0,te=0,ve=0);let he=dt.convert(I.format),Ce=dt.convert(I.type),Pt;I.isData3DTexture?(Tt.setTexture3D(I,0),Pt=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Tt.setTexture2DArray(I,0),Pt=C.TEXTURE_2D_ARRAY):(Tt.setTexture2D(I,0),Pt=C.TEXTURE_2D),ot.activeTexture(C.TEXTURE0),ot.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),ot.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ot.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let Ne=ot.getParameter(C.UNPACK_ROW_LENGTH),oe=ot.getParameter(C.UNPACK_IMAGE_HEIGHT),Jn=ot.getParameter(C.UNPACK_SKIP_PIXELS),Re=ot.getParameter(C.UNPACK_SKIP_ROWS),Rs=ot.getParameter(C.UNPACK_SKIP_IMAGES);ot.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),ot.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),ot.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),ot.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),ot.pixelStorei(C.UNPACK_SKIP_IMAGES,jt);let Un=v.isDataArrayTexture||v.isData3DTexture,$n=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let se=mt.get(v),Ee=mt.get(I),$e=mt.get(se.__renderTarget),ge=mt.get(Ee.__renderTarget);ot.bindFramebuffer(C.READ_FRAMEBUFFER,$e.__webglFramebuffer),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let we=0;we<bt;we++)Un&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(v).__webglTexture,B,jt+we),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(I).__webglTexture,vt,ve+we)),C.blitFramebuffer(Dt,Yt,Dt+Ct,Yt+xt,Rt,te,Rt+Ct,te+xt,C.DEPTH_BUFFER_BIT,C.NEAREST);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||mt.has(v)){let se=mt.get(v),Ee=mt.get(I);ot.bindFramebuffer(C.READ_FRAMEBUFFER,P),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,X);for(let $e=0;$e<bt;$e++)Un?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,se.__webglTexture,B,jt+$e):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,se.__webglTexture,B),$n?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.__webglTexture,vt,ve+$e):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ee.__webglTexture,vt),B!==0?C.blitFramebuffer(Dt,Yt,Dt+Ct,Yt+xt,Rt,te,Rt+Ct,te+xt,C.COLOR_BUFFER_BIT,C.NEAREST):$n?C.copyTexSubImage3D(Pt,vt,Rt,te,ve+$e,Dt,Yt,Ct,xt):C.copyTexSubImage2D(Pt,vt,Rt,te,Dt,Yt,Ct,xt);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $n?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Pt,vt,Rt,te,ve,Ct,xt,bt,he,Ce,ue.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Pt,vt,Rt,te,ve,Ct,xt,bt,he,ue.data):C.texSubImage3D(Pt,vt,Rt,te,ve,Ct,xt,bt,he,Ce,ue):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,Rt,te,Ct,xt,he,Ce,ue.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,Rt,te,ue.width,ue.height,he,ue.data):C.texSubImage2D(C.TEXTURE_2D,vt,Rt,te,Ct,xt,he,Ce,ue);ot.pixelStorei(C.UNPACK_ROW_LENGTH,Ne),ot.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),ot.pixelStorei(C.UNPACK_SKIP_PIXELS,Jn),ot.pixelStorei(C.UNPACK_SKIP_ROWS,Re),ot.pixelStorei(C.UNPACK_SKIP_IMAGES,Rs),vt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&C.generateMipmap(Pt),ot.unbindTexture()},this.initRenderTarget=function(v){mt.get(v).__webglFramebuffer===void 0&&Tt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Tt.setTextureCube(v,0):v.isData3DTexture?Tt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Tt.setTexture2DArray(v,0):Tt.setTexture2D(v,0),ot.unbindTexture()},this.resetState=function(){j=0,G=0,rt=null,ot.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Ja=class{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}},ws=class{constructor(){this.id=0,this.v1=new Ln,this.v2=new Ln,this.v3=new Ln,this.normalModel=new U,this.vertexNormalsModel=[new U,new U,new U],this.vertexNormalsLength=0,this.color=new Gt,this.material=null,this.uvs=[new Zt,new Zt,new Zt],this.z=0,this.renderOrder=0}},Ln=class{constructor(){this.position=new U,this.positionWorld=new U,this.positionScreen=new re,this.visible=!0}copy(t){this.positionWorld.copy(t.positionWorld),this.positionScreen.copy(t.positionScreen)}},Ts=class{constructor(){this.id=0,this.v1=new Ln,this.v2=new Ln,this.vertexColors=[new Gt,new Gt],this.material=null,this.z=0,this.renderOrder=0}},As=class{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new Zt,this.material=null,this.renderOrder=0}},To=class{constructor(){let t,e,n=0,s,r,o=0,a,l,c=0,f,m,h=0,u,g,S=0,p,d=[],M=[],T={objects:[],lights:[],elements:[]},w=new U,E=new re,A=new en(new U(-1,-1,-1),new U(1,1,1)),x=new en,b=new Array(3),O=new ae,D=new ae,N=new ae,z=new fn,K=[],P=[],X=[],j=[],G=[],rt=[],q=new re,tt=new re,it=new re,wt=[],It=[null,null,null],Q=[{sign:1},{sign:-1}];function ct(){let k=[],nt=[],ft=[],ut=null,lt=new kt;function Ut(_){ut=_,lt.getNormalMatrix(ut.matrixWorld),k.length=0,nt.length=0,ft.length=0}function C(_){let L=_.position,J=_.positionWorld,V=_.positionScreen;J.copy(L).applyMatrix4(p),V.copy(J).applyMatrix4(D);let st=1/V.w;V.x*=st,V.y*=st,V.z*=st,_.visible=V.x>=-1&&V.x<=1&&V.y>=-1&&V.y<=1&&V.z>=-1&&V.z<=1}function Bt(_,L,J){s=Ot(),s.position.set(_,L,J),C(s)}function Wt(_,L,J){k.push(_,L,J)}function Et(_,L,J){nt.push(_,L,J)}function ot(_,L){ft.push(_,L)}function Nt(_,L,J){return _.visible===!0||L.visible===!0||J.visible===!0?!0:(b[0]=_.positionScreen,b[1]=L.positionScreen,b[2]=J.positionScreen,A.intersectsBox(x.setFromPoints(b)))}function mt(_,L,J){return(J.positionScreen.x-_.positionScreen.x)*(L.positionScreen.y-_.positionScreen.y)-(J.positionScreen.y-_.positionScreen.y)*(L.positionScreen.x-_.positionScreen.x)<0}function Tt(_,L){let J=P[_],V=P[L];J.positionScreen.copy(J.position).applyMatrix4(N),V.positionScreen.copy(V.position).applyMatrix4(N),Me(J.positionScreen,V.positionScreen)===!0&&(J.positionScreen.multiplyScalar(1/J.positionScreen.w),V.positionScreen.multiplyScalar(1/V.positionScreen.w),f=ie(),f.id=ut.id,f.v1.copy(J),f.v2.copy(V),f.z=Math.max(J.positionScreen.z,V.positionScreen.z),f.renderOrder=ut.renderOrder,f.material=ut.material,ut.material.vertexColors&&(f.vertexColors[0].fromArray(nt,_*3),f.vertexColors[1].fromArray(nt,L*3)),T.elements.push(f))}function y(_,L,J,V){let st=P[_],at=P[L],W=P[J],Y=st.positionScreen.w,ht=at.positionScreen.w,R=W.positionScreen.w,$=Y*(st.positionScreen.z+1),Z=ht*(at.positionScreen.z+1),gt=R*(W.positionScreen.z+1),dt=Y*(1-st.positionScreen.z),pt=ht*(1-at.positionScreen.z),Lt=R*(1-W.positionScreen.z);if($<0&&Z<0&&gt<0||dt<0&&pt<0&&Lt<0)return;if($>=0&&Z>=0&&gt>=0&&dt>=0&&pt>=0&&Lt>=0){if(Nt(st,at,W)===!1)return;if(V.side===ke||mt(st,at,W)===!0){a=Kt(),a.id=ut.id,a.v1.copy(st),a.v2.copy(at),a.v3.copy(W),a.z=(st.positionScreen.z+at.positionScreen.z+W.positionScreen.z)/3,a.renderOrder=ut.renderOrder,w.subVectors(W.position,at.position),E.subVectors(st.position,at.position),w.cross(E),a.normalModel.copy(w),a.normalModel.applyMatrix3(lt).normalize();for(let et=0;et<3;et++){let At=a.vertexNormalsModel[et];At.fromArray(k,arguments[et]*3),At.applyMatrix3(lt).normalize(),a.uvs[et].fromArray(ft,arguments[et]*2)}a.vertexNormalsLength=3,a.material=V,V.vertexColors&&a.color.fromArray(nt,_*3),T.elements.push(a)}return}q.set(st.positionScreen.x*Y,st.positionScreen.y*Y,st.positionScreen.z*Y,Y),tt.set(at.positionScreen.x*ht,at.positionScreen.y*ht,at.positionScreen.z*ht,ht),it.set(W.positionScreen.x*R,W.positionScreen.y*R,W.positionScreen.z*R,R),It[0]=q,It[1]=tt,It[2]=it;let qt=me(It);if(!(qt<3)){for(let et=0;et<qt;et++){let At=d[et],zt=wt[et];zt||(zt=new Ln,wt[et]=zt);let _t=1/At.w;zt.positionScreen.set(At.x*_t,At.y*_t,At.z*_t,1),zt.positionWorld.copy(st.positionWorld),zt.visible=!0}for(let et=1;et<qt-1;et++){let At=wt[0],zt=wt[et],_t=wt[et+1];if(V.side===ke||mt(At,zt,_t)===!0){a=Kt(),a.id=ut.id,a.v1.copy(At),a.v2.copy(zt),a.v3.copy(_t),a.z=(At.positionScreen.z+zt.positionScreen.z+_t.positionScreen.z)/3,a.renderOrder=ut.renderOrder,w.subVectors(W.position,at.position),E.subVectors(st.position,at.position),w.cross(E),a.normalModel.copy(w),a.normalModel.applyMatrix3(lt).normalize();for(let Qt=0;Qt<3;Qt++){let xe=a.vertexNormalsModel[Qt];xe.fromArray(k,arguments[Qt]*3),xe.applyMatrix3(lt).normalize(),a.uvs[Qt].fromArray(ft,arguments[Qt]*2)}a.vertexNormalsLength=3,a.material=V,V.vertexColors&&a.color.fromArray(nt,_*3),T.elements.push(a)}}}}return{setObject:Ut,projectVertex:C,checkTriangleVisibility:Nt,checkBackfaceCulling:mt,pushVertex:Bt,pushNormal:Wt,pushColor:Et,pushUv:ot,pushLine:Tt,pushTriangle:y}}let yt=new ct;function Ft(k){if(k.visible===!1)return;if(k.isLight)T.lights.push(k);else if(k.isMesh||k.isLine||k.isPoints){if(k.material.visible===!1||k.frustumCulled===!0&&z.intersectsObject(k)===!1)return;Mt(k)}else if(k.isSprite){if(k.material.visible===!1||k.frustumCulled===!0&&z.intersectsSprite(k)===!1)return;Mt(k)}let nt=k.children;for(let ft=0,ut=nt.length;ft<ut;ft++)Ft(nt[ft])}function Mt(k){t=fe(),t.id=k.id,t.object=k,w.setFromMatrixPosition(k.matrixWorld),w.applyMatrix4(D),t.z=w.z,t.renderOrder=k.renderOrder,T.objects.push(t)}this.projectScene=function(k,nt,ft,ut){l=0,m=0,g=0,T.elements.length=0,k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),O.copy(nt.matrixWorldInverse),D.multiplyMatrices(nt.projectionMatrix,O),z.setFromProjectionMatrix(D),e=0,T.objects.length=0,T.lights.length=0,Ft(k),ft===!0&&T.objects.sort(_e);let lt=T.objects;for(let Ut=0,C=lt.length;Ut<C;Ut++){let Bt=lt[Ut].object,Wt=Bt.geometry;if(yt.setObject(Bt),p=Bt.matrixWorld,r=0,Bt.isMesh){let Et=Bt.material,ot=Array.isArray(Et),Nt=Wt.attributes,mt=Wt.groups;if(Nt.position===void 0)continue;let Tt=Nt.position.array;for(let y=0,_=Tt.length;y<_;y+=3){let L=Tt[y],J=Tt[y+1],V=Tt[y+2],st=Wt.morphAttributes.position;if(st!==void 0){let at=Wt.morphTargetsRelative,W=Bt.morphTargetInfluences;for(let Y=0,ht=st.length;Y<ht;Y++){let R=W[Y];if(R===0)continue;let $=st[Y];at?(L+=$.getX(y/3)*R,J+=$.getY(y/3)*R,V+=$.getZ(y/3)*R):(L+=($.getX(y/3)-Tt[y])*R,J+=($.getY(y/3)-Tt[y+1])*R,V+=($.getZ(y/3)-Tt[y+2])*R)}}yt.pushVertex(L,J,V)}if(Nt.normal!==void 0){let y=Nt.normal.array;for(let _=0,L=y.length;_<L;_+=3)yt.pushNormal(y[_],y[_+1],y[_+2])}if(Nt.color!==void 0){let y=Nt.color.array;for(let _=0,L=y.length;_<L;_+=3)yt.pushColor(y[_],y[_+1],y[_+2])}if(Nt.uv!==void 0){let y=Nt.uv.array;for(let _=0,L=y.length;_<L;_+=2)yt.pushUv(y[_],y[_+1])}if(Wt.index!==null){let y=Wt.index.array;if(mt.length>0)for(let _=0;_<mt.length;_++){let L=mt[_];if(Et=ot===!0?Bt.material[L.materialIndex]:Bt.material,Et!==void 0)for(let J=L.start,V=L.start+L.count;J<V;J+=3)yt.pushTriangle(y[J],y[J+1],y[J+2],Et)}else for(let _=0,L=y.length;_<L;_+=3)yt.pushTriangle(y[_],y[_+1],y[_+2],Et)}else if(mt.length>0)for(let y=0;y<mt.length;y++){let _=mt[y];if(Et=ot===!0?Bt.material[_.materialIndex]:Bt.material,Et!==void 0)for(let L=_.start,J=_.start+_.count;L<J;L+=3)yt.pushTriangle(L,L+1,L+2,Et)}else for(let y=0,_=Tt.length/3;y<_;y+=3)yt.pushTriangle(y,y+1,y+2,Et)}else if(Bt.isLine){N.multiplyMatrices(D,p);let Et=Wt.attributes;if(Et.position!==void 0){let ot=Et.position.array;for(let Nt=0,mt=ot.length;Nt<mt;Nt+=3)yt.pushVertex(ot[Nt],ot[Nt+1],ot[Nt+2]);if(Et.color!==void 0){let Nt=Et.color.array;for(let mt=0,Tt=Nt.length;mt<Tt;mt+=3)yt.pushColor(Nt[mt],Nt[mt+1],Nt[mt+2])}if(Wt.index!==null){let Nt=Wt.index.array;for(let mt=0,Tt=Nt.length;mt<Tt;mt+=2)yt.pushLine(Nt[mt],Nt[mt+1])}else{let Nt=Bt.isLineSegments?2:1;for(let mt=0,Tt=ot.length/3-1;mt<Tt;mt+=Nt)yt.pushLine(mt,mt+1)}}}else if(Bt.isPoints){N.multiplyMatrices(D,p);let Et=Wt.attributes;if(Et.position!==void 0){let ot=Et.position.array;for(let Nt=0,mt=ot.length;Nt<mt;Nt+=3)E.set(ot[Nt],ot[Nt+1],ot[Nt+2],1),E.applyMatrix4(N),Ht(E,Bt,nt)}}else Bt.isSprite&&(Bt.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,Bt.matrixWorld),E.set(p.elements[12],p.elements[13],p.elements[14],1),E.applyMatrix4(D),Ht(E,Bt,nt))}return ut===!0&&T.elements.sort(_e),T};function Ht(k,nt,ft){let ut=1/k.w;k.z*=ut,k.z>=-1&&k.z<=1&&(u=Jt(),u.id=nt.id,u.x=k.x*ut,u.y=k.y*ut,u.z=k.z,u.renderOrder=nt.renderOrder,u.object=nt,u.rotation=nt.rotation,u.scale.x=nt.scale.x*Math.abs(u.x-(k.x+ft.projectionMatrix.elements[0])/(k.w+ft.projectionMatrix.elements[12])),u.scale.y=nt.scale.y*Math.abs(u.y-(k.y+ft.projectionMatrix.elements[5])/(k.w+ft.projectionMatrix.elements[13])),u.material=nt.material,T.elements.push(u))}function fe(){if(e===n){let k=new Ja;return K.push(k),n++,e++,k}return K[e++]}function Ot(){if(r===o){let k=new Ln;return P.push(k),o++,r++,k}return P[r++]}function Kt(){if(l===c){let k=new ws;return X.push(k),c++,l++,k}return X[l++]}function ie(){if(m===h){let k=new Ts;return j.push(k),h++,m++,k}return j[m++]}function Jt(){if(g===S){let k=new As;return G.push(k),S++,g++,k}return G[g++]}function _e(k,nt){return k.renderOrder!==nt.renderOrder?k.renderOrder-nt.renderOrder:k.z!==nt.z?nt.z-k.z:k.id!==nt.id?k.id-nt.id:0}function me(k){d[0]=k[0],d[1]=k[1],d[2]=k[2];let nt=3,ft=0;for(let ut=0;ut<Q.length;ut++){let lt=Q[ut];if(ft=0,nt===0)break;for(let C=0;C<nt;C++){let Bt=d[C],Wt=d[(C+1)%nt],Et=lt.sign*Bt.z+Bt.w,ot=lt.sign*Wt.z+Wt.w,Nt=Et>=0,mt=ot>=0;if(Nt&&mt)M[ft++]=Bt;else if(Nt&&!mt){M[ft++]=Bt;let Tt=Et/(Et-ot),y=rt[ft];y||(y=new re,rt[ft]=y),y.lerpVectors(Bt,Wt,Tt),M[ft++]=y}else if(!Nt&&mt){let Tt=Et/(Et-ot),y=rt[ft];y||(y=new re,rt[ft]=y),y.lerpVectors(Bt,Wt,Tt),M[ft++]=y}}let Ut=d;d=M,M=Ut,nt=ft}return nt}function Me(k,nt){let ft=0,ut=1,lt=k.z+k.w,Ut=nt.z+nt.w,C=-k.z+k.w,Bt=-nt.z+nt.w;return lt>=0&&Ut>=0&&C>=0&&Bt>=0?!0:lt<0&&Ut<0||C<0&&Bt<0?!1:(lt<0?ft=Math.max(ft,lt/(lt-Ut)):Ut<0&&(ut=Math.min(ut,lt/(lt-Ut))),C<0?ft=Math.max(ft,C/(C-Bt)):Bt<0&&(ut=Math.min(ut,C/(C-Bt))),ut<ft?!1:(k.lerp(nt,ft),nt.lerp(k,1-ut),!0))}}};var Ao=class{constructor(){let t,e,n,s,r,o,a,l,c,f,m,h=0,u=0,g=0,S=null,p=1,d,M,T=this,w=new Ii,E=new Ii,A=new Gt,x=new Gt,b=new Gt,O=new Gt,D=new Gt,N=new Gt,z=new U,K=new U,P=new U,X=new U,j=new kt,G=new ae,rt=new ae,q=[],tt=[],it=[],wt=new To,It=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=It,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Ue,this.info={render:{vertices:0,faces:0}},this.setQuality=function(k){switch(k){case"high":p=1;break;case"low":p=0;break}},this.setClearColor=function(k){N.set(k)},this.setPixelRatio=function(){},this.setSize=function(k,nt){s=k,r=nt,o=s/2,a=r/2,It.setAttribute("viewBox",-o+" "+-a+" "+s+" "+r),It.setAttribute("width",s),It.setAttribute("height",r),w.min.set(-o,-a),w.max.set(o,a)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(k){S=k};function Q(){for(h=0;It.childNodes.length>0;)It.removeChild(It.childNodes[0])}function ct(k){return S!==null?k.toFixed(S):k}function yt(k,nt){let ft=k.data.renderOrder!==void 0?k.data.renderOrder:0,ut=nt.data.renderOrder!==void 0?nt.data.renderOrder:0;if(ft!==ut)return ft-ut;{let lt=k.data.z!==void 0?k.data.z:0;return(nt.data.z!==void 0?nt.data.z:0)-lt}}this.clear=function(){Q(),It.style.backgroundColor=N.getStyle(T.outputColorSpace)},this.render=function(k,nt){if(!(nt instanceof ei)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}let ft=k.background;ft&&ft.isColor?(Q(),It.style.backgroundColor=ft.getStyle(T.outputColorSpace)):this.autoClear===!0&&this.clear(),T.info.render.vertices=0,T.info.render.faces=0,G.copy(nt.matrixWorldInverse),rt.multiplyMatrices(nt.projectionMatrix,G),t=wt.projectScene(k,nt,this.sortObjects,this.sortElements),e=t.elements,n=t.lights,j.getNormalMatrix(nt.matrixWorldInverse),Ft(n),g=0;for(let ut=0,lt=e.length;ut<lt;ut++){let Ut=e[ut],C=Ut.material;C===void 0||C.opacity===0||Me(g++,"element",Ut,C)}u=0,k.traverseVisible(function(ut){if(ut.isSVGObject){if(z.setFromMatrixPosition(ut.matrixWorld),z.applyMatrix4(rt),z.z<-1||z.z>1)return;let lt=z.x*o,Ut=-z.y*a,C=me(u++);C.node=ut.node,C.x=lt,C.y=Ut,C.z=z.z,C.renderOrder=ut.renderOrder,Me(g++,"svgObject",C,null)}}),it.length=g,this.sortElements&&u>0&&it.sort(yt),d="",M="";for(let ut=0;ut<g;ut++){let lt=it[ut];if(lt.type==="svgObject"){Jt();let Ut=lt.data,C=Ut.node;C.setAttribute("transform","translate("+Ut.x+","+Ut.y+")"),It.appendChild(C)}else{let Ut=lt.data,C=lt.material;E.makeEmpty(),Ut instanceof As?(l=Ut,l.x*=o,l.y*=-a,Ht(l,Ut,C)):Ut instanceof Ts?(l=Ut.v1,c=Ut.v2,l.positionScreen.x*=o,l.positionScreen.y*=-a,c.positionScreen.x*=o,c.positionScreen.y*=-a,E.setFromPoints([l.positionScreen,c.positionScreen]),w.intersectsBox(E)===!0&&fe(l,c,C)):Ut instanceof ws&&(l=Ut.v1,c=Ut.v2,f=Ut.v3,l.positionScreen.x*=o,l.positionScreen.y*=-a,c.positionScreen.x*=o,c.positionScreen.y*=-a,f.positionScreen.x*=o,f.positionScreen.y*=-a,this.overdraw>0&&(Kt(l.positionScreen,c.positionScreen,this.overdraw),Kt(c.positionScreen,f.positionScreen,this.overdraw),Kt(f.positionScreen,l.positionScreen,this.overdraw)),E.setFromPoints([l.positionScreen,c.positionScreen,f.positionScreen]),w.intersectsBox(E)===!0&&Ot(l,c,f,Ut,C))}}Jt()};function Ft(k){b.setRGB(0,0,0),O.setRGB(0,0,0),D.setRGB(0,0,0);for(let nt=0,ft=k.length;nt<ft;nt++){let ut=k[nt],lt=ut.color;ut.isAmbientLight?(b.r+=lt.r,b.g+=lt.g,b.b+=lt.b):ut.isDirectionalLight?(O.r+=lt.r,O.g+=lt.g,O.b+=lt.b):ut.isPointLight&&(D.r+=lt.r,D.g+=lt.g,D.b+=lt.b)}}function Mt(k,nt,ft,ut){for(let lt=0,Ut=k.length;lt<Ut;lt++){let C=k[lt],Bt=C.color;if(C.isDirectionalLight){let Wt=z.setFromMatrixPosition(C.matrixWorld).sub(K.setFromMatrixPosition(C.target.matrixWorld)).normalize(),Et=ft.dot(Wt);if(Et<=0)continue;Et*=C.intensity,ut.r+=Bt.r*Et,ut.g+=Bt.g*Et,ut.b+=Bt.b*Et}else if(C.isPointLight){let Wt=z.setFromMatrixPosition(C.matrixWorld),Et=ft.dot(z.subVectors(Wt,nt).normalize());if(Et<=0||(Et*=C.distance==0?1:1-Math.min(nt.distanceTo(Wt)/C.distance,1),Et==0))continue;Et*=C.intensity,ut.r+=Bt.r*Et,ut.g+=Bt.g*Et,ut.b+=Bt.b*Et}}}function Ht(k,nt,ft){let ut=nt.scale.x*o,lt=nt.scale.y*a;ft.isPointsMaterial&&(ut*=ft.size,lt*=ft.size);let Ut="M"+ct(k.x-ut*.5)+","+ct(k.y-lt*.5)+"h"+ct(ut)+"v"+ct(lt)+"h"+ct(-ut)+"z",C="";(ft.isSpriteMaterial||ft.isPointsMaterial)&&(C="fill:"+ft.color.getStyle(T.outputColorSpace)+";fill-opacity:"+ft.opacity),ie(C,Ut)}function fe(k,nt,ft){let ut="M"+ct(k.positionScreen.x)+","+ct(k.positionScreen.y)+"L"+ct(nt.positionScreen.x)+","+ct(nt.positionScreen.y);if(ft.isLineBasicMaterial){let lt="fill:none;stroke:"+ft.color.getStyle(T.outputColorSpace)+";stroke-opacity:"+ft.opacity+";stroke-width:"+ft.linewidth+";stroke-linecap:"+ft.linecap;ft.isLineDashedMaterial&&(lt=lt+";stroke-dasharray:"+ft.dashSize+","+ft.gapSize),ie(lt,ut)}}function Ot(k,nt,ft,ut,lt){T.info.render.vertices+=3,T.info.render.faces++;let Ut="M"+ct(k.positionScreen.x)+","+ct(k.positionScreen.y)+"L"+ct(nt.positionScreen.x)+","+ct(nt.positionScreen.y)+"L"+ct(ft.positionScreen.x)+","+ct(ft.positionScreen.y)+"z",C="";lt.isMeshBasicMaterial?(A.copy(lt.color),lt.vertexColors&&A.multiply(ut.color)):lt.isMeshLambertMaterial||lt.isMeshPhongMaterial||lt.isMeshStandardMaterial?(x.copy(lt.color),lt.vertexColors&&x.multiply(ut.color),A.copy(b),P.copy(k.positionWorld).add(nt.positionWorld).add(ft.positionWorld).divideScalar(3),Mt(n,P,ut.normalModel,A),A.multiply(x).add(lt.emissive)):lt.isMeshNormalMaterial&&(X.copy(ut.normalModel).applyMatrix3(j).normalize(),A.setRGB(X.x,X.y,X.z).multiplyScalar(.5).addScalar(.5)),lt.wireframe?C="fill:none;stroke:"+A.getStyle(T.outputColorSpace)+";stroke-opacity:"+lt.opacity+";stroke-width:"+lt.wireframeLinewidth+";stroke-linecap:"+lt.wireframeLinecap+";stroke-linejoin:"+lt.wireframeLinejoin:C="fill:"+A.getStyle(T.outputColorSpace)+";fill-opacity:"+lt.opacity,ie(C,Ut)}function Kt(k,nt,ft){let ut=nt.x-k.x,lt=nt.y-k.y,Ut=ut*ut+lt*lt;if(Ut===0)return;let C=ft/Math.sqrt(Ut);ut*=C,lt*=C,nt.x+=ut,nt.y+=lt,k.x-=ut,k.y-=lt}function ie(k,nt){M===k?d+=nt:(Jt(),M=k,d=nt)}function Jt(){d&&(m=_e(h++),m.setAttribute("d",d),m.setAttribute("style",M),It.appendChild(m)),d="",M=""}function _e(k){let nt=q[k];return nt===void 0&&(nt=document.createElementNS("http://www.w3.org/2000/svg","path"),p==0&&nt.setAttribute("shape-rendering","crispEdges"),q[k]=nt),nt}function me(k){let nt=tt[k];return nt===void 0&&(nt={node:null,x:0,y:0,z:0,renderOrder:0},tt[k]=nt),nt}function Me(k,nt,ft,ut){let lt=it[k];return lt===void 0?(lt={type:nt,data:ft,material:ut},it[k]=lt,lt):(lt.type=nt,lt.data=ft,lt.material=ut,lt)}}};var Xm=new as({vertexColors:!0,flatShading:!0,side:ke}),$a=new Map;function qm(i){return $a.has(i)||$a.set(i,new Gt(i)),$a.get(i)}var ce=class{constructor(){this.positions=[],this.colors=[]}tri(t,e,n,s,r=1){this.positions.push(...t,...e,...n);let o=qm(s);for(let a=0;a<3;a++)this.colors.push(o.r*r,o.g*r,o.b*r)}quad(t,e,n,s,r,o=1){this.tri(t,e,n,r,o),this.tri(t,n,s,r,o)}body(t,e,n=8){let s=t.map(([r,o,a,l,c])=>Array.from({length:n},(f,m)=>{let h=2*Math.PI*m/n;return[r,o+Math.cos(h)*l,a+Math.sin(h)*c]}));for(let r=1;r<s.length;r++)for(let o=0;o<n;o++){let a=(o+1)%n;this.quad(s[r-1][o],s[r-1][a],s[r][a],s[r][o],e,1-o%3*.035)}for(let[r,o]of[[0,!0],[t.length-1,!1]])for(let a=1;a<n-1;a++){let l=s[r];this.tri(l[0],l[o?a+1:a],l[o?a:a+1],e)}}rod(t,e,n,s,r,o=5){let a=new U(e[0]-t[0],e[1]-t[1],e[2]-t[2]).normalize(),l=new U().crossVectors(a,Math.abs(a.y)>.88?new U(1,0,0):new U(0,1,0)).normalize(),c=new U().crossVectors(a,l),f=(u,g)=>Array.from({length:o},(S,p)=>{let d=l.clone().multiplyScalar(g*Math.cos(p*2*Math.PI/o)).addScaledVector(c,g*Math.sin(p*2*Math.PI/o));return[u[0]+d.x,u[1]+d.y,u[2]+d.z]}),m=f(t,n),h=f(e,s);for(let u=0;u<o;u++){let g=(u+1)%o;this.quad(m[u],m[g],h[g],h[u],r),s&&this.tri(e,h[u],h[g],r),n&&this.tri(t,m[g],m[u],r)}}box(t,e,n,s,r,o,a){let l=[t-s/2,e-r/2,n-o/2],c=[t+s/2,e+r/2,n+o/2],f=(h,u,g)=>[h?c[0]:l[0],u?c[1]:l[1],g?c[2]:l[2]],m=[[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]];for(let h of m)this.quad(...h.map(u=>f(...u)),a)}mesh(){let t=new dn;return t.setAttribute("position",new Oe(this.positions,3)),t.setAttribute("color",new Oe(this.colors,3)),t.computeVertexNormals(),t.computeBoundingSphere(),new Je(t,Xm)}};function Bi(i){let t=new Set;i.traverse(e=>{e.geometry&&t.add(e.geometry)});for(let e of t)e.dispose()}var nh={rubro:["#bd4939","#ff9651","#ffe6a9","#8c2f45"],verde:["#287e77","#74cbb3","#e5eeb8","#315768"],glacial:["#537fb0","#9de7eb","#f3ffeb","#5665a0"],cristalino:["#996da3","#d8bce2","#fff3c6","#574777"],tempestade:["#6e67ae","#c0a6e9","#ffea8b","#515177"],sombrio:["#694361","#ba819b","#f4c3aa","#45324d"],batedor:["#66466e","#ab7391","#ffdca5","#583953"],arqueiro:["#2d617b","#61a1a5","#ffdca3","#324c68"],bruto:["#6c5367","#c18372","#ffd2a3","#554057"]};function Ym(i,t){let e=new ce,n=i,s=[2,1,2*n],r=[-3,10,6*n],o=[-8,18,10*n],a=[[-24,22,14*n],[-22,10,12*n],[-18,5,8*n],[-12,1,6*n],[-6,-1,4*n]],l=[-6,6,7*n];e.tri(s,r,l,t[0]),e.tri(r,o,l,t[1]);for(let c=0;c<a.length-1;c++){let f=a[c],m=a[c+1],h=[(f[0]+m[0])/2+2,(f[1]+m[1])/2+1.6,(f[2]+m[2])/2];e.tri(o,f,h,c%2?t[1]:t[0]),e.tri(o,h,m,t[1],.88)}e.tri(l,o,a[4],t[0]),e.tri(l,a[4],s,t[3]),e.rod(s,r,1.2,.8,t[3]),e.rod(r,o,.8,.65,t[0]);for(let c of a)e.rod(o,c,.48,.08,t[3],4);return e.rod(o,[-7,20.7,11*n],.7,0,t[2]),e.mesh()}function zi(i="rubro",t=!1){let e=nh[i]||nh.rubro,n=new ce,s=new pe;n.body([[-11,-.4,0,1.8,1.9],[-7,1,0,3.6,3.6],[0,2,0,4.1,3.8],[4,2.2,0,3.4,3.2],[7,3.6,0,2.4,2.5],[10,6.2,0,2.2,2.3],[12,6.8,0,2.7,2.8],[15,7,0,2.1,2.7],[19,6.2,0,1.2,1.8]],e[0]),n.body([[-8,-.4,.1,1.8,2],[0,-.1,.2,2.1,2.5],[5,1.3,.2,1.5,2.2],[9,4.1,.3,1.2,1.5],[14,5.1,.3,.8,1.8],[18.8,5.6,.2,.45,1.5]],e[2],7);for(let a of[-1,1])n.rod([12,8.3,1.7*a],[9,12,2.6*a],1.15,.55,e[2]),n.rod([9,12,2.6*a],[6.5,t?15:12.8,3*a],.6,0,e[2]),n.rod([13.9,7.8,2.55*a],[14.5,7.9,2.8*a],.7,.6,"#ffde73"),n.box(14.4,7.9,2.91*a,.28,.92,.3,"#271e30"),n.rod([-5,-.6,2*a],[-7,-4.8,2.7*a],1.3,.9,e[0]),n.rod([-7,-4.8,2.7*a],[-10,-4.4,3*a],.9,.3,e[2]),n.rod([3,1.3,2.2*a],[2,-2.6,3.4*a],.95,.62,e[0]),n.rod([2,-2.6,3.4*a],[.2,-3.6,3.4*a],.65,.18,e[2]);for(let a=0;a<6;a++){let l=-8+a*3,c=4.6+a*.36;n.rod([l,c,0],[l-1.7,c+1.9+(t?.7:0),0],.9,0,e[2],4)}if(i==="bruto"||t)for(let a=0;a<3;a++)n.rod([-6+a*3,3.5,2],[-6+a*3,6,2.5],1.4,.5,e[3]);s.add(n.mesh());let r=new ce;r.body([[-18,4,-2,.12,.2],[-15,1,-1,.7,.8],[-11,-1,0,1,1.2],[-6,-1.6,0,1.35,1.4],[0,0,0,1.85,1.9]],e[0],7);let o=r.mesh();o.name="tail",o.position.set(-10,-.3,0),s.add(o);for(let a of[-1,1]){let l=Ym(a,e);l.name=a===1?"nearWing":"farWing",s.add(l)}return s}function ki(i,t,e=0){let n=t*6.3;i.getObjectByName("nearWing").rotation.x=.22+Math.sin(n)*.48,i.getObjectByName("farWing").rotation.x=-.43-Math.sin(n)*.5,i.getObjectByName("tail").rotation.z=Math.sin(t*4)*.11,i.rotation.z=e+Math.sin(t*3.3)*.025}function Eo(i){let t=new ce;if(i==="escudo"){for(let s=0;s<14;s++){let r=s*Math.PI/7,o=(s+.8)*Math.PI/7;t.rod([Math.cos(r)*26,Math.sin(r)*23,1],[Math.cos(o)*26,Math.sin(o)*23,1],.6,.6,"#a6e4eb",4)}let n=new pe;return n.add(t.mesh()),n}if(i==="alvo"){t.rod([0,-19,-2],[0,0,-2],1.2,1.2,"#a58b71",5),t.box(0,-19,-2,15,2,7,"#c6ab86");for(let[s,r,o]of[[12,"#d6bb97",0],[9,"#af6781",.5],[6,"#efdba5",1],[3,"#7ebfaf",1.5]])for(let a=0;a<16;a++){let l=a*Math.PI/8,c=(a+1)*Math.PI/8;t.tri([0,0,o],[Math.cos(l)*s,Math.sin(l)*s,o],[Math.cos(c)*s,Math.sin(c)*s,o],r)}let n=new pe;return n.add(t.mesh()),n}if(["rota","rotaBaixa","selo","passagem"].includes(i)){let n=i==="rotaBaixa"?"#f1c17d":i==="selo"?"#95758b":i==="passagem"?"#8df1cb":"#9ddaf3";for(let r=0;r<12;r++){let o=r*Math.PI/6,a=(r+1)*Math.PI/6;t.rod([Math.cos(o)*17,Math.sin(o)*20,0],[Math.cos(a)*17,Math.sin(a)*20,0],1.9,1.9,n,4)}if(i==="selo"){t.rod([0,-16,0],[0,0,0],9,14,"#766077",7),t.rod([0,0,0],[0,16,0],14,4,"#a08996",7);for(let[r,o]of[[-3,-12],[2,-5],[-2,2],[3,10]])t.box(r,o,10,1.5,6,.8,"#b4f8d3")}else t.rod([-7,0,1],[6,0,1],1.2,1.2,n,4),t.rod([6,0,1],[0,6,1],1,0,n,4),t.rod([6,0,1],[0,-6,1],1,0,n,4);let s=new pe;return s.add(t.mesh()),s}if(i==="tesouro"){t.box(0,-3,0,16,9,11,"#4d6973"),t.box(0,2,0,18,3,12,"#f3cd83"),t.rod([0,5,0],[0,12,0],0,4,"#9af4d4",5),t.rod([0,12,0],[0,20,0],4,0,"#e5ffe4",5);for(let s of[-6,6])t.box(s,-2,6,1.5,8,1,"#f3cd83");let n=new pe;return n.add(t.mesh()),n}if(i==="ovo"){t.body([[-5,0,0,.4,.5],[-3.5,0,0,3.9,3.5],[0,0,0,5.3,4.7],[3.5,0,0,3.5,3.2],[6.8,0,0,.2,.2]],"#ffc35e",9);let n=t.mesh();n.rotation.z=Math.PI/2;let s=new pe;s.add(n);let r=new ce;return r.rod([6,2,1],[6,6,1],1.1,0,"#fff2a3",4),r.rod([6,2,1],[6,-.3,1],1.1,0,"#ffdc7a",4),s.add(r.mesh()),s}if(i==="jaula"){let n=new pe,s=zi("verde");s.scale.setScalar(.36),n.add(s),t.box(0,-8.4,0,20,2.3,14,"#714d4a"),t.box(0,8.7,0,20,2,14,"#7e6863");for(let r of[-8.4,-3,3,8.4])for(let o of[-6,6])t.rod([r,-7.5,o],[r,8,o],.57,.57,"#d3b29b",4);return t.rod([0,9,0],[0,13,0],1.5,.6,"#ffde85"),n.add(t.mesh()),n}if(i==="barreira")t.rod([0,-20,0],[0,-6,0],0,7,"#6b577f",6),t.rod([0,-6,0],[1,12,0],7,5,"#a67d96",6),t.rod([1,12,0],[-2,22,0],5,0,"#dc9eac",6);else if(i==="raio")t.box(0,0,0,480,1.3,1,"#ffcaa4");else if(i==="perigo")t.rod([0,-2.8,0],[0,0,0],0,3,"#ff5c84",6),t.rod([0,0,0],[0,3,0],3,0,"#fff3d3",6);else if(i==="fagulha")t.rod([0,-.7,0],[0,1.1,0],.8,0,"#ffcc91",4);else{let n=i==="poder";t.body([[-9,0,0,0,0],[-2,0,0,1.7,1.8],[1,0,0,2.1,2],[4,0,0,.2,.3]],n?"#87c7ff":"#ff923c",6),t.body([[-4,.4,1,0,0],[0,.4,1,1.2,1.3],[3,.4,1,.3,.4]],n?"#ecfbff":"#fff7ac",5)}let e=new pe;return e.add(t.mesh()),e}var ih=[{sky:["#66527a","#eaa581","#ffdb9a"],ridge:"#aa7e94",rock:"#895972",near:"#564760",top:"#917966",tree:"#3b5350",leaf:"#628071"},{sky:["#557b8d","#a6cfc0","#eef4bc"],ridge:"#81a4a0",rock:"#538383",near:"#3c6362",top:"#81ae7d",tree:"#386b69",leaf:"#6cad87"},{sky:["#8c748d","#efbb87","#ffe4a2"],ridge:"#c19085",rock:"#ac785f",near:"#8a625c",top:"#e3b482",tree:"#9b7778",leaf:"#ebc6a7"},{sky:["#636e9c","#b8cee0","#f2f0e2"],ridge:"#9da7c6",rock:"#7d8baf",near:"#566789",top:"#ccdee0",tree:"#55758a",leaf:"#8eafb8"},{sky:["#5d465d","#cd7767","#ffc18c"],ridge:"#a76b78",rock:"#794956",near:"#513c50",top:"#93665f",tree:"#754756",leaf:"#f18c58"},{sky:["#3b3756","#986f93","#d9a99e"],ridge:"#876983",rock:"#624f70",near:"#40394e",top:"#766879",tree:"#50465c",leaf:"#aa849a"}];function Zm(i){return()=>(i=1664525*i+1013904223>>>0,i/4294967296)}var Dn=640;function sh(i,t,e,n,s,r,o){let a=[-o,n,r];for(let l=0;l<=Dn+o;l+=o){let c=n+(t()-.44)*s,f=[l,c,r],m=[l-o*.55,c-s*.18,r+5];i.tri(a,f,m,e,.97),i.tri(a,m,[a[0],-25,r+4],e,.86),i.quad(m,f,[f[0],-25,r+4],[a[0],-25,r+4],e,.92),a=f}}function Ka(i,t,e,n,s,r){i.rod([t,e,n],[t,e+s*.56,n],s*.065,s*.035,r.near,4);for(let o=0;o<3;o++)i.rod([t,e+s*(.12+o*.21),n],[t,e+s*(.66+o*.17),n],s*(.25-o*.055),0,o===2?r.leaf:r.tree,5)}function Es(i,t,e,n,s,r){i.rod([t,e,n],[t+s*.05,e+s*.7,n],s*.2,s*.15,r.tree,5),i.rod([t+s*.05,e+s*.7,n],[t-s*.13,e+s,n],s*.15,0,r.leaf,5)}function Jm(i,t){let e="#a58c84",n="#d4ac91";for(let c=0;c<6;c++){let f=128+c*35;for(let m=0;m<9;m++){let h=(S,p,d)=>[f+Math.cos(p)*S,13+Math.sin(p)*S,-35+d],u=m*Math.PI/9,g=(m+1)*Math.PI/9;i.quad(h(13,u,4),h(16,u,4),h(16,g,4),h(13,g,4),m%3?e:n),i.quad(h(13,g,-4),h(13,u,-4),h(13,u,4),h(13,g,4),t.near),i.quad(h(16,g,4),h(16,u,4),[f+Math.cos(u)*16,32,-31],[f+Math.cos(g)*16,32,-31],e,.86)}i.box(f-35/2,8,-35,7,33,10,e),i.box(f,33,-35,35,3,12,n);for(let m=-1;m<=1;m++)i.box(f+m*12,36,-30,5,4,2,e)}for(let c of[109,321])i.box(c,40,-35,12,27,13,t.rock),i.rod([c,53,-35],[c,65,-35],10,0,t.tree,4),i.box(c,45,-35+6.7,2.2,7,.2,t.near)}function rh(i,t,e,n,s){i.rod([t-2,e-54,n],[t,e-2,n],25,12,s.rock,7),i.rod([t,e-2,n],[t,e+.3,n],12,11,s.top,7),i.box(t,e+9,n,11,18,10,s.rock),i.box(t,e+19,n,14,2,12,s.top);for(let r of[-5,0,5])i.box(t+r,e+21,n+4,2.5,3,3,s.rock);i.box(t,e+13,n+5.2,2.4,6,.4,s.near)}var Co=class{constructor(t,e,n){this.group=new pe,t.add(this.group),this.layers=[],this.level=e,this.lightweight=n;let s=ih[e.region],r=Zm(e.id*8191);this.gradient="linear-gradient("+s.sky[0]+", "+s.sky[1]+" 53%, "+s.sky[2]+" 89%)";let o=new ce,a=[360,159,-175],l=21;for(let p=0;p<36;p++){let d=p*Math.PI/18,M=(p+1)*Math.PI/18;o.tri(a,[a[0]+Math.cos(d)*l,a[1]+Math.sin(d)*l,-175],[a[0]+Math.cos(M)*l,a[1]+Math.sin(M)*l,-175],"#fff1bc")}this.group.add(o.mesh());let c=new ce;for(let p=0;p<12;p++){let d=r()*Dn,M=118+r()*78,T=9+r()*30;c.body([[d-T,M,0,.2,.1],[d-T*.45,M+.5,0,1.1,1],[d,M+2,0,2.8,1.5],[d+T*.65,M+.2,0,1.6,1],[d+T,M,0,.1,.1]],"#f4c6ad",4)}this.layer(c,1.5,-150);let f=new ce;sh(f,r,s.ridge,102,72,-115,32),this.layer(f,3.6,0);let m=new ce;if(sh(m,r,s.rock,65,56,-78,23),e.id===2){let p=new ce;Jm(p,s);for(let d=1;d<p.positions.length;d+=3)p.positions[d]+=17;m.positions.push(...p.positions),m.colors.push(...p.colors)}else for(let p=0;p<3;p++){let d=72+p*207;e.region===0||e.region===5?rh(m,d,65,-59,s):Es(m,d,68,-59,22+r()*23,s)}this.layer(m,e.id===2?5.2:6.2,0);let h=new ce,u=[],g=32;for(let p=0;p<=Dn;p+=g){let d=13+(r()-.5)*14;u.push([p,d,-26])}for(let p=1;p<u.length;p++){let d=u[p-1],M=u[p],T=[(d[0]+M[0])/2-3,Math.min(d[1],M[1])-10,-18];h.tri(d,M,T,s.top),h.quad(d,T,[T[0],-22,-13],[d[0],-22,-13],s.near),h.quad(T,M,[M[0],-22,-13],[T[0],-22,-13],s.rock,.77);let w=n?1:2;for(let E=0;E<w;E++){let A=d[0]+4+E*13+r()*6,x=9+r()*15;[0,1,3].includes(e.region)?Ka(h,A,d[1],-25-r()*5,x,s):Es(h,A,d[1],-25,x,s)}}this.layer(h,14,0);let S=new ce;for(let p=0;p<6;p++){let d=28+p*110+r()*30,M=14+r()*10;S.rod([d,-28,-10],[d,2,-10],30,14,s.near,6),[0,1,3].includes(e.region)?(Ka(S,d-7,1,-8,M,s),Ka(S,d+4,1,-9,M*1.5,s)):Es(S,d,1,-9,M*1.25,s)}if(this.layer(S,20,0),e.training){let p=new ce;p.box(240,4,-13,480,7,15,"#9c8e7d");for(let M=30;M<480;M+=45)p.box(M,10,-15,3,13,3,"#e0caa0"),p.box(M,18,-15,7,2,5,"#b18b7c");p.rod([50,10,-20],[50,75,-20],1.2,1.2,"#cfb58f",5),p.quad([50,72,-20],[76,68,-20],[76,53,-20],[50,58,-20],"#7e9d94");let d=p.mesh();d.name="training-yard",this.group.add(d)}}layer(t,e,n){let s=t.mesh(),r=new pe;r.add(s);let o=s.clone();o.position.x=Dn,r.add(o),r.position.z=n,this.group.add(r),this.layers.push({pair:r,speed:e})}setExploration(t){if(this.exploreRoute===t||(this.exploreRoute=t,this.exploreGroup&&(this.exploreGroup.removeFromParent(),Bi(this.exploreGroup),this.exploreGroup=null),!t))return;let e=new ce,n=ih[this.level.region];t==="secret"&&e.box(Dn/2,111,-49,Dn,600,1,"#263e4e");for(let o=0;o<(this.lightweight?4:6);o++){let a=48+o*(this.lightweight?160:108);if(t==="upper")rh(e,a,50,-15,n),e.rod([a,55,-20],[a,82,-20],4,3,"#c1aca2",5),e.box(a,84,-20,15,4,9,"#dfc4a5");else if(t==="lower")e.rod([a,-20,-18],[a,29,-18],24,8,"#855e61",6),e.rod([a,222,-25],[a-10,194,-25],21,0,"#aa7f75",5),Es(e,a,30,-17,12,n);else if(t==="secret"){e.rod([a,-20,-20],[a,35,-20],30,9,"#425b66",6),e.rod([a,240,-25],[a+8,197,-25],32,0,"#425b66",6),Es(e,a-8,34,-16,18,{tree:"#488782",leaf:"#a4efd0"}),e.box(a+17,62,-21,3,12,2,"#9ae6c5"),e.rod([a-38,-5,-44],[a-38,132,-44],3.2,3.2,"#496b7a",5);for(let l=0;l<8;l++){let c=l*Math.PI/8,f=(l+1)*Math.PI/8;e.rod([a+Math.cos(c)*38,132+Math.sin(c)*46,-44],[a+Math.cos(f)*38,132+Math.sin(f)*46,-44],2.4,2.4,"#496b7a",4)}}}this.exploreGroup=new pe;let s=e.mesh();this.exploreGroup.add(s);let r=s.clone();r.position.x=Dn,this.exploreGroup.add(r),this.group.add(this.exploreGroup)}update(t,e){let n=this.level.training?0:t;for(let{pair:s,speed:r}of this.layers)s.position.x=-(n*r%Dn);if(this.level.exploration){let s=t>=90?null:e?.route;this.setExploration(["upper","lower","secret"].includes(s)?s:null),this.exploreGroup&&(this.exploreGroup.position.x=-(t*this.level.exploration.scrollSpeed%Dn))}}dispose(){this.group.removeFromParent(),Bi(this.group)}};var Qa={Rubro:"rubro",Verde:"verde",Cristalino:"cristalino",Glacial:"glacial",Tempestade:"tempestade",Sombrio:"sombrio"};function Nn(i,t,e){let n=t.mesh();return n.name=i,e.add(n),n}function Vi(i,t,e,n,s,r){for(let o=0;o<14;o++){let a=o*Math.PI/7,l=(o+1)*Math.PI/7;i.rod([t+Math.cos(a)*s,e,n+Math.sin(a)*s*.7],[t+Math.cos(l)*s,e,n+Math.sin(l)*s*.7],.35,.35,r,4)}}function ja(i,t,e,n,s,r){i.rod([t,e,n],[t,e+s*.5,n],0,s*.22,r,5),i.rod([t,e+s*.5,n],[t,e+s,n],s*.22,0,r,5)}function oh(i,t=!1){let e=new pe,n=Math.max(1,Math.min(5,i.nest||1)),s=[];e.name="nest-level-"+n;let r=new ce,o=n>=5?30:n>=3?27:24;r.rod([0,-13,0],[0,-4,0],10,o,"#6e566a",10),r.rod([0,-4,0],[0,-1,0],o,o-1,"#6b8876",10),r.rod([0,-1,0],[0,0,0],o-1,o-1,"#91a783",10),Nn("island",r,e);let a=new ce;for(let u=0;u<(n===1?11:16);u++){let g=u*Math.PI/8,S=(u+1.8)*Math.PI/8;a.rod([Math.cos(g)*10,1,Math.sin(g)*7],[Math.cos(S)*10,2,Math.sin(S)*7],.7,1,u%2?"#ac805d":"#d2a980",5)}Vi(a,0,.3,0,10,"#c7ac79"),Nn("hero-nest",a,e);let l=zi("rubro",!!i.medals[4]);if(l.scale.setScalar(.46),l.position.set(1,4,0),l.name="hero",e.add(l),n>=2){let u=new ce,g=-16,S=3;u.rod([g,0,S],[g,1,S],6.5,6.5,"#d1b288",8),Vi(u,g,1.4,S,5,"#e7c599");for(let d of[-4.5,4.5])u.rod([g+d,1,S],[g+d,10,S],.45,.45,"#c09c73",5);u.rod([g,10,S],[g,14,S],6.4,0,"#7a9e91",7),ja(u,g,12,S,2,"#f7d89a"),Nn("incubator",u,e);let p=new ce;for(let d of[-1,6])p.rod([15,0,d],[15,.7,d],4,4,"#a79c72",7),Vi(p,15,1,d,3.7,"#d8b68c");Nn("nursery",p,e)}if(n>=3){let u=new ce,g=-15,S=-12;for(let M of[-4,4])for(let T of[-3,3])u.rod([g+M,0,S+T],[g+M,8,S+T],.5,.5,"#b59b80",5);u.box(g,8,S,11,1.2,9,"#8f7686"),u.rod([g,8,S],[g,13,S],7,0,"#bd8b7a",4),u.box(g,2.2,S,5,1,3,"#6d6779"),u.box(g,1,S,2,2,2,"#6d6779"),u.rod([g+1,2.8,S],[g+3,5,S],.3,.3,"#bd986e",4),u.box(g+3,5,S,2,1,1,"#d3c5b5"),Nn("workshop",u,e);let p=new ce;p.rod([1,0,17],[1,4,17],.5,.5,"#c8ac88",5);for(let[M,T,w]of[[3.3,"#dfc6a1",17],[2.3,"#b7798b",17.2],[1.2,"#e9dda8",17.4]])for(let E=0;E<12;E++){let A=E*Math.PI/6,x=(E+1)*Math.PI/6;p.tri([1,6,w],[1+Math.cos(A)*M,6+Math.sin(A)*M,w],[1+Math.cos(x)*M,6+Math.sin(x)*M,w],T)}Nn("training-target",p,e);let d=new ce;for(let M of[-4,4])d.rod([15+M,0,-10],[15+M,7,-10],.6,.6,"#d4b792",5),Vi(d,15+M,7,-10,2.5,"#d4b792");d.box(15,4,-10,12,.7,2,"#ad9278"),Nn("double-perch",d,e)}if(n>=4){let u=new ce;for(let g of[-5.5,5.5])u.rod([g,0,-17],[g,13,-17],1,1,"#d3b9b5",6),u.box(g,13,-17,3.2,1,3,"#f1d8b8");u.box(0,14,-17,14,1.4,3,"#d3b9b5"),u.rod([0,.1,-17],[0,1.8,-17],6,5,"#a295ac",7),ja(u,0,7,-17,5,"#b9e4ec"),Vi(u,0,2,-17,4.2,"#bedcd5"),Nn("sanctuary",u,e)}if(n>=5){let u=new ce;for(let g of[-23,23])u.rod([g,0,-7],[g,16,-7],2.2,2,"#d5b7a6",7),u.rod([g,16,-7],[g,22,-7],3,0,"#879c9f",6),u.rod([g,16,-7],[g,25,-7],.3,.3,"#f7d89a",4),u.quad([g,24,-7],[g+4,23,-7],[g+4,18,-7],[g,19,-7],"#b7788c");Vi(u,0,.5,0,27,"#ddcda5");for(let g=0;g<8;g++){let S=g*Math.PI/4;ja(u,Math.cos(S)*25,1,Math.sin(S)*19,2,"#c7e4c4")}Nn("grand-nest",u,e)}let c=Object.values(i.eggs).filter(u=>!u.hatched);for(let u=0;u<Math.min(c.length,3);u++){let g=Eo("ovo");g.scale.setScalar(.22),g.position.set(n>=2?-18+u*1.8:-5+u*2,n>=2?2:1.6,n>=2?4:6),g.name="incubating-egg",e.add(g)}let f=[...new Set(Object.values(i.babies))].filter(u=>Qa[u]),m=(i.companions||[i.companion]).filter(u=>Qa[u]);return[...new Set([...m,...f])].slice(0,t?3:6).forEach((u,g)=>{let S=zi(Qa[u]);S.scale.setScalar(.18);let p=g*1.08-.7,d=[Math.cos(p)*16,2,Math.sin(p)*12+1];S.position.set(...d),S.rotation.y=-p,S.name="resident-"+u,s.push({model:S,home:d,phase:g*1.2}),e.add(S)}),{group:e,hero:l,residents:s,level:n}}function lh(i){let t,e=!1;try{t=new So({alpha:!0,antialias:!0,powerPreference:"high-performance"}),t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),t.setClearColor(0,0)}catch{e=!0,t=new Ao,t.setPrecision(1)}i.replaceChildren(t.domElement),i.dataset.engine="Three.js r187",i.dataset.renderer=e?"SVG":"WebGL";let n=0,s=0;return{soft:e,render(r,o){let a=i.clientWidth,l=i.clientHeight;if(!(!a||!l)){if(a!==n||l!==s){if(n=a,s=l,t.setSize(n,s),o.isPerspectiveCamera)o.aspect=n/s,o.updateProjectionMatrix();else if(o.isOrthographicCamera){let m=n/s,h=Math.max(480,222*m),u=Math.max(222,480/m);o.left=-h/2,o.right=h/2,o.top=u/2,o.bottom=-u/2,o.updateProjectionMatrix()}}t.render(r,o),e&&(t.domElement.style.backgroundColor="transparent")}},dispose(){t.dispose?.(),t.forceContextLoss?.(),t.domElement.remove()}}}function ch(){let i=new ts;i.add(new hs(16773102,1.22));let t=new Ri(16771013,2.05);t.position.set(120,205,115),i.add(t);let e=new Ri(12105968,.7);return e.position.set(-130,78,-60),i.add(e),i}var $m=["rubro","verde","cristalino","glacial","tempestade","sombrio"],ah={Rubro:"rubro",Verde:"verde",Cristalino:"cristalino",Glacial:"glacial",Tempestade:"tempestade",Sombrio:"sombrio"},hh=new Set(["jogador","companheiro","filhote","boss","sentinela","bruto","arqueiro","batedor"]);function Km(i,t,e){let n,s=1,r=i.startsWith("companheiro:");if(hh.has(i)||r){let o=r?ah[i.split(":")[1]]||"verde":{jogador:"rubro",companheiro:ah[e.companion]||"verde",filhote:"verde",boss:$m[t],sentinela:"bruto"}[i]||i;n=zi(o,i==="boss"||i==="jogador"&&!!e.medals[4]),s={jogador:e.medals[12]?1:.79,companheiro:.37,filhote:.45,boss:1.77,sentinela:.88,bruto:.63,arqueiro:.52,batedor:.46}[i],n.scale.setScalar(r?.32:s),!r&&!["jogador","filhote","companheiro"].includes(i)&&(n.rotation.y=Math.PI)}else n=Eo(i);return n}var tl=class{constructor(t){this.host=t,this.view=lh(t),this.scene=ch(),this.camera=new ni(-240,240,111,-111,.1,750),this.camera.position.set(240,111,310),this.camera.lookAt(240,111,0),this.actors=new pe,this.scene.add(this.actors),this.active=new Map,this.templates=new Map,this.playerKey={},this.buddyKeys=[{},{}],this.lastFrame=-10}reset(t){this.land?.dispose(),this.clearActors(),this.land=new Co(this.scene,t,this.view.soft),this.host.style.background=this.land.gradient,this.lastFrame=-10,this.lastY=null}clearActors(){this.actors.clear(),this.active.clear();for(let t of this.templates.values())Bi(t);this.templates.clear()}release(){this.land?.dispose(),this.land=null,this.clearActors()}update(t,e,n,s){let r=e.t;if(this.view.soft&&r>=this.lastFrame&&r-this.lastFrame<1/22)return;this.lastFrame=r,this.land.update(r,e.exploration);let o=new Set,a=(h,u,g,S,p=0)=>{o.add(h);let d=this.active.get(h);if(!d||d.kind!==u){d&&d.model.removeFromParent(),this.templates.has(u)||this.templates.set(u,Km(u,t.region,n));let M=this.templates.get(u).clone();this.actors.add(M),d={kind:u,model:M},this.active.set(h,d)}return d.model.position.set(g,222-S,p),d.model.visible=!0,d.model},l=e.p,c=a(this.playerKey,"jogador",l.x,l.y,6),f=Math.max(-.3,Math.min(.3,((this.lastY??l.y)-l.y)*.075));if(this.lastY=l.y,this.bank=(this.bank||0)*.76+f*.24,ki(c,r,this.bank),c.visible=l.inv<=0||Math.floor(r*11)%4!==0||r<1,l.shield>0){let h=a("player-shield","escudo",l.x,l.y,7);h.scale.setScalar((l.shield>1?1.08:1)+Math.sin(r*2)*.02),h.rotation.z=Math.sin(r)*.04}(e.companions||n.companions||(n.companion?[n.companion]:[])).slice(0,2).forEach((h,u)=>{let g=a(this.buddyKeys[u],"companheiro:"+h,Math.max(8,l.x-23-u*13),Math.max(15,Math.min(208,l.y+(u?-13:13)+Math.sin(r*3+u)*2)),2);ki(g,r+.5+u)});for(let h of e.entities){if(h.dead)continue;let u=a(h,h.kind==="rota"&&h.route==="lower"?"rotaBaixa":h.kind,h.kind==="raio"?240:h.x,h.y,1);if(hh.has(h.kind))ki(u,r+h.serial*.23);else if(h.kind==="ovo")u.rotation.y=r*1.4,u.position.y+=Math.sin(r*3.3)*1.5;else if(h.kind==="jaula")u.rotation.y=.28+Math.sin(r)*.09;else if(h.kind==="barreira")u.rotation.y=r*.4;else if(["rota","passagem","tesouro"].includes(h.kind)){let g=1+Math.sin(r*3)*.04;u.scale.setScalar(g),h.route==="lower"&&(u.rotation.z=Math.PI),h.kind==="tesouro"&&(u.rotation.y=Math.sin(r)*.25)}else h.kind==="raio"&&(u.scale.y=h.age<1.8?.4:5,u.visible=h.age>=1.8||Math.floor(r*10)%3!==0);["boss","sentinela","bruto","arqueiro"].includes(h.kind)&&h.cool<.48&&h.x<450&&a("aviso:"+h.serial,"poder",h.x-(h.kind==="boss"?26:10),h.y-2,5).scale.setScalar(.45+Math.max(0,.48-h.cool)*1.2)}for(let h of e.shots){let u=a(h,h.special?"poder":"fogo",h.x,h.y,7);u.rotation.z=-Math.atan2(h.vy,h.v)}for(let h of e.bullets){let u=a(h,"perigo",h.x,h.y,7);u.rotation.z=r*5}for(let h of s.slice(-(this.view.soft?18:65)))a(h,"fagulha",h.x,h.y,8).scale.setScalar(Math.max(.24,h.life*4));for(let[h,u]of this.active)o.has(h)||(u.model.removeFromParent(),this.active.delete(h));this.view.render(this.scene,this.camera)}};function Qm(i,t){let e=lh(i),n=ch(),s=oh(t,e.soft),{group:r,hero:o,residents:a}=s;n.add(r);let l=new Fe(36,1,.1,420);l.position.set(36,30,76),l.lookAt(0,5,0);let c=-.44,f=null,m=0,h=-1;i.onpointerdown=g=>{f=[g.clientX,c],i.setPointerCapture(g.pointerId)},i.onpointermove=g=>{f&&(c=f[1]+(g.clientX-f[0])*.012)},i.onpointerup=i.onpointercancel=()=>f=null,i.onkeydown=g=>{(g.key==="ArrowLeft"||g.key==="ArrowRight")&&(c+=g.key==="ArrowLeft"?-.2:.2,g.preventDefault())};function u(g){if(m=requestAnimationFrame(u),!(g-h<(e.soft?100:40))){h=g,r.rotation.y=c,ki(o,g/1400,.03);for(let{model:S,home:p,phase:d}of a){let M=g/1800+d;S.position.set(p[0]+Math.sin(M)*1.1,p[1]+Math.sin(M*2)*.2,p[2]+Math.cos(M)*.7),ki(S,M,.02)}e.render(n,l)}}return m=requestAnimationFrame(u),()=>{cancelAnimationFrame(m),Bi(r),e.dispose(),i.onpointerdown=i.onpointermove=i.onpointerup=i.onpointercancel=i.onkeydown=null}}return Mh(jm);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
