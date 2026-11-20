var ml=n=>{throw TypeError(n)};var mu=(n,t,e)=>t.has(n)||ml("Cannot "+e);var Ti=(n,t,e)=>t.has(n)?ml("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e);var Mt=(n,t,e)=>(mu(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="187",gu=0,gl=1,_u=2,us=1,vu=2,cs=3,Yi=0,De=1,Mi=2,an=0,ds=1,ba=2,_l=3,vl=4,xu=5,In=100,Mu=101,Su=102,yu=103,bu=104,Eu=200,Tu=201,wu=202,Au=203,Fc=204,Oc=205,Ru=206,Cu=207,Pu=208,Lu=209,Du=210,Iu=211,Nu=212,Uu=213,Fu=214,Ea=0,Ta=1,wa=2,fs=3,Aa=4,Ra=5,Ca=6,Pa=7,Bc=0,Ou=1,Bu=2,Ni=0,wo=1,Ao=2,Ro=3,Co=4,Po=5,Lo=6,Ir=7,zc=300,Bn=301,ps=302,zr=303,Gr=304,ms=1e3,ii=1001,La=1002,le=1003,zu=1004,Ps=1005,Be=1006,kr=1007,Ii=1008,Ye=1009,Gc=1010,kc=1011,gs=1012,Do=1013,yi=1014,ui=1015,Ge=1016,Io=1017,No=1018,zn=1020,Hc=35902,Vc=35899,Wc=1021,Xc=1022,di=1023,$i=1026,Xi=1027,Uo=1028,Fo=1029,on=1030,Oo=1031,Bo=1033,fr=33776,pr=33777,mr=33778,gr=33779,Da=35840,Ia=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,Ga=37489,Tr=37490,ka=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,$a=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,ja=37819,to=37820,eo=37821,io=36492,no=36494,so=36495,ro=36283,ao=36284,wr=36285,oo=36286,Gu=3200,lo=0,ku=1,Wi="",me="srgb",Ar="srgb-linear",Rr="linear",Jt="srgb",Hr=7680,Hu=519,Vu=512,Wu=513,Xu=514,qc=515,qu=516,Yu=517,Yc=518,$c=519,Kc=35044,xl="300 es",fi=2e3,_s=2001;function $u(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ku(){const n=vs("canvas");return n.style.display="block",n}const Ml={};function Cr(...n){const t="THREE."+n.shift();console.log(t,...n)}function Zc(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function It(...n){n=Zc(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function $t(...n){n=Zc(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function _r(...n){const t=n.join(" ");t in Ml||(Ml[t]=!0,It(...n))}function Zu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Ju={[Ea]:Ea,[wa]:Ca,[Aa]:Aa,[fs]:Ra,[Ta]:Ta,[Ca]:wa,[Pa]:Pa,[Ra]:fs};class cn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,co=180/Math.PI;function hn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Ht(n,t,e){return Math.max(t,Math.min(e,n))}function Qu(n,t){return(n%t+t)%t}function Wr(n,t,e){return(1-e)*n+e*t}function ju(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nr(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jc(n,t){if(t.constructor===Float32Array)return n;const e=Nr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Qc(n,t){if(t.constructor===Float32Array)return n;const e=Nr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}const tl=class tl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tl.prototype.isVector2=!0;let At=tl;class un{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],_=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*y;m<0&&(u=-u,f=-f,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),R=Math.sin(S);p=Math.sin(p*S)/R,o=Math.sin(o*S)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+y*o;const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const el=class el{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};el.prototype.isVector3=!0;let I=el;const Xr=new I,Sl=new un,il=class il{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],y=s[0],m=s[3],p=s[6],S=s[1],R=s[4],E=s[7],w=s[2],T=s[5],g=s[8];return r[0]=a*y+o*S+l*w,r[3]=a*m+o*R+l*T,r[6]=a*p+o*E+l*g,r[1]=c*y+h*S+d*w,r[4]=c*m+h*R+d*T,r[7]=c*p+h*E+d*g,r[2]=u*y+f*S+_*w,r[5]=u*m+f*R+_*T,r[8]=u*p+f*E+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qr.makeScale(t,e)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};il.prototype.isMatrix3=!0;let Ut=il;const qr=new Ut,yl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function td(){const n={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ar]:{primaries:t,whitePoint:i,transfer:Rr,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:t,whitePoint:i,transfer:Jt,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:me}}}),n}const qt=td();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mn;class ed{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{mn===void 0&&(mn=vs("canvas")),mn.width=t.width,mn.height=t.height;const s=mn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=mn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class zo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yr(s[a].image)):r.push(Yr(s[a]))}else r=Yr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Yr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let nd=0;const $r=new I;class Ae extends cn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,i=ii,s=ii,r=Be,a=Ii,o=di,l=Ye,c=Ae.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=hn(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=zc;Ae.DEFAULT_ANISOTROPY=1;const nl=class nl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,E=(f+1)/2,w=(p+1)/2,T=(h+u)/4,g=(d+y)/4,M=(_+m)/4;return R>E&&R>w?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=T/i,r=g/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=g/r,s=M/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nl.prototype.isVector4=!0;let oe=nl;class sd extends cn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ae({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new zo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ke extends sd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class jc extends Ae{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=le,this.minFilter=le,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends Ae{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=le,this.minFilter=le,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Dr=class Dr{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,y,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/gn.setFromMatrixColumn(t,0).length(),r=1/gn.setFromMatrixColumn(t,1).length(),a=1/gn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,_=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,y=c*d;e[0]=u+y*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,_=o*h,y=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-y*d}else if(t.order==="XZY"){const u=a*l,f=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,od)}lookAt(t,e,i){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Bi.crossVectors(i,Xe),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Bi.crossVectors(i,Xe)),Bi.normalize(),Ls.crossVectors(Xe,Bi),s[0]=Bi.x,s[4]=Ls.x,s[8]=Xe.x,s[1]=Bi.y,s[5]=Ls.y,s[9]=Xe.y,s[2]=Bi.z,s[6]=Ls.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],y=i[6],m=i[10],p=i[14],S=i[3],R=i[7],E=i[11],w=i[15],T=s[0],g=s[4],M=s[8],U=s[12],L=s[1],N=s[5],G=s[9],X=s[13],P=s[2],H=s[6],Z=s[10],z=s[14],et=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=a*T+o*L+l*P+c*et,r[4]=a*g+o*N+l*H+c*W,r[8]=a*M+o*G+l*Z+c*j,r[12]=a*U+o*X+l*z+c*tt,r[1]=h*T+d*L+u*P+f*et,r[5]=h*g+d*N+u*H+f*W,r[9]=h*M+d*G+u*Z+f*j,r[13]=h*U+d*X+u*z+f*tt,r[2]=_*T+y*L+m*P+p*et,r[6]=_*g+y*N+m*H+p*W,r[10]=_*M+y*G+m*Z+p*j,r[14]=_*U+y*X+m*z+p*tt,r[3]=S*T+R*L+E*P+w*et,r[7]=S*g+R*N+E*H+w*W,r[11]=S*M+R*G+E*Z+w*j,r[15]=S*U+R*X+E*z+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],y=t[7],m=t[11],p=t[15],S=l*f-c*u,R=o*f-c*d,E=o*u-l*d,w=a*f-c*h,T=a*u-l*h,g=a*d-o*h;return e*(y*S-m*R+p*E)-i*(_*S-m*w+p*T)+s*(_*R-y*w+p*g)-r*(_*E-y*T+m*g)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],y=t[13],m=t[14],p=t[15],S=e*o-i*a,R=e*l-s*a,E=e*c-r*a,w=i*l-s*o,T=i*c-r*o,g=s*c-r*l,M=h*y-d*_,U=h*m-u*_,L=h*p-f*_,N=d*m-u*y,G=d*p-f*y,X=u*p-f*m,P=S*X-R*G+E*N+w*L-T*U+g*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/P;return t[0]=(o*X-l*G+c*N)*H,t[1]=(s*G-i*X-r*N)*H,t[2]=(y*g-m*T+p*w)*H,t[3]=(u*T-d*g-f*w)*H,t[4]=(l*L-a*X-c*U)*H,t[5]=(e*X-s*L+r*U)*H,t[6]=(m*E-_*g-p*R)*H,t[7]=(h*g-u*E+f*R)*H,t[8]=(a*G-o*L+c*M)*H,t[9]=(i*L-e*G-r*M)*H,t[10]=(_*T-y*E+p*S)*H,t[11]=(d*E-h*T-f*S)*H,t[12]=(o*U-a*N-l*M)*H,t[13]=(e*N-i*U+s*M)*H,t[14]=(y*R-_*w-m*S)*H,t[15]=(h*w-d*R+u*S)*H,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,y=a*h,m=a*d,p=o*d,S=l*c,R=l*h,E=l*d,w=i.x,T=i.y,g=i.z;return s[0]=(1-(y+p))*w,s[1]=(f+E)*w,s[2]=(_-R)*w,s[3]=0,s[4]=(f-E)*T,s[5]=(1-(u+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(_+R)*g,s[9]=(m-S)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=gn.set(s[0],s[1],s[2]).length();const o=gn.set(s[4],s[5],s[6]).length(),l=gn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);const c=1/a,h=1/o,d=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,e.setFromRotationMatrix(ri),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=fi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===fi)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===_s)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=fi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===fi)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===_s)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Dr.prototype.isMatrix4=!0;let Kt=Dr;const gn=new I,ri=new Kt,ad=new I(0,0,0),od=new I(1,1,1),Bi=new I,Ls=new I,Xe=new I,El=new Kt,Tl=new un;class ln{constructor(t=0,e=0,i=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return El.makeRotationFromQuaternion(t),this.setFromRotationMatrix(El,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ld=0;const wl=new I,_n=new un,wi=new Kt,Ds=new I,Kn=new I,cd=new I,hd=new un,Al=new I(1,0,0),Rl=new I(0,1,0),Cl=new I(0,0,1),Pl={type:"added"},ud={type:"removed"},vn={type:"childadded",child:null},Kr={type:"childremoved",child:null};class ge extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new I,e=new ln,i=new un,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _n.setFromAxisAngle(t,e),this.quaternion.multiply(_n),this}rotateOnWorldAxis(t,e){return _n.setFromAxisAngle(t,e),this.quaternion.premultiply(_n),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ds.copy(t):Ds.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Kn,Ds,this.up):wi.lookAt(Ds,Kn,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),_n.setFromRotationMatrix(wi),this.quaternion.premultiply(_n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),vn.child=t,this.dispatchEvent(vn),vn.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ud),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),vn.child=t,this.dispatchEvent(vn),vn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Si extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dd={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Jr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=Qu(t,1),e=Ht(e,0,1),i=Ht(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Jr(a,r,t+1/3),this.g=Jr(a,r,t),this.b=Jr(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=me){function i(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const i=th[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return qt.workingToColorSpace(Le.copy(this),t),Math.round(Ht(Le.r*255,0,255))*65536+Math.round(Ht(Le.g*255,0,255))*256+Math.round(Ht(Le.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Le.copy(this),e);const i=Le.r,s=Le.g,r=Le.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=me){qt.workingToColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,s=Le.b;return t!==me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Is);const i=Wr(zi.h,Is.h,e),s=Wr(zi.s,Is.s,e),r=Wr(zi.l,Is.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new ft;ft.NAMES=th;class ko{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new ko(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fd extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ai=new I,Ai=new I,Qr=new I,Ri=new I,xn=new I,Mn=new I,Ll=new I,jr=new I,ta=new I,ea=new I,ia=new oe,na=new oe,sa=new oe;class ei{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Ai.subVectors(i,e),Qr.subVectors(t,e);const a=ai.dot(ai),o=ai.dot(Ai),l=ai.dot(Qr),c=Ai.dot(Ai),h=Ai.dot(Qr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ia.setScalar(0),na.setScalar(0),sa.setScalar(0),ia.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),sa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(na,r.y),a.addScaledVector(sa,r.z),a}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Ai.subVectors(t,e),ai.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ai.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;xn.subVectors(s,i),Mn.subVectors(r,i),jr.subVectors(t,i);const l=xn.dot(jr),c=Mn.dot(jr);if(l<=0&&c<=0)return e.copy(i);ta.subVectors(t,s);const h=xn.dot(ta),d=Mn.dot(ta);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(xn,a);ea.subVectors(t,r);const f=xn.dot(ea),_=Mn.dot(ea);if(_>=0&&f<=_)return e.copy(r);const y=f*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Mn,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Ll.subVectors(r,s),o=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Ll,o);const p=1/(m+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(xn,a).addScaledVector(Mn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class dn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zn),Us.subVectors(this.max,Zn),Sn.subVectors(t.a,Zn),yn.subVectors(t.b,Zn),bn.subVectors(t.c,Zn),Gi.subVectors(yn,Sn),ki.subVectors(bn,yn),ji.subVectors(Sn,bn);let e=[0,-Gi.z,Gi.y,0,-ki.z,ki.y,0,-ji.z,ji.y,Gi.z,0,-Gi.x,ki.z,0,-ki.x,ji.z,0,-ji.x,-Gi.y,Gi.x,0,-ki.y,ki.x,0,-ji.y,ji.x,0];return!ra(e,Sn,yn,bn,Us)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Sn,yn,bn,Us))?!1:(Fs.crossVectors(Gi,ki),e=[Fs.x,Fs.y,Fs.z],ra(e,Sn,yn,bn,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ci=[new I,new I,new I,new I,new I,new I,new I,new I],oi=new I,Ns=new dn,Sn=new I,yn=new I,bn=new I,Gi=new I,ki=new I,ji=new I,Zn=new I,Us=new I,Fs=new I,tn=new I;function ra(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){tn.fromArray(n,r);const o=s.x*Math.abs(tn.x)+s.y*Math.abs(tn.y)+s.z*Math.abs(tn.z),l=t.dot(tn),c=e.dot(tn),h=i.dot(tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ue=new I,Os=new At;let pd=0;class $e extends cn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=ui,this.version=0,this._normalizationScale=t!==void 0?Nr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Qc(t,this.array)}}class eh extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ih extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}}const md=new dn,Jn=new I,aa=new I;class Xn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):md.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jn.subVectors(t,this.center);const e=Jn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Jn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jn.copy(t.center).add(aa)),this.expandByPoint(Jn.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gd=0;const ti=new Kt,oa=new ge,En=new I,qe=new dn,Qn=new dn,ye=new I;class He extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?ih:eh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(En).negate(),this.translate(En.x,En.y,En.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(qe.min,Qn.min),qe.expandByPoint(ye),ye.addVectors(qe.max,Qn.max),qe.expandByPoint(ye)):(qe.expandByPoint(Qn.min),qe.expandByPoint(Qn.max))}qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(En.fromBufferAttribute(t,c),ye.add(En)),s=Math.max(s,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new I,l[U]=new I;const h=new I,d=new I,u=new I,f=new At,_=new At,y=new At,m=new I,p=new I;function S(U,L,N){c[U]=c[L]=c[N]=1,h.fromBufferAttribute(i,U),d.fromBufferAttribute(i,L),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,U),_.fromBufferAttribute(r,L),y.fromBufferAttribute(r,N),d.sub(h),u.sub(h),_.sub(f),y.sub(f);const G=1/(_.x*y.y-y.x*_.y);isFinite(G)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(G),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-y.x).multiplyScalar(G),o[U].add(m),o[L].add(m),o[N].add(m),l[U].add(p),l[L].add(p),l[N].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,L=R.length;U<L;++U){const N=R[U],G=N.start,X=N.count;for(let P=G,H=G+X;P<H;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new I,w=new I,T=new I,g=new I;function M(U){T.fromBufferAttribute(s,U),g.copy(T);const L=o[U];E.copy(L),E.sub(T.multiplyScalar(T.dot(L))).normalize(),w.crossVectors(g,L);const G=w.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,G)}for(let U=0,L=i.count;U<L;++U)c[U]&&M(U);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new $e(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _d{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Dl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Dl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Dl(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=hn()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const Ue=new I;class Pr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Nr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Qc(t,this.data.array)}}const la=new I,vd=new I,xd=new Ut;class Vi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=la.subVectors(i,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(la),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xd.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Md=0;class fn extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=ds,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Oc,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Vi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nh extends fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Tn;const jn=new I,wn=new I,An=new I,Rn=new At,ts=new At,sh=new Kt,Bs=new I,es=new I,zs=new I,Il=new At,ca=new At,Nl=new At;class Sd extends ge{constructor(t=new nh){if(super(),this.isSprite=!0,this.type="Sprite",Tn===void 0){Tn=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _d(e,5);Tn.setIndex([0,1,2,0,2,3]),Tn.setAttribute("position",new Pr(i,3,0,!1)),Tn.setAttribute("uv",new Pr(i,2,3,!1))}this.geometry=Tn,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wn.setFromMatrixScale(this.matrixWorld),sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),An.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wn.multiplyScalar(-An.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Gs(Bs.set(-.5,-.5,0),An,a,wn,s,r),Gs(es.set(.5,-.5,0),An,a,wn,s,r),Gs(zs.set(.5,.5,0),An,a,wn,s,r),Il.set(0,0),ca.set(1,0),Nl.set(1,1);let o=t.ray.intersectTriangle(Bs,es,zs,!1,jn);if(o===null&&(Gs(es.set(-.5,.5,0),An,a,wn,s,r),ca.set(0,1),o=t.ray.intersectTriangle(Bs,zs,es,!1,jn),o===null))return;const l=t.ray.origin.distanceTo(jn);l<t.near||l>t.far||e.push({distance:l,point:jn.clone(),uv:ei.getInterpolation(jn,Bs,es,zs,Il,ca,Nl,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Gs(n,t,e,i,s,r){Rn.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ts.x=r*Rn.x-s*Rn.y,ts.y=s*Rn.x+r*Rn.y):ts.copy(Rn),n.copy(t),n.x+=ts.x,n.y+=ts.y,n.applyMatrix4(sh)}const Pi=new I,ha=new I,ks=new I,Hs=new I;class Ho{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ha.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=Hs.dot(this.direction),l=-Hs.dot(ks),c=Hs.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ha).addScaledVector(ks,u),f}intersectSphere(t,e){if(t.radius<0)return null;Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,S=i.y-a.y,R=i.z-a.z,E=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let g,M,U,L,N,G,X,P,H,Z,z,et;if(E>=w&&E>=T?(U=l,G=d,H=_,et=p,l>=0?(g=c,M=h,L=u,N=f,X=y,P=m,Z=S,z=R):(g=h,M=c,L=f,N=u,X=m,P=y,Z=R,z=S)):w>=T?(U=c,G=u,H=y,et=S,c>=0?(g=h,M=l,L=f,N=d,X=m,P=_,Z=R,z=p):(g=l,M=h,L=d,N=f,X=_,P=m,Z=p,z=R)):(U=h,G=f,H=m,et=R,h>=0?(g=l,M=c,L=d,N=u,X=_,P=y,Z=p,z=S):(g=c,M=l,L=u,N=d,X=y,P=_,Z=S,z=p)),U===0)return null;const W=g/U,j=M/U,tt=1/U,Tt=L-W*G,Ft=N-j*G,$=X-W*H,gt=P-j*H,yt=Z-W*et,Pt=z-j*et,_t=yt*gt-Pt*$,Bt=Tt*Pt-Ft*yt,ce=$*Ft-gt*Tt;if(s){if(_t<0||Bt<0||ce<0)return null}else if((_t<0||Bt<0||ce<0)&&(_t>0||Bt>0||ce>0))return null;const Dt=_t+Bt+ce;if(Dt===0)return null;const Qt=tt*(_t*G+Bt*H+ce*et);return(Dt>0?Qt<0:Qt>0)?null:this.at(Qt/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ul=new Kt,en=new Ho,Vs=new Xn,Fl=new I,Ws=new I,Xs=new I,qs=new I,ua=new I,Ys=new I,Ol=new I,$s=new I;class Ee extends ge{constructor(t=new He,e=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ua.fromBufferAttribute(d,t),a?Ys.addScaledVector(ua,h):Ys.addScaledVector(ua.sub(e),h))}e.add(Ys)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),en.copy(t.ray).recast(t.near),!(Vs.containsPoint(en.origin)===!1&&(en.intersectSphere(Vs,Fl)===null||en.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Ul.copy(r).invert(),en.copy(t.ray).applyMatrix4(Ul),!(i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,en)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const m=u[_],p=a[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,w=R;E<w;E+=3){const T=o.getX(E),g=o.getX(E+1),M=o.getX(E+2);s=Ks(this,p,t,i,c,h,d,T,g,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const S=o.getX(m),R=o.getX(m+1),E=o.getX(m+2);s=Ks(this,a,t,i,c,h,d,S,R,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const m=u[_],p=a[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,w=R;E<w;E+=3){const T=E,g=E+1,M=E+2;s=Ks(this,p,t,i,c,h,d,T,g,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const S=m,R=m+1,E=m+2;s=Ks(this,a,t,i,c,h,d,S,R,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(n,t,e,i,s,r,a,o){let l;if(t.side===De?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Yi,o),l===null)return null;$s.copy(o),$s.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:n}}function Ks(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ws),n.getVertexPosition(l,Xs),n.getVertexPosition(c,qs);const h=yd(n,t,e,i,Ws,Xs,qs,Ol);if(h){const d=new I;ei.getBarycoord(Ol,Ws,Xs,qs,d),s&&(h.uv=ei.getInterpolatedAttribute(s,o,l,c,d,new At)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,d,new At)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};ei.getNormal(Ws,Xs,qs,u.normal),h.face=u,h.barycoord=d}return h}class Vo extends Ae{constructor(t=null,e=1,i=1,s,r,a,o,l,c=le,h=le,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bl extends $e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cn=new Kt,zl=new Kt,Zs=[],Gl=new dn,bd=new Kt,is=new Ee,ns=new Xn;class Ed extends Ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cn),Gl.copy(t.boundingBox).applyMatrix4(Cn),this.boundingBox.union(Gl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cn),ns.copy(t.boundingSphere).applyMatrix4(Cn),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cn),zl.multiplyMatrices(i,Cn),is.matrixWorld=zl,is.raycast(t,Zs);for(let a=0,o=Zs.length;a<o;a++){const l=Zs[a];l.instanceId=r,l.object=this,e.push(l)}Zs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vo(new Float32Array(s*this.count),s,this.count,Uo,ui));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nn=new Xn,Td=new At(.5,.5),Js=new I;class xs{constructor(t=new Vi,e=new Vi,i=new Vi,s=new Vi,r=new Vi,a=new Vi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],y=r[9],m=r[10],p=r[11],S=r[12],R=r[13],E=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-_,w-S).normalize(),s[1].setComponents(c+a,f+h,p+_,w+S).normalize(),s[2].setComponents(c+o,f+d,p+y,w+R).normalize(),s[3].setComponents(c-o,f-d,p-y,w-R).normalize(),i)s[4].setComponents(l,u,m,E).normalize(),s[5].setComponents(c-l,f-u,p-m,w-E).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-E).normalize(),e===fi)s[5].setComponents(c+l,f+u,p+m,w+E).normalize();else if(e===_s)s[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nn)}intersectsSprite(t){nn.center.set(0,0,0);const e=Td.distanceTo(t.center);return nn.radius=.7071067811865476+e,nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(nn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const kl=new Kt;class Wo{constructor(){this.coordinateSystem=fi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];kl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new xs),i[s].setFromProjectionMatrix(kl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new xs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new Wo().copy(this)}}class rh extends fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hl=new Kt,ho=new Ho,Qs=new Xn,js=new I;class wd extends ge{constructor(t=new He,e=new rh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Hl.copy(s).invert(),ho.copy(t.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=u,y=f;_<y;_++){const m=c.getX(_);js.fromBufferAttribute(d,m),Vl(js,m,l,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,y=f;_<y;_++)js.fromBufferAttribute(d,_),Vl(js,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vl(n,t,e,i,s,r,a){const o=ho.distanceSqToPoint(n);if(o<e){const l=new I;ho.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ah extends Ae{constructor(t=[],e=Bn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Es extends Ae{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn extends Ae{constructor(t,e,i=yi,s,r,a,o=le,l=le,c,h=$i,d=1){if(h!==$i&&h!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class oh extends Gn{constructor(t,e=yi,i=Bn,s,r,a=le,o=le,l,c=$i){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lh extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ts extends He{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function _(y,m,p,S,R,E,w,T,g,M,U){const L=E/g,N=w/M,G=E/2,X=w/2,P=T/2,H=g+1,Z=M+1;let z=0,et=0;const W=new I;for(let j=0;j<Z;j++){const tt=j*N-X;for(let Tt=0;Tt<H;Tt++){const Ft=Tt*L-G;W[y]=Ft*S,W[m]=tt*R,W[p]=P,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(Tt/g),d.push(1-j/M),z+=1}}for(let j=0;j<M;j++)for(let tt=0;tt<g;tt++){const Tt=u+tt+H*j,Ft=u+tt+H*(j+1),$=u+(tt+1)+H*(j+1),gt=u+(tt+1)+H*j;l.push(Tt,Ft,gt),l.push(Ft,$,gt),et+=6}o.addGroup(f,et,U),f+=et,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ws extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new At;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ad{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new At:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,s=[],r=[],a=[],o=new I,l=new Kt;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ht(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function Xo(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Wl=new I,Xl=new I,da=new Xo,fa=new Xo,pa=new Xo;class Rd extends Ad{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Xl.subVectors(s[0],s[1]).add(s[0]),c=Xl);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),da.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,y,m),fa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,y,m),pa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),fa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),pa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(da.calc(l),fa.calc(l),pa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ki extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],y=[],m=[];for(let p=0;p<h;p++){const S=p*u-a;for(let R=0;R<c;R++){const E=R*d-r;_.push(E,-S,0),y.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const R=S+c*p,E=S+c*(p+1),w=S+1+c*(p+1),T=S+1+c*p;f.push(R,E,T),f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.widthSegments,t.heightSegments)}}class qo extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new I,u=new I,f=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const S=[],R=p/i,E=a+R*o,w=t*Math.cos(E),T=Math.sqrt(t*t-w*w);let g=0;p===0&&a===0?g=.5/e:p===i&&l===Math.PI&&(g=-.5/e);for(let M=0;M<=e;M++){const U=M/e,L=s+U*r;d.x=-T*Math.cos(L),d.y=w,d.z=T*Math.sin(L),_.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(U+g,1-R),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const R=h[p][S+1],E=h[p][S],w=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(R,E,T),(p!==i-1||l<Math.PI)&&f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function kn(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(ql(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ql(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=kn(n[e]);for(const s in i)t[s]=i[s]}return t}function ql(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ch(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Hn={clone:kn,merge:Fe};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kn(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(s.value);break;case"v2":this.uniforms[i].value=new At().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hh extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dd extends fn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Id extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nd extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ma={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Yl(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Yl(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Yl(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Ud{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fd=new Ud;class Yo{constructor(t){this.manager=t!==void 0?t:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn=new WeakMap;class Od extends Yo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ma.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Pn.get(a);d===void 0&&(d=[],Pn.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=vs("img");function l(){h(),e&&e(this);const d=Pn.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Pn.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),ma.remove(`image:${t}`);const u=Pn.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onError&&_.onError(d)}Pn.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ma.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Bd extends Yo{constructor(t){super(t)}load(t,e,i,s){const r=new Ae,a=new Od(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class $o extends ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class zd extends $o{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ga=new Kt,$l=new I,Kl=new I;class Gd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ga,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tr=new I,er=new un,mi=new I;class uh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tr,er,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,er,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(tr,er,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,er,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new I,Zl=new At,Jl=new At;class ci extends uh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Jl),e.subVectors(Jl,Zl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ko extends uh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kd extends Gd{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ql extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new kd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Hd extends $o{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ln=-90,Dn=1;class uo extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ci(Ln,Dn,t,e);s.layers=this.layers,this.add(s);const r=new ci(Ln,Dn,t,e);r.layers=this.layers,this.add(r);const a=new ci(Ln,Dn,t,e);a.layers=this.layers,this.add(a);const o=new ci(Ln,Dn,t,e);o.layers=this.layers,this.add(o);const l=new ci(Ln,Dn,t,e);l.layers=this.layers,this.add(l);const c=new ci(Ln,Dn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Vd extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Wd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Xd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Xd(){this._document.hidden===!1&&this.reset()}const jl=new Kt;class qd{constructor(t,e,i=0,s=1/0){this.ray=new Ho(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,i=[]){return fo(t,this,i,e),i.sort(tc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)fo(t[s],this,i,e);return i.sort(tc),i}}function tc(n,t){return n.distance-t.distance}function fo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)fo(r[a],t,e,!0)}}function ec(n,t,e,i){const s=Yd(i);switch(e){case Wc:return n*t;case Uo:return n*t/s.components*s.byteLength;case Fo:return n*t/s.components*s.byteLength;case on:return n*t*2/s.components*s.byteLength;case Oo:return n*t*2/s.components*s.byteLength;case Xc:return n*t*3/s.components*s.byteLength;case di:return n*t*4/s.components*s.byteLength;case Bo:return n*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ua:return Math.max(n,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(n,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Tr:case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case io:case no:case so:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ro:case ao:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wr:case oo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yd(n){switch(n){case Ye:case Gc:return{byteLength:1,components:1};case gs:case kc:case Ge:return{byteLength:2,components:1};case Io:case No:return{byteLength:2,components:4};case yi:case Do:case ui:return{byteLength:4,components:1};case Hc:case Vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dh(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $d(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],y=d[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xf=`#define PI 3.141592653589793
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
} // validated`,Mf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Yf=`uniform sampler2D dfgLUT;
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
}`,$f=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
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
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Np=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform float backgroundBlurriness;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,nm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,ym=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Kd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:jd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:yf,emissivemap_fragment:bf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:wf,envmap_fragment:Af,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Cf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:kf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:If,fog_fragment:Nf,fog_pars_fragment:Uf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:zf,lights_pars_begin:Gf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Wf,lights_phong_pars_fragment:Xf,lights_physical_fragment:qf,lights_physical_pars_fragment:Yf,lights_fragment_begin:$f,lights_fragment_maps:Kf,lights_fragment_end:Zf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:ip,map_pars_fragment:np,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:yp,opaque_fragment:bp,packing:Ep,premultiplied_alpha_fragment:Tp,project_vertex:wp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Np,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:Gp,tonemapping_fragment:kp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:$p,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:jp,cube_frag:tm,depth_vert:em,depth_frag:im,distance_vert:nm,distance_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:ym,points_vert:bm,points_frag:Em,shadow_vert:Tm,shadow_frag:wm,sprite_vert:Am,sprite_frag:Rm},pt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},xi={basic:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ft(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([pt.points,pt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([pt.common,pt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([pt.sprite,pt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Fe([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Fe([pt.lights,pt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};xi.physical={uniforms:Fe([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ir={r:0,b:0,g:0},Cm=new Kt,fh=new Ut;fh.set(-1,0,0,0,1,0,0,0,1);function Pm(n,t,e,i,s,r){const a=new ft(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const E=S.backgroundBlurriness>0;R=t.get(R,E)}return R}function _(S){let R=!1;const E=f(S);E===null?m(a,o):E&&E.isColor&&(m(E,1),R=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,R){const E=f(R);E&&E.isCubeTexture?(c===void 0&&(c=new Ee(new Ts(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:kn(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fh),c.material.toneMapped=qt.getTransfer(E.colorSpace)!==Jt,(h!==E||d!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ee(new Ki(2,2),new ze({name:"BackgroundMaterial",uniforms:kn(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=qt.getTransfer(E.colorSpace)!==Jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,R){S.getRGB(ir,ch(n)),e.buffers.color.setClear(ir.r,ir.g,ir.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Lm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(N,G,X,P,H){let Z=!1;const z=d(N,P,X,G);r!==z&&(r=z,c(r.object)),Z=f(N,P,X,H),Z&&_(N,P,X,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(N,G,X,P),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,G,X,P){const H=P.wireframe===!0;let Z=i[G.id];Z===void 0&&(Z={},i[G.id]=Z);const z=N.isInstancedMesh===!0?N.id:0;let et=Z[z];et===void 0&&(et={},Z[z]=et);let W=et[X.id];W===void 0&&(W={},et[X.id]=W);let j=W[H];return j===void 0&&(j=u(l()),W[H]=j),j}function u(N){const G=[],X=[],P=[];for(let H=0;H<e;H++)G[H]=0,X[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,G,X,P){const H=r.attributes,Z=G.attributes;let z=0;const et=X.getAttributes();for(const W in et)if(et[W].location>=0){const tt=H[W];let Tt=Z[W];if(Tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),tt===void 0||tt.attribute!==Tt||Tt&&tt.data!==Tt.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function _(N,G,X,P){const H={},Z=G.attributes;let z=0;const et=X.getAttributes();for(const W in et)if(et[W].location>=0){let tt=Z[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));const Tt={};Tt.attribute=tt,tt&&tt.data&&(Tt.data=tt.data),H[W]=Tt,z++}r.attributes=H,r.attributesNum=z,r.index=P}function y(){const N=r.newAttributes;for(let G=0,X=N.length;G<X;G++)N[G]=0}function m(N){p(N,0)}function p(N,G){const X=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;X[N]=1,P[N]===0&&(n.enableVertexAttribArray(N),P[N]=1),H[N]!==G&&(n.vertexAttribDivisor(N,G),H[N]=G)}function S(){const N=r.newAttributes,G=r.enabledAttributes;for(let X=0,P=G.length;X<P;X++)G[X]!==N[X]&&(n.disableVertexAttribArray(X),G[X]=0)}function R(N,G,X,P,H,Z,z){z===!0?n.vertexAttribIPointer(N,G,X,H,Z):n.vertexAttribPointer(N,G,X,P,H,Z)}function E(N,G,X,P){y();const H=P.attributes,Z=X.getAttributes(),z=G.defaultAttributeValues;for(const et in Z){const W=Z[et];if(W.location>=0){let j=H[et];if(j===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const tt=j.normalized,Tt=j.itemSize,Ft=t.get(j);if(Ft===void 0)continue;const $=Ft.buffer,gt=Ft.type,yt=Ft.bytesPerElement,Pt=gt===n.INT||gt===n.UNSIGNED_INT||j.gpuType===Do;if(j.isInterleavedBufferAttribute){const _t=j.data,Bt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,ce=j.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Dt=0;Dt<W.locationSize;Dt++)p(W.location+Dt,_t.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)m(W.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Dt=0;Dt<W.locationSize;Dt++)R(W.location+Dt,Tt/W.locationSize,gt,tt,Bt*yt,(ce+Tt/W.locationSize*Dt)*yt,Pt)}else{if(j.isInstancedBufferAttribute){for(let _t=0;_t<W.locationSize;_t++)p(W.location+_t,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t);n.bindBuffer(n.ARRAY_BUFFER,$);for(let _t=0;_t<W.locationSize;_t++)R(W.location+_t,Tt/W.locationSize,gt,tt,Tt*yt,Tt/W.locationSize*_t*yt,Pt)}}else if(z!==void 0){const tt=z[et];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(W.location,tt);break;case 3:n.vertexAttrib3fv(W.location,tt);break;case 4:n.vertexAttrib4fv(W.location,tt);break;default:n.vertexAttrib1fv(W.location,tt)}}}}S()}function w(){U();for(const N in i){const G=i[N];for(const X in G){const P=G[X];for(const H in P){const Z=P[H];for(const z in Z)h(Z[z].object),delete Z[z];delete P[H]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const G=i[N.id];for(const X in G){const P=G[X];for(const H in P){const Z=P[H];for(const z in Z)h(Z[z].object),delete Z[z];delete P[H]}}delete i[N.id]}function g(N){for(const G in i){const X=i[G];for(const P in X){const H=X[P];if(H[N.id]===void 0)continue;const Z=H[N.id];for(const z in Z)h(Z[z].object),delete Z[z];delete H[N.id]}}}function M(N){for(const G in i){const X=i[G],P=N.isInstancedMesh===!0?N.id:0,H=X[P];if(H!==void 0){for(const Z in H){const z=H[Z];for(const et in z)h(z[et].object),delete z[et];delete H[Z]}delete X[P],Object.keys(X).length===0&&delete i[G]}}}function U(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Dm(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==di&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const M=g===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Ye&&g!==ui&&!M&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:E,maxSamples:w,samples:T}}function Nm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Vi,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,R=S*4;let E=p.clippingState||null;l.value=E,E=h(_,u,R,f);for(let w=0;w!==R;++w)E[w]=e[w];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,E=f;R!==y;++R,E+=4)a.copy(d[R]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}class Zo extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ah(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ts(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:an});r.uniforms.tEquirect.value=e;const a=new Ee(s,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Be),new uo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const ic=256,Um=3,Fm=20,ph=256,mh=16,Om=3,Bm=new I,zm=new ft;class Lr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new Ee(new Ts(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Bm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(zm));const m=new uo(i,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ic,ju(t))}_fromTexture(t,e){t.mapping===Bn||t.mapping===ps?this._setSize(t.image.length===0?ic:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=nc(t,!1,!1),i=Math.log2(t)-Um;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=nc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Bn||t.mapping===ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gm(),this._integrationMaterial=km());const e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/mh);for(let a=0;a<=i;a++){const o=Lr.lodToRoughness(a,i);if(a>i-Om)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(ph*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Hm());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}}function nc(n,t,e){return new Zo(n,{minFilter:Ii,generateMipmaps:t,type:Ge,colorSpace:Ar,depthBuffer:e})}function As(n,t,e){return new ze({name:n,uniforms:t,vertexShader:kt.cube_vert,fragmentShader:e,side:De,blending:an,depthTest:!1,depthWrite:!1})}function Gm(){return As("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ph}u

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
	`)}function km(){return As("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mh}},`

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
	`)}function Hm(){return As("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fm}
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
	`)}function sc(){return As("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rc(){return As("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===zr||f===Gr)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new Zo(_.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,_=f===zr||f===Gr,y=f===Bn||f===ps;if(_||y){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Lr(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return _&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new Lr(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===zr?u.mapping=Bn:f===Gr&&(u.mapping=ps),u}function l(u){let f=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Wm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&_r("WebGLRenderer: "+i+" extension not supported."),s}}}function Xm(n,t,e,i){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(const m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const y=r.get(_);y&&(t.remove(y),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(_){const y=_.attributes;for(const m in y)t.update(y[m],n.ARRAY_BUFFER)}function d(_){const y=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const S=y!==null?y.array.length:m.array.length/3-1,R=m.count>=65535?ih:eh,E=new R(Math.ceil(S/3)*6,1),w=E.array;if(y!==null){const g=y.array;p=y.version;for(let M=0,U=0;M<S;M+=3){const L=g[M+0],N=g[M+1],G=g[M+2];w[U++]=L,w[U++]=N,w[U++]=N,w[U++]=G,w[U++]=G,w[U++]=L}}else{p=m.version;for(let g=0,M=0;g<S;g+=3){const U=g+0,L=g+1,N=g+2;w[M++]=U,w[M++]=L,w[M++]=L,w[M++]=N,w[M++]=N,w[M++]=U}}E.version=p;const T=r.get(_);T&&t.remove(T),r.set(_,E)}function u(_){const y=r.get(_);if(y){const m=_.index;m!==null&&y.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(const _ in s){const y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function qm(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ym(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $m(n,t,e){const i=new WeakMap,s=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let L=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var f=L;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const g=new Float32Array(w*T*4*d),M=new jc(g,w,T,d);M.type=ui,M.needsUpdate=!0;const U=E*4;for(let N=0;N<d;N++){const G=p[N],X=S[N],P=R[N],H=w*T*4*N;for(let Z=0;Z<G.count;Z++){const z=Z*U;_===!0&&(s.fromBufferAttribute(G,Z),g[H+z+0]=s.x,g[H+z+1]=s.y,g[H+z+2]=s.z,g[H+z+3]=0),y===!0&&(s.fromBufferAttribute(X,Z),g[H+z+4]=s.x,g[H+z+5]=s.y,g[H+z+6]=s.z,g[H+z+7]=0),m===!0&&(s.fromBufferAttribute(P,Z),g[H+z+8]=s.x,g[H+z+9]=s.y,g[H+z+10]=s.z,g[H+z+11]=P.itemSize===4?s.w:1)}}u={count:d,texture:M,size:new At(w,T)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Km(n,t,e,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Zm={[wo]:"LINEAR_TONE_MAPPING",[Ao]:"REINHARD_TONE_MAPPING",[Ro]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[Lo]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[Po]:"CUSTOM_TONE_MAPPING"};function Jm(n,t,e,i,s,r){const a=new ke(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new He;h.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new de([0,2,0,0,2,0],2));const d=new hh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ee(h,d),f=new Ko(-1,1,1,-1,0,1);let _=null,y=null,m=!1,p,S=null,R=[],E=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<R.length;g++){const M=R[g];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){R=w,E=R.length>0&&R[0].isRenderPass===!0;const T=a.width,g=a.height;R.length>0&&o===null&&(o=new ke(T,g,{type:Ge,depthBuffer:!1,stencilBuffer:!1}),l=new ke(T,g,{type:Ge,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&R.some(U=>U.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Gn(T,g),r===!0&&(c.format=Xi,c.type=zn)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let U=0;U<R.length;U++){const L=R[U];L.setSize&&L.setSize(T,g),M&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Ni&&R.length===0)return!1;if(S=T,T!==null){const g=T.width,M=T.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return E===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Ni,!0},this.hasRenderPass=function(){return E},this.end=function(w,T){w.toneMapping=p,m=!0;let g=a,M=o;for(let U=0;U<R.length;U++){const L=R[U];L.enabled!==!1&&(L.render(w,M,g,T),L.needsSwap!==!1&&(g=M,M=M===o?l:o))}if(_!==w.outputColorSpace||y!==w.toneMapping){_=w.outputColorSpace,y=w.toneMapping,d.defines={},qt.getTransfer(_)===Jt&&(d.defines.SRGB_TRANSFER="");const U=Zm[y];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(S),w.render(u,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const gh=new Ae,_h=new Gn(1,1),vh=new oh(1),xh=new jc,Mh=new rd,Sh=new ah,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function qn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ur(n,t){let e=oc[t];e===void 0&&(e=new Int32Array(t),oc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function ig(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;hc.set(i),n.uniformMatrix2fv(this.addr,!1,hc),ve(e,i)}}function ng(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;cc.set(i),n.uniformMatrix3fv(this.addr,!1,cc),ve(e,i)}}function sg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;lc.set(i),n.uniformMatrix4fv(this.addr,!1,lc),ve(e,i)}}function rg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function og(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function cg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function Fr(n){return n.version===0&&(n.compareFunction=$c,n.needsUpdate=!0),n}function fg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fr(_h):r=gh,e.setTexture2D(t||r,s)}function pg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Mh,s)}function mg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fr(vh):r=Sh,e.setTextureCube(t||r,s)}function gg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xh,s)}function _g(n){switch(n){case 5126:return Qm;case 35664:return jm;case 35665:return tg;case 35666:return eg;case 35674:return ig;case 35675:return ng;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(n,t){n.uniform1fv(this.addr,t)}function xg(n,t){const e=qn(t,this.size,2);n.uniform2fv(this.addr,e)}function Mg(n,t){const e=qn(t,this.size,3);n.uniform3fv(this.addr,e)}function Sg(n,t){const e=qn(t,this.size,4);n.uniform4fv(this.addr,e)}function yg(n,t){const e=qn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bg(n,t){const e=qn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Eg(n,t){const e=qn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Tg(n,t){n.uniform1iv(this.addr,t)}function wg(n,t){n.uniform2iv(this.addr,t)}function Ag(n,t){n.uniform3iv(this.addr,t)}function Rg(n,t){n.uniform4iv(this.addr,t)}function Cg(n,t){n.uniform1uiv(this.addr,t)}function Pg(n,t){n.uniform2uiv(this.addr,t)}function Lg(n,t){n.uniform3uiv(this.addr,t)}function Dg(n,t){n.uniform4uiv(this.addr,t)}function Ig(n,t,e){const i=this.cache,s=t.length,r=Ur(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fr(_h):a=gh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ng(n,t,e){const i=this.cache,s=t.length,r=Ur(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mh,r[a])}function Ug(n,t,e){const i=this.cache,s=t.length,r=Ur(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Fr(vh):a=Sh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Fg(n,t,e){const i=this.cache,s=t.length,r=Ur(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xh,r[a])}function Og(n){switch(n){case 5126:return vg;case 35664:return xg;case 35665:return Mg;case 35666:return Sg;case 35674:return yg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}class Bg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class zg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class Gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function uc(n,t){n.seq.push(t),n.map[t.id]=t}function kg(n,t,e){const i=n.name,s=i.length;for(_a.lastIndex=0;;){const r=_a.exec(i),a=_a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uc(e,c===void 0?new Bg(o,n,t):new zg(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Gg(o),uc(e,d)),e=d}}}class vr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);kg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function dc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hg=37297;let Vg=0;function Wg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const fc=new Ut;function Xg(n){qt._getMatrix(fc,qt.workingColorSpace,n);const t=`mat3( ${fc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case Rr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wg(n.getShaderSource(t),o)}else return r}function qg(n,t){const e=Xg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Yg={[wo]:"Linear",[Ao]:"Reinhard",[Ro]:"Cineon",[Co]:"ACESFilmic",[Lo]:"AgX",[Ir]:"Neutral",[Po]:"Custom"};function $g(n,t){const e=Yg[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const nr=new I;function Kg(){qt.getLuminanceCoefficients(nr);const n=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Jg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function hs(n){return n!==""}function mc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(n){return n.replace(jg,t0)}function t0(n,t){const e=kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return po(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(n){return n.replace(e0,i0)}function i0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const n0={[us]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function s0(n){return n0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r0={[ps]:"ENVMAP_MODE_REFRACTION"};function a0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o0={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function l0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":o0[n.combine]||"ENVMAP_BLENDING_NONE"}function c0(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=s0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=a0(e),d=l0(e),u=Zg(e),f=Jg(r),_=s.createProgram();let y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(hs).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(hs).join(`
`),m.length>0&&(m+=`
`)):(y=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),m=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=po(a),a=mc(a,e),a=gc(a,e),o=po(o),o=mc(o,e),o=gc(o,e),a=_c(a),o=_c(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=p+y+a,R=p+m+o,E=dc(s,s.VERTEX_SHADER,S),w=dc(s,s.FRAGMENT_SHADER,R);s.attachShader(_,E),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(L){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(w)||"",P=N.trim(),H=G.trim(),Z=X.trim();let z=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,w);else{const W=pc(s,E,"vertex"),j=pc(s,w,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+W+`
`+j)}else P!==""?It("WebGLProgram: Program Info Log:",P):(H===""||Z==="")&&(et=!1);et&&(L.diagnostics={runnable:z,programLog:P,vertexShader:{log:H,prefix:y},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(E),s.deleteShader(w),g=new vr(s,_),M=Qg(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,Hg)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let h0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new d0(t),e.set(t,i)),i}}class d0{constructor(t){this.id=h0++,this.code=t,this.usedTimes=0}}function f0(n){return n===on||n===Tr||n===wr}function p0(n,t,e,i,s,r){const a=new Go,o=new u0,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,M,U,L,N,G){const X=L.fog,P=N.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=t.get(g.envMap||H,Z),et=u[g.type];let W=i.precision;g.precision!==null&&(W=i.getMaxPrecision(g.precision),W!==g.precision&&It("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,tt=j!==void 0?j.length:0;let Tt=0;P.morphAttributes.position!==void 0&&(Tt=1),P.morphAttributes.normal!==void 0&&(Tt=2),P.morphAttributes.color!==void 0&&(Tt=3);let Ft,$,gt,yt;if(et){const mt=xi[et];Ft=mt.vertexShader,$=mt.fragmentShader}else{Ft=g.vertexShader,$=g.fragmentShader;const mt=o.getVertexShaderStage(g),jt=o.getFragmentShaderStage(g);o.update(g,mt,jt),gt=mt.id,yt=jt.id}const Pt=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,ce=N.isBatchedMesh===!0,Dt=!!g.map,Qt=!!g.matcap,te=!!z,Vt=te&&z.isPMREMTexture===!0,Te=!!g.aoMap,fe=!!g.lightMap,Ve=!!g.bumpMap&&g.wireframe===!1,re=!!g.normalMap,pi=!!g.displacementMap,xe=!!g.emissiveMap,Ze=!!g.metalnessMap,Je=!!g.roughnessMap,Qe=g.anisotropy>0,D=g.clearcoat>0,je=g.diffuseRoughness>0,ne=g.dispersion>0,se=g.retroreflectivity>0,dt=g.iridescence>0,pe=g.sheen>0,Lt=g.transmission>0,Nt=Qe&&!!g.anisotropyMap,b=D&&!!g.clearcoatMap,v=D&&!!g.clearcoatNormalMap,O=D&&!!g.clearcoatRoughnessMap,it=je&&!!g.diffuseRoughnessMap,J=dt&&!!g.iridescenceMap,rt=dt&&!!g.iridescenceThicknessMap,ht=pe&&!!g.sheenColorMap,q=pe&&!!g.sheenRoughnessMap,Y=!!g.specularMap,ot=!!g.specularColorMap,A=!!g.specularIntensityMap,K=Lt&&!!g.transmissionMap,V=Lt&&!!g.thicknessMap,lt=!!g.gradientMap,st=!!g.alphaMap,at=g.alphaTest>0,Rt=!!g.alphaHash,Gt=!!g.extensions;let nt=Ni;g.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Ct=Vt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,zt={shaderID:et,shaderType:g.type,shaderName:g.name,vertexShader:Ft,fragmentShader:$,defines:g.defines,customVertexShaderID:gt,customFragmentShaderID:yt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:ce,batchingColor:ce&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:Pt===null?n.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Dt,matcap:Qt,envMap:te,envMapMode:te&&z.mapping,envMapPMREM:Vt,envMapMaxLod:Vt?Ct.length-1:null,envMapSize:Vt?Ct[0].width:null,aoMap:Te,lightMap:fe,bumpMap:Ve,normalMap:re,displacementMap:pi,emissiveMap:xe,normalMapObjectSpace:re&&g.normalMapType===ku,normalMapTangentSpace:re&&g.normalMapType===lo,packedNormalMap:re&&g.normalMapType===lo&&f0(g.normalMap.format),metalnessMap:Ze,roughnessMap:Je,anisotropy:Qe,anisotropyMap:Nt,clearcoat:D,clearcoatMap:b,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:je,diffuseRoughnessMap:it,dispersion:ne,retroreflection:se,iridescence:dt,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:pe,sheenColorMap:ht,sheenRoughnessMap:q,specularMap:Y,specularColorMap:ot,specularIntensityMap:A,transmission:Lt,transmissionMap:K,thicknessMap:V,gradientMap:lt,opaque:g.transparent===!1&&g.blending===ds&&g.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Rt,combine:g.combine,mapUv:Dt&&f(g.map.channel),aoMapUv:Te&&f(g.aoMap.channel),lightMapUv:fe&&f(g.lightMap.channel),bumpMapUv:Ve&&f(g.bumpMap.channel),normalMapUv:re&&f(g.normalMap.channel),displacementMapUv:pi&&f(g.displacementMap.channel),emissiveMapUv:xe&&f(g.emissiveMap.channel),metalnessMapUv:Ze&&f(g.metalnessMap.channel),roughnessMapUv:Je&&f(g.roughnessMap.channel),anisotropyMapUv:Nt&&f(g.anisotropyMap.channel),clearcoatMapUv:b&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(g.sheenRoughnessMap.channel),specularMapUv:Y&&f(g.specularMap.channel),specularColorMapUv:ot&&f(g.specularColorMap.channel),specularIntensityMapUv:A&&f(g.specularIntensityMap.channel),transmissionMapUv:K&&f(g.transmissionMap.channel),thicknessMapUv:V&&f(g.thicknessMap.channel),alphaMapUv:st&&f(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(re||Qe),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Dt||st),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&re===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Tt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:G.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Dt&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===Jt,decodeVideoTextureEmissive:xe&&g.emissiveMap.isVideoTexture===!0&&qt.getTransfer(g.emissiveMap.colorSpace)===Jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Mi,flipSided:g.side===De,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Gt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&g.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function y(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)M.push(U),M.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(m(M,g),p(M,g),M.push(n.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function m(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function p(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const M=u[g.type];let U;if(M){const L=xi[M];U=Hn.clone(L.uniforms)}else U=g.uniforms;return U}function R(g,M){let U=h.get(M);return U!==void 0?++U.usedTimes:(U=new c0(n,M,g,s),c.push(U),h.set(M,U)),U}function E(g){if(--g.usedTimes===0){const M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function m0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function g0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function xc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,y,m,p){let S=n[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=_,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,_,y,m,p,S){S.reversedDepth===!0&&(m=-m);const R=o(u,f,_,y,m,p);_.transmission>0?i.push(R):_.transparent===!0?s.push(R):e.push(R)}function c(u,f,_,y,m,p){const S=o(u,f,_,y,m,p);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||g0),i.length>1&&i.sort(f||xc),s.length>1&&s.sort(f||xc)}function d(){for(let u=t,f=n.length;u<f;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function _0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Mc,n.set(i,[a])):s>=r.length?(a=new Mc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function v0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ft};break;case"SpotLight":e={position:new I,direction:new I,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function x0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let M0=0;function S0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function y0(n){const t=new v0,e=x0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new Kt,a=new Kt;function o(c){let h=0,d=0,u=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,_=0,y=0,m=0,p=0,S=0,R=0,E=0,w=0,T=0,g=0,M=0,U=0,L=0;c.sort(S0);for(let G=0,X=c.length;G<X;G++){const P=c[G],H=P.color,Z=P.intensity,z=P.distance;let et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===on?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*Z,d+=H.g*Z,u+=H.b*Z;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],Z);L++}else if(P.isSunLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=tt,i.sunShadowMap[_]=et;const Tt=j.getViewportCount();for(let Ft=0;Ft<Tt;Ft++)i.sunShadowMatrix[y+Ft]=j.getMatrix(Ft),i.sunShadowCascade[y+Ft]=j._cascadeData[Ft];y+=Tt,_++}i.sun[f]=W,f++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(Z),W.distance=z,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[S]=W;const j=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,j.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[S]=j.matrix,P.castShadow){const tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=et,g++}S++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(H).multiplyScalar(Z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[R]=W,R++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=W,p++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(Z),W.groundColor.copy(P.groundColor).multiplyScalar(Z),i.hemi[E]=W,E++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==R||N.hemiLength!==E||N.numSunShadows!==_||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==M||N.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=m,i.spot.length=S,i.rectArea.length=R,i.point.length=p,i.hemi.length=E,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+M-U,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=L,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=R,N.hemiLength=E,N.numSunShadows=_,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=M,N.numLightProbes=L,i.version=M0++)}function l(c,h){let d=0,u=0,f=0,_=0,y=0,m=0;const p=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){const E=c[S];if(E.isSunLight){const w=i.sun[d];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),d++}else if(E.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(E.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Sc(n){const t=new y0(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function b0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sc(n),t.set(s,[o])):r>=a.length?(o=new Sc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
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
}`,w0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],A0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],yc=new Kt,ss=new I,va=new I;function R0(n,t,e){let i=new xs;const s=new At,r=new At,a=new oe,o=new Id,l=new Nd,c={},h=e.maxTextureSize,d={[Yi]:De,[De]:Yi,[Mi]:Mi},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:E0,fragmentShader:T0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new He;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ee(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let p=this.type;this.render=function(T,g,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===vu&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);const U=n.getRenderTarget(),L=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(an),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=p!==this.type;X&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=T.length;P<H;P++){const Z=T[P],z=Z.shadow;if(z===void 0){It("WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const et=z.getFrameExtents();s.multiply(et),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,z.mapSize.y=r.y));const W=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===cs){if(Z.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ke(s.x,s.y,{format:on,type:Ge,minFilter:Be,magFilter:Be,generateMipmaps:!1}),z.map.texture.name=Z.name+".shadowMap",z.map.depthTexture=new Gn(s.x,s.y,ui),z.map.depthTexture.name=Z.name+".shadowMapDepth",z.map.depthTexture.format=$i,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=le,z.map.depthTexture.magFilter=le}else Z.isPointLight?(z.map=new Zo(s.x),z.map.depthTexture=new oh(s.x,yi)):(z.map=new ke(s.x,s.y),z.map.depthTexture=new Gn(s.x,s.y,yi)),z.map.depthTexture.name=Z.name+".shadowMap",z.map.depthTexture.format=$i,this.type===us?(z.map.depthTexture.compareFunction=W?Yc:qc,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=le,z.map.depthTexture.magFilter=le);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Z.isPointLight!==!0&&z.updateMatrices(Z,M);const tt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let Tt=0;Tt<j;Tt++){const Ft=z.getCamera(Tt);if(Z.isPointLight){const $=z.camera,gt=z.matrix,yt=Z.distance||$.far;yt!==$.far&&($.far=yt,$.updateProjectionMatrix()),ss.setFromMatrixPosition(Z.matrixWorld),$.position.copy(ss),va.copy($.position),va.add(w0[Tt]),$.up.copy(A0[Tt]),$.lookAt(va),$.updateMatrixWorld(),gt.makeTranslation(-ss.x,-ss.y,-ss.z),yc.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(yc,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,Tt),n.clear();else{Tt===0&&(n.setRenderTarget(z.map),n.clear());const $=z.getViewport(Tt);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),G.viewport(a)}i=z.getFrustum(Tt),E(g,M,Ft,Z,tt,this.type)}z.isPointLightShadow!==!0&&this.type===cs&&S(z,M),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(U,L,N)};function S(T,g){const M=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ke(s.x,s.y,{format:on,type:Ge}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(g,null,M,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(g,null,M,f,y,null)}function R(T,g,M,U){let L=null;const N=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)L=N;else if(L=M.isPointLight===!0?l:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=L.uuid,X=g.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let H=P[X];H===void 0&&(H=L.clone(),P[X]=H,g.addEventListener("dispose",w)),L=H}if(L.visible=g.visible,L.wireframe=g.wireframe,U===cs?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:d[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=n.properties.get(L);G.light=M}return L}function E(T,g,M,U,L,N){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===cs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const P=t.update(T),H=T.material;if(Array.isArray(H)){const Z=P.groups;for(let z=0,et=Z.length;z<et;z++){const W=Z[z],j=H[W.materialIndex];if(j&&j.visible){const tt=R(T,j,U,N);T.onBeforeShadow(n,T,g,M,P,tt,W),n.renderBufferDirect(M,null,P,tt,T,W),T.onAfterShadow(n,T,g,M,P,tt,W)}}}else if(H.visible){const Z=R(T,H,U,N);T.onBeforeShadow(n,T,g,M,P,Z,null),n.renderBufferDirect(M,null,P,Z,T,null),T.onAfterShadow(n,T,g,M,P,Z,null)}}const X=T.children;for(let P=0,H=X.length;P<H;P++)E(X[P],g,M,U,L,N)}function w(T){T.target.removeEventListener("dispose",w);for(const M in c){const U=c[M],L=T.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function C0(n,t){function e(){let A=!1;const K=new oe;let V=null;const lt=new oe(0,0,0,0);return{setMask:function(st){V!==st&&!A&&(n.colorMask(st,st,st,st),V=st)},setLocked:function(st){A=st},setClear:function(st,at,Rt,Gt,nt){nt===!0&&(st*=Gt,at*=Gt,Rt*=Gt),K.set(st,at,Rt,Gt),lt.equals(K)===!1&&(n.clearColor(st,at,Rt,Gt),lt.copy(K))},reset:function(){A=!1,V=null,lt.set(-1,0,0,0)}}}function i(){let A=!1,K=!1,V=null,lt=null,st=null;return{setReversed:function(at){if(K!==at){const Rt=t.get("EXT_clip_control");at?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),K=at;const Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return K},setTest:function(at){at?_t(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(at){V!==at&&!A&&(n.depthMask(at),V=at)},setFunc:function(at){if(K&&(at=Ju[at]),lt!==at){switch(at){case Ea:n.depthFunc(n.NEVER);break;case Ta:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case Aa:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case Ca:n.depthFunc(n.GREATER);break;case Pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=at}},setLocked:function(at){A=at},setClear:function(at){st!==at&&(st=at,K&&(at=1-at),n.clearDepth(at))},reset:function(){A=!1,V=null,lt=null,st=null,K=!1}}}function s(){let A=!1,K=null,V=null,lt=null,st=null,at=null,Rt=null,Gt=null,nt=null;return{setTest:function(Ct){A||(Ct?_t(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(Ct){K!==Ct&&!A&&(n.stencilMask(Ct),K=Ct)},setFunc:function(Ct,zt,mt){(V!==Ct||lt!==zt||st!==mt)&&(n.stencilFunc(Ct,zt,mt),V=Ct,lt=zt,st=mt)},setOp:function(Ct,zt,mt){(at!==Ct||Rt!==zt||Gt!==mt)&&(n.stencilOp(Ct,zt,mt),at=Ct,Rt=zt,Gt=mt)},setLocked:function(Ct){A=Ct},setClear:function(Ct){nt!==Ct&&(n.clearStencil(Ct),nt=Ct)},reset:function(){A=!1,K=null,V=null,lt=null,st=null,at=null,Rt=null,Gt=null,nt=null}}}const r=new e,a=new i,o=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],y=null,m=!1,p=null,S=null,R=null,E=null,w=null,T=null,g=null,M=new ft(0,0,0),U=0,L=!1,N=null,G=null,X=null,P=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,et=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=et>=2);let j=null,tt={};const Tt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),$=new oe().fromArray(Tt),gt=new oe().fromArray(Ft);function yt(A,K,V,lt){const st=new Uint8Array(4),at=n.createTexture();n.bindTexture(A,at),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<V;Rt++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(K+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return at}const Pt={};Pt[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),a.setFunc(fs),Ve(!1),re(gl),_t(n.CULL_FACE),Te(an);function _t(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function Bt(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function ce(A,K){return u[A]!==K?(n.bindFramebuffer(A,K),u[A]=K,A===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),A===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function Dt(A,K){let V=_,lt=!1;if(A){V=f.get(K),V===void 0&&(V=[],f.set(K,V));const st=A.textures;if(V.length!==st.length||V[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Rt=st.length;at<Rt;at++)V[at]=n.COLOR_ATTACHMENT0+at;V.length=st.length,lt=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,lt=!0);lt&&n.drawBuffers(V)}function Qt(A){return y!==A?(n.useProgram(A),y=A,!0):!1}const te={[In]:n.FUNC_ADD,[Mu]:n.FUNC_SUBTRACT,[Su]:n.FUNC_REVERSE_SUBTRACT};te[yu]=n.MIN,te[bu]=n.MAX;const Vt={[Eu]:n.ZERO,[Tu]:n.ONE,[wu]:n.SRC_COLOR,[Fc]:n.SRC_ALPHA,[Du]:n.SRC_ALPHA_SATURATE,[Pu]:n.DST_COLOR,[Ru]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[Lu]:n.ONE_MINUS_DST_COLOR,[Cu]:n.ONE_MINUS_DST_ALPHA,[Iu]:n.CONSTANT_COLOR,[Nu]:n.ONE_MINUS_CONSTANT_COLOR,[Uu]:n.CONSTANT_ALPHA,[Fu]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(A,K,V,lt,st,at,Rt,Gt,nt,Ct){if(A===an){m===!0&&(Bt(n.BLEND),m=!1);return}if(m===!1&&(_t(n.BLEND),m=!0),A!==xu){if(A!==p||Ct!==L){if((S!==In||w!==In)&&(n.blendEquation(n.FUNC_ADD),S=In,w=In),Ct)switch(A){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ba:n.blendFunc(n.ONE,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$t("WebGLState: Invalid blending: ",A);break}else switch(A){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _l:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",A);break}R=null,E=null,T=null,g=null,M.set(0,0,0),U=0,p=A,L=Ct}return}st=st||K,at=at||V,Rt=Rt||lt,(K!==S||st!==w)&&(n.blendEquationSeparate(te[K],te[st]),S=K,w=st),(V!==R||lt!==E||at!==T||Rt!==g)&&(n.blendFuncSeparate(Vt[V],Vt[lt],Vt[at],Vt[Rt]),R=V,E=lt,T=at,g=Rt),(Gt.equals(M)===!1||nt!==U)&&(n.blendColor(Gt.r,Gt.g,Gt.b,nt),M.copy(Gt),U=nt),p=A,L=!1}function fe(A,K){A.side===Mi?Bt(n.CULL_FACE):_t(n.CULL_FACE);let V=A.side===De;K&&(V=!V),Ve(V),A.blending===ds&&A.transparent===!1?Te(an):Te(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);const lt=A.stencilWrite;o.setTest(lt),lt&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),xe(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(A){N!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),N=A)}function re(A){A!==gu?(_t(n.CULL_FACE),A!==G&&(A===gl?n.cullFace(n.BACK):A===_u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),G=A}function pi(A){A!==X&&(z&&n.lineWidth(A),X=A)}function xe(A,K,V){A?(_t(n.POLYGON_OFFSET_FILL),(P!==K||H!==V)&&(P=K,H=V,a.getReversed()&&(K=-K,V=-V),n.polygonOffset(K,V))):Bt(n.POLYGON_OFFSET_FILL)}function Ze(A){A?_t(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function Je(A){A===void 0&&(A=n.TEXTURE0+Z-1),j!==A&&(n.activeTexture(A),j=A)}function Qe(A,K,V){V===void 0&&(j===null?V=n.TEXTURE0+Z-1:V=j);let lt=tt[V];lt===void 0&&(lt={type:void 0,texture:void 0},tt[V]=lt),(lt.type!==A||lt.texture!==K)&&(j!==V&&(n.activeTexture(V),j=V),n.bindTexture(A,K||Pt[A]),lt.type=A,lt.texture=K)}function D(){const A=tt[j];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(A){$t("WebGLState:",A)}}function ne(){try{n.compressedTexImage3D(...arguments)}catch(A){$t("WebGLState:",A)}}function se(){try{n.texSubImage2D(...arguments)}catch(A){$t("WebGLState:",A)}}function dt(){try{n.texSubImage3D(...arguments)}catch(A){$t("WebGLState:",A)}}function pe(){try{n.compressedTexSubImage2D(...arguments)}catch(A){$t("WebGLState:",A)}}function Lt(){try{n.compressedTexSubImage3D(...arguments)}catch(A){$t("WebGLState:",A)}}function Nt(){try{n.texStorage2D(...arguments)}catch(A){$t("WebGLState:",A)}}function b(){try{n.texStorage3D(...arguments)}catch(A){$t("WebGLState:",A)}}function v(){try{n.texImage2D(...arguments)}catch(A){$t("WebGLState:",A)}}function O(){try{n.texImage3D(...arguments)}catch(A){$t("WebGLState:",A)}}function it(A){return d[A]!==void 0?d[A]:n.getParameter(A)}function J(A,K){d[A]!==K&&(n.pixelStorei(A,K),d[A]=K)}function rt(A){$.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),$.copy(A))}function ht(A){gt.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),gt.copy(A))}function q(A,K){let V=c.get(K);V===void 0&&(V=new WeakMap,c.set(K,V));let lt=V.get(A);lt===void 0&&(lt=n.getUniformBlockIndex(K,A.name),n.uniformBlockBinding(K,lt,lt),V.set(A,lt))}function Y(A,K,V){const st=c.get(K).get(A);l[st]!==V&&(n.bindBufferBase(n.UNIFORM_BUFFER,st,V),l[st]=V)}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,tt={},u={},l={},f=new WeakMap,_=[],y=null,m=!1,p=null,S=null,R=null,E=null,w=null,T=null,g=null,M=new ft(0,0,0),U=0,L=!1,N=null,G=null,X=null,P=null,H=null,$.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Bt,bindFramebuffer:ce,drawBuffers:Dt,useProgram:Qt,setBlending:Te,setMaterial:fe,setFlipSided:Ve,setCullFace:re,setLineWidth:pi,setPolygonOffset:xe,setScissorTest:Ze,activeTexture:Je,bindTexture:Qe,unbindTexture:D,compressedTexImage2D:je,compressedTexImage3D:ne,texImage2D:v,texImage3D:O,pixelStorei:J,getParameter:it,updateUBOMapping:q,uniformBlockBinding:Y,texStorage2D:Nt,texStorage3D:b,texSubImage2D:se,texSubImage3D:dt,compressedTexSubImage2D:pe,compressedTexSubImage3D:Lt,scissor:rt,viewport:ht,reset:ot}}function P0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d=new Set;let u;const f=new WeakMap,_=new Set,y=new FinalizationRegistry(b=>_.delete(b));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(b,v){return m?new OffscreenCanvas(b,v):vs("canvas")}function S(b,v,O){let it=1;const J=Nt(b);if((J.width>O||J.height>O)&&(it=O/Math.max(J.width,J.height)),it<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const rt=Math.floor(it*J.width),ht=Math.floor(it*J.height);u===void 0&&(u=p(rt,ht));const q=v?p(rt,ht):u;return q.width=rt,q.height=ht,q.getContext("2d").drawImage(b,0,0,rt,ht),It("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+rt+"x"+ht+")."),q}else return"data"in b&&It("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function R(b){return b.generateMipmaps}function E(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,O,it,J,rt=!1){if(b!==null){if(n[b]!==void 0)return n[b];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ht;it&&(ht=t.get("EXT_texture_norm16"),ht||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8),O===n.UNSIGNED_SHORT&&ht&&(q=ht.R16_EXT),O===n.SHORT&&ht&&(q=ht.R16_SNORM_EXT)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),v===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8),O===n.UNSIGNED_SHORT&&ht&&(q=ht.RG16_EXT),O===n.SHORT&&ht&&(q=ht.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_SHORT&&ht&&(q=ht.RGB16_EXT),O===n.SHORT&&ht&&(q=ht.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const Y=rt?Rr:qt.getTransfer(J);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Y===Jt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&ht&&(q=ht.RGBA16_EXT),O===n.SHORT&&ht&&(q=ht.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function g(b,v){let O;return b?v===null||v===yi||v===zn?O=n.DEPTH24_STENCIL8:v===ui?O=n.DEPTH32F_STENCIL8:v===gs&&(O=n.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yi||v===zn?O=n.DEPTH_COMPONENT24:v===ui?O=n.DEPTH_COMPONENT32F:v===gs&&(O=n.DEPTH_COMPONENT16),O}function M(b,v){return R(b)===!0||b.isFramebufferTexture&&b.minFilter!==le&&b.minFilter!==Be?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function U(b){const v=new WeakRef(b);i.get(b).__ref=v,_.add(v),y.register(b,v,v)}function L(b){const v=i.get(b).__ref;v!==void 0&&(_.delete(v),y.unregister(v))}function N(b){X(b.target)}function G(b){P(b.target)}function X(b){b.removeEventListener("dispose",N),L(b),Z(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function P(b){b.removeEventListener("dispose",G),L(b),et(b)}function H(){for(const b of _){const v=b.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):X(v))}_.clear(),d.clear()}function Z(b){const v=i.get(b);if(v.__webglInit===void 0)return;const O=b.source,it=f.get(O);if(it){const J=it[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(b),Object.keys(it).length===0&&f.delete(O)}i.remove(b)}function z(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const O=b.source,it=f.get(O);delete it[v.__cacheKey],a.memory.textures--}function et(b){const v=i.get(b);v.__depthDisposeCallback&&v.__depthDisposeCallback();const O=b.depthTexture;if(O&&O.renderTarget===b&&X(O),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let rt=0;rt<v.__webglFramebuffer[J].length;rt++)n.deleteFramebuffer(v.__webglFramebuffer[J][rt]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const it=b.textures;for(let J=0,rt=it.length;J<rt;J++){const ht=i.get(it[J]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(it[J])}i.remove(b)}let W=0;function j(){W=0}function tt(){return W}function Tt(b){W=b}function Ft(){const b=W;return b>=s.maxTextures&&It("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,b}function $(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.mipmapsAutoUpdate),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function gt(b,v){const O=i.get(b);if(b.isVideoTexture&&pe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const it=b.image;if(it===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function yt(b,v){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){fe(O,b,v);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Pt(b,v){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){fe(O,b,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function _t(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Ve(O,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const Bt={[ms]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},ce={[le]:n.NEAREST,[zu]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[Be]:n.LINEAR,[kr]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Dt={[Vu]:n.NEVER,[$c]:n.ALWAYS,[Wu]:n.LESS,[qc]:n.LEQUAL,[Xu]:n.EQUAL,[Yc]:n.GEQUAL,[qu]:n.GREATER,[Yu]:n.NOTEQUAL};function Qt(b,v){if(v.type===ui&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Be||v.magFilter===kr||v.magFilter===Ps||v.magFilter===Ii||v.minFilter===Be||v.minFilter===kr||v.minFilter===Ps||v.minFilter===Ii)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Bt[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Bt[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Bt[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ce[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===le||v.minFilter!==Ps&&v.minFilter!==Ii||v.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",N),U(v));const it=v.source;let J=f.get(it);J===void 0&&(J={},f.set(it,J));const rt=$(v);if(rt!==b.__cacheKey){J[rt]===void 0&&(J[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[rt].usedTimes++;const ht=J[b.__cacheKey];ht!==void 0&&(J[b.__cacheKey].usedTimes--,ht.usedTimes===0&&z(v)),b.__cacheKey=rt,b.__webglTexture=J[rt].texture}return O}function Vt(b,v,O){return Math.floor(Math.floor(b/O)/v)}function Te(b,v,O,it){const rt=b.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,it,v.data);else{rt.sort((A,K)=>A.start-K.start);let ht=0;for(let A=1;A<rt.length;A++){const K=rt[ht],V=rt[A],lt=K.start+K.count,st=Vt(V.start,v.width,4),at=Vt(K.start,v.width,4);V.start<=lt+1&&st===at&&Vt(V.start+V.count-1,v.width,4)===st?K.count=Math.max(K.count,V.start+V.count-K.start):(++ht,rt[ht]=V)}rt.length=ht+1;const q=e.getParameter(n.UNPACK_ROW_LENGTH),Y=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let A=0,K=rt.length;A<K;A++){const V=rt[A],lt=Math.floor(V.start/4),st=Math.ceil(V.count/4),at=lt%v.width,Rt=Math.floor(lt/v.width),Gt=st,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(n.TEXTURE_2D,0,at,Rt,Gt,nt,O,it,v.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function fe(b,v,O){let it=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=n.TEXTURE_3D);const J=te(b,v),rt=v.source;e.bindTexture(it,b.__webglTexture,n.TEXTURE0+O);const ht=i.get(rt);if(rt.version!==ht.__version||J===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const nt=qt.getPrimaries(qt.workingColorSpace),Ct=v.colorSpace===Wi?null:qt.getPrimaries(v.colorSpace),zt=v.colorSpace===Wi||nt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Y=S(v.image,!1,s.maxTextureSize);Y=Lt(v,Y);const ot=r.convert(v.format,v.colorSpace),A=r.convert(v.type);let K=T(v.internalFormat,ot,A,v.normalized,v.colorSpace,v.isVideoTexture);Qt(it,v);let V;const lt=v.mipmaps,st=v.isVideoTexture!==!0,at=ht.__version===void 0||J===!0,Rt=rt.dataReady,Gt=M(v,Y);if(v.isDepthTexture)K=g(v.format===Xi,v.type),at&&(st?e.texStorage2D(n.TEXTURE_2D,1,K,Y.width,Y.height):e.texImage2D(n.TEXTURE_2D,0,K,Y.width,Y.height,0,ot,A,null));else if(v.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(n.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let nt=0,Ct=lt.length;nt<Ct;nt++)V=lt[nt],st?Rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,V.width,V.height,ot,A,V.data):e.texImage2D(n.TEXTURE_2D,nt,K,V.width,V.height,0,ot,A,V.data);v.generateMipmaps=!1}else st?(at&&e.texStorage2D(n.TEXTURE_2D,Gt,K,Y.width,Y.height),Rt&&Te(v,Y,ot,A)):e.texImage2D(n.TEXTURE_2D,0,K,Y.width,Y.height,0,ot,A,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){st&&at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,K,lt[0].width,lt[0].height,Y.depth);for(let nt=0,Ct=lt.length;nt<Ct;nt++)if(V=lt[nt],v.format!==di)if(ot!==null)if(st){if(Rt)if(v.layerUpdates.size>0){const zt=ec(V.width,V.height,v.format,v.type);for(const mt of v.layerUpdates){const jt=V.data.subarray(mt*zt/V.data.BYTES_PER_ELEMENT,(mt+1)*zt/V.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,mt,V.width,V.height,1,ot,jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,V.width,V.height,Y.depth,ot,V.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,K,V.width,V.height,Y.depth,0,V.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,V.width,V.height,Y.depth,ot,A,V.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,K,V.width,V.height,Y.depth,0,ot,A,V.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{st&&at&&e.texStorage2D(n.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let nt=0,Ct=lt.length;nt<Ct;nt++)V=lt[nt],v.format!==di?ot!==null?st?Rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,V.width,V.height,ot,V.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,K,V.width,V.height,0,V.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,V.width,V.height,ot,A,V.data):e.texImage2D(n.TEXTURE_2D,nt,K,V.width,V.height,0,ot,A,V.data)}else if(v.isDataArrayTexture)if(st){if(at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,K,Y.width,Y.height,Y.depth),Rt)if(v.layerUpdates.size>0){const nt=ec(Y.width,Y.height,v.format,v.type);for(const Ct of v.layerUpdates){const zt=Y.data.subarray(Ct*nt/Y.data.BYTES_PER_ELEMENT,(Ct+1)*nt/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,Y.width,Y.height,1,ot,A,zt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ot,A,Y.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,Y.width,Y.height,Y.depth,0,ot,A,Y.data);else if(v.isData3DTexture)st?(at&&e.texStorage3D(n.TEXTURE_3D,Gt,K,Y.width,Y.height,Y.depth),Rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ot,A,Y.data)):e.texImage3D(n.TEXTURE_3D,0,K,Y.width,Y.height,Y.depth,0,ot,A,Y.data);else if(v.isFramebufferTexture){if(at)if(st)e.texStorage2D(n.TEXTURE_2D,Gt,K,Y.width,Y.height);else{let nt=Y.width,Ct=Y.height;for(let zt=0;zt<Gt;zt++)e.texImage2D(n.TEXTURE_2D,zt,K,nt,Ct,0,ot,A,null),nt>>=1,Ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Y.parentNode!==nt){nt.appendChild(Y),d.add(v),nt.onpaint=Ct=>{const zt=Ct.changedElements;for(const mt of d)zt.includes(mt.image)&&(mt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Y);else{const zt=n.RGBA,mt=n.RGBA,jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,zt,mt,jt,Y)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){const nt=Nt(lt[0]);e.texStorage2D(n.TEXTURE_2D,Gt,K,nt.width,nt.height)}for(let nt=0,Ct=lt.length;nt<Ct;nt++)V=lt[nt],st?Rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ot,A,V):e.texImage2D(n.TEXTURE_2D,nt,K,ot,A,V);v.generateMipmaps=!1}else if(st){if(at){const nt=Nt(Y);e.texStorage2D(n.TEXTURE_2D,Gt,K,nt.width,nt.height)}Rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,A,Y)}else e.texImage2D(n.TEXTURE_2D,0,K,ot,A,Y);R(v)&&v.mipmapsAutoUpdate===!0&&E(it),ht.__version=rt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ve(b,v,O){if(v.image.length!==6)return;const it=te(b,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const rt=i.get(J);if(J.version!==rt.__version||it===!0){e.activeTexture(n.TEXTURE0+O);const ht=qt.getPrimaries(qt.workingColorSpace),q=v.colorSpace===Wi?null:qt.getPrimaries(v.colorSpace),Y=v.colorSpace===Wi||ht===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ot=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,K=[];for(let mt=0;mt<6;mt++)!ot&&!A?K[mt]=S(v.image[mt],!0,s.maxCubemapSize):K[mt]=A?v.image[mt].image:v.image[mt],K[mt]=Lt(v,K[mt]);const V=K[0],lt=r.convert(v.format,v.colorSpace),st=r.convert(v.type);let at=T(v.internalFormat,lt,st,v.normalized,v.colorSpace);const Rt=v.isVideoTexture!==!0,Gt=rt.__version===void 0||it===!0,nt=J.dataReady;let Ct=M(v,V);Qt(n.TEXTURE_CUBE_MAP,v);let zt;if(v.isDepthTexture){if(at=g(v.format===Xi,v.type),Gt)if(Rt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,at,V.width,V.height);else for(let mt=0;mt<6;mt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,V.width,V.height,0,lt,st,null)}else if(ot){Rt&&Gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,at,V.width,V.height);for(let mt=0;mt<6;mt++){zt=K[mt].mipmaps;for(let jt=0;jt<zt.length;jt++){const Me=zt[jt];v.format!==di?lt!==null?Rt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,Me.width,Me.height,lt,Me.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,at,Me.width,Me.height,0,Me.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,Me.width,Me.height,lt,st,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,at,Me.width,Me.height,0,lt,st,Me.data)}}}else{if(zt=v.mipmaps,Rt&&Gt){zt.length>0&&Ct++;const mt=Nt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,at,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(A){Rt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,K[mt].width,K[mt].height,lt,st,K[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,K[mt].width,K[mt].height,0,lt,st,K[mt].data);for(let jt=0;jt<zt.length;jt++){const Fi=zt[jt].image[mt].image;Rt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,Fi.width,Fi.height,lt,st,Fi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,at,Fi.width,Fi.height,0,lt,st,Fi.data)}}else{Rt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,lt,st,K[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,lt,st,K[mt]);for(let jt=0;jt<zt.length;jt++){const Me=zt[jt];Rt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,lt,st,Me.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,at,lt,st,Me.image[mt])}}}R(v)&&v.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),rt.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function re(b,v,O,it,J,rt){const ht=r.convert(O.format,O.colorSpace),q=r.convert(O.type),Y=T(O.internalFormat,ht,q,O.normalized,O.colorSpace),ot=i.get(v),A=i.get(O);if(A.__renderTarget=v,!ot.__hasExternalTextures){const K=Math.max(1,v.width>>rt),V=Math.max(1,v.height>>rt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,rt,Y,K,V,v.depth,0,ht,q,null):e.texImage2D(J,rt,Y,K,V,0,ht,q,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,J,A.__webglTexture,0,se(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,J,A.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pi(b,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const it=v.depthTexture,J=it&&it.isDepthTexture?it.type:null,rt=g(v.stencilBuffer,J),ht=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;dt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se(v),rt,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,se(v),rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,rt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,b)}else{const it=v.textures;for(let J=0;J<it.length;J++){const rt=it[J],ht=r.convert(rt.format,rt.colorSpace),q=r.convert(rt.type),Y=T(rt.internalFormat,ht,q,rt.normalized,rt.colorSpace);dt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se(v),Y,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,se(v),Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(b,v,O){const it=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(v.depthTexture);J.__renderTarget=v;const rt=it?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||rt.width!==v.width||rt.height!==v.height)&&(rt.width=v.width,rt.height=v.height,v.depthTexture.needsUpdate=!0),it?_t(v.depthTexture,0):gt(v.depthTexture,0);const ht=J.__webglTexture,q=se(v),Y=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ot=v.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===$i)dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Y,ht,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,ot,Y,ht,0);else if(v.depthTexture.format===Xi)dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Y,ht,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,ot,Y,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(b){const v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const it=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",J)};it.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=it}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let it=0;it<6;it++)xe(v.__webglFramebuffer[it],b,it);else b.texture.mipmaps.length>0?xe(v.__webglFramebuffer[0],b,0):xe(v.__webglFramebuffer,b,0);else if(O){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=n.createRenderbuffer(),pi(v.__webglDepthbuffer[it],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}}else if(b.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),pi(v.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(b,v,O){const it=i.get(b);v!==void 0&&re(it.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ze(b)}function Qe(b){const v=b.texture,O=i.get(b),it=i.get(v);b.addEventListener("dispose",G),U(b);const J=b.textures,rt=b.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=v.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let Y=0;Y<v.mipmaps.length;Y++)O.__webglFramebuffer[q][Y]=n.createFramebuffer()}else O.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)O.__webglFramebuffer[q]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ht)for(let q=0,Y=J.length;q<Y;q++){const ot=i.get(J[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&dt(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const Y=J[q];O.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[q]);const ot=r.convert(Y.format,Y.colorSpace),A=r.convert(Y.type),K=T(Y.internalFormat,ot,A,Y.normalized,Y.colorSpace,b.isXRRenderTarget===!0),V=se(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,V,K,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,O.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),pi(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)re(O.__webglFramebuffer[q][Y],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Y);else re(O.__webglFramebuffer[q],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);R(v)?E(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let q=0,Y=J.length;q<Y;q++){const ot=J[q],A=i.get(ot);let K=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,A.__webglTexture),Qt(K,ot),re(O.__webglFramebuffer,b,ot,n.COLOR_ATTACHMENT0+q,K,0),R(ot)&&E(K)}e.unbindTexture()}else{let q=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(q,it.__webglTexture),Qt(q,v),v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)re(O.__webglFramebuffer[Y],b,v,n.COLOR_ATTACHMENT0,q,Y);else re(O.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,q,0);R(v)?E(q):v.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}b.depthBuffer&&Ze(b)}function D(b){const v=b.textures;for(let O=0,it=v.length;O<it;O++){const J=v[O];if(R(J)&&J.mipmapsAutoUpdate===!0){const rt=w(b),ht=i.get(J).__webglTexture;e.bindTexture(rt,ht),E(rt),e.unbindTexture()}}}const je=[];function ne(b){if(b.samples>0){if(dt(b)===!1){const v=b.textures,O=b.width,it=b.height;let J=n.COLOR_BUFFER_BIT;const rt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(b),q=v.length>1;if(q)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);const A=i.get(v[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,A,0)}n.blitFramebuffer(0,0,O,it,0,0,O,it,J,n.NEAREST),l===!0&&(je.length=0,je.push(n.COLOR_ATTACHMENT0+ot),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&je.push(rt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,je))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);const A=i.get(v[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,A,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function se(b){return Math.min(s.maxSamples,b.samples)}function dt(b){const v=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pe(b){const v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Lt(b,v){const O=b.colorSpace,it=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ar&&O!==Wi&&(qt.getTransfer(O)===Jt?(it!==di||J!==Ye)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",O)),v}function Nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=Tt,this.setTexture2D=gt,this.setTexture2DArray=yt,this.setTexture3D=Pt,this.setTextureCube=_t,this.rebindTextures=Je,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=re,this.useMultisampledRTT=dt,this.dispose=H}function L0(n,t){function e(i,s=Wi){let r;const a=qt.getTransfer(s);if(i===Ye)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===No)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return n.BYTE;if(i===kc)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===Ge)return n.HALF_FLOAT;if(i===Wc)return n.ALPHA;if(i===Xc)return n.RGB;if(i===di)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Uo)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===on)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===Bo)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Da||i===Ia||i===Na||i===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===Oa||i===Ba||i===za||i===Ga||i===Tr||i===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fa||i===Oa)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===za)return r.COMPRESSED_R11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Tr)return r.COMPRESSED_RG11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ha||i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ka||i===Za||i===Ja||i===Qa||i===ja||i===to||i===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===to)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===no||i===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===io)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ro||i===ao||i===wr||i===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I0=`
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

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new lh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ze({vertexShader:D0,fragmentShader:I0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends cn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const y=typeof XRWebGLBinding<"u",m=new N0,p={},S=e.getContextAttributes();let R=null,E=null;const w=[],T=[],g=new At;let M=null,U=null;const L=new ci;L.viewport=new oe;const N=new ci;N.viewport=new oe;const G=[L,N],X=new Vd;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=w[$];return gt===void 0&&(gt=new Zr,w[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=w[$];return gt===void 0&&(gt=new Zr,w[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=w[$];return gt===void 0&&(gt=new Zr,w[$]=gt),gt.getHandSpace()};function Z($){const gt=T.indexOf($.inputSource);if(gt===-1)return;const yt=w[gt];yt!==void 0&&(yt.update($.inputSource,$.frame,c||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",et);for(let $=0;$<w.length;$++){const gt=T[$];gt!==null&&(T[$]=null,w[$].disconnect(gt))}P=null,H=null,m.reset();for(const $ in p)delete p[$];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,E=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(g.width,g.height,!1),U!==null){const $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",z),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?Xi:$i,Pt=S.stencil?zn:yi);const Bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ke(u.textureWidth,u.textureHeight,{format:di,type:Ye,depthTexture:new Gn(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ke(f.framebufferWidth,f.framebufferHeight,{format:di,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et($){for(let gt=0;gt<$.removed.length;gt++){const yt=$.removed[gt],Pt=T.indexOf(yt);Pt>=0&&(T[Pt]=null,w[Pt].disconnect(yt))}for(let gt=0;gt<$.added.length;gt++){const yt=$.added[gt];let Pt=T.indexOf(yt);if(Pt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=T.length){T.push(yt),Pt=Bt;break}else if(T[Bt]===null){T[Bt]=yt,Pt=Bt;break}if(Pt===-1)break}const _t=w[Pt];_t&&_t.connect(yt)}}function W($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let gt=$.near,yt=$.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),X.near=N.near=L.near=gt,X.far=N.far=L.far=yt,(P!==X.near||H!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,H=X.far),X.layers.mask=$.layers.mask|6,L.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;const Pt=$.parent,_t=X.cameras;W(X,Pt);for(let Bt=0;Bt<_t.length;Bt++)W(_t[Bt],Pt);X.projectionMatrix.copy(L.projectionMatrix),X.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),j($,X,Pt)};function j($,gt,yt){yt===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=co*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function($){return p[$]};let tt=null;function Tt($,gt){if(h=gt.getViewerPose(c||a),_=gt,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Pt=!1;yt.length!==X.cameras.length&&(X.cameras.length=0,Pt=!0);for(let Dt=0;Dt<yt.length;Dt++){const Qt=yt[Dt];let te=null;if(f!==null)te=f.getViewport(Qt);else{const Te=d.getViewSubImage(u,Qt);te=Te.viewport,Dt===0&&(t.setRenderTargetTextures(E,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(E))}let Vt=G[Dt];Vt===void 0&&(Vt=new ci,Vt.layers.enable(Dt),Vt.viewport=new oe,G[Dt]=Vt),Vt.matrix.fromArray(Qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(te.x,te.y,te.width,te.height),Dt===0&&(X.matrix.copy(Vt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Pt===!0&&X.cameras.push(Vt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Dt=d.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&m.init(Dt,s.renderState)}if(_t&&_t.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Dt=0;Dt<yt.length;Dt++){const Qt=yt[Dt].camera;if(Qt){let te=p[Qt];te||(te=new lh,p[Qt]=te);const Vt=d.getCameraImage(Qt);te.sourceTexture=Vt}}}}for(let yt=0;yt<w.length;yt++){const Pt=T[yt],_t=w[yt];Pt!==null&&_t!==void 0&&_t.update(Pt,gt,c||a)}tt&&tt($,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),_=null}const Ft=new dh;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}}const F0=new Kt,yh=new Ut;yh.set(-1,0,0,0,1,0,0,0,1);function O0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ch(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,R,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),R=S.envMap,E=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B0(n,t,e,i){let s={},r={};function a(S,R){const E=R.program;i.uniformBlockBinding(S,E,s[S.id])}function o(S,R){let E=s[S.id];E===void 0&&(_(S),E=l(S),s[S.id]=E,S.addEventListener("dispose",m));const w=R.program;i.updateUBOMapping(S,w);const T=t.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){const R=n.createBuffer(),E=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function c(S){const R=s[S.id],E=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let T=0,g=E.length;T<g;T++){const M=E[T];if(Array.isArray(M))for(let U=0,L=M.length;U<L;U++)h(M[U],T,U,w);else h(M,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,R,E,w){if(u(S,R,E,w)===!0){const T=S.__offset,g=S.value;if(Array.isArray(g)){let M=0;for(let U=0;U<g.length;U++){const L=g[U],N=y(L,!0);d(L,S.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,S.__data)}}function d(S,R,E){typeof S=="number"||typeof S=="boolean"?R[E]=S:S.isMatrix3?(R[E]=S.elements[0],R[E+1]=S.elements[1],R[E+2]=S.elements[2],R[E+3]=0,R[E+4]=S.elements[3],R[E+5]=S.elements[4],R[E+6]=S.elements[5],R[E+7]=0,R[E+8]=S.elements[6],R[E+9]=S.elements[7],R[E+10]=S.elements[8],R[E+11]=0):ArrayBuffer.isView(S)?R.set(S.subarray(0,R.length-E),E):S.toArray(R,E)}function u(S,R,E,w){const T=S.value,g=R+"_"+E;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);const M=w[g];let U=!1;for(let L=0;L<T.length;L++)f(T[L],M,L)===!0&&(U=!0);return U}return f(T,w,g)}function f(S,R,E){if(R[E]===void 0)return typeof S=="number"||typeof S=="boolean"?R[E]=S:ArrayBuffer.isView(S)?R[E]=S.slice():R[E]=S.clone(),!0;{const w=R[E];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return R[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function _(S){const R=S.uniforms;let E=0;const w=16;for(let g=0,M=R.length;g<M;g++){const U=Array.isArray(R[g])?R[g]:[R[g]];for(let L=0,N=U.length;L<N;L++){const G=U[L],X=Array.isArray(G.value)?G.value:[G.value],P=Array.isArray(R[g])||Array.isArray(G.value);let H=E;for(let z=0,et=X.length;z<et;z++){const W=X[z],j=y(W,P),tt=E%w,Tt=tt%j.boundary,Ft=tt+Tt;E+=Tt,Ft!==0&&w-Ft<j.storage&&(E+=w-Ft),z===0&&(H=E),E+=j.storage}const Z=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Z((E-H)/Float32Array.BYTES_PER_ELEMENT),G.__offset=H}}const T=E%w;return T>0&&(E+=w-T),S.__size=E,S.__cache={},this}function y(S,R){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):It("WebGLRenderer: Unsupported uniform value type.",S),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(S){const R=S.target;R.removeEventListener("dispose",m),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:p}}const z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function G0(){return gi===null&&(gi=new Vo(z0,16,16,on,Ge),gi.name="DFG_LUT",gi.minFilter=Be,gi.magFilter=Be,gi.wrapS=ii,gi.wrapT=ii,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class k0{constructor(t={}){const{canvas:e=Ku(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ye}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=f,m=new Set([Bo,Oo,Fo]),p=new Set([Ye,yi,gs,zn,Io,No]),S=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const g=[],M=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,G=null,X=null,P=null,H=null;this._outputColorSpace=me;let Z=0,z=0,et=null,W=-1,j=null;const tt=new oe,Tt=new oe;let Ft=null;const $=new ft(0);let gt=0,yt=e.width,Pt=e.height,_t=1,Bt=null,ce=null;const Dt=new oe(0,0,yt,Pt),Qt=new oe(0,0,yt,Pt);let te=!1;const Vt=new xs,Te=new Wo;let fe=!1,Ve=!1;const re=new Kt,pi=new I,xe=new oe,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Qe(){return et===null?_t:1}let D=i;function je(x,C){return e.getContext(x,C)}let ne,se,dt,pe,Lt,Nt,b,v,O,it,J,rt,ht,q,Y,ot,A,K,V,lt,st,at,Rt;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const C="webgl2";if(D=je(C,x),D===null)throw je(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(x){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),$t("WebGLRenderer: "+x.message),x}function Gt(){ne=new Wm(D),ne.init(),st=new L0(D,ne),se=new Im(D,ne,t,st),dt=new C0(D,ne),se.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),X=D.createFramebuffer(),P=D.createFramebuffer(),H=D.createFramebuffer(),pe=new Ym(D),Lt=new m0,Nt=new P0(D,ne,dt,Lt,se,st,pe),b=new Vm(L),v=new $d(D),at=new Lm(D,v),O=new Xm(D,v,pe,at),it=new Km(D,O,v,at,pe),K=new $m(D,se,Nt),Y=new Nm(Lt),J=new p0(L,b,ne,se,at,Y),rt=new O0(L,Lt),ht=new _0,q=new b0(ne),A=new Pm(L,b,dt,it,_,l),ot=new R0(L,it,se),Rt=new B0(D,pe,se,dt),V=new Dm(D,ne,pe),lt=new qm(D,ne,pe),pe.programs=J.programs,L.capabilities=se,L.extensions=ne,L.properties=Lt,L.renderLists=ht,L.shadowMap=ot,L.state=dt,L.info=pe}y!==Ye&&(U=new Jm(y,e.width,e.height,o,s,r));const nt=new U0(L,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(x){x!==void 0&&(_t=x,this.setSize(yt,Pt,!1))},this.getSize=function(x){return x.set(yt,Pt)},this.setSize=function(x,C,k=!0){if(nt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=x,Pt=C,e.width=Math.floor(x*_t),e.height=Math.floor(C*_t),k===!0&&(e.style.width=x+"px",e.style.height=C+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(yt*_t,Pt*_t).floor()},this.setDrawingBufferSize=function(x,C,k){yt=x,Pt=C,_t=k,e.width=Math.floor(x*k),e.height=Math.floor(C*k),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(y===Ye){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(Dt)},this.setViewport=function(x,C,k,F){x.isVector4?Dt.set(x.x,x.y,x.z,x.w):Dt.set(x,C,k,F),dt.viewport(tt.copy(Dt).multiplyScalar(Qe()).round())},this.getScissor=function(x){return x.copy(Qt)},this.setScissor=function(x,C,k,F){x.isVector4?Qt.set(x.x,x.y,x.z,x.w):Qt.set(x,C,k,F),dt.scissor(Tt.copy(Qt).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){dt.setScissorTest(te=x)},this.setOpaqueSort=function(x){Bt=x},this.setTransparentSort=function(x){ce=x},this.getClearColor=function(x){return x.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,k=!0){let F=0;if(x){let B=!1;if(et!==null){const ut=et.texture.format;B=m.has(ut)}if(B){const ut=et.texture.type,St=p.has(ut),ct=A.getClearColor(),vt=A.getClearAlpha(),wt=ct.r,Ot=ct.g,Wt=ct.b;St?(S[0]=wt,S[1]=Ot,S[2]=Wt,S[3]=vt,D.clearBufferuiv(D.COLOR,0,S)):(R[0]=wt,R[1]=Ot,R[2]=Wt,R[3]=vt,D.clearBufferiv(D.COLOR,0,R))}else F|=D.COLOR_BUFFER_BIT}C&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),G=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),A.dispose(),ht.dispose(),q.dispose(),Nt.dispose(),Lt.dispose(),b.dispose(),it.dispose(),O.dispose(),at.dispose(),Rt.dispose(),J.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",rl),nt.removeEventListener("sessionend",al),Zi.stop()};function Ct(x){x.preventDefault(),Cr("WebGLRenderer: Context Lost."),N=!0}function zt(){Cr("WebGLRenderer: Context Restored."),N=!1;const x=pe.autoReset,C=ot.enabled,k=ot.autoUpdate,F=ot.needsUpdate,B=ot.type;Gt(),pe.autoReset=x,ot.enabled=C,ot.autoUpdate=k,ot.needsUpdate=F,ot.type=B}function mt(x){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function jt(x){const C=x.target;C.removeEventListener("dispose",jt),Me(C)}function Me(x){Fi(x),Lt.remove(x)}function Fi(x){const C=Lt.get(x).programs;C!==void 0&&(C.forEach(function(k){J.releaseProgram(k)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,k,F,B,ut){C===null&&(C=Ze);const St=B.isMesh&&B.matrixWorld.determinantAffine()<0,ct=du(x,C,k,F,B);dt.setMaterial(F,St);let vt=k.index,wt=1;if(F.wireframe===!0){if(vt=O.getWireframeAttribute(k),vt===void 0)return;wt=2}const Ot=k.drawRange,Wt=k.attributes.position;let bt=Ot.start*wt,Xt=(Ot.start+Ot.count)*wt;ut!==null&&(bt=Math.max(bt,ut.start*wt),Xt=Math.min(Xt,(ut.start+ut.count)*wt)),vt!==null?(bt=Math.max(bt,0),Xt=Math.min(Xt,vt.count)):Wt!=null&&(bt=Math.max(bt,0),Xt=Math.min(Xt,Wt.count));const he=Xt-bt;if(he<0||he===1/0)return;at.setup(B,F,ct,k,vt);let ie,ee=V;if(vt!==null&&(ie=v.get(vt),ee=lt,ee.setIndex(ie)),B.isMesh)F.wireframe===!0?(dt.setLineWidth(F.wireframeLinewidth*Qe()),ee.setMode(D.LINES)):ee.setMode(D.TRIANGLES);else if(B.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),dt.setLineWidth(Re*Qe()),B.isLineSegments?ee.setMode(D.LINES):B.isLineLoop?ee.setMode(D.LINE_LOOP):ee.setMode(D.LINE_STRIP)}else B.isPoints?ee.setMode(D.POINTS):B.isSprite&&ee.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))ee.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,Et=B._multiDrawCounts,Ne=B._multiDrawCount,Zt=vt?v.get(vt).bytesPerElement:1,Ji=Lt.get(F).currentProgram.getUniforms();for(let Ce=0;Ce<Ne;Ce++)Ji.setValue(D,"_gl_DrawID",Ce),ee.render(Re[Ce]/Zt,Et[Ce])}else if(B.isInstancedMesh)ee.renderInstances(bt,he,B.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Et=Math.min(k.instanceCount,Re);ee.renderInstances(bt,he,Et)}else ee.render(bt,he)};function sl(x,C,k,F){G!==null&&x.isNodeMaterial&&G.setObject(F,x),fe===!0&&Y.setState(x,k,!1),x.transparent===!0&&x.side===Mi&&x.forceSinglePass===!1?(x.side=De,x.needsUpdate=!0,$n(x,C,F),x.side=Yi,x.needsUpdate=!0,$n(x,C,F),x.side=Mi):$n(x,C,F)}this.compile=function(x,C,k=null){k===null&&(k=x),G!==null&&G.renderStart(x,C,k),T=q.get(k),T.init(C),M.push(T),k.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),x!==k&&x.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),Ve=this.localClippingEnabled,fe=Y.init(this.clippingPlanes,Ve),fe===!0&&Y.setGlobalState(this.clippingPlanes,C),G!==null&&ot.render(T.state.shadowsArray,k,C);const F=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ut=B.material;if(ut)if(Array.isArray(ut))for(let St=0;St<ut.length;St++){const ct=ut[St];sl(ct,k,C,B),F.add(ct)}else sl(ut,k,C,B),F.add(ut)}),T=M.pop(),G!==null&&G.renderEnd(),F},this.compileAsync=function(x,C,k=null){const F=this.compile(x,C,k);return new Promise(B=>{function ut(){if(F.forEach(function(St){const vt=Lt.get(St).currentProgram;(vt===void 0||vt.isReady())&&F.delete(St)}),F.size===0){B(x);return}setTimeout(ut,10)}ne.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Or=null;function hu(x){Or&&Or(x)}function rl(){Zi.stop()}function al(){Zi.start()}const Zi=new dh;Zi.setAnimationLoop(hu),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(x){Or=x,nt.setAnimationLoop(x),x===null?Zi.stop():Zi.start()},nt.addEventListener("sessionstart",rl),nt.addEventListener("sessionend",al),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(x,C);const k=nt.enabled===!0&&nt.isPresenting===!0,F=U!==null&&(et===null||k)&&U.begin(L,et);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(C),C=nt.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,C,et),T=q.get(x,M.length),T.init(C),T.state.textureUnits=Nt.getTextureUnits(),M.push(T),re.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Te.setFromArrayCamera(C):Vt.setFromProjectionMatrix(re,fi,C.reversedDepth),Ve=this.localClippingEnabled,fe=Y.init(this.clippingPlanes,Ve),w=ht.get(x,g.length),w.init(),g.push(w),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){const St=L.xr.getDepthSensingMesh();St!==null&&Br(St,C,-1/0,L.sortObjects)}Br(x,C,0,L.sortObjects),w.finish(),G!==null&&G.updateLights(T.state.lightsArray),L.sortObjects===!0&&w.sort(Bt,ce),Je=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Je&&A.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),fe===!0&&Y.beginShadows();const B=T.state.shadowsArray;if(ot.render(B,x,C),fe===!0&&Y.endShadows(),(F&&U.hasRenderPass())===!1){const St=w.opaque,ct=w.transmissive;if(T.setupLights(),C.isArrayCamera){const vt=C.cameras;if(ct.length>0)for(let wt=0,Ot=vt.length;wt<Ot;wt++){const Wt=vt[wt];ll(St,ct,x,Wt)}Je&&A.render(x);for(let wt=0,Ot=vt.length;wt<Ot;wt++){const Wt=vt[wt];ol(w,x,Wt,Wt.viewport)}}else ct.length>0&&ll(St,ct,x,C),Je&&A.render(x),ol(w,x,C)}et!==null&&z===0&&(Nt.updateMultisampleRenderTarget(et),Nt.updateRenderTargetMipmap(et)),F&&U.end(L),x.isScene===!0&&x.onAfterRender(L,x,C),at.resetDefaultState(),W=-1,j=null,M.pop(),M.length>0?(T=M[M.length-1],Nt.setTextureUnits(T.state.textureUnits),fe===!0&&Y.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,G!==null&&G.renderEnd()};function Br(x,C,k,F){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){const St=C.isArrayCamera?Te:Vt;if(!x.frustumCulled||x.intersectsFrustum(St)){F&&xe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(re);const ct=it.update(x),vt=x.material;vt.visible&&w.push(x,ct,vt,k,xe.z,null,C)}}else if(x.isMesh||x.isLine||x.isPoints){const St=C.isArrayCamera?Te:Vt;if(!x.frustumCulled||x.intersectsFrustum(St)){const ct=it.update(x),vt=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xe.copy(x.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),xe.copy(ct.boundingSphere.center)),xe.applyMatrix4(x.matrixWorld).applyMatrix4(re)),Array.isArray(vt)){const wt=ct.groups;for(let Ot=0,Wt=wt.length;Ot<Wt;Ot++){const bt=wt[Ot],Xt=vt[bt.materialIndex];Xt&&Xt.visible&&w.push(x,ct,Xt,k,xe.z,bt,C)}}else vt.visible&&w.push(x,ct,vt,k,xe.z,null,C)}}}const ut=x.children;for(let St=0,ct=ut.length;St<ct;St++)Br(ut[St],C,k,F)}function ol(x,C,k,F){const{opaque:B,transmissive:ut,transparent:St}=x;T.setupLightsView(k),fe===!0&&Y.setGlobalState(L.clippingPlanes,k),F&&dt.viewport(tt.copy(F)),B.length>0&&Rs(B,C,k),ut.length>0&&Rs(ut,C,k),St.length>0&&Rs(St,C,k),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function ll(x,C,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){const bt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new ke(1,1,{generateMipmaps:!0,type:bt?Ge:Ye,minFilter:Ii,samples:Math.max(4,se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ut=T.state.transmissionRenderTarget[F.id],St=F.viewport||tt;ut.setSize(St.z*L.transmissionResolutionScale,St.w*L.transmissionResolutionScale);const ct=L.getRenderTarget(),vt=L.getActiveCubeFace(),wt=L.getActiveMipmapLevel();L.setRenderTarget(ut),L.getClearColor($),gt=L.getClearAlpha(),gt<1&&L.setClearColor(16777215,.5),L.clear(),Je&&A.render(k);const Ot=L.toneMapping;L.toneMapping=Ni;const Wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),fe===!0&&Y.setGlobalState(L.clippingPlanes,F),Rs(x,k,F),Nt.updateMultisampleRenderTarget(ut),Nt.updateRenderTargetMipmap(ut),ne.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Xt=0,he=C.length;Xt<he;Xt++){const ie=C[Xt],{object:ee,geometry:Re,material:Et,group:Ne}=ie;if(Et.side===Mi&&ee.layers.test(F.layers)){const Zt=Et.side;Et.side=De,Et.needsUpdate=!0,cl(ee,k,F,Re,Et,Ne),Et.side=Zt,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Nt.updateMultisampleRenderTarget(ut),Nt.updateRenderTargetMipmap(ut))}L.setRenderTarget(ct,vt,wt),L.setClearColor($,gt),Wt!==void 0&&(F.viewport=Wt),L.toneMapping=Ot}function Rs(x,C,k){const F=C.isScene===!0?C.overrideMaterial:null;for(let B=0,ut=x.length;B<ut;B++){const St=x[B],{object:ct,geometry:vt,group:wt}=St;let Ot=St.material;Ot.allowOverride===!0&&F!==null&&(Ot=F),ct.layers.test(k.layers)&&cl(ct,C,k,vt,Ot,wt)}}function cl(x,C,k,F,B,ut){G!==null&&B.isNodeMaterial&&G.setObject(x,B),x.onBeforeRender(L,C,k,F,B,ut),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(L,C,k,F,x,ut),B.transparent===!0&&B.side===Mi&&B.forceSinglePass===!1?(B.side=De,B.needsUpdate=!0,L.renderBufferDirect(k,C,F,B,x,ut),B.side=Yi,B.needsUpdate=!0,L.renderBufferDirect(k,C,F,B,x,ut),B.side=Mi):L.renderBufferDirect(k,C,F,B,x,ut),x.onAfterRender(L,C,k,F,B,ut)}function hl(x){let C=0;for(const k of x)k.texture!==null&&C++;return C}function $n(x,C,k){C.isScene!==!0&&(C=Ze);const F=Lt.get(x),B=T.state.lights,ut=T.state.shadowsArray,St=B.state.version,ct=J.getParameters(x,B.state,ut,C,k,T.state.lightProbeGridArray),vt=J.getProgramCacheKey(ct);let wt=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;const Ot=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=b.get(x.envMap||F.environment,Ot),F.envMapRotation=F.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,wt===void 0&&(x.addEventListener("dispose",jt),wt=new Map,F.programs=wt,F.programVariants=new Map);let Wt=wt.get(vt);if(Wt!==void 0){if(F.currentProgram===Wt&&F.lightsStateVersion===St)return dl(x,ct),Wt}else ct.uniforms=J.getUniforms(x),G!==null&&x.isNodeMaterial&&G.build(x,k,ct),x.onBeforeCompile(ct,L),Wt=J.acquireProgram(ct,vt),wt.set(vt,Wt),F.uniforms=ct.uniforms;const bt=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(bt.clippingPlanes=Y.uniform),dl(x,ct),F.needsLights=pu(x),F.lightsStateVersion=St,F.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.sunLights.value=B.state.sun,bt.sunLightShadows.value=B.state.sunShadow,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.sunShadowMatrix.value=B.state.sunShadowMatrix,bt.sunShadowCascade.value=B.state.sunShadowCascade,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=hl(T.state.lightProbeGridArray),F.currentProgram=Wt,F.uniformsList=null,Wt}function uu(x,C,k,F,B){const ut=Lt.get(x),St=ut.currentProgram.id+","+F+","+B;let ct=ut.programVariants.get(St);return ct===void 0?(ct=$n(x,C,k),ut.programVariants.set(St,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=F,ut.toneMapping=B),ct}function ul(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=vr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function dl(x,C){const k=Lt.get(x);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.batchingColor=C.batchingColor,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.instancingMorph=C.instancingMorph,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function du(x,C,k,F,B){C.isScene!==!0&&(C=Ze),Nt.resetTextureUnits();const ut=C.fog,St=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,ct=et===null?L.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:qt.workingColorSpace,vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,wt=b.get(F.envMap||St,vt),Ot=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Wt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),bt=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,he=!!k.morphAttributes.color;let ie=Ni;F.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ie=L.toneMapping);const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Re=ee!==void 0?ee.length:0,Et=Lt.get(F),Ne=T.state.lights;if(fe===!0&&(Ve===!0||x!==j)){const ae=x===j&&F.id===W;Y.setState(F,x,ae)}let Zt=!1,Ji=!1;F.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Ne.state.version||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==wt||F.fog===!0&&Et.fog!==ut||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Y.numPlanes||Et.numIntersection!==Y.numIntersection)||Et.vertexAlphas!==Ot||Et.vertexTangents!==Wt||Et.morphTargets!==bt||Et.morphNormals!==Xt||Et.morphColors!==he||Et.morphTargetsCount!==Re||Et.numLightProbeGrids!==hl(T.state.lightProbeGridArray)?Zt=!0:(Et.outputColorSpace!==ct||Et.toneMapping!==ie)&&(Ji=!0):(Zt=!0,Et.__version=F.version);let Ce=Et.currentProgram;(Zt===!0||Ji===!0)&&(Ce=Ji===!0?uu(F,C,B,ct,ie):$n(F,C,B),G&&F.isNodeMaterial&&G.onUpdateProgram(F,Ce,Et));let Cs=!1,Oi=!1,Qi=!1;const Yt=Ce.getUniforms(),we=Et.uniforms;if(dt.useProgram(Ce.program)&&(Cs=!0,Oi=!0,Qi=!0),F.id!==W&&(W=F.id,Oi=!0),Cs||j!==x){dt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Yt.setValue(D,"projectionMatrix",x.projectionMatrix),Yt.setValue(D,"viewMatrix",x.matrixWorldInverse);const Se=Yt.map.cameraPosition;Se!==void 0&&Se.setValue(D,pi.setFromMatrixPosition(x.matrixWorld)),se.logarithmicDepthBuffer&&Yt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Yt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,Oi=!0,Qi=!0)}if(Et.needsLights&&(Ne.state.sunShadowMap.length>0&&Yt.setValue(D,"sunShadowMap",Ne.state.sunShadowMap,Nt),Ne.state.directionalShadowMap.length>0&&Yt.setValue(D,"directionalShadowMap",Ne.state.directionalShadowMap,Nt),Ne.state.spotShadowMap.length>0&&Yt.setValue(D,"spotShadowMap",Ne.state.spotShadowMap,Nt),Ne.state.pointShadowMap.length>0&&Yt.setValue(D,"pointShadowMap",Ne.state.pointShadowMap,Nt)),B.isSkinnedMesh){Yt.setOptional(D,B,"bindMatrix"),Yt.setOptional(D,B,"bindMatrixInverse");const ae=B.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),Yt.setValue(D,"boneTexture",ae.boneTexture,Nt))}B.isBatchedMesh&&(Yt.setOptional(D,B,"batchingTexture"),Yt.setValue(D,"batchingTexture",B._matricesTexture,Nt),Yt.setOptional(D,B,"batchingIdTexture"),Yt.setValue(D,"batchingIdTexture",B._indirectTexture,Nt),Yt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Yt.setValue(D,"batchingColorTexture",B._colorsTexture,Nt));const si=k.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&K.update(B,k,Ce),(Oi||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,Yt.setValue(D,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(we.envMapIntensity.value=C.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=G0()),Oi){if(Yt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Et.needsLights&&fu(we,Qi),ut&&F.fog===!0&&rt.refreshFogUniforms(we,ut),rt.refreshMaterialUniforms(we,F,_t,Pt,T.state.transmissionRenderTarget[x.id]),Et.needsLights&&Et.numLightProbeGrids>0){const ae=E;let Se=0;for(const Ei of T.state.lightProbeGridArray)Ei.texture!==null&&(ae.textures[Se]=Ei.texture,ae.min[Se]=Ei.boundingBox.min,ae.max[Se]=Ei.boundingBox.max,ae.resolution[Se]=Ei.resolution,Se++);for(const Ei in ae)ae[Ei].length=Se;we.probesSH.value=ae.textures,we.probesMin.value=ae.min,we.probesMax.value=ae.max,we.probesResolution.value=ae.resolution}vr.upload(D,ul(Et),we,Nt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(vr.upload(D,ul(Et),we,Nt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Yt.setValue(D,"center",B.center),Yt.setValue(D,"modelViewMatrix",B.modelViewMatrix),Yt.setValue(D,"normalMatrix",B.normalMatrix),Yt.setValue(D,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){const ae=F.uniformsGroups;for(let Se=0,Ei=ae.length;Se<Ei;Se++){const pl=ae[Se];Rt.update(pl,Ce),Rt.bind(pl,Ce)}}return Ce}function fu(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function pu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(x,C,k){const F=Lt.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Lt.get(x.texture).__webglTexture=C,Lt.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const k=Lt.get(x);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,k=0){et=x,Z=C,z=k;let F=null,B=!1,ut=!1;if(x){const ct=Lt.get(x);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(D.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(x.viewport),Tt.copy(x.scissor),Ft=x.scissorTest,dt.viewport(tt),dt.scissor(Tt),dt.setScissorTest(Ft),W=-1;return}else if(ct.__webglFramebuffer===void 0)Nt.setupRenderTarget(x);else if(ct.__hasExternalTextures)Nt.rebindTextures(x,Lt.get(x.texture).__webglTexture,Lt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ot=x.depthTexture;if(ct.__boundDepthTexture!==Ot){if(Ot!==null&&Lt.has(Ot)&&(x.width!==Ot.image.width||x.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(x)}}const vt=x.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ut=!0);const wt=Lt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(wt[C])?F=wt[C][k]:F=wt[C],B=!0):x.samples>0&&Nt.useMultisampledRTT(x)===!1?F=Lt.get(x).__webglMultisampledFramebuffer:Array.isArray(wt)?F=wt[k]:F=wt,tt.copy(x.viewport),Tt.copy(x.scissor),Ft=x.scissorTest}else tt.copy(Dt).multiplyScalar(_t).floor(),Tt.copy(Qt).multiplyScalar(_t).floor(),Ft=te;if(k!==0&&(F=X),dt.bindFramebuffer(D.FRAMEBUFFER,F)&&dt.drawBuffers(x,F),dt.viewport(tt),dt.scissor(Tt),dt.setScissorTest(Ft),B){const ct=Lt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,ct.__webglTexture,k)}else if(ut){const ct=C;for(let vt=0;vt<x.textures.length;vt++){const wt=Lt.get(x.textures[vt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+vt,wt.__webglTexture,k,ct)}}else if(x!==null&&k!==0){const ct=Lt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ct.__webglTexture,k)}W=-1};function fl(x){const C=Lt.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=se.textureFormatReadable(x.format),C.__typeReadable=se.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,k,F,B,ut,St,ct=0){if(!(x&&x.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&St!==void 0&&(vt=vt[St],Array.isArray(vt)&&(vt=vt[0])),vt){dt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const wt=x.textures[ct],Ot=wt.format,Wt=wt.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ct);const bt=fl(wt);if(bt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-F&&k>=0&&k<=x.height-B&&D.readPixels(C,k,F,B,st.convert(Ot),st.convert(Wt),ut)}finally{const wt=et!==null?Lt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(x,C,k,F,B,ut,St,ct=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&St!==void 0&&(vt=vt[St],Array.isArray(vt)&&(vt=vt[0])),vt)if(C>=0&&C<=x.width-F&&k>=0&&k<=x.height-B){dt.bindFramebuffer(D.FRAMEBUFFER,vt);const wt=x.textures[ct],Ot=wt.format,Wt=wt.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ct);const bt=fl(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(C,k,F,B,st.convert(Ot),st.convert(Wt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const he=et!==null?Lt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,he);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zu(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Xt),D.deleteSync(ie),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,k=0){const F=Math.pow(2,-k),B=Math.floor(x.image.width*F),ut=Math.floor(x.image.height*F),St=C!==null?C.x:0,ct=C!==null?C.y:0;Nt.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,St,ct,B,ut),dt.unbindTexture()},this.copyTextureToTexture=function(x,C,k=null,F=null,B=0,ut=0){let St,ct,vt,wt,Ot,Wt,bt,Xt,he;const ie=x.isCompressedTexture?x.mipmaps[ut]:x.image;if(k!==null)St=k.max.x-k.min.x,ct=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,wt=k.min.x,Ot=k.min.y,Wt=k.isBox3?k.min.z:0;else{const Yt=Math.pow(2,-B);St=Math.floor(ie.width*Yt),ct=Math.floor(ie.height*Yt),x.isDataArrayTexture?vt=ie.depth:x.isData3DTexture?vt=Math.floor(ie.depth*Yt):vt=1,wt=0,Ot=0,Wt=0}F!==null?(bt=F.x,Xt=F.y,he=F.z):(bt=0,Xt=0,he=0);const ee=st.convert(C.format),Re=st.convert(C.type);let Et;C.isData3DTexture?(Nt.setTexture3D(C,0),Et=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Nt.setTexture2DArray(C,0),Et=D.TEXTURE_2D_ARRAY):(Nt.setTexture2D(C,0),Et=D.TEXTURE_2D),dt.activeTexture(D.TEXTURE0),dt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),dt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),dt.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const Ne=dt.getParameter(D.UNPACK_ROW_LENGTH),Zt=dt.getParameter(D.UNPACK_IMAGE_HEIGHT),Ji=dt.getParameter(D.UNPACK_SKIP_PIXELS),Ce=dt.getParameter(D.UNPACK_SKIP_ROWS),Cs=dt.getParameter(D.UNPACK_SKIP_IMAGES);dt.pixelStorei(D.UNPACK_ROW_LENGTH,ie.width),dt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ie.height),dt.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),dt.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),dt.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);const Oi=x.isDataArrayTexture||x.isData3DTexture,Qi=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const Yt=Lt.get(x),we=Lt.get(C),si=Lt.get(Yt.__renderTarget),ae=Lt.get(we.__renderTarget);dt.bindFramebuffer(D.READ_FRAMEBUFFER,si.__webglFramebuffer),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<vt;Se++)Oi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(x).__webglTexture,B,Wt+Se),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(C).__webglTexture,ut,he+Se)),D.blitFramebuffer(wt,Ot,wt+St,Ot+ct,bt,Xt,bt+St,Xt+ct,D.DEPTH_BUFFER_BIT,D.NEAREST);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Lt.has(x)){const Yt=Lt.get(x),we=Lt.get(C);dt.bindFramebuffer(D.READ_FRAMEBUFFER,P),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let si=0;si<vt;si++)Oi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,B,Wt+si):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,B),Qi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,ut,he+si):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,ut),B!==0?D.blitFramebuffer(wt,Ot,wt+St,Ot+ct,bt,Xt,bt+St,Xt+ct,D.COLOR_BUFFER_BIT,D.NEAREST):Qi?D.copyTexSubImage3D(Et,ut,bt,Xt,he+si,wt,Ot,St,ct):D.copyTexSubImage2D(Et,ut,bt,Xt,wt,Ot,St,ct);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qi?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Et,ut,bt,Xt,he,St,ct,vt,ee,Re,ie.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,ut,bt,Xt,he,St,ct,vt,ee,ie.data):D.texSubImage3D(Et,ut,bt,Xt,he,St,ct,vt,ee,Re,ie):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ut,bt,Xt,St,ct,ee,Re,ie.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ut,bt,Xt,ie.width,ie.height,ee,ie.data):D.texSubImage2D(D.TEXTURE_2D,ut,bt,Xt,St,ct,ee,Re,ie);dt.pixelStorei(D.UNPACK_ROW_LENGTH,Ne),dt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),dt.pixelStorei(D.UNPACK_SKIP_PIXELS,Ji),dt.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),dt.pixelStorei(D.UNPACK_SKIP_IMAGES,Cs),ut===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&D.generateMipmap(Et),dt.unbindTexture()},this.initRenderTarget=function(x){Lt.get(x).__webglFramebuffer===void 0&&Nt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Nt.setTextureCube(x,0):x.isData3DTexture?Nt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Nt.setTexture2DArray(x,0):Nt.setTexture2D(x,0),dt.unbindTexture()},this.resetState=function(){Z=0,z=0,et=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Li=48,hi=1,H0=Li*hi,Oe=H0/2,Jo=0,V0=.06,be=1200,xa=[{id:"morning",label:"아침",icon:"🌅",start:0,end:300},{id:"day",label:"낮",icon:"☀️",start:300,end:720},{id:"sunset",label:"노을",icon:"🌇",start:720,end:960},{id:"night",label:"밤",icon:"🌙",start:960,end:1200}];function xr(n){const t=(n%be+be)%be;for(const e of xa)if(t>=e.start&&t<e.end)return e;return xa[xa.length-1]}function bc(n){const t=(n%be+be)%be,e=Math.floor(t/be*20),i=Math.floor(t/be*20*60%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const bh={clear:{id:"clear",label:"맑음",icon:"☀️"},cloudy:{id:"cloudy",label:"구름 조금",icon:"⛅"},drizzle:{id:"drizzle",label:"이슬비",icon:"🌦️"}},Ec=["clear","clear","cloudy","drizzle","clear","cloudy","clear"];function Ma(n){return bh[Ec[(n-1)%Ec.length]]}const Tc={t:0,top:"#9ed7f5",bottom:"#ffe6d2",fog:"#f0faf6",sun:"#ffe7c4",sunIntensity:.95,hemiSky:"#fff6ea",hemiGround:"#d9f2c4",hemiIntensity:1.32,night:.1},W0={t:110,top:"#74cff4",bottom:"#dcf5fd",fog:"#e4f7f5",sun:"#fff2cf",sunIntensity:1.16,hemiSky:"#ffffff",hemiGround:"#dcf6c6",hemiIntensity:1.5,night:0},Eh={t:330,top:"#5fc6f2",bottom:"#cfeeff",fog:"#ddf4f8",sun:"#fffbe9",sunIntensity:1.05,hemiSky:"#f4feff",hemiGround:"#d8f5c2",hemiIntensity:1.55,night:0},X0={t:800,top:"#efa9c8",bottom:"#ffdcc0",fog:"#fce4d9",sun:"#ffb47c",sunIntensity:1.22,hemiSky:"#ffd0ae",hemiGround:"#f0e2b8",hemiIntensity:1.18,night:.02},q0={t:915,top:"#a99bdb",bottom:"#ffd8cc",fog:"#f0dde6",sun:"#ffa888",sunIntensity:.82,hemiSky:"#d4c0ea",hemiGround:"#c3cbb4",hemiIntensity:.9,night:.2},Y0={t:980,top:"#4e5b9c",bottom:"#b6c0ea",fog:"#9ea8d4",sun:"#d7e2ff",sunIntensity:.55,hemiSky:"#93a3ec",hemiGround:"#8298b0",hemiIntensity:.62,night:1},$0={t:1170,top:"#7388c4",bottom:"#e5d8ee",fog:"#cfd6ea",sun:"#f0e9ff",sunIntensity:.86,hemiSky:"#e9e4f9",hemiGround:"#cadcc4",hemiIntensity:1.1,night:.62},K0={...Eh,t:650},Z0=[Tc,W0,Eh,K0,X0,q0,Y0,$0,{...Tc,t:be}],sr={speed:4.3,turnLerp:12,radius:.36,spriteHeight:1.5},_i={fov:58,offset:{x:0,y:7.4,z:9},lookHeight:.7},sn={x:.6,z:13},Th=[{id:"dock",name:"부두",icon:"⚓",day:5,x:0,z:20.4,markerY:2.2,height:1.7,water:!0},{id:"workshop",name:"공방",icon:"🔨",day:10,x:-6.5,z:3,markerY:3.4,height:2.8},{id:"vending",name:"메타몽 자판기",icon:"🥤",day:17,x:7,z:2,markerY:2.4,height:1.8},{id:"lighthouse",name:"등대",icon:"🗼",day:24,x:8,z:-8,markerY:5.6,height:4.4}],rn=[{id:"ditto_basic_01",name:"동글 메타몽",x:-7,z:10,variant:"basic",height:.86,thumb:{set:"ditto_basic",row:1,col:1},flavor:"변신을 포기한 동글 메타몽. 점 눈만 남았다."},{id:"ditto_pebble_02",name:"조약돌 메타몽",x:-4,z:12.6,variant:"pebble",height:.52,thumb:{set:"disguises",row:1,col:1},flavor:"조약돌인 척하지만 가끔 숨을 쉰다."},{id:"ditto_mailbox_03",name:"우체통 메타몽",x:2.8,z:16.4,variant:"mailbox",height:1.1,thumb:{set:"disguises",row:1,col:2},flavor:"편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다."},{id:"ditto_flowerpot_04",name:"화분 메타몽",x:-2.5,z:8,variant:"flowerpot",height:.85,thumb:{set:"disguises",row:1,col:3},flavor:"물을 안 줘도 잎이 파랗다. 그게 수상하다."},{id:"ditto_bench_05",name:"벤치 메타몽",x:5.5,z:8.5,variant:"bench",height:.9,thumb:{set:"disguises",row:2,col:1},flavor:"앉으라고 만든 벤치인데, 앉으면 도망간다."},{id:"ditto_mushroom_06",name:"버섯 메타몽",x:3.5,z:14,variant:"mushroom",height:.78,thumb:{set:"disguises",row:2,col:2},flavor:"빨간 갓에 흰 점. 먹으면 안 될 것 같다."},{id:"ditto_signpost_07",name:"이정표 메타몽",x:-1.5,z:16,variant:"signpost",height:1.15,thumb:{set:"disguises",row:2,col:3},flavor:"어디로 가라는 건지 본인도 모른다."}],wc=[{id:"somi",name:"솜이",x:5.5,z:3.4,set:"somi",height:.74},{id:"ongi",name:"옹이",x:8.6,z:1.1,set:"ongi",height:.7}],J0=[{frame:"cherry1",x:-10.5,z:6.5,height:3,collide:.45},{frame:"cherry2",x:-11.6,z:12.4,height:3.4,collide:.5},{frame:"cherry1",x:10.6,z:-1.6,height:3.2,collide:.45},{frame:"tree_round",x:9.6,z:5.6,height:2.7,collide:.42},{frame:"tree_round",x:-5.4,z:-2.4,height:2.5,collide:.4},{frame:"tree_tall",x:-4.6,z:17.6,height:3.1,collide:.4},{frame:"tree_tall",x:12.4,z:8.8,height:3.3,collide:.4},{frame:"tree_round",x:-13.2,z:-1.2,height:2.9,collide:.42},{frame:"tree_tall",x:2.6,z:-6.8,height:2.9,collide:.4},{frame:"flowerbush",x:6.6,z:12.2,height:.72,collide:.3},{frame:"flowerbush",x:-8.2,z:2.6,height:.66,collide:.3},{frame:"flowerbush",x:-3.2,z:4.6,height:.6,collide:.28},{frame:"flowerbush",x:4.2,z:17.8,height:.62,collide:.28},{frame:"rock",x:10.2,z:9.4,height:.62,collide:.45},{frame:"rock",x:-9.4,z:15.2,height:.55,collide:.42},{frame:"rock",x:1.4,z:7.6,height:.46,collide:.35},{frame:"fence",x:3.4,z:11,height:.66,collide:.35},{frame:"fence",x:3.4,z:12.6,height:.66,collide:.35},{frame:"fence",x:-1,z:13,height:.66,collide:.35},{frame:"lamp",x:1.6,z:15.2,height:2,collide:.25},{frame:"lamp",x:-3.4,z:10.4,height:2,collide:.25},{frame:"lamp",x:4.6,z:6,height:2,collide:.25},{frame:"flowerbush",x:-2.2,z:13.4,height:.58,collide:.26},{frame:"flowerbush",x:1.9,z:12.1,height:.62,collide:.28},{frame:"rock",x:4.9,z:13.9,height:.5,collide:.38},{frame:"cherry1",x:-6.4,z:13,height:2.9,collide:.42},{frame:"tree_tall",x:6.8,z:15.6,height:3,collide:.4},{frame:"tree_round",x:9.2,z:12.6,height:2.6,collide:.4},{frame:"flowerbush",x:7.4,z:9.2,height:.6,collide:.28},{frame:"fence",x:-1.8,z:18.4,height:.66,collide:.35},{frame:"cherry2",x:-4.8,z:9.4,height:3.2,collide:.46},{frame:"tree_round",x:5.2,z:11.6,height:2.5,collide:.4},{frame:"flowerbush",x:.2,z:7.4,height:.58,collide:.26},{frame:"flowerbush",x:3.6,z:6.6,height:.54,collide:.26},{frame:"rock",x:-1.8,z:6.6,height:.44,collide:.32},{frame:"lamp",x:3.8,z:14.8,height:2,collide:.25},{frame:"cherry1",x:-3.4,z:15.8,height:3,collide:.45},{frame:"tree_round",x:4.6,z:16.4,height:2.6,collide:.42},{frame:"flowerbush",x:1.2,z:15.4,height:.56,collide:.24},{frame:"flowerbush",x:-2.4,z:11,height:.6,collide:.26},{frame:"rock",x:5.6,z:11.4,height:.5,collide:.35},{frame:"cherry1",x:-3.2,z:11.8,height:3.1,collide:.45},{frame:"tree_round",x:3.4,z:9.9,height:2.5,collide:.4}],Sa={dittoRange:2.9,catRange:2.2,tapRange:5},Ie={dbName:"metamong-island",store:"saves",key:"slot1",intervalSeconds:5};function rr(n,t,e){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}const Ac=n=>n*n*(3-2*n);function mo(n,t,e=0){const i=Math.floor(n),s=Math.floor(t),r=n-i,a=t-s,o=Ac(r),l=Ac(a),c=rr(i,s,e),h=rr(i+1,s,e),d=rr(i,s+1,e),u=rr(i+1,s+1,e);return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+u*o)*l}function ar(n,t,e=4,i=0){let s=0,r=.5,a=1,o=0;for(let l=0;l<e;l++)s+=(mo(n*a,t*a,i+l*131)*2-1)*r,o+=r,r*=.5,a*=2;return s/(o||1)}function Q0(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function j0(n,t,e){return n<t?t:n>e?e:n}class t_{constructor(t=20261120){this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.min(t.length-1,Math.floor(this.next()*t.length))]}}const Di=Li+1;function Rc(n,t,e,i,s,r){const a=n-e,o=t-i;return s*Math.exp(-(a*a+o*o)/(2*r*r))}function e_(n,t){const e=Math.hypot(n,t*.97)/Oe,i=ar(n*.06+13.7,t*.06-8.2,3,7)*.1,s=Q0(.5,.94,e+i),r=1-s,a=.55+1.05*(ar(n*.09,t*.09,4,3)*.5+.5)+.15*ar(n*.25,t*.25,2,11);let o=r*a-s*.62;return o+=r*Rc(n,t,6,-7,1.55,4.6),o+=r*Rc(n,t,-10,7,.95,4),o+=r*ar(n*.42,t*.42,2,23)*.09,j0(o,-1.2,4.6)}function i_(){const n=new Float32Array(Di*Di);for(let t=0;t<Di;t++)for(let e=0;e<Di;e++){const i=-Oe+e*hi,s=-Oe+t*hi;n[t*Di+e]=e_(i,s)}return n}const n_=i_();function Un(n,t,e){const i=(t+Oe)/hi,s=(e+Oe)/hi;if(i<0||s<0||i>=Li||s>=Li)return-1.5;const r=Math.floor(i),a=Math.floor(s),o=i-r,l=s-a,c=n[a*Di+r],h=n[a*Di+r+1],d=n[(a+1)*Di+r],u=n[(a+1)*Di+r+1];return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+u*o)*l}function go(n,t,e){const s=Un(n,t+.45,e)-Un(n,t-.45,e),r=Un(n,t,e+.45)-Un(n,t,e-.45);return Math.hypot(s,r)/(2*.45)}function s_(n,t,e){return!(Math.abs(t)>Oe-1||Math.abs(e)>Oe-1||Un(n,t,e)<V0||go(n,t,e)>1.35)}const r_="#3b2d38",a_=[140,140,140,255,172,172,172,255,222,222,222,255,255,255,255,255];function wh(){const n=new Vo(new Uint8Array(a_),4,1,di);return n.minFilter=le,n.magFilter=le,n.generateMipmaps=!1,n.needsUpdate=!0,n}const o_=wh();function _o(n={}){return new Dd({gradientMap:o_,...n})}new pn({color:r_,side:De,fog:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const We={deepSand:new ft("#dcc79c"),wetSand:new ft("#f2dfb4"),sand:new ft("#ffe6b8"),sandLight:new ft("#fff1d2"),grassA:new ft("#98dd78"),grassB:new ft("#b6ec96"),grassC:new ft("#82d46c"),grassMint:new ft("#abe4bd"),stone:new ft("#e7ddc9"),stoneHigh:new ft("#f2ead8")};new ft;let li=null;function l_(){if(li)return li;const n=64,t=document.createElement("canvas");t.width=t.height=n;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,n,n);const i=["#f4f7f0","#fbfdf8","#eef4ea","#ffffff","#f7faf3"];for(let s=0;s<220;s++){const r=Math.floor(Math.random()*n),a=Math.floor(Math.random()*n);e.fillStyle=i[Math.floor(Math.random()*i.length)],e.fillRect(r,a,Math.random()<.25?2:1,Math.random()<.25?2:1)}return li=new Es(t),li.colorSpace=me,li.wrapS=li.wrapT=ms,li.magFilter=le,li.minFilter=Ii,li.generateMipmaps=!0,li.anisotropy=4,li}function c_(n,t,e,i,s){const r=mo(e*.33+7.1,i*.33-3.3,41),a=mo(e*.12-2.4,i*.12+5.6,17);return n<-.05?s.copy(We.deepSand).lerp(We.wetSand,.3+r*.3):n<.2?s.copy(We.wetSand).lerp(We.sand,.35+r*.5):n<.4?s.copy(We.sand).lerp(We.sandLight,r*.5):n<.58?s.copy(We.sand).lerp(We.grassA,.35+r*.55):t>1.55?s.copy(We.stone).lerp(We.stoneHigh,r*.6):(s.copy(We.grassA),r>.54?s.lerp(We.grassB,(r-.54)*2.2):r<.44&&s.lerp(We.grassC,(.44-r)*2.2),a>.7&&s.lerp(We.grassMint,(a-.7)*.8)),s}var Wn,Ah,Rh;class h_{constructor(t){Ti(this,Wn);this.heights=t,this.group=new Si,this.group.name="Terrain",this.mesh=Mt(this,Wn,Ah).call(this,t),this.group.add(this.mesh),this.seabed=Mt(this,Wn,Rh).call(this),this.group.add(this.seabed)}sampleHeight(t,e){return Un(this.heights,t,e)}slopeAt(t,e){return go(this.heights,t,e)}isWalkable(t,e){return s_(this.heights,t,e)}groundY(t,e){return Math.max(this.sampleHeight(t,e),Jo+.02)}dispose(){this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}Wn=new WeakSet,Ah=function(t){const e=Li+1,i=Li*Li,s=new Float32Array(i*6*3),r=new Float32Array(i*6*3),a=new Float32Array(i*6*2),o=1/2.6,l=new Float32Array(e*e*3),c=new ft;for(let w=0;w<e;w++)for(let T=0;T<e;T++){const g=-Oe+T*hi,M=-Oe+w*hi,U=t[w*e+T];c_(U,go(t,g,M),g,M,c);const L=(w*e+T)*3;l[L]=c.r,l[L+1]=c.g,l[L+2]=c.b}let h=0,d=0,u=0;const f=(w,T,g,M)=>{s[h++]=w,s[h++]=g,s[h++]=T,r[d++]=l[M],r[d++]=l[M+1],r[d++]=l[M+2],a[u++]=w*o,a[u++]=T*o};for(let w=0;w<Li;w++)for(let T=0;T<Li;T++){const g=-Oe+T*hi,M=g+hi,U=-Oe+w*hi,L=U+hi,N=w*e+T,G=w*e+T+1,X=(w+1)*e+T,P=(w+1)*e+T+1,H=t[N],Z=t[G],z=t[X],et=t[P];f(g,U,H,N*3),f(g,L,z,X*3),f(M,L,et,P*3),f(g,U,H,N*3),f(M,L,et,P*3),f(M,U,Z,G*3)}const _=new He;_.setAttribute("position",new $e(s,3)),_.setAttribute("color",new $e(r,3)),_.setAttribute("uv",new $e(a,2)),_.computeVertexNormals(),_.computeBoundingSphere();const y=_.attributes.normal,m=_.attributes.position;let p=0;for(let w=0;w<m.count;w+=3)if(y.getY(w)<0){for(let T=0;T<3;T++){const g=m.getComponent(w+1,T),M=m.getComponent(w+2,T);m.setComponent(w+1,T,M),m.setComponent(w+2,T,g)}for(let T=0;T<3;T++){const g=_.attributes.color.getComponent(w+1,T),M=_.attributes.color.getComponent(w+2,T);_.attributes.color.setComponent(w+1,T,M),_.attributes.color.setComponent(w+2,T,g)}p++}p>0&&(_.computeVertexNormals(),m.needsUpdate=!0);const S=_o({vertexColors:!0,map:l_()}),R=new Ee(_,S);R.name="TerrainSurface",R.receiveShadow=!0,R.frustumCulled=!0;const E=_.attributes.color;return E.needsUpdate=!0,R},Rh=function(){const t=new Ki(Oe*10,Oe*10,1,1);t.rotateX(-Math.PI/2);const e=_o({color:"#dff3ec"}),i=new Ee(t,e);return i.position.y=-1.35,i.name="Seabed",i.receiveShadow=!0,i};const u_=`
  uniform float uTime;
  varying vec3 vWorldPos;
  varying float vWave;
  varying vec3 vViewDir;
  #include <common>
  #include <fog_pars_vertex>

  void main() {
    vec3 p = position;
    float w =
      sin(p.x * 0.52 + uTime * 0.55) * 0.055 +
      sin(p.z * 0.41 - uTime * 0.47) * 0.045 +
      sin((p.x + p.z) * 0.23 + uTime * 0.31) * 0.03;
    p.y += w;

    vec4 worldPosition = modelMatrix * vec4(p, 1.0);
    vWorldPos = worldPosition.xyz;
    vWave = w;
    vViewDir = normalize(cameraPosition - worldPosition.xyz);

    vec4 mvPosition = viewMatrix * worldPosition;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,d_=`
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uSkyColor;
  uniform vec3 uSunColor;
  uniform float uNight;
  varying vec3 vWorldPos;
  varying float vWave;
  varying vec3 vViewDir;
  #include <common>
  #include <fog_pars_fragment>

  void main() {
    float fres = pow(1.0 - clamp(abs(vViewDir.y), 0.0, 1.0), 2.4);
    float shimmer = smoothstep(0.03, 0.11, vWave);
    vec3 col = mix(uDeep, uShallow, 0.32 + shimmer * 0.42);
    col = mix(col, uSkyColor, fres * 0.34);
    col += uSunColor * shimmer * 0.06 * (1.0 - uNight * 0.75);
    gl_FragColor = vec4(col, 0.93);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;class f_{constructor(){const t=Oe*8,e=new Ki(t,t,72,72);e.rotateX(-Math.PI/2),this.material=new ze({uniforms:Hn.merge([pt.fog,{uTime:{value:0},uShallow:{value:new ft("#8ff0e0")},uDeep:{value:new ft("#2fc4cd")},uSkyColor:{value:new ft("#e8fcff")},uSunColor:{value:new ft("#fffbe6")},uNight:{value:0}}]),vertexShader:u_,fragmentShader:d_,transparent:!0,fog:!0,depthWrite:!0}),this.mesh=new Ee(e,this.material),this.mesh.name="Water",this.mesh.position.y=Jo,this.mesh.renderOrder=1}update(t,e){this.material.uniforms.uTime.value=t,e&&(this.material.uniforms.uShallow.value.copy(e.waterShallow),this.material.uniforms.uDeep.value.copy(e.waterDeep),this.material.uniforms.uSkyColor.value.copy(e.skyBottom),this.material.uniforms.uSunColor.value.copy(e.sun),this.material.uniforms.uNight.value=e.night)}}const p_=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,m_=`
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uDisc;
  uniform vec3 uDiscDir;
  uniform vec3 uCloud;
  uniform float uNight;
  uniform float uTime;
  varying vec3 vDir;

  float hash12(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash12(i);
    float b = hash12(i + vec2(1.0, 0.0));
    float c = hash12(i + vec2(0.0, 1.0));
    float d = hash12(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * vnoise(p);
      p = p * 2.03 + vec2(3.1, 1.7);
      a *= 0.5;
    }
    return v;
  }

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;

    vec3 col = mix(uBottom, uTop, smoothstep(-0.05, 0.45, h));

    // 지평선 쪽 따뜻한 번짐
    col += uBottom * 0.08 * (1.0 - smoothstep(0.0, 0.14, abs(h)));

    // ── 솜사탕 구름 (낮에만 또렷하게)
    if (h > 0.015) {
      vec2 uv = dir.xz / (h + 0.85);
      uv = uv * 1.6 + vec2(uTime * 0.004, uTime * 0.0015);
      float n = fbm(uv * 1.15 + vec2(11.0, 4.0));
      float n2 = fbm(uv * 2.3 - vec2(6.0, 8.0));
      float shape = smoothstep(0.48, 0.6, n * 0.72 + n2 * 0.38);
      float band = smoothstep(0.04, 0.22, h) * (1.0 - smoothstep(0.5, 0.98, h) * 0.6);
      float cloudA = shape * band * (1.0 - uNight * 0.85);
      vec3 cloudCol = mix(vec3(1.0), uCloud, 0.18);
      cloudCol = mix(cloudCol, uBottom, 0.06);
      col = mix(col, cloudCol, cloudA * 0.95);
    }

    // 해 / 달
    vec3 discDir = normalize(uDiscDir);
    float sd = max(dot(dir, discDir), 0.0);
    float core = pow(sd, uNight > 0.5 ? 900.0 : 320.0);
    col += uDisc * core * 1.3;
    col += uDisc * pow(sd, 6.0) * 0.1 * (1.0 - uNight * 0.5);

    // 별 (밤에만)
    if (uNight > 0.02) {
      vec3 g = floor(dir * 190.0);
      float n = hash13(g);
      float star = step(0.9965, n) * uNight * smoothstep(0.0, 0.1, h);
      float twinkle = 0.6 + 0.4 * sin(uTime * 1.7 + n * 90.0);
      col += vec3(1.0, 0.98, 0.95) * star * twinkle;
    }

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class g_{constructor(){const t=new qo(500,32,20);this.material=new ze({uniforms:{uTop:{value:new ft("#8ed7f6")},uBottom:{value:new ft("#f1fcf4")},uDisc:{value:new ft("#fff2cf")},uDiscDir:{value:new I(.2,.6,-.6)},uCloud:{value:new ft("#ffffff")},uNight:{value:0},uTime:{value:0}},vertexShader:p_,fragmentShader:m_,side:De,depthWrite:!1,fog:!1}),this.mesh=new Ee(t,this.material),this.mesh.name="Skybox",this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}update(t){this.mesh.position.copy(t)}setPalette({skyTop:t,skyBottom:e,sun:i,night:s,discDir:r,elapsed:a}){const o=this.material.uniforms;o.uTop.value.copy(t),o.uBottom.value.copy(e),o.uDisc.value.copy(i),o.uCloud.value.copy(e).lerp(i,.35),o.uNight.value=s,o.uTime.value=a,r&&o.uDiscDir.value.copy(r)}}let rs=null;function Cc(){if(rs)return rs;const n=document.createElement("canvas");n.width=n.height=96;const t=n.getContext("2d"),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(255,255,255,0.92)"),e.addColorStop(.45,"rgba(255,255,255,0.62)"),e.addColorStop(.78,"rgba(255,255,255,0.24)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.ellipse(48,48,46,46,0,0,Math.PI*2),t.fill(),rs=new Es(n),rs.colorSpace=me,rs}function Ms(n=.34,t=.3){const e=new ws(n,28);e.rotateX(-Math.PI/2),e.scale(1,1,.62);const i=new pn({color:"#6d5a8a",map:Cc(),alphaMap:Cc(),transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),s=new Ee(e,i);return s.renderOrder=2,s}let as=null;function __(){if(as)return as;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,62);return e.addColorStop(0,"rgba(255,214,232,0)"),e.addColorStop(.52,"rgba(255,206,228,0.06)"),e.addColorStop(.76,"rgba(255,190,220,0.85)"),e.addColorStop(1,"rgba(255,190,220,0)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),as=new Es(n),as.colorSpace=me,as}function v_(n=.45){const t=new ws(n,32);t.rotateX(-Math.PI/2);const e=new pn({map:__(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),i=new Ee(t,e);return i.renderOrder=2,i}let os=null;function x_(){if(os)return os;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return t.font='96px "Noto Sans CJK KR", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=11,t.strokeStyle="rgba(255,255,255,0.92)",t.strokeText("♥",64,68),t.fillStyle="#ff86a8",t.fillText("♥",64,68),os=new Es(n),os.colorSpace=me,os}function Ch(n=.42){const t=new Sd(new nh({map:x_(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return t.scale.set(n,n,1),t.visible=!1,t}class Ss{constructor(t,e,i={}){const{height:s=1,exact:r=!1}=i;this.atlas=t;const a=t.frames.get(e)||t.frames.values().next().value;this.height=s,this.exact=r,this.aspect=r?a.w/a.h:t.cell[0]/t.cell[1];const o=new Ki(s*this.aspect,s);o.translate(0,s/2,0);const l=t.texture.clone();l.needsUpdate=!0,this.map=l,this.material=new pn({map:l,transparent:!1,alphaTest:.45,depthWrite:!0,depthTest:!0,side:Yi,toneMapped:!1,fog:!0,color:16777215}),this.mesh=new Ee(o,this.material),this.mesh.name=`Billboard_${t.set}_${e}`,this._wp=new I,this.frame=null,this.flip=!1,this.setFrame(e,!!i.flip),this.mesh.userData.billboard=this}setFrame(t,e=this.flip){const i=this.atlas.frames.get(t);if(!i)return this.frame;this.frame=i,this.flip=!!e;const s=1/this.atlas.cols,r=1/this.atlas.rows;if(this.map.offset.set(e?i.col/this.atlas.cols:(i.col-1)/this.atlas.cols,1-i.row/this.atlas.rows),this.map.repeat.set(e?-s:s,r),this.map.needsUpdate=!0,this.exact){const a=i.w/i.h;if(Math.abs(a-this.aspect)>1e-4){this.aspect=a,this.mesh.geometry.dispose();const o=new Ki(this.height*a,this.height);o.translate(0,this.height/2,0),this.mesh.geometry=o}}return i}faceCamera(t){this.mesh.getWorldPosition(this._wp),this.mesh.rotation.y=Math.atan2(t.position.x-this._wp.x,t.position.z-this._wp.z)}setTint(t){this.material.color.copy(t)}dispose(){this.map.dispose(),this.material.dispose(),this.mesh.geometry.dispose()}}const M_={workshop:"workshop",lighthouse:"lighthouse",vending:"vending",dock:"dock"},S_={workshop:1.9,lighthouse:1.15,vending:.75,dock:1.5};class y_{constructor(t,e){this.group=new Si,this.group.name="Scenery",this.sites=[],this.billboards=[],this.colliders=[];const i=e.get("buildings"),s=e.get("nature");for(const r of Th){const a=r.water?0:Math.max(t.sampleHeight(r.x,r.z),.02),o=new Ss(i,M_[r.id],{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Building_${r.id}`,this.group.add(o.mesh),this.billboards.push(o),this.sites.push({...r,y:a,billboard:o}),this.colliders.push({x:r.x,z:r.z,r:S_[r.id]||1});const l=Ms(r.height*.34,.26);l.position.set(r.x,a+.02,r.z),this.group.add(l)}for(const r of J0){const a=Math.max(t.sampleHeight(r.x,r.z),.02),o=new Ss(s,r.frame,{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Nature_${r.frame}_${r.x}_${r.z}`,this.group.add(o.mesh),this.billboards.push(o),r.collide&&this.colliders.push({x:r.x,z:r.z,r:r.collide});const l=Ms((r.collide||.3)*1.25,.22);l.position.set(r.x,a+.02,r.z),this.group.add(l)}}update(t,e){if(e)for(const i of this.billboards)i.faceCamera(e)}}const b_=[[[0,19.6],[0,15.4],[-.8,11.4],[-2.8,8],[-5.2,4.8]],[[-.4,12.4],[2.6,11.6],[5.4,8.4],[6.8,4.2]],[[2,10.4],[5.2,6.2],[7,1],[7.8,-5.4]]],or=1.15,E_=.6,T_=new ft("#f6e5c2"),w_=new ft("#e2c89c"),lr=[-or/2,-or*.22,or*.22,or/2];let vi=null;function A_(){if(vi)return vi;const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.16,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.84,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(196,168,126,0.16)";for(let i=0;i<40;i++){const s=Math.floor(Math.random()*64),r=Math.floor(Math.random()*64);t.fillRect(s,r,2,2)}return vi=new Es(n),vi.colorSpace=me,vi.magFilter=le,vi.minFilter=Be,vi.generateMipmaps=!1,vi.wrapS=ii,vi.wrapT=ms,vi}function R_(n){const t=new Rd(n.map(([i,s])=>new I(i,0,s)),!1,"catmullrom",.5),e=Math.max(4,Math.round(t.getLength()/E_));return t.getSpacedPoints(e).map(i=>[i.x,i.z])}class C_{constructor(t){this.group=new Si,this.group.name="Path";const e=[],i=[],s=[],r=[],a=new ft;for(const h of b_){const d=R_(h),u=e.length/3;let f=0;for(let m=0;m<d.length;m++){const[p,S]=d[m],[R,E]=d[Math.max(0,m-1)],[w,T]=d[Math.min(d.length-1,m+1)],g=w-R,M=T-E,U=Math.hypot(g,M)||1,L=-M/U,N=g/U;m>0&&(f+=Math.hypot(p-d[m-1][0],S-d[m-1][1]));for(let G=0;G<lr.length;G++){const X=lr[G],P=p+L*X,H=S+N*X;e.push(P,t.groundY(P,H)+.04,H),s.push(G/(lr.length-1),f/2.2);const Z=Math.abs(G-1.5)/1.5;a.copy(T_).lerp(w_,Z*.75),i.push(a.r,a.g,a.b)}}const _=d.length,y=lr.length;for(let m=0;m<_-1;m++)for(let p=0;p<y-1;p++){const S=u+m*y+p,R=S+1,E=u+(m+1)*y+p,w=E+1;r.push(S,E,w,S,w,R)}}const o=new He;o.setAttribute("position",new de(e,3)),o.setAttribute("color",new de(i,3)),o.setAttribute("uv",new de(s,2)),o.setIndex(r),o.computeVertexNormals();const l=_o({vertexColors:!0,map:A_(),transparent:!0,alphaTest:.06,depthWrite:!1,side:Mi,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=new Ee(o,l);c.name="PathSurface",c.receiveShadow=!0,this.group.add(c)}}const ls=new ft("#dfe8ef"),P_=new ft("#8feadf"),L_=new ft("#31c6cd"),D_=new I(-.22,.86,.34).normalize(),I_={hemi:.52,ambient:.26,sun:1.25,fill:.22},Pc={top:"skyTop",bottom:"skyBottom",fog:"fog",sun:"sun",hemiSky:"hemiSky",hemiGround:"hemiGround"};var bi,Ph,Lh,Dh,Ih;class N_{constructor(t){Ti(this,bi);this.scene=new fd,this.scene.fog=new ko("#f2fcf5",.0062),this.terrain=new h_(n_),this.scene.add(this.terrain.group),this.water=new f_,this.scene.add(this.water.mesh),this.sky=new g_,this.scene.add(this.sky.mesh),this.hemi=new zd("#fff4e2","#dcf5c6",1.5),this.scene.add(this.hemi),this.ambient=new Hd("#fff8ec",.5),this.scene.add(this.ambient),this.sunLight=new Ql("#ffe9c6",1.1),this.sunLight.position.set(12,30,-18),this.sunLight.target.position.set(0,0,0),this.sunLight.castShadow=!0;const e=this.sunLight.shadow;e.mapSize.set(1024,1024),e.camera.left=-30,e.camera.right=30,e.camera.top=30,e.camera.bottom=-30,e.camera.near=1,e.camera.far=170,e.bias=-5e-4,e.normalBias=.02,e.radius=1.5,e.camera.updateProjectionMatrix(),e.needsUpdate=!0,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.shadowFocus=new I(0,0,0),this.fillLight=new Ql("#dcefff",.4),this.fillLight.position.set(-22,16,26),this.fillLight.target.position.set(0,0,0),this.scene.add(this.fillLight),this.scene.add(this.fillLight.target),this.scenery=new y_(this.terrain,t),this.scene.add(this.scenery.group),this.path=new C_(this.terrain),this.scene.add(this.path.group),this.keyColors=Z0.map(i=>{const s={t:i.t,sunIntensity:i.sunIntensity,hemiIntensity:i.hemiIntensity,night:i.night};for(const r of Object.keys(Pc))s[r]=new ft(i[r]);return s}),this.palette={skyTop:new ft,skyBottom:new ft,fog:new ft,sun:new ft,hemiSky:new ft,hemiGround:new ft,waterShallow:new ft,waterDeep:new ft,sunIntensity:1,hemiIntensity:1,night:0},this.weather=bh.clear,this.weatherBlend=0,this.lightGain={...I_},this.spriteLight=new ft("#ffffff"),this.rain=Mt(this,bi,Ph).call(this),this.scene.add(this.rain.points),this.tmpDir=new I,this.discDir=new I,this.time=0}setWeather(t){this.weather=t}update(t,e,i,s){this.time+=t;const r=Mt(this,bi,Lh).call(this,e),a=this.weather.id==="drizzle"?.55:this.weather.id==="cloudy"?.32:0;if(this.weatherBlend+=(a-this.weatherBlend)*Math.min(1,t*.8),this.weatherBlend>.001){const h=this.weatherBlend;r.skyTop.lerp(ls,h*.55),r.skyBottom.lerp(ls,h*.45),r.fog.lerp(ls,h*.4),r.sun.lerp(ls,h*.3),r.sunIntensity*=1-h*.35,r.hemiIntensity*=1-h*.15}this.hemi.color.copy(r.hemiSky),this.hemi.groundColor.copy(r.hemiGround);const o=this.lightGain;this.hemi.intensity=r.hemiIntensity*o.hemi,this.sunLight.color.copy(r.sun),this.sunLight.intensity=r.sunIntensity*o.sun,this.ambient.color.copy(r.hemiSky),this.ambient.intensity=(.46-r.night*.1)*o.ambient,this.fillLight.intensity=(.42-r.night*.16)*o.fill,this.fillLight.color.copy(r.sun).lerp(r.skyBottom,.3);const l=1-r.night*.46;this.spriteLight.copy(r.sun).lerp(r.hemiSky,.42).lerp(ls,this.weatherBlend*.32).multiplyScalar(l);const c=Mt(this,bi,Dh).call(this,e,this.tmpDir);this.discDir.copy(c),s&&this.shadowFocus.set(s.x,0,s.z),this.sunLight.position.copy(c).multiplyScalar(70).add(this.shadowFocus),this.sunLight.target.position.copy(this.shadowFocus),this.sunLight.target.updateMatrixWorld(),this.sky.setPalette({skyTop:r.skyTop,skyBottom:r.skyBottom,sun:r.sun,night:r.night,discDir:this.discDir,elapsed:this.time}),i&&this.sky.update(i.position),this.scene.fog.color.copy(r.fog),this.scene.fog.density=.0055+this.weatherBlend*.004,this.water.update(this.time,r),this.scenery.update(t,i),Mt(this,bi,Ih).call(this,t,s)}get halfExtent(){return Oe}get waterLevel(){return Jo}dispose(){this.scene.traverse(t=>{(t.isMesh||t.isPoints||t.isSprite)&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose()))})}}bi=new WeakSet,Ph=function(){const e=new t_(771),i=new Float32Array(420*3),s=new Float32Array(420);for(let l=0;l<420;l++)i[l*3]=e.range(-14,14),i[l*3+1]=e.range(0,16),i[l*3+2]=e.range(-14,14),s[l]=e.range(7,12);const r=new He;r.setAttribute("position",new $e(i,3));const a=new rh({color:"#d7ecf7",size:.09,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),o=new wd(r,a);return o.name="Rain",o.visible=!1,o.frustumCulled=!1,{points:o,speed:s,count:420}},Lh=function(t){const e=(t%be+be)%be,i=this.keyColors;let s=0;for(;s<i.length-2&&e>=i[s+1].t;)s++;const r=i[s],a=i[s+1],o=(e-r.t)/Math.max(1e-6,a.t-r.t),l=o*o*(3-2*o),c=this.palette;for(const[d,u]of Object.entries(Pc))c[u].copy(r[d]).lerp(a[d],l);c.sunIntensity=r.sunIntensity+(a.sunIntensity-r.sunIntensity)*l,c.hemiIntensity=r.hemiIntensity+(a.hemiIntensity-r.hemiIntensity)*l,c.night=r.night+(a.night-r.night)*l,c.waterShallow.copy(P_).lerp(c.skyBottom,.22),c.waterDeep.copy(L_).lerp(c.skyTop,.18);const h=1-c.night*.28;return c.waterShallow.multiplyScalar(h),c.waterDeep.multiplyScalar(h),c},Dh=function(t,e){const i=(t%be+be)%be;if(i>=960)return e.copy(D_);const s=Math.min(1,Math.max(0,i/960)),r=Math.PI*s;return e.set(Math.cos(r)*.92,Math.sin(r)*.9,-.3).normalize()},Ih=function(t,e){const i=this.weather.id==="drizzle"&&this.weatherBlend>.25,s=this.rain.points;if(s.visible=i,!i)return;s.material.opacity=.55*this.weatherBlend;const r=s.geometry.attributes.position.array,a=e?e.x:0,o=e?e.z:0;for(let l=0;l<this.rain.count;l++){const c=l*3+1;r[c]-=this.rain.speed[l]*t,r[c]<0&&(r[c]=14+Math.random()*4,r[l*3]=a+(Math.random()-.5)*26,r[l*3+2]=o+(Math.random()-.5)*26)}s.geometry.attributes.position.needsUpdate=!0,s.position.set(0,0,0)};const cr={morning:[261.63,329.63,392,523.25],day:[293.66,369.99,440,587.33],sunset:[220,261.63,329.63,392],night:[174.61,220,261.63,349.23]};var ys,vo;class U_{constructor(){Ti(this,ys);this.ctx=null,this.master=null,this.oscillators=[],this.gains=[],this.started=!1,this.muted=!1,this.phase="morning",this.volume=.055}start(){if(this.started){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=1e-4;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=1250,e.Q.value=.4,this.master.connect(e),e.connect(this.ctx.destination);const i=cr[this.phase]||cr.morning;for(let a=0;a<4;a++){const o=this.ctx.createOscillator();o.type=a%2===0?"sine":"triangle",o.frequency.value=i[a]/2,o.detune.value=(a-1.5)*4;const l=this.ctx.createGain();l.gain.value=.22,o.connect(l),l.connect(this.master),o.start(),this.oscillators.push(o),this.gains.push(l)}const s=this.ctx.createOscillator();s.frequency.value=.06;const r=this.ctx.createGain();r.gain.value=.03,s.connect(r),r.connect(this.master.gain),s.start(),this.lfo=s,this.started=!0,Mt(this,ys,vo).call(this,this.muted?1e-4:this.volume)}catch{this.started=!1}}setMuted(t){this.muted=!!t,Mt(this,ys,vo).call(this,this.muted?1e-4:this.volume)}setPhase(t){if(!t||t===this.phase){this.phase=t||this.phase;return}this.phase=t;const e=cr[t]||cr.morning;if(!this.ctx)return;const i=this.ctx.currentTime;this.oscillators.forEach((s,r)=>{s.frequency.setTargetAtTime((e[r]||e[e.length-1])/2,i,1.6)})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){if(!this.started){this.start();return}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}}ys=new WeakSet,vo=function(t){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t,e,.6)};const Lc=9.5,hr=14;var ni,Nh,Uh,Fh,Oh,Bh;class F_{constructor(t,e,i){Ti(this,ni);this.terrain=e,this.position=new I(t.x,e.groundY(t.x,t.z),t.z),this.yaw=Math.PI,this.targetYaw=this.yaw,this.moving=0,this.idleT=0,this.walkT=0,this.flip=!1,this.emoteT=0,this.frameName="idle",this.colliders=[],this.group=new Si,this.group.name="Player",this.atlas=i.get("protagonist"),this.billboard=new Ss(this.atlas,"idle",{height:sr.spriteHeight}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.shadow=Ms(.4,.34),this.group.position.copy(this.position),this.dust=Mt(this,ni,Nh).call(this),this.sprites=[this.billboard.material]}wave(){this.emoteT=1.4}update(t,e,i,s){const r=Math.min(1,Math.hypot(e.x,e.z)),a=i||this.terrain;if(this.moving+=(r-this.moving)*Math.min(1,t*10),this.idleT+=t,this.emoteT>0&&(this.emoteT=Math.max(0,this.emoteT-t)),r>.02){const l=sr.speed*r,c=e.x/(r||1)*l*t,h=e.z/(r||1)*l*t,d=this.canStand(a,this.position.x+c,this.position.z);d&&(this.position.x+=c);const u=this.canStand(a,this.position.x,this.position.z+h);u&&(this.position.z+=h),!d&&!u&&this.canStand(a,this.position.x+c*.5,this.position.z+h*.5)&&(this.position.x+=c*.5,this.position.z+=h*.5),this.targetYaw=Math.atan2(e.x,e.z),this.walkT+=t;const f=Math.floor(this.walkT*Lc*1.5);f!==this.lastStep&&(this.lastStep=f,Mt(this,ni,Uh).call(this,this.position.x,this.position.y,this.position.z,{x:e.x/(r||1),z:e.z/(r||1)}))}this.position.y+=(a.groundY(this.position.x,this.position.z)-this.position.y)*Math.min(1,t*14);let o=this.targetYaw-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*Math.min(1,t*sr.turnLerp),Mt(this,ni,Oh).call(this,r),Mt(this,ni,Bh).call(this,s),Mt(this,ni,Fh).call(this,t)}canStand(t,e,i){if(!t.isWalkable(e,i))return!1;for(let s=0;s<this.colliders.length;s++){const r=this.colliders[s],a=e-r.x,o=i-r.z,l=r.r+sr.radius;if(a*a+o*o<l*l)return!1}return!0}teleport(t,e,i){const s=i||this.terrain;this.position.set(t,s.groundY(t,e),e),this.group.position.copy(this.position),this.shadow.position.set(t,this.position.y+.02,e)}}ni=new WeakSet,Nh=function(){const t=new ws(1,10);t.rotateX(-Math.PI/2);const e=new pn({color:"#fff8e6",transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}),i=new Ed(t,e,hr);i.name="PlayerDust",i.frustumCulled=!1,i.renderOrder=3,this.dustParts=Array.from({length:hr},()=>({x:0,y:-99,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1})),this.dustCursor=0;const s=new Kt().makeScale(0,0,0);for(let r=0;r<hr;r++)i.setMatrixAt(r,s);return i.instanceMatrix.needsUpdate=!0,i},Uh=function(t,e,i,s){const r=this.dustParts[this.dustCursor];this.dustCursor=(this.dustCursor+1)%hr,r.x=t+(Math.random()-.5)*.16,r.y=e+.03,r.z=i+(Math.random()-.5)*.16,r.vx=-s.x*.5+(Math.random()-.5)*.35,r.vz=-s.z*.5+(Math.random()-.5)*.35,r.vy=.2+Math.random()*.16,r.max=.4+Math.random()*.2,r.life=r.max,r.size=.06+Math.random()*.05},Fh=function(t){const e=new Kt,i=new I,s=new un,r=new I;for(let a=0;a<this.dustParts.length;a++){const o=this.dustParts[a];if(o.life<=0){e.makeScale(0,0,0),this.dust.setMatrixAt(a,e);continue}o.life=Math.max(0,o.life-t);const l=1-o.life/o.max;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.vy-=.35*t,o.vx*=1-t*2.2,o.vz*=1-t*2.2;const c=o.size*(.55+l*1.15)*Math.min(1,(1-l)*1.9);i.set(o.x,o.y,o.z),r.set(c,c,c),e.compose(i,s,r),this.dust.setMatrixAt(a,e)}this.dust.instanceMatrix.needsUpdate=!0},Oh=function(t){if(this.emoteT>0){this.frameName=this.emoteT>.85?"wave":"idle",this.billboard.setFrame(this.frameName,!1);return}if(t>.06){const e=Math.floor(this.walkT*Lc)%4,i=Math.abs(Math.sin(this.yaw)),s=Math.abs(Math.cos(this.yaw));let r,a=!1;i>s*1.02?(r=`side${e+1}`,a=this.yaw>0):r=this.yaw>Math.PI/2||this.yaw<-Math.PI/2?`back${e+1}`:`front${e+1}`,this.frameName=r,this.billboard.setFrame(r,a)}else this.frameName!=="idle"&&(this.frameName="idle",this.billboard.setFrame("idle",!1))},Bh=function(t){this.group.position.set(this.position.x,this.position.y,this.position.z),t&&this.billboard.faceCamera(t),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z)};const O_=7,B_=.85;var qi,zh,Mr;class z_{constructor(t,e,i){Ti(this,qi);this.kind="cat",this.id=t.id,this.name=t.name,this.terrain=e,this.home=new At(t.x,t.z),this.position=new I(t.x,e.groundY(t.x,t.z),t.z),this.height=t.height||.9,this.atlas=i.get(t.set||t.id),this.group=new Si,this.group.name=`Cat_${t.id}`,this.group.position.copy(this.position),this.billboard=new Ss(this.atlas,"sit",{height:this.height}),this.group.add(this.billboard.mesh),this.body=this.billboard.mesh,this.body.userData.actor=this,this.group.userData.actor=this,this.shadow=Ms(.24,.3),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=Ch(.26),this.heart.position.set(0,this.height*1.1,0),this.group.add(this.heart),this.state="idle",this.stateT=1+Math.random()*2,this.target=null,this.walkT=Math.random()*2,this.hop=0,this.heartT=0,this.pets=0,this.yaw=Math.random()*Math.PI*2,this.frameName="sit",this.restPose="sit",this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}pet(){this.hop=1,this.heartT=1.4,this.pets+=1,this.state="happy",this.stateT=1.2,this.billboard.setFrame("happy"),this.frameName="happy"}update(t,e){if(this.stateT-=t,this.state==="walk"&&this.target){const a=this.target.x-this.position.x,o=this.target.y-this.position.z,l=Math.hypot(a,o);if(l<.12)this.target=null,Mt(this,qi,Mr).call(this);else{const c=a/l,h=o/l,d=Math.min(l,B_*t),u=this.position.x+c*d,f=this.position.z+h*d;this.terrain.isWalkable(u,f)?(this.position.x=u,this.position.z=f):(this.target=null,Mt(this,qi,Mr).call(this)),this.yaw=Math.atan2(c,h),this.walkT+=t;const _=Math.floor(this.walkT*O_)%4,y=Math.abs(c),m=Math.abs(h);let p;y>m*1.05?p=`${c<0?"left":"right"}${_+1}`:p=`${h>0?"front":"back"}${_+1}`,p!==this.frameName&&(this.frameName=p,this.billboard.setFrame(p))}}else this.stateT<=0&&(Math.random()<.62?Mt(this,qi,zh).call(this):Mt(this,qi,Mr).call(this));this.state==="happy"&&this.stateT<=0&&(this.state="rest",this.stateT=1.8,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);const i=this.terrain.groundY(this.position.x,this.position.z);this.position.y+=(i-this.position.y)*Math.min(1,t*12);let s=0;this.hop>0&&(this.hop=Math.max(0,this.hop-t*1.5),s=Math.sin((1-this.hop)*Math.PI)*.22),this.group.position.set(this.position.x,this.position.y+s,this.position.z),e&&this.billboard.faceCamera(e),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const r=1-s*.8;if(this.shadow.scale.set(r,1,r),this.heartT>0){this.heartT=Math.max(0,this.heartT-t);const a=1-this.heartT/1.4;this.heart.visible=!0,this.heart.position.set(0,this.height*1.05+a*.55,0),this.heart.material.opacity=Math.min(1,this.heartT*1.8);const o=this.height*.3+a*this.height*.18;this.heart.scale.set(o,o,1)}else this.heart.visible&&(this.heart.visible=!1)}}qi=new WeakSet,zh=function(){for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,i=1.2+Math.random()*3.4,s=this.home.x+Math.cos(e)*i,r=this.home.y+Math.sin(e)*i;if(this.terrain.isWalkable(s,r)){this.target=new At(s,r),this.state="walk";return}}this.state="idle",this.stateT=1.5},Mr=function(){const t=["sit","loaf","groom","sit","loaf"];this.restPose=t[Math.floor(Math.random()*t.length)],this.state="rest",this.stateT=2.6+Math.random()*3.4,this.billboard.setFrame(this.restPose),this.frameName=this.restPose};const G_=["idle1","idle2","idle3","idle4"],k_=["smile1","smile2","smile3","smile4"],H_=["joy1","joy2","joy3","joy4"];class V_{constructor(t,e,i){this.kind="ditto",this.id=t.id,this.name=t.name,this.flavor=t.flavor||"",this.variant=t.variant||"basic",this.isBasic=this.variant==="basic",this.discovered=!1,this.terrain=e,this.height=t.height||.8,this.position=new I(t.x,e.groundY(t.x,t.z),t.z),this.group=new Si,this.group.name=`Ditto_${t.id}`,this.group.position.copy(this.position),this.atlas=i.get(this.isBasic?"ditto_basic":"disguises"),this.billboard=new Ss(this.atlas,this.isBasic?"idle1":this.variant,{height:this.height,exact:!this.isBasic}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.group.userData.actor=this,this.hitMesh=this.mesh,this.shadow=Ms(this.height*.46,.26),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=Ch(.24),this.heart.position.set(0,this.height*1.05,0),this.group.add(this.heart),this.ring=v_(this.height*.46),this.ring.position.y=.04,this.ring.visible=!1,this.group.add(this.ring),this.t=Math.random()*6.28,this.near=!1,this.reactT=0,this.hop=0,this.joy=0,this.frameIdx=0,this.frameT=0,this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}setNear(t){this.near=t}markDiscovered(){this.discovered=!0,this.joy=3.2,this.hop=1,this.reactT=1}interact(){this.reactT=1.4,this.hop=1}update(t,e,i){if(this.t+=t,this.joy>0&&(this.joy=Math.max(0,this.joy-t)),this.reactT>0&&(this.reactT=Math.max(0,this.reactT-t)),this.frameT+=t,this.isBasic){const h=this.joy>0?H_:this.near||this.reactT>0?k_:G_,d=this.joy>0?7:3.2;this.frameT>1/d&&(this.frameT=0,this.frameIdx=(this.frameIdx+1)%4);const u=h[this.frameIdx];this.billboard.frame!==this.atlas.frames.get(u)&&this.billboard.setFrame(u)}else this.frameT>2.4&&Math.random()<.5&&(this.frameT=0,this.billboard.setFrame(this.variant));const s=1+Math.sin(this.t*1.7)*(this.isBasic?.035:.018);this.hop>0&&(this.hop=Math.max(0,this.hop-t*2.2));const r=this.hop>0?Math.sin((1-this.hop)*Math.PI)*this.height*.22:0,a=this.reactT>0?Math.sin(this.t*26)*.06*this.reactT:0;this.group.position.set(this.position.x,this.position.y+r,this.position.z),this.billboard.mesh.scale.set(s+a*.3,s-a*.3,1),i&&this.billboard.faceCamera(i),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-r*.7;this.shadow.scale.set(o,1,o);const l=this.near&&!this.discovered?.34:0,c=this.ring.material;if(c.opacity+=(l-c.opacity)*Math.min(1,t*6),this.ring.visible=c.opacity>.01,this.ring.visible){const h=1+Math.sin(this.t*2.4)*.06;this.ring.scale.set(h,1,h),this.ring.rotation.y+=t*.4}if(this.reactT>0||this.joy>0){const h=this.joy>0?this.joy/3.2:this.reactT/1.4;this.heart.visible=!0;const d=1-Math.min(1,h);this.heart.position.set(0,this.height*(1+d*.7),0),this.heart.material.opacity=Math.min(1,h*2.2);const u=this.height*.3+d*this.height*.14;this.heart.scale.set(u,u,1)}else this.heart.visible&&(this.heart.visible=!1);e&&(this.near=this.distanceTo(e)<3.8)}}function Q(n,t={},...e){const i=document.createElement(n);for(const[s,r]of Object.entries(t||{}))r!=null&&(s==="class"?i.className=r:s==="text"?i.textContent=r:s==="style"&&typeof r=="object"?Object.assign(i.style,r):s==="dataset"&&typeof r=="object"?Object.assign(i.dataset,r):s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):i.setAttribute(s,r));for(const s of e.flat(3))s==null||s===!1||i.append(s.nodeType?s:document.createTextNode(String(s)));return i}function W_(n){for(;n.firstChild;)n.removeChild(n.firstChild)}var Ke,xo,Gh,kh,Sr;class X_{constructor(t){Ti(this,Ke);this.zone=Q("div",{class:"joystick-zone"}),this.home=Q("div",{class:"joystick-home"},Q("span",{},"MOVE")),this.base=Q("div",{class:"joystick-base"},Q("div",{class:"joystick-knob"})),this.knob=this.base.firstChild,this.zone.append(this.home,this.base),t.append(this.zone),this.radius=52,this.deadZone=.14,this.vector={x:0,y:0},this.active=!1,this.enabled=!0,this.pointerId=null,this.origin={x:0,y:0},this.zone.addEventListener("pointerdown",e=>Mt(this,Ke,Gh).call(this,e)),this.zone.addEventListener("pointermove",e=>Mt(this,Ke,kh).call(this,e)),this.zone.addEventListener("pointerup",e=>Mt(this,Ke,Sr).call(this,e)),this.zone.addEventListener("pointercancel",e=>Mt(this,Ke,Sr).call(this,e)),this.zone.addEventListener("lostpointercapture",e=>Mt(this,Ke,Sr).call(this,e)),this.zone.addEventListener("contextmenu",e=>e.preventDefault())}setEnabled(t){this.enabled=t,t||this.reset(),this.zone.style.opacity=t?"1":"0.35"}reset(){const t=this.pointerId;this.pointerId=null,this.active=!1,this.vector.x=0,this.vector.y=0,this.base.classList.remove("active"),this.home.style.opacity="0.85",this.knob.style.transform="translate(0px, 0px)";try{t!==null&&this.zone.hasPointerCapture&&this.zone.hasPointerCapture(t)&&this.zone.releasePointerCapture(t)}catch{}}}Ke=new WeakSet,xo=function(t){const e=this.zone.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},Gh=function(t){if(!this.enabled||this.pointerId!==null)return;t.preventDefault(),this.pointerId=t.pointerId,this.active=!0;const e=Mt(this,Ke,xo).call(this,t);this.origin=e,this.base.style.left=`${e.x}px`,this.base.style.top=`${e.y}px`,this.base.classList.add("active"),this.home.style.opacity="0",this.knob.style.transform="translate(0px, 0px)",this.vector.x=0,this.vector.y=0;try{this.zone.setPointerCapture(t.pointerId)}catch{}},kh=function(t){if(this.pointerId!==t.pointerId||!this.active)return;t.preventDefault();const e=Mt(this,Ke,xo).call(this,t);let i=e.x-this.origin.x,s=e.y-this.origin.y;const r=Math.hypot(i,s);r>this.radius&&(i=i/r*this.radius,s=s/r*this.radius),this.knob.style.transform=`translate(${i.toFixed(1)}px, ${s.toFixed(1)}px)`;let a=i/this.radius,o=s/this.radius;const l=Math.hypot(a,o);if(l<this.deadZone)a=0,o=0;else{const c=(l-this.deadZone)/(1-this.deadZone);a=a/l*c,o=o/l*c}this.vector.x=a,this.vector.y=o},Sr=function(t){this.pointerId!==null&&t.pointerId!==void 0&&t.pointerId!==this.pointerId||this.reset()};class q_{constructor(t){this.container=Q("div",{class:"toasts"}),t.append(this.container)}show(t,e=2600){for(;this.container.children.length>=3;)this.container.firstChild.remove();const i=Q("div",{class:"toast"},t);this.container.append(i);const s=window.setTimeout(()=>{i.classList.add("out"),window.setTimeout(()=>i.remove(),380)},e);return i.addEventListener("animationend",()=>{i.classList.contains("out")&&window.clearTimeout(s)}),i}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}const Y_=[{id:"bag",icon:"🎒",label:"가방"},{id:"codex",icon:"📔",label:"도감"},{id:"build",icon:"🏗️",label:"건축"},{id:"rank",icon:"🌱",label:"랭크"}];class $_{constructor(t,e={}){this.handlers=e,this.container=Q("div",{class:"hud-root hidden"}),t.append(this.container),this.phIcon=Q("span",{},"🌅"),this.phLabel=Q("span",{},"아침"),this.wxLabel=Q("span",{},"맑음"),this.dayLabel=Q("span",{class:"day"},"Day 1"),this.clockLabel=Q("span",{class:"clock"},"00:00"),this.speedTag=Q("span",{class:"speed hidden"},"10×"),this.pill=Q("div",{class:"pill"},this.phIcon,this.phLabel,Q("span",{class:"sep"},"·"),this.wxLabel,Q("span",{class:"sep"},"·"),this.dayLabel,Q("span",{class:"sep"},"·"),this.clockLabel,this.speedTag),this.muteBtn=Q("button",{class:"icon-btn",type:"button","aria-label":"음소거 토글",onclick:()=>this.handlers.onMute?.()},"🔊"),this.pauseBtn=Q("button",{class:"icon-btn",type:"button","aria-label":"일시정지 및 설정",onclick:()=>this.handlers.onPause?.()},"⏸"),this.top=Q("div",{class:"hud-top"},this.pill,Q("div",{class:"hud-controls"},this.muteBtn,this.pauseBtn)),this.actionIcon=Q("span",{class:"ico"},"✋"),this.actionText=Q("span",{class:"txt"},"둘러보기"),this.actionBtn=Q("button",{class:"action-btn",type:"button",disabled:"disabled","aria-label":"상황 액션",onclick:()=>this.handlers.onAction?.()},this.actionIcon,this.actionText),this.quickbar=Q("div",{class:"quickbar"});for(const i of Y_){const s=Q("button",{class:"quick",type:"button",onclick:()=>this.handlers.onQuick?.(i.id)},Q("span",{class:"ico"},i.icon),Q("span",{},i.label));this.quickbar.append(s)}this.joystick=new X_(this.container),this.toastView=new q_(this.container),this.glOverlay=Q("div",{class:"gl-overlay"},Q("div",{class:"box"},Q("h3",{},"그래픽을 다시 준비하고 있어요"),Q("p",{},"잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요."))),this.container.append(this.top,this.actionBtn,this.quickbar,this.glOverlay),this.lastPill=""}show(){this.container.classList.remove("hidden")}hide(){this.container.classList.add("hidden")}setTime({icon:t,label:e,weatherIcon:i,weatherLabel:s,day:r,clock:a,speed:o}){const l=`${t}${e}${i}${s}${r}${a}${o}`;l!==this.lastPill&&(this.lastPill=l,this.phIcon.textContent=t,this.phLabel.textContent=e,this.wxLabel.textContent=`${i} ${s}`,this.dayLabel.textContent=`Day ${r}`,this.clockLabel.textContent=a,o&&o!==1?(this.speedTag.textContent=`${o}×`,this.speedTag.classList.remove("hidden")):this.speedTag.classList.add("hidden"))}setAction({active:t,icon:e="✋",label:i="둘러보기"}){t===this.actionBtn.__active&&i===this.actionBtn.__label||(this.actionBtn.__active=t,this.actionBtn.__label=i,this.actionIcon.textContent=e,this.actionText.textContent=i,t?(this.actionBtn.removeAttribute("disabled"),this.actionBtn.classList.add("enabled")):(this.actionBtn.setAttribute("disabled","disabled"),this.actionBtn.classList.remove("enabled")))}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊",this.muteBtn.setAttribute("aria-pressed",t?"true":"false")}toast(t,e=2600){return this.toastView.show(t,e)}setContextLost(t){this.glOverlay.classList.toggle("on",!!t)}}var bs,Mo;class K_{constructor(t,{hasSave:e=!1,onContinue:i,onNew:s}={}){Ti(this,bs);this.onContinue=i,this.onNew=s,this.hasSave=e,this.busy=!1,this.progressBar=Q("i"),this.progressWrap=Q("div",{class:"title-progress"},this.progressBar),this.continueBtn=e?Q("button",{class:"btn primary",type:"button",disabled:"disabled"},"이어하기"):null,this.newBtn=Q("button",{class:`btn ${e?"ghost":"primary"}`,type:"button",disabled:"disabled"},"새로 시작"),this.continueBtn&&this.continueBtn.addEventListener("click",()=>Mt(this,bs,Mo).call(this,"continue")),this.newBtn.addEventListener("click",()=>Mt(this,bs,Mo).call(this,"new")),this.hint=Q("div",{class:"title-hint"},e?"저장된 섬이 있어요 — 이어서 걸어볼까요?":"저장된 섬이 없어요 — 새 섬을 열어 볼까요?"),this.el=Q("div",{class:"title-screen"},Q("div",{class:"title-badge"},"PHASE 1 · HD-2D 도트"),Q("div",{class:"title-panel"},Q("p",{class:"title-eyebrow"},"보경이를 위한 작은 섬"),Q("h1",{class:"title-heading"},"어설픈 메타몽 섬"),Q("p",{class:"title-sub"},"눈만은 못 숨기는 메타몽들과 고양이들이 모여든 비밀 낙원. 오늘도 고생 많았어요 — 여기선 아무것도 안 급해도 돼요."),this.progressWrap,Q("div",{class:"title-actions"},this.continueBtn,this.newBtn),this.hint),Q("div",{class:"title-version"},"GDD v1.6 · Phase 1 · HD-2D")),t.append(this.el)}setProgress(t){const e=Math.max(.06,Math.min(1,t));this.progressBar.style.width=`${Math.round(e*100)}%`,e>=1&&this.setReady(!0)}setReady(t){this.busy||(this.continueBtn&&(t?this.continueBtn.removeAttribute("disabled"):this.continueBtn.setAttribute("disabled","disabled")),t?this.newBtn.removeAttribute("disabled"):this.newBtn.setAttribute("disabled","disabled"),this.progressWrap.style.opacity=t?"0":"1")}hide(){this.el.classList.add("hidden")}show(){this.el.classList.remove("hidden"),this.busy=!1,this.setReady(!1)}destroy(){this.el.remove()}}bs=new WeakSet,Mo=function(t){if(this.busy)return;this.busy=!0,this.hint.textContent=t==="continue"?"저장된 섬으로 돌아가는 중…":"새로운 섬을 여는 중…";const e=t==="continue"?this.onContinue:this.onNew;e&&e(t)};class Z_{constructor(t){this.card=Q("div",{class:"modal-card"}),this.backdrop=Q("div",{class:"modal"},this.card),t.append(this.backdrop),this.isOpen=!1,this.onClose=null,this.backdrop.addEventListener("pointerdown",e=>{e.target===this.backdrop&&this.close()})}open(t){const{title:e,subtitle:i="",body:s="",actions:r=[],onClose:a=null,closable:o=!0}=t;this.onClose=a,W_(this.card),this.card.append(Q("div",{class:"modal-head"},Q("div",{},Q("h2",{class:"modal-title"},e),i?Q("p",{class:"modal-sub"},i):null),o?Q("button",{class:"modal-close",type:"button","aria-label":"닫기",onclick:()=>this.close()},"✕"):null));const l=Q("div",{class:"modal-body"});if(typeof s=="string"?l.append(document.createTextNode(s)):s instanceof Node?l.append(s):Array.isArray(s)&&s.forEach(c=>c&&l.append(c)),this.card.append(l),r.length){const c=Q("div",{class:"modal-actions"});for(const h of r){const d=Q("button",{class:`btn ${h.kind||""}`,type:"button"},h.label);d.addEventListener("click",()=>{h.onClick&&h.onClick()}),c.append(d)}this.card.append(c)}this.backdrop.classList.add("open"),this.isOpen=!0,this.card.scrollTop=0}close(){if(!this.isOpen)return;this.backdrop.classList.remove("open"),this.isOpen=!1;const t=this.onClose;this.onClose=null,t&&t()}}class J_{constructor(t,e){this.container=Q("div",{class:"landmark-layer"}),t.append(this.container),this.items=e.map(i=>{const s=Q("div",{class:"landmark-pill"},Q("span",{class:"lm-ico"},i.icon),Q("span",{class:"lm-name"},i.name),Q("span",{class:"lm-day"},`${i.day}일차 복구`));return this.container.append(s),{site:i,el:s,x:i.x,y:i.y+i.markerY+.55,z:i.z,opacity:-1}}),this.v=new I}setVisible(t){this.container.style.opacity=t?"1":"0"}update(t,e){if(!e){this.container.style.opacity!=="0"&&(this.container.style.opacity="0");return}this.container.style.opacity="1";const i=window.innerWidth,s=window.innerHeight,r=t.position;for(const a of this.items){this.v.set(a.x,a.y,a.z);const o=r.distanceTo(this.v);this.v.project(t);const l=this.v.z>1,c=(this.v.x*.5+.5)*i,h=(-this.v.y*.5+.5)*s,d=h<92||h>s-96||c<24||c>i-24,u=l||o>34||d?0:Math.min(1,Math.max(0,(34-o)/12))*.95;a.opacity+=(u-a.opacity)*.18,Math.abs(u-a.opacity)<.02&&(a.opacity=u);const f=a.el;if(a.opacity<=.02){f.style.display!=="none"&&(f.style.display="none");continue}f.style.display==="none"&&(f.style.display="flex"),f.style.opacity=a.opacity.toFixed(2),f.style.transform=`translate(-50%, -50%) translate(${c.toFixed(1)}px, ${h.toFixed(1)}px)`}}}let ur=null;function Q_(){try{return typeof indexedDB<"u"&&indexedDB!==null}catch{return!1}}function Qo(){return Q_()?ur||(ur=new Promise((n,t)=>{let e;try{e=indexedDB.open(Ie.dbName,1)}catch(i){t(i);return}e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains(Ie.store)||i.createObjectStore(Ie.store)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error||new Error("IndexedDB open error")),e.onblocked=()=>t(new Error("IndexedDB blocked"))}),ur):Promise.reject(new Error("IndexedDB not available"))}async function j_(n){const t=await Qo();return new Promise((e,i)=>{const r=t.transaction(Ie.store,"readonly").objectStore(Ie.store).get(n);r.onsuccess=()=>e(r.result??null),r.onerror=()=>i(r.error)})}async function tv(n,t){const e=await Qo();return new Promise((i,s)=>{const r=e.transaction(Ie.store,"readwrite");r.objectStore(Ie.store).put(t,n),r.oncomplete=()=>i(!0),r.onerror=()=>s(r.error),r.onabort=()=>s(r.error||new Error("transaction aborted"))})}async function ev(n){const t=await Qo();return new Promise((e,i)=>{const s=t.transaction(Ie.store,"readwrite");s.objectStore(Ie.store).delete(n),s.oncomplete=()=>e(!0),s.onerror=()=>i(s.error)})}const ya=`${Ie.dbName}:${Ie.key}`;class iv{constructor(){this.mode="unknown",this.lastError=null}async load(){try{const t=await j_(Ie.key);if(t)return this.mode="idb",t;this.mode="idb"}catch(t){this.lastError=String(t&&t.message?t.message:t),this.mode="local"}try{const t=localStorage.getItem(ya);if(t)return this.mode=this.mode==="unknown"?"local":this.mode,JSON.parse(t)}catch(t){this.lastError=String(t)}return null}async hasSave(){return!!await this.load()}async save(t){try{return await tv(Ie.key,t),this.mode="idb",!0}catch(e){this.lastError=String(e&&e.message?e.message:e),this.mode="local";try{return localStorage.setItem(ya,JSON.stringify(t)),!0}catch(i){return this.lastError=String(i),!1}}}async clear(){try{await ev(Ie.key)}catch(t){this.lastError=String(t)}try{localStorage.removeItem(ya)}catch{}}}const yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Yn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nv=new Ko(-1,1,1,-1,0,1);class sv extends He{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const rv=new sv;class jo{constructor(t){this._mesh=new Ee(rv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,nv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hh extends Yn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Hn.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dc extends Yn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class av extends Yn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ov{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ge}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hh(yr),this.copyPass.material.blending=an,this.timer=new Wd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dc!==void 0&&(a instanceof Dc?i=!0:a instanceof av&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lv extends Yn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ft}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const cv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vn extends Yn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,a,{type:Ge,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ke(r,a,{type:Ge,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new ke(r,a,{type:Ge,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=cv;this.highPassUniforms=Hn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hn.clone(yr.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,premultipliedAlpha:!0,blending:ba,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ft,this._oldClearAlpha=1,this._basic=new pn,this._fsQuad=new jo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Vn.BlurDirectionX=new At(1,0);Vn.BlurDirectionY=new At(0,1);const dr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class hv extends Yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Hn.clone(dr.uniforms),this.material=new hh({name:dr.name,uniforms:this.uniforms,vertexShader:dr.vertexShader,fragmentShader:dr.fragmentShader}),this._fsQuad=new jo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ao?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Po&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const On={bloomThreshold:.86,bloomStrength:.3,bloomRadius:.4,saturation:1.07,contrast:.2,vignette:.28},uv={uniforms:{tDiffuse:{value:null},uSaturation:{value:On.saturation},uContrast:{value:On.contrast},uVignette:{value:On.vignette}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uVignette;

    void main() {
      vec4 src = texture2D( tDiffuse, vUv );
      vec3 col = src.rgb;

      // 채도 살짝 올리기
      float l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
      col = mix( vec3( l ), col, uSaturation );

      // 부드러운 S자 커브 (그림자 안 죽이고 하이라이트만 살짝)
      vec3 s = col * col * ( 3.0 - 2.0 * col );
      col = mix( col, s, uContrast );

      // 은은한 비네트
      vec2 d = vUv - 0.5;
      float vig = 1.0 - dot( d, d ) * uVignette * 2.0;
      col *= clamp( vig, 0.0, 1.0 );

      // 아주 옅은 종이 그레인 (밴딩 방지)
      float g = fract( sin( dot( vUv * vec2( 1.0, 1.3 ) + uVignette, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
      col += ( g - 0.5 ) * 0.008;

      gl_FragColor = vec4( col, src.a );
    }
  `};function Ic(n,t,e){const i=n.getDrawingBufferSize(new At),s=new ke(Math.max(1,i.x),Math.max(1,i.y),{type:Ge,samples:4});s.texture.name="MetamongPostRT";const r=new ov(n,s);r.setPixelRatio(n.getPixelRatio()),r.setSize(window.innerWidth,window.innerHeight);const a=new lv(t,e);r.addPass(a);const o=new Vn(new At(window.innerWidth,window.innerHeight),On.bloomStrength,On.bloomRadius,On.bloomThreshold);r.addPass(o),r.addPass(new hv);const l=new Hh(uv);r.addPass(l);let c={calls:0,triangles:0};const h=a.render.bind(a);return a.render=(d,u,f,_,y)=>{h(d,u,f,_,y),c={calls:d.info.render.calls,triangles:d.info.render.triangles}},{composer:r,bloom:o,grade:l,renderPass:a,get sceneStats(){return c},setSize(d,u){r.setPixelRatio(n.getPixelRatio()),r.setSize(d,u)},render(){r.render()},dispose(){r.dispose(),s.dispose()}}}const dv=["protagonist","somi","ongi","ditto_basic","disguises","buildings","nature"],fv=new Bd;function pv(n){return n.colorSpace=me,n.magFilter=le,n.minFilter=le,n.generateMipmaps=!1,n.wrapS=ii,n.wrapT=ii,n.anisotropy=1,n}async function mv(n){const t=new URL("sprites/",document.baseURI),e=await fetch(new URL(`${n}.json`,t).href);if(!e.ok)throw new Error(`스프라이트 매니페스트 없음: ${n}.json (${e.status})`);const i=await e.json(),s=pv(await fv.loadAsync(new URL(`${n}_sheet.png`,t).href)),r=new Map;for(const a of i.frames)r.set(a.name,a);return{set:n,texture:s,frames:r,cell:i.cell,cols:i.grid[0],rows:i.grid[1],notes:i.notes||[]}}async function gv(){const n=await Promise.all(dv.map(mv)),t=new Map;for(const e of n)t.set(e.set,e);return t}const Nc={muted:!1,timeScale:1,fps30:!1},Uc=[1,10,60];var xt,Vh,Wh,Xh,qh,Yh,$h,Kh,So,Zh,br,Jh,Qh,jh,tu,eu,iu,yo,nu,su,ru,bo,au,ou,lu,Er,Nn,cu;class _v{constructor(t,e){Ti(this,xt);this.canvas=t,this.uiRoot=e,this.mode="boot",this.state={day:1,elapsed:120,discovered:[],settings:{...Nc}},this.saveStore=new iv,this.audio=new U_,this.saveData=null,this.hasSave=!1,this.lastSavedAt=0,this.keys=new Set,this.paused=!1,this.contextLost=!1,this.target=null,this.last=0,this.acc30=0,this.autosaveAcc=0,this.hudAcc=0,this.frames=0,this.fpsAcc=0,this.fps=0,this.stats={fps:0,calls:0,triangles:0,sceneCalls:0,sceneTriangles:0},this.titleAngle=0,this.lookAt=new I,this.tmpA=new I,this.tmpB=new I,this.raycaster=new qd,this.tap={x:0,y:0,t:0},this.title=null,this.hud=null,this.modal=null}async start(){this.atlases=await gv(),Mt(this,xt,Vh).call(this),Mt(this,xt,Wh).call(this),Mt(this,xt,Xh).call(this),Mt(this,xt,qh).call(this),Mt(this,xt,Yh).call(this),Mt(this,xt,$h).call(this),await Mt(this,xt,Kh).call(this),Mt(this,xt,tu).call(this)}async backToTitle(){this.modal.close(),await this.save(),this.mode="title",this.hasSave=!0,this.hud.hide(),this.hud.joystick.setEnabled(!1),Mt(this,xt,So).call(this),this.title&&this.title.setProgress(1)}interact(){if(this.mode!=="play"||this.modal.isOpen||this.paused)return;const t=this.target;if(!t){this.hud.toast("가까이에 살펴볼 게 없어요 — 돌멩이를 잘 보세요 ·‿·",1600);return}Mt(this,xt,bo).call(this,t)}toggleMute(){return this.state.settings.muted=!this.state.settings.muted,this.audio.setMuted(this.state.settings.muted),this.hud.setMuted(this.state.settings.muted),this.state.settings.muted}openPause(){if(this.mode!=="play"||this.modal.isOpen)return;const t=this.state.settings,e=xr(this.state.elapsed),i=Q("button",{class:`switch ${t.muted?"on":""}`,type:"button","aria-label":"음소거"});i.addEventListener("click",()=>{const h=this.toggleMute();i.classList.toggle("on",h)});const s=[],r=Q("div",{class:"seg"});for(const h of Uc){const d=Q("button",{type:"button",class:t.timeScale===h?"on":""},`${h}×`);d.addEventListener("click",()=>{this.state.settings.timeScale=h;for(const u of s)u.classList.remove("on");d.classList.add("on"),Mt(this,xt,Er).call(this)}),s.push(d),r.append(d)}const a=Q("button",{class:`switch ${t.fps30?"on":""}`,type:"button","aria-label":"30fps 절전"});a.addEventListener("click",()=>{this.state.settings.fps30=!this.state.settings.fps30,a.classList.toggle("on",this.state.settings.fps30)});const o=(h,d,u)=>Q("div",{class:"row"},Q("div",{},Q("div",{class:"label"},h),Q("div",{class:"hint"},d)),u),l=this.lastSavedAt?new Date(this.lastSavedAt).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"}):"아직 없음",c=Q("div",{},Q("div",{class:"section-label"},"지금 섬"),Q("div",{class:"row"},Q("div",{},Q("div",{class:"label"},`Day ${this.state.day} · ${e.label}`),Q("div",{class:"hint"},`도감 ${this.state.discovered.length}/${rn.length} · 고양이 ${this.cats.length}마리`)),Q("span",{class:"hint"},bc(this.state.elapsed))),Q("div",{class:"section-label"},"설정"),o("음소거","섬의 소리를 끕니다",i),o("시간 배속","20분 하루를 빨리 감아 조명 변화를 확인",r),o("30fps 절전","배터리와 발열을 아껴요",a),Q("div",{class:"section-label"},"저장"),Q("div",{class:"hint"},`자동 저장 · ${this.saveStore.mode==="idb"?"IndexedDB":"localStorage"} · 마지막 ${l}`));Mt(this,xt,Nn).call(this,{title:"잠깐 쉬는 중",subtitle:"모달이 열려 있는 동안 섬의 시간도 멈춰요",body:c,actions:[{label:"계속 걷기",kind:"primary",onClick:()=>this.modal.close()},{label:"타이틀로 돌아가기",kind:"ghost",onClick:()=>this.backToTitle()}],onClose:()=>this.save()})}openQuick(t){if(!(this.mode!=="play"||this.modal.isOpen)){if(t==="codex"){const e=this.state.discovered,i=Q("div",{class:"codex-grid"});for(const a of rn){const o=e.includes(a.id),l=Q("div",{class:`codex-thumb ${o?"":"locked"}`},o?"":"· ? ·");o&&a.thumb&&Mt(this,xt,cu).call(this,l,a.thumb),i.append(Q("div",{class:`codex-card ${o?"":"unknown"}`},l,Q("div",{class:"name"},o?a.name:"아직 못 찾음"),Q("div",{class:"meta"},o?a.flavor:"섬 어딘가에서 돌멩이인 척하고 있어요")))}const s=Math.round(e.length/rn.length*100),r=Q("div",{},Q("div",{class:"progress-line"},Q("i",{style:{width:`${s}%`}})),Q("div",{class:"hint"},`발견 ${e.length} / ${rn.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),Q("div",{class:"section-label"},"이번 섬의 도감"),i,Q("div",{class:"section-label"},"다음 단계"),Q("div",{class:"hint"},"시즌 1 도감 40종 전체와 도트 프리뷰는 Phase 3에서 열려요."));Mt(this,xt,Nn).call(this,{title:"메타몽 도감",subtitle:"점 눈 두 개만 남은 어설픈 위장들",body:r,actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}if(t==="build"){const e=Q("div",{});for(const i of Th)e.append(Q("div",{class:"site-item"},Q("div",{class:"site-ico"},i.icon),Q("div",{style:{flex:"1"}},Q("div",{class:"site-name"},i.name),Q("div",{class:"site-meta"},`${i.day}일차 복구 예정`)),Q("span",{class:"hint"},"복구 전")));Mt(this,xt,Nn).call(this,{title:"섬 건축",subtitle:"4단계 복구 부지가 섬에 자리잡고 있어요",body:Q("div",{},e,Q("div",{class:"section-label"},"다음 단계"),Q("div",{class:"hint"},"목제 울타리 배치와 BFS 경로 검사는 Phase 3에서 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}if(t==="bag"){const e=["통나무","가지","조약돌","생선","메타몽 젤리"];Mt(this,xt,Nn).call(this,{title:"가방",subtitle:"아직 비어 있어요",body:Q("div",{},Q("div",{class:"hint"},"Phase 2에서 채집·요리가 열리면 이 가방이 채워져요."),Q("div",{class:"section-label"},"Phase 2에서 열리는 재료"),...e.map(i=>Q("div",{class:"row"},Q("div",{class:"label"},i),Q("span",{class:"hint"},"— 준비 중")))),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}t==="rank"&&Mt(this,xt,Nn).call(this,{title:"생활 랭크",subtitle:"연습 · 0 EXP",body:Q("div",{},Q("div",{class:"progress-line"},Q("i",{style:{width:"8%"}})),Q("div",{class:"hint"},"채집 10 EXP · 낮 보너스 15 EXP · 요리/제작 25 EXP"),Q("div",{class:"section-label"},"승급 조건"),Q("div",{class:"hint"},"연습 → F (50) · F → E (200) · E → D (600)"),Q("div",{class:"section-label"},"다음 단계"),Q("div",{class:"hint"},"채집·요리·랭크 시스템은 Phase 2에서 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]})}}snapshot(){return{version:1,savedAt:Date.now(),day:this.state.day,elapsedSeconds:Math.round(this.state.elapsed*100)/100,elapsed:Math.round(this.state.elapsed*100)/100,playerPos:{x:+this.player.position.x.toFixed(3),y:+(this.player.position.y||0).toFixed(3),z:+this.player.position.z.toFixed(3)},player:{x:+this.player.position.x.toFixed(3),z:+this.player.position.z.toFixed(3),yaw:+this.player.yaw.toFixed(3)},discoveredDittos:[...this.state.discovered],discovered:[...this.state.discovered],settings:{...this.state.settings}}}async save(){if(this.mode==="boot")return!1;const t=this.snapshot(),e=await this.saveStore.save(t);return this.lastSavedAt=t.savedAt,this.lastSaveOk=e,e&&(this.hasSave=!0),e}}xt=new WeakSet,Vh=function(){const t=new k0({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=me,t.toneMapping=Ir,t.toneMappingExposure=1.28,t.shadowMap.enabled=!0,t.shadowMap.type=us,t.info.autoReset=!1,this.renderer=t,this.camera=new ci(_i.fov,window.innerWidth/window.innerHeight,.1,900),this.camera.position.set(0,28,48),this.onResize=()=>{const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/Math.max(1,i),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,i,!1),this.post&&this.post.setSize(e,i)},window.addEventListener("resize",this.onResize),window.visualViewport&&window.visualViewport.addEventListener("resize",this.onResize)},Wh=function(){this.world=new N_(this.atlases),this.scene=this.world.scene,this.player=new F_(sn,this.world.terrain,this.atlases),this.player.colliders=[...this.world.scenery.colliders,...rn.map(t=>({x:t.x,z:t.z,r:Math.max(.34,t.height*.42)})),...wc.map(t=>({x:t.x,z:t.z,r:.3}))],this.scene.add(this.player.group),this.scene.add(this.player.shadow),this.scene.add(this.player.dust),this.cats=wc.map(t=>new z_(t,this.world.terrain,this.atlases));for(const t of this.cats)this.scene.add(t.group),this.scene.add(t.shadow);this.dittos=rn.map(t=>new V_(t,this.world.terrain,this.atlases));for(const t of this.dittos)this.scene.add(t.group),this.scene.add(t.shadow);this.spriteMaterials=[...this.player.sprites,...this.cats.flatMap(t=>t.sprites),...this.dittos.flatMap(t=>t.sprites),...this.world.scenery.billboards.map(t=>t.material)],this.world.setWeather(Ma(this.state.day)),this.lookAt.set(sn.x,this.player.position.y+_i.lookHeight,sn.z)},Xh=function(){this.post=Ic(this.renderer,this.scene,this.camera)},qh=function(){this.hud=new $_(this.uiRoot,{onAction:()=>this.interact(),onMute:()=>this.toggleMute(),onPause:()=>this.openPause(),onQuick:t=>this.openQuick(t)}),this.hud.hide(),this.modal=new Z_(this.uiRoot),this.landmarkLabels=new J_(this.uiRoot,this.world.scenery.sites)},Yh=function(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.tap.x=e.clientX,this.tap.y=e.clientY,this.tap.t=performance.now(),this.audio.resume()}),t.addEventListener("pointerup",e=>Mt(this,xt,lu).call(this,e)),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),this.mode==="play"&&!this.modal.isOpen&&((e.code==="KeyE"||e.code==="Space")&&this.interact(),e.code==="Escape"&&this.openPause())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("gesturestart",e=>e.preventDefault())},$h=function(){document.addEventListener("visibilitychange",()=>{document.hidden?(this.save(),this.audio.suspend()):(this.last=performance.now(),this.audio.resume())}),window.addEventListener("pagehide",()=>this.save()),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.hud.setContextLost(!0),this.last=performance.now()},!1),this.canvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.hud.setContextLost(!1);try{this.post&&this.post.dispose()}catch{}this.post=Ic(this.renderer,this.scene,this.camera),this.post.setSize(window.innerWidth,window.innerHeight);const t=wh();this.scene.traverse(i=>{const s=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of s)r&&r.isMeshToonMaterial&&(r.gradientMap=t,r.needsUpdate=!0)});const e=this.world.sunLight.shadow;e.map&&e.map.dispose(),e.map=null,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(i=>{const s=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of s)if(r){r.needsUpdate=!0;for(const a of["map","alphaMap","gradientMap"])r[a]&&(r[a].needsUpdate=!0)}}),this.last=performance.now()},!1)},Kh=async function(){const t=await this.saveStore.load();t&&typeof t=="object"&&(this.saveData=t,this.hasSave=!0),Mt(this,xt,So).call(this),this.mode="title",Mt(this,xt,yo).call(this,.016);const e=performance.now(),i=()=>{const s=Math.min(1,(performance.now()-e)/720);this.title&&this.title.setProgress(s),s<1&&requestAnimationFrame(i)};requestAnimationFrame(i)},So=function(){this.title&&this.title.destroy(),this.title=new K_(this.uiRoot,{hasSave:this.hasSave,onContinue:()=>Mt(this,xt,br).call(this,!0),onNew:()=>Mt(this,xt,Zh).call(this)})},Zh=function(){if(this.title&&(this.title.busy=!1),!this.hasSave){Mt(this,xt,br).call(this,!1);return}this.modal.open({title:"새 섬을 열까요?",subtitle:"지금 저장된 섬은 사라져요",body:"저장된 Day·플레이 위치·도감 기록이 지워지고 Day 1 아침부터 다시 시작해요.",actions:[{label:"그대로 둘게요",kind:"ghost",onClick:()=>this.modal.close()},{label:"새로 시작",kind:"primary",onClick:async()=>{await this.saveStore.clear(),this.hasSave=!1,this.saveData=null,this.modal.close(),Mt(this,xt,br).call(this,!1)}}],onClose:()=>{this.title&&(this.title.busy=!1,this.title.hint.textContent="저장된 섬이 있어요 — 이어서 걸어볼까요?")}})},br=function(t){t&&this.saveData?Mt(this,xt,Qh).call(this,this.saveData):Mt(this,xt,Jh).call(this),this.mode="play",this.paused=!1,this.title&&this.title.hide(),this.hud.show(),this.hud.joystick.setEnabled(!0),this.hud.setMuted(this.state.settings.muted),this.audio.start(),this.audio.setMuted(this.state.settings.muted),this.audio.setPhase(xr(this.state.elapsed).id),this.world.setWeather(Ma(this.state.day)),Mt(this,xt,jh).call(this),Mt(this,xt,Er).call(this),this.hud.toast(t?`Day ${this.state.day} — 다시 만나서 반가워요 🌿`:"Day 1 — 섬에 도착했어요 🌿",2800),this.autosaveAcc=0,this.save()},Jh=function(){this.state.day=1,this.state.elapsed=120,this.state.discovered=[],this.state.settings={...Nc};for(const t of this.dittos)t.discovered=!1;this.player.teleport(sn.x,sn.z),this.player.yaw=Math.PI,this.player.targetYaw=Math.PI},Qh=function(t){const e=Number(t.day);this.state.day=Number.isFinite(e)&&e>=1?Math.min(3650,Math.floor(e)):1;const i=Number(t.elapsed);this.state.elapsed=Number.isFinite(i)?Math.max(0,Math.min(be-.01,i)):60,this.state.discovered=Array.isArray(t.discovered)?t.discovered.filter(l=>typeof l=="string"):[];const s=t.settings&&typeof t.settings=="object"?t.settings:{};this.state.settings={muted:!!s.muted,timeScale:Uc.includes(Number(s.timeScale))?Number(s.timeScale):1,fps30:!!s.fps30};const r=Number(t.player&&t.player.x),a=Number(t.player&&t.player.z);Number.isFinite(r)&&Number.isFinite(a)&&this.world.terrain.isWalkable(r,a)?this.player.teleport(r,a):this.player.teleport(sn.x,sn.z);const o=Number(t.player&&t.player.yaw);Number.isFinite(o)&&(this.player.yaw=o,this.player.targetYaw=o);for(const l of this.dittos)l.discovered=this.state.discovered.includes(l.id)},jh=function(){const t=this.player.position;this.camera.position.set(t.x+_i.offset.x,t.y+_i.offset.y,t.z+_i.offset.z),this.lookAt.set(t.x,t.y+_i.lookHeight,t.z),this.camera.lookAt(this.lookAt)},tu=function(){this.last=performance.now();const t=e=>{this.rafId=requestAnimationFrame(t);let i=(e-this.last)/1e3;if(this.last=e,(!Number.isFinite(i)||i<=0)&&(i=1/60),i=Math.min(i,.05),this.state.settings.fps30){if(this.acc30+=i,this.acc30<1/32)return;i=Math.min(this.acc30,.06),this.acc30=0}Mt(this,xt,eu).call(this,i)};this.rafId=requestAnimationFrame(t)},eu=function(t){const e=this.mode==="play"&&!this.paused&&!this.modal.isOpen&&!document.hidden;e&&(this.state.elapsed+=t*this.state.settings.timeScale,this.state.elapsed>=be&&(this.state.elapsed-=be,this.state.day+=1,this.world.setWeather(Ma(this.state.day)),this.hud.toast(`Day ${this.state.day} — 새로운 하루가 시작됐어요`,3e3)));const i=Mt(this,xt,su).call(this,e);this.player.update(t,i,this.world.terrain,this.camera);for(const s of this.cats)s.update(t,this.camera);for(const s of this.dittos)s.update(t,this.player.position,this.camera);for(const s of this.spriteMaterials)s.color.copy(this.world.spriteLight);if(this.mode==="title"?Mt(this,xt,yo).call(this,t):Mt(this,xt,nu).call(this,t),this.world.update(t,this.state.elapsed,this.camera,this.player.position),this.landmarkLabels.update(this.camera,this.mode==="play"),this.mode==="play"&&(Mt(this,xt,ru).call(this),this.hudAcc+=t,this.hudAcc>.14&&(this.hudAcc=0,Mt(this,xt,Er).call(this))),e){this.autosaveAcc+=t;const s=this.state.settings.timeScale>1?Math.max(2,Ie.intervalSeconds):Ie.intervalSeconds;this.autosaveAcc>=s&&(this.autosaveAcc=0,this.save())}this.contextLost||(this.renderer.info.reset(),this.post.render()),Mt(this,xt,iu).call(this,t)},iu=function(t){if(this.frames+=1,this.fpsAcc+=t,this.fpsAcc>=.5){this.fps=Math.round(this.frames/this.fpsAcc);const e=this.renderer.info.render,i=this.post?this.post.sceneStats:e;this.stats.fps=this.fps,this.stats.calls=e.calls,this.stats.triangles=e.triangles,this.stats.sceneCalls=i.calls,this.stats.sceneTriangles=i.triangles,this.frames=0,this.fpsAcc=0}},yo=function(t){this.titleAngle+=t*.09;const e=40,i=Math.cos(this.titleAngle)*e,s=Math.sin(this.titleAngle)*e,r=16+Math.sin(this.titleAngle*.8)*.9;this.camera.position.set(i,r,s),this.camera.lookAt(0,1,0)},nu=function(t){const e=this.player.position,i=this.tmpA.set(e.x+_i.offset.x,e.y+_i.offset.y,e.z+_i.offset.z),s=1-Math.exp(-6.5*t);this.camera.position.lerp(i,s);const r=this.world.terrain.sampleHeight(this.camera.position.x,this.camera.position.z),a=Math.max(r,0)+1.3;this.camera.position.y<a&&(this.camera.position.y=a);const o=this.tmpB.set(e.x,e.y+_i.lookHeight,e.z);this.lookAt.lerp(o,Math.min(1,t*9)),this.camera.lookAt(this.lookAt)},su=function(t){if(!t)return{x:0,z:0};const e=this.hud.joystick.vector;let i=e.x,s=e.y,r=0,a=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(a-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(r-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(r+=1);const o=Math.hypot(r,a);return o>0&&(r/=o,a/=o,Math.hypot(r,a)>Math.hypot(i,s)&&(i=r,s=a)),{x:i,z:s}},ru=function(){let t=null,e=1/0;for(const i of this.dittos){const s=i.distanceTo(this.player.position);i.setNear(s<3.8),s<=Sa.dittoRange&&s<e&&(t=i,e=s)}for(const i of this.cats){const s=i.distanceTo(this.player.position);s<=Sa.catRange&&s<e&&(t=i,e=s)}this.target=t},bo=function(t){t.kind==="ditto"?Mt(this,xt,au).call(this,t):t.kind==="cat"&&Mt(this,xt,ou).call(this,t)},au=function(t){t.interact(),this.state.discovered.includes(t.id)?this.hud.toast(`${t.name} — "·‿·" 이미 도감에 있어요`,2e3):(t.markDiscovered(),this.state.discovered.push(t.id),this.hud.toast(`도감 등록! ${t.name} ·‿· (${this.state.discovered.length}/${rn.length})`,3200),this.save())},ou=function(t){t.pet(),this.hud.toast(`${t.name}가 기분 좋아 보여요 ♥`,1800)},lu=function(t){if(this.mode!=="play"||this.modal.isOpen||performance.now()-this.tap.t>520||Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>14)return;const e=new At(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight*2-1));this.raycaster.setFromCamera(e,this.camera);const i=[...this.dittos.map(o=>o.hitMesh),...this.cats.map(o=>o.body)],s=this.raycaster.intersectObjects(i,!0);if(!s.length)return;let r=s[0].object,a=null;for(;r&&!a;)a=r.userData&&r.userData.actor?r.userData.actor:null,r=r.parent;if(a){if(a.distanceTo(this.player.position)>Sa.tapRange){this.hud.toast("조금 더 가까이 가서 볼까요?",1600);return}Mt(this,xt,bo).call(this,a)}},Er=function(){const t=xr(this.state.elapsed),e=this.world.weather;this.hud.setTime({icon:t.icon,label:t.label,weatherIcon:e.icon,weatherLabel:e.label,day:this.state.day,clock:bc(this.state.elapsed),speed:this.state.settings.timeScale});const i=this.target;i&&i.kind==="ditto"?this.hud.setAction({active:!0,icon:i.discovered?"👀":"🔍",label:i.discovered?"다시 보기":"살펴보기"}):i&&i.kind==="cat"?this.hud.setAction({active:!0,icon:"🤲",label:"쓰다듬기"}):this.hud.setAction({active:!1,icon:"✋",label:"둘러보기"})},Nn=function(t){this.paused=!0,this.hud.joystick.reset();const e=t.onClose;this.modal.open({...t,onClose:()=>{this.paused=!1,e&&e()}})},cu=function(t,e){const i=this.atlases.get(e.set);if(!i)return;const s=i.cols,r=i.rows;t.style.backgroundImage=`url("${new URL(`sprites/${e.set}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${s*100}% ${r*100}%`,t.style.backgroundPosition=`${(e.col-1)/Math.max(1,s-1)*100}% ${(e.row-1)/Math.max(1,r-1)*100}%`};const vv=document.getElementById("scene"),xv=document.getElementById("ui"),Eo=new _v(vv,xv);window.__metamong={game:Eo,stats(){const n=Eo;return{mode:n.mode,day:n.state.day,elapsed:Math.round(n.state.elapsed*100)/100,phase:xr(n.state.elapsed).id,paused:n.paused,modalOpen:!!(n.modal&&n.modal.isOpen),contextLost:n.contextLost,fps:n.stats.fps,drawCalls:n.stats.calls,triangles:n.stats.triangles,sceneDrawCalls:n.stats.sceneCalls,sceneTriangles:n.stats.sceneTriangles,discovered:[...n.state.discovered],saveMode:n.saveStore.mode,hasSave:n.hasSave,settings:{...n.state.settings},player:n.player?{x:+n.player.position.x.toFixed(2),y:+n.player.position.y.toFixed(2),z:+n.player.position.z.toFixed(2)}:null}}};Eo.start().catch(n=>{console.error("게임 시작 실패",n);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#fff6fa;color:#6b5878;font-family:system-ui,sans-serif;font-size:14px;text-align:center;padding:24px;z-index:999;",t.textContent="섬을 여는 중 문제가 생겼어요. 새로고침 해 주세요: "+String(n&&n.message?n.message:n),document.body.appendChild(t)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(new URL("sw.js",document.baseURI)).catch(()=>{})});
