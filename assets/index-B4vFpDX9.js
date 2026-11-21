var kh=s=>{throw TypeError(s)};var em=(s,t,e)=>t.has(s)||kh("Cannot "+e);var Ne=(s,t,e)=>t.has(s)?kh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var S=(s,t,e)=>(em(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="187",im=0,Bh=1,nm=2,Nr=1,sm=2,Rr=3,Yn=0,ni=1,Fi=2,ps=0,Ur=1,Kn=2,zh=3,Gh=4,rm=5,Hs=100,am=101,om=102,lm=103,cm=104,hm=200,dm=201,um=202,fm=203,Cu=204,Pu=205,pm=206,mm=207,gm=208,vm=209,xm=210,_m=211,bm=212,ym=213,Mm=214,Ll=0,Dl=1,Il=2,kr=3,Nl=4,Ul=5,Fl=6,Ol=7,Lu=0,Sm=1,wm=2,Dn=0,Xc=1,qc=2,Yc=3,Kc=4,Zc=5,Jc=6,yo=7,Du=300,Qs=301,Br=302,Uo=303,Fo=304,zr=1e3,ki=1001,kl=1002,fe=1003,Em=1004,ta=1005,Ye=1006,Oo=1007,Pn=1008,Ei=1009,Iu=1010,Nu=1011,Gr=1012,Qc=1013,gn=1014,Ji=1015,pi=1016,jc=1017,th=1018,js=1020,Uu=35902,Fu=35899,Ou=1021,ku=1022,Qi=1023,Zn=1026,qn=1027,eh=1028,ih=1029,ms=1030,nh=1031,sh=1033,Ha=33776,Va=33777,Wa=33778,$a=33779,Bl=35840,zl=35841,Gl=35842,Hl=35843,Vl=36196,Wl=37492,$l=37496,Xl=37488,ql=37489,ro=37490,Yl=37491,Kl=37808,Zl=37809,Jl=37810,Ql=37811,jl=37812,tc=37813,ec=37814,ic=37815,nc=37816,sc=37817,rc=37818,ac=37819,oc=37820,lc=37821,cc=36492,hc=36494,dc=36495,uc=36283,fc=36284,ao=36285,pc=36286,Tm=3200,mc=0,Am=1,$n="",we="srgb",oo="srgb-linear",lo="linear",ae="srgb",ko=7680,Rm=519,Cm=512,Pm=513,Lm=514,Bu=515,Dm=516,Im=517,zu=518,Gu=519,Hu=35044,Hh="300 es",ji=2e3,Hr=2001;function Nm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Um(){const s=Vr("canvas");return s.style.display="block",s}const Vh={};function co(...s){const t="THREE."+s.shift();console.log(t,...s)}function Vu(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ut(...s){s=Vu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ie(...s){s=Vu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Xa(...s){const t=s.join(" ");t in Vh||(Vh[t]=!0,Ut(...s))}function Fm(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Om={[Ll]:Ll,[Il]:Fl,[Nl]:Nl,[kr]:Ul,[Dl]:Dl,[Fl]:Il,[Ol]:Ol,[Ul]:kr};class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,gc=180/Math.PI;function xs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function km(s,t){return(s%t+t)%t}function zo(s,t,e){return(1-e)*s+e*t}function Bm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wu(s,t){if(t.constructor===Float32Array)return s;const e=Mo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function $u(s,t){if(t.constructor===Float32Array)return s;const e=Mo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Sh=class Sh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;let Rt=Sh;class _s{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=r[a+0],u=r[a+1],v=r[a+2],x=r[a+3];if(d!==x||l!==f||c!==u||h!==v){let p=l*f+c*u+h*v+d*x;p<0&&(f=-f,u=-u,v=-v,x=-x,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),C=Math.sin(M);m=Math.sin(m*M)/C,o=Math.sin(o*M)/C,l=l*m+f*o,c=c*m+u*o,h=h*m+v*o,d=d*m+x*o}else{l=l*m+f*o,c=c*m+u*o,h=h*m+v*o,d=d*m+x*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],f=r[a+1],u=r[a+2],v=r[a+3];return t[e]=o*v+h*d+l*u-c*f,t[e+1]=l*v+h*f+c*d-o*u,t[e+2]=c*v+h*u+o*f-l*d,t[e+3]=h*v-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),f=l(i/2),u=l(n/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*v,this._y=c*u*d-f*h*v,this._z=c*h*v+f*u*d,this._w=c*h*d-f*u*v;break;case"YXZ":this._x=f*h*d+c*u*v,this._y=c*u*d-f*h*v,this._z=c*h*v-f*u*d,this._w=c*h*d+f*u*v;break;case"ZXY":this._x=f*h*d-c*u*v,this._y=c*u*d+f*h*v,this._z=c*h*v+f*u*d,this._w=c*h*d-f*u*v;break;case"ZYX":this._x=f*h*d-c*u*v,this._y=c*u*d+f*h*v,this._z=c*h*v-f*u*d,this._w=c*h*d+f*u*v;break;case"YZX":this._x=f*h*d+c*u*v,this._y=c*u*d+f*h*v,this._z=c*h*v-f*u*d,this._w=c*h*d-f*u*v;break;case"XZY":this._x=f*h*d-c*u*v,this._y=c*u*d-f*h*v,this._z=c*h*v+f*u*d,this._w=c*h*d+f*u*v;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-n)*u}else if(i>o&&i>d){const u=2*Math.sqrt(1+i-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-i-d);this._w=(r-c)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-i-o);this._w=(a-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wh=class wh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wh.prototype.isVector3=!0;let U=wh;const Go=new U,Wh=new _s,Eh=class Eh{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],v=i[8],x=n[0],p=n[3],m=n[6],M=n[1],C=n[4],E=n[7],R=n[2],T=n[5],_=n[8];return r[0]=a*x+o*M+l*R,r[3]=a*p+o*C+l*T,r[6]=a*m+o*E+l*_,r[1]=c*x+h*M+d*R,r[4]=c*p+h*C+d*T,r[7]=c*m+h*E+d*_,r[2]=f*x+u*M+v*R,r[5]=f*p+u*C+v*T,r[8]=f*m+u*E+v*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,v=e*d+i*f+n*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=u*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return Xa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return Xa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;let kt=Eh;const Ho=new kt,$h=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zm(){const s={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(n.r=Ks(n.r),n.g=Ks(n.g),n.b=Ks(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?lo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[oo]:{primaries:t,whitePoint:i,transfer:lo,toXYZ:$h,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:$h,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const te=zm();function In(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class Gm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ss===void 0&&(Ss=Vr("canvas")),Ss.width=t.width,Ss.height=t.height;const n=Ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hm=0;class rh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Vo(n[a].image)):r.push(Vo(n[a]))}else r=Vo(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Vo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Vm=0;const Wo=new U;class Ke extends vs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=ki,n=ki,r=Ye,a=Pn,o=Qi,l=Ei,c=Ke.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=xs(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zr:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zr:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Du;Ke.DEFAULT_ANISOTROPY=1;const Th=class Th{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],v=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(c+1)/2,E=(u+1)/2,R=(m+1)/2,T=(h+f)/4,_=(d+x)/4,w=(v+p)/4;return C>E&&C>R?C<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(C),n=T/i,r=_/i):E>R?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=T/n,r=w/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=_/r,n=w/r),this.set(i,n,r,e),this}let M=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Th.prototype.isVector4=!0;let Se=Th;class Wm extends vs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ke({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new rh(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Wm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xu extends Ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=fe,this.minFilter=fe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends Ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=fe,this.minFilter=fe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const _o=class _o{constructor(t,e,i,n,r,a,o,l,c,h,d,f,u,v,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,f,u,v,x,p)}set(t,e,i,n,r,a,o,l,c,h,d,f,u,v,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=v,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,v=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,v=c*h,x=c*d;e[0]=f+x*o,e[4]=v*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,v=c*h,x=c*d;e[0]=f-x*o,e[4]=-a*d,e[8]=v+u*o,e[1]=u+v*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,v=o*h,x=o*d;e[0]=l*h,e[4]=v*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=x-f*d,e[8]=v*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+v,e[10]=f-x*d}else if(t.order==="XZY"){const f=a*l,u=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=a*h,e[9]=u*d-v,e[2]=v*d-u,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xm,t,qm)}lookAt(t,e,i){const n=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),kn.crossVectors(i,Mi),kn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),kn.crossVectors(i,Mi)),kn.normalize(),ea.crossVectors(Mi,kn),n[0]=kn.x,n[4]=ea.x,n[8]=Mi.x,n[1]=kn.y,n[5]=ea.y,n[9]=Mi.y,n[2]=kn.z,n[6]=ea.z,n[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],v=i[2],x=i[6],p=i[10],m=i[14],M=i[3],C=i[7],E=i[11],R=i[15],T=n[0],_=n[4],w=n[8],k=n[12],D=n[1],F=n[5],B=n[9],X=n[13],I=n[2],W=n[6],Z=n[10],V=n[14],nt=n[3],Y=n[7],et=n[11],it=n[15];return r[0]=a*T+o*D+l*I+c*nt,r[4]=a*_+o*F+l*W+c*Y,r[8]=a*w+o*B+l*Z+c*et,r[12]=a*k+o*X+l*V+c*it,r[1]=h*T+d*D+f*I+u*nt,r[5]=h*_+d*F+f*W+u*Y,r[9]=h*w+d*B+f*Z+u*et,r[13]=h*k+d*X+f*V+u*it,r[2]=v*T+x*D+p*I+m*nt,r[6]=v*_+x*F+p*W+m*Y,r[10]=v*w+x*B+p*Z+m*et,r[14]=v*k+x*X+p*V+m*it,r[3]=M*T+C*D+E*I+R*nt,r[7]=M*_+C*F+E*W+R*Y,r[11]=M*w+C*B+E*Z+R*et,r[15]=M*k+C*X+E*V+R*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],v=t[3],x=t[7],p=t[11],m=t[15],M=l*u-c*f,C=o*u-c*d,E=o*f-l*d,R=a*u-c*h,T=a*f-l*h,_=a*d-o*h;return e*(x*M-p*C+m*E)-i*(v*M-p*R+m*T)+n*(v*C-x*R+m*_)-r*(v*E-x*T+p*_)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],v=t[12],x=t[13],p=t[14],m=t[15],M=e*o-i*a,C=e*l-n*a,E=e*c-r*a,R=i*l-n*o,T=i*c-r*o,_=n*c-r*l,w=h*x-d*v,k=h*p-f*v,D=h*m-u*v,F=d*p-f*x,B=d*m-u*x,X=f*m-u*p,I=M*X-C*B+E*F+R*D-T*k+_*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/I;return t[0]=(o*X-l*B+c*F)*W,t[1]=(n*B-i*X-r*F)*W,t[2]=(x*_-p*T+m*R)*W,t[3]=(f*T-d*_-u*R)*W,t[4]=(l*D-a*X-c*k)*W,t[5]=(e*X-n*D+r*k)*W,t[6]=(p*E-v*_-m*C)*W,t[7]=(h*_-f*E+u*C)*W,t[8]=(a*B-o*D+c*w)*W,t[9]=(i*D-e*B-r*w)*W,t[10]=(v*T-x*E+m*M)*W,t[11]=(d*E-h*T-u*M)*W,t[12]=(o*k-a*F-l*w)*W,t[13]=(e*F-i*k+n*w)*W,t[14]=(x*C-v*R-p*M)*W,t[15]=(h*R-d*C+f*M)*W,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,v=r*d,x=a*h,p=a*d,m=o*d,M=l*c,C=l*h,E=l*d,R=i.x,T=i.y,_=i.z;return n[0]=(1-(x+m))*R,n[1]=(u+E)*R,n[2]=(v-C)*R,n[3]=0,n[4]=(u-E)*T,n[5]=(1-(f+m))*T,n[6]=(p+M)*T,n[7]=0,n[8]=(v+C)*_,n[9]=(p-M)*_,n[10]=(1-(f+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ws.set(n[0],n[1],n[2]).length();const o=ws.set(n[4],n[5],n[6]).length(),l=ws.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Wi.copy(this);const c=1/a,h=1/o,d=1/l;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=d,Wi.elements[9]*=d,Wi.elements[10]*=d,e.setFromRotationMatrix(Wi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=ji,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n);let v,x;if(l)v=r/(a-r),x=a*r/(a-r);else if(o===ji)v=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Hr)v=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=ji,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n);let v,x;if(l)v=1/(a-r),x=a/(a-r);else if(o===ji)v=-2/(a-r),x=-(a+r)/(a-r);else if(o===Hr)v=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};_o.prototype.isMatrix4=!0;let ne=_o;const ws=new U,Wi=new ne,Xm=new U(0,0,0),qm=new U(1,1,1),kn=new U,ea=new U,Mi=new U,qh=new ne,Yh=new _s;class gs{constructor(t=0,e=0,i=0,n=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ym=0;const Kh=new U,Es=new _s,_n=new ne,ia=new U,hr=new U,Km=new U,Zm=new _s,Zh=new U(1,0,0),Jh=new U(0,1,0),Qh=new U(0,0,1),jh={type:"added"},Jm={type:"removed"},Ts={type:"childadded",child:null},$o={type:"childremoved",child:null};class Pe extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new U,e=new gs,i=new _s,n=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ne},normalMatrix:{value:new kt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Zh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(hr,ia,this.up):_n.lookAt(ia,hr,this.up),this.quaternion.setFromRotationMatrix(_n),n&&(_n.extractRotation(n.matrixWorld),Es.setFromRotationMatrix(_n),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jm),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),v.length>0&&(i.nodes=v)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pe.DEFAULT_UP=new U(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class We extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qm={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,v=.005;c.inputState.pinching&&f>u+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},na={h:0,s:0,l:0};function qo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=km(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=qo(a,r,t+1/3),this.g=qo(a,r,t),this.b=qo(a,r,t-1/3)}return te.colorSpaceToWorking(this,n),this}setStyle(t,e=we){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const i=qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return te.workingToColorSpace(je.copy(this),t),Math.round(Kt(je.r*255,0,255))*65536+Math.round(Kt(je.g*255,0,255))*256+Math.round(Kt(je.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(je.copy(this),e);const i=je.r,n=je.g,r=je.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=we){te.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,n=je.b;return t!==we?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(na);const i=zo(Bn.h,na.h,e),n=zo(Bn.s,na.s,e),r=zo(Bn.l,na.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new ut;ut.NAMES=qu;class oh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new oh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jm extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const $i=new U,bn=new U,Yo=new U,yn=new U,As=new U,Rs=new U,td=new U,Ko=new U,Zo=new U,Jo=new U,Qo=new Se,jo=new Se,tl=new Se;class Oi{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),$i.subVectors(t,e),n.cross($i);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){$i.subVectors(n,e),bn.subVectors(i,e),Yo.subVectors(t,e);const a=$i.dot($i),o=$i.dot(bn),l=$i.dot(Yo),c=bn.dot(bn),h=bn.dot(Yo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-u-v,v,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Qo.setScalar(0),jo.setScalar(0),tl.setScalar(0),Qo.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,i),tl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Qo,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(t,e,i,n){return $i.subVectors(i,e),bn.subVectors(t,e),$i.cross(bn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $i.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),$i.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Oi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;As.subVectors(n,i),Rs.subVectors(r,i),Ko.subVectors(t,i);const l=As.dot(Ko),c=Rs.dot(Ko);if(l<=0&&c<=0)return e.copy(i);Zo.subVectors(t,n);const h=As.dot(Zo),d=Rs.dot(Zo);if(h>=0&&d<=h)return e.copy(n);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(As,a);Jo.subVectors(t,r);const u=As.dot(Jo),v=Rs.dot(Jo);if(v>=0&&u<=v)return e.copy(r);const x=u*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(Rs,o);const p=h*v-u*d;if(p<=0&&d-h>=0&&u-v>=0)return td.subVectors(r,n),o=(d-h)/(d-h+(u-v)),e.copy(n).addScaledVector(td,o);const m=1/(p+x+f);return a=x*m,o=f*m,e.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class bs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),ra.subVectors(this.max,dr),Cs.subVectors(t.a,dr),Ps.subVectors(t.b,dr),Ls.subVectors(t.c,dr),zn.subVectors(Ps,Cs),Gn.subVectors(Ls,Ps),ns.subVectors(Cs,Ls);let e=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-ns.z,ns.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,ns.z,0,-ns.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-ns.y,ns.x,0];return!el(e,Cs,Ps,Ls,ra)||(e=[1,0,0,0,1,0,0,0,1],!el(e,Cs,Ps,Ls,ra))?!1:(aa.crossVectors(zn,Gn),e=[aa.x,aa.y,aa.z],el(e,Cs,Ps,Ls,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new U,new U,new U,new U,new U,new U,new U,new U],Xi=new U,sa=new bs,Cs=new U,Ps=new U,Ls=new U,zn=new U,Gn=new U,ns=new U,dr=new U,ra=new U,aa=new U,ss=new U;function el(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ss.fromArray(s,r);const o=n.x*Math.abs(ss.x)+n.y*Math.abs(ss.y)+n.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ce=new U,oa=new Rt;let t0=0;class gi extends vs{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hu,this.updateRanges=[],this.gpuType=Ji,this.version=0,this._normalizationScale=t!==void 0?Mo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wu(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):$u(t,this.array)}}class Yu extends gi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ku extends gi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pe extends gi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const e0=new bs,ur=new U,il=new U;class ys{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):e0.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ur,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(il)),this.expandByPoint(ur.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let i0=0;const Di=new ne,nl=new Pe,Ds=new U,Si=new bs,fr=new bs,Ge=new U;class Le extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nm(t)?Ku:Yu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,e,i){return Di.makeTranslation(t,e,i),this.applyMatrix4(Di),this}scale(t,e,i){return Di.makeScale(t,e,i),this.applyMatrix4(Di),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(Si.min,fr.min),Si.expandByPoint(Ge),Ge.addVectors(Si.max,fr.max),Si.expandByPoint(Ge)):(Si.expandByPoint(fr.min),Si.expandByPoint(fr.max))}Si.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(t,c),Ge.add(Ds)),n=Math.max(n,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new U,l[k]=new U;const h=new U,d=new U,f=new U,u=new Rt,v=new Rt,x=new Rt,p=new U,m=new U;function M(k,D,F){c[k]=c[D]=c[F]=1,h.fromBufferAttribute(i,k),d.fromBufferAttribute(i,D),f.fromBufferAttribute(i,F),u.fromBufferAttribute(r,k),v.fromBufferAttribute(r,D),x.fromBufferAttribute(r,F),d.sub(h),f.sub(h),v.sub(u),x.sub(u);const B=1/(v.x*x.y-x.x*v.y);isFinite(B)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(B),m.copy(f).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(B),o[k].add(p),o[D].add(p),o[F].add(p),l[k].add(m),l[D].add(m),l[F].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let k=0,D=C.length;k<D;++k){const F=C[k],B=F.start,X=F.count;for(let I=B,W=B+X;I<W;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const E=new U,R=new U,T=new U,_=new U;function w(k){T.fromBufferAttribute(n,k),_.copy(T);const D=o[k];E.copy(D),E.sub(T.multiplyScalar(T.dot(D))).normalize(),R.crossVectors(_,D);const B=R.dot(l[k])<0?-1:1;a.setXYZW(k,E.x,E.y,E.z,B)}for(let k=0,D=i.count;k<D;++k)c[k]&&w(k);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new gi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const n=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,u=t.count;f<u;f+=3){const v=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,v=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let m=0;m<h;m++)f[v++]=c[u++]}return new gi(f,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class n0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hu,this.updateRanges=[],this.version=0,this.uuid=xs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=ed(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=ed(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function ed(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=xs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const oi=new U;class ho{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Mo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix4(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyNormalMatrix(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.transformDirection(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new gi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ho(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wu(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):$u(t,this.data.array)}}const sl=new U,s0=new U,r0=new kt;class Wn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=sl.subVectors(i,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(sl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||r0.getNormalMatrix(t),n=this.coplanarPoint(sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let a0=0;class Qn extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Ur,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Pu,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ii extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const pr=new U,Ns=new U,Us=new U,Fs=new Rt,mr=new Rt,Zu=new ne,la=new U,gr=new U,ca=new U,id=new Rt,rl=new Rt,nd=new Rt;class ui extends Pe{constructor(t=new ii){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new n0(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new ho(i,3,0,!1)),Is.setAttribute("uv",new ho(i,2,3,!1))}this.geometry=Is,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;ha(la.set(-.5,-.5,0),Us,a,Ns,n,r),ha(gr.set(.5,-.5,0),Us,a,Ns,n,r),ha(ca.set(.5,.5,0),Us,a,Ns,n,r),id.set(0,0),rl.set(1,0),nd.set(1,1);let o=t.ray.intersectTriangle(la,gr,ca,!1,pr);if(o===null&&(ha(gr.set(-.5,.5,0),Us,a,Ns,n,r),rl.set(0,1),o=t.ray.intersectTriangle(la,ca,gr,!1,pr),o===null))return;const l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:Oi.getInterpolation(pr,la,gr,ca,id,rl,nd,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function ha(s,t,e,i,n,r){Fs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(mr.x=r*Fs.x-n*Fs.y,mr.y=n*Fs.x+r*Fs.y):mr.copy(Fs),s.copy(t),s.x+=mr.x,s.y+=mr.y,s.applyMatrix4(Zu)}const Sn=new U,al=new U,da=new U,ua=new U;class So{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){al.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(al);const r=t.distanceTo(e)*.5,a=-this.direction.dot(da),o=ua.dot(this.direction),l=-ua.dot(da),c=ua.lengthSq(),h=Math.abs(1-a*a);let d,f,u,v;if(h>0)if(d=a*l-o,f=a*o-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(al).addScaledVector(da,f),u}intersectSphere(t,e){if(t.radius<0)return null;Sn.subVectors(t.center,this.origin);const i=Sn.dot(this.direction),n=Sn.dot(Sn)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,v=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=i.x-a.x,M=i.y-a.y,C=i.z-a.z,E=Math.abs(l),R=Math.abs(c),T=Math.abs(h);let _,w,k,D,F,B,X,I,W,Z,V,nt;if(E>=R&&E>=T?(k=l,B=d,W=v,nt=m,l>=0?(_=c,w=h,D=f,F=u,X=x,I=p,Z=M,V=C):(_=h,w=c,D=u,F=f,X=p,I=x,Z=C,V=M)):R>=T?(k=c,B=f,W=x,nt=M,c>=0?(_=h,w=l,D=u,F=d,X=p,I=v,Z=C,V=m):(_=l,w=h,D=d,F=u,X=v,I=p,Z=m,V=C)):(k=h,B=u,W=p,nt=C,h>=0?(_=l,w=c,D=d,F=f,X=v,I=x,Z=m,V=M):(_=c,w=l,D=f,F=d,X=x,I=v,Z=M,V=m)),k===0)return null;const Y=_/k,et=w/k,it=1/k,Et=D-Y*B,Bt=F-et*B,Q=X-Y*W,xt=I-et*W,Mt=Z-Y*nt,Dt=V-et*nt,_t=Mt*xt-Dt*Q,Gt=Et*Dt-Bt*Mt,Ae=Q*Bt-xt*Et;if(n){if(_t<0||Gt<0||Ae<0)return null}else if((_t<0||Gt<0||Ae<0)&&(_t>0||Gt>0||Ae>0))return null;const Nt=_t+Gt+Ae;if(Nt===0)return null;const oe=it*(_t*B+Gt*W+Ae*nt);return(Nt>0?oe<0:oe>0)?null:this.at(oe/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bi extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sd=new ne,rs=new So,fa=new ys,rd=new U,pa=new U,ma=new U,ga=new U,ol=new U,va=new U,ad=new U,xa=new U;class Zt extends Pe{constructor(t=new Le,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ol.fromBufferAttribute(d,t),a?va.addScaledVector(ol,h):va.addScaledVector(ol.sub(e),h))}e.add(va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(fa.containsPoint(rs.origin)===!1&&(rs.intersectSphere(fa,rd)===null||rs.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(sd.copy(r).invert(),rs.copy(t.ray).applyMatrix4(sd),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const p=f[v],m=a[p.materialIndex],M=Math.max(p.start,u.start),C=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let E=M,R=C;E<R;E+=3){const T=o.getX(E),_=o.getX(E+1),w=o.getX(E+2);n=_a(this,m,t,i,c,h,d,T,_,w),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const v=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=v,m=x;p<m;p+=3){const M=o.getX(p),C=o.getX(p+1),E=o.getX(p+2);n=_a(this,a,t,i,c,h,d,M,C,E),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const p=f[v],m=a[p.materialIndex],M=Math.max(p.start,u.start),C=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let E=M,R=C;E<R;E+=3){const T=E,_=E+1,w=E+2;n=_a(this,m,t,i,c,h,d,T,_,w),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const v=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=v,m=x;p<m;p+=3){const M=p,C=p+1,E=p+2;n=_a(this,a,t,i,c,h,d,M,C,E),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function o0(s,t,e,i,n,r,a,o){let l;if(t.side===ni?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Yn,o),l===null)return null;xa.copy(o),xa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:s}}function _a(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,pa),s.getVertexPosition(l,ma),s.getVertexPosition(c,ga);const h=o0(s,t,e,i,pa,ma,ga,ad);if(h){const d=new U;Oi.getBarycoord(ad,pa,ma,ga,d),n&&(h.uv=Oi.getInterpolatedAttribute(n,o,l,c,d,new Rt)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,o,l,c,d,new Rt)),a&&(h.normal=Oi.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Oi.getNormal(pa,ma,ga,f.normal),h.face=f,h.barycoord=d}return h}class lh extends Ke{constructor(t=null,e=1,i=1,n,r,a,o,l,c=fe,h=fe,d,f){super(null,a,o,l,c,h,n,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class od extends gi{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Os=new ne,ld=new ne,ba=[],cd=new bs,l0=new ne,vr=new Zt,xr=new ys;class c0 extends Zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new od(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,l0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),cd.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(cd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),xr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Os),ld.multiplyMatrices(i,Os),vr.matrixWorld=ld,vr.raycast(t,ba);for(let a=0,o=ba.length;a<o;a++){const l=ba[a];l.instanceId=r,l.object=this,e.push(l)}ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new od(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(n*this.count),n,this.count,eh,Ji));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const as=new ys,h0=new Rt(.5,.5),ya=new U;class Wr{constructor(t=new Wn,e=new Wn,i=new Wn,n=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ji,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],v=r[8],x=r[9],p=r[10],m=r[11],M=r[12],C=r[13],E=r[14],R=r[15];if(n[0].setComponents(c-a,u-h,m-v,R-M).normalize(),n[1].setComponents(c+a,u+h,m+v,R+M).normalize(),n[2].setComponents(c+o,u+d,m+x,R+C).normalize(),n[3].setComponents(c-o,u-d,m-x,R-C).normalize(),i)n[4].setComponents(l,f,p,E).normalize(),n[5].setComponents(c-l,u-f,m-p,R-E).normalize();else if(n[4].setComponents(c-l,u-f,m-p,R-E).normalize(),e===ji)n[5].setComponents(c+l,u+f,m+p,R+E).normalize();else if(e===Hr)n[5].setComponents(l,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);const e=h0.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ya.x=n.normal.x>0?t.max.x:t.min.x,ya.y=n.normal.y>0?t.max.y:t.min.y,ya.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const hd=new ne;class ch{constructor(){this.coordinateSystem=ji,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];hd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Wr),i[n].setFromProjectionMatrix(hd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Wr),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new ch().copy(this)}}class Ju extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uo=new U,fo=new U,dd=new ne,_r=new So,Ma=new ys,ll=new U,ud=new U;class d0 extends Pe{constructor(t=new Le,e=new Ju){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)uo.fromBufferAttribute(e,n-1),fo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new pe(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(n),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;dd.copy(n).invert(),_r.copy(t.ray).applyMatrix4(dd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=u,p=v-1;x<p;x+=c){const m=h.getX(x),M=h.getX(x+1),C=Sa(this,t,_r,l,m,M,x);C&&e.push(C)}if(this.isLineLoop){const x=h.getX(v-1),p=h.getX(u),m=Sa(this,t,_r,l,x,p,v-1);m&&e.push(m)}}else{const u=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let x=u,p=v-1;x<p;x+=c){const m=Sa(this,t,_r,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Sa(this,t,_r,l,v-1,u,v-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sa(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(uo.fromBufferAttribute(o,n),fo.fromBufferAttribute(o,r),e.distanceSqToSegment(uo,fo,ll,ud)>i)return;ll.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ll);if(!(c<t.near||c>t.far))return{distance:c,point:ud.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class hh extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fd=new ne,vc=new So,wa=new ys,Ea=new U;class Qu extends Pe{constructor(t=new Le,e=new hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(n),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;fd.copy(n).invert(),vc.copy(t.ray).applyMatrix4(fd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let v=f,x=u;v<x;v++){const p=c.getX(v);Ea.fromBufferAttribute(d,p),pd(Ea,p,l,n,t,e,this)}}else{const f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let v=f,x=u;v<x;v++)Ea.fromBufferAttribute(d,v),pd(Ea,v,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pd(s,t,e,i,n,r,a){const o=vc.distanceSqToPoint(s);if(o<e){const l=new U;vc.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ju extends Ke{constructor(t=[],e=Qs,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jn extends Ke{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends Ke{constructor(t,e,i=gn,n,r,a,o=fe,l=fe,c,h=Zn,d=1){if(h!==Zn&&h!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class tf extends tr{constructor(t,e=gn,i=Qs,n,r,a=fe,o=fe,l,c=Zn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ef extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ci extends Le{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,n,a,2),v("x","z","y",1,-1,t,i,-e,n,a,3),v("x","y","z",1,-1,t,e,i,n,r,4),v("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function v(x,p,m,M,C,E,R,T,_,w,k){const D=E/_,F=R/w,B=E/2,X=R/2,I=T/2,W=_+1,Z=w+1;let V=0,nt=0;const Y=new U;for(let et=0;et<Z;et++){const it=et*F-X;for(let Et=0;Et<W;Et++){const Bt=Et*D-B;Y[x]=Bt*M,Y[p]=it*C,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[m]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Et/_),d.push(1-et/w),V+=1}}for(let et=0;et<w;et++)for(let it=0;it<_;it++){const Et=f+it+W*et,Bt=f+it+W*(et+1),Q=f+(it+1)+W*(et+1),xt=f+(it+1)+W*et;l.push(Et,Bt,xt),l.push(Bt,Q,xt),nt+=6}o.addGroup(u,nt,k),u+=nt,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zr extends Le{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new U,h=new Rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=i+d/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class dh extends Le{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],f=[],u=[];let v=0;const x=[],p=i/2;let m=0;M(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(u,2));function M(){const E=new U,R=new U;let T=0;const _=(e-t)/i;for(let w=0;w<=r;w++){const k=[],D=w/r,F=D*(e-t)+t;for(let B=0;B<=n;B++){const X=B/n,I=X*l+o,W=Math.sin(I),Z=Math.cos(I);R.x=F*W,R.y=-D*i+p,R.z=F*Z,d.push(R.x,R.y,R.z),E.set(W,_,Z).normalize(),f.push(E.x,E.y,E.z),u.push(X,1-D),k.push(v++)}x.push(k)}for(let w=0;w<n;w++)for(let k=0;k<r;k++){const D=x[k][w],F=x[k+1][w],B=x[k+1][w+1],X=x[k][w+1];(t>0||k!==0)&&(h.push(D,F,X),T+=3),(e>0||k!==r-1)&&(h.push(F,B,X),T+=3)}c.addGroup(m,T,0),m+=T}function C(E){const R=v,T=new Rt,_=new U;let w=0;const k=E===!0?t:e,D=E===!0?1:-1;for(let B=1;B<=n;B++)d.push(0,p*D,0),f.push(0,D,0),u.push(.5,.5),v++;const F=v;for(let B=0;B<=n;B++){const I=B/n*l+o,W=Math.cos(I),Z=Math.sin(I);_.x=k*Z,_.y=p*D,_.z=k*W,d.push(_.x,_.y,_.z),f.push(0,D,0),T.x=W*.5+.5,T.y=Z*.5*D+.5,u.push(T.x,T.y),v++}for(let B=0;B<n;B++){const X=R+B,I=F+B;E===!0?h.push(I,I+1,X):h.push(I+1,I,X),w+=3}c.addGroup(m,w,E===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uh extends dh{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new uh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class u0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],f=i[n+1]-h,u=(a-h)/f;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new Rt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new U,n=[],r=[],a=[],o=new U,l=new ne;for(let u=0;u<=t;u++){const v=u/t;n[u]=this.getTangentAt(v,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Kt(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,v))}a[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(Kt(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(n[v],u*v)),a[v].crossVectors(n[v],r[v])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function fh(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,n(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const md=new U,gd=new U,cl=new fh,hl=new fh,dl=new fh;class nf extends u0{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new U){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(gd.subVectors(n[0],n[1]).add(n[0]),c=gd);const d=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(md.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=md),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),v<1e-4&&(v=x),p<1e-4&&(p=x),cl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,v,x,p),hl.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,v,x,p),dl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,v,x,p)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),hl.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),dl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(cl.calc(l),hl.calc(l),dl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new U().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class yi extends Le{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,f=e/l,u=[],v=[],x=[],p=[];for(let m=0;m<h;m++){const M=m*f-a;for(let C=0;C<c;C++){const E=C*d-r;v.push(E,-M,0),x.push(0,0,1),p.push(C/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const C=M+c*m,E=M+c*(m+1),R=M+1+c*(m+1),T=M+1+c*m;u.push(C,E,T),u.push(E,R,T)}this.setIndex(u),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ph extends Le{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const f=(e-t)/n,u=new U,v=new Rt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){const m=r+p/i*a;u.x=d*Math.cos(m),u.y=d*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),v.x=(u.x/e+1)/2,v.y=(u.y/e+1)/2,h.push(v.x,v.y)}d+=f}for(let x=0;x<n;x++){const p=x*(i+1);for(let m=0;m<i;m++){const M=m+p,C=M,E=M+i+1,R=M+i+2,T=M+1;o.push(C,E,T),o.push(E,R,T)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wo extends Le{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new U,f=new U,u=[],v=[],x=[],p=[];for(let m=0;m<=i;m++){const M=[],C=m/i,E=a+C*o,R=t*Math.cos(E),T=Math.sqrt(t*t-R*R);let _=0;m===0&&a===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const k=w/e,D=n+k*r;d.x=-T*Math.cos(D),d.y=R,d.z=T*Math.sin(D),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(k+_,1-C),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){const C=h[m][M+1],E=h[m][M],R=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&u.push(C,E,T),(m!==i-1||l<Math.PI)&&u.push(E,R,T)}this.setIndex(u),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function er(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(vd(n))n.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(vd(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function li(s){const t={};for(let e=0;e<s.length;e++){const i=er(s[e]);for(const n in i)t[n]=i[n]}return t}function vd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function f0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function sf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ir={clone:er,merge:li};var p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(n.value);break;case"v2":this.uniforms[i].value=new Rt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new U().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Se().fromArray(n.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ne().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rf extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g0 extends Qn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class v0 extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x0 extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ul={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(xd(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!xd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function xd(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class _0{constructor(t,e,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],v=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const b0=new _0;class mh{constructor(t){this.manager=t!==void 0?t:b0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ks=new WeakMap;class y0 extends mh{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ul.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=ks.get(a);d===void 0&&(d=[],ks.set(a,d)),d.push({onLoad:e,onError:n})}return a}const o=Vr("img");function l(){h(),e&&e(this);const d=ks.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}ks.delete(this),r.manager.itemEnd(t)}function c(d){h(),n&&n(d),ul.remove(`image:${t}`);const f=ks.get(this)||[];for(let u=0;u<f.length;u++){const v=f[u];v.onError&&v.onError(d)}ks.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ul.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class M0 extends mh{constructor(t){super(t)}load(t,e,i,n){const r=new Ke,a=new y0(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class Eo extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class S0 extends Eo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const fl=new ne,_d=new U,bd=new U;class af{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Hr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ta=new U,Aa=new _s,en=new U;class of extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ta,Aa,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Aa,en.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ta,Aa,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Aa,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new U,yd=new Rt,Md=new Rt;class Ui extends of{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,yd,Md),e.subVectors(Md,yd)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class w0 extends af{constructor(){super(new Ui(90,1,.5,500)),this.isPointLightShadow=!0}}class E0 extends Eo{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class gh extends of{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class T0 extends af{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sd extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new T0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class A0 extends Eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bs=-90,zs=1;class xc extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ui(Bs,zs,t,e);n.layers=this.layers,this.add(n);const r=new Ui(Bs,zs,t,e);r.layers=this.layers,this.add(r);const a=new Ui(Bs,zs,t,e);a.layers=this.layers,this.add(a);const o=new Ui(Bs,zs,t,e);o.layers=this.layers,this.add(o);const l=new Ui(Bs,zs,t,e);l.layers=this.layers,this.add(l);const c=new Ui(Bs,zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ji)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class R0 extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class C0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=P0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function P0(){this._document.hidden===!1&&this.reset()}const wd=new ne;class L0{constructor(t,e,i=0,n=1/0){this.ray=new So(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(t,e=!0,i=[]){return _c(t,this,i,e),i.sort(Ed),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)_c(t[n],this,i,e);return i.sort(Ed),i}}function Ed(s,t){return s.distance-t.distance}function _c(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)_c(r[a],t,e,!0)}}function Td(s,t,e,i){const n=D0(i);switch(e){case Ou:return s*t;case eh:return s*t/n.components*n.byteLength;case ih:return s*t/n.components*n.byteLength;case ms:return s*t*2/n.components*n.byteLength;case nh:return s*t*2/n.components*n.byteLength;case ku:return s*t*3/n.components*n.byteLength;case Qi:return s*t*4/n.components*n.byteLength;case sh:return s*t*4/n.components*n.byteLength;case Ha:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wa:case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zl:case Hl:return Math.max(s,16)*Math.max(t,8)/4;case Bl:case Gl:return Math.max(s,8)*Math.max(t,8)/2;case Vl:case Wl:case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $l:case ro:case Yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case cc:case hc:case dc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case uc:case fc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ao:case pc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function D0(s){switch(s){case Ei:case Iu:return{byteLength:1,components:1};case Gr:case Nu:case pi:return{byteLength:2,components:1};case jc:case th:return{byteLength:2,components:4};case gn:case Qc:case Ji:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lf(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function I0(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,v)=>u.start-v.start);let f=0;for(let u=1;u<d.length;u++){const v=d[f],x=d[u];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,v=d.length;u<v;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
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
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`uniform sampler2D dfgLUT;
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
}`,Dg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
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
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform float backgroundBlurriness;
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
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
}`,zv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,Zv=`#define LAMBERT
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
}`,Jv=`#define MATCAP
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
}`,Qv=`#define MATCAP
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
}`,jv=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,ax=`#define TOON
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
}`,ox=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:N0,alphahash_pars_fragment:U0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:k0,alphatest_pars_fragment:B0,aomap_fragment:z0,aomap_pars_fragment:G0,batching_pars_vertex:H0,batching_vertex:V0,begin_vertex:W0,beginnormal_vertex:$0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:j0,color_pars_fragment:tg,color_pars_vertex:eg,color_vertex:ig,common:ng,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:ag,emissivemap_fragment:og,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:hg,envmap_fragment:dg,envmap_common_pars_fragment:ug,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Eg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:vg,fog_fragment:xg,fog_pars_fragment:_g,gradientmap_pars_fragment:bg,lightmap_pars_fragment:yg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Sg,lights_pars_begin:wg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:Ng,lightprobes_pars_fragment:Ug,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Bg,map_fragment:zg,map_pars_fragment:Gg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:$g,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Kg,morphtarget_vertex:Zg,normal_fragment_begin:Jg,normal_fragment_maps:Qg,normal_pars_fragment:jg,normal_pars_vertex:tv,normal_vertex:ev,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:rv,iridescence_pars_fragment:av,opaque_fragment:ov,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:hv,dithering_fragment:dv,dithering_pars_fragment:uv,roughnessmap_fragment:fv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:vv,shadowmask_pars_fragment:xv,skinbase_vertex:_v,skinning_pars_vertex:bv,skinning_vertex:yv,skinnormal_vertex:Mv,specularmap_fragment:Sv,specularmap_pars_fragment:wv,tonemapping_fragment:Ev,tonemapping_pars_fragment:Tv,transmission_fragment:Av,transmission_pars_fragment:Rv,uv_pars_fragment:Cv,uv_pars_vertex:Pv,uv_vertex:Lv,worldpos_vertex:Dv,background_vert:Iv,background_frag:Nv,backgroundCube_vert:Uv,backgroundCube_frag:Fv,cube_vert:Ov,cube_frag:kv,depth_vert:Bv,depth_frag:zv,distance_vert:Gv,distance_frag:Hv,equirect_vert:Vv,equirect_frag:Wv,linedashed_vert:$v,linedashed_frag:Xv,meshbasic_vert:qv,meshbasic_frag:Yv,meshlambert_vert:Kv,meshlambert_frag:Zv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:jv,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:ix,meshphysical_vert:nx,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:hx,sprite_vert:dx,sprite_frag:ux},gt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},un={basic:{uniforms:li([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:li([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:li([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:li([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:li([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new ut(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:li([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:li([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:li([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:li([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:li([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:li([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:li([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:li([gt.lights,gt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};un.physical={uniforms:li([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ra={r:0,b:0,g:0},fx=new ne,cf=new kt;cf.set(-1,0,0,0,1,0,0,0,1);function px(s,t,e,i,n,r){const a=new ut(0);let o=n===!0?0:1,l,c,h=null,d=0,f=null;function u(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){const E=M.backgroundBlurriness>0;C=t.get(C,E)}return C}function v(M){let C=!1;const E=u(M);E===null?p(a,o):E&&E.isColor&&(p(E,1),C=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,C){const E=u(C);E&&E.isCubeTexture?(c===void 0&&(c=new Zt(new ci(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:er(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cf),c.material.toneMapped=te.getTransfer(E.colorSpace)!==ae,(h!==E||d!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Zt(new yi(2,2),new fi({name:"BackgroundMaterial",uniforms:er(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=te.getTransfer(E.colorSpace)!==ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,C){M.getRGB(Ra,sf(s)),e.buffers.color.setClear(Ra.r,Ra.g,Ra.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:v,addToRenderList:x,dispose:m}}function mx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,a=!1;function o(F,B,X,I,W){let Z=!1;const V=d(F,I,X,B);r!==V&&(r=V,c(r.object)),Z=u(F,I,X,W),Z&&v(F,I,X,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(F,B,X,I),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,B,X,I){const W=I.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const V=F.isInstancedMesh===!0?F.id:0;let nt=Z[V];nt===void 0&&(nt={},Z[V]=nt);let Y=nt[X.id];Y===void 0&&(Y={},nt[X.id]=Y);let et=Y[W];return et===void 0&&(et=f(l()),Y[W]=et),et}function f(F){const B=[],X=[],I=[];for(let W=0;W<e;W++)B[W]=0,X[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:I,object:F,attributes:{},index:null}}function u(F,B,X,I){const W=r.attributes,Z=B.attributes;let V=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const it=W[Y];let Et=Z[Y];if(Et===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Et=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Et=F.instanceColor)),it===void 0||it.attribute!==Et||Et&&it.data!==Et.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function v(F,B,X,I){const W={},Z=B.attributes;let V=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let it=Z[Y];it===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(it=F.instanceColor));const Et={};Et.attribute=it,it&&it.data&&(Et.data=it.data),W[Y]=Et,V++}r.attributes=W,r.attributesNum=V,r.index=I}function x(){const F=r.newAttributes;for(let B=0,X=F.length;B<X;B++)F[B]=0}function p(F){m(F,0)}function m(F,B){const X=r.newAttributes,I=r.enabledAttributes,W=r.attributeDivisors;X[F]=1,I[F]===0&&(s.enableVertexAttribArray(F),I[F]=1),W[F]!==B&&(s.vertexAttribDivisor(F,B),W[F]=B)}function M(){const F=r.newAttributes,B=r.enabledAttributes;for(let X=0,I=B.length;X<I;X++)B[X]!==F[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function C(F,B,X,I,W,Z,V){V===!0?s.vertexAttribIPointer(F,B,X,W,Z):s.vertexAttribPointer(F,B,X,I,W,Z)}function E(F,B,X,I){x();const W=I.attributes,Z=X.getAttributes(),V=B.defaultAttributeValues;for(const nt in Z){const Y=Z[nt];if(Y.location>=0){let et=W[nt];if(et===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(et=F.instanceColor)),et!==void 0){const it=et.normalized,Et=et.itemSize,Bt=t.get(et);if(Bt===void 0)continue;const Q=Bt.buffer,xt=Bt.type,Mt=Bt.bytesPerElement,Dt=xt===s.INT||xt===s.UNSIGNED_INT||et.gpuType===Qc;if(et.isInterleavedBufferAttribute){const _t=et.data,Gt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Ae=et.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Nt=0;Nt<Y.locationSize;Nt++)m(Y.location+Nt,_t.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Nt=0;Nt<Y.locationSize;Nt++)p(Y.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Nt=0;Nt<Y.locationSize;Nt++)C(Y.location+Nt,Et/Y.locationSize,xt,it,Gt*Mt,(Ae+Et/Y.locationSize*Nt)*Mt,Dt)}else{if(et.isInstancedBufferAttribute){for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t,et.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<Y.locationSize;_t++)p(Y.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let _t=0;_t<Y.locationSize;_t++)C(Y.location+_t,Et/Y.locationSize,xt,it,Et*Mt,Et/Y.locationSize*_t*Mt,Dt)}}else if(V!==void 0){const it=V[nt];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(Y.location,it);break;case 3:s.vertexAttrib3fv(Y.location,it);break;case 4:s.vertexAttrib4fv(Y.location,it);break;default:s.vertexAttrib1fv(Y.location,it)}}}}M()}function R(){k();for(const F in i){const B=i[F];for(const X in B){const I=B[X];for(const W in I){const Z=I[W];for(const V in Z)h(Z[V].object),delete Z[V];delete I[W]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;const B=i[F.id];for(const X in B){const I=B[X];for(const W in I){const Z=I[W];for(const V in Z)h(Z[V].object),delete Z[V];delete I[W]}}delete i[F.id]}function _(F){for(const B in i){const X=i[B];for(const I in X){const W=X[I];if(W[F.id]===void 0)continue;const Z=W[F.id];for(const V in Z)h(Z[V].object),delete Z[V];delete W[F.id]}}}function w(F){for(const B in i){const X=i[B],I=F.isInstancedMesh===!0?F.id:0,W=X[I];if(W!==void 0){for(const Z in W){const V=W[Z];for(const nt in V)h(V[nt].object),delete V[nt];delete W[Z]}delete X[I],Object.keys(X).length===0&&delete i[B]}}}function k(){D(),a=!0,r!==n&&(r=n,c(r.object))}function D(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:k,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function gx(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vx(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==Qi&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const w=_===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ei&&_!==Ji&&!w&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:E,maxSamples:R,samples:T}}function xx(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Wn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||v===null||v.length===0||r&&!p)r?h(null):c();else{const M=r?0:i,C=M*4;let E=m.clippingState||null;l.value=E,E=h(v,f,C,u);for(let R=0;R!==C;++R)E[R]=e[R];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const m=u+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let C=0,E=u;C!==x;++C,E+=4)a.copy(d[C]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}class vh extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ju(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ci(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:ps});r.uniforms.tEquirect.value=e;const a=new Zt(n,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Ye),new xc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Ad=256,_x=3,bx=20,hf=256,df=16,yx=3,Mx=new U,Sx=new ut;class po{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xc(1,10,null),this._boxMesh=new Zt(new ci(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=Mx}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,v=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Sx));const p=new xc(i,n,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=v,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ad,Bm(t))}_fromTexture(t,e){t.mapping===Qs||t.mapping===Br?this._setSize(t.image.length===0?Ad:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=Rd(t,!1,!1),i=Math.log2(t)-_x;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Rd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Qs||t.mapping===Br?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=wx(),this._integrationMaterial=Ex());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/df);for(let a=0;a<=i;a++){const o=po.lodToRoughness(a,i);if(a>i-yx)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(hf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Tx());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function Rd(s,t,e){return new vh(s,{minFilter:Pn,generateMipmaps:t,type:pi,colorSpace:oo,depthBuffer:e})}function Jr(s,t,e){return new fi({name:s,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:ni,blending:ps,depthTest:!1,depthWrite:!1})}function wx(){return Jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hf}u

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
	`)}function Ex(){return Jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

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
	`)}function Tx(){return Jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bx}
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
	`)}function Cd(){return Jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pd(){return Jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ax(s){let t=new WeakMap,e=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Uo||u===Fo)if(t.has(f)){const v=t.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const x=new vh(v.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,v=u===Uo||u===Fo,x=u===Qs||u===Br;if(v||x){let p=e.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new po(s)),p=v?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const M=f.image;return v&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new po(s)),p=v?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===Uo?f.mapping=Qs:u===Fo&&(f.mapping=Br),f}function l(f){let u=0;const v=6;for(let x=0;x<v;x++)f[x]!==void 0&&u++;return u===v}function c(f){const u=f.target;u.removeEventListener("dispose",c);const v=t.get(u);v!==void 0&&(t.delete(u),v.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const v=e.get(u);v!==void 0&&(e.delete(u),v.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Rx(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Xa("WebGLRenderer: "+i+" extension not supported."),n}}}function Cx(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(v=>delete n[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(const p in v.attributes)t.remove(v.attributes[p]);v.removeEventListener("dispose",o),delete n[v.id],a.unregister(v);const x=r.get(v);x&&(t.remove(x),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(v,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(v){const x=v.attributes;for(const p in x)t.update(x[p],s.ARRAY_BUFFER)}function d(v){const x=v.index,p=v.attributes.position;let m=0;if(p===void 0)return;const M=x!==null?x.array.length:p.array.length/3-1,C=p.count>=65535?Ku:Yu,E=new C(Math.ceil(M/3)*6,1),R=E.array;if(x!==null){const _=x.array;m=x.version;for(let w=0,k=0;w<M;w+=3){const D=_[w+0],F=_[w+1],B=_[w+2];R[k++]=D,R[k++]=F,R[k++]=F,R[k++]=B,R[k++]=B,R[k++]=D}}else{m=p.version;for(let _=0,w=0;_<M;_+=3){const k=_+0,D=_+1,F=_+2;R[w++]=k,R[w++]=D,R[w++]=D,R[w++]=F,R[w++]=F,R[w++]=k}}E.version=m;const T=r.get(v);T&&t.remove(T),r.set(v,E)}function f(v){const x=r.get(v);if(x){const p=v.index;p!==null&&x.version<p.version&&d(v)}else d(v);return r.get(v)}function u(){for(const v in n){const x=n[v].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Px(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*a),e.update(f,i,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(i,f,r,d*a,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let x=0;for(let p=0;p<u;p++)x+=f[p];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Dx(s,t,e){const i=new WeakMap,n=new Se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let D=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var u=D;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let R=o.attributes.position.count*E,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const _=new Float32Array(R*T*4*d),w=new Xu(_,R,T,d);w.type=Ji,w.needsUpdate=!0;const k=E*4;for(let F=0;F<d;F++){const B=m[F],X=M[F],I=C[F],W=R*T*4*F;for(let Z=0;Z<B.count;Z++){const V=Z*k;v===!0&&(n.fromBufferAttribute(B,Z),_[W+V+0]=n.x,_[W+V+1]=n.y,_[W+V+2]=n.z,_[W+V+3]=0),x===!0&&(n.fromBufferAttribute(X,Z),_[W+V+4]=n.x,_[W+V+5]=n.y,_[W+V+6]=n.z,_[W+V+7]=0),p===!0&&(n.fromBufferAttribute(I,Z),_[W+V+8]=n.x,_[W+V+9]=n.y,_[W+V+10]=n.z,_[W+V+11]=I.itemSize===4?n.w:1)}}f={count:d,texture:w,size:new Rt(R,T)},i.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ix(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Nx={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[yo]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function Ux(s,t,e,i,n,r){const a=new mi(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Le;h.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pe([0,2,0,0,2,0],2));const d=new rf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Zt(h,d),u=new gh(-1,1,1,-1,0,1);let v=null,x=null,p=!1,m,M=null,C=[],E=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let _=0;_<C.length;_++){const w=C[_];w.setSize&&w.setSize(R,T)}},this.setEffects=function(R){C=R,E=C.length>0&&C[0].isRenderPass===!0;const T=a.width,_=a.height;C.length>0&&o===null&&(o=new mi(T,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new mi(T,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}));const w=n===!0&&C.some(k=>k.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new tr(T,_),r===!0&&(c.format=qn,c.type=js)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let k=0;k<C.length;k++){const D=C[k];D.setSize&&D.setSize(T,_),w&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(R,T){if(p||R.toneMapping===Dn&&C.length===0)return!1;if(M=T,T!==null){const _=T.width,w=T.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return E===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Dn,!0},this.hasRenderPass=function(){return E},this.end=function(R,T){R.toneMapping=m,p=!0;let _=a,w=o;for(let k=0;k<C.length;k++){const D=C[k];D.enabled!==!1&&(D.render(R,w,_,T),D.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(v!==R.outputColorSpace||x!==R.toneMapping){v=R.outputColorSpace,x=R.toneMapping,d.defines={},te.getTransfer(v)===ae&&(d.defines.SRGB_TRANSFER="");const k=Nx[x];k&&(d.defines[k]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(M),R.render(f,u),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const uf=new Ke,ff=new tr(1,1),pf=new tf(1),mf=new Xu,gf=new $m,vf=new ju,Ld=[],Dd=[],Id=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function or(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Ld[n];if(r===void 0&&(r=new Float32Array(n),Ld[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function To(s,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Fx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ox(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function kx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function Bx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function zx(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Ud.set(i),s.uniformMatrix2fv(this.addr,!1,Ud),Oe(e,i)}}function Gx(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Nd.set(i),s.uniformMatrix3fv(this.addr,!1,Nd),Oe(e,i)}}function Hx(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Id.set(i),s.uniformMatrix4fv(this.addr,!1,Id),Oe(e,i)}}function Vx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function $x(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function Xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function qx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function Kx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function Zx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function Ao(s){return s.version===0&&(s.compareFunction=Gu,s.needsUpdate=!0),s}function Jx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ao(ff):r=uf,e.setTexture2D(t||r,n)}function Qx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||gf,n)}function jx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ao(pf):r=vf,e.setTextureCube(t||r,n)}function t_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||mf,n)}function e_(s){switch(s){case 5126:return Fx;case 35664:return Ox;case 35665:return kx;case 35666:return Bx;case 35674:return zx;case 35675:return Gx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return $x;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(s,t){s.uniform1fv(this.addr,t)}function n_(s,t){const e=or(t,this.size,2);s.uniform2fv(this.addr,e)}function s_(s,t){const e=or(t,this.size,3);s.uniform3fv(this.addr,e)}function r_(s,t){const e=or(t,this.size,4);s.uniform4fv(this.addr,e)}function a_(s,t){const e=or(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function o_(s,t){const e=or(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function l_(s,t){const e=or(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function c_(s,t){s.uniform1iv(this.addr,t)}function h_(s,t){s.uniform2iv(this.addr,t)}function d_(s,t){s.uniform3iv(this.addr,t)}function u_(s,t){s.uniform4iv(this.addr,t)}function f_(s,t){s.uniform1uiv(this.addr,t)}function p_(s,t){s.uniform2uiv(this.addr,t)}function m_(s,t){s.uniform3uiv(this.addr,t)}function g_(s,t){s.uniform4uiv(this.addr,t)}function v_(s,t,e){const i=this.cache,n=t.length,r=To(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ao(ff):a=uf;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function x_(s,t,e){const i=this.cache,n=t.length,r=To(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||gf,r[a])}function __(s,t,e){const i=this.cache,n=t.length,r=To(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Ao(pf):a=vf;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function b_(s,t,e){const i=this.cache,n=t.length,r=To(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||mf,r[a])}function y_(s){switch(s){case 5126:return i_;case 35664:return n_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return d_;case 35669:case 35673:return u_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return b_}}class M_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=e_(e.type)}}class S_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y_(e.type)}}class w_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Fd(s,t){s.seq.push(t),s.map[t.id]=t}function E_(s,t,e){const i=s.name,n=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),a=pl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Fd(e,c===void 0?new M_(o,s,t):new S_(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new w_(o),Fd(e,d)),e=d}}}class qa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);E_(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Od(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const T_=37297;let A_=0;function R_(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const kd=new kt;function C_(s){te._getMatrix(kd,te.workingColorSpace,s);const t=`mat3( ${kd.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case lo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bd(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+R_(s.getShaderSource(t),o)}else return r}function P_(s,t){const e=C_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const L_={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[Kc]:"ACESFilmic",[Jc]:"AgX",[yo]:"Neutral",[Zc]:"Custom"};function D_(s,t){const e=L_[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ca=new U;function I_(){te.getLuminanceCoefficients(Ca);const s=Ca.x.toFixed(4),t=Ca.y.toFixed(4),e=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function U_(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function F_(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Cr(s){return s!==""}function zd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Gd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(O_,k_)}function k_(s,t){const e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return bc(e)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(s){return s.replace(B_,z_)}function z_(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Vd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const G_={[Nr]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function H_(s){return G_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V_={[Br]:"ENVMAP_MODE_REFRACTION"};function W_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":V_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $_={[Lu]:"ENVMAP_BLENDING_MULTIPLY",[Sm]:"ENVMAP_BLENDING_MIX",[wm]:"ENVMAP_BLENDING_ADD"};function X_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$_[s.combine]||"ENVMAP_BLENDING_NONE"}function q_(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=H_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=W_(e),d=X_(e),f=N_(e),u=U_(r),v=n.createProgram();let x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Cr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(x=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?D_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,P_("linearToOutputTexel",e.outputColorSpace),I_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),a=bc(a),a=zd(a,e),a=Gd(a,e),o=bc(o),o=zd(o,e),o=Gd(o,e),a=Hd(a),o=Hd(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+x+a,C=m+p+o,E=Od(n,n.VERTEX_SHADER,M),R=Od(n,n.FRAGMENT_SHADER,C);n.attachShader(v,E),n.attachShader(v,R),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(D){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(v)||"",B=n.getShaderInfoLog(E)||"",X=n.getShaderInfoLog(R)||"",I=F.trim(),W=B.trim(),Z=X.trim();let V=!0,nt=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,E,R);else{const Y=Bd(n,E,"vertex"),et=Bd(n,R,"fragment");ie("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+Y+`
`+et)}else I!==""?Ut("WebGLProgram: Program Info Log:",I):(W===""||Z==="")&&(nt=!1);nt&&(D.diagnostics={runnable:V,programLog:I,vertexShader:{log:W,prefix:x},fragmentShader:{log:Z,prefix:p}})}n.deleteShader(E),n.deleteShader(R),_=new qa(n,v),w=F_(n,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(v,T_)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=R,this}let Y_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Z_(t),e.set(t,i)),i}}class Z_{constructor(t){this.id=Y_++,this.code=t,this.usedTimes=0}}function J_(s){return s===ms||s===ro||s===ao}function Q_(s,t,e,i,n,r){const a=new ah,o=new K_,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,w,k,D,F,B){const X=D.fog,I=F.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||W,Z),nt=f[_.type];let Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,it=et!==void 0?et.length:0;let Et=0;I.morphAttributes.position!==void 0&&(Et=1),I.morphAttributes.normal!==void 0&&(Et=2),I.morphAttributes.color!==void 0&&(Et=3);let Bt,Q,xt,Mt;if(nt){const vt=un[nt];Bt=vt.vertexShader,Q=vt.fragmentShader}else{Bt=_.vertexShader,Q=_.fragmentShader;const vt=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,vt,le),xt=vt.id,Mt=le.id}const Dt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,Nt=!!_.map,oe=!!_.matcap,de=!!V,Jt=de&&V.isPMREMTexture===!0,$e=!!_.aoMap,De=!!_.lightMap,vi=!!_.bumpMap&&_.wireframe===!1,ye=!!_.normalMap,tn=!!_.displacementMap,ke=!!_.emissiveMap,Ri=!!_.metalnessMap,Ci=!!_.roughnessMap,Pi=_.anisotropy>0,O=_.clearcoat>0,Li=_.diffuseRoughness>0,_e=_.dispersion>0,be=_.retroreflectivity>0,mt=_.iridescence>0,Ie=_.sheen>0,It=_.transmission>0,Ot=Pi&&!!_.anisotropyMap,A=O&&!!_.clearcoatMap,b=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,st=Li&&!!_.diffuseRoughnessMap,tt=mt&&!!_.iridescenceMap,ot=mt&&!!_.iridescenceThicknessMap,ft=Ie&&!!_.sheenColorMap,K=Ie&&!!_.sheenRoughnessMap,J=!!_.specularMap,ct=!!_.specularColorMap,L=!!_.specularIntensityMap,j=It&&!!_.transmissionMap,q=It&&!!_.thicknessMap,ht=!!_.gradientMap,at=!!_.alphaMap,lt=_.alphaTest>0,Ct=!!_.alphaHash,$t=!!_.extensions;let rt=Dn;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Pt=Jt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Wt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Bt,fragmentShader:Q,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,outputColorSpace:Dt===null?s.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:oe,envMap:de,envMapMode:de&&V.mapping,envMapPMREM:Jt,envMapMaxLod:Jt?Pt.length-1:null,envMapSize:Jt?Pt[0].width:null,aoMap:$e,lightMap:De,bumpMap:vi,normalMap:ye,displacementMap:tn,emissiveMap:ke,normalMapObjectSpace:ye&&_.normalMapType===Am,normalMapTangentSpace:ye&&_.normalMapType===mc,packedNormalMap:ye&&_.normalMapType===mc&&J_(_.normalMap.format),metalnessMap:Ri,roughnessMap:Ci,anisotropy:Pi,anisotropyMap:Ot,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:Li,diffuseRoughnessMap:st,dispersion:_e,retroreflection:be,iridescence:mt,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:Ie,sheenColorMap:ft,sheenRoughnessMap:K,specularMap:J,specularColorMap:ct,specularIntensityMap:L,transmission:It,transmissionMap:j,thicknessMap:q,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Ur&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:Ct,combine:_.combine,mapUv:Nt&&u(_.map.channel),aoMapUv:$e&&u(_.aoMap.channel),lightMapUv:De&&u(_.lightMap.channel),bumpMapUv:vi&&u(_.bumpMap.channel),normalMapUv:ye&&u(_.normalMap.channel),displacementMapUv:tn&&u(_.displacementMap.channel),emissiveMapUv:ke&&u(_.emissiveMap.channel),metalnessMapUv:Ri&&u(_.metalnessMap.channel),roughnessMapUv:Ci&&u(_.roughnessMap.channel),anisotropyMapUv:Ot&&u(_.anisotropyMap.channel),clearcoatMapUv:A&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&u(_.sheenRoughnessMap.channel),specularMapUv:J&&u(_.specularMap.channel),specularColorMapUv:ct&&u(_.specularColorMap.channel),specularIntensityMapUv:L&&u(_.specularIntensityMap.channel),transmissionMapUv:j&&u(_.transmissionMap.channel),thicknessMapUv:q&&u(_.thicknessMap.channel),alphaMapUv:at&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ye||Pi),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Nt||at),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:ke&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fi,flipSided:_.side===ni,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$t&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&_.extensions.multiDraw===!0||Ae)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function x(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)w.push(k),w.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(p(w,_),m(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const w=f[_.type];let k;if(w){const D=un[w];k=ir.clone(D.uniforms)}else k=_.uniforms;return k}function C(_,w){let k=h.get(w);return k!==void 0?++k.usedTimes:(k=new q_(s,w,_,n),c.push(k),h.set(w,k)),k}function E(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:T}}function j_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function tb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Wd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $d(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,v,x,p,m){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:u,material:v,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},s[t]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=v,M.materialVariant=a(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=p,M.group=m),t++,M}function l(f,u,v,x,p,m,M){M.reversedDepth===!0&&(p=-p);const C=o(f,u,v,x,p,m);v.transmission>0?i.push(C):v.transparent===!0?n.push(C):e.push(C)}function c(f,u,v,x,p,m){const M=o(f,u,v,x,p,m);v.transmission>0?i.unshift(M):v.transparent===!0?n.unshift(M):e.unshift(M)}function h(f,u){e.length>1&&e.sort(f||tb),i.length>1&&i.sort(u||Wd),n.length>1&&n.sort(u||Wd)}function d(){for(let f=t,u=s.length;f<u;f++){const v=s[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function eb(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new $d,s.set(i,[a])):n>=r.length?(a=new $d,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ib(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ut};break;case"SpotLight":e={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function nb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sb=0;function rb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ab(s){const t=new ib,e=nb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const n=new U,r=new ne,a=new ne;function o(c){let h=0,d=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let u=0,v=0,x=0,p=0,m=0,M=0,C=0,E=0,R=0,T=0,_=0,w=0,k=0,D=0;c.sort(rb);for(let B=0,X=c.length;B<X;B++){const I=c[B],W=I.color,Z=I.intensity,V=I.distance;let nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ms?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*Z,d+=W.g*Z,f+=W.b*Z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],Z);D++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[v]=it,i.sunShadowMap[v]=nt;const Et=et.getViewportCount();for(let Bt=0;Bt<Et;Bt++)i.sunShadowMatrix[x+Bt]=et.getMatrix(Bt),i.sunShadowCascade[x+Bt]=et._cascadeData[Bt];x+=Et,v++}i.sun[u]=Y,u++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.directionalShadow[p]=it,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=I.shadow.matrix,R++}i.directional[p]=Y,p++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[M]=Y;const et=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,et.updateMatrices(I),I.castShadow&&k++),i.spotLightMatrix[M]=et.matrix,I.castShadow){const it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.spotShadow[M]=it,i.spotShadowMap[M]=nt,_++}M++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[C]=Y,C++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,i.pointShadow[m]=it,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=I.shadow.matrix,T++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(Z),Y.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[E]=Y,E++}}C>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.sunLength!==u||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==M||F.rectAreaLength!==C||F.hemiLength!==E||F.numSunShadows!==v||F.numDirectionalShadows!==R||F.numPointShadows!==T||F.numSpotShadows!==_||F.numSpotMaps!==w||F.numLightProbes!==D)&&(i.sun.length=u,i.directional.length=p,i.spot.length=M,i.rectArea.length=C,i.point.length=m,i.hemi.length=E,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-k,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=D,F.sunLength=u,F.directionalLength=p,F.pointLength=m,F.spotLength=M,F.rectAreaLength=C,F.hemiLength=E,F.numSunShadows=v,F.numDirectionalShadows=R,F.numPointShadows=T,F.numSpotShadows=_,F.numSpotMaps=w,F.numLightProbes=D,i.version=sb++)}function l(c,h){let d=0,f=0,u=0,v=0,x=0,p=0;const m=h.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){const E=c[M];if(E.isSunLight){const R=i.sun[d];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(m),d++}else if(E.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(n),R.direction.transformDirection(m),f++}else if(E.isSpotLight){const R=i.spot[v];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(n),R.direction.transformDirection(m),v++}else if(E.isRectAreaLight){const R=i.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const R=i.point[u];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Xd(s){const t=new ab(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),n.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ob(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Xd(s),t.set(n,[o])):r>=a.length?(o=new Xd(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
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
}`,hb=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],db=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],qd=new ne,br=new U,ml=new U;function ub(s,t,e){let i=new Wr;const n=new Rt,r=new Rt,a=new Se,o=new v0,l=new x0,c={},h=e.maxTextureSize,d={[Yn]:ni,[ni]:Yn,[Fi]:Fi},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const v=new Le;v.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let m=this.type;this.render=function(T,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===sm&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nr);const k=s.getRenderTarget(),D=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ps),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=m!==this.type;X&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=T.length;I<W;I++){const Z=T[I],V=Z.shadow;if(V===void 0){Ut("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const nt=V.getFrameExtents();n.multiply(nt),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,V.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Rr){if(Z.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new mi(n.x,n.y,{format:ms,type:pi,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new tr(n.x,n.y,Ji),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=Zn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fe,V.map.depthTexture.magFilter=fe}else Z.isPointLight?(V.map=new vh(n.x),V.map.depthTexture=new tf(n.x,gn)):(V.map=new mi(n.x,n.y),V.map.depthTexture=new tr(n.x,n.y,gn)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=Zn,this.type===Nr?(V.map.depthTexture.compareFunction=Y?zu:Bu,V.map.depthTexture.minFilter=Ye,V.map.depthTexture.magFilter=Ye):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fe,V.map.depthTexture.magFilter=fe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);const et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,w);const it=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:w.layers;for(let Et=0;Et<et;Et++){const Bt=V.getCamera(Et);if(Z.isPointLight){const Q=V.camera,xt=V.matrix,Mt=Z.distance||Q.far;Mt!==Q.far&&(Q.far=Mt,Q.updateProjectionMatrix()),br.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(br),ml.copy(Q.position),ml.add(hb[Et]),Q.up.copy(db[Et]),Q.lookAt(ml),Q.updateMatrixWorld(),xt.makeTranslation(-br.x,-br.y,-br.z),qd.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(qd,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,Et),s.clear();else{Et===0&&(s.setRenderTarget(V.map),s.clear());const Q=V.getViewport(Et);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),B.viewport(a)}i=V.getFrustum(Et),E(_,w,Bt,Z,it,this.type)}V.isPointLightShadow!==!0&&this.type===Rr&&M(V,w),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(k,D,F)};function M(T,_){const w=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new mi(n.x,n.y,{format:ms,type:pi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(_,null,w,f,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(_,null,w,u,x,null)}function C(T,_,w,k){let D=null;const F=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)D=F;else if(D=w.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const B=D.uuid,X=_.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let W=I[X];W===void 0&&(W=D.clone(),I[X]=W,_.addEventListener("dispose",R)),D=W}if(D.visible=_.visible,D.wireframe=_.wireframe,k===Rr?D.side=_.shadowSide!==null?_.shadowSide:_.side:D.side=_.shadowSide!==null?_.shadowSide:d[_.side],D.alphaMap=_.alphaMap,D.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,D.map=_.map,D.clipShadows=_.clipShadows,D.clippingPlanes=_.clippingPlanes,D.clipIntersection=_.clipIntersection,D.displacementMap=_.displacementMap,D.displacementScale=_.displacementScale,D.displacementBias=_.displacementBias,D.wireframeLinewidth=_.wireframeLinewidth,D.linewidth=_.linewidth,w.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const B=s.properties.get(D);B.light=w}return D}function E(T,_,w,k,D,F){if(T.visible===!1)return;if(T.layers.test(D)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Rr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const I=t.update(T),W=T.material;if(Array.isArray(W)){const Z=I.groups;for(let V=0,nt=Z.length;V<nt;V++){const Y=Z[V],et=W[Y.materialIndex];if(et&&et.visible){const it=C(T,et,k,F);T.onBeforeShadow(s,T,_,w,I,it,Y),s.renderBufferDirect(w,null,I,it,T,Y),T.onAfterShadow(s,T,_,w,I,it,Y)}}}else if(W.visible){const Z=C(T,W,k,F);T.onBeforeShadow(s,T,_,w,I,Z,null),s.renderBufferDirect(w,null,I,Z,T,null),T.onAfterShadow(s,T,_,w,I,Z,null)}}const X=T.children;for(let I=0,W=X.length;I<W;I++)E(X[I],_,w,k,D,F)}function R(T){T.target.removeEventListener("dispose",R);for(const w in c){const k=c[w],D=T.target.uuid;D in k&&(k[D].dispose(),delete k[D])}}}function fb(s,t){function e(){let L=!1;const j=new Se;let q=null;const ht=new Se(0,0,0,0);return{setMask:function(at){q!==at&&!L&&(s.colorMask(at,at,at,at),q=at)},setLocked:function(at){L=at},setClear:function(at,lt,Ct,$t,rt){rt===!0&&(at*=$t,lt*=$t,Ct*=$t),j.set(at,lt,Ct,$t),ht.equals(j)===!1&&(s.clearColor(at,lt,Ct,$t),ht.copy(j))},reset:function(){L=!1,q=null,ht.set(-1,0,0,0)}}}function i(){let L=!1,j=!1,q=null,ht=null,at=null;return{setReversed:function(lt){if(j!==lt){const Ct=t.get("EXT_clip_control");lt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),j=lt;const $t=at;at=null,this.setClear($t)}},getReversed:function(){return j},setTest:function(lt){lt?_t(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(lt){q!==lt&&!L&&(s.depthMask(lt),q=lt)},setFunc:function(lt){if(j&&(lt=Om[lt]),ht!==lt){switch(lt){case Ll:s.depthFunc(s.NEVER);break;case Dl:s.depthFunc(s.ALWAYS);break;case Il:s.depthFunc(s.LESS);break;case kr:s.depthFunc(s.LEQUAL);break;case Nl:s.depthFunc(s.EQUAL);break;case Ul:s.depthFunc(s.GEQUAL);break;case Fl:s.depthFunc(s.GREATER);break;case Ol:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=lt}},setLocked:function(lt){L=lt},setClear:function(lt){at!==lt&&(at=lt,j&&(lt=1-lt),s.clearDepth(lt))},reset:function(){L=!1,q=null,ht=null,at=null,j=!1}}}function n(){let L=!1,j=null,q=null,ht=null,at=null,lt=null,Ct=null,$t=null,rt=null;return{setTest:function(Pt){L||(Pt?_t(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Pt){j!==Pt&&!L&&(s.stencilMask(Pt),j=Pt)},setFunc:function(Pt,Wt,vt){(q!==Pt||ht!==Wt||at!==vt)&&(s.stencilFunc(Pt,Wt,vt),q=Pt,ht=Wt,at=vt)},setOp:function(Pt,Wt,vt){(lt!==Pt||Ct!==Wt||$t!==vt)&&(s.stencilOp(Pt,Wt,vt),lt=Pt,Ct=Wt,$t=vt)},setLocked:function(Pt){L=Pt},setClear:function(Pt){rt!==Pt&&(s.clearStencil(Pt),rt=Pt)},reset:function(){L=!1,j=null,q=null,ht=null,at=null,lt=null,Ct=null,$t=null,rt=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,v=[],x=null,p=!1,m=null,M=null,C=null,E=null,R=null,T=null,_=null,w=new ut(0,0,0),k=0,D=!1,F=null,B=null,X=null,I=null,W=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=nt>=2);let et=null,it={};const Et=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Q=new Se().fromArray(Et),xt=new Se().fromArray(Bt);function Mt(L,j,q,ht){const at=new Uint8Array(4),lt=s.createTexture();s.bindTexture(L,lt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<q;Ct++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(j+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return lt}const Dt={};Dt[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Dt[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Dt[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(s.DEPTH_TEST),a.setFunc(kr),vi(!1),ye(Bh),_t(s.CULL_FACE),$e(ps);function _t(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Gt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ae(L,j){return f[L]!==j?(s.bindFramebuffer(L,j),f[L]=j,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Nt(L,j){let q=v,ht=!1;if(L){q=u.get(j),q===void 0&&(q=[],u.set(j,q));const at=L.textures;if(q.length!==at.length||q[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ct=at.length;lt<Ct;lt++)q[lt]=s.COLOR_ATTACHMENT0+lt;q.length=at.length,ht=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,ht=!0);ht&&s.drawBuffers(q)}function oe(L){return x!==L?(s.useProgram(L),x=L,!0):!1}const de={[Hs]:s.FUNC_ADD,[am]:s.FUNC_SUBTRACT,[om]:s.FUNC_REVERSE_SUBTRACT};de[lm]=s.MIN,de[cm]=s.MAX;const Jt={[hm]:s.ZERO,[dm]:s.ONE,[um]:s.SRC_COLOR,[Cu]:s.SRC_ALPHA,[xm]:s.SRC_ALPHA_SATURATE,[gm]:s.DST_COLOR,[pm]:s.DST_ALPHA,[fm]:s.ONE_MINUS_SRC_COLOR,[Pu]:s.ONE_MINUS_SRC_ALPHA,[vm]:s.ONE_MINUS_DST_COLOR,[mm]:s.ONE_MINUS_DST_ALPHA,[_m]:s.CONSTANT_COLOR,[bm]:s.ONE_MINUS_CONSTANT_COLOR,[ym]:s.CONSTANT_ALPHA,[Mm]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(L,j,q,ht,at,lt,Ct,$t,rt,Pt){if(L===ps){p===!0&&(Gt(s.BLEND),p=!1);return}if(p===!1&&(_t(s.BLEND),p=!0),L!==rm){if(L!==m||Pt!==D){if((M!==Hs||R!==Hs)&&(s.blendEquation(s.FUNC_ADD),M=Hs,R=Hs),Pt)switch(L){case Ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kn:s.blendFunc(s.ONE,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ie("WebGLState: Invalid blending: ",L);break}else switch(L){case Ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zh:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",L);break}C=null,E=null,T=null,_=null,w.set(0,0,0),k=0,m=L,D=Pt}return}at=at||j,lt=lt||q,Ct=Ct||ht,(j!==M||at!==R)&&(s.blendEquationSeparate(de[j],de[at]),M=j,R=at),(q!==C||ht!==E||lt!==T||Ct!==_)&&(s.blendFuncSeparate(Jt[q],Jt[ht],Jt[lt],Jt[Ct]),C=q,E=ht,T=lt,_=Ct),($t.equals(w)===!1||rt!==k)&&(s.blendColor($t.r,$t.g,$t.b,rt),w.copy($t),k=rt),m=L,D=!1}function De(L,j){L.side===Fi?Gt(s.CULL_FACE):_t(s.CULL_FACE);let q=L.side===ni;j&&(q=!q),vi(q),L.blending===Ur&&L.transparent===!1?$e(ps):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ht=L.stencilWrite;o.setTest(ht),ht&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vi(L){F!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),F=L)}function ye(L){L!==im?(_t(s.CULL_FACE),L!==B&&(L===Bh?s.cullFace(s.BACK):L===nm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),B=L}function tn(L){L!==X&&(V&&s.lineWidth(L),X=L)}function ke(L,j,q){L?(_t(s.POLYGON_OFFSET_FILL),(I!==j||W!==q)&&(I=j,W=q,a.getReversed()&&(j=-j,q=-q),s.polygonOffset(j,q))):Gt(s.POLYGON_OFFSET_FILL)}function Ri(L){L?_t(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function Ci(L){L===void 0&&(L=s.TEXTURE0+Z-1),et!==L&&(s.activeTexture(L),et=L)}function Pi(L,j,q){q===void 0&&(et===null?q=s.TEXTURE0+Z-1:q=et);let ht=it[q];ht===void 0&&(ht={type:void 0,texture:void 0},it[q]=ht),(ht.type!==L||ht.texture!==j)&&(et!==q&&(s.activeTexture(q),et=q),s.bindTexture(L,j||Dt[L]),ht.type=L,ht.texture=j)}function O(){const L=it[et];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Li(){try{s.compressedTexImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function _e(){try{s.compressedTexImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function be(){try{s.texSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function mt(){try{s.texSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function Ie(){try{s.compressedTexSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function Ot(){try{s.texStorage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function b(){try{s.texImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function G(){try{s.texImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function st(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function tt(L,j){d[L]!==j&&(s.pixelStorei(L,j),d[L]=j)}function ot(L){Q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function ft(L){xt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function K(L,j){let q=c.get(j);q===void 0&&(q=new WeakMap,c.set(j,q));let ht=q.get(L);ht===void 0&&(ht=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,ht,ht),q.set(L,ht))}function J(L,j,q){const at=c.get(j).get(L);l[at]!==q&&(s.bindBufferBase(s.UNIFORM_BUFFER,at,q),l[at]=q)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,it={},f={},l={},u=new WeakMap,v=[],x=null,p=!1,m=null,M=null,C=null,E=null,R=null,T=null,_=null,w=new ut(0,0,0),k=0,D=!1,F=null,B=null,X=null,I=null,W=null,Q.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Gt,bindFramebuffer:Ae,drawBuffers:Nt,useProgram:oe,setBlending:$e,setMaterial:De,setFlipSided:vi,setCullFace:ye,setLineWidth:tn,setPolygonOffset:ke,setScissorTest:Ri,activeTexture:Ci,bindTexture:Pi,unbindTexture:O,compressedTexImage2D:Li,compressedTexImage3D:_e,texImage2D:b,texImage3D:G,pixelStorei:tt,getParameter:st,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Ot,texStorage3D:A,texSubImage2D:be,texSubImage3D:mt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:It,scissor:ot,viewport:ft,reset:ct}}function pb(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,d=new Set;let f;const u=new WeakMap,v=new Set,x=new FinalizationRegistry(A=>v.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return p?new OffscreenCanvas(A,b):Vr("canvas")}function M(A,b,G){let st=1;const tt=Ot(A);if((tt.width>G||tt.height>G)&&(st=G/Math.max(tt.width,tt.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ot=Math.floor(st*tt.width),ft=Math.floor(st*tt.height);f===void 0&&(f=m(ot,ft));const K=b?m(ot,ft):f;return K.width=ot,K.height=ft,K.getContext("2d").drawImage(A,0,0,ot,ft),Ut("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+ft+")."),K}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function C(A){return A.generateMipmaps}function E(A){s.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,b,G,st,tt,ot=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft;st&&(ft=t.get("EXT_texture_norm16"),ft||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8),G===s.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),G===s.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),b===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8),G===s.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),G===s.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),b===s.RGB&&(G===s.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),G===s.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),b===s.RGBA){const J=ot?lo:te.getTransfer(tt);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=J===ae?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),G===s.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,b){let G;return A?b===null||b===gn||b===js?G=s.DEPTH24_STENCIL8:b===Ji?G=s.DEPTH32F_STENCIL8:b===Gr&&(G=s.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gn||b===js?G=s.DEPTH_COMPONENT24:b===Ji?G=s.DEPTH_COMPONENT32F:b===Gr&&(G=s.DEPTH_COMPONENT16),G}function w(A,b){return C(A)===!0||A.isFramebufferTexture&&A.minFilter!==fe&&A.minFilter!==Ye?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function k(A){const b=new WeakRef(A);i.get(A).__ref=b,v.add(b),x.register(A,b,b)}function D(A){const b=i.get(A).__ref;b!==void 0&&(v.delete(b),x.unregister(b))}function F(A){X(A.target)}function B(A){I(A.target)}function X(A){A.removeEventListener("dispose",F),D(A),Z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",B),D(A),nt(A)}function W(){for(const A of v){const b=A.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):X(b))}v.clear(),d.clear()}function Z(A){const b=i.get(A);if(b.__webglInit===void 0)return;const G=A.source,st=u.get(G);if(st){const tt=st[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(A),Object.keys(st).length===0&&u.delete(G)}i.remove(A)}function V(A){const b=i.get(A);s.deleteTexture(b.__webglTexture);const G=A.source,st=u.get(G);delete st[b.__cacheKey],a.memory.textures--}function nt(A){const b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&X(G),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ot=0;ot<b.__webglFramebuffer[tt].length;ot++)s.deleteFramebuffer(b.__webglFramebuffer[tt][ot]);else s.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)s.deleteFramebuffer(b.__webglFramebuffer[tt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const st=A.textures;for(let tt=0,ot=st.length;tt<ot;tt++){const ft=i.get(st[tt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(st[tt])}i.remove(A)}let Y=0;function et(){Y=0}function it(){return Y}function Et(A){Y=A}function Bt(){const A=Y;return A>=n.maxTextures&&Ut("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,A}function Q(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function xt(A,b){const G=i.get(A);if(A.isVideoTexture&&Ie(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const st=A.image;if(st===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{De(G,A,b);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function Mt(A,b){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){De(G,A,b);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function Dt(A,b){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){De(G,A,b);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function _t(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){vi(G,A,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}const Gt={[zr]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[kl]:s.MIRRORED_REPEAT},Ae={[fe]:s.NEAREST,[Em]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Oo]:s.LINEAR_MIPMAP_NEAREST,[Pn]:s.LINEAR_MIPMAP_LINEAR},Nt={[Cm]:s.NEVER,[Gu]:s.ALWAYS,[Pm]:s.LESS,[Bu]:s.LEQUAL,[Lm]:s.EQUAL,[zu]:s.GEQUAL,[Dm]:s.GREATER,[Im]:s.NOTEQUAL};function oe(A,b){if(b.type===Ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ye||b.magFilter===Oo||b.magFilter===ta||b.magFilter===Pn||b.minFilter===Ye||b.minFilter===Oo||b.minFilter===ta||b.minFilter===Pn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Gt[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Gt[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Gt[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Ae[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Ae[b.minFilter]),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fe||b.minFilter!==ta&&b.minFilter!==Pn||b.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function de(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",F),k(b));const st=b.source;let tt=u.get(st);tt===void 0&&(tt={},u.set(st,tt));const ot=Q(b);if(ot!==A.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),tt[ot].usedTimes++;const ft=tt[A.__cacheKey];ft!==void 0&&(tt[A.__cacheKey].usedTimes--,ft.usedTimes===0&&V(b)),A.__cacheKey=ot,A.__webglTexture=tt[ot].texture}return G}function Jt(A,b,G){return Math.floor(Math.floor(A/G)/b)}function $e(A,b,G,st){const ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,G,st,b.data);else{ot.sort((L,j)=>L.start-j.start);let ft=0;for(let L=1;L<ot.length;L++){const j=ot[ft],q=ot[L],ht=j.start+j.count,at=Jt(q.start,b.width,4),lt=Jt(j.start,b.width,4);q.start<=ht+1&&at===lt&&Jt(q.start+q.count-1,b.width,4)===at?j.count=Math.max(j.count,q.start+q.count-j.start):(++ft,ot[ft]=q)}ot.length=ft+1;const K=e.getParameter(s.UNPACK_ROW_LENGTH),J=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let L=0,j=ot.length;L<j;L++){const q=ot[L],ht=Math.floor(q.start/4),at=Math.ceil(q.count/4),lt=ht%b.width,Ct=Math.floor(ht/b.width),$t=at,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(s.TEXTURE_2D,0,lt,Ct,$t,rt,G,st,b.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,J),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function De(A,b,G){let st=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=s.TEXTURE_3D);const tt=de(A,b),ot=b.source;e.bindTexture(st,A.__webglTexture,s.TEXTURE0+G);const ft=i.get(ot);if(ot.version!==ft.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const rt=te.getPrimaries(te.workingColorSpace),Pt=b.colorSpace===$n?null:te.getPrimaries(b.colorSpace),Wt=b.colorSpace===$n||rt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let J=M(b.image,!1,n.maxTextureSize);J=It(b,J);const ct=r.convert(b.format,b.colorSpace),L=r.convert(b.type);let j=T(b.internalFormat,ct,L,b.normalized,b.colorSpace,b.isVideoTexture);oe(st,b);let q;const ht=b.mipmaps,at=b.isVideoTexture!==!0,lt=ft.__version===void 0||tt===!0,Ct=ot.dataReady,$t=w(b,J);if(b.isDepthTexture)j=_(b.format===qn,b.type),lt&&(at?e.texStorage2D(s.TEXTURE_2D,1,j,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,ct,L,null));else if(b.isDataTexture)if(ht.length>0){at&&lt&&e.texStorage2D(s.TEXTURE_2D,$t,j,ht[0].width,ht[0].height);for(let rt=0,Pt=ht.length;rt<Pt;rt++)q=ht[rt],at?Ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,q.width,q.height,ct,L,q.data):e.texImage2D(s.TEXTURE_2D,rt,j,q.width,q.height,0,ct,L,q.data);b.generateMipmaps=!1}else at?(lt&&e.texStorage2D(s.TEXTURE_2D,$t,j,J.width,J.height),Ct&&$e(b,J,ct,L)):e.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,ct,L,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,j,ht[0].width,ht[0].height,J.depth);for(let rt=0,Pt=ht.length;rt<Pt;rt++)if(q=ht[rt],b.format!==Qi)if(ct!==null)if(at){if(Ct)if(b.layerUpdates.size>0){const Wt=Td(q.width,q.height,b.format,b.type);for(const vt of b.layerUpdates){const le=q.data.subarray(vt*Wt/q.data.BYTES_PER_ELEMENT,(vt+1)*Wt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,vt,q.width,q.height,1,ct,le)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,J.depth,ct,q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,j,q.width,q.height,J.depth,0,q.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,J.depth,ct,L,q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,j,q.width,q.height,J.depth,0,ct,L,q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(s.TEXTURE_2D,$t,j,ht[0].width,ht[0].height);for(let rt=0,Pt=ht.length;rt<Pt;rt++)q=ht[rt],b.format!==Qi?ct!==null?at?Ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,q.width,q.height,ct,q.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,j,q.width,q.height,0,q.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,q.width,q.height,ct,L,q.data):e.texImage2D(s.TEXTURE_2D,rt,j,q.width,q.height,0,ct,L,q.data)}else if(b.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,j,J.width,J.height,J.depth),Ct)if(b.layerUpdates.size>0){const rt=Td(J.width,J.height,b.format,b.type);for(const Pt of b.layerUpdates){const Wt=J.data.subarray(Pt*rt/J.data.BYTES_PER_ELEMENT,(Pt+1)*rt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pt,J.width,J.height,1,ct,L,Wt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,L,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,ct,L,J.data);else if(b.isData3DTexture)at?(lt&&e.texStorage3D(s.TEXTURE_3D,$t,j,J.width,J.height,J.depth),Ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,L,J.data)):e.texImage3D(s.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,ct,L,J.data);else if(b.isFramebufferTexture){if(lt)if(at)e.texStorage2D(s.TEXTURE_2D,$t,j,J.width,J.height);else{let rt=J.width,Pt=J.height;for(let Wt=0;Wt<$t;Wt++)e.texImage2D(s.TEXTURE_2D,Wt,j,rt,Pt,0,ct,L,null),rt>>=1,Pt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),J.parentNode!==rt){rt.appendChild(J),d.add(b),rt.onpaint=Pt=>{const Wt=Pt.changedElements;for(const vt of d)Wt.includes(vt.image)&&(vt.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const Wt=s.RGBA,vt=s.RGBA,le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Wt,vt,le,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&lt){const rt=Ot(ht[0]);e.texStorage2D(s.TEXTURE_2D,$t,j,rt.width,rt.height)}for(let rt=0,Pt=ht.length;rt<Pt;rt++)q=ht[rt],at?Ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ct,L,q):e.texImage2D(s.TEXTURE_2D,rt,j,ct,L,q);b.generateMipmaps=!1}else if(at){if(lt){const rt=Ot(J);e.texStorage2D(s.TEXTURE_2D,$t,j,rt.width,rt.height)}Ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,L,J)}else e.texImage2D(s.TEXTURE_2D,0,j,ct,L,J);C(b)&&b.mipmapsAutoUpdate===!0&&E(st),ft.__version=ot.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function vi(A,b,G){if(b.image.length!==6)return;const st=de(A,b),tt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const ot=i.get(tt);if(tt.version!==ot.__version||st===!0){e.activeTexture(s.TEXTURE0+G);const ft=te.getPrimaries(te.workingColorSpace),K=b.colorSpace===$n?null:te.getPrimaries(b.colorSpace),J=b.colorSpace===$n||ft===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ct=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,j=[];for(let vt=0;vt<6;vt++)!ct&&!L?j[vt]=M(b.image[vt],!0,n.maxCubemapSize):j[vt]=L?b.image[vt].image:b.image[vt],j[vt]=It(b,j[vt]);const q=j[0],ht=r.convert(b.format,b.colorSpace),at=r.convert(b.type);let lt=T(b.internalFormat,ht,at,b.normalized,b.colorSpace);const Ct=b.isVideoTexture!==!0,$t=ot.__version===void 0||st===!0,rt=tt.dataReady;let Pt=w(b,q);oe(s.TEXTURE_CUBE_MAP,b);let Wt;if(b.isDepthTexture){if(lt=_(b.format===qn,b.type),$t)if(Ct)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let vt=0;vt<6;vt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,q.width,q.height,0,ht,at,null)}else if(ct){Ct&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,lt,q.width,q.height);for(let vt=0;vt<6;vt++){Wt=j[vt].mipmaps;for(let le=0;le<Wt.length;le++){const Be=Wt[le];b.format!==Qi?ht!==null?Ct?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,0,0,Be.width,Be.height,ht,Be.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,lt,Be.width,Be.height,0,Be.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,0,0,Be.width,Be.height,ht,at,Be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le,lt,Be.width,Be.height,0,ht,at,Be.data)}}}else{if(Wt=b.mipmaps,Ct&&$t){Wt.length>0&&Pt++;const vt=Ot(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,lt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(L){Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,j[vt].width,j[vt].height,ht,at,j[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,j[vt].width,j[vt].height,0,ht,at,j[vt].data);for(let le=0;le<Wt.length;le++){const Fn=Wt[le].image[vt].image;Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,0,0,Fn.width,Fn.height,ht,at,Fn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,lt,Fn.width,Fn.height,0,ht,at,Fn.data)}}else{Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ht,at,j[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,ht,at,j[vt]);for(let le=0;le<Wt.length;le++){const Be=Wt[le];Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,0,0,ht,at,Be.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,le+1,lt,ht,at,Be.image[vt])}}}C(b)&&b.mipmapsAutoUpdate===!0&&E(s.TEXTURE_CUBE_MAP),ot.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ye(A,b,G,st,tt,ot){const ft=r.convert(G.format,G.colorSpace),K=r.convert(G.type),J=T(G.internalFormat,ft,K,G.normalized,G.colorSpace),ct=i.get(b),L=i.get(G);if(L.__renderTarget=b,!ct.__hasExternalTextures){const j=Math.max(1,b.width>>ot),q=Math.max(1,b.height>>ot);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,J,j,q,b.depth,0,ft,K,null):e.texImage2D(tt,ot,J,j,q,0,ft,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),mt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,tt,L.__webglTexture,0,be(b)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,tt,L.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tn(A,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer){const st=b.depthTexture,tt=st&&st.isDepthTexture?st.type:null,ot=_(b.stencilBuffer,tt),ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be(b),ot,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,be(b),ot,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ot,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,A)}else{const st=b.textures;for(let tt=0;tt<st.length;tt++){const ot=st[tt],ft=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),J=T(ot.internalFormat,ft,K,ot.normalized,ot.colorSpace);mt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be(b),J,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,be(b),J,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,J,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(A,b,G){const st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=i.get(b.depthTexture);tt.__renderTarget=b;const ot=st?b.depthTexture.image[0]:b.depthTexture.image;(!tt.__webglTexture||ot.width!==b.width||ot.height!==b.height)&&(ot.width=b.width,ot.height=b.height,b.depthTexture.needsUpdate=!0),st?_t(b.depthTexture,0):xt(b.depthTexture,0);const ft=tt.__webglTexture,K=be(b),J=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ct=b.depthTexture.format===qn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Zn)mt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,J,ft,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,ct,J,ft,0);else if(b.depthTexture.format===qn)mt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,J,ft,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,ct,J,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ri(A){const b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const st=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",tt)};st.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=st}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let st=0;st<6;st++)ke(b.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?ke(b.__webglFramebuffer[0],A,0):ke(b.__webglFramebuffer,A,0);else if(G){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=s.createRenderbuffer(),tn(b.__webglDepthbuffer[st],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ot)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),tn(b.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ci(A,b,G){const st=i.get(A);b!==void 0&&ye(st.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ri(A)}function Pi(A){const b=A.texture,G=i.get(A),st=i.get(b);A.addEventListener("dispose",B),k(A);const tt=A.textures,ot=A.isWebGLCubeRenderTarget===!0,ft=tt.length>1;if(ft||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=b.version,a.memory.textures++),ot){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let J=0;J<b.mipmaps.length;J++)G.__webglFramebuffer[K][J]=s.createFramebuffer()}else G.__webglFramebuffer[K]=s.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)G.__webglFramebuffer[K]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ft)for(let K=0,J=tt.length;K<J;K++){const ct=i.get(tt[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){const J=tt[K];G.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const ct=r.convert(J.format,J.colorSpace),L=r.convert(J.type),j=T(J.internalFormat,ct,L,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),q=be(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,q,j,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,G.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),tn(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),oe(s.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)ye(G.__webglFramebuffer[K][J],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else ye(G.__webglFramebuffer[K],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);C(b)?E(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let K=0,J=tt.length;K<J;K++){const ct=tt[K],L=i.get(ct);let j=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),oe(j,ct),ye(G.__webglFramebuffer,A,ct,s.COLOR_ATTACHMENT0+K,j,0),C(ct)&&E(j)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),oe(K,b),b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)ye(G.__webglFramebuffer[J],A,b,s.COLOR_ATTACHMENT0,K,J);else ye(G.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,K,0);C(b)?E(K):b.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Ri(A)}function O(A){const b=A.textures;for(let G=0,st=b.length;G<st;G++){const tt=b[G];if(C(tt)&&tt.mipmapsAutoUpdate===!0){const ot=R(A),ft=i.get(tt).__webglTexture;e.bindTexture(ot,ft),E(ot),e.unbindTexture()}}}const Li=[];function _e(A){if(A.samples>0){if(mt(A)===!1){const b=A.textures,G=A.width,st=A.height;let tt=s.COLOR_BUFFER_BIT;const ot=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=i.get(A),K=b.length>1;if(K)for(let ct=0;ct<b.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const L=i.get(b[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,G,st,0,0,G,st,tt,s.NEAREST),l===!0&&(Li.length=0,Li.push(s.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Li.push(ot),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Li))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<b.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const L=i.get(b[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const b=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function be(A){return Math.min(n.maxSamples,A.samples)}function mt(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ie(A){const b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function It(A,b){const G=A.colorSpace,st=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==oo&&G!==$n&&(te.getTransfer(G)===ae?(st!==Qi||tt!==Ei)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",G)),b}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=Et,this.setTexture2D=xt,this.setTexture2DArray=Mt,this.setTexture3D=Dt,this.setTextureCube=_t,this.rebindTextures=Ci,this.setupRenderTarget=Pi,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ri,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=mt,this.dispose=W}function mb(s,t){function e(i,n=$n){let r;const a=te.getTransfer(n);if(i===Ei)return s.UNSIGNED_BYTE;if(i===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===th)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Iu)return s.BYTE;if(i===Nu)return s.SHORT;if(i===Gr)return s.UNSIGNED_SHORT;if(i===Qc)return s.INT;if(i===gn)return s.UNSIGNED_INT;if(i===Ji)return s.FLOAT;if(i===pi)return s.HALF_FLOAT;if(i===Ou)return s.ALPHA;if(i===ku)return s.RGB;if(i===Qi)return s.RGBA;if(i===Zn)return s.DEPTH_COMPONENT;if(i===qn)return s.DEPTH_STENCIL;if(i===eh)return s.RED;if(i===ih)return s.RED_INTEGER;if(i===ms)return s.RG;if(i===nh)return s.RG_INTEGER;if(i===sh)return s.RGBA_INTEGER;if(i===Ha||i===Va||i===Wa||i===$a)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===zl||i===Gl||i===Hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Wl||i===$l||i===Xl||i===ql||i===ro||i===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Wl)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return r.COMPRESSED_R11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ro)return r.COMPRESSED_RG11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql||i===jl||i===tc||i===ec||i===ic||i===nc||i===sc||i===rc||i===ac||i===oc||i===lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cc||i===hc||i===dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===cc)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===fc||i===ao||i===pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
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

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ef(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fi({vertexShader:gb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _b extends vs{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,v=null;const x=typeof XRWebGLBinding<"u",p=new xb,m={},M=e.getContextAttributes();let C=null,E=null;const R=[],T=[],_=new Rt;let w=null,k=null;const D=new Ui;D.viewport=new Se;const F=new Ui;F.viewport=new Se;const B=[D,F],X=new R0;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let xt=R[Q];return xt===void 0&&(xt=new Xo,R[Q]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(Q){let xt=R[Q];return xt===void 0&&(xt=new Xo,R[Q]=xt),xt.getGripSpace()},this.getHand=function(Q){let xt=R[Q];return xt===void 0&&(xt=new Xo,R[Q]=xt),xt.getHandSpace()};function Z(Q){const xt=T.indexOf(Q.inputSource);if(xt===-1)return;const Mt=R[xt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,c||a),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<R.length;Q++){const xt=T[Q];xt!==null&&(T[Q]=null,R[Q].disconnect(xt))}I=null,W=null,p.reset();for(const Q in m)delete m[Q];if(t.setRenderTarget(C),u=null,f=null,d=null,n=null,E=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),k!==null){const Q=k.camera;Q.fov=k.fov,Q.zoom=k.zoom,Q.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(C=t.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",V),n.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Dt=null,_t=null;M.depth&&(_t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=M.stencil?qn:Zn,Dt=M.stencil?js:gn);const Gt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Gt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new mi(f.textureWidth,f.textureHeight,{format:Qi,type:Ei,depthTexture:new tr(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,Mt),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new mi(u.framebufferWidth,u.framebufferHeight,{format:Qi,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Q){for(let xt=0;xt<Q.removed.length;xt++){const Mt=Q.removed[xt],Dt=T.indexOf(Mt);Dt>=0&&(T[Dt]=null,R[Dt].disconnect(Mt))}for(let xt=0;xt<Q.added.length;xt++){const Mt=Q.added[xt];let Dt=T.indexOf(Mt);if(Dt===-1){for(let Gt=0;Gt<R.length;Gt++)if(Gt>=T.length){T.push(Mt),Dt=Gt;break}else if(T[Gt]===null){T[Gt]=Mt,Dt=Gt;break}if(Dt===-1)break}const _t=R[Dt];_t&&_t.connect(Mt)}}function Y(Q,xt){xt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(xt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let xt=Q.near,Mt=Q.far;p.texture!==null&&(p.depthNear>0&&(xt=p.depthNear),p.depthFar>0&&(Mt=p.depthFar)),X.near=F.near=D.near=xt,X.far=F.far=D.far=Mt,(I!==X.near||W!==X.far)&&(n.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,W=X.far),X.layers.mask=Q.layers.mask|6,D.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;const Dt=Q.parent,_t=X.cameras;Y(X,Dt);for(let Gt=0;Gt<_t.length;Gt++)Y(_t[Gt],Dt);X.projectionMatrix.copy(D.projectionMatrix),X.projectionMatrixInverse.copy(D.projectionMatrixInverse),k===null&&Q.isPerspectiveCamera&&(k={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,X,Dt)};function et(Q,xt,Mt){Mt===null?Q.matrix.copy(xt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(xt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(xt.projectionMatrix),Q.projectionMatrixInverse.copy(xt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=gc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(Q){return m[Q]};let it=null;function Et(Q,xt){if(h=xt.getViewerPose(c||a),v=xt,h!==null){const Mt=h.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let Dt=!1;Mt.length!==X.cameras.length&&(X.cameras.length=0,Dt=!0);for(let Nt=0;Nt<Mt.length;Nt++){const oe=Mt[Nt];let de=null;if(u!==null)de=u.getViewport(oe);else{const $e=d.getViewSubImage(f,oe);de=$e.viewport,Nt===0&&(t.setRenderTargetTextures(E,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(E))}let Jt=B[Nt];Jt===void 0&&(Jt=new Ui,Jt.layers.enable(Nt),Jt.viewport=new Se,B[Nt]=Jt),Jt.matrix.fromArray(oe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(oe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(de.x,de.y,de.width,de.height),Nt===0&&(X.matrix.copy(Jt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Dt===!0&&X.cameras.push(Jt)}const _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const Nt=d.getDepthInformation(Mt[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,n.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Nt=0;Nt<Mt.length;Nt++){const oe=Mt[Nt].camera;if(oe){let de=m[oe];de||(de=new ef,m[oe]=de);const Jt=d.getCameraImage(oe);de.sourceTexture=Jt}}}}for(let Mt=0;Mt<R.length;Mt++){const Dt=T[Mt],_t=R[Mt];Dt!==null&&_t!==void 0&&_t.update(Dt,xt,c||a)}it&&it(Q,xt),xt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xt}),v=null}const Bt=new lf;Bt.setAnimationLoop(Et),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const bb=new ne,xf=new kt;xf.set(-1,0,0,0,1,0,0,0,1);function yb(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,sf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,M,C,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),v(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,C):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ni&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ni&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),C=M.envMap,E=M.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(bb.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(xf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,C){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=C*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ni&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Mb(s,t,e,i){let n={},r={};function a(M,C){const E=C.program;i.uniformBlockBinding(M,E,n[M.id])}function o(M,C){let E=n[M.id];E===void 0&&(v(M),E=l(M),n[M.id]=E,M.addEventListener("dispose",p));const R=C.program;i.updateUBOMapping(M,R);const T=t.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const C=s.createBuffer(),E=M.__size,R=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,E,R),s.bindBuffer(s.UNIFORM_BUFFER,null),C}function c(M){const C=n[M.id],E=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let T=0,_=E.length;T<_;T++){const w=E[T];if(Array.isArray(w))for(let k=0,D=w.length;k<D;k++)h(w[k],T,k,R);else h(w,T,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,C,E,R){if(f(M,C,E,R)===!0){const T=M.__offset,_=M.value;if(Array.isArray(_)){let w=0;for(let k=0;k<_.length;k++){const D=_[k],F=x(D,!0);d(D,M.__data,w),w+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,M.__data)}}function d(M,C,E){typeof M=="number"||typeof M=="boolean"?C[E]=M:M.isMatrix3?(C[E]=M.elements[0],C[E+1]=M.elements[1],C[E+2]=M.elements[2],C[E+3]=0,C[E+4]=M.elements[3],C[E+5]=M.elements[4],C[E+6]=M.elements[5],C[E+7]=0,C[E+8]=M.elements[6],C[E+9]=M.elements[7],C[E+10]=M.elements[8],C[E+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-E),E):M.toArray(C,E)}function f(M,C,E,R){const T=M.value,_=C+"_"+E;if(Array.isArray(T)){R[_]===void 0&&(R[_]=[]);const w=R[_];let k=!1;for(let D=0;D<T.length;D++)u(T[D],w,D)===!0&&(k=!0);return k}return u(T,R,_)}function u(M,C,E){if(C[E]===void 0)return typeof M=="number"||typeof M=="boolean"?C[E]=M:ArrayBuffer.isView(M)?C[E]=M.slice():C[E]=M.clone(),!0;{const R=C[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return C[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function v(M){const C=M.uniforms;let E=0;const R=16;for(let _=0,w=C.length;_<w;_++){const k=Array.isArray(C[_])?C[_]:[C[_]];for(let D=0,F=k.length;D<F;D++){const B=k[D],X=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(C[_])||Array.isArray(B.value);let W=E;for(let V=0,nt=X.length;V<nt;V++){const Y=X[V],et=x(Y,I),it=E%R,Et=it%et.boundary,Bt=it+Et;E+=Et,Bt!==0&&R-Bt<et.storage&&(E+=R-Bt),V===0&&(W=E),E+=et.storage}const Z=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Z((E-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}const T=E%R;return T>0&&(E+=R-T),M.__size=E,M.__cache={},this}function x(M,C){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function p(M){const C=M.target;C.removeEventListener("dispose",p),s.deleteBuffer(n[C.id]),delete n[C.id],delete r[C.id]}function m(){for(const M in n)s.deleteBuffer(n[M]);n={},r={}}return{bind:a,update:o,dispose:m}}const Sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function wb(){return nn===null&&(nn=new lh(Sb,16,16,ms,pi),nn.name="DFG_LUT",nn.minFilter=Ye,nn.magFilter=Ye,nn.wrapS=ki,nn.wrapT=ki,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class Eb{constructor(t={}){const{canvas:e=Um(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Ei}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const x=u,p=new Set([sh,nh,ih]),m=new Set([Ei,gn,Gr,js,jc,th]),M=new Uint32Array(4),C=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let R=null,T=null;const _=[],w=[];let k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1,B=null,X=null,I=null,W=null;this._outputColorSpace=we;let Z=0,V=0,nt=null,Y=-1,et=null;const it=new Se,Et=new Se;let Bt=null;const Q=new ut(0);let xt=0,Mt=e.width,Dt=e.height,_t=1,Gt=null,Ae=null;const Nt=new Se(0,0,Mt,Dt),oe=new Se(0,0,Mt,Dt);let de=!1;const Jt=new Wr,$e=new ch;let De=!1,vi=!1;const ye=new ne,tn=new U,ke=new Se,Ri={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ci=!1;function Pi(){return nt===null?_t:1}let O=i;function Li(y,N){return e.getContext(y,N)}let _e,be,mt,Ie,It,Ot,A,b,G,st,tt,ot,ft,K,J,ct,L,j,q,ht,at,lt,Ct;try{const y={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){const N="webgl2";if(O=Li(N,y),O===null)throw Li(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(y){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ie("WebGLRenderer: "+y.message),y}function $t(){_e=new Rx(O),_e.init(),at=new mb(O,_e),be=new vx(O,_e,t,at),mt=new fb(O,_e),be.reversedDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),X=O.createFramebuffer(),I=O.createFramebuffer(),W=O.createFramebuffer(),Ie=new Lx(O),It=new j_,Ot=new pb(O,_e,mt,It,be,at,Ie),A=new Ax(D),b=new I0(O),lt=new mx(O,b),G=new Cx(O,b,Ie,lt),st=new Ix(O,G,b,lt,Ie),j=new Dx(O,be,Ot),J=new xx(It),tt=new Q_(D,A,_e,be,lt,J),ot=new yb(D,It),ft=new eb,K=new ob(_e),L=new px(D,A,mt,st,v,l),ct=new ub(D,st,be),Ct=new Mb(O,Ie,be,mt),q=new gx(O,_e,Ie),ht=new Px(O,_e,Ie),Ie.programs=tt.programs,D.capabilities=be,D.extensions=_e,D.properties=It,D.renderLists=ft,D.shadowMap=ct,D.state=mt,D.info=Ie}x!==Ei&&(k=new Ux(x,e.width,e.height,o,n,r));const rt=new _b(D,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(y){y!==void 0&&(_t=y,this.setSize(Mt,Dt,!1))},this.getSize=function(y){return y.set(Mt,Dt)},this.setSize=function(y,N,$=!0){if(rt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=y,Dt=N,e.width=Math.floor(y*_t),e.height=Math.floor(N*_t),$===!0&&(e.style.width=y+"px",e.style.height=N+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Mt*_t,Dt*_t).floor()},this.setDrawingBufferSize=function(y,N,$){Mt=y,Dt=N,_t=$,e.width=Math.floor(y*$),e.height=Math.floor(N*$),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(x===Ei){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(it)},this.getViewport=function(y){return y.copy(Nt)},this.setViewport=function(y,N,$,z){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,N,$,z),mt.viewport(it.copy(Nt).multiplyScalar(Pi()).round())},this.getScissor=function(y){return y.copy(oe)},this.setScissor=function(y,N,$,z){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,N,$,z),mt.scissor(Et.copy(oe).multiplyScalar(Pi()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(y){mt.setScissorTest(de=y)},this.setOpaqueSort=function(y){Gt=y},this.setTransparentSort=function(y){Ae=y},this.getClearColor=function(y){return y.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,$=!0){let z=0;if(y){let H=!1;if(nt!==null){const pt=nt.texture.format;H=p.has(pt)}if(H){const pt=nt.texture.type,yt=m.has(pt),dt=L.getClearColor(),bt=L.getClearAlpha(),Tt=dt.r,zt=dt.g,Qt=dt.b;yt?(M[0]=Tt,M[1]=zt,M[2]=Qt,M[3]=bt,O.clearBufferuiv(O.COLOR,0,M)):(C[0]=Tt,C[1]=zt,C[2]=Qt,C[3]=bt,O.clearBufferiv(O.COLOR,0,C))}else z|=O.COLOR_BUFFER_BIT}N&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),L.dispose(),ft.dispose(),K.dispose(),Ot.dispose(),It.dispose(),A.dispose(),st.dispose(),G.dispose(),lt.dispose(),Ct.dispose(),tt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Rh),rt.removeEventListener("sessionend",Ch),ts.stop()};function Pt(y){y.preventDefault(),co("WebGLRenderer: Context Lost."),F=!0}function Wt(){co("WebGLRenderer: Context Restored."),F=!1;const y=Ie.autoReset,N=ct.enabled,$=ct.autoUpdate,z=ct.needsUpdate,H=ct.type;$t(),Ie.autoReset=y,ct.enabled=N,ct.autoUpdate=$,ct.needsUpdate=z,ct.type=H}function vt(y){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const N=y.target;N.removeEventListener("dispose",le),Be(N)}function Be(y){Fn(y),It.remove(y)}function Fn(y){const N=It.get(y).programs;N!==void 0&&(N.forEach(function($){tt.releaseProgram($)}),y.isShaderMaterial&&tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,$,z,H,pt){N===null&&(N=Ri);const yt=H.isMesh&&H.matrixWorld.determinantAffine()<0,dt=Qp(y,N,$,z,H);mt.setMaterial(z,yt);let bt=$.index,Tt=1;if(z.wireframe===!0){if(bt=G.getWireframeAttribute($),bt===void 0)return;Tt=2}const zt=$.drawRange,Qt=$.attributes.position;let St=zt.start*Tt,jt=(zt.start+zt.count)*Tt;pt!==null&&(St=Math.max(St,pt.start*Tt),jt=Math.min(jt,(pt.start+pt.count)*Tt)),bt!==null?(St=Math.max(St,0),jt=Math.min(jt,bt.count)):Qt!=null&&(St=Math.max(St,0),jt=Math.min(jt,Qt.count));const Re=jt-St;if(Re<0||Re===1/0)return;lt.setup(H,z,dt,$,bt);let me,ue=q;if(bt!==null&&(me=b.get(bt),ue=ht,ue.setIndex(me)),H.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Pi()),ue.setMode(O.LINES)):ue.setMode(O.TRIANGLES);else if(H.isLine){let Ze=z.linewidth;Ze===void 0&&(Ze=1),mt.setLineWidth(Ze*Pi()),H.isLineSegments?ue.setMode(O.LINES):H.isLineLoop?ue.setMode(O.LINE_LOOP):ue.setMode(O.LINE_STRIP)}else H.isPoints?ue.setMode(O.POINTS):H.isSprite&&ue.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ze=H._multiDrawStarts,wt=H._multiDrawCounts,ai=H._multiDrawCount,se=bt?b.get(bt).bytesPerElement:1,es=It.get(z).currentProgram.getUniforms();for(let Je=0;Je<ai;Je++)es.setValue(O,"_gl_DrawID",Je),ue.render(Ze[Je]/se,wt[Je])}else if(H.isInstancedMesh)ue.renderInstances(St,Re,H.count);else if($.isInstancedBufferGeometry){const Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wt=Math.min($.instanceCount,Ze);ue.renderInstances(St,Re,wt)}else ue.render(St,Re)};function Ah(y,N,$,z){B!==null&&y.isNodeMaterial&&B.setObject(z,y),De===!0&&J.setState(y,$,!1),y.transparent===!0&&y.side===Fi&&y.forceSinglePass===!1?(y.side=ni,y.needsUpdate=!0,cr(y,N,z),y.side=Yn,y.needsUpdate=!0,cr(y,N,z),y.side=Fi):cr(y,N,z)}this.compile=function(y,N,$=null){$===null&&($=y),B!==null&&B.renderStart(y,N,$),T=K.get($),T.init(N),w.push(T),$.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),y!==$&&y.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),vi=this.localClippingEnabled,De=J.init(this.clippingPlanes,vi),De===!0&&J.setGlobalState(this.clippingPlanes,N),B!==null&&ct.render(T.state.shadowsArray,$,N);const z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pt=H.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const dt=pt[yt];Ah(dt,$,N,H),z.add(dt)}else Ah(pt,$,N,H),z.add(pt)}),T=w.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(y,N,$=null){const z=this.compile(y,N,$);return new Promise(H=>{function pt(){if(z.forEach(function(yt){const bt=It.get(yt).currentProgram;(bt===void 0||bt.isReady())&&z.delete(yt)}),z.size===0){H(y);return}setTimeout(pt,10)}_e.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Io=null;function Zp(y){Io&&Io(y)}function Rh(){ts.stop()}function Ch(){ts.start()}const ts=new lf;ts.setAnimationLoop(Zp),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(y){Io=y,rt.setAnimationLoop(y),y===null?ts.stop():ts.start()},rt.addEventListener("sessionstart",Rh),rt.addEventListener("sessionend",Ch),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(y,N);const $=rt.enabled===!0&&rt.isPresenting===!0,z=k!==null&&(nt===null||$)&&k.begin(D,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,N,nt),T=K.get(y,w.length),T.init(N),T.state.textureUnits=Ot.getTextureUnits(),w.push(T),ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?$e.setFromArrayCamera(N):Jt.setFromProjectionMatrix(ye,ji,N.reversedDepth),vi=this.localClippingEnabled,De=J.init(this.clippingPlanes,vi),R=ft.get(y,_.length),R.init(),_.push(R),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&No(yt,N,-1/0,D.sortObjects)}No(y,N,0,D.sortObjects),R.finish(),B!==null&&B.updateLights(T.state.lightsArray),D.sortObjects===!0&&R.sort(Gt,Ae),Ci=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ci&&L.addToRenderList(R,y),this.info.autoReset===!0&&this.info.reset(),De===!0&&J.beginShadows();const H=T.state.shadowsArray;if(ct.render(H,y,N),De===!0&&J.endShadows(),(z&&k.hasRenderPass())===!1){const yt=R.opaque,dt=R.transmissive;if(T.setupLights(),N.isArrayCamera){const bt=N.cameras;if(dt.length>0)for(let Tt=0,zt=bt.length;Tt<zt;Tt++){const Qt=bt[Tt];Lh(yt,dt,y,Qt)}Ci&&L.render(y);for(let Tt=0,zt=bt.length;Tt<zt;Tt++){const Qt=bt[Tt];Ph(R,y,Qt,Qt.viewport)}}else dt.length>0&&Lh(yt,dt,y,N),Ci&&L.render(y),Ph(R,y,N)}nt!==null&&V===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),z&&k.end(D),y.isScene===!0&&y.onAfterRender(D,y,N),lt.resetDefaultState(),Y=-1,et=null,w.pop(),w.length>0?(T=w[w.length-1],Ot.setTextureUnits(T.state.textureUnits),De===!0&&J.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,B!==null&&B.renderEnd()};function No(y,N,$,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const yt=N.isArrayCamera?$e:Jt;if(!y.frustumCulled||y.intersectsFrustum(yt)){z&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);const dt=st.update(y),bt=y.material;bt.visible&&R.push(y,dt,bt,$,ke.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){const yt=N.isArrayCamera?$e:Jt;if(!y.frustumCulled||y.intersectsFrustum(yt)){const dt=st.update(y),bt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),ke.copy(dt.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(ye)),Array.isArray(bt)){const Tt=dt.groups;for(let zt=0,Qt=Tt.length;zt<Qt;zt++){const St=Tt[zt],jt=bt[St.materialIndex];jt&&jt.visible&&R.push(y,dt,jt,$,ke.z,St,N)}}else bt.visible&&R.push(y,dt,bt,$,ke.z,null,N)}}}const pt=y.children;for(let yt=0,dt=pt.length;yt<dt;yt++)No(pt[yt],N,$,z)}function Ph(y,N,$,z){const{opaque:H,transmissive:pt,transparent:yt}=y;T.setupLightsView($),De===!0&&J.setGlobalState(D.clippingPlanes,$),z&&mt.viewport(it.copy(z)),H.length>0&&Qr(H,N,$),pt.length>0&&Qr(pt,N,$),yt.length>0&&Qr(yt,N,$),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Lh(y,N,$,z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const St=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new mi(1,1,{generateMipmaps:!0,type:St?pi:Ei,minFilter:Pn,samples:Math.max(4,be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const pt=T.state.transmissionRenderTarget[z.id],yt=z.viewport||it;pt.setSize(yt.z*D.transmissionResolutionScale,yt.w*D.transmissionResolutionScale);const dt=D.getRenderTarget(),bt=D.getActiveCubeFace(),Tt=D.getActiveMipmapLevel();D.setRenderTarget(pt),D.getClearColor(Q),xt=D.getClearAlpha(),xt<1&&D.setClearColor(16777215,.5),D.clear(),Ci&&L.render($);const zt=D.toneMapping;D.toneMapping=Dn;const Qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),De===!0&&J.setGlobalState(D.clippingPlanes,z),Qr(y,$,z),Ot.updateMultisampleRenderTarget(pt),Ot.updateRenderTargetMipmap(pt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let jt=0,Re=N.length;jt<Re;jt++){const me=N[jt],{object:ue,geometry:Ze,material:wt,group:ai}=me;if(wt.side===Fi&&ue.layers.test(z.layers)){const se=wt.side;wt.side=ni,wt.needsUpdate=!0,Dh(ue,$,z,Ze,wt,ai),wt.side=se,wt.needsUpdate=!0,St=!0}}St===!0&&(Ot.updateMultisampleRenderTarget(pt),Ot.updateRenderTargetMipmap(pt))}D.setRenderTarget(dt,bt,Tt),D.setClearColor(Q,xt),Qt!==void 0&&(z.viewport=Qt),D.toneMapping=zt}function Qr(y,N,$){const z=N.isScene===!0?N.overrideMaterial:null;for(let H=0,pt=y.length;H<pt;H++){const yt=y[H],{object:dt,geometry:bt,group:Tt}=yt;let zt=yt.material;zt.allowOverride===!0&&z!==null&&(zt=z),dt.layers.test($.layers)&&Dh(dt,N,$,bt,zt,Tt)}}function Dh(y,N,$,z,H,pt){B!==null&&H.isNodeMaterial&&B.setObject(y,H),y.onBeforeRender(D,N,$,z,H,pt),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(D,N,$,z,y,pt),H.transparent===!0&&H.side===Fi&&H.forceSinglePass===!1?(H.side=ni,H.needsUpdate=!0,D.renderBufferDirect($,N,z,H,y,pt),H.side=Yn,H.needsUpdate=!0,D.renderBufferDirect($,N,z,H,y,pt),H.side=Fi):D.renderBufferDirect($,N,z,H,y,pt),y.onAfterRender(D,N,$,z,H,pt)}function Ih(y){let N=0;for(const $ of y)$.texture!==null&&N++;return N}function cr(y,N,$){N.isScene!==!0&&(N=Ri);const z=It.get(y),H=T.state.lights,pt=T.state.shadowsArray,yt=H.state.version,dt=tt.getParameters(y,H.state,pt,N,$,T.state.lightProbeGridArray),bt=tt.getProgramCacheKey(dt);let Tt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=A.get(y.envMap||z.environment,zt),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",le),Tt=new Map,z.programs=Tt,z.programVariants=new Map);let Qt=Tt.get(bt);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===yt)return Uh(y,dt),Qt}else dt.uniforms=tt.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,$,dt),y.onBeforeCompile(dt,D),Qt=tt.acquireProgram(dt,bt),Tt.set(bt,Qt),z.uniforms=dt.uniforms;const St=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=J.uniform),Uh(y,dt),z.needsLights=tm(y),z.lightsStateVersion=yt,z.needsLights&&(St.ambientLightColor.value=H.state.ambient,St.lightProbe.value=H.state.probe,St.sunLights.value=H.state.sun,St.sunLightShadows.value=H.state.sunShadow,St.directionalLights.value=H.state.directional,St.directionalLightShadows.value=H.state.directionalShadow,St.spotLights.value=H.state.spot,St.spotLightShadows.value=H.state.spotShadow,St.rectAreaLights.value=H.state.rectArea,St.ltc_1.value=H.state.rectAreaLTC1,St.ltc_2.value=H.state.rectAreaLTC2,St.pointLights.value=H.state.point,St.pointLightShadows.value=H.state.pointShadow,St.hemisphereLights.value=H.state.hemi,St.sunShadowMatrix.value=H.state.sunShadowMatrix,St.sunShadowCascade.value=H.state.sunShadowCascade,St.directionalShadowMatrix.value=H.state.directionalShadowMatrix,St.spotLightMatrix.value=H.state.spotLightMatrix,St.spotLightMap.value=H.state.spotLightMap,St.pointShadowMatrix.value=H.state.pointShadowMatrix),z.numLightProbeGrids=Ih(T.state.lightProbeGridArray),z.currentProgram=Qt,z.uniformsList=null,Qt}function Jp(y,N,$,z,H){const pt=It.get(y),yt=pt.currentProgram.id+","+z+","+H;let dt=pt.programVariants.get(yt);return dt===void 0?(dt=cr(y,N,$),pt.programVariants.set(yt,dt)):(pt.currentProgram=dt,pt.uniformsList=null,pt.outputColorSpace=z,pt.toneMapping=H),dt}function Nh(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=qa.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Uh(y,N){const $=It.get(y);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function Qp(y,N,$,z,H){N.isScene!==!0&&(N=Ri),Ot.resetTextureUnits();const pt=N.fog,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,dt=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:te.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Tt=A.get(z.envMap||yt,bt),zt=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qt=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,Re=!!$.morphAttributes.color;let me=Dn;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(me=D.toneMapping);const ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ze=ue!==void 0?ue.length:0,wt=It.get(z),ai=T.state.lights;if(De===!0&&(vi===!0||y!==et)){const Me=y===et&&z.id===Y;J.setState(z,y,Me)}let se=!1,es=!1;z.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==ai.state.version||H.isBatchedMesh&&wt.batching===!1||!H.isBatchedMesh&&wt.batching===!0||H.isBatchedMesh&&wt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&wt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&wt.instancing===!1||!H.isInstancedMesh&&wt.instancing===!0||H.isSkinnedMesh&&wt.skinning===!1||!H.isSkinnedMesh&&wt.skinning===!0||H.isInstancedMesh&&wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&wt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&wt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&wt.instancingMorph===!1&&H.morphTexture!==null||wt.envMap!==Tt||z.fog===!0&&wt.fog!==pt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==J.numPlanes||wt.numIntersection!==J.numIntersection)||wt.vertexAlphas!==zt||wt.vertexTangents!==Qt||wt.morphTargets!==St||wt.morphNormals!==jt||wt.morphColors!==Re||wt.morphTargetsCount!==Ze||wt.numLightProbeGrids!==Ih(T.state.lightProbeGridArray)?se=!0:(wt.outputColorSpace!==dt||wt.toneMapping!==me)&&(es=!0):(se=!0,wt.__version=z.version);let Je=wt.currentProgram;(se===!0||es===!0)&&(Je=es===!0?Jp(z,N,H,dt,me):cr(z,N,H),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Je,wt));let jr=!1,On=!1,is=!1;const ee=Je.getUniforms(),Xe=wt.uniforms;if(mt.useProgram(Je.program)&&(jr=!0,On=!0,is=!0),z.id!==Y&&(Y=z.id,On=!0),jr||et!==y){mt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ee.setValue(O,"projectionMatrix",y.projectionMatrix),ee.setValue(O,"viewMatrix",y.matrixWorldInverse);const ze=ee.map.cameraPosition;ze!==void 0&&ze.setValue(O,tn.setFromMatrixPosition(y.matrixWorld)),be.logarithmicDepthBuffer&&ee.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ee.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),et!==y&&(et=y,On=!0,is=!0)}if(wt.needsLights&&(ai.state.sunShadowMap.length>0&&ee.setValue(O,"sunShadowMap",ai.state.sunShadowMap,Ot),ai.state.directionalShadowMap.length>0&&ee.setValue(O,"directionalShadowMap",ai.state.directionalShadowMap,Ot),ai.state.spotShadowMap.length>0&&ee.setValue(O,"spotShadowMap",ai.state.spotShadowMap,Ot),ai.state.pointShadowMap.length>0&&ee.setValue(O,"pointShadowMap",ai.state.pointShadowMap,Ot)),H.isSkinnedMesh){ee.setOptional(O,H,"bindMatrix"),ee.setOptional(O,H,"bindMatrixInverse");const Me=H.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ee.setValue(O,"boneTexture",Me.boneTexture,Ot))}H.isBatchedMesh&&(ee.setOptional(O,H,"batchingTexture"),ee.setValue(O,"batchingTexture",H._matricesTexture,Ot),ee.setOptional(O,H,"batchingIdTexture"),ee.setValue(O,"batchingIdTexture",H._indirectTexture,Ot),ee.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ee.setValue(O,"batchingColorTexture",H._colorsTexture,Ot));const Vi=$.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&j.update(H,$,Je),(On||wt.receiveShadow!==H.receiveShadow)&&(wt.receiveShadow=H.receiveShadow,ee.setValue(O,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Xe.envMapIntensity.value=N.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=wb()),On){if(ee.setValue(O,"toneMappingExposure",D.toneMappingExposure),wt.needsLights&&jp(Xe,is),pt&&z.fog===!0&&ot.refreshFogUniforms(Xe,pt),ot.refreshMaterialUniforms(Xe,z,_t,Dt,T.state.transmissionRenderTarget[y.id]),wt.needsLights&&wt.numLightProbeGrids>0){const Me=E;let ze=0;for(const xn of T.state.lightProbeGridArray)xn.texture!==null&&(Me.textures[ze]=xn.texture,Me.min[ze]=xn.boundingBox.min,Me.max[ze]=xn.boundingBox.max,Me.resolution[ze]=xn.resolution,ze++);for(const xn in Me)Me[xn].length=ze;Xe.probesSH.value=Me.textures,Xe.probesMin.value=Me.min,Xe.probesMax.value=Me.max,Xe.probesResolution.value=Me.resolution}qa.upload(O,Nh(wt),Xe,Ot)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qa.upload(O,Nh(wt),Xe,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ee.setValue(O,"center",H.center),ee.setValue(O,"modelViewMatrix",H.modelViewMatrix),ee.setValue(O,"normalMatrix",H.normalMatrix),ee.setValue(O,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const Me=z.uniformsGroups;for(let ze=0,xn=Me.length;ze<xn;ze++){const Oh=Me[ze];Ct.update(Oh,Je),Ct.bind(Oh,Je)}}return Je}function jp(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function tm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,N,$){const z=It.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),It.get(y.texture).__webglTexture=N,It.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:$,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const $=It.get(y);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,$=0){nt=y,Z=N,V=$;let z=null,H=!1,pt=!1;if(y){const dt=It.get(y);if(dt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(O.FRAMEBUFFER,dt.__webglFramebuffer),it.copy(y.viewport),Et.copy(y.scissor),Bt=y.scissorTest,mt.viewport(it),mt.scissor(Et),mt.setScissorTest(Bt),Y=-1;return}else if(dt.__webglFramebuffer===void 0)Ot.setupRenderTarget(y);else if(dt.__hasExternalTextures)Ot.rebindTextures(y,It.get(y.texture).__webglTexture,It.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const zt=y.depthTexture;if(dt.__boundDepthTexture!==zt){if(zt!==null&&It.has(zt)&&(y.width!==zt.image.width||y.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(pt=!0);const Tt=It.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[N])?z=Tt[N][$]:z=Tt[N],H=!0):y.samples>0&&Ot.useMultisampledRTT(y)===!1?z=It.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[$]:z=Tt,it.copy(y.viewport),Et.copy(y.scissor),Bt=y.scissorTest}else it.copy(Nt).multiplyScalar(_t).floor(),Et.copy(oe).multiplyScalar(_t).floor(),Bt=de;if($!==0&&(z=X),mt.bindFramebuffer(O.FRAMEBUFFER,z)&&mt.drawBuffers(y,z),mt.viewport(it),mt.scissor(Et),mt.setScissorTest(Bt),H){const dt=It.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,$)}else if(pt){const dt=N;for(let bt=0;bt<y.textures.length;bt++){const Tt=It.get(y.textures[bt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+bt,Tt.__webglTexture,$,dt)}}else if(y!==null&&$!==0){const dt=It.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dt.__webglTexture,$)}Y=-1};function Fh(y){const N=It.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=be.textureFormatReadable(y.format),N.__typeReadable=be.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,$,z,H,pt,yt,dt=0){if(!(y&&y.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt],Array.isArray(bt)&&(bt=bt[0])),bt){mt.bindFramebuffer(O.FRAMEBUFFER,bt);try{const Tt=y.textures[dt],zt=Tt.format,Qt=Tt.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+dt);const St=Fh(Tt);if(St.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&$>=0&&$<=y.height-H&&O.readPixels(N,$,z,H,at.convert(zt),at.convert(Qt),pt)}finally{const Tt=nt!==null?It.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,N,$,z,H,pt,yt,dt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt],Array.isArray(bt)&&(bt=bt[0])),bt)if(N>=0&&N<=y.width-z&&$>=0&&$<=y.height-H){mt.bindFramebuffer(O.FRAMEBUFFER,bt);const Tt=y.textures[dt],zt=Tt.format,Qt=Tt.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+dt);const St=Fh(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,jt),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),O.readPixels(N,$,z,H,at.convert(zt),at.convert(Qt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Re=nt!==null?It.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,Re);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Fm(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,jt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(jt),O.deleteSync(me),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,$=0){const z=Math.pow(2,-$),H=Math.floor(y.image.width*z),pt=Math.floor(y.image.height*z),yt=N!==null?N.x:0,dt=N!==null?N.y:0;Ot.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,yt,dt,H,pt),mt.unbindTexture()},this.copyTextureToTexture=function(y,N,$=null,z=null,H=0,pt=0){let yt,dt,bt,Tt,zt,Qt,St,jt,Re;const me=y.isCompressedTexture?y.mipmaps[pt]:y.image;if($!==null)yt=$.max.x-$.min.x,dt=$.max.y-$.min.y,bt=$.isBox3?$.max.z-$.min.z:1,Tt=$.min.x,zt=$.min.y,Qt=$.isBox3?$.min.z:0;else{const ee=Math.pow(2,-H);yt=Math.floor(me.width*ee),dt=Math.floor(me.height*ee),y.isDataArrayTexture?bt=me.depth:y.isData3DTexture?bt=Math.floor(me.depth*ee):bt=1,Tt=0,zt=0,Qt=0}z!==null?(St=z.x,jt=z.y,Re=z.z):(St=0,jt=0,Re=0);const ue=at.convert(N.format),Ze=at.convert(N.type);let wt;N.isData3DTexture?(Ot.setTexture3D(N,0),wt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ot.setTexture2DArray(N,0),wt=O.TEXTURE_2D_ARRAY):(Ot.setTexture2D(N,0),wt=O.TEXTURE_2D),mt.activeTexture(O.TEXTURE0),mt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),mt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),mt.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const ai=mt.getParameter(O.UNPACK_ROW_LENGTH),se=mt.getParameter(O.UNPACK_IMAGE_HEIGHT),es=mt.getParameter(O.UNPACK_SKIP_PIXELS),Je=mt.getParameter(O.UNPACK_SKIP_ROWS),jr=mt.getParameter(O.UNPACK_SKIP_IMAGES);mt.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),mt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),mt.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),mt.pixelStorei(O.UNPACK_SKIP_ROWS,zt),mt.pixelStorei(O.UNPACK_SKIP_IMAGES,Qt);const On=y.isDataArrayTexture||y.isData3DTexture,is=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const ee=It.get(y),Xe=It.get(N),Vi=It.get(ee.__renderTarget),Me=It.get(Xe.__renderTarget);mt.bindFramebuffer(O.READ_FRAMEBUFFER,Vi.__webglFramebuffer),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ze=0;ze<bt;ze++)On&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(y).__webglTexture,H,Qt+ze),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(N).__webglTexture,pt,Re+ze)),O.blitFramebuffer(Tt,zt,Tt+yt,zt+dt,St,jt,St+yt,jt+dt,O.DEPTH_BUFFER_BIT,O.NEAREST);mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||It.has(y)){const ee=It.get(y),Xe=It.get(N);mt.bindFramebuffer(O.READ_FRAMEBUFFER,I),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,W);for(let Vi=0;Vi<bt;Vi++)On?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ee.__webglTexture,H,Qt+Vi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ee.__webglTexture,H),is?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.__webglTexture,pt,Re+Vi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xe.__webglTexture,pt),H!==0?O.blitFramebuffer(Tt,zt,Tt+yt,zt+dt,St,jt,St+yt,jt+dt,O.COLOR_BUFFER_BIT,O.NEAREST):is?O.copyTexSubImage3D(wt,pt,St,jt,Re+Vi,Tt,zt,yt,dt):O.copyTexSubImage2D(wt,pt,St,jt,Tt,zt,yt,dt);mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else is?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(wt,pt,St,jt,Re,yt,dt,bt,ue,Ze,me.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,pt,St,jt,Re,yt,dt,bt,ue,me.data):O.texSubImage3D(wt,pt,St,jt,Re,yt,dt,bt,ue,Ze,me):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,St,jt,yt,dt,ue,Ze,me.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,St,jt,me.width,me.height,ue,me.data):O.texSubImage2D(O.TEXTURE_2D,pt,St,jt,yt,dt,ue,Ze,me);mt.pixelStorei(O.UNPACK_ROW_LENGTH,ai),mt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),mt.pixelStorei(O.UNPACK_SKIP_PIXELS,es),mt.pixelStorei(O.UNPACK_SKIP_ROWS,Je),mt.pixelStorei(O.UNPACK_SKIP_IMAGES,jr),pt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(wt),mt.unbindTexture()},this.initRenderTarget=function(y){It.get(y).__webglFramebuffer===void 0&&Ot.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ot.setTextureCube(y,0):y.isData3DTexture?Ot.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ot.setTexture2DArray(y,0):Ot.setTexture2D(y,0),mt.unbindTexture()},this.resetState=function(){Z=0,V=0,nt=null,mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const fn=72,Ki=1,Tb=fn*Ki,ge=Tb/2,xh=0,Ab=.06,Ue=1200,gl=[{id:"morning",label:"아침",icon:"🌅",start:0,end:300},{id:"day",label:"낮",icon:"☀️",start:300,end:720},{id:"sunset",label:"노을",icon:"🌇",start:720,end:960},{id:"night",label:"밤",icon:"🌙",start:960,end:1200}];function Ya(s){const t=(s%Ue+Ue)%Ue;for(const e of gl)if(t>=e.start&&t<e.end)return e;return gl[gl.length-1]}function Yd(s){const t=(s%Ue+Ue)%Ue,e=Math.floor(t/Ue*20),i=Math.floor(t/Ue*20*60%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const _f={clear:{id:"clear",label:"맑음",icon:"☀️"},cloudy:{id:"cloudy",label:"구름 조금",icon:"⛅"},drizzle:{id:"drizzle",label:"이슬비",icon:"🌦️"}},Kd=["clear","clear","cloudy","drizzle","clear","cloudy","clear"];function vl(s){return _f[Kd[(s-1)%Kd.length]]}const Zd={t:0,top:"#9ed7f5",bottom:"#ffe6d2",fog:"#f0faf6",sun:"#ffe7c4",sunIntensity:.95,hemiSky:"#fff6ea",hemiGround:"#d9f2c4",hemiIntensity:1.32,night:.1},Rb={t:110,top:"#74cff4",bottom:"#dcf5fd",fog:"#e4f7f5",sun:"#fff2cf",sunIntensity:1.16,hemiSky:"#ffffff",hemiGround:"#dcf6c6",hemiIntensity:1.5,night:0},bf={t:330,top:"#5fc6f2",bottom:"#cfeeff",fog:"#ddf4f8",sun:"#fffbe9",sunIntensity:1.05,hemiSky:"#f4feff",hemiGround:"#d8f5c2",hemiIntensity:1.55,night:0},Cb={t:800,top:"#efa9c8",bottom:"#ffdcc0",fog:"#fce4d9",sun:"#ffb47c",sunIntensity:1.22,hemiSky:"#ffd0ae",hemiGround:"#f0e2b8",hemiIntensity:1.18,night:.02},Pb={t:915,top:"#a99bdb",bottom:"#ffd8cc",fog:"#f0dde6",sun:"#ffa888",sunIntensity:.82,hemiSky:"#d4c0ea",hemiGround:"#c3cbb4",hemiIntensity:.9,night:.2},Lb={t:980,top:"#4e5b9c",bottom:"#b6c0ea",fog:"#9ea8d4",sun:"#d7e2ff",sunIntensity:.55,hemiSky:"#93a3ec",hemiGround:"#8298b0",hemiIntensity:.62,night:1},Db={t:1170,top:"#7388c4",bottom:"#e5d8ee",fog:"#cfd6ea",sun:"#f0e9ff",sunIntensity:.86,hemiSky:"#e9e4f9",hemiGround:"#cadcc4",hemiIntensity:1.1,night:.62},Ib={...bf,t:650},Nb=[Zd,Rb,bf,Ib,Cb,Pb,Lb,Db,{...Zd,t:Ue}],Pa={speed:4.3,turnLerp:12,radius:.36,spriteHeight:1.5},sn={fov:37,offset:{x:0,y:11,z:13.4},lookHeight:.7};function yf(s){return-9+2.4*Math.sin(s*.11+.35)+.9*Math.sin(s*.24-1.1)}const Jd={halfWidth:1.5,bank:2.4},Rn={x:.4,z:17.4},Vt={name:"다리",icon:"🌉",x:0,z:-9,halfWidth:1.45,halfSpan:4,deckY:.68,south:{x:0,z:-4.9},north:{x:0,z:-13.1},range:2.6};function Mf(s,t){return Math.abs(s-Vt.x)<=Vt.halfWidth&&Math.abs(t-Vt.z)<=Vt.halfSpan}const _i=[{id:"dock",name:"부두",icon:"⚓",x:0,z:31.6,markerY:2.2,height:1.7,water:!0},{id:"workshop",name:"공방",icon:"🔨",x:-9,z:9.8,markerY:3.4,height:2.8},{id:"vending",name:"메타몽 자판기",icon:"🥤",x:9,z:9,markerY:2.4,height:1.8},{id:"lighthouse",name:"등대",icon:"🗼",x:14.6,z:-1.6,markerY:5.6,height:4.4}],Ft={x:-17.2,z:8.4,cols:3,rows:3,pitch:1.9,tile:1.62},qt={x:-3.4,z:-19,cols:3,rows:2,pitch:2,tile:1.78,waterY:.09},Sf=[{id:"farm",name:"텃밭",icon:"🌱",x:Ft.x,z:Ft.z,r:4.6,side:"south"},{id:"orchard",name:"과수원",icon:"🍎",x:17,z:16,r:5.6,side:"south"},{id:"garden",name:"꽃밭",icon:"🌸",x:-17,z:19.6,r:5.4,side:"south"},{id:"beach",name:"모래 해변",icon:"🏖️",x:0,z:27.6,r:4.4,side:"south"},{id:"forest",name:"빼곡한 숲",icon:"🌲",x:-14.2,z:-20.5,r:7.6,side:"north"},{id:"quarry",name:"채석장",icon:"🪨",x:13.8,z:-18,r:6.4,side:"north"},{id:"paddy",name:"논",icon:"🌾",x:qt.x,z:qt.z,r:3.6,side:"north"}],Ln=[{id:"ditto_mailbox_03",name:"우체통 메타몽",x:3.2,z:15.4,variant:"mailbox",height:1.1,thumb:{set:"disguises",row:1,col:2},flavor:"편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다.",where:"광장"},{id:"ditto_basic_01",name:"동글 메타몽",x:-6.6,z:16.4,variant:"basic",height:.86,thumb:{set:"ditto_basic",row:1,col:1},flavor:"변신을 포기한 동글 메타몽. 점 눈만 남았다.",where:"광장 서쪽"},{id:"ditto_flowerpot_04",name:"화분 메타몽",x:-17.2,z:16.2,variant:"flowerpot",height:.85,thumb:{set:"disguises",row:1,col:3},flavor:"물을 안 줘도 잎이 파랗다. 그게 수상하다.",where:"꽃밭"},{id:"ditto_bench_05",name:"벤치 메타몽",x:16.4,z:14.2,variant:"bench",height:.9,thumb:{set:"disguises",row:2,col:1},flavor:"앉으라고 만든 벤치인데, 앉으면 도망간다.",where:"과수원"},{id:"ditto_pebble_02",name:"조약돌 메타몽",x:-11,z:-18,variant:"pebble",height:.52,thumb:{set:"disguises",row:1,col:1},flavor:"조약돌인 척하지만 가끔 숨을 쉰다.",where:"북쪽 숲"},{id:"ditto_signpost_07",name:"이정표 메타몽",x:11.6,z:-19.8,variant:"signpost",height:1.15,thumb:{set:"disguises",row:2,col:3},flavor:"어디로 가라는 건지 본인도 모른다.",where:"채석장"},{id:"ditto_mushroom_06",name:"버섯 메타몽",x:-1.6,z:-21.6,variant:"mushroom",height:.78,thumb:{set:"disguises",row:2,col:2},flavor:"빨간 갓에 흰 점. 먹으면 안 될 것 같다.",where:"논 둑"}],ei=[{id:"somi",name:"솜이",x:5.4,z:12.4,set:"somi",height:.74},{id:"ongi",name:"옹이",x:7.2,z:11,set:"ongi",height:.7}],Qd={x:3.2,z:15.4},Ub=[{frame:"lamp",x:-4.8,z:16.2,height:2,collide:.22},{frame:"lamp",x:5.2,z:15.4,height:2,collide:.22},{frame:"lamp",x:-4.6,z:11.6,height:2,collide:.22},{frame:"lamp",x:5.4,z:11.2,height:2,collide:.22},{frame:"fence",x:-2.2,z:12.2,height:.66,collide:.28},{frame:"fence",x:3.2,z:12,height:.66,collide:.28},{frame:"flowerbush",x:1.4,z:12.4,height:.6,collide:.24},{frame:"flowerbush",x:-5.6,z:15.6,height:.56,collide:.24},{frame:"rock",x:6.4,z:16.4,height:.5,collide:.26},{frame:"rock",x:-5,z:8,height:.46,collide:.24},{frame:"flowerbush",x:-2.2,z:19.2,height:.58,collide:.24},{frame:"flowerbush",x:2.6,z:19,height:.6,collide:.24},{frame:"flowerbush",x:-1.4,z:21,height:.56,collide:.24},{frame:"rock",x:1.6,z:20.6,height:.48,collide:.24},{frame:"lamp",x:-1,z:20.4,height:2,collide:.22},{frame:"fence",x:-7.4,z:16.4,height:.66,collide:.28},{frame:"fence",x:6.6,z:19.2,height:.66,collide:.28},{frame:"cherry1",x:-8.8,z:18.6,height:3,collide:.38},{frame:"cherry1",x:11.8,z:21,height:3,collide:.38},{frame:"tree_tall",x:-13.2,z:8.2,height:3.2,collide:.36},{frame:"tree_round",x:-13.4,z:11,height:2.6,collide:.34},{frame:"cherry1",x:-10.4,z:5.8,height:3,collide:.38},{frame:"flowerbush",x:-7.6,z:12.6,height:.62,collide:.25},{frame:"rock",x:-6.6,z:8,height:.5,collide:.26},{frame:"tree_tall",x:14.6,z:7.6,height:3.2,collide:.36},{frame:"tree_round",x:8.4,z:5.2,height:2.6,collide:.34},{frame:"cherry2",x:14,z:12.2,height:3.4,collide:.42},{frame:"flowerbush",x:11.2,z:12.6,height:.58,collide:.24},{frame:"rock",x:7.2,z:6,height:.5,collide:.26},{frame:"tree_round",x:18,z:4.6,height:2.6,collide:.34},{frame:"cherry1",x:11.8,z:1.2,height:3,collide:.38},{frame:"rock",x:17.4,z:-2.2,height:.54,collide:.28},{frame:"rock",x:9.4,z:.4,height:.5,collide:.26},{frame:"flowerbush",x:16.8,z:1.6,height:.56,collide:.24},{frame:"tree_round",x:19.4,z:1,height:2.6,collide:.34},{frame:"lamp",x:-2.4,z:22,height:2,collide:.22},{frame:"lamp",x:2.4,z:22,height:2,collide:.22},{frame:"fence",x:-4.8,z:24.2,height:.66,collide:.28},{frame:"fence",x:4.8,z:24.2,height:.66,collide:.28},{frame:"rock",x:-3.6,z:26.2,height:.5,collide:.26},{frame:"rock",x:3.8,z:26.8,height:.46,collide:.24},{frame:"rock",x:-7.4,z:27.6,height:.52,collide:.26},{frame:"rock",x:7.2,z:28.2,height:.48,collide:.26},{frame:"flowerbush",x:-6.6,z:20.4,height:.56,collide:.24},{frame:"flowerbush",x:6.8,z:20.2,height:.58,collide:.24},{frame:"tree_round",x:-9.8,z:23.4,height:2.6,collide:.34},{frame:"cherry1",x:9.6,z:23.8,height:3,collide:.38},{frame:"flowerbush",x:-14.6,z:17.6,height:.58,collide:.24},{frame:"flowerbush",x:-16.2,z:18.6,height:.6,collide:.24},{frame:"flowerbush",x:-18,z:17.8,height:.56,collide:.24},{frame:"flowerbush",x:-19.4,z:19.2,height:.58,collide:.24},{frame:"flowerbush",x:-20.4,z:20.8,height:.62,collide:.24},{frame:"flowerbush",x:-19,z:22,height:.58,collide:.24},{frame:"flowerbush",x:-17.2,z:22.6,height:.56,collide:.24},{frame:"flowerbush",x:-15.4,z:21.6,height:.6,collide:.24},{frame:"flowerbush",x:-14.8,z:20,height:.54,collide:.24},{frame:"flowerbush",x:-16.8,z:20.2,height:.58,collide:.24},{frame:"flowerbush",x:-18.6,z:20.4,height:.6,collide:.24},{frame:"cherry1",x:-22,z:16.4,height:3,collide:.38},{frame:"tree_round",x:-13.2,z:23.2,height:2.6,collide:.34},{frame:"lamp",x:-15.8,z:19.2,height:2,collide:.22},{frame:"rock",x:-21.6,z:22.8,height:.52,collide:.26},{frame:"fence",x:-21.8,z:5.2,height:.66,collide:.28},{frame:"fence",x:-21.8,z:9.2,height:.66,collide:.28},{frame:"fence",x:-19.1,z:4.2,height:.66,collide:.28},{frame:"fence",x:-15.6,z:4.2,height:.66,collide:.28},{frame:"lamp",x:-13.6,z:14.6,height:2,collide:.22},{frame:"rock",x:-22,z:13.4,height:.5,collide:.26},{frame:"flowerbush",x:-20.6,z:12.8,height:.58,collide:.24},{frame:"cherry1",x:13.6,z:18.4,height:3,collide:.38},{frame:"tree_round",x:16,z:20.6,height:2.6,collide:.34},{frame:"cherry2",x:19.2,z:19.4,height:3.4,collide:.42},{frame:"tree_tall",x:21.4,z:16.6,height:3.2,collide:.36},{frame:"cherry1",x:20.2,z:12.4,height:3,collide:.38},{frame:"tree_round",x:16.4,z:11.4,height:2.6,collide:.34},{frame:"tree_round",x:12.8,z:14.2,height:2.6,collide:.34},{frame:"fence",x:12.4,z:20.8,height:.66,collide:.28},{frame:"lamp",x:10.4,z:19.4,height:2,collide:.22},{frame:"rock",x:22.2,z:21.2,height:.5,collide:.26},{frame:"tree_tall",x:-22,z:-16.5,height:3.2,collide:.36},{frame:"tree_round",x:-18.6,z:-16.5,height:2.6,collide:.34},{frame:"cherry1",x:-15.2,z:-16.5,height:3,collide:.38},{frame:"tree_tall",x:-11.8,z:-16.5,height:3.2,collide:.36},{frame:"cherry2",x:-14.4,z:-16.6,height:3.4,collide:.42},{frame:"tree_round",x:-20.4,z:-19.4,height:2.6,collide:.34},{frame:"cherry1",x:-17,z:-19.4,height:3,collide:.38},{frame:"tree_tall",x:-13.6,z:-19.4,height:3.2,collide:.36},{frame:"tree_round",x:-10.2,z:-19.4,height:2.6,collide:.34},{frame:"tree_tall",x:-7.6,z:-18.6,height:3.2,collide:.36},{frame:"cherry2",x:-22.4,z:-22.4,height:3.4,collide:.42},{frame:"tree_round",x:-19,z:-22.4,height:2.6,collide:.34},{frame:"tree_tall",x:-15.6,z:-22.4,height:3.2,collide:.36},{frame:"cherry1",x:-12.2,z:-22.4,height:3,collide:.38},{frame:"tree_round",x:-8.8,z:-22.4,height:2.6,collide:.34},{frame:"tree_tall",x:-20,z:-25.2,height:3.2,collide:.36},{frame:"cherry2",x:-16.6,z:-25.2,height:3.4,collide:.42},{frame:"tree_round",x:-13.2,z:-25.2,height:2.6,collide:.34},{frame:"tree_tall",x:-9.8,z:-25.2,height:3.2,collide:.36},{frame:"flowerbush",x:-19.8,z:-21,height:.56,collide:.24},{frame:"flowerbush",x:-11,z:-24,height:.58,collide:.24},{frame:"rock",x:-23.4,z:-19.6,height:.5,collide:.26},{frame:"rock",x:-15,z:-27.4,height:.46,collide:.24},{frame:"lamp",x:-7,z:-17.4,height:2,collide:.22},{frame:"rock",x:9.6,z:-13.6,height:.56,collide:.3},{frame:"rock",x:12.6,z:-13.6,height:.5,collide:.26},{frame:"rock",x:15.6,z:-13.6,height:.54,collide:.28},{frame:"rock",x:18.4,z:-13.6,height:.52,collide:.26},{frame:"rock",x:8.8,z:-16.6,height:.5,collide:.26},{frame:"rock",x:11.6,z:-16.6,height:.56,collide:.3},{frame:"rock",x:14.4,z:-16.6,height:.52,collide:.26},{frame:"rock",x:17.2,z:-16.6,height:.54,collide:.28},{frame:"rock",x:20,z:-16.6,height:.5,collide:.26},{frame:"rock",x:9.8,z:-19.8,height:.52,collide:.26},{frame:"rock",x:12.8,z:-19.8,height:.58,collide:.3},{frame:"rock",x:15.8,z:-19.8,height:.54,collide:.28},{frame:"rock",x:18.6,z:-19.8,height:.5,collide:.26},{frame:"rock",x:11,z:-15.1,height:.5,collide:.26},{frame:"rock",x:13.9,z:-15.1,height:.54,collide:.28},{frame:"rock",x:16.9,z:-15.1,height:.48,collide:.24},{frame:"rock",x:19.4,z:-15.1,height:.52,collide:.26},{frame:"rock",x:10.6,z:-18.2,height:.52,collide:.26},{frame:"rock",x:13.6,z:-18.2,height:.56,collide:.3},{frame:"rock",x:16.6,z:-18.2,height:.5,collide:.26},{frame:"rock",x:12.9,z:-21.3,height:.54,collide:.28},{frame:"rock",x:15.9,z:-21.3,height:.5,collide:.26},{frame:"rock",x:11.2,z:-22.8,height:.52,collide:.26},{frame:"rock",x:14.6,z:-22.8,height:.56,collide:.3},{frame:"rock",x:17.4,z:-22.8,height:.5,collide:.26},{frame:"tree_round",x:21.8,z:-20.2,height:2.6,collide:.34},{frame:"fence",x:7.2,z:-19.4,height:.66,collide:.28},{frame:"lamp",x:6.2,z:-17.6,height:2,collide:.22},{frame:"fence",x:-7.6,z:-17.4,height:.66,collide:.28},{frame:"fence",x:-7.6,z:-20.6,height:.66,collide:.28},{frame:"flowerbush",x:-6,z:-22,height:.56,collide:.24},{frame:"rock",x:-.2,z:-16.4,height:.5,collide:.26},{frame:"lamp",x:1.8,z:-21.4,height:2,collide:.22},{frame:"tree_round",x:-8,z:-22.6,height:2.6,collide:.34}],rn={dittoRange:2.9,catRange:2.2,tapRange:5,nodeRange:2.5,siteRange:3.4,plotRange:2.5},Ii={reward:15,steps:[{id:"gift",icon:"🎁",label:"우체통 선물 챙기기",hint:"📬 우체통 → 편지의 [선물 받기]"},{id:"ditto",icon:"🔍",label:"메타몽 2마리 찾기",hint:"가까이 다가가 [살펴보기]"},{id:"chop",icon:"🪓",label:"첫 나무 베기",hint:"나무 앞에서 [베기] 를 끝까지"}]},si={dbName:"metamong-island",store:"saves",key:"slot1",intervalSeconds:5};function La(s,t,e){let i=Math.imul(s|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}const jd=s=>s*s*(3-2*s);function yc(s,t,e=0){const i=Math.floor(s),n=Math.floor(t),r=s-i,a=t-n,o=jd(r),l=jd(a),c=La(i,n,e),h=La(i+1,n,e),d=La(i,n+1,e),f=La(i+1,n+1,e);return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+f*o)*l}function Fb(s,t,e=4,i=0){let n=0,r=.5,a=1,o=0;for(let l=0;l<e;l++)n+=(yc(s*a,t*a,i+l*131)*2-1)*r,o+=r,r*=.5,a*=2;return n/(o||1)}function _h(s,t,e){const i=Math.min(1,Math.max(0,(e-s)/(t-s||1e-6)));return i*i*(3-2*i)}function Ob(s,t,e){return s<t?t:s>e?e:s}class kb{constructor(t=20261120){this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.min(t.length-1,Math.floor(this.next()*t.length))]}}const Cn=fn+1,Da=.7,tu=1,Bb=28.8,eu=6.8,zb=3.6,Gb=.75;let bh=!1;function iu(s){bh=!!s}function wf(s,t){const e=Bb-eu,i=Math.abs(s)-e,n=Math.abs(t)-e,r=Math.hypot(Math.max(i,0),Math.max(n,0)),a=Math.min(Math.max(i,n),0);return r+a-eu}function Hb(s,t){const e=_h(6,24,t);return zb*(1+Gb*e)}function Vb(s,t){const e=Math.abs(t-yf(s)),i=Jd.halfWidth,n=Jd.bank;return e>=i+n?0:1-_h(i,i+n,e)}function Wb(s,t){const e=wf(s,t),i=Fb(s*.055+13.7,t*.055-8.2,3,7)*.85,n=_h(0,Hb(s,t),e+i);let r=Da-(Da+tu)*n;const a=Vb(s,t);return a>0&&(r=Math.min(r,-1.25+(Da- -1.25)*(1-a))),Ob(r,-tu,Da)}function $b(){const s=new Float32Array(Cn*Cn);for(let t=0;t<Cn;t++)for(let e=0;e<Cn;e++){const i=-ge+e*Ki,n=-ge+t*Ki;s[t*Cn+e]=Wb(i,n)}return s}const Ef=$b();function fs(s,t,e){const i=(t+ge)/Ki,n=(e+ge)/Ki;if(i<0||n<0||i>=fn||n>=fn)return-1.5;const r=Math.floor(i),a=Math.floor(n),o=i-r,l=n-a,c=s[a*Cn+r],h=s[a*Cn+r+1],d=s[(a+1)*Cn+r],f=s[(a+1)*Cn+r+1];return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+f*o)*l}function Mc(s,t,e){const n=fs(s,t+.45,e)-fs(s,t-.45,e),r=fs(s,t,e+.45)-fs(s,t,e-.45);return Math.hypot(n,r)/(2*.45)}function Xb(s,t,e){return Math.abs(t)>ge-1||Math.abs(e)>ge-1?!1:bh&&Mf(t,e)?!0:!(fs(s,t,e)<Ab||Mc(s,t,e)>1.35)}function qb(s,t){return!bh||!Mf(s,t)?null:Vt.deckY}const Yb="#3b2d38",Kb=[140,140,140,255,172,172,172,255,222,222,222,255,255,255,255,255];function Tf(){const s=new lh(new Uint8Array(Kb),4,1,Qi);return s.minFilter=fe,s.magFilter=fe,s.generateMipmaps=!1,s.needsUpdate=!0,s}const Zb=Tf();function wi(s={}){return new g0({gradientMap:Zb,...s})}new bi({color:Yb,side:ni,fog:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});const xi={deepSand:new ut("#dcc79c"),wetSand:new ut("#f2dfb4"),sand:new ut("#ffe6b8"),sandLight:new ut("#fff1d2"),grassA:new ut("#98dd78"),grassB:new ut("#b6ec96"),grassC:new ut("#82d46c"),grassMint:new ut("#abe4bd"),stone:new ut("#e7ddc9"),stoneHigh:new ut("#f2ead8")};new ut;let qi=null;function Jb(){if(qi)return qi;const s=64,t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,s,s);const i=["#f4f7f0","#fbfdf8","#eef4ea","#ffffff","#f7faf3"];for(let n=0;n<220;n++){const r=Math.floor(Math.random()*s),a=Math.floor(Math.random()*s);e.fillStyle=i[Math.floor(Math.random()*i.length)],e.fillRect(r,a,Math.random()<.25?2:1,Math.random()<.25?2:1)}return qi=new jn(t),qi.colorSpace=we,qi.wrapS=qi.wrapT=zr,qi.magFilter=fe,qi.minFilter=Pn,qi.generateMipmaps=!0,qi.anisotropy=4,qi}function Qb(s,t,e,i,n){const r=yc(e*.33+7.1,i*.33-3.3,41),a=yc(e*.12-2.4,i*.12+5.6,17);return s<-.05?n.copy(xi.deepSand).lerp(xi.wetSand,.3+r*.3):s<.2?n.copy(xi.wetSand).lerp(xi.sand,.35+r*.5):s<.4?n.copy(xi.sand).lerp(xi.sandLight,r*.5):s<.58?n.copy(xi.sand).lerp(xi.grassA,.35+r*.55):t>1.55?n.copy(xi.stone).lerp(xi.stoneHigh,r*.6):(n.copy(xi.grassA),r>.54?n.lerp(xi.grassB,(r-.54)*2.2):r<.44&&n.lerp(xi.grassC,(.44-r)*2.2),a>.7&&n.lerp(xi.grassMint,(a-.7)*.8)),n}var rr,Af,Rf;class jb{constructor(t){Ne(this,rr);this.heights=t,this.group=new We,this.group.name="Terrain",this.mesh=S(this,rr,Af).call(this,t),this.group.add(this.mesh),this.seabed=S(this,rr,Rf).call(this),this.group.add(this.seabed)}sampleHeight(t,e){return fs(this.heights,t,e)}slopeAt(t,e){return Mc(this.heights,t,e)}isWalkable(t,e){return Xb(this.heights,t,e)}groundY(t,e){const i=qb(t,e);return i!==null?i:Math.max(this.sampleHeight(t,e),xh+.02)}dispose(){this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}}rr=new WeakSet,Af=function(t){const e=fn+1,i=fn*fn,n=new Float32Array(i*6*3),r=new Float32Array(i*6*3),a=new Float32Array(i*6*2),o=1/2.6,l=new Float32Array(e*e*3),c=new ut;for(let R=0;R<e;R++)for(let T=0;T<e;T++){const _=-ge+T*Ki,w=-ge+R*Ki,k=t[R*e+T];Qb(k,Mc(t,_,w),_,w,c);const D=(R*e+T)*3;l[D]=c.r,l[D+1]=c.g,l[D+2]=c.b}let h=0,d=0,f=0;const u=(R,T,_,w)=>{n[h++]=R,n[h++]=_,n[h++]=T,r[d++]=l[w],r[d++]=l[w+1],r[d++]=l[w+2],a[f++]=R*o,a[f++]=T*o};for(let R=0;R<fn;R++)for(let T=0;T<fn;T++){const _=-ge+T*Ki,w=_+Ki,k=-ge+R*Ki,D=k+Ki,F=R*e+T,B=R*e+T+1,X=(R+1)*e+T,I=(R+1)*e+T+1,W=t[F],Z=t[B],V=t[X],nt=t[I];u(_,k,W,F*3),u(_,D,V,X*3),u(w,D,nt,I*3),u(_,k,W,F*3),u(w,D,nt,I*3),u(w,k,Z,B*3)}const v=new Le;v.setAttribute("position",new gi(n,3)),v.setAttribute("color",new gi(r,3)),v.setAttribute("uv",new gi(a,2)),v.computeVertexNormals(),v.computeBoundingSphere();const x=v.attributes.normal,p=v.attributes.position;let m=0;for(let R=0;R<p.count;R+=3)if(x.getY(R)<0){for(let T=0;T<3;T++){const _=p.getComponent(R+1,T),w=p.getComponent(R+2,T);p.setComponent(R+1,T,w),p.setComponent(R+2,T,_)}for(let T=0;T<3;T++){const _=v.attributes.color.getComponent(R+1,T),w=v.attributes.color.getComponent(R+2,T);v.attributes.color.setComponent(R+1,T,w),v.attributes.color.setComponent(R+2,T,_)}m++}m>0&&(v.computeVertexNormals(),p.needsUpdate=!0);const M=wi({vertexColors:!0,map:Jb()}),C=new Zt(v,M);C.name="TerrainSurface",C.receiveShadow=!0,C.frustumCulled=!0;const E=v.attributes.color;return E.needsUpdate=!0,C},Rf=function(){const t=new yi(ge*10,ge*10,1,1);t.rotateX(-Math.PI/2);const e=wi({color:"#dff3ec"}),i=new Zt(t,e);return i.position.y=-1.35,i.name="Seabed",i.receiveShadow=!0,i};const ty=`
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
`,ey=`
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
`;class iy{constructor(){const t=ge*8,e=new yi(t,t,72,72);e.rotateX(-Math.PI/2),this.material=new fi({uniforms:ir.merge([gt.fog,{uTime:{value:0},uShallow:{value:new ut("#8ff0e0")},uDeep:{value:new ut("#2fc4cd")},uSkyColor:{value:new ut("#e8fcff")},uSunColor:{value:new ut("#fffbe6")},uNight:{value:0}}]),vertexShader:ty,fragmentShader:ey,transparent:!0,fog:!0,depthWrite:!0}),this.mesh=new Zt(e,this.material),this.mesh.name="Water",this.mesh.position.y=xh,this.mesh.renderOrder=1}update(t,e){this.material.uniforms.uTime.value=t,e&&(this.material.uniforms.uShallow.value.copy(e.waterShallow),this.material.uniforms.uDeep.value.copy(e.waterDeep),this.material.uniforms.uSkyColor.value.copy(e.skyBottom),this.material.uniforms.uSunColor.value.copy(e.sun),this.material.uniforms.uNight.value=e.night)}}const ny=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sy=`
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
`;class ry{constructor(){const t=new wo(500,32,20);this.material=new fi({uniforms:{uTop:{value:new ut("#8ed7f6")},uBottom:{value:new ut("#f1fcf4")},uDisc:{value:new ut("#fff2cf")},uDiscDir:{value:new U(.2,.6,-.6)},uCloud:{value:new ut("#ffffff")},uNight:{value:0},uTime:{value:0}},vertexShader:ny,fragmentShader:sy,side:ni,depthWrite:!1,fog:!1}),this.mesh=new Zt(t,this.material),this.mesh.name="Skybox",this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}update(t){this.mesh.position.copy(t)}setPalette({skyTop:t,skyBottom:e,sun:i,night:n,discDir:r,elapsed:a}){const o=this.material.uniforms;o.uTop.value.copy(t),o.uBottom.value.copy(e),o.uDisc.value.copy(i),o.uCloud.value.copy(e).lerp(i,.35),o.uNight.value=n,o.uTime.value=a,r&&o.uDiscDir.value.copy(r)}}let yr=null;function nu(){if(yr)return yr;const s=document.createElement("canvas");s.width=s.height=96;const t=s.getContext("2d"),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(255,255,255,0.92)"),e.addColorStop(.45,"rgba(255,255,255,0.62)"),e.addColorStop(.78,"rgba(255,255,255,0.24)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.ellipse(48,48,46,46,0,0,Math.PI*2),t.fill(),yr=new jn(s),yr.colorSpace=we,yr}function $r(s=.34,t=.3){const e=new Zr(s,28);e.rotateX(-Math.PI/2),e.scale(1,1,.62);const i=new bi({color:"#6d5a8a",map:nu(),alphaMap:nu(),transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),n=new Zt(e,i);return n.renderOrder=2,n}let Mr=null;function ay(){if(Mr)return Mr;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,20,64,64,62);return e.addColorStop(0,"rgba(255,214,232,0)"),e.addColorStop(.52,"rgba(255,206,228,0.06)"),e.addColorStop(.76,"rgba(255,190,220,0.85)"),e.addColorStop(1,"rgba(255,190,220,0)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),Mr=new jn(s),Mr.colorSpace=we,Mr}function oy(s=.45){const t=new Zr(s,32);t.rotateX(-Math.PI/2);const e=new bi({map:ay(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),i=new Zt(t,e);return i.renderOrder=2,i}let Sr=null;function ly(){if(Sr)return Sr;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");return t.font='96px "Noto Sans CJK KR", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=11,t.strokeStyle="rgba(255,255,255,0.92)",t.strokeText("♥",64,68),t.fillStyle="#ff86a8",t.fillText("♥",64,68),Sr=new jn(s),Sr.colorSpace=we,Sr}function Cf(s=.42){const t=new ui(new ii({map:ly(),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return t.scale.set(s,s,1),t.visible=!1,t}class Xr{constructor(t,e,i={}){const{height:n=1,exact:r=!1}=i;this.atlas=t;const a=t.frames.get(e)||t.frames.values().next().value;this.height=n,this.exact=r,this.aspect=r?a.w/a.h:t.cell[0]/t.cell[1];const o=new yi(n*this.aspect,n);o.translate(0,n/2,0);const l=t.texture.clone();l.needsUpdate=!0,this.map=l,this.material=new bi({map:l,transparent:!1,alphaTest:.45,depthWrite:!0,depthTest:!0,side:Yn,toneMapped:!1,fog:!0,color:16777215}),this.mesh=new Zt(o,this.material),this.mesh.name=`Billboard_${t.set}_${e}`,this._wp=new U,this.frame=null,this.flip=!1,this.setFrame(e,!!i.flip),this.mesh.userData.billboard=this}setFrame(t,e=this.flip){const i=this.atlas.frames.get(t);if(!i)return this.frame;this.frame=i,this.flip=!!e;const n=1/this.atlas.cols,r=1/this.atlas.rows;if(this.map.offset.set(e?i.col/this.atlas.cols:(i.col-1)/this.atlas.cols,1-i.row/this.atlas.rows),this.map.repeat.set(e?-n:n,r),this.map.needsUpdate=!0,this.exact){const a=i.w/i.h;if(Math.abs(a-this.aspect)>1e-4){this.aspect=a,this.mesh.geometry.dispose();const o=new yi(this.height*a,this.height);o.translate(0,this.height/2,0),this.mesh.geometry=o}}return i}faceCamera(t){this.mesh.getWorldPosition(this._wp),this.mesh.rotation.y=Math.atan2(t.position.x-this._wp.x,t.position.z-this._wp.z)}setTint(t){this.material.color.copy(t)}dispose(){this.map.dispose(),this.material.dispose(),this.mesh.geometry.dispose()}}const xe={log:{id:"log",name:"통나무",icon:"🪵",tint:"#c98b52",desc:"나무를 두드리면 나와요"},stone:{id:"stone",name:"돌",icon:"🪨",tint:"#a9a9c0",desc:"바위를 두드리면 나와요"},petal:{id:"petal",name:"꽃잎",icon:"🌸",tint:"#ffb3d1",desc:"꽃덤불과 벚꽃나무에서"},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",desc:"바위에서 아주 가끔"},berry:{id:"berry",name:"열매",icon:"🍓",tint:"#ff7d9c",desc:"먹으면 기력 +30"}},Sc=["log","stone","petal","star","berry"],Ve={slots:8,stack:20},Zi={cost:{log:8,stone:5,coin:60},slotsPerLevel:8,maxLevel:1,desc:"바퀴 달린 작은 손수레. 짊어지고 다니는 가방이 두 배로 넓어진다."},su=999,di={max:100,hitTree:6,hitRock:7,hitFlower:3,eat:30,regenPerSecond:1/6},Ka={dock:{log:3,stone:2},workshop:{log:4,stone:3},vending:{log:4,stone:4},lighthouse:{log:6,stone:5}},ru={dock:"배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.",workshop:"창고와 도구방이 함께 열려요. 재료 정리는 여기서 해요.",vending:"메타몽 자판기예요. 복구하면 밤에 은은하게 빛나요.",lighthouse:"복구하면 밤마다 따뜻한 불이 켜져요. 섬의 마지막 등불이에요."},Vs={log:6,stone:4},Ro={tree:{frames:["cherry1","cherry2","tree_tall","tree_round"],cost:di.hitTree,hits:[2,3],icon:"🪓",verb:"베기"},rock:{frames:["rock"],cost:di.hitRock,hits:[2,3],icon:"⛏️",verb:"채굴"},flower:{frames:["flowerbush"],cost:di.hitFlower,hits:[1,1],icon:"🌸",verb:"꽃 따기"}};function cy(s){for(const[t,e]of Object.entries(Ro))if(e.frames.includes(s))return t;return null}function hy(s,t,e=Math.random){const i={};return s==="tree"?(i.log=1+Math.floor(e()*3),String(t).startsWith("cherry")&&e()<.65&&(i.petal=1)):s==="rock"?(i.stone=1+Math.floor(e()*3),e()<.14&&(i.star=1)):s==="flower"&&(i.petal=1+(e()<.5?1:0)),i}function dy(s){return Object.entries(s).filter(([,t])=>t>0).map(([t,e])=>`${xe[t]?xe[t].name:t} ${e}`).join(" · ")}const Te=new Map;function Co(s=16){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function Ms(s){const t=new jn(s);return t.colorSpace=we,t.magFilter=fe,t.minFilter=fe,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Po(s,t){return(e,i,n,r,a)=>{s.fillStyle=a,s.fillRect(e*t,i*t,n*t,r*t)}}function uy(){const s="cart";if(Te.has(s))return Te.get(s);const{c:t,ctx:e}=Co(24),i=Po(e,1);i(1,11,5,2,"#a9713f"),i(1,11,5,1,"#c68a52"),i(5,7,16,8,"#b07845"),i(5,7,16,1,"#d19a5f"),i(5,14,16,1,"#8a5a30"),i(5,10,16,1,"#96633a"),i(5,7,1,8,"#8a5a30"),i(20,7,1,8,"#7a4c28"),i(6,6,14,1,"#e0ad72");const n=(a,o)=>{i(a-3,o-1,7,2,"#4a4350"),i(a-2,o-3,5,1,"#4a4350"),i(a-2,o+2,5,1,"#4a4350"),i(a-1,o-2,3,4,"#6b6472"),i(a,o-1,1,1,"#d8d2dc")};n(7,18),n(18,18),i(7,17,11,1,"#7a5a3a");const r=Ms(t);return Te.set(s,r),r}function fy(s){const{c:t,ctx:e}=Co(16),i=Po(e,1);return s==="berry"?(i(7,2,2,1,"#6dbf6a"),i(9,3,1,1,"#579a55"),i(8,4,1,1,"#7a5236"),i(5,5,6,1,"#e8496b"),i(4,6,8,1,"#ef5a7b"),i(4,7,9,1,"#f0607f"),i(3,8,10,1,"#ee5c7d"),i(3,9,10,1,"#e8506f"),i(4,10,9,1,"#dc4865"),i(5,11,7,1,"#c93d59"),i(6,12,5,1,"#b2334f"),i(5,7,2,2,"#ffa3bb"),i(6,6,1,1,"#ffc2d2"),i(5,9,1,1,"#ffe3ea"),i(8,10,1,1,"#ffe3ea"),i(11,8,1,1,"#ffd0dc")):s==="log"?(i(3,6,10,6,"#a9713f"),i(3,6,10,1,"#c68a52"),i(3,11,10,1,"#8a5a30"),i(5,7,1,4,"#965f33"),i(8,8,4,1,"#b87f47"),i(2,7,2,4,"#d8a468"),i(2,8,2,2,"#e8bc85"),i(3,8,1,2,"#b9854f"),i(12,7,2,4,"#c9925a"),i(12,8,1,2,"#8a5a30")):s==="stone"?(i(5,5,6,1,"#d3d5e2"),i(4,6,8,1,"#c3c6d6"),i(3,7,10,1,"#b3b7ca"),i(3,8,10,2,"#a6aabf"),i(4,10,9,1,"#8f94ac"),i(5,11,7,1,"#7b8098"),i(6,12,5,1,"#6b7086"),i(5,6,3,1,"#e7e9f2"),i(7,9,2,1,"#c9cddd")):s==="petal"?(i(7,4,3,1,"#ffd0e2"),i(6,5,5,1,"#ffb8d2"),i(5,6,6,2,"#ffa6c8"),i(4,8,6,2,"#f892b8"),i(5,10,4,1,"#e97fa8"),i(6,11,2,1,"#d16d96"),i(7,6,2,1,"#ffe6f0")):s==="star"?(i(7,1,2,3,"#ffe9a8"),i(7,12,2,3,"#ffe9a8"),i(1,7,3,2,"#ffe9a8"),i(12,7,3,2,"#ffe9a8"),i(5,5,6,1,"#ffd464"),i(4,6,8,1,"#ffcf55"),i(4,7,8,2,"#ffc94a"),i(5,9,6,1,"#ffbf3e"),i(6,10,4,1,"#ffb42f"),i(7,7,2,2,"#fff8dc"),i(6,6,1,1,"#fff3c0")):i(6,6,4,4,"#dcdcea"),Ms(t)}function py(s){const t=`item:${s}`;return Te.has(t)||Te.set(t,fy(s)),Te.get(t)}function my(s="tree"){const t=`stump:${s}`;if(Te.has(t))return Te.get(t);const{c:e,ctx:i}=Co(24),n=Po(i,1);if(s==="tree"){const a=[[5,10,15,"#dcae74"],[6,9,16,"#d3a067"],[7,9,16,"#c9925a"],[8,8,17,"#b07c46"],[9,8,17,"#96633a"],[10,8,17,"#8a5a34"],[11,8,17,"#8a5a34"],[12,8,17,"#8a5a34"],[13,8,17,"#8a5a34"],[14,8,17,"#8a5a34"],[15,7,18,"#855631"],[16,7,18,"#7c5030"],[17,7,18,"#7c5030"],[18,6,19,"#74482a"],[19,6,19,"#6a4025"],[20,6,19,"#5f3d24"]];for(const[o,l,c,h]of a)n(l,o,c-l+1,1,h),n(l,o,1,1,"#5f3d24"),n(c,o,1,1,"#4e3019");n(16,9,2,10,"#74482a"),n(8,10,1,8,"#a06b3d"),n(11,6,3,1,"#a5713d"),n(10,6,1,2,"#a5713d"),n(14,6,1,2,"#a5713d"),n(12,7,2,1,"#b9854f"),n(12,5,1,1,"#f0d8ab"),n(10,12,1,4,"#6f4628"),n(13,14,1,4,"#6f4628"),n(18,12,1,6,"#6fa35a"),n(19,10,2,2,"#9ed07a"),n(21,9,1,2,"#7fbb62"),n(18,8,1,2,"#9ed07a")}else s==="rock"?(n(4,14,7,5,"#b3b7ca"),n(5,12,5,2,"#d3d5e2"),n(11,15,8,5,"#a6aabf"),n(12,13,6,2,"#c3c6d6"),n(17,16,4,4,"#8f94ac"),n(3,19,18,1,"#7b8098"),n(6,15,2,1,"#e7e9f2"),n(14,15,2,1,"#dfe2ee"),n(8,9,1,3,"#6fa35a"),n(6,8,2,2,"#9ed07a")):(n(3,16,18,4,"#8a6a4a"),n(4,15,16,1,"#a4815c"),n(3,19,18,1,"#6f5439"),n(6,14,2,2,"#ffb8d2"),n(11,13,2,1,"#ffa6c8"),n(15,14,1,1,"#ffd0e2"),n(16,8,1,7,"#6fa35a"),n(14,7,2,2,"#9ed07a"),n(17,6,2,2,"#9ed07a"),n(19,7,1,1,"#7fbb62"));const r=Ms(e);return Te.set(t,r),r}function gy(){const s="sprout";if(Te.has(s))return Te.get(s);const{c:t,ctx:e}=Co(16),i=Po(e,1);i(7,8,2,6,"#7fae5b"),i(5,6,3,2,"#8ec96a"),i(3,7,2,1,"#a5db7f"),i(8,4,3,2,"#8ec96a"),i(11,5,2,1,"#a5db7f"),i(7,3,2,2,"#b7e694"),i(6,12,4,1,"#5f8a45");const n=Ms(t);return Te.set(s,n),n}function qr(){const s="glow";if(Te.has(s))return Te.get(s);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,2,32,32,31);i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(.42,"rgba(255,246,214,0.55)"),i.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Ms(t);return Te.set(s,n),n}function vy(){const s="ripple";if(Te.has(s))return Te.get(s);const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(32,32,14,32,32,31);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.55,"rgba(255,255,255,0.06)"),i.addColorStop(.8,"rgba(236,252,255,0.92)"),i.addColorStop(.94,"rgba(206,240,255,0.42)"),i.addColorStop(1,"rgba(206,240,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,31,0,Math.PI*2),e.fill();const n=Ms(t);return Te.set(s,n),n}function xy(){if(Te.has("dot"))return Te.get("dot");const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(16,16,0,16,16,15);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.55,"rgba(255,255,255,0.75)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.arc(16,16,15,0,Math.PI*2),e.fill();const n=Ms(t);return Te.set("dot",n),n}const _y={workshop:"workshop",lighthouse:"lighthouse",vending:"vending",dock:"dock"},by={workshop:1.2,lighthouse:.82,vending:.55,dock:.9},xl=new ut("#8e88a2"),yy=new ut("#ffffff"),_l=.9,bl=.055,au={tree:[1.05,1.35],rock:[.8,.62],flower:[.78,.56]},yl=.06,Ml=0;let wr=null;function My(){if(wr)return wr;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");return t.font='96px "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("🚧",64,70),wr=new jn(s),wr.colorSpace=we,wr}var Jn,Pf,Lf,Df;class Sy{constructor(t,e){Ne(this,Jn);this.terrain=t,this.group=new We,this.group.name="Scenery",this.sites=[],this.billboards=[],this.colliders=[],this.nodes=[],this.beacon=null,this.spriteLight=new ut(1,1,1);const i=e.get("buildings"),n=e.get("nature");for(const r of _i){const a=r.water?0:Math.max(t.sampleHeight(r.x,r.z),.02),o=new Xr(i,_y[r.id],{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Building_${r.id}`,this.group.add(o.mesh),this.billboards.push(o);const l={...r,y:a,billboard:o,built:!1};l.kind="site",l.tint=xl.clone(),l.tintTarget=xl.clone(),l.sag=_l,l.sagTarget=_l,l.lean=bl,l.leanTarget=bl,o.material.color.copy(l.tint),o.mesh.scale.y=l.sag,o.mesh.rotation.z=l.lean,o.mesh.userData.site=l;const c=new ui(new ii({map:My(),transparent:!0,depthWrite:!1,toneMapped:!1}));c.scale.set(.9,.9,1),c.position.set(r.x,a+r.height+.42,r.z),c.renderOrder=6,this.group.add(c),l.marker=c,l.markerBaseY=c.position.y,l.markerOpacity=1,l.markerTarget=1,this.sites.push(l),this.colliders.push({x:r.x,z:r.z,r:by[r.id]||1});const h=$r(r.height*.34,.26);h.position.set(r.x,a+.02,r.z),this.group.add(h)}for(const r of Ub){const a=Math.max(t.sampleHeight(r.x,r.z),.02),o=new Xr(n,r.frame,{height:r.height,exact:!0});o.mesh.position.set(r.x,a,r.z),o.mesh.name=`Nature_${r.frame}_${r.x}_${r.z}`,this.group.add(o.mesh),this.billboards.push(o);let l=null;r.collide&&(l={x:r.x,z:r.z,r:r.collide},this.colliders.push(l));const c=$r((r.collide||.3)*1.25,.22);c.position.set(r.x,a+.02,r.z),this.group.add(c);const h=cy(r.frame);if(h){const d=S(this,Jn,Pf).call(this,r,h,a,o,l);o.mesh.userData.node=d,this.nodes.push(d)}}S(this,Jn,Df).call(this)}pop(t){t.popT=.26}setHarvested(t,e){t.harvested=!!e,t.targetScale=e?yl:1,t.targetOpacity=e?Ml:1,t.stubTarget=e?.92:0,t.sprout.visible=!!e,e&&(t.mesh.material.transparent=!0,t.mesh.material.depthWrite=!1),t.collider&&(t.collider.r=e?0:t.baseR),e||(t.mesh.material.depthWrite=!0,t.hasBerry=!1)}applyNodeState(t,e){if(!e)return;const i=e.left<=0||e.respawn>0;t.hitsLeft=Math.max(1,Math.min(t.hitsNeeded,e.left||t.hitsNeeded)),t.respawn=Math.max(0,Number(e.respawn)||0),t.mesh.material.transparent=!0,t.scale=i?yl:1,t.opacity=i?Ml:1,t.mesh.scale.setScalar(t.scale),t.mesh.material.opacity=t.opacity,t.harvested=i,t.targetScale=i?yl:1,t.targetOpacity=i?Ml:1,t.sprout.visible=i,t.stubTarget=i?.92:0,t.stub.material.opacity=t.stubTarget,t.stub.visible=i,t.collider&&(t.collider.r=i?0:t.baseR),i||(t.mesh.material.depthWrite=!0)}setBuilt(t,e=!0,i=!1){const n=this.sites.find(r=>r.id===t);n&&(n.built=!!e,n.tintTarget.copy(e?yy:xl),n.sagTarget=e?1:_l,n.leanTarget=e?0:bl,n.markerTarget=e?0:1,i&&(n.tint.copy(n.tintTarget),n.sag=n.sagTarget,n.lean=n.leanTarget,n.markerOpacity=n.markerTarget,n.marker&&(n.marker.material.opacity=n.markerOpacity,n.marker.visible=n.markerOpacity>.02),n.billboard.material.color.copy(n.tint),n.billboard.mesh.scale.y=n.sag,n.billboard.mesh.rotation.z=n.lean),this.beacon&&t==="lighthouse"&&(this.beacon.enabled=!!e))}setSpriteLight(t){t&&this.spriteLight.copy(t)}update(t,e,i=0){if(e)for(const n of this.billboards)n.faceCamera(e);S(this,Jn,Lf).call(this,t);for(const n of this.nodes){if(n.popT>0){n.popT=Math.max(0,n.popT-t);const a=n.popT/.26;n.mesh.rotation.z=Math.sin((1-a)*30)*.09*a}else n.mesh.rotation.z!==0&&(n.mesh.rotation.z=0);if(Math.abs(n.scale-n.targetScale)>.003){n.scale+=(n.targetScale-n.scale)*Math.min(1,t*9),n.mesh.scale.setScalar(n.scale);const a=n.opacity+(n.targetOpacity-n.opacity)*Math.min(1,t*9);n.opacity=a,n.mesh.material.opacity=a}else Math.abs(n.opacity-n.targetOpacity)>.003&&(n.opacity+=(n.targetOpacity-n.opacity)*Math.min(1,t*9),n.mesh.material.opacity=n.opacity);const r=n.stubTarget||0;Math.abs(n.stub.material.opacity-r)>.004?(n.stub.material.opacity+=(r-n.stub.material.opacity)*Math.min(1,t*9),n.stub.visible=n.stub.material.opacity>.02):(n.stub.material.opacity=r,n.stub.visible=r>.02),n.opacity>.99&&n.mesh.material.transparent&&(n.mesh.material.transparent=!1,n.mesh.material.opacity=1,n.opacity=1),n.sprout.visible&&(n.sprout.position.y=n.y+.16+Math.sin(performance.now()*.002+n.x)*.02,n.sprout.material.rotation=Math.sin(performance.now()*.0012+n.z)*.12)}if(this.beacon){const n=this.beacon;n.t+=t;const r=n.enabled?1:0,a=.88+Math.sin(n.t*1.7)*.07+Math.sin(n.t*3.3)*.05;n.light.intensity+=(r*(.8+i*3.4)*a-n.light.intensity)*Math.min(1,t*2.4),n.glow.material.opacity+=(r*(.16+i*.72)*a-n.glow.material.opacity)*Math.min(1,t*2.4),n.lamp.material.opacity+=(r*(.2+i*.8)-n.lamp.material.opacity)*Math.min(1,t*2.4)}}}Jn=new WeakSet,Pf=function(t,e,i,n,r){const a=Ro[e],[o,l]=a.hits,c=o+Math.floor(Math.random()*(l-o+1)),h=au[e]||au.tree,d=new ui(new ii({map:my(e),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}));d.scale.set(h[0],h[1],1),d.position.set(t.x,i+h[1]*.46,t.z),d.visible=!1,d.renderOrder=3,this.group.add(d);const f=new ui(new ii({map:gy(),transparent:!0,depthWrite:!1,toneMapped:!1}));return f.scale.set(.55,.55,1),f.position.set(t.x+.42,i+.3,t.z+.45),f.renderOrder=5,f.visible=!1,f.renderOrder=4,this.group.add(f),{key:`${t.frame}@${t.x},${t.z}`,isNode:!0,kind:e,frame:t.frame,x:t.x,z:t.z,y:i,height:t.height,billboard:n,mesh:n.mesh,collider:r,baseR:t.collide||0,hitsNeeded:c,hitsLeft:c,harvested:!1,respawn:0,berryT:24+Math.random()*26,hasBerry:!1,scale:1,targetScale:1,opacity:1,targetOpacity:1,popT:0,sprout:f,stub:d,stubTarget:0}},Lf=function(t){const e=Math.min(1,t*3.4);for(const i of this.sites){const n=i.billboard;if(!n)continue;(Math.abs(i.tint.r-i.tintTarget.r)>.004||Math.abs(i.tint.g-i.tintTarget.g)>.004||Math.abs(i.tint.b-i.tintTarget.b)>.004||Math.abs(i.sag-i.sagTarget)>.002||Math.abs(i.lean-i.leanTarget)>.002)&&(i.tint.lerp(i.tintTarget,e),i.sag+=(i.sagTarget-i.sag)*e,i.lean+=(i.leanTarget-i.lean)*e,n.mesh.scale.y=i.sag,n.mesh.rotation.z=i.lean),n.material.color.copy(this.spriteLight).multiply(i.tint);const a=i.marker;a&&(Math.abs(i.markerOpacity-i.markerTarget)>.004&&(i.markerOpacity+=(i.markerTarget-i.markerOpacity)*Math.min(1,t*6)),a.material.opacity=i.markerOpacity,a.material.color.copy(this.spriteLight),a.visible=i.markerOpacity>.02,a.visible&&(a.position.y=i.markerBaseY+Math.sin(performance.now()*.0022+i.x)*.07))}},Df=function(){const t=this.sites.find(a=>a.id==="lighthouse");if(!t)return;const e=t.y+t.height*.86,i=new E0("#ffdca8",0,26,1.7);i.position.set(t.x,e,t.z),this.group.add(i);const n=new ui(new ii({map:qr(),color:"#ffd79a",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:Kn}));n.scale.set(5.2,5.2,1),n.position.set(t.x,e,t.z),this.group.add(n);const r=new ui(new ii({map:qr(),color:"#fff3cf",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));r.scale.set(1.1,1.1,1),r.position.set(t.x,e+.1,t.z),this.group.add(r),this.beacon={enabled:!1,light:i,glow:n,lamp:r,t:0}};const If=[[[0,29.2],[0,26.6],[0,23],[.2,20.2],[0,17.8],[0,16.2]],[[0,16],[-2.6,14],[-5.4,12.2],[-7.4,11],[-8.2,10.2]],[[.4,16],[3.2,14.4],[6,12],[8,10.4],[8.6,9.7]],[[1.4,15.8],[4.6,13.6],[8.4,12.6],[11.4,9.6],[13.2,5.4],[14.2,1.4],[14.6,-.8]],[[0,16],[.4,12],[.2,6],[0,-.4],[0,-4.9]],[[-1.6,15.6],[-4.6,14.6],[-8,13.6],[-11.4,13.2],[-14,12.8],[-15.6,12.2]],[[-2.4,17.6],[-6.4,19],[-9.6,20.2],[-12.4,20.2],[-13.6,19.8]],[[1.6,16.6],[5.2,17.6],[8.8,18],[11.6,17],[13,15.6]],[[0,-13.1],[-1.2,-14.4],[-2.6,-15.4],[-3.4,-16.1]],[[0,-13.1],[-2.2,-13.6],[-5,-14.4],[-7.6,-15.6],[-9.4,-16.6]],[[0,-13.1],[2.6,-13.8],[5.6,-14.6],[7.8,-15],[9.4,-15.4]]],Ia=1.15,wy=.6,Ey=new ut("#f6e5c2"),Ty=new ut("#e2c89c"),Na=[-Ia/2,-Ia*.22,Ia*.22,Ia/2];let an=null;function Ay(){if(an)return an;const s=document.createElement("canvas");s.width=64,s.height=64;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.16,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.84,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(196,168,126,0.16)";for(let i=0;i<40;i++){const n=Math.floor(Math.random()*64),r=Math.floor(Math.random()*64);t.fillRect(n,r,2,2)}return an=new jn(s),an.colorSpace=we,an.magFilter=fe,an.minFilter=Ye,an.generateMipmaps=!1,an.wrapS=ki,an.wrapT=zr,an}function Ry(s){const t=new nf(s.map(([i,n])=>new U(i,0,n)),!1,"catmullrom",.5),e=Math.max(4,Math.round(t.getLength()/wy));return t.getSpacedPoints(e).map(i=>[i.x,i.z])}class Cy{constructor(t){this.group=new We,this.group.name="Path";const e=[],i=[],n=[],r=[],a=new ut;for(const h of If){const d=Ry(h),f=e.length/3;let u=0;for(let p=0;p<d.length;p++){const[m,M]=d[p],[C,E]=d[Math.max(0,p-1)],[R,T]=d[Math.min(d.length-1,p+1)],_=R-C,w=T-E,k=Math.hypot(_,w)||1,D=-w/k,F=_/k;p>0&&(u+=Math.hypot(m-d[p-1][0],M-d[p-1][1]));for(let B=0;B<Na.length;B++){const X=Na[B],I=m+D*X,W=M+F*X;e.push(I,t.groundY(I,W)+.04,W),n.push(B/(Na.length-1),u/2.2);const Z=Math.abs(B-1.5)/1.5;a.copy(Ey).lerp(Ty,Z*.75),i.push(a.r,a.g,a.b)}}const v=d.length,x=Na.length;for(let p=0;p<v-1;p++)for(let m=0;m<x-1;m++){const M=f+p*x+m,C=M+1,E=f+(p+1)*x+m,R=E+1;r.push(M,E,R,M,R,C)}}const o=new Le;o.setAttribute("position",new pe(e,3)),o.setAttribute("color",new pe(i,3)),o.setAttribute("uv",new pe(n,2)),o.setIndex(r),o.computeVertexNormals();const l=wi({vertexColors:!0,map:Ay(),transparent:!0,alphaTest:.06,depthWrite:!1,side:Fi,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=new Zt(o,l);c.name="PathSurface",c.receiveShadow=!0,this.group.add(c)}}const Er=new ut("#dfe8ef"),Py=new ut("#8feadf"),Ly=new ut("#31c6cd"),Dy=new U(-.22,.86,.34).normalize(),Iy={hemi:.52,ambient:.26,sun:1.25,fill:.22},ou={top:"skyTop",bottom:"skyBottom",fog:"fog",sun:"sun",hemiSky:"hemiSky",hemiGround:"hemiGround"};var vn,Nf,Uf,Ff,Of;class Ny{constructor(t){Ne(this,vn);this.scene=new jm,this.scene.fog=new oh("#f2fcf5",.0062),this.terrain=new jb(Ef),this.scene.add(this.terrain.group),this.water=new iy,this.scene.add(this.water.mesh),this.sky=new ry,this.scene.add(this.sky.mesh),this.hemi=new S0("#fff4e2","#dcf5c6",1.5),this.scene.add(this.hemi),this.ambient=new A0("#fff8ec",.5),this.scene.add(this.ambient),this.sunLight=new Sd("#ffe9c6",1.1),this.sunLight.position.set(12,30,-18),this.sunLight.target.position.set(0,0,0),this.sunLight.castShadow=!0;const e=this.sunLight.shadow;e.mapSize.set(1024,1024),e.camera.left=-30,e.camera.right=30,e.camera.top=30,e.camera.bottom=-30,e.camera.near=1,e.camera.far=170,e.bias=-5e-4,e.normalBias=.02,e.radius=1.5,e.camera.updateProjectionMatrix(),e.needsUpdate=!0,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.shadowFocus=new U(0,0,0),this.fillLight=new Sd("#dcefff",.4),this.fillLight.position.set(-22,16,26),this.fillLight.target.position.set(0,0,0),this.scene.add(this.fillLight),this.scene.add(this.fillLight.target),this.scenery=new Sy(this.terrain,t),this.scene.add(this.scenery.group),this.path=new Cy(this.terrain),this.scene.add(this.path.group),this.keyColors=Nb.map(i=>{const n={t:i.t,sunIntensity:i.sunIntensity,hemiIntensity:i.hemiIntensity,night:i.night};for(const r of Object.keys(ou))n[r]=new ut(i[r]);return n}),this.palette={skyTop:new ut,skyBottom:new ut,fog:new ut,sun:new ut,hemiSky:new ut,hemiGround:new ut,waterShallow:new ut,waterDeep:new ut,sunIntensity:1,hemiIntensity:1,night:0},this.weather=_f.clear,this.weatherBlend=0,this.lightGain={...Iy},this.spriteLight=new ut("#ffffff"),this.rain=S(this,vn,Nf).call(this),this.scene.add(this.rain.points),this.tmpDir=new U,this.discDir=new U,this.time=0}setWeather(t){this.weather=t}update(t,e,i,n){this.time+=t;const r=S(this,vn,Uf).call(this,e),a=this.weather.id==="drizzle"?.55:this.weather.id==="cloudy"?.32:0;if(this.weatherBlend+=(a-this.weatherBlend)*Math.min(1,t*.8),this.weatherBlend>.001){const h=this.weatherBlend;r.skyTop.lerp(Er,h*.55),r.skyBottom.lerp(Er,h*.45),r.fog.lerp(Er,h*.4),r.sun.lerp(Er,h*.3),r.sunIntensity*=1-h*.35,r.hemiIntensity*=1-h*.15}this.hemi.color.copy(r.hemiSky),this.hemi.groundColor.copy(r.hemiGround);const o=this.lightGain;this.hemi.intensity=r.hemiIntensity*o.hemi,this.sunLight.color.copy(r.sun),this.sunLight.intensity=r.sunIntensity*o.sun,this.ambient.color.copy(r.hemiSky),this.ambient.intensity=(.46-r.night*.1)*o.ambient,this.fillLight.intensity=(.42-r.night*.16)*o.fill,this.fillLight.color.copy(r.sun).lerp(r.skyBottom,.3);const l=1-r.night*.46;this.spriteLight.copy(r.sun).lerp(r.hemiSky,.42).lerp(Er,this.weatherBlend*.32).multiplyScalar(l);const c=S(this,vn,Ff).call(this,e,this.tmpDir);this.discDir.copy(c),n&&this.shadowFocus.set(n.x,0,n.z),this.sunLight.position.copy(c).multiplyScalar(70).add(this.shadowFocus),this.sunLight.target.position.copy(this.shadowFocus),this.sunLight.target.updateMatrixWorld(),this.sky.setPalette({skyTop:r.skyTop,skyBottom:r.skyBottom,sun:r.sun,night:r.night,discDir:this.discDir,elapsed:this.time}),i&&this.sky.update(i.position),this.scene.fog.color.copy(r.fog),this.scene.fog.density=.0055+this.weatherBlend*.004,this.water.update(this.time,r),this.scenery.update(t,i,r.night),S(this,vn,Of).call(this,t,n)}get halfExtent(){return ge}get waterLevel(){return xh}dispose(){this.scene.traverse(t=>{(t.isMesh||t.isPoints||t.isSprite)&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose()))})}}vn=new WeakSet,Nf=function(){const e=new kb(771),i=new Float32Array(420*3),n=new Float32Array(420);for(let l=0;l<420;l++)i[l*3]=e.range(-14,14),i[l*3+1]=e.range(0,16),i[l*3+2]=e.range(-14,14),n[l]=e.range(7,12);const r=new Le;r.setAttribute("position",new gi(i,3));const a=new hh({color:"#d7ecf7",size:.09,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),o=new Qu(r,a);return o.name="Rain",o.visible=!1,o.frustumCulled=!1,{points:o,speed:n,count:420}},Uf=function(t){const e=(t%Ue+Ue)%Ue,i=this.keyColors;let n=0;for(;n<i.length-2&&e>=i[n+1].t;)n++;const r=i[n],a=i[n+1],o=(e-r.t)/Math.max(1e-6,a.t-r.t),l=o*o*(3-2*o),c=this.palette;for(const[d,f]of Object.entries(ou))c[f].copy(r[d]).lerp(a[d],l);c.sunIntensity=r.sunIntensity+(a.sunIntensity-r.sunIntensity)*l,c.hemiIntensity=r.hemiIntensity+(a.hemiIntensity-r.hemiIntensity)*l,c.night=r.night+(a.night-r.night)*l,c.waterShallow.copy(Py).lerp(c.skyBottom,.22),c.waterDeep.copy(Ly).lerp(c.skyTop,.18);const h=1-c.night*.28;return c.waterShallow.multiplyScalar(h),c.waterDeep.multiplyScalar(h),c},Ff=function(t,e){const i=(t%Ue+Ue)%Ue;if(i>=960)return e.copy(Dy);const n=Math.min(1,Math.max(0,i/960)),r=Math.PI*n;return e.set(Math.cos(r)*.92,Math.sin(r)*.9,-.3).normalize()},Of=function(t,e){const i=this.weather.id==="drizzle"&&this.weatherBlend>.25,n=this.rain.points;if(n.visible=i,!i)return;n.material.opacity=.55*this.weatherBlend;const r=n.geometry.attributes.position.array,a=e?e.x:0,o=e?e.z:0;for(let l=0;l<this.rain.count;l++){const c=l*3+1;r[c]-=this.rain.speed[l]*t,r[c]<0&&(r[c]=14+Math.random()*4,r[l*3]=a+(Math.random()-.5)*26,r[l*3+2]=o+(Math.random()-.5)*26)}n.geometry.attributes.position.needsUpdate=!0,n.position.set(0,0,0)};const Uy=84,lu=60/Uy/2,Fy=140,Oy=1.1;function Tr(s){return 440*Math.pow(2,(s-69)/12)}const Sl={morning:{melody:[76,79,84,79,72,76,81,76,77,81,84,81,79,83,86,79],bass:[48,45,41,43]},day:{melody:[79,83,86,83,81,84,88,84,77,81,86,81,79,83,86,83],bass:[43,40,41,43]},sunset:{melody:[77,81,84,81,74,77,81,77,79,83,86,83,72,76,79,76],bass:[41,38,43,48]},night:{melody:[72,null,76,null,69,null,72,null,65,null,69,null,67,null,74,null],bass:[48,45,41,43]}};var Lt,wc,kf,Bf,zf,Ws,Ec,Gf,ln,Ee;class ky{constructor(){Ne(this,Lt);this.ctx=null,this.master=null,this.noteBus=null,this.started=!1,this.muted=!1,this.phase="morning",this.volume=.55,this.step=0,this.nextTime=0,this.timer=null,this.noiseBuf=null}start(){if(this.started){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=1e-4;const i=e.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=22,i.ratio.value=2.4,i.attack.value=.006,i.release.value=.24,this.master.connect(i),i.connect(e.destination),this.noteBus=e.createGain(),this.noteBus.gain.value=1;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=5200,n.Q.value=.4,this.noteBus.connect(n),n.connect(this.master);const r=e.createDelay(.6);r.delayTime.value=.3;const a=e.createGain();a.gain.value=.24;const o=e.createGain();o.gain.value=.16,n.connect(r),r.connect(a),a.connect(r),r.connect(o),o.connect(this.master),this.started=!0,this.step=0,this.nextTime=e.currentTime+.12,S(this,Lt,Ec).call(this,this.muted?1e-4:this.volume),S(this,Lt,wc).call(this),e.state!=="running"&&e.resume().catch(()=>{})}catch{this.started=!1}}get sfxReady(){return!!(this.started&&this.ctx&&this.ctx.state==="running"&&!this.muted)}sfxHit(t){if(!this.sfxReady)return;const e=this.ctx.currentTime+.005;t==="rock"?(S(this,Lt,ln).call(this,e,.13,{type:"highpass",freq:2400,q:.7,level:.22}),S(this,Lt,Ee).call(this,e,220,.1,.15,"triangle",140)):t==="flower"?S(this,Lt,ln).call(this,e,.16,{type:"bandpass",freq:3200,q:1.1,level:.11}):(S(this,Lt,ln).call(this,e,.13,{type:"lowpass",freq:900,q:.8,level:.2}),S(this,Lt,Ee).call(this,e,150,.13,.13,"sine",108))}sfxPickup(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,Ee).call(this,t,880,.09,.09,"sine"),S(this,Lt,Ee).call(this,t+.07,1320,.12,.075,"sine")}sfxRare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[1046,1318,1568,2093].forEach((e,i)=>S(this,Lt,Ee).call(this,t+i*.075,e,.34,.09,"sine"))}sfxEat(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,Ee).call(this,t,430,.16,.14,"sine",250),S(this,Lt,ln).call(this,t+.03,.1,{type:"lowpass",freq:1400,level:.08})}sfxDeny(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,Ee).call(this,t,190,.16,.12,"triangle",130),S(this,Lt,Ee).call(this,t+.1,160,.16,.09,"triangle",110)}sfxFanfare(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.02;[72,76,79,84,88].forEach((e,i)=>S(this,Lt,Ws).call(this,Tr(e),t+i*.11,1.8,.16)),S(this,Lt,ln).call(this,t+.02,.5,{type:"highpass",freq:4200,level:.05})}sfxBuild(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,ln).call(this,t,.12,{type:"lowpass",freq:700,level:.18}),S(this,Lt,Ee).call(this,t,170,.12,.12,"sine",120),S(this,Lt,Ee).call(this,t+.12,1280,.1,.05,"triangle")}sfxUi(){this.sfxReady&&S(this,Lt,Ee).call(this,this.ctx.currentTime+.005,988,.07,.06,"sine")}sfxCast(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,ln).call(this,t,.24,{type:"bandpass",freq:900,q:.7,level:.07}),S(this,Lt,Ee).call(this,t,620,.22,.035,"triangle",250)}sfxSplash(t=1){if(!this.sfxReady)return;const e=this.ctx.currentTime+.008,i=Math.max(.15,Math.min(1,Number(t)||1));S(this,Lt,ln).call(this,e,.26,{type:"highpass",freq:1500,q:.8,level:.17*i}),S(this,Lt,Ee).call(this,e,320,.16,.09*i,"sine",170)}sfxBite(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,Ee).call(this,t,1046,.09,.11,"sine"),S(this,Lt,Ee).call(this,t+.085,1397,.12,.1,"sine")}sfxReel(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;[784,988,1319].forEach((e,i)=>S(this,Lt,Ee).call(this,t+i*.06,e,.16,.08,"sine"))}sfxMeow(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,Ee).call(this,t,560,.34,.075,"triangle",760),S(this,Lt,Ee).call(this,t+.18,720,.26,.05,"sine",520)}sfxCoin(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.008;S(this,Lt,Ee).call(this,t,1319,.08,.08,"sine"),S(this,Lt,Ee).call(this,t+.06,1760,.12,.07,"sine")}sfxCook(){if(!this.sfxReady)return;const t=this.ctx.currentTime+.01;S(this,Lt,ln).call(this,t,.42,{type:"lowpass",freq:1600,q:.6,level:.09}),S(this,Lt,Ws).call(this,Tr(84),t+.28,1.2,.1),S(this,Lt,Ws).call(this,Tr(88),t+.4,1.1,.08)}setMuted(t){this.muted=!!t,this.started&&S(this,Lt,Ec).call(this,this.muted?1e-4:this.volume)}setPhase(t){const e=Sl[t]?t:"morning";e!==this.phase&&(this.phase=e,this.step=Math.ceil(this.step/16)*16)}suspend(){S(this,Lt,kf).call(this),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){if(!this.started){this.start();return}if(!this.ctx)return;const t=()=>{this.ctx.state==="running"&&(this.nextTime=Math.max(this.nextTime,this.ctx.currentTime+.05),S(this,Lt,wc).call(this))};this.ctx.state==="running"?t():this.ctx.resume().then(t).catch(()=>{})}}Lt=new WeakSet,wc=function(){this.timer||(this.timer=setInterval(()=>S(this,Lt,Bf).call(this),Fy))},kf=function(){this.timer&&(clearInterval(this.timer),this.timer=null)},Bf=function(){const t=this.ctx;if(!(!t||t.state!=="running"))for(this.nextTime<t.currentTime-lu*2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+Oy;)S(this,Lt,zf).call(this,this.step,this.nextTime),this.step+=1,this.nextTime+=lu},zf=function(t,e){const i=Sl[this.phase]||Sl.morning;if(this.muted)return;const n=(t%i.melody.length+i.melody.length)%i.melody.length,r=i.melody[n];if(r!=null){const a=n%4===0?1:.78;S(this,Lt,Ws).call(this,Tr(r),e,1.7,.12*a)}if(n%4===0&&i.bass){const a=i.bass[n/4%i.bass.length];a!=null&&S(this,Lt,Ws).call(this,Tr(a),e,2.4,.07,!0)}},Ws=function(t,e,i,n,r=!1){const a=this.ctx;if(!a)return;const o=a.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.008),o.gain.exponentialRampToValueAtTime(n*.3,e+.26),o.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(this.noteBus);const l=r?[[1,1,"triangle"],[2,.18,"sine"]]:[[1,1,"sine"],[2,.3,"sine"],[3,.1,"triangle"]];for(const[c,h,d]of l){const f=a.createOscillator();f.type=d,f.frequency.value=t*c;const u=a.createGain();u.gain.value=h,c>1&&(u.gain.setValueAtTime(h,e),u.gain.exponentialRampToValueAtTime(1e-4,e+.5)),f.connect(u),u.connect(o),f.start(e),f.stop(e+i+.08)}},Ec=function(t){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t,e,.35)},Gf=function(){if(this.noiseBuf||!this.ctx)return this.noiseBuf;const t=this.ctx,e=Math.floor(t.sampleRate*.4),i=t.createBuffer(1,e,t.sampleRate),n=i.getChannelData(0);for(let r=0;r<e;r++)n[r]=(Math.random()*2-1)*(1-r/e);return this.noiseBuf=i,i},ln=function(t,e,{type:i="bandpass",freq:n=1200,q:r=1,level:a=.2}={}){const o=this.ctx,l=S(this,Lt,Gf).call(this);if(!l)return;const c=o.createBufferSource();c.buffer=l;const h=o.createBiquadFilter();h.type=i,h.frequency.value=n,h.Q.value=r;const d=o.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(Math.max(.001,a),t+.006),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(this.noteBus),c.start(t),c.stop(t+e+.03)},Ee=function(t,e,i,n,r="sine",a=null){const o=this.ctx,l=o.createOscillator();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+i*.9);const c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(.001,n),t+.012),c.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(c),c.connect(this.noteBus),l.start(t),l.stop(t+i+.04)};const cu=9.5,Ua=14,wl=Math.PI*2;function El(s){let t=s%wl;return t<=-Math.PI?t+=wl:t>Math.PI&&(t-=wl),t}var Hi,Hf,Vf,Wf,$f,Xf;class By{constructor(t,e,i){Ne(this,Hi);this.terrain=e,this.position=new U(t.x,e.groundY(t.x,t.z),t.z),this.yaw=Math.PI,this.targetYaw=this.yaw,this.speedScale=1,this.moving=0,this.idleT=0,this.walkT=0,this.flip=!1,this.facing="back",this.emoteT=0,this.frameName="idle",this.colliders=[],this.group=new We,this.group.name="Player",this.atlas=i.get("protagonist"),this.billboard=new Xr(this.atlas,"idle",{height:Pa.spriteHeight}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.shadow=$r(.4,.34),this.group.position.copy(this.position),this.dust=S(this,Hi,Hf).call(this),this.sprites=[this.billboard.material]}wave(){this.emoteT=1.4}update(t,e,i,n){const r=Math.min(1,Math.hypot(e.x,e.z)),a=i||this.terrain;if(this.moving+=(r-this.moving)*Math.min(1,t*10),this.idleT+=t,this.emoteT>0&&(this.emoteT=Math.max(0,this.emoteT-t)),r>.02){const l=Pa.speed*r*(this.speedScale||1),c=e.x/(r||1)*l*t,h=e.z/(r||1)*l*t,d=this.canStand(a,this.position.x+c,this.position.z);d&&(this.position.x+=c);const f=this.canStand(a,this.position.x,this.position.z+h);f&&(this.position.z+=h),!d&&!f&&this.canStand(a,this.position.x+c*.5,this.position.z+h*.5)&&(this.position.x+=c*.5,this.position.z+=h*.5),this.targetYaw=Math.atan2(e.x,e.z),this.walkT+=t;const u=Math.floor(this.walkT*cu*1.5);u!==this.lastStep&&(this.lastStep=u,S(this,Hi,Vf).call(this,this.position.x,this.position.y,this.position.z,{x:e.x/(r||1),z:e.z/(r||1)}))}this.position.y+=(a.groundY(this.position.x,this.position.z)-this.position.y)*Math.min(1,t*14);const o=El(this.targetYaw-this.yaw);this.yaw=El(this.yaw+o*Math.min(1,t*Pa.turnLerp)),S(this,Hi,$f).call(this,r),S(this,Hi,Xf).call(this,n),S(this,Hi,Wf).call(this,t)}canStand(t,e,i){if(!t.isWalkable(e,i))return!1;for(let n=0;n<this.colliders.length;n++){const r=this.colliders[n],a=e-r.x,o=i-r.z,l=r.r+Pa.radius;if(a*a+o*o<l*l)return!1}return!0}teleport(t,e,i){const n=i||this.terrain;this.position.set(t,n.groundY(t,e),e),this.group.position.copy(this.position),this.shadow.position.set(t,this.position.y+.02,e)}setYaw(t){this.yaw=El(t),this.targetYaw=this.yaw}}Hi=new WeakSet,Hf=function(){const t=new Zr(1,10);t.rotateX(-Math.PI/2);const e=new bi({color:"#fff8e6",transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}),i=new c0(t,e,Ua);i.name="PlayerDust",i.frustumCulled=!1,i.renderOrder=3,this.dustParts=Array.from({length:Ua},()=>({x:0,y:-99,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1})),this.dustCursor=0;const n=new ne().makeScale(0,0,0);for(let r=0;r<Ua;r++)i.setMatrixAt(r,n);return i.instanceMatrix.needsUpdate=!0,i},Vf=function(t,e,i,n){const r=this.dustParts[this.dustCursor];this.dustCursor=(this.dustCursor+1)%Ua,r.x=t+(Math.random()-.5)*.16,r.y=e+.03,r.z=i+(Math.random()-.5)*.16,r.vx=-n.x*.5+(Math.random()-.5)*.35,r.vz=-n.z*.5+(Math.random()-.5)*.35,r.vy=.2+Math.random()*.16,r.max=.4+Math.random()*.2,r.life=r.max,r.size=.06+Math.random()*.05},Wf=function(t){const e=new ne,i=new U,n=new _s,r=new U;for(let a=0;a<this.dustParts.length;a++){const o=this.dustParts[a];if(o.life<=0){e.makeScale(0,0,0),this.dust.setMatrixAt(a,e);continue}o.life=Math.max(0,o.life-t);const l=1-o.life/o.max;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.vy-=.35*t,o.vx*=1-t*2.2,o.vz*=1-t*2.2;const c=o.size*(.55+l*1.15)*Math.min(1,(1-l)*1.9);i.set(o.x,o.y,o.z),r.set(c,c,c),e.compose(i,n,r),this.dust.setMatrixAt(a,e)}this.dust.instanceMatrix.needsUpdate=!0},$f=function(t){if(this.emoteT>0){this.frameName=this.emoteT>.85?"wave":"idle",this.billboard.setFrame(this.frameName,!1);return}if(t>.06){const e=Math.floor(this.walkT*cu)%4,i=Math.sin(this.yaw),n=Math.cos(this.yaw);let r,a=!1;if(Math.abs(i)>Math.abs(n)*1.02)r=`side${e+1}`,a=i>0,this.facing=a?"right":"left";else{const o=n<0;r=`${o?"back":"front"}${e+1}`,this.facing=o?"back":"front"}this.frameName=r,this.flip=a,this.billboard.setFrame(r,a)}else this.frameName!=="idle"&&(this.frameName="idle",this.flip=!1,this.facing="front",this.billboard.setFrame("idle",!1))},Xf=function(t){this.group.position.set(this.position.x,this.position.y,this.position.z),t&&this.billboard.faceCamera(t),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z)};const hu=7,zy=.85,Gy=3.1,du=1.45;var Gi,qf,Yf,Kf,Za;class Hy{constructor(t,e,i){Ne(this,Gi);this.kind="cat",this.id=t.id,this.name=t.name,this.terrain=e,this.home=new Rt(t.x,t.z),this.position=new U(t.x,e.groundY(t.x,t.z),t.z),this.height=t.height||.9,this.atlas=i.get(t.set||t.id),this.group=new We,this.group.name=`Cat_${t.id}`,this.group.position.copy(this.position),this.billboard=new Xr(this.atlas,"sit",{height:this.height}),this.group.add(this.billboard.mesh),this.body=this.billboard.mesh,this.body.userData.actor=this,this.group.userData.actor=this,this.shadow=$r(.24,.3),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=Cf(.26),this.heart.position.set(0,this.height*1.1,0),this.group.add(this.heart),this.state="idle",this.stateT=1+Math.random()*2,this.target=null,this.walkT=Math.random()*2,this.hop=0,this.heartT=0,this.pets=0,this.follow=!1,this.followGrace=0,this.cd={pet:0,snack:0},this.yaw=Math.random()*Math.PI*2,this.frameName="sit",this.restPose="sit",this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}pet(){this.hop=1,this.heartT=1.4,this.pets+=1,this.state="happy",this.stateT=1.2,this.billboard.setFrame("happy"),this.frameName="happy"}feast(){this.pet(),this.hop=1.25,this.heartT=1.8}setFollow(t){this.follow=!!t,this.followGrace=.4,this.follow||(this.target=null)}update(t,e,i=null,n=!0){if(this.cd.pet=Math.max(0,this.cd.pet-t),this.cd.snack=Math.max(0,this.cd.snack-t),this.stateT-=t,this.follow&&i)n&&S(this,Gi,Yf).call(this,t,i);else if(this.state==="walk"&&this.target){const l=this.target.x-this.position.x,c=this.target.y-this.position.z,h=Math.hypot(l,c);if(h<.12)this.target=null,S(this,Gi,Za).call(this);else{const d=l/h,f=c/h,u=Math.min(h,zy*t),v=this.position.x+d*u,x=this.position.z+f*u;this.terrain.isWalkable(v,x)?(this.position.x=v,this.position.z=x):(this.target=null,S(this,Gi,Za).call(this)),this.yaw=Math.atan2(d,f),this.walkT+=t;const p=Math.floor(this.walkT*hu)%4,m=Math.abs(d),M=Math.abs(f);let C;m>M*1.05?C=`${d<0?"left":"right"}${p+1}`:C=`${f>0?"front":"back"}${p+1}`,C!==this.frameName&&(this.frameName=C,this.billboard.setFrame(C))}}else!this.follow&&this.stateT<=0&&n&&(Math.random()<.62?S(this,Gi,Kf).call(this):S(this,Gi,Za).call(this));this.state==="happy"&&this.stateT<=0&&(this.state="rest",this.stateT=1.8,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);const r=this.terrain.groundY(this.position.x,this.position.z);this.position.y+=(r-this.position.y)*Math.min(1,t*12);let a=0;this.hop>0&&(this.hop=Math.max(0,this.hop-t*1.5),a=Math.sin((1-this.hop)*Math.PI)*.22),this.group.position.set(this.position.x,this.position.y+a,this.position.z),e&&this.billboard.faceCamera(e),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-a*.8;if(this.shadow.scale.set(o,1,o),this.heartT>0){this.heartT=Math.max(0,this.heartT-t);const l=1-this.heartT/1.4;this.heart.visible=!0,this.heart.position.set(0,this.height*1.05+l*.55,0),this.heart.material.opacity=Math.min(1,this.heartT*1.8);const c=this.height*.3+l*this.height*.18;this.heart.scale.set(c,c,1)}else this.heart.visible&&(this.heart.visible=!1)}}Gi=new WeakSet,qf=function(t,e){const i=Math.floor(this.walkT*hu)%4,n=Math.abs(t),r=Math.abs(e),a=n>r*1.05?`${t<0?"left":"right"}${i+1}`:`${e>0?"front":"back"}${i+1}`;a!==this.frameName&&(this.frameName=a,this.billboard.setFrame(a))},Yf=function(t,e){const i=e.x-this.position.x,n=e.z-this.position.z,r=Math.hypot(i,n);if(r<du+.35){this.state!=="rest"&&(this.state="rest",this.stateT=.6,this.billboard.setFrame(this.restPose),this.frameName=this.restPose);return}const a=i/r,o=n/r,l=Math.min(r-du,Gy*t),c=this.position.x+a*l,h=this.position.z+o*l;this.terrain.isWalkable(c,h)?(this.position.x=c,this.position.z=h,this.state="walk",this.yaw=Math.atan2(a,o),this.walkT+=t,S(this,Gi,qf).call(this,a,o)):r>4.5&&this.terrain.isWalkable(e.x,e.z)&&(this.position.x=e.x-a*1.4,this.position.z=e.z-o*1.4)},Kf=function(){for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,i=1.2+Math.random()*3.4,n=this.home.x+Math.cos(e)*i,r=this.home.y+Math.sin(e)*i;if(this.terrain.isWalkable(n,r)){this.target=new Rt(n,r),this.state="walk";return}}this.state="idle",this.stateT=1.5},Za=function(){const t=["sit","loaf","groom","sit","loaf"];this.restPose=t[Math.floor(Math.random()*t.length)],this.state="rest",this.stateT=2.6+Math.random()*3.4,this.billboard.setFrame(this.restPose),this.frameName=this.restPose};const Vy=["idle1","idle2","idle3","idle4"],Wy=["smile1","smile2","smile3","smile4"],$y=["joy1","joy2","joy3","joy4"];class Xy{constructor(t,e,i){this.kind="ditto",this.id=t.id,this.name=t.name,this.flavor=t.flavor||"",this.variant=t.variant||"basic",this.isBasic=this.variant==="basic",this.discovered=!1,this.terrain=e,this.height=t.height||.8,this.position=new U(t.x,e.groundY(t.x,t.z),t.z),this.group=new We,this.group.name=`Ditto_${t.id}`,this.group.position.copy(this.position),this.atlas=i.get(this.isBasic?"ditto_basic":"disguises"),this.billboard=new Xr(this.atlas,this.isBasic?"idle1":this.variant,{height:this.height,exact:!this.isBasic}),this.group.add(this.billboard.mesh),this.mesh=this.billboard.mesh,this.mesh.userData.actor=this,this.group.userData.actor=this,this.hitMesh=this.mesh,this.shadow=$r(this.height*.46,.26),this.shadow.position.set(t.x,this.position.y+.02,t.z),this.heart=Cf(.24),this.heart.position.set(0,this.height*1.05,0),this.group.add(this.heart),this.ring=oy(this.height*.46),this.ring.position.y=.04,this.ring.visible=!1,this.group.add(this.ring),this.t=Math.random()*6.28,this.near=!1,this.reactT=0,this.hop=0,this.joy=0,this.frameIdx=0,this.frameT=0,this.sprites=[this.billboard.material]}distanceTo(t){const e=this.position.x-t.x,i=this.position.z-t.z;return Math.hypot(e,i)}setNear(t){this.near=t}markDiscovered(){this.discovered=!0,this.joy=3.2,this.hop=1,this.reactT=1}interact(){this.reactT=1.4,this.hop=1}update(t,e,i){if(this.t+=t,this.joy>0&&(this.joy=Math.max(0,this.joy-t)),this.reactT>0&&(this.reactT=Math.max(0,this.reactT-t)),this.frameT+=t,this.isBasic){const h=this.joy>0?$y:this.near||this.reactT>0?Wy:Vy,d=this.joy>0?7:3.2;this.frameT>1/d&&(this.frameT=0,this.frameIdx=(this.frameIdx+1)%4);const f=h[this.frameIdx];this.billboard.frame!==this.atlas.frames.get(f)&&this.billboard.setFrame(f)}else this.frameT>2.4&&Math.random()<.5&&(this.frameT=0,this.billboard.setFrame(this.variant));const n=1+Math.sin(this.t*1.7)*(this.isBasic?.035:.018);this.hop>0&&(this.hop=Math.max(0,this.hop-t*2.2));const r=this.hop>0?Math.sin((1-this.hop)*Math.PI)*this.height*.22:0,a=this.reactT>0?Math.sin(this.t*26)*.06*this.reactT:0;this.group.position.set(this.position.x,this.position.y+r,this.position.z),this.billboard.mesh.scale.set(n+a*.3,n-a*.3,1),i&&this.billboard.faceCamera(i),this.shadow.position.set(this.position.x,this.position.y+.02,this.position.z);const o=1-r*.7;this.shadow.scale.set(o,1,o);const l=this.near&&!this.discovered?.34:0,c=this.ring.material;if(c.opacity+=(l-c.opacity)*Math.min(1,t*6),this.ring.visible=c.opacity>.01,this.ring.visible){const h=1+Math.sin(this.t*2.4)*.06;this.ring.scale.set(h,1,h),this.ring.rotation.y+=t*.4}if(this.reactT>0||this.joy>0){const h=this.joy>0?this.joy/3.2:this.reactT/1.4;this.heart.visible=!0;const d=1-Math.min(1,h);this.heart.position.set(0,this.height*(1+d*.7),0),this.heart.material.opacity=Math.min(1,h*2.2);const f=this.height*.3+d*this.height*.14;this.heart.scale.set(f,f,1)}else this.heart.visible&&(this.heart.visible=!1);e&&(this.near=this.distanceTo(e)<3.8)}}function g(s,t={},...e){const i=document.createElement(s);for(const[n,r]of Object.entries(t||{}))r!=null&&(n==="class"?i.className=r:n==="text"?i.textContent=r:n==="style"&&typeof r=="object"?Object.assign(i.style,r):n==="dataset"&&typeof r=="object"?Object.assign(i.dataset,r):n.startsWith("on")&&typeof r=="function"?i.addEventListener(n.slice(2).toLowerCase(),r):i.setAttribute(n,r));for(const n of e.flat(3))n==null||n===!1||i.append(n.nodeType?n:document.createTextNode(String(n)));return i}function qy(s){for(;s.firstChild;)s.removeChild(s.firstChild)}var Ai,Tc,Zf,Jf,Ja;class Yy{constructor(t){Ne(this,Ai);this.zone=g("div",{class:"joystick-zone"}),this.home=g("div",{class:"joystick-home"},g("span",{},"MOVE")),this.base=g("div",{class:"joystick-base"},g("div",{class:"joystick-knob"})),this.knob=this.base.firstChild,this.zone.append(this.home,this.base),t.append(this.zone),this.radius=52,this.deadZone=.14,this.vector={x:0,y:0},this.active=!1,this.enabled=!0,this.pointerId=null,this.origin={x:0,y:0},this.zone.addEventListener("pointerdown",e=>S(this,Ai,Zf).call(this,e)),this.zone.addEventListener("pointermove",e=>S(this,Ai,Jf).call(this,e)),this.zone.addEventListener("pointerup",e=>S(this,Ai,Ja).call(this,e)),this.zone.addEventListener("pointercancel",e=>S(this,Ai,Ja).call(this,e)),this.zone.addEventListener("lostpointercapture",e=>S(this,Ai,Ja).call(this,e)),this.zone.addEventListener("contextmenu",e=>e.preventDefault())}setEnabled(t){this.enabled=t,t||this.reset(),this.zone.style.opacity=t?"1":"0.35"}reset(){const t=this.pointerId;this.pointerId=null,this.active=!1,this.vector.x=0,this.vector.y=0,this.base.classList.remove("active"),this.home.style.opacity="0.85",this.knob.style.transform="translate(0px, 0px)";try{t!==null&&this.zone.hasPointerCapture&&this.zone.hasPointerCapture(t)&&this.zone.releasePointerCapture(t)}catch{}}}Ai=new WeakSet,Tc=function(t){const e=this.zone.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},Zf=function(t){if(!this.enabled||this.pointerId!==null)return;t.preventDefault(),this.pointerId=t.pointerId,this.active=!0;const e=S(this,Ai,Tc).call(this,t);this.origin=e,this.base.style.left=`${e.x}px`,this.base.style.top=`${e.y}px`,this.base.classList.add("active"),this.home.style.opacity="0",this.knob.style.transform="translate(0px, 0px)",this.vector.x=0,this.vector.y=0;try{this.zone.setPointerCapture(t.pointerId)}catch{}},Jf=function(t){if(this.pointerId!==t.pointerId||!this.active)return;t.preventDefault();const e=S(this,Ai,Tc).call(this,t);let i=e.x-this.origin.x,n=e.y-this.origin.y;const r=Math.hypot(i,n);r>this.radius&&(i=i/r*this.radius,n=n/r*this.radius),this.knob.style.transform=`translate(${i.toFixed(1)}px, ${n.toFixed(1)}px)`;let a=i/this.radius,o=n/this.radius;const l=Math.hypot(a,o);if(l<this.deadZone)a=0,o=0;else{const c=(l-this.deadZone)/(1-this.deadZone);a=a/l*c,o=o/l*c}this.vector.x=a,this.vector.y=o},Ja=function(t){this.pointerId!==null&&t.pointerId!==void 0&&t.pointerId!==this.pointerId||this.reset()};class Ky{constructor(t){this.container=g("div",{class:"toasts"}),t.append(this.container)}show(t,e=2600){for(;this.container.children.length>=3;)this.container.firstChild.remove();const i=g("div",{class:"toast"},t);this.container.append(i);const n=window.setTimeout(()=>{i.classList.add("out"),window.setTimeout(()=>i.remove(),380)},e);return i.addEventListener("animationend",()=>{i.classList.contains("out")&&window.clearTimeout(n)}),i}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}const Zy=[{id:"bag",icon:"🎒",label:"가방"},{id:"codex",icon:"📔",label:"도감"},{id:"build",icon:"🏗️",label:"건축"},{id:"farm",icon:"🌱",label:"텃밭"},{id:"rank",icon:"🌿",label:"랭크"}];class Jy{constructor(t,e={}){this.handlers=e,this.container=g("div",{class:"hud-root hidden"}),t.append(this.container),this.phIcon=g("span",{},"🌅"),this.phLabel=g("span",{},"아침"),this.wxLabel=g("span",{},"맑음"),this.dayLabel=g("span",{class:"day"},"Day 1"),this.clockLabel=g("span",{class:"clock"},"00:00"),this.speedTag=g("span",{class:"speed hidden"},"10×"),this.pill=g("div",{class:"pill"},this.phIcon,this.phLabel,g("span",{class:"sep"},"·"),this.wxLabel,g("span",{class:"sep"},"·"),this.dayLabel,g("span",{class:"sep"},"·"),this.clockLabel,this.speedTag),this.staminaFill=g("i"),this.staminaVal=g("span",{class:"val"},"100"),this.stamina=g("div",{class:"stamina",title:"기력 — 채집할 때 줄고, 열매를 먹으면 차요"},g("span",{class:"ico"},"💪"),g("div",{class:"bar"},this.staminaFill),this.staminaVal),this.mailBadge=g("span",{class:"badge hidden"},"0"),this.mailBtn=g("button",{class:"icon-btn mail-btn",type:"button","aria-label":"우체통 열기",onclick:()=>this.handlers.onMail?.()},g("span",{class:"ico"},"📬"),this.mailBadge),this.coinVal=g("span",{class:"n"},"0"),this.coinChip=g("div",{class:"coin-chip",title:"섬 코인 — 자판기에 물건을 팔면 모여요"},g("span",{class:"ico"},"🪙"),this.coinVal),this.questBadge=g("span",{class:"badge hidden"},"0"),this.questBtn=g("button",{class:"icon-btn quest-btn",type:"button","aria-label":"오늘의 의뢰 열기",onclick:()=>this.handlers.onQuest?.()},g("span",{class:"ico"},"📋"),this.questBadge),this.buffChip=g("span",{class:"buff-chip hidden"},"✨"),this.cartChip=g("span",{class:"cart-chip hidden"},"🛒 16칸"),this.left=g("div",{class:"hud-left"},this.pill,g("div",{class:"hud-stats"},this.stamina,this.coinChip,this.mailBtn,this.questBtn,this.cartChip,this.buffChip)),this.welcomeIcon=g("span",{class:"w-ico"},"🎯"),this.welcomeText=g("span",{class:"w-txt"},""),this.welcomeDots=g("span",{class:"w-dots"}),this.welcome=g("button",{class:"welcome-chip hidden",type:"button","aria-label":"첫걸음 미션 열기",onclick:()=>this.handlers.onWelcome?.()},this.welcomeIcon,this.welcomeText,this.welcomeDots),this.left.append(this.welcome),this.lastWelcome="",this.muteBtn=g("button",{class:"icon-btn",type:"button","aria-label":"음소거 토글",onclick:()=>this.handlers.onMute?.()},"🔊"),this.pauseBtn=g("button",{class:"icon-btn",type:"button","aria-label":"일시정지 및 설정",onclick:()=>this.handlers.onPause?.()},"⏸"),this.top=g("div",{class:"hud-top"},this.left,g("div",{class:"hud-controls"},this.muteBtn,this.pauseBtn)),this.actionIcon=g("span",{class:"ico"},"✋"),this.actionText=g("span",{class:"txt"},"둘러보기"),this.actionBtn=g("button",{class:"action-btn",type:"button",disabled:"disabled","aria-label":"상황 액션",onclick:()=>this.handlers.onAction?.()},this.actionIcon,this.actionText),this.quickbar=g("div",{class:"quickbar"}),this.quickBadges={};for(const i of Zy){let n=null;i.id==="bag"?n=g("span",{class:"quick-badge"},"0/8"):i.id==="rank"?n=g("span",{class:"quick-badge ach hidden"},"0"):i.id==="farm"&&(n=g("span",{class:"quick-badge ripe hidden"},"0"));const r=g("button",{class:"quick",type:"button",onclick:()=>this.handlers.onQuick?.(i.id)},g("span",{class:"ico"},i.icon),g("span",{},i.label),n);i.id==="bag"&&(this.quickBadges.bag=n),i.id==="rank"&&(this.quickBadges.ach=n),i.id==="farm"&&(this.quickBadges.ripe=n),n&&r.classList.add(`quick-${i.id}`),this.quickbar.append(r)}this.joystick=new Yy(this.container),this.fishLabel=g("span",{class:"txt"},""),this.fishBar=g("i"),this.fishStrip=g("div",{class:"fish-strip hidden"},g("span",{class:"ico"},"🎣"),this.fishLabel,g("div",{class:"bar"},this.fishBar)),this.bitePop=g("div",{class:"bite-pop"},"!"),this.toastView=new Ky(this.container),this.glOverlay=g("div",{class:"gl-overlay"},g("div",{class:"box"},g("h3",{},"그래픽을 다시 준비하고 있어요"),g("p",{},"잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요."))),this.container.append(this.top,this.actionBtn,this.quickbar,this.fishStrip,this.bitePop,this.glOverlay),this.lastPill="",this.lastStamina=-1,this.lastMail=-1,this.lastCoins=-1,this.lastQuests=-1,this.lastAch=-1,this.lastRipe=-1}show(){this.container.classList.remove("hidden")}hide(){this.container.classList.add("hidden")}setTime({icon:t,label:e,weatherIcon:i,weatherLabel:n,day:r,clock:a,speed:o}){const l=`${t}${e}${i}${n}${r}${a}${o}`;l!==this.lastPill&&(this.lastPill=l,this.phIcon.textContent=t,this.phLabel.textContent=e,this.wxLabel.textContent=`${i} ${n}`,this.dayLabel.textContent=`Day ${r}`,this.clockLabel.textContent=a,o&&o!==1?(this.speedTag.textContent=`${o}×`,this.speedTag.classList.remove("hidden")):this.speedTag.classList.add("hidden"))}setStamina(t,e=100){const i=Math.max(0,Math.min(e,Math.round(t)));i!==this.lastStamina&&(this.lastStamina=i,this.staminaFill.style.width=`${i/e*100}%`,this.staminaVal.textContent=String(i),this.stamina.classList.toggle("low",i<25),this.stamina.classList.toggle("mid",i>=25&&i<55))}setMail(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastMail&&(this.lastMail=e,this.mailBadge.textContent=e>9?"9+":String(e),this.mailBadge.classList.toggle("hidden",e<=0),this.mailBtn.classList.toggle("has-mail",e>0))}setBag(t,e){const i=this.quickBadges.bag;i&&(i.textContent=`${t}/${e}`,i.classList.toggle("full",t>=e))}setCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastCoins&&(this.lastCoins=e,this.coinVal.textContent=String(e),this.coinChip.classList.toggle("rich",e>=200))}setQuests(t){const e=Math.max(0,Math.floor(Number(t)||0));e!==this.lastQuests&&(this.lastQuests=e,this.questBadge.textContent=e>9?"9+":String(e),this.questBadge.classList.toggle("hidden",e<=0),this.questBtn.classList.toggle("has-mail",e>0))}setAchievements(t){const e=Math.max(0,Math.floor(Number(t)||0));if(e===this.lastAch)return;this.lastAch=e;const i=this.quickBadges.ach;i&&(i.textContent=e>9?"9+":String(e),i.classList.toggle("hidden",e<=0))}setRipePlots(t){const e=Math.max(0,Math.floor(Number(t)||0));if(e===this.lastRipe)return;this.lastRipe=e;const i=this.quickBadges.ripe;i&&(i.textContent=e>9?"9+":String(e),i.classList.toggle("hidden",e<=0))}setCart(t,e){const i=Math.floor(Number(t)||0)>0;if(this.cartChip&&(this.cartChip.classList.toggle("hidden",!i),i)){const n=Math.max(0,Math.floor(Number(e)||0));this.cartChip.textContent=`🛒 ${n}칸`,this.cartChip.title=`리어카 — 가방이 ${n}칸으로 늘었어요`}}setWelcome(t,e){const i=Array.isArray(e)?e:[];if(!this.welcome)return;if(!i.length||t>=i.length){this.lastWelcome!=="done"&&(this.lastWelcome="done",this.welcome.classList.add("hidden"));return}const n=i[t],r=`${t}/${i.length}`;if(this.welcome.classList.remove("hidden"),r!==this.lastWelcome){this.lastWelcome=r,this.welcomeIcon.textContent=n.icon||"🎯",this.welcomeText.textContent=`${t+1}/${i.length} ${n.label}`,this.welcome.title=n.hint||"",this.welcomeDots.innerHTML="";for(let a=0;a<i.length;a++)this.welcomeDots.append(g("i",{class:a<t?"on":a===t?"cur":""}))}}setBuff(t){if(!t){this.buffChip.classList.add("hidden");return}this.buffChip.textContent=t,this.buffChip.classList.remove("hidden")}setFishing(t){if(!t){this.fishStrip.classList.add("hidden"),this.fishStrip.classList.remove("urgent");return}this.fishStrip.classList.remove("hidden"),this.fishStrip.classList.toggle("urgent",!!t.urgent),this.fishLabel.textContent!==t.label&&(this.fishLabel.textContent=t.label);const e=t.ratio===void 0?1:Math.max(0,Math.min(1,t.ratio));this.fishBar.style.width=`${e*100}%`}bite(){this.bitePop.classList.remove("on"),this.bitePop.offsetWidth,this.bitePop.classList.add("on"),this.bitePop.__timer&&clearTimeout(this.bitePop.__timer),this.bitePop.__timer=setTimeout(()=>this.bitePop.classList.remove("on"),1600)}setAction({active:t,icon:e="✋",label:i="둘러보기"}){t===this.actionBtn.__active&&i===this.actionBtn.__label||(this.actionBtn.__active=t,this.actionBtn.__label=i,this.actionIcon.textContent=e,this.actionText.textContent=i,t?(this.actionBtn.removeAttribute("disabled"),this.actionBtn.classList.add("enabled")):(this.actionBtn.setAttribute("disabled","disabled"),this.actionBtn.classList.remove("enabled")))}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊",this.muteBtn.setAttribute("aria-pressed",t?"true":"false")}toast(t,e=2600){return this.toastView.show(t,e)}setContextLost(t){this.glOverlay.classList.toggle("on",!!t)}}var Kr,Ac;class Qy{constructor(t,{hasSave:e=!1,onContinue:i,onNew:n}={}){Ne(this,Kr);this.onContinue=i,this.onNew=n,this.hasSave=e,this.busy=!1,this.progressBar=g("i"),this.progressWrap=g("div",{class:"title-progress"},this.progressBar),this.continueBtn=e?g("button",{class:"btn primary",type:"button",disabled:"disabled"},"이어하기"):null,this.newBtn=g("button",{class:`btn ${e?"ghost":"primary"}`,type:"button",disabled:"disabled"},"새로 시작"),this.continueBtn&&this.continueBtn.addEventListener("click",()=>S(this,Kr,Ac).call(this,"continue")),this.newBtn.addEventListener("click",()=>S(this,Kr,Ac).call(this,"new")),this.hint=g("div",{class:"title-hint"},e?"저장된 섬이 있어요 — 이어서 걸어볼까요?":"저장된 섬이 없어요 — 새 섬을 열어 볼까요?"),this.el=g("div",{class:"title-screen"},g("div",{class:"title-badge"},"PHASE 4 · HD-2D 도트"),g("div",{class:"title-panel"},g("p",{class:"title-eyebrow"},"보경이를 위한 작은 섬"),g("h1",{class:"title-heading"},"어설픈 메타몽 섬"),g("p",{class:"title-sub"},"눈만은 못 숨기는 메타몽들과 고양이들이 모여든 비밀 낙원. 오늘도 고생 많았어요 — 여기선 아무것도 안 급해도 돼요."),this.progressWrap,g("div",{class:"title-actions"},this.continueBtn,this.newBtn),this.hint),g("div",{class:"title-version"},"GDD v1.7 · Phase 4 · 72×72 섬")),t.append(this.el)}setProgress(t){const e=Math.max(.06,Math.min(1,t));this.progressBar.style.width=`${Math.round(e*100)}%`,e>=1&&this.setReady(!0)}setReady(t){this.busy||(this.continueBtn&&(t?this.continueBtn.removeAttribute("disabled"):this.continueBtn.setAttribute("disabled","disabled")),t?this.newBtn.removeAttribute("disabled"):this.newBtn.setAttribute("disabled","disabled"),this.progressWrap.style.opacity=t?"0":"1")}hide(){this.el.classList.add("hidden")}show(){this.el.classList.remove("hidden"),this.busy=!1,this.setReady(!1)}destroy(){this.el.remove()}}Kr=new WeakSet,Ac=function(t){if(this.busy)return;this.busy=!0,this.hint.textContent=t==="continue"?"저장된 섬으로 돌아가는 중…":"새로운 섬을 여는 중…";const e=t==="continue"?this.onContinue:this.onNew;e&&e(t)};class jy{constructor(t){this.card=g("div",{class:"modal-card"}),this.backdrop=g("div",{class:"modal"},this.card),t.append(this.backdrop),this.isOpen=!1,this.onClose=null,this.backdrop.addEventListener("pointerdown",e=>{e.target===this.backdrop&&this.close()})}open(t){const{title:e,subtitle:i="",body:n="",actions:r=[],onClose:a=null,closable:o=!0}=t;this.onClose=a,qy(this.card),this.card.append(g("div",{class:"modal-head"},g("div",{},g("h2",{class:"modal-title"},e),i?g("p",{class:"modal-sub"},i):null),o?g("button",{class:"modal-close",type:"button","aria-label":"닫기",onclick:()=>this.close()},"✕"):null));const l=g("div",{class:"modal-body"});if(typeof n=="string"?l.append(document.createTextNode(n)):n instanceof Node?l.append(n):Array.isArray(n)&&n.forEach(c=>c&&l.append(c)),this.card.append(l),r.length){const c=g("div",{class:"modal-actions"});for(const h of r){const d=g("button",{class:`btn ${h.kind||""}`,type:"button"},h.label);h.disabled&&(d.disabled=!0,d.setAttribute("disabled","disabled")),d.addEventListener("click",()=>{d.disabled||h.onClick&&h.onClick()}),c.append(d)}this.card.append(c)}this.backdrop.classList.add("open"),this.isOpen=!0,this.card.scrollTop=0}close(){if(!this.isOpen)return;this.backdrop.classList.remove("open"),this.isOpen=!1;const t=this.onClose;this.onClose=null,t&&t()}}class tM{constructor(t,e){this.container=g("div",{class:"landmark-layer"}),t.append(this.container),this.items=e.map(i=>{const n=g("span",{class:"lm-day"},"복구 전"),r=g("div",{class:"landmark-pill"},g("span",{class:"lm-ico"},i.icon),g("span",{class:"lm-name"},i.name),n);return this.container.append(r),{site:i,el:r,dayEl:n,x:i.x,y:i.y+i.markerY+.55,z:i.z,opacity:-1,done:!1}}),this.v=new U}setDone(t,e=!0){const i=this.items.find(n=>n.site.id===t);i&&(i.done=!!e,i.el.classList.toggle("done",!!e),i.dayEl.textContent=e?"✨ 복구 완료":"복구 전")}setVisible(t){this.container.style.opacity=t?"1":"0"}update(t,e){if(!e){this.container.style.opacity!=="0"&&(this.container.style.opacity="0");return}this.container.style.opacity="1";const i=window.innerWidth,n=window.innerHeight,r=t.position;for(const a of this.items){this.v.set(a.x,a.y,a.z);const o=r.distanceTo(this.v);this.v.project(t);const l=this.v.z>1,c=(this.v.x*.5+.5)*i,h=(-this.v.y*.5+.5)*n,d=h<92||h>n-96||c<24||c>i-24,f=l||o>34||d?0:Math.min(1,Math.max(0,(34-o)/12))*.95;a.opacity+=(f-a.opacity)*.18,Math.abs(f-a.opacity)<.02&&(a.opacity=f);const u=a.el;if(a.opacity<=.02){u.style.display!=="none"&&(u.style.display="none");continue}u.style.display==="none"&&(u.style.display="flex"),u.style.opacity=a.opacity.toFixed(2),u.style.transform=`translate(-50%, -50%) translate(${c.toFixed(1)}px, ${h.toFixed(1)}px)`}}}const mo=[{id:"notice_life",icon:"🌿",from:"섬 지기",title:"섬에 생활의 손길이 생겼어요",tag:"공지",body:["보경 님, 섬에 작은 변화가 생겼어요.","이제 나무를 톡톡 두드리면 통나무가, 바위를 두드리면 돌이 나와요. 꽃덤불은 한 번만 스치면 꽃잎이 손에 들어와요.","가방은 여덟 칸이에요. 한 칸에 스무 개까지 담기고, 넘치면 그 자리에 잠깐 내려놓게 돼요.","공방에 가면 창고를 열 수 있어요. 재료를 모아 두었다가 부두·공방·자판기·등대를 하나씩 복구해 보세요.","나무 밑에는 가끔 반짝이는 열매가 떨어져요. 먹으면 기력이 차올라요."],gift:null},{id:"welcome_bokyung",icon:"💌",from:"울림이 대신 쓴 편지",title:"보경 님께 — 섬에 오신 걸 환영해요",tag:"웰컴",body:["보경 님, 이 섬은 보경 님이 쉬어 가라고 만든 아주 작은 곳이에요. 아무것도 안 해도 괜찮아요.","그래도 손이 심심하면 나무를 두드려 보세요. 통나무가 나오고, 벚꽃나무는 꽃잎도 조금 흘려요.","동봉한 선물을 받아 두세요. 열매 세 개는 기력을 채우는 데, 별조각 하나는 자판기 복구에 써요.","천천히 걸어 보세요. 솜이와 옹이가 먼저 와서 기다리고 있어요.","— 늘 보경 님 편인 울림이"],gift:{berry:3,star:1}},{id:"guide_farm",icon:"🌱",from:"섬 지기",title:"북서쪽에 텃밭을 열어 두었어요",tag:"가이드",body:["사각으로 펴진 섬의 북서쪽 모서리에 흙을 고르고 밭 아홉 칸을 만들어 두었어요.","자판기 [사기] 탭에서 씨앗을 사서 밭에 심고, 물을 주면 훨씬 빨리 자라요.","다 자란 작물은 [수확] 으로 거둬요. 거둔 것은 가방 여덟 칸이 아니라 텃밭 바구니에 따로 담겨요.","자판기 [팔기] 탭에서 그대로 팔 수 있으니, 심고 기르고 파는 작은 장사를 해 보세요.","동봉한 딸기 씨앗 두 봉지를 받아 두세요. 첫 밭은 그것으로 시작하면 돼요."],gift:{seed_strawberry:2}},{id:"guide_restore",icon:"🔨",from:"섬 지기",title:"복구 가이드 — 네 곳의 약속",tag:"가이드",body:["이제 Day 를 기다리지 않아도 돼요. 재료만 모이면 그날 바로 복구할 수 있어요.","부두 — 통나무 3 · 돌 2. 배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.","공방 — 통나무 4 · 돌 3. 창고와 도구방이 함께 열려요.","메타몽 자판기 — 통나무 4 · 돌 4. 복구하면 밤에 은은하게 빛나요.","등대 — 통나무 6 · 돌 5. 복구하면 밤마다 따뜻한 불이 켜져요.","나무를 두드릴 때마다 통나무가 한 개씩 바로 나오니, 한 바퀴 돌면 다 모여요."],gift:null},{id:"guide_bridge",icon:"🌉",from:"섬 지기",title:"강 건너 개척권 — 다리 놓기",tag:"가이드",body:["섬 가운데로 강이 흐르게 됐어요. 남쪽 생활권과 북쪽 개척권이 갈렸지요.","강 중앙 길목에 말뚝을 박아 두었어요. 통나무 6 · 돌 4를 모아 [다리 놓기] 를 누르면 널빤지 데크가 놓여요.","건너편에는 통나무가 콸콸 나오는 빼곡한 숲, 돌과 별조각이 모인 채석장, 그리고 볍씨를 심는 논이 있어요.","논은 자판기에서 볍씨를 사서 심고 물을 대면 돼요. 거둔 쌀은 자판기에 팔거나 주먹밥을 지어요.","가방이 좁다 싶으면 공방에서 리어카를 만들어 보세요. 여덟 칸이 열여섯 칸이 돼요."],gift:null}],Yt={strawberry:{id:"strawberry",name:"딸기",icon:"🍓",tint:"#ff6f8f",seedId:"seed_strawberry",seedPrice:15,grow:27,yield:[2,3],price:18,desc:"텃밭에서 제일 먼저 익는 빨간 열매. 금방 자라서 손이 자주 간다."},radish:{id:"radish",name:"달달무",icon:"🥬",tint:"#f2f7e8",seedId:"seed_radish",seedPrice:25,grow:42,yield:[1,2],price:38,desc:"땅속에서 달게 여무는 무. 잎까지 싱싱하다."},pumpkin:{id:"pumpkin",name:"황금호박",icon:"🎃",tint:"#ffc95e",seedId:"seed_pumpkin",seedPrice:50,grow:60,yield:[1,2],price:75,desc:"해를 오래 먹어 노랗게 익은 호박. 제일 늦게, 제일 값지게."},rice:{id:"rice",name:"쌀",icon:"🍚",tint:"#f4e7b8",seedId:"seed_rice",seedPrice:20,grow:45,yield:[2,3],price:28,paddyOnly:!0,desc:"물 잠긴 논에서 자라는 벼. 거둬서 쌀로 팔거나 주먹밥을 지어요."}},hs=["strawberry","radish","pumpkin"],Qf=[...hs,"rice"],Rc=["seed_strawberry","seed_radish","seed_pumpkin"],jf=["seed_rice"],Bi={seed_strawberry:{id:"seed_strawberry",crop:"strawberry",name:"딸기 씨앗",icon:"🌱",price:Yt.strawberry.seedPrice,desc:"심으면 27초 뒤 딸기 2~3개. 물을 주면 더 빨라요."},seed_radish:{id:"seed_radish",crop:"radish",name:"달달무 씨앗",icon:"🌱",price:Yt.radish.seedPrice,desc:"심으면 42초 뒤 달달무 1~2개."},seed_pumpkin:{id:"seed_pumpkin",crop:"pumpkin",name:"황금호박 씨앗",icon:"🌱",price:Yt.pumpkin.seedPrice,desc:"심으면 60초 뒤 황금호박 1~2개. 오래 걸리는 만큼 비싸게 팔려요."},seed_rice:{id:"seed_rice",crop:"rice",name:"볍씨",icon:"🌾",price:Yt.rice.seedPrice,desc:"논에 심으면 45초 뒤 쌀 2~3개. 물을 주면 더 빨리 여물어요."}},eM=["빈 밭","씨앗","새싹","자라는 중","수확 가능"],ve={waterStamina:2,waterHalve:.5,maxWater:2,wetSeconds:20,expHarvest:16,expPlant:6,expWater:3,canArea:["1칸","십자 5칸","3×3 9칸"]},Ti={anchovy:{id:"anchovy",name:"은멸치",icon:"🐟",tint:"#cfe3f2",price:9,weight:34,rare:!1,size:[6,15],desc:"부두 끝에서 가장 먼저 인사하는 작은 은빛 물고기."},bream:{id:"bream",name:"통통도미",icon:"🐠",tint:"#f7b48f",price:15,weight:26,rare:!1,size:[18,33],desc:"손에 쥐면 묵직한, 통통해서 더 귀여운 도미."},minnow:{id:"minnow",name:"벚꽃송사리",icon:"🌸",tint:"#ffb8d6",price:24,weight:22,rare:!1,size:[4,10],desc:"벚꽃이 필 때만 물 위로 떠오르는 분홍빛 송사리."},jelly:{id:"jelly",name:"별빛해파리",icon:"🪼",tint:"#c8b8ff",price:45,weight:11,rare:!0,size:[10,21],desc:"밤에 잡으면 손끝이 반짝이는 투명 해파리."},goldcarp:{id:"goldcarp",name:"황금잉어",icon:"✨",tint:"#ffd76a",price:110,weight:5,rare:!0,size:[30,56],desc:"섬 사람들이 한 번도 못 봤다는 전설의 잉어."},star:{id:"star",name:"별조각",icon:"⭐",tint:"#ffd77a",price:0,weight:2,rare:!0,size:[1,1],desc:"물 위로 떠오른 별의 부스러기. 낚싯줄에 걸리기도 해요."}},ds=["anchovy","bream","minnow","jelly","goldcarp","star"],iM={anchovy:18,bream:20,minnow:22,jelly:20,goldcarp:13,star:7},qe={spot:{x:0,z:28.9,range:3},castTo:{x:0,z:33.2},stamina:5,waitMin:1.5,waitMax:3.5,biteWindow:1.4,exp:14,expMiss:4,leash:6.5},Yr={tea:{id:"tea",name:"꽃잎 허브차",icon:"🍵",need:{petal:2,berry:1},fish:{},stamina:45,exp:30,buff:0,desc:"꽃잎을 살짝 우려낸 향긋한 차. 마시면 몸이 포근해져요."},grill:{id:"grill",name:"은멸치 구이",icon:"🍢",need:{log:1},fish:{anchovy:2},stamina:60,exp:30,buff:0,desc:"통나무 불에 노릇하게 구운 은멸치. 소금기만으로 충분해요."},bream:{id:"bream",name:"도미 버터구이",icon:"🐠",need:{berry:1},fish:{bream:1},stamina:90,exp:40,buff:0,desc:"열매 즙을 버터처럼 발라 구운 도미. 겉은 바삭, 속은 촉촉."},golden:{id:"golden",name:"황금 정식",icon:"🍱",need:{petal:2,berry:2},fish:{goldcarp:1},crop:{},stamina:100,exp:60,buff:60,desc:"황금잉어 한 마리를 온전히 담은 섬의 정찬. 60초 동안 채집이 가벼워져요."},smoothie:{id:"smoothie",name:"딸기 스무디",icon:"🥤",need:{berry:1},fish:{},crop:{strawberry:2},stamina:75,exp:35,buff:0,desc:"딸기를 그대로 갈아 넣은 분홍빛 스무디. 마시면 기운이 톡 돌아와요."},pumpkinsoup:{id:"pumpkinsoup",name:"황금 호박 수프",icon:"🍲",need:{},fish:{},crop:{pumpkin:1},stamina:95,exp:55,buff:0,desc:"노란 호박을 뭉근하게 끓인 수프. 한 그릇이면 하루가 든든해요."},riceball:{id:"riceball",name:"고소한 주먹밥",icon:"🍙",need:{berry:1},fish:{},crop:{rice:2},stamina:80,exp:45,buff:0,desc:"갓 지은 쌀에 열매 즙을 살짝 섞어 쥔 주먹밥. 한 손에 쏙 들어요."}},Fa=["tea","grill","bream","golden","smoothie","pumpkinsoup","riceball"],go={seconds:60,stamina:.6,speed:1.18},us={axe:{id:"axe",name:"도끼",icon:"🪓",kind:"tree",max:3,cost:[{},{log:4,stone:3,coin:40},{log:8,stone:6,star:2,coin:120}],stamina:[1,.85,.7],hits:[0,0,1],desc:"나무를 베는 도구. 강화하면 적은 기력으로 더 빨리 벨 수 있어요."},pick:{id:"pick",name:"곡괭이",icon:"⛏️",kind:"rock",max:3,cost:[{},{log:4,stone:4,coin:40},{log:6,stone:8,star:2,coin:120}],stamina:[1,.85,.7],hits:[0,0,1],desc:"바위를 캐는 도구. 강화하면 돌이 더 빨리 나와요."},water:{id:"water",name:"물뿌리개",icon:"🚿",kind:"farm",max:3,cost:[{},{log:3,stone:2,coin:30},{log:6,stone:4,star:1,coin:90}],stamina:[1,1,1],hits:[0,0,0],area:[1,5,9],desc:"한 번에 1칸 → 십자 → 3×3 까지 물을 줘요. 물은 남은 성장 시간을 절반으로 줄여요."}},$s=["axe","pick","water"],Zs={churu:{id:"churu",name:"고양이 츄르",icon:"🐾",price:25,desc:"솜이·옹이가 제일 좋아하는 간식. 호감도 +14"},ade:{id:"ade",name:"반짝 에이드",icon:"🥤",price:30,desc:"마시면 기력 +40. 탄산이 톡 쏴요."},bait:{id:"bait",name:"별빛 미끼",icon:"🪱",price:45,desc:"한 번 낚시할 때 희귀 어종 확률이 올라가요."},seed_strawberry:{kind:"seed",crop:"strawberry",...Bi.seed_strawberry},seed_radish:{kind:"seed",crop:"radish",...Bi.seed_radish},seed_pumpkin:{kind:"seed",crop:"pumpkin",...Bi.seed_pumpkin},seed_rice:{kind:"seed",crop:"rice",...Bi.seed_rice}},Pr=["churu","ade","bait",...Rc,...jf],nM={log:6,stone:7,petal:5,star:35,berry:4,anchovy:9,bream:15,minnow:24,jelly:45,goldcarp:110,strawberry:Yt.strawberry.price,radish:Yt.radish.price,pumpkin:Yt.pumpkin.price,rice:Yt.rice.price},Cc=40,tp=[{id:"gather",name:"채집",icon:"🪓",desc:"나무·바위·꽃덤불을 두드릴 때마다"},{id:"fish",name:"낚시",icon:"🎣",desc:"물고기를 잡을 때마다"},{id:"cook",name:"요리",icon:"🍳",desc:"공방에서 요리할 때마다"},{id:"care",name:"돌보기",icon:"🐾",desc:"고양이를 쓰다듬고 간식 줄 때마다"},{id:"farm",name:"농사",icon:"🌱",desc:"씨앗을 심고 물을 주고 거둘 때마다"}],Xn=[{name:"연습",exp:0},{name:"F",exp:50},{name:"E",exp:200},{name:"D",exp:600},{name:"C",exp:1200},{name:"B",exp:2e3},{name:"A",exp:3200},{name:"S",exp:4800},{name:"SS",exp:7e3},{name:"SSS",exp:1e4}],Fr=[{exp:0,name:"섬의 새내기",icon:"🌱"},{exp:120,name:"섬의 살림꾼",icon:"🧺"},{exp:400,name:"섬의 일꾼",icon:"🪣"},{exp:900,name:"섬의 솜씨꾼",icon:"🧵"},{exp:1700,name:"섬의 장인",icon:"🔨"},{exp:2800,name:"섬의 명인",icon:"🏮"},{exp:4400,name:"섬의 수호자",icon:"🛡️"},{exp:6800,name:"섬의 별",icon:"🌟"}],wn={harvest:6,pet:10,treat:12,plant:ve.expPlant,water:ve.expWater,crop:ve.expHarvest},Oa=[0,18,40,68,100],ti={pet:{aff:4,stamina:3,cooldown:6},snacks:{berry:{id:"berry",name:"열매",icon:"🍓",aff:6,cooldown:3},anchovy:{id:"anchovy",name:"은멸치",icon:"🐟",aff:8,cooldown:3},churu:{id:"churu",name:"츄르",icon:"🐾",aff:14,cooldown:4}},snackOrder:["berry","anchovy","churu"],gifts:{2:{star:1},3:{petal:3},4:{star:2},5:{petal:5,star:3}},followLevel:3,dialogue:{somi:["솜이: …(턱을 살짝 내밀며 거리를 둔다)",'솜이: "야옹." 조금은 익숙해진 얼굴이에요.',"솜이: 다가와서 옆에 딱 붙어 앉아요. 꼬리가 살랑살랑.","솜이: 배를 보여 줘요. 이 섬에서 제일 무방비한 순간.","솜이: 품에 폭 안겨요. 이제 떨어지기 싫은 모양이에요."],ongi:["옹이: …(꼬리만 살짝 흔들고 도망갈 준비)",'옹이: "냐." 밥그릇을 한 번 쳐다봐요.',"옹이: 발등에 몸을 비비고 앞장서서 걸어요.","옹이: 손끝을 콕콕 물었다가 핥아요. 장난인 게 분명해요.","옹이: 어깨에 올라와 앉아요. 섬에서 제일 높은 자리랍니다."]}},Vn={chop:{id:"chop",icon:"🪓",need:[2,4],coin:[25,35],star:1,label:s=>`나무 ${s}번 베기`,event:"chop"},mine:{id:"mine",icon:"⛏️",need:[2,3],coin:[30,40],star:1,label:s=>`바위 ${s}번 캐기`,event:"mine"},fish:{id:"fish",icon:"🎣",need:[2,3],coin:[35,45],star:1,label:s=>`물고기 ${s}마리 낚기`,event:"fish"},treat:{id:"treat",icon:"🐾",need:[2,2],coin:[20,25],star:0,label:s=>`고양이 간식 ${s}번 주기`,event:"treat"},pet:{id:"pet",icon:"🤲",need:[3,4],coin:[15,20],star:0,label:s=>`고양이 ${s}번 쓰다듬기`,event:"pet"},cook:{id:"cook",icon:"🍳",need:[1,2],coin:[40,55],star:1,label:s=>`요리 ${s}번 하기`,event:"cook"},sell:{id:"sell",icon:"🪙",need:[4,6],coin:[25,35],star:0,label:s=>`자판기에 ${s}개 팔기`,event:"sell"},petal:{id:"petal",icon:"🌸",need:[3,5],coin:[20,28],star:0,label:s=>`꽃잎 ${s}개 모으기`,event:"petal"},plant:{id:"plant",icon:"🌱",need:[2,3],coin:[25,35],star:0,label:s=>`씨앗 ${s}번 심기`,event:"plant"},crop:{id:"crop",icon:"🧺",need:[2,4],coin:[35,50],star:1,label:s=>`작물 ${s}번 수확하기`,event:"crop"}},sM=["chop","mine","fish","treat","pet","cook","sell","petal","plant","crop"];function ep(s){return xe[s]?{name:xe[s].name,icon:xe[s].icon,tint:xe[s].tint||"#dcdcea"}:Ti[s]?{name:Ti[s].name,icon:Ti[s].icon,tint:Ti[s].tint}:Zs[s]?{name:Zs[s].name,icon:Zs[s].icon,tint:"#ffe1b0"}:Yt[s]?{name:Yt[s].name,icon:Yt[s].icon,tint:Yt[s].tint}:Bi[s]?{name:Bi[s].name,icon:Bi[s].icon,tint:"#cbe8b0"}:{name:s,icon:"❔",tint:"#dcdcea"}}function hn(s){return ep(s).name}function dn(s){return ep(s).icon}function rM(s,t){return s==="star"?"조각":`${Math.round(t)}cm`}function aM(s){let t=Math.floor(Number(s)||1)*2654435761%4294967296;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}function oM(s){const t=aM(s*97+13),e=[...sM],i=[];for(;i.length<2&&e.length;){const n=Math.floor(t()*e.length);i.push(e.splice(n,1)[0])}return i.map((n,r)=>{const a=Vn[n],o=a.need[0]+Math.floor(t()*(a.need[1]-a.need[0]+1)),l=a.coin[0]+Math.floor(t()*(a.coin[1]-a.coin[0]+1));return{id:`${s}-${r}-${n}`,kind:n,event:a.event,icon:a.icon,label:a.label(o),need:o,progress:0,claimed:!1,reward:{coin:l,star:a.star}}})}const ka=s=>xe[s]?xe[s].name:hn(s),Tl=s=>xe[s]?xe[s].icon:dn(s);var bo,ip;class lM{constructor(t){Ne(this,bo);this.game=t}bag(){const t=this.game.progress.inventory,e=g("div",{class:"bag-grid"});for(let a=0;a<t.slots;a++){const o=t.bag[a],l=g("div",{class:`bag-slot ${o?"filled":"empty"} ${o&&o.id==="berry"?"tap":""}`},g("span",{class:"ico"},o?xe[o.id].icon:"·"),o?g("span",{class:"n"},String(o.n)):null,o?g("span",{class:"nm"},ka(o.id)):null);o&&o.id==="berry"&&l.addEventListener("click",()=>this.game.eatBerry()),e.append(l)}const i=t.count("berry"),n=i>0?g("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.eatBerry()},`🍓 열매 먹기  ·  기력 +30  (${i}개)`):g("div",{class:"hint"},"열매가 없어요 — 온전한 나무 밑에 가끔 떨어져요 🍓");return{title:"🎒 가방",subtitle:"채집한 재료와 열매가 여기에 담겨요",body:g("div",{},g("div",{class:"hint"},`가방 ${t.usedSlots()}/${t.slots}칸 · 담긴 재료 ${t.totalItems()}개 · 한 칸에 ${Ve.stack}개까지`),e,g("div",{class:"section-label"},"쓰기"),n,g("div",{class:"section-label"},"재료가 가득 차면"),g("div",{class:"hint"},"공방의 창고에 맡겨 두세요. 가방이 넘치면 그 자리에 잠깐 내려놓게 돼요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}storage(){const t=this.game.progress.inventory,e=t.bagEntries(),i=t.storageEntries(),n=(a,o)=>{const l=o==="out",c=h=>l?this.game.moveToStorage(a.id,h):this.game.moveFromStorage(a.id,h);return g("div",{class:"store-row"},g("span",{class:"ico"},Tl(a.id)),g("span",{class:"nm"},ka(a.id)),g("span",{class:"n"},String(a.n)),g("button",{class:"mini",type:"button","aria-label":`1개 ${l?"창고로":"가방으로"}`,onclick:()=>c(1)},l?"→1":"←1"),g("button",{class:"mini",type:"button","aria-label":`전부 ${l?"창고로":"가방으로"}`,onclick:()=>c("all")},l?"→전체":"←전체"))};return{title:"📦 공방 창고",subtitle:"대량으로 모아 두고, 필요할 때 가방으로 꺼내요",body:g("div",{},g("div",{class:"hint"},"1 은 하나씩, 전체 는 그 재료를 전부 옮겨요 — 오른쪽은 창고로, 왼쪽은 가방으로."),g("div",{class:"section-label"},`🎒 가방 → 📦 창고  (${t.usedSlots()}/${t.slots}칸)`),e.length?g("div",{class:"store-list"},...e.map(a=>n(a,"out"))):g("div",{class:"hint"},"가방이 비어 있어요."),g("div",{class:"section-label"},"📦 창고 → 🎒 가방"),i.length?g("div",{class:"store-list"},...i.map(a=>n(a,"in"))):g("div",{class:"hint"},"창고가 비어 있어요. 모아 둔 재료가 여기 쌓여요.")),actions:[{label:"건물 복구 보기",kind:"ghost",onClick:()=>this.game.openBuild("workshop")},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}build(t){const e=_i.find(v=>v.id===t)||_i[0],i=this.game.progress.building(e.id),n=Ka[e.id]||{},r=this.game.progress.inventory,a=Object.values(n).reduce((v,x)=>v+x,0),o=Object.entries(n).reduce((v,[x,p])=>v+Math.min(p,i.invested[x]||0),0),l=a?Math.round(o/a*100):0,c=Object.entries(n).every(([v,x])=>(i.invested[v]||0)>=x),h=Object.entries(n).some(([v,x])=>(i.invested[v]||0)<x&&r.count(v)>0),d=Object.entries(n).map(([v,x])=>{const p=r.count(v),m=Math.min(x,i.invested[v]||0),M=m>=x;return g("div",{class:`req-row ${M?"done":""}`},g("span",{class:"ico"},Tl(v)),g("div",{class:"info"},g("div",{class:"nm"},`${ka(v)}${M?" ✓":""}`),g("div",{class:"sub"},`가방 ${p}개 · 창고 ${this.game.progress.inventory.stored(v)}개`)),g("span",{class:`need ${p+(i.invested[v]||0)>=x?"ok":"lack"}`},`${m}/${x}`))}),f=i.done?g("div",{},g("div",{class:"done-banner"},"✨ 복구 완료",g("div",{class:"sub"},ru[e.id]||"")),g("div",{class:"hint"},e.id==="lighthouse"?"밤이 되면 등대에 따뜻한 불이 켜져요.":"이제 섬의 일부가 되살아났어요.")):g("div",{},g("div",{class:"hint"},ru[e.id]||""),g("div",{class:"progress-line"},g("i",{style:{width:`${l}%`}})),g("div",{class:"req-list"},...d),g("div",{class:"hint"},c?"재료가 다 모였어요 — [복구 완료!] 를 눌러 주세요.":"재료를 모아 [재료 투입] 으로 하나씩 넣어요.")),u=[];return e.id==="workshop"&&i.done&&u.push({label:"📦 창고 열기",kind:"ghost",onClick:()=>this.game.openStorage()}),i.done||(u.push({label:"재료 투입",kind:"ghost",disabled:!h,onClick:()=>this.game.invest(e.id)}),u.push({label:"복구 완료!",kind:"primary",disabled:!c,onClick:()=>this.game.completeBuild(e.id)})),u.push({label:"닫기",kind:i.done||!c?"primary":"ghost",onClick:()=>this.game.modal.close()}),{title:`${e.icon} ${e.name}`,subtitle:i.done?"이미 복구된 건물이에요":"재료만 모이면 지금 바로 복구할 수 있어요",body:f,actions:u}}workshopMenu(){const t=this.game.progress.building("workshop"),e=this.game.progress.inventory,i=(r,a,o,l,c=!1)=>{const h=g("button",{class:`menu-entry ${c?"off":""}`,type:"button",...c?{disabled:"disabled"}:{}},g("span",{class:"mico"},r),g("div",{class:"mmain"},g("div",{class:"nm"},a),g("div",{class:"meta"},o)),g("span",{class:"arrow"},c?"🔒":"›"));return c||h.addEventListener("click",l),h};return{title:"🔨 공방",subtitle:"재료를 정리하고, 요리하고, 섬을 고치는 곳",body:g("div",{},g("div",{class:"hint"},t.done?"공방이 열렸어요. 재료를 정리하고, 요리하고, 도구를 손봐요.":"공방은 아직 낡았어요. 복구하면 창고·요리·도구방이 함께 열려요."),g("div",{class:"row"},g("div",{},g("div",{class:"label"},"가방"),g("div",{class:"hint"},`${e.usedSlots()}/${e.slots}칸 사용 중`)),g("span",{class:"hint"},`재료 ${e.totalItems()}개`)),g("div",{class:"section-label"},"공방 메뉴"),g("div",{class:"menu-list"},i("📦","창고",t.done?"재료를 맡기고 꺼내요":"공방을 복구하면 열려요",()=>this.game.openStorage(),!t.done),i("🍳","요리하기",t.done?"재료와 물고기로 기력을 회복해요":"공방을 복구하면 열려요",()=>this.game.openCooking(),!t.done),i("🪓","도구 강화",t.done?"도끼·곡괭이를 Lv.3까지":"공방을 복구하면 열려요",()=>this.game.openUpgrade(),!t.done),i("🛒","리어카 만들기",this.game.progress.cartLevel>0?`가방 ${this.game.progress.inventory.slots}칸 사용 중`:`가방 ${Ve.slots}칸 → ${Ve.slots+8}칸`,()=>this.game.openCart(),!t.done),i("🔨","건물 복구","섬의 네 곳과 다리를 되살려요",()=>this.game.openBuild("workshop")))),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}mailbox(t){const e=this.game.progress;if(t){const a=mo.find(o=>o.id===t);if(a)return S(this,bo,ip).call(this,a,e)}const i=mo.map(a=>{const o=!e.isRead(a.id),l=a.gift&&!e.isClaimed(a.id);return g("button",{class:`mail-row ${o?"unread":""}`,type:"button",onclick:()=>this.game.openMailbox(a.id)},g("span",{class:"mail-ico"},a.icon),g("div",{class:"mail-main"},g("div",{class:"mail-title"},a.title),g("div",{class:"mail-from"},`${a.from} · ${a.tag}`)),l?g("span",{class:"mail-gift"},"🎁"):o?g("span",{class:"mail-dot"}):null)}),r=e.questRows().filter(a=>a.done&&!a.claimed).length;return{title:"📬 우체통",subtitle:"공지와 편지, 그리고 의뢰와 선물이 있어요",body:g("div",{},g("div",{class:"section-label"},`📋 오늘의 의뢰 (Day ${e.quests.day})${r?` · 보상 ${r}건`:""}`),this.game.life.questList(),g("div",{class:"section-label"},"편지"),g("div",{class:"mail-list"},...i)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}bo=new WeakSet,ip=function(t,e){const i=e.isClaimed(t.id),n=t.gift&&g("div",{class:"gift-box"},g("div",{class:"gift-head"},i?"🎀 받은 선물":"🎁 동봉된 선물"),g("div",{class:"gift-items"},...Object.entries(t.gift).map(([a,o])=>g("span",{class:"gift-chip"},`${Tl(a)} ${ka(a)} ${o}`))),i?g("div",{class:"hint"},"가방에 잘 넣어 두었어요."):g("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.claimGift(t.id)},"선물 받기")),r=g("div",{},g("div",{class:"letter-from"},`${t.from} · ${t.tag}`),...t.body.map(a=>g("p",{class:"letter-p"},a)),n);return{title:`${t.icon} ${t.title}`,subtitle:"",body:r,actions:[{label:"← 편지함",kind:"ghost",onClick:()=>this.game.openMailbox()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}};let Ba=null;function cM(){try{return typeof indexedDB<"u"&&indexedDB!==null}catch{return!1}}function yh(){return cM()?Ba||(Ba=new Promise((s,t)=>{let e;try{e=indexedDB.open(si.dbName,1)}catch(i){t(i);return}e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains(si.store)||i.createObjectStore(si.store)},e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error||new Error("IndexedDB open error")),e.onblocked=()=>t(new Error("IndexedDB blocked"))}),Ba):Promise.reject(new Error("IndexedDB not available"))}async function hM(s){const t=await yh();return new Promise((e,i)=>{const r=t.transaction(si.store,"readonly").objectStore(si.store).get(s);r.onsuccess=()=>e(r.result??null),r.onerror=()=>i(r.error)})}async function dM(s,t){const e=await yh();return new Promise((i,n)=>{const r=e.transaction(si.store,"readwrite");r.objectStore(si.store).put(t,s),r.oncomplete=()=>i(!0),r.onerror=()=>n(r.error),r.onabort=()=>n(r.error||new Error("transaction aborted"))})}async function uM(s){const t=await yh();return new Promise((e,i)=>{const n=t.transaction(si.store,"readwrite");n.objectStore(si.store).delete(s),n.oncomplete=()=>e(!0),n.onerror=()=>i(n.error)})}const za=s=>typeof s=="string"&&!!xe[s];function Al(s){const t=Math.floor(Number(s));return Number.isFinite(t)?Math.max(Ve.slots,Math.min(24,t)):Ve.slots}class fM{constructor(t,e=Ve.slots){this.capacity=Al(e),this.bag=new Array(this.capacity).fill(null),this.storage={},t&&this.load(t,this.capacity)}get slots(){return this.capacity}setCapacity(t){const e=Al(t),i=[];if(e===this.capacity)return i;const n=this.bag,r=new Array(e).fill(null);for(let a=0;a<Math.min(n.length,e);a++)r[a]=n[a];if(n.length>e)for(let a=e;a<n.length;a++){const o=n[a];o&&o.n>0&&i.push({id:o.id,n:o.n})}this.capacity=e,this.bag=r;for(const a of i)this.add(a.id,a.n);return i}count(t){let e=0;for(const i of this.bag)i&&i.id===t&&(e+=i.n);return e}stored(t){return Math.max(0,Math.floor(Number(this.storage[t])||0))}roomFor(t){if(!za(t))return 0;let e=0;for(const i of this.bag)i?i.id===t&&(e+=Math.max(0,Ve.stack-i.n)):e+=Ve.stack;return e}usedSlots(){return this.bag.filter(Boolean).length}totalItems(){let t=0;for(const e of this.bag)e&&(t+=e.n);return t}bagEntries(){const t=new Map;for(const e of this.bag)!e||e.n<=0||t.set(e.id,(t.get(e.id)||0)+e.n);return Sc.filter(e=>t.has(e)).map(e=>({id:e,n:t.get(e)}))}storageEntries(){return Sc.filter(t=>this.stored(t)>0).map(t=>({id:t,n:this.stored(t)}))}add(t,e){if(!za(t))return 0;let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;for(const n of this.bag){if(i<=0)break;if(!n||n.id!==t)continue;const r=Ve.stack-n.n;if(r<=0)continue;const a=Math.min(r,i);n.n+=a,i-=a}for(;i>0;){const n=this.bag.indexOf(null);if(n<0)break;const r=Math.min(Ve.stack,i);this.bag[n]={id:t,n:r},i-=r}return i}take(t,e){let i=Math.max(0,Math.floor(Number(e)||0));if(i<=0)return 0;let n=0;for(let r=0;r<this.bag.length&&i>0;r++){const a=this.bag[r];if(!a||a.id!==t)continue;const o=Math.min(a.n,i);a.n-=o,i-=o,n+=o,a.n<=0&&(this.bag[r]=null)}return n}toStorage(t,e="all"){const i=this.count(t);if(!i)return 0;const n=Math.max(0,su-this.stored(t)),r=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0))),a=Math.min(r,n);return a<=0?0:(this.take(t,a),this.storage[t]=this.stored(t)+a,a)}fromStorage(t,e="all"){const i=this.stored(t);if(!i)return 0;const n=e==="all"?i:Math.min(i,Math.max(0,Math.floor(Number(e)||0)));if(n<=0)return 0;const r=this.add(t,n),a=n-r;if(a>0){const o=this.stored(t)-a;o>0?this.storage[t]=o:delete this.storage[t]}return a}toJSON(){return{capacity:this.capacity,bag:this.bag.map(t=>t&&t.n>0?{id:t.id,n:Math.min(Ve.stack,Math.floor(t.n))}:null),storage:{...this.storage}}}load(t,e=this.capacity){if(this.capacity=Al(e),this.bag=new Array(this.capacity).fill(null),this.storage={},!t||typeof t!="object")return this;if((Array.isArray(t.bag)?t.bag:[]).slice(0,this.capacity).forEach((n,r)=>{if(!n||typeof n!="object"||!za(n.id))return;const a=Math.floor(Number(n.n));!Number.isFinite(a)||a<=0||(this.bag[r]={id:n.id,n:Math.min(Ve.stack,a)})}),t.storage&&typeof t.storage=="object")for(const[n,r]of Object.entries(t.storage)){if(!za(n))continue;const a=Math.floor(Number(r));!Number.isFinite(a)||a<=0||(this.storage[n]=Math.min(su,a))}return this}}const os=tp.map(s=>s.id),uu=Xn[Xn.length-1].exp,pM=Fr[Fr.length-1].exp;class mM{constructor(t){this.exp={};for(const e of os)this.exp[e]=0;t&&this.load(t)}reset(){for(const t of os)this.exp[t]=0}get(t){return Math.max(0,Math.floor(Number(this.exp[t])||0))}add(t,e){if(!os.includes(t))return{id:t,gain:0,before:0,after:0,rankedUp:!1,rank:""};const i=Math.max(0,Math.floor(Number(e)||0)),n=this.get(t),r=Math.min(uu,n+i);return this.exp[t]=r,{id:t,gain:r-n,before:n,after:r,rankedUp:this.rankIndex(r)>this.rankIndex(n),rank:this.rank(r).name}}rankIndex(t){let e=0;for(let i=0;i<Xn.length;i++)t>=Xn[i].exp&&(e=i);return e}rank(t){return Xn[this.rankIndex(t)]}level(t){return this.rankIndex(this.get(t))+1}row(t){const e=tp.find(c=>c.id===t)||{name:t,icon:"🌱",desc:""},i=this.get(t),n=this.rankIndex(i),r=Xn[n],a=Xn[n+1]||null,o=a?a.exp-r.exp:1,l=a?Math.min(100,Math.round((i-r.exp)/o*100)):100;return{id:t,name:e.name,icon:e.icon,desc:e.desc,exp:i,level:n+1,rank:r.name,next:a,pct:l,toNext:a?Math.max(0,a.exp-i):0}}rows(){return os.map(t=>this.row(t))}get total(){return os.reduce((t,e)=>t+this.get(e),0)}title(){const t=this.total;let e=Fr[0];for(const n of Fr)t>=n.exp&&(e=n);const i=Fr.find(n=>n.exp>t)||null;return{name:e.name,icon:e.icon,total:t,next:i,pct:i?Math.min(100,Math.round((t-e.exp)/Math.max(1,i.exp-e.exp)*100)):100,toNext:i?i.exp-t:0,maxed:t>=pM}}toJSON(){const t={};for(const e of os)t[e]=this.get(e);return t}load(t){if(this.reset(),!t||typeof t!="object")return this;for(const e of os){const i=Math.floor(Number(t[e]));this.exp[e]=Number.isFinite(i)&&i>0?Math.min(uu,i):0}return this}}const gM=[{id:"gather",name:"채집",icon:"🪓"},{id:"fish",name:"낚시",icon:"🎣"},{id:"cook",name:"요리",icon:"🍳"},{id:"farm",name:"농사",icon:"🌱"},{id:"life",name:"섬 생활",icon:"🏝️"}],vM=s=>Math.max(...ei.map(t=>s.catLevel(s.cat(t.id).aff))),Or=[{id:"ach_first_chop",group:"gather",icon:"🌳",name:"첫 나무",desc:"나무를 처음으로 끝까지 베어 내기",event:"tree",need:1,reward:{coin:30,star:0}},{id:"ach_woodcutter",group:"gather",icon:"🪓",name:"섬의 나무꾼",desc:"나무 20그루 베어 내기",event:"tree",need:20,reward:{coin:60,star:1}},{id:"ach_first_fish",group:"fish",icon:"🐟",name:"첫 낚시",desc:"부두에서 물고기 한 마리 낚기",event:"fish",need:1,reward:{coin:30,star:0}},{id:"ach_angler",group:"fish",icon:"🎣",name:"부두의 낚시꾼",desc:"물고기 15마리 낚기",event:"fish",need:15,reward:{coin:80,star:2}},{id:"ach_first_cook",group:"cook",icon:"🍳",name:"첫 요리",desc:"공방에서 요리 한 번 하기",event:"cook",need:1,reward:{coin:30,star:0}},{id:"ach_cook5",group:"cook",icon:"🍲",name:"공방의 솜씨",desc:"요리 5번 하기",event:"cook",need:5,reward:{coin:70,star:1}},{id:"ach_first_seed",group:"farm",icon:"🌱",name:"첫 씨앗",desc:"텃밭에 씨앗 한 번 심기",event:"plant",need:1,reward:{coin:25,star:0}},{id:"ach_farmer",group:"farm",icon:"🧺",name:"텃밭지기",desc:"작물 10번 수확하기",event:"crop",need:10,reward:{coin:80,star:2}},{id:"ach_merchant",group:"life",icon:"🪙",name:"섬의 상인",desc:"자판기에 물건 30개 팔기",event:"sell",need:30,reward:{coin:70,star:1}},{id:"ach_cat_friend",group:"life",icon:"🐱",name:"고양이의 친구",desc:"솜이·옹이 중 한 마리와 호감도 Lv.3",need:3,value:vM,reward:{coin:60,star:1}},{id:"ach_cart",group:"life",icon:"🛒",name:"손수레의 날",desc:"공방에서 리어카 만들기 (가방 8칸 → 16칸)",need:1,value:s=>Math.max(0,Math.floor(Number(s.cartLevel)||0)),reward:{coin:55,star:1}},{id:"ach_bridge",group:"life",icon:"🌉",name:"강을 건너서",desc:"통나무·돌로 다리를 놓아 북쪽 개척권 열기",need:1,value:s=>s.bridgeBuilt?1:0,reward:{coin:70,star:1}},{id:"ach_ditto_all",group:"life",icon:"📔",name:"메타몽 수집가",desc:`어설픈 메타몽 ${Ln.length}마리 모두 도감에 등록`,need:Ln.length,value:s=>Math.max(0,Math.floor(Number(s.discoveredCount)||0)),external:!0,reward:{coin:100,star:3}},{id:"ach_rebuilder",group:"life",icon:"🏗️",name:"섬의 재건자",desc:"부두·공방·자판기·등대 네 곳 모두 복구",need:_i.length,value:s=>_i.filter(t=>s.building(t.id).done).length,reward:{coin:120,star:2}}];Or.map(s=>s.id);function xM(s){return Or.find(t=>t.id===s)||null}const En=(s,t,e,i)=>{const n=Number(s);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i},He=(s,t,e,i=0)=>{const n=Math.floor(Number(s));return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};class np{constructor(t){this.reset(),t&&this.load(t)}reset(){this.stamina=di.max,this.inventory=new fM,this.buildings={};for(const t of _i)this.buildings[t.id]={invested:{},done:!1};this.mailbox={read:[],claimed:[]},this.nodes={},this.bridge={built:!1,invested:{}},this.cartLevel=0,this.paddyPlots=new Array(qt.cols*qt.rows).fill(null),this.welcome={step:0},this.coins=0,this.skills=new mM,this.fish={},this.supplies={};for(const t of Pr)this.supplies[t]=0;this.tools={};for(const t of $s)this.tools[t]=1;this.cats={};for(const t of ei)this.cats[t.id]={aff:0,gifts:[],follow:!1};this.cooked={},this.quests={day:0,list:[]},this.buff={kind:"",left:0},this.fishing={casts:0,catches:0,misses:0,best:0},this.crops={},this.farmPlots=new Array(Ft.cols*Ft.rows).fill(null),this.counters={chop:0,tree:0,rock:0,flower:0,mine:0,fish:0,cook:0,sell:0,pet:0,treat:0,petal:0,plant:0,water:0,crop:0,lucky:0},this.achievements={unlocked:[],claimed:[]},this.discoveredCount=0}useStamina(t){const e=Math.max(0,Number(t)||0);return this.stamina<e?!1:(this.stamina=Math.max(0,this.stamina-e),!0)}restStamina(t){this.stamina=Math.min(di.max,this.stamina+Math.max(0,Number(t)||0))}building(t){return this.buildings[t]||(this.buildings[t]={invested:{},done:!1}),this.buildings[t]}investedTotal(t){const e=this.building(t).invested;return Object.values(e).reduce((i,n)=>i+(Number(n)||0),0)}bridgeState(){return(!this.bridge||typeof this.bridge!="object")&&(this.bridge={built:!1,invested:{}}),(!this.bridge.invested||typeof this.bridge.invested!="object")&&(this.bridge.invested={}),this.bridge}get bridgeBuilt(){return!!this.bridgeState().built}bridgeInvestedTotal(){const t=this.bridgeState().invested;return Object.values(t).reduce((e,i)=>e+(Number(i)||0),0)}get bagCapacity(){const t=Math.max(0,Math.min(Zi.maxLevel,Math.floor(Number(this.cartLevel)||0)));return Math.min(24,Ve.slots+Zi.slotsPerLevel*t)}syncCapacity(){const t=this.bagCapacity;return this.inventory.slots!==t&&this.inventory.setCapacity(t),t}isRead(t){return this.mailbox.read.includes(t)}markRead(t){this.isRead(t)||this.mailbox.read.push(t)}isClaimed(t){return this.mailbox.claimed.includes(t)}markClaimed(t){this.isClaimed(t)||this.mailbox.claimed.push(t)}addCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));return this.coins=Math.min(999999,this.coins+e),this.coins}spendCoins(t){const e=Math.max(0,Math.floor(Number(t)||0));return this.coins<e?!1:(this.coins-=e,!0)}gainExp(t,e){return this.skills.add(t,e)}fishCount(t){return Math.max(0,Math.floor(Number(this.fish[t])||0))}addFish(t,e=1){if(!Ti[t])return 0;const i=Math.max(0,Math.floor(Number(e)||0));return this.fish[t]=Math.min(999,this.fishCount(t)+i),this.fish[t]}takeFish(t,e=1){const i=Math.max(0,Math.floor(Number(e)||0)),n=this.fishCount(t),r=Math.min(n,i);if(r<=0)return 0;const a=n-r;return a>0?this.fish[t]=a:delete this.fish[t],r}fishKinds(){return ds.filter(t=>this.fishCount(t)>0).length}supply(t){return Math.max(0,Math.floor(Number(this.supplies[t])||0))}addSupply(t,e=1){return Pr.includes(t)?(this.supplies[t]=Math.min(99,this.supply(t)+Math.max(0,Math.floor(Number(e)||0))),this.supplies[t]):0}takeSupply(t,e=1){const i=Math.min(this.supply(t),Math.max(0,Math.floor(Number(e)||0)));return i<=0?0:(this.supplies[t]=this.supply(t)-i,i)}toolLevel(t){const e=us[t];return e?Math.max(1,Math.min(e.max,He(this.tools[t],1,e.max,1))):1}toolInfo(t){const e=us[t],i=this.toolLevel(t);return{id:t,def:e,level:i,max:e.max,cost:e.cost[i]||{},staminaMul:e.stamina[i-1]??1,hitsBonus:e.hits[i-1]??0,maxed:i>=e.max}}staminaMultiplier(t){let e=1;for(const i of $s){const n=us[i];n.kind===t&&(e*=n.stamina[this.toolLevel(i)-1]??1)}return this.buff.kind==="golden"&&this.buff.left>0&&(e*=go.stamina),e}hitsBonus(t){let e=0;for(const i of $s){const n=us[i];n.kind===t&&(e+=n.hits[this.toolLevel(i)-1]||0)}return e}canUpgrade(t){const e=this.toolInfo(t);if(e.maxed)return{ok:!1,reason:"max",info:e};const i=[];for(const[n,r]of Object.entries(e.cost)){const a=n==="coin"?this.coins:this.inventory.count(n);a<r&&i.push({item:n,need:r,have:a})}return{ok:i.length===0,reason:i.length?"lack":"",lack:i,info:e}}upgradeTool(t){const e=this.canUpgrade(t);if(!e.ok)return e;const i=e.info;for(const[n,r]of Object.entries(i.cost))n==="coin"?this.spendCoins(r):this.inventory.take(n,r);return this.tools[t]=i.level+1,{ok:!0,info:this.toolInfo(t)}}cropCount(t){return Math.max(0,Math.floor(Number(this.crops[t])||0))}addCrop(t,e=1){if(!Yt[t])return 0;const i=Math.max(0,Math.floor(Number(e)||0));return this.crops[t]=Math.min(999,this.cropCount(t)+i),this.crops[t]}takeCrop(t,e=1){const i=Math.max(0,Math.floor(Number(e)||0)),n=this.cropCount(t),r=Math.min(n,i);if(r<=0)return 0;const a=n-r;return a>0?this.crops[t]=a:delete this.crops[t],r}cropKinds(){return Qf.filter(t=>this.cropCount(t)>0).length}seedCount(t){const e=Yt[t];return e?this.supply(e.seedId):0}count(t){return Math.max(0,Math.floor(Number(this.counters[t])||0))}bump(t,e=1){if(!(t in this.counters))return 0;const i=Math.max(0,Math.floor(Number(e)||0));return i<=0?this.counters[t]:(this.counters[t]=Math.min(999999,this.count(t)+i),this.counters[t])}achRow(t){const e=xM(t);if(!e)return null;const i=e.event?this.count(e.event):Math.max(0,Math.floor(Number(e.value?e.value(this):0)||0)),n=this.achievements.unlocked.includes(t),r=this.achievements.claimed.includes(t);return{...e,value:Math.min(e.need,i),raw:i,unlocked:n,claimed:r,done:i>=e.need,pct:Math.min(100,Math.round(i/Math.max(1,e.need)*100))}}achRows(){return Or.map(t=>this.achRow(t.id))}get claimableAchievements(){return this.achRows().filter(t=>t.done&&!t.claimed).length}checkAchievements(){const t=[];for(const e of Or){if(this.achievements.unlocked.includes(e.id))continue;const i=this.achRow(e.id);i.done&&(this.achievements.unlocked.push(e.id),t.push(i))}return t}claimAchievement(t){const e=this.achRow(t);if(!e)return{ok:!1,reason:"missing"};if(!e.done)return{ok:!1,reason:"unfinished"};if(e.claimed)return{ok:!1,reason:"claimed"};this.achievements.claimed.push(t),this.addCoins(e.reward.coin);let i=0;if(e.reward.star>0){const n=this.inventory.add("star",e.reward.star);n>0&&(this.inventory.storage.star=this.inventory.stored("star")+n,i=n)}return{ok:!0,row:e,stored:i}}tileAt(t,e){const i=t[e];return i&&i.crop?i:null}plantIn(t,e,i,n=!1){const r=Yt[i];return r?n&&!r.paddyOnly?{ok:!1,reason:"paddy"}:!n&&r.paddyOnly?{ok:!1,reason:"farm"}:e<0||e>=t.length?{ok:!1,reason:"index"}:this.tileAt(t,e)?{ok:!1,reason:"occupied"}:this.supply(r.seedId)<=0?{ok:!1,reason:"seed"}:(this.takeSupply(r.seedId,1),t[e]={crop:i,remain:r.grow,total:r.grow,watered:0,wet:0},this.bump("plant",1),{ok:!0,crop:r}):{ok:!1,reason:"crop"}}waterIn(t,e){const i=this.tileAt(t,e);return i?i.remain<=0?{ok:!1,reason:"ripe"}:i.watered>=ve.maxWater?{ok:!1,reason:"max"}:(i.remain=Math.max(0,i.remain*ve.waterHalve),i.watered+=1,i.wet=ve.wetSeconds,this.bump("water",1),{ok:!0,remain:i.remain,watered:i.watered}):{ok:!1,reason:"empty"}}tickIn(t,e){const i=[],n=Math.max(0,Number(e)||0);for(let r=0;r<t.length;r++){const a=t[r];!a||!a.crop||(a.wet>0&&(a.wet=Math.max(0,a.wet-n)),!(a.remain<=0)&&(a.remain=Math.max(0,a.remain-n),a.remain<=0&&i.push(r)))}return i}harvestIn(t,e){const i=this.tileAt(t,e);if(!i)return{ok:!1,reason:"empty"};if(i.remain>0)return{ok:!1,reason:"growing"};const n=Yt[i.crop],[r,a]=n.yield,o=r+Math.floor(Math.random()*(a-r+1));return this.addCrop(n.id,o),t[e]=null,this.bump("crop",1),{ok:!0,crop:n,n:o,total:this.cropCount(n.id)}}plot(t){return this.tileAt(this.farmPlots,t)}plantSeed(t,e){return this.plantIn(this.farmPlots,t,e,!1)}waterPlot(t){return this.waterIn(this.farmPlots,t)}tickFarm(t){return this.tickIn(this.farmPlots,t)}harvestPlot(t){return this.harvestIn(this.farmPlots,t)}paddyPlot(t){return this.tileAt(this.paddyPlots,t)}plantPaddy(t,e="rice"){return this.plantIn(this.paddyPlots,t,e,!0)}waterPaddy(t){return this.waterIn(this.paddyPlots,t)}tickPaddy(t){return this.tickIn(this.paddyPlots,t)}harvestPaddy(t){return this.harvestIn(this.paddyPlots,t)}cat(t){return this.cats[t]||(this.cats[t]={aff:0,gifts:[],follow:!1}),this.cats[t]}catLevel(t){const e=Math.max(0,Number(t)||0);let i=1;for(let n=0;n<Oa.length;n++)e>=Oa[n]&&(i=n+1);return i}catRow(t){const e=this.cat(t),i=this.catLevel(e.aff),n=Oa[i]??null,r=Oa[i-1]??0;return{id:t,aff:Math.round(e.aff),level:i,follow:!!e.follow,gifts:[...e.gifts],nextAt:n,pct:n?Math.min(100,Math.round((e.aff-r)/Math.max(1,n-r)*100)):100,toNext:n?Math.max(0,n-Math.round(e.aff)):0,canFollow:i>=3}}addAffection(t,e){const i=this.cat(t),n=this.catLevel(i.aff);i.aff=Math.max(0,Math.min(999,i.aff+Math.max(0,Number(e)||0)));const r=this.catLevel(i.aff);return{before:n,after:r,levelUp:r>n,row:this.catRow(t)}}cookedCount(t){return Math.max(0,Math.floor(Number(this.cooked[t])||0))}markCooked(t){this.cooked[t]=Math.min(999,this.cookedCount(t)+1)}canCook(t){const e=Yr[t];if(!e)return{ok:!1,reason:"recipe"};const i=[];for(const[r,a]of Object.entries(e.need)){const o=this.inventory.count(r);o<a&&i.push({item:r,need:a,have:o})}for(const[r,a]of Object.entries(e.fish||{})){const o=this.fishCount(r);o<a&&i.push({item:r,need:a,have:o})}for(const[r,a]of Object.entries(e.crop||{})){const o=this.cropCount(r);o<a&&i.push({item:r,need:a,have:o})}const n=this.stamina>=di.max-.5;return{ok:i.length===0&&!n,reason:i.length?"lack":n?"full":"",lack:i}}setBuff(t,e){this.buff={kind:t||"",left:Math.max(0,Number(e)||0)}}tickBuff(t){return this.buff.left<=0?!1:(this.buff.left=Math.max(0,this.buff.left-Math.max(0,t||0)),this.buff.left<=0?(this.buff={kind:"",left:0},!0):!1)}get buffActive(){return this.buff.left>0&&!!this.buff.kind}rollQuests(t){const e=Math.max(1,Math.floor(Number(t)||1));return this.quests.day===e&&this.quests.list.length?!1:(this.quests={day:e,list:oM(e)},!0)}questRows(){return this.quests.list.map(t=>{const e=Vn[t.kind]||{icon:"📋"},i=Math.min(t.need,Math.max(0,t.progress));return{...t,icon:t.icon||e.icon,progress:i,pct:Math.min(100,Math.round(i/Math.max(1,t.need)*100)),done:i>=t.need}})}get claimableQuests(){return this.questRows().filter(t=>t.done&&!t.claimed).length}questEvent(t,e=1){const i=Math.max(0,Number(e)||0);if(!t||i<=0)return[];const n=[];for(const r of this.quests.list)r.claimed||r.event===t&&(r.progress>=r.need||(r.progress=Math.min(r.need,r.progress+i),r.progress>=r.need&&n.push(r)));return n}claimQuest(t){const e=this.quests.list.find(i=>i.id===t);return e?e.claimed?{ok:!1,reason:"claimed"}:e.progress<e.need?{ok:!1,reason:"unfinished"}:(e.claimed=!0,this.addCoins(e.reward.coin),{ok:!0,quest:e}):{ok:!1,reason:"missing"}}toJSON(){const t=this.inventory.toJSON();return{stamina:Math.round(this.stamina*10)/10,bag:t.bag,storage:t.storage,buildings:this.buildings,mailbox:this.mailbox,nodes:this.nodes,coins:Math.round(this.coins),skills:this.skills.toJSON(),fish:{...this.fish},supplies:{...this.supplies},tools:{...this.tools},cats:JSON.parse(JSON.stringify(this.cats)),cooked:{...this.cooked},quests:JSON.parse(JSON.stringify(this.quests)),buff:{...this.buff},fishing:{...this.fishing},crops:{...this.crops},farmPlots:this.farmPlots.map(e=>e&&e.crop?{crop:e.crop,remain:Math.round(Math.max(0,e.remain)*100)/100,total:Math.round(e.total*100)/100,watered:Math.max(0,Math.floor(e.watered||0)),wet:Math.round(Math.max(0,e.wet||0)*10)/10}:null),counters:{...this.counters},achievements:{unlocked:[...this.achievements.unlocked],claimed:[...this.achievements.claimed]},bridge:{built:!!this.bridgeState().built,invested:{...this.bridgeState().invested}},bridgeBuilt:!!this.bridgeState().built,cartLevel:this.cartLevel,bagCapacity:this.bagCapacity,paddyPlots:this.paddyPlots.map(e=>e&&e.crop?{crop:e.crop,remain:Math.round(Math.max(0,e.remain)*100)/100,total:Math.round(e.total*100)/100,watered:Math.max(0,Math.floor(e.watered||0)),wet:Math.round(Math.max(0,e.wet||0)*10)/10}:null),welcome:{step:Math.max(0,Math.min(3,Math.floor(Number(this.welcome&&this.welcome.step)||0)))}}}load(t){if(this.reset(),!t||typeof t!="object")return this;this.stamina=En(t.stamina,0,di.max,di.max),this.cartLevel=He(t.cartLevel,0,Zi.maxLevel,0),this.inventory.load({bag:t.bag,storage:t.storage},this.bagCapacity);const e=t.buildings&&typeof t.buildings=="object"?t.buildings:{};for(const x of _i){const p=e[x.id]&&typeof e[x.id]=="object"?e[x.id]:null,m=this.buildings[x.id];if(p&&(m.done=!!p.done,p.invested&&typeof p.invested=="object"))for(const[M,C]of Object.entries(p.invested)){if(!xe[M])continue;const E=Math.floor(Number(C));Number.isFinite(E)&&E>0&&(m.invested[M]=E)}}const i=t.mailbox&&typeof t.mailbox=="object"?t.mailbox:{},n=Array.isArray(i.read)?i.read:[],r=Array.isArray(i.claimed)?i.claimed:[];if(this.mailbox.read=n.filter(x=>typeof x=="string"),this.mailbox.claimed=r.filter(x=>typeof x=="string"),t.nodes&&typeof t.nodes=="object")for(const[x,p]of Object.entries(t.nodes)){if(typeof x!="string"||!p||typeof p!="object")continue;const m=Math.floor(Number(p.left)),M=Number(p.respawn);this.nodes[x]={left:Number.isFinite(m)&&m>=0?Math.min(9,m):0,respawn:Number.isFinite(M)&&M>0?Math.min(600,M):0}}if(this.coins=He(t.coins,0,999999,0),this.skills.load(t.skills),this.fish={},t.fish&&typeof t.fish=="object")for(const[x,p]of Object.entries(t.fish)){if(!Ti[x])continue;const m=Math.floor(Number(p));Number.isFinite(m)&&m>0&&(this.fish[x]=Math.min(999,m))}for(const x of Pr)this.supplies[x]=0;if(t.supplies&&typeof t.supplies=="object")for(const x of Pr)this.supplies[x]=He(t.supplies[x],0,99,0);for(const x of $s)this.tools[x]=1;if(t.tools&&typeof t.tools=="object")for(const x of $s)this.tools[x]=He(t.tools[x],1,us[x].max,1);for(const x of ei)this.cats[x.id]={aff:0,gifts:[],follow:!1};if(t.cats&&typeof t.cats=="object")for(const x of ei){const p=t.cats[x.id];if(!p||typeof p!="object")continue;const m=Array.isArray(p.gifts)?p.gifts.map(M=>Math.floor(Number(M))).filter(M=>Number.isFinite(M)&&M>=2&&M<=5):[];this.cats[x.id]={aff:Math.round(En(p.aff,0,999,0)),gifts:[...new Set(m)],follow:!!p.follow}}if(this.cooked={},t.cooked&&typeof t.cooked=="object")for(const[x,p]of Object.entries(t.cooked)){if(!Yr[x])continue;const m=Math.floor(Number(p));Number.isFinite(m)&&m>0&&(this.cooked[x]=Math.min(999,m))}if(this.quests={day:0,list:[]},t.quests&&typeof t.quests=="object"&&Array.isArray(t.quests.list)){const x=He(t.quests.day,0,3650,0),p=[];for(const m of t.quests.list){if(!m||typeof m!="object"||!Vn[m.kind])continue;const M=He(m.need,1,99,1);p.push({id:typeof m.id=="string"?m.id:`${x}-${p.length}-${m.kind}`,kind:m.kind,event:Vn[m.kind].event,icon:typeof m.icon=="string"?m.icon:Vn[m.kind].icon,label:typeof m.label=="string"?m.label:Vn[m.kind].label(M),need:M,progress:He(m.progress,0,M,0),claimed:!!m.claimed,reward:{coin:He(m.reward&&m.reward.coin,0,9999,Vn[m.kind].coin[0]),star:He(m.reward&&m.reward.star,0,9,Vn[m.kind].star)}})}p.length&&(this.quests={day:x,list:p})}const a=t.buff&&typeof t.buff=="object"?t.buff:{};this.buff={kind:typeof a.kind=="string"&&a.kind?a.kind:"",left:En(a.left,0,600,0)};const o=t.fishing&&typeof t.fishing=="object"?t.fishing:{};if(this.fishing={casts:He(o.casts,0,99999,0),catches:He(o.catches,0,99999,0),misses:He(o.misses,0,99999,0),best:He(o.best,0,999,0)},this.crops={},t.crops&&typeof t.crops=="object")for(const[x,p]of Object.entries(t.crops)){if(!Yt[x])continue;const m=Math.floor(Number(p));Number.isFinite(m)&&m>0&&(this.crops[x]=Math.min(999,m))}this.farmPlots=new Array(Ft.cols*Ft.rows).fill(null);const l=Array.isArray(t.farmPlots)?t.farmPlots:[];for(let x=0;x<this.farmPlots.length;x++){const p=l[x];if(!p||typeof p!="object")continue;const m=Yt[p.crop];if(!m)continue;const M=En(p.total,1,600,m.grow);this.farmPlots[x]={crop:m.id,total:M,remain:En(p.remain,0,M,M),watered:He(p.watered,0,ve.maxWater,0),wet:En(p.wet,0,ve.wetSeconds,0)}}for(const x of Object.keys(this.counters))this.counters[x]=He(t.counters&&t.counters[x],0,999999,0);this.bridge={built:!1,invested:{}};const c=t.bridge&&typeof t.bridge=="object"?t.bridge:{};this.bridge.built=!!t.bridgeBuilt||!!c.built;const h=c.invested&&typeof c.invested=="object"?c.invested:{};for(const[x,p]of Object.entries(h)){if(!xe[x])continue;const m=Math.floor(Number(p));Number.isFinite(m)&&m>0&&(this.bridge.invested[x]=m)}this.paddyPlots=new Array(qt.cols*qt.rows).fill(null);const d=Array.isArray(t.paddyPlots)?t.paddyPlots:[];for(let x=0;x<this.paddyPlots.length;x++){const p=d[x];if(!p||typeof p!="object")continue;const m=Yt[p.crop];if(!m||!m.paddyOnly)continue;const M=En(p.total,1,600,m.grow);this.paddyPlots[x]={crop:m.id,total:M,remain:En(p.remain,0,M,M),watered:He(p.watered,0,ve.maxWater,0),wet:En(p.wet,0,ve.wetSeconds,0)}}const f=t.welcome&&typeof t.welcome=="object"?t.welcome:{};this.welcome={step:He(f.step,0,3,0)},this.achievements={unlocked:[],claimed:[]};const u=t.achievements&&typeof t.achievements=="object"?t.achievements:{},v=new Set(Or.map(x=>x.id));for(const x of["unlocked","claimed"]){const p=Array.isArray(u[x])?u[x]:[];this.achievements[x]=[...new Set(p.filter(m=>typeof m=="string"&&v.has(m)))]}return this}}const fu=5,_M={timeScale:1},bM=[1,10,60],on=(s,t)=>{const e=Number(s);return Number.isFinite(e)?e:t},yM=(s,t,e,i)=>{const n=Number(s);return Number.isFinite(n)?Math.max(t,Math.min(e,n)):i};function pu(s){if(!s||typeof s!="object"||Array.isArray(s))return null;const t=s.settings&&typeof s.settings=="object"?s.settings:{},e={muted:!!t.muted,timeScale:bM.includes(Number(t.timeScale))?Number(t.timeScale):_M.timeScale,fps30:!!t.fps30},i=s.player&&typeof s.player=="object"?s.player:{},n=s.playerPos&&typeof s.playerPos=="object"?s.playerPos:{},r={x:on(i.x,on(n.x,Rn.x)),z:on(i.z,on(n.z,Rn.z)),yaw:on(i.yaw,Math.PI)},a=Array.isArray(s.discovered)?s.discovered.filter(l=>typeof l=="string"):Array.isArray(s.discoveredDittos)?s.discoveredDittos.filter(l=>typeof l=="string"):[],o=new np(s).toJSON();return{version:fu,fromVersion:Math.max(1,Math.min(fu,Math.floor(on(s.version,1)))),savedAt:on(s.savedAt,Date.now()),day:Math.max(1,Math.min(3650,Math.floor(on(s.day,1)))),elapsed:yM(on(s.elapsed,on(s.elapsedSeconds,120)),0,Ue-.01,120),discovered:a,settings:e,player:r,...o}}const Rl=`${si.dbName}:${si.key}`;class MM{constructor(){this.mode="unknown",this.lastError=null}async load(){try{const t=await hM(si.key);if(t)return this.mode="idb",pu(t);this.mode="idb"}catch(t){this.lastError=String(t&&t.message?t.message:t),this.mode="local"}try{const t=localStorage.getItem(Rl);if(t)return this.mode=this.mode==="unknown"?"local":this.mode,pu(JSON.parse(t))}catch(t){this.lastError=String(t)}return null}async hasSave(){return!!await this.load()}async save(t){try{return await dM(si.key,{...t,version:2}),this.mode="idb",!0}catch(e){this.lastError=String(e&&e.message?e.message:e),this.mode="local";try{return localStorage.setItem(Rl,JSON.stringify(t)),!0}catch(i){return this.lastError=String(i),!1}}}async clear(){try{await uM(si.key)}catch(t){this.lastError=String(t)}try{localStorage.removeItem(Rl)}catch{}}}const Qa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SM=new gh(-1,1,1,-1,0,1);class wM extends Le{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const EM=new wM;class Mh{constructor(t){this._mesh=new Zt(EM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,SM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class sp extends lr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof fi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ir.clone(t.uniforms),this.material=new fi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Mh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class mu extends lr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class TM extends lr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class AM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Rt);this._width=i.width,this._height=i.height,e=new mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sp(Qa),this.copyPass.material.blending=ps,this.timer=new C0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mu!==void 0&&(a instanceof mu?i=!0:a instanceof TM&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RM extends lr{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ut}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const CM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends lr{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mi(r,a,{type:pi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new mi(r,a,{type:pi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new mi(r,a,{type:pi,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=CM;this.highPassUniforms=ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fi({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ir.clone(Qa.uniforms),this.blendMaterial=new fi({uniforms:this.copyUniforms,vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,premultipliedAlpha:!0,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ut,this._oldClearAlpha=1,this._basic=new bi,this._fsQuad=new Mh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Rt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new fi({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new fi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}nr.BlurDirectionX=new Rt(1,0);nr.BlurDirectionY=new Rt(0,1);const Ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class PM extends lr{constructor(){super(),this.isOutputPass=!0,this.uniforms=ir.clone(Ga.uniforms),this.material=new rf({name:Ga.name,uniforms:this.uniforms,vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader}),this._fsQuad=new Mh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Js={bloomThreshold:.86,bloomStrength:.3,bloomRadius:.4,saturation:1.07,contrast:.2,vignette:.28},LM={uniforms:{tDiffuse:{value:null},uSaturation:{value:Js.saturation},uContrast:{value:Js.contrast},uVignette:{value:Js.vignette}},vertexShader:`
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
  `};function gu(s,t,e){const i=s.getDrawingBufferSize(new Rt),n=new mi(Math.max(1,i.x),Math.max(1,i.y),{type:pi,samples:4});n.texture.name="MetamongPostRT";const r=new AM(s,n);r.setPixelRatio(s.getPixelRatio()),r.setSize(window.innerWidth,window.innerHeight);const a=new RM(t,e);r.addPass(a);const o=new nr(new Rt(window.innerWidth,window.innerHeight),Js.bloomStrength,Js.bloomRadius,Js.bloomThreshold);r.addPass(o),r.addPass(new PM);const l=new sp(LM);r.addPass(l);let c={calls:0,triangles:0};const h=a.render.bind(a);return a.render=(d,f,u,v,x)=>{h(d,f,u,v,x),c={calls:d.info.render.calls,triangles:d.info.render.triangles}},{composer:r,bloom:o,grade:l,renderPass:a,get sceneStats(){return c},setSize(d,f){r.setPixelRatio(s.getPixelRatio()),r.setSize(d,f)},render(){r.render()},dispose(){r.dispose(),n.dispose()}}}const DM=["protagonist","somi","ongi","ditto_basic","disguises","buildings","nature"],IM=new M0;function NM(s){return s.colorSpace=we,s.magFilter=fe,s.minFilter=fe,s.generateMipmaps=!1,s.wrapS=ki,s.wrapT=ki,s.anisotropy=1,s}async function UM(s){const t=new URL("sprites/",document.baseURI),e=await fetch(new URL(`${s}.json`,t).href);if(!e.ok)throw new Error(`스프라이트 매니페스트 없음: ${s}.json (${e.status})`);const i=await e.json(),n=NM(await IM.loadAsync(new URL(`${s}_sheet.png`,t).href)),r=new Map;for(const a of i.frames)r.set(a.name,a);return{set:s,texture:n,frames:r,cell:i.cell,cols:i.grid[0],rows:i.grid[1],notes:i.notes||[]}}async function FM(){const s=await Promise.all(DM.map(UM)),t=new Map;for(const e of s)t.set(e.set,e);return t}const OM=.12,kM={tree:"log",rock:"stone",flower:"petal"},Ar={chance:.09,coinChance:.6,coin:5};var ri,rp,Pc,ap,ja,Lc;class BM{constructor({scenery:t,progress:e,drops:i,fx:n,audio:r}){Ne(this,ri);this.scenery=t,this.progress=e,this.drops=i,this.fx=n,this.audio=r,this.hooks={},this.cooldown=0,this.fullWarnAt=0,this.time=0}get inventory(){return this.progress.inventory}reset(){for(const t of this.scenery.nodes)S(this,ri,Lc).call(this,t,!1),t.berryT=22+Math.random()*26;this.drops&&this.drops.clear()}applySaved(t){if(this.reset(),!(!t||typeof t!="object"))for(const e of this.scenery.nodes){const i=t[e.key];i&&(this.scenery.applyNodeState(e,i),i.left>0&&!(i.respawn>0)&&(e.hitsLeft=Math.min(e.hitsNeeded,i.left)),e.respawn=Math.max(0,Number(i.respawn)||0),i.respawn>0&&(e.hitsLeft=e.hitsNeeded,e.harvested=!0))}}toJSON(){const t={};for(const e of this.scenery.nodes){const i=e.harvested?0:e.hitsLeft,n=e.harvested?Math.max(.1,Math.round(e.respawn*10)/10):0;i>=e.hitsNeeded&&n<=0||(t[e.key]={left:i,respawn:n})}return t}nearest(t,e=2.5){let i=null,n=e;for(const r of this.scenery.nodes){if(r.harvested)continue;const a=Math.hypot(r.x-t.x,r.z-t.z);a<n&&(i=r,n=a)}return i}nodeAt(t,e,i=3){let n=null,r=i;for(const a of this.scenery.nodes){if(a.harvested)continue;const o=Math.hypot(a.x-t,a.z-e);o<r&&(n=a,r=o)}return n}hit(t){if(!t||t.harvested)return{ok:!1,reason:"gone"};if(this.cooldown>0)return{ok:!1,reason:"cooldown"};this.cooldown=OM;const e=Ro[t.kind];if(!e)return{ok:!1,reason:"kind"};const i=Math.max(1,Math.round(e.cost*this.progress.staminaMultiplier(t.kind)));if(!this.progress.useStamina(i))return this.audio.sfxDeny(),this.hooks.toast?.("기운이 부족해요 — 열매를 먹거나 잠깐 쉬어요 🍓",2e3),this.fx.float("기운 부족",t.x,t.y+t.height*.8,t.z,"#b26a86"),{ok:!1,reason:"stamina"};t.hitsLeft=Math.max(0,t.hitsLeft-1-this.progress.hitsBonus(t.kind)),this.scenery.pop(t),this.fx.burst(t.x,t.y+t.height*.42,t.z,S(this,ri,rp).call(this,t),11,{spread:1.1,up:2}),this.audio.sfxHit(t.kind),this.hooks.onHit?.(t.kind,i);const n=kM[t.kind];if(n&&S(this,ri,Pc).call(this,n,1,t,t.y+t.height*.95),S(this,ri,ap).call(this,t),t.hitsLeft>0)return{ok:!0,harvest:!1};const r=hy(t.kind,t.frame),a={};for(const[l,c]of Object.entries(r)){const h=this.inventory.add(l,c),d=c-h;if(d>0&&(a[l]=d),h>0){const f=S(this,ri,ja).call(this,t.x,t.z);this.drops.spawn(l,h,f.x,f.z),this.hooks.toast?.(`가방이 가득 — ${xe[l].name} ${h}개를 바닥에 내려놨어요`,2400)}}let o=0;for(const[l,c]of Object.entries(a))this.fx.float(`+${c} ${xe[l].name}`,t.x,t.y+t.height*.9+o*.24,t.z,"#5f5470"),o++;return!Object.keys(a).length&&!Object.keys(r).length&&this.fx.float("…",t.x,t.y+.9,t.z,"#5f5470"),this.scenery.setHarvested(t,!0),t.respawn=60+Math.random()*30,t.hitsLeft=t.hitsNeeded,a.star?(this.audio.sfxRare(),this.hooks.toast?.(`별조각을 얻었어요! ⭐ ${dy(a)}`,2600)):this.audio.sfxPickup(),this.hooks.onHarvest?.(t.kind,a,t),this.hooks.save?.(),{ok:!0,harvest:!0,gains:a}}pickup(t){const e=xe[t.itemId];if(!e)return!0;if(this.inventory.roomFor(t.itemId)<=0)return this.time-this.fullWarnAt>4&&(this.fullWarnAt=this.time,this.hooks.toast?.("가방이 가득 찼어요 — 공방 창고에 맡겨 주세요 🎒",2400)),!1;const i=this.inventory.add(t.itemId,t.count),n=t.count-i;return n>0&&(this.fx.float(`+${n} ${e.name}`,t.x,t.y+.85,t.z,"#5f5470"),this.audio.sfxPickup(),this.hooks.onPickup?.(t.itemId,n)),!0}update(t,e,i,n){if(this.time+=t,this.cooldown=Math.max(0,this.cooldown-t),e>0){this.progress.restStamina(di.regenPerSecond*e);for(const r of this.scenery.nodes){if(r.harvested){r.respawn-=e,r.respawn<=0&&S(this,ri,Lc).call(this,r,!0);continue}if(r.berryT-=e,r.berryT>0)continue;if(this.drops.hasSource(r.key)){r.berryT=15+Math.random()*10;continue}const a=S(this,ri,ja).call(this,r.x,r.z),o=this.drops.spawn("berry",1,a.x,a.z,r.key);o&&(this.fx.burst(a.x,o.y+.5,a.z,"#ffb3c8",6,{spread:.8,up:1.2}),this.fx.float("열매가 톡",r.x,r.y+r.height*.9,r.z,"#c25f80")),r.berryT=45+Math.random()*30}}this.drops.update(t,n?i:null,r=>this.pickup(r))}}ri=new WeakSet,rp=function(t){return t.kind==="tree"?t.frame.startsWith("cherry")?"#ffc2d8":"#9ed08a":t.kind==="rock"?"#c8c8dc":"#ffb9d5"},Pc=function(t,e,i,n){const r=xe[t];if(!r)return 0;const a=this.inventory.add(t,e),o=e-a;if(o>0&&this.fx.float(`+${o} ${r.name}`,i.x,n,i.z,"#5f5470"),a>0){const l=S(this,ri,ja).call(this,i.x,i.z);this.drops.spawn(t,a,l.x,l.z),this.time-this.fullWarnAt>6&&(this.fullWarnAt=this.time,this.hooks.toast?.(`가방이 가득 — ${r.name} ${a}개를 바닥에 내려놨어요`,2400))}return o},ap=function(t){if(Math.random()>=Ar.chance)return;this.progress.bump("lucky",1);const e=t.y+t.height*.75;if(Math.random()<Ar.coinChance){this.progress.addCoins(Ar.coin),this.audio.sfxCoin?.(),this.fx.burst(t.x,e,t.z,"#ffd464",12,{spread:1.2,up:2.2}),this.fx.float(`🪙 +${Ar.coin} 숨은 동전`,t.x,e+.3,t.z,"#b38b3d"),this.hooks.toast?.("럭키! 나무 밑에서 숨은 섬 코인을 주웠어요 🪙 +5",2e3),this.hooks.onPickup?.("coin",Ar.coin);return}S(this,ri,Pc).call(this,"berry",1,t,e+1.5),this.audio.sfxRare?.(),this.fx.burst(t.x,e,t.z,"#ffe08a",14,{spread:1.3,up:2.4}),this.fx.float("🌟 황금 열매",t.x,e+.55,t.z,"#b2698f"),this.hooks.toast?.("럭키! 황금 열매가 톡 떨어졌어요 🌟",2e3)},ja=function(t,e){for(let i=0;i<8;i++){const n=Math.random()*Math.PI*2,r=.55+Math.random()*.5,a=t+Math.cos(n)*r,o=e+Math.sin(n)*r;if(!this.scenery.terrain||this.scenery.terrain.isWalkable(a,o))return{x:a,z:o}}return{x:t+.4,z:e+.4}},Lc=function(t,e){t.harvested=!1,t.hitsLeft=t.hitsNeeded,t.respawn=0,t.scale=1,t.targetScale=1,t.opacity=1,t.targetOpacity=1,t.mesh.scale.setScalar(1),t.mesh.material.opacity=1,t.mesh.material.transparent=!1,t.mesh.material.depthWrite=!0,t.mesh.rotation.z=0,t.sprout.visible=!1,t.stubTarget=0,t.stub.material.opacity=0,t.stub.visible=!1,t.collider&&(t.collider.r=t.baseR),e&&this.fx.burst(t.x,t.y+t.height*.35,t.z,"#cfeeb4",7,{spread:.9,up:1.4})};Object.values(Ti).reduce((s,t)=>s+t.weight,0);function zM(s){const t=Object.values(s).reduce((i,n)=>i+n,0);let e=Math.random()*t;for(const[i,n]of Object.entries(s))if(e-=n,e<=0)return Ti[i];return Ti.anchovy}var hi,op,lp,Tn;class GM{constructor({progress:t,audio:e,fx:i,scene:n,hud:r,hooks:a={}}){Ne(this,hi);this.progress=t,this.audio=e,this.fx=i,this.hud=r,this.hooks=a,this.state="idle",this.t=0,this.waitFor=2,this.window=qe.biteWindow,this.baitUsed=!1,this.lastResult=null,this.castFrom=new U,this.rings=[],S(this,hi,op).call(this,n)}get active(){return this.state!=="idle"}get waitingBite(){return this.state==="bite"}get canReel(){return this.state==="bite"||this.state==="wait"||this.state==="cast"}start({bait:t=!1}={}){if(this.state!=="idle")return{ok:!1,reason:"busy"};if(!this.progress.building("dock").done)return{ok:!1,reason:"dock"};if(this.progress.stamina<qe.stamina)return{ok:!1,reason:"stamina"};let e=!1;if(t){if(this.progress.supply("bait")<=0)return{ok:!1,reason:"no-bait"};this.progress.takeSupply("bait",1),e=!0}this.progress.useStamina(qe.stamina),this.progress.fishing.casts+=1,this.baitUsed=e,this.state="cast",this.t=0,this.lastResult=null,this.waitFor=qe.waitMin+Math.random()*(qe.waitMax-qe.waitMin),this.window=qe.biteWindow;const i=qe.spot;this.castFrom.set(i.x+.1,.9,i.z-.6),this.group.visible=!0,this.bobber.position.copy(this.castFrom),this.bobber.scale.setScalar(1);for(const n of this.rings)n.t=0,n.mesh.material.opacity=0;return this.audio?.sfxCast?.(),this.hud?.setFishing?.({state:"cast",label:"찌를 던지는 중…"}),S(this,hi,Tn).call(this),this.hooks.onStart?.(),{ok:!0,bait:e}}reel(){return this.active?this.state==="bite"?S(this,hi,lp).call(this):this.state==="wait"||this.state==="cast"?(this.state="lost",this.t=0,this.progress.fishing.misses+=1,this.audio?.sfxDeny?.(),this.hud?.setFishing?.({state:"lost",label:"찌를 너무 일찍 당겼어요"}),this.hooks.toast?.("찌를 너무 일찍 당겼어요 — 입질을 기다려 보세요 🎣",1900),S(this,hi,Tn).call(this),{ok:!1,reason:"early"}):{ok:!1,reason:"state"}:{ok:!1,reason:"idle"}}cancel(t=""){this.active&&(this.state="idle",this.t=0,this.group.visible=!1,this.hud?.setFishing?.(null),t&&this.hooks.toast?.(t,1800),S(this,hi,Tn).call(this))}update(t,e){if(!this.active)return;const i=qe.spot;if((e?Math.hypot(e.x-i.x,e.z-i.z):99)>qe.leash&&this.state!=="reel"&&this.state!=="lost"){this.cancel("찌에서 너무 멀어졌어요 — 낚싯줄을 회수했어요");return}this.t+=t;const r=new U(qe.castTo.x,.12,qe.castTo.z);if(this.state==="cast"){const o=Math.min(1,this.t/.55);this.bobber.position.lerpVectors(this.castFrom,r,o),this.bobber.position.y=this.castFrom.y+(r.y-this.castFrom.y)*o+Math.sin(o*Math.PI)*.85,o>=1&&(this.state="wait",this.t=0,this.audio?.sfxSplash?.(.55),this.fx?.burst(r.x,.12,r.z,"#e6fbff",10,{spread:1.1,up:1.4}),this.hud?.setFishing?.({state:"wait",label:"찌가 둥실둥실… 입질을 기다려요"}),S(this,hi,Tn).call(this))}else if(this.state==="wait")this.bobber.position.x=r.x+Math.sin(this.t*1.7)*.06,this.bobber.position.z=r.z+Math.cos(this.t*1.3)*.06,this.bobber.position.y=r.y+.02+Math.sin(this.t*3.1)*.026,this.bobber.rotation.z=Math.sin(this.t*2.1)*.12,this.t>=this.waitFor&&(this.state="bite",this.t=0,this.audio?.sfxSplash?.(1),this.audio?.sfxBite?.(),this.fx?.burst(r.x,.16,r.z,"#ffffff",14,{spread:1.3,up:2.2}),this.fx?.float("!",r.x,.95,r.z,"#ff6f8f"),this.hud?.setFishing?.({state:"bite",label:"입질! 지금 탭!",urgent:!0,ratio:1}),this.hud?.bite?.(),S(this,hi,Tn).call(this));else if(this.state==="bite"){const o=Math.max(0,this.window-this.t);this.bobber.position.set(r.x+(Math.random()-.5)*.1,r.y-.05+Math.sin(this.t*34)*.035,r.z+(Math.random()-.5)*.1),this.bobber.rotation.z=Math.sin(this.t*26)*.35,this.hud?.setFishing?.({state:"bite",label:"입질! 지금 탭!",urgent:!0,ratio:o/this.window}),this.t>=this.window&&(this.state="lost",this.t=0,this.progress.fishing.misses+=1,this.progress.gainExp("fish",qe.expMiss),this.audio?.sfxDeny?.(),this.hud?.setFishing?.({state:"lost",label:"놓쳤어요…"}),this.hooks.toast?.("놓쳤어요… 찌가 가라앉는 순간을 노려 보세요",1800),S(this,hi,Tn).call(this))}else if(this.state==="reel"||this.state==="lost"){const o=Math.min(1,this.t/.55);this.bobber.position.y=.06+(this.state==="reel"?o*.9:-o*.25),this.bobber.scale.setScalar(Math.max(.001,1-o)),o>=1&&(this.state="idle",this.group.visible=!1,this.bobber.scale.setScalar(1),this.hud?.setFishing?.(null),S(this,hi,Tn).call(this))}const a=this.bobber.position;for(const o of this.rings){o.t+=t,o.t>o.life&&(o.t=0);const l=o.t/o.life;o.mesh.position.set(a.x,.1,a.z);const c=.55+l*(this.state==="bite"?2.6:1.75);o.mesh.scale.set(c,1,c),o.mesh.material.opacity=(1-l)*(this.state==="bite"?.95:.72)}if(e){const o=this.line.geometry.attributes.position;o.setXYZ(0,e.x,(e.y||.7)+1,e.z),o.setXYZ(1,a.x,a.y+.05,a.z),o.needsUpdate=!0}}}hi=new WeakSet,op=function(t){this.group=new We,this.group.name="Fishing",this.group.visible=!1,t.add(this.group),this.bobber=new We;const e=new Zt(new wo(.14,14,12),new bi({color:"#fffaf6",toneMapped:!1})),i=new Zt(new uh(.1,.18,12),new bi({color:"#ff6f8f",toneMapped:!1}));i.position.y=.15,this.bobber.add(e,i),this.glow=new ui(new ii({map:qr(),color:"#dff6ff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),this.glow.scale.set(.95,.95,1),this.bobber.add(this.glow),this.group.add(this.bobber);const n=new yi(1,1);n.rotateX(-Math.PI/2);for(let a=0;a<3;a++){const o=new bi({map:vy(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}),l=new Zt(n,o);l.renderOrder=4,this.group.add(l),this.rings.push({mesh:l,t:a*.45,life:1.5})}const r=new Le().setFromPoints([new U(0,0,0),new U(0,0,0)]);this.line=new d0(r,new Ju({color:"#f6fdff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1})),this.line.frustumCulled=!1,this.group.add(this.line)},lp=function(){const t=this.baitUsed?iM:Object.fromEntries(Object.keys(Ti).map(r=>[r,Ti[r].weight])),e=zM(t),i=Math.round(e.size[0]+Math.random()*(e.size[1]-e.size[0])),n=this.bobber.position;if(e.id==="star"){const r=this.progress.inventory.add("star",1);r>0&&(this.progress.inventory.storage.star=(this.progress.inventory.stored("star")||0)+r)}else this.progress.addFish(e.id,1);return this.progress.fishing.catches+=1,e.id!=="star"&&(this.progress.fishing.best=Math.max(this.progress.fishing.best,i)),this.state="reel",this.t=0,this.lastResult={fish:e,size:i},this.fx?.burst(n.x,.35,n.z,e.tint||"#dff6ff",16,{spread:1.5,up:2.6}),this.fx?.float(`${e.icon} ${e.name}`,n.x,1.15,n.z,"#5f5470"),this.audio?.sfxReel?.(),e.rare&&this.audio?.sfxRare?.(),this.hooks.onCatch?.(e,i,{bait:this.baitUsed}),this.hud?.setFishing?.({state:"reel",label:`${e.name} ${rM(e.id,i)} 획득!`}),S(this,hi,Tn).call(this),{ok:!0,fish:e,size:i}},Tn=function(){const t=this.hud;t?.setAction&&this.state!=="idle"&&(this.state==="bite"?t.setAction({active:!0,icon:"🎣",label:"입질! 탭!"}):this.state==="cast"||this.state==="wait"?t.setAction({active:!0,icon:"🎣",label:"회수하기"}):t.setAction({active:!1,icon:"🎣",label:"낚시 중"}))};const HM=16,VM=.95;class WM{constructor(t,e){this.terrain=e,this.group=new We,this.group.name="Drops",t.add(this.group),this.items=[],this.time=0}hasSource(t){return!!t&&this.items.some(e=>e.sourceKey===t)}spawn(t,e,i,n,r=null){const a=xe[t]?t:"berry";if(r&&this.hasSource(r))return null;for(;this.items.length>=HM;)this.remove(this.items[0]);const o=Math.max(this.terrain.groundY(i,n),.02),l=new ui(new ii({map:py(a),transparent:!0,depthWrite:!1,toneMapped:!1}));l.scale.set(.44,.44,1),l.position.set(i,o+.36,n),l.renderOrder=3;const c=new ui(new ii({map:qr(),color:xe[a].tint,transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1,blending:Kn}));c.scale.set(.95,.95,1),c.position.copy(l.position),c.position.y-=.04,c.renderOrder=2;const h={itemId:a,count:Math.max(1,Math.floor(e)||1),x:i,z:n,y:o,sprite:l,halo:c,sourceKey:r,age:Math.random()*6};return l.userData.drop=h,this.group.add(c),this.group.add(l),this.items.push(h),h}remove(t){const e=this.items.indexOf(t);e<0||(this.items.splice(e,1),t.sprite.material.dispose(),t.halo.material.dispose(),this.group.remove(t.sprite),this.group.remove(t.halo))}update(t,e,i){this.time+=t;for(let n=this.items.length-1;n>=0;n--){const r=this.items[n];r.age+=t;const a=Math.sin(this.time*2.3+r.age)*.07;r.sprite.position.y=r.y+.38+a,r.halo.position.y=r.y+.32+a*.6;const o=.62+Math.sin(this.time*3.1+r.age)*.18;r.halo.material.opacity=o;const l=.9+Math.sin(this.time*2.6+r.age)*.08;if(r.halo.scale.set(l,l,1),!e)continue;Math.hypot(r.x-e.x,r.z-e.z)<=VM&&(i?i(r):!0)!==!1&&this.remove(r)}}rayTargets(){return this.items.map(t=>t.sprite)}clear(){for(let t=this.items.length-1;t>=0;t--)this.remove(this.items[t])}}const Gs=220;class $M{constructor(t,e){this.scene=t,this.particles=Array.from({length:Gs},()=>({x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,color:new ut("#ffffff")})),this.cursor=0;const i=new Float32Array(Gs*3),n=new Float32Array(Gs*3);for(let o=0;o<Gs;o++)i[o*3+1]=-999;const r=new Le;r.setAttribute("position",new gi(i,3)),r.setAttribute("color",new gi(n,3));const a=new hh({size:.17,map:xy(),vertexColors:!0,transparent:!0,opacity:.96,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0});this.points=new Qu(r,a),this.points.name="GatherFx",this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.layer=g("div",{class:"float-layer"}),e.append(this.layer),this.texts=[],this.v=new U}burst(t,e,i,n="#ffd7e7",r=10,a={}){const o=a.spread??1.6,l=a.up??2.3,c=a.size??1;for(let h=0;h<r;h++){const d=this.particles[this.cursor];this.cursor=(this.cursor+1)%Gs;const f=Math.random()*Math.PI*2,u=Math.random()*o;d.x=t+Math.cos(f)*.12,d.y=e+.25+Math.random()*.5,d.z=i+Math.sin(f)*.12,d.vx=Math.cos(f)*u,d.vz=Math.sin(f)*u,d.vy=.6+Math.random()*l,d.max=.45+Math.random()*.4,d.life=d.max,d.size=c*(.7+Math.random()*.6),d.color.set(n),d.color.offsetHSL(0,0,(Math.random()-.5)*.12)}}float(t,e,i,n,r="#6b5878"){const a=g("div",{class:"float-text",style:{color:r}},t);for(this.layer.append(a),this.texts.push({el:a,pos:new U(e,i,n),age:0,life:1.15});this.texts.length>14;)this.texts.shift().el.remove()}update(t,e){const i=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array;for(let o=0;o<Gs;o++){const l=this.particles[o],c=o*3;if(l.life<=0){i[c+1]!==-999&&(i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0);continue}if(l.life=Math.max(0,l.life-t),l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t,l.vy-=5.4*t,l.vx*=1-t*1.6,l.vz*=1-t*1.6,l.y<.02&&(l.y=.02,l.vy*=-.32),l.life<=0){i[c+1]=-999,n[c]=n[c+1]=n[c+2]=0;continue}const h=Math.min(1,l.life/l.max);i[c]=l.x,i[c+1]=l.y,i[c+2]=l.z,n[c]=l.color.r*h,n[c+1]=l.color.g*h,n[c+2]=l.color.b*h}if(this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,!this.texts.length)return;const r=window.innerWidth,a=window.innerHeight;for(let o=this.texts.length-1;o>=0;o--){const l=this.texts[o];if(l.age+=t,l.age>=l.life){l.el.remove(),this.texts.splice(o,1);continue}const c=l.age/l.life;this.v.copy(l.pos),this.v.y+=.55+c*.85,this.v.project(e);const h=(this.v.x*.5+.5)*r,d=(-this.v.y*.5+.5)*a;l.el.style.transform=`translate(-50%, -50%) translate(${h.toFixed(1)}px, ${d.toFixed(1)}px)`,l.el.style.opacity=String(Math.min(1,(1-c)*2.4)),l.el.style.fontSize=`${13-c*1.5}px`}}clear(){for(const t of this.particles)t.life=0,t.y=-999;for(const t of this.texts)t.el.remove();this.texts=[]}}function XM(s,t){const e=Yr[t];if(!e)return{ok:!1,reason:"recipe"};const i=s.canCook(t);if(!i.ok)return{ok:!1,reason:i.reason,lack:i.lack};for(const[n,r]of Object.entries(e.need||{}))s.inventory.take(n,r);for(const[n,r]of Object.entries(e.fish||{}))s.takeFish(n,r);for(const[n,r]of Object.entries(e.crop||{}))s.takeCrop(n,r);return s.restStamina(e.stamina),s.markCooked(t),s.gainExp("cook",e.exp),e.buff>0&&s.setBuff("golden",e.buff),{ok:!0,recipe:e}}function vu(s){const t=[];for(const[e,i]of Object.entries(s.need||{}))t.push({id:e,n:i,source:"bag"});for(const[e,i]of Object.entries(s.fish||{}))t.push({id:e,n:i,source:"fish"});for(const[e,i]of Object.entries(s.crop||{}))t.push({id:e,n:i,source:"crop"});return t}function to(s){return Math.max(0,Math.floor(Number(nM[s])||0))}function qM(s){const t=[];for(const e of Sc){const i=s.inventory.count(e),n=to(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"bag"})}for(const e of ds){const i=s.fishCount(e),n=to(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"fish"})}for(const e of Qf){const i=s.cropCount(e),n=to(e);i>0&&n>0&&t.push({id:e,n:i,unit:n,total:i*n,source:"crop"})}return t}function YM(s,t,e=1){const i=to(t);if(!i)return{ok:!1,reason:"nosell"};const n=s.inventory.count(t),r=s.fishCount(t),a=s.cropCount(t),o=n+r+a;if(o<=0)return{ok:!1,reason:"empty"};const l=e==="all"?o:Math.max(1,Math.floor(Number(e)||1)),c=Math.min(o,l);let h=c;const d=Math.min(r,h);d>0&&(s.takeFish(t,d),h-=d);const f=Math.min(a,h);f>0&&(s.takeCrop(t,f),h-=f),h>0&&s.inventory.take(t,h);const u=c*i;return s.addCoins(u),{ok:!0,count:c,coin:u}}function KM(s,t){const e=Zs[t];return e?s.supply(t)>=99?{ok:!1,reason:"full"}:s.spendCoins(e.price)?(s.addSupply(t,1),{ok:!0,good:e}):{ok:!1,reason:"coin"}:{ok:!1,reason:"nogood"}}function ZM(s){return Pr.map(t=>({...Zs[t],owned:s.supply(t),affordable:s.coins>=Zs[t].price}))}const Ni=(s,t="")=>g("span",{class:`lchip ${t}`},s);var he,Dc,cn,Ic,cp,hp,dp,up,fp;class JM{constructor(t){Ne(this,he);this.game=t,this.codexTab="ditto",this.shopTab="sell"}codex(){const t=S(this,he,Dc).call(this,[{id:"ditto",label:"메타몽"},{id:"fish",label:"물고기"},{id:"cook",label:"요리"},{id:"farm",label:"농사"},{id:"cat",label:"고양이"}],this.codexTab,n=>{this.codexTab=n,this.game.openCodex()}),e=g("div",{class:"codex-tabs"},t);return this.codexTab==="fish"?e.append(S(this,he,hp).call(this)):this.codexTab==="cook"?e.append(S(this,he,dp).call(this)):this.codexTab==="farm"?e.append(S(this,he,up).call(this)):this.codexTab==="cat"?e.append(S(this,he,fp).call(this)):e.append(S(this,he,cp).call(this)),{title:"📔 도감",subtitle:{ditto:"점 눈 두 개만 남은 어설픈 위장들",fish:"부두에서 낚은 물고기 기록",cook:"공방에서 만들어 본 요리",farm:"텃밭에서 기른 작물 기록",cat:"솜이와 옹이의 마음"}[this.codexTab]||"",body:e,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}rank(){const t=this.game.progress,e=t.skills,i=e.title(),n=e.rows(),r=g("div",{},g("div",{class:"title-medal"},g("span",{class:"ico"},i.icon),g("div",{},g("div",{class:"nm"},i.name),g("div",{class:"meta"},`생활 EXP 합계 ${i.total}`)),i.next?Ni(`다음 ${i.next.name}까지 ${i.toNext}`,"warm"):Ni("최고 칭호","ok")),S(this,he,cn).call(this,i.pct,"life"),g("div",{class:"section-label"},"5대 생활 스킬"),g("div",{class:"skill-list"},...n.map(o=>g("div",{class:"skill-row"},g("span",{class:"sico"},o.icon),g("div",{class:"smain"},g("div",{class:"nm"},`${o.name} · ${o.rank}`),S(this,he,cn).call(this,o.pct),g("div",{class:"meta"},`${o.exp} EXP${o.next?` · ${o.next.name}까지 ${o.toNext}`:" · 최고 랭크"}`)),g("span",{class:"lv"},`Lv.${o.level}`)))),g("div",{class:"section-label"},"승급 조건"),g("div",{class:"hint"},Xn.map(o=>`${o.name} ${o.exp}`).join(" · ")),g("div",{class:"section-label"},"경험치"),g("div",{class:"hint"},"채집 +6 · 낚시 성공 +14 · 요리 +30 · 돌보기 +10 (간식 +12) · 농사 심기 +6 / 물주기 +3 / 수확 +16"),g("div",{class:"hint"},"5개 스킬 EXP 합계가 섬 생활 칭호를 정해요.")),a=t.claimableAchievements;return{title:"🌱 생활 랭크",subtitle:`${i.name} · 총 ${i.total} EXP`,body:r,actions:[{label:`🏆 업적${a?` (보상 ${a})`:""}`,kind:"ghost",onClick:()=>this.game.openAchievements()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}questList(){const e=this.game.progress.questRows(),i=g("div",{class:"quest-list"});if(!e.length)return i.append(g("div",{class:"hint"},"오늘의 의뢰를 준비 중이에요.")),i;for(const n of e){const r=g("button",{class:`mini quest-claim ${n.done&&!n.claimed?"on":""}`,type:"button"},n.claimed?"완료":n.done?"보상 받기":`${n.progress}/${n.need}`);(n.claimed||!n.done)&&(r.disabled=!0),r.addEventListener("click",()=>this.game.claimQuest(n.id)),i.append(g("div",{class:`quest-row ${n.done?"done":""} ${n.claimed?"claimed":""}`},g("span",{class:"qico"},n.icon),g("div",{class:"qmain"},g("div",{class:"nm"},n.label),S(this,he,cn).call(this,n.pct),g("div",{class:"meta"},`🪙 ${n.reward.coin}${n.reward.star?` · ⭐ ${n.reward.star}`:""} · ${n.progress}/${n.need}`)),r))}return i}quests(){const t=this.game.progress,e=t.questRows(),i=e.filter(n=>n.done&&!n.claimed).length;return{title:"📋 오늘의 의뢰",subtitle:`Day ${t.quests.day} · ${e.length}건${i?` · 받을 보상 ${i}건`:""}`,body:g("div",{},g("div",{class:"hint"},"Day 가 바뀌면 새 의뢰 두 건이 자동으로 생겨요. 달성하면 코인과 별조각을 받아요."),this.questList(),g("div",{class:"section-label"},"보유"),g("div",{class:"hint"},`🪙 섬 코인 ${t.coins}`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}vending(){const t=this.game.progress,e=S(this,he,Dc).call(this,[{id:"sell",label:"팔기"},{id:"buy",label:"사기"}],this.shopTab,n=>{this.shopTab=n,this.game.openVending()}),i=g("div",{},g("div",{class:"wallet"},g("span",{},"🪙"),g("strong",{},String(t.coins)),g("span",{class:"hint"},"섬 코인")),e);if(this.shopTab==="buy"){const n=ZM(t),r=l=>{const c=g("button",{class:`mini buy ${l.affordable?"on":""}`,type:"button"},`🪙 ${l.price}`);return l.affordable||(c.disabled=!0),c.addEventListener("click",()=>this.game.buyGood(l.id)),g("div",{class:"shop-row"},g("span",{class:"gico"},l.icon),g("div",{class:"gmain"},g("div",{class:"nm"},`${l.name}${l.owned?` · ${l.owned}개 보유`:""}`),g("div",{class:"meta"},l.desc)),c)},a=n.filter(l=>l.kind!=="seed"),o=n.filter(l=>l.kind==="seed");i.append(g("div",{class:"section-label"},"사기")),i.append(g("div",{class:"shop-list"},...a.map(r))),i.append(g("div",{class:"section-label"},"🌱 씨앗 (북서 텃밭에 심어요)")),i.append(g("div",{class:"shop-list"},...o.map(r))),t.supply("ade")>0&&i.append(g("button",{class:"btn soft wide",type:"button",onclick:()=>this.game.drinkAde()},`🥤 반짝 에이드 마시기  ·  기력 +${Cc}  (${t.supply("ade")}개)`)),i.append(g("div",{class:"hint"},"츄르는 고양이 돌보기에서, 별빛 미끼는 낚시할 때 쓰고, 씨앗은 텃밭에서 심어요."))}else{const n=qM(t),r=g("div",{class:"shop-list"});n.length||r.append(g("div",{class:"hint"},"팔 수 있는 재료나 물고기가 없어요."));for(const a of n){const o=g("button",{class:"mini",type:"button"},"1개");o.addEventListener("click",()=>this.game.sellItem(a.id,1));const l=g("button",{class:"mini on",type:"button"},"전부");l.addEventListener("click",()=>this.game.sellItem(a.id,"all")),r.append(g("div",{class:"shop-row"},g("span",{class:"gico"},dn(a.id)),g("div",{class:"gmain"},g("div",{class:"nm"},`${hn(a.id)} × ${a.n}`),g("div",{class:"meta"},`개당 🪙 ${a.unit}${a.source==="fish"?" · 낚시 바구니":a.source==="crop"?" · 텃밭 바구니":""}`)),g("div",{class:"shop-btns"},o,l)))}i.append(g("div",{class:"section-label"},"팔기"),r,g("div",{class:"hint"},"전부 팔면 그 재료·물고기·작물을 한 번에 정리해요."))}return{title:"🥤 메타몽 자판기",subtitle:"팔고, 사고 — 섬 코인이 오가는 곳",body:i,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cooking(){const t=this.game.progress,e=g("div",{class:"recipe-list"});for(const i of Fa){const n=Yr[i],r=t.canCook(i),a=vu(n).map(l=>{const c=l.source==="fish"?t.fishCount(l.id):l.source==="crop"?t.cropCount(l.id):t.inventory.count(l.id);return g("span",{class:`lchip ${c>=l.n?"ok":"lack"}`},`${dn(l.id)} ${hn(l.id)} ${c}/${l.n}`)}),o=g("button",{class:`mini cook ${r.ok?"on":""}`,type:"button"},"요리");r.ok||(o.disabled=!0),o.addEventListener("click",()=>this.game.cook(i)),e.append(g("div",{class:"recipe-row"},g("span",{class:"rico"},n.icon),g("div",{class:"rmain"},g("div",{class:"nm"},`${n.name} · 기력 +${n.stamina}${n.buff?" + 버프":""}`),g("div",{class:"chips"},...a),g("div",{class:"meta"},n.desc)),g("div",{class:"shop-btns"},o)))}return{title:"🍳 공방 요리",subtitle:`지금 기력 ${Math.round(t.stamina)} / 100`,body:g("div",{},g("div",{class:"hint"},"재료와 물고기를 넣고 요리하면 기력이 회복돼요. 황금 정식은 60초 동안 채집이 가벼워져요."),e,g("div",{class:"section-label"},"보유 재료"),g("div",{class:"chips"},...["log","stone","petal","star","berry"].map(i=>Ni(`${dn(i)} ${hn(i)} ${t.inventory.count(i)}`)),...ds.filter(i=>t.fishCount(i)>0).map(i=>Ni(`${dn(i)} ${hn(i)} ${t.fishCount(i)}`)),...hs.filter(i=>t.cropCount(i)>0).map(i=>Ni(`${Yt[i].icon} ${Yt[i].name} ${t.cropCount(i)}`)))),actions:[{label:"🔨 도구 강화",kind:"ghost",onClick:()=>this.game.openUpgrade()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}upgrade(){const t=this.game.progress,e=g("div",{class:"tool-list"});for(const i of $s){const n=t.toolInfo(i),r=t.canUpgrade(i),a=Object.entries(n.cost).map(([c,h])=>{const d=c==="coin"?t.coins:t.inventory.count(c),f=c==="coin"?`🪙 ${h}`:`${dn(c)} ${hn(c)} ${h}`;return Ni(`${f} (${d})`,d>=h?"ok":"lack")}),o=g("button",{class:`mini up ${r.ok?"on":""}`,type:"button"},n.maxed?"최대":`Lv.${n.level+1} 강화`);r.ok||(o.disabled=!0),o.addEventListener("click",()=>this.game.upgradeTool(i));const l=n.level>=n.max?"더 강화할 수 없어요":i==="water"?`한 번에 ${["십자 5칸","3×3 9칸"][n.level-1]}에 물주기`:`기력 소모 ×${n.def.stamina[n.level].toFixed(2)}${n.def.hits[n.level]?" · 타격 +1":""}`;e.append(g("div",{class:"tool-row"},g("span",{class:"tico"},n.def.icon),g("div",{class:"tmain"},g("div",{class:"nm"},`${n.def.name} · Lv.${n.level}${n.maxed?" (최대)":""}`),g("div",{class:"chips"},...a),g("div",{class:"meta"},l)),g("div",{class:"shop-btns"},o)))}return{title:"🪓 도구 강화",subtitle:"재료와 코인을 넣으면 한 번에 더 많이 캐요",body:g("div",{},g("div",{class:"hint"},"도끼는 나무, 곡괭이는 바위에 적용돼요. 물뿌리개는 레벨이 오르면 한 번에 더 넓게 물을 줘요."),e,g("div",{class:"section-label"},"보유"),g("div",{class:"hint"},`🪙 ${t.coins} · 🪵 ${t.inventory.count("log")} · 🪨 ${t.inventory.count("stone")} · ⭐ ${t.inventory.count("star")}`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cat(t){const e=this.game.progress,i=ei.find(u=>u.id===t)||ei[0],n=e.catRow(i.id),r=this.game.cats.find(u=>u.id===i.id),a=n.level,o=g("div",{class:"cat-portrait big tap"});S(this,he,Ic).call(this,o,i.set,5),o.addEventListener("click",()=>this.game.petCat(i.id));const l=g("button",{class:`btn soft wide ${r&&r.cd.pet>0?"wait":""}`,type:"button"},r&&r.cd.pet>0?`🤲 쓰다듬기 · ${r.cd.pet.toFixed(1)}초 뒤에 또`:`🤲 쓰다듬기  ·  호감도 +${ti.pet.aff}`);r&&r.cd.pet>0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.petCat(i.id));const c=g("div",{class:"snack-row"});for(const u of ti.snackOrder){const v=ti.snacks[u],x=u==="churu"?e.supply("churu"):u==="berry"?e.inventory.count("berry"):e.fishCount("anchovy"),p=g("button",{class:`mini snack ${x>0&&r&&r.cd.snack<=0?"on":""}`,type:"button"},`${v.icon} ${v.name} (${x})`);(x<=0||!r||r.cd.snack>0)&&(p.disabled=!0),p.addEventListener("click",()=>this.game.feedCat(i.id,u)),c.append(p)}let h;if(n.canFollow){const u=g("button",{class:`switch wide ${n.follow?"on":""}`,type:"button","aria-label":"따라오기"},n.follow?"따라오는 중":"따라오기");u.addEventListener("click",()=>this.game.toggleFollow(i.id)),h=g("div",{class:"row"},g("div",{},g("div",{class:"label"},"따라오기"),g("div",{class:"hint"},"섬을 걸으면 뒤따라와요")),u)}else h=g("div",{class:"hint"},`따라오기는 호감도 Lv.${ti.followLevel}부터 열려요 (지금 Lv.${a}).`);const d=Object.entries(ti.gifts).map(([u,v])=>{const x=n.gifts.includes(Number(u)),p=Object.entries(v).map(([m,M])=>`${dn(m)} ${hn(m)} ${M}`).join(" · ");return g("div",{class:`gift-row ${x?"got":""}`},g("span",{},`Lv.${u}`),g("span",{class:"meta"},p),g("span",{class:"mini"},x?"받음":"대기"))}),f=g("div",{},g("div",{class:"cat-head"},o,g("div",{class:"cat-info"},g("div",{class:"nm"},`${i.name} · Lv.${n.level}`),S(this,he,cn).call(this,n.pct,"care"),g("div",{class:"meta"},n.nextAt?`호감도 ${n.aff} / ${n.nextAt} (다음 Lv.${n.level+1}까지 ${n.toNext})`:`호감도 ${n.aff} · 최고 레벨`),g("div",{class:"say"},ti.dialogue[i.id][a-1]))),g("div",{class:"section-label"},"돌보기"),l,g("div",{class:"section-label"},"간식"),c,g("div",{class:"section-label"},"함께 걷기"),h,g("div",{class:"section-label"},"보답 선물"),g("div",{class:"gift-list"},...d));return{title:`🐱 ${i.name} 돌보기`,subtitle:n.follow?"지금 따라오고 있어요":"쓰다듬고 간식을 주면 마음이 열려요",body:f,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}he=new WeakSet,Dc=function(t,e,i){const n=g("div",{class:"tabbar"});for(const r of t){const a=g("button",{class:`tab ${r.id===e?"on":""}`,type:"button","data-tab":r.id},r.label);a.addEventListener("click",()=>i(r.id)),n.append(a)}return n},cn=function(t,e=""){return g("div",{class:`progress-line ${e}`},g("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},Ic=function(t,e,i){const n=this.game.atlases.get(e);n&&(t.style.backgroundImage=`url("${new URL(`sprites/${e}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n.cols*100}% ${n.rows*100}%`,t.style.backgroundPosition=`${0/Math.max(1,n.cols-1)*100}% ${(i-1)/Math.max(1,n.rows-1)*100}%`)},cp=function(){const t=this.game.state.discovered,e=g("div",{class:"codex-grid"});for(const n of Ln){const r=t.includes(n.id),a=g("div",{class:`codex-thumb ${r?"":"locked"}`},r?"":"· ? ·");r&&n.thumb&&this.game.paintDittoThumb(a,n.thumb),e.append(g("div",{class:`codex-card ${r?"":"unknown"}`},a,g("div",{class:"name"},r?n.name:"아직 못 찾음"),g("div",{class:"meta"},r?n.flavor:"섬 어딘가에서 돌멩이인 척하고 있어요")))}const i=Math.round(t.length/Ln.length*100);return g("div",{},S(this,he,cn).call(this,i),g("div",{class:"hint"},`발견 ${t.length} / ${Ln.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),g("div",{class:"section-label"},"이번 섬의 도감"),e)},hp=function(){const t=this.game.progress,e=g("div",{class:"fish-grid"});for(const n of ds){const r=Ti[n],a=t.fishCount(n),o=a>0;e.append(g("div",{class:`fish-card ${o?"":"locked"} ${r.rare?"rare":""}`},g("span",{class:"fico"},o?r.icon:"❔"),g("div",{class:"fmain"},g("div",{class:"nm"},o?r.name:"아직 못 봄"),g("div",{class:"meta"},o?r.desc:"부두에서 낚시하면 만날 수 있어요")),g("div",{class:"fright"},o?Ni(`${a}마리`,"ok"):Ni("미등록"))))}const i=ds.filter(n=>t.fishCount(n)>0).length;return g("div",{},S(this,he,cn).call(this,Math.round(i/ds.length*100)),g("div",{class:"hint"},`등록 ${i} / ${ds.length}종 · 낚시 ${t.fishing.casts}회 · 성공 ${t.fishing.catches}회 · 놓침 ${t.fishing.misses}회`),g("div",{class:"section-label"},"어종"),e,g("div",{class:"hint"},"별빛 미끼를 쓰면 희귀 어종(별빛해파리·황금잉어) 확률이 올라가요 🪱"))},dp=function(){const t=this.game.progress,e=g("div",{class:"recipe-list"});let i=0;for(const n of Fa){const r=Yr[n],a=t.cookedCount(n);a>0&&(i+=1);const o=vu(r).map(l=>`${dn(l.id)} ${hn(l.id)} ${l.n}`).join(" · ");e.append(g("div",{class:`recipe-card ${a>0?"":"locked"}`},g("span",{class:"rico"},r.icon),g("div",{class:"rmain"},g("div",{class:"nm"},r.name),g("div",{class:"meta"},o),g("div",{class:"meta"},r.stamina>=100?`기력 ${r.stamina} 회복 + ${go.seconds}초 버프`:`기력 +${r.stamina}`)),g("div",{class:"fright"},a>0?Ni(`${a}번`,"ok"):Ni("미등록"))))}return g("div",{},S(this,he,cn).call(this,Math.round(i/Fa.length*100)),g("div",{class:"hint"},`만든 요리 ${i} / ${Fa.length}종 · 공방을 복구하면 요리할 수 있어요`),g("div",{class:"section-label"},"레시피"),e)},up=function(){const t=this.game.progress,e=g("div",{class:"recipe-list"});let i=0;for(const n of hs){const r=Yt[n],a=t.cropCount(n);t.count("crop"),a>0&&(i+=1);const o=Bi[r.seedId];e.append(g("div",{class:`recipe-card ${a>0?"":"locked"}`},g("span",{class:"rico"},a>0?r.icon:"❔"),g("div",{class:"rmain"},g("div",{class:"nm"},r.name),g("div",{class:"meta"},`${o.icon} ${o.name} ${o.price}코인 · ${Math.round(r.grow)}초 · ${r.yield[0]}~${r.yield[1]}개`),g("div",{class:"meta"},a>0?r.desc:"텃밭에서 기르면 여기에 기록돼요")),g("div",{class:"fright"},a>0?Ni(`바구니 ${a}`,"ok"):Ni("미등록"))))}return g("div",{},S(this,he,cn).call(this,Math.round(i/hs.length*100)),g("div",{class:"hint"},`바구니에 담긴 작물 ${i} / ${hs.length}종 · 지금까지 수확 ${t.count("crop")}번 · 심은 씨앗 ${t.count("plant")}번`),g("div",{class:"section-label"},"작물"),e,g("div",{class:"hint"},`수확물은 가방 8칸을 차지하지 않고 텃밭 바구니에 담겨요. 자판기 [팔기] 에서 개당 ${hs.map(n=>`${Yt[n].name} ${Yt[n].price}`).join(" · ")} 코인에 팔려요.`))},fp=function(){const t=this.game.progress,e=g("div",{class:"cat-grid"});for(const i of ei){const n=t.catRow(i.id),r=g("div",{class:"cat-portrait"});S(this,he,Ic).call(this,r,i.set,5),e.append(g("div",{class:"cat-card"},r,g("div",{class:"cmain"},g("div",{class:"nm"},`${i.name} · Lv.${n.level}`),S(this,he,cn).call(this,n.pct,"care"),g("div",{class:"meta"},n.nextAt?`호감도 ${n.aff} / ${n.nextAt}`:`호감도 ${n.aff} · 최고 레벨`),g("div",{class:"meta"},ti.dialogue[i.id][n.level-1]))))}return g("div",{},g("div",{class:"hint"},"쓰다듬고 간식을 주면 호감도가 올라요. Lv.3부터 [따라오기] 를 켤 수 있어요."),e)};const zi=new Map;function Lo(s){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");return e.imageSmoothingEnabled=!1,{c:t,ctx:e}}function Do(s,t=!0){const e=new jn(s);return e.colorSpace=we,e.magFilter=t?fe:Ye,e.minFilter=t?fe:Ye,e.generateMipmaps=!1,e.needsUpdate=!0,e}function vo(s=!1){const t=`soil:${s?"wet":"dry"}`;if(zi.has(t))return zi.get(t);const{c:e,ctx:i}=Lo(24),n=s?["#7a5433","#6b482a","#5d3f24"]:["#a87a4e","#9a6d43","#8a5f39"],r=s?"#8a6039":"#bb8d5c",a=s?"#54381f":"#7a5331";i.fillStyle=n[0],i.fillRect(0,0,24,24);for(let h=2;h<24;h+=6)i.fillStyle=a,i.fillRect(0,h,24,2),i.fillStyle=n[2],i.fillRect(0,h+2,24,1),i.fillStyle=n[1],i.fillRect(0,h-1,24,1);let o=12345;const l=()=>(o=o*1103515245+12345&2147483647,o/2147483647);for(let h=0;h<34;h++){const d=Math.floor(l()*24),f=Math.floor(l()*24);i.fillStyle=l()<.55?r:a,i.fillRect(d,f,l()<.3?2:1,1)}i.fillStyle=s?"rgba(40,24,12,0.22)":"rgba(220,180,130,0.18)",i.fillRect(0,0,24,1),i.fillRect(0,23,24,1),i.fillRect(0,0,1,24),i.fillRect(23,0,1,24);const c=Do(e);return zi.set(t,c),c}function Cl(s,t,e,i,n,r="#4f8f45",a="#69b45a",o="#8fd47a"){s.fillStyle=r,s.fillRect(t,e,1,n),s.fillStyle=a,s.fillRect(t-i,e+1,i,2),s.fillRect(t+1,e+2,i,2),s.fillStyle=o,s.fillRect(t-i-1,e,2,2),s.fillRect(t+1+i-1,e+1,2,2)}function QM(s){s.fillStyle="#6d4a2c",s.fillRect(8,19,8,3),s.fillStyle="#8a6039",s.fillRect(9,18,6,1),s.fillStyle="#f4e0a8",s.fillRect(11,17,1,1),s.fillRect(13,18,1,1)}function xo(s,t){const e=`crop:${s}:${t}`;if(zi.has(e))return zi.get(e);const{c:i,ctx:n}=Lo(24);if(t<=0)QM(n);else if(t===1)Cl(n,11,13,2,7),n.fillStyle="#8fd47a",n.fillRect(11,11,2,2);else if(t===2)Cl(n,11,9,3,10),n.fillStyle="#69b45a",n.fillRect(6,11,3,3),n.fillRect(14,12,3,3),s==="strawberry"?(n.fillStyle="#fff6fb",n.fillRect(8,8,2,2),n.fillRect(15,10,2,2),n.fillStyle="#ffe0ef",n.fillRect(9,9,1,1)):s==="radish"?(n.fillStyle="#f2f7e8",n.fillRect(13,17,3,3),n.fillStyle="#dbe6c9",n.fillRect(13,19,3,1)):s==="rice"?(n.fillStyle="#4f8f45",n.fillRect(9,15,1,6),n.fillRect(13,14,1,7),n.fillStyle="#8fd47a",n.fillRect(7,12,1,6),n.fillRect(15,13,1,6),n.fillStyle="#c9e39a",n.fillRect(8,10,1,4),n.fillRect(14,11,1,4)):(n.fillStyle="#ffd77a",n.fillRect(8,15,3,3),n.fillStyle="#f0ab3c",n.fillRect(8,17,3,1));else if(s==="strawberry"){Cl(n,11,6,4,8);const a=(o,l)=>{n.fillStyle="#e8476a",n.fillRect(o,l,3,4),n.fillStyle="#ff6f8f",n.fillRect(o,l+1,2,2),n.fillStyle="#ffd0dc",n.fillRect(o,l+1,1,1),n.fillStyle="#4f8f45",n.fillRect(o+1,l-1,1,1)};a(6,13),a(11,16),a(15,12)}else if(s==="radish")n.fillStyle="#4f8f45",n.fillRect(11,4,2,13),n.fillStyle="#69b45a",n.fillRect(5,7,7,4),n.fillRect(13,9,7,4),n.fillStyle="#8fd47a",n.fillRect(4,5,5,3),n.fillRect(15,7,5,3),n.fillRect(8,2,4,4),n.fillRect(10,14,5,3),n.fillStyle="#c6ecb0",n.fillRect(6,8,2,1),n.fillRect(16,10,2,1),n.fillStyle="#bcd3a2",n.fillRect(10,17,4,3),n.fillStyle="#dfecc8",n.fillRect(11,17,2,2);else if(s==="rice"){n.fillStyle="#3f7a3c",n.fillRect(8,14,1,8),n.fillRect(12,13,1,9),n.fillRect(16,15,1,7),n.fillStyle="#5f9c4a",n.fillRect(10,16,1,6),n.fillRect(14,17,1,5);const a=(o,l)=>{n.fillStyle="#e6c159",n.fillRect(o,l,3,4),n.fillStyle="#f4dd93",n.fillRect(o,l+1,2,2),n.fillStyle="#b98f34",n.fillRect(o+1,l+4,1,3)};a(6,7),a(10,5),a(14,8)}else n.fillStyle="#c98a2e",n.fillRect(6,12,12,8),n.fillRect(7,10,10,2),n.fillRect(8,20,8,1),n.fillStyle="#f0ab3c",n.fillRect(7,12,10,6),n.fillStyle="#ffc95e",n.fillRect(8,13,3,3),n.fillRect(13,14,2,3),n.fillStyle="#a86c1f",n.fillRect(9,12,1,7),n.fillRect(14,12,1,7),n.fillStyle="#6d4a2c",n.fillRect(11,8,2,3),n.fillStyle="#8fd47a",n.fillRect(13,7,3,2);const r=Do(i);return zi.set(e,r),r}function pp(){const s="droplet";if(zi.has(s))return zi.get(s);const{c:t,ctx:e}=Lo(16);e.fillStyle="#bfeaff",e.fillRect(7,3,2,8),e.fillRect(6,5,4,5),e.fillStyle="#ffffff",e.fillRect(7,5,1,2);const i=Do(t);return zi.set(s,i),i}function mp(){const s="sparkle";if(zi.has(s))return zi.get(s);const{c:t,ctx:e}=Lo(16),i=(r,a,o,l)=>{e.fillStyle=l,e.fillRect(r,a-o,1,o*2+1),e.fillRect(r-o,a,o*2+1,1),e.fillRect(r-1,a-1,3,3)};i(8,8,5,"rgba(255,245,190,0.95)"),i(8,8,2,"rgba(255,255,255,1)"),i(3,4,1,"rgba(255,240,170,0.8)"),i(13,11,1,"rgba(255,240,170,0.75)");const n=Do(t);return zi.set(s,n),n}function sr(s){if(!s||!s.crop)return-1;if(s.remain<=0)return 3;const t=1-s.remain/Math.max(1,s.total);return t<.3?0:t<.62?1:2}var pn,gp,Xs;class jM{constructor({terrain:t,progress:e,fx:i,audio:n,hooks:r={}}){Ne(this,pn);this.terrain=t,this.progress=e,this.fx=i,this.audio=n,this.hooks=r,this.group=new We,this.group.name="Farming",this.plots=[],this.time=0,S(this,pn,gp).call(this)}plotAt(t,e,i=1.4){let n=null,r=i;for(const a of this.plots){const o=Math.hypot(a.x-t,a.z-e);o<r&&(n=a,r=o)}return n}nearest(t,e=2.5){return this.plotAt(t.x,t.z,e)}plotByIndex(t){return this.plots[t]||null}waterTargets(t,e=1){const i=Ft.cols*Ft.rows,n=Math.max(1,Math.min(3,Math.floor(e)||1));if(n<=1)return[t.index];if(n===2){const r=[t.index];for(const[a,o]of[[0,-1],[0,1],[-1,0],[1,0]]){const l=t.row+a,c=t.col+o;l>=0&&l<Ft.rows&&c>=0&&c<Ft.cols&&r.push(l*Ft.cols+c)}return r.filter(a=>a<i)}return Array.from({length:i},(r,a)=>a)}syncAll(){for(const t of this.plots)S(this,pn,Xs).call(this,t,!0)}plant(t,e){const i=this.progress.plantSeed(t.index,e);if(!i.ok)return i;const n=i.crop;return S(this,pn,Xs).call(this,t,!0),this.fx.burst(t.x,t.y+.25,t.z,"#a8804f",10,{spread:.9,up:1.5}),this.audio.sfxPickup?.(),this.hooks.toast?.(`🌱 ${n.name} 씨앗을 심었어요 — ${Math.round(n.grow)}초 뒤에 익어요`,2400),this.hooks.onPlant?.(n,t),this.hooks.save?.(),{ok:!0,crop:n}}water(t,e=1){const i=this.waterTargets(t,e).map(a=>this.plotByIndex(a)).filter(a=>{const o=this.progress.plot(a.index);return o&&o.remain>0&&o.watered<ve.maxWater});if(!i.length)return{ok:!1,reason:this.waterTargets(t,e).some(o=>!!this.progress.plot(o))?"max":"empty"};const n=ve.waterStamina*i.length;if(this.progress.stamina<n)return{ok:!1,reason:"stamina",cost:n,need:n};let r=0;for(const a of i)this.progress.waterPlot(a.index).ok&&(r+=1,this.fx.burst(a.x,a.y+.55,a.z,"#bfeaff",9,{spread:.55,up:1.1}),S(this,pn,Xs).call(this,a,!0));return r?(this.progress.useStamina(n),this.audio.sfxSplash?.(.4),this.hooks.onWater?.(r,t),this.hooks.save?.(),{ok:!0,watered:r,cost:n}):{ok:!1,reason:"empty"}}harvest(t){const e=this.progress.plot(t.index);if(!e)return{ok:!1,reason:"empty"};if(e.remain>0)return{ok:!1,reason:"growing"};const i=this.progress.harvestPlot(t.index);if(!i.ok)return i;const n=i.crop;return this.audio.sfxPickup?.(),this.fx.burst(t.x,t.y+.5,t.z,n.tint,16,{spread:1.1,up:1.8,size:1.1}),this.fx.float(`${n.icon} ${n.name} +${i.n}`,t.x,t.y+1,t.z,"#7a5c6d"),this.hooks.toast?.(`🧺 ${n.name} ${i.n}개 수확! 텃밭 바구니에 담았어요 (${i.total}개)`,2600),S(this,pn,Xs).call(this,t,!0),this.hooks.onHarvest?.(n,i.n,t),this.hooks.save?.(),{ok:!0,crop:n,n:i.n,total:i.total}}update(t,e,i=null){this.time+=t,this.camera=i;const n=e>0?this.progress.tickFarm(e):[];for(const r of this.plots){const a=this.progress.plot(r.index);if(a&&a.wet>0&&(r.wet=!0),S(this,pn,Xs).call(this,r),r.plant.visible){const o=this.camera;o&&(r.plant.rotation.y=Math.atan2(o.position.x-r.x,o.position.z-r.z))}if(r.sparkle.visible){const o=.7+Math.sin(this.time*2.6+r.index*.9)*.3;r.sparkle.material.opacity=o;const l=.58+Math.sin(this.time*2.2+r.index)*.1;r.sparkle.scale.set(l,l,1),r.plant.position.y=r.y+.02+Math.sin(this.time*2+r.index)*.015}if(r.droplet.visible||a&&a.wet>0){r.droplet.visible=!0;const o=a?Math.min(1,a.wet/3):0;r.droplet.material.opacity=.15+.6*o,r.droplet.position.y=r.y+.34+Math.sin(this.time*3+r.index)*.03}else r.droplet.visible=!1}if(n.length){for(const r of n){const a=this.plots[r];if(!a)continue;const o=Yt[this.progress.plot(r).crop];this.fx.burst(a.x,a.y+.45,a.z,o.tint,8,{spread:.7,up:1.3})}this.hooks.onRipe?.(n)}}}pn=new WeakSet,gp=function(){const t=vo(!1),e=vo(!0);this.soilTex={dry:t,wet:e};for(let i=0;i<Ft.rows;i++)for(let n=0;n<Ft.cols;n++){const r=+(Ft.x+(n-(Ft.cols-1)/2)*Ft.pitch).toFixed(3),a=+(Ft.z+(i-(Ft.rows-1)/2)*Ft.pitch).toFixed(3),o=this.terrain.groundY(r,a),l=new yi(Ft.tile,Ft.tile,1,1);l.rotateX(-Math.PI/2);const c=wi({map:t,color:"#ffffff"}),h=new Zt(l,c);h.position.set(r,o+.035,a),h.receiveShadow=!0,h.name=`FarmPlot_${i}-${n}`,this.group.add(h);const d=new ph(Ft.tile*.5,Ft.tile*.5+.09,4,1);d.rotateX(-Math.PI/2),d.rotateY(Math.PI/4);const f=new Zt(d,new bi({color:"#b08155",transparent:!0,opacity:.5,depthWrite:!1}));f.position.set(r,o+.032,a),this.group.add(f);const u=new yi(1,1);u.translate(0,.5,0);const v=new Zt(u,new bi({map:xo("strawberry",0),alphaTest:.5,side:Fi,toneMapped:!1,fog:!0}));v.position.set(r,o+.02,a),v.visible=!1,v.renderOrder=3,this.group.add(v);const x=new ui(new ii({map:mp(),color:"#fff6c8",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:Kn}));x.scale.set(.62,.62,1),x.position.set(r+.28,o+1.05,a-.2),x.visible=!1,x.renderOrder=4,this.group.add(x);const p=new ui(new ii({map:pp(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));p.scale.set(.28,.28,1),p.position.set(r+Ft.tile*.24,o+.42,a+Ft.tile*.16),p.visible=!1,this.group.add(p);const M={index:i*Ft.cols+n,row:i,col:n,x:r,z:a,y:o,base:h,edge:f,plant:v,sparkle:x,droplet:p,stage:-1,wet:!1,crop:null};h.userData.plot=M,this.plots.push(M)}this.syncAll()},Xs=function(t,e=!1){const i=this.progress.plot(t.index),n=i?sr(i):-1,r=i?i.crop:null,a=!!(i&&i.wet>0),o=e||n!==t.stage||r!==t.crop||a!==t.wet;if(t.stage=n,t.crop=r,t.wet=a,t.base.material.map=a?this.soilTex.wet:this.soilTex.dry,t.base.material.color.set(a?"#e4eef2":"#ffffff"),t.base.material.needsUpdate=!0,!o)return;if(n<0){t.plant.visible=!1,t.sparkle.visible=!1;return}t.plant.visible=!0,t.plant.material.map=xo(r,n),t.plant.material.needsUpdate=!0;const l=n===0?.86:n===1?1.06:n===2?1.28:1.42;t.plant.scale.set(l,l,1),t.plant.position.y=t.y+.02,t.sparkle.visible=n===3};const xu=(s,t="")=>g("span",{class:`lchip ${t}`},s);var Nn,Nc,vp,xp;class tS{constructor(t){Ne(this,Nn);this.game=t}farm(){const t=this.game.progress,e=t.toolInfo("water"),i=t.farmPlots.filter(Boolean).length,n=t.farmPlots.filter(l=>l&&l.remain<=0).length,r=g("div",{class:"chips"},...Rc.map(l=>{const c=Bi[l],h=t.supply(l);return xu(`${c.icon} ${c.name} ${h}`,h>0?"ok":"lack")})),a=g("div",{class:"chips"},...hs.map(l=>xu(`${Yt[l].icon} ${Yt[l].name} ${t.cropCount(l)}`,t.cropCount(l)>0?"warm":""))),o=g("div",{class:"farm-grid"});for(let l=0;l<Ft.cols*Ft.rows;l++){const c=S(this,Nn,vp).call(this,l),h=g("div",{class:`farm-cell ${c.state}`,"data-plot":String(l)},g("div",{class:"fc-head"},g("span",{class:"fc-ico"},c.crop?c.crop.icon:"·"),g("span",{class:"fc-name"},c.crop?c.crop.name:"빈 밭")),g("div",{class:"fc-stage"},c.label),c.state==="empty"?null:S(this,Nn,Nc).call(this,c.pct,c.state==="ripe"?"life":""),S(this,Nn,xp).call(this,l,c));o.append(h)}return{title:"🌱 텃밭",subtitle:`3×3 경작지 · ${i}칸 심음${n?` · ${n}칸 수확 가능`:""}`,body:g("div",{},g("div",{class:"hint"},"씨앗을 심하고 물을 주면 남은 시간이 절반으로 줄어요. 다 자란 작물은 텃밭 바구니에 담기고, 자판기 [팔기] 에서 그대로 팔 수 있어요."),g("div",{class:"section-label"},"내 씨앗"),r,g("button",{class:"btn soft wide",type:"button",onclick:()=>{this.game.life.shopTab="buy",this.game.openVending()}},"🥤 자판기에서 씨앗 사기"),g("div",{class:"section-label"},"🧺 수확 바구니 (가방과 따로 담겨요)"),a,g("div",{class:"section-label"},"경작지"),o,g("div",{class:"section-label"},"물뿌리개"),g("div",{class:"row"},g("div",{},g("div",{class:"label"},`${us.water.icon} 물뿌리개 Lv.${e.level}`),g("div",{class:"hint"},`한 번에 ${ve.canArea[e.level-1]} · 칸당 기력 ${ve.waterStamina}`)),g("button",{class:"mini",type:"button",onclick:()=>this.game.openUpgrade()},e.maxed?"최대":"강화")),g("div",{class:"hint"},Sf.find(l=>l.id==="farm")?"북서쪽 모서리, 울타리 안이 텃밭이에요.":"")),actions:[{label:"🏆 업적 보기",kind:"ghost",onClick:()=>this.game.openAchievements()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}seedPicker(t){const e=this.game.progress,i=g("div",{class:"seed-list"});for(const n of Rc){const r=Bi[n],a=Yt[r.crop],o=e.supply(n),l=g("button",{class:`mini farm-btn ${o>0?"on":""}`,type:"button"},o>0?"심기":"없음");o<=0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.plantPlot(t,r.crop)),i.append(g("div",{class:"seed-row"},g("span",{class:"gico"},a.icon),g("div",{class:"gmain"},g("div",{class:"nm"},`${r.name} · ${o}개`),g("div",{class:"meta"},`${Math.round(a.grow)}초 → ${a.name} ${a.yield[0]}~${a.yield[1]}개 · 개당 🪙 ${a.price}`)),l))}return{title:`🌱 ${t+1}번 밭에 심기`,subtitle:"어떤 씨앗을 심을까요",body:g("div",{},g("div",{class:"hint"},"씨앗은 자판기 [사기] 탭에서 삽니다. 우체통의 텃밭 편지에 딸기 씨앗 2개가 동봉되어 있어요."),i,g("div",{class:"hint"},`지금 기력 ${Math.round(e.stamina)} / 100 · 물주기 한 칸당 ${ve.waterStamina}`)),actions:[{label:"← 텃밭",kind:"ghost",onClick:()=>this.game.openFarm()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}achievements(){const e=this.game.progress.achRows(),i=e.filter(a=>a.done).length,n=e.filter(a=>a.done&&!a.claimed).length,r=g("div",{});for(const a of gM){const o=e.filter(c=>c.group===a.id);if(!o.length)continue;r.append(g("div",{class:"section-label"},`${a.icon} ${a.name}`));const l=g("div",{class:"ach-list"});for(const c of o){const h=g("button",{class:`mini ach-claim ${c.done&&!c.claimed?"on":""}`,type:"button"},c.claimed?"받음":c.done?"보상 받기":`${c.value}/${c.need}`);(c.claimed||!c.done)&&(h.disabled=!0),h.addEventListener("click",()=>this.game.claimAchievement(c.id)),l.append(g("div",{class:`ach-row ${c.done?"done":""} ${c.claimed?"claimed":""}`},g("span",{class:"aico"},c.done?c.icon:"🔒"),g("div",{class:"amain"},g("div",{class:"nm"},c.name),S(this,Nn,Nc).call(this,c.pct,c.done?"life":""),g("div",{class:"meta"},`${c.desc} · 🪙 ${c.reward.coin}${c.reward.star?` · ⭐ ${c.reward.star}`:""}`)),h))}r.append(l)}return{title:"🏆 섬 업적",subtitle:`${e.length}종 중 ${i}종 달성${n?` · 받을 보상 ${n}건`:""}`,body:r,actions:[{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}}Nn=new WeakSet,Nc=function(t,e=""){return g("div",{class:`progress-line ${e}`},g("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},vp=function(t){const i=this.game.progress.plot(t);if(!i)return{state:"empty",label:"씨앗을 심어 보세요",stage:-1,pct:0,crop:null,st:null};const n=Yt[i.crop],r=sr(i),a=Math.round((1-i.remain/Math.max(1,i.total))*100);return{state:i.remain>0?"grow":"ripe",label:i.remain>0?`${eM[r+1]} · ${Math.ceil(i.remain)}초`:"수확 가능",stage:r,pct:a,crop:n,st:i}},xp=function(t,e){if(e.state==="empty"){const r=g("button",{class:"mini farm-btn",type:"button"},"🌱 심기");return r.addEventListener("click",()=>this.game.openSeedPicker(t)),r}if(e.state==="ripe"){const r=g("button",{class:"mini farm-btn on",type:"button"},"🧺 수확");return r.addEventListener("click",()=>this.game.harvestPlot(t)),r}const i=e.st.watered<ve.maxWater,n=g("button",{class:`mini farm-btn ${i?"water":""}`,type:"button"},i?`💧 물 ${ve.maxWater-e.st.watered}`:"💧 끝");return i||(n.disabled=!0),n.addEventListener("click",()=>this.game.waterPlot(t)),n};const re=(s,t)=>(s+ge)/(ge*2)*t,ls=(s,t)=>s/(ge*2)*t,ce={deep:"#5fc4d8",shallow:"#8fe0e4",river:"#6fd2dd",wetSand:"#f6e2b6",sand:"#ffe6b8",grass:"#a9e08c",grassDeep:"#8ed577",forest:"rgba(88,154,92,0.58)",quarry:"rgba(203,190,168,0.6)",path:"#f2dcb2",farm:"#9a6d43",farmEdge:"#c39a68",paddy:"#7fc7c9",paddyEdge:"#a9865d",bridgeWood:"#c08a52",bridgeSite:"#c8a06a",mailbox:"#ff8fa6",player:"#ff5f92"};function _u(s){const t=document.createElement("canvas");t.width=s,t.height=s;const e=t.getContext("2d"),i=e.createImageData(s,s),n=i.data;for(let u=0;u<s;u++)for(let v=0;v<s;v++){const x=v/s*ge*2-ge,p=u/s*ge*2-ge,m=fs(Ef,x,p),M=wf(x,p)<-1.2;let C;m<-.35?C=M?ce.river:ce.deep:m<.06?C=M?ce.river:ce.shallow:m<.28?C=ce.wetSand:m<.52?C=ce.sand:m<.66?C=ce.grass:C=ce.grassDeep;const[E,R,T]=eS(C),_=(u*s+v)*4;n[_]=E,n[_+1]=R,n[_+2]=T,n[_+3]=255}e.putImageData(i,0,0),e.strokeStyle=ce.path,e.lineWidth=Math.max(1.4,s*.014),e.lineCap="round",e.lineJoin="round";for(const u of If){const x=new nf(u.map(([p,m])=>new U(p,0,m)),!1,"catmullrom",.5).getSpacedPoints(30);e.beginPath(),x.forEach((p,m)=>{const M=re(p.x,s),C=re(p.z,s);m===0?e.moveTo(M,C):e.lineTo(M,C)}),e.stroke()}const r=ls(Ft.tile,s);e.fillStyle=ce.farmEdge;const a=re(Ft.x-Ft.cols*Ft.pitch/2,s),o=re(Ft.z-Ft.rows*Ft.pitch/2,s),l=ls(Ft.cols*Ft.pitch,s),c=ls(Ft.rows*Ft.pitch,s);e.fillRect(a,o,l,c),e.fillStyle=ce.farm;for(let u=0;u<Ft.rows;u++)for(let v=0;v<Ft.cols;v++){const x=re(Ft.x+(v-(Ft.cols-1)/2)*Ft.pitch,s)-r/2,p=re(Ft.z+(u-(Ft.rows-1)/2)*Ft.pitch,s)-r/2;e.fillRect(x,p,Math.max(1.6,r),Math.max(1.6,r))}const h=ls(qt.tile,s),d=re(qt.x-qt.cols*qt.pitch/2,s),f=re(qt.z-qt.rows*qt.pitch/2,s);e.fillStyle=ce.paddyEdge,e.fillRect(d,f,ls(qt.cols*qt.pitch,s),ls(qt.rows*qt.pitch,s)),e.fillStyle=ce.paddy;for(let u=0;u<qt.rows;u++)for(let v=0;v<qt.cols;v++){const x=re(qt.x+(v-(qt.cols-1)/2)*qt.pitch,s)-h/2,p=re(qt.z+(u-(qt.rows-1)/2)*qt.pitch,s)-h/2;e.fillRect(x,p,Math.max(1.6,h),Math.max(1.6,h))}for(const u of Sf)u.id==="farm"||u.id==="paddy"||u.id==="beach"||(e.fillStyle=u.id==="orchard"?"rgba(120,190,110,0.5)":u.id==="garden"?"rgba(255,183,214,0.55)":u.id==="forest"?ce.forest:ce.quarry,e.beginPath(),e.arc(re(u.x,s),re(u.z,s),Math.max(4,ls(u.r,s)),0,Math.PI*2),e.fill());e.strokeStyle="rgba(150,235,240,0.55)",e.lineWidth=Math.max(1.2,s*.012),e.beginPath();for(let u=-ge;u<=ge;u+=1.5){const v=re(yf(u),s);u===-ge?e.moveTo(re(u,s),v):e.lineTo(re(u,s),v)}e.stroke();for(const u of _i){const v=re(u.x,s),x=re(u.z,s),p=Math.max(4.2,s*.042);e.beginPath(),e.arc(v,x,p,0,Math.PI*2),e.fillStyle="#ffffff",e.fill(),e.lineWidth=Math.max(1,s*.011),e.strokeStyle="#b2698f",e.stroke(),e.font=`${Math.round(p*1.25)}px "Noto Color Emoji", "Apple Color Emoji", sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle="#6b5878",e.fillText(u.icon,v,x+p*.06)}return e.beginPath(),e.arc(re(Qd.x,s),re(Qd.z,s),Math.max(2.6,s*.026),0,Math.PI*2),e.fillStyle=ce.mailbox,e.fill(),e.strokeStyle="#fff",e.lineWidth=Math.max(.8,s*.008),e.stroke(),t}function bu(s,t,e,i=!1){const n=re(Vt.x-Vt.halfWidth,t),r=re(Vt.x+Vt.halfWidth,t),a=re(Vt.z-Vt.halfSpan,t),o=re(Vt.z+Vt.halfSpan,t),l=Math.max(2,r-n);if(e){s.fillStyle=ce.bridgeWood,s.fillRect(n,a,l,o-a),s.strokeStyle="#8f6236",s.lineWidth=Math.max(.8,t*.004);for(let c=a;c<=o;c+=Math.max(2.5,(o-a)/8))s.beginPath(),s.moveTo(n,c),s.lineTo(n+l,c),s.stroke()}else s.save(),s.setLineDash([Math.max(2,t*.012),Math.max(2,t*.01)]),s.strokeStyle=ce.bridgeSite,s.lineWidth=Math.max(1.6,t*.014),s.beginPath(),s.moveTo((n+r)/2,a),s.lineTo((n+r)/2,o),s.stroke(),s.restore();if(i){const c=(n+r)/2,h=(a+o)/2,d=Math.max(6,t*.05),f=Math.max(10,t*.075);if(s.fillStyle=e?ce.bridgeWood:"rgba(255,246,228,0.72)",s.strokeStyle=e?"#8f6236":ce.bridgeSite,s.lineWidth=Math.max(1.4,t*.006),e||s.setLineDash([Math.max(2,t*.008),Math.max(2,t*.007)]),s.beginPath(),s.rect(c-d/2,h-f/2,d,f),s.fill(),s.stroke(),e){s.beginPath();for(let u=1;u<4;u++){const v=h-f/2+f/4*u;s.moveTo(c-d/2,v),s.lineTo(c+d/2,v)}s.stroke()}s.setLineDash([])}}let Pl=new Map;function eS(s){if(Pl.has(s))return Pl.get(s);const t=parseInt(s.slice(1),16),e=[t>>16&255,t>>8&255,t&255];return Pl.set(s,e),e}class iS{constructor(t,e,{size:i=104}={}){this.game=e,this.size=i,this.dpr=Math.min(2,Math.max(1,Math.round(window.devicePixelRatio||1))),this.acc=0,this.canvas=g("canvas",{class:"minimap-canvas",width:i*this.dpr,height:i*this.dpr,"aria-label":"섬 미니맵"}),this.canvas.style.width=`${i}px`,this.canvas.style.height=`${i}px`,this.pin=g("span",{class:"minimap-pin"},"🗺️"),this.wrap=g("button",{class:"minimap",type:"button","aria-label":"섬 지도 크게 보기",onclick:()=>this.game.openMinimap?.()},this.canvas,this.pin),t.append(this.wrap),this.wrap.addEventListener("pointerdown",n=>n.stopPropagation()),this.base=_u(i*this.dpr),this.ctx=this.canvas.getContext("2d"),this.lastBridge=null,this.draw()}draw(){const t=this.game;if(!t||!t.player)return;const e=this.size*this.dpr,i=this.ctx;i.clearRect(0,0,e,e),i.drawImage(this.base,0,0,e,e);const n=!!(t.progress&&t.progress.bridgeBuilt);bu(i,e,n),this.lastBridge=n;for(const d of ei){const f=t.cats?t.cats.find(x=>x.id===d.id):null,u=re(f?f.position.x:d.x,e),v=re(f?f.position.z:d.z,e);i.beginPath(),i.arc(u,v,Math.max(2.2,e*.026),0,Math.PI*2),i.fillStyle=d.id==="somi"?"#f7f1e6":"#6d5a4a",i.fill(),i.lineWidth=Math.max(.8,e*.007),i.strokeStyle="#8b6a8f",i.stroke()}const r=re(t.player.position.x,e),a=re(t.player.position.z,e),o=t.player.yaw||0,l=Math.sin(o),c=Math.cos(o),h=Math.max(3.4,e*.042);i.save(),i.translate(r,a),i.rotate(Math.atan2(c,l)+Math.PI/2),i.beginPath(),i.moveTo(0,-h),i.lineTo(h*.72,h*.72),i.lineTo(0,h*.32),i.lineTo(-h*.72,h*.72),i.closePath(),i.fillStyle=ce.player,i.fill(),i.lineWidth=Math.max(1,e*.014),i.strokeStyle="#ffffff",i.stroke(),i.restore()}update(t){this.acc+=t,!(this.acc<.12)&&(this.acc=0,this.draw())}modalBody(t=320){const e=Math.min(2,Math.max(1,Math.round((window.devicePixelRatio||1)*1.5))),i=g("canvas",{class:"minimap-big",width:t*e,height:t*e});i.style.width="100%",i.style.maxWidth=`${t}px`,i.style.aspectRatio="1 / 1";const n=i.getContext("2d"),r=t*e;n.drawImage(_u(r),0,0,r,r);const a=this.game;bu(n,r,!!a.progress.bridgeBuilt,!0);for(const u of ei){const v=a.cats?a.cats.find(m=>m.id===u.id):null,x=re(v?v.position.x:u.x,r),p=re(v?v.position.z:u.z,r);n.beginPath(),n.arc(x,p,Math.max(3,r*.014),0,Math.PI*2),n.fillStyle=u.id==="somi"?"#f7f1e6":"#6d5a4a",n.fill(),n.lineWidth=1.4,n.strokeStyle="#8b6a8f",n.stroke()}const o=re(a.player.position.x,r),l=re(a.player.position.z,r),c=a.player.yaw||0,h=Math.max(6,r*.02);n.save(),n.translate(o,l),n.rotate(Math.atan2(Math.cos(c),Math.sin(c))+Math.PI/2),n.beginPath(),n.moveTo(0,-h),n.lineTo(h*.72,h*.72),n.lineTo(0,h*.32),n.lineTo(-h*.72,h*.72),n.closePath(),n.fillStyle=ce.player,n.fill(),n.lineWidth=2,n.strokeStyle="#fff",n.stroke(),n.restore();const d=g("div",{class:"map-legend"}),f=(u,v,x)=>g("div",{class:"legend-row"},g("span",{class:"sw",style:{background:u}}),g("span",{class:"nm"},v),g("span",{class:"meta"},x));for(const u of _i){const v=!!a.progress.building(u.id).done;d.append(f("#ffffff",`${u.icon} ${u.name}`,v?"복구 완료":"복구 전"))}d.append(f(ce.bridgeWood,"🌉 다리",a.progress.bridgeBuilt?"건널 수 있어요":"재료를 모아 놓기")),d.append(f(ce.mailbox,"📬 우체통","편지·의뢰 보상")),d.append(f(ce.farm,"🌱 텃밭",`3×3 · ${a.progress.farmPlots.filter(Boolean).length}칸 심음`)),d.append(f(ce.paddy,"🌾 논",`3×2 · ${a.progress.paddyPlots.filter(Boolean).length}칸 심음`)),d.append(f(ce.forest,"🌲 빼곡한 숲","통나무 군락")),d.append(f(ce.quarry,"🪨 채석장","돌·별조각 군락"));for(const u of ei){const v=a.cats?a.cats.find(x=>x.id===u.id):null;d.append(f(u.id==="somi"?"#f7f1e6":"#6d5a4a",`🐱 ${u.name}`,v?`Lv.${a.progress.catRow(u.id).level}`:""))}return d.append(f(ce.player,"📍 나",`(${a.player.position.x.toFixed(1)}, ${a.player.position.z.toFixed(1)})`)),g("div",{class:"map-modal"},g("div",{class:"map-canvas-wrap"},i),g("div",{class:"hint"},"지도는 섬 전체(72×72)를 담아요. 가운데 강이 남쪽 생활권과 북쪽 개척권을 나누고, 다리를 놓으면 건너갈 수 있어요."),g("div",{class:"section-label"},"범례"),d)}}const yu="#c08a52",Mu="#dcae74",Su="#8f6236";var ar,_p,bp;class nS{constructor(t){Ne(this,ar);this.terrain=t,this.group=new We,this.group.name="Bridge",this.built=!1,this.t=0,this.siteGroup=new We,this.deckGroup=new We,this.group.add(this.siteGroup,this.deckGroup),S(this,ar,_p).call(this),S(this,ar,bp).call(this),this.setBuilt(!1,!0)}setBuilt(t,e=!1){this.built=!!t,this.siteGroup.visible=!this.built,this.deckGroup.visible=this.built,this.built?(this.deckGroup.scale.set(1,e?1:.02,1),this.deckGroup.position.y=e?0:.4):(this.deckGroup.scale.set(1,1,1),this.deckGroup.position.y=0)}update(t,e=0){if(this.t+=t,this.built){this.deckGroup.scale.y<1&&(this.deckGroup.scale.y+=(1-this.deckGroup.scale.y)*Math.min(1,t*6),this.deckGroup.position.y+=(0-this.deckGroup.position.y)*Math.min(1,t*6),this.deckGroup.scale.y>.995&&(this.deckGroup.scale.y=1,this.deckGroup.position.y=0));return}if(this.glow){const i=.34+Math.sin(this.t*1.9)*.12+e*.25;this.glow.material.opacity=i;const n=3.4+Math.sin(this.t*1.5)*.22;this.glow.scale.set(n,n,1)}}}ar=new WeakSet,_p=function(){const{x:t,z:e,halfWidth:i,halfSpan:n}=Vt,r=wi({color:yu}),a=wi({color:Su}),o=new ci(.24,1.5,.24);for(const d of[-n+.5,n-.5])for(const f of[-i+.15,i-.15]){const u=new Zt(o,a);u.position.set(t+f,Vt.deckY+.15,e+d),u.castShadow=!0,u.receiveShadow=!0,this.siteGroup.add(u)}const l=new ci(1.6,.1,.34);for(let d=0;d<3;d++){const f=new Zt(l,r);f.position.set(t+(d%2?.22:-.18),Vt.deckY+.42+d*.03,e+n-.5-d*.55),f.rotation.y=(d-1)*.16,f.rotation.z=(d%2?1:-1)*.05,f.castShadow=!0,this.siteGroup.add(f)}const c=new Zt(new ci(.12,1.05,.12),a);c.position.set(t+i+.55,Vt.deckY+.55,e+n-.15),c.castShadow=!0,this.siteGroup.add(c);const h=new Zt(new ci(.86,.52,.08),wi({color:Mu}));h.position.set(t+i+.55,Vt.deckY+1,e+n-.15),h.castShadow=!0,this.siteGroup.add(h),this.glow=new ui(new ii({map:qr(),color:"#ffe6b0",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1,blending:Kn})),this.glow.scale.set(3.6,3.6,1),this.glow.position.set(t,Vt.deckY+1.1,e+n-.2),this.siteGroup.add(this.glow)},bp=function(){const{x:t,z:e,halfWidth:i,halfSpan:n}=Vt,r=wi({color:Mu}),a=wi({color:yu}),o=wi({color:Su}),l=n*2,c=20,h=(l-.3)/c,d=new ci(i*2,.12,h*.86);for(let p=0;p<c;p++){const m=e-n+.15+h*(p+.5),M=new Zt(d,p%2?r:a);M.position.set(t,Vt.deckY-.06,m),M.rotation.y=(p%3-1)*.012,M.castShadow=!0,M.receiveShadow=!0,this.deckGroup.add(M)}const f=new ci(.1,.1,l);for(const p of[-i+.08,i-.08]){const m=new Zt(f,o);m.position.set(t+p,Vt.deckY+.52,e),m.castShadow=!0,this.deckGroup.add(m)}const u=new ci(.12,.62,.12),v=Math.max(3,Math.round(l/1.6));for(let p=0;p<=v;p++){const m=e-n+l/v*p;for(const M of[-i+.08,i-.08]){const C=new Zt(u,a);C.position.set(t+M,Vt.deckY+.24,m),C.castShadow=!0,this.deckGroup.add(C)}}const x=new ci(i*2+.5,.3,.55);for(const p of[-n+.1,n-.1]){const m=new Zt(x,wi({color:"#ded6c6"}));m.position.set(t,Vt.deckY-.18,e+p),m.receiveShadow=!0,this.deckGroup.add(m)}};const wu="#8fd7e0",sS="#9c7a52";var mn,yp,qs;class rS{constructor({terrain:t,progress:e,fx:i,audio:n,hooks:r={}}){Ne(this,mn);this.terrain=t,this.progress=e,this.fx=i,this.audio=n,this.hooks=r,this.group=new We,this.group.name="Paddy",this.plots=[],this.time=0,S(this,mn,yp).call(this)}plotAt(t,e,i=1.5){let n=null,r=i;for(const a of this.plots){const o=Math.hypot(a.x-t,a.z-e);o<r&&(n=a,r=o)}return n}nearest(t,e=2.5){return this.plotAt(t.x,t.z,e)}plotByIndex(t){return this.plots[t]||null}waterTargets(t,e=1){const i=Math.max(1,Math.min(3,Math.floor(e)||1));if(i<=1)return[t.index];const n=this.plots.filter(r=>r.row===t.row).map(r=>r.index);return i===2?n:this.plots.map(r=>r.index)}syncAll(){for(const t of this.plots)S(this,mn,qs).call(this,t,!0)}plant(t,e="rice"){const i=this.progress.plantPaddy(t.index,e);if(!i.ok)return i;const n=i.crop;return S(this,mn,qs).call(this,t,!0),this.fx.burst(t.x,t.y+.2,t.z,"#b9e6c6",10,{spread:.9,up:1.4}),this.audio.sfxSplash?.(.5),this.hooks.toast?.(`🌾 ${n.name} 볍씨를 논에 심었어요 — ${Math.round(n.grow)}초 뒤에 여물어요`,2400),this.hooks.onPlant?.(n,t),this.hooks.save?.(),{ok:!0,crop:n}}water(t,e=1){const i=this.waterTargets(t,e).map(a=>this.plotByIndex(a)).filter(a=>{const o=this.progress.paddyPlot(a.index);return o&&o.remain>0&&o.watered<ve.maxWater});if(!i.length)return{ok:!1,reason:this.waterTargets(t,e).some(o=>!!this.progress.paddyPlot(o))?"max":"empty"};const n=ve.waterStamina*i.length;if(this.progress.stamina<n)return{ok:!1,reason:"stamina",cost:n};let r=0;for(const a of i)this.progress.waterPaddy(a.index).ok&&(r+=1,this.fx.burst(a.x,a.y+.5,a.z,"#bfeaff",9,{spread:.55,up:1.1}),S(this,mn,qs).call(this,a,!0));return r?(this.progress.useStamina(n),this.audio.sfxSplash?.(.4),this.hooks.onWater?.(r,t),this.hooks.save?.(),{ok:!0,watered:r,cost:n}):{ok:!1,reason:"empty"}}harvest(t){const e=this.progress.paddyPlot(t.index);if(!e)return{ok:!1,reason:"empty"};if(e.remain>0)return{ok:!1,reason:"growing"};const i=this.progress.harvestPaddy(t.index);if(!i.ok)return i;const n=i.crop;return this.audio.sfxPickup?.(),this.fx.burst(t.x,t.y+.5,t.z,n.tint,16,{spread:1.1,up:1.8,size:1.1}),this.fx.float(`${n.icon} ${n.name} +${i.n}`,t.x,t.y+1,t.z,"#7a6a4d"),this.hooks.toast?.(`🌾 ${n.name} ${i.n}개 수확! 수확 바구니에 담았어요 (${i.total}개)`,2600),S(this,mn,qs).call(this,t,!0),this.hooks.onHarvest?.(n,i.n,t),this.hooks.save?.(),{ok:!0,crop:n,n:i.n,total:i.total}}update(t,e,i=null){this.time+=t,this.camera=i;const n=e>0?this.progress.tickPaddy(e):[];for(const r of this.plots){const a=this.progress.paddyPlot(r.index);if(a&&a.wet>0&&(r.wet=!0),S(this,mn,qs).call(this,r),r.plant.visible&&i&&(r.plant.rotation.y=Math.atan2(i.position.x-r.x,i.position.z-r.z)),r.water.position.y=r.y+qt.waterY+Math.sin(this.time*1.3+r.index*.7)*.006,r.sparkle.visible){r.sparkle.material.opacity=.7+Math.sin(this.time*2.6+r.index*.9)*.3;const o=.58+Math.sin(this.time*2.2+r.index)*.1;r.sparkle.scale.set(o,o,1),r.plant.position.y=r.y+.05+Math.sin(this.time*2+r.index)*.014}a&&a.wet>0?(r.droplet.visible=!0,r.droplet.material.opacity=.15+.6*Math.min(1,a.wet/3),r.droplet.position.y=r.y+.32+Math.sin(this.time*3+r.index)*.03):r.droplet.visible=!1}if(n.length){for(const r of n){const a=this.plots[r];if(!a)continue;const o=this.progress.paddyPlot(r),l=o?Yt[o.crop]:Yt.rice;this.fx.burst(a.x,a.y+.45,a.z,l.tint,8,{spread:.7,up:1.3})}this.hooks.onRipe?.(n)}}}mn=new WeakSet,yp=function(){this.soil={dry:vo(!1),wet:vo(!0)};for(let t=0;t<qt.rows;t++)for(let e=0;e<qt.cols;e++){const i=+(qt.x+(e-(qt.cols-1)/2)*qt.pitch).toFixed(3),n=+(qt.z+(t-(qt.rows-1)/2)*qt.pitch).toFixed(3),r=this.terrain.groundY(i,n),a=qt.tile,o=new yi(a,a,1,1);o.rotateX(-Math.PI/2);const l=new Zt(o,wi({map:this.soil.wet,color:"#dfeef0"}));l.position.set(i,r+.03,n),l.receiveShadow=!0,l.name=`PaddyTile_${t}-${e}`,this.group.add(l);const c=new yi(a*.94,a*.94,1,1);c.rotateX(-Math.PI/2);const h=new Zt(c,new bi({color:wu,transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1}));h.position.set(i,r+qt.waterY,n),h.renderOrder=1,this.group.add(h);const d=wi({color:sS}),f=new ci(a+.2,.16,.16),u=new ci(.16,.16,a);for(const E of[-a/2,a/2]){const R=new Zt(f,d);R.position.set(i,r+.1,n+E),R.castShadow=!0,R.receiveShadow=!0,this.group.add(R)}for(const E of[-a/2,a/2]){const R=new Zt(u,d);R.position.set(i+E,r+.1,n),R.castShadow=!0,R.receiveShadow=!0,this.group.add(R)}const v=new yi(1,1);v.translate(0,.5,0);const x=new Zt(v,new bi({map:xo("rice",0),alphaTest:.5,side:Fi,toneMapped:!1,fog:!0}));x.position.set(i,r+.05,n),x.visible=!1,x.renderOrder=3,this.group.add(x);const p=new ui(new ii({map:mp(),color:"#fff1c2",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:Kn}));p.scale.set(.62,.62,1),p.position.set(i+.3,r+1.05,n-.22),p.visible=!1,p.renderOrder=4,this.group.add(p);const m=new ui(new ii({map:pp(),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));m.scale.set(.26,.26,1),m.position.set(i+a*.24,r+.4,n+a*.16),m.visible=!1,this.group.add(m);const C={index:t*qt.cols+e,row:t,col:e,x:i,z:n,y:r,soil:l,water:h,plant:x,sparkle:p,droplet:m,stage:-1,wet:!1,crop:null};l.userData.paddy=C,this.plots.push(C)}this.syncAll()},qs=function(t,e=!1){const i=this.progress.paddyPlot(t.index),n=i?sr(i):-1,r=i?i.crop:null,a=!!(i&&i.wet>0),o=e||n!==t.stage||r!==t.crop||a!==t.wet;if(t.stage=n,t.crop=r,t.wet=a,t.soil.material.map=a?this.soil.wet:this.soil.dry,t.water.material.opacity=a?.56:.4,t.water.material.color.set(a?"#9ee2ea":wu),!o)return;if(n<0){t.plant.visible=!1,t.sparkle.visible=!1;return}t.plant.visible=!0,t.plant.material.map=xo(r||"rice",n),t.plant.material.needsUpdate=!0;const l=n===0?.8:n===1?.98:n===2?1.2:1.34;t.plant.scale.set(l,l,1),t.plant.position.y=t.y+.05,t.sparkle.visible=n===3};const Eu=s=>xe[s]?xe[s].name:s,Tu=s=>xe[s]?xe[s].icon:"❔";var Un,Uc,Mp,Sp;class aS{constructor(t){Ne(this,Un);this.game=t}bridge(){const t=this.game,e=t.progress.bridgeState(),i=t.progress.inventory,n=Vs,r=Object.values(n).reduce((u,v)=>u+v,0),a=Object.entries(n).reduce((u,[v,x])=>u+Math.min(x,e.invested[v]||0),0),o=r?Math.round(a/r*100):0,l=Object.entries(n).every(([u,v])=>(e.invested[u]||0)>=v),c=Object.entries(n).some(([u,v])=>(e.invested[u]||0)<v&&i.count(u)>0),h=Object.entries(n).map(([u,v])=>{const x=i.count(u),p=Math.min(v,e.invested[u]||0),m=p>=v;return g("div",{class:`req-row ${m?"done":""}`},g("span",{class:"ico"},Tu(u)),g("div",{class:"info"},g("div",{class:"nm"},`${Eu(u)}${m?" ✓":""}`),g("div",{class:"sub"},`가방 ${x}개 · 창고 ${i.stored(u)}개`)),g("span",{class:`need ${x+(e.invested[u]||0)>=v?"ok":"lack"}`},`${p}/${v}`))}),d=e.built?g("div",{},g("div",{class:"done-banner"},"🌉 다리 완성",g("div",{class:"sub"},"강 위로 널빤지 데크가 놓였어요.")),g("div",{class:"hint"},"이제 다리 위를 걸어 북쪽 개척권으로 건널 수 있어요 — 빼곡한 숲 · 채석장 · 논이 기다려요.")):g("div",{},g("div",{class:"hint"},"강이 남쪽 생활권과 북쪽 개척권을 갈라 놓았어요. 통나무와 돌을 모아 다리를 놓으면 걸어서 건널 수 있어요."),S(this,Un,Uc).call(this,o),g("div",{class:"req-list"},...h),g("div",{class:"hint"},l?"재료가 다 모였어요 — [다리 놓기] 를 눌러 주세요.":"재료를 모아 [재료 투입] 으로 하나씩 넣어요. Day 는 기다리지 않아도 돼요."),g("div",{class:"section-label"},"건너편"),g("div",{class:"chips"},g("span",{class:"lchip"},"🌲 빼곡한 숲"),g("span",{class:"lchip"},"🪨 채석장"),g("span",{class:"lchip warm"},"🌾 논"))),f=[];return e.built||(f.push({label:"재료 투입",kind:"ghost",disabled:!c,onClick:()=>t.investBridge()}),f.push({label:"다리 놓기",kind:"primary",disabled:!l,onClick:()=>t.completeBridge()})),f.push({label:"닫기",kind:e.built||!l?"primary":"ghost",onClick:()=>t.modal.close()}),{title:`${Vt.icon} ${Vt.name}`,subtitle:e.built?"이미 놓인 다리예요":"강 중앙 길목 — 재료만 모으면 바로 놓을 수 있어요",body:d,actions:f}}paddy(){const t=this.game.progress,e=t.toolInfo("water"),i=t.paddyPlots.filter(Boolean).length,n=t.paddyPlots.filter(o=>o&&o.remain<=0).length,r=t.supply("seed_rice"),a=g("div",{class:"farm-grid paddy-grid"});for(let o=0;o<qt.cols*qt.rows;o++){const l=S(this,Un,Mp).call(this,o),c=g("div",{class:`farm-cell ${l.state} paddy`,"data-plot":String(o)},g("div",{class:"fc-head"},g("span",{class:"fc-ico"},l.crop?l.crop.icon:"·"),g("span",{class:"fc-name"},l.crop?l.crop.name:"빈 논")),g("div",{class:"fc-stage"},l.label),l.state==="empty"?null:S(this,Un,Uc).call(this,l.pct,l.state==="ripe"?"life":""),S(this,Un,Sp).call(this,o,l));a.append(c)}return{title:"🌾 논",subtitle:`다리 건너 3×2 논 · ${i}칸 심음${n?` · ${n}칸 수확 가능`:""}`,body:g("div",{},g("div",{class:"hint"},"볍씨를 논에 심고 물을 대면 남은 시간이 절반으로 줄어요. 다 여문 벼는 수확 바구니에 담기고, 자판기 [팔기] 에서 쌀로 팔 수 있어요."),g("div",{class:"section-label"},"내 볍씨"),g("div",{class:"chips"},g("span",{class:`lchip ${r>0?"ok":"lack"}`},`🌾 볍씨 ${r}`)),g("button",{class:"btn soft wide",type:"button",onclick:()=>{this.game.life.shopTab="buy",this.game.openVending()}},"🥤 자판기에서 볍씨 사기 (20코인)"),g("div",{class:"section-label"},"🧺 수확 바구니"),g("div",{class:"chips"},...["rice","strawberry","radish","pumpkin"].map(o=>{const l=t.cropCount(o);return g("span",{class:`lchip ${l>0?"warm":""}`},`${Yt[o].icon} ${Yt[o].name} ${l}`)})),g("div",{class:"section-label"},"논 타일"),a,g("div",{class:"section-label"},"물뿌리개"),g("div",{class:"row"},g("div",{},g("div",{class:"label"},`🚿 물뿌리개 Lv.${e.level}`),g("div",{class:"hint"},`한 번에 ${["1칸","한 줄 3칸","6칸"][e.level-1]} · 칸당 기력 ${ve.waterStamina}`)),g("button",{class:"mini",type:"button",onclick:()=>this.game.openUpgrade()},e.maxed?"최대":"강화")),g("div",{class:"hint"},"논은 다리 건너 북쪽 개척권, 이정표 옆에 있어요.")),actions:[{label:"🌱 텃밭 보기",kind:"ghost",onClick:()=>this.game.openFarm()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}paddySeedPicker(t){const e=this.game.progress,i=g("div",{class:"seed-list"});for(const n of jf){const r=Bi[n],a=Yt[r.crop],o=e.supply(n),l=g("button",{class:`mini farm-btn ${o>0?"on":""}`,type:"button"},o>0?"심기":"없음");o<=0&&(l.disabled=!0),l.addEventListener("click",()=>this.game.plantPaddy(t,r.crop)),i.append(g("div",{class:"seed-row"},g("span",{class:"gico"},a.icon),g("div",{class:"gmain"},g("div",{class:"nm"},`${r.name} · ${o}개`),g("div",{class:"meta"},`${Math.round(a.grow)}초 → ${a.name} ${a.yield[0]}~${a.yield[1]}개 · 개당 🪙 ${a.price}`)),l))}return{title:`🌾 ${t+1}번 논에 심기`,subtitle:"볍씨를 논에 뿌려요",body:g("div",{},g("div",{class:"hint"},"볍씨는 자판기 [사기] 탭에서 20코인에 살 수 있어요. 다리 건너 북쪽 개척권의 논에서만 자라요."),i,g("div",{class:"hint"},`지금 기력 ${Math.round(e.stamina)} / 100 · 물주기 한 칸당 ${ve.waterStamina}`)),actions:[{label:"← 논",kind:"ghost",onClick:()=>this.game.openPaddy()},{label:"닫기",kind:"primary",onClick:()=>this.game.modal.close()}]}}cart(){const t=this.game,e=t.progress,i=e.cartLevel>=Zi.maxLevel,n=t.canBuildCart(),r=e.inventory,a=Object.entries(Zi.cost).map(([o,l])=>{const c=o==="coin"?e.coins:r.count(o),h=c>=l;return g("div",{class:`req-row ${h?"done":""}`},g("span",{class:"ico"},o==="coin"?"🪙":Tu(o)),g("div",{class:"info"},g("div",{class:"nm"},`${o==="coin"?"섬 코인":Eu(o)}${h?" ✓":""}`),g("div",{class:"sub"},`가진 것 ${c}개`)),g("span",{class:`need ${h?"ok":"lack"}`},`${l}`))});return{title:"🛒 리어카",subtitle:i?"가방이 넓어졌어요":"짊어지는 가방을 두 배로",body:i?g("div",{},g("div",{class:"done-banner"},"🛒 리어카 완성",g("div",{class:"sub"},Zi.desc)),g("div",{class:"row"},g("div",{},g("div",{class:"label"},"가방 칸"),g("div",{class:"hint"},`🎒 ${r.usedSlots()}/${r.slots}칸 사용 중`)),g("span",{class:"hint"},`한 칸 ${Ve.stack}개`)),g("div",{class:"hint"},"이제 캐는 대로 담아도 금방 차지 않아요. 걸어 다니면 리어카가 뒤따라와요.")):g("div",{},g("div",{class:"hint"},Zi.desc),g("div",{class:"row"},g("div",{},g("div",{class:"label"},"가방"),g("div",{class:"hint"},`${Ve.slots}칸 → ${Ve.slots+Zi.slotsPerLevel}칸`)),g("span",{class:"hint"},`한 칸 ${Ve.stack}개`)),g("div",{class:"section-label"},"필요한 것"),g("div",{class:"req-list"},...a),g("div",{class:"hint"},t.progress.building("workshop").done?"공방 도구방에서 바로 만들어요.":"공방을 먼저 복구해야 만들어요 🔨")),actions:i?[{label:"닫기",kind:"primary",onClick:()=>t.modal.close()}]:[{label:"만들기",kind:"primary",disabled:!n.ok,onClick:()=>t.buildCart()},{label:"닫기",kind:"ghost",onClick:()=>t.modal.close()}]}}}Un=new WeakSet,Uc=function(t,e=""){return g("div",{class:`progress-line ${e}`},g("i",{style:{width:`${Math.max(0,Math.min(100,t))}%`}}))},Mp=function(t){const i=this.game.progress.paddyPlot(t);if(!i)return{state:"empty",label:"볍씨를 심어 보세요",stage:-1,pct:0,crop:null,st:null};const n=Yt[i.crop]||Yt.rice,r=sr(i),a=Math.round((1-i.remain/Math.max(1,i.total))*100);return{state:i.remain>0?"grow":"ripe",label:i.remain>0?`${["새싹","자라는 중","여무는 중"][Math.max(0,r)]} · ${Math.ceil(i.remain)}초`:"수확 가능",stage:r,pct:a,crop:n,st:i}},Sp=function(t,e){if(e.state==="empty"){const r=g("button",{class:"mini farm-btn",type:"button"},"🌾 심기");return r.addEventListener("click",()=>this.game.openPaddySeedPicker(t)),r}if(e.state==="ripe"){const r=g("button",{class:"mini farm-btn on",type:"button"},"🧺 수확");return r.addEventListener("click",()=>this.game.harvestPaddy(t)),r}const i=e.st.watered<ve.maxWater,n=g("button",{class:`mini farm-btn ${i?"water":""}`,type:"button"},i?`💧 물 ${ve.maxWater-e.st.watered}`:"💧 끝");return i||(n.disabled=!0),n.addEventListener("click",()=>this.game.waterPaddy(t)),n};const Au={muted:!1,timeScale:1,fps30:!1},Ru=[1,10,60];var P,wp,Ep,Tp,Ap,Rp,Cp,Pp,Fc,Lp,eo,Dp,Ip,Oc,Lr,Dr,Np,Up,Fp,Op,kc,kp,Bp,zp,Gp,Bc,zc,Hp,lS,Vp,Ht,Wp,At,$p,Yi,Gc,Ys,An,io,Xp,no,qp,Yp,cs,Hc,Vc,so,Wc,Kp;class oS{constructor(t,e){Ne(this,P);this.canvas=t,this.uiRoot=e,this.mode="boot",this.state={day:1,elapsed:120,discovered:[],settings:{...Au}},this.saveStore=new MM,this.audio=new ky,this.saveData=null,this.hasSave=!1,this.lastSavedAt=0,this.progress=new np,this.gathering=null,this.drops=null,this.fx=null,this.panels=null,this.life=null,this.fishing=null,this.farming=null,this.paddy=null,this.bridge=null,this.phase3=null,this.phase4=null,this.minimap=null,this.achAcc=0,this.welcomeAcc=0,this.cartSprite=null,this.fishTarget=null,this.nodeMeshes=[],this.siteMeshes=[],this.keys=new Set,this.paused=!1,this.contextLost=!1,this.target=null,this.last=0,this.acc30=0,this.autosaveAcc=0,this.hudAcc=0,this.frames=0,this.fpsAcc=0,this.fps=0,this.stats={fps:0,calls:0,triangles:0,sceneCalls:0,sceneTriangles:0},this.titleAngle=0,this.lookAt=new U,this.tmpA=new U,this.tmpB=new U,this.raycaster=new L0,this.tap={x:0,y:0,t:0},this.title=null,this.hud=null,this.modal=null}async start(){this.atlases=await FM(),S(this,P,wp).call(this),S(this,P,Ep).call(this),S(this,P,Tp).call(this),S(this,P,Ap).call(this),S(this,P,Rp).call(this),S(this,P,Cp).call(this),await S(this,P,Pp).call(this),S(this,P,Up).call(this)}async backToTitle(){this.modal.close(),await this.save(),this.mode="title",this.hasSave=!0,this.hud.hide(),this.hud.joystick.setEnabled(!1),S(this,P,Fc).call(this),this.title&&this.title.setProgress(1)}interact(){if(this.mode!=="play"||this.modal.isOpen||this.paused)return;if(this.fishing&&this.fishing.active){this.fishing.reel(),S(this,P,Ht).call(this);return}const t=this.target;if(!t){this.hud.toast("가까이에 살펴볼 게 없어요 — 나무나 바위를 두드려 보세요 🪓",1700);return}if(t.isNode){this.gathering.hit(t),S(this,P,Ht).call(this);return}if(t.kind==="plot"){S(this,P,Xp).call(this,t.index);return}if(t.kind==="paddy"){S(this,P,qp).call(this,t.index);return}if(t.kind==="bridge"){this.openBridge();return}if(t.kind==="site"){S(this,P,Bc).call(this,t);return}if(t.kind==="fish"){this.openFishSpot();return}S(this,P,zc).call(this,t)}toggleMute(){return this.state.settings.muted=!this.state.settings.muted,this.audio.setMuted(this.state.settings.muted),this.hud.setMuted(this.state.settings.muted),this.state.settings.muted}openPause(){if(this.mode!=="play"||this.modal.isOpen)return;const t=this.state.settings,e=Ya(this.state.elapsed),i=g("button",{class:`switch ${t.muted?"on":""}`,type:"button","aria-label":"음소거"});i.addEventListener("click",()=>{const h=this.toggleMute();i.classList.toggle("on",h)});const n=[],r=g("div",{class:"seg"});for(const h of Ru){const d=g("button",{type:"button",class:t.timeScale===h?"on":""},`${h}×`);d.addEventListener("click",()=>{this.state.settings.timeScale=h;for(const f of n)f.classList.remove("on");d.classList.add("on"),S(this,P,Ht).call(this)}),n.push(d),r.append(d)}const a=g("button",{class:`switch ${t.fps30?"on":""}`,type:"button","aria-label":"30fps 절전"});a.addEventListener("click",()=>{this.state.settings.fps30=!this.state.settings.fps30,a.classList.toggle("on",this.state.settings.fps30)});const o=(h,d,f)=>g("div",{class:"row"},g("div",{},g("div",{class:"label"},h),g("div",{class:"hint"},d)),f),l=this.lastSavedAt?new Date(this.lastSavedAt).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"}):"아직 없음",c=g("div",{},g("div",{class:"section-label"},"지금 섬"),g("div",{class:"row"},g("div",{},g("div",{class:"label"},`Day ${this.state.day} · ${e.label}`),g("div",{class:"hint"},`도감 ${this.state.discovered.length}/${Ln.length} · 고양이 ${this.cats.length}마리`)),g("span",{class:"hint"},Yd(this.state.elapsed))),g("div",{class:"section-label"},"설정"),o("음소거","섬의 소리를 끕니다",i),o("시간 배속","20분 하루를 빨리 감아 조명 변화를 확인",r),o("30fps 절전","배터리와 발열을 아껴요",a),g("div",{class:"section-label"},"저장"),g("div",{class:"hint"},`자동 저장 · ${this.saveStore.mode==="idb"?"IndexedDB":"localStorage"} · 마지막 ${l}`));S(this,P,At).call(this,{title:"잠깐 쉬는 중",subtitle:"모달이 열려 있는 동안 섬의 시간도 멈춰요",body:c,actions:[{label:"계속 걷기",kind:"primary",onClick:()=>this.modal.close()},{label:"타이틀로 돌아가기",kind:"ghost",onClick:()=>this.backToTitle()}],onClose:()=>this.save()})}openQuick(t){if(!(this.mode!=="play"||this.modal.isOpen)){if(t==="codex")return this.openCodex();if(t==="rank")return this.openRank();if(t==="bag")return this.openBag();if(t==="farm")return this.openFarm();if(t==="build"&&t==="build"){const e=g("div",{});for(const l of _i){const c=this.progress.building(l.id),h=Ka[l.id]||{},d=Object.values(h).reduce((v,x)=>v+x,0),f=Object.entries(h).reduce((v,[x,p])=>v+Math.min(p,c.invested[x]||0),0),u=g("button",{class:`site-item as-button ${c.done?"done":""}`,type:"button",onclick:()=>this.openBuild(l.id)},g("div",{class:"site-ico"},c.done?"✨":l.icon),g("div",{style:{flex:"1"}},g("div",{class:"site-name"},l.name),g("div",{class:"site-meta"},c.done?"복구 완료":`재료 ${f}/${d} 투입`)),g("span",{class:"hint"},c.done?"완료":"복구"));e.append(u)}const i=_i.filter(l=>this.progress.building(l.id).done).length,n=this.progress.bridgeState(),r=Object.entries(Vs).every(([l,c])=>(n.invested[l]||0)>=c),a=Object.entries(Vs).reduce((l,[c,h])=>l+Math.min(h,n.invested[c]||0),0),o=Object.values(Vs).reduce((l,c)=>l+c,0);e.append(g("button",{class:`site-item as-button ${n.built?"done":""}`,type:"button",onclick:()=>this.openBridge()},g("div",{class:"site-ico"},n.built?"✨":"🌉"),g("div",{style:{flex:"1"}},g("div",{class:"site-name"},"다리 (강 건너 개척권)"),g("div",{class:"site-meta"},n.built?"건널 수 있어요":r?"재료가 모였어요":`재료 ${a}/${o} 투입`)),g("span",{class:"hint"},n.built?"완성":"놓기"))),S(this,P,At).call(this,{title:"섬 건축",subtitle:`네 곳 중 ${i}곳 복구 · 다리 ${n.built?"완성":"미완성"}`,body:g("div",{},e,g("div",{class:"section-label"},"Tip"),g("div",{class:"hint"},"Day 를 기다릴 필요 없어요 — 재료만 모이면 Day 1에도 바로 복구합니다. 공방을 복구하면 창고가 열려요.")),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]});return}}}openBag(){this.mode==="play"&&S(this,P,At).call(this,this.panels.bag())}openStorage(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 창고가 열려요 🔨",2200);return}S(this,P,At).call(this,this.panels.storage())}}openBuild(t){this.mode==="play"&&S(this,P,At).call(this,this.panels.build(t))}openWorkshop(){this.mode==="play"&&S(this,P,At).call(this,this.panels.workshopMenu())}openMailbox(t=null){this.mode==="play"&&(this.questSource="mail",t&&this.progress.markRead(t),S(this,P,At).call(this,this.panels.mailbox(t)),S(this,P,Ht).call(this))}eatBerry(){if(this.mode!=="play")return!1;const t=this.progress.inventory;if(t.count("berry")<=0)return this.audio.sfxDeny(),this.hud.toast("가방에 열매가 없어요 🍓 — 나무 밑을 살펴보세요",2e3),!1;if(this.progress.stamina>=di.max)return this.hud.toast("기력이 이미 가득해요 💪",1600),!1;t.take("berry",1),this.progress.restStamina(di.eat),this.audio.sfxEat();const e=this.player.position;return this.fx&&this.fx.float(`+${di.eat} 기력`,e.x,e.y+1.7,e.z,"#6f9450"),this.hud.toast(`열매를 먹었어요 — 기력 +${di.eat}`,1800),S(this,P,Ht).call(this),this.save(),this.modal.isOpen&&S(this,P,At).call(this,this.panels.bag()),!0}moveToStorage(t,e="all"){this.progress.inventory.toStorage(t,e)>0?(this.audio.sfxUi(),this.save()):this.audio.sfxDeny(),S(this,P,At).call(this,this.panels.storage())}moveFromStorage(t,e="all"){this.progress.inventory.fromStorage(t,e)>0?(this.audio.sfxUi(),this.save()):(this.audio.sfxDeny(),this.hud.toast("가방이 가득 차서 꺼내지 못했어요",1800)),S(this,P,At).call(this,this.panels.storage())}invest(t){const e=this.progress.building(t),i=Ka[t]||{},n=this.progress.inventory;let r=0;for(const[a,o]of Object.entries(i)){const l=o-(e.invested[a]||0);if(l<=0)continue;const c=n.take(a,l);c>0&&(e.invested[a]=(e.invested[a]||0)+c,r+=c)}if(r>0){this.audio.sfxBuild();const a=_i.find(o=>o.id===t);a&&this.fx&&this.fx.burst(a.x,a.y+a.height*.5,a.z,"#ffe3b0",12,{spread:1.6,up:2.2}),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.panels.build(t))}else this.audio.sfxDeny(),this.hud.toast("넣을 재료가 부족해요 — 채집해 올까요? 🪓",2e3)}completeBuild(t){const e=this.progress.building(t),i=Ka[t]||{};if(!Object.entries(i).every(([a,o])=>(e.invested[a]||0)>=o)||e.done)return!1;const r=_i.find(a=>a.id===t);return e.done=!0,this.world.scenery.setBuilt(t,!0),this.landmarkLabels.setDone(t,!0),this.audio.sfxFanfare(),r&&this.fx&&(this.fx.burst(r.x,r.y+r.height*.55,r.z,"#ffe6a8",34,{spread:3.2,up:4.4,size:1.3}),this.fx.float("복구 완료!",r.x,r.y+r.height*.9,r.z,"#b2698f")),this.hud.toast(`🎉 ${r?r.name:t} 복구 완료!`,3200),t==="workshop"?setTimeout(()=>this.hud.toast("공방이 열렸어요 — 창고·요리·도구 강화를 쓸 수 있어요 📦",3e3),900):t==="dock"?setTimeout(()=>this.hud.toast("부두 끝에서 [낚시하기] — 찌를 던져 볼까요? 🎣",3e3),900):t==="vending"&&setTimeout(()=>this.hud.toast("자판기가 켜졌어요 — 재료와 물고기를 팔고 물건을 살 수 있어요 🥤",3e3),900),this.save(),S(this,P,Ht).call(this),this.checkAchievements(),S(this,P,At).call(this,this.panels.build(t)),!0}claimGift(t){const e=mo.find(r=>r.id===t);if(!e||!e.gift||this.progress.isClaimed(t))return!1;const i=this.progress.inventory;let n=0;for(const[r,a]of Object.entries(e.gift)){if(!xe[r]){Bi[r]&&this.progress.addSupply(r,a);continue}const o=i.add(r,a);o>0&&(i.storage[r]=(i.storage[r]||0)+o,n+=o)}return this.progress.markClaimed(t),this.progress.markRead(t),this.audio.sfxPickup(),this.hud.toast(n>0?`선물을 받았어요 — 가방이 가득해 ${n}개는 창고에 넣었어요 🎁`:"선물을 받았어요 🎁",2800),this.save(),S(this,P,Ht).call(this),S(this,P,cs).call(this),S(this,P,At).call(this,this.panels.mailbox(t)),!0}paintDittoThumb(t,e){S(this,P,$p).call(this,t,e)}openCodex(){this.mode==="play"&&S(this,P,At).call(this,this.life.codex())}openRank(){this.mode==="play"&&S(this,P,At).call(this,this.life.rank())}openQuest(){this.mode==="play"&&(this.questSource="quest",S(this,P,At).call(this,this.life.quests()))}openVending(){if(this.mode==="play"){if(!this.progress.building("vending").done){this.audio.sfxDeny(),this.hud.toast("자판기를 먼저 복구해야 열려요 🥤",2200),S(this,P,At).call(this,this.panels.build("vending"));return}S(this,P,At).call(this,this.life.vending())}}openCooking(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 요리할 수 있어요 🔨",2200),S(this,P,At).call(this,this.panels.build("workshop"));return}S(this,P,At).call(this,this.life.cooking())}}openUpgrade(){if(this.mode==="play"){if(!this.progress.building("workshop").done){this.audio.sfxDeny(),this.hud.toast("공방을 먼저 복구해야 도구를 강화할 수 있어요 🔨",2200);return}S(this,P,At).call(this,this.life.upgrade())}}openCat(t){this.mode==="play"&&S(this,P,At).call(this,this.life.cat(t))}openFarm(){this.mode==="play"&&S(this,P,At).call(this,this.phase3.farm())}openSeedPicker(t){this.mode==="play"&&S(this,P,At).call(this,this.phase3.seedPicker(t))}openAchievements(){this.mode==="play"&&S(this,P,At).call(this,this.phase3.achievements())}openMinimap(){this.mode==="play"&&this.minimap&&S(this,P,At).call(this,{title:"🗺️ 섬 지도",subtitle:"사각 섬 72×72 — 강과 다리, 남쪽 생활권과 북쪽 개척권",body:this.minimap.modalBody(),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]})}plantPlot(t,e){if(!this.farming)return!1;const i=this.farming.plotByIndex(t),n=this.farming.plant(i,e);if(!n.ok){this.audio.sfxDeny();const r=n.reason==="seed"?"그 씨앗이 없어요 — 자판기 [사기] 탭에서 사 올까요? 🌱":n.reason==="occupied"?"이미 자라고 있는 밭이에요":"지금은 심을 수 없어요";return this.hud.toast(r,2200),this.modal.isOpen&&S(this,P,At).call(this,this.phase3.seedPicker(t)),!1}return S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.phase3.farm()),!0}waterPlot(t){if(!this.farming)return!1;const e=this.farming.plotByIndex(t),i=this.progress.toolLevel("water"),n=this.farming.water(e,i);if(n.ok)this.hud.toast(`💧 ${n.watered}칸에 물을 줬어요 — 남은 시간 절반! (기력 -${n.cost})`,2300);else{this.audio.sfxDeny();const r=n.reason==="stamina"?`기력이 부족해요 — 물주기에 ${n.cost} 필요해요 💪`:n.reason==="max"?"물을 줄 만큼 준 밭이에요 — 이제 기다리면 익어요":"지금은 물을 줄 밭이 없어요";this.hud.toast(r,2200)}return S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.phase3.farm()),n.ok}harvestPlot(t){if(!this.farming)return!1;const e=this.farming.plotByIndex(t),i=this.farming.harvest(e);return i.ok||(this.audio.sfxDeny(),this.hud.toast(i.reason==="growing"?"아직 덜 자랐어요 — 조금만 기다려요 🌱":"빈 밭이에요",2e3)),S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.phase3.farm()),i.ok}openBridge(){this.mode==="play"&&S(this,P,At).call(this,this.phase4.bridge())}investBridge(){const t=this.progress.bridgeState(),e=this.progress.inventory;let i=0;for(const[n,r]of Object.entries(Vs)){const a=r-(t.invested[n]||0);if(a<=0)continue;const o=e.take(n,a);o>0&&(t.invested[n]=(t.invested[n]||0)+o,i+=o)}i>0?(this.audio.sfxBuild(),this.fx&&this.fx.burst(Vt.x,Vt.deckY+.7,Vt.z+Vt.halfSpan-.6,"#ffe3b0",12,{spread:1.6,up:2.2}),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.phase4.bridge())):(this.audio.sfxDeny(),this.hud.toast("넣을 재료가 부족해요 — 통나무와 돌을 모아 올까요? 🪓",2200))}completeBridge(){const t=this.progress.bridgeState();return!Object.entries(Vs).every(([i,n])=>(t.invested[i]||0)>=n)||t.built?!1:(t.built=!0,t.invested={},S(this,P,Lr).call(this,!1),this.audio.sfxFanfare(),this.fx&&(this.fx.burst(Vt.x,Vt.deckY+.8,Vt.z,"#ffe6a8",34,{spread:3.2,up:4,size:1.3}),this.fx.float("다리 완성!",Vt.x,Vt.deckY+1.6,Vt.z+1.4,"#b2698f")),this.hud.toast("🌉 다리가 놓였어요 — 이제 북쪽 숲·채석장·논으로 걸어서 건널 수 있어요!",3400),this.save(),S(this,P,Ht).call(this),this.checkAchievements(),S(this,P,cs).call(this),S(this,P,At).call(this,this.phase4.bridge()),!0)}openPaddy(){this.mode==="play"&&S(this,P,At).call(this,this.phase4.paddy())}openPaddySeedPicker(t){this.mode==="play"&&S(this,P,At).call(this,this.phase4.paddySeedPicker(t))}plantPaddy(t,e="rice"){if(!this.paddy)return!1;const i=this.paddy.plotByIndex(t),n=this.paddy.plant(i,e);if(!n.ok){this.audio.sfxDeny();const r=n.reason==="seed"?"볍씨가 없어요 — 자판기 [사기] 탭에서 사 올까요? 🌾":n.reason==="occupied"?"이미 벼가 자라고 있는 논이에요":"지금은 심을 수 없어요";return this.hud.toast(r,2200),this.modal.isOpen&&S(this,P,At).call(this,this.phase4.paddySeedPicker(t)),!1}return S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.phase4.paddy()),!0}waterPaddy(t){if(!this.paddy)return!1;const e=this.paddy.plotByIndex(t),i=this.progress.toolLevel("water"),n=this.paddy.water(e,i);if(n.ok)this.hud.toast(`💧 논 ${n.watered}칸에 물을 댔어요 — 남은 시간 절반! (기력 -${n.cost})`,2300);else{this.audio.sfxDeny();const r=n.reason==="stamina"?`기력이 부족해요 — 물주기에 ${n.cost} 필요해요 💪`:n.reason==="max"?"물을 줄 만큼 준 논이에요 — 이제 기다리면 여물어요":"지금은 물을 줄 논이 없어요";this.hud.toast(r,2200)}return S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.phase4.paddy()),n.ok}harvestPaddy(t){if(!this.paddy)return!1;const e=this.paddy.plotByIndex(t),i=this.paddy.harvest(e);return i.ok||(this.audio.sfxDeny(),this.hud.toast(i.reason==="growing"?"아직 덜 여물었어요 — 조금만 기다려요 🌾":"빈 논이에요",2e3)),S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.phase4.paddy()),i.ok}canBuildCart(){if(this.progress.cartLevel>=Zi.maxLevel)return{ok:!1,reason:"max",lack:[]};if(!this.progress.building("workshop").done)return{ok:!1,reason:"workshop",lack:[]};const t=[];for(const[e,i]of Object.entries(Zi.cost)){const n=e==="coin"?this.progress.coins:this.progress.inventory.count(e);n<i&&t.push({id:e,need:i,have:n})}return{ok:t.length===0,reason:t.length?"lack":"",lack:t}}openCart(){this.mode==="play"&&S(this,P,At).call(this,this.phase4.cart())}buildCart(){const t=this.canBuildCart();if(!t.ok){this.audio.sfxDeny();const i=t.reason==="max"?"이미 리어카가 있어요 🛒":t.reason==="workshop"?"공방을 먼저 복구해야 리어카를 만들 수 있어요 🔨":"재료나 코인이 부족해요 🪙";return this.hud.toast(i,2400),this.modal.isOpen&&S(this,P,At).call(this,this.phase4.cart()),!1}for(const[i,n]of Object.entries(Zi.cost))i==="coin"?this.progress.spendCoins(n):this.progress.inventory.take(i,n);this.progress.cartLevel=1,S(this,P,Dr).call(this),this.audio.sfxBuild();const e=this.player.position;return this.fx&&(this.fx.burst(e.x,e.y+.9,e.z,"#ffe3b0",20,{spread:1.6,up:2.6}),this.fx.float("🛒 리어카 완성",e.x,e.y+2,e.z,"#b2698f")),this.hud.toast(`🛒 리어카 완성 — 가방이 ${Ve.slots}칸 → ${this.progress.inventory.slots}칸으로 늘었어요!`,3200),this.save(),S(this,P,Ht).call(this),this.checkAchievements(),this.modal.isOpen&&S(this,P,At).call(this,this.phase4.cart()),!0}openWelcome(){if(this.mode!=="play")return;const t=this.progress.welcome||{step:0},e=Ii.steps.map((i,n)=>{const r=n<t.step,a=n===t.step;return g("div",{class:`welcome-row ${r?"done":a?"cur":""}`},g("span",{class:"wico"},r?"✅":i.icon),g("div",{class:"wmain"},g("div",{class:"nm"},`${n+1}. ${i.label}`),g("div",{class:"meta"},i.hint||"")),g("span",{class:"wtag"},r?"완료":a?"지금":"다음"))});S(this,P,At).call(this,{title:"🎯 섬의 첫걸음",subtitle:`3단계를 마치면 단계마다 🪙 ${Ii.reward}`,body:g("div",{},g("div",{class:"welcome-list"},...e),g("div",{class:"hint"},`지금 ${t.step}/${Ii.steps.length} 단계 · 위에서부터 차례로 완료돼요`)),actions:[{label:"닫기",kind:"primary",onClick:()=>this.modal.close()}]})}checkAchievements(){this.progress.discoveredCount=this.state.discovered.length;const t=this.progress.checkAchievements();if(!t.length)return[];if(this.audio.sfxFanfare?.(),t.length===1){const e=t[0];this.hud.toast(`🏆 업적 달성 — ${e.name}! 랭크에서 보상을 받을 수 있어요`,3e3);const i=this.player.position;this.fx&&this.fx.float(`🏆 ${e.name}`,i.x,i.y+1.95,i.z,"#b2698f")}else this.hud.toast(`🏆 업적 ${t.length}개 달성 — ${t.map(e=>e.name).join(" · ")}`,3400);return S(this,P,Ht).call(this),this.save(),t}claimAchievement(t){const e=this.progress.claimAchievement(t);if(!e.ok)return this.audio.sfxDeny(),e.reason==="unfinished"&&this.hud.toast("아직 조건을 채우지 못했어요",1800),!1;const i=e.row;return this.audio.sfxCoin(),this.hud.toast(`🏆 ${i.name} 보상 — 🪙 ${i.reward.coin}${i.reward.star?` · ⭐ ${i.reward.star}`:""}${e.stored?" (별조각은 창고로)":""}`,2800),S(this,P,Ht).call(this),this.save(),this.modal.isOpen&&S(this,P,At).call(this,this.phase3.achievements()),!0}openFishSpot(){if(this.mode!=="play")return;if(!this.progress.building("dock").done){this.audio.sfxDeny(),this.hud.toast("부두를 먼저 복구해야 낚시할 수 있어요 ⚓",2200),S(this,P,At).call(this,this.panels.build("dock"));return}if(this.fishing.active){this.fishing.reel();return}const t=this.progress,e=t.supply("bait"),i=g("div",{},g("div",{class:"hint"},"부두 끝으로 찌를 던져요. 물결이 퍼지다 입질이 오면 1.4초 안에 화면을 탭!"),g("div",{class:"row"},g("div",{},g("div",{class:"label"},"기력"),g("div",{class:"hint"},`낚시 1회에 ${qe.stamina} 소모`)),g("span",{class:"hint"},`${Math.round(t.stamina)} / 100`)),g("div",{class:"row"},g("div",{},g("div",{class:"label"},"별빛 미끼"),g("div",{class:"hint"},"희귀 어종 확률이 올라가요")),g("span",{class:"hint"},`${e}개`)),g("div",{class:"section-label"},"오늘의 물빛"),g("div",{class:"chips"},...Object.values(Ti).map(r=>g("span",{class:`lchip ${r.rare?"warm":""}`},`${r.icon} ${r.name}`)))),n=[{label:`🎣 낚시하기 (기력 ${qe.stamina})`,kind:"primary",onClick:()=>S(this,P,Vc).call(this,!1)}];e>0&&n.push({label:"🪱 별빛 미끼 쓰고 낚시",kind:"ghost",onClick:()=>S(this,P,Vc).call(this,!0)}),n.push({label:"닫기",kind:"ghost",onClick:()=>this.modal.close()}),S(this,P,At).call(this,{title:"🎣 부두 낚시",subtitle:"찌 · 물결 · 그리고 1.4초",body:i,actions:n})}cook(t){const e=this.progress.skills.level("cook"),i=XM(this.progress,t);if(!i.ok)return this.audio.sfxDeny(),this.hud.toast(i.reason==="full"?"기력이 이미 가득해요 💪":"재료가 부족해요 — 채집·낚시로 모아 올까요?",2200),this.modal.isOpen&&S(this,P,At).call(this,this.life.cooking()),!1;this.audio.sfxCook();const n=this.player.position;return this.fx.float(`${i.recipe.icon} ${i.recipe.name}`,n.x,n.y+1.8,n.z,"#b2698f"),this.hud.toast(`${i.recipe.icon} ${i.recipe.name} 완성 — 기력 +${i.recipe.stamina}`,2400),i.recipe.buff>0&&setTimeout(()=>this.hud.toast(`✨ ${go.seconds}초 동안 채집 기력이 가벼워져요`,2600),700),S(this,P,Ys).call(this,"cook",1),this.progress.skills.level("cook")>e&&S(this,P,Gc).call(this,"cook",this.progress.skills.row("cook").rank),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.life.cooking()),!0}upgradeTool(t){const e=us[t],i=this.progress.upgradeTool(t);if(!i.ok)return this.audio.sfxDeny(),this.hud.toast(i.reason==="max"?"이미 최고 레벨이에요":"재료나 코인이 부족해요 🪙",2200),this.modal.isOpen&&S(this,P,At).call(this,this.life.upgrade()),!1;this.audio.sfxBuild();const n=e.kind==="tree"?"나무":e.kind==="rock"?"바위":"텃밭";this.hud.toast(`${e.icon} ${e.name} Lv.${i.info.level} 강화! ${e.kind==="farm"?`한 번에 ${["1칸","십자 5칸","3×3 9칸"][i.info.level-1]}에 물을 줘요`:`${n}가 더 빨리 캐져요`}`,2600);const r=this.player.position;return this.fx.burst(r.x,r.y+.9,r.z,"#ffe3b0",14,{spread:1.1,up:2}),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.life.upgrade()),!0}sellItem(t,e=1){const i=YM(this.progress,t,e);return i.ok?(this.audio.sfxCoin(),this.hud.toast(`${dn(t)} ${hn(t)} ${i.count}개 → 🪙 ${i.coin}`,2200),S(this,P,Ys).call(this,"sell",i.count),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.life.vending()),!0):(this.audio.sfxDeny(),this.hud.toast("팔 수 있는 게 없어요",1800),!1)}buyGood(t){const e=KM(this.progress,t);return e.ok?(this.audio.sfxCoin(),this.hud.toast(`${e.good.icon} ${e.good.name} 구입 — ${e.good.price} 코인`,2200),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.life.vending()),!0):(this.audio.sfxDeny(),this.hud.toast(e.reason==="coin"?"섬 코인이 부족해요 — 자판기에 재료를 팔아 모아 보세요 🪙":"지금은 살 수 없어요",2200),this.modal.isOpen&&S(this,P,At).call(this,this.life.vending()),!1)}drinkAde(){return this.progress.supply("ade")<=0?(this.audio.sfxDeny(),!1):this.progress.stamina>=di.max?(this.hud.toast("기력이 이미 가득해요 💪",1800),!1):(this.progress.takeSupply("ade",1),this.progress.restStamina(Cc),this.audio.sfxEat(),this.hud.toast(`🥤 반짝 에이드 — 기력 +${Cc}`,2e3),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.life.vending()),!0)}petCat(t){const e=S(this,P,so).call(this,t),i=ei.find(r=>r.id===t);if(!e||!i)return;if(e.cd.pet>0){this.audio.sfxDeny();return}e.cd.pet=ti.pet.cooldown,e.pet(),this.audio.sfxMeow(),this.progress.restStamina(ti.pet.stamina);const n=this.progress.addAffection(t,ti.pet.aff);S(this,P,Yi).call(this,"care",wn.pet),S(this,P,Ys).call(this,"pet",1),S(this,P,Wc).call(this,i,e,n)}feedCat(t,e){const i=S(this,P,so).call(this,t),n=ei.find(l=>l.id===t),r=ti.snacks[e];if(!i||!n||!r)return;if(i.cd.snack>0){this.audio.sfxDeny(),this.hud.toast(`${n.name}가 방금 간식을 먹었어요 — 조금 뒤에 주세요`,1900);return}if((e==="churu"?this.progress.supply("churu"):e==="berry"?this.progress.inventory.count("berry"):this.progress.fishCount("anchovy"))<=0){this.audio.sfxDeny(),this.hud.toast(`${r.icon} ${r.name}이 없어요${e==="churu"?" — 자판기에서 살 수 있어요":""}`,2200);return}e==="churu"?this.progress.takeSupply("churu",1):e==="berry"?this.progress.inventory.take("berry",1):this.progress.takeFish("anchovy",1),i.cd.snack=r.cooldown,i.feast(),this.audio.sfxMeow();const o=this.progress.addAffection(t,r.aff);S(this,P,Yi).call(this,"care",wn.treat),S(this,P,Ys).call(this,"treat",1),this.hud.toast(`${n.name}가 ${r.icon} ${r.name}을 맛있게 먹었어요 · 호감도 +${r.aff}`,2300),S(this,P,Wc).call(this,n,i,o)}toggleFollow(t){const e=this.progress.catRow(t),i=ei.find(a=>a.id===t);if(!e.canFollow){this.audio.sfxDeny(),this.hud.toast(`따라오기는 호감도 Lv.${ti.followLevel}부터예요 (지금 Lv.${e.level})`,2200);return}const n=this.progress.cat(t);n.follow=!n.follow;const r=S(this,P,so).call(this,t);r&&r.setFollow(n.follow),this.audio.sfxUi(),this.hud.toast(n.follow?`${i?i.name:t}가 따라와요 🐾`:`${i?i.name:t}는 여기서 기다릴게요`,2e3),this.save(),S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.life.cat(t))}claimQuest(t){const e=this.progress.claimQuest(t);if(!e.ok)return this.audio.sfxDeny(),!1;const i=e.quest;if(i.reward.star>0){const n=this.progress.inventory.add("star",i.reward.star);n>0&&(this.progress.inventory.storage.star=this.progress.inventory.stored("star")+n)}return this.audio.sfxCoin(),this.hud.toast(`📋 의뢰 완료! 🪙 ${i.reward.coin}${i.reward.star?` · ⭐ ${i.reward.star}`:""}`,2600),this.save(),S(this,P,Ht).call(this),S(this,P,At).call(this,this.questSource==="mail"?this.panels.mailbox():this.life.quests()),!0}snapshot(){const t=this.progress.toJSON();return t.nodes=this.gathering?this.gathering.toJSON():{},{version:5,savedAt:Date.now(),day:this.state.day,elapsedSeconds:Math.round(this.state.elapsed*100)/100,elapsed:Math.round(this.state.elapsed*100)/100,playerPos:{x:+this.player.position.x.toFixed(3),y:+(this.player.position.y||0).toFixed(3),z:+this.player.position.z.toFixed(3)},player:{x:+this.player.position.x.toFixed(3),z:+this.player.position.z.toFixed(3),yaw:+this.player.yaw.toFixed(3)},discoveredDittos:[...this.state.discovered],discovered:[...this.state.discovered],settings:{...this.state.settings},...t}}async save(){if(this.mode==="boot")return!1;const t=this.snapshot(),e=await this.saveStore.save(t);return this.lastSavedAt=t.savedAt,this.lastSaveOk=e,e&&(this.hasSave=!0),e}}P=new WeakSet,wp=function(){const t=new Eb({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight,!1),t.outputColorSpace=we,t.toneMapping=yo,t.toneMappingExposure=1.28,t.shadowMap.enabled=!0,t.shadowMap.type=Nr,t.info.autoReset=!1,this.renderer=t,this.camera=new Ui(sn.fov,window.innerWidth/window.innerHeight,.1,900),this.camera.position.set(0,28,48),this.onResize=()=>{const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/Math.max(1,i),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,i,!1),this.post&&this.post.setSize(e,i)},window.addEventListener("resize",this.onResize),window.visualViewport&&window.visualViewport.addEventListener("resize",this.onResize)},Ep=function(){this.world=new Ny(this.atlases),this.scene=this.world.scene,this.player=new By(Rn,this.world.terrain,this.atlases),this.player.colliders=[...this.world.scenery.colliders,...Ln.map(t=>({x:t.x,z:t.z,r:Math.max(.34,t.height*.42)})),...ei.map(t=>({x:t.x,z:t.z,r:.3}))],this.scene.add(this.player.group),this.scene.add(this.player.shadow),this.scene.add(this.player.dust),this.cats=ei.map(t=>new Hy(t,this.world.terrain,this.atlases));for(const t of this.cats)this.scene.add(t.group),this.scene.add(t.shadow);this.dittos=Ln.map(t=>new Xy(t,this.world.terrain,this.atlases));for(const t of this.dittos)this.scene.add(t.group),this.scene.add(t.shadow);this.spriteMaterials=[...this.player.sprites,...this.cats.flatMap(t=>t.sprites),...this.dittos.flatMap(t=>t.sprites)],this.world.setWeather(vl(this.state.day)),this.lookAt.set(Rn.x,this.player.position.y+sn.lookHeight,Rn.z),this.fx=new $M(this.scene,this.uiRoot),this.drops=new WM(this.scene,this.world.terrain),this.gathering=new BM({scenery:this.world.scenery,progress:this.progress,drops:this.drops,fx:this.fx,audio:this.audio}),this.gathering.hooks={toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPickup:()=>S(this,P,Ht).call(this),onHit:t=>{t==="tree"?S(this,P,An).call(this,"chop",1):t==="rock"&&S(this,P,An).call(this,"mine",1)},onHarvest:(t,e)=>{S(this,P,Yi).call(this,"gather",wn.harvest),(t==="tree"||t==="rock"||t==="flower")&&this.progress.bump(t,1),e&&e.petal&&S(this,P,An).call(this,"petal",e.petal),S(this,P,Ht).call(this),this.checkAchievements(),S(this,P,cs).call(this)}},this.nodeMeshes=this.world.scenery.nodes.map(t=>t.mesh),this.siteMeshes=this.world.scenery.sites.map(t=>t.billboard.mesh),this.fishing=new GM({progress:this.progress,audio:this.audio,fx:this.fx,scene:this.scene,hud:null,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onCatch:(t,e)=>{this.audio.sfxCoin(),S(this,P,Yi).call(this,"fish",qe.exp),S(this,P,An).call(this,"fish",1);const i=this.progress.fishCount(t.id)+(t.id==="star",0)===1;this.hud.toast(`${t.icon} ${t.name} ${t.id==="star"?"":`${e}cm`} 낚았다!${i?" 도감 등록 📔":""}`,2600),S(this,P,Ht).call(this),this.save()},onStart:()=>S(this,P,Ht).call(this)}}),this.farming=new jM({terrain:this.world.terrain,progress:this.progress,fx:this.fx,audio:this.audio,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPlant:()=>{S(this,P,Yi).call(this,"farm",wn.plant),S(this,P,An).call(this,"plant",1,!1)},onWater:()=>{S(this,P,Yi).call(this,"farm",wn.water)},onHarvest:(t,e)=>{S(this,P,Yi).call(this,"farm",wn.crop),S(this,P,An).call(this,"crop",1,!1),this.audio.sfxCoin()},onRipe:t=>{t.length&&(this.audio.sfxRare?.(),this.hud?.toast(`✨ 텃밭에 ${t.length}칸이 다 자랐어요 — [수확] 할까요?`,2600),S(this,P,Ht).call(this))}}}),this.scene.add(this.farming.group),this.bridge=new nS(this.world.terrain),this.scene.add(this.bridge.group),this.paddy=new rS({terrain:this.world.terrain,progress:this.progress,fx:this.fx,audio:this.audio,hooks:{toast:(t,e)=>this.hud&&this.hud.toast(t,e),save:()=>{this.mode==="play"&&this.save()},onPlant:()=>{S(this,P,Yi).call(this,"farm",wn.plant),S(this,P,An).call(this,"plant",1,!1),S(this,P,cs).call(this)},onWater:()=>S(this,P,Yi).call(this,"farm",wn.water),onHarvest:(t,e)=>{S(this,P,Yi).call(this,"farm",wn.crop),S(this,P,An).call(this,"crop",1,!1),this.audio.sfxCoin()},onRipe:t=>{t.length&&(this.audio.sfxRare?.(),this.hud?.toast(`✨ 논에 벼 ${t.length}칸이 다 여물었어요 — [수확] 할까요?`,2600),S(this,P,Ht).call(this))}}}),this.scene.add(this.paddy.group),this.cartSprite=new ui(new ii({map:uy(),transparent:!0,depthWrite:!1,toneMapped:!1})),this.cartSprite.scale.set(.72,.72,1),this.cartSprite.visible=!1,this.cartSprite.renderOrder=4,this.scene.add(this.cartSprite),this.spriteMaterials.push(this.cartSprite.material)},Tp=function(){this.post=gu(this.renderer,this.scene,this.camera)},Ap=function(){this.hud=new Jy(this.uiRoot,{onAction:()=>this.interact(),onMute:()=>this.toggleMute(),onPause:()=>this.openPause(),onQuick:t=>this.openQuick(t),onMail:()=>this.openMailbox(),onQuest:()=>this.openQuest(),onWelcome:()=>this.openWelcome()}),this.hud.hide(),this.modal=new jy(this.uiRoot),this.landmarkLabels=new tM(this.uiRoot,this.world.scenery.sites),this.panels=new lM(this),this.life=new JM(this),this.phase3=new tS(this),this.phase4=new aS(this),this.minimap=new iS(this.hud.container,this),this.fishing&&(this.fishing.hud=this.hud)},Rp=function(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.tap.x=e.clientX,this.tap.y=e.clientY,this.tap.t=performance.now(),this.audio.resume()}),t.addEventListener("pointerup",e=>S(this,P,Vp).call(this,e)),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),this.mode==="play"&&!this.modal.isOpen&&((e.code==="KeyE"||e.code==="Space")&&this.interact(),e.code==="Escape"&&this.openPause())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("gesturestart",e=>e.preventDefault())},Cp=function(){document.addEventListener("visibilitychange",()=>{document.hidden?(this.save(),this.audio.suspend()):(this.last=performance.now(),this.audio.resume())}),window.addEventListener("pagehide",()=>this.save()),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.hud.setContextLost(!0),this.last=performance.now()},!1),this.canvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.hud.setContextLost(!1);try{this.post&&this.post.dispose()}catch{}this.post=gu(this.renderer,this.scene,this.camera),this.post.setSize(window.innerWidth,window.innerHeight);const t=Tf();this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of n)r&&r.isMeshToonMaterial&&(r.gradientMap=t,r.needsUpdate=!0)});const e=this.world.sunLight.shadow;e.map&&e.map.dispose(),e.map=null,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(i=>{const n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(const r of n)if(r){r.needsUpdate=!0;for(const a of["map","alphaMap","gradientMap"])r[a]&&(r[a].needsUpdate=!0)}}),this.last=performance.now()},!1)},Pp=async function(){const t=await this.saveStore.load();t&&typeof t=="object"&&(this.saveData=t,this.hasSave=!0),S(this,P,Fc).call(this),this.mode="title",S(this,P,kc).call(this,.016);const e=performance.now(),i=()=>{const n=Math.min(1,(performance.now()-e)/720);this.title&&this.title.setProgress(n),n<1&&requestAnimationFrame(i)};requestAnimationFrame(i)},Fc=function(){this.title&&this.title.destroy(),this.title=new Qy(this.uiRoot,{hasSave:this.hasSave,onContinue:()=>S(this,P,eo).call(this,!0),onNew:()=>S(this,P,Lp).call(this)})},Lp=function(){if(this.title&&(this.title.busy=!1),!this.hasSave){S(this,P,eo).call(this,!1);return}this.modal.open({title:"새 섬을 열까요?",subtitle:"지금 저장된 섬은 사라져요",body:"저장된 Day·플레이 위치·도감 기록이 지워지고 Day 1 아침부터 다시 시작해요.",actions:[{label:"그대로 둘게요",kind:"ghost",onClick:()=>this.modal.close()},{label:"새로 시작",kind:"primary",onClick:async()=>{await this.saveStore.clear(),this.hasSave=!1,this.saveData=null,this.modal.close(),S(this,P,eo).call(this,!1)}}],onClose:()=>{this.title&&(this.title.busy=!1,this.title.hint.textContent="저장된 섬이 있어요 — 이어서 걸어볼까요?")}})},eo=function(t){t&&this.saveData?S(this,P,Ip).call(this,this.saveData):S(this,P,Dp).call(this),this.mode="play",this.paused=!1,this.title&&this.title.hide(),this.hud.show(),this.hud.joystick.setEnabled(!0),this.hud.setMuted(this.state.settings.muted),this.audio.start(),this.audio.setMuted(this.state.settings.muted),this.audio.setPhase(Ya(this.state.elapsed).id),this.world.setWeather(vl(this.state.day)),S(this,P,Np).call(this),S(this,P,Ht).call(this),this.farming&&this.farming.syncAll(),this.paddy&&this.paddy.syncAll(),S(this,P,Lr).call(this,!0),S(this,P,Dr).call(this),S(this,P,Hc).call(this),this.checkAchievements(),this.hud.toast(t?`Day ${this.state.day} — 다시 만나서 반가워요 🌿`:"Day 1 — 섬에 도착했어요 🌿",2800),this.autosaveAcc=0,this.save()},Dp=function(){this.state.day=1,this.state.elapsed=120,this.state.discovered=[],this.state.settings={...Au};for(const t of this.dittos)t.discovered=!1;this.player.teleport(Rn.x,Rn.z),this.player.setYaw(Math.PI),this.progress.reset(),this.progress.rollQuests(1),S(this,P,Dr).call(this),S(this,P,Lr).call(this,!0),this.gathering&&(this.gathering.applySaved({}),this.gathering.hooks.toast=(t,e)=>this.hud&&this.hud.toast(t,e));for(const t of this.cats)t.setFollow(!1);this.fishing&&this.fishing.cancel(),this.fx&&this.fx.clear(),this.farming&&this.farming.syncAll(),this.paddy&&this.paddy.syncAll(),S(this,P,Oc).call(this)},Ip=function(t){const e=Number(t.day);this.state.day=Number.isFinite(e)&&e>=1?Math.min(3650,Math.floor(e)):1;const i=Number(t.elapsed);this.state.elapsed=Number.isFinite(i)?Math.max(0,Math.min(Ue-.01,i)):60,this.state.discovered=Array.isArray(t.discovered)?t.discovered.filter(l=>typeof l=="string"):[];const n=t.settings&&typeof t.settings=="object"?t.settings:{};this.state.settings={muted:!!n.muted,timeScale:Ru.includes(Number(n.timeScale))?Number(n.timeScale):1,fps30:!!n.fps30};const r=Number(t.player&&t.player.x),a=Number(t.player&&t.player.z);iu(!!(t.bridgeBuilt||t.bridge&&t.bridge.built)),Number.isFinite(r)&&Number.isFinite(a)&&this.world.terrain.isWalkable(r,a)?this.player.teleport(r,a):this.player.teleport(Rn.x,Rn.z);const o=Number(t.player&&t.player.yaw);Number.isFinite(o)&&this.player.setYaw(o);for(const l of this.dittos)l.discovered=this.state.discovered.includes(l.id);this.progress.load(t),this.gathering&&this.gathering.applySaved(t.nodes||{}),S(this,P,Oc).call(this),this.progress.rollQuests(this.state.day);for(const l of this.cats)l.setFollow(this.progress.cat(l.id).follow);this.fishing&&this.fishing.cancel(),this.progress.discoveredCount=this.state.discovered.length,this.farming&&this.farming.syncAll(),S(this,P,Lr).call(this,!0),S(this,P,Dr).call(this),this.paddy&&this.paddy.syncAll()},Oc=function(){for(const t of _i){const e=!!this.progress.building(t.id).done;this.world.scenery.setBuilt(t.id,e,!0),this.landmarkLabels&&this.landmarkLabels.setDone(t.id,e)}},Lr=function(t=!1){const e=this.progress.bridgeBuilt;return iu(e),this.bridge&&this.bridge.setBuilt(e,t),e},Dr=function(){this.progress.syncCapacity(),this.cartSprite&&(this.cartSprite.visible=this.progress.cartLevel>0)},Np=function(){const t=this.player.position;this.camera.position.set(t.x+sn.offset.x,t.y+sn.offset.y,t.z+sn.offset.z),this.lookAt.set(t.x,t.y+sn.lookHeight,t.z),this.camera.lookAt(this.lookAt)},Up=function(){this.last=performance.now();const t=e=>{this.rafId=requestAnimationFrame(t);let i=(e-this.last)/1e3;if(this.last=e,(!Number.isFinite(i)||i<=0)&&(i=1/60),i=Math.min(i,.05),this.state.settings.fps30){if(this.acc30+=i,this.acc30<1/32)return;i=Math.min(this.acc30,.06),this.acc30=0}S(this,P,Fp).call(this,i)};this.rafId=requestAnimationFrame(t)},Fp=function(t){const e=this.mode==="play"&&!this.paused&&!this.modal.isOpen&&!document.hidden,i=e?t*this.state.settings.timeScale:0;if(e&&(this.state.elapsed+=t*this.state.settings.timeScale,this.state.elapsed>=Ue)){this.state.elapsed-=Ue,this.state.day+=1,this.world.setWeather(vl(this.state.day));const r=this.progress.rollQuests(this.state.day);this.hud.toast(r?`Day ${this.state.day} — 새로운 하루 · 의뢰 2건이 새로 왔어요 📋`:`Day ${this.state.day} — 새로운 하루가 시작됐어요`,3e3)}e&&this.progress.tickBuff(t)&&this.hud.toast("✨ 황금 버프가 끝났어요",2e3),this.player.speedScale=this.progress.buffActive&&this.progress.buff.kind==="golden"?go.speed:1;const n=S(this,P,Bp).call(this,e);if(this.player.update(t,n,this.world.terrain,this.camera),this.cartSprite&&this.cartSprite.visible){const r=this.player.yaw,a=Math.sin(r)*.72+Math.cos(r)*.34,o=Math.cos(r)*.72-Math.sin(r)*.34,l=Math.sin(performance.now()*.006)*.02;this.cartSprite.position.set(this.player.position.x-a,this.player.position.y+.4+l,this.player.position.z-o)}for(const r of this.cats)r.update(t,this.camera,this.player.position,e);for(const r of this.dittos)r.update(t,this.player.position,this.camera);this.gathering&&this.gathering.update(t,i,this.player.position,e),this.farming&&this.farming.update(t,i,this.camera),this.paddy&&this.paddy.update(t,i,this.camera),this.bridge&&this.bridge.update(t,this.world.palette?this.world.palette.night:0),this.fishing&&e&&this.fishing.update(t,this.player.position),this.fx&&this.fx.update(t,this.camera),this.mode==="play"&&(this.achAcc+=t,this.achAcc>.5&&(this.achAcc=0,this.checkAchievements()));for(const r of this.spriteMaterials)r.color.copy(this.world.spriteLight);if(this.world.scenery.setSpriteLight(this.world.spriteLight),this.mode==="title"?S(this,P,kc).call(this,t):S(this,P,kp).call(this,t),this.world.update(t,this.state.elapsed,this.camera,this.player.position),this.landmarkLabels.update(this.camera,this.mode==="play"),this.mode==="play"&&(S(this,P,zp).call(this),this.hudAcc+=t,this.hudAcc>.14&&(this.hudAcc=0,S(this,P,Ht).call(this),S(this,P,cs).call(this)),this.minimap&&this.minimap.update(t)),e){this.autosaveAcc+=t;const r=this.state.settings.timeScale>1?Math.max(2,si.intervalSeconds):si.intervalSeconds;this.autosaveAcc>=r&&(this.autosaveAcc=0,this.save())}this.contextLost||(this.renderer.info.reset(),this.post.render()),S(this,P,Op).call(this,t)},Op=function(t){if(this.frames+=1,this.fpsAcc+=t,this.fpsAcc>=.5){this.fps=Math.round(this.frames/this.fpsAcc);const e=this.renderer.info.render,i=this.post?this.post.sceneStats:e;this.stats.fps=this.fps,this.stats.calls=e.calls,this.stats.triangles=e.triangles,this.stats.sceneCalls=i.calls,this.stats.sceneTriangles=i.triangles,this.frames=0,this.fpsAcc=0}},kc=function(t){this.titleAngle+=t*.09;const e=40,i=Math.cos(this.titleAngle)*e,n=Math.sin(this.titleAngle)*e,r=16+Math.sin(this.titleAngle*.8)*.9;this.camera.position.set(i,r,n),this.camera.lookAt(0,1,0)},kp=function(t){const e=this.player.position,i=this.tmpA.set(e.x+sn.offset.x,e.y+sn.offset.y,e.z+sn.offset.z),n=1-Math.exp(-6.5*t);this.camera.position.lerp(i,n);const r=this.world.terrain.sampleHeight(this.camera.position.x,this.camera.position.z),a=Math.max(r,0)+1.3;this.camera.position.y<a&&(this.camera.position.y=a);const o=this.tmpB.set(e.x,e.y+sn.lookHeight,e.z);this.lookAt.lerp(o,Math.min(1,t*9)),this.camera.lookAt(this.lookAt)},Bp=function(t){if(!t)return{x:0,z:0};const e=this.hud.joystick.vector;let i=e.x,n=e.y,r=0,a=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(a-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(r-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(r+=1);const o=Math.hypot(r,a);return o>0&&(r/=o,a/=o,Math.hypot(r,a)>Math.hypot(i,n)&&(i=r,n=a)),{x:i,z:n}},zp=function(){let t=null,e=1/0;const i=this.player.position;this.fishTarget=null;for(const h of this.dittos){const d=h.distanceTo(i);h.setNear(d<3.8),d<=rn.dittoRange&&d<e&&(t=h,e=d)}for(const h of this.cats){const d=h.distanceTo(i);d<=rn.catRange&&d<e&&(t=h,e=d)}const n=this.gathering.nearest(i,rn.nodeRange);if(n){const h=Math.hypot(n.x-i.x,n.z-i.z);h<e&&(t=n,e=h)}const r=this.farming?this.farming.nearest(i,rn.nodeRange):null;if(r){const h=Math.hypot(r.x-i.x,r.z-i.z);if(h<e){const d=S(this,P,io).call(this,r.index);t={kind:"plot",plot:r,index:r.index,x:r.x,z:r.z,info:d},e=h}}const a=this.paddy?this.paddy.nearest(i,rn.plotRange):null;if(a){const h=Math.hypot(a.x-i.x,a.z-i.z);if(h<e){const d=S(this,P,no).call(this,a.index);t={kind:"paddy",plot:a,index:a.index,x:a.x,z:a.z,info:d},e=h}}if(!this.progress.bridgeBuilt){const h=Math.hypot(Vt.south.x-i.x,Vt.south.z-i.z),d=Math.hypot(Vt.north.x-i.x,Vt.north.z-i.z),f=Math.min(h,d);if(f<=Vt.range+.6&&f<e){const u=h<=d?Vt.south:Vt.north;t={kind:"bridge",id:"bridge",x:u.x,z:u.z,side:h<=d?"south":"north"},e=f}}const o=S(this,P,Gp).call(this,i,rn.siteRange);if(o){const h=Math.hypot(o.x-i.x,o.z-i.z);h<e&&(t=o,e=h)}const l=qe.spot,c=Math.hypot(l.x-i.x,l.z-i.z);c<=l.range&&(this.fishTarget={kind:"fish",id:"dock_fish",x:l.x,z:l.z,built:!!this.progress.building("dock").done},c<e&&(t=this.fishTarget,e=c)),this.target=t},Gp=function(t,e){let i=null,n=e;for(const r of this.world.scenery.sites){const a=Math.hypot(r.x-t.x,r.z-t.z);a<n&&(i=r,n=a)}return i},Bc=function(t){t.id==="workshop"?S(this,P,At).call(this,this.panels.workshopMenu()):t.id==="vending"&&this.progress.building("vending").done?this.openVending():S(this,P,At).call(this,this.panels.build(t.id))},zc=function(t){t.kind==="ditto"?S(this,P,Hp).call(this,t):t.kind==="cat"&&this.openCat(t.id)},Hp=function(t){t.interact(),this.state.discovered.includes(t.id)?this.hud.toast(`${t.name} — "·‿·" 이미 도감에 있어요`,2e3):(t.markDiscovered(),this.state.discovered.push(t.id),this.hud.toast(`도감 등록! ${t.name} ·‿· (${this.state.discovered.length}/${Ln.length})`,3200),this.save(),this.checkAchievements(),S(this,P,cs).call(this))},lS=function(t){t.pet(),this.hud.toast(`${t.name}가 기분 좋아 보여요 ♥`,1800)},Vp=function(t){if(this.mode!=="play"||this.modal.isOpen)return;if(this.fishing&&this.fishing.active){this.fishing.reel(),S(this,P,Ht).call(this);return}if(performance.now()-this.tap.t>520||Math.hypot(t.clientX-this.tap.x,t.clientY-this.tap.y)>14)return;const e=new Rt(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight*2-1));this.raycaster.setFromCamera(e,this.camera);const i=[...this.dittos.map(h=>h.hitMesh),...this.cats.map(h=>h.body),...this.nodeMeshes,...this.siteMeshes,...this.drops.rayTargets()],n=this.raycaster.intersectObjects(i,!0);if(!n.length)return;let r=n[0].object,a=null;for(;r&&!a;){const h=r.userData||{};h.drop?a={kind:"drop",drop:h.drop}:h.node?a={kind:"node",node:h.node}:h.site?a={kind:"site",site:h.site}:h.actor&&(a={kind:"actor",actor:h.actor}),r=r.parent}if(!a)return;const o=this.player.position,l=(h,d)=>Math.hypot(h-o.x,d-o.z);if(a.kind==="drop"){if(l(a.drop.x,a.drop.z)>rn.nodeRange+1.6){this.hud.toast("조금 더 가까이 가서 주울까요?",1600);return}this.gathering.pickup(a.drop)&&this.drops.remove(a.drop),S(this,P,Ht).call(this);return}if(a.kind==="node"){if(l(a.node.x,a.node.z)>rn.nodeRange+.9){this.hud.toast("조금 더 가까이 가서 두드려 볼까요?",1600);return}this.gathering.hit(a.node),S(this,P,Ht).call(this);return}if(a.kind==="site"){if(l(a.site.x,a.site.z)>rn.siteRange+1.6){this.hud.toast("조금 더 가까이 가서 살펴볼까요?",1600);return}S(this,P,Bc).call(this,a.site);return}const c=a.actor;if(c.distanceTo(o)>rn.tapRange){this.hud.toast("조금 더 가까이 가서 볼까요?",1600);return}S(this,P,zc).call(this,c)},Ht=function(){const t=Ya(this.state.elapsed),e=this.world.weather;if(this.hud.setTime({icon:t.icon,label:t.label,weatherIcon:e.icon,weatherLabel:e.label,day:this.state.day,clock:Yd(this.state.elapsed),speed:this.state.settings.timeScale}),this.hud.setStamina(this.progress.stamina,di.max),this.hud.setMail(S(this,P,Wp).call(this)),this.hud.setBag(this.progress.inventory.usedSlots(),this.progress.inventory.slots),this.hud.setCoins(this.progress.coins),this.hud.setCart(this.progress.cartLevel,this.progress.inventory.slots),this.hud.setQuests(this.progress.claimableQuests),this.hud.setBuff(this.progress.buffActive?`✨ ${Math.ceil(this.progress.buff.left)}s`:null),this.hud.setAchievements(this.progress.claimableAchievements),this.hud.setRipePlots(this.progress.farmPlots.filter(n=>n&&n.remain<=0).length),this.fishing&&this.fishing.active){const n=this.fishing.state;n==="bite"?this.hud.setAction({active:!0,icon:"🎣",label:"입질! 탭!"}):n==="cast"||n==="wait"?this.hud.setAction({active:!0,icon:"🎣",label:"회수하기"}):this.hud.setAction({active:!1,icon:"🎣",label:"낚시 마무리"});return}const i=this.target;if(i&&i.kind==="ditto")this.hud.setAction({active:!0,icon:i.discovered?"👀":"🔍",label:i.discovered?"다시 보기":"살펴보기"});else if(i&&i.kind==="cat")this.hud.setAction({active:!0,icon:"🐾",label:"돌보기"});else if(i&&i.kind==="fish")this.hud.setAction(i.built?{active:!0,icon:"🎣",label:"낚시하기"}:{active:!0,icon:"⚓",label:"부두 복구 필요"});else if(i&&i.isNode){const n=Ro[i.kind];this.hud.setAction({active:!0,icon:n.icon,label:`${n.verb} ${i.hitsLeft}/${i.hitsNeeded}`})}else if(i&&i.kind==="plot"){const n=S(this,P,io).call(this,i.index);n.state==="empty"?this.hud.setAction({active:!0,icon:"🌱",label:"씨앗 심기"}):n.state==="ripe"?this.hud.setAction({active:!0,icon:"🧺",label:"수확하기"}):n.st.watered<ve.maxWater?this.hud.setAction({active:!0,icon:"💧",label:`물주기 ${Math.ceil(n.st.remain)}초`}):this.hud.setAction({active:!1,icon:"🌱",label:`${Math.ceil(n.st.remain)}초 뒤 수확`})}else if(i&&i.kind==="paddy"){const n=S(this,P,no).call(this,i.index);n.state==="empty"?this.hud.setAction({active:!0,icon:"🌾",label:"볍씨 심기"}):n.state==="ripe"?this.hud.setAction({active:!0,icon:"🧺",label:"벼 수확하기"}):n.st.watered<ve.maxWater?this.hud.setAction({active:!0,icon:"💧",label:`물주기 ${Math.ceil(n.st.remain)}초`}):this.hud.setAction({active:!1,icon:"🌾",label:`${Math.ceil(n.st.remain)}초 뒤 수확`})}else if(i&&i.kind==="bridge")this.hud.setAction({active:!0,icon:"🌉",label:"다리 놓기"});else if(i&&i.kind==="site"){const n=!!this.progress.building(i.id).done,r=i.id==="workshop"?"공방 열기":i.id==="vending"?"자판기 열기":`${i.name} 살펴보기`;this.hud.setAction({active:!0,icon:i.id==="workshop"&&n?"🔨":i.id==="vending"&&n?"🥤":n?"✨":i.icon,label:n?r:`${i.name} 복구하기`})}else this.hud.setAction({active:!1,icon:"✋",label:"둘러보기"})},Wp=function(){let t=0;for(const e of mo){const i=!this.progress.isRead(e.id),n=!!e.gift&&!this.progress.isClaimed(e.id);(i||n)&&(t+=1)}return t},At=function(t){this.paused=!0,this.hud.joystick.reset();const e=t.onClose;this.modal.open({...t,onClose:()=>{this.paused=!1,e&&e()}})},$p=function(t,e){const i=this.atlases.get(e.set);if(!i)return;const n=i.cols,r=i.rows;t.style.backgroundImage=`url("${new URL(`sprites/${e.set}_sheet.png`,document.baseURI).href}")`,t.style.backgroundSize=`${n*100}% ${r*100}%`,t.style.backgroundPosition=`${(e.col-1)/Math.max(1,n-1)*100}% ${(e.row-1)/Math.max(1,r-1)*100}%`},Yi=function(t,e){const i=this.progress.gainExp(t,e);return i.rankedUp&&S(this,P,Gc).call(this,t,i.rank),S(this,P,Ht).call(this),i},Gc=function(t,e){const i=this.progress.skills.row(t);this.audio.sfxFanfare(),this.hud.toast(`🌱 ${i.name} 랭크 업! ${e||i.rank}`,2800);const n=this.player.position;this.fx&&this.fx.float(`${i.icon} ${e||i.rank}`,n.x,n.y+1.9,n.z,"#b2698f")},Ys=function(t,e=1,i=!0){const n=this.progress.questEvent(t,e);return i&&this.progress.bump(t,e),n.length&&(this.audio.sfxCoin(),this.hud.toast(`📋 의뢰 달성 — ${n.map(r=>r.label).join(" · ")} · 우체통에서 보상 받기`,3e3)),S(this,P,Ht).call(this),this.checkAchievements(),n},An=function(t,e=1,i=!0){return S(this,P,Ys).call(this,t,e,i)},io=function(t){const e=this.progress.plot(t);if(!e)return{state:"empty",st:null,stage:-1,pct:0,crop:null};const i=Yt[e.crop],n=sr(e);return{state:e.remain>0?"grow":"ripe",st:e,stage:n,crop:i,pct:Math.round((1-e.remain/Math.max(1,e.total))*100)}},Xp=function(t){const e=S(this,P,io).call(this,t);return e.state==="empty"?this.openSeedPicker(t):e.state==="ripe"?this.harvestPlot(t):this.waterPlot(t)},no=function(t){const e=this.progress.paddyPlot(t);if(!e)return{state:"empty",st:null,stage:-1,pct:0,crop:null};const i=Yt[e.crop],n=sr(e);return{state:e.remain>0?"grow":"ripe",st:e,stage:n,crop:i,pct:Math.round((1-e.remain/Math.max(1,e.total))*100)}},qp=function(t){const e=S(this,P,no).call(this,t);return e.state==="empty"?this.openPaddySeedPicker(t):e.state==="ripe"?this.harvestPaddy(t):this.waterPaddy(t)},Yp=function(t){return t===0?this.progress.mailbox.claimed.length>0:t===1?this.state.discovered.length>=2:t===2?this.progress.count("tree")>=1:!0},cs=function(){if(this.mode!=="play")return 0;const t=this.progress.welcome||(this.progress.welcome={step:0});if(t.step>=Ii.steps.length)return 0;let e=0;for(;t.step<Ii.steps.length&&S(this,P,Yp).call(this,t.step);){t.step+=1,e+=1;const i=Ii.steps[t.step-1];this.progress.addCoins(Ii.reward),this.audio.sfxCoin?.(),this.hud.toast(`🎉 ${i.icon} ${i.label} 완료! 코인 +${Ii.reward} (${t.step}/${Ii.steps.length})`,2600);const n=this.player.position;this.fx&&this.fx.float(`+${Ii.reward} 🪙`,n.x,n.y+1.9,n.z,"#b38b3d")}return e>0&&(t.step>=Ii.steps.length&&setTimeout(()=>this.hud&&this.hud.toast("🌿 첫걸음 완료 — 이제 섬은 마음 가는 대로예요",3e3),900),S(this,P,Hc).call(this),S(this,P,Ht).call(this),this.save()),e},Hc=function(){if(!this.hud)return;const t=this.progress.welcome||{step:0};this.hud.setWelcome(t.step,Ii.steps)},Vc=function(t){this.modal.close();const e=this.fishing.start({bait:t});if(!e.ok){this.audio.sfxDeny();const i=e.reason==="stamina"?"기력이 부족해요 — 열매나 요리로 채워 주세요 🍓":e.reason==="dock"?"부두를 먼저 복구해야 해요 ⚓":e.reason==="no-bait"?"별빛 미끼가 없어요":"지금은 낚시할 수 없어요";this.hud.toast(i,2200);return}this.player.setYaw(0),e.bait&&this.hud.toast("별빛 미끼를 달았어요 — 희귀한 손님이 올지도 🪱",2e3),S(this,P,Ht).call(this)},so=function(t){return this.cats.find(e=>e.id===t)||null},Wc=function(t,e,i){const n=i.row.level;this.fx&&this.fx.burst(e.position.x,e.position.y+e.height,e.position.z,"#ffb3d1",12,{spread:.9,up:1.6}),i.levelUp?(this.hud.toast(`${t.name} 호감도 Lv.${n}! ${ti.dialogue[t.id][n-1]}`,3400),S(this,P,Kp).call(this,t.id,n),n===ti.followLevel&&setTimeout(()=>this.hud.toast(`${t.name}가 이제 따라와도 된대요 — 돌보기에서 [따라오기] 🐾`,3e3),900)):Math.random()<.45&&this.hud.toast(ti.dialogue[t.id][n-1],1900),this.save(),S(this,P,Ht).call(this),this.modal.isOpen&&S(this,P,At).call(this,this.life.cat(t.id))},Kp=function(t,e){const i=ti.gifts[e];if(!i)return;const n=this.progress.cat(t);if(n.gifts.includes(e))return;n.gifts.push(e);let r=0;for(const[l,c]of Object.entries(i)){const h=this.progress.inventory.add(l,c);h>0&&(this.progress.inventory.storage[l]=this.progress.inventory.stored(l)+h,r+=h)}this.audio.sfxRare();const a=Object.entries(i).map(([l,c])=>`${dn(l)} ${hn(l)} ${c}`).join(" · "),o=ei.find(l=>l.id===t);this.hud.toast(`🎁 ${o?o.name:t}의 보답 선물 — ${a}${r?` (${r}개는 창고로)`:""}`,3200)};const cS=document.getElementById("scene"),hS=document.getElementById("ui"),Ir=new oS(cS,hS);window.__metamong={game:Ir,get audio(){return Ir.audio},life(){const s=Ir,t=s.progress.inventory,e=s.progress;return{stamina:Math.round(e.stamina*10)/10,bagSlots:t.usedSlots(),bag:t.toJSON().bag,storage:{...t.storage},buildings:JSON.parse(JSON.stringify(e.buildings)),mailbox:{read:[...e.mailbox.read],claimed:[...e.mailbox.claimed]},harvested:s.gathering?Object.keys(s.gathering.toJSON()).length:0,drops:s.drops?s.drops.items.map(i=>`${i.itemId}x${i.count}`):[],coins:e.coins,skills:e.skills.toJSON(),skillRows:e.skills.rows().map(i=>({id:i.id,rank:i.rank,level:i.level,exp:i.exp,pct:i.pct})),title:e.skills.title(),fish:{...e.fish},fishKinds:e.fishKinds(),supplies:{...e.supplies},tools:e.tools,cats:Object.fromEntries(Object.keys(e.cats).map(i=>[i,{...e.catRow(i),follow:!!e.cat(i).follow}])),cooked:{...e.cooked},quests:{day:e.quests.day,list:e.questRows()},claimableQuests:e.claimableQuests,buff:{...e.buff},fishingStats:{...e.fishing},crops:{...e.crops},cropKinds:e.cropKinds(),seeds:Object.fromEntries(Object.keys(e.supplies).filter(i=>i.startsWith("seed_")).map(i=>[i,e.supply(i)])),farmPlots:e.farmPlots.map(i=>i?{crop:i.crop,remain:Math.round(i.remain*10)/10,total:i.total,watered:i.watered,ripe:i.remain<=0}:null),farmPlanted:e.farmPlots.filter(Boolean).length,farmRipe:e.farmPlots.filter(i=>i&&i.remain<=0).length,counters:{...e.counters},achievements:{unlocked:[...e.achievements.unlocked],claimed:[...e.achievements.claimed]},achRows:e.achRows().map(i=>({id:i.id,value:i.value,need:i.need,done:i.done,claimed:i.claimed})),claimableAchievements:e.claimableAchievements,waterCan:e.toolLevel("water"),bridge:{built:e.bridgeBuilt,invested:{...e.bridgeState().invested}},bridgeBuilt:e.bridgeBuilt,cartLevel:e.cartLevel,bagCapacity:e.inventory.slots,paddyPlots:e.paddyPlots.map(i=>i?{crop:i.crop,remain:Math.round(i.remain*10)/10,total:i.total,watered:i.watered,ripe:i.remain<=0}:null),paddyPlanted:e.paddyPlots.filter(Boolean).length,paddyRipe:e.paddyPlots.filter(i=>i&&i.remain<=0).length,welcome:{step:e.welcome?e.welcome.step:0},mapGrid:{grid:fn,half:ge},fishing:s.fishing?{state:s.fishing.state,active:s.fishing.active,baitUsed:!!s.fishing.baitUsed,last:s.fishing.lastResult?{id:s.fishing.lastResult.fish.id,size:s.fishing.lastResult.size}:null}:null}},stats(){const s=Ir;return{mode:s.mode,day:s.state.day,elapsed:Math.round(s.state.elapsed*100)/100,phase:Ya(s.state.elapsed).id,paused:s.paused,modalOpen:!!(s.modal&&s.modal.isOpen),contextLost:s.contextLost,fps:s.stats.fps,drawCalls:s.stats.calls,triangles:s.stats.triangles,sceneDrawCalls:s.stats.sceneCalls,sceneTriangles:s.stats.sceneTriangles,discovered:[...s.state.discovered],saveMode:s.saveStore.mode,hasSave:s.hasSave,stamina:Math.round(s.progress.stamina*10)/10,bagSlots:s.progress.inventory.usedSlots(),coins:s.progress.coins,quests:s.progress.claimableQuests,fishing:s.fishing?s.fishing.state:"idle",settings:{...s.state.settings},player:s.player?{x:+s.player.position.x.toFixed(2),y:+s.player.position.y.toFixed(2),z:+s.player.position.z.toFixed(2),yaw:+s.player.yaw.toFixed(3),facing:s.player.facing,flipX:!!s.player.flip,frame:s.player.frameName}:null}}};Ir.start().catch(s=>{console.error("게임 시작 실패",s);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#fff6fa;color:#6b5878;font-family:system-ui,sans-serif;font-size:14px;text-align:center;padding:24px;z-index:999;",t.textContent="섬을 여는 중 문제가 생겼어요. 새로고침 해 주세요: "+String(s&&s.message?s.message:s),document.body.appendChild(t)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(new URL("sw.js",document.baseURI)).catch(()=>{})});
