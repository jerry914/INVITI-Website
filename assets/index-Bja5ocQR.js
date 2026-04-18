function fv(n,s){for(var o=0;o<s.length;o++){const l=s[o];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in n)){const d=Object.getOwnPropertyDescriptor(l,c);d&&Object.defineProperty(n,c,d.get?d:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function Op(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var nc={exports:{}},ps={},rc={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function pv(){if(Bf)return je;Bf=1;var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function N(R){return R===null||typeof R!="object"?null:(R=y&&R[y]||R["@@iterator"],typeof R=="function"?R:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,b={};function k(R,V,Q){this.props=R,this.context=V,this.refs=b,this.updater=Q||C}k.prototype.isReactComponent={},k.prototype.setState=function(R,V){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,V,"setState")},k.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function T(){}T.prototype=k.prototype;function S(R,V,Q){this.props=R,this.context=V,this.refs=b,this.updater=Q||C}var D=S.prototype=new T;D.constructor=S,j(D,k.prototype),D.isPureReactComponent=!0;var L=Array.isArray,P=Object.prototype.hasOwnProperty,$={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function z(R,V,Q){var J,le={},fe=null,W=null;if(V!=null)for(J in V.ref!==void 0&&(W=V.ref),V.key!==void 0&&(fe=""+V.key),V)P.call(V,J)&&!F.hasOwnProperty(J)&&(le[J]=V[J]);var H=arguments.length-2;if(H===1)le.children=Q;else if(1<H){for(var te=Array(H),ce=0;ce<H;ce++)te[ce]=arguments[ce+2];le.children=te}if(R&&R.defaultProps)for(J in H=R.defaultProps,H)le[J]===void 0&&(le[J]=H[J]);return{$$typeof:n,type:R,key:fe,ref:W,props:le,_owner:$.current}}function U(R,V){return{$$typeof:n,type:R.type,key:V,ref:R.ref,props:R.props,_owner:R._owner}}function Y(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function ye(R){var V={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return V[Q]})}var ae=/\/+/g;function oe(R,V){return typeof R=="object"&&R!==null&&R.key!=null?ye(""+R.key):V.toString(36)}function de(R,V,Q,J,le){var fe=typeof R;(fe==="undefined"||fe==="boolean")&&(R=null);var W=!1;if(R===null)W=!0;else switch(fe){case"string":case"number":W=!0;break;case"object":switch(R.$$typeof){case n:case s:W=!0}}if(W)return W=R,le=le(W),R=J===""?"."+oe(W,0):J,L(le)?(Q="",R!=null&&(Q=R.replace(ae,"$&/")+"/"),de(le,V,Q,"",function(ce){return ce})):le!=null&&(Y(le)&&(le=U(le,Q+(!le.key||W&&W.key===le.key?"":(""+le.key).replace(ae,"$&/")+"/")+R)),V.push(le)),1;if(W=0,J=J===""?".":J+":",L(R))for(var H=0;H<R.length;H++){fe=R[H];var te=J+oe(fe,H);W+=de(fe,V,Q,te,le)}else if(te=N(R),typeof te=="function")for(R=te.call(R),H=0;!(fe=R.next()).done;)fe=fe.value,te=J+oe(fe,H++),W+=de(fe,V,Q,te,le);else if(fe==="object")throw V=String(R),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return W}function se(R,V,Q){if(R==null)return R;var J=[],le=0;return de(R,J,"","",function(fe){return V.call(Q,fe,le++)}),J}function Z(R){if(R._status===-1){var V=R._result;V=V(),V.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=V)}if(R._status===1)return R._result.default;throw R._result}var ie={current:null},A={transition:null},ee={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:A,ReactCurrentOwner:$};function K(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:se,forEach:function(R,V,Q){se(R,function(){V.apply(this,arguments)},Q)},count:function(R){var V=0;return se(R,function(){V++}),V},toArray:function(R){return se(R,function(V){return V})||[]},only:function(R){if(!Y(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},je.Component=k,je.Fragment=o,je.Profiler=c,je.PureComponent=S,je.StrictMode=l,je.Suspense=h,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,je.act=K,je.cloneElement=function(R,V,Q){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var J=j({},R.props),le=R.key,fe=R.ref,W=R._owner;if(V!=null){if(V.ref!==void 0&&(fe=V.ref,W=$.current),V.key!==void 0&&(le=""+V.key),R.type&&R.type.defaultProps)var H=R.type.defaultProps;for(te in V)P.call(V,te)&&!F.hasOwnProperty(te)&&(J[te]=V[te]===void 0&&H!==void 0?H[te]:V[te])}var te=arguments.length-2;if(te===1)J.children=Q;else if(1<te){H=Array(te);for(var ce=0;ce<te;ce++)H[ce]=arguments[ce+2];J.children=H}return{$$typeof:n,type:R.type,key:le,ref:fe,props:J,_owner:W}},je.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:d,_context:R},R.Consumer=R},je.createElement=z,je.createFactory=function(R){var V=z.bind(null,R);return V.type=R,V},je.createRef=function(){return{current:null}},je.forwardRef=function(R){return{$$typeof:p,render:R}},je.isValidElement=Y,je.lazy=function(R){return{$$typeof:x,_payload:{_status:-1,_result:R},_init:Z}},je.memo=function(R,V){return{$$typeof:g,type:R,compare:V===void 0?null:V}},je.startTransition=function(R){var V=A.transition;A.transition={};try{R()}finally{A.transition=V}},je.unstable_act=K,je.useCallback=function(R,V){return ie.current.useCallback(R,V)},je.useContext=function(R){return ie.current.useContext(R)},je.useDebugValue=function(){},je.useDeferredValue=function(R){return ie.current.useDeferredValue(R)},je.useEffect=function(R,V){return ie.current.useEffect(R,V)},je.useId=function(){return ie.current.useId()},je.useImperativeHandle=function(R,V,Q){return ie.current.useImperativeHandle(R,V,Q)},je.useInsertionEffect=function(R,V){return ie.current.useInsertionEffect(R,V)},je.useLayoutEffect=function(R,V){return ie.current.useLayoutEffect(R,V)},je.useMemo=function(R,V){return ie.current.useMemo(R,V)},je.useReducer=function(R,V,Q){return ie.current.useReducer(R,V,Q)},je.useRef=function(R){return ie.current.useRef(R)},je.useState=function(R){return ie.current.useState(R)},je.useSyncExternalStore=function(R,V,Q){return ie.current.useSyncExternalStore(R,V,Q)},je.useTransition=function(){return ie.current.useTransition()},je.version="18.3.1",je}var Ff;function Ac(){return Ff||(Ff=1,rc.exports=pv()),rc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function mv(){if(zf)return ps;zf=1;var n=Ac(),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,h,g){var x,y={},N=null,C=null;g!==void 0&&(N=""+g),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(C=h.ref);for(x in h)l.call(h,x)&&!d.hasOwnProperty(x)&&(y[x]=h[x]);if(p&&p.defaultProps)for(x in h=p.defaultProps,h)y[x]===void 0&&(y[x]=h[x]);return{$$typeof:s,type:p,key:N,ref:C,props:y,_owner:c.current}}return ps.Fragment=o,ps.jsx=f,ps.jsxs=f,ps}var $f;function hv(){return $f||($f=1,nc.exports=mv()),nc.exports}var a=hv(),Ai={},oc={exports:{}},Ct={},sc={exports:{}},ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function gv(){return Vf||(Vf=1,(function(n){function s(A,ee){var K=A.length;A.push(ee);e:for(;0<K;){var R=K-1>>>1,V=A[R];if(0<c(V,ee))A[R]=ee,A[K]=V,K=R;else break e}}function o(A){return A.length===0?null:A[0]}function l(A){if(A.length===0)return null;var ee=A[0],K=A.pop();if(K!==ee){A[0]=K;e:for(var R=0,V=A.length,Q=V>>>1;R<Q;){var J=2*(R+1)-1,le=A[J],fe=J+1,W=A[fe];if(0>c(le,K))fe<V&&0>c(W,le)?(A[R]=W,A[fe]=K,R=fe):(A[R]=le,A[J]=K,R=J);else if(fe<V&&0>c(W,K))A[R]=W,A[fe]=K,R=fe;else break e}}return ee}function c(A,ee){var K=A.sortIndex-ee.sortIndex;return K!==0?K:A.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],g=[],x=1,y=null,N=3,C=!1,j=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(A){for(var ee=o(g);ee!==null;){if(ee.callback===null)l(g);else if(ee.startTime<=A)l(g),ee.sortIndex=ee.expirationTime,s(h,ee);else break;ee=o(g)}}function L(A){if(b=!1,D(A),!j)if(o(h)!==null)j=!0,Z(P);else{var ee=o(g);ee!==null&&ie(L,ee.startTime-A)}}function P(A,ee){j=!1,b&&(b=!1,T(z),z=-1),C=!0;var K=N;try{for(D(ee),y=o(h);y!==null&&(!(y.expirationTime>ee)||A&&!ye());){var R=y.callback;if(typeof R=="function"){y.callback=null,N=y.priorityLevel;var V=R(y.expirationTime<=ee);ee=n.unstable_now(),typeof V=="function"?y.callback=V:y===o(h)&&l(h),D(ee)}else l(h);y=o(h)}if(y!==null)var Q=!0;else{var J=o(g);J!==null&&ie(L,J.startTime-ee),Q=!1}return Q}finally{y=null,N=K,C=!1}}var $=!1,F=null,z=-1,U=5,Y=-1;function ye(){return!(n.unstable_now()-Y<U)}function ae(){if(F!==null){var A=n.unstable_now();Y=A;var ee=!0;try{ee=F(!0,A)}finally{ee?oe():($=!1,F=null)}}else $=!1}var oe;if(typeof S=="function")oe=function(){S(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,se=de.port2;de.port1.onmessage=ae,oe=function(){se.postMessage(null)}}else oe=function(){k(ae,0)};function Z(A){F=A,$||($=!0,oe())}function ie(A,ee){z=k(function(){A(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){j||C||(j=!0,Z(P))},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(A){switch(N){case 1:case 2:case 3:var ee=3;break;default:ee=N}var K=N;N=ee;try{return A()}finally{N=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,ee){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var K=N;N=A;try{return ee()}finally{N=K}},n.unstable_scheduleCallback=function(A,ee,K){var R=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?R+K:R):K=R,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=K+V,A={id:x++,callback:ee,priorityLevel:A,startTime:K,expirationTime:V,sortIndex:-1},K>R?(A.sortIndex=K,s(g,A),o(h)===null&&A===o(g)&&(b?(T(z),z=-1):b=!0,ie(L,K-R))):(A.sortIndex=V,s(h,A),j||C||(j=!0,Z(P))),A},n.unstable_shouldYield=ye,n.unstable_wrapCallback=function(A){var ee=N;return function(){var K=N;N=ee;try{return A.apply(this,arguments)}finally{N=K}}}})(ic)),ic}var Hf;function yv(){return Hf||(Hf=1,sc.exports=gv()),sc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function vv(){if(Wf)return Ct;Wf=1;var n=Ac(),s=yv();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(c[e]=t,e=0;e<t.length;e++)l.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function N(e){return h.call(y,e)?!0:h.call(x,e)?!1:g.test(e)?y[e]=!0:(x[e]=!0,!1)}function C(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,r,i){if(t===null||typeof t>"u"||C(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,r,i,u,m,w){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=u,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=m,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,S);k[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,S);k[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,S);k[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,t,r,i){var u=k.hasOwnProperty(t)?k[t]:null;(u!==null?u.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,r,u,i)&&(r=null),i||u===null?N(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):u.mustUseProperty?e[u.propertyName]=r===null?u.type===3?!1:"":r:(t=u.attributeName,i=u.attributeNamespace,r===null?e.removeAttribute(t):(u=u.type,r=u===3||u===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),$=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),ye=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),A=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,R;function V(e){if(R===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return`
`+R+e}var Q=!1;function J(e,t){if(!e||Q)return"";Q=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(B){var i=B}Reflect.construct(e,[],t)}else{try{t.call()}catch(B){i=B}e.call(t.prototype)}else{try{throw Error()}catch(B){i=B}e()}}catch(B){if(B&&i&&typeof B.stack=="string"){for(var u=B.stack.split(`
`),m=i.stack.split(`
`),w=u.length-1,E=m.length-1;1<=w&&0<=E&&u[w]!==m[E];)E--;for(;1<=w&&0<=E;w--,E--)if(u[w]!==m[E]){if(w!==1||E!==1)do if(w--,E--,0>E||u[w]!==m[E]){var I=`
`+u[w].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=w&&0<=E);break}}}finally{Q=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function le(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case $:return"Portal";case U:return"Profiler";case z:return"StrictMode";case oe:return"Suspense";case de:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ye:return(e.displayName||"Context")+".Consumer";case Y:return(e._context.displayName||"Context")+".Provider";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ce(e){var t=te(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,m=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(w){i=""+w,m.call(this,w)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(w){i=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||(e._valueTracker=ce(e))}function Ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=te(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function et(e,t){var r=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Wt(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=H(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ut(e,t){t=t.checked,t!=null&&D(e,"checked",t,!1)}function it(e,t){Ut(e,t);var r=H(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jt(e,t.type,r):t.hasOwnProperty("defaultValue")&&jt(e,t.type,H(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function To(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function jt(e,t,r){(t!=="number"||$e(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ur=Array.isArray;function _n(e,t,r,i){if(e=e.options,t){t={};for(var u=0;u<r.length;u++)t["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=t.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&i&&(e[r].defaultSelected=!0)}else{for(r=""+H(r),t=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function at(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yn(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(ur(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:H(r)}}function Cs(e,t){var r=H(t.value),i=H(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,Lr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,u){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rn=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Rn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Es(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function js(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,u=Es(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,u):e[r]=u}}var Ts=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Br(e,t){if(t){if(Ts[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Po(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pr=null;function Ot(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,An=null,vn=null;function Do(e){if(e=Zo(e)){if(typeof _o!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ks(t),_o(e.stateNode,e.type,t))}}function Se(e){An?vn?vn.push(e):vn=[e]:An=e}function He(){if(An){var e=An,t=vn;if(vn=An=null,Do(e),t)for(e=0;e<t.length;e++)Do(t[e])}}function Qe(e,t){return e(t)}function ft(){}var Mn=!1;function Ye(e,t,r){if(Mn)return e(t,r);Mn=!0;try{return Qe(e,t,r)}finally{Mn=!1,(An!==null||vn!==null)&&(ft(),He())}}function tt(e,t){var r=e.stateNode;if(r===null)return null;var i=Ks(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var On=!1;if(p)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){On=!0}}),window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{On=!1}function Tt(e,t,r,i,u,m,w,E,I){var B=Array.prototype.slice.call(arguments,3);try{t.apply(r,B)}catch(q){this.onError(q)}}var Ln=!1,Lt=null,Ro=!1,ba=null,xg={onError:function(e){Ln=!0,Lt=e}};function wg(e,t,r,i,u,m,w,E,I){Ln=!1,Lt=null,Tt.apply(xg,arguments)}function bg(e,t,r,i,u,m,w,E,I){if(wg.apply(this,arguments),Ln){if(Ln){var B=Lt;Ln=!1,Lt=null}else throw Error(o(198));Ro||(Ro=!0,ba=B)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function au(e){if(mr(e)!==e)throw Error(o(188))}function kg(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,i=t;;){var u=r.return;if(u===null)break;var m=u.alternate;if(m===null){if(i=u.return,i!==null){r=i;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===r)return au(u),e;if(m===i)return au(u),t;m=m.sibling}throw Error(o(188))}if(r.return!==i.return)r=u,i=m;else{for(var w=!1,E=u.child;E;){if(E===r){w=!0,r=u,i=m;break}if(E===i){w=!0,i=u,r=m;break}E=E.sibling}if(!w){for(E=m.child;E;){if(E===r){w=!0,r=m,i=u;break}if(E===i){w=!0,i=m,r=u;break}E=E.sibling}if(!w)throw Error(o(189))}}if(r.alternate!==i)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function lu(e){return e=kg(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var uu=s.unstable_scheduleCallback,du=s.unstable_cancelCallback,Ng=s.unstable_shouldYield,Cg=s.unstable_requestPaint,We=s.unstable_now,Sg=s.unstable_getCurrentPriorityLevel,ka=s.unstable_ImmediatePriority,fu=s.unstable_UserBlockingPriority,Is=s.unstable_NormalPriority,Eg=s.unstable_LowPriority,pu=s.unstable_IdlePriority,Ps=null,rn=null;function jg(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Pg,Tg=Math.log,Ig=Math.LN2;function Pg(e){return e>>>=0,e===0?32:31-(Tg(e)/Ig|0)|0}var _s=64,Ds=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rs(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,u=e.suspendedLanes,m=e.pingedLanes,w=r&268435455;if(w!==0){var E=w&~u;E!==0?i=Ao(E):(m&=w,m!==0&&(i=Ao(m)))}else w=r&~u,w!==0?i=Ao(w):m!==0&&(i=Ao(m));if(i===0)return 0;if(t!==0&&t!==i&&(t&u)===0&&(u=i&-i,m=t&-t,u>=m||u===16&&(m&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Gt(t),u=1<<r,i|=e[r],t&=~u;return i}function _g(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,m=e.pendingLanes;0<m;){var w=31-Gt(m),E=1<<w,I=u[w];I===-1?((E&r)===0||(E&i)!==0)&&(u[w]=_g(E,t)):I<=t&&(e.expiredLanes|=E),m&=~E}}function Na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=_s;return _s<<=1,(_s&4194240)===0&&(_s=64),e}function Ca(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Mo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=r}function Rg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var u=31-Gt(r),m=1<<u;t[u]=0,i[u]=-1,e[u]=-1,r&=~m}}function Sa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Gt(r),u=1<<i;u&t|e[i]&t&&(e[i]|=t),r&=~u}}var _e=0;function hu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gu,Ea,yu,vu,xu,ja=!1,As=[],Bn=null,Fn=null,zn=null,Oo=new Map,Lo=new Map,$n=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function Bo(e,t,r,i,u,m){return e===null||e.nativeEvent!==m?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:m,targetContainers:[u]},t!==null&&(t=Zo(t),t!==null&&Ea(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Mg(e,t,r,i,u){switch(t){case"focusin":return Bn=Bo(Bn,e,t,r,i,u),!0;case"dragenter":return Fn=Bo(Fn,e,t,r,i,u),!0;case"mouseover":return zn=Bo(zn,e,t,r,i,u),!0;case"pointerover":var m=u.pointerId;return Oo.set(m,Bo(Oo.get(m)||null,e,t,r,i,u)),!0;case"gotpointercapture":return m=u.pointerId,Lo.set(m,Bo(Lo.get(m)||null,e,t,r,i,u)),!0}return!1}function bu(e){var t=hr(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=iu(r),t!==null){e.blockedOn=t,xu(e.priority,function(){yu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);pr=i,r.target.dispatchEvent(i),pr=null}else return t=Zo(r),t!==null&&Ea(t),e.blockedOn=r,!1;t.shift()}return!0}function ku(e,t,r){Ms(e)&&r.delete(t)}function Og(){ja=!1,Bn!==null&&Ms(Bn)&&(Bn=null),Fn!==null&&Ms(Fn)&&(Fn=null),zn!==null&&Ms(zn)&&(zn=null),Oo.forEach(ku),Lo.forEach(ku)}function Fo(e,t){e.blockedOn===t&&(e.blockedOn=null,ja||(ja=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Og)))}function zo(e){function t(u){return Fo(u,e)}if(0<As.length){Fo(As[0],e);for(var r=1;r<As.length;r++){var i=As[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Bn!==null&&Fo(Bn,e),Fn!==null&&Fo(Fn,e),zn!==null&&Fo(zn,e),Oo.forEach(t),Lo.forEach(t),r=0;r<$n.length;r++)i=$n[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<$n.length&&(r=$n[0],r.blockedOn===null);)bu(r),r.blockedOn===null&&$n.shift()}var Fr=L.ReactCurrentBatchConfig,Os=!0;function Lg(e,t,r,i){var u=_e,m=Fr.transition;Fr.transition=null;try{_e=1,Ta(e,t,r,i)}finally{_e=u,Fr.transition=m}}function Bg(e,t,r,i){var u=_e,m=Fr.transition;Fr.transition=null;try{_e=4,Ta(e,t,r,i)}finally{_e=u,Fr.transition=m}}function Ta(e,t,r,i){if(Os){var u=Ia(e,t,r,i);if(u===null)Ga(e,t,i,Ls,r),wu(e,i);else if(Mg(u,e,t,r,i))i.stopPropagation();else if(wu(e,i),t&4&&-1<Ag.indexOf(e)){for(;u!==null;){var m=Zo(u);if(m!==null&&gu(m),m=Ia(e,t,r,i),m===null&&Ga(e,t,i,Ls,r),m===u)break;u=m}u!==null&&i.stopPropagation()}else Ga(e,t,i,null,r)}}var Ls=null;function Ia(e,t,r,i){if(Ls=null,e=Ot(i),e=hr(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=iu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ls=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sg()){case ka:return 1;case fu:return 4;case Is:case Eg:return 16;case pu:return 536870912;default:return 16}default:return 16}}var Vn=null,Pa=null,Bs=null;function Cu(){if(Bs)return Bs;var e,t=Pa,r=t.length,i,u="value"in Vn?Vn.value:Vn.textContent,m=u.length;for(e=0;e<r&&t[e]===u[e];e++);var w=r-e;for(i=1;i<=w&&t[r-i]===u[m-i];i++);return Bs=u.slice(e,1<i?1-i:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zs(){return!0}function Su(){return!1}function It(e){function t(r,i,u,m,w){this._reactName=r,this._targetInst=u,this.type=i,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zs:Su,this.isPropagationStopped=Su,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zs)},persist:function(){},isPersistent:zs}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=It(zr),$o=K({},zr,{view:0,detail:0}),Fg=It($o),Da,Ra,Vo,$s=K({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Da=e.screenX-Vo.screenX,Ra=e.screenY-Vo.screenY):Ra=Da=0,Vo=e),Da)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),Eu=It($s),zg=K({},$s,{dataTransfer:0}),$g=It(zg),Vg=K({},$o,{relatedTarget:0}),Aa=It(Vg),Hg=K({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wg=It(Hg),Ug=K({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=It(Ug),Yg=K({},zr,{data:0}),ju=It(Yg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qg[e])?!!t[e]:!1}function Ma(){return Xg}var Zg=K({},$o,{key:function(e){if(e.key){var t=qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jg=It(Zg),ey=K({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=It(ey),ty=K({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),ny=It(ty),ry=K({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=It(ry),sy=K({},$s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=It(sy),ay=[9,13,27,32],Oa=p&&"CompositionEvent"in window,Ho=null;p&&"documentMode"in document&&(Ho=document.documentMode);var ly=p&&"TextEvent"in window&&!Ho,Iu=p&&(!Oa||Ho&&8<Ho&&11>=Ho),Pu=" ",_u=!1;function Du(e,t){switch(e){case"keyup":return ay.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function cy(e,t){switch(e){case"compositionend":return Ru(t);case"keypress":return t.which!==32?null:(_u=!0,Pu);case"textInput":return e=t.data,e===Pu&&_u?null:e;default:return null}}function uy(e,t){if($r)return e==="compositionend"||!Oa&&Du(e,t)?(e=Cu(),Bs=Pa=Vn=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Iu&&t.locale!=="ko"?null:t.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dy[e.type]:t==="textarea"}function Mu(e,t,r,i){Se(i),t=Gs(t,"onChange"),0<t.length&&(r=new _a("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Wo=null,Uo=null;function fy(e){Ju(e,0)}function Vs(e){var t=Gr(e);if(Ce(t))return e}function py(e,t){if(e==="change")return t}var Ou=!1;if(p){var La;if(p){var Ba="oninput"in document;if(!Ba){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Ba=typeof Lu.oninput=="function"}La=Ba}else La=!1;Ou=La&&(!document.documentMode||9<document.documentMode)}function Bu(){Wo&&(Wo.detachEvent("onpropertychange",Fu),Uo=Wo=null)}function Fu(e){if(e.propertyName==="value"&&Vs(Uo)){var t=[];Mu(t,Uo,e,Ot(e)),Ye(fy,t)}}function my(e,t,r){e==="focusin"?(Bu(),Wo=t,Uo=r,Wo.attachEvent("onpropertychange",Fu)):e==="focusout"&&Bu()}function hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(Uo)}function gy(e,t){if(e==="click")return Vs(t)}function yy(e,t){if(e==="input"||e==="change")return Vs(t)}function vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:vy;function Go(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var u=r[i];if(!h.call(t,u)||!Yt(e[u],t[u]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,t){var r=zu(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zu(r)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=$e();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=$e(e.document)}return t}function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xy(e){var t=Hu(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Vu(r.ownerDocument.documentElement,r)){if(i!==null&&Fa(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=r.textContent.length,m=Math.min(i.start,u);i=i.end===void 0?m:Math.min(i.end,u),!e.extend&&m>i&&(u=i,i=m,m=u),u=$u(r,m);var w=$u(r,i);u&&w&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==w.node||e.focusOffset!==w.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),m>i?(e.addRange(t),e.extend(w.node,w.offset)):(t.setEnd(w.node,w.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wy=p&&"documentMode"in document&&11>=document.documentMode,Vr=null,za=null,Yo=null,$a=!1;function Wu(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$a||Vr==null||Vr!==$e(i)||(i=Vr,"selectionStart"in i&&Fa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&Go(Yo,i)||(Yo=i,i=Gs(za,"onSelect"),0<i.length&&(t=new _a("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Vr)))}function Hs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Hr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},Va={},Uu={};p&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Ws(e){if(Va[e])return Va[e];if(!Hr[e])return e;var t=Hr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Uu)return Va[e]=t[r];return e}var Gu=Ws("animationend"),Yu=Ws("animationiteration"),qu=Ws("animationstart"),Ku=Ws("transitionend"),Qu=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){Qu.set(e,t),d(t,[e])}for(var Ha=0;Ha<Xu.length;Ha++){var Wa=Xu[Ha],by=Wa.toLowerCase(),ky=Wa[0].toUpperCase()+Wa.slice(1);Hn(by,"on"+ky)}Hn(Gu,"onAnimationEnd"),Hn(Yu,"onAnimationIteration"),Hn(qu,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Ku,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Zu(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,bg(i,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],u=i.event;i=i.listeners;e:{var m=void 0;if(t)for(var w=i.length-1;0<=w;w--){var E=i[w],I=E.instance,B=E.currentTarget;if(E=E.listener,I!==m&&u.isPropagationStopped())break e;Zu(u,E,B),m=I}else for(w=0;w<i.length;w++){if(E=i[w],I=E.instance,B=E.currentTarget,E=E.listener,I!==m&&u.isPropagationStopped())break e;Zu(u,E,B),m=I}}}if(Ro)throw e=ba,Ro=!1,ba=null,e}function Ae(e,t){var r=t[Za];r===void 0&&(r=t[Za]=new Set);var i=e+"__bubble";r.has(i)||(ed(t,e,2,!1),r.add(i))}function Ua(e,t,r){var i=0;t&&(i|=4),ed(r,e,i,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Us]){e[Us]=!0,l.forEach(function(r){r!=="selectionchange"&&(Ny.has(r)||Ua(r,!1,e),Ua(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,Ua("selectionchange",!1,t))}}function ed(e,t,r,i){switch(Nu(t)){case 1:var u=Lg;break;case 4:u=Bg;break;default:u=Ta}r=u.bind(null,t,r,e),u=void 0,!On||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,r,{capture:!0,passive:u}):e.addEventListener(t,r,!0):u!==void 0?e.addEventListener(t,r,{passive:u}):e.addEventListener(t,r,!1)}function Ga(e,t,r,i,u){var m=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var w=i.tag;if(w===3||w===4){var E=i.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(w===4)for(w=i.return;w!==null;){var I=w.tag;if((I===3||I===4)&&(I=w.stateNode.containerInfo,I===u||I.nodeType===8&&I.parentNode===u))return;w=w.return}for(;E!==null;){if(w=hr(E),w===null)return;if(I=w.tag,I===5||I===6){i=m=w;continue e}E=E.parentNode}}i=i.return}Ye(function(){var B=m,q=Ot(r),X=[];e:{var G=Qu.get(e);if(G!==void 0){var ue=_a,me=e;switch(e){case"keypress":if(Fs(r)===0)break e;case"keydown":case"keyup":ue=Jg;break;case"focusin":me="focus",ue=Aa;break;case"focusout":me="blur",ue=Aa;break;case"beforeblur":case"afterblur":ue=Aa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=$g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=ny;break;case Gu:case Yu:case qu:ue=Wg;break;case Ku:ue=oy;break;case"scroll":ue=Fg;break;case"wheel":ue=iy;break;case"copy":case"cut":case"paste":ue=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Tu}var ve=(t&4)!==0,Ue=!ve&&e==="scroll",M=ve?G!==null?G+"Capture":null:G;ve=[];for(var _=B,O;_!==null;){O=_;var ne=O.stateNode;if(O.tag===5&&ne!==null&&(O=ne,M!==null&&(ne=tt(_,M),ne!=null&&ve.push(Qo(_,ne,O)))),Ue)break;_=_.return}0<ve.length&&(G=new ue(G,me,null,r,q),X.push({event:G,listeners:ve}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",G&&r!==pr&&(me=r.relatedTarget||r.fromElement)&&(hr(me)||me[xn]))break e;if((ue||G)&&(G=q.window===q?q:(G=q.ownerDocument)?G.defaultView||G.parentWindow:window,ue?(me=r.relatedTarget||r.toElement,ue=B,me=me?hr(me):null,me!==null&&(Ue=mr(me),me!==Ue||me.tag!==5&&me.tag!==6)&&(me=null)):(ue=null,me=B),ue!==me)){if(ve=Eu,ne="onMouseLeave",M="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Tu,ne="onPointerLeave",M="onPointerEnter",_="pointer"),Ue=ue==null?G:Gr(ue),O=me==null?G:Gr(me),G=new ve(ne,_+"leave",ue,r,q),G.target=Ue,G.relatedTarget=O,ne=null,hr(q)===B&&(ve=new ve(M,_+"enter",me,r,q),ve.target=O,ve.relatedTarget=Ue,ne=ve),Ue=ne,ue&&me)t:{for(ve=ue,M=me,_=0,O=ve;O;O=Wr(O))_++;for(O=0,ne=M;ne;ne=Wr(ne))O++;for(;0<_-O;)ve=Wr(ve),_--;for(;0<O-_;)M=Wr(M),O--;for(;_--;){if(ve===M||M!==null&&ve===M.alternate)break t;ve=Wr(ve),M=Wr(M)}ve=null}else ve=null;ue!==null&&td(X,G,ue,ve,!1),me!==null&&Ue!==null&&td(X,Ue,me,ve,!0)}}e:{if(G=B?Gr(B):window,ue=G.nodeName&&G.nodeName.toLowerCase(),ue==="select"||ue==="input"&&G.type==="file")var xe=py;else if(Au(G))if(Ou)xe=yy;else{xe=hy;var be=my}else(ue=G.nodeName)&&ue.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(xe=gy);if(xe&&(xe=xe(e,B))){Mu(X,xe,r,q);break e}be&&be(e,G,B),e==="focusout"&&(be=G._wrapperState)&&be.controlled&&G.type==="number"&&jt(G,"number",G.value)}switch(be=B?Gr(B):window,e){case"focusin":(Au(be)||be.contentEditable==="true")&&(Vr=be,za=B,Yo=null);break;case"focusout":Yo=za=Vr=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,Wu(X,r,q);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Wu(X,r,q)}var ke;if(Oa)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else $r?Du(e,r)&&(Ne="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ne="onCompositionStart");Ne&&(Iu&&r.locale!=="ko"&&($r||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&$r&&(ke=Cu()):(Vn=q,Pa="value"in Vn?Vn.value:Vn.textContent,$r=!0)),be=Gs(B,Ne),0<be.length&&(Ne=new ju(Ne,e,null,r,q),X.push({event:Ne,listeners:be}),ke?Ne.data=ke:(ke=Ru(r),ke!==null&&(Ne.data=ke)))),(ke=ly?cy(e,r):uy(e,r))&&(B=Gs(B,"onBeforeInput"),0<B.length&&(q=new ju("onBeforeInput","beforeinput",null,r,q),X.push({event:q,listeners:B}),q.data=ke))}Ju(X,t)})}function Qo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gs(e,t){for(var r=t+"Capture",i=[];e!==null;){var u=e,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=tt(e,r),m!=null&&i.unshift(Qo(e,m,u)),m=tt(e,t),m!=null&&i.push(Qo(e,m,u))),e=e.return}return i}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function td(e,t,r,i,u){for(var m=t._reactName,w=[];r!==null&&r!==i;){var E=r,I=E.alternate,B=E.stateNode;if(I!==null&&I===i)break;E.tag===5&&B!==null&&(E=B,u?(I=tt(r,m),I!=null&&w.unshift(Qo(r,I,E))):u||(I=tt(r,m),I!=null&&w.push(Qo(r,I,E)))),r=r.return}w.length!==0&&e.push({event:t,listeners:w})}var Cy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function nd(e){return(typeof e=="string"?e:""+e).replace(Cy,`
`).replace(Sy,"")}function Ys(e,t,r){if(t=nd(t),nd(e)!==t&&r)throw Error(o(425))}function qs(){}var Ya=null,qa=null;function Ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(e){return rd.resolve(null).then(e).catch(Ty)}:Qa;function Ty(e){setTimeout(function(){throw e})}function Xa(e,t){var r=t,i=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(i===0){e.removeChild(u),zo(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=u}while(r);zo(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),on="__reactFiber$"+Ur,Xo="__reactProps$"+Ur,xn="__reactContainer$"+Ur,Za="__reactEvents$"+Ur,Iy="__reactListeners$"+Ur,Py="__reactHandles$"+Ur;function hr(e){var t=e[on];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xn]||r[on]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=od(e);e!==null;){if(r=e[on])return r;e=od(e)}return t}e=r,r=e.parentNode}return null}function Zo(e){return e=e[on]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ks(e){return e[Xo]||null}var Ja=[],Yr=-1;function Un(e){return{current:e}}function Me(e){0>Yr||(e.current=Ja[Yr],Ja[Yr]=null,Yr--)}function Re(e,t){Yr++,Ja[Yr]=e.current,e.current=t}var Gn={},pt=Un(Gn),xt=Un(!1),gr=Gn;function qr(e,t){var r=e.type.contextTypes;if(!r)return Gn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in r)u[m]=t[m];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function wt(e){return e=e.childContextTypes,e!=null}function Qs(){Me(xt),Me(pt)}function sd(e,t,r){if(pt.current!==Gn)throw Error(o(168));Re(pt,t),Re(xt,r)}function id(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var u in i)if(!(u in t))throw Error(o(108,W(e)||"Unknown",u));return K({},r,i)}function Xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,gr=pt.current,Re(pt,e),Re(xt,xt.current),!0}function ad(e,t,r){var i=e.stateNode;if(!i)throw Error(o(169));r?(e=id(e,t,gr),i.__reactInternalMemoizedMergedChildContext=e,Me(xt),Me(pt),Re(pt,e)):Me(xt),Re(xt,r)}var wn=null,Zs=!1,el=!1;function ld(e){wn===null?wn=[e]:wn.push(e)}function _y(e){Zs=!0,ld(e)}function Yn(){if(!el&&wn!==null){el=!0;var e=0,t=_e;try{var r=wn;for(_e=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}wn=null,Zs=!1}catch(u){throw wn!==null&&(wn=wn.slice(e+1)),uu(ka,Yn),u}finally{_e=t,el=!1}}return null}var Kr=[],Qr=0,Js=null,ei=0,Bt=[],Ft=0,yr=null,bn=1,kn="";function vr(e,t){Kr[Qr++]=ei,Kr[Qr++]=Js,Js=e,ei=t}function cd(e,t,r){Bt[Ft++]=bn,Bt[Ft++]=kn,Bt[Ft++]=yr,yr=e;var i=bn;e=kn;var u=32-Gt(i)-1;i&=~(1<<u),r+=1;var m=32-Gt(t)+u;if(30<m){var w=u-u%5;m=(i&(1<<w)-1).toString(32),i>>=w,u-=w,bn=1<<32-Gt(t)+u|r<<u|i,kn=m+e}else bn=1<<m|r<<u|i,kn=e}function tl(e){e.return!==null&&(vr(e,1),cd(e,1,0))}function nl(e){for(;e===Js;)Js=Kr[--Qr],Kr[Qr]=null,ei=Kr[--Qr],Kr[Qr]=null;for(;e===yr;)yr=Bt[--Ft],Bt[Ft]=null,kn=Bt[--Ft],Bt[Ft]=null,bn=Bt[--Ft],Bt[Ft]=null}var Pt=null,_t=null,Le=!1,qt=null;function ud(e,t){var r=Ht(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function dd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,_t=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=yr!==null?{id:bn,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ht(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pt=e,_t=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(Le){var t=_t;if(t){var r=t;if(!dd(e,t)){if(rl(e))throw Error(o(418));t=Wn(r.nextSibling);var i=Pt;t&&dd(e,t)?ud(i,r):(e.flags=e.flags&-4097|2,Le=!1,Pt=e)}}else{if(rl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Le=!1,Pt=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function ti(e){if(e!==Pt)return!1;if(!Le)return fd(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ka(e.type,e.memoizedProps)),t&&(t=_t)){if(rl(e))throw pd(),Error(o(418));for(;t;)ud(e,t),t=Wn(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_t=Wn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Pt?Wn(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=_t;e;)e=Wn(e.nextSibling)}function Xr(){_t=Pt=null,Le=!1}function sl(e){qt===null?qt=[e]:qt.push(e)}var Dy=L.ReactCurrentBatchConfig;function Jo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var i=r.stateNode}if(!i)throw Error(o(147,e));var u=i,m=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===m?t.ref:(t=function(w){var E=u.refs;w===null?delete E[m]:E[m]=w},t._stringRef=m,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function hd(e){function t(M,_){if(e){var O=M.deletions;O===null?(M.deletions=[_],M.flags|=16):O.push(_)}}function r(M,_){if(!e)return null;for(;_!==null;)t(M,_),_=_.sibling;return null}function i(M,_){for(M=new Map;_!==null;)_.key!==null?M.set(_.key,_):M.set(_.index,_),_=_.sibling;return M}function u(M,_){return M=tr(M,_),M.index=0,M.sibling=null,M}function m(M,_,O){return M.index=O,e?(O=M.alternate,O!==null?(O=O.index,O<_?(M.flags|=2,_):O):(M.flags|=2,_)):(M.flags|=1048576,_)}function w(M){return e&&M.alternate===null&&(M.flags|=2),M}function E(M,_,O,ne){return _===null||_.tag!==6?(_=Ql(O,M.mode,ne),_.return=M,_):(_=u(_,O),_.return=M,_)}function I(M,_,O,ne){var xe=O.type;return xe===F?q(M,_,O.props.children,ne,O.key):_!==null&&(_.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Z&&md(xe)===_.type)?(ne=u(_,O.props),ne.ref=Jo(M,_,O),ne.return=M,ne):(ne=Ei(O.type,O.key,O.props,null,M.mode,ne),ne.ref=Jo(M,_,O),ne.return=M,ne)}function B(M,_,O,ne){return _===null||_.tag!==4||_.stateNode.containerInfo!==O.containerInfo||_.stateNode.implementation!==O.implementation?(_=Xl(O,M.mode,ne),_.return=M,_):(_=u(_,O.children||[]),_.return=M,_)}function q(M,_,O,ne,xe){return _===null||_.tag!==7?(_=Er(O,M.mode,ne,xe),_.return=M,_):(_=u(_,O),_.return=M,_)}function X(M,_,O){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ql(""+_,M.mode,O),_.return=M,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case P:return O=Ei(_.type,_.key,_.props,null,M.mode,O),O.ref=Jo(M,null,_),O.return=M,O;case $:return _=Xl(_,M.mode,O),_.return=M,_;case Z:var ne=_._init;return X(M,ne(_._payload),O)}if(ur(_)||ee(_))return _=Er(_,M.mode,O,null),_.return=M,_;ni(M,_)}return null}function G(M,_,O,ne){var xe=_!==null?_.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return xe!==null?null:E(M,_,""+O,ne);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case P:return O.key===xe?I(M,_,O,ne):null;case $:return O.key===xe?B(M,_,O,ne):null;case Z:return xe=O._init,G(M,_,xe(O._payload),ne)}if(ur(O)||ee(O))return xe!==null?null:q(M,_,O,ne,null);ni(M,O)}return null}function ue(M,_,O,ne,xe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return M=M.get(O)||null,E(_,M,""+ne,xe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case P:return M=M.get(ne.key===null?O:ne.key)||null,I(_,M,ne,xe);case $:return M=M.get(ne.key===null?O:ne.key)||null,B(_,M,ne,xe);case Z:var be=ne._init;return ue(M,_,O,be(ne._payload),xe)}if(ur(ne)||ee(ne))return M=M.get(O)||null,q(_,M,ne,xe,null);ni(_,ne)}return null}function me(M,_,O,ne){for(var xe=null,be=null,ke=_,Ne=_=0,ot=null;ke!==null&&Ne<O.length;Ne++){ke.index>Ne?(ot=ke,ke=null):ot=ke.sibling;var Ie=G(M,ke,O[Ne],ne);if(Ie===null){ke===null&&(ke=ot);break}e&&ke&&Ie.alternate===null&&t(M,ke),_=m(Ie,_,Ne),be===null?xe=Ie:be.sibling=Ie,be=Ie,ke=ot}if(Ne===O.length)return r(M,ke),Le&&vr(M,Ne),xe;if(ke===null){for(;Ne<O.length;Ne++)ke=X(M,O[Ne],ne),ke!==null&&(_=m(ke,_,Ne),be===null?xe=ke:be.sibling=ke,be=ke);return Le&&vr(M,Ne),xe}for(ke=i(M,ke);Ne<O.length;Ne++)ot=ue(ke,M,Ne,O[Ne],ne),ot!==null&&(e&&ot.alternate!==null&&ke.delete(ot.key===null?Ne:ot.key),_=m(ot,_,Ne),be===null?xe=ot:be.sibling=ot,be=ot);return e&&ke.forEach(function(nr){return t(M,nr)}),Le&&vr(M,Ne),xe}function ve(M,_,O,ne){var xe=ee(O);if(typeof xe!="function")throw Error(o(150));if(O=xe.call(O),O==null)throw Error(o(151));for(var be=xe=null,ke=_,Ne=_=0,ot=null,Ie=O.next();ke!==null&&!Ie.done;Ne++,Ie=O.next()){ke.index>Ne?(ot=ke,ke=null):ot=ke.sibling;var nr=G(M,ke,Ie.value,ne);if(nr===null){ke===null&&(ke=ot);break}e&&ke&&nr.alternate===null&&t(M,ke),_=m(nr,_,Ne),be===null?xe=nr:be.sibling=nr,be=nr,ke=ot}if(Ie.done)return r(M,ke),Le&&vr(M,Ne),xe;if(ke===null){for(;!Ie.done;Ne++,Ie=O.next())Ie=X(M,Ie.value,ne),Ie!==null&&(_=m(Ie,_,Ne),be===null?xe=Ie:be.sibling=Ie,be=Ie);return Le&&vr(M,Ne),xe}for(ke=i(M,ke);!Ie.done;Ne++,Ie=O.next())Ie=ue(ke,M,Ne,Ie.value,ne),Ie!==null&&(e&&Ie.alternate!==null&&ke.delete(Ie.key===null?Ne:Ie.key),_=m(Ie,_,Ne),be===null?xe=Ie:be.sibling=Ie,be=Ie);return e&&ke.forEach(function(dv){return t(M,dv)}),Le&&vr(M,Ne),xe}function Ue(M,_,O,ne){if(typeof O=="object"&&O!==null&&O.type===F&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case P:e:{for(var xe=O.key,be=_;be!==null;){if(be.key===xe){if(xe=O.type,xe===F){if(be.tag===7){r(M,be.sibling),_=u(be,O.props.children),_.return=M,M=_;break e}}else if(be.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Z&&md(xe)===be.type){r(M,be.sibling),_=u(be,O.props),_.ref=Jo(M,be,O),_.return=M,M=_;break e}r(M,be);break}else t(M,be);be=be.sibling}O.type===F?(_=Er(O.props.children,M.mode,ne,O.key),_.return=M,M=_):(ne=Ei(O.type,O.key,O.props,null,M.mode,ne),ne.ref=Jo(M,_,O),ne.return=M,M=ne)}return w(M);case $:e:{for(be=O.key;_!==null;){if(_.key===be)if(_.tag===4&&_.stateNode.containerInfo===O.containerInfo&&_.stateNode.implementation===O.implementation){r(M,_.sibling),_=u(_,O.children||[]),_.return=M,M=_;break e}else{r(M,_);break}else t(M,_);_=_.sibling}_=Xl(O,M.mode,ne),_.return=M,M=_}return w(M);case Z:return be=O._init,Ue(M,_,be(O._payload),ne)}if(ur(O))return me(M,_,O,ne);if(ee(O))return ve(M,_,O,ne);ni(M,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,_!==null&&_.tag===6?(r(M,_.sibling),_=u(_,O),_.return=M,M=_):(r(M,_),_=Ql(O,M.mode,ne),_.return=M,M=_),w(M)):r(M,_)}return Ue}var Zr=hd(!0),gd=hd(!1),ri=Un(null),oi=null,Jr=null,il=null;function al(){il=Jr=oi=null}function ll(e){var t=ri.current;Me(ri),e._currentValue=t}function cl(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function eo(e,t){oi=e,il=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(bt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(oi===null)throw Error(o(308));Jr=e,oi.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var xr=null;function ul(e){xr===null?xr=[e]:xr.push(e)}function yd(e,t,r,i){var u=t.interleaved;return u===null?(r.next=r,ul(t)):(r.next=u.next,u.next=r),t.interleaved=r,Nn(e,i)}function Nn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var qn=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Te&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,Nn(e,r)}return u=i.interleaved,u===null?(t.next=t,ul(i)):(t.next=u.next,u.next=t),i.interleaved=t,Nn(e,r)}function si(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Sa(e,r)}}function xd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var u=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var w={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};m===null?u=m=w:m=m.next=w,r=r.next}while(r!==null);m===null?u=m=t:m=m.next=t}else u=m=t;r={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ii(e,t,r,i){var u=e.updateQueue;qn=!1;var m=u.firstBaseUpdate,w=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var I=E,B=I.next;I.next=null,w===null?m=B:w.next=B,w=I;var q=e.alternate;q!==null&&(q=q.updateQueue,E=q.lastBaseUpdate,E!==w&&(E===null?q.firstBaseUpdate=B:E.next=B,q.lastBaseUpdate=I))}if(m!==null){var X=u.baseState;w=0,q=B=I=null,E=m;do{var G=E.lane,ue=E.eventTime;if((i&G)===G){q!==null&&(q=q.next={eventTime:ue,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var me=e,ve=E;switch(G=t,ue=r,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){X=me.call(ue,X,G);break e}X=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,G=typeof me=="function"?me.call(ue,X,G):me,G==null)break e;X=K({},X,G);break e;case 2:qn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,G=u.effects,G===null?u.effects=[E]:G.push(E))}else ue={eventTime:ue,lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},q===null?(B=q=ue,I=X):q=q.next=ue,w|=G;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;G=E,E=G.next,G.next=null,u.lastBaseUpdate=G,u.shared.pending=null}}while(!0);if(q===null&&(I=X),u.baseState=I,u.firstBaseUpdate=B,u.lastBaseUpdate=q,t=u.shared.interleaved,t!==null){u=t;do w|=u.lane,u=u.next;while(u!==t)}else m===null&&(u.shared.lanes=0);kr|=w,e.lanes=w,e.memoizedState=X}}function wd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],u=i.callback;if(u!==null){if(i.callback=null,i=r,typeof u!="function")throw Error(o(191,u));u.call(i)}}}var es={},sn=Un(es),ts=Un(es),ns=Un(es);function wr(e){if(e===es)throw Error(o(174));return e}function fl(e,t){switch(Re(ns,t),Re(ts,e),Re(sn,es),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}Me(sn),Re(sn,t)}function to(){Me(sn),Me(ts),Me(ns)}function bd(e){wr(ns.current);var t=wr(sn.current),r=Io(t,e.type);t!==r&&(Re(ts,e),Re(sn,r))}function pl(e){ts.current===e&&(Me(sn),Me(ts))}var Fe=Un(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function hl(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var li=L.ReactCurrentDispatcher,gl=L.ReactCurrentBatchConfig,br=0,ze=null,Xe=null,nt=null,ci=!1,rs=!1,os=0,Ry=0;function mt(){throw Error(o(321))}function yl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Yt(e[r],t[r]))return!1;return!0}function vl(e,t,r,i,u,m){if(br=m,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?Ly:By,e=r(i,u),rs){m=0;do{if(rs=!1,os=0,25<=m)throw Error(o(301));m+=1,nt=Xe=null,t.updateQueue=null,li.current=Fy,e=r(i,u)}while(rs)}if(li.current=fi,t=Xe!==null&&Xe.next!==null,br=0,nt=Xe=ze=null,ci=!1,t)throw Error(o(300));return e}function xl(){var e=os!==0;return os=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?ze.memoizedState=nt=e:nt=nt.next=e,nt}function $t(){if(Xe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=nt===null?ze.memoizedState:nt.next;if(t!==null)nt=t,Xe=e;else{if(e===null)throw Error(o(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},nt===null?ze.memoizedState=nt=e:nt=nt.next=e}return nt}function ss(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=$t(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=Xe,u=i.baseQueue,m=r.pending;if(m!==null){if(u!==null){var w=u.next;u.next=m.next,m.next=w}i.baseQueue=u=m,r.pending=null}if(u!==null){m=u.next,i=i.baseState;var E=w=null,I=null,B=m;do{var q=B.lane;if((br&q)===q)I!==null&&(I=I.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),i=B.hasEagerState?B.eagerState:e(i,B.action);else{var X={lane:q,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};I===null?(E=I=X,w=i):I=I.next=X,ze.lanes|=q,kr|=q}B=B.next}while(B!==null&&B!==m);I===null?w=i:I.next=E,Yt(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseState=w,t.baseQueue=I,r.lastRenderedState=i}if(e=r.interleaved,e!==null){u=e;do m=u.lane,ze.lanes|=m,kr|=m,u=u.next;while(u!==e)}else u===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function bl(e){var t=$t(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=r.dispatch,u=r.pending,m=t.memoizedState;if(u!==null){r.pending=null;var w=u=u.next;do m=e(m,w.action),w=w.next;while(w!==u);Yt(m,t.memoizedState)||(bt=!0),t.memoizedState=m,t.baseQueue===null&&(t.baseState=m),r.lastRenderedState=m}return[m,i]}function kd(){}function Nd(e,t){var r=ze,i=$t(),u=t(),m=!Yt(i.memoizedState,u);if(m&&(i.memoizedState=u,bt=!0),i=i.queue,kl(Ed.bind(null,r,i,e),[e]),i.getSnapshot!==t||m||nt!==null&&nt.memoizedState.tag&1){if(r.flags|=2048,is(9,Sd.bind(null,r,i,u,t),void 0,null),rt===null)throw Error(o(349));(br&30)!==0||Cd(r,t,u)}return u}function Cd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Sd(e,t,r,i){t.value=r,t.getSnapshot=i,jd(t)&&Td(e)}function Ed(e,t,r){return r(function(){jd(t)&&Td(e)})}function jd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Yt(e,r)}catch{return!0}}function Td(e){var t=Nn(e,1);t!==null&&Zt(t,e,1,-1)}function Id(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t.queue=e,e=e.dispatch=Oy.bind(null,ze,e),[t.memoizedState,e]}function is(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Pd(){return $t().memoizedState}function ui(e,t,r,i){var u=an();ze.flags|=e,u.memoizedState=is(1|t,r,void 0,i===void 0?null:i)}function di(e,t,r,i){var u=$t();i=i===void 0?null:i;var m=void 0;if(Xe!==null){var w=Xe.memoizedState;if(m=w.destroy,i!==null&&yl(i,w.deps)){u.memoizedState=is(t,r,m,i);return}}ze.flags|=e,u.memoizedState=is(1|t,r,m,i)}function _d(e,t){return ui(8390656,8,e,t)}function kl(e,t){return di(2048,8,e,t)}function Dd(e,t){return di(4,2,e,t)}function Rd(e,t){return di(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Md(e,t,r){return r=r!=null?r.concat([e]):null,di(4,4,Ad.bind(null,t,e),r)}function Nl(){}function Od(e,t){var r=$t();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&yl(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Ld(e,t){var r=$t();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&yl(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Bd(e,t,r){return(br&21)===0?(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=r):(Yt(r,t)||(r=mu(),ze.lanes|=r,kr|=r,e.baseState=!0),t)}function Ay(e,t){var r=_e;_e=r!==0&&4>r?r:4,e(!0);var i=gl.transition;gl.transition={};try{e(!1),t()}finally{_e=r,gl.transition=i}}function Fd(){return $t().memoizedState}function My(e,t,r){var i=Jn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},zd(e))$d(t,r);else if(r=yd(e,t,r,i),r!==null){var u=vt();Zt(r,e,i,u),Vd(r,t,i)}}function Oy(e,t,r){var i=Jn(e),u={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(zd(e))$d(t,u);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=t.lastRenderedReducer,m!==null))try{var w=t.lastRenderedState,E=m(w,r);if(u.hasEagerState=!0,u.eagerState=E,Yt(E,w)){var I=t.interleaved;I===null?(u.next=u,ul(t)):(u.next=I.next,I.next=u),t.interleaved=u;return}}catch{}finally{}r=yd(e,t,u,i),r!==null&&(u=vt(),Zt(r,e,i,u),Vd(r,t,i))}}function zd(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function $d(e,t){rs=ci=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vd(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Sa(e,r)}}var fi={readContext:zt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},Ly={readContext:zt,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:_d,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ui(4194308,4,Ad.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return ui(4,2,e,t)},useMemo:function(e,t){var r=an();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=an();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=My.bind(null,ze,e),[i.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:Id,useDebugValue:Nl,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=Id(!1),t=e[0];return e=Ay.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=ze,u=an();if(Le){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),rt===null)throw Error(o(349));(br&30)!==0||Cd(i,t,r)}u.memoizedState=r;var m={value:r,getSnapshot:t};return u.queue=m,_d(Ed.bind(null,i,m,e),[e]),i.flags|=2048,is(9,Sd.bind(null,i,m,r,t),void 0,null),r},useId:function(){var e=an(),t=rt.identifierPrefix;if(Le){var r=kn,i=bn;r=(i&~(1<<32-Gt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=os++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ry++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},By={readContext:zt,useCallback:Od,useContext:zt,useEffect:kl,useImperativeHandle:Md,useInsertionEffect:Dd,useLayoutEffect:Rd,useMemo:Ld,useReducer:wl,useRef:Pd,useState:function(){return wl(ss)},useDebugValue:Nl,useDeferredValue:function(e){var t=$t();return Bd(t,Xe.memoizedState,e)},useTransition:function(){var e=wl(ss)[0],t=$t().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Nd,useId:Fd,unstable_isNewReconciler:!1},Fy={readContext:zt,useCallback:Od,useContext:zt,useEffect:kl,useImperativeHandle:Md,useInsertionEffect:Dd,useLayoutEffect:Rd,useMemo:Ld,useReducer:bl,useRef:Pd,useState:function(){return bl(ss)},useDebugValue:Nl,useDeferredValue:function(e){var t=$t();return Xe===null?t.memoizedState=e:Bd(t,Xe.memoizedState,e)},useTransition:function(){var e=bl(ss)[0],t=$t().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Nd,useId:Fd,unstable_isNewReconciler:!1};function Kt(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Cl(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:K({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pi={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=vt(),u=Jn(e),m=Cn(i,u);m.payload=t,r!=null&&(m.callback=r),t=Kn(e,m,u),t!==null&&(Zt(t,e,u,i),si(t,e,u))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=vt(),u=Jn(e),m=Cn(i,u);m.tag=1,m.payload=t,r!=null&&(m.callback=r),t=Kn(e,m,u),t!==null&&(Zt(t,e,u,i),si(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=vt(),i=Jn(e),u=Cn(r,i);u.tag=2,t!=null&&(u.callback=t),t=Kn(e,u,i),t!==null&&(Zt(t,e,i,r),si(t,e,i))}};function Hd(e,t,r,i,u,m,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,m,w):t.prototype&&t.prototype.isPureReactComponent?!Go(r,i)||!Go(u,m):!0}function Wd(e,t,r){var i=!1,u=Gn,m=t.contextType;return typeof m=="object"&&m!==null?m=zt(m):(u=wt(t)?gr:pt.current,i=t.contextTypes,m=(i=i!=null)?qr(e,u):Gn),t=new t(r,m),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=m),t}function Ud(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Sl(e,t,r,i){var u=e.stateNode;u.props=r,u.state=e.memoizedState,u.refs={},dl(e);var m=t.contextType;typeof m=="object"&&m!==null?u.context=zt(m):(m=wt(t)?gr:pt.current,u.context=qr(e,m)),u.state=e.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(Cl(e,t,m,r),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&pi.enqueueReplaceState(u,u.state,null),ii(e,r,u,i),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function no(e,t){try{var r="",i=t;do r+=le(i),i=i.return;while(i);var u=r}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:t,stack:u,digest:null}}function El(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){wi||(wi=!0,Vl=i),jl(e,t)},r}function Yd(e,t,r){r=Cn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var u=t.value;r.payload=function(){return i(u)},r.callback=function(){jl(e,t)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(r.callback=function(){jl(e,t),typeof i!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var w=t.stack;this.componentDidCatch(t.value,{componentStack:w!==null?w:""})}),r}function qd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new zy;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(r)||(u.add(r),e=ev.bind(null,e,t,r),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qd(e,t,r,i,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cn(-1,1),t.tag=2,Kn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var $y=L.ReactCurrentOwner,bt=!1;function yt(e,t,r,i){t.child=e===null?gd(t,null,r,i):Zr(t,e.child,r,i)}function Xd(e,t,r,i,u){r=r.render;var m=t.ref;return eo(t,u),i=vl(e,t,r,i,m,u),r=xl(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Sn(e,t,u)):(Le&&r&&tl(t),t.flags|=1,yt(e,t,i,u),t.child)}function Zd(e,t,r,i,u){if(e===null){var m=r.type;return typeof m=="function"&&!Kl(m)&&m.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=m,Jd(e,t,m,i,u)):(e=Ei(r.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(m=e.child,(e.lanes&u)===0){var w=m.memoizedProps;if(r=r.compare,r=r!==null?r:Go,r(w,i)&&e.ref===t.ref)return Sn(e,t,u)}return t.flags|=1,e=tr(m,i),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,r,i,u){if(e!==null){var m=e.memoizedProps;if(Go(m,i)&&e.ref===t.ref)if(bt=!1,t.pendingProps=i=m,(e.lanes&u)!==0)(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,Sn(e,t,u)}return Tl(e,t,r,i,u)}function ef(e,t,r){var i=t.pendingProps,u=i.children,m=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(oo,Dt),Dt|=r;else{if((r&1073741824)===0)return e=m!==null?m.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(oo,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=m!==null?m.baseLanes:r,Re(oo,Dt),Dt|=i}else m!==null?(i=m.baseLanes|r,t.memoizedState=null):i=r,Re(oo,Dt),Dt|=i;return yt(e,t,u,r),t.child}function tf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,r,i,u){var m=wt(r)?gr:pt.current;return m=qr(t,m),eo(t,u),r=vl(e,t,r,i,m,u),i=xl(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Sn(e,t,u)):(Le&&i&&tl(t),t.flags|=1,yt(e,t,r,u),t.child)}function nf(e,t,r,i,u){if(wt(r)){var m=!0;Xs(t)}else m=!1;if(eo(t,u),t.stateNode===null)hi(e,t),Wd(t,r,i),Sl(t,r,i,u),i=!0;else if(e===null){var w=t.stateNode,E=t.memoizedProps;w.props=E;var I=w.context,B=r.contextType;typeof B=="object"&&B!==null?B=zt(B):(B=wt(r)?gr:pt.current,B=qr(t,B));var q=r.getDerivedStateFromProps,X=typeof q=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(E!==i||I!==B)&&Ud(t,w,i,B),qn=!1;var G=t.memoizedState;w.state=G,ii(t,i,w,u),I=t.memoizedState,E!==i||G!==I||xt.current||qn?(typeof q=="function"&&(Cl(t,r,q,i),I=t.memoizedState),(E=qn||Hd(t,r,E,i,G,I,B))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(t.flags|=4194308)):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=I),w.props=i,w.state=I,w.context=B,i=E):(typeof w.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{w=t.stateNode,vd(e,t),E=t.memoizedProps,B=t.type===t.elementType?E:Kt(t.type,E),w.props=B,X=t.pendingProps,G=w.context,I=r.contextType,typeof I=="object"&&I!==null?I=zt(I):(I=wt(r)?gr:pt.current,I=qr(t,I));var ue=r.getDerivedStateFromProps;(q=typeof ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(E!==X||G!==I)&&Ud(t,w,i,I),qn=!1,G=t.memoizedState,w.state=G,ii(t,i,w,u);var me=t.memoizedState;E!==X||G!==me||xt.current||qn?(typeof ue=="function"&&(Cl(t,r,ue,i),me=t.memoizedState),(B=qn||Hd(t,r,B,i,G,me,I)||!1)?(q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(i,me,I),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(i,me,I)),typeof w.componentDidUpdate=="function"&&(t.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof w.componentDidUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=me),w.props=i,w.state=me,w.context=I,i=B):(typeof w.componentDidUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return Il(e,t,r,i,m,u)}function Il(e,t,r,i,u,m){tf(e,t);var w=(t.flags&128)!==0;if(!i&&!w)return u&&ad(t,r,!1),Sn(e,t,m);i=t.stateNode,$y.current=t;var E=w&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&w?(t.child=Zr(t,e.child,null,m),t.child=Zr(t,null,E,m)):yt(e,t,E,m),t.memoizedState=i.state,u&&ad(t,r,!0),t.child}function rf(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),fl(e,t.containerInfo)}function of(e,t,r,i,u){return Xr(),sl(u),t.flags|=256,yt(e,t,r,i),t.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function sf(e,t,r){var i=t.pendingProps,u=Fe.current,m=!1,w=(t.flags&128)!==0,E;if((E=w)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(m=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Re(Fe,u&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(w=i.children,e=i.fallback,m?(i=t.mode,m=t.child,w={mode:"hidden",children:w},(i&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ji(w,i,0,null),e=Er(e,i,r,null),m.return=t,e.return=t,m.sibling=e,t.child=m,t.child.memoizedState=_l(r),t.memoizedState=Pl,e):Dl(t,w));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return Vy(e,t,w,i,E,u,r);if(m){m=i.fallback,w=t.mode,u=e.child,E=u.sibling;var I={mode:"hidden",children:i.children};return(w&1)===0&&t.child!==u?(i=t.child,i.childLanes=0,i.pendingProps=I,t.deletions=null):(i=tr(u,I),i.subtreeFlags=u.subtreeFlags&14680064),E!==null?m=tr(E,m):(m=Er(m,w,r,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,i=m,m=t.child,w=e.child.memoizedState,w=w===null?_l(r):{baseLanes:w.baseLanes|r,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=e.childLanes&~r,t.memoizedState=Pl,i}return m=e.child,e=m.sibling,i=tr(m,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Dl(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,r,i){return i!==null&&sl(i),Zr(t,e.child,null,r),e=Dl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vy(e,t,r,i,u,m,w){if(r)return t.flags&256?(t.flags&=-257,i=El(Error(o(422))),mi(e,t,w,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(m=i.fallback,u=t.mode,i=ji({mode:"visible",children:i.children},u,0,null),m=Er(m,u,w,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,(t.mode&1)!==0&&Zr(t,e.child,null,w),t.child.memoizedState=_l(w),t.memoizedState=Pl,m);if((t.mode&1)===0)return mi(e,t,w,null);if(u.data==="$!"){if(i=u.nextSibling&&u.nextSibling.dataset,i)var E=i.dgst;return i=E,m=Error(o(419)),i=El(m,i,void 0),mi(e,t,w,i)}if(E=(w&e.childLanes)!==0,bt||E){if(i=rt,i!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(i.suspendedLanes|w))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,Nn(e,u),Zt(i,e,u,-1))}return ql(),i=El(Error(o(421))),mi(e,t,w,i)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=tv.bind(null,e),u._reactRetry=t,null):(e=m.treeContext,_t=Wn(u.nextSibling),Pt=t,Le=!0,qt=null,e!==null&&(Bt[Ft++]=bn,Bt[Ft++]=kn,Bt[Ft++]=yr,bn=e.id,kn=e.overflow,yr=t),t=Dl(t,i.children),t.flags|=4096,t)}function af(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),cl(e.return,t,r)}function Rl(e,t,r,i,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=r,m.tailMode=u)}function lf(e,t,r){var i=t.pendingProps,u=i.revealOrder,m=i.tail;if(yt(e,t,i.children,r),i=Fe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&af(e,r,t);else if(e.tag===19)af(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Re(Fe,i),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(r=t.child,u=null;r!==null;)e=r.alternate,e!==null&&ai(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=t.child,t.child=null):(u=r.sibling,r.sibling=null),Rl(t,!1,u,r,m);break;case"backwards":for(r=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&ai(e)===null){t.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Rl(t,!0,r,null,m);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=tr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=tr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Hy(e,t,r){switch(t.tag){case 3:rf(t),Xr();break;case 5:bd(t);break;case 1:wt(t.type)&&Xs(t);break;case 4:fl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,u=t.memoizedProps.value;Re(ri,i._currentValue),i._currentValue=u;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Re(Fe,Fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?sf(e,t,r):(Re(Fe,Fe.current&1),e=Sn(e,t,r),e!==null?e.sibling:null);Re(Fe,Fe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return lf(e,t,r);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Re(Fe,Fe.current),i)break;return null;case 22:case 23:return t.lanes=0,ef(e,t,r)}return Sn(e,t,r)}var cf,Al,uf,df;cf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Al=function(){},uf=function(e,t,r,i){var u=e.memoizedProps;if(u!==i){e=t.stateNode,wr(sn.current);var m=null;switch(r){case"input":u=et(e,u),i=et(e,i),m=[];break;case"select":u=K({},u,{value:void 0}),i=K({},i,{value:void 0}),m=[];break;case"textarea":u=at(e,u),i=at(e,i),m=[];break;default:typeof u.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=qs)}Br(r,i);var w;r=null;for(B in u)if(!i.hasOwnProperty(B)&&u.hasOwnProperty(B)&&u[B]!=null)if(B==="style"){var E=u[B];for(w in E)E.hasOwnProperty(w)&&(r||(r={}),r[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(c.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in i){var I=i[B];if(E=u?.[B],i.hasOwnProperty(B)&&I!==E&&(I!=null||E!=null))if(B==="style")if(E){for(w in E)!E.hasOwnProperty(w)||I&&I.hasOwnProperty(w)||(r||(r={}),r[w]="");for(w in I)I.hasOwnProperty(w)&&E[w]!==I[w]&&(r||(r={}),r[w]=I[w])}else r||(m||(m=[]),m.push(B,r)),r=I;else B==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,E=E?E.__html:void 0,I!=null&&E!==I&&(m=m||[]).push(B,I)):B==="children"?typeof I!="string"&&typeof I!="number"||(m=m||[]).push(B,""+I):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(c.hasOwnProperty(B)?(I!=null&&B==="onScroll"&&Ae("scroll",e),m||E===I||(m=[])):(m=m||[]).push(B,I))}r&&(m=m||[]).push("style",r);var B=m;(t.updateQueue=B)&&(t.flags|=4)}},df=function(e,t,r,i){r!==i&&(t.flags|=4)};function as(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,i|=u.subtreeFlags&14680064,i|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Wy(e,t,r){var i=t.pendingProps;switch(nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return wt(t.type)&&Qs(),ht(t),null;case 3:return i=t.stateNode,to(),Me(xt),Me(pt),hl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qt!==null&&(Ul(qt),qt=null))),Al(e,t),ht(t),null;case 5:pl(t);var u=wr(ns.current);if(r=t.type,e!==null&&t.stateNode!=null)uf(e,t,r,i,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ht(t),null}if(e=wr(sn.current),ti(t)){i=t.stateNode,r=t.type;var m=t.memoizedProps;switch(i[on]=t,i[Xo]=m,e=(t.mode&1)!==0,r){case"dialog":Ae("cancel",i),Ae("close",i);break;case"iframe":case"object":case"embed":Ae("load",i);break;case"video":case"audio":for(u=0;u<qo.length;u++)Ae(qo[u],i);break;case"source":Ae("error",i);break;case"img":case"image":case"link":Ae("error",i),Ae("load",i);break;case"details":Ae("toggle",i);break;case"input":Wt(i,m),Ae("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!m.multiple},Ae("invalid",i);break;case"textarea":yn(i,m),Ae("invalid",i)}Br(r,m),u=null;for(var w in m)if(m.hasOwnProperty(w)){var E=m[w];w==="children"?typeof E=="string"?i.textContent!==E&&(m.suppressHydrationWarning!==!0&&Ys(i.textContent,E,e),u=["children",E]):typeof E=="number"&&i.textContent!==""+E&&(m.suppressHydrationWarning!==!0&&Ys(i.textContent,E,e),u=["children",""+E]):c.hasOwnProperty(w)&&E!=null&&w==="onScroll"&&Ae("scroll",i)}switch(r){case"input":we(i),To(i,m,!0);break;case"textarea":we(i),Ss(i);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(i.onclick=qs)}i=u,t.updateQueue=i,i!==null&&(t.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=w.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=w.createElement(r,{is:i.is}):(e=w.createElement(r),r==="select"&&(w=e,i.multiple?w.multiple=!0:i.size&&(w.size=i.size))):e=w.createElementNS(e,r),e[on]=t,e[Xo]=i,cf(e,t,!1,!1),t.stateNode=e;e:{switch(w=Po(r,i),r){case"dialog":Ae("cancel",e),Ae("close",e),u=i;break;case"iframe":case"object":case"embed":Ae("load",e),u=i;break;case"video":case"audio":for(u=0;u<qo.length;u++)Ae(qo[u],e);u=i;break;case"source":Ae("error",e),u=i;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),u=i;break;case"details":Ae("toggle",e),u=i;break;case"input":Wt(e,i),u=et(e,i),Ae("invalid",e);break;case"option":u=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},u=K({},i,{value:void 0}),Ae("invalid",e);break;case"textarea":yn(e,i),u=at(e,i),Ae("invalid",e);break;default:u=i}Br(r,u),E=u;for(m in E)if(E.hasOwnProperty(m)){var I=E[m];m==="style"?js(e,I):m==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&Lr(e,I)):m==="children"?typeof I=="string"?(r!=="textarea"||I!=="")&&Mt(e,I):typeof I=="number"&&Mt(e,""+I):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(c.hasOwnProperty(m)?I!=null&&m==="onScroll"&&Ae("scroll",e):I!=null&&D(e,m,I,w))}switch(r){case"input":we(e),To(e,i,!1);break;case"textarea":we(e),Ss(e);break;case"option":i.value!=null&&e.setAttribute("value",""+H(i.value));break;case"select":e.multiple=!!i.multiple,m=i.value,m!=null?_n(e,!!i.multiple,m,!1):i.defaultValue!=null&&_n(e,!!i.multiple,i.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=qs)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)df(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(r=wr(ns.current),wr(sn.current),ti(t)){if(i=t.stateNode,r=t.memoizedProps,i[on]=t,(m=i.nodeValue!==r)&&(e=Pt,e!==null))switch(e.tag){case 3:Ys(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(i.nodeValue,r,(e.mode&1)!==0)}m&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[on]=t,t.stateNode=i}return ht(t),null;case 13:if(Me(Fe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&_t!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pd(),Xr(),t.flags|=98560,m=!1;else if(m=ti(t),i!==null&&i.dehydrated!==null){if(e===null){if(!m)throw Error(o(318));if(m=t.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(o(317));m[on]=t}else Xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),m=!1}else qt!==null&&(Ul(qt),qt=null),m=!0;if(!m)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Ze===0&&(Ze=3):ql())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return to(),Al(e,t),e===null&&Ko(t.stateNode.containerInfo),ht(t),null;case 10:return ll(t.type._context),ht(t),null;case 17:return wt(t.type)&&Qs(),ht(t),null;case 19:if(Me(Fe),m=t.memoizedState,m===null)return ht(t),null;if(i=(t.flags&128)!==0,w=m.rendering,w===null)if(i)as(m,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(w=ai(e),w!==null){for(t.flags|=128,as(m,!1),i=w.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)m=r,e=i,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,e=w.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Re(Fe,Fe.current&1|2),t.child}e=e.sibling}m.tail!==null&&We()>so&&(t.flags|=128,i=!0,as(m,!1),t.lanes=4194304)}else{if(!i)if(e=ai(w),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),as(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Le)return ht(t),null}else 2*We()-m.renderingStartTime>so&&r!==1073741824&&(t.flags|=128,i=!0,as(m,!1),t.lanes=4194304);m.isBackwards?(w.sibling=t.child,t.child=w):(r=m.last,r!==null?r.sibling=w:t.child=w,m.last=w)}return m.tail!==null?(t=m.tail,m.rendering=t,m.tail=t.sibling,m.renderingStartTime=We(),t.sibling=null,r=Fe.current,Re(Fe,i?r&1|2:r&1),t):(ht(t),null);case 22:case 23:return Yl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Dt&1073741824)!==0&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Uy(e,t){switch(nl(t),t.tag){case 1:return wt(t.type)&&Qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return to(),Me(xt),Me(pt),hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return pl(t),null;case 13:if(Me(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Fe),null;case 4:return to(),null;case 10:return ll(t.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var gi=!1,gt=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ro(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Ve(e,t,i)}else r.current=null}function Ml(e,t,r){try{r()}catch(i){Ve(e,t,i)}}var ff=!1;function Yy(e,t){if(Ya=Os,e=Hu(),Fa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var u=i.anchorOffset,m=i.focusNode;i=i.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var w=0,E=-1,I=-1,B=0,q=0,X=e,G=null;t:for(;;){for(var ue;X!==r||u!==0&&X.nodeType!==3||(E=w+u),X!==m||i!==0&&X.nodeType!==3||(I=w+i),X.nodeType===3&&(w+=X.nodeValue.length),(ue=X.firstChild)!==null;)G=X,X=ue;for(;;){if(X===e)break t;if(G===r&&++B===u&&(E=w),G===m&&++q===i&&(I=w),(ue=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=ue}r=E===-1||I===-1?null:{start:E,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(qa={focusedElem:e,selectionRange:r},Os=!1,pe=t;pe!==null;)if(t=pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pe=e;else for(;pe!==null;){t=pe;try{var me=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,Ue=me.memoizedState,M=t.stateNode,_=M.getSnapshotBeforeUpdate(t.elementType===t.type?ve:Kt(t.type,ve),Ue);M.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var O=t.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(ne){Ve(t,t.return,ne)}if(e=t.sibling,e!==null){e.return=t.return,pe=e;break}pe=t.return}return me=ff,ff=!1,me}function ls(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var u=i=i.next;do{if((u.tag&e)===e){var m=u.destroy;u.destroy=void 0,m!==void 0&&Ml(t,r,m)}u=u.next}while(u!==i)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Ol(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[on],delete t[Xo],delete t[Za],delete t[Iy],delete t[Py])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=qs));else if(i!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}function Bl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Bl(e,t,r),e=e.sibling;e!==null;)Bl(e,t,r),e=e.sibling}var ct=null,Qt=!1;function Qn(e,t,r){for(r=r.child;r!==null;)gf(e,t,r),r=r.sibling}function gf(e,t,r){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ps,r)}catch{}switch(r.tag){case 5:gt||ro(r,t);case 6:var i=ct,u=Qt;ct=null,Qn(e,t,r),ct=i,Qt=u,ct!==null&&(Qt?(e=ct,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ct.removeChild(r.stateNode));break;case 18:ct!==null&&(Qt?(e=ct,r=r.stateNode,e.nodeType===8?Xa(e.parentNode,r):e.nodeType===1&&Xa(e,r),zo(e)):Xa(ct,r.stateNode));break;case 4:i=ct,u=Qt,ct=r.stateNode.containerInfo,Qt=!0,Qn(e,t,r),ct=i,Qt=u;break;case 0:case 11:case 14:case 15:if(!gt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){u=i=i.next;do{var m=u,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Ml(r,t,w),u=u.next}while(u!==i)}Qn(e,t,r);break;case 1:if(!gt&&(ro(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(E){Ve(r,t,E)}Qn(e,t,r);break;case 21:Qn(e,t,r);break;case 22:r.mode&1?(gt=(i=gt)||r.memoizedState!==null,Qn(e,t,r),gt=i):Qn(e,t,r);break;default:Qn(e,t,r)}}function yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gy),t.forEach(function(i){var u=nv.bind(null,e,i);r.has(i)||(r.add(i),i.then(u,u))})}}function Xt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var u=r[i];try{var m=e,w=t,E=w;e:for(;E!==null;){switch(E.tag){case 5:ct=E.stateNode,Qt=!1;break e;case 3:ct=E.stateNode.containerInfo,Qt=!0;break e;case 4:ct=E.stateNode.containerInfo,Qt=!0;break e}E=E.return}if(ct===null)throw Error(o(160));gf(m,w,u),ct=null,Qt=!1;var I=u.alternate;I!==null&&(I.return=null),u.return=null}catch(B){Ve(u,t,B)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}function vf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),ln(e),i&4){try{ls(3,e,e.return),yi(3,e)}catch(ve){Ve(e,e.return,ve)}try{ls(5,e,e.return)}catch(ve){Ve(e,e.return,ve)}}break;case 1:Xt(t,e),ln(e),i&512&&r!==null&&ro(r,r.return);break;case 5:if(Xt(t,e),ln(e),i&512&&r!==null&&ro(r,r.return),e.flags&32){var u=e.stateNode;try{Mt(u,"")}catch(ve){Ve(e,e.return,ve)}}if(i&4&&(u=e.stateNode,u!=null)){var m=e.memoizedProps,w=r!==null?r.memoizedProps:m,E=e.type,I=e.updateQueue;if(e.updateQueue=null,I!==null)try{E==="input"&&m.type==="radio"&&m.name!=null&&Ut(u,m),Po(E,w);var B=Po(E,m);for(w=0;w<I.length;w+=2){var q=I[w],X=I[w+1];q==="style"?js(u,X):q==="dangerouslySetInnerHTML"?Lr(u,X):q==="children"?Mt(u,X):D(u,q,X,B)}switch(E){case"input":it(u,m);break;case"textarea":Cs(u,m);break;case"select":var G=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var ue=m.value;ue!=null?_n(u,!!m.multiple,ue,!1):G!==!!m.multiple&&(m.defaultValue!=null?_n(u,!!m.multiple,m.defaultValue,!0):_n(u,!!m.multiple,m.multiple?[]:"",!1))}u[Xo]=m}catch(ve){Ve(e,e.return,ve)}}break;case 6:if(Xt(t,e),ln(e),i&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,m=e.memoizedProps;try{u.nodeValue=m}catch(ve){Ve(e,e.return,ve)}}break;case 3:if(Xt(t,e),ln(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(ve){Ve(e,e.return,ve)}break;case 4:Xt(t,e),ln(e);break;case 13:Xt(t,e),ln(e),u=e.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||($l=We())),i&4&&yf(e);break;case 22:if(q=r!==null&&r.memoizedState!==null,e.mode&1?(gt=(B=gt)||q,Xt(t,e),gt=B):Xt(t,e),ln(e),i&8192){if(B=e.memoizedState!==null,(e.stateNode.isHidden=B)&&!q&&(e.mode&1)!==0)for(pe=e,q=e.child;q!==null;){for(X=pe=q;pe!==null;){switch(G=pe,ue=G.child,G.tag){case 0:case 11:case 14:case 15:ls(4,G,G.return);break;case 1:ro(G,G.return);var me=G.stateNode;if(typeof me.componentWillUnmount=="function"){i=G,r=G.return;try{t=i,me.props=t.memoizedProps,me.state=t.memoizedState,me.componentWillUnmount()}catch(ve){Ve(i,r,ve)}}break;case 5:ro(G,G.return);break;case 22:if(G.memoizedState!==null){bf(X);continue}}ue!==null?(ue.return=G,pe=ue):bf(X)}q=q.sibling}e:for(q=null,X=e;;){if(X.tag===5){if(q===null){q=X;try{u=X.stateNode,B?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(E=X.stateNode,I=X.memoizedProps.style,w=I!=null&&I.hasOwnProperty("display")?I.display:null,E.style.display=Es("display",w))}catch(ve){Ve(e,e.return,ve)}}}else if(X.tag===6){if(q===null)try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(ve){Ve(e,e.return,ve)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;q===X&&(q=null),X=X.return}q===X&&(q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Xt(t,e),ln(e),i&4&&yf(e);break;case 21:break;default:Xt(t,e),ln(e)}}function ln(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mf(r)){var i=r;break e}r=r.return}throw Error(o(160))}switch(i.tag){case 5:var u=i.stateNode;i.flags&32&&(Mt(u,""),i.flags&=-33);var m=hf(e);Bl(e,m,u);break;case 3:case 4:var w=i.stateNode.containerInfo,E=hf(e);Ll(e,E,w);break;default:throw Error(o(161))}}catch(I){Ve(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qy(e,t,r){pe=e,xf(e)}function xf(e,t,r){for(var i=(e.mode&1)!==0;pe!==null;){var u=pe,m=u.child;if(u.tag===22&&i){var w=u.memoizedState!==null||gi;if(!w){var E=u.alternate,I=E!==null&&E.memoizedState!==null||gt;E=gi;var B=gt;if(gi=w,(gt=I)&&!B)for(pe=u;pe!==null;)w=pe,I=w.child,w.tag===22&&w.memoizedState!==null?kf(u):I!==null?(I.return=w,pe=I):kf(u);for(;m!==null;)pe=m,xf(m),m=m.sibling;pe=u,gi=E,gt=B}wf(e)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,pe=m):wf(e)}}function wf(e){for(;pe!==null;){var t=pe;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:gt||yi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gt)if(r===null)i.componentDidMount();else{var u=t.elementType===t.type?r.memoizedProps:Kt(t.type,r.memoizedProps);i.componentDidUpdate(u,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var m=t.updateQueue;m!==null&&wd(t,m,i);break;case 3:var w=t.updateQueue;if(w!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}wd(t,w,r)}break;case 5:var E=t.stateNode;if(r===null&&t.flags&4){r=E;var I=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&r.focus();break;case"img":I.src&&(r.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var B=t.alternate;if(B!==null){var q=B.memoizedState;if(q!==null){var X=q.dehydrated;X!==null&&zo(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}gt||t.flags&512&&Ol(t)}catch(G){Ve(t,t.return,G)}}if(t===e){pe=null;break}if(r=t.sibling,r!==null){r.return=t.return,pe=r;break}pe=t.return}}function bf(e){for(;pe!==null;){var t=pe;if(t===e){pe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,pe=r;break}pe=t.return}}function kf(e){for(;pe!==null;){var t=pe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{yi(4,t)}catch(I){Ve(t,r,I)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var u=t.return;try{i.componentDidMount()}catch(I){Ve(t,u,I)}}var m=t.return;try{Ol(t)}catch(I){Ve(t,m,I)}break;case 5:var w=t.return;try{Ol(t)}catch(I){Ve(t,w,I)}}}catch(I){Ve(t,t.return,I)}if(t===e){pe=null;break}var E=t.sibling;if(E!==null){E.return=t.return,pe=E;break}pe=t.return}}var Ky=Math.ceil,vi=L.ReactCurrentDispatcher,Fl=L.ReactCurrentOwner,Vt=L.ReactCurrentBatchConfig,Te=0,rt=null,qe=null,ut=0,Dt=0,oo=Un(0),Ze=0,cs=null,kr=0,xi=0,zl=0,us=null,kt=null,$l=0,so=1/0,En=null,wi=!1,Vl=null,Xn=null,bi=!1,Zn=null,ki=0,ds=0,Hl=null,Ni=-1,Ci=0;function vt(){return(Te&6)!==0?We():Ni!==-1?Ni:Ni=We()}function Jn(e){return(e.mode&1)===0?1:(Te&2)!==0&&ut!==0?ut&-ut:Dy.transition!==null?(Ci===0&&(Ci=mu()),Ci):(e=_e,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e)}function Zt(e,t,r,i){if(50<ds)throw ds=0,Hl=null,Error(o(185));Mo(e,r,i),((Te&2)===0||e!==rt)&&(e===rt&&((Te&2)===0&&(xi|=r),Ze===4&&er(e,ut)),Nt(e,i),r===1&&Te===0&&(t.mode&1)===0&&(so=We()+500,Zs&&Yn()))}function Nt(e,t){var r=e.callbackNode;Dg(e,t);var i=Rs(e,e===rt?ut:0);if(i===0)r!==null&&du(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&du(r),t===1)e.tag===0?_y(Cf.bind(null,e)):ld(Cf.bind(null,e)),jy(function(){(Te&6)===0&&Yn()}),r=null;else{switch(hu(i)){case 1:r=ka;break;case 4:r=fu;break;case 16:r=Is;break;case 536870912:r=pu;break;default:r=Is}r=Df(r,Nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Nf(e,t){if(Ni=-1,Ci=0,(Te&6)!==0)throw Error(o(327));var r=e.callbackNode;if(io()&&e.callbackNode!==r)return null;var i=Rs(e,e===rt?ut:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Si(e,i);else{t=i;var u=Te;Te|=2;var m=Ef();(rt!==e||ut!==t)&&(En=null,so=We()+500,Cr(e,t));do try{Zy();break}catch(E){Sf(e,E)}while(!0);al(),vi.current=m,Te=u,qe!==null?t=0:(rt=null,ut=0,t=Ze)}if(t!==0){if(t===2&&(u=Na(e),u!==0&&(i=u,t=Wl(e,u))),t===1)throw r=cs,Cr(e,0),er(e,i),Nt(e,We()),r;if(t===6)er(e,i);else{if(u=e.current.alternate,(i&30)===0&&!Qy(u)&&(t=Si(e,i),t===2&&(m=Na(e),m!==0&&(i=m,t=Wl(e,m))),t===1))throw r=cs,Cr(e,0),er(e,i),Nt(e,We()),r;switch(e.finishedWork=u,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:Sr(e,kt,En);break;case 3:if(er(e,i),(i&130023424)===i&&(t=$l+500-We(),10<t)){if(Rs(e,0)!==0)break;if(u=e.suspendedLanes,(u&i)!==i){vt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Qa(Sr.bind(null,e,kt,En),t);break}Sr(e,kt,En);break;case 4:if(er(e,i),(i&4194240)===i)break;for(t=e.eventTimes,u=-1;0<i;){var w=31-Gt(i);m=1<<w,w=t[w],w>u&&(u=w),i&=~m}if(i=u,i=We()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ky(i/1960))-i,10<i){e.timeoutHandle=Qa(Sr.bind(null,e,kt,En),i);break}Sr(e,kt,En);break;case 5:Sr(e,kt,En);break;default:throw Error(o(329))}}}return Nt(e,We()),e.callbackNode===r?Nf.bind(null,e):null}function Wl(e,t){var r=us;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=Si(e,t),e!==2&&(t=kt,kt=r,t!==null&&Ul(t)),e}function Ul(e){kt===null?kt=e:kt.push.apply(kt,e)}function Qy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var u=r[i],m=u.getSnapshot;u=u.value;try{if(!Yt(m(),u))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~zl,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Gt(t),i=1<<r;e[r]=-1,t&=~i}}function Cf(e){if((Te&6)!==0)throw Error(o(327));io();var t=Rs(e,0);if((t&1)===0)return Nt(e,We()),null;var r=Si(e,t);if(e.tag!==0&&r===2){var i=Na(e);i!==0&&(t=i,r=Wl(e,i))}if(r===1)throw r=cs,Cr(e,0),er(e,t),Nt(e,We()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sr(e,kt,En),Nt(e,We()),null}function Gl(e,t){var r=Te;Te|=1;try{return e(t)}finally{Te=r,Te===0&&(so=We()+500,Zs&&Yn())}}function Nr(e){Zn!==null&&Zn.tag===0&&(Te&6)===0&&io();var t=Te;Te|=1;var r=Vt.transition,i=_e;try{if(Vt.transition=null,_e=1,e)return e()}finally{_e=i,Vt.transition=r,Te=t,(Te&6)===0&&Yn()}}function Yl(){Dt=oo.current,Me(oo)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ey(r)),qe!==null)for(r=qe.return;r!==null;){var i=r;switch(nl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qs();break;case 3:to(),Me(xt),Me(pt),hl();break;case 5:pl(i);break;case 4:to();break;case 13:Me(Fe);break;case 19:Me(Fe);break;case 10:ll(i.type._context);break;case 22:case 23:Yl()}r=r.return}if(rt=e,qe=e=tr(e.current,null),ut=Dt=t,Ze=0,cs=null,zl=xi=kr=0,kt=us=null,xr!==null){for(t=0;t<xr.length;t++)if(r=xr[t],i=r.interleaved,i!==null){r.interleaved=null;var u=i.next,m=r.pending;if(m!==null){var w=m.next;m.next=u,i.next=w}r.pending=i}xr=null}return e}function Sf(e,t){do{var r=qe;try{if(al(),li.current=fi,ci){for(var i=ze.memoizedState;i!==null;){var u=i.queue;u!==null&&(u.pending=null),i=i.next}ci=!1}if(br=0,nt=Xe=ze=null,rs=!1,os=0,Fl.current=null,r===null||r.return===null){Ze=1,cs=t,qe=null;break}e:{var m=e,w=r.return,E=r,I=t;if(t=ut,E.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var B=I,q=E,X=q.tag;if((q.mode&1)===0&&(X===0||X===11||X===15)){var G=q.alternate;G?(q.updateQueue=G.updateQueue,q.memoizedState=G.memoizedState,q.lanes=G.lanes):(q.updateQueue=null,q.memoizedState=null)}var ue=Kd(w);if(ue!==null){ue.flags&=-257,Qd(ue,w,E,m,t),ue.mode&1&&qd(m,B,t),t=ue,I=B;var me=t.updateQueue;if(me===null){var ve=new Set;ve.add(I),t.updateQueue=ve}else me.add(I);break e}else{if((t&1)===0){qd(m,B,t),ql();break e}I=Error(o(426))}}else if(Le&&E.mode&1){var Ue=Kd(w);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Qd(Ue,w,E,m,t),sl(no(I,E));break e}}m=I=no(I,E),Ze!==4&&(Ze=2),us===null?us=[m]:us.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,t&=-t,m.lanes|=t;var M=Gd(m,I,t);xd(m,M);break e;case 1:E=I;var _=m.type,O=m.stateNode;if((m.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Xn===null||!Xn.has(O)))){m.flags|=65536,t&=-t,m.lanes|=t;var ne=Yd(m,E,t);xd(m,ne);break e}}m=m.return}while(m!==null)}Tf(r)}catch(xe){t=xe,qe===r&&r!==null&&(qe=r=r.return);continue}break}while(!0)}function Ef(){var e=vi.current;return vi.current=fi,e===null?fi:e}function ql(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),rt===null||(kr&268435455)===0&&(xi&268435455)===0||er(rt,ut)}function Si(e,t){var r=Te;Te|=2;var i=Ef();(rt!==e||ut!==t)&&(En=null,Cr(e,t));do try{Xy();break}catch(u){Sf(e,u)}while(!0);if(al(),Te=r,vi.current=i,qe!==null)throw Error(o(261));return rt=null,ut=0,Ze}function Xy(){for(;qe!==null;)jf(qe)}function Zy(){for(;qe!==null&&!Ng();)jf(qe)}function jf(e){var t=_f(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?Tf(e):qe=t,Fl.current=null}function Tf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Wy(r,t,Dt),r!==null){qe=r;return}}else{if(r=Uy(r,t),r!==null){r.flags&=32767,qe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ze===0&&(Ze=5)}function Sr(e,t,r){var i=_e,u=Vt.transition;try{Vt.transition=null,_e=1,Jy(e,t,r,i)}finally{Vt.transition=u,_e=i}return null}function Jy(e,t,r,i){do io();while(Zn!==null);if((Te&6)!==0)throw Error(o(327));r=e.finishedWork;var u=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var m=r.lanes|r.childLanes;if(Rg(e,m),e===rt&&(qe=rt=null,ut=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||bi||(bi=!0,Df(Is,function(){return io(),null})),m=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||m){m=Vt.transition,Vt.transition=null;var w=_e;_e=1;var E=Te;Te|=4,Fl.current=null,Yy(e,r),vf(r,e),xy(qa),Os=!!Ya,qa=Ya=null,e.current=r,qy(r),Cg(),Te=E,_e=w,Vt.transition=m}else e.current=r;if(bi&&(bi=!1,Zn=e,ki=u),m=e.pendingLanes,m===0&&(Xn=null),jg(r.stateNode),Nt(e,We()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)u=t[r],i(u.value,{componentStack:u.stack,digest:u.digest});if(wi)throw wi=!1,e=Vl,Vl=null,e;return(ki&1)!==0&&e.tag!==0&&io(),m=e.pendingLanes,(m&1)!==0?e===Hl?ds++:(ds=0,Hl=e):ds=0,Yn(),null}function io(){if(Zn!==null){var e=hu(ki),t=Vt.transition,r=_e;try{if(Vt.transition=null,_e=16>e?16:e,Zn===null)var i=!1;else{if(e=Zn,Zn=null,ki=0,(Te&6)!==0)throw Error(o(331));var u=Te;for(Te|=4,pe=e.current;pe!==null;){var m=pe,w=m.child;if((pe.flags&16)!==0){var E=m.deletions;if(E!==null){for(var I=0;I<E.length;I++){var B=E[I];for(pe=B;pe!==null;){var q=pe;switch(q.tag){case 0:case 11:case 15:ls(8,q,m)}var X=q.child;if(X!==null)X.return=q,pe=X;else for(;pe!==null;){q=pe;var G=q.sibling,ue=q.return;if(pf(q),q===B){pe=null;break}if(G!==null){G.return=ue,pe=G;break}pe=ue}}}var me=m.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var Ue=ve.sibling;ve.sibling=null,ve=Ue}while(ve!==null)}}pe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,pe=w;else e:for(;pe!==null;){if(m=pe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ls(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,pe=M;break e}pe=m.return}}var _=e.current;for(pe=_;pe!==null;){w=pe;var O=w.child;if((w.subtreeFlags&2064)!==0&&O!==null)O.return=w,pe=O;else e:for(w=_;pe!==null;){if(E=pe,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:yi(9,E)}}catch(xe){Ve(E,E.return,xe)}if(E===w){pe=null;break e}var ne=E.sibling;if(ne!==null){ne.return=E.return,pe=ne;break e}pe=E.return}}if(Te=u,Yn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ps,e)}catch{}i=!0}return i}finally{_e=r,Vt.transition=t}}return!1}function If(e,t,r){t=no(r,t),t=Gd(e,t,1),e=Kn(e,t,1),t=vt(),e!==null&&(Mo(e,1,t),Nt(e,t))}function Ve(e,t,r){if(e.tag===3)If(e,e,r);else for(;t!==null;){if(t.tag===3){If(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))){e=no(r,e),e=Yd(t,e,1),t=Kn(t,e,1),e=vt(),t!==null&&(Mo(t,1,e),Nt(t,e));break}}t=t.return}}function ev(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&r,rt===e&&(ut&r)===r&&(Ze===4||Ze===3&&(ut&130023424)===ut&&500>We()-$l?Cr(e,0):zl|=r),Nt(e,t)}function Pf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ds,Ds<<=1,(Ds&130023424)===0&&(Ds=4194304)));var r=vt();e=Nn(e,t),e!==null&&(Mo(e,t,r),Nt(e,r))}function tv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Pf(e,r)}function nv(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),Pf(e,r)}var _f;_f=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)bt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return bt=!1,Hy(e,t,r);bt=(e.flags&131072)!==0}else bt=!1,Le&&(t.flags&1048576)!==0&&cd(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;hi(e,t),e=t.pendingProps;var u=qr(t,pt.current);eo(t,r),u=vl(null,t,i,e,u,r);var m=xl();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(i)?(m=!0,Xs(t)):m=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,dl(t),u.updater=pi,t.stateNode=u,u._reactInternals=t,Sl(t,i,e,r),t=Il(null,t,i,!0,m,r)):(t.tag=0,Le&&m&&tl(t),yt(null,t,u,r),t=t.child),t;case 16:i=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,u=i._init,i=u(i._payload),t.type=i,u=t.tag=ov(i),e=Kt(i,e),u){case 0:t=Tl(null,t,i,e,r);break e;case 1:t=nf(null,t,i,e,r);break e;case 11:t=Xd(null,t,i,e,r);break e;case 14:t=Zd(null,t,i,Kt(i.type,e),r);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Kt(i,u),Tl(e,t,i,u,r);case 1:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Kt(i,u),nf(e,t,i,u,r);case 3:e:{if(rf(t),e===null)throw Error(o(387));i=t.pendingProps,m=t.memoizedState,u=m.element,vd(e,t),ii(t,i,null,r);var w=t.memoizedState;if(i=w.element,m.isDehydrated)if(m={element:i,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},t.updateQueue.baseState=m,t.memoizedState=m,t.flags&256){u=no(Error(o(423)),t),t=of(e,t,i,r,u);break e}else if(i!==u){u=no(Error(o(424)),t),t=of(e,t,i,r,u);break e}else for(_t=Wn(t.stateNode.containerInfo.firstChild),Pt=t,Le=!0,qt=null,r=gd(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xr(),i===u){t=Sn(e,t,r);break e}yt(e,t,i,r)}t=t.child}return t;case 5:return bd(t),e===null&&ol(t),i=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,w=u.children,Ka(i,u)?w=null:m!==null&&Ka(i,m)&&(t.flags|=32),tf(e,t),yt(e,t,w,r),t.child;case 6:return e===null&&ol(t),null;case 13:return sf(e,t,r);case 4:return fl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Zr(t,null,i,r):yt(e,t,i,r),t.child;case 11:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Kt(i,u),Xd(e,t,i,u,r);case 7:return yt(e,t,t.pendingProps,r),t.child;case 8:return yt(e,t,t.pendingProps.children,r),t.child;case 12:return yt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,u=t.pendingProps,m=t.memoizedProps,w=u.value,Re(ri,i._currentValue),i._currentValue=w,m!==null)if(Yt(m.value,w)){if(m.children===u.children&&!xt.current){t=Sn(e,t,r);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var E=m.dependencies;if(E!==null){w=m.child;for(var I=E.firstContext;I!==null;){if(I.context===i){if(m.tag===1){I=Cn(-1,r&-r),I.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var q=B.pending;q===null?I.next=I:(I.next=q.next,q.next=I),B.pending=I}}m.lanes|=r,I=m.alternate,I!==null&&(I.lanes|=r),cl(m.return,r,t),E.lanes|=r;break}I=I.next}}else if(m.tag===10)w=m.type===t.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(o(341));w.lanes|=r,E=w.alternate,E!==null&&(E.lanes|=r),cl(w,r,t),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===t){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}yt(e,t,u.children,r),t=t.child}return t;case 9:return u=t.type,i=t.pendingProps.children,eo(t,r),u=zt(u),i=i(u),t.flags|=1,yt(e,t,i,r),t.child;case 14:return i=t.type,u=Kt(i,t.pendingProps),u=Kt(i.type,u),Zd(e,t,i,u,r);case 15:return Jd(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Kt(i,u),hi(e,t),t.tag=1,wt(i)?(e=!0,Xs(t)):e=!1,eo(t,r),Wd(t,i,u),Sl(t,i,u,r),Il(null,t,i,!0,e,r);case 19:return lf(e,t,r);case 22:return ef(e,t,r)}throw Error(o(156,t.tag))};function Df(e,t){return uu(e,t)}function rv(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,r,i){return new rv(e,t,r,i)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ov(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===se)return 14}return 2}function tr(e,t){var r=e.alternate;return r===null?(r=Ht(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ei(e,t,r,i,u,m){var w=2;if(i=e,typeof e=="function")Kl(e)&&(w=1);else if(typeof e=="string")w=5;else e:switch(e){case F:return Er(r.children,u,m,t);case z:w=8,u|=8;break;case U:return e=Ht(12,r,t,u|2),e.elementType=U,e.lanes=m,e;case oe:return e=Ht(13,r,t,u),e.elementType=oe,e.lanes=m,e;case de:return e=Ht(19,r,t,u),e.elementType=de,e.lanes=m,e;case ie:return ji(r,u,m,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:w=10;break e;case ye:w=9;break e;case ae:w=11;break e;case se:w=14;break e;case Z:w=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Ht(w,r,t,u),t.elementType=e,t.type=i,t.lanes=m,t}function Er(e,t,r,i){return e=Ht(7,e,i,t),e.lanes=r,e}function ji(e,t,r,i){return e=Ht(22,e,i,t),e.elementType=ie,e.lanes=r,e.stateNode={isHidden:!1},e}function Ql(e,t,r){return e=Ht(6,e,null,t),e.lanes=r,e}function Xl(e,t,r){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sv(e,t,r,i,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=i,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Zl(e,t,r,i,u,m,w,E,I){return e=new sv(e,t,r,E,I),t===1?(t=1,m===!0&&(t|=8)):t=0,m=Ht(3,null,null,t),e.current=m,m.stateNode=e,m.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(m),e}function iv(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Rf(e){if(!e)return Gn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(wt(r))return id(e,r,t)}return t}function Af(e,t,r,i,u,m,w,E,I){return e=Zl(r,i,!0,e,u,m,w,E,I),e.context=Rf(null),r=e.current,i=vt(),u=Jn(r),m=Cn(i,u),m.callback=t??null,Kn(r,m,u),e.current.lanes=u,Mo(e,u,i),Nt(e,i),e}function Ti(e,t,r,i){var u=t.current,m=vt(),w=Jn(u);return r=Rf(r),t.context===null?t.context=r:t.pendingContext=r,t=Cn(m,w),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Kn(u,t,w),e!==null&&(Zt(e,u,w,m),si(e,u,w)),w}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Jl(e,t){Mf(e,t),(e=e.alternate)&&Mf(e,t)}function av(){return null}var Of=typeof reportError=="function"?reportError:function(e){console.error(e)};function ec(e){this._internalRoot=e}Pi.prototype.render=ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ti(e,t,null,null)},Pi.prototype.unmount=ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nr(function(){Ti(null,e,null,null)}),t[xn]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=vu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$n.length&&t!==0&&t<$n[r].priority;r++);$n.splice(r,0,e),r===0&&bu(e)}};function tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lf(){}function lv(e,t,r,i,u){if(u){if(typeof i=="function"){var m=i;i=function(){var B=Ii(w);m.call(B)}}var w=Af(t,i,e,0,null,!1,!1,"",Lf);return e._reactRootContainer=w,e[xn]=w.current,Ko(e.nodeType===8?e.parentNode:e),Nr(),w}for(;u=e.lastChild;)e.removeChild(u);if(typeof i=="function"){var E=i;i=function(){var B=Ii(I);E.call(B)}}var I=Zl(e,0,!1,null,null,!1,!1,"",Lf);return e._reactRootContainer=I,e[xn]=I.current,Ko(e.nodeType===8?e.parentNode:e),Nr(function(){Ti(t,I,r,i)}),I}function Di(e,t,r,i,u){var m=r._reactRootContainer;if(m){var w=m;if(typeof u=="function"){var E=u;u=function(){var I=Ii(w);E.call(I)}}Ti(t,w,e,u)}else w=lv(r,t,e,u,i);return Ii(w)}gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ao(t.pendingLanes);r!==0&&(Sa(t,r|1),Nt(t,We()),(Te&6)===0&&(so=We()+500,Yn()))}break;case 13:Nr(function(){var i=Nn(e,1);if(i!==null){var u=vt();Zt(i,e,1,u)}}),Jl(e,1)}},Ea=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var r=vt();Zt(t,e,134217728,r)}Jl(e,134217728)}},yu=function(e){if(e.tag===13){var t=Jn(e),r=Nn(e,t);if(r!==null){var i=vt();Zt(r,e,t,i)}Jl(e,t)}},vu=function(){return _e},xu=function(e,t){var r=_e;try{return _e=e,t()}finally{_e=r}},_o=function(e,t,r){switch(t){case"input":if(it(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var u=Ks(i);if(!u)throw Error(o(90));Ce(i),it(i,u)}}}break;case"textarea":Cs(e,r);break;case"select":t=r.value,t!=null&&_n(e,!!r.multiple,t,!1)}},Qe=Gl,ft=Nr;var cv={usingClientEntryPoint:!1,Events:[Zo,Gr,Ks,Se,He,Gl]},fs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uv={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Ps=Ri.inject(uv),rn=Ri}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv,Ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tc(t))throw Error(o(200));return iv(e,t,null,r)},Ct.createRoot=function(e,t){if(!tc(e))throw Error(o(299));var r=!1,i="",u=Of;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Zl(e,1,!1,null,null,r,!1,i,u),e[xn]=t.current,Ko(e.nodeType===8?e.parentNode:e),new ec(t)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return Nr(e)},Ct.hydrate=function(e,t,r){if(!_i(t))throw Error(o(200));return Di(null,e,t,!0,r)},Ct.hydrateRoot=function(e,t,r){if(!tc(e))throw Error(o(405));var i=r!=null&&r.hydratedSources||null,u=!1,m="",w=Of;if(r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(m=r.identifierPrefix),r.onRecoverableError!==void 0&&(w=r.onRecoverableError)),t=Af(t,null,e,1,r??null,u,!1,m,w),e[xn]=t.current,Ko(e),i)for(e=0;e<i.length;e++)r=i[e],u=r._getVersion,u=u(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,u]:t.mutableSourceEagerHydrationData.push(r,u);return new Pi(t)},Ct.render=function(e,t,r){if(!_i(t))throw Error(o(200));return Di(null,e,t,!1,r)},Ct.unmountComponentAtNode=function(e){if(!_i(e))throw Error(o(40));return e._reactRootContainer?(Nr(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1},Ct.unstable_batchedUpdates=Gl,Ct.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!_i(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Di(e,t,r,!1,i)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Uf;function Lp(){if(Uf)return oc.exports;Uf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),oc.exports=vv(),oc.exports}var Gf;function xv(){if(Gf)return Ai;Gf=1;var n=Lp();return Ai.createRoot=n.createRoot,Ai.hydrateRoot=n.hydrateRoot,Ai}var wv=xv(),v=Ac();const re=Op(v),Mc=fv({__proto__:null,default:re},[v]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kv=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,l)=>l?l.toUpperCase():o.toLowerCase()),Yf=n=>{const s=kv(n);return s.charAt(0).toUpperCase()+s.slice(1)},Bp=(...n)=>n.filter((s,o,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=v.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:f,...p},h)=>v.createElement("svg",{ref:h,...Nv,width:s,height:s,stroke:n,strokeWidth:l?Number(o)*24/Number(s):o,className:Bp("lucide",c),...p},[...f.map(([g,x])=>v.createElement(g,x)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(n,s)=>{const o=v.forwardRef(({className:l,...c},d)=>v.createElement(Cv,{ref:d,iconNode:s,className:Bp(`lucide-${bv(Yf(n))}`,`lucide-${n}`,l),...c}));return o.displayName=Yf(n),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xi=Oe("arrow-left",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Zi=Oe("arrow-right",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Tv=Oe("building",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Oc=Oe("calendar",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],_v=Oe("chart-column",Pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lc=Oe("check",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ir=Oe("chevron-down",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fp=Oe("chevron-right",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ov=Oe("chevron-up",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Bv=Oe("cookie",Lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],zv=Oe("credit-card",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],zp=Oe("database",$v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hv=Oe("eye",Vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Uv=Oe("file-text",Wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],qf=Oe("globe",Gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],$p=Oe("mail",Yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Kv=Oe("menu",qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Xv=Oe("message-square",Qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Jv=Oe("search",Zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],t0=Oe("send",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vp=Oe("settings",n0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]],o0=Oe("tags",r0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],i0=Oe("target",s0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Or=Oe("x",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Hp=Oe("zoom-in",l0),st=({children:n,variant:s="primary",size:o="md",className:l="",onClick:c,href:d,target:f,rel:p})=>{const h={primary:"btn-primary",secondary:"btn-secondary",outline:"btn-outline-dark"},g={sm:"btn-sm",md:"",lg:"btn-lg"},x=`btn ${h[s]||"btn-primary"} ${g[o]||""} ${l}`.trim(),y=s==="primary"&&o==="md"?{padding:"12px 32px",fontSize:"1.1rem",fontWeight:500}:void 0;return d!=null?a.jsx("a",{href:d,className:x,style:y,target:f,rel:p,onClick:c,children:n}):a.jsx("button",{className:x,onClick:c,style:y,children:n})},xc=[{code:"tc",label:"繁體中文",shortLabel:"繁中"},{code:"en",label:"English",shortLabel:"EN"},{code:"ja",label:"日本語",shortLabel:"日本語"},{code:"zh-hans",label:"简体中文",shortLabel:"简中"}],Wp={nav:{home:"首頁",features:"功能特色",blog:"部落格",pricing:"方案價格",helpCenter:"幫助中心",login:"登入",tryForFree:"預約展示"},hero:{title:"INVITI 讓您將寶貴的時間花在關係維護，而非重複的複製貼上",subtitle:"為活動主辦方設計的公關名單管理系統",tryForFree:"免費試用",bookDemo:"預約展示"},features:{sectionTitle:"產品功能",card1Title:"活動管理／場次管理",card1Description:"一站整合活動名單與寄信流程。",card2Title:"一鍵邀請與追蹤出席狀況",card2Description:"一鍵寄信、即時掌握貴賓出席狀況。",card3Title:"貴賓資料庫",card3Description:"集中管理貴賓資料，累積關係資產。",card4Title:"角色與權限",card4Description:"協作、權限控管、稽核軌跡。",card5Title:"郵件模板",card5Description:"多版本管理，快速套用變數。",viewDetails:"查看詳情",viewAllFeatures:"查看所有功能"},blog:{sectionTitle:"最新文章",readMore:"閱讀更多",viewAll:"查看全部",post1Meta:"客戶故事 • 5 分鐘閱讀",post1Title:"Agency X 如何優化 50+ 場活動",post1Description:"了解一家領先的公關公司如何使用 INVITI 將邀請時間減少 70%。",post2Meta:"產品更新 • 3 分鐘閱讀",post2Title:"推出客製品牌功能",post2Description:"全新白標功能讓您使用品牌識別自訂邀請函。",post3Meta:"產業觀點 • 7 分鐘閱讀",post3Title:"活動管理的未來",post3Description:"2025 年及未來數位活動協調的趨勢與預測。"},blogPage:{title:"部落格",subtitle:"探索產品更新、客戶故事與產業觀點",searchPlaceholder:"搜尋文章…",allPosts:"最新",productUpdates:"產品更新",caseStudies:"客戶故事",industryInsights:"產業觀點",events:"活動花絮",by:"作者",readTime:"分鐘閱讀",previousPost:"上一篇",nextPost:"下一篇",backToBlog:"返回部落格"},pricing:{sectionTitle:"方案價格",freeTitle:"免費版",freePrice:"NT$0",freeDescription:"開始探索 INVITI 的核心功能",basicTitle:"入門版",basicPrice:"NT$600",basicDescription:"適合小型活動與初創團隊",basicBadge:"適合個人工作者",proTitle:"專業版",proPrice:"NT$3,000",proDescription:"適合成長中的企業與定期活動",proBadge:"適合團隊",enterpriseTitle:"企業版",enterprisePrice:"Custom",enterpriseDescription:"為大型組織量身打造的解決方案",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / Year",guestDatabaseLimit:"貴賓資料庫人數",monthlyEmails:"每月寄送郵件數量",emailTemplates:"信件模板",eventsAndSessions:"活動／場次",userLimit:"使用者上限"},helpCenter:{sectionTitle:"幫助中心",searchPlaceholder:"搜尋幫助文章...",browseTopics:"瀏覽主題",gettingStarted:"入門指南",accountManagement:"帳號管理",eventCreation:"建立活動",guestManagement:"賓客管理",technicalSupport:"技術支援",billing:"帳務問題"},helpCenterPage:{title:"我們能如何幫助您？",searchPlaceholder:"搜尋任何內容...",popularTopics:"熱門主題",stillNeedHelp:"仍需要協助？",emailUs:"發送電子郵件",joinCommunity:"加入社群",talkToSupport:"聯絡客服",gettingStarted:"開始使用",productOverview:"產品概覽與角色",invitationsRSVP:"邀請與回覆確認",sessionsEvents:"場次與活動",guestDatabase:"賓客資料庫",pricingBilling:"方案與帳務",settingsPermissions:"設定與權限",troubleshooting:"疑難排解",topic1Title:"發送您的第一封邀請",topic1Description:"了解如何建立和發送您的第一封活動邀請函",topic2Title:"追蹤 RSVP 回覆",topic2Description:"即時監控賓客回覆並管理參與人數",topic3Title:"管理賓客標籤",topic3Description:"使用標籤分類和整理您的賓客資料",topic4Title:"匯入 CSV 檔案",topic4Description:"快速批次匯入賓客名單與聯絡資訊",topic5Title:"自訂邀請函範本",topic5Description:"打造符合品牌形象的精美邀請函",topic6Title:"設定活動提醒",topic6Description:"自動化提醒確保賓客不會錯過您的活動",tagBilling:"帳務",tagDataSources:"資料來源",tagRestoring:"還原內容",tagMembers:"新增成員"},footer:{company:"公司",resources:"資源",invitiFor:"INVITI，適用於",aboutUs:"關於我們",termsAndPrivacy:"條款和隱私權",helpCenter:"幫助中心",pricing:"定價",blog:"部落格",enterprise:"企業",teams:"團隊",individuals:"個人",copyright:"© {year} 藝氣股份有限公司 Inviti All rights reserved."},demoBooking:{title:"預約展示",subtitle:"我們會安排一場約30分鐘的線上會議，了解貴單位目前使用的公關名單管理工具、流程與痛點。",ctaButton:"在 Google 行事曆預約時間",coverTitle:"會議內容",card1Title:"了解現況",card1Description:"貴單位目前使用的公關名單管理工具、流程以及活動規模、頻率等",card2Title:"釐清痛點",card2Description:"目前使用工具或流程上遇到的問題",card3Title:"下一步",card3Description:"若確認貴單位的使用情境符合，我們將會為您開通帳號並協助創建第一個活動",agendaTitle:"30 分鐘議程",agendaTimeline:"0–5′ 需求簡述｜5–15′ 現況/痛點｜15–25′ 功能示範｜25–30′ Q&A/下一步",getTitle:"會後收穫",get1:"客製化流程建議",get2:"功能對應清單",get3:"試用與下一步",privacyNote:"只做需求理解，不會存取或保留你的名單資料。",bookingTitle:"立即預約",fallbackEmail:"若行事曆沒有合適時段，請來信 contact@inviti.vip"},banner:{message:"🎉 新功能上線！立即體驗 INVITI 的智能賓客管理系統",cta:"了解更多"},cookieBanner:{message:"我們使用 Cookie 來增強功能、分析流量並個人化內容。請參閱我們的",cookiePolicy:"Cookie 政策",acceptAll:"接受全部",managePreferences:"管理偏好",rejectNonEssential:"拒絕非必要"},payment:{title:"升級至所選方案",subtitle:"完成付款以啟用方案功能",close:"關閉",planSummaryTitle:"方案摘要",monthly:"月付",yearly:"年付",seats:"座席數（使用者數）",contactSalesForSeats:"Contact sales",accountBillingTitle:"帳號與帳單資訊",email:"Email",emailPlaceholder:"your@email.com",companyName:"公司名稱（選填）",companyNamePlaceholder:"輸入公司名稱",taxId:"統編 / VAT（選填）",taxIdPlaceholder:"輸入統一編號",billingAddress:"帳單地址",street:"街道地址",streetPlaceholder:"輸入街道地址",city:"城市",cityPlaceholder:"輸入城市",postalCode:"郵遞區號",postalCodePlaceholder:"輸入郵遞區號",country:"國家",countryPlaceholder:"選擇國家",paymentMethodTitle:"付款方式",creditCard:"信用卡",bankTransfer:"Bank transfer / 電匯",cardNumber:"卡號",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"到期日",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"持卡人姓名",nameOnCardPlaceholder:"輸入持卡人姓名",verificationTitle:"身份驗證（選填）",sendCode:"傳送驗證碼至 Email",couponTitle:"優惠券（選填）",couponPlaceholder:"輸入優惠券代碼",apply:"Apply",agreeTerms:"我同意",termsLink:"服務條款",privacyLink:"隱私權政策",autoRenewNote:"到期後將自動續約，可於任何時候取消。",totalAmount:"應付金額",effectiveImmediately:"立即生效，按比例計算。",upgradeNow:"立即升級",contactSales:"Contact sales",backToPricing:"返回定價",freePlan:"免費版",basicPlan:"入門版",proPlan:"專業版",enterprisePlan:"企業版"},about:{title:"關於我們",subtitle:"",section1Body:"藝氣股份有限公司 ARTSIE INC. 以成為「中文娛樂的整合者」為目標，打造下一個世代多元且有層次的娛樂場景。",section2Body:"從現場喜劇、綜藝節目到 DJ 派對，藝氣與各領域的指標品牌締結策略合作，一起擴大華語娛樂市場，讓台灣成為中文娛樂的重要基地。",section3Body:"同時，我們也專注於開發專屬娛樂產業的後勤管理工具，例如報帳系統、合約管理系統、公關名單管理系統等，期望成為中文娛樂市場最可靠的後勤夥伴。"},terms:{title:"隱私權政策",subtitle:""},enterpriseInquiry:{title:"聯繫我們了解企業方案",close:"關閉",companyName:"公司名稱",companyNamePlaceholder:"",companyWebsite:"公司網站 / 社群",companyWebsitePlaceholder:"選填：www.example.com 或社群帳號",contactName:"聯絡人姓名",contactNamePlaceholder:"請輸入您的姓名",jobTitle:"職稱（必填）",jobTitlePlaceholder:"",email:"Email",emailPlaceholder:"your@email.com",phone:"聯絡電話（必填）",phonePlaceholder:"+886 912-345-678",currentTool:"貴單位目前使用的公關名單管理工具（必填）",currentToolPlaceholder:"請選擇",currentToolOptions:{spreadsheet:"Google表單、試算表",crm:"CRM系統",selfBuilt:"自建系統",other:"其他",none:"無"},currentToolOther:"若選擇「其他」，請簡述工具名稱或作法",currentToolOtherPlaceholder:"請輸入說明",selectOption:"請選擇一個選項",enterDescription:"請輸入說明",eventsPerQuarter:"每季活動數量",eventsPerQuarterOptions:{range1:"0–1 場",range2:"2–5 場",range3:"6–10 場",range4:"10 場以上"},guestListSize:"單場貴賓名單規模",guestListSizeOptions:{small:"少於 100 人",medium:"100–500 人",large:"500–2,000 人",extraLarge:"2,000 人以上"},integrationNeeds:"是否需要與既有系統整合",integrationOptions:{ticketing:"售票系統",crm:"CRM 系統",email:"Email 平台",other:"其他"},consent:"我同意將以上資訊用於後續聯繫與方案評估，並寄送一份副本至我的 Email。",consentError:"請同意資訊使用條款",submit:"送出需求",submitting:"送出中...",orEmail:"或直接來信 contact@inviti.vip",required:"此欄位為必填",invalidEmail:"請輸入有效的 Email 地址",successMessage:"已送出，我們將儘快與您聯繫。",viewInbox:"查看收件匣"}},c0={nav:{home:"Home",features:"Features",blog:"Blog",pricing:"Pricing",helpCenter:"Help Center",login:"Log in",tryForFree:"Book a Demo"},hero:{title:"Simplify Your Guest Invitations with INVITI",subtitle:"A complete PR guest list management system for event organizers",tryForFree:"Book a Demo",bookDemo:"Book a Demo"},features:{sectionTitle:"Product Features",card1Title:"Event & Session Management",card1Description:"Multi-session setup, time and venue all in one place, linked with email variables.",card2Title:"Automated Invitations & Tracking",card2Description:"Batch sending, reply mapping, real-time status updates.",card3Title:"Centralized Guest Database",card3Description:"Tags, deduplication, cross-event reuse.",card4Title:"Roles & Permissions",card4Description:"Collaboration, access control, audit trails.",card5Title:"Email Templates",card5Description:"Multi-version management, quick variable application.",viewDetails:"View Details",viewAllFeatures:"View All Features"},blog:{sectionTitle:"Latest from Our Blog",readMore:"Read More",viewAll:"View All",post1Meta:"Case Study • 5 min read",post1Title:"How Agency X Streamlined 50+ Events",post1Description:"Learn how a leading PR agency reduced invitation time by 70% using INVITI.",post2Meta:"Product Update • 3 min read",post2Title:"Introducing Custom Branding",post2Description:"New white-label features let you customize invitations with your brand identity.",post3Meta:"Industry Insight • 7 min read",post3Title:"The Future of Event Management",post3Description:"Trends and predictions for digital event coordination in 2025 and beyond."},blogPage:{title:"Blogs",subtitle:"Explore product updates, customer stories, and industry insights",searchPlaceholder:"Search articles…",allPosts:"All",productUpdates:"Product Updates",caseStudies:"Case Studies",industryInsights:"Industry Insights",events:"Events",by:"By",readTime:"min read",previousPost:"Previous",nextPost:"Next",backToBlog:"Back to Blog"},pricing:{sectionTitle:"Pricing Plans",freeTitle:"Free",freePrice:"$0",freeDescription:"Start exploring INVITI core features",basicTitle:"Basic",basicPrice:"$20",basicDescription:"Perfect for small events and startups",basicBadge:"For individuals",proTitle:"Pro",proPrice:"$100",proDescription:"For growing businesses and regular events",proBadge:"For teams",enterpriseTitle:"Enterprise",enterprisePrice:"Custom",enterpriseDescription:"Tailored solutions for large organizations",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / Year",guestDatabaseLimit:"Guest database",monthlyEmails:"Monthly email sends",emailTemplates:"Email templates",eventsAndSessions:"Events / Sessions",userLimit:"User limit"},helpCenter:{sectionTitle:"Help Center",searchPlaceholder:"Search help articles...",browseTopics:"Browse Topics",gettingStarted:"Getting Started",accountManagement:"Account Management",eventCreation:"Event Creation",guestManagement:"Guest Management",technicalSupport:"Technical Support",billing:"Billing"},helpCenterPage:{title:"How can we help?",searchPlaceholder:"Search for anything...",popularTopics:"Popular topics",stillNeedHelp:"Still need help?",emailUs:"Email us",joinCommunity:"Join our community",talkToSupport:"Talk to support",gettingStarted:"Getting started",productOverview:"Product overview & roles",invitationsRSVP:"Invitations & RSVP",sessionsEvents:"Sessions & events",guestDatabase:"Guest database",pricingBilling:"Pricing & billing",settingsPermissions:"Settings & permissions",troubleshooting:"Troubleshooting",topic1Title:"Send your first invitation",topic1Description:"Learn how to create and send your first event invitation",topic2Title:"Track RSVPs",topic2Description:"Monitor guest responses and manage attendance in real-time",topic3Title:"Manage guest tags",topic3Description:"Use tags to categorize and organize your guest data",topic4Title:"Import a CSV",topic4Description:"Quickly bulk import guest lists and contact information",topic5Title:"Customize invitation templates",topic5Description:"Create beautiful invitations that match your brand",topic6Title:"Set up event reminders",topic6Description:"Automate reminders to ensure guests don't miss your event",tagBilling:"Billing",tagDataSources:"Data sources",tagRestoring:"Restoring content",tagMembers:"Adding members"},footer:{company:"Company",resources:"Resources",invitiFor:"INVITI for",aboutUs:"About Us",termsAndPrivacy:"Terms & Privacy",helpCenter:"Help Center",pricing:"Pricing",blog:"Blog",enterprise:"Enterprise",teams:"Teams",individuals:"Individuals",copyright:"© {year} Inviti All rights reserved."},demoBooking:{title:"Book a Demo",subtitle:"We'll set up a ~30-minute online meeting to understand your PR list tools, workflows, and pain points, then demonstrate how INVITI can help.",ctaButton:"Book on Google Calendar",coverTitle:"What We'll Cover",card1Title:"Current Setup",card1Description:"Your existing list tools, collaboration methods, email workflows",card2Title:"Pain Points",card2Description:"Data duplication, response tracking, handoff issues between team members",card3Title:"Product Demo",card3Description:"See invitations, RSVP tracking, and database management in action",agendaTitle:"30-Minute Agenda",agendaTimeline:"0-5' Overview | 5-15' Current State/Pain Points | 15-25' Feature Demo | 25-30' Q&A/Next Steps",getTitle:"What You'll Get",get1:"Customized workflow recommendations",get2:"Feature compatibility checklist",get3:"Trial access and next steps",privacyNote:"We only discuss requirements—no access to or storage of your guest data.",bookingTitle:"Book Now",fallbackEmail:"If no suitable time slots, email us at contact@inviti.vip"},banner:{message:"🎉 New Feature Launch! Experience INVITI's Smart Guest Management System",cta:"Learn More"},cookieBanner:{message:"We use cookies to enhance functionality, analyze traffic, and personalize content. See our",cookiePolicy:"Cookie Policy",acceptAll:"Accept all",managePreferences:"Manage preferences",rejectNonEssential:"Reject non-essential"},payment:{title:"Upgrade to Selected Plan",subtitle:"Complete payment to activate plan features",close:"Close",planSummaryTitle:"Plan Summary",monthly:"Monthly",yearly:"Yearly",seats:"Seats (Users)",contactSalesForSeats:"Contact sales",accountBillingTitle:"Account & Billing Information",email:"Email",emailPlaceholder:"your@email.com",companyName:"Company Name (Optional)",companyNamePlaceholder:"Enter company name",taxId:"Tax ID / VAT (Optional)",taxIdPlaceholder:"Enter tax ID",billingAddress:"Billing Address",street:"Street Address",streetPlaceholder:"Enter street address",city:"City",cityPlaceholder:"Enter city",postalCode:"Postal Code",postalCodePlaceholder:"Enter postal code",country:"Country",countryPlaceholder:"Select country",paymentMethodTitle:"Payment Method",creditCard:"Credit Card",bankTransfer:"Bank Transfer",cardNumber:"Card Number",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"Expiration",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"Name on Card",nameOnCardPlaceholder:"Enter cardholder name",verificationTitle:"Verification (Optional)",sendCode:"Send verification code to Email",couponTitle:"Coupon (Optional)",couponPlaceholder:"Enter coupon code",apply:"Apply",agreeTerms:"I agree to the",termsLink:"Terms of Service",privacyLink:"Privacy Policy",autoRenewNote:"Auto-renews after expiration. Cancel anytime.",totalAmount:"Total Amount",effectiveImmediately:"Effective immediately, prorated.",upgradeNow:"Upgrade Now",contactSales:"Contact sales",backToPricing:"Back to Pricing",freePlan:"Free",basicPlan:"Basic",proPlan:"Pro",enterprisePlan:"Enterprise"},about:{title:"About Us",subtitle:"",section1Body:'ARTSIE INC. aims to become the "Integrator of Chinese Entertainment," creating diverse and multi-layered entertainment experiences for the next generation.',section2Body:"From live comedy and variety shows to DJ parties, ARTSIE forms strategic partnerships with leading brands across various fields to expand the Chinese-language entertainment market, making Taiwan an important hub for Chinese entertainment.",section3Body:"At the same time, we focus on developing specialized backend management tools for the entertainment industry, such as expense management systems, contract management systems, and PR guest list management systems, with the goal of becoming the most reliable backend partner in the Chinese entertainment market."},terms:{title:"Privacy Policy",subtitle:""},enterpriseInquiry:{title:"Contact Us for Enterprise Plan",close:"Close",companyName:"Company Name",companyNamePlaceholder:"",companyWebsite:"Company Website / Social",companyWebsitePlaceholder:"Optional: www.example.com or social handle",contactName:"Contact Name",contactNamePlaceholder:"Enter your name",jobTitle:"Job Title (Required)",jobTitlePlaceholder:"",email:"Email",emailPlaceholder:"your@email.com",phone:"Phone Number (Required)",phonePlaceholder:"+1 234-567-8900",currentTool:"Current PR Guest List Management Tool (Required)",currentToolPlaceholder:"Please select",currentToolOptions:{spreadsheet:"Google Forms / Spreadsheets",crm:"CRM System",selfBuilt:"Self-built System",other:"Other",none:"None"},currentToolOther:'If you selected "Other", please describe the tool or method',currentToolOtherPlaceholder:"Please enter description",selectOption:"Please select an option",enterDescription:"Please enter description",eventsPerQuarter:"Events per Quarter",eventsPerQuarterOptions:{range1:"0–1 events",range2:"2–5 events",range3:"6–10 events",range4:"10+ events"},guestListSize:"Guest List Size per Event",guestListSizeOptions:{small:"Under 100",medium:"100–500",large:"500–2,000",extraLarge:"2,000+"},integrationNeeds:"Integration Requirements",integrationOptions:{ticketing:"Ticketing System",crm:"CRM System",email:"Email Platform",other:"Other"},consent:"I agree to the use of this information for follow-up contact and plan evaluation, and to receive a copy via email.",consentError:"Please agree to the terms",submit:"Submit Inquiry",submitting:"Submitting...",orEmail:"Or email us at contact@inviti.vip",required:"This field is required",invalidEmail:"Please enter a valid email address",successMessage:"Submitted! We'll get back to you soon.",viewInbox:"View Inbox"}},u0={nav:{home:"ホーム",features:"機能",blog:"ブログ",pricing:"料金",helpCenter:"ヘルプセンター",login:"ログイン",tryForFree:"デモを予約"},hero:{title:"INVITI でゲスト招待を簡素化",subtitle:"イベント主催者のための完全な PR ゲストリスト管理システム",tryForFree:"デモを予約",bookDemo:"デモを予約"},features:{sectionTitle:"製品機能",card1Title:"イベント・セッション管理",card1Description:"マルチセッション設定、時間と会場を一元管理、メール変数と連動。",card2Title:"自動招待状と追跡",card2Description:"一括送信、返信対応、リアルタイムステータス更新。",card3Title:"一元化されたゲストデータベース",card3Description:"タグ、重複排除、イベント間再利用。",card4Title:"役割と権限",card4Description:"コラボレーション、アクセス制御、監査証跡。",card5Title:"メールテンプレート",card5Description:"マルチバージョン管理、変数の迅速な適用。",viewDetails:"詳細を見る",viewAllFeatures:"すべての機能を見る"},blog:{sectionTitle:"ブログの最新情報",readMore:"続きを読む",viewAll:"すべて表示",post1Meta:"事例研究 • 5 分で読む",post1Title:"Agency X が 50 以上のイベントを効率化",post1Description:"大手 PR エージェンシーが INVITI を使用して招待時間を 70% 削減した方法をご覧ください。",post2Meta:"製品アップデート • 3 分で読む",post2Title:"カスタムブランディングの導入",post2Description:"新しいホワイトラベル機能で、ブランドアイデンティティに合わせて招待状をカスタマイズできます。",post3Meta:"業界インサイト • 7 分で読む",post3Title:"イベント管理の未来",post3Description:"2025 年以降のデジタルイベントコーディネーションのトレンドと予測。"},blogPage:{title:"Blogs",subtitle:"製品アップデート、顧客事例、業界インサイトを探索",searchPlaceholder:"記事を検索…",allPosts:"すべて",productUpdates:"製品アップデート",caseStudies:"顧客事例",industryInsights:"業界インサイト",events:"イベント",by:"作成者",readTime:"分で読む",previousPost:"前へ",nextPost:"次へ",backToBlog:"ブログに戻る"},pricing:{sectionTitle:"料金プラン",freeTitle:"無料版",freePrice:"¥0",freeDescription:"INVITIの主要機能を体験",basicTitle:"ベーシック",basicPrice:"¥2,200",basicDescription:"小規模イベントやスタートアップに最適",basicBadge:"個人向け",proTitle:"プロ",proPrice:"¥11,000",proDescription:"成長企業や定期イベント向け",proBadge:"チーム向け",enterpriseTitle:"エンタープライズ",enterprisePrice:"カスタム",enterpriseDescription:"大規模組織向けカスタマイズソリューション",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / 年",guestDatabaseLimit:"ゲストデータベース",monthlyEmails:"月間メール送信数",emailTemplates:"メールテンプレート",eventsAndSessions:"イベント／セッション",userLimit:"ユーザー上限"},helpCenter:{sectionTitle:"ヘルプセンター",searchPlaceholder:"ヘルプ記事を検索...",browseTopics:"トピックを閲覧",gettingStarted:"はじめに",accountManagement:"アカウント管理",eventCreation:"イベント作成",guestManagement:"ゲスト管理",technicalSupport:"技術サポート",billing:"請求"},helpCenterPage:{title:"どのようにお手伝いできますか？",searchPlaceholder:"何でも検索...",popularTopics:"人気のトピック",stillNeedHelp:"まだヘルプが必要ですか？",emailUs:"メールでお問い合わせ",joinCommunity:"コミュニティに参加",talkToSupport:"サポートに連絡",gettingStarted:"はじめに",productOverview:"製品概要と役割",invitationsRSVP:"招待状と出欠確認",sessionsEvents:"セッションとイベント",guestDatabase:"ゲストデータベース",pricingBilling:"料金と請求",settingsPermissions:"設定と権限",troubleshooting:"トラブルシューティング",topic1Title:"最初の招待状を送信",topic1Description:"イベント招待状の作成と送信方法を学ぶ",topic2Title:"出欠確認を追跡",topic2Description:"ゲストの返信をリアルタイムで監視・管理",topic3Title:"ゲストタグを管理",topic3Description:"タグを使用してゲストデータを分類・整理",topic4Title:"CSVをインポート",topic4Description:"ゲストリストと連絡先情報を一括インポート",topic5Title:"招待状テンプレートをカスタマイズ",topic5Description:"ブランドに合った美しい招待状を作成",topic6Title:"イベントリマインダーを設定",topic6Description:"自動リマインダーでゲストの出席を確保",tagBilling:"請求",tagDataSources:"データソース",tagRestoring:"コンテンツの復元",tagMembers:"メンバーの追加"},footer:{company:"会社",resources:"リソース",invitiFor:"INVITIの対象",aboutUs:"会社概要",termsAndPrivacy:"利用規約とプライバシー",helpCenter:"ヘルプセンター",pricing:"料金",blog:"ブログ",enterprise:"企業",teams:"チーム",individuals:"個人",copyright:"© {year} Inviti All rights reserved."},demoBooking:{title:"デモを予約",subtitle:"約30分のオンラインミーティングを設定しPRリストツール、ワークフロー、課題を把握した後、INVITIがどのように支援できるかをデモンストレーションします。",ctaButton:"Google カレンダーで予約",coverTitle:"会議内容",card1Title:"現状の把握",card1Description:"現在お使いのリストツール、協業方法、メール送信フロー",card2Title:"課題の特定",card2Description:"データ重複、返信追跡、チーム間の引継ぎなどの問題",card3Title:"製品デモ",card3Description:"招待状、RSVP追跡、データベース管理を実際の状況で確認",agendaTitle:"30分間のアジェンダ",agendaTimeline:"0-5分 概要説明｜5-15分 現状/課題｜15-25分 機能デモ｜25-30分 質疑応答/次のステップ",getTitle:"得られるもの",get1:"カスタマイズされたワークフロー提案",get2:"機能対応チェックリスト",get3:"トライアルアクセスと次のステップ",privacyNote:"要件の把握のみを行います。ゲストデータへのアクセスや保存は行いません。",bookingTitle:"今すぐ予約",fallbackEmail:"適切な時間帯がない場合は、contact@inviti.vip までメールでご連絡ください"},banner:{message:"🎉 新機能リリース！INVITI のスマートゲスト管理システムを体験",cta:"詳細を見る"},cookieBanner:{message:"機能の強化、トラフィックの分析、コンテンツのパーソナライズのために Cookie を使用しています。詳細については、",cookiePolicy:"Cookie ポリシー",acceptAll:"すべて承認",managePreferences:"設定を管理",rejectNonEssential:"必須以外を拒否"},payment:{title:"選択したプランにアップグレード",subtitle:"お支払いを完了してプラン機能を有効化",close:"閉じる",planSummaryTitle:"プラン概要",monthly:"月払い",yearly:"年払い",seats:"座席数（ユーザー数）",contactSalesForSeats:"営業担当にお問い合わせ",accountBillingTitle:"アカウント・請求情報",email:"メールアドレス",emailPlaceholder:"your@email.com",companyName:"会社名（任意）",companyNamePlaceholder:"会社名を入力",taxId:"税番号 / VAT（任意）",taxIdPlaceholder:"税番号を入力",billingAddress:"請求先住所",street:"番地",streetPlaceholder:"番地を入力",city:"市区町村",cityPlaceholder:"市区町村を入力",postalCode:"郵便番号",postalCodePlaceholder:"郵便番号を入力",country:"国",countryPlaceholder:"国を選択",paymentMethodTitle:"お支払い方法",creditCard:"クレジットカード",bankTransfer:"銀行振込",cardNumber:"カード番号",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"有効期限",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"カード名義",nameOnCardPlaceholder:"カード名義を入力",verificationTitle:"本人確認（任意）",sendCode:"メールに確認コードを送信",couponTitle:"クーポン（任意）",couponPlaceholder:"クーポンコードを入力",apply:"適用",agreeTerms:"同意します",termsLink:"利用規約",privacyLink:"プライバシーポリシー",autoRenewNote:"有効期限後に自動更新されます。いつでもキャンセル可能。",totalAmount:"合計金額",effectiveImmediately:"即時有効、日割り計算。",upgradeNow:"今すぐアップグレード",contactSales:"営業担当にお問い合わせ",backToPricing:"プランに戻る",freePlan:"無料版",basicPlan:"ベーシック",proPlan:"プロ",enterprisePlan:"エンタープライズ"},about:{title:"私たちについて",subtitle:"",section1Body:"藝氣股份有限公司 ARTSIE INC. は「中国語エンターテインメントの統合者」となることを目標に、次世代の多様で多層的なエンターテインメントシーンを創造しています。",section2Body:"ライブコメディ、バラエティ番組から DJ パーティーまで、藝氣は各分野のリーディングブランドと戦略的パートナーシップを結び、中国語エンターテインメント市場を拡大し、台湾を中国語エンターテインメントの重要な拠点にしています。",section3Body:"同時に、経費管理システム、契約管理システム、PR ゲストリスト管理システムなど、エンターテインメント産業専用のバックエンド管理ツールの開発にも注力し、中国語エンターテインメント市場で最も信頼できるバックエンドパートナーとなることを目指しています。"},terms:{title:"プライバシーポリシー",subtitle:""},enterpriseInquiry:{title:"エンタープライズプランについてお問い合わせ",close:"閉じる",companyName:"会社名",companyNamePlaceholder:"",companyWebsite:"会社のウェブサイト / SNS",companyWebsitePlaceholder:"任意：www.example.com または SNS アカウント",contactName:"担当者名",contactNamePlaceholder:"お名前を入力してください",jobTitle:"役職（必須）",jobTitlePlaceholder:"",email:"メールアドレス",emailPlaceholder:"your@email.com",phone:"電話番号（必須）",phonePlaceholder:"+81 90-1234-5678",currentTool:"貴社が現在使用している PR ゲストリスト管理ツール（必須）",currentToolPlaceholder:"選択してください",currentToolOptions:{spreadsheet:"Google フォーム・スプレッドシート",crm:"CRM システム",selfBuilt:"自社開発システム",other:"その他",none:"なし"},currentToolOther:"「その他」を選択した場合、ツール名または方法を簡単に説明してください",currentToolOtherPlaceholder:"説明を入力してください",selectOption:"オプションを選択してください",enterDescription:"説明を入力してください",eventsPerQuarter:"四半期ごとのイベント数",eventsPerQuarterOptions:{range1:"0–1 回",range2:"2–5 回",range3:"6–10 回",range4:"10 回以上"},guestListSize:"イベントごとのゲストリスト規模",guestListSizeOptions:{small:"100 人未満",medium:"100–500 人",large:"500–2,000 人",extraLarge:"2,000 人以上"},integrationNeeds:"既存システムとの連携の必要性",integrationOptions:{ticketing:"チケットシステム",crm:"CRM システム",email:"メールプラットフォーム",other:"その他"},consent:"上記の情報を後続の連絡とプラン評価に使用し、メールでコピーを受け取ることに同意します。",consentError:"規約に同意してください",submit:"お問い合わせ送信",submitting:"送信中...",orEmail:"または contact@inviti.vip までメールで",required:"この項目は必須です",invalidEmail:"有効なメールアドレスを入力してください",successMessage:"送信されました！すぐにご連絡いたします。",viewInbox:"受信トレイを見る"}},d0={nav:{home:"首页",features:"功能特色",blog:"博客",pricing:"方案价格",helpCenter:"帮助中心",login:"登录",tryForFree:"预约展示"},hero:{title:"INVITI 让您将宝贵的时间花在关系维护，而非重复的复制贴上",subtitle:"为活动主办方设计的公关名单管理系统",tryForFree:"免费试用",bookDemo:"预约展示"},features:{sectionTitle:"产品功能",card1Title:"活动管理／场次管理",card1Description:"一站整合活动名单与寄信流程。",card2Title:"一键邀请与追踪出席状况",card2Description:"一键寄信、即时掌握贵宾出席状况。",card3Title:"贵宾资料库",card3Description:"集中管理贵宾资料，累积关系资产。",card4Title:"角色与权限",card4Description:"协作、权限控管、稽核轨迹。",card5Title:"邮件模板",card5Description:"多版本管理，快速套用变量。",viewDetails:"查看详情",viewAllFeatures:"查看所有功能"},blog:{sectionTitle:"最新文章",readMore:"阅读更多",viewAll:"查看全部",post1Meta:"客户故事 • 5 分钟阅读",post1Title:"Agency X 如何优化 50+ 场活动",post1Description:"了解一家领先的公关公司如何使用 INVITI 将邀请时间减少 70%。",post2Meta:"产品更新 • 3 分钟阅读",post2Title:"推出定制品牌功能",post2Description:"全新白标功能让您使用品牌识别自定义邀请函。",post3Meta:"产业观点 • 7 分钟阅读",post3Title:"活动管理的未来",post3Description:"2025 年及未来数字活动协调的趋势与预测。"},blogPage:{title:"Blogs",subtitle:"探索产品更新、客户故事与产业观点",searchPlaceholder:"搜索文章…",allPosts:"最新",productUpdates:"产品更新",caseStudies:"客户故事",industryInsights:"产业观点",events:"活动花絮",by:"作者",readTime:"分钟阅读",previousPost:"上一篇",nextPost:"下一篇",backToBlog:"返回博客"},pricing:{sectionTitle:"方案价格",freeTitle:"免费版",freePrice:"¥0",freeDescription:"开始探索 INVITI 的核心功能",basicTitle:"入门版",basicPrice:"¥99",basicDescription:"适合小型活动与初创团队",basicBadge:"适合个人工作者",proTitle:"专业版",proPrice:"¥499",proDescription:"适合成长中的企业与定期活动",proBadge:"适合团队",enterpriseTitle:"企业版",enterprisePrice:"Custom",enterpriseDescription:"为大型组织量身打造的解决方案",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / 年",guestDatabaseLimit:"宾客资料库人数",monthlyEmails:"每月发送邮件数量",emailTemplates:"邮件模板",eventsAndSessions:"活动／场次",userLimit:"用户上限"},helpCenter:{sectionTitle:"帮助中心",searchPlaceholder:"搜索帮助文章...",browseTopics:"浏览主题",gettingStarted:"入门指南",accountManagement:"账号管理",eventCreation:"创建活动",guestManagement:"宾客管理",technicalSupport:"技术支持",billing:"账务问题"},helpCenterPage:{title:"我们能如何帮助您？",searchPlaceholder:"搜索任何内容...",popularTopics:"热门主题",stillNeedHelp:"仍需要协助？",emailUs:"发送电子邮件",joinCommunity:"加入社群",talkToSupport:"联系客服",gettingStarted:"开始使用",productOverview:"产品概览与角色",invitationsRSVP:"邀请与回复确认",sessionsEvents:"场次与活动",guestDatabase:"宾客资料库",pricingBilling:"方案与账务",settingsPermissions:"设置与权限",troubleshooting:"疑难排解",topic1Title:"发送您的第一封邀请",topic1Description:"了解如何创建和发送您的第一封活动邀请函",topic2Title:"追踪 RSVP 回复",topic2Description:"实时监控宾客回复并管理参与人数",topic3Title:"管理宾客标签",topic3Description:"使用标签分类和整理您的宾客资料",topic4Title:"导入 CSV 文件",topic4Description:"快速批次导入宾客名单与联系信息",topic5Title:"自定义邀请函模板",topic5Description:"打造符合品牌形象的精美邀请函",topic6Title:"设置活动提醒",topic6Description:"自动化提醒确保宾客不会错过您的活动",tagBilling:"账务",tagDataSources:"数据来源",tagRestoring:"还原内容",tagMembers:"添加成员"},footer:{company:"公司",resources:"资源",invitiFor:"INVITI，适用于",aboutUs:"关于我们",termsAndPrivacy:"条款和隐私权",helpCenter:"帮助中心",pricing:"定价",blog:"博客",enterprise:"企业",teams:"团队",individuals:"个人",copyright:"© {year} 艺气股份有限公司 Inviti All rights reserved."},demoBooking:{title:"预约展示",subtitle:"我们会安排一场约 30 分钟的线上会议，先了解你的公关名单工具、流程与痛点，再示范 INVITI 如何解决。",ctaButton:"在 Google 日历预约时间",coverTitle:"会议内容",card1Title:"了解现况",card1Description:"你目前使用的名单工具、协作方式、寄信流程",card2Title:"厘清痛点",card2Description:"数据重复、回复追踪、跨同事交接等问题",card3Title:"产品示范",card3Description:"用你的情境展示：邀请、RSVP 追踪、数据库管理",agendaTitle:"30 分钟议程",agendaTimeline:"0–5′ 需求简述｜5–15′ 现况/痛点｜15–25′ 功能示范｜25–30′ Q&A/下一步",getTitle:"会后收获",get1:"客制化流程建议",get2:"功能对应清单",get3:"试用与下一步",privacyNote:"只做需求理解，不会存取或保留你的名单数据。",bookingTitle:"立即预约",fallbackEmail:"若日历没有合适时段，请来信 contact@inviti.vip"},banner:{message:"🎉 新功能上线！立即体验 INVITI 的智能宾客管理系统",cta:"了解更多"},cookieBanner:{message:"我们使用 Cookie 来增强功能、分析流量并个性化内容。请参阅我们的",cookiePolicy:"Cookie 政策",acceptAll:"接受全部",managePreferences:"管理偏好",rejectNonEssential:"拒绝非必要"},payment:{title:"升级至所选方案",subtitle:"完成付款以启用方案功能",close:"关闭",planSummaryTitle:"方案摘要",monthly:"月付",yearly:"年付",seats:"座席数（使用者数）",contactSalesForSeats:"Contact sales",accountBillingTitle:"账号与账单信息",email:"Email",emailPlaceholder:"your@email.com",companyName:"公司名称（选填）",companyNamePlaceholder:"输入公司名称",taxId:"统编 / VAT（选填）",taxIdPlaceholder:"输入统一编号",billingAddress:"账单地址",street:"街道地址",streetPlaceholder:"输入街道地址",city:"城市",cityPlaceholder:"输入城市",postalCode:"邮递区号",postalCodePlaceholder:"输入邮递区号",country:"国家",countryPlaceholder:"选择国家",paymentMethodTitle:"付款方式",creditCard:"信用卡",bankTransfer:"Bank transfer / 电汇",cardNumber:"卡号",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"到期日",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"持卡人姓名",nameOnCardPlaceholder:"输入持卡人姓名",verificationTitle:"身份验证（选填）",sendCode:"传送验证码至 Email",couponTitle:"优惠券（选填）",couponPlaceholder:"输入优惠券代码",apply:"Apply",agreeTerms:"我同意",termsLink:"服务条款",privacyLink:"隐私权政策",autoRenewNote:"到期后将自动续约，可于任何时候取消。",totalAmount:"应付金额",effectiveImmediately:"立即生效，按比例计算。",upgradeNow:"立即升级",contactSales:"Contact sales",backToPricing:"返回定价",freePlan:"免费版",basicPlan:"入门版",proPlan:"专业版",enterprisePlan:"企业版"},about:{title:"关于我们",subtitle:"",section1Body:"艺气股份有限公司 ARTSIE INC. 以成为「中文娱乐的整合者」为目标，打造下一个世代多元且有层次的娱乐场景。",section2Body:"从现场喜剧、综艺节目到 DJ 派对，艺气与各领域的指标品牌缔结策略合作，一起扩大华语娱乐市场，让台湾成为中文娱乐的重要基地。",section3Body:"同时，我们也专注于开发专属娱乐产业的后勤管理工具，例如报帐系统、合约管理系统、公关名单管理系统等，期望成为中文娱乐市场最可靠的后勤伙伴。"},terms:{title:"隐私权政策",subtitle:""},enterpriseInquiry:{title:"联系我们了解企业方案",close:"关闭",companyName:"公司名称",companyNamePlaceholder:"",companyWebsite:"公司网站 / 社交媒体",companyWebsitePlaceholder:"选填：www.example.com 或社交账号",contactName:"联络人姓名",contactNamePlaceholder:"请输入您的姓名",jobTitle:"职称（必填）",jobTitlePlaceholder:"",email:"Email",emailPlaceholder:"your@email.com",phone:"联络电话（必填）",phonePlaceholder:"+86 138-1234-5678",currentTool:"贵单位目前使用的公关名单管理工具（必填）",currentToolPlaceholder:"请选择",currentToolOptions:{spreadsheet:"Google表单、电子表格",crm:"CRM系统",selfBuilt:"自建系统",other:"其他",none:"无"},currentToolOther:'若选择"其他"，请简述工具名称或做法',currentToolOtherPlaceholder:"请输入说明",selectOption:"请选择一个选项",enterDescription:"请输入说明",eventsPerQuarter:"每季活动数量",eventsPerQuarterOptions:{range1:"0–1 场",range2:"2–5 场",range3:"6–10 场",range4:"10 场以上"},guestListSize:"单场宾客名单规模",guestListSizeOptions:{small:"少于 100 人",medium:"100–500 人",large:"500–2,000 人",extraLarge:"2,000 人以上"},integrationNeeds:"是否需要与既有系统整合",integrationOptions:{ticketing:"票务系统",crm:"CRM 系统",email:"Email 平台",other:"其他"},consent:"我同意将以上信息用于后续联系与方案评估，并发送一份副本至我的 Email。",consentError:"请同意信息使用条款",submit:"提交需求",submitting:"提交中...",orEmail:"或直接来信 contact@inviti.vip",required:"此字段为必填",invalidEmail:"请输入有效的 Email 地址",successMessage:"已提交，我们将尽快与您联系。",viewInbox:"查看收件箱"}},f0={tc:Wp,en:c0,ja:u0,"zh-hans":d0};function Ge(n){return f0[n]||Wp}const Kf=({isOpen:n,onClose:s,currentLocale:o,onSelectLocale:l,isMobile:c=!1})=>{if(!n)return null;const d=f=>{l(f),s()};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"language-dropdown-backdrop",onClick:s,"aria-hidden":"true"}),a.jsx("div",{className:`dropdown-menu show language-dropdown-menu ${c?"w-100":""}`,style:{position:"absolute",top:c?"calc(78% + 8px)":"calc(100% + 8px)",right:c?void 0:0,left:c?0:void 0,minWidth:c?"100%":"120px"},children:xc.map(f=>a.jsxs("button",{onClick:()=>d(f.code),className:`dropdown-item d-flex align-items-center justify-content-between ${o===f.code?"active":""}`,type:"button",children:[a.jsx("span",{className:"text-dark",children:f.label}),o===f.code&&a.jsx(Lc,{size:16,className:"text-dark"})]},f.code))})]})},la="/INVITI-Website/assets/INVITI_Logo-gZkC19gw.webp",p0="/INVITI-Website/assets/INVITI-Chrx_lWW.webp",m0=({isMobile:n=!1,locale:s="tc",onLocaleChange:o,onNavigateToHelpCenter:l,onNavigate:c,onSetScrollTarget:d,enableResponsive:f=!0})=>{const[p,h]=v.useState(!1),[g,x]=v.useState(!1),[y,N]=v.useState(n),[C,j]=v.useState(!1);v.useEffect(()=>{if(!f){N(n);return}const P=()=>{const $=window.innerWidth<992;N($),$||h(!1)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[f,n]),v.useEffect(()=>{const P=()=>{j(window.scrollY>10)};return P(),window.addEventListener("scroll",P,{passive:!0}),()=>window.removeEventListener("scroll",P)},[]);const b=f?y:n,k=Ge(s),T=xc.find(P=>P.code===s)||xc[0],S=P=>{const $=document.getElementById(P);if($){const z=n?56:48,U=100,ye=localStorage.getItem("banner-dismissed")==="true"?64:64+z,oe=$.getBoundingClientRect().top+window.pageYOffset-ye+U;window.scrollTo({top:oe,behavior:"smooth"})}else d&&c&&(d(P),c("/"))},D=()=>{document.getElementById("home")?window.scrollTo({top:0,behavior:"smooth"}):c?.("/")},L=[{label:k.nav.home,url:"/",isExternal:!1,action:D},{label:k.nav.features,url:"#features",isExternal:!1,action:()=>S("features")},{label:k.nav.blog,url:"/blog",isExternal:!1,action:()=>c?.("/blog")},{label:k.nav.helpCenter,url:"#help-center",isExternal:!1,action:l}];return a.jsx("nav",{className:"bg-light",style:{borderBottom:C?"1px solid rgba(45, 53, 8, 0.15)":"none",transition:"border-bottom 0.3s ease"},children:a.jsxs("div",{className:b?"container-fluid px-3 py-2":"container py-3",children:[a.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[a.jsx("button",{onClick:D,className:"btn btn-link text-dark p-0 border-0 opacity-hover",children:a.jsxs("div",{className:"d-flex align-items-center gap-2",children:[a.jsx("img",{src:la,alt:"INVITI Logo",style:{height:"30px",width:"auto",marginRight:"6px"}}),a.jsx("img",{src:p0,alt:"INVITI",style:{height:"16px",width:"auto"}})]})}),!b&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"d-none d-md-flex align-items-center gap-4",children:L.map(P=>P.action?a.jsxs("button",{onClick:P.action,className:"btn btn-link text-dark text-decoration-none px-0 position-relative nav-link-button",style:{paddingBottom:"4px",transition:"color 0.2s ease"},children:[P.label,a.jsx("span",{className:"position-absolute bottom-0 left-0 nav-link-underline",style:{height:"2px",width:"0%",backgroundColor:"#2D3508",transition:"width 0.3s ease",borderRadius:"1px"}})]},P.label):a.jsx("a",{href:P.url,className:"text-dark text-decoration-none",children:P.label},P.label))}),a.jsxs("div",{className:"d-none d-md-flex align-items-center gap-3",children:[a.jsxs("div",{className:"position-relative",children:[a.jsxs("button",{onClick:()=>x(!g),className:"btn btn-outline-dark d-flex align-items-center gap-2","aria-label":"Select language",children:[a.jsx(qf,{size:16}),a.jsx("span",{className:"small",children:T.shortLabel}),a.jsx(Ir,{size:14,className:g?"rotate-180":""})]}),a.jsx(Kf,{isOpen:g,onClose:()=>x(!1),currentLocale:s,onSelectLocale:P=>o?.(P),isMobile:!1})]}),a.jsx("a",{href:"https://app.inviti.vip",target:"_blank",rel:"noopener noreferrer",children:a.jsx(st,{variant:"secondary",size:"sm",children:k.nav.login})}),a.jsx(st,{variant:"primary",size:"sm",href:"booking",children:k.nav.tryForFree})]})]}),b&&a.jsx("button",{className:"btn d-flex align-items-center justify-content-center",onClick:()=>h(!p),"aria-label":p?"Close menu":"Open menu",children:p?a.jsx(Or,{size:20}):a.jsx(Kv,{size:20})})]}),b&&p&&a.jsx("div",{className:"border-top mt-3 pt-3 bg-light",children:a.jsxs("div",{className:"d-flex flex-column gap-3",children:[L.map(P=>P.action?a.jsx("button",{onClick:()=>{P.action?.(),h(!1)},className:"btn btn-link text-start text-dark text-decoration-none",children:P.label},P.label):a.jsx("a",{href:P.url,className:"text-dark text-decoration-none",onClick:()=>h(!1),children:P.label},P.label)),a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>x(!g),className:"btn btn-outline-dark w-100 d-flex align-items-center justify-content-between",children:[a.jsxs("div",{className:"d-flex align-items-center gap-2",children:[a.jsx(qf,{size:16}),a.jsx("span",{className:"small",children:T.label})]}),a.jsx(Ir,{size:14,className:g?"rotate-180":""})]}),a.jsx(Kf,{isOpen:g,onClose:()=>x(!1),currentLocale:s,onSelectLocale:P=>{o?.(P),x(!1)},isMobile:!0})]}),a.jsxs("div",{className:"d-flex flex-column gap-2",children:[a.jsx("a",{href:"https://app.inviti.vip",target:"_blank",rel:"noopener noreferrer",className:"w-100",children:a.jsx(st,{variant:"secondary",size:"sm",className:"w-100",children:k.nav.login})}),a.jsx(st,{variant:"primary",size:"sm",className:"w-100",href:"booking",onClick:()=>h(!1),children:k.nav.tryForFree})]})]})})]})})},dn=({isMobile:n=!1,locale:s="tc",onLocaleChange:o,onNavigateToHelpCenter:l,onNavigate:c,onSetScrollTarget:d})=>a.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 w-full",children:a.jsx(m0,{isMobile:n,locale:s,onLocaleChange:o,onNavigateToHelpCenter:l,onNavigate:c,onSetScrollTarget:d})}),h0=({isMobile:n=!1,locale:s="tc",onNavigate:o})=>{const l=Ge(s),[c,...d]=l.hero.title.split("，"),f=d.join("，"),p=()=>{const h=document.getElementById("features");if(h){const N=h.getBoundingClientRect().top+window.pageYOffset-64+100;window.scrollTo({top:N,behavior:"smooth"})}};return a.jsxs("section",{id:"home",className:"bg-background section-padding position-relative",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"row justify-content-center text-center",children:a.jsx("div",{className:"col-12 col-lg-8",children:a.jsxs("div",{className:"d-flex flex-column align-items-center gap-3",children:[a.jsxs("h1",{className:"display-6 fw-medium",children:[c,f&&a.jsxs(a.Fragment,{children:["，",a.jsx("br",{}),f]})]}),a.jsx("p",{className:"lead",style:{fontSize:"1.375rem",fontWeight:400,color:"#2D3508ee",marginBottom:"0.5rem"},children:l.hero.subtitle}),a.jsx("div",{className:"d-flex flex-column flex-sm-row gap-3 pt-2 justify-content-center",style:{maxWidth:n?"100%":"280px"},children:a.jsx(st,{variant:"primary",size:"md",className:"w-100 w-sm-auto",href:"booking",children:l.hero.bookDemo})})]})})})}),a.jsx("div",{className:"position-absolute bottom-0 start-50 translate-middle-x mb-4 pb-4",style:{cursor:"pointer"},onClick:p,onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),p())},tabIndex:0,role:"button","aria-label":"Scroll down",children:a.jsx(Ir,{size:32,className:"scroll-down-arrow",style:{color:"#2D3508",opacity:.6}})})]})},g0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Pr(n){const[s,o]=v.useState(!1),l=()=>{o(!0)},{src:c,alt:d,style:f,className:p,...h}=n;return s?a.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${p??""}`,style:f,children:a.jsx("div",{className:"flex items-center justify-center w-full h-full",children:a.jsx("img",{src:g0,alt:"Error loading image",...h,"data-original-url":c})})}):a.jsx("img",{src:c,alt:d,className:p,style:f,...h,onError:l})}const Gi=({icon:n,title:s,description:o,screenshot:l,hoverGif:c,onClick:d,onScreenshotClick:f,isMobile:p=!1,disabled:h=!1,learnMoreText:g="Learn more",isFullWidth:x=!1})=>{const[y,N]=v.useState(!1),C=b=>{h||f&&b.target.closest(".screenshot-container")||d?.()},j=b=>{b.stopPropagation(),f?.()};return a.jsx("div",{onClick:C,className:`
        card h-100
        ${h?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${h?"":"shadow-sm hover-shadow"}
      `,style:{transition:"box-shadow 0.2s",backgroundColor:"#FDFDFD",borderColor:"rgba(45, 53, 8, 0.15)",overflow:"hidden"},children:a.jsxs("div",{className:`card-body d-flex p-0 ${x?"flex-column flex-md-row":"flex-column"}`,style:{color:"#2D3508",height:"100%"},children:[a.jsxs("div",{className:`d-flex flex-column p-4 p-lg-5 feature-card-content ${x?"feature-card-content-fullwidth":""}`,style:{minWidth:0,flex:x&&!p?"0 0 30%":"1",width:x&&!p?"30%":void 0},children:[a.jsx("div",{className:"d-inline-flex align-items-center justify-content-center rounded-circle mb-3 flex-shrink-0",style:{width:"40px",height:"40px",backgroundColor:"rgba(45, 53, 8, 0.1)"},children:a.jsx("div",{style:{color:"#2D3508"},children:n})}),a.jsx("h5",{className:"card-title mb-2",style:{color:"#2D3508",fontWeight:600,fontSize:"1.5rem",lineHeight:"1.3"},children:s}),!p&&x?a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"card-text mb-0 flex-grow-1",style:{color:"#2D3508",opacity:.8,lineHeight:"1.6",fontSize:"1rem"},children:o}),!h&&a.jsxs("button",{className:"btn btn-link d-inline-flex align-items-center gap-2 p-0 text-decoration-none mt-auto feature-card-button",style:{width:"fit-content",padding:"0",fontSize:"0.95rem",fontWeight:500,color:"#2D3508",border:"none",background:"none",cursor:"pointer",whiteSpace:"nowrap"},onClick:b=>{b.stopPropagation(),d?.()},onMouseEnter:b=>{b.currentTarget.style.opacity="0.7"},onMouseLeave:b=>{b.currentTarget.style.opacity="1"},children:[a.jsx("span",{className:"feature-card-button-text",children:g}),a.jsx(Zi,{size:16})]})]}):a.jsxs("div",{className:`d-flex flex-row align-items-start justify-content-between mb-0 ${p?"feature-card-button-container-mobile":"gap-2 gap-md-3"}`,children:[a.jsx("p",{className:"card-text mb-0 flex-grow-1",style:{color:"#2D3508",opacity:.8,lineHeight:"1.6",fontSize:"1rem"},children:o}),!h&&a.jsxs("button",{className:"btn btn-link d-inline-flex align-items-center gap-2 p-0 text-decoration-none flex-shrink-0 feature-card-button",style:{width:"fit-content",padding:"0",fontSize:"0.95rem",fontWeight:500,color:"#2D3508",border:"none",background:"none",cursor:"pointer",whiteSpace:"nowrap"},onClick:b=>{b.stopPropagation(),d?.()},onMouseEnter:b=>{b.currentTarget.style.opacity="0.7"},onMouseLeave:b=>{b.currentTarget.style.opacity="1"},children:[a.jsx("span",{className:"feature-card-button-text",children:g}),a.jsx(Zi,{size:16})]})]})]}),l&&a.jsxs("div",{className:`screenshot-container position-relative flex-shrink-0 overflow-hidden feature-card-image ${x?"feature-card-image-fullwidth":""}`,onClick:f?j:void 0,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),style:{width:x&&!p?"70%":"100%",height:x&&!p?"100%":"300px",minHeight:x&&!p?"400px":"300px",flex:x&&!p?"0 0 70%":void 0},children:[a.jsx(Pr,{src:y&&c?c:l,alt:`${s} screenshot`,className:"w-100 h-100 object-fit-cover transition-transform",style:{transform:y?"scale(1.05)":"scale(1)",transition:"transform 0.3s ease"}}),f&&a.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",style:{backgroundColor:y?"rgba(0,0,0,0.2)":"transparent",transition:"background-color 0.2s"},children:a.jsx("div",{className:"rounded-circle p-2 shadow transition-all",style:{opacity:y?1:0,transform:y?"scale(1)":"scale(0.9)",backgroundColor:"#FDFDFD"},children:a.jsx(Hp,{size:20,style:{color:"#2D3508"}})})})]})]})})},Up="/INVITI-Website/assets/%E5%89%B5%E5%BB%BA%E6%B4%BB%E5%8B%95_Gif%E7%89%88-CJBhqJF2.gif",y0="/INVITI-Website/assets/%E4%B8%80%E9%8D%B5%E9%82%80%E8%AB%8B%E8%88%87%E8%BF%BD%E8%B9%A4%E5%87%BA%E5%B8%AD%E7%8B%80%E6%B3%81%EF%BC%BF%E5%B0%81%E9%9D%A2-xEZBU9ns.webp",v0="/INVITI-Website/assets/%E4%B8%80%E9%8D%B5%E9%82%80%E8%AB%8B%E8%88%87%E8%BF%BD%E8%B9%A4%E5%87%BA%E5%B8%AD%E7%8B%80%E6%B3%81-UTwZ-pg_.gif",x0="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E8%B3%87%E6%96%99%E5%BA%AB%EF%BC%BF%E5%B0%81%E9%9D%A2-DCpvWkyd.webp",w0=({isMobile:n=!1,onNavigate:s,locale:o="tc"})=>{const l=Ge(o),c={id:"event-session-management",icon:a.jsx(Oc,{size:24,style:{color:"#2D3508"}}),title:l.features.card1Title,description:l.features.card1Description,screenshot:Up},d={id:"automated-invitations",icon:a.jsx($p,{size:24,style:{color:"#2D3508"}}),title:l.features.card2Title,description:l.features.card2Description,screenshot:y0,hoverGif:v0},f={id:"guest-database",icon:a.jsx(zp,{size:24,style:{color:"#2D3508"}}),title:l.features.card3Title,description:l.features.card3Description,screenshot:x0};return a.jsx(a.Fragment,{children:a.jsx("section",{id:"features",className:"section-padding",style:{backgroundColor:"#2D3508",color:"#FDFDFD",borderTop:"1px solid rgba(255, 252, 235, 0.15)",borderBottom:"1px solid rgba(255, 252, 235, 0.15)"},children:a.jsxs("div",{className:n?"container-fluid px-4":"container",children:[a.jsx("div",{className:"mb-5",children:a.jsx("h2",{className:`mb-3 ${n?"text-start":"text-center"}`,style:{color:"#FDFDFD"},children:l.features.sectionTitle})}),a.jsx("div",{className:"row g-4 mb-4",children:a.jsx("div",{className:"col-12",children:a.jsx(Gi,{icon:c.icon,title:c.title,description:c.description,screenshot:c.screenshot,onClick:()=>s?.(`/features/${c.id}`),isMobile:n,learnMoreText:l.features.viewDetails,isFullWidth:!0})})}),a.jsxs("div",{className:"row g-4",children:[a.jsx("div",{className:"col-12 col-md-6",children:a.jsx(Gi,{icon:d.icon,title:d.title,description:d.description,screenshot:d.screenshot,hoverGif:d.hoverGif,onClick:()=>s?.(`/features/${d.id}`),isMobile:n,learnMoreText:l.features.viewDetails})}),a.jsx("div",{className:"col-12 col-md-6",children:a.jsx(Gi,{icon:f.icon,title:f.title,description:f.description,screenshot:f.screenshot,onClick:()=>s?.(`/features/${f.id}`),isMobile:n,learnMoreText:l.features.viewDetails})})]})]})})})},wc=({thumbnail:n,title:s,excerpt:o,category:l,date:c,author:d,readTime:f,onClick:p})=>a.jsxs("div",{onClick:p,className:"group cursor-pointer border transition-all hover:shadow-lg active:opacity-90 flex flex-col h-full w-full",style:{borderRadius:"8px",backgroundColor:"#2D3508",borderColor:"rgba(255, 252, 235, 0.15)"},children:[n&&a.jsx("div",{className:"w-full overflow-hidden",style:{borderRadius:"8px 8px 0 0"},children:a.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:a.jsx(Pr,{src:n,alt:s,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"})})}),a.jsxs("div",{className:"p-4 sm:p-4 flex flex-col flex-grow",style:{color:"#FDFDFD"},children:[a.jsx("h5",{className:"mb-2 leading-[140%] transition-colors text-sm sm:text-base",style:{color:"#FDFDFD",fontWeight:500},children:s}),a.jsx("p",{className:"text-xs sm:text-sm mb-3 sm:mb-4 leading-[150%] line-clamp-2",style:{color:"#FDFDFD",opacity:.9},children:o}),a.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 pb-2 sm:pb-3",style:{borderBottom:"1px solid rgba(255, 252, 235, 0.15)"},children:[d.avatar&&a.jsx("div",{className:"blog-card-avatar flex items-center justify-center",style:{padding:"4px",backgroundColor:"#FDFDFD",borderRadius:"4px"},children:a.jsx(Pr,{src:d.avatar,alt:d.name,className:"w-full h-full object-contain",loading:"lazy"})}),!d.avatar&&a.jsx("div",{className:"blog-card-avatar flex items-center justify-center",style:{backgroundColor:"rgba(255, 252, 235, 0.15)",borderRadius:"4px",width:"32px",height:"32px"},children:a.jsx("span",{className:"text-[10px] sm:text-xs",style:{color:"#FDFDFD"},children:d.name[0]})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"text-xs sm:text-sm truncate",style:{color:"#FDFDFD"},children:d.name}),a.jsx("div",{className:"text-xs truncate",style:{color:"#FDFDFD",opacity:.8},children:d.role})]})]}),a.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 text-xs flex-wrap sm:flex-nowrap pt-1 mt-auto",style:{color:"#FDFDFD",opacity:.8},children:[a.jsx("span",{className:"px-2 py-1",style:{borderRadius:"4px",backgroundColor:"rgba(255, 252, 235, 0.15)",border:"1px solid rgba(255, 252, 235, 0.2)",color:"#FDFDFD"},children:l}),a.jsx("span",{children:"•"}),a.jsx("span",{children:c}),a.jsx("span",{children:"•"}),a.jsx("span",{children:f})]})]})]}),b0=`# 什麼是「禮賓」？為什麼活動一定要有人專門負責招待？

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 4

# 什麼是「禮賓」？為什麼活動一定要有人專門負責招待？

很多人辦活動時，都會問一句：「這次誰負責管理公關票？」

但如果再追問下去：「所以管理公關票的人在做什麼？」往往就會有點說不太清楚。

在多數團隊裡，大家忙著節目內容、票務、硬體、社群宣傳，公關票與貴賓招待常常變成「**有空的人順便幫忙一下**」的工作。邀請看起來有做、現場勉強有撐住，但活動一結束，資料散落、經驗也很難留下來。

這篇文章想做一件事：**把「禮賓」講清楚**。

你會看到，禮賓不是多一雙手幫忙發票，而是「有人專門用貴賓的視角，重新看一次整場活動」。

---

## 先把幾個常聽到的名詞講清楚

在談禮賓之前，有三個常被混在一起的名詞，先簡單定義一下：

**貴賓（VIP）** 指的是「這場活動特別希望他來的人」。

不一定是傳統印象中的「有錢人」，更多時候是合作品牌、媒體、KOL、政府與業界長官、重要客戶、公司關鍵夥伴，這些人來不來，會直接影響活動後續的關係與效果。

**公關票** 是不對外販售的票。

它存在的目的，就是要邀請上述這些貴賓。公關票通常數量有限，必須事先規劃好分配方式，並且在過程中持續追蹤使用情況。

**禮賓** 則是負責貴賓相關事務的人或小組。

從一開始確認邀約目標、分配公關票，到設計貴賓接待流程、安排現場動線、活動後整理紀錄，這些都在禮賓範圍內。如果活動規模較大，還會有一位 **禮賓統籌**，扮演「貴賓體驗的 PM」，負責協調各方需求與資源。

---

## 沒有禮賓專責，活動會長什麼樣子？

很多人會覺得：「我們平常也有邀貴賓啊，沒有特別設定禮賓，好像也還行。」

但只要活動規模一放大，就會開始出現一些很熟悉的場面。

### 最常見的第一個狀況：大家各自邀、沒有共同的邀約目標

社群想邀 KOL、業務想邀客戶、行銷想邀品牌、公司內部也想邀親友。每一個人都在做自己覺得重要的邀請，但從來沒有坐下來討論：「這場活動最希望邀到的是哪一群人？優先順序是什麼？」

於是，你會發現，票很快被用完，親友坐得很滿，真正能幫助活動曝光或合作的人，反而沒有位子。

### 第二個狀況：公關票變成「先喊先贏」

沒有統一分配規則時，公關票常常靠關係、靠印象在分配。有人隨口說一句「我要幾張」，就先幫他留著；另一邊又突然說「這組人很重要，再多兩張」，大家心裡都知道票有限，但沒有人負責看整體數字，只好一邊答應、一邊心裡發毛。

到最後，總張數超標，只好現場硬擠，氣氛一定不會太好。

### 第三個狀況：名單四散，誰也說不清楚到底邀了誰

有些在 Excel，有些在 Google Sheet，有些躺在 LINE 截圖裡，還有一些是「他會來啦，到時候直接找我」。這樣的做法在當下可能還撐得過去，但一旦要查詢：「這位貴賓以前來過幾次？」、「哪一位窗口跟他比較熟？」幾乎找不到完整答案。下一場活動要再邀一次，所有問題全部重來。

### 第四個狀況：演出當天，沒有真正「在接待」的人

門口有人驗票、有人撕票，也許還有工作人員協助排隊，但對貴賓來說，那只是「正常進場流程」。如果沒有一組人專門在意：「這些人今天是被特別邀請來的」，那麼他們就會像一般觀眾一樣排隊、找不到人、自己摸索動線。

對品牌來說，會少掉一個很重要的機會 —— 去讓這些關鍵對象感受到：「你們是被好好對待的」。

---

## 禮賓到底在忙什麼？可以把他想成「貴賓體驗設計師」

如果把一場活動的時間軸攤開來，禮賓其實是在幫你設計一條完整的「貴賓旅程」。

### 在活動前：設計「要邀誰」與「怎麼邀」

禮賓會協助釐清：

這場活動最希望邀請到哪些人？這些人來了，我們期待的是什麼？是希望他們發文、寫報導、促成合作，還是純粹維繫關係？

當這些問題被回答出來，後面分配票數與名單取捨，就有了依據，而不是「誰講話比較大聲，票就先給誰」。

### 票數與座位：在有限資源下做分配設計

禮賓會與主辦和票務一起規劃公關票與座位，包括：

- 總共有多少座位可以做公關票
- 哪些區域適合給哪一類貴賓
- 如何安排出席單位較多的組別
- 哪些人需要彼此靠近，哪些人反而要錯開

這些看似細節的事情，決定的是：**貴賓坐下來之後，旁邊會遇到誰、會聊到什麼、這場活動對他來說有沒有「值得來」的感覺**。

### 演出當天：讓貴賓「知道該去哪裡、有人在等他」

貴賓一下車或抵達會場，看不看得懂指示牌？知道去哪裡換票？到禮賓桌時，有沒有人叫得出他的名字？如果名單裡沒有卻人真的站在眼前，現場有沒有備用方案？

這些細節，都會直接影響他對這個品牌、這個團隊的印象：是專業、細心，還是有點混亂，只是勉強撐住場面。

禮賓不一定也不該自己做完所有事情，但他會 **設計出一個清楚的流程，把不同環節交給對的人負責**。

有人負責名單整理，有人負責寄信與確認，有人負責現場接待，有人負責問題處理。禮賓統籌會站在上面看這整條線，有沒有斷點，有沒有沒有人顧到的地方。

---

## 為什麼大型活動一定要有禮賓？

從外部、內部和未來三個角度看，答案其實很清楚。

### 對外部來說：禮賓就是品牌的「門面」

貴賓不會看到你內部的 Excel、製作流程、排練細節，但他會直接感受到：邀請信寫得怎麼樣、到場時有沒有人在等他、動線順不順、遇到問題時有沒有人願意出來處理。這些細節，往往比節目內容本身更能影響他對你的信任感。

### 對內部來說：禮賓是降低摩擦、避免吵架的機制

當禮賓統籌在一開始就協助定義邀約目標、票數分配、優先順序，後面關於「為什麼他們那組可以多要幾張」、「為什麼我的貴賓被塞在角落」這類的衝突，就會少非常多。大家都是照著一套事先說好的規則在走，而不是邊走邊吵。

### 對未來來說：經驗會累積成「自己的禮賓系統」

有禮賓專責，經驗才有機會累積下來。

每一次邀約、每一場活動的出席狀況、每一個處理過的突發事件，如果有人把它們整理進貴賓資料庫與檢討文件，下次活動就不用從零開始。新加入的同事也不必一直問前輩：「這位貴賓是誰？以前怎麼邀？他喜歡坐哪一區？」

你會慢慢擁有一套「自己的禮賓系統」，而不是一次性的專案。

---

## 小結：禮賓不是加分選項，而是避免失控的關鍵角色

當活動開始有外部合作、有媒體、有重要來賓時，禮賓不再只是「有人幫忙發票」這麼簡單，而是：

> 有一個人或一個小組，專門站在貴賓角度，重新檢查整場活動是不是合理、順暢、有被好好對待。


如果你的團隊現在還沒有明確的禮賓角色，或禮賓只是「順手幫忙的人」，很值得從下一場活動開始，試著讓禮賓變成一個被定義清楚、有權限、也有責任的角色。

當這個角色站穩了，你會發現：

> 邀約變得有邏輯、票數不再失控、現場有人撐住貴賓動線，活動也會更像一個「有設計過的體驗」，而不是勉強撐過去的一場戰鬥。
`,k0=`# 公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 5

# 公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則

只要活動有公關票，幾乎一定會出現一兩句熟悉的話：

> 「為什麼他們那組可以那麼多？」

> 「這位明明很重要，怎麼被排到那裡？」


如果沒有一套被大家認同的配票規則，公關票就很容易變成一種「誰講得比較大聲、誰先搶到」的遊戲。禮賓統籌在中間當和事佬，活動還沒開始，心已經先累一半。

這篇想談的是：**公關票到底要怎麼分配，才比較不會吵架？**

關鍵不只是「算法」，而是把它當成**跟目標綁定的責任**：每一張票都是一個「要被好好運用」的承諾，而不是多拿多爽的福利。

---

## 先釐清幾個常用名詞

為了讓後面好讀一點，先把幾個會用到的詞簡單定義一下：

**公關票**

不對外販售、專門用來邀請貴賓的票。數量有限，會被分配給不同角色（例如高層、業務、經紀、社群等），去邀請各自負責的對象。每一張都應該連回「為什麼邀他來」。

**配票規則**

不是某一個人心裡的「印象」，而是寫得出來、大家都看得到的分配方式。

裡面至少要說清楚：

- 每個角色大約可以用多少張
- 可以邀請哪些類型的人
- 超出時怎麼申請與協調
- 用不完要怎麼釋出、誰負責回收

**角色分工**

指的是：哪幾種角色會用到公關票、各自負責邀請哪一群人，以及**對這些票的成果負什麼責任**。不是「有票的人自己看著辦」，而是每一組都有清楚的任務與邊界。

這三個東西如果沒有講清楚，配票就是在黑箱裡進行；講清楚了，吵架不一定完全消失，但至少有一套可以一起討論的基準。

---

## 為什麼公關票最容易吵架？

如果回顧過去自己參與過的活動，大概可以找到幾個共通的痛點。

### 資訊不透明：「到底有幾張？誰用了多少？」

很多時候，票數是零碎傳遞的：

- 有人私下問：「我們組可以幾張？」
- 有人說：「先幫我留個十張，之後再跟你確認名單。」

結果是，沒有人真的看過一張完整的總表。

禮賓統籌心裡有個大概，其他人只知道「我們好像不多也不少」。

當資源緊張時，每一組都會覺得自己「拿得還不夠」，情緒很容易上來。

### 沒有共同原則：「重要」這兩個字，每個人定義都不一樣

如果事前沒有對齊邀約目標，配票時就會變成：

- 每個人心裡都有一份「自己的優先順序」
- 每一位自己想邀的人，都被視為「我這邊很重要的貴賓」

禮賓統籌如果沒有一套共同原則可以依循，最後只能靠印象調整，很容易被解讀成偏心，也無法要求各組為自己手上的票負責。

### 缺乏角色邊界：「大家都覺得自己應該可以再多拿一點」

當沒有清楚的角色設定時，任何一組都可能同時想要：

- 邀合作夥伴
- 邀潛在客戶
- 邀媒體或 KOL
- 邀內部同事的親友

看起來是「大家都很熱情」，實際上會讓配票變得非常複雜。因為你很難拒絕任何一組：每一個理由聽起來都很合理，但沒有一個人對「這些票最後怎麼用、用得好不好」負責。

---

## 用「角色分工」來設計配票規則

穩定的做法不是從「張數」開始算，而是先從「角色」開始設計，然後再把**目標、歷史成效、場地條件**一起考慮進來。

### 步驟一：先畫出會用票的角色清單

這一步不需要立刻算張數，只要誠實寫下來：

這場活動，哪些角色「確實會需要用到公關票」？

常見的例子包括：

- CXO／董事會：公司最高決策層與重要賓客
- 業務與 BD：現有客戶、潛在客戶、合作對象
- 經紀／藝人團隊：合作藝人、圈內好友
- 社群／公關：媒體、KOL、內容創作者
- 禮賓統籌：跨組無法歸類、但必須邀請的對象
- 內部員工與親友：核心團隊、重要同仁的家人等

這一步會讓大家發現：**每一組都有「合理需求」**，所以更需要一開始就講清楚規則，而不是看誰先開口。

### 步驟二：依「目標 × 歷史成效 × 場地條件」分票池與責任

接下來才是關鍵：不是平均分，而是用三個面向一起決定。

### 1. 當次活動目標：做「方向」的調整

先回到前一篇談的邀約目標：

這場活動最重視的是曝光、客戶關係，還是內部士氣？

- 如果重視媒體與口碑：社群／公關的票池會相對多一點
- 如果重視客戶關係：業務與 BD 的票比例會提高
- 如果是內部感謝或年度慶功：內部員工可能也會拿到一定比例

這裡決定的是「大方向」，讓大家知道：

這一場，我們共同把資源押在哪些類型的來賓身上。

### 2. 過往邀約成效：做「經驗」的調整

在方向之上，還有一個很重要但常被忽略的考量：**過往邀約成效**。

可以很務實地看幾件事情：

- 某組拿到的票，大多真的有被用掉嗎？
- 他們邀來的人，有沒有對活動產生實際幫助？例如報導、合作、關係深化等
- 有沒有出現「前一次要了很多票，結果現場空了好幾張」的情況？

如果某組過往的邀約成效一直都很好、退票率低、來賓也符合邀約目標，那下一場適度**多給一些票，是合理的獎勵**。

相反地，如果某組上一場要了很多票，結果名單一直拖、實際到場率又不高，這次就應該**調低票數、提高使用門檻**，並且很清楚地說明原因。

這樣一來，各組就會理解：

> 票不是多拿多爽，而是「多拿就多一份責任」。


### 3. 活動地點與城市：做「地點」的調整

還有一個非常實際的因素：**活動在哪裡辦**。

- 如果活動在公司主要經營城市，公關邀約的能量通常比較高，各組的票池可以相對大一點
- 如果活動在較遠的城市或海外，對多數來賓來說，路程成本變高，公關票的實際使用量一定會跟著下降

這時候，公關票數不應該用「同一套標準」硬套，而是要預期：

- 總公關票數會比本地場少
- 各組要更謹慎評估「誰真的會願意跑這一趟」

最重要的是，**不要抱著「多抓一點反正用不完再說」的心態**。

如果因為貪心先圈了一整區，結果現場有一大塊是空位，對品牌來說是非常明顯的負面印象：

看起來像是「票送不出去」或「沒有人願意來」。

---

### 步驟三：把座位區直接跟角色綁在一起

吵架不只發生在「張數」，也常發生在「位置」。

除了分配票數之外，建議也把座位區塊標示為不同角色的「主要活動範圍」，例如哪一區以媒體為主、哪一區以客戶為主、哪一區給內部。

這樣做有幾個好處：

- 避免所有人都來搶同一區的「好位子」
- 讓現場接待大概知道，每一區會坐什麼類型的貴賓
- 活動後回頭看座位圖，也比較容易檢討：哪些區塊常空、哪些區塊需求特別高

同時，也要提醒各組：

**不要為了「先卡位置」把一整區圈滿，卻沒有能力填到合理的入座率。**

空一整排的椅子，比一開始就謹慎分配，更傷品牌。

---

### 步驟四：預留備用票，但不是鼓勵「一直加票」

再精密的計算，都不可能完全預測臨時加人的情況。

所以建議預留一小部分公關票，由禮賓統籌統一管理，給真正特殊的狀況使用，例如：

- 臨時出現的潛在大客戶
- 上層長官臨時決定要來
- 演出當天出現的重要合作機會

但備用票**不是用來「隨口加碼」的，**應該搭配一套簡單的申請機制，例如：

- 需要說明對象是誰、為什麼重要
- 預期這位來賓帶來的效益是什麼
- 哪一組會負責現場接待與後續 follow up

這樣一來，備用票會被視為「救急資源」，而不是「多一點彈性」。

---

## 讓配票規則真的落地，而不是只在文件裡好看

有了角色分工和配票規則，還需要幾個實務做法，才能讓它真的運作起來。

### 把規則做成一張大家看得懂的「配票表」

不要只寫在長篇文件裡，建議額外做一張簡單的表格，包含：

- 每個角色的票數上限或區間
- 對應的主要邀請對象
- 主要座位區範圍
- 是否有「上次使用狀況」簡單紀錄（例如：到場率、退票數）

這張表應該是每次週會都打得開來看的工具，而不是只有禮賓統籌自己知道。

### 在一場可以吵完的會議裡，把話講清楚

與其讓每一組分散私下來談，不如在一場禮賓／公關相關會議裡，一次把票數與角色分配講清楚。

有爭議就當場談，必要時調整比例。

至少大家是面對同一份資料與同一組原則，不是靠印象拉扯。

### 活動後，記得回頭檢查「票有沒有被負責任地用掉」

活動結束後，不只是看場內有沒有坐滿，而是要檢查：

- 哪些角色的票使用率高、來賓品質好
- 哪些角色常出現「要很多、用不完」的狀況
- 哪些座位區常空，是否是地點或邀約對象設定的問題

這些紀錄如果能留下來，下一場配票時就可以調整分配比例，讓整套規則越來越貼近團隊真實的運作，而不是每次都從零開始。

---

## 小結：公關票不是福利，而是跟目標綁定的責任

回到一開始的問題：公關票怎麼分配才不會吵架？

也許沒有一個「完美」的答案，但有一個相對穩定的想法：

> 公關票不是誰拿得比較多的福利，而是跟活動目標綁定的責任。


每一張票，都應該對應到：

- 一個清楚的邀約目標
- 一個負責的角色
- 一個預期的參與效果

當團隊願意接受這個前提，就比較不會用「越多越好、越彈性越好」來看待公關票。

反過來說，**一整區空空的座位、用不完的公關票，都是品牌在現場留下來的負面訊號**。

與其到最後才尷尬地看著空位，不如在一開始就把目標、角色、歷史成效和場地條件納入考量，讓每一張公關票都被當成一份「要被好好交代的責任」。`,N0=`# 活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 4

# 活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟

只要活動規模一放大，「票券整理期」幾乎是所有禮賓最頭痛的一段時間。

邀約都發完了、回覆也差不多定案，但真正的地獄是從這裡開始——

- 實體票、電子票、入場小卡同時存在
- 名單還在更新，座位圖改到眼花
- 現場窗口、售票系統、禮賓統籌彼此之間要反覆確認

這篇文章想做的，是把這段看起來很混亂的工作，拆成幾個固定步驟。不是說它會變輕鬆，而是讓你至少有一張「地圖」，知道自己現在卡在哪裡、下一步是什麼。

---

## 什麼是「票券整理期」？

在整體禮賓流程裡，「票券整理期」大致落在活動前 1–2 週。

這個階段的重點不是「決定要邀誰」，而是把所有跟入場相關的東西對齊：

- 這些人拿的是哪一種票？
- 要怎麼拿到票、在哪裡進場？
- 他們實際會坐在哪裡？

簡單講，就是把「名單」變成現場真的用得起來的「票＋座位＋流程」。

---

## 步驟一：先搞清楚，手上到底有哪幾種票？

在開始動 Google 試算表或系統之前，第一件事是把「票券型態」講清楚。

多數活動會同時存在這幾種入場方式：

### 實體票：最穩定、最容易進場

實體票的做法通常是：先向票務系統提出刷票需求，確認票種、張數與拿票時間，票務刷出票券後交給禮賓，禮賓再自行點票與分裝。

實體票的好處是很明確：

**票跟售票系統是勾在一起的，刷過券就不能重複使用**，不容易出現重複入場或座位重疊的問題。對現場來說，實體票也是最直覺、最容易說明的進場方式。

### 電子票：方便，但溝通成本高

電子票大多是 QR code。

如果 QR code 會隨時間變動，就只能請貴賓自己登入售票系統領票，對高階貴賓、合作夥伴來說，這其實是很高的門檻，也容易造成誤會。

如果 QR code 不會變，才有空間用截圖或轉檔的方式提供，讓窗口或禮賓代為發送。

### 入場小卡：體驗感好，但要小心「沒有跟票務勾在一起」

入場小卡比較像是「禮賓專用票」，設計空間很大，可以印上活動資訊、座位、禮賓室說明、流程簡介，看起來也比一般票更有儀式感。

但有一個很重要的壞處：

**入場小卡本身通常沒有跟售票系統勾稽**。

如果同一個座位同時也被刷成實體票或電子票，就有可能出現「重複提供座位」的狀況，所以在設計小卡時，一定要特別確認座位是否有被重複分配。

這一步的目標，是先決定好：

這場活動裡，不同類型的來賓各自會拿到哪一種票，後面在抓票數和設計流程時才有依據。

---

## 步驟二：做出一份「第一次看就懂」的取票名單

票券整理期最關鍵的產出之一，就是取票名單。

它不是單純的聯絡方式列表，而是**現場工讀生或同事可以直接拿來工作的操作清單**。

實務上，一份好用的取票名單，至少會包含：

- 誰要在哪個窗口取票
- 取票序號
- 邀請人
- 貴賓姓名、單位、電話
- 出席人數
- 座位
- 備註（例如晚到、特殊需求）

這裡有一個關鍵觀念：

**禮賓統籌在活動現場，多半要負責交際、協調、處理臨時狀況，不會坐在取票桌前一張一張在換票。**

真正坐在取票桌前的，往往是工讀生或臨時支援的同事。

所以取票名單的標準應該是：

> 「一個第一次看到這份試算表的人，也能在兩三分鐘內看懂欄位、理解怎麼用。」


你可以實際做個小測試：

請一位沒有參與前期規劃的同事，直接拿這份名單模擬換票流程，如果他需要你一直在旁邊解釋，那就代表還不夠清楚。

---

## 步驟三：把人「真的」放到座位圖上

很多活動在腦中大概知道「誰坐哪一區」，但如果沒有畫成實際座位圖，進入票券整理期就很容易亂成一團。

比較穩定的做法是：拿到場地座位圖後，直接把每一位貴賓、每一個單位寫進去，變成一張真正可印、可指給現場同事看的座位圖。

在安排座位時，可以簡單遵守幾個原則：

- 先安排同一單位人數很多的組別，避免被拆得太零碎
- 再排真正關鍵的貴賓，確保他們的視線、動線、進出都合理
- 之後才是一般貴賓，最後才是親友區

如果有 KOL、媒體、政治人物等，比較敏感的組合也要事先分散，避免互相干擾或造成現場壓力。

能做到最好，是禮賓統籌能在場勘或進場時親自走一遍現場，確認這些座位在真實空間裡是不是如想像中那麼好。圖面看起來正常的位子，有時候現場會有樑柱、攝影機、通道干擾，這些都要提前發現。

---

## 步驟四：決定「票要怎麼到他手上」

票整理好了、名單和座位也對齊了，接下來要處理的是：

**貴賓實際是怎麼拿到票、怎麼進場。**

如果是大量的內部親友票，有時候會選擇事先寄送，讓他們直接依照一般觀眾的動線入場；重要貴賓則仍由禮賓桌集中處理，方便統一接待與溝通。

電子票的情況下，就要事先想好：

- 要不要請貴賓自行登入售票系統取票
- 邀請信裡要不要放教學連結或簡易圖示
- 現場有沒有預備方案，給沒有成功領取電子票的貴賓使用

入場小卡則多半會在活動前或現場由邀請人親自遞給貴賓，或在禮賓桌統一發放。因為小卡與票務系統沒有自動勾稽，禮賓要更小心控管發放對象與座位，避免同一個座位發出兩份不同的票。

這一步的重點，是替每一種票券型態都畫出一條清楚的路徑：

從「拿到票」到「坐上位置」中間不應該有太多不確定或需要臨場猜測的地方。

---

## 步驟五：跟現場窗口對齊「進場那天會發生什麼事」

最後一個步驟，是把前面做好的東西，轉成現場真的用得起來的版本。

這通常會包含幾件事：

- 把最新的取票名單、座位圖整理成現場方便閱讀的形式（例如分窗口列印、A3 大圖）
- 和現場的取票窗口、場館工作人員一起走過一次進場流程：
    - 什麼時間開始可以換票？
    - 什麼時間是高峰？
    - 某些來賓如果遲到，要走哪一條動線？
- 把幾種最常發生的例外狀況先講好處理方式：
    - 名字不在名單上，但對方明顯是被邀請的
    - 貴賓臨時多帶人來
    - 某一區因設備或安全問題臨時不能使用，需要換座

如果你平常是用 Google 表單／試算表配合系統做管理，這一步也要一併確認「系統裡看到的資料」和「現場印出來的名單」是否完全一致，避免一邊看雲端、一邊看紙本，結果兩邊對不起來。

---

## 小結：把混亂變成「有順序的辛苦」

票券整理期不會因為你多看了幾篇文章就變成輕鬆工作，它本來就是一段很扎實的勞力活：大量對資料、大量檢查、大量確認。

但當你開始用這五個步驟來看待它——

1. 先搞清楚票券型態
2. 做出第一次看就懂的取票名單
3. 把人真的放到座位圖上
4. 想清楚票要怎麼到貴賓手上
5. 跟現場窗口一起演練進場會發生什麼事

原本一整團混成一塊的焦慮，會慢慢變成「知道自己現在在第幾關」。

雖然還是很忙、還是很累，但至少，這不再是一場沒有結構的混戰，而是一段可以一步一步走完的流程。`,C0=`# 活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 4

# 活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了

對多數人來說，燈暗下來、謝幕結束，活動就「辦完了」。

但對禮賓來說，真正決定這場活動值不值得，是在 **活動結束之後那一兩週**。

邀約目標怎麼設計、公關票怎麼分配、現場禮賓桌怎麼撐住，這些前面所有的努力，**如果沒有在事後做幾個關鍵收尾，其實很難累積成下一場的養分**。每一次都像重新開始，團隊會越做越累，卻看不到進步。

這篇就來整理：活動結束後，如果不想讓前面所有禮賓辛苦白費，至少要做好哪幾件事。

---

## 一、先整理出一份「真實出席名單」

活動前有邀請名單、活動中有取票名單，但這兩份通常跟「實際坐在現場的人」會有落差。

有人被邀請卻沒來、有人臨時多帶人、有人沒有在系統上勾選但最後還是到了。

所以活動結束後的第一步，是整理出一份 **「真實出席名單」**，把現場實際發生的狀況一次整理好。

這份名單至少要能回答幾個問題：

- 這場活動，最後真的有來的是哪些人？
- 他們各自是誰邀請的？有沒有臨時加人？
- 最後實際坐在哪一區？
- 原本說會來但沒出現的是哪些人？

資料來源可能來自現場換票紀錄、Google 試算表、禮賓桌手寫備註、群組裡的臨時通知，重點是 **最後要收斂成一份版本**，而不是讓這些資訊散落在聊天紀錄裡。

如果你使用像 INVITI 這類系統，理想狀態是可以直接把報到資訊回寫到系統裡，避免事後還要再手動對一次表。

---

## 二、把出席狀況回寫到貴賓資料庫，而不是只留在這一場

前一篇我們談過：公關名單是一場活動的專案清單，但貴賓資料庫才是品牌的長期資產。

活動結束後，一件很關鍵的事，是把「真實出席狀況」回寫到每個貴賓的主資料裡，而不是只留在這一場活動的試算表中。

對每一位貴賓，你應該至少知道：

- 他最近一次參加的活動是什麼時候、哪一場
- 這次是誰邀請他來的
- 他大概被安排在哪個區域、跟誰坐在一起
- 這一年來總共出現過幾次，是固定支持還是偶爾來一次

對未來的新人或其他部門來說，打開某一位貴賓的資料，可以一眼看出：「這個人跟品牌的關係走了多久」、「大概屬於哪一種重要程度」，就不會每一次都從「請問您之前有來過我們活動嗎？」開始。

如果禮賓的所有心血只停留在一次性的 Google 試算表裡，活動結束之後，那份辛苦很快就會被下一場的雜事淹沒。

---

## 三、回頭檢查：這次設定的邀約目標，到底有沒有達成？

活動前我們會花很多時間討論邀約目標、公關票分配、角色分工。

但如果活動結束後沒有回頭檢查，下一場還是會回到：「我覺得這次應該多給某一組一點票」這種純感覺的討論。

事後檢查不需要做得像研究報告，至少可以從幾個角度看：

### 看「類型」：我們真正邀到了誰？

把實際出席名單依類型大致分一下，例如媒體、KOL、合作品牌、客戶、政府與業界長官、內部窗口等等，看看：

- 這次最希望邀到的那一群人，有沒有真的坐在現場？
- 有沒有哪一類幾乎沒來，可能是邀請方式或時間點不對？

這會幫助你回答一個很關鍵的問題：

> 「我們前面設的邀約目標，最後有沒有反映在現場的座位上？」


### 看「角色」：哪一些票被用得比較好？

也可以用角色分工來檢查，例如業務、社群、公關、經紀、內部高層等等：

- 哪一組拿到的票，多半真的有被用掉、出席率不錯？
- 哪一組上次要了很多，結果空位很多？

這些觀察，會直接影響下一場活動的配票策略。

你可以很自然地說：「因為上次 XX 組邀約成效很好，所以這次多給你們一點票」，或者：「某組這次先少一點，等這一兩場出席率穩定再調整」。

這樣，配票不再是情緒問題，而是有數據可以討論的決定。

---

## 四、記錄「值得保留的做法」和「下次一定要改的地方」

活動結束後，大家都很累，也很容易只留下幾句口頭印象：「這次好累喔」、「下次要找更多人幫忙」。

但如果沒有稍微整理一下，那些真正有價值的經驗，很快就被忘掉。

可以簡單拉一個短會，或開一頁 Notion / 線上筆記，回答幾個問題：

- 這次有哪些做法是成功的？例如動線設計、排隊分流、禮賓桌位置、座位區安排，哪些部分讓大家覺得順手、貴賓反應也不錯。
- 哪些環節特別卡？例如某一個時間點排隊爆量、某一區座位安排不理想、某種票券型態讓現場很難操作。
- 有沒有哪幾類貴賓特別滿意或特別不滿意？背後的原因是什麼？

不需要寫成很正式的報告，重點是把「下次要做一樣」跟「下次絕對不能再這樣」分別寫下來，變成下一場活動的參考清單。

---

## 五、讓邀請人和團隊，看得見自己的成果

很多人願意幫忙邀貴賓、整理名單、跟窗口確認，就是因為他們相信這件事對活動有幫助。

如果活動結束後，沒有任何回饋，久了難免會變成：「反正邀約之後也沒人關心結果」。

所以很值得在活動結束後，主動把幾個簡單的成果分享給團隊，讓大家知道前面的努力不是白做的。

可以是很輕量的整理，例如：

- 這場活動一共邀請了多少組貴賓、實到多少組
- 哪幾個類型的貴賓出席率特別高（例如媒體、合作品牌、某些客戶群）
- 有沒有特別值得一提的亮點（例如某個關鍵對象終於第一次到場）

甚至可以針對部分角色，給一點簡單的回饋：

「這次業務組邀請的客戶出席率很高，下次在配票上會優先考慮你們的需求。」

這些話不只是稱讚，更是在提醒大家：

> 「公關票是跟目標綁定的責任，而不是拿來當福利的。」


---

## 六、對外的感謝與後續跟進：讓關係不只停在那一晚

最後一件很容易被忽略、但非常重要的事，是活動結束後的「謝謝」和「後續」。

對貴賓來說，他願意花時間來現場，其實也在觀察：「你們有沒有把這段關係當一回事」。

如果活動結束後，什麼都沒有發生，就像一場短暫的邂逅，很快就淡掉。

你可以依照貴賓類型，用不同深度的方式跟進：

- 對特別重要的貴賓或合作夥伴，用個人訊息或電話，親自說聲謝謝，順便問問他對活動的感受。
- 對多數一般貴賓，可以用 Email 或簡訊發送一封簡短的感謝訊息，附上活動摘要、照片連結或媒體報導，讓他知道「你有被記得」。
- 如果這場活動背後本來就有業務或合作目的，可以在謝謝之後，順勢銜接下一步，例如約一個時間聊合作、送上後續企劃。

這些事情看起來都不急，但它們決定的是：

下一次你再邀請同一位貴賓時，他心裡想的是「喔，就是上次那個有好好後續的團隊」，還是「誰啊？好像有印象，但不太確定」。

---

## 小結：活動結束不是句點，而是讓經驗變成資產的起點

如果把整個禮賓流程攤開來看，活動結束其實只是「前台落幕，後台開始總結」的時間點。

- 沒有整理真實出席名單，前面的邀約與現場調整就無法量化。
- 沒有回寫貴賓資料庫，每次活動都像重新認識同一批人。
- 沒有檢查邀約目標是否達成，下次配票還是只能靠印象吵來吵去。
- 沒有整理成功與踩雷的地方，新人永遠學不到前一場的經驗。
- 沒有對內分享成果、對外好好說謝謝，團隊的動能和貴賓的感受都很難累積。

當你開始把這幾件事當成禮賓流程中「必做的最後一步」，前面那些辛苦邀約、設計配票、站在禮賓桌撐場的每一刻，才會真的在下一場活動裡，看得出它留下了什麼。`,S0=`# 演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 4

# 演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法

對多數貴賓，進場與換票，不是「觀賞活動的前置環節」，而是「對於活動的第一印象」。

他們走進場館，看見的是排隊隊伍、指示牌、禮賓桌，以及第一個跟他說話的工作人員。這些細節，往往比節目本身更早決定「這個團隊專不專業、到底有沒有把我當貴賓」。

很多人以為禮賓桌就是「取換票」，但在演出當天，禮賓桌真正守住的是：**讓人順利進來、不在門口卡關，同時維持品牌的體面和節奏**。

---

## 開門前：先把確認好動線，並同步所有資訊給團隊

### 想像你是第一次來的人，會往哪裡走？會往哪裡看？

在開門前，禮賓統籌最重要的事，不是先打開電腦，而是親自走一遍場館，用「第一次來的貴賓」角度走一圈。

想像你完全不知道這個場館的格局，只知道活動名稱和大概時間：

- 從大門或電梯出口走出來時，你第一眼會看到什麼？
- 會往哪裡看？是先看到指示牌，還是只看到一堆人排隊？
- 如果你是一位不太好意思問路的長官或品牌代表，現場的動線指引、工作人員站位，是否足夠清楚？

把自己想成觀眾或貴賓，問自己幾個簡單的問題：

「我會直覺往哪邊走？」、「我看得出哪裡是禮賓桌、哪裡是一般票口嗎？」、「如果我有問題，現場有沒有一個明顯的人可以問？」

這一圈走完，通常就會看出來：

指示牌擺在哪裡比較合理、禮賓桌放哪裡不會擋到動線、哪個位置適合放接待人員。

### 活動前 Brief：讓所有人站在同一張地圖上

開門前的 Brief（簡報說明），是禮賓統籌當天最關鍵的工作之一。

它的目的不是「走行程」，而是讓所有前線人員站在同一張地圖上。

這個 Brief 至少有四個功能：

**第一，彼此認識姓名與分工。**

每個人要知道自己叫什麼、負責什麼，同時也要知道其他人是誰。

當工讀生或同事遇到不知道的問題時，應該要能很快想到：「這個問題要問誰」，而不是傻在那邊，或把所有問題都丟給禮賓統籌。

一場好的 Brief，會讓大家互相記住幾個關鍵角色，例如「哪一位是禮賓統籌」、「哪一位主負責帶位」、「哪一位是技術窗口」等。

**第二，講清楚當天重要的時間點與場域資訊。**

例如幾點開放進場、幾點關大門、會不會有中場休息。

也要一併說明行李寄放在哪裡、最近的 ATM、廁所、吸菸區、停車場入口在哪一側。

這些都是來賓最常問的問題，如果前線人員每次都要回頭問主辦，現場節奏一定會被打亂。

**第三，點名當天的重要貴賓與關鍵活動。**

哪些人來了要特別留意、有哪些單位如果出現，要主動上前打招呼。

也可以簡單說明今天的流程亮點（例如某一段演出、頒獎、特別橋段），讓前線人員知道自己不是「只來發票」，而是參與整個活動的一部分。

**第四，說明遇到臨時狀況時要怎麼處理。**

例如名單上找不到人、有人臨時多帶人、有人不小心走錯入口，或有貴賓情緒比較緊張時的應對方式。

可以給大家一兩個具體例子，說明：

「遇到這種情況，先說什麼、先請對方到哪裡稍坐、接著要通知誰。」

對禮賓統籌來說，這個 Brief 非常重要：

講話時要有信心，節奏也要穩，不要給人「你自己也很慌」的感覺。

建議在一開始就先說好：Brief 先完整講完，中間不要插話，有問題可以在最後一起問。這樣可以避免在細節裡被打斷，導致重要資訊沒有講清楚。

---

## 開放進場：禮賓桌的三件核心工作

### 1. 管理排隊與分流：讓每個人知道自己該站在哪裡

一開門，人潮湧進來，第一件事不是查名單，而是先避免「所有人擠成一條隊伍」。

理想狀態是，貴賓、媒體、一般觀眾、現場購票或工作人員，各自有清楚的排隊區或窗口。標示越簡單越好，用顏色、方向箭頭、簡短文字就能讓人一眼分辨。

同時，禮賓桌附近應該有人在隊伍旁邊走動，協助引導、回答簡單問題，而不是所有人都坐在桌後面。

這樣可以避免「排錯隊排了十幾分鐘」這種很傷體驗的狀況發生。

### 2. 快速確認身分：用最少的問題，完成必要的確認

當貴賓走到禮賓桌前，前線人員的目標是「用最少的問題，確認足夠資訊，把票發到對的人手上」。

一個很實用的順序是：

1. **先問：「請問是誰邀請您的？」**
    
    先知道邀請人，可以讓後續查詢更快，因為在 Google 試算表或系統中，通常會有「邀請人」欄位，可以先從那一組的名單開始找。
    
2. 接著再確認姓名（或單位＋姓名），在該邀請人的名單底下查找。
3. 找到紀錄後，確認這位貴賓應該拿到的票券種類、票數與座位。

這樣比一開始就只問名字有效率得多，尤其是同名很多、或是名單較大的活動。

在實作上，理想的狀況是前線人員只要打幾個關鍵字（邀請人、貴賓姓名），就能在系統或 Google 試算表裡快速找到該筆紀錄，而不需要一直翻頁或上下拉。

### 3. 把例外狀況「請到旁邊處理」

現場一定會出現一些「狀況題」：

- 對方說自己有被邀請，但名單裡暫時找不到
- 忘了帶票、手機沒電、QR code 打不開
- 原本說一位，臨時多帶兩三位同行

這些問題本身就會讓來賓有壓力，如果還站在整條隊伍最前端，被後面的人盯著看，體驗會更不好。

比較好的做法是：

- 前線先穩住對方，用一句話簡單說明：「我們到旁邊幫您查一下，不耽誤後面的隊伍。」
- 把人請到旁邊預先安排好的「協助區」，由比較資深的同事或禮賓統籌接手處理。
- 主換票線繼續流動，不被一個案例卡住。

這樣既照顧到當事人感受，也保護了整體排隊節奏。

---

## 禮賓桌不是「發票桌」，而是「接待與轉接的樞紐」

演出當天，禮賓統籌的角色，不應該是被綁在桌後面點名單的人，而是站在現場、看整體氣氛與動線的人。

他要同時關注：

- 哪些重要貴賓已經到了，需不需要人陪同進場或介紹座位
- 哪一條排隊線開始變長，要不要臨時增加人手或開新窗口
- 有沒有看起來迷路或猶豫的來賓，可能需要主動上前詢問

這也是為什麼「取票名單要做到任何第一次看的人都看得懂」這件事這麼重要。

如果禮賓統籌必須一直坐在桌前教大家怎麼看名單，就沒有時間在現場補位、協調和打招呼。

理想的畫面是：

前線人員可以靠名單和簡單的 SOP 撐住作業，禮賓統籌則在場內場外巡邏，隨時接住「超出 SOP 的那一部分」。

---

## 現場應變：幾個實用的禮賓心法

### 心法一：在安全與容量允許下，先讓人進來，再回頭查原因

如果明顯是重要貴賓，只是名單一時找不到，又已經接近開演時間，在安全與總人數可控的前提下，與其讓人卡在門口被問細節，不如先安排座位讓他進場，之後再回頭補齊資料。

這當然需要禮賓統籌現場判斷，但原則很簡單：

「不要讓關鍵對象在門口被拖太久。」

### 心法二：不要在隊伍正中央解釋太久

所有需要細談、說明「為什麼會這樣」的對話，都適合在旁邊的協助區進行，而不是在排隊主線的最前端。

這樣可以同時降低當事人的壓力，也讓後面的人不會覺得整條隊伍被一個問題卡死。

### 心法三：永遠要有一個「系統掛掉時的 Plan B」

再穩定的系統都有可能在最關鍵的時間點出狀況。

所以禮賓桌至少要準備：

- 一份可以離線使用的名單（例如事先匯出成 PDF 或印成紙本）
- 一套清楚的說法讓前線人員知道：如果系統當機，現在要先怎麼做、不需要慌張

這樣即使網路突然不穩，整體換票流程也不會全面停擺。

### 心法四：給前線人員一套「可以放心使用的說法」

前線人員講出去的每一句話，都會被來賓當成是品牌的立場與態度。

禮賓統籌可以提前準備幾句大家都可以直接使用的話術，例如：

- 排隊等候時：「不好意思讓您久等，我們會盡量讓每一位都快速完成手續。」
- 遇到需要請到旁邊協助時：「這邊可能需要多確認一下，我們到旁邊幫您查一下，不耽誤後面的朋友。」
- 座位緊張時：「目前座位比較緊張，我們先幫您找到可以落座的位置，如果有更好的座位釋出會再優先幫您調整。」

讓前線人員知道自己可以怎麼說，會比只丟一句「你們就看狀況回覆」安心得多。

### 心法五：找幾個「很會聊天、又認得很多貴賓」的同事站在場邊

除了桌前的作業人員之外，很值得刻意安排一兩位「對當天貴賓非常熟、又擅長交際聊天」的人，在禮賓桌與進場動線附近遊走。

這些人不一定要負責實際換票，更重要的角色是：

- 在排隊或等待的時候，主動跟貴賓寒暄，讓等待不會那麼尷尬、無聊
- 幫禮賓團隊加速「認臉」，看到熟悉的人可以小聲提醒同事他是誰、跟公司的關係是什麼
- 留意是否有重要貴賓站在角落沒人招呼，主動上前介紹、拉進動線

他們可以是公司內部原本就跟業界很熟的人，例如業務主管、製作人、資深經紀，或是平常就常跟貴賓接觸的同事。

重點是：**不要把這一兩個人綁在桌後面做行政，而是讓他們有空「在人群裡走來走去」**。

對貴賓來說，能在一進場就遇到熟面孔、聊上幾句，感受會比只拿到一張票、多了一層「我是被記得的」的溫度。

---

## 小結：禮賓桌守住的是第一印象，不只是一張張票

演出當天，禮賓桌看起來是在發票、核對名單、安排座位，但實際上守住的是：

- 貴賓一到場，就知道該往哪裡走
- 排隊有秩序、有分流，不會糊成一團
- 遇到狀況時，有人主動接住，不會讓人臉上掛不住
- 重要來賓感受到「有人在等他」，而不是自己闖進一個陌生空間

當動線、人員分工、活動前 Brief、取票名單和現場應變都被好好設計過，禮賓桌就不只是「發票的地方」，而會變成整場活動第一個、也是最重要的一個「品牌接觸點」。`,E0=`# 為什麼公關名單不能只放在一份 Excel？從資料庫開始的邀約流程

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 4

# 為什麼公關名單不能只放在一份 Google 試算表？從資料庫開始的邀約流程

現在多數團隊在管理公關貴賓時，習慣做法是：

> 「這一場活動，就再開一份 Google 表單跟試算表。」


短期看起來很直覺：

這一場就這一份表，想加誰、想改什麼，直接在線上動就好。

但當活動辦到第三場、第五場、第十場，你會開始發現：

同一批人被重複建檔、聯絡方式版本不一致、新人接手完全看不懂歷史關係。

這篇文章想談的是：**公關名單為什麼不能只放在一份 Google 試算表？**以及，「從貴賓資料庫開始」的邀約流程，大概會長什麼樣子。

---

## 先講清楚：公關名單跟貴賓資料庫，有什麼不一樣？

在實務上，有兩個概念很容易混在一起，但性質其實不同。

### 公關名單：這一場活動「要邀誰」

可以把**公關名單**想成「這一場活動的邀請清單」。

通常是這樣產生的：

- 開一份新的 **Google 表單** 收集出席意願
- 或直接在 **Google 試算表** 裡手動整理這一場要邀的人

裡面列的是這次要邀請的對象：

合作夥伴、媒體、KOL、客戶、長官、內部同仁親友⋯⋯

它本質上是「一次性的專案名單」—— 過了這場活動，這份清單的壽命就差不多結束了。

### 貴賓資料庫：這個品牌「認識了誰」

**貴賓資料庫**則比較像「長期累積的關係資產」。

- 每一位貴賓只有一筆主資料（通常用 Email 當主要識別）
- 底下可以累積很多「歷次參與紀錄」

資料庫裡不只是姓名和聯絡方式，而是會慢慢長成：

- 他在哪個單位、做什麼職務
- 誰是他的邀請人
- 過去參加過哪些活動、來了幾次、帶了誰
- 有沒有特別備註（例如座位偏好、飲食、合作潛力）

**簡單講：公關名單是「這一場要邀誰」，貴賓資料庫是「我們品牌認識了誰」。**

如果沒有後者，每一場活動都像是從頭開始。

---

## 只用 Google 表單＋試算表管理公關名單，會遇到的實際問題

Google 生態系很好用，協作也方便，但如果只用「一場一表單、一場一試算表」的方式來做公關名單，長期會遇到幾個很實際的痛點。

### 一：同一個人被建了好幾次，資料永遠對不齊

每一場活動都「另開一份 Google 表單／試算表」，很容易出現這種情況：

- 第一場叫他「王小明」，第二場叫他「小明 王」，第三場只剩下英文名
- 有人更新了他的手機，但只改了其中一份試算表
- 有人手動調整了 Email，結果只有最新那一場是對的

久了之後，沒有人說得準：

- 哪一個才是「正確的王小明」？
- 這位貴賓到底有幾筆資料？

**每次寄信，都像在賭：能不能聯繫到他。**

### 二：名單散落各地，新人接手完全看不懂歷史關係

實際運作一兩年之後，你大概會看到這樣的畫面：

- 去年春酒一份試算表
- 年中發表會一份
- 藝人專場又一份
- 媒體場、VIP 包廂、內部場各有自己的表單／試算表

這些檔案可能分別躺在：

- 不同人的 My Drive / 共用雲端硬碟
- 不同專案資料夾
- 老同事的私人雲端（但他已經離職或調組）

新人加入，要接手禮賓或公關票時，看到的會是：

> 「我知道過去邀過很多人，但我完全看不出來，誰跟公司關係比較深、誰是重點貴賓。」


很多實際的人脈跟脈絡，變成只存在於某幾個人的腦袋和訊息紀錄裡，而不是團隊可以共用的資產。

### 三：每一場都在「重組名單」，時間花在整理，不是在經營關係

典型流程大概是這樣：

1. 新活動要開跑 → 再開一份新的 Google 試算表
2. 從以前的試算表複製一堆人過來 → 刪刪改改
3. 想加某個產業的人 → 再去翻之前某一場的表
4. 發現同一個人被貼了好幾次 → 再人工去重

**每一場都在「重組名單」，而不是在「累積關係」。**

真正被消耗的是：

- 複製貼上
- 手動比對
- 手動合併／去重

而不是坐下來問：

這一次，我們要不要把某個產業的貴賓再往前經營？

有哪些人是我們真的想長期維繫的核心 VIP？

### 四：無法一眼看出「這一個人，跟我們互動了多久？」

當貴賓資料散落在不同活動的 Google 試算表裡，你很難回答幾個關鍵問題：

- 這位貴賓，過去三年總共參加過幾次活動？
- 他第一場是誰邀來的？現在主要是誰在對接？
- 他有沒有從「一般貴賓」慢慢變成「合作夥伴」或「核心貴賓」？

這些問題其實是**品牌關係管理**的核心。

如果沒有一個地方可以把這些歷史串起來，你就很難決定：

- 誰應該被提升成核心貴賓
- 誰已經很久沒邀，可能要特別找機會 reconnect
- 哪一群人是「幾乎每次邀都來」，值得投入更多資源經營

---

## 從「貴賓資料庫」開始設計邀約流程，會長什麼樣子？

把 Google 表單／試算表換成「貴賓資料庫」思維，不只是換工具，而是換流程設計：

**先有長期的貴賓總表，再從裡面挑出這一場的名單。**

### 一：先建立一份「貴賓總表」，每人只有一筆主資料

第一步，是建立一份可以長期使用的**貴賓資料庫**（可以在 CRM、INVITI 這類系統裡維護），而不是每次都「新開一份試算表」。

這份資料庫裡：

- 每一位貴賓只有一筆主資料（用 Email 當主要識別）
- 包含姓名、單位、職稱、聯絡方式、邀請人、所在城市等欄位
- 可以加上標籤（媒體、KOL、品牌夥伴、VIP 客戶、潛在客戶⋯⋯）

未來所有活動要「新增人」時，都回寫到這一份資料庫，而不是只存在某一場活動的 Google 試算表。

### 二：每一場活動，只是從資料庫「篩出一份清單」

當有新活動要開跑時，流程變成：

- 從貴賓資料庫，用條件篩選出這次想邀的對象
    - 例如：北部地區＋過去一年至少來過一次＋重要等級≧某一級
- 這份篩選結果，就成為這場活動的「初始邀請清單」

接下來在這份清單上調整：

- 有些人這次先暫停
- 有些人需要升級座位或權重
- 再補充一些針對這次主題的新對象

核心差別在於：

**你是從「累積好的資料庫」往下挑，不是每次都從零開始組名單。**

### 三：活動過程中新增的貴賓，會回寫到同一個資料庫

現場一定會出現很多「本來沒在資料庫裡，但這次活動新認識的人」：

- 某位貴賓臨時帶了朋友來
- 合作夥伴換窗口
- 媒體派了新的記者

如果只是在這一場活動的 Google 試算表多打一行，活動結束後，這個人就「消失在歷史裡」。

資料庫思維會要求：

- 活動前後，把這些新出現的人補齊基本資料
- 回寫到「貴賓資料庫」的主資料裡
- 下次再邀時，他們就是「已知對象」，不用重新填表或重新輸入一次

久而久之，你會發現貴賓資料庫越來越完整，

新增人數會減少，邀請越來越像是在「經營熟人」，而不是每次都在「重新開發」。

### 四：每一次出席紀錄，變成這個人的「歷史足跡」

當活動辦完，出席紀錄不只是留在某一場活動的試算表，而是：

- 回寫到每一位貴賓的歷史紀錄裡
- 形成一條時間線：哪一場有來、帶了誰、坐哪一區、由誰邀請

這時，你就真的可以在系統裡看到：

- 這個人過去三年來了幾次？
- 他是從哪一種活動認識你們的？
- 哪些人幾乎每次邀都來，是「品牌鐵粉」？

這些資訊，對禮賓、業務、企劃、品牌單位都是很實用的決策基礎。

---

## Google 表單什麼時候很好用？什麼情境更適合用 INVITI？

講到這裡，並不是說「不要再用 Google 表單」，而是**要選對情境**。

### Google 表單：適合一次性、欄位很多的複雜收集

Google 表單非常適合：

- 需要收集很多欄位、一次性資訊的問卷或報名
    - 例如：需要蒐集發票資訊、飲食習慣、訂房資訊、交通選項等
- 內部調查、活動滿意度問卷、工作坊回饋表
- 那種「超過 20 個欄位」的複雜填寫場景

這些場景下，Google 表單的自由度高、題型彈性大，非常好用。

但缺點是：

這些資料大多只被用在「當次活動」或「當次調查」，活動結束後，試算表就躺在雲端，很少被真正整理回貴賓資料庫裡。

### INVITI：適合「只需要紀錄出席狀況」的邀約與禮賓流程

如果這場活動的核心需求，其實只是：

- 我想知道這些貴賓有沒有要來
- 想知道他會帶幾位同行
- 想統一管理邀請狀態、出席狀態與票數

這種情境就非常適合用 INVITI：

- 系統本身就以「貴賓資料庫＋活動出席管理」為核心
- 邀請、回覆出席、名單整理、寄信、票數統計都發生在同一套結構裡
- 每一次的出席紀錄會自動回寫到該位貴賓的主資料，不用手動串資料

簡單說：

- **需要收集一堆一次性欄位 → 用 Google 表單很合理**
- **只是要確認「來／不來、來幾位」，而且希望長期累積關係 → 用 INVITI 會更乾淨**

---

## Google 表單／試算表還是很好用，但角色要換一下

所以問題不是「要不要丟掉 Google 表單」，而是把它的角色調整成：

- **Google 表單／試算表**：
    - 當作「工作階段工具」，用來做短期問卷、一次性的細節收集
- **貴賓資料庫（例如 INVITI）**：
    - 當作「長期儲存空間」，專門負責管理貴賓資料與歷史出席紀錄

活動結束後，該回到貴賓資料庫的資料要回去；

Google 試算表則是過程中的工作檔，而不是長期唯一資料來源。

---

## 小結：把公關名單當「一次性 Google 試算表」，現場撐得過去；但品牌撐不久

如果只看一場活動，用 Google 表單＋試算表處理公關名單完全沒問題；

但如果你希望品牌一年辦很多場活動，關係可以越做越厚，就需要換一個問題來問：

> 「我們要怎麼讓每一場活動的名單，最後都回到同一個貴賓資料庫？」


當你開始從**貴賓資料庫**出發，Google 表單和試算表就會回到它們最擅長的位置：輔助收集、輔助整理。

而真正被累積下來的，不再是一堆分散的檔案，而是一份能跨活動檢索、可以被新人接手的**關係資產**。`,j0=`# 為什麼在發出第一張公關票之前，要先想清楚邀約目標？

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2025年11月27日
種類: 產業觀點
閱讀時間（分鐘）: 5

# 為什麼在發出第一張公關票之前，要先想清楚邀約目標？

很多團隊在活動公布後，第一個反應是：「快點把公關票分出去！」

社群想趕快敲 KOL，業務想先卡位客戶，內部同事也會來問：「這場可以留幾張給我？」

聽起來大家都很熱情，但如果**在發出第一張公關票之前，沒有先講清楚「邀約目標」**，後面很容易變成一場資源拉扯戰：誰聲音大、誰先搶到、誰就有票，真正該被好好邀請的人，反而可能沒有位子。

這篇文章要談的就是這件事：

為什麼所有禮賓流程裡，**「先想清楚邀約目標」應該放在最前面**。

---

## 先定義一下：我們在說的這些詞是什麼意思？

在實務上，幾個名詞常常被混在一起，所以先用很白話的方式說清楚：

**貴賓（VIP）**

指的是「這場活動特別希望他來的人」。

可能是合作品牌、媒體、KOL、政府與業界長官、重要客戶，也可能是公司內部的關鍵夥伴。重點不是頭銜，而是：**他們來不來，會不會影響活動的成果和後續關係**。

**公關票**

不對外販售、專門用來邀請貴賓的票。

數量通常有限，而且會牽涉到座位區域、體驗感受，因此不能只用「有空位就塞」的邏輯處理。

**邀約目標**

是這篇文章的主角，可以拆成三個問題來想：

1. 這場活動，**最重要希望邀請到哪些類型的人？**
2. 各種類型之間，**優先順序是什麼？**
3. 他們來了之後，**我們期待看到什麼成果？**

在 INVITI 的禮賓流程裡，「邀約目標」會在活動 Kick off 後、前置期就先由禮賓統籌和活動負責人一起討論，明確定義對象類別與優先順序，並連帶規劃貴賓體驗與後續期待成果。

---

## 如果沒有先想清楚邀約目標，會發生什麼事？

很多活動看似「一路辦完」，但過程中的摩擦和浪費，其實都可以追溯到這一步沒做好。

### 情況一：票都發出去了，卻邀不到真正關鍵的人

最常見的情況是：

活動一宣布，大家各自開始邀「自己覺得重要的人」：

- 社群優先想到 KOL 和創作者
- 業務優先想到大客戶
- 行銷想到合作品牌
- 公司內部想到親友、同事

如果沒有一份透明的「邀約目標」，沒有人會知道：

- 這一場到底**最優先**的是哪一群？
- 哪些人是「沒位子也要想辦法生出來」？
- 哪些人是「如果還有位子就邀」？

結果常常是：

票用得很快、現場看起來也不空，但活動結束回頭看，會發現真正有機會帶來報導、合作案或長期關係的人，來得並沒有想像中多。

### 情況二：票數分配變成「先喊先贏」

沒有邀約目標，公關票的分配就很容易變成：

- 誰先開口，誰就多拿幾張
- 喊得比較急、比較大聲的部門，拿到的票就比較多

但在禮賓流程裡，**票數分配應該是「依邀約目標來分配角色和座位區」**。實務經驗中，我們也特別強調：「務必要依邀約目標分配各組票數及座位區域，劃定後各區互不影響」。

換句話說，如果沒有前面的「邀約目標」，後面的「票數與座位分配」就會失去依據，變成短期協商，而不是基於活動策略做決定。

### 情況三：重複邀約、沒人統整，資訊很難回頭檢討

沒有清楚邀約目標，也很難在週會上對齊「每一組在邀誰、為了什麼目的在邀」。流程文件裡建議，每個角色在分配票數時，要一起定義好各自的邀約對象與目標，避免不知道又重複邀同一批人。

如果這一段沒有做好，實務上就會出現：

- 同一位貴賓收到兩三個不同窗口的邀請
- 沒有人清楚知道「這位貴賓到底是誰邀來的、為了什麼目的？」
- 活動後要做成效檢討時，沒有辦法把「邀約行動」和「實際成果」連在一起

結果就是：每一場活動都很忙，但每一場都像是重新開始。

---

## 那什麼是「想清楚」的邀約目標？

「邀約目標」不是一句很空的話，而是可以寫下來、給全團隊看的具體設定。你可以用以下三個面向來檢查：

### 面向一：邀請對象的「類別」是什麼？

先從最基本的分類開始，把這場活動可能邀請的對象，用「角色」拆開來，例如：

- 媒體與記者
- KOL、創作者
- 業務客戶與潛在客戶
- 合作品牌與廠商
- 政府與業界長官
- 公司內部：董事會、CXO、員工、親友

每個活動的組合不一定相同，但至少要有一份「這次我們會邀的類型清單」，讓所有人都對「我們打算邀請哪些族群」有同樣的畫面。

### 面向二：不同類別之間的「優先順序」是什麼？

接下來，要誠實回答一個現實問題：**如果票真的不夠，誰可以晚點邀，甚至不邀？**

這聽起來有點殘酷，但如果不先排出優先順序，資源就會默默被「誰比較會爭取」拿走，而不是「誰對活動最有幫助」。

舉例來說：

- 這場是新品發表會，希望媒體報導和 KOL 曝光，那媒體與創作者可能要排在前面
- 這場是年度感謝晚宴，重點在維繫客戶關係，那既有客戶與合作品牌就會是優先

這個優先順序，一定要在前期由活動負責人和禮賓統籌一起確認，寫進文件或 Notion，讓每個組在拉票時，都知道自己站在哪一層。

### 面向三：貴賓「來了之後」，你期待看到什麼？

文件裡有提到一個很重要的步驟：在設定邀約目標時，要一起討論貴賓參與後的期望成果，例如發文、業務合作、長期關係經營等。

這一步可以把邀請行為，從「為了把位子坐滿」提升成「為了達成某種具體效果」。

例如：

- 媒體：希望能有一到兩篇專題報導或影音側拍
- KOL：希望他在演出後能分享心得文或限動
- 客戶：希望透過這場活動，推進下一個合作專案
- 長官：希望讓他更理解團隊在做什麼、未來有機會支持預算或政策

當你把「我們希望他來，是為了什麼」寫下來，不只是方便檢討，也會自然影響你後續怎麼跟對方溝通、現場怎麼接待。

---

## 實作上，怎麼跟團隊一起對齊邀約目標？

理想狀態不是禮賓統籌自己在文件裡寫一寫，而是變成整個團隊都參與的一次討論。

你可以在活動 Kick off 後，安排一個很具體的小段落：

### 步驟一：先丟出「理想來賓樣貌」

請各組先不要管票數，只回答一件事：

> 「如果這場活動完全照你理想的樣子進行，你會希望現場坐哪些人？」


請大家直接寫出具體的「長相」：

- 哪些媒體？哪幾個節目或平台？
- 哪些 KOL？粉絲數級距、大約風格？
- 哪些品牌或客戶？是現有客戶還是想開發的？

這一步有點像在畫 persona，不用太細，但要足夠具體。

### 步驟二：一起把類別與優先順序寫在同一張表上

接著，把剛剛所有類別寫在同一張表格裡，開始討論：

- 這場活動最關鍵的類別有哪些？
- 有沒有「沒位子也要擠出來」的一群？
- 有沒有「如果還有票，就優先邀」的一群？

不要怕有衝突，因為這個過程本來就會牽涉到資源分配。重要的是：**大家在同一個會議裡把話說開，而不是在私下聊天裡各自抱怨。**

### 步驟三：連動到「公關票數分配」與「座位規劃」

邀約目標談完後，下一步是把它實際寫進公關票分配表裡。

流程文件裡的建議是：依據邀約目標，把公關票數與座位區域分給各個角色（如 CXO、業務、經紀、社群等），並明確標示在座位圖上，避免各區互相影響或搶位置。

當這些東西固定下來，每一組就知道：

- 自己可以運用多少票
- 需要對哪些邀約對象負責
- 超出時要用什麼機制協調

這樣一來，禮賓統籌也不必一直當「裁判」，而是回到「我們一開始共同決定的邀約目標」上來討論。

---

## 小結：邀約目標，是整個禮賓流程的起點

在真正開始寄出第一封邀請信、發出第一張公關票之前，花一點時間把邀約目標講清楚，看起來像是在拖延腳步，實際上卻是替後面所有環節鋪路。當到演出前一週時，大家都非常忙碌，不應該把時間花在可以在一個月前就確認好的事情。

當邀約目標被定義出來：

- 公關票的分配有了依據，不再只是「誰喊得比較大聲」
- 各組知道自己在邀誰、為了什麼邀，較不會重複、也比較好檢討
- 禮賓統籌可以用一套大家認同的原則來協調，而不是只憑印象判斷

下一次你在準備大型活動、手上握著第一批公關票時，不妨先暫停一下，問團隊一個問題：

> 「我們這場活動，最希望邀請到的是誰？

> 他們來了之後，我們想看到什麼改變？」


當這個答案被寫下來，才算是真正啟動了禮賓流程。`,T0=`# 產品更新｜不用再找客服開帳號：使用者可以自行管理邀請人

撰寫人: 游幃傑 Jerry Yu
撰寫時間: 2026年2月6日
種類: 產品更新
閱讀時間（分鐘）: 3

# 系統使用者與表單邀請人分離

在 INVITI 的實務操作，常遇到兩個使用者回饋：

- **新增「表單邀請人」很麻煩**：需要請客服協助註冊成「系統使用者」，流程久、門檻高。
- **系統使用者權限太複雜**：要分角色和權限，設定成本高，也容易搞混誰能做什麼。常遇到進入活動後卻沒有編輯權限的狀況。

---

## 本次更新後，使用者會感受到的改變

- **邀請人不用再靠客服處理**
    
    使用者可以自行在系統中新增、編輯、停用邀請人。
    
- **權限設計變得更簡單**
    
    只要是「能登入系統」的使用者，**就能完整操作**（活動、出席名單、邀請人、信件模板等），不需要再花時間理解複雜的權限分類。
    
- **票數與邀請來源更一致**
    
    票數、防呆與統計會以「邀請人」為基準，不受「系統使用者」影響，避免人員異動造成混亂。
    

---

## 名次定義

### 系統使用者（可以登入後台的人）

- **是什麼**：有 INVITI 帳號、可以登入後台的同事／夥伴
- **主要用途**：**負責「操作系統」**
- **可以做什麼**
    - 建立/管理活動與場次
    - 管理出席名單、貴賓資料
    - 管理邀請人名單、信件模板等後台設定

### 邀請人（表單與名單上看到的邀請來源）

- **是什麼**：負責邀請貴賓的人（例如：某位窗口、合作單位窗口、部門同事）
- **主要用途**：**用在「邀請來源」與「票數控管」相關流程，僅是一筆資訊與帳號操作無關**
- **會出現在哪裡**
    - 邀請表單的「您的邀請人」
    - 後台出席名單的「邀請人」欄位
- **重要特性**
    - **不需要登入** INVITI
    - 系統使用者可以在「邀請人管理」中管理名單

---

## 這次更新做了什麼？

### 1. 新增「邀請人管理」頁面

位置：左側選單 →  **邀請人管理**

使用者可以在這裡：

- **新增邀請人**：填入姓名、Email
- **編輯邀請人資料**
- **停用 / 啟用**：停用不會刪掉歷史紀錄，僅是把邀請人從邀請表單中的欄位移除

---

### 2. 表單與後台的「邀請人」來源統一

- 邀請表單的「您的邀請人」下拉選單，改為使用「邀請人管理」中的名單
- 在該為邀請人有票數的情況下，就會出現在邀請表單中的邀請人欄位中

---

### 3. 權限簡化：能登入系統就能完整操作

- 取消過往「權限類型」帶來的複雜度
- 目前階段：**所有系統使用者權限一致**
    - 登入後即可進行完整的後台管理與操作

---

## 使用者需要做什麼設定嗎？

多數情況下不用。更新後你可以先做兩件事：

- 到 **邀請人管理** 把常用邀請人補齊、名稱統一
- 把不再使用的邀請窗口 **停用**，讓表單與後台下拉選單保持乾淨`,I0=`\uFEFF名稱,撰寫人,撰寫時間,種類,閱讀時間（分鐘）\r
什麼是「禮賓」？為什麼活動一定要有人專門負責招待？,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
為什麼在發出第一張公關票之前，要先想清楚邀約目標？,游幃傑 Jerry Yu,2025年11月27日,產業觀點,5\r
公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則,游幃傑 Jerry Yu,2025年11月27日,產業觀點,5\r
為什麼公關名單不能只放在一份 Excel？從資料庫開始的邀約流程,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
產品更新｜不用再找客服開帳號：使用者可以自行管理邀請人,游幃傑 Jerry Yu,2026年2月6日,產品更新,3`,fo=Object.assign({"../assets/Blog/什麼是「禮賓」？為什麼活動一定要有人專門負責招待？ 2b81854591d78069989dc42bbe16564b.md":b0,"../assets/Blog/公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則 2b81854591d780aea136f3928e709a71.md":k0,"../assets/Blog/活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟 2b81854591d78083a7fbce5a721eebdd.md":N0,"../assets/Blog/活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了 2b81854591d78023ac9de3b5467e8016.md":C0,"../assets/Blog/演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法 2b81854591d780ba8437d8902268a0e0.md":S0,"../assets/Blog/為什麼公關名單不能只放在一份 Excel？從資料庫開始的邀約流程 2b81854591d7805c93b1d4ce1ce45cf7.md":E0,"../assets/Blog/為什麼在發出第一張公關票之前，要先想清楚邀約目標？ 2b81854591d780b8a455f2a2c41d990b.md":j0,"../assets/Blog/產品更新｜不用再找客服開帳號：使用者可以自行管理邀請人 2ff1854591d7803e8accea89edf75e16.md":T0});function Qf(n){if(!n||!n.trim())return 0;const s=n.trim(),o=s.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);if(o){const[,l,c,d]=o;return new Date(parseInt(l,10),parseInt(c,10)-1,parseInt(d,10)).getTime()}return new Date(s).getTime()}function P0(n){const s=n.trim().split(`
`),o=s[0].split(","),l=o.findIndex(g=>g.includes("名稱")),c=o.findIndex(g=>g.includes("撰寫人")),d=o.findIndex(g=>g.includes("撰寫時間")),f=o.findIndex(g=>g.includes("種類")),p=o.findIndex(g=>g.includes("閱讀時間")),h=[];for(let g=1;g<s.length;g++){const x=s[g];if(!x.trim())continue;const y=[];let N="",C=!1;for(let T=0;T<x.length;T++){const S=x[T];S==='"'?C=!C:S===","&&!C?(y.push(N.trim()),N=""):N+=S}y.push(N.trim());const j=y[l]?.trim()||"";if(!j)continue;let b=j.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100);(!b||b.length<3)&&(b=`post-${g}`);const k=Object.keys(fo).find(T=>{try{const S=decodeURIComponent(T);return S.replace(/\.md$/,"").replace(/\s+[a-f0-9]+$/i,"").includes(j)||S.includes(j)}catch{return T.includes(encodeURIComponent(j))}})||"";h.push({id:b,title:j,author:y[c]?.trim()||"",date:y[d]?.trim()||"",category:y[f]?.trim()||"",readTime:parseInt(y[p]?.trim()||"0",10),markdownPath:k})}return h}function vs(){return[...P0(I0)].sort((o,l)=>{const c=Qf(o.date||"");return Qf(l.date||"")-c})}function _0(n){return vs().find(o=>o.id===n)}function Bc(n){if(!n)return"";if(fo[n]){const o=fo[n];return typeof o=="string"?o:o?.default||""}const s=Object.keys(fo).find(o=>{try{const l=decodeURIComponent(o),c=decodeURIComponent(n);return o===n||l===c||l.includes(c)||c.includes(l)||o.includes(n.split("/").pop()||"")}catch{return o.includes(n)||n.includes(o)}});if(s&&fo[s]){const o=fo[s];return typeof o=="string"?o:o?.default||""}return""}function vo(n){const s=n.split(`
`),o={};let l=0,c=!1;for(let h=0;h<Math.min(10,s.length);h++){const g=s[h];if(g.includes("撰寫人:"))o.author=g.split("撰寫人:")[1]?.trim()||"",c=!0;else if(g.includes("撰寫時間:"))o.date=g.split("撰寫時間:")[1]?.trim()||"",c=!0;else if(g.includes("種類:"))o.category=g.split("種類:")[1]?.trim()||"",c=!0;else if(g.includes("閱讀時間（分鐘）:")){const x=g.split("閱讀時間（分鐘）:")[1]?.trim()||"0";o.readTime=parseInt(x,10),c=!0}else if(g.startsWith("#")&&c){l=h;break}}let d=c&&l>0?s.slice(l):s;d.length>0&&d[0].trim().startsWith("# ")&&(d=d.slice(1));const f=R0(d.join(`
`)),p=D0(d.join(`
`));return{frontmatter:o,content:f,excerpt:p}}function D0(n){let s=n.replace(/^#+\s+/gm,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\[([^\]]+)\]\([^\)]+\)/g,"$1").replace(/^[-*+]\s+/gm,"").replace(/^>\s+/gm,"").trim();const o=s.split(`

`)[0]||s;return o.length>200?o.substring(0,200)+"...":o}function R0(n){let s=n;s=s.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g,(g,x,y)=>{let N="";try{const C=decodeURIComponent(y);N=C.split("/").pop()||C.split("\\").pop()||"",N=N.split("?")[0].split("#")[0]}catch{N=y.split("/").pop()||y.split("\\").pop()||"",N=N.split("?")[0].split("#")[0]}return N=N.replace(/\s+\d+(?=\.(png|jpg|jpeg|gif|webp|svg)$)/i,""),!N||!N.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)?g:`<img data-instruction-image="${N}" alt="${x||""}" style="max-width: 100%; height: auto;" />`}),s=s.replace(/^### (.*$)/gim,(g,x)=>{const y=x.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");return`<h3 id="${y}" data-anchor="${y}">${x}</h3>`}),s=s.replace(/^## (.*$)/gim,(g,x)=>{const y=x.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");return`<h2 id="${y}" data-anchor="${y}">${x}</h2>`}),s=s.replace(/^# (.*$)/gim,(g,x)=>{const y=x.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");return`<h1 id="${y}" data-anchor="${y}">${x}</h1>`}),s=s.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),s=s.replace(/\*(.*?)\*/g,"<em>$1</em>"),s=s.replace(/\[([^\]]+)\]\(([^\)]+)\)/g,(g,x,y)=>`<a href="${y}" target="_blank" rel="noopener noreferrer">${x}</a>`),s=s.replace(/^---$/gim,"<hr/>"),s=s.replace(/^>\s+(.*$)/gim,"<blockquote>$1</blockquote>");const o=s.split(`
`),l=[],c=[];let d=null;function f(g){const x=g.match(/^(\s*)/);return x?x[1].length:0}function p(g){for(d!==null&&d>=g&&(l.push("</li>"),d=null);c.length>0&&c[c.length-1].level>=g;){const x=c.pop();x.type==="ul"?l.push("</ul>"):x.type==="ol"&&l.push("</ol>")}}function h(g){const x=g.trim();return/^[-*+]\s+/.test(x)||/^\d+\.\s+/.test(x)}for(let g=0;g<o.length;g++){const x=o[g],y=x.trim(),N=f(x),C=g+1<o.length?o[g+1]:null,j=C?f(C):-1,k=(C?h(C):!1)&&j>N;if(!y){d!==null&&(l.push("</li>"),d=null),p(0),l.push("");continue}const T=y.match(/^[-*+]\s+(.+)$/);if(T){d!==null&&d>=N&&(l.push("</li>"),d=null);const D=c.length>0?c[c.length-1]:null;(!D||D.level!==N||D.type!=="ul")&&(p(N),c.push({type:"ul",level:N}),l.push("<ul>")),k?(l.push(`<li>${T[1]}`),d=N):l.push(`<li>${T[1]}</li>`);continue}const S=y.match(/^(\d+)\.\s+(.+)$/);if(S){const D=S[1],L=S[2];d!==null&&d>=N&&(l.push("</li>"),d=null);const P=c.length>0?c[c.length-1]:null;(!P||P.level!==N||P.type!=="ol")&&(p(N),c.push({type:"ol",level:N}),l.push("<ol>")),k?(l.push(`<li value="${D}">${L}`),d=N):l.push(`<li value="${D}">${L}</li>`);continue}d!==null&&(l.push("</li>"),d=null),p(0),l.push(x)}return d!==null&&l.push("</li>"),p(0),s=l.join(`
`),s=s.split(`
`).map(g=>{const x=g.trim();return x?x.startsWith("<")?x:"<p>"+x+"</p>":""}).join(`
`),s=s.replace(/<p><\/p>/g,""),s=s.replace(/<p>\s*<\/p>/g,""),s=s.replace(/<\/ul>\s*<ul>/g,""),s=s.replace(/<\/ol>\s*<ol>/g,""),s=s.replace(/<p>(<img[^>]*>)<\/p>/g,"$1"),s}function A0(n){const s=[],o=n.split(`
`);for(const l of o){const d=l.trim().match(/^##\s+(.+)$/);if(d){const f=d[1].replace(/\*\*/g,"").trim(),p=f.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");s.push({id:p,text:f,level:2})}}return s}const M0=({isMobile:n=!1,locale:s="tc",onNavigate:o})=>{const l=Ge(s),c={產品更新:l.blogPage.productUpdates,客戶故事:l.blogPage.caseStudies,產業觀點:l.blogPage.industryInsights,活動花絮:l.blogPage.events},d=v.useMemo(()=>{const h=vs().slice(0,3),g=["https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800","https://images.unsplash.com/photo-1519741497674-611481863552?w=800","https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800","https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800","https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800","https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"];return h.map((x,y)=>{const N=x.markdownPath?Bc(x.markdownPath):"",C=N?vo(N):null,j=g[y%g.length],b=x.author||"INVITI 團隊";return{id:x.id,thumbnail:j,title:x.title,excerpt:C?.excerpt||"閱讀完整文章...",category:c[x.category]||x.category,date:x.date,author:{name:b,role:"產品與營運",avatar:la},readTime:`${x.readTime} ${l.blogPage.readTime}`}})},[l,c]),f=p=>{if(o){const h=encodeURIComponent(p);o(`/blog/${h}`)}};return a.jsx("section",{id:"blog",className:"section-padding bg-background",children:a.jsxs("div",{className:n?"container-fluid px-4":"container",children:[a.jsxs("div",{className:`d-flex ${n?"flex-column mb-4":"align-items-center justify-content-between mb-5"}`,children:[a.jsx("h2",{className:`mb-3 ${n?"text-start":"mb-0"}`,children:l.blog.sectionTitle}),!n&&a.jsx("button",{onClick:()=>o?.("/blog"),className:"btn btn-link text-decoration-none text-dark px-0",children:l.blog.viewAll})]}),a.jsx("div",{className:`row g-4 ${n?"":"row-cols-1 row-cols-md-3"}`,children:d.map(p=>a.jsx("div",{className:n?"":"col d-flex",children:a.jsx(wc,{...p,onClick:()=>f(p.id)})},p.id))}),n&&a.jsx("div",{className:"mt-4",children:a.jsx("button",{onClick:()=>o?.("/blog"),className:"btn btn-link text-decoration-none text-dark px-0",children:l.blog.viewAll})})]})})},O0="/INVITI-Website/assets/INVITI_Logo_Light-CsUaGvrd.webp",fn=({isMobile:n=!1,locale:s="tc",onNavigate:o,onNavigateToHelpCenter:l})=>{const c=Ge(s);return a.jsx("footer",{className:"border-0",style:{backgroundColor:"#2D350B",color:"#FDFDFD"},children:a.jsxs("div",{className:n?"container-fluid px-4 py-5":"container py-5",children:[a.jsxs("div",{className:"row g-5",children:[a.jsx("div",{className:`col-12 ${n?"text-center mb-4":"col-lg-3 mb-0 d-flex justify-content-center"}`,children:a.jsx("img",{src:O0,alt:"INVITI",style:{height:n?"48px":"114px",width:"auto",display:"flex",justifyContent:"center",alignItems:"center",filter:"brightness(0) invert(1)"},className:"img-fluid"})}),a.jsx("div",{className:"col-10 col-lg-9 mx-auto",children:a.jsxs("div",{className:"row g-4",children:[a.jsxs("div",{className:"col-12 col-md-4",children:[a.jsx("h6",{className:"mb-3 fw-bold",style:{color:"#FDFDFD"},children:c.footer.company}),a.jsxs("div",{className:"d-flex flex-column gap-2",children:[a.jsx("button",{onClick:()=>o?.("/about"),className:"text-decoration-none small text-start bg-transparent border-0 p-0",style:{color:"#FDFDFD",opacity:.9},onMouseEnter:d=>d.currentTarget.style.opacity="1",onMouseLeave:d=>d.currentTarget.style.opacity="0.9",children:c.footer.aboutUs}),a.jsx("button",{onClick:()=>o?.("/terms"),className:"text-decoration-none small text-start bg-transparent border-0 p-0",style:{color:"#FDFDFD",opacity:.9},onMouseEnter:d=>d.currentTarget.style.opacity="1",onMouseLeave:d=>d.currentTarget.style.opacity="0.9",children:c.footer.termsAndPrivacy})]})]}),a.jsxs("div",{className:"col-12 col-md-4",children:[a.jsx("h6",{className:"mb-3 fw-bold",style:{color:"#FDFDFD"},children:c.footer.resources}),a.jsxs("div",{className:"d-flex flex-column gap-2",children:[a.jsx("button",{onClick:l,className:"text-decoration-none small text-left bg-transparent border-0 p-0",style:{color:"#FDFDFD",opacity:.9},onMouseEnter:d=>d.currentTarget.style.opacity="1",onMouseLeave:d=>d.currentTarget.style.opacity="0.9",children:c.footer.helpCenter}),a.jsx("button",{onClick:()=>o?.("/blog"),className:"text-decoration-none small text-left bg-transparent border-0 p-0",style:{color:"#FDFDFD",opacity:.9},onMouseEnter:d=>d.currentTarget.style.opacity="1",onMouseLeave:d=>d.currentTarget.style.opacity="0.9",children:c.footer.blog})]})]}),a.jsxs("div",{className:"col-12 col-md-4",children:[a.jsx("h6",{className:"mb-3 fw-bold",style:{color:"#FDFDFD"},children:c.footer.invitiFor}),a.jsxs("div",{className:"d-flex flex-column gap-2 small",style:{color:"#FDFDFD",opacity:.9},children:[a.jsx("span",{children:c.footer.enterprise}),a.jsx("span",{children:c.footer.teams}),a.jsx("span",{className:"mb-0",children:c.footer.individuals})]})]})]})})]}),a.jsx("hr",{className:"my-4",style:{borderColor:"rgba(255, 252, 235, 0.25)"}}),a.jsx("div",{className:"text-center",children:a.jsx("p",{className:"small mb-0",style:{color:"#FDFDFD",opacity:.8},children:c.footer.copyright.replace("{year}",new Date().getFullYear().toString())})})]})})},ac=768;function xo(){const[n,s]=v.useState(void 0);return v.useEffect(()=>{const o=window.matchMedia(`(max-width: ${ac-1}px)`),l=()=>{s(window.innerWidth<ac)};return o.addEventListener("change",l),s(window.innerWidth<ac),()=>o.removeEventListener("change",l)},[]),!!n}const L0=({isMobile:n=!1,onAcceptAll:s,onRejectNonEssential:o,onManagePreferences:l,onViewPolicy:c,locale:d="tc"})=>{const f=Ge(d),p=xo(),h=n===!0?!0:p;return a.jsx("div",{className:`fixed-banner bg-white border-top shadow-sm ${h?"px-4 py-4":""}`,children:a.jsx("div",{className:h?"w-full":"container py-4",children:a.jsxs("div",{className:`${h?"flex flex-col gap-3":"d-flex align-items-center justify-content-between gap-4"}`,children:[a.jsxs("p",{className:`mb-0 text-secondary ${h?"text-sm text-center":""}`,children:[f.cookieBanner.message," ",a.jsx("button",{onClick:c,className:`btn btn-link p-0 text-dark ${h?"text-sm":""}`,style:{textDecoration:h?"none":"underline"},children:f.cookieBanner.cookiePolicy})]}),a.jsxs("div",{className:`${h?"flex flex-col w-full gap-2":"d-flex align-items-center gap-2"}`,children:[a.jsx(st,{variant:"primary",size:"sm",onClick:s,className:h?"w-full":"",children:f.cookieBanner.acceptAll}),a.jsx(st,{variant:"secondary",size:"sm",onClick:l,className:h?"w-full":"",children:f.cookieBanner.managePreferences}),a.jsx(st,{variant:"secondary",size:"sm",onClick:o,className:h?"w-full":"",children:f.cookieBanner.rejectNonEssential})]})]})})})};function Gp(n){var s,o,l="";if(typeof n=="string"||typeof n=="number")l+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(s=0;s<c;s++)n[s]&&(o=Gp(n[s]))&&(l&&(l+=" "),l+=o)}else for(o in n)n[o]&&(l&&(l+=" "),l+=o);return l}function Yp(){for(var n,s,o=0,l="",c=arguments.length;o<c;o++)(n=arguments[o])&&(s=Gp(n))&&(l&&(l+=" "),l+=s);return l}const B0=(n,s)=>{const o=new Array(n.length+s.length);for(let l=0;l<n.length;l++)o[l]=n[l];for(let l=0;l<s.length;l++)o[n.length+l]=s[l];return o},F0=(n,s)=>({classGroupId:n,validator:s}),qp=(n=new Map,s=null,o)=>({nextPart:n,validators:s,classGroupId:o}),Ji="-",Xf=[],z0="arbitrary..",$0=n=>{const s=H0(n),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=n;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return V0(f);const p=f.split(Ji),h=p[0]===""&&p.length>1?1:0;return Kp(p,h,s)},getConflictingClassGroupIds:(f,p)=>{if(p){const h=l[f],g=o[f];return h?g?B0(g,h):h:g||Xf}return o[f]||Xf}}},Kp=(n,s,o)=>{if(n.length-s===0)return o.classGroupId;const c=n[s],d=o.nextPart.get(c);if(d){const g=Kp(n,s+1,d);if(g)return g}const f=o.validators;if(f===null)return;const p=s===0?n.join(Ji):n.slice(s).join(Ji),h=f.length;for(let g=0;g<h;g++){const x=f[g];if(x.validator(p))return x.classGroupId}},V0=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const s=n.slice(1,-1),o=s.indexOf(":"),l=s.slice(0,o);return l?z0+l:void 0})(),H0=n=>{const{theme:s,classGroups:o}=n;return W0(o,s)},W0=(n,s)=>{const o=qp();for(const l in n){const c=n[l];Fc(c,o,l,s)}return o},Fc=(n,s,o,l)=>{const c=n.length;for(let d=0;d<c;d++){const f=n[d];U0(f,s,o,l)}},U0=(n,s,o,l)=>{if(typeof n=="string"){G0(n,s,o);return}if(typeof n=="function"){Y0(n,s,o,l);return}q0(n,s,o,l)},G0=(n,s,o)=>{const l=n===""?s:Qp(s,n);l.classGroupId=o},Y0=(n,s,o,l)=>{if(K0(n)){Fc(n(l),s,o,l);return}s.validators===null&&(s.validators=[]),s.validators.push(F0(o,n))},q0=(n,s,o,l)=>{const c=Object.entries(n),d=c.length;for(let f=0;f<d;f++){const[p,h]=c[f];Fc(h,Qp(s,p),o,l)}},Qp=(n,s)=>{let o=n;const l=s.split(Ji),c=l.length;for(let d=0;d<c;d++){const f=l[d];let p=o.nextPart.get(f);p||(p=qp(),o.nextPart.set(f,p)),o=p}return o},K0=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,Q0=n=>{if(n<1)return{get:()=>{},set:()=>{}};let s=0,o=Object.create(null),l=Object.create(null);const c=(d,f)=>{o[d]=f,s++,s>n&&(s=0,l=o,o=Object.create(null))};return{get(d){let f=o[d];if(f!==void 0)return f;if((f=l[d])!==void 0)return c(d,f),f},set(d,f){d in o?o[d]=f:c(d,f)}}},bc="!",Zf=":",X0=[],Jf=(n,s,o,l,c)=>({modifiers:n,hasImportantModifier:s,baseClassName:o,maybePostfixModifierPosition:l,isExternal:c}),Z0=n=>{const{prefix:s,experimentalParseClassName:o}=n;let l=c=>{const d=[];let f=0,p=0,h=0,g;const x=c.length;for(let b=0;b<x;b++){const k=c[b];if(f===0&&p===0){if(k===Zf){d.push(c.slice(h,b)),h=b+1;continue}if(k==="/"){g=b;continue}}k==="["?f++:k==="]"?f--:k==="("?p++:k===")"&&p--}const y=d.length===0?c:c.slice(h);let N=y,C=!1;y.endsWith(bc)?(N=y.slice(0,-1),C=!0):y.startsWith(bc)&&(N=y.slice(1),C=!0);const j=g&&g>h?g-h:void 0;return Jf(d,C,N,j)};if(s){const c=s+Zf,d=l;l=f=>f.startsWith(c)?d(f.slice(c.length)):Jf(X0,!1,f,void 0,!0)}if(o){const c=l;l=d=>o({className:d,parseClassName:c})}return l},J0=n=>{const s=new Map;return n.orderSensitiveModifiers.forEach((o,l)=>{s.set(o,1e6+l)}),o=>{const l=[];let c=[];for(let d=0;d<o.length;d++){const f=o[d],p=f[0]==="[",h=s.has(f);p||h?(c.length>0&&(c.sort(),l.push(...c),c=[]),l.push(f)):c.push(f)}return c.length>0&&(c.sort(),l.push(...c)),l}},ex=n=>({cache:Q0(n.cacheSize),parseClassName:Z0(n),sortModifiers:J0(n),...$0(n)}),tx=/\s+/,nx=(n,s)=>{const{parseClassName:o,getClassGroupId:l,getConflictingClassGroupIds:c,sortModifiers:d}=s,f=[],p=n.trim().split(tx);let h="";for(let g=p.length-1;g>=0;g-=1){const x=p[g],{isExternal:y,modifiers:N,hasImportantModifier:C,baseClassName:j,maybePostfixModifierPosition:b}=o(x);if(y){h=x+(h.length>0?" "+h:h);continue}let k=!!b,T=l(k?j.substring(0,b):j);if(!T){if(!k){h=x+(h.length>0?" "+h:h);continue}if(T=l(j),!T){h=x+(h.length>0?" "+h:h);continue}k=!1}const S=N.length===0?"":N.length===1?N[0]:d(N).join(":"),D=C?S+bc:S,L=D+T;if(f.indexOf(L)>-1)continue;f.push(L);const P=c(T,k);for(let $=0;$<P.length;++$){const F=P[$];f.push(D+F)}h=x+(h.length>0?" "+h:h)}return h},rx=(...n)=>{let s=0,o,l,c="";for(;s<n.length;)(o=n[s++])&&(l=Xp(o))&&(c&&(c+=" "),c+=l);return c},Xp=n=>{if(typeof n=="string")return n;let s,o="";for(let l=0;l<n.length;l++)n[l]&&(s=Xp(n[l]))&&(o&&(o+=" "),o+=s);return o},ox=(n,...s)=>{let o,l,c,d;const f=h=>{const g=s.reduce((x,y)=>y(x),n());return o=ex(g),l=o.cache.get,c=o.cache.set,d=p,p(h)},p=h=>{const g=l(h);if(g)return g;const x=nx(h,o);return c(h,x),x};return d=f,(...h)=>d(rx(...h))},sx=[],Je=n=>{const s=o=>o[n]||sx;return s.isThemeGetter=!0,s},Zp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Jp=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ix=/^\d+\/\d+$/,ax=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,cx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ux=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,dx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ao=n=>ix.test(n),Ee=n=>!!n&&!Number.isNaN(Number(n)),rr=n=>!!n&&Number.isInteger(Number(n)),lc=n=>n.endsWith("%")&&Ee(n.slice(0,-1)),jn=n=>ax.test(n),fx=()=>!0,px=n=>lx.test(n)&&!cx.test(n),em=()=>!1,mx=n=>ux.test(n),hx=n=>dx.test(n),gx=n=>!he(n)&&!ge(n),yx=n=>wo(n,rm,em),he=n=>Zp.test(n),jr=n=>wo(n,om,px),cc=n=>wo(n,kx,Ee),ep=n=>wo(n,tm,em),vx=n=>wo(n,nm,hx),Mi=n=>wo(n,sm,mx),ge=n=>Jp.test(n),ms=n=>bo(n,om),xx=n=>bo(n,Nx),tp=n=>bo(n,tm),wx=n=>bo(n,rm),bx=n=>bo(n,nm),Oi=n=>bo(n,sm,!0),wo=(n,s,o)=>{const l=Zp.exec(n);return l?l[1]?s(l[1]):o(l[2]):!1},bo=(n,s,o=!1)=>{const l=Jp.exec(n);return l?l[1]?s(l[1]):o:!1},tm=n=>n==="position"||n==="percentage",nm=n=>n==="image"||n==="url",rm=n=>n==="length"||n==="size"||n==="bg-size",om=n=>n==="length",kx=n=>n==="number",Nx=n=>n==="family-name",sm=n=>n==="shadow",Cx=()=>{const n=Je("color"),s=Je("font"),o=Je("text"),l=Je("font-weight"),c=Je("tracking"),d=Je("leading"),f=Je("breakpoint"),p=Je("container"),h=Je("spacing"),g=Je("radius"),x=Je("shadow"),y=Je("inset-shadow"),N=Je("text-shadow"),C=Je("drop-shadow"),j=Je("blur"),b=Je("perspective"),k=Je("aspect"),T=Je("ease"),S=Je("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...L(),ge,he],$=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],z=()=>[ge,he,h],U=()=>[ao,"full","auto",...z()],Y=()=>[rr,"none","subgrid",ge,he],ye=()=>["auto",{span:["full",rr,ge,he]},rr,ge,he],ae=()=>[rr,"auto",ge,he],oe=()=>["auto","min","max","fr",ge,he],de=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],se=()=>["start","end","center","stretch","center-safe","end-safe"],Z=()=>["auto",...z()],ie=()=>[ao,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],A=()=>[n,ge,he],ee=()=>[...L(),tp,ep,{position:[ge,he]}],K=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",wx,yx,{size:[ge,he]}],V=()=>[lc,ms,jr],Q=()=>["","none","full",g,ge,he],J=()=>["",Ee,ms,jr],le=()=>["solid","dashed","dotted","double"],fe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>[Ee,lc,tp,ep],H=()=>["","none",j,ge,he],te=()=>["none",Ee,ge,he],ce=()=>["none",Ee,ge,he],we=()=>[Ee,ge,he],Ce=()=>[ao,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[jn],breakpoint:[jn],color:[fx],container:[jn],"drop-shadow":[jn],ease:["in","out","in-out"],font:[gx],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[jn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[jn],shadow:[jn],spacing:["px",Ee],text:[jn],"text-shadow":[jn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ao,he,ge,k]}],container:["container"],columns:[{columns:[Ee,he,ge,p]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:U()}],"inset-x":[{"inset-x":U()}],"inset-y":[{"inset-y":U()}],start:[{start:U()}],end:[{end:U()}],top:[{top:U()}],right:[{right:U()}],bottom:[{bottom:U()}],left:[{left:U()}],visibility:["visible","invisible","collapse"],z:[{z:[rr,"auto",ge,he]}],basis:[{basis:[ao,"full","auto",p,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ee,ao,"auto","initial","none",he]}],grow:[{grow:["",Ee,ge,he]}],shrink:[{shrink:["",Ee,ge,he]}],order:[{order:[rr,"first","last","none",ge,he]}],"grid-cols":[{"grid-cols":Y()}],"col-start-end":[{col:ye()}],"col-start":[{"col-start":ae()}],"col-end":[{"col-end":ae()}],"grid-rows":[{"grid-rows":Y()}],"row-start-end":[{row:ye()}],"row-start":[{"row-start":ae()}],"row-end":[{"row-end":ae()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":oe()}],"auto-rows":[{"auto-rows":oe()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...de(),"normal"]}],"justify-items":[{"justify-items":[...se(),"normal"]}],"justify-self":[{"justify-self":["auto",...se()]}],"align-content":[{content:["normal",...de()]}],"align-items":[{items:[...se(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...se(),{baseline:["","last"]}]}],"place-content":[{"place-content":de()}],"place-items":[{"place-items":[...se(),"baseline"]}],"place-self":[{"place-self":["auto",...se()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:Z()}],mx:[{mx:Z()}],my:[{my:Z()}],ms:[{ms:Z()}],me:[{me:Z()}],mt:[{mt:Z()}],mr:[{mr:Z()}],mb:[{mb:Z()}],ml:[{ml:Z()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:ie()}],w:[{w:[p,"screen",...ie()]}],"min-w":[{"min-w":[p,"screen","none",...ie()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[f]},...ie()]}],h:[{h:["screen","lh",...ie()]}],"min-h":[{"min-h":["screen","lh","none",...ie()]}],"max-h":[{"max-h":["screen","lh",...ie()]}],"font-size":[{text:["base",o,ms,jr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,ge,cc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",lc,he]}],"font-family":[{font:[xx,he,s]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ge,he]}],"line-clamp":[{"line-clamp":[Ee,"none",ge,cc]}],leading:[{leading:[d,...z()]}],"list-image":[{"list-image":["none",ge,he]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ge,he]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...le(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ee,"from-font","auto",ge,jr]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[Ee,"auto",ge,he]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ge,he]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ge,he]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ee()}],"bg-repeat":[{bg:K()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},rr,ge,he],radial:["",ge,he],conic:[rr,ge,he]},bx,vx]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:Q()}],"rounded-s":[{"rounded-s":Q()}],"rounded-e":[{"rounded-e":Q()}],"rounded-t":[{"rounded-t":Q()}],"rounded-r":[{"rounded-r":Q()}],"rounded-b":[{"rounded-b":Q()}],"rounded-l":[{"rounded-l":Q()}],"rounded-ss":[{"rounded-ss":Q()}],"rounded-se":[{"rounded-se":Q()}],"rounded-ee":[{"rounded-ee":Q()}],"rounded-es":[{"rounded-es":Q()}],"rounded-tl":[{"rounded-tl":Q()}],"rounded-tr":[{"rounded-tr":Q()}],"rounded-br":[{"rounded-br":Q()}],"rounded-bl":[{"rounded-bl":Q()}],"border-w":[{border:J()}],"border-w-x":[{"border-x":J()}],"border-w-y":[{"border-y":J()}],"border-w-s":[{"border-s":J()}],"border-w-e":[{"border-e":J()}],"border-w-t":[{"border-t":J()}],"border-w-r":[{"border-r":J()}],"border-w-b":[{"border-b":J()}],"border-w-l":[{"border-l":J()}],"divide-x":[{"divide-x":J()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":J()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...le(),"hidden","none"]}],"divide-style":[{divide:[...le(),"hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...le(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ee,ge,he]}],"outline-w":[{outline:["",Ee,ms,jr]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",x,Oi,Mi]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",y,Oi,Mi]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[Ee,jr]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":J()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",N,Oi,Mi]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[Ee,ge,he]}],"mix-blend":[{"mix-blend":[...fe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ee]}],"mask-image-linear-from-pos":[{"mask-linear-from":W()}],"mask-image-linear-to-pos":[{"mask-linear-to":W()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":W()}],"mask-image-t-to-pos":[{"mask-t-to":W()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":W()}],"mask-image-r-to-pos":[{"mask-r-to":W()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":W()}],"mask-image-b-to-pos":[{"mask-b-to":W()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":W()}],"mask-image-l-to-pos":[{"mask-l-to":W()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":W()}],"mask-image-x-to-pos":[{"mask-x-to":W()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":W()}],"mask-image-y-to-pos":[{"mask-y-to":W()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[ge,he]}],"mask-image-radial-from-pos":[{"mask-radial-from":W()}],"mask-image-radial-to-pos":[{"mask-radial-to":W()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":L()}],"mask-image-conic-pos":[{"mask-conic":[Ee]}],"mask-image-conic-from-pos":[{"mask-conic-from":W()}],"mask-image-conic-to-pos":[{"mask-conic-to":W()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ee()}],"mask-repeat":[{mask:K()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ge,he]}],filter:[{filter:["","none",ge,he]}],blur:[{blur:H()}],brightness:[{brightness:[Ee,ge,he]}],contrast:[{contrast:[Ee,ge,he]}],"drop-shadow":[{"drop-shadow":["","none",C,Oi,Mi]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",Ee,ge,he]}],"hue-rotate":[{"hue-rotate":[Ee,ge,he]}],invert:[{invert:["",Ee,ge,he]}],saturate:[{saturate:[Ee,ge,he]}],sepia:[{sepia:["",Ee,ge,he]}],"backdrop-filter":[{"backdrop-filter":["","none",ge,he]}],"backdrop-blur":[{"backdrop-blur":H()}],"backdrop-brightness":[{"backdrop-brightness":[Ee,ge,he]}],"backdrop-contrast":[{"backdrop-contrast":[Ee,ge,he]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ee,ge,he]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ee,ge,he]}],"backdrop-invert":[{"backdrop-invert":["",Ee,ge,he]}],"backdrop-opacity":[{"backdrop-opacity":[Ee,ge,he]}],"backdrop-saturate":[{"backdrop-saturate":[Ee,ge,he]}],"backdrop-sepia":[{"backdrop-sepia":["",Ee,ge,he]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ge,he]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ee,"initial",ge,he]}],ease:[{ease:["linear","initial",T,ge,he]}],delay:[{delay:[Ee,ge,he]}],animate:[{animate:["none",S,ge,he]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,ge,he]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:te()}],"rotate-x":[{"rotate-x":te()}],"rotate-y":[{"rotate-y":te()}],"rotate-z":[{"rotate-z":te()}],scale:[{scale:ce()}],"scale-x":[{"scale-x":ce()}],"scale-y":[{"scale-y":ce()}],"scale-z":[{"scale-z":ce()}],"scale-3d":["scale-3d"],skew:[{skew:we()}],"skew-x":[{"skew-x":we()}],"skew-y":[{"skew-y":we()}],transform:[{transform:[ge,he,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ce()}],"translate-x":[{"translate-x":Ce()}],"translate-y":[{"translate-y":Ce()}],"translate-z":[{"translate-z":Ce()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ge,he]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ge,he]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[Ee,ms,jr,cc]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Sx=ox(Cx);function Ke(...n){return Sx(Yp(n))}function Ex({checked:n=!1,onCheckedChange:s,disabled:o=!1,className:l}){const c=()=>{!o&&s&&s(!n)};return a.jsx("button",{type:"button",role:"switch","aria-checked":n,disabled:o,onClick:c,className:Ke("relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full","border-2 border-transparent transition-colors duration-200 ease-in-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",n?"bg-[#2D3508]":"bg-[#D4D4C4]",o&&"cursor-not-allowed opacity-30",l),style:{width:"44px",height:"26px",backgroundColor:n?"#2D3508":"#D4D4C4",borderRadius:"12px"},children:a.jsx("span",{className:Ke("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg","transition-transform duration-200 ease-in-out"),style:{width:"20px",height:"20px",backgroundColor:"#ffffff",transform:n?"translateX(18px)":"translateX(2px)"}})})}const jx=({isOpen:n,onClose:s,preferences:o,onSave:l,isMobile:c=!1})=>{const[d,f]=v.useState(o),p=xo(),h=c===!0?!0:p;if(v.useEffect(()=>{f(o)},[o]),v.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]),v.useEffect(()=>{const C=j=>{j.key==="Escape"&&s()};return n&&window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C)}},[n,s]),!n)return null;const g=()=>{const C={strictlyNecessary:!0,functional:!0,analytics:!0,marketing:!0};f(C),l(C),s()},x=()=>{const C={strictlyNecessary:!0,functional:!1,analytics:!1,marketing:!1};f(C),l(C),s()},y=()=>{l(d),s()},N=[{id:"strictlyNecessary",icon:a.jsx(Bv,{size:22,className:"text-gray-700"}),title:"嚴格必要 Cookie",titleEn:"Strictly Necessary Cookies",purpose:"支撐網站核心功能與安全性，例如登入、權限驗證、工作階段維護。",example:"維持您在不同頁面之間的登入狀態，防止未授權的存取。",canDisable:!1,required:!0},{id:"functional",icon:a.jsx(Vp,{size:22,className:"text-gray-700"}),title:"功能性 Cookie",titleEn:"Functional Cookies",purpose:"記住您的個人偏好，讓網站依您的使用習慣呈現適合的內容與介面。",example:"記住您選擇的語言、顯示方式或部分功能設定。",canDisable:!0,required:!1},{id:"analytics",icon:a.jsx(_v,{size:22,className:"text-gray-700"}),title:"分析 Cookie",titleEn:"Analytics / Performance Cookies",purpose:"協助我們以統計方式了解網站使用情況，作為改善產品與內容的參考，不用於直接辨識個人身分。",example:"統計頁面瀏覽次數、停留時間、瀏覽路徑等。",canDisable:!0,required:!1},{id:"marketing",icon:a.jsx(i0,{size:22,className:"text-gray-700"}),title:"行銷 Cookie",titleEn:"Marketing Cookies",purpose:"衡量行銷活動與宣傳素材的成效，在適用情況下，調整我們在自有管道上的溝通方式與推薦內容。",example:"分析不同活動頁、電子報或宣傳連結帶來的註冊與使用情形。",canDisable:!0,required:!1}];return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",onClick:s,children:a.jsxs("div",{className:`bg-white rounded-xl shadow-2xl ${h?"w-full max-w-[343px] mx-4":"w-full max-w-[640px] md:max-w-[560px] lg:max-w-[640px]"} max-h-[90vh] overflow-hidden flex flex-col`,onClick:C=>C.stopPropagation(),children:[a.jsxs("div",{className:`flex items-center justify-between border-b border-[#E6E6E6] ${h?"p-4":"p-6"}`,children:[a.jsxs("div",{children:[a.jsx("h3",{className:"leading-[140%] mb-1",children:"Cookie 偏好設定"}),a.jsx("p",{className:"text-sm text-gray-600",children:"Cookie Preferences"})]}),a.jsx("button",{onClick:s,className:"p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400","aria-label":"Close modal",children:a.jsx(Or,{size:20,className:"text-gray-700"})})]}),a.jsx("div",{className:`flex-1 overflow-y-auto ${h?"p-4":"p-6"}`,children:a.jsx("div",{className:"space-y-6",children:N.map(C=>{const j=d[C.id];return a.jsx("div",{className:"pb-6 border-b border-[#E6E6E6] last:border-0 last:pb-0",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:`flex-shrink-0 mt-1 ${j?"opacity-100":"opacity-70"}`,children:C.icon}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("h4",{className:`font-medium ${h?"text-sm":"text-base"}`,children:C.title}),C.required&&a.jsx("span",{className:"text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded",children:"必要"}),!C.required&&a.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${j?"bg-green-100 text-green-700":"bg-gray-100 text-gray-600"}`,children:j?"已啟用":"已停用"})]}),a.jsx("p",{className:"text-xs text-gray-500 mb-1",children:C.titleEn}),a.jsxs("div",{className:"space-y-2 mt-3",children:[a.jsx("div",{children:a.jsxs("p",{className:`text-gray-700 leading-relaxed ${h?"text-xs":"text-sm"} mb-1`,children:[a.jsx("span",{className:"font-medium",children:"用途："}),C.purpose]})}),a.jsx("div",{children:a.jsxs("p",{className:`text-gray-600 leading-relaxed ${h?"text-xs":"text-sm"}`,children:[a.jsx("span",{className:"font-medium",children:"範例："}),C.example]})}),!C.required&&a.jsx("p",{className:`text-gray-500 italic ${h?"text-xs":"text-sm"} mt-2`,children:C.canDisable?"可以關閉。關閉後網站仍可使用，但部分功能可能會受到影響。":"無法關閉。若您在瀏覽器中完全停用 Cookie，本網站部分功能可能無法正常使用。"})]})]}),a.jsxs("div",{className:"flex-shrink-0 flex flex-col items-center gap-2",children:[a.jsx(Ex,{checked:j,onCheckedChange:b=>f({...d,[C.id]:b}),disabled:C.required,className:j?"opacity-100":"opacity-70"}),!C.required&&a.jsx("span",{className:`text-xs font-medium ${j?"text-green-600":"text-gray-400"}`,children:j?"ON":"OFF"})]})]})},C.id)})})}),a.jsx("div",{className:`border-t border-[#E6E6E6] bg-gray-50 ${h?"p-4":"p-6"}`,children:a.jsxs("div",{className:h?"flex flex-wrap gap-2":"flex items-center justify-between gap-3",children:[a.jsx(st,{variant:"primary",size:h?"sm":"md",onClick:y,className:h?"w-full":"",children:"儲存偏好設定"}),a.jsxs("div",{className:h?"flex flex-col gap-2 w-full":"flex gap-3",children:[a.jsx(st,{variant:"secondary",size:h?"sm":"md",onClick:g,className:h?"w-full":"",children:"全部接受"}),a.jsx(st,{variant:"secondary",size:h?"sm":"md",onClick:x,className:h?"w-full":"",children:"全部拒絕"})]})]})})]})})},Tx=`# Cookie Policy

# Cookie 政策

本 Cookie 政策說明我們如何在 INVITI 官網（以下稱「本網站」）使用 Cookie 及類似技術，以及您可以如何管理這些設定。當您使用本網站時，即表示您同意依本政策使用相關技術。

如需了解更多我們如何處理個人資料，請參考本網站的《隱私權政策》。

---

## 一、什麼是 Cookie？

Cookie 是網站在您瀏覽時，儲存在瀏覽器或裝置中的一小段文字檔案。

當您再次造訪時，網站可讀取這些 Cookie，用來辨識您的瀏覽器、記住偏好設定，或協助完成特定功能。

在本政策中，我們也將性質相近的技術（如 localStorage 等）一併稱為 Cookie。

---

## 二、我們為什麼使用 Cookie？

我們使用 Cookie 的主要目的如下：

1. **維持網站基本運作**：例如登入驗證、頁面導覽、工作階段安全。
2. **改善與個人化體驗**：記住您的語言、顯示方式等偏好設定。
3. **進行統計與效能分析**：了解使用者如何瀏覽網站，作為優化產品與內容的依據。
4. **衡量行銷與溝通成效**：評估不同活動、宣傳管道的效果，調整後續策略。

---

## 三、我們使用的 Cookie 類型

本網站主要使用以下四種類型的 Cookie，並會在 Cookie 偏好設定中清楚標示。

### 3.1 嚴格必要 Cookie（Strictly Necessary Cookies）

**用途**：

支撐網站核心功能與安全性，例如登入、權限驗證、工作階段維護。

**範例**：

維持您在不同頁面之間的登入狀態，防止未授權的存取。

**是否可關閉**：

無法關閉。若您在瀏覽器中完全停用 Cookie，本網站部分功能可能無法正常使用。

---

### 3.2 功能性 Cookie（Functional Cookies）

**用途**：

記住您的個人偏好，讓網站依您的使用習慣呈現適合的內容與介面。

**範例**：

記住您選擇的語言、顯示方式或部分功能設定。

**是否可關閉**：

可以關閉。關閉後網站仍可使用，但部分個人化體驗可能會下降，需要重複設定。

---

### 3.3 分析 Cookie（Analytics / Performance Cookies）

**用途**：

協助我們以統計方式了解網站使用情況，作為改善產品與內容的參考，不用於直接辨識個人身分。

**範例**：

統計頁面瀏覽次數、停留時間、瀏覽路徑等。

**是否可關閉**：

可以關閉。關閉後不影響基本功能，但會降低我們優化網站的依據。

---

### 3.4 行銷 Cookie（Marketing Cookies）

**用途**：

衡量行銷活動與宣傳素材的成效，在適用情況下，調整我們在自有管道上的溝通方式與推薦內容。

**範例**：

分析不同活動頁、電子報或宣傳連結帶來的註冊與使用情形。

**是否可關閉**：

可以關閉。關閉後，您仍可正常使用網站，只是與行銷成效相關的分析與個人化推薦可能會減少。

---

## 四、Cookie 的保存期間

### 4.1 暫時性 Cookie（Session Cookies）

**說明**：

在您開啟瀏覽器至關閉期間有效，關閉瀏覽器後即自動刪除。

多用於維持單次瀏覽過程中的必要功能（例如工作階段管理）。

### 4.2 持久性 Cookie（Persistent Cookies）

**說明**：

會在您的裝置上保留一段預先設定的期間（例如數天、數週或數月），直到到期或您手動刪除。

多用於記住偏好設定、統計分析或行銷成效衡量。

我們會依實際需求設定合理的保存期間，不會無限制地保留 Cookie。

---

## 五、您如何管理或刪除 Cookie？

您可以透過以下方式管理 Cookie：

### 5.1 透過本網站的 Cookie 偏好設定

首次造訪本網站，或在我們更新 Cookie 使用方式時，畫面可能會顯示 Cookie 偏好設定視窗，讓您選擇是否接受各類型 Cookie（嚴格必要 Cookie 除外）。

您也可以隨時透過網站提供的入口，重新開啟偏好設定並調整選項。

### 5.2 透過瀏覽器設定

多數瀏覽器皆提供以下功能：

- 檢視與刪除已儲存的 Cookie；
- 阻擋所有或部分網站的 Cookie；
- 在儲存 Cookie 前顯示提示訊息。

若您在瀏覽器中拒絕或刪除 Cookie，本網站仍可能運作，但部分功能（例如保持登入、記住偏好設定）可能會受到影響。

具體操作方式請參考各瀏覽器的官方說明。

---

## 六、Cookie 提示與同意

當您首次造訪本網站，或我們對 Cookie 使用方式進行重大調整時，本網站可能會顯示 Cookie 提示或偏好設定視窗，說明各類 Cookie 的用途，並提供「全部接受」、「全部拒絕」或「自訂設定」等選項。

在您設定完成並持續使用本網站的情況下，我們將視為您理解並同意依本政策使用 Cookie。若您不同意，請調整 Cookie 偏好、瀏覽器設定，或停止使用本網站。

---

## 七、本政策的更新

我們可能會因服務內容調整、技術更新或相關法規變更，而不時修訂本 Cookie 政策。

若有重大變更，我們會在本網站上以適當方式提示（例如頁面公告、彈出視窗或更新日期標示）。

建議您不定期回到本頁，瞭解最新的 Cookie 使用情形與設定方式。

---

## 八、聯絡方式

若您對本 Cookie 政策有任何疑問或建議，歡迎與我們聯繫：

- 公司名稱：藝氣股份有限公司 ARTSIE INC.
- 聯絡 Email：contact@inviti.vip

我們會儘速回覆您的需求。`,Ix=({onBack:n,onManagePreferences:s,isMobile:o=!1})=>{const l=v.useMemo(()=>vo(Tx),[]);return a.jsx("div",{className:`bg-white min-h-screen ${o?"p-3":"py-16 px-20"}`,children:a.jsxs("div",{className:o?"max-w-[343px]":"max-w-3xl mx-auto",children:[a.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-2 py-1 -ml-2",children:[a.jsx(Xi,{size:o?18:20,className:"group-hover:-translate-x-1 transition-transform"}),a.jsx("span",{className:o?"text-sm":"",children:"Back"})]}),a.jsx("div",{className:"mb-8"}),a.jsx("div",{className:"prose prose-gray max-w-none blog-content cookie-content",dangerouslySetInnerHTML:{__html:l.content}}),a.jsx("style",{children:`
          .cookie-content {
            color: #1f1f1f;
          }
          .cookie-content p {
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          .cookie-content h2 {
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.4;
          }
          .cookie-content h3 {
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.4;
          }
          .cookie-content ul,
          .cookie-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }
          .cookie-content ul {
            list-style: none;
            padding-left: 0;
          }
          .cookie-content ul li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }
          .cookie-content ul li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #1f1f1f;
            font-weight: normal;
          }
          .cookie-content ol {
            list-style-type: decimal;
          }
          .cookie-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
            display: list-item;
          }
          /* Nested lists - preserve indentation */
          .cookie-content ol ul,
          .cookie-content ul ul,
          .cookie-content ol ol,
          .cookie-content ul ol {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
          }
          .cookie-content ol ul {
            list-style: none;
            padding-left: 0;
          }
          .cookie-content ol ul li {
            position: relative;
            padding-left: 1.5rem;
          }
          .cookie-content ol ul li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #1f1f1f;
            font-weight: normal;
          }
          .cookie-content blockquote {
            margin: 2rem 0;
            padding: 1.25rem 1.5rem;
            border-left: 4px solid #e5e5e5;
            background-color: #f9f9f9;
            font-style: italic;
            color: #525252;
          }
          .cookie-content blockquote p {
            margin-bottom: 0;
          }
          .cookie-content a {
            color: #2D3508;
            text-decoration: underline;
            transition: color 200ms;
          }
          .cookie-content a:hover {
            color: #1A1F05;
          }
          .cookie-content hr {
            border: none;
            border-top: 1px solid rgb(162, 162, 162);
            margin: 2rem 0;
          }
        `}),a.jsx("div",{className:"mt-12 pt-8 border-t-2 border-gray-300",children:a.jsx(st,{variant:"secondary",size:o?"sm":"md",onClick:s,children:"Manage cookie preferences"})})]})})},Px=({placeholder:n,isMobile:s=!1,onSearch:o,value:l,onChange:c})=>{const[d,f]=v.useState(""),[p,h]=v.useState(!1),g=l!==void 0?l:d,x=N=>{const C=N.target.value;l===void 0&&f(C),c?.(C),o?.(C)},y=N=>{N.preventDefault(),o?.(g)};return a.jsx("form",{onSubmit:y,className:"relative w-full",children:a.jsxs("div",{className:"relative ",children:[a.jsx(Jv,{className:`absolute text-gray-400 ${s?"left-3 top-1/2 -translate-y-1/2":"left-4 top-1/2 -translate-y-1/2"}`,size:20}),a.jsx("input",{type:"text",value:g,onChange:x,onFocus:()=>h(!0),onBlur:()=>h(!1),placeholder:n,className:`w-full bg-white border transition-colors outline-none leading-[150%] ${p?"border-gray-400":"border-gray-300"} ${s?"h-12 pl-10 pr-4 text-base":"h-12 pl-12 pr-4"}`,style:{borderRadius:"var(--radius-btn, 8px)"}})]})})},Li=({label:n,hasChildren:s=!1,isActive:o=!1,onClick:l,children:c,defaultExpanded:d=!1})=>{const[f,p]=v.useState(d);v.useEffect(()=>{d&&p(!0)},[d]);const h=()=>{s&&p(!f),l?.()};return a.jsxs("div",{className:"w-full",children:[a.jsxs("button",{onClick:h,className:"w-full flex items-center justify-between px-3 py-2 text-left text-sm transition-colors leading-[140%]",style:{backgroundColor:o?"#2D3508":"transparent",color:o?"#FDFDFD":"#2D3508",opacity:o?1:.8},onMouseEnter:g=>{o||(g.currentTarget.style.backgroundColor="#2D3508",g.currentTarget.style.color="#FDFDFD",g.currentTarget.style.opacity="1")},onMouseLeave:g=>{o||(g.currentTarget.style.backgroundColor="transparent",g.currentTarget.style.color="#2D3508",g.currentTarget.style.opacity="0.8")},children:[a.jsx("span",{className:"text-sm",style:{color:"inherit"},children:n}),s&&a.jsx(Fp,{size:16,className:"transition-transform",style:{color:o?"#FDFDFD":"#2D3508",opacity:.7,transform:f?"rotate(90deg)":"rotate(0deg)"}})]}),s&&f&&c&&a.jsx("div",{className:"ml-3 mt-1 border-l border-gray-200 pl-3 space-y-1",children:c})]})},_x=`# 邀請人管理

「邀請人」會出現在 **邀請表單** 與 **出席名單** 的「邀請人」欄位

---

## **如何進入「邀請人管理」？**

- 登入 INVITI 後台
- 左側選單 → **邀請人管理**

---

## **如何新增邀請人？**

- 進入「邀請人管理」頁
- 點選右上角 **新增邀請人**
- 填寫以下資訊（＊為必填）
    1. 邀請人姓名＊
    2. Email＊
- 點選 **儲存** 完成新增

**注意**

- Email 需為正確格式
- 同一個 Email 不能重複（即使之後停用也一樣）

---

## **如何編輯邀請人？**

- 進入「邀請人管理」頁
- 找到要修改的邀請人 → 點選 **編輯**
- 可修改：
    - 邀請人姓名
    - Email（會重新檢查是否與其他邀請人重複）
- 點選 **儲存** 完成更新

---

## **如何停用／啟用邀請人？**

### 停用邀請人

- 進入「邀請人管理」頁
- 找到該邀請人 → 點選 **停用**

停用後會發生：

- **未來新增資料時，下拉選單不會再出現**該邀請人
- **歷史資料不會被刪除**（舊的出席名單仍可看到、可查詢）

### 啟用邀請人

- 在「邀請人管理」找到已停用的邀請人 → 點選 **啟用**
- 啟用後會重新出現在下拉選單中

---

## **邀請人會出現在哪裡？**

- **邀請表單**：貴賓填表時的「您的邀請人」下拉選單
- **後台出席名單**：新增／編輯貴賓時的「邀請人」欄位

---

## **為什麼新增的邀請人沒有出現在邀請表單？**

請依序檢查：

- 該邀請人是否為 **啟用** 狀態（停用就不會出現）
- 該邀請人是否在該場次 **有票數**
    - 系統會依場次的票數分派結果，決定哪些邀請人會出現在表單選項中

---

## 相關文章

[產品更新｜不用再找客服開帳號：使用者可以自行管理邀請人](/INVITI-Website/blog/產品更新不用再找客服開帳號使用者可以自行管理邀請人)`,Dx=`# 信件模板管理

## 信件模板基本介紹

### **什麼是信件模板？**

信件模板是一個預先設定好的信件格式，用於自動化處理貴賓邀請、確認和提醒的電子郵件。系統提供三種類型的信件模板：

- 邀請信：用於首次邀請貴賓，附帶邀請表單
- 確認信：當貴賓確認出席時自動發送
- 提醒信：活動前2-3天發送的出席提醒

### **為什麼要使用信件模板？**

使用信件模板有以下優點：

- 標準化溝通流程，確保每位貴賓收到一致的訊息
- 自動化發信流程，減少人工作業時間
- 可根據不同角色和使用需求設定模板的開放權限
- 支援變數功能，自動帶入貴賓和活動資訊，避免手動輸入錯誤

## **如何建立信件模板？**

### 建立信件模板的步驟

1. 點選左側功能選單，進入「信件模板管理」頁
2. 選擇預新增的模板「邀請信」、「確認信」、「提醒信」
3. 點選「新增模板」按鈕
4. 填寫基本資訊：
    - 模板名稱：為您的模板取一個容易識別的名稱
        - 建議格式：信件種類＿活動名稱
    - 標題：信件的標題
    - 信件種類：選擇邀請信、確認信或提醒信
        - 邀請信：用於首次邀請貴賓，附帶邀請表單
        - 確認信：當貴賓確認出席時系統自動發送
        - 提醒信：活動前2-3天發送的出席提醒

### **什麼是內容變數？**

內容變數是一組預設的替換文字，用於自動帶入相關資訊：

**貴賓資訊：**

---

- {{貴賓名稱}} - 受邀貴賓的姓名
- {{貴賓職稱}} - 受邀貴賓的職位頭銜
- {{貴賓單位}} - 受邀貴賓的所屬公司/單位
- {{貴賓電話}} - 受邀貴賓的聯絡電話
- {{貴賓信箱}} - 受邀貴賓的電子郵件地址
- {{貴賓聯絡人}} - 貴賓指定的聯絡窗口姓名
- {{貴賓聯絡人職稱}} - 聯絡窗口的職位頭銜
- {{貴賓聯絡人手機}} - 聯絡窗口的手機號碼
- {{貴賓聯絡人信箱}} - 聯絡窗口的電子郵件地址

**活動資訊：**

---

- {{活動名稱}} - 活動的正式名稱

**場次資訊：**

---

- {{場次名稱}} - 特定場次的名稱
- {{場次日期}} - 特定場次舉辦的日期
- {{場次進場時間}} - 允許入場的時間
- {{場次開始時間}} - 活動正式開始的時間
- {{場次結束時間}} - 活動預計結束的時間
- {{場地名稱}} - 活動舉辦地點的名稱
- {{場地地址}} - 活動場地的詳細地址
- {{回覆出席死線日期}} - 貴賓需要回覆出席與否的截止日期
- {{邀請信圖片}} - 在場次中上傳的邀請信圖
- {{取票位置圖片}} - 在場次中上傳的取票圖

**邀約資訊：**

---

- {{提供票數}} - 提供給該貴賓的票券數量
- {{索取票數}} - 貴賓實際索取的票券數量
- {{公司名稱}} - 您的公司名稱
- {{公司邀請人}} - 邀請該貴賓的使用者暱稱
- {{取票序號}} - 貴賓的取票序號
- {{邀請表單連結}} - 供貴賓填寫的邀請表單網址
- {{備註}} - 貴賓於該場次的出席備註

### **如何使用內容變數？**

在編輯模板時：

1. 從右側選單中找到需要的變數
2. 點選變數將其插入到內文中
3. 變數會以{{變數名稱}}的格式顯示
    1. 若您使用系統未設定的變數名稱，儲存時會顯示錯誤
4. 系統發信時會自動替換為實際資訊

### **如何儲存信件模板？**

完成編輯後：

1. 點選「儲存」按鈕保存模板
2. 儲存成功後即可在模板列表中查看`,Rx=`# 名詞定義

## 頁面

- 活動相關
    - 全部活動頁
        
        ![全部活動頁.webp](./img/全部活動頁.webp)
        
    - 全部場次頁
        
        ![全部場次頁.webp](./img/全部場次頁.webp)
        
    - 地區出席名單頁：該地區中所有場次出席名單總覽，主要用於寄發邀請信
        
        ![地區出席名單頁＿入口.webp](./img/地區出席名單頁＿入口.webp)
        
        ![地區出席名單頁.webp](./img/地區出席名單頁.webp)
        
    - 場次出席名單頁：該場次的所有出席名單，可以編輯貴賓資訊、參與資訊及寄發其他信件
        
        ![場次出席名單頁＿入口.webp](./img/場次出席名單頁＿入口.webp)
        
        ![場次出席名單頁.webp](./img/場次出席名單頁.webp)
        
- 票務相關
    - 角色分派頁：在單一活動中，分派給使用者角色。一位使用者在同一個活動中只能對應到一個角色
        
        ![角色分派頁＿入口.webp](./img/角色分派頁＿入口.webp)
        
        ![角色分派頁.webp](./img/角色分派頁.webp)
        
    - 票務分派頁：在單一場次中，分派給角色票數。角色被分派到的票數，不能超過場次「總邀請票數」
        
        ![票務分派頁＿入口.webp](./img/票務分派頁＿入口.webp)
        
        ![票務分派頁.webp](./img/票務分派頁.webp)
        

## 邀請表單

- 地區邀請表單
    
    ![場次邀請表單.webp](./img/場次邀請表單.webp)
    
- 場次邀請表單
    
    ![場次邀請表單 1.webp](./img/場次邀請表單 1.webp)`,Ax=`# 基礎操作

## **如何登入系統？**

1. 進入 [系統連結](https://app.inviti.vip/)
2. 使用 Google 或 系統帳號登入
    1. 系統帳號需輸入：公司代號、帳號、密碼

## **忘記密碼怎麼辦？**

**來信 [contact@inviti.vip](mailto:contact@inviti.vip) 並附上帳號資訊（公司名稱、公司代碼、使用者信箱）**

## **如何更改個人資料？**

1. 點擊系統右上角的「齒輪符號」 或 左側功能欄的「個人資料」
2. 修改資料
    1. 「公司名稱」與「公司代號」目前設定為檢視欄位，若需要更新請來信 [contact@inviti.vip](mailto:contact@inviti.vip) 
    2. 暱稱：顯示於本系統的主要稱呼，對外信件也會使用暱稱作為姓名
3. 點擊「儲存」

## **系統是否支援手機使用？**

1. INVITI 系統：目前介面設定僅配合電腦使用，若在手機上開啟可能會有介面跑版狀況發生。
2. 邀請表單：有針對手機做響應式頁面，貴賓可以直接透過手機填寫邀請表單

## **為什麼某些功能無法使用？**

1. 檢查您的在活動中的 角色
    1. 若您在活動中擔任非 管理者 權限的角色，可能會導致您無法使用特定功能，例如 調整活動、分派角色、分派票數等
    2. 如何查看自己在活動中的角色 及 角色權限
        1. 查看角色：進入該活動任一場次的貴賓出席名單，您的角色會顯示於活動名稱下方
        2. 角色權限：於左側選單中選擇「角色管理」，查看您被指派的角色是否為 管理者
2. 若非訂權限問題導致的功能限制，請您透過[客服表單](https://forms.gle/6CrYZYdsXvQfEwEh6)、或來信說明您遇到的狀況，我們將會儘速協助您排除問題

## **系統當機或操作異常怎麼辦？**

1. 重新整理頁面
    1. IOS系統 快捷鍵：Command + R
    2. Windows系統 快捷鍵：F5
2. 清除瀏覽器快取。依照您的瀏覽器不同，可能有不同的操作方式，建議您以 瀏覽器名稱＋清除瀏覽器快取 查詢如何操作
3. 若問題持續發生，請聯繫技術支援：
    - 使用 [客服小幫手](https://notebooklm.google.com/notebook/66be635f-b90b-4381-92b6-8c80116c0965?authuser=7)，直接提問您遇到的問題，客服小幫手將會搜尋系統相關操作方式，並提出可行的解決方式
    - Email: contact@invitiip`,Mx=`# 標籤管理

## 什麼是貴賓標籤？為什麼需要設定標籤？

標籤是識別貴賓屬性的分類標示，用於：

- 快速識別貴賓身分
- 便於分類管理
- 協助活動邀約分組
- 提供數據分析基礎

## 如何設計有效的標籤分類？

建議依照MECE原則（相互獨立，完全窮盡）

- 以產業別為主要分類
- 避免標籤之間重疊
- 確保分類完整涵蓋
- 配合公司需求調整

---

什麼是MECE（Mutually Exclusive, Collectively Exhaustive）

1. 相互獨立（Mutually Exclusive）
    - 每個分類之間不應有重疊
    - 一個特徵不應同時屬於多個分類
2. 完全窮盡（Collectively Exhaustive）
    - 所有可能的情況都要被涵蓋
    - 不能有遺漏的分類
- **範例1：產業類別劃分**
    
    ✅ 符合MECE的分類：
    產業類別劃分：
    
    - 第一產業：農林漁牧業
    - 第二產業：製造業、營造業
    - 第三產業：服務業、金融業
        - 相互獨立：每個產業有明確定義
        - 完全窮盡：涵蓋所有產業類型
    
    ❌ 不符合MECE的分類：
    
    - 科技業／傳產／新創產業／電商
        - 不相互獨立：電商可能是科技業也可能是新創
        - 不完全窮盡：餐飲業可能不屬於以上任何一類
        - 分類標準不一致：標準混合了產業類型（科技業）和企業階段（新創）
- **範例2：生活化案例**
    
    ✅ 符合MECE的分類：
    
    - 用餐時段：午餐（11:00-14:00）/ 下午茶（14:00-17:00）/ 晚餐（17:00-22:00）
        - 相互獨立：時段不重疊
        - 完全窮盡：涵蓋營業時間內所有時段
    
    ❌ 不符合MECE的分類：
    
    - 消費族群：學生／上班族／家庭客／外國人
        - 不相互獨立：一個人可能同時是學生也是外國人
        - 不完全窮盡：可能有其他類型的顧客未被納入

## 如何新增自訂標籤？

1. 點選左側功能選單的「標籤管理」
2. 點選「新增標籤」
3. 填寫標籤名稱、描述和標籤顏色
4. 點選「新增」完成

## 如何管理現有標籤？

在「標籤管理」頁面中：

- 編輯：點選標籤旁「鉛筆」按鈕
- 刪除：點選標籤旁「垃圾桶」按鈕

## 一個貴賓可以有多少個標籤？

貴賓可以沒有標籤或擁有多個標籤，依據實際需求選擇合適的標籤組合，沒有數量限制。`,Ox=`# 活動及場次管理

## **如何新增／編輯／刪除活動？**

- 進入「所有活動」頁，點擊右上方新增活動
- 輸入活動資訊（* 為必填資訊）
    1. 活動名稱*
    2. 活動說明
    3. 確認信模板*
        1. 當貴賓填寫完邀請表單後，系統會自動寄出的確認信件，可於「信件模板管理」頁修改內容
    4. 活動圖照
        1. 尺寸：1350*336px（可同時用於 Google 表單Banner）
        2. 檔案大小：500mb以下

## **如何新增／編輯／刪除場次？**

- **新增場次**
    1. 進入活動的所有場次頁
    2. 點選右上角「新增活動場次」
    3. 填寫場次資訊（* 為必填資訊）
        1. 場次名稱* 
            - 依據活動性質命名，使用者可以依據需求彈性設定
                - 用集數區分：EP1、EP2、EP3 ….等
                - 用貴賓性質區分：KOL場、廠商場、一般觀眾場
                - 依場次日期時間區分：07／30 午場、07／30 晚場、07／31 午場
            - 同一個活動中，場次名稱不可以重複
        2. 演出日期及時間* 
        3. 場次地區* 
            - 同一個地區的場次會被整併，當提供給貴賓「地區邀請表單」時，貴賓可以選擇該地區還有票數的場次。
            - 台北與臺北會被系統判定為兩個地區，請特別留意用字差異
        4. 場地資訊* 
        5. 總邀請票數* 
        6. 回覆截止日期* 
            
            目前系統沒有設定在回覆截止日期後會自動關閉表單，本設定僅作為文字提醒
            
        7. 點選「儲存」完成新增
        8. 邀請信、取票位置圖片
            - 檔案大小：500mb以下

## 場次名稱應該設定成什麼

### 場次編排邏輯可依活動性質彈性設定，以下為常見案例：

**案例1：演唱會**

- 場次標示：日期+場次
- 實際範例：
    - 6/1 晚場
    - 6/2 晚場
    - 6/3 下午場
    - 6/3 晚場

**案例2：公關活動**

- 場次標示：依參與者身份區分
- 實際範例：
    - KOL場
    - 企業高階主管場
    - 政府單位場
    - 一般觀眾場

**案例3：巡演**

- 場次標示：地區+日期
- 實際範例：
    - 台北 3/15
    - 台北 3/16
    - 台中 3/22
    - 高雄 3/29`,Lx=`# 票務分派

## 票務分派的基本邏輯

- 同個角色的票數是由一位或多位使用者共同使用
    - 若角色「股東」有20張票，而「股東」在角色分派中被分派了三位使用者：A、B、C
    - 股東A、股東B、股東C會共用這20張票，若股東A與股東B加總的已使用票數達到20張，股東C也會無法邀請貴賓
- 票務分派的數字與以下功能都有做到數量計算的防呆，避免超額邀請的狀況發生
    - 邀請表單
        - 若該角色的可使用票數歸零時，該角色的所有使用者會從邀請人欄位中被移除
    - 從系統單筆或批量新增貴賓
        - 若該角色的可使用票數歸零時，就無法再單筆或批量新增貴賓
    - 編輯貴賓邀請人
        - 假設貴賓A原本的邀請人為使用者D（角色為公關），若需要將貴賓A的邀請人改為股東A（角色為股東），但此時股東已經將票數使用完畢時，也無法調整邀請人
- 在邀請名單中列舉貴賓名單時的票數計算方式
    
    基本邏輯為，如果將貴賓列入了貴賓名單中，就需要先幫對方預留票數，等到貴賓回覆確認參加後，才去計算貴賓確認參加的出席人數，避免超額邀約的狀況發生。
    
    - 出席狀態 = 尚未寄出邀請信、已寄出邀請信件
        - 票數計算會以「提供票數」進行加總
    - 出席狀態 = 確認參加
        - 票數計算會以「已取票數」進行加總
    - 出席狀態 = 已取消、拒絕參加
        - 票數計算會是 0

## **如何設定場次總票數？**

1. 在活動場次列表點選鉛筆圖示，編輯場次資訊
2. 在場次資訊中設定「總邀請票數」
    1. 總邀請票數必須要大於等於該場次已分派的票數，若調整為低於已分派票數，系統會提醒您，要先去票務分派頁面調整已分派票數。
3. 點選「新增」或「更新」完成設定

## **如何分派票券給各角色？**

1. 進入該場次的「貴賓出席名單」
2. 點選「票務分派」
3. 點選右上角「檢視模式」，切換為「編輯模式」
    1. 新增
        1. 點選右下角的「加號按鈕」
        2. 選擇要分派的角色及張數（如：業務、製作等，需先在角色設定頁面完成設定）
    2. 調整
        1. 調整該角色的可使用張數
    3. 刪除
        1. 該角色右方的垃圾桶按鈕
4. 點選右下角的儲存圖示以儲存當下的更新。若您沒有點擊儲存圖示，該更新不會被系統紀錄

## **如何查看票券分配狀況？**

1. 進入該場次的「貴賓出席名單」
2. 點選「票務分派」
3. 查看統計資訊：
    - 各組可使用票數
    - 各組已使用票數
    - 各組剩餘票數`,Bx=`# 角色管理及角色分派

## **角色管理**

- **新增角色**
    1. 點選左側選單「角色管理」
    2. 點選右上角「新增角色」
    3. 填寫角色資訊：
        - 角色名稱
            - 通常會使用以下常見的分類，只需要將與公關名單管理的相關角色加入即可，不建議將公司所有角色都加入。（舉例可能比較不需要加入的角色：工程師、工讀生，使用者仍可按照實際使用狀況調整）
                - 公司職稱
                - 專案職稱
        - 角色描述
    4. 點選「新增」完成
- **編輯角色**
    1. 點選左側選單「角色管理」
    2. 選擇需要編輯角色右方的鉛筆符號
    3. 進入編輯介面
    4. 點擊「儲存」
- **刪除角色**
    1. 點選左側選單「角色管理」
    2. 選擇需要刪除角色右方的垃圾桶符號

## **如何在活動中分派使用者的角色？**

1. 進入活動的「全部場次頁」
2. 點選「角色分派」，進入角色分派頁
3. 點選右上角的「檢視模式」，並切換為「編輯模式」
4. 新增、調整或刪除使用者角色
5. 將「編輯模式」，切換回「檢視模式」即可儲存變更
    1. 若您沒有將編輯模式切換回檢視模式，系統不會儲存您的變更`,Fx=`# 貴賓出席名單管理及邀約

## **如何將貴賓加入出席名單？**

### 方法一：使用邀請表單

**使用方式**：活動全部場次列表中，複製「**地區邀請表單**」或「**場次邀請表單**」

**用途：**為減少邀請人一筆一筆輸入貴賓資料的工時，直接將邀請表單提供給貴賓填寫出席資訊

**對象：**
1. 不確定在不在貴賓資料庫中的貴賓，直接給對方邀請表單填寫
2. 透過廣邀，邀請不特定對象的貴賓（例：直接放在網路上讓大家填寫）

**後續操作：**
填寫邀請表單的貴賓，會自動收到「**確認信」**，且貴賓資訊會更新至「邀請名單」及「貴賓資料庫」中，需要留意「貴賓備註」是否有特殊需求

### 方法二：從貴賓資料庫中批量加入

**用途：**貴賓資料庫中已有大量貴賓，可以使用 **標籤篩選、搜尋功能**，一次將多位貴賓加入邀請名單中。通常使用這種方式加入邀請名單的貴賓，都是尚未確認是否出席，僅為邀請人進行名單列舉的工作，因此後續必須要寄出「**邀請信**」或「**確認信**」。

**對象：**已在貴賓資料庫中的貴賓，按照不同活動的目的，使用篩選或搜尋功能找出希望邀請的貴賓

**後續操作：**

1. **在尚未確認對方是否出席的情況下**
必須寄出「**邀請信**」，讓對方填寫出席資訊（例：是否出席、出席人數、備註等）
    
    情境舉例：
    1. 電影首映會，廣發邀約但仍需要確認對方是否出席，若不出席的貴賓可以將票券釋出給第二批次邀請的貴賓。
    2. 為邀請人單方面列舉，貴賓尚未收到任何活動邀請資訊，此時就需要寄出「**邀請信**」進行邀約
    
2. **在已對方確認要出席的情況下**
可以直接寄出**「確認信」**，減少對方還要再填一次邀請表單的時間。寄「**確認信**」的同時，「**索取票數**」會被填入「**提供票數**」的數字
    
    情境舉例：
    1. 不需控制人數上限的活動，寄信只是在通知對方有這個活動，以及提供活動相關資訊
    2. 該位貴賓已經通知邀請人「確認出席」與「相關出席資訊」，就可以直接寄出「確認信」
    

### 方法三：單筆新增貴賓

**用途：**為免除貴賓填表單的工作，請貴賓直接提供個人資料後，由邀請人使用「**新增單一貴賓**」將貴賓加入貴賓邀請名單中。

**對象：**通常會是較**忙碌的高階主管**、**藝人** 或 **不善於填表單的族群**

**後續操作：**
通常用此方式進入邀請名單的貴賓，已經確認好了「**出席場次**」、「**出席人數**」等重要資訊。
因此不需要再寄出一封「邀請信」，可以直接寄出「確認信」。寄出「確認信」的同時，「**索取票數**」會被填入「**提供票數**」的數字，且出席狀態也會自動被更新。

![貴賓邀請名單＿新增單一貴賓.webp](./img/貴賓邀請名單＿新增單一貴賓.webp)

## 如何進行邀約

### **寄出邀請信**

1. 在貴賓出席名單找到要邀約的貴賓
2. 點選該筆資料右側的寄信按鈕，寄出信件
3. 信件種類選擇「邀請信」
4. 確認信件資訊：
    - 收件人名稱及信箱
    - 信件標題
    - CC對象
        - 請使用半型「,」 隔開不同收件人
        - 舉例：test@gmail.com, test2@gmail.com, test3@gmail.com
    - 信件內容
        - 請留意是否有附上表單連結
5. 點選「送出」完成寄信

可依照使用者需求跳過寄送邀約信的流程，直接寄出出席確認信，若直接寄出出席確認信，系統會自動將「已取票數」更新為「提供票數」的數字。

請特別留意，系統

### **如何設定貴賓出席人數？**

1. 直接新增貴賓時：
    - 在填寫資料時設定「提供票數」
    - 輸入希望邀請的出席人數
2. 從資料庫新增時：
    - 預設提供2張票
    - 可在貴賓出席名單中編輯票數

### **貴賓如何回覆邀約？**

1. 收到邀請信
2. 點選回覆表單連結
3. 填寫參與意願
4. 選擇參與場次
5. 確認出席人數
6. 送出回覆表單
7. 系統自動更新出席狀態並寄送確認信

### 確認信

- 除了使用寄信功能外，貴賓填寫完邀請表單後系統也會自動發送
    - 如果您不希望在出席確認信中直接告訴對方可以參與，可以更改出席確認信中的內容，將出席資訊刪除，只告訴貴賓說有收到填寫表單了。
- 內容可於信件模板中調整
- 當貴賓填寫完表單後，系統會自動更新出席狀態

### 提醒信

- 建議活動前1-2天發送
- 可選擇單一或多位貴賓發送
- 預設包含出席相關資訊：
    1. 活動地點
    2. 演出時間
    3. 取票資訊
    4. 聯絡窗口
- 可透過信件範本調整內容

### 批量寄信

1. 在「貴賓出席名單」中，點選育寄送信件的貴賓左側核取方塊
2. 選擇「批量寄信」
3. 選擇要寄出的信件模板
4. 點選「寄出」完成批量發送

注意事項：

- 無法預覽及編輯信件內容
- 建議先做小規模測試`,zx=`# 貴賓資料庫管理

## **貴賓資料庫基礎概念**

### 什麼是貴賓資料庫？

貴賓資料庫是統一管理公關貴賓資訊的系統，包含貴賓的基本資料（姓名、職稱、聯繫方式）、所屬產業類別、聯繫窗口等重要資訊。

### 為什麼需要統一的貴賓資料庫？

統一的資料庫可確保：

- 貴賓資料的一致性
- 避免重複建檔
- 方便跨部門共享資訊
- 有效追蹤邀約記錄

### 為什麼貴賓資料庫很重要？

貴賓資料庫是企業公關活動的重要基礎：

- 減少重複輸入工作，提升效率
- 保存完整的互動歷史
- 便於維護貴賓關係
- 協助跨部門協作
- 提供數據分析基礎

## **貴賓資料建立／輸入**

本系統使用「信箱」作為驗證貴賓資料唯一性的欄位

除了以下新增方式，在**活動場次中單筆新增貴賓**或**透過表單邀約**，也都會將貴賓資料同步新增／更新回貴賓資料庫中。

### 如何新增單一貴賓資料？

1. 點擊左側功能選單列，進入「貴賓資料庫」頁
2. 點選右上角「新增單一貴賓」
3. 填寫基本資料：
    - 姓名、單位、職稱
    - 電話、email
    - 選擇適當標籤
    - 設定內部窗口
4. 點選「新增貴賓」完成新增

### 如何批量匯入貴賓資料？

1. 點擊左側功能選單列，進入「貴賓資料庫」頁
2. 點選右上角「批量上傳貴賓」
3. 下載範本檔案
4. 依照範本格式填寫資料
5. 上傳檔案並確認
6. 儲存完成匯入

建立您使用「[INVITI 貴賓資料整理助手](https://chatgpt.com/g/g-6853bedd61888191adaabb1bce7f403d-inviti-gui-bin-zi-liao-zheng-li-zhu-shou)」協助您整理貴賓資料，可以先從10-30筆資料測試是否成功，若成功再將更多筆資料上傳整理。

使用前請詳閱「[INVITI 貴賓資料整理助手](https://chatgpt.com/g/g-6853bedd61888191adaabb1bce7f403d-inviti-gui-bin-zi-liao-zheng-li-zhu-shou)」的相關規範，及ChatGPT關於隱私權保護的政策。若您的上傳資料中具有貴賓較為珍貴的資料，例：身分證字號、信用卡等資料，建議您先將這些資料移除後再進行上傳。

## **資料管理**

### 如何修改貴賓資料？

1. 在貴賓資料庫中點選該位貴賓資料的鉛筆圖示
2. 進入貴賓詳細資料頁面
3. 更新需要修改的內容
4. 點選「儲存變更」`,po=Object.assign({"../assets/Instruction/幫助中心＿邀請人管理 2ff1854591d780849146d28a23ec0b4e.md":_x,"../assets/Instruction/操作說明＿信件模板管理 2b61854591d78099a8e6fe1f4101fe3b.md":Dx,"../assets/Instruction/操作說明＿名詞定義 2b61854591d780a2964df6c56b30a138.md":Rx,"../assets/Instruction/操作說明＿基礎操作 2b61854591d78088be23f962238f5153.md":Ax,"../assets/Instruction/操作說明＿標籤管理 2b61854591d780098a1fecb1420056ac.md":Mx,"../assets/Instruction/操作說明＿活動及場次管理 2b61854591d780b594edc085d8215019.md":Ox,"../assets/Instruction/操作說明＿票務分派 2b61854591d78037a529f2805477b3c6.md":Lx,"../assets/Instruction/操作說明＿角色管理及角色分派 2b61854591d7800b9795e11cd55195d1.md":Bx,"../assets/Instruction/操作說明＿貴賓出席名單管理及邀約 2b61854591d780889401e937125c5f97.md":Fx,"../assets/Instruction/操作說明＿貴賓資料庫管理 2b61854591d780c8a7b2cd5015fbdc04.md":zx});function $x(n,s){let o="";const l=s.split(`
`);for(let p=0;p<Math.min(20,l.length);p++){const h=l[p].trim();if(h.startsWith("# ")){o=h.replace(/^#\s+/,"").trim();break}}return o||(o=(n.split("/").pop()||"").replace(/\.md$/,""),o=o.replace(/\s+[a-f0-9]{8,}$/i,"")),o||(o=(n.split("/").pop()||"").replace(/\.md$/,"").replace(/[_-]/g," ")),o?{id:(n.split("/").pop()||"").replace(/\.md$/,"").replace(/\s+[a-f0-9]{8,}$/i,"").toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100)||n,title:o,markdownPath:n}:null}function ca(){const n=[];for(const[s,o]of Object.entries(po)){const l=$x(s,o);l&&n.push(l)}return n}function Vx(n){return ca().find(o=>o.id===n)}function im(n){if(!n)return"";if(po[n]){const o=po[n];return typeof o=="string"?o:o?.default||""}const s=Object.keys(po).find(o=>{try{const l=decodeURIComponent(o),c=decodeURIComponent(n);return o===n||l===c||l.includes(c)||c.includes(l)||o.includes(n.split("/").pop()||"")}catch{return o.includes(n)||n.includes(o)}});if(s&&po[s]){const o=po[s];return typeof o=="string"?o:o?.default||""}return""}function Hx(n){if(!n||n.trim().length===0)return[];const s=n.trim().toLowerCase(),o=[],l=ca();for(const c of l){const d=im(c.markdownPath);if(!d)continue;const f=d.split(`
`),p=[];for(let h=0;h<f.length;h++){const g=f[h],x=g.toLowerCase();if(x.includes(s)){let y=0;for(;(y=x.indexOf(s,y))!==-1;){const N=[];for(let k=Math.max(0,h-1);k<=Math.min(f.length-1,h+1);k++)k!==h&&N.push(f[k].trim());const j=Math.max(0,y-50),b=Math.min(g.length,y+s.length+50);g.substring(j,b),p.push({line:h+1,text:g.trim(),context:N.join(" | ")}),y+=s.length}}}if(p.length>0){let h=p.length;c.title.toLowerCase().includes(s)&&(h+=10);for(const x of p)x.text.startsWith("#")&&(h+=5);const g=p.reduce((x,y)=>x+y.line,0)/p.length;h+=Math.max(0,10-Math.floor(g/10)),o.push({instruction:c,matches:p.slice(0,5),score:h})}}return o.sort((c,d)=>d.score-c.score),o}const kc=({locale:n="tc",isMobile:s=!1,onNavigate:o,currentInstructionId:l,headings:c})=>{const[d,f]=v.useState(!1),[p,h]=v.useState("");v.useEffect(()=>{if(!c||c.length===0)return;const P=()=>{const z=64+(s?48:72),U=window.pageYOffset+z+100;let Y="";for(let ye=c.length-1;ye>=0;ye--){const ae=c[ye],oe=document.getElementById(ae.id)||document.querySelector(`[data-anchor="${ae.id}"]`);if(oe&&oe.getBoundingClientRect().top+window.pageYOffset<=U){Y=ae.id;break}}Y&&Y!==p&&h(Y)};return P(),window.addEventListener("scroll",P,{passive:!0}),()=>window.removeEventListener("scroll",P)},[c,s,p]);const g=P=>{o&&o(`/instruction/${encodeURIComponent(P)}`)},x=P=>{h(P),setTimeout(()=>{const $=document.getElementById(P)||document.querySelector(`[data-anchor="${P}"]`);if($){const U=64+(s?48:72),ye=$.getBoundingClientRect().top+window.pageYOffset-U-20;window.scrollTo({top:ye,behavior:"smooth"})}},100),s&&f(!1)},y=ca(),C=["操作說明＿名詞定義","操作說明＿基礎操作","操作說明＿活動及場次管理","操作說明＿貴賓出席名單管理及邀約","操作說明＿信件模板管理","操作說明＿角色管理及角色分派","幫助中心＿邀請人管理","操作說明＿票務分派","操作說明＿貴賓資料庫管理","操作說明＿標籤管理"].map(P=>P.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100)).map(P=>{const $=y.find(z=>z.id===P);return $?{label:$.title,title:$.title,id:$.id,hasChildren:!1}:null}).filter(P=>P!==null),j=!!(c&&c.length>0&&l);if(s)return a.jsxs("div",{className:"w-full bg-white",children:[a.jsx("div",{className:"px-4 pt-2 pb-4",children:a.jsxs("button",{onClick:()=>f(!d),className:"flex items-center justify-between w-full p-3 border border-gray-200 bg-white rounded-md",style:{borderRadius:"8px"},children:[a.jsx("span",{className:"text-sm font-medium text-gray-900",children:"操作說明"}),a.jsx(Ir,{size:16,className:`text-gray-400 transition-transform ${d?"rotate-180":""}`})]})}),d&&a.jsx("div",{className:"px-4 pb-4",children:a.jsx("div",{className:"p-3 border border-gray-200 bg-white rounded-md",children:a.jsx("div",{className:"space-y-1",children:C.map((P,$)=>{const F=l===P.id,z=F&&j;return a.jsx(Li,{label:P.label,hasChildren:z,isActive:F&&!j,defaultExpanded:z,onClick:()=>g(P.id),children:z&&c&&c.map((U,Y)=>a.jsx(Li,{label:U.text,hasChildren:!1,isActive:p===U.id,onClick:()=>x(U.id)},Y))},$)})})})})]});const b=!!(c&&c.length>0),S=64+72+40,[D,L]=v.useState(`calc(100vh - ${S}px)`);return v.useEffect(()=>{if(!b)return;const P=()=>{const F=document.querySelector("footer");if(F){const z=F.getBoundingClientRect().top,U=window.innerHeight,Y=z>S?z-S-20:U-S,ye=Math.max(200,Math.min(Y,U-S));L(`${ye}px`)}else L(`calc(100vh - ${S}px)`)},$=setTimeout(P,0);return window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),()=>{clearTimeout($),window.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[b,S]),a.jsx("aside",{className:"w-60 flex-shrink-0",children:a.jsxs("div",{className:b?"fixed space-y-1 overflow-y-auto":"sticky top-6 space-y-1",style:b?{width:"240px",top:`${S}px`,maxHeight:D}:void 0,children:[a.jsx("div",{className:"mb-3 px-3",children:a.jsx("h5",{className:"text-xs text-gray-500 uppercase tracking-wider leading-[140%]",children:"操作說明"})}),C.map((P,$)=>{const F=l===P.id,z=F&&j;return a.jsx(Li,{label:P.label,hasChildren:z,isActive:F&&!j,defaultExpanded:z,onClick:()=>g(P.id),children:z&&c&&c.map((U,Y)=>a.jsx(Li,{label:U.text,hasChildren:!1,isActive:p===U.id,onClick:()=>x(U.id)},Y))},$)})]})})},Wx=({icon:n,title:s,description:o,onClick:l,isMobile:c=!1})=>a.jsx("button",{onClick:l,className:"w-full h-full text-left rounded transition-all group p-6",style:{backgroundColor:"#2D3508",border:"1px solid rgba(255, 252, 235, 0.15)"},onMouseEnter:d=>{d.currentTarget.style.boxShadow="0 8px 24px rgba(45, 53, 8, 0.2)",d.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:d=>{d.currentTarget.style.boxShadow="none",d.currentTarget.style.transform="translateY(0)"},children:a.jsxs("div",{className:"flex flex-col items-start text-left h-full",style:{color:"#FDFDFD"},children:[a.jsx("div",{className:"mb-4",children:a.jsx(n,{size:36,style:{color:"#FDFDFD"},strokeWidth:1.5})}),a.jsx("h5",{className:"mb-2 font-semibold text-base leading-[140%] transition-colors",style:{color:"#FDFDFD"},children:s}),a.jsx("p",{className:"text-sm leading-[150%] mb-3",style:{color:"#FDFDFD",opacity:.9},children:o}),a.jsxs("div",{className:"flex justify-start items-center text-left gap-1 text-sm transition-colors mt-auto",style:{color:"#FDFDFD",opacity:.8},children:[a.jsx("span",{children:"Learn more"}),a.jsx(Zi,{size:14,className:"group-hover:translate-x-0.5 transition-transform"})]})]})}),Ux=({results:n,query:s,isMobile:o=!1,onResultClick:l})=>{if(n.length===0)return a.jsx("div",{className:"py-12 text-center",children:a.jsx("p",{className:"text-gray-500 text-sm",children:"沒有找到相關結果"})});const c=(d,f)=>f?d.split(new RegExp(`(${f})`,"gi")).map((h,g)=>h.toLowerCase()===f.toLowerCase()?a.jsx("mark",{className:"bg-yellow-200",children:h},g):h):d;return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:o?"mb-4":"mb-6",children:a.jsxs("p",{className:"text-gray-600 text-sm",children:["找到 ",a.jsx("span",{className:"font-medium text-gray-900",children:n.length})," 個相關結果"]})}),a.jsx("div",{className:`space-y-4 ${o?"space-y-3":""}`,children:n.map((d,f)=>a.jsx("div",{className:`border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer ${o?"p-3":"p-4"}`,onClick:()=>l(d.instruction.id),children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(Uv,{className:`text-gray-400 mt-1 flex-shrink-0 ${o?"hidden":""}`,size:20}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h3",{className:`font-medium text-gray-900 mb-2 hover:text-gray-700 ${o?"text-sm":"text-base"}`,children:d.instruction.title}),a.jsxs("div",{className:o?"space-y-1.5":"space-y-2",children:[d.matches.slice(0,3).map((p,h)=>a.jsx("div",{className:`text-gray-600 ${o?"text-xs":"text-sm"}`,children:a.jsx("div",{className:"flex items-start gap-2",children:a.jsx("p",{className:"line-clamp-2",children:c(p.text,s)})})},h)),d.matches.length>3&&a.jsxs("p",{className:"text-gray-400 mt-1 text-xs",children:["還有 ",d.matches.length-3," 個相關結果..."]})]})]}),a.jsx(Fp,{className:"text-gray-400 flex-shrink-0 mt-1",size:o?16:20})]})},`${d.instruction.id}-${f}`))})]})};function Gx(n){return n.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100)}function Yx(n,s){const o=ca(),l=Gx(n),c=o.find(f=>f.id===l);if(!c){const f=o.find(p=>p.title.includes(n.replace(/^操作說明＿/,""))||n.includes(p.title));if(f){let p=`/instruction/${encodeURIComponent(f.id)}`;if(s){const h=s.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");p+=`#${h}`}return p}return"/help-center"}let d=`/instruction/${encodeURIComponent(c.id)}`;if(s){const f=s.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");d+=`#${f}`}return d}const qx=({locale:n="tc",isMobile:s=!1,onBack:o,onNavigate:l,onLocaleChange:c,onScrollToPricing:d,onSetScrollTarget:f})=>{const p=Ge(n),h=xo(),g=s===!0?!0:h,[x,y]=v.useState(""),N=v.useMemo(()=>!x||x.trim().length===0?[]:Hx(x),[x]),C=T=>{y(T)},j=(T,S)=>{const D=`/instruction/${encodeURIComponent(T)}`;l?.(D)},b=[{icon:t0,title:"發送您的第一封邀請",description:"了解如何建立和發送您的第一封活動邀請信",instructionTitle:"操作說明＿貴賓出席名單管理及邀約",anchor:"如何進行邀約"},{icon:Hv,title:"匯入貴賓名單",description:"快速批量匯入貴賓名單與聯絡資訊",instructionTitle:"操作說明＿貴賓資料庫管理",anchor:"如何批量匯入貴賓資料？"},{icon:o0,title:"自訂信件範本",description:"建立客製化的信件內容",instructionTitle:"操作說明＿信件模板管理",anchor:"如何建立信件模板？"}],k=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"#FDFDFD"},children:[a.jsx(dn,{isMobile:g,locale:n,onLocaleChange:c,onNavigateToHelpCenter:k,onNavigate:l,onSetScrollTarget:f,showBanner:!0}),a.jsx("div",{className:`${g?"pt-12 pb-6":"px-6 py-6 pt-[112px] pb-12"}`,style:{backgroundColor:"#2D3508"},children:a.jsxs("div",{className:`max-w-[1120px] mx-auto ${g?"px-6":""}`,children:[a.jsx("h1",{className:`mb-6 ${g?"text-2xl":"text-3xl"}`,style:{color:"#FDFDFD"},children:p.helpCenterPage.title}),a.jsx("div",{className:g?"my-3":"my-4",children:a.jsx(Px,{placeholder:p.helpCenterPage.searchPlaceholder,isMobile:g,onSearch:C,value:x,onChange:C})})]})}),a.jsx("div",{className:g?"pb-8":"px-6 pt-12 pb-5",children:a.jsx("div",{className:"max-w-[1120px] mx-auto",children:a.jsxs("div",{className:g?"flex flex-col":"flex gap-12",children:[!g&&a.jsx(kc,{locale:n,isMobile:g,onNavigate:l}),g&&a.jsx("div",{className:"border-b border-gray-200",children:a.jsx(kc,{locale:n,isMobile:g,onNavigate:l})}),a.jsx("main",{className:`flex-1 ${g?"px-6 pt-6":""}`,children:x.trim().length>0?a.jsx("div",{className:g?"mt-0":"",children:a.jsx(Ux,{results:N,query:x,isMobile:g,onResultClick:j})}):a.jsxs("div",{className:g?"mb-8 mt-4":"mb-12",children:[a.jsx("h2",{className:`text-gray-900 leading-[140%] ${g?"mb-4 text-xl":"mb-6 text-2xl"}`,children:p.helpCenterPage.popularTopics}),a.jsx("div",{className:`grid gap-4 items-start ${g?"grid-cols-1":"mt-6 md:grid-cols-2 lg:grid-cols-3"}`,children:b.map((T,S)=>a.jsx(Wx,{icon:T.icon,title:T.title,description:T.description,isMobile:g,onClick:()=>{const D=Yx(T.instructionTitle,T.anchor);l?.(D)}},S))})]})})]})})}),a.jsx(fn,{locale:n,isMobile:g,onNavigate:l,onNavigateToHelpCenter:k})]})},Kx="/INVITI-Website/assets/%E4%BF%A1%E4%BB%B6%E6%A8%A1%E6%9D%BF%E7%AE%A1%E7%90%86%E9%A0%81-BM87biki.webp",Qx="/INVITI-Website/assets/%E5%80%8B%E4%BA%BA%E8%B3%87%E6%96%99%E9%A0%81-CXGJaFX1.webp",Xx="/INVITI-Website/assets/%E5%85%A8%E9%83%A8%E5%A0%B4%E6%AC%A1%E9%A0%81-Y863xImT.webp",Zx="/INVITI-Website/assets/%E5%85%A8%E9%83%A8%E6%B4%BB%E5%8B%95%E9%A0%81-fy46tAar.webp",Jx="/INVITI-Website/assets/%E5%9C%B0%E5%8D%80%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81-DjQHBIi3.webp",ew="/INVITI-Website/assets/%E5%9C%B0%E5%8D%80%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-CXMXfgJ3.webp",tw="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81-BKZw4zt7.webp",nw="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-DaJlaDoq.webp",rw="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E9%82%80%E8%AB%8B%E8%A1%A8%E5%96%AE-CsjllrK_.webp",ow="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E9%82%80%E8%AB%8B%E8%A1%A8%E5%96%AE-CsjllrK_.webp",sw="/INVITI-Website/assets/%E6%A8%99%E7%B1%A4%E7%AE%A1%E7%90%86%E9%A0%81-Dyf7lPJa.webp",iw="/INVITI-Website/assets/%E7%A5%A8%E5%8B%99%E5%88%86%E6%B4%BE%E9%A0%81-vFlKz46Q.webp",aw="/INVITI-Website/assets/%E7%A5%A8%E5%8B%99%E5%88%86%E6%B4%BE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-5FGWeAdT.webp",lw="/INVITI-Website/assets/%E8%A7%92%E8%89%B2%E5%88%86%E6%B4%BE%E9%A0%81-CIBxTF-5.webp",cw="/INVITI-Website/assets/%E8%A7%92%E8%89%B2%E5%88%86%E6%B4%BE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-CqVKLheo.webp",uw="/INVITI-Website/assets/%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86%E9%A0%81-BXdN1Ql8.webp",dw="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E7%B3%BB%E7%B5%B1-OH8wBWtJ.webp",fw="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E8%B3%87%E6%96%99%E5%BA%AB%E9%A0%81-COKFRAxa.webp",pw="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E9%82%80%E8%AB%8B%E5%90%8D%E5%96%AE%EF%BC%BF%E6%96%B0%E5%A2%9E%E5%96%AE%E4%B8%80%E8%B2%B4%E8%B3%93-CPjwFMUt.webp",ys="/INVITI-Website";function go(n){return n?n.startsWith(ys)?n.slice(ys.length)||"/":n:"/"}function mw(n){if(n==="/")return ys+"/";const s=n.startsWith("/")?n:"/"+n;return s.startsWith(ys)?s:ys+s}function np(){return go(window.location.pathname)}const Bi=Object.assign({"../../assets/Instruction/img/信件模板管理頁.webp":Kx,"../../assets/Instruction/img/個人資料頁.webp":Qx,"../../assets/Instruction/img/全部場次頁.webp":Xx,"../../assets/Instruction/img/全部活動頁.webp":Zx,"../../assets/Instruction/img/地區出席名單頁.webp":Jx,"../../assets/Instruction/img/地區出席名單頁＿入口.webp":ew,"../../assets/Instruction/img/場次出席名單頁.webp":tw,"../../assets/Instruction/img/場次出席名單頁＿入口.webp":nw,"../../assets/Instruction/img/場次邀請表單 1.webp":rw,"../../assets/Instruction/img/場次邀請表單.webp":ow,"../../assets/Instruction/img/標籤管理頁.webp":sw,"../../assets/Instruction/img/票務分派頁.webp":iw,"../../assets/Instruction/img/票務分派頁＿入口.webp":aw,"../../assets/Instruction/img/角色分派頁.webp":lw,"../../assets/Instruction/img/角色分派頁＿入口.webp":cw,"../../assets/Instruction/img/角色管理頁.webp":uw,"../../assets/Instruction/img/貴賓系統.webp":dw,"../../assets/Instruction/img/貴賓資料庫頁.webp":fw,"../../assets/Instruction/img/貴賓邀請名單＿新增單一貴賓.webp":pw}),hw=({locale:n="tc",isMobile:s=!1,onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=xo(),p=s===!0?!0:f,[h,g]=v.useState(()=>{const k=go(window.location.pathname).match(/\/instruction\/(.+)/);if(!k)return"";const T=k[1];try{return decodeURIComponent(T)}catch{return T}}),[x,y]=v.useState(()=>{const b=window.location.hash.slice(1);if(!b)return"";try{return decodeURIComponent(b)}catch{return b}});v.useEffect(()=>{const b=()=>{const L=go(window.location.pathname).match(/\/instruction\/(.+)/);if(!L){g("");return}const P=L[1];try{const F=decodeURIComponent(P);g(F)}catch{g(P)}const $=window.location.hash.slice(1);y($)};window.addEventListener("popstate",b),window.addEventListener("hashchange",b);let k=window.location.pathname;const S=setInterval(()=>{const D=window.location.pathname,L=window.location.hash;(D!==k||L!==window.location.hash)&&(k=D,b())},50);return()=>{window.removeEventListener("popstate",b),window.removeEventListener("hashchange",b),clearInterval(S)}},[]),v.useEffect(()=>{if(!h)return;const b=window.location.hash.slice(1);let k="";if(b)try{k=decodeURIComponent(b)}catch{k=b}if(y(k),!k){window.scrollTo({top:0,behavior:"smooth"});return}const D=64+(p?48:72),L=()=>{const z=document.getElementById(k)||document.querySelector(`[data-anchor="${k}"]`);if(z){const Y=z.getBoundingClientRect().top+window.pageYOffset-D-20;return window.scrollTo({top:Y,behavior:"smooth"}),!0}return!1};let P=0;const $=40,F=setInterval(()=>{P+=1,(L()||P>=$)&&clearInterval(F)},50);return()=>clearInterval(F)},[h,p]);const N=v.useMemo(()=>{if(!h)return null;const b=Vx(h);if(!b)return null;const k=im(b.markdownPath);if(!k)return null;const T=vo(k),S=A0(k);let D=T.content;return D=D.replace(/<img data-instruction-image="([^"]+)"[^>]*>/g,(L,P)=>{let $,F;const z=U=>{const Y=Bi[U];if(typeof Y=="string")return Y};if($=Object.keys(Bi).find(U=>(U.split("/").pop()||"")===P),$&&(F=z($)),F||($=Object.keys(Bi).find(U=>(U.split("/").pop()||"").toLowerCase()===P.toLowerCase()),$&&(F=z($))),!F){const U=P.replace(/\.(png|jpg|jpeg|gif|webp|svg)$/i,"");$=Object.keys(Bi).find(Y=>{const ae=(Y.split("/").pop()||"").replace(/\.(png|jpg|jpeg|gif|webp|svg)$/i,""),oe=ae.replace(/\s+\d+$/,"").trim(),de=U.replace(/\s+\d+$/,"").trim();return oe===de||ae.includes(U)||U.includes(ae)}),$&&(F=z($))}return F?L.includes("src=")?L.replace(/src="[^"]+"/,`src="${F}"`):L.replace(/>/,` src="${F}">`):(console.warn(`Image not found in glob: ${P}`),L.replace(/>/,` src="" alt="Image not found: ${P}">`))}),{id:b.id,title:b.title,content:D,headings:S}},[h]);if(!N)return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col items-center justify-center",children:[a.jsx("p",{className:"text-gray-600",children:"操作說明未找到"}),a.jsx("button",{onClick:()=>o?.("/help-center"),className:"mt-4 text-sm text-gray-900 hover:text-gray-700",children:"返回操作說明"})]});const C=N,j=()=>{o&&o("/help-center")};return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[a.jsx(dn,{locale:n,isMobile:p,onNavigate:o,onLocaleChange:l,onNavigateToHelpCenter:j,onSetScrollTarget:d,showBanner:!0}),a.jsxs("main",{className:p?"flex-1 pt-2":"flex-1 pt-8",children:[a.jsx("div",{className:`border-b border-gray-200 ${p?"py-3 px-4":"py-6"}`,children:a.jsx("div",{className:`${p?"":"max-w-[1280px] mx-auto px-6"}`,children:a.jsxs("button",{onClick:()=>o?.("/help-center"),className:"flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors active:opacity-70",children:[a.jsx(Xi,{size:p?12:16}),a.jsx("span",{className:"text-sm sm:text-base",children:"返回操作說明"})]})})}),a.jsx("div",{className:p?"py-6":"py-12",children:a.jsx("div",{className:`${p?"":"max-w-[1280px] mx-auto px-6"}`,children:a.jsxs("div",{className:p?"flex flex-col":"flex gap-12",children:[a.jsx(kc,{locale:n,isMobile:p,onNavigate:o,currentInstructionId:h,headings:N.headings}),a.jsx("article",{className:`flex-1 ${p?"px-4":""}`,children:a.jsxs("div",{className:p?"":"max-w-[800px]",children:[a.jsx("h1",{className:p?"mt-4 mb-4 text-2xl leading-tight":"mb-6",children:C.title}),a.jsx("div",{className:`prose prose-gray max-w-none blog-content ${p?"prose-sm":""}`,dangerouslySetInnerHTML:{__html:C.content}})]})})]})})})]}),a.jsx(fn,{locale:n,isMobile:p,onNavigate:o,onNavigateToHelpCenter:j})]})};function De(n,s,{checkForDefaultPrevented:o=!0}={}){return function(c){if(n?.(c),o===!1||!c.defaultPrevented)return s?.(c)}}function gw(n,s){const o=v.createContext(s),l=d=>{const{children:f,...p}=d,h=v.useMemo(()=>p,Object.values(p));return a.jsx(o.Provider,{value:h,children:f})};l.displayName=n+"Provider";function c(d){const f=v.useContext(o);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${n}\``)}return[l,c]}function ko(n,s=[]){let o=[];function l(d,f){const p=v.createContext(f),h=o.length;o=[...o,f];const g=y=>{const{scope:N,children:C,...j}=y,b=N?.[n]?.[h]||p,k=v.useMemo(()=>j,Object.values(j));return a.jsx(b.Provider,{value:k,children:C})};g.displayName=d+"Provider";function x(y,N){const C=N?.[n]?.[h]||p,j=v.useContext(C);if(j)return j;if(f!==void 0)return f;throw new Error(`\`${y}\` must be used within \`${d}\``)}return[g,x]}const c=()=>{const d=o.map(f=>v.createContext(f));return function(p){const h=p?.[n]||d;return v.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return c.scopeName=n,[l,yw(c,...s)]}function yw(...n){const s=n[0];if(n.length===1)return s;const o=()=>{const l=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const f=l.reduce((p,{useScope:h,scopeName:g})=>{const y=h(d)[`__scope${g}`];return{...p,...y}},{});return v.useMemo(()=>({[`__scope${s.scopeName}`]:f}),[f])}};return o.scopeName=s.scopeName,o}var dt=globalThis?.document?v.useLayoutEffect:()=>{},vw=Mc[" useInsertionEffect ".trim().toString()]||dt;function xs({prop:n,defaultProp:s,onChange:o=()=>{},caller:l}){const[c,d,f]=xw({defaultProp:s,onChange:o}),p=n!==void 0,h=p?n:c;{const x=v.useRef(n!==void 0);v.useEffect(()=>{const y=x.current;y!==p&&console.warn(`${l} is changing from ${y?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),x.current=p},[p,l])}const g=v.useCallback(x=>{if(p){const y=ww(x)?x(n):x;y!==n&&f.current?.(y)}else d(x)},[p,n,d,f]);return[h,g]}function xw({defaultProp:n,onChange:s}){const[o,l]=v.useState(n),c=v.useRef(o),d=v.useRef(s);return vw(()=>{d.current=s},[s]),v.useEffect(()=>{c.current!==o&&(d.current?.(o),c.current=o)},[o,c]),[o,l,d]}function ww(n){return typeof n=="function"}function rp(n,s){if(typeof n=="function")return n(s);n!=null&&(n.current=s)}function No(...n){return s=>{let o=!1;const l=n.map(c=>{const d=rp(c,s);return!o&&typeof d=="function"&&(o=!0),d});if(o)return()=>{for(let c=0;c<l.length;c++){const d=l[c];typeof d=="function"?d():rp(n[c],null)}}}}function Be(...n){return v.useCallback(No(...n),n)}var ks=Lp();const am=Op(ks);function bw(n){const s=kw(n),o=v.forwardRef((l,c)=>{const{children:d,...f}=l,p=v.Children.toArray(d),h=p.find(Cw);if(h){const g=h.props.children,x=p.map(y=>y===h?v.Children.count(g)>1?v.Children.only(null):v.isValidElement(g)?g.props.children:null:y);return a.jsx(s,{...f,ref:c,children:v.isValidElement(g)?v.cloneElement(g,void 0,x):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function kw(n){const s=v.forwardRef((o,l)=>{const{children:c,...d}=o;if(v.isValidElement(c)){const f=Ew(c),p=Sw(d,c.props);return c.type!==v.Fragment&&(p.ref=l?No(l,f):f),v.cloneElement(c,p)}return v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var Nw=Symbol("radix.slottable");function Cw(n){return v.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Nw}function Sw(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function Ew(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var jw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pe=jw.reduce((n,s)=>{const o=bw(`Primitive.${s}`),l=v.forwardRef((c,d)=>{const{asChild:f,...p}=c,h=f?o:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(h,{...p,ref:d})});return l.displayName=`Primitive.${s}`,{...n,[s]:l}},{});function Tw(n,s){n&&ks.flushSync(()=>n.dispatchEvent(s))}function Iw(n,s){return v.useReducer((o,l)=>s[o][l]??o,n)}var Co=n=>{const{present:s,children:o}=n,l=Pw(s),c=typeof o=="function"?o({present:l.isPresent}):v.Children.only(o),d=Be(l.ref,_w(c));return typeof o=="function"||l.isPresent?v.cloneElement(c,{ref:d}):null};Co.displayName="Presence";function Pw(n){const[s,o]=v.useState(),l=v.useRef(null),c=v.useRef(n),d=v.useRef("none"),f=n?"mounted":"unmounted",[p,h]=Iw(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const g=Fi(l.current);d.current=p==="mounted"?g:"none"},[p]),dt(()=>{const g=l.current,x=c.current;if(x!==n){const N=d.current,C=Fi(g);n?h("MOUNT"):C==="none"||g?.display==="none"?h("UNMOUNT"):h(x&&N!==C?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,h]),dt(()=>{if(s){let g;const x=s.ownerDocument.defaultView??window,y=C=>{const b=Fi(l.current).includes(CSS.escape(C.animationName));if(C.target===s&&b&&(h("ANIMATION_END"),!c.current)){const k=s.style.animationFillMode;s.style.animationFillMode="forwards",g=x.setTimeout(()=>{s.style.animationFillMode==="forwards"&&(s.style.animationFillMode=k)})}},N=C=>{C.target===s&&(d.current=Fi(l.current))};return s.addEventListener("animationstart",N),s.addEventListener("animationcancel",y),s.addEventListener("animationend",y),()=>{x.clearTimeout(g),s.removeEventListener("animationstart",N),s.removeEventListener("animationcancel",y),s.removeEventListener("animationend",y)}}else h("ANIMATION_END")},[s,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:v.useCallback(g=>{l.current=g?getComputedStyle(g):null,o(g)},[])}}function Fi(n){return n?.animationName||"none"}function _w(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var Dw=Mc[" useId ".trim().toString()]||(()=>{}),Rw=0;function Tr(n){const[s,o]=v.useState(Dw());return dt(()=>{o(l=>l??String(Rw++))},[n]),n||(s?`radix-${s}`:"")}var ua="Collapsible",[Aw]=ko(ua),[Mw,zc]=Aw(ua),lm=v.forwardRef((n,s)=>{const{__scopeCollapsible:o,open:l,defaultOpen:c,disabled:d,onOpenChange:f,...p}=n,[h,g]=xs({prop:l,defaultProp:c??!1,onChange:f,caller:ua});return a.jsx(Mw,{scope:o,disabled:d,contentId:Tr(),open:h,onOpenToggle:v.useCallback(()=>g(x=>!x),[g]),children:a.jsx(Pe.div,{"data-state":Vc(h),"data-disabled":d?"":void 0,...p,ref:s})})});lm.displayName=ua;var cm="CollapsibleTrigger",um=v.forwardRef((n,s)=>{const{__scopeCollapsible:o,...l}=n,c=zc(cm,o);return a.jsx(Pe.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":Vc(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...l,ref:s,onClick:De(n.onClick,c.onOpenToggle)})});um.displayName=cm;var $c="CollapsibleContent",dm=v.forwardRef((n,s)=>{const{forceMount:o,...l}=n,c=zc($c,n.__scopeCollapsible);return a.jsx(Co,{present:o||c.open,children:({present:d})=>a.jsx(Ow,{...l,ref:s,present:d})})});dm.displayName=$c;var Ow=v.forwardRef((n,s)=>{const{__scopeCollapsible:o,present:l,children:c,...d}=n,f=zc($c,o),[p,h]=v.useState(l),g=v.useRef(null),x=Be(s,g),y=v.useRef(0),N=y.current,C=v.useRef(0),j=C.current,b=f.open||p,k=v.useRef(b),T=v.useRef(void 0);return v.useEffect(()=>{const S=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(S)},[]),dt(()=>{const S=g.current;if(S){T.current=T.current||{transitionDuration:S.style.transitionDuration,animationName:S.style.animationName},S.style.transitionDuration="0s",S.style.animationName="none";const D=S.getBoundingClientRect();y.current=D.height,C.current=D.width,k.current||(S.style.transitionDuration=T.current.transitionDuration,S.style.animationName=T.current.animationName),h(l)}},[f.open,l]),a.jsx(Pe.div,{"data-state":Vc(f.open),"data-disabled":f.disabled?"":void 0,id:f.contentId,hidden:!b,...d,ref:x,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":j?`${j}px`:void 0,...n.style},children:b&&c})});function Vc(n){return n?"open":"closed"}var Lw=lm;function Bw({...n}){return a.jsx(Lw,{"data-slot":"collapsible",...n})}function Fw({...n}){return a.jsx(um,{"data-slot":"collapsible-trigger",...n})}function zw({...n}){return a.jsx(dm,{"data-slot":"collapsible-content",...n})}const op="/INVITI-Website/assets/dead-BvDlYlt1.webp",ea="/INVITI-Website/assets/blog1.jpeg-47Eksu7y.webp",fm="/INVITI-Website/assets/blog2.jpeg-CqhtwzmW.webp",pm="/INVITI-Website/assets/blog3.jpeg-PFqK9jhN.webp",mm="/INVITI-Website/assets/blog4.jpeg-DtoBIkYr.webp",hm="/INVITI-Website/assets/blog1.jpeg-47Eksu7y.webp",gm="/INVITI-Website/assets/blog6.jpeg-xRd2ClIv.webp",ym="/INVITI-Website/assets/blog7.jpeg-DzQyTbk4.webp",$w=({locale:n="tc",isMobile:s=!1,onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=Ge(n),p=xo(),h=s===!0?!0:p,[g,x]=v.useState("all"),[y,N]=v.useState(!1),[C,j]=v.useState(!1);v.useEffect(()=>{},[p,s,h]);const b=[{id:"all",label:f.blogPage.allPosts},{id:"product",label:f.blogPage.productUpdates},{id:"case",label:f.blogPage.caseStudies},{id:"industry",label:f.blogPage.industryInsights},{id:"events",label:f.blogPage.events}],k={產品更新:f.blogPage.productUpdates,客戶故事:f.blogPage.caseStudies,產業觀點:f.blogPage.industryInsights,活動花絮:f.blogPage.events},T={product:"產品更新",case:"客戶故事",industry:"產業觀點",events:"活動花絮"},S=[ea,fm,pm,mm,hm,gm,ym,ea],D=v.useMemo(()=>vs().map((Y,ye)=>{const ae=Y.markdownPath?Bc(Y.markdownPath):"",oe=ae?vo(ae):null,de=S[ye]||"",se=Y.author||"INVITI 團隊";return{id:Y.id,thumbnail:de,title:Y.title,excerpt:oe?.excerpt||"閱讀完整文章...",category:k[Y.category]||Y.category,date:Y.date,author:{name:se,role:"產品與營運",avatar:la},readTime:`${Y.readTime} ${f.blogPage.readTime}`,originalCategory:Y.category}}),[f,k,S]),L=v.useMemo(()=>{if(g==="all")return D;const U=T[g];return U?D.filter(Y=>Y.originalCategory===U):D},[D,g,T]),P=U=>{if(o){const Y=encodeURIComponent(U);o(`/blog/${Y}`)}},$=()=>{o&&o("/help-center")},F=U=>{j(!0),setTimeout(()=>{x(U),setTimeout(()=>{j(!1)},50)},150)},z=({isDarkBackground:U=!1})=>a.jsx("nav",{className:"space-y-1",children:b.map(Y=>{const ye=U?"#FDFDFD":"#2D3508",ae=U?"rgba(255, 252, 235, 0.1)":"rgba(45, 53, 8, 0.1)";return a.jsx("button",{onClick:()=>{F(Y.id),h&&N(!1)},className:"w-full text-left px-3 py-2 text-sm transition-all duration-200 leading-[140%]",style:{borderRadius:"4px",backgroundColor:g===Y.id?"#2D3508":"transparent",color:g===Y.id?"#FDFDFD":ye,opacity:(g===Y.id,1),fontWeight:g===Y.id?600:400,border:g===Y.id?"1px solid #2D3508":"1px solid transparent"},onMouseEnter:oe=>{g!==Y.id&&(oe.currentTarget.style.backgroundColor=ae,oe.currentTarget.style.opacity="1",oe.currentTarget.style.color=ye)},onMouseLeave:oe=>{g!==Y.id&&(oe.currentTarget.style.backgroundColor="transparent",oe.currentTarget.style.opacity="1",oe.currentTarget.style.color=ye)},children:Y.label},Y.id)})});return a.jsxs("div",{className:"min-h-screen flex flex-col",style:{backgroundColor:"#FDFDFD"},children:[a.jsx(dn,{locale:n,isMobile:h,onNavigate:o,onLocaleChange:l,onNavigateToHelpCenter:$,onSetScrollTarget:d,showBanner:!0}),a.jsxs("main",{className:"flex-1",children:[a.jsx("div",{className:`border-b ${h?"pt-12 pb-6 px-4":"pt-20 pb-12"}`,style:{backgroundColor:"#2D3508",borderBottomColor:"rgba(255, 252, 235, 0.15)"},children:a.jsxs("div",{className:`${h?"":"max-w-[1120px] mx-auto px-6"}`,children:[a.jsx("h1",{className:`mb-2 ${h?"text-left text-2xl":"text-center"}`,style:{color:"#FDFDFD"},children:f.blogPage.title}),a.jsx("p",{className:`leading-[150%] ${h?"text-left text-sm":"text-center"}`,style:{color:"#FDFDFD",opacity:.9},children:f.blogPage.subtitle})]})}),a.jsx("div",{className:h?"py-4":"py-12",children:a.jsx("div",{className:`${h?"":"max-w-[1120px] mx-auto px-6"}`,children:h?a.jsxs("div",{children:[a.jsx("div",{className:"px-4 mb-4",children:a.jsxs(Bw,{open:y,onOpenChange:N,children:[a.jsxs(Fw,{className:"flex items-center justify-between w-full p-3 border rounded-md",style:{borderRadius:"8px",backgroundColor:"#2D3508",borderColor:"rgba(255, 252, 235, 0.15)",color:"#FDFDFD"},children:[a.jsx("span",{className:"text-sm font-medium",style:{color:"#FDFDFD"},children:b.find(U=>U.id===g)?.label}),a.jsx(Ir,{size:16,className:`transition-transform ${y?"rotate-180":""}`,style:{color:"#FDFDFD",opacity:.8}})]}),a.jsx(zw,{className:"mt-2 p-3 border rounded-md",style:{backgroundColor:"#2D3508",borderColor:"rgba(255, 252, 235, 0.15)"},children:a.jsx(z,{isDarkBackground:!0})})]})}),a.jsx("div",{className:"px-4 space-y-4 transition-opacity duration-300",style:{opacity:C?.3:1,transition:"opacity 0.3s ease-in-out"},children:L.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-12 px-4",children:[a.jsx("div",{className:`${h?"w-14 h-auto":"w-12 h-auto"} mb-3`,children:a.jsx(Pr,{src:op,alt:"Empty state",className:"w-full h-auto object-contain"})}),a.jsx("p",{className:"text-sm text-gray-500 text-center",children:"此分類暫無文章"})]}):L.map(U=>a.jsx("div",{className:"w-full",children:a.jsx(wc,{...U,onClick:()=>P(U.id)})},U.id))})]}):a.jsxs("div",{className:"flex gap-8",children:[a.jsx("aside",{className:"flex-shrink-0",style:{width:"240px",position:"sticky",top:"96px",height:"fit-content"},children:a.jsx(z,{})}),a.jsx("div",{className:"flex-1 transition-opacity duration-300",style:{opacity:C?.3:1,transition:"opacity 0.3s ease-in-out"},children:L.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-24",children:[a.jsx("div",{className:"w-12 h-12 mb-6",children:a.jsx(Pr,{src:op,alt:"Empty state",className:"w-full h-full object-contain"})}),a.jsx("p",{className:"text-base text-gray-500",children:"此分類暫無文章"})]}):a.jsx("div",{className:"grid grid-cols-2 gap-6",children:L.map(U=>a.jsx(wc,{...U,onClick:()=>P(U.id)},U.id))})})]})})})]}),a.jsx(fn,{locale:n,isMobile:h,onNavigate:o,onNavigateToHelpCenter:$})]})},Vw=({locale:n="tc",isMobile:s=!1,onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=Ge(n),p=xo(),h=s===!0?!0:p;v.useEffect(()=>{},[p,s,h]);const[g,x]=v.useState(()=>{const D=go(window.location.pathname).match(/\/blog\/(.+)/);if(!D)return"";const L=D[1];try{return decodeURIComponent(L)}catch{return L}});v.useEffect(()=>{const S=()=>{const F=go(window.location.pathname).match(/\/blog\/(.+)/);if(!F){x("");return}const z=F[1];try{const U=decodeURIComponent(z);x(U)}catch{x(z)}};window.addEventListener("popstate",S);let D=window.location.pathname;const P=setInterval(()=>{const $=window.location.pathname;$!==D&&(D=$,S())},50);return()=>{window.removeEventListener("popstate",S),clearInterval(P)}},[]),v.useEffect(()=>{g&&window.scrollTo({top:0,behavior:"smooth"})},[g]);const y=[ea,fm,pm,mm,hm,gm,ym,ea],N={產品更新:f.blogPage.productUpdates,客戶故事:f.blogPage.caseStudies,產業觀點:f.blogPage.industryInsights,活動花絮:f.blogPage.events},C=v.useMemo(()=>{if(!g)return null;const S=_0(g);if(!S)return null;const D=S.markdownPath?Bc(S.markdownPath):"";if(!D)return null;const L=vo(D),$=vs().findIndex(z=>z.id===g),F=$>=0&&y[$]||"";return{id:S.id,title:S.title,category:N[S.category]||S.category,date:S.date,readTime:`${S.readTime} ${f.blogPage.readTime}`,author:{name:S.author||"INVITI 團隊",role:"產品與營運",avatar:la},heroImage:F,content:L.content}},[g,f,N,y]),{prevPost:j,nextPost:b}=v.useMemo(()=>{const S=vs(),D=S.findIndex($=>$.id===g),L=D>0?S[D-1]:null,P=D<S.length-1?S[D+1]:null;return{prevPost:L?{id:L.id,title:L.title}:null,nextPost:P?{id:P.id,title:P.title}:null}},[g]);if(!C)return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col items-center justify-center",children:[a.jsx("p",{className:"text-gray-600",children:"文章未找到"}),a.jsx("button",{onClick:()=>o?.("/blog"),className:"mt-4 text-sm text-gray-900 hover:text-gray-700",children:"返回部落格"})]});const k=C,T=()=>{o&&o("/help-center")};return a.jsxs("div",{className:"min-h-screen flex flex-col",style:{backgroundColor:"#FDFDFD"},children:[a.jsx(dn,{locale:n,isMobile:h,onNavigate:o,onLocaleChange:l,onNavigateToHelpCenter:T,onSetScrollTarget:d,showBanner:!0}),a.jsxs("main",{className:h?"flex-1 pt-2":"flex-1 pt-8",children:[a.jsx("div",{className:`border-b border-gray-200 ${h?"py-3 px-4":"py-6"}`,children:a.jsx("div",{className:`${h?"":"max-w-[800px] mx-auto px-6"}`,children:a.jsxs("button",{onClick:()=>o?.("/blog"),className:"flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors active:opacity-70",children:[a.jsx(Xi,{size:h?12:16}),a.jsx("span",{className:"text-sm sm:text-base",children:f.blogPage.backToBlog})]})})}),a.jsx("article",{className:h?"py-6":"py-12",children:a.jsxs("div",{className:`${h?"px-4":"max-w-[800px] mx-auto px-6"}`,children:[a.jsxs("div",{className:`flex items-center gap-2 text-xs text-gray-500 mb-3 ${h?"flex-wrap":""}`,children:[a.jsx("span",{className:"px-2 py-1 border",style:{borderRadius:"4px",backgroundColor:"#2D3508",borderColor:"rgba(45, 53, 8, 0.2)",color:"#FDFDFD"},children:k.category}),a.jsx("span",{children:"•"}),a.jsx("span",{children:k.date}),a.jsx("span",{children:"•"}),a.jsx("span",{children:k.readTime})]}),a.jsx("h1",{className:h?"mb-4 text-2xl leading-tight":"mb-6",children:k.title}),a.jsxs("div",{className:`flex items-center gap-3 mb-6 pb-6 ${h?"":"my-8"}`,children:[a.jsx("div",{className:"rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center",style:{width:h?"40px":"48px",height:h?"40px":"48px",minWidth:h?"40px":"48px",minHeight:h?"40px":"48px",padding:h?"6px":"8px",backgroundColor:"#FDFDFD"},children:a.jsx(Pr,{src:k.author.avatar,alt:k.author.name,className:"w-full h-full object-contain",loading:"lazy"})}),a.jsxs("div",{children:[a.jsx("div",{className:`text-gray-900 ${h?"text-xs":"text-sm"}`,children:k.author.name}),a.jsx("div",{className:`text-gray-500 ${h?"text-[10px]":"text-xs"}`,children:k.author.role})]})]}),k.heroImage&&a.jsx("div",{className:`overflow-hidden ${h?"mb-6 -mx-4":"mb-8"}`,style:{borderRadius:h?"0":"8px"},children:a.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:a.jsx(Pr,{src:k.heroImage,alt:k.title,className:"absolute inset-0 w-full h-full object-cover",loading:"lazy"})})}),a.jsx("div",{className:`prose prose-gray max-w-none blog-content ${h?"prose-sm":""}`,dangerouslySetInnerHTML:{__html:k.content}})]})}),a.jsx("div",{className:`border-t-2 ${h?"py-4 px-4":"py-8"}`,style:{backgroundColor:"#2D3508",borderTopColor:"rgba(255, 252, 235, 0.15)"},children:a.jsx("div",{className:`${h?"":"max-w-[800px] mx-auto px-6"}`,children:a.jsxs("div",{className:`flex ${h?"flex-col gap-3":"justify-between items-center gap-6"}`,children:[j?a.jsxs("button",{onClick:()=>{const S=`/blog/${encodeURIComponent(j.id)}`;o?.(S),x(j.id),window.scrollTo({top:0,behavior:"smooth"})},className:`flex items-center gap-3 text-left flex-1 group ${h?"active:opacity-70":""}`,children:[a.jsx(Xi,{size:h?18:20,className:"transition-colors flex-shrink-0 group-hover:opacity-100",style:{color:"rgba(255, 252, 235, 0.7)"}}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:`mb-1 ${h?"text-[10px]":"text-xs"} transition-colors`,style:{color:"rgba(255, 252, 235, 0.7)"},children:f.blogPage.previousPost}),a.jsx("div",{className:`transition-colors truncate ${h?"text-xs":"text-sm"} group-hover:opacity-90`,style:{color:"#FDFDFD"},children:j.title})]})]}):a.jsx("div",{className:"flex-1"}),b?a.jsxs("button",{onClick:()=>{const S=`/blog/${encodeURIComponent(b.id)}`;o?.(S),x(b.id),window.scrollTo({top:0,behavior:"smooth"})},className:`flex items-center gap-3 text-right flex-1 group justify-end ${h?"active:opacity-70":""}`,children:[a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:`mb-1 ${h?"text-[10px]":"text-xs"} transition-colors`,style:{color:"rgba(255, 252, 235, 0.7)"},children:f.blogPage.nextPost}),a.jsx("div",{className:`transition-colors truncate ${h?"text-xs":"text-sm"} group-hover:opacity-90`,style:{color:"#FDFDFD"},children:b.title})]}),a.jsx(Zi,{size:h?18:20,className:"transition-colors flex-shrink-0 group-hover:opacity-100",style:{color:"rgba(255, 252, 235, 0.7)"}})]}):a.jsx("div",{className:"flex-1"})]})})})]}),a.jsx(fn,{locale:n,isMobile:h,onNavigate:o,onNavigateToHelpCenter:T})]})};function _r(n){const s=v.useRef(n);return v.useEffect(()=>{s.current=n}),v.useMemo(()=>(...o)=>s.current?.(...o),[])}function Hw(n,s=globalThis?.document){const o=_r(n);v.useEffect(()=>{const l=c=>{c.key==="Escape"&&o(c)};return s.addEventListener("keydown",l,{capture:!0}),()=>s.removeEventListener("keydown",l,{capture:!0})},[o,s])}var Ww="DismissableLayer",Nc="dismissableLayer.update",Uw="dismissableLayer.pointerDownOutside",Gw="dismissableLayer.focusOutside",sp,vm=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Hc=v.forwardRef((n,s)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:p,...h}=n,g=v.useContext(vm),[x,y]=v.useState(null),N=x?.ownerDocument??globalThis?.document,[,C]=v.useState({}),j=Be(s,F=>y(F)),b=Array.from(g.layers),[k]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),T=b.indexOf(k),S=x?b.indexOf(x):-1,D=g.layersWithOutsidePointerEventsDisabled.size>0,L=S>=T,P=Kw(F=>{const z=F.target,U=[...g.branches].some(Y=>Y.contains(z));!L||U||(c?.(F),f?.(F),F.defaultPrevented||p?.())},N),$=Qw(F=>{const z=F.target;[...g.branches].some(Y=>Y.contains(z))||(d?.(F),f?.(F),F.defaultPrevented||p?.())},N);return Hw(F=>{S===g.layers.size-1&&(l?.(F),!F.defaultPrevented&&p&&(F.preventDefault(),p()))},N),v.useEffect(()=>{if(x)return o&&(g.layersWithOutsidePointerEventsDisabled.size===0&&(sp=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(x)),g.layers.add(x),ip(),()=>{o&&g.layersWithOutsidePointerEventsDisabled.size===1&&(N.body.style.pointerEvents=sp)}},[x,N,o,g]),v.useEffect(()=>()=>{x&&(g.layers.delete(x),g.layersWithOutsidePointerEventsDisabled.delete(x),ip())},[x,g]),v.useEffect(()=>{const F=()=>C({});return document.addEventListener(Nc,F),()=>document.removeEventListener(Nc,F)},[]),a.jsx(Pe.div,{...h,ref:j,style:{pointerEvents:D?L?"auto":"none":void 0,...n.style},onFocusCapture:De(n.onFocusCapture,$.onFocusCapture),onBlurCapture:De(n.onBlurCapture,$.onBlurCapture),onPointerDownCapture:De(n.onPointerDownCapture,P.onPointerDownCapture)})});Hc.displayName=Ww;var Yw="DismissableLayerBranch",qw=v.forwardRef((n,s)=>{const o=v.useContext(vm),l=v.useRef(null),c=Be(s,l);return v.useEffect(()=>{const d=l.current;if(d)return o.branches.add(d),()=>{o.branches.delete(d)}},[o.branches]),a.jsx(Pe.div,{...n,ref:c})});qw.displayName=Yw;function Kw(n,s=globalThis?.document){const o=_r(n),l=v.useRef(!1),c=v.useRef(()=>{});return v.useEffect(()=>{const d=p=>{if(p.target&&!l.current){let h=function(){xm(Uw,o,g,{discrete:!0})};const g={originalEvent:p};p.pointerType==="touch"?(s.removeEventListener("click",c.current),c.current=h,s.addEventListener("click",c.current,{once:!0})):h()}else s.removeEventListener("click",c.current);l.current=!1},f=window.setTimeout(()=>{s.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(f),s.removeEventListener("pointerdown",d),s.removeEventListener("click",c.current)}},[s,o]),{onPointerDownCapture:()=>l.current=!0}}function Qw(n,s=globalThis?.document){const o=_r(n),l=v.useRef(!1);return v.useEffect(()=>{const c=d=>{d.target&&!l.current&&xm(Gw,o,{originalEvent:d},{discrete:!1})};return s.addEventListener("focusin",c),()=>s.removeEventListener("focusin",c)},[s,o]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function ip(){const n=new CustomEvent(Nc);document.dispatchEvent(n)}function xm(n,s,o,{discrete:l}){const c=o.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:o});s&&c.addEventListener(n,s,{once:!0}),l?Tw(c,d):c.dispatchEvent(d)}var uc="focusScope.autoFocusOnMount",dc="focusScope.autoFocusOnUnmount",ap={bubbles:!1,cancelable:!0},Xw="FocusScope",Wc=v.forwardRef((n,s)=>{const{loop:o=!1,trapped:l=!1,onMountAutoFocus:c,onUnmountAutoFocus:d,...f}=n,[p,h]=v.useState(null),g=_r(c),x=_r(d),y=v.useRef(null),N=Be(s,b=>h(b)),C=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(l){let b=function(D){if(C.paused||!p)return;const L=D.target;p.contains(L)?y.current=L:or(y.current,{select:!0})},k=function(D){if(C.paused||!p)return;const L=D.relatedTarget;L!==null&&(p.contains(L)||or(y.current,{select:!0}))},T=function(D){if(document.activeElement===document.body)for(const P of D)P.removedNodes.length>0&&or(p)};document.addEventListener("focusin",b),document.addEventListener("focusout",k);const S=new MutationObserver(T);return p&&S.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",k),S.disconnect()}}},[l,p,C.paused]),v.useEffect(()=>{if(p){cp.add(C);const b=document.activeElement;if(!p.contains(b)){const T=new CustomEvent(uc,ap);p.addEventListener(uc,g),p.dispatchEvent(T),T.defaultPrevented||(Zw(rb(wm(p)),{select:!0}),document.activeElement===b&&or(p))}return()=>{p.removeEventListener(uc,g),setTimeout(()=>{const T=new CustomEvent(dc,ap);p.addEventListener(dc,x),p.dispatchEvent(T),T.defaultPrevented||or(b??document.body,{select:!0}),p.removeEventListener(dc,x),cp.remove(C)},0)}}},[p,g,x,C]);const j=v.useCallback(b=>{if(!o&&!l||C.paused)return;const k=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,T=document.activeElement;if(k&&T){const S=b.currentTarget,[D,L]=Jw(S);D&&L?!b.shiftKey&&T===L?(b.preventDefault(),o&&or(D,{select:!0})):b.shiftKey&&T===D&&(b.preventDefault(),o&&or(L,{select:!0})):T===S&&b.preventDefault()}},[o,l,C.paused]);return a.jsx(Pe.div,{tabIndex:-1,...f,ref:N,onKeyDown:j})});Wc.displayName=Xw;function Zw(n,{select:s=!1}={}){const o=document.activeElement;for(const l of n)if(or(l,{select:s}),document.activeElement!==o)return}function Jw(n){const s=wm(n),o=lp(s,n),l=lp(s.reverse(),n);return[o,l]}function wm(n){const s=[],o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:l=>{const c=l.tagName==="INPUT"&&l.type==="hidden";return l.disabled||l.hidden||c?NodeFilter.FILTER_SKIP:l.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)s.push(o.currentNode);return s}function lp(n,s){for(const o of n)if(!eb(o,{upTo:s}))return o}function eb(n,{upTo:s}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(s!==void 0&&n===s)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function tb(n){return n instanceof HTMLInputElement&&"select"in n}function or(n,{select:s=!1}={}){if(n&&n.focus){const o=document.activeElement;n.focus({preventScroll:!0}),n!==o&&tb(n)&&s&&n.select()}}var cp=nb();function nb(){let n=[];return{add(s){const o=n[0];s!==o&&o?.pause(),n=up(n,s),n.unshift(s)},remove(s){n=up(n,s),n[0]?.resume()}}}function up(n,s){const o=[...n],l=o.indexOf(s);return l!==-1&&o.splice(l,1),o}function rb(n){return n.filter(s=>s.tagName!=="A")}var ob="Portal",Uc=v.forwardRef((n,s)=>{const{container:o,...l}=n,[c,d]=v.useState(!1);dt(()=>d(!0),[]);const f=o||c&&globalThis?.document?.body;return f?am.createPortal(a.jsx(Pe.div,{...l,ref:s}),f):null});Uc.displayName=ob;var fc=0;function bm(){v.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??dp()),document.body.insertAdjacentElement("beforeend",n[1]??dp()),fc++,()=>{fc===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(s=>s.remove()),fc--}},[])}function dp(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var un=function(){return un=Object.assign||function(s){for(var o,l=1,c=arguments.length;l<c;l++){o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},un.apply(this,arguments)};function km(n,s){var o={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(n);c<l.length;c++)s.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(n,l[c])&&(o[l[c]]=n[l[c]]);return o}function sb(n,s,o){if(o||arguments.length===2)for(var l=0,c=s.length,d;l<c;l++)(d||!(l in s))&&(d||(d=Array.prototype.slice.call(s,0,l)),d[l]=s[l]);return n.concat(d||Array.prototype.slice.call(s))}var Yi="right-scroll-bar-position",qi="width-before-scroll-bar",ib="with-scroll-bars-hidden",ab="--removed-body-scroll-bar-size";function pc(n,s){return typeof n=="function"?n(s):n&&(n.current=s),n}function lb(n,s){var o=v.useState(function(){return{value:n,callback:s,facade:{get current(){return o.value},set current(l){var c=o.value;c!==l&&(o.value=l,o.callback(l,c))}}}})[0];return o.callback=s,o.facade}var cb=typeof window<"u"?v.useLayoutEffect:v.useEffect,fp=new WeakMap;function ub(n,s){var o=lb(null,function(l){return n.forEach(function(c){return pc(c,l)})});return cb(function(){var l=fp.get(o);if(l){var c=new Set(l),d=new Set(n),f=o.current;c.forEach(function(p){d.has(p)||pc(p,null)}),d.forEach(function(p){c.has(p)||pc(p,f)})}fp.set(o,n)},[n]),o}function db(n){return n}function fb(n,s){s===void 0&&(s=db);var o=[],l=!1,c={read:function(){if(l)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:n},useMedium:function(d){var f=s(d,l);return o.push(f),function(){o=o.filter(function(p){return p!==f})}},assignSyncMedium:function(d){for(l=!0;o.length;){var f=o;o=[],f.forEach(d)}o={push:function(p){return d(p)},filter:function(){return o}}},assignMedium:function(d){l=!0;var f=[];if(o.length){var p=o;o=[],p.forEach(d),f=o}var h=function(){var x=f;f=[],x.forEach(d)},g=function(){return Promise.resolve().then(h)};g(),o={push:function(x){f.push(x),g()},filter:function(x){return f=f.filter(x),o}}}};return c}function pb(n){n===void 0&&(n={});var s=fb(null);return s.options=un({async:!0,ssr:!1},n),s}var Nm=function(n){var s=n.sideCar,o=km(n,["sideCar"]);if(!s)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var l=s.read();if(!l)throw new Error("Sidecar medium not found");return v.createElement(l,un({},o))};Nm.isSideCarExport=!0;function mb(n,s){return n.useMedium(s),Nm}var Cm=pb(),mc=function(){},da=v.forwardRef(function(n,s){var o=v.useRef(null),l=v.useState({onScrollCapture:mc,onWheelCapture:mc,onTouchMoveCapture:mc}),c=l[0],d=l[1],f=n.forwardProps,p=n.children,h=n.className,g=n.removeScrollBar,x=n.enabled,y=n.shards,N=n.sideCar,C=n.noRelative,j=n.noIsolation,b=n.inert,k=n.allowPinchZoom,T=n.as,S=T===void 0?"div":T,D=n.gapMode,L=km(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=N,$=ub([o,s]),F=un(un({},L),c);return v.createElement(v.Fragment,null,x&&v.createElement(P,{sideCar:Cm,removeScrollBar:g,shards:y,noRelative:C,noIsolation:j,inert:b,setCallbacks:d,allowPinchZoom:!!k,lockRef:o,gapMode:D}),f?v.cloneElement(v.Children.only(p),un(un({},F),{ref:$})):v.createElement(S,un({},F,{className:h,ref:$}),p))});da.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};da.classNames={fullWidth:qi,zeroRight:Yi};var hb=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function gb(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var s=hb();return s&&n.setAttribute("nonce",s),n}function yb(n,s){n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s))}function vb(n){var s=document.head||document.getElementsByTagName("head")[0];s.appendChild(n)}var xb=function(){var n=0,s=null;return{add:function(o){n==0&&(s=gb())&&(yb(s,o),vb(s)),n++},remove:function(){n--,!n&&s&&(s.parentNode&&s.parentNode.removeChild(s),s=null)}}},wb=function(){var n=xb();return function(s,o){v.useEffect(function(){return n.add(s),function(){n.remove()}},[s&&o])}},Sm=function(){var n=wb(),s=function(o){var l=o.styles,c=o.dynamic;return n(l,c),null};return s},bb={left:0,top:0,right:0,gap:0},hc=function(n){return parseInt(n||"",10)||0},kb=function(n){var s=window.getComputedStyle(document.body),o=s[n==="padding"?"paddingLeft":"marginLeft"],l=s[n==="padding"?"paddingTop":"marginTop"],c=s[n==="padding"?"paddingRight":"marginRight"];return[hc(o),hc(l),hc(c)]},Nb=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return bb;var s=kb(n),o=document.documentElement.clientWidth,l=window.innerWidth;return{left:s[0],top:s[1],right:s[2],gap:Math.max(0,l-o+s[2]-s[0])}},Cb=Sm(),mo="data-scroll-locked",Sb=function(n,s,o,l){var c=n.left,d=n.top,f=n.right,p=n.gap;return o===void 0&&(o="margin"),`
  .`.concat(ib,` {
   overflow: hidden `).concat(l,`;
   padding-right: `).concat(p,"px ").concat(l,`;
  }
  body[`).concat(mo,`] {
    overflow: hidden `).concat(l,`;
    overscroll-behavior: contain;
    `).concat([s&&"position: relative ".concat(l,";"),o==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(d,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(l,`;
    `),o==="padding"&&"padding-right: ".concat(p,"px ").concat(l,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Yi,` {
    right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(qi,` {
    margin-right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(Yi," .").concat(Yi,` {
    right: 0 `).concat(l,`;
  }
  
  .`).concat(qi," .").concat(qi,` {
    margin-right: 0 `).concat(l,`;
  }
  
  body[`).concat(mo,`] {
    `).concat(ab,": ").concat(p,`px;
  }
`)},pp=function(){var n=parseInt(document.body.getAttribute(mo)||"0",10);return isFinite(n)?n:0},Eb=function(){v.useEffect(function(){return document.body.setAttribute(mo,(pp()+1).toString()),function(){var n=pp()-1;n<=0?document.body.removeAttribute(mo):document.body.setAttribute(mo,n.toString())}},[])},jb=function(n){var s=n.noRelative,o=n.noImportant,l=n.gapMode,c=l===void 0?"margin":l;Eb();var d=v.useMemo(function(){return Nb(c)},[c]);return v.createElement(Cb,{styles:Sb(d,!s,c,o?"":"!important")})},Cc=!1;if(typeof window<"u")try{var zi=Object.defineProperty({},"passive",{get:function(){return Cc=!0,!0}});window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Cc=!1}var lo=Cc?{passive:!1}:!1,Tb=function(n){return n.tagName==="TEXTAREA"},Em=function(n,s){if(!(n instanceof Element))return!1;var o=window.getComputedStyle(n);return o[s]!=="hidden"&&!(o.overflowY===o.overflowX&&!Tb(n)&&o[s]==="visible")},Ib=function(n){return Em(n,"overflowY")},Pb=function(n){return Em(n,"overflowX")},mp=function(n,s){var o=s.ownerDocument,l=s;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var c=jm(n,l);if(c){var d=Tm(n,l),f=d[1],p=d[2];if(f>p)return!0}l=l.parentNode}while(l&&l!==o.body);return!1},_b=function(n){var s=n.scrollTop,o=n.scrollHeight,l=n.clientHeight;return[s,o,l]},Db=function(n){var s=n.scrollLeft,o=n.scrollWidth,l=n.clientWidth;return[s,o,l]},jm=function(n,s){return n==="v"?Ib(s):Pb(s)},Tm=function(n,s){return n==="v"?_b(s):Db(s)},Rb=function(n,s){return n==="h"&&s==="rtl"?-1:1},Ab=function(n,s,o,l,c){var d=Rb(n,window.getComputedStyle(s).direction),f=d*l,p=o.target,h=s.contains(p),g=!1,x=f>0,y=0,N=0;do{if(!p)break;var C=Tm(n,p),j=C[0],b=C[1],k=C[2],T=b-k-d*j;(j||T)&&jm(n,p)&&(y+=T,N+=j);var S=p.parentNode;p=S&&S.nodeType===Node.DOCUMENT_FRAGMENT_NODE?S.host:S}while(!h&&p!==document.body||h&&(s.contains(p)||s===p));return(x&&Math.abs(y)<1||!x&&Math.abs(N)<1)&&(g=!0),g},$i=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},hp=function(n){return[n.deltaX,n.deltaY]},gp=function(n){return n&&"current"in n?n.current:n},Mb=function(n,s){return n[0]===s[0]&&n[1]===s[1]},Ob=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},Lb=0,co=[];function Bb(n){var s=v.useRef([]),o=v.useRef([0,0]),l=v.useRef(),c=v.useState(Lb++)[0],d=v.useState(Sm)[0],f=v.useRef(n);v.useEffect(function(){f.current=n},[n]),v.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(c));var b=sb([n.lockRef.current],(n.shards||[]).map(gp),!0).filter(Boolean);return b.forEach(function(k){return k.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),b.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(c))})}}},[n.inert,n.lockRef.current,n.shards]);var p=v.useCallback(function(b,k){if("touches"in b&&b.touches.length===2||b.type==="wheel"&&b.ctrlKey)return!f.current.allowPinchZoom;var T=$i(b),S=o.current,D="deltaX"in b?b.deltaX:S[0]-T[0],L="deltaY"in b?b.deltaY:S[1]-T[1],P,$=b.target,F=Math.abs(D)>Math.abs(L)?"h":"v";if("touches"in b&&F==="h"&&$.type==="range")return!1;var z=mp(F,$);if(!z)return!0;if(z?P=F:(P=F==="v"?"h":"v",z=mp(F,$)),!z)return!1;if(!l.current&&"changedTouches"in b&&(D||L)&&(l.current=P),!P)return!0;var U=l.current||P;return Ab(U,k,b,U==="h"?D:L)},[]),h=v.useCallback(function(b){var k=b;if(!(!co.length||co[co.length-1]!==d)){var T="deltaY"in k?hp(k):$i(k),S=s.current.filter(function(P){return P.name===k.type&&(P.target===k.target||k.target===P.shadowParent)&&Mb(P.delta,T)})[0];if(S&&S.should){k.cancelable&&k.preventDefault();return}if(!S){var D=(f.current.shards||[]).map(gp).filter(Boolean).filter(function(P){return P.contains(k.target)}),L=D.length>0?p(k,D[0]):!f.current.noIsolation;L&&k.cancelable&&k.preventDefault()}}},[]),g=v.useCallback(function(b,k,T,S){var D={name:b,delta:k,target:T,should:S,shadowParent:Fb(T)};s.current.push(D),setTimeout(function(){s.current=s.current.filter(function(L){return L!==D})},1)},[]),x=v.useCallback(function(b){o.current=$i(b),l.current=void 0},[]),y=v.useCallback(function(b){g(b.type,hp(b),b.target,p(b,n.lockRef.current))},[]),N=v.useCallback(function(b){g(b.type,$i(b),b.target,p(b,n.lockRef.current))},[]);v.useEffect(function(){return co.push(d),n.setCallbacks({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:N}),document.addEventListener("wheel",h,lo),document.addEventListener("touchmove",h,lo),document.addEventListener("touchstart",x,lo),function(){co=co.filter(function(b){return b!==d}),document.removeEventListener("wheel",h,lo),document.removeEventListener("touchmove",h,lo),document.removeEventListener("touchstart",x,lo)}},[]);var C=n.removeScrollBar,j=n.inert;return v.createElement(v.Fragment,null,j?v.createElement(d,{styles:Ob(c)}):null,C?v.createElement(jb,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function Fb(n){for(var s=null;n!==null;)n instanceof ShadowRoot&&(s=n.host,n=n.host),n=n.parentNode;return s}const zb=mb(Cm,Bb);var Gc=v.forwardRef(function(n,s){return v.createElement(da,un({},n,{ref:s,sideCar:zb}))});Gc.classNames=da.classNames;var $b=function(n){if(typeof document>"u")return null;var s=Array.isArray(n)?n[0]:n;return s.ownerDocument.body},uo=new WeakMap,Vi=new WeakMap,Hi={},gc=0,Im=function(n){return n&&(n.host||Im(n.parentNode))},Vb=function(n,s){return s.map(function(o){if(n.contains(o))return o;var l=Im(o);return l&&n.contains(l)?l:(console.error("aria-hidden",o,"in not contained inside",n,". Doing nothing"),null)}).filter(function(o){return!!o})},Hb=function(n,s,o,l){var c=Vb(s,Array.isArray(n)?n:[n]);Hi[o]||(Hi[o]=new WeakMap);var d=Hi[o],f=[],p=new Set,h=new Set(c),g=function(y){!y||p.has(y)||(p.add(y),g(y.parentNode))};c.forEach(g);var x=function(y){!y||h.has(y)||Array.prototype.forEach.call(y.children,function(N){if(p.has(N))x(N);else try{var C=N.getAttribute(l),j=C!==null&&C!=="false",b=(uo.get(N)||0)+1,k=(d.get(N)||0)+1;uo.set(N,b),d.set(N,k),f.push(N),b===1&&j&&Vi.set(N,!0),k===1&&N.setAttribute(o,"true"),j||N.setAttribute(l,"true")}catch(T){console.error("aria-hidden: cannot operate on ",N,T)}})};return x(s),p.clear(),gc++,function(){f.forEach(function(y){var N=uo.get(y)-1,C=d.get(y)-1;uo.set(y,N),d.set(y,C),N||(Vi.has(y)||y.removeAttribute(l),Vi.delete(y)),C||y.removeAttribute(o)}),gc--,gc||(uo=new WeakMap,uo=new WeakMap,Vi=new WeakMap,Hi={})}},Pm=function(n,s,o){o===void 0&&(o="data-aria-hidden");var l=Array.from(Array.isArray(n)?n:[n]),c=$b(n);return c?(l.push.apply(l,Array.from(c.querySelectorAll("[aria-live], script"))),Hb(l,c,o,"aria-hidden")):function(){return null}};function Wb(n){const s=Ub(n),o=v.forwardRef((l,c)=>{const{children:d,...f}=l,p=v.Children.toArray(d),h=p.find(Yb);if(h){const g=h.props.children,x=p.map(y=>y===h?v.Children.count(g)>1?v.Children.only(null):v.isValidElement(g)?g.props.children:null:y);return a.jsx(s,{...f,ref:c,children:v.isValidElement(g)?v.cloneElement(g,void 0,x):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function Ub(n){const s=v.forwardRef((o,l)=>{const{children:c,...d}=o;if(v.isValidElement(c)){const f=Kb(c),p=qb(d,c.props);return c.type!==v.Fragment&&(p.ref=l?No(l,f):f),v.cloneElement(c,p)}return v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var Gb=Symbol("radix.slottable");function Yb(n){return v.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Gb}function qb(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function Kb(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var fa="Dialog",[_m]=ko(fa),[Qb,nn]=_m(fa),Dm=n=>{const{__scopeDialog:s,children:o,open:l,defaultOpen:c,onOpenChange:d,modal:f=!0}=n,p=v.useRef(null),h=v.useRef(null),[g,x]=xs({prop:l,defaultProp:c??!1,onChange:d,caller:fa});return a.jsx(Qb,{scope:s,triggerRef:p,contentRef:h,contentId:Tr(),titleId:Tr(),descriptionId:Tr(),open:g,onOpenChange:x,onOpenToggle:v.useCallback(()=>x(y=>!y),[x]),modal:f,children:o})};Dm.displayName=fa;var Rm="DialogTrigger",Xb=v.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(Rm,o),d=Be(s,c.triggerRef);return a.jsx(Pe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":Kc(c.open),...l,ref:d,onClick:De(n.onClick,c.onOpenToggle)})});Xb.displayName=Rm;var Yc="DialogPortal",[Zb,Am]=_m(Yc,{forceMount:void 0}),Mm=n=>{const{__scopeDialog:s,forceMount:o,children:l,container:c}=n,d=nn(Yc,s);return a.jsx(Zb,{scope:s,forceMount:o,children:v.Children.map(l,f=>a.jsx(Co,{present:o||d.open,children:a.jsx(Uc,{asChild:!0,container:c,children:f})}))})};Mm.displayName=Yc;var ta="DialogOverlay",Om=v.forwardRef((n,s)=>{const o=Am(ta,n.__scopeDialog),{forceMount:l=o.forceMount,...c}=n,d=nn(ta,n.__scopeDialog);return d.modal?a.jsx(Co,{present:l||d.open,children:a.jsx(e1,{...c,ref:s})}):null});Om.displayName=ta;var Jb=Wb("DialogOverlay.RemoveScroll"),e1=v.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(ta,o);return a.jsx(Gc,{as:Jb,allowPinchZoom:!0,shards:[c.contentRef],children:a.jsx(Pe.div,{"data-state":Kc(c.open),...l,ref:s,style:{pointerEvents:"auto",...l.style}})})}),Dr="DialogContent",Lm=v.forwardRef((n,s)=>{const o=Am(Dr,n.__scopeDialog),{forceMount:l=o.forceMount,...c}=n,d=nn(Dr,n.__scopeDialog);return a.jsx(Co,{present:l||d.open,children:d.modal?a.jsx(t1,{...c,ref:s}):a.jsx(n1,{...c,ref:s})})});Lm.displayName=Dr;var t1=v.forwardRef((n,s)=>{const o=nn(Dr,n.__scopeDialog),l=v.useRef(null),c=Be(s,o.contentRef,l);return v.useEffect(()=>{const d=l.current;if(d)return Pm(d)},[]),a.jsx(Bm,{...n,ref:c,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:De(n.onCloseAutoFocus,d=>{d.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:De(n.onPointerDownOutside,d=>{const f=d.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0;(f.button===2||p)&&d.preventDefault()}),onFocusOutside:De(n.onFocusOutside,d=>d.preventDefault())})}),n1=v.forwardRef((n,s)=>{const o=nn(Dr,n.__scopeDialog),l=v.useRef(!1),c=v.useRef(!1);return a.jsx(Bm,{...n,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{n.onCloseAutoFocus?.(d),d.defaultPrevented||(l.current||o.triggerRef.current?.focus(),d.preventDefault()),l.current=!1,c.current=!1},onInteractOutside:d=>{n.onInteractOutside?.(d),d.defaultPrevented||(l.current=!0,d.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=d.target;o.triggerRef.current?.contains(f)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&c.current&&d.preventDefault()}})}),Bm=v.forwardRef((n,s)=>{const{__scopeDialog:o,trapFocus:l,onOpenAutoFocus:c,onCloseAutoFocus:d,...f}=n,p=nn(Dr,o),h=v.useRef(null),g=Be(s,h);return bm(),a.jsxs(a.Fragment,{children:[a.jsx(Wc,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:c,onUnmountAutoFocus:d,children:a.jsx(Hc,{role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":Kc(p.open),...f,ref:g,onDismiss:()=>p.onOpenChange(!1)})}),a.jsxs(a.Fragment,{children:[a.jsx(r1,{titleId:p.titleId}),a.jsx(s1,{contentRef:h,descriptionId:p.descriptionId})]})]})}),qc="DialogTitle",Fm=v.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(qc,o);return a.jsx(Pe.h2,{id:c.titleId,...l,ref:s})});Fm.displayName=qc;var zm="DialogDescription",$m=v.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(zm,o);return a.jsx(Pe.p,{id:c.descriptionId,...l,ref:s})});$m.displayName=zm;var Vm="DialogClose",Hm=v.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(Vm,o);return a.jsx(Pe.button,{type:"button",...l,ref:s,onClick:De(n.onClick,()=>c.onOpenChange(!1))})});Hm.displayName=Vm;function Kc(n){return n?"open":"closed"}var Wm="DialogTitleWarning",[FN,Um]=gw(Wm,{contentName:Dr,titleName:qc,docsSlug:"dialog"}),r1=({titleId:n})=>{const s=Um(Wm),o=`\`${s.contentName}\` requires a \`${s.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${s.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${s.docsSlug}`;return v.useEffect(()=>{n&&(document.getElementById(n)||console.error(o))},[o,n]),null},o1="DialogDescriptionWarning",s1=({contentRef:n,descriptionId:s})=>{const l=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Um(o1).contentName}}.`;return v.useEffect(()=>{const c=n.current?.getAttribute("aria-describedby");s&&c&&(document.getElementById(s)||console.warn(l))},[l,n,s]),null},Gm=Dm,Ym=Mm,qm=Om,Km=Lm,Qm=Fm,Xm=$m,Zm=Hm;function Jm({...n}){return a.jsx(Gm,{"data-slot":"dialog",...n})}function i1({...n}){return a.jsx(Ym,{"data-slot":"dialog-portal",...n})}const eh=v.forwardRef(({className:n,...s},o)=>a.jsx(qm,{ref:o,"data-slot":"dialog-overlay",className:Ke("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...s}));eh.displayName="DialogOverlay";function th({className:n,children:s,...o}){return a.jsxs(i1,{"data-slot":"dialog-portal",children:[a.jsx(eh,{}),a.jsxs(Km,{"data-slot":"dialog-content",className:Ke("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...o,children:[s,a.jsxs(Zm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[a.jsx(Or,{}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function nh({className:n,...s}){return a.jsx(Qm,{"data-slot":"dialog-title",className:Ke("text-lg leading-none font-semibold",n),...s})}function rh({className:n,...s}){return a.jsx(Xm,{"data-slot":"dialog-description",className:Ke("text-muted-foreground text-sm",n),...s})}function oh({...n}){return a.jsx(Gm,{"data-slot":"sheet",...n})}function a1({...n}){return a.jsx(Ym,{"data-slot":"sheet-portal",...n})}const sh=v.forwardRef(({className:n,...s},o)=>a.jsx(qm,{ref:o,"data-slot":"sheet-overlay",className:Ke("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...s}));sh.displayName="SheetOverlay";function ih({className:n,children:s,side:o="right",...l}){return a.jsxs(a1,{children:[a.jsx(sh,{}),a.jsxs(Km,{"data-slot":"sheet-content",className:Ke("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",o==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",o==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",o==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",o==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",n),...l,children:[s,a.jsxs(Zm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[a.jsx(Or,{className:"size-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function ah({className:n,...s}){return a.jsx(Qm,{"data-slot":"sheet-title",className:Ke("text-foreground font-semibold",n),...s})}function lh({className:n,...s}){return a.jsx(Xm,{"data-slot":"sheet-description",className:Ke("text-muted-foreground text-sm",n),...s})}function St({className:n,type:s,...o}){return a.jsx("input",{type:s,"data-slot":"input",className:Ke("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...o})}var l1=Symbol.for("react.lazy"),na=Mc[" use ".trim().toString()];function c1(n){return typeof n=="object"&&n!==null&&"then"in n}function ch(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===l1&&"_payload"in n&&c1(n._payload)}function uh(n){const s=d1(n),o=v.forwardRef((l,c)=>{let{children:d,...f}=l;ch(d)&&typeof na=="function"&&(d=na(d._payload));const p=v.Children.toArray(d),h=p.find(p1);if(h){const g=h.props.children,x=p.map(y=>y===h?v.Children.count(g)>1?v.Children.only(null):v.isValidElement(g)?g.props.children:null:y);return a.jsx(s,{...f,ref:c,children:v.isValidElement(g)?v.cloneElement(g,void 0,x):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}var u1=uh("Slot");function d1(n){const s=v.forwardRef((o,l)=>{let{children:c,...d}=o;if(ch(c)&&typeof na=="function"&&(c=na(c._payload)),v.isValidElement(c)){const f=h1(c),p=m1(d,c.props);return c.type!==v.Fragment&&(p.ref=l?No(l,f):f),v.cloneElement(c,p)}return v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var f1=Symbol("radix.slottable");function p1(n){return v.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===f1}function m1(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function h1(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var g1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],y1=g1.reduce((n,s)=>{const o=uh(`Primitive.${s}`),l=v.forwardRef((c,d)=>{const{asChild:f,...p}=c,h=f?o:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(h,{...p,ref:d})});return l.displayName=`Primitive.${s}`,{...n,[s]:l}},{}),v1="Label",dh=v.forwardRef((n,s)=>a.jsx(y1.label,{...n,ref:s,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(n.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}}));dh.displayName=v1;var x1=dh;function Tn({className:n,...s}){return a.jsx(x1,{"data-slot":"label",className:Ke("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...s})}function fh(n){const s=v.useRef({value:n,previous:n});return v.useMemo(()=>(s.current.value!==n&&(s.current.previous=s.current.value,s.current.value=n),s.current.previous),[n])}function ph(n){const[s,o]=v.useState(void 0);return dt(()=>{if(n){o({width:n.offsetWidth,height:n.offsetHeight});const l=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let f,p;if("borderBoxSize"in d){const h=d.borderBoxSize,g=Array.isArray(h)?h[0]:h;f=g.inlineSize,p=g.blockSize}else f=n.offsetWidth,p=n.offsetHeight;o({width:f,height:p})});return l.observe(n,{box:"border-box"}),()=>l.unobserve(n)}else o(void 0)},[n]),s}var pa="Checkbox",[w1]=ko(pa),[b1,Qc]=w1(pa);function k1(n){const{__scopeCheckbox:s,checked:o,children:l,defaultChecked:c,disabled:d,form:f,name:p,onCheckedChange:h,required:g,value:x="on",internal_do_not_use_render:y}=n,[N,C]=xs({prop:o,defaultProp:c??!1,onChange:h,caller:pa}),[j,b]=v.useState(null),[k,T]=v.useState(null),S=v.useRef(!1),D=j?!!f||!!j.closest("form"):!0,L={checked:N,disabled:d,setChecked:C,control:j,setControl:b,name:p,form:f,value:x,hasConsumerStoppedPropagationRef:S,required:g,defaultChecked:sr(c)?!1:c,isFormControl:D,bubbleInput:k,setBubbleInput:T};return a.jsx(b1,{scope:s,...L,children:N1(y)?y(L):l})}var mh="CheckboxTrigger",hh=v.forwardRef(({__scopeCheckbox:n,onKeyDown:s,onClick:o,...l},c)=>{const{control:d,value:f,disabled:p,checked:h,required:g,setControl:x,setChecked:y,hasConsumerStoppedPropagationRef:N,isFormControl:C,bubbleInput:j}=Qc(mh,n),b=Be(c,x),k=v.useRef(h);return v.useEffect(()=>{const T=d?.form;if(T){const S=()=>y(k.current);return T.addEventListener("reset",S),()=>T.removeEventListener("reset",S)}},[d,y]),a.jsx(Pe.button,{type:"button",role:"checkbox","aria-checked":sr(h)?"mixed":h,"aria-required":g,"data-state":bh(h),"data-disabled":p?"":void 0,disabled:p,value:f,...l,ref:b,onKeyDown:De(s,T=>{T.key==="Enter"&&T.preventDefault()}),onClick:De(o,T=>{y(S=>sr(S)?!0:!S),j&&C&&(N.current=T.isPropagationStopped(),N.current||T.stopPropagation())})})});hh.displayName=mh;var gh=v.forwardRef((n,s)=>{const{__scopeCheckbox:o,name:l,checked:c,defaultChecked:d,required:f,disabled:p,value:h,onCheckedChange:g,form:x,...y}=n;return a.jsx(k1,{__scopeCheckbox:o,checked:c,defaultChecked:d,disabled:p,required:f,onCheckedChange:g,name:l,form:x,value:h,internal_do_not_use_render:({isFormControl:N})=>a.jsxs(a.Fragment,{children:[a.jsx(hh,{...y,ref:s,__scopeCheckbox:o}),N&&a.jsx(wh,{__scopeCheckbox:o})]})})});gh.displayName=pa;var yh="CheckboxIndicator",vh=v.forwardRef((n,s)=>{const{__scopeCheckbox:o,forceMount:l,...c}=n,d=Qc(yh,o);return a.jsx(Co,{present:l||sr(d.checked)||d.checked===!0,children:a.jsx(Pe.span,{"data-state":bh(d.checked),"data-disabled":d.disabled?"":void 0,...c,ref:s,style:{pointerEvents:"none",...n.style}})})});vh.displayName=yh;var xh="CheckboxBubbleInput",wh=v.forwardRef(({__scopeCheckbox:n,...s},o)=>{const{control:l,hasConsumerStoppedPropagationRef:c,checked:d,defaultChecked:f,required:p,disabled:h,name:g,value:x,form:y,bubbleInput:N,setBubbleInput:C}=Qc(xh,n),j=Be(o,C),b=fh(d),k=ph(l);v.useEffect(()=>{const S=N;if(!S)return;const D=window.HTMLInputElement.prototype,P=Object.getOwnPropertyDescriptor(D,"checked").set,$=!c.current;if(b!==d&&P){const F=new Event("click",{bubbles:$});S.indeterminate=sr(d),P.call(S,sr(d)?!1:d),S.dispatchEvent(F)}},[N,b,d,c]);const T=v.useRef(sr(d)?!1:d);return a.jsx(Pe.input,{type:"checkbox","aria-hidden":!0,defaultChecked:f??T.current,required:p,disabled:h,name:g,value:x,form:y,...s,tabIndex:-1,ref:j,style:{...s.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});wh.displayName=xh;function N1(n){return typeof n=="function"}function sr(n){return n==="indeterminate"}function bh(n){return sr(n)?"indeterminate":n?"checked":"unchecked"}function C1({className:n,...s}){return a.jsx(gh,{"data-slot":"checkbox",className:Ke("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...s,children:a.jsx(vh,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:a.jsx(Lc,{className:"size-3.5"})})})}const yp=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,vp=Yp,S1=(n,s)=>o=>{var l;if(s?.variants==null)return vp(n,o?.class,o?.className);const{variants:c,defaultVariants:d}=s,f=Object.keys(c).map(g=>{const x=o?.[g],y=d?.[g];if(x===null)return null;const N=yp(x)||yp(y);return c[g][N]}),p=o&&Object.entries(o).reduce((g,x)=>{let[y,N]=x;return N===void 0||(g[y]=N),g},{}),h=s==null||(l=s.compoundVariants)===null||l===void 0?void 0:l.reduce((g,x)=>{let{class:y,className:N,...C}=x;return Object.entries(C).every(j=>{let[b,k]=j;return Array.isArray(k)?k.includes({...d,...p}[b]):{...d,...p}[b]===k})?[...g,y,N]:g},[]);return vp(n,f,h,o?.class,o?.className)},E1=S1("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function j1({className:n,variant:s,asChild:o=!1,...l}){const c=o?u1:"span";return a.jsx(c,{"data-slot":"badge",className:Ke(E1({variant:s}),n),...l})}const T1=({isOpen:n,onClose:s,selectedPlan:o,isMobile:l=!1,locale:c="tc",onNavigate:d,onScrollToPricing:f})=>{const p=Ge(c),[h,g]=v.useState("monthly"),[x,y]=v.useState("credit-card"),[N,C]=v.useState(!1),[j,b]=v.useState(""),[k,T]=v.useState(""),D={free:{monthly:0,yearly:0,seats:1},basic:{monthly:600,yearly:6e3,seats:1},pro:{monthly:3e3,yearly:3e4,seats:3},enterprise:{monthly:0,yearly:0,seats:null}}[o],L=h==="monthly"?D.monthly:D.yearly,P=D.monthly*12,$=D.seats||1,F=L*$,z=oe=>({free:p.payment.freePlan,basic:p.payment.basicPlan,pro:p.payment.proPlan,enterprise:p.payment.enterprisePlan})[oe],U=()=>{s(),f?f():d&&(d("/"),setTimeout(()=>{const oe=document.getElementById("pricing");oe&&oe.scrollIntoView({behavior:"smooth"})},100))},Y=()=>{window.location.href="mailto:contact@inviti.vip"},ye=()=>{o==="enterprise"?Y():console.log("Processing payment...",{plan:o,billingCycle:h,seats:$,totalAmount:F,email:k})},ae=({TitleComponent:oe,DescriptionComponent:de})=>a.jsxs("div",{className:"flex flex-col h-full max-h-full overflow-hidden",children:[a.jsxs("div",{className:"flex-shrink-0 flex items-start justify-between pb-4 border-b border-gray-200",children:[a.jsxs("div",{children:[a.jsx(oe,{className:"text-gray-900 mb-1",children:p.payment.title}),a.jsx(de,{className:"text-sm text-gray-600",children:p.payment.subtitle})]}),a.jsx("button",{onClick:s,className:"min-w-[32px] min-h-[32px] p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2","aria-label":p.payment.close,children:a.jsx(Or,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden",style:{minHeight:"40vh"},children:a.jsxs("div",{className:`space-y-6 ${l?"py-4":"py-6"}`,children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.planSummaryTitle}),a.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded space-y-3",children:[a.jsx(j1,{className:"bg-gray-900 text-white hover:bg-gray-800",children:z(o)}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:()=>g("monthly"),className:`flex-1 px-3 py-2 text-sm border rounded transition-colors ${h==="monthly"?"bg-gray-900 text-white border-gray-900":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`,children:p.payment.monthly}),a.jsx("button",{onClick:()=>g("yearly"),className:`flex-1 px-3 py-2 text-sm border rounded transition-colors ${h==="yearly"?"bg-gray-900 text-white border-gray-900":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`,children:p.payment.yearly})]}),o!=="free"&&o!=="enterprise"&&a.jsx("div",{className:"text-sm",children:h==="yearly"?a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"text-gray-900",children:["NT$",L.toLocaleString()," / Year"]}),a.jsxs("p",{className:"text-gray-500 line-through text-xs",children:["NT$",P.toLocaleString()," / Year"]})]}):a.jsxs("p",{className:"text-gray-900",children:["NT$",L.toLocaleString()," / month"]})}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.seats}),o==="enterprise"?a.jsx("div",{className:"px-3 py-2 bg-gray-100 border border-gray-200 rounded text-sm text-gray-600",children:p.payment.contactSalesForSeats}):a.jsx(St,{type:"text",value:$,readOnly:!0,disabled:!0,className:"bg-gray-100 text-gray-900 cursor-default",tabIndex:-1})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.accountBillingTitle}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.email}),a.jsx(St,{type:"email",placeholder:p.payment.emailPlaceholder,value:k,onChange:se=>T(se.target.value),className:"mt-1"})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.companyName}),a.jsx(St,{type:"text",placeholder:p.payment.companyNamePlaceholder,className:"mt-1"})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.taxId}),a.jsx(St,{type:"text",placeholder:p.payment.taxIdPlaceholder,className:"mt-1"})]}),a.jsxs("div",{className:"space-y-3 pt-2",children:[a.jsx(Tn,{className:"text-sm text-gray-900",children:p.payment.billingAddress}),a.jsx(St,{type:"text",placeholder:p.payment.streetPlaceholder,className:"mt-1"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx(St,{type:"text",placeholder:p.payment.cityPlaceholder}),a.jsx(St,{type:"text",placeholder:p.payment.postalCodePlaceholder})]}),a.jsx(St,{type:"text",placeholder:p.payment.countryPlaceholder,className:"mt-1"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.paymentMethodTitle}),a.jsxs("div",{className:"flex gap-2 border-b border-gray-200",children:[a.jsxs("button",{onClick:()=>y("credit-card"),className:`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${x==="credit-card"?"border-gray-900 text-gray-900":"border-transparent text-gray-600 hover:text-gray-900"}`,children:[a.jsx(zv,{className:"w-4 h-4"}),p.payment.creditCard]}),a.jsxs("button",{onClick:()=>y("bank-transfer"),disabled:o!=="enterprise",className:`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${x==="bank-transfer"?"border-gray-900 text-gray-900":"border-transparent text-gray-600 hover:text-gray-900"} ${o!=="enterprise"?"opacity-50 cursor-not-allowed":""}`,children:[a.jsx(Tv,{className:"w-4 h-4"}),p.payment.bankTransfer]})]}),x==="credit-card"&&a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.cardNumber}),a.jsx(St,{type:"text",placeholder:p.payment.cardNumberPlaceholder,className:"mt-1",maxLength:19}),a.jsxs("div",{className:"flex gap-2 mt-2",children:[a.jsx("span",{className:"text-xs text-gray-400",children:"VISA"}),a.jsx("span",{className:"text-xs text-gray-400",children:"MasterCard"}),a.jsx("span",{className:"text-xs text-gray-400",children:"AMEX"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.expiration}),a.jsx(St,{type:"text",placeholder:p.payment.expirationPlaceholder,className:"mt-1",maxLength:5})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.cvc}),a.jsx(St,{type:"text",placeholder:p.payment.cvcPlaceholder,className:"mt-1",maxLength:4})]})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.nameOnCard}),a.jsx(St,{type:"text",placeholder:p.payment.nameOnCardPlaceholder,className:"mt-1"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.verificationTitle}),a.jsx("button",{className:"text-sm text-gray-600 hover:text-gray-900 underline",children:p.payment.sendCode}),a.jsx("div",{className:"flex gap-2",children:[...Array(6)].map((se,Z)=>a.jsx(St,{type:"text",maxLength:1,className:"w-12 h-12 text-center"},Z))})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.couponTitle}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(St,{type:"text",placeholder:p.payment.couponPlaceholder,value:j,onChange:se=>b(se.target.value),className:"flex-1"}),a.jsx(st,{variant:"secondary",children:p.payment.apply})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(C1,{id:"agree-terms",checked:N,onCheckedChange:se=>C(se)}),a.jsxs("label",{htmlFor:"agree-terms",className:"text-sm text-gray-700 leading-tight cursor-pointer",children:[p.payment.agreeTerms," ",a.jsx("a",{href:"#terms",className:"text-gray-900 underline hover:text-gray-700",children:p.payment.termsLink})," ","&"," ",a.jsx("a",{href:"#privacy",className:"text-gray-900 underline hover:text-gray-700",children:p.payment.privacyLink})]})]}),a.jsx("p",{className:"text-xs text-gray-500",children:p.payment.autoRenewNote})]})]})}),a.jsxs("div",{className:"flex-shrink-0 border-t border-gray-200 pt-4 space-y-4 bg-white",style:{paddingBottom:l?"16px":"0"},children:[o!=="free"&&o!=="enterprise"&&a.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded space-y-2",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsxs("span",{className:"text-sm text-gray-700",children:[p.payment.totalAmount,":"]}),a.jsxs("span",{className:"text-gray-900",children:["NT$",F.toLocaleString()," / ",h==="yearly"?"Year":"month"]})]}),a.jsx("p",{className:"text-xs text-gray-600",children:p.payment.effectiveImmediately})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[o==="enterprise"?a.jsx(st,{variant:"primary",onClick:Y,className:"w-full",children:p.payment.contactSales}):a.jsx(st,{variant:"primary",onClick:ye,disabled:!N||!k,className:"w-full",children:p.payment.upgradeNow}),a.jsx("button",{onClick:U,className:"text-sm text-gray-600 hover:text-gray-900 underline py-2",children:p.payment.backToPricing})]})]})]});return l?a.jsx(oh,{open:n,onOpenChange:s,children:a.jsx(ih,{side:"bottom",className:"h-[88vh] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(ae,{TitleComponent:ah,DescriptionComponent:lh})})}):a.jsx(Jm,{open:n,onOpenChange:s,children:a.jsx(th,{className:"max-w-[720px] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(ae,{TitleComponent:nh,DescriptionComponent:rh})})})};function I1(n){if(typeof document>"u")return;let s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",s.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}const P1=n=>{switch(n){case"success":return R1;case"info":return M1;case"warning":return A1;case"error":return O1;default:return null}},_1=Array(12).fill(0),D1=({visible:n,className:s})=>re.createElement("div",{className:["sonner-loading-wrapper",s].filter(Boolean).join(" "),"data-visible":n},re.createElement("div",{className:"sonner-spinner"},_1.map((o,l)=>re.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${l}`})))),R1=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),A1=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),M1=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),O1=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),L1=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},re.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),B1=()=>{const[n,s]=re.useState(document.hidden);return re.useEffect(()=>{const o=()=>{s(document.hidden)};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)},[]),n};let Sc=1;class F1{constructor(){this.subscribe=s=>(this.subscribers.push(s),()=>{const o=this.subscribers.indexOf(s);this.subscribers.splice(o,1)}),this.publish=s=>{this.subscribers.forEach(o=>o(s))},this.addToast=s=>{this.publish(s),this.toasts=[...this.toasts,s]},this.create=s=>{var o;const{message:l,...c}=s,d=typeof s?.id=="number"||((o=s.id)==null?void 0:o.length)>0?s.id:Sc++,f=this.toasts.find(h=>h.id===d),p=s.dismissible===void 0?!0:s.dismissible;return this.dismissedToasts.has(d)&&this.dismissedToasts.delete(d),f?this.toasts=this.toasts.map(h=>h.id===d?(this.publish({...h,...s,id:d,title:l}),{...h,...s,id:d,dismissible:p,title:l}):h):this.addToast({title:l,...c,dismissible:p,id:d}),d},this.dismiss=s=>(s?(this.dismissedToasts.add(s),requestAnimationFrame(()=>this.subscribers.forEach(o=>o({id:s,dismiss:!0})))):this.toasts.forEach(o=>{this.subscribers.forEach(l=>l({id:o.id,dismiss:!0}))}),s),this.message=(s,o)=>this.create({...o,message:s}),this.error=(s,o)=>this.create({...o,message:s,type:"error"}),this.success=(s,o)=>this.create({...o,type:"success",message:s}),this.info=(s,o)=>this.create({...o,type:"info",message:s}),this.warning=(s,o)=>this.create({...o,type:"warning",message:s}),this.loading=(s,o)=>this.create({...o,type:"loading",message:s}),this.promise=(s,o)=>{if(!o)return;let l;o.loading!==void 0&&(l=this.create({...o,promise:s,type:"loading",message:o.loading,description:typeof o.description!="function"?o.description:void 0}));const c=Promise.resolve(s instanceof Function?s():s);let d=l!==void 0,f;const p=c.then(async g=>{if(f=["resolve",g],re.isValidElement(g))d=!1,this.create({id:l,type:"default",message:g});else if($1(g)&&!g.ok){d=!1;const y=typeof o.error=="function"?await o.error(`HTTP error! status: ${g.status}`):o.error,N=typeof o.description=="function"?await o.description(`HTTP error! status: ${g.status}`):o.description,j=typeof y=="object"&&!re.isValidElement(y)?y:{message:y};this.create({id:l,type:"error",description:N,...j})}else if(g instanceof Error){d=!1;const y=typeof o.error=="function"?await o.error(g):o.error,N=typeof o.description=="function"?await o.description(g):o.description,j=typeof y=="object"&&!re.isValidElement(y)?y:{message:y};this.create({id:l,type:"error",description:N,...j})}else if(o.success!==void 0){d=!1;const y=typeof o.success=="function"?await o.success(g):o.success,N=typeof o.description=="function"?await o.description(g):o.description,j=typeof y=="object"&&!re.isValidElement(y)?y:{message:y};this.create({id:l,type:"success",description:N,...j})}}).catch(async g=>{if(f=["reject",g],o.error!==void 0){d=!1;const x=typeof o.error=="function"?await o.error(g):o.error,y=typeof o.description=="function"?await o.description(g):o.description,C=typeof x=="object"&&!re.isValidElement(x)?x:{message:x};this.create({id:l,type:"error",description:y,...C})}}).finally(()=>{d&&(this.dismiss(l),l=void 0),o.finally==null||o.finally.call(o)}),h=()=>new Promise((g,x)=>p.then(()=>f[0]==="reject"?x(f[1]):g(f[1])).catch(x));return typeof l!="string"&&typeof l!="number"?{unwrap:h}:Object.assign(l,{unwrap:h})},this.custom=(s,o)=>{const l=o?.id||Sc++;return this.create({jsx:s(l),id:l,...o}),l},this.getActiveToasts=()=>this.toasts.filter(s=>!this.dismissedToasts.has(s.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Et=new F1,z1=(n,s)=>{const o=s?.id||Sc++;return Et.addToast({title:n,...s,id:o}),o},$1=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",V1=z1,H1=()=>Et.toasts,W1=()=>Et.getActiveToasts(),Ki=Object.assign(V1,{success:Et.success,info:Et.info,warning:Et.warning,error:Et.error,custom:Et.custom,message:Et.message,promise:Et.promise,dismiss:Et.dismiss,loading:Et.loading},{getHistory:H1,getToasts:W1});I1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Wi(n){return n.label!==void 0}const U1=3,G1="24px",Y1="16px",xp=4e3,q1=356,K1=14,Q1=45,X1=200;function cn(...n){return n.filter(Boolean).join(" ")}function Z1(n){const[s,o]=n.split("-"),l=[];return s&&l.push(s),o&&l.push(o),l}const J1=n=>{var s,o,l,c,d,f,p,h,g;const{invert:x,toast:y,unstyled:N,interacting:C,setHeights:j,visibleToasts:b,heights:k,index:T,toasts:S,expanded:D,removeToast:L,defaultRichColors:P,closeButton:$,style:F,cancelButtonStyle:z,actionButtonStyle:U,className:Y="",descriptionClassName:ye="",duration:ae,position:oe,gap:de,expandByDefault:se,classNames:Z,icons:ie,closeButtonAriaLabel:A="Close toast"}=n,[ee,K]=re.useState(null),[R,V]=re.useState(null),[Q,J]=re.useState(!1),[le,fe]=re.useState(!1),[W,H]=re.useState(!1),[te,ce]=re.useState(!1),[we,Ce]=re.useState(!1),[$e,et]=re.useState(0),[Wt,Ut]=re.useState(0),it=re.useRef(y.duration||ae||xp),To=re.useRef(null),jt=re.useRef(null),ur=T===0,_n=T+1<=b,at=y.type,yn=y.dismissible!==!1,Cs=y.className||"",Ss=y.descriptionClassName||"",dr=re.useMemo(()=>k.findIndex(Se=>Se.toastId===y.id)||0,[k,y.id]),Io=re.useMemo(()=>{var Se;return(Se=y.closeButton)!=null?Se:$},[y.closeButton,$]),fr=re.useMemo(()=>y.duration||ae||xp,[y.duration,ae]),Lr=re.useRef(0),Mt=re.useRef(0),Dn=re.useRef(0),Rn=re.useRef(null),[Es,js]=oe.split("-"),Ts=re.useMemo(()=>k.reduce((Se,He,Qe)=>Qe>=dr?Se:Se+He.height,0),[k,dr]),Br=B1(),Po=y.invert||x,pr=at==="loading";Mt.current=re.useMemo(()=>dr*de+Ts,[dr,Ts]),re.useEffect(()=>{it.current=fr},[fr]),re.useEffect(()=>{J(!0)},[]),re.useEffect(()=>{const Se=jt.current;if(Se){const He=Se.getBoundingClientRect().height;return Ut(He),j(Qe=>[{toastId:y.id,height:He,position:y.position},...Qe]),()=>j(Qe=>Qe.filter(ft=>ft.toastId!==y.id))}},[j,y.id]),re.useLayoutEffect(()=>{if(!Q)return;const Se=jt.current,He=Se.style.height;Se.style.height="auto";const Qe=Se.getBoundingClientRect().height;Se.style.height=He,Ut(Qe),j(ft=>ft.find(Ye=>Ye.toastId===y.id)?ft.map(Ye=>Ye.toastId===y.id?{...Ye,height:Qe}:Ye):[{toastId:y.id,height:Qe,position:y.position},...ft])},[Q,y.title,y.description,j,y.id,y.jsx,y.action,y.cancel]);const Ot=re.useCallback(()=>{fe(!0),et(Mt.current),j(Se=>Se.filter(He=>He.toastId!==y.id)),setTimeout(()=>{L(y)},X1)},[y,L,j,Mt]);re.useEffect(()=>{if(y.promise&&at==="loading"||y.duration===1/0||y.type==="loading")return;let Se;return D||C||Br?(()=>{if(Dn.current<Lr.current){const ft=new Date().getTime()-Lr.current;it.current=it.current-ft}Dn.current=new Date().getTime()})():(()=>{it.current!==1/0&&(Lr.current=new Date().getTime(),Se=setTimeout(()=>{y.onAutoClose==null||y.onAutoClose.call(y,y),Ot()},it.current))})(),()=>clearTimeout(Se)},[D,C,y,at,Br,Ot]),re.useEffect(()=>{y.delete&&(Ot(),y.onDismiss==null||y.onDismiss.call(y,y))},[Ot,y.delete]);function _o(){var Se;if(ie?.loading){var He;return re.createElement("div",{className:cn(Z?.loader,y==null||(He=y.classNames)==null?void 0:He.loader,"sonner-loader"),"data-visible":at==="loading"},ie.loading)}return re.createElement(D1,{className:cn(Z?.loader,y==null||(Se=y.classNames)==null?void 0:Se.loader),visible:at==="loading"})}const An=y.icon||ie?.[at]||P1(at);var vn,Do;return re.createElement("li",{tabIndex:0,ref:jt,className:cn(Y,Cs,Z?.toast,y==null||(s=y.classNames)==null?void 0:s.toast,Z?.default,Z?.[at],y==null||(o=y.classNames)==null?void 0:o[at]),"data-sonner-toast":"","data-rich-colors":(vn=y.richColors)!=null?vn:P,"data-styled":!(y.jsx||y.unstyled||N),"data-mounted":Q,"data-promise":!!y.promise,"data-swiped":we,"data-removed":le,"data-visible":_n,"data-y-position":Es,"data-x-position":js,"data-index":T,"data-front":ur,"data-swiping":W,"data-dismissible":yn,"data-type":at,"data-invert":Po,"data-swipe-out":te,"data-swipe-direction":R,"data-expanded":!!(D||se&&Q),"data-testid":y.testId,style:{"--index":T,"--toasts-before":T,"--z-index":S.length-T,"--offset":`${le?$e:Mt.current}px`,"--initial-height":se?"auto":`${Wt}px`,...F,...y.style},onDragEnd:()=>{H(!1),K(null),Rn.current=null},onPointerDown:Se=>{Se.button!==2&&(pr||!yn||(To.current=new Date,et(Mt.current),Se.target.setPointerCapture(Se.pointerId),Se.target.tagName!=="BUTTON"&&(H(!0),Rn.current={x:Se.clientX,y:Se.clientY})))},onPointerUp:()=>{var Se,He,Qe;if(te||!yn)return;Rn.current=null;const ft=Number(((Se=jt.current)==null?void 0:Se.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Mn=Number(((He=jt.current)==null?void 0:He.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ye=new Date().getTime()-((Qe=To.current)==null?void 0:Qe.getTime()),tt=ee==="x"?ft:Mn,On=Math.abs(tt)/Ye;if(Math.abs(tt)>=Q1||On>.11){et(Mt.current),y.onDismiss==null||y.onDismiss.call(y,y),V(ee==="x"?ft>0?"right":"left":Mn>0?"down":"up"),Ot(),ce(!0);return}else{var lt,Tt;(lt=jt.current)==null||lt.style.setProperty("--swipe-amount-x","0px"),(Tt=jt.current)==null||Tt.style.setProperty("--swipe-amount-y","0px")}Ce(!1),H(!1),K(null)},onPointerMove:Se=>{var He,Qe,ft;if(!Rn.current||!yn||((He=window.getSelection())==null?void 0:He.toString().length)>0)return;const Ye=Se.clientY-Rn.current.y,tt=Se.clientX-Rn.current.x;var On;const lt=(On=n.swipeDirections)!=null?On:Z1(oe);!ee&&(Math.abs(tt)>1||Math.abs(Ye)>1)&&K(Math.abs(tt)>Math.abs(Ye)?"x":"y");let Tt={x:0,y:0};const Ln=Lt=>1/(1.5+Math.abs(Lt)/20);if(ee==="y"){if(lt.includes("top")||lt.includes("bottom"))if(lt.includes("top")&&Ye<0||lt.includes("bottom")&&Ye>0)Tt.y=Ye;else{const Lt=Ye*Ln(Ye);Tt.y=Math.abs(Lt)<Math.abs(Ye)?Lt:Ye}}else if(ee==="x"&&(lt.includes("left")||lt.includes("right")))if(lt.includes("left")&&tt<0||lt.includes("right")&&tt>0)Tt.x=tt;else{const Lt=tt*Ln(tt);Tt.x=Math.abs(Lt)<Math.abs(tt)?Lt:tt}(Math.abs(Tt.x)>0||Math.abs(Tt.y)>0)&&Ce(!0),(Qe=jt.current)==null||Qe.style.setProperty("--swipe-amount-x",`${Tt.x}px`),(ft=jt.current)==null||ft.style.setProperty("--swipe-amount-y",`${Tt.y}px`)}},Io&&!y.jsx&&at!=="loading"?re.createElement("button",{"aria-label":A,"data-disabled":pr,"data-close-button":!0,onClick:pr||!yn?()=>{}:()=>{Ot(),y.onDismiss==null||y.onDismiss.call(y,y)},className:cn(Z?.closeButton,y==null||(l=y.classNames)==null?void 0:l.closeButton)},(Do=ie?.close)!=null?Do:L1):null,(at||y.icon||y.promise)&&y.icon!==null&&(ie?.[at]!==null||y.icon)?re.createElement("div",{"data-icon":"",className:cn(Z?.icon,y==null||(c=y.classNames)==null?void 0:c.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||_o():null,y.type!=="loading"?An:null):null,re.createElement("div",{"data-content":"",className:cn(Z?.content,y==null||(d=y.classNames)==null?void 0:d.content)},re.createElement("div",{"data-title":"",className:cn(Z?.title,y==null||(f=y.classNames)==null?void 0:f.title)},y.jsx?y.jsx:typeof y.title=="function"?y.title():y.title),y.description?re.createElement("div",{"data-description":"",className:cn(ye,Ss,Z?.description,y==null||(p=y.classNames)==null?void 0:p.description)},typeof y.description=="function"?y.description():y.description):null),re.isValidElement(y.cancel)?y.cancel:y.cancel&&Wi(y.cancel)?re.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||z,onClick:Se=>{Wi(y.cancel)&&yn&&(y.cancel.onClick==null||y.cancel.onClick.call(y.cancel,Se),Ot())},className:cn(Z?.cancelButton,y==null||(h=y.classNames)==null?void 0:h.cancelButton)},y.cancel.label):null,re.isValidElement(y.action)?y.action:y.action&&Wi(y.action)?re.createElement("button",{"data-button":!0,"data-action":!0,style:y.actionButtonStyle||U,onClick:Se=>{Wi(y.action)&&(y.action.onClick==null||y.action.onClick.call(y.action,Se),!Se.defaultPrevented&&Ot())},className:cn(Z?.actionButton,y==null||(g=y.classNames)==null?void 0:g.actionButton)},y.action.label):null)};function wp(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function e2(n,s){const o={};return[n,s].forEach((l,c)=>{const d=c===1,f=d?"--mobile-offset":"--offset",p=d?Y1:G1;function h(g){["top","right","bottom","left"].forEach(x=>{o[`${f}-${x}`]=typeof g=="number"?`${g}px`:g})}typeof l=="number"||typeof l=="string"?h(l):typeof l=="object"?["top","right","bottom","left"].forEach(g=>{l[g]===void 0?o[`${f}-${g}`]=p:o[`${f}-${g}`]=typeof l[g]=="number"?`${l[g]}px`:l[g]}):h(p)}),o}const t2=re.forwardRef(function(s,o){const{id:l,invert:c,position:d="bottom-right",hotkey:f=["altKey","KeyT"],expand:p,closeButton:h,className:g,offset:x,mobileOffset:y,theme:N="light",richColors:C,duration:j,style:b,visibleToasts:k=U1,toastOptions:T,dir:S=wp(),gap:D=K1,icons:L,containerAriaLabel:P="Notifications"}=s,[$,F]=re.useState([]),z=re.useMemo(()=>l?$.filter(Q=>Q.toasterId===l):$.filter(Q=>!Q.toasterId),[$,l]),U=re.useMemo(()=>Array.from(new Set([d].concat(z.filter(Q=>Q.position).map(Q=>Q.position)))),[z,d]),[Y,ye]=re.useState([]),[ae,oe]=re.useState(!1),[de,se]=re.useState(!1),[Z,ie]=re.useState(N!=="system"?N:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),A=re.useRef(null),ee=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),K=re.useRef(null),R=re.useRef(!1),V=re.useCallback(Q=>{F(J=>{var le;return(le=J.find(fe=>fe.id===Q.id))!=null&&le.delete||Et.dismiss(Q.id),J.filter(({id:fe})=>fe!==Q.id)})},[]);return re.useEffect(()=>Et.subscribe(Q=>{if(Q.dismiss){requestAnimationFrame(()=>{F(J=>J.map(le=>le.id===Q.id?{...le,delete:!0}:le))});return}setTimeout(()=>{am.flushSync(()=>{F(J=>{const le=J.findIndex(fe=>fe.id===Q.id);return le!==-1?[...J.slice(0,le),{...J[le],...Q},...J.slice(le+1)]:[Q,...J]})})})}),[$]),re.useEffect(()=>{if(N!=="system"){ie(N);return}if(N==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ie("dark"):ie("light")),typeof window>"u")return;const Q=window.matchMedia("(prefers-color-scheme: dark)");try{Q.addEventListener("change",({matches:J})=>{ie(J?"dark":"light")})}catch{Q.addListener(({matches:le})=>{try{ie(le?"dark":"light")}catch(fe){console.error(fe)}})}},[N]),re.useEffect(()=>{$.length<=1&&oe(!1)},[$]),re.useEffect(()=>{const Q=J=>{var le;if(f.every(H=>J[H]||J.code===H)){var W;oe(!0),(W=A.current)==null||W.focus()}J.code==="Escape"&&(document.activeElement===A.current||(le=A.current)!=null&&le.contains(document.activeElement))&&oe(!1)};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[f]),re.useEffect(()=>{if(A.current)return()=>{K.current&&(K.current.focus({preventScroll:!0}),K.current=null,R.current=!1)}},[A.current]),re.createElement("section",{ref:o,"aria-label":`${P} ${ee}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},U.map((Q,J)=>{var le;const[fe,W]=Q.split("-");return z.length?re.createElement("ol",{key:Q,dir:S==="auto"?wp():S,tabIndex:-1,ref:A,className:g,"data-sonner-toaster":!0,"data-sonner-theme":Z,"data-y-position":fe,"data-x-position":W,style:{"--front-toast-height":`${((le=Y[0])==null?void 0:le.height)||0}px`,"--width":`${q1}px`,"--gap":`${D}px`,...b,...e2(x,y)},onBlur:H=>{R.current&&!H.currentTarget.contains(H.relatedTarget)&&(R.current=!1,K.current&&(K.current.focus({preventScroll:!0}),K.current=null))},onFocus:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||R.current||(R.current=!0,K.current=H.relatedTarget)},onMouseEnter:()=>oe(!0),onMouseMove:()=>oe(!0),onMouseLeave:()=>{de||oe(!1)},onDragEnd:()=>oe(!1),onPointerDown:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||se(!0)},onPointerUp:()=>se(!1)},z.filter(H=>!H.position&&J===0||H.position===Q).map((H,te)=>{var ce,we;return re.createElement(J1,{key:H.id,icons:L,index:te,toast:H,defaultRichColors:C,duration:(ce=T?.duration)!=null?ce:j,className:T?.className,descriptionClassName:T?.descriptionClassName,invert:c,visibleToasts:k,closeButton:(we=T?.closeButton)!=null?we:h,interacting:de,position:Q,style:T?.style,unstyled:T?.unstyled,classNames:T?.classNames,cancelButtonStyle:T?.cancelButtonStyle,actionButtonStyle:T?.actionButtonStyle,closeButtonAriaLabel:T?.closeButtonAriaLabel,removeToast:V,toasts:z.filter(Ce=>Ce.position==H.position),heights:Y.filter(Ce=>Ce.position==H.position),setHeights:ye,expandByDefault:p,gap:D,expanded:ae,swipeDirections:s.swipeDirections})})):null}))});function bp(n,[s,o]){return Math.min(o,Math.max(s,n))}function kp(n){const s=n2(n),o=v.forwardRef((l,c)=>{const{children:d,...f}=l,p=v.Children.toArray(d),h=p.find(o2);if(h){const g=h.props.children,x=p.map(y=>y===h?v.Children.count(g)>1?v.Children.only(null):v.isValidElement(g)?g.props.children:null:y);return a.jsx(s,{...f,ref:c,children:v.isValidElement(g)?v.cloneElement(g,void 0,x):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function n2(n){const s=v.forwardRef((o,l)=>{const{children:c,...d}=o;if(v.isValidElement(c)){const f=i2(c),p=s2(d,c.props);return c.type!==v.Fragment&&(p.ref=l?No(l,f):f),v.cloneElement(c,p)}return v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var r2=Symbol("radix.slottable");function o2(n){return v.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===r2}function s2(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function i2(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}function a2(n){const s=n+"CollectionProvider",[o,l]=ko(s),[c,d]=o(s,{collectionRef:{current:null},itemMap:new Map}),f=b=>{const{scope:k,children:T}=b,S=re.useRef(null),D=re.useRef(new Map).current;return a.jsx(c,{scope:k,itemMap:D,collectionRef:S,children:T})};f.displayName=s;const p=n+"CollectionSlot",h=kp(p),g=re.forwardRef((b,k)=>{const{scope:T,children:S}=b,D=d(p,T),L=Be(k,D.collectionRef);return a.jsx(h,{ref:L,children:S})});g.displayName=p;const x=n+"CollectionItemSlot",y="data-radix-collection-item",N=kp(x),C=re.forwardRef((b,k)=>{const{scope:T,children:S,...D}=b,L=re.useRef(null),P=Be(k,L),$=d(x,T);return re.useEffect(()=>($.itemMap.set(L,{ref:L,...D}),()=>void $.itemMap.delete(L))),a.jsx(N,{[y]:"",ref:P,children:S})});C.displayName=x;function j(b){const k=d(n+"CollectionConsumer",b);return re.useCallback(()=>{const S=k.collectionRef.current;if(!S)return[];const D=Array.from(S.querySelectorAll(`[${y}]`));return Array.from(k.itemMap.values()).sort(($,F)=>D.indexOf($.ref.current)-D.indexOf(F.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:f,Slot:g,ItemSlot:C},j,l]}var l2=v.createContext(void 0);function c2(n){const s=v.useContext(l2);return n||s||"ltr"}const u2=["top","right","bottom","left"],ir=Math.min,Rt=Math.max,ra=Math.round,Ui=Math.floor,mn=n=>({x:n,y:n}),d2={left:"right",right:"left",bottom:"top",top:"bottom"},f2={start:"end",end:"start"};function Ec(n,s,o){return Rt(n,ir(s,o))}function In(n,s){return typeof n=="function"?n(s):n}function Pn(n){return n.split("-")[0]}function So(n){return n.split("-")[1]}function Xc(n){return n==="x"?"y":"x"}function Zc(n){return n==="y"?"height":"width"}const p2=new Set(["top","bottom"]);function pn(n){return p2.has(Pn(n))?"y":"x"}function Jc(n){return Xc(pn(n))}function m2(n,s,o){o===void 0&&(o=!1);const l=So(n),c=Jc(n),d=Zc(c);let f=c==="x"?l===(o?"end":"start")?"right":"left":l==="start"?"bottom":"top";return s.reference[d]>s.floating[d]&&(f=oa(f)),[f,oa(f)]}function h2(n){const s=oa(n);return[jc(n),s,jc(s)]}function jc(n){return n.replace(/start|end/g,s=>f2[s])}const Np=["left","right"],Cp=["right","left"],g2=["top","bottom"],y2=["bottom","top"];function v2(n,s,o){switch(n){case"top":case"bottom":return o?s?Cp:Np:s?Np:Cp;case"left":case"right":return s?g2:y2;default:return[]}}function x2(n,s,o,l){const c=So(n);let d=v2(Pn(n),o==="start",l);return c&&(d=d.map(f=>f+"-"+c),s&&(d=d.concat(d.map(jc)))),d}function oa(n){return n.replace(/left|right|bottom|top/g,s=>d2[s])}function w2(n){return{top:0,right:0,bottom:0,left:0,...n}}function kh(n){return typeof n!="number"?w2(n):{top:n,right:n,bottom:n,left:n}}function sa(n){const{x:s,y:o,width:l,height:c}=n;return{width:l,height:c,top:o,left:s,right:s+l,bottom:o+c,x:s,y:o}}function Sp(n,s,o){let{reference:l,floating:c}=n;const d=pn(s),f=Jc(s),p=Zc(f),h=Pn(s),g=d==="y",x=l.x+l.width/2-c.width/2,y=l.y+l.height/2-c.height/2,N=l[p]/2-c[p]/2;let C;switch(h){case"top":C={x,y:l.y-c.height};break;case"bottom":C={x,y:l.y+l.height};break;case"right":C={x:l.x+l.width,y};break;case"left":C={x:l.x-c.width,y};break;default:C={x:l.x,y:l.y}}switch(So(s)){case"start":C[f]-=N*(o&&g?-1:1);break;case"end":C[f]+=N*(o&&g?-1:1);break}return C}const b2=async(n,s,o)=>{const{placement:l="bottom",strategy:c="absolute",middleware:d=[],platform:f}=o,p=d.filter(Boolean),h=await(f.isRTL==null?void 0:f.isRTL(s));let g=await f.getElementRects({reference:n,floating:s,strategy:c}),{x,y}=Sp(g,l,h),N=l,C={},j=0;for(let b=0;b<p.length;b++){const{name:k,fn:T}=p[b],{x:S,y:D,data:L,reset:P}=await T({x,y,initialPlacement:l,placement:N,strategy:c,middlewareData:C,rects:g,platform:f,elements:{reference:n,floating:s}});x=S??x,y=D??y,C={...C,[k]:{...C[k],...L}},P&&j<=50&&(j++,typeof P=="object"&&(P.placement&&(N=P.placement),P.rects&&(g=P.rects===!0?await f.getElementRects({reference:n,floating:s,strategy:c}):P.rects),{x,y}=Sp(g,N,h)),b=-1)}return{x,y,placement:N,strategy:c,middlewareData:C}};async function ws(n,s){var o;s===void 0&&(s={});const{x:l,y:c,platform:d,rects:f,elements:p,strategy:h}=n,{boundary:g="clippingAncestors",rootBoundary:x="viewport",elementContext:y="floating",altBoundary:N=!1,padding:C=0}=In(s,n),j=kh(C),k=p[N?y==="floating"?"reference":"floating":y],T=sa(await d.getClippingRect({element:(o=await(d.isElement==null?void 0:d.isElement(k)))==null||o?k:k.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(p.floating)),boundary:g,rootBoundary:x,strategy:h})),S=y==="floating"?{x:l,y:c,width:f.floating.width,height:f.floating.height}:f.reference,D=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p.floating)),L=await(d.isElement==null?void 0:d.isElement(D))?await(d.getScale==null?void 0:d.getScale(D))||{x:1,y:1}:{x:1,y:1},P=sa(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:S,offsetParent:D,strategy:h}):S);return{top:(T.top-P.top+j.top)/L.y,bottom:(P.bottom-T.bottom+j.bottom)/L.y,left:(T.left-P.left+j.left)/L.x,right:(P.right-T.right+j.right)/L.x}}const k2=n=>({name:"arrow",options:n,async fn(s){const{x:o,y:l,placement:c,rects:d,platform:f,elements:p,middlewareData:h}=s,{element:g,padding:x=0}=In(n,s)||{};if(g==null)return{};const y=kh(x),N={x:o,y:l},C=Jc(c),j=Zc(C),b=await f.getDimensions(g),k=C==="y",T=k?"top":"left",S=k?"bottom":"right",D=k?"clientHeight":"clientWidth",L=d.reference[j]+d.reference[C]-N[C]-d.floating[j],P=N[C]-d.reference[C],$=await(f.getOffsetParent==null?void 0:f.getOffsetParent(g));let F=$?$[D]:0;(!F||!await(f.isElement==null?void 0:f.isElement($)))&&(F=p.floating[D]||d.floating[j]);const z=L/2-P/2,U=F/2-b[j]/2-1,Y=ir(y[T],U),ye=ir(y[S],U),ae=Y,oe=F-b[j]-ye,de=F/2-b[j]/2+z,se=Ec(ae,de,oe),Z=!h.arrow&&So(c)!=null&&de!==se&&d.reference[j]/2-(de<ae?Y:ye)-b[j]/2<0,ie=Z?de<ae?de-ae:de-oe:0;return{[C]:N[C]+ie,data:{[C]:se,centerOffset:de-se-ie,...Z&&{alignmentOffset:ie}},reset:Z}}}),N2=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(s){var o,l;const{placement:c,middlewareData:d,rects:f,initialPlacement:p,platform:h,elements:g}=s,{mainAxis:x=!0,crossAxis:y=!0,fallbackPlacements:N,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:j="none",flipAlignment:b=!0,...k}=In(n,s);if((o=d.arrow)!=null&&o.alignmentOffset)return{};const T=Pn(c),S=pn(p),D=Pn(p)===p,L=await(h.isRTL==null?void 0:h.isRTL(g.floating)),P=N||(D||!b?[oa(p)]:h2(p)),$=j!=="none";!N&&$&&P.push(...x2(p,b,j,L));const F=[p,...P],z=await ws(s,k),U=[];let Y=((l=d.flip)==null?void 0:l.overflows)||[];if(x&&U.push(z[T]),y){const de=m2(c,f,L);U.push(z[de[0]],z[de[1]])}if(Y=[...Y,{placement:c,overflows:U}],!U.every(de=>de<=0)){var ye,ae;const de=(((ye=d.flip)==null?void 0:ye.index)||0)+1,se=F[de];if(se&&(!(y==="alignment"?S!==pn(se):!1)||Y.every(A=>pn(A.placement)===S?A.overflows[0]>0:!0)))return{data:{index:de,overflows:Y},reset:{placement:se}};let Z=(ae=Y.filter(ie=>ie.overflows[0]<=0).sort((ie,A)=>ie.overflows[1]-A.overflows[1])[0])==null?void 0:ae.placement;if(!Z)switch(C){case"bestFit":{var oe;const ie=(oe=Y.filter(A=>{if($){const ee=pn(A.placement);return ee===S||ee==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(ee=>ee>0).reduce((ee,K)=>ee+K,0)]).sort((A,ee)=>A[1]-ee[1])[0])==null?void 0:oe[0];ie&&(Z=ie);break}case"initialPlacement":Z=p;break}if(c!==Z)return{reset:{placement:Z}}}return{}}}};function Ep(n,s){return{top:n.top-s.height,right:n.right-s.width,bottom:n.bottom-s.height,left:n.left-s.width}}function jp(n){return u2.some(s=>n[s]>=0)}const C2=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(s){const{rects:o}=s,{strategy:l="referenceHidden",...c}=In(n,s);switch(l){case"referenceHidden":{const d=await ws(s,{...c,elementContext:"reference"}),f=Ep(d,o.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:jp(f)}}}case"escaped":{const d=await ws(s,{...c,altBoundary:!0}),f=Ep(d,o.floating);return{data:{escapedOffsets:f,escaped:jp(f)}}}default:return{}}}}},Nh=new Set(["left","top"]);async function S2(n,s){const{placement:o,platform:l,elements:c}=n,d=await(l.isRTL==null?void 0:l.isRTL(c.floating)),f=Pn(o),p=So(o),h=pn(o)==="y",g=Nh.has(f)?-1:1,x=d&&h?-1:1,y=In(s,n);let{mainAxis:N,crossAxis:C,alignmentAxis:j}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return p&&typeof j=="number"&&(C=p==="end"?j*-1:j),h?{x:C*x,y:N*g}:{x:N*g,y:C*x}}const E2=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(s){var o,l;const{x:c,y:d,placement:f,middlewareData:p}=s,h=await S2(s,n);return f===((o=p.offset)==null?void 0:o.placement)&&(l=p.arrow)!=null&&l.alignmentOffset?{}:{x:c+h.x,y:d+h.y,data:{...h,placement:f}}}}},j2=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(s){const{x:o,y:l,placement:c}=s,{mainAxis:d=!0,crossAxis:f=!1,limiter:p={fn:k=>{let{x:T,y:S}=k;return{x:T,y:S}}},...h}=In(n,s),g={x:o,y:l},x=await ws(s,h),y=pn(Pn(c)),N=Xc(y);let C=g[N],j=g[y];if(d){const k=N==="y"?"top":"left",T=N==="y"?"bottom":"right",S=C+x[k],D=C-x[T];C=Ec(S,C,D)}if(f){const k=y==="y"?"top":"left",T=y==="y"?"bottom":"right",S=j+x[k],D=j-x[T];j=Ec(S,j,D)}const b=p.fn({...s,[N]:C,[y]:j});return{...b,data:{x:b.x-o,y:b.y-l,enabled:{[N]:d,[y]:f}}}}}},T2=function(n){return n===void 0&&(n={}),{options:n,fn(s){const{x:o,y:l,placement:c,rects:d,middlewareData:f}=s,{offset:p=0,mainAxis:h=!0,crossAxis:g=!0}=In(n,s),x={x:o,y:l},y=pn(c),N=Xc(y);let C=x[N],j=x[y];const b=In(p,s),k=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(h){const D=N==="y"?"height":"width",L=d.reference[N]-d.floating[D]+k.mainAxis,P=d.reference[N]+d.reference[D]-k.mainAxis;C<L?C=L:C>P&&(C=P)}if(g){var T,S;const D=N==="y"?"width":"height",L=Nh.has(Pn(c)),P=d.reference[y]-d.floating[D]+(L&&((T=f.offset)==null?void 0:T[y])||0)+(L?0:k.crossAxis),$=d.reference[y]+d.reference[D]+(L?0:((S=f.offset)==null?void 0:S[y])||0)-(L?k.crossAxis:0);j<P?j=P:j>$&&(j=$)}return{[N]:C,[y]:j}}}},I2=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(s){var o,l;const{placement:c,rects:d,platform:f,elements:p}=s,{apply:h=()=>{},...g}=In(n,s),x=await ws(s,g),y=Pn(c),N=So(c),C=pn(c)==="y",{width:j,height:b}=d.floating;let k,T;y==="top"||y==="bottom"?(k=y,T=N===(await(f.isRTL==null?void 0:f.isRTL(p.floating))?"start":"end")?"left":"right"):(T=y,k=N==="end"?"top":"bottom");const S=b-x.top-x.bottom,D=j-x.left-x.right,L=ir(b-x[k],S),P=ir(j-x[T],D),$=!s.middlewareData.shift;let F=L,z=P;if((o=s.middlewareData.shift)!=null&&o.enabled.x&&(z=D),(l=s.middlewareData.shift)!=null&&l.enabled.y&&(F=S),$&&!N){const Y=Rt(x.left,0),ye=Rt(x.right,0),ae=Rt(x.top,0),oe=Rt(x.bottom,0);C?z=j-2*(Y!==0||ye!==0?Y+ye:Rt(x.left,x.right)):F=b-2*(ae!==0||oe!==0?ae+oe:Rt(x.top,x.bottom))}await h({...s,availableWidth:z,availableHeight:F});const U=await f.getDimensions(p.floating);return j!==U.width||b!==U.height?{reset:{rects:!0}}:{}}}};function ma(){return typeof window<"u"}function Eo(n){return Ch(n)?(n.nodeName||"").toLowerCase():"#document"}function At(n){var s;return(n==null||(s=n.ownerDocument)==null?void 0:s.defaultView)||window}function gn(n){var s;return(s=(Ch(n)?n.ownerDocument:n.document)||window.document)==null?void 0:s.documentElement}function Ch(n){return ma()?n instanceof Node||n instanceof At(n).Node:!1}function en(n){return ma()?n instanceof Element||n instanceof At(n).Element:!1}function hn(n){return ma()?n instanceof HTMLElement||n instanceof At(n).HTMLElement:!1}function Tp(n){return!ma()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof At(n).ShadowRoot}const P2=new Set(["inline","contents"]);function Ns(n){const{overflow:s,overflowX:o,overflowY:l,display:c}=tn(n);return/auto|scroll|overlay|hidden|clip/.test(s+l+o)&&!P2.has(c)}const _2=new Set(["table","td","th"]);function D2(n){return _2.has(Eo(n))}const R2=[":popover-open",":modal"];function ha(n){return R2.some(s=>{try{return n.matches(s)}catch{return!1}})}const A2=["transform","translate","scale","rotate","perspective"],M2=["transform","translate","scale","rotate","perspective","filter"],O2=["paint","layout","strict","content"];function eu(n){const s=tu(),o=en(n)?tn(n):n;return A2.some(l=>o[l]?o[l]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!s&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!s&&(o.filter?o.filter!=="none":!1)||M2.some(l=>(o.willChange||"").includes(l))||O2.some(l=>(o.contain||"").includes(l))}function L2(n){let s=ar(n);for(;hn(s)&&!yo(s);){if(eu(s))return s;if(ha(s))return null;s=ar(s)}return null}function tu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const B2=new Set(["html","body","#document"]);function yo(n){return B2.has(Eo(n))}function tn(n){return At(n).getComputedStyle(n)}function ga(n){return en(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function ar(n){if(Eo(n)==="html")return n;const s=n.assignedSlot||n.parentNode||Tp(n)&&n.host||gn(n);return Tp(s)?s.host:s}function Sh(n){const s=ar(n);return yo(s)?n.ownerDocument?n.ownerDocument.body:n.body:hn(s)&&Ns(s)?s:Sh(s)}function bs(n,s,o){var l;s===void 0&&(s=[]),o===void 0&&(o=!0);const c=Sh(n),d=c===((l=n.ownerDocument)==null?void 0:l.body),f=At(c);if(d){const p=Tc(f);return s.concat(f,f.visualViewport||[],Ns(c)?c:[],p&&o?bs(p):[])}return s.concat(c,bs(c,[],o))}function Tc(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Eh(n){const s=tn(n);let o=parseFloat(s.width)||0,l=parseFloat(s.height)||0;const c=hn(n),d=c?n.offsetWidth:o,f=c?n.offsetHeight:l,p=ra(o)!==d||ra(l)!==f;return p&&(o=d,l=f),{width:o,height:l,$:p}}function nu(n){return en(n)?n:n.contextElement}function ho(n){const s=nu(n);if(!hn(s))return mn(1);const o=s.getBoundingClientRect(),{width:l,height:c,$:d}=Eh(s);let f=(d?ra(o.width):o.width)/l,p=(d?ra(o.height):o.height)/c;return(!f||!Number.isFinite(f))&&(f=1),(!p||!Number.isFinite(p))&&(p=1),{x:f,y:p}}const F2=mn(0);function jh(n){const s=At(n);return!tu()||!s.visualViewport?F2:{x:s.visualViewport.offsetLeft,y:s.visualViewport.offsetTop}}function z2(n,s,o){return s===void 0&&(s=!1),!o||s&&o!==At(n)?!1:s}function Rr(n,s,o,l){s===void 0&&(s=!1),o===void 0&&(o=!1);const c=n.getBoundingClientRect(),d=nu(n);let f=mn(1);s&&(l?en(l)&&(f=ho(l)):f=ho(n));const p=z2(d,o,l)?jh(d):mn(0);let h=(c.left+p.x)/f.x,g=(c.top+p.y)/f.y,x=c.width/f.x,y=c.height/f.y;if(d){const N=At(d),C=l&&en(l)?At(l):l;let j=N,b=Tc(j);for(;b&&l&&C!==j;){const k=ho(b),T=b.getBoundingClientRect(),S=tn(b),D=T.left+(b.clientLeft+parseFloat(S.paddingLeft))*k.x,L=T.top+(b.clientTop+parseFloat(S.paddingTop))*k.y;h*=k.x,g*=k.y,x*=k.x,y*=k.y,h+=D,g+=L,j=At(b),b=Tc(j)}}return sa({width:x,height:y,x:h,y:g})}function ya(n,s){const o=ga(n).scrollLeft;return s?s.left+o:Rr(gn(n)).left+o}function Th(n,s){const o=n.getBoundingClientRect(),l=o.left+s.scrollLeft-ya(n,o),c=o.top+s.scrollTop;return{x:l,y:c}}function $2(n){let{elements:s,rect:o,offsetParent:l,strategy:c}=n;const d=c==="fixed",f=gn(l),p=s?ha(s.floating):!1;if(l===f||p&&d)return o;let h={scrollLeft:0,scrollTop:0},g=mn(1);const x=mn(0),y=hn(l);if((y||!y&&!d)&&((Eo(l)!=="body"||Ns(f))&&(h=ga(l)),hn(l))){const C=Rr(l);g=ho(l),x.x=C.x+l.clientLeft,x.y=C.y+l.clientTop}const N=f&&!y&&!d?Th(f,h):mn(0);return{width:o.width*g.x,height:o.height*g.y,x:o.x*g.x-h.scrollLeft*g.x+x.x+N.x,y:o.y*g.y-h.scrollTop*g.y+x.y+N.y}}function V2(n){return Array.from(n.getClientRects())}function H2(n){const s=gn(n),o=ga(n),l=n.ownerDocument.body,c=Rt(s.scrollWidth,s.clientWidth,l.scrollWidth,l.clientWidth),d=Rt(s.scrollHeight,s.clientHeight,l.scrollHeight,l.clientHeight);let f=-o.scrollLeft+ya(n);const p=-o.scrollTop;return tn(l).direction==="rtl"&&(f+=Rt(s.clientWidth,l.clientWidth)-c),{width:c,height:d,x:f,y:p}}const Ip=25;function W2(n,s){const o=At(n),l=gn(n),c=o.visualViewport;let d=l.clientWidth,f=l.clientHeight,p=0,h=0;if(c){d=c.width,f=c.height;const x=tu();(!x||x&&s==="fixed")&&(p=c.offsetLeft,h=c.offsetTop)}const g=ya(l);if(g<=0){const x=l.ownerDocument,y=x.body,N=getComputedStyle(y),C=x.compatMode==="CSS1Compat"&&parseFloat(N.marginLeft)+parseFloat(N.marginRight)||0,j=Math.abs(l.clientWidth-y.clientWidth-C);j<=Ip&&(d-=j)}else g<=Ip&&(d+=g);return{width:d,height:f,x:p,y:h}}const U2=new Set(["absolute","fixed"]);function G2(n,s){const o=Rr(n,!0,s==="fixed"),l=o.top+n.clientTop,c=o.left+n.clientLeft,d=hn(n)?ho(n):mn(1),f=n.clientWidth*d.x,p=n.clientHeight*d.y,h=c*d.x,g=l*d.y;return{width:f,height:p,x:h,y:g}}function Pp(n,s,o){let l;if(s==="viewport")l=W2(n,o);else if(s==="document")l=H2(gn(n));else if(en(s))l=G2(s,o);else{const c=jh(n);l={x:s.x-c.x,y:s.y-c.y,width:s.width,height:s.height}}return sa(l)}function Ih(n,s){const o=ar(n);return o===s||!en(o)||yo(o)?!1:tn(o).position==="fixed"||Ih(o,s)}function Y2(n,s){const o=s.get(n);if(o)return o;let l=bs(n,[],!1).filter(p=>en(p)&&Eo(p)!=="body"),c=null;const d=tn(n).position==="fixed";let f=d?ar(n):n;for(;en(f)&&!yo(f);){const p=tn(f),h=eu(f);!h&&p.position==="fixed"&&(c=null),(d?!h&&!c:!h&&p.position==="static"&&!!c&&U2.has(c.position)||Ns(f)&&!h&&Ih(n,f))?l=l.filter(x=>x!==f):c=p,f=ar(f)}return s.set(n,l),l}function q2(n){let{element:s,boundary:o,rootBoundary:l,strategy:c}=n;const f=[...o==="clippingAncestors"?ha(s)?[]:Y2(s,this._c):[].concat(o),l],p=f[0],h=f.reduce((g,x)=>{const y=Pp(s,x,c);return g.top=Rt(y.top,g.top),g.right=ir(y.right,g.right),g.bottom=ir(y.bottom,g.bottom),g.left=Rt(y.left,g.left),g},Pp(s,p,c));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function K2(n){const{width:s,height:o}=Eh(n);return{width:s,height:o}}function Q2(n,s,o){const l=hn(s),c=gn(s),d=o==="fixed",f=Rr(n,!0,d,s);let p={scrollLeft:0,scrollTop:0};const h=mn(0);function g(){h.x=ya(c)}if(l||!l&&!d)if((Eo(s)!=="body"||Ns(c))&&(p=ga(s)),l){const C=Rr(s,!0,d,s);h.x=C.x+s.clientLeft,h.y=C.y+s.clientTop}else c&&g();d&&!l&&c&&g();const x=c&&!l&&!d?Th(c,p):mn(0),y=f.left+p.scrollLeft-h.x-x.x,N=f.top+p.scrollTop-h.y-x.y;return{x:y,y:N,width:f.width,height:f.height}}function yc(n){return tn(n).position==="static"}function _p(n,s){if(!hn(n)||tn(n).position==="fixed")return null;if(s)return s(n);let o=n.offsetParent;return gn(n)===o&&(o=o.ownerDocument.body),o}function Ph(n,s){const o=At(n);if(ha(n))return o;if(!hn(n)){let c=ar(n);for(;c&&!yo(c);){if(en(c)&&!yc(c))return c;c=ar(c)}return o}let l=_p(n,s);for(;l&&D2(l)&&yc(l);)l=_p(l,s);return l&&yo(l)&&yc(l)&&!eu(l)?o:l||L2(n)||o}const X2=async function(n){const s=this.getOffsetParent||Ph,o=this.getDimensions,l=await o(n.floating);return{reference:Q2(n.reference,await s(n.floating),n.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function Z2(n){return tn(n).direction==="rtl"}const J2={convertOffsetParentRelativeRectToViewportRelativeRect:$2,getDocumentElement:gn,getClippingRect:q2,getOffsetParent:Ph,getElementRects:X2,getClientRects:V2,getDimensions:K2,getScale:ho,isElement:en,isRTL:Z2};function _h(n,s){return n.x===s.x&&n.y===s.y&&n.width===s.width&&n.height===s.height}function ek(n,s){let o=null,l;const c=gn(n);function d(){var p;clearTimeout(l),(p=o)==null||p.disconnect(),o=null}function f(p,h){p===void 0&&(p=!1),h===void 0&&(h=1),d();const g=n.getBoundingClientRect(),{left:x,top:y,width:N,height:C}=g;if(p||s(),!N||!C)return;const j=Ui(y),b=Ui(c.clientWidth-(x+N)),k=Ui(c.clientHeight-(y+C)),T=Ui(x),D={rootMargin:-j+"px "+-b+"px "+-k+"px "+-T+"px",threshold:Rt(0,ir(1,h))||1};let L=!0;function P($){const F=$[0].intersectionRatio;if(F!==h){if(!L)return f();F?f(!1,F):l=setTimeout(()=>{f(!1,1e-7)},1e3)}F===1&&!_h(g,n.getBoundingClientRect())&&f(),L=!1}try{o=new IntersectionObserver(P,{...D,root:c.ownerDocument})}catch{o=new IntersectionObserver(P,D)}o.observe(n)}return f(!0),d}function tk(n,s,o,l){l===void 0&&(l={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:h=!1}=l,g=nu(n),x=c||d?[...g?bs(g):[],...bs(s)]:[];x.forEach(T=>{c&&T.addEventListener("scroll",o,{passive:!0}),d&&T.addEventListener("resize",o)});const y=g&&p?ek(g,o):null;let N=-1,C=null;f&&(C=new ResizeObserver(T=>{let[S]=T;S&&S.target===g&&C&&(C.unobserve(s),cancelAnimationFrame(N),N=requestAnimationFrame(()=>{var D;(D=C)==null||D.observe(s)})),o()}),g&&!h&&C.observe(g),C.observe(s));let j,b=h?Rr(n):null;h&&k();function k(){const T=Rr(n);b&&!_h(b,T)&&o(),b=T,j=requestAnimationFrame(k)}return o(),()=>{var T;x.forEach(S=>{c&&S.removeEventListener("scroll",o),d&&S.removeEventListener("resize",o)}),y?.(),(T=C)==null||T.disconnect(),C=null,h&&cancelAnimationFrame(j)}}const nk=E2,rk=j2,ok=N2,sk=I2,ik=C2,Dp=k2,ak=T2,lk=(n,s,o)=>{const l=new Map,c={platform:J2,...o},d={...c.platform,_c:l};return b2(n,s,{...c,platform:d})};var ck=typeof document<"u",uk=function(){},Qi=ck?v.useLayoutEffect:uk;function ia(n,s){if(n===s)return!0;if(typeof n!=typeof s)return!1;if(typeof n=="function"&&n.toString()===s.toString())return!0;let o,l,c;if(n&&s&&typeof n=="object"){if(Array.isArray(n)){if(o=n.length,o!==s.length)return!1;for(l=o;l--!==0;)if(!ia(n[l],s[l]))return!1;return!0}if(c=Object.keys(n),o=c.length,o!==Object.keys(s).length)return!1;for(l=o;l--!==0;)if(!{}.hasOwnProperty.call(s,c[l]))return!1;for(l=o;l--!==0;){const d=c[l];if(!(d==="_owner"&&n.$$typeof)&&!ia(n[d],s[d]))return!1}return!0}return n!==n&&s!==s}function Dh(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function Rp(n,s){const o=Dh(n);return Math.round(s*o)/o}function vc(n){const s=v.useRef(n);return Qi(()=>{s.current=n}),s}function dk(n){n===void 0&&(n={});const{placement:s="bottom",strategy:o="absolute",middleware:l=[],platform:c,elements:{reference:d,floating:f}={},transform:p=!0,whileElementsMounted:h,open:g}=n,[x,y]=v.useState({x:0,y:0,strategy:o,placement:s,middlewareData:{},isPositioned:!1}),[N,C]=v.useState(l);ia(N,l)||C(l);const[j,b]=v.useState(null),[k,T]=v.useState(null),S=v.useCallback(A=>{A!==$.current&&($.current=A,b(A))},[]),D=v.useCallback(A=>{A!==F.current&&(F.current=A,T(A))},[]),L=d||j,P=f||k,$=v.useRef(null),F=v.useRef(null),z=v.useRef(x),U=h!=null,Y=vc(h),ye=vc(c),ae=vc(g),oe=v.useCallback(()=>{if(!$.current||!F.current)return;const A={placement:s,strategy:o,middleware:N};ye.current&&(A.platform=ye.current),lk($.current,F.current,A).then(ee=>{const K={...ee,isPositioned:ae.current!==!1};de.current&&!ia(z.current,K)&&(z.current=K,ks.flushSync(()=>{y(K)}))})},[N,s,o,ye,ae]);Qi(()=>{g===!1&&z.current.isPositioned&&(z.current.isPositioned=!1,y(A=>({...A,isPositioned:!1})))},[g]);const de=v.useRef(!1);Qi(()=>(de.current=!0,()=>{de.current=!1}),[]),Qi(()=>{if(L&&($.current=L),P&&(F.current=P),L&&P){if(Y.current)return Y.current(L,P,oe);oe()}},[L,P,oe,Y,U]);const se=v.useMemo(()=>({reference:$,floating:F,setReference:S,setFloating:D}),[S,D]),Z=v.useMemo(()=>({reference:L,floating:P}),[L,P]),ie=v.useMemo(()=>{const A={position:o,left:0,top:0};if(!Z.floating)return A;const ee=Rp(Z.floating,x.x),K=Rp(Z.floating,x.y);return p?{...A,transform:"translate("+ee+"px, "+K+"px)",...Dh(Z.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:ee,top:K}},[o,p,Z.floating,x.x,x.y]);return v.useMemo(()=>({...x,update:oe,refs:se,elements:Z,floatingStyles:ie}),[x,oe,se,Z,ie])}const fk=n=>{function s(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:n,fn(o){const{element:l,padding:c}=typeof n=="function"?n(o):n;return l&&s(l)?l.current!=null?Dp({element:l.current,padding:c}).fn(o):{}:l?Dp({element:l,padding:c}).fn(o):{}}}},pk=(n,s)=>({...nk(n),options:[n,s]}),mk=(n,s)=>({...rk(n),options:[n,s]}),hk=(n,s)=>({...ak(n),options:[n,s]}),gk=(n,s)=>({...ok(n),options:[n,s]}),yk=(n,s)=>({...sk(n),options:[n,s]}),vk=(n,s)=>({...ik(n),options:[n,s]}),xk=(n,s)=>({...fk(n),options:[n,s]});var wk="Arrow",Rh=v.forwardRef((n,s)=>{const{children:o,width:l=10,height:c=5,...d}=n;return a.jsx(Pe.svg,{...d,ref:s,width:l,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?o:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});Rh.displayName=wk;var bk=Rh,ru="Popper",[Ah,Mh]=ko(ru),[kk,Oh]=Ah(ru),Lh=n=>{const{__scopePopper:s,children:o}=n,[l,c]=v.useState(null);return a.jsx(kk,{scope:s,anchor:l,onAnchorChange:c,children:o})};Lh.displayName=ru;var Bh="PopperAnchor",Fh=v.forwardRef((n,s)=>{const{__scopePopper:o,virtualRef:l,...c}=n,d=Oh(Bh,o),f=v.useRef(null),p=Be(s,f),h=v.useRef(null);return v.useEffect(()=>{const g=h.current;h.current=l?.current||f.current,g!==h.current&&d.onAnchorChange(h.current)}),l?null:a.jsx(Pe.div,{...c,ref:p})});Fh.displayName=Bh;var ou="PopperContent",[Nk,Ck]=Ah(ou),zh=v.forwardRef((n,s)=>{const{__scopePopper:o,side:l="bottom",sideOffset:c=0,align:d="center",alignOffset:f=0,arrowPadding:p=0,avoidCollisions:h=!0,collisionBoundary:g=[],collisionPadding:x=0,sticky:y="partial",hideWhenDetached:N=!1,updatePositionStrategy:C="optimized",onPlaced:j,...b}=n,k=Oh(ou,o),[T,S]=v.useState(null),D=Be(s,W=>S(W)),[L,P]=v.useState(null),$=ph(L),F=$?.width??0,z=$?.height??0,U=l+(d!=="center"?"-"+d:""),Y=typeof x=="number"?x:{top:0,right:0,bottom:0,left:0,...x},ye=Array.isArray(g)?g:[g],ae=ye.length>0,oe={padding:Y,boundary:ye.filter(Ek),altBoundary:ae},{refs:de,floatingStyles:se,placement:Z,isPositioned:ie,middlewareData:A}=dk({strategy:"fixed",placement:U,whileElementsMounted:(...W)=>tk(...W,{animationFrame:C==="always"}),elements:{reference:k.anchor},middleware:[pk({mainAxis:c+z,alignmentAxis:f}),h&&mk({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?hk():void 0,...oe}),h&&gk({...oe}),yk({...oe,apply:({elements:W,rects:H,availableWidth:te,availableHeight:ce})=>{const{width:we,height:Ce}=H.reference,$e=W.floating.style;$e.setProperty("--radix-popper-available-width",`${te}px`),$e.setProperty("--radix-popper-available-height",`${ce}px`),$e.setProperty("--radix-popper-anchor-width",`${we}px`),$e.setProperty("--radix-popper-anchor-height",`${Ce}px`)}}),L&&xk({element:L,padding:p}),jk({arrowWidth:F,arrowHeight:z}),N&&vk({strategy:"referenceHidden",...oe})]}),[ee,K]=Hh(Z),R=_r(j);dt(()=>{ie&&R?.()},[ie,R]);const V=A.arrow?.x,Q=A.arrow?.y,J=A.arrow?.centerOffset!==0,[le,fe]=v.useState();return dt(()=>{T&&fe(window.getComputedStyle(T).zIndex)},[T]),a.jsx("div",{ref:de.setFloating,"data-radix-popper-content-wrapper":"",style:{...se,transform:ie?se.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:le,"--radix-popper-transform-origin":[A.transformOrigin?.x,A.transformOrigin?.y].join(" "),...A.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:a.jsx(Nk,{scope:o,placedSide:ee,onArrowChange:P,arrowX:V,arrowY:Q,shouldHideArrow:J,children:a.jsx(Pe.div,{"data-side":ee,"data-align":K,...b,ref:D,style:{...b.style,animation:ie?void 0:"none"}})})})});zh.displayName=ou;var $h="PopperArrow",Sk={top:"bottom",right:"left",bottom:"top",left:"right"},Vh=v.forwardRef(function(s,o){const{__scopePopper:l,...c}=s,d=Ck($h,l),f=Sk[d.placedSide];return a.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:a.jsx(bk,{...c,ref:o,style:{...c.style,display:"block"}})})});Vh.displayName=$h;function Ek(n){return n!==null}var jk=n=>({name:"transformOrigin",options:n,fn(s){const{placement:o,rects:l,middlewareData:c}=s,f=c.arrow?.centerOffset!==0,p=f?0:n.arrowWidth,h=f?0:n.arrowHeight,[g,x]=Hh(o),y={start:"0%",center:"50%",end:"100%"}[x],N=(c.arrow?.x??0)+p/2,C=(c.arrow?.y??0)+h/2;let j="",b="";return g==="bottom"?(j=f?y:`${N}px`,b=`${-h}px`):g==="top"?(j=f?y:`${N}px`,b=`${l.floating.height+h}px`):g==="right"?(j=`${-h}px`,b=f?y:`${C}px`):g==="left"&&(j=`${l.floating.width+h}px`,b=f?y:`${C}px`),{data:{x:j,y:b}}}});function Hh(n){const[s,o="center"]=n.split("-");return[s,o]}var Tk=Lh,Ik=Fh,Pk=zh,_k=Vh;function Dk(n){const s=Rk(n),o=v.forwardRef((l,c)=>{const{children:d,...f}=l,p=v.Children.toArray(d),h=p.find(Mk);if(h){const g=h.props.children,x=p.map(y=>y===h?v.Children.count(g)>1?v.Children.only(null):v.isValidElement(g)?g.props.children:null:y);return a.jsx(s,{...f,ref:c,children:v.isValidElement(g)?v.cloneElement(g,void 0,x):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function Rk(n){const s=v.forwardRef((o,l)=>{const{children:c,...d}=o;if(v.isValidElement(c)){const f=Lk(c),p=Ok(d,c.props);return c.type!==v.Fragment&&(p.ref=l?No(l,f):f),v.cloneElement(c,p)}return v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var Ak=Symbol("radix.slottable");function Mk(n){return v.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Ak}function Ok(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function Lk(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var Wh=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Bk="VisuallyHidden",Fk=v.forwardRef((n,s)=>a.jsx(Pe.span,{...n,ref:s,style:{...Wh,...n.style}}));Fk.displayName=Bk;var zk=[" ","Enter","ArrowUp","ArrowDown"],$k=[" ","Enter"],Ar="Select",[va,xa,Vk]=a2(Ar),[jo]=ko(Ar,[Vk,Mh]),wa=Mh(),[Hk,lr]=jo(Ar),[Wk,Uk]=jo(Ar),Uh=n=>{const{__scopeSelect:s,children:o,open:l,defaultOpen:c,onOpenChange:d,value:f,defaultValue:p,onValueChange:h,dir:g,name:x,autoComplete:y,disabled:N,required:C,form:j}=n,b=wa(s),[k,T]=v.useState(null),[S,D]=v.useState(null),[L,P]=v.useState(!1),$=c2(g),[F,z]=xs({prop:l,defaultProp:c??!1,onChange:d,caller:Ar}),[U,Y]=xs({prop:f,defaultProp:p,onChange:h,caller:Ar}),ye=v.useRef(null),ae=k?j||!!k.closest("form"):!0,[oe,de]=v.useState(new Set),se=Array.from(oe).map(Z=>Z.props.value).join(";");return a.jsx(Tk,{...b,children:a.jsxs(Hk,{required:C,scope:s,trigger:k,onTriggerChange:T,valueNode:S,onValueNodeChange:D,valueNodeHasChildren:L,onValueNodeHasChildrenChange:P,contentId:Tr(),value:U,onValueChange:Y,open:F,onOpenChange:z,dir:$,triggerPointerDownPosRef:ye,disabled:N,children:[a.jsx(va.Provider,{scope:s,children:a.jsx(Wk,{scope:n.__scopeSelect,onNativeOptionAdd:v.useCallback(Z=>{de(ie=>new Set(ie).add(Z))},[]),onNativeOptionRemove:v.useCallback(Z=>{de(ie=>{const A=new Set(ie);return A.delete(Z),A})},[]),children:o})}),ae?a.jsxs(pg,{"aria-hidden":!0,required:C,tabIndex:-1,name:x,autoComplete:y,value:U,onChange:Z=>Y(Z.target.value),disabled:N,form:j,children:[U===void 0?a.jsx("option",{value:""}):null,Array.from(oe)]},se):null]})})};Uh.displayName=Ar;var Gh="SelectTrigger",Yh=v.forwardRef((n,s)=>{const{__scopeSelect:o,disabled:l=!1,...c}=n,d=wa(o),f=lr(Gh,o),p=f.disabled||l,h=Be(s,f.onTriggerChange),g=xa(o),x=v.useRef("touch"),[y,N,C]=hg(b=>{const k=g().filter(D=>!D.disabled),T=k.find(D=>D.value===f.value),S=gg(k,b,T);S!==void 0&&f.onValueChange(S.value)}),j=b=>{p||(f.onOpenChange(!0),C()),b&&(f.triggerPointerDownPosRef.current={x:Math.round(b.pageX),y:Math.round(b.pageY)})};return a.jsx(Ik,{asChild:!0,...d,children:a.jsx(Pe.button,{type:"button",role:"combobox","aria-controls":f.contentId,"aria-expanded":f.open,"aria-required":f.required,"aria-autocomplete":"none",dir:f.dir,"data-state":f.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":mg(f.value)?"":void 0,...c,ref:h,onClick:De(c.onClick,b=>{b.currentTarget.focus(),x.current!=="mouse"&&j(b)}),onPointerDown:De(c.onPointerDown,b=>{x.current=b.pointerType;const k=b.target;k.hasPointerCapture(b.pointerId)&&k.releasePointerCapture(b.pointerId),b.button===0&&b.ctrlKey===!1&&b.pointerType==="mouse"&&(j(b),b.preventDefault())}),onKeyDown:De(c.onKeyDown,b=>{const k=y.current!=="";!(b.ctrlKey||b.altKey||b.metaKey)&&b.key.length===1&&N(b.key),!(k&&b.key===" ")&&zk.includes(b.key)&&(j(),b.preventDefault())})})})});Yh.displayName=Gh;var qh="SelectValue",Kh=v.forwardRef((n,s)=>{const{__scopeSelect:o,className:l,style:c,children:d,placeholder:f="",...p}=n,h=lr(qh,o),{onValueNodeHasChildrenChange:g}=h,x=d!==void 0,y=Be(s,h.onValueNodeChange);return dt(()=>{g(x)},[g,x]),a.jsx(Pe.span,{...p,ref:y,style:{pointerEvents:"none"},children:mg(h.value)?a.jsx(a.Fragment,{children:f}):d})});Kh.displayName=qh;var Gk="SelectIcon",Qh=v.forwardRef((n,s)=>{const{__scopeSelect:o,children:l,...c}=n;return a.jsx(Pe.span,{"aria-hidden":!0,...c,ref:s,children:l||"▼"})});Qh.displayName=Gk;var Yk="SelectPortal",Xh=n=>a.jsx(Uc,{asChild:!0,...n});Xh.displayName=Yk;var Mr="SelectContent",Zh=v.forwardRef((n,s)=>{const o=lr(Mr,n.__scopeSelect),[l,c]=v.useState();if(dt(()=>{c(new DocumentFragment)},[]),!o.open){const d=l;return d?ks.createPortal(a.jsx(Jh,{scope:n.__scopeSelect,children:a.jsx(va.Slot,{scope:n.__scopeSelect,children:a.jsx("div",{children:n.children})})}),d):null}return a.jsx(eg,{...n,ref:s})});Zh.displayName=Mr;var Jt=10,[Jh,cr]=jo(Mr),qk="SelectContentImpl",Kk=Dk("SelectContent.RemoveScroll"),eg=v.forwardRef((n,s)=>{const{__scopeSelect:o,position:l="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:f,side:p,sideOffset:h,align:g,alignOffset:x,arrowPadding:y,collisionBoundary:N,collisionPadding:C,sticky:j,hideWhenDetached:b,avoidCollisions:k,...T}=n,S=lr(Mr,o),[D,L]=v.useState(null),[P,$]=v.useState(null),F=Be(s,W=>L(W)),[z,U]=v.useState(null),[Y,ye]=v.useState(null),ae=xa(o),[oe,de]=v.useState(!1),se=v.useRef(!1);v.useEffect(()=>{if(D)return Pm(D)},[D]),bm();const Z=v.useCallback(W=>{const[H,...te]=ae().map(Ce=>Ce.ref.current),[ce]=te.slice(-1),we=document.activeElement;for(const Ce of W)if(Ce===we||(Ce?.scrollIntoView({block:"nearest"}),Ce===H&&P&&(P.scrollTop=0),Ce===ce&&P&&(P.scrollTop=P.scrollHeight),Ce?.focus(),document.activeElement!==we))return},[ae,P]),ie=v.useCallback(()=>Z([z,D]),[Z,z,D]);v.useEffect(()=>{oe&&ie()},[oe,ie]);const{onOpenChange:A,triggerPointerDownPosRef:ee}=S;v.useEffect(()=>{if(D){let W={x:0,y:0};const H=ce=>{W={x:Math.abs(Math.round(ce.pageX)-(ee.current?.x??0)),y:Math.abs(Math.round(ce.pageY)-(ee.current?.y??0))}},te=ce=>{W.x<=10&&W.y<=10?ce.preventDefault():D.contains(ce.target)||A(!1),document.removeEventListener("pointermove",H),ee.current=null};return ee.current!==null&&(document.addEventListener("pointermove",H),document.addEventListener("pointerup",te,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",H),document.removeEventListener("pointerup",te,{capture:!0})}}},[D,A,ee]),v.useEffect(()=>{const W=()=>A(!1);return window.addEventListener("blur",W),window.addEventListener("resize",W),()=>{window.removeEventListener("blur",W),window.removeEventListener("resize",W)}},[A]);const[K,R]=hg(W=>{const H=ae().filter(we=>!we.disabled),te=H.find(we=>we.ref.current===document.activeElement),ce=gg(H,W,te);ce&&setTimeout(()=>ce.ref.current.focus())}),V=v.useCallback((W,H,te)=>{const ce=!se.current&&!te;(S.value!==void 0&&S.value===H||ce)&&(U(W),ce&&(se.current=!0))},[S.value]),Q=v.useCallback(()=>D?.focus(),[D]),J=v.useCallback((W,H,te)=>{const ce=!se.current&&!te;(S.value!==void 0&&S.value===H||ce)&&ye(W)},[S.value]),le=l==="popper"?Ic:tg,fe=le===Ic?{side:p,sideOffset:h,align:g,alignOffset:x,arrowPadding:y,collisionBoundary:N,collisionPadding:C,sticky:j,hideWhenDetached:b,avoidCollisions:k}:{};return a.jsx(Jh,{scope:o,content:D,viewport:P,onViewportChange:$,itemRefCallback:V,selectedItem:z,onItemLeave:Q,itemTextRefCallback:J,focusSelectedItem:ie,selectedItemText:Y,position:l,isPositioned:oe,searchRef:K,children:a.jsx(Gc,{as:Kk,allowPinchZoom:!0,children:a.jsx(Wc,{asChild:!0,trapped:S.open,onMountAutoFocus:W=>{W.preventDefault()},onUnmountAutoFocus:De(c,W=>{S.trigger?.focus({preventScroll:!0}),W.preventDefault()}),children:a.jsx(Hc,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:W=>W.preventDefault(),onDismiss:()=>S.onOpenChange(!1),children:a.jsx(le,{role:"listbox",id:S.contentId,"data-state":S.open?"open":"closed",dir:S.dir,onContextMenu:W=>W.preventDefault(),...T,...fe,onPlaced:()=>de(!0),ref:F,style:{display:"flex",flexDirection:"column",outline:"none",...T.style},onKeyDown:De(T.onKeyDown,W=>{const H=W.ctrlKey||W.altKey||W.metaKey;if(W.key==="Tab"&&W.preventDefault(),!H&&W.key.length===1&&R(W.key),["ArrowUp","ArrowDown","Home","End"].includes(W.key)){let ce=ae().filter(we=>!we.disabled).map(we=>we.ref.current);if(["ArrowUp","End"].includes(W.key)&&(ce=ce.slice().reverse()),["ArrowUp","ArrowDown"].includes(W.key)){const we=W.target,Ce=ce.indexOf(we);ce=ce.slice(Ce+1)}setTimeout(()=>Z(ce)),W.preventDefault()}})})})})})})});eg.displayName=qk;var Qk="SelectItemAlignedPosition",tg=v.forwardRef((n,s)=>{const{__scopeSelect:o,onPlaced:l,...c}=n,d=lr(Mr,o),f=cr(Mr,o),[p,h]=v.useState(null),[g,x]=v.useState(null),y=Be(s,F=>x(F)),N=xa(o),C=v.useRef(!1),j=v.useRef(!0),{viewport:b,selectedItem:k,selectedItemText:T,focusSelectedItem:S}=f,D=v.useCallback(()=>{if(d.trigger&&d.valueNode&&p&&g&&b&&k&&T){const F=d.trigger.getBoundingClientRect(),z=g.getBoundingClientRect(),U=d.valueNode.getBoundingClientRect(),Y=T.getBoundingClientRect();if(d.dir!=="rtl"){const we=Y.left-z.left,Ce=U.left-we,$e=F.left-Ce,et=F.width+$e,Wt=Math.max(et,z.width),Ut=window.innerWidth-Jt,it=bp(Ce,[Jt,Math.max(Jt,Ut-Wt)]);p.style.minWidth=et+"px",p.style.left=it+"px"}else{const we=z.right-Y.right,Ce=window.innerWidth-U.right-we,$e=window.innerWidth-F.right-Ce,et=F.width+$e,Wt=Math.max(et,z.width),Ut=window.innerWidth-Jt,it=bp(Ce,[Jt,Math.max(Jt,Ut-Wt)]);p.style.minWidth=et+"px",p.style.right=it+"px"}const ye=N(),ae=window.innerHeight-Jt*2,oe=b.scrollHeight,de=window.getComputedStyle(g),se=parseInt(de.borderTopWidth,10),Z=parseInt(de.paddingTop,10),ie=parseInt(de.borderBottomWidth,10),A=parseInt(de.paddingBottom,10),ee=se+Z+oe+A+ie,K=Math.min(k.offsetHeight*5,ee),R=window.getComputedStyle(b),V=parseInt(R.paddingTop,10),Q=parseInt(R.paddingBottom,10),J=F.top+F.height/2-Jt,le=ae-J,fe=k.offsetHeight/2,W=k.offsetTop+fe,H=se+Z+W,te=ee-H;if(H<=J){const we=ye.length>0&&k===ye[ye.length-1].ref.current;p.style.bottom="0px";const Ce=g.clientHeight-b.offsetTop-b.offsetHeight,$e=Math.max(le,fe+(we?Q:0)+Ce+ie),et=H+$e;p.style.height=et+"px"}else{const we=ye.length>0&&k===ye[0].ref.current;p.style.top="0px";const $e=Math.max(J,se+b.offsetTop+(we?V:0)+fe)+te;p.style.height=$e+"px",b.scrollTop=H-J+b.offsetTop}p.style.margin=`${Jt}px 0`,p.style.minHeight=K+"px",p.style.maxHeight=ae+"px",l?.(),requestAnimationFrame(()=>C.current=!0)}},[N,d.trigger,d.valueNode,p,g,b,k,T,d.dir,l]);dt(()=>D(),[D]);const[L,P]=v.useState();dt(()=>{g&&P(window.getComputedStyle(g).zIndex)},[g]);const $=v.useCallback(F=>{F&&j.current===!0&&(D(),S?.(),j.current=!1)},[D,S]);return a.jsx(Zk,{scope:o,contentWrapper:p,shouldExpandOnScrollRef:C,onScrollButtonChange:$,children:a.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:L},children:a.jsx(Pe.div,{...c,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});tg.displayName=Qk;var Xk="SelectPopperPosition",Ic=v.forwardRef((n,s)=>{const{__scopeSelect:o,align:l="start",collisionPadding:c=Jt,...d}=n,f=wa(o);return a.jsx(Pk,{...f,...d,ref:s,align:l,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ic.displayName=Xk;var[Zk,su]=jo(Mr,{}),Pc="SelectViewport",ng=v.forwardRef((n,s)=>{const{__scopeSelect:o,nonce:l,...c}=n,d=cr(Pc,o),f=su(Pc,o),p=Be(s,d.onViewportChange),h=v.useRef(0);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),a.jsx(va.Slot,{scope:o,children:a.jsx(Pe.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:De(c.onScroll,g=>{const x=g.currentTarget,{contentWrapper:y,shouldExpandOnScrollRef:N}=f;if(N?.current&&y){const C=Math.abs(h.current-x.scrollTop);if(C>0){const j=window.innerHeight-Jt*2,b=parseFloat(y.style.minHeight),k=parseFloat(y.style.height),T=Math.max(b,k);if(T<j){const S=T+C,D=Math.min(j,S),L=S-D;y.style.height=D+"px",y.style.bottom==="0px"&&(x.scrollTop=L>0?L:0,y.style.justifyContent="flex-end")}}}h.current=x.scrollTop})})})]})});ng.displayName=Pc;var rg="SelectGroup",[Jk,eN]=jo(rg),tN=v.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n,c=Tr();return a.jsx(Jk,{scope:o,id:c,children:a.jsx(Pe.div,{role:"group","aria-labelledby":c,...l,ref:s})})});tN.displayName=rg;var og="SelectLabel",nN=v.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n,c=eN(og,o);return a.jsx(Pe.div,{id:c.id,...l,ref:s})});nN.displayName=og;var aa="SelectItem",[rN,sg]=jo(aa),ig=v.forwardRef((n,s)=>{const{__scopeSelect:o,value:l,disabled:c=!1,textValue:d,...f}=n,p=lr(aa,o),h=cr(aa,o),g=p.value===l,[x,y]=v.useState(d??""),[N,C]=v.useState(!1),j=Be(s,S=>h.itemRefCallback?.(S,l,c)),b=Tr(),k=v.useRef("touch"),T=()=>{c||(p.onValueChange(l),p.onOpenChange(!1))};if(l==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return a.jsx(rN,{scope:o,value:l,disabled:c,textId:b,isSelected:g,onItemTextChange:v.useCallback(S=>{y(D=>D||(S?.textContent??"").trim())},[]),children:a.jsx(va.ItemSlot,{scope:o,value:l,disabled:c,textValue:x,children:a.jsx(Pe.div,{role:"option","aria-labelledby":b,"data-highlighted":N?"":void 0,"aria-selected":g&&N,"data-state":g?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...f,ref:j,onFocus:De(f.onFocus,()=>C(!0)),onBlur:De(f.onBlur,()=>C(!1)),onClick:De(f.onClick,()=>{k.current!=="mouse"&&T()}),onPointerUp:De(f.onPointerUp,()=>{k.current==="mouse"&&T()}),onPointerDown:De(f.onPointerDown,S=>{k.current=S.pointerType}),onPointerMove:De(f.onPointerMove,S=>{k.current=S.pointerType,c?h.onItemLeave?.():k.current==="mouse"&&S.currentTarget.focus({preventScroll:!0})}),onPointerLeave:De(f.onPointerLeave,S=>{S.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:De(f.onKeyDown,S=>{h.searchRef?.current!==""&&S.key===" "||($k.includes(S.key)&&T(),S.key===" "&&S.preventDefault())})})})})});ig.displayName=aa;var gs="SelectItemText",ag=v.forwardRef((n,s)=>{const{__scopeSelect:o,className:l,style:c,...d}=n,f=lr(gs,o),p=cr(gs,o),h=sg(gs,o),g=Uk(gs,o),[x,y]=v.useState(null),N=Be(s,T=>y(T),h.onItemTextChange,T=>p.itemTextRefCallback?.(T,h.value,h.disabled)),C=x?.textContent,j=v.useMemo(()=>a.jsx("option",{value:h.value,disabled:h.disabled,children:C},h.value),[h.disabled,h.value,C]),{onNativeOptionAdd:b,onNativeOptionRemove:k}=g;return dt(()=>(b(j),()=>k(j)),[b,k,j]),a.jsxs(a.Fragment,{children:[a.jsx(Pe.span,{id:h.textId,...d,ref:N}),h.isSelected&&f.valueNode&&!f.valueNodeHasChildren?ks.createPortal(d.children,f.valueNode):null]})});ag.displayName=gs;var lg="SelectItemIndicator",cg=v.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n;return sg(lg,o).isSelected?a.jsx(Pe.span,{"aria-hidden":!0,...l,ref:s}):null});cg.displayName=lg;var _c="SelectScrollUpButton",ug=v.forwardRef((n,s)=>{const o=cr(_c,n.__scopeSelect),l=su(_c,n.__scopeSelect),[c,d]=v.useState(!1),f=Be(s,l.onScrollButtonChange);return dt(()=>{if(o.viewport&&o.isPositioned){let p=function(){const g=h.scrollTop>0;d(g)};const h=o.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[o.viewport,o.isPositioned]),c?a.jsx(fg,{...n,ref:f,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=o;p&&h&&(p.scrollTop=p.scrollTop-h.offsetHeight)}}):null});ug.displayName=_c;var Dc="SelectScrollDownButton",dg=v.forwardRef((n,s)=>{const o=cr(Dc,n.__scopeSelect),l=su(Dc,n.__scopeSelect),[c,d]=v.useState(!1),f=Be(s,l.onScrollButtonChange);return dt(()=>{if(o.viewport&&o.isPositioned){let p=function(){const g=h.scrollHeight-h.clientHeight,x=Math.ceil(h.scrollTop)<g;d(x)};const h=o.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[o.viewport,o.isPositioned]),c?a.jsx(fg,{...n,ref:f,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=o;p&&h&&(p.scrollTop=p.scrollTop+h.offsetHeight)}}):null});dg.displayName=Dc;var fg=v.forwardRef((n,s)=>{const{__scopeSelect:o,onAutoScroll:l,...c}=n,d=cr("SelectScrollButton",o),f=v.useRef(null),p=xa(o),h=v.useCallback(()=>{f.current!==null&&(window.clearInterval(f.current),f.current=null)},[]);return v.useEffect(()=>()=>h(),[h]),dt(()=>{p().find(x=>x.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[p]),a.jsx(Pe.div,{"aria-hidden":!0,...c,ref:s,style:{flexShrink:0,...c.style},onPointerDown:De(c.onPointerDown,()=>{f.current===null&&(f.current=window.setInterval(l,50))}),onPointerMove:De(c.onPointerMove,()=>{d.onItemLeave?.(),f.current===null&&(f.current=window.setInterval(l,50))}),onPointerLeave:De(c.onPointerLeave,()=>{h()})})}),oN="SelectSeparator",sN=v.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n;return a.jsx(Pe.div,{"aria-hidden":!0,...l,ref:s})});sN.displayName=oN;var Rc="SelectArrow",iN=v.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n,c=wa(o),d=lr(Rc,o),f=cr(Rc,o);return d.open&&f.position==="popper"?a.jsx(_k,{...c,...l,ref:s}):null});iN.displayName=Rc;var aN="SelectBubbleInput",pg=v.forwardRef(({__scopeSelect:n,value:s,...o},l)=>{const c=v.useRef(null),d=Be(l,c),f=fh(s);return v.useEffect(()=>{const p=c.current;if(!p)return;const h=window.HTMLSelectElement.prototype,x=Object.getOwnPropertyDescriptor(h,"value").set;if(f!==s&&x){const y=new Event("change",{bubbles:!0});x.call(p,s),p.dispatchEvent(y)}},[f,s]),a.jsx(Pe.select,{...o,style:{...Wh,...o.style},ref:d,defaultValue:s})});pg.displayName=aN;function mg(n){return n===""||n===void 0}function hg(n){const s=_r(n),o=v.useRef(""),l=v.useRef(0),c=v.useCallback(f=>{const p=o.current+f;s(p),(function h(g){o.current=g,window.clearTimeout(l.current),g!==""&&(l.current=window.setTimeout(()=>h(""),1e3))})(p)},[s]),d=v.useCallback(()=>{o.current="",window.clearTimeout(l.current)},[]);return v.useEffect(()=>()=>window.clearTimeout(l.current),[]),[o,c,d]}function gg(n,s,o){const c=s.length>1&&Array.from(s).every(g=>g===s[0])?s[0]:s,d=o?n.indexOf(o):-1;let f=lN(n,Math.max(d,0));c.length===1&&(f=f.filter(g=>g!==o));const h=f.find(g=>g.textValue.toLowerCase().startsWith(c.toLowerCase()));return h!==o?h:void 0}function lN(n,s){return n.map((o,l)=>n[(s+l)%n.length])}var cN=Uh,uN=Yh,dN=Kh,fN=Qh,pN=Xh,mN=Zh,hN=ng,gN=ig,yN=ag,vN=cg,xN=ug,wN=dg;function bN({...n}){return a.jsx(cN,{"data-slot":"select",...n})}function kN({...n}){return a.jsx(dN,{"data-slot":"select-value",...n})}function NN({className:n,size:s="default",children:o,...l}){return a.jsxs(uN,{"data-slot":"select-trigger","data-size":s,className:Ke("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...l,children:[o,a.jsx(fN,{asChild:!0,children:a.jsx(Ir,{className:"size-4 opacity-50"})})]})}function CN({className:n,children:s,position:o="popper",...l}){return a.jsx(pN,{children:a.jsxs(mN,{"data-slot":"select-content",className:Ke("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",o==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:o,...l,children:[a.jsx(SN,{}),a.jsx(hN,{className:Ke("p-1",o==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:s}),a.jsx(EN,{})]})})}function hs({className:n,children:s,...o}){return a.jsxs(gN,{"data-slot":"select-item",className:Ke("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...o,children:[a.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:a.jsx(vN,{children:a.jsx(Lc,{className:"size-4"})})}),a.jsx(yN,{children:s})]})}function SN({className:n,...s}){return a.jsx(xN,{"data-slot":"select-scroll-up-button",className:Ke("flex cursor-default items-center justify-center py-1",n),...s,children:a.jsx(Ov,{className:"size-4"})})}function EN({className:n,...s}){return a.jsx(wN,{"data-slot":"select-scroll-down-button",className:Ke("flex cursor-default items-center justify-center py-1",n),...s,children:a.jsx(Ir,{className:"size-4"})})}const jN=({isOpen:n,onClose:s,locale:o="tc",isMobile:l=!1})=>{const c=Ge(o),[d,f]=v.useState({companyName:"",companyWebsite:"",contactName:"",jobTitle:"",email:"",phone:"",currentTool:"",currentToolOther:"",eventsPerQuarter:"",guestListSize:"",integrationNeeds:[],consent:!1}),[p,h]=v.useState({}),[g,x]=v.useState(!1);v.useEffect(()=>{n&&(f({companyName:"",companyWebsite:"",contactName:"",jobTitle:"",email:"",phone:"",currentTool:"",currentToolOther:"",eventsPerQuarter:"",guestListSize:"",integrationNeeds:[],consent:!1}),h({}))},[n]);const y=k=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k),N=()=>{const k={};return d.companyName.trim()||(k.companyName=c.enterpriseInquiry.required),d.contactName.trim()||(k.contactName=c.enterpriseInquiry.required),d.jobTitle.trim()||(k.jobTitle=c.enterpriseInquiry.required),d.email.trim()?y(d.email)||(k.email=c.enterpriseInquiry.invalidEmail):k.email=c.enterpriseInquiry.required,d.phone.trim()||(k.phone=c.enterpriseInquiry.required),d.currentTool||(k.currentTool=c.enterpriseInquiry.selectOption),d.currentTool==="other"&&!d.currentToolOther.trim()&&(k.currentToolOther=c.enterpriseInquiry.enterDescription),d.consent||(k.consent=c.enterpriseInquiry.consentError),h(k),Object.keys(k).length===0},C=async k=>{k.preventDefault(),N()&&(x(!0),setTimeout(()=>{let T="";d.currentTool==="other"?T=`${c.enterpriseInquiry.currentToolOptions.other}：${d.currentToolOther}`:T={spreadsheet:c.enterpriseInquiry.currentToolOptions.spreadsheet,crm:c.enterpriseInquiry.currentToolOptions.crm,selfBuilt:c.enterpriseInquiry.currentToolOptions.selfBuilt,none:c.enterpriseInquiry.currentToolOptions.none}[d.currentTool]||d.currentTool;const S=`INVITI 企業方案詢問｜${d.companyName}`,D=`
公司名稱：${d.companyName}
公司網站/社群：${d.companyWebsite||"N/A"}

聯絡人姓名：${d.contactName}
職稱：${d.jobTitle}
Email：${d.email}
聯絡電話：${d.phone}

貴單位目前使用的公關名單管理工具：${T}
每季活動數量：${d.eventsPerQuarter||"N/A"}
單場貴賓名單規模：${d.guestListSize||"N/A"}
系統整合需求：${d.integrationNeeds.length>0?d.integrationNeeds.join(", "):"N/A"}

提交時間：${new Date().toLocaleString(o==="tc"?"zh-TW":o==="en"?"en-US":o==="ja"?"ja-JP":"zh-CN")}
      `.trim();console.log("Enterprise Inquiry Submitted:",{subject:S,body:D,to:"contact@inviti.vip",cc:d.email}),x(!1),s(),Ki.success(c.enterpriseInquiry.successMessage,{duration:5e3,action:{label:c.enterpriseInquiry.viewInbox,onClick:()=>window.open(`mailto:${d.email}`,"_blank")}})},1e3))},j=k=>{f(T=>({...T,integrationNeeds:T.integrationNeeds.includes(k)?T.integrationNeeds.filter(S=>S!==k):[...T.integrationNeeds,k]}))},b=({TitleComponent:k,DescriptionComponent:T})=>a.jsxs("div",{className:"flex flex-col h-full max-h-full overflow-hidden",children:[a.jsxs("div",{className:"flex-shrink-0 flex items-start justify-between pb-4 border-b border-gray-200",children:[a.jsxs("div",{children:[a.jsx(k,{className:"text-gray-900 mb-1",children:c.enterpriseInquiry.title}),a.jsx(T,{className:"text-sm text-gray-600",children:c.enterpriseInquiry.subtitle||"填寫以下資料，我們的團隊將盡快與您聯繫"})]}),a.jsx("button",{onClick:s,className:"min-w-[32px] min-h-[32px] p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2","aria-label":c.enterpriseInquiry.close,children:a.jsx(Or,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden",style:{minHeight:"40vh"},children:a.jsx("div",{className:`space-y-6 ${l?"py-4":"py-6"}`,children:a.jsxs("form",{onSubmit:C,className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:c.enterpriseInquiry.companyInfoTitle||"公司資訊"}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.companyName," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.companyName,onChange:S=>{f({...d,companyName:S.target.value}),p.companyName&&h({...p,companyName:void 0})},placeholder:c.enterpriseInquiry.companyNamePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.companyName?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.companyName&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.companyName})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.companyWebsite}),a.jsx("input",{type:"text",value:d.companyWebsite,onChange:S=>f({...d,companyWebsite:S.target.value}),placeholder:c.enterpriseInquiry.companyWebsitePlaceholder,className:"w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.contactName," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.contactName,onChange:S=>{f({...d,contactName:S.target.value}),p.contactName&&h({...p,contactName:void 0})},placeholder:c.enterpriseInquiry.contactNamePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.contactName?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.contactName&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.contactName})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.jobTitle," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.jobTitle,onChange:S=>{f({...d,jobTitle:S.target.value}),p.jobTitle&&h({...p,jobTitle:void 0})},placeholder:c.enterpriseInquiry.jobTitlePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.jobTitle?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.jobTitle&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.jobTitle})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.email," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"email",value:d.email,onChange:S=>{f({...d,email:S.target.value}),p.email&&h({...p,email:void 0})},placeholder:c.enterpriseInquiry.emailPlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.email?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.email&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.email})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.phone," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"tel",value:d.phone,onChange:S=>{f({...d,phone:S.target.value}),p.phone&&h({...p,phone:void 0})},placeholder:c.enterpriseInquiry.phonePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.phone?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.phone&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.phone})]})]}),a.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-200",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:c.enterpriseInquiry.useCaseTitle||"使用情境"}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.currentTool," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsxs(bN,{value:d.currentTool,onValueChange:S=>{f({...d,currentTool:S,currentToolOther:""}),p.currentTool&&h({...p,currentTool:void 0,currentToolOther:void 0})},children:[a.jsx(NN,{className:`w-full ${p.currentTool?"border-red-500":""}`,children:a.jsx(kN,{placeholder:c.enterpriseInquiry.currentToolPlaceholder})}),a.jsxs(CN,{children:[a.jsx(hs,{value:"spreadsheet",children:c.enterpriseInquiry.currentToolOptions.spreadsheet}),a.jsx(hs,{value:"crm",children:c.enterpriseInquiry.currentToolOptions.crm}),a.jsx(hs,{value:"selfBuilt",children:c.enterpriseInquiry.currentToolOptions.selfBuilt}),a.jsx(hs,{value:"other",children:c.enterpriseInquiry.currentToolOptions.other}),a.jsx(hs,{value:"none",children:c.enterpriseInquiry.currentToolOptions.none})]})]}),p.currentTool&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.currentTool})]}),d.currentTool==="other"&&a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.currentToolOther," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.currentToolOther,onChange:S=>{f({...d,currentToolOther:S.target.value}),p.currentToolOther&&h({...p,currentToolOther:void 0})},placeholder:c.enterpriseInquiry.currentToolOtherPlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.currentToolOther?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.currentToolOther&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.currentToolOther})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.eventsPerQuarter}),a.jsx("div",{className:"space-y-2",children:["range1","range2","range3","range4"].map(S=>a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[a.jsx("input",{type:"radio",name:"eventsPerQuarter",value:S,checked:d.eventsPerQuarter===S,onChange:D=>f({...d,eventsPerQuarter:D.target.value}),className:"w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-300"}),a.jsx("span",{className:"text-sm text-gray-700",children:c.enterpriseInquiry.eventsPerQuarterOptions[S]})]},S))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.guestListSize}),a.jsx("div",{className:"space-y-2",children:["small","medium","large","extraLarge"].map(S=>a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[a.jsx("input",{type:"radio",name:"guestListSize",value:S,checked:d.guestListSize===S,onChange:D=>f({...d,guestListSize:D.target.value}),className:"w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-300"}),a.jsx("span",{className:"text-sm text-gray-700",children:c.enterpriseInquiry.guestListSizeOptions[S]})]},S))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.integrationNeeds}),a.jsx("div",{className:"space-y-2",children:["ticketing","crm","email","other"].map(S=>a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:d.integrationNeeds.includes(S),onChange:()=>j(S),className:"w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-300"}),a.jsx("span",{className:"text-sm text-gray-700",children:c.enterpriseInquiry.integrationOptions[S]})]},S))})]})]}),a.jsxs("div",{className:"pt-4 border-t border-gray-200",children:[a.jsxs("label",{className:"flex items-start gap-2 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:d.consent,onChange:S=>{f({...d,consent:S.target.checked}),p.consent&&h({...p,consent:void 0})},className:`w-4 h-4 mt-0.5 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-300 ${p.consent?"border-red-500":""}`}),a.jsxs("span",{className:`text-sm ${p.consent?"text-red-500":"text-gray-700"}`,children:[c.enterpriseInquiry.consent," ",a.jsx("span",{className:"text-red-500",children:"*"})]})]}),p.consent&&a.jsx("p",{className:"text-xs text-red-500 mt-1 ml-6",children:p.consent})]})]})})}),a.jsxs("div",{className:"flex-shrink-0 border-t border-gray-200 pt-4 space-y-3 bg-white",style:{paddingBottom:l?"16px":"0"},children:[a.jsx(st,{variant:"primary",size:l?"sm":"md",className:"w-full",onClick:C,disabled:g,children:g?c.enterpriseInquiry.submitting:c.enterpriseInquiry.submit}),a.jsx("p",{className:"text-xs text-center text-gray-500",children:c.enterpriseInquiry.orEmail})]})]});return l?a.jsx(oh,{open:n,onOpenChange:s,children:a.jsx(ih,{side:"bottom",className:"h-[88vh] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(b,{TitleComponent:ah,DescriptionComponent:lh})})}):a.jsx(Jm,{open:n,onOpenChange:s,children:a.jsx(th,{className:"max-w-[720px] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(b,{TitleComponent:nh,DescriptionComponent:rh})})})},Ap="https://calendar.app.google/tYrJgzbLhGuS5cjC8",TN=({isMobile:n=!1,locale:s="tc",onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=Ge(s),p=()=>{o&&o("/help-center")},h=[{icon:Vp,title:f.demoBooking.card1Title,description:f.demoBooking.card1Description},{icon:Xv,title:f.demoBooking.card2Title,description:f.demoBooking.card2Description},{icon:Oc,title:f.demoBooking.card3Title,description:f.demoBooking.card3Description}];return n?a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx(dn,{isMobile:n,locale:s,onLocaleChange:l,onNavigateToHelpCenter:p,onNavigate:o,onSetScrollTarget:d,showBanner:!0}),a.jsx("section",{className:"pt-[120px] pb-8 px-6 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-[343px] mx-auto space-y-4",children:[a.jsx("h1",{className:"leading-[140%]",children:f.demoBooking.title}),a.jsx("p",{className:"text-gray-600 leading-[150%]",children:f.demoBooking.subtitle}),a.jsx(st,{variant:"primary",className:"w-full",href:Ap,target:"_blank",rel:"noopener noreferrer",children:f.demoBooking.ctaButton}),a.jsx("p",{className:"text-sm text-gray-500 text-center leading-[150%]",children:f.demoBooking.fallbackEmail})]})}),a.jsx("section",{className:"py-8 px-6",children:a.jsxs("div",{className:"max-w-[343px] mx-auto space-y-4",children:[a.jsx("h3",{className:"leading-[140%]",children:f.demoBooking.coverTitle}),a.jsx("div",{className:"space-y-3",children:h.map((g,x)=>{const y=g.icon;return a.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(y,{className:"w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"}),a.jsxs("div",{className:"space-y-1 flex-1",children:[a.jsx("h4",{className:"text-gray-900 leading-[140%]",children:g.title}),a.jsx("p",{className:"text-sm text-gray-600 leading-[150%]",children:g.description})]})]})},x)})})]})}),a.jsx(fn,{isMobile:n,locale:s,onNavigate:o,onNavigateToHelpCenter:p})]}):a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx(dn,{isMobile:n,locale:s,onLocaleChange:l,onNavigateToHelpCenter:p,onNavigate:o,onSetScrollTarget:d,showBanner:!0}),a.jsx("section",{className:"pt-[112px] pb-16 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-[960px] mx-auto px-20 text-center space-y-6",children:[a.jsx("h1",{className:"leading-[140%]",children:f.demoBooking.title}),a.jsx("p",{className:"text-gray-600 leading-[150%] max-w-[720px] mx-auto",children:f.demoBooking.subtitle}),a.jsx("div",{className:"pt-4",children:a.jsx(st,{variant:"primary",className:"min-w-[240px]",href:Ap,target:"_blank",rel:"noopener noreferrer",children:f.demoBooking.ctaButton})}),a.jsx("p",{className:"text-sm text-gray-500 leading-[150%]",children:f.demoBooking.fallbackEmail})]})}),a.jsx("section",{className:"py-16 px-20",children:a.jsxs("div",{className:"max-w-[1120px] mx-auto space-y-8",children:[a.jsx("h2",{className:"text-center leading-[140%]",children:f.demoBooking.coverTitle}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6 pt-4",children:h.map((g,x)=>{const y=g.icon;return a.jsx("div",{className:"p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all",children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(y,{className:"w-6 h-6 text-gray-600"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"leading-[140%]",children:g.title}),a.jsx("p",{className:"text-gray-600 leading-[150%]",children:g.description})]})]})},x)})})]})}),a.jsx(fn,{isMobile:n,locale:s,onNavigate:o,onNavigateToHelpCenter:p})]})},IN=({title:n,subtitle:s,sections:o=[],placeholder:l="內容即將更新，敬請期待。",onBack:c,isMobile:d=!1})=>{const f=o.length>0;return a.jsx("div",{className:`min-h-screen bg-white ${d?"p-3":"py-16 px-20"}`,children:a.jsxs("div",{className:d?"max-w-[343px]":"max-w-3xl mx-auto",children:[c&&a.jsx("button",{onClick:c,className:"text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center gap-2",children:"← 返回首頁"}),a.jsxs("header",{className:"mb-10",children:[a.jsx("h1",{className:"text-3xl font-semibold text-gray-900 mb-4",children:n}),s&&a.jsx("p",{className:"text-gray-600 leading-relaxed",children:s})]}),f?a.jsx("div",{className:"space-y-6",children:o.map((p,h)=>a.jsx("p",{className:"text-gray-600 leading-relaxed whitespace-pre-line",children:p.body},`paragraph-${h}`))}):a.jsx("div",{className:"bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500",children:l})]})})},PN=`# 隱私權政策

## **INVITI 隱私權政策**

最後更新日期：2025 年 11 月 12 日

本隱私權政策說明 INVITI 公關名單管理系統（以下稱「INVITI」、「本服務」、「我們」）如何蒐集、使用、揭露、保存與保護您的個人資料與其他資訊，以及您可以如何行使相關權利。

使用或持續使用本服務，即表示您同意本隱私權政策的內容。

---

### **一、適用範圍與定義**

**1. 適用範圍**

本政策適用於：

- 您造訪或使用 INVITI 的網站、產品頁面與說明頁（以下稱「網站」）；
- 您註冊、登入並使用 INVITI 線上軟體服務及相關 API、功能模組（以下統稱「本服務」）。

**2. 定義說明**

為方便閱讀，本政策中的部分名詞說明如下：

- 「使用者」、「您」：指註冊使用 INVITI 的自然人、公司或其他組織之使用者。
- 「帳號資訊」：為建立、管理您的 INVITI 帳號所需的資料，例如姓名、Email、登入認證資訊、公司名稱、角色等。
- 「服務使用資訊」：指您在使用本服務過程中自動產生或被記錄的資訊，例如登入紀錄、功能操作紀錄、裝置與瀏覽器資訊等。
- 「內容資料」：指您在本服務中建立、上傳或產生的各類資料（例如活動資訊、名單資訊等），由您自行決定內容與用途。

---

### **1. 我們蒐集的資訊**

我們會在以下情況蒐集與您相關的資訊：您主動提供時、您使用本服務時，以及從必要的第三方服務取得時。

### **(A) 您主動提供的資訊**

當您註冊或使用本服務時，我們可能會蒐集：

- **帳號建立與管理**：姓名、Email、職稱、公司／組織名稱、登入密碼或驗證資訊。
- **聯繫與客服**：您提供的聯絡方式、回覆內容、支援票單、附件或其他您自願提供的資訊。
- **付費與帳務**：若您購買付費方案，我們會透過第三方金流服務處理款項，可能取得帳單地址、交易編號與付款狀態等資訊（但不在我們的系統中直接儲存完整信用卡等敏感金流資訊）。
- **問卷、回饋與測試計畫**：您在問卷或使用回饋中主動填寫的資訊。

### **(B) 自動蒐集的資訊（服務使用與設備資訊）**

當您造訪網站或使用本服務時，我們會自動收集部分技術與使用資訊，例如：

- IP 位址、瀏覽器類型與版本、作業系統、裝置識別資訊；
- 造訪頁面、停留時間、點擊行為、功能使用頻率與錯誤紀錄；
- 登入與安全相關紀錄（登入時間、登入來源、異常登入警示等）。

我們可能使用 Cookie、像素（pixel）與類似技術協助記錄上述資訊，用於維持登入狀態、改善使用體驗與進行必要的服務分析。

### **(C) 從第三方取得的資訊**

在您同意或為提供服務所必要的情況下，我們可能從第三方取得與您相關的有限資訊，例如：

- 第三方登入服務（如身份驗證提供者）提供的基本帳號資訊；
- 金流或開票服務提供的帳務與交易紀錄；
- 其他您選擇串接之外部工具、整合服務或 API 所必須的最小範圍資訊。

---

### **2. 我們如何使用您的資訊**

我們會在符合適用法令的前提下，為以下目的使用您的資訊：

1. **提供與維運服務**
    - 建立與維護您的帳號身分與權限；
    - 提供各項功能（例如活動設定、名單管理、寄送通知等）；
    - 提供客服與技術支援，處理您提出的問題與需求。
2. **安全、風險控管與防止濫用**
    - 偵測、預防或調查詐欺、濫用、未授權存取或其他違反服務條款的行為；
    - 進行系統日誌分析、異常行為偵測與資安事件應變。
3. **服務分析與產品優化**
    - 分析使用者操作與功能使用情形，用以改善介面、效能與整體使用體驗；
    - 開發新功能、測試新版本或改善現有流程；
    - 在可行的情況下，我們會使用去識別化或彙總後的資料作為分析基礎。
4. **必要的通知與溝通**
    - 傳送與您帳號安全、服務異動、重要條款更新相關的通知；
    - 在您同意或法令許可的範圍內，寄送產品更新、活動資訊與調查邀請等訊息。
5. **符合法律或合約義務**
    - 遵守主管機關或法院的合法要求；
    - 依契約或法令要求履行我們對您或第三人的義務。
6. **客服協助與操作支援**
    - 當您在本服務中遇到操作困難，並主動請求客服協助排除問題時，我們可能需要在您的明確同意下，進入您的帳號或系統環境進行相關操作（例如：以支援用帳號登入、與您共同查看畫面、或依您指示模擬操作流程）。
    - 在此過程中，我們有可能接觸到部分您的內容資料或相關資訊。我們會依「最小必要原則」進行處理，僅在問題排除所需的範圍內存取，並不將該等資訊用於客服協助以外之目的。
    - 在技術可行的情況下，我們會盡可能以去識別化、遮罩或其他方式處理重要資訊，以降低識別特定個人的可能性，並要求客服人員遵守保密義務與內部資安規範。

---

### **3. 我們如何分享您的資訊**

我們不會出售您的個人資料，也不會任意將您的資料揭露給第三方。僅在以下情況下，我們可能分享有限且必要的資訊：

1. **與服務提供相關的受託廠商（處理者）**
    - 包括雲端主機服務、資料庫與備份服務、郵件寄送服務、錯誤追蹤與分析工具等。
    - 這些廠商僅能在我們指示下、於特定目的範圍內處理資料，並受合約約束需遵守保密與資安義務。
2. **法律或監管要求**
    - 為遵守適用法令、法院命令或主管機關合法要求；
    - 為保護我們、您或其他人的權利、財產或安全所必須時。
3. **公司交易或重組**
    - 若涉及合併、收購、資產移轉或其他公司交易時，必要範圍內可能將相關資料提供給潛在或實際承接單位；
    - 我們會要求承接單位繼續遵守不低於本政策的隱私與安全標準。
4. **去識別化與彙總資訊**
    - 當資訊已無法合理地識別到個人時，我們得為統計、研究、報告或其他合法目的使用與分享該等資訊。

---

### **4. 跨境資料傳輸**

依服務架構與雲端部署方式，您的資料可能被傳輸、儲存或處理於您所在國家／地區以外的伺服器位置。

在進行跨境傳輸時，我們會：

- 依適用法令採取必要的法律機制（例如合約條款等）；
- 要求相關服務提供者提供合理且符合業界標準的資安與隱私保護措施。

---

### 

### **5. 您的選擇**

您可以透過以下方式，調整或管理對於資料使用的選擇：

- **帳號資訊管理**：您可於帳號設定頁面更新基本資料，例如姓名、Email、密碼等。
- **行銷訊息**：您可依照 Email 中的取消訂閱連結或帳號設定，選擇不再接收非必要的行銷或推廣訊息。
- **Cookie 與追蹤技術**：多數瀏覽器允許您移除或阻擋 Cookie；若您停用 Cookie，部分功能可能無法正常運作。

請注意，即使您選擇不接收行銷訊息，我們仍可能傳送帳號安全或服務運作相關的必要通知。

---

### **6. 您的隱私權利**

依據適用法令，您對個人資料享有以下權利：

- 查詢或請求閱覽；
- 請求製給複本；
- 請求補充或更正；
- 請求停止蒐集、處理或利用；
- 請求刪除。

若您欲行使上述權利，可透過本政策「聯絡我們」中列示的方式與我們聯繫。我們將依適用法令與契約義務，在合理期間內回覆並處理您的請求。

若您位於特定法域（例如歐盟、英國、加州等），在當地法律適用的前提下，您可能享有額外的隱私權利；若未來 INVITI 服務明確擴展至前述地區，我們將再依需求補充區域性條款。

---

### **7. 資料保存期間**

我們會在達成前述蒐集目的所必要的期間內保留您的個人資料，並依下列原則處理：

- **帳號與服務資料**：於您的帳號有效期間內保存，除非您要求刪除，或基於法律義務需保留更久。
- **備份與稽核資料**：為確保服務連續性與資安需求，相關備份與紀錄會在達成目的後於合理期間內刪除或匿名化。
- **法定保存**：若法律或主管機關要求保留特定資料一定期間，我們將依相關規定辦理。

當資料不再需要為上述目的使用時，我們將依既定流程刪除或採去識別化處理。

---

### 

### **8. 資料安全**

我們採取合理且符合業界標準的技術與組織措施，保護您的資訊免於未授權存取、使用、修改或揭露，包括但不限於：

- **加密技術**：透過 HTTPS/TLS 保護資料傳輸安全；重要資料於儲存時採用適當的加密機制。
- **存取控制**：使用權限控管、身分驗證與最小必要權限原則，限制內部人員存取資料。
- **系統監控與稽核**：記錄重要操作與存取紀錄，並定期審視，以偵測異常行為或潛在風險。
- **備份與災難復原**：定期進行資料備份，並建立災難復原計畫，以降低硬體故障或其他事件造成的資料遺失風險。

然而，任何網路傳輸或儲存方式都無法保證百分之百安全。我們會持續優化資安措施，但也建議您妥善保管帳號與密碼，並避免將登入憑證提供給他人。

---

### **9. 第三方網站與服務**

本服務可能包含指向第三方網站或服務的連結，或與第三方工具進行整合（例如金流、郵件、分析服務等）。

- 這些第三方服務由各自的營運者負責，我們無法控制其隱私實務。
- 當您造訪或使用第三方服務時，建議您先閱讀其隱私權政策與使用條款。

---

### **10. 未成年人資料**

本服務主要提供給具完全行為能力之企業與專業使用者使用，不以未成年人為主要對象。

- 若依適用法令，您被視為未成年人，請在法定代理人或監護人同意與陪同下使用本服務。
- 若我們得知未經家長同意而蒐集到未成年人的個人資料，將會依法儘速刪除或採取其他適當措施。

---

### **11. 本政策的變更**

我們可能因服務調整、法令變更或資安需求而更新本政策。

- 重大變更時，我們會在網站明顯位置公告，或以您提供的聯絡方式通知您。
- 建議您定期查閱本頁，以掌握最新版本內容。

在更新生效日之後繼續使用本服務，即視為您同意修訂後的隱私權政策。

---

### **12. 聯絡我們**

若您對本隱私權政策或個人資料相關事宜有任何問題、要求或疑慮，歡迎透過以下方式與我們聯繫：

- 公司名稱：藝氣股份有限公司
- 聯絡 Email：contact@inviti.vip

我們將依適用法令與內部流程，在合理期間內回覆您的詢問。`,_N=({title:n="隱私權政策",subtitle:s,onBack:o,isMobile:l=!1})=>{const c=v.useMemo(()=>vo(PN),[]);return a.jsx("div",{className:`min-h-screen bg-white ${l?"p-3":"py-16 px-20"}`,children:a.jsxs("div",{className:l?"max-w-[343px]":"max-w-3xl mx-auto",children:[o&&a.jsx("button",{onClick:o,className:"text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center gap-2",children:"← 返回首頁"}),a.jsxs("header",{className:"mb-10",children:[a.jsx("h1",{className:"text-3xl font-semibold text-gray-900 mb-4",children:n}),s&&a.jsx("p",{className:"text-gray-600 leading-relaxed",children:s})]}),a.jsx("div",{className:"prose prose-gray max-w-none blog-content terms-content",dangerouslySetInnerHTML:{__html:c.content}}),a.jsx("style",{children:`
          .terms-content {
            color: #1f1f1f;
          }
          .terms-content p {
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          .terms-content h2 {
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.4;
          }
          .terms-content h3 {
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.4;
          }
          .terms-content ul,
          .terms-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }
          .terms-content ul {
            list-style: none;
            padding-left: 0;
          }
          .terms-content ul li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }
          .terms-content ul li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #1f1f1f;
            font-weight: normal;
          }
          .terms-content ol {
            list-style-type: decimal;
          }
          .terms-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
            display: list-item;
          }
          /* Nested lists - preserve indentation */
          .terms-content ol ul,
          .terms-content ul ul,
          .terms-content ol ol,
          .terms-content ul ol {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
          }
          .terms-content ol ul {
            list-style: none;
            padding-left: 0;
          }
          .terms-content ol ul li {
            position: relative;
            padding-left: 1.5rem;
          }
          .terms-content ol ul li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #1f1f1f;
            font-weight: normal;
          }
          .terms-content blockquote {
            margin: 2rem 0;
            padding: 1.25rem 1.5rem;
            border-left: 4px solid #e5e5e5;
            background-color: #f9f9f9;
            font-style: italic;
            color: #525252;
          }
          .terms-content blockquote p {
            margin-bottom: 0;
          }
          .terms-content a {
            color: #2D3508;
            text-decoration: underline;
            transition: color 200ms;
          }
          .terms-content a:hover {
            color: #1A1F05;
          }
          .terms-content hr {
            border: none;
            border-top: 1px solid rgb(162, 162, 162);
            margin: 2rem 0;
          }
        `})]})})},yg="/INVITI-Website/assets/%E4%B8%80%E9%8D%B5%E9%82%80%E8%AB%8B%E8%88%87%E8%BF%BD%E8%B9%A4%E5%87%BA%E5%B8%AD%E7%8B%80%E6%B3%81.png-DSS0jKoh.webp",vg="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E8%B3%87%E6%96%99%E5%BA%AB.png-0Ook9JvC.webp",DN="/INVITI-Website/assets/%E6%B4%BB%E5%8B%95%E7%AE%A1%E7%90%86.png-QCOZsRQM.webp",RN=({imageUrl:n,alt:s,isOpen:o,onClose:l})=>(v.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[o]),v.useEffect(()=>{const c=d=>{d.key==="Escape"&&l()};return o&&window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[o,l]),o?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",onClick:l,children:a.jsxs("div",{className:"relative max-w-[960px] w-full mx-8",children:[a.jsx("button",{onClick:l,className:"absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded","aria-label":"Close lightbox",children:a.jsx(Or,{size:24})}),a.jsx("div",{className:"bg-white rounded-lg overflow-hidden shadow-2xl",onClick:c=>c.stopPropagation(),children:a.jsx("img",{src:n,alt:s,className:"w-full h-auto"})})]})}):null),Mp={"event-session-management":Up,"automated-invitations":yg,"guest-database":vg},AN="4QObyx7sDhI",MN={"event-session-management":DN,"automated-invitations":yg,"guest-database":vg};function ON(n,s){const o=n;return o==="en"?s==="event-session-management"?{title:"Event & Session Management",intro:["INVITI treats every event as a dedicated project. When you create an event, you can configure all key details at once — date, venue, doors-open and show time, invitation artwork, and more. At the same time, the system automatically generates the corresponding RSVP form so your invitation workflow is ready to go."],sections:[{heading:"Challenges when managing events with Google Forms & spreadsheets",bullets:["Each event ends up with multiple guest lists, RSVP forms, and invitation images scattered across different folders, making it hard to manage and even harder to know which version is the latest.","After collecting RSVPs in Google Forms, you still need to move data elsewhere to clean it up and send emails. The workflow is fragmented and time‑consuming.","Know‑how and rules are often locked in one person’s head, making it difficult to share workload and forcing a single coordinator to handle everything."]},{heading:"INVITI gives you true end‑to‑end event management",body:"INVITI links guest lists and RSVP forms under the same event/session, so organizers can manage guests and email flows from a single interface. Once email templates are set up, you can batch‑send invitations and confirmations without copying and pasting names one by one, greatly reducing human error and making the entire process clearer and easier to hand over."}],backLabel:"Back to Product Features",moreFeaturesLabel:"Other product features"}:s==="automated-invitations"?{title:"One‑Click Invitations & Attendance Tracking",intro:["With INVITI, you can select the guests you want to invite directly from the attendance list and send invitation, confirmation, or reminder emails with a single click, using predefined templates. The system automatically includes the correct RSVP form link. Email content is prepared in “Email Templates”, and variables pull in guest and event details automatically to avoid manual errors. When a guest submits the form—or when the inviter sends a confirmation—the system updates status and headcount automatically so every invitation has a clear trace."],sections:[{heading:"Challenges when inviting guests with regular email tools",bullets:["Guest lists live in Google Sheets, RSVP forms in Google Forms, and emails in your inbox. The process is fragmented and it’s hard to see who has been invited and who hasn’t.","After guests confirm attendance, someone has to manually update status and headcount one by one, which makes tracking total confirmed seats very time‑consuming.","Sending reminder emails before the event is tedious and error‑prone, increasing the risk of sending the wrong content to the wrong people."]},{heading:"INVITI makes invitations and attendance tracking straightforward",body:"In INVITI, you can handle invitation, confirmation, and reminder flows directly from the “Guest Attendance List” and see live changes in status and ticket counts. From the first invitation to the final headcount before the event, everything happens in one interface, so your team can always see the latest attendance progress."}],backLabel:"Back to Product Features",moreFeaturesLabel:"Other product features"}:{title:"Guest Database",intro:["INVITI turns all of your PR guests into a long‑term “Guest Database”, using email as the unique identifier to avoid duplicate records. You can add guests one by one, bulk import them, or sync new contacts automatically from RSVP forms.","Fields are pre‑designed for PR workflows (name, organization, title, contact info, account owner, tags, etc.), and combined with tags and internal owner settings so each guest’s background, relationship, and interaction history can be captured instead of living only in a few colleagues’ memory."],sections:[{heading:"Challenges when managing a master guest list in Google Sheets or Excel",bullets:["The same guest is duplicated across multiple events with inconsistent names, titles, or contact details, making it hard to know which record is the most up‑to‑date.","Lists are scattered across Excel files, Google Sheets, and email attachments, so new teammates struggle to quickly understand existing relationships.","When you want to target by industry, importance, owner, or region, you have to filter and tag sheet by sheet, spending time on data cleanup instead of relationship‑building.","After an event, it’s hard to see a guest’s full “participation history” from one place, which makes follow‑up and analysis difficult."]},{heading:"INVITI turns guest information into a long‑term relationship asset",body:"With the Guest Database, all contacts live in a single system. Email prevents duplicate records, and you can quickly search and segment by tags, industry, importance, owner, and more. Each invitation and attendance record writes back to the same guest, building a clear interaction history. Whether someone new takes over, PR ownership changes, or multiple teams need to share lists, everyone can see a complete and up‑to‑date view of each relationship."}],backLabel:"Back to Product Features",moreFeaturesLabel:"Other product features"}:o==="zh-hans"?s==="event-session-management"?{title:"活动／场次管理",intro:["INVITI 把每一场活动当成一个专案来管理。建立活动时，可以一次设定好活动资讯，例如：日期、地点、进场及演出时间、电子邀请函图片⋯⋯等。在活动建立完成的同时，系统也会自动产生对应的邀请表单，让后续邀请流程接上。"],sections:[{heading:"使用 Google 表单管理活动时，你可能会遇到以下问题",bullets:["一个活动有多个出席名单、邀请表单、邀请函图片，分散在不同云端资料夹中，难以管理，也难以追踪最新版本","使用 Google 表单搜集贵宾出席意愿后，还需要再把资料转移到其他地方整理、寄信，流程零碎又花时间","经验与规则都锁在同一个人身上，工作负担难以分担，只能由单一窗口一人作业"]},{heading:"INVITI 做到了一站式的管理",body:"INVITI 将出席名单与邀请表单勾稽在同一个活动／场次下，主办方可以在同一个介面，一站式管理贵宾名单与寄信流程。只要事先设定好信件模板，就能批次寄出邀请与确认信，不必再一笔一笔复制贴上名单，大幅减少人工错误，也让整体流程更清楚、更好交接。"}],backLabel:"返回产品功能",moreFeaturesLabel:"其他产品功能"}:s==="automated-invitations"?{title:"一键邀请与追踪出席状况",intro:["INVITI 让你在同一个出席名单页面，选好要邀请的贵宾后，就能用信件模板「一键寄出」邀请信、确认信或提醒信，并自动附上对应的邀请表单连结。信件内容可事先在「信件模板管理」设定，并利用内容变数自动带入贵宾与活动资讯，避免手动输入出错。贵宾填完表单，或由邀请人直接寄出确认信后，系统会自动更新出席状态与出席人数，让每一笔邀请都有清楚的纪录。"],sections:[{heading:"用一般寄信工具邀请贵宾，你可能会遇到以下问题",bullets:["名单在 Google Sheet、邀请表单在 Google Form、寄信在信箱，流程分散又难以回溯谁已寄出、谁尚未邀请","贵宾回覆出席后，需要人工逐笔更新出席状态与人数，统计目前确认人数相当费时","活动前想发提醒信，既耗时、寄错信的风险高"]},{heading:"INVITI 让邀请与出席追踪不再困难",body:"透过 INVITI，你可以在「贵宾出席名单」中直接完成邀请、确认与提醒三个步骤，并即时看到出席状态与票数变化。从寄出第一封邀请信，到活动前夕确认最终人数，都在同一个介面完成，让团队随时掌握活动最新出席进度。"}],backLabel:"返回产品功能",moreFeaturesLabel:"其他产品功能"}:{title:"贵宾资料库",intro:["INVITI 把所有公关贵宾整理成一个可以长期累积的「贵宾资料库」，用 Email 当作唯一识别，避免重复建档。你可以用单笔新增、批量汇入，或透过邀请表单自动同步活动中的新贵宾资料。","栏位已预先依照公关情境设计（姓名、单位、职称、联络方式、联络人、标签等），再搭配标签与内部窗口设定，让每一位贵宾的背景、关系与互动脉络都能被记录下来，而不是只存在某一两位同事的记忆里。"],sections:[{heading:"如果在 Google Sheet 或 Excel 管理贵宾总表，你可能会遇到以下问题",bullets:["同一位贵宾在不同活动被重复建立多笔资料，名称、职称或联络方式不一致，难以判断哪一笔才是最新","名单散落在各种 Excel、Google 试算表与信箱附件中，新加入的同事很难快速掌握既有关係","想依产业别、重要程度、邀请人或地区分组邀请时，只能一张张表格筛选、贴标记，时间花在整理资料，而不是经营关係","活动结束后，无法从单一视角回头查看这位贵宾「历年参与纪录」，也难以做后续关係维护与资料分析"]},{heading:"INVITI 让贵宾资料变成可以长期累积的资产",body:"透过贵宾资料库，所有贵宾资讯被集中在同一套系统中，由 Email 自动避免重复建档，并可透过标签、产业别、重要程度、邀请人等条件快速搜寻与分组。每次邀请与出席状况也会回写到同一笔贵宾资料，形成清楚的互动历史。无论是新人接手、公关换人，或是跨部门需要共用名单，都能在同一个画面看到完整且最新的贵宾关係全貌。"}],backLabel:"返回产品功能",moreFeaturesLabel:"其他产品功能"}:o==="ja"?s==="event-session-management"?{title:"イベント／セッション管理",intro:["INVITI は、1 つ 1 つのイベントを「プロジェクト」として管理します。イベント作成時に、日付・会場・開場／開演時間・デジタル招待状の画像など、必要な情報をまとめて設定できます。イベントを作成すると同時に、対応する招待フォームも自動生成され、そのまま招待フローにつなげることができます。"],sections:[{heading:"Google フォームでイベントを管理すると、こんな課題が起こりがちです",bullets:["1 つのイベントに対して、出席リスト・招待フォーム・招待状の画像が複数存在し、それぞれが別々のクラウドフォルダに散らばっているため、管理が煩雑で最新版も分かりにくい","Google フォームで出席可否を集めたあと、別の場所にデータを移して整え、メール配信する必要があり、プロセスが分断されて時間も手間もかかる","ノウハウやルールが 1 人の担当者に属人化しており、作業を分担しにくく、いつも同じ窓口がすべてを抱え込んでしまう"]},{heading:"INVITI ならイベント情報を 1 か所にまとめて管理",body:"INVITI では、出席リストと招待フォームを同じイベント／セッション単位でひも付けて管理できます。主催者は 1 つの画面で、ゲストリストとメール送信フローを一元的に扱えます。あらかじめメールテンプレートを用意しておけば、招待メールや確認メールを一括送信でき、名簿を 1 件ずつコピー＆ペーストする必要はありません。ヒューマンエラーを大幅に減らし、プロセス全体がもっと分かりやすく、引き継ぎもしやすくなります。"}],backLabel:"機能一覧に戻る",moreFeaturesLabel:"その他の製品機能"}:s==="automated-invitations"?{title:"ワンクリック招待と出席状況トラッキング",intro:["INVITI なら、同じ出席リスト画面上で招待したいゲストを選び、テンプレートを使って「ワンクリック」で招待メール・確認メール・リマインドメールを送信できます。適切な招待フォームのリンクも自動で挿入されます。メール本文は「メールテンプレート管理」で事前に用意し、変数を使ってゲスト情報やイベント情報を自動差し込みできるので、手入力ミスを防げます。ゲストがフォームに回答したり、担当者が確認メールを送信すると、システムが出席ステータスと人数を自動更新し、1 件 1 件の招待に明確な履歴が残ります。"],sections:[{heading:"一般的なメールツールで招待するときの課題",bullets:["ゲストリストはスプレッドシート、招待フォームは Google フォーム、送信はメールクライアントと、プロセスがバラバラで「誰に送ったか／まだ送っていないか」を追いにくい","出席の返信をもらったあと、担当者が手作業で出席ステータスや人数を更新する必要があり、現在の確定人数を集計するのに時間がかかる","イベント直前にリマインドメールを送りたいが、工数も多く、宛先や内容を間違えるリスクも高い"]},{heading:"INVITI なら招待と出席管理を同じ画面で完結",body:"INVITI では、「ゲスト出席リスト」からそのまま招待・出席確認・リマインドの 3 ステップを完了でき、ステータスやチケット枚数の変化をリアルタイムに確認できます。最初の招待メール送信からイベント前日の最終人数確認まで、すべてを 1 つの画面で行えるため、チーム全員が常に最新の出席状況を把握できます。"}],backLabel:"機能一覧に戻る",moreFeaturesLabel:"その他の製品機能"}:{title:"ゲストデータベース",intro:["INVITI は、すべての PR ゲストを長期的に蓄積できる「ゲストデータベース」として整理し、Email を一意の識別子として重複登録を防ぎます。1 件ずつの追加、CSV などからの一括インポート、招待フォームからの自動同期など、さまざまな方法でゲスト情報を集約できます。","項目は PR の実務に合わせて事前設計されており（氏名、所属、役職、連絡先、担当者、タグなど）、タグや社内の担当設定と組み合わせることで、各ゲストの背景や関係性、これまでのやり取りの文脈を記録として残せます。特定のメンバーの記憶にだけ依存しない状態をつくることができます。"],sections:[{heading:"Google シートや Excel で「ゲスト一覧」を管理すると起こりがちな問題",bullets:["同じゲストがイベントごとに別レコードとして重複登録され、名前・役職・連絡先がバラバラになり、どれが最新情報なのか分かりにくい","名簿が複数の Excel ファイルや Google シート、メール添付などに散在しており、新しく入ったメンバーが既存の関係性を素早く把握しにくい","業種・重要度・担当者・地域別などでセグメントして招待したいとき、各シートをフィルタ・タグ付けしながら作業する必要があり、時間の多くをデータ整備に取られてしまう","イベント終了後に、そのゲストの「過去の参加履歴」を 1 つのビューで振り返ることが難しく、フォローアップや分析に活かしにくい"]},{heading:"INVITI ならゲスト情報を長期的な「関係資産」に変えられる",body:"ゲストデータベースでは、すべてのゲスト情報が 1 つのシステムに集約され、Email によって重複登録が自動的に防がれます。タグ・業種・重要度・担当者などの条件で素早く検索・絞り込みができ、各イベントでの招待や出席状況も同じレコードに書き戻されます。こうして明確なインタラクション履歴が蓄積されるため、新人の引き継ぎや担当変更、部門間での名簿共有が必要なときも、常に最新かつ全体像の見える関係管理が可能になります。"}],backLabel:"機能一覧に戻る",moreFeaturesLabel:"その他の製品機能"}:s==="event-session-management"?{title:"活動／場次管理",intro:["INVITI 把每一場活動當成一個專案來管理。建立活動時，可以一次設定好活動資訊，例如：日期、地點、進場及演出時間、電子邀請函圖片⋯⋯等。在活動建立完成的同時，系統也會自動產生對應的邀請表單，讓後續邀請流程接上。"],sections:[{heading:"使用 Google 表單管理活動時，你可能會遇到以下問題",bullets:["一個活動有多個出席名單、邀請表單、邀請函圖片，分散在不同雲端資料夾中，難以管理，也難以追蹤最新版本","使用 Google 表單蒐集貴賓出席意願後，還需要再把資料轉移到其他地方整理、寄信，流程零碎又花時間","經驗與規則都鎖在同一個人身上，工作負擔難以分擔，只能由單一窗口一人作業"]},{heading:"INVITI 做到了一站式的管理",body:"INVITI 將出席名單與邀請表單勾稽在同一個活動／場次下，主辦方可以在同一個介面，一站式管理貴賓名單與寄信流程。只要事先設定好信件模板，就能批次寄出邀請與確認信，不必再一筆一筆複製貼上名單，大幅減少人工錯誤，也讓整體流程更清楚、更好交接。"}],backLabel:"← 返回產品功能",moreFeaturesLabel:"其他產品功能"}:s==="automated-invitations"?{title:"一鍵邀請與追蹤出席狀況",intro:["INVITI 讓你在同一個出席名單頁面，選好要邀請的貴賓後，就能用信件模板「一鍵寄出」邀請信、確認信或提醒信，並自動附上對應的邀請表單連結。信件內容可事先在「信件模板管理」設定，並利用內容變數自動帶入貴賓與活動資訊，避免手動輸入出錯。貴賓填完表單，或由邀請人直接寄出確認信後，系統會自動更新出席狀態與出席人數，讓每一筆邀請都有清楚的紀錄。"],sections:[{heading:"用一般寄信工具邀請貴賓，你可能會遇到以下問題",bullets:["名單在 Google Sheet、邀請表單在 Google Form、寄信在信箱，流程分散又難以回溯誰已寄出、誰尚未邀請","貴賓回覆出席後，需要人工逐筆更新出席狀態與人數，統計目前確認人數相當費時","活動前想發提醒信，既耗時、寄錯信的風險高"]},{heading:"INVITI 讓邀請與出席追蹤不再困難",body:"透過 INVITI，你可以在「貴賓出席名單」中直接完成邀請、確認與提醒三個步驟，並即時看到出席狀態與票數變化。從寄出第一封邀請信，到活動前夕確認最終人數，都在同一個介面完成，讓團隊隨時掌握活動最新出席進度。"}],backLabel:"← 返回產品功能",moreFeaturesLabel:"其他產品功能"}:{title:"貴賓資料庫",intro:["INVITI 把所有公關貴賓整理成一個可以長期累積的「貴賓資料庫」，用「Email」當作唯一識別，避免重複建檔。你可以用單筆新增、批量匯入，或透過邀請表單自動同步活動中的新貴賓資料。","欄位已預先依照公關情境設計（姓名、單位、職稱、聯絡方式、聯絡人、標籤等），再搭配標籤與內部窗口設定，讓每一位貴賓的背景、關係與互動脈絡都能被記錄下來，而不是只存在某一兩個同事的記憶裡。"],sections:[{heading:"如果在Google Sheet或Excel管理貴賓總表，你可能會遇到以下問題",bullets:["同一位貴賓在不同活動被重複建立多筆資料，名稱、職稱或聯絡方式不一致，難以判斷哪一筆才是最新","名單散落在各種 Excel、Google 試算表與信箱附件中，新加入的同事很難快速掌握既有關係","想依產業別、重要程度、邀請人或地區分組邀請時，只能一張張表格篩選、貼標記，時間花在整理資料，而不是經營關係","活動結束後，無法從單一視角回頭查看這位貴賓「歷年參與紀錄」，也難以做後續關係維護與資料分析"]},{heading:"INVITI 讓貴賓資料變成可以長期累積的資產",body:"透過貴賓資料庫，所有貴賓資訊被集中在同一套系統中，由 Email 自動避免重複建檔，並可透過標籤、產業別、重要程度、邀請人等條件快速搜尋與分組。每次邀請與出席狀況也會回寫到同一筆貴賓資料，形成清楚的互動歷史。無論是新人接手、公關換人，或是跨部門需要共用名單，都能在同一個畫面看到完整且最新的貴賓關係全貌。"}],backLabel:"← 返回產品功能",moreFeaturesLabel:"其他產品功能"}}const LN=({featureId:n,isMobile:s=!1,locale:o="tc",onBack:l,onNavigate:c})=>{const d=Ge(o),f=ON(o,n),p=s?"container-fluid px-4":"container",[h,g]=v.useState(!1),[x,y]=v.useState(!1),C=[{id:"event-session-management",icon:a.jsx(Oc,{size:22,className:"text-dark"}),title:d.features.card1Title,description:d.features.card1Description},{id:"automated-invitations",icon:a.jsx($p,{size:22,className:"text-dark"}),title:d.features.card2Title,description:d.features.card2Description},{id:"guest-database",icon:a.jsx(zp,{size:22,className:"text-dark"}),title:d.features.card3Title,description:d.features.card3Description}].filter(j=>j.id!==n);return v.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[n]),a.jsxs("section",{className:"section-padding bg-white border-top border-bottom",children:[a.jsxs("div",{className:p,children:[l&&a.jsx("button",{onClick:l,className:"btn btn-link px-0 mb-4 text-muted small text-decoration-none",children:f.backLabel}),a.jsxs("div",{className:"row g-4 mb-5",children:[a.jsx("div",{className:"col-12 col-lg-6",children:a.jsx("div",{className:"bg-light border rounded overflow-hidden position-relative",children:n==="automated-invitations"?a.jsx("div",{className:"position-relative",style:{paddingBottom:"56.25%",height:0},children:a.jsx("iframe",{src:`https://www.youtube.com/embed/${AN}`,title:f.title,className:"position-absolute top-0 start-0 w-100 h-100",style:{border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):a.jsxs("div",{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[a.jsx("img",{src:Mp[n],alt:f.title,className:"img-fluid w-100",style:{objectFit:"cover"}}),a.jsx("button",{type:"button",onClick:()=>y(!0),className:"btn btn-light btn-sm d-flex align-items-center gap-1 position-absolute",style:{right:"0.75rem",bottom:"0.75rem",opacity:h?1:0,transition:"opacity 0.2s"},children:a.jsx(Hp,{size:16})})]})})}),a.jsx("div",{className:"col-12 col-lg-6",children:a.jsxs("div",{className:"d-flex flex-column",children:[a.jsx("h1",{className:"mb-4",children:f.title}),f.intro.map(j=>a.jsx("p",{className:"text-muted mb-3",children:j},j)),f.sections.map((j,b)=>a.jsxs("div",{className:"mt-3",children:[a.jsx("h2",{className:"h6 mb-2",children:j.heading}),j.body&&a.jsx("p",{className:"text-muted mb-2",children:j.body}),j.bullets&&a.jsx("ul",{className:"text-muted mb-2 ps-3",style:{listStyleType:"disc"},children:j.bullets.map(k=>a.jsx("li",{className:"mb-1",children:k},k))})]},`${j.heading}-${b}`))]})})]}),a.jsxs("div",{className:"border-top pt-4",children:[a.jsx("h3",{className:s?"h6 mb-3":"h5 mb-4",children:f.moreFeaturesLabel}),a.jsx("div",{className:"row g-4",children:C.map(j=>a.jsx("div",{className:"col-12 col-md-6",children:a.jsx(Gi,{icon:j.icon,title:j.title,description:j.description,screenshot:MN[j.id],onClick:()=>c?.(`/features/${j.id}`),isMobile:s,learnMoreText:d.features.viewDetails})},j.id))})]})]}),x&&n!=="automated-invitations"&&a.jsx(RN,{imageUrl:Mp[n],alt:f.title,isOpen:x,onClose:()=>y(!1)})]})};function BN(){const[n,s]=v.useState("wireframe"),[o,l]=v.useState("wireframe"),[c,d]=v.useState("idle"),[f,p]=v.useState("desktop"),[h,g]=v.useState(null),[x,y]=v.useState("tc"),[N,C]=v.useState(""),j=v.useRef(""),b=v.useRef(!0),[k,T]=v.useState(!1),[S,D]=v.useState(!1),[L,P]=v.useState({strictlyNecessary:!0,functional:!1,analytics:!1,marketing:!1}),[$,F]=v.useState(!1),[z,U]=v.useState("free"),[Y,ye]=v.useState(!1);v.useEffect(()=>{const H=localStorage.getItem("locale");H&&["tc","en","ja","zh-hans"].includes(H)&&y(H)},[]),v.useEffect(()=>{const H=localStorage.getItem("cookieConsent");if(H)try{const te=JSON.parse(H);P(te)}catch{console.error("Failed to parse cookie preferences")}else{const te=setTimeout(()=>{T(!0)},1e3);return()=>clearTimeout(te)}},[]);const ae={desktop:"w-full",tablet:"w-full",mobile:"w-full"},oe={"event-session-management":{title:"Event & Session Management",description:"Streamline your event planning process with powerful management tools designed for PR professionals and event organizers. Create, organize, and track multiple events and sessions all in one centralized platform.",screenshot:"https://images.unsplash.com/photo-1517857612127-f33b2b246bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxNzQ4MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Create and manage unlimited events with custom timelines and schedules","Organize multiple sessions within each event with detailed agenda planning","Track venue details, capacity limits, and location information","Set up recurring events and template sessions for faster planning","Real-time dashboard showing all upcoming events and session status","Manage event staff, vendors, and resource allocation","Generate comprehensive event reports and analytics"]},"automated-invitations":{title:"Automated Invitations & Tracking",description:"Send beautiful, branded invitations and track every interaction automatically. Our intelligent tracking system keeps you informed of RSVPs, opens, clicks, and engagement in real-time.",screenshot:"https://images.unsplash.com/photo-1586957960362-65815d739527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGludml0YXRpb24lMjB0cmFja2luZ3xlbnwxfHx8fDE3NjE3OTgyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Automated email invitations with customizable templates and branding","Real-time RSVP tracking with instant notifications","Track email opens, clicks, and engagement metrics","Automated follow-up reminders for non-responders","Personalized invitation messages with merge fields","QR code generation for easy check-in at events","Integration with calendar apps for automatic scheduling","Waitlist management and automated seat allocation"]},"guest-database":{title:"Centralized Guest Database",description:"Build and maintain a comprehensive database of your contacts and guests. Advanced segmentation and filtering tools help you target the right audience for every event.",screenshot:"https://images.unsplash.com/photo-1740560051533-3acef26ace95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwZGF0YWJhc2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNzk4MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Store unlimited contacts with detailed profiles and history","Advanced segmentation by industry, location, interests, and custom tags","Import contacts from CSV, Excel, or integrate with CRM systems","Track guest attendance history and engagement patterns","Create custom fields and categories for your specific needs","Duplicate detection and automatic contact merging","Export guest lists and reports in multiple formats","GDPR-compliant data management and privacy controls"]},"roles-permissions":{title:"Roles & Permissions",description:"Collaborate with your team securely with granular access control and comprehensive audit trails. Manage who can do what in your organization.",screenshot:"https://images.unsplash.com/photo-1602343457842-a98feacd5cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcGVybWlzc2lvbnMlMjBhY2Nlc3N8ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Define custom roles with specific permission sets","Granular access control for events, guests, and data","Team collaboration with shared workspaces","Comprehensive audit logs tracking all user actions","Two-factor authentication for enhanced security","SSO integration for enterprise customers","Activity monitoring and user session management","Role-based email sending and approval workflows"]},"email-templates":{title:"Email Templates",description:"Create, manage, and deploy professional email templates with ease. Multi-version support and variable system for personalized communications.",screenshot:"https://images.unsplash.com/photo-1576859933856-c07ec7ddfe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHRlbXBsYXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTgxMjg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Drag-and-drop template builder with rich formatting","Multi-language template support for global events","Version control and template history tracking","Dynamic variable insertion for personalization","Pre-built templates for common event types","A/B testing capabilities for optimization","Mobile-responsive email design","Template analytics and performance tracking"]}},de=v.useCallback(H=>{const te=go(H||"/");let ce="wireframe",we=null;if(te==="/help-center")ce="help-center";else if(te.startsWith("/instruction/"))ce="instruction";else if(te==="/cookie-policy")ce="cookie-policy";else if(te==="/blog")ce="blog";else if(te.startsWith("/blog/"))ce="blog-post";else if(te==="/booking"||te==="/demo-booking")ce="booking";else if(te.startsWith("/features/")){const Ce=te.replace("/features/","");oe[Ce]?(we=Ce,ce="feature"):ce="wireframe"}else te==="/about"?ce="about":te==="/terms"?ce="terms":ce="wireframe";g(we),s(ce)},[]),se=v.useCallback((H,te={})=>{const we=mw(H||"/");te.replace?window.history.replaceState(null,"",we):window.history.pushState(null,"",we),de(we)},[de]),Z=()=>{C("features"),se("/",{replace:!0})},ie=()=>{const H={strictlyNecessary:!0,functional:!0,analytics:!0,marketing:!0};P(H),localStorage.setItem("cookieConsent",JSON.stringify(H)),T(!1),Ki.success("Cookie preferences saved")},A=()=>{const H={strictlyNecessary:!0,functional:!1,analytics:!1,marketing:!1};P(H),localStorage.setItem("cookieConsent",JSON.stringify(H)),T(!1),Ki.success("Cookie preferences saved")},ee=()=>{T(!1),D(!0)},K=H=>{P(H),localStorage.setItem("cookieConsent",JSON.stringify(H)),Ki.success("Cookie preferences saved")},R=()=>{T(!1),se("/cookie-policy")},V=()=>{se("/",{replace:!0})},Q=()=>{se("/",{replace:!0})},J=()=>{se("/help-center")},le=H=>{const te=n!=="wireframe";te&&se("/"),setTimeout(()=>{const ce=document.getElementById("pricing");if(ce){const Ce=f==="mobile"?56:48,et=localStorage.getItem("banner-dismissed")==="true"?64:64+Ce,Ut=ce.getBoundingClientRect().top+window.pageYOffset-et;window.scrollTo({top:Ut,behavior:"smooth"}),H&&setTimeout(()=>{const it=document.querySelector(`[data-pricing-card="${H}"]`);it&&(it.classList.add("pricing-card-highlight"),setTimeout(()=>{it.classList.remove("pricing-card-highlight")},1500))},300)}},te?150:0)},fe=H=>{y(H),localStorage.setItem("locale",H)};v.useEffect(()=>{j.current=N},[N]),v.useEffect(()=>{document.title=`INVITI - ${Ge(x).hero.title}`;const H=new URL("/INVITI-Website/assets/favicon-D7u1khlg.webp",import.meta.url).href;let te=document.querySelector("link[rel='icon']");te||(te=document.createElement("link"),te.setAttribute("rel","icon"),document.head.appendChild(te)),te.setAttribute("type","image/svg+xml"),te.setAttribute("href",H)},[x]),v.useEffect(()=>{const H=np()||"/";de(H);const te=window.location.hash.slice(1);te&&(H==="/"||H==="")&&C(te);const ce=()=>{const we=np()||"/";de(we);const Ce=window.location.hash.slice(1);Ce&&(we==="/"||we==="")&&C(Ce)};return window.addEventListener("popstate",ce),()=>window.removeEventListener("popstate",ce)},[de]),v.useEffect(()=>{if(b.current){b.current=!1,l(n);return}d("fading-out");const H=setTimeout(()=>{l(n),j.current||window.scrollTo({top:0,behavior:"smooth"}),d("fading-in")},200),te=setTimeout(()=>{d("idle")},400);return()=>{clearTimeout(H),clearTimeout(te)}},[n]),v.useEffect(()=>{if(N&&n==="wireframe"){const H=setTimeout(()=>{const te=document.getElementById(N);if(te){const we=f==="mobile"?56:48,$e=localStorage.getItem("banner-dismissed")==="true"?64:64+we,Wt=te.getBoundingClientRect().top+window.pageYOffset-$e;window.scrollTo({top:Wt,behavior:"smooth"}),C("")}else console.warn(`Section ${N} not found`),C("")},350);return()=>clearTimeout(H)}},[N,n,f]);const W=o;return a.jsxs("div",{className:`min-h-screen page-transition ${c}`,children:[W==="help-center"?a.jsx("div",{className:"flex justify-center pt-8",children:a.jsx("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:a.jsx(qx,{locale:x,isMobile:f==="mobile",onBack:Q,onNavigate:se,onLocaleChange:fe,onScrollToPricing:le,onSetScrollTarget:C})})}):W==="instruction"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:a.jsx(hw,{locale:x,isMobile:f==="mobile",onNavigate:se,onLocaleChange:fe,onScrollToPricing:le,onSetScrollTarget:C})})}):W==="cookie-policy"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:a.jsx(Ix,{onBack:V,onManagePreferences:ee,isMobile:f==="mobile"})})}):W==="blog"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:a.jsx($w,{locale:x,isMobile:f==="mobile",onNavigate:se,onLocaleChange:fe,onScrollToPricing:le,onSetScrollTarget:C})})}):W==="blog-post"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:a.jsx(Vw,{locale:x,isMobile:f==="mobile",onNavigate:se,onLocaleChange:fe,onScrollToPricing:le,onSetScrollTarget:C})})}):W==="booking"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background border-2 border-gray-400 shadow-lg overflow-hidden`,children:a.jsx(TN,{locale:x,isMobile:f==="mobile",onNavigate:se,onLocaleChange:fe,onScrollToPricing:le,onSetScrollTarget:C})})}):W==="feature"&&h?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:[a.jsx(dn,{isMobile:f==="mobile",locale:x,onLocaleChange:fe,onNavigateToHelpCenter:J,onNavigate:se,onSetScrollTarget:C,showBanner:!1}),a.jsx("div",{className:"mt-32",children:a.jsx(LN,{featureId:h,isMobile:f==="mobile",locale:x,onBack:Z,onNavigate:se})}),a.jsx(fn,{isMobile:f==="mobile",locale:x,onNavigate:se,onNavigateToHelpCenter:J})]})}):W==="about"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:[a.jsx(dn,{isMobile:f==="mobile",locale:x,onLocaleChange:fe,onNavigateToHelpCenter:J,onNavigate:se,onSetScrollTarget:C,showBanner:!1}),a.jsx("div",{className:"mt-32",children:a.jsx(IN,{title:Ge(x).about.title,subtitle:Ge(x).about.subtitle,sections:[{body:Ge(x).about.section1Body},{body:Ge(x).about.section2Body},{body:Ge(x).about.section3Body}],isMobile:f==="mobile"})}),a.jsx(fn,{isMobile:f==="mobile",locale:x,onNavigate:se,onNavigateToHelpCenter:J})]})}):W==="terms"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:[a.jsx(dn,{isMobile:f==="mobile",locale:x,onLocaleChange:fe,onNavigateToHelpCenter:J,onNavigate:se,onSetScrollTarget:C,showBanner:!1}),a.jsx("div",{className:"mt-32",children:a.jsx(_N,{title:Ge(x).terms.title,subtitle:Ge(x).terms.subtitle,isMobile:f==="mobile"})}),a.jsx(fn,{isMobile:f==="mobile",locale:x,onNavigate:se,onNavigateToHelpCenter:J})]})}):a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${ae[f]} w-full transition-all duration-300 bg-background overflow-hidden`,children:[f==="mobile"&&a.jsx("div",{className:"bg-yellow-50 border-b-2 border-yellow-300 px-6 py-3",children:a.jsxs("p",{className:"text-xs text-gray-700",children:[a.jsx("strong",{children:"Mobile rules applied:"})," Fixed width text (343px), auto height, no clipping, 1-col stacks, 24px side padding."]})}),a.jsxs("div",{className:"locale-transition",children:[a.jsx(dn,{isMobile:f==="mobile",locale:x,onLocaleChange:fe,onNavigateToHelpCenter:J,onNavigate:se,onSetScrollTarget:C,showBanner:!0,onBannerAction:()=>se("/booking")}),a.jsx(h0,{isMobile:f==="mobile",locale:x,onNavigate:se}),a.jsx(w0,{isMobile:f==="mobile",onNavigate:se,locale:x}),a.jsx(M0,{isMobile:f==="mobile",locale:x,onNavigate:se}),a.jsx(fn,{isMobile:f==="mobile",locale:x,onNavigate:se,onNavigateToHelpCenter:J})]},x)]})}),W==="wireframe"&&k&&a.jsx(L0,{isMobile:f==="mobile",onAcceptAll:ie,onRejectNonEssential:A,onManagePreferences:ee,onViewPolicy:R,locale:x}),a.jsx(jx,{isOpen:S,onClose:()=>D(!1),preferences:L,onSave:K,isMobile:f==="mobile"}),a.jsx(T1,{isOpen:$,onClose:()=>F(!1),selectedPlan:z,isMobile:f==="mobile",locale:x,onNavigate:se,onScrollToPricing:()=>le()}),a.jsx(jN,{isOpen:Y,onClose:()=>ye(!1),locale:x,isMobile:f==="mobile"}),a.jsx(t2,{position:"top-center"})]})}wv.createRoot(document.getElementById("root")).render(a.jsx(BN,{}));
