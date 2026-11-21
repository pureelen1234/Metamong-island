var Vc=s=>{throw TypeError(s)};var bf=(s,t,e)=>t.has(s)||Vc("Cannot "+e);var ni=(s,t,e)=>t.has(s)?Vc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var P=(s,t,e)=>(bf(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="187",yf=0,Wc=1,Ef=2,er=1,Tf=2,Ks=3,Tn=0,He=1,zi=2,kn=0,ir=1,sr=2,Xc=3,$c=4,wf=5,ds=100,Af=101,Rf=102,Cf=103,Pf=104,Lf=200,Df=201,Nf=202,If=203,Su=204,bu=205,Uf=206,Ff=207,Of=208,Bf=209,kf=210,zf=211,Gf=212,Hf=213,Vf=214,ko=0,zo=1,Go=2,rr=3,Ho=4,Vo=5,Wo=6,Xo=7,yu=0,Wf=1,Xf=2,ln=0,Ql=1,jl=2,tc=3,ec=4,ic=5,nc=6,Ua=7,Eu=300,Ms=301,ar=302,Xa=303,$a=304,or=1e3,Mi=1001,$o=1002,oe=1003,$f=1004,Sr=1005,Je=1006,qa=1007,an=1008,li=1009,Tu=1010,wu=1011,lr=1012,sc=1013,Vi=1014,Ci=1015,je=1016,rc=1017,ac=1018,Ss=1020,Au=35902,Ru=35899,Cu=1021,Pu=1022,Pi=1023,wn=1026,yn=1027,oc=1028,lc=1029,zn=1030,cc=1031,hc=1033,la=33776,ca=33777,ha=33778,ua=33779,qo=35840,Yo=35841,Ko=35842,Zo=35843,Jo=36196,Qo=37492,jo=37496,tl=37488,el=37489,Sa=37490,il=37491,nl=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,vl=36494,xl=36495,Ml=36283,Sl=36284,ba=36285,bl=36286,qf=3200,yl=0,Yf=1,Sn="",xe="srgb",ya="srgb-linear",Ea="linear",jt="srgb",Ya=7680,Kf=519,Zf=512,Jf=513,Qf=514,Lu=515,jf=516,tp=517,Du=518,Nu=519,Iu=35044,qc="300 es",Li=2e3,cr=2001;function ep(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ip(){const s=hr("canvas");return s.style.display="block",s}const Yc={};function Ta(...s){const t="THREE."+s.shift();console.log(t,...s)}function Uu(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=Uu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Zt(...s){s=Uu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function da(...s){const t=s.join(" ");t in Yc||(Yc[t]=!0,It(...s))}function np(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const sp={[ko]:ko,[Go]:Wo,[Ho]:Ho,[rr]:Vo,[zo]:zo,[Wo]:Go,[Xo]:Xo,[Vo]:rr};class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,El=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function rp(s,t){return(s%t+t)%t}function Za(s,t,e){return(1-e)*s+e*t}function ap(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fa(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fu(s,t){if(t.constructor===Float32Array)return s;const e=Fa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Ou(s,t){if(t.constructor===Float32Array)return s;const e=Fa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Rc=class Rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;let At=Rc;class Wn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(u!==S||l!==d||c!==f||h!==_){let p=l*d+c*f+h*_+u*S;p<0&&(d=-d,f=-f,_=-_,S=-S,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),R=Math.sin(y);m=Math.sin(m*y)/R,o=Math.sin(o*y)/R,l=l*m+d*o,c=c*m+f*o,h=h*m+_*o,u=u*m+S*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+_*o,u=u*m+S*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cc=class Cc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;let I=Cc;const Ja=new I,Kc=new Wn,Pc=class Pc{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],S=n[0],p=n[3],m=n[6],y=n[1],R=n[4],T=n[7],A=n[2],w=n[5],g=n[8];return r[0]=a*S+o*y+l*A,r[3]=a*p+o*R+l*w,r[6]=a*m+o*T+l*g,r[1]=c*S+h*y+u*A,r[4]=c*p+h*R+u*w,r[7]=c*m+h*T+u*g,r[2]=d*S+f*y+_*A,r[5]=d*p+f*R+_*w,r[8]=d*m+f*T+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=u*S,t[1]=(n*c-h*i)*S,t[2]=(o*i-n*a)*S,t[3]=d*S,t[4]=(h*e-n*l)*S,t[5]=(n*r-o*e)*S,t[6]=f*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;let Ft=Pc;const Qa=new Ft,Zc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){const s={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(n.r=cn(n.r),n.g=cn(n.g),n.b=cn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(n.r=_s(n.r),n.g=_s(n.g),n.b=_s(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Sn?Ea:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ya]:{primaries:t,whitePoint:i,transfer:Ea,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),s}const Yt=op();function cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qn;class lp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qn===void 0&&(qn=hr("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=qn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=cn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cn(e[i]/255)*255):e[i]=cn(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cp=0;class uc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ja(n[a].image)):r.push(ja(n[a]))}else r=ja(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let hp=0;const to=new I;class Fe extends Hn{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=Mi,n=Mi,r=Je,a=an,o=Pi,l=li,c=Fe.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Vn(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Eu;Fe.DEFAULT_ANISOTROPY=1;const Lc=class Lc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,T=(f+1)/2,A=(m+1)/2,w=(h+d)/4,g=(u+S)/4,b=(_+p)/4;return R>T&&R>A?R<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(R),n=w/i,r=g/i):T>A?T<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(T),i=w/n,r=b/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=g/r,n=b/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-S)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lc.prototype.isVector4=!0;let fe=Lc;class up extends Hn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Fe({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new uc(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends up{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bu extends Fe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oe,this.minFilter=oe,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dp extends Fe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oe,this.minFilter=oe,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Na=class Na{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,_,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,_,S,p)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,_,S,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),a=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,S=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-S*c,e[9]=-o*l,e[2]=S-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,S=c*u;e[0]=d+S*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=S+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,S=c*u;e[0]=d-S*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=S-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,S=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+S,e[1]=l*u,e[5]=S*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=S-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-S*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+S,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=S*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,pp)}lookAt(t,e,i){const n=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),fn.crossVectors(i,ri),fn.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),fn.crossVectors(i,ri)),fn.normalize(),br.crossVectors(ri,fn),n[0]=fn.x,n[4]=br.x,n[8]=ri.x,n[1]=fn.y,n[5]=br.y,n[9]=ri.y,n[2]=fn.z,n[6]=br.z,n[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],S=i[6],p=i[10],m=i[14],y=i[3],R=i[7],T=i[11],A=i[15],w=n[0],g=n[4],b=n[8],O=n[12],L=n[1],U=n[5],B=n[9],$=n[13],D=n[2],W=n[6],Z=n[10],V=n[14],nt=n[3],Y=n[7],et=n[11],it=n[15];return r[0]=a*w+o*L+l*D+c*nt,r[4]=a*g+o*U+l*W+c*Y,r[8]=a*b+o*B+l*Z+c*et,r[12]=a*O+o*$+l*V+c*it,r[1]=h*w+u*L+d*D+f*nt,r[5]=h*g+u*U+d*W+f*Y,r[9]=h*b+u*B+d*Z+f*et,r[13]=h*O+u*$+d*V+f*it,r[2]=_*w+S*L+p*D+m*nt,r[6]=_*g+S*U+p*W+m*Y,r[10]=_*b+S*B+p*Z+m*et,r[14]=_*O+S*$+p*V+m*it,r[3]=y*w+R*L+T*D+A*nt,r[7]=y*g+R*U+T*W+A*Y,r[11]=y*b+R*B+T*Z+A*et,r[15]=y*O+R*$+T*V+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],S=t[7],p=t[11],m=t[15],y=l*f-c*d,R=o*f-c*u,T=o*d-l*u,A=a*f-c*h,w=a*d-l*h,g=a*u-o*h;return e*(S*y-p*R+m*T)-i*(_*y-p*A+m*w)+n*(_*R-S*A+m*g)-r*(_*T-S*w+p*g)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],S=t[13],p=t[14],m=t[15],y=e*o-i*a,R=e*l-n*a,T=e*c-r*a,A=i*l-n*o,w=i*c-r*o,g=n*c-r*l,b=h*S-u*_,O=h*p-d*_,L=h*m-f*_,U=u*p-d*S,B=u*m-f*S,$=d*m-f*p,D=y*$-R*B+T*U+A*L-w*O+g*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/D;return t[0]=(o*$-l*B+c*U)*W,t[1]=(n*B-i*$-r*U)*W,t[2]=(S*g-p*w+m*A)*W,t[3]=(d*w-u*g-f*A)*W,t[4]=(l*L-a*$-c*O)*W,t[5]=(e*$-n*L+r*O)*W,t[6]=(p*T-_*g-m*R)*W,t[7]=(h*g-d*T+f*R)*W,t[8]=(a*B-o*L+c*b)*W,t[9]=(i*L-e*B-r*b)*W,t[10]=(_*w-S*T+m*y)*W,t[11]=(u*T-h*w-f*y)*W,t[12]=(o*O-a*U-l*b)*W,t[13]=(e*U-i*O+n*b)*W,t[14]=(S*R-_*A-p*y)*W,t[15]=(h*A-u*R+d*y)*W,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,S=a*h,p=a*u,m=o*u,y=l*c,R=l*h,T=l*u,A=i.x,w=i.y,g=i.z;return n[0]=(1-(S+m))*A,n[1]=(f+T)*A,n[2]=(_-R)*A,n[3]=0,n[4]=(f-T)*w,n[5]=(1-(d+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(_+R)*g,n[9]=(p-y)*g,n[10]=(1-(d+S))*g,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Yn.set(n[0],n[1],n[2]).length();const o=Yn.set(n[4],n[5],n[6]).length(),l=Yn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ei.copy(this);const c=1/a,h=1/o,u=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,e.setFromRotationMatrix(Ei),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Li,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===Li)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===cr)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Li,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===Li)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===cr)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Na.prototype.isMatrix4=!0;let Jt=Na;const Yn=new I,Ei=new Jt,fp=new I(0,0,0),pp=new I(1,1,1),fn=new I,br=new I,ri=new I,Qc=new Jt,jc=new Wn;class Gn{constructor(t=0,e=0,i=0,n=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mp=0;const th=new I,Kn=new Wn,qi=new Jt,yr=new I,Ns=new I,gp=new I,_p=new Wn,eh=new I(1,0,0),ih=new I(0,1,0),nh=new I(0,0,1),sh={type:"added"},vp={type:"removed"},Zn={type:"childadded",child:null},eo={type:"childremoved",child:null};class Me extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new I,e=new Gn,i=new Wn,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ft}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ns,yr,this.up):qi.lookAt(yr,Ns,this.up),this.quaternion.setFromRotationMatrix(qi),n&&(qi.extractRotation(n.matrixWorld),Kn.setFromRotationMatrix(qi),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Me.DEFAULT_UP=new I(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ci extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,i),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ci;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function no(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=rp(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=no(a,r,t+1/3),this.g=no(a,r,t),this.b=no(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=xe){function i(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const i=ku[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Yt.workingToColorSpace(ze.copy(this),t),Math.round(Wt(ze.r*255,0,255))*65536+Math.round(Wt(ze.g*255,0,255))*256+Math.round(Wt(ze.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(ze.copy(this),e);const i=ze.r,n=ze.g,r=ze.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=xe){Yt.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,n=ze.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(Er);const i=Za(pn.h,Er.h,e),n=Za(pn.s,Er.s,e),r=Za(pn.l,Er.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new pt;pt.NAMES=ku;class fc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mp extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ti=new I,Yi=new I,so=new I,Ki=new I,Jn=new I,Qn=new I,rh=new I,ro=new I,ao=new I,oo=new I,lo=new fe,co=new fe,ho=new fe;class xi{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ti.subVectors(t,e),n.cross(Ti);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ti.subVectors(n,e),Yi.subVectors(i,e),so.subVectors(t,e);const a=Ti.dot(Ti),o=Ti.dot(Yi),l=Ti.dot(so),c=Yi.dot(Yi),h=Yi.dot(so),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return lo.setScalar(0),co.setScalar(0),ho.setScalar(0),lo.fromBufferAttribute(t,e),co.fromBufferAttribute(t,i),ho.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(lo,r.x),a.addScaledVector(co,r.y),a.addScaledVector(ho,r.z),a}static isFrontFacing(t,e,i,n){return Ti.subVectors(i,e),Yi.subVectors(t,e),Ti.cross(Yi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Ti.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return xi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Jn.subVectors(n,i),Qn.subVectors(r,i),ro.subVectors(t,i);const l=Jn.dot(ro),c=Qn.dot(ro);if(l<=0&&c<=0)return e.copy(i);ao.subVectors(t,n);const h=Jn.dot(ao),u=Qn.dot(ao);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Jn,a);oo.subVectors(t,r);const f=Jn.dot(oo),_=Qn.dot(oo);if(_>=0&&f<=_)return e.copy(r);const S=f*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Qn,o);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return rh.subVectors(r,n),o=(u-h)/(u-h+(f-_)),e.copy(n).addScaledVector(rh,o);const m=1/(p+S+d);return a=S*m,o=d*m,e.copy(i).addScaledVector(Jn,a).addScaledVector(Qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Xn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wi):wi.fromBufferAttribute(r,a),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),wr.subVectors(this.max,Is),jn.subVectors(t.a,Is),ts.subVectors(t.b,Is),es.subVectors(t.c,Is),mn.subVectors(ts,jn),gn.subVectors(es,ts),Ln.subVectors(jn,es);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!uo(e,jn,ts,es,wr)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,jn,ts,es,wr))?!1:(Ar.crossVectors(mn,gn),e=[Ar.x,Ar.y,Ar.z],uo(e,jn,ts,es,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new I,new I,new I,new I,new I,new I,new I,new I],wi=new I,Tr=new Xn,jn=new I,ts=new I,es=new I,mn=new I,gn=new I,Ln=new I,Is=new I,wr=new I,Ar=new I,Dn=new I;function uo(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Dn.fromArray(s,r);const o=n.x*Math.abs(Dn.x)+n.y*Math.abs(Dn.y)+n.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ve=new I,Rr=new At;let Sp=0;class ei extends Hn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=Ci,this.version=0,this._normalizationScale=t!==void 0?Fa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Fu(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ou(t,this.array)}}class zu extends ei{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gu extends ei{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class he extends ei{constructor(t,e,i){super(new Float32Array(t),e,i)}}const bp=new Xn,Us=new I,fo=new I;class $n{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bp.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Us,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(fo)),this.expandByPoint(Us.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let yp=0;const gi=new Jt,po=new Me,is=new I,ai=new Xn,Fs=new Xn,Pe=new I;class we extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ep(t)?Gu:zu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(ai.min,Fs.min),ai.expandByPoint(Pe),Pe.addVectors(ai.max,Fs.max),ai.expandByPoint(Pe)):(ai.expandByPoint(Fs.min),ai.expandByPoint(Fs.max))}ai.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Pe.add(is)),n=Math.max(n,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new I,l[O]=new I;const h=new I,u=new I,d=new I,f=new At,_=new At,S=new At,p=new I,m=new I;function y(O,L,U){c[O]=c[L]=c[U]=1,h.fromBufferAttribute(i,O),u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,O),_.fromBufferAttribute(r,L),S.fromBufferAttribute(r,U),u.sub(h),d.sub(h),_.sub(f),S.sub(f);const B=1/(_.x*S.y-S.x*_.y);isFinite(B)&&(p.copy(u).multiplyScalar(S.y).addScaledVector(d,-_.y).multiplyScalar(B),m.copy(d).multiplyScalar(_.x).addScaledVector(u,-S.x).multiplyScalar(B),o[O].add(p),o[L].add(p),o[U].add(p),l[O].add(m),l[L].add(m),l[U].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,L=R.length;O<L;++O){const U=R[O],B=U.start,$=U.count;for(let D=B,W=B+$;D<W;D+=3)y(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const T=new I,A=new I,w=new I,g=new I;function b(O){w.fromBufferAttribute(n,O),g.copy(w);const L=o[O];T.copy(L),T.sub(w.multiplyScalar(w.dot(L))).normalize(),A.crossVectors(g,L);const B=A.dot(l[O])<0?-1:1;a.setXYZW(O,T.x,T.y,T.z,B)}for(let O=0,L=i.count;O<L;++O)c[O]&&b(O);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ei(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),S=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new ei(d,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ep{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=ah(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=ah(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function ah(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Vn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Xe=new I;class wa{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Fa(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ei(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Fu(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ou(t,this.data.array)}}const mo=new I,Tp=new I,wp=new Ft;class Mn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=mo.subVectors(i,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(mo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wp.getNormalMatrix(t),n=this.coplanarPoint(mo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ap=0;class An extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=ir,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=bu,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class on extends An{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Os=new I,ss=new I,rs=new I,as=new At,Bs=new At,Hu=new Jt,Cr=new I,ks=new I,Pr=new I,oh=new At,go=new At,lh=new At;class En extends Me{constructor(t=new on){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ep(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new wa(i,3,0,!1)),ns.setAttribute("uv",new wa(i,2,3,!1))}this.geometry=ns,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Lr(Cr.set(-.5,-.5,0),rs,a,ss,n,r),Lr(ks.set(.5,-.5,0),rs,a,ss,n,r),Lr(Pr.set(.5,.5,0),rs,a,ss,n,r),oh.set(0,0),go.set(1,0),lh.set(1,1);let o=t.ray.intersectTriangle(Cr,ks,Pr,!1,Os);if(o===null&&(Lr(ks.set(-.5,.5,0),rs,a,ss,n,r),go.set(0,1),o=t.ray.intersectTriangle(Cr,Pr,ks,!1,Os),o===null))return;const l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:xi.getInterpolation(Os,Cr,ks,Pr,oh,go,lh,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Lr(s,t,e,i,n,r){as.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Bs.x=r*as.x-n*as.y,Bs.y=n*as.x+r*as.y):Bs.copy(as),s.copy(t),s.x+=Bs.x,s.y+=Bs.y,s.applyMatrix4(Hu)}const Ji=new I,_o=new I,Dr=new I,Nr=new I;class Oa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){_o.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Nr.copy(this.origin).sub(_o);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Dr),o=Nr.dot(this.direction),l=-Nr.dot(Dr),c=Nr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const S=1/h;u*=S,d*=S,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(_o).addScaledVector(Dr,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ji.subVectors(t.center,this.origin);const i=Ji.dot(this.direction),n=Ji.dot(Ji)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,p=e.z-a.z,m=i.x-a.x,y=i.y-a.y,R=i.z-a.z,T=Math.abs(l),A=Math.abs(c),w=Math.abs(h);let g,b,O,L,U,B,$,D,W,Z,V,nt;if(T>=A&&T>=w?(O=l,B=u,W=_,nt=m,l>=0?(g=c,b=h,L=d,U=f,$=S,D=p,Z=y,V=R):(g=h,b=c,L=f,U=d,$=p,D=S,Z=R,V=y)):A>=w?(O=c,B=d,W=S,nt=y,c>=0?(g=h,b=l,L=f,U=u,$=p,D=_,Z=R,V=m):(g=l,b=h,L=u,U=f,$=_,D=p,Z=m,V=R)):(O=h,B=f,W=p,nt=R,h>=0?(g=l,b=c,L=u,U=d,$=_,D=S,Z=m,V=y):(g=c,b=l,L=d,U=u,$=S,D=_,Z=y,V=m)),O===0)return null;const Y=g/O,et=b/O,it=1/O,Tt=L-Y*B,Ot=U-et*B,Q=$-Y*W,vt=D-et*W,bt=Z-Y*nt,Lt=V-et*nt,xt=bt*vt-Lt*Q,kt=Tt*Lt-Ot*bt,ge=Q*Ot-vt*Tt;if(n){if(xt<0||kt<0||ge<0)return null}else if((xt<0||kt<0||ge<0)&&(xt>0||kt>0||ge>0))return null;const Nt=xt+kt+ge;if(Nt===0)return null;const te=it*(xt*B+kt*W+ge*nt);return(Nt>0?te<0:te>0)?null:this.at(te/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hi extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ch=new Jt,Nn=new Oa,Ir=new $n,hh=new I,Ur=new I,Fr=new I,Or=new I,vo=new I,Br=new I,uh=new I,kr=new I;class me extends Me{constructor(t=new we,e=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(vo.fromBufferAttribute(u,t),a?Br.addScaledVector(vo,h):Br.addScaledVector(vo.sub(e),h))}e.add(Br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(Ir.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Ir,hh)===null||Nn.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,A=R;T<A;T+=3){const w=o.getX(T),g=o.getX(T+1),b=o.getX(T+2);n=zr(this,m,t,i,c,h,u,w,g,b),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){const y=o.getX(p),R=o.getX(p+1),T=o.getX(p+2);n=zr(this,a,t,i,c,h,u,y,R,T),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,A=R;T<A;T+=3){const w=T,g=T+1,b=T+2;n=zr(this,m,t,i,c,h,u,w,g,b),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){const y=p,R=p+1,T=p+2;n=zr(this,a,t,i,c,h,u,y,R,T),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function Rp(s,t,e,i,n,r,a,o){let l;if(t.side===He?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Tn,o),l===null)return null;kr.copy(o),kr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(kr);return c<e.near||c>e.far?null:{distance:c,point:kr.clone(),object:s}}function zr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ur),s.getVertexPosition(l,Fr),s.getVertexPosition(c,Or);const h=Rp(s,t,e,i,Ur,Fr,Or,uh);if(h){const u=new I;xi.getBarycoord(uh,Ur,Fr,Or,u),n&&(h.uv=xi.getInterpolatedAttribute(n,o,l,c,u,new At)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};xi.getNormal(Ur,Fr,Or,d.normal),h.face=d,h.barycoord=u}return h}class pc extends Fe{constructor(t=null,e=1,i=1,n,r,a,o,l,c=oe,h=oe,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends ei{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new Jt,fh=new Jt,Gr=[],ph=new Xn,Cp=new Jt,zs=new me,Gs=new $n;class Pp extends me{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Cp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,os),ph.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,os),Gs.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(i),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,os),fh.multiplyMatrices(i,os),zs.matrixWorld=fh,zs.raycast(t,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=r,l.object=this,e.push(l)}Gr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new pc(new Float32Array(n*this.count),n,this.count,oc,Ci));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const In=new $n,Lp=new At(.5,.5),Hr=new I;class ur{constructor(t=new Mn,e=new Mn,i=new Mn,n=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],S=r[9],p=r[10],m=r[11],y=r[12],R=r[13],T=r[14],A=r[15];if(n[0].setComponents(c-a,f-h,m-_,A-y).normalize(),n[1].setComponents(c+a,f+h,m+_,A+y).normalize(),n[2].setComponents(c+o,f+u,m+S,A+R).normalize(),n[3].setComponents(c-o,f-u,m-S,A-R).normalize(),i)n[4].setComponents(l,d,p,T).normalize(),n[5].setComponents(c-l,f-d,m-p,A-T).normalize();else if(n[4].setComponents(c-l,f-d,m-p,A-T).normalize(),e===Li)n[5].setComponents(c+l,f+d,m+p,A+T).normalize();else if(e===cr)n[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){In.center.set(0,0,0);const e=Lp.distanceTo(t.center);return In.radius=.7071067811865476+e,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Hr.x=n.normal.x>0?t.max.x:t.min.x,Hr.y=n.normal.y>0?t.max.y:t.min.y,Hr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const mh=new Jt;class mc{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];mh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new ur),i[n].setFromProjectionMatrix(mh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new ur),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new mc().copy(this)}}class Vu extends An{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Aa=new I,Ra=new I,gh=new Jt,Hs=new Oa,Vr=new $n,xo=new I,_h=new I;class Dp extends Me{constructor(t=new we,e=new Vu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Aa.fromBufferAttribute(e,n-1),Ra.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Aa.distanceTo(Ra);t.setAttribute("lineDistance",new he(i,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(n),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;gh.copy(n).invert(),Hs.copy(t.ray).applyMatrix4(gh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=c){const m=h.getX(S),y=h.getX(S+1),R=Wr(this,t,Hs,l,m,y,S);R&&e.push(R)}if(this.isLineLoop){const S=h.getX(_-1),p=h.getX(f),m=Wr(this,t,Hs,l,S,p,_-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=c){const m=Wr(this,t,Hs,l,S,S+1,S);m&&e.push(m)}if(this.isLineLoop){const S=Wr(this,t,Hs,l,_-1,f,_-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wr(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(Aa.fromBufferAttribute(o,n),Ra.fromBufferAttribute(o,r),e.distanceSqToSegment(Aa,Ra,xo,_h)>i)return;xo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xo);if(!(c<t.near||c>t.far))return{distance:c,point:_h.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class gc extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new Jt,Tl=new Oa,Xr=new $n,$r=new I;class Wu extends Me{constructor(t=new we,e=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(n),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;vh.copy(n).invert(),Tl.copy(t.ray).applyMatrix4(vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,S=f;_<S;_++){const p=c.getX(_);$r.fromBufferAttribute(u,p),xh($r,p,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,S=f;_<S;_++)$r.fromBufferAttribute(u,_),xh($r,_,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xh(s,t,e,i,n,r,a){const o=Tl.distanceSqToPoint(s);if(o<e){const l=new I;Tl.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xu extends Fe{constructor(t=[],e=Ms,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rs extends Fe{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bs extends Fe{constructor(t,e,i=Vi,n,r,a,o=oe,l=oe,c,h=wn,u=1){if(h!==wn&&h!==yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class $u extends bs{constructor(t,e=Vi,i=Ms,n,r,a=oe,o=oe,l,c=wn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qu extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gr extends we{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,r,4),_("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function _(S,p,m,y,R,T,A,w,g,b,O){const L=T/g,U=A/b,B=T/2,$=A/2,D=w/2,W=g+1,Z=b+1;let V=0,nt=0;const Y=new I;for(let et=0;et<Z;et++){const it=et*U-$;for(let Tt=0;Tt<W;Tt++){const Ot=Tt*L-B;Y[S]=Ot*y,Y[p]=it*R,Y[m]=D,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[p]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Tt/g),u.push(1-et/b),V+=1}}for(let et=0;et<b;et++)for(let it=0;it<g;it++){const Tt=d+it+W*et,Ot=d+it+W*(et+1),Q=d+(it+1)+W*(et+1),vt=d+(it+1)+W*et;l.push(Tt,Ot,vt),l.push(Ot,Q,vt),nt+=6}o.addGroup(f,nt,O),f+=nt,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _r extends we{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new At;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _c extends we{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const S=[],p=i/2;let m=0;y(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function y(){const T=new I,A=new I;let w=0;const g=(e-t)/i;for(let b=0;b<=r;b++){const O=[],L=b/r,U=L*(e-t)+t;for(let B=0;B<=n;B++){const $=B/n,D=$*l+o,W=Math.sin(D),Z=Math.cos(D);A.x=U*W,A.y=-L*i+p,A.z=U*Z,u.push(A.x,A.y,A.z),T.set(W,g,Z).normalize(),d.push(T.x,T.y,T.z),f.push($,1-L),O.push(_++)}S.push(O)}for(let b=0;b<n;b++)for(let O=0;O<r;O++){const L=S[O][b],U=S[O+1][b],B=S[O+1][b+1],$=S[O][b+1];(t>0||O!==0)&&(h.push(L,U,$),w+=3),(e>0||O!==r-1)&&(h.push(U,B,$),w+=3)}c.addGroup(m,w,0),m+=w}function R(T){const A=_,w=new At,g=new I;let b=0;const O=T===!0?t:e,L=T===!0?1:-1;for(let B=1;B<=n;B++)u.push(0,p*L,0),d.push(0,L,0),f.push(.5,.5),_++;const U=_;for(let B=0;B<=n;B++){const D=B/n*l+o,W=Math.cos(D),Z=Math.sin(D);g.x=O*Z,g.y=p*L,g.z=O*W,u.push(g.x,g.y,g.z),d.push(0,L,0),w.x=W*.5+.5,w.y=Z*.5*L+.5,f.push(w.x,w.y),_++}for(let B=0;B<n;B++){const $=A+B,D=U+B;T===!0?h.push(D,D+1,$):h.push(D+1,D,$),b+=3}c.addGroup(m,b,T===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vc extends _c{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Np{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new At:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,n=[],r=[],a=[],o=new I,l=new Jt;for(let f=0;f<=t;f++){const _=f/t;n[f]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Wt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(n[_],f*_)),a[_].crossVectors(n[_],r[_])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function xc(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const Mh=new I,Sh=new I,Mo=new xc,So=new xc,bo=new xc;class Ip extends Np{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new I){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Sh.subVectors(n[0],n[1]).add(n[0]),c=Sh);const u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Mh.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Mh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),S=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);S<1e-4&&(S=1),_<1e-4&&(_=S),p<1e-4&&(p=S),Mo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,S,p),So.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,S,p),bo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,S,p)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),So.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Mo.calc(l),So.calc(l),bo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new I().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class hn extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],S=[],p=[];for(let m=0;m<h;m++){const y=m*d-a;for(let R=0;R<c;R++){const T=R*u-r;_.push(T,-y,0),S.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const R=y+c*m,T=y+c*(m+1),A=y+1+c*(m+1),w=y+1+c*m;f.push(R,T,w),f.push(T,A,w)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ba extends we{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],_=[],S=[],p=[];for(let m=0;m<=i;m++){const y=[],R=m/i,T=a+R*o,A=t*Math.cos(T),w=Math.sqrt(t*t-A*A);let g=0;m===0&&a===0?g=.5/e:m===i&&l===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){const O=b/e,L=n+O*r;u.x=-w*Math.cos(L),u.y=A,u.z=w*Math.sin(L),_.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),p.push(O+g,1-R),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const R=h[m][y+1],T=h[m][y],A=h[m+1][y],w=h[m+1][y+1];(m!==0||a>0)&&f.push(R,T,w),(m!==i-1||l<Math.PI)&&f.push(T,A,w)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ys(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(bh(n))n.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(bh(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function $e(s){const t={};for(let e=0;e<s.length;e++){const i=ys(s[e]);for(const n in i)t[n]=i[n]}return t}function bh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Up(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Yu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Es={clone:ys,merge:$e};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new pt().setHex(n.value);break;case"v2":this.uniforms[i].value=new At().fromArray(n.value);break;case"v3":this.uniforms[i].value=new I().fromArray(n.value);break;case"v4":this.uniforms[i].value=new fe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Jt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ku extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bp extends An{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class kp extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zp extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(yh(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!yh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function yh(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Gp{constructor(t,e,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hp=new Gp;class Mc{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ls=new WeakMap;class Vp extends Mc{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=yo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=ls.get(a);u===void 0&&(u=[],ls.set(a,u)),u.push({onLoad:e,onError:n})}return a}const o=hr("img");function l(){h(),e&&e(this);const u=ls.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),yo.remove(`image:${t}`);const d=ls.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(u)}ls.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yo.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Wp extends Mc{constructor(t){super(t)}load(t,e,i,n){const r=new Fe,a=new Vp(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class ka extends Me{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Xp extends ka{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Eo=new Jt,Eh=new I,Th=new I;class Zu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Eo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===cr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qr=new I,Yr=new Wn,Ni=new I;class Ju extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qr,Yr,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Yr,Ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(qr,Yr,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qr,Yr,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _n=new I,wh=new At,Ah=new At;class _i extends Ju{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=El*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return El*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Ah),e.subVectors(Ah,wh)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class $p extends Zu{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0}}class qp extends ka{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $p}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Sc extends Ju{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yp extends Zu{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rh extends ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Yp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Kp extends ka{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const cs=-90,hs=1;class wl extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new _i(cs,hs,t,e);n.layers=this.layers,this.add(n);const r=new _i(cs,hs,t,e);r.layers=this.layers,this.add(r);const a=new _i(cs,hs,t,e);a.layers=this.layers,this.add(a);const o=new _i(cs,hs,t,e);o.layers=this.layers,this.add(o);const l=new _i(cs,hs,t,e);l.layers=this.layers,this.add(l);const c=new _i(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=S,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zp extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Jp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Qp(){this._document.hidden===!1&&this.reset()}const Ch=new Jt;class jp{constructor(t,e,i=0,n=1/0){this.ray=new Oa(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(t,e=!0,i=[]){return Al(t,this,i,e),i.sort(Ph),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Al(t[n],this,i,e);return i.sort(Ph),i}}function Ph(s,t){return s.distance-t.distance}function Al(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Al(r[a],t,e,!0)}}function Lh(s,t,e,i){const n=tm(i);switch(e){case Cu:return s*t;case oc:return s*t/n.components*n.byteLength;case lc:return s*t/n.components*n.byteLength;case zn:return s*t*2/n.components*n.byteLength;case cc:return s*t*2/n.components*n.byteLength;case Pu:return s*t*3/n.components*n.byteLength;case Pi:return s*t*4/n.components*n.byteLength;case hc:return s*t*4/n.components*n.byteLength;case la:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Zo:return Math.max(s,16)*Math.max(t,8)/4;case qo:case Ko:return Math.max(s,8)*Math.max(t,8)/2;case Jo:case Qo:case tl:case el:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jo:case Sa:case il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _l:case vl:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ml:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ba:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(s){switch(s){case li:case Tu:return{byteLength:1,components:1};case lr:case wu:case je:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case Vi:case sc:case Ci:return{byteLength:4,components:1};case Au:case Ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qu(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function em(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],S=u[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,u[d]=S)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const S=u[f];s.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,jm=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
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
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform float backgroundBlurriness;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,b0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,T0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,N0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:im,alphahash_pars_fragment:nm,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:xm,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:ym,color_vertex:Em,common:Tm,defaultnormal_vertex:wm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:Bm,fog_pars_vertex:km,fog_fragment:zm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:$m,lights_toon_fragment:Ym,lights_toon_pars_fragment:Km,lights_phong_fragment:Zm,lights_phong_pars_fragment:Jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:jm,lights_fragment_begin:tg,lights_fragment_maps:eg,lights_fragment_end:ig,lightprobes_pars_fragment:ng,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:og,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:xg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:yg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ig,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Bg,shadowmap_vertex:kg,shadowmask_pars_fragment:zg,skinbase_vertex:Gg,skinning_pars_vertex:Hg,skinning_vertex:Vg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:$g,tonemapping_fragment:qg,tonemapping_pars_fragment:Yg,transmission_fragment:Kg,transmission_pars_fragment:Zg,uv_pars_fragment:Jg,uv_pars_vertex:Qg,uv_vertex:jg,worldpos_vertex:t0,background_vert:e0,background_frag:i0,backgroundCube_vert:n0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distance_vert:c0,distance_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:x0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:b0,meshphong_vert:y0,meshphong_frag:E0,meshphysical_vert:T0,meshphysical_frag:w0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:L0,shadow_frag:D0,sprite_vert:N0,sprite_frag:I0},gt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ki={basic:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:$e([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:$e([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:$e([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:$e([gt.points,gt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:$e([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:$e([gt.common,gt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:$e([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:$e([gt.sprite,gt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:$e([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:$e([gt.lights,gt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ki.physical={uniforms:$e([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Kr={r:0,b:0,g:0},U0=new Jt,ju=new Ft;ju.set(-1,0,0,0,1,0,0,0,1);function F0(s,t,e,i,n,r){const a=new pt(0);let o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){const T=y.backgroundBlurriness>0;R=t.get(R,T)}return R}function _(y){let R=!1;const T=f(y);T===null?p(a,o):T&&T.isColor&&(p(T,1),R=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(y,R){const T=f(R);T&&T.isCubeTexture?(c===void 0&&(c=new me(new gr(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:ys(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ju),c.material.toneMapped=Yt.getTransfer(T.colorSpace)!==jt,(h!==T||u!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,u=T.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new me(new hn(2,2),new Qe({name:"BackgroundMaterial",uniforms:ys(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(T.colorSpace)!==jt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||u!==T.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=T,u=T.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,R){y.getRGB(Kr,Yu(s)),e.buffers.color.setClear(Kr.r,Kr.g,Kr.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,R=1){a.set(y),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:_,addToRenderList:S,dispose:m}}function O0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(U,B,$,D,W){let Z=!1;const V=u(U,D,$,B);r!==V&&(r=V,c(r.object)),Z=f(U,D,$,W),Z&&_(U,D,$,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(U,B,$,D),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function u(U,B,$,D){const W=D.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const V=U.isInstancedMesh===!0?U.id:0;let nt=Z[V];nt===void 0&&(nt={},Z[V]=nt);let Y=nt[$.id];Y===void 0&&(Y={},nt[$.id]=Y);let et=Y[W];return et===void 0&&(et=d(l()),Y[W]=et),et}function d(U){const B=[],$=[],D=[];for(let W=0;W<e;W++)B[W]=0,$[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,B,$,D){const W=r.attributes,Z=B.attributes;let V=0;const nt=$.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const it=W[Y];let Tt=Z[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),it===void 0||it.attribute!==Tt||Tt&&it.data!==Tt.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function _(U,B,$,D){const W={},Z=B.attributes;let V=0;const nt=$.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let it=Z[Y];it===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(it=U.instanceColor));const Tt={};Tt.attribute=it,it&&it.data&&(Tt.data=it.data),W[Y]=Tt,V++}r.attributes=W,r.attributesNum=V,r.index=D}function S(){const U=r.newAttributes;for(let B=0,$=U.length;B<$;B++)U[B]=0}function p(U){m(U,0)}function m(U,B){const $=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;$[U]=1,D[U]===0&&(s.enableVertexAttribArray(U),D[U]=1),W[U]!==B&&(s.vertexAttribDivisor(U,B),W[U]=B)}function y(){const U=r.newAttributes,B=r.enabledAttributes;for(let $=0,D=B.length;$<D;$++)B[$]!==U[$]&&(s.disableVertexAttribArray($),B[$]=0)}function R(U,B,$,D,W,Z,V){V===!0?s.vertexAttribIPointer(U,B,$,W,Z):s.vertexAttribPointer(U,B,$,D,W,Z)}function T(U,B,$,D){S();const W=D.attributes,Z=$.getAttributes(),V=B.defaultAttributeValues;for(const nt in Z){const Y=Z[nt];if(Y.location>=0){let et=W[nt];if(et===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),et!==void 0){const it=et.normalized,Tt=et.itemSize,Ot=t.get(et);if(Ot===void 0)continue;const Q=Ot.buffer,vt=Ot.type,bt=Ot.bytesPerElement,Lt=vt===s.INT||vt===s.UNSIGNED_INT||et.gpuType===sc;if(et.isInterleavedBufferAttribute){const xt=et.data,kt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,ge=et.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Nt=0;Nt<Y.locationSize;Nt++)m(Y.location+Nt,xt.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Nt=0;Nt<Y.locationSize;Nt++)p(Y.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Nt=0;Nt<Y.locationSize;Nt++)R(Y.location+Nt,Tt/Y.locationSize,vt,it,kt*bt,(ge+Tt/Y.locationSize*Nt)*bt,Lt)}else{if(et.isInstancedBufferAttribute){for(let xt=0;xt<Y.locationSize;xt++)m(Y.location+xt,et.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let xt=0;xt<Y.locationSize;xt++)p(Y.location+xt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let xt=0;xt<Y.locationSize;xt++)R(Y.location+xt,Tt/Y.locationSize,vt,it,Tt*bt,Tt/Y.locationSize*xt*bt,Lt)}}else if(V!==void 0){const it=V[nt];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(Y.location,it);break;case 3:s.vertexAttrib3fv(Y.location,it);break;case 4:s.vertexAttrib4fv(Y.location,it);break;default:s.vertexAttrib1fv(Y.location,it)}}}}y()}function A(){O();for(const U in i){const B=i[U];for(const $ in B){const D=B[$];for(const W in D){const Z=D[W];for(const V in Z)h(Z[V].object),delete Z[V];delete D[W]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const B=i[U.id];for(const $ in B){const D=B[$];for(const W in D){const Z=D[W];for(const V in Z)h(Z[V].object),delete Z[V];delete D[W]}}delete i[U.id]}function g(U){for(const B in i){const $=i[B];for(const D in $){const W=$[D];if(W[U.id]===void 0)continue;const Z=W[U.id];for(const V in Z)h(Z[V].object),delete Z[V];delete W[U.id]}}}function b(U){for(const B in i){const $=i[B],D=U.isInstancedMesh===!0?U.id:0,W=$[D];if(W!==void 0){for(const Z in W){const V=W[Z];for(const nt in V)h(V[nt].object),delete V[nt];delete W[Z]}delete $[D],Object.keys($).length===0&&delete i[B]}}}function O(){L(),a=!0,r!==n&&(r=n,c(r.object))}function L(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:O,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:p,disableUnusedAttributes:y}}function B0(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(g){return!(g!==Pi&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const b=g===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==li&&g!==Ci&&!b&&i.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:T,maxSamples:A,samples:w}}function z0(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Mn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,S=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!n||_===null||_.length===0||r&&!p)r?h(null):c();else{const y=r?0:i,R=y*4;let T=m.clippingState||null;l.value=T,T=h(_,d,R,f);for(let A=0;A!==R;++A)T[A]=e[A];m.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){const S=u!==null?u.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const m=f+S*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,T=f;R!==S;++R,T+=4)a.copy(u[R]).applyMatrix4(y,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}class bc extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Xu(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new gr(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:kn});r.uniforms.tEquirect.value=e;const a=new me(n,r),o=e.minFilter;return e.minFilter===an&&(e.minFilter=Je),new wl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Dh=256,G0=3,H0=20,td=256,ed=16,V0=3,W0=new I,X0=new pt;class Ca{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wl(1,10,null),this._boxMesh=new me(new gr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=W0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(X0));const p=new wl(i,n,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=_,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Dh,ap(t))}_fromTexture(t,e){t.mapping===Ms||t.mapping===ar?this._setSize(t.image.length===0?Dh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=Nh(t,!1,!1),i=Math.log2(t)-G0;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Nh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ms||t.mapping===ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ih()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$0(),this._integrationMaterial=q0());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ed);for(let a=0;a<=i;a++){const o=Ca.lodToRoughness(a,i);if(a>i-V0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(td*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Y0());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function Nh(s,t,e){return new bc(s,{minFilter:an,generateMipmaps:t,type:je,colorSpace:ya,depthBuffer:e})}function vr(s,t,e){return new Qe({name:s,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:He,blending:kn,depthTest:!1,depthWrite:!1})}function $0(){return vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${td}u

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
	`)}function q0(){return vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ed}},`

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
	`)}function Y0(){return vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${H0}
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
	`)}function Ih(){return vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Uh(){return vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function K0(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Xa||f===$a)if(t.has(d)){const _=t.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new bc(_.height);return S.fromEquirectangularTexture(s,d),t.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,_=f===Xa||f===$a,S=f===Ms||f===ar;if(_||S){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Ca(s)),p=_?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const y=d.image;return _&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new Ca(s)),p=_?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Xa?d.mapping=Ms:f===$a&&(d.mapping=ar),d}function l(d){let f=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&f++;return f===_}function c(d){const f=d.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Z0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&da("WebGLRenderer: "+i+" extension not supported."),n}}}function J0(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(_=>delete n[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(const p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete n[_.id],a.unregister(_);const S=r.get(_);S&&(t.remove(S),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,S){return n[S.id]!==void 0||(S.addEventListener("dispose",o),n[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(_){const S=_.attributes;for(const p in S)t.update(S[p],s.ARRAY_BUFFER)}function u(_){const S=_.index,p=_.attributes.position;let m=0;if(p===void 0)return;const y=S!==null?S.array.length:p.array.length/3-1,R=p.count>=65535?Gu:zu,T=new R(Math.ceil(y/3)*6,1),A=T.array;if(S!==null){const g=S.array;m=S.version;for(let b=0,O=0;b<y;b+=3){const L=g[b+0],U=g[b+1],B=g[b+2];A[O++]=L,A[O++]=U,A[O++]=U,A[O++]=B,A[O++]=B,A[O++]=L}}else{m=p.version;for(let g=0,b=0;g<y;g+=3){const O=g+0,L=g+1,U=g+2;A[b++]=O,A[b++]=L,A[b++]=L,A[b++]=U,A[b++]=U,A[b++]=O}}T.version=m;const w=r.get(_);w&&t.remove(w),r.set(_,T)}function d(_){const S=r.get(_);if(S){const p=_.index;p!==null&&S.version<p.version&&u(_)}else u(_);return r.get(_)}function f(){for(const _ in n){const S=n[_].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Q0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let S=0;for(let p=0;p<f;p++)S+=d[p];e.update(S,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function j0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function t_(s,t,e){const i=new WeakMap,n=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let L=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var f=L;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),p===!0&&(T=3);let A=o.attributes.position.count*T,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const g=new Float32Array(A*w*4*u),b=new Bu(g,A,w,u);b.type=Ci,b.needsUpdate=!0;const O=T*4;for(let U=0;U<u;U++){const B=m[U],$=y[U],D=R[U],W=A*w*4*U;for(let Z=0;Z<B.count;Z++){const V=Z*O;_===!0&&(n.fromBufferAttribute(B,Z),g[W+V+0]=n.x,g[W+V+1]=n.y,g[W+V+2]=n.z,g[W+V+3]=0),S===!0&&(n.fromBufferAttribute($,Z),g[W+V+4]=n.x,g[W+V+5]=n.y,g[W+V+6]=n.z,g[W+V+7]=0),p===!0&&(n.fromBufferAttribute(D,Z),g[W+V+8]=n.x,g[W+V+9]=n.y,g[W+V+10]=n.z,g[W+V+11]=D.itemSize===4?n.w:1)}}d={count:u,texture:b,size:new At(A,w)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",S),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function e_(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const i_={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[Ua]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function n_(s,t,e,i,n,r){const a=new ti(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new we;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));const u=new Ku({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new me(h,u),f=new Sc(-1,1,1,-1,0,1);let _=null,S=null,p=!1,m,y=null,R=[],T=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let g=0;g<R.length;g++){const b=R[g];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){R=A,T=R.length>0&&R[0].isRenderPass===!0;const w=a.width,g=a.height;R.length>0&&o===null&&(o=new ti(w,g,{type:je,depthBuffer:!1,stencilBuffer:!1}),l=new ti(w,g,{type:je,depthBuffer:!1,stencilBuffer:!1}));const b=n===!0&&R.some(O=>O.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new bs(w,g),r===!0&&(c.format=yn,c.type=Ss)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let O=0;O<R.length;O++){const L=R[O];L.setSize&&L.setSize(w,g),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(A,w){if(p||A.toneMapping===ln&&R.length===0)return!1;if(y=w,w!==null){const g=w.width,b=w.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return T===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=ln,!0},this.hasRenderPass=function(){return T},this.end=function(A,w){A.toneMapping=m,p=!0;let g=a,b=o;for(let O=0;O<R.length;O++){const L=R[O];L.enabled!==!1&&(L.render(A,b,g,w),L.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,u.defines={},Yt.getTransfer(_)===jt&&(u.defines.SRGB_TRANSFER="");const O=i_[S];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(y),A.render(d,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const id=new Fe,nd=new bs(1,1),sd=new $u(1),rd=new Bu,ad=new dp,od=new Xu,Fh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function Cs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Fh[n];if(r===void 0&&(r=new Float32Array(n),Fh[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function za(s,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function s_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function r_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function o_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function l_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;zh.set(i),s.uniformMatrix2fv(this.addr,!1,zh),Te(e,i)}}function c_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;kh.set(i),s.uniformMatrix3fv(this.addr,!1,kh),Te(e,i)}}function h_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Bh.set(i),s.uniformMatrix4fv(this.addr,!1,Bh),Te(e,i)}}function u_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function d_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function f_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function p_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function m_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function g_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function v_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function Ga(s){return s.version===0&&(s.compareFunction=Nu,s.needsUpdate=!0),s}function x_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ga(nd):r=id,e.setTexture2D(t||r,n)}function M_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ad,n)}function S_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ga(sd):r=od,e.setTextureCube(t||r,n)}function b_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||rd,n)}function y_(s){switch(s){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function E_(s,t){s.uniform1fv(this.addr,t)}function T_(s,t){const e=Cs(t,this.size,2);s.uniform2fv(this.addr,e)}function w_(s,t){const e=Cs(t,this.size,3);s.uniform3fv(this.addr,e)}function A_(s,t){const e=Cs(t,this.size,4);s.uniform4fv(this.addr,e)}function R_(s,t){const e=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function C_(s,t){const e=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function P_(s,t){const e=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function L_(s,t){s.uniform1iv(this.addr,t)}function D_(s,t){s.uniform2iv(this.addr,t)}function N_(s,t){s.uniform3iv(this.addr,t)}function I_(s,t){s.uniform4iv(this.addr,t)}function U_(s,t){s.uniform1uiv(this.addr,t)}function F_(s,t){s.uniform2uiv(this.addr,t)}function O_(s,t){s.uniform3uiv(this.addr,t)}function B_(s,t){s.uniform4uiv(this.addr,t)}function k_(s,t,e){const i=this.cache,n=t.length,r=za(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ga(nd):a=id;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function z_(s,t,e){const i=this.cache,n=t.length,r=za(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||ad,r[a])}function G_(s,t,e){const i=this.cache,n=t.length,r=za(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Ga(sd):a=od;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function H_(s,t,e){const i=this.cache,n=t.length,r=za(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||rd,r[a])}function V_(s){switch(s){case 5126:return E_;case 35664:return T_;case 35665:return w_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return I_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}class W_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y_(e.type)}}class X_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V_(e.type)}}class $_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Gh(s,t){s.seq.push(t),s.map[t.id]=t}function q_(s,t,e){const i=s.name,n=i.length;for(To.lastIndex=0;;){const r=To.exec(i),a=To.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Gh(e,c===void 0?new W_(o,s,t):new X_(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new $_(o),Gh(e,u)),e=u}}}class fa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);q_(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Hh(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Y_=37297;let K_=0;function Z_(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Vh=new Ft;function J_(s){Yt._getMatrix(Vh,Yt.workingColorSpace,s);const t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Ea:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wh(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Z_(s.getShaderSource(t),o)}else return r}function Q_(s,t){const e=J_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const j_={[Ql]:"Linear",[jl]:"Reinhard",[tc]:"Cineon",[ec]:"ACESFilmic",[nc]:"AgX",[Ua]:"Neutral",[ic]:"Custom"};function tv(s,t){const e=j_[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new I;function ev(){Yt.getLuminanceCoefficients(Zr);const s=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function nv(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sv(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Zs(s){return s!==""}function Xh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function $h(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(s){return s.replace(rv,av)}function av(s,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Rl(e)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(s){return s.replace(ov,lv)}function lv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Yh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const cv={[er]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function hv(s){return cv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uv={[ar]:"ENVMAP_MODE_REFRACTION"};function dv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fv={[yu]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function pv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fv[s.combine]||"ENVMAP_BLENDING_NONE"}function mv(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=hv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dv(e),u=pv(e),d=iv(e),f=nv(r),_=n.createProgram();let S,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Zs).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(S=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ln?tv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Q_("linearToOutputTexel",e.outputColorSpace),ev(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Rl(a),a=Xh(a,e),a=$h(a,e),o=Rl(o),o=Xh(o,e),o=$h(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=m+S+a,R=m+p+o,T=Hh(n,n.VERTEX_SHADER,y),A=Hh(n,n.FRAGMENT_SHADER,R);n.attachShader(_,T),n.attachShader(_,A),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(L){if(s.debug.checkShaderErrors){const U=n.getProgramInfoLog(_)||"",B=n.getShaderInfoLog(T)||"",$=n.getShaderInfoLog(A)||"",D=U.trim(),W=B.trim(),Z=$.trim();let V=!0,nt=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,T,A);else{const Y=Wh(n,T,"vertex"),et=Wh(n,A,"fragment");Zt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+Y+`
`+et)}else D!==""?It("WebGLProgram: Program Info Log:",D):(W===""||Z==="")&&(nt=!1);nt&&(L.diagnostics={runnable:V,programLog:D,vertexShader:{log:W,prefix:S},fragmentShader:{log:Z,prefix:p}})}n.deleteShader(T),n.deleteShader(A),g=new fa(n,_),b=sv(n,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=n.getProgramParameter(_,Y_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let gv=0;class _v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vv(t),e.set(t,i)),i}}class vv{constructor(t){this.id=gv++,this.code=t,this.usedTimes=0}}function xv(s){return s===zn||s===Sa||s===ba}function Mv(s,t,e,i,n,r){const a=new dc,o=new _v,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,O,L,U,B){const $=L.fog,D=U.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=t.get(g.envMap||W,Z),nt=d[g.type];let Y=i.precision;g.precision!==null&&(Y=i.getMaxPrecision(g.precision),Y!==g.precision&&It("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));const et=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=et!==void 0?et.length:0;let Tt=0;D.morphAttributes.position!==void 0&&(Tt=1),D.morphAttributes.normal!==void 0&&(Tt=2),D.morphAttributes.color!==void 0&&(Tt=3);let Ot,Q,vt,bt;if(nt){const _t=ki[nt];Ot=_t.vertexShader,Q=_t.fragmentShader}else{Ot=g.vertexShader,Q=g.fragmentShader;const _t=o.getVertexShaderStage(g),ee=o.getFragmentShaderStage(g);o.update(g,_t,ee),vt=_t.id,bt=ee.id}const Lt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),kt=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,Nt=!!g.map,te=!!g.matcap,ne=!!V,Xt=ne&&V.isPMREMTexture===!0,Ne=!!g.aoMap,Se=!!g.lightMap,ii=!!g.bumpMap&&g.wireframe===!1,ue=!!g.normalMap,Di=!!g.displacementMap,Ae=!!g.emissiveMap,di=!!g.metalnessMap,fi=!!g.roughnessMap,pi=g.anisotropy>0,F=g.clearcoat>0,mi=g.diffuseRoughness>0,le=g.dispersion>0,ce=g.retroreflectivity>0,mt=g.iridescence>0,be=g.sheen>0,Dt=g.transmission>0,Ut=pi&&!!g.anisotropyMap,E=F&&!!g.clearcoatMap,v=F&&!!g.clearcoatNormalMap,z=F&&!!g.clearcoatRoughnessMap,st=mi&&!!g.diffuseRoughnessMap,tt=mt&&!!g.iridescenceMap,ot=mt&&!!g.iridescenceThicknessMap,dt=be&&!!g.sheenColorMap,K=be&&!!g.sheenRoughnessMap,J=!!g.specularMap,ct=!!g.specularColorMap,C=!!g.specularIntensityMap,j=Dt&&!!g.transmissionMap,q=Dt&&!!g.thicknessMap,ht=!!g.gradientMap,at=!!g.alphaMap,lt=g.alphaTest>0,Rt=!!g.alphaHash,Gt=!!g.extensions;let rt=ln;g.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ct=Xt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,zt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Ot,fragmentShader:Q,defines:g.defines,customVertexShaderID:vt,customFragmentShaderID:bt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:kt,instancingColor:kt&&U.instanceColor!==null,instancingMorph:kt&&U.morphTexture!==null,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Nt,matcap:te,envMap:ne,envMapMode:ne&&V.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Ct.length-1:null,envMapSize:Xt?Ct[0].width:null,aoMap:Ne,lightMap:Se,bumpMap:ii,normalMap:ue,displacementMap:Di,emissiveMap:Ae,normalMapObjectSpace:ue&&g.normalMapType===Yf,normalMapTangentSpace:ue&&g.normalMapType===yl,packedNormalMap:ue&&g.normalMapType===yl&&xv(g.normalMap.format),metalnessMap:di,roughnessMap:fi,anisotropy:pi,anisotropyMap:Ut,clearcoat:F,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:mi,diffuseRoughnessMap:st,dispersion:le,retroreflection:ce,iridescence:mt,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:be,sheenColorMap:dt,sheenRoughnessMap:K,specularMap:J,specularColorMap:ct,specularIntensityMap:C,transmission:Dt,transmissionMap:j,thicknessMap:q,gradientMap:ht,opaque:g.transparent===!1&&g.blending===ir&&g.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:Rt,combine:g.combine,mapUv:Nt&&f(g.map.channel),aoMapUv:Ne&&f(g.aoMap.channel),lightMapUv:Se&&f(g.lightMap.channel),bumpMapUv:ii&&f(g.bumpMap.channel),normalMapUv:ue&&f(g.normalMap.channel),displacementMapUv:Di&&f(g.displacementMap.channel),emissiveMapUv:Ae&&f(g.emissiveMap.channel),metalnessMapUv:di&&f(g.metalnessMap.channel),roughnessMapUv:fi&&f(g.roughnessMap.channel),anisotropyMapUv:Ut&&f(g.anisotropyMap.channel),clearcoatMapUv:E&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(g.sheenRoughnessMap.channel),specularMapUv:J&&f(g.specularMap.channel),specularColorMapUv:ct&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:j&&f(g.transmissionMap.channel),thicknessMapUv:q&&f(g.thicknessMap.channel),alphaMapUv:at&&f(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ue||pi),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Nt||at),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Tt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Nt&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===jt,decodeVideoTextureEmissive:Ae&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===zi,flipSided:g.side===He,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Gt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&g.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function S(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)b.push(O),b.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(p(b,g),m(b,g),b.push(s.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){const b=d[g.type];let O;if(b){const L=ki[b];O=Es.clone(L.uniforms)}else O=g.uniforms;return O}function R(g,b){let O=h.get(b);return O!==void 0?++O.usedTimes:(O=new mv(s,b,g,n),c.push(O),h.set(b,O)),O}function T(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:w}}function Sv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function bv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Kh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zh(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,S,p,m){let y=s[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:p,group:m},s[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=_,y.materialVariant=a(d),y.groupOrder=S,y.renderOrder=d.renderOrder,y.z=p,y.group=m),t++,y}function l(d,f,_,S,p,m,y){y.reversedDepth===!0&&(p=-p);const R=o(d,f,_,S,p,m);_.transmission>0?i.push(R):_.transparent===!0?n.push(R):e.push(R)}function c(d,f,_,S,p,m){const y=o(d,f,_,S,p,m);_.transmission>0?i.unshift(y):_.transparent===!0?n.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||bv),i.length>1&&i.sort(f||Kh),n.length>1&&n.sort(f||Kh)}function u(){for(let d=t,f=s.length;d<f;d++){const _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function yv(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Zh,s.set(i,[a])):n>=r.length?(a=new Zh,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ev(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new pt};break;case"SpotLight":e={position:new I,direction:new I,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Tv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wv=0;function Av(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rv(s){const t=new Ev,e=Tv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const n=new I,r=new Jt,a=new Jt;function o(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,_=0,S=0,p=0,m=0,y=0,R=0,T=0,A=0,w=0,g=0,b=0,O=0,L=0;c.sort(Av);for(let B=0,$=c.length;B<$;B++){const D=c[B],W=D.color,Z=D.intensity,V=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zn?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=W.r*Z,u+=W.g*Z,d+=W.b*Z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);L++}else if(D.isSunLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[_]=it,i.sunShadowMap[_]=nt;const Tt=et.getViewportCount();for(let Ot=0;Ot<Tt;Ot++)i.sunShadowMatrix[S+Ot]=et.getMatrix(Ot),i.sunShadowCascade[S+Ot]=et._cascadeData[Ot];S+=Tt,_++}i.sun[f]=Y,f++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.directionalShadow[p]=it,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=D.shadow.matrix,A++}i.directional[p]=Y,p++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=V,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[y]=Y;const et=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,et.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[y]=et.matrix,D.castShadow){const it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.spotShadow[y]=it,i.spotShadowMap[y]=nt,g++}y++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=Y,R++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const et=D.shadow,it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,i.pointShadow[m]=it,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=D.shadow.matrix,w++}i.point[m]=Y,m++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z),Y.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[T]=Y,T++}}R>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==y||U.rectAreaLength!==R||U.hemiLength!==T||U.numSunShadows!==_||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==g||U.numSpotMaps!==b||U.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=R,i.point.length=m,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=L,U.sunLength=f,U.directionalLength=p,U.pointLength=m,U.spotLength=y,U.rectAreaLength=R,U.hemiLength=T,U.numSunShadows=_,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=g,U.numSpotMaps=b,U.numLightProbes=L,i.version=wv++)}function l(c,h){let u=0,d=0,f=0,_=0,S=0,p=0;const m=h.matrixWorldInverse;for(let y=0,R=c.length;y<R;y++){const T=c[y];if(T.isSunLight){const A=i.sun[u];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),u++}else if(T.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),d++}else if(T.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),_++}else if(T.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Jh(s){const t=new Rv(s),e=[],i=[],n=[];function r(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cv(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Jh(s),t.set(n,[o])):r>=a.length?(o=new Jh(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
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
}`,Dv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Nv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Qh=new Jt,Vs=new I,wo=new I;function Iv(s,t,e){let i=new ur;const n=new At,r=new At,a=new fe,o=new kp,l=new zp,c={},h=e.maxTextureSize,u={[Tn]:He,[He]:Tn,[zi]:zi},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new we;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new me(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let m=this.type;this.render=function(w,g,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Tf&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const O=s.getRenderTarget(),L=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),B=s.state;B.setBlending(kn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=m!==this.type;$&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=w.length;D<W;D++){const Z=w[D],V=Z.shadow;if(V===void 0){It("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const nt=V.getFrameExtents();n.multiply(nt),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,V.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ks){if(Z.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ti(n.x,n.y,{format:zn,type:je,minFilter:Je,magFilter:Je,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new bs(n.x,n.y,Ci),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=wn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=oe,V.map.depthTexture.magFilter=oe}else Z.isPointLight?(V.map=new bc(n.x),V.map.depthTexture=new $u(n.x,Vi)):(V.map=new ti(n.x,n.y),V.map.depthTexture=new bs(n.x,n.y,Vi)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=wn,this.type===er?(V.map.depthTexture.compareFunction=Y?Du:Lu,V.map.depthTexture.minFilter=Je,V.map.depthTexture.magFilter=Je):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=oe,V.map.depthTexture.magFilter=oe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);const et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,b);const it=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Tt=0;Tt<et;Tt++){const Ot=V.getCamera(Tt);if(Z.isPointLight){const Q=V.camera,vt=V.matrix,bt=Z.distance||Q.far;bt!==Q.far&&(Q.far=bt,Q.updateProjectionMatrix()),Vs.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Vs),wo.copy(Q.position),wo.add(Dv[Tt]),Q.up.copy(Nv[Tt]),Q.lookAt(wo),Q.updateMatrixWorld(),vt.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Qh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Qh,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,Tt),s.clear();else{Tt===0&&(s.setRenderTarget(V.map),s.clear());const Q=V.getViewport(Tt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),B.viewport(a)}i=V.getFrustum(Tt),T(g,b,Ot,Z,it,this.type)}V.isPointLightShadow!==!0&&this.type===Ks&&y(V,b),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(O,L,U)};function y(w,g){const b=t.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ti(n.x,n.y,{format:zn,type:je}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(g,null,b,d,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(g,null,b,f,S,null)}function R(w,g,b,O){let L=null;const U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)L=U;else if(L=b.isPointLight===!0?l:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const B=L.uuid,$=g.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let W=D[$];W===void 0&&(W=L.clone(),D[$]=W,g.addEventListener("dispose",A)),L=W}if(L.visible=g.visible,L.wireframe=g.wireframe,O===Ks?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:u[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=s.properties.get(L);B.light=b}return L}function T(w,g,b,O,L,U){if(w.visible===!1)return;if(w.layers.test(L)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Ks)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const D=t.update(w),W=w.material;if(Array.isArray(W)){const Z=D.groups;for(let V=0,nt=Z.length;V<nt;V++){const Y=Z[V],et=W[Y.materialIndex];if(et&&et.visible){const it=R(w,et,O,U);w.onBeforeShadow(s,w,g,b,D,it,Y),s.renderBufferDirect(b,null,D,it,w,Y),w.onAfterShadow(s,w,g,b,D,it,Y)}}}else if(W.visible){const Z=R(w,W,O,U);w.onBeforeShadow(s,w,g,b,D,Z,null),s.renderBufferDirect(b,null,D,Z,w,null),w.onAfterShadow(s,w,g,b,D,Z,null)}}const $=w.children;for(let D=0,W=$.length;D<W;D++)T($[D],g,b,O,L,U)}function A(w){w.target.removeEventListener("dispose",A);for(const b in c){const O=c[b],L=w.target.uuid;L in O&&(O[L].dispose(),delete O[L])}}}function Uv(s,t){function e(){let C=!1;const j=new fe;let q=null;const ht=new fe(0,0,0,0);return{setMask:function(at){q!==at&&!C&&(s.colorMask(at,at,at,at),q=at)},setLocked:function(at){C=at},setClear:function(at,lt,Rt,Gt,rt){rt===!0&&(at*=Gt,lt*=Gt,Rt*=Gt),j.set(at,lt,Rt,Gt),ht.equals(j)===!1&&(s.clearColor(at,lt,Rt,Gt),ht.copy(j))},reset:function(){C=!1,q=null,ht.set(-1,0,0,0)}}}function i(){let C=!1,j=!1,q=null,ht=null,at=null;return{setReversed:function(lt){if(j!==lt){const Rt=t.get("EXT_clip_control");lt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),j=lt;const Gt=at;at=null,this.setClear(Gt)}},getReversed:function(){return j},setTest:function(lt){lt?xt(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(lt){q!==lt&&!C&&(s.depthMask(lt),q=lt)},setFunc:function(lt){if(j&&(lt=sp[lt]),ht!==lt){switch(lt){case ko:s.depthFunc(s.NEVER);break;case zo:s.depthFunc(s.ALWAYS);break;case Go:s.depthFunc(s.LESS);break;case rr:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Vo:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=lt}},setLocked:function(lt){C=lt},setClear:function(lt){at!==lt&&(at=lt,j&&(lt=1-lt),s.clearDepth(lt))},reset:function(){C=!1,q=null,ht=null,at=null,j=!1}}}function n(){let C=!1,j=null,q=null,ht=null,at=null,lt=null,Rt=null,Gt=null,rt=null;return{setTest:function(Ct){C||(Ct?xt(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(Ct){j!==Ct&&!C&&(s.stencilMask(Ct),j=Ct)},setFunc:function(Ct,zt,_t){(q!==Ct||ht!==zt||at!==_t)&&(s.stencilFunc(Ct,zt,_t),q=Ct,ht=zt,at=_t)},setOp:function(Ct,zt,_t){(lt!==Ct||Rt!==zt||Gt!==_t)&&(s.stencilOp(Ct,zt,_t),lt=Ct,Rt=zt,Gt=_t)},setLocked:function(Ct){C=Ct},setClear:function(Ct){rt!==Ct&&(s.clearStencil(Ct),rt=Ct)},reset:function(){C=!1,j=null,q=null,ht=null,at=null,lt=null,Rt=null,Gt=null,rt=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,_=[],S=null,p=!1,m=null,y=null,R=null,T=null,A=null,w=null,g=null,b=new pt(0,0,0),O=0,L=!1,U=null,B=null,$=null,D=null,W=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=nt>=2);let et=null,it={};const Tt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Q=new fe().fromArray(Tt),vt=new fe().fromArray(Ot);function bt(C,j,q,ht){const at=new Uint8Array(4),lt=s.createTexture();s.bindTexture(C,lt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<q;Rt++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(j+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return lt}const Lt={};Lt[s.TEXTURE_2D]=bt(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[s.TEXTURE_2D_ARRAY]=bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(s.DEPTH_TEST),a.setFunc(rr),ii(!1),ue(Wc),xt(s.CULL_FACE),Ne(kn);function xt(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function kt(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function ge(C,j){return d[C]!==j?(s.bindFramebuffer(C,j),d[C]=j,C===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=j),C===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Nt(C,j){let q=_,ht=!1;if(C){q=f.get(j),q===void 0&&(q=[],f.set(j,q));const at=C.textures;if(q.length!==at.length||q[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Rt=at.length;lt<Rt;lt++)q[lt]=s.COLOR_ATTACHMENT0+lt;q.length=at.length,ht=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,ht=!0);ht&&s.drawBuffers(q)}function te(C){return S!==C?(s.useProgram(C),S=C,!0):!1}const ne={[ds]:s.FUNC_ADD,[Af]:s.FUNC_SUBTRACT,[Rf]:s.FUNC_REVERSE_SUBTRACT};ne[Cf]=s.MIN,ne[Pf]=s.MAX;const Xt={[Lf]:s.ZERO,[Df]:s.ONE,[Nf]:s.SRC_COLOR,[Su]:s.SRC_ALPHA,[kf]:s.SRC_ALPHA_SATURATE,[Of]:s.DST_COLOR,[Uf]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[bu]:s.ONE_MINUS_SRC_ALPHA,[Bf]:s.ONE_MINUS_DST_COLOR,[Ff]:s.ONE_MINUS_DST_ALPHA,[zf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Hf]:s.CONSTANT_ALPHA,[Vf]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(C,j,q,ht,at,lt,Rt,Gt,rt,Ct){if(C===kn){p===!0&&(kt(s.BLEND),p=!1);return}if(p===!1&&(xt(s.BLEND),p=!0),C!==wf){if(C!==m||Ct!==L){if((y!==ds||A!==ds)&&(s.blendEquation(s.FUNC_ADD),y=ds,A=ds),Ct)switch(C){case ir:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sr:s.blendFunc(s.ONE,s.ONE);break;case Xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $c:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Zt("WebGLState: Invalid blending: ",C);break}else switch(C){case ir:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xc:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",C);break}R=null,T=null,w=null,g=null,b.set(0,0,0),O=0,m=C,L=Ct}return}at=at||j,lt=lt||q,Rt=Rt||ht,(j!==y||at!==A)&&(s.blendEquationSeparate(ne[j],ne[at]),y=j,A=at),(q!==R||ht!==T||lt!==w||Rt!==g)&&(s.blendFuncSeparate(Xt[q],Xt[ht],Xt[lt],Xt[Rt]),R=q,T=ht,w=lt,g=Rt),(Gt.equals(b)===!1||rt!==O)&&(s.blendColor(Gt.r,Gt.g,Gt.b,rt),b.copy(Gt),O=rt),m=C,L=!1}function Se(C,j){C.side===zi?kt(s.CULL_FACE):xt(s.CULL_FACE);let q=C.side===He;j&&(q=!q),ii(q),C.blending===ir&&C.transparent===!1?Ne(kn):Ne(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const ht=C.stencilWrite;o.setTest(ht),ht&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ae(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ii(C){U!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),U=C)}function ue(C){C!==yf?(xt(s.CULL_FACE),C!==B&&(C===Wc?s.cullFace(s.BACK):C===Ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),B=C}function Di(C){C!==$&&(V&&s.lineWidth(C),$=C)}function Ae(C,j,q){C?(xt(s.POLYGON_OFFSET_FILL),(D!==j||W!==q)&&(D=j,W=q,a.getReversed()&&(j=-j,q=-q),s.polygonOffset(j,q))):kt(s.POLYGON_OFFSET_FILL)}function di(C){C?xt(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function fi(C){C===void 0&&(C=s.TEXTURE0+Z-1),et!==C&&(s.activeTexture(C),et=C)}function pi(C,j,q){q===void 0&&(et===null?q=s.TEXTURE0+Z-1:q=et);let ht=it[q];ht===void 0&&(ht={type:void 0,texture:void 0},it[q]=ht),(ht.type!==C||ht.texture!==j)&&(et!==q&&(s.activeTexture(q),et=q),s.bindTexture(C,j||Lt[C]),ht.type=C,ht.texture=j)}function F(){const C=it[et];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function mi(){try{s.compressedTexImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function le(){try{s.compressedTexImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function ce(){try{s.texSubImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function mt(){try{s.texSubImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function be(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function Ut(){try{s.texStorage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function E(){try{s.texStorage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function v(){try{s.texImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function z(){try{s.texImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function st(C){return u[C]!==void 0?u[C]:s.getParameter(C)}function tt(C,j){u[C]!==j&&(s.pixelStorei(C,j),u[C]=j)}function ot(C){Q.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function dt(C){vt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),vt.copy(C))}function K(C,j){let q=c.get(j);q===void 0&&(q=new WeakMap,c.set(j,q));let ht=q.get(C);ht===void 0&&(ht=s.getUniformBlockIndex(j,C.name),s.uniformBlockBinding(j,ht,ht),q.set(C,ht))}function J(C,j,q){const at=c.get(j).get(C);l[at]!==q&&(s.bindBufferBase(s.UNIFORM_BUFFER,at,q),l[at]=q)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,it={},d={},l={},f=new WeakMap,_=[],S=null,p=!1,m=null,y=null,R=null,T=null,A=null,w=null,g=null,b=new pt(0,0,0),O=0,L=!1,U=null,B=null,$=null,D=null,W=null,Q.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:kt,bindFramebuffer:ge,drawBuffers:Nt,useProgram:te,setBlending:Ne,setMaterial:Se,setFlipSided:ii,setCullFace:ue,setLineWidth:Di,setPolygonOffset:Ae,setScissorTest:di,activeTexture:fi,bindTexture:pi,unbindTexture:F,compressedTexImage2D:mi,compressedTexImage3D:le,texImage2D:v,texImage3D:z,pixelStorei:tt,getParameter:st,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Ut,texStorage3D:E,texSubImage2D:ce,texSubImage3D:mt,compressedTexSubImage2D:be,compressedTexSubImage3D:Dt,scissor:ot,viewport:dt,reset:ct}}function Fv(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u=new Set;let d;const f=new WeakMap,_=new Set,S=new FinalizationRegistry(E=>_.delete(E));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return p?new OffscreenCanvas(E,v):hr("canvas")}function y(E,v,z){let st=1;const tt=Ut(E);if((tt.width>z||tt.height>z)&&(st=z/Math.max(tt.width,tt.height)),st<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ot=Math.floor(st*tt.width),dt=Math.floor(st*tt.height);d===void 0&&(d=m(ot,dt));const K=v?m(ot,dt):d;return K.width=ot,K.height=dt,K.getContext("2d").drawImage(E,0,0,ot,dt),It("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+dt+")."),K}else return"data"in E&&It("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function R(E){return E.generateMipmaps}function T(E){s.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,v,z,st,tt,ot=!1){if(E!==null){if(s[E]!==void 0)return s[E];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let dt;st&&(dt=t.get("EXT_texture_norm16"),dt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===s.RED&&(z===s.FLOAT&&(K=s.R32F),z===s.HALF_FLOAT&&(K=s.R16F),z===s.UNSIGNED_BYTE&&(K=s.R8),z===s.UNSIGNED_SHORT&&dt&&(K=dt.R16_EXT),z===s.SHORT&&dt&&(K=dt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.R8UI),z===s.UNSIGNED_SHORT&&(K=s.R16UI),z===s.UNSIGNED_INT&&(K=s.R32UI),z===s.BYTE&&(K=s.R8I),z===s.SHORT&&(K=s.R16I),z===s.INT&&(K=s.R32I)),v===s.RG&&(z===s.FLOAT&&(K=s.RG32F),z===s.HALF_FLOAT&&(K=s.RG16F),z===s.UNSIGNED_BYTE&&(K=s.RG8),z===s.UNSIGNED_SHORT&&dt&&(K=dt.RG16_EXT),z===s.SHORT&&dt&&(K=dt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.RG8UI),z===s.UNSIGNED_SHORT&&(K=s.RG16UI),z===s.UNSIGNED_INT&&(K=s.RG32UI),z===s.BYTE&&(K=s.RG8I),z===s.SHORT&&(K=s.RG16I),z===s.INT&&(K=s.RG32I)),v===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.RGB8UI),z===s.UNSIGNED_SHORT&&(K=s.RGB16UI),z===s.UNSIGNED_INT&&(K=s.RGB32UI),z===s.BYTE&&(K=s.RGB8I),z===s.SHORT&&(K=s.RGB16I),z===s.INT&&(K=s.RGB32I)),v===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),z===s.UNSIGNED_INT&&(K=s.RGBA32UI),z===s.BYTE&&(K=s.RGBA8I),z===s.SHORT&&(K=s.RGBA16I),z===s.INT&&(K=s.RGBA32I)),v===s.RGB&&(z===s.UNSIGNED_SHORT&&dt&&(K=dt.RGB16_EXT),z===s.SHORT&&dt&&(K=dt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),v===s.RGBA){const J=ot?Ea:Yt.getTransfer(tt);z===s.FLOAT&&(K=s.RGBA32F),z===s.HALF_FLOAT&&(K=s.RGBA16F),z===s.UNSIGNED_BYTE&&(K=J===jt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&dt&&(K=dt.RGBA16_EXT),z===s.SHORT&&dt&&(K=dt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(E,v){let z;return E?v===null||v===Vi||v===Ss?z=s.DEPTH24_STENCIL8:v===Ci?z=s.DEPTH32F_STENCIL8:v===lr&&(z=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vi||v===Ss?z=s.DEPTH_COMPONENT24:v===Ci?z=s.DEPTH_COMPONENT32F:v===lr&&(z=s.DEPTH_COMPONENT16),z}function b(E,v){return R(E)===!0||E.isFramebufferTexture&&E.minFilter!==oe&&E.minFilter!==Je?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function O(E){const v=new WeakRef(E);i.get(E).__ref=v,_.add(v),S.register(E,v,v)}function L(E){const v=i.get(E).__ref;v!==void 0&&(_.delete(v),S.unregister(v))}function U(E){$(E.target)}function B(E){D(E.target)}function $(E){E.removeEventListener("dispose",U),L(E),Z(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function D(E){E.removeEventListener("dispose",B),L(E),nt(E)}function W(){for(const E of _){const v=E.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):$(v))}_.clear(),u.clear()}function Z(E){const v=i.get(E);if(v.__webglInit===void 0)return;const z=E.source,st=f.get(z);if(st){const tt=st[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(E),Object.keys(st).length===0&&f.delete(z)}i.remove(E)}function V(E){const v=i.get(E);s.deleteTexture(v.__webglTexture);const z=E.source,st=f.get(z);delete st[v.__cacheKey],a.memory.textures--}function nt(E){const v=i.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();const z=E.depthTexture;if(z&&z.renderTarget===E&&$(z),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let ot=0;ot<v.__webglFramebuffer[tt].length;ot++)s.deleteFramebuffer(v.__webglFramebuffer[tt][ot]);else s.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)s.deleteFramebuffer(v.__webglFramebuffer[tt]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const st=E.textures;for(let tt=0,ot=st.length;tt<ot;tt++){const dt=i.get(st[tt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(st[tt])}i.remove(E)}let Y=0;function et(){Y=0}function it(){return Y}function Tt(E){Y=E}function Ot(){const E=Y;return E>=n.maxTextures&&It("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,E}function Q(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function vt(E,v){const z=i.get(E);if(E.isVideoTexture&&be(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){const st=E.image;if(st===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,E,v);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+v)}function bt(E,v){const z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){Se(z,E,v);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+v)}function Lt(E,v){const z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){Se(z,E,v);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+v)}function xt(E,v){const z=i.get(E);if(E.version>0&&z.__version!==E.version){ii(z,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+v)}const kt={[or]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[$o]:s.MIRRORED_REPEAT},ge={[oe]:s.NEAREST,[$f]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[qa]:s.LINEAR_MIPMAP_NEAREST,[an]:s.LINEAR_MIPMAP_LINEAR},Nt={[Zf]:s.NEVER,[Nu]:s.ALWAYS,[Jf]:s.LESS,[Lu]:s.LEQUAL,[Qf]:s.EQUAL,[Du]:s.GEQUAL,[jf]:s.GREATER,[tp]:s.NOTEQUAL};function te(E,v){if(v.type===Ci&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Je||v.magFilter===qa||v.magFilter===Sr||v.magFilter===an||v.minFilter===Je||v.minFilter===qa||v.minFilter===Sr||v.minFilter===an)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,kt[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,kt[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,kt[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ge[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===oe||v.minFilter!==Sr&&v.minFilter!==an||v.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ne(E,v){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",U),O(v));const st=v.source;let tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));const ot=Q(v);if(ot!==E.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[ot].usedTimes++;const dt=tt[E.__cacheKey];dt!==void 0&&(tt[E.__cacheKey].usedTimes--,dt.usedTimes===0&&V(v)),E.__cacheKey=ot,E.__webglTexture=tt[ot].texture}return z}function Xt(E,v,z){return Math.floor(Math.floor(E/z)/v)}function Ne(E,v,z,st){const ot=E.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,z,st,v.data);else{ot.sort((C,j)=>C.start-j.start);let dt=0;for(let C=1;C<ot.length;C++){const j=ot[dt],q=ot[C],ht=j.start+j.count,at=Xt(q.start,v.width,4),lt=Xt(j.start,v.width,4);q.start<=ht+1&&at===lt&&Xt(q.start+q.count-1,v.width,4)===at?j.count=Math.max(j.count,q.start+q.count-j.start):(++dt,ot[dt]=q)}ot.length=dt+1;const K=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let C=0,j=ot.length;C<j;C++){const q=ot[C],ht=Math.floor(q.start/4),at=Math.ceil(q.count/4),lt=ht%v.width,Rt=Math.floor(ht/v.width),Gt=at,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(s.TEXTURE_2D,0,lt,Rt,Gt,rt,z,st,v.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function Se(E,v,z){let st=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=s.TEXTURE_3D);const tt=ne(E,v),ot=v.source;e.bindTexture(st,E.__webglTexture,s.TEXTURE0+z);const dt=i.get(ot);if(ot.version!==dt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const rt=Yt.getPrimaries(Yt.workingColorSpace),Ct=v.colorSpace===Sn?null:Yt.getPrimaries(v.colorSpace),zt=v.colorSpace===Sn||rt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let J=y(v.image,!1,n.maxTextureSize);J=Dt(v,J);const ct=r.convert(v.format,v.colorSpace),C=r.convert(v.type);let j=w(v.internalFormat,ct,C,v.normalized,v.colorSpace,v.isVideoTexture);te(st,v);let q;const ht=v.mipmaps,at=v.isVideoTexture!==!0,lt=dt.__version===void 0||tt===!0,Rt=ot.dataReady,Gt=b(v,J);if(v.isDepthTexture)j=g(v.format===yn,v.type),lt&&(at?e.texStorage2D(s.TEXTURE_2D,1,j,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,ct,C,null));else if(v.isDataTexture)if(ht.length>0){at&&lt&&e.texStorage2D(s.TEXTURE_2D,Gt,j,ht[0].width,ht[0].height);for(let rt=0,Ct=ht.length;rt<Ct;rt++)q=ht[rt],at?Rt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,q.width,q.height,ct,C,q.data):e.texImage2D(s.TEXTURE_2D,rt,j,q.width,q.height,0,ct,C,q.data);v.generateMipmaps=!1}else at?(lt&&e.texStorage2D(s.TEXTURE_2D,Gt,j,J.width,J.height),Rt&&Ne(v,J,ct,C)):e.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,ct,C,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){at&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,j,ht[0].width,ht[0].height,J.depth);for(let rt=0,Ct=ht.length;rt<Ct;rt++)if(q=ht[rt],v.format!==Pi)if(ct!==null)if(at){if(Rt)if(v.layerUpdates.size>0){const zt=Lh(q.width,q.height,v.format,v.type);for(const _t of v.layerUpdates){const ee=q.data.subarray(_t*zt/q.data.BYTES_PER_ELEMENT,(_t+1)*zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,_t,q.width,q.height,1,ct,ee)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,J.depth,ct,q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,j,q.width,q.height,J.depth,0,q.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,J.depth,ct,C,q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,j,q.width,q.height,J.depth,0,ct,C,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(s.TEXTURE_2D,Gt,j,ht[0].width,ht[0].height);for(let rt=0,Ct=ht.length;rt<Ct;rt++)q=ht[rt],v.format!==Pi?ct!==null?at?Rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,q.width,q.height,ct,q.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,j,q.width,q.height,0,q.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Rt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,q.width,q.height,ct,C,q.data):e.texImage2D(s.TEXTURE_2D,rt,j,q.width,q.height,0,ct,C,q.data)}else if(v.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,j,J.width,J.height,J.depth),Rt)if(v.layerUpdates.size>0){const rt=Lh(J.width,J.height,v.format,v.type);for(const Ct of v.layerUpdates){const zt=J.data.subarray(Ct*rt/J.data.BYTES_PER_ELEMENT,(Ct+1)*rt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,J.width,J.height,1,ct,C,zt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,C,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,ct,C,J.data);else if(v.isData3DTexture)at?(lt&&e.texStorage3D(s.TEXTURE_3D,Gt,j,J.width,J.height,J.depth),Rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,C,J.data)):e.texImage3D(s.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,ct,C,J.data);else if(v.isFramebufferTexture){if(lt)if(at)e.texStorage2D(s.TEXTURE_2D,Gt,j,J.width,J.height);else{let rt=J.width,Ct=J.height;for(let zt=0;zt<Gt;zt++)e.texImage2D(s.TEXTURE_2D,zt,j,rt,Ct,0,ct,C,null),rt>>=1,Ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){const rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),J.parentNode!==rt){rt.appendChild(J),u.add(v),rt.onpaint=Ct=>{const zt=Ct.changedElements;for(const _t of u)zt.includes(_t.image)&&(_t.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const zt=s.RGBA,_t=s.RGBA,ee=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,zt,_t,ee,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&lt){const rt=Ut(ht[0]);e.texStorage2D(s.TEXTURE_2D,Gt,j,rt.width,rt.height)}for(let rt=0,Ct=ht.length;rt<Ct;rt++)q=ht[rt],at?Rt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ct,C,q):e.texImage2D(s.TEXTURE_2D,rt,j,ct,C,q);v.generateMipmaps=!1}else if(at){if(lt){const rt=Ut(J);e.texStorage2D(s.TEXTURE_2D,Gt,j,rt.width,rt.height)}Rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,C,J)}else e.texImage2D(s.TEXTURE_2D,0,j,ct,C,J);R(v)&&v.mipmapsAutoUpdate===!0&&T(st),dt.__version=ot.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ii(E,v,z){if(v.image.length!==6)return;const st=ne(E,v),tt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const ot=i.get(tt);if(tt.version!==ot.__version||st===!0){e.activeTexture(s.TEXTURE0+z);const dt=Yt.getPrimaries(Yt.workingColorSpace),K=v.colorSpace===Sn?null:Yt.getPrimaries(v.colorSpace),J=v.colorSpace===Sn||dt===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ct=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,j=[];for(let _t=0;_t<6;_t++)!ct&&!C?j[_t]=y(v.image[_t],!0,n.maxCubemapSize):j[_t]=C?v.image[_t].image:v.image[_t],j[_t]=Dt(v,j[_t]);const q=j[0],ht=r.convert(v.format,v.colorSpace),at=r.convert(v.type);let lt=w(v.internalFormat,ht,at,v.normalized,v.colorSpace);const Rt=v.isVideoTexture!==!0,Gt=ot.__version===void 0||st===!0,rt=tt.dataReady;let Ct=b(v,q);te(s.TEXTURE_CUBE_MAP,v);let zt;if(v.isDepthTexture){if(lt=g(v.format===yn,v.type),Gt)if(Rt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let _t=0;_t<6;_t++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,q.width,q.height,0,ht,at,null)}else if(ct){Rt&&Gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,lt,q.width,q.height);for(let _t=0;_t<6;_t++){zt=j[_t].mipmaps;for(let ee=0;ee<zt.length;ee++){const Re=zt[ee];v.format!==Pi?ht!==null?Rt?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,0,0,Re.width,Re.height,ht,Re.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,lt,Re.width,Re.height,0,Re.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,0,0,Re.width,Re.height,ht,at,Re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,lt,Re.width,Re.height,0,ht,at,Re.data)}}}else{if(zt=v.mipmaps,Rt&&Gt){zt.length>0&&Ct++;const _t=Ut(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,lt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(C){Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,j[_t].width,j[_t].height,ht,at,j[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,j[_t].width,j[_t].height,0,ht,at,j[_t].data);for(let ee=0;ee<zt.length;ee++){const un=zt[ee].image[_t].image;Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,0,0,un.width,un.height,ht,at,un.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,lt,un.width,un.height,0,ht,at,un.data)}}else{Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ht,at,j[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,ht,at,j[_t]);for(let ee=0;ee<zt.length;ee++){const Re=zt[ee];Rt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,0,0,ht,at,Re.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,lt,ht,at,Re.image[_t])}}}R(v)&&v.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),ot.__version=tt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ue(E,v,z,st,tt,ot){const dt=r.convert(z.format,z.colorSpace),K=r.convert(z.type),J=w(z.internalFormat,dt,K,z.normalized,z.colorSpace),ct=i.get(v),C=i.get(z);if(C.__renderTarget=v,!ct.__hasExternalTextures){const j=Math.max(1,v.width>>ot),q=Math.max(1,v.height>>ot);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,J,j,q,v.depth,0,dt,K,null):e.texImage2D(tt,ot,J,j,q,0,dt,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),mt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,tt,C.__webglTexture,0,ce(v)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,tt,C.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Di(E,v,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const st=v.depthTexture,tt=st&&st.isDepthTexture?st.type:null,ot=g(v.stencilBuffer,tt),dt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce(v),ot,v.width,v.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce(v),ot,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ot,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,E)}else{const st=v.textures;for(let tt=0;tt<st.length;tt++){const ot=st[tt],dt=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),J=w(ot.internalFormat,dt,K,ot.normalized,ot.colorSpace);mt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce(v),J,v.width,v.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce(v),J,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(E,v,z){const st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=i.get(v.depthTexture);tt.__renderTarget=v;const ot=st?v.depthTexture.image[0]:v.depthTexture.image;(!tt.__webglTexture||ot.width!==v.width||ot.height!==v.height)&&(ot.width=v.width,ot.height=v.height,v.depthTexture.needsUpdate=!0),st?xt(v.depthTexture,0):vt(v.depthTexture,0);const dt=tt.__webglTexture,K=ce(v),J=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,ct=v.depthTexture.format===yn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===wn)mt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,J,dt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,ct,J,dt,0);else if(v.depthTexture.format===yn)mt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,J,dt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,ct,J,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function di(E){const v=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const st=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",tt)};st.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=st}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let st=0;st<6;st++)Ae(v.__webglFramebuffer[st],E,st);else E.texture.mipmaps.length>0?Ae(v.__webglFramebuffer[0],E,0):Ae(v.__webglFramebuffer,E,0);else if(z){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=s.createRenderbuffer(),Di(v.__webglDepthbuffer[st],E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ot)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Di(v.__webglDepthbuffer,E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function fi(E,v,z){const st=i.get(E);v!==void 0&&ue(st.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&di(E)}function pi(E){const v=E.texture,z=i.get(E),st=i.get(v);E.addEventListener("dispose",B),O(E);const tt=E.textures,ot=E.isWebGLCubeRenderTarget===!0,dt=tt.length>1;if(dt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=v.version,a.memory.textures++),ot){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let J=0;J<v.mipmaps.length;J++)z.__webglFramebuffer[K][J]=s.createFramebuffer()}else z.__webglFramebuffer[K]=s.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)z.__webglFramebuffer[K]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(dt)for(let K=0,J=tt.length;K<J;K++){const ct=i.get(tt[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&mt(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){const J=tt[K];z.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const ct=r.convert(J.format,J.colorSpace),C=r.convert(J.type),j=w(J.internalFormat,ct,C,J.normalized,J.colorSpace,E.isXRRenderTarget===!0),q=ce(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,q,j,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,z.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Di(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),te(s.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ue(z.__webglFramebuffer[K][J],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else ue(z.__webglFramebuffer[K],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);R(v)?T(s.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let K=0,J=tt.length;K<J;K++){const ct=tt[K],C=i.get(ct);let j=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,C.__webglTexture),te(j,ct),ue(z.__webglFramebuffer,E,ct,s.COLOR_ATTACHMENT0+K,j,0),R(ct)&&T(j)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),te(K,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ue(z.__webglFramebuffer[J],E,v,s.COLOR_ATTACHMENT0,K,J);else ue(z.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,K,0);R(v)?T(K):v.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&di(E)}function F(E){const v=E.textures;for(let z=0,st=v.length;z<st;z++){const tt=v[z];if(R(tt)&&tt.mipmapsAutoUpdate===!0){const ot=A(E),dt=i.get(tt).__webglTexture;e.bindTexture(ot,dt),T(ot),e.unbindTexture()}}}const mi=[];function le(E){if(E.samples>0){if(mt(E)===!1){const v=E.textures,z=E.width,st=E.height;let tt=s.COLOR_BUFFER_BIT;const ot=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(E),K=v.length>1;if(K)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);const C=i.get(v[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,z,st,0,0,z,st,tt,s.NEAREST),l===!0&&(mi.length=0,mi.push(s.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&mi.push(ot),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mi))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);const C=i.get(v[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,C,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ce(E){return Math.min(n.maxSamples,E.samples)}function mt(E){const v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Dt(E,v){const z=E.colorSpace,st=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==ya&&z!==Sn&&(Yt.getTransfer(z)===jt?(st!==Pi||tt!==li)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",z)),v}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Ot,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=Tt,this.setTexture2D=vt,this.setTexture2DArray=bt,this.setTexture3D=Lt,this.setTextureCube=xt,this.rebindTextures=fi,this.setupRenderTarget=pi,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=di,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=mt,this.dispose=W}function Ov(s,t){function e(i,n=Sn){let r;const a=Yt.getTransfer(n);if(i===li)return s.UNSIGNED_BYTE;if(i===rc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Au)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ru)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tu)return s.BYTE;if(i===wu)return s.SHORT;if(i===lr)return s.UNSIGNED_SHORT;if(i===sc)return s.INT;if(i===Vi)return s.UNSIGNED_INT;if(i===Ci)return s.FLOAT;if(i===je)return s.HALF_FLOAT;if(i===Cu)return s.ALPHA;if(i===Pu)return s.RGB;if(i===Pi)return s.RGBA;if(i===wn)return s.DEPTH_COMPONENT;if(i===yn)return s.DEPTH_STENCIL;if(i===oc)return s.RED;if(i===lc)return s.RED_INTEGER;if(i===zn)return s.RG;if(i===cc)return s.RG_INTEGER;if(i===hc)return s.RGBA_INTEGER;if(i===la||i===ca||i===ha||i===ua)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qo||i===Yo||i===Ko||i===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jo||i===Qo||i===jo||i===tl||i===el||i===Sa||i===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jo||i===Qo)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tl)return r.COMPRESSED_R11_EAC;if(i===el)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sa)return r.COMPRESSED_RG11_EAC;if(i===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nl||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ll)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===vl||i===xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_l)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ml||i===Sl||i===ba||i===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new qu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Qe({vertexShader:Bv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gv extends Hn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const S=typeof XRWebGLBinding<"u",p=new zv,m={},y=e.getContextAttributes();let R=null,T=null;const A=[],w=[],g=new At;let b=null,O=null;const L=new _i;L.viewport=new fe;const U=new _i;U.viewport=new fe;const B=[L,U],$=new Zp;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=A[Q];return vt===void 0&&(vt=new io,A[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=A[Q];return vt===void 0&&(vt=new io,A[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=A[Q];return vt===void 0&&(vt=new io,A[Q]=vt),vt.getHandSpace()};function Z(Q){const vt=w.indexOf(Q.inputSource);if(vt===-1)return;const bt=A[vt];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,c||a),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<A.length;Q++){const vt=w[Q];vt!==null&&(w[Q]=null,A[Q].disconnect(vt))}D=null,W=null,p.reset();for(const Q in m)delete m[Q];if(t.setRenderTarget(R),f=null,d=null,u=null,n=null,T=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),O!==null){const Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(R=t.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",V),n.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Lt=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?yn:wn,Lt=y.stencil?Ss:Vi);const kt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(kt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new ti(d.textureWidth,d.textureHeight,{format:Pi,type:li,depthTexture:new bs(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,bt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new ti(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ot.setContext(n),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Q){for(let vt=0;vt<Q.removed.length;vt++){const bt=Q.removed[vt],Lt=w.indexOf(bt);Lt>=0&&(w[Lt]=null,A[Lt].disconnect(bt))}for(let vt=0;vt<Q.added.length;vt++){const bt=Q.added[vt];let Lt=w.indexOf(bt);if(Lt===-1){for(let kt=0;kt<A.length;kt++)if(kt>=w.length){w.push(bt),Lt=kt;break}else if(w[kt]===null){w[kt]=bt,Lt=kt;break}if(Lt===-1)break}const xt=A[Lt];xt&&xt.connect(bt)}}function Y(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let vt=Q.near,bt=Q.far;p.texture!==null&&(p.depthNear>0&&(vt=p.depthNear),p.depthFar>0&&(bt=p.depthFar)),$.near=U.near=L.near=vt,$.far=U.far=L.far=bt,(D!==$.near||W!==$.far)&&(n.updateRenderState({depthNear:$.near,depthFar:$.far}),D=$.near,W=$.far),$.layers.mask=Q.layers.mask|6,L.layers.mask=$.layers.mask&-5,U.layers.mask=$.layers.mask&-3;const Lt=Q.parent,xt=$.cameras;Y($,Lt);for(let kt=0;kt<xt.length;kt++)Y(xt[kt],Lt);$.projectionMatrix.copy(L.projectionMatrix),$.projectionMatrixInverse.copy(L.projectionMatrixInverse),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,$,Lt)};function et(Q,vt,bt){bt===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=El*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(Q){return m[Q]};let it=null;function Tt(Q,vt){if(h=vt.getViewerPose(c||a),_=vt,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let Lt=!1;bt.length!==$.cameras.length&&($.cameras.length=0,Lt=!0);for(let Nt=0;Nt<bt.length;Nt++){const te=bt[Nt];let ne=null;if(f!==null)ne=f.getViewport(te);else{const Ne=u.getViewSubImage(d,te);ne=Ne.viewport,Nt===0&&(t.setRenderTargetTextures(T,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(T))}let Xt=B[Nt];Xt===void 0&&(Xt=new _i,Xt.layers.enable(Nt),Xt.viewport=new fe,B[Nt]=Xt),Xt.matrix.fromArray(te.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(te.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ne.x,ne.y,ne.width,ne.height),Nt===0&&($.matrix.copy(Xt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Lt===!0&&$.cameras.push(Xt)}const xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&S){u=i.getBinding();const Nt=u.getDepthInformation(bt[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,n.renderState)}if(xt&&xt.includes("camera-access")&&S){t.state.unbindTexture(),u=i.getBinding();for(let Nt=0;Nt<bt.length;Nt++){const te=bt[Nt].camera;if(te){let ne=m[te];ne||(ne=new qu,m[te]=ne);const Xt=u.getCameraImage(te);ne.sourceTexture=Xt}}}}for(let bt=0;bt<A.length;bt++){const Lt=w[bt],xt=A[bt];Lt!==null&&xt!==void 0&&xt.update(Lt,vt,c||a)}it&&it(Q,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),_=null}const Ot=new Qu;Ot.setAnimationLoop(Tt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const Hv=new Jt,ld=new Ft;ld.set(-1,0,0,0,1,0,0,0,1);function Vv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Yu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,R,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===He&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===He&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),R=y.envMap,T=y.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ld),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Wv(s,t,e,i){let n={},r={};function a(y,R){const T=R.program;i.uniformBlockBinding(y,T,n[y.id])}function o(y,R){let T=n[y.id];T===void 0&&(_(y),T=l(y),n[y.id]=T,y.addEventListener("dispose",p));const A=R.program;i.updateUBOMapping(y,A);const w=t.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){const R=s.createBuffer(),T=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),R}function c(y){const R=n[y.id],T=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let w=0,g=T.length;w<g;w++){const b=T[w];if(Array.isArray(b))for(let O=0,L=b.length;O<L;O++)h(b[O],w,O,A);else h(b,w,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,R,T,A){if(d(y,R,T,A)===!0){const w=y.__offset,g=y.value;if(Array.isArray(g)){let b=0;for(let O=0;O<g.length;O++){const L=g[O],U=S(L,!0);u(L,y.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,y.__data)}}function u(y,R,T){typeof y=="number"||typeof y=="boolean"?R[T]=y:y.isMatrix3?(R[T]=y.elements[0],R[T+1]=y.elements[1],R[T+2]=y.elements[2],R[T+3]=0,R[T+4]=y.elements[3],R[T+5]=y.elements[4],R[T+6]=y.elements[5],R[T+7]=0,R[T+8]=y.elements[6],R[T+9]=y.elements[7],R[T+10]=y.elements[8],R[T+11]=0):ArrayBuffer.isView(y)?R.set(y.subarray(0,R.length-T),T):y.toArray(R,T)}function d(y,R,T,A){const w=y.value,g=R+"_"+T;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);const b=A[g];let O=!1;for(let L=0;L<w.length;L++)f(w[L],b,L)===!0&&(O=!0);return O}return f(w,A,g)}function f(y,R,T){if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{const A=R[T];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function _(y){const R=y.uniforms;let T=0;const A=16;for(let g=0,b=R.length;g<b;g++){const O=Array.isArray(R[g])?R[g]:[R[g]];for(let L=0,U=O.length;L<U;L++){const B=O[L],$=Array.isArray(B.value)?B.value:[B.value],D=Array.isArray(R[g])||Array.isArray(B.value);let W=T;for(let V=0,nt=$.length;V<nt;V++){const Y=$[V],et=S(Y,D),it=T%A,Tt=it%et.boundary,Ot=it+Tt;T+=Tt,Ot!==0&&A-Ot<et.storage&&(T+=A-Ot),V===0&&(W=T),T+=et.storage}const Z=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Z((T-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}const w=T%A;return w>0&&(T+=A-w),y.__size=T,y.__cache={},this}function S(y,R){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=16,T.storage=48):y.isMatrix4?(T.boundary=16,T.storage=64):y.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):It("WebGLRenderer: Unsupported uniform value type.",y),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function p(y){const R=y.target;R.removeEventListener("dispose",p),s.deleteBuffer(n[R.id]),delete n[R.id],delete r[R.id]}function m(){for(const y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:m}}const Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function $v(){return Ii===null&&(Ii=new pc(Xv,16,16,zn,je),Ii.name="DFG_LUT",Ii.minFilter=Je,Ii.magFilter=Je,Ii.wrapS=Mi,Ii.wrapT=Mi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class qv{constructor(t={}){const{canvas:e=ip(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=f,p=new Set([hc,cc,lc]),m=new Set([li,Vi,lr,Ss,rc,ac]),y=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const g=[],b=[];let O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,B=null,$=null,D=null,W=null;this._outputColorSpace=xe;let Z=0,V=0,nt=null,Y=-1,et=null;const it=new fe,Tt=new fe;let Ot=null;const Q=new pt(0);let vt=0,bt=e.width,Lt=e.height,xt=1,kt=null,ge=null;const Nt=new fe(0,0,bt,Lt),te=new fe(0,0,bt,Lt);let ne=!1;const Xt=new ur,Ne=new mc;let Se=!1,ii=!1;const ue=new Jt,Di=new I,Ae=new fe,di={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fi=!1;function pi(){return nt===null?xt:1}let F=i;function mi(M,N){return e.getContext(M,N)}let le,ce,mt,be,Dt,Ut,E,v,z,st,tt,ot,dt,K,J,ct,C,j,q,ht,at,lt,Rt;try{const M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),F===null){const N="webgl2";if(F=mi(N,M),F===null)throw mi(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(M){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Zt("WebGLRenderer: "+M.message),M}function Gt(){le=new Z0(F),le.init(),at=new Ov(F,le),ce=new k0(F,le,t,at),mt=new Uv(F,le),ce.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),$=F.createFramebuffer(),D=F.createFramebuffer(),W=F.createFramebuffer(),be=new j0(F),Dt=new Sv,Ut=new Fv(F,le,mt,Dt,ce,at,be),E=new K0(L),v=new em(F),lt=new O0(F,v),z=new J0(F,v,be,lt),st=new e_(F,z,v,lt,be),j=new t_(F,ce,Ut),J=new z0(Dt),tt=new Mv(L,E,le,ce,lt,J),ot=new Vv(L,Dt),dt=new yv,K=new Cv(le),C=new F0(L,E,mt,st,_,l),ct=new Iv(L,st,ce),Rt=new Wv(F,be,ce,mt),q=new B0(F,le,be),ht=new Q0(F,le,be),be.programs=tt.programs,L.capabilities=ce,L.extensions=le,L.properties=Dt,L.renderLists=dt,L.shadowMap=ct,L.state=mt,L.info=be}S!==li&&(O=new n_(S,e.width,e.height,o,n,r));const rt=new Gv(L,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(M){M!==void 0&&(xt=M,this.setSize(bt,Lt,!1))},this.getSize=function(M){return M.set(bt,Lt)},this.setSize=function(M,N,X=!0){if(rt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=M,Lt=N,e.width=Math.floor(M*xt),e.height=Math.floor(N*xt),X===!0&&(e.style.width=M+"px",e.style.height=N+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(bt*xt,Lt*xt).floor()},this.setDrawingBufferSize=function(M,N,X){bt=M,Lt=N,xt=X,e.width=Math.floor(M*X),e.height=Math.floor(N*X),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(S===li){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(Nt)},this.setViewport=function(M,N,X,k){M.isVector4?Nt.set(M.x,M.y,M.z,M.w):Nt.set(M,N,X,k),mt.viewport(it.copy(Nt).multiplyScalar(pi()).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,N,X,k){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,N,X,k),mt.scissor(Tt.copy(te).multiplyScalar(pi()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){mt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){kt=M},this.setTransparentSort=function(M){ge=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,X=!0){let k=0;if(M){let G=!1;if(nt!==null){const ft=nt.texture.format;G=p.has(ft)}if(G){const ft=nt.texture.type,St=m.has(ft),ut=C.getClearColor(),Mt=C.getClearAlpha(),wt=ut.r,Bt=ut.g,$t=ut.b;St?(y[0]=wt,y[1]=Bt,y[2]=$t,y[3]=Mt,F.clearBufferuiv(F.COLOR,0,y)):(R[0]=wt,R[1]=Bt,R[2]=$t,R[3]=Mt,F.clearBufferiv(F.COLOR,0,R))}else k|=F.COLOR_BUFFER_BIT}N&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),C.dispose(),dt.dispose(),K.dispose(),Ut.dispose(),Dt.dispose(),E.dispose(),st.dispose(),z.dispose(),lt.dispose(),Rt.dispose(),tt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Nc),rt.removeEventListener("sessionend",Ic),Rn.stop()};function Ct(M){M.preventDefault(),Ta("WebGLRenderer: Context Lost."),U=!0}function zt(){Ta("WebGLRenderer: Context Restored."),U=!1;const M=be.autoReset,N=ct.enabled,X=ct.autoUpdate,k=ct.needsUpdate,G=ct.type;Gt(),be.autoReset=M,ct.enabled=N,ct.autoUpdate=X,ct.needsUpdate=k,ct.type=G}function _t(M){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ee(M){const N=M.target;N.removeEventListener("dispose",ee),Re(N)}function Re(M){un(M),Dt.remove(M)}function un(M){const N=Dt.get(M).programs;N!==void 0&&(N.forEach(function(X){tt.releaseProgram(X)}),M.isShaderMaterial&&tt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,X,k,G,ft){N===null&&(N=di);const St=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=xf(M,N,X,k,G);mt.setMaterial(k,St);let Mt=X.index,wt=1;if(k.wireframe===!0){if(Mt=z.getWireframeAttribute(X),Mt===void 0)return;wt=2}const Bt=X.drawRange,$t=X.attributes.position;let yt=Bt.start*wt,qt=(Bt.start+Bt.count)*wt;ft!==null&&(yt=Math.max(yt,ft.start*wt),qt=Math.min(qt,(ft.start+ft.count)*wt)),Mt!==null?(yt=Math.max(yt,0),qt=Math.min(qt,Mt.count)):$t!=null&&(yt=Math.max(yt,0),qt=Math.min(qt,$t.count));const _e=qt-yt;if(_e<0||_e===1/0)return;lt.setup(G,k,ut,X,Mt);let re,se=q;if(Mt!==null&&(re=v.get(Mt),se=ht,se.setIndex(re)),G.isMesh)k.wireframe===!0?(mt.setLineWidth(k.wireframeLinewidth*pi()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(G.isLine){let Oe=k.linewidth;Oe===void 0&&(Oe=1),mt.setLineWidth(Oe*pi()),G.isLineSegments?se.setMode(F.LINES):G.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else G.isPoints?se.setMode(F.POINTS):G.isSprite&&se.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Oe=G._multiDrawStarts,Et=G._multiDrawCounts,We=G._multiDrawCount,Qt=Mt?v.get(Mt).bytesPerElement:1,Cn=Dt.get(k).currentProgram.getUniforms();for(let Be=0;Be<We;Be++)Cn.setValue(F,"_gl_DrawID",Be),se.render(Oe[Be]/Qt,Et[Be])}else if(G.isInstancedMesh)se.renderInstances(yt,_e,G.count);else if(X.isInstancedBufferGeometry){const Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Oe);se.renderInstances(yt,_e,Et)}else se.render(yt,_e)};function Dc(M,N,X,k){B!==null&&M.isNodeMaterial&&B.setObject(k,M),Se===!0&&J.setState(M,X,!1),M.transparent===!0&&M.side===zi&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,Ds(M,N,k),M.side=Tn,M.needsUpdate=!0,Ds(M,N,k),M.side=zi):Ds(M,N,k)}this.compile=function(M,N,X=null){X===null&&(X=M),B!==null&&B.renderStart(M,N,X),w=K.get(X),w.init(N),b.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==X&&M.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),ii=this.localClippingEnabled,Se=J.init(this.clippingPlanes,ii),Se===!0&&J.setGlobalState(this.clippingPlanes,N),B!==null&&ct.render(w.state.shadowsArray,X,N);const k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const ut=ft[St];Dc(ut,X,N,G),k.add(ut)}else Dc(ft,X,N,G),k.add(ft)}),w=b.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(M,N,X=null){const k=this.compile(M,N,X);return new Promise(G=>{function ft(){if(k.forEach(function(St){const Mt=Dt.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&k.delete(St)}),k.size===0){G(M);return}setTimeout(ft,10)}le.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Va=null;function _f(M){Va&&Va(M)}function Nc(){Rn.stop()}function Ic(){Rn.start()}const Rn=new Qu;Rn.setAnimationLoop(_f),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(M){Va=M,rt.setAnimationLoop(M),M===null?Rn.stop():Rn.start()},rt.addEventListener("sessionstart",Nc),rt.addEventListener("sessionend",Ic),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(M,N);const X=rt.enabled===!0&&rt.isPresenting===!0,k=O!==null&&(nt===null||X)&&O.begin(L,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,N,nt),w=K.get(M,b.length),w.init(N),w.state.textureUnits=Ut.getTextureUnits(),b.push(w),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Ne.setFromArrayCamera(N):Xt.setFromProjectionMatrix(ue,Li,N.reversedDepth),ii=this.localClippingEnabled,Se=J.init(this.clippingPlanes,ii),A=dt.get(M,g.length),A.init(),g.push(A),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const St=L.xr.getDepthSensingMesh();St!==null&&Wa(St,N,-1/0,L.sortObjects)}Wa(M,N,0,L.sortObjects),A.finish(),B!==null&&B.updateLights(w.state.lightsArray),L.sortObjects===!0&&A.sort(kt,ge),fi=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,fi&&C.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),Se===!0&&J.beginShadows();const G=w.state.shadowsArray;if(ct.render(G,M,N),Se===!0&&J.endShadows(),(k&&O.hasRenderPass())===!1){const St=A.opaque,ut=A.transmissive;if(w.setupLights(),N.isArrayCamera){const Mt=N.cameras;if(ut.length>0)for(let wt=0,Bt=Mt.length;wt<Bt;wt++){const $t=Mt[wt];Fc(St,ut,M,$t)}fi&&C.render(M);for(let wt=0,Bt=Mt.length;wt<Bt;wt++){const $t=Mt[wt];Uc(A,M,$t,$t.viewport)}}else ut.length>0&&Fc(St,ut,M,N),fi&&C.render(M),Uc(A,M,N)}nt!==null&&V===0&&(Ut.updateMultisampleRenderTarget(nt),Ut.updateRenderTargetMipmap(nt)),k&&O.end(L),M.isScene===!0&&M.onAfterRender(L,M,N),lt.resetDefaultState(),Y=-1,et=null,b.pop(),b.length>0?(w=b[b.length-1],Ut.setTextureUnits(w.state.textureUnits),Se===!0&&J.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,B!==null&&B.renderEnd()};function Wa(M,N,X,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){const St=N.isArrayCamera?Ne:Xt;if(!M.frustumCulled||M.intersectsFrustum(St)){k&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);const ut=st.update(M),Mt=M.material;Mt.visible&&A.push(M,ut,Mt,X,Ae.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){const St=N.isArrayCamera?Ne:Xt;if(!M.frustumCulled||M.intersectsFrustum(St)){const ut=st.update(M),Mt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ae.copy(ut.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(Mt)){const wt=ut.groups;for(let Bt=0,$t=wt.length;Bt<$t;Bt++){const yt=wt[Bt],qt=Mt[yt.materialIndex];qt&&qt.visible&&A.push(M,ut,qt,X,Ae.z,yt,N)}}else Mt.visible&&A.push(M,ut,Mt,X,Ae.z,null,N)}}}const ft=M.children;for(let St=0,ut=ft.length;St<ut;St++)Wa(ft[St],N,X,k)}function Uc(M,N,X,k){const{opaque:G,transmissive:ft,transparent:St}=M;w.setupLightsView(X),Se===!0&&J.setGlobalState(L.clippingPlanes,X),k&&mt.viewport(it.copy(k)),G.length>0&&xr(G,N,X),ft.length>0&&xr(ft,N,X),St.length>0&&xr(St,N,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Fc(M,N,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const yt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ti(1,1,{generateMipmaps:!0,type:yt?je:li,minFilter:an,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const ft=w.state.transmissionRenderTarget[k.id],St=k.viewport||it;ft.setSize(St.z*L.transmissionResolutionScale,St.w*L.transmissionResolutionScale);const ut=L.getRenderTarget(),Mt=L.getActiveCubeFace(),wt=L.getActiveMipmapLevel();L.setRenderTarget(ft),L.getClearColor(Q),vt=L.getClearAlpha(),vt<1&&L.setClearColor(16777215,.5),L.clear(),fi&&C.render(X);const Bt=L.toneMapping;L.toneMapping=ln;const $t=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Se===!0&&J.setGlobalState(L.clippingPlanes,k),xr(M,X,k),Ut.updateMultisampleRenderTarget(ft),Ut.updateRenderTargetMipmap(ft),le.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let qt=0,_e=N.length;qt<_e;qt++){const re=N[qt],{object:se,geometry:Oe,material:Et,group:We}=re;if(Et.side===zi&&se.layers.test(k.layers)){const Qt=Et.side;Et.side=He,Et.needsUpdate=!0,Oc(se,X,k,Oe,Et,We),Et.side=Qt,Et.needsUpdate=!0,yt=!0}}yt===!0&&(Ut.updateMultisampleRenderTarget(ft),Ut.updateRenderTargetMipmap(ft))}L.setRenderTarget(ut,Mt,wt),L.setClearColor(Q,vt),$t!==void 0&&(k.viewport=$t),L.toneMapping=Bt}function xr(M,N,X){const k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ft=M.length;G<ft;G++){const St=M[G],{object:ut,geometry:Mt,group:wt}=St;let Bt=St.material;Bt.allowOverride===!0&&k!==null&&(Bt=k),ut.layers.test(X.layers)&&Oc(ut,N,X,Mt,Bt,wt)}}function Oc(M,N,X,k,G,ft){B!==null&&G.isNodeMaterial&&B.setObject(M,G),M.onBeforeRender(L,N,X,k,G,ft),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(L,N,X,k,M,ft),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,L.renderBufferDirect(X,N,k,G,M,ft),G.side=Tn,G.needsUpdate=!0,L.renderBufferDirect(X,N,k,G,M,ft),G.side=zi):L.renderBufferDirect(X,N,k,G,M,ft),M.onAfterRender(L,N,X,k,G,ft)}function Bc(M){let N=0;for(const X of M)X.texture!==null&&N++;return N}function Ds(M,N,X){N.isScene!==!0&&(N=di);const k=Dt.get(M),G=w.state.lights,ft=w.state.shadowsArray,St=G.state.version,ut=tt.getParameters(M,G.state,ft,N,X,w.state.lightProbeGridArray),Mt=tt.getProgramCacheKey(ut);let wt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=E.get(M.envMap||k.environment,Bt),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",ee),wt=new Map,k.programs=wt,k.programVariants=new Map);let $t=wt.get(Mt);if($t!==void 0){if(k.currentProgram===$t&&k.lightsStateVersion===St)return zc(M,ut),$t}else ut.uniforms=tt.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,X,ut),M.onBeforeCompile(ut,L),$t=tt.acquireProgram(ut,Mt),wt.set(Mt,$t),k.uniforms=ut.uniforms;const yt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=J.uniform),zc(M,ut),k.needsLights=Sf(M),k.lightsStateVersion=St,k.needsLights&&(yt.ambientLightColor.value=G.state.ambient,yt.lightProbe.value=G.state.probe,yt.sunLights.value=G.state.sun,yt.sunLightShadows.value=G.state.sunShadow,yt.directionalLights.value=G.state.directional,yt.directionalLightShadows.value=G.state.directionalShadow,yt.spotLights.value=G.state.spot,yt.spotLightShadows.value=G.state.spotShadow,yt.rectAreaLights.value=G.state.rectArea,yt.ltc_1.value=G.state.rectAreaLTC1,yt.ltc_2.value=G.state.rectAreaLTC2,yt.pointLights.value=G.state.point,yt.pointLightShadows.value=G.state.pointShadow,yt.hemisphereLights.value=G.state.hemi,yt.sunShadowMatrix.value=G.state.sunShadowMatrix,yt.sunShadowCascade.value=G.state.sunShadowCascade,yt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,yt.spotLightMatrix.value=G.state.spotLightMatrix,yt.spotLightMap.value=G.state.spotLightMap,yt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Bc(w.state.lightProbeGridArray),k.currentProgram=$t,k.uniformsList=null,$t}function vf(M,N,X,k,G){const ft=Dt.get(M),St=ft.currentProgram.id+","+k+","+G;let ut=ft.programVariants.get(St);return ut===void 0?(ut=Ds(M,N,X),ft.programVariants.set(St,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=k,ft.toneMapping=G),ut}function kc(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=fa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function zc(M,N){const X=Dt.get(M);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function xf(M,N,X,k,G){N.isScene!==!0&&(N=di),Ut.resetTextureUnits();const ft=N.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,ut=nt===null?L.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Yt.workingColorSpace,Mt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,wt=E.get(k.envMap||St,Mt),Bt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!X.morphAttributes.position,qt=!!X.morphAttributes.normal,_e=!!X.morphAttributes.color;let re=ln;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(re=L.toneMapping);const se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Oe=se!==void 0?se.length:0,Et=Dt.get(k),We=w.state.lights;if(Se===!0&&(ii===!0||M!==et)){const de=M===et&&k.id===Y;J.setState(k,M,de)}let Qt=!1,Cn=!1;k.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==We.state.version||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==wt||k.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==J.numPlanes||Et.numIntersection!==J.numIntersection)||Et.vertexAlphas!==Bt||Et.vertexTangents!==$t||Et.morphTargets!==yt||Et.morphNormals!==qt||Et.morphColors!==_e||Et.morphTargetsCount!==Oe||Et.numLightProbeGrids!==Bc(w.state.lightProbeGridArray)?Qt=!0:(Et.outputColorSpace!==ut||Et.toneMapping!==re)&&(Cn=!0):(Qt=!0,Et.__version=k.version);let Be=Et.currentProgram;(Qt===!0||Cn===!0)&&(Be=Cn===!0?vf(k,N,G,ut,re):Ds(k,N,G),B&&k.isNodeMaterial&&B.onUpdateProgram(k,Be,Et));let Mr=!1,dn=!1,Pn=!1;const Kt=Be.getUniforms(),Ie=Et.uniforms;if(mt.useProgram(Be.program)&&(Mr=!0,dn=!0,Pn=!0),k.id!==Y&&(Y=k.id,dn=!0),Mr||et!==M){mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Kt.setValue(F,"projectionMatrix",M.projectionMatrix),Kt.setValue(F,"viewMatrix",M.matrixWorldInverse);const Ce=Kt.map.cameraPosition;Ce!==void 0&&Ce.setValue(F,Di.setFromMatrixPosition(M.matrixWorld)),ce.logarithmicDepthBuffer&&Kt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Kt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),et!==M&&(et=M,dn=!0,Pn=!0)}if(Et.needsLights&&(We.state.sunShadowMap.length>0&&Kt.setValue(F,"sunShadowMap",We.state.sunShadowMap,Ut),We.state.directionalShadowMap.length>0&&Kt.setValue(F,"directionalShadowMap",We.state.directionalShadowMap,Ut),We.state.spotShadowMap.length>0&&Kt.setValue(F,"spotShadowMap",We.state.spotShadowMap,Ut),We.state.pointShadowMap.length>0&&Kt.setValue(F,"pointShadowMap",We.state.pointShadowMap,Ut)),G.isSkinnedMesh){Kt.setOptional(F,G,"bindMatrix"),Kt.setOptional(F,G,"bindMatrixInverse");const de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Kt.setValue(F,"boneTexture",de.boneTexture,Ut))}G.isBatchedMesh&&(Kt.setOptional(F,G,"batchingTexture"),Kt.setValue(F,"batchingTexture",G._matricesTexture,Ut),Kt.setOptional(F,G,"batchingIdTexture"),Kt.setValue(F,"batchingIdTexture",G._indirectTexture,Ut),Kt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Kt.setValue(F,"batchingColorTexture",G._colorsTexture,Ut));const yi=X.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&j.update(G,X,Be),(dn||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,Kt.setValue(F,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Ie.envMapIntensity.value=N.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=$v()),dn){if(Kt.setValue(F,"toneMappingExposure",L.toneMappingExposure),Et.needsLights&&Mf(Ie,Pn),ft&&k.fog===!0&&ot.refreshFogUniforms(Ie,ft),ot.refreshMaterialUniforms(Ie,k,xt,Lt,w.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.numLightProbeGrids>0){const de=T;let Ce=0;for(const $i of w.state.lightProbeGridArray)$i.texture!==null&&(de.textures[Ce]=$i.texture,de.min[Ce]=$i.boundingBox.min,de.max[Ce]=$i.boundingBox.max,de.resolution[Ce]=$i.resolution,Ce++);for(const $i in de)de[$i].length=Ce;Ie.probesSH.value=de.textures,Ie.probesMin.value=de.min,Ie.probesMax.value=de.max,Ie.probesResolution.value=de.resolution}fa.upload(F,kc(Et),Ie,Ut)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fa.upload(F,kc(Et),Ie,Ut),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Kt.setValue(F,"center",G.center),Kt.setValue(F,"modelViewMatrix",G.modelViewMatrix),Kt.setValue(F,"normalMatrix",G.normalMatrix),Kt.setValue(F,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const de=k.uniformsGroups;for(let Ce=0,$i=de.length;Ce<$i;Ce++){const Hc=de[Ce];Rt.update(Hc,Be),Rt.bind(Hc,Be)}}return Be}function Mf(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Sf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,N,X){const k=Dt.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Dt.get(M.texture).__webglTexture=N,Dt.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const X=Dt.get(M);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,X=0){nt=M,Z=N,V=X;let k=null,G=!1,ft=!1;if(M){const ut=Dt.get(M);if(ut.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(F.FRAMEBUFFER,ut.__webglFramebuffer),it.copy(M.viewport),Tt.copy(M.scissor),Ot=M.scissorTest,mt.viewport(it),mt.scissor(Tt),mt.setScissorTest(Ot),Y=-1;return}else if(ut.__webglFramebuffer===void 0)Ut.setupRenderTarget(M);else if(ut.__hasExternalTextures)Ut.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Bt=M.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&Dt.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(M)}}const Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);const wt=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[N])?k=wt[N][X]:k=wt[N],G=!0):M.samples>0&&Ut.useMultisampledRTT(M)===!1?k=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?k=wt[X]:k=wt,it.copy(M.viewport),Tt.copy(M.scissor),Ot=M.scissorTest}else it.copy(Nt).multiplyScalar(xt).floor(),Tt.copy(te).multiplyScalar(xt).floor(),Ot=ne;if(X!==0&&(k=$),mt.bindFramebuffer(F.FRAMEBUFFER,k)&&mt.drawBuffers(M,k),mt.viewport(it),mt.scissor(Tt),mt.setScissorTest(Ot),G){const ut=Dt.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,X)}else if(ft){const ut=N;for(let Mt=0;Mt<M.textures.length;Mt++){const wt=Dt.get(M.textures[Mt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Mt,wt.__webglTexture,X,ut)}}else if(M!==null&&X!==0){const ut=Dt.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ut.__webglTexture,X)}Y=-1};function Gc(M){const N=Dt.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=ce.textureFormatReadable(M.format),N.__typeReadable=ce.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,X,k,G,ft,St,ut=0){if(!(M&&M.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){mt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const wt=M.textures[ut],Bt=wt.format,$t=wt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);const yt=Gc(wt);if(yt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&X>=0&&X<=M.height-G&&F.readPixels(N,X,k,G,at.convert(Bt),at.convert($t),ft)}finally{const wt=nt!==null?Dt.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,N,X,k,G,ft,St,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(N>=0&&N<=M.width-k&&X>=0&&X<=M.height-G){mt.bindFramebuffer(F.FRAMEBUFFER,Mt);const wt=M.textures[ut],Bt=wt.format,$t=wt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ut);const yt=Gc(wt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(N,X,k,G,at.convert(Bt),at.convert($t),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const _e=nt!==null?Dt.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,_e);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await np(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(qt),F.deleteSync(re),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,X=0){const k=Math.pow(2,-X),G=Math.floor(M.image.width*k),ft=Math.floor(M.image.height*k),St=N!==null?N.x:0,ut=N!==null?N.y:0;Ut.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,St,ut,G,ft),mt.unbindTexture()},this.copyTextureToTexture=function(M,N,X=null,k=null,G=0,ft=0){let St,ut,Mt,wt,Bt,$t,yt,qt,_e;const re=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(X!==null)St=X.max.x-X.min.x,ut=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Bt=X.min.y,$t=X.isBox3?X.min.z:0;else{const Kt=Math.pow(2,-G);St=Math.floor(re.width*Kt),ut=Math.floor(re.height*Kt),M.isDataArrayTexture?Mt=re.depth:M.isData3DTexture?Mt=Math.floor(re.depth*Kt):Mt=1,wt=0,Bt=0,$t=0}k!==null?(yt=k.x,qt=k.y,_e=k.z):(yt=0,qt=0,_e=0);const se=at.convert(N.format),Oe=at.convert(N.type);let Et;N.isData3DTexture?(Ut.setTexture3D(N,0),Et=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ut.setTexture2DArray(N,0),Et=F.TEXTURE_2D_ARRAY):(Ut.setTexture2D(N,0),Et=F.TEXTURE_2D),mt.activeTexture(F.TEXTURE0),mt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),mt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),mt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const We=mt.getParameter(F.UNPACK_ROW_LENGTH),Qt=mt.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=mt.getParameter(F.UNPACK_SKIP_PIXELS),Be=mt.getParameter(F.UNPACK_SKIP_ROWS),Mr=mt.getParameter(F.UNPACK_SKIP_IMAGES);mt.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),mt.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,$t);const dn=M.isDataArrayTexture||M.isData3DTexture,Pn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Kt=Dt.get(M),Ie=Dt.get(N),yi=Dt.get(Kt.__renderTarget),de=Dt.get(Ie.__renderTarget);mt.bindFramebuffer(F.READ_FRAMEBUFFER,yi.__webglFramebuffer),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ce=0;Ce<Mt;Ce++)dn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(M).__webglTexture,G,$t+Ce),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(N).__webglTexture,ft,_e+Ce)),F.blitFramebuffer(wt,Bt,wt+St,Bt+ut,yt,qt,yt+St,qt+ut,F.DEPTH_BUFFER_BIT,F.NEAREST);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Dt.has(M)){const Kt=Dt.get(M),Ie=Dt.get(N);mt.bindFramebuffer(F.READ_FRAMEBUFFER,D),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let yi=0;yi<Mt;yi++)dn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,G,$t+yi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,G),Pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,ft,_e+yi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,ft),G!==0?F.blitFramebuffer(wt,Bt,wt+St,Bt+ut,yt,qt,yt+St,qt+ut,F.COLOR_BUFFER_BIT,F.NEAREST):Pn?F.copyTexSubImage3D(Et,ft,yt,qt,_e+yi,wt,Bt,St,ut):F.copyTexSubImage2D(Et,ft,yt,qt,wt,Bt,St,ut);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pn?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Et,ft,yt,qt,_e,St,ut,Mt,se,Oe,re.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,ft,yt,qt,_e,St,ut,Mt,se,re.data):F.texSubImage3D(Et,ft,yt,qt,_e,St,ut,Mt,se,Oe,re):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ft,yt,qt,St,ut,se,Oe,re.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ft,yt,qt,re.width,re.height,se,re.data):F.texSubImage2D(F.TEXTURE_2D,ft,yt,qt,St,ut,se,Oe,re);mt.pixelStorei(F.UNPACK_ROW_LENGTH,We),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),mt.pixelStorei(F.UNPACK_SKIP_ROWS,Be),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,Mr),ft===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Et),mt.unbindTexture()},this.initRenderTarget=function(M){Dt.get(M).__webglFramebuffer===void 0&&Ut.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ut.setTextureCube(M,0):M.isData3DTexture?Ut.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ut.setTexture2DArray(M,0):Ut.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){Z=0,V=0,nt=null,mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const sn=48,Ri=1,Yv=sn*Ri,Ke=Yv/2,yc=0,Kv=.06,ye=1200,Ao=[{id:"morning",label:"아침",icon:"🌅",start:0,end:300},{id:"day",label:"낮",icon:"☀️",start:300,end:720},{id:"sunset",label:"노을",icon:"🌇",start:720,end:960},{id:"night",label:"밤",icon:"🌙",start:960,end:1200}];function pa(s){const t=(s%ye+ye)%ye;for(const e of Ao)if(t>=e.start&&t<e.end)return e;return Ao[Ao.length-1]}function jh(s){const t=(s%ye+ye)%ye,e=Math.floor(t/ye*20),i=Math.floor(t/ye*20*60%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const cd={clear:{id:"clear",label:"맑음",icon:"☀️"},cloudy:{id:"cloudy",label:"구름 조금",icon:"⛅"},drizzle:{id:"drizzle",label:"이슬비",icon:"🌦️"}},tu=["clear","clear","cloudy","drizzle","clear","cloudy","clear"];function Ro(s){return cd[tu[(s-1)%tu.length]]}const eu={t:0,top:"#9ed7f5",bottom:"#ffe6d2",fog:"#f0faf6",sun:"#ffe7c4",sunIntensity:.95,hemiSky:"#fff6ea",hemiGround:"#d9f2c4",hemiIntensity:1.32,night:.1},Zv={t:110,top:"#74cff4",bottom:"#dcf5fd",fog:"#e4f7f5",sun:"#fff2cf",sunIntensity:1.16,hemiSky:"#ffffff",hemiGround:"#dcf6c6",hemiIntensity:1.5,night:0},hd={t:330,top:"#5fc6f2",bottom:"#cfeeff",fog:"#ddf4f8",sun:"#fffbe9",sunIntensity:1.05,hemiSky:"#f4feff",hemiGround:"#d8f5c2",hemiIntensity:1.55,night:0},Jv={t:800,top:"#efa9c8",bottom:"#ffdcc0",fog:"#fce4d9",sun:"#ffb47c",sunIntensity:1.22,hemiSky:"#ffd0ae",hemiGround:"#f0e2b8",hemiIntensity:1.18,night:.02},Qv={t:915,top:"#a99bdb",bottom:"#ffd8cc",fog:"#f0dde6",sun:"#ffa888",sunIntensity:.82,hemiSky:"#d4c0ea",hemiGround:"#c3cbb4",hemiIntensity:.9,night:.2},jv={t:980,top:"#4e5b9c",bottom:"#b6c0ea",fog:"#9ea8d4",sun:"#d7e2ff",sunIntensity:.55,hemiSky:"#93a3ec",hemiGround:"#8298b0",hemiIntensity:.62,night:1},tx={t:1170,top:"#7388c4",bottom:"#e5d8ee",fog:"#cfd6ea",sun:"#f0e9ff",sunIntensity:.86,hemiSky:"#e9e4f9",hemiGround:"#cadcc4",hemiIntensity:1.1,night:.62},ex={...hd,t:650},ix=[eu,Zv,hd,ex,Jv,Qv,jv,tx,{...eu,t:ye}],Jr={speed:4.3,turnLerp:12,radius:.36,spriteHeight:1.5},Ui={fov:37,offset:{x:0,y:11,z:13.4},lookHeight:.7},Un={x:.4,z:11.8},Gi=[{id:"dock",name:"부두",icon:"⚓",day:5,x:0,z:17,markerY:2.2,height:1.7,water:!0},{id:"workshop",name:"공방",icon:"🔨",day:10,x:-5.6,z:5.6,markerY:3.4,height:2.8},{id:"vending",name:"메타몽 자판기",icon:"🥤",day:17,x:5.6,z:5.2,markerY:2.4,height:1.8},{id:"lighthouse",name:"등대",icon:"🗼",day:24,x:6.8,z:-3.6,markerY:5.6,height:4.4}],Bn=[{id:"ditto_basic_01",name:"동글 메타몽",x:-5.2,z:11.4,variant:"basic",height:.86,thumb:{set:"ditto_basic",row:1,col:1},flavor:"변신을 포기한 동글 메타몽. 점 눈만 남았다."},{id:"ditto_pebble_02",name:"조약돌 메타몽",x:-2.8,z:12.4,variant:"pebble",height:.52,thumb:{set:"disguises",row:1,col:1},flavor:"조약돌인 척하지만 가끔 숨을 쉰다."},{id:"ditto_mailbox_03",name:"우체통 메타몽",x:2.6,z:11.6,variant:"mailbox",height:1.1,thumb:{set:"disguises",row:1,col:2},flavor:"편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다."},{id:"ditto_flowerpot_04",name:"화분 메타몽",x:-1.2,z:6.2,variant:"flowerpot",height:.85,thumb:{set:"disguises",row:1,col:3},flavor:"물을 안 줘도 잎이 파랗다. 그게 수상하다."},{id:"ditto_bench_05",name:"벤치 메타몽",x:3.6,z:9.6,variant:"bench",height:.9,thumb:{set:"disguises",row:2,col:1},flavor:"앉으라고 만든 벤치인데, 앉으면 도망간다."},{id:"ditto_mushroom_06",name:"버섯 메타몽",x:.8,z:6,variant:"mushroom",height:.78,thumb:{set:"disguises",row:2,col:2},flavor:"빨간 갓에 흰 점. 먹으면 안 될 것 같다."},{id:"ditto_signpost_07",name:"이정표 메타몽",x:-3.6,z:9.2,variant:"signpost",height:1.15,thumb:{set:"disguises",row:2,col:3},flavor:"어디로 가라는 건지 본인도 모른다."}],vi=[{id:"somi",name:"솜이",x:3.2,z:3.4,set:"somi",height:.74},{id:"ongi",name:"옹이",x:5.2,z:2.2,set:"ongi",height:.7}],nx=[{frame:"lamp",x:-1.7,z:10.1,height:2,collide:.22},{frame:"lamp",x:1.9,z:10.2,height:2,collide:.22},{frame:"lamp",x:-3.9,z:4.3,height:2,collide:.22},{frame:"lamp",x:7.8,z:5.8,height:2,collide:.22},{frame:"fence",x:-2.8,z:5.6,height:.66,collide:.28},{frame:"fence",x:2,z:4.6,height:.66,collide:.28},{frame:"flowerbush",x:1.2,z:6.8,height:.6,collide:.24},{frame:"flowerbush",x:-4,z:11.6,height:.56,collide:.24},{frame:"rock",x:4.7,z:10.4,height:.5,collide:.26},{frame:"rock",x:-6.2,z:8.6,height:.46,collide:.24},{frame:"cherry2",x:-9.6,z:6.4,height:3.4,collide:.42},{frame:"tree_tall",x:-7.6,z:2.6,height:3.2,collide:.36},{frame:"tree_round",x:-10.4,z:9.4,height:2.6,collide:.34},{frame:"cherry1",x:-6.8,z:12.2,height:3,collide:.38},{frame:"flowerbush",x:-7.8,z:7.8,height:.62,collide:.25},{frame:"rock",x:-4.2,z:3.2,height:.5,collide:.26},{frame:"tree_round",x:-2.8,z:13.4,height:2.6,collide:.34},{frame:"cherry1",x:3.2,z:13.6,height:3,collide:.38},{frame:"tree_tall",x:5.4,z:13,height:3,collide:.36},{frame:"fence",x:-5.4,z:13.8,height:.66,collide:.28},{frame:"rock",x:1.6,z:13.9,height:.52,collide:.26},{frame:"cherry2",x:8.6,z:7.2,height:3.4,collide:.42},{frame:"tree_tall",x:9.4,z:3.2,height:3.2,collide:.36},{frame:"tree_round",x:8,z:11,height:2.6,collide:.34},{frame:"flowerbush",x:5.6,z:8.8,height:.58,collide:.24},{frame:"flowerbush",x:9.8,z:9.4,height:.6,collide:.24},{frame:"rock",x:6.6,z:9.6,height:.5,collide:.26},{frame:"tree_tall",x:-1,z:-5.2,height:2.9,collide:.36},{frame:"tree_round",x:2.6,z:-4,height:2.6,collide:.34},{frame:"cherry2",x:-4.8,z:-2,height:3.4,collide:.42},{frame:"tree_tall",x:5,z:-6,height:3,collide:.36},{frame:"tree_round",x:-7.4,z:-1.6,height:2.6,collide:.34},{frame:"flowerbush",x:.4,z:-2.2,height:.56,collide:.24},{frame:"rock",x:-2,z:1.4,height:.48,collide:.26},{frame:"flowerbush",x:3.6,z:.8,height:.54,collide:.24},{frame:"rock",x:9.2,z:-.6,height:.54,collide:.28},{frame:"tree_round",x:-3.8,z:15,height:2.6,collide:.34},{frame:"cherry1",x:3.4,z:15,height:3,collide:.38},{frame:"flowerbush",x:-1.6,z:13.6,height:.56,collide:.24},{frame:"rock",x:5,z:11.6,height:.48,collide:.26},{frame:"cherry2",x:-8.8,z:12.2,height:3.4,collide:.42},{frame:"flowerbush",x:8.2,z:12.2,height:.58,collide:.24}],vn={dittoRange:2.9,catRange:2.2,tapRange:5,nodeRange:2.5,siteRange:3.4},Ve={dbName:"metamong-island",store:"saves",key:"slot1",intervalSeconds:5};function Qr(s,t,e){let i=Math.imul(s|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}const iu=s=>s*s*(3-2*s);function Cl(s,t,e=0){const i=Math.floor(s),n=Math.floor(t),r=s-i,a=t-n,o=iu(r),l=iu(a),c=Qr(i,n,e),h=Qr(i+1,n,e),u=Qr(i,n+1,e),d=Qr(i+1,n+1,e);return(c*(1-o)+h*o)*(1-l)+(u*(1-o)+d*o)*l}function sx(s,t,e=4,i=0){let n=0,r=.5,a=1,o=0;for(let l=0;l<e;l++)n+=(Cl(s*a,t*a,i+l*131)*2-1)*r,o+=r,r*=.5,a*=2;return n/(o||1)}function rx(s,t,e){const i=Math.min(1,Math.max(0,(e-s)/(t-s)));return i*i*(3-2*i)}function ax(s,t,e){return s<t?t:s>e?e:s}class ox{constructor(t=20261120){this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.min(t.length-1,Math.floor(this.next()*t.length))]}}const rn=sn+1,Co=.7,nu=1,lx=.565,cx=.8;function hx(s,t){const e=Math.hypot(s,t*.97)/Ke,i=sx(s*.06+13.7,t*.06-8.2,3,7)*.045,n=rx(lx,cx,e+i),r=Co-(Co+nu)*n;return ax(r,-nu,Co)}function ux(){const s=new Float32Array(rn*rn);for(let t=0;t<rn;t++)for(let e=0;e<rn;e++){const i=-Ke+e*Ri,n=-Ke+t*Ri;s[t*rn+e]=hx(i,n)}return s}const dx=ux();function gs(s,t,e){const i=(t+Ke)/Ri,n=(e+Ke)/Ri;if(i<0||n<0||i>=sn||n>=sn)return-1.5;const r=Math.floor(i),a=Math.floor(n),o=i-r,l=n-a,c=s[a*rn+r],h=s[a*rn+r+1],u=s[(a+1)*rn+r],d=s[(a+1)*rn+r+1];return(c*(1-o)+h*o)*(1-l)+(u*(1-o)+d*o)*l}function Pl(s,t,e){const n=gs(s,t+.45,e)-gs(s,t-.45,e),r=gs(s,t,e+.45)-gs(s,t,e-.45);return Math.hypot(n,r)/(2*.45)}function fx(s,t,e){return!(Math.abs(t)>Ke-1||Math.abs(e)>Ke-1||gs(s,t,e)<Kv||Pl(s,t,e)>1.35)}const px="#3b2d38",mx=[140,140,140,255,172,172,172,255,222,222,222,255,255,255,255,255];function ud(){const s=new pc(new Uint8Array(mx),4,1,Pi);return s.minFilter=oe,s.magFilter=oe,s.generateMipmaps=!1,s.needsUpdate=!0,s}const gx=ud();function Ll(s={}){return new Bp({gradientMap:gx,...s})}new Hi({color:px,side:He,fog:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const si={deepSand:new pt("#dcc79c"),wetSand:new pt("#f2dfb4"),sand:new pt("#ffe6b8"),sandLight:new pt("#fff1d2"),grassA:new pt("#98dd78"),grassB:new pt("#b6ec96"),grassC:new pt("#82d46c"),grassMint:new pt("#abe4bd"),stone:new pt("#e7ddc9"),stoneHigh:new pt("#f2ead8")};new pt;let Ai=null;function _x(){if(Ai)return Ai;const s=64,t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,s,s);const i=["#f4f7f0","#fbfdf8","#eef4ea","#ffffff","#f7faf3"];for(let n=0;n<220;n++){const r=Math.floor(Math.random()*s),a=Math.floor(Math.random()*s);e.fillStyle=i[Math.floor(Math.random()*i.length)],e.fillRect(r,a,Math.random()<.25?2:1,Math.random()<.25?2:1)}return Ai=new Rs(t),Ai.colorSpace=xe,Ai.wrapS=Ai.wrapT=or,Ai.magFilter=oe,Ai.minFilter=an,Ai.generateMipmaps=!0,Ai.anisotropy=4,Ai}function vx(s,t,e,i,n){const r=Cl(e*.33+7.1,i*.33-3.3,41),a=Cl(e*.12-2.4,i*.12+5.6,17);return s<-.05?n.copy(si.deepSand).lerp(si.wetSand,.3+r*.3):s<.2?n.copy(si.wetSand).lerp(si.sand,.35+r*.5):s<.4?n.copy(si.sand).lerp(si.sandLight,r*.5):s<.58?n.copy(si.sand).lerp(si.grassA,.35+r*.55):t>1.55?n.copy(si.stone).lerp(si.stoneHigh,r*.6):(n.copy(si.grassA),r>.54?n.lerp(si.grassB,(r-.54)*2.2):r<.44&&n.lerp(si.grassC,(.44-r)*2.2),a>.7&&n.lerp(si.grassMint,(a-.7)*.8)),n}var ws,dd,fd;class xx{constructor(t){ni(this,ws);this.heights=t,this.group=new ci,this.group.name="Terrain",this.mesh=P(this,ws,dd).call(this,t),this.group.add(this.mesh),this.seabed=P(this,ws,fd).call(this),this.group.add(this.seabed)}sampleHeight(t,e){return gs(this.heights,t,e)}slopeAt(t,e){return Pl(this.heights,t,e)}isWalkable(t,e){return fx(this.heights,t,e)}groundY(t,e){return Math.max(this.sampleHeight(t,e),yc+.02)}dispose(){this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}ws=new WeakSet,dd=function(t){const e=sn+1,i=sn*sn,n=new Float32Array(i*6*3),r=new Float32Array(i*6*3),a=new Float32Array(i*6*2),o=1/2.6,l=new Float32Array(e*e*3),c=new pt;for(let A=0;A<e;A++)for(let w=0;w<e;w++){const g=-Ke+w*Ri,b=-Ke+A*Ri,O=t[A*e+w];vx(O,Pl(t,g,b),g,b,c);const L=(A*e+w)*3;l[L]=c.r,l[L+1]=c.g,l[L+2]=c.b}let h=0,u=0,d=0;const f=(A,w,g,b)=>{n[h++]=A,n[h++]=g,n[h++]=w,r[u++]=l[b],r[u++]=l[b+1],r[u++]=l[b+2],a[d++]=A*o,a[d++]=w*o};for(let A=0;A<sn;A++)for(let w=0;w<sn;w++){const g=-Ke+w*Ri,b=g+Ri,O=-Ke+A*Ri,L=O+Ri,U=A*e+w,B=A*e+w+1,$=(A+1)*e+w,D=(A+1)*e+w+1,W=t[U],Z=t[B],V=t[$],nt=t[D];f(g,O,W,U*3),f(g,L,V,$*3),f(b,L,nt,D*3),f(g,O,W,U*3),f(b,L,nt,D*3),f(b,O,Z,B*3)}const _=new we;_.setAttribute("position",new ei(n,3)),_.setAttribute("color",new ei(r,3)),_.setAttribute("uv",new ei(a,2)),_.computeVertexNormals(),_.computeBoundingSphere();const S=_.attributes.normal,p=_.attributes.position;let m=0;for(let A=0;A<p.count;A+=3)if(S.getY(A)<0){for(let w=0;w<3;w++){const g=p.getComponent(A+1,w),b=p.getComponent(A+2,w);p.setComponent(A+1,w,b),p.setComponent(A+2,w,g)}for(let w=0;w<3;w++){const g=_.attributes.color.getComponent(A+1,w),b=_.attributes.color.getComponent(A+2,w);_.attributes.color.setComponent(A+1,w,b),_.attributes.color.setComponent(A+2,w,g)}m++}m>0&&(_.computeVertexNormals(),p.needsUpdate=!0);const y=Ll({vertexColors:!0,map:_x()}),R=new me(_,y);R.name="TerrainSurface",R.receiveShadow=!0,R.frustumCulled=!0;const T=_.attributes.color;return T.needsUpdate=!0,R},fd=function(){const t=new hn(Ke*10,Ke*10,1,1);t.rotateX(-Math.PI/2);const e=Ll({color:"#dff3ec"}),i=new me(t,e);return i.position.y=-1.35,i.name="Seabed",i.receiveShadow=!0,i};const Mx=`
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
`,Sx=`
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
`;class bx{constructor(){const t=Ke*8,e=new hn(t,t,72,72);e.rotateX(-Math.PI/2),this.material=new Qe({uniforms:Es.merge([gt.fog,{uTime:{value:0},uShallow:{value:new pt("#8ff0e0")},uDeep:{value:new pt("#2fc4cd")},uSkyColor:{value:new pt("#e8fcff")},uSunColor:{value:new pt("#fffbe6")},uNight:{value:0}}]),vertexShader:Mx,fragmentShader:Sx,transparent:!0,fog:!0,depthWrite:!0}),this.mesh=new me(e,this.material),this.mesh.name="Water",this.mesh.position.y=yc,this.mesh.renderOrder=1}update(t,e){this.material.uniforms.uTime.value=t,e&&(this.material.uniforms.uShallow.value.copy(e.waterShallow),this.material.uniforms.uDeep.value.copy(e.waterDeep),this.material.uniforms.uSkyColor.value.copy(e.skyBottom),this.material.uniforms.uSunColor.value.copy(e.sun),this.material.uniforms.uNight.value=e.night)}}const yx=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ex=`
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
`;class Tx{constructor(){const t=new Ba(500,32,20);this.material=new Qe({uniforms:{uTop:{value:new pt("#8ed7f6")},uBottom:{value:new pt("#f1fcf4")},uDisc:{value:new pt("#fff2cf")},uDiscDir:{value:new I(.2,.6,-.6)},uCloud:{value:new pt("#ffffff")},uNight:{value:0},uTime:{value:0}},vertexShader:yx,fragmentShader:Ex,side:He,depthWrite:!1,fog:!1}),this.mesh=new me(t,this.material),this.mesh.name="Skybox",this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}update(t){this.mesh.position.copy(t)}setPalette({skyTop:t,skyBottom:e,sun:i,night:n,discDir:r,elapsed:a}){const o=this.material.uniforms;o.uTop.value.copy(t),o.uBottom.value.copy(e),o.uDisc.value.copy(i),o.uCloud.value.copy(e).lerp(i,.35),o.uNight.value=n,o.uTime.value=a,r&&o.uDiscDir.value.copy(r)}}let Ws=null;function su(){if(Ws)return Ws;const s=document.createElement("canvas");s.width=s.height=96;const t=s.getContext("2d"),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(255,255,255,0.92)"),e.addColorStop(.45,"rgba(255,255,255,0.62)"),e.addColorStop(.78,"rgba(255,255,255,0.24)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.ellipse(48,48,46,46,0,0,Math.PI*2),t.fill(),Ws=new Rs(s),Ws.colorSpace=xe,Ws}function dr(s=.34,t=.3){const e=new _r(s,28);e.rotateX(-Math.PI/2),e.scale(1,1,.62);const i=new Hi({color:"#6d5a8a",map:su(),alphaMap:su(),transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),n=new me(e,i);return n.renderOrder=2,n}let Xs=null;function wx(){if(Xs)return Xs;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,62);return e.addColorStop(0,"rgba(255,214,232,0)"),e.addColorStop(.52,"rgba(255,206,228,0.06)"),e.addColorStop(.76,"rgba(255,190,220,0.85)"),e.addColorStop(1,"rgba(255,190,220,0)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),Xs=new Rs(s),Xs.colorSpace=xe,Xs}function Ax(s=.45){const t=new _r(s,32);t.rotateX(-Math.PI/2);const e=new Hi({map:wx(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),i=new me(t,e);return i.renderOrder=2,i}let $s=null;function Rx(){if($s)return $s;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");return t.font='96px "Noto Sans CJK KR", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=11,t.strokeStyle="rgba(255,255,255,0.92)",t.strokeText("♥",64,68),t.fillStyle="#ff86a8",t.fillText("♥",64,68),$s=new Rs(s),$s.colorSpace=xe,$s}function pd(s=.42){const t=new En(new on({map:Rx(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return t.scale.set(s,s,1),t.visible=!1,t}class fr{constructor(t,e,i={}){const{height:n=1,exact:r=!1}=i;this.atlas=t;const a=t.frames.get(e)||t.frames.values().next().value;this.height=n,this.exact=r,this.aspect=r?a.w/a.h:t.cell[0]/t.cell[1];const o=new hn(n*this.aspect,n);o.translate(0,n/2,0);const l=t.texture.clone();l.needsUpdate=!0,this.map=l,this.material=new Hi({map:l,transparent:!1,alphaTest:.45,depthWrite:!0,depthTest:!0,side:Tn,toneMapped:!1,fog:!0,color:16777215}),this.mesh=new me(o,this.material),this.mesh.name=`Billboard_${t.set}_${e}`,this._wp=new I,this.frame=null,this.flip=!1,this.setFrame(e,!!i.flip),this.mesh.userData.billboard=this}setFrame(t,e=this.flip){const i=this.atlas.frames.get(t);if(!i)return this.frame;this.frame=i,this.flip=!!e;const n=1/this.atlas.cols,r=1/this.atlas.rows;if(this.map.offset.set(e?i.col/this.atlas.cols:(i.col-1)/this.atlas.cols,1-i.row/this.atlas.rows),this.map.repeat.set(e?-n:n,r),this.map.needsUpdate=!0,this.exact){const a=i.w/i.h;if(Math.abs(a-this.aspect)>1e-4){this.aspect=a,this.mesh.geometry.dispose();const o=new hn(this.height*a,this.height);o.translate(0,this.height/2,0),this.mesh.geometry=o}}return i}faceCamera(t){this.mesh.getWorldPosition(this._wp),this.mesh.rotation.y=Math.atan2(t.position.x-this._wp.x,t.position.z-this._wp.z)}setTint(t){this.material.color.copy(t)}dispose(){this.map.dispose(),this.material.dispose(),this.mesh.geometry.dispose()}}const Le={log:{id:"log",name:"통나무",icon:"🪵",tint:"#c98b52",desc:"나무를 두드리면 나와요"},stone:{id:"stone",name:"돌",icon:"🪨",tint:"#a9a9c0",desc:"바위를 두드리면 나와요"},petal:{id:"petal",name:"꽃잎",icon:"🌸",tint:"#ffb3d1",desc:"꽃덤불과 벚꽃나무에서"},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",desc:"바위에서 아주 가끔"},berry:{id:"berry",name:"열매",icon:"🍓",tint:"#ff7d9c",desc:"먹으면 기력 +30"}},Dl=["log","stone","petal","star","berry"],qe={slots:8,stack:20},ru=999,Ze={max:100,hitTree:6,hitRock:7,hitFlower:3,eat:30,regenPerSecond:1/6},ma={dock:{log:6,stone:2},workshop:{log:8,stone:6},vending:{stone:4,petal:5,star:2},lighthouse:{log:12,stone:10,star:5}},au={dock:"배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.",workshop:"창고와 도구방이 함께 열려요. 재료 정리는 여기서 해요.",vending:"메타몽 자판기예요. 복구하면 밤에 은은하게 빛나요.",lighthouse:"복구하면 밤마다 따뜻한 불이 켜져요. 섬의 마지막 등불이에요."},Ha={tree:{frames:["cherry1","cherry2","tree_tall","tree_round"],cost:Ze.hitTree,hits:[2,3],icon:"🪓",verb:"베기"},rock:{frames:["rock"],cost:Ze.hitRock,hits:[2,3],icon:"⛏️",verb:"채굴"},flower:{frames:["flowerbush"],cost:Ze.hitFlower,hits:[1,1],icon:"🌸",verb:"꽃 따기"}};function Cx(s){for(const[t,e]of Object.entries(Ha))if(e.frames.includes(s))return t;return null}function Px(s,t,e=Math.random){const i={};return s==="tree"?(i.log=1+Math.floor(e()*3),String(t).startsWith("cherry")&&e()<.65&&(i.petal=1)):s==="rock"?(i.stone=1+Math.floor(e()*3),e()<.14&&(i.star=1)):s==="flower"&&(i.petal=1+(e()<.5?1:0)),i}function Lx(s){return Object.entries(s).filter(([,t])=>t>0).map(([t,e])=>`${Le[t]?Le[t].name:t} ${e}`).join(" · ")}const De=new Map;function Ec(s=16){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function Ps(s){const t=new Rs(s);return t.colorSpace=xe,t.magFilter=oe,t.minFilter=oe,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Tc(s,t){return(e,i,n,r,a)=>{s.fillStyle=a,s.fillRect(e*t,i*t,n*t,r*t)}}function Dx(s){const{c:t,ctx:e}=Ec(16),i=Tc(e,1);return s==="berry"?(i(7,2,2,1,"#6dbf6a"),i(9,3,1,1,"#579a55"),i(8,4,1,1,"#7a5236"),i(5,5,6,1,"#e8496b"),i(4,6,8,1,"#ef5a7b"),i(4,7,9,1,"#f0607f"),i(3,8,10,1,"#ee5c7d"),i(3,9,10,1,"#e8506f"),i(4,10,9,1,"#dc4865"),i(5,11,7,1,"#c93d59"),i(6,12,5,1,"#b2334f"),i(5,7,2,2,"#ffa3bb"),i(6,6,1,1,"#ffc2d2"),i(5,9,1,1,"#ffe3ea"),i(8,10,1,1,"#ffe3ea"),i(11,8,1,1,"#ffd0dc")):s==="log"?(i(3,6,10,6,"#a9713f"),i(3,6,10,1,"#c68a52"),i(3,11,10,1,"#8a5a30"),i(5,7,1,4,"#965f33"),i(8,8,4,1,"#b87f47"),i(2,7,2,4,"#d8a468"),i(2,8,2,2,"#e8bc85"),i(3,8,1,2,"#b9854f"),i(12,7,2,4,"#c9925a"),i(12,8,1,2,"#8a5a30")):s==="stone"?(i(5,5,6,1,"#d3d5e2"),i(4,6,8,1,"#c3c6d6"),i(3,7,10,1,"#b3b7ca"),i(3,8,10,2,"#a6aabf"),i(4,10,9,1,"#8f94ac"),i(5,11,7,1,"#7b8098"),i(6,12,5,1,"#6b7086"),i(5,6,3,1,"#e7e9f2"),i(7,9,2,1,"#c9cddd")):s==="petal"?(i(7,4,3,1,"#ffd0e2"),i(6,5,5,1,"#ffb8d2"),i(5,6,6,2,"#ffa6c8"),i(4,8,6,2,"#f892b8"),i(5,10,4,1,"#e97fa8"),i(6,11,2,1,"#d16d96"),i(7,6,2,1,"#ffe6f0")):s==="star"?(i(7,1,2,3,"#ffe9a8"),i(7,12,2,3,"#ffe9a8"),i(1,7,3,2,"#ffe9a8"),i(12,7,3,2,"#ffe9a8"),i(5,5,6,1,"#ffd464"),i(4,6,8,1,"#ffcf55"),i(4,7,8,2,"#ffc94a"),i(5,9,6,1,"#ffbf3e"),i(6,10,4,1,"#ffb42f"),i(7,7,2,2,"#fff8dc"),i(6,6,1,1,"#fff3c0")):i(6,6,4,4,"#dcdcea"),Ps(t)}function Nx(s){const t=`item:${s}`;return De.has(t)||De.set(t,Dx(s)),De.get(t)}function Ix(s="tree"){const t=`stump:${s}`;if(De.has(t))return De.get(t);const{c:e,ctx:i}=Ec(24),n=Tc(i,1);if(s==="tree"){const a=[[5,10,15,"#dcae74"],[6,9,16,"#d3a067"],[7,9,16,"#c9925a"],[8,8,17,"#b07c46"],[9,8,17,"#96633a"],[10,8,17,"#8a5a34"],[11,8,17,"#8a5a34"],[12,8,17,"#8a5a34"],[13,8,17,"#8a5a34"],[14,8,17,"#8a5a34"],[15,7,18,"#855631"],[16,7,18,"#7c5030"],[17,7,18,"#7c5030"],[18,6,19,"#74482a"],[19,6,19,"#6a4025"],[20,6,19,"#5f3d24"]];for(const[o,l,c,h]of a)n(l,o,c-l+1,1,h),n(l,o,1,1,"#5f3d24"),n(c,o,1,1,"#4e3019");n(16,9,2,10,"#74482a"),n(8,10,1,8,"#a06b3d"),n(11,6,3,1,"#a5713d"),n(10,6,1,2,"#a5713d"),n(14,6,1,2,"#a5713d"),n(12,7,2,1,"#b9854f"),n(12,5,1,1,"#f0d8ab"),n(10,12,1,4,"#6f4628"),n(13,14,1,4,"#6f4628"),n(18,12,1,6,"#6fa35a"),n(19,10,2,2,"#9ed07a"),n(21,9,1,2,"#7fbb62"),n(18,8,1,2,"#9ed07a")}else s==="rock"?(n(4,14,7,5,"#b3b7ca"),n(5,12,5,2,"#d3d5e2"),n(11,15,8,5,"#a6aabf"),n(12,13,6,2,"#c3c6d6"),n(17,16,4,4,"#8f94ac"),n(3,19,18,1,"#7b8098"),n(6,15,2,1,"#e7e9f2"),n(14,15,2,1,"#dfe2ee"),n(8,9,1,3,"#6fa35a"),n(6,8,2,2,"#9ed07a")):(n(3,16,18,4,"#8a6a4a"),n(4,15,16,1,"#a4815c"),n(3,19,18,1,"#6f5439"),n(6,14,2,2,"#ffb8d2"),n(11,13,2,1,"#ffa6c8"),n(15,14,1,1,"#ffd0e2"),n(16,8,1,7,"#6fa35a"),n(14,7,2,2,"#9ed07a"),n(17,6,2,2,"#9ed07a"),n(19,7,1,1,"#7fbb62"));const r=Ps(e);return De.set(t,r),r}function Ux(){const s="sprout";if(De.has(s))return De.get(s);const{c:t,ctx:e}=Ec(16),i=Tc(e,1);i(7,8,2,6,"#7fae5b"),i(5,6,3,2,"#8ec96a"),i(3,7,2,1,"#a5db7f"),i(8,4,3,2,"#8ec96a"),i(11,5,2,1,"#a5db7f"),i(7,3,2,2,"#b7e694"),i(6,12,4,1,"#5f8a45");const n=Ps(t);return De.set(s,n),n}function Pa(){const s="glow";if(De.has(s))return De.get(s);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,2,32,32,31);i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(.42,"rgba(255,246,214,0.55)"),i.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Ps(t);return De.set(s,n),n}function Fx(){const s="ripple";if(De.has(s))return De.get(s);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,14,32,32,31);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.55,"rgba(255,255,255,0.06)"),i.addColorStop(.8,"rgba(236,252,255,0.92)"),i.addColorStop(.94,"rgba(206,240,255,0.42)"),i.addColorStop(1,"rgba(206,240,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Ps(t);return De.set(s,n),n}function Ox(){if(De.has("dot"))return De.get("dot");const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(16,16,0,16,16,15);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.55,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(16,16,15,0,Math.PI*2),e.fill();const n=Ps(t);return De.set("dot",n),n}const Bx={workshop:"workshop",lighthouse:"lighthouse",vending:"vending",dock:"dock"},kx={workshop:1.2,lighthouse:.82,vending:.55,dock:.9},ou={tree:[1.05,1.35],rock:[.8,.62],flower:[.78,.56]},Po=.06,Lo=0;var As,md,gd;class zx{constructor(t,e){ni(this,As);this.terrain=t,this.group=new ci,this.group.name="Scenery",this.sites=[],this.billboards=[],this.colliders=[],this.nodes=[],this.beacon=null;const i=e.get("buildings"),n=e.get("nature");for(const r of Gi){const a=r.water?0:Math.max(t.sampleHeight(r.x,r.z),.02),o=new fr(i,Bx[r.id],{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Building_${r.id}`,this.group.add(o.mesh),this.billboards.push(o);const l={...r,y:a,billboard:o,built:!1};l.kind="site",o.mesh.userData.site=l,this.sites.push(l),this.colliders.push({x:r.x,z:r.z,r:kx[r.id]||1});const c=dr(r.height*.34,.26);c.position.set(r.x,a+.02,r.z),this.group.add(c)}for(const r of nx){const a=Math.max(t.sampleHeight(r.x,r.z),.02),o=new fr(n,r.frame,{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Nature_${r.frame}_${r.x}_${r.z}`,this.group.add(o.mesh),this.billboards.push(o);let l=null;r.collide&&(l={x:r.x,z:r.z,r:r.collide},this.colliders.push(l));const c=dr((r.collide||.3)*1.25,.22);c.position.set(r.x,a+.02,r.z),this.group.add(c);const h=Cx(r.frame);if(h){const u=P(this,As,md).call(this,r,h,a,o,l);o.mesh.userData.node=u,this.nodes.push(u)}}P(this,As,gd).call(this)}pop(t){t.popT=.26}setHarvested(t,e){t.harvested=!!e,t.targetScale=e?Po:1,t.targetOpacity=e?Lo:1,t.stubTarget=e?.92:0,t.sprout.visible=!!e,e&&(t.mesh.material.transparent=!0,t.mesh.material.depthWrite=!1),t.collider&&(t.collider.r=e?0:t.baseR),e||(t.mesh.material.depthWrite=!0,t.hasBerry=!1)}applyNodeState(t,e){if(!e)return;const i=e.left<=0||e.respawn>0;t.hitsLeft=Math.max(1,Math.min(t.hitsNeeded,e.left||t.hitsNeeded)),t.respawn=Math.max(0,Number(e.respawn)||0),t.mesh.material.transparent=!0,t.scale=i?Po:1,t.opacity=i?Lo:1,t.mesh.scale.setScalar(t.scale),t.mesh.material.opacity=t.opacity,t.harvested=i,t.targetScale=i?Po:1,t.targetOpacity=i?Lo:1,t.sprout.visible=i,t.stubTarget=i?.92:0,t.stub.material.opacity=t.stubTarget,t.stub.visible=i,t.collider&&(t.collider.r=i?0:t.baseR),i||(t.mesh.material.depthWrite=!0)}setBuilt(t,e=!0){const i=this.sites.find(n=>n.id===t);i&&(i.built=!!e,this.beacon&&t==="lighthouse"&&(this.beacon.enabled=!!e))}update(t,e,i=0){if(e)for(const n of this.billboards)n.faceCamera(e);for(const n of this.nodes){if(n.popT>0){n.popT=Math.max(0,n.popT-t);const a=n.popT/.26;n.mesh.rotation.z=Math.sin((1-a)*30)*.09*a}else n.mesh.rotation.z!==0&&(n.mesh.rotation.z=0);if(Math.abs(n.scale-n.targetScale)>.003){n.scale+=(n.targetScale-n.scale)*Math.min(1,t*9),n.mesh.scale.setScalar(n.scale);const a=n.opacity+(n.targetOpacity-n.opacity)*Math.min(1,t*9);n.opacity=a,n.mesh.material.opacity=a}else Math.abs(n.opacity-n.targetOpacity)>.003&&(n.opacity+=(n.targetOpacity-n.opacity)*Math.min(1,t*9),n.mesh.material.opacity=n.opacity);const r=n.stubTarget||0;Math.abs(n.stub.material.opacity-r)>.004?(n.stub.material.opacity+=(r-n.stub.material.opacity)*Math.min(1,t*9),n.stub.visible=n.stub.material.opacity>.02):(n.stub.material.opacity=r,n.stub.visible=r>.02),n.opacity>.99&&n.mesh.material.transparent&&(n.mesh.material.transparent=!1,n.mesh.material.opacity=1,n.opacity=1),n.sprout.visible&&(n.sprout.position.y=n.y+.16+Math.sin(performance.now()*.002+n.x)*.02,n.sprout.material.rotation=Math.sin(performance.now()*.0012+n.z)*.12)}if(this.beacon){const n=this.beacon;n.t+=t;const r=n.enabled?1:0,a=.88+Math.sin(n.t*1.7)*.07+Math.sin(n.t*3.3)*.05;n.light.intensity+=(r*(.8+i*3.4)*a-n.light.intensity)*Math.min(1,t*2.4),n.glow.material.opacity+=(r*(.16+i*.72)*a-n.glow.material.opacity)*Math.min(1,t*2.4),n.lamp.material.opacity+=(r*(.2+i*.8)-n.lamp.material.opacity)*Math.min(1,t*2.4)}}}As=new WeakSet,md=function(t,e,i,n,r){const a=Ha[e],[o,l]=a.hits,c=o+Math.floor(Math.random()*(l-o+1)),h=ou[e]||ou.tree,u=new En(new on({map:Ix(e),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));u.scale.set(h[0],h[1],1),u.position.set(t.x,i+h[1]*.46,t.z),u.visible=!1,u.renderOrder=3,this.group.add(u);const d=new En(new on({map:Ux(),transparent:!0,depthWrite:!1,toneMapped:!1}));return d.scale.set(.55,.55,1),d.position.set(t.x+.42,i+.3,t.z+.45),d.renderOrder=5,d.visible=!1,d.renderOrder=4,this.group.add(d),{key:`${t.frame}@${t.x},${t.z}`,isNode:!0,kind:e,frame:t.frame,x:t.x,z:t.z,y:i,height:t.height,billboard:n,mesh:n.mesh,collider:r,baseR:t.collide||0,hitsNeeded:c,hitsLeft:c,harvested:!1,respawn:0,berryT:24+Math.random()*26,hasBerry:!1,scale:1,targetScale:1,opacity:1,targetOpacity:1,popT:0,sprout:d,stub:u,stubTarget:0}},gd=function(){const t=this.sites.find(a=>a.id==="lighthouse");if(!t)return;const e=t.y+t.height*.86,i=new qp("#ffdca8",0,26,1.7);i.position.set(t.x,e,t.z),this.group.add(i);const n=new En(new on({map:Pa(),color:"#ffd79a",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:sr}));n.scale.set(5.2,5.2,1),n.position.set(t.x,e,t.z),this.group.add(n);const r=new En(new on({map:Pa(),color:"#fff3cf",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));r.scale.set(1.1,1.1,1),r.position.set(t.x,e+.1,t.z),this.group.add(r),this.beacon={enabled:!1,light:i,glow:n,lamp:r,t:0}};const Gx=[[[0,15.8],[0,13.2],[.2,10.6],[0,9]],[[0,9],[-1.8,7.8],[-3.8,6.8],[-5.6,5.6]],[[.2,9],[2.2,7.8],[4,6.6],[5.6,5.2]],[[1,8.8],[4.4,7.4],[7,3.6],[7.4,-1.2],[6.8,-3.6]]],jr=1.15,Hx=.6,Vx=new pt("#f6e5c2"),Wx=new pt("#e2c89c"),ta=[-jr/2,-jr*.22,jr*.22,jr/2];let Fi=null;function Xx(){if(Fi)return Fi;const s=document.createElement("canvas");s.width=64,s.height=64;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.16,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.84,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(196,168,126,0.16)";for(let i=0;i<40;i++){const n=Math.floor(Math.random()*64),r=Math.floor(Math.random()*64);t.fillRect(n,r,2,2)}return Fi=new Rs(s),Fi.colorSpace=xe,Fi.magFilter=oe,Fi.minFilter=Je,Fi.generateMipmaps=!1,Fi.wrapS=Mi,Fi.wrapT=or,Fi}function $x(s){const t=new Ip(s.map(([i,n])=>new I(i,0,n)),!1,"catmullrom",.5),e=Math.max(4,Math.round(t.getLength()/Hx));return t.getSpacedPoints(e).map(i=>[i.x,i.z])}class qx{constructor(t){this.group=new ci,this.group.name="Path";const e=[],i=[],n=[],r=[],a=new pt;for(const h of Gx){const u=$x(h),d=e.length/3;let f=0;for(let p=0;p<u.length;p++){const[m,y]=u[p],[R,T]=u[Math.max(0,p-1)],[A,w]=u[Math.min(u.length-1,p+1)],g=A-R,b=w-T,O=Math.hypot(g,b)||1,L=-b/O,U=g/O;p>0&&(f+=Math.hypot(m-u[p-1][0],y-u[p-1][1]));for(let B=0;B<ta.length;B++){const $=ta[B],D=m+L*$,W=y+U*$;e.push(D,t.groundY(D,W)+.04,W),n.push(B/(ta.length-1),f/2.2);const Z=Math.abs(B-1.5)/1.5;a.copy(Vx).lerp(Wx,Z*.75),i.push(a.r,a.g,a.b)}}const _=u.length,S=ta.length;for(let p=0;p<_-1;p++)for(let m=0;m<S-1;m++){const y=d+p*S+m,R=y+1,T=d+(p+1)*S+m,A=T+1;r.push(y,T,A,y,A,R)}}const o=new we;o.setAttribute("position",new he(e,3)),o.setAttribute("color",new he(i,3)),o.setAttribute("uv",new he(n,2)),o.setIndex(r),o.computeVertexNormals();const l=Ll({vertexColors:!0,map:Xx(),transparent:!0,alphaTest:.06,depthWrite:!1,side:zi,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=new me(o,l);c.name="PathSurface",c.receiveShadow=!0,this.group.add(c)}}const qs=new pt("#dfe8ef"),Yx=new pt("#8feadf"),Kx=new pt("#31c6cd"),Zx=new I(-.22,.86,.34).normalize(),Jx={hemi:.52,ambient:.26,sun:1.25,fill:.22},lu={top:"skyTop",bottom:"skyBottom",fog:"fog",sun:"sun",hemiSky:"hemiSky",hemiGround:"hemiGround"};var Wi,_d,vd,xd,Md;class Qx{constructor(t){ni(this,Wi);this.scene=new Mp,this.scene.fog=new fc("#f2fcf5",.0062),this.terrain=new xx(dx),this.scene.add(this.terrain.group),this.water=new bx,this.scene.add(this.water.mesh),this.sky=new Tx,this.scene.add(this.sky.mesh),this.hemi=new Xp("#fff4e2","#dcf5c6",1.5),this.scene.add(this.hemi),this.ambient=new Kp("#fff8ec",.5),this.scene.add(this.ambient),this.sunLight=new Rh("#ffe9c6",1.1),this.sunLight.position.set(12,30,-18),this.sunLight.target.position.set(0,0,0),this.sunLight.castShadow=!0;const e=this.sunLight.shadow;e.mapSize.set(1024,1024),e.camera.left=-30,e.camera.right=30,e.camera.top=30,e.camera.bottom=-30,e.camera.near=1,e.camera.far=170,e.bias=-5e-4,e.normalBias=.02,e.radius=1.5,e.camera.updateProjectionMatrix(),e.needsUpdate=!0,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.shadowFocus=new I(0,0,0),this.fillLight=new Rh("#dcefff",.4),this.fillLight.position.set(-22,16,26),this.fillLight.target.position.set(0,0,0),this.scene.add(this.fillLight),this.scene.add(this.fillLight.target),this.scenery=new zx(this.terrain,t),this.scene.add(this.scenery.group),this.path=new qx(this.terrain),this.scene.add(this.path.group),this.keyColors=ix.map(i=>{const n={t:i.t,sunIntensity:i.sunIntensity,hemiIntensity:i.hemiIntensity,night:i.night};for(const r of Object.keys(lu))n[r]=new pt(i[r]);return n}),this.palette={skyTop:new pt,skyBottom:new pt,fog:new pt,sun:new pt,hemiSky:new pt,hemiGround:new pt,waterShallow:new pt,waterDeep:new pt,sunIntensity:1,hemiIntensity:1,night:0},this.weather=cd.clear,this.weatherBlend=0,this.lightGain={...Jx},this.spriteLight=new pt("#ffffff"),this.rain=P(this,Wi,_d).call(this),this.scene.add(this.rain.points),this.tmpDir=new I,this.discDir=new I,this.time=0}setWeather(t){this.weather=t}update(t,e,i,n){this.time+=t;const r=P(this,Wi,vd).call(this,e),a=this.weather.id==="drizzle"?.55:this.weather.id==="cloudy"?.32:0;if(this.weatherBlend+=(a-this.weatherBlend)*Math.min(1,t*.8),this.weatherBlend>.001){const h=this.weatherBlend;r.skyTop.lerp(qs,h*.55),r.skyBottom.lerp(qs,h*.45),r.fog.lerp(qs,h*.4),r.sun.lerp(qs,h*.3),r.sunIntensity*=1-h*.35,r.hemiIntensity*=1-h*.15}this.hemi.color.copy(r.hemiSky),this.hemi.groundColor.copy(r.hemiGround);const o=this.lightGain;this.hemi.intensity=r.hemiIntensity*o.hemi,this.sunLight.color.copy(r.sun),this.sunLight.intensity=r.sunIntensity*o.sun,this.ambient.color.copy(r.hemiSky),this.ambient.intensity=(.46-r.night*.1)*o.ambient,this.fillLight.intensity=(.42-r.night*.16)*o.fill,this.fillLight.color.copy(r.sun).lerp(r.skyBottom,.3);const l=1-r.night*.46;this.spriteLight.copy(r.sun).lerp(r.hemiSky,.42).lerp(qs,this.weatherBlend*.32).multiplyScalar(l);const c=P(this,Wi,xd).call(this,e,this.tmpDir);this.discDir.copy(c),n&&this.shadowFocus.set(n.x,0,n.z),this.sunLight.position.copy(c).multiplyScalar(70).add(this.shadowFocus),this.sunLight.target.position.copy(this.shadowFocus),this.sunLight.target.updateMatrixWorld(),this.sky.setPalette({skyTop:r.skyTop,skyBottom:r.skyBottom,sun:r.sun,night:r.night,discDir:this.discDir,elapsed:this.time}),i&&this.sky.update(i.position),this.scene.fog.color.copy(r.fog),this.scene.fog.density=.0055+this.weatherBlend*.004,this.water.update(this.time,r),this.scenery.update(t,i,r.night),P(this,Wi,Md).call(this,t,n)}get halfExtent(){return Ke}get waterLevel(){return yc}dispose(){this.scene.traverse(t=>{(t.isMesh||t.isPoints||t.isSprite)&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose()))})}}Wi=new WeakSet,_d=function(){const e=new ox(771),i=new Float32Array(420*3),n=new Float32Array(420);for(let l=0;l<420;l++)i[l*3]=e.range(-14,14),i[l*3+1]=e.range(0,16),i[l*3+2]=e.range(-14,14),n[l]=e.range(7,12);const r=new we;r.setAttribute("position",new ei(i,3));const a=new gc({color:"#d7ecf7",size:.09,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),o=new Wu(r,a);return o.name="Rain",o.visible=!1,o.frustumCulled=!1,{points:o,speed:n,count:420}},vd=function(t){const e=(t%ye+ye)%ye,i=this.keyColors;let n=0;for(;n<i.length-2&&e>=i[n+1].t;)n++;const r=i[n],a=i[n+1],o=(e-r.t)/Math.max(1e-6,a.t-r.t),l=o*o*(3-2*o),c=this.palette;for(const[u,d]of Object.entries(lu))c[d].copy(r[u]).lerp(a[u],l);c.sunIntensity=r.sunIntensity+(a.sunIntensity-r.sunIntensity)*l,c.hemiIntensity=r.hemiIntensity+(a.hemiIntensity-r.hemiIntensity)*l,c.night=r.night+(a.night-r.night)*l,c.waterShallow.copy(Yx).lerp(c.skyBottom,.22),c.waterDeep.copy(Kx).lerp(c.skyTop,.18);const h=1-c.night*.28;return c.waterShallow.multiplyScalar(h),c.waterDeep.multiplyScalar(h),c},xd=function(t,e){const i=(t%ye+ye)%ye;if(i>=960)return e.copy(Zx);const n=Math.min(1,Math.max(0,i/960)),r=Math.PI*n;return e.set(Math.cos(r)*.92,Math.sin(r)*.9,-.3).normalize()},Md=function(t,e){const i=this.weather.id==="drizzle"&&this.weatherBlend>.25,n=this.rain.points;if(n.visible=i,!i)return;n.material.opacity=.55*this.weatherBlend;const r=n.geometry.attributes.position.array,a=e?e.x:0,o=e?e.z:0;for(let l=0;l<this.rain.count;l++){const c=l*3+1;r[c]-=this.rain.speed[l]*t,r[c]<0&&(r[c]=14+Math.random()*4,r[l*3]=a+(Math.random()-.5)*26,r[l*3+2]=o+(Math.random()-.5)*26)}n.geometry.attributes.position.needsUpdate=!0,n.position.set(0,0,0)};const jx=84,cu=60/jx/2,tM=140,eM=1.1;function Ys(s){return 440*Math.pow(2,(s-69)/12)}const Do={morning:{melody:[76,79,84,79,72,76,81,76,77,81,84,81,79,83,86,79],bass:[48,45,41,43]},day:{melody:[79,83,86,83,81,84,88,84,77,81,86,81,79,83,86,83],bass:[43,40,41,43]},sunset:{melody:[77,81,84,81,74,77,81,77,79,83,86,83,72,76,79,76],bass:[41,38,43,48]},night:{melody:[72,null,76,null,69,null,72,null,65,null,69,null,67,null,74,null],bass:[48,45,41,43]}};var Pt,Nl,Sd,bd,yd,fs,Il,Ed,Bi,pe;class iM{constructor(){ni(this,Pt);this.ctx=null,this.master=null,this.noteBus=null,this.started=!1,this.muted=!1,this.phase="morning",this.volume=.55,this.step=0,this.nextTime=0,this.timer=null,this.noiseBuf=null}start(){if(this.started){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=1e-4;const i=e.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=22,i.ratio.value=2.4,i.attack.value=.006,i.release.value=.24,this.master.connect(i),i.connect(e.destination),this.noteBus=e.createGain(),this.noteBus.gain.value=1;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=5200,n.Q.value=.4,this.noteBus.connect(n),n.connect(this.master);const r=e.createDelay(.6);r.delayTime.value=.3;const a=e.createGain();a.gain.value=.24;const o=e.createGain();o.gain.value=.16,n.connect(r),r.connect(a),a.connect(r),r.connect(o),o.connect(this.master),this.started=!0,this.step=0,this.nextTime=e.currentTime+.12,P(this,Pt,Il).call(this,this.muted?1e-4:this.volume),P(this,Pt,Nl).call(this),e.state!=="running"&&e.resume().catch(()=>{})}catch{this.started=!1}}get sfxReady(){return!!(this.started&&this.ctx&&this.ctx.state==="running"&&!this.muted)}sfxHit(t){if(!this.sfxReady)return;const e=this.ctx.currentTime+.005;t==="rock"?(P(this,Pt,Bi).call(this,e,.13,{type:"highpass",freq:2400,q:.7,level:.22}),P(this,Pt,pe).call(this,e,220,.1,.15,"triangle",140)):t==="flower"?P(this,Pt,Bi).call(this,e,.16,{type:"bandpass",freq:3200,q:1.1,level:.11}):(P(this,Pt,Bi).call(this,e,.13,{type:"lowpass",freq:900,q:.8,level:.2}),P(this,Pt,pe).call(this,e,150,.13,.13,"sine",108))}sfxPickup(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,pe).call(this,t,880,.09,.09,"sine"),P(this,Pt,pe).call(this,t+.07,1320,.12,.075,"sine")}sfxRare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[1046,1318,1568,2093].forEach((e,i)=>P(this,Pt,pe).call(this,t+i*.075,e,.34,.09,"sine"))}sfxEat(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,pe).call(this,t,430,.16,.14,"sine",250),P(this,Pt,Bi).call(this,t+.03,.1,{type:"lowpass",freq:1400,level:.08})}sfxDeny(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,pe).call(this,t,190,.16,.12,"triangle",130),P(this,Pt,pe).call(this,t+.1,160,.16,.09,"triangle",110)}sfxFanfare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.02;[72,76,79,84,88].forEach((e,i)=>P(this,Pt,fs).call(this,Ys(e),t+i*.11,1.8,.16)),P(this,Pt,Bi).call(this,t+.02,.5,{type:"highpass",freq:4200,level:.05})}sfxBuild(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,Bi).call(this,t,.12,{type:"lowpass",freq:700,level:.18}),P(this,Pt,pe).call(this,t,170,.12,.12,"sine",120),P(this,Pt,pe).call(this,t+.12,1280,.1,.05,"triangle")}sfxUi(){this.sfxReady&&P(this,Pt,pe).call(this,this.ctx.currentTime+.005,988,.07,.06,"sine")}sfxCast(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,Bi).call(this,t,.24,{type:"bandpass",freq:900,q:.7,level:.07}),P(this,Pt,pe).call(this,t,620,.22,.035,"triangle",250)}sfxSplash(t=1){if(!this.sfxReady)return;const e=this.ctx.currentTime+.008,i=Math.max(.15,Math.min(1,Number(t)||1));P(this,Pt,Bi).call(this,e,.26,{type:"highpass",freq:1500,q:.8,level:.17*i}),P(this,Pt,pe).call(this,e,320,.16,.09*i,"sine",170)}sfxBite(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,pe).call(this,t,1046,.09,.11,"sine"),P(this,Pt,pe).call(this,t+.085,1397,.12,.1,"sine")}sfxReel(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[784,988,1319].forEach((e,i)=>P(this,Pt,pe).call(this,t+i*.06,e,.16,.08,"sine"))}sfxMeow(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,pe).call(this,t,560,.34,.075,"triangle",760),P(this,Pt,pe).call(this,t+.18,720,.26,.05,"sine",520)}sfxCoin(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.008;P(this,Pt,pe).call(this,t,1319,.08,.08,"sine"),P(this,Pt,pe).call(this,t+.06,1760,.12,.07,"sine")}sfxCook(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;P(this,Pt,Bi).call(this,t,.42,{type:"lowpass",freq:1600,q:.6,level:.09}),P(this,Pt,fs).call(this,Ys(84),t+.28,1.2,.1),P(this,Pt,fs).call(this,Ys(88),t+.4,1.1,.08)}setMuted(t){this.muted=!!t,this.started&&P(this,Pt,Il).call(this,this.muted?1e-4:this.volume)}setPhase(t){const e=Do[t]?t:"morning";e!==this.phase&&(this.phase=e,this.step=Math.ceil(this.step/16)*16)}suspend(){P(this,Pt,Sd).call(this),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){if(!this.started){this.start();return}if(!this.ctx)return;const t=()=>{this.ctx.state==="running"&&(this.nextTime=Math.max(this.nextTime,this.ctx.currentTime+.05),P(this,Pt,Nl).call(this))};this.ctx.state==="running"?t():this.ctx.resume().then(t).catch(()=>{})}}Pt=new WeakSet,Nl=function(){this.timer||(this.timer=setInterval(()=>P(this,Pt,bd).call(this),tM))},Sd=function(){this.timer&&(clearInterval(this.timer),this.timer=null)},bd=function(){const t=this.ctx;if(!(!t||t.state!=="running"))for(this.nextTime<t.currentTime-cu*2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+eM;)P(this,Pt,yd).call(this,this.step,this.nextTime),this.step+=1,this.nextTime+=cu},yd=function(t,e){const i=Do[this.phase]||Do.morning;if(this.muted)return;const n=(t%i.melody.length+i.melody.length)%i.melody.length,r=i.melody[n];if(r!=null){const a=n%4===0?1:.78;P(this,Pt,fs).call(this,Ys(r),e,1.7,.12*a)}if(n%4===0&&i.bass){const a=i.bass[n/4%i.bass.length];a!=null&&P(this,Pt,fs).call(this,Ys(a),e,2.4,.07,!0)}},fs=function(t,e,i,n,r=!1){const a=this.ctx;if(!a)return;const o=a.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.008),o.gain.exponentialRampToValueAtTime(n*.3,e+.26),o.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(this.noteBus);const l=r?[[1,1,"triangle"],[2,.18,"sine"]]:[[1,1,"sine"],[2,.3,"sine"],[3,.1,"triangle"]];for(const[c,h,u]of l){const d=a.createOscillator();d.type=u,d.frequency.value=t*c;const f=a.createGain();f.gain.value=h,c>1&&(f.gain.setValueAtTime(h,e),f.gain.exponentialRampToValueAtTime(1e-4,e+.5)),d.connect(f),f.connect(o),d.start(e),d.stop(e+i+.08)}},Il=function(t){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t,e,.35)},Ed=function(){if(this.noiseBuf||!this.ctx)return this.noiseBuf;const t=this.ctx,e=Math.floor(t.sampleRate*.4),i=t.createBuffer(1,e,t.sampleRate),n=i.getChannelData(0);for(let r=0;r<e;r++)n[r]=(Math.random()*2-1)*(1-r/e);return this.noiseBuf=i,i},Bi=function(t,e,{type:i="bandpass",freq:n=1200,q:r=1,level:a=.2}={}){const o=this.ctx,l=P(this,Pt,Ed).call(this);if(!l)return;const c=o.createBufferSource();c.buffer=l;const h=o.createBiquadFilter();h.type=i,h.frequency.value=n,h.Q.value=r;const u=o.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(Math.max(.001,a),t+.006),u.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(u),u.connect(this.noteBus),c.start(t),c.stop(t+e+.03)},pe=function(t,e,i,n,r="sine",a=null){const o=this.ctx,l=o.createOscillator();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+i*.9);const c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(.001,n),t+.012),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c),c.connect(this.noteBus),l.start(t),l.stop(t+i+.04)};const hu=9.5,ea=14,No=Math.PI*2;function Io(s){let t=s%No;return t<=-Math.PI?t+=No:t>Math.PI&&(t-=No),t}var bi,Td,wd,Ad,Rd,Cd;class nM{constructor(t,e,i){ni(this,bi);this.terrain=e,this.position=new I(t.x,e.groundY(t.x,t.z),t.z),this.yaw=Math.PI,this.targetYaw=this.yaw,this.speedScale=1,this.moving=0,this.idleT=0,this.walkT=0,this.flip=!1,this.facing="back",this.emoteT=0,this.frameName="idle",this.colliders=[],this.group=new ci,this.group.name="Player",this.atlas=i.get("protagonist"),this.billboard=new fr(this.atlas,"idle",{height:Jr.spriteHeight}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.shadow=dr(.4,.34),this.group.position.copy(this.position),this.dust=P(this,bi,Td).call(this),this.sprites=[this.billboard.material]}wave(){this.emoteT=1.4}update(t,e,i,n){const r=Math.min(1,Math.hypot(e.x,e.z)),a=i||this.terrain;if(this.moving+=(r-this.moving)*Math.min(1,t*10),this.idleT+=t,this.emoteT>0&&(this.emoteT=Math.max(0,this.emoteT-t)),r>.02){const l=Jr.speed*r*(this.speedScale||1),c=e.x/(r||1)*l*t,h=e.z/(r||1)*l*t,u=this.canStand(a,this.position.x+c,this.position.z);u&&(this.position.x+=c);const d=this.canStand(a,this.position.x,this.position.z+h);d&&(this.position.z+=h),!u&&!d&&this.canStand(a,this.position.x+c*.5,this.position.z+h*.5)&&(this.position.x+=c*.5,this.position.z+=h*.5),this.targetYaw=Math.atan2(e.x,e.z),this.walkT+=t;const f=Math.floor(this.walkT*hu*1.5);f!==this.lastStep&&(this.lastStep=f,P(this,bi,wd).call(this,this.position.x,this.position.y,this.position.z,{x:e.x/(r||1),z:e.z/(r||1)}))}this.position.y+=(a.groundY(this.position.x,this.position.z)-this.position.y)*Math.min(1,t*14);const o=Io(this.targetYaw-this.yaw);this.yaw=Io(this.yaw+o*Math.min(1,t*Jr.turnLerp)),P(this,bi,Rd).call(this,r),P(this,bi,Cd).call(this,n),P(this,bi,Ad).call(this,t)}canStand(t,e,i){if(!t.isWalkable(e,i))return!1;for(let n=0;n<this.colliders.length;n++){const r=this.colliders[n],a=e-r.x,o=i-r.z,l=r.r+Jr.radius;if(a*a+o*o<l*l)return!1}return!0}teleport(t,e,i){const n=i||this.terrain;this.position.set(t,n.groundY(t,e),e),this.group.position.copy(this.position),this.shadow.position.set(t,this.position.y+.02,e)}setYaw(t){this.yaw=Io(t),this.targetYaw=this.yaw}}bi=new WeakSet,Td=function(){const t=new _r(1,10);t.rotateX(-Math.PI/2);const e=new Hi({color:"#fff8e6",transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}),i=new Pp(t,e,ea);i.name="PlayerDust",i.frustumCulled=!1,i.renderOrder=3,this.dustParts=Array.from({length:ea},()=>({x:0,y:-99,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1})),this.dustCursor=0;const n=new Jt().makeScale(0,0,0);for(let r=0;r<ea;r++)i.setMatrixAt(r,n);return i.instanceMatrix.needsUpdate=!0,i},wd=function(t,e,i,n){const r=this.dustParts[this.dustCursor];this.dustCursor=(this.dustCursor+1)%ea,r.x=t+(Math.random()-.5)*.16,r.y=e+.03,r.z=i+(Math.random()-.5)*.16,r.vx=-n.x*.5+(Math.random()-.5)*.35,r.vz=-n.z*.5+(Math.random()-.5)*.35,r.vy=.2+Math.random()*.16,r.max=.4+Math.random()*.2,r.life=r.max,r.size=.06+Math.random()*.05},Ad=function(t){const e=new Jt,i=new I,n=new Wn,r=new I;for(let a=0;a<this.dustParts.length;a++){const o=this.dustParts[a];if(o.life<=0){e.makeScale(0,0,0),this.dust.setMatrixAt(a,e);continue}o.life=Math.max(0,o.life-t);const l=1-o.life/o.max;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.vy-=.35*t,o.vx*=1-t*2.2,o.vz*=1-t*2.2;const c=o.size*(.55+l*1.15)*Math.min(1,(1-l)*1.9);i.set(o.x,o.y,o.z),r.set(c,c,c),e.compose(i,n,r),this.dust.setMatrixAt(a,e)}this.dust.instanceMatrix.needsUpdate=!0},Rd=function(t){if(this.emoteT>0){this.frameName=this.emoteT>.85?"wave":"idle",this.billboard.setFrame(this.frameName,!1);return}if(t>.06){const e=Math.floor(this.walkT*hu)%4,i=Math.sin(this.yaw),n=Math.cos(this.yaw);let r,a=!1;if(Math.abs(i)>Math.abs(n)*1.02)r=`side${e+1}`,a=i>0,this.facing=a?"right":"left";else{const o=n<0;r=`${o?"back":"front"}${e+1}`,this.facing=o?"back":"front"}this.frameName=r,this.flip=a,this.billboard.setFrame(r,a)}else this.frameName!=="idle"&&(this.frameName="idle",this.flip=!1,this.facing="front",this.billboard.setFrame("idle",!1))},Cd=function(t){this.group.position.set(this.position.x,this.position.y,this.position.z),t&&this.billboard.faceCamera(t),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z)};const uu=7,sM=.85,rM=3.1,du=1.45;var Si,Pd,Ld,Dd,ga;class aM{constructor(t,e,i){ni(this,Si);this.kind="cat",this.id=t.id,this.name=t.name,this.terrain=e,this.home=new At(t.x,t.z),this.position=new I(t.x,e.groundY(t.x,t.z),t.z),this.height=t.height||.9,this.atlas=i.get(t.set||t.id),this.group=new ci,this.group.name=`Cat_${t.id}`,this.group.position.copy(this.position),this.billboard=new fr(this.atlas,"sit",{height:this.height}),this.group.add(this.billboard.mesh),this.body=this.billboard.mesh,this.body.userData.actor=this,this.group.userData.actor=this,this.shadow=dr(.24,.3),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=pd(.26),this.heart.position.set(0,this.height*1.1,0),this.group.add(this.heart),this.state="idle",this.stateT=1+Math.random()*2,this.target=null,this.walkT=Math.random()*2,this.hop=0,this.heartT=0,this.pets=0,this.follow=!1,this.followGrace=0,this.cd={pet:0,snack:0},this.yaw=Math.random()*Math.PI*2,this.frameName="sit",this.restPose="sit",this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}pet(){this.hop=1,this.heartT=1.4,this.pets+=1,this.state="happy",this.stateT=1.2,this.billboard.setFrame("happy"),this.frameName="happy"}feast(){this.pet(),this.hop=1.25,this.heartT=1.8}setFollow(t){this.follow=!!t,this.followGrace=.4,this.follow||(this.target=null)}update(t,e,i=null,n=!0){if(this.cd.pet=Math.max(0,this.cd.pet-t),this.cd.snack=Math.max(0,this.cd.snack-t),this.stateT-=t,this.follow&&i)n&&P(this,Si,Ld).call(this,t,i);else if(this.state==="walk"&&this.target){const l=this.target.x-this.position.x,c=this.target.y-this.position.z,h=Math.hypot(l,c);if(h<.12)this.target=null,P(this,Si,ga).call(this);else{const u=l/h,d=c/h,f=Math.min(h,sM*t),_=this.position.x+u*f,S=this.position.z+d*f;this.terrain.isWalkable(_,S)?(this.position.x=_,this.position.z=S):(this.target=null,P(this,Si,ga).call(this)),this.yaw=Math.atan2(u,d),this.walkT+=t;const p=Math.floor(this.walkT*uu)%4,m=Math.abs(u),y=Math.abs(d);let R;m>y*1.05?R=`${u<0?"left":"right"}${p+1}`:R=`${d>0?"front":"back"}${p+1}`,R!==this.frameName&&(this.frameName=R,this.billboard.setFrame(R))}}else!this.follow&&this.stateT<=0&&n&&(Math.random()<.62?P(this,Si,Dd).call(this):P(this,Si,ga).call(this));this.state==="happy"&&this.stateT<=0&&(this.state="rest",this.stateT=1.8,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);const r=this.terrain.groundY(this.position.x,this.position.z);this.position.y+=(r-this.position.y)*Math.min(1,t*12);let a=0;this.hop>0&&(this.hop=Math.max(0,this.hop-t*1.5),a=Math.sin((1-this.hop)*Math.PI)*.22),this.group.position.set(this.position.x,this.position.y+a,this.position.z),e&&this.billboard.faceCamera(e),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-a*.8;if(this.shadow.scale.set(o,1,o),this.heartT>0){this.heartT=Math.max(0,this.heartT-t);const l=1-this.heartT/1.4;this.heart.visible=!0,this.heart.position.set(0,this.height*1.05+l*.55,0),this.heart.material.opacity=Math.min(1,this.heartT*1.8);const c=this.height*.3+l*this.height*.18;this.heart.scale.set(c,c,1)}else this.heart.visible&&(this.heart.visible=!1)}}Si=new WeakSet,Pd=function(t,e){const i=Math.floor(this.walkT*uu)%4,n=Math.abs(t),r=Math.abs(e),a=n>r*1.05?`${t<0?"left":"right"}${i+1}`:`${e>0?"front":"back"}${i+1}`;a!==this.frameName&&(this.frameName=a,this.billboard.setFrame(a))},Ld=function(t,e){const i=e.x-this.position.x,n=e.z-this.position.z,r=Math.hypot(i,n);if(r<du+.35){this.state!=="rest"&&(this.state="rest",this.stateT=.6,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);return}const a=i/r,o=n/r,l=Math.min(r-du,rM*t),c=this.position.x+a*l,h=this.position.z+o*l;this.terrain.isWalkable(c,h)?(this.position.x=c,this.position.z=h,this.state="walk",this.yaw=Math.atan2(a,o),this.walkT+=t,P(this,Si,Pd).call(this,a,o)):r>4.5&&this.terrain.isWalkable(e.x,e.z)&&(this.position.x=e.x-a*1.4,this.position.z=e.z-o*1.4)},Dd=function(){for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,i=1.2+Math.random()*3.4,n=this.home.x+Math.cos(e)*i,r=this.home.y+Math.sin(e)*i;if(this.terrain.isWalkable(n,r)){this.target=new At(n,r),this.state="walk";return}}this.state="idle",this.stateT=1.5},ga=function(){const t=["sit","loaf","groom","sit","loaf"];this.restPose=t[Math.floor(Math.random()*t.length)],this.state="rest",this.stateT=2.6+Math.random()*3.4,this.billboard.setFrame(this.restPose),this.frameName=this.restPose};const oM=["idle1","idle2","idle3","idle4"],lM=["smile1","smile2","smile3","smile4"],cM=["joy1","joy2","joy3","joy4"];class hM{constructor(t,e,i){this.kind="ditto",this.id=t.id,this.name=t.name,this.flavor=t.flavor||"",this.variant=t.variant||"basic",this.isBasic=this.variant==="basic",this.discovered=!1,this.terrain=e,this.height=t.height||.8,this.position=new I(t.x,e.groundY(t.x,t.z),t.z),this.group=new ci,this.group.name=`Ditto_${t.id}`,this.group.position.copy(this.position),this.atlas=i.get(this.isBasic?"ditto_basic":"disguises"),this.billboard=new fr(this.atlas,this.isBasic?"idle1":this.variant,{height:this.height,exact:!this.isBasic}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.group.userData.actor=this,this.hitMesh=this.mesh,this.shadow=dr(this.height*.46,.26),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=pd(.24),this.heart.position.set(0,this.height*1.05,0),this.group.add(this.heart),this.ring=Ax(this.height*.46),this.ring.position.y=.04,this.ring.visible=!1,this.group.add(this.ring),this.t=Math.random()*6.28,this.near=!1,this.reactT=0,this.hop=0,this.joy=0,this.frameIdx=0,this.frameT=0,this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}setNear(t){this.near=t}markDiscovered(){this.discovered=!0,this.joy=3.2,this.hop=1,this.reactT=1}interact(){this.reactT=1.4,this.hop=1}update(t,e,i){if(this.t+=t,this.joy>0&&(this.joy=Math.max(0,this.joy-t)),this.reactT>0&&(this.reactT=Math.max(0,this.reactT-t)),this.frameT+=t,this.isBasic){const h=this.joy>0?cM:this.near||this.reactT>0?lM:oM,u=this.joy>0?7:3.2;this.frameT>1/u&&(this.frameT=0,this.frameIdx=(this.frameIdx+1)%4);const d=h[this.frameIdx];this.billboard.frame!==this.atlas.frames.get(d)&&this.billboard.setFrame(d)}else this.frameT>2.4&&Math.random()<.5&&(this.frameT=0,this.billboard.setFrame(this.variant));const n=1+Math.sin(this.t*1.7)*(this.isBasic?.035:.018);this.hop>0&&(this.hop=Math.max(0,this.hop-t*2.2));const r=this.hop>0?Math.sin((1-this.hop)*Math.PI)*this.height*.22:0,a=this.reactT>0?Math.sin(this.t*26)*.06*this.reactT:0;this.group.position.set(this.position.x,this.position.y+r,this.position.z),this.billboard.mesh.scale.set(n+a*.3,n-a*.3,1),i&&this.billboard.faceCamera(i),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-r*.7;this.shadow.scale.set(o,1,o);const l=this.near&&!this.discovered?.34:0,c=this.ring.material;if(c.opacity+=(l-c.opacity)*Math.min(1,t*6),this.ring.visible=c.opacity>.01,this.ring.visible){const h=1+Math.sin(this.t*2.4)*.06;this.ring.scale.set(h,1,h),this.ring.rotation.y+=t*.4}if(this.reactT>0||this.joy>0){const h=this.joy>0?this.joy/3.2:this.reactT/1.4;this.heart.visible=!0;const u=1-Math.min(1,h);this.heart.position.set(0,this.height*(1+u*.7),0),this.heart.material.opacity=Math.min(1,h*2.2);const d=this.height*.3+u*this.height*.14;this.heart.scale.set(d,d,1)}else this.heart.visible&&(this.heart.visible=!1);e&&(this.near=this.distanceTo(e)<3.8)}}function x(s,t={},...e){const i=document.createElement(s);for(const[n,r]of Object.entries(t||{}))r!=null&&(n==="class"?i.className=r:n==="text"?i.textContent=r:n==="style"&&typeof r=="object"?Object.assign(i.style,r):n==="dataset"&&typeof r=="object"?Object.assign(i.dataset,r):n.startsWith("on")&&typeof r=="function"?i.addEventListener(n.slice(2).toLowerCase(),r):i.setAttribute(n,r));for(const n of e.flat(3))n==null||n===!1||i.append(n.nodeType?n:document.createTextNode(String(n)));return i}function uM(s){for(;s.firstChild;)s.removeChild(s.firstChild)}var ui,Ul,Nd,Id,_a;class dM{constructor(t){ni(this,ui);this.zone=x("div",{class:"joystick-zone"}),this.home=x("div",{class:"joystick-home"},x("span",{},"MOVE")),this.base=x("div",{class:"joystick-base"},x("div",{class:"joystick-knob"})),this.knob=this.base.firstChild,this.zone.append(this.home,this.base),t.append(this.zone),this.radius=52,this.deadZone=.14,this.vector={x:0,y:0},this.active=!1,this.enabled=!0,this.pointerId=null,this.origin={x:0,y:0},this.zone.addEventListener("pointerdown",e=>P(this,ui,Nd).call(this,e)),this.zone.addEventListener("pointermove",e=>P(this,ui,Id).call(this,e)),this.zone.addEventListener("pointerup",e=>P(this,ui,_a).call(this,e)),this.zone.addEventListener("pointercancel",e=>P(this,ui,_a).call(this,e)),this.zone.addEventListener("lostpointercapture",e=>P(this,ui,_a).call(this,e)),this.zone.addEventListener("contextmenu",e=>e.preventDefault())}setEnabled(t){this.enabled=t,t||this.reset(),this.zone.style.opacity=t?"1":"0.35"}reset(){const t=this.pointerId;this.pointerId=null,this.active=!1,this.vector.x=0,this.vector.y=0,this.base.classList.remove("active"),this.home.style.opacity="0.85",this.knob.style.transform="translate(0px, 0px)";try{t!==null&&this.zone.hasPointerCapture&&this.zone.hasPointerCapture(t)&&this.zone.releasePointerCapture(t)}catch{}}}ui=new WeakSet,Ul=function(t){const e=this.zone.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},Nd=function(t){if(!this.enabled||this.pointerId!==null)return;t.preventDefault(),this.pointerId=t.pointerId,this.active=!0;const e=P(this,ui,Ul).call(this,t);this.origin=e,this.base.style.left=`${e.x}px`,this.base.style.top=`${e.y}px`,this.base.classList.add("active"),this.home.style.opacity="0",this.knob.style.transform="translate(0px, 0px)",this.vector.x=0,this.vector.y=0;try{this.zone.setPointerCapture(t.pointerId)}catch{}},Id=function(t){if(this.pointerId!==t.pointerId||!this.active)return;t.preventDefault();const e=P(this,ui,Ul).call(this,t);let i=e.x-this.origin.x,n=e.y-this.origin.y;const r=Math.hypot(i,n);r>this.radius&&(i=i/r*this.radius,n=n/r*this.radius),this.knob.style.transform=`translate(${i.toFixed(1)}px, ${n.toFixed(1)}px)`;let a=i/this.radius,o=n/this.radius;const l=Math.hypot(a,o);if(l<this.deadZone)a=0,o=0;else{const c=(l-this.deadZone)/(1-this.deadZone);a=a/l*c,o=o/l*c}this.vector.x=a,this.vector.y=o},_a=function(t){this.pointerId!==null&&t.pointerId!==void 0&&t.pointerId!==this.pointerId||this.reset()};class fM{constructor(t){this.container=x("div",{class:"toasts"}),t.append(this.container)}show(t,e=2600){for(;this.container.children.length>=3;)this.container.firstChild.remove();const i=x("div",{class:"toast"},t);this.container.append(i);const n=window.setTimeout(()=>{i.classList.add("out"),window.setTimeout(()=>i.remove(),380)},e);return i.addEventListener("animationend",()=>{i.classList.contains("out")&&window.clearTimeout(n)}),i}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}const pM=[{id:"bag",icon:"🎒",label:"가방"},{id:"codex",icon:"📔",label:"도감"},{id:"build",icon:"🏗️",label:"건축"},{id:"rank",icon:"🌱",label:"랭크"}];class mM{constructor(t,e={}){this.handlers=e,this.container=x("div",{class:"hud-root hidden"}),t.append(this.container),this.phIcon=x("span",{},"🌅"),this.phLabel=x("span",{},"아침"),this.wxLabel=x("span",{},"맑음"),this.dayLabel=x("span",{class:"day"},"Day 1"),this.clockLabel=x("span",{class:"clock"},"00:00"),this.speedTag=x("span",{class:"speed hidden"},"10×"),this.pill=x("div",{class:"pill"},this.phIcon,this.phLabel,x("span",{class:"sep"},"·"),this.wxLabel,x("span",{class:"sep"},"·"),this.dayLabel,x("span",{class:"sep"},"·"),this.clockLabel,this.speedTag),this.staminaFill=x("i"),this.staminaVal=x("span",{class:"val"},"100"),this.stamina=x("div",{class:"stamina",title:"기력 — 채집할 때 줄고, 열매를 먹으면 차요"},x("span",{class:"ico"},"💪"),x("div",{class:"bar"},this.staminaFill),this.staminaVal),this.mailBadge=x("span",{class:"badge hidden"},"0"),this.mailBtn=x("button",{class:"icon-btn mail-btn",type:"button","aria-label":"우체통 열기",onclick:()=>this.handlers.onMail?.()},x("span",{class:"ico"},"📬"),this.mailBadge),this.coinVal=x("span",{class:"n"},"0"),this.coinChip=x("div",{class:"coin-chip",title:"섬 코인 — 자판기에 물건을 팔면 모여요"},x("span",{class:"ico"},"🪙"),this.coinVal),this.questBadge=x("span",{class:"badge hidden"},"0"),this.questBtn=x("button",{class:"icon-btn quest-btn",type:"button","aria-label":"오늘의 의뢰 열기",onclick:()=>this.handlers.onQuest?.()},x("span",{class:"ico"},"📋"),this.questBadge),this.buffChip=x("span",{class:"buff-chip hidden"},"✨"),this.left=x("div",{class:"hud-left"},this.pill,x("div",{class:"hud-stats"},this.stamina,this.coinChip,this.mailBtn,this.questBtn,this.buffChip)),this.muteBtn=x("button",{class:"icon-btn",type:"button","aria-label":"음소거 토글",onclick:()=>this.handlers.onMute?.()},"🔊"),this.pauseBtn=x("button",{class:"icon-btn",type:"button","aria-label":"일시정지 및 설정",onclick:()=>this.handlers.onPause?.()},"⏸"),this.top=x("div",{class:"hud-top"},this.left,x("div",{class:"hud-controls"},this.muteBtn,this.pauseBtn)),this.actionIcon=x("span",{class:"ico"},"✋"),this.actionText=x("span",{class:"txt"},"둘러보기"),this.actionBtn=x("button",{class:"action-btn",type:"button",disabled:"disabled","aria-label":"상황 액션",onclick:()=>this.handlers.onAction?.()},this.actionIcon,this.actionText),this.quickbar=x("div",{class:"quickbar"}),this.quickBadges={};for(const i of pM){const n=i.id==="bag"?x("span",{class:"quick-badge"},"0/8"):null,r=x("button",{class:"quick",type:"button",onclick:()=>this.handlers.onQuick?.(i.id)},x("span",{class:"ico"},i.icon),x("span",{},i.label),n);n&&(this.quickBadges.bag=n),this.quickbar.append(r)}this.joystick=new dM(this.container),this.fishLabel=x("span",{class:"txt"},""),this.fishBar=x("i"),this.fishStrip=x("div",{class:"fish-strip hidden"},x("span",{class:"ico"},"🎣"),this.fishLabel,x("div",{class:"bar"},this.fishBar)),this.bitePop=x("div",{class:"bite-pop"},"!"),this.toastView=new fM(this.container),this.glOverlay=x("div",{class:"gl-overlay"},x("div",{class:"box"},x("h3",{},"그래픽을 다시 준비하고 있어요"),x("p",{},"잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요."))),this.container.append(this.top,this.actionBtn,this.quickbar,this.fishStrip,this.bitePop,this.glOverlay),this.lastPill="",this.lastStamina=-1,this.lastMail=-1,this.lastCoins=-1,this.lastQuests=-1}show(){this.container.classList.remove("hidden")}hide(){this.container.classList.add("hidden")}setTime({icon:t,label:e,weatherIcon:i,weatherLabel:n,day:r,clock:a,speed:o}){const l=`${t}${e}${i}${n}${r}${a}${o}`;l!==this.lastPill&&(this.lastPill=l,this.phIcon.textContent=t,this.phLabel.textContent=e,this.wxLabel.textContent=`${i} ${n}`,this.dayLabel.textContent=`Day ${r}`,this.clockLabel.textContent=a,o&&o!==1?(this.speedTag.textContent=`${o}×`,this.speedTag.classList.remove("hidden")):this.speedTag.classList.add("hidden"))}setStamina(t,e=100){const i=Math.max(0,Math.min(e,Math.round(t)));i!==this.lastStamina&&(this.lastStamina=i,this.staminaFill.style.width=`${i/e*100}%`,this.staminaVal.textContent=String(i),this.stamina.classList.toggle("low",i<25),this.stamina.classList.toggle("mid",i>=25&&i<55))}setMail(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastMail&&(this.lastMail=e,this.mailBadge.textContent=e>9?"9+":String(e),this.mailBadge.classList.toggle("hidden",e<=0),this.mailBtn.classList.toggle("has-mail",e>0))}setBag(t,e){const i=this.quickBadges.bag;i&&(i.textContent=`${t}/${e}`,i.classList.toggle("full",t>=e))}setCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastCoins&&(this.lastCoins=e,this.coinVal.textContent=String(e),this.coinChip.classList.toggle("rich",e>=200))}setQuests(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastQuests&&(this.lastQuests=e,this.questBadge.textContent=e>9?"9+":String(e),this.questBadge.classList.toggle("hidden",e<=0),this.questBtn.classList.toggle("has-mail",e>0))}setBuff(t){if(!t){this.buffChip.classList.add("hidden");return}this.buffChip.textContent=t,this.buffChip.classList.remove("hidden")}setFishing(t){if(!t){this.fishStrip.classList.add("hidden"),this.fishStrip.classList.remove("urgent");return}this.fishStrip.classList.remove("hidden"),this.fishStrip.classList.toggle("urgent",!!t.urgent),this.fishLabel.textContent!==t.label&&(this.fishLabel.textContent=t.label);const e=t.ratio===void 0?1:Math.max(0,Math.min(1,t.ratio));this.fishBar.style.width=`${e*100}%`}bite(){this.bitePop.classList.remove("on"),this.bitePop.offsetWidth,this.bitePop.classList.add("on"),this.bitePop.__timer&&clearTimeout(this.bitePop.__timer),this.bitePop.__timer=setTimeout(()=>this.bitePop.classList.remove("on"),1600)}setAction({active:t,icon:e="✋",label:i="둘러보기"}){t===this.actionBtn.__active&&i===this.actionBtn.__label||(this.actionBtn.__active=t,this.actionBtn.__label=i,this.actionIcon.textContent=e,this.actionText.textContent=i,t?(this.actionBtn.removeAttribute("disabled"),this.actionBtn.classList.add("enabled")):(this.actionBtn.setAttribute("disabled","disabled"),this.actionBtn.classList.remove("enabled")))}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊",this.muteBtn.setAttribute("aria-pressed",t?"true":"false")}toast(t,e=2600){return this.toastView.show(t,e)}setContextLost(t){this.glOverlay.classList.toggle("on",!!t)}}var mr,Fl;class gM{constructor(t,{hasSave:e=!1,onContinue:i,onNew:n}={}){ni(this,mr);this.onContinue=i,this.onNew=n,this.hasSave=e,this.busy=!1,this.progressBar=x("i"),this.progressWrap=x("div",{class:"title-progress"},this.progressBar),this.continueBtn=e?x("button",{class:"btn primary",type:"button",disabled:"disabled"},"이어하기"):null,this.newBtn=x("button",{class:`btn ${e?"ghost":"primary"}`,type:"button",disabled:"disabled"},"새로 시작"),this.continueBtn&&this.continueBtn.addEventListener("click",()=>P(this,mr,Fl).call(this,"continue")),this.newBtn.addEventListener("click",()=>P(this,mr,Fl).call(this,"new")),this.hint=x("div",{class:"title-hint"},e?"저장된 섬이 있어요 — 이어서 걸어볼까요?":"저장된 섬이 없어요 — 새 섬을 열어 볼까요?"),this.el=x("div",{class:"title-screen"},x("div",{class:"title-badge"},"PHASE 1 · HD-2D 도트"),x("div",{class:"title-panel"},x("p",{class:"title-eyebrow"},"보경이를 위한 작은 섬"),x("h1",{class:"title-heading"},"어설픈 메타몽 섬"),x("p",{class:"title-sub"},"눈만은 못 숨기는 메타몽들과 고양이들이 모여든 비밀 낙원. 오늘도 고생 많았어요 — 여기선 아무것도 안 급해도 돼요."),this.progressWrap,x("div",{class:"title-actions"},this.continueBtn,this.newBtn),this.hint),x("div",{class:"title-version"},"GDD v1.6 · Phase 1 · HD-2D")),t.append(this.el)}setProgress(t){const e=Math.max(.06,Math.min(1,t));this.progressBar.style.width=`${Math.round(e*100)}%`,e>=1&&this.setReady(!0)}setReady(t){this.busy||(this.continueBtn&&(t?this.continueBtn.removeAttribute("disabled"):this.continueBtn.setAttribute("disabled","disabled")),t?this.newBtn.removeAttribute("disabled"):this.newBtn.setAttribute("disabled","disabled"),this.progressWrap.style.opacity=t?"0":"1")}hide(){this.el.classList.add("hidden")}show(){this.el.classList.remove("hidden"),this.busy=!1,this.setReady(!1)}destroy(){this.el.remove()}}mr=new WeakSet,Fl=function(t){if(this.busy)return;this.busy=!0,this.hint.textContent=t==="continue"?"저장된 섬으로 돌아가는 중…":"새로운 섬을 여는 중…";const e=t==="continue"?this.onContinue:this.onNew;e&&e(t)};class _M{constructor(t){this.card=x("div",{class:"modal-card"}),this.backdrop=x("div",{class:"modal"},this.card),t.append(this.backdrop),this.isOpen=!1,this.onClose=null,this.backdrop.addEventListener("pointerdown",e=>{e.target===this.backdrop&&this.close()})}open(t){const{title:e,subtitle:i="",body:n="",actions:r=[],onClose:a=null,closable:o=!0}=t;this.onClose=a,uM(this.card),this.card.append(x("div",{class:"modal-head"},x("div",{},x("h2",{class:"modal-title"},e),i?x("p",{class:"modal-sub"},i):null),o?x("button",{class:"modal-close",type:"button","aria-label":"닫기",onclick:()=>this.close()},"✕"):null));const l=x("div",{class:"modal-body"});if(typeof n=="string"?l.append(document.createTextNode(n)):n instanceof Node?l.append(n):Array.isArray(n)&&n.forEach(c=>c&&l.append(c)),this.card.append(l),r.length){const c=x("div",{class:"modal-actions"});for(const h of r){const u=x("button",{class:`btn ${h.kind||""}`,type:"button"},h.label);h.disabled&&(u.disabled=!0,u.setAttribute("disabled","disabled")),u.addEventListener("click",()=>{u.disabled||h.onClick&&h.onClick()}),c.append(u)}this.card.append(c)}this.backdrop.classList.add("open"),this.isOpen=!0,this.card.scrollTop=0}close(){if(!this.isOpen)return;this.backdrop.classList.remove("open"),this.isOpen=!1;const t=this.onClose;this.onClose=null,t&&t()}}class vM{constructor(t,e){this.container=x("div",{class:"landmark-layer"}),t.append(this.container),this.items=e.map(i=>{const n=x("span",{class:"lm-day"},`${i.day}일차 복구`),r=x("div",{class:"landmark-pill"},x("span",{class:"lm-ico"},i.icon),x("span",{class:"lm-name"},i.name),n);return this.container.append(r),{site:i,el:r,dayEl:n,x:i.x,y:i.y+i.markerY+.55,z:i.z,opacity:-1,done:!1}}),this.v=new I}setDone(t,e=!0){const i=this.items.find(n=>n.site.id===t);i&&(i.done=!!e,i.el.classList.toggle("done",!!e),i.dayEl.textContent=e?"✨ 복구 완료":`${i.site.day}일차 복구`)}setVisible(t){this.container.style.opacity=t?"1":"0"}update(t,e){if(!e){this.container.style.opacity!=="0"&&(this.container.style.opacity="0");return}this.container.style.opacity="1";const i=window.innerWidth,n=window.innerHeight,r=t.position;for(const a of this.items){this.v.set(a.x,a.y,a.z);const o=r.distanceTo(this.v);this.v.project(t);const l=this.v.z>1,c=(this.v.x*.5+.5)*i,h=(-this.v.y*.5+.5)*n,u=h<92||h>n-96||c<24||c>i-24,d=l||o>34||u?0:Math.min(1,Math.max(0,(34-o)/12))*.95;a.opacity+=(d-a.opacity)*.18,Math.abs(d-a.opacity)<.02&&(a.opacity=d);const f=a.el;if(a.opacity<=.02){f.style.display!=="none"&&(f.style.display="none");continue}f.style.display==="none"&&(f.style.display="flex"),f.style.opacity=a.opacity.toFixed(2),f.style.transform=`translate(-50%, -50%) translate(${c.toFixed(1)}px, ${h.toFixed(1)}px)`}}}const La=[{id:"notice_life",icon:"🌿",from:"섬 지기",title:"섬에 생활의 손길이 생겼어요",tag:"공지",body:["보경 님, 섬에 작은 변화가 생겼어요.","이제 나무를 톡톡 두드리면 통나무가, 바위를 두드리면 돌이 나와요. 꽃덤불은 한 번만 스치면 꽃잎이 손에 들어와요.","가방은 여덟 칸이에요. 한 칸에 스무 개까지 담기고, 넘치면 그 자리에 잠깐 내려놓게 돼요.","공방에 가면 창고를 열 수 있어요. 재료를 모아 두었다가 부두·공방·자판기·등대를 하나씩 복구해 보세요.","나무 밑에는 가끔 반짝이는 열매가 떨어져요. 먹으면 기력이 차올라요."],gift:null},{id:"welcome_bokyung",icon:"💌",from:"울림이 대신 쓴 편지",title:"보경 님께 — 섬에 오신 걸 환영해요",tag:"웰컴",body:["보경 님, 이 섬은 보경 님이 쉬어 가라고 만든 아주 작은 곳이에요. 아무것도 안 해도 괜찮아요.","그래도 손이 심심하면 나무를 두드려 보세요. 통나무가 나오고, 벚꽃나무는 꽃잎도 조금 흘려요.","동봉한 선물을 받아 두세요. 열매 세 개는 기력을 채우는 데, 별조각 하나는 자판기 복구에 써요.","천천히 걸어 보세요. 솜이와 옹이가 먼저 와서 기다리고 있어요.","— 늘 보경 님 편인 울림이"],gift:{berry:3,star:1}},{id:"guide_restore",icon:"🔨",from:"섬 지기",title:"복구 가이드 — 네 곳의 약속",tag:"가이드",body:["부두 — 통나무 6 · 돌 2. 배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.","공방 — 통나무 8 · 돌 6. 창고와 도구방이 함께 열려요.","메타몽 자판기 — 돌 4 · 꽃잎 5 · 별조각 2. 복구하면 밤에 은은하게 빛나요.","등대 — 통나무 12 · 돌 10 · 별조각 5. 복구하면 밤마다 따뜻한 불이 켜져요.","별조각은 바위에서 아주 가끔 나와요. 기력이 모자라면 열매를 먹고 다시 두드리면 돼요."],gift:null}],ia=s=>Le[s]?Le[s].name:s,Uo=s=>Le[s]?Le[s].icon:"❔";var Ia,Ud;class xM{constructor(t){ni(this,Ia);this.game=t}bag(){const t=this.game.progress.inventory,e=x("div",{class:"bag-grid"});for(let a=0;a<qe.slots;a++){const o=t.bag[a],l=x("div",{class:`bag-slot ${o?"filled":"empty"} ${o&&o.id==="berry"?"tap":""}`},x("span",{class:"ico"},o?Le[o.id].icon:"·"),o?x("span",{class:"n"},String(o.n)):null,o?x("span",{class:"nm"},ia(o.id)):null);o&&o.id==="berry"&&l.addEventListener("click",()=>this.game.eatBerry()),e.append(l)}const i=t.count("berry"),n=i>0?x("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.eatBerry()},`🍓 열매 먹기  ·  기력 +30  (${i}개)`):x("div",{class:"hint"},"열매가 없어요 — 온전한 나무 밑에 가끔 떨어져요 🍓");return{title:"🎒 가방",subtitle:"채집한 재료와 열매가 여기에 담겨요",body:x("div",{},x("div",{class:"hint"},`가방 ${t.usedSlots()}/${qe.slots}칸 · 담긴 재료 ${t.totalItems()}개 · 한 칸에 ${qe.stack}개까지`),e,x("div",{class:"section-label"},"쓰기"),n,x("div",{class:"section-label"},"재료가 가득 차면"),x("div",{class:"hint"},"공방의 창고에 맡겨 두세요. 가방이 넘치면 그 자리에 잠깐 내려놓게 돼요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}storage(){const t=this.game.progress.inventory,e=t.bagEntries(),i=t.storageEntries(),n=(a,o)=>{const l=o==="out",c=h=>l?this.game.moveToStorage(a.id,h):this.game.moveFromStorage(a.id,h);return x("div",{class:"store-row"},x("span",{class:"ico"},Uo(a.id)),x("span",{class:"nm"},ia(a.id)),x("span",{class:"n"},String(a.n)),x("button",{class:"mini",type:"button","aria-label":`1개 ${l?"창고로":"가방으로"}`,onclick:()=>c(1)},l?"→1":"←1"),x("button",{class:"mini",type:"button","aria-label":`전부 ${l?"창고로":"가방으로"}`,onclick:()=>c("all")},l?"→전체":"←전체"))};return{title:"📦 공방 창고",subtitle:"대량으로 모아 두고, 필요할 때 가방으로 꺼내요",body:x("div",{},x("div",{class:"hint"},"1 은 하나씩, 전체 는 그 재료를 전부 옮겨요 — 오른쪽은 창고로, 왼쪽은 가방으로."),x("div",{class:"section-label"},`🎒 가방 → 📦 창고  (${t.usedSlots()}/${qe.slots}칸)`),e.length?x("div",{class:"store-list"},...e.map(a=>n(a,"out"))):x("div",{class:"hint"},"가방이 비어 있어요."),x("div",{class:"section-label"},"📦 창고 → 🎒 가방"),i.length?x("div",{class:"store-list"},...i.map(a=>n(a,"in"))):x("div",{class:"hint"},"창고가 비어 있어요. 모아 둔 재료가 여기 쌓여요.")),actions:[{label:"건물 복구 보기",kind:"ghost",onClick:()=>this.game.openBuild("workshop")},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}build(t){const e=Gi.find(_=>_.id===t)||Gi[0],i=this.game.progress.building(e.id),n=ma[e.id]||{},r=this.game.progress.inventory,a=Object.values(n).reduce((_,S)=>_+S,0),o=Object.entries(n).reduce((_,[S,p])=>_+Math.min(p,i.invested[S]||0),0),l=a?Math.round(o/a*100):0,c=Object.entries(n).every(([_,S])=>(i.invested[_]||0)>=S),h=Object.entries(n).some(([_,S])=>(i.invested[_]||0)<S&&r.count(_)>0),u=Object.entries(n).map(([_,S])=>{const p=r.count(_),m=Math.min(S,i.invested[_]||0),y=m>=S;return x("div",{class:`req-row ${y?"done":""}`},x("span",{class:"ico"},Uo(_)),x("div",{class:"info"},x("div",{class:"nm"},`${ia(_)}${y?" ✓":""}`),x("div",{class:"sub"},`가방 ${p}개 · 창고 ${this.game.progress.inventory.stored(_)}개`)),x("span",{class:`need ${p+(i.invested[_]||0)>=S?"ok":"lack"}`},`${m}/${S}`))}),d=i.done?x("div",{},x("div",{class:"done-banner"},"✨ 복구 완료",x("div",{class:"sub"},au[e.id]||"")),x("div",{class:"hint"},e.id==="lighthouse"?"밤이 되면 등대에 따뜻한 불이 켜져요.":"이제 섬의 일부가 되살아났어요.")):x("div",{},x("div",{class:"hint"},au[e.id]||""),x("div",{class:"progress-line"},x("i",{style:{width:`${l}%`}})),x("div",{class:"req-list"},...u),x("div",{class:"hint"},c?"재료가 다 모였어요 — [복구 완료!] 를 눌러 주세요.":"재료를 모아 [재료 투입] 으로 하나씩 넣어요.")),f=[];return e.id==="workshop"&&i.done&&f.push({label:"📦 창고 열기",kind:"ghost",onClick:()=>this.game.openStorage()}),i.done||(f.push({label:"재료 투입",kind:"ghost",disabled:!h,onClick:()=>this.game.invest(e.id)}),f.push({label:"복구 완료!",kind:"primary",disabled:!c,onClick:()=>this.game.completeBuild(e.id)})),f.push({label:"닫기",kind:i.done||!c?"primary":"ghost",onClick:()=>this.game.modal.close()}),{title:`${e.icon} ${e.name}`,subtitle:i.done?"이미 복구된 건물이에요":`${e.day}일차에 열리는 부지 — 지금 바로 복구할 수 있어요`,body:d,actions:f}}workshopMenu(){const t=this.game.progress.building("workshop"),e=this.game.progress.inventory,i=(r,a,o,l,c=!1)=>{const h=x("button",{class:`menu-entry ${c?"off":""}`,type:"button",...c?{disabled:"disabled"}:{}},x("span",{class:"mico"},r),x("div",{class:"mmain"},x("div",{class:"nm"},a),x("div",{class:"meta"},o)),x("span",{class:"arrow"},c?"🔒":"›"));return c||h.addEventListener("click",l),h};return{title:"🔨 공방",subtitle:"재료를 정리하고, 요리하고, 섬을 고치는 곳",body:x("div",{},x("div",{class:"hint"},t.done?"공방이 열렸어요. 재료를 정리하고, 요리하고, 도구를 손봐요.":"공방은 아직 낡았어요. 복구하면 창고·요리·도구방이 함께 열려요."),x("div",{class:"row"},x("div",{},x("div",{class:"label"},"가방"),x("div",{class:"hint"},`${e.usedSlots()}/${qe.slots}칸 사용 중`)),x("span",{class:"hint"},`재료 ${e.totalItems()}개`)),x("div",{class:"section-label"},"공방 메뉴"),x("div",{class:"menu-list"},i("📦","창고",t.done?"재료를 맡기고 꺼내요":"공방을 복구하면 열려요",()=>this.game.openStorage(),!t.done),i("🍳","요리하기",t.done?"재료와 물고기로 기력을 회복해요":"공방을 복구하면 열려요",()=>this.game.openCooking(),!t.done),i("🪓","도구 강화",t.done?"도끼·곡깡이를 Lv.3까지":"공방을 복구하면 열려요",()=>this.game.openUpgrade(),!t.done),i("🔨","건물 복구","섬의 네 곳을 되살려요",()=>this.game.openBuild("workshop")))),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}mailbox(t){const e=this.game.progress;if(t){const a=La.find(o=>o.id===t);if(a)return P(this,Ia,Ud).call(this,a,e)}const i=La.map(a=>{const o=!e.isRead(a.id),l=a.gift&&!e.isClaimed(a.id);return x("button",{class:`mail-row ${o?"unread":""}`,type:"button",onclick:()=>this.game.openMailbox(a.id)},x("span",{class:"mail-ico"},a.icon),x("div",{class:"mail-main"},x("div",{class:"mail-title"},a.title),x("div",{class:"mail-from"},`${a.from} · ${a.tag}`)),l?x("span",{class:"mail-gift"},"🎁"):o?x("span",{class:"mail-dot"}):null)}),r=e.questRows().filter(a=>a.done&&!a.claimed).length;return{title:"📬 우체통",subtitle:"공지와 편지, 그리고 의뢰와 선물이 있어요",body:x("div",{},x("div",{class:"section-label"},`📋 오늘의 의뢰 (Day ${e.quests.day})${r?` · 보상 ${r}건`:""}`),this.game.life.questList(),x("div",{class:"section-label"},"편지"),x("div",{class:"mail-list"},...i)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}Ia=new WeakSet,Ud=function(t,e){const i=e.isClaimed(t.id),n=t.gift&&x("div",{class:"gift-box"},x("div",{class:"gift-head"},i?"🎀 받은 선물":"🎁 동봉된 선물"),x("div",{class:"gift-items"},...Object.entries(t.gift).map(([a,o])=>x("span",{class:"gift-chip"},`${Uo(a)} ${ia(a)} ${o}`))),i?x("div",{class:"hint"},"가방에 잘 넣어 두었어요."):x("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.claimGift(t.id)},"선물 받기")),r=x("div",{},x("div",{class:"letter-from"},`${t.from} · ${t.tag}`),...t.body.map(a=>x("p",{class:"letter-p"},a)),n);return{title:`${t.icon} ${t.title}`,subtitle:"",body:r,actions:[{label:"← 편지함",kind:"ghost",onClick:()=>this.game.openMailbox()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}};let na=null;function MM(){try{return typeof indexedDB<"u"&&indexedDB!==null}catch{return!1}}function wc(){return MM()?na||(na=new Promise((s,t)=>{let e;try{e=indexedDB.open(Ve.dbName,1)}catch(i){t(i);return}e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains(Ve.store)||i.createObjectStore(Ve.store)},e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error||new Error("IndexedDB open error")),e.onblocked=()=>t(new Error("IndexedDB blocked"))}),na):Promise.reject(new Error("IndexedDB not available"))}async function SM(s){const t=await wc();return new Promise((e,i)=>{const r=t.transaction(Ve.store,"readonly").objectStore(Ve.store).get(s);r.onsuccess=()=>e(r.result??null),r.onerror=()=>i(r.error)})}async function bM(s,t){const e=await wc();return new Promise((i,n)=>{const r=e.transaction(Ve.store,"readwrite");r.objectStore(Ve.store).put(t,s),r.oncomplete=()=>i(!0),r.onerror=()=>n(r.error),r.onabort=()=>n(r.error||new Error("transaction aborted"))})}async function yM(s){const t=await wc();return new Promise((e,i)=>{const n=t.transaction(Ve.store,"readwrite");n.objectStore(Ve.store).delete(s),n.oncomplete=()=>e(!0),n.onerror=()=>i(n.error)})}const sa=s=>typeof s=="string"&&!!Le[s];class EM{constructor(t){this.bag=new Array(qe.slots).fill(null),this.storage={},t&&this.load(t)}count(t){let e=0;for(const i of this.bag)i&&i.id===t&&(e+=i.n);return e}stored(t){return Math.max(0,Math.floor(Number(this.storage[t])||0))}roomFor(t){if(!sa(t))return 0;let e=0;for(const i of this.bag)i?i.id===t&&(e+=Math.max(0,qe.stack-i.n)):e+=qe.stack;return e}usedSlots(){return this.bag.filter(Boolean).length}totalItems(){let t=0;for(const e of this.bag)e&&(t+=e.n);return t}bagEntries(){const t=new Map;for(const e of this.bag)!e||e.n<=0||t.set(e.id,(t.get(e.id)||0)+e.n);return Dl.filter(e=>t.has(e)).map(e=>({id:e,n:t.get(e)}))}storageEntries(){return Dl.filter(t=>this.stored(t)>0).map(t=>({id:t,n:this.stored(t)}))}add(t,e){if(!sa(t))return 0;let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;for(const n of this.bag){if(i<=0)break;if(!n||n.id!==t)continue;const r=qe.stack-n.n;if(r<=0)continue;const a=Math.min(r,i);n.n+=a,i-=a}for(;i>0;){const n=this.bag.indexOf(null);if(n<0)break;const r=Math.min(qe.stack,i);this.bag[n]={id:t,n:r},i-=r}return i}take(t,e){let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;let n=0;for(let r=0;r<this.bag.length&&i>0;r++){const a=this.bag[r];if(!a||a.id!==t)continue;const o=Math.min(a.n,i);a.n-=o,i-=o,n+=o,a.n<=0&&(this.bag[r]=null)}return n}toStorage(t,e="all"){const i=this.count(t);if(!i)return 0;const n=Math.max(0,ru-this.stored(t)),r=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0))),a=Math.min(r,n);return a<=0?0:(this.take(t,a),this.storage[t]=this.stored(t)+a,a)}fromStorage(t,e="all"){const i=this.stored(t);if(!i)return 0;const n=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0)));if(n<=0)return 0;const r=this.add(t,n),a=n-r;if(a>0){const o=this.stored(t)-a;o>0?this.storage[t]=o:delete this.storage[t]}return a}toJSON(){return{bag:this.bag.map(t=>t&&t.n>0?{id:t.id,n:Math.min(qe.stack,Math.floor(t.n))}:null),storage:{...this.storage}}}load(t){if(this.bag=new Array(qe.slots).fill(null),this.storage={},!t||typeof t!="object")return this;if((Array.isArray(t.bag)?t.bag:[]).slice(0,qe.slots).forEach((i,n)=>{if(!i||typeof i!="object"||!sa(i.id))return;const r=Math.floor(Number(i.n));!Number.isFinite(r)||r<=0||(this.bag[n]={id:i.id,n:Math.min(qe.stack,r)})}),t.storage&&typeof t.storage=="object")for(const[i,n]of Object.entries(t.storage)){if(!sa(i))continue;const r=Math.floor(Number(n));!Number.isFinite(r)||r<=0||(this.storage[i]=Math.min(ru,r))}return this}}const hi={anchovy:{id:"anchovy",name:"은멸치",icon:"🐟",tint:"#cfe3f2",price:9,weight:34,rare:!1,size:[6,15],desc:"부두 끝에서 가장 먼저 인사하는 작은 은빛 물고기."},bream:{id:"bream",name:"통통도미",icon:"🐠",tint:"#f7b48f",price:15,weight:26,rare:!1,size:[18,33],desc:"손에 쥐면 묵직한, 통통해서 더 귀여운 도미."},minnow:{id:"minnow",name:"벚꽃송사리",icon:"🌸",tint:"#ffb8d6",price:24,weight:22,rare:!1,size:[4,10],desc:"벚꽃이 필 때만 물 위로 떠오르는 분홍빛 송사리."},jelly:{id:"jelly",name:"별빛해파리",icon:"🪼",tint:"#c8b8ff",price:45,weight:11,rare:!0,size:[10,21],desc:"밤에 잡으면 손끝이 반짝이는 투명 해파리."},goldcarp:{id:"goldcarp",name:"황금잉어",icon:"✨",tint:"#ffd76a",price:110,weight:5,rare:!0,size:[30,56],desc:"섬 사람들이 한 번도 못 봤다는 전설의 잉어."},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",price:0,weight:2,rare:!0,size:[1,1],desc:"물 위로 떠오른 별의 부스러기. 낚싯줄에 걸리기도 해요."}},On=["anchovy","bream","minnow","jelly","goldcarp","star"],TM={anchovy:18,bream:20,minnow:22,jelly:20,goldcarp:13,star:7},Ue={spot:{x:0,z:16.2,range:3},castTo:{x:0,z:18.1},stamina:5,waitMin:1.5,waitMax:3.5,biteWindow:1.4,exp:14,expMiss:4,leash:6.5},pr={tea:{id:"tea",name:"꽃잎 허브차",icon:"🍵",need:{petal:2,berry:1},fish:{},stamina:45,exp:30,buff:0,desc:"꽃잎을 살짝 우려낸 향긋한 차. 마시면 몸이 포근해져요."},grill:{id:"grill",name:"은멸치 구이",icon:"🍢",need:{log:1},fish:{anchovy:2},stamina:60,exp:30,buff:0,desc:"통나무 불에 노릇하게 구운 은멸치. 소금기만으로 충분해요."},bream:{id:"bream",name:"도미 버터구이",icon:"🐠",need:{berry:1},fish:{bream:1},stamina:90,exp:40,buff:0,desc:"열매 즙을 버터처럼 발라 구운 도미. 겉은 바삭, 속은 촉촉."},golden:{id:"golden",name:"황금 정식",icon:"🍱",need:{petal:2,berry:2},fish:{goldcarp:1},stamina:100,exp:60,buff:60,desc:"황금잉어 한 마리를 온전히 담은 섬의 정찬. 60초 동안 채집이 가벼워져요."}},ra=["tea","grill","bream","golden"],Da={seconds:60,stamina:.6,speed:1.18},ps={axe:{id:"axe",name:"도끼",icon:"🪓",kind:"tree",max:3,cost:[{},{log:4,stone:3,coin:40},{log:8,stone:6,star:2,coin:120}],stamina:[1,.85,.7],hits:[0,0,1],desc:"나무를 베는 도구. 강화하면 적은 기력으로 더 빨리 벨 수 있어요."},pick:{id:"pick",name:"곡괭이",icon:"⛏️",kind:"rock",max:3,cost:[{},{log:4,stone:4,coin:40},{log:6,stone:8,star:2,coin:120}],stamina:[1,.85,.7],hits:[0,0,1],desc:"바위를 캐는 도구. 강화하면 돌이 더 빨리 나와요."}},ms=["axe","pick"],vs={churu:{id:"churu",name:"고양이 츄르",icon:"🐾",price:25,desc:"솜이·옹이가 제일 좋아하는 간식. 호감도 +14"},ade:{id:"ade",name:"반짝 에이드",icon:"🥤",price:30,desc:"마시면 기력 +40. 탄산이 톡 쏴요."},bait:{id:"bait",name:"별빛 미끼",icon:"🪱",price:45,desc:"한 번 낚시할 때 희귀 어종 확률이 올라가요."}},Js=["churu","ade","bait"],wM={log:6,stone:7,petal:5,star:35,berry:4,anchovy:9,bream:15,minnow:24,jelly:45,goldcarp:110},Ol=40,Fd=[{id:"gather",name:"채집",icon:"🪓",desc:"나무·바위·꽃덤불을 두드릴 때마다"},{id:"fish",name:"낚시",icon:"🎣",desc:"물고기를 잡을 때마다"},{id:"cook",name:"요리",icon:"🍳",desc:"공방에서 요리할 때마다"},{id:"care",name:"돌보기",icon:"🐾",desc:"고양이를 쓰다듬고 간식 줄 때마다"}],bn=[{name:"연습",exp:0},{name:"F",exp:50},{name:"E",exp:200},{name:"D",exp:600},{name:"C",exp:1200},{name:"B",exp:2e3},{name:"A",exp:3200},{name:"S",exp:4800},{name:"SS",exp:7e3},{name:"SSS",exp:1e4}],nr=[{exp:0,name:"섬의 새내기",icon:"🌱"},{exp:120,name:"섬의 살림꾼",icon:"🧺"},{exp:400,name:"섬의 일꾼",icon:"🪣"},{exp:900,name:"섬의 솜씨꾼",icon:"🧵"},{exp:1700,name:"섬의 장인",icon:"🔨"},{exp:2800,name:"섬의 명인",icon:"🏮"},{exp:4400,name:"섬의 수호자",icon:"🛡️"},{exp:6800,name:"섬의 별",icon:"🌟"}],Fo={harvest:6,pet:10,treat:12},aa=[0,18,40,68,100],Ge={pet:{aff:4,stamina:3,cooldown:6},snacks:{berry:{id:"berry",name:"열매",icon:"🍓",aff:6,cooldown:3},anchovy:{id:"anchovy",name:"은멸치",icon:"🐟",aff:8,cooldown:3},churu:{id:"churu",name:"츄르",icon:"🐾",aff:14,cooldown:4}},snackOrder:["berry","anchovy","churu"],gifts:{2:{star:1},3:{petal:3},4:{star:2},5:{petal:5,star:3}},followLevel:3,dialogue:{somi:["솜이: …(턱을 살짝 내밀며 거리를 둔다)",'솜이: "야옹." 조금은 익숙해진 얼굴이에요.',"솜이: 다가와서 옆에 딱 붙어 앉아요. 꼬리가 살랑살랑.","솜이: 배를 보여 줘요. 이 섬에서 제일 무방비한 순간.","솜이: 품에 폭 안겨요. 이제 떨어지기 싫은 모양이에요."],ongi:["옹이: …(꼬리만 살짝 흔들고 도망갈 준비)",'옹이: "냐." 밥그릇을 한 번 쳐다봐요.',"옹이: 발등에 몸을 비비고 앞장서서 걸어요.","옹이: 손끝을 콕콕 물었다가 핥아요. 장난인 게 분명해요.","옹이: 어깨에 올라와 앉아요. 섬에서 제일 높은 자리랍니다."]}},xn={chop:{id:"chop",icon:"🪓",need:[2,4],coin:[25,35],star:1,label:s=>`나무 ${s}번 베기`,event:"chop"},mine:{id:"mine",icon:"⛏️",need:[2,3],coin:[30,40],star:1,label:s=>`바위 ${s}번 캐기`,event:"mine"},fish:{id:"fish",icon:"🎣",need:[2,3],coin:[35,45],star:1,label:s=>`물고기 ${s}마리 낚기`,event:"fish"},treat:{id:"treat",icon:"🐾",need:[2,2],coin:[20,25],star:0,label:s=>`고양이 간식 ${s}번 주기`,event:"treat"},pet:{id:"pet",icon:"🤲",need:[3,4],coin:[15,20],star:0,label:s=>`고양이 ${s}번 쓰다듬기`,event:"pet"},cook:{id:"cook",icon:"🍳",need:[1,2],coin:[40,55],star:1,label:s=>`요리 ${s}번 하기`,event:"cook"},sell:{id:"sell",icon:"🪙",need:[4,6],coin:[25,35],star:0,label:s=>`자판기에 ${s}개 팔기`,event:"sell"},petal:{id:"petal",icon:"🌸",need:[3,5],coin:[20,28],star:0,label:s=>`꽃잎 ${s}개 모으기`,event:"petal"}},AM=["chop","mine","fish","treat","pet","cook","sell","petal"];function Od(s){return Le[s]?{name:Le[s].name,icon:Le[s].icon,tint:Le[s].tint||"#dcdcea"}:hi[s]?{name:hi[s].name,icon:hi[s].icon,tint:hi[s].tint}:vs[s]?{name:vs[s].name,icon:vs[s].icon,tint:"#ffe1b0"}:{name:s,icon:"❔",tint:"#dcdcea"}}function en(s){return Od(s).name}function nn(s){return Od(s).icon}function RM(s,t){return s==="star"?"조각":`${Math.round(t)}cm`}function CM(s){let t=Math.floor(Number(s)||1)*2654435761%4294967296;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}function PM(s){const t=CM(s*97+13),e=[...AM],i=[];for(;i.length<2&&e.length;){const n=Math.floor(t()*e.length);i.push(e.splice(n,1)[0])}return i.map((n,r)=>{const a=xn[n],o=a.need[0]+Math.floor(t()*(a.need[1]-a.need[0]+1)),l=a.coin[0]+Math.floor(t()*(a.coin[1]-a.coin[0]+1));return{id:`${s}-${r}-${n}`,kind:n,event:a.event,icon:a.icon,label:a.label(o),need:o,progress:0,claimed:!1,reward:{coin:l,star:a.star}}})}const Fn=Fd.map(s=>s.id),fu=bn[bn.length-1].exp,LM=nr[nr.length-1].exp;class DM{constructor(t){this.exp={};for(const e of Fn)this.exp[e]=0;t&&this.load(t)}reset(){for(const t of Fn)this.exp[t]=0}get(t){return Math.max(0,Math.floor(Number(this.exp[t])||0))}add(t,e){if(!Fn.includes(t))return{id:t,gain:0,before:0,after:0,rankedUp:!1,rank:""};const i=Math.max(0,Math.floor(Number(e)||0)),n=this.get(t),r=Math.min(fu,n+i);return this.exp[t]=r,{id:t,gain:r-n,before:n,after:r,rankedUp:this.rankIndex(r)>this.rankIndex(n),rank:this.rank(r).name}}rankIndex(t){let e=0;for(let i=0;i<bn.length;i++)t>=bn[i].exp&&(e=i);return e}rank(t){return bn[this.rankIndex(t)]}level(t){return this.rankIndex(this.get(t))+1}row(t){const e=Fd.find(c=>c.id===t)||{name:t,icon:"🌱",desc:""},i=this.get(t),n=this.rankIndex(i),r=bn[n],a=bn[n+1]||null,o=a?a.exp-r.exp:1,l=a?Math.min(100,Math.round((i-r.exp)/o*100)):100;return{id:t,name:e.name,icon:e.icon,desc:e.desc,exp:i,level:n+1,rank:r.name,next:a,pct:l,toNext:a?Math.max(0,a.exp-i):0}}rows(){return Fn.map(t=>this.row(t))}get total(){return Fn.reduce((t,e)=>t+this.get(e),0)}title(){const t=this.total;let e=nr[0];for(const n of nr)t>=n.exp&&(e=n);const i=nr.find(n=>n.exp>t)||null;return{name:e.name,icon:e.icon,total:t,next:i,pct:i?Math.min(100,Math.round((t-e.exp)/Math.max(1,i.exp-e.exp)*100)):100,toNext:i?i.exp-t:0,maxed:t>=LM}}toJSON(){const t={};for(const e of Fn)t[e]=this.get(e);return t}load(t){if(this.reset(),!t||typeof t!="object")return this;for(const e of Fn){const i=Math.floor(Number(t[e]));this.exp[e]=Number.isFinite(i)&&i>0?Math.min(fu,i):0}return this}}const Oo=(s,t,e,i)=>{const n=Number(s);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i},oi=(s,t,e,i=0)=>{const n=Math.floor(Number(s));return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};class Bd{constructor(t){this.reset(),t&&this.load(t)}reset(){this.stamina=Ze.max,this.inventory=new EM,this.buildings={};for(const t of Gi)this.buildings[t.id]={invested:{},done:!1};this.mailbox={read:[],claimed:[]},this.nodes={},this.coins=0,this.skills=new DM,this.fish={},this.supplies={};for(const t of Js)this.supplies[t]=0;this.tools={};for(const t of ms)this.tools[t]=1;this.cats={};for(const t of vi)this.cats[t.id]={aff:0,gifts:[],follow:!1};this.cooked={},this.quests={day:0,list:[]},this.buff={kind:"",left:0},this.fishing={casts:0,catches:0,misses:0,best:0}}useStamina(t){const e=Math.max(0,Number(t)||0);return this.stamina<e?!1:(this.stamina=Math.max(0,this.stamina-e),!0)}restStamina(t){this.stamina=Math.min(Ze.max,this.stamina+Math.max(0,Number(t)||0))}building(t){return this.buildings[t]||(this.buildings[t]={invested:{},done:!1}),this.buildings[t]}investedTotal(t){const e=this.building(t).invested;return Object.values(e).reduce((i,n)=>i+(Number(n)||0),0)}isRead(t){return this.mailbox.read.includes(t)}markRead(t){this.isRead(t)||this.mailbox.read.push(t)}isClaimed(t){return this.mailbox.claimed.includes(t)}markClaimed(t){this.isClaimed(t)||this.mailbox.claimed.push(t)}addCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));return this.coins=Math.min(999999,this.coins+e),this.coins}spendCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));return this.coins<e?!1:(this.coins-=e,!0)}gainExp(t,e){return this.skills.add(t,e)}fishCount(t){return Math.max(0,Math.floor(Number(this.fish[t])||0))}addFish(t,e=1){if(!hi[t])return 0;const i=Math.max(0,Math.floor(Number(e)||0));return this.fish[t]=Math.min(999,this.fishCount(t)+i),this.fish[t]}takeFish(t,e=1){const i=Math.max(0,Math.floor(Number(e)||0)),n=this.fishCount(t),r=Math.min(n,i);if(r<=0)return 0;const a=n-r;return a>0?this.fish[t]=a:delete this.fish[t],r}fishKinds(){return On.filter(t=>this.fishCount(t)>0).length}supply(t){return Math.max(0,Math.floor(Number(this.supplies[t])||0))}addSupply(t,e=1){return Js.includes(t)?(this.supplies[t]=Math.min(99,this.supply(t)+Math.max(0,Math.floor(Number(e)||0))),this.supplies[t]):0}takeSupply(t,e=1){const i=Math.min(this.supply(t),Math.max(0,Math.floor(Number(e)||0)));return i<=0?0:(this.supplies[t]=this.supply(t)-i,i)}toolLevel(t){const e=ps[t];return e?Math.max(1,Math.min(e.max,oi(this.tools[t],1,e.max,1))):1}toolInfo(t){const e=ps[t],i=this.toolLevel(t);return{id:t,def:e,level:i,max:e.max,cost:e.cost[i]||{},staminaMul:e.stamina[i-1]??1,hitsBonus:e.hits[i-1]??0,maxed:i>=e.max}}staminaMultiplier(t){let e=1;for(const i of ms){const n=ps[i];n.kind===t&&(e*=n.stamina[this.toolLevel(i)-1]??1)}return this.buff.kind==="golden"&&this.buff.left>0&&(e*=Da.stamina),e}hitsBonus(t){let e=0;for(const i of ms){const n=ps[i];n.kind===t&&(e+=n.hits[this.toolLevel(i)-1]||0)}return e}canUpgrade(t){const e=this.toolInfo(t);if(e.maxed)return{ok:!1,reason:"max",info:e};const i=[];for(const[n,r]of Object.entries(e.cost)){const a=n==="coin"?this.coins:this.inventory.count(n);a<r&&i.push({item:n,need:r,have:a})}return{ok:i.length===0,reason:i.length?"lack":"",lack:i,info:e}}upgradeTool(t){const e=this.canUpgrade(t);if(!e.ok)return e;const i=e.info;for(const[n,r]of Object.entries(i.cost))n==="coin"?this.spendCoins(r):this.inventory.take(n,r);return this.tools[t]=i.level+1,{ok:!0,info:this.toolInfo(t)}}cat(t){return this.cats[t]||(this.cats[t]={aff:0,gifts:[],follow:!1}),this.cats[t]}catLevel(t){const e=Math.max(0,Number(t)||0);let i=1;for(let n=0;n<aa.length;n++)e>=aa[n]&&(i=n+1);return i}catRow(t){const e=this.cat(t),i=this.catLevel(e.aff),n=aa[i]??null,r=aa[i-1]??0;return{id:t,aff:Math.round(e.aff),level:i,follow:!!e.follow,gifts:[...e.gifts],nextAt:n,pct:n?Math.min(100,Math.round((e.aff-r)/Math.max(1,n-r)*100)):100,toNext:n?Math.max(0,n-Math.round(e.aff)):0,canFollow:i>=3}}addAffection(t,e){const i=this.cat(t),n=this.catLevel(i.aff);i.aff=Math.max(0,Math.min(999,i.aff+Math.max(0,Number(e)||0)));const r=this.catLevel(i.aff);return{before:n,after:r,levelUp:r>n,row:this.catRow(t)}}cookedCount(t){return Math.max(0,Math.floor(Number(this.cooked[t])||0))}markCooked(t){this.cooked[t]=Math.min(999,this.cookedCount(t)+1)}canCook(t){const e=pr[t];if(!e)return{ok:!1,reason:"recipe"};const i=[];for(const[r,a]of Object.entries(e.need)){const o=this.inventory.count(r);o<a&&i.push({item:r,need:a,have:o})}for(const[r,a]of Object.entries(e.fish)){const o=this.fishCount(r);o<a&&i.push({item:r,need:a,have:o})}const n=this.stamina>=Ze.max-.5;return{ok:i.length===0&&!n,reason:i.length?"lack":n?"full":"",lack:i}}setBuff(t,e){this.buff={kind:t||"",left:Math.max(0,Number(e)||0)}}tickBuff(t){return this.buff.left<=0?!1:(this.buff.left=Math.max(0,this.buff.left-Math.max(0,t||0)),this.buff.left<=0?(this.buff={kind:"",left:0},!0):!1)}get buffActive(){return this.buff.left>0&&!!this.buff.kind}rollQuests(t){const e=Math.max(1,Math.floor(Number(t)||1));return this.quests.day===e&&this.quests.list.length?!1:(this.quests={day:e,list:PM(e)},!0)}questRows(){return this.quests.list.map(t=>{const e=xn[t.kind]||{icon:"📋"},i=Math.min(t.need,Math.max(0,t.progress));return{...t,icon:t.icon||e.icon,progress:i,pct:Math.min(100,Math.round(i/Math.max(1,t.need)*100)),done:i>=t.need}})}get claimableQuests(){return this.questRows().filter(t=>t.done&&!t.claimed).length}questEvent(t,e=1){const i=Math.max(0,Number(e)||0);if(!t||i<=0)return[];const n=[];for(const r of this.quests.list)r.claimed||r.event===t&&(r.progress>=r.need||(r.progress=Math.min(r.need,r.progress+i),r.progress>=r.need&&n.push(r)));return n}claimQuest(t){const e=this.quests.list.find(i=>i.id===t);return e?e.claimed?{ok:!1,reason:"claimed"}:e.progress<e.need?{ok:!1,reason:"unfinished"}:(e.claimed=!0,this.addCoins(e.reward.coin),{ok:!0,quest:e}):{ok:!1,reason:"missing"}}toJSON(){const t=this.inventory.toJSON();return{stamina:Math.round(this.stamina*10)/10,bag:t.bag,storage:t.storage,buildings:this.buildings,mailbox:this.mailbox,nodes:this.nodes,coins:Math.round(this.coins),skills:this.skills.toJSON(),fish:{...this.fish},supplies:{...this.supplies},tools:{...this.tools},cats:JSON.parse(JSON.stringify(this.cats)),cooked:{...this.cooked},quests:JSON.parse(JSON.stringify(this.quests)),buff:{...this.buff},fishing:{...this.fishing}}}load(t){if(this.reset(),!t||typeof t!="object")return this;this.stamina=Oo(t.stamina,0,Ze.max,Ze.max),this.inventory.load({bag:t.bag,storage:t.storage});const e=t.buildings&&typeof t.buildings=="object"?t.buildings:{};for(const l of Gi){const c=e[l.id]&&typeof e[l.id]=="object"?e[l.id]:null,h=this.buildings[l.id];if(c&&(h.done=!!c.done,c.invested&&typeof c.invested=="object"))for(const[u,d]of Object.entries(c.invested)){if(!Le[u])continue;const f=Math.floor(Number(d));Number.isFinite(f)&&f>0&&(h.invested[u]=f)}}const i=t.mailbox&&typeof t.mailbox=="object"?t.mailbox:{},n=Array.isArray(i.read)?i.read:[],r=Array.isArray(i.claimed)?i.claimed:[];if(this.mailbox.read=n.filter(l=>typeof l=="string"),this.mailbox.claimed=r.filter(l=>typeof l=="string"),t.nodes&&typeof t.nodes=="object")for(const[l,c]of Object.entries(t.nodes)){if(typeof l!="string"||!c||typeof c!="object")continue;const h=Math.floor(Number(c.left)),u=Number(c.respawn);this.nodes[l]={left:Number.isFinite(h)&&h>=0?Math.min(9,h):0,respawn:Number.isFinite(u)&&u>0?Math.min(600,u):0}}if(this.coins=oi(t.coins,0,999999,0),this.skills.load(t.skills),this.fish={},t.fish&&typeof t.fish=="object")for(const[l,c]of Object.entries(t.fish)){if(!hi[l])continue;const h=Math.floor(Number(c));Number.isFinite(h)&&h>0&&(this.fish[l]=Math.min(999,h))}for(const l of Js)this.supplies[l]=0;if(t.supplies&&typeof t.supplies=="object")for(const l of Js)this.supplies[l]=oi(t.supplies[l],0,99,0);for(const l of ms)this.tools[l]=1;if(t.tools&&typeof t.tools=="object")for(const l of ms)this.tools[l]=oi(t.tools[l],1,ps[l].max,1);for(const l of vi)this.cats[l.id]={aff:0,gifts:[],follow:!1};if(t.cats&&typeof t.cats=="object")for(const l of vi){const c=t.cats[l.id];if(!c||typeof c!="object")continue;const h=Array.isArray(c.gifts)?c.gifts.map(u=>Math.floor(Number(u))).filter(u=>Number.isFinite(u)&&u>=2&&u<=5):[];this.cats[l.id]={aff:Math.round(Oo(c.aff,0,999,0)),gifts:[...new Set(h)],follow:!!c.follow}}if(this.cooked={},t.cooked&&typeof t.cooked=="object")for(const[l,c]of Object.entries(t.cooked)){if(!pr[l])continue;const h=Math.floor(Number(c));Number.isFinite(h)&&h>0&&(this.cooked[l]=Math.min(999,h))}if(this.quests={day:0,list:[]},t.quests&&typeof t.quests=="object"&&Array.isArray(t.quests.list)){const l=oi(t.quests.day,0,3650,0),c=[];for(const h of t.quests.list){if(!h||typeof h!="object"||!xn[h.kind])continue;const u=oi(h.need,1,99,1);c.push({id:typeof h.id=="string"?h.id:`${l}-${c.length}-${h.kind}`,kind:h.kind,event:xn[h.kind].event,icon:typeof h.icon=="string"?h.icon:xn[h.kind].icon,label:typeof h.label=="string"?h.label:xn[h.kind].label(u),need:u,progress:oi(h.progress,0,u,0),claimed:!!h.claimed,reward:{coin:oi(h.reward&&h.reward.coin,0,9999,xn[h.kind].coin[0]),star:oi(h.reward&&h.reward.star,0,9,xn[h.kind].star)}})}c.length&&(this.quests={day:l,list:c})}const a=t.buff&&typeof t.buff=="object"?t.buff:{};this.buff={kind:typeof a.kind=="string"&&a.kind?a.kind:"",left:Oo(a.left,0,600,0)};const o=t.fishing&&typeof t.fishing=="object"?t.fishing:{};return this.fishing={casts:oi(o.casts,0,99999,0),catches:oi(o.catches,0,99999,0),misses:oi(o.misses,0,99999,0),best:oi(o.best,0,999,0)},this}}const pu=3,NM={timeScale:1},IM=[1,10,60],Oi=(s,t)=>{const e=Number(s);return Number.isFinite(e)?e:t},UM=(s,t,e,i)=>{const n=Number(s);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};function mu(s){if(!s||typeof s!="object"||Array.isArray(s))return null;const t=s.settings&&typeof s.settings=="object"?s.settings:{},e={muted:!!t.muted,timeScale:IM.includes(Number(t.timeScale))?Number(t.timeScale):NM.timeScale,fps30:!!t.fps30},i=s.player&&typeof s.player=="object"?s.player:{},n=s.playerPos&&typeof s.playerPos=="object"?s.playerPos:{},r={x:Oi(i.x,Oi(n.x,.4)),z:Oi(i.z,Oi(n.z,11.8)),yaw:Oi(i.yaw,Math.PI)},a=Array.isArray(s.discovered)?s.discovered.filter(l=>typeof l=="string"):Array.isArray(s.discoveredDittos)?s.discoveredDittos.filter(l=>typeof l=="string"):[],o=new Bd(s).toJSON();return{version:pu,fromVersion:Math.max(1,Math.min(pu,Math.floor(Oi(s.version,1)))),savedAt:Oi(s.savedAt,Date.now()),day:Math.max(1,Math.min(3650,Math.floor(Oi(s.day,1)))),elapsed:UM(Oi(s.elapsed,Oi(s.elapsedSeconds,120)),0,ye-.01,120),discovered:a,settings:e,player:r,...o}}const Bo=`${Ve.dbName}:${Ve.key}`;class FM{constructor(){this.mode="unknown",this.lastError=null}async load(){try{const t=await SM(Ve.key);if(t)return this.mode="idb",mu(t);this.mode="idb"}catch(t){this.lastError=String(t&&t.message?t.message:t),this.mode="local"}try{const t=localStorage.getItem(Bo);if(t)return this.mode=this.mode==="unknown"?"local":this.mode,mu(JSON.parse(t))}catch(t){this.lastError=String(t)}return null}async hasSave(){return!!await this.load()}async save(t){try{return await bM(Ve.key,{...t,version:2}),this.mode="idb",!0}catch(e){this.lastError=String(e&&e.message?e.message:e),this.mode="local";try{return localStorage.setItem(Bo,JSON.stringify(t)),!0}catch(i){return this.lastError=String(i),!1}}}async clear(){try{await yM(Ve.key)}catch(t){this.lastError=String(t)}try{localStorage.removeItem(Bo)}catch{}}}const va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const OM=new Sc(-1,1,1,-1,0,1);class BM extends we{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}}const kM=new BM;class Ac{constructor(t){this._mesh=new me(kM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,OM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class kd extends Ls{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Es.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ac(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gu extends Ls{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class zM extends Ls{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class GM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kd(va),this.copyPass.material.blending=kn,this.timer=new Jp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gu!==void 0&&(a instanceof gu?i=!0:a instanceof zM&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HM extends Ls{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const VM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ts extends Ls{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(r,a,{type:je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new ti(r,a,{type:je,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new ti(r,a,{type:je,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=VM;this.highPassUniforms=Es.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(va.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,premultipliedAlpha:!0,blending:sr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new Hi,this._fsQuad=new Ac(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new Qe({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ts.BlurDirectionX=new At(1,0);Ts.BlurDirectionY=new At(0,1);const oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class WM extends Ls{constructor(){super(),this.isOutputPass=!0,this.uniforms=Es.clone(oa.uniforms),this.material=new Ku({name:oa.name,uniforms:this.uniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader}),this._fsQuad=new Ac(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ic&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const xs={bloomThreshold:.86,bloomStrength:.3,bloomRadius:.4,saturation:1.07,contrast:.2,vignette:.28},XM={uniforms:{tDiffuse:{value:null},uSaturation:{value:xs.saturation},uContrast:{value:xs.contrast},uVignette:{value:xs.vignette}},vertexShader:`
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
  `};function _u(s,t,e){const i=s.getDrawingBufferSize(new At),n=new ti(Math.max(1,i.x),Math.max(1,i.y),{type:je,samples:4});n.texture.name="MetamongPostRT";const r=new GM(s,n);r.setPixelRatio(s.getPixelRatio()),r.setSize(window.innerWidth,window.innerHeight);const a=new HM(t,e);r.addPass(a);const o=new Ts(new At(window.innerWidth,window.innerHeight),xs.bloomStrength,xs.bloomRadius,xs.bloomThreshold);r.addPass(o),r.addPass(new WM);const l=new kd(XM);r.addPass(l);let c={calls:0,triangles:0};const h=a.render.bind(a);return a.render=(u,d,f,_,S)=>{h(u,d,f,_,S),c={calls:u.info.render.calls,triangles:u.info.render.triangles}},{composer:r,bloom:o,grade:l,renderPass:a,get sceneStats(){return c},setSize(u,d){r.setPixelRatio(s.getPixelRatio()),r.setSize(u,d)},render(){r.render()},dispose(){r.dispose(),n.dispose()}}}const $M=["protagonist","somi","ongi","ditto_basic","disguises","buildings","nature"],qM=new Wp;function YM(s){return s.colorSpace=xe,s.magFilter=oe,s.minFilter=oe,s.generateMipmaps=!1,s.wrapS=Mi,s.wrapT=Mi,s.anisotropy=1,s}async function KM(s){const t=new URL("sprites/",document.baseURI),e=await fetch(new URL(`${s}.json`,t).href);if(!e.ok)throw new Error(`스프라이트 매니페스트 없음: ${s}.json (${e.status})`);const i=await e.json(),n=YM(await qM.loadAsync(new URL(`${s}_sheet.png`,t).href)),r=new Map;for(const a of i.frames)r.set(a.name,a);return{set:s,texture:n,frames:r,cell:i.cell,cols:i.grid[0],rows:i.grid[1],notes:i.notes||[]}}async function ZM(){const s=await Promise.all($M.map(KM)),t=new Map;for(const e of s)t.set(e.set,e);return t}const JM=.12;var Xi,zd,Bl,kl;class QM{constructor({scenery:t,progress:e,drops:i,fx:n,audio:r}){ni(this,Xi);this.scenery=t,this.progress=e,this.drops=i,this.fx=n,this.audio=r,this.hooks={},this.cooldown=0,this.fullWarnAt=0,this.time=0}get inventory(){return this.progress.inventory}reset(){for(const t of this.scenery.nodes)P(this,Xi,kl).call(this,t,!1),t.berryT=22+Math.random()*26;this.drops&&this.drops.clear()}applySaved(t){if(this.reset(),!(!t||typeof t!="object"))for(const e of this.scenery.nodes){const i=t[e.key];i&&(this.scenery.applyNodeState(e,i),i.left>0&&!(i.respawn>0)&&(e.hitsLeft=Math.min(e.hitsNeeded,i.left)),e.respawn=Math.max(0,Number(i.respawn)||0),i.respawn>0&&(e.hitsLeft=e.hitsNeeded,e.harvested=!0))}}toJSON(){const t={};for(const e of this.scenery.nodes){const i=e.harvested?0:e.hitsLeft,n=e.harvested?Math.max(.1,Math.round(e.respawn*10)/10):0;i>=e.hitsNeeded&&n<=0||(t[e.key]={left:i,respawn:n})}return t}nearest(t,e=2.5){let i=null,n=e;for(const r of this.scenery.nodes){if(r.harvested)continue;const a=Math.hypot(r.x-t.x,r.z-t.z);a<n&&(i=r,n=a)}return i}nodeAt(t,e,i=3){let n=null,r=i;for(const a of this.scenery.nodes){if(a.harvested)continue;const o=Math.hypot(a.x-t,a.z-e);o<r&&(n=a,r=o)}return n}hit(t){if(!t||t.harvested)return{ok:!1,reason:"gone"};if(this.cooldown>0)return{ok:!1,reason:"cooldown"};this.cooldown=JM;const e=Ha[t.kind];if(!e)return{ok:!1,reason:"kind"};const i=Math.max(1,Math.round(e.cost*this.progress.staminaMultiplier(t.kind)));if(!this.progress.useStamina(i))return this.audio.sfxDeny(),this.hooks.toast?.("기운이 부족해요 — 열매를 먹거나 잠깐 쉬어요 🍓",2e3),this.fx.float("기운 부족",t.x,t.y+t.height*.8,t.z,"#b26a86"),{ok:!1,reason:"stamina"};if(t.hitsLeft=Math.max(0,t.hitsLeft-1-this.progress.hitsBonus(t.kind)),this.scenery.pop(t),this.fx.burst(t.x,t.y+t.height*.42,t.z,P(this,Xi,zd).call(this,t),9),this.audio.sfxHit(t.kind),this.hooks.onHit?.(t.kind,i),t.hitsLeft>0)return this.fx.float("툭!",t.x,t.y+t.height*.95,t.z,"#fff2e2"),{ok:!0,harvest:!1};const n=Px(t.kind,t.frame),r={};for(const[o,l]of Object.entries(n)){const c=this.inventory.add(o,l),h=l-c;if(h>0&&(r[o]=h),c>0){const u=P(this,Xi,Bl).call(this,t.x,t.z);this.drops.spawn(o,c,u.x,u.z),this.hooks.toast?.(`가방이 가득 — ${Le[o].name} ${c}개를 바닥에 내려놨어요`,2400)}}let a=0;for(const[o,l]of Object.entries(r))this.fx.float(`+${l} ${Le[o].name}`,t.x,t.y+t.height*.9+a*.24,t.z,"#5f5470"),a++;return!Object.keys(r).length&&!Object.keys(n).length&&this.fx.float("…",t.x,t.y+.9,t.z,"#5f5470"),this.scenery.setHarvested(t,!0),t.respawn=60+Math.random()*30,t.hitsLeft=t.hitsNeeded,r.star?(this.audio.sfxRare(),this.hooks.toast?.(`별조각을 얻었어요! ⭐ ${Lx(r)}`,2600)):this.audio.sfxPickup(),this.hooks.onHarvest?.(t.kind,r,t),this.hooks.save?.(),{ok:!0,harvest:!0,gains:r}}pickup(t){const e=Le[t.itemId];if(!e)return!0;if(this.inventory.roomFor(t.itemId)<=0)return this.time-this.fullWarnAt>4&&(this.fullWarnAt=this.time,this.hooks.toast?.("가방이 가득 찼어요 — 공방 창고에 맡겨 주세요 🎒",2400)),!1;const i=this.inventory.add(t.itemId,t.count),n=t.count-i;return n>0&&(this.fx.float(`+${n} ${e.name}`,t.x,t.y+.85,t.z,"#5f5470"),this.audio.sfxPickup(),this.hooks.onPickup?.(t.itemId,n)),!0}update(t,e,i,n){if(this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),e>0){this.progress.restStamina(Ze.regenPerSecond*e);for(const r of this.scenery.nodes){if(r.harvested){r.respawn-=e,r.respawn<=0&&P(this,Xi,kl).call(this,r,!0);continue}if(r.berryT-=e,r.berryT>0)continue;if(this.drops.hasSource(r.key)){r.berryT=15+Math.random()*10;continue}const a=P(this,Xi,Bl).call(this,r.x,r.z),o=this.drops.spawn("berry",1,a.x,a.z,r.key);o&&(this.fx.burst(a.x,o.y+.5,a.z,"#ffb3c8",6,{spread:.8,up:1.2}),this.fx.float("열매가 톡",r.x,r.y+r.height*.9,r.z,"#c25f80")),r.berryT=45+Math.random()*30}}this.drops.update(t,n?i:null,r=>this.pickup(r))}}Xi=new WeakSet,zd=function(t){return t.kind==="tree"?t.frame.startsWith("cherry")?"#ffc2d8":"#9ed08a":t.kind==="rock"?"#c8c8dc":"#ffb9d5"},Bl=function(t,e){for(let i=0;i<8;i++){const n=Math.random()*Math.PI*2,r=.55+Math.random()*.5,a=t+Math.cos(n)*r,o=e+Math.sin(n)*r;if(!this.scenery.terrain||this.scenery.terrain.isWalkable(a,o))return{x:a,z:o}}return{x:t+.4,z:e+.4}},kl=function(t,e){t.harvested=!1,t.hitsLeft=t.hitsNeeded,t.respawn=0,t.scale=1,t.targetScale=1,t.opacity=1,t.targetOpacity=1,t.mesh.scale.setScalar(1),t.mesh.material.opacity=1,t.mesh.material.transparent=!1,t.mesh.material.depthWrite=!0,t.mesh.rotation.z=0,t.sprout.visible=!1,t.stubTarget=0,t.stub.material.opacity=0,t.stub.visible=!1,t.collider&&(t.collider.r=t.baseR),e&&this.fx.burst(t.x,t.y+t.height*.35,t.z,"#cfeeb4",7,{spread:.9,up:1.4})};Object.values(hi).reduce((s,t)=>s+t.weight,0);function jM(s){const t=Object.values(s).reduce((i,n)=>i+n,0);let e=Math.random()*t;for(const[i,n]of Object.entries(s))if(e-=n,e<=0)return hi[i];return hi.anchovy}var Ye,Gd,Hd,ji;class tS{constructor({progress:t,audio:e,fx:i,scene:n,hud:r,hooks:a={}}){ni(this,Ye);this.progress=t,this.audio=e,this.fx=i,this.hud=r,this.hooks=a,this.state="idle",this.t=0,this.waitFor=2,this.window=Ue.biteWindow,this.baitUsed=!1,this.lastResult=null,this.castFrom=new I,this.rings=[],P(this,Ye,Gd).call(this,n)}get active(){return this.state!=="idle"}get waitingBite(){return this.state==="bite"}get canReel(){return this.state==="bite"||this.state==="wait"||this.state==="cast"}start({bait:t=!1}={}){if(this.state!=="idle")return{ok:!1,reason:"busy"};if(!this.progress.building("dock").done)return{ok:!1,reason:"dock"};if(this.progress.stamina<Ue.stamina)return{ok:!1,reason:"stamina"};let e=!1;if(t){if(this.progress.supply("bait")<=0)return{ok:!1,reason:"no-bait"};this.progress.takeSupply("bait",1),e=!0}this.progress.useStamina(Ue.stamina),this.progress.fishing.casts+=1,this.baitUsed=e,this.state="cast",this.t=0,this.lastResult=null,this.waitFor=Ue.waitMin+Math.random()*(Ue.waitMax-Ue.waitMin),this.window=Ue.biteWindow;const i=Ue.spot;this.castFrom.set(i.x+.1,.9,i.z-.6),this.group.visible=!0,this.bobber.position.copy(this.castFrom),this.bobber.scale.setScalar(1);for(const n of this.rings)n.t=0,n.mesh.material.opacity=0;return this.audio?.sfxCast?.(),this.hud?.setFishing?.({state:"cast",label:"찌를 던지는 중…"}),P(this,Ye,ji).call(this),this.hooks.onStart?.(),{ok:!0,bait:e}}reel(){return this.active?this.state==="bite"?P(this,Ye,Hd).call(this):this.state==="wait"||this.state==="cast"?(this.state="lost",this.t=0,this.progress.fishing.misses+=1,this.audio?.sfxDeny?.(),this.hud?.setFishing?.({state:"lost",label:"찌를 너무 일찍 당겼어요"}),this.hooks.toast?.("찌를 너무 일찍 당겼어요 — 입질을 기다려 보세요 🎣",1900),P(this,Ye,ji).call(this),{ok:!1,reason:"early"}):{ok:!1,reason:"state"}:{ok:!1,reason:"idle"}}cancel(t=""){this.active&&(this.state="idle",this.t=0,this.group.visible=!1,this.hud?.setFishing?.(null),t&&this.hooks.toast?.(t,1800),P(this,Ye,ji).call(this))}update(t,e){if(!this.active)return;const i=Ue.spot;if((e?Math.hypot(e.x-i.x,e.z-i.z):99)>Ue.leash&&this.state!=="reel"&&this.state!=="lost"){this.cancel("찌에서 너무 멀어졌어요 — 낚싯줄을 회수했어요");return}this.t+=t;const r=new I(Ue.castTo.x,.12,Ue.castTo.z);if(this.state==="cast"){const o=Math.min(1,this.t/.55);this.bobber.position.lerpVectors(this.castFrom,r,o),this.bobber.position.y=this.castFrom.y+(r.y-this.castFrom.y)*o+Math.sin(o*Math.PI)*.85,o>=1&&(this.state="wait",this.t=0,this.audio?.sfxSplash?.(.55),this.fx?.burst(r.x,.12,r.z,"#e6fbff",10,{spread:1.1,up:1.4}),this.hud?.setFishing?.({state:"wait",label:"찌가 둥실둥실… 입질을 기다려요"}),P(this,Ye,ji).call(this))}else if(this.state==="wait")this.bobber.position.x=r.x+Math.sin(this.t*1.7)*.06,this.bobber.position.z=r.z+Math.cos(this.t*1.3)*.06,this.bobber.position.y=r.y+.02+Math.sin(this.t*3.1)*.026,this.bobber.rotation.z=Math.sin(this.t*2.1)*.12,this.t>=this.waitFor&&(this.state="bite",this.t=0,this.audio?.sfxSplash?.(1),this.audio?.sfxBite?.(),this.fx?.burst(r.x,.16,r.z,"#ffffff",14,{spread:1.3,up:2.2}),this.fx?.float("!",r.x,.95,r.z,"#ff6f8f"),this.hud?.setFishing?.({state:"bite",label:"입질! 지금 탭!",urgent:!0,ratio:1}),this.hud?.bite?.(),P(this,Ye,ji).call(this));else if(this.state==="bite"){const o=Math.max(0,this.window-this.t);this.bobber.position.set(r.x+(Math.random()-.5)*.1,r.y-.05+Math.sin(this.t*34)*.035,r.z+(Math.random()-.5)*.1),this.bobber.rotation.z=Math.sin(this.t*26)*.35,this.hud?.setFishing?.({state:"bite",label:"입질! 지금 탭!",urgent:!0,ratio:o/this.window}),this.t>=this.window&&(this.state="lost",this.t=0,this.progress.fishing.misses+=1,this.progress.gainExp("fish",Ue.expMiss),this.audio?.sfxDeny?.(),this.hud?.setFishing?.({state:"lost",label:"놓쳤어요…"}),this.hooks.toast?.("놓쳤어요… 찌가 가라앉는 순간을 노려 보세요",1800),P(this,Ye,ji).call(this))}else if(this.state==="reel"||this.state==="lost"){const o=Math.min(1,this.t/.55);this.bobber.position.y=.06+(this.state==="reel"?o*.9:-o*.25),this.bobber.scale.setScalar(Math.max(.001,1-o)),o>=1&&(this.state="idle",this.group.visible=!1,this.bobber.scale.setScalar(1),this.hud?.setFishing?.(null),P(this,Ye,ji).call(this))}const a=this.bobber.position;for(const o of this.rings){o.t+=t,o.t>o.life&&(o.t=0);const l=o.t/o.life;o.mesh.position.set(a.x,.1,a.z);const c=.55+l*(this.state==="bite"?2.6:1.75);o.mesh.scale.set(c,1,c),o.mesh.material.opacity=(1-l)*(this.state==="bite"?.95:.72)}if(e){const o=this.line.geometry.attributes.position;o.setXYZ(0,e.x,(e.y||.7)+1,e.z),o.setXYZ(1,a.x,a.y+.05,a.z),o.needsUpdate=!0}}}Ye=new WeakSet,Gd=function(t){this.group=new ci,this.group.name="Fishing",this.group.visible=!1,t.add(this.group),this.bobber=new ci;const e=new me(new Ba(.14,14,12),new Hi({color:"#fffaf6",toneMapped:!1})),i=new me(new vc(.1,.18,12),new Hi({color:"#ff6f8f",toneMapped:!1}));i.position.y=.15,this.bobber.add(e,i),this.glow=new En(new on({map:Pa(),color:"#dff6ff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),this.glow.scale.set(.95,.95,1),this.bobber.add(this.glow),this.group.add(this.bobber);const n=new hn(1,1);n.rotateX(-Math.PI/2);for(let a=0;a<3;a++){const o=new Hi({map:Fx(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}),l=new me(n,o);l.renderOrder=4,this.group.add(l),this.rings.push({mesh:l,t:a*.45,life:1.5})}const r=new we().setFromPoints([new I(0,0,0),new I(0,0,0)]);this.line=new Dp(r,new Vu({color:"#f6fdff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),this.line.frustumCulled=!1,this.group.add(this.line)},Hd=function(){const t=this.baitUsed?TM:Object.fromEntries(Object.keys(hi).map(r=>[r,hi[r].weight])),e=jM(t),i=Math.round(e.size[0]+Math.random()*(e.size[1]-e.size[0])),n=this.bobber.position;if(e.id==="star"){const r=this.progress.inventory.add("star",1);r>0&&(this.progress.inventory.storage.star=(this.progress.inventory.stored("star")||0)+r)}else this.progress.addFish(e.id,1);return this.progress.fishing.catches+=1,e.id!=="star"&&(this.progress.fishing.best=Math.max(this.progress.fishing.best,i)),this.state="reel",this.t=0,this.lastResult={fish:e,size:i},this.fx?.burst(n.x,.35,n.z,e.tint||"#dff6ff",16,{spread:1.5,up:2.6}),this.fx?.float(`${e.icon} ${e.name}`,n.x,1.15,n.z,"#5f5470"),this.audio?.sfxReel?.(),e.rare&&this.audio?.sfxRare?.(),this.hooks.onCatch?.(e,i,{bait:this.baitUsed}),this.hud?.setFishing?.({state:"reel",label:`${e.name} ${RM(e.id,i)} 획득!`}),P(this,Ye,ji).call(this),{ok:!0,fish:e,size:i}},ji=function(){const t=this.hud;t?.setAction&&this.state!=="idle"&&(this.state==="bite"?t.setAction({active:!0,icon:"🎣",label:"입질! 탭!"}):this.state==="cast"||this.state==="wait"?t.setAction({active:!0,icon:"🎣",label:"회수하기"}):t.setAction({active:!1,icon:"🎣",label:"낚시 중"}))};const eS=16,iS=.95;class nS{constructor(t,e){this.terrain=e,this.group=new ci,this.group.name="Drops",t.add(this.group),this.items=[],this.time=0}hasSource(t){return!!t&&this.items.some(e=>e.sourceKey===t)}spawn(t,e,i,n,r=null){const a=Le[t]?t:"berry";if(r&&this.hasSource(r))return null;for(;this.items.length>=eS;)this.remove(this.items[0]);const o=Math.max(this.terrain.groundY(i,n),.02),l=new En(new on({map:Nx(a),transparent:!0,depthWrite:!1,toneMapped:!1}));l.scale.set(.44,.44,1),l.position.set(i,o+.36,n),l.renderOrder=3;const c=new En(new on({map:Pa(),color:Le[a].tint,transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1,blending:sr}));c.scale.set(.95,.95,1),c.position.copy(l.position),c.position.y-=.04,c.renderOrder=2;const h={itemId:a,count:Math.max(1,Math.floor(e)||1),x:i,z:n,y:o,sprite:l,halo:c,sourceKey:r,age:Math.random()*6};return l.userData.drop=h,this.group.add(c),this.group.add(l),this.items.push(h),h}remove(t){const e=this.items.indexOf(t);e<0||(this.items.splice(e,1),t.sprite.material.dispose(),t.halo.material.dispose(),this.group.remove(t.sprite),this.group.remove(t.halo))}update(t,e,i){this.time+=t;for(let n=this.items.length-1;n>=0;n--){const r=this.items[n];r.age+=t;const a=Math.sin(this.time*2.3+r.age)*.07;r.sprite.position.y=r.y+.38+a,r.halo.position.y=r.y+.32+a*.6;const o=.62+Math.sin(this.time*3.1+r.age)*.18;r.halo.material.opacity=o;const l=.9+Math.sin(this.time*2.6+r.age)*.08;if(r.halo.scale.set(l,l,1),!e)continue;Math.hypot(r.x-e.x,r.z-e.z)<=iS&&(i?i(r):!0)!==!1&&this.remove(r)}}rayTargets(){return this.items.map(t=>t.sprite)}clear(){for(let t=this.items.length-1;t>=0;t--)this.remove(this.items[t])}}const us=220;class sS{constructor(t,e){this.scene=t,this.particles=Array.from({length:us},()=>({x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,color:new pt("#ffffff")})),this.cursor=0;const i=new Float32Array(us*3),n=new Float32Array(us*3);for(let o=0;o<us;o++)i[o*3+1]=-999;const r=new we;r.setAttribute("position",new ei(i,3)),r.setAttribute("color",new ei(n,3));const a=new gc({size:.17,map:Ox(),vertexColors:!0,transparent:!0,opacity:.96,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0});this.points=new Wu(r,a),this.points.name="GatherFx",this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.layer=x("div",{class:"float-layer"}),e.append(this.layer),this.texts=[],this.v=new I}burst(t,e,i,n="#ffd7e7",r=10,a={}){const o=a.spread??1.6,l=a.up??2.3,c=a.size??1;for(let h=0;h<r;h++){const u=this.particles[this.cursor];this.cursor=(this.cursor+1)%us;const d=Math.random()*Math.PI*2,f=Math.random()*o;u.x=t+Math.cos(d)*.12,u.y=e+.25+Math.random()*.5,u.z=i+Math.sin(d)*.12,u.vx=Math.cos(d)*f,u.vz=Math.sin(d)*f,u.vy=.6+Math.random()*l,u.max=.45+Math.random()*.4,u.life=u.max,u.size=c*(.7+Math.random()*.6),u.color.set(n),u.color.offsetHSL(0,0,(Math.random()-.5)*.12)}}float(t,e,i,n,r="#6b5878"){const a=x("div",{class:"float-text",style:{color:r}},t);for(this.layer.append(a),this.texts.push({el:a,pos:new I(e,i,n),age:0,life:1.15});this.texts.length>14;)this.texts.shift().el.remove()}update(t,e){const i=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array;for(let o=0;o<us;o++){const l=this.particles[o],c=o*3;if(l.life<=0){i[c+1]!==-999&&(i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0);continue}if(l.life=Math.max(0,l.life-t),l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t,l.vy-=5.4*t,l.vx*=1-t*1.6,l.vz*=1-t*1.6,l.y<.02&&(l.y=.02,l.vy*=-.32),l.life<=0){i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0;continue}const h=Math.min(1,l.life/l.max);i[c]=l.x,i[c+1]=l.y,i[c+2]=l.z,n[c]=l.color.r*h,n[c+1]=l.color.g*h,n[c+2]=l.color.b*h}if(this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,!this.texts.length)return;const r=window.innerWidth,a=window.innerHeight;for(let o=this.texts.length-1;o>=0;o--){const l=this.texts[o];if(l.age+=t,l.age>=l.life){l.el.remove(),this.texts.splice(o,1);continue}const c=l.age/l.life;this.v.copy(l.pos),this.v.y+=.55+c*.85,this.v.project(e);const h=(this.v.x*.5+.5)*r,u=(-this.v.y*.5+.5)*a;l.el.style.transform=`translate(-50%, -50%) translate(${h.toFixed(1)}px, ${u.toFixed(1)}px)`,l.el.style.opacity=String(Math.min(1,(1-c)*2.4)),l.el.style.fontSize=`${13-c*1.5}px`}}clear(){for(const t of this.particles)t.life=0,t.y=-999;for(const t of this.texts)t.el.remove();this.texts=[]}}function rS(s,t){const e=pr[t];if(!e)return{ok:!1,reason:"recipe"};const i=s.canCook(t);if(!i.ok)return{ok:!1,reason:i.reason,lack:i.lack};for(const[n,r]of Object.entries(e.need))s.inventory.take(n,r);for(const[n,r]of Object.entries(e.fish))s.takeFish(n,r);return s.restStamina(e.stamina),s.markCooked(t),s.gainExp("cook",e.exp),e.buff>0&&s.setBuff("golden",e.buff),{ok:!0,recipe:e}}function vu(s){const t=[];for(const[e,i]of Object.entries(s.need||{}))t.push({id:e,n:i,source:"bag"});for(const[e,i]of Object.entries(s.fish||{}))t.push({id:e,n:i,source:"fish"});return t}function zl(s){return Math.max(0,Math.floor(Number(wM[s])||0))}function aS(s){const t=[];for(const e of Dl){const i=s.inventory.count(e),n=zl(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"bag"})}for(const e of On){const i=s.fishCount(e),n=zl(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"fish"})}return t}function oS(s,t,e=1){const i=zl(t);if(!i)return{ok:!1,reason:"nosell"};const n=s.inventory.count(t),r=s.fishCount(t),a=n+r;if(a<=0)return{ok:!1,reason:"empty"};const o=e==="all"?a:Math.max(1,Math.floor(Number(e)||1)),l=Math.min(a,o);let c=l;const h=Math.min(r,c);h>0&&(s.takeFish(t,h),c-=h),c>0&&s.inventory.take(t,c);const u=l*i;return s.addCoins(u),{ok:!0,count:l,coin:u}}function lS(s,t){const e=vs[t];return e?s.supply(t)>=99?{ok:!1,reason:"full"}:s.spendCoins(e.price)?(s.addSupply(t,1),{ok:!0,good:e}):{ok:!1,reason:"coin"}:{ok:!1,reason:"nogood"}}function cS(s){return Js.map(t=>({...vs[t],owned:s.supply(t),affordable:s.coins>=vs[t].price}))}const Qi=(s,t="")=>x("span",{class:`lchip ${t}`},s);var ae,Gl,tn,Hl,Vd,Wd,Xd,$d;class hS{constructor(t){ni(this,ae);this.game=t,this.codexTab="ditto",this.shopTab="sell"}codex(){const t=P(this,ae,Gl).call(this,[{id:"ditto",label:"메타몽"},{id:"fish",label:"물고기"},{id:"cook",label:"요리"},{id:"cat",label:"고양이"}],this.codexTab,n=>{this.codexTab=n,this.game.openCodex()}),e=x("div",{class:"codex-tabs"},t);return this.codexTab==="fish"?e.append(P(this,ae,Wd).call(this)):this.codexTab==="cook"?e.append(P(this,ae,Xd).call(this)):this.codexTab==="cat"?e.append(P(this,ae,$d).call(this)):e.append(P(this,ae,Vd).call(this)),{title:"📔 도감",subtitle:{ditto:"점 눈 두 개만 남은 어설픈 위장들",fish:"부두에서 낚은 물고기 기록",cook:"공방에서 만들어 본 요리",cat:"솜이와 옹이의 마음"}[this.codexTab]||"",body:e,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}rank(){const e=this.game.progress.skills,i=e.title(),n=e.rows(),r=x("div",{},x("div",{class:"title-medal"},x("span",{class:"ico"},i.icon),x("div",{},x("div",{class:"nm"},i.name),x("div",{class:"meta"},`생활 EXP 합계 ${i.total}`)),i.next?Qi(`다음 ${i.next.name}까지 ${i.toNext}`,"warm"):Qi("최고 칭호","ok")),P(this,ae,tn).call(this,i.pct,"life"),x("div",{class:"section-label"},"4대 생활 스킬"),x("div",{class:"skill-list"},...n.map(a=>x("div",{class:"skill-row"},x("span",{class:"sico"},a.icon),x("div",{class:"smain"},x("div",{class:"nm"},`${a.name} · ${a.rank}`),P(this,ae,tn).call(this,a.pct),x("div",{class:"meta"},`${a.exp} EXP${a.next?` · ${a.next.name}까지 ${a.toNext}`:" · 최고 랭크"}`)),x("span",{class:"lv"},`Lv.${a.level}`)))),x("div",{class:"section-label"},"승급 조건"),x("div",{class:"hint"},bn.map(a=>`${a.name} ${a.exp}`).join(" · ")),x("div",{class:"section-label"},"경험치"),x("div",{class:"hint"},"채집 +6 · 낚시 성공 +14 · 요리 +30 · 돌보기 +10 (간식 +12)"),x("div",{class:"hint"},"4개 스킬 EXP 합계가 섬 생활 칭호를 정해요."));return{title:"🌱 생활 랭크",subtitle:`${i.name} · 총 ${i.total} EXP`,body:r,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}questList(){const e=this.game.progress.questRows(),i=x("div",{class:"quest-list"});if(!e.length)return i.append(x("div",{class:"hint"},"오늘의 의뢰를 준비 중이에요.")),i;for(const n of e){const r=x("button",{class:`mini quest-claim ${n.done&&!n.claimed?"on":""}`,type:"button"},n.claimed?"완료":n.done?"보상 받기":`${n.progress}/${n.need}`);(n.claimed||!n.done)&&(r.disabled=!0),r.addEventListener("click",()=>this.game.claimQuest(n.id)),i.append(x("div",{class:`quest-row ${n.done?"done":""} ${n.claimed?"claimed":""}`},x("span",{class:"qico"},n.icon),x("div",{class:"qmain"},x("div",{class:"nm"},n.label),P(this,ae,tn).call(this,n.pct),x("div",{class:"meta"},`🪙 ${n.reward.coin}${n.reward.star?` · ⭐ ${n.reward.star}`:""} · ${n.progress}/${n.need}`)),r))}return i}quests(){const t=this.game.progress,e=t.questRows(),i=e.filter(n=>n.done&&!n.claimed).length;return{title:"📋 오늘의 의뢰",subtitle:`Day ${t.quests.day} · ${e.length}건${i?` · 받을 보상 ${i}건`:""}`,body:x("div",{},x("div",{class:"hint"},"Day 가 바뀌면 새 의뢰 두 건이 자동으로 생겨요. 달성하면 코인과 별조각을 받아요."),this.questList(),x("div",{class:"section-label"},"보유"),x("div",{class:"hint"},`🪙 섬 코인 ${t.coins}`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}vending(){const t=this.game.progress,e=P(this,ae,Gl).call(this,[{id:"sell",label:"팔기"},{id:"buy",label:"사기"}],this.shopTab,n=>{this.shopTab=n,this.game.openVending()}),i=x("div",{},x("div",{class:"wallet"},x("span",{},"🪙"),x("strong",{},String(t.coins)),x("span",{class:"hint"},"섬 코인")),e);if(this.shopTab==="buy"){const n=x("div",{class:"shop-list"});for(const r of cS(t)){const a=x("button",{class:`mini buy ${r.affordable?"on":""}`,type:"button"},`🪙 ${r.price}`);r.affordable||(a.disabled=!0),a.addEventListener("click",()=>this.game.buyGood(r.id)),n.append(x("div",{class:"shop-row"},x("span",{class:"gico"},r.icon),x("div",{class:"gmain"},x("div",{class:"nm"},`${r.name}${r.owned?` · ${r.owned}개 보유`:""}`),x("div",{class:"meta"},r.desc)),a))}i.append(x("div",{class:"section-label"},"사기"),n),t.supply("ade")>0&&i.append(x("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.drinkAde()},`🥤 반짝 에이드 마시기  ·  기력 +${Ol}  (${t.supply("ade")}개)`)),i.append(x("div",{class:"hint"},"츄르는 고양이 돌보기에서, 별빛 미끼는 낚시할 때 써요."))}else{const n=aS(t),r=x("div",{class:"shop-list"});n.length||r.append(x("div",{class:"hint"},"팔 수 있는 재료나 물고기가 없어요."));for(const a of n){const o=x("button",{class:"mini",type:"button"},"1개");o.addEventListener("click",()=>this.game.sellItem(a.id,1));const l=x("button",{class:"mini on",type:"button"},"전부");l.addEventListener("click",()=>this.game.sellItem(a.id,"all")),r.append(x("div",{class:"shop-row"},x("span",{class:"gico"},nn(a.id)),x("div",{class:"gmain"},x("div",{class:"nm"},`${en(a.id)} × ${a.n}`),x("div",{class:"meta"},`개당 🪙 ${a.unit}${a.source==="fish"?" · 낚시 바구니":""}`)),x("div",{class:"shop-btns"},o,l)))}i.append(x("div",{class:"section-label"},"팔기"),r,x("div",{class:"hint"},"전부 팔면 그 재료/물고기를 한 번에 정리해요."))}return{title:"🥤 메타몽 자판기",subtitle:"팔고, 사고 — 섬 코인이 오가는 곳",body:i,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cooking(){const t=this.game.progress,e=x("div",{class:"recipe-list"});for(const i of ra){const n=pr[i],r=t.canCook(i),a=vu(n).map(l=>{const c=l.source==="fish"?t.fishCount(l.id):t.inventory.count(l.id);return x("span",{class:`lchip ${c>=l.n?"ok":"lack"}`},`${nn(l.id)} ${en(l.id)} ${c}/${l.n}`)}),o=x("button",{class:`mini cook ${r.ok?"on":""}`,type:"button"},"요리");r.ok||(o.disabled=!0),o.addEventListener("click",()=>this.game.cook(i)),e.append(x("div",{class:"recipe-row"},x("span",{class:"rico"},n.icon),x("div",{class:"rmain"},x("div",{class:"nm"},`${n.name} · 기력 +${n.stamina}${n.buff?" + 버프":""}`),x("div",{class:"chips"},...a),x("div",{class:"meta"},n.desc)),x("div",{class:"shop-btns"},o)))}return{title:"🍳 공방 요리",subtitle:`지금 기력 ${Math.round(t.stamina)} / 100`,body:x("div",{},x("div",{class:"hint"},"재료와 물고기를 넣고 요리하면 기력이 회복돼요. 황금 정식은 60초 동안 채집이 가벼워져요."),e,x("div",{class:"section-label"},"보유 재료"),x("div",{class:"chips"},...["log","stone","petal","star","berry"].map(i=>Qi(`${nn(i)} ${en(i)} ${t.inventory.count(i)}`)),...On.filter(i=>t.fishCount(i)>0).map(i=>Qi(`${nn(i)} ${en(i)} ${t.fishCount(i)}`)))),actions:[{label:"🔨 도구 강화",kind:"ghost",onClick:()=>this.game.openUpgrade()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}upgrade(){const t=this.game.progress,e=x("div",{class:"tool-list"});for(const i of ms){const n=t.toolInfo(i),r=t.canUpgrade(i),a=Object.entries(n.cost).map(([c,h])=>{const u=c==="coin"?t.coins:t.inventory.count(c),d=c==="coin"?`🪙 ${h}`:`${nn(c)} ${en(c)} ${h}`;return Qi(`${d} (${u})`,u>=h?"ok":"lack")}),o=x("button",{class:`mini up ${r.ok?"on":""}`,type:"button"},n.maxed?"최대":`Lv.${n.level+1} 강화`);r.ok||(o.disabled=!0),o.addEventListener("click",()=>this.game.upgradeTool(i));const l=n.level>=n.max?"더 강화할 수 없어요":`기력 소모 ×${n.def.stamina[n.level].toFixed(2)}${n.def.hits[n.level]?" · 타격 +1":""}`;e.append(x("div",{class:"tool-row"},x("span",{class:"tico"},n.def.icon),x("div",{class:"tmain"},x("div",{class:"nm"},`${n.def.name} · Lv.${n.level}${n.maxed?" (최대)":""}`),x("div",{class:"chips"},...a),x("div",{class:"meta"},l)),x("div",{class:"shop-btns"},o)))}return{title:"🪓 도구 강화",subtitle:"재료와 코인을 넣으면 한 번에 더 많이 캐요",body:x("div",{},x("div",{class:"hint"},"도끼는 나무, 곡괭이는 바위에 적용돼요. Lv.3이면 타격 횟수도 줄어요."),e,x("div",{class:"section-label"},"보유"),x("div",{class:"hint"},`🪙 ${t.coins} · 🪵 ${t.inventory.count("log")} · 🪨 ${t.inventory.count("stone")} · ⭐ ${t.inventory.count("star")}`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cat(t){const e=this.game.progress,i=vi.find(f=>f.id===t)||vi[0],n=e.catRow(i.id),r=this.game.cats.find(f=>f.id===i.id),a=n.level,o=x("div",{class:"cat-portrait big tap"});P(this,ae,Hl).call(this,o,i.set,5),o.addEventListener("click",()=>this.game.petCat(i.id));const l=x("button",{class:`btn soft wide ${r&&r.cd.pet>0?"wait":""}`,type:"button"},r&&r.cd.pet>0?`🤲 쓰다듬기 · ${r.cd.pet.toFixed(1)}초 뒤에 또`:`🤲 쓰다듬기  ·  호감도 +${Ge.pet.aff}`);r&&r.cd.pet>0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.petCat(i.id));const c=x("div",{class:"snack-row"});for(const f of Ge.snackOrder){const _=Ge.snacks[f],S=f==="churu"?e.supply("churu"):f==="berry"?e.inventory.count("berry"):e.fishCount("anchovy"),p=x("button",{class:`mini snack ${S>0&&r&&r.cd.snack<=0?"on":""}`,type:"button"},`${_.icon} ${_.name} (${S})`);(S<=0||!r||r.cd.snack>0)&&(p.disabled=!0),p.addEventListener("click",()=>this.game.feedCat(i.id,f)),c.append(p)}let h;if(n.canFollow){const f=x("button",{class:`switch wide ${n.follow?"on":""}`,type:"button","aria-label":"따라오기"},n.follow?"따라오는 중":"따라오기");f.addEventListener("click",()=>this.game.toggleFollow(i.id)),h=x("div",{class:"row"},x("div",{},x("div",{class:"label"},"따라오기"),x("div",{class:"hint"},"섬을 걸으면 뒤따라와요")),f)}else h=x("div",{class:"hint"},`따라오기는 호감도 Lv.${Ge.followLevel}부터 열려요 (지금 Lv.${a}).`);const u=Object.entries(Ge.gifts).map(([f,_])=>{const S=n.gifts.includes(Number(f)),p=Object.entries(_).map(([m,y])=>`${nn(m)} ${en(m)} ${y}`).join(" · ");return x("div",{class:`gift-row ${S?"got":""}`},x("span",{},`Lv.${f}`),x("span",{class:"meta"},p),x("span",{class:"mini"},S?"받음":"대기"))}),d=x("div",{},x("div",{class:"cat-head"},o,x("div",{class:"cat-info"},x("div",{class:"nm"},`${i.name} · Lv.${n.level}`),P(this,ae,tn).call(this,n.pct,"care"),x("div",{class:"meta"},n.nextAt?`호감도 ${n.aff} / ${n.nextAt} (다음 Lv.${n.level+1}까지 ${n.toNext})`:`호감도 ${n.aff} · 최고 레벨`),x("div",{class:"say"},Ge.dialogue[i.id][a-1]))),x("div",{class:"section-label"},"돌보기"),l,x("div",{class:"section-label"},"간식"),c,x("div",{class:"section-label"},"함께 걷기"),h,x("div",{class:"section-label"},"보답 선물"),x("div",{class:"gift-list"},...u));return{title:`🐱 ${i.name} 돌보기`,subtitle:n.follow?"지금 따라오고 있어요":"쓰다듬고 간식을 주면 마음이 열려요",body:d,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}ae=new WeakSet,Gl=function(t,e,i){const n=x("div",{class:"tabbar"});for(const r of t){const a=x("button",{class:`tab ${r.id===e?"on":""}`,type:"button","data-tab":r.id},r.label);a.addEventListener("click",()=>i(r.id)),n.append(a)}return n},tn=function(t,e=""){return x("div",{class:`progress-line ${e}`},x("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},Hl=function(t,e,i){const n=this.game.atlases.get(e);n&&(t.style.backgroundImage=`url("${new URL(`sprites/${e}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n.cols*100}% ${n.rows*100}%`,t.style.backgroundPosition=`${0/Math.max(1,n.cols-1)*100}% ${(i-1)/Math.max(1,n.rows-1)*100}%`)},Vd=function(){const t=this.game.state.discovered,e=x("div",{class:"codex-grid"});for(const n of Bn){const r=t.includes(n.id),a=x("div",{class:`codex-thumb ${r?"":"locked"}`},r?"":"· ? ·");r&&n.thumb&&this.game.paintDittoThumb(a,n.thumb),e.append(x("div",{class:`codex-card ${r?"":"unknown"}`},a,x("div",{class:"name"},r?n.name:"아직 못 찾음"),x("div",{class:"meta"},r?n.flavor:"섬 어딘가에서 돌멩이인 척하고 있어요")))}const i=Math.round(t.length/Bn.length*100);return x("div",{},P(this,ae,tn).call(this,i),x("div",{class:"hint"},`발견 ${t.length} / ${Bn.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),x("div",{class:"section-label"},"이번 섬의 도감"),e)},Wd=function(){const t=this.game.progress,e=x("div",{class:"fish-grid"});for(const n of On){const r=hi[n],a=t.fishCount(n),o=a>0;e.append(x("div",{class:`fish-card ${o?"":"locked"} ${r.rare?"rare":""}`},x("span",{class:"fico"},o?r.icon:"❔"),x("div",{class:"fmain"},x("div",{class:"nm"},o?r.name:"아직 못 봄"),x("div",{class:"meta"},o?r.desc:"부두에서 낚시하면 만날 수 있어요")),x("div",{class:"fright"},o?Qi(`${a}마리`,"ok"):Qi("미등록"))))}const i=On.filter(n=>t.fishCount(n)>0).length;return x("div",{},P(this,ae,tn).call(this,Math.round(i/On.length*100)),x("div",{class:"hint"},`등록 ${i} / ${On.length}종 · 낚시 ${t.fishing.casts}회 · 성공 ${t.fishing.catches}회 · 놓침 ${t.fishing.misses}회`),x("div",{class:"section-label"},"어종"),e,x("div",{class:"hint"},"별빛 미끼를 쓰면 희귀 어종(별빛해파리·황금잉어) 확률이 올라가요 🪱"))},Xd=function(){const t=this.game.progress,e=x("div",{class:"recipe-list"});let i=0;for(const n of ra){const r=pr[n],a=t.cookedCount(n);a>0&&(i+=1);const o=vu(r).map(l=>`${nn(l.id)} ${en(l.id)} ${l.n}`).join(" · ");e.append(x("div",{class:`recipe-card ${a>0?"":"locked"}`},x("span",{class:"rico"},a>0?r.icon:"❔"),x("div",{class:"rmain"},x("div",{class:"nm"},a>0?r.name:"아직 못 만듦"),x("div",{class:"meta"},o),x("div",{class:"meta"},r.stamina>=100?`기력 ${r.stamina} 회복 + ${Da.seconds}초 버프`:`기력 +${r.stamina}`)),x("div",{class:"fright"},a>0?Qi(`${a}번`,"ok"):Qi("미등록"))))}return x("div",{},P(this,ae,tn).call(this,Math.round(i/ra.length*100)),x("div",{class:"hint"},`만든 요리 ${i} / ${ra.length}종 · 공방을 복구하면 요리할 수 있어요`),x("div",{class:"section-label"},"레시피"),e)},$d=function(){const t=this.game.progress,e=x("div",{class:"cat-grid"});for(const i of vi){const n=t.catRow(i.id),r=x("div",{class:"cat-portrait"});P(this,ae,Hl).call(this,r,i.set,5),e.append(x("div",{class:"cat-card"},r,x("div",{class:"cmain"},x("div",{class:"nm"},`${i.name} · Lv.${n.level}`),P(this,ae,tn).call(this,n.pct,"care"),x("div",{class:"meta"},n.nextAt?`호감도 ${n.aff} / ${n.nextAt}`:`호감도 ${n.aff} · 최고 레벨`),x("div",{class:"meta"},Ge.dialogue[i.id][n.level-1]))))}return x("div",{},x("div",{class:"hint"},"쓰다듬고 간식을 주면 호감도가 올라요. Lv.3부터 [따라오기] 를 켤 수 있어요."),e)};const xu={muted:!1,timeScale:1,fps30:!1},Mu=[1,10,60];var H,qd,Yd,Kd,Zd,Jd,Qd,jd,Vl,tf,xa,ef,nf,Wl,sf,rf,af,of,Xl,lf,cf,hf,uf,$l,ql,df,dS,ff,ie,pf,Vt,mf,Qs,Yl,js,Kl,Ma,Zl,gf;class uS{constructor(t,e){ni(this,H);this.canvas=t,this.uiRoot=e,this.mode="boot",this.state={day:1,elapsed:120,discovered:[],settings:{...xu}},this.saveStore=new FM,this.audio=new iM,this.saveData=null,this.hasSave=!1,this.lastSavedAt=0,this.progress=new Bd,this.gathering=null,this.drops=null,this.fx=null,this.panels=null,this.life=null,this.fishing=null,this.fishTarget=null,this.nodeMeshes=[],this.siteMeshes=[],this.keys=new Set,this.paused=!1,this.contextLost=!1,this.target=null,this.last=0,this.acc30=0,this.autosaveAcc=0,this.hudAcc=0,this.frames=0,this.fpsAcc=0,this.fps=0,this.stats={fps:0,calls:0,triangles:0,sceneCalls:0,sceneTriangles:0},this.titleAngle=0,this.lookAt=new I,this.tmpA=new I,this.tmpB=new I,this.raycaster=new jp,this.tap={x:0,y:0,t:0},this.title=null,this.hud=null,this.modal=null}async start(){this.atlases=await ZM(),P(this,H,qd).call(this),P(this,H,Yd).call(this),P(this,H,Kd).call(this),P(this,H,Zd).call(this),P(this,H,Jd).call(this),P(this,H,Qd).call(this),await P(this,H,jd).call(this),P(this,H,rf).call(this)}async backToTitle(){this.modal.close(),await this.save(),this.mode="title",this.hasSave=!0,this.hud.hide(),this.hud.joystick.setEnabled(!1),P(this,H,Vl).call(this),this.title&&this.title.setProgress(1)}interact(){if(this.mode!=="play"||this.modal.isOpen||this.paused)return;if(this.fishing&&this.fishing.active){this.fishing.reel(),P(this,H,ie).call(this);return}const t=this.target;if(!t){this.hud.toast("가까이에 살펴볼 게 없어요 — 나무나 바위를 두드려 보세요 🪓",1700);return}if(t.isNode){this.gathering.hit(t),P(this,H,ie).call(this);return}if(t.kind==="site"){P(this,H,$l).call(this,t);return}if(t.kind==="fish"){this.openFishSpot();return}P(this,H,ql).call(this,t)}toggleMute(){return this.state.settings.muted=!this.state.settings.muted,this.audio.setMuted(this.state.settings.muted),this.hud.setMuted(this.state.settings.muted),this.state.settings.muted}openPause(){if(this.mode!=="play"||this.modal.isOpen)return;const t=this.state.settings,e=pa(this.state.elapsed),i=x("button",{class:`switch ${t.muted?"on":""}`,type:"button","aria-label":"음소거"});i.addEventListener("click",()=>{const h=this.toggleMute();i.classList.toggle("on",h)});const n=[],r=x("div",{class:"seg"});for(const h of Mu){const u=x("button",{type:"button",class:t.timeScale===h?"on":""},`${h}×`);u.addEventListener("click",()=>{this.state.settings.timeScale=h;for(const d of n)d.classList.remove("on");u.classList.add("on"),P(this,H,ie).call(this)}),n.push(u),r.append(u)}const a=x("button",{class:`switch ${t.fps30?"on":""}`,type:"button","aria-label":"30fps 절전"});a.addEventListener("click",()=>{this.state.settings.fps30=!this.state.settings.fps30,a.classList.toggle("on",this.state.settings.fps30)});const o=(h,u,d)=>x("div",{class:"row"},x("div",{},x("div",{class:"label"},h),x("div",{class:"hint"},u)),d),l=this.lastSavedAt?new Date(this.lastSavedAt).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"}):"아직 없음",c=x("div",{},x("div",{class:"section-label"},"지금 섬"),x("div",{class:"row"},x("div",{},x("div",{class:"label"},`Day ${this.state.day} · ${e.label}`),x("div",{class:"hint"},`도감 ${this.state.discovered.length}/${Bn.length} · 고양이 ${this.cats.length}마리`)),x("span",{class:"hint"},jh(this.state.elapsed))),x("div",{class:"section-label"},"설정"),o("음소거","섬의 소리를 끕니다",i),o("시간 배속","20분 하루를 빨리 감아 조명 변화를 확인",r),o("30fps 절전","배터리와 발열을 아껴요",a),x("div",{class:"section-label"},"저장"),x("div",{class:"hint"},`자동 저장 · ${this.saveStore.mode==="idb"?"IndexedDB":"localStorage"} · 마지막 ${l}`));P(this,H,Vt).call(this,{title:"잠깐 쉬는 중",subtitle:"모달이 열려 있는 동안 섬의 시간도 멈춰요",body:c,actions:[{label:"계속 걷기",kind:"primary",onClick:()=>this.modal.close()},{label:"타이틀로 돌아가기",kind:"ghost",onClick:()=>this.backToTitle()}],onClose:()=>this.save()})}openQuick(t){if(!(this.mode!=="play"||this.modal.isOpen)){if(t==="codex")return this.openCodex();if(t==="rank")return this.openRank();if(t==="bag")return this.openBag();if(t==="build"&&t==="build"){const e=x("div",{});for(const n of Gi){const r=this.progress.building(n.id),a=ma[n.id]||{},o=Object.values(a).reduce((h,u)=>h+u,0),l=Object.entries(a).reduce((h,[u,d])=>h+Math.min(d,r.invested[u]||0),0),c=x("button",{class:`site-item as-button ${r.done?"done":""}`,type:"button",onclick:()=>this.openBuild(n.id)},x("div",{class:"site-ico"},r.done?"✨":n.icon),x("div",{style:{flex:"1"}},x("div",{class:"site-name"},n.name),x("div",{class:"site-meta"},r.done?"복구 완료":`재료 ${l}/${o} 투입`)),x("span",{class:"hint"},r.done?"완료":"복구"));e.append(c)}const i=Gi.filter(n=>this.progress.building(n.id).done).length;P(this,H,Vt).call(this,{title:"섬 건축",subtitle:`네 곳 중 ${i}곳 복구 완료`,body:x("div",{},e,x("div",{class:"section-label"},"Tip"),x("div",{class:"hint"},"건물 앞에서 바로 복구할 수도 있어요. 공방을 복구하면 창고가 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}}}openBag(){this.mode==="play"&&P(this,H,Vt).call(this,this.panels.bag())}openStorage(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 창고가 열려요 🔨",2200);return}P(this,H,Vt).call(this,this.panels.storage())}}openBuild(t){this.mode==="play"&&P(this,H,Vt).call(this,this.panels.build(t))}openWorkshop(){this.mode==="play"&&P(this,H,Vt).call(this,this.panels.workshopMenu())}openMailbox(t=null){this.mode==="play"&&(this.questSource="mail",t&&this.progress.markRead(t),P(this,H,Vt).call(this,this.panels.mailbox(t)),P(this,H,ie).call(this))}eatBerry(){if(this.mode!=="play")return!1;const t=this.progress.inventory;if(t.count("berry")<=0)return this.audio.sfxDeny(),this.hud.toast("가방에 열매가 없어요 🍓 — 나무 밑을 살펴보세요",2e3),!1;if(this.progress.stamina>=Ze.max)return this.hud.toast("기력이 이미 가득해요 💪",1600),!1;t.take("berry",1),this.progress.restStamina(Ze.eat),this.audio.sfxEat();const e=this.player.position;return this.fx&&this.fx.float(`+${Ze.eat} 기력`,e.x,e.y+1.7,e.z,"#6f9450"),this.hud.toast(`열매를 먹었어요 — 기력 +${Ze.eat}`,1800),P(this,H,ie).call(this),this.save(),this.modal.isOpen&&P(this,H,Vt).call(this,this.panels.bag()),!0}moveToStorage(t,e="all"){this.progress.inventory.toStorage(t,e)>0?(this.audio.sfxUi(),this.save()):this.audio.sfxDeny(),P(this,H,Vt).call(this,this.panels.storage())}moveFromStorage(t,e="all"){this.progress.inventory.fromStorage(t,e)>0?(this.audio.sfxUi(),this.save()):(this.audio.sfxDeny(),this.hud.toast("가방이 가득 차서 꺼내지 못했어요",1800)),P(this,H,Vt).call(this,this.panels.storage())}invest(t){const e=this.progress.building(t),i=ma[t]||{},n=this.progress.inventory;let r=0;for(const[a,o]of Object.entries(i)){const l=o-(e.invested[a]||0);if(l<=0)continue;const c=n.take(a,l);c>0&&(e.invested[a]=(e.invested[a]||0)+c,r+=c)}if(r>0){this.audio.sfxBuild();const a=Gi.find(o=>o.id===t);a&&this.fx&&this.fx.burst(a.x,a.y+a.height*.5,a.z,"#ffe3b0",12,{spread:1.6,up:2.2}),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.panels.build(t))}else this.audio.sfxDeny(),this.hud.toast("넣을 재료가 부족해요 — 채집해 올까요? 🪓",2e3)}completeBuild(t){const e=this.progress.building(t),i=ma[t]||{};if(!Object.entries(i).every(([a,o])=>(e.invested[a]||0)>=o)||e.done)return!1;const r=Gi.find(a=>a.id===t);return e.done=!0,this.world.scenery.setBuilt(t,!0),this.landmarkLabels.setDone(t,!0),this.audio.sfxFanfare(),r&&this.fx&&(this.fx.burst(r.x,r.y+r.height*.55,r.z,"#ffe6a8",34,{spread:3.2,up:4.4,size:1.3}),this.fx.float("복구 완료!",r.x,r.y+r.height*.9,r.z,"#b2698f")),this.hud.toast(`🎉 ${r?r.name:t} 복구 완료!`,3200),t==="workshop"?setTimeout(()=>this.hud.toast("공방이 열렸어요 — 창고·요리·도구 강화를 쓸 수 있어요 📦",3e3),900):t==="dock"?setTimeout(()=>this.hud.toast("부두 끝에서 [낚시하기] — 찌를 던져 볼까요? 🎣",3e3),900):t==="vending"&&setTimeout(()=>this.hud.toast("자판기가 켜졌어요 — 재료와 물고기를 팔고 물건을 살 수 있어요 🥤",3e3),900),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.panels.build(t)),!0}claimGift(t){const e=La.find(r=>r.id===t);if(!e||!e.gift||this.progress.isClaimed(t))return!1;const i=this.progress.inventory;let n=0;for(const[r,a]of Object.entries(e.gift)){const o=i.add(r,a);o>0&&(i.storage[r]=(i.storage[r]||0)+o,n+=o)}return this.progress.markClaimed(t),this.progress.markRead(t),this.audio.sfxPickup(),this.hud.toast(n>0?`선물을 받았어요 — 가방이 가득해 ${n}개는 창고에 넣었어요 🎁`:"선물을 받았어요 🎁",2800),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.panels.mailbox(t)),!0}paintDittoThumb(t,e){P(this,H,mf).call(this,t,e)}openCodex(){this.mode==="play"&&P(this,H,Vt).call(this,this.life.codex())}openRank(){this.mode==="play"&&P(this,H,Vt).call(this,this.life.rank())}openQuest(){this.mode==="play"&&(this.questSource="quest",P(this,H,Vt).call(this,this.life.quests()))}openVending(){if(this.mode==="play"){if(!this.progress.building("vending").done){this.audio.sfxDeny(),this.hud.toast("자판기를 먼저 복구해야 열려요 🥤",2200),P(this,H,Vt).call(this,this.panels.build("vending"));return}P(this,H,Vt).call(this,this.life.vending())}}openCooking(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 요리할 수 있어요 🔨",2200),P(this,H,Vt).call(this,this.panels.build("workshop"));return}P(this,H,Vt).call(this,this.life.cooking())}}openUpgrade(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 도구를 강화할 수 있어요 🔨",2200);return}P(this,H,Vt).call(this,this.life.upgrade())}}openCat(t){this.mode==="play"&&P(this,H,Vt).call(this,this.life.cat(t))}openFishSpot(){if(this.mode!=="play")return;if(!this.progress.building("dock").done){this.audio.sfxDeny(),this.hud.toast("부두를 먼저 복구해야 낚시할 수 있어요 ⚓",2200),P(this,H,Vt).call(this,this.panels.build("dock"));return}if(this.fishing.active){this.fishing.reel();return}const t=this.progress,e=t.supply("bait"),i=x("div",{},x("div",{class:"hint"},"부두 끝으로 찌를 던져요. 물결이 퍼지다 입질이 오면 1.4초 안에 화면을 탭!"),x("div",{class:"row"},x("div",{},x("div",{class:"label"},"기력"),x("div",{class:"hint"},`낚시 1회에 ${Ue.stamina} 소모`)),x("span",{class:"hint"},`${Math.round(t.stamina)} / 100`)),x("div",{class:"row"},x("div",{},x("div",{class:"label"},"별빛 미끼"),x("div",{class:"hint"},"희귀 어종 확률이 올라가요")),x("span",{class:"hint"},`${e}개`)),x("div",{class:"section-label"},"오늘의 물빛"),x("div",{class:"chips"},...Object.values(hi).map(r=>x("span",{class:`lchip ${r.rare?"warm":""}`},`${r.icon} ${r.name}`)))),n=[{label:`🎣 낚시하기 (기력 ${Ue.stamina})`,kind:"primary",onClick:()=>P(this,H,Kl).call(this,!1)}];e>0&&n.push({label:"🪱 별빛 미끼 쓰고 낚시",kind:"ghost",onClick:()=>P(this,H,Kl).call(this,!0)}),n.push({label:"닫기",kind:"ghost",onClick:()=>this.modal.close()}),P(this,H,Vt).call(this,{title:"🎣 부두 낚시",subtitle:"찌 · 물결 · 그리고 1.4초",body:i,actions:n})}cook(t){const e=this.progress.skills.level("cook"),i=rS(this.progress,t);if(!i.ok)return this.audio.sfxDeny(),this.hud.toast(i.reason==="full"?"기력이 이미 가득해요 💪":"재료가 부족해요 — 채집·낚시로 모아 올까요?",2200),this.modal.isOpen&&P(this,H,Vt).call(this,this.life.cooking()),!1;this.audio.sfxCook();const n=this.player.position;return this.fx.float(`${i.recipe.icon} ${i.recipe.name}`,n.x,n.y+1.8,n.z,"#b2698f"),this.hud.toast(`${i.recipe.icon} ${i.recipe.name} 완성 — 기력 +${i.recipe.stamina}`,2400),i.recipe.buff>0&&setTimeout(()=>this.hud.toast(`✨ ${Da.seconds}초 동안 채집 기력이 가벼워져요`,2600),700),P(this,H,js).call(this,"cook",1),this.progress.skills.level("cook")>e&&P(this,H,Yl).call(this,"cook",this.progress.skills.row("cook").rank),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.life.cooking()),!0}upgradeTool(t){const e=ps[t],i=this.progress.upgradeTool(t);if(!i.ok)return this.audio.sfxDeny(),this.hud.toast(i.reason==="max"?"이미 최고 레벨이에요":"재료나 코인이 부족해요 🪙",2200),this.modal.isOpen&&P(this,H,Vt).call(this,this.life.upgrade()),!1;this.audio.sfxBuild(),this.hud.toast(`${e.icon} ${e.name} Lv.${i.info.level} 강화! ${e.kind==="tree"?"나무":"바위"}가 더 빨리 캐져요`,2600);const n=this.player.position;return this.fx.burst(n.x,n.y+.9,n.z,"#ffe3b0",14,{spread:1.1,up:2}),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.life.upgrade()),!0}sellItem(t,e=1){const i=oS(this.progress,t,e);return i.ok?(this.audio.sfxCoin(),this.hud.toast(`${nn(t)} ${en(t)} ${i.count}개 → 🪙 ${i.coin}`,2200),P(this,H,js).call(this,"sell",i.count),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.life.vending()),!0):(this.audio.sfxDeny(),this.hud.toast("팔 수 있는 게 없어요",1800),!1)}buyGood(t){const e=lS(this.progress,t);return e.ok?(this.audio.sfxCoin(),this.hud.toast(`${e.good.icon} ${e.good.name} 구입 — ${e.good.price} 코인`,2200),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.life.vending()),!0):(this.audio.sfxDeny(),this.hud.toast(e.reason==="coin"?"섬 코인이 부족해요 — 자판기에 재료를 팔아 모아 보세요 🪙":"지금은 살 수 없어요",2200),this.modal.isOpen&&P(this,H,Vt).call(this,this.life.vending()),!1)}drinkAde(){return this.progress.supply("ade")<=0?(this.audio.sfxDeny(),!1):this.progress.stamina>=Ze.max?(this.hud.toast("기력이 이미 가득해요 💪",1800),!1):(this.progress.takeSupply("ade",1),this.progress.restStamina(Ol),this.audio.sfxEat(),this.hud.toast(`🥤 반짝 에이드 — 기력 +${Ol}`,2e3),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.life.vending()),!0)}petCat(t){const e=P(this,H,Ma).call(this,t),i=vi.find(r=>r.id===t);if(!e||!i)return;if(e.cd.pet>0){this.audio.sfxDeny();return}e.cd.pet=Ge.pet.cooldown,e.pet(),this.audio.sfxMeow(),this.progress.restStamina(Ge.pet.stamina);const n=this.progress.addAffection(t,Ge.pet.aff);P(this,H,Qs).call(this,"care",Fo.pet),P(this,H,js).call(this,"pet",1),P(this,H,Zl).call(this,i,e,n)}feedCat(t,e){const i=P(this,H,Ma).call(this,t),n=vi.find(l=>l.id===t),r=Ge.snacks[e];if(!i||!n||!r)return;if(i.cd.snack>0){this.audio.sfxDeny(),this.hud.toast(`${n.name}가 방금 간식을 먹었어요 — 조금 뒤에 주세요`,1900);return}if((e==="churu"?this.progress.supply("churu"):e==="berry"?this.progress.inventory.count("berry"):this.progress.fishCount("anchovy"))<=0){this.audio.sfxDeny(),this.hud.toast(`${r.icon} ${r.name}이 없어요${e==="churu"?" — 자판기에서 살 수 있어요":""}`,2200);return}e==="churu"?this.progress.takeSupply("churu",1):e==="berry"?this.progress.inventory.take("berry",1):this.progress.takeFish("anchovy",1),i.cd.snack=r.cooldown,i.feast(),this.audio.sfxMeow();const o=this.progress.addAffection(t,r.aff);P(this,H,Qs).call(this,"care",Fo.treat),P(this,H,js).call(this,"treat",1),this.hud.toast(`${n.name}가 ${r.icon} ${r.name}을 맛있게 먹었어요 · 호감도 +${r.aff}`,2300),P(this,H,Zl).call(this,n,i,o)}toggleFollow(t){const e=this.progress.catRow(t),i=vi.find(a=>a.id===t);if(!e.canFollow){this.audio.sfxDeny(),this.hud.toast(`따라오기는 호감도 Lv.${Ge.followLevel}부터예요 (지금 Lv.${e.level})`,2200);return}const n=this.progress.cat(t);n.follow=!n.follow;const r=P(this,H,Ma).call(this,t);r&&r.setFollow(n.follow),this.audio.sfxUi(),this.hud.toast(n.follow?`${i?i.name:t}가 따라와요 🐾`:`${i?i.name:t}는 여기서 기다릴게요`,2e3),this.save(),P(this,H,ie).call(this),this.modal.isOpen&&P(this,H,Vt).call(this,this.life.cat(t))}claimQuest(t){const e=this.progress.claimQuest(t);if(!e.ok)return this.audio.sfxDeny(),!1;const i=e.quest;if(i.reward.star>0){const n=this.progress.inventory.add("star",i.reward.star);n>0&&(this.progress.inventory.storage.star=this.progress.inventory.stored("star")+n)}return this.audio.sfxCoin(),this.hud.toast(`📋 의뢰 완료! 🪙 ${i.reward.coin}${i.reward.star?` · ⭐ ${i.reward.star}`:""}`,2600),this.save(),P(this,H,ie).call(this),P(this,H,Vt).call(this,this.questSource==="mail"?this.panels.mailbox():this.life.quests()),!0}snapshot(){const t=this.progress.toJSON();return t.nodes=this.gathering?this.gathering.toJSON():{},{version:3,savedAt:Date.now(),day:this.state.day,elapsedSeconds:Math.round(this.state.elapsed*100)/100,elapsed:Math.round(this.state.elapsed*100)/100,playerPos:{x:+this.player.position.x.toFixed(3),y:+(this.player.position.y||0).toFixed(3),z:+this.player.position.z.toFixed(3)},player:{x:+this.player.position.x.toFixed(3),z:+this.player.position.z.toFixed(3),yaw:+this.player.yaw.toFixed(3)},discoveredDittos:[...this.state.discovered],discovered:[...this.state.discovered],settings:{...this.state.settings},...t}}async save(){if(this.mode==="boot")return!1;const t=this.snapshot(),e=await this.saveStore.save(t);return this.lastSavedAt=t.savedAt,this.lastSaveOk=e,e&&(this.hasSave=!0),e}}H=new WeakSet,qd=function(){const t=new qv({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=xe,t.toneMapping=Ua,t.toneMappingExposure=1.28,t.shadowMap.enabled=!0,t.shadowMap.type=er,t.info.autoReset=!1,this.renderer=t,this.camera=new _i(Ui.fov,window.innerWidth/window.innerHeight,.1,900),this.camera.position.set(0,28,48),this.onResize=()=>{const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/Math.max(1,i),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,i,!1),this.post&&this.post.setSize(e,i)},window.addEventListener("resize",this.onResize),window.visualViewport&&window.visualViewport.addEventListener("resize",this.onResize)},Yd=function(){this.world=new Qx(this.atlases),this.scene=this.world.scene,this.player=new nM(Un,this.world.terrain,this.atlases),this.player.colliders=[...this.world.scenery.colliders,...Bn.map(t=>({x:t.x,z:t.z,r:Math.max(.34,t.height*.42)})),...vi.map(t=>({x:t.x,z:t.z,r:.3}))],this.scene.add(this.player.group),this.scene.add(this.player.shadow),this.scene.add(this.player.dust),this.cats=vi.map(t=>new aM(t,this.world.terrain,this.atlases));for(const t of this.cats)this.scene.add(t.group),this.scene.add(t.shadow);this.dittos=Bn.map(t=>new hM(t,this.world.terrain,this.atlases));for(const t of this.dittos)this.scene.add(t.group),this.scene.add(t.shadow);this.spriteMaterials=[...this.player.sprites,...this.cats.flatMap(t=>t.sprites),...this.dittos.flatMap(t=>t.sprites),...this.world.scenery.billboards.map(t=>t.material)],this.world.setWeather(Ro(this.state.day)),this.lookAt.set(Un.x,this.player.position.y+Ui.lookHeight,Un.z),this.fx=new sS(this.scene,this.uiRoot),this.drops=new nS(this.scene,this.world.terrain),this.gathering=new QM({scenery:this.world.scenery,progress:this.progress,drops:this.drops,fx:this.fx,audio:this.audio}),this.gathering.hooks={toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPickup:()=>P(this,H,ie).call(this),onHit:t=>{t==="tree"?this.progress.questEvent("chop",1):t==="rock"&&this.progress.questEvent("mine",1)},onHarvest:(t,e)=>{P(this,H,Qs).call(this,"gather",Fo.harvest),e&&e.petal&&this.progress.questEvent("petal",e.petal),P(this,H,ie).call(this)}},this.nodeMeshes=this.world.scenery.nodes.map(t=>t.mesh),this.siteMeshes=this.world.scenery.sites.map(t=>t.billboard.mesh),this.fishing=new tS({progress:this.progress,audio:this.audio,fx:this.fx,scene:this.scene,hud:null,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onCatch:(t,e)=>{this.audio.sfxCoin(),P(this,H,Qs).call(this,"fish",Ue.exp),this.progress.questEvent("fish",1);const i=this.progress.fishCount(t.id)+(t.id==="star",0)===1;this.hud.toast(`${t.icon} ${t.name} ${t.id==="star"?"":`${e}cm`} 낚았다!${i?" 도감 등록 📔":""}`,2600),P(this,H,ie).call(this),this.save()},onStart:()=>P(this,H,ie).call(this)}})},Kd=function(){this.post=_u(this.renderer,this.scene,this.camera)},Zd=function(){this.hud=new mM(this.uiRoot,{onAction:()=>this.interact(),onMute:()=>this.toggleMute(),onPause:()=>this.openPause(),onQuick:t=>this.openQuick(t),onMail:()=>this.openMailbox(),onQuest:()=>this.openQuest()}),this.hud.hide(),this.modal=new _M(this.uiRoot),this.landmarkLabels=new vM(this.uiRoot,this.world.scenery.sites),this.panels=new xM(this),this.life=new hS(this),this.fishing&&(this.fishing.hud=this.hud)},Jd=function(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.tap.x=e.clientX,this.tap.y=e.clientY,this.tap.t=performance.now(),this.audio.resume()}),t.addEventListener("pointerup",e=>P(this,H,ff).call(this,e)),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),this.mode==="play"&&!this.modal.isOpen&&((e.code==="KeyE"||e.code==="Space")&&this.interact(),e.code==="Escape"&&this.openPause())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("gesturestart",e=>e.preventDefault())},Qd=function(){document.addEventListener("visibilitychange",()=>{document.hidden?(this.save(),this.audio.suspend()):(this.last=performance.now(),this.audio.resume())}),window.addEventListener("pagehide",()=>this.save()),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.hud.setContextLost(!0),this.last=performance.now()},!1),this.canvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.hud.setContextLost(!1);try{this.post&&this.post.dispose()}catch{}this.post=_u(this.renderer,this.scene,this.camera),this.post.setSize(window.innerWidth,window.innerHeight);const t=ud();this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of n)r&&r.isMeshToonMaterial&&(r.gradientMap=t,r.needsUpdate=!0)});const e=this.world.sunLight.shadow;e.map&&e.map.dispose(),e.map=null,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of n)if(r){r.needsUpdate=!0;for(const a of["map","alphaMap","gradientMap"])r[a]&&(r[a].needsUpdate=!0)}}),this.last=performance.now()},!1)},jd=async function(){const t=await this.saveStore.load();t&&typeof t=="object"&&(this.saveData=t,this.hasSave=!0),P(this,H,Vl).call(this),this.mode="title",P(this,H,Xl).call(this,.016);const e=performance.now(),i=()=>{const n=Math.min(1,(performance.now()-e)/720);this.title&&this.title.setProgress(n),n<1&&requestAnimationFrame(i)};requestAnimationFrame(i)},Vl=function(){this.title&&this.title.destroy(),this.title=new gM(this.uiRoot,{hasSave:this.hasSave,onContinue:()=>P(this,H,xa).call(this,!0),onNew:()=>P(this,H,tf).call(this)})},tf=function(){if(this.title&&(this.title.busy=!1),!this.hasSave){P(this,H,xa).call(this,!1);return}this.modal.open({title:"새 섬을 열까요?",subtitle:"지금 저장된 섬은 사라져요",body:"저장된 Day·플레이 위치·도감 기록이 지워지고 Day 1 아침부터 다시 시작해요.",actions:[{label:"그대로 둘게요",kind:"ghost",onClick:()=>this.modal.close()},{label:"새로 시작",kind:"primary",onClick:async()=>{await this.saveStore.clear(),this.hasSave=!1,this.saveData=null,this.modal.close(),P(this,H,xa).call(this,!1)}}],onClose:()=>{this.title&&(this.title.busy=!1,this.title.hint.textContent="저장된 섬이 있어요 — 이어서 걸어볼까요?")}})},xa=function(t){t&&this.saveData?P(this,H,nf).call(this,this.saveData):P(this,H,ef).call(this),this.mode="play",this.paused=!1,this.title&&this.title.hide(),this.hud.show(),this.hud.joystick.setEnabled(!0),this.hud.setMuted(this.state.settings.muted),this.audio.start(),this.audio.setMuted(this.state.settings.muted),this.audio.setPhase(pa(this.state.elapsed).id),this.world.setWeather(Ro(this.state.day)),P(this,H,sf).call(this),P(this,H,ie).call(this),this.hud.toast(t?`Day ${this.state.day} — 다시 만나서 반가워요 🌿`:"Day 1 — 섬에 도착했어요 🌿",2800),this.autosaveAcc=0,this.save()},ef=function(){this.state.day=1,this.state.elapsed=120,this.state.discovered=[],this.state.settings={...xu};for(const t of this.dittos)t.discovered=!1;this.player.teleport(Un.x,Un.z),this.player.setYaw(Math.PI),this.progress.reset(),this.progress.rollQuests(1),this.gathering&&(this.gathering.applySaved({}),this.gathering.hooks.toast=(t,e)=>this.hud&&this.hud.toast(t,e));for(const t of this.cats)t.setFollow(!1);this.fishing&&this.fishing.cancel(),this.fx&&this.fx.clear(),P(this,H,Wl).call(this)},nf=function(t){const e=Number(t.day);this.state.day=Number.isFinite(e)&&e>=1?Math.min(3650,Math.floor(e)):1;const i=Number(t.elapsed);this.state.elapsed=Number.isFinite(i)?Math.max(0,Math.min(ye-.01,i)):60,this.state.discovered=Array.isArray(t.discovered)?t.discovered.filter(l=>typeof l=="string"):[];const n=t.settings&&typeof t.settings=="object"?t.settings:{};this.state.settings={muted:!!n.muted,timeScale:Mu.includes(Number(n.timeScale))?Number(n.timeScale):1,fps30:!!n.fps30};const r=Number(t.player&&t.player.x),a=Number(t.player&&t.player.z);Number.isFinite(r)&&Number.isFinite(a)&&this.world.terrain.isWalkable(r,a)?this.player.teleport(r,a):this.player.teleport(Un.x,Un.z);const o=Number(t.player&&t.player.yaw);Number.isFinite(o)&&this.player.setYaw(o);for(const l of this.dittos)l.discovered=this.state.discovered.includes(l.id);this.progress.load(t),this.gathering&&this.gathering.applySaved(t.nodes||{}),P(this,H,Wl).call(this),this.progress.rollQuests(this.state.day);for(const l of this.cats)l.setFollow(this.progress.cat(l.id).follow);this.fishing&&this.fishing.cancel()},Wl=function(){for(const t of Gi){const e=!!this.progress.building(t.id).done;this.world.scenery.setBuilt(t.id,e),this.landmarkLabels&&this.landmarkLabels.setDone(t.id,e)}},sf=function(){const t=this.player.position;this.camera.position.set(t.x+Ui.offset.x,t.y+Ui.offset.y,t.z+Ui.offset.z),this.lookAt.set(t.x,t.y+Ui.lookHeight,t.z),this.camera.lookAt(this.lookAt)},rf=function(){this.last=performance.now();const t=e=>{this.rafId=requestAnimationFrame(t);let i=(e-this.last)/1e3;if(this.last=e,(!Number.isFinite(i)||i<=0)&&(i=1/60),i=Math.min(i,.05),this.state.settings.fps30){if(this.acc30+=i,this.acc30<1/32)return;i=Math.min(this.acc30,.06),this.acc30=0}P(this,H,af).call(this,i)};this.rafId=requestAnimationFrame(t)},af=function(t){const e=this.mode==="play"&&!this.paused&&!this.modal.isOpen&&!document.hidden,i=e?t*this.state.settings.timeScale:0;if(e&&(this.state.elapsed+=t*this.state.settings.timeScale,this.state.elapsed>=ye)){this.state.elapsed-=ye,this.state.day+=1,this.world.setWeather(Ro(this.state.day));const r=this.progress.rollQuests(this.state.day);this.hud.toast(r?`Day ${this.state.day} — 새로운 하루 · 의뢰 2건이 새로 왔어요 📋`:`Day ${this.state.day} — 새로운 하루가 시작됐어요`,3e3)}e&&this.progress.tickBuff(t)&&this.hud.toast("✨ 황금 버프가 끝났어요",2e3),this.player.speedScale=this.progress.buffActive&&this.progress.buff.kind==="golden"?Da.speed:1;const n=P(this,H,cf).call(this,e);this.player.update(t,n,this.world.terrain,this.camera);for(const r of this.cats)r.update(t,this.camera,this.player.position,e);for(const r of this.dittos)r.update(t,this.player.position,this.camera);this.gathering&&this.gathering.update(t,i,this.player.position,e),this.fishing&&e&&this.fishing.update(t,this.player.position),this.fx&&this.fx.update(t,this.camera);for(const r of this.spriteMaterials)r.color.copy(this.world.spriteLight);if(this.mode==="title"?P(this,H,Xl).call(this,t):P(this,H,lf).call(this,t),this.world.update(t,this.state.elapsed,this.camera,this.player.position),this.landmarkLabels.update(this.camera,this.mode==="play"),this.mode==="play"&&(P(this,H,hf).call(this),this.hudAcc+=t,this.hudAcc>.14&&(this.hudAcc=0,P(this,H,ie).call(this))),e){this.autosaveAcc+=t;const r=this.state.settings.timeScale>1?Math.max(2,Ve.intervalSeconds):Ve.intervalSeconds;this.autosaveAcc>=r&&(this.autosaveAcc=0,this.save())}this.contextLost||(this.renderer.info.reset(),this.post.render()),P(this,H,of).call(this,t)},of=function(t){if(this.frames+=1,this.fpsAcc+=t,this.fpsAcc>=.5){this.fps=Math.round(this.frames/this.fpsAcc);const e=this.renderer.info.render,i=this.post?this.post.sceneStats:e;this.stats.fps=this.fps,this.stats.calls=e.calls,this.stats.triangles=e.triangles,this.stats.sceneCalls=i.calls,this.stats.sceneTriangles=i.triangles,this.frames=0,this.fpsAcc=0}},Xl=function(t){this.titleAngle+=t*.09;const e=40,i=Math.cos(this.titleAngle)*e,n=Math.sin(this.titleAngle)*e,r=16+Math.sin(this.titleAngle*.8)*.9;this.camera.position.set(i,r,n),this.camera.lookAt(0,1,0)},lf=function(t){const e=this.player.position,i=this.tmpA.set(e.x+Ui.offset.x,e.y+Ui.offset.y,e.z+Ui.offset.z),n=1-Math.exp(-6.5*t);this.camera.position.lerp(i,n);const r=this.world.terrain.sampleHeight(this.camera.position.x,this.camera.position.z),a=Math.max(r,0)+1.3;this.camera.position.y<a&&(this.camera.position.y=a);const o=this.tmpB.set(e.x,e.y+Ui.lookHeight,e.z);this.lookAt.lerp(o,Math.min(1,t*9)),this.camera.lookAt(this.lookAt)},cf=function(t){if(!t)return{x:0,z:0};const e=this.hud.joystick.vector;let i=e.x,n=e.y,r=0,a=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(a-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(r-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(r+=1);const o=Math.hypot(r,a);return o>0&&(r/=o,a/=o,Math.hypot(r,a)>Math.hypot(i,n)&&(i=r,n=a)),{x:i,z:n}},hf=function(){let t=null,e=1/0;const i=this.player.position;this.fishTarget=null;for(const l of this.dittos){const c=l.distanceTo(i);l.setNear(c<3.8),c<=vn.dittoRange&&c<e&&(t=l,e=c)}for(const l of this.cats){const c=l.distanceTo(i);c<=vn.catRange&&c<e&&(t=l,e=c)}const n=this.gathering.nearest(i,vn.nodeRange);if(n){const l=Math.hypot(n.x-i.x,n.z-i.z);l<e&&(t=n,e=l)}const r=P(this,H,uf).call(this,i,vn.siteRange);if(r){const l=Math.hypot(r.x-i.x,r.z-i.z);l<e&&(t=r,e=l)}const a=Ue.spot,o=Math.hypot(a.x-i.x,a.z-i.z);o<=a.range&&(this.fishTarget={kind:"fish",id:"dock_fish",x:a.x,z:a.z,built:!!this.progress.building("dock").done},o<e&&(t=this.fishTarget,e=o)),this.target=t},uf=function(t,e){let i=null,n=e;for(const r of this.world.scenery.sites){const a=Math.hypot(r.x-t.x,r.z-t.z);a<n&&(i=r,n=a)}return i},$l=function(t){t.id==="workshop"?P(this,H,Vt).call(this,this.panels.workshopMenu()):t.id==="vending"&&this.progress.building("vending").done?this.openVending():P(this,H,Vt).call(this,this.panels.build(t.id))},ql=function(t){t.kind==="ditto"?P(this,H,df).call(this,t):t.kind==="cat"&&this.openCat(t.id)},df=function(t){t.interact(),this.state.discovered.includes(t.id)?this.hud.toast(`${t.name} — "·‿·" 이미 도감에 있어요`,2e3):(t.markDiscovered(),this.state.discovered.push(t.id),this.hud.toast(`도감 등록! ${t.name} ·‿· (${this.state.discovered.length}/${Bn.length})`,3200),this.save())},dS=function(t){t.pet(),this.hud.toast(`${t.name}가 기분 좋아 보여요 ♥`,1800)},ff=function(t){if(this.mode!=="play"||this.modal.isOpen)return;if(this.fishing&&this.fishing.active){this.fishing.reel(),P(this,H,ie).call(this);return}if(performance.now()-this.tap.t>520||Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>14)return;const e=new At(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight*2-1));this.raycaster.setFromCamera(e,this.camera);const i=[...this.dittos.map(h=>h.hitMesh),...this.cats.map(h=>h.body),...this.nodeMeshes,...this.siteMeshes,...this.drops.rayTargets()],n=this.raycaster.intersectObjects(i,!0);if(!n.length)return;let r=n[0].object,a=null;for(;r&&!a;){const h=r.userData||{};h.drop?a={kind:"drop",drop:h.drop}:h.node?a={kind:"node",node:h.node}:h.site?a={kind:"site",site:h.site}:h.actor&&(a={kind:"actor",actor:h.actor}),r=r.parent}if(!a)return;const o=this.player.position,l=(h,u)=>Math.hypot(h-o.x,u-o.z);if(a.kind==="drop"){if(l(a.drop.x,a.drop.z)>vn.nodeRange+1.6){this.hud.toast("조금 더 가까이 가서 주울까요?",1600);return}this.gathering.pickup(a.drop)&&this.drops.remove(a.drop),P(this,H,ie).call(this);return}if(a.kind==="node"){if(l(a.node.x,a.node.z)>vn.nodeRange+.9){this.hud.toast("조금 더 가까이 가서 두드려 볼까요?",1600);return}this.gathering.hit(a.node),P(this,H,ie).call(this);return}if(a.kind==="site"){if(l(a.site.x,a.site.z)>vn.siteRange+1.6){this.hud.toast("조금 더 가까이 가서 살펴볼까요?",1600);return}P(this,H,$l).call(this,a.site);return}const c=a.actor;if(c.distanceTo(o)>vn.tapRange){this.hud.toast("조금 더 가까이 가서 볼까요?",1600);return}P(this,H,ql).call(this,c)},ie=function(){const t=pa(this.state.elapsed),e=this.world.weather;if(this.hud.setTime({icon:t.icon,label:t.label,weatherIcon:e.icon,weatherLabel:e.label,day:this.state.day,clock:jh(this.state.elapsed),speed:this.state.settings.timeScale}),this.hud.setStamina(this.progress.stamina,Ze.max),this.hud.setMail(P(this,H,pf).call(this)),this.hud.setBag(this.progress.inventory.usedSlots(),qe.slots),this.hud.setCoins(this.progress.coins),this.hud.setQuests(this.progress.claimableQuests),this.hud.setBuff(this.progress.buffActive?`✨ ${Math.ceil(this.progress.buff.left)}s`:null),this.fishing&&this.fishing.active){const n=this.fishing.state;n==="bite"?this.hud.setAction({active:!0,icon:"🎣",label:"입질! 탭!"}):n==="cast"||n==="wait"?this.hud.setAction({active:!0,icon:"🎣",label:"회수하기"}):this.hud.setAction({active:!1,icon:"🎣",label:"낚시 마무리"});return}const i=this.target;if(i&&i.kind==="ditto")this.hud.setAction({active:!0,icon:i.discovered?"👀":"🔍",label:i.discovered?"다시 보기":"살펴보기"});else if(i&&i.kind==="cat")this.hud.setAction({active:!0,icon:"🐾",label:"돌보기"});else if(i&&i.kind==="fish")this.hud.setAction(i.built?{active:!0,icon:"🎣",label:"낚시하기"}:{active:!0,icon:"⚓",label:"부두 복구 필요"});else if(i&&i.isNode){const n=Ha[i.kind];this.hud.setAction({active:!0,icon:n.icon,label:`${n.verb} ${i.hitsLeft}/${i.hitsNeeded}`})}else if(i&&i.kind==="site"){const n=!!this.progress.building(i.id).done;this.hud.setAction({active:!0,icon:i.id==="workshop"?"🔨":i.id==="vending"&&n?"🥤":i.icon,label:i.id==="workshop"?"공방 열기":i.id==="vending"&&n?"자판기 열기":"복구 보기"})}else this.hud.setAction({active:!1,icon:"✋",label:"둘러보기"})},pf=function(){let t=0;for(const e of La){const i=!this.progress.isRead(e.id),n=!!e.gift&&!this.progress.isClaimed(e.id);(i||n)&&(t+=1)}return t},Vt=function(t){this.paused=!0,this.hud.joystick.reset();const e=t.onClose;this.modal.open({...t,onClose:()=>{this.paused=!1,e&&e()}})},mf=function(t,e){const i=this.atlases.get(e.set);if(!i)return;const n=i.cols,r=i.rows;t.style.backgroundImage=`url("${new URL(`sprites/${e.set}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n*100}% ${r*100}%`,t.style.backgroundPosition=`${(e.col-1)/Math.max(1,n-1)*100}% ${(e.row-1)/Math.max(1,r-1)*100}%`},Qs=function(t,e){const i=this.progress.gainExp(t,e);return i.rankedUp&&P(this,H,Yl).call(this,t,i.rank),P(this,H,ie).call(this),i},Yl=function(t,e){const i=this.progress.skills.row(t);this.audio.sfxFanfare(),this.hud.toast(`🌱 ${i.name} 랭크 업! ${e||i.rank}`,2800);const n=this.player.position;this.fx&&this.fx.float(`${i.icon} ${e||i.rank}`,n.x,n.y+1.9,n.z,"#b2698f")},js=function(t,e=1){const i=this.progress.questEvent(t,e);return i.length&&(this.audio.sfxCoin(),this.hud.toast(`📋 의뢰 달성 — ${i.map(n=>n.label).join(" · ")} · 우체통에서 보상 받기`,3e3),P(this,H,ie).call(this)),i},Kl=function(t){this.modal.close();const e=this.fishing.start({bait:t});if(!e.ok){this.audio.sfxDeny();const i=e.reason==="stamina"?"기력이 부족해요 — 열매나 요리로 채워 주세요 🍓":e.reason==="dock"?"부두를 먼저 복구해야 해요 ⚓":e.reason==="no-bait"?"별빛 미끼가 없어요":"지금은 낚시할 수 없어요";this.hud.toast(i,2200);return}this.player.setYaw(0),e.bait&&this.hud.toast("별빛 미끼를 달았어요 — 희귀한 손님이 올지도 🪱",2e3),P(this,H,ie).call(this)},Ma=function(t){return this.cats.find(e=>e.id===t)||null},Zl=function(t,e,i){const n=i.row.level;this.fx&&this.fx.burst(e.position.x,e.position.y+e.height,e.position.z,"#ffb3d1",12,{spread:.9,up:1.6}),i.levelUp?(this.hud.toast(`${t.name} 호감도 Lv.${n}! ${Ge.dialogue[t.id][n-1]}`,3400),P(this,H,gf).call(this,t.id,n),n===Ge.followLevel&&setTimeout(()=>this.hud.toast(`${t.name}가 이제 따라와도 된대요 — 돌보기에서 [따라오기] 🐾`,3e3),900)):Math.random()<.45&&this.hud.toast(Ge.dialogue[t.id][n-1],1900),this.save(),P(this,H,ie).call(this),this.modal.isOpen&&P(this,H,Vt).call(this,this.life.cat(t.id))},gf=function(t,e){const i=Ge.gifts[e];if(!i)return;const n=this.progress.cat(t);if(n.gifts.includes(e))return;n.gifts.push(e);let r=0;for(const[l,c]of Object.entries(i)){const h=this.progress.inventory.add(l,c);h>0&&(this.progress.inventory.storage[l]=this.progress.inventory.stored(l)+h,r+=h)}this.audio.sfxRare();const a=Object.entries(i).map(([l,c])=>`${nn(l)} ${en(l)} ${c}`).join(" · "),o=vi.find(l=>l.id===t);this.hud.toast(`🎁 ${o?o.name:t}의 보답 선물 — ${a}${r?` (${r}개는 창고로)`:""}`,3200)};const fS=document.getElementById("scene"),pS=document.getElementById("ui"),tr=new uS(fS,pS);window.__metamong={game:tr,get audio(){return tr.audio},life(){const s=tr,t=s.progress.inventory,e=s.progress;return{stamina:Math.round(e.stamina*10)/10,bagSlots:t.usedSlots(),bag:t.toJSON().bag,storage:{...t.storage},buildings:JSON.parse(JSON.stringify(e.buildings)),mailbox:{read:[...e.mailbox.read],claimed:[...e.mailbox.claimed]},harvested:s.gathering?Object.keys(s.gathering.toJSON()).length:0,drops:s.drops?s.drops.items.map(i=>`${i.itemId}x${i.count}`):[],coins:e.coins,skills:e.skills.toJSON(),skillRows:e.skills.rows().map(i=>({id:i.id,rank:i.rank,level:i.level,exp:i.exp,pct:i.pct})),title:e.skills.title(),fish:{...e.fish},fishKinds:e.fishKinds(),supplies:{...e.supplies},tools:e.tools,cats:Object.fromEntries(Object.keys(e.cats).map(i=>[i,{...e.catRow(i),follow:!!e.cat(i).follow}])),cooked:{...e.cooked},quests:{day:e.quests.day,list:e.questRows()},claimableQuests:e.claimableQuests,buff:{...e.buff},fishingStats:{...e.fishing},fishing:s.fishing?{state:s.fishing.state,active:s.fishing.active,baitUsed:!!s.fishing.baitUsed,last:s.fishing.lastResult?{id:s.fishing.lastResult.fish.id,size:s.fishing.lastResult.size}:null}:null}},stats(){const s=tr;return{mode:s.mode,day:s.state.day,elapsed:Math.round(s.state.elapsed*100)/100,phase:pa(s.state.elapsed).id,paused:s.paused,modalOpen:!!(s.modal&&s.modal.isOpen),contextLost:s.contextLost,fps:s.stats.fps,drawCalls:s.stats.calls,triangles:s.stats.triangles,sceneDrawCalls:s.stats.sceneCalls,sceneTriangles:s.stats.sceneTriangles,discovered:[...s.state.discovered],saveMode:s.saveStore.mode,hasSave:s.hasSave,stamina:Math.round(s.progress.stamina*10)/10,bagSlots:s.progress.inventory.usedSlots(),coins:s.progress.coins,quests:s.progress.claimableQuests,fishing:s.fishing?s.fishing.state:"idle",settings:{...s.state.settings},player:s.player?{x:+s.player.position.x.toFixed(2),y:+s.player.position.y.toFixed(2),z:+s.player.position.z.toFixed(2),yaw:+s.player.yaw.toFixed(3),facing:s.player.facing,flipX:!!s.player.flip,frame:s.player.frameName}:null}}};tr.start().catch(s=>{console.error("게임 시작 실패",s);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#fff6fa;color:#6b5878;font-family:system-ui,sans-serif;font-size:14px;text-align:center;padding:24px;z-index:999;",t.textContent="섬을 여는 중 문제가 생겼어요. 새로고침 해 주세요: "+String(s&&s.message?s.message:s),document.body.appendChild(t)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(new URL("sw.js",document.baseURI)).catch(()=>{})});
