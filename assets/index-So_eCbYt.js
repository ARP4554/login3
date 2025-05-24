(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function p0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m0={exports:{}},Ku={},g0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),tA=Symbol.for("react.portal"),nA=Symbol.for("react.fragment"),rA=Symbol.for("react.strict_mode"),iA=Symbol.for("react.profiler"),sA=Symbol.for("react.provider"),oA=Symbol.for("react.context"),aA=Symbol.for("react.forward_ref"),lA=Symbol.for("react.suspense"),uA=Symbol.for("react.memo"),cA=Symbol.for("react.lazy"),Bg=Symbol.iterator;function hA(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v0=Object.assign,_0={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||y0}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=Ts.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||y0}var Ud=Fd.prototype=new E0;Ud.constructor=Fd;v0(Ud,Ts.prototype);Ud.isPureReactComponent=!0;var Hg=Array.isArray,w0=Object.prototype.hasOwnProperty,jd={current:null},T0={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)w0.call(e,r)&&!T0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fa,type:t,key:s,ref:o,props:i,_owner:jd.current}}function fA(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function dA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wg=/\/+/g;function oh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dA(""+t.key):e.toString(36)}function Tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case tA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oh(o,0):r,Hg(i)?(n="",t!=null&&(n=t.replace(Wg,"$&/")+"/"),Tl(i,e,n,"",function(c){return c})):i!=null&&(zd(i)&&(i=fA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+oh(s,l);o+=Tl(s,e,n,u,i)}else if(u=hA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+oh(s,l++),o+=Tl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Il={transition:null},mA={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Il,ReactCurrentOwner:jd};function S0(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ts;re.Fragment=nA;re.Profiler=iA;re.PureComponent=Fd;re.StrictMode=rA;re.Suspense=lA;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mA;re.act=S0;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=v0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)w0.call(e,u)&&!T0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:fa,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:oA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sA,_context:t},t.Consumer=t};re.createElement=I0;re.createFactory=function(t){var e=I0.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:aA,render:t}};re.isValidElement=zd;re.lazy=function(t){return{$$typeof:cA,_payload:{_status:-1,_result:t},_init:pA}};re.memo=function(t,e){return{$$typeof:uA,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};re.unstable_act=S0;re.useCallback=function(t,e){return ht.current.useCallback(t,e)};re.useContext=function(t){return ht.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};re.useEffect=function(t,e){return ht.current.useEffect(t,e)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ht.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};re.useRef=function(t){return ht.current.useRef(t)};re.useState=function(t){return ht.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.3.1";g0.exports=re;var O=g0.exports;const A0=p0(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA=O,yA=Symbol.for("react.element"),vA=Symbol.for("react.fragment"),_A=Object.prototype.hasOwnProperty,EA=gA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wA={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_A.call(e,r)&&!wA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yA,type:t,key:s,ref:o,props:i,_owner:EA.current}}Ku.Fragment=vA;Ku.jsx=P0;Ku.jsxs=P0;m0.exports=Ku;var N=m0.exports,C0={exports:{}},Ct={},R0={exports:{}},k0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var ee=B.length;B.push(X);e:for(;0<ee;){var we=ee-1>>>1,he=B[we];if(0<i(he,X))B[we]=X,B[ee]=he,ee=we;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],ee=B.pop();if(ee!==X){B[0]=ee;e:for(var we=0,he=B.length,Re=he>>>1;we<Re;){var vn=2*(we+1)-1,_n=B[vn],En=vn+1,wn=B[En];if(0>i(_n,ee))En<he&&0>i(wn,_n)?(B[we]=wn,B[En]=ee,we=En):(B[we]=_n,B[vn]=ee,we=vn);else if(En<he&&0>i(wn,ee))B[we]=wn,B[En]=ee,we=En;else break e}}return X}function i(B,X){var ee=B.sortIndex-X.sortIndex;return ee!==0?ee:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,E=!1,A=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(B){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=B)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function D(B){if(k=!1,w(B),!A)if(n(u)!==null)A=!0,Ms(M);else{var X=n(c);X!==null&&yn(D,X.startTime-B)}}function M(B,X){A=!1,k&&(k=!1,_(y),y=-1),E=!0;var ee=m;try{for(w(X),p=n(u);p!==null&&(!(p.expirationTime>X)||B&&!C());){var we=p.callback;if(typeof we=="function"){p.callback=null,m=p.priorityLevel;var he=we(p.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),w(X)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var vn=n(c);vn!==null&&yn(D,vn.startTime-X),Re=!1}return Re}finally{p=null,m=ee,E=!1}}var z=!1,I=null,y=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function x(){if(I!==null){var B=t.unstable_now();S=B;var X=!0;try{X=I(!0,B)}finally{X?P():(z=!1,I=null)}}else z=!1}var P;if(typeof v=="function")P=function(){v(x)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Hr=bt.port2;bt.port1.onmessage=x,P=function(){Hr.postMessage(null)}}else P=function(){R(x,0)};function Ms(B){I=B,z||(z=!0,P())}function yn(B,X){y=R(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,Ms(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return B()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=m;m=B;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function(B,X,ee){var we=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?we+ee:we):ee=we,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,B={id:f++,callback:X,priorityLevel:B,startTime:ee,expirationTime:he,sortIndex:-1},ee>we?(B.sortIndex=ee,e(c,B),n(u)===null&&B===n(c)&&(k?(_(y),y=-1):k=!0,yn(D,ee-we))):(B.sortIndex=he,e(u,B),A||E||(A=!0,Ms(M))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var X=m;return function(){var ee=m;m=X;try{return B.apply(this,arguments)}finally{m=ee}}}})(k0);R0.exports=k0;var TA=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IA=O,Pt=TA;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,Mo={};function vi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Mo[t]=e,t=0;t<e.length;t++)b0.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jh=Object.prototype.hasOwnProperty,SA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qg={},Kg={};function AA(t){return Jh.call(Kg,t)?!0:Jh.call(qg,t)?!1:SA.test(t)?Kg[t]=!0:(qg[t]=!0,!1)}function PA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CA(t,e,n,r){if(e===null||typeof e>"u"||PA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Bd);qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Bd);qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Bd);qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CA(e,n,i,r)&&(n=null),r||i===null?AA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=IA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Oi=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),Gg=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Gg&&t[Gg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,ah;function ao(t){if(ah===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ah=e&&e[1]||""}return`
`+ah+t}var lh=!1;function uh(t,e){if(!t||lh)return"";lh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{lh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function RA(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=uh(t.type,!1),t;case 11:return t=uh(t.type.render,!1),t;case 1:return t=uh(t.type,!0),t;default:return""}}function nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case Oi:return"Portal";case Zh:return"Profiler";case Wd:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:nf(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return nf(t(e))}catch{}}return null}function kA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bA(t){var e=D0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=bA(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=D0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rf(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V0(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function sf(t,e){V0(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(lo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function M0(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,U0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xA=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){xA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NA=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(t,e){if(e){if(NA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,Qi=null,Yi=null;function Zg(t){if(t=ma(t)){if(typeof ff!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Ju(e),ff(t.stateNode,t.type,e))}}function $0(t){Qi?Yi?Yi.push(t):Yi=[t]:Qi=t}function B0(){if(Qi){var t=Qi,e=Yi;if(Yi=Qi=null,Zg(t),e)for(t=0;t<e.length;t++)Zg(e[t])}}function H0(t,e){return t(e)}function W0(){}var ch=!1;function q0(t,e,n){if(ch)return t(e,n);ch=!0;try{return H0(t,e,n)}finally{ch=!1,(Qi!==null||Yi!==null)&&(W0(),B0())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var df=!1;if(Dn)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){df=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{df=!1}function OA(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Eo=!1,Ql=null,Yl=!1,pf=null,DA={onError:function(t){Eo=!0,Ql=t}};function LA(t,e,n,r,i,s,o,l,u){Eo=!1,Ql=null,OA.apply(DA,arguments)}function VA(t,e,n,r,i,s,o,l,u){if(LA.apply(this,arguments),Eo){if(Eo){var c=Ql;Eo=!1,Ql=null}else throw Error(j(198));Yl||(Yl=!0,pf=c)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ey(t){if(_i(t)!==t)throw Error(j(188))}function MA(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ey(i),t;if(s===r)return ey(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function G0(t){return t=MA(t),t!==null?Q0(t):null}function Q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=Pt.unstable_scheduleCallback,ty=Pt.unstable_cancelCallback,FA=Pt.unstable_shouldYield,UA=Pt.unstable_requestPaint,be=Pt.unstable_now,jA=Pt.unstable_getCurrentPriorityLevel,Qd=Pt.unstable_ImmediatePriority,X0=Pt.unstable_UserBlockingPriority,Xl=Pt.unstable_NormalPriority,zA=Pt.unstable_LowPriority,J0=Pt.unstable_IdlePriority,Gu=null,an=null;function $A(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:WA,BA=Math.log,HA=Math.LN2;function WA(t){return t>>>=0,t===0?32:31-(BA(t)/HA|0)|0}var el=64,tl=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=uo(l):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function qA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=qA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function hh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function GA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function eE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tE,Xd,nE,rE,iE,gf=!1,nl=[],fr=null,dr=null,pr=null,jo=new Map,zo=new Map,rr=[],QA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ny(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YA(t,e,n,r,i){switch(e){case"focusin":return fr=Zs(fr,t,e,n,r,i),!0;case"dragenter":return dr=Zs(dr,t,e,n,r,i),!0;case"mouseover":return pr=Zs(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,Zs(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zo.set(s,Zs(zo.get(s)||null,t,e,n,r,i)),!0}return!1}function sE(t){var e=Jr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=K0(n),e!==null){t.blockedOn=e,iE(t.priority,function(){nE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hf=r,n.target.dispatchEvent(r),hf=null}else return e=ma(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function ry(t,e,n){Sl(t)&&n.delete(e)}function XA(){gf=!1,fr!==null&&Sl(fr)&&(fr=null),dr!==null&&Sl(dr)&&(dr=null),pr!==null&&Sl(pr)&&(pr=null),jo.forEach(ry),zo.forEach(ry)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,gf||(gf=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,XA)))}function $o(t){function e(i){return eo(i,t)}if(0<nl.length){eo(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&eo(fr,t),dr!==null&&eo(dr,t),pr!==null&&eo(pr,t),jo.forEach(e),zo.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)sE(n),n.blockedOn===null&&rr.shift()}var Xi=Wn.ReactCurrentBatchConfig,Zl=!0;function JA(t,e,n,r){var i=ce,s=Xi.transition;Xi.transition=null;try{ce=1,Jd(t,e,n,r)}finally{ce=i,Xi.transition=s}}function ZA(t,e,n,r){var i=ce,s=Xi.transition;Xi.transition=null;try{ce=4,Jd(t,e,n,r)}finally{ce=i,Xi.transition=s}}function Jd(t,e,n,r){if(Zl){var i=yf(t,e,n,r);if(i===null)wh(t,e,r,eu,n),ny(t,r);else if(YA(i,t,e,n,r))r.stopPropagation();else if(ny(t,r),e&4&&-1<QA.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&tE(s),s=yf(t,e,n,r),s===null&&wh(t,e,r,eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wh(t,e,r,null,n)}}var eu=null;function yf(t,e,n,r){if(eu=null,t=Gd(r),t=Jr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function oE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jA()){case Qd:return 1;case X0:return 4;case Xl:case zA:return 16;case J0:return 536870912;default:return 16}default:return 16}}var ur=null,Zd=null,Al=null;function aE(){if(Al)return Al;var t,e=Zd,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Al=i.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function iy(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:iy,this.isPropagationStopped=iy,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=Rt(Is),pa=Se({},Is,{view:0,detail:0}),eP=Rt(pa),fh,dh,to,Qu=Se({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(fh=t.screenX-to.screenX,dh=t.screenY-to.screenY):dh=fh=0,to=t),fh)},movementY:function(t){return"movementY"in t?t.movementY:dh}}),sy=Rt(Qu),tP=Se({},Qu,{dataTransfer:0}),nP=Rt(tP),rP=Se({},pa,{relatedTarget:0}),ph=Rt(rP),iP=Se({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),sP=Rt(iP),oP=Se({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aP=Rt(oP),lP=Se({},Is,{data:0}),oy=Rt(lP),uP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hP[t])?!!e[t]:!1}function tp(){return fP}var dP=Se({},pa,{key:function(t){if(t.key){var e=uP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pP=Rt(dP),mP=Se({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ay=Rt(mP),gP=Se({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),yP=Rt(gP),vP=Se({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),_P=Rt(vP),EP=Se({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wP=Rt(EP),TP=[9,13,27,32],np=Dn&&"CompositionEvent"in window,wo=null;Dn&&"documentMode"in document&&(wo=document.documentMode);var IP=Dn&&"TextEvent"in window&&!wo,lE=Dn&&(!np||wo&&8<wo&&11>=wo),ly=" ",uy=!1;function uE(t,e){switch(t){case"keyup":return TP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function SP(t,e){switch(t){case"compositionend":return cE(e);case"keypress":return e.which!==32?null:(uy=!0,ly);case"textInput":return t=e.data,t===ly&&uy?null:t;default:return null}}function AP(t,e){if(Li)return t==="compositionend"||!np&&uE(t,e)?(t=aE(),Al=Zd=ur=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lE&&e.locale!=="ko"?null:e.data;default:return null}}var PP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PP[t.type]:e==="textarea"}function hE(t,e,n,r){$0(r),e=tu(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Bo=null;function CP(t){TE(t,0)}function Yu(t){var e=Fi(t);if(L0(e))return t}function RP(t,e){if(t==="change")return e}var fE=!1;if(Dn){var mh;if(Dn){var gh="oninput"in document;if(!gh){var hy=document.createElement("div");hy.setAttribute("oninput","return;"),gh=typeof hy.oninput=="function"}mh=gh}else mh=!1;fE=mh&&(!document.documentMode||9<document.documentMode)}function fy(){To&&(To.detachEvent("onpropertychange",dE),Bo=To=null)}function dE(t){if(t.propertyName==="value"&&Yu(Bo)){var e=[];hE(e,Bo,t,Gd(t)),q0(CP,e)}}function kP(t,e,n){t==="focusin"?(fy(),To=e,Bo=n,To.attachEvent("onpropertychange",dE)):t==="focusout"&&fy()}function bP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(Bo)}function xP(t,e){if(t==="click")return Yu(e)}function NP(t,e){if(t==="input"||t==="change")return Yu(e)}function OP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:OP;function Ho(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function py(t,e){var n=dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dy(n)}}function pE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mE(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DP(t){var e=mE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pE(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=py(n,s);var o=py(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LP=Dn&&"documentMode"in document&&11>=document.documentMode,Vi=null,vf=null,Io=null,_f=!1;function my(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||Vi==null||Vi!==Gl(r)||(r=Vi,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Ho(Io,r)||(Io=r,r=tu(vf,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},yh={},gE={};Dn&&(gE=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Xu(t){if(yh[t])return yh[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gE)return yh[t]=e[n];return t}var yE=Xu("animationend"),vE=Xu("animationiteration"),_E=Xu("animationstart"),EE=Xu("transitionend"),wE=new Map,gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){wE.set(t,e),vi(e,[t])}for(var vh=0;vh<gy.length;vh++){var _h=gy[vh],VP=_h.toLowerCase(),MP=_h[0].toUpperCase()+_h.slice(1);Vr(VP,"on"+MP)}Vr(yE,"onAnimationEnd");Vr(vE,"onAnimationIteration");Vr(_E,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(EE,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FP=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VA(r,e,void 0,t),t.currentTarget=null}function TE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;yy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;yy(i,l,c),s=u}}}if(Yl)throw t=pf,Yl=!1,pf=null,t}function me(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var r=t+"__bubble";n.has(r)||(IE(e,t,2,!1),n.add(r))}function Eh(t,e,n){var r=0;e&&(r|=4),IE(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[sl]){t[sl]=!0,b0.forEach(function(n){n!=="selectionchange"&&(FP.has(n)||Eh(n,!1,t),Eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Eh("selectionchange",!1,e))}}function IE(t,e,n,r){switch(oE(e)){case 1:var i=JA;break;case 4:i=ZA;break;default:i=Jd}n=i.bind(null,e,n,t),i=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}q0(function(){var c=s,f=Gd(n),p=[];e:{var m=wE.get(t);if(m!==void 0){var E=ep,A=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":E=pP;break;case"focusin":A="focus",E=ph;break;case"focusout":A="blur",E=ph;break;case"beforeblur":case"afterblur":E=ph;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=nP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=yP;break;case yE:case vE:case _E:E=sP;break;case EE:E=_P;break;case"scroll":E=eP;break;case"wheel":E=wP;break;case"copy":case"cut":case"paste":E=aP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ay}var k=(e&4)!==0,R=!k&&t==="scroll",_=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,w;v!==null;){w=v;var D=w.stateNode;if(w.tag===5&&D!==null&&(w=D,_!==null&&(D=Uo(v,_),D!=null&&k.push(qo(v,D,w)))),R)break;v=v.return}0<k.length&&(m=new E(m,A,null,n,f),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==hf&&(A=n.relatedTarget||n.fromElement)&&(Jr(A)||A[Ln]))break e;if((E||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?Jr(A):null,A!==null&&(R=_i(A),A!==R||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(k=sy,D="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=ay,D="onPointerLeave",_="onPointerEnter",v="pointer"),R=E==null?m:Fi(E),w=A==null?m:Fi(A),m=new k(D,v+"leave",E,n,f),m.target=R,m.relatedTarget=w,D=null,Jr(f)===c&&(k=new k(_,v+"enter",A,n,f),k.target=w,k.relatedTarget=R,D=k),R=D,E&&A)t:{for(k=E,_=A,v=0,w=k;w;w=Ri(w))v++;for(w=0,D=_;D;D=Ri(D))w++;for(;0<v-w;)k=Ri(k),v--;for(;0<w-v;)_=Ri(_),w--;for(;v--;){if(k===_||_!==null&&k===_.alternate)break t;k=Ri(k),_=Ri(_)}k=null}else k=null;E!==null&&vy(p,m,E,k,!1),A!==null&&R!==null&&vy(p,R,A,k,!0)}}e:{if(m=c?Fi(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var M=RP;else if(cy(m))if(fE)M=NP;else{M=bP;var z=kP}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=xP);if(M&&(M=M(t,c))){hE(p,M,n,f);break e}z&&z(t,m,c),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&of(m,"number",m.value)}switch(z=c?Fi(c):window,t){case"focusin":(cy(z)||z.contentEditable==="true")&&(Vi=z,vf=c,Io=null);break;case"focusout":Io=vf=Vi=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,my(p,n,f);break;case"selectionchange":if(LP)break;case"keydown":case"keyup":my(p,n,f)}var I;if(np)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Li?uE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(lE&&n.locale!=="ko"&&(Li||y!=="onCompositionStart"?y==="onCompositionEnd"&&Li&&(I=aE()):(ur=f,Zd="value"in ur?ur.value:ur.textContent,Li=!0)),z=tu(c,y),0<z.length&&(y=new oy(y,t,null,n,f),p.push({event:y,listeners:z}),I?y.data=I:(I=cE(n),I!==null&&(y.data=I)))),(I=IP?SP(t,n):AP(t,n))&&(c=tu(c,"onBeforeInput"),0<c.length&&(f=new oy("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=I))}TE(p,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(qo(t,s,i)),s=Uo(t,e),s!=null&&r.push(qo(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Uo(n,s),u!=null&&o.unshift(qo(n,u,l))):i||(u=Uo(n,s),u!=null&&o.push(qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UP=/\r\n?/g,jP=/\u0000|\uFFFD/g;function _y(t){return(typeof t=="string"?t:""+t).replace(UP,`
`).replace(jP,"")}function ol(t,e,n){if(e=_y(e),_y(t)!==e&&n)throw Error(j(425))}function nu(){}var Ef=null,wf=null;function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,zP=typeof clearTimeout=="function"?clearTimeout:void 0,Ey=typeof Promise=="function"?Promise:void 0,$P=typeof queueMicrotask=="function"?queueMicrotask:typeof Ey<"u"?function(t){return Ey.resolve(null).then(t).catch(BP)}:If;function BP(t){setTimeout(function(){throw t})}function Th(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$o(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ss,Ko="__reactProps$"+Ss,Ln="__reactContainer$"+Ss,Sf="__reactEvents$"+Ss,HP="__reactListeners$"+Ss,WP="__reactHandles$"+Ss;function Jr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wy(t);t!==null;){if(n=t[nn])return n;t=wy(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[nn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ju(t){return t[Ko]||null}var Af=[],Ui=-1;function Mr(t){return{current:t}}function ge(t){0>Ui||(t.current=Af[Ui],Af[Ui]=null,Ui--)}function de(t,e){Ui++,Af[Ui]=t.current,t.current=e}var Pr={},it=Mr(Pr),yt=Mr(!1),si=Pr;function os(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function ru(){ge(yt),ge(it)}function Ty(t,e,n){if(it.current!==Pr)throw Error(j(168));de(it,e),de(yt,n)}function SE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,kA(t)||"Unknown",i));return Se({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,si=it.current,de(it,t),de(yt,yt.current),!0}function Iy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=SE(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,ge(yt),ge(it),de(it,t)):ge(yt),de(yt,n)}var An=null,Zu=!1,Ih=!1;function AE(t){An===null?An=[t]:An.push(t)}function qP(t){Zu=!0,AE(t)}function Fr(){if(!Ih&&An!==null){Ih=!0;var t=0,e=ce;try{var n=An;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Zu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),Y0(Qd,Fr),i}finally{ce=e,Ih=!1}}return null}var ji=[],zi=0,su=null,ou=0,xt=[],Nt=0,oi=null,Pn=1,Cn="";function Qr(t,e){ji[zi++]=ou,ji[zi++]=su,su=t,ou=e}function PE(t,e,n){xt[Nt++]=Pn,xt[Nt++]=Cn,xt[Nt++]=oi,oi=t;var r=Pn;t=Cn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-Ht(e)+i|n<<i|r,Cn=s+t}else Pn=1<<s|n<<i|r,Cn=t}function ip(t){t.return!==null&&(Qr(t,1),PE(t,1,0))}function sp(t){for(;t===su;)su=ji[--zi],ji[zi]=null,ou=ji[--zi],ji[zi]=null;for(;t===oi;)oi=xt[--Nt],xt[Nt]=null,Cn=xt[--Nt],xt[Nt]=null,Pn=xt[--Nt],xt[Nt]=null}var At=null,It=null,ve=!1,$t=null;function CE(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,It=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:Pn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,It=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(ve){var e=It;if(e){var n=e;if(!Sy(t,e)){if(Pf(t))throw Error(j(418));e=mr(n.nextSibling);var r=At;e&&Sy(t,e)?CE(r,n):(t.flags=t.flags&-4097|2,ve=!1,At=t)}}else{if(Pf(t))throw Error(j(418));t.flags=t.flags&-4097|2,ve=!1,At=t}}}function Ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function al(t){if(t!==At)return!1;if(!ve)return Ay(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tf(t.type,t.memoizedProps)),e&&(e=It)){if(Pf(t))throw RE(),Error(j(418));for(;e;)CE(t,e),e=mr(e.nextSibling)}if(Ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=At?mr(t.stateNode.nextSibling):null;return!0}function RE(){for(var t=It;t;)t=mr(t.nextSibling)}function as(){It=At=null,ve=!1}function op(t){$t===null?$t=[t]:$t.push(t)}var KP=Wn.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Py(t){var e=t._init;return e(t._payload)}function kE(t){function e(_,v){if(t){var w=_.deletions;w===null?(_.deletions=[v],_.flags|=16):w.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=_r(_,v),_.index=0,_.sibling=null,_}function s(_,v,w){return _.index=w,t?(w=_.alternate,w!==null?(w=w.index,w<v?(_.flags|=2,v):w):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,w,D){return v===null||v.tag!==6?(v=bh(w,_.mode,D),v.return=_,v):(v=i(v,w),v.return=_,v)}function u(_,v,w,D){var M=w.type;return M===Di?f(_,v,w.props.children,D,w.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===tr&&Py(M)===v.type)?(D=i(v,w.props),D.ref=no(_,v,w),D.return=_,D):(D=Ol(w.type,w.key,w.props,null,_.mode,D),D.ref=no(_,v,w),D.return=_,D)}function c(_,v,w,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=xh(w,_.mode,D),v.return=_,v):(v=i(v,w.children||[]),v.return=_,v)}function f(_,v,w,D,M){return v===null||v.tag!==7?(v=ii(w,_.mode,D,M),v.return=_,v):(v=i(v,w),v.return=_,v)}function p(_,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bh(""+v,_.mode,w),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return w=Ol(v.type,v.key,v.props,null,_.mode,w),w.ref=no(_,null,v),w.return=_,w;case Oi:return v=xh(v,_.mode,w),v.return=_,v;case tr:var D=v._init;return p(_,D(v._payload),w)}if(lo(v)||Xs(v))return v=ii(v,_.mode,w,null),v.return=_,v;ll(_,v)}return null}function m(_,v,w,D){var M=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return M!==null?null:l(_,v,""+w,D);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xa:return w.key===M?u(_,v,w,D):null;case Oi:return w.key===M?c(_,v,w,D):null;case tr:return M=w._init,m(_,v,M(w._payload),D)}if(lo(w)||Xs(w))return M!==null?null:f(_,v,w,D,null);ll(_,w)}return null}function E(_,v,w,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return _=_.get(w)||null,l(v,_,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Xa:return _=_.get(D.key===null?w:D.key)||null,u(v,_,D,M);case Oi:return _=_.get(D.key===null?w:D.key)||null,c(v,_,D,M);case tr:var z=D._init;return E(_,v,w,z(D._payload),M)}if(lo(D)||Xs(D))return _=_.get(w)||null,f(v,_,D,M,null);ll(v,D)}return null}function A(_,v,w,D){for(var M=null,z=null,I=v,y=v=0,T=null;I!==null&&y<w.length;y++){I.index>y?(T=I,I=null):T=I.sibling;var S=m(_,I,w[y],D);if(S===null){I===null&&(I=T);break}t&&I&&S.alternate===null&&e(_,I),v=s(S,v,y),z===null?M=S:z.sibling=S,z=S,I=T}if(y===w.length)return n(_,I),ve&&Qr(_,y),M;if(I===null){for(;y<w.length;y++)I=p(_,w[y],D),I!==null&&(v=s(I,v,y),z===null?M=I:z.sibling=I,z=I);return ve&&Qr(_,y),M}for(I=r(_,I);y<w.length;y++)T=E(I,_,y,w[y],D),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?y:T.key),v=s(T,v,y),z===null?M=T:z.sibling=T,z=T);return t&&I.forEach(function(C){return e(_,C)}),ve&&Qr(_,y),M}function k(_,v,w,D){var M=Xs(w);if(typeof M!="function")throw Error(j(150));if(w=M.call(w),w==null)throw Error(j(151));for(var z=M=null,I=v,y=v=0,T=null,S=w.next();I!==null&&!S.done;y++,S=w.next()){I.index>y?(T=I,I=null):T=I.sibling;var C=m(_,I,S.value,D);if(C===null){I===null&&(I=T);break}t&&I&&C.alternate===null&&e(_,I),v=s(C,v,y),z===null?M=C:z.sibling=C,z=C,I=T}if(S.done)return n(_,I),ve&&Qr(_,y),M;if(I===null){for(;!S.done;y++,S=w.next())S=p(_,S.value,D),S!==null&&(v=s(S,v,y),z===null?M=S:z.sibling=S,z=S);return ve&&Qr(_,y),M}for(I=r(_,I);!S.done;y++,S=w.next())S=E(I,_,y,S.value,D),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?y:S.key),v=s(S,v,y),z===null?M=S:z.sibling=S,z=S);return t&&I.forEach(function(x){return e(_,x)}),ve&&Qr(_,y),M}function R(_,v,w,D){if(typeof w=="object"&&w!==null&&w.type===Di&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Xa:e:{for(var M=w.key,z=v;z!==null;){if(z.key===M){if(M=w.type,M===Di){if(z.tag===7){n(_,z.sibling),v=i(z,w.props.children),v.return=_,_=v;break e}}else if(z.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===tr&&Py(M)===z.type){n(_,z.sibling),v=i(z,w.props),v.ref=no(_,z,w),v.return=_,_=v;break e}n(_,z);break}else e(_,z);z=z.sibling}w.type===Di?(v=ii(w.props.children,_.mode,D,w.key),v.return=_,_=v):(D=Ol(w.type,w.key,w.props,null,_.mode,D),D.ref=no(_,v,w),D.return=_,_=D)}return o(_);case Oi:e:{for(z=w.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(_,v.sibling),v=i(v,w.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=xh(w,_.mode,D),v.return=_,_=v}return o(_);case tr:return z=w._init,R(_,v,z(w._payload),D)}if(lo(w))return A(_,v,w,D);if(Xs(w))return k(_,v,w,D);ll(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,w),v.return=_,_=v):(n(_,v),v=bh(w,_.mode,D),v.return=_,_=v),o(_)):n(_,v)}return R}var ls=kE(!0),bE=kE(!1),au=Mr(null),lu=null,$i=null,ap=null;function lp(){ap=$i=lu=null}function up(t){var e=au.current;ge(au),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){lu=t,ap=$i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},$i===null){if(lu===null)throw Error(j(308));$i=t,lu.dependencies={lanes:0,firstContext:t}}else $i=$i.next=t;return e}var Zr=null;function cp(t){Zr===null?Zr=[t]:Zr.push(t)}function xE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vn(t,n)}return i=r.interleaved,i===null?(e.next=e,cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function Cy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,E=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(E,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(E,p,m):A,m==null)break e;p=Se({},p,m);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=E,u=p):f=f.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=p}}function Ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ga={},ln=Mr(ga),Go=Mr(ga),Qo=Mr(ga);function ei(t){if(t===ga)throw Error(j(174));return t}function fp(t,e){switch(de(Qo,e),de(Go,t),de(ln,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lf(e,t)}ge(ln),de(ln,e)}function us(){ge(ln),ge(Go),ge(Qo)}function OE(t){ei(Qo.current);var e=ei(ln.current),n=lf(e,t.type);e!==n&&(de(Go,t),de(ln,n))}function dp(t){Go.current===t&&(ge(ln),ge(Go))}var Te=Mr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sh=[];function pp(){for(var t=0;t<Sh.length;t++)Sh[t]._workInProgressVersionPrimary=null;Sh.length=0}var Rl=Wn.ReactCurrentDispatcher,Ah=Wn.ReactCurrentBatchConfig,ai=0,Ie=null,Oe=null,Ue=null,hu=!1,So=!1,Yo=0,GP=0;function Je(){throw Error(j(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,i,s){if(ai=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?JP:ZP,t=n(r,i),So){s=0;do{if(So=!1,Yo=0,25<=s)throw Error(j(301));s+=1,Ue=Oe=null,e.updateQueue=null,Rl.current=eC,t=n(r,i)}while(So)}if(Rl.current=fu,e=Oe!==null&&Oe.next!==null,ai=0,Ue=Oe=Ie=null,hu=!1,e)throw Error(j(300));return t}function yp(){var t=Yo!==0;return Yo=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Mt(){if(Oe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Ue===null?Ie.memoizedState:Ue.next;if(e!==null)Ue=e,Oe=t;else{if(t===null)throw Error(j(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Xo(t,e){return typeof e=="function"?e(t):e}function Ph(t){var e=Mt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ai&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=f,li|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ch(t){var e=Mt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function DE(){}function LE(t,e){var n=Ie,r=Mt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,vp(FE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Jo(9,ME.bind(null,n,r,i,e),void 0,null),je===null)throw Error(j(349));ai&30||VE(n,e,i)}return i}function VE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ME(t,e,n,r){e.value=n,e.getSnapshot=r,UE(e)&&jE(t)}function FE(t,e,n){return n(function(){UE(e)&&jE(t)})}function UE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function jE(t){var e=Vn(t,1);e!==null&&Wt(e,t,1,-1)}function ky(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=XP.bind(null,Ie,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zE(){return Mt().memoizedState}function kl(t,e,n,r){var i=Zt();Ie.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&mp(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function by(t,e){return kl(8390656,8,t,e)}function vp(t,e){return ec(2048,8,t,e)}function $E(t,e){return ec(4,2,t,e)}function BE(t,e){return ec(4,4,t,e)}function HE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function WE(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,HE.bind(null,e,t),n)}function _p(){}function qE(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function KE(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GE(t,e,n){return ai&21?(Kt(n,e)||(n=Z0(),Ie.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function QP(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Ah.transition;Ah.transition={};try{t(!1),e()}finally{ce=n,Ah.transition=r}}function QE(){return Mt().memoizedState}function YP(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YE(t))XE(e,n);else if(n=xE(t,e,n,r),n!==null){var i=ct();Wt(n,t,r,i),JE(n,e,r)}}function XP(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YE(t))XE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,cp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=xE(t,e,i,r),n!==null&&(i=ct(),Wt(n,t,r,i),JE(n,e,r))}}function YE(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function XE(t,e){So=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var fu={readContext:Vt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},JP={readContext:Vt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:by,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,HE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YP.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:ky,useDebugValue:_p,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=ky(!1),e=t[0];return t=QP.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Zt();if(ve){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),je===null)throw Error(j(349));ai&30||VE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,by(FE.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,ME.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=je.identifierPrefix;if(ve){var n=Cn,r=Pn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZP={readContext:Vt,useCallback:qE,useContext:Vt,useEffect:vp,useImperativeHandle:WE,useInsertionEffect:$E,useLayoutEffect:BE,useMemo:KE,useReducer:Ph,useRef:zE,useState:function(){return Ph(Xo)},useDebugValue:_p,useDeferredValue:function(t){var e=Mt();return GE(e,Oe.memoizedState,t)},useTransition:function(){var t=Ph(Xo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:DE,useSyncExternalStore:LE,useId:QE,unstable_isNewReconciler:!1},eC={readContext:Vt,useCallback:qE,useContext:Vt,useEffect:vp,useImperativeHandle:WE,useInsertionEffect:$E,useLayoutEffect:BE,useMemo:KE,useReducer:Ch,useRef:zE,useState:function(){return Ch(Xo)},useDebugValue:_p,useDeferredValue:function(t){var e=Mt();return Oe===null?e.memoizedState=t:GE(e,Oe.memoizedState,t)},useTransition:function(){var t=Ch(Xo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:DE,useSyncExternalStore:LE,useId:QE,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=vr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(Wt(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=vr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(Wt(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=vr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(Wt(e,t,r,n),Cl(e,t,r))}};function xy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,r)||!Ho(i,s):!0}function ZE(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=vt(e)?si:it.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function bf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=vt(e)?si:it.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e){try{var n="",r=e;do n+=RA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tC=typeof WeakMap=="function"?WeakMap:Map;function ew(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,zf=r),xf(t,e)},n}function tw(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mC.bind(null,t,e,n),e.then(t,t))}function Dy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var nC=Wn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?bE(e,null,n,r):ls(e,t.child,n,r)}function Vy(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=gp(t,e,n,r,s,i),n=yp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ve&&n&&ip(e),e.flags|=1,ut(t,e,r,i),e.child)}function My(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nw(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function nw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ho(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return Nf(t,e,n,r,i)}function rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Hi,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Hi,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Hi,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Hi,Tt),Tt|=r;return ut(t,e,i,n),e.child}function iw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,r,i){var s=vt(n)?si:it.current;return s=os(e,s),Ji(e,i),n=gp(t,e,n,r,s,i),r=yp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ve&&r&&ip(e),e.flags|=1,ut(t,e,n,i),e.child)}function Fy(t,e,n,r,i){if(vt(n)){var s=!0;iu(e)}else s=!1;if(Ji(e,i),e.stateNode===null)bl(t,e),ZE(e,n,r),bf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=vt(n)?si:it.current,c=os(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ny(e,o,r,c),nr=!1;var m=e.memoizedState;o.state=m,uu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||yt.current||nr?(typeof f=="function"&&(kf(e,n,f,r),u=e.memoizedState),(l=nr||xy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:jt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?si:it.current,u=os(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ny(e,o,r,u),nr=!1,m=e.memoizedState,o.state=m,uu(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||yt.current||nr?(typeof E=="function"&&(kf(e,n,E,r),A=e.memoizedState),(c=nr||xy(e,n,c,r,m,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Of(t,e,n,r,s,i)}function Of(t,e,n,r,i,s){iw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Iy(e,n,!1),Mn(t,e,s);r=e.stateNode,nC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&Iy(e,n,!0),e.child}function sw(t){var e=t.stateNode;e.pendingContext?Ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ty(t,e.context,!1),fp(t,e.containerInfo)}function Uy(t,e,n,r,i){return as(),op(i),e.flags|=256,ut(t,e,n,r),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ow(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Te,i&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lf(n),e.memoizedState=Df,t):Ep(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Df,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ep(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&op(r),ls(e,t.child,null,n),t=Ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rh(Error(j(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ic({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=Lf(o),e.memoizedState=Df,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Rh(s,r,void 0),ul(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(t,i),Wt(r,t,i,-1))}return Pp(),r=Rh(Error(j(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=mr(i.nextSibling),At=e,ve=!0,$t=null,t!==null&&(xt[Nt++]=Pn,xt[Nt++]=Cn,xt[Nt++]=oi,Pn=t.id,Cn=t.overflow,oi=e),e=Ep(e,r.children),e.flags|=4096,e)}function jy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rf(t.return,e,n)}function kh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function aw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jy(t,n,e);else if(t.tag===19)jy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kh(e,!0,n,null,s);break;case"together":kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iC(t,e,n){switch(e.tag){case 3:sw(e),as();break;case 5:OE(e);break;case 1:vt(e.type)&&iu(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?ow(t,e,n):(de(Te,Te.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);de(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return aw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,rw(t,e,n)}return Mn(t,e,n)}var lw,Vf,uw,cw;lw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};uw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ei(ln.current);var s=null;switch(n){case"input":i=rf(t,i),r=rf(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=af(t,i),r=af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}uf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sC(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return vt(e.type)&&ru(),Ze(e),null;case 3:return r=e.stateNode,us(),ge(yt),ge(it),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Hf($t),$t=null))),Vf(t,e),Ze(e),null;case 5:dp(e);var i=ei(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)uw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ze(e),null}if(t=ei(ln.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)me(co[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Qg(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Xg(r,s),me("invalid",r)}uf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",""+l]):Mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ja(r),Yg(r,s,!0);break;case"textarea":Ja(r),Jg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Ko]=r,lw(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)me(co[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Qg(t,r),i=rf(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",t);break;case"textarea":Xg(t,r),i=af(t,r),me("invalid",t);break;default:i=r}uf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?z0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&U0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fo(t,u):typeof u=="number"&&Fo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Hd(t,s,u,o))}switch(n){case"input":Ja(t),Yg(t,r,!1);break;case"textarea":Ja(t),Jg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ei(Qo.current),ei(ln.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ge(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&It!==null&&e.mode&1&&!(e.flags&128))RE(),as(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[nn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else $t!==null&&(Hf($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Le===0&&(Le=3):Pp())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return us(),Vf(t,e),t===null&&Wo(e.stateNode.containerInfo),Ze(e),null;case 10:return up(e.type._context),Ze(e),null;case 17:return vt(e.type)&&ru(),Ze(e),null;case 19:if(ge(Te),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>hs&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ze(e),null}else 2*be()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Te.current,de(Te,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function oC(t,e){switch(sp(e),e.tag){case 1:return vt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),ge(yt),ge(it),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(ge(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Te),null;case 4:return us(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var cl=!1,nt=!1,aC=typeof WeakSet=="function"?WeakSet:Set,W=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Mf(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var zy=!1;function lC(t,e){if(Ef=Zl,t=mE(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Zl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,R=A.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?k:jt(e.type,k),R);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Ce(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return A=zy,zy=!1,A}function Ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mf(e,n,s)}i=i.next}while(i!==r)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hw(t){var e=t.alternate;e!==null&&(t.alternate=null,hw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Ko],delete e[Sf],delete e[HP],delete e[WP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fw(t){return t.tag===5||t.tag===3||t.tag===4}function $y(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}var $e=null,zt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)dw(t,e,n),n=n.sibling}function dw(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:nt||Bi(n,e);case 6:var r=$e,i=zt;$e=null,Xn(t,e,n),$e=r,zt=i,$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?Th(t.parentNode,n):t.nodeType===1&&Th(t,n),$o(t)):Th($e,n.stateNode));break;case 4:r=$e,i=zt,$e=n.stateNode.containerInfo,zt=!0,Xn(t,e,n),$e=r,zt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mf(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!nt&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Xn(t,e,n),nt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function By(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aC),e.forEach(function(r){var i=yC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,zt=!1;break e;case 3:$e=l.stateNode.containerInfo,zt=!0;break e;case 4:$e=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if($e===null)throw Error(j(160));dw(s,o,i),$e=null,zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pw(e,t),e=e.sibling}function pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),Jt(t),r&4){try{Ao(3,t,t.return),nc(3,t)}catch(k){Ce(t,t.return,k)}try{Ao(5,t,t.return)}catch(k){Ce(t,t.return,k)}}break;case 1:Ut(e,t),Jt(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(Ut(e,t),Jt(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var i=t.stateNode;try{Fo(i,"")}catch(k){Ce(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&V0(i,s),cf(l,o);var c=cf(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?z0(i,p):f==="dangerouslySetInnerHTML"?U0(i,p):f==="children"?Fo(i,p):Hd(i,f,p,c)}switch(l){case"input":sf(i,s);break;case"textarea":M0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Gi(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ko]=s}catch(k){Ce(t,t.return,k)}}break;case 6:if(Ut(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ce(t,t.return,k)}}break;case 3:if(Ut(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(k){Ce(t,t.return,k)}break;case 4:Ut(e,t),Jt(t);break;case 13:Ut(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=be())),r&4&&By(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||f,Ut(e,t),nt=c):Ut(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,E=m.child,m.tag){case 0:case 11:case 14:case 15:Ao(4,m,m.return);break;case 1:Bi(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Ce(r,n,k)}}break;case 5:Bi(m,m.return);break;case 22:if(m.memoizedState!==null){Wy(p);continue}}E!==null?(E.return=m,W=E):Wy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=j0("display",o))}catch(k){Ce(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ce(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(e,t),Jt(t),r&4&&By(t);break;case 21:break;default:Ut(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fo(i,""),r.flags&=-33);var s=$y(t);jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$y(t);Uf(t,l,o);break;default:throw Error(j(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uC(t,e,n){W=t,mw(t)}function mw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=cl;var c=nt;if(cl=o,(nt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?qy(i):u!==null?(u.return=o,W=u):qy(i);for(;s!==null;)W=s,mw(s),s=s.sibling;W=i,cl=l,nt=c}Hy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Hy(t)}}function Hy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||nc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ry(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&$o(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}nt||e.flags&512&&Ff(e)}catch(m){Ce(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Wy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function qy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Ff(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Ff(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var cC=Math.ceil,du=Wn.ReactCurrentDispatcher,wp=Wn.ReactCurrentOwner,Lt=Wn.ReactCurrentBatchConfig,ae=0,je=null,Ne=null,We=0,Tt=0,Hi=Mr(0),Le=0,Zo=null,li=0,rc=0,Tp=0,Po=null,pt=null,Ip=0,hs=1/0,Sn=null,pu=!1,zf=null,yr=null,hl=!1,cr=null,mu=0,Co=0,$f=null,xl=-1,Nl=0;function ct(){return ae&6?be():xl!==-1?xl:xl=be()}function vr(t){return t.mode&1?ae&2&&We!==0?We&-We:KP.transition!==null?(Nl===0&&(Nl=Z0()),Nl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:oE(t.type)),t):1}function Wt(t,e,n,r){if(50<Co)throw Co=0,$f=null,Error(j(185));da(t,n,r),(!(ae&2)||t!==je)&&(t===je&&(!(ae&2)&&(rc|=n),Le===4&&ir(t,We)),_t(t,r),n===1&&ae===0&&!(e.mode&1)&&(hs=be()+500,Zu&&Fr()))}function _t(t,e){var n=t.callbackNode;KA(t,e);var r=Jl(t,t===je?We:0);if(r===0)n!==null&&ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ty(n),e===1)t.tag===0?qP(Ky.bind(null,t)):AE(Ky.bind(null,t)),$P(function(){!(ae&6)&&Fr()}),n=null;else{switch(eE(r)){case 1:n=Qd;break;case 4:n=X0;break;case 16:n=Xl;break;case 536870912:n=J0;break;default:n=Xl}n=Iw(n,gw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gw(t,e){if(xl=-1,Nl=0,ae&6)throw Error(j(327));var n=t.callbackNode;if(Zi()&&t.callbackNode!==n)return null;var r=Jl(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var i=ae;ae|=2;var s=vw();(je!==t||We!==e)&&(Sn=null,hs=be()+500,ri(t,e));do try{dC();break}catch(l){yw(t,l)}while(!0);lp(),du.current=s,ae=i,Ne!==null?e=0:(je=null,We=0,e=Le)}if(e!==0){if(e===2&&(i=mf(t),i!==0&&(r=i,e=Bf(t,i))),e===1)throw n=Zo,ri(t,0),ir(t,r),_t(t,be()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!hC(i)&&(e=gu(t,r),e===2&&(s=mf(t),s!==0&&(r=s,e=Bf(t,s))),e===1))throw n=Zo,ri(t,0),ir(t,r),_t(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Yr(t,pt,Sn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Ip+500-be(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=If(Yr.bind(null,t,pt,Sn),e);break}Yr(t,pt,Sn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cC(r/1960))-r,10<r){t.timeoutHandle=If(Yr.bind(null,t,pt,Sn),r);break}Yr(t,pt,Sn);break;case 5:Yr(t,pt,Sn);break;default:throw Error(j(329))}}}return _t(t,be()),t.callbackNode===n?gw.bind(null,t):null}function Bf(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=gu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Hf(e)),t}function Hf(t){pt===null?pt=t:pt.push.apply(pt,t)}function hC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Tp,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Ky(t){if(ae&6)throw Error(j(327));Zi();var e=Jl(t,0);if(!(e&1))return _t(t,be()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=mf(t);r!==0&&(e=r,n=Bf(t,r))}if(n===1)throw n=Zo,ri(t,0),ir(t,e),_t(t,be()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,pt,Sn),_t(t,be()),null}function Sp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(hs=be()+500,Zu&&Fr())}}function ui(t){cr!==null&&cr.tag===0&&!(ae&6)&&Zi();var e=ae;ae|=1;var n=Lt.transition,r=ce;try{if(Lt.transition=null,ce=1,t)return t()}finally{ce=r,Lt.transition=n,ae=e,!(ae&6)&&Fr()}}function Ap(){Tt=Hi.current,ge(Hi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zP(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:us(),ge(yt),ge(it),pp();break;case 5:dp(r);break;case 4:us();break;case 13:ge(Te);break;case 19:ge(Te);break;case 10:up(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(je=t,Ne=t=_r(t.current,null),We=Tt=e,Le=0,Zo=null,Tp=rc=li=0,pt=Po=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return t}function yw(t,e){do{var n=Ne;try{if(lp(),Rl.current=fu,hu){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hu=!1}if(ai=0,Ue=Oe=Ie=null,So=!1,Yo=0,wp.current=null,n===null||n.return===null){Le=1,Zo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Dy(o);if(E!==null){E.flags&=-257,Ly(E,o,l,s,e),E.mode&1&&Oy(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){Oy(s,c,e),Pp();break e}u=Error(j(426))}}else if(ve&&l.mode&1){var R=Dy(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ly(R,o,l,s,e),op(cs(u,l));break e}}s=u=cs(u,l),Le!==4&&(Le=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=ew(s,u,e);Cy(s,_);break e;case 1:l=u;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(yr===null||!yr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=tw(s,l,e);Cy(s,D);break e}}s=s.return}while(s!==null)}Ew(n)}catch(M){e=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function vw(){var t=du.current;return du.current=fu,t===null?fu:t}function Pp(){(Le===0||Le===3||Le===2)&&(Le=4),je===null||!(li&268435455)&&!(rc&268435455)||ir(je,We)}function gu(t,e){var n=ae;ae|=2;var r=vw();(je!==t||We!==e)&&(Sn=null,ri(t,e));do try{fC();break}catch(i){yw(t,i)}while(!0);if(lp(),ae=n,du.current=r,Ne!==null)throw Error(j(261));return je=null,We=0,Le}function fC(){for(;Ne!==null;)_w(Ne)}function dC(){for(;Ne!==null&&!FA();)_w(Ne)}function _w(t){var e=Tw(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?Ew(t):Ne=e,wp.current=null}function Ew(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oC(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=sC(n,e,Tt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function Yr(t,e,n){var r=ce,i=Lt.transition;try{Lt.transition=null,ce=1,pC(t,e,n,r)}finally{Lt.transition=i,ce=r}return null}function pC(t,e,n,r){do Zi();while(cr!==null);if(ae&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GA(t,s),t===je&&(Ne=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Iw(Xl,function(){return Zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ce;ce=1;var l=ae;ae|=4,wp.current=null,lC(t,n),pw(n,t),DP(wf),Zl=!!Ef,wf=Ef=null,t.current=n,uC(n),UA(),ae=l,ce=o,Lt.transition=s}else t.current=n;if(hl&&(hl=!1,cr=t,mu=i),s=t.pendingLanes,s===0&&(yr=null),$A(n.stateNode),_t(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,t=zf,zf=null,t;return mu&1&&t.tag!==0&&Zi(),s=t.pendingLanes,s&1?t===$f?Co++:(Co=0,$f=t):Co=0,Fr(),null}function Zi(){if(cr!==null){var t=eE(mu),e=Lt.transition,n=ce;try{if(Lt.transition=null,ce=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,mu=0,ae&6)throw Error(j(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ao(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,E=f.return;if(hw(f),f===c){W=null;break}if(m!==null){m.return=E,W=m;break}W=E}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ao(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,W=_;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,W=w;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nc(9,l)}}catch(M){Ce(l,l.return,M)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ae=i,Fr(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Gu,t)}catch{}r=!0}return r}finally{ce=n,Lt.transition=e}}return!1}function Gy(t,e,n){e=cs(n,e),e=ew(t,e,1),t=gr(t,e,1),e=ct(),t!==null&&(da(t,1,e),_t(t,e))}function Ce(t,e,n){if(t.tag===3)Gy(t,t,n);else for(;e!==null;){if(e.tag===3){Gy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=cs(n,t),t=tw(e,t,1),e=gr(e,t,1),t=ct(),e!==null&&(da(e,1,t),_t(e,t));break}}e=e.return}}function mC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>be()-Ip?ri(t,0):Tp|=n),_t(t,e)}function ww(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=ct();t=Vn(t,e),t!==null&&(da(t,e,n),_t(t,n))}function gC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ww(t,n)}function yC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),ww(t,n)}var Tw;Tw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,iC(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ve&&e.flags&1048576&&PE(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var i=os(e,it.current);Ji(e,n),i=gp(null,e,r,t,i,n);var s=yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,iu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hp(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,bf(e,r,t,n),e=Of(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&ip(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_C(r),t=jt(r,t),i){case 0:e=Nf(null,e,r,t,n);break e;case 1:e=Fy(null,e,r,t,n);break e;case 11:e=Vy(null,e,r,t,n);break e;case 14:e=My(null,e,r,jt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Nf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Fy(t,e,r,i,n);case 3:e:{if(sw(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NE(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(j(423)),e),e=Uy(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(j(424)),e),e=Uy(t,e,r,n,i);break e}else for(It=mr(e.stateNode.containerInfo.firstChild),At=e,ve=!0,$t=null,n=bE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Mn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return OE(e),t===null&&Cf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tf(r,i)?o=null:s!==null&&Tf(r,s)&&(e.flags|=32),iw(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return ow(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Vy(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(au,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!yt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Rf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Vt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),My(t,e,r,i,n);case 15:return nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),bl(t,e),e.tag=1,vt(r)?(t=!0,iu(e)):t=!1,Ji(e,n),ZE(e,r,i),bf(e,r,i,n),Of(null,e,r,!0,t,n);case 19:return aw(t,e,n);case 22:return rw(t,e,n)}throw Error(j(156,e.tag))};function Iw(t,e){return Y0(t,e)}function vC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new vC(t,e,n,r)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _C(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Kd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Di:return ii(n.children,i,s,e);case Wd:o=8,i|=8;break;case Zh:return t=Dt(12,n,e,i|2),t.elementType=Zh,t.lanes=s,t;case ef:return t=Dt(13,n,e,i),t.elementType=ef,t.lanes=s,t;case tf:return t=Dt(19,n,e,i),t.elementType=tf,t.lanes=s,t;case O0:return ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:o=10;break e;case N0:o=9;break e;case qd:o=11;break e;case Kd:o=14;break e;case tr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function ic(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=O0,t.lanes=n,t.stateNode={isHidden:!1},t}function bh(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function xh(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hh(0),this.expirationTimes=hh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,r,i,s,o,l,u){return t=new EC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),t}function wC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sw(t){if(!t)return Pr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(vt(n))return SE(t,n,e)}return e}function Aw(t,e,n,r,i,s,o,l,u){return t=Rp(n,r,!0,t,i,s,o,l,u),t.context=Sw(null),n=t.current,r=ct(),i=vr(n),s=bn(r,i),s.callback=e??null,gr(n,s,i),t.current.lanes=i,da(t,i,r),_t(t,r),t}function sc(t,e,n,r){var i=e.current,s=ct(),o=vr(i);return n=Sw(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(Wt(t,i,o,s),Cl(t,i,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kp(t,e){Qy(t,e),(t=t.alternate)&&Qy(t,e)}function TC(){return null}var Pw=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}oc.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));sc(t,e,null,null)};oc.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){sc(null,t,null,null)}),e[Ln]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=rE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&sE(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yy(){}function IC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=yu(o);s.call(c)}}var o=Aw(e,r,t,0,null,!1,!1,"",Yy);return t._reactRootContainer=o,t[Ln]=o.current,Wo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=yu(u);l.call(c)}}var u=Rp(t,0,!1,null,null,!1,!1,"",Yy);return t._reactRootContainer=u,t[Ln]=u.current,Wo(t.nodeType===8?t.parentNode:t),ui(function(){sc(e,u,n,r)}),u}function lc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=yu(o);l.call(u)}}sc(e,o,t,i)}else o=IC(n,e,t,i,r);return yu(o)}tE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Yd(e,n|1),_t(e,be()),!(ae&6)&&(hs=be()+500,Fr()))}break;case 13:ui(function(){var r=Vn(t,1);if(r!==null){var i=ct();Wt(r,t,1,i)}}),kp(t,1)}};Xd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=ct();Wt(e,t,134217728,n)}kp(t,134217728)}};nE=function(t){if(t.tag===13){var e=vr(t),n=Vn(t,e);if(n!==null){var r=ct();Wt(n,t,e,r)}kp(t,e)}};rE=function(){return ce};iE=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};ff=function(t,e,n){switch(e){case"input":if(sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ju(r);if(!i)throw Error(j(90));L0(r),sf(r,i)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};H0=Sp;W0=ui;var SC={usingClientEntryPoint:!1,Events:[ma,Fi,Ju,$0,B0,Sp]},io={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AC={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||TC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Gu=fl.inject(AC),an=fl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SC;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(j(200));return wC(t,e,null,n)};Ct.createRoot=function(t,e){if(!xp(t))throw Error(j(299));var n=!1,r="",i=Pw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Wo(t.nodeType===8?t.parentNode:t),new bp(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ui(t)};Ct.hydrate=function(t,e,n){if(!ac(e))throw Error(j(200));return lc(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Aw(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new oc(e)};Ct.render=function(t,e,n){if(!ac(e))throw Error(j(200));return lc(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!ac(t))throw Error(j(40));return t._reactRootContainer?(ui(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Ct.unstable_batchedUpdates=Sp;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ac(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return lc(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function Cw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cw)}catch(t){console.error(t)}}Cw(),C0.exports=Ct;var PC=C0.exports,Rw,Xy=PC;Rw=Xy.createRoot,Xy.hydrateRoot;var Np={};Object.defineProperty(Np,"__esModule",{value:!0});Np.parse=OC;Np.serialize=DC;const CC=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,RC=/^[\u0021-\u003A\u003C-\u007E]*$/,kC=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,bC=/^[\u0020-\u003A\u003D-\u007E]*$/,xC=Object.prototype.toString,NC=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function OC(t,e){const n=new NC,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||LC;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const l=t.indexOf(";",s),u=l===-1?r:l;if(o>u){s=t.lastIndexOf(";",o-1)+1;continue}const c=Jy(t,s,o),f=Zy(t,o,c),p=t.slice(c,f);if(n[p]===void 0){let m=Jy(t,o+1,u),E=Zy(t,u,m);const A=i(t.slice(m,E));n[p]=A}s=u+1}while(s<r);return n}function Jy(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Zy(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function DC(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!CC.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!RC.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!kC.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!bC.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!VC(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function LC(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function VC(t){return xC.call(t)==="[object Date]"}/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ev="popstate";function MC(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Wf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ea(i)}return UC(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FC(){return Math.random().toString(36).substring(2,10)}function tv(t,e){return{usr:t.state,key:t.key,idx:e}}function Wf(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?As(e):e,state:n,key:e&&e.key||r||FC()}}function ea({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function UC(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let R=f(),_=R==null?null:R-c;c=R,u&&u({action:l,location:k.location,delta:_})}function m(R,_){l="PUSH";let v=Wf(k.location,R,_);c=f()+1;let w=tv(v,c),D=k.createHref(v);try{o.pushState(w,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function E(R,_){l="REPLACE";let v=Wf(k.location,R,_);c=f();let w=tv(v,c),D=k.createHref(v);o.replaceState(w,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function A(R){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof R=="string"?R:ea(R);return v=v.replace(/ $/,"%20"),Ee(_,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,_)}let k={get action(){return l},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ev,p),u=R,()=>{i.removeEventListener(ev,p),u=null}},createHref(R){return e(i,R)},createURL:A,encodeLocation(R){let _=A(R);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:E,go(R){return o.go(R)}};return k}function kw(t,e,n="/"){return jC(t,e,n,!1)}function jC(t,e,n,r){let i=typeof e=="string"?As(e):e,s=Fn(i.pathname||"/",n);if(s==null)return null;let o=bw(t);zC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=JC(s);l=YC(o[u],c,r)}return l}function bw(t,e=[],n=[],r=""){let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=xn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ee(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),bw(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:GC(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of xw(s.path))i(s,o,u)}),e}function xw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=xw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function zC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var $C=/^:[\w-]+$/,BC=3,HC=2,WC=1,qC=10,KC=-2,nv=t=>t==="*";function GC(t,e){let n=t.split("/"),r=n.length;return n.some(nv)&&(r+=KC),e&&(r+=HC),n.filter(i=>!nv(i)).reduce((i,s)=>i+($C.test(s)?BC:s===""?WC:qC),r)}function QC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function YC(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=vu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=vu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:xn([s,p.pathname]),pathnameBase:nR(xn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=xn([s,p.pathnameBase]))}return o}function vu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:p},m)=>{if(f==="*"){let A=l[m]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=l[m];return p&&!E?c[f]=void 0:c[f]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function XC(t,e=!1,n=!0){Gt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Fn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ZC(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:eR(n,e):e,search:rR(r),hash:iR(i)}}function eR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Op(t){let e=tR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Dp(t,e,n,r=!1){let i;typeof t=="string"?i=As(t):(i={...t},Ee(!i.pathname||!i.pathname.includes("?"),Nh("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Nh("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Nh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=ZC(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var xn=t=>t.join("/").replace(/\/\/+/g,"/"),nR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Nw=["POST","PUT","PATCH","DELETE"];new Set(Nw);var oR=["GET",...Nw];new Set(oR);var Ps=O.createContext(null);Ps.displayName="DataRouter";var uc=O.createContext(null);uc.displayName="DataRouterState";var Ow=O.createContext({isTransitioning:!1});Ow.displayName="ViewTransition";var aR=O.createContext(new Map);aR.displayName="Fetchers";var lR=O.createContext(null);lR.displayName="Await";var Yt=O.createContext(null);Yt.displayName="Navigation";var ya=O.createContext(null);ya.displayName="Location";var gn=O.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var Lp=O.createContext(null);Lp.displayName="RouteError";function uR(t,{relative:e}={}){Ee(Cs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=O.useContext(Yt),{hash:i,pathname:s,search:o}=va(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:xn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function Cs(){return O.useContext(ya)!=null}function Ur(){return Ee(Cs(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(ya).location}var Dw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lw(t){O.useContext(Yt).static||O.useLayoutEffect(t)}function Ei(){let{isDataRoute:t}=O.useContext(gn);return t?TR():cR()}function cR(){Ee(Cs(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(Ps),{basename:e,navigator:n}=O.useContext(Yt),{matches:r}=O.useContext(gn),{pathname:i}=Ur(),s=JSON.stringify(Op(r)),o=O.useRef(!1);return Lw(()=>{o.current=!0}),O.useCallback((u,c={})=>{if(Gt(o.current,Dw),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=Dp(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:xn([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,s,i,t])}O.createContext(null);function va(t,{relative:e}={}){let{matches:n}=O.useContext(gn),{pathname:r}=Ur(),i=JSON.stringify(Op(n));return O.useMemo(()=>Dp(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function hR(t,e){return Vw(t,e)}function Vw(t,e,n,r){var v;Ee(Cs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:s}=O.useContext(Yt),{matches:o}=O.useContext(gn),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let w=p&&p.path||"";Mw(c,!p||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let m=Ur(),E;if(e){let w=typeof e=="string"?As(e):e;Ee(f==="/"||((v=w.pathname)==null?void 0:v.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${w.pathname}" was given in the \`location\` prop.`),E=w}else E=m;let A=E.pathname||"/",k=A;if(f!=="/"){let w=f.replace(/^\//,"").split("/");k="/"+A.replace(/^\//,"").split("/").slice(w.length).join("/")}let R=!s&&n&&n.matches&&n.matches.length>0?n.matches:kw(t,{pathname:k});Gt(p||R!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Gt(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=gR(R&&R.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:xn([f,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?f:xn([f,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&_?O.createElement(ya.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},_):_}function fR(){let t=wR(),e=sR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,o)}var dR=O.createElement(fR,null),pR=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?O.createElement(gn.Provider,{value:this.props.routeContext},O.createElement(Lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mR({routeContext:t,match:e,children:n}){let r=O.useContext(Ps);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(gn.Provider,{value:t},n)}function gR(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let u=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);Ee(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,l=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:f,errors:p}=n,m=c.route.loader&&!f.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||m){o=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,c,f)=>{let p,m=!1,E=null,A=null;n&&(p=s&&c.route.id?s[c.route.id]:void 0,E=c.route.errorElement||dR,o&&(l<0&&f===0?(Mw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,A=null):l===f&&(m=!0,A=c.route.hydrateFallbackElement||null)));let k=e.concat(i.slice(0,f+1)),R=()=>{let _;return p?_=E:m?_=A:c.route.Component?_=O.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=u,O.createElement(mR,{match:c,routeContext:{outlet:u,matches:k,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?O.createElement(pR,{location:n.location,revalidation:n.revalidation,component:E,error:p,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):R()},null)}function Vp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yR(t){let e=O.useContext(Ps);return Ee(e,Vp(t)),e}function vR(t){let e=O.useContext(uc);return Ee(e,Vp(t)),e}function _R(t){let e=O.useContext(gn);return Ee(e,Vp(t)),e}function Mp(t){let e=_R(t),n=e.matches[e.matches.length-1];return Ee(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function ER(){return Mp("useRouteId")}function wR(){var r;let t=O.useContext(Lp),e=vR("useRouteError"),n=Mp("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function TR(){let{router:t}=yR("useNavigate"),e=Mp("useNavigate"),n=O.useRef(!1);return Lw(()=>{n.current=!0}),O.useCallback(async(i,s={})=>{Gt(n.current,Dw),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var rv={};function Mw(t,e,n){!e&&!rv[t]&&(rv[t]=!0,Gt(!1,n))}O.memo(IR);function IR({routes:t,future:e,state:n}){return Vw(t,void 0,n,e)}function SR({to:t,replace:e,state:n,relative:r}){Ee(Cs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=O.useContext(Yt);Gt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=O.useContext(gn),{pathname:o}=Ur(),l=Ei(),u=Dp(t,Op(s),o,r==="path"),c=JSON.stringify(u);return O.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function er(t){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ee(!Cs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=O.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=As(n));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:m="default"}=n,E=O.useMemo(()=>{let A=Fn(u,o);return A==null?null:{location:{pathname:A,search:c,hash:f,state:p,key:m},navigationType:r}},[o,u,c,f,p,m,r]);return Gt(E!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:O.createElement(Yt.Provider,{value:l},O.createElement(ya.Provider,{children:e,value:E}))}function iv({children:t,location:e}){return hR(qf(t),e)}function qf(t,e=[]){let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,qf(r.props.children,s));return}Ee(r.type===er,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qf(r.props.children,s)),n.push(o)}),n}var Dl="get",Ll="application/x-www-form-urlencoded";function cc(t){return t!=null&&typeof t.tagName=="string"}function PR(t){return cc(t)&&t.tagName.toLowerCase()==="button"}function CR(t){return cc(t)&&t.tagName.toLowerCase()==="form"}function RR(t){return cc(t)&&t.tagName.toLowerCase()==="input"}function kR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bR(t,e){return t.button===0&&(!e||e==="_self")&&!kR(t)}var dl=null;function xR(){if(dl===null)try{new FormData(document.createElement("form"),0),dl=!1}catch{dl=!0}return dl}var NR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oh(t){return t!=null&&!NR.has(t)?(Gt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ll}"`),null):t}function OR(t,e){let n,r,i,s,o;if(CR(t)){let l=t.getAttribute("action");r=l?Fn(l,e):null,n=t.getAttribute("method")||Dl,i=Oh(t.getAttribute("enctype"))||Ll,s=new FormData(t)}else if(PR(t)||RR(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?Fn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Dl,i=Oh(t.getAttribute("formenctype"))||Oh(l.getAttribute("enctype"))||Ll,s=new FormData(l,t),!xR()){let{name:c,type:f,value:p}=t;if(f==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(cc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Dl,r=null,i=Ll,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Fp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function DR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function LR(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function VR(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await DR(s,n);return o.links?o.links():[]}return[]}));return jR(r.flat(1).filter(LR).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function sv(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var f;return n[c].pathname!==u.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function MR(t,e,{includeHydrateFallback:n}={}){return FR(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function FR(t){return[...new Set(t)]}function UR(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function jR(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(UR(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function zR(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Fn(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Fw(){let t=O.useContext(Ps);return Fp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function $R(){let t=O.useContext(uc);return Fp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Up=O.createContext(void 0);Up.displayName="FrameworkContext";function Uw(){let t=O.useContext(Up);return Fp(t,"You must render this element inside a <HydratedRouter> element"),t}function BR(t,e){let n=O.useContext(Up),[r,i]=O.useState(!1),[s,o]=O.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:p}=e,m=O.useRef(null);O.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let k=_=>{_.forEach(v=>{o(v.isIntersecting)})},R=new IntersectionObserver(k,{threshold:.5});return m.current&&R.observe(m.current),()=>{R.disconnect()}}},[t]),O.useEffect(()=>{if(r){let k=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(k)}}},[r]);let E=()=>{i(!0)},A=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:so(l,E),onBlur:so(u,A),onMouseEnter:so(c,E),onMouseLeave:so(f,A),onTouchStart:so(p,E)}]:[!1,m,{}]}function so(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function HR({page:t,...e}){let{router:n}=Fw(),r=O.useMemo(()=>kw(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?O.createElement(qR,{page:t,matches:r,...e}):null}function WR(t){let{manifest:e,routeModules:n}=Uw(),[r,i]=O.useState([]);return O.useEffect(()=>{let s=!1;return VR(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function qR({page:t,matches:e,...n}){let r=Ur(),{manifest:i,routeModules:s}=Uw(),{basename:o}=Fw(),{loaderData:l,matches:u}=$R(),c=O.useMemo(()=>sv(t,e,u,i,r,"data"),[t,e,u,i,r]),f=O.useMemo(()=>sv(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=O.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let A=new Set,k=!1;if(e.forEach(_=>{var w;let v=i.routes[_.route.id];!v||!v.hasLoader||(!c.some(D=>D.route.id===_.route.id)&&_.route.id in l&&((w=s[_.route.id])!=null&&w.shouldRevalidate)||v.hasClientLoader?k=!0:A.add(_.route.id))}),A.size===0)return[];let R=zR(t,o);return k&&A.size>0&&R.searchParams.set("_routes",e.filter(_=>A.has(_.route.id)).map(_=>_.route.id).join(",")),[R.pathname+R.search]},[o,l,r,i,c,e,t,s]),m=O.useMemo(()=>MR(f,i),[f,i]),E=WR(f);return O.createElement(O.Fragment,null,p.map(A=>O.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...n})),m.map(A=>O.createElement("link",{key:A,rel:"modulepreload",href:A,...n})),E.map(({key:A,link:k})=>O.createElement("link",{key:A,...k})))}function KR(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var jw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jw&&(window.__reactRouterVersion="7.5.0")}catch{}function GR({basename:t,children:e,window:n}){let r=O.useRef();r.current==null&&(r.current=MC({window:n,v5Compat:!0}));let i=r.current,[s,o]=O.useState({action:i.action,location:i.location}),l=O.useCallback(u=>{O.startTransition(()=>o(u))},[o]);return O.useLayoutEffect(()=>i.listen(l),[i,l]),O.createElement(AR,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var zw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ro=O.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p,...m},E){let{basename:A}=O.useContext(Yt),k=typeof c=="string"&&zw.test(c),R,_=!1;if(typeof c=="string"&&k&&(R=c,jw))try{let T=new URL(window.location.href),S=c.startsWith("//")?new URL(T.protocol+c):new URL(c),C=Fn(S.pathname,A);S.origin===T.origin&&C!=null?c=C+S.search+S.hash:_=!0}catch{Gt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=uR(c,{relative:i}),[w,D,M]=BR(r,m),z=JR(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function I(T){e&&e(T),T.defaultPrevented||z(T)}let y=O.createElement("a",{...m,...M,href:R||v,onClick:_||s?e:I,ref:KR(E,D),target:u,"data-discover":!k&&n==="render"?"true":void 0});return w&&!k?O.createElement(O.Fragment,null,y,O.createElement(HR,{page:v})):y});Ro.displayName="Link";var QR=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},f){let p=va(o,{relative:c.relative}),m=Ur(),E=O.useContext(uc),{navigator:A,basename:k}=O.useContext(Yt),R=E!=null&&rk(p)&&l===!0,_=A.encodeLocation?A.encodeLocation(p).pathname:p.pathname,v=m.pathname,w=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;n||(v=v.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&k&&(w=Fn(w,k)||w);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let M=v===_||!i&&v.startsWith(_)&&v.charAt(D)==="/",z=w!=null&&(w===_||!i&&w.startsWith(_)&&w.charAt(_.length)==="/"),I={isActive:M,isPending:z,isTransitioning:R},y=M?e:void 0,T;typeof r=="function"?T=r(I):T=[r,M?"active":null,z?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let S=typeof s=="function"?s(I):s;return O.createElement(Ro,{...c,"aria-current":y,className:T,ref:f,style:S,to:o,viewTransition:l},typeof u=="function"?u(I):u)});QR.displayName="NavLink";var YR=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Dl,action:l,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:p,...m},E)=>{let A=tk(),k=nk(l,{relative:c}),R=o.toLowerCase()==="get"?"get":"post",_=typeof l=="string"&&zw.test(l),v=w=>{if(u&&u(w),w.defaultPrevented)return;w.preventDefault();let D=w.nativeEvent.submitter,M=(D==null?void 0:D.getAttribute("formmethod"))||o;A(D||w.currentTarget,{fetcherKey:e,method:M,navigate:n,replace:i,state:s,relative:c,preventScrollReset:f,viewTransition:p})};return O.createElement("form",{ref:E,method:R,action:k,onSubmit:r?u:v,...m,"data-discover":!_&&t==="render"?"true":void 0})});YR.displayName="Form";function XR(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $w(t){let e=O.useContext(Ps);return Ee(e,XR(t)),e}function JR(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let l=Ei(),u=Ur(),c=va(t,{relative:s});return O.useCallback(f=>{if(bR(f,e)){f.preventDefault();let p=n!==void 0?n:ea(u)===ea(c);l(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,l,c,n,r,e,t,i,s,o])}var ZR=0,ek=()=>`__${String(++ZR)}__`;function tk(){let{router:t}=$w("useSubmit"),{basename:e}=O.useContext(Yt),n=ER();return O.useCallback(async(r,i={})=>{let{action:s,method:o,encType:l,formData:u,body:c}=OR(r,e);if(i.navigate===!1){let f=i.fetcherKey||ek();await t.fetch(f,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function nk(t,{relative:e}={}){let{basename:n}=O.useContext(Yt),r=O.useContext(gn);Ee(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...va(t||".",{relative:e})},o=Ur();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:xn([n,s.pathname])),ea(s)}function rk(t,e={}){let n=O.useContext(Ow);Ee(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$w("useViewTransitionState"),i=va(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Fn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Fn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vu(i.pathname,o)!=null||vu(i.pathname,s)!=null}new TextEncoder;const ik=()=>{};var ov={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[f],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new ok;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ak=function(t){const e=Bw(t);return Hw.encodeByteArray(e,!0)},_u=function(t){return ak(t).replace(/\./g,"")},Ww=function(t){try{return Hw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=()=>lk().__FIREBASE_DEFAULTS__,ck=()=>{if(typeof process>"u"||typeof ov>"u")return;const t=ov.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return ik()||uk()||ck()||hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qw=t=>{var e,n;return(n=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fk=t=>{const e=qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kw=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},Gw=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function gk(){var t;const e=(t=hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _k(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ek(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wk(){return!gk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tk(){try{return typeof indexedDB=="object"}catch{return!1}}function Ik(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sk,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_a.prototype.create)}}class _a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ak(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qn(i,l,r)}}function Ak(t,e){return t.replace(Pk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Pk=/\{\$([^}]+)}/g;function Ck(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(av(s)&&av(o)){if(!ci(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function av(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Rk(t,e){const n=new kk(t,e);return n.subscribe.bind(n)}class kk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dh),i.error===void 0&&(i.error=Dh),i.complete===void 0&&(i.complete=Dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ok(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nk(t){return t===Xr?void 0:t}function Ok(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Lk={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Vk=ie.INFO,Mk={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Fk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jp{constructor(e){this.name=e,this._logLevel=Vk,this._logHandler=Fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Uk=(t,e)=>e.some(n=>t instanceof n);let lv,uv;function jk(){return lv||(lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zk(){return uv||(uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qw=new WeakMap,Kf=new WeakMap,Yw=new WeakMap,Lh=new WeakMap,zp=new WeakMap;function $k(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qw.set(n,t)}).catch(()=>{}),zp.set(e,t),e}function Bk(t){if(Kf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kf.set(t,e)}let Gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hk(t){Gf=t(Gf)}function Wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vh(this),e,...n);return Yw.set(r,e.sort?e.sort():[e]),Er(r)}:zk().includes(t)?function(...e){return t.apply(Vh(this),e),Er(Qw.get(this))}:function(...e){return Er(t.apply(Vh(this),e))}}function qk(t){return typeof t=="function"?Wk(t):(t instanceof IDBTransaction&&Bk(t),Uk(t,jk())?new Proxy(t,Gf):t)}function Er(t){if(t instanceof IDBRequest)return $k(t);if(Lh.has(t))return Lh.get(t);const e=qk(t);return e!==t&&(Lh.set(t,e),zp.set(e,t)),e}const Vh=t=>zp.get(t);function Kk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Gk=["get","getKey","getAll","getAllKeys","count"],Qk=["put","add","delete","clear"],Mh=new Map;function cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mh.get(e))return Mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Mh.set(e,s),s}Hk(t=>({...t,get:(e,n,r)=>cv(e,n)||t.get(e,n,r),has:(e,n)=>!!cv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qf="@firebase/app",hv="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new jp("@firebase/app"),Jk="@firebase/app-compat",Zk="@firebase/analytics-compat",eb="@firebase/analytics",tb="@firebase/app-check-compat",nb="@firebase/app-check",rb="@firebase/auth",ib="@firebase/auth-compat",sb="@firebase/database",ob="@firebase/data-connect",ab="@firebase/database-compat",lb="@firebase/functions",ub="@firebase/functions-compat",cb="@firebase/installations",hb="@firebase/installations-compat",fb="@firebase/messaging",db="@firebase/messaging-compat",pb="@firebase/performance",mb="@firebase/performance-compat",gb="@firebase/remote-config",yb="@firebase/remote-config-compat",vb="@firebase/storage",_b="@firebase/storage-compat",Eb="@firebase/firestore",wb="@firebase/vertexai",Tb="@firebase/firestore-compat",Ib="firebase",Sb="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="[DEFAULT]",Ab={[Qf]:"fire-core",[Jk]:"fire-core-compat",[eb]:"fire-analytics",[Zk]:"fire-analytics-compat",[nb]:"fire-app-check",[tb]:"fire-app-check-compat",[rb]:"fire-auth",[ib]:"fire-auth-compat",[sb]:"fire-rtdb",[ob]:"fire-data-connect",[ab]:"fire-rtdb-compat",[lb]:"fire-fn",[ub]:"fire-fn-compat",[cb]:"fire-iid",[hb]:"fire-iid-compat",[fb]:"fire-fcm",[db]:"fire-fcm-compat",[pb]:"fire-perf",[mb]:"fire-perf-compat",[gb]:"fire-rc",[yb]:"fire-rc-compat",[vb]:"fire-gcs",[_b]:"fire-gcs-compat",[Eb]:"fire-fst",[Tb]:"fire-fst-compat",[wb]:"fire-vertex","fire-js":"fire-js",[Ib]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map,Pb=new Map,Xf=new Map;function fv(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(Xf.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Xf.set(e,t);for(const n of Eu.values())fv(n,t);for(const n of Pb.values())fv(n,t);return!0}function $p(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new _a("app","Firebase",Cb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=Sb;function Xw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=Kw()),!n)throw wr.create("no-options");const s=Eu.get(i);if(s){if(ci(n,s.options)&&ci(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new Dk(i);for(const u of Xf.values())o.addComponent(u);const l=new Rb(n,r,o);return Eu.set(i,l),l}function Jw(t=Yf){const e=Eu.get(t);if(!e&&t===Yf&&Kw())return Xw();if(!e)throw wr.create("no-app",{appName:t});return e}function Tr(t,e,n){var r;let i=(r=Ab[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}fs(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="firebase-heartbeat-database",bb=1,ta="firebase-heartbeat-store";let Fh=null;function Zw(){return Fh||(Fh=Kk(kb,bb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Fh}async function xb(t){try{const n=(await Zw()).transaction(ta),r=await n.objectStore(ta).get(eT(t));return await n.done,r}catch(e){if(e instanceof qn)Un.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function dv(t,e){try{const r=(await Zw()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,eT(t)),await r.done}catch(n){if(n instanceof qn)Un.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function eT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1024,Ob=30;class Db{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ob){const o=Mb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pv(),{heartbeatsToSend:r,unsentEntries:i}=Lb(this._heartbeatsCache.heartbeats),s=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function pv(){return new Date().toISOString().substring(0,10)}function Lb(t,e=Nb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tk()?Ik().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mv(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}function Mb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){fs(new hi("platform-logger",e=>new Yk(e),"PRIVATE")),fs(new hi("heartbeat",e=>new Db(e),"PRIVATE")),Tr(Qf,hv,t),Tr(Qf,hv,"esm2017"),Tr("fire-js","")}Fb("");var Ub="firebase",jb="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tr(Ub,jb,"app");const zb={apiKey:"AIzaSyDmsRm7rVhTyzKvfP4I_HUMtfxjFE5RmPo",authDomain:"gim-login.firebaseapp.com",projectId:"gim-login",storageBucket:"gim-login.firebasestorage.app",messagingSenderId:"481175951860",appId:"1:481175951860:web:54bc68047deb8b5eb101a1"},Xt=Xw(zb);function Bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=tT,nT=new _a("auth","Firebase",tT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new jp("@firebase/auth");function Bb(t,...e){wu.logLevel<=ie.WARN&&wu.warn(`Auth (${Rs}): ${t}`,...e)}function Vl(t,...e){wu.logLevel<=ie.ERROR&&wu.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Hp(t,...e)}function un(t,...e){return Hp(t,...e)}function rT(t,e,n){const r=Object.assign(Object.assign({},$b()),{[e]:n});return new _a("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return rT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nT.create(t,...e)}function Q(t,e,...n){if(!t)throw Hp(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vl(e),new Error(e)}function jn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hb(){return gv()==="http:"||gv()==="https:"}function gv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hb()||vk()||"connection"in navigator)?navigator.onLine:!0}function qb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=mk()||_k()}get(){return Wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qb=new wa(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zr(t,e,n,r,i={}){return sT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return yk()||(c.referrerPolicy="no-referrer"),iT.fetch()(await oT(t,t.config.apiHost,n,l),c)})}async function sT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kb),e);try{const i=new Xb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rT(t,f,c);Qt(t,f)}}catch(i){if(i instanceof qn)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function Ta(t,e,n,r,i={}){const s=await zr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function oT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Wp(t.config,i):`${t.config.apiScheme}://${i}`;return Gb.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Yb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),Qb.get())})}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}function yv(t){return t!==void 0&&t.enterprise!==void 0}class Jb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Yb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zb(t,e){return zr(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e){return zr(t,"POST","/v1/accounts:delete",e)}async function Tu(t,e){return zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tx(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=qp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(Uh(i.auth_time)),issuedAtTime:ko(Uh(i.iat)),expirationTime:ko(Uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uh(t){return Number(t)*1e3}function qp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ww(n);return i?JSON.parse(i):(Vl("Failed to decode base64 JWT payload"),null)}catch(i){return Vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vv(t){const e=qp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&nx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await na(t,Tu(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aT(s.providerUserInfo):[],l=sx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function ix(t){const e=Ke(t);await Iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aT(t){return t.map(e=>{var{providerId:n}=e,r=Bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e){const n=await sT(t,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await oT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ax(t,e){return zr(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=vv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ox(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new es;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tx(this,e)}reload(){return ix(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await na(this,ex(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:D,isAnonymous:M,providerData:z,stsTokenManager:I}=n;Q(w&&I,e,"internal-error");const y=es.fromJSON(this.name,I);Q(typeof w=="string",e,"internal-error"),Jn(p,e.name),Jn(m,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof M=="boolean",e,"internal-error"),Jn(E,e.name),Jn(A,e.name),Jn(k,e.name),Jn(R,e.name),Jn(_,e.name),Jn(v,e.name);const T=new Bt({uid:w,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:M,photoURL:A,phoneNumber:E,tenantId:k,stsTokenManager:y,createdAt:_,lastLoginAt:v});return z&&Array.isArray(z)&&(T.providerData=z.map(S=>Object.assign({},S))),R&&(T._redirectEventId=R),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Iu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?aT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new es;l.updateFromIdToken(r);const u=new Bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;function kn(t){jn(t instanceof Function,"Expected a class definition");let e=_v.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_v.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lT.type="NONE";const Ev=lT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Tu(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(kn(Ev),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(Ev);const o=Ml(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await Tu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Bt._fromGetAccountInfoResponse(e,m,f)}else p=Bt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ts(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pT(e))return"Blackberry";if(mT(e))return"Webos";if(cT(e))return"Safari";if((e.includes("chrome/")||hT(e))&&!e.includes("edge/"))return"Chrome";if(dT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uT(t=st()){return/firefox\//i.test(t)}function cT(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hT(t=st()){return/crios\//i.test(t)}function fT(t=st()){return/iemobile/i.test(t)}function dT(t=st()){return/android/i.test(t)}function pT(t=st()){return/blackberry/i.test(t)}function mT(t=st()){return/webos/i.test(t)}function Kp(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lx(t=st()){var e;return Kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ux(){return Ek()&&document.documentMode===10}function gT(t=st()){return Kp(t)||dT(t)||mT(t)||pT(t)||/windows phone/i.test(t)||fT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e=[]){let n;switch(t){case"Browser":n=wv(st());break;case"Worker":n=`${wv(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(t,e={}){return zr(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=6;class dx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tv(this),this.idTokenSubscription=new Tv(this),this.beforeStateQueue=new cx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tu(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Nn(this));const n=e?Ke(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hx(this),n=new dx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ax(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wi(t){return Ke(t)}class Tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rk(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mx(t){fc=t}function vT(t){return fc.loadJS(t)}function gx(){return fc.recaptchaEnterpriseScript}function yx(){return fc.gapiScript}function vx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _x{constructor(){this.enterprise=new Ex}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ex{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wx="recaptcha-enterprise",_T="NO_RECAPTCHA";class Tx{constructor(e){this.type=wx,this.auth=wi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Zb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Jb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;yv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(_T)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _x().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&yv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gx();u.length!==0&&(u+=l),vT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Iv(t,e,n,r=!1,i=!1){const s=new Tx(t);let o;if(i)o=_T;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ed(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Iv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Iv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e){const n=$p(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ci(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function Sx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ax(t,e,n){const r=wi(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ET(e),{host:o,port:l}=Px(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(ci(c,r.config.emulator)&&ci(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Cx()}function ET(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Px(t){const e=ET(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sv(o)}}}function Sv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function Rx(t,e){return zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function xx(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Gp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,n,"signInWithPassword",kx);case"emailLink":return bx(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ed(e,r,"signUpPassword",Rx);case"emailLink":return xx(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="http://localhost";class fi extends Gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:Nx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ea(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dx(t){const e=ho(fo(t)).link,n=e?ho(fo(e)).deep_link_id:null,r=ho(fo(t)).deep_link_id;return(r?ho(fo(r)).link:null)||r||n||e||t}class Qp{constructor(e){var n,r,i,s,o,l;const u=ho(fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Ox((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Dx(e);try{return new Qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qp.parseLink(n);return Q(r,"argument-error"),ra._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends wT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ia{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ia{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ia{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(t,e){return Ta(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=Av(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Av(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Av(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Su(e,n,r,i)}}function TT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(t,s,e,r):s})}async function Vx(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await na(t,TT(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=qp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t,e,n=!1){if(Ot(t.app))return Promise.reject(Nn(t));const r="signIn",i=await TT(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Fx(t,e){return IT(wi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t){const e=wi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ux(t,e,n){if(Ot(t.app))return Promise.reject(Nn(t));const r=wi(t),o=await ed(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ST(t),u}),l=await di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function jx(t,e,n){return Ot(t.app)?Promise.reject(Nn(t)):Fx(Ke(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ST(t),r})}function zx(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function $x(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function Yp(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function AT(t){return Ke(t).signOut()}const Au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=1e3,Hx=10;class CT extends PT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ux()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CT.type="LOCAL";const Wx=CT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT extends PT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}RT.type="SESSION";const kT=RT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await qx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Xp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function Gx(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function Qx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xx(){return bT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="firebaseLocalStorageDb",Jx=1,Pu="firebaseLocalStorage",NT="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pc(t,e){return t.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function Zx(){const t=indexedDB.deleteDatabase(xT);return new Sa(t).toPromise()}function td(){const t=indexedDB.open(xT,Jx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pu,{keyPath:NT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pu)?e(r):(r.close(),await Zx(),e(await td()))})})}async function Pv(t,e,n){const r=pc(t,!0).put({[NT]:e,value:n});return new Sa(r).toPromise()}async function e2(t,e){const n=pc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function Cv(t,e){const n=pc(t,!0).delete(e);return new Sa(n).toPromise()}const t2=800,n2=3;class OT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>n2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(Xx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qx(),!this.activeServiceWorker)return;this.sender=new Kx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await td();return await Pv(e,Au,"1"),await Cv(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pc(i,!1).getAll();return new Sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OT.type="LOCAL";const r2=OT;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t,e){return e?kn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends Gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function s2(t){return IT(t.auth,new Jp(t),t.bypassAuthState)}function o2(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Mx(n,new Jp(t),t.bypassAuthState)}async function a2(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Vx(n,new Jp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s2;case"linkViaPopup":case"linkViaRedirect":return a2;case"reauthViaPopup":case"reauthViaRedirect":return o2;default:Qt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=new wa(2e3,1e4);class Wi extends DT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l2.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="pendingRedirect",Fl=new Map;class c2 extends DT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const r=await h2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h2(t,e){const n=p2(e),r=d2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function f2(t,e){Fl.set(t._key(),e)}function d2(t){return kn(t._redirectPersistence)}function p2(t){return Ml(u2,t.config.apiKey,t.name)}async function m2(t,e,n=!1){if(Ot(t.app))return Promise.reject(Nn(t));const r=wi(t),i=i2(r,e),o=await new c2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=10*60*1e3;class y2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rv(e))}saveEventToCache(e){this.cachedEventUids.add(Rv(e)),this.lastProcessedEventTime=Date.now()}}function Rv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,e={}){return zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w2=/^https?/;async function T2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _2(t);for(const n of e)try{if(I2(n))return}catch{}Qt(t,"unauthorized-domain")}function I2(t){const e=Jf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!w2.test(n))return!1;if(E2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new wa(3e4,6e4);function kv(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function A2(t){return new Promise((e,n)=>{var r,i,s;function o(){kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kv(),n(un(t,"network-request-failed"))},timeout:S2.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const l=vx("iframefcb");return cn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},vT(`${yx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function P2(t){return Ul=Ul||A2(t),Ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=new wa(5e3,15e3),R2="__/auth/iframe",k2="emulator/auth/iframe",b2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N2(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,k2):`https://${t.config.authDomain}/${R2}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=x2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ea(r).slice(1)}`}async function O2(t){const e=await P2(t),n=cn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:N2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=cn().setTimeout(()=>{s(o)},C2.get());function u(){cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L2=500,V2=600,M2="_blank",F2="http://localhost";class bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(t,e,n,r=L2,i=V2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},D2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=st().toLowerCase();n&&(l=hT(c)?M2:n),uT(c)&&(e=e||F2,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(lx(c)&&l!=="_self")return j2(e||"",l),new bv(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new bv(p)}function j2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="__/auth/handler",$2="emulator/auth/handler",B2=encodeURIComponent("fac");async function xv(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof wT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ck(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ia){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${B2}=${encodeURIComponent(u)}`:"";return`${H2(t)}?${Ea(l).slice(1)}${c}`}function H2({config:t}){return t.emulator?Wp(t,$2):`https://${t.authDomain}/${z2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="webStorageSupport";class W2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=m2,this._overrideRedirectResult=f2}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xv(e,n,r,Jf(),i);return U2(e,o,Xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xv(e,n,r,Jf(),i);return Gx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O2(e),r=new y2(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jh,{type:jh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jh];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gT()||cT()||Kp()}}const q2=W2;var Nv="@firebase/auth",Ov="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q2(t){fs(new hi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yT(t)},c=new px(r,i,s,u);return Sx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new hi("auth-internal",e=>{const n=wi(e.getProvider("auth").getImmediate());return(r=>new K2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(Nv,Ov,G2(t)),Tr(Nv,Ov,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=5*60,X2=Gw("authIdTokenMaxAge")||Y2;let Dv=null;const J2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>X2)return;const i=n==null?void 0:n.token;Dv!==i&&(Dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bs(t=Jw()){const e=$p(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ix(t,{popupRedirectResolver:q2,persistence:[r2,Wx,kT]}),r=Gw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=J2(s.toString());$x(n,o,()=>o(n.currentUser)),zx(n,l=>o(l))}}const i=qw("auth");return i&&Ax(n,`http://${i}`),n}function Z2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Z2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q2("Browser");var Lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,VT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(S,C,x){for(var P=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)P[bt-2]=arguments[bt];return y.prototype[C].apply(S,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,T){T||(T=0);var S=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)S[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;16>C;++C)S[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],C=I.g[2];var x=I.g[3],P=y+(x^T&(C^x))+S[0]+3614090360&4294967295;y=T+(P<<7&4294967295|P>>>25),P=x+(C^y&(T^C))+S[1]+3905402710&4294967295,x=y+(P<<12&4294967295|P>>>20),P=C+(T^x&(y^T))+S[2]+606105819&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(y^C&(x^y))+S[3]+3250441966&4294967295,T=C+(P<<22&4294967295|P>>>10),P=y+(x^T&(C^x))+S[4]+4118548399&4294967295,y=T+(P<<7&4294967295|P>>>25),P=x+(C^y&(T^C))+S[5]+1200080426&4294967295,x=y+(P<<12&4294967295|P>>>20),P=C+(T^x&(y^T))+S[6]+2821735955&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(y^C&(x^y))+S[7]+4249261313&4294967295,T=C+(P<<22&4294967295|P>>>10),P=y+(x^T&(C^x))+S[8]+1770035416&4294967295,y=T+(P<<7&4294967295|P>>>25),P=x+(C^y&(T^C))+S[9]+2336552879&4294967295,x=y+(P<<12&4294967295|P>>>20),P=C+(T^x&(y^T))+S[10]+4294925233&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(y^C&(x^y))+S[11]+2304563134&4294967295,T=C+(P<<22&4294967295|P>>>10),P=y+(x^T&(C^x))+S[12]+1804603682&4294967295,y=T+(P<<7&4294967295|P>>>25),P=x+(C^y&(T^C))+S[13]+4254626195&4294967295,x=y+(P<<12&4294967295|P>>>20),P=C+(T^x&(y^T))+S[14]+2792965006&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(y^C&(x^y))+S[15]+1236535329&4294967295,T=C+(P<<22&4294967295|P>>>10),P=y+(C^x&(T^C))+S[1]+4129170786&4294967295,y=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(y^T))+S[6]+3225465664&4294967295,x=y+(P<<9&4294967295|P>>>23),P=C+(y^T&(x^y))+S[11]+643717713&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^y&(C^x))+S[0]+3921069994&4294967295,T=C+(P<<20&4294967295|P>>>12),P=y+(C^x&(T^C))+S[5]+3593408605&4294967295,y=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(y^T))+S[10]+38016083&4294967295,x=y+(P<<9&4294967295|P>>>23),P=C+(y^T&(x^y))+S[15]+3634488961&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^y&(C^x))+S[4]+3889429448&4294967295,T=C+(P<<20&4294967295|P>>>12),P=y+(C^x&(T^C))+S[9]+568446438&4294967295,y=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(y^T))+S[14]+3275163606&4294967295,x=y+(P<<9&4294967295|P>>>23),P=C+(y^T&(x^y))+S[3]+4107603335&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^y&(C^x))+S[8]+1163531501&4294967295,T=C+(P<<20&4294967295|P>>>12),P=y+(C^x&(T^C))+S[13]+2850285829&4294967295,y=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(y^T))+S[2]+4243563512&4294967295,x=y+(P<<9&4294967295|P>>>23),P=C+(y^T&(x^y))+S[7]+1735328473&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^y&(C^x))+S[12]+2368359562&4294967295,T=C+(P<<20&4294967295|P>>>12),P=y+(T^C^x)+S[5]+4294588738&4294967295,y=T+(P<<4&4294967295|P>>>28),P=x+(y^T^C)+S[8]+2272392833&4294967295,x=y+(P<<11&4294967295|P>>>21),P=C+(x^y^T)+S[11]+1839030562&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^y)+S[14]+4259657740&4294967295,T=C+(P<<23&4294967295|P>>>9),P=y+(T^C^x)+S[1]+2763975236&4294967295,y=T+(P<<4&4294967295|P>>>28),P=x+(y^T^C)+S[4]+1272893353&4294967295,x=y+(P<<11&4294967295|P>>>21),P=C+(x^y^T)+S[7]+4139469664&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^y)+S[10]+3200236656&4294967295,T=C+(P<<23&4294967295|P>>>9),P=y+(T^C^x)+S[13]+681279174&4294967295,y=T+(P<<4&4294967295|P>>>28),P=x+(y^T^C)+S[0]+3936430074&4294967295,x=y+(P<<11&4294967295|P>>>21),P=C+(x^y^T)+S[3]+3572445317&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^y)+S[6]+76029189&4294967295,T=C+(P<<23&4294967295|P>>>9),P=y+(T^C^x)+S[9]+3654602809&4294967295,y=T+(P<<4&4294967295|P>>>28),P=x+(y^T^C)+S[12]+3873151461&4294967295,x=y+(P<<11&4294967295|P>>>21),P=C+(x^y^T)+S[15]+530742520&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^y)+S[2]+3299628645&4294967295,T=C+(P<<23&4294967295|P>>>9),P=y+(C^(T|~x))+S[0]+4096336452&4294967295,y=T+(P<<6&4294967295|P>>>26),P=x+(T^(y|~C))+S[7]+1126891415&4294967295,x=y+(P<<10&4294967295|P>>>22),P=C+(y^(x|~T))+S[14]+2878612391&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~y))+S[5]+4237533241&4294967295,T=C+(P<<21&4294967295|P>>>11),P=y+(C^(T|~x))+S[12]+1700485571&4294967295,y=T+(P<<6&4294967295|P>>>26),P=x+(T^(y|~C))+S[3]+2399980690&4294967295,x=y+(P<<10&4294967295|P>>>22),P=C+(y^(x|~T))+S[10]+4293915773&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~y))+S[1]+2240044497&4294967295,T=C+(P<<21&4294967295|P>>>11),P=y+(C^(T|~x))+S[8]+1873313359&4294967295,y=T+(P<<6&4294967295|P>>>26),P=x+(T^(y|~C))+S[15]+4264355552&4294967295,x=y+(P<<10&4294967295|P>>>22),P=C+(y^(x|~T))+S[6]+2734768916&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~y))+S[13]+1309151649&4294967295,T=C+(P<<21&4294967295|P>>>11),P=y+(C^(T|~x))+S[4]+4149444226&4294967295,y=T+(P<<6&4294967295|P>>>26),P=x+(T^(y|~C))+S[11]+3174756917&4294967295,x=y+(P<<10&4294967295|P>>>22),P=C+(y^(x|~T))+S[2]+718787259&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~y))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(C+(P<<21&4294967295|P>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,S=this.B,C=this.h,x=0;x<y;){if(C==0)for(;x<=T;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(S[C++]=I.charCodeAt(x++),C==this.blockSize){i(this,S),C=0;break}}else for(;x<y;)if(S[C++]=I[x++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var S=0;32>S;S+=8)I[T++]=this.g[y]>>>S&255;return I};function s(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],S=!0,C=I.length-1;0<=C;C--){var x=I[C]|0;S&&x==y||(T[C]=x,S=!1)}this.g=T}var l={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return R(c(-I));for(var y=[],T=1,S=0;I>=T;S++)y[S]=I/T|0,T*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return R(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),S=p,C=0;C<I.length;C+=8){var x=Math.min(8,I.length-C),P=parseInt(I.substring(C,C+x),y);8>x?(x=c(Math.pow(y,x)),S=S.j(x).add(c(P))):(S=S.j(T),S=S.add(c(P)))}return S}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var S=this.i(T);I+=(0<=S?S:4294967296+S)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(k(this))return"-"+R(this).toString(I);for(var y=c(Math.pow(I,6)),T=this,S="";;){var C=D(T,y).g;T=_(T,C.j(y));var x=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=C,A(T))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=_(this,I),k(I)?-1:A(I)?0:1};function R(I){for(var y=I.g.length,T=[],S=0;S<y;S++)T[S]=~I.g[S];return new o(T,~I.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],S=0,C=0;C<=y;C++){var x=S+(this.i(C)&65535)+(I.i(C)&65535),P=(x>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);S=P>>>16,x&=65535,P&=65535,T[C]=P<<16|x}return new o(T,T[T.length-1]&-2147483648?-1:0)};function _(I,y){return I.add(R(y))}t.j=function(I){if(A(this)||A(I))return p;if(k(this))return k(I)?R(this).j(R(I)):R(R(this).j(I));if(k(I))return R(this.j(R(I)));if(0>this.l(E)&&0>I.l(E))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],S=0;S<2*y;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<I.g.length;C++){var x=this.i(S)>>>16,P=this.i(S)&65535,bt=I.i(C)>>>16,Hr=I.i(C)&65535;T[2*S+2*C]+=P*Hr,v(T,2*S+2*C),T[2*S+2*C+1]+=x*Hr,v(T,2*S+2*C+1),T[2*S+2*C+1]+=P*bt,v(T,2*S+2*C+1),T[2*S+2*C+2]+=x*bt,v(T,2*S+2*C+2)}for(S=0;S<y;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=y;S<2*y;S++)T[S]=0;return new o(T,0)};function v(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function w(I,y){this.g=I,this.h=y}function D(I,y){if(A(y))throw Error("division by zero");if(A(I))return new w(p,p);if(k(I))return y=D(R(I),y),new w(R(y.g),R(y.h));if(k(y))return y=D(I,R(y)),new w(R(y.g),y.h);if(30<I.g.length){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=y;0>=S.l(I);)T=M(T),S=M(S);var C=z(T,1),x=z(S,1);for(S=z(S,2),T=z(T,2);!A(S);){var P=x.add(S);0>=P.l(I)&&(C=C.add(T),x=P),S=z(S,1),T=z(T,1)}return y=_(I,C.j(y)),new w(C,y)}for(C=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=c(T),P=x.j(y);k(P)||0<P.l(I);)T-=S,x=c(T),P=x.j(y);A(x)&&(x=m),C=C.add(x),I=_(I,P)}return new w(C,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],S=0;S<y;S++)T[S]=this.i(S)&I.i(S);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],S=0;S<y;S++)T[S]=this.i(S)|I.i(S);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],S=0;S<y;S++)T[S]=this.i(S)^I.i(S);return new o(T,this.h^I.h)};function M(I){for(var y=I.g.length+1,T=[],S=0;S<y;S++)T[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(T,I.h)}function z(I,y){var T=y>>5;y%=32;for(var S=I.g.length-T,C=[],x=0;x<S;x++)C[x]=0<y?I.i(x+T)>>>y|I.i(x+T+1)<<32-y:I.i(x+T);return new o(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,VT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ir=o}).apply(typeof Lv<"u"?Lv:typeof self<"u"?self:typeof window<"u"?window:{});var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MT,po,FT,jl,nd,UT,jT,zT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ml=="object"&&ml];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break e;d=d[b]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,b={next:function(){if(!g&&d<a.length){var L=d++;return{value:h(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,b,L){for(var $=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)$[fe-2]=arguments[fe];return h.prototype[b].apply(g,$)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function R(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const b=a.length||0,L=g.length||0;a.length=b+L;for(let $=0;$<L;$++)a[b+$]=g[$]}else a.push(g)}}class _{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function z(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let L=0;L<T.length;L++)d=T[L],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function P(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class bt{constructor(){this.h=this.g=null}add(h,d){const g=Hr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Hr=new _(()=>new Ms,a=>a.reset());class Ms{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let yn,B=!1,X=new bt,ee=()=>{const a=l.Promise.resolve(void 0);yn=()=>{a.then(we)}};var we=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(d){x(d)}var h=Hr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function _n(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:En[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_n.aa.h.call(this)}}A(_n,Re);var En={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),SS=0;function AS(a,h,d,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=b,this.key=++SS,this.da=this.fa=!1}function Na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Oa(a){this.src=a,this.g={},this.h=0}Oa.prototype.add=function(a,h,d,g,b){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var $=Fc(a,h,g,b);return-1<$?(h=a[$],d||(h.fa=!1)):(h=new AS(h,this.src,L,!!g,b),h.fa=d,a.push(h)),h};function Mc(a,h){var d=h.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,h,void 0),L;(L=0<=b)&&Array.prototype.splice.call(g,b,1),L&&(Na(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Fc(a,h,d,g){for(var b=0;b<a.length;++b){var L=a[b];if(!L.da&&L.listener==h&&L.capture==!!d&&L.ha==g)return b}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),jc={};function Hm(a,h,d,g,b){if(Array.isArray(h)){for(var L=0;L<h.length;L++)Hm(a,h[L],d,g,b);return null}return d=Km(d),a&&a[wn]?a.K(h,d,c(g)?!!g.capture:!1,b):PS(a,h,d,!1,g,b)}function PS(a,h,d,g,b,L){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,fe=$c(a);if(fe||(a[Uc]=fe=new Oa(a)),d=fe.add(h,d,g,$,L),d.proxy)return d;if(g=CS(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)vn||(b=$),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(qm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function CS(){function a(d){return h.call(a.src,a.listener,d)}const h=RS;return a}function Wm(a,h,d,g,b){if(Array.isArray(h))for(var L=0;L<h.length;L++)Wm(a,h[L],d,g,b);else g=c(g)?!!g.capture:!!g,d=Km(d),a&&a[wn]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],d=Fc(L,d,g,b),-1<d&&(Na(L[d]),Array.prototype.splice.call(L,d,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=$c(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Fc(h,d,g,b)),(d=-1<a?h[a]:null)&&zc(d))}function zc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])Mc(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(qm(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=$c(h))?(Mc(d,a),d.h==0&&(d.src=null,h[Uc]=null)):Na(a)}}}function qm(a){return a in jc?jc[a]:jc[a]="on"+a}function RS(a,h){if(a.da)a=!0;else{h=new _n(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&zc(a),a=d.call(g,h)}return a}function $c(a){return a=a[Uc],a instanceof Oa?a:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Km(a){return typeof a=="function"?a:(a[Bc]||(a[Bc]=function(h){return a.handleEvent(h)}),a[Bc])}function Qe(){he.call(this),this.i=new Oa(this),this.M=this,this.F=null}A(Qe,he),Qe.prototype[wn]=!0,Qe.prototype.removeEventListener=function(a,h,d,g){Wm(this,a,h,d,g)};function at(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var b=h;h=new Re(g,a),S(h,b)}if(b=!0,d)for(var L=d.length-1;0<=L;L--){var $=h.g=d[L];b=Da($,g,!0,h)&&b}if($=h.g=a,b=Da($,g,!0,h)&&b,b=Da($,g,!1,h)&&b,d)for(L=0;L<d.length;L++)$=h.g=d[L],b=Da($,g,!1,h)&&b}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Na(d[g]);delete a.g[h],a.h--}}this.F=null},Qe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Qe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Da(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,L=0;L<h.length;++L){var $=h[L];if($&&!$.da&&$.capture==d){var fe=$.listener,ze=$.ha||$.src;$.fa&&Mc(a.i,$),b=fe.call(ze,g)!==!1&&b}}return b&&!g.defaultPrevented}function Gm(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Qm(a){a.g=Gm(()=>{a.g=null,a.i&&(a.i=!1,Qm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class kS extends he{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Qm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(a){he.call(this),this.h=a,this.g={}}A(Fs,he);var Ym=[];function Xm(a){z(a.g,function(h,d){this.g.hasOwnProperty(d)&&zc(h)},a),a.g={}}Fs.prototype.N=function(){Fs.aa.N.call(this),Xm(this)},Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hc=l.JSON.stringify,bS=l.JSON.parse,xS=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wc(){}Wc.prototype.h=null;function Jm(a){return a.h||(a.h=a.i())}function Zm(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qc(){Re.call(this,"d")}A(qc,Re);function Kc(){Re.call(this,"c")}A(Kc,Re);var Wr={},eg=null;function La(){return eg=eg||new Qe}Wr.La="serverreachability";function tg(a){Re.call(this,Wr.La,a)}A(tg,Re);function js(a){const h=La();at(h,new tg(h))}Wr.STAT_EVENT="statevent";function ng(a,h){Re.call(this,Wr.STAT_EVENT,a),this.stat=h}A(ng,Re);function lt(a){const h=La();at(h,new ng(h,a))}Wr.Ma="timingevent";function rg(a,h){Re.call(this,Wr.Ma,a),this.size=h}A(rg,Re);function zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function NS(a,h,d,g,b,L){a.info(function(){if(a.g)if(L)for(var $="",fe=L.split("&"),ze=0;ze<fe.length;ze++){var le=fe[ze].split("=");if(1<le.length){var Ye=le[0];le=le[1];var Xe=Ye.split("_");$=2<=Xe.length&&Xe[1]=="type"?$+(Ye+"="+le+"&"):$+(Ye+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+d+`
`+$})}function OS(a,h,d,g,b,L,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+d+`
`+L+" "+$})}function Si(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+LS(a,d)+(g?" "+g:"")})}function DS(a,h){a.info(function(){return"TIMEOUT: "+h})}$s.prototype.info=function(){};function LS(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return Hc(d)}catch{return h}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ig={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gc;function Ma(){}A(Ma,Wc),Ma.prototype.g=function(){return new XMLHttpRequest},Ma.prototype.i=function(){return{}},Gc=new Ma;function Gn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sg}function sg(){this.i=null,this.g="",this.h=!1}var og={},Qc={};function Yc(a,h,d){a.L=1,a.v=za(Tn(h)),a.m=d,a.P=!0,ag(a,null)}function ag(a,h){a.F=Date.now(),Fa(a),a.A=Tn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),wg(d.i,"t",g),a.C=0,d=a.j.J,a.h=new sg,a.g=Ug(a.j,d?h:null,!a.m),0<a.O&&(a.M=new kS(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ym[0]=b.toString()),b=Ym);for(var L=0;L<b.length;L++){var $=Hm(d,b[L],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),js(),NS(a.i,a.u,a.A,a.l,a.R,a.m)}Gn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},Gn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=In(this.g);var h=this.g.Ba();const Ci=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Rg(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=Ci?js(3):js(2)),Xc(this);var d=this.g.Z();this.X=d;t:if(lg(this)){var g=Rg(this.g);a="";var b=g.length,L=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),Bs(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(L&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,OS(this.i,this.u,this.A,this.l,this.R,Xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,ze=this.g;if((fe=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(fe)){var le=fe;break t}}le=null}if(d=le)Si(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jc(this,d);else{this.o=!1,this.s=3,lt(12),qr(this),Bs(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<$.length;)if(Ft=VS(this,$),Ft==Qc){Xe==4&&(this.s=4,lt(14),d=!1),Si(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==og){this.s=4,lt(15),Si(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else Si(this.i,this.l,Ft,null),Jc(this,Ft);if(lg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||$.length!=0||this.h.h||(this.s=1,lt(16),d=!1),this.o=this.o&&d,!d)Si(this.i,this.l,$,"[Invalid Chunked Response]"),qr(this),Bs(this);else if(0<$.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),ih(Ye),Ye.M=!0,lt(11))}}else Si(this.i,this.l,$,null),Jc(this,$);Xe==4&&qr(this),this.o&&!this.J&&(Xe==4?Lg(this.j,this):(this.o=!1,Fa(this)))}else ZS(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),qr(this),Bs(this)}}}catch{}finally{}};function lg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function VS(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Qc:(d=Number(h.substring(d,g)),isNaN(d)?og:(g+=1,g+d>h.length?Qc:(h=h.slice(g,g+d),a.C=g+d,h)))}Gn.prototype.cancel=function(){this.J=!0,qr(this)};function Fa(a){a.S=Date.now()+a.I,ug(a,a.I)}function ug(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(m(a.ba,a),h)}function Xc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Gn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(DS(this.i,this.A),this.L!=2&&(js(),lt(17)),qr(this),this.s=2,Bs(this)):ug(this,this.S-a)};function Bs(a){a.j.G==0||a.J||Lg(a.j,a)}function qr(a){Xc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Xm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Jc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Zc(d.h,a))){if(!a.K&&Zc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ka(d),Wa(d);else break e;rh(d),lt(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=zs(m(d.Za,d),6e3));if(1>=fg(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Gr(d,11)}else if((a.K||d.g==a)&&Ka(d),!v(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let le=b[h];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Ye=le[3];Ye!=null&&(d.la=Ye,d.j.info("VER="+d.la));const Xe=le[4];Xe!=null&&(d.Aa=Xe,d.j.info("SVER="+d.Aa));const Ci=le[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(g=1.5*Ci,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ft=a.g;if(Ft){const Qa=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var L=g.h;L.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(eh(L,L.h),L.h=null))}if(g.D){const sh=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;sh&&(g.ya=sh,pe(g.I,g.D,sh))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var $=a;if(g.qa=Fg(g,g.J?g.ia:null,g.W),$.K){dg(g.h,$);var fe=$,ze=g.L;ze&&(fe.I=ze),fe.B&&(Xc(fe),Fa(fe)),g.g=$}else Og(g);0<d.i.length&&qa(d)}else le[0]!="stop"&&le[0]!="close"||Gr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Gr(d,7):nh(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}js(4)}catch{}}var MS=class{constructor(a,h){this.g=a,this.map=h}};function cg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fg(a){return a.h?1:a.g?a.g.size:0}function Zc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function eh(a,h){a.g?a.g.add(h):a.h=h}function dg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}cg.prototype.cancel=function(){if(this.i=pg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function FS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function US(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function mg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=US(a),g=FS(a),b=g.length,L=0;L<b;L++)h.call(void 0,g[L],d&&d[L],a)}var gg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jS(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),b=null;if(0<=g){var L=a[d].substring(0,g);b=a[d].substring(g+1)}else L=a[d];h(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Kr){this.h=a.h,Ua(this,a.j),this.o=a.o,this.g=a.g,ja(this,a.s),this.l=a.l;var h=a.i,d=new qs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),yg(this,d),this.m=a.m}else a&&(h=String(a).match(gg))?(this.h=!1,Ua(this,h[1]||"",!0),this.o=Hs(h[2]||""),this.g=Hs(h[3]||"",!0),ja(this,h[4]),this.l=Hs(h[5]||"",!0),yg(this,h[6]||"",!0),this.m=Hs(h[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ws(h,vg,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ws(h,vg,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ws(d,d.charAt(0)=="/"?BS:$S,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ws(d,WS)),a.join("")};function Tn(a){return new Kr(a)}function Ua(a,h,d){a.j=d?Hs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ja(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yg(a,h,d){h instanceof qs?(a.i=h,qS(a.i,a.h)):(d||(h=Ws(h,HS)),a.i=new qs(h,a.h))}function pe(a,h,d){a.i.set(h,d)}function za(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,zS),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vg=/[#\/\?@]/g,$S=/[#\?:]/g,BS=/[#\?]/g,HS=/[#\?@]/g,WS=/#/g;function qs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Qn(a){a.g||(a.g=new Map,a.h=0,a.i&&jS(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=qs.prototype,t.add=function(a,h){Qn(this),this.i=null,a=Ai(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function _g(a,h){Qn(a),h=Ai(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Eg(a,h){return Qn(a),h=Ai(a,h),a.g.has(h)}t.forEach=function(a,h){Qn(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){Qn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const b=a[g];for(let L=0;L<b.length;L++)d.push(h[g])}return d},t.V=function(a){Qn(this);let h=[];if(typeof a=="string")Eg(this,a)&&(h=h.concat(this.g.get(Ai(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Qn(this),this.i=null,a=Ai(this,a),Eg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wg(a,h,d){_g(a,h),0<d.length&&(a.i=null,a.g.set(Ai(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const L=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var b=L;$[g]!==""&&(b+="="+encodeURIComponent(String($[g]))),a.push(b)}}return this.i=a.join("&")};function Ai(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qS(a,h){h&&!a.j&&(Qn(a),a.i=null,a.g.forEach(function(d,g){var b=g.toLowerCase();g!=b&&(_g(this,g),wg(this,b,d))},a)),a.j=h}function KS(a,h){const d=new $s;if(l.Image){const g=new Image;g.onload=E(Yn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=E(Yn,d,"TestLoadImage: error",!1,h,g),g.onabort=E(Yn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(Yn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function GS(a,h){const d=new $s,g=new AbortController,b=setTimeout(()=>{g.abort(),Yn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(b),L.ok?Yn(d,"TestPingServer: ok",!0,h):Yn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Yn(d,"TestPingServer: error",!1,h)})}function Yn(a,h,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function QS(){this.g=new xS}function YS(a,h,d){const g=d||"";try{mg(a,function(b,L){let $=b;c(b)&&($=Hc(b)),h.push(g+L+"="+encodeURIComponent($))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function $a(a){this.l=a.Ub||null,this.j=a.eb||!1}A($a,Wc),$a.prototype.g=function(){return new Ba(this.l,this.j)},$a.prototype.i=function(a){return function(){return a}}({});function Ba(a,h){Qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ba,Qe),t=Ba.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ks(this):Gs(this),this.readyState==3&&Tg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ks(this))},t.Qa=function(a){this.g&&(this.response=a,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ig(a){let h="";return z(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function th(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ig(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,h,d))}function Pe(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pe,Qe);var XS=/^https?$/i,JS=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gc.g(),this.v=this.o?Jm(this.o):Jm(Gc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Sg(this,L);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())d.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(L=>L.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(JS,h,void 0))||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of d)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cg(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Sg(this,L)}};function Sg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ag(a),Ha(a)}function Ag(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),Ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ha(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Pg(this):this.bb())},t.bb=function(){Pg(this)};function Pg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Gm(a.Ea,0,a);else if(at(a,"readystatechange"),In(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=$===0){var b=String(a.D).match(gg)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!XS.test(b?b.toLowerCase():"")}d=g}if(d)at(a,"complete"),at(a,"success");else{a.m=6;try{var L=2<In(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Ag(a)}}finally{Ha(a)}}}}function Ha(a,h){if(a.g){Cg(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{d.onreadystatechange=g}catch{}}}function Cg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),bS(h)}};function Rg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ZS(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=C(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const L=h[b]||[];h[b]=L,L.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function kg(a){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new cg(a&&a.concurrentRequestLimit),this.Da=new QS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kg.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){lt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Fg(this,null,this.W),qa(this)};function nh(a){if(bg(a),a.G==3){var h=a.U++,d=Tn(a.I);if(pe(d,"SID",a.K),pe(d,"RID",h),pe(d,"TYPE","terminate"),Ys(a,d),h=new Gn(a,a.j,h),h.L=2,h.v=za(Tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Ug(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fa(h)}Mg(a)}function Wa(a){a.g&&(ih(a),a.g.cancel(),a.g=null)}function bg(a){Wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qa(a){if(!hg(a.h)&&!a.s){a.s=!0;var h=a.Ga;yn||ee(),B||(yn(),B=!0),X.add(h,a),a.B=0}}function eA(a,h){return fg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(m(a.Ga,a,h),Vg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Gn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Ng(this,b,h),d=Tn(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Ys(this,d),L&&(this.O?h="headers="+encodeURIComponent(String(Ig(L)))+"&"+h:this.m&&th(d,this.m,L)),eh(this.h,b),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",h),pe(d,"SID","null"),b.T=!0,Yc(b,d,null)):Yc(b,d,h),this.G=2}}else this.G==3&&(a?xg(this,a):this.i.length==0||hg(this.h)||xg(this))};function xg(a,h){var d;h?d=h.l:d=a.U++;const g=Tn(a.I);pe(g,"SID",a.K),pe(g,"RID",d),pe(g,"AID",a.T),Ys(a,g),a.m&&a.o&&th(g,a.m,a.o),d=new Gn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ng(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),eh(a.h,d),Yc(d,g,h)}function Ys(a,h){a.H&&z(a.H,function(d,g){pe(h,g,d)}),a.l&&mg({},function(d,g){pe(h,g,d)})}function Ng(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let L=-1;for(;;){const $=["count="+d];L==-1?0<d?(L=b[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let fe=!0;for(let ze=0;ze<d;ze++){let le=b[ze].g;const Ye=b[ze].map;if(le-=L,0>le)L=Math.max(0,b[ze].g-100),fe=!1;else try{YS(Ye,$,"req"+le+"_")}catch{g&&g(Ye)}}if(fe){g=$.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Og(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;yn||ee(),B||(yn(),B=!0),X.add(h,a),a.v=0}}function rh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(m(a.Fa,a),Vg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Dg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Wa(this),Dg(this))};function ih(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Dg(a){a.g=new Gn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),Ys(a,h),a.m&&a.o&&th(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=za(Tn(h)),d.m=null,d.P=!0,ag(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Wa(this),rh(this),lt(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lg(a,h){var d=null;if(a.g==h){Ka(a),ih(a),a.g=null;var g=2}else if(Zc(a.h,h))d=h.D,dg(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=La(),at(g,new rg(g,d)),qa(a)}else Og(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&eA(a,h)||g==2&&rh(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function Vg(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const b=!g;g=new Kr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ua(g,"https"),za(g),b?KS(g.toString(),d):GS(g.toString(),d)}else lt(2);a.G=0,a.l&&a.l.sa(h),Mg(a),bg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Mg(a){if(a.G=0,a.ka=[],a.l){const h=pg(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Fg(a,h,d){var g=d instanceof Kr?Tn(d):new Kr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ja(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var L=new Kr(null);g&&Ua(L,g),h&&(L.g=h),b&&ja(L,b),d&&(L.l=d),g=L}return d=a.D,h=a.ya,d&&h&&pe(g,d,h),pe(g,"VER",a.la),Ys(a,g),g}function Ug(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Pe(new $a({eb:d})):new Pe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jg(){}t=jg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ga(){}Ga.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Qe.call(this),this.g=new kg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Pi(this)}A(wt,Qe),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){nh(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Hc(a),a=d);h.i.push(new MS(h.Ya++,a)),h.G==3&&qa(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,nh(this.g),delete this.g,wt.aa.N.call(this)};function zg(a){qc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(zg,qc);function $g(){Kc.call(this),this.status=1}A($g,Kc);function Pi(a){this.g=a}A(Pi,jg),Pi.prototype.ua=function(){at(this.g,"a")},Pi.prototype.ta=function(a){at(this.g,new zg(a))},Pi.prototype.sa=function(a){at(this.g,new $g)},Pi.prototype.ra=function(){at(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,zT=function(){return new Ga},jT=function(){return La()},UT=Wr,nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,jl=Va,ig.COMPLETE="complete",FT=ig,Zm.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,po=Zm,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,MT=Pe}).apply(typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{});const Vv="@firebase/firestore",Mv="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new jp("@firebase/firestore");function ki(){return pi.logLevel}function H(t,...e){if(pi.logLevel<=ie.DEBUG){const n=e.map(Zp);pi.debug(`Firestore (${xs}): ${t}`,...n)}}function zn(t,...e){if(pi.logLevel<=ie.ERROR){const n=e.map(Zp);pi.error(`Firestore (${xs}): ${t}`,...n)}}function ds(t,...e){if(pi.logLevel<=ie.WARN){const n=e.map(Zp);pi.warn(`Firestore (${xs}): ${t}`,...n)}}function Zp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function ue(t,e){t||Y()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class tN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nN{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new $T(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new tt(e)}}class rN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class iN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new rN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sN{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ot(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Fv(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new Fv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=oN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function rd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return te(r,i);{const s=BT(),o=aN(s.encode(Uv(t,n)),s.encode(Uv(e,n)));return o!==0?o:te(r,i)}}n+=r>65535?2:1}return te(t.length,e.length)}function Uv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function aN(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return te(t[n],e[n]);return te(t.length,e.length)}function ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=-62135596800,zv=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zv);return new Ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jv)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zv}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-jv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Ve(0,0))}static max(){return new J(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=en.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),i=en.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?en.extractNumericId(e).compare(en.extractNumericId(n)):rd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class _e extends en{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const lN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends en{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return lN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$v}static keyField(){return new He([$v])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(_e.fromString(e))}static fromName(e){return new G(_e.fromString(e).popFirst(5))}static empty(){return new G(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new _e(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=-1;function uN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Cr(i,G.empty(),e)}function cN(t){return new Cr(t.readTime,t.key,ia)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(J.min(),G.empty(),ia)}static max(){return new Cr(J.max(),G.empty(),ia)}}function hN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==fN)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function pN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Os(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}mc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=-1;function gc(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function mN(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="";function gN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bv(e)),e=yN(t.get(n),e);return Bv(e)}function yN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case WT:n+="";break;default:n+=s}}return n}function Bv(t){return t+WT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wv(this.data.getIterator())}getIteratorFrom(e){return new Wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new KT("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const vN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=vN.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="server_timestamp",QT="__type__",YT="__previous_value__",XT="__local_write_time__";function tm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[QT])===null||n===void 0?void 0:n.stringValue)===GT}function yc(t){const e=t.mapValue.fields[YT];return tm(e)?yc(e):e}function sa(t){const e=Rr(t.mapValue.fields[XT].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}const Ru="(default)";class oa{constructor(e,n){this.projectId=e,this.database=n||Ru}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database===Ru}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="__type__",EN="__max__",yl={mapValue:{}},ZT="__vector__",ku="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tm(t)?4:TN(t)?9007199254740991:wN(t)?10:11:Y()}function dn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),l=Rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return kr(i.bytesValue).isEqual(kr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?Cu(o)===Cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hv(o)!==Hv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function aa(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qv(t.timestampValue,e.timestampValue);case 4:return qv(sa(t),sa(e));case 5:return rd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=kr(s),u=kr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=te(l[c],u[c]);if(f!==0)return f}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(ke(s.latitude),ke(o.latitude));return l!==0?l:te(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},E=(l=p[ku])===null||l===void 0?void 0:l.arrayValue,A=(u=m[ku])===null||u===void 0?void 0:u.arrayValue,k=te(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Kv(E,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===yl.mapValue&&o===yl.mapValue)return 0;if(s===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=rd(u[p],f[p]);if(m!==0)return m;const E=ms(l[u[p]],c[f[p]]);if(E!==0)return E}return te(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function qv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Rr(t),r=Rr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Kv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ms(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function gs(t){return id(t)}function id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${id(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function zl(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(t);return e?16+zl(e):16;case 5:return 2*t.stringValue.length;case 6:return kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+zl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return $r(r.fields,(s,o)=>{i+=s.length+zl(o)}),i}(t.mapValue);default:throw Y()}}function sd(t){return!!t&&"integerValue"in t}function nm(t){return!!t&&"arrayValue"in t}function Gv(t){return!!t&&"nullValue"in t}function Qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function wN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[JT])===null||n===void 0?void 0:n.stringValue)===ZT}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===EN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=bo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(bo(this.value))}}function eI(t){const e=[];return $r(t.fields,(n,r)=>{const i=new He([n]);if($l(r)){const s=eI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.position=e,this.inclusive=n}}function Yv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n="asc"){this.field=e,this.dir=n}}function IN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{}class De extends tI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AN(e,n,r):n==="array-contains"?new RN(e,r):n==="in"?new kN(e,r):n==="not-in"?new bN(e,r):n==="array-contains-any"?new xN(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PN(e,r):new CN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends tI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new pn(e,n)}matches(e){return nI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function nI(t){return t.op==="and"}function rI(t){return SN(t)&&nI(t)}function SN(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function od(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(rI(t))return t.filters.map(e=>od(e)).join(",");{const e=t.filters.map(n=>od(n)).join(",");return`${t.op}(${e})`}}function iI(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&iI(o,i.filters[l]),!0):!1}(t,e):void Y()}function sI(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(sI).join(" ,")+"}"}(t):"Filter"}class AN extends De{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class PN extends De{constructor(e,n){super(e,"in",n),this.keys=oI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CN extends De{constructor(e,n){super(e,"not-in",n),this.keys=oI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class RN extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nm(n)&&aa(n.arrayValue,this.value)}}class kN extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class bN extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class xN extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.le=null}}function Jv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new NN(t,e,n,r,i,s,o)}function rm(t){const e=Z(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.le=n}return e.le}function im(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xv(t.startAt,e.startAt)&&Xv(t.endAt,e.endAt)}function ad(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ON(t,e,n,r,i,s,o,l){return new vc(t,e,n,r,i,s,o,l)}function sm(t){return new vc(t)}function Zv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DN(t){return t.collectionGroup!==null}function xo(t){const e=Z(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new xu(s,r))}),n.has(He.keyField().canonicalString())||e.he.push(new xu(He.keyField(),r))}return e.he}function hn(t){const e=Z(t);return e.Pe||(e.Pe=LN(e,xo(t))),e.Pe}function LN(t,e){if(t.limitType==="F")return Jv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xu(i.field,s)});const n=t.endAt?new bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bu(t.startAt.position,t.startAt.inclusive):null;return Jv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ld(t,e,n){return new vc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _c(t,e){return im(hn(t),hn(e))&&t.limitType===e.limitType}function aI(t){return`${rm(hn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sI(i)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>gs(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Ec(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Yv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xo(r),i)||r.endAt&&!function(o,l,u){const c=Yv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xo(r),i))}(t,e)}function VN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lI(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=MN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MN(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ms(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Ae(G.comparator);function $n(){return FN}const uI=new Ae(G.comparator);function mo(...t){let e=uI;for(const n of t)e=e.insert(n.key,n);return e}function cI(t){let e=uI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ti(){return No()}function hI(){return No()}function No(){return new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const UN=new Ae(G.comparator),jN=new Me(G.comparator);function se(...t){let e=jN;for(const n of t)e=e.add(n);return e}const zN=new Me(te);function $N(){return zN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function fI(t){return{integerValue:""+t}}function BN(t,e){return mN(e)?fI(e):om(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._=void 0}}function HN(t,e,n){return t instanceof Nu?function(i,s){const o={fields:{[QT]:{stringValue:GT},[XT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tm(s)&&(s=yc(s)),s&&(o.fields[YT]=s),{mapValue:o}}(n,e):t instanceof la?pI(t,e):t instanceof ua?mI(t,e):function(i,s){const o=dI(i,s),l=e_(o)+e_(i.Ie);return sd(o)&&sd(i.Ie)?fI(l):om(i.serializer,l)}(t,e)}function WN(t,e,n){return t instanceof la?pI(t,e):t instanceof ua?mI(t,e):n}function dI(t,e){return t instanceof Ou?function(r){return sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nu extends wc{}class la extends wc{constructor(e){super(),this.elements=e}}function pI(t,e){const n=gI(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ua extends wc{constructor(e){super(),this.elements=e}}function mI(t,e){let n=gI(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Ou extends wc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function e_(t){return ke(t.integerValue||t.doubleValue)}function gI(t){return nm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof la&&i instanceof la||r instanceof ua&&i instanceof ua?ps(r.elements,i.elements,dn):r instanceof Ou&&i instanceof Ou?dn(r.Ie,i.Ie):r instanceof Nu&&i instanceof Nu}(t.transform,e.transform)}class KN{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tc{}function yI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new am(t.key,qt.none()):new Aa(t.key,t.data,qt.none());{const n=t.data,r=mt.empty();let i=new Me(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Br(t.key,r,new St(i.toArray()),qt.none())}}function GN(t,e,n){t instanceof Aa?function(i,s,o){const l=i.value.clone(),u=n_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,s,o){if(!Bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=n_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(vI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oo(t,e,n,r){return t instanceof Aa?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const c=s.value.clone(),f=r_(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const c=r_(s.fieldTransforms,u,o),f=o.data;return f.setAll(vI(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function QN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dI(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function t_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ps(r,i,(s,o)=>qN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends Tc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends Tc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function n_(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,WN(o,l,n[i]))}return r}function r_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HN(s,o,e))}return r}class am extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YN extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=yI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>t_(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>t_(n,r))}}class lm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return UN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,oe;function eO(t){switch(t){case F.OK:return Y();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Y()}}function _I(t){if(t===void 0)return zn("GRPC error has no .code"),F.UNKNOWN;switch(t){case xe.OK:return F.OK;case xe.CANCELLED:return F.CANCELLED;case xe.UNKNOWN:return F.UNKNOWN;case xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case xe.INTERNAL:return F.INTERNAL;case xe.UNAVAILABLE:return F.UNAVAILABLE;case xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case xe.NOT_FOUND:return F.NOT_FOUND;case xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case xe.ABORTED:return F.ABORTED;case xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case xe.DATA_LOSS:return F.DATA_LOSS;default:return Y()}}(oe=xe||(xe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Ir([4294967295,4294967295],0);function i_(t){const e=BT().encode(t),n=new VT;return n.update(e),new Uint8Array(n.digest())}function s_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([i,s],0)]}class um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Ir.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Ir.fromNumber(r)));return i.compare(tO)===1&&(i=new Ir([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=i_(e),[r,i]=s_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new um(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=i_(e),[r,i]=s_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ic(J.min(),i,new Ae(te),$n(),se())}}class Pa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pa(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class EI{constructor(e,n){this.targetId=e,this.ge=n}}class wI{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class o_{constructor(){this.pe=0,this.ye=a_(),this.we=Ge.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=se(),n=se(),r=se();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Pa(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=a_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ue(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class nO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=$n(),this.$e=vl(),this.Ue=vl(),this.Ke=new Ae(te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(ad(s))if(r===0){const o=new G(s.path);this.ze(n,o,rt.newNoDocument(o,J.min()))}else ue(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),u=l?this.nt(l,e,o):1;if(u!==0){this.Ye(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=kr(r).toUint8Array()}catch(u){if(u instanceof KT)return ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new um(o,i,s)}catch(u){return ds(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const l=this.Xe(o);if(l){if(s.current&&ad(l.target)){const u=new G(l.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,rt.newNoDocument(u,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=se();this.Ue.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Xe(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Ic(e,n,this.Ke,this.Qe,r);return this.Qe=$n(),this.$e=vl(),this.Ue=vl(),this.Ke=new Ae(te),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new o_,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Me(te),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Me(te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new o_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function vl(){return new Ae(G.comparator)}function a_(){return new Ae(G.comparator)}const rO={asc:"ASCENDING",desc:"DESCENDING"},iO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sO={and:"AND",or:"OR"};class oO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ud(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aO(t,e){return Du(t,e.toTimestamp())}function fn(t){return ue(!!t),J.fromTimestamp(function(n){const r=Rr(n);return new Ve(r.seconds,r.nanos)}(t))}function cm(t,e){return cd(t,e).canonicalString()}function cd(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function II(t){const e=_e.fromString(t);return ue(RI(e)),e}function hd(t,e){return cm(t.databaseId,e.path)}function zh(t,e){const n=II(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(AI(n))}function SI(t,e){return cm(t.databaseId,e)}function lO(t){const e=II(t);return e.length===4?_e.emptyPath():AI(e)}function fd(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AI(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function l_(t,e,n){return{name:hd(t,e),fields:n.value.mapValue.fields}}function uO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ue(f===void 0||typeof f=="string"),Ge.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?F.UNKNOWN:_I(c.code);return new K(f,c.message||"")}(o);n=new wI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zh(t,r.document.name),s=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):J.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Hl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zh(t,r.document),s=r.readTime?fn(r.readTime):J.min(),o=rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zh(t,r.document),s=r.removedTargetIds||[];n=new Hl([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZN(i,s),l=r.targetId;n=new EI(l,o)}}return n}function cO(t,e){let n;if(e instanceof Aa)n={update:l_(t,e.key,e.value)};else if(e instanceof am)n={delete:hd(t,e.key)};else if(e instanceof Br)n={update:l_(t,e.key,e.data),updateMask:_O(e.fieldMask)};else{if(!(e instanceof YN))return Y();n={verify:hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Nu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof la)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function hO(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fn(i.updateTime):fn(s);return o.isEqual(J.min())&&(o=fn(s)),new KN(o,i.transformResults||[])}(n,e))):[]}function fO(t,e){return{documents:[SI(t,e.path)]}}function dO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SI(t,i);const s=function(c){if(c.length!==0)return CI(pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:xi(m.field),direction:gO(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ht:n,parent:i}}function pO(t){let e=lO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=PI(p);return m instanceof pn&&rI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new xu(Ni(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,gc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new bu(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new bu(E,m)}(n.endAt)),ON(e,i,o,s,l,"F",u,c)}function mO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>PI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function gO(t){return rO[t]}function yO(t){return iO[t]}function vO(t){return sO[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return He.fromServerFormat(t.fieldPath)}function CI(t){return t instanceof De?function(n){if(n.op==="=="){if(Qv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(Gv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(Gv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:yO(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>CI(i));return r.length===1?r[0]:{compositeFilter:{op:vO(n.op),filters:r}}}(t):Y()}function _O(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.Tt=e}}function wO(t){const e=pO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ld(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.Tn=new IO}addToCollectionParentIndex(e,n){return this.Tn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Cr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class IO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kI=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(kI,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ys(0)}static Kn(){return new ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="LruGarbageCollector",SO=1048576;function h_([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class AO{constructor(e){this.Hn=e,this.buffer=new Me(h_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();h_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class PO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){H(c_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Os(n)?H(c_,"Ignoring IndexedDB error during garbage collection: ",n):await Ns(n)}await this.er(3e5)})}}class CO{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(mc.ae);const r=new AO(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(u_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ki()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function RO(t,e){return new CO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(){this.changes=new Ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Oo(r.mutation,i,St.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=No(),l=function(){return No()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Br)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Oo(f.mutation,c,f.mutation.getFieldMask(),Ve.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new bO(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let i=new Ae((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||St.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=hI();f.forEach(m=>{if(!s.has(m)){const E=yI(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(ti());let l=ia,u=s;return o.next(c=>V.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:cI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,m){return new vc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,rt.newInvalidDocument(f)))});let l=mo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Oo(f.mutation,c,St.empty(),Ve.now()),Ec(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:wO(i.bundledQuery),readTime:fn(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.overlays=new Ae(G.comparator),this.Rr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ti();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=ti(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=ti(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ti(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return V.resolve(l)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JN(n,r));let s=this.Rr.get(n);s===void 0&&(s=se(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.Vr=new Me(Fe.mr),this.gr=new Me(Fe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Fe(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new G(new _e([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new G(new _e([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=se();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return G.comparator(e.key,n.key)||te(e.Cr,n.Cr)}static pr(e,n){return te(e.Cr,n.Cr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Me(Fe.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Mr=this.Mr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?em:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const l=this.Or(o.Cr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(te);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new G(s),0);let l=new Me(te);return this.Mr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.kr=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hN(cN(f),r)<=0||(i.has(f.key)||Ec(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}qr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MO(this)}getSize(e){return V.resolve(this.size)}}class MO extends kO{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.persistence=e,this.Qr=new Ti(n=>rm(n),im),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.$r=0,this.Ur=new hm,this.targetCount=0,this.Kr=ys.Un()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.zn(n),V.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new mc(0),this.zr=!1,this.zr=!0,this.jr=new DO,this.referenceDelegate=e(this),this.Hr=new FO(this),this.indexManager=new TO,this.remoteDocumentCache=function(i){return new VO(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new EO(n),this.Yr=new NO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new LO(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new UO(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class UO extends dN{constructor(e){super(),this.currentSequenceNumber=e}}class fm{constructor(e){this.persistence=e,this.ti=new hm,this.ni=null}static ri(e){return new fm(e)}get ii(){if(this.ni)return this.ni;throw Y()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const i=G.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Lu{constructor(e,n){this.persistence=e,this.oi=new Ti(r=>gN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=RO(this,n)}static ri(e,n){return new Lu(e,n)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return V.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zl(e.data.value)),n}ar(e,n,r){return V.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return wk()?8:pN(st())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new jO;return this._s(e,n,o).next(l=>{if(s.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(ki()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(ki()<=ie.DEBUG&&H("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(ki()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):V.resolve())}rs(e,n){if(Zv(n))return V.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ld(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.cs(n,l);return this.ls(n,c,o,u.readTime)?this.rs(e,ld(n,null,"F")):this.hs(e,c,n,u)}))})))}ss(e,n,r,i){return Zv(n)||i.isEqual(J.min())?V.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?V.resolve(null):(ki()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bi(n)),this.hs(e,o,n,uN(i,ia)).next(l=>l))})}cs(e,n){let r=new Me(lI(e));return n.forEach((i,s)=>{Ec(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return ki()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",bi(n)),this.ns.getDocumentsMatchingQuery(e,n,Cr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="LocalStore",$O=3e8;class BO{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new Ae(te),this.Is=new Ti(s=>rm(s),im),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xO(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function HO(t,e,n,r){return new BO(t,e,n,r)}async function xI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Rs:c,removedBatchIds:o,addedBatchIds:l}))})})}function WO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let E=V.resolve();return m.forEach(A=>{E=E.next(()=>f.getEntry(u,A)).next(k=>{const R=c.docVersions.get(A);ue(R!==null),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),f.addEntry(k)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function qO(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(s,f.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Ge.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(p,E),function(k,R,_){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=$O?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,E,f)&&l.push(n.Hr.updateTargetData(s,E))});let u=$n(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(KO(s,o,e.documentUpdates).next(f=>{u=f.Vs,c=f.fs})),!r.isEqual(J.min())){const f=n.Hr.getLastRemoteSnapshotVersion(s).next(p=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ts=i,s))}function KO(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(pm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function GO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=em),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function dd(t,e,n){const r=Z(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Os(o))throw o;H(pm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function f_(t,e,n){const r=Z(t);let i=J.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Z(u),m=p.Is.get(f);return m!==void 0?V.resolve(p.Ts.get(m)):p.Hr.getTargetData(c,f)}(r,o,hn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:se())).next(l=>(YO(r,VN(e),l),{documents:l,gs:s})))}function YO(t,e,n){let r=t.Es.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class d_{constructor(){this.activeTargetIds=$N()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XO{constructor(){this.ho=new d_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new d_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="ConnectivityMonitor";class m_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){H(p_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){H(p_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l=null;function pd(){return _l===null?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="RestConnection",ZO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eD{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Ru?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,n,r,i,s){const o=pd(),l=this.bo(e,n.toUriEncodedString());H($h,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,l,u,r).then(c=>(H($h,`Received RPC '${e}' ${o}: `,c),c),c=>{throw ds($h,`RPC '${e}' ${o} failed with error: `,c,"url: ",l,"request:",r),c})}Co(e,n,r,i,s,o){return this.So(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,n){const r=ZO[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class nD extends eD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=pd();return new Promise((o,l)=>{const u=new MT;u.setWithCredentials(!0),u.listenOnce(FT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jl.NO_ERROR:const f=u.getResponseJson();H(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case jl.TIMEOUT:H(et,`RPC '${e}' ${s} timed out`),l(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case jl.HTTP_ERROR:const p=u.getStatus();if(H(et,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const A=function(R){const _=R.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(E.status);l(new K(A,E.message))}else l(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(F.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Wo(e,n,r){const i=pd(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zT(),l=jT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(et,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,E=!1;const A=new tD({Fo:R=>{E?H(et,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(H(et,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(et,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Mo:()=>p.close()}),k=(R,_,v)=>{R.listen(_,w=>{try{v(w)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,po.EventType.OPEN,()=>{E||(H(et,`RPC '${e}' stream ${i} transport opened.`),A.Qo())}),k(p,po.EventType.CLOSE,()=>{E||(E=!0,H(et,`RPC '${e}' stream ${i} transport closed`),A.Uo())}),k(p,po.EventType.ERROR,R=>{E||(E=!0,ds(et,`RPC '${e}' stream ${i} transport errored:`,R),A.Uo(new K(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,po.EventType.MESSAGE,R=>{var _;if(!E){const v=R.data[0];ue(!!v);const w=v,D=(w==null?void 0:w.error)||((_=w[0])===null||_===void 0?void 0:_.error);if(D){H(et,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let z=function(T){const S=xe[T];if(S!==void 0)return _I(S)}(M),I=D.message;z===void 0&&(z=F.INTERNAL,I="Unknown error status: "+M+" with message "+D.message),E=!0,A.Uo(new K(z,I)),p.close()}else H(et,`RPC '${e}' stream ${i} received:`,v),A.Ko(v)}}),k(l,UT.STAT_EVENT,R=>{R.stat===nd.PROXY?H(et,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===nd.NOPROXY&&H(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.$o()},0),A}}function Bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new oO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="PersistentStream";class DI{constructor(e,n,r,i,s,o,l,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new OI(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return H(g_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(H(g_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rD extends DI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=uO(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?fn(o.readTime):J.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=fd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ad(u)?{documents:fO(s,u)}:{query:dO(s,u).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=TI(s,o.resumeToken);const c=ud(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Du(s,o.snapshotVersion.toTimestamp());const c=ud(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=mO(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=fd(this.serializer),n.removeTarget=e,this.I_(n)}}class iD extends DI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=hO(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=fd(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cO(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{}class oD extends sD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,cd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,cd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class aD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(zn(n),this.N_=!1):H("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="RemoteStore";class lD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(H(mi,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.W_.add(4),await Ca(c),c.j_.set("Unknown"),c.W_.delete(4),await Ac(c)}(this))})}),this.j_=new aD(r,i)}}async function Ac(t){if(Ii(t))for(const e of t.G_)await e(!0)}async function Ca(t){for(const e of t.G_)await e(!1)}function LI(t,e){const n=Z(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),vm(n)?ym(n):Ds(n).c_()&&gm(n,e))}function mm(t,e){const n=Z(t),r=Ds(n);n.K_.delete(e),r.c_()&&VI(n,e),n.K_.size===0&&(r.c_()?r.P_():Ii(n)&&n.j_.set("Unknown"))}function gm(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).y_(e)}function VI(t,e){t.H_.Ne(e),Ds(t).w_(e)}function ym(t){t.H_=new nO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.j_.B_()}function vm(t){return Ii(t)&&!Ds(t).u_()&&t.K_.size>0}function Ii(t){return Z(t).W_.size===0}function MI(t){t.H_=void 0}async function uD(t){t.j_.set("Online")}async function cD(t){t.K_.forEach((e,n)=>{gm(t,e)})}async function hD(t,e){MI(t),vm(t)?(t.j_.q_(e),ym(t)):t.j_.set("Unknown")}async function fD(t,e,n){if(t.j_.set("Online"),e instanceof wI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.K_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.K_.delete(l),i.H_.removeTarget(l))}(t,e)}catch(r){H(mi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof Hl?t.H_.We(e):e instanceof EI?t.H_.Ze(e):t.H_.je(e),!n.isEqual(J.min()))try{const r=await NI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.H_.ot(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.K_.get(c);f&&s.K_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.K_.get(u);if(!f)return;s.K_.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),VI(s,u);const p=new hr(f.target,u,c,f.sequenceNumber);gm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(mi,"Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!Os(e))throw e;t.W_.add(1),await Ca(t),t.j_.set("Offline"),n||(n=()=>NI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(mi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ac(t)})}function FI(t,e){return e().catch(n=>Vu(t,n,e))}async function Pc(t){const e=Z(t),n=xr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:em;for(;dD(e);)try{const i=await GO(e.localStore,r);if(i===null){e.U_.length===0&&n.P_();break}r=i.batchId,pD(e,i)}catch(i){await Vu(e,i)}UI(e)&&jI(e)}function dD(t){return Ii(t)&&t.U_.length<10}function pD(t,e){t.U_.push(e);const n=xr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function UI(t){return Ii(t)&&!xr(t).u_()&&t.U_.length>0}function jI(t){xr(t).start()}async function mD(t){xr(t).C_()}async function gD(t){const e=xr(t);for(const n of t.U_)e.b_(n.mutations)}async function yD(t,e,n){const r=t.U_.shift(),i=lm.from(r,e,n);await FI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Pc(t)}async function vD(t,e){e&&xr(t).S_&&await async function(r,i){if(function(o){return eO(o)&&o!==F.ABORTED}(i.code)){const s=r.U_.shift();xr(r).h_(),await FI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pc(r)}}(t,e),UI(t)&&jI(t)}async function y_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H(mi,"RemoteStore received new credentials");const r=Ii(n);n.W_.add(3),await Ca(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ac(n)}async function _D(t,e){const n=Z(t);e?(n.W_.delete(2),await Ac(n)):e||(n.W_.add(2),await Ca(n),n.j_.set("Unknown"))}function Ds(t){return t.J_||(t.J_=function(n,r,i){const s=Z(n);return s.M_(),new rD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:uD.bind(null,t),No:cD.bind(null,t),Lo:hD.bind(null,t),p_:fD.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),vm(t)?ym(t):t.j_.set("Unknown")):(await t.J_.stop(),MI(t))})),t.J_}function xr(t){return t.Y_||(t.Y_=function(n,r,i){const s=Z(n);return s.M_(),new iD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:mD.bind(null,t),Lo:vD.bind(null,t),D_:gD.bind(null,t),v_:yD.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Pc(t)):(await t.Y_.stop(),t.U_.length>0&&(H(mi,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new _m(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Em(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Os(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{static emptySet(e){return new rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.Z_=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):Y():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vs(e,n,rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class wD{constructor(){this.queries=__(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=__(),s.forEach((o,l)=>{for(const u of l.ta)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function __(){return new Ti(t=>aI(t),_c)}async function zI(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new ED,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Em(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&wm(n)}async function $I(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TD(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ta)l.oa(i)&&(r=!0);o.ea=i}}r&&wm(n)}function ID(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function wm(t){t.ia.forEach(e=>{e.next()})}var md,E_;(E_=md||(md={}))._a="default",E_.Cache="cache";class BI{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==md.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.key=e}}class WI{constructor(e){this.key=e}}class SD{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=se(),this.mutatedKeys=se(),this.ya=lI(e),this.wa=new rs(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new v_,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),E=Ec(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let R=!1;m&&E?m.data.isEqual(E.data)?A!==k&&(r.track({type:3,doc:E}),R=!0):this.va(m,E)||(r.track({type:2,doc:E}),R=!0,(u&&this.ya(E,u)>0||c&&this.ya(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),R=!0):m&&!E&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(l=!0)),R&&(E?(o=o.add(E),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:l,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,p)=>function(E,A){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(E)-k(A)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),i=i!=null&&i;const l=n&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,c=u!==this.ga;return this.ga=u,o.length!==0||c?{snapshot:new vs(this.query,e.wa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new v_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=se(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new WI(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new HI(r))}),n}Oa(e){this.fa=e.gs,this.pa=se();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return vs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Tm="SyncEngine";class AD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PD{constructor(e){this.key=e,this.Ba=!1}}class CD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Ti(l=>aI(l),_c),this.qa=new Map,this.Qa=new Set,this.$a=new Ae(G.comparator),this.Ua=new Map,this.Ka=new hm,this.Wa={},this.Ga=new Map,this.za=ys.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function RD(t,e,n=!0){const r=XI(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await qI(r,e,n,!0),i}async function kD(t,e){const n=XI(t);await qI(n,e,!0,!1)}async function qI(t,e,n,r){const i=await QO(t.localStore,hn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await bD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&LI(t.remoteStore,i),l}async function bD(t,e,n,r,i){t.Ha=(p,m,E)=>async function(k,R,_,v){let w=R.view.ba(_);w.ls&&(w=await f_(k.localStore,R.query,!1).then(({documents:I})=>R.view.ba(I,w)));const D=v&&v.targetChanges.get(R.targetId),M=v&&v.targetMismatches.get(R.targetId)!=null,z=R.view.applyChanges(w,k.isPrimaryClient,D,M);return T_(k,R.targetId,z.Ma),z.snapshot}(t,p,m,E);const s=await f_(t.localStore,e,!0),o=new SD(e,s.gs),l=o.ba(s.documents),u=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);T_(t,n,c.Ma);const f=new AD(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),c.snapshot}async function xD(t,e,n){const r=Z(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!_c(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await dd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&mm(r.remoteStore,i.targetId),gd(r,i.targetId)}).catch(Ns)):(gd(r,i.targetId),await dd(r.localStore,i.targetId,!0))}async function ND(t,e){const n=Z(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mm(n.remoteStore,r.targetId))}async function OD(t,e,n){const r=jD(t);try{const i=await function(o,l){const u=Z(o),c=Ve.now(),f=l.reduce((E,A)=>E.add(A.key),se());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=$n(),k=se();return u.ds.getEntries(E,f).next(R=>{A=R,A.forEach((_,v)=>{v.isValidDocument()||(k=k.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(R=>{p=R;const _=[];for(const v of l){const w=QN(v,p.get(v.key).overlayedDocument);w!=null&&_.push(new Br(v.key,w,eI(w.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,_,l)}).next(R=>{m=R;const _=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(E,R.batchId,_)})}).then(()=>({batchId:m.batchId,changes:cI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Wa[o.currentUser.toKey()];c||(c=new Ae(te)),c=c.insert(l,u),o.Wa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ra(r,i.changes),await Pc(r.remoteStore)}catch(i){const s=Em(i,"Failed to persist write");n.reject(s)}}async function KI(t,e){const n=Z(t);try{const r=await qO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ua.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?ue(o.Ba):i.removedDocuments.size>0&&(ue(o.Ba),o.Ba=!1))}),await Ra(n,r,e)}catch(r){await Ns(r)}}function w_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const l=o.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.ta)m.sa(l)&&(c=!0)}),c&&wm(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DD(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ua.get(e),s=i&&i.key;if(s){let o=new Ae(G.comparator);o=o.insert(s,rt.newNoDocument(s,J.min()));const l=se().add(s),u=new Ic(J.min(),new Map,new Ae(te),o,l);await KI(r,u),r.$a=r.$a.remove(s),r.Ua.delete(e),Im(r)}else await dd(r.localStore,e,!1).then(()=>gd(r,e,n)).catch(Ns)}async function LD(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await WO(n.localStore,e);QI(n,r,null),GI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Ns(i)}}async function VD(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ue(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);QI(r,e,n),GI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Ns(i)}}function GI(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function QI(t,e,n){const r=Z(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||YI(t,r)})}function YI(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(mm(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Im(t))}function T_(t,e,n){for(const r of n)r instanceof HI?(t.Ka.addReference(r.key,e),MD(t,r)):r instanceof WI?(H(Tm,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||YI(t,r.key)):Y()}function MD(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(H(Tm,"New document in limbo: "+n),t.Qa.add(r),Im(t))}function Im(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new G(_e.fromString(e)),r=t.za.next();t.Ua.set(r,new PD(n)),t.$a=t.$a.insert(n,r),LI(t.remoteStore,new hr(hn(sm(n.path)),r,"TargetPurposeLimboResolution",mc.ae))}}async function Ra(t,e,n){const r=Z(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{o.push(r.Ha(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=dm.Yi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.Hi,E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>V.forEach(m.Ji,E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Os(p))throw p;H(pm,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=f.Ts.get(m),A=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(A);f.Ts=f.Ts.insert(m,k)}}}(r.localStore,s))}async function FD(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H(Tm,"User change. New user:",e.toKey());const r=await xI(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.Rs)}}function UD(t,e){const n=Z(t),r=n.Ua.get(e);if(r&&r.Ba)return se().add(r.key);{let i=se();const s=n.qa.get(e);if(!s)return i;for(const o of s){const l=n.ka.get(o);i=i.unionWith(l.view.Sa)}return i}}function XI(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=KI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DD.bind(null,e),e.La.p_=TD.bind(null,e.eventManager),e.La.Ja=ID.bind(null,e.eventManager),e}function jD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}class Mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return HO(this.persistence,new zO,e.initialUser,this.serializer)}Xa(e){return new bI(fm.ri,this.serializer)}Za(e){return new XO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mu.provider={build:()=>new Mu};class zD extends Mu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){ue(this.persistence.referenceDelegate instanceof Lu);const r=this.persistence.referenceDelegate.garbageCollector;return new PO(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new bI(r=>Lu.ri(r,n),this.serializer)}}class yd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>w_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FD.bind(null,this.syncEngine),await _D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wD}()}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),r=function(s){return new nD(s)}(e.databaseInfo);return function(s,o,l,u){return new oD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>w_(this.syncEngine,n,0),function(){return m_.D()?new m_:new JO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new CD(i,s,o,l,u,c);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H(mi,"RemoteStore shutting down."),s.W_.add(5),await Ca(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yd.provider={build:()=>new yd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class $D{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=HT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Em(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function I_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BD(t);H(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>y_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>y_(e.remoteStore,i)),t._onlineComponents=e}async function BD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Nr,"Using user provided OfflineComponentProvider");try{await Hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await Hh(t,new Mu)}}else H(Nr,"Using default OfflineComponentProvider"),await Hh(t,new zD(void 0));return t._offlineComponents}async function ZI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Nr,"Using user provided OnlineComponentProvider"),await I_(t,t._uninitializedComponentsProvider._online)):(H(Nr,"Using default OnlineComponentProvider"),await I_(t,new yd))),t._onlineComponents}function HD(t){return ZI(t).then(e=>e.syncEngine)}async function e1(t){const e=await ZI(t),n=e.eventManager;return n.onListen=RD.bind(null,e.syncEngine),n.onUnlisten=xD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ND.bind(null,e.syncEngine),n}function WD(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new JI({next:m=>{f.su(),o.enqueueAndForget(()=>$I(s,p));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new BI(sm(l.path),f,{includeMetadataChanges:!0,Ta:!0});return zI(s,p)}(await e1(t),t.asyncQueue,e,n,r)),r.promise}function qD(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new JI({next:m=>{f.su(),o.enqueueAndForget(()=>$I(s,p)),m.fromCache&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new BI(l,f,{includeMetadataChanges:!0,Ta:!0});return zI(s,p)}(await e1(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KD(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A_(t){if(!G.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P_(t){if(G.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sm(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="firestore.googleapis.com",C_=!0;class R_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=r1,this.ssl=C_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:C_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SO)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eN;switch(r.type){case"firstParty":return new iN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=S_.get(n);r&&(H("ComponentProvider","Removing Datastore"),S_.delete(n),r.terminate())}(this),Promise.resolve()}}function GD(t,e,n,r={}){var i;const s=(t=mn(t,Cc))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;s.host!==r1&&s.host!==l&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:l,ssl:!1,emulatorOptions:r});if(!ci(u,o)&&(t._setSettings(u),r.mockUserToken)){let c,f;if(typeof r.mockUserToken=="string")c=r.mockUserToken,f=tt.MOCK_USER;else{c=pk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new tt(p)}t._authCredentials=new tN(new $T(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rc(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Sr extends Rc{constructor(e,n,r){super(e,n,sm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new G(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function QD(t,e,...n){if(t=Ke(t),n1("collection","path",e),t instanceof Cc){const r=_e.fromString(e,...n);return P_(r),new Sr(t,null,r)}{if(!(t instanceof Et||t instanceof Sr))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return P_(r),new Sr(t.firestore,null,r)}}function rn(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=HT.newId()),n1("doc","path",e),t instanceof Cc){const r=_e.fromString(e,...n);return A_(r),new Et(t,null,new G(r))}{if(!(t instanceof Et||t instanceof Sr))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return A_(r),new Et(t.firestore,t instanceof Sr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="AsyncQueue";class b_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new OI(this,"async_queue_retry"),this.Su=()=>{const r=Bh();r&&H(k_,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Bh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new On;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Os(e))throw e;H(k_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=_m.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&Y()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Ls extends Cc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new b_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b_(e),this._firestoreClient=void 0,await e}}}function ka(t,e){const n=typeof t=="object"?t:Jw(),r=typeof t=="string"?t:Ru,i=$p(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fk("firestore");s&&GD(i,...s)}return i}function Am(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YD(t),t._firestoreClient}function YD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new _N(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,t1(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new $D(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(Ge.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/^__.*__$/;class JD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class i1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function s1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class km{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Fu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(s1(this.Lu)&&XD.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ZD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sc(e)}ju(e,n,r,i=!1){return new km({Lu:e,methodName:n,zu:r,path:He.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o1(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new ZD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eL(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);bm("Data must be an object, but it was:",o,r);const l=a1(r,o);let u,c;if(s.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=vd(e,p,n);if(!o.contains(m))throw new K(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);u1(f,m)||f.push(m)}u=new St(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new JD(new mt(l),u,c)}class bc extends Pm{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bc}}function tL(t,e,n,r){const i=t.ju(1,e,n);bm("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();$r(r,(u,c)=>{const f=xm(e,u,n);c=Ke(c);const p=i.Uu(f);if(c instanceof bc)s.push(f);else{const m=xc(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new St(s);return new i1(o,l,i.fieldTransforms)}function nL(t,e,n,r,i,s){const o=t.ju(1,e,n),l=[vd(e,r,n)],u=[i];if(s.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(vd(e,s[m])),u.push(s[m+1]);const c=[],f=mt.empty();for(let m=l.length-1;m>=0;--m)if(!u1(c,l[m])){const E=l[m];let A=u[m];A=Ke(A);const k=o.Uu(E);if(A instanceof bc)c.push(E);else{const R=xc(A,k);R!=null&&(c.push(E),f.set(E,R))}}const p=new St(c);return new i1(f,p,o.fieldTransforms)}function xc(t,e){if(l1(t=Ke(t)))return bm("Unsupported field value:",e,t),a1(t,e);if(t instanceof Pm)return function(r,i){if(!s1(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=xc(l,i.Ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:Du(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(i.serializer,s)}}if(r instanceof Cm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _s)return{bytesValue:TI(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Rm)return function(o,l){return{mapValue:{fields:{[JT]:{stringValue:ZT},[ku]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Wu("VectorValues must only contain numeric values.");return om(l.serializer,c)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Sm(r)}`)}(t,e)}function a1(t,e){const n={};return qT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=xc(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function l1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Cm||t instanceof _s||t instanceof Et||t instanceof Pm||t instanceof Rm)}function bm(t,e,n){if(!l1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Sm(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function vd(t,e,n){if((e=Ke(e))instanceof kc)return e._internalPath;if(typeof e=="string")return xm(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const rL=new RegExp("[~\\*/\\[\\]]");function xm(t,e,n){if(e.search(rL)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function u1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(h1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iL extends c1{data(){return super.data()}}function h1(t,e){return typeof e=="string"?xm(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oL{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[ku].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new Rm(s)}convertGeoPoint(e){return new Cm(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);ue(RI(r));const i=new oa(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f1 extends c1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(h1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wl extends f1{data(e={}){return super.data(e)}}class lL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wl(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Wl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Wl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:uL(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){t=mn(t,Et);const e=mn(t.firestore,Ls);return WD(Am(e),t._key).then(n=>dL(e,t,n))}class d1 extends oL{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function cL(t){t=mn(t,Rc);const e=mn(t.firestore,Ls),n=Am(e),r=new d1(e);return sL(t._query),qD(n,t._query).then(i=>new lL(e,r,t,i))}function p1(t,e,n){t=mn(t,Et);const r=mn(t.firestore,Ls),i=aL(t.converter,e,n);return Nm(r,[eL(o1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function hL(t,e,n,...r){t=mn(t,Et);const i=mn(t.firestore,Ls),s=o1(i);let o;return o=typeof(e=Ke(e))=="string"||e instanceof kc?nL(s,"updateDoc",t._key,e,n,r):tL(s,"updateDoc",t._key,e),Nm(i,[o.toMutation(t._key,qt.exists(!0))])}function fL(t){return Nm(mn(t.firestore,Ls),[new am(t._key,qt.none())])}function Nm(t,e){return function(r,i){const s=new On;return r.asyncQueue.enqueueAndForget(async()=>OD(await HD(r),i,s)),s.promise}(Am(t),e)}function dL(t,e,n){const r=n.docs.get(e._key),i=new d1(t);return new f1(t,i,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){xs=i})(Rs),fs(new hi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ls(new nN(r.getProvider("auth-internal")),new sN(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Tr(Vv,Mv,e),Tr(Vv,Mv,"esm2017")})();const pL="/login3/assets/perfil-C5famFGf.jpg",mL=bs(Xt),gL=()=>{const[t,e]=O.useState(0),[n,r]=O.useState(!1),[i,s]=O.useState(0);O.useEffect(()=>{let u;return n&&i>0?u=setInterval(()=>{s(c=>c-1)},1e3):i===0&&(r(!1),e(0)),()=>clearInterval(u)},[n,i]);const o=()=>{r(!0),s(30)},l=async u=>{u.preventDefault();const c=u.target.email.value.trim(),f=u.target.password.value.trim();if(n){alert(`Por favor espere ${i} segundos antes de intentar nuevamente.`);return}try{await jx(mL,c,f),e(0)}catch{const m=t+1;e(m),m>=3?(o(),alert("Demasiados intentos fallidos. Por favor espere 30 segundos antes de intentar nuevamente.")):alert(`Correo o contraseña incorrectos. Intentos restantes: ${3-m}`)}};return N.jsx("div",{className:"login-container",children:N.jsxs("div",{className:"login-form",children:[N.jsx("img",{src:pL,alt:"Perfil",className:"img-fluid rounded-circle mx-auto d-block",style:{width:"100px",height:"100px",marginBottom:"20px"}}),N.jsxs("form",{onSubmit:l,children:[N.jsx("input",{type:"text",placeholder:"Ingrese su email",className:"login-input",id:"email",disabled:n,name:"email"}),N.jsx("input",{type:"password",placeholder:"Ingresar contraseña",className:"login-input",id:"password",disabled:n,name:"password"}),N.jsx("button",{className:"login-button",disabled:n,children:n?`Bloqueado (${i}s)`:"Inicia Sesión"})]})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function yL(t,e,n){return(e=_L(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function x_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x_(Object(n),!0).forEach(function(r){yL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _L(t){var e=vL(t,"string");return typeof e=="symbol"?e:e+""}const N_=()=>{};let Om={},m1={},g1=null,y1={mark:N_,measure:N_};try{typeof window<"u"&&(Om=window),typeof document<"u"&&(m1=document),typeof MutationObserver<"u"&&(g1=MutationObserver),typeof performance<"u"&&(y1=performance)}catch{}const{userAgent:O_=""}=Om.navigator||{},Or=Om,ye=m1,D_=g1,El=y1;Or.document;const Kn=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",v1=~O_.indexOf("MSIE")||~O_.indexOf("Trident/");var EL=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,_1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},TL={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},E1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ot="classic",Nc="duotone",IL="sharp",SL="sharp-duotone",w1=[ot,Nc,IL,SL],AL={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},PL={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},CL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),RL={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},kL=["fak","fa-kit","fakd","fa-kit-duotone"],L_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},bL=["kit"],xL={kit:{"fa-kit":"fak"}},NL=["fak","fakd"],OL={kit:{fak:"fa-kit"}},V_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},wl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},DL=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],LL=["fak","fa-kit","fakd","fa-kit-duotone"],VL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ML={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},FL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},_d={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},UL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ed=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...DL,...UL],jL=["solid","regular","light","thin","duotone","brands"],T1=[1,2,3,4,5,6,7,8,9,10],zL=T1.concat([11,12,13,14,15,16,17,18,19,20]),$L=[...Object.keys(FL),...jL,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wl.GROUP,wl.SWAP_OPACITY,wl.PRIMARY,wl.SECONDARY].concat(T1.map(t=>"".concat(t,"x"))).concat(zL.map(t=>"w-".concat(t))),BL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Bn="___FONT_AWESOME___",wd=16,I1="fa",S1="svg-inline--fa",gi="data-fa-i2svg",Td="data-fa-pseudo-element",HL="data-fa-pseudo-element-pending",Dm="data-prefix",Lm="data-icon",M_="fontawesome-i2svg",WL="async",qL=["HTML","HEAD","STYLE","SCRIPT"],A1=(()=>{try{return!0}catch{return!1}})();function ba(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ot]}})}const P1=U({},_1);P1[ot]=U(U(U(U({},{"fa-duotone":"duotone"}),_1[ot]),L_.kit),L_["kit-duotone"]);const KL=ba(P1),Id=U({},RL);Id[ot]=U(U(U(U({},{duotone:"fad"}),Id[ot]),V_.kit),V_["kit-duotone"]);const F_=ba(Id),Sd=U({},_d);Sd[ot]=U(U({},Sd[ot]),OL.kit);const Vm=ba(Sd),Ad=U({},ML);Ad[ot]=U(U({},Ad[ot]),xL.kit);ba(Ad);const GL=EL,C1="fa-layers-text",QL=wL,YL=U({},AL);ba(YL);const XL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wh=TL,JL=[...bL,...$L],Do=Or.FontAwesomeConfig||{};function ZL(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function eV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ye&&typeof ye.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=eV(ZL(n));i!=null&&(Do[r]=i)});const R1={styleDefault:"solid",familyDefault:ot,cssPrefix:I1,replacementClass:S1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Do.familyPrefix&&(Do.cssPrefix=Do.familyPrefix);const ws=U(U({},R1),Do);ws.autoReplaceSvg||(ws.observeMutations=!1);const q={};Object.keys(R1).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){ws[t]=e,Lo.forEach(n=>n(q))},get:function(){return ws[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){ws.cssPrefix=t,Lo.forEach(e=>e(q))},get:function(){return ws.cssPrefix}});Or.FontAwesomeConfig=q;const Lo=[];function tV(t){return Lo.push(t),()=>{Lo.splice(Lo.indexOf(t),1)}}const Zn=wd,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nV(t){if(!t||!Kn)return;const e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ye.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}const rV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){let t=12,e="";for(;t-- >0;)e+=rV[Math.random()*62|0];return e}function Vs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mm(t){return t.classList?Vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function k1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(k1(t[n]),'" '),"").trim()}function Oc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Fm(t){return t.size!==sn.size||t.x!==sn.x||t.y!==sn.y||t.rotate!==sn.rotate||t.flipX||t.flipY}function sV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function oV(t){let{transform:e,width:n=wd,height:r=wd,startCentered:i=!1}=t,s="";return i&&v1?s+="translate(".concat(e.x/Zn-n/2,"em, ").concat(e.y/Zn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Zn,"em), calc(-50% + ").concat(e.y/Zn,"em)) "):s+="translate(".concat(e.x/Zn,"em, ").concat(e.y/Zn,"em) "),s+="scale(".concat(e.size/Zn*(e.flipX?-1:1),", ").concat(e.size/Zn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var aV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
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
}`;function b1(){const t=I1,e=S1,n=q.cssPrefix,r=q.replacementClass;let i=aV;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let U_=!1;function qh(){q.autoAddCss&&!U_&&(nV(b1()),U_=!0)}var lV={mixout(){return{dom:{css:b1,insertCss:qh}}},hooks(){return{beforeDOMElementCreation(){qh()},beforeI2svg(){qh()}}}};const Hn=Or||{};Hn[Bn]||(Hn[Bn]={});Hn[Bn].styles||(Hn[Bn].styles={});Hn[Bn].hooks||(Hn[Bn].hooks={});Hn[Bn].shims||(Hn[Bn].shims=[]);var on=Hn[Bn];const x1=[],N1=function(){ye.removeEventListener("DOMContentLoaded",N1),Uu=1,x1.map(t=>t())};let Uu=!1;Kn&&(Uu=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),Uu||ye.addEventListener("DOMContentLoaded",N1));function uV(t){Kn&&(Uu?setTimeout(t,0):x1.push(t))}function xa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?k1(t):"<".concat(e," ").concat(iV(n),">").concat(r.map(xa).join(""),"</").concat(e,">")}function j_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Kh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=l(f,e[c],c,e);return f};function cV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pd(t){const e=cV(t);return e.length===1?e[0].toString(16):null}function hV(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function z_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Cd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=z_(e);typeof on.hooks.addPack=="function"&&!r?on.hooks.addPack(t,z_(e)):on.styles[t]=U(U({},on.styles[t]||{}),i),t==="fas"&&Cd("fa",e)}const{styles:ha,shims:fV}=on,O1=Object.keys(Vm),dV=O1.reduce((t,e)=>(t[e]=Object.keys(Vm[e]),t),{});let Um=null,D1={},L1={},V1={},M1={},F1={};function pV(t){return~JL.indexOf(t)}function mV(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!pV(i)?i:null}const U1=()=>{const t=r=>Kh(ha,(i,s,o)=>(i[o]=Kh(s,r,{}),i),{});D1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),L1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),F1=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in ha||q.autoFetchSvg,n=Kh(fV,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});V1=n.names,M1=n.unicodes,Um=Dc(q.styleDefault,{family:q.familyDefault})};tV(t=>{Um=Dc(t.styleDefault,{family:q.familyDefault})});U1();function jm(t,e){return(D1[t]||{})[e]}function gV(t,e){return(L1[t]||{})[e]}function ni(t,e){return(F1[t]||{})[e]}function j1(t){return V1[t]||{prefix:null,iconName:null}}function yV(t){const e=M1[t],n=jm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return Um}const z1=()=>({prefix:null,iconName:null,rest:[]});function vV(t){let e=ot;const n=O1.reduce((r,i)=>(r[i]="".concat(q.cssPrefix,"-").concat(i),r),{});return w1.forEach(r=>{(t.includes(n[r])||t.some(i=>dV[r].includes(i)))&&(e=r)}),e}function Dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ot}=e,r=KL[n][t];if(n===Nc&&!t)return"fad";const i=F_[n][t]||F_[n][r],s=t in on.styles?t:null;return i||s||null}function _V(t){let e=[],n=null;return t.forEach(r=>{const i=mV(q.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function $_(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Lc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=Ed.concat(LL),s=$_(t.filter(p=>i.includes(p))),o=$_(t.filter(p=>!Ed.includes(p))),l=s.filter(p=>(r=p,!E1.includes(p))),[u=null]=l,c=vV(s),f=U(U({},_V(o)),{},{prefix:Dc(u,{family:c})});return U(U(U({},f),IV({values:t,family:c,styles:ha,config:q,canonical:f,givenPrefix:r})),EV(n,r,f))}function EV(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?j1(i):{},o=ni(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!ha.far&&ha.fas&&!q.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const wV=w1.filter(t=>t!==ot||t!==Nc),TV=Object.keys(_d).filter(t=>t!==ot).map(t=>Object.keys(_d[t])).flat();function IV(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,l=n===Nc,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||c||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&wV.includes(n)&&(Object.keys(s).find(m=>TV.includes(m))||o.autoFetchSvg)){const m=CL.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=ni(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Dr()||"fas"),r}class SV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=U(U({},this.definitions[s]||{}),i[s]),Cd(s,i[s]);const o=Vm[ot][s];o&&Cd(o,i[s]),U1()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let B_=[],qi={};const is={},AV=Object.keys(is);function PV(t,e){let{mixoutsTo:n}=e;return B_=t,qi={},Object.keys(is).forEach(r=>{AV.indexOf(r)===-1&&delete is[r]}),B_.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{qi[o]||(qi[o]=[]),qi[o].push(s[o])})}r.provides&&r.provides(is)}),n}function Rd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(qi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function yi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(qi[t]||[]).forEach(s=>{s.apply(null,n)})}function Lr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return is[t]?is[t].apply(null,e):void 0}function kd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Dr();if(e)return e=ni(n,e)||e,j_($1.definitions,n,e)||j_(on.styles,n,e)}const $1=new SV,CV=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,yi("noAuto")},RV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kn?(yi("beforeI2svg",t),Lr("pseudoElements2svg",t),Lr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,uV(()=>{bV({autoReplaceSvgRoot:e}),yi("watch",t)})}},kV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ni(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Dc(t[0]);return{prefix:n,iconName:ni(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(GL))){const e=Lc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Dr(),iconName:ni(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Dr();return{prefix:e,iconName:ni(e,t)||t}}}},kt={noAuto:CV,config:q,dom:RV,parse:kV,library:$1,findIconDefinition:kd,toHtml:xa},bV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ye}=t;(Object.keys(on.styles).length>0||q.autoFetchSvg)&&Kn&&q.autoReplaceSvg&&kt.dom.i2svg({node:e})};function Vc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>xa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Kn)return;const n=ye.createElement("div");return n.innerHTML=t.html,n.children}}),t}function xV(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Fm(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Oc(U(U({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function NV(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function zm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:f,watchable:p=!1}=t,{width:m,height:E}=n.found?n:e,A=NL.includes(r),k=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(M=>f.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(f.classes).join(" ");let R={children:[],attributes:U(U({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(E)})};const _=A&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/E*16*.0625,"em")}:{};p&&(R.attributes[gi]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||ca())},children:[l]}),delete R.attributes.title);const v=U(U({},R),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:U(U({},_),f.styles)}),{children:w,attributes:D}=n.found&&e.found?Lr("generateAbstractMask",v)||{children:[],attributes:{}}:Lr("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=w,v.attributes=D,o?NV(v):xV(v)}function H_(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[gi]="");const c=U({},o.styles);Fm(i)&&(c.transform=oV({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Oc(c);f.length>0&&(u.style=f);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function OV(t){const{content:e,title:n,extra:r}=t,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Oc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Gh}=on;function bd(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Wh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Wh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Wh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const DV={found:!1,width:512,height:512};function LV(t,e){!A1&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xd(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=Dr()),new Promise((r,i)=>{if(n==="fa"){const s=j1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Gh[e]&&Gh[e][t]){const s=Gh[e][t];return r(bd(s))}LV(t,e),r(U(U({},DV),{},{icon:q.showMissingIcons&&t?Lr("missingIconAbstract")||{}:{}}))})}const W_=()=>{},Nd=q.measurePerformance&&El&&El.mark&&El.measure?El:{mark:W_,measure:W_},vo='FA "6.7.2"',VV=t=>(Nd.mark("".concat(vo," ").concat(t," begins")),()=>B1(t)),B1=t=>{Nd.mark("".concat(vo," ").concat(t," ends")),Nd.measure("".concat(vo," ").concat(t),"".concat(vo," ").concat(t," begins"),"".concat(vo," ").concat(t," ends"))};var $m={begin:VV,end:B1};const ql=()=>{};function q_(t){return typeof(t.getAttribute?t.getAttribute(gi):null)=="string"}function MV(t){const e=t.getAttribute?t.getAttribute(Dm):null,n=t.getAttribute?t.getAttribute(Lm):null;return e&&n}function FV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function UV(){return q.autoReplaceSvg===!0?Kl.replace:Kl[q.autoReplaceSvg]||Kl.replace}function jV(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function zV(t){return ye.createElement(t)}function H1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?jV:zV}=e;if(typeof t=="string")return ye.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(H1(s,{ceFn:n}))}),r}function $V(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(H1(n),e)}),e.getAttribute(gi)===null&&q.keepOriginalSource){let n=ye.createComment($V(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Mm(e).indexOf(q.replacementClass))return Kl.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===q.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>xa(s)).join(`
`);e.setAttribute(gi,""),e.innerHTML=i}};function K_(t){t()}function W1(t,e){const n=typeof e=="function"?e:ql;if(t.length===0)n();else{let r=K_;q.mutateApproach===WL&&(r=Or.requestAnimationFrame||K_),r(()=>{const i=UV(),s=$m.begin("mutate");t.map(i),s(),n()})}}let Bm=!1;function q1(){Bm=!0}function Od(){Bm=!1}let ju=null;function G_(t){if(!D_||!q.observeMutations)return;const{treeCallback:e=ql,nodeCallback:n=ql,pseudoElementsCallback:r=ql,observeMutationsRoot:i=ye}=t;ju=new D_(s=>{if(Bm)return;const o=Dr();Vs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!q_(l.addedNodes[0])&&(q.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&q.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&q_(l.target)&&~XL.indexOf(l.attributeName))if(l.attributeName==="class"&&MV(l.target)){const{prefix:u,iconName:c}=Lc(Mm(l.target));l.target.setAttribute(Dm,u||o),c&&l.target.setAttribute(Lm,c)}else FV(l.target)&&n(l.target)})}),Kn&&ju.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function BV(){ju&&ju.disconnect()}function HV(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function WV(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Lc(Mm(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=gV(i.prefix,t.innerText)||jm(i.prefix,Pd(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function qV(t){const e=Vs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||ca()):(e["aria-hidden"]="true",e.focusable="false")),e}function KV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=WV(t),s=qV(t),o=Rd("parseNodeAttributes",{},t);let l=e.styleParser?HV(t):[];return U({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}const{styles:GV}=on;function K1(t){const e=q.autoReplaceSvg==="nest"?Q_(t,{styleParser:!1}):Q_(t);return~e.extra.classes.indexOf(C1)?Lr("generateLayersText",t,e):Lr("generateSvgReplacementMutation",t,e)}function QV(){return[...kL,...Ed]}function Y_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kn)return Promise.resolve();const n=ye.documentElement.classList,r=f=>n.add("".concat(M_,"-").concat(f)),i=f=>n.remove("".concat(M_,"-").concat(f)),s=q.autoFetchSvg?QV():E1.concat(Object.keys(GV));s.includes("fa")||s.push("fa");const o=[".".concat(C1,":not([").concat(gi,"])")].concat(s.map(f=>".".concat(f,":not([").concat(gi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Vs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=$m.begin("onTree"),c=l.reduce((f,p)=>{try{const m=K1(p);m&&f.push(m)}catch(m){A1||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{W1(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(m=>{u(),p(m)})})}function YV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;K1(t).then(n=>{n&&W1([n],e)})}function XV(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:kd(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:kd(i||{})),t(r,U(U({},n),{},{mask:i}))}}const JV=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=sn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:E}=t;return Vc(U({type:"icon"},t),()=>(yi("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(l||ca()):(c["aria-hidden"]="true",c.focusable="false")),zm({icons:{main:bd(E),mask:i?bd(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:U(U({},sn),n),symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:f,classes:u}})))};var ZV={mixout(){return{icon:XV(JV)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Y_,t.nodeCallback=YV,t}}},provides(t){t.i2svg=function(e){const{node:n=ye,callback:r=()=>{}}=e;return Y_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:f,extra:p}=n;return new Promise((m,E)=>{Promise.all([xd(r,o),c.iconName?xd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[k,R]=A;m([e,zm({icons:{main:k,mask:R},prefix:o,iconName:r,transform:l,symbol:u,maskId:f,title:i,titleId:s,extra:p,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Oc(o);l.length>0&&(r.style=l);let u;return Fm(s)&&(u=Lr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},eM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Vc({type:"layer"},()=>{yi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},tM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Vc({type:"counter",content:t},()=>(yi("beforeDOMElementCreation",{content:t,params:e}),OV({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},nM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=sn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Vc({type:"text",content:t},()=>(yi("beforeDOMElementCreation",{content:t,params:e}),H_({content:t,transform:U(U({},sn),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(v1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,H_({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const rM=new RegExp('"',"ug"),X_=[1105920,1112319],J_=U(U(U(U({},{FontAwesome:{normal:"fas",400:"fas"}}),PL),BL),VL),Dd=Object.keys(J_).reduce((t,e)=>(t[e.toLowerCase()]=J_[e],t),{}),iM=Object.keys(Dd).reduce((t,e)=>{const n=Dd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function sM(t){const e=t.replace(rM,""),n=hV(e,0),r=n>=X_[0]&&n<=X_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pd(i?e[0]:e),isSecondary:r||i}}function oM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Dd[n]||{})[i]||iM[n]}function Z_(t,e){const n="".concat(HL).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Vs(t.children).filter(m=>m.getAttribute(Td)===e)[0],l=Or.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(QL),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let E=oM(u,f);const{value:A,isSecondary:k}=sM(m),R=c[0].startsWith("FontAwesome");let _=jm(E,A),v=_;if(R){const w=yV(A);w.iconName&&w.prefix&&(_=w.iconName,E=w.prefix)}if(_&&!k&&(!o||o.getAttribute(Dm)!==E||o.getAttribute(Lm)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const w=KV(),{extra:D}=w;D.attributes[Td]=e,xd(_,E).then(M=>{const z=zm(U(U({},w),{},{icons:{main:M,mask:z1()},prefix:E,iconName:v,extra:D,watchable:!0})),I=ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=z.map(y=>xa(y)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function aM(t){return Promise.all([Z_(t,"::before"),Z_(t,"::after")])}function lM(t){return t.parentNode!==document.head&&!~qL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Td)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function e0(t){if(Kn)return new Promise((e,n)=>{const r=Vs(t.querySelectorAll("*")).filter(lM).map(aM),i=$m.begin("searchPseudoElements");q1(),Promise.all(r).then(()=>{i(),Od(),e()}).catch(()=>{i(),Od(),n()})})}var uM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=e0,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ye}=e;q.searchPseudoElements&&e0(n)}}};let t0=!1;var cM={mixout(){return{dom:{unwatch(){q1(),t0=!0}}}},hooks(){return{bootstrap(){G_(Rd("mutationObserverCallbacks",{}))},noAuto(){BV()},watch(t){const{observeMutationsRoot:e}=t;t0?Od():G_(Rd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const n0=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var hM={mixout(){return{parse:{transform:t=>n0(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=n0(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:U({},m.outer),children:[{tag:"g",attributes:U({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:U(U({},n.icon.attributes),m.path)}]}]}}}};const Qh={x:0,y:0,width:"100%",height:"100%"};function r0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fM(t){return t.tag==="g"?t.children:[t]}var dM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Lc(n.split(" ").map(i=>i.trim())):z1();return r.prefix||(r.prefix=Dr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:f,icon:p}=s,m=sV({transform:l,containerWidth:f,iconWidth:u}),E={tag:"rect",attributes:U(U({},Qh),{},{fill:"white"})},A=c.children?{children:c.children.map(r0)}:{},k={tag:"g",attributes:U({},m.inner),children:[r0(U({tag:c.tag,attributes:U(U({},c.attributes),m.path)},A))]},R={tag:"g",attributes:U({},m.outer),children:[k]},_="mask-".concat(o||ca()),v="clip-".concat(o||ca()),w={tag:"mask",attributes:U(U({},Qh),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,R]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:fM(p)},w]};return n.push(D,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(_,")")},Qh)}),{children:n,attributes:r}}}},pM={provides(t){let e=!1;Or.matchMedia&&(e=Or.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=U(U({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:U(U({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:U(U({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},mM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},gM=[lV,ZV,eM,tM,nM,uM,cM,hM,dM,pM,mM];PV(gM,{mixoutsTo:kt});kt.noAuto;kt.config;kt.library;kt.dom;const Ld=kt.parse;kt.findIconDefinition;kt.toHtml;const yM=kt.icon;kt.layer;kt.text;kt.counter;var G1={exports:{}},vM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_M=vM,EM=_M;function Q1(){}function Y1(){}Y1.resetWarningCache=Q1;var wM=function(){function t(r,i,s,o,l,u){if(u!==EM){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Y1,resetWarningCache:Q1};return n.PropTypes=n,n};G1.exports=wM();var TM=G1.exports;const ne=p0(TM);function i0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i0(Object(n),!0).forEach(function(r){Ki(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zu(t){"@babel/helpers - typeof";return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zu(t)}function Ki(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SM(t,e){if(t==null)return{};var n=IM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vd(t){return AM(t)||PM(t)||CM(t)||RM()}function AM(t){if(Array.isArray(t))return Md(t)}function PM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CM(t,e){if(t){if(typeof t=="string")return Md(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Md(t,e)}}function Md(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function RM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kM(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,p=t.pulse,m=t.fixedWidth,E=t.inverse,A=t.border,k=t.listItem,R=t.flip,_=t.size,v=t.rotation,w=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":E,"fa-border":A,"fa-li":k,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},Ki(e,"fa-".concat(_),typeof _<"u"&&_!==null),Ki(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Ki(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Ki(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(M){return D[M]?M:null}).filter(function(M){return M})}function bM(t){return t=t-0,t===t}function X1(t){return bM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var xM=["style"];function NM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function OM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=X1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[NM(i)]=s:e[i]=s,e},{})}function J1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return J1(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=OM(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[X1(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=SM(n,xM);return i.attrs.style=tn(tn({},i.attrs.style),o),t.apply(void 0,[e.tag,tn(tn({},i.attrs),l)].concat(Vd(r)))}var Z1=!1;try{Z1=!0}catch{}function DM(){if(!Z1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function s0(t){if(t&&zu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ld.icon)return Ld.icon(t);if(t===null)return null;if(t&&zu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ki({},t,e):{}}var o0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Vo=A0.forwardRef(function(t,e){var n=tn(tn({},o0),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,f=s0(r),p=Yh("classes",[].concat(Vd(kM(n)),Vd((o||"").split(" ")))),m=Yh("transform",typeof n.transform=="string"?Ld.transform(n.transform):n.transform),E=Yh("mask",s0(i)),A=yM(f,tn(tn(tn(tn({},p),m),E),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!A)return DM("Could not find icon",f),null;var k=A.abstract,R={ref:e};return Object.keys(n).forEach(function(_){o0.hasOwnProperty(_)||(R[_]=n[_])}),LM(k[0],R)});Vo.displayName="FontAwesomeIcon";Vo.propTypes={beat:ne.bool,border:ne.bool,beatFade:ne.bool,bounce:ne.bool,className:ne.string,fade:ne.bool,flash:ne.bool,mask:ne.oneOfType([ne.object,ne.array,ne.string]),maskId:ne.string,fixedWidth:ne.bool,inverse:ne.bool,flip:ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ne.oneOfType([ne.object,ne.array,ne.string]),listItem:ne.bool,pull:ne.oneOf(["right","left"]),pulse:ne.bool,rotation:ne.oneOf([0,90,180,270]),shake:ne.bool,size:ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ne.bool,spinPulse:ne.bool,spinReverse:ne.bool,symbol:ne.oneOfType([ne.bool,ne.string]),title:ne.string,titleId:ne.string,transform:ne.oneOfType([ne.string,ne.object]),swapOpacity:ne.bool};var LM=J1.bind(null,A0.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const VM={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},MM={prefix:"fas",iconName:"apple-whole",icon:[448,512,[127822,127823,"apple-alt"],"f5d1","M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"]},FM=MM,UM={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"]},eS="/login3/assets/Extensiones-DS1ZbmgV.jpeg",tS="/login3/assets/Sentadilla-J16rmQgH.jpg",nS="/login3/assets/Pesomuertorems-EpgcNnSq.jpg",rS="/login3/assets/Curlsentado-BctmLq_Y.jpg",$u="/login3/assets/Aduccionesenmaquina-Cv8PADhq.jpg",iS="/login3/assets/Elevacionesdetalon-C11Heie_.jpg",Bu="/login3/assets/Patadadegluteoenmaquina-B2sPxZpv.jpg",sS="/login3/assets/Hiperetenciones-B2aLcPPY.jpg",oS="/login3/assets/PressInclinadoMancuernas-BQ0fQeeQ.png",aS="/login3/assets/PressBancaBarra--mdvvvK6.jpg",Hu="/login3/assets/PressCopa-DWOSjCuw.jpg",Wu="/login3/assets/ElevacionesLateralesSentado-D1XGTKVr.jpg",lS="/login3/assets/CrunchAbdominalLastre-BtTEgSXM.jpg",uS="/login3/assets/RemoSentadoPolea-DzgPpZB6.jpg",cS="/login3/assets/JalonesAgarreNeutro-CHlZkvDH.jpg",hS="/login3/assets/CurlArana-NwRzmk9J.jpg",fS="/login3/assets/FacePull-B0-q1Vx9.jpg",dS="/login3/assets/CurlBicepsBarraZ-BkWo3-jK.jpg",pS="/login3/assets/FlexionMuneca-CvNz5nNz.jpg",mS="/login3/assets/HipThrustMaquina-DmYn-Y5c.jpg",gS="/login3/assets/DesplantesEstaticos-KEGgWHMs.jpg",yS="/login3/assets/CurlAcostadoMaquina-BqpDa2k2.jpg",vS="/login3/assets/ExtensionTalonesPrensa-c_mVCWoR.png",_S="/login3/assets/PesoMuertoBulgaro-aBIv33bN.jpg",ES="/login3/assets/CrucePoleas-BNAQMgdf.jpg",wS="/login3/assets/DominadasAsistidas-v7SG1MlH.jpg",qu="/login3/assets/PressMilitarBarra-DGOZ0KG4.jpg",TS="/login3/assets/CurlBancoScott-Bm3Zncnm.jpg",IS="/login3/assets/PressInclinadoBarra-CnQw250m.jpg",a0=ka(Xt),l0={lunes:[{nombre:"Extensiones para pierna en máquina",reps:"4 series con 10 reps",imagen:eS},{nombre:"Sentadilla con barra",reps:"4 series con 15 reps",imagen:tS},{nombre:"Peso muerto rumano en máquina Smith",reps:"4 series con 12 reps",imagen:nS},{nombre:"Curl sentado",reps:"3 series con 12 reps",imagen:rS},{nombre:"Aducciones en máquina",reps:"4 series con 14 reps",imagen:$u},{nombre:"Elevaciones de talón sentado",reps:"4 series con 14 reps",imagen:iS},{nombre:"Patada de glúteo en máquina",reps:"3 series con 15 reps",imagen:Bu},{nombre:"Hiperextensiones en banco romano",reps:"3 series con 12 reps",imagen:sS}],martes:[{nombre:"Press inclinado con mancuernas",reps:"4 series con 10 reps",imagen:oS},{nombre:"Press militar en máquina",reps:"4 series con 8 reps",imagen:qu},{nombre:"Press de banca horizontal con barra",reps:"3 series con 8 reps",imagen:aS},{nombre:"Press copa",reps:"4 series con 12 reps",imagen:Hu},{nombre:"Elevaciones laterales con mancuerna sentado",reps:"3 series con 10 reps",imagen:Wu},{nombre:"Crunch abdominal con lastre",reps:"3 series con 14 reps",imagen:lS}],miercoles:[{nombre:"Remo sentado en polea",reps:"4 series con 8 reps",imagen:uS},{nombre:"Jalones al pecho con agarre neutro",reps:"4 series con 8 reps",imagen:cS},{nombre:"Curl araña con mancuernas",reps:"4 series con 8 reps",imagen:hS},{nombre:"Face pull",reps:"4 series con 14 reps",imagen:fS},{nombre:"Curl de bíceps en barra Z",reps:"3 series con 12 reps",imagen:dS},{nombre:"Flexión de muñeca con mancuernas",reps:"3 series con 16 reps",imagen:pS}],jueves:[{nombre:"Hip thrust en máquina",reps:"4 series con 10 reps",imagen:mS},{nombre:"Patada de glúteo en máquina",reps:"4 series con 15 reps",imagen:Bu},{nombre:"Desplantes estáticos con mancuerna",reps:"4 series con 15 reps",imagen:gS},{nombre:"Curl acostado en máquina",reps:"4 series con 15 reps",imagen:yS},{nombre:"Abducciones de cadera en máquina",reps:"3 series con 12 reps",imagen:$u},{nombre:"Extensión de talones en prensa",reps:"3 series con 16 reps",imagen:vS},{nombre:"Peso muerto búlgaro con mancuernas",reps:"3 series con 14 reps",imagen:_S}],domingo:[{nombre:"Cruce de poleas desde media altura",reps:"4 series con 8 reps",imagen:ES},{nombre:"Dominadas asistidas con agarre prono (en máquina)",reps:"4 series con 10 reps",imagen:wS},{nombre:"Press militar sentado con barra",reps:"4 series con 10 reps",imagen:qu},{nombre:"Elevaciones laterales con mancuerna sentado",reps:"3 series con 10 reps",imagen:Wu},{nombre:"Press inclinado con barra",reps:"3 series con 8 reps",imagen:IS},{nombre:"Curl de bíceps en banco scott (predicador)",reps:"4 series con 10 reps",imagen:TS},{nombre:"Press copa",reps:"4 series con 14 reps",imagen:Hu}]},jM=(t,e)=>{const r={"Perder peso":[2,0,4,1,3],"Ganar masa muscular":[1,3,0,4,2],"Mantenerme saludable":[4,1,2,0,3]}[e]||[];return Object.keys(t).reduce((i,s)=>{const o=t[s],l=r.map(u=>o[u]).filter(Boolean);return i[s]=l.length?l:o,i},{})},u0={"Perder peso":["Controla las porciones en cada comida y evita comer en exceso.","Bebe al menos 2 litros de agua al día para mantenerte hidratado y reducir el hambre.","Planifica tus comidas y snacks para evitar decisiones impulsivas.","Incluye alimentos ricos en fibra, como frutas, verduras, legumbres y cereales integrales.","Realiza entrenamientos cardiovasculares como correr, nadar o andar en bicicleta 4-5 veces a la semana.","Prioriza el consumo de grasas saludables como aguacate, nueces y aceite de oliva.","Duerme al menos 7-8 horas diarias para evitar desequilibrios hormonales que aumentan el apetito.","Evita los alimentos ultraprocesados y altos en azúcares añadidos.","Realiza ejercicios de fuerza para preservar la masa muscular mientras pierdes grasa.","Practica el mindful eating (comer consciente) para identificar cuándo estás realmente lleno."],"Ganar masa muscular":["Consume una cantidad suficiente de calorías para crear un excedente calórico.","Aumenta el consumo de proteínas a 1.6-2.2 gramos por kilogramo de peso corporal.","Realiza ejercicios compuestos como sentadillas, peso muerto y press de banca.","Incorpora suplementos como proteína en polvo o creatina, si es necesario.","Come cada 3-4 horas para asegurar un flujo constante de nutrientes.","Realiza un calentamiento dinámico antes de entrenar y estiramientos después.","Mantén un diario de entrenamiento para medir tu progreso y aumentar gradualmente el peso.","Prioriza la ingesta de carbohidratos antes y después del entrenamiento para optimizar la recuperación.","Descansa lo suficiente entre sesiones de entrenamiento para permitir la recuperación muscular.","Come grasas saludables, como las que se encuentran en pescados grasos, semillas y mantequilla de maní."],"Mantenerme saludable":["Sigue una dieta variada y equilibrada que incluya todos los grupos alimenticios.","Realiza al menos 150 minutos de actividad física moderada a la semana, como caminar o nadar.","Limita el consumo de sal para reducir el riesgo de presión arterial alta.","Evita el tabaco y el alcohol o consúmelos con moderación.","Haz chequeos médicos regulares para monitorear tu estado de salud.","Prioriza actividades que reduzcan el estrés, como la meditación o el yoga.","Mantén un horario de sueño consistente, durmiendo entre 7 y 9 horas diarias.","Lava tus manos con regularidad y mantén una buena higiene personal.","Consume probióticos naturales como yogur o kéfir para promover la salud intestinal.","Pasa tiempo al aire libre para obtener suficiente vitamina D y mejorar tu estado de ánimo."]},zM=()=>["domingo","lunes","martes","miercoles","jueves","viernes","sabado"][new Date().getDay()],c0=bs(Xt),$M=()=>{const[t,e]=O.useState(0),[n,r]=O.useState(!1);O.useEffect(()=>{let o;return n&&(o=setInterval(()=>{e(l=>l+1)},1e3)),()=>clearInterval(o)},[n]);const i=()=>{e(0),r(!1)},s=o=>{const l=Math.floor(o/60),u=o%60;return`${l.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`};return N.jsxs("div",{className:"cronometro",children:[N.jsx("h3",{children:"Cronómetro"}),N.jsx("p",{children:s(t)}),N.jsx("button",{onClick:()=>r(!n),children:n?"Parar":"Iniciar"}),N.jsx("button",{onClick:i,children:"Reiniciar"})]})},BM=({correoUsuario:t})=>{var E,A,k;const[e,n]=O.useState([]),[r,i]=O.useState(0),[s,o]=O.useState(!1),[l,u]=O.useState(""),[c,f]=O.useState(""),p=Ei();O.useEffect(()=>{(async()=>{const _=c0.currentUser;if(_){const v=rn(a0,"usuarios",_.uid),w=await Es(v);if(w.exists()){const D=w.data();D.rol==="admin"?p("/adminpanel"):f(D.objetivo||"")}}else p("/login")})()},[]),O.useEffect(()=>{const R=zM();if(c){const v=jM(l0,c);n(v[R]||[])}else n(l0[R]||[]);(async()=>{const v=c0.currentUser;if(v){const w=rn(a0,"usuarios",v.uid),D=await Es(w);if(D.exists()){const M=D.data();f(M.objetivo||"")}}})()},[c]),O.useEffect(()=>{if(c&&u0[c]){const R=u0[c],_=R[Math.floor(Math.random()*R.length)];u(_)}},[c]);const m=()=>{r<e.length-1?(i(r+1),o(!1)):o(!0)};return N.jsxs("div",{className:"home-container",children:[N.jsxs("div",{className:"layout",children:[N.jsxs("div",{className:"recomendaciones",children:[N.jsx("h2",{children:"Recomendación para tu objetivo"}),N.jsx("p",{children:l||"Selecciona tu objetivo en el perfil para recibir recomendaciones."})]}),N.jsxs("div",{className:"rutinas",children:[N.jsxs("h1",{children:["Bienvenido, ",t]}),N.jsxs("div",{className:"rutina-hoy",children:[N.jsx("h2",{children:"Rutina para hoy"}),e.length>0?s?N.jsx("p",{children:"¡Felicidades! Has completado todos los ejercicios de hoy."}):N.jsxs("div",{className:"ejercicio-actual",children:[((E=e[r])==null?void 0:E.imagen)&&N.jsx("img",{src:e[r].imagen,alt:e[r].nombre}),N.jsx("h3",{children:(A=e[r])==null?void 0:A.nombre}),N.jsx("p",{children:(k=e[r])==null?void 0:k.reps}),N.jsx("button",{onClick:m,children:"Marcar como completado"})]}):N.jsx("p",{children:"¡Hoy no hay rutina programada!"})]})]}),N.jsxs("div",{className:"tercera-seccion",children:[N.jsx("h2",{children:"Cronometro de apoyo"}),N.jsx($M,{})]})]}),N.jsx("nav",{className:"bottom-menu",children:N.jsxs("ul",{children:[N.jsx("li",{children:N.jsxs(Ro,{to:"/perfil",children:[N.jsx(Vo,{icon:VM})," Perfil"]})}),N.jsx("li",{children:N.jsxs(Ro,{to:"/rutinas",children:[N.jsx(Vo,{icon:UM})," Rutinas"]})}),N.jsx("li",{children:N.jsxs(Ro,{to:"/recomendaciones",children:[N.jsx(Vo,{icon:FM})," Recomendaciones"]})})]})})]})},h0=ka(Xt),f0=bs(Xt),HM=()=>{const[t,e]=O.useState({nombre:"",edad:"",genero:"",peso:"",estatura:"",objetivo:""}),[n,r]=O.useState(null),[i,s]=O.useState(!0),[o,l]=O.useState(""),u=Ei();O.useEffect(()=>{const E=Yp(f0,async A=>{if(A){console.log("Usuario autenticado UID:",A.uid),r(A.uid);try{await c(A.uid)}catch(k){console.error("Error al cargar el perfil:",k)}finally{s(!1)}}else console.log("No hay un usuario autenticado."),r(null),s(!1)});return()=>E()},[]);const c=async E=>{try{const A=rn(h0,"usuarios",E),k=await Es(A);if(k.exists()){const R=k.data();console.log("Datos cargados del perfil:",R),e({...t,nombre:R.nombre||"",edad:R.edad||"",genero:R.genero||"",peso:R.peso||"",estatura:R.estatura||"",objetivo:R.objetivo||""})}else console.error("El documento no existe.")}catch(A){console.error("Error al cargar el perfil:",A)}},f=E=>{const{name:A,value:k}=E.target;e({...t,[A]:k})},p=async()=>{try{console.log("Intentando guardar perfil para UID:",n);const E={...t};delete E.rol;const A=rn(h0,"usuarios",n);console.log("Referencia al documento:",A.path),await p1(A,E,{merge:!0}),l("Perfil guardado con éxito.")}catch(E){console.error("Error al guardar el perfil:",E),l("Error al guardar el perfil.")}},m=()=>{u("/")};return i?N.jsx("p",{children:"Cargando..."}):n?N.jsxs("div",{className:"perfil-container",children:[N.jsx("h1",{children:"Perfil de Usuario"}),N.jsxs("form",{className:"perfil-form",children:[N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"nombre",children:"Nombre"}),N.jsx("input",{type:"text",value:t.nombre||"",disabled:!0})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"edad",children:"Edad"}),N.jsx("input",{type:"number",id:"edad",name:"edad",value:t.edad,onChange:f,placeholder:"Ingresa tu edad"})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"genero",children:"Género"}),N.jsxs("select",{id:"genero",name:"genero",value:t.genero,onChange:f,children:[N.jsx("option",{value:"",children:"Selecciona tu género"}),N.jsx("option",{value:"Masculino",children:"Masculino"}),N.jsx("option",{value:"Femenino",children:"Femenino"}),N.jsx("option",{value:"Otro",children:"Otro"})]})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"peso",children:"Peso (kg)"}),N.jsx("input",{type:"number",id:"peso",name:"peso",value:t.peso,onChange:f,placeholder:"Ingresa tu peso en kg"})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"estatura",children:"Estatura (cm)"}),N.jsx("input",{type:"number",id:"estatura",name:"estatura",value:t.estatura,onChange:f,placeholder:"Ingresa tu estatura en cm"})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"objetivo",children:"Objetivo"}),N.jsxs("select",{id:"objetivo",name:"objetivo",value:t.objetivo,onChange:f,children:[N.jsx("option",{value:"",children:"Selecciona tu objetivo"}),N.jsx("option",{value:"Perder peso",children:"Perder peso"}),N.jsx("option",{value:"Ganar masa muscular",children:"Ganar masa muscular"}),N.jsx("option",{value:"Mantenerme saludable",children:"Mantenerme saludable"})]})]}),N.jsx("button",{type:"button",onClick:p,className:"btn-guardar",children:"Guardar"})]}),o&&N.jsx("p",{className:"mensaje",children:o}),N.jsxs("div",{className:"btn-group",children:[N.jsx("button",{className:"boton-regresar",onClick:m,children:"Volver al Menú"}),N.jsx("button",{className:"btn-primary",onClick:()=>AT(f0),children:"Cerrar Sesión"})]})]}):N.jsx("p",{children:"Por favor, inicia sesión para acceder a tu perfil."})},d0={lunes:[{nombre:"Extensiones para pierna en máquina",reps:"4 series con 10 reps",imagen:eS},{nombre:"Sentadilla con barra",reps:"4 series con 15 reps",imagen:tS},{nombre:"Peso muerto rumano en máquina Smith",reps:"4 series con 12 reps",imagen:nS},{nombre:"Curl sentado",reps:"3 series con 12 reps",imagen:rS},{nombre:"Aducciones en máquina",reps:"4 series con 14 reps",imagen:$u},{nombre:"Elevaciones de talón sentado",reps:"4 series con 14 reps",imagen:iS},{nombre:"Patada de glúteo en máquina",reps:"3 series con 15 reps",imagen:Bu},{nombre:"Hiperextensiones en banco romano",reps:"3 series con 12 reps",imagen:sS}],martes:[{nombre:"Press inclinado con mancuernas",reps:"4 series con 10 reps",imagen:oS},{nombre:"Press militar en máquina",reps:"4 series con 8 reps",imagen:qu},{nombre:"Press de banca horizontal con barra",reps:"3 series con 8 reps",imagen:aS},{nombre:"Press copa",reps:"4 series con 12 reps",imagen:Hu},{nombre:"Elevaciones laterales con mancuerna sentado",reps:"3 series con 10 reps",imagen:Wu},{nombre:"Crunch abdominal con lastre",reps:"3 series con 14 reps",imagen:lS}],miercoles:[{nombre:"Remo sentado en polea",reps:"4 series con 8 reps",imagen:uS},{nombre:"Jalones al pecho con agarre neutro",reps:"4 series con 8 reps",imagen:cS},{nombre:"Curl araña con mancuernas",reps:"4 series con 8 reps",imagen:hS},{nombre:"Face pull",reps:"4 series con 14 reps",imagen:fS},{nombre:"Curl de bíceps en barra Z",reps:"3 series con 12 reps",imagen:dS},{nombre:"Flexión de muñeca con mancuernas",reps:"3 series con 16 reps",imagen:pS}],jueves:[{nombre:"Hip thrust en máquina",reps:"4 series con 10 reps",imagen:mS},{nombre:"Patada de glúteo en máquina",reps:"4 series con 15 reps",imagen:Bu},{nombre:"Desplantes estáticos con mancuerna",reps:"4 series con 15 reps",imagen:gS},{nombre:"Curl acostado en máquina",reps:"4 series con 15 reps",imagen:yS},{nombre:"Abducciones de cadera en máquina",reps:"3 series con 12 reps",imagen:$u},{nombre:"Extensión de talones en prensa",reps:"3 series con 16 reps",imagen:vS},{nombre:"Peso muerto búlgaro con mancuernas",reps:"3 series con 14 reps",imagen:_S}],viernes:[{nombre:"Cruce de poleas desde media altura",reps:"4 series con 8 reps",imagen:ES},{nombre:"Dominadas asistidas con agarre prono (en máquina)",reps:"4 series con 10 reps",imagen:wS},{nombre:"Press militar sentado con barra",reps:"4 series con 10 reps",imagen:qu},{nombre:"Elevaciones laterales con mancuerna sentado",reps:"3 series con 10 reps",imagen:Wu},{nombre:"Press inclinado con barra",reps:"3 series con 8 reps",imagen:IS},{nombre:"Curl de bíceps en banco scott (predicador)",reps:"4 series con 10 reps",imagen:TS},{nombre:"Press copa",reps:"4 series con 14 reps",imagen:Hu}]},WM=()=>{const[t,e]=O.useState(null),n=Ei();return N.jsxs("div",{className:"rutinas",children:[N.jsx("h2",{children:"Selecciona un día para ver la rutina"}),N.jsx("div",{className:"dias-semana",children:Object.keys(d0).map(r=>N.jsx("button",{onClick:()=>e(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),t&&N.jsxs("div",{className:"rutina-dia mostrar",children:[N.jsxs("h3",{children:["Rutina para ",t.charAt(0).toUpperCase()+t.slice(1)]}),N.jsx("div",{className:"ejercicios",children:d0[t].map((r,i)=>N.jsxs("div",{className:"ejercicio",children:[r.imagen&&N.jsx("img",{src:r.imagen,alt:r.nombre,className:"tamaño-imagen"}),N.jsx("p",{children:N.jsx("strong",{children:r.nombre})}),N.jsx("p",{children:r.reps})]},i))})]}),N.jsx("button",{onClick:()=>n("/"),className:"boton-regresar",children:"Regresar al Menú"})]})},qM=ka(Xt),KM=bs(Xt),GM=()=>{const[t,e]=O.useState(""),[n,r]=O.useState([]),[i,s]=O.useState(!0),o=Ei();O.useEffect(()=>{Yp(KM,async u=>{if(u){const c=u.uid;await l(c)}})},[]);const l=async u=>{try{const c=rn(qM,"usuarios",u),f=await Es(c);if(f.exists()){const p=f.data();e(p.objetivo);let m=[];switch(p.objetivo){case"Perder peso":m=["Controla las porciones en cada comida y evita comer en exceso.","Bebe al menos 2 litros de agua al día para mantenerte hidratado y reducir el hambre.","Planifica tus comidas y snacks para evitar decisiones impulsivas.","Incluye alimentos ricos en fibra, como frutas, verduras, legumbres y cereales integrales.","Realiza entrenamientos cardiovasculares como correr, nadar o andar en bicicleta 4-5 veces a la semana.","Prioriza el consumo de grasas saludables como aguacate, nueces y aceite de oliva.","Duerme al menos 7-8 horas diarias para evitar desequilibrios hormonales que aumentan el apetito.","Evita los alimentos ultraprocesados y altos en azúcares añadidos.","Realiza ejercicios de fuerza para preservar la masa muscular mientras pierdes grasa.","Practica el mindful eating (comer consciente) para identificar cuándo estás realmente lleno."];break;case"Ganar masa muscular":m=["Consume una cantidad suficiente de calorías para crear un excedente calórico.","Aumenta el consumo de proteínas a 1.6-2.2 gramos por kilogramo de peso corporal.","Realiza ejercicios compuestos como sentadillas, peso muerto y press de banca.","Incorpora suplementos como proteína en polvo o creatina, si es necesario.","Come cada 3-4 horas para asegurar un flujo constante de nutrientes.","Realiza un calentamiento dinámico antes de entrenar y estiramientos después.","Mantén un diario de entrenamiento para medir tu progreso y aumentar gradualmente el peso.","Prioriza la ingesta de carbohidratos antes y después del entrenamiento para optimizar la recuperación.","Descansa lo suficiente entre sesiones de entrenamiento para permitir la recuperación muscular.","Come grasas saludables, como las que se encuentran en pescados grasos, semillas y mantequilla de maní."];break;case"Mantenerme saludable":m=["Sigue una dieta variada y equilibrada que incluya todos los grupos alimenticios.","Realiza al menos 150 minutos de actividad física moderada a la semana, como caminar o nadar.","Limita el consumo de sal para reducir el riesgo de presión arterial alta.","Evita el tabaco y el alcohol o consúmelos con moderación.","Haz chequeos médicos regulares para monitorear tu estado de salud.","Prioriza actividades que reduzcan el estrés, como la meditación o el yoga.","Mantén un horario de sueño consistente, durmiendo entre 7 y 9 horas diarias.","Lava tus manos con regularidad y mantén una buena higiene personal.","Consume probióticos naturales como yogur o kéfir para promover la salud intestinal.","Pasa tiempo al aire libre para obtener suficiente vitamina D y mejorar tu estado de ánimo."];break;default:m=["Selecciona un objetivo en tu perfil."]}r(m)}}catch(c){console.error("Error al cargar el objetivo:",c)}finally{s(!1)}};return i?N.jsx("p",{children:"Cargando recomendaciones..."}):N.jsxs("div",{children:[N.jsx("h1",{children:"Recomendaciones Nutricionales"}),N.jsxs("h2",{children:["Objetivo: ",t||"No definido"]}),n.length>0?N.jsxs("table",{className:"recomendaciones-tabla",children:[N.jsx("thead",{children:N.jsxs("tr",{children:[N.jsx("th",{children:"#"}),N.jsx("th",{children:"Descripción"})]})}),N.jsx("tbody",{children:n.map((u,c)=>N.jsxs("tr",{children:[N.jsx("td",{children:c+1}),N.jsx("td",{children:u})]},c))})]}):N.jsx("p",{children:"No hay recomendaciones disponibles."}),N.jsx("button",{onClick:()=>o("/"),className:"boton-regresar",children:"Regresar al Menú"})]})},oo=ka(Xt),Xh=bs(Xt),QM=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({email:"",nombre:"",contraseña:""}),[i,s]=O.useState(""),o=Ei();O.useEffect(()=>{(async()=>{const p=Xh.currentUser;if(!p){alert("No estás autenticado."),o("/login");return}const m=rn(oo,"usuarios",p.uid),E=await Es(m);E.exists()&&E.data().rol!=="admin"&&(alert("No tienes permisos para acceder a esta página."),o("/"))})()},[o]),O.useEffect(()=>{(async()=>{const m=(await cL(QD(oo,"usuarios"))).docs.map(E=>({id:E.id,...E.data()}));e(m)})()},[]);const l=async f=>{if(f.preventDefault(),!n.email||!n.nombre||!n.contraseña){s("Todos los campos son obligatorios.");return}try{const m=(await Ux(Xh,n.email,n.contraseña)).user.uid,E=rn(oo,"usuarios",m);await p1(E,{email:n.email,nombre:n.nombre,rol:"usuario"}),e(A=>[...A,{id:m,email:n.email,nombre:n.nombre,rol:"usuario"}]),r({email:"",nombre:"",contraseña:""}),s("Usuario agregado correctamente.")}catch(p){console.error("Error al agregar usuario:",p),s("Error al agregar usuario.")}},u=async(f,p)=>{try{if("rol"in p){s("No puedes modificar el rol del usuario.");return}const m=rn(oo,"usuarios",f);await hL(m,p),e(E=>E.map(A=>A.id===f?{...A,...p}:A)),s("Usuario actualizado correctamente.")}catch(m){console.error("Error al actualizar usuario:",m),s("Error al actualizar usuario.")}},c=async f=>{try{const p=rn(oo,"usuarios",f);await fL(p),e(m=>m.filter(E=>E.id!==f)),s("Usuario eliminado correctamente.")}catch(p){console.error("Error al eliminar usuario:",p),s("Error al eliminar usuario.")}};return N.jsxs("div",{className:"admin-panel",children:[N.jsx("h1",{children:"Panel de Administración"}),N.jsx("button",{onClick:()=>AT(Xh),className:"btn-cerrar-sesion",children:"Cerrar Sesión"}),i&&N.jsx("p",{children:i}),N.jsxs("form",{onSubmit:l,children:[N.jsx("input",{type:"text",placeholder:"Email",value:n.email,onChange:f=>r({...n,email:f.target.value})}),N.jsx("input",{type:"text",placeholder:"Nombre",value:n.nombre,onChange:f=>r({...n,nombre:f.target.value})}),N.jsx("input",{type:"password",placeholder:"Contraseña",value:n.contraseña,onChange:f=>r({...n,contraseña:f.target.value})}),N.jsx("button",{type:"submit",children:"Agregar Usuario"})]}),N.jsxs("table",{children:[N.jsx("thead",{children:N.jsxs("tr",{children:[N.jsx("th",{children:"Email"}),N.jsx("th",{children:"Nombre"}),N.jsx("th",{children:"Rol"}),N.jsx("th",{children:"Acciones"})]})}),N.jsx("tbody",{children:t.map(f=>N.jsxs("tr",{children:[N.jsx("td",{children:f.email}),N.jsx("td",{children:N.jsx("input",{type:"text",value:f.nombre,onChange:p=>e(m=>m.map(E=>E.id===f.id?{...E,nombre:p.target.value}:E))})}),N.jsx("td",{children:f.rol}),N.jsxs("td",{children:[N.jsx("button",{onClick:()=>u(f.id,{nombre:f.nombre}),children:"Guardar Cambios"}),N.jsx("button",{onClick:()=>c(f.id),children:"Eliminar"})]})]},f.id))})]})]})},YM=bs(Xt),XM=ka(Xt);function JM(){const[t,e]=O.useState(null),[n,r]=O.useState(null),[i,s]=O.useState(!0);return O.useEffect(()=>{const o=Yp(YM,async l=>{if(l){e(l);const u=rn(XM,"usuarios",l.uid),c=await Es(u);c.exists()&&r(c.data())}else e(null),r(null);s(!1)});return()=>o()},[]),i?N.jsx("p",{children:"Cargando..."}):N.jsx("div",{children:N.jsx(GR,{children:t?N.jsxs(iv,{children:[N.jsx(er,{path:"/",element:N.jsx(BM,{correoUsuario:t.email})}),N.jsx(er,{path:"/perfil",element:N.jsx(HM,{})}),N.jsx(er,{path:"/rutinas",element:N.jsx(WM,{})}),N.jsx(er,{path:"/recomendaciones",element:N.jsx(GM,{})}),n&&n.rol==="admin"&&N.jsx(er,{path:"/adminpanel",element:N.jsx(QM,{})}),N.jsx(er,{path:"*",element:N.jsx(SR,{to:"/"})})]}):N.jsx(iv,{children:N.jsx(er,{path:"*",element:N.jsx(gL,{})})})})})}Rw(document.getElementById("root")).render(N.jsx(O.StrictMode,{children:N.jsx(JM,{})}));
