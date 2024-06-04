(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const V={},xt=[],ye=()=>{},vo=()=>!1,Bn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wr=e=>e.startsWith("onUpdate:"),re=Object.assign,Vr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bo=Object.prototype.hasOwnProperty,z=(e,t)=>bo.call(e,t),N=Array.isArray,kt=e=>Yn(e)==="[object Map]",$i=e=>Yn(e)==="[object Set]",F=e=>typeof e=="function",ee=e=>typeof e=="string",gt=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Di=e=>(q(e)||F(e))&&F(e.then)&&F(e.catch),zi=Object.prototype.toString,Yn=e=>zi.call(e),yo=e=>Yn(e).slice(8,-1),Hi=e=>Yn(e)==="[object Object]",Kr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jt=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_o=/-(\w)/g,St=Wn(e=>e.replace(_o,(t,n)=>n?n.toUpperCase():"")),wo=/\B([A-Z])/g,vt=Wn(e=>e.replace(wo,"-$1").toLowerCase()),Ui=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Wn(e=>e?`on${Ui(e)}`:""),qe=(e,t)=>!Object.is(e,t),Sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Bi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ma;const Yi=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Oo(r):Gr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ee(e)||q(e))return e}const xo=/;(?![^(]*\))/g,ko=/:([^]+)/,Ao=/\/\*[^]*?\*\//g;function Oo(e){const t={};return e.replace(Ao,"").split(xo).forEach(n=>{if(n){const r=n.split(ko);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(ee(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const So="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eo=Yr(So);function Wi(e){return!!e||e===""}const Na=e=>ee(e)?e:e==null?"":N(e)||q(e)&&(e.toString===zi||!F(e.toString))?JSON.stringify(e,Vi,2):String(e),Vi=(e,t)=>t&&t.__v_isRef?Vi(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[sr(r,i)+" =>"]=a,n),{})}:$i(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>sr(n))}:gt(t)?sr(t):q(t)&&!N(t)&&!Hi(t)?String(t):t,sr=(e,t="")=>{var n;return gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class Co{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Po(e,t=we){t&&t.active&&t.effects.push(e)}function To(){return we}let ut;class qr{constructor(t,n,r,a){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Po(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,et();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Io(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),tt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ge,n=ut;try{return Ge=!0,ut=this,this._runnings++,Ra(this),this.fn()}finally{La(this),this._runnings--,ut=n,Ge=t}}stop(){this.active&&(Ra(this),La(this),this.onStop&&this.onStop(),this.active=!1)}}function Io(e){return e.value}function Ra(e){e._trackId++,e._depsLength=0}function La(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ki(e.deps[t],e);e.deps.length=e._depsLength}}function Ki(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ge=!0,_r=0;const Gi=[];function et(){Gi.push(Ge),Ge=!1}function tt(){const e=Gi.pop();Ge=e===void 0?!0:e}function Jr(){_r++}function Zr(){for(_r--;!_r&&wr.length;)wr.shift()()}function Xi(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Ki(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const wr=[];function qi(e,t,n){Jr();for(const r of e.keys()){let a;r._dirtyLevel<t&&(a??(a=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(a??(a=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&wr.push(r.scheduler)))}Zr()}const Ji=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},xr=new WeakMap,dt=Symbol(""),kr=Symbol("");function de(e,t,n){if(Ge&&ut){let r=xr.get(e);r||xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ji(()=>r.delete(n))),Xi(ut,a)}}function Fe(e,t,n,r,a,i){const s=xr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&N(e)){const l=Number(r);s.forEach((c,u)=>{(u==="length"||!gt(u)&&u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":N(e)?Kr(n)&&o.push(s.get("length")):(o.push(s.get(dt)),kt(e)&&o.push(s.get(kr)));break;case"delete":N(e)||(o.push(s.get(dt)),kt(e)&&o.push(s.get(kr)));break;case"set":kt(e)&&o.push(s.get(dt));break}Jr();for(const l of o)l&&qi(l,4);Zr()}const Mo=Yr("__proto__,__v_isRef,__isVue"),Zi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt)),Fa=No();function No(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){et(),Jr();const r=U(this)[t].apply(this,n);return Zr(),tt(),r}}),e}function Ro(e){gt(e)||(e=String(e));const t=U(this);return de(t,"has",e),t.hasOwnProperty(e)}class Qi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Ko:rs:i?ns:ts).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=N(t);if(!a){if(s&&z(Fa,n))return Reflect.get(Fa,n,r);if(n==="hasOwnProperty")return Ro}const o=Reflect.get(t,n,r);return(gt(n)?Zi.has(n):Mo(n))||(a||de(t,"get",n),i)?o:me(o)?s&&Kr(n)?o:o.value:q(o)?a?as(o):ta(o):o}}class es extends Qi{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._isShallow){const l=Wt(i);if(!Ln(r)&&!Wt(r)&&(i=U(i),r=U(r)),!N(t)&&me(i)&&!me(r))return l?!1:(i.value=r,!0)}const s=N(t)&&Kr(n)?Number(n)<t.length:z(t,n),o=Reflect.set(t,n,r,a);return t===U(a)&&(s?qe(r,i)&&Fe(t,"set",n,r):Fe(t,"add",n,r)),o}deleteProperty(t,n){const r=z(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Fe(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!gt(n)||!Zi.has(n))&&de(t,"has",n),r}ownKeys(t){return de(t,"iterate",N(t)?"length":dt),Reflect.ownKeys(t)}}class Lo extends Qi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Fo=new es,jo=new Lo,$o=new es(!0);const Qr=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(qe(t,i)&&de(a,"get",t),de(a,"get",i));const{has:s}=Vn(a),o=r?Qr:n?ra:Vt;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(qe(e,a)&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",dt),Reflect.get(e,"size",e)}function ja(e){e=U(e);const t=U(this);return Vn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function $a(e,t){t=U(t);const n=U(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?qe(t,s)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function Da(e){const t=U(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function za(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=t?Qr:e?ra:Vt;return!e&&de(o,"iterate",dt),s.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),s=kt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),u=n?Qr:t?ra:Vt;return!t&&de(i,"iterate",l?kr:dt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:o?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Be(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Do(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:ja,set:$a,delete:Da,clear:za,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:ja,set:$a,delete:Da,clear:za,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[zo,Ho,Uo,Bo]=Do();function ea(e,t){const n=t?e?Bo:Uo:e?Ho:zo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Yo={get:ea(!1,!1)},Wo={get:ea(!1,!0)},Vo={get:ea(!0,!1)};const ts=new WeakMap,ns=new WeakMap,rs=new WeakMap,Ko=new WeakMap;function Go(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xo(e){return e.__v_skip||!Object.isExtensible(e)?0:Go(yo(e))}function ta(e){return Wt(e)?e:na(e,!1,Fo,Yo,ts)}function qo(e){return na(e,!1,$o,Wo,ns)}function as(e){return na(e,!0,jo,Vo,rs)}function na(e,t,n,r,a){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Xo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function $t(e){return Wt(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function is(e){return e?!!e.__v_raw:!1}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Jo(e){return Object.isExtensible(e)&&Bi(e,"__v_skip",!0),e}const Vt=e=>q(e)?ta(e):e,ra=e=>q(e)?as(e):e;class ss{constructor(t,n,r,a){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qr(()=>t(this._value),()=>En(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return(!t._cacheable||t.effect.dirty)&&qe(t._value,t._value=t.effect.run())&&En(t,4),os(t),t.effect._dirtyLevel>=2&&En(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Zo(e,t,n=!1){let r,a;const i=F(e);return i?(r=e,a=ye):(r=e.get,a=e.set),new ss(r,a,i||!a,n)}function os(e){var t;Ge&&ut&&(e=U(e),Xi(ut,(t=e.dep)!=null?t:e.dep=Ji(()=>e.dep=void 0,e instanceof ss?e:void 0)))}function En(e,t=4,n){e=U(e);const r=e.dep;r&&qi(r,t)}function me(e){return!!(e&&e.__v_isRef===!0)}function aa(e){return Qo(e,!1)}function Qo(e,t){return me(e)?e:new el(e,t)}class el{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Vt(t)}get value(){return os(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Wt(t);t=n?t:U(t),qe(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vt(t),En(this,4))}}function Kt(e){return me(e)?e.value:e}const tl={get:(e,t,n)=>Kt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ls(e){return $t(e)?e:new Proxy(e,tl)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xe(e,t,n,r){try{return r?e(...r):e()}catch(a){Kn(a,t,n)}}function Ae(e,t,n,r){if(F(e)){const a=Xe(e,t,n,r);return a&&Di(a)&&a.catch(i=>{Kn(i,t,n)}),a}if(N(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}}function Kn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){et(),Xe(l,null,10,[e,s,o]),tt();return}}nl(e,n,a,r)}function nl(e,t,n,r=!0){console.error(e)}let Gt=!1,Ar=!1;const ie=[];let Te=0;const At=[];let We=null,ot=0;const fs=Promise.resolve();let ia=null;function rl(e){const t=ia||fs;return e?t.then(this?e.bind(this):e):t}function al(e){let t=Te+1,n=ie.length;for(;t<n;){const r=t+n>>>1,a=ie[r],i=Xt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function sa(e){(!ie.length||!ie.includes(e,Gt&&e.allowRecurse?Te+1:Te))&&(e.id==null?ie.push(e):ie.splice(al(e.id),0,e),cs())}function cs(){!Gt&&!Ar&&(Ar=!0,ia=fs.then(ds))}function il(e){const t=ie.indexOf(e);t>Te&&ie.splice(t,1)}function sl(e){N(e)?At.push(...e):(!We||!We.includes(e,e.allowRecurse?ot+1:ot))&&At.push(e),cs()}function Ha(e,t,n=Gt?Te+1:0){for(;n<ie.length;n++){const r=ie[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ie.splice(n,1),n--,r()}}}function us(e){if(At.length){const t=[...new Set(At)].sort((n,r)=>Xt(n)-Xt(r));if(At.length=0,We){We.push(...t);return}for(We=t,ot=0;ot<We.length;ot++)We[ot]();We=null,ot=0}}const Xt=e=>e.id==null?1/0:e.id,ol=(e,t)=>{const n=Xt(e)-Xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ds(e){Ar=!1,Gt=!0,ie.sort(ol);try{for(Te=0;Te<ie.length;Te++){const t=ie[Te];t&&t.active!==!1&&Xe(t,null,14)}}finally{Te=0,ie.length=0,us(),Gt=!1,ia=null,(ie.length||At.length)&&ds()}}function ll(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:v}=r[u]||V;v&&(a=n.map(x=>ee(x)?x.trim():x)),m&&(a=n.map(yr))}let o,l=r[o=ir(t)]||r[o=ir(St(t))];!l&&i&&(l=r[o=ir(vt(t))]),l&&Ae(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ae(c,e,6,a)}}function ms(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!F(e)){const l=c=>{const u=ms(c,t,!0);u&&(o=!0,re(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(q(e)&&r.set(e,null),null):(N(i)?i.forEach(l=>s[l]=null):re(s,i),q(e)&&r.set(e,s),s)}function Gn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,vt(t))||z(e,t))}let he=null,ps=null;function Fn(e){const t=he;return he=e,ps=e&&e.type.__scopeId||null,t}function fl(e,t=he,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Fn(t);let s;try{s=e(...a)}finally{Fn(i),r._d&&Ja(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:s,attrs:o,emit:l,render:c,renderCache:u,props:m,data:v,setupState:x,ctx:j,inheritAttrs:M}=e,B=Fn(e);let k,O;try{if(n.shapeFlag&4){const $=a||r,H=$;k=Pe(c.call(H,$,u,m,x,v,j)),O=o}else{const $=t;k=Pe($.length>1?$(m,{attrs:o,slots:s,emit:l}):$(m,null)),O=t.props?o:cl(o)}}catch($){Ut.length=0,Kn($,e,1),k=ae(mt)}let P=k;if(O&&M!==!1){const $=Object.keys(O),{shapeFlag:H}=P;$.length&&H&7&&(i&&$.some(Wr)&&(O=ul(O,i)),P=Et(P,O,!1,!0))}return n.dirs&&(P=Et(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),k=P,Fn(B),k}const cl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},ul=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(s[v]!==r[v]&&!Gn(c,v))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ua(r,s,c):!0:!!s;return!1}function Ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function ml({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const pl=Symbol.for("v-ndc"),hl=e=>e.__isSuspense;function gl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):sl(e)}const vl=Symbol.for("v-scx"),bl=()=>Pn(vl),gn={};function Dt(e,t,n){return hs(e,t,n)}function hs(e,t,{immediate:n,deep:r,flush:a,once:i,onTrack:s,onTrigger:o}=V){if(t&&i){const L=t;t=(...Q)=>{L(...Q),H()}}const l=le,c=L=>r===!0?L:lt(L,r===!1?1:void 0);let u,m=!1,v=!1;if(me(e)?(u=()=>e.value,m=Ln(e)):$t(e)?(u=()=>c(e),m=!0):N(e)?(v=!0,m=e.some(L=>$t(L)||Ln(L)),u=()=>e.map(L=>{if(me(L))return L.value;if($t(L))return c(L);if(F(L))return Xe(L,l,2)})):F(e)?t?u=()=>Xe(e,l,2):u=()=>(x&&x(),Ae(e,l,3,[j])):u=ye,t&&r){const L=u;u=()=>lt(L())}let x,j=L=>{x=P.onStop=()=>{Xe(L,l,4),x=P.onStop=void 0}},M;if(Jn)if(j=ye,t?n&&Ae(t,l,3,[u(),v?[]:void 0,j]):u(),a==="sync"){const L=bl();M=L.__watcherHandles||(L.__watcherHandles=[])}else return ye;let B=v?new Array(e.length).fill(gn):gn;const k=()=>{if(!(!P.active||!P.dirty))if(t){const L=P.run();(r||m||(v?L.some((Q,fe)=>qe(Q,B[fe])):qe(L,B)))&&(x&&x(),Ae(t,l,3,[L,B===gn?void 0:v&&B[0]===gn?[]:B,j]),B=L)}else P.run()};k.allowRecurse=!!t;let O;a==="sync"?O=k:a==="post"?O=()=>ue(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),O=()=>sa(k));const P=new qr(u,ye,O),$=To(),H=()=>{P.stop(),$&&Vr($.effects,P)};return t?n?k():B=P.run():a==="post"?ue(P.run.bind(P),l&&l.suspense):P.run(),M&&M.push(H),H}function yl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?gs(r,e):()=>r[e]:e.bind(r,r);let i;F(t)?i=t:(i=t.handler,n=t);const s=nn(this),o=hs(a,i.bind(r),n);return s(),o}function gs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t=1/0,n){if(t<=0||!q(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,me(e))lt(e.value,t,n);else if(N(e))for(let r=0;r<e.length;r++)lt(e[r],t,n);else if($i(e)||kt(e))e.forEach(r=>{lt(r,t,n)});else if(Hi(e))for(const r in e)lt(e[r],t,n);return e}function _l(e,t){if(he===null)return e;const n=Zn(he)||he.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,s,o,l=V]=t[a];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&lt(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:o,modifiers:l}))}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(et(),Ae(l,n,8,[e.el,o,e,t]),tt())}}/*! #__NO_SIDE_EFFECTS__ */function Pt(e,t){return F(e)?re({name:e.name},t,{setup:e}):e}const Cn=e=>!!e.type.__asyncLoader,vs=e=>e.type.__isKeepAlive;function wl(e,t){bs(e,"a",t)}function xl(e,t){bs(e,"da",t)}function bs(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Xn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)vs(a.parent.vnode)&&kl(r,t,n,a),a=a.parent}}function kl(e,t,n,r){const a=Xn(t,e,r,!0);ys(()=>{Vr(r[t],a)},n)}function Xn(e,t,n=le,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;et();const o=nn(n),l=Ae(t,n,e,s);return o(),tt(),l});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=le)=>(!Jn||e==="sp")&&Xn(e,(...r)=>t(...r),n),Al=He("bm"),Ol=He("m"),Sl=He("bu"),El=He("u"),Cl=He("bum"),ys=He("um"),Pl=He("sp"),Tl=He("rtg"),Il=He("rtc");function Ml(e,t=le){Xn("ec",e,t)}function Nl(e,t,n,r){let a;const i=n;if(N(e)||ee(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i)}else if(q(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i)}}else a=[];return a}const Or=e=>e?Ls(e)?Zn(e)||e.proxy:Or(e.parent):null,zt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,sa(e.update)}),$nextTick:e=>e.n||(e.n=rl.bind(e.proxy)),$watch:e=>yl.bind(e)}),lr=(e,t)=>e!==V&&!e.__isScriptSetup&&z(e,t),Rl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const x=s[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(lr(r,t))return s[t]=1,r[t];if(a!==V&&z(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&z(c,t))return s[t]=3,i[t];if(n!==V&&z(n,t))return s[t]=4,n[t];Sr&&(s[t]=0)}}const u=zt[t];let m,v;if(u)return t==="$attrs"&&de(e.attrs,"get",""),u(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==V&&z(n,t))return s[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return lr(a,t)?(a[t]=n,!0):r!==V&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==V&&z(e,s)||lr(t,s)||(o=i[0])&&z(o,s)||z(r,s)||z(zt,s)||z(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ba(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Sr=!0;function Ll(e){const t=oa(e),n=e.proxy,r=e.ctx;Sr=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:x,updated:j,activated:M,deactivated:B,beforeDestroy:k,beforeUnmount:O,destroyed:P,unmounted:$,render:H,renderTracked:L,renderTriggered:Q,errorCaptured:fe,serverPrefetch:ve,expose:Me,inheritAttrs:It,components:on,directives:ln,filters:rr}=t;if(c&&Fl(c,r,null),s)for(const J in s){const W=s[J];F(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);q(J)&&(e.data=ta(J))}if(Sr=!0,i)for(const J in i){const W=i[J],nt=F(W)?W.bind(n,n):F(W.get)?W.get.bind(n,n):ye,fn=!F(W)&&F(W.set)?W.set.bind(n):ye,rt=st({get:nt,set:fn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Oe=>rt.value=Oe})}if(o)for(const J in o)_s(o[J],r,n,J);if(l){const J=F(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{Ul(W,J[W])})}u&&Ya(u,e,"c");function se(J,W){N(W)?W.forEach(nt=>J(nt.bind(n))):W&&J(W.bind(n))}if(se(Al,m),se(Ol,v),se(Sl,x),se(El,j),se(wl,M),se(xl,B),se(Ml,fe),se(Il,L),se(Tl,Q),se(Cl,O),se(ys,$),se(Pl,ve),N(Me))if(Me.length){const J=e.exposed||(e.exposed={});Me.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:nt=>n[W]=nt})})}else e.exposed||(e.exposed={});H&&e.render===ye&&(e.render=H),It!=null&&(e.inheritAttrs=It),on&&(e.components=on),ln&&(e.directives=ln)}function Fl(e,t,n=ye){N(e)&&(e=Er(e));for(const r in e){const a=e[r];let i;q(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),me(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ya(e,t,n){Ae(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _s(e,t,n,r){const a=r.includes(".")?gs(n,r):()=>n[r];if(ee(e)){const i=t[e];F(i)&&Dt(a,i)}else if(F(e))Dt(a,e.bind(n));else if(q(e))if(N(e))e.forEach(i=>_s(i,t,n,r));else{const i=F(e.handler)?e.handler.bind(n):t[e.handler];F(i)&&Dt(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>jn(l,c,s,!0)),jn(l,t,s)),q(t)&&i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(s=>jn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=jl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const jl={data:Wa,props:Va,emits:Va,methods:Lt,computed:Lt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:Lt,directives:Lt,watch:Dl,provide:Wa,inject:$l};function Wa(e,t){return t?e?function(){return re(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function $l(e,t){return Lt(Er(e),Er(t))}function Er(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Lt(e,t){return e?re(Object.create(null),e,t):t}function Va(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:re(Object.create(null),Ba(e),Ba(t??{})):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function ws(){return{app:null,config:{isNativeTag:vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Hl(e,t){return function(r,a=null){F(r)||(r=re({},r)),a!=null&&!q(a)&&(a=null);const i=ws(),s=new WeakSet;let o=!1;const l=i.app={_uid:zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(c){},use(c,...u){return s.has(c)||(c&&F(c.install)?(s.add(c),c.install(l,...u)):F(c)&&(s.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!o){const v=ae(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&t?t(v,c):e(v,c,m),o=!0,l._container=c,c.__vue_app__=l,Zn(v.component)||v.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Ht;Ht=l;try{return c()}finally{Ht=u}}};return l}}let Ht=null;function Ul(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){const r=le||he;if(r||Ht){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ht._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&F(t)?t.call(r&&r.proxy):t}}const xs={},ks=()=>Object.create(xs),As=e=>Object.getPrototypeOf(e)===xs;function Bl(e,t,n,r=!1){const a={},i=ks();e.propsDefaults=Object.create(null),Os(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:qo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Yl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=U(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Gn(e.emitsOptions,v))continue;const x=t[v];if(l)if(z(i,v))x!==i[v]&&(i[v]=x,c=!0);else{const j=St(v);a[j]=Cr(l,o,j,x,e,!1)}else x!==i[v]&&(i[v]=x,c=!0)}}}else{Os(e,t,a,i)&&(c=!0);let u;for(const m in o)(!t||!z(t,m)&&((u=vt(m))===m||!z(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Cr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!z(t,m))&&(delete i[m],c=!0)}c&&Fe(e.attrs,"set","")}function Os(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(jt(l))continue;const c=t[l];let u;a&&z(a,u=St(l))?!i||!i.includes(u)?n[u]=c:(o||(o={}))[u]=c:Gn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=U(n),c=o||V;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Cr(a,l,m,c[m],e,!z(c,m))}}return s}function Cr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=z(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&F(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=nn(a);r=c[n]=l.call(null,t),u()}}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===vt(n))&&(r=!0))}return r}function Ss(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!F(e)){const u=m=>{l=!0;const[v,x]=Ss(m,t,!0);re(s,v),x&&o.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return q(e)&&r.set(e,xt),xt;if(N(i))for(let u=0;u<i.length;u++){const m=St(i[u]);Ka(m)&&(s[m]=V)}else if(i)for(const u in i){const m=St(u);if(Ka(m)){const v=i[u],x=s[m]=N(v)||F(v)?{type:v}:re({},v);if(x){const j=qa(Boolean,x.type),M=qa(String,x.type);x[0]=j>-1,x[1]=M<0||j<M,(j>-1||z(x,"default"))&&o.push(m)}}}const c=[s,o];return q(e)&&r.set(e,c),c}function Ka(e){return e[0]!=="$"&&!jt(e)}function Ga(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Xa(e,t){return Ga(e)===Ga(t)}function qa(e,t){return N(t)?t.findIndex(n=>Xa(n,e)):F(t)&&Xa(t,e)?0:-1}const Es=e=>e[0]==="_"||e==="$stable",la=e=>N(e)?e.map(Pe):[Pe(e)],Wl=(e,t,n)=>{if(t._n)return t;const r=fl((...a)=>la(t(...a)),n);return r._c=!1,r},Cs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Es(a))continue;const i=e[a];if(F(i))t[a]=Wl(a,i,r);else if(i!=null){const s=la(i);t[a]=()=>s}}},Ps=(e,t)=>{const n=la(t);e.slots.default=()=>n},Vl=(e,t)=>{const n=e.slots=ks();if(e.vnode.shapeFlag&32){const r=t._;r?(re(n,t),Bi(n,"_",r,!0)):Cs(t,n)}else t&&Ps(e,t)},Kl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=V;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(re(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Cs(t,a)),s=t}else t&&(Ps(e,t),s={default:1});if(i)for(const o in a)!Es(o)&&s[o]==null&&delete a[o]};function Pr(e,t,n,r,a=!1){if(N(e)){e.forEach((v,x)=>Pr(v,t&&(N(t)?t[x]:t),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?Zn(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,u=o.refs===V?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(ee(c)?(u[c]=null,z(m,c)&&(m[c]=null)):me(c)&&(c.value=null)),F(l))Xe(l,o,12,[s,u]);else{const v=ee(l),x=me(l);if(v||x){const j=()=>{if(e.f){const M=v?z(m,l)?m[l]:u[l]:l.value;a?N(M)&&Vr(M,i):N(M)?M.includes(i)||M.push(i):v?(u[l]=[i],z(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else v?(u[l]=s,z(m,l)&&(m[l]=s)):x&&(l.value=s,e.k&&(u[e.k]=s))};s?(j.id=-1,ue(j,n)):j()}}}const ue=gl;function Gl(e){return Xl(e)}function Xl(e,t){const n=Yi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:x=ye,insertStaticContent:j}=e,M=(f,d,p,h=null,g=null,_=null,A=void 0,y=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Rt(f,d)&&(h=cn(f),Oe(f,g,_,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:I}=d;switch(b){case qn:B(f,d,p,h);break;case mt:k(f,d,p,h);break;case Tn:f==null&&O(d,p,h,A);break;case Ce:on(f,d,p,h,g,_,A,y,w);break;default:I&1?H(f,d,p,h,g,_,A,y,w):I&6?ln(f,d,p,h,g,_,A,y,w):(I&64||I&128)&&b.process(f,d,p,h,g,_,A,y,w,Mt)}E!=null&&g&&Pr(E,f&&f.ref,_,d||f,!d)},B=(f,d,p,h)=>{if(f==null)r(d.el=o(d.children),p,h);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},k=(f,d,p,h)=>{f==null?r(d.el=l(d.children||""),p,h):d.el=f.el},O=(f,d,p,h)=>{[f.el,f.anchor]=j(f.children,d,p,h,f.el,f.anchor)},P=({el:f,anchor:d},p,h)=>{let g;for(;f&&f!==d;)g=v(f),r(f,p,h),f=g;r(d,p,h)},$=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),a(f),f=p;a(d)},H=(f,d,p,h,g,_,A,y,w)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),f==null?L(d,p,h,g,_,A,y,w):ve(f,d,g,_,A,y,w)},L=(f,d,p,h,g,_,A,y)=>{let w,b;const{props:E,shapeFlag:I,transition:T,dirs:R}=f;if(w=f.el=s(f.type,_,E&&E.is,E),I&8?u(w,f.children):I&16&&fe(f.children,w,null,h,g,fr(f,_),A,y),R&&at(f,null,h,"created"),Q(w,f,f.scopeId,A,h),E){for(const Y in E)Y!=="value"&&!jt(Y)&&i(w,Y,null,E[Y],_,f.children,h,g,Ne);"value"in E&&i(w,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&Ee(b,h,f)}R&&at(f,null,h,"beforeMount");const D=ql(g,T);D&&T.beforeEnter(w),r(w,d,p),((b=E&&E.onVnodeMounted)||D||R)&&ue(()=>{b&&Ee(b,h,f),D&&T.enter(w),R&&at(f,null,h,"mounted")},g)},Q=(f,d,p,h,g)=>{if(p&&x(f,p),h)for(let _=0;_<h.length;_++)x(f,h[_]);if(g){let _=g.subTree;if(d===_){const A=g.vnode;Q(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},fe=(f,d,p,h,g,_,A,y,w=0)=>{for(let b=w;b<f.length;b++){const E=f[b]=y?Ve(f[b]):Pe(f[b]);M(null,E,d,p,h,g,_,A,y)}},ve=(f,d,p,h,g,_,A)=>{const y=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:E}=d;w|=f.patchFlag&16;const I=f.props||V,T=d.props||V;let R;if(p&&it(p,!1),(R=T.onVnodeBeforeUpdate)&&Ee(R,p,d,f),E&&at(d,f,p,"beforeUpdate"),p&&it(p,!0),b?Me(f.dynamicChildren,b,y,p,h,fr(d,g),_):A||W(f,d,y,null,p,h,fr(d,g),_,!1),w>0){if(w&16)It(y,d,I,T,p,h,g);else if(w&2&&I.class!==T.class&&i(y,"class",null,T.class,g),w&4&&i(y,"style",I.style,T.style,g),w&8){const D=d.dynamicProps;for(let Y=0;Y<D.length;Y++){const X=D[Y],ne=I[X],_e=T[X];(_e!==ne||X==="value")&&i(y,X,ne,_e,g,f.children,p,h,Ne)}}w&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&It(y,d,I,T,p,h,g);((R=T.onVnodeUpdated)||E)&&ue(()=>{R&&Ee(R,p,d,f),E&&at(d,f,p,"updated")},h)},Me=(f,d,p,h,g,_,A)=>{for(let y=0;y<d.length;y++){const w=f[y],b=d[y],E=w.el&&(w.type===Ce||!Rt(w,b)||w.shapeFlag&70)?m(w.el):p;M(w,b,E,null,h,g,_,A,!0)}},It=(f,d,p,h,g,_,A)=>{if(p!==h){if(p!==V)for(const y in p)!jt(y)&&!(y in h)&&i(f,y,p[y],null,A,d.children,g,_,Ne);for(const y in h){if(jt(y))continue;const w=h[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,d.children,g,_,Ne)}"value"in h&&i(f,"value",p.value,h.value,A)}},on=(f,d,p,h,g,_,A,y,w)=>{const b=d.el=f?f.el:o(""),E=d.anchor=f?f.anchor:o("");let{patchFlag:I,dynamicChildren:T,slotScopeIds:R}=d;R&&(y=y?y.concat(R):R),f==null?(r(b,p,h),r(E,p,h),fe(d.children||[],p,E,g,_,A,y,w)):I>0&&I&64&&T&&f.dynamicChildren?(Me(f.dynamicChildren,T,p,g,_,A,y),(d.key!=null||g&&d===g.subTree)&&Ts(f,d,!0)):W(f,d,p,E,g,_,A,y,w)},ln=(f,d,p,h,g,_,A,y,w)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,h,A,w):rr(d,p,h,g,_,A,w):Aa(f,d,w)},rr=(f,d,p,h,g,_,A)=>{const y=f.component=of(f,h,g);if(vs(f)&&(y.ctx.renderer=Mt),lf(y),y.asyncDep){if(g&&g.registerDep(y,se),!f.el){const w=y.subTree=ae(mt);k(null,w,d,p)}}else se(y,f,d,p,g,_,A)},Aa=(f,d,p)=>{const h=d.component=f.component;if(dl(f,d,p))if(h.asyncDep&&!h.asyncResolved){J(h,d,p);return}else h.next=d,il(h.update),h.effect.dirty=!0,h.update();else d.el=f.el,h.vnode=d},se=(f,d,p,h,g,_,A)=>{const y=()=>{if(f.isMounted){let{next:E,bu:I,u:T,parent:R,vnode:D}=f;{const bt=Is(f);if(bt){E&&(E.el=D.el,J(f,E,A)),bt.asyncDep.then(()=>{f.isUnmounted||y()});return}}let Y=E,X;it(f,!1),E?(E.el=D.el,J(f,E,A)):E=D,I&&Sn(I),(X=E.props&&E.props.onVnodeBeforeUpdate)&&Ee(X,R,E,D),it(f,!0);const ne=or(f),_e=f.subTree;f.subTree=ne,M(_e,ne,m(_e.el),cn(_e),f,g,_),E.el=ne.el,Y===null&&ml(f,ne.el),T&&ue(T,g),(X=E.props&&E.props.onVnodeUpdated)&&ue(()=>Ee(X,R,E,D),g)}else{let E;const{el:I,props:T}=d,{bm:R,m:D,parent:Y}=f,X=Cn(d);if(it(f,!1),R&&Sn(R),!X&&(E=T&&T.onVnodeBeforeMount)&&Ee(E,Y,d),it(f,!0),I&&Ca){const ne=()=>{f.subTree=or(f),Ca(I,f.subTree,f,g,null)};X?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=or(f);M(null,ne,p,h,f,g,_),d.el=ne.el}if(D&&ue(D,g),!X&&(E=T&&T.onVnodeMounted)){const ne=d;ue(()=>Ee(E,Y,ne),g)}(d.shapeFlag&256||Y&&Cn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&ue(f.a,g),f.isMounted=!0,d=p=h=null}},w=f.effect=new qr(y,ye,()=>sa(b),f.scope),b=f.update=()=>{w.dirty&&w.run()};b.id=f.uid,it(f,!0),b()},J=(f,d,p)=>{d.component=f;const h=f.vnode.props;f.vnode=d,f.next=null,Yl(f,d.props,h,p),Kl(f,d.children,p),et(),Ha(f),tt()},W=(f,d,p,h,g,_,A,y,w=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,I=d.children,{patchFlag:T,shapeFlag:R}=d;if(T>0){if(T&128){fn(b,I,p,h,g,_,A,y,w);return}else if(T&256){nt(b,I,p,h,g,_,A,y,w);return}}R&8?(E&16&&Ne(b,g,_),I!==b&&u(p,I)):E&16?R&16?fn(b,I,p,h,g,_,A,y,w):Ne(b,g,_,!0):(E&8&&u(p,""),R&16&&fe(I,p,h,g,_,A,y,w))},nt=(f,d,p,h,g,_,A,y,w)=>{f=f||xt,d=d||xt;const b=f.length,E=d.length,I=Math.min(b,E);let T;for(T=0;T<I;T++){const R=d[T]=w?Ve(d[T]):Pe(d[T]);M(f[T],R,p,null,g,_,A,y,w)}b>E?Ne(f,g,_,!0,!1,I):fe(d,p,h,g,_,A,y,w,I)},fn=(f,d,p,h,g,_,A,y,w)=>{let b=0;const E=d.length;let I=f.length-1,T=E-1;for(;b<=I&&b<=T;){const R=f[b],D=d[b]=w?Ve(d[b]):Pe(d[b]);if(Rt(R,D))M(R,D,p,null,g,_,A,y,w);else break;b++}for(;b<=I&&b<=T;){const R=f[I],D=d[T]=w?Ve(d[T]):Pe(d[T]);if(Rt(R,D))M(R,D,p,null,g,_,A,y,w);else break;I--,T--}if(b>I){if(b<=T){const R=T+1,D=R<E?d[R].el:h;for(;b<=T;)M(null,d[b]=w?Ve(d[b]):Pe(d[b]),p,D,g,_,A,y,w),b++}}else if(b>T)for(;b<=I;)Oe(f[b],g,_,!0),b++;else{const R=b,D=b,Y=new Map;for(b=D;b<=T;b++){const pe=d[b]=w?Ve(d[b]):Pe(d[b]);pe.key!=null&&Y.set(pe.key,b)}let X,ne=0;const _e=T-D+1;let bt=!1,Pa=0;const Nt=new Array(_e);for(b=0;b<_e;b++)Nt[b]=0;for(b=R;b<=I;b++){const pe=f[b];if(ne>=_e){Oe(pe,g,_,!0);continue}let Se;if(pe.key!=null)Se=Y.get(pe.key);else for(X=D;X<=T;X++)if(Nt[X-D]===0&&Rt(pe,d[X])){Se=X;break}Se===void 0?Oe(pe,g,_,!0):(Nt[Se-D]=b+1,Se>=Pa?Pa=Se:bt=!0,M(pe,d[Se],p,null,g,_,A,y,w),ne++)}const Ta=bt?Jl(Nt):xt;for(X=Ta.length-1,b=_e-1;b>=0;b--){const pe=D+b,Se=d[pe],Ia=pe+1<E?d[pe+1].el:h;Nt[b]===0?M(null,Se,p,Ia,g,_,A,y,w):bt&&(X<0||b!==Ta[X]?rt(Se,p,Ia,2):X--)}}},rt=(f,d,p,h,g=null)=>{const{el:_,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,d,p,h);return}if(b&128){f.suspense.move(d,p,h);return}if(b&64){A.move(f,d,p,Mt);return}if(A===Ce){r(_,d,p);for(let I=0;I<w.length;I++)rt(w[I],d,p,h);r(f.anchor,d,p);return}if(A===Tn){P(f,d,p);return}if(h!==2&&b&1&&y)if(h===0)y.beforeEnter(_),r(_,d,p),ue(()=>y.enter(_),g);else{const{leave:I,delayLeave:T,afterLeave:R}=y,D=()=>r(_,d,p),Y=()=>{I(_,()=>{D(),R&&R()})};T?T(_,D,Y):Y()}else r(_,d,p)},Oe=(f,d,p,h=!1,g=!1)=>{const{type:_,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:E,patchFlag:I,dirs:T}=f;if(y!=null&&Pr(y,null,p,f,!0),E&256){d.ctx.deactivate(f);return}const R=E&1&&T,D=!Cn(f);let Y;if(D&&(Y=A&&A.onVnodeBeforeUnmount)&&Ee(Y,d,f),E&6)go(f.component,p,h);else{if(E&128){f.suspense.unmount(p,h);return}R&&at(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,p,g,Mt,h):b&&(_!==Ce||I>0&&I&64)?Ne(b,d,p,!1,!0):(_===Ce&&I&384||!g&&E&16)&&Ne(w,d,p),h&&Oa(f)}(D&&(Y=A&&A.onVnodeUnmounted)||R)&&ue(()=>{Y&&Ee(Y,d,f),R&&at(f,null,d,"unmounted")},p)},Oa=f=>{const{type:d,el:p,anchor:h,transition:g}=f;if(d===Ce){ho(p,h);return}if(d===Tn){$(f);return}const _=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,w=()=>A(p,_);y?y(f.el,_,w):w()}else _()},ho=(f,d)=>{let p;for(;f!==d;)p=v(f),a(f),f=p;a(d)},go=(f,d,p)=>{const{bum:h,scope:g,update:_,subTree:A,um:y}=f;h&&Sn(h),g.stop(),_&&(_.active=!1,Oe(A,f,d,p)),y&&ue(y,d),ue(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ne=(f,d,p,h=!1,g=!1,_=0)=>{for(let A=_;A<f.length;A++)Oe(f[A],d,p,h,g)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let ar=!1;const Sa=(f,d,p)=>{f==null?d._vnode&&Oe(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,p),ar||(ar=!0,Ha(),us(),ar=!1),d._vnode=f},Mt={p:M,um:Oe,m:rt,r:Oa,mt:rr,mc:fe,pc:W,pbc:Me,n:cn,o:e};let Ea,Ca;return{render:Sa,hydrate:Ea,createApp:Hl(Sa,Ea)}}function fr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ql(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ts(e,t,n=!1){const r=e.children,a=t.children;if(N(r)&&N(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ve(a[i]),o.el=s.el),n||Ts(s,o)),o.type===qn&&(o.el=s.el)}}function Jl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function Is(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Is(t)}const Zl=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Ut=[];let xe=null;function be(e=!1){Ut.push(xe=e?null:[])}function Ql(){Ut.pop(),xe=Ut[Ut.length-1]||null}let qt=1;function Ja(e){qt+=e}function Ms(e){return e.dynamicChildren=qt>0?xe||xt:null,Ql(),qt>0&&xe&&xe.push(e),e}function Re(e,t,n,r,a,i){return Ms(je(e,t,n,r,a,i,!0))}function fa(e,t,n,r,a){return Ms(ae(e,t,n,r,a,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const Ns=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||me(e)||F(e)?{i:he,r:e,k:t,f:!!n}:e:null);function je(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ns(t),ref:t&&In(t),scopeId:ps,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:he};return o?(ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),qt>0&&!s&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const ae=ef;function ef(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===pl)&&(e=mt),Tr(e)){const o=Et(e,t,!0);return n&&ca(o,n),qt>0&&!i&&xe&&(o.shapeFlag&6?xe[xe.indexOf(e)]=o:xe.push(o)),o.patchFlag|=-2,o}if(df(e)&&(e=e.__vccOpts),t){t=tf(t);let{class:o,style:l}=t;o&&!ee(o)&&(t.class=Xr(o)),q(l)&&(is(l)&&!N(l)&&(l=re({},l)),t.style=Gr(l))}const s=ee(e)?1:hl(e)?128:Zl(e)?64:q(e)?4:F(e)?2:0;return je(e,t,n,r,a,s,i,!0)}function tf(e){return e?is(e)||As(e)?re({},e):e:null}function Et(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:s,children:o,transition:l}=e,c=t?Rs(a||{},t):a,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ns(c),ref:t&&t.ref?n&&i?N(i)?i.concat(In(t)):[i,In(t)]:In(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(u.transition=l.clone(u)),u}function nf(e=" ",t=0){return ae(qn,null,e,t)}function rf(e,t){const n=ae(Tn,null,e);return n.staticCount=t,n}function cr(e="",t=!1){return t?(be(),fa(mt,null,e)):ae(mt,null,e)}function Pe(e){return e==null||typeof e=="boolean"?ae(mt):N(e)?ae(Ce,null,e.slice()):typeof e=="object"?Ve(e):ae(qn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!As(t)?t._ctx=he:a===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[nf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rs(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(a==="style")t.style=Gr([t.style,r.style]);else if(Bn(a)){const i=t[a],s=r[a];s&&i!==s&&!(N(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ee(e,t,n,r=null){Ae(e,t,7,[n,r])}const af=ws();let sf=0;function of(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||af,i={uid:sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ss(r,a),emitsOptions:ms(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ll.bind(null,i),e.ce&&e.ce(i),i}let le=null,$n,Ir;{const e=Yi(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(s=>s(i)):a[0](i)}};$n=t("__VUE_INSTANCE_SETTERS__",n=>le=n),Ir=t("__VUE_SSR_SETTERS__",n=>Jn=n)}const nn=e=>{const t=le;return $n(e),e.scope.on(),()=>{e.scope.off(),$n(t)}},Za=()=>{le&&le.scope.off(),$n(null)};function Ls(e){return e.vnode.shapeFlag&4}let Jn=!1;function lf(e,t=!1){t&&Ir(t);const{props:n,children:r}=e.vnode,a=Ls(e);Bl(e,n,a,t),Vl(e,r);const i=a?ff(e,t):void 0;return t&&Ir(!1),i}function ff(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rl);const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uf(e):null,i=nn(e);et();const s=Xe(r,e,0,[e.props,a]);if(tt(),i(),Di(s)){if(s.then(Za,Za),t)return s.then(o=>{Qa(e,o,t)}).catch(o=>{Kn(o,e,0)});e.asyncDep=s}else Qa(e,s,t)}else Fs(e,t)}function Qa(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=ls(t)),Fs(e,n)}let ei;function Fs(e,t,n){const r=e.type;if(!e.render){if(!t&&ei&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=re(re({isCustomElement:i,delimiters:o},s),l);r.render=ei(a,c)}}e.render=r.render||ye}{const a=nn(e);et();try{Ll(e)}finally{tt(),a()}}}const cf={get(e,t){return de(e,"get",""),e[t]}};function uf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cf),slots:e.slots,emit:e.emit,expose:t}}function Zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ls(Jo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zt)return zt[n](e)},has(t,n){return n in t||n in zt}}))}function df(e){return F(e)&&"__vccOpts"in e}const st=(e,t)=>Zo(e,t,Jn);function mf(e,t,n){const r=arguments.length;return r===2?q(t)&&!N(t)?Tr(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),ae(e,t,n))}const pf="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const hf="http://www.w3.org/2000/svg",gf="http://www.w3.org/1998/Math/MathML",Ke=typeof document<"u"?document:null,ti=Ke&&Ke.createElement("template"),vf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?Ke.createElementNS(hf,e):t==="mathml"?Ke.createElementNS(gf,e):Ke.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ke.createTextNode(e),createComment:e=>Ke.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ke.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const o=ti.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bf=Symbol("_vtc");function yf(e,t,n){const r=e[bf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ni=Symbol("_vod"),_f=Symbol("_vsh"),wf=Symbol(""),xf=/(^|;)\s*display\s*:/;function kf(e,t,n){const r=e.style,a=ee(n);let i=!1;if(n&&!a){if(t)if(ee(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&Mn(r,o,"")}else for(const s in t)n[s]==null&&Mn(r,s,"");for(const s in n)s==="display"&&(i=!0),Mn(r,s,n[s])}else if(a){if(t!==n){const s=r[wf];s&&(n+=";"+s),r.cssText=n,i=xf.test(n)}}else t&&e.removeAttribute("style");ni in e&&(e[ni]=i?r.display:"",e[_f]&&(r.display="none"))}const ri=/\s*!important$/;function Mn(e,t,n){if(N(n))n.forEach(r=>Mn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Af(e,t);ri.test(n)?e.setProperty(vt(r),n.replace(ri,""),"important"):e[r]=n}}const ai=["Webkit","Moz","ms"],ur={};function Af(e,t){const n=ur[t];if(n)return n;let r=St(t);if(r!=="filter"&&r in e)return ur[t]=r;r=Ui(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in e)return ur[t]=i}return t}const ii="http://www.w3.org/1999/xlink";function Of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n);else{const i=Eo(t);n==null||i&&!Wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Sf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Wi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function yt(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}const si=Symbol("_vei");function Cf(e,t,n,r,a=null){const i=e[si]||(e[si]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Pf(t);if(r){const c=i[t]=Mf(r,a);yt(e,o,c,l)}else s&&(Ef(e,o,s,l),i[t]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(oi.test(e)){t={};let r;for(;r=e.match(oi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vt(e.slice(2)),t]}let dr=0;const Tf=Promise.resolve(),If=()=>dr||(Tf.then(()=>dr=0),dr=Date.now());function Mf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Nf(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Rf=(e,t,n,r,a,i,s,o,l)=>{const c=a==="svg";t==="class"?yf(e,r,c):t==="style"?kf(e,n,r):Bn(t)?Wr(t)||Cf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,r,c))?Sf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Of(e,t,r,c))};function Lf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&li(t)&&F(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return li(t)&&ee(n)?!1:t in e}const fi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>Sn(t,n):t};function Ff(e){e.target.composing=!0}function ci(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mr=Symbol("_assign"),jf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[mr]=fi(a);const i=r||a.props&&a.props.type==="number";yt(e,t?"change":"input",s=>{if(s.target.composing)return;let o=e.value;n&&(o=o.trim()),i&&(o=yr(o)),e[mr](o)}),n&&yt(e,"change",()=>{e.value=e.value.trim()}),t||(yt(e,"compositionstart",Ff),yt(e,"compositionend",ci),yt(e,"change",ci))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[mr]=fi(i),e.composing)return;const s=(a||e.type==="number")&&!/^0\d/.test(e.value)?yr(e.value):e.value,o=t??"";s!==o&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===o)||(e.value=o))}},$f={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Df=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=a=>{if(!("key"in a))return;const i=vt(a.key);if(t.some(s=>s===i||$f[s]===i))return e(a)})},zf=re({patchProp:Rf},vf);let ui;function Hf(){return ui||(ui=Gl(zf))}const Uf=(...e)=>{const t=Hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Yf(r);if(!a)return;const i=t._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,Bf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Bf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yf(e){return ee(e)?document.querySelector(e):e}var Wf={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]};function di(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?di(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):di(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function Vf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gf(e,t,n){return t&&Kf(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return qf(e)||Zf(e,t)||js(e,t)||ec()}function rn(e){return Xf(e)||Jf(e)||js(e)||Qf()}function Xf(e){if(Array.isArray(e))return Mr(e)}function qf(e){if(Array.isArray(e))return e}function Jf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function js(e,t){if(e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ec(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mi=function(){},da={},$s={},Ds=null,zs={mark:mi,measure:mi};try{typeof window<"u"&&(da=window),typeof document<"u"&&($s=document),typeof MutationObserver<"u"&&(Ds=MutationObserver),typeof performance<"u"&&(zs=performance)}catch{}var tc=da.navigator||{},pi=tc.userAgent,hi=pi===void 0?"":pi,Je=da,G=$s,gi=Ds,vn=zs;Je.document;var Ue=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Hs=~hi.indexOf("MSIE")||~hi.indexOf("Trident/"),bn,yn,_n,wn,xn,$e="___FONT_AWESOME___",Nr=16,Us="fa",Bs="svg-inline--fa",pt="data-fa-i2svg",Rr="data-fa-pseudo-element",nc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",vi="fontawesome-i2svg",rc="async",ac=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",ha=[K,Z];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Jt=an((bn={},te(bn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),te(bn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bn)),Zt=an((yn={},te(yn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(yn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),yn)),Qt=an((_n={},te(_n,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(_n,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_n)),ic=an((wn={},te(wn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(wn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),wn)),sc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ws="fa-layers-text",oc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lc=an((xn={},te(xn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(xn,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xn)),Vs=[1,2,3,4,5,6,7,8,9,10],fc=Vs.concat([11,12,13,14,15,16,17,18,19,20]),cc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Zt[K]).map(en.add.bind(en));Object.keys(Zt[Z]).map(en.add.bind(en));var uc=[].concat(ha,rn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(fc.map(function(e){return"w-".concat(e)})),Bt=Je.FontAwesomeConfig||{};function dc(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var pc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pc.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=mc(dc(n));a!=null&&(Bt[r]=a)})}var Ks={styleDefault:"solid",familyDefault:"classic",cssPrefix:Us,replacementClass:Bs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var Ct=S(S({},Ks),Bt);Ct.autoReplaceSvg||(Ct.observeMutations=!1);var C={};Object.keys(Ks).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ct[e]=n,Yt.forEach(function(r){return r(C)})},get:function(){return Ct[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ct.cssPrefix=t,Yt.forEach(function(n){return n(C)})},get:function(){return Ct.cssPrefix}});Je.FontAwesomeConfig=C;var Yt=[];function hc(e){return Yt.push(e),function(){Yt.splice(Yt.indexOf(e),1)}}var Ye=Nr,Ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gc(e){if(!(!e||!Ue)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return G.head.insertBefore(t,r),e}}var vc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=vc[Math.random()*62|0];return t}function Tt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Tt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Gs(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Ie.size||e.x!==Ie.x||e.y!==Ie.y||e.rotate!==Ie.rotate||e.flipX||e.flipY}function yc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function _c(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Hs?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var wc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xs(){var e=Us,t=Bs,n=C.cssPrefix,r=C.replacementClass,a=wc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var bi=!1;function pr(){C.autoAddCss&&!bi&&(gc(Xs()),bi=!0)}var xc={mixout:function(){return{dom:{css:Xs,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},De=Je||{};De[$e]||(De[$e]={});De[$e].styles||(De[$e].styles={});De[$e].hooks||(De[$e].hooks={});De[$e].shims||(De[$e].shims=[]);var ke=De[$e],qs=[],kc=function e(){G.removeEventListener("DOMContentLoaded",e),zn=1,qs.map(function(t){return t()})},zn=!1;Ue&&(zn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),zn||G.addEventListener("DOMContentLoaded",kc));function Ac(e){Ue&&(zn?setTimeout(e,0):qs.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Gs(e):"<".concat(t," ").concat(bc(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function yi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var hr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<s;l++)c=i[l],u=o(u,t[c],c,t);return u};function Oc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Lr(e){var t=Oc(e);return t.length===1?t[0].toString(16):null}function Sc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function _i(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=_i(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,_i(t)):ke.styles[e]=S(S({},ke.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var kn,An,On,_t=ke.styles,Ec=ke.shims,Cc=(kn={},te(kn,K,Object.values(Qt[K])),te(kn,Z,Object.values(Qt[Z])),kn),ba=null,Js={},Zs={},Qs={},eo={},to={},Pc=(An={},te(An,K,Object.keys(Jt[K])),te(An,Z,Object.keys(Jt[Z])),An);function Tc(e){return~uc.indexOf(e)}function Ic(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Tc(a)?a:null}var no=function(){var t=function(i){return hr(_t,function(s,o,l){return s[l]=hr(o,i,{}),s},{})};Js=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Zs=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),to=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in _t||C.autoFetchSvg,r=hr(Ec,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Qs=r.names,eo=r.unicodes,ba=er(C.styleDefault,{family:C.familyDefault})};hc(function(e){ba=er(e.styleDefault,{family:C.familyDefault})});no();function ya(e,t){return(Js[e]||{})[t]}function Mc(e,t){return(Zs[e]||{})[t]}function ct(e,t){return(to[e]||{})[t]}function ro(e){return Qs[e]||{prefix:null,iconName:null}}function Nc(e){var t=eo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return ba}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Jt[r][e],i=Zt[r][e]||Zt[r][a],s=e in ke.styles?e:null;return i||s||null}var wi=(On={},te(On,K,Object.keys(Qt[K])),te(On,Z,Object.keys(Qt[Z])),On);function tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,K,"".concat(C.cssPrefix,"-").concat(K)),te(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),s=null,o=K;(e.includes(i[K])||e.some(function(c){return wi[K].includes(c)}))&&(o=K),(e.includes(i[Z])||e.some(function(c){return wi[Z].includes(c)}))&&(o=Z);var l=e.reduce(function(c,u){var m=Ic(C.cssPrefix,u);if(_t[u]?(u=Cc[o].includes(u)?ic[o][u]:u,s=u,c.prefix=u):Pc[o].indexOf(u)>-1?(s=u,c.prefix=er(u,{family:o})):m?c.iconName=m:u!==C.replacementClass&&u!==i[K]&&u!==i[Z]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=s==="fa"?ro(c.iconName):{},x=ct(c.prefix,c.iconName);v.prefix&&(s=null),c.iconName=v.iconName||x||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_t.far&&_t.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},_a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Z&&(_t.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ze()||"fas"),l}var Rc=function(){function e(){Vf(this,e),this.definitions={}}return Gf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=S(S({},n.definitions[o]||{}),s[o]),Fr(o,s[o]);var l=Qt[K][o];l&&Fr(l,s[o]),no()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),xi=[],wt={},Ot={},Lc=Object.keys(Ot);function Fc(e,t){var n=t.mixoutsTo;return xi=e,wt={},Object.keys(Ot).forEach(function(r){Lc.indexOf(r)===-1&&delete Ot[r]}),xi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Dn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){wt[s]||(wt[s]=[]),wt[s].push(i[s])})}r.provides&&r.provides(Ot)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function $r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=ct(n,t)||t,yi(ao.definitions,n,t)||yi(ke.styles,n,t)}var ao=new Rc,jc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ht("noAuto")},$c={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ht("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Ac(function(){zc({autoReplaceSvgRoot:n}),ht("watch",t)})}},Dc={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=er(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(sc))){var a=tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:ct(i,t)||t}}}},ge={noAuto:jc,config:C,dom:$c,parse:Dc,library:ao,findIconDefinition:$r,toHtml:sn},zc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&Ue&&C.autoReplaceSvg&&ge.dom.i2svg({node:r})};function nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ue){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Hc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(va(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Qn(S(S({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Uc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:s}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,v=e.watchable,x=v===void 0?!1:v,j=r.found?r:n,M=j.width,B=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),P={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(B)})},$=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/B*16*.0625,"em")}:{};x&&(P.attributes[pt]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||tn())},children:[l]}),delete P.attributes.title);var H=S(S({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:S(S({},$),m.styles)}),L=r.found&&n.found?ze("generateAbstractMask",H)||{children:[],attributes:{}}:ze("generateAbstractIcon",H)||{children:[],attributes:{}},Q=L.children,fe=L.attributes;return H.children=Q,H.attributes=fe,o?Uc(H):Hc(H)}function ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=S(S(S({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[pt]="");var u=S({},s.styles);va(a)&&(u.transform=_c({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Qn(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Bc(e){var t=e.content,n=e.title,r=e.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var gr=ke.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Yc={found:!1,width:512,height:512};function Wc(e,t){!Ys&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=ro(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&gr[t]&&gr[t][e]){var s=gr[t][e];return r(Dr(s))}Wc(e,t),r(S(S({},Yc),{},{icon:C.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var Ai=function(){},Hr=C.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:Ai,measure:Ai},Ft='FA "6.5.2"',Vc=function(t){return Hr.mark("".concat(Ft," ").concat(t," begins")),function(){return io(t)}},io=function(t){Hr.mark("".concat(Ft," ").concat(t," ends")),Hr.measure("".concat(Ft," ").concat(t),"".concat(Ft," ").concat(t," begins"),"".concat(Ft," ").concat(t," ends"))},xa={begin:Vc,end:io},Nn=function(){};function Oi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Kc(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function Gc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Xc(){if(C.autoReplaceSvg===!0)return Rn.replace;var e=Rn[C.autoReplaceSvg];return e||Rn.replace}function qc(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function Jc(e){return G.createElement(e)}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?qc:Jc:n;if(typeof e=="string")return G.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(so(s,{ceFn:r}))}),a}function Zc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(so(a),n)}),n.getAttribute(pt)===null&&C.keepOriginalSource){var r=G.createComment(Zc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(C.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===C.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return sn(o)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=s}};function Si(e){e()}function oo(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=Si;C.mutateApproach===rc&&(r=Je.requestAnimationFrame||Si),r(function(){var a=Xc(),i=xa.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function lo(){ka=!0}function Ur(){ka=!1}var Hn=null;function Ei(e){if(gi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,s=i===void 0?Nn:i,o=e.observeMutationsRoot,l=o===void 0?G:o;Hn=new gi(function(c){if(!ka){var u=Ze();Tt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Oi(m.addedNodes[0])&&(C.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Oi(m.target)&&~cc.indexOf(m.attributeName))if(m.attributeName==="class"&&Kc(m.target)){var v=tr(ga(m.target)),x=v.prefix,j=v.iconName;m.target.setAttribute(ma,x||u),j&&m.target.setAttribute(pa,j)}else Gc(m.target)&&a(m.target)})}}),Ue&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qc(){Hn&&Hn.disconnect()}function eu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function tu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=tr(ga(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Mc(a.prefix,e.innerText)||ya(a.prefix,Lr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function nu(e){var t=Tt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ru(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tu(e),r=n.iconName,a=n.prefix,i=n.rest,s=nu(e),o=jr("parseNodeAttributes",{},e),l=t.styleParser?eu(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var au=ke.styles;function fo(e){var t=C.autoReplaceSvg==="nest"?Ci(e,{styleParser:!1}):Ci(e);return~t.extra.classes.indexOf(Ws)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}var Qe=new Set;ha.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Jt[K]).map(Qe.add.bind(Qe));Object.keys(Jt[Z]).map(Qe.add.bind(Qe));Qe=rn(Qe);function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(vi,"-").concat(m))},a=function(m){return n.remove("".concat(vi,"-").concat(m))},i=C.autoFetchSvg?Qe:ha.map(function(u){return"fa-".concat(u)}).concat(Object.keys(au));i.includes("fa")||i.push("fa");var s=[".".concat(Ws,":not([").concat(pt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(pt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Tt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=xa.begin("onTree"),c=o.reduce(function(u,m){try{var v=fo(m);v&&u.push(v)}catch(x){Ys||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){oo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(v){l(),m(v)})})}function iu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fo(e).then(function(n){n&&oo([n],t)})}function su(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:$r(a||{})),e(r,S(S({},n),{},{mask:a}))}}var ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ie:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,x=n.titleId,j=x===void 0?null:x,M=n.classes,B=M===void 0?[]:M,k=n.attributes,O=k===void 0?{}:k,P=n.styles,$=P===void 0?{}:P;if(t){var H=t.prefix,L=t.iconName,Q=t.icon;return nr(S({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||tn()):(O["aria-hidden"]="true",O.focusable="false")),wa({icons:{main:Dr(Q),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:L,transform:S(S({},Ie),a),symbol:s,title:v,maskId:u,titleId:j,extra:{attributes:O,styles:$,classes:B}})})}},lu={mixout:function(){return{icon:su(ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Pi,n.nodeCallback=iu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,s=i===void 0?function(){}:i;return Pi(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(x,j){Promise.all([zr(a,o),u.iconName?zr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var B=ua(M,2),k=B[0],O=B[1];x([n,wa({icons:{main:k,mask:O},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Qn(o);l.length>0&&(a.style=l);var c;return va(s)&&(c=ze("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},fu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return nr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:s}]})}}}},cu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return nr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Bc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(rn(o))}})})}}}},uu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ie:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,x=v===void 0?{}:v;return nr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:S(S({},Ie),i),title:o,extra:{attributes:m,styles:x,classes:["".concat(C.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Hs){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return C.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},du=new RegExp('"',"ug"),Ti=[1105920,1112319];function mu(e){var t=e.replace(du,""),n=Sc(t,0),r=n>=Ti[0]&&n<=Ti[1],a=t.length===2?t[0]===t[1]:!1;return{value:Lr(a?t[0]:t),isSecondary:r||a}}function Ii(e,t){var n="".concat(nc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Tt(e.children),s=i.filter(function(Q){return Q.getAttribute(Rr)===t})[0],o=Je.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(oc),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:K,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[v][l[2].toLowerCase()]:lc[v][c],j=mu(m),M=j.value,B=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=ya(x,M),P=O;if(k){var $=Nc(M);$.iconName&&$.prefix&&(O=$.iconName,x=$.prefix)}if(O&&!B&&(!s||s.getAttribute(ma)!==x||s.getAttribute(pa)!==P)){e.setAttribute(n,P),s&&e.removeChild(s);var H=ru(),L=H.extra;L.attributes[Rr]=t,zr(O,x).then(function(Q){var fe=wa(S(S({},H),{},{icons:{main:Q,mask:_a()},prefix:x,iconName:P,extra:L,watchable:!0})),ve=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=fe.map(function(Me){return sn(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function pu(e){return Promise.all([Ii(e,"::before"),Ii(e,"::after")])}function hu(e){return e.parentNode!==document.head&&!~ac.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Mi(e){if(Ue)return new Promise(function(t,n){var r=Tt(e.querySelectorAll("*")).filter(hu).map(pu),a=xa.begin("searchPseudoElements");lo(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var gu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;C.searchPseudoElements&&Mi(a)}}},Ni=!1,vu={mixout:function(){return{dom:{unwatch:function(){lo(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Ei(jr("mutationObserverCallbacks",{}))},noAuto:function(){Qc()},watch:function(n){var r=n.observeMutationsRoot;Ni?Ur():Ei(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ri=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},bu={mixout:function(){return{parse:{transform:function(n){return Ri(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ri(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(s/2*-1," -256)")},x={outer:o,inner:m,path:v};return{tag:"g",attributes:S({},x.outer),children:[{tag:"g",attributes:S({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),x.path)}]}]}}}},vr={x:0,y:0,width:"100%",height:"100%"};function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yu(e){return e.tag==="g"?e.children:[e]}var _u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tr(a.split(" ").map(function(s){return s.trim()})):_a();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,u=i.icon,m=s.width,v=s.icon,x=yc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:S(S({},vr),{},{fill:"white"})},M=u.children?{children:u.children.map(Li)}:{},B={tag:"g",attributes:S({},x.inner),children:[Li(S({tag:u.tag,attributes:S(S({},u.attributes),x.path)},M))]},k={tag:"g",attributes:S({},x.outer),children:[B]},O="mask-".concat(o||tn()),P="clip-".concat(o||tn()),$={tag:"mask",attributes:S(S({},vr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:yu(v)},$]};return r.push(H,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(O,")")},vr)}),{children:r,attributes:a}}}},wu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=S(S({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ku=[xc,lu,fu,cu,uu,gu,vu,bu,_u,wu,xu];Fc(ku,{mixoutsTo:ge});ge.noAuto;ge.config;ge.library;ge.dom;var Br=ge.parse;ge.findIconDefinition;ge.toHtml;var Au=ge.icon;ge.layer;ge.text;ge.counter;function Fi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ou(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Su(e){var t=Ou(e,"string");return typeof t=="symbol"?t:t+""}function Un(e){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function ce(e,t,n){return t=Su(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eu(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Cu(e,t){if(e==null)return{};var n=Eu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},co={exports:{}};(function(e){(function(t){var n=function(k,O,P){if(!c(O)||m(O)||v(O)||x(O)||l(O))return O;var $,H=0,L=0;if(u(O))for($=[],L=O.length;H<L;H++)$.push(n(k,O[H],P));else{$={};for(var Q in O)Object.prototype.hasOwnProperty.call(O,Q)&&($[k(Q,P)]=n(k,O[Q],P))}return $},r=function(k,O){O=O||{};var P=O.separator||"_",$=O.split||/(?=[A-Z])/;return k.split($).join(P)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,P){return P?P.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(k,O){return r(k,O).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},v=function(k){return o.call(k)=="[object RegExp]"},x=function(k){return o.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},M=function(k,O){var P=O&&"process"in O?O.process:O;return typeof P!="function"?k:function($,H){return P($,k,H)}},B={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,O){return n(M(a,O),k)},decamelizeKeys:function(k,O){return n(M(s,O),k,O)},pascalizeKeys:function(k,O){return n(M(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=B:t.humps=B})(Pu)})(co);var Tu=co.exports,Iu=["class","style"];function Mu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Tu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Nu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return uo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Nu(u);break;case"style":l.style=Mu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Cu(n,Iu);return mf(e.tag,Le(Le(Le({},t),{},{class:a.class,style:Le(Le({},a.style),s)},a.attrs),o),r)}var mo=!1;try{mo=!0}catch{}function Ru(){if(!mo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Lu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(ce(ce(ce(ce(ce(ce(ce(ce(ce(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),ce(ce(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ji(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Br.icon)return Br.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Fu=Pt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return ji(t.icon)}),i=st(function(){return br("classes",Lu(t))}),s=st(function(){return br("transform",typeof t.transform=="string"?Br.transform(t.transform):t.transform)}),o=st(function(){return br("mask",ji(t.mask))}),l=st(function(){return Au(a.value,Le(Le(Le(Le({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Dt(l,function(u){if(!u)return Ru("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=st(function(){return l.value?uo(l.value.abstract[0],{},r):null});return function(){return c.value}}});const ju={key:0,class:"flex justify-end"},$u={class:"bg-green-200 text-black p-2 rounded-lg max-w-xs"},Du={key:1,class:"flex"},zu={key:0,class:"bg-gray-300 text-black p-2 rounded-lg max-w-xs"},Hu={class:"capitalize"},Uu=["src"],Bu={key:1,class:"bg-gray-300 text-black p-2 rounded-lg max-w-xs"},Yu=Pt({__name:"ChatBubble",props:{message:{},itsMine:{type:Boolean},image:{},loading:{type:Boolean}},setup(e){return(t,n)=>t.itsMine?(be(),Re("div",ju,[je("div",$u,Na(t.message),1)])):(be(),Re("div",Du,[t.loading?cr("",!0):(be(),Re("div",zu,[je("span",Hu,Na(t.message),1),t.image?(be(),Re("img",{key:0,src:t.image,class:"w-52 h-52 object-cover rounded-md pt-1"},null,8,Uu)):cr("",!0)])),t.loading?(be(),Re("div",Bu,[ae(Kt(Fu),{icon:Kt(Wf),bounce:!0},null,8,["icon"])])):cr("",!0)]))}}),po=(e=1)=>new Promise(t=>{setTimeout(()=>{t(!0)},e*1e3)}),Wu={class:"flex flex-col space-y-2"},Vu=Pt({__name:"ChatMessages",props:{messages:{}},setup(e){const{messages:t}=e,n=aa(null);return Dt(t,()=>{setTimeout(async()=>{var r,a;(r=n.value)==null||r.scrollTo({top:n.value.scrollHeight,behavior:"smooth"}),await po(1.5),(a=n.value)==null||a.scrollTo({top:n.value.scrollHeight,behavior:"smooth"})},100)}),(r,a)=>(be(),Re("div",{ref_key:"chatRef",ref:n,class:"flex-1 overflow-y-auto p-4"},[je("div",Wu,[(be(!0),Re(Ce,null,Nl(r.messages,i=>(be(),fa(Yu,Rs({key:i.id,ref_for:!0},i),null,16))),128))])],512))}}),Ku={class:"bg-white p-4 flex items-center"},Gu=rf('<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1),Xu=[Gu],qu=Pt({__name:"MessageBox",emits:["sendMessage"],setup(e,{emit:t}){const n=t,r=aa(""),a=()=>{r.value&&(n("sendMessage",r.value),r.value="")};return(i,s)=>(be(),Re("div",Ku,[_l(je("input",{type:"text",placeholder:"Type your message...",class:"flex-1 border rounded-full px-4 py-2 focus:outline-none","onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o),onKeypress:Df(a,["enter"])},null,544),[[jf,r.value]]),je("button",{class:"bg-green-600 text-white rounded-full p-2 ml-2 hover:bg-green-600 focus:outline-none",onClick:a},Xu)]))}}),Ju={yes:"si",no:"no",maybe:"tal vez"},Zu=()=>{const e=aa([{id:new Date().getTime(),message:"Hola",itsMine:!0},{id:new Date().getTime()+1,message:"¿Quieres ir a tomar café?",itsMine:!0},{id:new Date().getTime()+2,message:"Si",itsMine:!1,image:"https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg"}]),t=async r=>{if(r.length===0||(e.value.push({id:new Date().getTime(),message:r,itsMine:!0}),!r.endsWith("?")))return;e.value.push({id:new Date().getTime(),message:"Cargando",itsMine:!1,loading:!0}),await po(1.5);const a=await n();if(a){const{answer:i,image:s}=a,o=e.value[e.value.length-1];o.image=s,o.message=Ju[i],o.loading=!1}},n=async()=>{try{return await(await fetch("https://yesno.wtf/api")).json()}catch(r){console.error(r)}};return{messages:e,onMessage:t}},Qu={class:"bg-gray-100 h-screen flex flex-col max-w-lg mx-auto"},ed=je("div",{class:"bg-green-600 p-4 text-white flex justify-between items-center"},[je("span",null,"Isra")],-1),td=Pt({__name:"IndecisionView",setup(e){const{messages:t,onMessage:n}=Zu();return(r,a)=>(be(),Re("div",Qu,[ed,ae(Vu,{messages:Kt(t)},null,8,["messages"]),ae(qu,{onSendMessage:Kt(n)},null,8,["onSendMessage"])]))}}),nd=Pt({__name:"App",setup(e){return(t,n)=>(be(),fa(td))}});Uf(nd).mount("#app");
