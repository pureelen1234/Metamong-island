var Jl=s=>{throw TypeError(s)};var fd=(s,t,e)=>t.has(s)||Jl("Cannot "+e);var oi=(s,t,e)=>t.has(s)?Jl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var $=(s,t,e)=>(fd(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="187",pd=0,Ql=1,md=2,Cs=1,gd=2,ws=3,on=0,Ne=1,Pi=2,Sn=0,Ps=1,Ls=2,jl=3,tc=4,_d=5,Kn=100,xd=101,vd=102,Md=103,Sd=104,yd=200,bd=201,Ed=202,Td=203,Eh=204,Th=205,wd=206,Ad=207,Rd=208,Cd=209,Pd=210,Ld=211,Dd=212,Id=213,Nd=214,ja=0,to=1,eo=2,Ds=3,io=4,no=5,so=6,ro=7,wh=0,Ud=1,Fd=2,Xi=0,al=1,ol=2,ll=3,cl=4,hl=5,ul=6,ta=7,Ah=300,jn=301,Is=302,la=303,ca=304,Ns=1e3,di=1001,ao=1002,se=1003,Od=1004,$s=1005,He=1006,ha=1007,Wi=1008,ti=1009,Rh=1010,Ch=1011,Us=1012,dl=1013,Di=1014,Mi=1015,We=1016,fl=1017,pl=1018,ts=1020,Ph=35902,Lh=35899,Dh=1021,Ih=1022,Si=1023,ln=1026,sn=1027,ml=1028,gl=1029,yn=1030,_l=1031,xl=1033,Lr=33776,Dr=33777,Ir=33778,Nr=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Wr=37490,_o=37491,xo=37808,vo=37809,Mo=37810,So=37811,yo=37812,bo=37813,Eo=37814,To=37815,wo=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Do=36492,Io=36494,No=36495,Uo=36283,Fo=36284,Xr=36285,Oo=36286,Bd=3200,Bo=0,zd=1,nn="",fe="srgb",qr="srgb-linear",Yr="linear",Qt="srgb",ua=7680,kd=519,Gd=512,Hd=513,Vd=514,Nh=515,Wd=516,Xd=517,Uh=518,Fh=519,Oh=35044,ec="300 es",yi=2e3,Fs=2001;function qd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yd(){const s=Os("canvas");return s.style.display="block",s}const ic={};function $r(...s){const t="THREE."+s.shift();console.log(t,...s)}function Bh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=Bh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Kt(...s){s=Bh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ur(...s){const t=s.join(" ");t in ic||(ic[t]=!0,It(...s))}function $d(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Kd={[ja]:ja,[eo]:so,[io]:io,[Ds]:no,[to]:to,[so]:eo,[ro]:ro,[no]:Ds};class En{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,zo=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Vt(s,t,e){return Math.max(t,Math.min(e,s))}function Zd(s,t){return(s%t+t)%t}function fa(s,t,e){return(1-e)*s+e*t}function Jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ea(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zh(s,t){if(t.constructor===Float32Array)return s;const e=ea(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function kh(s,t){if(t.constructor===Float32Array)return s;const e=ea(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Fl=class Fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;let At=Fl;class wn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(u!==S||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*S;m<0&&(d=-d,f=-f,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),R=Math.sin(y);p=Math.sin(p*y)/R,o=Math.sin(o*y)/R,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+S*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+S*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ol=class Ol{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ol.prototype.isVector3=!0;let N=Ol;const pa=new N,nc=new wn,Bl=class Bl{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],S=n[0],m=n[3],p=n[6],y=n[1],R=n[4],E=n[7],w=n[2],T=n[5],g=n[8];return r[0]=a*S+o*y+l*w,r[3]=a*m+o*R+l*T,r[6]=a*p+o*E+l*g,r[1]=c*S+h*y+u*w,r[4]=c*m+h*R+u*T,r[7]=c*p+h*E+u*g,r[2]=d*S+f*y+_*w,r[5]=d*m+f*R+_*T,r[8]=d*p+f*E+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=u*S,t[1]=(n*c-h*i)*S,t[2]=(o*i-n*a)*S,t[3]=d*S,t[4]=(h*e-n*l)*S,t[5]=(n*r-o*e)*S,t[6]=f*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ma.makeScale(t,e)),this}rotate(t){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bl.prototype.isMatrix3=!0;let Ut=Bl;const ma=new Ut,sc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const s={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(n.r=Jn(n.r),n.g=Jn(n.g),n.b=Jn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===nn?Yr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[qr]:{primaries:t,whitePoint:i,transfer:Yr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:t,whitePoint:i,transfer:Qt,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}}),s}const Yt=Qd();function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Jn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pn;class jd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pn===void 0&&(Pn=Os("canvas")),Pn.width=t.width,Pn.height=t.height;const n=Pn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Pn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tf=0;class vl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Tn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ga(n[a].image)):r.push(ga(n[a]))}else r=ga(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let ef=0;const _a=new N;class Ce extends En{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=di,n=di,r=He,a=Wi,o=Si,l=ti,c=Ce.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Tn(),this.name="",this.source=new vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Ah;Ce.DEFAULT_ANISOTROPY=1;const zl=class zl{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,E=(f+1)/2,w=(p+1)/2,T=(h+d)/4,g=(u+S)/4,M=(_+m)/4;return R>E&&R>w?R<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(R),n=T/i,r=g/i):E>w?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=T/n,r=M/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=g/r,n=M/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-S)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zl.prototype.isVector4=!0;let ce=zl;class nf extends En{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ce({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new vl(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xe extends nf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gh extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=se,this.minFilter=se,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=se,this.minFilter=se,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Qr=class Qr{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,_,S,m)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,_,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Ln.setFromMatrixColumn(t,0).length(),r=1/Ln.setFromMatrixColumn(t,1).length(),a=1/Ln.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,S=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-S*c,e[9]=-o*l,e[2]=S-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,S=c*u;e[0]=d+S*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=S+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,S=c*u;e[0]=d-S*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=S-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,S=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+S,e[1]=l*u,e[5]=S*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=S-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-S*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+S,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=S*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rf,t,af)}lookAt(t,e,i){const n=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Ki.crossVectors(i,Je),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Ki.crossVectors(i,Je)),Ki.normalize(),Ks.crossVectors(Je,Ki),n[0]=Ki.x,n[4]=Ks.x,n[8]=Je.x,n[1]=Ki.y,n[5]=Ks.y,n[9]=Je.y,n[2]=Ki.z,n[6]=Ks.z,n[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],S=i[6],m=i[10],p=i[14],y=i[3],R=i[7],E=i[11],w=i[15],T=n[0],g=n[4],M=n[8],F=n[12],L=n[1],U=n[5],G=n[9],q=n[13],P=n[2],V=n[6],Q=n[10],k=n[14],nt=n[3],X=n[7],tt=n[11],et=n[15];return r[0]=a*T+o*L+l*P+c*nt,r[4]=a*g+o*U+l*V+c*X,r[8]=a*M+o*G+l*Q+c*tt,r[12]=a*F+o*q+l*k+c*et,r[1]=h*T+u*L+d*P+f*nt,r[5]=h*g+u*U+d*V+f*X,r[9]=h*M+u*G+d*Q+f*tt,r[13]=h*F+u*q+d*k+f*et,r[2]=_*T+S*L+m*P+p*nt,r[6]=_*g+S*U+m*V+p*X,r[10]=_*M+S*G+m*Q+p*tt,r[14]=_*F+S*q+m*k+p*et,r[3]=y*T+R*L+E*P+w*nt,r[7]=y*g+R*U+E*V+w*X,r[11]=y*M+R*G+E*Q+w*tt,r[15]=y*F+R*q+E*k+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],S=t[7],m=t[11],p=t[15],y=l*f-c*d,R=o*f-c*u,E=o*d-l*u,w=a*f-c*h,T=a*d-l*h,g=a*u-o*h;return e*(S*y-m*R+p*E)-i*(_*y-m*w+p*T)+n*(_*R-S*w+p*g)-r*(_*E-S*T+m*g)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],S=t[13],m=t[14],p=t[15],y=e*o-i*a,R=e*l-n*a,E=e*c-r*a,w=i*l-n*o,T=i*c-r*o,g=n*c-r*l,M=h*S-u*_,F=h*m-d*_,L=h*p-f*_,U=u*m-d*S,G=u*p-f*S,q=d*p-f*m,P=y*q-R*G+E*U+w*L-T*F+g*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return t[0]=(o*q-l*G+c*U)*V,t[1]=(n*G-i*q-r*U)*V,t[2]=(S*g-m*T+p*w)*V,t[3]=(d*T-u*g-f*w)*V,t[4]=(l*L-a*q-c*F)*V,t[5]=(e*q-n*L+r*F)*V,t[6]=(m*E-_*g-p*R)*V,t[7]=(h*g-d*E+f*R)*V,t[8]=(a*G-o*L+c*M)*V,t[9]=(i*L-e*G-r*M)*V,t[10]=(_*T-S*E+p*y)*V,t[11]=(u*E-h*T-f*y)*V,t[12]=(o*F-a*U-l*M)*V,t[13]=(e*U-i*F+n*M)*V,t[14]=(S*R-_*w-m*y)*V,t[15]=(h*w-u*R+d*y)*V,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,S=a*h,m=a*u,p=o*u,y=l*c,R=l*h,E=l*u,w=i.x,T=i.y,g=i.z;return n[0]=(1-(S+p))*w,n[1]=(f+E)*w,n[2]=(_-R)*w,n[3]=0,n[4]=(f-E)*T,n[5]=(1-(d+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(_+R)*g,n[9]=(m-y)*g,n[10]=(1-(d+S))*g,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ln.set(n[0],n[1],n[2]).length();const o=Ln.set(n[4],n[5],n[6]).length(),l=Ln.set(n[8],n[9],n[10]).length();r<0&&(a=-a),mi.copy(this);const c=1/a,h=1/o,u=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,e.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=yi,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===yi)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Fs)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=yi,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===yi)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Fs)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Qr.prototype.isMatrix4=!0;let Zt=Qr;const Ln=new N,mi=new Zt,rf=new N(0,0,0),af=new N(1,1,1),Ki=new N,Ks=new N,Je=new N,ac=new Zt,oc=new wn;class bn{constructor(t=0,e=0,i=0,n=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let of=0;const lc=new N,Dn=new wn,Fi=new Zt,Zs=new N,ds=new N,lf=new N,cf=new wn,cc=new N(1,0,0),hc=new N(0,1,0),uc=new N(0,0,1),dc={type:"added"},hf={type:"removed"},In={type:"childadded",child:null},xa={type:"childremoved",child:null};class xe extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new N,e=new bn,i=new wn,n=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ut}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zs.copy(t):Zs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ds,Zs,this.up):Fi.lookAt(Zs,ds,this.up),this.quaternion.setFromRotationMatrix(Fi),n&&(Fi.extractRotation(n.matrixWorld),Dn.setFromRotationMatrix(Fi),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),In.child=t,this.dispatchEvent(In),In.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),In.child=t,this.dispatchEvent(In),In.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xe.DEFAULT_UP=new N(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bi extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uf={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Ma(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class mt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=Zd(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ma(a,r,t+1/3),this.g=Ma(a,r,t),this.b=Ma(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=fe){function i(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const i=Hh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Yt.workingToColorSpace(Ie.copy(this),t),Math.round(Vt(Ie.r*255,0,255))*65536+Math.round(Vt(Ie.g*255,0,255))*256+Math.round(Vt(Ie.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ie.copy(this),e);const i=Ie.r,n=Ie.g,r=Ie.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=fe){Yt.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,n=Ie.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Js);const i=fa(Zi.h,Js.h,e),n=fa(Zi.s,Js.s,e),r=fa(Zi.l,Js.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new mt;mt.NAMES=Hh;class Sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(t),this.density=e}clone(){return new Sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class df extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gi=new N,Oi=new N,Sa=new N,Bi=new N,Nn=new N,Un=new N,fc=new N,ya=new N,ba=new N,Ea=new N,Ta=new ce,wa=new ce,Aa=new ce;class ui{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),gi.subVectors(t,e),n.cross(gi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){gi.subVectors(n,e),Oi.subVectors(i,e),Sa.subVectors(t,e);const a=gi.dot(gi),o=gi.dot(Oi),l=gi.dot(Sa),c=Oi.dot(Oi),h=Oi.dot(Sa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Ta.setScalar(0),wa.setScalar(0),Aa.setScalar(0),Ta.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Aa.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Aa,r.z),a}static isFrontFacing(t,e,i,n){return gi.subVectors(i,e),Oi.subVectors(t,e),gi.cross(Oi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),gi.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ui.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Nn.subVectors(n,i),Un.subVectors(r,i),ya.subVectors(t,i);const l=Nn.dot(ya),c=Un.dot(ya);if(l<=0&&c<=0)return e.copy(i);ba.subVectors(t,n);const h=Nn.dot(ba),u=Un.dot(ba);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Nn,a);Ea.subVectors(t,r);const f=Nn.dot(Ea),_=Un.dot(Ea);if(_>=0&&f<=_)return e.copy(r);const S=f*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Un,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return fc.subVectors(r,n),o=(u-h)/(u-h+(f-_)),e.copy(n).addScaledVector(fc,o);const p=1/(m+S+d);return a=S*p,o=d*p,e.copy(i).addScaledVector(Nn,a).addScaledVector(Un,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class An{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),js.subVectors(this.max,fs),Fn.subVectors(t.a,fs),On.subVectors(t.b,fs),Bn.subVectors(t.c,fs),Ji.subVectors(On,Fn),Qi.subVectors(Bn,On),fn.subVectors(Fn,Bn);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-fn.z,fn.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,fn.z,0,-fn.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-fn.y,fn.x,0];return!Ra(e,Fn,On,Bn,js)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,Fn,On,Bn,js))?!1:(tr.crossVectors(Ji,Qi),e=[tr.x,tr.y,tr.z],Ra(e,Fn,On,Bn,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zi=[new N,new N,new N,new N,new N,new N,new N,new N],_i=new N,Qs=new An,Fn=new N,On=new N,Bn=new N,Ji=new N,Qi=new N,fn=new N,fs=new N,js=new N,tr=new N,pn=new N;function Ra(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){pn.fromArray(s,r);const o=n.x*Math.abs(pn.x)+n.y*Math.abs(pn.y)+n.z*Math.abs(pn.z),l=t.dot(pn),c=e.dot(pn),h=i.dot(pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const de=new N,er=new At;let ff=0;class qe extends En{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=Mi,this.version=0,this._normalizationScale=t!==void 0?ea(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):zh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):kh(t,this.array)}}class Vh extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wh extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pe extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}}const pf=new An,ps=new N,Ca=new N;class os{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pf.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ps,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Ca)),this.expandByPoint(ps.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mf=0;const li=new Zt,Pa=new xe,zn=new N,Qe=new An,ms=new An,Ee=new N;class Fe extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?Wh:Vh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,e,i){return li.makeTranslation(t,e,i),this.applyMatrix4(li),this}scale(t,e,i){return li.makeScale(t,e,i),this.applyMatrix4(li),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Qe.min,ms.min),Qe.expandByPoint(Ee),Ee.addVectors(Qe.max,ms.max),Qe.expandByPoint(Ee)):(Qe.expandByPoint(ms.min),Qe.expandByPoint(ms.max))}Qe.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(t,c),Ee.add(zn)),n=Math.max(n,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let F=0;F<i.count;F++)o[F]=new N,l[F]=new N;const h=new N,u=new N,d=new N,f=new At,_=new At,S=new At,m=new N,p=new N;function y(F,L,U){c[F]=c[L]=c[U]=1,h.fromBufferAttribute(i,F),u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,F),_.fromBufferAttribute(r,L),S.fromBufferAttribute(r,U),u.sub(h),d.sub(h),_.sub(f),S.sub(f);const G=1/(_.x*S.y-S.x*_.y);isFinite(G)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(d,-_.y).multiplyScalar(G),p.copy(d).multiplyScalar(_.x).addScaledVector(u,-S.x).multiplyScalar(G),o[F].add(m),o[L].add(m),o[U].add(m),l[F].add(p),l[L].add(p),l[U].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let F=0,L=R.length;F<L;++F){const U=R[F],G=U.start,q=U.count;for(let P=G,V=G+q;P<V;P+=3)y(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new N,w=new N,T=new N,g=new N;function M(F){T.fromBufferAttribute(n,F),g.copy(T);const L=o[F];E.copy(L),E.sub(T.multiplyScalar(T.dot(L))).normalize(),w.crossVectors(g,L);const G=w.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,G)}for(let F=0,L=i.count;F<L;++F)c[F]&&M(F);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=pc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=pc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function pc(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Tn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Be=new N;class Kr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?ea(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):zh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):kh(t,this.data.array)}}const La=new N,_f=new N,xf=new Ut;class en{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=La.subVectors(i,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(La),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xf.getNormalMatrix(t),n=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let vf=0;class Rn extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Ps,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new en().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rn extends Rn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let kn;const gs=new N,Gn=new N,Hn=new N,Vn=new At,_s=new At,Xh=new Zt,ir=new N,xs=new N,nr=new N,mc=new At,Da=new At,gc=new At;class Mn extends xe{constructor(t=new rn){if(super(),this.isSprite=!0,this.type="Sprite",kn===void 0){kn=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gf(e,5);kn.setIndex([0,1,2,0,2,3]),kn.setAttribute("position",new Kr(i,3,0,!1)),kn.setAttribute("uv",new Kr(i,2,3,!1))}this.geometry=kn,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gn.setFromMatrixScale(this.matrixWorld),Xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gn.multiplyScalar(-Hn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;sr(ir.set(-.5,-.5,0),Hn,a,Gn,n,r),sr(xs.set(.5,-.5,0),Hn,a,Gn,n,r),sr(nr.set(.5,.5,0),Hn,a,Gn,n,r),mc.set(0,0),Da.set(1,0),gc.set(1,1);let o=t.ray.intersectTriangle(ir,xs,nr,!1,gs);if(o===null&&(sr(xs.set(-.5,.5,0),Hn,a,Gn,n,r),Da.set(0,1),o=t.ray.intersectTriangle(ir,nr,xs,!1,gs),o===null))return;const l=t.ray.origin.distanceTo(gs);l<t.near||l>t.far||e.push({distance:l,point:gs.clone(),uv:ui.getInterpolation(gs,ir,xs,nr,mc,Da,gc,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function sr(s,t,e,i,n,r){Vn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(_s.x=r*Vn.x-n*Vn.y,_s.y=n*Vn.x+r*Vn.y):_s.copy(Vn),s.copy(t),s.x+=_s.x,s.y+=_s.y,s.applyMatrix4(Xh)}const ki=new N,Ia=new N,rr=new N,ar=new N;class yl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ia.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(Ia);const r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=ar.dot(this.direction),l=-ar.dot(rr),c=ar.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const S=1/h;u*=S,d*=S,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ia).addScaledVector(rr,d),f}intersectSphere(t,e){if(t.radius<0)return null;ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),n=ki.dot(ki)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=i.x-a.x,y=i.y-a.y,R=i.z-a.z,E=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let g,M,F,L,U,G,q,P,V,Q,k,nt;if(E>=w&&E>=T?(F=l,G=u,V=_,nt=p,l>=0?(g=c,M=h,L=d,U=f,q=S,P=m,Q=y,k=R):(g=h,M=c,L=f,U=d,q=m,P=S,Q=R,k=y)):w>=T?(F=c,G=d,V=S,nt=y,c>=0?(g=h,M=l,L=f,U=u,q=m,P=_,Q=R,k=p):(g=l,M=h,L=u,U=f,q=_,P=m,Q=p,k=R)):(F=h,G=f,V=m,nt=R,h>=0?(g=l,M=c,L=u,U=d,q=_,P=S,Q=p,k=y):(g=c,M=l,L=d,U=u,q=S,P=_,Q=y,k=p)),F===0)return null;const X=g/F,tt=M/F,et=1/F,Tt=L-X*G,Ft=U-tt*G,Z=q-X*V,xt=P-tt*V,yt=Q-X*nt,Pt=k-tt*nt,vt=yt*xt-Pt*Z,Bt=Tt*Pt-Ft*yt,he=Z*Ft-xt*Tt;if(n){if(vt<0||Bt<0||he<0)return null}else if((vt<0||Bt<0||he<0)&&(vt>0||Bt>0||he>0))return null;const Dt=vt+Bt+he;if(Dt===0)return null;const jt=et*(vt*G+Bt*V+he*nt);return(Dt>0?jt<0:jt>0)?null:this.at(jt/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cn extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _c=new Zt,mn=new yl,or=new os,xc=new N,lr=new N,cr=new N,hr=new N,Na=new N,ur=new N,vc=new N,dr=new N;class we extends xe{constructor(t=new Fe,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Na.fromBufferAttribute(u,t),a?ur.addScaledVector(Na,h):ur.addScaledVector(Na.sub(e),h))}e.add(ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),mn.copy(t.ray).recast(t.near),!(or.containsPoint(mn.origin)===!1&&(mn.intersectSphere(or,xc)===null||mn.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(_c.copy(r).invert(),mn.copy(t.ray).applyMatrix4(_c),!(i.boundingBox!==null&&mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,w=R;E<w;E+=3){const T=o.getX(E),g=o.getX(E+1),M=o.getX(E+2);n=fr(this,p,t,i,c,h,u,T,g,M),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){const y=o.getX(m),R=o.getX(m+1),E=o.getX(m+2);n=fr(this,a,t,i,c,h,u,y,R,E),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,w=R;E<w;E+=3){const T=E,g=E+1,M=E+2;n=fr(this,p,t,i,c,h,u,T,g,M),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){const y=m,R=m+1,E=m+2;n=fr(this,a,t,i,c,h,u,y,R,E),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Mf(s,t,e,i,n,r,a,o){let l;if(t.side===Ne?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===on,o),l===null)return null;dr.copy(o),dr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:s}}function fr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,lr),s.getVertexPosition(l,cr),s.getVertexPosition(c,hr);const h=Mf(s,t,e,i,lr,cr,hr,vc);if(h){const u=new N;ui.getBarycoord(vc,lr,cr,hr,u),n&&(h.uv=ui.getInterpolatedAttribute(n,o,l,c,u,new At)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};ui.getNormal(lr,cr,hr,d.normal),h.face=d,h.barycoord=u}return h}class bl extends Ce{constructor(t=null,e=1,i=1,n,r,a,o,l,c=se,h=se,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends qe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wn=new Zt,Sc=new Zt,pr=[],yc=new An,Sf=new Zt,vs=new we,Ms=new os;class yf extends we{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Sf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wn),yc.copy(t.boundingBox).applyMatrix4(Wn),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wn),Ms.copy(t.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Wn),Sc.multiplyMatrices(i,Wn),vs.matrixWorld=Sc,vs.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new bl(new Float32Array(n*this.count),n,this.count,ml,Mi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gn=new os,bf=new At(.5,.5),mr=new N;class Bs{constructor(t=new en,e=new en,i=new en,n=new en,r=new en,a=new en){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],S=r[9],m=r[10],p=r[11],y=r[12],R=r[13],E=r[14],w=r[15];if(n[0].setComponents(c-a,f-h,p-_,w-y).normalize(),n[1].setComponents(c+a,f+h,p+_,w+y).normalize(),n[2].setComponents(c+o,f+u,p+S,w+R).normalize(),n[3].setComponents(c-o,f-u,p-S,w-R).normalize(),i)n[4].setComponents(l,d,m,E).normalize(),n[5].setComponents(c-l,f-d,p-m,w-E).normalize();else if(n[4].setComponents(c-l,f-d,p-m,w-E).normalize(),e===yi)n[5].setComponents(c+l,f+d,p+m,w+E).normalize();else if(e===Fs)n[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(t){gn.center.set(0,0,0);const e=bf.distanceTo(t.center);return gn.radius=.7071067811865476+e,gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(mr.x=n.normal.x>0?t.max.x:t.min.x,mr.y=n.normal.y>0?t.max.y:t.min.y,mr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bc=new Zt;class El{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];bc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Bs),i[n].setFromProjectionMatrix(bc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Bs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new El().copy(this)}}class Tl extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ec=new Zt,ko=new yl,gr=new os,_r=new N;class qh extends xe{constructor(t=new Fe,e=new Tl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(n),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;Ec.copy(n).invert(),ko.copy(t.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,S=f;_<S;_++){const m=c.getX(_);_r.fromBufferAttribute(u,m),Tc(_r,m,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,S=f;_<S;_++)_r.fromBufferAttribute(u,_),Tc(_r,_,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tc(s,t,e,i,n,r,a){const o=ko.distanceSqToPoint(s);if(o<e){const l=new N;ko.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yh extends Ce{constructor(t=[],e=jn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ls extends Ce{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class es extends Ce{constructor(t,e,i=Di,n,r,a,o=se,l=se,c,h=ln,u=1){if(h!==ln&&h!==sn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class $h extends es{constructor(t,e=Di,i=jn,n,r,a=se,o=se,l,c=ln){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kh extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hs extends Fe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,r,4),_("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function _(S,m,p,y,R,E,w,T,g,M,F){const L=E/g,U=w/M,G=E/2,q=w/2,P=T/2,V=g+1,Q=M+1;let k=0,nt=0;const X=new N;for(let tt=0;tt<Q;tt++){const et=tt*U-q;for(let Tt=0;Tt<V;Tt++){const Ft=Tt*L-G;X[S]=Ft*y,X[m]=et*R,X[p]=P,c.push(X.x,X.y,X.z),X[S]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(Tt/g),u.push(1-tt/M),k+=1}}for(let tt=0;tt<M;tt++)for(let et=0;et<g;et++){const Tt=d+et+V*tt,Ft=d+et+V*(tt+1),Z=d+(et+1)+V*(tt+1),xt=d+(et+1)+V*tt;l.push(Tt,Ft,xt),l.push(Ft,Z,xt),nt+=6}o.addGroup(f,nt,F),f+=nt,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vs extends Fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new N,h=new At;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ef{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new At:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new N,n=[],r=[],a=[],o=new N,l=new Zt;for(let f=0;f<=t;f++){const _=f/t;n[f]=this.getTangentAt(_,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Vt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Vt(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(n[_],f*_)),a[_].crossVectors(n[_],r[_])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function wl(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const wc=new N,Ac=new N,Ua=new wl,Fa=new wl,Oa=new wl;class Tf extends Ef{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new N){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Ac.subVectors(n[0],n[1]).add(n[0]),c=Ac);const u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(wc.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),S=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Ua.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,S,m),Fa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,S,m),Oa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,S,m)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Fa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ua.calc(l),Fa.calc(l),Oa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new N().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class cn extends Fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],S=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let R=0;R<c;R++){const E=R*u-r;_.push(E,-y,0),S.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const R=y+c*p,E=y+c*(p+1),w=y+1+c*(p+1),T=y+1+c*p;f.push(R,E,T),f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Al extends Fe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,d=new N,f=[],_=[],S=[],m=[];for(let p=0;p<=i;p++){const y=[],R=p/i,E=a+R*o,w=t*Math.cos(E),T=Math.sqrt(t*t-w*w);let g=0;p===0&&a===0?g=.5/e:p===i&&l===Math.PI&&(g=-.5/e);for(let M=0;M<=e;M++){const F=M/e,L=n+F*r;u.x=-T*Math.cos(L),u.y=w,u.z=T*Math.sin(L),_.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(F+g,1-R),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const R=h[p][y+1],E=h[p][y],w=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(R,E,T),(p!==i-1||l<Math.PI)&&f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function is(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(Rc(n))n.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Rc(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const i=is(s[e]);for(const n in i)t[n]=i[n]}return t}function Rc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function wf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const ns={clone:is,merge:ze};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new mt().setHex(n.value);break;case"v2":this.uniforms[i].value=new At().fromArray(n.value);break;case"v3":this.uniforms[i].value=new N().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ce().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Jh extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cf extends Rn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Pf extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lf extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ba={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Cc(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Cc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Cc(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Df{constructor(t,e,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const If=new Df;class Rl{constructor(t){this.manager=t!==void 0?t:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn=new WeakMap;class Nf extends Rl{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ba.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Xn.get(a);u===void 0&&(u=[],Xn.set(a,u)),u.push({onLoad:e,onError:n})}return a}const o=Os("img");function l(){h(),e&&e(this);const u=Xn.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Xn.delete(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),Ba.remove(`image:${t}`);const d=Xn.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(u)}Xn.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ba.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Uf extends Rl{constructor(t){super(t)}load(t,e,i,n){const r=new Ce,a=new Nf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class ia extends xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ff extends ia{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const za=new Zt,Pc=new N,Lc=new N;class Qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xr=new N,vr=new wn,Ti=new N;class jh extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xr,vr,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,vr,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(xr,vr,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,vr,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new N,Dc=new At,Ic=new At;class hi extends jh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Ic),e.subVectors(Ic,Dc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(da*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Of extends Qh{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class Bf extends ia{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Of}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Cl extends jh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zf extends Qh{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nc extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new zf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class kf extends ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qn=-90,Yn=1;class Go extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new hi(qn,Yn,t,e);n.layers=this.layers,this.add(n);const r=new hi(qn,Yn,t,e);r.layers=this.layers,this.add(r);const a=new hi(qn,Yn,t,e);a.layers=this.layers,this.add(a);const o=new hi(qn,Yn,t,e);o.layers=this.layers,this.add(o);const l=new hi(qn,Yn,t,e);l.layers=this.layers,this.add(l);const c=new hi(qn,Yn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=S,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gf extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Hf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vf(){this._document.hidden===!1&&this.reset()}const Uc=new Zt;class Wf{constructor(t,e,i=0,n=1/0){this.ray=new yl(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(t,e=!0,i=[]){return Ho(t,this,i,e),i.sort(Fc),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Ho(t[n],this,i,e);return i.sort(Fc),i}}function Fc(s,t){return s.distance-t.distance}function Ho(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ho(r[a],t,e,!0)}}function Oc(s,t,e,i){const n=Xf(i);switch(e){case Dh:return s*t;case ml:return s*t/n.components*n.byteLength;case gl:return s*t/n.components*n.byteLength;case yn:return s*t*2/n.components*n.byteLength;case _l:return s*t*2/n.components*n.byteLength;case Ih:return s*t*3/n.components*n.byteLength;case Si:return s*t*4/n.components*n.byteLength;case xl:return s*t*4/n.components*n.byteLength;case Lr:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(s,16)*Math.max(t,8)/4;case oo:case co:return Math.max(s,8)*Math.max(t,8)/2;case uo:case fo:case mo:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:case Wr:case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case So:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Do:case Io:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Uo:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xr:case Oo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(s){switch(s){case ti:case Rh:return{byteLength:1,components:1};case Us:case Ch:case We:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Di:case dl:case Mi:return{byteLength:4,components:1};case Ph:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tu(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qf(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],S=u[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,u[d]=S)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const S=u[f];s.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,_p=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`uniform sampler2D dfgLUT;
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
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
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform float backgroundBlurriness;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,vg=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Yf,alphahash_pars_fragment:$f,alphamap_fragment:Kf,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:Qf,aomap_fragment:jf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:ip,begin_vertex:np,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,defaultnormal_vertex:_p,displacementmap_pars_vertex:xp,displacementmap_vertex:vp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:yp,colorspace_pars_fragment:bp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:wp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Bp,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Np,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Fp,lights_pars_begin:Op,lights_toon_fragment:zp,lights_toon_pars_fragment:kp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,lightprobes_pars_fragment:$p,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:jp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:im,metalnessmap_fragment:nm,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:Sm,premultiplied_alpha_fragment:ym,project_vertex:bm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Nm,skinnormal_vertex:Um,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Gm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Km,cube_vert:Zm,cube_frag:Jm,depth_vert:Qm,depth_frag:jm,distance_vert:tg,distance_frag:eg,equirect_vert:ig,equirect_frag:ng,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:Mg,points_frag:Sg,shadow_vert:yg,shadow_frag:bg,sprite_vert:Eg,sprite_frag:Tg},gt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ci={basic:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:ze([gt.common,gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:ze([gt.lights,gt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ci.physical={uniforms:ze([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Mr={r:0,b:0,g:0},wg=new Zt,eu=new Ut;eu.set(-1,0,0,0,1,0,0,0,1);function Ag(s,t,e,i,n,r){const a=new mt(0);let o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){const E=y.backgroundBlurriness>0;R=t.get(R,E)}return R}function _(y){let R=!1;const E=f(y);E===null?m(a,o):E&&E.isColor&&(m(E,1),R=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(y,R){const E=f(R);E&&E.isCubeTexture?(c===void 0&&(c=new we(new Hs(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:is(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eu),c.material.toneMapped=Yt.getTransfer(E.colorSpace)!==Qt,(h!==E||u!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new we(new cn(2,2),new Ve({name:"BackgroundMaterial",uniforms:is(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(E.colorSpace)!==Qt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,R){y.getRGB(Mr,Zh(s)),e.buffers.color.setClear(Mr.r,Mr.g,Mr.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,R=1){a.set(y),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:S,dispose:p}}function Rg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(U,G,q,P,V){let Q=!1;const k=u(U,P,q,G);r!==k&&(r=k,c(r.object)),Q=f(U,P,q,V),Q&&_(U,P,q,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,E(U,G,q,P),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function u(U,G,q,P){const V=P.wireframe===!0;let Q=i[G.id];Q===void 0&&(Q={},i[G.id]=Q);const k=U.isInstancedMesh===!0?U.id:0;let nt=Q[k];nt===void 0&&(nt={},Q[k]=nt);let X=nt[q.id];X===void 0&&(X={},nt[q.id]=X);let tt=X[V];return tt===void 0&&(tt=d(l()),X[V]=tt),tt}function d(U){const G=[],q=[],P=[];for(let V=0;V<e;V++)G[V]=0,q[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:P,object:U,attributes:{},index:null}}function f(U,G,q,P){const V=r.attributes,Q=G.attributes;let k=0;const nt=q.getAttributes();for(const X in nt)if(nt[X].location>=0){const et=V[X];let Tt=Q[X];if(Tt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),et===void 0||et.attribute!==Tt||Tt&&et.data!==Tt.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function _(U,G,q,P){const V={},Q=G.attributes;let k=0;const nt=q.getAttributes();for(const X in nt)if(nt[X].location>=0){let et=Q[X];et===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));const Tt={};Tt.attribute=et,et&&et.data&&(Tt.data=et.data),V[X]=Tt,k++}r.attributes=V,r.attributesNum=k,r.index=P}function S(){const U=r.newAttributes;for(let G=0,q=U.length;G<q;G++)U[G]=0}function m(U){p(U,0)}function p(U,G){const q=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;q[U]=1,P[U]===0&&(s.enableVertexAttribArray(U),P[U]=1),V[U]!==G&&(s.vertexAttribDivisor(U,G),V[U]=G)}function y(){const U=r.newAttributes,G=r.enabledAttributes;for(let q=0,P=G.length;q<P;q++)G[q]!==U[q]&&(s.disableVertexAttribArray(q),G[q]=0)}function R(U,G,q,P,V,Q,k){k===!0?s.vertexAttribIPointer(U,G,q,V,Q):s.vertexAttribPointer(U,G,q,P,V,Q)}function E(U,G,q,P){S();const V=P.attributes,Q=q.getAttributes(),k=G.defaultAttributeValues;for(const nt in Q){const X=Q[nt];if(X.location>=0){let tt=V[nt];if(tt===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),tt!==void 0){const et=tt.normalized,Tt=tt.itemSize,Ft=t.get(tt);if(Ft===void 0)continue;const Z=Ft.buffer,xt=Ft.type,yt=Ft.bytesPerElement,Pt=xt===s.INT||xt===s.UNSIGNED_INT||tt.gpuType===dl;if(tt.isInterleavedBufferAttribute){const vt=tt.data,Bt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,he=tt.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Dt=0;Dt<X.locationSize;Dt++)p(X.location+Dt,vt.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Dt=0;Dt<X.locationSize;Dt++)R(X.location+Dt,Tt/X.locationSize,xt,et,Bt*yt,(he+Tt/X.locationSize*Dt)*yt,Pt)}else{if(tt.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)p(X.location+vt,tt.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let vt=0;vt<X.locationSize;vt++)m(X.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let vt=0;vt<X.locationSize;vt++)R(X.location+vt,Tt/X.locationSize,xt,et,Tt*yt,Tt/X.locationSize*vt*yt,Pt)}}else if(k!==void 0){const et=k[nt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(X.location,et);break;case 3:s.vertexAttrib3fv(X.location,et);break;case 4:s.vertexAttrib4fv(X.location,et);break;default:s.vertexAttrib1fv(X.location,et)}}}}y()}function w(){F();for(const U in i){const G=i[U];for(const q in G){const P=G[q];for(const V in P){const Q=P[V];for(const k in Q)h(Q[k].object),delete Q[k];delete P[V]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const G=i[U.id];for(const q in G){const P=G[q];for(const V in P){const Q=P[V];for(const k in Q)h(Q[k].object),delete Q[k];delete P[V]}}delete i[U.id]}function g(U){for(const G in i){const q=i[G];for(const P in q){const V=q[P];if(V[U.id]===void 0)continue;const Q=V[U.id];for(const k in Q)h(Q[k].object),delete Q[k];delete V[U.id]}}}function M(U){for(const G in i){const q=i[G],P=U.isInstancedMesh===!0?U.id:0,V=q[P];if(V!==void 0){for(const Q in V){const k=V[Q];for(const nt in k)h(k[nt].object),delete k[nt];delete V[Q]}delete q[P],Object.keys(q).length===0&&delete i[G]}}}function F(){L(),a=!0,r!==n&&(r=n,c(r.object))}function L(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:F,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Cg(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pg(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(g){return!(g!==Si&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const M=g===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==ti&&g!==Mi&&!M&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:E,maxSamples:w,samples:T}}function Lg(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new en,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,R=y*4;let E=p.clippingState||null;l.value=E,E=h(_,d,R,f);for(let w=0;w!==R;++w)E[w]=e[w];p.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const S=u!==null?u.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=f+S*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,E=f;R!==S;++R,E+=4)a.copy(u[R]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}class Pl extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Yh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Hs(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:Sn});r.uniforms.tEquirect.value=e;const a=new we(n,r),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=He),new Go(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Bc=256,Dg=3,Ig=20,iu=256,nu=16,Ng=3,Ug=new N,Fg=new mt;class Zr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Go(1,10,null),this._boxMesh=new we(new Hs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=Ug}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(Fg));const m=new Go(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=_,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Bc,Jd(t))}_fromTexture(t,e){t.mapping===jn||t.mapping===Is?this._setSize(t.image.length===0?Bc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=zc(t,!1,!1),i=Math.log2(t)-Dg;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jn||t.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Og(),this._integrationMaterial=Bg());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/nu);for(let a=0;a<=i;a++){const o=Zr.lodToRoughness(a,i);if(a>i-Ng)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(iu*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=zg());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function zc(s,t,e){return new Pl(s,{minFilter:Wi,generateMipmaps:t,type:We,colorSpace:qr,depthBuffer:e})}function Ws(s,t,e){return new Ve({name:s,uniforms:t,vertexShader:Gt.cube_vert,fragmentShader:e,side:Ne,blending:Sn,depthTest:!1,depthWrite:!1})}function Og(){return Ws("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iu}u

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
	`)}function Bg(){return Ws("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nu}},`

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
	`)}function zg(){return Ws("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ig}
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
	`)}function kc(){return Ws("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gc(){return Ws("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kg(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===la||f===ca)if(t.has(d)){const _=t.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new Pl(_.height);return S.fromEquirectangularTexture(s,d),t.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,_=f===la||f===ca,S=f===jn||f===Is;if(_||S){let m=e.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Zr(s)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return _&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new Zr(s)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===la?d.mapping=jn:f===ca&&(d.mapping=Is),d}function l(d){let f=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&f++;return f===_}function c(d){const f=d.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Gg(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Ur("WebGLRenderer: "+i+" extension not supported."),n}}}function Hg(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(_=>delete n[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(const m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete n[_.id],a.unregister(_);const S=r.get(_);S&&(t.remove(S),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,S){return n[S.id]!==void 0||(S.addEventListener("dispose",o),n[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(_){const S=_.attributes;for(const m in S)t.update(S[m],s.ARRAY_BUFFER)}function u(_){const S=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const y=S!==null?S.array.length:m.array.length/3-1,R=m.count>=65535?Wh:Vh,E=new R(Math.ceil(y/3)*6,1),w=E.array;if(S!==null){const g=S.array;p=S.version;for(let M=0,F=0;M<y;M+=3){const L=g[M+0],U=g[M+1],G=g[M+2];w[F++]=L,w[F++]=U,w[F++]=U,w[F++]=G,w[F++]=G,w[F++]=L}}else{p=m.version;for(let g=0,M=0;g<y;g+=3){const F=g+0,L=g+1,U=g+2;w[M++]=F,w[M++]=L,w[M++]=L,w[M++]=U,w[M++]=U,w[M++]=F}}E.version=p;const T=r.get(_);T&&t.remove(T),r.set(_,E)}function d(_){const S=r.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&u(_)}else u(_);return r.get(_)}function f(){for(const _ in n){const S=n[_].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Vg(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let S=0;for(let m=0;m<f;m++)S+=d[m];e.update(S,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xg(s,t,e){const i=new WeakMap,n=new ce;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let L=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var f=L;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const g=new Float32Array(w*T*4*u),M=new Gh(g,w,T,u);M.type=Mi,M.needsUpdate=!0;const F=E*4;for(let U=0;U<u;U++){const G=p[U],q=y[U],P=R[U],V=w*T*4*U;for(let Q=0;Q<G.count;Q++){const k=Q*F;_===!0&&(n.fromBufferAttribute(G,Q),g[V+k+0]=n.x,g[V+k+1]=n.y,g[V+k+2]=n.z,g[V+k+3]=0),S===!0&&(n.fromBufferAttribute(q,Q),g[V+k+4]=n.x,g[V+k+5]=n.y,g[V+k+6]=n.z,g[V+k+7]=0),m===!0&&(n.fromBufferAttribute(P,Q),g[V+k+8]=n.x,g[V+k+9]=n.y,g[V+k+10]=n.z,g[V+k+11]=P.itemSize===4?n.w:1)}}d={count:u,texture:M,size:new At(w,T)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",S),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qg(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Yg={[al]:"LINEAR_TONE_MAPPING",[ol]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[cl]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function $g(s,t,e,i,n,r){const a=new Xe(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Fe;h.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pe([0,2,0,0,2,0],2));const u=new Jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new we(h,u),f=new Cl(-1,1,1,-1,0,1);let _=null,S=null,m=!1,p,y=null,R=[],E=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<R.length;g++){const M=R[g];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){R=w,E=R.length>0&&R[0].isRenderPass===!0;const T=a.width,g=a.height;R.length>0&&o===null&&(o=new Xe(T,g,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(T,g,{type:We,depthBuffer:!1,stencilBuffer:!1}));const M=n===!0&&R.some(F=>F.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new es(T,g),r===!0&&(c.format=sn,c.type=ts)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let F=0;F<R.length;F++){const L=R[F];L.setSize&&L.setSize(T,g),M&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Xi&&R.length===0)return!1;if(y=T,T!==null){const g=T.width,M=T.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return E===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return E},this.end=function(w,T){w.toneMapping=p,m=!0;let g=a,M=o;for(let F=0;F<R.length;F++){const L=R[F];L.enabled!==!1&&(L.render(w,M,g,T),L.needsSwap!==!1&&(g=M,M=M===o?l:o))}if(_!==w.outputColorSpace||S!==w.toneMapping){_=w.outputColorSpace,S=w.toneMapping,u.defines={},Yt.getTransfer(_)===Qt&&(u.defines.SRGB_TRANSFER="");const F=Yg[S];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(y),w.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const su=new Ce,ru=new es(1,1),au=new $h(1),ou=new Gh,lu=new sf,cu=new Yh,Hc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function cs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Hc[n];if(r===void 0&&(r=new Float32Array(n),Hc[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function na(s,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Kg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function jg(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;qc.set(i),s.uniformMatrix2fv(this.addr,!1,qc),Me(e,i)}}function t0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;Xc.set(i),s.uniformMatrix3fv(this.addr,!1,Xc),Me(e,i)}}function e0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;Wc.set(i),s.uniformMatrix4fv(this.addr,!1,Wc),Me(e,i)}}function i0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function n0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function s0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function r0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function a0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function o0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function sa(s){return s.version===0&&(s.compareFunction=Fh,s.needsUpdate=!0),s}function h0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=sa(ru):r=su,e.setTexture2D(t||r,n)}function u0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||lu,n)}function d0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=sa(au):r=cu,e.setTextureCube(t||r,n)}function f0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ou,n)}function p0(s){switch(s){case 5126:return Kg;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return jg;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return i0;case 35667:case 35671:return n0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(s,t){s.uniform1fv(this.addr,t)}function g0(s,t){const e=cs(t,this.size,2);s.uniform2fv(this.addr,e)}function _0(s,t){const e=cs(t,this.size,3);s.uniform3fv(this.addr,e)}function x0(s,t){const e=cs(t,this.size,4);s.uniform4fv(this.addr,e)}function v0(s,t){const e=cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function M0(s,t){const e=cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function S0(s,t){const e=cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function y0(s,t){s.uniform1iv(this.addr,t)}function b0(s,t){s.uniform2iv(this.addr,t)}function E0(s,t){s.uniform3iv(this.addr,t)}function T0(s,t){s.uniform4iv(this.addr,t)}function w0(s,t){s.uniform1uiv(this.addr,t)}function A0(s,t){s.uniform2uiv(this.addr,t)}function R0(s,t){s.uniform3uiv(this.addr,t)}function C0(s,t){s.uniform4uiv(this.addr,t)}function P0(s,t,e){const i=this.cache,n=t.length,r=na(e,n);ve(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=sa(ru):a=su;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function L0(s,t,e){const i=this.cache,n=t.length,r=na(e,n);ve(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||lu,r[a])}function D0(s,t,e){const i=this.cache,n=t.length,r=na(e,n);ve(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=sa(au):a=cu;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function I0(s,t,e){const i=this.cache,n=t.length,r=na(e,n);ve(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ou,r[a])}function N0(s){switch(s){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return y0;case 35667:case 35671:return b0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}class U0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class F0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}}class O0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Yc(s,t){s.seq.push(t),s.map[t.id]=t}function B0(s,t,e){const i=s.name,n=i.length;for(ka.lastIndex=0;;){const r=ka.exec(i),a=ka.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yc(e,c===void 0?new U0(o,s,t):new F0(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new O0(o),Yc(e,u)),e=u}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);B0(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function $c(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const z0=37297;let k0=0;function G0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Kc=new Ut;function H0(s){Yt._getMatrix(Kc,Yt.workingColorSpace,s);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Yr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+G0(s.getShaderSource(t),o)}else return r}function V0(s,t){const e=H0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const W0={[al]:"Linear",[ol]:"Reinhard",[ll]:"Cineon",[cl]:"ACESFilmic",[ul]:"AgX",[ta]:"Neutral",[hl]:"Custom"};function X0(s,t){const e=W0[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new N;function q0(){Yt.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function $0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function As(s){return s!==""}function Jc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(s){return s.replace(Z0,J0)}function J0(s,t){const e=Gt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Vo(e)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(s){return s.replace(Q0,j0)}function j0(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function th(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const t_={[Cs]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function e_(s){return t_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i_={[Is]:"ENVMAP_MODE_REFRACTION"};function n_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s_={[wh]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function r_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":s_[s.combine]||"ENVMAP_BLENDING_NONE"}function a_(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=e_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=n_(e),u=r_(e),d=Y0(e),f=$0(r),_=n.createProgram();let S,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(As).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(As).join(`
`),m.length>0&&(m+=`
`)):(S=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Vo(a),a=Jc(a,e),a=Qc(a,e),o=Vo(o),o=Jc(o,e),o=Qc(o,e),a=jc(a),o=jc(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=p+S+a,R=p+m+o,E=$c(n,n.VERTEX_SHADER,y),w=$c(n,n.FRAGMENT_SHADER,R);n.attachShader(_,E),n.attachShader(_,w),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(L){if(s.debug.checkShaderErrors){const U=n.getProgramInfoLog(_)||"",G=n.getShaderInfoLog(E)||"",q=n.getShaderInfoLog(w)||"",P=U.trim(),V=G.trim(),Q=q.trim();let k=!0,nt=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,E,w);else{const X=Zc(n,E,"vertex"),tt=Zc(n,w,"fragment");Kt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+X+`
`+tt)}else P!==""?It("WebGLProgram: Program Info Log:",P):(V===""||Q==="")&&(nt=!1);nt&&(L.diagnostics={runnable:k,programLog:P,vertexShader:{log:V,prefix:S},fragmentShader:{log:Q,prefix:m}})}n.deleteShader(E),n.deleteShader(w),g=new Fr(n,_),M=K0(n,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(_,z0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let o_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new c_(t),e.set(t,i)),i}}class c_{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}}function h_(s){return s===yn||s===Wr||s===Xr}function u_(s,t,e,i,n,r){const a=new Ml,o=new l_,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,M,F,L,U,G){const q=L.fog,P=U.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=t.get(g.envMap||V,Q),nt=d[g.type];let X=i.precision;g.precision!==null&&(X=i.getMaxPrecision(g.precision),X!==g.precision&&It("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));const tt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=tt!==void 0?tt.length:0;let Tt=0;P.morphAttributes.position!==void 0&&(Tt=1),P.morphAttributes.normal!==void 0&&(Tt=2),P.morphAttributes.color!==void 0&&(Tt=3);let Ft,Z,xt,yt;if(nt){const _t=Ci[nt];Ft=_t.vertexShader,Z=_t.fragmentShader}else{Ft=g.vertexShader,Z=g.fragmentShader;const _t=o.getVertexShaderStage(g),te=o.getFragmentShaderStage(g);o.update(g,_t,te),xt=_t.id,yt=te.id}const Pt=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,he=U.isBatchedMesh===!0,Dt=!!g.map,jt=!!g.matcap,ee=!!k,Wt=ee&&k.isPMREMTexture===!0,Ae=!!g.aoMap,me=!!g.lightMap,$e=!!g.bumpMap&&g.wireframe===!1,oe=!!g.normalMap,Ei=!!g.displacementMap,Se=!!g.emissiveMap,ni=!!g.metalnessMap,si=!!g.roughnessMap,ri=g.anisotropy>0,I=g.clearcoat>0,ai=g.diffuseRoughness>0,re=g.dispersion>0,ae=g.retroreflectivity>0,pt=g.iridescence>0,ge=g.sheen>0,Lt=g.transmission>0,Nt=ri&&!!g.anisotropyMap,b=I&&!!g.clearcoatMap,x=I&&!!g.clearcoatNormalMap,B=I&&!!g.clearcoatRoughnessMap,st=ai&&!!g.diffuseRoughnessMap,j=pt&&!!g.iridescenceMap,ot=pt&&!!g.iridescenceThicknessMap,dt=ge&&!!g.sheenColorMap,Y=ge&&!!g.sheenRoughnessMap,K=!!g.specularMap,ct=!!g.specularColorMap,A=!!g.specularIntensityMap,J=Lt&&!!g.transmissionMap,W=Lt&&!!g.thicknessMap,ht=!!g.gradientMap,at=!!g.alphaMap,lt=g.alphaTest>0,Rt=!!g.alphaHash,kt=!!g.extensions;let rt=Xi;g.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ct=Wt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,zt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Ft,fragmentShader:Z,defines:g.defines,customVertexShaderID:xt,customFragmentShaderID:yt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:he,batchingColor:he&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Dt,matcap:jt,envMap:ee,envMapMode:ee&&k.mapping,envMapPMREM:Wt,envMapMaxLod:Wt?Ct.length-1:null,envMapSize:Wt?Ct[0].width:null,aoMap:Ae,lightMap:me,bumpMap:$e,normalMap:oe,displacementMap:Ei,emissiveMap:Se,normalMapObjectSpace:oe&&g.normalMapType===zd,normalMapTangentSpace:oe&&g.normalMapType===Bo,packedNormalMap:oe&&g.normalMapType===Bo&&h_(g.normalMap.format),metalnessMap:ni,roughnessMap:si,anisotropy:ri,anisotropyMap:Nt,clearcoat:I,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:ai,diffuseRoughnessMap:st,dispersion:re,retroreflection:ae,iridescence:pt,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:ge,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:K,specularColorMap:ct,specularIntensityMap:A,transmission:Lt,transmissionMap:J,thicknessMap:W,gradientMap:ht,opaque:g.transparent===!1&&g.blending===Ps&&g.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:Rt,combine:g.combine,mapUv:Dt&&f(g.map.channel),aoMapUv:Ae&&f(g.aoMap.channel),lightMapUv:me&&f(g.lightMap.channel),bumpMapUv:$e&&f(g.bumpMap.channel),normalMapUv:oe&&f(g.normalMap.channel),displacementMapUv:Ei&&f(g.displacementMap.channel),emissiveMapUv:Se&&f(g.emissiveMap.channel),metalnessMapUv:ni&&f(g.metalnessMap.channel),roughnessMapUv:si&&f(g.roughnessMap.channel),anisotropyMapUv:Nt&&f(g.anisotropyMap.channel),clearcoatMapUv:b&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(g.sheenRoughnessMap.channel),specularMapUv:K&&f(g.specularMap.channel),specularColorMapUv:ct&&f(g.specularColorMap.channel),specularIntensityMapUv:A&&f(g.specularIntensityMap.channel),transmissionMapUv:J&&f(g.transmissionMap.channel),thicknessMapUv:W&&f(g.thicknessMap.channel),alphaMapUv:at&&f(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(oe||ri),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(Dt||at),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&oe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Tt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:G.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Dt&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===Qt,decodeVideoTextureEmissive:Se&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===Qt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Pi,flipSided:g.side===Ne,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:kt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&g.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function S(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const F in g.defines)M.push(F),M.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(m(M,g),p(M,g),M.push(s.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function m(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function p(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){const M=d[g.type];let F;if(M){const L=Ci[M];F=ns.clone(L.uniforms)}else F=g.uniforms;return F}function R(g,M){let F=h.get(M);return F!==void 0?++F.usedTimes:(F=new a_(s,M,g,n),c.push(F),h.set(M,F)),F}function E(g){if(--g.usedTimes===0){const M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function d_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function f_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function eh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ih(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,S,m,p){let y=s[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:p},s[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=_,y.materialVariant=a(d),y.groupOrder=S,y.renderOrder=d.renderOrder,y.z=m,y.group=p),t++,y}function l(d,f,_,S,m,p,y){y.reversedDepth===!0&&(m=-m);const R=o(d,f,_,S,m,p);_.transmission>0?i.push(R):_.transparent===!0?n.push(R):e.push(R)}function c(d,f,_,S,m,p){const y=o(d,f,_,S,m,p);_.transmission>0?i.unshift(y):_.transparent===!0?n.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||f_),i.length>1&&i.sort(f||eh),n.length>1&&n.sort(f||eh)}function u(){for(let d=t,f=s.length;d<f;d++){const _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function p_(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new ih,s.set(i,[a])):n>=r.length?(a=new ih,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function m_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new mt};break;case"SpotLight":e={position:new N,direction:new N,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function g_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let __=0;function x_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function v_(s){const t=new m_,e=g_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const n=new N,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,_=0,S=0,m=0,p=0,y=0,R=0,E=0,w=0,T=0,g=0,M=0,F=0,L=0;c.sort(x_);for(let G=0,q=c.length;G<q;G++){const P=c[G],V=P.color,Q=P.intensity,k=P.distance;let nt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===yn?nt=P.shadow.map.texture:nt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*Q,u+=V.g*Q,d+=V.b*Q;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],Q);L++}else if(P.isSunLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[_]=et,i.sunShadowMap[_]=nt;const Tt=tt.getViewportCount();for(let Ft=0;Ft<Tt;Ft++)i.sunShadowMatrix[S+Ft]=tt.getMatrix(Ft),i.sunShadowCascade[S+Ft]=tt._cascadeData[Ft];S+=Tt,_++}i.sun[f]=X,f++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=X,m++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(Q),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[y]=X;const tt=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,tt.updateMatrices(P),P.castShadow&&F++),i.spotLightMatrix[y]=tt.matrix,P.castShadow){const et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,i.spotShadow[y]=et,i.spotShadowMap[y]=nt,g++}y++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(V).multiplyScalar(Q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[R]=X,R++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const tt=P.shadow,et=e.get(P);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=X,p++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(Q),X.groundColor.copy(P.groundColor).multiplyScalar(Q),i.hemi[E]=X,E++}}R>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==R||U.hemiLength!==E||U.numSunShadows!==_||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==g||U.numSpotMaps!==M||U.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=R,i.point.length=p,i.hemi.length=E,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+M-F,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=L,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=y,U.rectAreaLength=R,U.hemiLength=E,U.numSunShadows=_,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=g,U.numSpotMaps=M,U.numLightProbes=L,i.version=__++)}function l(c,h){let u=0,d=0,f=0,_=0,S=0,m=0;const p=h.matrixWorldInverse;for(let y=0,R=c.length;y<R;y++){const E=c[y];if(E.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),u++}else if(E.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),d++}else if(E.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function nh(s){const t=new v_(s),e=[],i=[],n=[];function r(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M_(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new nh(s),t.set(n,[o])):r>=a.length?(o=new nh(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,b_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],E_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],sh=new Zt,Ss=new N,Ga=new N;function T_(s,t,e){let i=new Bs;const n=new At,r=new At,a=new ce,o=new Pf,l=new Lf,c={},h=e.maxTextureSize,u={[on]:Ne,[Ne]:on,[Pi]:Pi},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:S_,fragmentShader:y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new we(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(T,g,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===gd&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);const F=s.getRenderTarget(),L=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Sn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=p!==this.type;q&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){const Q=T[P],k=Q.shadow;if(k===void 0){It("WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const nt=k.getFrameExtents();n.multiply(nt),r.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,k.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,k.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ws){if(Q.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Xe(n.x,n.y,{format:yn,type:We,minFilter:He,magFilter:He,generateMipmaps:!1}),k.map.texture.name=Q.name+".shadowMap",k.map.depthTexture=new es(n.x,n.y,Mi),k.map.depthTexture.name=Q.name+".shadowMapDepth",k.map.depthTexture.format=ln,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=se,k.map.depthTexture.magFilter=se}else Q.isPointLight?(k.map=new Pl(n.x),k.map.depthTexture=new $h(n.x,Di)):(k.map=new Xe(n.x,n.y),k.map.depthTexture=new es(n.x,n.y,Di)),k.map.depthTexture.name=Q.name+".shadowMap",k.map.depthTexture.format=ln,this.type===Cs?(k.map.depthTexture.compareFunction=X?Uh:Nh,k.map.depthTexture.minFilter=He,k.map.depthTexture.magFilter=He):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=se,k.map.depthTexture.magFilter=se);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==n.x||k.map.height!==n.y)&&k.map.setSize(n.x,n.y);const tt=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Q.isPointLight!==!0&&k.updateMatrices(Q,M);const et=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:M.layers;for(let Tt=0;Tt<tt;Tt++){const Ft=k.getCamera(Tt);if(Q.isPointLight){const Z=k.camera,xt=k.matrix,yt=Q.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),Ss.setFromMatrixPosition(Q.matrixWorld),Z.position.copy(Ss),Ga.copy(Z.position),Ga.add(b_[Tt]),Z.up.copy(E_[Tt]),Z.lookAt(Ga),Z.updateMatrixWorld(),xt.makeTranslation(-Ss.x,-Ss.y,-Ss.z),sh.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(sh,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,Tt),s.clear();else{Tt===0&&(s.setRenderTarget(k.map),s.clear());const Z=k.getViewport(Tt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),G.viewport(a)}i=k.getFrustum(Tt),E(g,M,Ft,Q,et,this.type)}k.isPointLightShadow!==!0&&this.type===ws&&y(k,M),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(F,L,U)};function y(T,g){const M=t.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xe(n.x,n.y,{format:yn,type:We}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(g,null,M,d,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(g,null,M,f,S,null)}function R(T,g,M,F){let L=null;const U=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=M.isPointLight===!0?l:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=L.uuid,q=g.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let V=P[q];V===void 0&&(V=L.clone(),P[q]=V,g.addEventListener("dispose",w)),L=V}if(L.visible=g.visible,L.wireframe=g.wireframe,F===ws?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:u[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=s.properties.get(L);G.light=M}return L}function E(T,g,M,F,L,U){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ws)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const P=t.update(T),V=T.material;if(Array.isArray(V)){const Q=P.groups;for(let k=0,nt=Q.length;k<nt;k++){const X=Q[k],tt=V[X.materialIndex];if(tt&&tt.visible){const et=R(T,tt,F,U);T.onBeforeShadow(s,T,g,M,P,et,X),s.renderBufferDirect(M,null,P,et,T,X),T.onAfterShadow(s,T,g,M,P,et,X)}}}else if(V.visible){const Q=R(T,V,F,U);T.onBeforeShadow(s,T,g,M,P,Q,null),s.renderBufferDirect(M,null,P,Q,T,null),T.onAfterShadow(s,T,g,M,P,Q,null)}}const q=T.children;for(let P=0,V=q.length;P<V;P++)E(q[P],g,M,F,L,U)}function w(T){T.target.removeEventListener("dispose",w);for(const M in c){const F=c[M],L=T.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}}function w_(s,t){function e(){let A=!1;const J=new ce;let W=null;const ht=new ce(0,0,0,0);return{setMask:function(at){W!==at&&!A&&(s.colorMask(at,at,at,at),W=at)},setLocked:function(at){A=at},setClear:function(at,lt,Rt,kt,rt){rt===!0&&(at*=kt,lt*=kt,Rt*=kt),J.set(at,lt,Rt,kt),ht.equals(J)===!1&&(s.clearColor(at,lt,Rt,kt),ht.copy(J))},reset:function(){A=!1,W=null,ht.set(-1,0,0,0)}}}function i(){let A=!1,J=!1,W=null,ht=null,at=null;return{setReversed:function(lt){if(J!==lt){const Rt=t.get("EXT_clip_control");lt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),J=lt;const kt=at;at=null,this.setClear(kt)}},getReversed:function(){return J},setTest:function(lt){lt?vt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(lt){W!==lt&&!A&&(s.depthMask(lt),W=lt)},setFunc:function(lt){if(J&&(lt=Kd[lt]),ht!==lt){switch(lt){case ja:s.depthFunc(s.NEVER);break;case to:s.depthFunc(s.ALWAYS);break;case eo:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case io:s.depthFunc(s.EQUAL);break;case no:s.depthFunc(s.GEQUAL);break;case so:s.depthFunc(s.GREATER);break;case ro:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=lt}},setLocked:function(lt){A=lt},setClear:function(lt){at!==lt&&(at=lt,J&&(lt=1-lt),s.clearDepth(lt))},reset:function(){A=!1,W=null,ht=null,at=null,J=!1}}}function n(){let A=!1,J=null,W=null,ht=null,at=null,lt=null,Rt=null,kt=null,rt=null;return{setTest:function(Ct){A||(Ct?vt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(Ct){J!==Ct&&!A&&(s.stencilMask(Ct),J=Ct)},setFunc:function(Ct,zt,_t){(W!==Ct||ht!==zt||at!==_t)&&(s.stencilFunc(Ct,zt,_t),W=Ct,ht=zt,at=_t)},setOp:function(Ct,zt,_t){(lt!==Ct||Rt!==zt||kt!==_t)&&(s.stencilOp(Ct,zt,_t),lt=Ct,Rt=zt,kt=_t)},setLocked:function(Ct){A=Ct},setClear:function(Ct){rt!==Ct&&(s.clearStencil(Ct),rt=Ct)},reset:function(){A=!1,J=null,W=null,ht=null,at=null,lt=null,Rt=null,kt=null,rt=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,_=[],S=null,m=!1,p=null,y=null,R=null,E=null,w=null,T=null,g=null,M=new mt(0,0,0),F=0,L=!1,U=null,G=null,q=null,P=null,V=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,nt=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=nt>=2);let tt=null,et={};const Tt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),Z=new ce().fromArray(Tt),xt=new ce().fromArray(Ft);function yt(A,J,W,ht){const at=new Uint8Array(4),lt=s.createTexture();s.bindTexture(A,lt),s.texParameteri(A,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(A,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<W;Rt++)A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(J+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return lt}const Pt={};Pt[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(s.DEPTH_TEST),a.setFunc(Ds),$e(!1),oe(Ql),vt(s.CULL_FACE),Ae(Sn);function vt(A){h[A]!==!0&&(s.enable(A),h[A]=!0)}function Bt(A){h[A]!==!1&&(s.disable(A),h[A]=!1)}function he(A,J){return d[A]!==J?(s.bindFramebuffer(A,J),d[A]=J,A===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=J),A===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Dt(A,J){let W=_,ht=!1;if(A){W=f.get(J),W===void 0&&(W=[],f.set(J,W));const at=A.textures;if(W.length!==at.length||W[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Rt=at.length;lt<Rt;lt++)W[lt]=s.COLOR_ATTACHMENT0+lt;W.length=at.length,ht=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,ht=!0);ht&&s.drawBuffers(W)}function jt(A){return S!==A?(s.useProgram(A),S=A,!0):!1}const ee={[Kn]:s.FUNC_ADD,[xd]:s.FUNC_SUBTRACT,[vd]:s.FUNC_REVERSE_SUBTRACT};ee[Md]=s.MIN,ee[Sd]=s.MAX;const Wt={[yd]:s.ZERO,[bd]:s.ONE,[Ed]:s.SRC_COLOR,[Eh]:s.SRC_ALPHA,[Pd]:s.SRC_ALPHA_SATURATE,[Rd]:s.DST_COLOR,[wd]:s.DST_ALPHA,[Td]:s.ONE_MINUS_SRC_COLOR,[Th]:s.ONE_MINUS_SRC_ALPHA,[Cd]:s.ONE_MINUS_DST_COLOR,[Ad]:s.ONE_MINUS_DST_ALPHA,[Ld]:s.CONSTANT_COLOR,[Dd]:s.ONE_MINUS_CONSTANT_COLOR,[Id]:s.CONSTANT_ALPHA,[Nd]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(A,J,W,ht,at,lt,Rt,kt,rt,Ct){if(A===Sn){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(vt(s.BLEND),m=!0),A!==_d){if(A!==p||Ct!==L){if((y!==Kn||w!==Kn)&&(s.blendEquation(s.FUNC_ADD),y=Kn,w=Kn),Ct)switch(A){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ls:s.blendFunc(s.ONE,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",A);break}else switch(A){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jl:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",A);break}R=null,E=null,T=null,g=null,M.set(0,0,0),F=0,p=A,L=Ct}return}at=at||J,lt=lt||W,Rt=Rt||ht,(J!==y||at!==w)&&(s.blendEquationSeparate(ee[J],ee[at]),y=J,w=at),(W!==R||ht!==E||lt!==T||Rt!==g)&&(s.blendFuncSeparate(Wt[W],Wt[ht],Wt[lt],Wt[Rt]),R=W,E=ht,T=lt,g=Rt),(kt.equals(M)===!1||rt!==F)&&(s.blendColor(kt.r,kt.g,kt.b,rt),M.copy(kt),F=rt),p=A,L=!1}function me(A,J){A.side===Pi?Bt(s.CULL_FACE):vt(s.CULL_FACE);let W=A.side===Ne;J&&(W=!W),$e(W),A.blending===Ps&&A.transparent===!1?Ae(Sn):Ae(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);const ht=A.stencilWrite;o.setTest(ht),ht&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Se(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(A){U!==A&&(A?s.frontFace(s.CW):s.frontFace(s.CCW),U=A)}function oe(A){A!==pd?(vt(s.CULL_FACE),A!==G&&(A===Ql?s.cullFace(s.BACK):A===md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),G=A}function Ei(A){A!==q&&(k&&s.lineWidth(A),q=A)}function Se(A,J,W){A?(vt(s.POLYGON_OFFSET_FILL),(P!==J||V!==W)&&(P=J,V=W,a.getReversed()&&(J=-J,W=-W),s.polygonOffset(J,W))):Bt(s.POLYGON_OFFSET_FILL)}function ni(A){A?vt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function si(A){A===void 0&&(A=s.TEXTURE0+Q-1),tt!==A&&(s.activeTexture(A),tt=A)}function ri(A,J,W){W===void 0&&(tt===null?W=s.TEXTURE0+Q-1:W=tt);let ht=et[W];ht===void 0&&(ht={type:void 0,texture:void 0},et[W]=ht),(ht.type!==A||ht.texture!==J)&&(tt!==W&&(s.activeTexture(W),tt=W),s.bindTexture(A,J||Pt[A]),ht.type=A,ht.texture=J)}function I(){const A=et[tt];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ai(){try{s.compressedTexImage2D(...arguments)}catch(A){Kt("WebGLState:",A)}}function re(){try{s.compressedTexImage3D(...arguments)}catch(A){Kt("WebGLState:",A)}}function ae(){try{s.texSubImage2D(...arguments)}catch(A){Kt("WebGLState:",A)}}function pt(){try{s.texSubImage3D(...arguments)}catch(A){Kt("WebGLState:",A)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(A){Kt("WebGLState:",A)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(A){Kt("WebGLState:",A)}}function Nt(){try{s.texStorage2D(...arguments)}catch(A){Kt("WebGLState:",A)}}function b(){try{s.texStorage3D(...arguments)}catch(A){Kt("WebGLState:",A)}}function x(){try{s.texImage2D(...arguments)}catch(A){Kt("WebGLState:",A)}}function B(){try{s.texImage3D(...arguments)}catch(A){Kt("WebGLState:",A)}}function st(A){return u[A]!==void 0?u[A]:s.getParameter(A)}function j(A,J){u[A]!==J&&(s.pixelStorei(A,J),u[A]=J)}function ot(A){Z.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),Z.copy(A))}function dt(A){xt.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),xt.copy(A))}function Y(A,J){let W=c.get(J);W===void 0&&(W=new WeakMap,c.set(J,W));let ht=W.get(A);ht===void 0&&(ht=s.getUniformBlockIndex(J,A.name),s.uniformBlockBinding(J,ht,ht),W.set(A,ht))}function K(A,J,W){const at=c.get(J).get(A);l[at]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,at,W),l[at]=W)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},tt=null,et={},d={},l={},f=new WeakMap,_=[],S=null,m=!1,p=null,y=null,R=null,E=null,w=null,T=null,g=null,M=new mt(0,0,0),F=0,L=!1,U=null,G=null,q=null,P=null,V=null,Z.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Bt,bindFramebuffer:he,drawBuffers:Dt,useProgram:jt,setBlending:Ae,setMaterial:me,setFlipSided:$e,setCullFace:oe,setLineWidth:Ei,setPolygonOffset:Se,setScissorTest:ni,activeTexture:si,bindTexture:ri,unbindTexture:I,compressedTexImage2D:ai,compressedTexImage3D:re,texImage2D:x,texImage3D:B,pixelStorei:j,getParameter:st,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Nt,texStorage3D:b,texSubImage2D:ae,texSubImage3D:pt,compressedTexSubImage2D:ge,compressedTexSubImage3D:Lt,scissor:ot,viewport:dt,reset:ct}}function A_(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u=new Set;let d;const f=new WeakMap,_=new Set,S=new FinalizationRegistry(b=>_.delete(b));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(b,x){return m?new OffscreenCanvas(b,x):Os("canvas")}function y(b,x,B){let st=1;const j=Nt(b);if((j.width>B||j.height>B)&&(st=B/Math.max(j.width,j.height)),st<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ot=Math.floor(st*j.width),dt=Math.floor(st*j.height);d===void 0&&(d=p(ot,dt));const Y=x?p(ot,dt):d;return Y.width=ot,Y.height=dt,Y.getContext("2d").drawImage(b,0,0,ot,dt),It("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ot+"x"+dt+")."),Y}else return"data"in b&&It("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function R(b){return b.generateMipmaps}function E(b){s.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(b,x,B,st,j,ot=!1){if(b!==null){if(s[b]!==void 0)return s[b];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let dt;st&&(dt=t.get("EXT_texture_norm16"),dt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8),B===s.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),B===s.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8),B===s.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),B===s.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),B===s.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const K=ot?Yr:Yt.getTransfer(j);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=K===Qt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),B===s.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(b,x){let B;return b?x===null||x===Di||x===ts?B=s.DEPTH24_STENCIL8:x===Mi?B=s.DEPTH32F_STENCIL8:x===Us&&(B=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===ts?B=s.DEPTH_COMPONENT24:x===Mi?B=s.DEPTH_COMPONENT32F:x===Us&&(B=s.DEPTH_COMPONENT16),B}function M(b,x){return R(b)===!0||b.isFramebufferTexture&&b.minFilter!==se&&b.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function F(b){const x=new WeakRef(b);i.get(b).__ref=x,_.add(x),S.register(b,x,x)}function L(b){const x=i.get(b).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function U(b){q(b.target)}function G(b){P(b.target)}function q(b){b.removeEventListener("dispose",U),L(b),Q(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function P(b){b.removeEventListener("dispose",G),L(b),nt(b)}function V(){for(const b of _){const x=b.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):q(x))}_.clear(),u.clear()}function Q(b){const x=i.get(b);if(x.__webglInit===void 0)return;const B=b.source,st=f.get(B);if(st){const j=st[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(b),Object.keys(st).length===0&&f.delete(B)}i.remove(b)}function k(b){const x=i.get(b);s.deleteTexture(x.__webglTexture);const B=b.source,st=f.get(B);delete st[x.__cacheKey],a.memory.textures--}function nt(b){const x=i.get(b);x.__depthDisposeCallback&&x.__depthDisposeCallback();const B=b.depthTexture;if(B&&B.renderTarget===b&&q(B),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ot=0;ot<x.__webglFramebuffer[j].length;ot++)s.deleteFramebuffer(x.__webglFramebuffer[j][ot]);else s.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)s.deleteFramebuffer(x.__webglFramebuffer[j]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const st=b.textures;for(let j=0,ot=st.length;j<ot;j++){const dt=i.get(st[j]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(st[j])}i.remove(b)}let X=0;function tt(){X=0}function et(){return X}function Tt(b){X=b}function Ft(){const b=X;return b>=n.maxTextures&&It("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,b}function Z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function xt(b,x){const B=i.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const st=b.image;if(st===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{me(B,b,x);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function yt(b,x){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){me(B,b,x);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function Pt(b,x){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){me(B,b,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function vt(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){$e(B,b,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const Bt={[Ns]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[ao]:s.MIRRORED_REPEAT},he={[se]:s.NEAREST,[Od]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[ha]:s.LINEAR_MIPMAP_NEAREST,[Wi]:s.LINEAR_MIPMAP_LINEAR},Dt={[Gd]:s.NEVER,[Fh]:s.ALWAYS,[Hd]:s.LESS,[Nh]:s.LEQUAL,[Vd]:s.EQUAL,[Uh]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function jt(b,x){if(x.type===Mi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===He||x.magFilter===ha||x.magFilter===$s||x.magFilter===Wi||x.minFilter===He||x.minFilter===ha||x.minFilter===$s||x.minFilter===Wi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,Bt[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,Bt[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,Bt[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,he[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===se||x.minFilter!==$s&&x.minFilter!==Wi||x.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ee(b,x){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",U),F(x));const st=x.source;let j=f.get(st);j===void 0&&(j={},f.set(st,j));const ot=Z(x);if(ot!==b.__cacheKey){j[ot]===void 0&&(j[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ot].usedTimes++;const dt=j[b.__cacheKey];dt!==void 0&&(j[b.__cacheKey].usedTimes--,dt.usedTimes===0&&k(x)),b.__cacheKey=ot,b.__webglTexture=j[ot].texture}return B}function Wt(b,x,B){return Math.floor(Math.floor(b/B)/x)}function Ae(b,x,B,st){const ot=b.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,st,x.data);else{ot.sort((A,J)=>A.start-J.start);let dt=0;for(let A=1;A<ot.length;A++){const J=ot[dt],W=ot[A],ht=J.start+J.count,at=Wt(W.start,x.width,4),lt=Wt(J.start,x.width,4);W.start<=ht+1&&at===lt&&Wt(W.start+W.count-1,x.width,4)===at?J.count=Math.max(J.count,W.start+W.count-J.start):(++dt,ot[dt]=W)}ot.length=dt+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let A=0,J=ot.length;A<J;A++){const W=ot[A],ht=Math.floor(W.start/4),at=Math.ceil(W.count/4),lt=ht%x.width,Rt=Math.floor(ht/x.width),kt=at,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(s.TEXTURE_2D,0,lt,Rt,kt,rt,B,st,x.data)}b.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function me(b,x,B){let st=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=s.TEXTURE_3D);const j=ee(b,x),ot=x.source;e.bindTexture(st,b.__webglTexture,s.TEXTURE0+B);const dt=i.get(ot);if(ot.version!==dt.__version||j===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const rt=Yt.getPrimaries(Yt.workingColorSpace),Ct=x.colorSpace===nn?null:Yt.getPrimaries(x.colorSpace),zt=x.colorSpace===nn||rt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let K=y(x.image,!1,n.maxTextureSize);K=Lt(x,K);const ct=r.convert(x.format,x.colorSpace),A=r.convert(x.type);let J=T(x.internalFormat,ct,A,x.normalized,x.colorSpace,x.isVideoTexture);jt(st,x);let W;const ht=x.mipmaps,at=x.isVideoTexture!==!0,lt=dt.__version===void 0||j===!0,Rt=ot.dataReady,kt=M(x,K);if(x.isDepthTexture)J=g(x.format===sn,x.type),lt&&(at?e.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ct,A,null));else if(x.isDataTexture)if(ht.length>0){at&&lt&&e.texStorage2D(s.TEXTURE_2D,kt,J,ht[0].width,ht[0].height);for(let rt=0,Ct=ht.length;rt<Ct;rt++)W=ht[rt],at?Rt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,W.width,W.height,ct,A,W.data):e.texImage2D(s.TEXTURE_2D,rt,J,W.width,W.height,0,ct,A,W.data);x.generateMipmaps=!1}else at?(lt&&e.texStorage2D(s.TEXTURE_2D,kt,J,K.width,K.height),Rt&&Ae(x,K,ct,A)):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ct,A,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){at&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,J,ht[0].width,ht[0].height,K.depth);for(let rt=0,Ct=ht.length;rt<Ct;rt++)if(W=ht[rt],x.format!==Si)if(ct!==null)if(at){if(Rt)if(x.layerUpdates.size>0){const zt=Oc(W.width,W.height,x.format,x.type);for(const _t of x.layerUpdates){const te=W.data.subarray(_t*zt/W.data.BYTES_PER_ELEMENT,(_t+1)*zt/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,_t,W.width,W.height,1,ct,te)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,W.width,W.height,K.depth,ct,W.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,J,W.width,W.height,K.depth,0,W.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,W.width,W.height,K.depth,ct,A,W.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,J,W.width,W.height,K.depth,0,ct,A,W.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(s.TEXTURE_2D,kt,J,ht[0].width,ht[0].height);for(let rt=0,Ct=ht.length;rt<Ct;rt++)W=ht[rt],x.format!==Si?ct!==null?at?Rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,W.width,W.height,ct,W.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,J,W.width,W.height,0,W.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Rt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,W.width,W.height,ct,A,W.data):e.texImage2D(s.TEXTURE_2D,rt,J,W.width,W.height,0,ct,A,W.data)}else if(x.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,J,K.width,K.height,K.depth),Rt)if(x.layerUpdates.size>0){const rt=Oc(K.width,K.height,x.format,x.type);for(const Ct of x.layerUpdates){const zt=K.data.subarray(Ct*rt/K.data.BYTES_PER_ELEMENT,(Ct+1)*rt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,K.width,K.height,1,ct,A,zt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,A,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ct,A,K.data);else if(x.isData3DTexture)at?(lt&&e.texStorage3D(s.TEXTURE_3D,kt,J,K.width,K.height,K.depth),Rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,A,K.data)):e.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ct,A,K.data);else if(x.isFramebufferTexture){if(lt)if(at)e.texStorage2D(s.TEXTURE_2D,kt,J,K.width,K.height);else{let rt=K.width,Ct=K.height;for(let zt=0;zt<kt;zt++)e.texImage2D(s.TEXTURE_2D,zt,J,rt,Ct,0,ct,A,null),rt>>=1,Ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),K.parentNode!==rt){rt.appendChild(K),u.add(x),rt.onpaint=Ct=>{const zt=Ct.changedElements;for(const _t of u)zt.includes(_t.image)&&(_t.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const zt=s.RGBA,_t=s.RGBA,te=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,zt,_t,te,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&lt){const rt=Nt(ht[0]);e.texStorage2D(s.TEXTURE_2D,kt,J,rt.width,rt.height)}for(let rt=0,Ct=ht.length;rt<Ct;rt++)W=ht[rt],at?Rt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ct,A,W):e.texImage2D(s.TEXTURE_2D,rt,J,ct,A,W);x.generateMipmaps=!1}else if(at){if(lt){const rt=Nt(K);e.texStorage2D(s.TEXTURE_2D,kt,J,rt.width,rt.height)}Rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,A,K)}else e.texImage2D(s.TEXTURE_2D,0,J,ct,A,K);R(x)&&x.mipmapsAutoUpdate===!0&&E(st),dt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function $e(b,x,B){if(x.image.length!==6)return;const st=ee(b,x),j=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+B);const ot=i.get(j);if(j.version!==ot.__version||st===!0){e.activeTexture(s.TEXTURE0+B);const dt=Yt.getPrimaries(Yt.workingColorSpace),Y=x.colorSpace===nn?null:Yt.getPrimaries(x.colorSpace),K=x.colorSpace===nn||dt===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ct=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,J=[];for(let _t=0;_t<6;_t++)!ct&&!A?J[_t]=y(x.image[_t],!0,n.maxCubemapSize):J[_t]=A?x.image[_t].image:x.image[_t],J[_t]=Lt(x,J[_t]);const W=J[0],ht=r.convert(x.format,x.colorSpace),at=r.convert(x.type);let lt=T(x.internalFormat,ht,at,x.normalized,x.colorSpace);const Rt=x.isVideoTexture!==!0,kt=ot.__version===void 0||st===!0,rt=j.dataReady;let Ct=M(x,W);jt(s.TEXTURE_CUBE_MAP,x);let zt;if(x.isDepthTexture){if(lt=g(x.format===sn,x.type),kt)if(Rt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,lt,W.width,W.height);else for(let _t=0;_t<6;_t++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,W.width,W.height,0,ht,at,null)}else if(ct){Rt&&kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,lt,W.width,W.height);for(let _t=0;_t<6;_t++){zt=J[_t].mipmaps;for(let te=0;te<zt.length;te++){const ye=zt[te];x.format!==Si?ht!==null?Rt?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te,0,0,ye.width,ye.height,ht,ye.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te,lt,ye.width,ye.height,0,ye.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te,0,0,ye.width,ye.height,ht,at,ye.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te,lt,ye.width,ye.height,0,ht,at,ye.data)}}}else{if(zt=x.mipmaps,Rt&&kt){zt.length>0&&Ct++;const _t=Nt(J[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,lt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(A){Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,J[_t].width,J[_t].height,ht,at,J[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,J[_t].width,J[_t].height,0,ht,at,J[_t].data);for(let te=0;te<zt.length;te++){const Yi=zt[te].image[_t].image;Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te+1,0,0,Yi.width,Yi.height,ht,at,Yi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te+1,lt,Yi.width,Yi.height,0,ht,at,Yi.data)}}else{Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ht,at,J[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,ht,at,J[_t]);for(let te=0;te<zt.length;te++){const ye=zt[te];Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te+1,0,0,ht,at,ye.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,te+1,lt,ht,at,ye.image[_t])}}}R(x)&&x.mipmapsAutoUpdate===!0&&E(s.TEXTURE_CUBE_MAP),ot.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function oe(b,x,B,st,j,ot){const dt=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),K=T(B.internalFormat,dt,Y,B.normalized,B.colorSpace),ct=i.get(x),A=i.get(B);if(A.__renderTarget=x,!ct.__hasExternalTextures){const J=Math.max(1,x.width>>ot),W=Math.max(1,x.height>>ot);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,ot,K,J,W,x.depth,0,dt,Y,null):e.texImage2D(j,ot,K,J,W,0,dt,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),pt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,j,A.__webglTexture,0,ae(x)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,j,A.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ei(b,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer){const st=x.depthTexture,j=st&&st.isDepthTexture?st.type:null,ot=g(x.stencilBuffer,j),dt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae(x),ot,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae(x),ot,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ot,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,b)}else{const st=x.textures;for(let j=0;j<st.length;j++){const ot=st[j],dt=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),K=T(ot.internalFormat,dt,Y,ot.normalized,ot.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae(x),K,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae(x),K,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,K,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(b,x,B){const st=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(x.depthTexture);j.__renderTarget=x;const ot=st?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||ot.width!==x.width||ot.height!==x.height)&&(ot.width=x.width,ot.height=x.height,x.depthTexture.needsUpdate=!0),st?vt(x.depthTexture,0):xt(x.depthTexture,0);const dt=j.__webglTexture,Y=ae(x),K=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,ct=x.depthTexture.format===sn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ln)pt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,K,dt,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,ct,K,dt,0);else if(x.depthTexture.format===sn)pt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,K,dt,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,ct,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ni(b){const x=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const st=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),st){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,st.removeEventListener("dispose",j)};st.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=st}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let st=0;st<6;st++)Se(x.__webglFramebuffer[st],b,st);else b.texture.mipmaps.length>0?Se(x.__webglFramebuffer[0],b,0):Se(x.__webglFramebuffer,b,0);else if(B){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]===void 0)x.__webglDepthbuffer[st]=s.createRenderbuffer(),Ei(x.__webglDepthbuffer[st],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ot)}}else if(b.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ei(x.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function si(b,x,B){const st=i.get(b);x!==void 0&&oe(st.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ni(b)}function ri(b){const x=b.texture,B=i.get(b),st=i.get(x);b.addEventListener("dispose",G),F(b);const j=b.textures,ot=b.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(dt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=x.version,a.memory.textures++),ot){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[Y][K]=s.createFramebuffer()}else B.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(dt)for(let Y=0,K=j.length;Y<K;Y++){const ct=i.get(j[Y]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&pt(b)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){const K=j[Y];B.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const ct=r.convert(K.format,K.colorSpace),A=r.convert(K.type),J=T(K.internalFormat,ct,A,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),W=ae(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,J,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ei(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),jt(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)oe(B.__webglFramebuffer[Y][K],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else oe(B.__webglFramebuffer[Y],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);R(x)?E(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Y=0,K=j.length;Y<K;Y++){const ct=j[Y],A=i.get(ct);let J=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,A.__webglTexture),jt(J,ct),oe(B.__webglFramebuffer,b,ct,s.COLOR_ATTACHMENT0+Y,J,0),R(ct)&&E(J)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,st.__webglTexture),jt(Y,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)oe(B.__webglFramebuffer[K],b,x,s.COLOR_ATTACHMENT0,Y,K);else oe(B.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,Y,0);R(x)?E(Y):x.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}b.depthBuffer&&ni(b)}function I(b){const x=b.textures;for(let B=0,st=x.length;B<st;B++){const j=x[B];if(R(j)&&j.mipmapsAutoUpdate===!0){const ot=w(b),dt=i.get(j).__webglTexture;e.bindTexture(ot,dt),E(ot),e.unbindTexture()}}}const ai=[];function re(b){if(b.samples>0){if(pt(b)===!1){const x=b.textures,B=b.width,st=b.height;let j=s.COLOR_BUFFER_BIT;const ot=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(b),Y=x.length>1;if(Y)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);const A=i.get(x[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,A,0)}s.blitFramebuffer(0,0,B,st,0,0,B,st,j,s.NEAREST),l===!0&&(ai.length=0,ai.push(s.COLOR_ATTACHMENT0+ct),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&ai.push(ot),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ai))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);const A=i.get(x[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,A,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const x=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ae(b){return Math.min(n.maxSamples,b.samples)}function pt(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Lt(b,x){const B=b.colorSpace,st=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==qr&&B!==nn&&(Yt.getTransfer(B)===Qt?(st!==Si||j!==ti)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",B)),x}function Nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=tt,this.getTextureUnits=et,this.setTextureUnits=Tt,this.setTexture2D=xt,this.setTexture2DArray=yt,this.setTexture3D=Pt,this.setTextureCube=vt,this.rebindTextures=si,this.setupRenderTarget=ri,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ni,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=pt,this.dispose=V}function R_(s,t){function e(i,n=nn){let r;const a=Yt.getTransfer(n);if(i===ti)return s.UNSIGNED_BYTE;if(i===fl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===pl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return s.BYTE;if(i===Ch)return s.SHORT;if(i===Us)return s.UNSIGNED_SHORT;if(i===dl)return s.INT;if(i===Di)return s.UNSIGNED_INT;if(i===Mi)return s.FLOAT;if(i===We)return s.HALF_FLOAT;if(i===Dh)return s.ALPHA;if(i===Ih)return s.RGB;if(i===Si)return s.RGBA;if(i===ln)return s.DEPTH_COMPONENT;if(i===sn)return s.DEPTH_STENCIL;if(i===ml)return s.RED;if(i===gl)return s.RED_INTEGER;if(i===yn)return s.RG;if(i===_l)return s.RG_INTEGER;if(i===xl)return s.RGBA_INTEGER;if(i===Lr||i===Dr||i===Ir||i===Nr)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oo||i===lo||i===co||i===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uo||i===fo||i===po||i===mo||i===go||i===Wr||i===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uo||i===fo)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===po)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===mo)return r.COMPRESSED_R11_EAC;if(i===go)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wr)return r.COMPRESSED_RG11_EAC;if(i===_o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xo||i===vo||i===Mo||i===So||i===yo||i===bo||i===Eo||i===To||i===wo||i===Ao||i===Ro||i===Co||i===Po||i===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===So)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===To)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ao)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ro)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Co)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Po)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===Io||i===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Do)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uo||i===Fo||i===Xr||i===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Kh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ve({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends En{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const S=typeof XRWebGLBinding<"u",m=new L_,p={},y=e.getContextAttributes();let R=null,E=null;const w=[],T=[],g=new At;let M=null,F=null;const L=new hi;L.viewport=new ce;const U=new hi;U.viewport=new ce;const G=[L,U],q=new Gf;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let xt=w[Z];return xt===void 0&&(xt=new va,w[Z]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(Z){let xt=w[Z];return xt===void 0&&(xt=new va,w[Z]=xt),xt.getGripSpace()},this.getHand=function(Z){let xt=w[Z];return xt===void 0&&(xt=new va,w[Z]=xt),xt.getHandSpace()};function Q(Z){const xt=T.indexOf(Z.inputSource);if(xt===-1)return;const yt=w[xt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||a),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){n.removeEventListener("select",Q),n.removeEventListener("selectstart",Q),n.removeEventListener("selectend",Q),n.removeEventListener("squeeze",Q),n.removeEventListener("squeezestart",Q),n.removeEventListener("squeezeend",Q),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<w.length;Z++){const xt=T[Z];xt!==null&&(T[Z]=null,w[Z].disconnect(xt))}P=null,V=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(R),f=null,d=null,u=null,n=null,E=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(g.width,g.height,!1),F!==null){const Z=F.camera;Z.fov=F.fov,Z.zoom=F.zoom,Z.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(R=t.getRenderTarget(),n.addEventListener("select",Q),n.addEventListener("selectstart",Q),n.addEventListener("selectend",Q),n.addEventListener("squeeze",Q),n.addEventListener("squeezestart",Q),n.addEventListener("squeezeend",Q),n.addEventListener("end",k),n.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,vt=null;y.depth&&(vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=y.stencil?sn:ln,Pt=y.stencil?ts:Di);const Bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Xe(d.textureWidth,d.textureHeight,{format:Si,type:ti,depthTexture:new es(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,yt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Xe(f.framebufferWidth,f.framebufferHeight,{format:Si,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ft.setContext(n),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Z){for(let xt=0;xt<Z.removed.length;xt++){const yt=Z.removed[xt],Pt=T.indexOf(yt);Pt>=0&&(T[Pt]=null,w[Pt].disconnect(yt))}for(let xt=0;xt<Z.added.length;xt++){const yt=Z.added[xt];let Pt=T.indexOf(yt);if(Pt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=T.length){T.push(yt),Pt=Bt;break}else if(T[Bt]===null){T[Bt]=yt,Pt=Bt;break}if(Pt===-1)break}const vt=w[Pt];vt&&vt.connect(yt)}}function X(Z,xt){xt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(xt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let xt=Z.near,yt=Z.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),q.near=U.near=L.near=xt,q.far=U.far=L.far=yt,(P!==q.near||V!==q.far)&&(n.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,V=q.far),q.layers.mask=Z.layers.mask|6,L.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;const Pt=Z.parent,vt=q.cameras;X(q,Pt);for(let Bt=0;Bt<vt.length;Bt++)X(vt[Bt],Pt);q.projectionMatrix.copy(L.projectionMatrix),q.projectionMatrixInverse.copy(L.projectionMatrixInverse),F===null&&Z.isPerspectiveCamera&&(F={camera:Z,fov:Z.fov,zoom:Z.zoom}),tt(Z,q,Pt)};function tt(Z,xt,yt){yt===null?Z.matrix.copy(xt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(xt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(xt.projectionMatrix),Z.projectionMatrixInverse.copy(xt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(Z){return p[Z]};let et=null;function Tt(Z,xt){if(h=xt.getViewerPose(c||a),_=xt,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Pt=!1;yt.length!==q.cameras.length&&(q.cameras.length=0,Pt=!0);for(let Dt=0;Dt<yt.length;Dt++){const jt=yt[Dt];let ee=null;if(f!==null)ee=f.getViewport(jt);else{const Ae=u.getViewSubImage(d,jt);ee=Ae.viewport,Dt===0&&(t.setRenderTargetTextures(E,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(E))}let Wt=G[Dt];Wt===void 0&&(Wt=new hi,Wt.layers.enable(Dt),Wt.viewport=new ce,G[Dt]=Wt),Wt.matrix.fromArray(jt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(jt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ee.x,ee.y,ee.width,ee.height),Dt===0&&(q.matrix.copy(Wt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Pt===!0&&q.cameras.push(Wt)}const vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){u=i.getBinding();const Dt=u.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&m.init(Dt,n.renderState)}if(vt&&vt.includes("camera-access")&&S){t.state.unbindTexture(),u=i.getBinding();for(let Dt=0;Dt<yt.length;Dt++){const jt=yt[Dt].camera;if(jt){let ee=p[jt];ee||(ee=new Kh,p[jt]=ee);const Wt=u.getCameraImage(jt);ee.sourceTexture=Wt}}}}for(let yt=0;yt<w.length;yt++){const Pt=T[yt],vt=w[yt];Pt!==null&&vt!==void 0&&vt.update(Pt,xt,c||a)}et&&et(Z,xt),xt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xt}),_=null}const Ft=new tu;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}}const I_=new Zt,hu=new Ut;hu.set(-1,0,0,0,1,0,0,0,1);function N_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,R,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ne&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ne&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),R=y.envMap,E=y.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function U_(s,t,e,i){let n={},r={};function a(y,R){const E=R.program;i.uniformBlockBinding(y,E,n[y.id])}function o(y,R){let E=n[y.id];E===void 0&&(_(y),E=l(y),n[y.id]=E,y.addEventListener("dispose",m));const w=R.program;i.updateUBOMapping(y,w);const T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){const R=s.createBuffer(),E=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),R}function c(y){const R=n[y.id],E=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let T=0,g=E.length;T<g;T++){const M=E[T];if(Array.isArray(M))for(let F=0,L=M.length;F<L;F++)h(M[F],T,F,w);else h(M,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,R,E,w){if(d(y,R,E,w)===!0){const T=y.__offset,g=y.value;if(Array.isArray(g)){let M=0;for(let F=0;F<g.length;F++){const L=g[F],U=S(L,!0);u(L,y.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,y.__data)}}function u(y,R,E){typeof y=="number"||typeof y=="boolean"?R[E]=y:y.isMatrix3?(R[E]=y.elements[0],R[E+1]=y.elements[1],R[E+2]=y.elements[2],R[E+3]=0,R[E+4]=y.elements[3],R[E+5]=y.elements[4],R[E+6]=y.elements[5],R[E+7]=0,R[E+8]=y.elements[6],R[E+9]=y.elements[7],R[E+10]=y.elements[8],R[E+11]=0):ArrayBuffer.isView(y)?R.set(y.subarray(0,R.length-E),E):y.toArray(R,E)}function d(y,R,E,w){const T=y.value,g=R+"_"+E;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);const M=w[g];let F=!1;for(let L=0;L<T.length;L++)f(T[L],M,L)===!0&&(F=!0);return F}return f(T,w,g)}function f(y,R,E){if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:ArrayBuffer.isView(y)?R[E]=y.slice():R[E]=y.clone(),!0;{const w=R[E];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return R[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function _(y){const R=y.uniforms;let E=0;const w=16;for(let g=0,M=R.length;g<M;g++){const F=Array.isArray(R[g])?R[g]:[R[g]];for(let L=0,U=F.length;L<U;L++){const G=F[L],q=Array.isArray(G.value)?G.value:[G.value],P=Array.isArray(R[g])||Array.isArray(G.value);let V=E;for(let k=0,nt=q.length;k<nt;k++){const X=q[k],tt=S(X,P),et=E%w,Tt=et%tt.boundary,Ft=et+Tt;E+=Tt,Ft!==0&&w-Ft<tt.storage&&(E+=w-Ft),k===0&&(V=E),E+=tt.storage}const Q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Q((E-V)/Float32Array.BYTES_PER_ELEMENT),G.__offset=V}}const T=E%w;return T>0&&(E+=w-T),y.__size=E,y.__cache={},this}function S(y,R){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):It("WebGLRenderer: Unsupported uniform value type.",y),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(y){const R=y.target;R.removeEventListener("dispose",m),s.deleteBuffer(n[R.id]),delete n[R.id],delete r[R.id]}function p(){for(const y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:p}}const F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function O_(){return wi===null&&(wi=new bl(F_,16,16,yn,We),wi.name="DFG_LUT",wi.minFilter=He,wi.magFilter=He,wi.wrapS=di,wi.wrapT=di,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class B_{constructor(t={}){const{canvas:e=Yd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ti}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=f,m=new Set([xl,_l,gl]),p=new Set([ti,Di,Us,ts,fl,pl]),y=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const g=[],M=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,G=null,q=null,P=null,V=null;this._outputColorSpace=fe;let Q=0,k=0,nt=null,X=-1,tt=null;const et=new ce,Tt=new ce;let Ft=null;const Z=new mt(0);let xt=0,yt=e.width,Pt=e.height,vt=1,Bt=null,he=null;const Dt=new ce(0,0,yt,Pt),jt=new ce(0,0,yt,Pt);let ee=!1;const Wt=new Bs,Ae=new El;let me=!1,$e=!1;const oe=new Zt,Ei=new N,Se=new ce,ni={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let si=!1;function ri(){return nt===null?vt:1}let I=i;function ai(v,C){return e.getContext(v,C)}let re,ae,pt,ge,Lt,Nt,b,x,B,st,j,ot,dt,Y,K,ct,A,J,W,ht,at,lt,Rt;try{const v={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),I===null){const C="webgl2";if(I=ai(C,v),I===null)throw ai(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(v){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Kt("WebGLRenderer: "+v.message),v}function kt(){re=new Gg(I),re.init(),at=new R_(I,re),ae=new Pg(I,re,t,at),pt=new w_(I,re),ae.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),q=I.createFramebuffer(),P=I.createFramebuffer(),V=I.createFramebuffer(),ge=new Wg(I),Lt=new d_,Nt=new A_(I,re,pt,Lt,ae,at,ge),b=new kg(L),x=new qf(I),lt=new Rg(I,x),B=new Hg(I,x,ge,lt),st=new qg(I,B,x,lt,ge),J=new Xg(I,ae,Nt),K=new Lg(Lt),j=new u_(L,b,re,ae,lt,K),ot=new N_(L,Lt),dt=new p_,Y=new M_(re),A=new Ag(L,b,pt,st,_,l),ct=new T_(L,st,ae),Rt=new U_(I,ge,ae,pt),W=new Cg(I,re,ge),ht=new Vg(I,re,ge),ge.programs=j.programs,L.capabilities=ae,L.extensions=re,L.properties=Lt,L.renderLists=dt,L.shadowMap=ct,L.state=pt,L.info=ge}S!==ti&&(F=new $g(S,e.width,e.height,o,n,r));const rt=new D_(L,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(v){v!==void 0&&(vt=v,this.setSize(yt,Pt,!1))},this.getSize=function(v){return v.set(yt,Pt)},this.setSize=function(v,C,H=!0){if(rt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=v,Pt=C,e.width=Math.floor(v*vt),e.height=Math.floor(C*vt),H===!0&&(e.style.width=v+"px",e.style.height=C+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(yt*vt,Pt*vt).floor()},this.setDrawingBufferSize=function(v,C,H){yt=v,Pt=C,vt=H,e.width=Math.floor(v*H),e.height=Math.floor(C*H),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(S===ti){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(Dt)},this.setViewport=function(v,C,H,O){v.isVector4?Dt.set(v.x,v.y,v.z,v.w):Dt.set(v,C,H,O),pt.viewport(et.copy(Dt).multiplyScalar(ri()).round())},this.getScissor=function(v){return v.copy(jt)},this.setScissor=function(v,C,H,O){v.isVector4?jt.set(v.x,v.y,v.z,v.w):jt.set(v,C,H,O),pt.scissor(Tt.copy(jt).multiplyScalar(ri()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(v){pt.setScissorTest(ee=v)},this.setOpaqueSort=function(v){Bt=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,H=!0){let O=0;if(v){let z=!1;if(nt!==null){const ft=nt.texture.format;z=m.has(ft)}if(z){const ft=nt.texture.type,St=p.has(ft),ut=A.getClearColor(),Mt=A.getClearAlpha(),wt=ut.r,Ot=ut.g,Xt=ut.b;St?(y[0]=wt,y[1]=Ot,y[2]=Xt,y[3]=Mt,I.clearBufferuiv(I.COLOR,0,y)):(R[0]=wt,R[1]=Ot,R[2]=Xt,R[3]=Mt,I.clearBufferiv(I.COLOR,0,R))}else O|=I.COLOR_BUFFER_BIT}C&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),A.dispose(),dt.dispose(),Y.dispose(),Nt.dispose(),Lt.dispose(),b.dispose(),st.dispose(),B.dispose(),lt.dispose(),Rt.dispose(),j.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Gl),rt.removeEventListener("sessionend",Hl),hn.stop()};function Ct(v){v.preventDefault(),$r("WebGLRenderer: Context Lost."),U=!0}function zt(){$r("WebGLRenderer: Context Restored."),U=!1;const v=ge.autoReset,C=ct.enabled,H=ct.autoUpdate,O=ct.needsUpdate,z=ct.type;kt(),ge.autoReset=v,ct.enabled=C,ct.autoUpdate=H,ct.needsUpdate=O,ct.type=z}function _t(v){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function te(v){const C=v.target;C.removeEventListener("dispose",te),ye(C)}function ye(v){Yi(v),Lt.remove(v)}function Yi(v){const C=Lt.get(v).programs;C!==void 0&&(C.forEach(function(H){j.releaseProgram(H)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,H,O,z,ft){C===null&&(C=ni);const St=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=hd(v,C,H,O,z);pt.setMaterial(O,St);let Mt=H.index,wt=1;if(O.wireframe===!0){if(Mt=B.getWireframeAttribute(H),Mt===void 0)return;wt=2}const Ot=H.drawRange,Xt=H.attributes.position;let bt=Ot.start*wt,qt=(Ot.start+Ot.count)*wt;ft!==null&&(bt=Math.max(bt,ft.start*wt),qt=Math.min(qt,(ft.start+ft.count)*wt)),Mt!==null?(bt=Math.max(bt,0),qt=Math.min(qt,Mt.count)):Xt!=null&&(bt=Math.max(bt,0),qt=Math.min(qt,Xt.count));const ue=qt-bt;if(ue<0||ue===1/0)return;lt.setup(z,O,ut,H,Mt);let ne,ie=W;if(Mt!==null&&(ne=x.get(Mt),ie=ht,ie.setIndex(ne)),z.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*ri()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(z.isLine){let Pe=O.linewidth;Pe===void 0&&(Pe=1),pt.setLineWidth(Pe*ri()),z.isLineSegments?ie.setMode(I.LINES):z.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else z.isPoints?ie.setMode(I.POINTS):z.isSprite&&ie.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pe=z._multiDrawStarts,Et=z._multiDrawCounts,Oe=z._multiDrawCount,Jt=Mt?x.get(Mt).bytesPerElement:1,un=Lt.get(O).currentProgram.getUniforms();for(let Le=0;Le<Oe;Le++)un.setValue(I,"_gl_DrawID",Le),ie.render(Pe[Le]/Jt,Et[Le])}else if(z.isInstancedMesh)ie.renderInstances(bt,ue,z.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Et=Math.min(H.instanceCount,Pe);ie.renderInstances(bt,ue,Et)}else ie.render(bt,ue)};function kl(v,C,H,O){G!==null&&v.isNodeMaterial&&G.setObject(O,v),me===!0&&K.setState(v,H,!1),v.transparent===!0&&v.side===Pi&&v.forceSinglePass===!1?(v.side=Ne,v.needsUpdate=!0,us(v,C,O),v.side=on,v.needsUpdate=!0,us(v,C,O),v.side=Pi):us(v,C,O)}this.compile=function(v,C,H=null){H===null&&(H=v),G!==null&&G.renderStart(v,C,H),T=Y.get(H),T.init(C),M.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==H&&v.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),$e=this.localClippingEnabled,me=K.init(this.clippingPlanes,$e),me===!0&&K.setGlobalState(this.clippingPlanes,C),G!==null&&ct.render(T.state.shadowsArray,H,C);const O=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const ut=ft[St];kl(ut,H,C,z),O.add(ut)}else kl(ft,H,C,z),O.add(ft)}),T=M.pop(),G!==null&&G.renderEnd(),O},this.compileAsync=function(v,C,H=null){const O=this.compile(v,C,H);return new Promise(z=>{function ft(){if(O.forEach(function(St){const Mt=Lt.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&O.delete(St)}),O.size===0){z(v);return}setTimeout(ft,10)}re.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let aa=null;function ld(v){aa&&aa(v)}function Gl(){hn.stop()}function Hl(){hn.start()}const hn=new tu;hn.setAnimationLoop(ld),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(v){aa=v,rt.setAnimationLoop(v),v===null?hn.stop():hn.start()},rt.addEventListener("sessionstart",Gl),rt.addEventListener("sessionend",Hl),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(v,C);const H=rt.enabled===!0&&rt.isPresenting===!0,O=F!==null&&(nt===null||H)&&F.begin(L,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(C),C=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,C,nt),T=Y.get(v,M.length),T.init(C),T.state.textureUnits=Nt.getTextureUnits(),M.push(T),oe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Ae.setFromArrayCamera(C):Wt.setFromProjectionMatrix(oe,yi,C.reversedDepth),$e=this.localClippingEnabled,me=K.init(this.clippingPlanes,$e),w=dt.get(v,g.length),w.init(),g.push(w),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const St=L.xr.getDepthSensingMesh();St!==null&&oa(St,C,-1/0,L.sortObjects)}oa(v,C,0,L.sortObjects),w.finish(),G!==null&&G.updateLights(T.state.lightsArray),L.sortObjects===!0&&w.sort(Bt,he),si=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,si&&A.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),me===!0&&K.beginShadows();const z=T.state.shadowsArray;if(ct.render(z,v,C),me===!0&&K.endShadows(),(O&&F.hasRenderPass())===!1){const St=w.opaque,ut=w.transmissive;if(T.setupLights(),C.isArrayCamera){const Mt=C.cameras;if(ut.length>0)for(let wt=0,Ot=Mt.length;wt<Ot;wt++){const Xt=Mt[wt];Wl(St,ut,v,Xt)}si&&A.render(v);for(let wt=0,Ot=Mt.length;wt<Ot;wt++){const Xt=Mt[wt];Vl(w,v,Xt,Xt.viewport)}}else ut.length>0&&Wl(St,ut,v,C),si&&A.render(v),Vl(w,v,C)}nt!==null&&k===0&&(Nt.updateMultisampleRenderTarget(nt),Nt.updateRenderTargetMipmap(nt)),O&&F.end(L),v.isScene===!0&&v.onAfterRender(L,v,C),lt.resetDefaultState(),X=-1,tt=null,M.pop(),M.length>0?(T=M[M.length-1],Nt.setTextureUnits(T.state.textureUnits),me===!0&&K.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,G!==null&&G.renderEnd()};function oa(v,C,H,O){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){const St=C.isArrayCamera?Ae:Wt;if(!v.frustumCulled||v.intersectsFrustum(St)){O&&Se.setFromMatrixPosition(v.matrixWorld).applyMatrix4(oe);const ut=st.update(v),Mt=v.material;Mt.visible&&w.push(v,ut,Mt,H,Se.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){const St=C.isArrayCamera?Ae:Wt;if(!v.frustumCulled||v.intersectsFrustum(St)){const ut=st.update(v),Mt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Se.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Se.copy(ut.boundingSphere.center)),Se.applyMatrix4(v.matrixWorld).applyMatrix4(oe)),Array.isArray(Mt)){const wt=ut.groups;for(let Ot=0,Xt=wt.length;Ot<Xt;Ot++){const bt=wt[Ot],qt=Mt[bt.materialIndex];qt&&qt.visible&&w.push(v,ut,qt,H,Se.z,bt,C)}}else Mt.visible&&w.push(v,ut,Mt,H,Se.z,null,C)}}}const ft=v.children;for(let St=0,ut=ft.length;St<ut;St++)oa(ft[St],C,H,O)}function Vl(v,C,H,O){const{opaque:z,transmissive:ft,transparent:St}=v;T.setupLightsView(H),me===!0&&K.setGlobalState(L.clippingPlanes,H),O&&pt.viewport(et.copy(O)),z.length>0&&qs(z,C,H),ft.length>0&&qs(ft,C,H),St.length>0&&qs(St,C,H),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Wl(v,C,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const bt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Xe(1,1,{generateMipmaps:!0,type:bt?We:ti,minFilter:Wi,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const ft=T.state.transmissionRenderTarget[O.id],St=O.viewport||et;ft.setSize(St.z*L.transmissionResolutionScale,St.w*L.transmissionResolutionScale);const ut=L.getRenderTarget(),Mt=L.getActiveCubeFace(),wt=L.getActiveMipmapLevel();L.setRenderTarget(ft),L.getClearColor(Z),xt=L.getClearAlpha(),xt<1&&L.setClearColor(16777215,.5),L.clear(),si&&A.render(H);const Ot=L.toneMapping;L.toneMapping=Xi;const Xt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),me===!0&&K.setGlobalState(L.clippingPlanes,O),qs(v,H,O),Nt.updateMultisampleRenderTarget(ft),Nt.updateRenderTargetMipmap(ft),re.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let qt=0,ue=C.length;qt<ue;qt++){const ne=C[qt],{object:ie,geometry:Pe,material:Et,group:Oe}=ne;if(Et.side===Pi&&ie.layers.test(O.layers)){const Jt=Et.side;Et.side=Ne,Et.needsUpdate=!0,Xl(ie,H,O,Pe,Et,Oe),Et.side=Jt,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Nt.updateMultisampleRenderTarget(ft),Nt.updateRenderTargetMipmap(ft))}L.setRenderTarget(ut,Mt,wt),L.setClearColor(Z,xt),Xt!==void 0&&(O.viewport=Xt),L.toneMapping=Ot}function qs(v,C,H){const O=C.isScene===!0?C.overrideMaterial:null;for(let z=0,ft=v.length;z<ft;z++){const St=v[z],{object:ut,geometry:Mt,group:wt}=St;let Ot=St.material;Ot.allowOverride===!0&&O!==null&&(Ot=O),ut.layers.test(H.layers)&&Xl(ut,C,H,Mt,Ot,wt)}}function Xl(v,C,H,O,z,ft){G!==null&&z.isNodeMaterial&&G.setObject(v,z),v.onBeforeRender(L,C,H,O,z,ft),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(L,C,H,O,v,ft),z.transparent===!0&&z.side===Pi&&z.forceSinglePass===!1?(z.side=Ne,z.needsUpdate=!0,L.renderBufferDirect(H,C,O,z,v,ft),z.side=on,z.needsUpdate=!0,L.renderBufferDirect(H,C,O,z,v,ft),z.side=Pi):L.renderBufferDirect(H,C,O,z,v,ft),v.onAfterRender(L,C,H,O,z,ft)}function ql(v){let C=0;for(const H of v)H.texture!==null&&C++;return C}function us(v,C,H){C.isScene!==!0&&(C=ni);const O=Lt.get(v),z=T.state.lights,ft=T.state.shadowsArray,St=z.state.version,ut=j.getParameters(v,z.state,ft,C,H,T.state.lightProbeGridArray),Mt=j.getProgramCacheKey(ut);let wt=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;const Ot=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=b.get(v.envMap||O.environment,Ot),O.envMapRotation=O.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",te),wt=new Map,O.programs=wt,O.programVariants=new Map);let Xt=wt.get(Mt);if(Xt!==void 0){if(O.currentProgram===Xt&&O.lightsStateVersion===St)return $l(v,ut),Xt}else ut.uniforms=j.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,H,ut),v.onBeforeCompile(ut,L),Xt=j.acquireProgram(ut,Mt),wt.set(Mt,Xt),O.uniforms=ut.uniforms;const bt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=K.uniform),$l(v,ut),O.needsLights=dd(v),O.lightsStateVersion=St,O.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=ql(T.state.lightProbeGridArray),O.currentProgram=Xt,O.uniformsList=null,Xt}function cd(v,C,H,O,z){const ft=Lt.get(v),St=ft.currentProgram.id+","+O+","+z;let ut=ft.programVariants.get(St);return ut===void 0?(ut=us(v,C,H),ft.programVariants.set(St,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=O,ft.toneMapping=z),ut}function Yl(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=Fr.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function $l(v,C){const H=Lt.get(v);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function hd(v,C,H,O,z){C.isScene!==!0&&(C=ni),Nt.resetTextureUnits();const ft=C.fog,St=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,ut=nt===null?L.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Yt.workingColorSpace,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,wt=b.get(O.envMap||St,Mt),Ot=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),bt=!!H.morphAttributes.position,qt=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color;let ne=Xi;O.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ne=L.toneMapping);const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pe=ie!==void 0?ie.length:0,Et=Lt.get(O),Oe=T.state.lights;if(me===!0&&($e===!0||v!==tt)){const le=v===tt&&O.id===X;K.setState(O,v,le)}let Jt=!1,un=!1;O.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Oe.state.version||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==wt||O.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==K.numPlanes||Et.numIntersection!==K.numIntersection)||Et.vertexAlphas!==Ot||Et.vertexTangents!==Xt||Et.morphTargets!==bt||Et.morphNormals!==qt||Et.morphColors!==ue||Et.morphTargetsCount!==Pe||Et.numLightProbeGrids!==ql(T.state.lightProbeGridArray)?Jt=!0:(Et.outputColorSpace!==ut||Et.toneMapping!==ne)&&(un=!0):(Jt=!0,Et.__version=O.version);let Le=Et.currentProgram;(Jt===!0||un===!0)&&(Le=un===!0?cd(O,C,z,ut,ne):us(O,C,z),G&&O.isNodeMaterial&&G.onUpdateProgram(O,Le,Et));let Ys=!1,$i=!1,dn=!1;const $t=Le.getUniforms(),Re=Et.uniforms;if(pt.useProgram(Le.program)&&(Ys=!0,$i=!0,dn=!0),O.id!==X&&(X=O.id,$i=!0),Ys||tt!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),$t.setValue(I,"projectionMatrix",v.projectionMatrix),$t.setValue(I,"viewMatrix",v.matrixWorldInverse);const be=$t.map.cameraPosition;be!==void 0&&be.setValue(I,Ei.setFromMatrixPosition(v.matrixWorld)),ae.logarithmicDepthBuffer&&$t.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$t.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,$i=!0,dn=!0)}if(Et.needsLights&&(Oe.state.sunShadowMap.length>0&&$t.setValue(I,"sunShadowMap",Oe.state.sunShadowMap,Nt),Oe.state.directionalShadowMap.length>0&&$t.setValue(I,"directionalShadowMap",Oe.state.directionalShadowMap,Nt),Oe.state.spotShadowMap.length>0&&$t.setValue(I,"spotShadowMap",Oe.state.spotShadowMap,Nt),Oe.state.pointShadowMap.length>0&&$t.setValue(I,"pointShadowMap",Oe.state.pointShadowMap,Nt)),z.isSkinnedMesh){$t.setOptional(I,z,"bindMatrix"),$t.setOptional(I,z,"bindMatrixInverse");const le=z.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),$t.setValue(I,"boneTexture",le.boneTexture,Nt))}z.isBatchedMesh&&($t.setOptional(I,z,"batchingTexture"),$t.setValue(I,"batchingTexture",z._matricesTexture,Nt),$t.setOptional(I,z,"batchingIdTexture"),$t.setValue(I,"batchingIdTexture",z._indirectTexture,Nt),$t.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&$t.setValue(I,"batchingColorTexture",z._colorsTexture,Nt));const pi=H.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&J.update(z,H,Le),($i||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,$t.setValue(I,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(Re.envMapIntensity.value=C.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=O_()),$i){if($t.setValue(I,"toneMappingExposure",L.toneMappingExposure),Et.needsLights&&ud(Re,dn),ft&&O.fog===!0&&ot.refreshFogUniforms(Re,ft),ot.refreshMaterialUniforms(Re,O,vt,Pt,T.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.numLightProbeGrids>0){const le=E;let be=0;for(const Ui of T.state.lightProbeGridArray)Ui.texture!==null&&(le.textures[be]=Ui.texture,le.min[be]=Ui.boundingBox.min,le.max[be]=Ui.boundingBox.max,le.resolution[be]=Ui.resolution,be++);for(const Ui in le)le[Ui].length=be;Re.probesSH.value=le.textures,Re.probesMin.value=le.min,Re.probesMax.value=le.max,Re.probesResolution.value=le.resolution}Fr.upload(I,Yl(Et),Re,Nt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Fr.upload(I,Yl(Et),Re,Nt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$t.setValue(I,"center",z.center),$t.setValue(I,"modelViewMatrix",z.modelViewMatrix),$t.setValue(I,"normalMatrix",z.normalMatrix),$t.setValue(I,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const le=O.uniformsGroups;for(let be=0,Ui=le.length;be<Ui;be++){const Zl=le[be];Rt.update(Zl,Le),Rt.bind(Zl,Le)}}return Le}function ud(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function dd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,C,H){const O=Lt.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Lt.get(v.texture).__webglTexture=C,Lt.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const H=Lt.get(v);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,H=0){nt=v,Q=C,k=H;let O=null,z=!1,ft=!1;if(v){const ut=Lt.get(v);if(ut.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(I.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(v.viewport),Tt.copy(v.scissor),Ft=v.scissorTest,pt.viewport(et),pt.scissor(Tt),pt.setScissorTest(Ft),X=-1;return}else if(ut.__webglFramebuffer===void 0)Nt.setupRenderTarget(v);else if(ut.__hasExternalTextures)Nt.rebindTextures(v,Lt.get(v.texture).__webglTexture,Lt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ot=v.depthTexture;if(ut.__boundDepthTexture!==Ot){if(Ot!==null&&Lt.has(Ot)&&(v.width!==Ot.image.width||v.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(v)}}const Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);const wt=Lt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(wt[C])?O=wt[C][H]:O=wt[C],z=!0):v.samples>0&&Nt.useMultisampledRTT(v)===!1?O=Lt.get(v).__webglMultisampledFramebuffer:Array.isArray(wt)?O=wt[H]:O=wt,et.copy(v.viewport),Tt.copy(v.scissor),Ft=v.scissorTest}else et.copy(Dt).multiplyScalar(vt).floor(),Tt.copy(jt).multiplyScalar(vt).floor(),Ft=ee;if(H!==0&&(O=q),pt.bindFramebuffer(I.FRAMEBUFFER,O)&&pt.drawBuffers(v,O),pt.viewport(et),pt.scissor(Tt),pt.setScissorTest(Ft),z){const ut=Lt.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,ut.__webglTexture,H)}else if(ft){const ut=C;for(let Mt=0;Mt<v.textures.length;Mt++){const wt=Lt.get(v.textures[Mt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Mt,wt.__webglTexture,H,ut)}}else if(v!==null&&H!==0){const ut=Lt.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ut.__webglTexture,H)}X=-1};function Kl(v){const C=Lt.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=ae.textureFormatReadable(v.format),C.__typeReadable=ae.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,H,O,z,ft,St,ut=0){if(!(v&&v.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){pt.bindFramebuffer(I.FRAMEBUFFER,Mt);try{const wt=v.textures[ut],Ot=wt.format,Xt=wt.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ut);const bt=Kl(wt);if(bt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-O&&H>=0&&H<=v.height-z&&I.readPixels(C,H,O,z,at.convert(Ot),at.convert(Xt),ft)}finally{const wt=nt!==null?Lt.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(v,C,H,O,z,ft,St,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(C>=0&&C<=v.width-O&&H>=0&&H<=v.height-z){pt.bindFramebuffer(I.FRAMEBUFFER,Mt);const wt=v.textures[ut],Ot=wt.format,Xt=wt.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ut);const bt=Kl(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,ft.byteLength,I.STREAM_READ),I.readPixels(C,H,O,z,at.convert(Ot),at.convert(Xt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const ue=nt!==null?Lt.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,ue);const ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $d(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ft),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(qt),I.deleteSync(ne),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,H=0){const O=Math.pow(2,-H),z=Math.floor(v.image.width*O),ft=Math.floor(v.image.height*O),St=C!==null?C.x:0,ut=C!==null?C.y:0;Nt.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,St,ut,z,ft),pt.unbindTexture()},this.copyTextureToTexture=function(v,C,H=null,O=null,z=0,ft=0){let St,ut,Mt,wt,Ot,Xt,bt,qt,ue;const ne=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(H!==null)St=H.max.x-H.min.x,ut=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Ot=H.min.y,Xt=H.isBox3?H.min.z:0;else{const $t=Math.pow(2,-z);St=Math.floor(ne.width*$t),ut=Math.floor(ne.height*$t),v.isDataArrayTexture?Mt=ne.depth:v.isData3DTexture?Mt=Math.floor(ne.depth*$t):Mt=1,wt=0,Ot=0,Xt=0}O!==null?(bt=O.x,qt=O.y,ue=O.z):(bt=0,qt=0,ue=0);const ie=at.convert(C.format),Pe=at.convert(C.type);let Et;C.isData3DTexture?(Nt.setTexture3D(C,0),Et=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Nt.setTexture2DArray(C,0),Et=I.TEXTURE_2D_ARRAY):(Nt.setTexture2D(C,0),Et=I.TEXTURE_2D),pt.activeTexture(I.TEXTURE0),pt.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),pt.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),pt.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Oe=pt.getParameter(I.UNPACK_ROW_LENGTH),Jt=pt.getParameter(I.UNPACK_IMAGE_HEIGHT),un=pt.getParameter(I.UNPACK_SKIP_PIXELS),Le=pt.getParameter(I.UNPACK_SKIP_ROWS),Ys=pt.getParameter(I.UNPACK_SKIP_IMAGES);pt.pixelStorei(I.UNPACK_ROW_LENGTH,ne.width),pt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne.height),pt.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),pt.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),pt.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const $i=v.isDataArrayTexture||v.isData3DTexture,dn=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const $t=Lt.get(v),Re=Lt.get(C),pi=Lt.get($t.__renderTarget),le=Lt.get(Re.__renderTarget);pt.bindFramebuffer(I.READ_FRAMEBUFFER,pi.__webglFramebuffer),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<Mt;be++)$i&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.get(v).__webglTexture,z,Xt+be),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.get(C).__webglTexture,ft,ue+be)),I.blitFramebuffer(wt,Ot,wt+St,Ot+ut,bt,qt,bt+St,qt+ut,I.DEPTH_BUFFER_BIT,I.NEAREST);pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Lt.has(v)){const $t=Lt.get(v),Re=Lt.get(C);pt.bindFramebuffer(I.READ_FRAMEBUFFER,P),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,V);for(let pi=0;pi<Mt;pi++)$i?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$t.__webglTexture,z,Xt+pi):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$t.__webglTexture,z),dn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,ft,ue+pi):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re.__webglTexture,ft),z!==0?I.blitFramebuffer(wt,Ot,wt+St,Ot+ut,bt,qt,bt+St,qt+ut,I.COLOR_BUFFER_BIT,I.NEAREST):dn?I.copyTexSubImage3D(Et,ft,bt,qt,ue+pi,wt,Ot,St,ut):I.copyTexSubImage2D(Et,ft,bt,qt,wt,Ot,St,ut);pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dn?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Et,ft,bt,qt,ue,St,ut,Mt,ie,Pe,ne.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,ft,bt,qt,ue,St,ut,Mt,ie,ne.data):I.texSubImage3D(Et,ft,bt,qt,ue,St,ut,Mt,ie,Pe,ne):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ft,bt,qt,St,ut,ie,Pe,ne.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ft,bt,qt,ne.width,ne.height,ie,ne.data):I.texSubImage2D(I.TEXTURE_2D,ft,bt,qt,St,ut,ie,Pe,ne);pt.pixelStorei(I.UNPACK_ROW_LENGTH,Oe),pt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jt),pt.pixelStorei(I.UNPACK_SKIP_PIXELS,un),pt.pixelStorei(I.UNPACK_SKIP_ROWS,Le),pt.pixelStorei(I.UNPACK_SKIP_IMAGES,Ys),ft===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&I.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(v){Lt.get(v).__webglFramebuffer===void 0&&Nt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Nt.setTextureCube(v,0):v.isData3DTexture?Nt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Nt.setTexture2DArray(v,0):Nt.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){Q=0,k=0,nt=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const Hi=48,vi=1,z_=Hi*vi,Ge=z_/2,Ll=0,k_=.06,_e=1200,Ha=[{id:"morning",label:"아침",icon:"🌅",start:0,end:300},{id:"day",label:"낮",icon:"☀️",start:300,end:720},{id:"sunset",label:"노을",icon:"🌇",start:720,end:960},{id:"night",label:"밤",icon:"🌙",start:960,end:1200}];function Or(s){const t=(s%_e+_e)%_e;for(const e of Ha)if(t>=e.start&&t<e.end)return e;return Ha[Ha.length-1]}function rh(s){const t=(s%_e+_e)%_e,e=Math.floor(t/_e*20),i=Math.floor(t/_e*20*60%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const uu={clear:{id:"clear",label:"맑음",icon:"☀️"},cloudy:{id:"cloudy",label:"구름 조금",icon:"⛅"},drizzle:{id:"drizzle",label:"이슬비",icon:"🌦️"}},ah=["clear","clear","cloudy","drizzle","clear","cloudy","clear"];function Va(s){return uu[ah[(s-1)%ah.length]]}const oh={t:0,top:"#9ed7f5",bottom:"#ffe6d2",fog:"#f0faf6",sun:"#ffe7c4",sunIntensity:.95,hemiSky:"#fff6ea",hemiGround:"#d9f2c4",hemiIntensity:1.32,night:.1},G_={t:110,top:"#74cff4",bottom:"#dcf5fd",fog:"#e4f7f5",sun:"#fff2cf",sunIntensity:1.16,hemiSky:"#ffffff",hemiGround:"#dcf6c6",hemiIntensity:1.5,night:0},du={t:330,top:"#5fc6f2",bottom:"#cfeeff",fog:"#ddf4f8",sun:"#fffbe9",sunIntensity:1.05,hemiSky:"#f4feff",hemiGround:"#d8f5c2",hemiIntensity:1.55,night:0},H_={t:800,top:"#efa9c8",bottom:"#ffdcc0",fog:"#fce4d9",sun:"#ffb47c",sunIntensity:1.22,hemiSky:"#ffd0ae",hemiGround:"#f0e2b8",hemiIntensity:1.18,night:.02},V_={t:915,top:"#a99bdb",bottom:"#ffd8cc",fog:"#f0dde6",sun:"#ffa888",sunIntensity:.82,hemiSky:"#d4c0ea",hemiGround:"#c3cbb4",hemiIntensity:.9,night:.2},W_={t:980,top:"#4e5b9c",bottom:"#b6c0ea",fog:"#9ea8d4",sun:"#d7e2ff",sunIntensity:.55,hemiSky:"#93a3ec",hemiGround:"#8298b0",hemiIntensity:.62,night:1},X_={t:1170,top:"#7388c4",bottom:"#e5d8ee",fog:"#cfd6ea",sun:"#f0e9ff",sunIntensity:.86,hemiSky:"#e9e4f9",hemiGround:"#cadcc4",hemiIntensity:1.1,night:.62},q_={...du,t:650},Y_=[oh,G_,du,q_,H_,V_,W_,X_,{...oh,t:_e}],yr={speed:4.3,turnLerp:12,radius:.36,spriteHeight:1.5},Ai={fov:37,offset:{x:0,y:11,z:13.4},lookHeight:.7},_n={x:.4,z:11.8},Li=[{id:"dock",name:"부두",icon:"⚓",day:5,x:0,z:17,markerY:2.2,height:1.7,water:!0},{id:"workshop",name:"공방",icon:"🔨",day:10,x:-5.6,z:5.6,markerY:3.4,height:2.8},{id:"vending",name:"메타몽 자판기",icon:"🥤",day:17,x:5.6,z:5.2,markerY:2.4,height:1.8},{id:"lighthouse",name:"등대",icon:"🗼",day:24,x:6.8,z:-3.6,markerY:5.6,height:4.4}],xn=[{id:"ditto_basic_01",name:"동글 메타몽",x:-5.2,z:11.4,variant:"basic",height:.86,thumb:{set:"ditto_basic",row:1,col:1},flavor:"변신을 포기한 동글 메타몽. 점 눈만 남았다."},{id:"ditto_pebble_02",name:"조약돌 메타몽",x:-2.8,z:12.4,variant:"pebble",height:.52,thumb:{set:"disguises",row:1,col:1},flavor:"조약돌인 척하지만 가끔 숨을 쉰다."},{id:"ditto_mailbox_03",name:"우체통 메타몽",x:2.6,z:11.6,variant:"mailbox",height:1.1,thumb:{set:"disguises",row:1,col:2},flavor:"편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다."},{id:"ditto_flowerpot_04",name:"화분 메타몽",x:-1.2,z:6.2,variant:"flowerpot",height:.85,thumb:{set:"disguises",row:1,col:3},flavor:"물을 안 줘도 잎이 파랗다. 그게 수상하다."},{id:"ditto_bench_05",name:"벤치 메타몽",x:3.6,z:9.6,variant:"bench",height:.9,thumb:{set:"disguises",row:2,col:1},flavor:"앉으라고 만든 벤치인데, 앉으면 도망간다."},{id:"ditto_mushroom_06",name:"버섯 메타몽",x:.8,z:6,variant:"mushroom",height:.78,thumb:{set:"disguises",row:2,col:2},flavor:"빨간 갓에 흰 점. 먹으면 안 될 것 같다."},{id:"ditto_signpost_07",name:"이정표 메타몽",x:-3.6,z:9.2,variant:"signpost",height:1.15,thumb:{set:"disguises",row:2,col:3},flavor:"어디로 가라는 건지 본인도 모른다."}],lh=[{id:"somi",name:"솜이",x:3.2,z:3.4,set:"somi",height:.74},{id:"ongi",name:"옹이",x:5.2,z:2.2,set:"ongi",height:.7}],$_=[{frame:"lamp",x:-1.7,z:10.1,height:2,collide:.22},{frame:"lamp",x:1.9,z:10.2,height:2,collide:.22},{frame:"lamp",x:-3.9,z:4.3,height:2,collide:.22},{frame:"lamp",x:7.8,z:5.8,height:2,collide:.22},{frame:"fence",x:-2.8,z:5.6,height:.66,collide:.28},{frame:"fence",x:2,z:4.6,height:.66,collide:.28},{frame:"flowerbush",x:1.2,z:6.8,height:.6,collide:.24},{frame:"flowerbush",x:-4,z:11.6,height:.56,collide:.24},{frame:"rock",x:4.7,z:10.4,height:.5,collide:.26},{frame:"rock",x:-6.2,z:8.6,height:.46,collide:.24},{frame:"cherry2",x:-9.6,z:6.4,height:3.4,collide:.42},{frame:"tree_tall",x:-7.6,z:2.6,height:3.2,collide:.36},{frame:"tree_round",x:-10.4,z:9.4,height:2.6,collide:.34},{frame:"cherry1",x:-6.8,z:12.2,height:3,collide:.38},{frame:"flowerbush",x:-7.8,z:7.8,height:.62,collide:.25},{frame:"rock",x:-4.2,z:3.2,height:.5,collide:.26},{frame:"tree_round",x:-2.8,z:13.4,height:2.6,collide:.34},{frame:"cherry1",x:3.2,z:13.6,height:3,collide:.38},{frame:"tree_tall",x:5.4,z:13,height:3,collide:.36},{frame:"fence",x:-5.4,z:13.8,height:.66,collide:.28},{frame:"rock",x:1.6,z:13.9,height:.52,collide:.26},{frame:"cherry2",x:8.6,z:7.2,height:3.4,collide:.42},{frame:"tree_tall",x:9.4,z:3.2,height:3.2,collide:.36},{frame:"tree_round",x:8,z:11,height:2.6,collide:.34},{frame:"flowerbush",x:5.6,z:8.8,height:.58,collide:.24},{frame:"flowerbush",x:9.8,z:9.4,height:.6,collide:.24},{frame:"rock",x:6.6,z:9.6,height:.5,collide:.26},{frame:"tree_tall",x:-1,z:-5.2,height:2.9,collide:.36},{frame:"tree_round",x:2.6,z:-4,height:2.6,collide:.34},{frame:"cherry2",x:-4.8,z:-2,height:3.4,collide:.42},{frame:"tree_tall",x:5,z:-6,height:3,collide:.36},{frame:"tree_round",x:-7.4,z:-1.6,height:2.6,collide:.34},{frame:"flowerbush",x:.4,z:-2.2,height:.56,collide:.24},{frame:"rock",x:-2,z:1.4,height:.48,collide:.26},{frame:"flowerbush",x:3.6,z:.8,height:.54,collide:.24},{frame:"rock",x:9.2,z:-.6,height:.54,collide:.28},{frame:"tree_round",x:-3.8,z:15,height:2.6,collide:.34},{frame:"cherry1",x:3.4,z:15,height:3,collide:.38},{frame:"flowerbush",x:-1.6,z:13.6,height:.56,collide:.24},{frame:"rock",x:5,z:11.6,height:.48,collide:.26},{frame:"cherry2",x:-8.8,z:12.2,height:3.4,collide:.42},{frame:"flowerbush",x:8.2,z:12.2,height:.58,collide:.24}],tn={dittoRange:2.9,catRange:2.2,tapRange:5,nodeRange:2.5,siteRange:3.4},Ue={dbName:"metamong-island",store:"saves",key:"slot1",intervalSeconds:5};function br(s,t,e){let i=Math.imul(s|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}const ch=s=>s*s*(3-2*s);function Wo(s,t,e=0){const i=Math.floor(s),n=Math.floor(t),r=s-i,a=t-n,o=ch(r),l=ch(a),c=br(i,n,e),h=br(i+1,n,e),u=br(i,n+1,e),d=br(i+1,n+1,e);return(c*(1-o)+h*o)*(1-l)+(u*(1-o)+d*o)*l}function K_(s,t,e=4,i=0){let n=0,r=.5,a=1,o=0;for(let l=0;l<e;l++)n+=(Wo(s*a,t*a,i+l*131)*2-1)*r,o+=r,r*=.5,a*=2;return n/(o||1)}function Z_(s,t,e){const i=Math.min(1,Math.max(0,(e-s)/(t-s)));return i*i*(3-2*i)}function J_(s,t,e){return s<t?t:s>e?e:s}class Q_{constructor(t=20261120){this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.min(t.length-1,Math.floor(this.next()*t.length))]}}const Vi=Hi+1,Wa=.7,hh=1,j_=.565,tx=.8;function ex(s,t){const e=Math.hypot(s,t*.97)/Ge,i=K_(s*.06+13.7,t*.06-8.2,3,7)*.045,n=Z_(j_,tx,e+i),r=Wa-(Wa+hh)*n;return J_(r,-hh,Wa)}function ix(){const s=new Float32Array(Vi*Vi);for(let t=0;t<Vi;t++)for(let e=0;e<Vi;e++){const i=-Ge+e*vi,n=-Ge+t*vi;s[t*Vi+e]=ex(i,n)}return s}const nx=ix();function Zn(s,t,e){const i=(t+Ge)/vi,n=(e+Ge)/vi;if(i<0||n<0||i>=Hi||n>=Hi)return-1.5;const r=Math.floor(i),a=Math.floor(n),o=i-r,l=n-a,c=s[a*Vi+r],h=s[a*Vi+r+1],u=s[(a+1)*Vi+r],d=s[(a+1)*Vi+r+1];return(c*(1-o)+h*o)*(1-l)+(u*(1-o)+d*o)*l}function Xo(s,t,e){const n=Zn(s,t+.45,e)-Zn(s,t-.45,e),r=Zn(s,t,e+.45)-Zn(s,t,e-.45);return Math.hypot(n,r)/(2*.45)}function sx(s,t,e){return!(Math.abs(t)>Ge-1||Math.abs(e)>Ge-1||Zn(s,t,e)<k_||Xo(s,t,e)>1.35)}const rx="#3b2d38",ax=[140,140,140,255,172,172,172,255,222,222,222,255,255,255,255,255];function fu(){const s=new bl(new Uint8Array(ax),4,1,Si);return s.minFilter=se,s.magFilter=se,s.generateMipmaps=!1,s.needsUpdate=!0,s}const ox=fu();function qo(s={}){return new Cf({gradientMap:ox,...s})}new Cn({color:rx,side:Ne,fog:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const Ke={deepSand:new mt("#dcc79c"),wetSand:new mt("#f2dfb4"),sand:new mt("#ffe6b8"),sandLight:new mt("#fff1d2"),grassA:new mt("#98dd78"),grassB:new mt("#b6ec96"),grassC:new mt("#82d46c"),grassMint:new mt("#abe4bd"),stone:new mt("#e7ddc9"),stoneHigh:new mt("#f2ead8")};new mt;let xi=null;function lx(){if(xi)return xi;const s=64,t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,s,s);const i=["#f4f7f0","#fbfdf8","#eef4ea","#ffffff","#f7faf3"];for(let n=0;n<220;n++){const r=Math.floor(Math.random()*s),a=Math.floor(Math.random()*s);e.fillStyle=i[Math.floor(Math.random()*i.length)],e.fillRect(r,a,Math.random()<.25?2:1,Math.random()<.25?2:1)}return xi=new ls(t),xi.colorSpace=fe,xi.wrapS=xi.wrapT=Ns,xi.magFilter=se,xi.minFilter=Wi,xi.generateMipmaps=!0,xi.anisotropy=4,xi}function cx(s,t,e,i,n){const r=Wo(e*.33+7.1,i*.33-3.3,41),a=Wo(e*.12-2.4,i*.12+5.6,17);return s<-.05?n.copy(Ke.deepSand).lerp(Ke.wetSand,.3+r*.3):s<.2?n.copy(Ke.wetSand).lerp(Ke.sand,.35+r*.5):s<.4?n.copy(Ke.sand).lerp(Ke.sandLight,r*.5):s<.58?n.copy(Ke.sand).lerp(Ke.grassA,.35+r*.55):t>1.55?n.copy(Ke.stone).lerp(Ke.stoneHigh,r*.6):(n.copy(Ke.grassA),r>.54?n.lerp(Ke.grassB,(r-.54)*2.2):r<.44&&n.lerp(Ke.grassC,(.44-r)*2.2),a>.7&&n.lerp(Ke.grassMint,(a-.7)*.8)),n}var rs,pu,mu;class hx{constructor(t){oi(this,rs);this.heights=t,this.group=new bi,this.group.name="Terrain",this.mesh=$(this,rs,pu).call(this,t),this.group.add(this.mesh),this.seabed=$(this,rs,mu).call(this),this.group.add(this.seabed)}sampleHeight(t,e){return Zn(this.heights,t,e)}slopeAt(t,e){return Xo(this.heights,t,e)}isWalkable(t,e){return sx(this.heights,t,e)}groundY(t,e){return Math.max(this.sampleHeight(t,e),Ll+.02)}dispose(){this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}rs=new WeakSet,pu=function(t){const e=Hi+1,i=Hi*Hi,n=new Float32Array(i*6*3),r=new Float32Array(i*6*3),a=new Float32Array(i*6*2),o=1/2.6,l=new Float32Array(e*e*3),c=new mt;for(let w=0;w<e;w++)for(let T=0;T<e;T++){const g=-Ge+T*vi,M=-Ge+w*vi,F=t[w*e+T];cx(F,Xo(t,g,M),g,M,c);const L=(w*e+T)*3;l[L]=c.r,l[L+1]=c.g,l[L+2]=c.b}let h=0,u=0,d=0;const f=(w,T,g,M)=>{n[h++]=w,n[h++]=g,n[h++]=T,r[u++]=l[M],r[u++]=l[M+1],r[u++]=l[M+2],a[d++]=w*o,a[d++]=T*o};for(let w=0;w<Hi;w++)for(let T=0;T<Hi;T++){const g=-Ge+T*vi,M=g+vi,F=-Ge+w*vi,L=F+vi,U=w*e+T,G=w*e+T+1,q=(w+1)*e+T,P=(w+1)*e+T+1,V=t[U],Q=t[G],k=t[q],nt=t[P];f(g,F,V,U*3),f(g,L,k,q*3),f(M,L,nt,P*3),f(g,F,V,U*3),f(M,L,nt,P*3),f(M,F,Q,G*3)}const _=new Fe;_.setAttribute("position",new qe(n,3)),_.setAttribute("color",new qe(r,3)),_.setAttribute("uv",new qe(a,2)),_.computeVertexNormals(),_.computeBoundingSphere();const S=_.attributes.normal,m=_.attributes.position;let p=0;for(let w=0;w<m.count;w+=3)if(S.getY(w)<0){for(let T=0;T<3;T++){const g=m.getComponent(w+1,T),M=m.getComponent(w+2,T);m.setComponent(w+1,T,M),m.setComponent(w+2,T,g)}for(let T=0;T<3;T++){const g=_.attributes.color.getComponent(w+1,T),M=_.attributes.color.getComponent(w+2,T);_.attributes.color.setComponent(w+1,T,M),_.attributes.color.setComponent(w+2,T,g)}p++}p>0&&(_.computeVertexNormals(),m.needsUpdate=!0);const y=qo({vertexColors:!0,map:lx()}),R=new we(_,y);R.name="TerrainSurface",R.receiveShadow=!0,R.frustumCulled=!0;const E=_.attributes.color;return E.needsUpdate=!0,R},mu=function(){const t=new cn(Ge*10,Ge*10,1,1);t.rotateX(-Math.PI/2);const e=qo({color:"#dff3ec"}),i=new we(t,e);return i.position.y=-1.35,i.name="Seabed",i.receiveShadow=!0,i};const ux=`
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
`,dx=`
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
`;class fx{constructor(){const t=Ge*8,e=new cn(t,t,72,72);e.rotateX(-Math.PI/2),this.material=new Ve({uniforms:ns.merge([gt.fog,{uTime:{value:0},uShallow:{value:new mt("#8ff0e0")},uDeep:{value:new mt("#2fc4cd")},uSkyColor:{value:new mt("#e8fcff")},uSunColor:{value:new mt("#fffbe6")},uNight:{value:0}}]),vertexShader:ux,fragmentShader:dx,transparent:!0,fog:!0,depthWrite:!0}),this.mesh=new we(e,this.material),this.mesh.name="Water",this.mesh.position.y=Ll,this.mesh.renderOrder=1}update(t,e){this.material.uniforms.uTime.value=t,e&&(this.material.uniforms.uShallow.value.copy(e.waterShallow),this.material.uniforms.uDeep.value.copy(e.waterDeep),this.material.uniforms.uSkyColor.value.copy(e.skyBottom),this.material.uniforms.uSunColor.value.copy(e.sun),this.material.uniforms.uNight.value=e.night)}}const px=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mx=`
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
`;class gx{constructor(){const t=new Al(500,32,20);this.material=new Ve({uniforms:{uTop:{value:new mt("#8ed7f6")},uBottom:{value:new mt("#f1fcf4")},uDisc:{value:new mt("#fff2cf")},uDiscDir:{value:new N(.2,.6,-.6)},uCloud:{value:new mt("#ffffff")},uNight:{value:0},uTime:{value:0}},vertexShader:px,fragmentShader:mx,side:Ne,depthWrite:!1,fog:!1}),this.mesh=new we(t,this.material),this.mesh.name="Skybox",this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}update(t){this.mesh.position.copy(t)}setPalette({skyTop:t,skyBottom:e,sun:i,night:n,discDir:r,elapsed:a}){const o=this.material.uniforms;o.uTop.value.copy(t),o.uBottom.value.copy(e),o.uDisc.value.copy(i),o.uCloud.value.copy(e).lerp(i,.35),o.uNight.value=n,o.uTime.value=a,r&&o.uDiscDir.value.copy(r)}}let ys=null;function uh(){if(ys)return ys;const s=document.createElement("canvas");s.width=s.height=96;const t=s.getContext("2d"),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(255,255,255,0.92)"),e.addColorStop(.45,"rgba(255,255,255,0.62)"),e.addColorStop(.78,"rgba(255,255,255,0.24)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.ellipse(48,48,46,46,0,0,Math.PI*2),t.fill(),ys=new ls(s),ys.colorSpace=fe,ys}function zs(s=.34,t=.3){const e=new Vs(s,28);e.rotateX(-Math.PI/2),e.scale(1,1,.62);const i=new Cn({color:"#6d5a8a",map:uh(),alphaMap:uh(),transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),n=new we(e,i);return n.renderOrder=2,n}let bs=null;function _x(){if(bs)return bs;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,62);return e.addColorStop(0,"rgba(255,214,232,0)"),e.addColorStop(.52,"rgba(255,206,228,0.06)"),e.addColorStop(.76,"rgba(255,190,220,0.85)"),e.addColorStop(1,"rgba(255,190,220,0)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),bs=new ls(s),bs.colorSpace=fe,bs}function xx(s=.45){const t=new Vs(s,32);t.rotateX(-Math.PI/2);const e=new Cn({map:_x(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),i=new we(t,e);return i.renderOrder=2,i}let Es=null;function vx(){if(Es)return Es;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");return t.font='96px "Noto Sans CJK KR", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=11,t.strokeStyle="rgba(255,255,255,0.92)",t.strokeText("♥",64,68),t.fillStyle="#ff86a8",t.fillText("♥",64,68),Es=new ls(s),Es.colorSpace=fe,Es}function gu(s=.42){const t=new Mn(new rn({map:vx(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return t.scale.set(s,s,1),t.visible=!1,t}class ks{constructor(t,e,i={}){const{height:n=1,exact:r=!1}=i;this.atlas=t;const a=t.frames.get(e)||t.frames.values().next().value;this.height=n,this.exact=r,this.aspect=r?a.w/a.h:t.cell[0]/t.cell[1];const o=new cn(n*this.aspect,n);o.translate(0,n/2,0);const l=t.texture.clone();l.needsUpdate=!0,this.map=l,this.material=new Cn({map:l,transparent:!1,alphaTest:.45,depthWrite:!0,depthTest:!0,side:on,toneMapped:!1,fog:!0,color:16777215}),this.mesh=new we(o,this.material),this.mesh.name=`Billboard_${t.set}_${e}`,this._wp=new N,this.frame=null,this.flip=!1,this.setFrame(e,!!i.flip),this.mesh.userData.billboard=this}setFrame(t,e=this.flip){const i=this.atlas.frames.get(t);if(!i)return this.frame;this.frame=i,this.flip=!!e;const n=1/this.atlas.cols,r=1/this.atlas.rows;if(this.map.offset.set(e?i.col/this.atlas.cols:(i.col-1)/this.atlas.cols,1-i.row/this.atlas.rows),this.map.repeat.set(e?-n:n,r),this.map.needsUpdate=!0,this.exact){const a=i.w/i.h;if(Math.abs(a-this.aspect)>1e-4){this.aspect=a,this.mesh.geometry.dispose();const o=new cn(this.height*a,this.height);o.translate(0,this.height/2,0),this.mesh.geometry=o}}return i}faceCamera(t){this.mesh.getWorldPosition(this._wp),this.mesh.rotation.y=Math.atan2(t.position.x-this._wp.x,t.position.z-this._wp.z)}setTint(t){this.material.color.copy(t)}dispose(){this.map.dispose(),this.material.dispose(),this.mesh.geometry.dispose()}}const Ze={log:{id:"log",name:"통나무",icon:"🪵",tint:"#c98b52",desc:"나무를 두드리면 나와요"},stone:{id:"stone",name:"돌",icon:"🪨",tint:"#a9a9c0",desc:"바위를 두드리면 나와요"},petal:{id:"petal",name:"꽃잎",icon:"🌸",tint:"#ffb3d1",desc:"꽃덤불과 벚꽃나무에서"},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",desc:"바위에서 아주 가끔"},berry:{id:"berry",name:"열매",icon:"🍓",tint:"#ff7d9c",desc:"먹으면 기력 +30"}},dh=["log","stone","petal","star","berry"],ke={slots:8,stack:20},fh=999,ei={max:100,hitTree:6,hitRock:7,hitFlower:3,eat:30,regenPerSecond:1/6},Br={dock:{log:6,stone:2},workshop:{log:8,stone:6},vending:{stone:4,petal:5,star:2},lighthouse:{log:12,stone:10,star:5}},ph={dock:"배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.",workshop:"창고와 도구방이 함께 열려요. 재료 정리는 여기서 해요.",vending:"메타몽 자판기예요. 복구하면 밤에 은은하게 빛나요.",lighthouse:"복구하면 밤마다 따뜻한 불이 켜져요. 섬의 마지막 등불이에요."},ra={tree:{frames:["cherry1","cherry2","tree_tall","tree_round"],cost:ei.hitTree,hits:[2,3],icon:"🪓",verb:"베기"},rock:{frames:["rock"],cost:ei.hitRock,hits:[2,3],icon:"⛏️",verb:"채굴"},flower:{frames:["flowerbush"],cost:ei.hitFlower,hits:[1,1],icon:"🌸",verb:"꽃 따기"}};function Mx(s){for(const[t,e]of Object.entries(ra))if(e.frames.includes(s))return t;return null}function Sx(s,t,e=Math.random){const i={};return s==="tree"?(i.log=1+Math.floor(e()*3),String(t).startsWith("cherry")&&e()<.65&&(i.petal=1)):s==="rock"?(i.stone=1+Math.floor(e()*3),e()<.14&&(i.star=1)):s==="flower"&&(i.petal=1+(e()<.5?1:0)),i}function yx(s){return Object.entries(s).filter(([,t])=>t>0).map(([t,e])=>`${Ze[t]?Ze[t].name:t} ${e}`).join(" · ")}const Ye=new Map;function Dl(s=16){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function Xs(s){const t=new ls(s);return t.colorSpace=fe,t.magFilter=se,t.minFilter=se,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Il(s,t){return(e,i,n,r,a)=>{s.fillStyle=a,s.fillRect(e*t,i*t,n*t,r*t)}}function bx(s){const{c:t,ctx:e}=Dl(16),i=Il(e,1);return s==="berry"?(i(7,2,2,1,"#6dbf6a"),i(9,3,1,1,"#579a55"),i(8,4,1,1,"#7a5236"),i(5,5,6,1,"#e8496b"),i(4,6,8,1,"#ef5a7b"),i(4,7,9,1,"#f0607f"),i(3,8,10,1,"#ee5c7d"),i(3,9,10,1,"#e8506f"),i(4,10,9,1,"#dc4865"),i(5,11,7,1,"#c93d59"),i(6,12,5,1,"#b2334f"),i(5,7,2,2,"#ffa3bb"),i(6,6,1,1,"#ffc2d2"),i(5,9,1,1,"#ffe3ea"),i(8,10,1,1,"#ffe3ea"),i(11,8,1,1,"#ffd0dc")):s==="log"?(i(3,6,10,6,"#a9713f"),i(3,6,10,1,"#c68a52"),i(3,11,10,1,"#8a5a30"),i(5,7,1,4,"#965f33"),i(8,8,4,1,"#b87f47"),i(2,7,2,4,"#d8a468"),i(2,8,2,2,"#e8bc85"),i(3,8,1,2,"#b9854f"),i(12,7,2,4,"#c9925a"),i(12,8,1,2,"#8a5a30")):s==="stone"?(i(5,5,6,1,"#d3d5e2"),i(4,6,8,1,"#c3c6d6"),i(3,7,10,1,"#b3b7ca"),i(3,8,10,2,"#a6aabf"),i(4,10,9,1,"#8f94ac"),i(5,11,7,1,"#7b8098"),i(6,12,5,1,"#6b7086"),i(5,6,3,1,"#e7e9f2"),i(7,9,2,1,"#c9cddd")):s==="petal"?(i(7,4,3,1,"#ffd0e2"),i(6,5,5,1,"#ffb8d2"),i(5,6,6,2,"#ffa6c8"),i(4,8,6,2,"#f892b8"),i(5,10,4,1,"#e97fa8"),i(6,11,2,1,"#d16d96"),i(7,6,2,1,"#ffe6f0")):s==="star"?(i(7,1,2,3,"#ffe9a8"),i(7,12,2,3,"#ffe9a8"),i(1,7,3,2,"#ffe9a8"),i(12,7,3,2,"#ffe9a8"),i(5,5,6,1,"#ffd464"),i(4,6,8,1,"#ffcf55"),i(4,7,8,2,"#ffc94a"),i(5,9,6,1,"#ffbf3e"),i(6,10,4,1,"#ffb42f"),i(7,7,2,2,"#fff8dc"),i(6,6,1,1,"#fff3c0")):i(6,6,4,4,"#dcdcea"),Xs(t)}function Ex(s){const t=`item:${s}`;return Ye.has(t)||Ye.set(t,bx(s)),Ye.get(t)}function Tx(s="tree"){const t=`stump:${s}`;if(Ye.has(t))return Ye.get(t);const{c:e,ctx:i}=Dl(24),n=Il(i,1);if(s==="tree"){const a=[[5,10,15,"#dcae74"],[6,9,16,"#d3a067"],[7,9,16,"#c9925a"],[8,8,17,"#b07c46"],[9,8,17,"#96633a"],[10,8,17,"#8a5a34"],[11,8,17,"#8a5a34"],[12,8,17,"#8a5a34"],[13,8,17,"#8a5a34"],[14,8,17,"#8a5a34"],[15,7,18,"#855631"],[16,7,18,"#7c5030"],[17,7,18,"#7c5030"],[18,6,19,"#74482a"],[19,6,19,"#6a4025"],[20,6,19,"#5f3d24"]];for(const[o,l,c,h]of a)n(l,o,c-l+1,1,h),n(l,o,1,1,"#5f3d24"),n(c,o,1,1,"#4e3019");n(16,9,2,10,"#74482a"),n(8,10,1,8,"#a06b3d"),n(11,6,3,1,"#a5713d"),n(10,6,1,2,"#a5713d"),n(14,6,1,2,"#a5713d"),n(12,7,2,1,"#b9854f"),n(12,5,1,1,"#f0d8ab"),n(10,12,1,4,"#6f4628"),n(13,14,1,4,"#6f4628"),n(18,12,1,6,"#6fa35a"),n(19,10,2,2,"#9ed07a"),n(21,9,1,2,"#7fbb62"),n(18,8,1,2,"#9ed07a")}else s==="rock"?(n(4,14,7,5,"#b3b7ca"),n(5,12,5,2,"#d3d5e2"),n(11,15,8,5,"#a6aabf"),n(12,13,6,2,"#c3c6d6"),n(17,16,4,4,"#8f94ac"),n(3,19,18,1,"#7b8098"),n(6,15,2,1,"#e7e9f2"),n(14,15,2,1,"#dfe2ee"),n(8,9,1,3,"#6fa35a"),n(6,8,2,2,"#9ed07a")):(n(3,16,18,4,"#8a6a4a"),n(4,15,16,1,"#a4815c"),n(3,19,18,1,"#6f5439"),n(6,14,2,2,"#ffb8d2"),n(11,13,2,1,"#ffa6c8"),n(15,14,1,1,"#ffd0e2"),n(16,8,1,7,"#6fa35a"),n(14,7,2,2,"#9ed07a"),n(17,6,2,2,"#9ed07a"),n(19,7,1,1,"#7fbb62"));const r=Xs(e);return Ye.set(t,r),r}function wx(){const s="sprout";if(Ye.has(s))return Ye.get(s);const{c:t,ctx:e}=Dl(16),i=Il(e,1);i(7,8,2,6,"#7fae5b"),i(5,6,3,2,"#8ec96a"),i(3,7,2,1,"#a5db7f"),i(8,4,3,2,"#8ec96a"),i(11,5,2,1,"#a5db7f"),i(7,3,2,2,"#b7e694"),i(6,12,4,1,"#5f8a45");const n=Xs(t);return Ye.set(s,n),n}function Yo(){const s="glow";if(Ye.has(s))return Ye.get(s);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,2,32,32,31);i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(.42,"rgba(255,246,214,0.55)"),i.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Xs(t);return Ye.set(s,n),n}function Ax(){if(Ye.has("dot"))return Ye.get("dot");const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(16,16,0,16,16,15);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.55,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(16,16,15,0,Math.PI*2),e.fill();const n=Xs(t);return Ye.set("dot",n),n}const Rx={workshop:"workshop",lighthouse:"lighthouse",vending:"vending",dock:"dock"},Cx={workshop:1.2,lighthouse:.82,vending:.55,dock:.9},mh={tree:[1.05,1.35],rock:[.8,.62],flower:[.78,.56]},Xa=.06,qa=0;var as,_u,xu;class Px{constructor(t,e){oi(this,as);this.terrain=t,this.group=new bi,this.group.name="Scenery",this.sites=[],this.billboards=[],this.colliders=[],this.nodes=[],this.beacon=null;const i=e.get("buildings"),n=e.get("nature");for(const r of Li){const a=r.water?0:Math.max(t.sampleHeight(r.x,r.z),.02),o=new ks(i,Rx[r.id],{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Building_${r.id}`,this.group.add(o.mesh),this.billboards.push(o);const l={...r,y:a,billboard:o,built:!1};l.kind="site",o.mesh.userData.site=l,this.sites.push(l),this.colliders.push({x:r.x,z:r.z,r:Cx[r.id]||1});const c=zs(r.height*.34,.26);c.position.set(r.x,a+.02,r.z),this.group.add(c)}for(const r of $_){const a=Math.max(t.sampleHeight(r.x,r.z),.02),o=new ks(n,r.frame,{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Nature_${r.frame}_${r.x}_${r.z}`,this.group.add(o.mesh),this.billboards.push(o);let l=null;r.collide&&(l={x:r.x,z:r.z,r:r.collide},this.colliders.push(l));const c=zs((r.collide||.3)*1.25,.22);c.position.set(r.x,a+.02,r.z),this.group.add(c);const h=Mx(r.frame);if(h){const u=$(this,as,_u).call(this,r,h,a,o,l);o.mesh.userData.node=u,this.nodes.push(u)}}$(this,as,xu).call(this)}pop(t){t.popT=.26}setHarvested(t,e){t.harvested=!!e,t.targetScale=e?Xa:1,t.targetOpacity=e?qa:1,t.stubTarget=e?.92:0,t.sprout.visible=!!e,e&&(t.mesh.material.transparent=!0,t.mesh.material.depthWrite=!1),t.collider&&(t.collider.r=e?0:t.baseR),e||(t.mesh.material.depthWrite=!0,t.hasBerry=!1)}applyNodeState(t,e){if(!e)return;const i=e.left<=0||e.respawn>0;t.hitsLeft=Math.max(1,Math.min(t.hitsNeeded,e.left||t.hitsNeeded)),t.respawn=Math.max(0,Number(e.respawn)||0),t.mesh.material.transparent=!0,t.scale=i?Xa:1,t.opacity=i?qa:1,t.mesh.scale.setScalar(t.scale),t.mesh.material.opacity=t.opacity,t.harvested=i,t.targetScale=i?Xa:1,t.targetOpacity=i?qa:1,t.sprout.visible=i,t.stubTarget=i?.92:0,t.stub.material.opacity=t.stubTarget,t.stub.visible=i,t.collider&&(t.collider.r=i?0:t.baseR),i||(t.mesh.material.depthWrite=!0)}setBuilt(t,e=!0){const i=this.sites.find(n=>n.id===t);i&&(i.built=!!e,this.beacon&&t==="lighthouse"&&(this.beacon.enabled=!!e))}update(t,e,i=0){if(e)for(const n of this.billboards)n.faceCamera(e);for(const n of this.nodes){if(n.popT>0){n.popT=Math.max(0,n.popT-t);const a=n.popT/.26;n.mesh.rotation.z=Math.sin((1-a)*30)*.09*a}else n.mesh.rotation.z!==0&&(n.mesh.rotation.z=0);if(Math.abs(n.scale-n.targetScale)>.003){n.scale+=(n.targetScale-n.scale)*Math.min(1,t*9),n.mesh.scale.setScalar(n.scale);const a=n.opacity+(n.targetOpacity-n.opacity)*Math.min(1,t*9);n.opacity=a,n.mesh.material.opacity=a}else Math.abs(n.opacity-n.targetOpacity)>.003&&(n.opacity+=(n.targetOpacity-n.opacity)*Math.min(1,t*9),n.mesh.material.opacity=n.opacity);const r=n.stubTarget||0;Math.abs(n.stub.material.opacity-r)>.004?(n.stub.material.opacity+=(r-n.stub.material.opacity)*Math.min(1,t*9),n.stub.visible=n.stub.material.opacity>.02):(n.stub.material.opacity=r,n.stub.visible=r>.02),n.opacity>.99&&n.mesh.material.transparent&&(n.mesh.material.transparent=!1,n.mesh.material.opacity=1,n.opacity=1),n.sprout.visible&&(n.sprout.position.y=n.y+.16+Math.sin(performance.now()*.002+n.x)*.02,n.sprout.material.rotation=Math.sin(performance.now()*.0012+n.z)*.12)}if(this.beacon){const n=this.beacon;n.t+=t;const r=n.enabled?1:0,a=.88+Math.sin(n.t*1.7)*.07+Math.sin(n.t*3.3)*.05;n.light.intensity+=(r*(.8+i*3.4)*a-n.light.intensity)*Math.min(1,t*2.4),n.glow.material.opacity+=(r*(.16+i*.72)*a-n.glow.material.opacity)*Math.min(1,t*2.4),n.lamp.material.opacity+=(r*(.2+i*.8)-n.lamp.material.opacity)*Math.min(1,t*2.4)}}}as=new WeakSet,_u=function(t,e,i,n,r){const a=ra[e],[o,l]=a.hits,c=o+Math.floor(Math.random()*(l-o+1)),h=mh[e]||mh.tree,u=new Mn(new rn({map:Tx(e),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));u.scale.set(h[0],h[1],1),u.position.set(t.x,i+h[1]*.46,t.z),u.visible=!1,u.renderOrder=3,this.group.add(u);const d=new Mn(new rn({map:wx(),transparent:!0,depthWrite:!1,toneMapped:!1}));return d.scale.set(.55,.55,1),d.position.set(t.x+.42,i+.3,t.z+.45),d.renderOrder=5,d.visible=!1,d.renderOrder=4,this.group.add(d),{key:`${t.frame}@${t.x},${t.z}`,isNode:!0,kind:e,frame:t.frame,x:t.x,z:t.z,y:i,height:t.height,billboard:n,mesh:n.mesh,collider:r,baseR:t.collide||0,hitsNeeded:c,hitsLeft:c,harvested:!1,respawn:0,berryT:24+Math.random()*26,hasBerry:!1,scale:1,targetScale:1,opacity:1,targetOpacity:1,popT:0,sprout:d,stub:u,stubTarget:0}},xu=function(){const t=this.sites.find(a=>a.id==="lighthouse");if(!t)return;const e=t.y+t.height*.86,i=new Bf("#ffdca8",0,26,1.7);i.position.set(t.x,e,t.z),this.group.add(i);const n=new Mn(new rn({map:Yo(),color:"#ffd79a",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:Ls}));n.scale.set(5.2,5.2,1),n.position.set(t.x,e,t.z),this.group.add(n);const r=new Mn(new rn({map:Yo(),color:"#fff3cf",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));r.scale.set(1.1,1.1,1),r.position.set(t.x,e+.1,t.z),this.group.add(r),this.beacon={enabled:!1,light:i,glow:n,lamp:r,t:0}};const Lx=[[[0,15.8],[0,13.2],[.2,10.6],[0,9]],[[0,9],[-1.8,7.8],[-3.8,6.8],[-5.6,5.6]],[[.2,9],[2.2,7.8],[4,6.6],[5.6,5.2]],[[1,8.8],[4.4,7.4],[7,3.6],[7.4,-1.2],[6.8,-3.6]]],Er=1.15,Dx=.6,Ix=new mt("#f6e5c2"),Nx=new mt("#e2c89c"),Tr=[-Er/2,-Er*.22,Er*.22,Er/2];let Ri=null;function Ux(){if(Ri)return Ri;const s=document.createElement("canvas");s.width=64,s.height=64;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.16,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.84,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(196,168,126,0.16)";for(let i=0;i<40;i++){const n=Math.floor(Math.random()*64),r=Math.floor(Math.random()*64);t.fillRect(n,r,2,2)}return Ri=new ls(s),Ri.colorSpace=fe,Ri.magFilter=se,Ri.minFilter=He,Ri.generateMipmaps=!1,Ri.wrapS=di,Ri.wrapT=Ns,Ri}function Fx(s){const t=new Tf(s.map(([i,n])=>new N(i,0,n)),!1,"catmullrom",.5),e=Math.max(4,Math.round(t.getLength()/Dx));return t.getSpacedPoints(e).map(i=>[i.x,i.z])}class Ox{constructor(t){this.group=new bi,this.group.name="Path";const e=[],i=[],n=[],r=[],a=new mt;for(const h of Lx){const u=Fx(h),d=e.length/3;let f=0;for(let m=0;m<u.length;m++){const[p,y]=u[m],[R,E]=u[Math.max(0,m-1)],[w,T]=u[Math.min(u.length-1,m+1)],g=w-R,M=T-E,F=Math.hypot(g,M)||1,L=-M/F,U=g/F;m>0&&(f+=Math.hypot(p-u[m-1][0],y-u[m-1][1]));for(let G=0;G<Tr.length;G++){const q=Tr[G],P=p+L*q,V=y+U*q;e.push(P,t.groundY(P,V)+.04,V),n.push(G/(Tr.length-1),f/2.2);const Q=Math.abs(G-1.5)/1.5;a.copy(Ix).lerp(Nx,Q*.75),i.push(a.r,a.g,a.b)}}const _=u.length,S=Tr.length;for(let m=0;m<_-1;m++)for(let p=0;p<S-1;p++){const y=d+m*S+p,R=y+1,E=d+(m+1)*S+p,w=E+1;r.push(y,E,w,y,w,R)}}const o=new Fe;o.setAttribute("position",new pe(e,3)),o.setAttribute("color",new pe(i,3)),o.setAttribute("uv",new pe(n,2)),o.setIndex(r),o.computeVertexNormals();const l=qo({vertexColors:!0,map:Ux(),transparent:!0,alphaTest:.06,depthWrite:!1,side:Pi,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=new we(o,l);c.name="PathSurface",c.receiveShadow=!0,this.group.add(c)}}const Ts=new mt("#dfe8ef"),Bx=new mt("#8feadf"),zx=new mt("#31c6cd"),kx=new N(-.22,.86,.34).normalize(),Gx={hemi:.52,ambient:.26,sun:1.25,fill:.22},gh={top:"skyTop",bottom:"skyBottom",fog:"fog",sun:"sun",hemiSky:"hemiSky",hemiGround:"hemiGround"};var Ii,vu,Mu,Su,yu;class Hx{constructor(t){oi(this,Ii);this.scene=new df,this.scene.fog=new Sl("#f2fcf5",.0062),this.terrain=new hx(nx),this.scene.add(this.terrain.group),this.water=new fx,this.scene.add(this.water.mesh),this.sky=new gx,this.scene.add(this.sky.mesh),this.hemi=new Ff("#fff4e2","#dcf5c6",1.5),this.scene.add(this.hemi),this.ambient=new kf("#fff8ec",.5),this.scene.add(this.ambient),this.sunLight=new Nc("#ffe9c6",1.1),this.sunLight.position.set(12,30,-18),this.sunLight.target.position.set(0,0,0),this.sunLight.castShadow=!0;const e=this.sunLight.shadow;e.mapSize.set(1024,1024),e.camera.left=-30,e.camera.right=30,e.camera.top=30,e.camera.bottom=-30,e.camera.near=1,e.camera.far=170,e.bias=-5e-4,e.normalBias=.02,e.radius=1.5,e.camera.updateProjectionMatrix(),e.needsUpdate=!0,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.shadowFocus=new N(0,0,0),this.fillLight=new Nc("#dcefff",.4),this.fillLight.position.set(-22,16,26),this.fillLight.target.position.set(0,0,0),this.scene.add(this.fillLight),this.scene.add(this.fillLight.target),this.scenery=new Px(this.terrain,t),this.scene.add(this.scenery.group),this.path=new Ox(this.terrain),this.scene.add(this.path.group),this.keyColors=Y_.map(i=>{const n={t:i.t,sunIntensity:i.sunIntensity,hemiIntensity:i.hemiIntensity,night:i.night};for(const r of Object.keys(gh))n[r]=new mt(i[r]);return n}),this.palette={skyTop:new mt,skyBottom:new mt,fog:new mt,sun:new mt,hemiSky:new mt,hemiGround:new mt,waterShallow:new mt,waterDeep:new mt,sunIntensity:1,hemiIntensity:1,night:0},this.weather=uu.clear,this.weatherBlend=0,this.lightGain={...Gx},this.spriteLight=new mt("#ffffff"),this.rain=$(this,Ii,vu).call(this),this.scene.add(this.rain.points),this.tmpDir=new N,this.discDir=new N,this.time=0}setWeather(t){this.weather=t}update(t,e,i,n){this.time+=t;const r=$(this,Ii,Mu).call(this,e),a=this.weather.id==="drizzle"?.55:this.weather.id==="cloudy"?.32:0;if(this.weatherBlend+=(a-this.weatherBlend)*Math.min(1,t*.8),this.weatherBlend>.001){const h=this.weatherBlend;r.skyTop.lerp(Ts,h*.55),r.skyBottom.lerp(Ts,h*.45),r.fog.lerp(Ts,h*.4),r.sun.lerp(Ts,h*.3),r.sunIntensity*=1-h*.35,r.hemiIntensity*=1-h*.15}this.hemi.color.copy(r.hemiSky),this.hemi.groundColor.copy(r.hemiGround);const o=this.lightGain;this.hemi.intensity=r.hemiIntensity*o.hemi,this.sunLight.color.copy(r.sun),this.sunLight.intensity=r.sunIntensity*o.sun,this.ambient.color.copy(r.hemiSky),this.ambient.intensity=(.46-r.night*.1)*o.ambient,this.fillLight.intensity=(.42-r.night*.16)*o.fill,this.fillLight.color.copy(r.sun).lerp(r.skyBottom,.3);const l=1-r.night*.46;this.spriteLight.copy(r.sun).lerp(r.hemiSky,.42).lerp(Ts,this.weatherBlend*.32).multiplyScalar(l);const c=$(this,Ii,Su).call(this,e,this.tmpDir);this.discDir.copy(c),n&&this.shadowFocus.set(n.x,0,n.z),this.sunLight.position.copy(c).multiplyScalar(70).add(this.shadowFocus),this.sunLight.target.position.copy(this.shadowFocus),this.sunLight.target.updateMatrixWorld(),this.sky.setPalette({skyTop:r.skyTop,skyBottom:r.skyBottom,sun:r.sun,night:r.night,discDir:this.discDir,elapsed:this.time}),i&&this.sky.update(i.position),this.scene.fog.color.copy(r.fog),this.scene.fog.density=.0055+this.weatherBlend*.004,this.water.update(this.time,r),this.scenery.update(t,i,r.night),$(this,Ii,yu).call(this,t,n)}get halfExtent(){return Ge}get waterLevel(){return Ll}dispose(){this.scene.traverse(t=>{(t.isMesh||t.isPoints||t.isSprite)&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose()))})}}Ii=new WeakSet,vu=function(){const e=new Q_(771),i=new Float32Array(420*3),n=new Float32Array(420);for(let l=0;l<420;l++)i[l*3]=e.range(-14,14),i[l*3+1]=e.range(0,16),i[l*3+2]=e.range(-14,14),n[l]=e.range(7,12);const r=new Fe;r.setAttribute("position",new qe(i,3));const a=new Tl({color:"#d7ecf7",size:.09,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),o=new qh(r,a);return o.name="Rain",o.visible=!1,o.frustumCulled=!1,{points:o,speed:n,count:420}},Mu=function(t){const e=(t%_e+_e)%_e,i=this.keyColors;let n=0;for(;n<i.length-2&&e>=i[n+1].t;)n++;const r=i[n],a=i[n+1],o=(e-r.t)/Math.max(1e-6,a.t-r.t),l=o*o*(3-2*o),c=this.palette;for(const[u,d]of Object.entries(gh))c[d].copy(r[u]).lerp(a[u],l);c.sunIntensity=r.sunIntensity+(a.sunIntensity-r.sunIntensity)*l,c.hemiIntensity=r.hemiIntensity+(a.hemiIntensity-r.hemiIntensity)*l,c.night=r.night+(a.night-r.night)*l,c.waterShallow.copy(Bx).lerp(c.skyBottom,.22),c.waterDeep.copy(zx).lerp(c.skyTop,.18);const h=1-c.night*.28;return c.waterShallow.multiplyScalar(h),c.waterDeep.multiplyScalar(h),c},Su=function(t,e){const i=(t%_e+_e)%_e;if(i>=960)return e.copy(kx);const n=Math.min(1,Math.max(0,i/960)),r=Math.PI*n;return e.set(Math.cos(r)*.92,Math.sin(r)*.9,-.3).normalize()},yu=function(t,e){const i=this.weather.id==="drizzle"&&this.weatherBlend>.25,n=this.rain.points;if(n.visible=i,!i)return;n.material.opacity=.55*this.weatherBlend;const r=n.geometry.attributes.position.array,a=e?e.x:0,o=e?e.z:0;for(let l=0;l<this.rain.count;l++){const c=l*3+1;r[c]-=this.rain.speed[l]*t,r[c]<0&&(r[c]=14+Math.random()*4,r[l*3]=a+(Math.random()-.5)*26,r[l*3+2]=o+(Math.random()-.5)*26)}n.geometry.attributes.position.needsUpdate=!0,n.position.set(0,0,0)};const Vx=84,_h=60/Vx/2,Wx=140,Xx=1.1;function Ya(s){return 440*Math.pow(2,(s-69)/12)}const $a={morning:{melody:[76,79,84,79,72,76,81,76,77,81,84,81,79,83,86,79],bass:[48,45,41,43]},day:{melody:[79,83,86,83,81,84,88,84,77,81,86,81,79,83,86,83],bass:[43,40,41,43]},sunset:{melody:[77,81,84,81,74,77,81,77,79,83,86,83,72,76,79,76],bass:[41,38,43,48]},night:{melody:[72,null,76,null,69,null,72,null,65,null,69,null,67,null,74,null],bass:[48,45,41,43]}};var Ht,$o,bu,Eu,Tu,zr,Ko,wu,vn,ci;class qx{constructor(){oi(this,Ht);this.ctx=null,this.master=null,this.noteBus=null,this.started=!1,this.muted=!1,this.phase="morning",this.volume=.55,this.step=0,this.nextTime=0,this.timer=null,this.noiseBuf=null}start(){if(this.started){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=1e-4;const i=e.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=22,i.ratio.value=2.4,i.attack.value=.006,i.release.value=.24,this.master.connect(i),i.connect(e.destination),this.noteBus=e.createGain(),this.noteBus.gain.value=1;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=5200,n.Q.value=.4,this.noteBus.connect(n),n.connect(this.master);const r=e.createDelay(.6);r.delayTime.value=.3;const a=e.createGain();a.gain.value=.24;const o=e.createGain();o.gain.value=.16,n.connect(r),r.connect(a),a.connect(r),r.connect(o),o.connect(this.master),this.started=!0,this.step=0,this.nextTime=e.currentTime+.12,$(this,Ht,Ko).call(this,this.muted?1e-4:this.volume),$(this,Ht,$o).call(this),e.state!=="running"&&e.resume().catch(()=>{})}catch{this.started=!1}}get sfxReady(){return!!(this.started&&this.ctx&&this.ctx.state==="running"&&!this.muted)}sfxHit(t){if(!this.sfxReady)return;const e=this.ctx.currentTime+.005;t==="rock"?($(this,Ht,vn).call(this,e,.13,{type:"highpass",freq:2400,q:.7,level:.22}),$(this,Ht,ci).call(this,e,220,.1,.15,"triangle",140)):t==="flower"?$(this,Ht,vn).call(this,e,.16,{type:"bandpass",freq:3200,q:1.1,level:.11}):($(this,Ht,vn).call(this,e,.13,{type:"lowpass",freq:900,q:.8,level:.2}),$(this,Ht,ci).call(this,e,150,.13,.13,"sine",108))}sfxPickup(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;$(this,Ht,ci).call(this,t,880,.09,.09,"sine"),$(this,Ht,ci).call(this,t+.07,1320,.12,.075,"sine")}sfxRare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[1046,1318,1568,2093].forEach((e,i)=>$(this,Ht,ci).call(this,t+i*.075,e,.34,.09,"sine"))}sfxEat(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;$(this,Ht,ci).call(this,t,430,.16,.14,"sine",250),$(this,Ht,vn).call(this,t+.03,.1,{type:"lowpass",freq:1400,level:.08})}sfxDeny(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;$(this,Ht,ci).call(this,t,190,.16,.12,"triangle",130),$(this,Ht,ci).call(this,t+.1,160,.16,.09,"triangle",110)}sfxFanfare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.02;[72,76,79,84,88].forEach((e,i)=>$(this,Ht,zr).call(this,Ya(e),t+i*.11,1.8,.16)),$(this,Ht,vn).call(this,t+.02,.5,{type:"highpass",freq:4200,level:.05})}sfxBuild(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;$(this,Ht,vn).call(this,t,.12,{type:"lowpass",freq:700,level:.18}),$(this,Ht,ci).call(this,t,170,.12,.12,"sine",120),$(this,Ht,ci).call(this,t+.12,1280,.1,.05,"triangle")}sfxUi(){this.sfxReady&&$(this,Ht,ci).call(this,this.ctx.currentTime+.005,988,.07,.06,"sine")}setMuted(t){this.muted=!!t,this.started&&$(this,Ht,Ko).call(this,this.muted?1e-4:this.volume)}setPhase(t){const e=$a[t]?t:"morning";e!==this.phase&&(this.phase=e,this.step=Math.ceil(this.step/16)*16)}suspend(){$(this,Ht,bu).call(this),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){if(!this.started){this.start();return}if(!this.ctx)return;const t=()=>{this.ctx.state==="running"&&(this.nextTime=Math.max(this.nextTime,this.ctx.currentTime+.05),$(this,Ht,$o).call(this))};this.ctx.state==="running"?t():this.ctx.resume().then(t).catch(()=>{})}}Ht=new WeakSet,$o=function(){this.timer||(this.timer=setInterval(()=>$(this,Ht,Eu).call(this),Wx))},bu=function(){this.timer&&(clearInterval(this.timer),this.timer=null)},Eu=function(){const t=this.ctx;if(!(!t||t.state!=="running"))for(this.nextTime<t.currentTime-_h*2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+Xx;)$(this,Ht,Tu).call(this,this.step,this.nextTime),this.step+=1,this.nextTime+=_h},Tu=function(t,e){const i=$a[this.phase]||$a.morning;if(this.muted)return;const n=(t%i.melody.length+i.melody.length)%i.melody.length,r=i.melody[n];if(r!=null){const a=n%4===0?1:.78;$(this,Ht,zr).call(this,Ya(r),e,1.7,.12*a)}if(n%4===0&&i.bass){const a=i.bass[n/4%i.bass.length];a!=null&&$(this,Ht,zr).call(this,Ya(a),e,2.4,.07,!0)}},zr=function(t,e,i,n,r=!1){const a=this.ctx;if(!a)return;const o=a.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.008),o.gain.exponentialRampToValueAtTime(n*.3,e+.26),o.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(this.noteBus);const l=r?[[1,1,"triangle"],[2,.18,"sine"]]:[[1,1,"sine"],[2,.3,"sine"],[3,.1,"triangle"]];for(const[c,h,u]of l){const d=a.createOscillator();d.type=u,d.frequency.value=t*c;const f=a.createGain();f.gain.value=h,c>1&&(f.gain.setValueAtTime(h,e),f.gain.exponentialRampToValueAtTime(1e-4,e+.5)),d.connect(f),f.connect(o),d.start(e),d.stop(e+i+.08)}},Ko=function(t){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t,e,.35)},wu=function(){if(this.noiseBuf||!this.ctx)return this.noiseBuf;const t=this.ctx,e=Math.floor(t.sampleRate*.4),i=t.createBuffer(1,e,t.sampleRate),n=i.getChannelData(0);for(let r=0;r<e;r++)n[r]=(Math.random()*2-1)*(1-r/e);return this.noiseBuf=i,i},vn=function(t,e,{type:i="bandpass",freq:n=1200,q:r=1,level:a=.2}={}){const o=this.ctx,l=$(this,Ht,wu).call(this);if(!l)return;const c=o.createBufferSource();c.buffer=l;const h=o.createBiquadFilter();h.type=i,h.frequency.value=n,h.Q.value=r;const u=o.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(Math.max(.001,a),t+.006),u.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(u),u.connect(this.noteBus),c.start(t),c.stop(t+e+.03)},ci=function(t,e,i,n,r="sine",a=null){const o=this.ctx,l=o.createOscillator();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+i*.9);const c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(.001,n),t+.012),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c),c.connect(this.noteBus),l.start(t),l.stop(t+i+.04)};const xh=9.5,wr=14,Ka=Math.PI*2;function Za(s){let t=s%Ka;return t<=-Math.PI?t+=Ka:t>Math.PI&&(t-=Ka),t}var fi,Au,Ru,Cu,Pu,Lu;class Yx{constructor(t,e,i){oi(this,fi);this.terrain=e,this.position=new N(t.x,e.groundY(t.x,t.z),t.z),this.yaw=Math.PI,this.targetYaw=this.yaw,this.moving=0,this.idleT=0,this.walkT=0,this.flip=!1,this.facing="back",this.emoteT=0,this.frameName="idle",this.colliders=[],this.group=new bi,this.group.name="Player",this.atlas=i.get("protagonist"),this.billboard=new ks(this.atlas,"idle",{height:yr.spriteHeight}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.shadow=zs(.4,.34),this.group.position.copy(this.position),this.dust=$(this,fi,Au).call(this),this.sprites=[this.billboard.material]}wave(){this.emoteT=1.4}update(t,e,i,n){const r=Math.min(1,Math.hypot(e.x,e.z)),a=i||this.terrain;if(this.moving+=(r-this.moving)*Math.min(1,t*10),this.idleT+=t,this.emoteT>0&&(this.emoteT=Math.max(0,this.emoteT-t)),r>.02){const l=yr.speed*r,c=e.x/(r||1)*l*t,h=e.z/(r||1)*l*t,u=this.canStand(a,this.position.x+c,this.position.z);u&&(this.position.x+=c);const d=this.canStand(a,this.position.x,this.position.z+h);d&&(this.position.z+=h),!u&&!d&&this.canStand(a,this.position.x+c*.5,this.position.z+h*.5)&&(this.position.x+=c*.5,this.position.z+=h*.5),this.targetYaw=Math.atan2(e.x,e.z),this.walkT+=t;const f=Math.floor(this.walkT*xh*1.5);f!==this.lastStep&&(this.lastStep=f,$(this,fi,Ru).call(this,this.position.x,this.position.y,this.position.z,{x:e.x/(r||1),z:e.z/(r||1)}))}this.position.y+=(a.groundY(this.position.x,this.position.z)-this.position.y)*Math.min(1,t*14);const o=Za(this.targetYaw-this.yaw);this.yaw=Za(this.yaw+o*Math.min(1,t*yr.turnLerp)),$(this,fi,Pu).call(this,r),$(this,fi,Lu).call(this,n),$(this,fi,Cu).call(this,t)}canStand(t,e,i){if(!t.isWalkable(e,i))return!1;for(let n=0;n<this.colliders.length;n++){const r=this.colliders[n],a=e-r.x,o=i-r.z,l=r.r+yr.radius;if(a*a+o*o<l*l)return!1}return!0}teleport(t,e,i){const n=i||this.terrain;this.position.set(t,n.groundY(t,e),e),this.group.position.copy(this.position),this.shadow.position.set(t,this.position.y+.02,e)}setYaw(t){this.yaw=Za(t),this.targetYaw=this.yaw}}fi=new WeakSet,Au=function(){const t=new Vs(1,10);t.rotateX(-Math.PI/2);const e=new Cn({color:"#fff8e6",transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}),i=new yf(t,e,wr);i.name="PlayerDust",i.frustumCulled=!1,i.renderOrder=3,this.dustParts=Array.from({length:wr},()=>({x:0,y:-99,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1})),this.dustCursor=0;const n=new Zt().makeScale(0,0,0);for(let r=0;r<wr;r++)i.setMatrixAt(r,n);return i.instanceMatrix.needsUpdate=!0,i},Ru=function(t,e,i,n){const r=this.dustParts[this.dustCursor];this.dustCursor=(this.dustCursor+1)%wr,r.x=t+(Math.random()-.5)*.16,r.y=e+.03,r.z=i+(Math.random()-.5)*.16,r.vx=-n.x*.5+(Math.random()-.5)*.35,r.vz=-n.z*.5+(Math.random()-.5)*.35,r.vy=.2+Math.random()*.16,r.max=.4+Math.random()*.2,r.life=r.max,r.size=.06+Math.random()*.05},Cu=function(t){const e=new Zt,i=new N,n=new wn,r=new N;for(let a=0;a<this.dustParts.length;a++){const o=this.dustParts[a];if(o.life<=0){e.makeScale(0,0,0),this.dust.setMatrixAt(a,e);continue}o.life=Math.max(0,o.life-t);const l=1-o.life/o.max;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.vy-=.35*t,o.vx*=1-t*2.2,o.vz*=1-t*2.2;const c=o.size*(.55+l*1.15)*Math.min(1,(1-l)*1.9);i.set(o.x,o.y,o.z),r.set(c,c,c),e.compose(i,n,r),this.dust.setMatrixAt(a,e)}this.dust.instanceMatrix.needsUpdate=!0},Pu=function(t){if(this.emoteT>0){this.frameName=this.emoteT>.85?"wave":"idle",this.billboard.setFrame(this.frameName,!1);return}if(t>.06){const e=Math.floor(this.walkT*xh)%4,i=Math.sin(this.yaw),n=Math.cos(this.yaw);let r,a=!1;if(Math.abs(i)>Math.abs(n)*1.02)r=`side${e+1}`,a=i>0,this.facing=a?"right":"left";else{const o=n<0;r=`${o?"back":"front"}${e+1}`,this.facing=o?"back":"front"}this.frameName=r,this.flip=a,this.billboard.setFrame(r,a)}else this.frameName!=="idle"&&(this.frameName="idle",this.flip=!1,this.facing="front",this.billboard.setFrame("idle",!1))},Lu=function(t){this.group.position.set(this.position.x,this.position.y,this.position.z),t&&this.billboard.faceCamera(t),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z)};const $x=7,Kx=.85;var an,Du,kr;class Zx{constructor(t,e,i){oi(this,an);this.kind="cat",this.id=t.id,this.name=t.name,this.terrain=e,this.home=new At(t.x,t.z),this.position=new N(t.x,e.groundY(t.x,t.z),t.z),this.height=t.height||.9,this.atlas=i.get(t.set||t.id),this.group=new bi,this.group.name=`Cat_${t.id}`,this.group.position.copy(this.position),this.billboard=new ks(this.atlas,"sit",{height:this.height}),this.group.add(this.billboard.mesh),this.body=this.billboard.mesh,this.body.userData.actor=this,this.group.userData.actor=this,this.shadow=zs(.24,.3),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=gu(.26),this.heart.position.set(0,this.height*1.1,0),this.group.add(this.heart),this.state="idle",this.stateT=1+Math.random()*2,this.target=null,this.walkT=Math.random()*2,this.hop=0,this.heartT=0,this.pets=0,this.yaw=Math.random()*Math.PI*2,this.frameName="sit",this.restPose="sit",this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}pet(){this.hop=1,this.heartT=1.4,this.pets+=1,this.state="happy",this.stateT=1.2,this.billboard.setFrame("happy"),this.frameName="happy"}update(t,e){if(this.stateT-=t,this.state==="walk"&&this.target){const a=this.target.x-this.position.x,o=this.target.y-this.position.z,l=Math.hypot(a,o);if(l<.12)this.target=null,$(this,an,kr).call(this);else{const c=a/l,h=o/l,u=Math.min(l,Kx*t),d=this.position.x+c*u,f=this.position.z+h*u;this.terrain.isWalkable(d,f)?(this.position.x=d,this.position.z=f):(this.target=null,$(this,an,kr).call(this)),this.yaw=Math.atan2(c,h),this.walkT+=t;const _=Math.floor(this.walkT*$x)%4,S=Math.abs(c),m=Math.abs(h);let p;S>m*1.05?p=`${c<0?"left":"right"}${_+1}`:p=`${h>0?"front":"back"}${_+1}`,p!==this.frameName&&(this.frameName=p,this.billboard.setFrame(p))}}else this.stateT<=0&&(Math.random()<.62?$(this,an,Du).call(this):$(this,an,kr).call(this));this.state==="happy"&&this.stateT<=0&&(this.state="rest",this.stateT=1.8,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);const i=this.terrain.groundY(this.position.x,this.position.z);this.position.y+=(i-this.position.y)*Math.min(1,t*12);let n=0;this.hop>0&&(this.hop=Math.max(0,this.hop-t*1.5),n=Math.sin((1-this.hop)*Math.PI)*.22),this.group.position.set(this.position.x,this.position.y+n,this.position.z),e&&this.billboard.faceCamera(e),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const r=1-n*.8;if(this.shadow.scale.set(r,1,r),this.heartT>0){this.heartT=Math.max(0,this.heartT-t);const a=1-this.heartT/1.4;this.heart.visible=!0,this.heart.position.set(0,this.height*1.05+a*.55,0),this.heart.material.opacity=Math.min(1,this.heartT*1.8);const o=this.height*.3+a*this.height*.18;this.heart.scale.set(o,o,1)}else this.heart.visible&&(this.heart.visible=!1)}}an=new WeakSet,Du=function(){for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,i=1.2+Math.random()*3.4,n=this.home.x+Math.cos(e)*i,r=this.home.y+Math.sin(e)*i;if(this.terrain.isWalkable(n,r)){this.target=new At(n,r),this.state="walk";return}}this.state="idle",this.stateT=1.5},kr=function(){const t=["sit","loaf","groom","sit","loaf"];this.restPose=t[Math.floor(Math.random()*t.length)],this.state="rest",this.stateT=2.6+Math.random()*3.4,this.billboard.setFrame(this.restPose),this.frameName=this.restPose};const Jx=["idle1","idle2","idle3","idle4"],Qx=["smile1","smile2","smile3","smile4"],jx=["joy1","joy2","joy3","joy4"];class tv{constructor(t,e,i){this.kind="ditto",this.id=t.id,this.name=t.name,this.flavor=t.flavor||"",this.variant=t.variant||"basic",this.isBasic=this.variant==="basic",this.discovered=!1,this.terrain=e,this.height=t.height||.8,this.position=new N(t.x,e.groundY(t.x,t.z),t.z),this.group=new bi,this.group.name=`Ditto_${t.id}`,this.group.position.copy(this.position),this.atlas=i.get(this.isBasic?"ditto_basic":"disguises"),this.billboard=new ks(this.atlas,this.isBasic?"idle1":this.variant,{height:this.height,exact:!this.isBasic}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.group.userData.actor=this,this.hitMesh=this.mesh,this.shadow=zs(this.height*.46,.26),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=gu(.24),this.heart.position.set(0,this.height*1.05,0),this.group.add(this.heart),this.ring=xx(this.height*.46),this.ring.position.y=.04,this.ring.visible=!1,this.group.add(this.ring),this.t=Math.random()*6.28,this.near=!1,this.reactT=0,this.hop=0,this.joy=0,this.frameIdx=0,this.frameT=0,this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}setNear(t){this.near=t}markDiscovered(){this.discovered=!0,this.joy=3.2,this.hop=1,this.reactT=1}interact(){this.reactT=1.4,this.hop=1}update(t,e,i){if(this.t+=t,this.joy>0&&(this.joy=Math.max(0,this.joy-t)),this.reactT>0&&(this.reactT=Math.max(0,this.reactT-t)),this.frameT+=t,this.isBasic){const h=this.joy>0?jx:this.near||this.reactT>0?Qx:Jx,u=this.joy>0?7:3.2;this.frameT>1/u&&(this.frameT=0,this.frameIdx=(this.frameIdx+1)%4);const d=h[this.frameIdx];this.billboard.frame!==this.atlas.frames.get(d)&&this.billboard.setFrame(d)}else this.frameT>2.4&&Math.random()<.5&&(this.frameT=0,this.billboard.setFrame(this.variant));const n=1+Math.sin(this.t*1.7)*(this.isBasic?.035:.018);this.hop>0&&(this.hop=Math.max(0,this.hop-t*2.2));const r=this.hop>0?Math.sin((1-this.hop)*Math.PI)*this.height*.22:0,a=this.reactT>0?Math.sin(this.t*26)*.06*this.reactT:0;this.group.position.set(this.position.x,this.position.y+r,this.position.z),this.billboard.mesh.scale.set(n+a*.3,n-a*.3,1),i&&this.billboard.faceCamera(i),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-r*.7;this.shadow.scale.set(o,1,o);const l=this.near&&!this.discovered?.34:0,c=this.ring.material;if(c.opacity+=(l-c.opacity)*Math.min(1,t*6),this.ring.visible=c.opacity>.01,this.ring.visible){const h=1+Math.sin(this.t*2.4)*.06;this.ring.scale.set(h,1,h),this.ring.rotation.y+=t*.4}if(this.reactT>0||this.joy>0){const h=this.joy>0?this.joy/3.2:this.reactT/1.4;this.heart.visible=!0;const u=1-Math.min(1,h);this.heart.position.set(0,this.height*(1+u*.7),0),this.heart.material.opacity=Math.min(1,h*2.2);const d=this.height*.3+u*this.height*.14;this.heart.scale.set(d,d,1)}else this.heart.visible&&(this.heart.visible=!1);e&&(this.near=this.distanceTo(e)<3.8)}}function D(s,t={},...e){const i=document.createElement(s);for(const[n,r]of Object.entries(t||{}))r!=null&&(n==="class"?i.className=r:n==="text"?i.textContent=r:n==="style"&&typeof r=="object"?Object.assign(i.style,r):n==="dataset"&&typeof r=="object"?Object.assign(i.dataset,r):n.startsWith("on")&&typeof r=="function"?i.addEventListener(n.slice(2).toLowerCase(),r):i.setAttribute(n,r));for(const n of e.flat(3))n==null||n===!1||i.append(n.nodeType?n:document.createTextNode(String(n)));return i}function ev(s){for(;s.firstChild;)s.removeChild(s.firstChild)}var ii,Zo,Iu,Nu,Gr;class iv{constructor(t){oi(this,ii);this.zone=D("div",{class:"joystick-zone"}),this.home=D("div",{class:"joystick-home"},D("span",{},"MOVE")),this.base=D("div",{class:"joystick-base"},D("div",{class:"joystick-knob"})),this.knob=this.base.firstChild,this.zone.append(this.home,this.base),t.append(this.zone),this.radius=52,this.deadZone=.14,this.vector={x:0,y:0},this.active=!1,this.enabled=!0,this.pointerId=null,this.origin={x:0,y:0},this.zone.addEventListener("pointerdown",e=>$(this,ii,Iu).call(this,e)),this.zone.addEventListener("pointermove",e=>$(this,ii,Nu).call(this,e)),this.zone.addEventListener("pointerup",e=>$(this,ii,Gr).call(this,e)),this.zone.addEventListener("pointercancel",e=>$(this,ii,Gr).call(this,e)),this.zone.addEventListener("lostpointercapture",e=>$(this,ii,Gr).call(this,e)),this.zone.addEventListener("contextmenu",e=>e.preventDefault())}setEnabled(t){this.enabled=t,t||this.reset(),this.zone.style.opacity=t?"1":"0.35"}reset(){const t=this.pointerId;this.pointerId=null,this.active=!1,this.vector.x=0,this.vector.y=0,this.base.classList.remove("active"),this.home.style.opacity="0.85",this.knob.style.transform="translate(0px, 0px)";try{t!==null&&this.zone.hasPointerCapture&&this.zone.hasPointerCapture(t)&&this.zone.releasePointerCapture(t)}catch{}}}ii=new WeakSet,Zo=function(t){const e=this.zone.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},Iu=function(t){if(!this.enabled||this.pointerId!==null)return;t.preventDefault(),this.pointerId=t.pointerId,this.active=!0;const e=$(this,ii,Zo).call(this,t);this.origin=e,this.base.style.left=`${e.x}px`,this.base.style.top=`${e.y}px`,this.base.classList.add("active"),this.home.style.opacity="0",this.knob.style.transform="translate(0px, 0px)",this.vector.x=0,this.vector.y=0;try{this.zone.setPointerCapture(t.pointerId)}catch{}},Nu=function(t){if(this.pointerId!==t.pointerId||!this.active)return;t.preventDefault();const e=$(this,ii,Zo).call(this,t);let i=e.x-this.origin.x,n=e.y-this.origin.y;const r=Math.hypot(i,n);r>this.radius&&(i=i/r*this.radius,n=n/r*this.radius),this.knob.style.transform=`translate(${i.toFixed(1)}px, ${n.toFixed(1)}px)`;let a=i/this.radius,o=n/this.radius;const l=Math.hypot(a,o);if(l<this.deadZone)a=0,o=0;else{const c=(l-this.deadZone)/(1-this.deadZone);a=a/l*c,o=o/l*c}this.vector.x=a,this.vector.y=o},Gr=function(t){this.pointerId!==null&&t.pointerId!==void 0&&t.pointerId!==this.pointerId||this.reset()};class nv{constructor(t){this.container=D("div",{class:"toasts"}),t.append(this.container)}show(t,e=2600){for(;this.container.children.length>=3;)this.container.firstChild.remove();const i=D("div",{class:"toast"},t);this.container.append(i);const n=window.setTimeout(()=>{i.classList.add("out"),window.setTimeout(()=>i.remove(),380)},e);return i.addEventListener("animationend",()=>{i.classList.contains("out")&&window.clearTimeout(n)}),i}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}const sv=[{id:"bag",icon:"🎒",label:"가방"},{id:"codex",icon:"📔",label:"도감"},{id:"build",icon:"🏗️",label:"건축"},{id:"rank",icon:"🌱",label:"랭크"}];class rv{constructor(t,e={}){this.handlers=e,this.container=D("div",{class:"hud-root hidden"}),t.append(this.container),this.phIcon=D("span",{},"🌅"),this.phLabel=D("span",{},"아침"),this.wxLabel=D("span",{},"맑음"),this.dayLabel=D("span",{class:"day"},"Day 1"),this.clockLabel=D("span",{class:"clock"},"00:00"),this.speedTag=D("span",{class:"speed hidden"},"10×"),this.pill=D("div",{class:"pill"},this.phIcon,this.phLabel,D("span",{class:"sep"},"·"),this.wxLabel,D("span",{class:"sep"},"·"),this.dayLabel,D("span",{class:"sep"},"·"),this.clockLabel,this.speedTag),this.staminaFill=D("i"),this.staminaVal=D("span",{class:"val"},"100"),this.stamina=D("div",{class:"stamina",title:"기력 — 채집할 때 줄고, 열매를 먹으면 차요"},D("span",{class:"ico"},"💪"),D("div",{class:"bar"},this.staminaFill),this.staminaVal),this.mailBadge=D("span",{class:"badge hidden"},"0"),this.mailBtn=D("button",{class:"icon-btn mail-btn",type:"button","aria-label":"우체통 열기",onclick:()=>this.handlers.onMail?.()},D("span",{class:"ico"},"📬"),this.mailBadge),this.left=D("div",{class:"hud-left"},this.pill,D("div",{class:"hud-stats"},this.stamina,this.mailBtn)),this.muteBtn=D("button",{class:"icon-btn",type:"button","aria-label":"음소거 토글",onclick:()=>this.handlers.onMute?.()},"🔊"),this.pauseBtn=D("button",{class:"icon-btn",type:"button","aria-label":"일시정지 및 설정",onclick:()=>this.handlers.onPause?.()},"⏸"),this.top=D("div",{class:"hud-top"},this.left,D("div",{class:"hud-controls"},this.muteBtn,this.pauseBtn)),this.actionIcon=D("span",{class:"ico"},"✋"),this.actionText=D("span",{class:"txt"},"둘러보기"),this.actionBtn=D("button",{class:"action-btn",type:"button",disabled:"disabled","aria-label":"상황 액션",onclick:()=>this.handlers.onAction?.()},this.actionIcon,this.actionText),this.quickbar=D("div",{class:"quickbar"}),this.quickBadges={};for(const i of sv){const n=i.id==="bag"?D("span",{class:"quick-badge"},"0/8"):null,r=D("button",{class:"quick",type:"button",onclick:()=>this.handlers.onQuick?.(i.id)},D("span",{class:"ico"},i.icon),D("span",{},i.label),n);n&&(this.quickBadges.bag=n),this.quickbar.append(r)}this.joystick=new iv(this.container),this.toastView=new nv(this.container),this.glOverlay=D("div",{class:"gl-overlay"},D("div",{class:"box"},D("h3",{},"그래픽을 다시 준비하고 있어요"),D("p",{},"잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요."))),this.container.append(this.top,this.actionBtn,this.quickbar,this.glOverlay),this.lastPill="",this.lastStamina=-1,this.lastMail=-1}show(){this.container.classList.remove("hidden")}hide(){this.container.classList.add("hidden")}setTime({icon:t,label:e,weatherIcon:i,weatherLabel:n,day:r,clock:a,speed:o}){const l=`${t}${e}${i}${n}${r}${a}${o}`;l!==this.lastPill&&(this.lastPill=l,this.phIcon.textContent=t,this.phLabel.textContent=e,this.wxLabel.textContent=`${i} ${n}`,this.dayLabel.textContent=`Day ${r}`,this.clockLabel.textContent=a,o&&o!==1?(this.speedTag.textContent=`${o}×`,this.speedTag.classList.remove("hidden")):this.speedTag.classList.add("hidden"))}setStamina(t,e=100){const i=Math.max(0,Math.min(e,Math.round(t)));i!==this.lastStamina&&(this.lastStamina=i,this.staminaFill.style.width=`${i/e*100}%`,this.staminaVal.textContent=String(i),this.stamina.classList.toggle("low",i<25),this.stamina.classList.toggle("mid",i>=25&&i<55))}setMail(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastMail&&(this.lastMail=e,this.mailBadge.textContent=e>9?"9+":String(e),this.mailBadge.classList.toggle("hidden",e<=0),this.mailBtn.classList.toggle("has-mail",e>0))}setBag(t,e){const i=this.quickBadges.bag;i&&(i.textContent=`${t}/${e}`,i.classList.toggle("full",t>=e))}setAction({active:t,icon:e="✋",label:i="둘러보기"}){t===this.actionBtn.__active&&i===this.actionBtn.__label||(this.actionBtn.__active=t,this.actionBtn.__label=i,this.actionIcon.textContent=e,this.actionText.textContent=i,t?(this.actionBtn.removeAttribute("disabled"),this.actionBtn.classList.add("enabled")):(this.actionBtn.setAttribute("disabled","disabled"),this.actionBtn.classList.remove("enabled")))}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊",this.muteBtn.setAttribute("aria-pressed",t?"true":"false")}toast(t,e=2600){return this.toastView.show(t,e)}setContextLost(t){this.glOverlay.classList.toggle("on",!!t)}}var Gs,Jo;class av{constructor(t,{hasSave:e=!1,onContinue:i,onNew:n}={}){oi(this,Gs);this.onContinue=i,this.onNew=n,this.hasSave=e,this.busy=!1,this.progressBar=D("i"),this.progressWrap=D("div",{class:"title-progress"},this.progressBar),this.continueBtn=e?D("button",{class:"btn primary",type:"button",disabled:"disabled"},"이어하기"):null,this.newBtn=D("button",{class:`btn ${e?"ghost":"primary"}`,type:"button",disabled:"disabled"},"새로 시작"),this.continueBtn&&this.continueBtn.addEventListener("click",()=>$(this,Gs,Jo).call(this,"continue")),this.newBtn.addEventListener("click",()=>$(this,Gs,Jo).call(this,"new")),this.hint=D("div",{class:"title-hint"},e?"저장된 섬이 있어요 — 이어서 걸어볼까요?":"저장된 섬이 없어요 — 새 섬을 열어 볼까요?"),this.el=D("div",{class:"title-screen"},D("div",{class:"title-badge"},"PHASE 1 · HD-2D 도트"),D("div",{class:"title-panel"},D("p",{class:"title-eyebrow"},"보경이를 위한 작은 섬"),D("h1",{class:"title-heading"},"어설픈 메타몽 섬"),D("p",{class:"title-sub"},"눈만은 못 숨기는 메타몽들과 고양이들이 모여든 비밀 낙원. 오늘도 고생 많았어요 — 여기선 아무것도 안 급해도 돼요."),this.progressWrap,D("div",{class:"title-actions"},this.continueBtn,this.newBtn),this.hint),D("div",{class:"title-version"},"GDD v1.6 · Phase 1 · HD-2D")),t.append(this.el)}setProgress(t){const e=Math.max(.06,Math.min(1,t));this.progressBar.style.width=`${Math.round(e*100)}%`,e>=1&&this.setReady(!0)}setReady(t){this.busy||(this.continueBtn&&(t?this.continueBtn.removeAttribute("disabled"):this.continueBtn.setAttribute("disabled","disabled")),t?this.newBtn.removeAttribute("disabled"):this.newBtn.setAttribute("disabled","disabled"),this.progressWrap.style.opacity=t?"0":"1")}hide(){this.el.classList.add("hidden")}show(){this.el.classList.remove("hidden"),this.busy=!1,this.setReady(!1)}destroy(){this.el.remove()}}Gs=new WeakSet,Jo=function(t){if(this.busy)return;this.busy=!0,this.hint.textContent=t==="continue"?"저장된 섬으로 돌아가는 중…":"새로운 섬을 여는 중…";const e=t==="continue"?this.onContinue:this.onNew;e&&e(t)};class ov{constructor(t){this.card=D("div",{class:"modal-card"}),this.backdrop=D("div",{class:"modal"},this.card),t.append(this.backdrop),this.isOpen=!1,this.onClose=null,this.backdrop.addEventListener("pointerdown",e=>{e.target===this.backdrop&&this.close()})}open(t){const{title:e,subtitle:i="",body:n="",actions:r=[],onClose:a=null,closable:o=!0}=t;this.onClose=a,ev(this.card),this.card.append(D("div",{class:"modal-head"},D("div",{},D("h2",{class:"modal-title"},e),i?D("p",{class:"modal-sub"},i):null),o?D("button",{class:"modal-close",type:"button","aria-label":"닫기",onclick:()=>this.close()},"✕"):null));const l=D("div",{class:"modal-body"});if(typeof n=="string"?l.append(document.createTextNode(n)):n instanceof Node?l.append(n):Array.isArray(n)&&n.forEach(c=>c&&l.append(c)),this.card.append(l),r.length){const c=D("div",{class:"modal-actions"});for(const h of r){const u=D("button",{class:`btn ${h.kind||""}`,type:"button"},h.label);h.disabled&&(u.disabled=!0,u.setAttribute("disabled","disabled")),u.addEventListener("click",()=>{u.disabled||h.onClick&&h.onClick()}),c.append(u)}this.card.append(c)}this.backdrop.classList.add("open"),this.isOpen=!0,this.card.scrollTop=0}close(){if(!this.isOpen)return;this.backdrop.classList.remove("open"),this.isOpen=!1;const t=this.onClose;this.onClose=null,t&&t()}}class lv{constructor(t,e){this.container=D("div",{class:"landmark-layer"}),t.append(this.container),this.items=e.map(i=>{const n=D("span",{class:"lm-day"},`${i.day}일차 복구`),r=D("div",{class:"landmark-pill"},D("span",{class:"lm-ico"},i.icon),D("span",{class:"lm-name"},i.name),n);return this.container.append(r),{site:i,el:r,dayEl:n,x:i.x,y:i.y+i.markerY+.55,z:i.z,opacity:-1,done:!1}}),this.v=new N}setDone(t,e=!0){const i=this.items.find(n=>n.site.id===t);i&&(i.done=!!e,i.el.classList.toggle("done",!!e),i.dayEl.textContent=e?"✨ 복구 완료":`${i.site.day}일차 복구`)}setVisible(t){this.container.style.opacity=t?"1":"0"}update(t,e){if(!e){this.container.style.opacity!=="0"&&(this.container.style.opacity="0");return}this.container.style.opacity="1";const i=window.innerWidth,n=window.innerHeight,r=t.position;for(const a of this.items){this.v.set(a.x,a.y,a.z);const o=r.distanceTo(this.v);this.v.project(t);const l=this.v.z>1,c=(this.v.x*.5+.5)*i,h=(-this.v.y*.5+.5)*n,u=h<92||h>n-96||c<24||c>i-24,d=l||o>34||u?0:Math.min(1,Math.max(0,(34-o)/12))*.95;a.opacity+=(d-a.opacity)*.18,Math.abs(d-a.opacity)<.02&&(a.opacity=d);const f=a.el;if(a.opacity<=.02){f.style.display!=="none"&&(f.style.display="none");continue}f.style.display==="none"&&(f.style.display="flex"),f.style.opacity=a.opacity.toFixed(2),f.style.transform=`translate(-50%, -50%) translate(${c.toFixed(1)}px, ${h.toFixed(1)}px)`}}}const Jr=[{id:"notice_life",icon:"🌿",from:"섬 지기",title:"섬에 생활의 손길이 생겼어요",tag:"공지",body:["보경 님, 섬에 작은 변화가 생겼어요.","이제 나무를 톡톡 두드리면 통나무가, 바위를 두드리면 돌이 나와요. 꽃덤불은 한 번만 스치면 꽃잎이 손에 들어와요.","가방은 여덟 칸이에요. 한 칸에 스무 개까지 담기고, 넘치면 그 자리에 잠깐 내려놓게 돼요.","공방에 가면 창고를 열 수 있어요. 재료를 모아 두었다가 부두·공방·자판기·등대를 하나씩 복구해 보세요.","나무 밑에는 가끔 반짝이는 열매가 떨어져요. 먹으면 기력이 차올라요."],gift:null},{id:"welcome_bokyung",icon:"💌",from:"울림이 대신 쓴 편지",title:"보경 님께 — 섬에 오신 걸 환영해요",tag:"웰컴",body:["보경 님, 이 섬은 보경 님이 쉬어 가라고 만든 아주 작은 곳이에요. 아무것도 안 해도 괜찮아요.","그래도 손이 심심하면 나무를 두드려 보세요. 통나무가 나오고, 벚꽃나무는 꽃잎도 조금 흘려요.","동봉한 선물을 받아 두세요. 열매 세 개는 기력을 채우는 데, 별조각 하나는 자판기 복구에 써요.","천천히 걸어 보세요. 솜이와 옹이가 먼저 와서 기다리고 있어요.","— 늘 보경 님 편인 울림이"],gift:{berry:3,star:1}},{id:"guide_restore",icon:"🔨",from:"섬 지기",title:"복구 가이드 — 네 곳의 약속",tag:"가이드",body:["부두 — 통나무 6 · 돌 2. 배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.","공방 — 통나무 8 · 돌 6. 창고와 도구방이 함께 열려요.","메타몽 자판기 — 돌 4 · 꽃잎 5 · 별조각 2. 복구하면 밤에 은은하게 빛나요.","등대 — 통나무 12 · 돌 10 · 별조각 5. 복구하면 밤마다 따뜻한 불이 켜져요.","별조각은 바위에서 아주 가끔 나와요. 기력이 모자라면 열매를 먹고 다시 두드리면 돼요."],gift:null}],Ar=s=>Ze[s]?Ze[s].name:s,Ja=s=>Ze[s]?Ze[s].icon:"❔";var jr,Uu;class cv{constructor(t){oi(this,jr);this.game=t}bag(){const t=this.game.progress.inventory,e=D("div",{class:"bag-grid"});for(let a=0;a<ke.slots;a++){const o=t.bag[a],l=D("div",{class:`bag-slot ${o?"filled":"empty"} ${o&&o.id==="berry"?"tap":""}`},D("span",{class:"ico"},o?Ze[o.id].icon:"·"),o?D("span",{class:"n"},String(o.n)):null,o?D("span",{class:"nm"},Ar(o.id)):null);o&&o.id==="berry"&&l.addEventListener("click",()=>this.game.eatBerry()),e.append(l)}const i=t.count("berry"),n=i>0?D("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.eatBerry()},`🍓 열매 먹기  ·  기력 +30  (${i}개)`):D("div",{class:"hint"},"열매가 없어요 — 온전한 나무 밑에 가끔 떨어져요 🍓");return{title:"🎒 가방",subtitle:"채집한 재료와 열매가 여기에 담겨요",body:D("div",{},D("div",{class:"hint"},`가방 ${t.usedSlots()}/${ke.slots}칸 · 담긴 재료 ${t.totalItems()}개 · 한 칸에 ${ke.stack}개까지`),e,D("div",{class:"section-label"},"쓰기"),n,D("div",{class:"section-label"},"재료가 가득 차면"),D("div",{class:"hint"},"공방의 창고에 맡겨 두세요. 가방이 넘치면 그 자리에 잠깐 내려놓게 돼요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}storage(){const t=this.game.progress.inventory,e=t.bagEntries(),i=t.storageEntries(),n=(a,o)=>{const l=o==="out",c=h=>l?this.game.moveToStorage(a.id,h):this.game.moveFromStorage(a.id,h);return D("div",{class:"store-row"},D("span",{class:"ico"},Ja(a.id)),D("span",{class:"nm"},Ar(a.id)),D("span",{class:"n"},String(a.n)),D("button",{class:"mini",type:"button","aria-label":`1개 ${l?"창고로":"가방으로"}`,onclick:()=>c(1)},l?"→1":"←1"),D("button",{class:"mini",type:"button","aria-label":`전부 ${l?"창고로":"가방으로"}`,onclick:()=>c("all")},l?"→전체":"←전체"))};return{title:"📦 공방 창고",subtitle:"대량으로 모아 두고, 필요할 때 가방으로 꺼내요",body:D("div",{},D("div",{class:"hint"},"1 은 하나씩, 전체 는 그 재료를 전부 옮겨요 — 오른쪽은 창고로, 왼쪽은 가방으로."),D("div",{class:"section-label"},`🎒 가방 → 📦 창고  (${t.usedSlots()}/${ke.slots}칸)`),e.length?D("div",{class:"store-list"},...e.map(a=>n(a,"out"))):D("div",{class:"hint"},"가방이 비어 있어요."),D("div",{class:"section-label"},"📦 창고 → 🎒 가방"),i.length?D("div",{class:"store-list"},...i.map(a=>n(a,"in"))):D("div",{class:"hint"},"창고가 비어 있어요. 모아 둔 재료가 여기 쌓여요.")),actions:[{label:"건물 복구 보기",kind:"ghost",onClick:()=>this.game.openBuild("workshop")},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}build(t){const e=Li.find(_=>_.id===t)||Li[0],i=this.game.progress.building(e.id),n=Br[e.id]||{},r=this.game.progress.inventory,a=Object.values(n).reduce((_,S)=>_+S,0),o=Object.entries(n).reduce((_,[S,m])=>_+Math.min(m,i.invested[S]||0),0),l=a?Math.round(o/a*100):0,c=Object.entries(n).every(([_,S])=>(i.invested[_]||0)>=S),h=Object.entries(n).some(([_,S])=>(i.invested[_]||0)<S&&r.count(_)>0),u=Object.entries(n).map(([_,S])=>{const m=r.count(_),p=Math.min(S,i.invested[_]||0),y=p>=S;return D("div",{class:`req-row ${y?"done":""}`},D("span",{class:"ico"},Ja(_)),D("div",{class:"info"},D("div",{class:"nm"},`${Ar(_)}${y?" ✓":""}`),D("div",{class:"sub"},`가방 ${m}개 · 창고 ${this.game.progress.inventory.stored(_)}개`)),D("span",{class:`need ${m+(i.invested[_]||0)>=S?"ok":"lack"}`},`${p}/${S}`))}),d=i.done?D("div",{},D("div",{class:"done-banner"},"✨ 복구 완료",D("div",{class:"sub"},ph[e.id]||"")),D("div",{class:"hint"},e.id==="lighthouse"?"밤이 되면 등대에 따뜻한 불이 켜져요.":"이제 섬의 일부가 되살아났어요.")):D("div",{},D("div",{class:"hint"},ph[e.id]||""),D("div",{class:"progress-line"},D("i",{style:{width:`${l}%`}})),D("div",{class:"req-list"},...u),D("div",{class:"hint"},c?"재료가 다 모였어요 — [복구 완료!] 를 눌러 주세요.":"재료를 모아 [재료 투입] 으로 하나씩 넣어요.")),f=[];return e.id==="workshop"&&i.done&&f.push({label:"📦 창고 열기",kind:"ghost",onClick:()=>this.game.openStorage()}),i.done||(f.push({label:"재료 투입",kind:"ghost",disabled:!h,onClick:()=>this.game.invest(e.id)}),f.push({label:"복구 완료!",kind:"primary",disabled:!c,onClick:()=>this.game.completeBuild(e.id)})),f.push({label:"닫기",kind:i.done||!c?"primary":"ghost",onClick:()=>this.game.modal.close()}),{title:`${e.icon} ${e.name}`,subtitle:i.done?"이미 복구된 건물이에요":`${e.day}일차에 열리는 부지 — 지금 바로 복구할 수 있어요`,body:d,actions:f}}workshopMenu(){const t=this.game.progress.building("workshop"),e=this.game.progress.inventory,i=D("div",{},D("div",{class:"hint"},t.done?"공방이 열렸어요. 창고에 재료를 맡기고 다시 꺼낼 수 있어요.":"공방은 아직 낡았어요. 복구하면 창고와 도구방이 함께 열려요."),D("div",{class:"row"},D("div",{},D("div",{class:"label"},"가방"),D("div",{class:"hint"},`${e.usedSlots()}/${ke.slots}칸 사용 중`)),D("span",{class:"hint"},`재료 ${e.totalItems()}개`))),n=[];return t.done&&n.push({label:"📦 창고 열기",kind:"primary",onClick:()=>this.game.openStorage()}),n.push({label:"🔨 건물 복구",kind:t.done?"ghost":"primary",onClick:()=>this.game.openBuild("workshop")}),n.push({label:"닫기",kind:"ghost",onClick:()=>this.game.modal.close()}),{title:"🔨 공방",subtitle:"재료를 정리하고 섬을 고치는 곳",body:i,actions:n}}mailbox(t){const e=this.game.progress;if(t){const n=Jr.find(r=>r.id===t);if(n)return $(this,jr,Uu).call(this,n,e)}const i=Jr.map(n=>{const r=!e.isRead(n.id),a=n.gift&&!e.isClaimed(n.id);return D("button",{class:`mail-row ${r?"unread":""}`,type:"button",onclick:()=>this.game.openMailbox(n.id)},D("span",{class:"mail-ico"},n.icon),D("div",{class:"mail-main"},D("div",{class:"mail-title"},n.title),D("div",{class:"mail-from"},`${n.from} · ${n.tag}`)),a?D("span",{class:"mail-gift"},"🎁"):r?D("span",{class:"mail-dot"}):null)});return{title:"📬 우체통",subtitle:"공지와 편지, 그리고 동봉된 선물이 있어요",body:D("div",{class:"mail-list"},...i),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}jr=new WeakSet,Uu=function(t,e){const i=e.isClaimed(t.id),n=t.gift&&D("div",{class:"gift-box"},D("div",{class:"gift-head"},i?"🎀 받은 선물":"🎁 동봉된 선물"),D("div",{class:"gift-items"},...Object.entries(t.gift).map(([a,o])=>D("span",{class:"gift-chip"},`${Ja(a)} ${Ar(a)} ${o}`))),i?D("div",{class:"hint"},"가방에 잘 넣어 두었어요."):D("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.claimGift(t.id)},"선물 받기")),r=D("div",{},D("div",{class:"letter-from"},`${t.from} · ${t.tag}`),...t.body.map(a=>D("p",{class:"letter-p"},a)),n);return{title:`${t.icon} ${t.title}`,subtitle:"",body:r,actions:[{label:"← 편지함",kind:"ghost",onClick:()=>this.game.openMailbox()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}};let Rr=null;function hv(){try{return typeof indexedDB<"u"&&indexedDB!==null}catch{return!1}}function Nl(){return hv()?Rr||(Rr=new Promise((s,t)=>{let e;try{e=indexedDB.open(Ue.dbName,1)}catch(i){t(i);return}e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains(Ue.store)||i.createObjectStore(Ue.store)},e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error||new Error("IndexedDB open error")),e.onblocked=()=>t(new Error("IndexedDB blocked"))}),Rr):Promise.reject(new Error("IndexedDB not available"))}async function uv(s){const t=await Nl();return new Promise((e,i)=>{const r=t.transaction(Ue.store,"readonly").objectStore(Ue.store).get(s);r.onsuccess=()=>e(r.result??null),r.onerror=()=>i(r.error)})}async function dv(s,t){const e=await Nl();return new Promise((i,n)=>{const r=e.transaction(Ue.store,"readwrite");r.objectStore(Ue.store).put(t,s),r.oncomplete=()=>i(!0),r.onerror=()=>n(r.error),r.onabort=()=>n(r.error||new Error("transaction aborted"))})}async function fv(s){const t=await Nl();return new Promise((e,i)=>{const n=t.transaction(Ue.store,"readwrite");n.objectStore(Ue.store).delete(s),n.oncomplete=()=>e(!0),n.onerror=()=>i(n.error)})}const Cr=s=>typeof s=="string"&&!!Ze[s];class pv{constructor(t){this.bag=new Array(ke.slots).fill(null),this.storage={},t&&this.load(t)}count(t){let e=0;for(const i of this.bag)i&&i.id===t&&(e+=i.n);return e}stored(t){return Math.max(0,Math.floor(Number(this.storage[t])||0))}roomFor(t){if(!Cr(t))return 0;let e=0;for(const i of this.bag)i?i.id===t&&(e+=Math.max(0,ke.stack-i.n)):e+=ke.stack;return e}usedSlots(){return this.bag.filter(Boolean).length}totalItems(){let t=0;for(const e of this.bag)e&&(t+=e.n);return t}bagEntries(){const t=new Map;for(const e of this.bag)!e||e.n<=0||t.set(e.id,(t.get(e.id)||0)+e.n);return dh.filter(e=>t.has(e)).map(e=>({id:e,n:t.get(e)}))}storageEntries(){return dh.filter(t=>this.stored(t)>0).map(t=>({id:t,n:this.stored(t)}))}add(t,e){if(!Cr(t))return 0;let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;for(const n of this.bag){if(i<=0)break;if(!n||n.id!==t)continue;const r=ke.stack-n.n;if(r<=0)continue;const a=Math.min(r,i);n.n+=a,i-=a}for(;i>0;){const n=this.bag.indexOf(null);if(n<0)break;const r=Math.min(ke.stack,i);this.bag[n]={id:t,n:r},i-=r}return i}take(t,e){let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;let n=0;for(let r=0;r<this.bag.length&&i>0;r++){const a=this.bag[r];if(!a||a.id!==t)continue;const o=Math.min(a.n,i);a.n-=o,i-=o,n+=o,a.n<=0&&(this.bag[r]=null)}return n}toStorage(t,e="all"){const i=this.count(t);if(!i)return 0;const n=Math.max(0,fh-this.stored(t)),r=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0))),a=Math.min(r,n);return a<=0?0:(this.take(t,a),this.storage[t]=this.stored(t)+a,a)}fromStorage(t,e="all"){const i=this.stored(t);if(!i)return 0;const n=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0)));if(n<=0)return 0;const r=this.add(t,n),a=n-r;if(a>0){const o=this.stored(t)-a;o>0?this.storage[t]=o:delete this.storage[t]}return a}toJSON(){return{bag:this.bag.map(t=>t&&t.n>0?{id:t.id,n:Math.min(ke.stack,Math.floor(t.n))}:null),storage:{...this.storage}}}load(t){if(this.bag=new Array(ke.slots).fill(null),this.storage={},!t||typeof t!="object")return this;if((Array.isArray(t.bag)?t.bag:[]).slice(0,ke.slots).forEach((i,n)=>{if(!i||typeof i!="object"||!Cr(i.id))return;const r=Math.floor(Number(i.n));!Number.isFinite(r)||r<=0||(this.bag[n]={id:i.id,n:Math.min(ke.stack,r)})}),t.storage&&typeof t.storage=="object")for(const[i,n]of Object.entries(t.storage)){if(!Cr(i))continue;const r=Math.floor(Number(n));!Number.isFinite(r)||r<=0||(this.storage[i]=Math.min(fh,r))}return this}}const mv=(s,t,e,i)=>{const n=Number(s);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};class Fu{constructor(t){this.reset(),t&&this.load(t)}reset(){this.stamina=ei.max,this.inventory=new pv,this.buildings={};for(const t of Li)this.buildings[t.id]={invested:{},done:!1};this.mailbox={read:[],claimed:[]},this.nodes={}}useStamina(t){const e=Math.max(0,Number(t)||0);return this.stamina<e?!1:(this.stamina=Math.max(0,this.stamina-e),!0)}restStamina(t){this.stamina=Math.min(ei.max,this.stamina+Math.max(0,Number(t)||0))}building(t){return this.buildings[t]||(this.buildings[t]={invested:{},done:!1}),this.buildings[t]}investedTotal(t){const e=this.building(t).invested;return Object.values(e).reduce((i,n)=>i+(Number(n)||0),0)}isRead(t){return this.mailbox.read.includes(t)}markRead(t){this.isRead(t)||this.mailbox.read.push(t)}isClaimed(t){return this.mailbox.claimed.includes(t)}markClaimed(t){this.isClaimed(t)||this.mailbox.claimed.push(t)}toJSON(){const t=this.inventory.toJSON();return{stamina:Math.round(this.stamina*10)/10,bag:t.bag,storage:t.storage,buildings:this.buildings,mailbox:this.mailbox,nodes:this.nodes}}load(t){if(this.reset(),!t||typeof t!="object")return this;this.stamina=mv(t.stamina,0,ei.max,ei.max),this.inventory.load({bag:t.bag,storage:t.storage});const e=t.buildings&&typeof t.buildings=="object"?t.buildings:{};for(const a of Li){const o=e[a.id]&&typeof e[a.id]=="object"?e[a.id]:null,l=this.buildings[a.id];if(o&&(l.done=!!o.done,o.invested&&typeof o.invested=="object"))for(const[c,h]of Object.entries(o.invested)){if(!Ze[c])continue;const u=Math.floor(Number(h));Number.isFinite(u)&&u>0&&(l.invested[c]=u)}}const i=t.mailbox&&typeof t.mailbox=="object"?t.mailbox:{},n=Array.isArray(i.read)?i.read:[],r=Array.isArray(i.claimed)?i.claimed:[];if(this.mailbox.read=n.filter(a=>typeof a=="string"),this.mailbox.claimed=r.filter(a=>typeof a=="string"),t.nodes&&typeof t.nodes=="object")for(const[a,o]of Object.entries(t.nodes)){if(typeof a!="string"||!o||typeof o!="object")continue;const l=Math.floor(Number(o.left)),c=Number(o.respawn);this.nodes[a]={left:Number.isFinite(l)&&l>=0?Math.min(9,l):0,respawn:Number.isFinite(c)&&c>0?Math.min(600,c):0}}return this}}const gv=2,_v={timeScale:1},xv=[1,10,60],Gi=(s,t)=>{const e=Number(s);return Number.isFinite(e)?e:t},vv=(s,t,e,i)=>{const n=Number(s);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};function vh(s){if(!s||typeof s!="object"||Array.isArray(s))return null;const t=s.settings&&typeof s.settings=="object"?s.settings:{},e={muted:!!t.muted,timeScale:xv.includes(Number(t.timeScale))?Number(t.timeScale):_v.timeScale,fps30:!!t.fps30},i=s.player&&typeof s.player=="object"?s.player:{},n=s.playerPos&&typeof s.playerPos=="object"?s.playerPos:{},r={x:Gi(i.x,Gi(n.x,.4)),z:Gi(i.z,Gi(n.z,11.8)),yaw:Gi(i.yaw,Math.PI)},a=Array.isArray(s.discovered)?s.discovered.filter(l=>typeof l=="string"):Array.isArray(s.discoveredDittos)?s.discoveredDittos.filter(l=>typeof l=="string"):[],o=new Fu(s).toJSON();return{version:gv,savedAt:Gi(s.savedAt,Date.now()),day:Math.max(1,Math.min(3650,Math.floor(Gi(s.day,1)))),elapsed:vv(Gi(s.elapsed,Gi(s.elapsedSeconds,120)),0,_e-.01,120),discovered:a,settings:e,player:r,...o}}const Qa=`${Ue.dbName}:${Ue.key}`;class Mv{constructor(){this.mode="unknown",this.lastError=null}async load(){try{const t=await uv(Ue.key);if(t)return this.mode="idb",vh(t);this.mode="idb"}catch(t){this.lastError=String(t&&t.message?t.message:t),this.mode="local"}try{const t=localStorage.getItem(Qa);if(t)return this.mode=this.mode==="unknown"?"local":this.mode,vh(JSON.parse(t))}catch(t){this.lastError=String(t)}return null}async hasSave(){return!!await this.load()}async save(t){try{return await dv(Ue.key,{...t,version:2}),this.mode="idb",!0}catch(e){this.lastError=String(e&&e.message?e.message:e),this.mode="local";try{return localStorage.setItem(Qa,JSON.stringify(t)),!0}catch(i){return this.lastError=String(i),!1}}}async clear(){try{await fv(Ue.key)}catch(t){this.lastError=String(t)}try{localStorage.removeItem(Qa)}catch{}}}const Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sv=new Cl(-1,1,1,-1,0,1);class yv extends Fe{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const bv=new yv;class Ul{constructor(t){this._mesh=new we(bv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ou extends hs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ns.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ul(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mh extends hs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Ev extends hs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Tv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ou(Hr),this.copyPass.material.blending=Sn,this.timer=new Hf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mh!==void 0&&(a instanceof Mh?i=!0:a instanceof Ev&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wv extends hs{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new mt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const Av={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ss extends hs{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,a,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Xe(r,a,{type:We,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Xe(r,a,{type:We,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Av;this.highPassUniforms=ns.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ns.clone(Hr.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,premultipliedAlpha:!0,blending:Ls,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new mt,this._oldClearAlpha=1,this._basic=new Cn,this._fsQuad=new Ul(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ss.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ss.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new Ve({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ss.BlurDirectionX=new At(1,0);ss.BlurDirectionY=new At(0,1);const Pr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Rv extends hs{constructor(){super(),this.isOutputPass=!0,this.uniforms=ns.clone(Pr.uniforms),this.material=new Jh({name:Pr.name,uniforms:this.uniforms,vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader}),this._fsQuad=new Ul(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===al?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Qn={bloomThreshold:.86,bloomStrength:.3,bloomRadius:.4,saturation:1.07,contrast:.2,vignette:.28},Cv={uniforms:{tDiffuse:{value:null},uSaturation:{value:Qn.saturation},uContrast:{value:Qn.contrast},uVignette:{value:Qn.vignette}},vertexShader:`
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
  `};function Sh(s,t,e){const i=s.getDrawingBufferSize(new At),n=new Xe(Math.max(1,i.x),Math.max(1,i.y),{type:We,samples:4});n.texture.name="MetamongPostRT";const r=new Tv(s,n);r.setPixelRatio(s.getPixelRatio()),r.setSize(window.innerWidth,window.innerHeight);const a=new wv(t,e);r.addPass(a);const o=new ss(new At(window.innerWidth,window.innerHeight),Qn.bloomStrength,Qn.bloomRadius,Qn.bloomThreshold);r.addPass(o),r.addPass(new Rv);const l=new Ou(Cv);r.addPass(l);let c={calls:0,triangles:0};const h=a.render.bind(a);return a.render=(u,d,f,_,S)=>{h(u,d,f,_,S),c={calls:u.info.render.calls,triangles:u.info.render.triangles}},{composer:r,bloom:o,grade:l,renderPass:a,get sceneStats(){return c},setSize(u,d){r.setPixelRatio(s.getPixelRatio()),r.setSize(u,d)},render(){r.render()},dispose(){r.dispose(),n.dispose()}}}const Pv=["protagonist","somi","ongi","ditto_basic","disguises","buildings","nature"],Lv=new Uf;function Dv(s){return s.colorSpace=fe,s.magFilter=se,s.minFilter=se,s.generateMipmaps=!1,s.wrapS=di,s.wrapT=di,s.anisotropy=1,s}async function Iv(s){const t=new URL("sprites/",document.baseURI),e=await fetch(new URL(`${s}.json`,t).href);if(!e.ok)throw new Error(`스프라이트 매니페스트 없음: ${s}.json (${e.status})`);const i=await e.json(),n=Dv(await Lv.loadAsync(new URL(`${s}_sheet.png`,t).href)),r=new Map;for(const a of i.frames)r.set(a.name,a);return{set:s,texture:n,frames:r,cell:i.cell,cols:i.grid[0],rows:i.grid[1],notes:i.notes||[]}}async function Nv(){const s=await Promise.all(Pv.map(Iv)),t=new Map;for(const e of s)t.set(e.set,e);return t}const Uv=.12;var Ni,Bu,Qo,jo;class Fv{constructor({scenery:t,progress:e,drops:i,fx:n,audio:r}){oi(this,Ni);this.scenery=t,this.progress=e,this.drops=i,this.fx=n,this.audio=r,this.hooks={},this.cooldown=0,this.fullWarnAt=0,this.time=0}get inventory(){return this.progress.inventory}reset(){for(const t of this.scenery.nodes)$(this,Ni,jo).call(this,t,!1),t.berryT=22+Math.random()*26;this.drops&&this.drops.clear()}applySaved(t){if(this.reset(),!(!t||typeof t!="object"))for(const e of this.scenery.nodes){const i=t[e.key];i&&(this.scenery.applyNodeState(e,i),i.left>0&&!(i.respawn>0)&&(e.hitsLeft=Math.min(e.hitsNeeded,i.left)),e.respawn=Math.max(0,Number(i.respawn)||0),i.respawn>0&&(e.hitsLeft=e.hitsNeeded,e.harvested=!0))}}toJSON(){const t={};for(const e of this.scenery.nodes){const i=e.harvested?0:e.hitsLeft,n=e.harvested?Math.max(.1,Math.round(e.respawn*10)/10):0;i>=e.hitsNeeded&&n<=0||(t[e.key]={left:i,respawn:n})}return t}nearest(t,e=2.5){let i=null,n=e;for(const r of this.scenery.nodes){if(r.harvested)continue;const a=Math.hypot(r.x-t.x,r.z-t.z);a<n&&(i=r,n=a)}return i}nodeAt(t,e,i=3){let n=null,r=i;for(const a of this.scenery.nodes){if(a.harvested)continue;const o=Math.hypot(a.x-t,a.z-e);o<r&&(n=a,r=o)}return n}hit(t){if(!t||t.harvested)return{ok:!1,reason:"gone"};if(this.cooldown>0)return{ok:!1,reason:"cooldown"};this.cooldown=Uv;const e=ra[t.kind];if(!e)return{ok:!1,reason:"kind"};if(!this.progress.useStamina(e.cost))return this.audio.sfxDeny(),this.hooks.toast?.("기운이 부족해요 — 열매를 먹거나 잠깐 쉬어요 🍓",2e3),this.fx.float("기운 부족",t.x,t.y+t.height*.8,t.z,"#b26a86"),{ok:!1,reason:"stamina"};if(t.hitsLeft=Math.max(0,t.hitsLeft-1),this.scenery.pop(t),this.fx.burst(t.x,t.y+t.height*.42,t.z,$(this,Ni,Bu).call(this,t),9),this.audio.sfxHit(t.kind),t.hitsLeft>0)return this.fx.float("툭!",t.x,t.y+t.height*.95,t.z,"#fff2e2"),{ok:!0,harvest:!1};const i=Sx(t.kind,t.frame),n={};for(const[a,o]of Object.entries(i)){const l=this.inventory.add(a,o),c=o-l;if(c>0&&(n[a]=c),l>0){const h=$(this,Ni,Qo).call(this,t.x,t.z);this.drops.spawn(a,l,h.x,h.z),this.hooks.toast?.(`가방이 가득 — ${Ze[a].name} ${l}개를 바닥에 내려놨어요`,2400)}}let r=0;for(const[a,o]of Object.entries(n))this.fx.float(`+${o} ${Ze[a].name}`,t.x,t.y+t.height*.9+r*.24,t.z,"#5f5470"),r++;return!Object.keys(n).length&&!Object.keys(i).length&&this.fx.float("…",t.x,t.y+.9,t.z,"#5f5470"),this.scenery.setHarvested(t,!0),t.respawn=60+Math.random()*30,t.hitsLeft=t.hitsNeeded,n.star?(this.audio.sfxRare(),this.hooks.toast?.(`별조각을 얻었어요! ⭐ ${yx(n)}`,2600)):this.audio.sfxPickup(),this.hooks.save?.(),{ok:!0,harvest:!0,gains:n}}pickup(t){const e=Ze[t.itemId];if(!e)return!0;if(this.inventory.roomFor(t.itemId)<=0)return this.time-this.fullWarnAt>4&&(this.fullWarnAt=this.time,this.hooks.toast?.("가방이 가득 찼어요 — 공방 창고에 맡겨 주세요 🎒",2400)),!1;const i=this.inventory.add(t.itemId,t.count),n=t.count-i;return n>0&&(this.fx.float(`+${n} ${e.name}`,t.x,t.y+.85,t.z,"#5f5470"),this.audio.sfxPickup(),this.hooks.onPickup?.(t.itemId,n)),!0}update(t,e,i,n){if(this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),e>0){this.progress.restStamina(ei.regenPerSecond*e);for(const r of this.scenery.nodes){if(r.harvested){r.respawn-=e,r.respawn<=0&&$(this,Ni,jo).call(this,r,!0);continue}if(r.berryT-=e,r.berryT>0)continue;if(this.drops.hasSource(r.key)){r.berryT=15+Math.random()*10;continue}const a=$(this,Ni,Qo).call(this,r.x,r.z),o=this.drops.spawn("berry",1,a.x,a.z,r.key);o&&(this.fx.burst(a.x,o.y+.5,a.z,"#ffb3c8",6,{spread:.8,up:1.2}),this.fx.float("열매가 톡",r.x,r.y+r.height*.9,r.z,"#c25f80")),r.berryT=45+Math.random()*30}}this.drops.update(t,n?i:null,r=>this.pickup(r))}}Ni=new WeakSet,Bu=function(t){return t.kind==="tree"?t.frame.startsWith("cherry")?"#ffc2d8":"#9ed08a":t.kind==="rock"?"#c8c8dc":"#ffb9d5"},Qo=function(t,e){for(let i=0;i<8;i++){const n=Math.random()*Math.PI*2,r=.55+Math.random()*.5,a=t+Math.cos(n)*r,o=e+Math.sin(n)*r;if(!this.scenery.terrain||this.scenery.terrain.isWalkable(a,o))return{x:a,z:o}}return{x:t+.4,z:e+.4}},jo=function(t,e){t.harvested=!1,t.hitsLeft=t.hitsNeeded,t.respawn=0,t.scale=1,t.targetScale=1,t.opacity=1,t.targetOpacity=1,t.mesh.scale.setScalar(1),t.mesh.material.opacity=1,t.mesh.material.transparent=!1,t.mesh.material.depthWrite=!0,t.mesh.rotation.z=0,t.sprout.visible=!1,t.stubTarget=0,t.stub.material.opacity=0,t.stub.visible=!1,t.collider&&(t.collider.r=t.baseR),e&&this.fx.burst(t.x,t.y+t.height*.35,t.z,"#cfeeb4",7,{spread:.9,up:1.4})};const Ov=16,Bv=.95;class zv{constructor(t,e){this.terrain=e,this.group=new bi,this.group.name="Drops",t.add(this.group),this.items=[],this.time=0}hasSource(t){return!!t&&this.items.some(e=>e.sourceKey===t)}spawn(t,e,i,n,r=null){const a=Ze[t]?t:"berry";if(r&&this.hasSource(r))return null;for(;this.items.length>=Ov;)this.remove(this.items[0]);const o=Math.max(this.terrain.groundY(i,n),.02),l=new Mn(new rn({map:Ex(a),transparent:!0,depthWrite:!1,toneMapped:!1}));l.scale.set(.44,.44,1),l.position.set(i,o+.36,n),l.renderOrder=3;const c=new Mn(new rn({map:Yo(),color:Ze[a].tint,transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1,blending:Ls}));c.scale.set(.95,.95,1),c.position.copy(l.position),c.position.y-=.04,c.renderOrder=2;const h={itemId:a,count:Math.max(1,Math.floor(e)||1),x:i,z:n,y:o,sprite:l,halo:c,sourceKey:r,age:Math.random()*6};return l.userData.drop=h,this.group.add(c),this.group.add(l),this.items.push(h),h}remove(t){const e=this.items.indexOf(t);e<0||(this.items.splice(e,1),t.sprite.material.dispose(),t.halo.material.dispose(),this.group.remove(t.sprite),this.group.remove(t.halo))}update(t,e,i){this.time+=t;for(let n=this.items.length-1;n>=0;n--){const r=this.items[n];r.age+=t;const a=Math.sin(this.time*2.3+r.age)*.07;r.sprite.position.y=r.y+.38+a,r.halo.position.y=r.y+.32+a*.6;const o=.62+Math.sin(this.time*3.1+r.age)*.18;r.halo.material.opacity=o;const l=.9+Math.sin(this.time*2.6+r.age)*.08;if(r.halo.scale.set(l,l,1),!e)continue;Math.hypot(r.x-e.x,r.z-e.z)<=Bv&&(i?i(r):!0)!==!1&&this.remove(r)}}rayTargets(){return this.items.map(t=>t.sprite)}clear(){for(let t=this.items.length-1;t>=0;t--)this.remove(this.items[t])}}const $n=220;class kv{constructor(t,e){this.scene=t,this.particles=Array.from({length:$n},()=>({x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,color:new mt("#ffffff")})),this.cursor=0;const i=new Float32Array($n*3),n=new Float32Array($n*3);for(let o=0;o<$n;o++)i[o*3+1]=-999;const r=new Fe;r.setAttribute("position",new qe(i,3)),r.setAttribute("color",new qe(n,3));const a=new Tl({size:.17,map:Ax(),vertexColors:!0,transparent:!0,opacity:.96,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0});this.points=new qh(r,a),this.points.name="GatherFx",this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.layer=D("div",{class:"float-layer"}),e.append(this.layer),this.texts=[],this.v=new N}burst(t,e,i,n="#ffd7e7",r=10,a={}){const o=a.spread??1.6,l=a.up??2.3,c=a.size??1;for(let h=0;h<r;h++){const u=this.particles[this.cursor];this.cursor=(this.cursor+1)%$n;const d=Math.random()*Math.PI*2,f=Math.random()*o;u.x=t+Math.cos(d)*.12,u.y=e+.25+Math.random()*.5,u.z=i+Math.sin(d)*.12,u.vx=Math.cos(d)*f,u.vz=Math.sin(d)*f,u.vy=.6+Math.random()*l,u.max=.45+Math.random()*.4,u.life=u.max,u.size=c*(.7+Math.random()*.6),u.color.set(n),u.color.offsetHSL(0,0,(Math.random()-.5)*.12)}}float(t,e,i,n,r="#6b5878"){const a=D("div",{class:"float-text",style:{color:r}},t);for(this.layer.append(a),this.texts.push({el:a,pos:new N(e,i,n),age:0,life:1.15});this.texts.length>14;)this.texts.shift().el.remove()}update(t,e){const i=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array;for(let o=0;o<$n;o++){const l=this.particles[o],c=o*3;if(l.life<=0){i[c+1]!==-999&&(i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0);continue}if(l.life=Math.max(0,l.life-t),l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t,l.vy-=5.4*t,l.vx*=1-t*1.6,l.vz*=1-t*1.6,l.y<.02&&(l.y=.02,l.vy*=-.32),l.life<=0){i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0;continue}const h=Math.min(1,l.life/l.max);i[c]=l.x,i[c+1]=l.y,i[c+2]=l.z,n[c]=l.color.r*h,n[c+1]=l.color.g*h,n[c+2]=l.color.b*h}if(this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,!this.texts.length)return;const r=window.innerWidth,a=window.innerHeight;for(let o=this.texts.length-1;o>=0;o--){const l=this.texts[o];if(l.age+=t,l.age>=l.life){l.el.remove(),this.texts.splice(o,1);continue}const c=l.age/l.life;this.v.copy(l.pos),this.v.y+=.55+c*.85,this.v.project(e);const h=(this.v.x*.5+.5)*r,u=(-this.v.y*.5+.5)*a;l.el.style.transform=`translate(-50%, -50%) translate(${h.toFixed(1)}px, ${u.toFixed(1)}px)`,l.el.style.opacity=String(Math.min(1,(1-c)*2.4)),l.el.style.fontSize=`${13-c*1.5}px`}}clear(){for(const t of this.particles)t.life=0,t.y=-999;for(const t of this.texts)t.el.remove();this.texts=[]}}const yh={muted:!1,timeScale:1,fps30:!1},bh=[1,10,60];var it,zu,ku,Gu,Hu,Vu,Wu,Xu,tl,qu,Vr,Yu,$u,el,Ku,Zu,Ju,Qu,il,ju,td,ed,id,nl,sl,nd,sd,rd,je,ad,Te,od;class Gv{constructor(t,e){oi(this,it);this.canvas=t,this.uiRoot=e,this.mode="boot",this.state={day:1,elapsed:120,discovered:[],settings:{...yh}},this.saveStore=new Mv,this.audio=new qx,this.saveData=null,this.hasSave=!1,this.lastSavedAt=0,this.progress=new Fu,this.gathering=null,this.drops=null,this.fx=null,this.panels=null,this.nodeMeshes=[],this.siteMeshes=[],this.keys=new Set,this.paused=!1,this.contextLost=!1,this.target=null,this.last=0,this.acc30=0,this.autosaveAcc=0,this.hudAcc=0,this.frames=0,this.fpsAcc=0,this.fps=0,this.stats={fps:0,calls:0,triangles:0,sceneCalls:0,sceneTriangles:0},this.titleAngle=0,this.lookAt=new N,this.tmpA=new N,this.tmpB=new N,this.raycaster=new Wf,this.tap={x:0,y:0,t:0},this.title=null,this.hud=null,this.modal=null}async start(){this.atlases=await Nv(),$(this,it,zu).call(this),$(this,it,ku).call(this),$(this,it,Gu).call(this),$(this,it,Hu).call(this),$(this,it,Vu).call(this),$(this,it,Wu).call(this),await $(this,it,Xu).call(this),$(this,it,Zu).call(this)}async backToTitle(){this.modal.close(),await this.save(),this.mode="title",this.hasSave=!0,this.hud.hide(),this.hud.joystick.setEnabled(!1),$(this,it,tl).call(this),this.title&&this.title.setProgress(1)}interact(){if(this.mode!=="play"||this.modal.isOpen||this.paused)return;const t=this.target;if(!t){this.hud.toast("가까이에 살펴볼 게 없어요 — 나무나 바위를 두드려 보세요 🪓",1700);return}if(t.isNode){this.gathering.hit(t),$(this,it,je).call(this);return}if(t.kind==="site"){$(this,it,nl).call(this,t);return}$(this,it,sl).call(this,t)}toggleMute(){return this.state.settings.muted=!this.state.settings.muted,this.audio.setMuted(this.state.settings.muted),this.hud.setMuted(this.state.settings.muted),this.state.settings.muted}openPause(){if(this.mode!=="play"||this.modal.isOpen)return;const t=this.state.settings,e=Or(this.state.elapsed),i=D("button",{class:`switch ${t.muted?"on":""}`,type:"button","aria-label":"음소거"});i.addEventListener("click",()=>{const h=this.toggleMute();i.classList.toggle("on",h)});const n=[],r=D("div",{class:"seg"});for(const h of bh){const u=D("button",{type:"button",class:t.timeScale===h?"on":""},`${h}×`);u.addEventListener("click",()=>{this.state.settings.timeScale=h;for(const d of n)d.classList.remove("on");u.classList.add("on"),$(this,it,je).call(this)}),n.push(u),r.append(u)}const a=D("button",{class:`switch ${t.fps30?"on":""}`,type:"button","aria-label":"30fps 절전"});a.addEventListener("click",()=>{this.state.settings.fps30=!this.state.settings.fps30,a.classList.toggle("on",this.state.settings.fps30)});const o=(h,u,d)=>D("div",{class:"row"},D("div",{},D("div",{class:"label"},h),D("div",{class:"hint"},u)),d),l=this.lastSavedAt?new Date(this.lastSavedAt).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"}):"아직 없음",c=D("div",{},D("div",{class:"section-label"},"지금 섬"),D("div",{class:"row"},D("div",{},D("div",{class:"label"},`Day ${this.state.day} · ${e.label}`),D("div",{class:"hint"},`도감 ${this.state.discovered.length}/${xn.length} · 고양이 ${this.cats.length}마리`)),D("span",{class:"hint"},rh(this.state.elapsed))),D("div",{class:"section-label"},"설정"),o("음소거","섬의 소리를 끕니다",i),o("시간 배속","20분 하루를 빨리 감아 조명 변화를 확인",r),o("30fps 절전","배터리와 발열을 아껴요",a),D("div",{class:"section-label"},"저장"),D("div",{class:"hint"},`자동 저장 · ${this.saveStore.mode==="idb"?"IndexedDB":"localStorage"} · 마지막 ${l}`));$(this,it,Te).call(this,{title:"잠깐 쉬는 중",subtitle:"모달이 열려 있는 동안 섬의 시간도 멈춰요",body:c,actions:[{label:"계속 걷기",kind:"primary",onClick:()=>this.modal.close()},{label:"타이틀로 돌아가기",kind:"ghost",onClick:()=>this.backToTitle()}],onClose:()=>this.save()})}openQuick(t){if(!(this.mode!=="play"||this.modal.isOpen)){if(t==="codex"){const e=this.state.discovered,i=D("div",{class:"codex-grid"});for(const a of xn){const o=e.includes(a.id),l=D("div",{class:`codex-thumb ${o?"":"locked"}`},o?"":"· ? ·");o&&a.thumb&&$(this,it,od).call(this,l,a.thumb),i.append(D("div",{class:`codex-card ${o?"":"unknown"}`},l,D("div",{class:"name"},o?a.name:"아직 못 찾음"),D("div",{class:"meta"},o?a.flavor:"섬 어딘가에서 돌멩이인 척하고 있어요")))}const n=Math.round(e.length/xn.length*100),r=D("div",{},D("div",{class:"progress-line"},D("i",{style:{width:`${n}%`}})),D("div",{class:"hint"},`발견 ${e.length} / ${xn.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),D("div",{class:"section-label"},"이번 섬의 도감"),i,D("div",{class:"section-label"},"다음 단계"),D("div",{class:"hint"},"시즌 1 도감 40종 전체와 도트 프리뷰는 Phase 3에서 열려요."));$(this,it,Te).call(this,{title:"메타몽 도감",subtitle:"점 눈 두 개만 남은 어설픈 위장들",body:r,actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}if(t==="build"){const e=D("div",{});for(const n of Li){const r=this.progress.building(n.id),a=Br[n.id]||{},o=Object.values(a).reduce((h,u)=>h+u,0),l=Object.entries(a).reduce((h,[u,d])=>h+Math.min(d,r.invested[u]||0),0),c=D("button",{class:`site-item as-button ${r.done?"done":""}`,type:"button",onclick:()=>this.openBuild(n.id)},D("div",{class:"site-ico"},r.done?"✨":n.icon),D("div",{style:{flex:"1"}},D("div",{class:"site-name"},n.name),D("div",{class:"site-meta"},r.done?"복구 완료":`재료 ${l}/${o} 투입`)),D("span",{class:"hint"},r.done?"완료":"복구"));e.append(c)}const i=Li.filter(n=>this.progress.building(n.id).done).length;$(this,it,Te).call(this,{title:"섬 건축",subtitle:`네 곳 중 ${i}곳 복구 완료`,body:D("div",{},e,D("div",{class:"section-label"},"Tip"),D("div",{class:"hint"},"건물 앞에서 바로 복구할 수도 있어요. 공방을 복구하면 창고가 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}if(t==="bag"){this.openBag();return}t==="rank"&&$(this,it,Te).call(this,{title:"생활 랭크",subtitle:"연습 · 0 EXP",body:D("div",{},D("div",{class:"progress-line"},D("i",{style:{width:"8%"}})),D("div",{class:"hint"},"채집 10 EXP · 낮 보너스 15 EXP · 요리/제작 25 EXP"),D("div",{class:"section-label"},"승급 조건"),D("div",{class:"hint"},"연습 → F (50) · F → E (200) · E → D (600)"),D("div",{class:"section-label"},"다음 단계"),D("div",{class:"hint"},"채집·요리·랭크 시스템은 Phase 2에서 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]})}}openBag(){this.mode==="play"&&$(this,it,Te).call(this,this.panels.bag())}openStorage(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 창고가 열려요 🔨",2200);return}$(this,it,Te).call(this,this.panels.storage())}}openBuild(t){this.mode==="play"&&$(this,it,Te).call(this,this.panels.build(t))}openWorkshop(){this.mode==="play"&&$(this,it,Te).call(this,this.panels.workshopMenu())}openMailbox(t=null){this.mode==="play"&&(t&&this.progress.markRead(t),$(this,it,Te).call(this,this.panels.mailbox(t)),$(this,it,je).call(this))}eatBerry(){if(this.mode!=="play")return!1;const t=this.progress.inventory;if(t.count("berry")<=0)return this.audio.sfxDeny(),this.hud.toast("가방에 열매가 없어요 🍓 — 나무 밑을 살펴보세요",2e3),!1;if(this.progress.stamina>=ei.max)return this.hud.toast("기력이 이미 가득해요 💪",1600),!1;t.take("berry",1),this.progress.restStamina(ei.eat),this.audio.sfxEat();const e=this.player.position;return this.fx&&this.fx.float(`+${ei.eat} 기력`,e.x,e.y+1.7,e.z,"#6f9450"),this.hud.toast(`열매를 먹었어요 — 기력 +${ei.eat}`,1800),$(this,it,je).call(this),this.save(),this.modal.isOpen&&$(this,it,Te).call(this,this.panels.bag()),!0}moveToStorage(t,e="all"){this.progress.inventory.toStorage(t,e)>0?(this.audio.sfxUi(),this.save()):this.audio.sfxDeny(),$(this,it,Te).call(this,this.panels.storage())}moveFromStorage(t,e="all"){this.progress.inventory.fromStorage(t,e)>0?(this.audio.sfxUi(),this.save()):(this.audio.sfxDeny(),this.hud.toast("가방이 가득 차서 꺼내지 못했어요",1800)),$(this,it,Te).call(this,this.panels.storage())}invest(t){const e=this.progress.building(t),i=Br[t]||{},n=this.progress.inventory;let r=0;for(const[a,o]of Object.entries(i)){const l=o-(e.invested[a]||0);if(l<=0)continue;const c=n.take(a,l);c>0&&(e.invested[a]=(e.invested[a]||0)+c,r+=c)}if(r>0){this.audio.sfxBuild();const a=Li.find(o=>o.id===t);a&&this.fx&&this.fx.burst(a.x,a.y+a.height*.5,a.z,"#ffe3b0",12,{spread:1.6,up:2.2}),this.save(),$(this,it,je).call(this),$(this,it,Te).call(this,this.panels.build(t))}else this.audio.sfxDeny(),this.hud.toast("넣을 재료가 부족해요 — 채집해 올까요? 🪓",2e3)}completeBuild(t){const e=this.progress.building(t),i=Br[t]||{};if(!Object.entries(i).every(([a,o])=>(e.invested[a]||0)>=o)||e.done)return!1;const r=Li.find(a=>a.id===t);return e.done=!0,this.world.scenery.setBuilt(t,!0),this.landmarkLabels.setDone(t,!0),this.audio.sfxFanfare(),r&&this.fx&&(this.fx.burst(r.x,r.y+r.height*.55,r.z,"#ffe6a8",34,{spread:3.2,up:4.4,size:1.3}),this.fx.float("복구 완료!",r.x,r.y+r.height*.9,r.z,"#b2698f")),this.hud.toast(`🎉 ${r?r.name:t} 복구 완료!`,3200),t==="workshop"&&setTimeout(()=>this.hud.toast("공방이 열렸어요 — 창고에 재료를 맡길 수 있어요 📦",3e3),900),this.save(),$(this,it,je).call(this),$(this,it,Te).call(this,this.panels.build(t)),!0}claimGift(t){const e=Jr.find(r=>r.id===t);if(!e||!e.gift||this.progress.isClaimed(t))return!1;const i=this.progress.inventory;let n=0;for(const[r,a]of Object.entries(e.gift)){const o=i.add(r,a);o>0&&(i.storage[r]=(i.storage[r]||0)+o,n+=o)}return this.progress.markClaimed(t),this.progress.markRead(t),this.audio.sfxPickup(),this.hud.toast(n>0?`선물을 받았어요 — 가방이 가득해 ${n}개는 창고에 넣었어요 🎁`:"선물을 받았어요 🎁",2800),this.save(),$(this,it,je).call(this),$(this,it,Te).call(this,this.panels.mailbox(t)),!0}snapshot(){const t=this.progress.toJSON();return t.nodes=this.gathering?this.gathering.toJSON():{},{version:2,savedAt:Date.now(),day:this.state.day,elapsedSeconds:Math.round(this.state.elapsed*100)/100,elapsed:Math.round(this.state.elapsed*100)/100,playerPos:{x:+this.player.position.x.toFixed(3),y:+(this.player.position.y||0).toFixed(3),z:+this.player.position.z.toFixed(3)},player:{x:+this.player.position.x.toFixed(3),z:+this.player.position.z.toFixed(3),yaw:+this.player.yaw.toFixed(3)},discoveredDittos:[...this.state.discovered],discovered:[...this.state.discovered],settings:{...this.state.settings},...t}}async save(){if(this.mode==="boot")return!1;const t=this.snapshot(),e=await this.saveStore.save(t);return this.lastSavedAt=t.savedAt,this.lastSaveOk=e,e&&(this.hasSave=!0),e}}it=new WeakSet,zu=function(){const t=new B_({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=fe,t.toneMapping=ta,t.toneMappingExposure=1.28,t.shadowMap.enabled=!0,t.shadowMap.type=Cs,t.info.autoReset=!1,this.renderer=t,this.camera=new hi(Ai.fov,window.innerWidth/window.innerHeight,.1,900),this.camera.position.set(0,28,48),this.onResize=()=>{const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/Math.max(1,i),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,i,!1),this.post&&this.post.setSize(e,i)},window.addEventListener("resize",this.onResize),window.visualViewport&&window.visualViewport.addEventListener("resize",this.onResize)},ku=function(){this.world=new Hx(this.atlases),this.scene=this.world.scene,this.player=new Yx(_n,this.world.terrain,this.atlases),this.player.colliders=[...this.world.scenery.colliders,...xn.map(t=>({x:t.x,z:t.z,r:Math.max(.34,t.height*.42)})),...lh.map(t=>({x:t.x,z:t.z,r:.3}))],this.scene.add(this.player.group),this.scene.add(this.player.shadow),this.scene.add(this.player.dust),this.cats=lh.map(t=>new Zx(t,this.world.terrain,this.atlases));for(const t of this.cats)this.scene.add(t.group),this.scene.add(t.shadow);this.dittos=xn.map(t=>new tv(t,this.world.terrain,this.atlases));for(const t of this.dittos)this.scene.add(t.group),this.scene.add(t.shadow);this.spriteMaterials=[...this.player.sprites,...this.cats.flatMap(t=>t.sprites),...this.dittos.flatMap(t=>t.sprites),...this.world.scenery.billboards.map(t=>t.material)],this.world.setWeather(Va(this.state.day)),this.lookAt.set(_n.x,this.player.position.y+Ai.lookHeight,_n.z),this.fx=new kv(this.scene,this.uiRoot),this.drops=new zv(this.scene,this.world.terrain),this.gathering=new Fv({scenery:this.world.scenery,progress:this.progress,drops:this.drops,fx:this.fx,audio:this.audio}),this.gathering.hooks={toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPickup:()=>$(this,it,je).call(this)},this.nodeMeshes=this.world.scenery.nodes.map(t=>t.mesh),this.siteMeshes=this.world.scenery.sites.map(t=>t.billboard.mesh)},Gu=function(){this.post=Sh(this.renderer,this.scene,this.camera)},Hu=function(){this.hud=new rv(this.uiRoot,{onAction:()=>this.interact(),onMute:()=>this.toggleMute(),onPause:()=>this.openPause(),onQuick:t=>this.openQuick(t),onMail:()=>this.openMailbox()}),this.hud.hide(),this.modal=new ov(this.uiRoot),this.landmarkLabels=new lv(this.uiRoot,this.world.scenery.sites),this.panels=new cv(this)},Vu=function(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.tap.x=e.clientX,this.tap.y=e.clientY,this.tap.t=performance.now(),this.audio.resume()}),t.addEventListener("pointerup",e=>$(this,it,rd).call(this,e)),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),this.mode==="play"&&!this.modal.isOpen&&((e.code==="KeyE"||e.code==="Space")&&this.interact(),e.code==="Escape"&&this.openPause())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("gesturestart",e=>e.preventDefault())},Wu=function(){document.addEventListener("visibilitychange",()=>{document.hidden?(this.save(),this.audio.suspend()):(this.last=performance.now(),this.audio.resume())}),window.addEventListener("pagehide",()=>this.save()),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.hud.setContextLost(!0),this.last=performance.now()},!1),this.canvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.hud.setContextLost(!1);try{this.post&&this.post.dispose()}catch{}this.post=Sh(this.renderer,this.scene,this.camera),this.post.setSize(window.innerWidth,window.innerHeight);const t=fu();this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of n)r&&r.isMeshToonMaterial&&(r.gradientMap=t,r.needsUpdate=!0)});const e=this.world.sunLight.shadow;e.map&&e.map.dispose(),e.map=null,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of n)if(r){r.needsUpdate=!0;for(const a of["map","alphaMap","gradientMap"])r[a]&&(r[a].needsUpdate=!0)}}),this.last=performance.now()},!1)},Xu=async function(){const t=await this.saveStore.load();t&&typeof t=="object"&&(this.saveData=t,this.hasSave=!0),$(this,it,tl).call(this),this.mode="title",$(this,it,il).call(this,.016);const e=performance.now(),i=()=>{const n=Math.min(1,(performance.now()-e)/720);this.title&&this.title.setProgress(n),n<1&&requestAnimationFrame(i)};requestAnimationFrame(i)},tl=function(){this.title&&this.title.destroy(),this.title=new av(this.uiRoot,{hasSave:this.hasSave,onContinue:()=>$(this,it,Vr).call(this,!0),onNew:()=>$(this,it,qu).call(this)})},qu=function(){if(this.title&&(this.title.busy=!1),!this.hasSave){$(this,it,Vr).call(this,!1);return}this.modal.open({title:"새 섬을 열까요?",subtitle:"지금 저장된 섬은 사라져요",body:"저장된 Day·플레이 위치·도감 기록이 지워지고 Day 1 아침부터 다시 시작해요.",actions:[{label:"그대로 둘게요",kind:"ghost",onClick:()=>this.modal.close()},{label:"새로 시작",kind:"primary",onClick:async()=>{await this.saveStore.clear(),this.hasSave=!1,this.saveData=null,this.modal.close(),$(this,it,Vr).call(this,!1)}}],onClose:()=>{this.title&&(this.title.busy=!1,this.title.hint.textContent="저장된 섬이 있어요 — 이어서 걸어볼까요?")}})},Vr=function(t){t&&this.saveData?$(this,it,$u).call(this,this.saveData):$(this,it,Yu).call(this),this.mode="play",this.paused=!1,this.title&&this.title.hide(),this.hud.show(),this.hud.joystick.setEnabled(!0),this.hud.setMuted(this.state.settings.muted),this.audio.start(),this.audio.setMuted(this.state.settings.muted),this.audio.setPhase(Or(this.state.elapsed).id),this.world.setWeather(Va(this.state.day)),$(this,it,Ku).call(this),$(this,it,je).call(this),this.hud.toast(t?`Day ${this.state.day} — 다시 만나서 반가워요 🌿`:"Day 1 — 섬에 도착했어요 🌿",2800),this.autosaveAcc=0,this.save()},Yu=function(){this.state.day=1,this.state.elapsed=120,this.state.discovered=[],this.state.settings={...yh};for(const t of this.dittos)t.discovered=!1;this.player.teleport(_n.x,_n.z),this.player.setYaw(Math.PI),this.progress.reset(),this.gathering&&(this.gathering.applySaved({}),this.gathering.hooks.toast=(t,e)=>this.hud&&this.hud.toast(t,e)),this.fx&&this.fx.clear(),$(this,it,el).call(this)},$u=function(t){const e=Number(t.day);this.state.day=Number.isFinite(e)&&e>=1?Math.min(3650,Math.floor(e)):1;const i=Number(t.elapsed);this.state.elapsed=Number.isFinite(i)?Math.max(0,Math.min(_e-.01,i)):60,this.state.discovered=Array.isArray(t.discovered)?t.discovered.filter(l=>typeof l=="string"):[];const n=t.settings&&typeof t.settings=="object"?t.settings:{};this.state.settings={muted:!!n.muted,timeScale:bh.includes(Number(n.timeScale))?Number(n.timeScale):1,fps30:!!n.fps30};const r=Number(t.player&&t.player.x),a=Number(t.player&&t.player.z);Number.isFinite(r)&&Number.isFinite(a)&&this.world.terrain.isWalkable(r,a)?this.player.teleport(r,a):this.player.teleport(_n.x,_n.z);const o=Number(t.player&&t.player.yaw);Number.isFinite(o)&&this.player.setYaw(o);for(const l of this.dittos)l.discovered=this.state.discovered.includes(l.id);this.progress.load(t),this.gathering&&this.gathering.applySaved(t.nodes||{}),$(this,it,el).call(this)},el=function(){for(const t of Li){const e=!!this.progress.building(t.id).done;this.world.scenery.setBuilt(t.id,e),this.landmarkLabels&&this.landmarkLabels.setDone(t.id,e)}},Ku=function(){const t=this.player.position;this.camera.position.set(t.x+Ai.offset.x,t.y+Ai.offset.y,t.z+Ai.offset.z),this.lookAt.set(t.x,t.y+Ai.lookHeight,t.z),this.camera.lookAt(this.lookAt)},Zu=function(){this.last=performance.now();const t=e=>{this.rafId=requestAnimationFrame(t);let i=(e-this.last)/1e3;if(this.last=e,(!Number.isFinite(i)||i<=0)&&(i=1/60),i=Math.min(i,.05),this.state.settings.fps30){if(this.acc30+=i,this.acc30<1/32)return;i=Math.min(this.acc30,.06),this.acc30=0}$(this,it,Ju).call(this,i)};this.rafId=requestAnimationFrame(t)},Ju=function(t){const e=this.mode==="play"&&!this.paused&&!this.modal.isOpen&&!document.hidden,i=e?t*this.state.settings.timeScale:0;e&&(this.state.elapsed+=t*this.state.settings.timeScale,this.state.elapsed>=_e&&(this.state.elapsed-=_e,this.state.day+=1,this.world.setWeather(Va(this.state.day)),this.hud.toast(`Day ${this.state.day} — 새로운 하루가 시작됐어요`,3e3)));const n=$(this,it,td).call(this,e);this.player.update(t,n,this.world.terrain,this.camera);for(const r of this.cats)r.update(t,this.camera);for(const r of this.dittos)r.update(t,this.player.position,this.camera);this.gathering&&this.gathering.update(t,i,this.player.position,e),this.fx&&this.fx.update(t,this.camera);for(const r of this.spriteMaterials)r.color.copy(this.world.spriteLight);if(this.mode==="title"?$(this,it,il).call(this,t):$(this,it,ju).call(this,t),this.world.update(t,this.state.elapsed,this.camera,this.player.position),this.landmarkLabels.update(this.camera,this.mode==="play"),this.mode==="play"&&($(this,it,ed).call(this),this.hudAcc+=t,this.hudAcc>.14&&(this.hudAcc=0,$(this,it,je).call(this))),e){this.autosaveAcc+=t;const r=this.state.settings.timeScale>1?Math.max(2,Ue.intervalSeconds):Ue.intervalSeconds;this.autosaveAcc>=r&&(this.autosaveAcc=0,this.save())}this.contextLost||(this.renderer.info.reset(),this.post.render()),$(this,it,Qu).call(this,t)},Qu=function(t){if(this.frames+=1,this.fpsAcc+=t,this.fpsAcc>=.5){this.fps=Math.round(this.frames/this.fpsAcc);const e=this.renderer.info.render,i=this.post?this.post.sceneStats:e;this.stats.fps=this.fps,this.stats.calls=e.calls,this.stats.triangles=e.triangles,this.stats.sceneCalls=i.calls,this.stats.sceneTriangles=i.triangles,this.frames=0,this.fpsAcc=0}},il=function(t){this.titleAngle+=t*.09;const e=40,i=Math.cos(this.titleAngle)*e,n=Math.sin(this.titleAngle)*e,r=16+Math.sin(this.titleAngle*.8)*.9;this.camera.position.set(i,r,n),this.camera.lookAt(0,1,0)},ju=function(t){const e=this.player.position,i=this.tmpA.set(e.x+Ai.offset.x,e.y+Ai.offset.y,e.z+Ai.offset.z),n=1-Math.exp(-6.5*t);this.camera.position.lerp(i,n);const r=this.world.terrain.sampleHeight(this.camera.position.x,this.camera.position.z),a=Math.max(r,0)+1.3;this.camera.position.y<a&&(this.camera.position.y=a);const o=this.tmpB.set(e.x,e.y+Ai.lookHeight,e.z);this.lookAt.lerp(o,Math.min(1,t*9)),this.camera.lookAt(this.lookAt)},td=function(t){if(!t)return{x:0,z:0};const e=this.hud.joystick.vector;let i=e.x,n=e.y,r=0,a=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(a-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(r-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(r+=1);const o=Math.hypot(r,a);return o>0&&(r/=o,a/=o,Math.hypot(r,a)>Math.hypot(i,n)&&(i=r,n=a)),{x:i,z:n}},ed=function(){let t=null,e=1/0;const i=this.player.position;for(const a of this.dittos){const o=a.distanceTo(i);a.setNear(o<3.8),o<=tn.dittoRange&&o<e&&(t=a,e=o)}for(const a of this.cats){const o=a.distanceTo(i);o<=tn.catRange&&o<e&&(t=a,e=o)}const n=this.gathering.nearest(i,tn.nodeRange);if(n){const a=Math.hypot(n.x-i.x,n.z-i.z);a<e&&(t=n,e=a)}const r=$(this,it,id).call(this,i,tn.siteRange);if(r){const a=Math.hypot(r.x-i.x,r.z-i.z);a<e&&(t=r,e=a)}this.target=t},id=function(t,e){let i=null,n=e;for(const r of this.world.scenery.sites){const a=Math.hypot(r.x-t.x,r.z-t.z);a<n&&(i=r,n=a)}return i},nl=function(t){t.id==="workshop"?$(this,it,Te).call(this,this.panels.workshopMenu()):$(this,it,Te).call(this,this.panels.build(t.id))},sl=function(t){t.kind==="ditto"?$(this,it,nd).call(this,t):t.kind==="cat"&&$(this,it,sd).call(this,t)},nd=function(t){t.interact(),this.state.discovered.includes(t.id)?this.hud.toast(`${t.name} — "·‿·" 이미 도감에 있어요`,2e3):(t.markDiscovered(),this.state.discovered.push(t.id),this.hud.toast(`도감 등록! ${t.name} ·‿· (${this.state.discovered.length}/${xn.length})`,3200),this.save())},sd=function(t){t.pet(),this.hud.toast(`${t.name}가 기분 좋아 보여요 ♥`,1800)},rd=function(t){if(this.mode!=="play"||this.modal.isOpen||performance.now()-this.tap.t>520||Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>14)return;const e=new At(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight*2-1));this.raycaster.setFromCamera(e,this.camera);const i=[...this.dittos.map(h=>h.hitMesh),...this.cats.map(h=>h.body),...this.nodeMeshes,...this.siteMeshes,...this.drops.rayTargets()],n=this.raycaster.intersectObjects(i,!0);if(!n.length)return;let r=n[0].object,a=null;for(;r&&!a;){const h=r.userData||{};h.drop?a={kind:"drop",drop:h.drop}:h.node?a={kind:"node",node:h.node}:h.site?a={kind:"site",site:h.site}:h.actor&&(a={kind:"actor",actor:h.actor}),r=r.parent}if(!a)return;const o=this.player.position,l=(h,u)=>Math.hypot(h-o.x,u-o.z);if(a.kind==="drop"){if(l(a.drop.x,a.drop.z)>tn.nodeRange+1.6){this.hud.toast("조금 더 가까이 가서 주울까요?",1600);return}this.gathering.pickup(a.drop)&&this.drops.remove(a.drop),$(this,it,je).call(this);return}if(a.kind==="node"){if(l(a.node.x,a.node.z)>tn.nodeRange+.9){this.hud.toast("조금 더 가까이 가서 두드려 볼까요?",1600);return}this.gathering.hit(a.node),$(this,it,je).call(this);return}if(a.kind==="site"){if(l(a.site.x,a.site.z)>tn.siteRange+1.6){this.hud.toast("조금 더 가까이 가서 살펴볼까요?",1600);return}$(this,it,nl).call(this,a.site);return}const c=a.actor;if(c.distanceTo(o)>tn.tapRange){this.hud.toast("조금 더 가까이 가서 볼까요?",1600);return}$(this,it,sl).call(this,c)},je=function(){const t=Or(this.state.elapsed),e=this.world.weather;this.hud.setTime({icon:t.icon,label:t.label,weatherIcon:e.icon,weatherLabel:e.label,day:this.state.day,clock:rh(this.state.elapsed),speed:this.state.settings.timeScale}),this.hud.setStamina(this.progress.stamina,ei.max),this.hud.setMail($(this,it,ad).call(this)),this.hud.setBag(this.progress.inventory.usedSlots(),ke.slots);const i=this.target;if(i&&i.kind==="ditto")this.hud.setAction({active:!0,icon:i.discovered?"👀":"🔍",label:i.discovered?"다시 보기":"살펴보기"});else if(i&&i.kind==="cat")this.hud.setAction({active:!0,icon:"🤲",label:"쓰다듬기"});else if(i&&i.isNode){const n=ra[i.kind];this.hud.setAction({active:!0,icon:n.icon,label:`${n.verb} ${i.hitsLeft}/${i.hitsNeeded}`})}else i&&i.kind==="site"?this.hud.setAction({active:!0,icon:i.id==="workshop"?"🔨":i.icon,label:i.id==="workshop"?"공방 열기":"복구 보기"}):this.hud.setAction({active:!1,icon:"✋",label:"둘러보기"})},ad=function(){let t=0;for(const e of Jr){const i=!this.progress.isRead(e.id),n=!!e.gift&&!this.progress.isClaimed(e.id);(i||n)&&(t+=1)}return t},Te=function(t){this.paused=!0,this.hud.joystick.reset();const e=t.onClose;this.modal.open({...t,onClose:()=>{this.paused=!1,e&&e()}})},od=function(t,e){const i=this.atlases.get(e.set);if(!i)return;const n=i.cols,r=i.rows;t.style.backgroundImage=`url("${new URL(`sprites/${e.set}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n*100}% ${r*100}%`,t.style.backgroundPosition=`${(e.col-1)/Math.max(1,n-1)*100}% ${(e.row-1)/Math.max(1,r-1)*100}%`};const Hv=document.getElementById("scene"),Vv=document.getElementById("ui"),Rs=new Gv(Hv,Vv);window.__metamong={game:Rs,get audio(){return Rs.audio},life(){const s=Rs,t=s.progress.inventory;return{stamina:Math.round(s.progress.stamina*10)/10,bagSlots:t.usedSlots(),bag:t.toJSON().bag,storage:{...t.storage},buildings:JSON.parse(JSON.stringify(s.progress.buildings)),mailbox:{read:[...s.progress.mailbox.read],claimed:[...s.progress.mailbox.claimed]},harvested:s.gathering?Object.keys(s.gathering.toJSON()).length:0,drops:s.drops?s.drops.items.map(e=>`${e.itemId}x${e.count}`):[]}},stats(){const s=Rs;return{mode:s.mode,day:s.state.day,elapsed:Math.round(s.state.elapsed*100)/100,phase:Or(s.state.elapsed).id,paused:s.paused,modalOpen:!!(s.modal&&s.modal.isOpen),contextLost:s.contextLost,fps:s.stats.fps,drawCalls:s.stats.calls,triangles:s.stats.triangles,sceneDrawCalls:s.stats.sceneCalls,sceneTriangles:s.stats.sceneTriangles,discovered:[...s.state.discovered],saveMode:s.saveStore.mode,hasSave:s.hasSave,stamina:Math.round(s.progress.stamina*10)/10,bagSlots:s.progress.inventory.usedSlots(),settings:{...s.state.settings},player:s.player?{x:+s.player.position.x.toFixed(2),y:+s.player.position.y.toFixed(2),z:+s.player.position.z.toFixed(2),yaw:+s.player.yaw.toFixed(3),facing:s.player.facing,flipX:!!s.player.flip,frame:s.player.frameName}:null}}};Rs.start().catch(s=>{console.error("게임 시작 실패",s);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#fff6fa;color:#6b5878;font-family:system-ui,sans-serif;font-size:14px;text-align:center;padding:24px;z-index:999;",t.textContent="섬을 여는 중 문제가 생겼어요. 새로고침 해 주세요: "+String(s&&s.message?s.message:s),document.body.appendChild(t)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(new URL("sw.js",document.baseURI)).catch(()=>{})});
