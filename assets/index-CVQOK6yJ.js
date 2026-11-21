var gd=a=>{throw TypeError(a)};var i0=(a,t,e)=>t.has(a)||gd("Cannot "+e);var Re=(a,t,e)=>t.has(a)?gd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e);var _=(a,t,e)=>(i0(a,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="187",n0=0,vd=1,s0=2,tr=1,a0=2,Wa=3,is=0,ci=1,Bi=2,ys=0,er=1,ns=2,xd=3,_d=4,r0=5,Zs=100,o0=101,l0=102,c0=103,h0=104,d0=200,f0=201,u0=202,p0=203,fu=204,uu=205,m0=206,g0=207,v0=208,x0=209,_0=210,b0=211,y0=212,M0=213,S0=214,sc=0,ac=1,rc=2,ar=3,oc=4,lc=5,cc=6,hc=7,pu=0,w0=1,E0=2,Bn=0,wh=1,Eh=2,Th=3,Ah=4,Rh=5,Ch=6,Yo=7,mu=300,la=301,rr=302,ll=303,cl=304,or=1e3,Hi=1001,dc=1002,ue=1003,T0=1004,_r=1005,ti=1006,hl=1007,On=1008,Ci=1009,gu=1010,vu=1011,lr=1012,Ph=1013,wn=1014,an=1015,_i=1016,Lh=1017,Dh=1018,ca=1020,xu=35902,_u=35899,bu=1021,yu=1022,rn=1023,ss=1026,es=1027,Ih=1028,Nh=1029,Ms=1030,kh=1031,Uh=1033,ro=33776,oo=33777,lo=33778,co=33779,fc=35840,uc=35841,pc=35842,mc=35843,gc=36196,vc=37492,xc=37496,_c=37488,bc=37489,Lo=37490,yc=37491,Mc=37808,Sc=37809,wc=37810,Ec=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Ic=37819,Nc=37820,kc=37821,Uc=36492,Fc=36494,Oc=36495,zc=36283,Bc=36284,Do=36285,Gc=36286,A0=3200,Hc=0,R0=1,jn="",be="srgb",Io="srgb-linear",No="linear",ce="srgb",dl=7680,C0=519,P0=512,L0=513,D0=514,Mu=515,I0=516,N0=517,Su=518,wu=519,Eu=35044,bd="300 es",on=2e3,cr=2001;function k0(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function hr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function U0(){const a=hr("canvas");return a.style.display="block",a}const yd={};function ko(...a){const t="THREE."+a.shift();console.log(t,...a)}function Tu(a){const t=a[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=a[1];e&&e.isStackTrace?a[0]+=" "+e.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ft(...a){a=Tu(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...a)}}function ae(...a){a=Tu(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...a)}}function ho(...a){const t=a.join(" ");t in yd||(yd[t]=!0,Ft(...a))}function F0(a,t,e){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const O0={[sc]:sc,[rc]:cc,[oc]:oc,[ar]:lc,[ac]:ac,[cc]:rc,[hc]:hc,[lc]:ar};class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,Vc=180/Math.PI;function Ts(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[a&255]+si[a>>8&255]+si[a>>16&255]+si[a>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function Qt(a,t,e){return Math.max(t,Math.min(e,a))}function z0(a,t){return(a%t+t)%t}function ul(a,t,e){return(1-e)*a+e*t}function B0(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ko(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Au(a,t){if(t.constructor===Float32Array)return a;const e=Ko(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/e,-1)}function Ru(a,t){if(t.constructor===Float32Array)return a;const e=Ko(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*e)}const ed=class ed{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ed.prototype.isVector2=!0;let At=ed;class As{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],p=s[r+0],f=s[r+1],g=s[r+2],y=s[r+3];if(d!==y||l!==p||c!==f||h!==g){let m=l*p+c*f+h*g+d*y;m<0&&(p=-p,f=-f,g=-g,y=-y,m=-m);let v=1-o;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);v=Math.sin(v*b)/T,o=Math.sin(o*b)/T,l=l*v+p*o,c=c*v+f*o,h=h*v+g*o,d=d*v+y*o}else{l=l*v+p*o,c=c*v+f*o,h=h*v+g*o,d=d*v+y*o;const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[r],p=s[r+1],f=s[r+2],g=s[r+3];return t[e]=o*g+h*d+l*f-c*p,t[e+1]=l*g+h*p+c*d-o*f,t[e+2]=c*g+h*f+o*p-l*d,t[e+3]=h*g-o*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),p=l(i/2),f=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"YZX":this._x=p*h*d+c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d-p*f*g;break;case"XZY":this._x=p*h*d-c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d+p*f*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=i+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+n*c-s*l,this._y=n*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const id=class id{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Md.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),h=2*(o*e-s*n),d=2*(s*i-r*e);return this.x=e+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};id.prototype.isVector3=!0;let k=id;const pl=new k,Md=new As,nd=class nd{constructor(t,e,i,n,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,l,c)}set(t,e,i,n,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],f=i[5],g=i[8],y=n[0],m=n[3],v=n[6],b=n[1],T=n[4],w=n[7],A=n[2],R=n[5],x=n[8];return s[0]=r*y+o*b+l*A,s[3]=r*m+o*T+l*R,s[6]=r*v+o*w+l*x,s[1]=c*y+h*b+d*A,s[4]=c*m+h*T+d*R,s[7]=c*v+h*w+d*x,s[2]=p*y+f*b+g*A,s[5]=p*m+f*T+g*R,s[8]=p*v+f*w+g*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*s*h+i*o*l+n*s*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,p=o*l-h*s,f=c*s-r*l,g=e*d+i*p+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*r)*y,t[3]=p*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(r*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(t,e)),this}rotate(t){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-t)),this}translate(t,e){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nd.prototype.isMatrix3=!0;let Gt=nd;const ml=new Gt,Sd=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G0(){const a={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ce&&(n.r=Gn(n.r),n.g=Gn(n.g),n.b=Gn(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(n.r=aa(n.r),n.g=aa(n.g),n.b=aa(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===jn?No:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Io]:{primaries:t,whitePoint:i,transfer:No,toXYZ:Sd,fromXYZ:wd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:Sd,fromXYZ:wd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),a}const ie=G0();function Gn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function aa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ls;class H0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ls===void 0&&(Ls=hr("canvas")),Ls.width=t.width,Ls.height=t.height;const n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Gn(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gn(e[i]/255)*255):e[i]=Gn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V0=0;class Fh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(gl(n[r].image)):s.push(gl(n[r]))}else s=gl(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function gl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?H0.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let W0=0;const vl=new k;class ei extends Es{constructor(t=ei.DEFAULT_IMAGE,e=ei.DEFAULT_MAPPING,i=Hi,n=Hi,s=ti,r=On,o=rn,l=Ci,c=ei.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ts(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=mu;ei.DEFAULT_ANISOTROPY=1;const sd=class sd{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],g=l[9],y=l[2],m=l[6],v=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,w=(f+1)/2,A=(v+1)/2,R=(h+p)/4,x=(d+y)/4,E=(g+m)/4;return T>w&&T>A?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=R/i,s=x/i):w>A?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=R/n,s=E/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=x/s,n=E/s),this.set(i,n,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(p-h)/b,this.w=Math.acos((c+f+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sd.prototype.isVector4=!0;let Ce=sd;class $0 extends Es{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];const n=i.count;for(let s=0;s<n;s++)this.textures[s]=new ei({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Fh(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends $0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cu extends ei{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ue,this.minFilter=ue,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class X0 extends ei{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ue,this.minFilter=ue,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Wo=class Wo{constructor(t,e,i,n,s,r,o,l,c,h,d,p,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,l,c,h,d,p,f,g,y,m)}set(t,e,i,n,s,r,o,l,c,h,d,p,f,g,y,m){const v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=n,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=p,v[3]=f,v[7]=g,v[11]=y,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wo().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Ds.setFromMatrixColumn(t,0).length(),s=1/Ds.setFromMatrixColumn(t,1).length(),r=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=r*h,f=r*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=p-y*c,e[9]=-o*l,e[2]=y-p*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*h,f=l*d,g=c*h,y=c*d;e[0]=p+y*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=y+p*o,e[10]=r*l}else if(t.order==="ZXY"){const p=l*h,f=l*d,g=c*h,y=c*d;e[0]=p-y*o,e[4]=-r*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=y-p*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const p=r*h,f=r*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+y,e[1]=l*d,e[5]=y*c+p,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,f=r*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-p*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=p-y*d}else if(t.order==="XZY"){const p=r*l,f=r*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+y,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q0,t,Y0)}lookAt(t,e,i){const n=this.elements;return Ti.subVectors(t,e),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Xn.crossVectors(i,Ti),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Xn.crossVectors(i,Ti)),Xn.normalize(),br.crossVectors(Ti,Xn),n[0]=Xn.x,n[4]=br.x,n[8]=Ti.x,n[1]=Xn.y,n[5]=br.y,n[9]=Ti.y,n[2]=Xn.z,n[6]=br.z,n[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],f=i[13],g=i[2],y=i[6],m=i[10],v=i[14],b=i[3],T=i[7],w=i[11],A=i[15],R=n[0],x=n[4],E=n[8],O=n[12],D=n[1],U=n[5],z=n[9],X=n[13],I=n[2],W=n[6],Z=n[10],V=n[14],nt=n[3],Y=n[7],et=n[11],it=n[15];return s[0]=r*R+o*D+l*I+c*nt,s[4]=r*x+o*U+l*W+c*Y,s[8]=r*E+o*z+l*Z+c*et,s[12]=r*O+o*X+l*V+c*it,s[1]=h*R+d*D+p*I+f*nt,s[5]=h*x+d*U+p*W+f*Y,s[9]=h*E+d*z+p*Z+f*et,s[13]=h*O+d*X+p*V+f*it,s[2]=g*R+y*D+m*I+v*nt,s[6]=g*x+y*U+m*W+v*Y,s[10]=g*E+y*z+m*Z+v*et,s[14]=g*O+y*X+m*V+v*it,s[3]=b*R+T*D+w*I+A*nt,s[7]=b*x+T*U+w*W+A*Y,s[11]=b*E+T*z+w*Z+A*et,s[15]=b*O+T*X+w*V+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],y=t[7],m=t[11],v=t[15],b=l*f-c*p,T=o*f-c*d,w=o*p-l*d,A=r*f-c*h,R=r*p-l*h,x=r*d-o*h;return e*(y*b-m*T+v*w)-i*(g*b-m*A+v*R)+n*(g*T-y*A+v*x)-s*(g*w-y*R+m*x)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-i*(s*h-o*l)+n*(s*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],y=t[13],m=t[14],v=t[15],b=e*o-i*r,T=e*l-n*r,w=e*c-s*r,A=i*l-n*o,R=i*c-s*o,x=n*c-s*l,E=h*y-d*g,O=h*m-p*g,D=h*v-f*g,U=d*m-p*y,z=d*v-f*y,X=p*v-f*m,I=b*X-T*z+w*U+A*D-R*O+x*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/I;return t[0]=(o*X-l*z+c*U)*W,t[1]=(n*z-i*X-s*U)*W,t[2]=(y*x-m*R+v*A)*W,t[3]=(p*R-d*x-f*A)*W,t[4]=(l*D-r*X-c*O)*W,t[5]=(e*X-n*D+s*O)*W,t[6]=(m*w-g*x-v*T)*W,t[7]=(h*x-p*w+f*T)*W,t[8]=(r*z-o*D+c*E)*W,t[9]=(i*D-e*z-s*E)*W,t[10]=(g*R-y*w+v*b)*W,t[11]=(d*w-h*R-f*b)*W,t[12]=(o*O-r*U-l*E)*W,t[13]=(e*U-i*O+n*E)*W,t[14]=(y*T-g*A-m*b)*W,t[15]=(h*A-d*T+p*b)*W,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,d=o+o,p=s*c,f=s*h,g=s*d,y=r*h,m=r*d,v=o*d,b=l*c,T=l*h,w=l*d,A=i.x,R=i.y,x=i.z;return n[0]=(1-(y+v))*A,n[1]=(f+w)*A,n[2]=(g-T)*A,n[3]=0,n[4]=(f-w)*R,n[5]=(1-(p+v))*R,n[6]=(m+b)*R,n[7]=0,n[8]=(g+T)*x,n[9]=(m-b)*x,n[10]=(1-(p+y))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let r=Ds.set(n[0],n[1],n[2]).length();const o=Ds.set(n[4],n[5],n[6]).length(),l=Ds.set(n[8],n[9],n[10]).length();s<0&&(r=-r),Ki.copy(this);const c=1/r,h=1/o,d=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=h,Ki.elements[5]*=h,Ki.elements[6]*=h,Ki.elements[8]*=d,Ki.elements[9]*=d,Ki.elements[10]*=d,e.setFromRotationMatrix(Ki),i.x=r,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,r,o=on,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(i-n),p=(e+t)/(e-t),f=(i+n)/(i-n);let g,y;if(l)g=s/(r-s),y=r*s/(r-s);else if(o===on)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===cr)g=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=on,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),p=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,y;if(l)g=1/(r-s),y=r/(r-s);else if(o===on)g=-2/(r-s),y=-(r+s)/(r-s);else if(o===cr)g=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Wo.prototype.isMatrix4=!0;let re=Wo;const Ds=new k,Ki=new re,q0=new k(0,0,0),Y0=new k(1,1,1),Xn=new k,br=new k,Ti=new k,Ed=new re,Td=new As;class Ss{constructor(t=0,e=0,i=0,n=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],p=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ed,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Td.setFromEuler(this),this.setFromQuaternion(Td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K0=0;const Ad=new k,Is=new As,An=new re,yr=new k,wa=new k,Z0=new k,J0=new As,Rd=new k(1,0,0),Cd=new k(0,1,0),Pd=new k(0,0,1),Ld={type:"added"},Q0={type:"removed"},Ns={type:"childadded",child:null},xl={type:"childremoved",child:null};class Ue extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new k,e=new Ss,i=new As,n=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new re},normalMatrix:{value:new Gt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Rd,t)}rotateY(t){return this.rotateOnAxis(Cd,t)}rotateZ(t){return this.rotateOnAxis(Pd,t)}translateOnAxis(t,e){return Ad.copy(t).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rd,t)}translateY(t){return this.translateOnAxis(Cd,t)}translateZ(t){return this.translateOnAxis(Pd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(wa,yr,this.up):An.lookAt(yr,wa,this.up),this.quaternion.setFromRotationMatrix(An),n&&(An.extractRotation(n.matrixWorld),Is.setFromRotationMatrix(An),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ld),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Q0),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ld),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,t,Z0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,J0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new k(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ge extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),v=this._getHandJoint(c,y);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function bl(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=z0(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=bl(r,s,t+1/3),this.g=bl(r,s,t),this.b=bl(r,s,t-1/3)}return ie.colorSpaceToWorking(this,n),this}setStyle(t,e=be){function i(s){s!==void 0&&parseFloat(s)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ie.workingToColorSpace(ai.copy(this),t),Math.round(Qt(ai.r*255,0,255))*65536+Math.round(Qt(ai.g*255,0,255))*256+Math.round(Qt(ai.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(ai.copy(this),e);const i=ai.r,n=ai.g,s=ai.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(ai.copy(this),e),t.r=ai.r,t.g=ai.g,t.b=ai.b,t}getStyle(t=be){ie.workingToColorSpace(ai.copy(this),t);const e=ai.r,i=ai.g,n=ai.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Mr);const i=ul(qn.h,Mr.h,e),n=ul(qn.s,Mr.s,e),s=ul(qn.l,Mr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new ut;ut.NAMES=Pu;class zh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new zh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tg extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Zi=new k,Rn=new k,yl=new k,Cn=new k,ks=new k,Us=new k,Dd=new k,Ml=new k,Sl=new k,wl=new k,El=new Ce,Tl=new Ce,Al=new Ce;class Gi{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Zi.subVectors(t,e),n.cross(Zi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Zi.subVectors(n,e),Rn.subVectors(i,e),yl.subVectors(t,e);const r=Zi.dot(Zi),o=Zi.dot(Rn),l=Zi.dot(yl),c=Rn.dot(Rn),h=Rn.dot(yl),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-o*h)*p,g=(r*h-o*l)*p;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,n,s,r,o,l){return this.getBarycoord(t,e,i,n,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,r){return El.setScalar(0),Tl.setScalar(0),Al.setScalar(0),El.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,i),Al.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(El,s.x),r.addScaledVector(Tl,s.y),r.addScaledVector(Al,s.z),r}static isFrontFacing(t,e,i,n){return Zi.subVectors(i,e),Rn.subVectors(t,e),Zi.cross(Rn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Zi.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Gi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let r,o;ks.subVectors(n,i),Us.subVectors(s,i),Ml.subVectors(t,i);const l=ks.dot(Ml),c=Us.dot(Ml);if(l<=0&&c<=0)return e.copy(i);Sl.subVectors(t,n);const h=ks.dot(Sl),d=Us.dot(Sl);if(h>=0&&d<=h)return e.copy(n);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),e.copy(i).addScaledVector(ks,r);wl.subVectors(t,s);const f=ks.dot(wl),g=Us.dot(wl);if(g>=0&&f<=g)return e.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Us,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Dd.subVectors(s,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(Dd,o);const v=1/(m+y+p);return r=y*v,o=p*v,e.copy(i).addScaledVector(ks,r).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rs{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ji.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ji.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ji):Ji.fromBufferAttribute(s,r),Ji.applyMatrix4(t.matrixWorld),this.expandByPoint(Ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ea),wr.subVectors(this.max,Ea),Fs.subVectors(t.a,Ea),Os.subVectors(t.b,Ea),zs.subVectors(t.c,Ea),Yn.subVectors(Os,Fs),Kn.subVectors(zs,Os),hs.subVectors(Fs,zs);let e=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-hs.z,hs.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,hs.z,0,-hs.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-hs.y,hs.x,0];return!Rl(e,Fs,Os,zs,wr)||(e=[1,0,0,0,1,0,0,0,1],!Rl(e,Fs,Os,zs,wr))?!1:(Er.crossVectors(Yn,Kn),e=[Er.x,Er.y,Er.z],Rl(e,Fs,Os,zs,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new k,new k,new k,new k,new k,new k,new k,new k],Ji=new k,Sr=new Rs,Fs=new k,Os=new k,zs=new k,Yn=new k,Kn=new k,hs=new k,Ea=new k,wr=new k,Er=new k,ds=new k;function Rl(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){ds.fromArray(a,s);const o=n.x*Math.abs(ds.x)+n.y*Math.abs(ds.y)+n.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=i.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ne=new k,Tr=new At;let eg=0;class yi extends Es{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=an,this.version=0,this._normalizationScale=t!==void 0?Ko(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Au(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ru(t,this.array)}}class Lu extends yi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Du extends yi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends yi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const ig=new Rs,Ta=new k,Cl=new k;class Cs{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ig.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ta.subVectors(t,this.center);const e=Ta.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ta,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ta.copy(t.center).add(Cl)),this.expandByPoint(Ta.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ng=0;const Ui=new re,Pl=new Ue,Bs=new k,Ai=new Rs,Aa=new Rs,qe=new k;class Fe extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k0(t)?Du:Lu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Gt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,e,i){return Ui.makeTranslation(t,e,i),this.applyMatrix4(Ui),this}scale(t,e,i){return Ui.makeScale(t,e,i),this.applyMatrix4(Ui),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new xe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ai.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(Ai.min,Aa.min),Ai.expandByPoint(qe),qe.addVectors(Ai.max,Aa.max),Ai.expandByPoint(qe)):(Ai.expandByPoint(Aa.min),Ai.expandByPoint(Aa.max))}Ai.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)qe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(qe));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qe.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(t,c),qe.add(Bs)),n=Math.max(n,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new yi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new k,l[O]=new k;const h=new k,d=new k,p=new k,f=new At,g=new At,y=new At,m=new k,v=new k;function b(O,D,U){c[O]=c[D]=c[U]=1,h.fromBufferAttribute(i,O),d.fromBufferAttribute(i,D),p.fromBufferAttribute(i,U),f.fromBufferAttribute(s,O),g.fromBufferAttribute(s,D),y.fromBufferAttribute(s,U),d.sub(h),p.sub(h),g.sub(f),y.sub(f);const z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(z),v.copy(p).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(z),o[O].add(m),o[D].add(m),o[U].add(m),l[O].add(v),l[D].add(v),l[U].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,D=T.length;O<D;++O){const U=T[O],z=U.start,X=U.count;for(let I=z,W=z+X;I<W;I+=3)b(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const w=new k,A=new k,R=new k,x=new k;function E(O){R.fromBufferAttribute(n,O),x.copy(R);const D=o[O];w.copy(D),w.sub(R.multiplyScalar(R.dot(D))).normalize(),A.crossVectors(x,D);const z=A.dot(l[O])<0?-1:1;r.setXYZW(O,w.x,w.y,w.z,z)}for(let O=0,D=i.count;O<D;++O)c[O]&&E(O);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new yi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const n=new k,s=new k,r=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),y=t.getX(p+1),m=t.getX(p+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),h.subVectors(r,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)n.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,s),d.subVectors(n,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let v=0;v<h;v++)p[g++]=c[f++]}return new yi(p,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=t(p,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=Ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Id(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Id(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Id(a){return a.buffer._uuid===void 0&&(a.buffer._uuid=Ts()),a.byteOffset===0&&a.byteLength===a.buffer.byteLength?a.buffer._uuid:a.buffer._uuid+":"+a.byteOffset+":"+a.byteLength}const ui=new k;class Uo{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Ko(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyMatrix4(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyNormalMatrix(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.transformDirection(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new yi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Au(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ru(t,this.data.array)}}const Ll=new k,ag=new k,rg=new Gt;class Qn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ll.subVectors(i,e).cross(ag.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||rg.getNormalMatrix(t),n=this.coplanarPoint(Ll).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let og=0;class rs extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=er,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=uu,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class je extends rs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gs;const Ra=new k,Hs=new k,Vs=new k,Ws=new At,Ca=new At,Iu=new re,Ar=new k,Pa=new k,Rr=new k,Nd=new At,Dl=new At,kd=new At;class li extends Ue{constructor(t=new je){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sg(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Uo(i,3,0,!1)),Gs.setAttribute("uv",new Uo(i,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Iu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const r=this.center;Cr(Ar.set(-.5,-.5,0),Vs,r,Hs,n,s),Cr(Pa.set(.5,-.5,0),Vs,r,Hs,n,s),Cr(Rr.set(.5,.5,0),Vs,r,Hs,n,s),Nd.set(0,0),Dl.set(1,0),kd.set(1,1);let o=t.ray.intersectTriangle(Ar,Pa,Rr,!1,Ra);if(o===null&&(Cr(Pa.set(-.5,.5,0),Vs,r,Hs,n,s),Dl.set(0,1),o=t.ray.intersectTriangle(Ar,Rr,Pa,!1,Ra),o===null))return;const l=t.ray.origin.distanceTo(Ra);l<t.near||l>t.far||e.push({distance:l,point:Ra.clone(),uv:Gi.getInterpolation(Ra,Ar,Pa,Rr,Nd,Dl,kd,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Cr(a,t,e,i,n,s){Ws.subVectors(a,e).addScalar(.5).multiply(i),n!==void 0?(Ca.x=s*Ws.x-n*Ws.y,Ca.y=n*Ws.x+s*Ws.y):Ca.copy(Ws),a.copy(t),a.x+=Ca.x,a.y+=Ca.y,a.applyMatrix4(Iu)}const Ln=new k,Il=new k,Pr=new k,Lr=new k;class Zo{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Il.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(Il);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Pr),o=Lr.dot(this.direction),l=-Lr.dot(Pr),c=Lr.lengthSq(),h=Math.abs(1-r*r);let d,p,f,g;if(h>0)if(d=r*l-o,p=r*o-l,g=s*h,d>=0)if(p>=-g)if(p<=g){const y=1/h;d*=y,p*=y,f=d*(d+r*p+2*o)+p*(r*d+p+2*l)+c}else p=s,d=Math.max(0,-(r*p+o)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(r*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-r*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(r*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=r>0?-s:s,d=Math.max(0,-(r*p+o)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Il).addScaledVector(Pr,p),f}intersectSphere(t,e){if(t.radius<0)return null;Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),n=Ln.dot(Ln)-i*i,s=t.radius*t.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,n=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,n=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,n,s){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,p=t.y-r.y,f=t.z-r.z,g=e.x-r.x,y=e.y-r.y,m=e.z-r.z,v=i.x-r.x,b=i.y-r.y,T=i.z-r.z,w=Math.abs(l),A=Math.abs(c),R=Math.abs(h);let x,E,O,D,U,z,X,I,W,Z,V,nt;if(w>=A&&w>=R?(O=l,z=d,W=g,nt=v,l>=0?(x=c,E=h,D=p,U=f,X=y,I=m,Z=b,V=T):(x=h,E=c,D=f,U=p,X=m,I=y,Z=T,V=b)):A>=R?(O=c,z=p,W=y,nt=b,c>=0?(x=h,E=l,D=f,U=d,X=m,I=g,Z=T,V=v):(x=l,E=h,D=d,U=f,X=g,I=m,Z=v,V=T)):(O=h,z=f,W=m,nt=T,h>=0?(x=l,E=c,D=d,U=p,X=g,I=y,Z=v,V=b):(x=c,E=l,D=p,U=d,X=y,I=g,Z=b,V=v)),O===0)return null;const Y=x/O,et=E/O,it=1/O,Rt=D-Y*z,Ht=U-et*z,Q=X-Y*W,_t=I-et*W,wt=Z-Y*nt,Nt=V-et*nt,bt=wt*_t-Nt*Q,Wt=Rt*Nt-Ht*wt,De=Q*Ht-_t*Rt;if(n){if(bt<0||Wt<0||De<0)return null}else if((bt<0||Wt<0||De<0)&&(bt>0||Wt>0||De>0))return null;const Ut=bt+Wt+De;if(Ut===0)return null;const he=it*(bt*z+Wt*W+De*nt);return(Ut>0?he<0:he>0)?null:this.at(he/Ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ud=new re,fs=new Zo,Dr=new Cs,Fd=new k,Ir=new k,Nr=new k,kr=new k,Nl=new k,Ur=new k,Od=new k,Fr=new k;class qt extends Ue{constructor(t=new Fe,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Nl.fromBufferAttribute(d,t),r?Ur.addScaledVector(Nl,h):Ur.addScaledVector(Nl.sub(e),h))}e.add(Ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),fs.copy(t.ray).recast(t.near),!(Dr.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Dr,Fd)===null||fs.origin.distanceToSquared(Fd)>(t.far-t.near)**2))&&(Ud.copy(s).invert(),fs.copy(t.ray).applyMatrix4(Ud),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let n;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,y=p.length;g<y;g++){const m=p[g],v=r[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,A=T;w<A;w+=3){const R=o.getX(w),x=o.getX(w+1),E=o.getX(w+2);n=Or(this,v,t,i,c,h,d,R,x,E),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,v=y;m<v;m+=3){const b=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);n=Or(this,r,t,i,c,h,d,b,T,w),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=p.length;g<y;g++){const m=p[g],v=r[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,A=T;w<A;w+=3){const R=w,x=w+1,E=w+2;n=Or(this,v,t,i,c,h,d,R,x,E),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,v=y;m<v;m+=3){const b=m,T=m+1,w=m+2;n=Or(this,r,t,i,c,h,d,b,T,w),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function lg(a,t,e,i,n,s,r,o){let l;if(t.side===ci?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,t.side===is,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:a}}function Or(a,t,e,i,n,s,r,o,l,c){a.getVertexPosition(o,Ir),a.getVertexPosition(l,Nr),a.getVertexPosition(c,kr);const h=lg(a,t,e,i,Ir,Nr,kr,Od);if(h){const d=new k;Gi.getBarycoord(Od,Ir,Nr,kr,d),n&&(h.uv=Gi.getInterpolatedAttribute(n,o,l,c,d,new At)),s&&(h.uv1=Gi.getInterpolatedAttribute(s,o,l,c,d,new At)),r&&(h.normal=Gi.getInterpolatedAttribute(r,o,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new k,materialIndex:0};Gi.getNormal(Ir,Nr,kr,p.normal),h.face=p,h.barycoord=d}return h}class Bh extends ei{constructor(t=null,e=1,i=1,n,s,r,o,l,c=ue,h=ue,d,p){super(null,r,o,l,c,h,n,s,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zd extends yi{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $s=new re,Bd=new re,zr=[],Gd=new Rs,cg=new re,La=new qt,Da=new Cs;class hg extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,cg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Gd.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Gd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Da.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Da)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(i),t.ray.intersectsSphere(Da)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,$s),Bd.multiplyMatrices(i,$s),La.matrixWorld=Bd,La.raycast(t,zr);for(let r=0,o=zr.length;r<o;r++){const l=zr[r];l.instanceId=s,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(n*this.count),n,this.count,Ih,an));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const us=new Cs,dg=new At(.5,.5),Br=new k;class dr{constructor(t=new Qn,e=new Qn,i=new Qn,n=new Qn,s=new Qn,r=new Qn){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=on,i=!1){const n=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],p=s[6],f=s[7],g=s[8],y=s[9],m=s[10],v=s[11],b=s[12],T=s[13],w=s[14],A=s[15];if(n[0].setComponents(c-r,f-h,v-g,A-b).normalize(),n[1].setComponents(c+r,f+h,v+g,A+b).normalize(),n[2].setComponents(c+o,f+d,v+y,A+T).normalize(),n[3].setComponents(c-o,f-d,v-y,A-T).normalize(),i)n[4].setComponents(l,p,m,w).normalize(),n[5].setComponents(c-l,f-p,v-m,A-w).normalize();else if(n[4].setComponents(c-l,f-p,v-m,A-w).normalize(),e===on)n[5].setComponents(c+l,f+p,v+m,A+w).normalize();else if(e===cr)n[5].setComponents(l,p,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const e=dg.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Br.x=n.normal.x>0?t.max.x:t.min.x,Br.y=n.normal.y>0?t.max.y:t.min.y,Br.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Hd=new re;class Gh{constructor(){this.coordinateSystem=on,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const s=e[n];Hd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new dr),i[n].setFromProjectionMatrix(Hd,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new dr),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new Gh().copy(this)}}class Nu extends rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fo=new k,Oo=new k,Vd=new re,Ia=new Zo,Gr=new Cs,kl=new k,Wd=new k;class fg extends Ue{constructor(t=new Fe,e=new Nu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Fo.fromBufferAttribute(e,n-1),Oo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Fo.distanceTo(Oo);t.setAttribute("lineDistance",new xe(i,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(n),Gr.radius+=s,t.ray.intersectsSphere(Gr)===!1)return;Vd.copy(n).invert(),Ia.copy(t.ray).applyMatrix4(Vd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let y=f,m=g-1;y<m;y+=c){const v=h.getX(y),b=h.getX(y+1),T=Hr(this,t,Ia,l,v,b,y);T&&e.push(T)}if(this.isLineLoop){const y=h.getX(g-1),m=h.getX(f),v=Hr(this,t,Ia,l,y,m,g-1);v&&e.push(v)}}else{const f=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let y=f,m=g-1;y<m;y+=c){const v=Hr(this,t,Ia,l,y,y+1,y);v&&e.push(v)}if(this.isLineLoop){const y=Hr(this,t,Ia,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hr(a,t,e,i,n,s,r){const o=a.geometry.attributes.position;if(Fo.fromBufferAttribute(o,n),Oo.fromBufferAttribute(o,s),e.distanceSqToSegment(Fo,Oo,kl,Wd)>i)return;kl.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(kl);if(!(c<t.near||c>t.far))return{distance:c,point:Wd.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}class Hh extends rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $d=new re,Wc=new Zo,Vr=new Cs,Wr=new k;class ku extends Ue{constructor(t=new Fe,e=new Hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(n),Vr.radius+=s,t.ray.intersectsSphere(Vr)===!1)return;$d.copy(n).invert(),Wc.copy(t.ray).applyMatrix4($d);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=p,y=f;g<y;g++){const m=c.getX(g);Wr.fromBufferAttribute(d,m),Xd(Wr,m,l,n,t,e,this)}}else{const p=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=p,y=f;g<y;g++)Wr.fromBufferAttribute(d,g),Xd(Wr,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xd(a,t,e,i,n,s,r){const o=Wc.distanceSqToPoint(a);if(o<e){const l=new k;Wc.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Uu extends ei{constructor(t=[],e=la,i,n,s,r,o,l,c,h){super(t,e,i,n,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ln extends ei{constructor(t,e,i,n,s,r,o,l,c){super(t,e,i,n,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends ei{constructor(t,e,i=wn,n,s,r,o=ue,l=ue,c,h=ss,d=1){if(h!==ss&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,n,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Fu extends ha{constructor(t,e=wn,i=la,n,s,r=ue,o=ue,l,c=ss){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ou extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mi extends Fe{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function g(y,m,v,b,T,w,A,R,x,E,O){const D=w/x,U=A/E,z=w/2,X=A/2,I=R/2,W=x+1,Z=E+1;let V=0,nt=0;const Y=new k;for(let et=0;et<Z;et++){const it=et*U-X;for(let Rt=0;Rt<W;Rt++){const Ht=Rt*D-z;Y[y]=Ht*b,Y[m]=it*T,Y[v]=I,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[v]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Rt/x),d.push(1-et/E),V+=1}}for(let et=0;et<E;et++)for(let it=0;it<x;it++){const Rt=p+it+W*et,Ht=p+it+W*(et+1),Q=p+(it+1)+W*(et+1),_t=p+(it+1)+W*et;l.push(Rt,Ht,_t),l.push(Ht,Q,_t),nt+=6}o.addGroup(f,nt,O),f+=nt,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class zn extends Fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],r=[],o=[],l=[],c=new k,h=new At;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vh extends Fe{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],p=[],f=[];let g=0;const y=[],m=i/2;let v=0;b(),r===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(p,3)),this.setAttribute("uv",new xe(f,2));function b(){const w=new k,A=new k;let R=0;const x=(e-t)/i;for(let E=0;E<=s;E++){const O=[],D=E/s,U=D*(e-t)+t;for(let z=0;z<=n;z++){const X=z/n,I=X*l+o,W=Math.sin(I),Z=Math.cos(I);A.x=U*W,A.y=-D*i+m,A.z=U*Z,d.push(A.x,A.y,A.z),w.set(W,x,Z).normalize(),p.push(w.x,w.y,w.z),f.push(X,1-D),O.push(g++)}y.push(O)}for(let E=0;E<n;E++)for(let O=0;O<s;O++){const D=y[O][E],U=y[O+1][E],z=y[O+1][E+1],X=y[O][E+1];(t>0||O!==0)&&(h.push(D,U,X),R+=3),(e>0||O!==s-1)&&(h.push(U,z,X),R+=3)}c.addGroup(v,R,0),v+=R}function T(w){const A=g,R=new At,x=new k;let E=0;const O=w===!0?t:e,D=w===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,m*D,0),p.push(0,D,0),f.push(.5,.5),g++;const U=g;for(let z=0;z<=n;z++){const I=z/n*l+o,W=Math.cos(I),Z=Math.sin(I);x.x=O*Z,x.y=m*D,x.z=O*W,d.push(x.x,x.y,x.z),p.push(0,D,0),R.x=W*.5+.5,R.y=Z*.5*D+.5,f.push(R.x,R.y),g++}for(let z=0;z<n;z++){const X=A+z,I=U+z;w===!0?h.push(I,I+1,X):h.push(I+1,I,X),E+=3}c.addGroup(v,E,w===!0?1:2),v+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wh extends Vh{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Wh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ug{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(s-1);const h=i[n],p=i[n+1]-h,f=(r-h)/p;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const r=this.getPoint(n),o=this.getPoint(s),l=e||(r.isVector2?new At:new k);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new k,n=[],s=[],r=[],o=new k,l=new re;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new k)}s[0]=new k,r[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),p=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Qt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),r[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function $h(){let a=0,t=0,e=0,i=0;function n(s,r,o,l){a=s,t=o,e=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){n(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,d){let p=(r-s)/c-(o-s)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+d)+(l-o)/d;p*=h,f*=h,n(r,o,p,f)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+i*o}}}const qd=new k,Yd=new k,Ul=new $h,Fl=new $h,Ol=new $h;class zu extends ug{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new k){const i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Yd.subVectors(n[0],n[1]).add(n[0]),c=Yd);const d=n[o%s],p=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(qd.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=qd),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ul.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,y,m),Fl.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,y,m),Ol.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Fl.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),Ol.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return i.set(Ul.calc(l),Fl.calc(l),Ol.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new k().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ei extends Fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,p=e/l,f=[],g=[],y=[],m=[];for(let v=0;v<h;v++){const b=v*p-r;for(let T=0;T<c;T++){const w=T*d-s;g.push(w,-b,0),y.push(0,0,1),m.push(T/o),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let b=0;b<o;b++){const T=b+c*v,w=b+c*(v+1),A=b+1+c*(v+1),R=b+1+c*v;f.push(T,w,R),f.push(w,A,R)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xh extends Fe{constructor(t=.5,e=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const p=(e-t)/n,f=new k,g=new At;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){const v=s+m/i*r;f.x=d*Math.cos(v),f.y=d*Math.sin(v),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let y=0;y<n;y++){const m=y*(i+1);for(let v=0;v<i;v++){const b=v+m,T=b,w=b+i+1,A=b+i+2,R=b+1;o.push(T,w,R),o.push(w,A,R)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jo extends Fe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new k,p=new k,f=[],g=[],y=[],m=[];for(let v=0;v<=i;v++){const b=[],T=v/i,w=r+T*o,A=t*Math.cos(w),R=Math.sqrt(t*t-A*A);let x=0;v===0&&r===0?x=.5/e:v===i&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const O=E/e,D=n+O*s;d.x=-R*Math.cos(D),d.y=A,d.z=R*Math.sin(D),g.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),m.push(O+x,1-T),b.push(c++)}h.push(b)}for(let v=0;v<i;v++)for(let b=0;b<e;b++){const T=h[v][b+1],w=h[v][b],A=h[v+1][b],R=h[v+1][b+1];(v!==0||r>0)&&f.push(T,w,R),(v!==i-1||l<Math.PI)&&f.push(w,A,R)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function da(a){const t={};for(const e in a){t[e]={};for(const i in a[e]){const n=a[e][i];if(Kd(n))n.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Kd(n[0])){const s=[];for(let r=0,o=n.length;r<o;r++)s[r]=n[r].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function pi(a){const t={};for(let e=0;e<a.length;e++){const i=da(a[e]);for(const n in i)t[n]=i[n]}return t}function Kd(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function pg(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Bu(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const fa={clone:da,merge:pi};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=da(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(n.value);break;case"v2":this.uniforms[i].value=new At().fromArray(n.value);break;case"v3":this.uniforms[i].value=new k().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new re().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Gu extends xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vg extends rs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class xg extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _g extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zl={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(Zd(a)||(this.files[a]=t))},get:function(a){if(this.enabled!==!1&&!Zd(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function Zd(a){try{const t=a.slice(a.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class bg{constructor(t,e,i){const n=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yg=new bg;class qh{constructor(t){this.manager=t!==void 0?t:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}qh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class Mg extends qh{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=zl.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0);else{let d=Xs.get(r);d===void 0&&(d=[],Xs.set(r,d)),d.push({onLoad:e,onError:n})}return r}const o=hr("img");function l(){h(),e&&e(this);const d=Xs.get(this)||[];for(let p=0;p<d.length;p++){const f=d[p];f.onLoad&&f.onLoad(this)}Xs.delete(this),s.manager.itemEnd(t)}function c(d){h(),n&&n(d),zl.remove(`image:${t}`);const p=Xs.get(this)||[];for(let f=0;f<p.length;f++){const g=p[f];g.onError&&g.onError(d)}Xs.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zl.add(`image:${t}`,o),s.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Sg extends qh{constructor(t){super(t)}load(t,e,i,n){const s=new ei,r=new Mg(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class Qo extends Ue{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class wg extends Qo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Bl=new re,Jd=new k,Qd=new k;class Hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Jd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jd),Qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Bl,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,r=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===cr||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $r=new k,Xr=new As,hn=new k;class Vu extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($r,Xr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Xr,hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose($r,Xr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Xr,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new k,jd=new At,tf=new At;class zi extends Vu{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,jd,tf),e.subVectors(tf,jd)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fl*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Eg extends Hu{constructor(){super(new zi(90,1,.5,500)),this.isPointLightShadow=!0}}class Tg extends Qo{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Eg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Yh extends Vu{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ag extends Hu{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ef extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Ag}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Rg extends Qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,Ys=1;class $c extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new zi(qs,Ys,t,e);n.layers=this.layers,this.add(n);const s=new zi(qs,Ys,t,e);s.layers=this.layers,this.add(s);const r=new zi(qs,Ys,t,e);r.layers=this.layers,this.add(r);const o=new zi(qs,Ys,t,e);o.layers=this.layers,this.add(o);const l=new zi(qs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new zi(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,l]=e;for(const c of e)this.remove(c);if(t===on)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cg extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Pg{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Lg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Lg(){this._document.hidden===!1&&this.reset()}const nf=new re;class Dg{constructor(t,e,i=0,n=1/0){this.ray=new Zo(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(t,e=!0,i=[]){return Xc(t,this,i,e),i.sort(sf),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Xc(t[n],this,i,e);return i.sort(sf),i}}function sf(a,t){return a.distance-t.distance}function Xc(a,t,e,i){let n=!0;if(a.layers.test(t.layers)&&a.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)Xc(s[r],t,e,!0)}}function af(a,t,e,i){const n=Ig(i);switch(e){case bu:return a*t;case Ih:return a*t/n.components*n.byteLength;case Nh:return a*t/n.components*n.byteLength;case Ms:return a*t*2/n.components*n.byteLength;case kh:return a*t*2/n.components*n.byteLength;case yu:return a*t*3/n.components*n.byteLength;case rn:return a*t*4/n.components*n.byteLength;case Uh:return a*t*4/n.components*n.byteLength;case ro:case oo:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case uc:case mc:return Math.max(a,16)*Math.max(t,8)/4;case fc:case pc:return Math.max(a,8)*Math.max(t,8)/2;case gc:case vc:case _c:case bc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case xc:case Lo:case yc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Uc:case Fc:case Oc:return Math.ceil(a/4)*Math.ceil(t/4)*16;case zc:case Bc:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Do:case Gc:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(a){switch(a){case Ci:case gu:return{byteLength:1,components:1};case lr:case vu:case _i:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case wn:case Ph:case an:return{byteLength:4,components:1};case xu:case _u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wu(){let a=null,t=!1,e=null,i=null;function n(s,r){i=a.requestAnimationFrame(n),e(s,r)}return{start:function(){t!==!0&&e!==null&&a!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Ng(a){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=a.createBuffer();a.bindBuffer(l,p),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(a.bindBuffer(c,o),d.length===0)a.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,d[p]=y)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];a.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(a.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:r}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
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
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
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
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sv=`#define PI 3.141592653589793
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
} // validated`,av=`vec3 transformedNormal = objectNormal;
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
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hv="gl_FragColor = linearToOutputTexel( gl_FragColor );",dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
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
#endif`,mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yv=`#ifdef USE_GRADIENTMAP
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
}`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
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
#endif`,Dv=`uniform sampler2D dfgLUT;
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
}`,Iv=`
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
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Fv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform float backgroundBlurriness;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,Gx=`#if DEPTH_PACKING == 3200
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
}`,Hx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
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
}`,Qx=`#define MATCAP
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
}`,jx=`#define MATCAP
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
}`,t_=`#define NORMAL
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
}`,e_=`#define NORMAL
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
}`,i_=`#define PHONG
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
}`,n_=`#define PHONG
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
}`,s_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,r_=`#define TOON
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
}`,o_=`#define TOON
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
}`,l_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,h_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:kg,alphahash_pars_fragment:Ug,alphamap_fragment:Fg,alphamap_pars_fragment:Og,alphatest_fragment:zg,alphatest_pars_fragment:Bg,aomap_fragment:Gg,aomap_pars_fragment:Hg,batching_pars_vertex:Vg,batching_vertex:Wg,begin_vertex:$g,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:Yg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:jg,color_fragment:tv,color_pars_fragment:ev,color_pars_vertex:iv,color_vertex:nv,common:sv,defaultnormal_vertex:av,displacementmap_pars_vertex:rv,displacementmap_vertex:ov,emissivemap_fragment:lv,emissivemap_pars_fragment:cv,colorspace_fragment:hv,colorspace_pars_fragment:dv,envmap_fragment:fv,envmap_common_pars_fragment:uv,envmap_pars_fragment:pv,envmap_pars_vertex:mv,envmap_physical_pars_fragment:Tv,envmap_vertex:gv,fog_vertex:vv,fog_pars_vertex:xv,fog_fragment:_v,fog_pars_fragment:bv,gradientmap_pars_fragment:yv,lightmap_pars_fragment:Mv,lights_lambert_fragment:Sv,lights_lambert_pars_fragment:wv,lights_pars_begin:Ev,lights_toon_fragment:Av,lights_toon_pars_fragment:Rv,lights_phong_fragment:Cv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Iv,lights_fragment_maps:Nv,lights_fragment_end:kv,lightprobes_pars_fragment:Uv,logdepthbuf_fragment:Fv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Bv,map_fragment:Gv,map_pars_fragment:Hv,map_particle_fragment:Vv,map_particle_pars_fragment:Wv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:Xv,morphinstance_vertex:qv,morphcolor_vertex:Yv,morphnormal_vertex:Kv,morphtarget_pars_vertex:Zv,morphtarget_vertex:Jv,normal_fragment_begin:Qv,normal_fragment_maps:jv,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:ix,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:rx,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:dx,dithering_fragment:fx,dithering_pars_fragment:ux,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:vx,shadowmap_vertex:xx,shadowmask_pars_fragment:_x,skinbase_vertex:bx,skinning_pars_vertex:yx,skinning_vertex:Mx,skinnormal_vertex:Sx,specularmap_fragment:wx,specularmap_pars_fragment:Ex,tonemapping_fragment:Tx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Ix,background_vert:Nx,background_frag:kx,backgroundCube_vert:Ux,backgroundCube_frag:Fx,cube_vert:Ox,cube_frag:zx,depth_vert:Bx,depth_frag:Gx,distance_vert:Hx,distance_frag:Vx,equirect_vert:Wx,equirect_frag:$x,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:Yx,meshbasic_frag:Kx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:Qx,meshmatcap_frag:jx,meshnormal_vert:t_,meshnormal_frag:e_,meshphong_vert:i_,meshphong_frag:n_,meshphysical_vert:s_,meshphysical_frag:a_,meshtoon_vert:r_,meshtoon_frag:o_,points_vert:l_,points_frag:c_,shadow_vert:h_,shadow_frag:d_,sprite_vert:f_,sprite_frag:u_},vt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},bn={basic:{uniforms:pi([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:pi([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:pi([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:pi([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:pi([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:pi([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:pi([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:pi([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:pi([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:pi([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:pi([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:pi([vt.common,vt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:pi([vt.lights,vt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};bn.physical={uniforms:pi([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const qr={r:0,b:0,g:0},p_=new re,$u=new Gt;$u.set(-1,0,0,0,1,0,0,0,1);function m_(a,t,e,i,n,s){const r=new ut(0);let o=n===!0?0:1,l,c,h=null,d=0,p=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const w=b.backgroundBlurriness>0;T=t.get(T,w)}return T}function g(b){let T=!1;const w=f(b);w===null?m(r,o):w&&w.isColor&&(m(w,1),T=!0);const A=a.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(a.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(b,T){const w=f(T);w&&w.isCubeTexture?(c===void 0&&(c=new qt(new mi(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:da(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($u),c.material.toneMapped=ie.getTransfer(w.colorSpace)!==ce,(h!==w||d!==w.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,p=a.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new qt(new Ei(2,2),new xi({name:"BackgroundMaterial",uniforms:da(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ie.getTransfer(w.colorSpace)!==ce,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||p!==a.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,p=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,T){b.getRGB(qr,Bu(a)),e.buffers.color.setClear(qr.r,qr.g,qr.b,T,s)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,T=1){r.set(b),o=T,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(r,o)},render:g,addToRenderList:y,dispose:v}}function g_(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=p(null);let s=n,r=!1;function o(U,z,X,I,W){let Z=!1;const V=d(U,I,X,z);s!==V&&(s=V,c(s.object)),Z=f(U,I,X,W),Z&&g(U,I,X,W),W!==null&&t.update(W,a.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,w(U,z,X,I),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return a.createVertexArray()}function c(U){return a.bindVertexArray(U)}function h(U){return a.deleteVertexArray(U)}function d(U,z,X,I){const W=I.wireframe===!0;let Z=i[z.id];Z===void 0&&(Z={},i[z.id]=Z);const V=U.isInstancedMesh===!0?U.id:0;let nt=Z[V];nt===void 0&&(nt={},Z[V]=nt);let Y=nt[X.id];Y===void 0&&(Y={},nt[X.id]=Y);let et=Y[W];return et===void 0&&(et=p(l()),Y[W]=et),et}function p(U){const z=[],X=[],I=[];for(let W=0;W<e;W++)z[W]=0,X[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,z,X,I){const W=s.attributes,Z=z.attributes;let V=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const it=W[Y];let Rt=Z[Y];if(Rt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Rt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Rt=U.instanceColor)),it===void 0||it.attribute!==Rt||Rt&&it.data!==Rt.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function g(U,z,X,I){const W={},Z=z.attributes;let V=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let it=Z[Y];it===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(it=U.instanceColor));const Rt={};Rt.attribute=it,it&&it.data&&(Rt.data=it.data),W[Y]=Rt,V++}s.attributes=W,s.attributesNum=V,s.index=I}function y(){const U=s.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function m(U){v(U,0)}function v(U,z){const X=s.newAttributes,I=s.enabledAttributes,W=s.attributeDivisors;X[U]=1,I[U]===0&&(a.enableVertexAttribArray(U),I[U]=1),W[U]!==z&&(a.vertexAttribDivisor(U,z),W[U]=z)}function b(){const U=s.newAttributes,z=s.enabledAttributes;for(let X=0,I=z.length;X<I;X++)z[X]!==U[X]&&(a.disableVertexAttribArray(X),z[X]=0)}function T(U,z,X,I,W,Z,V){V===!0?a.vertexAttribIPointer(U,z,X,W,Z):a.vertexAttribPointer(U,z,X,I,W,Z)}function w(U,z,X,I){y();const W=I.attributes,Z=X.getAttributes(),V=z.defaultAttributeValues;for(const nt in Z){const Y=Z[nt];if(Y.location>=0){let et=W[nt];if(et===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),et!==void 0){const it=et.normalized,Rt=et.itemSize,Ht=t.get(et);if(Ht===void 0)continue;const Q=Ht.buffer,_t=Ht.type,wt=Ht.bytesPerElement,Nt=_t===a.INT||_t===a.UNSIGNED_INT||et.gpuType===Ph;if(et.isInterleavedBufferAttribute){const bt=et.data,Wt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,De=et.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let Ut=0;Ut<Y.locationSize;Ut++)v(Y.location+Ut,bt.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ut=0;Ut<Y.locationSize;Ut++)m(Y.location+Ut);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let Ut=0;Ut<Y.locationSize;Ut++)T(Y.location+Ut,Rt/Y.locationSize,_t,it,Wt*wt,(De+Rt/Y.locationSize*Ut)*wt,Nt)}else{if(et.isInstancedBufferAttribute){for(let bt=0;bt<Y.locationSize;bt++)v(Y.location+bt,et.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<Y.locationSize;bt++)m(Y.location+bt);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let bt=0;bt<Y.locationSize;bt++)T(Y.location+bt,Rt/Y.locationSize,_t,it,Rt*wt,Rt/Y.locationSize*bt*wt,Nt)}}else if(V!==void 0){const it=V[nt];if(it!==void 0)switch(it.length){case 2:a.vertexAttrib2fv(Y.location,it);break;case 3:a.vertexAttrib3fv(Y.location,it);break;case 4:a.vertexAttrib4fv(Y.location,it);break;default:a.vertexAttrib1fv(Y.location,it)}}}}b()}function A(){O();for(const U in i){const z=i[U];for(const X in z){const I=z[X];for(const W in I){const Z=I[W];for(const V in Z)h(Z[V].object),delete Z[V];delete I[W]}}delete i[U]}}function R(U){if(i[U.id]===void 0)return;const z=i[U.id];for(const X in z){const I=z[X];for(const W in I){const Z=I[W];for(const V in Z)h(Z[V].object),delete Z[V];delete I[W]}}delete i[U.id]}function x(U){for(const z in i){const X=i[z];for(const I in X){const W=X[I];if(W[U.id]===void 0)continue;const Z=W[U.id];for(const V in Z)h(Z[V].object),delete Z[V];delete W[U.id]}}}function E(U){for(const z in i){const X=i[z],I=U.isInstancedMesh===!0?U.id:0,W=X[I];if(W!==void 0){for(const Z in W){const V=W[Z];for(const nt in V)h(V[nt].object),delete V[nt];delete W[Z]}delete X[I],Object.keys(X).length===0&&delete i[z]}}}function O(){D(),r=!0,s!==n&&(s=n,c(s.object))}function D(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:O,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function v_(a,t,e){let i;function n(l){i=l}function s(l,c){a.drawArrays(i,l,c),e.update(c,i,1)}function r(l,c,h){h!==0&&(a.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let p=0;for(let f=0;f<h;f++)p+=c[f];e.update(p,i,1)}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function x_(a,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){return!(x!==rn&&i.convert(x)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const E=x===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Ci&&x!==an&&!E&&i.convert(x)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),A=a.getParameter(a.MAX_SAMPLES),R=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:w,maxSamples:A,samples:R}}function __(a){const t=this;let e=null,i=0,n=!1,s=!1;const r=new Qn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||n;return n=p,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,v=a.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:i,T=b*4;let w=v.clippingState||null;l.value=w,w=h(g,p,T,f);for(let A=0;A!==T;++A)w[A]=e[A];v.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,p,f,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const v=f+y*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<v)&&(m=new Float32Array(v));for(let T=0,w=f;T!==y;++T,w+=4)r.copy(d[T]).applyMatrix4(b,o),r.normal.toArray(m,w),m[w+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}class Kh extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Uu(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new mi(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:ys});s.uniforms.tEquirect.value=e;const r=new qt(n,s),o=e.minFilter;return e.minFilter===On&&(e.minFilter=ti),new $c(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}}const rf=256,b_=3,y_=20,Xu=256,qu=16,M_=3,S_=new k,w_=new ut;class zo{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $c(1,10,null),this._boxMesh=new qt(new mi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:r=256,position:o=S_}=s,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,p=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(w_));const m=new $c(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=p,l.autoClearDepth=f,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(rf,B0(t))}_fromTexture(t,e){t.mapping===la||t.mapping===rr?this._setSize(t.image.length===0?rf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=of(t,!1,!1),i=Math.log2(t)-b_;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=of(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;const r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===la||t.mapping===rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=lf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=E_(),this._integrationMaterial=T_());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/qu);for(let r=0;r<=i;r++){const o=zo.lodToRoughness(r,i);if(r>i-M_)s.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Xu*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=A_());const i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}}function of(a,t,e){return new Kh(a,{minFilter:On,generateMipmaps:t,type:_i,colorSpace:Io,depthBuffer:e})}function gr(a,t,e){return new xi({name:a,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:ci,blending:ys,depthTest:!1,depthWrite:!1})}function E_(){return gr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xu}u

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
	`)}function T_(){return gr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qu}},`

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
	`)}function A_(){return gr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${y_}
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
	`)}function lf(){return gr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function cf(){return gr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function R_(a){let t=new WeakMap,e=new WeakMap,i=null;function n(p,f=!1){return p==null?null:f?r(p):s(p)}function s(p){if(p&&p.isTexture){const f=p.mapping;if(f===ll||f===cl)if(t.has(p)){const g=t.get(p).texture;return o(g,p.mapping)}else{const g=p.image;if(g&&g.height>0){const y=new Kh(g.height);return y.fromEquirectangularTexture(a,p),t.set(p,y),p.addEventListener("dispose",c),o(y.texture,p.mapping)}else return null}}return p}function r(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){const f=p.mapping,g=f===ll||f===cl,y=f===la||f===rr;if(g||y){let m=e.get(p);const v=m!==void 0?m.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==v)return i===null&&(i=new zo(a)),m=g?i.fromEquirectangular(p,m):i.fromCubemap(p,m),m.texture.pmremVersion=p.pmremVersion,e.set(p,m),m.texture;if(m!==void 0)return m.texture;{const b=p.image;return g&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new zo(a)),m=g?i.fromEquirectangular(p):i.fromCubemap(p),m.texture.pmremVersion=p.pmremVersion,e.set(p,m),p.addEventListener("dispose",h),m.texture):null}}}return p}function o(p,f){return f===ll?p.mapping=la:f===cl&&(p.mapping=rr),p}function l(p){let f=0;const g=6;for(let y=0;y<g;y++)p[y]!==void 0&&f++;return f===g}function c(p){const f=p.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(p){const f=p.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function C_(a){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=a.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ho("WebGLRenderer: "+i+" extension not supported."),n}}}function P_(a,t,e,i){const n={},s=new WeakMap,r=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete n[g.id],r.unregister(g);const y=s.get(g);y&&(t.remove(y),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return n[y.id]!==void 0||(y.addEventListener("dispose",o),n[y.id]=new WeakRef(y),r.register(y,y.id,y),e.memory.geometries++),y}function h(g){const y=g.attributes;for(const m in y)t.update(y[m],a.ARRAY_BUFFER)}function d(g){const y=g.index,m=g.attributes.position;let v=0;if(m===void 0)return;const b=y!==null?y.array.length:m.array.length/3-1,T=m.count>=65535?Du:Lu,w=new T(Math.ceil(b/3)*6,1),A=w.array;if(y!==null){const x=y.array;v=y.version;for(let E=0,O=0;E<b;E+=3){const D=x[E+0],U=x[E+1],z=x[E+2];A[O++]=D,A[O++]=U,A[O++]=U,A[O++]=z,A[O++]=z,A[O++]=D}}else{v=m.version;for(let x=0,E=0;x<b;x+=3){const O=x+0,D=x+1,U=x+2;A[E++]=O,A[E++]=D,A[E++]=D,A[E++]=U,A[E++]=U,A[E++]=O}}w.version=v;const R=s.get(g);R&&t.remove(R),s.set(g,w)}function p(g){const y=s.get(g);if(y){const m=g.index;m!==null&&y.version<m.version&&d(g)}else d(g);return s.get(g)}function f(){for(const g in n){const y=n[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:p,dispose:f}}function L_(a,t,e){let i;function n(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,p){a.drawElements(i,p,s,d*r),e.update(p,i,1)}function c(d,p,f){f!==0&&(a.drawElementsInstanced(i,p,s,d*r,f),e.update(p,i,f))}function h(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,f);let y=0;for(let m=0;m<f;m++)y+=p[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function D_(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:ae("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function I_(a,t,e){const i=new WeakMap,n=new Ce;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let D=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var f=D;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),m===!0&&(w=3);let A=o.attributes.position.count*w,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const x=new Float32Array(A*R*4*d),E=new Cu(x,A,R,d);E.type=an,E.needsUpdate=!0;const O=w*4;for(let U=0;U<d;U++){const z=v[U],X=b[U],I=T[U],W=A*R*4*U;for(let Z=0;Z<z.count;Z++){const V=Z*O;g===!0&&(n.fromBufferAttribute(z,Z),x[W+V+0]=n.x,x[W+V+1]=n.y,x[W+V+2]=n.z,x[W+V+3]=0),y===!0&&(n.fromBufferAttribute(X,Z),x[W+V+4]=n.x,x[W+V+5]=n.y,x[W+V+6]=n.z,x[W+V+7]=0),m===!0&&(n.fromBufferAttribute(I,Z),x[W+V+8]=n.x,x[W+V+9]=n.y,x[W+V+10]=n.z,x[W+V+11]=I.itemSize===4?n.w:1)}}p={count:d,texture:E,size:new At(A,R)},i.set(o,p),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",y),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}return{update:s}}function N_(a,t,e,i,n){let s=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,p=t.get(c,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return p}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const k_={[wh]:"LINEAR_TONE_MAPPING",[Eh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[Ah]:"ACES_FILMIC_TONE_MAPPING",[Ch]:"AGX_TONE_MAPPING",[Yo]:"NEUTRAL_TONE_MAPPING",[Rh]:"CUSTOM_TONE_MAPPING"};function U_(a,t,e,i,n,s){const r=new bi(t,e,{type:a,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Fe;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));const d=new Gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new qt(h,d),f=new Yh(-1,1,1,-1,0,1);let g=null,y=null,m=!1,v,b=null,T=[],w=!1;this.setSize=function(A,R){r.setSize(A,R),o!==null&&o.setSize(A,R),l!==null&&l.setSize(A,R);for(let x=0;x<T.length;x++){const E=T[x];E.setSize&&E.setSize(A,R)}},this.setEffects=function(A){T=A,w=T.length>0&&T[0].isRenderPass===!0;const R=r.width,x=r.height;T.length>0&&o===null&&(o=new bi(R,x,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new bi(R,x,{type:_i,depthBuffer:!1,stencilBuffer:!1}));const E=n===!0&&T.some(O=>O.needsDepthTexture===!0);E!==(r.depthTexture!==null)&&(E===!0&&c===null&&(c=new ha(R,x),s===!0&&(c.format=es,c.type=ca)),r.dispose(),r.depthTexture=E?c:null,r.resolveDepthBuffer=E,r.storeMultisampledDepthBuffer=E);for(let O=0;O<T.length;O++){const D=T[O];D.setSize&&D.setSize(R,x),E&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(A,R){if(m||A.toneMapping===Bn&&T.length===0)return!1;if(b=R,R!==null){const x=R.width,E=R.height;(r.width!==x||r.height!==E)&&this.setSize(x,E)}return w===!1&&A.setRenderTarget(r),v=A.toneMapping,A.toneMapping=Bn,!0},this.hasRenderPass=function(){return w},this.end=function(A,R){A.toneMapping=v,m=!0;let x=r,E=o;for(let O=0;O<T.length;O++){const D=T[O];D.enabled!==!1&&(D.render(A,E,x,R),D.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,d.defines={},ie.getTransfer(g)===ce&&(d.defines.SRGB_TRANSFER="");const O=k_[y];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(b),A.render(p,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Yu=new ei,Ku=new ha(1,1),Zu=new Fu(1),Ju=new Cu,Qu=new X0,ju=new Uu,hf=[],df=[],ff=new Float32Array(16),uf=new Float32Array(9),pf=new Float32Array(4);function xa(a,t,e){const i=a[0];if(i<=0||i>0)return a;const n=t*e;let s=hf[n];if(s===void 0&&(s=new Float32Array(n),hf[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function He(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function Ve(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function jo(a,t){let e=df[t];e===void 0&&(e=new Int32Array(t),df[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function F_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function O_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;a.uniform2fv(this.addr,t),Ve(e,t)}}function z_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;a.uniform3fv(this.addr,t),Ve(e,t)}}function B_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;a.uniform4fv(this.addr,t),Ve(e,t)}}function G_(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;pf.set(i),a.uniformMatrix2fv(this.addr,!1,pf),Ve(e,i)}}function H_(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;uf.set(i),a.uniformMatrix3fv(this.addr,!1,uf),Ve(e,i)}}function V_(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;ff.set(i),a.uniformMatrix4fv(this.addr,!1,ff),Ve(e,i)}}function W_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function $_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;a.uniform2iv(this.addr,t),Ve(e,t)}}function X_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;a.uniform3iv(this.addr,t),Ve(e,t)}}function q_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;a.uniform4iv(this.addr,t),Ve(e,t)}}function Y_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function K_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;a.uniform2uiv(this.addr,t),Ve(e,t)}}function Z_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;a.uniform3uiv(this.addr,t),Ve(e,t)}}function J_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;a.uniform4uiv(this.addr,t),Ve(e,t)}}function tl(a){return a.version===0&&(a.compareFunction=wu,a.needsUpdate=!0),a}function Q_(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?s=tl(Ku):s=Yu,e.setTexture2D(t||s,n)}function j_(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Qu,n)}function tb(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_CUBE_SHADOW?s=tl(Zu):s=ju,e.setTextureCube(t||s,n)}function eb(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ju,n)}function ib(a){switch(a){case 5126:return F_;case 35664:return O_;case 35665:return z_;case 35666:return B_;case 35674:return G_;case 35675:return H_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return $_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return K_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(a,t){a.uniform1fv(this.addr,t)}function sb(a,t){const e=xa(t,this.size,2);a.uniform2fv(this.addr,e)}function ab(a,t){const e=xa(t,this.size,3);a.uniform3fv(this.addr,e)}function rb(a,t){const e=xa(t,this.size,4);a.uniform4fv(this.addr,e)}function ob(a,t){const e=xa(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function lb(a,t){const e=xa(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function cb(a,t){const e=xa(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function hb(a,t){a.uniform1iv(this.addr,t)}function db(a,t){a.uniform2iv(this.addr,t)}function fb(a,t){a.uniform3iv(this.addr,t)}function ub(a,t){a.uniform4iv(this.addr,t)}function pb(a,t){a.uniform1uiv(this.addr,t)}function mb(a,t){a.uniform2uiv(this.addr,t)}function gb(a,t){a.uniform3uiv(this.addr,t)}function vb(a,t){a.uniform4uiv(this.addr,t)}function xb(a,t,e){const i=this.cache,n=t.length,s=jo(e,n);He(i,s)||(a.uniform1iv(this.addr,s),Ve(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=tl(Ku):r=Yu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,s[o])}function _b(a,t,e){const i=this.cache,n=t.length,s=jo(e,n);He(i,s)||(a.uniform1iv(this.addr,s),Ve(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Qu,s[r])}function bb(a,t,e){const i=this.cache,n=t.length,s=jo(e,n);He(i,s)||(a.uniform1iv(this.addr,s),Ve(i,s));let r;this.type===a.SAMPLER_CUBE_SHADOW?r=tl(Zu):r=ju;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||r,s[o])}function yb(a,t,e){const i=this.cache,n=t.length,s=jo(e,n);He(i,s)||(a.uniform1iv(this.addr,s),Ve(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Ju,s[r])}function Mb(a){switch(a){case 5126:return nb;case 35664:return sb;case 35665:return ab;case 35666:return rb;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return ub;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return yb}}class Sb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ib(e.type)}}class wb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mb(e.type)}}class Eb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function mf(a,t){a.seq.push(t),a.map[t.id]=t}function Tb(a,t,e){const i=a.name,n=i.length;for(Gl.lastIndex=0;;){const s=Gl.exec(i),r=Gl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){mf(e,c===void 0?new Sb(o,a,t):new wb(o,a,t));break}else{let d=e.map[o];d===void 0&&(d=new Eb(o),mf(e,d)),e=d}}}class fo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Tb(o,l,this)}const n=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function gf(a,t,e){const i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}const Ab=37297;let Rb=0;function Cb(a,t){const e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const vf=new Gt;function Pb(a){ie._getMatrix(vf,ie.workingColorSpace,a);const t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(a)){case No:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function xf(a,t,e){const i=a.getShaderParameter(t,a.COMPILE_STATUS),s=(a.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cb(a.getShaderSource(t),o)}else return s}function Lb(a,t){const e=Pb(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Db={[wh]:"Linear",[Eh]:"Reinhard",[Th]:"Cineon",[Ah]:"ACESFilmic",[Ch]:"AgX",[Yo]:"Neutral",[Rh]:"Custom"};function Ib(a,t){const e=Db[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new k;function Nb(){ie.getLuminanceCoefficients(Yr);const a=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function Ub(a){const t=[];for(const e in a){const i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Fb(a,t){const e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(t,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function $a(a){return a!==""}function _f(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bf(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(a){return a.replace(Ob,zb)}function zb(a,t){const e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qc(e)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(a){return a.replace(Bb,Gb)}function Gb(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Mf(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Hb={[tr]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function Vb(a){return Hb[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Wb={[rr]:"ENVMAP_MODE_REFRACTION"};function $b(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Wb[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xb={[pu]:"ENVMAP_BLENDING_MULTIPLY",[w0]:"ENVMAP_BLENDING_MIX",[E0]:"ENVMAP_BLENDING_ADD"};function qb(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Xb[a.combine]||"ENVMAP_BLENDING_NONE"}function Yb(a,t,e,i){const n=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Vb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$b(e),d=qb(e),p=kb(e),f=Ub(s),g=n.createProgram();let y,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter($a).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter($a).join(`
`),m.length>0&&(m+=`
`)):(y=[Mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),m=[Mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Ib("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Lb("linearToOutputTexel",e.outputColorSpace),Nb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($a).join(`
`)),r=qc(r),r=_f(r,e),r=bf(r,e),o=qc(o),o=_f(o,e),o=bf(o,e),r=yf(r),o=yf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+y+r,T=v+m+o,w=gf(n,n.VERTEX_SHADER,b),A=gf(n,n.FRAGMENT_SHADER,T);n.attachShader(g,w),n.attachShader(g,A),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function R(D){if(a.debug.checkShaderErrors){const U=n.getProgramInfoLog(g)||"",z=n.getShaderInfoLog(w)||"",X=n.getShaderInfoLog(A)||"",I=U.trim(),W=z.trim(),Z=X.trim();let V=!0,nt=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,g,w,A);else{const Y=xf(n,w,"vertex"),et=xf(n,A,"fragment");ae("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+Y+`
`+et)}else I!==""?Ft("WebGLProgram: Program Info Log:",I):(W===""||Z==="")&&(nt=!1);nt&&(D.diagnostics={runnable:V,programLog:I,vertexShader:{log:W,prefix:y},fragmentShader:{log:Z,prefix:m}})}n.deleteShader(w),n.deleteShader(A),x=new fo(n,g),E=Fb(n,g)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=n.getProgramParameter(g,Ab)),O},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let Kb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jb(t),e.set(t,i)),i}}class Jb{constructor(t){this.id=Kb++,this.code=t,this.usedTimes=0}}function Qb(a){return a===Ms||a===Lo||a===Do}function jb(a,t,e,i,n,s){const r=new Oh,o=new Zb,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,O,D,U,z){const X=D.fog,I=U.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||W,Z),nt=p[x.type];let Y=i.precision;x.precision!==null&&(Y=i.getMaxPrecision(x.precision),Y!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,it=et!==void 0?et.length:0;let Rt=0;I.morphAttributes.position!==void 0&&(Rt=1),I.morphAttributes.normal!==void 0&&(Rt=2),I.morphAttributes.color!==void 0&&(Rt=3);let Ht,Q,_t,wt;if(nt){const xt=bn[nt];Ht=xt.vertexShader,Q=xt.fragmentShader}else{Ht=x.vertexShader,Q=x.fragmentShader;const xt=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,xt,de),_t=xt.id,wt=de.id}const Nt=a.getRenderTarget(),bt=a.state.buffers.depth.getReversed(),Wt=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,Ut=!!x.map,he=!!x.matcap,ge=!!V,jt=ge&&V.isPMREMTexture===!0,Ze=!!x.aoMap,Oe=!!x.lightMap,Mi=!!x.bumpMap&&x.wireframe===!1,Te=!!x.normalMap,cn=!!x.displacementMap,We=!!x.emissiveMap,Di=!!x.metalnessMap,Ii=!!x.roughnessMap,Ni=x.anisotropy>0,F=x.clearcoat>0,ki=x.diffuseRoughness>0,Se=x.dispersion>0,we=x.retroreflectivity>0,gt=x.iridescence>0,ze=x.sheen>0,kt=x.transmission>0,Bt=Ni&&!!x.anisotropyMap,C=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,st=ki&&!!x.diffuseRoughnessMap,tt=gt&&!!x.iridescenceMap,ot=gt&&!!x.iridescenceThicknessMap,pt=ze&&!!x.sheenColorMap,K=ze&&!!x.sheenRoughnessMap,J=!!x.specularMap,ht=!!x.specularColorMap,L=!!x.specularIntensityMap,j=kt&&!!x.transmissionMap,q=kt&&!!x.thicknessMap,dt=!!x.gradientMap,rt=!!x.alphaMap,lt=x.alphaTest>0,Pt=!!x.alphaHash,Yt=!!x.extensions;let at=Bn;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(at=a.toneMapping);const Dt=jt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Xt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Ht,fragmentShader:Q,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:wt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&U.instanceColor!==null,instancingMorph:Wt&&U.morphTexture!==null,outputColorSpace:Nt===null?a.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:he,envMap:ge,envMapMode:ge&&V.mapping,envMapPMREM:jt,envMapMaxLod:jt?Dt.length-1:null,envMapSize:jt?Dt[0].width:null,aoMap:Ze,lightMap:Oe,bumpMap:Mi,normalMap:Te,displacementMap:cn,emissiveMap:We,normalMapObjectSpace:Te&&x.normalMapType===R0,normalMapTangentSpace:Te&&x.normalMapType===Hc,packedNormalMap:Te&&x.normalMapType===Hc&&Qb(x.normalMap.format),metalnessMap:Di,roughnessMap:Ii,anisotropy:Ni,anisotropyMap:Bt,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:ki,diffuseRoughnessMap:st,dispersion:Se,retroreflection:we,iridescence:gt,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:ze,sheenColorMap:pt,sheenRoughnessMap:K,specularMap:J,specularColorMap:ht,specularIntensityMap:L,transmission:kt,transmissionMap:j,thicknessMap:q,gradientMap:dt,opaque:x.transparent===!1&&x.blending===er&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Pt,combine:x.combine,mapUv:Ut&&f(x.map.channel),aoMapUv:Ze&&f(x.aoMap.channel),lightMapUv:Oe&&f(x.lightMap.channel),bumpMapUv:Mi&&f(x.bumpMap.channel),normalMapUv:Te&&f(x.normalMap.channel),displacementMapUv:cn&&f(x.displacementMap.channel),emissiveMapUv:We&&f(x.emissiveMap.channel),metalnessMapUv:Di&&f(x.metalnessMap.channel),roughnessMapUv:Ii&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:ht&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:rt&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||Ni),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ut||rt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Rt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.filter(xt=>xt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:We&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bi,flipSided:x.side===ci,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Yt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&x.extensions.multiDraw===!0||De)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function y(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)E.push(O),E.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(E,x),v(E,x),E.push(a.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.diffuseRoughness&&r.enable(25),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function b(x){const E=p[x.type];let O;if(E){const D=bn[E];O=fa.clone(D.uniforms)}else O=x.uniforms;return O}function T(x,E){let O=h.get(E);return O!==void 0?++O.usedTimes:(O=new Yb(a,E,x,n),c.push(O),h.set(E,O)),O}function w(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:b,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:R}}function ty(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function ey(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.materialVariant!==t.materialVariant?a.materialVariant-t.materialVariant:a.z!==t.z?a.z-t.z:a.id-t.id}function Sf(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function wf(){const a=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(p){let f=0;return p.isInstancedMesh&&(f+=2),p.isSkinnedMesh&&(f+=1),f}function o(p,f,g,y,m,v){let b=a[t];return b===void 0?(b={id:p.id,object:p,geometry:f,material:g,materialVariant:r(p),groupOrder:y,renderOrder:p.renderOrder,z:m,group:v},a[t]=b):(b.id=p.id,b.object=p,b.geometry=f,b.material=g,b.materialVariant=r(p),b.groupOrder=y,b.renderOrder=p.renderOrder,b.z=m,b.group=v),t++,b}function l(p,f,g,y,m,v,b){b.reversedDepth===!0&&(m=-m);const T=o(p,f,g,y,m,v);g.transmission>0?i.push(T):g.transparent===!0?n.push(T):e.push(T)}function c(p,f,g,y,m,v){const b=o(p,f,g,y,m,v);g.transmission>0?i.unshift(b):g.transparent===!0?n.unshift(b):e.unshift(b)}function h(p,f){e.length>1&&e.sort(p||ey),i.length>1&&i.sort(f||Sf),n.length>1&&n.sort(f||Sf)}function d(){for(let p=t,f=a.length;p<f;p++){const g=a[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function iy(){let a=new WeakMap;function t(i,n){const s=a.get(i);let r;return s===void 0?(r=new wf,a.set(i,[r])):n>=s.length?(r=new wf,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function ny(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new ut};break;case"SpotLight":e={position:new k,direction:new k,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new k,halfWidth:new k,halfHeight:new k};break}return a[t.id]=e,e}}}function sy(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let ay=0;function ry(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function oy(a){const t=new ny,e=sy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const n=new k,s=new re,r=new re;function o(c){let h=0,d=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,g=0,y=0,m=0,v=0,b=0,T=0,w=0,A=0,R=0,x=0,E=0,O=0,D=0;c.sort(ry);for(let z=0,X=c.length;z<X;z++){const I=c[z],W=I.color,Z=I.intensity,V=I.distance;let nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ms?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*Z,d+=W.g*Z,p+=W.b*Z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],Z);D++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[g]=it,i.sunShadowMap[g]=nt;const Rt=et.getViewportCount();for(let Ht=0;Ht<Rt;Ht++)i.sunShadowMatrix[y+Ht]=et.getMatrix(Ht),i.sunShadowCascade[y+Ht]=et._cascadeData[Ht];y+=Rt,g++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=I.shadow.matrix,A++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[b]=Y;const et=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,et.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[b]=et.matrix,I.castShadow){const it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=nt,x++}b++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=Y,T++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,i.pointShadow[v]=it,i.pointShadowMap[v]=nt,i.pointShadowMatrix[v]=I.shadow.matrix,R++}i.point[v]=Y,v++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(Z),Y.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[w]=Y,w++}}T>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==v||U.spotLength!==b||U.rectAreaLength!==T||U.hemiLength!==w||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==R||U.numSpotShadows!==x||U.numSpotMaps!==E||U.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=T,i.point.length=v,i.hemi.length=w,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-O,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=D,U.sunLength=f,U.directionalLength=m,U.pointLength=v,U.spotLength=b,U.rectAreaLength=T,U.hemiLength=w,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=R,U.numSpotShadows=x,U.numSpotMaps=E,U.numLightProbes=D,i.version=ay++)}function l(c,h){let d=0,p=0,f=0,g=0,y=0,m=0;const v=h.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){const w=c[b];if(w.isSunLight){const A=i.sun[d];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(v),d++}else if(w.isDirectionalLight){const A=i.directional[p];A.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(v),p++}else if(w.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(v),g++}else if(w.isRectAreaLight){const A=i.rectArea[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(v),r.identity(),s.copy(w.matrixWorld),s.premultiply(v),r.extractRotation(s),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),y++}else if(w.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(v),f++}else if(w.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(v),m++}}}return{setup:o,setupView:l,state:i}}function Ef(a){const t=new oy(a),e=[],i=[],n=[];function s(d){h.camera=d,e.length=0,i.length=0,n.length=0}function r(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),n.sort((d,p)=>d.priority-p.priority||d.id-p.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function ly(a){let t=new WeakMap;function e(n,s=0){const r=t.get(n);let o;return r===void 0?(o=new Ef(a),t.set(n,[o])):s>=r.length?(o=new Ef(a),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`,dy=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],fy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Tf=new re,Na=new k,Hl=new k;function uy(a,t,e){let i=new dr;const n=new At,s=new At,r=new Ce,o=new xg,l=new _g,c={},h=e.maxTextureSize,d={[is]:ci,[ci]:is,[Bi]:Bi},p=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new qt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let v=this.type;this.render=function(R,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===a0&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);const O=a.getRenderTarget(),D=a.getActiveCubeFace(),U=a.getActiveMipmapLevel(),z=a.state;z.setBlending(ys),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=v!==this.type;X&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=R.length;I<W;I++){const Z=R[I],V=Z.shadow;if(V===void 0){Ft("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const nt=V.getFrameExtents();n.multiply(nt),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/nt.x),n.x=s.x*nt.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/nt.y),n.y=s.y*nt.y,V.mapSize.y=s.y));const Y=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Wa){if(Z.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bi(n.x,n.y,{format:Ms,type:_i,minFilter:ti,magFilter:ti,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new ha(n.x,n.y,an),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=ss,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ue,V.map.depthTexture.magFilter=ue}else Z.isPointLight?(V.map=new Kh(n.x),V.map.depthTexture=new Fu(n.x,wn)):(V.map=new bi(n.x,n.y),V.map.depthTexture=new ha(n.x,n.y,wn)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=ss,this.type===tr?(V.map.depthTexture.compareFunction=Y?Su:Mu,V.map.depthTexture.minFilter=ti,V.map.depthTexture.magFilter=ti):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ue,V.map.depthTexture.magFilter=ue);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);const et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,E);const it=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:E.layers;for(let Rt=0;Rt<et;Rt++){const Ht=V.getCamera(Rt);if(Z.isPointLight){const Q=V.camera,_t=V.matrix,wt=Z.distance||Q.far;wt!==Q.far&&(Q.far=wt,Q.updateProjectionMatrix()),Na.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Na),Hl.copy(Q.position),Hl.add(dy[Rt]),Q.up.copy(fy[Rt]),Q.lookAt(Hl),Q.updateMatrixWorld(),_t.makeTranslation(-Na.x,-Na.y,-Na.z),Tf.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Tf,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,Rt),a.clear();else{Rt===0&&(a.setRenderTarget(V.map),a.clear());const Q=V.getViewport(Rt);r.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),z.viewport(r)}i=V.getFrustum(Rt),w(x,E,Ht,Z,it,this.type)}V.isPointLightShadow!==!0&&this.type===Wa&&b(V,E),V.needsUpdate=!1}v=this.type,m.needsUpdate=!1,a.setRenderTarget(O,D,U)};function b(R,x){const E=t.update(y);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new bi(n.x,n.y,{format:Ms,type:_i}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),p.uniforms.shadow_pass.value=R.map.depthTexture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(x,null,E,p,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(x,null,E,f,y,null)}function T(R,x,E,O){let D=null;const U=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)D=U;else if(D=E.isPointLight===!0?l:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const z=D.uuid,X=x.uuid;let I=c[z];I===void 0&&(I={},c[z]=I);let W=I[X];W===void 0&&(W=D.clone(),I[X]=W,x.addEventListener("dispose",A)),D=W}if(D.visible=x.visible,D.wireframe=x.wireframe,O===Wa?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:d[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const z=a.properties.get(D);z.light=E}return D}function w(R,x,E,O,D,U){if(R.visible===!1)return;if(R.layers.test(D)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===Wa)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const I=t.update(R),W=R.material;if(Array.isArray(W)){const Z=I.groups;for(let V=0,nt=Z.length;V<nt;V++){const Y=Z[V],et=W[Y.materialIndex];if(et&&et.visible){const it=T(R,et,O,U);R.onBeforeShadow(a,R,x,E,I,it,Y),a.renderBufferDirect(E,null,I,it,R,Y),R.onAfterShadow(a,R,x,E,I,it,Y)}}}else if(W.visible){const Z=T(R,W,O,U);R.onBeforeShadow(a,R,x,E,I,Z,null),a.renderBufferDirect(E,null,I,Z,R,null),R.onAfterShadow(a,R,x,E,I,Z,null)}}const X=R.children;for(let I=0,W=X.length;I<W;I++)w(X[I],x,E,O,D,U)}function A(R){R.target.removeEventListener("dispose",A);for(const E in c){const O=c[E],D=R.target.uuid;D in O&&(O[D].dispose(),delete O[D])}}}function py(a,t){function e(){let L=!1;const j=new Ce;let q=null;const dt=new Ce(0,0,0,0);return{setMask:function(rt){q!==rt&&!L&&(a.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){L=rt},setClear:function(rt,lt,Pt,Yt,at){at===!0&&(rt*=Yt,lt*=Yt,Pt*=Yt),j.set(rt,lt,Pt,Yt),dt.equals(j)===!1&&(a.clearColor(rt,lt,Pt,Yt),dt.copy(j))},reset:function(){L=!1,q=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,j=!1,q=null,dt=null,rt=null;return{setReversed:function(lt){if(j!==lt){const Pt=t.get("EXT_clip_control");lt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),j=lt;const Yt=rt;rt=null,this.setClear(Yt)}},getReversed:function(){return j},setTest:function(lt){lt?bt(a.DEPTH_TEST):Wt(a.DEPTH_TEST)},setMask:function(lt){q!==lt&&!L&&(a.depthMask(lt),q=lt)},setFunc:function(lt){if(j&&(lt=O0[lt]),dt!==lt){switch(lt){case sc:a.depthFunc(a.NEVER);break;case ac:a.depthFunc(a.ALWAYS);break;case rc:a.depthFunc(a.LESS);break;case ar:a.depthFunc(a.LEQUAL);break;case oc:a.depthFunc(a.EQUAL);break;case lc:a.depthFunc(a.GEQUAL);break;case cc:a.depthFunc(a.GREATER);break;case hc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}dt=lt}},setLocked:function(lt){L=lt},setClear:function(lt){rt!==lt&&(rt=lt,j&&(lt=1-lt),a.clearDepth(lt))},reset:function(){L=!1,q=null,dt=null,rt=null,j=!1}}}function n(){let L=!1,j=null,q=null,dt=null,rt=null,lt=null,Pt=null,Yt=null,at=null;return{setTest:function(Dt){L||(Dt?bt(a.STENCIL_TEST):Wt(a.STENCIL_TEST))},setMask:function(Dt){j!==Dt&&!L&&(a.stencilMask(Dt),j=Dt)},setFunc:function(Dt,Xt,xt){(q!==Dt||dt!==Xt||rt!==xt)&&(a.stencilFunc(Dt,Xt,xt),q=Dt,dt=Xt,rt=xt)},setOp:function(Dt,Xt,xt){(lt!==Dt||Pt!==Xt||Yt!==xt)&&(a.stencilOp(Dt,Xt,xt),lt=Dt,Pt=Xt,Yt=xt)},setLocked:function(Dt){L=Dt},setClear:function(Dt){at!==Dt&&(a.clearStencil(Dt),at=Dt)},reset:function(){L=!1,j=null,q=null,dt=null,rt=null,lt=null,Pt=null,Yt=null,at=null}}}const s=new e,r=new i,o=new n;let l={};const c=new WeakMap;let h={},d={},p={},f=new WeakMap,g=[],y=null,m=!1,v=null,b=null,T=null,w=null,A=null,R=null,x=null,E=new ut(0,0,0),O=0,D=!1,U=null,z=null,X=null,I=null,W=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=nt>=2);let et=null,it={};const Rt=a.getParameter(a.SCISSOR_BOX),Ht=a.getParameter(a.VIEWPORT),Q=new Ce().fromArray(Rt),_t=new Ce().fromArray(Ht);function wt(L,j,q,dt){const rt=new Uint8Array(4),lt=a.createTexture();a.bindTexture(L,lt),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pt=0;Pt<q;Pt++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(j,0,a.RGBA,1,1,dt,0,a.RGBA,a.UNSIGNED_BYTE,rt):a.texImage2D(j+Pt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,rt);return lt}const Nt={};Nt[a.TEXTURE_2D]=wt(a.TEXTURE_2D,a.TEXTURE_2D,1),Nt[a.TEXTURE_CUBE_MAP]=wt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[a.TEXTURE_2D_ARRAY]=wt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Nt[a.TEXTURE_3D]=wt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),bt(a.DEPTH_TEST),r.setFunc(ar),Mi(!1),Te(vd),bt(a.CULL_FACE),Ze(ys);function bt(L){h[L]!==!0&&(a.enable(L),h[L]=!0)}function Wt(L){h[L]!==!1&&(a.disable(L),h[L]=!1)}function De(L,j){return p[L]!==j?(a.bindFramebuffer(L,j),p[L]=j,L===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=j),L===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=j),!0):!1}function Ut(L,j){let q=g,dt=!1;if(L){q=f.get(j),q===void 0&&(q=[],f.set(j,q));const rt=L.textures;if(q.length!==rt.length||q[0]!==a.COLOR_ATTACHMENT0){for(let lt=0,Pt=rt.length;lt<Pt;lt++)q[lt]=a.COLOR_ATTACHMENT0+lt;q.length=rt.length,dt=!0}}else q[0]!==a.BACK&&(q[0]=a.BACK,dt=!0);dt&&a.drawBuffers(q)}function he(L){return y!==L?(a.useProgram(L),y=L,!0):!1}const ge={[Zs]:a.FUNC_ADD,[o0]:a.FUNC_SUBTRACT,[l0]:a.FUNC_REVERSE_SUBTRACT};ge[c0]=a.MIN,ge[h0]=a.MAX;const jt={[d0]:a.ZERO,[f0]:a.ONE,[u0]:a.SRC_COLOR,[fu]:a.SRC_ALPHA,[_0]:a.SRC_ALPHA_SATURATE,[v0]:a.DST_COLOR,[m0]:a.DST_ALPHA,[p0]:a.ONE_MINUS_SRC_COLOR,[uu]:a.ONE_MINUS_SRC_ALPHA,[x0]:a.ONE_MINUS_DST_COLOR,[g0]:a.ONE_MINUS_DST_ALPHA,[b0]:a.CONSTANT_COLOR,[y0]:a.ONE_MINUS_CONSTANT_COLOR,[M0]:a.CONSTANT_ALPHA,[S0]:a.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,j,q,dt,rt,lt,Pt,Yt,at,Dt){if(L===ys){m===!0&&(Wt(a.BLEND),m=!1);return}if(m===!1&&(bt(a.BLEND),m=!0),L!==r0){if(L!==v||Dt!==D){if((b!==Zs||A!==Zs)&&(a.blendEquation(a.FUNC_ADD),b=Zs,A=Zs),Dt)switch(L){case er:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ns:a.blendFunc(a.ONE,a.ONE);break;case xd:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case _d:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:ae("WebGLState: Invalid blending: ",L);break}else switch(L){case er:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ns:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case xd:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _d:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",L);break}T=null,w=null,R=null,x=null,E.set(0,0,0),O=0,v=L,D=Dt}return}rt=rt||j,lt=lt||q,Pt=Pt||dt,(j!==b||rt!==A)&&(a.blendEquationSeparate(ge[j],ge[rt]),b=j,A=rt),(q!==T||dt!==w||lt!==R||Pt!==x)&&(a.blendFuncSeparate(jt[q],jt[dt],jt[lt],jt[Pt]),T=q,w=dt,R=lt,x=Pt),(Yt.equals(E)===!1||at!==O)&&(a.blendColor(Yt.r,Yt.g,Yt.b,at),E.copy(Yt),O=at),v=L,D=!1}function Oe(L,j){L.side===Bi?Wt(a.CULL_FACE):bt(a.CULL_FACE);let q=L.side===ci;j&&(q=!q),Mi(q),L.blending===er&&L.transparent===!1?Ze(ys):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?bt(a.SAMPLE_ALPHA_TO_COVERAGE):Wt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Mi(L){U!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),U=L)}function Te(L){L!==n0?(bt(a.CULL_FACE),L!==z&&(L===vd?a.cullFace(a.BACK):L===s0?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Wt(a.CULL_FACE),z=L}function cn(L){L!==X&&(V&&a.lineWidth(L),X=L)}function We(L,j,q){L?(bt(a.POLYGON_OFFSET_FILL),(I!==j||W!==q)&&(I=j,W=q,r.getReversed()&&(j=-j,q=-q),a.polygonOffset(j,q))):Wt(a.POLYGON_OFFSET_FILL)}function Di(L){L?bt(a.SCISSOR_TEST):Wt(a.SCISSOR_TEST)}function Ii(L){L===void 0&&(L=a.TEXTURE0+Z-1),et!==L&&(a.activeTexture(L),et=L)}function Ni(L,j,q){q===void 0&&(et===null?q=a.TEXTURE0+Z-1:q=et);let dt=it[q];dt===void 0&&(dt={type:void 0,texture:void 0},it[q]=dt),(dt.type!==L||dt.texture!==j)&&(et!==q&&(a.activeTexture(q),et=q),a.bindTexture(L,j||Nt[L]),dt.type=L,dt.texture=j)}function F(){const L=it[et];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ki(){try{a.compressedTexImage2D(...arguments)}catch(L){ae("WebGLState:",L)}}function Se(){try{a.compressedTexImage3D(...arguments)}catch(L){ae("WebGLState:",L)}}function we(){try{a.texSubImage2D(...arguments)}catch(L){ae("WebGLState:",L)}}function gt(){try{a.texSubImage3D(...arguments)}catch(L){ae("WebGLState:",L)}}function ze(){try{a.compressedTexSubImage2D(...arguments)}catch(L){ae("WebGLState:",L)}}function kt(){try{a.compressedTexSubImage3D(...arguments)}catch(L){ae("WebGLState:",L)}}function Bt(){try{a.texStorage2D(...arguments)}catch(L){ae("WebGLState:",L)}}function C(){try{a.texStorage3D(...arguments)}catch(L){ae("WebGLState:",L)}}function M(){try{a.texImage2D(...arguments)}catch(L){ae("WebGLState:",L)}}function G(){try{a.texImage3D(...arguments)}catch(L){ae("WebGLState:",L)}}function st(L){return d[L]!==void 0?d[L]:a.getParameter(L)}function tt(L,j){d[L]!==j&&(a.pixelStorei(L,j),d[L]=j)}function ot(L){Q.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function pt(L){_t.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),_t.copy(L))}function K(L,j){let q=c.get(j);q===void 0&&(q=new WeakMap,c.set(j,q));let dt=q.get(L);dt===void 0&&(dt=a.getUniformBlockIndex(j,L.name),a.uniformBlockBinding(j,dt,dt),q.set(L,dt))}function J(L,j,q){const rt=c.get(j).get(L);l[rt]!==q&&(a.bindBufferBase(a.UNIFORM_BUFFER,rt,q),l[rt]=q)}function ht(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,it={},p={},l={},f=new WeakMap,g=[],y=null,m=!1,v=null,b=null,T=null,w=null,A=null,R=null,x=null,E=new ut(0,0,0),O=0,D=!1,U=null,z=null,X=null,I=null,W=null,Q.set(0,0,a.canvas.width,a.canvas.height),_t.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:bt,disable:Wt,bindFramebuffer:De,drawBuffers:Ut,useProgram:he,setBlending:Ze,setMaterial:Oe,setFlipSided:Mi,setCullFace:Te,setLineWidth:cn,setPolygonOffset:We,setScissorTest:Di,activeTexture:Ii,bindTexture:Ni,unbindTexture:F,compressedTexImage2D:ki,compressedTexImage3D:Se,texImage2D:M,texImage3D:G,pixelStorei:tt,getParameter:st,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Bt,texStorage3D:C,texSubImage2D:we,texSubImage3D:gt,compressedTexSubImage2D:ze,compressedTexSubImage3D:kt,scissor:ot,viewport:pt,reset:ht}}function my(a,t,e,i,n,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d=new Set;let p;const f=new WeakMap,g=new Set,y=new FinalizationRegistry(C=>g.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return m?new OffscreenCanvas(C,M):hr("canvas")}function b(C,M,G){let st=1;const tt=Bt(C);if((tt.width>G||tt.height>G)&&(st=G/Math.max(tt.width,tt.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(st*tt.width),pt=Math.floor(st*tt.height);p===void 0&&(p=v(ot,pt));const K=M?v(ot,pt):p;return K.width=ot,K.height=pt,K.getContext("2d").drawImage(C,0,0,ot,pt),Ft("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+pt+")."),K}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function T(C){return C.generateMipmaps}function w(C){a.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(C,M,G,st,tt,ot=!1){if(C!==null){if(a[C]!==void 0)return a[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt;st&&(pt=t.get("EXT_texture_norm16"),pt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===a.RED&&(G===a.FLOAT&&(K=a.R32F),G===a.HALF_FLOAT&&(K=a.R16F),G===a.UNSIGNED_BYTE&&(K=a.R8),G===a.UNSIGNED_SHORT&&pt&&(K=pt.R16_EXT),G===a.SHORT&&pt&&(K=pt.R16_SNORM_EXT)),M===a.RED_INTEGER&&(G===a.UNSIGNED_BYTE&&(K=a.R8UI),G===a.UNSIGNED_SHORT&&(K=a.R16UI),G===a.UNSIGNED_INT&&(K=a.R32UI),G===a.BYTE&&(K=a.R8I),G===a.SHORT&&(K=a.R16I),G===a.INT&&(K=a.R32I)),M===a.RG&&(G===a.FLOAT&&(K=a.RG32F),G===a.HALF_FLOAT&&(K=a.RG16F),G===a.UNSIGNED_BYTE&&(K=a.RG8),G===a.UNSIGNED_SHORT&&pt&&(K=pt.RG16_EXT),G===a.SHORT&&pt&&(K=pt.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(G===a.UNSIGNED_BYTE&&(K=a.RG8UI),G===a.UNSIGNED_SHORT&&(K=a.RG16UI),G===a.UNSIGNED_INT&&(K=a.RG32UI),G===a.BYTE&&(K=a.RG8I),G===a.SHORT&&(K=a.RG16I),G===a.INT&&(K=a.RG32I)),M===a.RGB_INTEGER&&(G===a.UNSIGNED_BYTE&&(K=a.RGB8UI),G===a.UNSIGNED_SHORT&&(K=a.RGB16UI),G===a.UNSIGNED_INT&&(K=a.RGB32UI),G===a.BYTE&&(K=a.RGB8I),G===a.SHORT&&(K=a.RGB16I),G===a.INT&&(K=a.RGB32I)),M===a.RGBA_INTEGER&&(G===a.UNSIGNED_BYTE&&(K=a.RGBA8UI),G===a.UNSIGNED_SHORT&&(K=a.RGBA16UI),G===a.UNSIGNED_INT&&(K=a.RGBA32UI),G===a.BYTE&&(K=a.RGBA8I),G===a.SHORT&&(K=a.RGBA16I),G===a.INT&&(K=a.RGBA32I)),M===a.RGB&&(G===a.UNSIGNED_SHORT&&pt&&(K=pt.RGB16_EXT),G===a.SHORT&&pt&&(K=pt.RGB16_SNORM_EXT),G===a.UNSIGNED_INT_5_9_9_9_REV&&(K=a.RGB9_E5),G===a.UNSIGNED_INT_10F_11F_11F_REV&&(K=a.R11F_G11F_B10F)),M===a.RGBA){const J=ot?No:ie.getTransfer(tt);G===a.FLOAT&&(K=a.RGBA32F),G===a.HALF_FLOAT&&(K=a.RGBA16F),G===a.UNSIGNED_BYTE&&(K=J===ce?a.SRGB8_ALPHA8:a.RGBA8),G===a.UNSIGNED_SHORT&&pt&&(K=pt.RGBA16_EXT),G===a.SHORT&&pt&&(K=pt.RGBA16_SNORM_EXT),G===a.UNSIGNED_SHORT_4_4_4_4&&(K=a.RGBA4),G===a.UNSIGNED_SHORT_5_5_5_1&&(K=a.RGB5_A1)}return(K===a.R16F||K===a.R32F||K===a.RG16F||K===a.RG32F||K===a.RGBA16F||K===a.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(C,M){let G;return C?M===null||M===wn||M===ca?G=a.DEPTH24_STENCIL8:M===an?G=a.DEPTH32F_STENCIL8:M===lr&&(G=a.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wn||M===ca?G=a.DEPTH_COMPONENT24:M===an?G=a.DEPTH_COMPONENT32F:M===lr&&(G=a.DEPTH_COMPONENT16),G}function E(C,M){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==ue&&C.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function O(C){const M=new WeakRef(C);i.get(C).__ref=M,g.add(M),y.register(C,M,M)}function D(C){const M=i.get(C).__ref;M!==void 0&&(g.delete(M),y.unregister(M))}function U(C){X(C.target)}function z(C){I(C.target)}function X(C){C.removeEventListener("dispose",U),D(C),Z(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",z),D(C),nt(C)}function W(){for(const C of g){const M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):X(M))}g.clear(),d.clear()}function Z(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,st=f.get(G);if(st){const tt=st[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(C),Object.keys(st).length===0&&f.delete(G)}i.remove(C)}function V(C){const M=i.get(C);a.deleteTexture(M.__webglTexture);const G=C.source,st=f.get(G);delete st[M.__cacheKey],r.memory.textures--}function nt(C){const M=i.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();const G=C.depthTexture;if(G&&G.renderTarget===C&&X(G),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ot=0;ot<M.__webglFramebuffer[tt].length;ot++)a.deleteFramebuffer(M.__webglFramebuffer[tt][ot]);else a.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)a.deleteFramebuffer(M.__webglFramebuffer[tt]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const st=C.textures;for(let tt=0,ot=st.length;tt<ot;tt++){const pt=i.get(st[tt]);pt.__webglTexture&&(a.deleteTexture(pt.__webglTexture),r.memory.textures--),i.remove(st[tt])}i.remove(C)}let Y=0;function et(){Y=0}function it(){return Y}function Rt(C){Y=C}function Ht(){const C=Y;return C>=n.maxTextures&&Ft("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,C}function Q(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function _t(C,M){const G=i.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const st=C.image;if(st===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(a.TEXTURE_2D,G.__webglTexture,a.TEXTURE0+M)}function wt(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Oe(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(a.TEXTURE_2D_ARRAY,G.__webglTexture,a.TEXTURE0+M)}function Nt(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Oe(G,C,M);return}e.bindTexture(a.TEXTURE_3D,G.__webglTexture,a.TEXTURE0+M)}function bt(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Mi(G,C,M);return}e.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture,a.TEXTURE0+M)}const Wt={[or]:a.REPEAT,[Hi]:a.CLAMP_TO_EDGE,[dc]:a.MIRRORED_REPEAT},De={[ue]:a.NEAREST,[T0]:a.NEAREST_MIPMAP_NEAREST,[_r]:a.NEAREST_MIPMAP_LINEAR,[ti]:a.LINEAR,[hl]:a.LINEAR_MIPMAP_NEAREST,[On]:a.LINEAR_MIPMAP_LINEAR},Ut={[P0]:a.NEVER,[wu]:a.ALWAYS,[L0]:a.LESS,[Mu]:a.LEQUAL,[D0]:a.EQUAL,[Su]:a.GEQUAL,[I0]:a.GREATER,[N0]:a.NOTEQUAL};function he(C,M){if(M.type===an&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===hl||M.magFilter===_r||M.magFilter===On||M.minFilter===ti||M.minFilter===hl||M.minFilter===_r||M.minFilter===On)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,Wt[M.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,Wt[M.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,Wt[M.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,De[M.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,De[M.minFilter]),M.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ue||M.minFilter!==_r&&M.minFilter!==On||M.type===an&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");a.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",U),O(M));const st=M.source;let tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));const ot=Q(M);if(ot!==C.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,G=!0),tt[ot].usedTimes++;const pt=tt[C.__cacheKey];pt!==void 0&&(tt[C.__cacheKey].usedTimes--,pt.usedTimes===0&&V(M)),C.__cacheKey=ot,C.__webglTexture=tt[ot].texture}return G}function jt(C,M,G){return Math.floor(Math.floor(C/G)/M)}function Ze(C,M,G,st){const ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,G,st,M.data);else{ot.sort((L,j)=>L.start-j.start);let pt=0;for(let L=1;L<ot.length;L++){const j=ot[pt],q=ot[L],dt=j.start+j.count,rt=jt(q.start,M.width,4),lt=jt(j.start,M.width,4);q.start<=dt+1&&rt===lt&&jt(q.start+q.count-1,M.width,4)===rt?j.count=Math.max(j.count,q.start+q.count-j.start):(++pt,ot[pt]=q)}ot.length=pt+1;const K=e.getParameter(a.UNPACK_ROW_LENGTH),J=e.getParameter(a.UNPACK_SKIP_PIXELS),ht=e.getParameter(a.UNPACK_SKIP_ROWS);e.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let L=0,j=ot.length;L<j;L++){const q=ot[L],dt=Math.floor(q.start/4),rt=Math.ceil(q.count/4),lt=dt%M.width,Pt=Math.floor(dt/M.width),Yt=rt,at=1;e.pixelStorei(a.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(a.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(a.TEXTURE_2D,0,lt,Pt,Yt,at,G,st,M.data)}C.clearUpdateRanges(),e.pixelStorei(a.UNPACK_ROW_LENGTH,K),e.pixelStorei(a.UNPACK_SKIP_PIXELS,J),e.pixelStorei(a.UNPACK_SKIP_ROWS,ht)}}function Oe(C,M,G){let st=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=a.TEXTURE_3D);const tt=ge(C,M),ot=M.source;e.bindTexture(st,C.__webglTexture,a.TEXTURE0+G);const pt=i.get(ot);if(ot.version!==pt.__version||tt===!0){if(e.activeTexture(a.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const at=ie.getPrimaries(ie.workingColorSpace),Dt=M.colorSpace===jn?null:ie.getPrimaries(M.colorSpace),Xt=M.colorSpace===jn||at===Dt?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let J=b(M.image,!1,n.maxTextureSize);J=kt(M,J);const ht=s.convert(M.format,M.colorSpace),L=s.convert(M.type);let j=R(M.internalFormat,ht,L,M.normalized,M.colorSpace,M.isVideoTexture);he(st,M);let q;const dt=M.mipmaps,rt=M.isVideoTexture!==!0,lt=pt.__version===void 0||tt===!0,Pt=ot.dataReady,Yt=E(M,J);if(M.isDepthTexture)j=x(M.format===es,M.type),lt&&(rt?e.texStorage2D(a.TEXTURE_2D,1,j,J.width,J.height):e.texImage2D(a.TEXTURE_2D,0,j,J.width,J.height,0,ht,L,null));else if(M.isDataTexture)if(dt.length>0){rt&&lt&&e.texStorage2D(a.TEXTURE_2D,Yt,j,dt[0].width,dt[0].height);for(let at=0,Dt=dt.length;at<Dt;at++)q=dt[at],rt?Pt&&e.texSubImage2D(a.TEXTURE_2D,at,0,0,q.width,q.height,ht,L,q.data):e.texImage2D(a.TEXTURE_2D,at,j,q.width,q.height,0,ht,L,q.data);M.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(a.TEXTURE_2D,Yt,j,J.width,J.height),Pt&&Ze(M,J,ht,L)):e.texImage2D(a.TEXTURE_2D,0,j,J.width,J.height,0,ht,L,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,Yt,j,dt[0].width,dt[0].height,J.depth);for(let at=0,Dt=dt.length;at<Dt;at++)if(q=dt[at],M.format!==rn)if(ht!==null)if(rt){if(Pt)if(M.layerUpdates.size>0){const Xt=af(q.width,q.height,M.format,M.type);for(const xt of M.layerUpdates){const de=q.data.subarray(xt*Xt/q.data.BYTES_PER_ELEMENT,(xt+1)*Xt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,at,0,0,xt,q.width,q.height,1,ht,de)}}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,J.depth,ht,q.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,at,j,q.width,q.height,J.depth,0,q.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Pt&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,J.depth,ht,L,q.data):e.texImage3D(a.TEXTURE_2D_ARRAY,at,j,q.width,q.height,J.depth,0,ht,L,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(a.TEXTURE_2D,Yt,j,dt[0].width,dt[0].height);for(let at=0,Dt=dt.length;at<Dt;at++)q=dt[at],M.format!==rn?ht!==null?rt?Pt&&e.compressedTexSubImage2D(a.TEXTURE_2D,at,0,0,q.width,q.height,ht,q.data):e.compressedTexImage2D(a.TEXTURE_2D,at,j,q.width,q.height,0,q.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Pt&&e.texSubImage2D(a.TEXTURE_2D,at,0,0,q.width,q.height,ht,L,q.data):e.texImage2D(a.TEXTURE_2D,at,j,q.width,q.height,0,ht,L,q.data)}else if(M.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,Yt,j,J.width,J.height,J.depth),Pt)if(M.layerUpdates.size>0){const at=af(J.width,J.height,M.format,M.type);for(const Dt of M.layerUpdates){const Xt=J.data.subarray(Dt*at/J.data.BYTES_PER_ELEMENT,(Dt+1)*at/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Dt,J.width,J.height,1,ht,L,Xt)}M.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,L,J.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,ht,L,J.data);else if(M.isData3DTexture)rt?(lt&&e.texStorage3D(a.TEXTURE_3D,Yt,j,J.width,J.height,J.depth),Pt&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,L,J.data)):e.texImage3D(a.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,ht,L,J.data);else if(M.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(a.TEXTURE_2D,Yt,j,J.width,J.height);else{let at=J.width,Dt=J.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(a.TEXTURE_2D,Xt,j,at,Dt,0,ht,L,null),at>>=1,Dt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const at=a.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),J.parentNode!==at){at.appendChild(J),d.add(M),at.onpaint=Dt=>{const Xt=Dt.changedElements;for(const xt of d)Xt.includes(xt.image)&&(xt.needsUpdate=!0)},at.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,J);else{const Xt=a.RGBA,xt=a.RGBA,de=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Xt,xt,de,J)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(dt.length>0){if(rt&&lt){const at=Bt(dt[0]);e.texStorage2D(a.TEXTURE_2D,Yt,j,at.width,at.height)}for(let at=0,Dt=dt.length;at<Dt;at++)q=dt[at],rt?Pt&&e.texSubImage2D(a.TEXTURE_2D,at,0,0,ht,L,q):e.texImage2D(a.TEXTURE_2D,at,j,ht,L,q);M.generateMipmaps=!1}else if(rt){if(lt){const at=Bt(J);e.texStorage2D(a.TEXTURE_2D,Yt,j,at.width,at.height)}Pt&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,ht,L,J)}else e.texImage2D(a.TEXTURE_2D,0,j,ht,L,J);T(M)&&M.mipmapsAutoUpdate===!0&&w(st),pt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Mi(C,M,G){if(M.image.length!==6)return;const st=ge(C,M),tt=M.source;e.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+G);const ot=i.get(tt);if(tt.version!==ot.__version||st===!0){e.activeTexture(a.TEXTURE0+G);const pt=ie.getPrimaries(ie.workingColorSpace),K=M.colorSpace===jn?null:ie.getPrimaries(M.colorSpace),J=M.colorSpace===jn||pt===K?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ht=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,j=[];for(let xt=0;xt<6;xt++)!ht&&!L?j[xt]=b(M.image[xt],!0,n.maxCubemapSize):j[xt]=L?M.image[xt].image:M.image[xt],j[xt]=kt(M,j[xt]);const q=j[0],dt=s.convert(M.format,M.colorSpace),rt=s.convert(M.type);let lt=R(M.internalFormat,dt,rt,M.normalized,M.colorSpace);const Pt=M.isVideoTexture!==!0,Yt=ot.__version===void 0||st===!0,at=tt.dataReady;let Dt=E(M,q);he(a.TEXTURE_CUBE_MAP,M);let Xt;if(M.isDepthTexture){if(lt=x(M.format===es,M.type),Yt)if(Pt)e.texStorage2D(a.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let xt=0;xt<6;xt++)e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,q.width,q.height,0,dt,rt,null)}else if(ht){Pt&&Yt&&e.texStorage2D(a.TEXTURE_CUBE_MAP,Dt,lt,q.width,q.height);for(let xt=0;xt<6;xt++){Xt=j[xt].mipmaps;for(let de=0;de<Xt.length;de++){const $e=Xt[de];M.format!==rn?dt!==null?Pt?at&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,0,0,$e.width,$e.height,dt,$e.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,lt,$e.width,$e.height,0,$e.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?at&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,0,0,$e.width,$e.height,dt,rt,$e.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,lt,$e.width,$e.height,0,dt,rt,$e.data)}}}else{if(Xt=M.mipmaps,Pt&&Yt){Xt.length>0&&Dt++;const xt=Bt(j[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,Dt,lt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(L){Pt?at&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,j[xt].width,j[xt].height,dt,rt,j[xt].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,j[xt].width,j[xt].height,0,dt,rt,j[xt].data);for(let de=0;de<Xt.length;de++){const Wn=Xt[de].image[xt].image;Pt?at&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,0,0,Wn.width,Wn.height,dt,rt,Wn.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,lt,Wn.width,Wn.height,0,dt,rt,Wn.data)}}else{Pt?at&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,dt,rt,j[xt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,dt,rt,j[xt]);for(let de=0;de<Xt.length;de++){const $e=Xt[de];Pt?at&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,0,0,dt,rt,$e.image[xt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,lt,dt,rt,$e.image[xt])}}}T(M)&&M.mipmapsAutoUpdate===!0&&w(a.TEXTURE_CUBE_MAP),ot.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Te(C,M,G,st,tt,ot){const pt=s.convert(G.format,G.colorSpace),K=s.convert(G.type),J=R(G.internalFormat,pt,K,G.normalized,G.colorSpace),ht=i.get(M),L=i.get(G);if(L.__renderTarget=M,!ht.__hasExternalTextures){const j=Math.max(1,M.width>>ot),q=Math.max(1,M.height>>ot);tt===a.TEXTURE_3D||tt===a.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,J,j,q,M.depth,0,pt,K,null):e.texImage2D(tt,ot,J,j,q,0,pt,K,null)}e.bindFramebuffer(a.FRAMEBUFFER,C),gt(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,st,tt,L.__webglTexture,0,we(M)):(tt===a.TEXTURE_2D||tt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,st,tt,L.__webglTexture,ot),e.bindFramebuffer(a.FRAMEBUFFER,null)}function cn(C,M,G){if(a.bindRenderbuffer(a.RENDERBUFFER,C),M.depthBuffer){const st=M.depthTexture,tt=st&&st.isDepthTexture?st.type:null,ot=x(M.stencilBuffer,tt),pt=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;gt(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we(M),ot,M.width,M.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,we(M),ot,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ot,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,pt,a.RENDERBUFFER,C)}else{const st=M.textures;for(let tt=0;tt<st.length;tt++){const ot=st[tt],pt=s.convert(ot.format,ot.colorSpace),K=s.convert(ot.type),J=R(ot.internalFormat,pt,K,ot.normalized,ot.colorSpace);gt(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we(M),J,M.width,M.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,we(M),J,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,J,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function We(C,M,G){const st=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(a.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=i.get(M.depthTexture);tt.__renderTarget=M;const ot=st?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||ot.width!==M.width||ot.height!==M.height)&&(ot.width=M.width,ot.height=M.height,M.depthTexture.needsUpdate=!0),st?bt(M.depthTexture,0):_t(M.depthTexture,0);const pt=tt.__webglTexture,K=we(M),J=st?a.TEXTURE_CUBE_MAP_POSITIVE_X+G:a.TEXTURE_2D,ht=M.depthTexture.format===es?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===ss)gt(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ht,J,pt,0,K):a.framebufferTexture2D(a.FRAMEBUFFER,ht,J,pt,0);else if(M.depthTexture.format===es)gt(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ht,J,pt,0,K):a.framebufferTexture2D(a.FRAMEBUFFER,ht,J,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Di(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const st=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",tt)};st.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=st}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let st=0;st<6;st++)We(M.__webglFramebuffer[st],C,st);else C.texture.mipmaps.length>0?We(M.__webglFramebuffer[0],C,0):We(M.__webglFramebuffer,C,0);else if(G){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=a.createRenderbuffer(),cn(M.__webglDepthbuffer[st],C,!1);else{const tt=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[st];a.bindRenderbuffer(a.RENDERBUFFER,ot),a.framebufferRenderbuffer(a.FRAMEBUFFER,tt,a.RENDERBUFFER,ot)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),cn(M.__webglDepthbuffer,C,!1);else{const tt=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ot),a.framebufferRenderbuffer(a.FRAMEBUFFER,tt,a.RENDERBUFFER,ot)}e.bindFramebuffer(a.FRAMEBUFFER,null)}function Ii(C,M,G){const st=i.get(C);M!==void 0&&Te(st.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),G!==void 0&&Di(C)}function Ni(C){const M=C.texture,G=i.get(C),st=i.get(M);C.addEventListener("dispose",z),O(C);const tt=C.textures,ot=C.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(st.__webglTexture===void 0&&(st.__webglTexture=a.createTexture()),st.__version=M.version,r.memory.textures++),ot){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let J=0;J<M.mipmaps.length;J++)G.__webglFramebuffer[K][J]=a.createFramebuffer()}else G.__webglFramebuffer[K]=a.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)G.__webglFramebuffer[K]=a.createFramebuffer()}else G.__webglFramebuffer=a.createFramebuffer();if(pt)for(let K=0,J=tt.length;K<J;K++){const ht=i.get(tt[K]);ht.__webglTexture===void 0&&(ht.__webglTexture=a.createTexture(),r.memory.textures++)}if(C.samples>0&&gt(C)===!1){G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){const J=tt[K];G.__webglColorRenderbuffer[K]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const ht=s.convert(J.format,J.colorSpace),L=s.convert(J.type),j=R(J.internalFormat,ht,L,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),q=we(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,q,j,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+K,a.RENDERBUFFER,G.__webglColorRenderbuffer[K])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),cn(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ot){e.bindTexture(a.TEXTURE_CUBE_MAP,st.__webglTexture),he(a.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Te(G.__webglFramebuffer[K][J],C,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else Te(G.__webglFramebuffer[K],C,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);T(M)?w(a.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let K=0,J=tt.length;K<J;K++){const ht=tt[K],L=i.get(ht);let j=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),he(j,ht),Te(G.__webglFramebuffer,C,ht,a.COLOR_ATTACHMENT0+K,j,0),T(ht)&&w(j)}e.unbindTexture()}else{let K=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),he(K,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Te(G.__webglFramebuffer[J],C,M,a.COLOR_ATTACHMENT0,K,J);else Te(G.__webglFramebuffer,C,M,a.COLOR_ATTACHMENT0,K,0);T(M)?w(K):M.mipmaps.length>0&&a.texParameteri(K,a.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Di(C)}function F(C){const M=C.textures;for(let G=0,st=M.length;G<st;G++){const tt=M[G];if(T(tt)&&tt.mipmapsAutoUpdate===!0){const ot=A(C),pt=i.get(tt).__webglTexture;e.bindTexture(ot,pt),w(ot),e.unbindTexture()}}}const ki=[];function Se(C){if(C.samples>0){if(gt(C)===!1){const M=C.textures,G=C.width,st=C.height;let tt=a.COLOR_BUFFER_BIT;const ot=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pt=i.get(C),K=M.length>1;if(K)for(let ht=0;ht<M.length;ht++)e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ht=0;ht<M.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=a.STENCIL_BUFFER_BIT)),K){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const L=i.get(M[ht]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,L,0)}a.blitFramebuffer(0,0,G,st,0,0,G,st,tt,a.NEAREST),l===!0&&(ki.length=0,ki.push(a.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ki.push(ot),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ki))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),K)for(let ht=0;ht<M.length;ht++){e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const L=i.get(M[ht]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.TEXTURE_2D,L,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const M=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function we(C){return Math.min(n.maxSamples,C.samples)}function gt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ze(C){const M=r.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function kt(C,M){const G=C.colorSpace,st=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Io&&G!==jn&&(ie.getTransfer(G)===ce?(st!==rn||tt!==Ci)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",G)),M}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ht,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=Rt,this.setTexture2D=_t,this.setTexture2DArray=wt,this.setTexture3D=Nt,this.setTextureCube=bt,this.rebindTextures=Ii,this.setupRenderTarget=Ni,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Di,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=gt,this.dispose=W}function gy(a,t){function e(i,n=jn){let s;const r=ie.getTransfer(n);if(i===Ci)return a.UNSIGNED_BYTE;if(i===Lh)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return a.UNSIGNED_SHORT_5_5_5_1;if(i===xu)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===_u)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===gu)return a.BYTE;if(i===vu)return a.SHORT;if(i===lr)return a.UNSIGNED_SHORT;if(i===Ph)return a.INT;if(i===wn)return a.UNSIGNED_INT;if(i===an)return a.FLOAT;if(i===_i)return a.HALF_FLOAT;if(i===bu)return a.ALPHA;if(i===yu)return a.RGB;if(i===rn)return a.RGBA;if(i===ss)return a.DEPTH_COMPONENT;if(i===es)return a.DEPTH_STENCIL;if(i===Ih)return a.RED;if(i===Nh)return a.RED_INTEGER;if(i===Ms)return a.RG;if(i===kh)return a.RG_INTEGER;if(i===Uh)return a.RGBA_INTEGER;if(i===ro||i===oo||i===lo||i===co)if(r===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===uc||i===pc||i===mc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===vc||i===xc||i===_c||i===bc||i===Lo||i===yc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===vc)return r===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_c)return s.COMPRESSED_R11_EAC;if(i===bc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Lo)return s.COMPRESSED_RG11_EAC;if(i===yc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===Sc||i===wc||i===Ec||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Nc||i===kc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uc||i===Fc||i===Oc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Uc)return r===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zc||i===Bc||i===Do||i===Gc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===zc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:e}}const vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`;class _y{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ou(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xi({vertexShader:vy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class by extends Es{constructor(t,e){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new _y,v={},b=e.getContextAttributes();let T=null,w=null;const A=[],R=[],x=new At;let E=null,O=null;const D=new zi;D.viewport=new Ce;const U=new zi;U.viewport=new Ce;const z=[D,U],X=new Cg;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _t=A[Q];return _t===void 0&&(_t=new _l,A[Q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Q){let _t=A[Q];return _t===void 0&&(_t=new _l,A[Q]=_t),_t.getGripSpace()},this.getHand=function(Q){let _t=A[Q];return _t===void 0&&(_t=new _l,A[Q]=_t),_t.getHandSpace()};function Z(Q){const _t=R.indexOf(Q.inputSource);if(_t===-1)return;const wt=A[_t];wt!==void 0&&(wt.update(Q.inputSource,Q.frame,c||r),wt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<A.length;Q++){const _t=R[Q];_t!==null&&(R[Q]=null,A[Q].disconnect(_t))}I=null,W=null,m.reset();for(const Q in v)delete v[Q];if(t.setRenderTarget(T),f=null,p=null,d=null,n=null,w=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),O!==null){const Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",V),n.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Nt=null,bt=null;b.depth&&(bt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=b.stencil?es:ss,Nt=b.stencil?ca:wn);const Wt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Wt),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new bi(p.textureWidth,p.textureHeight,{format:rn,type:Ci,depthTexture:new ha(p.textureWidth,p.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const wt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,wt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new bi(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),Ht.setContext(n),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Q){for(let _t=0;_t<Q.removed.length;_t++){const wt=Q.removed[_t],Nt=R.indexOf(wt);Nt>=0&&(R[Nt]=null,A[Nt].disconnect(wt))}for(let _t=0;_t<Q.added.length;_t++){const wt=Q.added[_t];let Nt=R.indexOf(wt);if(Nt===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=R.length){R.push(wt),Nt=Wt;break}else if(R[Wt]===null){R[Wt]=wt,Nt=Wt;break}if(Nt===-1)break}const bt=A[Nt];bt&&bt.connect(wt)}}function Y(Q,_t){_t===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_t.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let _t=Q.near,wt=Q.far;m.texture!==null&&(m.depthNear>0&&(_t=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),X.near=U.near=D.near=_t,X.far=U.far=D.far=wt,(I!==X.near||W!==X.far)&&(n.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,W=X.far),X.layers.mask=Q.layers.mask|6,D.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;const Nt=Q.parent,bt=X.cameras;Y(X,Nt);for(let Wt=0;Wt<bt.length;Wt++)Y(bt[Wt],Nt);X.projectionMatrix.copy(D.projectionMatrix),X.projectionMatrixInverse.copy(D.projectionMatrixInverse),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,X,Nt)};function et(Q,_t,wt){wt===null?Q.matrix.copy(_t.matrixWorld):(Q.matrix.copy(wt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_t.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(Q){return v[Q]};let it=null;function Rt(Q,_t){if(h=_t.getViewerPose(c||r),g=_t,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let Nt=!1;wt.length!==X.cameras.length&&(X.cameras.length=0,Nt=!0);for(let Ut=0;Ut<wt.length;Ut++){const he=wt[Ut];let ge=null;if(f!==null)ge=f.getViewport(he);else{const Ze=d.getViewSubImage(p,he);ge=Ze.viewport,Ut===0&&(t.setRenderTargetTextures(w,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(w))}let jt=z[Ut];jt===void 0&&(jt=new zi,jt.layers.enable(Ut),jt.viewport=new Ce,z[Ut]=jt),jt.matrix.fromArray(he.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(he.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ge.x,ge.y,ge.width,ge.height),Ut===0&&(X.matrix.copy(jt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Nt===!0&&X.cameras.push(jt)}const bt=n.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Ut=d.getDepthInformation(wt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,n.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Ut=0;Ut<wt.length;Ut++){const he=wt[Ut].camera;if(he){let ge=v[he];ge||(ge=new Ou,v[he]=ge);const jt=d.getCameraImage(he);ge.sourceTexture=jt}}}}for(let wt=0;wt<A.length;wt++){const Nt=R[wt],bt=A[wt];Nt!==null&&bt!==void 0&&bt.update(Nt,_t,c||r)}it&&it(Q,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),g=null}const Ht=new Wu;Ht.setAnimationLoop(Rt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const yy=new re,tp=new Gt;tp.set(-1,0,0,0,1,0,0,0,1);function My(a,t){function e(m,v){m.matrixAutoUpdate===!0&&m.updateMatrix(),v.value.copy(m.matrix)}function i(m,v){v.color.getRGB(m.fogColor.value,Bu(a)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function n(m,v,b,T,w){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?s(m,v):v.isMeshLambertMaterial?(s(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(s(m,v),d(m,v)):v.isMeshPhongMaterial?(s(m,v),h(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(s(m,v),p(m,v),v.isMeshPhysicalMaterial&&f(m,v,w)):v.isMeshMatcapMaterial?(s(m,v),g(m,v)):v.isMeshDepthMaterial?s(m,v):v.isMeshDistanceMaterial?(s(m,v),y(m,v)):v.isMeshNormalMaterial?s(m,v):v.isLineBasicMaterial?(r(m,v),v.isLineDashedMaterial&&o(m,v)):v.isPointsMaterial?l(m,v,b,T):v.isSpriteMaterial?c(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map,e(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,e(v.alphaMap,m.alphaMapTransform)),v.bumpMap&&(m.bumpMap.value=v.bumpMap,e(v.bumpMap,m.bumpMapTransform),m.bumpScale.value=v.bumpScale,v.side===ci&&(m.bumpScale.value*=-1)),v.normalMap&&(m.normalMap.value=v.normalMap,e(v.normalMap,m.normalMapTransform),m.normalScale.value.copy(v.normalScale),v.side===ci&&m.normalScale.value.negate()),v.displacementMap&&(m.displacementMap.value=v.displacementMap,e(v.displacementMap,m.displacementMapTransform),m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,m.emissiveMapTransform)),v.specularMap&&(m.specularMap.value=v.specularMap,e(v.specularMap,m.specularMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);const b=t.get(v),T=b.envMap,w=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tp),m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap&&(m.lightMap.value=v.lightMap,m.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,m.lightMapTransform)),v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,m.aoMapTransform))}function r(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,v.map&&(m.map.value=v.map,e(v.map,m.mapTransform))}function o(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function l(m,v,b,T){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*b,m.scale.value=T*.5,v.map&&(m.map.value=v.map,e(v.map,m.uvTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,e(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function c(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map,e(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,e(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function h(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function d(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function p(m,v){m.metalness.value=v.metalness,v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,m.metalnessMapTransform)),m.roughness.value=v.roughness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,m.roughnessMapTransform)),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function f(m,v,b){m.ior.value=v.ior,v.diffuseRoughness>0&&(m.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=v.diffuseRoughnessMap,e(v.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,m.sheenColorMapTransform)),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,m.sheenRoughnessMapTransform))),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,m.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(m.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ci&&m.clearcoatNormalScale.value.negate())),v.dispersion>0&&(m.dispersion.value=v.dispersion),v.retroreflectivity>0&&(m.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,m.iridescenceMapTransform)),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,m.transmissionMapTransform)),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(m.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(m.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,m.specularColorMapTransform)),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,v){v.matcap&&(m.matcap.value=v.matcap)}function y(m,v){const b=t.get(v).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sy(a,t,e,i){let n={},s={};function r(b,T){const w=T.program;i.uniformBlockBinding(b,w,n[b.id])}function o(b,T){let w=n[b.id];w===void 0&&(g(b),w=l(b),n[b.id]=w,b.addEventListener("dispose",m));const A=T.program;i.updateUBOMapping(b,A);const R=t.render.frame;s[b.id]!==R&&(c(b),s[b.id]=R)}function l(b){const T=a.createBuffer(),w=b.__size,A=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,w,A),a.bindBuffer(a.UNIFORM_BUFFER,null),T}function c(b){const T=n[b.id],w=b.uniforms,A=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let R=0,x=w.length;R<x;R++){const E=w[R];if(Array.isArray(E))for(let O=0,D=E.length;O<D;O++)h(E[O],R,O,A);else h(E,R,0,A)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function h(b,T,w,A){if(p(b,T,w,A)===!0){const R=b.__offset,x=b.value;if(Array.isArray(x)){let E=0;for(let O=0;O<x.length;O++){const D=x[O],U=y(D,!0);d(D,b.__data,E),E+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,b.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,R,b.__data)}}function d(b,T,w){typeof b=="number"||typeof b=="boolean"?T[w]=b:b.isMatrix3?(T[w]=b.elements[0],T[w+1]=b.elements[1],T[w+2]=b.elements[2],T[w+3]=0,T[w+4]=b.elements[3],T[w+5]=b.elements[4],T[w+6]=b.elements[5],T[w+7]=0,T[w+8]=b.elements[6],T[w+9]=b.elements[7],T[w+10]=b.elements[8],T[w+11]=0):ArrayBuffer.isView(b)?T.set(b.subarray(0,T.length-w),w):b.toArray(T,w)}function p(b,T,w,A){const R=b.value,x=T+"_"+w;if(Array.isArray(R)){A[x]===void 0&&(A[x]=[]);const E=A[x];let O=!1;for(let D=0;D<R.length;D++)f(R[D],E,D)===!0&&(O=!0);return O}return f(R,A,x)}function f(b,T,w){if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:ArrayBuffer.isView(b)?T[w]=b.slice():T[w]=b.clone(),!0;{const A=T[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function g(b){const T=b.uniforms;let w=0;const A=16;for(let x=0,E=T.length;x<E;x++){const O=Array.isArray(T[x])?T[x]:[T[x]];for(let D=0,U=O.length;D<U;D++){const z=O[D],X=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(T[x])||Array.isArray(z.value);let W=w;for(let V=0,nt=X.length;V<nt;V++){const Y=X[V],et=y(Y,I),it=w%A,Rt=it%et.boundary,Ht=it+Rt;w+=Rt,Ht!==0&&A-Ht<et.storage&&(w+=A-Ht),V===0&&(W=w),w+=et.storage}const Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((w-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}const R=w%A;return R>0&&(w+=A-R),b.__size=w,b.__cache={},this}function y(b,T){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=16,w.storage=48):b.isMatrix4?(w.boundary=16,w.storage=64):b.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",b),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(b){const T=b.target;T.removeEventListener("dispose",m),a.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function v(){for(const b in n)a.deleteBuffer(n[b]);n={},s={}}return{bind:r,update:o,dispose:v}}const wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function Ey(){return dn===null&&(dn=new Bh(wy,16,16,Ms,_i),dn.name="DFG_LUT",dn.minFilter=ti,dn.magFilter=ti,dn.wrapS=Hi,dn.wrapT=Hi,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class Ty{constructor(t={}){const{canvas:e=U0(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:f=Ci}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const y=f,m=new Set([Uh,kh,Nh]),v=new Set([Ci,wn,lr,ca,Lh,Dh]),b=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let A=null,R=null;const x=[],E=[];let O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,z=null,X=null,I=null,W=null;this._outputColorSpace=be;let Z=0,V=0,nt=null,Y=-1,et=null;const it=new Ce,Rt=new Ce;let Ht=null;const Q=new ut(0);let _t=0,wt=e.width,Nt=e.height,bt=1,Wt=null,De=null;const Ut=new Ce(0,0,wt,Nt),he=new Ce(0,0,wt,Nt);let ge=!1;const jt=new dr,Ze=new Gh;let Oe=!1,Mi=!1;const Te=new re,cn=new k,We=new Ce,Di={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ii=!1;function Ni(){return nt===null?bt:1}let F=i;function ki(S,N){return e.getContext(S,N)}let Se,we,gt,ze,kt,Bt,C,M,G,st,tt,ot,pt,K,J,ht,L,j,q,dt,rt,lt,Pt;try{const S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sh}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),F===null){const N="webgl2";if(F=ki(N,S),F===null)throw ki(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(S){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ae("WebGLRenderer: "+S.message),S}function Yt(){Se=new C_(F),Se.init(),rt=new gy(F,Se),we=new x_(F,Se,t,rt),gt=new py(F,Se),we.reversedDepthBuffer&&p&&gt.buffers.depth.setReversed(!0),X=F.createFramebuffer(),I=F.createFramebuffer(),W=F.createFramebuffer(),ze=new D_(F),kt=new ty,Bt=new my(F,Se,gt,kt,we,rt,ze),C=new R_(D),M=new Ng(F),lt=new g_(F,M),G=new P_(F,M,ze,lt),st=new N_(F,G,M,lt,ze),j=new I_(F,we,Bt),J=new __(kt),tt=new jb(D,C,Se,we,lt,J),ot=new My(D,kt),pt=new iy,K=new ly(Se),L=new m_(D,C,gt,st,g,l),ht=new uy(D,st,we),Pt=new Sy(F,ze,we,gt),q=new v_(F,Se,ze),dt=new L_(F,Se,ze),ze.programs=tt.programs,D.capabilities=we,D.extensions=Se,D.properties=kt,D.renderLists=pt,D.shadowMap=ht,D.state=gt,D.info=ze}y!==Ci&&(O=new U_(y,e.width,e.height,o,n,s));const at=new by(D,F);this.xr=at,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(S){S!==void 0&&(bt=S,this.setSize(wt,Nt,!1))},this.getSize=function(S){return S.set(wt,Nt)},this.setSize=function(S,N,$=!0){if(at.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=S,Nt=N,e.width=Math.floor(S*bt),e.height=Math.floor(N*bt),$===!0&&(e.style.width=S+"px",e.style.height=N+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(wt*bt,Nt*bt).floor()},this.setDrawingBufferSize=function(S,N,$){wt=S,Nt=N,bt=$,e.width=Math.floor(S*$),e.height=Math.floor(N*$),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(y===Ci){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(it)},this.getViewport=function(S){return S.copy(Ut)},this.setViewport=function(S,N,$,B){S.isVector4?Ut.set(S.x,S.y,S.z,S.w):Ut.set(S,N,$,B),gt.viewport(it.copy(Ut).multiplyScalar(Ni()).round())},this.getScissor=function(S){return S.copy(he)},this.setScissor=function(S,N,$,B){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,N,$,B),gt.scissor(Rt.copy(he).multiplyScalar(Ni()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){gt.setScissorTest(ge=S)},this.setOpaqueSort=function(S){Wt=S},this.setTransparentSort=function(S){De=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,$=!0){let B=0;if(S){let H=!1;if(nt!==null){const mt=nt.texture.format;H=m.has(mt)}if(H){const mt=nt.texture.type,St=v.has(mt),ft=L.getClearColor(),yt=L.getClearAlpha(),Ct=ft.r,Vt=ft.g,te=ft.b;St?(b[0]=Ct,b[1]=Vt,b[2]=te,b[3]=yt,F.clearBufferuiv(F.COLOR,0,b)):(T[0]=Ct,T[1]=Vt,T[2]=te,T[3]=yt,F.clearBufferiv(F.COLOR,0,T))}else B|=F.COLOR_BUFFER_BIT}N&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),L.dispose(),pt.dispose(),K.dispose(),Bt.dispose(),kt.dispose(),C.dispose(),st.dispose(),G.dispose(),lt.dispose(),Pt.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",rd),at.removeEventListener("sessionend",od),os.stop()};function Dt(S){S.preventDefault(),ko("WebGLRenderer: Context Lost."),U=!0}function Xt(){ko("WebGLRenderer: Context Restored."),U=!1;const S=ze.autoReset,N=ht.enabled,$=ht.autoUpdate,B=ht.needsUpdate,H=ht.type;Yt(),ze.autoReset=S,ht.enabled=N,ht.autoUpdate=$,ht.needsUpdate=B,ht.type=H}function xt(S){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){const N=S.target;N.removeEventListener("dispose",de),$e(N)}function $e(S){Wn(S),kt.remove(S)}function Wn(S){const N=kt.get(S).programs;N!==void 0&&(N.forEach(function($){tt.releaseProgram($)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,$,B,H,mt){N===null&&(N=Di);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,ft=jm(S,N,$,B,H);gt.setMaterial(B,St);let yt=$.index,Ct=1;if(B.wireframe===!0){if(yt=G.getWireframeAttribute($),yt===void 0)return;Ct=2}const Vt=$.drawRange,te=$.attributes.position;let Et=Vt.start*Ct,ee=(Vt.start+Vt.count)*Ct;mt!==null&&(Et=Math.max(Et,mt.start*Ct),ee=Math.min(ee,(mt.start+mt.count)*Ct)),yt!==null?(Et=Math.max(Et,0),ee=Math.min(ee,yt.count)):te!=null&&(Et=Math.max(Et,0),ee=Math.min(ee,te.count));const Ie=ee-Et;if(Ie<0||Ie===1/0)return;lt.setup(H,B,ft,$,yt);let _e,ve=q;if(yt!==null&&(_e=M.get(yt),ve=dt,ve.setIndex(_e)),H.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*Ni()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(H.isLine){let ii=B.linewidth;ii===void 0&&(ii=1),gt.setLineWidth(ii*Ni()),H.isLineSegments?ve.setMode(F.LINES):H.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else H.isPoints?ve.setMode(F.POINTS):H.isSprite&&ve.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))ve.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ii=H._multiDrawStarts,Tt=H._multiDrawCounts,fi=H._multiDrawCount,oe=yt?M.get(yt).bytesPerElement:1,ls=kt.get(B).currentProgram.getUniforms();for(let ni=0;ni<fi;ni++)ls.setValue(F,"_gl_DrawID",ni),ve.render(ii[ni]/oe,Tt[ni])}else if(H.isInstancedMesh)ve.renderInstances(Et,Ie,H.count);else if($.isInstancedBufferGeometry){const ii=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Tt=Math.min($.instanceCount,ii);ve.renderInstances(Et,Ie,Tt)}else ve.render(Et,Ie)};function ad(S,N,$,B){z!==null&&S.isNodeMaterial&&z.setObject(B,S),Oe===!0&&J.setState(S,$,!1),S.transparent===!0&&S.side===Bi&&S.forceSinglePass===!1?(S.side=ci,S.needsUpdate=!0,Sa(S,N,B),S.side=is,S.needsUpdate=!0,Sa(S,N,B),S.side=Bi):Sa(S,N,B)}this.compile=function(S,N,$=null){$===null&&($=S),z!==null&&z.renderStart(S,N,$),R=K.get($),R.init(N),E.push(R),$.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),S!==$&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights(),z!==null&&z.updateLights(R.state.lightsArray),Mi=this.localClippingEnabled,Oe=J.init(this.clippingPlanes,Mi),Oe===!0&&J.setGlobalState(this.clippingPlanes,N),z!==null&&ht.render(R.state.shadowsArray,$,N);const B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const mt=H.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){const ft=mt[St];ad(ft,$,N,H),B.add(ft)}else ad(mt,$,N,H),B.add(mt)}),R=E.pop(),z!==null&&z.renderEnd(),B},this.compileAsync=function(S,N,$=null){const B=this.compile(S,N,$);return new Promise(H=>{function mt(){if(B.forEach(function(St){const yt=kt.get(St).currentProgram;(yt===void 0||yt.isReady())&&B.delete(St)}),B.size===0){H(S);return}setTimeout(mt,10)}Se.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let rl=null;function Jm(S){rl&&rl(S)}function rd(){os.stop()}function od(){os.start()}const os=new Wu;os.setAnimationLoop(Jm),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(S){rl=S,at.setAnimationLoop(S),S===null?os.stop():os.start()},at.addEventListener("sessionstart",rd),at.addEventListener("sessionend",od),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(S,N);const $=at.enabled===!0&&at.isPresenting===!0,B=O!==null&&(nt===null||$)&&O.begin(D,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(N),N=at.getCamera()),S.isScene===!0&&S.onBeforeRender(D,S,N,nt),R=K.get(S,E.length),R.init(N),R.state.textureUnits=Bt.getTextureUnits(),E.push(R),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Ze.setFromArrayCamera(N):jt.setFromProjectionMatrix(Te,on,N.reversedDepth),Mi=this.localClippingEnabled,Oe=J.init(this.clippingPlanes,Mi),A=pt.get(S,x.length),A.init(),x.push(A),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){const St=D.xr.getDepthSensingMesh();St!==null&&ol(St,N,-1/0,D.sortObjects)}ol(S,N,0,D.sortObjects),A.finish(),z!==null&&z.updateLights(R.state.lightsArray),D.sortObjects===!0&&A.sort(Wt,De),Ii=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Ii&&L.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&J.beginShadows();const H=R.state.shadowsArray;if(ht.render(H,S,N),Oe===!0&&J.endShadows(),(B&&O.hasRenderPass())===!1){const St=A.opaque,ft=A.transmissive;if(R.setupLights(),N.isArrayCamera){const yt=N.cameras;if(ft.length>0)for(let Ct=0,Vt=yt.length;Ct<Vt;Ct++){const te=yt[Ct];cd(St,ft,S,te)}Ii&&L.render(S);for(let Ct=0,Vt=yt.length;Ct<Vt;Ct++){const te=yt[Ct];ld(A,S,te,te.viewport)}}else ft.length>0&&cd(St,ft,S,N),Ii&&L.render(S),ld(A,S,N)}nt!==null&&V===0&&(Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt)),B&&O.end(D),S.isScene===!0&&S.onAfterRender(D,S,N),lt.resetDefaultState(),Y=-1,et=null,E.pop(),E.length>0?(R=E[E.length-1],Bt.setTextureUnits(R.state.textureUnits),Oe===!0&&J.setGlobalState(D.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function ol(S,N,$,B){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){const St=N.isArrayCamera?Ze:jt;if(!S.frustumCulled||S.intersectsFrustum(St)){B&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);const ft=st.update(S),yt=S.material;yt.visible&&A.push(S,ft,yt,$,We.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){const St=N.isArrayCamera?Ze:jt;if(!S.frustumCulled||S.intersectsFrustum(St)){const ft=st.update(S),yt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),We.copy(ft.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(yt)){const Ct=ft.groups;for(let Vt=0,te=Ct.length;Vt<te;Vt++){const Et=Ct[Vt],ee=yt[Et.materialIndex];ee&&ee.visible&&A.push(S,ft,ee,$,We.z,Et,N)}}else yt.visible&&A.push(S,ft,yt,$,We.z,null,N)}}}const mt=S.children;for(let St=0,ft=mt.length;St<ft;St++)ol(mt[St],N,$,B)}function ld(S,N,$,B){const{opaque:H,transmissive:mt,transparent:St}=S;R.setupLightsView($),Oe===!0&&J.setGlobalState(D.clippingPlanes,$),B&&gt.viewport(it.copy(B)),H.length>0&&vr(H,N,$),mt.length>0&&vr(mt,N,$),St.length>0&&vr(St,N,$),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function cd(S,N,$,B){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[B.id]===void 0){const Et=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[B.id]=new bi(1,1,{generateMipmaps:!0,type:Et?_i:Ci,minFilter:On,samples:Math.max(4,we.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const mt=R.state.transmissionRenderTarget[B.id],St=B.viewport||it;mt.setSize(St.z*D.transmissionResolutionScale,St.w*D.transmissionResolutionScale);const ft=D.getRenderTarget(),yt=D.getActiveCubeFace(),Ct=D.getActiveMipmapLevel();D.setRenderTarget(mt),D.getClearColor(Q),_t=D.getClearAlpha(),_t<1&&D.setClearColor(16777215,.5),D.clear(),Ii&&L.render($);const Vt=D.toneMapping;D.toneMapping=Bn;const te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),R.setupLightsView(B),Oe===!0&&J.setGlobalState(D.clippingPlanes,B),vr(S,$,B),Bt.updateMultisampleRenderTarget(mt),Bt.updateRenderTargetMipmap(mt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ee=0,Ie=N.length;ee<Ie;ee++){const _e=N[ee],{object:ve,geometry:ii,material:Tt,group:fi}=_e;if(Tt.side===Bi&&ve.layers.test(B.layers)){const oe=Tt.side;Tt.side=ci,Tt.needsUpdate=!0,hd(ve,$,B,ii,Tt,fi),Tt.side=oe,Tt.needsUpdate=!0,Et=!0}}Et===!0&&(Bt.updateMultisampleRenderTarget(mt),Bt.updateRenderTargetMipmap(mt))}D.setRenderTarget(ft,yt,Ct),D.setClearColor(Q,_t),te!==void 0&&(B.viewport=te),D.toneMapping=Vt}function vr(S,N,$){const B=N.isScene===!0?N.overrideMaterial:null;for(let H=0,mt=S.length;H<mt;H++){const St=S[H],{object:ft,geometry:yt,group:Ct}=St;let Vt=St.material;Vt.allowOverride===!0&&B!==null&&(Vt=B),ft.layers.test($.layers)&&hd(ft,N,$,yt,Vt,Ct)}}function hd(S,N,$,B,H,mt){z!==null&&H.isNodeMaterial&&z.setObject(S,H),S.onBeforeRender(D,N,$,B,H,mt),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(D,N,$,B,S,mt),H.transparent===!0&&H.side===Bi&&H.forceSinglePass===!1?(H.side=ci,H.needsUpdate=!0,D.renderBufferDirect($,N,B,H,S,mt),H.side=is,H.needsUpdate=!0,D.renderBufferDirect($,N,B,H,S,mt),H.side=Bi):D.renderBufferDirect($,N,B,H,S,mt),S.onAfterRender(D,N,$,B,H,mt)}function dd(S){let N=0;for(const $ of S)$.texture!==null&&N++;return N}function Sa(S,N,$){N.isScene!==!0&&(N=Di);const B=kt.get(S),H=R.state.lights,mt=R.state.shadowsArray,St=H.state.version,ft=tt.getParameters(S,H.state,mt,N,$,R.state.lightProbeGridArray),yt=tt.getProgramCacheKey(ft);let Ct=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=C.get(S.envMap||B.environment,Vt),B.envMapRotation=B.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",de),Ct=new Map,B.programs=Ct,B.programVariants=new Map);let te=Ct.get(yt);if(te!==void 0){if(B.currentProgram===te&&B.lightsStateVersion===St)return ud(S,ft),te}else ft.uniforms=tt.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,$,ft),S.onBeforeCompile(ft,D),te=tt.acquireProgram(ft,yt),Ct.set(yt,te),B.uniforms=ft.uniforms;const Et=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=J.uniform),ud(S,ft),B.needsLights=e0(S),B.lightsStateVersion=St,B.needsLights&&(Et.ambientLightColor.value=H.state.ambient,Et.lightProbe.value=H.state.probe,Et.sunLights.value=H.state.sun,Et.sunLightShadows.value=H.state.sunShadow,Et.directionalLights.value=H.state.directional,Et.directionalLightShadows.value=H.state.directionalShadow,Et.spotLights.value=H.state.spot,Et.spotLightShadows.value=H.state.spotShadow,Et.rectAreaLights.value=H.state.rectArea,Et.ltc_1.value=H.state.rectAreaLTC1,Et.ltc_2.value=H.state.rectAreaLTC2,Et.pointLights.value=H.state.point,Et.pointLightShadows.value=H.state.pointShadow,Et.hemisphereLights.value=H.state.hemi,Et.sunShadowMatrix.value=H.state.sunShadowMatrix,Et.sunShadowCascade.value=H.state.sunShadowCascade,Et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Et.spotLightMatrix.value=H.state.spotLightMatrix,Et.spotLightMap.value=H.state.spotLightMap,Et.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=dd(R.state.lightProbeGridArray),B.currentProgram=te,B.uniformsList=null,te}function Qm(S,N,$,B,H){const mt=kt.get(S),St=mt.currentProgram.id+","+B+","+H;let ft=mt.programVariants.get(St);return ft===void 0?(ft=Sa(S,N,$),mt.programVariants.set(St,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=B,mt.toneMapping=H),ft}function fd(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=fo.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ud(S,N){const $=kt.get(S);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function jm(S,N,$,B,H){N.isScene!==!0&&(N=Di),Bt.resetTextureUnits();const mt=N.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ft=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ie.workingColorSpace,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ct=C.get(B.envMap||St,yt),Vt=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,Ie=!!$.morphAttributes.color;let _e=Bn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(_e=D.toneMapping);const ve=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ii=ve!==void 0?ve.length:0,Tt=kt.get(B),fi=R.state.lights;if(Oe===!0&&(Mi===!0||S!==et)){const Ae=S===et&&B.id===Y;J.setState(B,S,Ae)}let oe=!1,ls=!1;B.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==fi.state.version||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Ct||B.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==J.numPlanes||Tt.numIntersection!==J.numIntersection)||Tt.vertexAlphas!==Vt||Tt.vertexTangents!==te||Tt.morphTargets!==Et||Tt.morphNormals!==ee||Tt.morphColors!==Ie||Tt.morphTargetsCount!==ii||Tt.numLightProbeGrids!==dd(R.state.lightProbeGridArray)?oe=!0:(Tt.outputColorSpace!==ft||Tt.toneMapping!==_e)&&(ls=!0):(oe=!0,Tt.__version=B.version);let ni=Tt.currentProgram;(oe===!0||ls===!0)&&(ni=ls===!0?Qm(B,N,H,ft,_e):Sa(B,N,H),z&&B.isNodeMaterial&&z.onUpdateProgram(B,ni,Tt));let xr=!1,$n=!1,cs=!1;const se=ni.getUniforms(),Je=Tt.uniforms;if(gt.useProgram(ni.program)&&(xr=!0,$n=!0,cs=!0),B.id!==Y&&(Y=B.id,$n=!0),xr||et!==S){gt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),se.setValue(F,"projectionMatrix",S.projectionMatrix),se.setValue(F,"viewMatrix",S.matrixWorldInverse);const Xe=se.map.cameraPosition;Xe!==void 0&&Xe.setValue(F,cn.setFromMatrixPosition(S.matrixWorld)),we.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),et!==S&&(et=S,$n=!0,cs=!0)}if(Tt.needsLights&&(fi.state.sunShadowMap.length>0&&se.setValue(F,"sunShadowMap",fi.state.sunShadowMap,Bt),fi.state.directionalShadowMap.length>0&&se.setValue(F,"directionalShadowMap",fi.state.directionalShadowMap,Bt),fi.state.spotShadowMap.length>0&&se.setValue(F,"spotShadowMap",fi.state.spotShadowMap,Bt),fi.state.pointShadowMap.length>0&&se.setValue(F,"pointShadowMap",fi.state.pointShadowMap,Bt)),H.isSkinnedMesh){se.setOptional(F,H,"bindMatrix"),se.setOptional(F,H,"bindMatrixInverse");const Ae=H.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),se.setValue(F,"boneTexture",Ae.boneTexture,Bt))}H.isBatchedMesh&&(se.setOptional(F,H,"batchingTexture"),se.setValue(F,"batchingTexture",H._matricesTexture,Bt),se.setOptional(F,H,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",H._indirectTexture,Bt),se.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",H._colorsTexture,Bt));const Yi=$.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&j.update(H,$,ni),($n||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,se.setValue(F,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Je.envMapIntensity.value=N.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Ey()),$n){if(se.setValue(F,"toneMappingExposure",D.toneMappingExposure),Tt.needsLights&&t0(Je,cs),mt&&B.fog===!0&&ot.refreshFogUniforms(Je,mt),ot.refreshMaterialUniforms(Je,B,bt,Nt,R.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){const Ae=w;let Xe=0;for(const Tn of R.state.lightProbeGridArray)Tn.texture!==null&&(Ae.textures[Xe]=Tn.texture,Ae.min[Xe]=Tn.boundingBox.min,Ae.max[Xe]=Tn.boundingBox.max,Ae.resolution[Xe]=Tn.resolution,Xe++);for(const Tn in Ae)Ae[Tn].length=Xe;Je.probesSH.value=Ae.textures,Je.probesMin.value=Ae.min,Je.probesMax.value=Ae.max,Je.probesResolution.value=Ae.resolution}fo.upload(F,fd(Tt),Je,Bt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fo.upload(F,fd(Tt),Je,Bt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(F,"center",H.center),se.setValue(F,"modelViewMatrix",H.modelViewMatrix),se.setValue(F,"normalMatrix",H.normalMatrix),se.setValue(F,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const Ae=B.uniformsGroups;for(let Xe=0,Tn=Ae.length;Xe<Tn;Xe++){const md=Ae[Xe];Pt.update(md,ni),Pt.bind(md,ni)}}return ni}function t0(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function e0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,N,$){const B=kt.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),kt.get(S.texture).__webglTexture=N,kt.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:$,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const $=kt.get(S);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,$=0){nt=S,Z=N,V=$;let B=null,H=!1,mt=!1;if(S){const ft=kt.get(S);if(ft.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(S.viewport),Rt.copy(S.scissor),Ht=S.scissorTest,gt.viewport(it),gt.scissor(Rt),gt.setScissorTest(Ht),Y=-1;return}else if(ft.__webglFramebuffer===void 0)Bt.setupRenderTarget(S);else if(ft.__hasExternalTextures)Bt.rebindTextures(S,kt.get(S.texture).__webglTexture,kt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Vt=S.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&kt.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);const Ct=kt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?B=Ct[N][$]:B=Ct[N],H=!0):S.samples>0&&Bt.useMultisampledRTT(S)===!1?B=kt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?B=Ct[$]:B=Ct,it.copy(S.viewport),Rt.copy(S.scissor),Ht=S.scissorTest}else it.copy(Ut).multiplyScalar(bt).floor(),Rt.copy(he).multiplyScalar(bt).floor(),Ht=ge;if($!==0&&(B=X),gt.bindFramebuffer(F.FRAMEBUFFER,B)&&gt.drawBuffers(S,B),gt.viewport(it),gt.scissor(Rt),gt.setScissorTest(Ht),H){const ft=kt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,$)}else if(mt){const ft=N;for(let yt=0;yt<S.textures.length;yt++){const Ct=kt.get(S.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,Ct.__webglTexture,$,ft)}}else if(S!==null&&$!==0){const ft=kt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,$)}Y=-1};function pd(S){const N=kt.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=we.textureFormatReadable(S.format),N.__typeReadable=we.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,$,B,H,mt,St,ft=0){if(!(S&&S.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=kt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt){gt.bindFramebuffer(F.FRAMEBUFFER,yt);try{const Ct=S.textures[ft],Vt=Ct.format,te=Ct.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);const Et=pd(Ct);if(Et.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-B&&$>=0&&$<=S.height-H&&F.readPixels(N,$,B,H,rt.convert(Vt),rt.convert(te),mt)}finally{const Ct=nt!==null?kt.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,N,$,B,H,mt,St,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=kt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt)if(N>=0&&N<=S.width-B&&$>=0&&$<=S.height-H){gt.bindFramebuffer(F.FRAMEBUFFER,yt);const Ct=S.textures[ft],Vt=Ct.format,te=Ct.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);const Et=pd(Ct);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,mt.byteLength,F.STREAM_READ),F.readPixels(N,$,B,H,rt.convert(Vt),rt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ie=nt!==null?kt.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Ie);const _e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await F0(F,_e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(_e),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,$=0){const B=Math.pow(2,-$),H=Math.floor(S.image.width*B),mt=Math.floor(S.image.height*B),St=N!==null?N.x:0,ft=N!==null?N.y:0;Bt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,St,ft,H,mt),gt.unbindTexture()},this.copyTextureToTexture=function(S,N,$=null,B=null,H=0,mt=0){let St,ft,yt,Ct,Vt,te,Et,ee,Ie;const _e=S.isCompressedTexture?S.mipmaps[mt]:S.image;if($!==null)St=$.max.x-$.min.x,ft=$.max.y-$.min.y,yt=$.isBox3?$.max.z-$.min.z:1,Ct=$.min.x,Vt=$.min.y,te=$.isBox3?$.min.z:0;else{const se=Math.pow(2,-H);St=Math.floor(_e.width*se),ft=Math.floor(_e.height*se),S.isDataArrayTexture?yt=_e.depth:S.isData3DTexture?yt=Math.floor(_e.depth*se):yt=1,Ct=0,Vt=0,te=0}B!==null?(Et=B.x,ee=B.y,Ie=B.z):(Et=0,ee=0,Ie=0);const ve=rt.convert(N.format),ii=rt.convert(N.type);let Tt;N.isData3DTexture?(Bt.setTexture3D(N,0),Tt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Bt.setTexture2DArray(N,0),Tt=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(N,0),Tt=F.TEXTURE_2D),gt.activeTexture(F.TEXTURE0),gt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),gt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),gt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const fi=gt.getParameter(F.UNPACK_ROW_LENGTH),oe=gt.getParameter(F.UNPACK_IMAGE_HEIGHT),ls=gt.getParameter(F.UNPACK_SKIP_PIXELS),ni=gt.getParameter(F.UNPACK_SKIP_ROWS),xr=gt.getParameter(F.UNPACK_SKIP_IMAGES);gt.pixelStorei(F.UNPACK_ROW_LENGTH,_e.width),gt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e.height),gt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ct),gt.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),gt.pixelStorei(F.UNPACK_SKIP_IMAGES,te);const $n=S.isDataArrayTexture||S.isData3DTexture,cs=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const se=kt.get(S),Je=kt.get(N),Yi=kt.get(se.__renderTarget),Ae=kt.get(Je.__renderTarget);gt.bindFramebuffer(F.READ_FRAMEBUFFER,Yi.__webglFramebuffer),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Xe=0;Xe<yt;Xe++)$n&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(S).__webglTexture,H,te+Xe),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(N).__webglTexture,mt,Ie+Xe)),F.blitFramebuffer(Ct,Vt,Ct+St,Vt+ft,Et,ee,Et+St,ee+ft,F.DEPTH_BUFFER_BIT,F.NEAREST);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||kt.has(S)){const se=kt.get(S),Je=kt.get(N);gt.bindFramebuffer(F.READ_FRAMEBUFFER,I),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let Yi=0;Yi<yt;Yi++)$n?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,se.__webglTexture,H,te+Yi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,se.__webglTexture,H),cs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,mt,Ie+Yi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,mt),H!==0?F.blitFramebuffer(Ct,Vt,Ct+St,Vt+ft,Et,ee,Et+St,ee+ft,F.COLOR_BUFFER_BIT,F.NEAREST):cs?F.copyTexSubImage3D(Tt,mt,Et,ee,Ie+Yi,Ct,Vt,St,ft):F.copyTexSubImage2D(Tt,mt,Et,ee,Ct,Vt,St,ft);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else cs?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Tt,mt,Et,ee,Ie,St,ft,yt,ve,ii,_e.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,mt,Et,ee,Ie,St,ft,yt,ve,_e.data):F.texSubImage3D(Tt,mt,Et,ee,Ie,St,ft,yt,ve,ii,_e):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,mt,Et,ee,St,ft,ve,ii,_e.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,mt,Et,ee,_e.width,_e.height,ve,_e.data):F.texSubImage2D(F.TEXTURE_2D,mt,Et,ee,St,ft,ve,ii,_e);gt.pixelStorei(F.UNPACK_ROW_LENGTH,fi),gt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),gt.pixelStorei(F.UNPACK_SKIP_PIXELS,ls),gt.pixelStorei(F.UNPACK_SKIP_ROWS,ni),gt.pixelStorei(F.UNPACK_SKIP_IMAGES,xr),mt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Tt),gt.unbindTexture()},this.initRenderTarget=function(S){kt.get(S).__webglFramebuffer===void 0&&Bt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Bt.setTextureCube(S,0):S.isData3DTexture?Bt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Bt.setTexture2DArray(S,0):Bt.setTexture2D(S,0),gt.unbindTexture()},this.resetState=function(){Z=0,V=0,nt=null,gt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const yn=72,en=1,Ay=yn*en,ye=Ay/2,Zh=0,Ry=.06,Be=1200,Vl=[{id:"morning",label:"아침",icon:"🌅",start:0,end:300},{id:"day",label:"낮",icon:"☀️",start:300,end:720},{id:"sunset",label:"노을",icon:"🌇",start:720,end:960},{id:"night",label:"밤",icon:"🌙",start:960,end:1200}];function Xa(a){const t=(a%Be+Be)%Be;for(const e of Vl)if(t>=e.start&&t<e.end)return e;return Vl[Vl.length-1]}function Af(a){const t=(a%Be+Be)%Be,e=Math.floor(t/Be*20),i=Math.floor(t/Be*20*60%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const ep={clear:{id:"clear",label:"맑음",icon:"☀️"},cloudy:{id:"cloudy",label:"구름 조금",icon:"⛅"},drizzle:{id:"drizzle",label:"이슬비",icon:"🌦️"}},Rf=["clear","clear","cloudy","drizzle","clear","cloudy","clear"];function Wl(a){return ep[Rf[(a-1)%Rf.length]]}const Cf={t:0,top:"#9ed7f5",bottom:"#ffe6d2",fog:"#f0faf6",sun:"#ffe7c4",sunIntensity:.95,hemiSky:"#fff6ea",hemiGround:"#d9f2c4",hemiIntensity:1.32,night:.1},Cy={t:110,top:"#74cff4",bottom:"#dcf5fd",fog:"#e4f7f5",sun:"#fff2cf",sunIntensity:1.16,hemiSky:"#ffffff",hemiGround:"#dcf6c6",hemiIntensity:1.5,night:0},ip={t:330,top:"#5fc6f2",bottom:"#cfeeff",fog:"#ddf4f8",sun:"#fffbe9",sunIntensity:1.05,hemiSky:"#f4feff",hemiGround:"#d8f5c2",hemiIntensity:1.55,night:0},Py={t:800,top:"#efa9c8",bottom:"#ffdcc0",fog:"#fce4d9",sun:"#ffb47c",sunIntensity:1.22,hemiSky:"#ffd0ae",hemiGround:"#f0e2b8",hemiIntensity:1.18,night:.02},Ly={t:915,top:"#a99bdb",bottom:"#ffd8cc",fog:"#f0dde6",sun:"#ffa888",sunIntensity:.82,hemiSky:"#d4c0ea",hemiGround:"#c3cbb4",hemiIntensity:.9,night:.2},Dy={t:980,top:"#4e5b9c",bottom:"#b6c0ea",fog:"#9ea8d4",sun:"#d7e2ff",sunIntensity:.55,hemiSky:"#93a3ec",hemiGround:"#8298b0",hemiIntensity:.62,night:1},Iy={t:1170,top:"#7388c4",bottom:"#e5d8ee",fog:"#cfd6ea",sun:"#f0e9ff",sunIntensity:.86,hemiSky:"#e9e4f9",hemiGround:"#cadcc4",hemiIntensity:1.1,night:.62},Ny={...ip,t:650},ky=[Cf,Cy,ip,Ny,Py,Ly,Dy,Iy,{...Cf,t:Be}],ka={speed:4.3,turnLerp:12,radius:.36,spriteHeight:1.5},fn={fov:37,offset:{x:0,y:11,z:13.4},lookHeight:.7};function np(a){return-9+2.4*Math.sin(a*.11+.35)+.9*Math.sin(a*.24-1.1)}const Pf={halfWidth:1.5,bank:2.4},Un={x:.4,z:17.4},$t={name:"다리",icon:"🌉",x:0,z:-9,halfWidth:1.45,halfSpan:4,deckY:.68,south:{x:0,z:-4.9},north:{x:0,z:-13.1},range:2.6};function sp(a,t){return Math.abs(a-$t.x)<=$t.halfWidth&&Math.abs(t-$t.z)<=$t.halfSpan}const zt={periodDays:3,landing:{x:0,z:29.4},boat:{x:0,z:38.6},plaza:{x:.6,z:14.8,r:3.8},route:[{x:0,z:29.4},{x:0,z:26.6},{x:0,z:23},{x:.2,z:20.2},{x:0,z:17.8},{x:.6,z:16.2}],slots:[{id:"slot_1",x:.62,z:27.3,side:"동쪽"},{id:"slot_2",x:-.62,z:24.8,side:"서쪽"},{id:"slot_3",x:.62,z:22.4,side:"동쪽"},{id:"slot_4",x:.78,z:20.9,side:"동쪽"},{id:"slot_5",x:.56,z:18.4,side:"동쪽"}],slotRange:2.2};function Yc(a){const t=Math.floor(Number(a)||0);return t>0&&t%zt.periodDays===0}const wi=[{id:"dock",name:"부두",icon:"⚓",x:0,z:31.6,markerY:2.2,height:1.7,water:!0},{id:"workshop",name:"공방",icon:"🔨",x:-9,z:9.8,markerY:3.4,height:2.8},{id:"vending",name:"메타몽 자판기",icon:"🥤",x:9,z:9,markerY:2.4,height:1.8},{id:"lighthouse",name:"등대",icon:"🗼",x:14.6,z:-1.6,markerY:5.6,height:4.4}],Ot={x:-17.2,z:8.4,cols:3,rows:3,pitch:1.9,tile:1.62},Zt={x:-3.4,z:-19,cols:3,rows:2,pitch:2,tile:1.78,waterY:.09},ap=[{id:"farm",name:"텃밭",icon:"🌱",x:Ot.x,z:Ot.z,r:4.6,side:"south"},{id:"orchard",name:"과수원",icon:"🍎",x:17,z:16,r:5.6,side:"south"},{id:"garden",name:"꽃밭",icon:"🌸",x:-17,z:19.6,r:5.4,side:"south"},{id:"beach",name:"모래 해변",icon:"🏖️",x:0,z:27.6,r:4.4,side:"south"},{id:"forest",name:"빼곡한 숲",icon:"🌲",x:-14.2,z:-20.5,r:7.6,side:"north"},{id:"quarry",name:"채석장",icon:"🪨",x:13.8,z:-18,r:6.4,side:"north"},{id:"paddy",name:"논",icon:"🌾",x:Zt.x,z:Zt.z,r:3.6,side:"north"}],Vi=[{id:"ditto_mailbox_03",name:"우체통 메타몽",x:3.2,z:15.4,variant:"mailbox",height:1.1,thumb:{set:"disguises",row:1,col:2},flavor:"편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다.",where:"광장"},{id:"ditto_basic_01",name:"동글 메타몽",x:-6.6,z:16.4,variant:"basic",height:.86,thumb:{set:"ditto_basic",row:1,col:1},flavor:"변신을 포기한 동글 메타몽. 점 눈만 남았다.",where:"광장 서쪽"},{id:"ditto_flowerpot_04",name:"화분 메타몽",x:-17.2,z:16.2,variant:"flowerpot",height:.85,thumb:{set:"disguises",row:1,col:3},flavor:"물을 안 줘도 잎이 파랗다. 그게 수상하다.",where:"꽃밭"},{id:"ditto_bench_05",name:"벤치 메타몽",x:16.4,z:14.2,variant:"bench",height:.9,thumb:{set:"disguises",row:2,col:1},flavor:"앉으라고 만든 벤치인데, 앉으면 도망간다.",where:"과수원"},{id:"ditto_pebble_02",name:"조약돌 메타몽",x:-11,z:-18,variant:"pebble",height:.52,thumb:{set:"disguises",row:1,col:1},flavor:"조약돌인 척하지만 가끔 숨을 쉰다.",where:"북쪽 숲"},{id:"ditto_signpost_07",name:"이정표 메타몽",x:11.6,z:-19.8,variant:"signpost",height:1.15,thumb:{set:"disguises",row:2,col:3},flavor:"어디로 가라는 건지 본인도 모른다.",where:"채석장"},{id:"ditto_mushroom_06",name:"버섯 메타몽",x:-1.6,z:-21.6,variant:"mushroom",height:.78,thumb:{set:"disguises",row:2,col:2},flavor:"빨간 갓에 흰 점. 먹으면 안 될 것 같다.",where:"논 둑"}],oi=[{id:"somi",name:"솜이",x:5.4,z:12.4,set:"somi",height:.74},{id:"ongi",name:"옹이",x:7.2,z:11,set:"ongi",height:.7}],Lf={x:3.2,z:15.4},Uy=[{frame:"lamp",x:-4.8,z:16.2,height:2,collide:.22},{frame:"lamp",x:5.2,z:15.4,height:2,collide:.22},{frame:"lamp",x:-4.6,z:11.6,height:2,collide:.22},{frame:"lamp",x:5.4,z:11.2,height:2,collide:.22},{frame:"fence",x:-2.2,z:12.2,height:.66,collide:.28},{frame:"fence",x:3.2,z:12,height:.66,collide:.28},{frame:"flowerbush",x:1.4,z:12.4,height:.6,collide:.24},{frame:"flowerbush",x:-5.6,z:15.6,height:.56,collide:.24},{frame:"rock",x:6.4,z:16.4,height:.5,collide:.26},{frame:"rock",x:-5,z:8,height:.46,collide:.24},{frame:"flowerbush",x:-2.2,z:19.2,height:.58,collide:.24},{frame:"flowerbush",x:2.6,z:19,height:.6,collide:.24},{frame:"flowerbush",x:-1.4,z:21,height:.56,collide:.24},{frame:"rock",x:1.6,z:20.6,height:.48,collide:.24},{frame:"lamp",x:-1,z:20.4,height:2,collide:.22},{frame:"fence",x:-7.4,z:16.4,height:.66,collide:.28},{frame:"fence",x:6.6,z:19.2,height:.66,collide:.28},{frame:"cherry1",x:-8.8,z:18.6,height:3,collide:.38},{frame:"cherry1",x:11.8,z:21,height:3,collide:.38},{frame:"tree_tall",x:-13.2,z:8.2,height:3.2,collide:.36},{frame:"tree_round",x:-13.4,z:11,height:2.6,collide:.34},{frame:"cherry1",x:-10.4,z:5.8,height:3,collide:.38},{frame:"flowerbush",x:-7.6,z:12.6,height:.62,collide:.25},{frame:"rock",x:-6.6,z:8,height:.5,collide:.26},{frame:"tree_tall",x:14.6,z:7.6,height:3.2,collide:.36},{frame:"tree_round",x:8.4,z:5.2,height:2.6,collide:.34},{frame:"cherry2",x:14,z:12.2,height:3.4,collide:.42},{frame:"flowerbush",x:11.2,z:12.6,height:.58,collide:.24},{frame:"rock",x:7.2,z:6,height:.5,collide:.26},{frame:"tree_round",x:18,z:4.6,height:2.6,collide:.34},{frame:"cherry1",x:11.8,z:1.2,height:3,collide:.38},{frame:"rock",x:17.4,z:-2.2,height:.54,collide:.28},{frame:"rock",x:9.4,z:.4,height:.5,collide:.26},{frame:"flowerbush",x:16.8,z:1.6,height:.56,collide:.24},{frame:"tree_round",x:19.4,z:1,height:2.6,collide:.34},{frame:"lamp",x:-2.4,z:22,height:2,collide:.22},{frame:"lamp",x:2.4,z:22,height:2,collide:.22},{frame:"fence",x:-4.8,z:24.2,height:.66,collide:.28},{frame:"fence",x:4.8,z:24.2,height:.66,collide:.28},{frame:"rock",x:-3.6,z:26.2,height:.5,collide:.26},{frame:"rock",x:3.8,z:26.8,height:.46,collide:.24},{frame:"rock",x:-7.4,z:27.6,height:.52,collide:.26},{frame:"rock",x:7.2,z:28.2,height:.48,collide:.26},{frame:"flowerbush",x:-6.6,z:20.4,height:.56,collide:.24},{frame:"flowerbush",x:6.8,z:20.2,height:.58,collide:.24},{frame:"tree_round",x:-9.8,z:23.4,height:2.6,collide:.34},{frame:"cherry1",x:9.6,z:23.8,height:3,collide:.38},{frame:"flowerbush",x:-14.6,z:17.6,height:.58,collide:.24},{frame:"flowerbush",x:-16.2,z:18.6,height:.6,collide:.24},{frame:"flowerbush",x:-18,z:17.8,height:.56,collide:.24},{frame:"flowerbush",x:-19.4,z:19.2,height:.58,collide:.24},{frame:"flowerbush",x:-20.4,z:20.8,height:.62,collide:.24},{frame:"flowerbush",x:-19,z:22,height:.58,collide:.24},{frame:"flowerbush",x:-17.2,z:22.6,height:.56,collide:.24},{frame:"flowerbush",x:-15.4,z:21.6,height:.6,collide:.24},{frame:"flowerbush",x:-14.8,z:20,height:.54,collide:.24},{frame:"flowerbush",x:-16.8,z:20.2,height:.58,collide:.24},{frame:"flowerbush",x:-18.6,z:20.4,height:.6,collide:.24},{frame:"cherry1",x:-22,z:16.4,height:3,collide:.38},{frame:"tree_round",x:-13.2,z:23.2,height:2.6,collide:.34},{frame:"lamp",x:-15.8,z:19.2,height:2,collide:.22},{frame:"rock",x:-21.6,z:22.8,height:.52,collide:.26},{frame:"fence",x:-21.8,z:5.2,height:.66,collide:.28},{frame:"fence",x:-21.8,z:9.2,height:.66,collide:.28},{frame:"fence",x:-19.1,z:4.2,height:.66,collide:.28},{frame:"fence",x:-15.6,z:4.2,height:.66,collide:.28},{frame:"lamp",x:-13.6,z:14.6,height:2,collide:.22},{frame:"rock",x:-22,z:13.4,height:.5,collide:.26},{frame:"flowerbush",x:-20.6,z:12.8,height:.58,collide:.24},{frame:"cherry1",x:13.6,z:18.4,height:3,collide:.38},{frame:"tree_round",x:16,z:20.6,height:2.6,collide:.34},{frame:"cherry2",x:19.2,z:19.4,height:3.4,collide:.42},{frame:"tree_tall",x:21.4,z:16.6,height:3.2,collide:.36},{frame:"cherry1",x:20.2,z:12.4,height:3,collide:.38},{frame:"tree_round",x:16.4,z:11.4,height:2.6,collide:.34},{frame:"tree_round",x:12.8,z:14.2,height:2.6,collide:.34},{frame:"fence",x:12.4,z:20.8,height:.66,collide:.28},{frame:"lamp",x:10.4,z:19.4,height:2,collide:.22},{frame:"rock",x:22.2,z:21.2,height:.5,collide:.26},{frame:"tree_tall",x:-22,z:-16.5,height:3.2,collide:.36},{frame:"tree_round",x:-18.6,z:-16.5,height:2.6,collide:.34},{frame:"cherry1",x:-15.2,z:-16.5,height:3,collide:.38},{frame:"tree_tall",x:-11.8,z:-16.5,height:3.2,collide:.36},{frame:"cherry2",x:-14.4,z:-16.6,height:3.4,collide:.42},{frame:"tree_round",x:-20.4,z:-19.4,height:2.6,collide:.34},{frame:"cherry1",x:-17,z:-19.4,height:3,collide:.38},{frame:"tree_tall",x:-13.6,z:-19.4,height:3.2,collide:.36},{frame:"tree_round",x:-10.2,z:-19.4,height:2.6,collide:.34},{frame:"tree_tall",x:-7.6,z:-18.6,height:3.2,collide:.36},{frame:"cherry2",x:-22.4,z:-22.4,height:3.4,collide:.42},{frame:"tree_round",x:-19,z:-22.4,height:2.6,collide:.34},{frame:"tree_tall",x:-15.6,z:-22.4,height:3.2,collide:.36},{frame:"cherry1",x:-12.2,z:-22.4,height:3,collide:.38},{frame:"tree_round",x:-8.8,z:-22.4,height:2.6,collide:.34},{frame:"tree_tall",x:-20,z:-25.2,height:3.2,collide:.36},{frame:"cherry2",x:-16.6,z:-25.2,height:3.4,collide:.42},{frame:"tree_round",x:-13.2,z:-25.2,height:2.6,collide:.34},{frame:"tree_tall",x:-9.8,z:-25.2,height:3.2,collide:.36},{frame:"flowerbush",x:-19.8,z:-21,height:.56,collide:.24},{frame:"flowerbush",x:-11,z:-24,height:.58,collide:.24},{frame:"rock",x:-23.4,z:-19.6,height:.5,collide:.26},{frame:"rock",x:-15,z:-27.4,height:.46,collide:.24},{frame:"lamp",x:-7,z:-17.4,height:2,collide:.22},{frame:"rock",x:9.6,z:-13.6,height:.56,collide:.3},{frame:"rock",x:12.6,z:-13.6,height:.5,collide:.26},{frame:"rock",x:15.6,z:-13.6,height:.54,collide:.28},{frame:"rock",x:18.4,z:-13.6,height:.52,collide:.26},{frame:"rock",x:8.8,z:-16.6,height:.5,collide:.26},{frame:"rock",x:11.6,z:-16.6,height:.56,collide:.3},{frame:"rock",x:14.4,z:-16.6,height:.52,collide:.26},{frame:"rock",x:17.2,z:-16.6,height:.54,collide:.28},{frame:"rock",x:20,z:-16.6,height:.5,collide:.26},{frame:"rock",x:9.8,z:-19.8,height:.52,collide:.26},{frame:"rock",x:12.8,z:-19.8,height:.58,collide:.3},{frame:"rock",x:15.8,z:-19.8,height:.54,collide:.28},{frame:"rock",x:18.6,z:-19.8,height:.5,collide:.26},{frame:"rock",x:11,z:-15.1,height:.5,collide:.26},{frame:"rock",x:13.9,z:-15.1,height:.54,collide:.28},{frame:"rock",x:16.9,z:-15.1,height:.48,collide:.24},{frame:"rock",x:19.4,z:-15.1,height:.52,collide:.26},{frame:"rock",x:10.6,z:-18.2,height:.52,collide:.26},{frame:"rock",x:13.6,z:-18.2,height:.56,collide:.3},{frame:"rock",x:16.6,z:-18.2,height:.5,collide:.26},{frame:"rock",x:12.9,z:-21.3,height:.54,collide:.28},{frame:"rock",x:15.9,z:-21.3,height:.5,collide:.26},{frame:"rock",x:11.2,z:-22.8,height:.52,collide:.26},{frame:"rock",x:14.6,z:-22.8,height:.56,collide:.3},{frame:"rock",x:17.4,z:-22.8,height:.5,collide:.26},{frame:"tree_round",x:21.8,z:-20.2,height:2.6,collide:.34},{frame:"fence",x:7.2,z:-19.4,height:.66,collide:.28},{frame:"lamp",x:6.2,z:-17.6,height:2,collide:.22},{frame:"fence",x:-7.6,z:-17.4,height:.66,collide:.28},{frame:"fence",x:-7.6,z:-20.6,height:.66,collide:.28},{frame:"flowerbush",x:-6,z:-22,height:.56,collide:.24},{frame:"rock",x:-.2,z:-16.4,height:.5,collide:.26},{frame:"lamp",x:1.8,z:-21.4,height:2,collide:.22},{frame:"tree_round",x:-8,z:-22.6,height:2.6,collide:.34}],un={dittoRange:2.9,catRange:2.2,tapRange:5,nodeRange:2.5,siteRange:3.4,plotRange:2.5},Fi={reward:15,steps:[{id:"gift",icon:"🎁",label:"우체통 선물 챙기기",hint:"📬 우체통 → 편지의 [선물 받기]"},{id:"ditto",icon:"🔍",label:"메타몽 2마리 찾기",hint:"가까이 다가가 [살펴보기]"},{id:"chop",icon:"🪓",label:"첫 나무 베기",hint:"나무 앞에서 [베기] 를 끝까지"}]},hi={dbName:"metamong-island",store:"saves",key:"slot1",intervalSeconds:5};function Kr(a,t,e){let i=Math.imul(a|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}const Df=a=>a*a*(3-2*a);function Kc(a,t,e=0){const i=Math.floor(a),n=Math.floor(t),s=a-i,r=t-n,o=Df(s),l=Df(r),c=Kr(i,n,e),h=Kr(i+1,n,e),d=Kr(i,n+1,e),p=Kr(i+1,n+1,e);return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+p*o)*l}function Fy(a,t,e=4,i=0){let n=0,s=.5,r=1,o=0;for(let l=0;l<e;l++)n+=(Kc(a*r,t*r,i+l*131)*2-1)*s,o+=s,s*=.5,r*=2;return n/(o||1)}function Jh(a,t,e){const i=Math.min(1,Math.max(0,(e-a)/(t-a||1e-6)));return i*i*(3-2*i)}function Oy(a,t,e){return a<t?t:a>e?e:a}class zy{constructor(t=20261120){this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.min(t.length-1,Math.floor(this.next()*t.length))]}}const Fn=yn+1,Zr=.7,If=1,By=28.8,Nf=6.8,Gy=3.6,Hy=.75;let Qh=!1;function kf(a){Qh=!!a}function rp(a,t){const e=By-Nf,i=Math.abs(a)-e,n=Math.abs(t)-e,s=Math.hypot(Math.max(i,0),Math.max(n,0)),r=Math.min(Math.max(i,n),0);return s+r-Nf}function Vy(a,t){const e=Jh(6,24,t);return Gy*(1+Hy*e)}function Wy(a,t){const e=Math.abs(t-np(a)),i=Pf.halfWidth,n=Pf.bank;return e>=i+n?0:1-Jh(i,i+n,e)}function $y(a,t){const e=rp(a,t),i=Fy(a*.055+13.7,t*.055-8.2,3,7)*.85,n=Jh(0,Vy(a,t),e+i);let s=Zr-(Zr+If)*n;const r=Wy(a,t);return r>0&&(s=Math.min(s,-1.25+(Zr- -1.25)*(1-r))),Oy(s,-If,Zr)}function Xy(){const a=new Float32Array(Fn*Fn);for(let t=0;t<Fn;t++)for(let e=0;e<Fn;e++){const i=-ye+e*en,n=-ye+t*en;a[t*Fn+e]=$y(i,n)}return a}const op=Xy();function bs(a,t,e){const i=(t+ye)/en,n=(e+ye)/en;if(i<0||n<0||i>=yn||n>=yn)return-1.5;const s=Math.floor(i),r=Math.floor(n),o=i-s,l=n-r,c=a[r*Fn+s],h=a[r*Fn+s+1],d=a[(r+1)*Fn+s],p=a[(r+1)*Fn+s+1];return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+p*o)*l}function Zc(a,t,e){const n=bs(a,t+.45,e)-bs(a,t-.45,e),s=bs(a,t,e+.45)-bs(a,t,e-.45);return Math.hypot(n,s)/(2*.45)}function qy(a,t,e){return Math.abs(t)>ye-1||Math.abs(e)>ye-1?!1:Qh&&sp(t,e)?!0:!(bs(a,t,e)<Ry||Zc(a,t,e)>1.35)}function Yy(a,t){return!Qh||!sp(a,t)?null:$t.deckY}const Ky="#3b2d38",Zy=[140,140,140,255,172,172,172,255,222,222,222,255,255,255,255,255];function lp(){const a=new Bh(new Uint8Array(Zy),4,1,rn);return a.minFilter=ue,a.magFilter=ue,a.generateMipmaps=!1,a.needsUpdate=!0,a}const Jy=lp();function Ri(a={}){return new vg({gradientMap:Jy,...a})}new Ke({color:Ky,side:ci,fog:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const Si={deepSand:new ut("#dcc79c"),wetSand:new ut("#f2dfb4"),sand:new ut("#ffe6b8"),sandLight:new ut("#fff1d2"),grassA:new ut("#98dd78"),grassB:new ut("#b6ec96"),grassC:new ut("#82d46c"),grassMint:new ut("#abe4bd"),stone:new ut("#e7ddc9"),stoneHigh:new ut("#f2ead8")};new ut;let Qi=null;function Qy(){if(Qi)return Qi;const a=64,t=document.createElement("canvas");t.width=t.height=a;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,a,a);const i=["#f4f7f0","#fbfdf8","#eef4ea","#ffffff","#f7faf3"];for(let n=0;n<220;n++){const s=Math.floor(Math.random()*a),r=Math.floor(Math.random()*a);e.fillStyle=i[Math.floor(Math.random()*i.length)],e.fillRect(s,r,Math.random()<.25?2:1,Math.random()<.25?2:1)}return Qi=new ln(t),Qi.colorSpace=be,Qi.wrapS=Qi.wrapT=or,Qi.magFilter=ue,Qi.minFilter=On,Qi.generateMipmaps=!0,Qi.anisotropy=4,Qi}function jy(a,t,e,i,n){const s=Kc(e*.33+7.1,i*.33-3.3,41),r=Kc(e*.12-2.4,i*.12+5.6,17);return a<-.05?n.copy(Si.deepSand).lerp(Si.wetSand,.3+s*.3):a<.2?n.copy(Si.wetSand).lerp(Si.sand,.35+s*.5):a<.4?n.copy(Si.sand).lerp(Si.sandLight,s*.5):a<.58?n.copy(Si.sand).lerp(Si.grassA,.35+s*.55):t>1.55?n.copy(Si.stone).lerp(Si.stoneHigh,s*.6):(n.copy(Si.grassA),s>.54?n.lerp(Si.grassB,(s-.54)*2.2):s<.44&&n.lerp(Si.grassC,(.44-s)*2.2),r>.7&&n.lerp(Si.grassMint,(r-.7)*.8)),n}var ga,cp,hp;class tM{constructor(t){Re(this,ga);this.heights=t,this.group=new Ge,this.group.name="Terrain",this.mesh=_(this,ga,cp).call(this,t),this.group.add(this.mesh),this.seabed=_(this,ga,hp).call(this),this.group.add(this.seabed)}sampleHeight(t,e){return bs(this.heights,t,e)}slopeAt(t,e){return Zc(this.heights,t,e)}isWalkable(t,e){return qy(this.heights,t,e)}groundY(t,e){const i=Yy(t,e);return i!==null?i:Math.max(this.sampleHeight(t,e),Zh+.02)}dispose(){this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}ga=new WeakSet,cp=function(t){const e=yn+1,i=yn*yn,n=new Float32Array(i*6*3),s=new Float32Array(i*6*3),r=new Float32Array(i*6*2),o=1/2.6,l=new Float32Array(e*e*3),c=new ut;for(let A=0;A<e;A++)for(let R=0;R<e;R++){const x=-ye+R*en,E=-ye+A*en,O=t[A*e+R];jy(O,Zc(t,x,E),x,E,c);const D=(A*e+R)*3;l[D]=c.r,l[D+1]=c.g,l[D+2]=c.b}let h=0,d=0,p=0;const f=(A,R,x,E)=>{n[h++]=A,n[h++]=x,n[h++]=R,s[d++]=l[E],s[d++]=l[E+1],s[d++]=l[E+2],r[p++]=A*o,r[p++]=R*o};for(let A=0;A<yn;A++)for(let R=0;R<yn;R++){const x=-ye+R*en,E=x+en,O=-ye+A*en,D=O+en,U=A*e+R,z=A*e+R+1,X=(A+1)*e+R,I=(A+1)*e+R+1,W=t[U],Z=t[z],V=t[X],nt=t[I];f(x,O,W,U*3),f(x,D,V,X*3),f(E,D,nt,I*3),f(x,O,W,U*3),f(E,D,nt,I*3),f(E,O,Z,z*3)}const g=new Fe;g.setAttribute("position",new yi(n,3)),g.setAttribute("color",new yi(s,3)),g.setAttribute("uv",new yi(r,2)),g.computeVertexNormals(),g.computeBoundingSphere();const y=g.attributes.normal,m=g.attributes.position;let v=0;for(let A=0;A<m.count;A+=3)if(y.getY(A)<0){for(let R=0;R<3;R++){const x=m.getComponent(A+1,R),E=m.getComponent(A+2,R);m.setComponent(A+1,R,E),m.setComponent(A+2,R,x)}for(let R=0;R<3;R++){const x=g.attributes.color.getComponent(A+1,R),E=g.attributes.color.getComponent(A+2,R);g.attributes.color.setComponent(A+1,R,E),g.attributes.color.setComponent(A+2,R,x)}v++}v>0&&(g.computeVertexNormals(),m.needsUpdate=!0);const b=Ri({vertexColors:!0,map:Qy()}),T=new qt(g,b);T.name="TerrainSurface",T.receiveShadow=!0,T.frustumCulled=!0;const w=g.attributes.color;return w.needsUpdate=!0,T},hp=function(){const t=new Ei(ye*10,ye*10,1,1);t.rotateX(-Math.PI/2);const e=Ri({color:"#dff3ec"}),i=new qt(t,e);return i.position.y=-1.35,i.name="Seabed",i.receiveShadow=!0,i};const eM=`
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
`,iM=`
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
`;class nM{constructor(){const t=ye*8,e=new Ei(t,t,72,72);e.rotateX(-Math.PI/2),this.material=new xi({uniforms:fa.merge([vt.fog,{uTime:{value:0},uShallow:{value:new ut("#8ff0e0")},uDeep:{value:new ut("#2fc4cd")},uSkyColor:{value:new ut("#e8fcff")},uSunColor:{value:new ut("#fffbe6")},uNight:{value:0}}]),vertexShader:eM,fragmentShader:iM,transparent:!0,fog:!0,depthWrite:!0}),this.mesh=new qt(e,this.material),this.mesh.name="Water",this.mesh.position.y=Zh,this.mesh.renderOrder=1}update(t,e){this.material.uniforms.uTime.value=t,e&&(this.material.uniforms.uShallow.value.copy(e.waterShallow),this.material.uniforms.uDeep.value.copy(e.waterDeep),this.material.uniforms.uSkyColor.value.copy(e.skyBottom),this.material.uniforms.uSunColor.value.copy(e.sun),this.material.uniforms.uNight.value=e.night)}}const sM=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,aM=`
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
`;class rM{constructor(){const t=new Jo(500,32,20);this.material=new xi({uniforms:{uTop:{value:new ut("#8ed7f6")},uBottom:{value:new ut("#f1fcf4")},uDisc:{value:new ut("#fff2cf")},uDiscDir:{value:new k(.2,.6,-.6)},uCloud:{value:new ut("#ffffff")},uNight:{value:0},uTime:{value:0}},vertexShader:sM,fragmentShader:aM,side:ci,depthWrite:!1,fog:!1}),this.mesh=new qt(t,this.material),this.mesh.name="Skybox",this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}update(t){this.mesh.position.copy(t)}setPalette({skyTop:t,skyBottom:e,sun:i,night:n,discDir:s,elapsed:r}){const o=this.material.uniforms;o.uTop.value.copy(t),o.uBottom.value.copy(e),o.uDisc.value.copy(i),o.uCloud.value.copy(e).lerp(i,.35),o.uNight.value=n,o.uTime.value=r,s&&o.uDiscDir.value.copy(s)}}let Ua=null;function Uf(){if(Ua)return Ua;const a=document.createElement("canvas");a.width=a.height=96;const t=a.getContext("2d"),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(255,255,255,0.92)"),e.addColorStop(.45,"rgba(255,255,255,0.62)"),e.addColorStop(.78,"rgba(255,255,255,0.24)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.ellipse(48,48,46,46,0,0,Math.PI*2),t.fill(),Ua=new ln(a),Ua.colorSpace=be,Ua}function fr(a=.34,t=.3){const e=new zn(a,28);e.rotateX(-Math.PI/2),e.scale(1,1,.62);const i=new Ke({color:"#6d5a8a",map:Uf(),alphaMap:Uf(),transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),n=new qt(e,i);return n.renderOrder=2,n}let Fa=null;function oM(){if(Fa)return Fa;const a=document.createElement("canvas");a.width=a.height=128;const t=a.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,62);return e.addColorStop(0,"rgba(255,214,232,0)"),e.addColorStop(.52,"rgba(255,206,228,0.06)"),e.addColorStop(.76,"rgba(255,190,220,0.85)"),e.addColorStop(1,"rgba(255,190,220,0)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),Fa=new ln(a),Fa.colorSpace=be,Fa}function lM(a=.45){const t=new zn(a,32);t.rotateX(-Math.PI/2);const e=new Ke({map:oM(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),i=new qt(t,e);return i.renderOrder=2,i}let Oa=null;function cM(){if(Oa)return Oa;const a=document.createElement("canvas");a.width=a.height=128;const t=a.getContext("2d");return t.font='96px "Noto Sans CJK KR", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=11,t.strokeStyle="rgba(255,255,255,0.92)",t.strokeText("♥",64,68),t.fillStyle="#ff86a8",t.fillText("♥",64,68),Oa=new ln(a),Oa.colorSpace=be,Oa}function dp(a=.42){const t=new li(new je({map:cM(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return t.scale.set(a,a,1),t.visible=!1,t}class ua{constructor(t,e,i={}){const{height:n=1,exact:s=!1}=i;this.atlas=t;const r=t.frames.get(e)||t.frames.values().next().value;this.height=n,this.exact=s,this.aspect=s?r.w/r.h:t.cell[0]/t.cell[1];const o=new Ei(n*this.aspect,n);o.translate(0,n/2,0);const l=t.texture.clone();l.needsUpdate=!0,this.map=l,this.material=new Ke({map:l,transparent:!1,alphaTest:.45,depthWrite:!0,depthTest:!0,side:is,toneMapped:!1,fog:!0,color:16777215}),this.mesh=new qt(o,this.material),this.mesh.name=`Billboard_${t.set}_${e}`,this._wp=new k,this.frame=null,this.flip=!1,this.setFrame(e,!!i.flip),this.mesh.userData.billboard=this}setFrame(t,e=this.flip){const i=this.atlas.frames.get(t);if(!i)return this.frame;this.frame=i,this.flip=!!e;const n=1/this.atlas.cols,s=1/this.atlas.rows;if(this.map.offset.set(e?i.col/this.atlas.cols:(i.col-1)/this.atlas.cols,1-i.row/this.atlas.rows),this.map.repeat.set(e?-n:n,s),this.map.needsUpdate=!0,this.exact){const r=i.w/i.h;if(Math.abs(r-this.aspect)>1e-4){this.aspect=r,this.mesh.geometry.dispose();const o=new Ei(this.height*r,this.height);o.translate(0,this.height/2,0),this.mesh.geometry=o}}return i}faceCamera(t){this.mesh.getWorldPosition(this._wp),this.mesh.rotation.y=Math.atan2(t.position.x-this._wp.x,t.position.z-this._wp.z)}setTint(t){this.material.color.copy(t)}dispose(){this.map.dispose(),this.material.dispose(),this.mesh.geometry.dispose()}}const le={log:{id:"log",name:"통나무",icon:"🪵",tint:"#c98b52",desc:"나무를 두드리면 나와요"},stone:{id:"stone",name:"돌",icon:"🪨",tint:"#a9a9c0",desc:"바위를 두드리면 나와요"},petal:{id:"petal",name:"꽃잎",icon:"🌸",tint:"#ffb3d1",desc:"꽃덤불과 벚꽃나무에서"},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",desc:"바위에서 아주 가끔"},berry:{id:"berry",name:"열매",icon:"🍓",tint:"#ff7d9c",desc:"먹으면 기력 +30"}},Jc=["log","stone","petal","star","berry"],Ye={slots:8,stack:20},sn={cost:{log:8,stone:5,coin:60},slotsPerLevel:8,maxLevel:1,desc:"바퀴 달린 작은 손수레. 짊어지고 다니는 가방이 두 배로 넓어진다."},Ff=999,vi={max:100,hitTree:6,hitRock:7,hitFlower:3,eat:30,regenPerSecond:1/6},uo={dock:{log:3,stone:2},workshop:{log:4,stone:3},vending:{log:4,stone:4},lighthouse:{log:6,stone:5}},Of={dock:"배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.",workshop:"창고와 도구방이 함께 열려요. 재료 정리는 여기서 해요.",vending:"메타몽 자판기예요. 복구하면 밤에 은은하게 빛나요.",lighthouse:"복구하면 밤마다 따뜻한 불이 켜져요. 섬의 마지막 등불이에요."},Js={log:6,stone:4},el={tree:{frames:["cherry1","cherry2","tree_tall","tree_round"],cost:vi.hitTree,hits:[2,3],icon:"🪓",verb:"베기"},rock:{frames:["rock"],cost:vi.hitRock,hits:[2,3],icon:"⛏️",verb:"채굴"},flower:{frames:["flowerbush"],cost:vi.hitFlower,hits:[1,1],icon:"🌸",verb:"꽃 따기"}};function hM(a){for(const[t,e]of Object.entries(el))if(e.frames.includes(a))return t;return null}function dM(a,t,e=Math.random){const i={};return a==="tree"?(i.log=1+Math.floor(e()*3),String(t).startsWith("cherry")&&e()<.65&&(i.petal=1)):a==="rock"?(i.stone=1+Math.floor(e()*3),e()<.14&&(i.star=1)):a==="flower"&&(i.petal=1+(e()<.5?1:0)),i}function fM(a){return Object.entries(a).filter(([,t])=>t>0).map(([t,e])=>`${le[t]?le[t].name:t} ${e}`).join(" · ")}const Le=new Map;function il(a=16){const t=document.createElement("canvas");t.width=t.height=a;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function Ps(a){const t=new ln(a);return t.colorSpace=be,t.magFilter=ue,t.minFilter=ue,t.generateMipmaps=!1,t.needsUpdate=!0,t}function nl(a,t){return(e,i,n,s,r)=>{a.fillStyle=r,a.fillRect(e*t,i*t,n*t,s*t)}}function uM(){const a="cart";if(Le.has(a))return Le.get(a);const{c:t,ctx:e}=il(24),i=nl(e,1);i(1,11,5,2,"#a9713f"),i(1,11,5,1,"#c68a52"),i(5,7,16,8,"#b07845"),i(5,7,16,1,"#d19a5f"),i(5,14,16,1,"#8a5a30"),i(5,10,16,1,"#96633a"),i(5,7,1,8,"#8a5a30"),i(20,7,1,8,"#7a4c28"),i(6,6,14,1,"#e0ad72");const n=(r,o)=>{i(r-3,o-1,7,2,"#4a4350"),i(r-2,o-3,5,1,"#4a4350"),i(r-2,o+2,5,1,"#4a4350"),i(r-1,o-2,3,4,"#6b6472"),i(r,o-1,1,1,"#d8d2dc")};n(7,18),n(18,18),i(7,17,11,1,"#7a5a3a");const s=Ps(t);return Le.set(a,s),s}function pM(a){const{c:t,ctx:e}=il(16),i=nl(e,1);return a==="berry"?(i(7,2,2,1,"#6dbf6a"),i(9,3,1,1,"#579a55"),i(8,4,1,1,"#7a5236"),i(5,5,6,1,"#e8496b"),i(4,6,8,1,"#ef5a7b"),i(4,7,9,1,"#f0607f"),i(3,8,10,1,"#ee5c7d"),i(3,9,10,1,"#e8506f"),i(4,10,9,1,"#dc4865"),i(5,11,7,1,"#c93d59"),i(6,12,5,1,"#b2334f"),i(5,7,2,2,"#ffa3bb"),i(6,6,1,1,"#ffc2d2"),i(5,9,1,1,"#ffe3ea"),i(8,10,1,1,"#ffe3ea"),i(11,8,1,1,"#ffd0dc")):a==="log"?(i(3,6,10,6,"#a9713f"),i(3,6,10,1,"#c68a52"),i(3,11,10,1,"#8a5a30"),i(5,7,1,4,"#965f33"),i(8,8,4,1,"#b87f47"),i(2,7,2,4,"#d8a468"),i(2,8,2,2,"#e8bc85"),i(3,8,1,2,"#b9854f"),i(12,7,2,4,"#c9925a"),i(12,8,1,2,"#8a5a30")):a==="stone"?(i(5,5,6,1,"#d3d5e2"),i(4,6,8,1,"#c3c6d6"),i(3,7,10,1,"#b3b7ca"),i(3,8,10,2,"#a6aabf"),i(4,10,9,1,"#8f94ac"),i(5,11,7,1,"#7b8098"),i(6,12,5,1,"#6b7086"),i(5,6,3,1,"#e7e9f2"),i(7,9,2,1,"#c9cddd")):a==="petal"?(i(7,4,3,1,"#ffd0e2"),i(6,5,5,1,"#ffb8d2"),i(5,6,6,2,"#ffa6c8"),i(4,8,6,2,"#f892b8"),i(5,10,4,1,"#e97fa8"),i(6,11,2,1,"#d16d96"),i(7,6,2,1,"#ffe6f0")):a==="star"?(i(7,1,2,3,"#ffe9a8"),i(7,12,2,3,"#ffe9a8"),i(1,7,3,2,"#ffe9a8"),i(12,7,3,2,"#ffe9a8"),i(5,5,6,1,"#ffd464"),i(4,6,8,1,"#ffcf55"),i(4,7,8,2,"#ffc94a"),i(5,9,6,1,"#ffbf3e"),i(6,10,4,1,"#ffb42f"),i(7,7,2,2,"#fff8dc"),i(6,6,1,1,"#fff3c0")):i(6,6,4,4,"#dcdcea"),Ps(t)}function mM(a){const t=`item:${a}`;return Le.has(t)||Le.set(t,pM(a)),Le.get(t)}function gM(a="tree"){const t=`stump:${a}`;if(Le.has(t))return Le.get(t);const{c:e,ctx:i}=il(24),n=nl(i,1);if(a==="tree"){const r=[[5,10,15,"#dcae74"],[6,9,16,"#d3a067"],[7,9,16,"#c9925a"],[8,8,17,"#b07c46"],[9,8,17,"#96633a"],[10,8,17,"#8a5a34"],[11,8,17,"#8a5a34"],[12,8,17,"#8a5a34"],[13,8,17,"#8a5a34"],[14,8,17,"#8a5a34"],[15,7,18,"#855631"],[16,7,18,"#7c5030"],[17,7,18,"#7c5030"],[18,6,19,"#74482a"],[19,6,19,"#6a4025"],[20,6,19,"#5f3d24"]];for(const[o,l,c,h]of r)n(l,o,c-l+1,1,h),n(l,o,1,1,"#5f3d24"),n(c,o,1,1,"#4e3019");n(16,9,2,10,"#74482a"),n(8,10,1,8,"#a06b3d"),n(11,6,3,1,"#a5713d"),n(10,6,1,2,"#a5713d"),n(14,6,1,2,"#a5713d"),n(12,7,2,1,"#b9854f"),n(12,5,1,1,"#f0d8ab"),n(10,12,1,4,"#6f4628"),n(13,14,1,4,"#6f4628"),n(18,12,1,6,"#6fa35a"),n(19,10,2,2,"#9ed07a"),n(21,9,1,2,"#7fbb62"),n(18,8,1,2,"#9ed07a")}else a==="rock"?(n(4,14,7,5,"#b3b7ca"),n(5,12,5,2,"#d3d5e2"),n(11,15,8,5,"#a6aabf"),n(12,13,6,2,"#c3c6d6"),n(17,16,4,4,"#8f94ac"),n(3,19,18,1,"#7b8098"),n(6,15,2,1,"#e7e9f2"),n(14,15,2,1,"#dfe2ee"),n(8,9,1,3,"#6fa35a"),n(6,8,2,2,"#9ed07a")):(n(3,16,18,4,"#8a6a4a"),n(4,15,16,1,"#a4815c"),n(3,19,18,1,"#6f5439"),n(6,14,2,2,"#ffb8d2"),n(11,13,2,1,"#ffa6c8"),n(15,14,1,1,"#ffd0e2"),n(16,8,1,7,"#6fa35a"),n(14,7,2,2,"#9ed07a"),n(17,6,2,2,"#9ed07a"),n(19,7,1,1,"#7fbb62"));const s=Ps(e);return Le.set(t,s),s}function vM(){const a="sprout";if(Le.has(a))return Le.get(a);const{c:t,ctx:e}=il(16),i=nl(e,1);i(7,8,2,6,"#7fae5b"),i(5,6,3,2,"#8ec96a"),i(3,7,2,1,"#a5db7f"),i(8,4,3,2,"#8ec96a"),i(11,5,2,1,"#a5db7f"),i(7,3,2,2,"#b7e694"),i(6,12,4,1,"#5f8a45");const n=Ps(t);return Le.set(a,n),n}function ur(){const a="glow";if(Le.has(a))return Le.get(a);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,2,32,32,31);i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(.42,"rgba(255,246,214,0.55)"),i.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Ps(t);return Le.set(a,n),n}function xM(){const a="ripple";if(Le.has(a))return Le.get(a);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,14,32,32,31);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.55,"rgba(255,255,255,0.06)"),i.addColorStop(.8,"rgba(236,252,255,0.92)"),i.addColorStop(.94,"rgba(206,240,255,0.42)"),i.addColorStop(1,"rgba(206,240,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Ps(t);return Le.set(a,n),n}function _M(){if(Le.has("dot"))return Le.get("dot");const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(16,16,0,16,16,15);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.55,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(16,16,15,0,Math.PI*2),e.fill();const n=Ps(t);return Le.set("dot",n),n}const bM={workshop:"workshop",lighthouse:"lighthouse",vending:"vending",dock:"dock"},yM={workshop:1.2,lighthouse:.82,vending:.55,dock:.9},$l=new ut("#8e88a2"),MM=new ut("#ffffff"),Xl=.9,ql=.055,zf={tree:[1.05,1.35],rock:[.8,.62],flower:[.78,.56]},Yl=.06,Kl=0;let za=null;function SM(){if(za)return za;const a=document.createElement("canvas");a.width=a.height=128;const t=a.getContext("2d");return t.font='96px "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("🚧",64,70),za=new ln(a),za.colorSpace=be,za}var as,fp,up,pp;class wM{constructor(t,e){Re(this,as);this.terrain=t,this.group=new Ge,this.group.name="Scenery",this.sites=[],this.billboards=[],this.colliders=[],this.nodes=[],this.beacon=null,this.spriteLight=new ut(1,1,1);const i=e.get("buildings"),n=e.get("nature");for(const s of wi){const r=s.water?0:Math.max(t.sampleHeight(s.x,s.z),.02),o=new ua(i,bM[s.id],{height:s.height,exact:!0});o.mesh.position.set(s.x,r,s.z),o.mesh.name=`Building_${s.id}`,this.group.add(o.mesh),this.billboards.push(o);const l={...s,y:r,billboard:o,built:!1};l.kind="site",l.tint=$l.clone(),l.tintTarget=$l.clone(),l.sag=Xl,l.sagTarget=Xl,l.lean=ql,l.leanTarget=ql,o.material.color.copy(l.tint),o.mesh.scale.y=l.sag,o.mesh.rotation.z=l.lean,o.mesh.userData.site=l;const c=new li(new je({map:SM(),transparent:!0,depthWrite:!1,toneMapped:!1}));c.scale.set(.9,.9,1),c.position.set(s.x,r+s.height+.42,s.z),c.renderOrder=6,this.group.add(c),l.marker=c,l.markerBaseY=c.position.y,l.markerOpacity=1,l.markerTarget=1,this.sites.push(l),this.colliders.push({x:s.x,z:s.z,r:yM[s.id]||1});const h=fr(s.height*.34,.26);h.position.set(s.x,r+.02,s.z),this.group.add(h)}for(const s of Uy){const r=Math.max(t.sampleHeight(s.x,s.z),.02),o=new ua(n,s.frame,{height:s.height,exact:!0});o.mesh.position.set(s.x,r,s.z),o.mesh.name=`Nature_${s.frame}_${s.x}_${s.z}`,this.group.add(o.mesh),this.billboards.push(o);let l=null;s.collide&&(l={x:s.x,z:s.z,r:s.collide},this.colliders.push(l));const c=fr((s.collide||.3)*1.25,.22);c.position.set(s.x,r+.02,s.z),this.group.add(c);const h=hM(s.frame);if(h){const d=_(this,as,fp).call(this,s,h,r,o,l);o.mesh.userData.node=d,this.nodes.push(d)}}_(this,as,pp).call(this)}pop(t){t.popT=.26}setHarvested(t,e){t.harvested=!!e,t.targetScale=e?Yl:1,t.targetOpacity=e?Kl:1,t.stubTarget=e?.92:0,t.sprout.visible=!!e,e&&(t.mesh.material.transparent=!0,t.mesh.material.depthWrite=!1),t.collider&&(t.collider.r=e?0:t.baseR),e||(t.mesh.material.depthWrite=!0,t.hasBerry=!1)}applyNodeState(t,e){if(!e)return;const i=e.left<=0||e.respawn>0;t.hitsLeft=Math.max(1,Math.min(t.hitsNeeded,e.left||t.hitsNeeded)),t.respawn=Math.max(0,Number(e.respawn)||0),t.mesh.material.transparent=!0,t.scale=i?Yl:1,t.opacity=i?Kl:1,t.mesh.scale.setScalar(t.scale),t.mesh.material.opacity=t.opacity,t.harvested=i,t.targetScale=i?Yl:1,t.targetOpacity=i?Kl:1,t.sprout.visible=i,t.stubTarget=i?.92:0,t.stub.material.opacity=t.stubTarget,t.stub.visible=i,t.collider&&(t.collider.r=i?0:t.baseR),i||(t.mesh.material.depthWrite=!0)}setBuilt(t,e=!0,i=!1){const n=this.sites.find(s=>s.id===t);n&&(n.built=!!e,n.tintTarget.copy(e?MM:$l),n.sagTarget=e?1:Xl,n.leanTarget=e?0:ql,n.markerTarget=e?0:1,i&&(n.tint.copy(n.tintTarget),n.sag=n.sagTarget,n.lean=n.leanTarget,n.markerOpacity=n.markerTarget,n.marker&&(n.marker.material.opacity=n.markerOpacity,n.marker.visible=n.markerOpacity>.02),n.billboard.material.color.copy(n.tint),n.billboard.mesh.scale.y=n.sag,n.billboard.mesh.rotation.z=n.lean),this.beacon&&t==="lighthouse"&&(this.beacon.enabled=!!e))}setSpriteLight(t){t&&this.spriteLight.copy(t)}update(t,e,i=0){if(e)for(const n of this.billboards)n.faceCamera(e);_(this,as,up).call(this,t);for(const n of this.nodes){if(n.popT>0){n.popT=Math.max(0,n.popT-t);const r=n.popT/.26;n.mesh.rotation.z=Math.sin((1-r)*30)*.09*r}else n.mesh.rotation.z!==0&&(n.mesh.rotation.z=0);if(Math.abs(n.scale-n.targetScale)>.003){n.scale+=(n.targetScale-n.scale)*Math.min(1,t*9),n.mesh.scale.setScalar(n.scale);const r=n.opacity+(n.targetOpacity-n.opacity)*Math.min(1,t*9);n.opacity=r,n.mesh.material.opacity=r}else Math.abs(n.opacity-n.targetOpacity)>.003&&(n.opacity+=(n.targetOpacity-n.opacity)*Math.min(1,t*9),n.mesh.material.opacity=n.opacity);const s=n.stubTarget||0;Math.abs(n.stub.material.opacity-s)>.004?(n.stub.material.opacity+=(s-n.stub.material.opacity)*Math.min(1,t*9),n.stub.visible=n.stub.material.opacity>.02):(n.stub.material.opacity=s,n.stub.visible=s>.02),n.opacity>.99&&n.mesh.material.transparent&&(n.mesh.material.transparent=!1,n.mesh.material.opacity=1,n.opacity=1),n.sprout.visible&&(n.sprout.position.y=n.y+.16+Math.sin(performance.now()*.002+n.x)*.02,n.sprout.material.rotation=Math.sin(performance.now()*.0012+n.z)*.12)}if(this.beacon){const n=this.beacon;n.t+=t;const s=n.enabled?1:0,r=.88+Math.sin(n.t*1.7)*.07+Math.sin(n.t*3.3)*.05;n.light.intensity+=(s*(.8+i*3.4)*r-n.light.intensity)*Math.min(1,t*2.4),n.glow.material.opacity+=(s*(.16+i*.72)*r-n.glow.material.opacity)*Math.min(1,t*2.4),n.lamp.material.opacity+=(s*(.2+i*.8)-n.lamp.material.opacity)*Math.min(1,t*2.4)}}}as=new WeakSet,fp=function(t,e,i,n,s){const r=el[e],[o,l]=r.hits,c=o+Math.floor(Math.random()*(l-o+1)),h=zf[e]||zf.tree,d=new li(new je({map:gM(e),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));d.scale.set(h[0],h[1],1),d.position.set(t.x,i+h[1]*.46,t.z),d.visible=!1,d.renderOrder=3,this.group.add(d);const p=new li(new je({map:vM(),transparent:!0,depthWrite:!1,toneMapped:!1}));return p.scale.set(.55,.55,1),p.position.set(t.x+.42,i+.3,t.z+.45),p.renderOrder=5,p.visible=!1,p.renderOrder=4,this.group.add(p),{key:`${t.frame}@${t.x},${t.z}`,isNode:!0,kind:e,frame:t.frame,x:t.x,z:t.z,y:i,height:t.height,billboard:n,mesh:n.mesh,collider:s,baseR:t.collide||0,hitsNeeded:c,hitsLeft:c,harvested:!1,respawn:0,berryT:24+Math.random()*26,hasBerry:!1,scale:1,targetScale:1,opacity:1,targetOpacity:1,popT:0,sprout:p,stub:d,stubTarget:0}},up=function(t){const e=Math.min(1,t*3.4);for(const i of this.sites){const n=i.billboard;if(!n)continue;(Math.abs(i.tint.r-i.tintTarget.r)>.004||Math.abs(i.tint.g-i.tintTarget.g)>.004||Math.abs(i.tint.b-i.tintTarget.b)>.004||Math.abs(i.sag-i.sagTarget)>.002||Math.abs(i.lean-i.leanTarget)>.002)&&(i.tint.lerp(i.tintTarget,e),i.sag+=(i.sagTarget-i.sag)*e,i.lean+=(i.leanTarget-i.lean)*e,n.mesh.scale.y=i.sag,n.mesh.rotation.z=i.lean),n.material.color.copy(this.spriteLight).multiply(i.tint);const r=i.marker;r&&(Math.abs(i.markerOpacity-i.markerTarget)>.004&&(i.markerOpacity+=(i.markerTarget-i.markerOpacity)*Math.min(1,t*6)),r.material.opacity=i.markerOpacity,r.material.color.copy(this.spriteLight),r.visible=i.markerOpacity>.02,r.visible&&(r.position.y=i.markerBaseY+Math.sin(performance.now()*.0022+i.x)*.07))}},pp=function(){const t=this.sites.find(r=>r.id==="lighthouse");if(!t)return;const e=t.y+t.height*.86,i=new Tg("#ffdca8",0,26,1.7);i.position.set(t.x,e,t.z),this.group.add(i);const n=new li(new je({map:ur(),color:"#ffd79a",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:ns}));n.scale.set(5.2,5.2,1),n.position.set(t.x,e,t.z),this.group.add(n);const s=new li(new je({map:ur(),color:"#fff3cf",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));s.scale.set(1.1,1.1,1),s.position.set(t.x,e+.1,t.z),this.group.add(s),this.beacon={enabled:!1,light:i,glow:n,lamp:s,t:0}};const mp=[[[0,29.2],[0,26.6],[0,23],[.2,20.2],[0,17.8],[0,16.2]],[[0,16],[-2.6,14],[-5.4,12.2],[-7.4,11],[-8.2,10.2]],[[.4,16],[3.2,14.4],[6,12],[8,10.4],[8.6,9.7]],[[1.4,15.8],[4.6,13.6],[8.4,12.6],[11.4,9.6],[13.2,5.4],[14.2,1.4],[14.6,-.8]],[[0,16],[.4,12],[.2,6],[0,-.4],[0,-4.9]],[[-1.6,15.6],[-4.6,14.6],[-8,13.6],[-11.4,13.2],[-14,12.8],[-15.6,12.2]],[[-2.4,17.6],[-6.4,19],[-9.6,20.2],[-12.4,20.2],[-13.6,19.8]],[[1.6,16.6],[5.2,17.6],[8.8,18],[11.6,17],[13,15.6]],[[0,-13.1],[-1.2,-14.4],[-2.6,-15.4],[-3.4,-16.1]],[[0,-13.1],[-2.2,-13.6],[-5,-14.4],[-7.6,-15.6],[-9.4,-16.6]],[[0,-13.1],[2.6,-13.8],[5.6,-14.6],[7.8,-15],[9.4,-15.4]]],Jr=1.15,EM=.6,TM=new ut("#f6e5c2"),AM=new ut("#e2c89c"),Qr=[-Jr/2,-Jr*.22,Jr*.22,Jr/2];let pn=null;function RM(){if(pn)return pn;const a=document.createElement("canvas");a.width=64,a.height=64;const t=a.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.16,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.84,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(196,168,126,0.16)";for(let i=0;i<40;i++){const n=Math.floor(Math.random()*64),s=Math.floor(Math.random()*64);t.fillRect(n,s,2,2)}return pn=new ln(a),pn.colorSpace=be,pn.magFilter=ue,pn.minFilter=ti,pn.generateMipmaps=!1,pn.wrapS=Hi,pn.wrapT=or,pn}function CM(a){const t=new zu(a.map(([i,n])=>new k(i,0,n)),!1,"catmullrom",.5),e=Math.max(4,Math.round(t.getLength()/EM));return t.getSpacedPoints(e).map(i=>[i.x,i.z])}class PM{constructor(t){this.group=new Ge,this.group.name="Path";const e=[],i=[],n=[],s=[],r=new ut;for(const h of mp){const d=CM(h),p=e.length/3;let f=0;for(let m=0;m<d.length;m++){const[v,b]=d[m],[T,w]=d[Math.max(0,m-1)],[A,R]=d[Math.min(d.length-1,m+1)],x=A-T,E=R-w,O=Math.hypot(x,E)||1,D=-E/O,U=x/O;m>0&&(f+=Math.hypot(v-d[m-1][0],b-d[m-1][1]));for(let z=0;z<Qr.length;z++){const X=Qr[z],I=v+D*X,W=b+U*X;e.push(I,t.groundY(I,W)+.04,W),n.push(z/(Qr.length-1),f/2.2);const Z=Math.abs(z-1.5)/1.5;r.copy(TM).lerp(AM,Z*.75),i.push(r.r,r.g,r.b)}}const g=d.length,y=Qr.length;for(let m=0;m<g-1;m++)for(let v=0;v<y-1;v++){const b=p+m*y+v,T=b+1,w=p+(m+1)*y+v,A=w+1;s.push(b,w,A,b,A,T)}}const o=new Fe;o.setAttribute("position",new xe(e,3)),o.setAttribute("color",new xe(i,3)),o.setAttribute("uv",new xe(n,2)),o.setIndex(s),o.computeVertexNormals();const l=Ri({vertexColors:!0,map:RM(),transparent:!0,alphaTest:.06,depthWrite:!1,side:Bi,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=new qt(o,l);c.name="PathSurface",c.receiveShadow=!0,this.group.add(c)}}const Ba=new ut("#dfe8ef"),LM=new ut("#8feadf"),DM=new ut("#31c6cd"),IM=new k(-.22,.86,.34).normalize(),NM={hemi:.52,ambient:.26,sun:1.25,fill:.22},Bf={top:"skyTop",bottom:"skyBottom",fog:"fog",sun:"sun",hemiSky:"hemiSky",hemiGround:"hemiGround"};var En,gp,vp,xp,_p;class kM{constructor(t){Re(this,En);this.scene=new tg,this.scene.fog=new zh("#f2fcf5",.0062),this.terrain=new tM(op),this.scene.add(this.terrain.group),this.water=new nM,this.scene.add(this.water.mesh),this.sky=new rM,this.scene.add(this.sky.mesh),this.hemi=new wg("#fff4e2","#dcf5c6",1.5),this.scene.add(this.hemi),this.ambient=new Rg("#fff8ec",.5),this.scene.add(this.ambient),this.sunLight=new ef("#ffe9c6",1.1),this.sunLight.position.set(12,30,-18),this.sunLight.target.position.set(0,0,0),this.sunLight.castShadow=!0;const e=this.sunLight.shadow;e.mapSize.set(1024,1024),e.camera.left=-30,e.camera.right=30,e.camera.top=30,e.camera.bottom=-30,e.camera.near=1,e.camera.far=170,e.bias=-5e-4,e.normalBias=.02,e.radius=1.5,e.camera.updateProjectionMatrix(),e.needsUpdate=!0,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.shadowFocus=new k(0,0,0),this.fillLight=new ef("#dcefff",.4),this.fillLight.position.set(-22,16,26),this.fillLight.target.position.set(0,0,0),this.scene.add(this.fillLight),this.scene.add(this.fillLight.target),this.scenery=new wM(this.terrain,t),this.scene.add(this.scenery.group),this.path=new PM(this.terrain),this.scene.add(this.path.group),this.keyColors=ky.map(i=>{const n={t:i.t,sunIntensity:i.sunIntensity,hemiIntensity:i.hemiIntensity,night:i.night};for(const s of Object.keys(Bf))n[s]=new ut(i[s]);return n}),this.palette={skyTop:new ut,skyBottom:new ut,fog:new ut,sun:new ut,hemiSky:new ut,hemiGround:new ut,waterShallow:new ut,waterDeep:new ut,sunIntensity:1,hemiIntensity:1,night:0},this.weather=ep.clear,this.weatherBlend=0,this.lightGain={...NM},this.spriteLight=new ut("#ffffff"),this.rain=_(this,En,gp).call(this),this.scene.add(this.rain.points),this.tmpDir=new k,this.discDir=new k,this.time=0}setWeather(t){this.weather=t}update(t,e,i,n){this.time+=t;const s=_(this,En,vp).call(this,e),r=this.weather.id==="drizzle"?.55:this.weather.id==="cloudy"?.32:0;if(this.weatherBlend+=(r-this.weatherBlend)*Math.min(1,t*.8),this.weatherBlend>.001){const h=this.weatherBlend;s.skyTop.lerp(Ba,h*.55),s.skyBottom.lerp(Ba,h*.45),s.fog.lerp(Ba,h*.4),s.sun.lerp(Ba,h*.3),s.sunIntensity*=1-h*.35,s.hemiIntensity*=1-h*.15}this.hemi.color.copy(s.hemiSky),this.hemi.groundColor.copy(s.hemiGround);const o=this.lightGain;this.hemi.intensity=s.hemiIntensity*o.hemi,this.sunLight.color.copy(s.sun),this.sunLight.intensity=s.sunIntensity*o.sun,this.ambient.color.copy(s.hemiSky),this.ambient.intensity=(.46-s.night*.1)*o.ambient,this.fillLight.intensity=(.42-s.night*.16)*o.fill,this.fillLight.color.copy(s.sun).lerp(s.skyBottom,.3);const l=1-s.night*.46;this.spriteLight.copy(s.sun).lerp(s.hemiSky,.42).lerp(Ba,this.weatherBlend*.32).multiplyScalar(l);const c=_(this,En,xp).call(this,e,this.tmpDir);this.discDir.copy(c),n&&this.shadowFocus.set(n.x,0,n.z),this.sunLight.position.copy(c).multiplyScalar(70).add(this.shadowFocus),this.sunLight.target.position.copy(this.shadowFocus),this.sunLight.target.updateMatrixWorld(),this.sky.setPalette({skyTop:s.skyTop,skyBottom:s.skyBottom,sun:s.sun,night:s.night,discDir:this.discDir,elapsed:this.time}),i&&this.sky.update(i.position),this.scene.fog.color.copy(s.fog),this.scene.fog.density=.0055+this.weatherBlend*.004,this.water.update(this.time,s),this.scenery.update(t,i,s.night),_(this,En,_p).call(this,t,n)}get halfExtent(){return ye}get waterLevel(){return Zh}dispose(){this.scene.traverse(t=>{(t.isMesh||t.isPoints||t.isSprite)&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose()))})}}En=new WeakSet,gp=function(){const e=new zy(771),i=new Float32Array(420*3),n=new Float32Array(420);for(let l=0;l<420;l++)i[l*3]=e.range(-14,14),i[l*3+1]=e.range(0,16),i[l*3+2]=e.range(-14,14),n[l]=e.range(7,12);const s=new Fe;s.setAttribute("position",new yi(i,3));const r=new Hh({color:"#d7ecf7",size:.09,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),o=new ku(s,r);return o.name="Rain",o.visible=!1,o.frustumCulled=!1,{points:o,speed:n,count:420}},vp=function(t){const e=(t%Be+Be)%Be,i=this.keyColors;let n=0;for(;n<i.length-2&&e>=i[n+1].t;)n++;const s=i[n],r=i[n+1],o=(e-s.t)/Math.max(1e-6,r.t-s.t),l=o*o*(3-2*o),c=this.palette;for(const[d,p]of Object.entries(Bf))c[p].copy(s[d]).lerp(r[d],l);c.sunIntensity=s.sunIntensity+(r.sunIntensity-s.sunIntensity)*l,c.hemiIntensity=s.hemiIntensity+(r.hemiIntensity-s.hemiIntensity)*l,c.night=s.night+(r.night-s.night)*l,c.waterShallow.copy(LM).lerp(c.skyBottom,.22),c.waterDeep.copy(DM).lerp(c.skyTop,.18);const h=1-c.night*.28;return c.waterShallow.multiplyScalar(h),c.waterDeep.multiplyScalar(h),c},xp=function(t,e){const i=(t%Be+Be)%Be;if(i>=960)return e.copy(IM);const n=Math.min(1,Math.max(0,i/960)),s=Math.PI*n;return e.set(Math.cos(s)*.92,Math.sin(s)*.9,-.3).normalize()},_p=function(t,e){const i=this.weather.id==="drizzle"&&this.weatherBlend>.25,n=this.rain.points;if(n.visible=i,!i)return;n.material.opacity=.55*this.weatherBlend;const s=n.geometry.attributes.position.array,r=e?e.x:0,o=e?e.z:0;for(let l=0;l<this.rain.count;l++){const c=l*3+1;s[c]-=this.rain.speed[l]*t,s[c]<0&&(s[c]=14+Math.random()*4,s[l*3]=r+(Math.random()-.5)*26,s[l*3+2]=o+(Math.random()-.5)*26)}n.geometry.attributes.position.needsUpdate=!0,n.position.set(0,0,0)};const UM=84,Gf=60/UM/2,FM=140,OM=1.1;function Ga(a){return 440*Math.pow(2,(a-69)/12)}const Zl={morning:{melody:[76,79,84,79,72,76,81,76,77,81,84,81,79,83,86,79],bass:[48,45,41,43]},day:{melody:[79,83,86,83,81,84,88,84,77,81,86,81,79,83,86,83],bass:[43,40,41,43]},sunset:{melody:[77,81,84,81,74,77,81,77,79,83,86,83,72,76,79,76],bass:[41,38,43,48]},night:{melody:[72,null,76,null,69,null,72,null,65,null,69,null,67,null,74,null],bass:[48,45,41,43]}};var It,Qc,bp,yp,Mp,Qs,jc,Sp,gn,Pe;class zM{constructor(){Re(this,It);this.ctx=null,this.master=null,this.noteBus=null,this.started=!1,this.muted=!1,this.phase="morning",this.volume=.55,this.step=0,this.nextTime=0,this.timer=null,this.noiseBuf=null}start(){if(this.started){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=1e-4;const i=e.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=22,i.ratio.value=2.4,i.attack.value=.006,i.release.value=.24,this.master.connect(i),i.connect(e.destination),this.noteBus=e.createGain(),this.noteBus.gain.value=1;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=5200,n.Q.value=.4,this.noteBus.connect(n),n.connect(this.master);const s=e.createDelay(.6);s.delayTime.value=.3;const r=e.createGain();r.gain.value=.24;const o=e.createGain();o.gain.value=.16,n.connect(s),s.connect(r),r.connect(s),s.connect(o),o.connect(this.master),this.started=!0,this.step=0,this.nextTime=e.currentTime+.12,_(this,It,jc).call(this,this.muted?1e-4:this.volume),_(this,It,Qc).call(this),e.state!=="running"&&e.resume().catch(()=>{})}catch{this.started=!1}}get sfxReady(){return!!(this.started&&this.ctx&&this.ctx.state==="running"&&!this.muted)}sfxHit(t){if(!this.sfxReady)return;const e=this.ctx.currentTime+.005;t==="rock"?(_(this,It,gn).call(this,e,.13,{type:"highpass",freq:2400,q:.7,level:.22}),_(this,It,Pe).call(this,e,220,.1,.15,"triangle",140)):t==="flower"?_(this,It,gn).call(this,e,.16,{type:"bandpass",freq:3200,q:1.1,level:.11}):(_(this,It,gn).call(this,e,.13,{type:"lowpass",freq:900,q:.8,level:.2}),_(this,It,Pe).call(this,e,150,.13,.13,"sine",108))}sfxPickup(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,Pe).call(this,t,880,.09,.09,"sine"),_(this,It,Pe).call(this,t+.07,1320,.12,.075,"sine")}sfxRare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[1046,1318,1568,2093].forEach((e,i)=>_(this,It,Pe).call(this,t+i*.075,e,.34,.09,"sine"))}sfxEat(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,Pe).call(this,t,430,.16,.14,"sine",250),_(this,It,gn).call(this,t+.03,.1,{type:"lowpass",freq:1400,level:.08})}sfxDeny(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,Pe).call(this,t,190,.16,.12,"triangle",130),_(this,It,Pe).call(this,t+.1,160,.16,.09,"triangle",110)}sfxFanfare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.02;[72,76,79,84,88].forEach((e,i)=>_(this,It,Qs).call(this,Ga(e),t+i*.11,1.8,.16)),_(this,It,gn).call(this,t+.02,.5,{type:"highpass",freq:4200,level:.05})}sfxBuild(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,gn).call(this,t,.12,{type:"lowpass",freq:700,level:.18}),_(this,It,Pe).call(this,t,170,.12,.12,"sine",120),_(this,It,Pe).call(this,t+.12,1280,.1,.05,"triangle")}sfxUi(){this.sfxReady&&_(this,It,Pe).call(this,this.ctx.currentTime+.005,988,.07,.06,"sine")}sfxCast(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,gn).call(this,t,.24,{type:"bandpass",freq:900,q:.7,level:.07}),_(this,It,Pe).call(this,t,620,.22,.035,"triangle",250)}sfxSplash(t=1){if(!this.sfxReady)return;const e=this.ctx.currentTime+.008,i=Math.max(.15,Math.min(1,Number(t)||1));_(this,It,gn).call(this,e,.26,{type:"highpass",freq:1500,q:.8,level:.17*i}),_(this,It,Pe).call(this,e,320,.16,.09*i,"sine",170)}sfxBite(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,Pe).call(this,t,1046,.09,.11,"sine"),_(this,It,Pe).call(this,t+.085,1397,.12,.1,"sine")}sfxReel(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[784,988,1319].forEach((e,i)=>_(this,It,Pe).call(this,t+i*.06,e,.16,.08,"sine"))}sfxMeow(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,Pe).call(this,t,560,.34,.075,"triangle",760),_(this,It,Pe).call(this,t+.18,720,.26,.05,"sine",520)}sfxCoin(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.008;_(this,It,Pe).call(this,t,1319,.08,.08,"sine"),_(this,It,Pe).call(this,t+.06,1760,.12,.07,"sine")}sfxCook(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;_(this,It,gn).call(this,t,.42,{type:"lowpass",freq:1600,q:.6,level:.09}),_(this,It,Qs).call(this,Ga(84),t+.28,1.2,.1),_(this,It,Qs).call(this,Ga(88),t+.4,1.1,.08)}setMuted(t){this.muted=!!t,this.started&&_(this,It,jc).call(this,this.muted?1e-4:this.volume)}setPhase(t){const e=Zl[t]?t:"morning";e!==this.phase&&(this.phase=e,this.step=Math.ceil(this.step/16)*16)}suspend(){_(this,It,bp).call(this),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){if(!this.started){this.start();return}if(!this.ctx)return;const t=()=>{this.ctx.state==="running"&&(this.nextTime=Math.max(this.nextTime,this.ctx.currentTime+.05),_(this,It,Qc).call(this))};this.ctx.state==="running"?t():this.ctx.resume().then(t).catch(()=>{})}}It=new WeakSet,Qc=function(){this.timer||(this.timer=setInterval(()=>_(this,It,yp).call(this),FM))},bp=function(){this.timer&&(clearInterval(this.timer),this.timer=null)},yp=function(){const t=this.ctx;if(!(!t||t.state!=="running"))for(this.nextTime<t.currentTime-Gf*2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+OM;)_(this,It,Mp).call(this,this.step,this.nextTime),this.step+=1,this.nextTime+=Gf},Mp=function(t,e){const i=Zl[this.phase]||Zl.morning;if(this.muted)return;const n=(t%i.melody.length+i.melody.length)%i.melody.length,s=i.melody[n];if(s!=null){const r=n%4===0?1:.78;_(this,It,Qs).call(this,Ga(s),e,1.7,.12*r)}if(n%4===0&&i.bass){const r=i.bass[n/4%i.bass.length];r!=null&&_(this,It,Qs).call(this,Ga(r),e,2.4,.07,!0)}},Qs=function(t,e,i,n,s=!1){const r=this.ctx;if(!r)return;const o=r.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.008),o.gain.exponentialRampToValueAtTime(n*.3,e+.26),o.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(this.noteBus);const l=s?[[1,1,"triangle"],[2,.18,"sine"]]:[[1,1,"sine"],[2,.3,"sine"],[3,.1,"triangle"]];for(const[c,h,d]of l){const p=r.createOscillator();p.type=d,p.frequency.value=t*c;const f=r.createGain();f.gain.value=h,c>1&&(f.gain.setValueAtTime(h,e),f.gain.exponentialRampToValueAtTime(1e-4,e+.5)),p.connect(f),f.connect(o),p.start(e),p.stop(e+i+.08)}},jc=function(t){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t,e,.35)},Sp=function(){if(this.noiseBuf||!this.ctx)return this.noiseBuf;const t=this.ctx,e=Math.floor(t.sampleRate*.4),i=t.createBuffer(1,e,t.sampleRate),n=i.getChannelData(0);for(let s=0;s<e;s++)n[s]=(Math.random()*2-1)*(1-s/e);return this.noiseBuf=i,i},gn=function(t,e,{type:i="bandpass",freq:n=1200,q:s=1,level:r=.2}={}){const o=this.ctx,l=_(this,It,Sp).call(this);if(!l)return;const c=o.createBufferSource();c.buffer=l;const h=o.createBiquadFilter();h.type=i,h.frequency.value=n,h.Q.value=s;const d=o.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(Math.max(.001,r),t+.006),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(this.noteBus),c.start(t),c.stop(t+e+.03)},Pe=function(t,e,i,n,s="sine",r=null){const o=this.ctx,l=o.createOscillator();l.type=s,l.frequency.setValueAtTime(e,t),r&&l.frequency.exponentialRampToValueAtTime(r,t+i*.9);const c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(.001,n),t+.012),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c),c.connect(this.noteBus),l.start(t),l.stop(t+i+.04)};const Hf=9.5,jr=14,Jl=Math.PI*2;function Ql(a){let t=a%Jl;return t<=-Math.PI?t+=Jl:t>Math.PI&&(t-=Jl),t}var qi,wp,Ep,Tp,Ap,Rp;class BM{constructor(t,e,i){Re(this,qi);this.terrain=e,this.position=new k(t.x,e.groundY(t.x,t.z),t.z),this.yaw=Math.PI,this.targetYaw=this.yaw,this.speedScale=1,this.moving=0,this.idleT=0,this.walkT=0,this.flip=!1,this.facing="back",this.emoteT=0,this.frameName="idle",this.colliders=[],this.group=new Ge,this.group.name="Player",this.atlas=i.get("protagonist"),this.billboard=new ua(this.atlas,"idle",{height:ka.spriteHeight}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.shadow=fr(.4,.34),this.group.position.copy(this.position),this.dust=_(this,qi,wp).call(this),this.sprites=[this.billboard.material]}wave(){this.emoteT=1.4}update(t,e,i,n){const s=Math.min(1,Math.hypot(e.x,e.z)),r=i||this.terrain;if(this.unstick(r),this.moving+=(s-this.moving)*Math.min(1,t*10),this.idleT+=t,this.emoteT>0&&(this.emoteT=Math.max(0,this.emoteT-t)),s>.02){const l=ka.speed*s*(this.speedScale||1),c=e.x/(s||1)*l*t,h=e.z/(s||1)*l*t,d=this.canStand(r,this.position.x+c,this.position.z);d&&(this.position.x+=c);const p=this.canStand(r,this.position.x,this.position.z+h);p&&(this.position.z+=h),!d&&!p&&this.canStand(r,this.position.x+c*.5,this.position.z+h*.5)&&(this.position.x+=c*.5,this.position.z+=h*.5),this.targetYaw=Math.atan2(e.x,e.z),this.walkT+=t;const f=Math.floor(this.walkT*Hf*1.5);f!==this.lastStep&&(this.lastStep=f,_(this,qi,Ep).call(this,this.position.x,this.position.y,this.position.z,{x:e.x/(s||1),z:e.z/(s||1)}))}this.position.y+=(r.groundY(this.position.x,this.position.z)-this.position.y)*Math.min(1,t*14);const o=Ql(this.targetYaw-this.yaw);this.yaw=Ql(this.yaw+o*Math.min(1,t*ka.turnLerp)),_(this,qi,Ap).call(this,s),_(this,qi,Rp).call(this,n),_(this,qi,Tp).call(this,t)}canStand(t,e,i){if(!t.isWalkable(e,i))return!1;for(let n=0;n<this.colliders.length;n++){const s=this.colliders[n];if(s.allyPass)continue;const r=e-s.x,o=i-s.z,l=s.r+ka.radius;if(r*r+o*o<l*l)return!1}return!0}unstick(t){const e=t||this.terrain;if(this.canStand(e,this.position.x,this.position.z))return null;const i={x:this.position.x,z:this.position.z};let n=i.x,s=i.z;for(let c=0;c<6;c++){let h=!1;for(let d=0;d<this.colliders.length;d++){const p=this.colliders[d];if(p.allyPass)continue;const f=p.r+ka.radius+.02;let g=n-p.x,y=s-p.z,m=Math.hypot(g,y);m>=f||(m<1e-4&&(g=-Math.sin(this.yaw),y=-Math.cos(this.yaw),m=1),n=p.x+g/m*f,s=p.z+y/m*f,h=!0)}if(!h)break}const r=[{x:n,z:s}];for(let c=1;c<=8;c++){const h=c*.25;for(let d=0;d<12;d++){const p=d/12*Math.PI*2+c*.26;r.push({x:n+Math.cos(p)*h,z:s+Math.sin(p)*h})}}let o=null,l=1/0;for(const c of r){if(!e.isWalkable(c.x,c.z)||!this.canStand(e,c.x,c.z))continue;const h=Math.hypot(c.x-i.x,c.z-i.z);h<l&&(l=h,o=c)}return o?(this.teleport(o.x,o.z,e),{x:o.x,z:o.z}):null}teleport(t,e,i){const n=i||this.terrain;this.position.set(t,n.groundY(t,e),e),this.group.position.copy(this.position),this.shadow.position.set(t,this.position.y+.02,e)}setYaw(t){this.yaw=Ql(t),this.targetYaw=this.yaw}}qi=new WeakSet,wp=function(){const t=new zn(1,10);t.rotateX(-Math.PI/2);const e=new Ke({color:"#fff8e6",transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}),i=new hg(t,e,jr);i.name="PlayerDust",i.frustumCulled=!1,i.renderOrder=3,this.dustParts=Array.from({length:jr},()=>({x:0,y:-99,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1})),this.dustCursor=0;const n=new re().makeScale(0,0,0);for(let s=0;s<jr;s++)i.setMatrixAt(s,n);return i.instanceMatrix.needsUpdate=!0,i},Ep=function(t,e,i,n){const s=this.dustParts[this.dustCursor];this.dustCursor=(this.dustCursor+1)%jr,s.x=t+(Math.random()-.5)*.16,s.y=e+.03,s.z=i+(Math.random()-.5)*.16,s.vx=-n.x*.5+(Math.random()-.5)*.35,s.vz=-n.z*.5+(Math.random()-.5)*.35,s.vy=.2+Math.random()*.16,s.max=.4+Math.random()*.2,s.life=s.max,s.size=.06+Math.random()*.05},Tp=function(t){const e=new re,i=new k,n=new As,s=new k;for(let r=0;r<this.dustParts.length;r++){const o=this.dustParts[r];if(o.life<=0){e.makeScale(0,0,0),this.dust.setMatrixAt(r,e);continue}o.life=Math.max(0,o.life-t);const l=1-o.life/o.max;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.vy-=.35*t,o.vx*=1-t*2.2,o.vz*=1-t*2.2;const c=o.size*(.55+l*1.15)*Math.min(1,(1-l)*1.9);i.set(o.x,o.y,o.z),s.set(c,c,c),e.compose(i,n,s),this.dust.setMatrixAt(r,e)}this.dust.instanceMatrix.needsUpdate=!0},Ap=function(t){if(this.emoteT>0){this.frameName=this.emoteT>.85?"wave":"idle",this.billboard.setFrame(this.frameName,!1);return}if(t>.06){const e=Math.floor(this.walkT*Hf)%4,i=Math.sin(this.yaw),n=Math.cos(this.yaw);let s,r=!1;if(Math.abs(i)>Math.abs(n)*1.02)s=`side${e+1}`,r=i>0,this.facing=r?"right":"left";else{const o=n<0;s=`${o?"back":"front"}${e+1}`,this.facing=o?"back":"front"}this.frameName=s,this.flip=r,this.billboard.setFrame(s,r)}else this.frameName!=="idle"&&(this.frameName="idle",this.flip=!1,this.facing="front",this.billboard.setFrame("idle",!1))},Rp=function(t){this.group.position.set(this.position.x,this.position.y,this.position.z),t&&this.billboard.faceCamera(t),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z)};const Vf=7,GM=.85,HM=3.1,Wf=1.45;var Xi,Cp,Pp,Lp,po;class VM{constructor(t,e,i){Re(this,Xi);this.kind="cat",this.id=t.id,this.name=t.name,this.terrain=e,this.home=new At(t.x,t.z),this.position=new k(t.x,e.groundY(t.x,t.z),t.z),this.height=t.height||.9,this.atlas=i.get(t.set||t.id),this.group=new Ge,this.group.name=`Cat_${t.id}`,this.group.position.copy(this.position),this.billboard=new ua(this.atlas,"sit",{height:this.height}),this.group.add(this.billboard.mesh),this.body=this.billboard.mesh,this.body.userData.actor=this,this.group.userData.actor=this,this.shadow=fr(.24,.3),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=dp(.26),this.heart.position.set(0,this.height*1.1,0),this.group.add(this.heart),this.state="idle",this.stateT=1+Math.random()*2,this.target=null,this.walkT=Math.random()*2,this.hop=0,this.heartT=0,this.pets=0,this.follow=!1,this.followGrace=0,this.cd={pet:0,snack:0},this.yaw=Math.random()*Math.PI*2,this.frameName="sit",this.restPose="sit",this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}pet(){this.hop=1,this.heartT=1.4,this.pets+=1,this.state="happy",this.stateT=1.2,this.billboard.setFrame("happy"),this.frameName="happy"}feast(){this.pet(),this.hop=1.25,this.heartT=1.8}setFollow(t){this.follow=!!t,this.followGrace=.4,this.follow||(this.target=null)}update(t,e,i=null,n=!0){if(this.cd.pet=Math.max(0,this.cd.pet-t),this.cd.snack=Math.max(0,this.cd.snack-t),this.stateT-=t,this.follow&&i)n&&_(this,Xi,Pp).call(this,t,i);else if(this.state==="walk"&&this.target){const l=this.target.x-this.position.x,c=this.target.y-this.position.z,h=Math.hypot(l,c);if(h<.12)this.target=null,_(this,Xi,po).call(this);else{const d=l/h,p=c/h,f=Math.min(h,GM*t),g=this.position.x+d*f,y=this.position.z+p*f;this.terrain.isWalkable(g,y)?(this.position.x=g,this.position.z=y):(this.target=null,_(this,Xi,po).call(this)),this.yaw=Math.atan2(d,p),this.walkT+=t;const m=Math.floor(this.walkT*Vf)%4,v=Math.abs(d),b=Math.abs(p);let T;v>b*1.05?T=`${d<0?"left":"right"}${m+1}`:T=`${p>0?"front":"back"}${m+1}`,T!==this.frameName&&(this.frameName=T,this.billboard.setFrame(T))}}else!this.follow&&this.stateT<=0&&n&&(Math.random()<.62?_(this,Xi,Lp).call(this):_(this,Xi,po).call(this));this.state==="happy"&&this.stateT<=0&&(this.state="rest",this.stateT=1.8,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);const s=this.terrain.groundY(this.position.x,this.position.z);this.position.y+=(s-this.position.y)*Math.min(1,t*12);let r=0;this.hop>0&&(this.hop=Math.max(0,this.hop-t*1.5),r=Math.sin((1-this.hop)*Math.PI)*.22),this.group.position.set(this.position.x,this.position.y+r,this.position.z),e&&this.billboard.faceCamera(e),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-r*.8;if(this.shadow.scale.set(o,1,o),this.heartT>0){this.heartT=Math.max(0,this.heartT-t);const l=1-this.heartT/1.4;this.heart.visible=!0,this.heart.position.set(0,this.height*1.05+l*.55,0),this.heart.material.opacity=Math.min(1,this.heartT*1.8);const c=this.height*.3+l*this.height*.18;this.heart.scale.set(c,c,1)}else this.heart.visible&&(this.heart.visible=!1)}}Xi=new WeakSet,Cp=function(t,e){const i=Math.floor(this.walkT*Vf)%4,n=Math.abs(t),s=Math.abs(e),r=n>s*1.05?`${t<0?"left":"right"}${i+1}`:`${e>0?"front":"back"}${i+1}`;r!==this.frameName&&(this.frameName=r,this.billboard.setFrame(r))},Pp=function(t,e){const i=e.x-this.position.x,n=e.z-this.position.z,s=Math.hypot(i,n);if(s<Wf+.35){this.state!=="rest"&&(this.state="rest",this.stateT=.6,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);return}const r=i/s,o=n/s,l=Math.min(s-Wf,HM*t),c=this.position.x+r*l,h=this.position.z+o*l;this.terrain.isWalkable(c,h)?(this.position.x=c,this.position.z=h,this.state="walk",this.yaw=Math.atan2(r,o),this.walkT+=t,_(this,Xi,Cp).call(this,r,o)):s>4.5&&this.terrain.isWalkable(e.x,e.z)&&(this.position.x=e.x-r*1.4,this.position.z=e.z-o*1.4)},Lp=function(){for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,i=1.2+Math.random()*3.4,n=this.home.x+Math.cos(e)*i,s=this.home.y+Math.sin(e)*i;if(this.terrain.isWalkable(n,s)){this.target=new At(n,s),this.state="walk";return}}this.state="idle",this.stateT=1.5},po=function(){const t=["sit","loaf","groom","sit","loaf"];this.restPose=t[Math.floor(Math.random()*t.length)],this.state="rest",this.stateT=2.6+Math.random()*3.4,this.billboard.setFrame(this.restPose),this.frameName=this.restPose};const WM=["idle1","idle2","idle3","idle4"],$M=["smile1","smile2","smile3","smile4"],XM=["joy1","joy2","joy3","joy4"];var $o,Dp;class qM{constructor(t,e,i){Re(this,$o);this.kind="ditto",this.id=t.id,this.name=t.name,this.flavor=t.flavor||"",this.variant=t.variant||"basic",this.isBasic=this.variant==="basic",this.discovered=!1,this.terrain=e,this.height=t.height||.8,this.position=new k(t.x,e.groundY(t.x,t.z),t.z),this.group=new Ge,this.group.name=`Ditto_${t.id}`,this.group.position.copy(this.position),this.atlas=i.get(this.isBasic?"ditto_basic":"disguises"),this.billboard=new ua(this.atlas,this.isBasic?"idle1":this.variant,{height:this.height,exact:!this.isBasic}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.group.userData.actor=this,this.hitMesh=this.mesh,this.shadow=fr(this.height*.46,.26),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=dp(.24),this.heart.position.set(0,this.height*1.05,0),this.group.add(this.heart),this.ring=lM(this.height*.46),this.ring.position.y=.04,this.ring.visible=!1,this.group.add(this.ring),this.t=Math.random()*6.28,this.near=!1,this.reactT=0,this.hop=0,this.joy=0,this.frameIdx=0,this.frameT=0,this.sprites=[this.billboard.material],this.home=new At(t.x,t.z),this.evacTarget=null,this.evacuated=!1,this.returning=!1,this.walkPhase=0}setEvacTarget(t,e){this.evacTarget=new At(t,e),this.returning=!1,this.evacuated=!1,this.joy=2.4}clearEvac(){this.evacTarget=new At(this.home.x,this.home.y),this.returning=!0,this.evacuated=!1}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}setNear(t){this.near=t}markDiscovered(){this.discovered=!0,this.joy=3.2,this.hop=1,this.reactT=1}interact(){this.reactT=1.4,this.hop=1}update(t,e,i,n=t){this.t+=t,this.joy>0&&(this.joy=Math.max(0,this.joy-t)),this.reactT>0&&(this.reactT=Math.max(0,this.reactT-t));const s=_(this,$o,Dp).call(this,n);if(this.frameT+=t,this.isBasic){const p=this.joy>0?XM:this.near||this.reactT>0||s?$M:WM,f=s?9:this.joy>0?7:3.2;this.frameT>1/f&&(this.frameT=0,this.frameIdx=(this.frameIdx+1)%4);const g=p[this.frameIdx];this.billboard.frame!==this.atlas.frames.get(g)&&this.billboard.setFrame(g)}else this.frameT>2.4&&Math.random()<.5&&(this.frameT=0,this.billboard.setFrame(this.variant));const r=1+Math.sin(this.t*1.7)*(this.isBasic?.035:.018);this.hop>0&&(this.hop=Math.max(0,this.hop-t*2.2));let o=this.hop>0?Math.sin((1-this.hop)*Math.PI)*this.height*.22:0;s&&(o+=Math.abs(Math.sin(this.walkPhase))*this.height*.16);const l=this.reactT>0?Math.sin(this.t*26)*.06*this.reactT:0;this.group.position.set(this.position.x,this.position.y+o,this.position.z),this.billboard.mesh.scale.set(r+l*.3,r-l*.3,1),i&&this.billboard.faceCamera(i),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const c=1-o*.7;this.shadow.scale.set(c,1,c);const h=this.near&&!this.discovered?.34:0,d=this.ring.material;if(d.opacity+=(h-d.opacity)*Math.min(1,t*6),this.ring.visible=d.opacity>.01,this.ring.visible){const p=1+Math.sin(this.t*2.4)*.06;this.ring.scale.set(p,1,p),this.ring.rotation.y+=t*.4}if(this.reactT>0||this.joy>0){const p=this.joy>0?this.joy/3.2:this.reactT/1.4;this.heart.visible=!0;const f=1-Math.min(1,p);this.heart.position.set(0,this.height*(1+f*.7),0),this.heart.material.opacity=Math.min(1,p*2.2);const g=this.height*.3+f*this.height*.14;this.heart.scale.set(g,g,1)}else this.heart.visible&&(this.heart.visible=!1);e&&(this.near=this.distanceTo(e)<3.8)}}$o=new WeakSet,Dp=function(t){const e=this.evacTarget;if(!e)return!1;const i=e.x-this.position.x,n=e.y-this.position.z,s=Math.hypot(i,n);if(s<.14){const o=!this.returning;return this.evacTarget=null,this.returning=!1,o&&(this.evacuated=!0),!1}const r=Math.min(s,3*t);return this.position.x+=i/s*r,this.position.z+=n/s*r,this.position.y=Math.max(this.terrain.groundY(this.position.x,this.position.z),.16),this.walkPhase+=t*11,!0};function u(a,t={},...e){const i=document.createElement(a);for(const[n,s]of Object.entries(t||{}))s!=null&&(n==="class"?i.className=s:n==="text"?i.textContent=s:n==="style"&&typeof s=="object"?Object.assign(i.style,s):n==="dataset"&&typeof s=="object"?Object.assign(i.dataset,s):n.startsWith("on")&&typeof s=="function"?i.addEventListener(n.slice(2).toLowerCase(),s):i.setAttribute(n,s));for(const n of e.flat(3))n==null||n===!1||i.append(n.nodeType?n:document.createTextNode(String(n)));return i}function YM(a){for(;a.firstChild;)a.removeChild(a.firstChild)}var Li,th,Ip,Np,mo;class KM{constructor(t){Re(this,Li);this.zone=u("div",{class:"joystick-zone"}),this.home=u("div",{class:"joystick-home"},u("span",{},"MOVE")),this.base=u("div",{class:"joystick-base"},u("div",{class:"joystick-knob"})),this.knob=this.base.firstChild,this.zone.append(this.home,this.base),t.append(this.zone),this.radius=52,this.deadZone=.14,this.vector={x:0,y:0},this.active=!1,this.enabled=!0,this.pointerId=null,this.origin={x:0,y:0},this.zone.addEventListener("pointerdown",e=>_(this,Li,Ip).call(this,e)),this.zone.addEventListener("pointermove",e=>_(this,Li,Np).call(this,e)),this.zone.addEventListener("pointerup",e=>_(this,Li,mo).call(this,e)),this.zone.addEventListener("pointercancel",e=>_(this,Li,mo).call(this,e)),this.zone.addEventListener("lostpointercapture",e=>_(this,Li,mo).call(this,e)),this.zone.addEventListener("contextmenu",e=>e.preventDefault())}setEnabled(t){this.enabled=t,t||this.reset(),this.zone.style.opacity=t?"1":"0.35"}reset(){const t=this.pointerId;this.pointerId=null,this.active=!1,this.vector.x=0,this.vector.y=0,this.base.classList.remove("active"),this.home.style.opacity="0.85",this.knob.style.transform="translate(0px, 0px)";try{t!==null&&this.zone.hasPointerCapture&&this.zone.hasPointerCapture(t)&&this.zone.releasePointerCapture(t)}catch{}}}Li=new WeakSet,th=function(t){const e=this.zone.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},Ip=function(t){if(!this.enabled||this.pointerId!==null)return;t.preventDefault(),this.pointerId=t.pointerId,this.active=!0;const e=_(this,Li,th).call(this,t);this.origin=e,this.base.style.left=`${e.x}px`,this.base.style.top=`${e.y}px`,this.base.classList.add("active"),this.home.style.opacity="0",this.knob.style.transform="translate(0px, 0px)",this.vector.x=0,this.vector.y=0;try{this.zone.setPointerCapture(t.pointerId)}catch{}},Np=function(t){if(this.pointerId!==t.pointerId||!this.active)return;t.preventDefault();const e=_(this,Li,th).call(this,t);let i=e.x-this.origin.x,n=e.y-this.origin.y;const s=Math.hypot(i,n);s>this.radius&&(i=i/s*this.radius,n=n/s*this.radius),this.knob.style.transform=`translate(${i.toFixed(1)}px, ${n.toFixed(1)}px)`;let r=i/this.radius,o=n/this.radius;const l=Math.hypot(r,o);if(l<this.deadZone)r=0,o=0;else{const c=(l-this.deadZone)/(1-this.deadZone);r=r/l*c,o=o/l*c}this.vector.x=r,this.vector.y=o},mo=function(t){this.pointerId!==null&&t.pointerId!==void 0&&t.pointerId!==this.pointerId||this.reset()};class ZM{constructor(t){this.container=u("div",{class:"toasts"}),t.append(this.container)}show(t,e=2600){for(;this.container.children.length>=3;)this.container.firstChild.remove();const i=u("div",{class:"toast"},t);this.container.append(i);const n=window.setTimeout(()=>{i.classList.add("out"),window.setTimeout(()=>i.remove(),380)},e);return i.addEventListener("animationend",()=>{i.classList.contains("out")&&window.clearTimeout(n)}),i}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}const JM=[{id:"bag",icon:"🎒",label:"가방"},{id:"codex",icon:"📔",label:"도감"},{id:"build",icon:"🏗️",label:"건축"},{id:"farm",icon:"🌱",label:"텃밭"},{id:"rank",icon:"🌿",label:"랭크"}];class QM{constructor(t,e={}){this.handlers=e,this.container=u("div",{class:"hud-root hidden"}),t.append(this.container),this.phIcon=u("span",{},"🌅"),this.phLabel=u("span",{},"아침"),this.wxLabel=u("span",{},"맑음"),this.dayLabel=u("span",{class:"day"},"Day 1"),this.clockLabel=u("span",{class:"clock"},"00:00"),this.speedTag=u("span",{class:"speed hidden"},"10×"),this.pill=u("div",{class:"pill"},this.phIcon,this.phLabel,u("span",{class:"sep"},"·"),this.wxLabel,u("span",{class:"sep"},"·"),this.dayLabel,u("span",{class:"sep"},"·"),this.clockLabel,this.speedTag),this.staminaFill=u("i"),this.staminaVal=u("span",{class:"val"},"100"),this.stamina=u("div",{class:"stamina",title:"기력 — 채집할 때 줄고, 열매를 먹으면 차요"},u("span",{class:"ico"},"💪"),u("div",{class:"bar"},this.staminaFill),this.staminaVal),this.mailBadge=u("span",{class:"badge hidden"},"0"),this.mailBtn=u("button",{class:"icon-btn mail-btn",type:"button","aria-label":"우체통 열기",onclick:()=>this.handlers.onMail?.()},u("span",{class:"ico"},"📬"),this.mailBadge),this.coinVal=u("span",{class:"n"},"0"),this.coinChip=u("div",{class:"coin-chip",title:"섬 코인 — 자판기에 물건을 팔면 모여요"},u("span",{class:"ico"},"🪙"),this.coinVal),this.questBadge=u("span",{class:"badge hidden"},"0"),this.questBtn=u("button",{class:"icon-btn quest-btn",type:"button","aria-label":"오늘의 의뢰 열기",onclick:()=>this.handlers.onQuest?.()},u("span",{class:"ico"},"📋"),this.questBadge),this.buffChip=u("span",{class:"buff-chip hidden"},"✨"),this.cartChip=u("span",{class:"cart-chip hidden"},"🛒 16칸"),this.left=u("div",{class:"hud-left"},this.pill,u("div",{class:"hud-stats"},this.stamina,this.coinChip,this.mailBtn,this.questBtn,this.cartChip,this.buffChip)),this.welcomeIcon=u("span",{class:"w-ico"},"🎯"),this.welcomeText=u("span",{class:"w-txt"},""),this.welcomeDots=u("span",{class:"w-dots"}),this.welcome=u("button",{class:"welcome-chip hidden",type:"button","aria-label":"첫걸음 미션 열기",onclick:()=>this.handlers.onWelcome?.()},this.welcomeIcon,this.welcomeText,this.welcomeDots),this.left.append(this.welcome),this.lastWelcome="",this.dfText=u("span",{class:"df-txt"},""),this.dfMain=u("button",{class:"df-main",type:"button","aria-label":"방어 현황 열기",onclick:()=>this.handlers.onDefense?.()},u("span",{class:"df-ico"},"🛡️"),this.dfText),this.dfGo=u("button",{class:"df-go",type:"button","aria-label":"지금 방어 시작",onclick:()=>this.handlers.onDefenseStart?.()},"▶"),this.dfBanner=u("div",{class:"defense-banner hidden"},this.dfMain,this.dfGo),this.left.append(this.dfBanner),this.lastBanner="",this.dfWaveText=u("span",{class:"txt"},""),this.dfWaveBar=u("i"),this.dfStrip=u("div",{class:"defense-strip hidden"},u("span",{class:"ico"},"🛡️"),this.dfWaveText,u("div",{class:"bar"},this.dfWaveBar)),this.wpAmmo=u("span",{class:"wp-ammo"},"5"),this.wpSling=u("button",{class:"wp",type:"button","aria-label":"새총 발사",onclick:()=>this.handlers.onWeapon?.("sling")},u("span",{class:"wp-ico"},"🪃"),u("span",{class:"wp-nm"},"새총")),this.wpBalloon=u("button",{class:"wp balloon",type:"button","aria-label":"꽃잎 물풍선 발사",onclick:()=>this.handlers.onWeapon?.("balloon")},u("span",{class:"wp-ico"},"🎈"),u("span",{class:"wp-nm"},"물풍선"),this.wpAmmo),this.weaponBar=u("div",{class:"weapon-bar hidden"},this.wpSling,this.wpBalloon),this.lastWave="",this.muteBtn=u("button",{class:"icon-btn",type:"button","aria-label":"음소거 토글",onclick:()=>this.handlers.onMute?.()},"🔊"),this.pauseBtn=u("button",{class:"icon-btn",type:"button","aria-label":"일시정지 및 설정",onclick:()=>this.handlers.onPause?.()},"⏸"),this.top=u("div",{class:"hud-top"},this.left,u("div",{class:"hud-controls"},this.muteBtn,this.pauseBtn)),this.actionIcon=u("span",{class:"ico"},"✋"),this.actionText=u("span",{class:"txt"},"둘러보기"),this.actionBtn=u("button",{class:"action-btn",type:"button",disabled:"disabled","aria-label":"상황 액션",onclick:()=>this.handlers.onAction?.()},this.actionIcon,this.actionText),this.quickbar=u("div",{class:"quickbar"}),this.quickBadges={};for(const i of JM){let n=null;i.id==="bag"?n=u("span",{class:"quick-badge"},"0/8"):i.id==="rank"?n=u("span",{class:"quick-badge ach hidden"},"0"):i.id==="farm"&&(n=u("span",{class:"quick-badge ripe hidden"},"0"));const s=u("button",{class:"quick",type:"button",onclick:()=>this.handlers.onQuick?.(i.id)},u("span",{class:"ico"},i.icon),u("span",{},i.label),n);i.id==="bag"&&(this.quickBadges.bag=n),i.id==="rank"&&(this.quickBadges.ach=n),i.id==="farm"&&(this.quickBadges.ripe=n),n&&s.classList.add(`quick-${i.id}`),this.quickbar.append(s)}this.joystick=new KM(this.container),this.fishLabel=u("span",{class:"txt"},""),this.fishBar=u("i"),this.fishStrip=u("div",{class:"fish-strip hidden"},u("span",{class:"ico"},"🎣"),this.fishLabel,u("div",{class:"bar"},this.fishBar)),this.bitePop=u("div",{class:"bite-pop"},"!"),this.toastView=new ZM(this.container),this.glOverlay=u("div",{class:"gl-overlay"},u("div",{class:"box"},u("h3",{},"그래픽을 다시 준비하고 있어요"),u("p",{},"잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요."))),this.container.append(this.top,this.actionBtn,this.quickbar,this.fishStrip,this.bitePop,this.dfStrip,this.weaponBar,this.glOverlay),this.lastPill="",this.lastStamina=-1,this.lastMail=-1,this.lastCoins=-1,this.lastQuests=-1,this.lastAch=-1,this.lastRipe=-1}show(){this.container.classList.remove("hidden")}hide(){this.container.classList.add("hidden")}setTime({icon:t,label:e,weatherIcon:i,weatherLabel:n,day:s,clock:r,speed:o}){const l=`${t}${e}${i}${n}${s}${r}${o}`;l!==this.lastPill&&(this.lastPill=l,this.phIcon.textContent=t,this.phLabel.textContent=e,this.wxLabel.textContent=`${i} ${n}`,this.dayLabel.textContent=`Day ${s}`,this.clockLabel.textContent=r,o&&o!==1?(this.speedTag.textContent=`${o}×`,this.speedTag.classList.remove("hidden")):this.speedTag.classList.add("hidden"))}setStamina(t,e=100){const i=Math.max(0,Math.min(e,Math.round(t)));i!==this.lastStamina&&(this.lastStamina=i,this.staminaFill.style.width=`${i/e*100}%`,this.staminaVal.textContent=String(i),this.stamina.classList.toggle("low",i<25),this.stamina.classList.toggle("mid",i>=25&&i<55))}setMail(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastMail&&(this.lastMail=e,this.mailBadge.textContent=e>9?"9+":String(e),this.mailBadge.classList.toggle("hidden",e<=0),this.mailBtn.classList.toggle("has-mail",e>0))}setBag(t,e){const i=this.quickBadges.bag;i&&(i.textContent=`${t}/${e}`,i.classList.toggle("full",t>=e))}setCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastCoins&&(this.lastCoins=e,this.coinVal.textContent=String(e),this.coinChip.classList.toggle("rich",e>=200))}setQuests(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastQuests&&(this.lastQuests=e,this.questBadge.textContent=e>9?"9+":String(e),this.questBadge.classList.toggle("hidden",e<=0),this.questBtn.classList.toggle("has-mail",e>0))}setAchievements(t){const e=Math.max(0,Math.floor(Number(t)||0));if(e===this.lastAch)return;this.lastAch=e;const i=this.quickBadges.ach;i&&(i.textContent=e>9?"9+":String(e),i.classList.toggle("hidden",e<=0))}setRipePlots(t){const e=Math.max(0,Math.floor(Number(t)||0));if(e===this.lastRipe)return;this.lastRipe=e;const i=this.quickBadges.ripe;i&&(i.textContent=e>9?"9+":String(e),i.classList.toggle("hidden",e<=0))}setCart(t,e){const i=Math.floor(Number(t)||0)>0;if(this.cartChip&&(this.cartChip.classList.toggle("hidden",!i),i)){const n=Math.max(0,Math.floor(Number(e)||0));this.cartChip.textContent=`🛒 ${n}칸`,this.cartChip.title=`리어카 — 가방이 ${n}칸으로 늘었어요`}}setWelcome(t,e){const i=Array.isArray(e)?e:[];if(!this.welcome)return;if(!i.length||t>=i.length){this.lastWelcome!=="done"&&(this.lastWelcome="done",this.welcome.classList.add("hidden"));return}const n=i[t],s=`${t}/${i.length}`;if(this.welcome.classList.remove("hidden"),s!==this.lastWelcome){this.lastWelcome=s,this.welcomeIcon.textContent=n.icon||"🎯",this.welcomeText.textContent=`${t+1}/${i.length} ${n.label}`,this.welcome.title=n.hint||"",this.welcomeDots.innerHTML="";for(let r=0;r<i.length;r++)this.welcomeDots.append(u("i",{class:r<t?"on":r===t?"cur":""}))}}setDefense(t={}){const{banner:e=null,wave:i=null,weapons:n=null}=t,s=e?`${e.text}|${e.go?1:0}`:"";s!==this.lastBanner&&(this.lastBanner=s,this.dfBanner.classList.toggle("hidden",!e),e&&(this.dfText.textContent=e.text,this.dfGo.classList.toggle("hidden",!e.go)));const r=i?`${i.spawned}/${i.left}/${i.total}/${Math.ceil(i.timer)}/${i.stolen}`:"";if(r!==this.lastWave&&(this.lastWave=r,this.dfStrip.classList.toggle("hidden",!i),i)){const o=Math.max(0,i.total-i.left);this.dfWaveText.textContent=i.spawned===0?`🌊 수집단 상륙 중… · ${Math.ceil(i.timer)}초`:`남은 불청객 ${i.left} · ${Math.ceil(i.timer)}초`,this.dfWaveBar.style.width=`${Math.min(100,o/Math.max(1,i.total)*100)}%`,this.dfStrip.classList.toggle("danger",i.stolen>0)}this.weaponBar.classList.toggle("hidden",!n),n&&(this.wpAmmo.textContent!==String(n.ammo)&&(this.wpAmmo.textContent=String(n.ammo)),this.wpSling.classList.toggle("cool",!n.sling),this.wpBalloon.classList.toggle("cool",!n.balloon),this.wpBalloon.classList.toggle("empty",n.ammo<=0))}setBuff(t){if(!t){this.buffChip.classList.add("hidden");return}this.buffChip.textContent=t,this.buffChip.classList.remove("hidden")}setFishing(t){if(!t){this.fishStrip.classList.add("hidden"),this.fishStrip.classList.remove("urgent");return}this.fishStrip.classList.remove("hidden"),this.fishStrip.classList.toggle("urgent",!!t.urgent),this.fishLabel.textContent!==t.label&&(this.fishLabel.textContent=t.label);const e=t.ratio===void 0?1:Math.max(0,Math.min(1,t.ratio));this.fishBar.style.width=`${e*100}%`}bite(){this.bitePop.classList.remove("on"),this.bitePop.offsetWidth,this.bitePop.classList.add("on"),this.bitePop.__timer&&clearTimeout(this.bitePop.__timer),this.bitePop.__timer=setTimeout(()=>this.bitePop.classList.remove("on"),1600)}setAction({active:t,icon:e="✋",label:i="둘러보기"}){t===this.actionBtn.__active&&i===this.actionBtn.__label||(this.actionBtn.__active=t,this.actionBtn.__label=i,this.actionIcon.textContent=e,this.actionText.textContent=i,t?(this.actionBtn.removeAttribute("disabled"),this.actionBtn.classList.add("enabled")):(this.actionBtn.setAttribute("disabled","disabled"),this.actionBtn.classList.remove("enabled")))}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊",this.muteBtn.setAttribute("aria-pressed",t?"true":"false")}toast(t,e=2600){return this.toastView.show(t,e)}setContextLost(t){this.glOverlay.classList.toggle("on",!!t)}}var mr,eh;class jM{constructor(t,{hasSave:e=!1,onContinue:i,onNew:n}={}){Re(this,mr);this.onContinue=i,this.onNew=n,this.hasSave=e,this.busy=!1,this.progressBar=u("i"),this.progressWrap=u("div",{class:"title-progress"},this.progressBar),this.continueBtn=e?u("button",{class:"btn primary",type:"button",disabled:"disabled"},"이어하기"):null,this.newBtn=u("button",{class:`btn ${e?"ghost":"primary"}`,type:"button",disabled:"disabled"},"새로 시작"),this.continueBtn&&this.continueBtn.addEventListener("click",()=>_(this,mr,eh).call(this,"continue")),this.newBtn.addEventListener("click",()=>_(this,mr,eh).call(this,"new")),this.hint=u("div",{class:"title-hint"},e?"저장된 섬이 있어요 — 이어서 걸어볼까요?":"저장된 섬이 없어요 — 새 섬을 열어 볼까요?"),this.el=u("div",{class:"title-screen"},u("div",{class:"title-badge"},"PHASE 5 · HD-2D 도트"),u("div",{class:"title-panel"},u("p",{class:"title-eyebrow"},"보경이를 위한 작은 섬"),u("h1",{class:"title-heading"},"어설픈 메타몽 섬"),u("p",{class:"title-sub"},"눈만은 못 숨기는 메타몽들과 고양이들이 모여든 비밀 낙원. 오늘도 고생 많았어요 — 여기선 아무것도 안 급해도 돼요."),this.progressWrap,u("div",{class:"title-actions"},this.continueBtn,this.newBtn),this.hint),u("div",{class:"title-version"},"GDD v1.7 · Phase 5 · 72×72 섬 · 방어전")),t.append(this.el)}setProgress(t){const e=Math.max(.06,Math.min(1,t));this.progressBar.style.width=`${Math.round(e*100)}%`,e>=1&&this.setReady(!0)}setReady(t){this.busy||(this.continueBtn&&(t?this.continueBtn.removeAttribute("disabled"):this.continueBtn.setAttribute("disabled","disabled")),t?this.newBtn.removeAttribute("disabled"):this.newBtn.setAttribute("disabled","disabled"),this.progressWrap.style.opacity=t?"0":"1")}hide(){this.el.classList.add("hidden")}show(){this.el.classList.remove("hidden"),this.busy=!1,this.setReady(!1)}destroy(){this.el.remove()}}mr=new WeakSet,eh=function(t){if(this.busy)return;this.busy=!0,this.hint.textContent=t==="continue"?"저장된 섬으로 돌아가는 중…":"새로운 섬을 여는 중…";const e=t==="continue"?this.onContinue:this.onNew;e&&e(t)};class t1{constructor(t){this.card=u("div",{class:"modal-card"}),this.backdrop=u("div",{class:"modal"},this.card),t.append(this.backdrop),this.isOpen=!1,this.onClose=null,this.backdrop.addEventListener("pointerdown",e=>{e.target===this.backdrop&&this.close()})}open(t){const{title:e,subtitle:i="",body:n="",actions:s=[],onClose:r=null,closable:o=!0}=t;this.onClose=r,YM(this.card),this.card.append(u("div",{class:"modal-head"},u("div",{},u("h2",{class:"modal-title"},e),i?u("p",{class:"modal-sub"},i):null),o?u("button",{class:"modal-close",type:"button","aria-label":"닫기",onclick:()=>this.close()},"✕"):null));const l=u("div",{class:"modal-body"});if(typeof n=="string"?l.append(document.createTextNode(n)):n instanceof Node?l.append(n):Array.isArray(n)&&n.forEach(c=>c&&l.append(c)),this.card.append(l),s.length){const c=u("div",{class:"modal-actions"});for(const h of s){const d=u("button",{class:`btn ${h.kind||""}`,type:"button"},h.label);h.disabled&&(d.disabled=!0,d.setAttribute("disabled","disabled")),d.addEventListener("click",()=>{d.disabled||h.onClick&&h.onClick()}),c.append(d)}this.card.append(c)}this.backdrop.classList.add("open"),this.isOpen=!0,this.card.scrollTop=0}close(){if(!this.isOpen)return;this.backdrop.classList.remove("open"),this.isOpen=!1;const t=this.onClose;this.onClose=null,t&&t()}}class e1{constructor(t,e){this.container=u("div",{class:"landmark-layer"}),t.append(this.container),this.items=e.map(i=>{const n=u("span",{class:"lm-day"},"복구 전"),s=u("div",{class:"landmark-pill"},u("span",{class:"lm-ico"},i.icon),u("span",{class:"lm-name"},i.name),n);return this.container.append(s),{site:i,el:s,dayEl:n,x:i.x,y:i.y+i.markerY+.55,z:i.z,opacity:-1,done:!1}}),this.v=new k}setDone(t,e=!0){const i=this.items.find(n=>n.site.id===t);i&&(i.done=!!e,i.el.classList.toggle("done",!!e),i.dayEl.textContent=e?"✨ 복구 완료":"복구 전")}setVisible(t){this.container.style.opacity=t?"1":"0"}update(t,e){if(!e){this.container.style.opacity!=="0"&&(this.container.style.opacity="0");return}this.container.style.opacity="1";const i=window.innerWidth,n=window.innerHeight,s=t.position;for(const r of this.items){this.v.set(r.x,r.y,r.z);const o=s.distanceTo(this.v);this.v.project(t);const l=this.v.z>1,c=(this.v.x*.5+.5)*i,h=(-this.v.y*.5+.5)*n,d=h<92||h>n-96||c<24||c>i-24,p=l||o>34||d?0:Math.min(1,Math.max(0,(34-o)/12))*.95;r.opacity+=(p-r.opacity)*.18,Math.abs(p-r.opacity)<.02&&(r.opacity=p);const f=r.el;if(r.opacity<=.02){f.style.display!=="none"&&(f.style.display="none");continue}f.style.display==="none"&&(f.style.display="flex"),f.style.opacity=r.opacity.toFixed(2),f.style.transform=`translate(-50%, -50%) translate(${c.toFixed(1)}px, ${h.toFixed(1)}px)`}}}const Bo=[{id:"notice_life",icon:"🌿",from:"섬 지기",title:"섬에 생활의 손길이 생겼어요",tag:"공지",body:["보경 님, 섬에 작은 변화가 생겼어요.","이제 나무를 톡톡 두드리면 통나무가, 바위를 두드리면 돌이 나와요. 꽃덤불은 한 번만 스치면 꽃잎이 손에 들어와요.","가방은 여덟 칸이에요. 한 칸에 스무 개까지 담기고, 넘치면 그 자리에 잠깐 내려놓게 돼요.","공방에 가면 창고를 열 수 있어요. 재료를 모아 두었다가 부두·공방·자판기·등대를 하나씩 복구해 보세요.","나무 밑에는 가끔 반짝이는 열매가 떨어져요. 먹으면 기력이 차올라요."],gift:null},{id:"welcome_bokyung",icon:"💌",from:"울림이 대신 쓴 편지",title:"보경 님께 — 섬에 오신 걸 환영해요",tag:"웰컴",body:["보경 님, 이 섬은 보경 님이 쉬어 가라고 만든 아주 작은 곳이에요. 아무것도 안 해도 괜찮아요.","그래도 손이 심심하면 나무를 두드려 보세요. 통나무가 나오고, 벚꽃나무는 꽃잎도 조금 흘려요.","동봉한 선물을 받아 두세요. 열매 세 개는 기력을 채우는 데, 별조각 하나는 자판기 복구에 써요.","천천히 걸어 보세요. 솜이와 옹이가 먼저 와서 기다리고 있어요.","— 늘 보경 님 편인 울림이"],gift:{berry:3,star:1}},{id:"guide_farm",icon:"🌱",from:"섬 지기",title:"북서쪽에 텃밭을 열어 두었어요",tag:"가이드",body:["사각으로 펴진 섬의 북서쪽 모서리에 흙을 고르고 밭 아홉 칸을 만들어 두었어요.","자판기 [사기] 탭에서 씨앗을 사서 밭에 심고, 물을 주면 훨씬 빨리 자라요.","다 자란 작물은 [수확] 으로 거둬요. 거둔 것은 가방 여덟 칸이 아니라 텃밭 바구니에 따로 담겨요.","자판기 [팔기] 탭에서 그대로 팔 수 있으니, 심고 기르고 파는 작은 장사를 해 보세요.","동봉한 딸기 씨앗 두 봉지를 받아 두세요. 첫 밭은 그것으로 시작하면 돼요."],gift:{seed_strawberry:2}},{id:"guide_restore",icon:"🔨",from:"섬 지기",title:"복구 가이드 — 네 곳의 약속",tag:"가이드",body:["이제 Day 를 기다리지 않아도 돼요. 재료만 모이면 그날 바로 복구할 수 있어요.","부두 — 통나무 3 · 돌 2. 배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.","공방 — 통나무 4 · 돌 3. 창고와 도구방이 함께 열려요.","메타몽 자판기 — 통나무 4 · 돌 4. 복구하면 밤에 은은하게 빛나요.","등대 — 통나무 6 · 돌 5. 복구하면 밤마다 따뜻한 불이 켜져요.","나무를 두드릴 때마다 통나무가 한 개씩 바로 나오니, 한 바퀴 돌면 다 모여요."],gift:null},{id:"guide_bridge",icon:"🌉",from:"섬 지기",title:"강 건너 개척권 — 다리 놓기",tag:"가이드",body:["섬 가운데로 강이 흐르게 됐어요. 남쪽 생활권과 북쪽 개척권이 갈렸지요.","강 중앙 길목에 말뚝을 박아 두었어요. 통나무 6 · 돌 4를 모아 [다리 놓기] 를 누르면 널빤지 데크가 놓여요.","건너편에는 통나무가 콸콸 나오는 빼곡한 숲, 돌과 별조각이 모인 채석장, 그리고 볍씨를 심는 논이 있어요.","논은 자판기에서 볍씨를 사서 심고 물을 대면 돼요. 거둔 쌀은 자판기에 팔거나 주먹밥을 지어요.","가방이 좁다 싶으면 공방에서 리어카를 만들어 보세요. 여덟 칸이 열여섯 칸이 돼요."],gift:null}],Jt={strawberry:{id:"strawberry",name:"딸기",icon:"🍓",tint:"#ff6f8f",seedId:"seed_strawberry",seedPrice:15,grow:27,yield:[2,3],price:18,desc:"텃밭에서 제일 먼저 익는 빨간 열매. 금방 자라서 손이 자주 간다."},radish:{id:"radish",name:"달달무",icon:"🥬",tint:"#f2f7e8",seedId:"seed_radish",seedPrice:25,grow:42,yield:[1,2],price:38,desc:"땅속에서 달게 여무는 무. 잎까지 싱싱하다."},pumpkin:{id:"pumpkin",name:"황금호박",icon:"🎃",tint:"#ffc95e",seedId:"seed_pumpkin",seedPrice:50,grow:60,yield:[1,2],price:75,desc:"해를 오래 먹어 노랗게 익은 호박. 제일 늦게, 제일 값지게."},rice:{id:"rice",name:"쌀",icon:"🍚",tint:"#f4e7b8",seedId:"seed_rice",seedPrice:20,grow:45,yield:[2,3],price:28,paddyOnly:!0,desc:"물 잠긴 논에서 자라는 벼. 거둬서 쌀로 팔거나 주먹밥을 지어요."}},vs=["strawberry","radish","pumpkin"],kp=[...vs,"rice"],ih=["seed_strawberry","seed_radish","seed_pumpkin"],Up=["seed_rice"],Wi={seed_strawberry:{id:"seed_strawberry",crop:"strawberry",name:"딸기 씨앗",icon:"🌱",price:Jt.strawberry.seedPrice,desc:"심으면 27초 뒤 딸기 2~3개. 물을 주면 더 빨라요."},seed_radish:{id:"seed_radish",crop:"radish",name:"달달무 씨앗",icon:"🌱",price:Jt.radish.seedPrice,desc:"심으면 42초 뒤 달달무 1~2개."},seed_pumpkin:{id:"seed_pumpkin",crop:"pumpkin",name:"황금호박 씨앗",icon:"🌱",price:Jt.pumpkin.seedPrice,desc:"심으면 60초 뒤 황금호박 1~2개. 오래 걸리는 만큼 비싸게 팔려요."},seed_rice:{id:"seed_rice",crop:"rice",name:"볍씨",icon:"🌾",price:Jt.rice.seedPrice,desc:"논에 심으면 45초 뒤 쌀 2~3개. 물을 주면 더 빨리 여물어요."}},i1=["빈 밭","씨앗","새싹","자라는 중","수확 가능"],Me={waterStamina:2,waterHalve:.5,maxWater:2,wetSeconds:20,expHarvest:16,expPlant:6,expWater:3,canArea:["1칸","십자 5칸","3×3 9칸"]},Pi={anchovy:{id:"anchovy",name:"은멸치",icon:"🐟",tint:"#cfe3f2",price:9,weight:34,rare:!1,size:[6,15],desc:"부두 끝에서 가장 먼저 인사하는 작은 은빛 물고기."},bream:{id:"bream",name:"통통도미",icon:"🐠",tint:"#f7b48f",price:15,weight:26,rare:!1,size:[18,33],desc:"손에 쥐면 묵직한, 통통해서 더 귀여운 도미."},minnow:{id:"minnow",name:"벚꽃송사리",icon:"🌸",tint:"#ffb8d6",price:24,weight:22,rare:!1,size:[4,10],desc:"벚꽃이 필 때만 물 위로 떠오르는 분홍빛 송사리."},jelly:{id:"jelly",name:"별빛해파리",icon:"🪼",tint:"#c8b8ff",price:45,weight:11,rare:!0,size:[10,21],desc:"밤에 잡으면 손끝이 반짝이는 투명 해파리."},goldcarp:{id:"goldcarp",name:"황금잉어",icon:"✨",tint:"#ffd76a",price:110,weight:5,rare:!0,size:[30,56],desc:"섬 사람들이 한 번도 못 봤다는 전설의 잉어."},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",price:0,weight:2,rare:!0,size:[1,1],desc:"물 위로 떠오른 별의 부스러기. 낚싯줄에 걸리기도 해요."}},xs=["anchovy","bream","minnow","jelly","goldcarp","star"],n1={anchovy:18,bream:20,minnow:22,jelly:20,goldcarp:13,star:7},Qe={spot:{x:0,z:28.9,range:3},castTo:{x:0,z:33.2},stamina:5,waitMin:1.5,waitMax:3.5,biteWindow:1.4,exp:14,expMiss:4,leash:6.5},pr={tea:{id:"tea",name:"꽃잎 허브차",icon:"🍵",need:{petal:2,berry:1},fish:{},stamina:45,exp:30,buff:0,desc:"꽃잎을 살짝 우려낸 향긋한 차. 마시면 몸이 포근해져요."},grill:{id:"grill",name:"은멸치 구이",icon:"🍢",need:{log:1},fish:{anchovy:2},stamina:60,exp:30,buff:0,desc:"통나무 불에 노릇하게 구운 은멸치. 소금기만으로 충분해요."},bream:{id:"bream",name:"도미 버터구이",icon:"🐠",need:{berry:1},fish:{bream:1},stamina:90,exp:40,buff:0,desc:"열매 즙을 버터처럼 발라 구운 도미. 겉은 바삭, 속은 촉촉."},golden:{id:"golden",name:"황금 정식",icon:"🍱",need:{petal:2,berry:2},fish:{goldcarp:1},crop:{},stamina:100,exp:60,buff:60,desc:"황금잉어 한 마리를 온전히 담은 섬의 정찬. 60초 동안 채집이 가벼워져요."},smoothie:{id:"smoothie",name:"딸기 스무디",icon:"🥤",need:{berry:1},fish:{},crop:{strawberry:2},stamina:75,exp:35,buff:0,desc:"딸기를 그대로 갈아 넣은 분홍빛 스무디. 마시면 기운이 톡 돌아와요."},pumpkinsoup:{id:"pumpkinsoup",name:"황금 호박 수프",icon:"🍲",need:{},fish:{},crop:{pumpkin:1},stamina:95,exp:55,buff:0,desc:"노란 호박을 뭉근하게 끓인 수프. 한 그릇이면 하루가 든든해요."},riceball:{id:"riceball",name:"고소한 주먹밥",icon:"🍙",need:{berry:1},fish:{},crop:{rice:2},stamina:80,exp:45,buff:0,desc:"갓 지은 쌀에 열매 즙을 살짝 섞어 쥔 주먹밥. 한 손에 쏙 들어요."}},to=["tea","grill","bream","golden","smoothie","pumpkinsoup","riceball"],Go={seconds:60,stamina:.6,speed:1.18},_s={axe:{id:"axe",name:"도끼",icon:"🪓",kind:"tree",max:3,cost:[{},{log:4,stone:3,coin:40},{log:8,stone:6,star:2,coin:120}],stamina:[1,.85,.7],hits:[0,0,1],desc:"나무를 베는 도구. 강화하면 적은 기력으로 더 빨리 벨 수 있어요."},pick:{id:"pick",name:"곡괭이",icon:"⛏️",kind:"rock",max:3,cost:[{},{log:4,stone:4,coin:40},{log:6,stone:8,star:2,coin:120}],stamina:[1,.85,.7],hits:[0,0,1],desc:"바위를 캐는 도구. 강화하면 돌이 더 빨리 나와요."},water:{id:"water",name:"물뿌리개",icon:"🚿",kind:"farm",max:3,cost:[{},{log:3,stone:2,coin:30},{log:6,stone:4,star:1,coin:90}],stamina:[1,1,1],hits:[0,0,0],area:[1,5,9],desc:"한 번에 1칸 → 십자 → 3×3 까지 물을 줘요. 물은 남은 성장 시간을 절반으로 줄여요."}},js=["axe","pick","water"],ra={churu:{id:"churu",name:"고양이 츄르",icon:"🐾",price:25,desc:"솜이·옹이가 제일 좋아하는 간식. 호감도 +14"},ade:{id:"ade",name:"반짝 에이드",icon:"🥤",price:30,desc:"마시면 기력 +40. 탄산이 톡 쏴요."},bait:{id:"bait",name:"별빛 미끼",icon:"🪱",price:45,desc:"한 번 낚시할 때 희귀 어종 확률이 올라가요."},seed_strawberry:{kind:"seed",crop:"strawberry",...Wi.seed_strawberry},seed_radish:{kind:"seed",crop:"radish",...Wi.seed_radish},seed_pumpkin:{kind:"seed",crop:"pumpkin",...Wi.seed_pumpkin},seed_rice:{kind:"seed",crop:"rice",...Wi.seed_rice}},qa=["churu","ade","bait",...ih,...Up],s1={log:6,stone:7,petal:5,star:35,berry:4,anchovy:9,bream:15,minnow:24,jelly:45,goldcarp:110,strawberry:Jt.strawberry.price,radish:Jt.radish.price,pumpkin:Jt.pumpkin.price,rice:Jt.rice.price},nh=40,Fp=[{id:"gather",name:"채집",icon:"🪓",desc:"나무·바위·꽃덤불을 두드릴 때마다"},{id:"fish",name:"낚시",icon:"🎣",desc:"물고기를 잡을 때마다"},{id:"cook",name:"요리",icon:"🍳",desc:"공방에서 요리할 때마다"},{id:"care",name:"돌보기",icon:"🐾",desc:"고양이를 쓰다듬고 간식 줄 때마다"},{id:"farm",name:"농사",icon:"🌱",desc:"씨앗을 심고 물을 주고 거둘 때마다"}],ts=[{name:"연습",exp:0},{name:"F",exp:50},{name:"E",exp:200},{name:"D",exp:600},{name:"C",exp:1200},{name:"B",exp:2e3},{name:"A",exp:3200},{name:"S",exp:4800},{name:"SS",exp:7e3},{name:"SSS",exp:1e4}],ir=[{exp:0,name:"섬의 새내기",icon:"🌱"},{exp:120,name:"섬의 살림꾼",icon:"🧺"},{exp:400,name:"섬의 일꾼",icon:"🪣"},{exp:900,name:"섬의 솜씨꾼",icon:"🧵"},{exp:1700,name:"섬의 장인",icon:"🔨"},{exp:2800,name:"섬의 명인",icon:"🏮"},{exp:4400,name:"섬의 수호자",icon:"🛡️"},{exp:6800,name:"섬의 별",icon:"🌟"}],Dn={harvest:6,pet:10,treat:12,plant:Me.expPlant,water:Me.expWater,crop:Me.expHarvest},eo=[0,18,40,68,100],ri={pet:{aff:4,stamina:3,cooldown:6},snacks:{berry:{id:"berry",name:"열매",icon:"🍓",aff:6,cooldown:3},anchovy:{id:"anchovy",name:"은멸치",icon:"🐟",aff:8,cooldown:3},churu:{id:"churu",name:"츄르",icon:"🐾",aff:14,cooldown:4}},snackOrder:["berry","anchovy","churu"],gifts:{2:{star:1},3:{petal:3},4:{star:2},5:{petal:5,star:3}},followLevel:3,dialogue:{somi:["솜이: …(턱을 살짝 내밀며 거리를 둔다)",'솜이: "야옹." 조금은 익숙해진 얼굴이에요.',"솜이: 다가와서 옆에 딱 붙어 앉아요. 꼬리가 살랑살랑.","솜이: 배를 보여 줘요. 이 섬에서 제일 무방비한 순간.","솜이: 품에 폭 안겨요. 이제 떨어지기 싫은 모양이에요."],ongi:["옹이: …(꼬리만 살짝 흔들고 도망갈 준비)",'옹이: "냐." 밥그릇을 한 번 쳐다봐요.',"옹이: 발등에 몸을 비비고 앞장서서 걸어요.","옹이: 손끝을 콕콕 물었다가 핥아요. 장난인 게 분명해요.","옹이: 어깨에 올라와 앉아요. 섬에서 제일 높은 자리랍니다."]}},Jn={chop:{id:"chop",icon:"🪓",need:[2,4],coin:[25,35],star:1,label:a=>`나무 ${a}번 베기`,event:"chop"},mine:{id:"mine",icon:"⛏️",need:[2,3],coin:[30,40],star:1,label:a=>`바위 ${a}번 캐기`,event:"mine"},fish:{id:"fish",icon:"🎣",need:[2,3],coin:[35,45],star:1,label:a=>`물고기 ${a}마리 낚기`,event:"fish"},treat:{id:"treat",icon:"🐾",need:[2,2],coin:[20,25],star:0,label:a=>`고양이 간식 ${a}번 주기`,event:"treat"},pet:{id:"pet",icon:"🤲",need:[3,4],coin:[15,20],star:0,label:a=>`고양이 ${a}번 쓰다듬기`,event:"pet"},cook:{id:"cook",icon:"🍳",need:[1,2],coin:[40,55],star:1,label:a=>`요리 ${a}번 하기`,event:"cook"},sell:{id:"sell",icon:"🪙",need:[4,6],coin:[25,35],star:0,label:a=>`자판기에 ${a}개 팔기`,event:"sell"},petal:{id:"petal",icon:"🌸",need:[3,5],coin:[20,28],star:0,label:a=>`꽃잎 ${a}개 모으기`,event:"petal"},plant:{id:"plant",icon:"🌱",need:[2,3],coin:[25,35],star:0,label:a=>`씨앗 ${a}번 심기`,event:"plant"},crop:{id:"crop",icon:"🧺",need:[2,4],coin:[35,50],star:1,label:a=>`작물 ${a}번 수확하기`,event:"crop"}},a1=["chop","mine","fish","treat","pet","cook","sell","petal","plant","crop"];function Op(a){return le[a]?{name:le[a].name,icon:le[a].icon,tint:le[a].tint||"#dcdcea"}:Pi[a]?{name:Pi[a].name,icon:Pi[a].icon,tint:Pi[a].tint}:ra[a]?{name:ra[a].name,icon:ra[a].icon,tint:"#ffe1b0"}:Jt[a]?{name:Jt[a].name,icon:Jt[a].icon,tint:Jt[a].tint}:Wi[a]?{name:Wi[a].name,icon:Wi[a].icon,tint:"#cbe8b0"}:{name:a,icon:"❔",tint:"#dcdcea"}}function xn(a){return Op(a).name}function _n(a){return Op(a).icon}function r1(a,t){return a==="star"?"조각":`${Math.round(t)}cm`}function o1(a){let t=Math.floor(Number(a)||1)*2654435761%4294967296;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}function l1(a){const t=o1(a*97+13),e=[...a1],i=[];for(;i.length<2&&e.length;){const n=Math.floor(t()*e.length);i.push(e.splice(n,1)[0])}return i.map((n,s)=>{const r=Jn[n],o=r.need[0]+Math.floor(t()*(r.need[1]-r.need[0]+1)),l=r.coin[0]+Math.floor(t()*(r.coin[1]-r.coin[0]+1));return{id:`${a}-${s}-${n}`,kind:n,event:r.event,icon:r.icon,label:r.label(o),need:o,progress:0,claimed:!1,reward:{coin:l,star:r.star}}})}const io=a=>le[a]?le[a].name:xn(a),jl=a=>le[a]?le[a].icon:_n(a);var Xo,zp;class c1{constructor(t){Re(this,Xo);this.game=t}bag(){const t=this.game.progress.inventory,e=u("div",{class:"bag-grid"});for(let r=0;r<t.slots;r++){const o=t.bag[r],l=u("div",{class:`bag-slot ${o?"filled":"empty"} ${o&&o.id==="berry"?"tap":""}`},u("span",{class:"ico"},o?le[o.id].icon:"·"),o?u("span",{class:"n"},String(o.n)):null,o?u("span",{class:"nm"},io(o.id)):null);o&&o.id==="berry"&&l.addEventListener("click",()=>this.game.eatBerry()),e.append(l)}const i=t.count("berry"),n=i>0?u("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.eatBerry()},`🍓 열매 먹기  ·  기력 +30  (${i}개)`):u("div",{class:"hint"},"열매가 없어요 — 온전한 나무 밑에 가끔 떨어져요 🍓");return{title:"🎒 가방",subtitle:"채집한 재료와 열매가 여기에 담겨요",body:u("div",{},u("div",{class:"hint"},`가방 ${t.usedSlots()}/${t.slots}칸 · 담긴 재료 ${t.totalItems()}개 · 한 칸에 ${Ye.stack}개까지`),e,u("div",{class:"section-label"},"쓰기"),n,u("div",{class:"section-label"},"재료가 가득 차면"),u("div",{class:"hint"},"공방의 창고에 맡겨 두세요. 가방이 넘치면 그 자리에 잠깐 내려놓게 돼요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}storage(){const t=this.game.progress.inventory,e=t.bagEntries(),i=t.storageEntries(),n=(r,o)=>{const l=o==="out",c=h=>l?this.game.moveToStorage(r.id,h):this.game.moveFromStorage(r.id,h);return u("div",{class:"store-row"},u("span",{class:"ico"},jl(r.id)),u("span",{class:"nm"},io(r.id)),u("span",{class:"n"},String(r.n)),u("button",{class:"mini",type:"button","aria-label":`1개 ${l?"창고로":"가방으로"}`,onclick:()=>c(1)},l?"→1":"←1"),u("button",{class:"mini",type:"button","aria-label":`전부 ${l?"창고로":"가방으로"}`,onclick:()=>c("all")},l?"→전체":"←전체"))};return{title:"📦 공방 창고",subtitle:"대량으로 모아 두고, 필요할 때 가방으로 꺼내요",body:u("div",{},u("div",{class:"hint"},"1 은 하나씩, 전체 는 그 재료를 전부 옮겨요 — 오른쪽은 창고로, 왼쪽은 가방으로."),u("div",{class:"section-label"},`🎒 가방 → 📦 창고  (${t.usedSlots()}/${t.slots}칸)`),e.length?u("div",{class:"store-list"},...e.map(r=>n(r,"out"))):u("div",{class:"hint"},"가방이 비어 있어요."),u("div",{class:"section-label"},"📦 창고 → 🎒 가방"),i.length?u("div",{class:"store-list"},...i.map(r=>n(r,"in"))):u("div",{class:"hint"},"창고가 비어 있어요. 모아 둔 재료가 여기 쌓여요.")),actions:[{label:"건물 복구 보기",kind:"ghost",onClick:()=>this.game.openBuild("workshop")},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}build(t){const e=wi.find(g=>g.id===t)||wi[0],i=this.game.progress.building(e.id),n=uo[e.id]||{},s=this.game.progress.inventory,r=Object.values(n).reduce((g,y)=>g+y,0),o=Object.entries(n).reduce((g,[y,m])=>g+Math.min(m,i.invested[y]||0),0),l=r?Math.round(o/r*100):0,c=Object.entries(n).every(([g,y])=>(i.invested[g]||0)>=y),h=Object.entries(n).some(([g,y])=>(i.invested[g]||0)<y&&s.count(g)>0),d=Object.entries(n).map(([g,y])=>{const m=s.count(g),v=Math.min(y,i.invested[g]||0),b=v>=y;return u("div",{class:`req-row ${b?"done":""}`},u("span",{class:"ico"},jl(g)),u("div",{class:"info"},u("div",{class:"nm"},`${io(g)}${b?" ✓":""}`),u("div",{class:"sub"},`가방 ${m}개 · 창고 ${this.game.progress.inventory.stored(g)}개`)),u("span",{class:`need ${m+(i.invested[g]||0)>=y?"ok":"lack"}`},`${v}/${y}`))}),p=i.done?u("div",{},u("div",{class:"done-banner"},"✨ 복구 완료",u("div",{class:"sub"},Of[e.id]||"")),u("div",{class:"hint"},e.id==="lighthouse"?"밤이 되면 등대에 따뜻한 불이 켜져요.":"이제 섬의 일부가 되살아났어요.")):u("div",{},u("div",{class:"hint"},Of[e.id]||""),u("div",{class:"progress-line"},u("i",{style:{width:`${l}%`}})),u("div",{class:"req-list"},...d),u("div",{class:"hint"},c?"재료가 다 모였어요 — [복구 완료!] 를 눌러 주세요.":"재료를 모아 [재료 투입] 으로 하나씩 넣어요.")),f=[];return e.id==="workshop"&&i.done&&f.push({label:"📦 창고 열기",kind:"ghost",onClick:()=>this.game.openStorage()}),i.done||(f.push({label:"재료 투입",kind:"ghost",disabled:!h,onClick:()=>this.game.invest(e.id)}),f.push({label:"복구 완료!",kind:"primary",disabled:!c,onClick:()=>this.game.completeBuild(e.id)})),f.push({label:"닫기",kind:i.done||!c?"primary":"ghost",onClick:()=>this.game.modal.close()}),{title:`${e.icon} ${e.name}`,subtitle:i.done?"이미 복구된 건물이에요":"재료만 모이면 지금 바로 복구할 수 있어요",body:p,actions:f}}workshopMenu(){const t=this.game.progress.building("workshop"),e=this.game.progress.inventory,i=(s,r,o,l,c=!1)=>{const h=u("button",{class:`menu-entry ${c?"off":""}`,type:"button",...c?{disabled:"disabled"}:{}},u("span",{class:"mico"},s),u("div",{class:"mmain"},u("div",{class:"nm"},r),u("div",{class:"meta"},o)),u("span",{class:"arrow"},c?"🔒":"›"));return c||h.addEventListener("click",l),h};return{title:"🔨 공방",subtitle:"재료를 정리하고, 요리하고, 섬을 고치는 곳",body:u("div",{},u("div",{class:"hint"},t.done?"공방이 열렸어요. 재료를 정리하고, 요리하고, 도구를 손봐요.":"공방은 아직 낡았어요. 복구하면 창고·요리·도구방이 함께 열려요."),u("div",{class:"row"},u("div",{},u("div",{class:"label"},"가방"),u("div",{class:"hint"},`${e.usedSlots()}/${e.slots}칸 사용 중`)),u("span",{class:"hint"},`재료 ${e.totalItems()}개`)),u("div",{class:"section-label"},"공방 메뉴"),u("div",{class:"menu-list"},i("📦","창고",t.done?"재료를 맡기고 꺼내요":"공방을 복구하면 열려요",()=>this.game.openStorage(),!t.done),i("🍳","요리하기",t.done?"재료와 물고기로 기력을 회복해요":"공방을 복구하면 열려요",()=>this.game.openCooking(),!t.done),i("🪓","도구 강화",t.done?"도끼·곡괭이를 Lv.3까지":"공방을 복구하면 열려요",()=>this.game.openUpgrade(),!t.done),i("🛒","리어카 만들기",this.game.progress.cartLevel>0?`가방 ${this.game.progress.inventory.slots}칸 사용 중`:`가방 ${Ye.slots}칸 → ${Ye.slots+8}칸`,()=>this.game.openCart(),!t.done),i("🛡️","방어 제작",t.done?`울타리·포탑·허수아비·경보등 (창고 ${Object.values(this.game.progress.defense.stock).reduce((s,r)=>s+r,0)}개)`:"공방을 복구하면 열려요",()=>this.game.openDefenseCraft(),!t.done),i("🔨","건물 복구","섬의 네 곳과 다리를 되살려요",()=>this.game.openBuild("workshop")))),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}mailbox(t){const e=this.game.progress;if(t){const r=Bo.find(o=>o.id===t);if(r)return _(this,Xo,zp).call(this,r,e)}const i=Bo.map(r=>{const o=!e.isRead(r.id),l=r.gift&&!e.isClaimed(r.id);return u("button",{class:`mail-row ${o?"unread":""}`,type:"button",onclick:()=>this.game.openMailbox(r.id)},u("span",{class:"mail-ico"},r.icon),u("div",{class:"mail-main"},u("div",{class:"mail-title"},r.title),u("div",{class:"mail-from"},`${r.from} · ${r.tag}`)),l?u("span",{class:"mail-gift"},"🎁"):o?u("span",{class:"mail-dot"}):null)}),s=e.questRows().filter(r=>r.done&&!r.claimed).length;return{title:"📬 우체통",subtitle:"공지와 편지, 그리고 의뢰와 선물이 있어요",body:u("div",{},u("div",{class:"section-label"},`📋 오늘의 의뢰 (Day ${e.quests.day})${s?` · 보상 ${s}건`:""}`),this.game.life.questList(),u("div",{class:"section-label"},"편지"),u("div",{class:"mail-list"},...i)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}Xo=new WeakSet,zp=function(t,e){const i=e.isClaimed(t.id),n=t.gift&&u("div",{class:"gift-box"},u("div",{class:"gift-head"},i?"🎀 받은 선물":"🎁 동봉된 선물"),u("div",{class:"gift-items"},...Object.entries(t.gift).map(([r,o])=>u("span",{class:"gift-chip"},`${jl(r)} ${io(r)} ${o}`))),i?u("div",{class:"hint"},"가방에 잘 넣어 두었어요."):u("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.claimGift(t.id)},"선물 받기")),s=u("div",{},u("div",{class:"letter-from"},`${t.from} · ${t.tag}`),...t.body.map(r=>u("p",{class:"letter-p"},r)),n);return{title:`${t.icon} ${t.title}`,subtitle:"",body:s,actions:[{label:"← 편지함",kind:"ghost",onClick:()=>this.game.openMailbox()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}};let no=null;function h1(){try{return typeof indexedDB<"u"&&indexedDB!==null}catch{return!1}}function jh(){return h1()?no||(no=new Promise((a,t)=>{let e;try{e=indexedDB.open(hi.dbName,1)}catch(i){t(i);return}e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains(hi.store)||i.createObjectStore(hi.store)},e.onsuccess=()=>a(e.result),e.onerror=()=>t(e.error||new Error("IndexedDB open error")),e.onblocked=()=>t(new Error("IndexedDB blocked"))}),no):Promise.reject(new Error("IndexedDB not available"))}async function d1(a){const t=await jh();return new Promise((e,i)=>{const s=t.transaction(hi.store,"readonly").objectStore(hi.store).get(a);s.onsuccess=()=>e(s.result??null),s.onerror=()=>i(s.error)})}async function f1(a,t){const e=await jh();return new Promise((i,n)=>{const s=e.transaction(hi.store,"readwrite");s.objectStore(hi.store).put(t,a),s.oncomplete=()=>i(!0),s.onerror=()=>n(s.error),s.onabort=()=>n(s.error||new Error("transaction aborted"))})}async function u1(a){const t=await jh();return new Promise((e,i)=>{const n=t.transaction(hi.store,"readwrite");n.objectStore(hi.store).delete(a),n.oncomplete=()=>e(!0),n.onerror=()=>i(n.error)})}const so=a=>typeof a=="string"&&!!le[a];function tc(a){const t=Math.floor(Number(a));return Number.isFinite(t)?Math.max(Ye.slots,Math.min(24,t)):Ye.slots}class p1{constructor(t,e=Ye.slots){this.capacity=tc(e),this.bag=new Array(this.capacity).fill(null),this.storage={},t&&this.load(t,this.capacity)}get slots(){return this.capacity}setCapacity(t){const e=tc(t),i=[];if(e===this.capacity)return i;const n=this.bag,s=new Array(e).fill(null);for(let r=0;r<Math.min(n.length,e);r++)s[r]=n[r];if(n.length>e)for(let r=e;r<n.length;r++){const o=n[r];o&&o.n>0&&i.push({id:o.id,n:o.n})}this.capacity=e,this.bag=s;for(const r of i)this.add(r.id,r.n);return i}count(t){let e=0;for(const i of this.bag)i&&i.id===t&&(e+=i.n);return e}stored(t){return Math.max(0,Math.floor(Number(this.storage[t])||0))}roomFor(t){if(!so(t))return 0;let e=0;for(const i of this.bag)i?i.id===t&&(e+=Math.max(0,Ye.stack-i.n)):e+=Ye.stack;return e}usedSlots(){return this.bag.filter(Boolean).length}totalItems(){let t=0;for(const e of this.bag)e&&(t+=e.n);return t}bagEntries(){const t=new Map;for(const e of this.bag)!e||e.n<=0||t.set(e.id,(t.get(e.id)||0)+e.n);return Jc.filter(e=>t.has(e)).map(e=>({id:e,n:t.get(e)}))}storageEntries(){return Jc.filter(t=>this.stored(t)>0).map(t=>({id:t,n:this.stored(t)}))}add(t,e){if(!so(t))return 0;let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;for(const n of this.bag){if(i<=0)break;if(!n||n.id!==t)continue;const s=Ye.stack-n.n;if(s<=0)continue;const r=Math.min(s,i);n.n+=r,i-=r}for(;i>0;){const n=this.bag.indexOf(null);if(n<0)break;const s=Math.min(Ye.stack,i);this.bag[n]={id:t,n:s},i-=s}return i}take(t,e){let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;let n=0;for(let s=0;s<this.bag.length&&i>0;s++){const r=this.bag[s];if(!r||r.id!==t)continue;const o=Math.min(r.n,i);r.n-=o,i-=o,n+=o,r.n<=0&&(this.bag[s]=null)}return n}toStorage(t,e="all"){const i=this.count(t);if(!i)return 0;const n=Math.max(0,Ff-this.stored(t)),s=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0))),r=Math.min(s,n);return r<=0?0:(this.take(t,r),this.storage[t]=this.stored(t)+r,r)}fromStorage(t,e="all"){const i=this.stored(t);if(!i)return 0;const n=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0)));if(n<=0)return 0;const s=this.add(t,n),r=n-s;if(r>0){const o=this.stored(t)-r;o>0?this.storage[t]=o:delete this.storage[t]}return r}toJSON(){return{capacity:this.capacity,bag:this.bag.map(t=>t&&t.n>0?{id:t.id,n:Math.min(Ye.stack,Math.floor(t.n))}:null),storage:{...this.storage}}}load(t,e=this.capacity){if(this.capacity=tc(e),this.bag=new Array(this.capacity).fill(null),this.storage={},!t||typeof t!="object")return this;if((Array.isArray(t.bag)?t.bag:[]).slice(0,this.capacity).forEach((n,s)=>{if(!n||typeof n!="object"||!so(n.id))return;const r=Math.floor(Number(n.n));!Number.isFinite(r)||r<=0||(this.bag[s]={id:n.id,n:Math.min(Ye.stack,r)})}),t.storage&&typeof t.storage=="object")for(const[n,s]of Object.entries(t.storage)){if(!so(n))continue;const r=Math.floor(Number(s));!Number.isFinite(r)||r<=0||(this.storage[n]=Math.min(Ff,r))}return this}}const ps=Fp.map(a=>a.id),$f=ts[ts.length-1].exp,m1=ir[ir.length-1].exp;class g1{constructor(t){this.exp={};for(const e of ps)this.exp[e]=0;t&&this.load(t)}reset(){for(const t of ps)this.exp[t]=0}get(t){return Math.max(0,Math.floor(Number(this.exp[t])||0))}add(t,e){if(!ps.includes(t))return{id:t,gain:0,before:0,after:0,rankedUp:!1,rank:""};const i=Math.max(0,Math.floor(Number(e)||0)),n=this.get(t),s=Math.min($f,n+i);return this.exp[t]=s,{id:t,gain:s-n,before:n,after:s,rankedUp:this.rankIndex(s)>this.rankIndex(n),rank:this.rank(s).name}}rankIndex(t){let e=0;for(let i=0;i<ts.length;i++)t>=ts[i].exp&&(e=i);return e}rank(t){return ts[this.rankIndex(t)]}level(t){return this.rankIndex(this.get(t))+1}row(t){const e=Fp.find(c=>c.id===t)||{name:t,icon:"🌱",desc:""},i=this.get(t),n=this.rankIndex(i),s=ts[n],r=ts[n+1]||null,o=r?r.exp-s.exp:1,l=r?Math.min(100,Math.round((i-s.exp)/o*100)):100;return{id:t,name:e.name,icon:e.icon,desc:e.desc,exp:i,level:n+1,rank:s.name,next:r,pct:l,toNext:r?Math.max(0,r.exp-i):0}}rows(){return ps.map(t=>this.row(t))}get total(){return ps.reduce((t,e)=>t+this.get(e),0)}title(){const t=this.total;let e=ir[0];for(const n of ir)t>=n.exp&&(e=n);const i=ir.find(n=>n.exp>t)||null;return{name:e.name,icon:e.icon,total:t,next:i,pct:i?Math.min(100,Math.round((t-e.exp)/Math.max(1,i.exp-e.exp)*100)):100,toNext:i?i.exp-t:0,maxed:t>=m1}}toJSON(){const t={};for(const e of ps)t[e]=this.get(e);return t}load(t){if(this.reset(),!t||typeof t!="object")return this;for(const e of ps){const i=Math.floor(Number(t[e]));this.exp[e]=Number.isFinite(i)&&i>0?Math.min($f,i):0}return this}}const ke={fence:{id:"fence",name:"나무 울타리",icon:"🪵",cost:{log:3,stone:2},hp:88,height:1.05,blocks:!0,desc:"길목을 가로질러 세워 불청객의 발을 묶어요. 부서질 때까지 시간을 벌어 줍니다.",effect:"진격 차단 · 체력 88"},scarecrow:{id:"scarecrow",name:"메타몽 허수아비",icon:"🟣",cost:{log:3,petal:3,berry:1},hp:46,height:1.18,blocks:!0,taunt:3.4,desc:"진짜 메타몽인 줄 알고 달려드는 어그로 미끼. 시선이 끌린 불청객이 잠시 멈춰요.",effect:"반경 3.4 · 시선 끌기"},turret:{id:"turret",name:"물풍선 포탑",icon:"🎈",cost:{log:4,stone:3,petal:2},hp:58,height:1.2,range:7.2,cooldown:1.5,damage:9,slow:.55,desc:"사거리 안 불청객에게 물풍선을 자동으로 퐁퐁. 맞은 불청객은 잠깐 느려져요.",effect:"사거리 7.2 · 1.5초마다"},lamp:{id:"lamp",name:"별빛 경보등",icon:"⭐",cost:{stone:4,star:1},hp:40,height:1.55,range:5.6,boost:1.35,slow:.62,desc:"주변 물풍선 포탑의 공격 속도를 올리고, 가까이 온 불청객의 발을 늦춰요.",effect:"포탑 가속 ×1.35 · 둔화"}},nr=["fence","scarecrow","turret","lamp"],v1={fence:"가장 싸고 튼튼한 기본기예요. 길목 앞쪽에 먼저 세워 두면 포탑이 쏠 시간이 생겨요.",scarecrow:"울타리보다 약하지만 불청객을 엉뚱한 곳으로 끌어당겨요.",turret:"직접 쏘지 않아도 알아서 쏴요. 경보등 옆에 붙여 두면 훨씬 빨라져요.",lamp:"별조각이 들어가요. 포탑 하나만 있어도 옆에 세우면 체감이 확 달라집니다."},nn={sling:{id:"sling",name:"새총",icon:"🪃",damage:8,cooldown:.55,range:10.5,free:!0,desc:"무제한. 가장 가까운 불청객을 향해 조약돌을 쏴요."},balloon:{id:"balloon",name:"꽃잎 물풍선",icon:"🎈",damage:15,cooldown:.95,range:9,splash:2.4,knockback:1.4,petals:1,shots:5,desc:"꽃잎 1개로 5발. 맞은 자리 주변까지 터지며 밀어내요."}},Xf={grunt:{id:"grunt",name:"회색 망토",icon:"🥷",hp:54,speed:1.55,height:1.2,steal:10},runner:{id:"runner",name:"발빠른 자",icon:"💨",hp:38,speed:2.35,height:1.1,steal:8},big:{id:"big",name:"덩치 망토",icon:"🧟",hp:96,speed:1.12,height:1.5,steal:16}},Ha={duration:44,firstDelay:1.4,spawnGap:2.1,boatIn:2.6,attackDps:8};function x1(a){const t=Math.max(1,Math.floor(Number(a)||1)),e=Math.min(14,5+Math.floor(t/3)),i=[];for(let n=0;n<e;n++)t>=6&&n%5===4?i.push("big"):n%3===2?i.push("runner"):i.push("grunt");return i}function _1(a){const t=Math.max(1,Math.floor(Number(a)||1));return{coin:60+t*5,star:1+(t>=6?1:0),seed:"seed_pumpkin",seedCount:2}}function b1(a){return 10+Math.max(1,Math.floor(Number(a)||1))*2}const Ya={somi:{id:"somi",name:"솜이",icon:"🐱",punchRange:3,punchDamage:7,punchStun:1.15,cooldown:6.4,speedBuff:.14,desc:"가까이 온 불청객에게 냥냥 펀치(짧은 경직) · 주인공 이속 +14%"},ongi:{id:"ongi",name:"옹이",icon:"😼",clawRange:2.1,clawDamage:9,clawSlow:.8,cooldown:3.6,desc:'불청객 뒤를 쫓아 할퀴기 · 배가 다가오면 가장 먼저 "야옹!" 경보'}};function y1(a){const t=Math.max(1,Math.min(5,Math.floor(Number(a)||1)));return{power:1+(t-1)*.18,cd:1-(t-1)*.08}}const M1={ditto_pebble_02:"rock",ditto_signpost_07:"rock",ditto_mailbox_03:"rock",ditto_mushroom_06:"decoy",ditto_flowerpot_04:"decoy",ditto_bench_05:"supply",ditto_basic_01:"supply"};function go(a=[]){const t=new Set(Array.isArray(a)?a:[]);let e=0,i=0,n=0;for(const r of Vi){if(!t.has(r.id))continue;const o=M1[r.id];o==="rock"?e+=1:o==="decoy"?i+=1:o==="supply"&&(n+=1)}const s=e+i+n;return{count:s,rock:e,decoy:i,supply:n,power:1+s*.05,fenceHp:1+e*.12,decoys:Math.min(2,i),ammo:n*2}}const qf={victory:{icon:"🎉",title:"승리!",sub:"수집단이 빈손으로 돌아갔어요"},partial:{icon:"😿",title:"코인을 조금 빼앗겼어요",sub:"건물과 작물은 무사해요 — 다음엔 더 단단히 막아 봐요"}},S1=[{id:"gather",name:"채집",icon:"🪓"},{id:"fish",name:"낚시",icon:"🎣"},{id:"cook",name:"요리",icon:"🍳"},{id:"farm",name:"농사",icon:"🌱"},{id:"life",name:"섬 생활",icon:"🏝️"}],w1=a=>Math.max(...oi.map(t=>a.catLevel(a.cat(t.id).aff))),sr=[{id:"ach_first_chop",group:"gather",icon:"🌳",name:"첫 나무",desc:"나무를 처음으로 끝까지 베어 내기",event:"tree",need:1,reward:{coin:30,star:0}},{id:"ach_woodcutter",group:"gather",icon:"🪓",name:"섬의 나무꾼",desc:"나무 20그루 베어 내기",event:"tree",need:20,reward:{coin:60,star:1}},{id:"ach_first_fish",group:"fish",icon:"🐟",name:"첫 낚시",desc:"부두에서 물고기 한 마리 낚기",event:"fish",need:1,reward:{coin:30,star:0}},{id:"ach_angler",group:"fish",icon:"🎣",name:"부두의 낚시꾼",desc:"물고기 15마리 낚기",event:"fish",need:15,reward:{coin:80,star:2}},{id:"ach_first_cook",group:"cook",icon:"🍳",name:"첫 요리",desc:"공방에서 요리 한 번 하기",event:"cook",need:1,reward:{coin:30,star:0}},{id:"ach_cook5",group:"cook",icon:"🍲",name:"공방의 솜씨",desc:"요리 5번 하기",event:"cook",need:5,reward:{coin:70,star:1}},{id:"ach_first_seed",group:"farm",icon:"🌱",name:"첫 씨앗",desc:"텃밭에 씨앗 한 번 심기",event:"plant",need:1,reward:{coin:25,star:0}},{id:"ach_farmer",group:"farm",icon:"🧺",name:"텃밭지기",desc:"작물 10번 수확하기",event:"crop",need:10,reward:{coin:80,star:2}},{id:"ach_merchant",group:"life",icon:"🪙",name:"섬의 상인",desc:"자판기에 물건 30개 팔기",event:"sell",need:30,reward:{coin:70,star:1}},{id:"ach_cat_friend",group:"life",icon:"🐱",name:"고양이의 친구",desc:"솜이·옹이 중 한 마리와 호감도 Lv.3",need:3,value:w1,reward:{coin:60,star:1}},{id:"ach_cart",group:"life",icon:"🛒",name:"손수레의 날",desc:"공방에서 리어카 만들기 (가방 8칸 → 16칸)",need:1,value:a=>Math.max(0,Math.floor(Number(a.cartLevel)||0)),reward:{coin:55,star:1}},{id:"ach_bridge",group:"life",icon:"🌉",name:"강을 건너서",desc:"통나무·돌로 다리를 놓아 북쪽 개척권 열기",need:1,value:a=>a.bridgeBuilt?1:0,reward:{coin:70,star:1}},{id:"ach_ditto_all",group:"life",icon:"📔",name:"메타몽 수집가",desc:`어설픈 메타몽 ${Vi.length}마리 모두 도감에 등록`,need:Vi.length,value:a=>Math.max(0,Math.floor(Number(a.discoveredCount)||0)),external:!0,reward:{coin:100,star:3}},{id:"ach_rebuilder",group:"life",icon:"🏗️",name:"섬의 재건자",desc:"부두·공방·자판기·등대 네 곳 모두 복구",need:wi.length,value:a=>wi.filter(t=>a.building(t.id).done).length,reward:{coin:120,star:2}},{id:"ach_first_defense",group:"life",icon:"🛡️",name:"첫 방어 성공",desc:"회색 망토 수집단을 모두 막아내기",need:1,value:a=>Math.max(0,Math.floor(Number(a.defense&&a.defense.wins)||0)),reward:{coin:90,star:2}},{id:"ach_perfect_evac",group:"life",icon:"🟣",name:"완벽한 대피",desc:"메타몽을 모두 광장으로 모은 뒤 방어전에서 이기기",need:1,value:a=>Math.max(0,Math.floor(Number(a.defense&&a.defense.perfectEvacs)||0)),reward:{coin:80,star:2}},{id:"ach_turret_master",group:"life",icon:"🎈",name:"포탑 장인",desc:"물풍선 포탑으로 불청객을 10번 맞히기",need:10,value:a=>Math.max(0,Math.floor(Number(a.defense&&a.defense.turretHits)||0)),reward:{coin:70,star:1}}];sr.map(a=>a.id);function E1(a){return sr.find(t=>t.id===a)||null}const In=(a,t,e,i)=>{const n=Number(a);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i},pe=(a,t,e,i=0)=>{const n=Math.floor(Number(a));return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};var qo,Gp;class Bp{constructor(t){Re(this,qo);this.reset(),t&&this.load(t)}reset(){this.stamina=vi.max,this.inventory=new p1,this.buildings={};for(const t of wi)this.buildings[t.id]={invested:{},done:!1};this.mailbox={read:[],claimed:[]},this.nodes={},this.bridge={built:!1,invested:{}},this.cartLevel=0,this.paddyPlots=new Array(Zt.cols*Zt.rows).fill(null),this.welcome={step:0},this.defense={stock:{fence:0,scarecrow:0,turret:0,lamp:0},slots:new Array(zt.slots.length).fill(null),wins:0,losses:0,runs:0,lastRunDay:0,lastResult:"",lastStolen:0,totalDown:0,turretHits:0,perfectEvacs:0,lastWave:null},this.coins=0,this.skills=new g1,this.fish={},this.supplies={};for(const t of qa)this.supplies[t]=0;this.tools={};for(const t of js)this.tools[t]=1;this.cats={};for(const t of oi)this.cats[t.id]={aff:0,gifts:[],follow:!1};this.cooked={},this.quests={day:0,list:[]},this.buff={kind:"",left:0},this.fishing={casts:0,catches:0,misses:0,best:0},this.crops={},this.farmPlots=new Array(Ot.cols*Ot.rows).fill(null),this.counters={chop:0,tree:0,rock:0,flower:0,mine:0,fish:0,cook:0,sell:0,pet:0,treat:0,petal:0,plant:0,water:0,crop:0,lucky:0},this.achievements={unlocked:[],claimed:[]},this.discoveredCount=0}useStamina(t){const e=Math.max(0,Number(t)||0);return this.stamina<e?!1:(this.stamina=Math.max(0,this.stamina-e),!0)}restStamina(t){this.stamina=Math.min(vi.max,this.stamina+Math.max(0,Number(t)||0))}building(t){return this.buildings[t]||(this.buildings[t]={invested:{},done:!1}),this.buildings[t]}investedTotal(t){const e=this.building(t).invested;return Object.values(e).reduce((i,n)=>i+(Number(n)||0),0)}bridgeState(){return(!this.bridge||typeof this.bridge!="object")&&(this.bridge={built:!1,invested:{}}),(!this.bridge.invested||typeof this.bridge.invested!="object")&&(this.bridge.invested={}),this.bridge}get bridgeBuilt(){return!!this.bridgeState().built}bridgeInvestedTotal(){const t=this.bridgeState().invested;return Object.values(t).reduce((e,i)=>e+(Number(i)||0),0)}get bagCapacity(){const t=Math.max(0,Math.min(sn.maxLevel,Math.floor(Number(this.cartLevel)||0)));return Math.min(24,Ye.slots+sn.slotsPerLevel*t)}syncCapacity(){const t=this.bagCapacity;return this.inventory.slots!==t&&this.inventory.setCapacity(t),t}isRead(t){return this.mailbox.read.includes(t)}markRead(t){this.isRead(t)||this.mailbox.read.push(t)}isClaimed(t){return this.mailbox.claimed.includes(t)}markClaimed(t){this.isClaimed(t)||this.mailbox.claimed.push(t)}addCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));return this.coins=Math.min(999999,this.coins+e),this.coins}spendCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));return this.coins<e?!1:(this.coins-=e,!0)}gainExp(t,e){return this.skills.add(t,e)}fishCount(t){return Math.max(0,Math.floor(Number(this.fish[t])||0))}addFish(t,e=1){if(!Pi[t])return 0;const i=Math.max(0,Math.floor(Number(e)||0));return this.fish[t]=Math.min(999,this.fishCount(t)+i),this.fish[t]}takeFish(t,e=1){const i=Math.max(0,Math.floor(Number(e)||0)),n=this.fishCount(t),s=Math.min(n,i);if(s<=0)return 0;const r=n-s;return r>0?this.fish[t]=r:delete this.fish[t],s}fishKinds(){return xs.filter(t=>this.fishCount(t)>0).length}supply(t){return Math.max(0,Math.floor(Number(this.supplies[t])||0))}addSupply(t,e=1){return qa.includes(t)?(this.supplies[t]=Math.min(99,this.supply(t)+Math.max(0,Math.floor(Number(e)||0))),this.supplies[t]):0}takeSupply(t,e=1){const i=Math.min(this.supply(t),Math.max(0,Math.floor(Number(e)||0)));return i<=0?0:(this.supplies[t]=this.supply(t)-i,i)}toolLevel(t){const e=_s[t];return e?Math.max(1,Math.min(e.max,pe(this.tools[t],1,e.max,1))):1}toolInfo(t){const e=_s[t],i=this.toolLevel(t);return{id:t,def:e,level:i,max:e.max,cost:e.cost[i]||{},staminaMul:e.stamina[i-1]??1,hitsBonus:e.hits[i-1]??0,maxed:i>=e.max}}staminaMultiplier(t){let e=1;for(const i of js){const n=_s[i];n.kind===t&&(e*=n.stamina[this.toolLevel(i)-1]??1)}return this.buff.kind==="golden"&&this.buff.left>0&&(e*=Go.stamina),e}hitsBonus(t){let e=0;for(const i of js){const n=_s[i];n.kind===t&&(e+=n.hits[this.toolLevel(i)-1]||0)}return e}canUpgrade(t){const e=this.toolInfo(t);if(e.maxed)return{ok:!1,reason:"max",info:e};const i=[];for(const[n,s]of Object.entries(e.cost)){const r=n==="coin"?this.coins:this.inventory.count(n);r<s&&i.push({item:n,need:s,have:r})}return{ok:i.length===0,reason:i.length?"lack":"",lack:i,info:e}}upgradeTool(t){const e=this.canUpgrade(t);if(!e.ok)return e;const i=e.info;for(const[n,s]of Object.entries(i.cost))n==="coin"?this.spendCoins(s):this.inventory.take(n,s);return this.tools[t]=i.level+1,{ok:!0,info:this.toolInfo(t)}}cropCount(t){return Math.max(0,Math.floor(Number(this.crops[t])||0))}addCrop(t,e=1){if(!Jt[t])return 0;const i=Math.max(0,Math.floor(Number(e)||0));return this.crops[t]=Math.min(999,this.cropCount(t)+i),this.crops[t]}takeCrop(t,e=1){const i=Math.max(0,Math.floor(Number(e)||0)),n=this.cropCount(t),s=Math.min(n,i);if(s<=0)return 0;const r=n-s;return r>0?this.crops[t]=r:delete this.crops[t],s}cropKinds(){return kp.filter(t=>this.cropCount(t)>0).length}seedCount(t){const e=Jt[t];return e?this.supply(e.seedId):0}count(t){return Math.max(0,Math.floor(Number(this.counters[t])||0))}bump(t,e=1){if(!(t in this.counters))return 0;const i=Math.max(0,Math.floor(Number(e)||0));return i<=0?this.counters[t]:(this.counters[t]=Math.min(999999,this.count(t)+i),this.counters[t])}achRow(t){const e=E1(t);if(!e)return null;const i=e.event?this.count(e.event):Math.max(0,Math.floor(Number(e.value?e.value(this):0)||0)),n=this.achievements.unlocked.includes(t),s=this.achievements.claimed.includes(t);return{...e,value:Math.min(e.need,i),raw:i,unlocked:n,claimed:s,done:i>=e.need,pct:Math.min(100,Math.round(i/Math.max(1,e.need)*100))}}achRows(){return sr.map(t=>this.achRow(t.id))}get claimableAchievements(){return this.achRows().filter(t=>t.done&&!t.claimed).length}checkAchievements(){const t=[];for(const e of sr){if(this.achievements.unlocked.includes(e.id))continue;const i=this.achRow(e.id);i.done&&(this.achievements.unlocked.push(e.id),t.push(i))}return t}claimAchievement(t){const e=this.achRow(t);if(!e)return{ok:!1,reason:"missing"};if(!e.done)return{ok:!1,reason:"unfinished"};if(e.claimed)return{ok:!1,reason:"claimed"};this.achievements.claimed.push(t),this.addCoins(e.reward.coin);let i=0;if(e.reward.star>0){const n=this.inventory.add("star",e.reward.star);n>0&&(this.inventory.storage.star=this.inventory.stored("star")+n,i=n)}return{ok:!0,row:e,stored:i}}tileAt(t,e){const i=t[e];return i&&i.crop?i:null}plantIn(t,e,i,n=!1){const s=Jt[i];return s?n&&!s.paddyOnly?{ok:!1,reason:"paddy"}:!n&&s.paddyOnly?{ok:!1,reason:"farm"}:e<0||e>=t.length?{ok:!1,reason:"index"}:this.tileAt(t,e)?{ok:!1,reason:"occupied"}:this.supply(s.seedId)<=0?{ok:!1,reason:"seed"}:(this.takeSupply(s.seedId,1),t[e]={crop:i,remain:s.grow,total:s.grow,watered:0,wet:0},this.bump("plant",1),{ok:!0,crop:s}):{ok:!1,reason:"crop"}}waterIn(t,e){const i=this.tileAt(t,e);return i?i.remain<=0?{ok:!1,reason:"ripe"}:i.watered>=Me.maxWater?{ok:!1,reason:"max"}:(i.remain=Math.max(0,i.remain*Me.waterHalve),i.watered+=1,i.wet=Me.wetSeconds,this.bump("water",1),{ok:!0,remain:i.remain,watered:i.watered}):{ok:!1,reason:"empty"}}tickIn(t,e){const i=[],n=Math.max(0,Number(e)||0);for(let s=0;s<t.length;s++){const r=t[s];!r||!r.crop||(r.wet>0&&(r.wet=Math.max(0,r.wet-n)),!(r.remain<=0)&&(r.remain=Math.max(0,r.remain-n),r.remain<=0&&i.push(s)))}return i}harvestIn(t,e){const i=this.tileAt(t,e);if(!i)return{ok:!1,reason:"empty"};if(i.remain>0)return{ok:!1,reason:"growing"};const n=Jt[i.crop],[s,r]=n.yield,o=s+Math.floor(Math.random()*(r-s+1));return this.addCrop(n.id,o),t[e]=null,this.bump("crop",1),{ok:!0,crop:n,n:o,total:this.cropCount(n.id)}}plot(t){return this.tileAt(this.farmPlots,t)}plantSeed(t,e){return this.plantIn(this.farmPlots,t,e,!1)}waterPlot(t){return this.waterIn(this.farmPlots,t)}tickFarm(t){return this.tickIn(this.farmPlots,t)}harvestPlot(t){return this.harvestIn(this.farmPlots,t)}paddyPlot(t){return this.tileAt(this.paddyPlots,t)}plantPaddy(t,e="rice"){return this.plantIn(this.paddyPlots,t,e,!0)}waterPaddy(t){return this.waterIn(this.paddyPlots,t)}tickPaddy(t){return this.tickIn(this.paddyPlots,t)}harvestPaddy(t){return this.harvestIn(this.paddyPlots,t)}cat(t){return this.cats[t]||(this.cats[t]={aff:0,gifts:[],follow:!1}),this.cats[t]}catLevel(t){const e=Math.max(0,Number(t)||0);let i=1;for(let n=0;n<eo.length;n++)e>=eo[n]&&(i=n+1);return i}catRow(t){const e=this.cat(t),i=this.catLevel(e.aff),n=eo[i]??null,s=eo[i-1]??0;return{id:t,aff:Math.round(e.aff),level:i,follow:!!e.follow,gifts:[...e.gifts],nextAt:n,pct:n?Math.min(100,Math.round((e.aff-s)/Math.max(1,n-s)*100)):100,toNext:n?Math.max(0,n-Math.round(e.aff)):0,canFollow:i>=3}}addAffection(t,e){const i=this.cat(t),n=this.catLevel(i.aff);i.aff=Math.max(0,Math.min(999,i.aff+Math.max(0,Number(e)||0)));const s=this.catLevel(i.aff);return{before:n,after:s,levelUp:s>n,row:this.catRow(t)}}cookedCount(t){return Math.max(0,Math.floor(Number(this.cooked[t])||0))}markCooked(t){this.cooked[t]=Math.min(999,this.cookedCount(t)+1)}canCook(t){const e=pr[t];if(!e)return{ok:!1,reason:"recipe"};const i=[];for(const[s,r]of Object.entries(e.need)){const o=this.inventory.count(s);o<r&&i.push({item:s,need:r,have:o})}for(const[s,r]of Object.entries(e.fish||{})){const o=this.fishCount(s);o<r&&i.push({item:s,need:r,have:o})}for(const[s,r]of Object.entries(e.crop||{})){const o=this.cropCount(s);o<r&&i.push({item:s,need:r,have:o})}const n=this.stamina>=vi.max-.5;return{ok:i.length===0&&!n,reason:i.length?"lack":n?"full":"",lack:i}}setBuff(t,e){this.buff={kind:t||"",left:Math.max(0,Number(e)||0)}}tickBuff(t){return this.buff.left<=0?!1:(this.buff.left=Math.max(0,this.buff.left-Math.max(0,t||0)),this.buff.left<=0?(this.buff={kind:"",left:0},!0):!1)}get buffActive(){return this.buff.left>0&&!!this.buff.kind}rollQuests(t){const e=Math.max(1,Math.floor(Number(t)||1));return this.quests.day===e&&this.quests.list.length?!1:(this.quests={day:e,list:l1(e)},!0)}questRows(){return this.quests.list.map(t=>{const e=Jn[t.kind]||{icon:"📋"},i=Math.min(t.need,Math.max(0,t.progress));return{...t,icon:t.icon||e.icon,progress:i,pct:Math.min(100,Math.round(i/Math.max(1,t.need)*100)),done:i>=t.need}})}get claimableQuests(){return this.questRows().filter(t=>t.done&&!t.claimed).length}questEvent(t,e=1){const i=Math.max(0,Number(e)||0);if(!t||i<=0)return[];const n=[];for(const s of this.quests.list)s.claimed||s.event===t&&(s.progress>=s.need||(s.progress=Math.min(s.need,s.progress+i),s.progress>=s.need&&n.push(s)));return n}claimQuest(t){const e=this.quests.list.find(i=>i.id===t);return e?e.claimed?{ok:!1,reason:"claimed"}:e.progress<e.need?{ok:!1,reason:"unfinished"}:(e.claimed=!0,this.addCoins(e.reward.coin),{ok:!0,quest:e}):{ok:!1,reason:"missing"}}toJSON(){const t=this.inventory.toJSON();return{stamina:Math.round(this.stamina*10)/10,bag:t.bag,storage:t.storage,buildings:this.buildings,mailbox:this.mailbox,nodes:this.nodes,coins:Math.round(this.coins),skills:this.skills.toJSON(),fish:{...this.fish},supplies:{...this.supplies},tools:{...this.tools},cats:JSON.parse(JSON.stringify(this.cats)),cooked:{...this.cooked},quests:JSON.parse(JSON.stringify(this.quests)),buff:{...this.buff},fishing:{...this.fishing},crops:{...this.crops},farmPlots:this.farmPlots.map(e=>e&&e.crop?{crop:e.crop,remain:Math.round(Math.max(0,e.remain)*100)/100,total:Math.round(e.total*100)/100,watered:Math.max(0,Math.floor(e.watered||0)),wet:Math.round(Math.max(0,e.wet||0)*10)/10}:null),counters:{...this.counters},achievements:{unlocked:[...this.achievements.unlocked],claimed:[...this.achievements.claimed]},bridge:{built:!!this.bridgeState().built,invested:{...this.bridgeState().invested}},bridgeBuilt:!!this.bridgeState().built,cartLevel:this.cartLevel,bagCapacity:this.bagCapacity,paddyPlots:this.paddyPlots.map(e=>e&&e.crop?{crop:e.crop,remain:Math.round(Math.max(0,e.remain)*100)/100,total:Math.round(e.total*100)/100,watered:Math.max(0,Math.floor(e.watered||0)),wet:Math.round(Math.max(0,e.wet||0)*10)/10}:null),welcome:{step:Math.max(0,Math.min(3,Math.floor(Number(this.welcome&&this.welcome.step)||0)))},defense:_(this,qo,Gp).call(this)}}load(t){if(this.reset(),!t||typeof t!="object")return this;this.stamina=In(t.stamina,0,vi.max,vi.max),this.cartLevel=pe(t.cartLevel,0,sn.maxLevel,0),this.inventory.load({bag:t.bag,storage:t.storage},this.bagCapacity);const e=t.buildings&&typeof t.buildings=="object"?t.buildings:{};for(const b of wi){const T=e[b.id]&&typeof e[b.id]=="object"?e[b.id]:null,w=this.buildings[b.id];if(T&&(w.done=!!T.done,T.invested&&typeof T.invested=="object"))for(const[A,R]of Object.entries(T.invested)){if(!le[A])continue;const x=Math.floor(Number(R));Number.isFinite(x)&&x>0&&(w.invested[A]=x)}}const i=t.mailbox&&typeof t.mailbox=="object"?t.mailbox:{},n=Array.isArray(i.read)?i.read:[],s=Array.isArray(i.claimed)?i.claimed:[];if(this.mailbox.read=n.filter(b=>typeof b=="string"),this.mailbox.claimed=s.filter(b=>typeof b=="string"),t.nodes&&typeof t.nodes=="object")for(const[b,T]of Object.entries(t.nodes)){if(typeof b!="string"||!T||typeof T!="object")continue;const w=Math.floor(Number(T.left)),A=Number(T.respawn);this.nodes[b]={left:Number.isFinite(w)&&w>=0?Math.min(9,w):0,respawn:Number.isFinite(A)&&A>0?Math.min(600,A):0}}if(this.coins=pe(t.coins,0,999999,0),this.skills.load(t.skills),this.fish={},t.fish&&typeof t.fish=="object")for(const[b,T]of Object.entries(t.fish)){if(!Pi[b])continue;const w=Math.floor(Number(T));Number.isFinite(w)&&w>0&&(this.fish[b]=Math.min(999,w))}for(const b of qa)this.supplies[b]=0;if(t.supplies&&typeof t.supplies=="object")for(const b of qa)this.supplies[b]=pe(t.supplies[b],0,99,0);for(const b of js)this.tools[b]=1;if(t.tools&&typeof t.tools=="object")for(const b of js)this.tools[b]=pe(t.tools[b],1,_s[b].max,1);for(const b of oi)this.cats[b.id]={aff:0,gifts:[],follow:!1};if(t.cats&&typeof t.cats=="object")for(const b of oi){const T=t.cats[b.id];if(!T||typeof T!="object")continue;const w=Array.isArray(T.gifts)?T.gifts.map(A=>Math.floor(Number(A))).filter(A=>Number.isFinite(A)&&A>=2&&A<=5):[];this.cats[b.id]={aff:Math.round(In(T.aff,0,999,0)),gifts:[...new Set(w)],follow:!!T.follow}}if(this.cooked={},t.cooked&&typeof t.cooked=="object")for(const[b,T]of Object.entries(t.cooked)){if(!pr[b])continue;const w=Math.floor(Number(T));Number.isFinite(w)&&w>0&&(this.cooked[b]=Math.min(999,w))}if(this.quests={day:0,list:[]},t.quests&&typeof t.quests=="object"&&Array.isArray(t.quests.list)){const b=pe(t.quests.day,0,3650,0),T=[];for(const w of t.quests.list){if(!w||typeof w!="object"||!Jn[w.kind])continue;const A=pe(w.need,1,99,1);T.push({id:typeof w.id=="string"?w.id:`${b}-${T.length}-${w.kind}`,kind:w.kind,event:Jn[w.kind].event,icon:typeof w.icon=="string"?w.icon:Jn[w.kind].icon,label:typeof w.label=="string"?w.label:Jn[w.kind].label(A),need:A,progress:pe(w.progress,0,A,0),claimed:!!w.claimed,reward:{coin:pe(w.reward&&w.reward.coin,0,9999,Jn[w.kind].coin[0]),star:pe(w.reward&&w.reward.star,0,9,Jn[w.kind].star)}})}T.length&&(this.quests={day:b,list:T})}const r=t.buff&&typeof t.buff=="object"?t.buff:{};this.buff={kind:typeof r.kind=="string"&&r.kind?r.kind:"",left:In(r.left,0,600,0)};const o=t.fishing&&typeof t.fishing=="object"?t.fishing:{};if(this.fishing={casts:pe(o.casts,0,99999,0),catches:pe(o.catches,0,99999,0),misses:pe(o.misses,0,99999,0),best:pe(o.best,0,999,0)},this.crops={},t.crops&&typeof t.crops=="object")for(const[b,T]of Object.entries(t.crops)){if(!Jt[b])continue;const w=Math.floor(Number(T));Number.isFinite(w)&&w>0&&(this.crops[b]=Math.min(999,w))}this.farmPlots=new Array(Ot.cols*Ot.rows).fill(null);const l=Array.isArray(t.farmPlots)?t.farmPlots:[];for(let b=0;b<this.farmPlots.length;b++){const T=l[b];if(!T||typeof T!="object")continue;const w=Jt[T.crop];if(!w)continue;const A=In(T.total,1,600,w.grow);this.farmPlots[b]={crop:w.id,total:A,remain:In(T.remain,0,A,A),watered:pe(T.watered,0,Me.maxWater,0),wet:In(T.wet,0,Me.wetSeconds,0)}}for(const b of Object.keys(this.counters))this.counters[b]=pe(t.counters&&t.counters[b],0,999999,0);this.bridge={built:!1,invested:{}};const c=t.bridge&&typeof t.bridge=="object"?t.bridge:{};this.bridge.built=!!t.bridgeBuilt||!!c.built;const h=c.invested&&typeof c.invested=="object"?c.invested:{};for(const[b,T]of Object.entries(h)){if(!le[b])continue;const w=Math.floor(Number(T));Number.isFinite(w)&&w>0&&(this.bridge.invested[b]=w)}this.paddyPlots=new Array(Zt.cols*Zt.rows).fill(null);const d=Array.isArray(t.paddyPlots)?t.paddyPlots:[];for(let b=0;b<this.paddyPlots.length;b++){const T=d[b];if(!T||typeof T!="object")continue;const w=Jt[T.crop];if(!w||!w.paddyOnly)continue;const A=In(T.total,1,600,w.grow);this.paddyPlots[b]={crop:w.id,total:A,remain:In(T.remain,0,A,A),watered:pe(T.watered,0,Me.maxWater,0),wet:In(T.wet,0,Me.wetSeconds,0)}}const p=t.welcome&&typeof t.welcome=="object"?t.welcome:{};this.welcome={step:pe(p.step,0,3,0)};const f=t.defense&&typeof t.defense=="object"?t.defense:{},g=f.stock&&typeof f.stock=="object"?f.stock:{};this.defense={stock:{},slots:new Array(zt.slots.length).fill(null),wins:pe(f.wins,0,9999,0),losses:pe(f.losses,0,9999,0),runs:pe(f.runs,0,9999,0),lastRunDay:pe(f.lastRunDay,0,3650,0),lastResult:typeof f.lastResult=="string"?f.lastResult:"",lastStolen:pe(f.lastStolen,0,999999,0),totalDown:pe(f.totalDown,0,99999,0),turretHits:pe(f.turretHits,0,99999,0),perfectEvacs:pe(f.perfectEvacs,0,9999,0),lastWave:f.lastWave&&typeof f.lastWave=="object"?{...f.lastWave}:null};for(const b of nr)this.defense.stock[b]=pe(g[b],0,9,0);const y=Array.isArray(f.slots)?f.slots:[];for(let b=0;b<this.defense.slots.length;b++){const T=y[b];!T||typeof T!="object"||!ke[T.kind]||(this.defense.slots[b]={kind:T.kind,hp:pe(T.hp,1,9999,ke[T.kind].hp)})}this.achievements={unlocked:[],claimed:[]};const m=t.achievements&&typeof t.achievements=="object"?t.achievements:{},v=new Set(sr.map(b=>b.id));for(const b of["unlocked","claimed"]){const T=Array.isArray(m[b])?m[b]:[];this.achievements[b]=[...new Set(T.filter(w=>typeof w=="string"&&v.has(w)))]}return this}}qo=new WeakSet,Gp=function(){const t=this.defense||{},e={};for(const s of nr)e[s]=Math.max(0,Math.floor(Number(t.stock&&t.stock[s])||0));const i=new Array(zt.slots.length).fill(null),n=Array.isArray(t.slots)?t.slots:[];for(let s=0;s<i.length;s++){const r=n[s];!r||!ke[r.kind]||(i[s]={kind:r.kind,hp:Math.max(1,Math.round(Number(r.hp)||ke[r.kind].hp))})}return{stock:e,slots:i,wins:Math.max(0,Math.floor(Number(t.wins)||0)),losses:Math.max(0,Math.floor(Number(t.losses)||0)),runs:Math.max(0,Math.floor(Number(t.runs)||0)),lastRunDay:Math.max(0,Math.floor(Number(t.lastRunDay)||0)),lastResult:typeof t.lastResult=="string"?t.lastResult:"",lastStolen:Math.max(0,Math.floor(Number(t.lastStolen)||0)),totalDown:Math.max(0,Math.floor(Number(t.totalDown)||0)),turretHits:Math.max(0,Math.floor(Number(t.turretHits)||0)),perfectEvacs:Math.max(0,Math.floor(Number(t.perfectEvacs)||0)),lastWave:t.lastWave&&typeof t.lastWave=="object"?{...t.lastWave}:null}};const sh=6,T1={timeScale:1},A1=[1,10,60],mn=(a,t)=>{const e=Number(a);return Number.isFinite(e)?e:t},R1=(a,t,e,i)=>{const n=Number(a);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};function Yf(a){if(!a||typeof a!="object"||Array.isArray(a))return null;const t=a.settings&&typeof a.settings=="object"?a.settings:{},e={muted:!!t.muted,timeScale:A1.includes(Number(t.timeScale))?Number(t.timeScale):T1.timeScale,fps30:!!t.fps30},i=a.player&&typeof a.player=="object"?a.player:{},n=a.playerPos&&typeof a.playerPos=="object"?a.playerPos:{},s={x:mn(i.x,mn(n.x,Un.x)),z:mn(i.z,mn(n.z,Un.z)),yaw:mn(i.yaw,Math.PI)},r=Array.isArray(a.discovered)?a.discovered.filter(l=>typeof l=="string"):Array.isArray(a.discoveredDittos)?a.discoveredDittos.filter(l=>typeof l=="string"):[],o=new Bp(a).toJSON();return{version:sh,fromVersion:Math.max(1,Math.min(sh,Math.floor(mn(a.version,1)))),savedAt:mn(a.savedAt,Date.now()),day:Math.max(1,Math.min(3650,Math.floor(mn(a.day,1)))),elapsed:R1(mn(a.elapsed,mn(a.elapsedSeconds,120)),0,Be-.01,120),discovered:r,settings:e,player:s,...o}}const ec=`${hi.dbName}:${hi.key}`;class C1{constructor(){this.mode="unknown",this.lastError=null}async load(){try{const t=await d1(hi.key);if(t)return this.mode="idb",Yf(t);this.mode="idb"}catch(t){this.lastError=String(t&&t.message?t.message:t),this.mode="local"}try{const t=localStorage.getItem(ec);if(t)return this.mode=this.mode==="unknown"?"local":this.mode,Yf(JSON.parse(t))}catch(t){this.lastError=String(t)}return null}async hasSave(){return!!await this.load()}async save(t){try{return await f1(hi.key,{...t,version:sh}),this.mode="idb",!0}catch(e){this.lastError=String(e&&e.message?e.message:e),this.mode="local";try{return localStorage.setItem(ec,JSON.stringify(t)),!0}catch(i){return this.lastError=String(i),!1}}}async clear(){try{await u1(hi.key)}catch(t){this.lastError=String(t)}try{localStorage.removeItem(ec)}catch{}}}const vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const P1=new Yh(-1,1,1,-1,0,1);class L1 extends Fe{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}}const D1=new L1;class td{constructor(t){this._mesh=new qt(D1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hp extends _a{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof xi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fa.clone(t.uniforms),this.material=new xi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new td(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kf extends _a{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class I1 extends _a{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class N1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hp(vo),this.copyPass.material.blending=ys,this.timer=new Pg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kf!==void 0&&(r instanceof Kf?i=!0:r instanceof I1&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k1 extends _a{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ut}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const U1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pa extends _a{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new bi(s,r,{type:_i,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new bi(s,r,{type:_i,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new bi(s,r,{type:_i,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),r=Math.round(r/2)}const o=U1;this.highPassUniforms=fa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xi({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fa.clone(vo.uniforms),this.blendMaterial=new xi({uniforms:this.copyUniforms,vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,premultipliedAlpha:!0,blending:ns,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ut,this._oldClearAlpha=1,this._basic=new Ke,this._fsQuad=new td(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new At(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=pa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let r=0;r<t;r++)e.push(.39894*Math.exp(-.5*r*r/(i*i))/i);const n=[],s=[];for(let r=1;r<t;r+=2){const o=e[r],l=r+1<t?e[r+1]:0,c=o+l;n.push((r*o+(r+1)*l)/c),s.push(c)}return new xi({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new xi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}pa.BlurDirectionX=new At(1,0);pa.BlurDirectionY=new At(0,1);const ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class F1 extends _a{constructor(){super(),this.isOutputPass=!0,this.uniforms=fa.clone(ao.uniforms),this.material=new Gu({name:ao.name,uniforms:this.uniforms,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this._fsQuad=new td(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Rh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const oa={bloomThreshold:.86,bloomStrength:.3,bloomRadius:.4,saturation:1.07,contrast:.2,vignette:.28},O1={uniforms:{tDiffuse:{value:null},uSaturation:{value:oa.saturation},uContrast:{value:oa.contrast},uVignette:{value:oa.vignette}},vertexShader:`
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
  `};function Zf(a,t,e){const i=a.getDrawingBufferSize(new At),n=new bi(Math.max(1,i.x),Math.max(1,i.y),{type:_i,samples:4});n.texture.name="MetamongPostRT";const s=new N1(a,n);s.setPixelRatio(a.getPixelRatio()),s.setSize(window.innerWidth,window.innerHeight);const r=new k1(t,e);s.addPass(r);const o=new pa(new At(window.innerWidth,window.innerHeight),oa.bloomStrength,oa.bloomRadius,oa.bloomThreshold);s.addPass(o),s.addPass(new F1);const l=new Hp(O1);s.addPass(l);let c={calls:0,triangles:0};const h=r.render.bind(r);return r.render=(d,p,f,g,y)=>{h(d,p,f,g,y),c={calls:d.info.render.calls,triangles:d.info.render.triangles}},{composer:s,bloom:o,grade:l,renderPass:r,get sceneStats(){return c},setSize(d,p){s.setPixelRatio(a.getPixelRatio()),s.setSize(d,p)},render(){s.render()},dispose(){s.dispose(),n.dispose()}}}const z1=["protagonist","somi","ongi","ditto_basic","disguises","buildings","nature","raider","raider_runner","raider_big"],B1=new Sg;function G1(a){return a.colorSpace=be,a.magFilter=ue,a.minFilter=ue,a.generateMipmaps=!1,a.wrapS=Hi,a.wrapT=Hi,a.anisotropy=1,a}async function H1(a){const t=new URL("sprites/",document.baseURI),e=await fetch(new URL(`${a}.json`,t).href);if(!e.ok)throw new Error(`스프라이트 매니페스트 없음: ${a}.json (${e.status})`);const i=await e.json(),n=G1(await B1.loadAsync(new URL(`${a}_sheet.png`,t).href)),s=new Map;for(const r of i.frames)s.set(r.name,r);return{set:a,texture:n,frames:s,cell:i.cell,cols:i.grid[0],rows:i.grid[1],notes:i.notes||[]}}async function V1(){const a=await Promise.all(z1.map(H1)),t=new Map;for(const e of a)t.set(e.set,e);return t}const W1=.12,$1={tree:"log",rock:"stone",flower:"petal"},Va={chance:.09,coinChance:.6,coin:5};var di,Vp,ah,Wp,xo,rh;class X1{constructor({scenery:t,progress:e,drops:i,fx:n,audio:s}){Re(this,di);this.scenery=t,this.progress=e,this.drops=i,this.fx=n,this.audio=s,this.hooks={},this.cooldown=0,this.fullWarnAt=0,this.time=0}get inventory(){return this.progress.inventory}reset(){for(const t of this.scenery.nodes)_(this,di,rh).call(this,t,!1),t.berryT=22+Math.random()*26;this.drops&&this.drops.clear()}applySaved(t){if(this.reset(),!(!t||typeof t!="object"))for(const e of this.scenery.nodes){const i=t[e.key];i&&(this.scenery.applyNodeState(e,i),i.left>0&&!(i.respawn>0)&&(e.hitsLeft=Math.min(e.hitsNeeded,i.left)),e.respawn=Math.max(0,Number(i.respawn)||0),i.respawn>0&&(e.hitsLeft=e.hitsNeeded,e.harvested=!0))}}toJSON(){const t={};for(const e of this.scenery.nodes){const i=e.harvested?0:e.hitsLeft,n=e.harvested?Math.max(.1,Math.round(e.respawn*10)/10):0;i>=e.hitsNeeded&&n<=0||(t[e.key]={left:i,respawn:n})}return t}nearest(t,e=2.5){let i=null,n=e;for(const s of this.scenery.nodes){if(s.harvested)continue;const r=Math.hypot(s.x-t.x,s.z-t.z);r<n&&(i=s,n=r)}return i}nodeAt(t,e,i=3){let n=null,s=i;for(const r of this.scenery.nodes){if(r.harvested)continue;const o=Math.hypot(r.x-t,r.z-e);o<s&&(n=r,s=o)}return n}hit(t){if(!t||t.harvested)return{ok:!1,reason:"gone"};if(this.cooldown>0)return{ok:!1,reason:"cooldown"};this.cooldown=W1;const e=el[t.kind];if(!e)return{ok:!1,reason:"kind"};const i=Math.max(1,Math.round(e.cost*this.progress.staminaMultiplier(t.kind)));if(!this.progress.useStamina(i))return this.audio.sfxDeny(),this.hooks.toast?.("기운이 부족해요 — 열매를 먹거나 잠깐 쉬어요 🍓",2e3),this.fx.float("기운 부족",t.x,t.y+t.height*.8,t.z,"#b26a86"),{ok:!1,reason:"stamina"};t.hitsLeft=Math.max(0,t.hitsLeft-1-this.progress.hitsBonus(t.kind)),this.scenery.pop(t),this.fx.burst(t.x,t.y+t.height*.42,t.z,_(this,di,Vp).call(this,t),11,{spread:1.1,up:2}),this.audio.sfxHit(t.kind),this.hooks.onHit?.(t.kind,i);const n=$1[t.kind];if(n&&_(this,di,ah).call(this,n,1,t,t.y+t.height*.95),_(this,di,Wp).call(this,t),t.hitsLeft>0)return{ok:!0,harvest:!1};const s=dM(t.kind,t.frame),r={};for(const[l,c]of Object.entries(s)){const h=this.inventory.add(l,c),d=c-h;if(d>0&&(r[l]=d),h>0){const p=_(this,di,xo).call(this,t.x,t.z);this.drops.spawn(l,h,p.x,p.z),this.hooks.toast?.(`가방이 가득 — ${le[l].name} ${h}개를 바닥에 내려놨어요`,2400)}}let o=0;for(const[l,c]of Object.entries(r))this.fx.float(`+${c} ${le[l].name}`,t.x,t.y+t.height*.9+o*.24,t.z,"#5f5470"),o++;return!Object.keys(r).length&&!Object.keys(s).length&&this.fx.float("…",t.x,t.y+.9,t.z,"#5f5470"),this.scenery.setHarvested(t,!0),t.respawn=60+Math.random()*30,t.hitsLeft=t.hitsNeeded,r.star?(this.audio.sfxRare(),this.hooks.toast?.(`별조각을 얻었어요! ⭐ ${fM(r)}`,2600)):this.audio.sfxPickup(),this.hooks.onHarvest?.(t.kind,r,t),this.hooks.save?.(),{ok:!0,harvest:!0,gains:r}}pickup(t){const e=le[t.itemId];if(!e)return!0;if(this.inventory.roomFor(t.itemId)<=0)return this.time-this.fullWarnAt>4&&(this.fullWarnAt=this.time,this.hooks.toast?.("가방이 가득 찼어요 — 공방 창고에 맡겨 주세요 🎒",2400)),!1;const i=this.inventory.add(t.itemId,t.count),n=t.count-i;return n>0&&(this.fx.float(`+${n} ${e.name}`,t.x,t.y+.85,t.z,"#5f5470"),this.audio.sfxPickup(),this.hooks.onPickup?.(t.itemId,n)),!0}update(t,e,i,n){if(this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),e>0){this.progress.restStamina(vi.regenPerSecond*e);for(const s of this.scenery.nodes){if(s.harvested){s.respawn-=e,s.respawn<=0&&_(this,di,rh).call(this,s,!0);continue}if(s.berryT-=e,s.berryT>0)continue;if(this.drops.hasSource(s.key)){s.berryT=15+Math.random()*10;continue}const r=_(this,di,xo).call(this,s.x,s.z),o=this.drops.spawn("berry",1,r.x,r.z,s.key);o&&(this.fx.burst(r.x,o.y+.5,r.z,"#ffb3c8",6,{spread:.8,up:1.2}),this.fx.float("열매가 톡",s.x,s.y+s.height*.9,s.z,"#c25f80")),s.berryT=45+Math.random()*30}}this.drops.update(t,n?i:null,s=>this.pickup(s))}}di=new WeakSet,Vp=function(t){return t.kind==="tree"?t.frame.startsWith("cherry")?"#ffc2d8":"#9ed08a":t.kind==="rock"?"#c8c8dc":"#ffb9d5"},ah=function(t,e,i,n){const s=le[t];if(!s)return 0;const r=this.inventory.add(t,e),o=e-r;if(o>0&&this.fx.float(`+${o} ${s.name}`,i.x,n,i.z,"#5f5470"),r>0){const l=_(this,di,xo).call(this,i.x,i.z);this.drops.spawn(t,r,l.x,l.z),this.time-this.fullWarnAt>6&&(this.fullWarnAt=this.time,this.hooks.toast?.(`가방이 가득 — ${s.name} ${r}개를 바닥에 내려놨어요`,2400))}return o},Wp=function(t){if(Math.random()>=Va.chance)return;this.progress.bump("lucky",1);const e=t.y+t.height*.75;if(Math.random()<Va.coinChance){this.progress.addCoins(Va.coin),this.audio.sfxCoin?.(),this.fx.burst(t.x,e,t.z,"#ffd464",12,{spread:1.2,up:2.2}),this.fx.float(`🪙 +${Va.coin} 숨은 동전`,t.x,e+.3,t.z,"#b38b3d"),this.hooks.toast?.("럭키! 나무 밑에서 숨은 섬 코인을 주웠어요 🪙 +5",2e3),this.hooks.onPickup?.("coin",Va.coin);return}_(this,di,ah).call(this,"berry",1,t,e+1.5),this.audio.sfxRare?.(),this.fx.burst(t.x,e,t.z,"#ffe08a",14,{spread:1.3,up:2.4}),this.fx.float("🌟 황금 열매",t.x,e+.55,t.z,"#b2698f"),this.hooks.toast?.("럭키! 황금 열매가 톡 떨어졌어요 🌟",2e3)},xo=function(t,e){for(let i=0;i<8;i++){const n=Math.random()*Math.PI*2,s=.55+Math.random()*.5,r=t+Math.cos(n)*s,o=e+Math.sin(n)*s;if(!this.scenery.terrain||this.scenery.terrain.isWalkable(r,o))return{x:r,z:o}}return{x:t+.4,z:e+.4}},rh=function(t,e){t.harvested=!1,t.hitsLeft=t.hitsNeeded,t.respawn=0,t.scale=1,t.targetScale=1,t.opacity=1,t.targetOpacity=1,t.mesh.scale.setScalar(1),t.mesh.material.opacity=1,t.mesh.material.transparent=!1,t.mesh.material.depthWrite=!0,t.mesh.rotation.z=0,t.sprout.visible=!1,t.stubTarget=0,t.stub.material.opacity=0,t.stub.visible=!1,t.collider&&(t.collider.r=t.baseR),e&&this.fx.burst(t.x,t.y+t.height*.35,t.z,"#cfeeb4",7,{spread:.9,up:1.4})};Object.values(Pi).reduce((a,t)=>a+t.weight,0);function q1(a){const t=Object.values(a).reduce((i,n)=>i+n,0);let e=Math.random()*t;for(const[i,n]of Object.entries(a))if(e-=n,e<=0)return Pi[i];return Pi.anchovy}var gi,$p,Xp,Nn;class Y1{constructor({progress:t,audio:e,fx:i,scene:n,hud:s,hooks:r={}}){Re(this,gi);this.progress=t,this.audio=e,this.fx=i,this.hud=s,this.hooks=r,this.state="idle",this.t=0,this.waitFor=2,this.window=Qe.biteWindow,this.baitUsed=!1,this.lastResult=null,this.castFrom=new k,this.rings=[],_(this,gi,$p).call(this,n)}get active(){return this.state!=="idle"}get waitingBite(){return this.state==="bite"}get canReel(){return this.state==="bite"||this.state==="wait"||this.state==="cast"}start({bait:t=!1}={}){if(this.state!=="idle")return{ok:!1,reason:"busy"};if(!this.progress.building("dock").done)return{ok:!1,reason:"dock"};if(this.progress.stamina<Qe.stamina)return{ok:!1,reason:"stamina"};let e=!1;if(t){if(this.progress.supply("bait")<=0)return{ok:!1,reason:"no-bait"};this.progress.takeSupply("bait",1),e=!0}this.progress.useStamina(Qe.stamina),this.progress.fishing.casts+=1,this.baitUsed=e,this.state="cast",this.t=0,this.lastResult=null,this.waitFor=Qe.waitMin+Math.random()*(Qe.waitMax-Qe.waitMin),this.window=Qe.biteWindow;const i=Qe.spot;this.castFrom.set(i.x+.1,.9,i.z-.6),this.group.visible=!0,this.bobber.position.copy(this.castFrom),this.bobber.scale.setScalar(1);for(const n of this.rings)n.t=0,n.mesh.material.opacity=0;return this.audio?.sfxCast?.(),this.hud?.setFishing?.({state:"cast",label:"찌를 던지는 중…"}),_(this,gi,Nn).call(this),this.hooks.onStart?.(),{ok:!0,bait:e}}reel(){return this.active?this.state==="bite"?_(this,gi,Xp).call(this):this.state==="wait"||this.state==="cast"?(this.state="lost",this.t=0,this.progress.fishing.misses+=1,this.audio?.sfxDeny?.(),this.hud?.setFishing?.({state:"lost",label:"찌를 너무 일찍 당겼어요"}),this.hooks.toast?.("찌를 너무 일찍 당겼어요 — 입질을 기다려 보세요 🎣",1900),_(this,gi,Nn).call(this),{ok:!1,reason:"early"}):{ok:!1,reason:"state"}:{ok:!1,reason:"idle"}}cancel(t=""){this.active&&(this.state="idle",this.t=0,this.group.visible=!1,this.hud?.setFishing?.(null),t&&this.hooks.toast?.(t,1800),_(this,gi,Nn).call(this))}update(t,e){if(!this.active)return;const i=Qe.spot;if((e?Math.hypot(e.x-i.x,e.z-i.z):99)>Qe.leash&&this.state!=="reel"&&this.state!=="lost"){this.cancel("찌에서 너무 멀어졌어요 — 낚싯줄을 회수했어요");return}this.t+=t;const s=new k(Qe.castTo.x,.12,Qe.castTo.z);if(this.state==="cast"){const o=Math.min(1,this.t/.55);this.bobber.position.lerpVectors(this.castFrom,s,o),this.bobber.position.y=this.castFrom.y+(s.y-this.castFrom.y)*o+Math.sin(o*Math.PI)*.85,o>=1&&(this.state="wait",this.t=0,this.audio?.sfxSplash?.(.55),this.fx?.burst(s.x,.12,s.z,"#e6fbff",10,{spread:1.1,up:1.4}),this.hud?.setFishing?.({state:"wait",label:"찌가 둥실둥실… 입질을 기다려요"}),_(this,gi,Nn).call(this))}else if(this.state==="wait")this.bobber.position.x=s.x+Math.sin(this.t*1.7)*.06,this.bobber.position.z=s.z+Math.cos(this.t*1.3)*.06,this.bobber.position.y=s.y+.02+Math.sin(this.t*3.1)*.026,this.bobber.rotation.z=Math.sin(this.t*2.1)*.12,this.t>=this.waitFor&&(this.state="bite",this.t=0,this.audio?.sfxSplash?.(1),this.audio?.sfxBite?.(),this.fx?.burst(s.x,.16,s.z,"#ffffff",14,{spread:1.3,up:2.2}),this.fx?.float("!",s.x,.95,s.z,"#ff6f8f"),this.hud?.setFishing?.({state:"bite",label:"입질! 지금 탭!",urgent:!0,ratio:1}),this.hud?.bite?.(),_(this,gi,Nn).call(this));else if(this.state==="bite"){const o=Math.max(0,this.window-this.t);this.bobber.position.set(s.x+(Math.random()-.5)*.1,s.y-.05+Math.sin(this.t*34)*.035,s.z+(Math.random()-.5)*.1),this.bobber.rotation.z=Math.sin(this.t*26)*.35,this.hud?.setFishing?.({state:"bite",label:"입질! 지금 탭!",urgent:!0,ratio:o/this.window}),this.t>=this.window&&(this.state="lost",this.t=0,this.progress.fishing.misses+=1,this.progress.gainExp("fish",Qe.expMiss),this.audio?.sfxDeny?.(),this.hud?.setFishing?.({state:"lost",label:"놓쳤어요…"}),this.hooks.toast?.("놓쳤어요… 찌가 가라앉는 순간을 노려 보세요",1800),_(this,gi,Nn).call(this))}else if(this.state==="reel"||this.state==="lost"){const o=Math.min(1,this.t/.55);this.bobber.position.y=.06+(this.state==="reel"?o*.9:-o*.25),this.bobber.scale.setScalar(Math.max(.001,1-o)),o>=1&&(this.state="idle",this.group.visible=!1,this.bobber.scale.setScalar(1),this.hud?.setFishing?.(null),_(this,gi,Nn).call(this))}const r=this.bobber.position;for(const o of this.rings){o.t+=t,o.t>o.life&&(o.t=0);const l=o.t/o.life;o.mesh.position.set(r.x,.1,r.z);const c=.55+l*(this.state==="bite"?2.6:1.75);o.mesh.scale.set(c,1,c),o.mesh.material.opacity=(1-l)*(this.state==="bite"?.95:.72)}if(e){const o=this.line.geometry.attributes.position;o.setXYZ(0,e.x,(e.y||.7)+1,e.z),o.setXYZ(1,r.x,r.y+.05,r.z),o.needsUpdate=!0}}}gi=new WeakSet,$p=function(t){this.group=new Ge,this.group.name="Fishing",this.group.visible=!1,t.add(this.group),this.bobber=new Ge;const e=new qt(new Jo(.14,14,12),new Ke({color:"#fffaf6",toneMapped:!1})),i=new qt(new Wh(.1,.18,12),new Ke({color:"#ff6f8f",toneMapped:!1}));i.position.y=.15,this.bobber.add(e,i),this.glow=new li(new je({map:ur(),color:"#dff6ff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),this.glow.scale.set(.95,.95,1),this.bobber.add(this.glow),this.group.add(this.bobber);const n=new Ei(1,1);n.rotateX(-Math.PI/2);for(let r=0;r<3;r++){const o=new Ke({map:xM(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}),l=new qt(n,o);l.renderOrder=4,this.group.add(l),this.rings.push({mesh:l,t:r*.45,life:1.5})}const s=new Fe().setFromPoints([new k(0,0,0),new k(0,0,0)]);this.line=new fg(s,new Nu({color:"#f6fdff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),this.line.frustumCulled=!1,this.group.add(this.line)},Xp=function(){const t=this.baitUsed?n1:Object.fromEntries(Object.keys(Pi).map(s=>[s,Pi[s].weight])),e=q1(t),i=Math.round(e.size[0]+Math.random()*(e.size[1]-e.size[0])),n=this.bobber.position;if(e.id==="star"){const s=this.progress.inventory.add("star",1);s>0&&(this.progress.inventory.storage.star=(this.progress.inventory.stored("star")||0)+s)}else this.progress.addFish(e.id,1);return this.progress.fishing.catches+=1,e.id!=="star"&&(this.progress.fishing.best=Math.max(this.progress.fishing.best,i)),this.state="reel",this.t=0,this.lastResult={fish:e,size:i},this.fx?.burst(n.x,.35,n.z,e.tint||"#dff6ff",16,{spread:1.5,up:2.6}),this.fx?.float(`${e.icon} ${e.name}`,n.x,1.15,n.z,"#5f5470"),this.audio?.sfxReel?.(),e.rare&&this.audio?.sfxRare?.(),this.hooks.onCatch?.(e,i,{bait:this.baitUsed}),this.hud?.setFishing?.({state:"reel",label:`${e.name} ${r1(e.id,i)} 획득!`}),_(this,gi,Nn).call(this),{ok:!0,fish:e,size:i}},Nn=function(){const t=this.hud;t?.setAction&&this.state!=="idle"&&(this.state==="bite"?t.setAction({active:!0,icon:"🎣",label:"입질! 탭!"}):this.state==="cast"||this.state==="wait"?t.setAction({active:!0,icon:"🎣",label:"회수하기"}):t.setAction({active:!1,icon:"🎣",label:"낚시 중"}))};const K1=16,Z1=.95;class J1{constructor(t,e){this.terrain=e,this.group=new Ge,this.group.name="Drops",t.add(this.group),this.items=[],this.time=0}hasSource(t){return!!t&&this.items.some(e=>e.sourceKey===t)}spawn(t,e,i,n,s=null){const r=le[t]?t:"berry";if(s&&this.hasSource(s))return null;for(;this.items.length>=K1;)this.remove(this.items[0]);const o=Math.max(this.terrain.groundY(i,n),.02),l=new li(new je({map:mM(r),transparent:!0,depthWrite:!1,toneMapped:!1}));l.scale.set(.44,.44,1),l.position.set(i,o+.36,n),l.renderOrder=3;const c=new li(new je({map:ur(),color:le[r].tint,transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1,blending:ns}));c.scale.set(.95,.95,1),c.position.copy(l.position),c.position.y-=.04,c.renderOrder=2;const h={itemId:r,count:Math.max(1,Math.floor(e)||1),x:i,z:n,y:o,sprite:l,halo:c,sourceKey:s,age:Math.random()*6};return l.userData.drop=h,this.group.add(c),this.group.add(l),this.items.push(h),h}remove(t){const e=this.items.indexOf(t);e<0||(this.items.splice(e,1),t.sprite.material.dispose(),t.halo.material.dispose(),this.group.remove(t.sprite),this.group.remove(t.halo))}update(t,e,i){this.time+=t;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];s.age+=t;const r=Math.sin(this.time*2.3+s.age)*.07;s.sprite.position.y=s.y+.38+r,s.halo.position.y=s.y+.32+r*.6;const o=.62+Math.sin(this.time*3.1+s.age)*.18;s.halo.material.opacity=o;const l=.9+Math.sin(this.time*2.6+s.age)*.08;if(s.halo.scale.set(l,l,1),!e)continue;Math.hypot(s.x-e.x,s.z-e.z)<=Z1&&(i?i(s):!0)!==!1&&this.remove(s)}}rayTargets(){return this.items.map(t=>t.sprite)}clear(){for(let t=this.items.length-1;t>=0;t--)this.remove(this.items[t])}}const Ks=220;class Q1{constructor(t,e){this.scene=t,this.particles=Array.from({length:Ks},()=>({x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,color:new ut("#ffffff")})),this.cursor=0;const i=new Float32Array(Ks*3),n=new Float32Array(Ks*3);for(let o=0;o<Ks;o++)i[o*3+1]=-999;const s=new Fe;s.setAttribute("position",new yi(i,3)),s.setAttribute("color",new yi(n,3));const r=new Hh({size:.17,map:_M(),vertexColors:!0,transparent:!0,opacity:.96,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0});this.points=new ku(s,r),this.points.name="GatherFx",this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.layer=u("div",{class:"float-layer"}),e.append(this.layer),this.texts=[],this.v=new k}burst(t,e,i,n="#ffd7e7",s=10,r={}){const o=r.spread??1.6,l=r.up??2.3,c=r.size??1;for(let h=0;h<s;h++){const d=this.particles[this.cursor];this.cursor=(this.cursor+1)%Ks;const p=Math.random()*Math.PI*2,f=Math.random()*o;d.x=t+Math.cos(p)*.12,d.y=e+.25+Math.random()*.5,d.z=i+Math.sin(p)*.12,d.vx=Math.cos(p)*f,d.vz=Math.sin(p)*f,d.vy=.6+Math.random()*l,d.max=.45+Math.random()*.4,d.life=d.max,d.size=c*(.7+Math.random()*.6),d.color.set(n),d.color.offsetHSL(0,0,(Math.random()-.5)*.12)}}float(t,e,i,n,s="#6b5878"){const r=u("div",{class:"float-text",style:{color:s}},t);for(this.layer.append(r),this.texts.push({el:r,pos:new k(e,i,n),age:0,life:1.15});this.texts.length>14;)this.texts.shift().el.remove()}update(t,e){const i=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array;for(let o=0;o<Ks;o++){const l=this.particles[o],c=o*3;if(l.life<=0){i[c+1]!==-999&&(i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0);continue}if(l.life=Math.max(0,l.life-t),l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t,l.vy-=5.4*t,l.vx*=1-t*1.6,l.vz*=1-t*1.6,l.y<.02&&(l.y=.02,l.vy*=-.32),l.life<=0){i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0;continue}const h=Math.min(1,l.life/l.max);i[c]=l.x,i[c+1]=l.y,i[c+2]=l.z,n[c]=l.color.r*h,n[c+1]=l.color.g*h,n[c+2]=l.color.b*h}if(this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,!this.texts.length)return;const s=window.innerWidth,r=window.innerHeight;for(let o=this.texts.length-1;o>=0;o--){const l=this.texts[o];if(l.age+=t,l.age>=l.life){l.el.remove(),this.texts.splice(o,1);continue}const c=l.age/l.life;this.v.copy(l.pos),this.v.y+=.55+c*.85,this.v.project(e);const h=(this.v.x*.5+.5)*s,d=(-this.v.y*.5+.5)*r;l.el.style.transform=`translate(-50%, -50%) translate(${h.toFixed(1)}px, ${d.toFixed(1)}px)`,l.el.style.opacity=String(Math.min(1,(1-c)*2.4)),l.el.style.fontSize=`${13-c*1.5}px`}}clear(){for(const t of this.particles)t.life=0,t.y=-999;for(const t of this.texts)t.el.remove();this.texts=[]}}function j1(a,t){const e=pr[t];if(!e)return{ok:!1,reason:"recipe"};const i=a.canCook(t);if(!i.ok)return{ok:!1,reason:i.reason,lack:i.lack};for(const[n,s]of Object.entries(e.need||{}))a.inventory.take(n,s);for(const[n,s]of Object.entries(e.fish||{}))a.takeFish(n,s);for(const[n,s]of Object.entries(e.crop||{}))a.takeCrop(n,s);return a.restStamina(e.stamina),a.markCooked(t),a.gainExp("cook",e.exp),e.buff>0&&a.setBuff("golden",e.buff),{ok:!0,recipe:e}}function Jf(a){const t=[];for(const[e,i]of Object.entries(a.need||{}))t.push({id:e,n:i,source:"bag"});for(const[e,i]of Object.entries(a.fish||{}))t.push({id:e,n:i,source:"fish"});for(const[e,i]of Object.entries(a.crop||{}))t.push({id:e,n:i,source:"crop"});return t}function _o(a){return Math.max(0,Math.floor(Number(s1[a])||0))}function tS(a){const t=[];for(const e of Jc){const i=a.inventory.count(e),n=_o(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"bag"})}for(const e of xs){const i=a.fishCount(e),n=_o(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"fish"})}for(const e of kp){const i=a.cropCount(e),n=_o(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"crop"})}return t}function eS(a,t,e=1){const i=_o(t);if(!i)return{ok:!1,reason:"nosell"};const n=a.inventory.count(t),s=a.fishCount(t),r=a.cropCount(t),o=n+s+r;if(o<=0)return{ok:!1,reason:"empty"};const l=e==="all"?o:Math.max(1,Math.floor(Number(e)||1)),c=Math.min(o,l);let h=c;const d=Math.min(s,h);d>0&&(a.takeFish(t,d),h-=d);const p=Math.min(r,h);p>0&&(a.takeCrop(t,p),h-=p),h>0&&a.inventory.take(t,h);const f=c*i;return a.addCoins(f),{ok:!0,count:c,coin:f}}function iS(a,t){const e=ra[t];return e?a.supply(t)>=99?{ok:!1,reason:"full"}:a.spendCoins(e.price)?(a.addSupply(t,1),{ok:!0,good:e}):{ok:!1,reason:"coin"}:{ok:!1,reason:"nogood"}}function nS(a){return qa.map(t=>({...ra[t],owned:a.supply(t),affordable:a.coins>=ra[t].price}))}const Oi=(a,t="")=>u("span",{class:`lchip ${t}`},a);var me,oh,vn,lh,qp,Yp,Kp,Zp,Jp;class sS{constructor(t){Re(this,me);this.game=t,this.codexTab="ditto",this.shopTab="sell"}codex(){const t=_(this,me,oh).call(this,[{id:"ditto",label:"메타몽"},{id:"fish",label:"물고기"},{id:"cook",label:"요리"},{id:"farm",label:"농사"},{id:"cat",label:"고양이"}],this.codexTab,n=>{this.codexTab=n,this.game.openCodex()}),e=u("div",{class:"codex-tabs"},t);return this.codexTab==="fish"?e.append(_(this,me,Yp).call(this)):this.codexTab==="cook"?e.append(_(this,me,Kp).call(this)):this.codexTab==="farm"?e.append(_(this,me,Zp).call(this)):this.codexTab==="cat"?e.append(_(this,me,Jp).call(this)):e.append(_(this,me,qp).call(this)),{title:"📔 도감",subtitle:{ditto:"점 눈 두 개만 남은 어설픈 위장들",fish:"부두에서 낚은 물고기 기록",cook:"공방에서 만들어 본 요리",farm:"텃밭에서 기른 작물 기록",cat:"솜이와 옹이의 마음"}[this.codexTab]||"",body:e,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}rank(){const t=this.game.progress,e=t.skills,i=e.title(),n=e.rows(),s=u("div",{},u("div",{class:"title-medal"},u("span",{class:"ico"},i.icon),u("div",{},u("div",{class:"nm"},i.name),u("div",{class:"meta"},`생활 EXP 합계 ${i.total}`)),i.next?Oi(`다음 ${i.next.name}까지 ${i.toNext}`,"warm"):Oi("최고 칭호","ok")),_(this,me,vn).call(this,i.pct,"life"),u("div",{class:"section-label"},"5대 생활 스킬"),u("div",{class:"skill-list"},...n.map(o=>u("div",{class:"skill-row"},u("span",{class:"sico"},o.icon),u("div",{class:"smain"},u("div",{class:"nm"},`${o.name} · ${o.rank}`),_(this,me,vn).call(this,o.pct),u("div",{class:"meta"},`${o.exp} EXP${o.next?` · ${o.next.name}까지 ${o.toNext}`:" · 최고 랭크"}`)),u("span",{class:"lv"},`Lv.${o.level}`)))),u("div",{class:"section-label"},"승급 조건"),u("div",{class:"hint"},ts.map(o=>`${o.name} ${o.exp}`).join(" · ")),u("div",{class:"section-label"},"경험치"),u("div",{class:"hint"},"채집 +6 · 낚시 성공 +14 · 요리 +30 · 돌보기 +10 (간식 +12) · 농사 심기 +6 / 물주기 +3 / 수확 +16"),u("div",{class:"hint"},"5개 스킬 EXP 합계가 섬 생활 칭호를 정해요.")),r=t.claimableAchievements;return{title:"🌱 생활 랭크",subtitle:`${i.name} · 총 ${i.total} EXP`,body:s,actions:[{label:`🏆 업적${r?` (보상 ${r})`:""}`,kind:"ghost",onClick:()=>this.game.openAchievements()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}questList(){const e=this.game.progress.questRows(),i=u("div",{class:"quest-list"});if(!e.length)return i.append(u("div",{class:"hint"},"오늘의 의뢰를 준비 중이에요.")),i;for(const n of e){const s=u("button",{class:`mini quest-claim ${n.done&&!n.claimed?"on":""}`,type:"button"},n.claimed?"완료":n.done?"보상 받기":`${n.progress}/${n.need}`);(n.claimed||!n.done)&&(s.disabled=!0),s.addEventListener("click",()=>this.game.claimQuest(n.id)),i.append(u("div",{class:`quest-row ${n.done?"done":""} ${n.claimed?"claimed":""}`},u("span",{class:"qico"},n.icon),u("div",{class:"qmain"},u("div",{class:"nm"},n.label),_(this,me,vn).call(this,n.pct),u("div",{class:"meta"},`🪙 ${n.reward.coin}${n.reward.star?` · ⭐ ${n.reward.star}`:""} · ${n.progress}/${n.need}`)),s))}return i}quests(){const t=this.game.progress,e=t.questRows(),i=e.filter(n=>n.done&&!n.claimed).length;return{title:"📋 오늘의 의뢰",subtitle:`Day ${t.quests.day} · ${e.length}건${i?` · 받을 보상 ${i}건`:""}`,body:u("div",{},u("div",{class:"hint"},"Day 가 바뀌면 새 의뢰 두 건이 자동으로 생겨요. 달성하면 코인과 별조각을 받아요."),this.questList(),u("div",{class:"section-label"},"보유"),u("div",{class:"hint"},`🪙 섬 코인 ${t.coins}`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}vending(){const t=this.game.progress,e=_(this,me,oh).call(this,[{id:"sell",label:"팔기"},{id:"buy",label:"사기"}],this.shopTab,n=>{this.shopTab=n,this.game.openVending()}),i=u("div",{},u("div",{class:"wallet"},u("span",{},"🪙"),u("strong",{},String(t.coins)),u("span",{class:"hint"},"섬 코인")),e);if(this.shopTab==="buy"){const n=nS(t),s=l=>{const c=u("button",{class:`mini buy ${l.affordable?"on":""}`,type:"button"},`🪙 ${l.price}`);return l.affordable||(c.disabled=!0),c.addEventListener("click",()=>this.game.buyGood(l.id)),u("div",{class:"shop-row"},u("span",{class:"gico"},l.icon),u("div",{class:"gmain"},u("div",{class:"nm"},`${l.name}${l.owned?` · ${l.owned}개 보유`:""}`),u("div",{class:"meta"},l.desc)),c)},r=n.filter(l=>l.kind!=="seed"),o=n.filter(l=>l.kind==="seed");i.append(u("div",{class:"section-label"},"사기")),i.append(u("div",{class:"shop-list"},...r.map(s))),i.append(u("div",{class:"section-label"},"🌱 씨앗 (북서 텃밭에 심어요)")),i.append(u("div",{class:"shop-list"},...o.map(s))),t.supply("ade")>0&&i.append(u("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.drinkAde()},`🥤 반짝 에이드 마시기  ·  기력 +${nh}  (${t.supply("ade")}개)`)),i.append(u("div",{class:"hint"},"츄르는 고양이 돌보기에서, 별빛 미끼는 낚시할 때 쓰고, 씨앗은 텃밭에서 심어요."))}else{const n=tS(t),s=u("div",{class:"shop-list"});n.length||s.append(u("div",{class:"hint"},"팔 수 있는 재료나 물고기가 없어요."));for(const r of n){const o=u("button",{class:"mini",type:"button"},"1개");o.addEventListener("click",()=>this.game.sellItem(r.id,1));const l=u("button",{class:"mini on",type:"button"},"전부");l.addEventListener("click",()=>this.game.sellItem(r.id,"all")),s.append(u("div",{class:"shop-row"},u("span",{class:"gico"},_n(r.id)),u("div",{class:"gmain"},u("div",{class:"nm"},`${xn(r.id)} × ${r.n}`),u("div",{class:"meta"},`개당 🪙 ${r.unit}${r.source==="fish"?" · 낚시 바구니":r.source==="crop"?" · 텃밭 바구니":""}`)),u("div",{class:"shop-btns"},o,l)))}i.append(u("div",{class:"section-label"},"팔기"),s,u("div",{class:"hint"},"전부 팔면 그 재료·물고기·작물을 한 번에 정리해요."))}return{title:"🥤 메타몽 자판기",subtitle:"팔고, 사고 — 섬 코인이 오가는 곳",body:i,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cooking(){const t=this.game.progress,e=u("div",{class:"recipe-list"});for(const i of to){const n=pr[i],s=t.canCook(i),r=Jf(n).map(l=>{const c=l.source==="fish"?t.fishCount(l.id):l.source==="crop"?t.cropCount(l.id):t.inventory.count(l.id);return u("span",{class:`lchip ${c>=l.n?"ok":"lack"}`},`${_n(l.id)} ${xn(l.id)} ${c}/${l.n}`)}),o=u("button",{class:`mini cook ${s.ok?"on":""}`,type:"button"},"요리");s.ok||(o.disabled=!0),o.addEventListener("click",()=>this.game.cook(i)),e.append(u("div",{class:"recipe-row"},u("span",{class:"rico"},n.icon),u("div",{class:"rmain"},u("div",{class:"nm"},`${n.name} · 기력 +${n.stamina}${n.buff?" + 버프":""}`),u("div",{class:"chips"},...r),u("div",{class:"meta"},n.desc)),u("div",{class:"shop-btns"},o)))}return{title:"🍳 공방 요리",subtitle:`지금 기력 ${Math.round(t.stamina)} / 100`,body:u("div",{},u("div",{class:"hint"},"재료와 물고기를 넣고 요리하면 기력이 회복돼요. 황금 정식은 60초 동안 채집이 가벼워져요."),e,u("div",{class:"section-label"},"보유 재료"),u("div",{class:"chips"},...["log","stone","petal","star","berry"].map(i=>Oi(`${_n(i)} ${xn(i)} ${t.inventory.count(i)}`)),...xs.filter(i=>t.fishCount(i)>0).map(i=>Oi(`${_n(i)} ${xn(i)} ${t.fishCount(i)}`)),...vs.filter(i=>t.cropCount(i)>0).map(i=>Oi(`${Jt[i].icon} ${Jt[i].name} ${t.cropCount(i)}`)))),actions:[{label:"🔨 도구 강화",kind:"ghost",onClick:()=>this.game.openUpgrade()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}upgrade(){const t=this.game.progress,e=u("div",{class:"tool-list"});for(const i of js){const n=t.toolInfo(i),s=t.canUpgrade(i),r=Object.entries(n.cost).map(([c,h])=>{const d=c==="coin"?t.coins:t.inventory.count(c),p=c==="coin"?`🪙 ${h}`:`${_n(c)} ${xn(c)} ${h}`;return Oi(`${p} (${d})`,d>=h?"ok":"lack")}),o=u("button",{class:`mini up ${s.ok?"on":""}`,type:"button"},n.maxed?"최대":`Lv.${n.level+1} 강화`);s.ok||(o.disabled=!0),o.addEventListener("click",()=>this.game.upgradeTool(i));const l=n.level>=n.max?"더 강화할 수 없어요":i==="water"?`한 번에 ${["십자 5칸","3×3 9칸"][n.level-1]}에 물주기`:`기력 소모 ×${n.def.stamina[n.level].toFixed(2)}${n.def.hits[n.level]?" · 타격 +1":""}`;e.append(u("div",{class:"tool-row"},u("span",{class:"tico"},n.def.icon),u("div",{class:"tmain"},u("div",{class:"nm"},`${n.def.name} · Lv.${n.level}${n.maxed?" (최대)":""}`),u("div",{class:"chips"},...r),u("div",{class:"meta"},l)),u("div",{class:"shop-btns"},o)))}return{title:"🪓 도구 강화",subtitle:"재료와 코인을 넣으면 한 번에 더 많이 캐요",body:u("div",{},u("div",{class:"hint"},"도끼는 나무, 곡괭이는 바위에 적용돼요. 물뿌리개는 레벨이 오르면 한 번에 더 넓게 물을 줘요."),e,u("div",{class:"section-label"},"보유"),u("div",{class:"hint"},`🪙 ${t.coins} · 🪵 ${t.inventory.count("log")} · 🪨 ${t.inventory.count("stone")} · ⭐ ${t.inventory.count("star")}`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cat(t){const e=this.game.progress,i=oi.find(f=>f.id===t)||oi[0],n=e.catRow(i.id),s=this.game.cats.find(f=>f.id===i.id),r=n.level,o=u("div",{class:"cat-portrait big tap"});_(this,me,lh).call(this,o,i.set,5),o.addEventListener("click",()=>this.game.petCat(i.id));const l=u("button",{class:`btn soft wide ${s&&s.cd.pet>0?"wait":""}`,type:"button"},s&&s.cd.pet>0?`🤲 쓰다듬기 · ${s.cd.pet.toFixed(1)}초 뒤에 또`:`🤲 쓰다듬기  ·  호감도 +${ri.pet.aff}`);s&&s.cd.pet>0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.petCat(i.id));const c=u("div",{class:"snack-row"});for(const f of ri.snackOrder){const g=ri.snacks[f],y=f==="churu"?e.supply("churu"):f==="berry"?e.inventory.count("berry"):e.fishCount("anchovy"),m=u("button",{class:`mini snack ${y>0&&s&&s.cd.snack<=0?"on":""}`,type:"button"},`${g.icon} ${g.name} (${y})`);(y<=0||!s||s.cd.snack>0)&&(m.disabled=!0),m.addEventListener("click",()=>this.game.feedCat(i.id,f)),c.append(m)}let h;if(n.canFollow){const f=u("button",{class:`switch wide ${n.follow?"on":""}`,type:"button","aria-label":"따라오기"},n.follow?"따라오는 중":"따라오기");f.addEventListener("click",()=>this.game.toggleFollow(i.id)),h=u("div",{class:"row"},u("div",{},u("div",{class:"label"},"따라오기"),u("div",{class:"hint"},"섬을 걸으면 뒤따라와요")),f)}else h=u("div",{class:"hint"},`따라오기는 호감도 Lv.${ri.followLevel}부터 열려요 (지금 Lv.${r}).`);const d=Object.entries(ri.gifts).map(([f,g])=>{const y=n.gifts.includes(Number(f)),m=Object.entries(g).map(([v,b])=>`${_n(v)} ${xn(v)} ${b}`).join(" · ");return u("div",{class:`gift-row ${y?"got":""}`},u("span",{},`Lv.${f}`),u("span",{class:"meta"},m),u("span",{class:"mini"},y?"받음":"대기"))}),p=u("div",{},u("div",{class:"cat-head"},o,u("div",{class:"cat-info"},u("div",{class:"nm"},`${i.name} · Lv.${n.level}`),_(this,me,vn).call(this,n.pct,"care"),u("div",{class:"meta"},n.nextAt?`호감도 ${n.aff} / ${n.nextAt} (다음 Lv.${n.level+1}까지 ${n.toNext})`:`호감도 ${n.aff} · 최고 레벨`),u("div",{class:"say"},ri.dialogue[i.id][r-1]))),u("div",{class:"section-label"},"돌보기"),l,u("div",{class:"section-label"},"간식"),c,u("div",{class:"section-label"},"함께 걷기"),h,u("div",{class:"section-label"},"보답 선물"),u("div",{class:"gift-list"},...d));return{title:`🐱 ${i.name} 돌보기`,subtitle:n.follow?"지금 따라오고 있어요":"쓰다듬고 간식을 주면 마음이 열려요",body:p,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}me=new WeakSet,oh=function(t,e,i){const n=u("div",{class:"tabbar"});for(const s of t){const r=u("button",{class:`tab ${s.id===e?"on":""}`,type:"button","data-tab":s.id},s.label);r.addEventListener("click",()=>i(s.id)),n.append(r)}return n},vn=function(t,e=""){return u("div",{class:`progress-line ${e}`},u("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},lh=function(t,e,i){const n=this.game.atlases.get(e);n&&(t.style.backgroundImage=`url("${new URL(`sprites/${e}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n.cols*100}% ${n.rows*100}%`,t.style.backgroundPosition=`${0/Math.max(1,n.cols-1)*100}% ${(i-1)/Math.max(1,n.rows-1)*100}%`)},qp=function(){const t=this.game.state.discovered,e=u("div",{class:"codex-grid"});for(const n of Vi){const s=t.includes(n.id),r=u("div",{class:`codex-thumb ${s?"":"locked"}`},s?"":"· ? ·");s&&n.thumb&&this.game.paintDittoThumb(r,n.thumb),e.append(u("div",{class:`codex-card ${s?"":"unknown"}`},r,u("div",{class:"name"},s?n.name:"아직 못 찾음"),u("div",{class:"meta"},s?n.flavor:"섬 어딘가에서 돌멩이인 척하고 있어요")))}const i=Math.round(t.length/Vi.length*100);return u("div",{},_(this,me,vn).call(this,i),u("div",{class:"hint"},`발견 ${t.length} / ${Vi.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),u("div",{class:"section-label"},"이번 섬의 도감"),e)},Yp=function(){const t=this.game.progress,e=u("div",{class:"fish-grid"});for(const n of xs){const s=Pi[n],r=t.fishCount(n),o=r>0;e.append(u("div",{class:`fish-card ${o?"":"locked"} ${s.rare?"rare":""}`},u("span",{class:"fico"},o?s.icon:"❔"),u("div",{class:"fmain"},u("div",{class:"nm"},o?s.name:"아직 못 봄"),u("div",{class:"meta"},o?s.desc:"부두에서 낚시하면 만날 수 있어요")),u("div",{class:"fright"},o?Oi(`${r}마리`,"ok"):Oi("미등록"))))}const i=xs.filter(n=>t.fishCount(n)>0).length;return u("div",{},_(this,me,vn).call(this,Math.round(i/xs.length*100)),u("div",{class:"hint"},`등록 ${i} / ${xs.length}종 · 낚시 ${t.fishing.casts}회 · 성공 ${t.fishing.catches}회 · 놓침 ${t.fishing.misses}회`),u("div",{class:"section-label"},"어종"),e,u("div",{class:"hint"},"별빛 미끼를 쓰면 희귀 어종(별빛해파리·황금잉어) 확률이 올라가요 🪱"))},Kp=function(){const t=this.game.progress,e=u("div",{class:"recipe-list"});let i=0;for(const n of to){const s=pr[n],r=t.cookedCount(n);r>0&&(i+=1);const o=Jf(s).map(l=>`${_n(l.id)} ${xn(l.id)} ${l.n}`).join(" · ");e.append(u("div",{class:`recipe-card ${r>0?"":"locked"}`},u("span",{class:"rico"},s.icon),u("div",{class:"rmain"},u("div",{class:"nm"},s.name),u("div",{class:"meta"},o),u("div",{class:"meta"},s.stamina>=100?`기력 ${s.stamina} 회복 + ${Go.seconds}초 버프`:`기력 +${s.stamina}`)),u("div",{class:"fright"},r>0?Oi(`${r}번`,"ok"):Oi("미등록"))))}return u("div",{},_(this,me,vn).call(this,Math.round(i/to.length*100)),u("div",{class:"hint"},`만든 요리 ${i} / ${to.length}종 · 공방을 복구하면 요리할 수 있어요`),u("div",{class:"section-label"},"레시피"),e)},Zp=function(){const t=this.game.progress,e=u("div",{class:"recipe-list"});let i=0;for(const n of vs){const s=Jt[n],r=t.cropCount(n);t.count("crop"),r>0&&(i+=1);const o=Wi[s.seedId];e.append(u("div",{class:`recipe-card ${r>0?"":"locked"}`},u("span",{class:"rico"},r>0?s.icon:"❔"),u("div",{class:"rmain"},u("div",{class:"nm"},s.name),u("div",{class:"meta"},`${o.icon} ${o.name} ${o.price}코인 · ${Math.round(s.grow)}초 · ${s.yield[0]}~${s.yield[1]}개`),u("div",{class:"meta"},r>0?s.desc:"텃밭에서 기르면 여기에 기록돼요")),u("div",{class:"fright"},r>0?Oi(`바구니 ${r}`,"ok"):Oi("미등록"))))}return u("div",{},_(this,me,vn).call(this,Math.round(i/vs.length*100)),u("div",{class:"hint"},`바구니에 담긴 작물 ${i} / ${vs.length}종 · 지금까지 수확 ${t.count("crop")}번 · 심은 씨앗 ${t.count("plant")}번`),u("div",{class:"section-label"},"작물"),e,u("div",{class:"hint"},`수확물은 가방 8칸을 차지하지 않고 텃밭 바구니에 담겨요. 자판기 [팔기] 에서 개당 ${vs.map(n=>`${Jt[n].name} ${Jt[n].price}`).join(" · ")} 코인에 팔려요.`))},Jp=function(){const t=this.game.progress,e=u("div",{class:"cat-grid"});for(const i of oi){const n=t.catRow(i.id),s=u("div",{class:"cat-portrait"});_(this,me,lh).call(this,s,i.set,5),e.append(u("div",{class:"cat-card"},s,u("div",{class:"cmain"},u("div",{class:"nm"},`${i.name} · Lv.${n.level}`),_(this,me,vn).call(this,n.pct,"care"),u("div",{class:"meta"},n.nextAt?`호감도 ${n.aff} / ${n.nextAt}`:`호감도 ${n.aff} · 최고 레벨`),u("div",{class:"meta"},ri.dialogue[i.id][n.level-1]))))}return u("div",{},u("div",{class:"hint"},"쓰다듬고 간식을 주면 호감도가 올라요. Lv.3부터 [따라오기] 를 켤 수 있어요."),e)};const $i=new Map;function sl(a){const t=document.createElement("canvas");t.width=t.height=a;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function al(a,t=!0){const e=new ln(a);return e.colorSpace=be,e.magFilter=t?ue:ti,e.minFilter=t?ue:ti,e.generateMipmaps=!1,e.needsUpdate=!0,e}function Ho(a=!1){const t=`soil:${a?"wet":"dry"}`;if($i.has(t))return $i.get(t);const{c:e,ctx:i}=sl(24),n=a?["#7a5433","#6b482a","#5d3f24"]:["#a87a4e","#9a6d43","#8a5f39"],s=a?"#8a6039":"#bb8d5c",r=a?"#54381f":"#7a5331";i.fillStyle=n[0],i.fillRect(0,0,24,24);for(let h=2;h<24;h+=6)i.fillStyle=r,i.fillRect(0,h,24,2),i.fillStyle=n[2],i.fillRect(0,h+2,24,1),i.fillStyle=n[1],i.fillRect(0,h-1,24,1);let o=12345;const l=()=>(o=o*1103515245+12345&2147483647,o/2147483647);for(let h=0;h<34;h++){const d=Math.floor(l()*24),p=Math.floor(l()*24);i.fillStyle=l()<.55?s:r,i.fillRect(d,p,l()<.3?2:1,1)}i.fillStyle=a?"rgba(40,24,12,0.22)":"rgba(220,180,130,0.18)",i.fillRect(0,0,24,1),i.fillRect(0,23,24,1),i.fillRect(0,0,1,24),i.fillRect(23,0,1,24);const c=al(e);return $i.set(t,c),c}function ic(a,t,e,i,n,s="#4f8f45",r="#69b45a",o="#8fd47a"){a.fillStyle=s,a.fillRect(t,e,1,n),a.fillStyle=r,a.fillRect(t-i,e+1,i,2),a.fillRect(t+1,e+2,i,2),a.fillStyle=o,a.fillRect(t-i-1,e,2,2),a.fillRect(t+1+i-1,e+1,2,2)}function aS(a){a.fillStyle="#6d4a2c",a.fillRect(8,19,8,3),a.fillStyle="#8a6039",a.fillRect(9,18,6,1),a.fillStyle="#f4e0a8",a.fillRect(11,17,1,1),a.fillRect(13,18,1,1)}function Vo(a,t){const e=`crop:${a}:${t}`;if($i.has(e))return $i.get(e);const{c:i,ctx:n}=sl(24);if(t<=0)aS(n);else if(t===1)ic(n,11,13,2,7),n.fillStyle="#8fd47a",n.fillRect(11,11,2,2);else if(t===2)ic(n,11,9,3,10),n.fillStyle="#69b45a",n.fillRect(6,11,3,3),n.fillRect(14,12,3,3),a==="strawberry"?(n.fillStyle="#fff6fb",n.fillRect(8,8,2,2),n.fillRect(15,10,2,2),n.fillStyle="#ffe0ef",n.fillRect(9,9,1,1)):a==="radish"?(n.fillStyle="#f2f7e8",n.fillRect(13,17,3,3),n.fillStyle="#dbe6c9",n.fillRect(13,19,3,1)):a==="rice"?(n.fillStyle="#4f8f45",n.fillRect(9,15,1,6),n.fillRect(13,14,1,7),n.fillStyle="#8fd47a",n.fillRect(7,12,1,6),n.fillRect(15,13,1,6),n.fillStyle="#c9e39a",n.fillRect(8,10,1,4),n.fillRect(14,11,1,4)):(n.fillStyle="#ffd77a",n.fillRect(8,15,3,3),n.fillStyle="#f0ab3c",n.fillRect(8,17,3,1));else if(a==="strawberry"){ic(n,11,6,4,8);const r=(o,l)=>{n.fillStyle="#e8476a",n.fillRect(o,l,3,4),n.fillStyle="#ff6f8f",n.fillRect(o,l+1,2,2),n.fillStyle="#ffd0dc",n.fillRect(o,l+1,1,1),n.fillStyle="#4f8f45",n.fillRect(o+1,l-1,1,1)};r(6,13),r(11,16),r(15,12)}else if(a==="radish")n.fillStyle="#4f8f45",n.fillRect(11,4,2,13),n.fillStyle="#69b45a",n.fillRect(5,7,7,4),n.fillRect(13,9,7,4),n.fillStyle="#8fd47a",n.fillRect(4,5,5,3),n.fillRect(15,7,5,3),n.fillRect(8,2,4,4),n.fillRect(10,14,5,3),n.fillStyle="#c6ecb0",n.fillRect(6,8,2,1),n.fillRect(16,10,2,1),n.fillStyle="#bcd3a2",n.fillRect(10,17,4,3),n.fillStyle="#dfecc8",n.fillRect(11,17,2,2);else if(a==="rice"){n.fillStyle="#3f7a3c",n.fillRect(8,14,1,8),n.fillRect(12,13,1,9),n.fillRect(16,15,1,7),n.fillStyle="#5f9c4a",n.fillRect(10,16,1,6),n.fillRect(14,17,1,5);const r=(o,l)=>{n.fillStyle="#e6c159",n.fillRect(o,l,3,4),n.fillStyle="#f4dd93",n.fillRect(o,l+1,2,2),n.fillStyle="#b98f34",n.fillRect(o+1,l+4,1,3)};r(6,7),r(10,5),r(14,8)}else n.fillStyle="#c98a2e",n.fillRect(6,12,12,8),n.fillRect(7,10,10,2),n.fillRect(8,20,8,1),n.fillStyle="#f0ab3c",n.fillRect(7,12,10,6),n.fillStyle="#ffc95e",n.fillRect(8,13,3,3),n.fillRect(13,14,2,3),n.fillStyle="#a86c1f",n.fillRect(9,12,1,7),n.fillRect(14,12,1,7),n.fillStyle="#6d4a2c",n.fillRect(11,8,2,3),n.fillStyle="#8fd47a",n.fillRect(13,7,3,2);const s=al(i);return $i.set(e,s),s}function Qp(){const a="droplet";if($i.has(a))return $i.get(a);const{c:t,ctx:e}=sl(16);e.fillStyle="#bfeaff",e.fillRect(7,3,2,8),e.fillRect(6,5,4,5),e.fillStyle="#ffffff",e.fillRect(7,5,1,2);const i=al(t);return $i.set(a,i),i}function jp(){const a="sparkle";if($i.has(a))return $i.get(a);const{c:t,ctx:e}=sl(16),i=(s,r,o,l)=>{e.fillStyle=l,e.fillRect(s,r-o,1,o*2+1),e.fillRect(s-o,r,o*2+1,1),e.fillRect(s-1,r-1,3,3)};i(8,8,5,"rgba(255,245,190,0.95)"),i(8,8,2,"rgba(255,255,255,1)"),i(3,4,1,"rgba(255,240,170,0.8)"),i(13,11,1,"rgba(255,240,170,0.75)");const n=al(t);return $i.set(a,n),n}function ma(a){if(!a||!a.crop)return-1;if(a.remain<=0)return 3;const t=1-a.remain/Math.max(1,a.total);return t<.3?0:t<.62?1:2}var Mn,tm,ta;class rS{constructor({terrain:t,progress:e,fx:i,audio:n,hooks:s={}}){Re(this,Mn);this.terrain=t,this.progress=e,this.fx=i,this.audio=n,this.hooks=s,this.group=new Ge,this.group.name="Farming",this.plots=[],this.time=0,_(this,Mn,tm).call(this)}plotAt(t,e,i=1.4){let n=null,s=i;for(const r of this.plots){const o=Math.hypot(r.x-t,r.z-e);o<s&&(n=r,s=o)}return n}nearest(t,e=2.5){return this.plotAt(t.x,t.z,e)}plotByIndex(t){return this.plots[t]||null}waterTargets(t,e=1){const i=Ot.cols*Ot.rows,n=Math.max(1,Math.min(3,Math.floor(e)||1));if(n<=1)return[t.index];if(n===2){const s=[t.index];for(const[r,o]of[[0,-1],[0,1],[-1,0],[1,0]]){const l=t.row+r,c=t.col+o;l>=0&&l<Ot.rows&&c>=0&&c<Ot.cols&&s.push(l*Ot.cols+c)}return s.filter(r=>r<i)}return Array.from({length:i},(s,r)=>r)}syncAll(){for(const t of this.plots)_(this,Mn,ta).call(this,t,!0)}plant(t,e){const i=this.progress.plantSeed(t.index,e);if(!i.ok)return i;const n=i.crop;return _(this,Mn,ta).call(this,t,!0),this.fx.burst(t.x,t.y+.25,t.z,"#a8804f",10,{spread:.9,up:1.5}),this.audio.sfxPickup?.(),this.hooks.toast?.(`🌱 ${n.name} 씨앗을 심었어요 — ${Math.round(n.grow)}초 뒤에 익어요`,2400),this.hooks.onPlant?.(n,t),this.hooks.save?.(),{ok:!0,crop:n}}water(t,e=1){const i=this.waterTargets(t,e).map(r=>this.plotByIndex(r)).filter(r=>{const o=this.progress.plot(r.index);return o&&o.remain>0&&o.watered<Me.maxWater});if(!i.length)return{ok:!1,reason:this.waterTargets(t,e).some(o=>!!this.progress.plot(o))?"max":"empty"};const n=Me.waterStamina*i.length;if(this.progress.stamina<n)return{ok:!1,reason:"stamina",cost:n,need:n};let s=0;for(const r of i)this.progress.waterPlot(r.index).ok&&(s+=1,this.fx.burst(r.x,r.y+.55,r.z,"#bfeaff",9,{spread:.55,up:1.1}),_(this,Mn,ta).call(this,r,!0));return s?(this.progress.useStamina(n),this.audio.sfxSplash?.(.4),this.hooks.onWater?.(s,t),this.hooks.save?.(),{ok:!0,watered:s,cost:n}):{ok:!1,reason:"empty"}}harvest(t){const e=this.progress.plot(t.index);if(!e)return{ok:!1,reason:"empty"};if(e.remain>0)return{ok:!1,reason:"growing"};const i=this.progress.harvestPlot(t.index);if(!i.ok)return i;const n=i.crop;return this.audio.sfxPickup?.(),this.fx.burst(t.x,t.y+.5,t.z,n.tint,16,{spread:1.1,up:1.8,size:1.1}),this.fx.float(`${n.icon} ${n.name} +${i.n}`,t.x,t.y+1,t.z,"#7a5c6d"),this.hooks.toast?.(`🧺 ${n.name} ${i.n}개 수확! 텃밭 바구니에 담았어요 (${i.total}개)`,2600),_(this,Mn,ta).call(this,t,!0),this.hooks.onHarvest?.(n,i.n,t),this.hooks.save?.(),{ok:!0,crop:n,n:i.n,total:i.total}}update(t,e,i=null){this.time+=t,this.camera=i;const n=e>0?this.progress.tickFarm(e):[];for(const s of this.plots){const r=this.progress.plot(s.index);if(r&&r.wet>0&&(s.wet=!0),_(this,Mn,ta).call(this,s),s.plant.visible){const o=this.camera;o&&(s.plant.rotation.y=Math.atan2(o.position.x-s.x,o.position.z-s.z))}if(s.sparkle.visible){const o=.7+Math.sin(this.time*2.6+s.index*.9)*.3;s.sparkle.material.opacity=o;const l=.58+Math.sin(this.time*2.2+s.index)*.1;s.sparkle.scale.set(l,l,1),s.plant.position.y=s.y+.02+Math.sin(this.time*2+s.index)*.015}if(s.droplet.visible||r&&r.wet>0){s.droplet.visible=!0;const o=r?Math.min(1,r.wet/3):0;s.droplet.material.opacity=.15+.6*o,s.droplet.position.y=s.y+.34+Math.sin(this.time*3+s.index)*.03}else s.droplet.visible=!1}if(n.length){for(const s of n){const r=this.plots[s];if(!r)continue;const o=Jt[this.progress.plot(s).crop];this.fx.burst(r.x,r.y+.45,r.z,o.tint,8,{spread:.7,up:1.3})}this.hooks.onRipe?.(n)}}}Mn=new WeakSet,tm=function(){const t=Ho(!1),e=Ho(!0);this.soilTex={dry:t,wet:e};for(let i=0;i<Ot.rows;i++)for(let n=0;n<Ot.cols;n++){const s=+(Ot.x+(n-(Ot.cols-1)/2)*Ot.pitch).toFixed(3),r=+(Ot.z+(i-(Ot.rows-1)/2)*Ot.pitch).toFixed(3),o=this.terrain.groundY(s,r),l=new Ei(Ot.tile,Ot.tile,1,1);l.rotateX(-Math.PI/2);const c=Ri({map:t,color:"#ffffff"}),h=new qt(l,c);h.position.set(s,o+.035,r),h.receiveShadow=!0,h.name=`FarmPlot_${i}-${n}`,this.group.add(h);const d=new Xh(Ot.tile*.5,Ot.tile*.5+.09,4,1);d.rotateX(-Math.PI/2),d.rotateY(Math.PI/4);const p=new qt(d,new Ke({color:"#b08155",transparent:!0,opacity:.5,depthWrite:!1}));p.position.set(s,o+.032,r),this.group.add(p);const f=new Ei(1,1);f.translate(0,.5,0);const g=new qt(f,new Ke({map:Vo("strawberry",0),alphaTest:.5,side:Bi,toneMapped:!1,fog:!0}));g.position.set(s,o+.02,r),g.visible=!1,g.renderOrder=3,this.group.add(g);const y=new li(new je({map:jp(),color:"#fff6c8",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:ns}));y.scale.set(.62,.62,1),y.position.set(s+.28,o+1.05,r-.2),y.visible=!1,y.renderOrder=4,this.group.add(y);const m=new li(new je({map:Qp(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));m.scale.set(.28,.28,1),m.position.set(s+Ot.tile*.24,o+.42,r+Ot.tile*.16),m.visible=!1,this.group.add(m);const b={index:i*Ot.cols+n,row:i,col:n,x:s,z:r,y:o,base:h,edge:p,plant:g,sparkle:y,droplet:m,stage:-1,wet:!1,crop:null};h.userData.plot=b,this.plots.push(b)}this.syncAll()},ta=function(t,e=!1){const i=this.progress.plot(t.index),n=i?ma(i):-1,s=i?i.crop:null,r=!!(i&&i.wet>0),o=e||n!==t.stage||s!==t.crop||r!==t.wet;if(t.stage=n,t.crop=s,t.wet=r,t.base.material.map=r?this.soilTex.wet:this.soilTex.dry,t.base.material.color.set(r?"#e4eef2":"#ffffff"),t.base.material.needsUpdate=!0,!o)return;if(n<0){t.plant.visible=!1,t.sparkle.visible=!1;return}t.plant.visible=!0,t.plant.material.map=Vo(s,n),t.plant.material.needsUpdate=!0;const l=n===0?.86:n===1?1.06:n===2?1.28:1.42;t.plant.scale.set(l,l,1),t.plant.position.y=t.y+.02,t.sparkle.visible=n===3};const Qf=(a,t="")=>u("span",{class:`lchip ${t}`},a);var Hn,ch,em,im;class oS{constructor(t){Re(this,Hn);this.game=t}farm(){const t=this.game.progress,e=t.toolInfo("water"),i=t.farmPlots.filter(Boolean).length,n=t.farmPlots.filter(l=>l&&l.remain<=0).length,s=u("div",{class:"chips"},...ih.map(l=>{const c=Wi[l],h=t.supply(l);return Qf(`${c.icon} ${c.name} ${h}`,h>0?"ok":"lack")})),r=u("div",{class:"chips"},...vs.map(l=>Qf(`${Jt[l].icon} ${Jt[l].name} ${t.cropCount(l)}`,t.cropCount(l)>0?"warm":""))),o=u("div",{class:"farm-grid"});for(let l=0;l<Ot.cols*Ot.rows;l++){const c=_(this,Hn,em).call(this,l),h=u("div",{class:`farm-cell ${c.state}`,"data-plot":String(l)},u("div",{class:"fc-head"},u("span",{class:"fc-ico"},c.crop?c.crop.icon:"·"),u("span",{class:"fc-name"},c.crop?c.crop.name:"빈 밭")),u("div",{class:"fc-stage"},c.label),c.state==="empty"?null:_(this,Hn,ch).call(this,c.pct,c.state==="ripe"?"life":""),_(this,Hn,im).call(this,l,c));o.append(h)}return{title:"🌱 텃밭",subtitle:`3×3 경작지 · ${i}칸 심음${n?` · ${n}칸 수확 가능`:""}`,body:u("div",{},u("div",{class:"hint"},"씨앗을 심하고 물을 주면 남은 시간이 절반으로 줄어요. 다 자란 작물은 텃밭 바구니에 담기고, 자판기 [팔기] 에서 그대로 팔 수 있어요."),u("div",{class:"section-label"},"내 씨앗"),s,u("button",{class:"btn soft wide",type:"button",onclick:()=>{this.game.life.shopTab="buy",this.game.openVending()}},"🥤 자판기에서 씨앗 사기"),u("div",{class:"section-label"},"🧺 수확 바구니 (가방과 따로 담겨요)"),r,u("div",{class:"section-label"},"경작지"),o,u("div",{class:"section-label"},"물뿌리개"),u("div",{class:"row"},u("div",{},u("div",{class:"label"},`${_s.water.icon} 물뿌리개 Lv.${e.level}`),u("div",{class:"hint"},`한 번에 ${Me.canArea[e.level-1]} · 칸당 기력 ${Me.waterStamina}`)),u("button",{class:"mini",type:"button",onclick:()=>this.game.openUpgrade()},e.maxed?"최대":"강화")),u("div",{class:"hint"},ap.find(l=>l.id==="farm")?"북서쪽 모서리, 울타리 안이 텃밭이에요.":"")),actions:[{label:"🏆 업적 보기",kind:"ghost",onClick:()=>this.game.openAchievements()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}seedPicker(t){const e=this.game.progress,i=u("div",{class:"seed-list"});for(const n of ih){const s=Wi[n],r=Jt[s.crop],o=e.supply(n),l=u("button",{class:`mini farm-btn ${o>0?"on":""}`,type:"button"},o>0?"심기":"없음");o<=0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.plantPlot(t,s.crop)),i.append(u("div",{class:"seed-row"},u("span",{class:"gico"},r.icon),u("div",{class:"gmain"},u("div",{class:"nm"},`${s.name} · ${o}개`),u("div",{class:"meta"},`${Math.round(r.grow)}초 → ${r.name} ${r.yield[0]}~${r.yield[1]}개 · 개당 🪙 ${r.price}`)),l))}return{title:`🌱 ${t+1}번 밭에 심기`,subtitle:"어떤 씨앗을 심을까요",body:u("div",{},u("div",{class:"hint"},"씨앗은 자판기 [사기] 탭에서 삽니다. 우체통의 텃밭 편지에 딸기 씨앗 2개가 동봉되어 있어요."),i,u("div",{class:"hint"},`지금 기력 ${Math.round(e.stamina)} / 100 · 물주기 한 칸당 ${Me.waterStamina}`)),actions:[{label:"← 텃밭",kind:"ghost",onClick:()=>this.game.openFarm()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}achievements(){const e=this.game.progress.achRows(),i=e.filter(r=>r.done).length,n=e.filter(r=>r.done&&!r.claimed).length,s=u("div",{});for(const r of S1){const o=e.filter(c=>c.group===r.id);if(!o.length)continue;s.append(u("div",{class:"section-label"},`${r.icon} ${r.name}`));const l=u("div",{class:"ach-list"});for(const c of o){const h=u("button",{class:`mini ach-claim ${c.done&&!c.claimed?"on":""}`,type:"button"},c.claimed?"받음":c.done?"보상 받기":`${c.value}/${c.need}`);(c.claimed||!c.done)&&(h.disabled=!0),h.addEventListener("click",()=>this.game.claimAchievement(c.id)),l.append(u("div",{class:`ach-row ${c.done?"done":""} ${c.claimed?"claimed":""}`},u("span",{class:"aico"},c.done?c.icon:"🔒"),u("div",{class:"amain"},u("div",{class:"nm"},c.name),_(this,Hn,ch).call(this,c.pct,c.done?"life":""),u("div",{class:"meta"},`${c.desc} · 🪙 ${c.reward.coin}${c.reward.star?` · ⭐ ${c.reward.star}`:""}`)),h))}s.append(l)}return{title:"🏆 섬 업적",subtitle:`${e.length}종 중 ${i}종 달성${n?` · 받을 보상 ${n}건`:""}`,body:s,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}Hn=new WeakSet,ch=function(t,e=""){return u("div",{class:`progress-line ${e}`},u("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},em=function(t){const i=this.game.progress.plot(t);if(!i)return{state:"empty",label:"씨앗을 심어 보세요",stage:-1,pct:0,crop:null,st:null};const n=Jt[i.crop],s=ma(i),r=Math.round((1-i.remain/Math.max(1,i.total))*100);return{state:i.remain>0?"grow":"ripe",label:i.remain>0?`${i1[s+1]} · ${Math.ceil(i.remain)}초`:"수확 가능",stage:s,pct:r,crop:n,st:i}},im=function(t,e){if(e.state==="empty"){const s=u("button",{class:"mini farm-btn",type:"button"},"🌱 심기");return s.addEventListener("click",()=>this.game.openSeedPicker(t)),s}if(e.state==="ripe"){const s=u("button",{class:"mini farm-btn on",type:"button"},"🧺 수확");return s.addEventListener("click",()=>this.game.harvestPlot(t)),s}const i=e.st.watered<Me.maxWater,n=u("button",{class:`mini farm-btn ${i?"water":""}`,type:"button"},i?`💧 물 ${Me.maxWater-e.st.watered}`:"💧 끝");return i||(n.disabled=!0),n.addEventListener("click",()=>this.game.waterPlot(t)),n};const ne=(a,t)=>(a+ye)/(ye*2)*t,ms=(a,t)=>a/(ye*2)*t,fe={deep:"#5fc4d8",shallow:"#8fe0e4",river:"#6fd2dd",wetSand:"#f6e2b6",sand:"#ffe6b8",grass:"#a9e08c",grassDeep:"#8ed577",forest:"rgba(88,154,92,0.58)",quarry:"rgba(203,190,168,0.6)",path:"#f2dcb2",farm:"#9a6d43",farmEdge:"#c39a68",paddy:"#7fc7c9",paddyEdge:"#a9865d",bridgeWood:"#c08a52",bridgeSite:"#c8a06a",mailbox:"#ff8fa6",player:"#ff5f92"};function jf(a){const t=document.createElement("canvas");t.width=a,t.height=a;const e=t.getContext("2d"),i=e.createImageData(a,a),n=i.data;for(let f=0;f<a;f++)for(let g=0;g<a;g++){const y=g/a*ye*2-ye,m=f/a*ye*2-ye,v=bs(op,y,m),b=rp(y,m)<-1.2;let T;v<-.35?T=b?fe.river:fe.deep:v<.06?T=b?fe.river:fe.shallow:v<.28?T=fe.wetSand:v<.52?T=fe.sand:v<.66?T=fe.grass:T=fe.grassDeep;const[w,A,R]=lS(T),x=(f*a+g)*4;n[x]=w,n[x+1]=A,n[x+2]=R,n[x+3]=255}e.putImageData(i,0,0),e.strokeStyle=fe.path,e.lineWidth=Math.max(1.4,a*.014),e.lineCap="round",e.lineJoin="round";for(const f of mp){const y=new zu(f.map(([m,v])=>new k(m,0,v)),!1,"catmullrom",.5).getSpacedPoints(30);e.beginPath(),y.forEach((m,v)=>{const b=ne(m.x,a),T=ne(m.z,a);v===0?e.moveTo(b,T):e.lineTo(b,T)}),e.stroke()}const s=ms(Ot.tile,a);e.fillStyle=fe.farmEdge;const r=ne(Ot.x-Ot.cols*Ot.pitch/2,a),o=ne(Ot.z-Ot.rows*Ot.pitch/2,a),l=ms(Ot.cols*Ot.pitch,a),c=ms(Ot.rows*Ot.pitch,a);e.fillRect(r,o,l,c),e.fillStyle=fe.farm;for(let f=0;f<Ot.rows;f++)for(let g=0;g<Ot.cols;g++){const y=ne(Ot.x+(g-(Ot.cols-1)/2)*Ot.pitch,a)-s/2,m=ne(Ot.z+(f-(Ot.rows-1)/2)*Ot.pitch,a)-s/2;e.fillRect(y,m,Math.max(1.6,s),Math.max(1.6,s))}const h=ms(Zt.tile,a),d=ne(Zt.x-Zt.cols*Zt.pitch/2,a),p=ne(Zt.z-Zt.rows*Zt.pitch/2,a);e.fillStyle=fe.paddyEdge,e.fillRect(d,p,ms(Zt.cols*Zt.pitch,a),ms(Zt.rows*Zt.pitch,a)),e.fillStyle=fe.paddy;for(let f=0;f<Zt.rows;f++)for(let g=0;g<Zt.cols;g++){const y=ne(Zt.x+(g-(Zt.cols-1)/2)*Zt.pitch,a)-h/2,m=ne(Zt.z+(f-(Zt.rows-1)/2)*Zt.pitch,a)-h/2;e.fillRect(y,m,Math.max(1.6,h),Math.max(1.6,h))}for(const f of ap)f.id==="farm"||f.id==="paddy"||f.id==="beach"||(e.fillStyle=f.id==="orchard"?"rgba(120,190,110,0.5)":f.id==="garden"?"rgba(255,183,214,0.55)":f.id==="forest"?fe.forest:fe.quarry,e.beginPath(),e.arc(ne(f.x,a),ne(f.z,a),Math.max(4,ms(f.r,a)),0,Math.PI*2),e.fill());e.strokeStyle="rgba(150,235,240,0.55)",e.lineWidth=Math.max(1.2,a*.012),e.beginPath();for(let f=-ye;f<=ye;f+=1.5){const g=ne(np(f),a);f===-ye?e.moveTo(ne(f,a),g):e.lineTo(ne(f,a),g)}e.stroke();for(const f of wi){const g=ne(f.x,a),y=ne(f.z,a),m=Math.max(4.2,a*.042);e.beginPath(),e.arc(g,y,m,0,Math.PI*2),e.fillStyle="#ffffff",e.fill(),e.lineWidth=Math.max(1,a*.011),e.strokeStyle="#b2698f",e.stroke(),e.font=`${Math.round(m*1.25)}px "Noto Color Emoji", "Apple Color Emoji", sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle="#6b5878",e.fillText(f.icon,g,y+m*.06)}return e.beginPath(),e.arc(ne(Lf.x,a),ne(Lf.z,a),Math.max(2.6,a*.026),0,Math.PI*2),e.fillStyle=fe.mailbox,e.fill(),e.strokeStyle="#fff",e.lineWidth=Math.max(.8,a*.008),e.stroke(),t}function tu(a,t,e,i=!1){const n=ne($t.x-$t.halfWidth,t),s=ne($t.x+$t.halfWidth,t),r=ne($t.z-$t.halfSpan,t),o=ne($t.z+$t.halfSpan,t),l=Math.max(2,s-n);if(e){a.fillStyle=fe.bridgeWood,a.fillRect(n,r,l,o-r),a.strokeStyle="#8f6236",a.lineWidth=Math.max(.8,t*.004);for(let c=r;c<=o;c+=Math.max(2.5,(o-r)/8))a.beginPath(),a.moveTo(n,c),a.lineTo(n+l,c),a.stroke()}else a.save(),a.setLineDash([Math.max(2,t*.012),Math.max(2,t*.01)]),a.strokeStyle=fe.bridgeSite,a.lineWidth=Math.max(1.6,t*.014),a.beginPath(),a.moveTo((n+s)/2,r),a.lineTo((n+s)/2,o),a.stroke(),a.restore();if(i){const c=(n+s)/2,h=(r+o)/2,d=Math.max(6,t*.05),p=Math.max(10,t*.075);if(a.fillStyle=e?fe.bridgeWood:"rgba(255,246,228,0.72)",a.strokeStyle=e?"#8f6236":fe.bridgeSite,a.lineWidth=Math.max(1.4,t*.006),e||a.setLineDash([Math.max(2,t*.008),Math.max(2,t*.007)]),a.beginPath(),a.rect(c-d/2,h-p/2,d,p),a.fill(),a.stroke(),e){a.beginPath();for(let f=1;f<4;f++){const g=h-p/2+p/4*f;a.moveTo(c-d/2,g),a.lineTo(c+d/2,g)}a.stroke()}a.setLineDash([])}}let nc=new Map;function lS(a){if(nc.has(a))return nc.get(a);const t=parseInt(a.slice(1),16),e=[t>>16&255,t>>8&255,t&255];return nc.set(a,e),e}function eu(a,t,e,i=!1){const n=e.defense;if(!n)return;for(let r=0;r<zt.slots.length;r++){const o=zt.slots[r],l=n.structureAt?n.structureAt(r):null,c=ne(o.x,t),h=ne(o.z,t),d=Math.max(i?2.6:1.8,t*(i?.014:.018));a.beginPath(),a.arc(c,h,d,0,Math.PI*2),a.fillStyle=l?"#e8c07a":"rgba(255, 240, 205, 0.5)",a.fill(),a.lineWidth=Math.max(.6,t*.005),a.strokeStyle=l?"#a9743f":"rgba(180, 150, 100, 0.7)",a.stroke()}const s=n.raiders||[];for(const r of s){if(r.state==="down"&&r.downT>.3)continue;const o=ne(r.x,t),l=ne(r.z,t),c=Math.max(i?3.4:2.5,t*(i?.02:.026));a.beginPath(),a.arc(o,l,c,0,Math.PI*2),a.fillStyle="#e8455f",a.fill(),a.lineWidth=Math.max(.8,t*.007),a.strokeStyle="#ffffff",a.stroke()}}class cS{constructor(t,e,{size:i=104}={}){this.game=e,this.size=i,this.dpr=Math.min(2,Math.max(1,Math.round(window.devicePixelRatio||1))),this.acc=0,this.canvas=u("canvas",{class:"minimap-canvas",width:i*this.dpr,height:i*this.dpr,"aria-label":"섬 미니맵"}),this.canvas.style.width=`${i}px`,this.canvas.style.height=`${i}px`,this.pin=u("span",{class:"minimap-pin"},"🗺️"),this.wrap=u("button",{class:"minimap",type:"button","aria-label":"섬 지도 크게 보기",onclick:()=>this.game.openMinimap?.()},this.canvas,this.pin),t.append(this.wrap),this.wrap.addEventListener("pointerdown",n=>n.stopPropagation()),this.base=jf(i*this.dpr),this.ctx=this.canvas.getContext("2d"),this.lastBridge=null,this.draw()}draw(){const t=this.game;if(!t||!t.player)return;const e=this.size*this.dpr,i=this.ctx;i.clearRect(0,0,e,e),i.drawImage(this.base,0,0,e,e);const n=!!(t.progress&&t.progress.bridgeBuilt);tu(i,e,n),this.lastBridge=n,eu(i,e,t);for(const d of oi){const p=t.cats?t.cats.find(y=>y.id===d.id):null,f=ne(p?p.position.x:d.x,e),g=ne(p?p.position.z:d.z,e);i.beginPath(),i.arc(f,g,Math.max(2.2,e*.026),0,Math.PI*2),i.fillStyle=d.id==="somi"?"#f7f1e6":"#6d5a4a",i.fill(),i.lineWidth=Math.max(.8,e*.007),i.strokeStyle="#8b6a8f",i.stroke()}const s=ne(t.player.position.x,e),r=ne(t.player.position.z,e),o=t.player.yaw||0,l=Math.sin(o),c=Math.cos(o),h=Math.max(3.4,e*.042);i.save(),i.translate(s,r),i.rotate(Math.atan2(c,l)+Math.PI/2),i.beginPath(),i.moveTo(0,-h),i.lineTo(h*.72,h*.72),i.lineTo(0,h*.32),i.lineTo(-h*.72,h*.72),i.closePath(),i.fillStyle=fe.player,i.fill(),i.lineWidth=Math.max(1,e*.014),i.strokeStyle="#ffffff",i.stroke(),i.restore()}update(t){this.acc+=t,!(this.acc<.12)&&(this.acc=0,this.draw())}modalBody(t=320){const e=Math.min(2,Math.max(1,Math.round((window.devicePixelRatio||1)*1.5))),i=u("canvas",{class:"minimap-big",width:t*e,height:t*e});i.style.width="100%",i.style.maxWidth=`${t}px`,i.style.aspectRatio="1 / 1";const n=i.getContext("2d"),s=t*e;n.drawImage(jf(s),0,0,s,s);const r=this.game;tu(n,s,!!r.progress.bridgeBuilt,!0),eu(n,s,r,!0);for(const f of oi){const g=r.cats?r.cats.find(v=>v.id===f.id):null,y=ne(g?g.position.x:f.x,s),m=ne(g?g.position.z:f.z,s);n.beginPath(),n.arc(y,m,Math.max(3,s*.014),0,Math.PI*2),n.fillStyle=f.id==="somi"?"#f7f1e6":"#6d5a4a",n.fill(),n.lineWidth=1.4,n.strokeStyle="#8b6a8f",n.stroke()}const o=ne(r.player.position.x,s),l=ne(r.player.position.z,s),c=r.player.yaw||0,h=Math.max(6,s*.02);n.save(),n.translate(o,l),n.rotate(Math.atan2(Math.cos(c),Math.sin(c))+Math.PI/2),n.beginPath(),n.moveTo(0,-h),n.lineTo(h*.72,h*.72),n.lineTo(0,h*.32),n.lineTo(-h*.72,h*.72),n.closePath(),n.fillStyle=fe.player,n.fill(),n.lineWidth=2,n.strokeStyle="#fff",n.stroke(),n.restore();const d=u("div",{class:"map-legend"}),p=(f,g,y)=>u("div",{class:"legend-row"},u("span",{class:"sw",style:{background:f}}),u("span",{class:"nm"},g),u("span",{class:"meta"},y));for(const f of wi){const g=!!r.progress.building(f.id).done;d.append(p("#ffffff",`${f.icon} ${f.name}`,g?"복구 완료":"복구 전"))}d.append(p(fe.bridgeWood,"🌉 다리",r.progress.bridgeBuilt?"건널 수 있어요":"재료를 모아 놓기")),d.append(p(fe.mailbox,"📬 우체통","편지·의뢰 보상")),d.append(p(fe.farm,"🌱 텃밭",`3×3 · ${r.progress.farmPlots.filter(Boolean).length}칸 심음`)),d.append(p(fe.paddy,"🌾 논",`3×2 · ${r.progress.paddyPlots.filter(Boolean).length}칸 심음`)),d.append(p(fe.forest,"🌲 빼곡한 숲","통나무 군락")),d.append(p(fe.quarry,"🪨 채석장","돌·별조각 군락"));for(const f of oi){const g=r.cats?r.cats.find(y=>y.id===f.id):null;d.append(p(f.id==="somi"?"#f7f1e6":"#6d5a4a",`🐱 ${f.name}`,g?`Lv.${r.progress.catRow(f.id).level}`:""))}return d.append(p(fe.player,"📍 나",`(${r.player.position.x.toFixed(1)}, ${r.player.position.z.toFixed(1)})`)),d.append(p("#e8c07a","🛡️ 방어 슬롯",`${r.defense?r.defense.slotsInfo().filter(f=>f.kind).length:0}/5곳 설치`)),r.defense&&r.defense.waveActive&&d.append(p("#e8455f","🥷 불청객",`${r.defense.raiders.length}명 진격 중`)),u("div",{class:"map-modal"},u("div",{class:"map-canvas-wrap"},i),u("div",{class:"hint"},"지도는 섬 전체(72×72)를 담아요. 가운데 강이 남쪽 생활권과 북쪽 개척권을 나누고, 다리를 놓으면 건너갈 수 있어요."),u("div",{class:"section-label"},"범례"),d)}}const iu="#c08a52",nu="#dcae74",su="#8f6236";var va,nm,sm;class hS{constructor(t){Re(this,va);this.terrain=t,this.group=new Ge,this.group.name="Bridge",this.built=!1,this.t=0,this.siteGroup=new Ge,this.deckGroup=new Ge,this.group.add(this.siteGroup,this.deckGroup),_(this,va,nm).call(this),_(this,va,sm).call(this),this.setBuilt(!1,!0)}setBuilt(t,e=!1){this.built=!!t,this.siteGroup.visible=!this.built,this.deckGroup.visible=this.built,this.built?(this.deckGroup.scale.set(1,e?1:.02,1),this.deckGroup.position.y=e?0:.4):(this.deckGroup.scale.set(1,1,1),this.deckGroup.position.y=0)}update(t,e=0){if(this.t+=t,this.built){this.deckGroup.scale.y<1&&(this.deckGroup.scale.y+=(1-this.deckGroup.scale.y)*Math.min(1,t*6),this.deckGroup.position.y+=(0-this.deckGroup.position.y)*Math.min(1,t*6),this.deckGroup.scale.y>.995&&(this.deckGroup.scale.y=1,this.deckGroup.position.y=0));return}if(this.glow){const i=.34+Math.sin(this.t*1.9)*.12+e*.25;this.glow.material.opacity=i;const n=3.4+Math.sin(this.t*1.5)*.22;this.glow.scale.set(n,n,1)}}}va=new WeakSet,nm=function(){const{x:t,z:e,halfWidth:i,halfSpan:n}=$t,s=Ri({color:iu}),r=Ri({color:su}),o=new mi(.24,1.5,.24);for(const d of[-n+.5,n-.5])for(const p of[-i+.15,i-.15]){const f=new qt(o,r);f.position.set(t+p,$t.deckY+.15,e+d),f.castShadow=!0,f.receiveShadow=!0,this.siteGroup.add(f)}const l=new mi(1.6,.1,.34);for(let d=0;d<3;d++){const p=new qt(l,s);p.position.set(t+(d%2?.22:-.18),$t.deckY+.42+d*.03,e+n-.5-d*.55),p.rotation.y=(d-1)*.16,p.rotation.z=(d%2?1:-1)*.05,p.castShadow=!0,this.siteGroup.add(p)}const c=new qt(new mi(.12,1.05,.12),r);c.position.set(t+i+.55,$t.deckY+.55,e+n-.15),c.castShadow=!0,this.siteGroup.add(c);const h=new qt(new mi(.86,.52,.08),Ri({color:nu}));h.position.set(t+i+.55,$t.deckY+1,e+n-.15),h.castShadow=!0,this.siteGroup.add(h),this.glow=new li(new je({map:ur(),color:"#ffe6b0",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1,blending:ns})),this.glow.scale.set(3.6,3.6,1),this.glow.position.set(t,$t.deckY+1.1,e+n-.2),this.siteGroup.add(this.glow)},sm=function(){const{x:t,z:e,halfWidth:i,halfSpan:n}=$t,s=Ri({color:nu}),r=Ri({color:iu}),o=Ri({color:su}),l=n*2,c=20,h=(l-.3)/c,d=new mi(i*2,.12,h*.86);for(let m=0;m<c;m++){const v=e-n+.15+h*(m+.5),b=new qt(d,m%2?s:r);b.position.set(t,$t.deckY-.06,v),b.rotation.y=(m%3-1)*.012,b.castShadow=!0,b.receiveShadow=!0,this.deckGroup.add(b)}const p=new mi(.1,.1,l);for(const m of[-i+.08,i-.08]){const v=new qt(p,o);v.position.set(t+m,$t.deckY+.52,e),v.castShadow=!0,this.deckGroup.add(v)}const f=new mi(.12,.62,.12),g=Math.max(3,Math.round(l/1.6));for(let m=0;m<=g;m++){const v=e-n+l/g*m;for(const b of[-i+.08,i-.08]){const T=new qt(f,r);T.position.set(t+b,$t.deckY+.24,v),T.castShadow=!0,this.deckGroup.add(T)}}const y=new mi(i*2+.5,.3,.55);for(const m of[-n+.1,n-.1]){const v=new qt(y,Ri({color:"#ded6c6"}));v.position.set(t,$t.deckY-.18,e+m),v.receiveShadow=!0,this.deckGroup.add(v)}};const au="#8fd7e0",dS="#9c7a52";var Sn,am,ea;class fS{constructor({terrain:t,progress:e,fx:i,audio:n,hooks:s={}}){Re(this,Sn);this.terrain=t,this.progress=e,this.fx=i,this.audio=n,this.hooks=s,this.group=new Ge,this.group.name="Paddy",this.plots=[],this.time=0,_(this,Sn,am).call(this)}plotAt(t,e,i=1.5){let n=null,s=i;for(const r of this.plots){const o=Math.hypot(r.x-t,r.z-e);o<s&&(n=r,s=o)}return n}nearest(t,e=2.5){return this.plotAt(t.x,t.z,e)}plotByIndex(t){return this.plots[t]||null}waterTargets(t,e=1){const i=Math.max(1,Math.min(3,Math.floor(e)||1));if(i<=1)return[t.index];const n=this.plots.filter(s=>s.row===t.row).map(s=>s.index);return i===2?n:this.plots.map(s=>s.index)}syncAll(){for(const t of this.plots)_(this,Sn,ea).call(this,t,!0)}plant(t,e="rice"){const i=this.progress.plantPaddy(t.index,e);if(!i.ok)return i;const n=i.crop;return _(this,Sn,ea).call(this,t,!0),this.fx.burst(t.x,t.y+.2,t.z,"#b9e6c6",10,{spread:.9,up:1.4}),this.audio.sfxSplash?.(.5),this.hooks.toast?.(`🌾 ${n.name} 볍씨를 논에 심었어요 — ${Math.round(n.grow)}초 뒤에 여물어요`,2400),this.hooks.onPlant?.(n,t),this.hooks.save?.(),{ok:!0,crop:n}}water(t,e=1){const i=this.waterTargets(t,e).map(r=>this.plotByIndex(r)).filter(r=>{const o=this.progress.paddyPlot(r.index);return o&&o.remain>0&&o.watered<Me.maxWater});if(!i.length)return{ok:!1,reason:this.waterTargets(t,e).some(o=>!!this.progress.paddyPlot(o))?"max":"empty"};const n=Me.waterStamina*i.length;if(this.progress.stamina<n)return{ok:!1,reason:"stamina",cost:n};let s=0;for(const r of i)this.progress.waterPaddy(r.index).ok&&(s+=1,this.fx.burst(r.x,r.y+.5,r.z,"#bfeaff",9,{spread:.55,up:1.1}),_(this,Sn,ea).call(this,r,!0));return s?(this.progress.useStamina(n),this.audio.sfxSplash?.(.4),this.hooks.onWater?.(s,t),this.hooks.save?.(),{ok:!0,watered:s,cost:n}):{ok:!1,reason:"empty"}}harvest(t){const e=this.progress.paddyPlot(t.index);if(!e)return{ok:!1,reason:"empty"};if(e.remain>0)return{ok:!1,reason:"growing"};const i=this.progress.harvestPaddy(t.index);if(!i.ok)return i;const n=i.crop;return this.audio.sfxPickup?.(),this.fx.burst(t.x,t.y+.5,t.z,n.tint,16,{spread:1.1,up:1.8,size:1.1}),this.fx.float(`${n.icon} ${n.name} +${i.n}`,t.x,t.y+1,t.z,"#7a6a4d"),this.hooks.toast?.(`🌾 ${n.name} ${i.n}개 수확! 수확 바구니에 담았어요 (${i.total}개)`,2600),_(this,Sn,ea).call(this,t,!0),this.hooks.onHarvest?.(n,i.n,t),this.hooks.save?.(),{ok:!0,crop:n,n:i.n,total:i.total}}update(t,e,i=null){this.time+=t,this.camera=i;const n=e>0?this.progress.tickPaddy(e):[];for(const s of this.plots){const r=this.progress.paddyPlot(s.index);if(r&&r.wet>0&&(s.wet=!0),_(this,Sn,ea).call(this,s),s.plant.visible&&i&&(s.plant.rotation.y=Math.atan2(i.position.x-s.x,i.position.z-s.z)),s.water.position.y=s.y+Zt.waterY+Math.sin(this.time*1.3+s.index*.7)*.006,s.sparkle.visible){s.sparkle.material.opacity=.7+Math.sin(this.time*2.6+s.index*.9)*.3;const o=.58+Math.sin(this.time*2.2+s.index)*.1;s.sparkle.scale.set(o,o,1),s.plant.position.y=s.y+.05+Math.sin(this.time*2+s.index)*.014}r&&r.wet>0?(s.droplet.visible=!0,s.droplet.material.opacity=.15+.6*Math.min(1,r.wet/3),s.droplet.position.y=s.y+.32+Math.sin(this.time*3+s.index)*.03):s.droplet.visible=!1}if(n.length){for(const s of n){const r=this.plots[s];if(!r)continue;const o=this.progress.paddyPlot(s),l=o?Jt[o.crop]:Jt.rice;this.fx.burst(r.x,r.y+.45,r.z,l.tint,8,{spread:.7,up:1.3})}this.hooks.onRipe?.(n)}}}Sn=new WeakSet,am=function(){this.soil={dry:Ho(!1),wet:Ho(!0)};for(let t=0;t<Zt.rows;t++)for(let e=0;e<Zt.cols;e++){const i=+(Zt.x+(e-(Zt.cols-1)/2)*Zt.pitch).toFixed(3),n=+(Zt.z+(t-(Zt.rows-1)/2)*Zt.pitch).toFixed(3),s=this.terrain.groundY(i,n),r=Zt.tile,o=new Ei(r,r,1,1);o.rotateX(-Math.PI/2);const l=new qt(o,Ri({map:this.soil.wet,color:"#dfeef0"}));l.position.set(i,s+.03,n),l.receiveShadow=!0,l.name=`PaddyTile_${t}-${e}`,this.group.add(l);const c=new Ei(r*.94,r*.94,1,1);c.rotateX(-Math.PI/2);const h=new qt(c,new Ke({color:au,transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}));h.position.set(i,s+Zt.waterY,n),h.renderOrder=1,this.group.add(h);const d=Ri({color:dS}),p=new mi(r+.2,.16,.16),f=new mi(.16,.16,r);for(const w of[-r/2,r/2]){const A=new qt(p,d);A.position.set(i,s+.1,n+w),A.castShadow=!0,A.receiveShadow=!0,this.group.add(A)}for(const w of[-r/2,r/2]){const A=new qt(f,d);A.position.set(i+w,s+.1,n),A.castShadow=!0,A.receiveShadow=!0,this.group.add(A)}const g=new Ei(1,1);g.translate(0,.5,0);const y=new qt(g,new Ke({map:Vo("rice",0),alphaTest:.5,side:Bi,toneMapped:!1,fog:!0}));y.position.set(i,s+.05,n),y.visible=!1,y.renderOrder=3,this.group.add(y);const m=new li(new je({map:jp(),color:"#fff1c2",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:ns}));m.scale.set(.62,.62,1),m.position.set(i+.3,s+1.05,n-.22),m.visible=!1,m.renderOrder=4,this.group.add(m);const v=new li(new je({map:Qp(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));v.scale.set(.26,.26,1),v.position.set(i+r*.24,s+.4,n+r*.16),v.visible=!1,this.group.add(v);const T={index:t*Zt.cols+e,row:t,col:e,x:i,z:n,y:s,soil:l,water:h,plant:y,sparkle:m,droplet:v,stage:-1,wet:!1,crop:null};l.userData.paddy=T,this.plots.push(T)}this.syncAll()},ea=function(t,e=!1){const i=this.progress.paddyPlot(t.index),n=i?ma(i):-1,s=i?i.crop:null,r=!!(i&&i.wet>0),o=e||n!==t.stage||s!==t.crop||r!==t.wet;if(t.stage=n,t.crop=s,t.wet=r,t.soil.material.map=r?this.soil.wet:this.soil.dry,t.water.material.opacity=r?.56:.4,t.water.material.color.set(r?"#9ee2ea":au),!o)return;if(n<0){t.plant.visible=!1,t.sparkle.visible=!1;return}t.plant.visible=!0,t.plant.material.map=Vo(s||"rice",n),t.plant.material.needsUpdate=!0;const l=n===0?.8:n===1?.98:n===2?1.2:1.34;t.plant.scale.set(l,l,1),t.plant.position.y=t.y+.05,t.sparkle.visible=n===3};const Ee=new Map;function ba(a=32){const t=document.createElement("canvas");t.width=t.height=a;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function ya(a){const t=new ln(a);return t.colorSpace=be,t.magFilter=ue,t.minFilter=ue,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Ma(a,t=1){return(e,i,n,s,r)=>{a.fillStyle=r,a.fillRect(e*t,i*t,n*t,s*t)}}const ru={grunt:{hood:"#9a96a8",hoodDark:"#6b6779",cloak:"#8a8698",cloakDark:"#615d70",sack:"#d3a872",eye:"#ffe680",belt:"#5a5164"},runner:{hood:"#a9b8ad",hoodDark:"#718076",cloak:"#93a598",cloakDark:"#6a7a6f",sack:"#cbb98d",eye:"#fff09a",belt:"#5d6a60"},big:{hood:"#87818f",hoodDark:"#544f60",cloak:"#767083",cloakDark:"#4f4a5c",sack:"#c1935f",eye:"#ffd35f",belt:"#463f52"}};function uS(a="grunt"){const t=`raider:${a}`;if(Ee.has(t))return Ee.get(t);const e=ru[a]||ru.grunt,i=a==="big",{c:n,ctx:s}=ba(32),r=Ma(s,1);r(13,1,6,1,e.hood),r(11,2,10,1,e.hood),r(10,3,12,1,e.hood),r(9,4,14,2,e.hood),r(8,6,16,5,e.hood),r(8,6,1,5,e.hoodDark),r(23,6,1,5,e.hoodDark),r(9,11,14,1,e.hoodDark),r(11,6,10,5,"#2f2b3a"),r(11,6,10,1,"#221f2c"),r(12,7,8,4,"#3a3547"),r(12,8,3,2,e.eye),r(18,8,3,2,e.eye),r(12,8,1,1,"#fffce8"),r(18,8,1,1,"#fffce8"),r(10,12,12,2,e.cloak),r(9,14,14,9,e.cloak),r(9,14,2,9,e.cloakDark),r(21,14,2,9,e.cloakDark),r(10,23,12,1,e.cloakDark),r(13,15,1,7,e.cloakDark),r(19,15,1,7,e.cloakDark),r(10,18,12,1,e.belt),r(7,14,3,6,e.cloak),r(7,19,3,2,"#e8d8c4"),r(22,15,3,6,e.cloakDark),r(22,20,3,2,"#dccdb8");const o=i?20:21;r(o,9,7,8,e.sack),r(o,9,7,1,"#efd3a4"),r(o,16,7,1,"#b08453"),r(o+6,11,1,5,"#b08453"),r(o+2,12,3,1,"#a87c4c"),r(o+1,8,5,1,"#7a5636"),r(10,24,4,2,"#3a3547"),r(18,24,4,2,"#3a3547"),i&&(r(7,12,18,2,e.hoodDark),r(8,23,16,2,e.cloakDark));const l=ya(n);return Ee.set(t,l),l}function pS(){const a="boat";if(Ee.has(a))return Ee.get(a);const{c:t,ctx:e}=ba(32),i=Ma(e,1);i(4,18,24,3,"#5b4a63"),i(6,21,20,3,"#453749"),i(6,21,20,1,"#6b5872"),i(9,24,14,1,"#33283a"),i(8,15,16,3,"#6f5b78"),i(8,15,16,1,"#8a7593"),i(15,4,2,12,"#4a3c52"),i(17,6,7,8,"#9d97a8"),i(17,6,7,1,"#b8b2c2"),i(23,8,1,6,"#7d7788"),i(9,12,3,3,"#ffd98a"),i(10,13,1,1,"#fff4cf");const n=ya(t);return Ee.set(a,n),n}function mS(a){const t=`structure:${a}`;if(Ee.has(t))return Ee.get(t);const{c:e,ctx:i}=ba(32),n=Ma(i,1);if(a==="fence"){n(3,8,4,23,"#8a5a30"),n(3,8,1,23,"#a9743f"),n(6,8,1,23,"#6b4423"),n(25,8,4,23,"#8a5a30"),n(25,8,1,23,"#a9743f"),n(28,8,1,23,"#6b4423");for(const r of[12,18,24])n(2,r,28,4,"#c9925a"),n(2,r,28,1,"#e0b37c"),n(2,r+3,28,1,"#96633a"),n(15,r+1,1,2,"#a9743f");n(6,13,1,1,"#6b4423"),n(25,19,1,1,"#6b4423"),n(1,29,6,1,"#7fbf62"),n(24,29,7,1,"#7fbf62")}else a==="scarecrow"?(n(15,10,3,21,"#8a5a30"),n(15,10,1,21,"#a9743f"),n(6,15,21,2,"#8a5a30"),n(6,15,21,1,"#b07c46"),n(11,3,11,1,"#a98fd8"),n(9,4,15,2,"#b79ce2"),n(8,6,17,6,"#b79ce2"),n(9,12,15,2,"#a184cf"),n(8,6,1,6,"#9375c0"),n(24,6,1,6,"#9375c0"),n(12,8,2,2,"#3a2f4f"),n(19,8,2,2,"#3a2f4f"),n(15,11,3,1,"#3a2f4f"),n(13,13,8,1,"#f0dcb4"),n(4,17,3,1,"#e6cf92"),n(26,17,3,1,"#e6cf92"),n(14,30,5,2,"#6b4423")):a==="turret"?(n(14,16,4,8,"#8a5a30"),n(15,16,1,8,"#a9743f"),n(8,27,16,2,"#96633a"),n(10,24,2,4,"#8a5a30"),n(20,24,2,4,"#8a5a30"),n(12,2,9,1,"#8ed3ef"),n(10,3,13,2,"#9fdcf4"),n(8,5,17,8,"#a9e2f7"),n(9,13,15,2,"#8ed3ef"),n(8,5,1,8,"#7cc6e6"),n(24,5,1,8,"#7cc6e6"),n(11,6,3,3,"#e6f8ff"),n(12,6,1,1,"#ffffff"),n(13,15,6,1,"#f0dcb4"),n(15,15,2,3,"#6b5a48")):(n(15,10,2,21,"#8a7a6a"),n(15,10,1,21,"#a99887"),n(11,29,10,2,"#7c6c5c"),n(15,1,2,3,"#ffe89a"),n(15,8,2,3,"#ffe89a"),n(10,4,3,2,"#ffe89a"),n(19,4,3,2,"#ffe89a"),n(12,3,8,1,"#ffdb6b"),n(11,4,10,4,"#ffd45c"),n(12,8,8,1,"#ffc94a"),n(14,4,4,3,"#fff6c9"),n(13,9,6,1,"rgba(255,246,200,0.55)"),n(9,12,14,1,"#f0dcb4"));const s=ya(e);return Ee.set(t,s),s}function gS(){const a="balloon";if(Ee.has(a))return Ee.get(a);const{c:t,ctx:e}=ba(16),i=Ma(e,1);i(6,1,4,1,"#9fdcf4"),i(4,2,8,2,"#a9e2f7"),i(3,4,10,5,"#b6e8fa"),i(4,9,8,2,"#8ed3ef"),i(6,11,4,1,"#7cc6e6"),i(5,4,2,2,"#eafaff"),i(7,12,2,1,"#f0dcb4");const n=ya(t);return Ee.set(a,n),n}function vS(){const a="pellet";if(Ee.has(a))return Ee.get(a);const{c:t,ctx:e}=ba(8),i=Ma(e,1);i(3,1,3,1,"#e0e2ee"),i(2,2,4,3,"#c3c6d6"),i(2,5,4,1,"#a6aabf"),i(3,6,2,1,"#8f94ac");const n=ya(t);return Ee.set(a,n),n}function xS(){const a="decoy";if(Ee.has(a))return Ee.get(a);const{c:t,ctx:e}=ba(24),i=Ma(e,1);i(8,4,8,1,"#cbb3f0"),i(6,5,12,2,"#d8c3f7"),i(5,7,14,8,"#d8c3f7"),i(6,15,12,2,"#bfa8e6"),i(8,17,8,1,"#a98fd8"),i(9,10,2,2,"#4a3b66"),i(14,10,2,2,"#4a3b66"),i(11,14,3,1,"#7f6a9c"),i(7,19,10,1,"rgba(190,170,230,0.55)");const n=ya(t);return Ee.set(a,n),n}function _S(){const a="slotMarker";if(Ee.has(a))return Ee.get(a);const t=document.createElement("canvas");t.width=t.height=96;const e=t.getContext("2d");e.strokeStyle="rgba(255, 226, 160, 0.95)",e.lineWidth=5,e.setLineDash([11,9]),e.beginPath(),e.arc(48,48,38,0,Math.PI*2),e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(255, 245, 210, 0.9)",e.lineWidth=4,e.beginPath(),e.moveTo(48,34),e.lineTo(48,62),e.moveTo(34,48),e.lineTo(62,48),e.stroke();const i=new ln(t);return i.colorSpace=be,Ee.set(a,i),i}function bS(){const a="safeRing";if(Ee.has(a))return Ee.get(a);const t=document.createElement("canvas");t.width=t.height=192;const e=t.getContext("2d");e.strokeStyle="rgba(150, 232, 200, 0.95)",e.lineWidth=7,e.setLineDash([18,14]),e.beginPath(),e.arc(96,96,86,0,Math.PI*2),e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(255, 255, 255, 0.6)",e.lineWidth=2,e.beginPath(),e.arc(96,96,78,0,Math.PI*2),e.stroke();const i=new ln(t);return i.colorSpace=be,Ee.set(a,i),i}const yS={grunt:"raider",runner:"raider_runner",big:"raider_big"},ou=(a,t,e)=>Math.max(t,Math.min(e,a)),ji=(a,t,e,i)=>Math.hypot(a-e,t-i);var ct,ia,rm,na,hh,bo,yo,om,lm,cm,Mo,So,hm,dm,fm,dh,um,pm,wo,Eo,Ka,To,mm,gm,vm,xm,Za;class MS{constructor(t){Re(this,ct);this.scene=t.scene,this.terrain=t.terrain,this.progress=t.progress,this.player=t.player,this.cats=t.cats||[],this.dittos=t.dittos||[],this.fx=t.fx,this.hooks=t.hooks||{},this.spriteMaterials=t.spriteMaterials||[],this.atlases=t.atlases||null,this.camera=t.camera||null,this.root=new Ge,this.root.name="Defense",this.scene.add(this.root),this.structures=zt.slots.map(()=>null),this.slotMarkers=[],this.raiders=[],this.projectiles=[],this.decoys=[],this.wave=null,this.evac={active:!1,day:0,count:0},this.ammo=0,this.slingCd=0,this.balloonCd=0,this.helperCd={somi:0,ongi:0},this.speedMultiplier=1,this.support=go([]),this.catBefore=null,this.lastResult=null,_(this,ct,rm).call(this),this.sync()}get slotCount(){return zt.slots.length}slotDef(t){return zt.slots[t]||null}structureAt(t){return this.structures[t]||null}slotsInfo(){return zt.slots.map((t,e)=>{const i=this.structures[e],n=i?ke[i.kind]:null;return{index:e,id:t.id,x:t.x,z:t.z,side:t.side,kind:i?i.kind:null,name:n?n.name:"빈 슬롯",icon:n?n.icon:"➕",hp:i?Math.round(i.hp):0,hpMax:i?Math.round(i.hpMax):0,pct:i?Math.round(i.hp/Math.max(1,i.hpMax)*100):0}})}sync(){for(let e=0;e<this.structures.length;e++)this.structures[e]&&_(this,ct,bo).call(this,e);this.support=go(this.hooks.getDiscovered?this.hooks.getDiscovered():[]);const t=this.progress.defense&&Array.isArray(this.progress.defense.slots)?this.progress.defense.slots:[];for(let e=0;e<this.structures.length;e++){const i=t[e];!i||!ke[i.kind]||_(this,ct,hh).call(this,e,i.kind,{hp:Number(i.hp)||null,persist:!1})}_(this,ct,na).call(this)}hpMaxOf(t){const e=ke[t];if(!e)return 1;const i=t==="fence"?this.support.fenceHp:1;return Math.round(e.hp*i)}placeStructure(t,e){const i=_(this,ct,hh).call(this,t,e,{persist:!0});return i&&_(this,ct,Za).call(this),i}removeStructure(t){const e=_(this,ct,bo).call(this,t);return e&&this.progress.defense&&(this.progress.defense.slots[t]=null,_(this,ct,Za).call(this)),e}get waveActive(){return!!this.wave}installed(){return this.structures.filter(Boolean).map(t=>({index:t.index,kind:t.kind,hp:Math.round(t.hp)}))}startWave(t,e="manual"){if(this.wave)return{ok:!1,reason:"active"};const i=Math.max(1,Math.floor(Number(t)||1)),n=x1(i);this.support=go(this.hooks.getDiscovered?this.hooks.getDiscovered():[]);for(const s of this.structures)s&&(s.hpMax=this.hpMaxOf(s.kind),s.hp=s.hpMax,_(this,ct,yo).call(this,s),this.progress.defense&&(this.progress.defense.slots[s.index]={kind:s.kind,hp:Math.round(s.hp)}));this.wave={day:i,reason:e,t:0,timer:Ha.duration,plan:n,spawned:0,total:n.length,down:0,fled:0,stolen:0,turretHits:0,somiHits:0,ongiHits:0,slingHits:0,balloonHits:0,ammoUsed:0,evacPerfect:this.evac.active&&this.evacCount>0&&this.evacCount>=this.dittos.length},this.ammo=nn.balloon.shots+this.support.ammo,this.slingCd=0,this.balloonCd=0,this.helperCd={somi:0,ongi:0},this.boat.visible=!0,this.boatT=0,this.lastResult=null,this.catBefore=this.cats.map(s=>({id:s.id,follow:!!s.follow}));for(const s of this.cats)s.setFollow(!0);return _(this,ct,cm).call(this),this.hooks.toast?.("🌊 부두 앞 바다에 회색 돛이 나타났어요!",2600),this.cats.some(s=>s.id==="ongi")&&setTimeout(()=>this.hooks.toast?.("😼 옹이: 야옹!! 수집단이 왔어요 — 지도에 빨간 점!",3e3),900),this.hooks.onWaveStart?.(this.waveState()),_(this,ct,lm).call(this),_(this,ct,na).call(this),{ok:!0,wave:this.waveState()}}stopWave(){return this.wave?_(this,ct,So).call(this):null}gatherDittos(){if(this.wave)return{ok:!1,reason:"active"};if(!this.dittos.length)return{ok:!1,reason:"none"};const{x:t,z:e,r:i}=zt.plaza;return this.dittos.forEach((n,s)=>{const r=s/Math.max(1,this.dittos.length)*Math.PI*2+.4,o=Math.min(i-1.2,1.5+s%3*.6),l=t+Math.cos(r)*o,c=e+Math.sin(r)*o*.8;n.setEvacTarget(l,c)}),this.evac={active:!0,day:this.hooks.day?this.hooks.day():0,count:0},this.safeRing.material.opacity=.85,{ok:!0,total:this.dittos.length}}releaseDittos(){for(const t of this.dittos)t.clearEvac();this.evac={active:!1,day:this.evac.day,count:0},this.safeRing.material.opacity=0}get evacCount(){return this.dittos.filter(t=>t.evacuated).length}nearestRaider(t,e=999){let i=null,n=e;for(const s of this.raiders){if(s.state==="down")continue;const r=ji(t.x,t.z,s.x,s.z);r<n&&(n=r,i=s)}return i}fire(t="sling"){if(!this.wave)return{ok:!1,reason:"idle"};const e=nn[t];if(!e)return{ok:!1,reason:"kind"};if(t==="sling"){if(this.slingCd>0)return{ok:!1,reason:"cooldown"}}else{if(this.balloonCd>0)return{ok:!1,reason:"cooldown"};if(this.ammo<=0){if(this.progress.inventory.count("petal")<=0)return{ok:!1,reason:"petal"};this.progress.inventory.take("petal",nn.balloon.petals),this.ammo+=nn.balloon.shots,this.hooks.toast?.(`🌸 꽃잎 ${nn.balloon.petals}개로 물풍선 ${nn.balloon.shots}발을 만들었어요`,2e3)}}const i=this.nearestRaider(this.player.position,e.range);if(!i)return{ok:!1,reason:"none"};t==="sling"?this.slingCd=e.cooldown:(this.balloonCd=e.cooldown,this.ammo-=1,this.wave.ammoUsed+=1);const n=this.player.position,s=this.support.power;return _(this,ct,dh).call(this,{source:t,kind:t,from:{x:n.x,y:n.y+.95,z:n.z},target:i,dmg:e.damage*s,splash:e.splash||0,slow:t==="sling"?0:.6,knockback:e.knockback||0}),{ok:!0,target:i}}catTarget(t){if(!this.wave||t!=="ongi")return null;const e=this.cats.find(s=>s.id==="ongi"),i=e?e.position:this.player.position,n=this.nearestRaider(i,999);return n?{x:n.x,z:n.z}:null}update(t,e=!0){const i=performance.now()*.001;if(this.slotMarkers.length)for(let r=0;r<this.slotMarkers.length;r++){const o=this.slotMarkers[r];o.visible&&(o.material.opacity=.34+Math.sin(i*2+r)*.12)}if(this.safeRing){const r=this.wave?.55:this.evac.active?.8:0;this.safeRing.material.opacity+=(r-this.safeRing.material.opacity)*Math.min(1,t*3),this.safeRing.visible=this.safeRing.material.opacity>.02}for(const r of this.decoys)r.used||(r.bob+=t*3,r.sprite.position.y=this.terrain.groundY(r.x,r.z)+.5+Math.sin(r.bob)*.06);if(this.evac.active){const r=this.evacCount;r!==this.evac.count&&(this.evac.count=r,r>0&&r===this.dittos.length&&(this.evac.done=!0,this.hooks.toast?.("🟣 메타몽 모두 광장으로! 안전 울타리 안에 모였어요",2800),this.hooks.onEvacDone?.({count:r,total:this.dittos.length})))}if(!this.wave){this.slingCd=Math.max(0,this.slingCd-t),this.balloonCd=Math.max(0,this.balloonCd-t);return}const n=Math.min(10,Math.max(1,Math.ceil(t/.12))),s=t/n;for(let r=0;r<n&&!_(this,ct,xm).call(this,s,e);r++);if(_(this,ct,um).call(this,e?t:0),this.camera)for(const r of this.raiders)r.bb&&r.bb.faceCamera(this.camera)}onNewDay(t){this.wave&&this.stopWave(),this.evac.active&&this.releaseDittos(),_(this,ct,Mo).call(this),t%zt.periodDays===0&&this.hooks.toast?.("🛡️ 오늘 밤 수집단이 온대요 — 방어를 준비해요",3e3)}rayTargets(){return this.raiders.map(t=>t.sprite)}waveState(){if(!this.wave)return null;const t=this.wave;return{day:t.day,t:Math.round(t.t*10)/10,timer:Math.round(t.timer*10)/10,total:t.total,spawned:t.spawned,left:this.raiders.length,down:t.down,fled:t.fled,stolen:t.stolen,turretHits:t.turretHits,slingHits:t.slingHits,balloonHits:t.balloonHits,somiHits:t.somiHits,ongiHits:t.ongiHits,ammoUsed:t.ammoUsed,ammo:this.ammo,reason:t.reason}}stats(){return{wave:this.waveState(),raiders:this.raiders.map(t=>({kind:t.kind,x:+t.x.toFixed(2),z:+t.z.toFixed(2),hp:Math.round(t.hp),state:t.state})),slots:this.slotsInfo(),evac:{active:this.evac.active,count:this.evacCount,total:this.dittos.length},ammo:this.ammo,support:{...this.support},boatVisible:!!(this.boat&&this.boat.visible),decoys:this.decoys.filter(t=>!t.used).length,lastResult:this.lastResult?{victory:this.lastResult.victory,down:this.lastResult.down,total:this.lastResult.total,stolen:this.lastResult.stolen,reward:this.lastResult.reward}:null}}}ct=new WeakSet,ia=function(t,e,i={}){const n=new je({map:t,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:i.opacity??1}),s=new li(n);return s.scale.set(e,e,1),s.renderOrder=i.renderOrder??4,this.spriteMaterials.push(n),s},rm=function(){const t=_S();for(const n of zt.slots){const s=new zn(.62,26);s.rotateX(-Math.PI/2);const r=new Ke({map:t,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),o=new qt(s,r);o.position.set(n.x,this.terrain.groundY(n.x,n.z)+.03,n.z),o.renderOrder=2,this.root.add(o),this.slotMarkers.push(o)}const e=new zn(zt.plaza.r,48);e.rotateX(-Math.PI/2);const i=new Ke({map:bS(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1});this.safeRing=new qt(e,i),this.safeRing.position.set(zt.plaza.x,this.terrain.groundY(zt.plaza.x,zt.plaza.z)+.05,zt.plaza.z),this.safeRing.renderOrder=2,this.root.add(this.safeRing),this.boat=_(this,ct,ia).call(this,pS(),1.6),this.boat.position.set(zt.boat.x,.35,zt.boat.z),this.boat.visible=!1,this.root.add(this.boat)},na=function(){for(let t=0;t<this.slotMarkers.length;t++){const e=this.slotMarkers[t];e.visible=!this.structures[t],e.material.opacity=this.wave?.25:.5}},hh=function(t,e,{hp:i=null,persist:n=!0}={}){const s=ke[e],r=zt.slots[t];if(!s||!r)return null;const o=this.hpMaxOf(e),l=_(this,ct,ia).call(this,mS(e),s.height),c=this.terrain.groundY(r.x,r.z);l.position.set(r.x,c+s.height/2,r.z),this.root.add(l);const h=new zn(s.height*.36,20);h.rotateX(-Math.PI/2);const d=new qt(h,new Ke({color:"#6d5a8a",transparent:!0,opacity:.24,depthWrite:!1,toneMapped:!1}));d.position.set(r.x,c+.02,r.z),d.renderOrder=2,this.root.add(d);const p={x:r.x,z:r.z,r:.42,allyPass:!0,foeOnly:!0};this.player&&Array.isArray(this.player.colliders)&&this.player.colliders.push(p);const f={index:t,kind:e,def:s,hp:i&&i>0?Math.min(o,i):o,hpMax:o,sprite:l,shadow:d,collider:p,x:r.x,z:r.z,y:c};return this.structures[t]=f,n&&this.progress.defense&&(this.progress.defense.slots[t]={kind:e,hp:Math.round(f.hp)}),_(this,ct,na).call(this),_(this,ct,yo).call(this,f),f},bo=function(t){const e=this.structures[t];if(!e)return null;if(this.root.remove(e.sprite),e.sprite.material.dispose(),this.root.remove(e.shadow),e.shadow.geometry.dispose(),e.shadow.material.dispose(),this.player&&Array.isArray(this.player.colliders)){const i=this.player.colliders.indexOf(e.collider);i>=0&&this.player.colliders.splice(i,1)}return this.structures[t]=null,_(this,ct,na).call(this),e},yo=function(t){const e=ou(t.hp/Math.max(1,t.hpMax),.35,1);t.sprite.scale.y=t.def.height*(.72+e*.28),t.sprite.position.y=t.y+t.sprite.scale.y/2,t.shadow.material.opacity=.1+e*.16},om=function(t,e){if(!(!t||t.hp<=0)&&(t.hp=Math.max(0,t.hp-e),_(this,ct,yo).call(this,t),this.progress.defense&&(this.progress.defense.slots[t.index]={kind:t.kind,hp:Math.round(t.hp)}),t.hp<=0)){const i=t.def.name;this.fx?.burst(t.x,t.y+.5,t.z,"#c9a06a",16,{spread:1.4,up:2.2}),_(this,ct,bo).call(this,t.index),this.progress.defense&&(this.progress.defense.slots[t.index]=null),this.hooks.toast?.(`💥 ${i}이(가) 부서졌어요!`,2200),_(this,ct,Za).call(this)}},lm=function(){this.boat&&(this.boat.position.set(zt.boat.x,.35,zt.boat.z+2.4),this.boat.material.opacity=0,this.boat.visible=!0)},cm=function(){_(this,ct,Mo).call(this);const t=this.support.decoys;if(!t)return;const e=[{x:-1.2,z:24.2},{x:1.3,z:20.8}];for(let i=0;i<t;i++){const n=e[i]||e[e.length-1],s=_(this,ct,ia).call(this,xS(),.9,{opacity:.72}),r=this.terrain.groundY(n.x,n.z);s.position.set(n.x,r+.45,n.z),this.root.add(s),this.decoys.push({sprite:s,x:n.x,z:n.z,used:!1,bob:Math.random()*6.28})}},Mo=function(){for(const t of this.decoys)this.root.remove(t.sprite),t.sprite.material.dispose();this.decoys=[]},So=function(){const t=this.wave;if(!t)return null;this.wave=null;for(const s of[...this.raiders])_(this,ct,Eo).call(this,s,!1);for(const s of this.projectiles)this.root.remove(s.sprite),s.sprite.material.dispose();if(this.projectiles=[],_(this,ct,Mo).call(this),this.boat.visible=!1,this.speedMultiplier=1,this.catBefore){for(const s of this.catBefore){const r=this.cats.find(o=>o.id===s.id);r&&r.setFollow(s.follow)}this.catBefore=null}const e=t.stolen===0,i=this.progress.defense;i.runs=(i.runs||0)+1,i.lastRunDay=t.day,i.lastResult=e?"victory":"partial",i.totalDown=(i.totalDown||0)+t.down,i.turretHits=(i.turretHits||0)+t.turretHits,i.lastStolen=t.stolen,i.lastWave={day:t.day,total:t.total,down:t.down,fled:t.fled,stolen:t.stolen,reason:t.reason};let n=null;if(e){i.wins=(i.wins||0)+1,t.evacPerfect&&(i.perfectEvacs=(i.perfectEvacs||0)+1),n=_1(t.day),this.progress.addCoins(n.coin),n.seed&&this.progress.addSupply(n.seed,n.seedCount);const s=this.progress.inventory.add("star",n.star);s>0&&(this.progress.inventory.storage.star=(this.progress.inventory.stored("star")||0)+s)}else i.losses=(i.losses||0)+1;return this.lastResult={victory:e,...t,reward:n},this.hooks.onWaveEnd?.(this.lastResult),_(this,ct,Za).call(this),_(this,ct,na).call(this),this.lastResult},hm=function(t){const e=ke.turret;for(const i of this.structures){if(!i||i.kind!=="turret"||i.hp<=0||(i.cd=Math.max(0,(i.cd||0)-t),i.cd>0))continue;const n=_(this,ct,fm).call(this,i.x,i.z,e.range);if(!n)continue;const s=_(this,ct,dm).call(this,i.x,i.z);i.cd=e.cooldown/s,_(this,ct,dh).call(this,{source:"turret",kind:"balloon",from:{x:i.x,y:i.y+.95,z:i.z},target:n,dmg:e.damage*this.support.power,slow:e.slow})}},dm=function(t,e){let i=1;for(const n of this.structures)!n||n.kind!=="lamp"||n.hp<=0||ji(t,e,n.x,n.z)<=ke.lamp.range&&(i=Math.max(i,ke.lamp.boost));return i},fm=function(t,e,i){let n=null,s=i;for(const r of this.raiders){if(r.state==="down")continue;const o=ji(t,e,r.x,r.z);o<s&&(s=o,n=r)}return n},dh=function({source:t="sling",kind:e,from:i,target:n,dmg:s,splash:r=0,slow:o=0,knockback:l=0}){const c=e==="balloon"?gS():vS(),h=e==="balloon"?.42:.22,d=_(this,ct,ia).call(this,c,h,{renderOrder:6});d.position.set(i.x,i.y,i.z),this.root.add(d);const p={x:n.x,y:n.y+.7,z:n.z},f=ji(i.x,i.z,p.x,p.z);this.projectiles.push({source:t,kind:e,sprite:d,from:i,to:p,t:0,dur:ou(f/(e==="balloon"?9:14),.12,.7),dmg:s,splash:r,slow:o,knockback:l,target:n})},um=function(t){if(this.projectiles.length)for(let e=this.projectiles.length-1;e>=0;e--){const i=this.projectiles[e];i.t+=t;const n=Math.min(1,i.t/i.dur),s=i.from.x+(i.to.x-i.from.x)*n,r=i.from.z+(i.to.z-i.from.z)*n,o=i.from.y+(i.to.y-i.from.y)*n+Math.sin(n*Math.PI)*.9;if(i.sprite.position.set(s,o,r),n<1)continue;const l=[];if(i.splash>0){for(const c of this.raiders)c.state!=="down"&&ji(c.x,c.z,i.to.x,i.to.z)<=i.splash&&l.push(c);this.fx?.burst(i.to.x,i.to.y,i.to.z,"#a9e2f7",18,{spread:2.2,up:2.4,size:1.2})}else i.target&&i.target.state!=="down"&&l.push(i.target);for(const c of l){const h=i.splash>0&&c!==i.target;_(this,ct,wo).call(this,c,i.dmg*(h?.72:1),i.source,i.slow,i.knockback)}!l.length&&i.kind==="balloon"&&this.fx?.burst(i.to.x,i.to.y,i.to.z,"#cbeaf7",8,{spread:1.2,up:1.6}),this.root.remove(i.sprite),i.sprite.material.dispose(),this.projectiles.splice(e,1)}},pm=function(t){const e=Xf[t]||Xf.grunt,n=((this.wave?this.wave.spawned:0)%3-1)*.62+(Math.random()-.5)*.3,s=zt.landing.x+n,r=zt.landing.z+(Math.random()-.5)*1.2,o=this.terrain.groundY(s,r),l=this.atlases?this.atlases.get(yS[t]||"raider"):null;let c=null,h;l?(c=new ua(l,"back1",{height:e.height}),c.mesh.renderOrder=5,this.spriteMaterials.push(c.material),h=c.mesh):h=_(this,ct,ia).call(this,uS(t),e.height),h.position.set(s,c?o:o+e.height/2,r),this.root.add(h);const d=new zn(e.height*.28,16);d.rotateX(-Math.PI/2);const p=new qt(d,new Ke({color:"#4f4560",transparent:!0,opacity:.28,depthWrite:!1,toneMapped:!1}));p.position.set(s,o+.02,r),p.renderOrder=2,this.root.add(p);const f={kind:t,def:e,hp:e.hp,hpMax:e.hp,x:s,z:r,y:o,wp:1,state:"walk",speed:e.speed,sprite:h,bb:c,animT:Math.random()*4,frameName:c?"front1":null,shadow:p,stun:0,slow:0,slowT:0,bob:Math.random()*6.28,attackT:0,target:null,tauntRolled:!1,ignoreStructT:0,downT:0,stolen:!1};return this.raiders.push(f),h.userData.raider=f,this.wave.spawned+=1,f},wo=function(t,e,i,n=0,s=0){if(!t||t.state==="down")return;t.hp=Math.max(0,t.hp-e);const r=(this.support.power>1,e);if(this.fx?.float(`${Math.round(r)}`,t.x,t.y+t.def.height+.2,t.z,i==="turret"?"#7fb6d6":"#b2698f"),this.fx?.burst(t.x,t.y+t.def.height*.6,t.z,i==="balloon"?"#a9e2f7":"#e7dfc4",6,{spread:.8,up:1.2}),n>0&&(t.slow=Math.max(t.slow,n),t.slowT=Math.max(t.slowT,1.6)),s>0){const o=t.x-zt.plaza.x,l=t.z-zt.plaza.z,c=Math.max(.001,Math.hypot(o,l));t.x+=o/c*s*.35,t.z+=l/c*s*.35}this.wave&&(i==="turret"?this.wave.turretHits+=1:i==="sling"?this.wave.slingHits+=1:i==="balloon"&&(this.wave.balloonHits+=1)),t.hp<=0&&(t.state="down",t.downT=0,this.wave&&(this.wave.down+=1),this.fx?.burst(t.x,t.y+t.def.height*.5,t.z,"#9b93b3",14,{spread:1.4,up:2}))},Eo=function(t,e=!0){this.root.remove(t.sprite),t.bb?t.bb.dispose():t.sprite.material.dispose(),this.root.remove(t.shadow),t.shadow.geometry.dispose(),t.shadow.material.dispose();const i=this.raiders.indexOf(t);return i>=0&&this.raiders.splice(i,1),e},Ka=function(t,e=0){t.bb?t.bb.mesh.position.set(t.x,t.y+e,t.z):t.sprite.position.set(t.x,t.y+t.def.height/2+e,t.z)},To=function(t,e){if(!t.bb)return;const i=t.state==="attack"?3.4:t.state==="walk"?7:6;t.animT=(t.animT||0)+e*i;const n=`front${Math.floor(t.animT)%4+1}`;n!==t.frameName&&(t.frameName=n,t.bb.setFrame(n))},mm=function(t){let e=null,i=1.05;for(const n of this.structures){if(!n||n.hp<=0)continue;const s=ji(t.x,t.z,n.x,n.z),r=n.kind==="fence"?1.35:.95;s<r&&s<i&&(i=s,e=n)}return e},gm=function(t,e){if(t.state==="down"){t.downT+=e,t.bb&&!t.dying&&(t.dying=!0,t.bb.material.transparent=!0,t.bb.material.depthWrite=!0,t.bb.material.needsUpdate=!0,t.bb.material.opacity=1),_(this,ct,Ka).call(this,t,-Math.min(.3,t.downT*.6)),t.bb?t.bb.material.opacity=Math.max(0,1-t.downT*1.8):t.sprite.material.opacity=Math.max(0,1-t.downT*1.6),t.shadow.material.opacity=Math.max(0,.28-t.downT*.4),t.downT>.55&&_(this,ct,Eo).call(this,t);return}if(t.stun>0){t.stun=Math.max(0,t.stun-e),_(this,ct,Ka).call(this,t,Math.sin(t.stun*30)*.05),_(this,ct,To).call(this,t,e*.4);return}t.slowT>0&&(t.slowT=Math.max(0,t.slowT-e),t.slowT<=0&&(t.slow=0));for(const c of this.decoys)if(!c.used&&ji(t.x,t.z,c.x,c.z)<1.7){c.used=!0,t.stun=Math.max(t.stun,1.8),this.root.remove(c.sprite),c.sprite.material.dispose(),this.fx?.float("어설픈 분신!",c.x,this.terrain.groundY(c.x,c.z)+1.2,c.z,"#8f7bc0"),this.hooks.toast?.("🟣 메타몽 분신이 불청객을 헷갈리게 했어요!",2e3);return}if(t.ignoreStructT>0&&(t.ignoreStructT=Math.max(0,t.ignoreStructT-e)),t.state==="attack"){const c=t.target;if(!c||c.hp<=0)t.state="walk",t.target=null,t.ignoreStructT=.8;else if(ji(t.x,t.z,c.x,c.z)>1.7)t.state="walk",t.target=null,t.ignoreStructT=.8;else{t.attackT+=e;const h=Ha.attackDps*(t.kind==="big"?1.4:1);t.attackT>=.5&&(t.attackT=0,this.fx?.burst(c.x,c.y+.4,c.z,"#d8c7a6",5,{spread:.6,up:1})),_(this,ct,om).call(this,c,h*e),_(this,ct,Ka).call(this,t,Math.sin(performance.now()*.02)*.03),_(this,ct,To).call(this,t,e);return}}let i;t.state==="flee"?i=zt.boat:i=zt.route[Math.min(t.wp,zt.route.length-1)];const n=i.x-t.x,s=i.z-t.z,r=Math.hypot(n,s);if(r<.35){if(t.state==="flee"){_(this,ct,Eo).call(this,t);return}if(t.wp<zt.route.length-1){t.wp+=1;return}}if(t.state==="walk"&&t.ignoreStructT<=0){const c=_(this,ct,mm).call(this,t);if(c){c.kind==="scarecrow"&&!t.tauntRolled&&(t.tauntRolled=!0,t.stun=.5,this.fx?.float("어? 메타몽이다!",c.x,c.y+1.4,c.z,"#8f7bc0")),t.state="attack",t.target=c,t.attackT=0;return}}if(t.state==="walk"&&!t.tauntRolled){for(const c of this.structures)if(!(!c||c.kind!=="scarecrow"||c.hp<=0)&&ji(t.x,t.z,c.x,c.z)<=ke.scarecrow.taunt){t.tauntRolled=!0,t.state="attack",t.target=c,t.attackT=0,this.fx?.float("저기 메타몽!",c.x,c.y+1.5,c.z,"#8f7bc0");return}}const o=t.speed*(t.slow>0?t.slow:1)*(t.state==="flee"?1.5:1),l=Math.min(r,o*e);r>.001&&(t.x+=n/r*l,t.z+=s/r*l);for(const c of this.raiders){if(c===t||c.state==="down")continue;const h=t.x-c.x,d=t.z-c.z,p=h*h+d*d;if(p>.3025||p<1e-6)continue;const f=Math.sqrt(p),g=(.55-f)*.5;t.x+=h/f*g,t.z+=d/f*g}if(t.y=this.terrain.groundY(t.x,t.z),t.bob+=e*8,_(this,ct,Ka).call(this,t,Math.abs(Math.sin(t.bob))*.05),_(this,ct,To).call(this,t,e),t.shadow.position.set(t.x,t.y+.02,t.z),t.state!=="flee"&&ji(t.x,t.z,zt.plaza.x,zt.plaza.z)<=zt.plaza.r-.4){const c=Math.min(this.progress.coins,b1(this.wave?this.wave.day:1));c>0&&this.progress.spendCoins(c),t.stolen=!0,t.state="flee",t.wp=zt.route.length-1,this.wave&&(this.wave.stolen+=c),this.fx?.float(`-${c} 🪙`,t.x,t.y+t.def.height+.3,t.z,"#c0567a"),this.hooks.toast?.(`😿 수집단이 코인 ${c}개를 챙겨 달아나요`,2200),this.safeRing.material.opacity=.95}},vm=function(t){if(!this.wave){this.helperCd.somi=0,this.helperCd.ongi=0;return}for(const e of["somi","ongi"]){const i=this.cats.find(o=>o.id===e);if(!i)continue;const n=Ya[e],s=this.hooks.catLevel?this.hooks.catLevel(e):1,r=y1(s);if(this.helperCd[e]=Math.max(0,this.helperCd[e]-t),!(this.helperCd[e]>0))if(e==="somi"){const o=this.nearestRaider(i.position,n.punchRange);if(!o)continue;this.helperCd.somi=n.cooldown*r.cd,o.stun=Math.max(o.stun,n.punchStun*r.power),_(this,ct,wo).call(this,o,n.punchDamage*r.power,"somi"),this.fx?.float("냥냥 펀치!",o.x,o.y+o.def.height+.35,o.z,"#e78aa8"),i.pet(),this.wave&&(this.wave.somiHits+=1)}else{const o=this.nearestRaider(i.position,n.clawRange);if(!o)continue;this.helperCd.ongi=n.cooldown*r.cd,_(this,ct,wo).call(this,o,n.clawDamage*r.power,"ongi",n.clawSlow),this.fx?.float("할퀴기!",o.x,o.y+o.def.height+.3,o.z,"#9b7ec0"),this.wave&&(this.wave.ongiHits+=1)}}},xm=function(t,e=!0){const i=this.wave;if(!i)return!0;if(e&&(i.t+=t),this.slingCd=Math.max(0,this.slingCd-t),this.balloonCd=Math.max(0,this.balloonCd-t),e&&(i.timer=Math.max(0,i.timer-t)),this.boatT!==null){this.boatT=(this.boatT||0)+t;const s=Math.min(1,this.boatT/Ha.boatIn);this.boat.position.set(zt.boat.x,.35+Math.sin(this.boatT*1.6)*.06,zt.boat.z+2.4*(1-s)),this.boat.material.opacity=Math.min(1,this.boatT*2),s>=1&&(this.boatT=null)}else this.boat.visible&&(this.boat.position.y=.35+Math.sin(performance.now()*.0016)*.06);const n=Ha.firstDelay+i.spawned*Ha.spawnGap;if(i.spawned<i.plan.length&&i.t>=n&&_(this,ct,pm).call(this,i.plan[i.spawned]),e){for(const s of this.structures)if(!(!s||s.kind!=="lamp"||s.hp<=0))for(const r of this.raiders)r.state!=="down"&&ji(r.x,r.z,s.x,s.z)<=ke.lamp.range&&(r.slow=Math.max(r.slow,ke.lamp.slow),r.slowT=Math.max(r.slowT,.4));_(this,ct,hm).call(this,t);for(const s of[...this.raiders])_(this,ct,gm).call(this,s,t);_(this,ct,vm).call(this,t)}if(i.spawned>=i.plan.length&&this.raiders.length===0)return _(this,ct,So).call(this),!0;if(i.timer<=0){for(const s of[...this.raiders])s.state!=="flee"&&(s.state="flee",i.fled+=1);if(!this.raiders.length)return _(this,ct,So).call(this),!0}return!1},Za=function(){this.hooks.save?.()};const lu=a=>le[a]?le[a].name:a,cu=a=>le[a]?le[a].icon:"❔";var Vn,fh,_m,bm;class SS{constructor(t){Re(this,Vn);this.game=t}bridge(){const t=this.game,e=t.progress.bridgeState(),i=t.progress.inventory,n=Js,s=Object.values(n).reduce((f,g)=>f+g,0),r=Object.entries(n).reduce((f,[g,y])=>f+Math.min(y,e.invested[g]||0),0),o=s?Math.round(r/s*100):0,l=Object.entries(n).every(([f,g])=>(e.invested[f]||0)>=g),c=Object.entries(n).some(([f,g])=>(e.invested[f]||0)<g&&i.count(f)>0),h=Object.entries(n).map(([f,g])=>{const y=i.count(f),m=Math.min(g,e.invested[f]||0),v=m>=g;return u("div",{class:`req-row ${v?"done":""}`},u("span",{class:"ico"},cu(f)),u("div",{class:"info"},u("div",{class:"nm"},`${lu(f)}${v?" ✓":""}`),u("div",{class:"sub"},`가방 ${y}개 · 창고 ${i.stored(f)}개`)),u("span",{class:`need ${y+(e.invested[f]||0)>=g?"ok":"lack"}`},`${m}/${g}`))}),d=e.built?u("div",{},u("div",{class:"done-banner"},"🌉 다리 완성",u("div",{class:"sub"},"강 위로 널빤지 데크가 놓였어요.")),u("div",{class:"hint"},"이제 다리 위를 걸어 북쪽 개척권으로 건널 수 있어요 — 빼곡한 숲 · 채석장 · 논이 기다려요.")):u("div",{},u("div",{class:"hint"},"강이 남쪽 생활권과 북쪽 개척권을 갈라 놓았어요. 통나무와 돌을 모아 다리를 놓으면 걸어서 건널 수 있어요."),_(this,Vn,fh).call(this,o),u("div",{class:"req-list"},...h),u("div",{class:"hint"},l?"재료가 다 모였어요 — [다리 놓기] 를 눌러 주세요.":"재료를 모아 [재료 투입] 으로 하나씩 넣어요. Day 는 기다리지 않아도 돼요."),u("div",{class:"section-label"},"건너편"),u("div",{class:"chips"},u("span",{class:"lchip"},"🌲 빼곡한 숲"),u("span",{class:"lchip"},"🪨 채석장"),u("span",{class:"lchip warm"},"🌾 논"))),p=[];return e.built||(p.push({label:"재료 투입",kind:"ghost",disabled:!c,onClick:()=>t.investBridge()}),p.push({label:"다리 놓기",kind:"primary",disabled:!l,onClick:()=>t.completeBridge()})),p.push({label:"닫기",kind:e.built||!l?"primary":"ghost",onClick:()=>t.modal.close()}),{title:`${$t.icon} ${$t.name}`,subtitle:e.built?"이미 놓인 다리예요":"강 중앙 길목 — 재료만 모으면 바로 놓을 수 있어요",body:d,actions:p}}paddy(){const t=this.game.progress,e=t.toolInfo("water"),i=t.paddyPlots.filter(Boolean).length,n=t.paddyPlots.filter(o=>o&&o.remain<=0).length,s=t.supply("seed_rice"),r=u("div",{class:"farm-grid paddy-grid"});for(let o=0;o<Zt.cols*Zt.rows;o++){const l=_(this,Vn,_m).call(this,o),c=u("div",{class:`farm-cell ${l.state} paddy`,"data-plot":String(o)},u("div",{class:"fc-head"},u("span",{class:"fc-ico"},l.crop?l.crop.icon:"·"),u("span",{class:"fc-name"},l.crop?l.crop.name:"빈 논")),u("div",{class:"fc-stage"},l.label),l.state==="empty"?null:_(this,Vn,fh).call(this,l.pct,l.state==="ripe"?"life":""),_(this,Vn,bm).call(this,o,l));r.append(c)}return{title:"🌾 논",subtitle:`다리 건너 3×2 논 · ${i}칸 심음${n?` · ${n}칸 수확 가능`:""}`,body:u("div",{},u("div",{class:"hint"},"볍씨를 논에 심고 물을 대면 남은 시간이 절반으로 줄어요. 다 여문 벼는 수확 바구니에 담기고, 자판기 [팔기] 에서 쌀로 팔 수 있어요."),u("div",{class:"section-label"},"내 볍씨"),u("div",{class:"chips"},u("span",{class:`lchip ${s>0?"ok":"lack"}`},`🌾 볍씨 ${s}`)),u("button",{class:"btn soft wide",type:"button",onclick:()=>{this.game.life.shopTab="buy",this.game.openVending()}},"🥤 자판기에서 볍씨 사기 (20코인)"),u("div",{class:"section-label"},"🧺 수확 바구니"),u("div",{class:"chips"},...["rice","strawberry","radish","pumpkin"].map(o=>{const l=t.cropCount(o);return u("span",{class:`lchip ${l>0?"warm":""}`},`${Jt[o].icon} ${Jt[o].name} ${l}`)})),u("div",{class:"section-label"},"논 타일"),r,u("div",{class:"section-label"},"물뿌리개"),u("div",{class:"row"},u("div",{},u("div",{class:"label"},`🚿 물뿌리개 Lv.${e.level}`),u("div",{class:"hint"},`한 번에 ${["1칸","한 줄 3칸","6칸"][e.level-1]} · 칸당 기력 ${Me.waterStamina}`)),u("button",{class:"mini",type:"button",onclick:()=>this.game.openUpgrade()},e.maxed?"최대":"강화")),u("div",{class:"hint"},"논은 다리 건너 북쪽 개척권, 이정표 옆에 있어요.")),actions:[{label:"🌱 텃밭 보기",kind:"ghost",onClick:()=>this.game.openFarm()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}paddySeedPicker(t){const e=this.game.progress,i=u("div",{class:"seed-list"});for(const n of Up){const s=Wi[n],r=Jt[s.crop],o=e.supply(n),l=u("button",{class:`mini farm-btn ${o>0?"on":""}`,type:"button"},o>0?"심기":"없음");o<=0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.plantPaddy(t,s.crop)),i.append(u("div",{class:"seed-row"},u("span",{class:"gico"},r.icon),u("div",{class:"gmain"},u("div",{class:"nm"},`${s.name} · ${o}개`),u("div",{class:"meta"},`${Math.round(r.grow)}초 → ${r.name} ${r.yield[0]}~${r.yield[1]}개 · 개당 🪙 ${r.price}`)),l))}return{title:`🌾 ${t+1}번 논에 심기`,subtitle:"볍씨를 논에 뿌려요",body:u("div",{},u("div",{class:"hint"},"볍씨는 자판기 [사기] 탭에서 20코인에 살 수 있어요. 다리 건너 북쪽 개척권의 논에서만 자라요."),i,u("div",{class:"hint"},`지금 기력 ${Math.round(e.stamina)} / 100 · 물주기 한 칸당 ${Me.waterStamina}`)),actions:[{label:"← 논",kind:"ghost",onClick:()=>this.game.openPaddy()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cart(){const t=this.game,e=t.progress,i=e.cartLevel>=sn.maxLevel,n=t.canBuildCart(),s=e.inventory,r=Object.entries(sn.cost).map(([o,l])=>{const c=o==="coin"?e.coins:s.count(o),h=c>=l;return u("div",{class:`req-row ${h?"done":""}`},u("span",{class:"ico"},o==="coin"?"🪙":cu(o)),u("div",{class:"info"},u("div",{class:"nm"},`${o==="coin"?"섬 코인":lu(o)}${h?" ✓":""}`),u("div",{class:"sub"},`가진 것 ${c}개`)),u("span",{class:`need ${h?"ok":"lack"}`},`${l}`))});return{title:"🛒 리어카",subtitle:i?"가방이 넓어졌어요":"짊어지는 가방을 두 배로",body:i?u("div",{},u("div",{class:"done-banner"},"🛒 리어카 완성",u("div",{class:"sub"},sn.desc)),u("div",{class:"row"},u("div",{},u("div",{class:"label"},"가방 칸"),u("div",{class:"hint"},`🎒 ${s.usedSlots()}/${s.slots}칸 사용 중`)),u("span",{class:"hint"},`한 칸 ${Ye.stack}개`)),u("div",{class:"hint"},"이제 캐는 대로 담아도 금방 차지 않아요. 걸어 다니면 리어카가 뒤따라와요.")):u("div",{},u("div",{class:"hint"},sn.desc),u("div",{class:"row"},u("div",{},u("div",{class:"label"},"가방"),u("div",{class:"hint"},`${Ye.slots}칸 → ${Ye.slots+sn.slotsPerLevel}칸`)),u("span",{class:"hint"},`한 칸 ${Ye.stack}개`)),u("div",{class:"section-label"},"필요한 것"),u("div",{class:"req-list"},...r),u("div",{class:"hint"},t.progress.building("workshop").done?"공방 도구방에서 바로 만들어요.":"공방을 먼저 복구해야 만들어요 🔨")),actions:i?[{label:"닫기",kind:"primary",onClick:()=>t.modal.close()}]:[{label:"만들기",kind:"primary",disabled:!n.ok,onClick:()=>t.buildCart()},{label:"닫기",kind:"ghost",onClick:()=>t.modal.close()}]}}}Vn=new WeakSet,fh=function(t,e=""){return u("div",{class:`progress-line ${e}`},u("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},_m=function(t){const i=this.game.progress.paddyPlot(t);if(!i)return{state:"empty",label:"볍씨를 심어 보세요",stage:-1,pct:0,crop:null,st:null};const n=Jt[i.crop]||Jt.rice,s=ma(i),r=Math.round((1-i.remain/Math.max(1,i.total))*100);return{state:i.remain>0?"grow":"ripe",label:i.remain>0?`${["새싹","자라는 중","여무는 중"][Math.max(0,s)]} · ${Math.ceil(i.remain)}초`:"수확 가능",stage:s,pct:r,crop:n,st:i}},bm=function(t,e){if(e.state==="empty"){const s=u("button",{class:"mini farm-btn",type:"button"},"🌾 심기");return s.addEventListener("click",()=>this.game.openPaddySeedPicker(t)),s}if(e.state==="ripe"){const s=u("button",{class:"mini farm-btn on",type:"button"},"🧺 수확");return s.addEventListener("click",()=>this.game.harvestPaddy(t)),s}const i=e.st.watered<Me.maxWater,n=u("button",{class:`mini farm-btn ${i?"water":""}`,type:"button"},i?`💧 물 ${Me.maxWater-e.st.watered}`:"💧 끝");return i||(n.disabled=!0),n.addEventListener("click",()=>this.game.waterPaddy(t)),n};const wS=a=>le[a]?le[a].name:a,ES=a=>le[a]?le[a].icon:"❔";var ws,ym,uh;class TS{constructor(t){Re(this,ws);this.game=t}defense(){const t=this.game,e=t.progress,i=e.defense,n=t.defense?t.defense.waveState():null,s=go(t.state.discovered),r=t.defense?{active:t.defense.evac.active,count:t.defense.evacCount}:{active:!1,count:0},o=Yc(t.state.day),l=zt.periodDays-t.state.day%zt.periodDays,c=i.lastRunDay===t.state.day,h=t.defense?t.defense.slotsInfo():[],d=u("div",{class:"df-slot-list"});for(const m of h)d.append(u("button",{class:`df-slot ${m.kind?"on":""}`,type:"button",onclick:()=>t.openDefenseSlot(m.index)},u("span",{class:"ds-no"},`${m.index+1}`),u("span",{class:"ds-ico"},m.icon),u("div",{class:"ds-main"},u("div",{class:"nm"},m.name),u("div",{class:"meta"},m.kind?`${m.side} · 체력 ${m.hp}/${m.hpMax}`:`${m.side} · 비어 있음`)),u("span",{class:"ds-go"},m.kind?"관리":"설치")));const p=u("div",{class:"chips"},...nr.map(m=>{const v=ke[m],b=i.stock[m]||0;return u("span",{class:`lchip ${b>0?"ok":"lack"}`},`${v.icon} ${v.name} ${b}`)})),f=o?"오늘 밤 상륙 예정":`D-${l} 상륙 예정`;return{title:"🛡️ 불청객 방어전",subtitle:"3일마다 밤 — 부두에서 올라오는 회색 망토 수집단",body:u("div",{},u("div",{class:"df-summary"},u("div",{class:"df-badge"},"🛡️"),u("div",{class:"df-sum-text"},u("div",{class:"nm"},`Day ${t.state.day} · ${f}`),u("div",{class:"meta"},`방어 승 ${i.wins} · 패 ${i.losses} · 쓰러뜨린 불청객 ${i.totalDown}`))),u("div",{class:"hint"},"3일마다 밤, 남쪽 부두로 회색 망토 수집단이 옵니다. 부두~광장 오솔길의 슬롯 5곳에 방어 설비를 세우고, 메타몽을 광장으로 모은 뒤 직접 새총과 물풍선으로 막아 보세요."),u("div",{class:"section-label"},"방어 슬롯 5곳"),d,u("div",{class:"section-label"},"설비 창고"),p,u("div",{class:"row"},u("div",{},u("div",{class:"label"},`📣 메타몽 대피 ${r.active?`${r.count}/${Vi.length}`:"아직"}`),u("div",{class:"hint"},r.active?"광장 안전 울타리 안에 모이고 있어요":"누르면 섬 곳곳의 메타몽이 광장으로 달려와요")),u("button",{class:"mini",type:"button",onclick:()=>t.gatherDittos()},r.active?"다시 모으기":"모으기")),u("div",{class:"section-label"},"모인 메타몽의 변신 보조"),u("div",{class:"chips"},u("span",{class:`lchip ${s.count>0?"ok":""}`},`🟣 발견 ${s.count}/${Vi.length}`),u("span",{class:"lchip warm"},`응원 버프 ×${s.power.toFixed(2)}`),u("span",{class:"lchip"},`🪵 울타리 내구 ×${s.fenceHp.toFixed(2)}`),u("span",{class:"lchip"},`🟣 가짜 분신 ${s.decoys}`),u("span",{class:"lchip"},`🍓 탄약 +${s.ammo}`)),u("div",{class:"chips"},u("span",{class:"lchip"},`${Ya.somi.icon} 솜이 Lv.${e.catRow("somi").level} · ${Ya.somi.desc}`),u("span",{class:"lchip"},`${Ya.ongi.icon} 옹이 Lv.${e.catRow("ongi").level} · ${Ya.ongi.desc}`)),n?u("div",{class:"hint"},`지금 웨이브 진행 중 — 남은 불청객 ${n.left} · ${Math.ceil(n.timer)}초`):u("div",{class:"hint"},c?"오늘 밤 방어는 끝났어요. 슬롯을 손보거나 한 번 더 연습해 볼 수 있어요.":"[지금 방어 시작] 을 누르면 날짜를 기다리지 않고 바로 연습할 수 있어요.")),actions:[{label:"🛠️ 방어 제작",kind:"ghost",onClick:()=>t.openDefenseCraft()},{label:"📣 메타몽 모으기",kind:"ghost",onClick:()=>t.gatherDittos()},n?{label:"닫기",kind:"primary",onClick:()=>t.modal.close()}:{label:"🛡️ 지금 방어 시작",kind:"primary",onClick:()=>t.startDefenseNow()}]}}slot(t){const e=this.game,i=e.progress.defense,n=zt.slots[t],s=e.defense?e.defense.structureAt(t):null,r=e.progress.inventory,o=s?u("div",{class:"df-installed"},u("span",{class:"ico"},s.def.icon),u("div",{class:"main"},u("div",{class:"nm"},s.def.name),u("div",{class:"meta"},s.def.effect||""),_(this,ws,ym).call(this,s.hp/Math.max(1,s.hpMax)*100,"life"),u("div",{class:"hint"},`체력 ${Math.round(s.hp)} / ${Math.round(s.hpMax)}`))):u("div",{class:"hint"},"아직 비어 있는 슬롯이에요. 창고의 설비를 골라 세워 주세요."),l=u("div",{class:"df-pick"});for(const h of nr){const d=ke[h],p=i.stock[h]||0,f=u("button",{class:`mini ${p>0?"on":""}`,type:"button"},p>0?"설치":"없음");(p<=0||s)&&(f.disabled=!0),f.addEventListener("click",()=>e.installStructure(t,h));const g=Object.entries(d.cost).every(([y,m])=>r.count(y)>=m);if(l.append(u("div",{class:"df-pick-row"},u("span",{class:"ico"},d.icon),u("div",{class:"main"},u("div",{class:"nm"},`${d.name} · 창고 ${p}`),u("div",{class:"meta"},d.effect),u("div",{class:"meta"},`${d.desc}`),_(this,ws,uh).call(this,d.cost)),f)),g&&p<=0){const y=u("button",{class:"mini up",type:"button"},"제작");y.addEventListener("click",()=>e.craftStructure(h)),l.lastChild.append(y)}}const c=[];return s&&c.push({label:"회수",kind:"ghost",onClick:()=>e.removeStructure(t)}),c.push({label:"🛡️ 방어 현황",kind:"ghost",onClick:()=>e.openDefense()}),c.push({label:"닫기",kind:"primary",onClick:()=>e.modal.close()}),{title:`${t+1}번 방어 슬롯`,subtitle:`부두~광장 오솔길 ${n.side} — ${s?s.def.name:"비어 있음"}`,body:u("div",{},o,u("div",{class:"section-label"},"창고에서 꺼내 설치"),l,u("div",{class:"hint"},"설치는 재료를 쓰지 않아요 — 공방 [방어 제작] 에서 만든 설비를 여기서 꺼내 세웁니다. 회수하면 창고로 돌아와요.")),actions:c}}craft(){const t=this.game,e=t.progress,i=e.defense,n=e.inventory,s=u("div",{class:"df-pick"});for(const r of nr){const o=ke[r],l=Object.entries(o.cost).filter(([h,d])=>n.count(h)<d),c=u("button",{class:`mini ${l.length?"":"on"}`,type:"button"},l.length?"재료 부족":"제작");l.length&&(c.disabled=!0),c.addEventListener("click",()=>t.craftStructure(r)),s.append(u("div",{class:"df-pick-row"},u("span",{class:"ico"},o.icon),u("div",{class:"main"},u("div",{class:"nm"},`${o.name} · 창고 ${i.stock[r]||0}`),u("div",{class:"meta"},o.effect),u("div",{class:"meta"},v1[r]),_(this,ws,uh).call(this,o.cost)),c))}return{title:"🛠️ 방어 제작",subtitle:"기존 재료만으로 만드는 네 가지 방어 설비",body:u("div",{},u("div",{class:"hint"},"만든 설비는 창고에 담기고, 부두~광장 오솔길의 방어 슬롯 5곳에서 [설치] 합니다. 슬롯은 방어 현황에서도 열 수 있어요."),s,u("div",{class:"section-label"},"무기"),u("div",{class:"chips"},u("span",{class:"lchip ok"},`${nn.sling.icon} ${nn.sling.name} 무제한`),u("span",{class:"lchip warm"},`${nn.balloon.icon} ${nn.balloon.name} 꽃잎 1 → ${nn.balloon.shots}발`)),u("div",{class:"hint"},"방어전 중에는 화면 오른쪽에 무기 두 개가 뜹니다. 액션 버튼도 가장 가까운 불청객에게 새총을 쏴요.")),actions:[{label:"🛡️ 방어 현황",kind:"ghost",onClick:()=>t.openDefense()},{label:"닫기",kind:"primary",onClick:()=>t.modal.close()}]}}result(t){const e=this.game,i=e.progress.defense,n=t.victory?qf.victory:qf.partial,s=t.reward||{},r=(o,l)=>u("div",{class:"row"},u("div",{class:"label"},o),u("span",{class:"hint"},String(l)));return{title:`${n.icon} ${n.title}`,subtitle:n.sub,body:u("div",{},u("div",{class:"df-result"},u("span",{class:"ico"},n.icon),u("div",{class:"main"},u("div",{class:"nm"},`Day ${t.day} 방어전`),u("div",{class:"meta"},t.victory?"수집단이 빈손으로 돌아갔어요":"건물과 작물은 그대로예요"))),r("불청객",`${t.total}명 중 ${t.down}명 쓰러뜨림`),r("포탑 명중",`${t.turretHits}회`),r("솜이 냥냥 펀치",`${t.somiHits}회`),r("옹이 할퀴기",`${t.ongiHits}회`),r("빼앗긴 코인",`${t.stolen}개`),t.victory?u("div",{},u("div",{class:"section-label"},"보상"),u("div",{class:"chips"},u("span",{class:"lchip warm"},`🪙 ${s.coin}`),u("span",{class:"lchip warm"},`⭐ ${s.star}`),s.seedCount?u("span",{class:"lchip ok"},`🌱 희귀 씨앗 ${s.seedCount}`):null),u("div",{class:"hint"},"다음 상륙까지 3일 — 슬롯을 손보거나 더 튼튼하게 만들어 두세요.")):u("div",{class:"hint"},"코인 일부만 챙겨 갔어요. 다음엔 울타리와 포탑을 슬롯에 세워 두면 훨씬 수월해요."),u("div",{class:"hint"},`누적 — 방어 승 ${i.wins} · 패 ${i.losses} · 포탑 명중 ${i.turretHits}`)),actions:[{label:"🛡️ 슬롯 관리",kind:"ghost",onClick:()=>e.openDefense()},{label:"닫기",kind:"primary",onClick:()=>e.modal.close()}]}}}ws=new WeakSet,ym=function(t,e=""){return u("div",{class:`progress-line ${e}`},u("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},uh=function(t){const e=this.game.progress.inventory;return u("div",{class:"chips"},...Object.entries(t).map(([i,n])=>{const s=e.count(i);return u("span",{class:`lchip ${s>=n?"ok":"lack"}`},`${ES(i)} ${wS(i)} ${n} (${s})`)}))};const hu={muted:!1,timeScale:1,fps30:!1},du=[1,10,60];var P,Mm,Sm,wm,Em,Tm,Am,Rm,ph,Cm,Ao,Pm,Lm,mh,Ja,Qa,Dm,Im,Nm,km,gh,Um,Fm,Om,zm,vh,xh,Bm,RS,Gm,Lt,Hm,Vm,Mt,Wm,tn,_h,sa,kn,Ro,$m,Co,Xm,qm,Ym,Km,gs,bh,yh,Po,Mh,Zm;class AS{constructor(t,e){Re(this,P);this.canvas=t,this.uiRoot=e,this.mode="boot",this.state={day:1,elapsed:120,discovered:[],settings:{...hu}},this.saveStore=new C1,this.audio=new zM,this.saveData=null,this.hasSave=!1,this.lastSavedAt=0,this.progress=new Bp,this.gathering=null,this.drops=null,this.fx=null,this.panels=null,this.life=null,this.fishing=null,this.farming=null,this.paddy=null,this.bridge=null,this.phase3=null,this.phase4=null,this.phase5=null,this.defense=null,this.minimap=null,this.achAcc=0,this.welcomeAcc=0,this.somiPickAcc=0,this.invasionWarnedDay=0,this.cartSprite=null,this.fishTarget=null,this.nodeMeshes=[],this.siteMeshes=[],this.keys=new Set,this.paused=!1,this.contextLost=!1,this.target=null,this.last=0,this.acc30=0,this.autosaveAcc=0,this.hudAcc=0,this.frames=0,this.fpsAcc=0,this.fps=0,this.stats={fps:0,calls:0,triangles:0,sceneCalls:0,sceneTriangles:0},this.titleAngle=0,this.lookAt=new k,this.tmpA=new k,this.tmpB=new k,this.raycaster=new Dg,this.tap={x:0,y:0,t:0},this.title=null,this.hud=null,this.modal=null}async start(){this.atlases=await V1(),_(this,P,Mm).call(this),_(this,P,Sm).call(this),_(this,P,wm).call(this),_(this,P,Em).call(this),_(this,P,Tm).call(this),_(this,P,Am).call(this),await _(this,P,Rm).call(this),_(this,P,Im).call(this)}async backToTitle(){this.modal.close(),await this.save(),this.mode="title",this.hasSave=!0,this.hud.hide(),this.hud.joystick.setEnabled(!1),_(this,P,ph).call(this),this.title&&this.title.setProgress(1)}interact(){if(this.mode!=="play"||this.modal.isOpen||this.paused)return;if(this.fishing&&this.fishing.active){this.fishing.reel(),_(this,P,Lt).call(this);return}const t=this.target;if(!t){this.hud.toast("가까이에 살펴볼 게 없어요 — 나무나 바위를 두드려 보세요 🪓",1700);return}if(t.isNode){this.gathering.hit(t),_(this,P,Lt).call(this);return}if(t.kind==="raider"){this.defense.fire("sling").ok||this.audio.sfxDeny(),_(this,P,Lt).call(this);return}if(t.kind==="plot"){_(this,P,$m).call(this,t.index);return}if(t.kind==="paddy"){_(this,P,Xm).call(this,t.index);return}if(t.kind==="bridge"){this.openBridge();return}if(t.kind==="defense_slot"){this.openDefenseSlot(t.index);return}if(t.kind==="site"){_(this,P,vh).call(this,t);return}if(t.kind==="fish"){this.openFishSpot();return}_(this,P,xh).call(this,t)}toggleMute(){return this.state.settings.muted=!this.state.settings.muted,this.audio.setMuted(this.state.settings.muted),this.hud.setMuted(this.state.settings.muted),this.state.settings.muted}openPause(){if(this.mode!=="play"||this.modal.isOpen)return;const t=this.state.settings,e=Xa(this.state.elapsed),i=u("button",{class:`switch ${t.muted?"on":""}`,type:"button","aria-label":"음소거"});i.addEventListener("click",()=>{const h=this.toggleMute();i.classList.toggle("on",h)});const n=[],s=u("div",{class:"seg"});for(const h of du){const d=u("button",{type:"button",class:t.timeScale===h?"on":""},`${h}×`);d.addEventListener("click",()=>{this.state.settings.timeScale=h;for(const p of n)p.classList.remove("on");d.classList.add("on"),_(this,P,Lt).call(this)}),n.push(d),s.append(d)}const r=u("button",{class:`switch ${t.fps30?"on":""}`,type:"button","aria-label":"30fps 절전"});r.addEventListener("click",()=>{this.state.settings.fps30=!this.state.settings.fps30,r.classList.toggle("on",this.state.settings.fps30)});const o=(h,d,p)=>u("div",{class:"row"},u("div",{},u("div",{class:"label"},h),u("div",{class:"hint"},d)),p),l=this.lastSavedAt?new Date(this.lastSavedAt).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"}):"아직 없음",c=u("div",{},u("div",{class:"section-label"},"지금 섬"),u("div",{class:"row"},u("div",{},u("div",{class:"label"},`Day ${this.state.day} · ${e.label}`),u("div",{class:"hint"},`도감 ${this.state.discovered.length}/${Vi.length} · 고양이 ${this.cats.length}마리`)),u("span",{class:"hint"},Af(this.state.elapsed))),u("div",{class:"section-label"},"설정"),o("음소거","섬의 소리를 끕니다",i),o("시간 배속","20분 하루를 빨리 감아 조명 변화를 확인",s),o("30fps 절전","배터리와 발열을 아껴요",r),u("div",{class:"section-label"},"저장"),u("div",{class:"hint"},`자동 저장 · ${this.saveStore.mode==="idb"?"IndexedDB":"localStorage"} · 마지막 ${l}`));_(this,P,Mt).call(this,{title:"잠깐 쉬는 중",subtitle:"모달이 열려 있는 동안 섬의 시간도 멈춰요",body:c,actions:[{label:"계속 걷기",kind:"primary",onClick:()=>this.modal.close()},{label:"타이틀로 돌아가기",kind:"ghost",onClick:()=>this.backToTitle()}],onClose:()=>this.save()})}openQuick(t){if(!(this.mode!=="play"||this.modal.isOpen)){if(t==="codex")return this.openCodex();if(t==="rank")return this.openRank();if(t==="bag")return this.openBag();if(t==="farm")return this.openFarm();if(t==="build"&&t==="build"){const e=u("div",{});for(const l of wi){const c=this.progress.building(l.id),h=uo[l.id]||{},d=Object.values(h).reduce((g,y)=>g+y,0),p=Object.entries(h).reduce((g,[y,m])=>g+Math.min(m,c.invested[y]||0),0),f=u("button",{class:`site-item as-button ${c.done?"done":""}`,type:"button",onclick:()=>this.openBuild(l.id)},u("div",{class:"site-ico"},c.done?"✨":l.icon),u("div",{style:{flex:"1"}},u("div",{class:"site-name"},l.name),u("div",{class:"site-meta"},c.done?"복구 완료":`재료 ${p}/${d} 투입`)),u("span",{class:"hint"},c.done?"완료":"복구"));e.append(f)}const i=wi.filter(l=>this.progress.building(l.id).done).length,n=this.progress.bridgeState(),s=Object.entries(Js).every(([l,c])=>(n.invested[l]||0)>=c),r=Object.entries(Js).reduce((l,[c,h])=>l+Math.min(h,n.invested[c]||0),0),o=Object.values(Js).reduce((l,c)=>l+c,0);e.append(u("button",{class:`site-item as-button ${n.built?"done":""}`,type:"button",onclick:()=>this.openBridge()},u("div",{class:"site-ico"},n.built?"✨":"🌉"),u("div",{style:{flex:"1"}},u("div",{class:"site-name"},"다리 (강 건너 개척권)"),u("div",{class:"site-meta"},n.built?"건널 수 있어요":s?"재료가 모였어요":`재료 ${r}/${o} 투입`)),u("span",{class:"hint"},n.built?"완성":"놓기"))),_(this,P,Mt).call(this,{title:"섬 건축",subtitle:`네 곳 중 ${i}곳 복구 · 다리 ${n.built?"완성":"미완성"}`,body:u("div",{},e,u("div",{class:"section-label"},"Tip"),u("div",{class:"hint"},"Day 를 기다릴 필요 없어요 — 재료만 모이면 Day 1에도 바로 복구합니다. 공방을 복구하면 창고가 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}}}openBag(){this.mode==="play"&&_(this,P,Mt).call(this,this.panels.bag())}openStorage(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 창고가 열려요 🔨",2200);return}_(this,P,Mt).call(this,this.panels.storage())}}openBuild(t){this.mode==="play"&&_(this,P,Mt).call(this,this.panels.build(t))}openWorkshop(){this.mode==="play"&&_(this,P,Mt).call(this,this.panels.workshopMenu())}openMailbox(t=null){this.mode==="play"&&(this.questSource="mail",t&&this.progress.markRead(t),_(this,P,Mt).call(this,this.panels.mailbox(t)),_(this,P,Lt).call(this))}eatBerry(){if(this.mode!=="play")return!1;const t=this.progress.inventory;if(t.count("berry")<=0)return this.audio.sfxDeny(),this.hud.toast("가방에 열매가 없어요 🍓 — 나무 밑을 살펴보세요",2e3),!1;if(this.progress.stamina>=vi.max)return this.hud.toast("기력이 이미 가득해요 💪",1600),!1;t.take("berry",1),this.progress.restStamina(vi.eat),this.audio.sfxEat();const e=this.player.position;return this.fx&&this.fx.float(`+${vi.eat} 기력`,e.x,e.y+1.7,e.z,"#6f9450"),this.hud.toast(`열매를 먹었어요 — 기력 +${vi.eat}`,1800),_(this,P,Lt).call(this),this.save(),this.modal.isOpen&&_(this,P,Mt).call(this,this.panels.bag()),!0}moveToStorage(t,e="all"){this.progress.inventory.toStorage(t,e)>0?(this.audio.sfxUi(),this.save()):this.audio.sfxDeny(),_(this,P,Mt).call(this,this.panels.storage())}moveFromStorage(t,e="all"){this.progress.inventory.fromStorage(t,e)>0?(this.audio.sfxUi(),this.save()):(this.audio.sfxDeny(),this.hud.toast("가방이 가득 차서 꺼내지 못했어요",1800)),_(this,P,Mt).call(this,this.panels.storage())}invest(t){const e=this.progress.building(t),i=uo[t]||{},n=this.progress.inventory;let s=0;for(const[r,o]of Object.entries(i)){const l=o-(e.invested[r]||0);if(l<=0)continue;const c=n.take(r,l);c>0&&(e.invested[r]=(e.invested[r]||0)+c,s+=c)}if(s>0){this.audio.sfxBuild();const r=wi.find(o=>o.id===t);r&&this.fx&&this.fx.burst(r.x,r.y+r.height*.5,r.z,"#ffe3b0",12,{spread:1.6,up:2.2}),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.panels.build(t))}else this.audio.sfxDeny(),this.hud.toast("넣을 재료가 부족해요 — 채집해 올까요? 🪓",2e3)}completeBuild(t){const e=this.progress.building(t),i=uo[t]||{};if(!Object.entries(i).every(([r,o])=>(e.invested[r]||0)>=o)||e.done)return!1;const s=wi.find(r=>r.id===t);return e.done=!0,this.world.scenery.setBuilt(t,!0),this.landmarkLabels.setDone(t,!0),this.audio.sfxFanfare(),s&&this.fx&&(this.fx.burst(s.x,s.y+s.height*.55,s.z,"#ffe6a8",34,{spread:3.2,up:4.4,size:1.3}),this.fx.float("복구 완료!",s.x,s.y+s.height*.9,s.z,"#b2698f")),this.hud.toast(`🎉 ${s?s.name:t} 복구 완료!`,3200),t==="workshop"?setTimeout(()=>this.hud.toast("공방이 열렸어요 — 창고·요리·도구 강화를 쓸 수 있어요 📦",3e3),900):t==="dock"?setTimeout(()=>this.hud.toast("부두 끝에서 [낚시하기] — 찌를 던져 볼까요? 🎣",3e3),900):t==="vending"&&setTimeout(()=>this.hud.toast("자판기가 켜졌어요 — 재료와 물고기를 팔고 물건을 살 수 있어요 🥤",3e3),900),this.save(),_(this,P,Lt).call(this),this.checkAchievements(),_(this,P,Mt).call(this,this.panels.build(t)),!0}claimGift(t){const e=Bo.find(s=>s.id===t);if(!e||!e.gift||this.progress.isClaimed(t))return!1;const i=this.progress.inventory;let n=0;for(const[s,r]of Object.entries(e.gift)){if(!le[s]){Wi[s]&&this.progress.addSupply(s,r);continue}const o=i.add(s,r);o>0&&(i.storage[s]=(i.storage[s]||0)+o,n+=o)}return this.progress.markClaimed(t),this.progress.markRead(t),this.audio.sfxPickup(),this.hud.toast(n>0?`선물을 받았어요 — 가방이 가득해 ${n}개는 창고에 넣었어요 🎁`:"선물을 받았어요 🎁",2800),this.save(),_(this,P,Lt).call(this),_(this,P,gs).call(this),_(this,P,Mt).call(this,this.panels.mailbox(t)),!0}paintDittoThumb(t,e){_(this,P,Wm).call(this,t,e)}openCodex(){this.mode==="play"&&_(this,P,Mt).call(this,this.life.codex())}openRank(){this.mode==="play"&&_(this,P,Mt).call(this,this.life.rank())}openQuest(){this.mode==="play"&&(this.questSource="quest",_(this,P,Mt).call(this,this.life.quests()))}openVending(){if(this.mode==="play"){if(!this.progress.building("vending").done){this.audio.sfxDeny(),this.hud.toast("자판기를 먼저 복구해야 열려요 🥤",2200),_(this,P,Mt).call(this,this.panels.build("vending"));return}_(this,P,Mt).call(this,this.life.vending())}}openCooking(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 요리할 수 있어요 🔨",2200),_(this,P,Mt).call(this,this.panels.build("workshop"));return}_(this,P,Mt).call(this,this.life.cooking())}}openUpgrade(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 도구를 강화할 수 있어요 🔨",2200);return}_(this,P,Mt).call(this,this.life.upgrade())}}openCat(t){this.mode==="play"&&_(this,P,Mt).call(this,this.life.cat(t))}openFarm(){this.mode==="play"&&_(this,P,Mt).call(this,this.phase3.farm())}openSeedPicker(t){this.mode==="play"&&_(this,P,Mt).call(this,this.phase3.seedPicker(t))}openAchievements(){this.mode==="play"&&_(this,P,Mt).call(this,this.phase3.achievements())}openMinimap(){this.mode==="play"&&this.minimap&&_(this,P,Mt).call(this,{title:"🗺️ 섬 지도",subtitle:"사각 섬 72×72 — 강과 다리, 남쪽 생활권과 북쪽 개척권",body:this.minimap.modalBody(),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]})}plantPlot(t,e){if(!this.farming)return!1;const i=this.farming.plotByIndex(t),n=this.farming.plant(i,e);if(!n.ok){this.audio.sfxDeny();const s=n.reason==="seed"?"그 씨앗이 없어요 — 자판기 [사기] 탭에서 사 올까요? 🌱":n.reason==="occupied"?"이미 자라고 있는 밭이에요":"지금은 심을 수 없어요";return this.hud.toast(s,2200),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase3.seedPicker(t)),!1}return _(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase3.farm()),!0}waterPlot(t){if(!this.farming)return!1;const e=this.farming.plotByIndex(t),i=this.progress.toolLevel("water"),n=this.farming.water(e,i);if(n.ok)this.hud.toast(`💧 ${n.watered}칸에 물을 줬어요 — 남은 시간 절반! (기력 -${n.cost})`,2300);else{this.audio.sfxDeny();const s=n.reason==="stamina"?`기력이 부족해요 — 물주기에 ${n.cost} 필요해요 💪`:n.reason==="max"?"물을 줄 만큼 준 밭이에요 — 이제 기다리면 익어요":"지금은 물을 줄 밭이 없어요";this.hud.toast(s,2200)}return _(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase3.farm()),n.ok}harvestPlot(t){if(!this.farming)return!1;const e=this.farming.plotByIndex(t),i=this.farming.harvest(e);return i.ok||(this.audio.sfxDeny(),this.hud.toast(i.reason==="growing"?"아직 덜 자랐어요 — 조금만 기다려요 🌱":"빈 밭이에요",2e3)),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase3.farm()),i.ok}openBridge(){this.mode==="play"&&_(this,P,Mt).call(this,this.phase4.bridge())}investBridge(){const t=this.progress.bridgeState(),e=this.progress.inventory;let i=0;for(const[n,s]of Object.entries(Js)){const r=s-(t.invested[n]||0);if(r<=0)continue;const o=e.take(n,r);o>0&&(t.invested[n]=(t.invested[n]||0)+o,i+=o)}i>0?(this.audio.sfxBuild(),this.fx&&this.fx.burst($t.x,$t.deckY+.7,$t.z+$t.halfSpan-.6,"#ffe3b0",12,{spread:1.6,up:2.2}),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.phase4.bridge())):(this.audio.sfxDeny(),this.hud.toast("넣을 재료가 부족해요 — 통나무와 돌을 모아 올까요? 🪓",2200))}completeBridge(){const t=this.progress.bridgeState();return!Object.entries(Js).every(([i,n])=>(t.invested[i]||0)>=n)||t.built?!1:(t.built=!0,t.invested={},_(this,P,Ja).call(this,!1),this.audio.sfxFanfare(),this.fx&&(this.fx.burst($t.x,$t.deckY+.8,$t.z,"#ffe6a8",34,{spread:3.2,up:4,size:1.3}),this.fx.float("다리 완성!",$t.x,$t.deckY+1.6,$t.z+1.4,"#b2698f")),this.hud.toast("🌉 다리가 놓였어요 — 이제 북쪽 숲·채석장·논으로 걸어서 건널 수 있어요!",3400),this.save(),_(this,P,Lt).call(this),this.checkAchievements(),_(this,P,gs).call(this),_(this,P,Mt).call(this,this.phase4.bridge()),!0)}openPaddy(){this.mode==="play"&&_(this,P,Mt).call(this,this.phase4.paddy())}openPaddySeedPicker(t){this.mode==="play"&&_(this,P,Mt).call(this,this.phase4.paddySeedPicker(t))}plantPaddy(t,e="rice"){if(!this.paddy)return!1;const i=this.paddy.plotByIndex(t),n=this.paddy.plant(i,e);if(!n.ok){this.audio.sfxDeny();const s=n.reason==="seed"?"볍씨가 없어요 — 자판기 [사기] 탭에서 사 올까요? 🌾":n.reason==="occupied"?"이미 벼가 자라고 있는 논이에요":"지금은 심을 수 없어요";return this.hud.toast(s,2200),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase4.paddySeedPicker(t)),!1}return _(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase4.paddy()),!0}waterPaddy(t){if(!this.paddy)return!1;const e=this.paddy.plotByIndex(t),i=this.progress.toolLevel("water"),n=this.paddy.water(e,i);if(n.ok)this.hud.toast(`💧 논 ${n.watered}칸에 물을 댔어요 — 남은 시간 절반! (기력 -${n.cost})`,2300);else{this.audio.sfxDeny();const s=n.reason==="stamina"?`기력이 부족해요 — 물주기에 ${n.cost} 필요해요 💪`:n.reason==="max"?"물을 줄 만큼 준 논이에요 — 이제 기다리면 여물어요":"지금은 물을 줄 논이 없어요";this.hud.toast(s,2200)}return _(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase4.paddy()),n.ok}harvestPaddy(t){if(!this.paddy)return!1;const e=this.paddy.plotByIndex(t),i=this.paddy.harvest(e);return i.ok||(this.audio.sfxDeny(),this.hud.toast(i.reason==="growing"?"아직 덜 여물었어요 — 조금만 기다려요 🌾":"빈 논이에요",2e3)),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase4.paddy()),i.ok}canBuildCart(){if(this.progress.cartLevel>=sn.maxLevel)return{ok:!1,reason:"max",lack:[]};if(!this.progress.building("workshop").done)return{ok:!1,reason:"workshop",lack:[]};const t=[];for(const[e,i]of Object.entries(sn.cost)){const n=e==="coin"?this.progress.coins:this.progress.inventory.count(e);n<i&&t.push({id:e,need:i,have:n})}return{ok:t.length===0,reason:t.length?"lack":"",lack:t}}openCart(){this.mode==="play"&&_(this,P,Mt).call(this,this.phase4.cart())}buildCart(){const t=this.canBuildCart();if(!t.ok){this.audio.sfxDeny();const i=t.reason==="max"?"이미 리어카가 있어요 🛒":t.reason==="workshop"?"공방을 먼저 복구해야 리어카를 만들 수 있어요 🔨":"재료나 코인이 부족해요 🪙";return this.hud.toast(i,2400),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase4.cart()),!1}for(const[i,n]of Object.entries(sn.cost))i==="coin"?this.progress.spendCoins(n):this.progress.inventory.take(i,n);this.progress.cartLevel=1,_(this,P,Qa).call(this),this.audio.sfxBuild();const e=this.player.position;return this.fx&&(this.fx.burst(e.x,e.y+.9,e.z,"#ffe3b0",20,{spread:1.6,up:2.6}),this.fx.float("🛒 리어카 완성",e.x,e.y+2,e.z,"#b2698f")),this.hud.toast(`🛒 리어카 완성 — 가방이 ${Ye.slots}칸 → ${this.progress.inventory.slots}칸으로 늘었어요!`,3200),this.save(),_(this,P,Lt).call(this),this.checkAchievements(),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase4.cart()),!0}openDefense(){this.mode==="play"&&_(this,P,Mt).call(this,this.phase5.defense())}openDefenseSlot(t){this.mode==="play"&&_(this,P,Mt).call(this,this.phase5.slot(t))}openDefenseCraft(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 방어 설비를 만들 수 있어요 🔨",2200);return}_(this,P,Mt).call(this,this.phase5.craft())}}craftStructure(t){const e=ke[t];if(!e)return!1;const i=this.progress.inventory,n=Object.entries(e.cost).filter(([o,l])=>i.count(o)<l);if(n.length){this.audio.sfxDeny();const o=n.map(([l,c])=>`${le[l]?le[l].name:l} ${c}`).join(" · ");return this.hud.toast(`재료가 부족해요 — ${o}`,2400),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase5.craft()),!1}for(const[o,l]of Object.entries(e.cost))i.take(o,l);const s=this.progress.defense;s.stock[t]=Math.min(9,(s.stock[t]||0)+1),this.audio.sfxBuild();const r=this.player.position;return this.fx&&(this.fx.burst(r.x,r.y+.9,r.z,"#ffe3b0",12,{spread:1.2,up:2}),this.fx.float(`${e.icon} ${e.name}`,r.x,r.y+1.9,r.z,"#b2698f")),this.hud.toast(`${e.icon} ${e.name} 제작! 슬롯에서 [설치] 하세요 (창고 ${s.stock[t]}개)`,2600),this.save(),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase5.craft()),!0}installStructure(t,e){const i=this.progress.defense,n=ke[e];if(!i||!n)return!1;if(this.defense.waveActive)return this.audio.sfxDeny(),this.hud.toast("방어전 중에는 슬롯을 바꿀 수 없어요 🛡️",2e3),!1;if(i.slots[t])return this.audio.sfxDeny(),this.hud.toast("이미 설비가 있는 슬롯이에요 — 먼저 [회수] 해 주세요",2e3),!1;if((i.stock[e]||0)<=0)return this.audio.sfxDeny(),this.hud.toast(`창고에 ${n.name}이 없어요 — 공방 [방어 제작] 에서 만들어요`,2400),!1;i.stock[e]-=1,this.defense.placeStructure(t,e),this.audio.sfxBuild();const s=zt.slots[t];return this.fx&&this.fx.burst(s.x,this.world.terrain.groundY(s.x,s.z)+.6,s.z,"#ffe3b0",12,{spread:1.2,up:2}),this.hud.toast(`${n.icon} ${n.name} — ${t+1}번 슬롯에 설치!`,2200),this.save(),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase5.slot(t)),!0}removeStructure(t){if(this.defense.waveActive)return this.audio.sfxDeny(),this.hud.toast("방어전 중에는 회수할 수 없어요 🛡️",2e3),!1;const e=this.defense.structureAt(t);if(!e)return!1;const i=e.kind,n=ke[i];this.defense.removeStructure(t);const s=this.progress.defense;return s.stock[i]=Math.min(9,(s.stock[i]||0)+1),this.audio.sfxUi(),this.hud.toast(`${n.icon} ${n.name}을 회수했어요 — 창고에 담았습니다`,2e3),this.save(),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase5.slot(t)),!0}startDefenseNow(){return this.mode!=="play"||!this.defense?!1:this.defense.waveActive?(this.hud.toast("이미 방어전이 진행 중이에요 🛡️",1800),!1):(this.modal.isOpen&&this.modal.close(),this.defense.startWave(this.state.day,"manual").ok?(this.audio.sfxRare(),_(this,P,Lt).call(this),!0):(this.audio.sfxDeny(),!1))}gatherDittos(){if(this.mode!=="play"||!this.defense)return!1;const t=this.defense.gatherDittos();return t.ok?(this.audio.sfxRare(),this.hud.toast("📣 메타몽 모으기! 섬 곳곳의 메타몽이 광장으로 달려와요",2600),this.save(),_(this,P,Lt).call(this),this.modal.isOpen&&this.modal.close(),!0):(this.audio.sfxDeny(),this.hud.toast(t.reason==="active"?"방어전이 시작됐어요 — 지금은 모을 수 없어요":"모을 메타몽이 없어요",2200),!1)}fireWeapon(t="sling"){if(this.mode!=="play"||!this.defense||this.modal.isOpen||this.paused)return!1;const e=this.defense.fire(t);return e.ok?(t==="balloon"?this.audio.sfxSplash(2):this.audio.sfxHit("rock"),_(this,P,Lt).call(this),!0):(e.reason==="petal"?(this.audio.sfxDeny(),this.hud.toast("꽃잎이 없어요 — 꽃덤불에서 꽃잎을 모아 올까요? 🌸",2200)):e.reason==="none"?(this.audio.sfxDeny(),this.hud.toast("사거리 안에 불청객이 없어요 🎯",1600)):e.reason==="cooldown"?this.audio.sfxUi():e.reason==="idle"&&this.hud.toast("지금은 방어전 중이 아니에요",1600),_(this,P,Lt).call(this),!1)}openWelcome(){if(this.mode!=="play")return;const t=this.progress.welcome||{step:0},e=Fi.steps.map((i,n)=>{const s=n<t.step,r=n===t.step;return u("div",{class:`welcome-row ${s?"done":r?"cur":""}`},u("span",{class:"wico"},s?"✅":i.icon),u("div",{class:"wmain"},u("div",{class:"nm"},`${n+1}. ${i.label}`),u("div",{class:"meta"},i.hint||"")),u("span",{class:"wtag"},s?"완료":r?"지금":"다음"))});_(this,P,Mt).call(this,{title:"🎯 섬의 첫걸음",subtitle:`3단계를 마치면 단계마다 🪙 ${Fi.reward}`,body:u("div",{},u("div",{class:"welcome-list"},...e),u("div",{class:"hint"},`지금 ${t.step}/${Fi.steps.length} 단계 · 위에서부터 차례로 완료돼요`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]})}checkAchievements(){this.progress.discoveredCount=this.state.discovered.length;const t=this.progress.checkAchievements();if(!t.length)return[];if(this.audio.sfxFanfare?.(),t.length===1){const e=t[0];this.hud.toast(`🏆 업적 달성 — ${e.name}! 랭크에서 보상을 받을 수 있어요`,3e3);const i=this.player.position;this.fx&&this.fx.float(`🏆 ${e.name}`,i.x,i.y+1.95,i.z,"#b2698f")}else this.hud.toast(`🏆 업적 ${t.length}개 달성 — ${t.map(e=>e.name).join(" · ")}`,3400);return _(this,P,Lt).call(this),this.save(),t}claimAchievement(t){const e=this.progress.claimAchievement(t);if(!e.ok)return this.audio.sfxDeny(),e.reason==="unfinished"&&this.hud.toast("아직 조건을 채우지 못했어요",1800),!1;const i=e.row;return this.audio.sfxCoin(),this.hud.toast(`🏆 ${i.name} 보상 — 🪙 ${i.reward.coin}${i.reward.star?` · ⭐ ${i.reward.star}`:""}${e.stored?" (별조각은 창고로)":""}`,2800),_(this,P,Lt).call(this),this.save(),this.modal.isOpen&&_(this,P,Mt).call(this,this.phase3.achievements()),!0}openFishSpot(){if(this.mode!=="play")return;if(!this.progress.building("dock").done){this.audio.sfxDeny(),this.hud.toast("부두를 먼저 복구해야 낚시할 수 있어요 ⚓",2200),_(this,P,Mt).call(this,this.panels.build("dock"));return}if(this.fishing.active){this.fishing.reel();return}const t=this.progress,e=t.supply("bait"),i=u("div",{},u("div",{class:"hint"},"부두 끝으로 찌를 던져요. 물결이 퍼지다 입질이 오면 1.4초 안에 화면을 탭!"),u("div",{class:"row"},u("div",{},u("div",{class:"label"},"기력"),u("div",{class:"hint"},`낚시 1회에 ${Qe.stamina} 소모`)),u("span",{class:"hint"},`${Math.round(t.stamina)} / 100`)),u("div",{class:"row"},u("div",{},u("div",{class:"label"},"별빛 미끼"),u("div",{class:"hint"},"희귀 어종 확률이 올라가요")),u("span",{class:"hint"},`${e}개`)),u("div",{class:"section-label"},"오늘의 물빛"),u("div",{class:"chips"},...Object.values(Pi).map(s=>u("span",{class:`lchip ${s.rare?"warm":""}`},`${s.icon} ${s.name}`)))),n=[{label:`🎣 낚시하기 (기력 ${Qe.stamina})`,kind:"primary",onClick:()=>_(this,P,yh).call(this,!1)}];e>0&&n.push({label:"🪱 별빛 미끼 쓰고 낚시",kind:"ghost",onClick:()=>_(this,P,yh).call(this,!0)}),n.push({label:"닫기",kind:"ghost",onClick:()=>this.modal.close()}),_(this,P,Mt).call(this,{title:"🎣 부두 낚시",subtitle:"찌 · 물결 · 그리고 1.4초",body:i,actions:n})}cook(t){const e=this.progress.skills.level("cook"),i=j1(this.progress,t);if(!i.ok)return this.audio.sfxDeny(),this.hud.toast(i.reason==="full"?"기력이 이미 가득해요 💪":"재료가 부족해요 — 채집·낚시로 모아 올까요?",2200),this.modal.isOpen&&_(this,P,Mt).call(this,this.life.cooking()),!1;this.audio.sfxCook();const n=this.player.position;return this.fx.float(`${i.recipe.icon} ${i.recipe.name}`,n.x,n.y+1.8,n.z,"#b2698f"),this.hud.toast(`${i.recipe.icon} ${i.recipe.name} 완성 — 기력 +${i.recipe.stamina}`,2400),i.recipe.buff>0&&setTimeout(()=>this.hud.toast(`✨ ${Go.seconds}초 동안 채집 기력이 가벼워져요`,2600),700),_(this,P,sa).call(this,"cook",1),this.progress.skills.level("cook")>e&&_(this,P,_h).call(this,"cook",this.progress.skills.row("cook").rank),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.life.cooking()),!0}upgradeTool(t){const e=_s[t],i=this.progress.upgradeTool(t);if(!i.ok)return this.audio.sfxDeny(),this.hud.toast(i.reason==="max"?"이미 최고 레벨이에요":"재료나 코인이 부족해요 🪙",2200),this.modal.isOpen&&_(this,P,Mt).call(this,this.life.upgrade()),!1;this.audio.sfxBuild();const n=e.kind==="tree"?"나무":e.kind==="rock"?"바위":"텃밭";this.hud.toast(`${e.icon} ${e.name} Lv.${i.info.level} 강화! ${e.kind==="farm"?`한 번에 ${["1칸","십자 5칸","3×3 9칸"][i.info.level-1]}에 물을 줘요`:`${n}가 더 빨리 캐져요`}`,2600);const s=this.player.position;return this.fx.burst(s.x,s.y+.9,s.z,"#ffe3b0",14,{spread:1.1,up:2}),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.life.upgrade()),!0}sellItem(t,e=1){const i=eS(this.progress,t,e);return i.ok?(this.audio.sfxCoin(),this.hud.toast(`${_n(t)} ${xn(t)} ${i.count}개 → 🪙 ${i.coin}`,2200),_(this,P,sa).call(this,"sell",i.count),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.life.vending()),!0):(this.audio.sfxDeny(),this.hud.toast("팔 수 있는 게 없어요",1800),!1)}buyGood(t){const e=iS(this.progress,t);return e.ok?(this.audio.sfxCoin(),this.hud.toast(`${e.good.icon} ${e.good.name} 구입 — ${e.good.price} 코인`,2200),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.life.vending()),!0):(this.audio.sfxDeny(),this.hud.toast(e.reason==="coin"?"섬 코인이 부족해요 — 자판기에 재료를 팔아 모아 보세요 🪙":"지금은 살 수 없어요",2200),this.modal.isOpen&&_(this,P,Mt).call(this,this.life.vending()),!1)}drinkAde(){return this.progress.supply("ade")<=0?(this.audio.sfxDeny(),!1):this.progress.stamina>=vi.max?(this.hud.toast("기력이 이미 가득해요 💪",1800),!1):(this.progress.takeSupply("ade",1),this.progress.restStamina(nh),this.audio.sfxEat(),this.hud.toast(`🥤 반짝 에이드 — 기력 +${nh}`,2e3),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.life.vending()),!0)}petCat(t){const e=_(this,P,Po).call(this,t),i=oi.find(s=>s.id===t);if(!e||!i)return;if(e.cd.pet>0){this.audio.sfxDeny();return}e.cd.pet=ri.pet.cooldown,e.pet(),this.audio.sfxMeow(),this.progress.restStamina(ri.pet.stamina);const n=this.progress.addAffection(t,ri.pet.aff);_(this,P,tn).call(this,"care",Dn.pet),_(this,P,sa).call(this,"pet",1),_(this,P,Mh).call(this,i,e,n)}feedCat(t,e){const i=_(this,P,Po).call(this,t),n=oi.find(l=>l.id===t),s=ri.snacks[e];if(!i||!n||!s)return;if(i.cd.snack>0){this.audio.sfxDeny(),this.hud.toast(`${n.name}가 방금 간식을 먹었어요 — 조금 뒤에 주세요`,1900);return}if((e==="churu"?this.progress.supply("churu"):e==="berry"?this.progress.inventory.count("berry"):this.progress.fishCount("anchovy"))<=0){this.audio.sfxDeny(),this.hud.toast(`${s.icon} ${s.name}이 없어요${e==="churu"?" — 자판기에서 살 수 있어요":""}`,2200);return}e==="churu"?this.progress.takeSupply("churu",1):e==="berry"?this.progress.inventory.take("berry",1):this.progress.takeFish("anchovy",1),i.cd.snack=s.cooldown,i.feast(),this.audio.sfxMeow();const o=this.progress.addAffection(t,s.aff);_(this,P,tn).call(this,"care",Dn.treat),_(this,P,sa).call(this,"treat",1),this.hud.toast(`${n.name}가 ${s.icon} ${s.name}을 맛있게 먹었어요 · 호감도 +${s.aff}`,2300),_(this,P,Mh).call(this,n,i,o)}toggleFollow(t){const e=this.progress.catRow(t),i=oi.find(r=>r.id===t);if(!e.canFollow){this.audio.sfxDeny(),this.hud.toast(`따라오기는 호감도 Lv.${ri.followLevel}부터예요 (지금 Lv.${e.level})`,2200);return}const n=this.progress.cat(t);n.follow=!n.follow;const s=_(this,P,Po).call(this,t);s&&s.setFollow(n.follow),this.audio.sfxUi(),this.hud.toast(n.follow?`${i?i.name:t}가 따라와요 🐾`:`${i?i.name:t}는 여기서 기다릴게요`,2e3),this.save(),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.life.cat(t))}claimQuest(t){const e=this.progress.claimQuest(t);if(!e.ok)return this.audio.sfxDeny(),!1;const i=e.quest;if(i.reward.star>0){const n=this.progress.inventory.add("star",i.reward.star);n>0&&(this.progress.inventory.storage.star=this.progress.inventory.stored("star")+n)}return this.audio.sfxCoin(),this.hud.toast(`📋 의뢰 완료! 🪙 ${i.reward.coin}${i.reward.star?` · ⭐ ${i.reward.star}`:""}`,2600),this.save(),_(this,P,Lt).call(this),_(this,P,Mt).call(this,this.questSource==="mail"?this.panels.mailbox():this.life.quests()),!0}snapshot(){const t=this.progress.toJSON();return t.nodes=this.gathering?this.gathering.toJSON():{},{version:6,savedAt:Date.now(),day:this.state.day,elapsedSeconds:Math.round(this.state.elapsed*100)/100,elapsed:Math.round(this.state.elapsed*100)/100,playerPos:{x:+this.player.position.x.toFixed(3),y:+(this.player.position.y||0).toFixed(3),z:+this.player.position.z.toFixed(3)},player:{x:+this.player.position.x.toFixed(3),z:+this.player.position.z.toFixed(3),yaw:+this.player.yaw.toFixed(3)},discoveredDittos:[...this.state.discovered],discovered:[...this.state.discovered],settings:{...this.state.settings},...t}}async save(){if(this.mode==="boot")return!1;const t=this.snapshot(),e=await this.saveStore.save(t);return this.lastSavedAt=t.savedAt,this.lastSaveOk=e,e&&(this.hasSave=!0),e}}P=new WeakSet,Mm=function(){const t=new Ty({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=be,t.toneMapping=Yo,t.toneMappingExposure=1.28,t.shadowMap.enabled=!0,t.shadowMap.type=tr,t.info.autoReset=!1,this.renderer=t,this.camera=new zi(fn.fov,window.innerWidth/window.innerHeight,.1,900),this.camera.position.set(0,28,48),this.onResize=()=>{const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/Math.max(1,i),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,i,!1),this.post&&this.post.setSize(e,i)},window.addEventListener("resize",this.onResize),window.visualViewport&&window.visualViewport.addEventListener("resize",this.onResize)},Sm=function(){this.world=new kM(this.atlases),this.scene=this.world.scene,this.player=new BM(Un,this.world.terrain,this.atlases),this.player.colliders=[...this.world.scenery.colliders,...Vi.map(t=>({x:t.x,z:t.z,r:Math.max(.34,t.height*.42)})),...oi.map(t=>({x:t.x,z:t.z,r:.3}))],this.scene.add(this.player.group),this.scene.add(this.player.shadow),this.scene.add(this.player.dust),this.cats=oi.map(t=>new VM(t,this.world.terrain,this.atlases));for(const t of this.cats)this.scene.add(t.group),this.scene.add(t.shadow);this.dittos=Vi.map(t=>new qM(t,this.world.terrain,this.atlases));for(const t of this.dittos)this.scene.add(t.group),this.scene.add(t.shadow);this.spriteMaterials=[...this.player.sprites,...this.cats.flatMap(t=>t.sprites),...this.dittos.flatMap(t=>t.sprites)],this.world.setWeather(Wl(this.state.day)),this.lookAt.set(Un.x,this.player.position.y+fn.lookHeight,Un.z),this.fx=new Q1(this.scene,this.uiRoot),this.drops=new J1(this.scene,this.world.terrain),this.gathering=new X1({scenery:this.world.scenery,progress:this.progress,drops:this.drops,fx:this.fx,audio:this.audio}),this.gathering.hooks={toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPickup:()=>_(this,P,Lt).call(this),onHit:t=>{t==="tree"?_(this,P,kn).call(this,"chop",1):t==="rock"&&_(this,P,kn).call(this,"mine",1)},onHarvest:(t,e)=>{_(this,P,tn).call(this,"gather",Dn.harvest),(t==="tree"||t==="rock"||t==="flower")&&this.progress.bump(t,1),e&&e.petal&&_(this,P,kn).call(this,"petal",e.petal),_(this,P,Lt).call(this),this.checkAchievements(),_(this,P,gs).call(this)}},this.nodeMeshes=this.world.scenery.nodes.map(t=>t.mesh),this.siteMeshes=this.world.scenery.sites.map(t=>t.billboard.mesh),this.fishing=new Y1({progress:this.progress,audio:this.audio,fx:this.fx,scene:this.scene,hud:null,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onCatch:(t,e)=>{this.audio.sfxCoin(),_(this,P,tn).call(this,"fish",Qe.exp),_(this,P,kn).call(this,"fish",1);const i=this.progress.fishCount(t.id)+(t.id==="star",0)===1;this.hud.toast(`${t.icon} ${t.name} ${t.id==="star"?"":`${e}cm`} 낚았다!${i?" 도감 등록 📔":""}`,2600),_(this,P,Lt).call(this),this.save()},onStart:()=>_(this,P,Lt).call(this)}}),this.farming=new rS({terrain:this.world.terrain,progress:this.progress,fx:this.fx,audio:this.audio,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPlant:()=>{_(this,P,tn).call(this,"farm",Dn.plant),_(this,P,kn).call(this,"plant",1,!1)},onWater:()=>{_(this,P,tn).call(this,"farm",Dn.water)},onHarvest:(t,e)=>{_(this,P,tn).call(this,"farm",Dn.crop),_(this,P,kn).call(this,"crop",1,!1),this.audio.sfxCoin()},onRipe:t=>{t.length&&(this.audio.sfxRare?.(),this.hud?.toast(`✨ 텃밭에 ${t.length}칸이 다 자랐어요 — [수확] 할까요?`,2600),_(this,P,Lt).call(this))}}}),this.scene.add(this.farming.group),this.bridge=new hS(this.world.terrain),this.scene.add(this.bridge.group),this.paddy=new fS({terrain:this.world.terrain,progress:this.progress,fx:this.fx,audio:this.audio,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPlant:()=>{_(this,P,tn).call(this,"farm",Dn.plant),_(this,P,kn).call(this,"plant",1,!1),_(this,P,gs).call(this)},onWater:()=>_(this,P,tn).call(this,"farm",Dn.water),onHarvest:(t,e)=>{_(this,P,tn).call(this,"farm",Dn.crop),_(this,P,kn).call(this,"crop",1,!1),this.audio.sfxCoin()},onRipe:t=>{t.length&&(this.audio.sfxRare?.(),this.hud?.toast(`✨ 논에 벼 ${t.length}칸이 다 여물었어요 — [수확] 할까요?`,2600),_(this,P,Lt).call(this))}}}),this.scene.add(this.paddy.group),this.cartSprite=new li(new je({map:uM(),transparent:!0,depthWrite:!1,toneMapped:!1})),this.cartSprite.scale.set(.72,.72,1),this.cartSprite.visible=!1,this.cartSprite.renderOrder=4,this.scene.add(this.cartSprite),this.spriteMaterials.push(this.cartSprite.material),this.defense=new MS({scene:this.scene,terrain:this.world.terrain,progress:this.progress,player:this.player,cats:this.cats,dittos:this.dittos,fx:this.fx,spriteMaterials:this.spriteMaterials,atlases:this.atlases,camera:this.camera,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},getDiscovered:()=>this.state.discovered,catLevel:t=>this.progress.catRow(t).level,day:()=>this.state.day,onWaveStart:()=>{this.save(),_(this,P,Lt).call(this)},onEvacDone:()=>{this.save(),this.checkAchievements(),_(this,P,Lt).call(this)},onWaveEnd:t=>_(this,P,qm).call(this,t)}})},wm=function(){this.post=Zf(this.renderer,this.scene,this.camera)},Em=function(){this.hud=new QM(this.uiRoot,{onAction:()=>this.interact(),onMute:()=>this.toggleMute(),onPause:()=>this.openPause(),onQuick:t=>this.openQuick(t),onMail:()=>this.openMailbox(),onQuest:()=>this.openQuest(),onWelcome:()=>this.openWelcome(),onDefense:()=>this.openDefense(),onDefenseStart:()=>this.startDefenseNow(),onWeapon:t=>this.fireWeapon(t)}),this.hud.hide(),this.modal=new t1(this.uiRoot),this.landmarkLabels=new e1(this.uiRoot,this.world.scenery.sites),this.panels=new c1(this),this.life=new sS(this),this.phase3=new oS(this),this.phase4=new SS(this),this.phase5=new TS(this),this.minimap=new cS(this.hud.container,this),this.fishing&&(this.fishing.hud=this.hud)},Tm=function(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.tap.x=e.clientX,this.tap.y=e.clientY,this.tap.t=performance.now(),this.audio.resume()}),t.addEventListener("pointerup",e=>_(this,P,Gm).call(this,e)),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),this.mode==="play"&&!this.modal.isOpen&&((e.code==="KeyE"||e.code==="Space")&&this.interact(),e.code==="Escape"&&this.openPause())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("gesturestart",e=>e.preventDefault())},Am=function(){document.addEventListener("visibilitychange",()=>{document.hidden?(this.save(),this.audio.suspend()):(this.last=performance.now(),this.audio.resume())}),window.addEventListener("pagehide",()=>this.save()),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.hud.setContextLost(!0),this.last=performance.now()},!1),this.canvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.hud.setContextLost(!1);try{this.post&&this.post.dispose()}catch{}this.post=Zf(this.renderer,this.scene,this.camera),this.post.setSize(window.innerWidth,window.innerHeight);const t=lp();this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const s of n)s&&s.isMeshToonMaterial&&(s.gradientMap=t,s.needsUpdate=!0)});const e=this.world.sunLight.shadow;e.map&&e.map.dispose(),e.map=null,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const s of n)if(s){s.needsUpdate=!0;for(const r of["map","alphaMap","gradientMap"])s[r]&&(s[r].needsUpdate=!0)}}),this.last=performance.now()},!1)},Rm=async function(){const t=await this.saveStore.load();t&&typeof t=="object"&&(this.saveData=t,this.hasSave=!0),_(this,P,ph).call(this),this.mode="title",_(this,P,gh).call(this,.016);const e=performance.now(),i=()=>{const n=Math.min(1,(performance.now()-e)/720);this.title&&this.title.setProgress(n),n<1&&requestAnimationFrame(i)};requestAnimationFrame(i)},ph=function(){this.title&&this.title.destroy(),this.title=new jM(this.uiRoot,{hasSave:this.hasSave,onContinue:()=>_(this,P,Ao).call(this,!0),onNew:()=>_(this,P,Cm).call(this)})},Cm=function(){if(this.title&&(this.title.busy=!1),!this.hasSave){_(this,P,Ao).call(this,!1);return}this.modal.open({title:"새 섬을 열까요?",subtitle:"지금 저장된 섬은 사라져요",body:"저장된 Day·플레이 위치·도감 기록이 지워지고 Day 1 아침부터 다시 시작해요.",actions:[{label:"그대로 둘게요",kind:"ghost",onClick:()=>this.modal.close()},{label:"새로 시작",kind:"primary",onClick:async()=>{await this.saveStore.clear(),this.hasSave=!1,this.saveData=null,this.modal.close(),_(this,P,Ao).call(this,!1)}}],onClose:()=>{this.title&&(this.title.busy=!1,this.title.hint.textContent="저장된 섬이 있어요 — 이어서 걸어볼까요?")}})},Ao=function(t){t&&this.saveData?_(this,P,Lm).call(this,this.saveData):_(this,P,Pm).call(this),this.mode="play",this.paused=!1,this.title&&this.title.hide(),this.hud.show(),this.hud.joystick.setEnabled(!0),this.hud.setMuted(this.state.settings.muted),this.audio.start(),this.audio.setMuted(this.state.settings.muted),this.audio.setPhase(Xa(this.state.elapsed).id),this.world.setWeather(Wl(this.state.day)),_(this,P,Dm).call(this),_(this,P,Lt).call(this),this.farming&&this.farming.syncAll(),this.paddy&&this.paddy.syncAll(),_(this,P,Ja).call(this,!0),_(this,P,Qa).call(this),_(this,P,bh).call(this),this.defense&&this.defense.sync();const e=this.player.unstick();this.checkAchievements(),this.hud.toast(t?`Day ${this.state.day} — 다시 만나서 반가워요 🌿`:"Day 1 — 섬에 도착했어요 🌿",2800),e&&this.hud.toast("🪄 끼어 있던 자리에서 살며시 빠져나왔어요",2e3),this.autosaveAcc=0,this.save()},Pm=function(){this.state.day=1,this.state.elapsed=120,this.state.discovered=[],this.state.settings={...hu};for(const t of this.dittos)t.discovered=!1;this.player.teleport(Un.x,Un.z),this.player.setYaw(Math.PI),this.progress.reset(),this.progress.rollQuests(1),_(this,P,Qa).call(this),_(this,P,Ja).call(this,!0),this.gathering&&(this.gathering.applySaved({}),this.gathering.hooks.toast=(t,e)=>this.hud&&this.hud.toast(t,e));for(const t of this.cats)t.setFollow(!1);this.fishing&&this.fishing.cancel(),this.fx&&this.fx.clear(),this.farming&&this.farming.syncAll(),this.paddy&&this.paddy.syncAll(),this.defense&&(this.defense.releaseDittos(),this.defense.sync()),_(this,P,mh).call(this)},Lm=function(t){const e=Number(t.day);this.state.day=Number.isFinite(e)&&e>=1?Math.min(3650,Math.floor(e)):1;const i=Number(t.elapsed);this.state.elapsed=Number.isFinite(i)?Math.max(0,Math.min(Be-.01,i)):60,this.state.discovered=Array.isArray(t.discovered)?t.discovered.filter(l=>typeof l=="string"):[];const n=t.settings&&typeof t.settings=="object"?t.settings:{};this.state.settings={muted:!!n.muted,timeScale:du.includes(Number(n.timeScale))?Number(n.timeScale):1,fps30:!!n.fps30};const s=Number(t.player&&t.player.x),r=Number(t.player&&t.player.z);kf(!!(t.bridgeBuilt||t.bridge&&t.bridge.built)),Number.isFinite(s)&&Number.isFinite(r)&&this.world.terrain.isWalkable(s,r)?this.player.teleport(s,r):this.player.teleport(Un.x,Un.z);const o=Number(t.player&&t.player.yaw);Number.isFinite(o)&&this.player.setYaw(o);for(const l of this.dittos)l.discovered=this.state.discovered.includes(l.id);this.progress.load(t),this.gathering&&this.gathering.applySaved(t.nodes||{}),_(this,P,mh).call(this),this.progress.rollQuests(this.state.day);for(const l of this.cats)l.setFollow(this.progress.cat(l.id).follow);this.fishing&&this.fishing.cancel(),this.progress.discoveredCount=this.state.discovered.length,this.farming&&this.farming.syncAll(),_(this,P,Ja).call(this,!0),_(this,P,Qa).call(this),this.paddy&&this.paddy.syncAll(),this.defense&&this.defense.sync(),this.player.unstick()},mh=function(){for(const t of wi){const e=!!this.progress.building(t.id).done;this.world.scenery.setBuilt(t.id,e,!0),this.landmarkLabels&&this.landmarkLabels.setDone(t.id,e)}},Ja=function(t=!1){const e=this.progress.bridgeBuilt;return kf(e),this.bridge&&this.bridge.setBuilt(e,t),e},Qa=function(){this.progress.syncCapacity(),this.cartSprite&&(this.cartSprite.visible=this.progress.cartLevel>0)},Dm=function(){const t=this.player.position;this.camera.position.set(t.x+fn.offset.x,t.y+fn.offset.y,t.z+fn.offset.z),this.lookAt.set(t.x,t.y+fn.lookHeight,t.z),this.camera.lookAt(this.lookAt)},Im=function(){this.last=performance.now();const t=e=>{this.rafId=requestAnimationFrame(t);let i=(e-this.last)/1e3;if(this.last=e,(!Number.isFinite(i)||i<=0)&&(i=1/60),i=Math.min(i,.05),this.state.settings.fps30){if(this.acc30+=i,this.acc30<1/32)return;i=Math.min(this.acc30,.06),this.acc30=0}_(this,P,Nm).call(this,i)};this.rafId=requestAnimationFrame(t)},Nm=function(t){const e=this.mode==="play"&&!this.paused&&!this.modal.isOpen&&!document.hidden,i=e?t*this.state.settings.timeScale:0;if(e&&(this.state.elapsed+=t*this.state.settings.timeScale,this.state.elapsed>=Be)){this.state.elapsed-=Be,this.state.day+=1,this.world.setWeather(Wl(this.state.day));const s=this.progress.rollQuests(this.state.day);this.defense&&this.defense.onNewDay(this.state.day),this.hud.toast(s?`Day ${this.state.day} — 새로운 하루 · 의뢰 2건이 새로 왔어요 📋`:`Day ${this.state.day} — 새로운 하루가 시작됐어요`,3e3)}if(e&&this.defense&&!this.defense.waveActive){const s=Xa(this.state.elapsed).id,r=Yc(this.state.day)&&this.progress.defense.lastRunDay!==this.state.day;s==="sunset"&&r&&this.invasionWarnedDay!==this.state.day&&(this.invasionWarnedDay=this.state.day,this.hud.toast("🛡️ 노을이 짙어져요 — 밤이 되면 수집단이 옵니다",3200)),s==="night"&&r&&(this.defense.startWave(this.state.day,"night"),this.hud.toast("🌙 밤이 되자 부두 앞 바다에 회색 돛이…!",3e3))}e&&this.progress.tickBuff(t)&&this.hud.toast("✨ 황금 버프가 끝났어요",2e3),this.player.speedScale=this.progress.buffActive&&this.progress.buff.kind==="golden"?Go.speed:1,this.defense&&(this.defense.update(e?i:0,e),this.defense.waveActive&&(this.player.speedScale*=this.defense.speedMultiplier));const n=_(this,P,Fm).call(this,e);if(this.player.update(t,n,this.world.terrain,this.camera),this.cartSprite&&this.cartSprite.visible){const s=this.player.yaw,r=Math.sin(s)*.72+Math.cos(s)*.34,o=Math.cos(s)*.72-Math.sin(s)*.34,l=Math.sin(performance.now()*.006)*.02;this.cartSprite.position.set(this.player.position.x-r,this.player.position.y+.4+l,this.player.position.z-o)}for(const s of this.cats){const r=this.defense?this.defense.catTarget(s.id):null;s.update(t,this.camera,r||this.player.position,e)}for(const s of this.dittos)s.update(t,this.player.position,this.camera,e?i:0);if(this.gathering&&this.gathering.update(t,i,this.player.position,e),e&&this.drops&&this.gathering&&(this.somiPickAcc+=t,this.somiPickAcc>.35)){this.somiPickAcc=0;const s=this.cats.find(r=>r.id==="somi");s&&s.follow&&_(this,P,Ym).call(this,s)}this.farming&&this.farming.update(t,i,this.camera),this.paddy&&this.paddy.update(t,i,this.camera),this.bridge&&this.bridge.update(t,this.world.palette?this.world.palette.night:0),this.fishing&&e&&this.fishing.update(t,this.player.position),this.fx&&this.fx.update(t,this.camera),this.mode==="play"&&(this.achAcc+=t,this.achAcc>.5&&(this.achAcc=0,this.checkAchievements()));for(const s of this.spriteMaterials)s.color.copy(this.world.spriteLight);if(this.world.scenery.setSpriteLight(this.world.spriteLight),this.mode==="title"?_(this,P,gh).call(this,t):_(this,P,Um).call(this,t),this.world.update(t,this.state.elapsed,this.camera,this.player.position),this.landmarkLabels.update(this.camera,this.mode==="play"),this.mode==="play"&&(_(this,P,Om).call(this),this.hudAcc+=t,this.hudAcc>.14&&(this.hudAcc=0,_(this,P,Lt).call(this),_(this,P,gs).call(this)),this.minimap&&this.minimap.update(t)),e){this.autosaveAcc+=t;const s=this.state.settings.timeScale>1?Math.max(2,hi.intervalSeconds):hi.intervalSeconds;this.autosaveAcc>=s&&(this.autosaveAcc=0,this.save())}this.contextLost||(this.renderer.info.reset(),this.post.render()),_(this,P,km).call(this,t)},km=function(t){if(this.frames+=1,this.fpsAcc+=t,this.fpsAcc>=.5){this.fps=Math.round(this.frames/this.fpsAcc);const e=this.renderer.info.render,i=this.post?this.post.sceneStats:e;this.stats.fps=this.fps,this.stats.calls=e.calls,this.stats.triangles=e.triangles,this.stats.sceneCalls=i.calls,this.stats.sceneTriangles=i.triangles,this.frames=0,this.fpsAcc=0}},gh=function(t){this.titleAngle+=t*.09;const e=40,i=Math.cos(this.titleAngle)*e,n=Math.sin(this.titleAngle)*e,s=16+Math.sin(this.titleAngle*.8)*.9;this.camera.position.set(i,s,n),this.camera.lookAt(0,1,0)},Um=function(t){const e=this.player.position,i=this.tmpA.set(e.x+fn.offset.x,e.y+fn.offset.y,e.z+fn.offset.z),n=1-Math.exp(-6.5*t);this.camera.position.lerp(i,n);const s=this.world.terrain.sampleHeight(this.camera.position.x,this.camera.position.z),r=Math.max(s,0)+1.3;this.camera.position.y<r&&(this.camera.position.y=r);const o=this.tmpB.set(e.x,e.y+fn.lookHeight,e.z);this.lookAt.lerp(o,Math.min(1,t*9)),this.camera.lookAt(this.lookAt)},Fm=function(t){if(!t)return{x:0,z:0};const e=this.hud.joystick.vector;let i=e.x,n=e.y,s=0,r=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(r-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(r+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(s-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(s+=1);const o=Math.hypot(s,r);return o>0&&(s/=o,r/=o,Math.hypot(s,r)>Math.hypot(i,n)&&(i=s,n=r)),{x:i,z:n}},Om=function(){let t=null,e=1/0;const i=this.player.position;this.fishTarget=null;for(const d of this.dittos){const p=d.distanceTo(i);d.setNear(p<3.8),p<=un.dittoRange&&p<e&&(t=d,e=p)}for(const d of this.cats){const p=d.distanceTo(i);p<=un.catRange&&p<e&&(t=d,e=p)}const n=this.gathering.nearest(i,un.nodeRange);if(n){const d=Math.hypot(n.x-i.x,n.z-i.z);d<e&&(t=n,e=d)}const s=this.farming?this.farming.nearest(i,un.nodeRange):null;if(s){const d=Math.hypot(s.x-i.x,s.z-i.z);if(d<e){const p=_(this,P,Ro).call(this,s.index);t={kind:"plot",plot:s,index:s.index,x:s.x,z:s.z,info:p},e=d}}const r=this.paddy?this.paddy.nearest(i,un.plotRange):null;if(r){const d=Math.hypot(r.x-i.x,r.z-i.z);if(d<e){const p=_(this,P,Co).call(this,r.index);t={kind:"paddy",plot:r,index:r.index,x:r.x,z:r.z,info:p},e=d}}const o=!!(this.defense&&this.defense.waveActive);if(!this.progress.bridgeBuilt&&!o){const d=Math.hypot($t.south.x-i.x,$t.south.z-i.z),p=Math.hypot($t.north.x-i.x,$t.north.z-i.z),f=Math.min(d,p);if(f<=$t.range+.6&&f<e){const g=d<=p?$t.south:$t.north;t={kind:"bridge",id:"bridge",x:g.x,z:g.z,side:d<=p?"south":"north"},e=f}}if(!(this.defense&&this.defense.waveActive)){let d=-1,p=zt.slotRange;if(zt.slots.forEach((f,g)=>{const y=Math.hypot(f.x-i.x,f.z-i.z);y<p&&(p=y,d=g)}),d>=0&&p<e){const f=zt.slots[d];t={kind:"defense_slot",index:d,x:f.x,z:f.z},e=p}}const l=o?null:_(this,P,zm).call(this,i,un.siteRange);if(l){const d=Math.hypot(l.x-i.x,l.z-i.z);d<e&&(t=l,e=d)}const c=Qe.spot,h=Math.hypot(c.x-i.x,c.z-i.z);if(!o&&h<=c.range&&(this.fishTarget={kind:"fish",id:"dock_fish",x:c.x,z:c.z,built:!!this.progress.building("dock").done},h<e&&(t=this.fishTarget,e=h)),this.defense&&this.defense.waveActive){const d=this.defense.nearestRaider(i,6.5);if(d){this.target={kind:"raider",raider:d,x:d.x,z:d.z};return}}this.target=t},zm=function(t,e){let i=null,n=e;for(const s of this.world.scenery.sites){const r=Math.hypot(s.x-t.x,s.z-t.z);r<n&&(i=s,n=r)}return i},vh=function(t){t.id==="workshop"?_(this,P,Mt).call(this,this.panels.workshopMenu()):t.id==="vending"&&this.progress.building("vending").done?this.openVending():_(this,P,Mt).call(this,this.panels.build(t.id))},xh=function(t){t.kind==="ditto"?_(this,P,Bm).call(this,t):t.kind==="cat"&&this.openCat(t.id)},Bm=function(t){t.interact(),this.state.discovered.includes(t.id)?this.hud.toast(`${t.name} — "·‿·" 이미 도감에 있어요`,2e3):(t.markDiscovered(),this.state.discovered.push(t.id),this.hud.toast(`도감 등록! ${t.name} ·‿· (${this.state.discovered.length}/${Vi.length})`,3200),this.save(),this.checkAchievements(),_(this,P,gs).call(this))},RS=function(t){t.pet(),this.hud.toast(`${t.name}가 기분 좋아 보여요 ♥`,1800)},Gm=function(t){if(this.mode!=="play"||this.modal.isOpen)return;if(this.fishing&&this.fishing.active){this.fishing.reel(),_(this,P,Lt).call(this);return}if(performance.now()-this.tap.t>520||Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>14)return;const e=new At(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight*2-1));this.raycaster.setFromCamera(e,this.camera);const i=[...this.dittos.map(h=>h.hitMesh),...this.cats.map(h=>h.body),...this.nodeMeshes,...this.siteMeshes,...this.drops.rayTargets(),...this.defense?this.defense.rayTargets():[]],n=this.raycaster.intersectObjects(i,!0);if(!n.length)return;let s=n[0].object,r=null;for(;s&&!r;){const h=s.userData||{};h.drop?r={kind:"drop",drop:h.drop}:h.node?r={kind:"node",node:h.node}:h.site?r={kind:"site",site:h.site}:h.raider?r={kind:"raider",raider:h.raider}:h.actor&&(r={kind:"actor",actor:h.actor}),s=s.parent}if(!r)return;const o=this.player.position,l=(h,d)=>Math.hypot(h-o.x,d-o.z);if(r.kind==="raider"){const h=this.defense.fire("sling");h.ok||this.hud.toast(h.reason==="cooldown"?"새총을 다시 장전하는 중…":"조금 더 가까이 가서 쏠까요?",1500),_(this,P,Lt).call(this);return}if(r.kind==="drop"){if(l(r.drop.x,r.drop.z)>un.nodeRange+1.6){this.hud.toast("조금 더 가까이 가서 주울까요?",1600);return}this.gathering.pickup(r.drop)&&this.drops.remove(r.drop),_(this,P,Lt).call(this);return}if(r.kind==="node"){if(l(r.node.x,r.node.z)>un.nodeRange+.9){this.hud.toast("조금 더 가까이 가서 두드려 볼까요?",1600);return}this.gathering.hit(r.node),_(this,P,Lt).call(this);return}if(r.kind==="site"){if(l(r.site.x,r.site.z)>un.siteRange+1.6){this.hud.toast("조금 더 가까이 가서 살펴볼까요?",1600);return}_(this,P,vh).call(this,r.site);return}const c=r.actor;if(c.distanceTo(o)>un.tapRange){this.hud.toast("조금 더 가까이 가서 볼까요?",1600);return}_(this,P,xh).call(this,c)},Lt=function(){const t=Xa(this.state.elapsed),e=this.world.weather;if(this.hud.setTime({icon:t.icon,label:t.label,weatherIcon:e.icon,weatherLabel:e.label,day:this.state.day,clock:Af(this.state.elapsed),speed:this.state.settings.timeScale}),this.hud.setStamina(this.progress.stamina,vi.max),this.hud.setMail(_(this,P,Vm).call(this)),this.hud.setBag(this.progress.inventory.usedSlots(),this.progress.inventory.slots),this.hud.setCoins(this.progress.coins),this.hud.setCart(this.progress.cartLevel,this.progress.inventory.slots),this.hud.setQuests(this.progress.claimableQuests),this.hud.setBuff(this.progress.buffActive?`✨ ${Math.ceil(this.progress.buff.left)}s`:null),this.hud.setAchievements(this.progress.claimableAchievements),this.hud.setRipePlots(this.progress.farmPlots.filter(n=>n&&n.remain<=0).length),_(this,P,Hm).call(this),this.fishing&&this.fishing.active){const n=this.fishing.state;n==="bite"?this.hud.setAction({active:!0,icon:"🎣",label:"입질! 탭!"}):n==="cast"||n==="wait"?this.hud.setAction({active:!0,icon:"🎣",label:"회수하기"}):this.hud.setAction({active:!1,icon:"🎣",label:"낚시 마무리"});return}const i=this.target;if(this.defense&&this.defense.waveActive&&i&&i.kind==="raider")this.hud.setAction({active:!0,icon:"🪃",label:"새총 쏘기"});else if(i&&i.kind==="ditto")this.hud.setAction({active:!0,icon:i.discovered?"👀":"🔍",label:i.discovered?"다시 보기":"살펴보기"});else if(i&&i.kind==="cat")this.hud.setAction({active:!0,icon:"🐾",label:"돌보기"});else if(i&&i.kind==="fish")this.hud.setAction(i.built?{active:!0,icon:"🎣",label:"낚시하기"}:{active:!0,icon:"⚓",label:"부두 복구 필요"});else if(i&&i.isNode){const n=el[i.kind];this.hud.setAction({active:!0,icon:n.icon,label:`${n.verb} ${i.hitsLeft}/${i.hitsNeeded}`})}else if(i&&i.kind==="plot"){const n=_(this,P,Ro).call(this,i.index);n.state==="empty"?this.hud.setAction({active:!0,icon:"🌱",label:"씨앗 심기"}):n.state==="ripe"?this.hud.setAction({active:!0,icon:"🧺",label:"수확하기"}):n.st.watered<Me.maxWater?this.hud.setAction({active:!0,icon:"💧",label:`물주기 ${Math.ceil(n.st.remain)}초`}):this.hud.setAction({active:!1,icon:"🌱",label:`${Math.ceil(n.st.remain)}초 뒤 수확`})}else if(i&&i.kind==="paddy"){const n=_(this,P,Co).call(this,i.index);n.state==="empty"?this.hud.setAction({active:!0,icon:"🌾",label:"볍씨 심기"}):n.state==="ripe"?this.hud.setAction({active:!0,icon:"🧺",label:"벼 수확하기"}):n.st.watered<Me.maxWater?this.hud.setAction({active:!0,icon:"💧",label:`물주기 ${Math.ceil(n.st.remain)}초`}):this.hud.setAction({active:!1,icon:"🌾",label:`${Math.ceil(n.st.remain)}초 뒤 수확`})}else if(i&&i.kind==="bridge")this.hud.setAction({active:!0,icon:"🌉",label:"다리 놓기"});else if(i&&i.kind==="defense_slot"){const n=this.defense?this.defense.structureAt(i.index):null;this.hud.setAction(n?{active:!0,icon:n.def.icon,label:`${i.index+1}번 슬롯 관리`}:{active:!0,icon:"➕",label:`${i.index+1}번 슬롯 설치`})}else if(i&&i.kind==="site"){const n=!!this.progress.building(i.id).done,s=i.id==="workshop"?"공방 열기":i.id==="vending"?"자판기 열기":`${i.name} 살펴보기`;this.hud.setAction({active:!0,icon:i.id==="workshop"&&n?"🔨":i.id==="vending"&&n?"🥤":n?"✨":i.icon,label:n?s:`${i.name} 복구하기`})}else this.hud.setAction({active:!1,icon:"✋",label:"둘러보기"})},Hm=function(){if(!this.hud||!this.defense)return;const t=this.defense,e=t.waveState();let i=null;if(!e){const s=this.progress.defense.lastRunDay===this.state.day,r=Yc(this.state.day),o=zt.periodDays-this.state.day%zt.periodDays;i={text:r?s?"오늘 밤 방어 완료 · 슬롯 관리":"오늘 밤 수집단 상륙 예정 · 준비하기":`D-${o} 수집단 상륙 · 방어 준비`,go:!e}}const n=e?{ammo:t.ammo,sling:t.slingCd<=0,balloon:t.balloonCd<=0}:null;this.hud.setDefense({banner:i,wave:e,weapons:n})},Vm=function(){let t=0;for(const e of Bo){const i=!this.progress.isRead(e.id),n=!!e.gift&&!this.progress.isClaimed(e.id);(i||n)&&(t+=1)}return t},Mt=function(t){this.paused=!0,this.hud.joystick.reset();const e=t.onClose;this.modal.open({...t,onClose:()=>{this.paused=!1,e&&e()}})},Wm=function(t,e){const i=this.atlases.get(e.set);if(!i)return;const n=i.cols,s=i.rows;t.style.backgroundImage=`url("${new URL(`sprites/${e.set}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n*100}% ${s*100}%`,t.style.backgroundPosition=`${(e.col-1)/Math.max(1,n-1)*100}% ${(e.row-1)/Math.max(1,s-1)*100}%`},tn=function(t,e){const i=this.progress.gainExp(t,e);return i.rankedUp&&_(this,P,_h).call(this,t,i.rank),_(this,P,Lt).call(this),i},_h=function(t,e){const i=this.progress.skills.row(t);this.audio.sfxFanfare(),this.hud.toast(`🌱 ${i.name} 랭크 업! ${e||i.rank}`,2800);const n=this.player.position;this.fx&&this.fx.float(`${i.icon} ${e||i.rank}`,n.x,n.y+1.9,n.z,"#b2698f")},sa=function(t,e=1,i=!0){const n=this.progress.questEvent(t,e);return i&&this.progress.bump(t,e),n.length&&(this.audio.sfxCoin(),this.hud.toast(`📋 의뢰 달성 — ${n.map(s=>s.label).join(" · ")} · 우체통에서 보상 받기`,3e3)),_(this,P,Lt).call(this),this.checkAchievements(),n},kn=function(t,e=1,i=!0){return _(this,P,sa).call(this,t,e,i)},Ro=function(t){const e=this.progress.plot(t);if(!e)return{state:"empty",st:null,stage:-1,pct:0,crop:null};const i=Jt[e.crop],n=ma(e);return{state:e.remain>0?"grow":"ripe",st:e,stage:n,crop:i,pct:Math.round((1-e.remain/Math.max(1,e.total))*100)}},$m=function(t){const e=_(this,P,Ro).call(this,t);return e.state==="empty"?this.openSeedPicker(t):e.state==="ripe"?this.harvestPlot(t):this.waterPlot(t)},Co=function(t){const e=this.progress.paddyPlot(t);if(!e)return{state:"empty",st:null,stage:-1,pct:0,crop:null};const i=Jt[e.crop],n=ma(e);return{state:e.remain>0?"grow":"ripe",st:e,stage:n,crop:i,pct:Math.round((1-e.remain/Math.max(1,e.total))*100)}},Xm=function(t){const e=_(this,P,Co).call(this,t);return e.state==="empty"?this.openPaddySeedPicker(t):e.state==="ripe"?this.harvestPaddy(t):this.waterPaddy(t)},qm=function(t){if(!t)return;const e=t.reward||{};if(t.victory){this.audio.sfxFanfare();const i=e.seedCount?` · 🌱 희귀 씨앗 ${e.seedCount}`:"";this.hud.toast(`🎉 승리! 수집단을 모두 막아냈어요 — 🪙 ${e.coin} · ⭐ ${e.star}${i}`,4e3)}else this.audio.sfxDeny(),this.hud.toast(`😿 코인 ${t.stolen}개를 빼앗겼어요 — 건물과 작물은 무사해요`,3600);this.save(),_(this,P,Lt).call(this),this.checkAchievements(),this.mode==="play"&&_(this,P,Mt).call(this,this.phase5.result(t))},Ym=function(t){if(!this.drops||!this.gathering)return;const e=this.drops.items;for(let i=e.length-1;i>=0;i--){const n=e[i];Math.hypot(n.x-t.position.x,n.z-t.position.z)>1.5||this.gathering.pickup(n)===!1||(this.drops.remove(n),this.fx&&this.fx.float("솜이가 주웠어요 ♥",t.position.x,t.position.y+.95,t.position.z,"#e78aa8"),_(this,P,Lt).call(this))}},Km=function(t){return t===0?this.progress.mailbox.claimed.length>0:t===1?this.state.discovered.length>=2:t===2?this.progress.count("tree")>=1:!0},gs=function(){if(this.mode!=="play")return 0;const t=this.progress.welcome||(this.progress.welcome={step:0});if(t.step>=Fi.steps.length)return 0;let e=0;for(;t.step<Fi.steps.length&&_(this,P,Km).call(this,t.step);){t.step+=1,e+=1;const i=Fi.steps[t.step-1];this.progress.addCoins(Fi.reward),this.audio.sfxCoin?.(),this.hud.toast(`🎉 ${i.icon} ${i.label} 완료! 코인 +${Fi.reward} (${t.step}/${Fi.steps.length})`,2600);const n=this.player.position;this.fx&&this.fx.float(`+${Fi.reward} 🪙`,n.x,n.y+1.9,n.z,"#b38b3d")}return e>0&&(t.step>=Fi.steps.length&&setTimeout(()=>this.hud&&this.hud.toast("🌿 첫걸음 완료 — 이제 섬은 마음 가는 대로예요",3e3),900),_(this,P,bh).call(this),_(this,P,Lt).call(this),this.save()),e},bh=function(){if(!this.hud)return;const t=this.progress.welcome||{step:0};this.hud.setWelcome(t.step,Fi.steps)},yh=function(t){this.modal.close();const e=this.fishing.start({bait:t});if(!e.ok){this.audio.sfxDeny();const i=e.reason==="stamina"?"기력이 부족해요 — 열매나 요리로 채워 주세요 🍓":e.reason==="dock"?"부두를 먼저 복구해야 해요 ⚓":e.reason==="no-bait"?"별빛 미끼가 없어요":"지금은 낚시할 수 없어요";this.hud.toast(i,2200);return}this.player.setYaw(0),e.bait&&this.hud.toast("별빛 미끼를 달았어요 — 희귀한 손님이 올지도 🪱",2e3),_(this,P,Lt).call(this)},Po=function(t){return this.cats.find(e=>e.id===t)||null},Mh=function(t,e,i){const n=i.row.level;this.fx&&this.fx.burst(e.position.x,e.position.y+e.height,e.position.z,"#ffb3d1",12,{spread:.9,up:1.6}),i.levelUp?(this.hud.toast(`${t.name} 호감도 Lv.${n}! ${ri.dialogue[t.id][n-1]}`,3400),_(this,P,Zm).call(this,t.id,n),n===ri.followLevel&&setTimeout(()=>this.hud.toast(`${t.name}가 이제 따라와도 된대요 — 돌보기에서 [따라오기] 🐾`,3e3),900)):Math.random()<.45&&this.hud.toast(ri.dialogue[t.id][n-1],1900),this.save(),_(this,P,Lt).call(this),this.modal.isOpen&&_(this,P,Mt).call(this,this.life.cat(t.id))},Zm=function(t,e){const i=ri.gifts[e];if(!i)return;const n=this.progress.cat(t);if(n.gifts.includes(e))return;n.gifts.push(e);let s=0;for(const[l,c]of Object.entries(i)){const h=this.progress.inventory.add(l,c);h>0&&(this.progress.inventory.storage[l]=this.progress.inventory.stored(l)+h,s+=h)}this.audio.sfxRare();const r=Object.entries(i).map(([l,c])=>`${_n(l)} ${xn(l)} ${c}`).join(" · "),o=oi.find(l=>l.id===t);this.hud.toast(`🎁 ${o?o.name:t}의 보답 선물 — ${r}${s?` (${s}개는 창고로)`:""}`,3200)};const CS=document.getElementById("scene"),PS=document.getElementById("ui"),ja=new AS(CS,PS);window.__metamong={game:ja,get audio(){return ja.audio},life(){const a=ja,t=a.progress.inventory,e=a.progress;return{stamina:Math.round(e.stamina*10)/10,bagSlots:t.usedSlots(),bag:t.toJSON().bag,storage:{...t.storage},buildings:JSON.parse(JSON.stringify(e.buildings)),mailbox:{read:[...e.mailbox.read],claimed:[...e.mailbox.claimed]},harvested:a.gathering?Object.keys(a.gathering.toJSON()).length:0,drops:a.drops?a.drops.items.map(i=>`${i.itemId}x${i.count}`):[],coins:e.coins,skills:e.skills.toJSON(),skillRows:e.skills.rows().map(i=>({id:i.id,rank:i.rank,level:i.level,exp:i.exp,pct:i.pct})),title:e.skills.title(),fish:{...e.fish},fishKinds:e.fishKinds(),supplies:{...e.supplies},tools:e.tools,cats:Object.fromEntries(Object.keys(e.cats).map(i=>[i,{...e.catRow(i),follow:!!e.cat(i).follow}])),cooked:{...e.cooked},quests:{day:e.quests.day,list:e.questRows()},claimableQuests:e.claimableQuests,buff:{...e.buff},fishingStats:{...e.fishing},crops:{...e.crops},cropKinds:e.cropKinds(),seeds:Object.fromEntries(Object.keys(e.supplies).filter(i=>i.startsWith("seed_")).map(i=>[i,e.supply(i)])),farmPlots:e.farmPlots.map(i=>i?{crop:i.crop,remain:Math.round(i.remain*10)/10,total:i.total,watered:i.watered,ripe:i.remain<=0}:null),farmPlanted:e.farmPlots.filter(Boolean).length,farmRipe:e.farmPlots.filter(i=>i&&i.remain<=0).length,counters:{...e.counters},achievements:{unlocked:[...e.achievements.unlocked],claimed:[...e.achievements.claimed]},achRows:e.achRows().map(i=>({id:i.id,value:i.value,need:i.need,done:i.done,claimed:i.claimed})),claimableAchievements:e.claimableAchievements,waterCan:e.toolLevel("water"),bridge:{built:e.bridgeBuilt,invested:{...e.bridgeState().invested}},bridgeBuilt:e.bridgeBuilt,cartLevel:e.cartLevel,bagCapacity:e.inventory.slots,paddyPlots:e.paddyPlots.map(i=>i?{crop:i.crop,remain:Math.round(i.remain*10)/10,total:i.total,watered:i.watered,ripe:i.remain<=0}:null),paddyPlanted:e.paddyPlots.filter(Boolean).length,paddyRipe:e.paddyPlots.filter(i=>i&&i.remain<=0).length,welcome:{step:e.welcome?e.welcome.step:0},defense:{...JSON.parse(JSON.stringify(e.defense)),installed:e.defense.slots.filter(Boolean).length,stockTotal:Object.values(e.defense.stock).reduce((i,n)=>i+n,0)},mapGrid:{grid:yn,half:ye},fishing:a.fishing?{state:a.fishing.state,active:a.fishing.active,baitUsed:!!a.fishing.baitUsed,last:a.fishing.lastResult?{id:a.fishing.lastResult.fish.id,size:a.fishing.lastResult.size}:null}:null}},stats(){const a=ja;return{mode:a.mode,day:a.state.day,elapsed:Math.round(a.state.elapsed*100)/100,phase:Xa(a.state.elapsed).id,paused:a.paused,modalOpen:!!(a.modal&&a.modal.isOpen),contextLost:a.contextLost,fps:a.stats.fps,drawCalls:a.stats.calls,triangles:a.stats.triangles,sceneDrawCalls:a.stats.sceneCalls,sceneTriangles:a.stats.sceneTriangles,discovered:[...a.state.discovered],saveMode:a.saveStore.mode,hasSave:a.hasSave,stamina:Math.round(a.progress.stamina*10)/10,bagSlots:a.progress.inventory.usedSlots(),coins:a.progress.coins,quests:a.progress.claimableQuests,fishing:a.fishing?a.fishing.state:"idle",defense:a.defense?a.defense.stats():null,settings:{...a.state.settings},player:a.player?{x:+a.player.position.x.toFixed(2),y:+a.player.position.y.toFixed(2),z:+a.player.position.z.toFixed(2),yaw:+a.player.yaw.toFixed(3),facing:a.player.facing,flipX:!!a.player.flip,frame:a.player.frameName}:null}}};ja.start().catch(a=>{console.error("게임 시작 실패",a);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#fff6fa;color:#6b5878;font-family:system-ui,sans-serif;font-size:14px;text-align:center;padding:24px;z-index:999;",t.textContent="섬을 여는 중 문제가 생겼어요. 새로고침 해 주세요: "+String(a&&a.message?a.message:a),document.body.appendChild(t)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(new URL("sw.js",document.baseURI)).catch(()=>{})});
