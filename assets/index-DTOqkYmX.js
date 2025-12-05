function ay(n,s){for(var o=0;o<s.length;o++){const l=s[o];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in n)){const d=Object.getOwnPropertyDescriptor(l,c);d&&Object.defineProperty(n,c,d.get?d:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function Rp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zl={exports:{}},ps={},Jl={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function ly(){if(Df)return je;Df=1;var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function N(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function C(R,V,q){this.props=R,this.context=V,this.refs=b,this.updater=q||k}C.prototype.isReactComponent={},C.prototype.setState=function(R,V){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,V,"setState")},C.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function I(){}I.prototype=C.prototype;function S(R,V,q){this.props=R,this.context=V,this.refs=b,this.updater=q||k}var j=S.prototype=new I;j.constructor=S,T(j,C.prototype),j.isPureReactComponent=!0;var M=Array.isArray,$=Object.prototype.hasOwnProperty,z={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function F(R,V,q){var K,se={},de=null,W=null;if(V!=null)for(K in V.ref!==void 0&&(W=V.ref),V.key!==void 0&&(de=""+V.key),V)$.call(V,K)&&!L.hasOwnProperty(K)&&(se[K]=V[K]);var H=arguments.length-2;if(H===1)se.children=q;else if(1<H){for(var te=Array(H),ue=0;ue<H;ue++)te[ue]=arguments[ue+2];se.children=te}if(R&&R.defaultProps)for(K in H=R.defaultProps,H)se[K]===void 0&&(se[K]=H[K]);return{$$typeof:n,type:R,key:de,ref:W,props:se,_owner:z.current}}function oe(R,V){return{$$typeof:n,type:R.type,key:V,ref:R.ref,props:R.props,_owner:R._owner}}function ae(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function be(R){var V={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(q){return V[q]})}var le=/\/+/g;function ce(R,V){return typeof R=="object"&&R!==null&&R.key!=null?be(""+R.key):V.toString(36)}function ge(R,V,q,K,se){var de=typeof R;(de==="undefined"||de==="boolean")&&(R=null);var W=!1;if(R===null)W=!0;else switch(de){case"string":case"number":W=!0;break;case"object":switch(R.$$typeof){case n:case s:W=!0}}if(W)return W=R,se=se(W),R=K===""?"."+ce(W,0):K,M(se)?(q="",R!=null&&(q=R.replace(le,"$&/")+"/"),ge(se,V,q,"",function(ue){return ue})):se!=null&&(ae(se)&&(se=oe(se,q+(!se.key||W&&W.key===se.key?"":(""+se.key).replace(le,"$&/")+"/")+R)),V.push(se)),1;if(W=0,K=K===""?".":K+":",M(R))for(var H=0;H<R.length;H++){de=R[H];var te=K+ce(de,H);W+=ge(de,V,q,te,se)}else if(te=N(R),typeof te=="function")for(R=te.call(R),H=0;!(de=R.next()).done;)de=de.value,te=K+ce(de,H++),W+=ge(de,V,q,te,se);else if(de==="object")throw V=String(R),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return W}function re(R,V,q){if(R==null)return R;var K=[],se=0;return ge(R,K,"","",function(de){return V.call(q,de,se++)}),K}function X(R){if(R._status===-1){var V=R._result;V=V(),V.then(function(q){(R._status===0||R._status===-1)&&(R._status=1,R._result=q)},function(q){(R._status===0||R._status===-1)&&(R._status=2,R._result=q)}),R._status===-1&&(R._status=0,R._result=V)}if(R._status===1)return R._result.default;throw R._result}var ne={current:null},A={transition:null},Z={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:A,ReactCurrentOwner:z};function Y(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:re,forEach:function(R,V,q){re(R,function(){V.apply(this,arguments)},q)},count:function(R){var V=0;return re(R,function(){V++}),V},toArray:function(R){return re(R,function(V){return V})||[]},only:function(R){if(!ae(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},je.Component=C,je.Fragment=o,je.Profiler=c,je.PureComponent=S,je.StrictMode=l,je.Suspense=h,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,je.act=Y,je.cloneElement=function(R,V,q){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var K=T({},R.props),se=R.key,de=R.ref,W=R._owner;if(V!=null){if(V.ref!==void 0&&(de=V.ref,W=z.current),V.key!==void 0&&(se=""+V.key),R.type&&R.type.defaultProps)var H=R.type.defaultProps;for(te in V)$.call(V,te)&&!L.hasOwnProperty(te)&&(K[te]=V[te]===void 0&&H!==void 0?H[te]:V[te])}var te=arguments.length-2;if(te===1)K.children=q;else if(1<te){H=Array(te);for(var ue=0;ue<te;ue++)H[ue]=arguments[ue+2];K.children=H}return{$$typeof:n,type:R.type,key:se,ref:de,props:K,_owner:W}},je.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:d,_context:R},R.Consumer=R},je.createElement=F,je.createFactory=function(R){var V=F.bind(null,R);return V.type=R,V},je.createRef=function(){return{current:null}},je.forwardRef=function(R){return{$$typeof:p,render:R}},je.isValidElement=ae,je.lazy=function(R){return{$$typeof:w,_payload:{_status:-1,_result:R},_init:X}},je.memo=function(R,V){return{$$typeof:g,type:R,compare:V===void 0?null:V}},je.startTransition=function(R){var V=A.transition;A.transition={};try{R()}finally{A.transition=V}},je.unstable_act=Y,je.useCallback=function(R,V){return ne.current.useCallback(R,V)},je.useContext=function(R){return ne.current.useContext(R)},je.useDebugValue=function(){},je.useDeferredValue=function(R){return ne.current.useDeferredValue(R)},je.useEffect=function(R,V){return ne.current.useEffect(R,V)},je.useId=function(){return ne.current.useId()},je.useImperativeHandle=function(R,V,q){return ne.current.useImperativeHandle(R,V,q)},je.useInsertionEffect=function(R,V){return ne.current.useInsertionEffect(R,V)},je.useLayoutEffect=function(R,V){return ne.current.useLayoutEffect(R,V)},je.useMemo=function(R,V){return ne.current.useMemo(R,V)},je.useReducer=function(R,V,q){return ne.current.useReducer(R,V,q)},je.useRef=function(R){return ne.current.useRef(R)},je.useState=function(R){return ne.current.useState(R)},je.useSyncExternalStore=function(R,V,q){return ne.current.useSyncExternalStore(R,V,q)},je.useTransition=function(){return ne.current.useTransition()},je.version="18.3.1",je}var Lf;function Pc(){return Lf||(Lf=1,Jl.exports=ly()),Jl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function cy(){if(Bf)return ps;Bf=1;var n=Pc(),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,h,g){var w,v={},N=null,k=null;g!==void 0&&(N=""+g),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(k=h.ref);for(w in h)l.call(h,w)&&!d.hasOwnProperty(w)&&(v[w]=h[w]);if(p&&p.defaultProps)for(w in h=p.defaultProps,h)v[w]===void 0&&(v[w]=h[w]);return{$$typeof:s,type:p,key:N,ref:k,props:v,_owner:c.current}}return ps.Fragment=o,ps.jsx=f,ps.jsxs=f,ps}var zf;function uy(){return zf||(zf=1,Zl.exports=cy()),Zl.exports}var a=uy(),Mi={},ec={exports:{}},Ct={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function dy(){return $f||($f=1,(function(n){function s(A,Z){var Y=A.length;A.push(Z);e:for(;0<Y;){var R=Y-1>>>1,V=A[R];if(0<c(V,Z))A[R]=Z,A[Y]=V,Y=R;else break e}}function o(A){return A.length===0?null:A[0]}function l(A){if(A.length===0)return null;var Z=A[0],Y=A.pop();if(Y!==Z){A[0]=Y;e:for(var R=0,V=A.length,q=V>>>1;R<q;){var K=2*(R+1)-1,se=A[K],de=K+1,W=A[de];if(0>c(se,Y))de<V&&0>c(W,se)?(A[R]=W,A[de]=Y,R=de):(A[R]=se,A[K]=Y,R=K);else if(de<V&&0>c(W,Y))A[R]=W,A[de]=Y,R=de;else break e}}return Z}function c(A,Z){var Y=A.sortIndex-Z.sortIndex;return Y!==0?Y:A.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],g=[],w=1,v=null,N=3,k=!1,T=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(A){for(var Z=o(g);Z!==null;){if(Z.callback===null)l(g);else if(Z.startTime<=A)l(g),Z.sortIndex=Z.expirationTime,s(h,Z);else break;Z=o(g)}}function M(A){if(b=!1,j(A),!T)if(o(h)!==null)T=!0,X($);else{var Z=o(g);Z!==null&&ne(M,Z.startTime-A)}}function $(A,Z){T=!1,b&&(b=!1,I(F),F=-1),k=!0;var Y=N;try{for(j(Z),v=o(h);v!==null&&(!(v.expirationTime>Z)||A&&!be());){var R=v.callback;if(typeof R=="function"){v.callback=null,N=v.priorityLevel;var V=R(v.expirationTime<=Z);Z=n.unstable_now(),typeof V=="function"?v.callback=V:v===o(h)&&l(h),j(Z)}else l(h);v=o(h)}if(v!==null)var q=!0;else{var K=o(g);K!==null&&ne(M,K.startTime-Z),q=!1}return q}finally{v=null,N=Y,k=!1}}var z=!1,L=null,F=-1,oe=5,ae=-1;function be(){return!(n.unstable_now()-ae<oe)}function le(){if(L!==null){var A=n.unstable_now();ae=A;var Z=!0;try{Z=L(!0,A)}finally{Z?ce():(z=!1,L=null)}}else z=!1}var ce;if(typeof S=="function")ce=function(){S(le)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,re=ge.port2;ge.port1.onmessage=le,ce=function(){re.postMessage(null)}}else ce=function(){C(le,0)};function X(A){L=A,z||(z=!0,ce())}function ne(A,Z){F=C(function(){A(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){T||k||(T=!0,X($))},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(A){switch(N){case 1:case 2:case 3:var Z=3;break;default:Z=N}var Y=N;N=Z;try{return A()}finally{N=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,Z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var Y=N;N=A;try{return Z()}finally{N=Y}},n.unstable_scheduleCallback=function(A,Z,Y){var R=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?R+Y:R):Y=R,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Y+V,A={id:w++,callback:Z,priorityLevel:A,startTime:Y,expirationTime:V,sortIndex:-1},Y>R?(A.sortIndex=Y,s(g,A),o(h)===null&&A===o(g)&&(b?(I(F),F=-1):b=!0,ne(M,Y-R))):(A.sortIndex=V,s(h,A),T||k||(T=!0,X($))),A},n.unstable_shouldYield=be,n.unstable_wrapCallback=function(A){var Z=N;return function(){var Y=N;N=Z;try{return A.apply(this,arguments)}finally{N=Y}}}})(nc)),nc}var Ff;function fy(){return Ff||(Ff=1,tc.exports=dy()),tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function py(){if(Vf)return Ct;Vf=1;var n=Pc(),s=fy();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(c[e]=t,e=0;e<t.length;e++)l.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function N(e){return h.call(v,e)?!0:h.call(w,e)?!1:g.test(e)?v[e]=!0:(w[e]=!0,!1)}function k(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,r,i){if(t===null||typeof t>"u"||k(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,r,i,u,m,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=u,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=m,this.removeEmptyString=x}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,S);C[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,S);C[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,S);C[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function j(e,t,r,i){var u=C.hasOwnProperty(t)?C[t]:null;(u!==null?u.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,r,u,i)&&(r=null),i||u===null?N(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):u.mustUseProperty?e[u.propertyName]=r===null?u.type===3?!1:"":r:(t=u.attributeName,i=u.attributeNamespace,r===null?e.removeAttribute(t):(u=u.type,r=u===3||u===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var M=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),z=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),be=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),A=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,R;function V(e){if(R===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return`
`+R+e}var q=!1;function K(e,t){if(!e||q)return"";q=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(B){var i=B}Reflect.construct(e,[],t)}else{try{t.call()}catch(B){i=B}e.call(t.prototype)}else{try{throw Error()}catch(B){i=B}e()}}catch(B){if(B&&i&&typeof B.stack=="string"){for(var u=B.stack.split(`
`),m=i.stack.split(`
`),x=u.length-1,E=m.length-1;1<=x&&0<=E&&u[x]!==m[E];)E--;for(;1<=x&&0<=E;x--,E--)if(u[x]!==m[E]){if(x!==1||E!==1)do if(x--,E--,0>E||u[x]!==m[E]){var P=`
`+u[x].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=x&&0<=E);break}}}finally{q=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function se(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case z:return"Portal";case oe:return"Profiler";case F:return"StrictMode";case ce:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case be:return(e.displayName||"Context")+".Consumer";case ae:return(e._context.displayName||"Context")+".Provider";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=te(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,m=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(x){i=""+x,m.call(this,x)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(x){i=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ne(e){e._valueTracker||(e._valueTracker=ue(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=te(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Fe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function et(e,t){var r=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Wt(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=H(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ut(e,t){t=t.checked,t!=null&&j(e,"checked",t,!1)}function it(e,t){Ut(e,t);var r=H(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jt(e,t.type,r):t.hasOwnProperty("defaultValue")&&jt(e,t.type,H(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function To(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function jt(e,t,r){(t!=="number"||Fe(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ur=Array.isArray;function _n(e,t,r,i){if(e=e.options,t){t={};for(var u=0;u<r.length;u++)t["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=t.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&i&&(e[r].defaultSelected=!0)}else{for(r=""+H(r),t=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function at(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vn(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(ur(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:H(r)}}function Cs(e,t){var r=H(t.value),i=H(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,Dr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,u){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ot(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},An=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){An.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Es(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function js(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,u=Es(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,u):e[r]=u}}var Ts=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lr(e,t){if(t){if(Ts[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Po(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pr=null;function Dt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,Mn=null,yn=null;function Ro(e){if(e=Zo(e)){if(typeof _o!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Qs(t),_o(e.stateNode,e.type,t))}}function Ce(e){Mn?yn?yn.push(e):yn=[e]:Mn=e}function He(){if(Mn){var e=Mn,t=yn;if(yn=Mn=null,Ro(e),t)for(e=0;e<t.length;e++)Ro(t[e])}}function Ke(e,t){return e(t)}function ft(){}var On=!1;function Ye(e,t,r){if(On)return e(t,r);On=!0;try{return Ke(e,t,r)}finally{On=!1,(Mn!==null||yn!==null)&&(ft(),He())}}function tt(e,t){var r=e.stateNode;if(r===null)return null;var i=Qs(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var Dn=!1;if(p)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){Dn=!0}}),window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{Dn=!1}function Tt(e,t,r,i,u,m,x,E,P){var B=Array.prototype.slice.call(arguments,3);try{t.apply(r,B)}catch(G){this.onError(G)}}var Ln=!1,Lt=null,Ao=!1,va=null,mg={onError:function(e){Ln=!0,Lt=e}};function hg(e,t,r,i,u,m,x,E,P){Ln=!1,Lt=null,Tt.apply(mg,arguments)}function gg(e,t,r,i,u,m,x,E,P){if(hg.apply(this,arguments),Ln){if(Ln){var B=Lt;Ln=!1,Lt=null}else throw Error(o(198));Ao||(Ao=!0,va=B)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(mr(e)!==e)throw Error(o(188))}function vg(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,i=t;;){var u=r.return;if(u===null)break;var m=u.alternate;if(m===null){if(i=u.return,i!==null){r=i;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===r)return su(u),e;if(m===i)return su(u),t;m=m.sibling}throw Error(o(188))}if(r.return!==i.return)r=u,i=m;else{for(var x=!1,E=u.child;E;){if(E===r){x=!0,r=u,i=m;break}if(E===i){x=!0,i=u,r=m;break}E=E.sibling}if(!x){for(E=m.child;E;){if(E===r){x=!0,r=m,i=u;break}if(E===i){x=!0,i=m,r=u;break}E=E.sibling}if(!x)throw Error(o(189))}}if(r.alternate!==i)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function iu(e){return e=vg(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var lu=s.unstable_scheduleCallback,cu=s.unstable_cancelCallback,yg=s.unstable_shouldYield,xg=s.unstable_requestPaint,We=s.unstable_now,wg=s.unstable_getCurrentPriorityLevel,ya=s.unstable_ImmediatePriority,uu=s.unstable_UserBlockingPriority,Is=s.unstable_NormalPriority,bg=s.unstable_LowPriority,du=s.unstable_IdlePriority,Ps=null,rn=null;function Ng(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Sg,kg=Math.log,Cg=Math.LN2;function Sg(e){return e>>>=0,e===0?32:31-(kg(e)/Cg|0)|0}var _s=64,Rs=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,u=e.suspendedLanes,m=e.pingedLanes,x=r&268435455;if(x!==0){var E=x&~u;E!==0?i=Mo(E):(m&=x,m!==0&&(i=Mo(m)))}else x=r&~u,x!==0?i=Mo(x):m!==0&&(i=Mo(m));if(i===0)return 0;if(t!==0&&t!==i&&(t&u)===0&&(u=i&-i,m=t&-t,u>=m||u===16&&(m&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Gt(t),u=1<<r,i|=e[r],t&=~u;return i}function Eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,m=e.pendingLanes;0<m;){var x=31-Gt(m),E=1<<x,P=u[x];P===-1?((E&r)===0||(E&i)!==0)&&(u[x]=Eg(E,t)):P<=t&&(e.expiredLanes|=E),m&=~E}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=_s;return _s<<=1,(_s&4194240)===0&&(_s=64),e}function wa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Oo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=r}function Tg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var u=31-Gt(r),m=1<<u;t[u]=0,i[u]=-1,e[u]=-1,r&=~m}}function ba(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Gt(r),u=1<<i;u&t|e[i]&t&&(e[i]|=t),r&=~u}}var _e=0;function pu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mu,Na,hu,gu,vu,ka=!1,Ms=[],Bn=null,zn=null,$n=null,Do=new Map,Lo=new Map,Fn=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Do.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function Bo(e,t,r,i,u,m){return e===null||e.nativeEvent!==m?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:m,targetContainers:[u]},t!==null&&(t=Zo(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Pg(e,t,r,i,u){switch(t){case"focusin":return Bn=Bo(Bn,e,t,r,i,u),!0;case"dragenter":return zn=Bo(zn,e,t,r,i,u),!0;case"mouseover":return $n=Bo($n,e,t,r,i,u),!0;case"pointerover":var m=u.pointerId;return Do.set(m,Bo(Do.get(m)||null,e,t,r,i,u)),!0;case"gotpointercapture":return m=u.pointerId,Lo.set(m,Bo(Lo.get(m)||null,e,t,r,i,u)),!0}return!1}function xu(e){var t=hr(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=ou(r),t!==null){e.blockedOn=t,vu(e.priority,function(){hu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);pr=i,r.target.dispatchEvent(i),pr=null}else return t=Zo(r),t!==null&&Na(t),e.blockedOn=r,!1;t.shift()}return!0}function wu(e,t,r){Os(e)&&r.delete(t)}function _g(){ka=!1,Bn!==null&&Os(Bn)&&(Bn=null),zn!==null&&Os(zn)&&(zn=null),$n!==null&&Os($n)&&($n=null),Do.forEach(wu),Lo.forEach(wu)}function zo(e,t){e.blockedOn===t&&(e.blockedOn=null,ka||(ka=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_g)))}function $o(e){function t(u){return zo(u,e)}if(0<Ms.length){zo(Ms[0],e);for(var r=1;r<Ms.length;r++){var i=Ms[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Bn!==null&&zo(Bn,e),zn!==null&&zo(zn,e),$n!==null&&zo($n,e),Do.forEach(t),Lo.forEach(t),r=0;r<Fn.length;r++)i=Fn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Fn.length&&(r=Fn[0],r.blockedOn===null);)xu(r),r.blockedOn===null&&Fn.shift()}var Br=M.ReactCurrentBatchConfig,Ds=!0;function Rg(e,t,r,i){var u=_e,m=Br.transition;Br.transition=null;try{_e=1,Ca(e,t,r,i)}finally{_e=u,Br.transition=m}}function Ag(e,t,r,i){var u=_e,m=Br.transition;Br.transition=null;try{_e=4,Ca(e,t,r,i)}finally{_e=u,Br.transition=m}}function Ca(e,t,r,i){if(Ds){var u=Sa(e,t,r,i);if(u===null)Va(e,t,i,Ls,r),yu(e,i);else if(Pg(u,e,t,r,i))i.stopPropagation();else if(yu(e,i),t&4&&-1<Ig.indexOf(e)){for(;u!==null;){var m=Zo(u);if(m!==null&&mu(m),m=Sa(e,t,r,i),m===null&&Va(e,t,i,Ls,r),m===u)break;u=m}u!==null&&i.stopPropagation()}else Va(e,t,i,null,r)}}var Ls=null;function Sa(e,t,r,i){if(Ls=null,e=Dt(i),e=hr(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ou(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ls=e,null}function bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case ya:return 1;case uu:return 4;case Is:case bg:return 16;case du:return 536870912;default:return 16}default:return 16}}var Vn=null,Ea=null,Bs=null;function Nu(){if(Bs)return Bs;var e,t=Ea,r=t.length,i,u="value"in Vn?Vn.value:Vn.textContent,m=u.length;for(e=0;e<r&&t[e]===u[e];e++);var x=r-e;for(i=1;i<=x&&t[r-i]===u[m-i];i++);return Bs=u.slice(e,1<i?1-i:void 0)}function zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function ku(){return!1}function It(e){function t(r,i,u,m,x){this._reactName=r,this._targetInst=u,this.type=i,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$s:ku,this.isPropagationStopped=ku,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=It(zr),Fo=Y({},zr,{view:0,detail:0}),Mg=It(Fo),Ta,Ia,Vo,Fs=Y({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Ta=e.screenX-Vo.screenX,Ia=e.screenY-Vo.screenY):Ia=Ta=0,Vo=e),Ta)},movementY:function(e){return"movementY"in e?e.movementY:Ia}}),Cu=It(Fs),Og=Y({},Fs,{dataTransfer:0}),Dg=It(Og),Lg=Y({},Fo,{relatedTarget:0}),Pa=It(Lg),Bg=Y({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),zg=It(Bg),$g=Y({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=It($g),Vg=Y({},zr,{data:0}),Su=It(Vg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function _a(){return Gg}var Yg=Y({},Fo,{key:function(e){if(e.key){var t=Hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qg=It(Yg),Qg=Y({},Fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eu=It(Qg),Kg=Y({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),Xg=It(Kg),Zg=Y({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=It(Zg),ev=Y({},Fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=It(ev),nv=[9,13,27,32],Ra=p&&"CompositionEvent"in window,Ho=null;p&&"documentMode"in document&&(Ho=document.documentMode);var rv=p&&"TextEvent"in window&&!Ho,ju=p&&(!Ra||Ho&&8<Ho&&11>=Ho),Tu=" ",Iu=!1;function Pu(e,t){switch(e){case"keyup":return nv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function ov(e,t){switch(e){case"compositionend":return _u(t);case"keypress":return t.which!==32?null:(Iu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Iu?null:e;default:return null}}function sv(e,t){if($r)return e==="compositionend"||!Ra&&Pu(e,t)?(e=Nu(),Bs=Ea=Vn=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!iv[e.type]:t==="textarea"}function Au(e,t,r,i){Ce(i),t=Gs(t,"onChange"),0<t.length&&(r=new ja("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Wo=null,Uo=null;function av(e){Xu(e,0)}function Vs(e){var t=Ur(e);if(Se(t))return e}function lv(e,t){if(e==="change")return t}var Mu=!1;if(p){var Aa;if(p){var Ma="oninput"in document;if(!Ma){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Ma=typeof Ou.oninput=="function"}Aa=Ma}else Aa=!1;Mu=Aa&&(!document.documentMode||9<document.documentMode)}function Du(){Wo&&(Wo.detachEvent("onpropertychange",Lu),Uo=Wo=null)}function Lu(e){if(e.propertyName==="value"&&Vs(Uo)){var t=[];Au(t,Uo,e,Dt(e)),Ye(av,t)}}function cv(e,t,r){e==="focusin"?(Du(),Wo=t,Uo=r,Wo.attachEvent("onpropertychange",Lu)):e==="focusout"&&Du()}function uv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(Uo)}function dv(e,t){if(e==="click")return Vs(t)}function fv(e,t){if(e==="input"||e==="change")return Vs(t)}function pv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:pv;function Go(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var u=r[i];if(!h.call(t,u)||!Yt(e[u],t[u]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var r=Bu(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bu(r)}}function $u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fu(){for(var e=window,t=Fe();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Fe(e.document)}return t}function Oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mv(e){var t=Fu(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&$u(r.ownerDocument.documentElement,r)){if(i!==null&&Oa(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=r.textContent.length,m=Math.min(i.start,u);i=i.end===void 0?m:Math.min(i.end,u),!e.extend&&m>i&&(u=i,i=m,m=u),u=zu(r,m);var x=zu(r,i);u&&x&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),m>i?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hv=p&&"documentMode"in document&&11>=document.documentMode,Fr=null,Da=null,Yo=null,La=!1;function Vu(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;La||Fr==null||Fr!==Fe(i)||(i=Fr,"selectionStart"in i&&Oa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&Go(Yo,i)||(Yo=i,i=Gs(Da,"onSelect"),0<i.length&&(t=new ja("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Fr)))}function Hs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Vr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},Ba={},Hu={};p&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Ws(e){if(Ba[e])return Ba[e];if(!Vr[e])return e;var t=Vr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Hu)return Ba[e]=t[r];return e}var Wu=Ws("animationend"),Uu=Ws("animationiteration"),Gu=Ws("animationstart"),Yu=Ws("transitionend"),qu=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){qu.set(e,t),d(t,[e])}for(var za=0;za<Qu.length;za++){var $a=Qu[za],gv=$a.toLowerCase(),vv=$a[0].toUpperCase()+$a.slice(1);Hn(gv,"on"+vv)}Hn(Wu,"onAnimationEnd"),Hn(Uu,"onAnimationIteration"),Hn(Gu,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Yu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Ku(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,gg(i,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],u=i.event;i=i.listeners;e:{var m=void 0;if(t)for(var x=i.length-1;0<=x;x--){var E=i[x],P=E.instance,B=E.currentTarget;if(E=E.listener,P!==m&&u.isPropagationStopped())break e;Ku(u,E,B),m=P}else for(x=0;x<i.length;x++){if(E=i[x],P=E.instance,B=E.currentTarget,E=E.listener,P!==m&&u.isPropagationStopped())break e;Ku(u,E,B),m=P}}}if(Ao)throw e=va,Ao=!1,va=null,e}function Me(e,t){var r=t[qa];r===void 0&&(r=t[qa]=new Set);var i=e+"__bubble";r.has(i)||(Zu(t,e,2,!1),r.add(i))}function Fa(e,t,r){var i=0;t&&(i|=4),Zu(r,e,i,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Us]){e[Us]=!0,l.forEach(function(r){r!=="selectionchange"&&(yv.has(r)||Fa(r,!1,e),Fa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,Fa("selectionchange",!1,t))}}function Zu(e,t,r,i){switch(bu(t)){case 1:var u=Rg;break;case 4:u=Ag;break;default:u=Ca}r=u.bind(null,t,r,e),u=void 0,!Dn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,r,{capture:!0,passive:u}):e.addEventListener(t,r,!0):u!==void 0?e.addEventListener(t,r,{passive:u}):e.addEventListener(t,r,!1)}function Va(e,t,r,i,u){var m=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var x=i.tag;if(x===3||x===4){var E=i.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(x===4)for(x=i.return;x!==null;){var P=x.tag;if((P===3||P===4)&&(P=x.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;x=x.return}for(;E!==null;){if(x=hr(E),x===null)return;if(P=x.tag,P===5||P===6){i=m=x;continue e}E=E.parentNode}}i=i.return}Ye(function(){var B=m,G=Dt(r),Q=[];e:{var U=qu.get(e);if(U!==void 0){var ie=ja,pe=e;switch(e){case"keypress":if(zs(r)===0)break e;case"keydown":case"keyup":ie=qg;break;case"focusin":pe="focus",ie=Pa;break;case"focusout":pe="blur",ie=Pa;break;case"beforeblur":case"afterblur":ie=Pa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Xg;break;case Wu:case Uu:case Gu:ie=zg;break;case Yu:ie=Jg;break;case"scroll":ie=Mg;break;case"wheel":ie=tv;break;case"copy":case"cut":case"paste":ie=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Eu}var ve=(t&4)!==0,Ue=!ve&&e==="scroll",O=ve?U!==null?U+"Capture":null:U;ve=[];for(var _=B,D;_!==null;){D=_;var J=D.stateNode;if(D.tag===5&&J!==null&&(D=J,O!==null&&(J=tt(_,O),J!=null&&ve.push(Ko(_,J,D)))),Ue)break;_=_.return}0<ve.length&&(U=new ie(U,pe,null,r,G),Q.push({event:U,listeners:ve}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",ie=e==="mouseout"||e==="pointerout",U&&r!==pr&&(pe=r.relatedTarget||r.fromElement)&&(hr(pe)||pe[xn]))break e;if((ie||U)&&(U=G.window===G?G:(U=G.ownerDocument)?U.defaultView||U.parentWindow:window,ie?(pe=r.relatedTarget||r.toElement,ie=B,pe=pe?hr(pe):null,pe!==null&&(Ue=mr(pe),pe!==Ue||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(ie=null,pe=B),ie!==pe)){if(ve=Cu,J="onMouseLeave",O="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Eu,J="onPointerLeave",O="onPointerEnter",_="pointer"),Ue=ie==null?U:Ur(ie),D=pe==null?U:Ur(pe),U=new ve(J,_+"leave",ie,r,G),U.target=Ue,U.relatedTarget=D,J=null,hr(G)===B&&(ve=new ve(O,_+"enter",pe,r,G),ve.target=D,ve.relatedTarget=Ue,J=ve),Ue=J,ie&&pe)t:{for(ve=ie,O=pe,_=0,D=ve;D;D=Hr(D))_++;for(D=0,J=O;J;J=Hr(J))D++;for(;0<_-D;)ve=Hr(ve),_--;for(;0<D-_;)O=Hr(O),D--;for(;_--;){if(ve===O||O!==null&&ve===O.alternate)break t;ve=Hr(ve),O=Hr(O)}ve=null}else ve=null;ie!==null&&Ju(Q,U,ie,ve,!1),pe!==null&&Ue!==null&&Ju(Q,Ue,pe,ve,!0)}}e:{if(U=B?Ur(B):window,ie=U.nodeName&&U.nodeName.toLowerCase(),ie==="select"||ie==="input"&&U.type==="file")var ye=lv;else if(Ru(U))if(Mu)ye=fv;else{ye=uv;var xe=cv}else(ie=U.nodeName)&&ie.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(ye=dv);if(ye&&(ye=ye(e,B))){Au(Q,ye,r,G);break e}xe&&xe(e,U,B),e==="focusout"&&(xe=U._wrapperState)&&xe.controlled&&U.type==="number"&&jt(U,"number",U.value)}switch(xe=B?Ur(B):window,e){case"focusin":(Ru(xe)||xe.contentEditable==="true")&&(Fr=xe,Da=B,Yo=null);break;case"focusout":Yo=Da=Fr=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Vu(Q,r,G);break;case"selectionchange":if(hv)break;case"keydown":case"keyup":Vu(Q,r,G)}var we;if(Ra)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else $r?Pu(e,r)&&(ke="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ke="onCompositionStart");ke&&(ju&&r.locale!=="ko"&&($r||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&$r&&(we=Nu()):(Vn=G,Ea="value"in Vn?Vn.value:Vn.textContent,$r=!0)),xe=Gs(B,ke),0<xe.length&&(ke=new Su(ke,e,null,r,G),Q.push({event:ke,listeners:xe}),we?ke.data=we:(we=_u(r),we!==null&&(ke.data=we)))),(we=rv?ov(e,r):sv(e,r))&&(B=Gs(B,"onBeforeInput"),0<B.length&&(G=new Su("onBeforeInput","beforeinput",null,r,G),Q.push({event:G,listeners:B}),G.data=we))}Xu(Q,t)})}function Ko(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gs(e,t){for(var r=t+"Capture",i=[];e!==null;){var u=e,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=tt(e,r),m!=null&&i.unshift(Ko(e,m,u)),m=tt(e,t),m!=null&&i.push(Ko(e,m,u))),e=e.return}return i}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ju(e,t,r,i,u){for(var m=t._reactName,x=[];r!==null&&r!==i;){var E=r,P=E.alternate,B=E.stateNode;if(P!==null&&P===i)break;E.tag===5&&B!==null&&(E=B,u?(P=tt(r,m),P!=null&&x.unshift(Ko(r,P,E))):u||(P=tt(r,m),P!=null&&x.push(Ko(r,P,E)))),r=r.return}x.length!==0&&e.push({event:t,listeners:x})}var xv=/\r\n?/g,wv=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(xv,`
`).replace(wv,"")}function Ys(e,t,r){if(t=ed(t),ed(e)!==t&&r)throw Error(o(425))}function qs(){}var Ha=null,Wa=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ga=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(kv)}:Ga;function kv(e){setTimeout(function(){throw e})}function Ya(e,t){var r=t,i=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(i===0){e.removeChild(u),$o(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=u}while(r);$o(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),on="__reactFiber$"+Wr,Xo="__reactProps$"+Wr,xn="__reactContainer$"+Wr,qa="__reactEvents$"+Wr,Cv="__reactListeners$"+Wr,Sv="__reactHandles$"+Wr;function hr(e){var t=e[on];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xn]||r[on]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nd(e);e!==null;){if(r=e[on])return r;e=nd(e)}return t}e=r,r=e.parentNode}return null}function Zo(e){return e=e[on]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Qs(e){return e[Xo]||null}var Qa=[],Gr=-1;function Un(e){return{current:e}}function Oe(e){0>Gr||(e.current=Qa[Gr],Qa[Gr]=null,Gr--)}function Ae(e,t){Gr++,Qa[Gr]=e.current,e.current=t}var Gn={},pt=Un(Gn),xt=Un(!1),gr=Gn;function Yr(e,t){var r=e.type.contextTypes;if(!r)return Gn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in r)u[m]=t[m];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function wt(e){return e=e.childContextTypes,e!=null}function Ks(){Oe(xt),Oe(pt)}function rd(e,t,r){if(pt.current!==Gn)throw Error(o(168));Ae(pt,t),Ae(xt,r)}function od(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var u in i)if(!(u in t))throw Error(o(108,W(e)||"Unknown",u));return Y({},r,i)}function Xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,gr=pt.current,Ae(pt,e),Ae(xt,xt.current),!0}function sd(e,t,r){var i=e.stateNode;if(!i)throw Error(o(169));r?(e=od(e,t,gr),i.__reactInternalMemoizedMergedChildContext=e,Oe(xt),Oe(pt),Ae(pt,e)):Oe(xt),Ae(xt,r)}var wn=null,Zs=!1,Ka=!1;function id(e){wn===null?wn=[e]:wn.push(e)}function Ev(e){Zs=!0,id(e)}function Yn(){if(!Ka&&wn!==null){Ka=!0;var e=0,t=_e;try{var r=wn;for(_e=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}wn=null,Zs=!1}catch(u){throw wn!==null&&(wn=wn.slice(e+1)),lu(ya,Yn),u}finally{_e=t,Ka=!1}}return null}var qr=[],Qr=0,Js=null,ei=0,Bt=[],zt=0,vr=null,bn=1,Nn="";function yr(e,t){qr[Qr++]=ei,qr[Qr++]=Js,Js=e,ei=t}function ad(e,t,r){Bt[zt++]=bn,Bt[zt++]=Nn,Bt[zt++]=vr,vr=e;var i=bn;e=Nn;var u=32-Gt(i)-1;i&=~(1<<u),r+=1;var m=32-Gt(t)+u;if(30<m){var x=u-u%5;m=(i&(1<<x)-1).toString(32),i>>=x,u-=x,bn=1<<32-Gt(t)+u|r<<u|i,Nn=m+e}else bn=1<<m|r<<u|i,Nn=e}function Xa(e){e.return!==null&&(yr(e,1),ad(e,1,0))}function Za(e){for(;e===Js;)Js=qr[--Qr],qr[Qr]=null,ei=qr[--Qr],qr[Qr]=null;for(;e===vr;)vr=Bt[--zt],Bt[zt]=null,Nn=Bt[--zt],Bt[zt]=null,bn=Bt[--zt],Bt[zt]=null}var Pt=null,_t=null,Le=!1,qt=null;function ld(e,t){var r=Ht(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function cd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,_t=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vr!==null?{id:bn,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ht(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pt=e,_t=null,!0):!1;default:return!1}}function Ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(Le){var t=_t;if(t){var r=t;if(!cd(e,t)){if(Ja(e))throw Error(o(418));t=Wn(r.nextSibling);var i=Pt;t&&cd(e,t)?ld(i,r):(e.flags=e.flags&-4097|2,Le=!1,Pt=e)}}else{if(Ja(e))throw Error(o(418));e.flags=e.flags&-4097|2,Le=!1,Pt=e}}}function ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function ti(e){if(e!==Pt)return!1;if(!Le)return ud(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=_t)){if(Ja(e))throw dd(),Error(o(418));for(;t;)ld(e,t),t=Wn(t.nextSibling)}if(ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_t=Wn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Pt?Wn(e.stateNode.nextSibling):null;return!0}function dd(){for(var e=_t;e;)e=Wn(e.nextSibling)}function Kr(){_t=Pt=null,Le=!1}function tl(e){qt===null?qt=[e]:qt.push(e)}var jv=M.ReactCurrentBatchConfig;function Jo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var i=r.stateNode}if(!i)throw Error(o(147,e));var u=i,m=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===m?t.ref:(t=function(x){var E=u.refs;x===null?delete E[m]:E[m]=x},t._stringRef=m,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fd(e){var t=e._init;return t(e._payload)}function pd(e){function t(O,_){if(e){var D=O.deletions;D===null?(O.deletions=[_],O.flags|=16):D.push(_)}}function r(O,_){if(!e)return null;for(;_!==null;)t(O,_),_=_.sibling;return null}function i(O,_){for(O=new Map;_!==null;)_.key!==null?O.set(_.key,_):O.set(_.index,_),_=_.sibling;return O}function u(O,_){return O=tr(O,_),O.index=0,O.sibling=null,O}function m(O,_,D){return O.index=D,e?(D=O.alternate,D!==null?(D=D.index,D<_?(O.flags|=2,_):D):(O.flags|=2,_)):(O.flags|=1048576,_)}function x(O){return e&&O.alternate===null&&(O.flags|=2),O}function E(O,_,D,J){return _===null||_.tag!==6?(_=Gl(D,O.mode,J),_.return=O,_):(_=u(_,D),_.return=O,_)}function P(O,_,D,J){var ye=D.type;return ye===L?G(O,_,D.props.children,J,D.key):_!==null&&(_.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===X&&fd(ye)===_.type)?(J=u(_,D.props),J.ref=Jo(O,_,D),J.return=O,J):(J=Ei(D.type,D.key,D.props,null,O.mode,J),J.ref=Jo(O,_,D),J.return=O,J)}function B(O,_,D,J){return _===null||_.tag!==4||_.stateNode.containerInfo!==D.containerInfo||_.stateNode.implementation!==D.implementation?(_=Yl(D,O.mode,J),_.return=O,_):(_=u(_,D.children||[]),_.return=O,_)}function G(O,_,D,J,ye){return _===null||_.tag!==7?(_=Er(D,O.mode,J,ye),_.return=O,_):(_=u(_,D),_.return=O,_)}function Q(O,_,D){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gl(""+_,O.mode,D),_.return=O,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $:return D=Ei(_.type,_.key,_.props,null,O.mode,D),D.ref=Jo(O,null,_),D.return=O,D;case z:return _=Yl(_,O.mode,D),_.return=O,_;case X:var J=_._init;return Q(O,J(_._payload),D)}if(ur(_)||Z(_))return _=Er(_,O.mode,D,null),_.return=O,_;ni(O,_)}return null}function U(O,_,D,J){var ye=_!==null?_.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return ye!==null?null:E(O,_,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $:return D.key===ye?P(O,_,D,J):null;case z:return D.key===ye?B(O,_,D,J):null;case X:return ye=D._init,U(O,_,ye(D._payload),J)}if(ur(D)||Z(D))return ye!==null?null:G(O,_,D,J,null);ni(O,D)}return null}function ie(O,_,D,J,ye){if(typeof J=="string"&&J!==""||typeof J=="number")return O=O.get(D)||null,E(_,O,""+J,ye);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case $:return O=O.get(J.key===null?D:J.key)||null,P(_,O,J,ye);case z:return O=O.get(J.key===null?D:J.key)||null,B(_,O,J,ye);case X:var xe=J._init;return ie(O,_,D,xe(J._payload),ye)}if(ur(J)||Z(J))return O=O.get(D)||null,G(_,O,J,ye,null);ni(_,J)}return null}function pe(O,_,D,J){for(var ye=null,xe=null,we=_,ke=_=0,ot=null;we!==null&&ke<D.length;ke++){we.index>ke?(ot=we,we=null):ot=we.sibling;var Ie=U(O,we,D[ke],J);if(Ie===null){we===null&&(we=ot);break}e&&we&&Ie.alternate===null&&t(O,we),_=m(Ie,_,ke),xe===null?ye=Ie:xe.sibling=Ie,xe=Ie,we=ot}if(ke===D.length)return r(O,we),Le&&yr(O,ke),ye;if(we===null){for(;ke<D.length;ke++)we=Q(O,D[ke],J),we!==null&&(_=m(we,_,ke),xe===null?ye=we:xe.sibling=we,xe=we);return Le&&yr(O,ke),ye}for(we=i(O,we);ke<D.length;ke++)ot=ie(we,O,ke,D[ke],J),ot!==null&&(e&&ot.alternate!==null&&we.delete(ot.key===null?ke:ot.key),_=m(ot,_,ke),xe===null?ye=ot:xe.sibling=ot,xe=ot);return e&&we.forEach(function(nr){return t(O,nr)}),Le&&yr(O,ke),ye}function ve(O,_,D,J){var ye=Z(D);if(typeof ye!="function")throw Error(o(150));if(D=ye.call(D),D==null)throw Error(o(151));for(var xe=ye=null,we=_,ke=_=0,ot=null,Ie=D.next();we!==null&&!Ie.done;ke++,Ie=D.next()){we.index>ke?(ot=we,we=null):ot=we.sibling;var nr=U(O,we,Ie.value,J);if(nr===null){we===null&&(we=ot);break}e&&we&&nr.alternate===null&&t(O,we),_=m(nr,_,ke),xe===null?ye=nr:xe.sibling=nr,xe=nr,we=ot}if(Ie.done)return r(O,we),Le&&yr(O,ke),ye;if(we===null){for(;!Ie.done;ke++,Ie=D.next())Ie=Q(O,Ie.value,J),Ie!==null&&(_=m(Ie,_,ke),xe===null?ye=Ie:xe.sibling=Ie,xe=Ie);return Le&&yr(O,ke),ye}for(we=i(O,we);!Ie.done;ke++,Ie=D.next())Ie=ie(we,O,ke,Ie.value,J),Ie!==null&&(e&&Ie.alternate!==null&&we.delete(Ie.key===null?ke:Ie.key),_=m(Ie,_,ke),xe===null?ye=Ie:xe.sibling=Ie,xe=Ie);return e&&we.forEach(function(iy){return t(O,iy)}),Le&&yr(O,ke),ye}function Ue(O,_,D,J){if(typeof D=="object"&&D!==null&&D.type===L&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case $:e:{for(var ye=D.key,xe=_;xe!==null;){if(xe.key===ye){if(ye=D.type,ye===L){if(xe.tag===7){r(O,xe.sibling),_=u(xe,D.props.children),_.return=O,O=_;break e}}else if(xe.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===X&&fd(ye)===xe.type){r(O,xe.sibling),_=u(xe,D.props),_.ref=Jo(O,xe,D),_.return=O,O=_;break e}r(O,xe);break}else t(O,xe);xe=xe.sibling}D.type===L?(_=Er(D.props.children,O.mode,J,D.key),_.return=O,O=_):(J=Ei(D.type,D.key,D.props,null,O.mode,J),J.ref=Jo(O,_,D),J.return=O,O=J)}return x(O);case z:e:{for(xe=D.key;_!==null;){if(_.key===xe)if(_.tag===4&&_.stateNode.containerInfo===D.containerInfo&&_.stateNode.implementation===D.implementation){r(O,_.sibling),_=u(_,D.children||[]),_.return=O,O=_;break e}else{r(O,_);break}else t(O,_);_=_.sibling}_=Yl(D,O.mode,J),_.return=O,O=_}return x(O);case X:return xe=D._init,Ue(O,_,xe(D._payload),J)}if(ur(D))return pe(O,_,D,J);if(Z(D))return ve(O,_,D,J);ni(O,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,_!==null&&_.tag===6?(r(O,_.sibling),_=u(_,D),_.return=O,O=_):(r(O,_),_=Gl(D,O.mode,J),_.return=O,O=_),x(O)):r(O,_)}return Ue}var Xr=pd(!0),md=pd(!1),ri=Un(null),oi=null,Zr=null,nl=null;function rl(){nl=Zr=oi=null}function ol(e){var t=ri.current;Oe(ri),e._currentValue=t}function sl(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Jr(e,t){oi=e,nl=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(bt=!0),e.firstContext=null)}function $t(e){var t=e._currentValue;if(nl!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(oi===null)throw Error(o(308));Zr=e,oi.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var xr=null;function il(e){xr===null?xr=[e]:xr.push(e)}function hd(e,t,r,i){var u=t.interleaved;return u===null?(r.next=r,il(t)):(r.next=u.next,u.next=r),t.interleaved=r,kn(e,i)}function kn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var qn=!1;function al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Te&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,kn(e,r)}return u=i.interleaved,u===null?(t.next=t,il(i)):(t.next=u.next,u.next=t),i.interleaved=t,kn(e,r)}function si(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,ba(e,r)}}function vd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var u=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var x={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};m===null?u=m=x:m=m.next=x,r=r.next}while(r!==null);m===null?u=m=t:m=m.next=t}else u=m=t;r={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ii(e,t,r,i){var u=e.updateQueue;qn=!1;var m=u.firstBaseUpdate,x=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var P=E,B=P.next;P.next=null,x===null?m=B:x.next=B,x=P;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==x&&(E===null?G.firstBaseUpdate=B:E.next=B,G.lastBaseUpdate=P))}if(m!==null){var Q=u.baseState;x=0,G=B=P=null,E=m;do{var U=E.lane,ie=E.eventTime;if((i&U)===U){G!==null&&(G=G.next={eventTime:ie,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var pe=e,ve=E;switch(U=t,ie=r,ve.tag){case 1:if(pe=ve.payload,typeof pe=="function"){Q=pe.call(ie,Q,U);break e}Q=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ve.payload,U=typeof pe=="function"?pe.call(ie,Q,U):pe,U==null)break e;Q=Y({},Q,U);break e;case 2:qn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,U=u.effects,U===null?u.effects=[E]:U.push(E))}else ie={eventTime:ie,lane:U,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(B=G=ie,P=Q):G=G.next=ie,x|=U;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;U=E,E=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);if(G===null&&(P=Q),u.baseState=P,u.firstBaseUpdate=B,u.lastBaseUpdate=G,t=u.shared.interleaved,t!==null){u=t;do x|=u.lane,u=u.next;while(u!==t)}else m===null&&(u.shared.lanes=0);Nr|=x,e.lanes=x,e.memoizedState=Q}}function yd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],u=i.callback;if(u!==null){if(i.callback=null,i=r,typeof u!="function")throw Error(o(191,u));u.call(i)}}}var es={},sn=Un(es),ts=Un(es),ns=Un(es);function wr(e){if(e===es)throw Error(o(174));return e}function ll(e,t){switch(Ae(ns,t),Ae(ts,e),Ae(sn,es),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}Oe(sn),Ae(sn,t)}function eo(){Oe(sn),Oe(ts),Oe(ns)}function xd(e){wr(ns.current);var t=wr(sn.current),r=Io(t,e.type);t!==r&&(Ae(ts,e),Ae(sn,r))}function cl(e){ts.current===e&&(Oe(sn),Oe(ts))}var ze=Un(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function dl(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var li=M.ReactCurrentDispatcher,fl=M.ReactCurrentBatchConfig,br=0,$e=null,Xe=null,nt=null,ci=!1,rs=!1,os=0,Tv=0;function mt(){throw Error(o(321))}function pl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Yt(e[r],t[r]))return!1;return!0}function ml(e,t,r,i,u,m){if(br=m,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?Rv:Av,e=r(i,u),rs){m=0;do{if(rs=!1,os=0,25<=m)throw Error(o(301));m+=1,nt=Xe=null,t.updateQueue=null,li.current=Mv,e=r(i,u)}while(rs)}if(li.current=fi,t=Xe!==null&&Xe.next!==null,br=0,nt=Xe=$e=null,ci=!1,t)throw Error(o(300));return e}function hl(){var e=os!==0;return os=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?$e.memoizedState=nt=e:nt=nt.next=e,nt}function Ft(){if(Xe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=nt===null?$e.memoizedState:nt.next;if(t!==null)nt=t,Xe=e;else{if(e===null)throw Error(o(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},nt===null?$e.memoizedState=nt=e:nt=nt.next=e}return nt}function ss(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=Ft(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=Xe,u=i.baseQueue,m=r.pending;if(m!==null){if(u!==null){var x=u.next;u.next=m.next,m.next=x}i.baseQueue=u=m,r.pending=null}if(u!==null){m=u.next,i=i.baseState;var E=x=null,P=null,B=m;do{var G=B.lane;if((br&G)===G)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),i=B.hasEagerState?B.eagerState:e(i,B.action);else{var Q={lane:G,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(E=P=Q,x=i):P=P.next=Q,$e.lanes|=G,Nr|=G}B=B.next}while(B!==null&&B!==m);P===null?x=i:P.next=E,Yt(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseState=x,t.baseQueue=P,r.lastRenderedState=i}if(e=r.interleaved,e!==null){u=e;do m=u.lane,$e.lanes|=m,Nr|=m,u=u.next;while(u!==e)}else u===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function vl(e){var t=Ft(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=r.dispatch,u=r.pending,m=t.memoizedState;if(u!==null){r.pending=null;var x=u=u.next;do m=e(m,x.action),x=x.next;while(x!==u);Yt(m,t.memoizedState)||(bt=!0),t.memoizedState=m,t.baseQueue===null&&(t.baseState=m),r.lastRenderedState=m}return[m,i]}function wd(){}function bd(e,t){var r=$e,i=Ft(),u=t(),m=!Yt(i.memoizedState,u);if(m&&(i.memoizedState=u,bt=!0),i=i.queue,yl(Cd.bind(null,r,i,e),[e]),i.getSnapshot!==t||m||nt!==null&&nt.memoizedState.tag&1){if(r.flags|=2048,is(9,kd.bind(null,r,i,u,t),void 0,null),rt===null)throw Error(o(349));(br&30)!==0||Nd(r,t,u)}return u}function Nd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function kd(e,t,r,i){t.value=r,t.getSnapshot=i,Sd(t)&&Ed(e)}function Cd(e,t,r){return r(function(){Sd(t)&&Ed(e)})}function Sd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Yt(e,r)}catch{return!0}}function Ed(e){var t=kn(e,1);t!==null&&Zt(t,e,1,-1)}function jd(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t.queue=e,e=e.dispatch=_v.bind(null,$e,e),[t.memoizedState,e]}function is(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Td(){return Ft().memoizedState}function ui(e,t,r,i){var u=an();$e.flags|=e,u.memoizedState=is(1|t,r,void 0,i===void 0?null:i)}function di(e,t,r,i){var u=Ft();i=i===void 0?null:i;var m=void 0;if(Xe!==null){var x=Xe.memoizedState;if(m=x.destroy,i!==null&&pl(i,x.deps)){u.memoizedState=is(t,r,m,i);return}}$e.flags|=e,u.memoizedState=is(1|t,r,m,i)}function Id(e,t){return ui(8390656,8,e,t)}function yl(e,t){return di(2048,8,e,t)}function Pd(e,t){return di(4,2,e,t)}function _d(e,t){return di(4,4,e,t)}function Rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,r){return r=r!=null?r.concat([e]):null,di(4,4,Rd.bind(null,t,e),r)}function xl(){}function Md(e,t){var r=Ft();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&pl(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Od(e,t){var r=Ft();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&pl(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Dd(e,t,r){return(br&21)===0?(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=r):(Yt(r,t)||(r=fu(),$e.lanes|=r,Nr|=r,e.baseState=!0),t)}function Iv(e,t){var r=_e;_e=r!==0&&4>r?r:4,e(!0);var i=fl.transition;fl.transition={};try{e(!1),t()}finally{_e=r,fl.transition=i}}function Ld(){return Ft().memoizedState}function Pv(e,t,r){var i=Jn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Bd(e))zd(t,r);else if(r=hd(e,t,r,i),r!==null){var u=yt();Zt(r,e,i,u),$d(r,t,i)}}function _v(e,t,r){var i=Jn(e),u={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bd(e))zd(t,u);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=t.lastRenderedReducer,m!==null))try{var x=t.lastRenderedState,E=m(x,r);if(u.hasEagerState=!0,u.eagerState=E,Yt(E,x)){var P=t.interleaved;P===null?(u.next=u,il(t)):(u.next=P.next,P.next=u),t.interleaved=u;return}}catch{}finally{}r=hd(e,t,u,i),r!==null&&(u=yt(),Zt(r,e,i,u),$d(r,t,i))}}function Bd(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function zd(e,t){rs=ci=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function $d(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,ba(e,r)}}var fi={readContext:$t,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},Rv={readContext:$t,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:Id,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ui(4194308,4,Rd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return ui(4,2,e,t)},useMemo:function(e,t){var r=an();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=an();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Pv.bind(null,$e,e),[i.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:jd,useDebugValue:xl,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=jd(!1),t=e[0];return e=Iv.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=$e,u=an();if(Le){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),rt===null)throw Error(o(349));(br&30)!==0||Nd(i,t,r)}u.memoizedState=r;var m={value:r,getSnapshot:t};return u.queue=m,Id(Cd.bind(null,i,m,e),[e]),i.flags|=2048,is(9,kd.bind(null,i,m,r,t),void 0,null),r},useId:function(){var e=an(),t=rt.identifierPrefix;if(Le){var r=Nn,i=bn;r=(i&~(1<<32-Gt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=os++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Tv++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Av={readContext:$t,useCallback:Md,useContext:$t,useEffect:yl,useImperativeHandle:Ad,useInsertionEffect:Pd,useLayoutEffect:_d,useMemo:Od,useReducer:gl,useRef:Td,useState:function(){return gl(ss)},useDebugValue:xl,useDeferredValue:function(e){var t=Ft();return Dd(t,Xe.memoizedState,e)},useTransition:function(){var e=gl(ss)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:bd,useId:Ld,unstable_isNewReconciler:!1},Mv={readContext:$t,useCallback:Md,useContext:$t,useEffect:yl,useImperativeHandle:Ad,useInsertionEffect:Pd,useLayoutEffect:_d,useMemo:Od,useReducer:vl,useRef:Td,useState:function(){return vl(ss)},useDebugValue:xl,useDeferredValue:function(e){var t=Ft();return Xe===null?t.memoizedState=e:Dd(t,Xe.memoizedState,e)},useTransition:function(){var e=vl(ss)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:bd,useId:Ld,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function wl(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pi={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=yt(),u=Jn(e),m=Cn(i,u);m.payload=t,r!=null&&(m.callback=r),t=Qn(e,m,u),t!==null&&(Zt(t,e,u,i),si(t,e,u))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=yt(),u=Jn(e),m=Cn(i,u);m.tag=1,m.payload=t,r!=null&&(m.callback=r),t=Qn(e,m,u),t!==null&&(Zt(t,e,u,i),si(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),i=Jn(e),u=Cn(r,i);u.tag=2,t!=null&&(u.callback=t),t=Qn(e,u,i),t!==null&&(Zt(t,e,i,r),si(t,e,i))}};function Fd(e,t,r,i,u,m,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,m,x):t.prototype&&t.prototype.isPureReactComponent?!Go(r,i)||!Go(u,m):!0}function Vd(e,t,r){var i=!1,u=Gn,m=t.contextType;return typeof m=="object"&&m!==null?m=$t(m):(u=wt(t)?gr:pt.current,i=t.contextTypes,m=(i=i!=null)?Yr(e,u):Gn),t=new t(r,m),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=m),t}function Hd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function bl(e,t,r,i){var u=e.stateNode;u.props=r,u.state=e.memoizedState,u.refs={},al(e);var m=t.contextType;typeof m=="object"&&m!==null?u.context=$t(m):(m=wt(t)?gr:pt.current,u.context=Yr(e,m)),u.state=e.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(wl(e,t,m,r),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&pi.enqueueReplaceState(u,u.state,null),ii(e,r,u,i),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t){try{var r="",i=t;do r+=se(i),i=i.return;while(i);var u=r}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:t,stack:u,digest:null}}function Nl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ov=typeof WeakMap=="function"?WeakMap:Map;function Wd(e,t,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){wi||(wi=!0,Bl=i),kl(e,t)},r}function Ud(e,t,r){r=Cn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var u=t.value;r.payload=function(){return i(u)},r.callback=function(){kl(e,t)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(r.callback=function(){kl(e,t),typeof i!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),r}function Gd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Ov;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(r)||(u.add(r),e=Qv.bind(null,e,t,r),t.then(e,e))}function Yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qd(e,t,r,i,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cn(-1,1),t.tag=2,Qn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Dv=M.ReactCurrentOwner,bt=!1;function vt(e,t,r,i){t.child=e===null?md(t,null,r,i):Xr(t,e.child,r,i)}function Qd(e,t,r,i,u){r=r.render;var m=t.ref;return Jr(t,u),i=ml(e,t,r,i,m,u),r=hl(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Sn(e,t,u)):(Le&&r&&Xa(t),t.flags|=1,vt(e,t,i,u),t.child)}function Kd(e,t,r,i,u){if(e===null){var m=r.type;return typeof m=="function"&&!Ul(m)&&m.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=m,Xd(e,t,m,i,u)):(e=Ei(r.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(m=e.child,(e.lanes&u)===0){var x=m.memoizedProps;if(r=r.compare,r=r!==null?r:Go,r(x,i)&&e.ref===t.ref)return Sn(e,t,u)}return t.flags|=1,e=tr(m,i),e.ref=t.ref,e.return=t,t.child=e}function Xd(e,t,r,i,u){if(e!==null){var m=e.memoizedProps;if(Go(m,i)&&e.ref===t.ref)if(bt=!1,t.pendingProps=i=m,(e.lanes&u)!==0)(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,Sn(e,t,u)}return Cl(e,t,r,i,u)}function Zd(e,t,r){var i=t.pendingProps,u=i.children,m=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ro,Rt),Rt|=r;else{if((r&1073741824)===0)return e=m!==null?m.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(ro,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=m!==null?m.baseLanes:r,Ae(ro,Rt),Rt|=i}else m!==null?(i=m.baseLanes|r,t.memoizedState=null):i=r,Ae(ro,Rt),Rt|=i;return vt(e,t,u,r),t.child}function Jd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,r,i,u){var m=wt(r)?gr:pt.current;return m=Yr(t,m),Jr(t,u),r=ml(e,t,r,i,m,u),i=hl(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Sn(e,t,u)):(Le&&i&&Xa(t),t.flags|=1,vt(e,t,r,u),t.child)}function ef(e,t,r,i,u){if(wt(r)){var m=!0;Xs(t)}else m=!1;if(Jr(t,u),t.stateNode===null)hi(e,t),Vd(t,r,i),bl(t,r,i,u),i=!0;else if(e===null){var x=t.stateNode,E=t.memoizedProps;x.props=E;var P=x.context,B=r.contextType;typeof B=="object"&&B!==null?B=$t(B):(B=wt(r)?gr:pt.current,B=Yr(t,B));var G=r.getDerivedStateFromProps,Q=typeof G=="function"||typeof x.getSnapshotBeforeUpdate=="function";Q||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(E!==i||P!==B)&&Hd(t,x,i,B),qn=!1;var U=t.memoizedState;x.state=U,ii(t,i,x,u),P=t.memoizedState,E!==i||U!==P||xt.current||qn?(typeof G=="function"&&(wl(t,r,G,i),P=t.memoizedState),(E=qn||Fd(t,r,E,i,U,P,B))?(Q||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=P),x.props=i,x.state=P,x.context=B,i=E):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{x=t.stateNode,gd(e,t),E=t.memoizedProps,B=t.type===t.elementType?E:Qt(t.type,E),x.props=B,Q=t.pendingProps,U=x.context,P=r.contextType,typeof P=="object"&&P!==null?P=$t(P):(P=wt(r)?gr:pt.current,P=Yr(t,P));var ie=r.getDerivedStateFromProps;(G=typeof ie=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(E!==Q||U!==P)&&Hd(t,x,i,P),qn=!1,U=t.memoizedState,x.state=U,ii(t,i,x,u);var pe=t.memoizedState;E!==Q||U!==pe||xt.current||qn?(typeof ie=="function"&&(wl(t,r,ie,i),pe=t.memoizedState),(B=qn||Fd(t,r,B,i,U,pe,P)||!1)?(G||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(i,pe,P),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(i,pe,P)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=pe),x.props=i,x.state=pe,x.context=P,i=B):(typeof x.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),i=!1)}return Sl(e,t,r,i,m,u)}function Sl(e,t,r,i,u,m){Jd(e,t);var x=(t.flags&128)!==0;if(!i&&!x)return u&&sd(t,r,!1),Sn(e,t,m);i=t.stateNode,Dv.current=t;var E=x&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&x?(t.child=Xr(t,e.child,null,m),t.child=Xr(t,null,E,m)):vt(e,t,E,m),t.memoizedState=i.state,u&&sd(t,r,!0),t.child}function tf(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),ll(e,t.containerInfo)}function nf(e,t,r,i,u){return Kr(),tl(u),t.flags|=256,vt(e,t,r,i),t.child}var El={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rf(e,t,r){var i=t.pendingProps,u=ze.current,m=!1,x=(t.flags&128)!==0,E;if((E=x)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(m=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ae(ze,u&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=i.children,e=i.fallback,m?(i=t.mode,m=t.child,x={mode:"hidden",children:x},(i&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=x):m=ji(x,i,0,null),e=Er(e,i,r,null),m.return=t,e.return=t,m.sibling=e,t.child=m,t.child.memoizedState=jl(r),t.memoizedState=El,e):Tl(t,x));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return Lv(e,t,x,i,E,u,r);if(m){m=i.fallback,x=t.mode,u=e.child,E=u.sibling;var P={mode:"hidden",children:i.children};return(x&1)===0&&t.child!==u?(i=t.child,i.childLanes=0,i.pendingProps=P,t.deletions=null):(i=tr(u,P),i.subtreeFlags=u.subtreeFlags&14680064),E!==null?m=tr(E,m):(m=Er(m,x,r,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,i=m,m=t.child,x=e.child.memoizedState,x=x===null?jl(r):{baseLanes:x.baseLanes|r,cachePool:null,transitions:x.transitions},m.memoizedState=x,m.childLanes=e.childLanes&~r,t.memoizedState=El,i}return m=e.child,e=m.sibling,i=tr(m,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Tl(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,r,i){return i!==null&&tl(i),Xr(t,e.child,null,r),e=Tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lv(e,t,r,i,u,m,x){if(r)return t.flags&256?(t.flags&=-257,i=Nl(Error(o(422))),mi(e,t,x,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(m=i.fallback,u=t.mode,i=ji({mode:"visible",children:i.children},u,0,null),m=Er(m,u,x,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,(t.mode&1)!==0&&Xr(t,e.child,null,x),t.child.memoizedState=jl(x),t.memoizedState=El,m);if((t.mode&1)===0)return mi(e,t,x,null);if(u.data==="$!"){if(i=u.nextSibling&&u.nextSibling.dataset,i)var E=i.dgst;return i=E,m=Error(o(419)),i=Nl(m,i,void 0),mi(e,t,x,i)}if(E=(x&e.childLanes)!==0,bt||E){if(i=rt,i!==null){switch(x&-x){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(i.suspendedLanes|x))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,kn(e,u),Zt(i,e,u,-1))}return Wl(),i=Nl(Error(o(421))),mi(e,t,x,i)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=Kv.bind(null,e),u._reactRetry=t,null):(e=m.treeContext,_t=Wn(u.nextSibling),Pt=t,Le=!0,qt=null,e!==null&&(Bt[zt++]=bn,Bt[zt++]=Nn,Bt[zt++]=vr,bn=e.id,Nn=e.overflow,vr=t),t=Tl(t,i.children),t.flags|=4096,t)}function of(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sl(e.return,t,r)}function Il(e,t,r,i,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=r,m.tailMode=u)}function sf(e,t,r){var i=t.pendingProps,u=i.revealOrder,m=i.tail;if(vt(e,t,i.children,r),i=ze.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&of(e,r,t);else if(e.tag===19)of(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ae(ze,i),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(r=t.child,u=null;r!==null;)e=r.alternate,e!==null&&ai(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=t.child,t.child=null):(u=r.sibling,r.sibling=null),Il(t,!1,u,r,m);break;case"backwards":for(r=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&ai(e)===null){t.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Il(t,!0,r,null,m);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=tr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=tr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Bv(e,t,r){switch(t.tag){case 3:tf(t),Kr();break;case 5:xd(t);break;case 1:wt(t.type)&&Xs(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,u=t.memoizedProps.value;Ae(ri,i._currentValue),i._currentValue=u;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ae(ze,ze.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?rf(e,t,r):(Ae(ze,ze.current&1),e=Sn(e,t,r),e!==null?e.sibling:null);Ae(ze,ze.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return sf(e,t,r);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,r)}return Sn(e,t,r)}var af,Pl,lf,cf;af=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Pl=function(){},lf=function(e,t,r,i){var u=e.memoizedProps;if(u!==i){e=t.stateNode,wr(sn.current);var m=null;switch(r){case"input":u=et(e,u),i=et(e,i),m=[];break;case"select":u=Y({},u,{value:void 0}),i=Y({},i,{value:void 0}),m=[];break;case"textarea":u=at(e,u),i=at(e,i),m=[];break;default:typeof u.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=qs)}Lr(r,i);var x;r=null;for(B in u)if(!i.hasOwnProperty(B)&&u.hasOwnProperty(B)&&u[B]!=null)if(B==="style"){var E=u[B];for(x in E)E.hasOwnProperty(x)&&(r||(r={}),r[x]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(c.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in i){var P=i[B];if(E=u?.[B],i.hasOwnProperty(B)&&P!==E&&(P!=null||E!=null))if(B==="style")if(E){for(x in E)!E.hasOwnProperty(x)||P&&P.hasOwnProperty(x)||(r||(r={}),r[x]="");for(x in P)P.hasOwnProperty(x)&&E[x]!==P[x]&&(r||(r={}),r[x]=P[x])}else r||(m||(m=[]),m.push(B,r)),r=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,E=E?E.__html:void 0,P!=null&&E!==P&&(m=m||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(c.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&Me("scroll",e),m||E===P||(m=[])):(m=m||[]).push(B,P))}r&&(m=m||[]).push("style",r);var B=m;(t.updateQueue=B)&&(t.flags|=4)}},cf=function(e,t,r,i){r!==i&&(t.flags|=4)};function as(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,i|=u.subtreeFlags&14680064,i|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function zv(e,t,r){var i=t.pendingProps;switch(Za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return wt(t.type)&&Ks(),ht(t),null;case 3:return i=t.stateNode,eo(),Oe(xt),Oe(pt),dl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qt!==null&&(Fl(qt),qt=null))),Pl(e,t),ht(t),null;case 5:cl(t);var u=wr(ns.current);if(r=t.type,e!==null&&t.stateNode!=null)lf(e,t,r,i,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ht(t),null}if(e=wr(sn.current),ti(t)){i=t.stateNode,r=t.type;var m=t.memoizedProps;switch(i[on]=t,i[Xo]=m,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(u=0;u<qo.length;u++)Me(qo[u],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Wt(i,m),Me("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!m.multiple},Me("invalid",i);break;case"textarea":vn(i,m),Me("invalid",i)}Lr(r,m),u=null;for(var x in m)if(m.hasOwnProperty(x)){var E=m[x];x==="children"?typeof E=="string"?i.textContent!==E&&(m.suppressHydrationWarning!==!0&&Ys(i.textContent,E,e),u=["children",E]):typeof E=="number"&&i.textContent!==""+E&&(m.suppressHydrationWarning!==!0&&Ys(i.textContent,E,e),u=["children",""+E]):c.hasOwnProperty(x)&&E!=null&&x==="onScroll"&&Me("scroll",i)}switch(r){case"input":Ne(i),To(i,m,!0);break;case"textarea":Ne(i),Ss(i);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(i.onclick=qs)}i=u,t.updateQueue=i,i!==null&&(t.flags|=4)}else{x=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=x.createElement(r,{is:i.is}):(e=x.createElement(r),r==="select"&&(x=e,i.multiple?x.multiple=!0:i.size&&(x.size=i.size))):e=x.createElementNS(e,r),e[on]=t,e[Xo]=i,af(e,t,!1,!1),t.stateNode=e;e:{switch(x=Po(r,i),r){case"dialog":Me("cancel",e),Me("close",e),u=i;break;case"iframe":case"object":case"embed":Me("load",e),u=i;break;case"video":case"audio":for(u=0;u<qo.length;u++)Me(qo[u],e);u=i;break;case"source":Me("error",e),u=i;break;case"img":case"image":case"link":Me("error",e),Me("load",e),u=i;break;case"details":Me("toggle",e),u=i;break;case"input":Wt(e,i),u=et(e,i),Me("invalid",e);break;case"option":u=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},u=Y({},i,{value:void 0}),Me("invalid",e);break;case"textarea":vn(e,i),u=at(e,i),Me("invalid",e);break;default:u=i}Lr(r,u),E=u;for(m in E)if(E.hasOwnProperty(m)){var P=E[m];m==="style"?js(e,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Dr(e,P)):m==="children"?typeof P=="string"?(r!=="textarea"||P!=="")&&Ot(e,P):typeof P=="number"&&Ot(e,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(c.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Me("scroll",e):P!=null&&j(e,m,P,x))}switch(r){case"input":Ne(e),To(e,i,!1);break;case"textarea":Ne(e),Ss(e);break;case"option":i.value!=null&&e.setAttribute("value",""+H(i.value));break;case"select":e.multiple=!!i.multiple,m=i.value,m!=null?_n(e,!!i.multiple,m,!1):i.defaultValue!=null&&_n(e,!!i.multiple,i.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=qs)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)cf(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(r=wr(ns.current),wr(sn.current),ti(t)){if(i=t.stateNode,r=t.memoizedProps,i[on]=t,(m=i.nodeValue!==r)&&(e=Pt,e!==null))switch(e.tag){case 3:Ys(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(i.nodeValue,r,(e.mode&1)!==0)}m&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[on]=t,t.stateNode=i}return ht(t),null;case 13:if(Oe(ze),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&_t!==null&&(t.mode&1)!==0&&(t.flags&128)===0)dd(),Kr(),t.flags|=98560,m=!1;else if(m=ti(t),i!==null&&i.dehydrated!==null){if(e===null){if(!m)throw Error(o(318));if(m=t.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(o(317));m[on]=t}else Kr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ht(t),m=!1}else qt!==null&&(Fl(qt),qt=null),m=!0;if(!m)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?Ze===0&&(Ze=3):Wl())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return eo(),Pl(e,t),e===null&&Qo(t.stateNode.containerInfo),ht(t),null;case 10:return ol(t.type._context),ht(t),null;case 17:return wt(t.type)&&Ks(),ht(t),null;case 19:if(Oe(ze),m=t.memoizedState,m===null)return ht(t),null;if(i=(t.flags&128)!==0,x=m.rendering,x===null)if(i)as(m,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=ai(e),x!==null){for(t.flags|=128,as(m,!1),i=x.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)m=r,e=i,m.flags&=14680066,x=m.alternate,x===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=x.childLanes,m.lanes=x.lanes,m.child=x.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=x.memoizedProps,m.memoizedState=x.memoizedState,m.updateQueue=x.updateQueue,m.type=x.type,e=x.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ae(ze,ze.current&1|2),t.child}e=e.sibling}m.tail!==null&&We()>oo&&(t.flags|=128,i=!0,as(m,!1),t.lanes=4194304)}else{if(!i)if(e=ai(x),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),as(m,!0),m.tail===null&&m.tailMode==="hidden"&&!x.alternate&&!Le)return ht(t),null}else 2*We()-m.renderingStartTime>oo&&r!==1073741824&&(t.flags|=128,i=!0,as(m,!1),t.lanes=4194304);m.isBackwards?(x.sibling=t.child,t.child=x):(r=m.last,r!==null?r.sibling=x:t.child=x,m.last=x)}return m.tail!==null?(t=m.tail,m.rendering=t,m.tail=t.sibling,m.renderingStartTime=We(),t.sibling=null,r=ze.current,Ae(ze,i?r&1|2:r&1),t):(ht(t),null);case 22:case 23:return Hl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Rt&1073741824)!==0&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function $v(e,t){switch(Za(t),t.tag){case 1:return wt(t.type)&&Ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return eo(),Oe(xt),Oe(pt),dl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return cl(t),null;case 13:if(Oe(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(ze),null;case 4:return eo(),null;case 10:return ol(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var gi=!1,gt=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,fe=null;function no(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Ve(e,t,i)}else r.current=null}function _l(e,t,r){try{r()}catch(i){Ve(e,t,i)}}var uf=!1;function Vv(e,t){if(Ha=Ds,e=Fu(),Oa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var u=i.anchorOffset,m=i.focusNode;i=i.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var x=0,E=-1,P=-1,B=0,G=0,Q=e,U=null;t:for(;;){for(var ie;Q!==r||u!==0&&Q.nodeType!==3||(E=x+u),Q!==m||i!==0&&Q.nodeType!==3||(P=x+i),Q.nodeType===3&&(x+=Q.nodeValue.length),(ie=Q.firstChild)!==null;)U=Q,Q=ie;for(;;){if(Q===e)break t;if(U===r&&++B===u&&(E=x),U===m&&++G===i&&(P=x),(ie=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=ie}r=E===-1||P===-1?null:{start:E,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wa={focusedElem:e,selectionRange:r},Ds=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var pe=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var ve=pe.memoizedProps,Ue=pe.memoizedState,O=t.stateNode,_=O.getSnapshotBeforeUpdate(t.elementType===t.type?ve:Qt(t.type,ve),Ue);O.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(J){Ve(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return pe=uf,uf=!1,pe}function ls(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var u=i=i.next;do{if((u.tag&e)===e){var m=u.destroy;u.destroy=void 0,m!==void 0&&_l(t,r,m)}u=u.next}while(u!==i)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Rl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[on],delete t[Xo],delete t[qa],delete t[Cv],delete t[Sv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=qs));else if(i!==4&&(e=e.child,e!==null))for(Al(e,t,r),e=e.sibling;e!==null;)Al(e,t,r),e=e.sibling}function Ml(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ml(e,t,r),e=e.sibling;e!==null;)Ml(e,t,r),e=e.sibling}var ct=null,Kt=!1;function Kn(e,t,r){for(r=r.child;r!==null;)mf(e,t,r),r=r.sibling}function mf(e,t,r){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ps,r)}catch{}switch(r.tag){case 5:gt||no(r,t);case 6:var i=ct,u=Kt;ct=null,Kn(e,t,r),ct=i,Kt=u,ct!==null&&(Kt?(e=ct,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ct.removeChild(r.stateNode));break;case 18:ct!==null&&(Kt?(e=ct,r=r.stateNode,e.nodeType===8?Ya(e.parentNode,r):e.nodeType===1&&Ya(e,r),$o(e)):Ya(ct,r.stateNode));break;case 4:i=ct,u=Kt,ct=r.stateNode.containerInfo,Kt=!0,Kn(e,t,r),ct=i,Kt=u;break;case 0:case 11:case 14:case 15:if(!gt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){u=i=i.next;do{var m=u,x=m.destroy;m=m.tag,x!==void 0&&((m&2)!==0||(m&4)!==0)&&_l(r,t,x),u=u.next}while(u!==i)}Kn(e,t,r);break;case 1:if(!gt&&(no(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(E){Ve(r,t,E)}Kn(e,t,r);break;case 21:Kn(e,t,r);break;case 22:r.mode&1?(gt=(i=gt)||r.memoizedState!==null,Kn(e,t,r),gt=i):Kn(e,t,r);break;default:Kn(e,t,r)}}function hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Fv),t.forEach(function(i){var u=Xv.bind(null,e,i);r.has(i)||(r.add(i),i.then(u,u))})}}function Xt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var u=r[i];try{var m=e,x=t,E=x;e:for(;E!==null;){switch(E.tag){case 5:ct=E.stateNode,Kt=!1;break e;case 3:ct=E.stateNode.containerInfo,Kt=!0;break e;case 4:ct=E.stateNode.containerInfo,Kt=!0;break e}E=E.return}if(ct===null)throw Error(o(160));mf(m,x,u),ct=null,Kt=!1;var P=u.alternate;P!==null&&(P.return=null),u.return=null}catch(B){Ve(u,t,B)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),ln(e),i&4){try{ls(3,e,e.return),vi(3,e)}catch(ve){Ve(e,e.return,ve)}try{ls(5,e,e.return)}catch(ve){Ve(e,e.return,ve)}}break;case 1:Xt(t,e),ln(e),i&512&&r!==null&&no(r,r.return);break;case 5:if(Xt(t,e),ln(e),i&512&&r!==null&&no(r,r.return),e.flags&32){var u=e.stateNode;try{Ot(u,"")}catch(ve){Ve(e,e.return,ve)}}if(i&4&&(u=e.stateNode,u!=null)){var m=e.memoizedProps,x=r!==null?r.memoizedProps:m,E=e.type,P=e.updateQueue;if(e.updateQueue=null,P!==null)try{E==="input"&&m.type==="radio"&&m.name!=null&&Ut(u,m),Po(E,x);var B=Po(E,m);for(x=0;x<P.length;x+=2){var G=P[x],Q=P[x+1];G==="style"?js(u,Q):G==="dangerouslySetInnerHTML"?Dr(u,Q):G==="children"?Ot(u,Q):j(u,G,Q,B)}switch(E){case"input":it(u,m);break;case"textarea":Cs(u,m);break;case"select":var U=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?_n(u,!!m.multiple,ie,!1):U!==!!m.multiple&&(m.defaultValue!=null?_n(u,!!m.multiple,m.defaultValue,!0):_n(u,!!m.multiple,m.multiple?[]:"",!1))}u[Xo]=m}catch(ve){Ve(e,e.return,ve)}}break;case 6:if(Xt(t,e),ln(e),i&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,m=e.memoizedProps;try{u.nodeValue=m}catch(ve){Ve(e,e.return,ve)}}break;case 3:if(Xt(t,e),ln(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{$o(t.containerInfo)}catch(ve){Ve(e,e.return,ve)}break;case 4:Xt(t,e),ln(e);break;case 13:Xt(t,e),ln(e),u=e.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Ll=We())),i&4&&hf(e);break;case 22:if(G=r!==null&&r.memoizedState!==null,e.mode&1?(gt=(B=gt)||G,Xt(t,e),gt=B):Xt(t,e),ln(e),i&8192){if(B=e.memoizedState!==null,(e.stateNode.isHidden=B)&&!G&&(e.mode&1)!==0)for(fe=e,G=e.child;G!==null;){for(Q=fe=G;fe!==null;){switch(U=fe,ie=U.child,U.tag){case 0:case 11:case 14:case 15:ls(4,U,U.return);break;case 1:no(U,U.return);var pe=U.stateNode;if(typeof pe.componentWillUnmount=="function"){i=U,r=U.return;try{t=i,pe.props=t.memoizedProps,pe.state=t.memoizedState,pe.componentWillUnmount()}catch(ve){Ve(i,r,ve)}}break;case 5:no(U,U.return);break;case 22:if(U.memoizedState!==null){xf(Q);continue}}ie!==null?(ie.return=U,fe=ie):xf(Q)}G=G.sibling}e:for(G=null,Q=e;;){if(Q.tag===5){if(G===null){G=Q;try{u=Q.stateNode,B?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(E=Q.stateNode,P=Q.memoizedProps.style,x=P!=null&&P.hasOwnProperty("display")?P.display:null,E.style.display=Es("display",x))}catch(ve){Ve(e,e.return,ve)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=B?"":Q.memoizedProps}catch(ve){Ve(e,e.return,ve)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===e)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===e)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===e)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Xt(t,e),ln(e),i&4&&hf(e);break;case 21:break;default:Xt(t,e),ln(e)}}function ln(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ff(r)){var i=r;break e}r=r.return}throw Error(o(160))}switch(i.tag){case 5:var u=i.stateNode;i.flags&32&&(Ot(u,""),i.flags&=-33);var m=pf(e);Ml(e,m,u);break;case 3:case 4:var x=i.stateNode.containerInfo,E=pf(e);Al(e,E,x);break;default:throw Error(o(161))}}catch(P){Ve(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hv(e,t,r){fe=e,vf(e)}function vf(e,t,r){for(var i=(e.mode&1)!==0;fe!==null;){var u=fe,m=u.child;if(u.tag===22&&i){var x=u.memoizedState!==null||gi;if(!x){var E=u.alternate,P=E!==null&&E.memoizedState!==null||gt;E=gi;var B=gt;if(gi=x,(gt=P)&&!B)for(fe=u;fe!==null;)x=fe,P=x.child,x.tag===22&&x.memoizedState!==null?wf(u):P!==null?(P.return=x,fe=P):wf(u);for(;m!==null;)fe=m,vf(m),m=m.sibling;fe=u,gi=E,gt=B}yf(e)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,fe=m):yf(e)}}function yf(e){for(;fe!==null;){var t=fe;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:gt||vi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gt)if(r===null)i.componentDidMount();else{var u=t.elementType===t.type?r.memoizedProps:Qt(t.type,r.memoizedProps);i.componentDidUpdate(u,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var m=t.updateQueue;m!==null&&yd(t,m,i);break;case 3:var x=t.updateQueue;if(x!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}yd(t,x,r)}break;case 5:var E=t.stateNode;if(r===null&&t.flags&4){r=E;var P=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&r.focus();break;case"img":P.src&&(r.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var B=t.alternate;if(B!==null){var G=B.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&$o(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}gt||t.flags&512&&Rl(t)}catch(U){Ve(t,t.return,U)}}if(t===e){fe=null;break}if(r=t.sibling,r!==null){r.return=t.return,fe=r;break}fe=t.return}}function xf(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,fe=r;break}fe=t.return}}function wf(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{vi(4,t)}catch(P){Ve(t,r,P)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var u=t.return;try{i.componentDidMount()}catch(P){Ve(t,u,P)}}var m=t.return;try{Rl(t)}catch(P){Ve(t,m,P)}break;case 5:var x=t.return;try{Rl(t)}catch(P){Ve(t,x,P)}}}catch(P){Ve(t,t.return,P)}if(t===e){fe=null;break}var E=t.sibling;if(E!==null){E.return=t.return,fe=E;break}fe=t.return}}var Wv=Math.ceil,yi=M.ReactCurrentDispatcher,Ol=M.ReactCurrentOwner,Vt=M.ReactCurrentBatchConfig,Te=0,rt=null,qe=null,ut=0,Rt=0,ro=Un(0),Ze=0,cs=null,Nr=0,xi=0,Dl=0,us=null,Nt=null,Ll=0,oo=1/0,En=null,wi=!1,Bl=null,Xn=null,bi=!1,Zn=null,Ni=0,ds=0,zl=null,ki=-1,Ci=0;function yt(){return(Te&6)!==0?We():ki!==-1?ki:ki=We()}function Jn(e){return(e.mode&1)===0?1:(Te&2)!==0&&ut!==0?ut&-ut:jv.transition!==null?(Ci===0&&(Ci=fu()),Ci):(e=_e,e!==0||(e=window.event,e=e===void 0?16:bu(e.type)),e)}function Zt(e,t,r,i){if(50<ds)throw ds=0,zl=null,Error(o(185));Oo(e,r,i),((Te&2)===0||e!==rt)&&(e===rt&&((Te&2)===0&&(xi|=r),Ze===4&&er(e,ut)),kt(e,i),r===1&&Te===0&&(t.mode&1)===0&&(oo=We()+500,Zs&&Yn()))}function kt(e,t){var r=e.callbackNode;jg(e,t);var i=As(e,e===rt?ut:0);if(i===0)r!==null&&cu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&cu(r),t===1)e.tag===0?Ev(Nf.bind(null,e)):id(Nf.bind(null,e)),Nv(function(){(Te&6)===0&&Yn()}),r=null;else{switch(pu(i)){case 1:r=ya;break;case 4:r=uu;break;case 16:r=Is;break;case 536870912:r=du;break;default:r=Is}r=Pf(r,bf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function bf(e,t){if(ki=-1,Ci=0,(Te&6)!==0)throw Error(o(327));var r=e.callbackNode;if(so()&&e.callbackNode!==r)return null;var i=As(e,e===rt?ut:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Si(e,i);else{t=i;var u=Te;Te|=2;var m=Cf();(rt!==e||ut!==t)&&(En=null,oo=We()+500,Cr(e,t));do try{Yv();break}catch(E){kf(e,E)}while(!0);rl(),yi.current=m,Te=u,qe!==null?t=0:(rt=null,ut=0,t=Ze)}if(t!==0){if(t===2&&(u=xa(e),u!==0&&(i=u,t=$l(e,u))),t===1)throw r=cs,Cr(e,0),er(e,i),kt(e,We()),r;if(t===6)er(e,i);else{if(u=e.current.alternate,(i&30)===0&&!Uv(u)&&(t=Si(e,i),t===2&&(m=xa(e),m!==0&&(i=m,t=$l(e,m))),t===1))throw r=cs,Cr(e,0),er(e,i),kt(e,We()),r;switch(e.finishedWork=u,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:Sr(e,Nt,En);break;case 3:if(er(e,i),(i&130023424)===i&&(t=Ll+500-We(),10<t)){if(As(e,0)!==0)break;if(u=e.suspendedLanes,(u&i)!==i){yt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Ga(Sr.bind(null,e,Nt,En),t);break}Sr(e,Nt,En);break;case 4:if(er(e,i),(i&4194240)===i)break;for(t=e.eventTimes,u=-1;0<i;){var x=31-Gt(i);m=1<<x,x=t[x],x>u&&(u=x),i&=~m}if(i=u,i=We()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wv(i/1960))-i,10<i){e.timeoutHandle=Ga(Sr.bind(null,e,Nt,En),i);break}Sr(e,Nt,En);break;case 5:Sr(e,Nt,En);break;default:throw Error(o(329))}}}return kt(e,We()),e.callbackNode===r?bf.bind(null,e):null}function $l(e,t){var r=us;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=Si(e,t),e!==2&&(t=Nt,Nt=r,t!==null&&Fl(t)),e}function Fl(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function Uv(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var u=r[i],m=u.getSnapshot;u=u.value;try{if(!Yt(m(),u))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~Dl,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Gt(t),i=1<<r;e[r]=-1,t&=~i}}function Nf(e){if((Te&6)!==0)throw Error(o(327));so();var t=As(e,0);if((t&1)===0)return kt(e,We()),null;var r=Si(e,t);if(e.tag!==0&&r===2){var i=xa(e);i!==0&&(t=i,r=$l(e,i))}if(r===1)throw r=cs,Cr(e,0),er(e,t),kt(e,We()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sr(e,Nt,En),kt(e,We()),null}function Vl(e,t){var r=Te;Te|=1;try{return e(t)}finally{Te=r,Te===0&&(oo=We()+500,Zs&&Yn())}}function kr(e){Zn!==null&&Zn.tag===0&&(Te&6)===0&&so();var t=Te;Te|=1;var r=Vt.transition,i=_e;try{if(Vt.transition=null,_e=1,e)return e()}finally{_e=i,Vt.transition=r,Te=t,(Te&6)===0&&Yn()}}function Hl(){Rt=ro.current,Oe(ro)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,bv(r)),qe!==null)for(r=qe.return;r!==null;){var i=r;switch(Za(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ks();break;case 3:eo(),Oe(xt),Oe(pt),dl();break;case 5:cl(i);break;case 4:eo();break;case 13:Oe(ze);break;case 19:Oe(ze);break;case 10:ol(i.type._context);break;case 22:case 23:Hl()}r=r.return}if(rt=e,qe=e=tr(e.current,null),ut=Rt=t,Ze=0,cs=null,Dl=xi=Nr=0,Nt=us=null,xr!==null){for(t=0;t<xr.length;t++)if(r=xr[t],i=r.interleaved,i!==null){r.interleaved=null;var u=i.next,m=r.pending;if(m!==null){var x=m.next;m.next=u,i.next=x}r.pending=i}xr=null}return e}function kf(e,t){do{var r=qe;try{if(rl(),li.current=fi,ci){for(var i=$e.memoizedState;i!==null;){var u=i.queue;u!==null&&(u.pending=null),i=i.next}ci=!1}if(br=0,nt=Xe=$e=null,rs=!1,os=0,Ol.current=null,r===null||r.return===null){Ze=1,cs=t,qe=null;break}e:{var m=e,x=r.return,E=r,P=t;if(t=ut,E.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,G=E,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var U=G.alternate;U?(G.updateQueue=U.updateQueue,G.memoizedState=U.memoizedState,G.lanes=U.lanes):(G.updateQueue=null,G.memoizedState=null)}var ie=Yd(x);if(ie!==null){ie.flags&=-257,qd(ie,x,E,m,t),ie.mode&1&&Gd(m,B,t),t=ie,P=B;var pe=t.updateQueue;if(pe===null){var ve=new Set;ve.add(P),t.updateQueue=ve}else pe.add(P);break e}else{if((t&1)===0){Gd(m,B,t),Wl();break e}P=Error(o(426))}}else if(Le&&E.mode&1){var Ue=Yd(x);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),qd(Ue,x,E,m,t),tl(to(P,E));break e}}m=P=to(P,E),Ze!==4&&(Ze=2),us===null?us=[m]:us.push(m),m=x;do{switch(m.tag){case 3:m.flags|=65536,t&=-t,m.lanes|=t;var O=Wd(m,P,t);vd(m,O);break e;case 1:E=P;var _=m.type,D=m.stateNode;if((m.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Xn===null||!Xn.has(D)))){m.flags|=65536,t&=-t,m.lanes|=t;var J=Ud(m,E,t);vd(m,J);break e}}m=m.return}while(m!==null)}Ef(r)}catch(ye){t=ye,qe===r&&r!==null&&(qe=r=r.return);continue}break}while(!0)}function Cf(){var e=yi.current;return yi.current=fi,e===null?fi:e}function Wl(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),rt===null||(Nr&268435455)===0&&(xi&268435455)===0||er(rt,ut)}function Si(e,t){var r=Te;Te|=2;var i=Cf();(rt!==e||ut!==t)&&(En=null,Cr(e,t));do try{Gv();break}catch(u){kf(e,u)}while(!0);if(rl(),Te=r,yi.current=i,qe!==null)throw Error(o(261));return rt=null,ut=0,Ze}function Gv(){for(;qe!==null;)Sf(qe)}function Yv(){for(;qe!==null&&!yg();)Sf(qe)}function Sf(e){var t=If(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?Ef(e):qe=t,Ol.current=null}function Ef(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=zv(r,t,Rt),r!==null){qe=r;return}}else{if(r=$v(r,t),r!==null){r.flags&=32767,qe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ze===0&&(Ze=5)}function Sr(e,t,r){var i=_e,u=Vt.transition;try{Vt.transition=null,_e=1,qv(e,t,r,i)}finally{Vt.transition=u,_e=i}return null}function qv(e,t,r,i){do so();while(Zn!==null);if((Te&6)!==0)throw Error(o(327));r=e.finishedWork;var u=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var m=r.lanes|r.childLanes;if(Tg(e,m),e===rt&&(qe=rt=null,ut=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||bi||(bi=!0,Pf(Is,function(){return so(),null})),m=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||m){m=Vt.transition,Vt.transition=null;var x=_e;_e=1;var E=Te;Te|=4,Ol.current=null,Vv(e,r),gf(r,e),mv(Wa),Ds=!!Ha,Wa=Ha=null,e.current=r,Hv(r),xg(),Te=E,_e=x,Vt.transition=m}else e.current=r;if(bi&&(bi=!1,Zn=e,Ni=u),m=e.pendingLanes,m===0&&(Xn=null),Ng(r.stateNode),kt(e,We()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)u=t[r],i(u.value,{componentStack:u.stack,digest:u.digest});if(wi)throw wi=!1,e=Bl,Bl=null,e;return(Ni&1)!==0&&e.tag!==0&&so(),m=e.pendingLanes,(m&1)!==0?e===zl?ds++:(ds=0,zl=e):ds=0,Yn(),null}function so(){if(Zn!==null){var e=pu(Ni),t=Vt.transition,r=_e;try{if(Vt.transition=null,_e=16>e?16:e,Zn===null)var i=!1;else{if(e=Zn,Zn=null,Ni=0,(Te&6)!==0)throw Error(o(331));var u=Te;for(Te|=4,fe=e.current;fe!==null;){var m=fe,x=m.child;if((fe.flags&16)!==0){var E=m.deletions;if(E!==null){for(var P=0;P<E.length;P++){var B=E[P];for(fe=B;fe!==null;){var G=fe;switch(G.tag){case 0:case 11:case 15:ls(8,G,m)}var Q=G.child;if(Q!==null)Q.return=G,fe=Q;else for(;fe!==null;){G=fe;var U=G.sibling,ie=G.return;if(df(G),G===B){fe=null;break}if(U!==null){U.return=ie,fe=U;break}fe=ie}}}var pe=m.alternate;if(pe!==null){var ve=pe.child;if(ve!==null){pe.child=null;do{var Ue=ve.sibling;ve.sibling=null,ve=Ue}while(ve!==null)}}fe=m}}if((m.subtreeFlags&2064)!==0&&x!==null)x.return=m,fe=x;else e:for(;fe!==null;){if(m=fe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ls(9,m,m.return)}var O=m.sibling;if(O!==null){O.return=m.return,fe=O;break e}fe=m.return}}var _=e.current;for(fe=_;fe!==null;){x=fe;var D=x.child;if((x.subtreeFlags&2064)!==0&&D!==null)D.return=x,fe=D;else e:for(x=_;fe!==null;){if(E=fe,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:vi(9,E)}}catch(ye){Ve(E,E.return,ye)}if(E===x){fe=null;break e}var J=E.sibling;if(J!==null){J.return=E.return,fe=J;break e}fe=E.return}}if(Te=u,Yn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ps,e)}catch{}i=!0}return i}finally{_e=r,Vt.transition=t}}return!1}function jf(e,t,r){t=to(r,t),t=Wd(e,t,1),e=Qn(e,t,1),t=yt(),e!==null&&(Oo(e,1,t),kt(e,t))}function Ve(e,t,r){if(e.tag===3)jf(e,e,r);else for(;t!==null;){if(t.tag===3){jf(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))){e=to(r,e),e=Ud(t,e,1),t=Qn(t,e,1),e=yt(),t!==null&&(Oo(t,1,e),kt(t,e));break}}t=t.return}}function Qv(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,rt===e&&(ut&r)===r&&(Ze===4||Ze===3&&(ut&130023424)===ut&&500>We()-Ll?Cr(e,0):Dl|=r),kt(e,t)}function Tf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Rs,Rs<<=1,(Rs&130023424)===0&&(Rs=4194304)));var r=yt();e=kn(e,t),e!==null&&(Oo(e,t,r),kt(e,r))}function Kv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Tf(e,r)}function Xv(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),Tf(e,r)}var If;If=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)bt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return bt=!1,Bv(e,t,r);bt=(e.flags&131072)!==0}else bt=!1,Le&&(t.flags&1048576)!==0&&ad(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;hi(e,t),e=t.pendingProps;var u=Yr(t,pt.current);Jr(t,r),u=ml(null,t,i,e,u,r);var m=hl();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(i)?(m=!0,Xs(t)):m=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,al(t),u.updater=pi,t.stateNode=u,u._reactInternals=t,bl(t,i,e,r),t=Sl(null,t,i,!0,m,r)):(t.tag=0,Le&&m&&Xa(t),vt(null,t,u,r),t=t.child),t;case 16:i=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,u=i._init,i=u(i._payload),t.type=i,u=t.tag=Jv(i),e=Qt(i,e),u){case 0:t=Cl(null,t,i,e,r);break e;case 1:t=ef(null,t,i,e,r);break e;case 11:t=Qd(null,t,i,e,r);break e;case 14:t=Kd(null,t,i,Qt(i.type,e),r);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Qt(i,u),Cl(e,t,i,u,r);case 1:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Qt(i,u),ef(e,t,i,u,r);case 3:e:{if(tf(t),e===null)throw Error(o(387));i=t.pendingProps,m=t.memoizedState,u=m.element,gd(e,t),ii(t,i,null,r);var x=t.memoizedState;if(i=x.element,m.isDehydrated)if(m={element:i,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=m,t.memoizedState=m,t.flags&256){u=to(Error(o(423)),t),t=nf(e,t,i,r,u);break e}else if(i!==u){u=to(Error(o(424)),t),t=nf(e,t,i,r,u);break e}else for(_t=Wn(t.stateNode.containerInfo.firstChild),Pt=t,Le=!0,qt=null,r=md(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Kr(),i===u){t=Sn(e,t,r);break e}vt(e,t,i,r)}t=t.child}return t;case 5:return xd(t),e===null&&el(t),i=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,x=u.children,Ua(i,u)?x=null:m!==null&&Ua(i,m)&&(t.flags|=32),Jd(e,t),vt(e,t,x,r),t.child;case 6:return e===null&&el(t),null;case 13:return rf(e,t,r);case 4:return ll(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Xr(t,null,i,r):vt(e,t,i,r),t.child;case 11:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Qt(i,u),Qd(e,t,i,u,r);case 7:return vt(e,t,t.pendingProps,r),t.child;case 8:return vt(e,t,t.pendingProps.children,r),t.child;case 12:return vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,u=t.pendingProps,m=t.memoizedProps,x=u.value,Ae(ri,i._currentValue),i._currentValue=x,m!==null)if(Yt(m.value,x)){if(m.children===u.children&&!xt.current){t=Sn(e,t,r);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var E=m.dependencies;if(E!==null){x=m.child;for(var P=E.firstContext;P!==null;){if(P.context===i){if(m.tag===1){P=Cn(-1,r&-r),P.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var G=B.pending;G===null?P.next=P:(P.next=G.next,G.next=P),B.pending=P}}m.lanes|=r,P=m.alternate,P!==null&&(P.lanes|=r),sl(m.return,r,t),E.lanes|=r;break}P=P.next}}else if(m.tag===10)x=m.type===t.type?null:m.child;else if(m.tag===18){if(x=m.return,x===null)throw Error(o(341));x.lanes|=r,E=x.alternate,E!==null&&(E.lanes|=r),sl(x,r,t),x=m.sibling}else x=m.child;if(x!==null)x.return=m;else for(x=m;x!==null;){if(x===t){x=null;break}if(m=x.sibling,m!==null){m.return=x.return,x=m;break}x=x.return}m=x}vt(e,t,u.children,r),t=t.child}return t;case 9:return u=t.type,i=t.pendingProps.children,Jr(t,r),u=$t(u),i=i(u),t.flags|=1,vt(e,t,i,r),t.child;case 14:return i=t.type,u=Qt(i,t.pendingProps),u=Qt(i.type,u),Kd(e,t,i,u,r);case 15:return Xd(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,u=t.pendingProps,u=t.elementType===i?u:Qt(i,u),hi(e,t),t.tag=1,wt(i)?(e=!0,Xs(t)):e=!1,Jr(t,r),Vd(t,i,u),bl(t,i,u,r),Sl(null,t,i,!0,e,r);case 19:return sf(e,t,r);case 22:return Zd(e,t,r)}throw Error(o(156,t.tag))};function Pf(e,t){return lu(e,t)}function Zv(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,r,i){return new Zv(e,t,r,i)}function Ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jv(e){if(typeof e=="function")return Ul(e)?1:0;if(e!=null){if(e=e.$$typeof,e===le)return 11;if(e===re)return 14}return 2}function tr(e,t){var r=e.alternate;return r===null?(r=Ht(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ei(e,t,r,i,u,m){var x=2;if(i=e,typeof e=="function")Ul(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case L:return Er(r.children,u,m,t);case F:x=8,u|=8;break;case oe:return e=Ht(12,r,t,u|2),e.elementType=oe,e.lanes=m,e;case ce:return e=Ht(13,r,t,u),e.elementType=ce,e.lanes=m,e;case ge:return e=Ht(19,r,t,u),e.elementType=ge,e.lanes=m,e;case ne:return ji(r,u,m,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:x=10;break e;case be:x=9;break e;case le:x=11;break e;case re:x=14;break e;case X:x=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Ht(x,r,t,u),t.elementType=e,t.type=i,t.lanes=m,t}function Er(e,t,r,i){return e=Ht(7,e,i,t),e.lanes=r,e}function ji(e,t,r,i){return e=Ht(22,e,i,t),e.elementType=ne,e.lanes=r,e.stateNode={isHidden:!1},e}function Gl(e,t,r){return e=Ht(6,e,null,t),e.lanes=r,e}function Yl(e,t,r){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ey(e,t,r,i,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=i,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ql(e,t,r,i,u,m,x,E,P){return e=new ey(e,t,r,E,P),t===1?(t=1,m===!0&&(t|=8)):t=0,m=Ht(3,null,null,t),e.current=m,m.stateNode=e,m.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},al(m),e}function ty(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function _f(e){if(!e)return Gn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(wt(r))return od(e,r,t)}return t}function Rf(e,t,r,i,u,m,x,E,P){return e=ql(r,i,!0,e,u,m,x,E,P),e.context=_f(null),r=e.current,i=yt(),u=Jn(r),m=Cn(i,u),m.callback=t??null,Qn(r,m,u),e.current.lanes=u,Oo(e,u,i),kt(e,i),e}function Ti(e,t,r,i){var u=t.current,m=yt(),x=Jn(u);return r=_f(r),t.context===null?t.context=r:t.pendingContext=r,t=Cn(m,x),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Qn(u,t,x),e!==null&&(Zt(e,u,x,m),si(e,u,x)),x}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ql(e,t){Af(e,t),(e=e.alternate)&&Af(e,t)}function ny(){return null}var Mf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kl(e){this._internalRoot=e}Pi.prototype.render=Kl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ti(e,t,null,null)},Pi.prototype.unmount=Kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kr(function(){Ti(null,e,null,null)}),t[xn]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Fn.length&&t!==0&&t<Fn[r].priority;r++);Fn.splice(r,0,e),r===0&&xu(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Of(){}function ry(e,t,r,i,u){if(u){if(typeof i=="function"){var m=i;i=function(){var B=Ii(x);m.call(B)}}var x=Rf(t,i,e,0,null,!1,!1,"",Of);return e._reactRootContainer=x,e[xn]=x.current,Qo(e.nodeType===8?e.parentNode:e),kr(),x}for(;u=e.lastChild;)e.removeChild(u);if(typeof i=="function"){var E=i;i=function(){var B=Ii(P);E.call(B)}}var P=ql(e,0,!1,null,null,!1,!1,"",Of);return e._reactRootContainer=P,e[xn]=P.current,Qo(e.nodeType===8?e.parentNode:e),kr(function(){Ti(t,P,r,i)}),P}function Ri(e,t,r,i,u){var m=r._reactRootContainer;if(m){var x=m;if(typeof u=="function"){var E=u;u=function(){var P=Ii(x);E.call(P)}}Ti(t,x,e,u)}else x=ry(r,t,e,u,i);return Ii(x)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mo(t.pendingLanes);r!==0&&(ba(t,r|1),kt(t,We()),(Te&6)===0&&(oo=We()+500,Yn()))}break;case 13:kr(function(){var i=kn(e,1);if(i!==null){var u=yt();Zt(i,e,1,u)}}),Ql(e,1)}},Na=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var r=yt();Zt(t,e,134217728,r)}Ql(e,134217728)}},hu=function(e){if(e.tag===13){var t=Jn(e),r=kn(e,t);if(r!==null){var i=yt();Zt(r,e,t,i)}Ql(e,t)}},gu=function(){return _e},vu=function(e,t){var r=_e;try{return _e=e,t()}finally{_e=r}},_o=function(e,t,r){switch(t){case"input":if(it(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var u=Qs(i);if(!u)throw Error(o(90));Se(i),it(i,u)}}}break;case"textarea":Cs(e,r);break;case"select":t=r.value,t!=null&&_n(e,!!r.multiple,t,!1)}},Ke=Vl,ft=kr;var oy={usingClientEntryPoint:!1,Events:[Zo,Ur,Qs,Ce,He,Vl]},fs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sy={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Ps=Ai.inject(sy),rn=Ai}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy,Ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(o(200));return ty(e,t,null,r)},Ct.createRoot=function(e,t){if(!Xl(e))throw Error(o(299));var r=!1,i="",u=Mf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ql(e,1,!1,null,null,r,!1,i,u),e[xn]=t.current,Qo(e.nodeType===8?e.parentNode:e),new Kl(t)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return kr(e)},Ct.hydrate=function(e,t,r){if(!_i(t))throw Error(o(200));return Ri(null,e,t,!0,r)},Ct.hydrateRoot=function(e,t,r){if(!Xl(e))throw Error(o(405));var i=r!=null&&r.hydratedSources||null,u=!1,m="",x=Mf;if(r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(m=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),t=Rf(t,null,e,1,r??null,u,!1,m,x),e[xn]=t.current,Qo(e),i)for(e=0;e<i.length;e++)r=i[e],u=r._getVersion,u=u(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,u]:t.mutableSourceEagerHydrationData.push(r,u);return new Pi(t)},Ct.render=function(e,t,r){if(!_i(t))throw Error(o(200));return Ri(null,e,t,!1,r)},Ct.unmountComponentAtNode=function(e){if(!_i(e))throw Error(o(40));return e._reactRootContainer?(kr(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1},Ct.unstable_batchedUpdates=Vl,Ct.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!_i(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ri(e,t,r,!1,i)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Hf;function Ap(){if(Hf)return ec.exports;Hf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),ec.exports=py(),ec.exports}var Wf;function my(){if(Wf)return Mi;Wf=1;var n=Ap();return Mi.createRoot=n.createRoot,Mi.hydrateRoot=n.hydrateRoot,Mi}var hy=my(),y=Pc();const ee=Rp(y),_c=ay({__proto__:null,default:ee},[y]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vy=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,l)=>l?l.toUpperCase():o.toLowerCase()),Uf=n=>{const s=vy(n);return s.charAt(0).toUpperCase()+s.slice(1)},Mp=(...n)=>n.filter((s,o,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=y.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:f,...p},h)=>y.createElement("svg",{ref:h,...yy,width:s,height:s,stroke:n,strokeWidth:l?Number(o)*24/Number(s):o,className:Mp("lucide",c),...p},[...f.map(([g,w])=>y.createElement(g,w)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(n,s)=>{const o=y.forwardRef(({className:l,...c},d)=>y.createElement(xy,{ref:d,iconNode:s,className:Mp(`lucide-${gy(Uf(n))}`,`lucide-${n}`,l),...c}));return o.displayName=Uf(n),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ki=De("arrow-left",wy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Rc=De("arrow-right",by);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],ky=De("building",Ny);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ac=De("calendar",Cy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ey=De("chart-column",Sy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Mc=De("check",jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ho=De("chevron-down",Ty);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Op=De("chevron-right",Iy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_y=De("chevron-up",Py);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Ay=De("cookie",Ry);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Oy=De("credit-card",My);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Dp=De("database",Dy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],By=De("eye",Ly);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],$y=De("file-text",zy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Gf=De("globe",Fy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Lp=De("mail",Vy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Wy=De("menu",Hy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Gy=De("message-square",Uy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],qy=De("search",Yy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ky=De("send",Qy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Bp=De("settings",Xy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]],Jy=De("tags",Zy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],t0=De("target",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Or=De("x",n0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],zp=De("zoom-in",r0),st=({children:n,variant:s="primary",size:o="md",className:l="",onClick:c})=>{const d={primary:"btn-primary",secondary:"btn-secondary",outline:"btn-outline-dark"},f={sm:"btn-sm",md:"",lg:"btn-lg"},p=`btn ${d[s]||"btn-primary"} ${f[o]||""} ${l}`;return a.jsx("button",{className:p,onClick:c,children:n})},hc=[{code:"tc",label:"繁體中文",shortLabel:"繁中"},{code:"en",label:"English",shortLabel:"EN"},{code:"ja",label:"日本語",shortLabel:"日本語"},{code:"zh-hans",label:"简体中文",shortLabel:"简中"}],$p={nav:{home:"首頁",features:"功能特色",blog:"部落格",pricing:"方案價格",helpCenter:"幫助中心",login:"登入",tryForFree:"預約展示"},hero:{title:"INVITI 讓您將寶貴的時間花在關係維護，而非重複的複製貼上",subtitle:"為活動主辦方設計的公關名單管理系統",tryForFree:"免費試用",bookDemo:"預約展示"},features:{sectionTitle:"產品功能",card1Title:"活動管理／場次管理",card1Description:"一站整合活動名單與寄信流程。",card2Title:"一鍵邀請與追蹤出席狀況",card2Description:"一鍵寄信、即時掌握貴賓出席狀況。",card3Title:"貴賓資料庫",card3Description:"集中管理貴賓資料，累積關係資產。",card4Title:"角色與權限",card4Description:"協作、權限控管、稽核軌跡。",card5Title:"郵件模板",card5Description:"多版本管理，快速套用變數。",viewDetails:"查看詳情",viewAllFeatures:"查看所有功能"},blog:{sectionTitle:"最新文章",readMore:"閱讀更多",viewAll:"查看全部",post1Meta:"客戶故事 • 5 分鐘閱讀",post1Title:"Agency X 如何優化 50+ 場活動",post1Description:"了解一家領先的公關公司如何使用 INVITI 將邀請時間減少 70%。",post2Meta:"產品更新 • 3 分鐘閱讀",post2Title:"推出客製品牌功能",post2Description:"全新白標功能讓您使用品牌識別自訂邀請函。",post3Meta:"產業觀點 • 7 分鐘閱讀",post3Title:"活動管理的未來",post3Description:"2025 年及未來數位活動協調的趨勢與預測。"},blogPage:{title:"部落格",subtitle:"探索產品更新、客戶故事與產業觀點",searchPlaceholder:"搜尋文章…",allPosts:"最新",productUpdates:"產品更新",caseStudies:"客戶故事",industryInsights:"產業觀點",events:"活動花絮",by:"作者",readTime:"分鐘閱讀",previousPost:"上一篇",nextPost:"下一篇",backToBlog:"返回部落格"},pricing:{sectionTitle:"方案價格",freeTitle:"免費版",freePrice:"NT$0",freeDescription:"開始探索 INVITI 的核心功能",basicTitle:"入門版",basicPrice:"NT$600",basicDescription:"適合小型活動與初創團隊",basicBadge:"適合個人工作者",proTitle:"專業版",proPrice:"NT$3,000",proDescription:"適合成長中的企業與定期活動",proBadge:"適合團隊",enterpriseTitle:"企業版",enterprisePrice:"Custom",enterpriseDescription:"為大型組織量身打造的解決方案",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / Year",guestDatabaseLimit:"貴賓資料庫人數",monthlyEmails:"每月寄送郵件數量",emailTemplates:"信件模板",eventsAndSessions:"活動／場次",userLimit:"使用者上限"},helpCenter:{sectionTitle:"幫助中心",searchPlaceholder:"搜尋幫助文章...",browseTopics:"瀏覽主題",gettingStarted:"入門指南",accountManagement:"帳號管理",eventCreation:"建立活動",guestManagement:"賓客管理",technicalSupport:"技術支援",billing:"帳務問題"},helpCenterPage:{title:"我們能如何幫助您？",searchPlaceholder:"搜尋任何內容...",popularTopics:"熱門主題",stillNeedHelp:"仍需要協助？",emailUs:"發送電子郵件",joinCommunity:"加入社群",talkToSupport:"聯絡客服",gettingStarted:"開始使用",productOverview:"產品概覽與角色",invitationsRSVP:"邀請與回覆確認",sessionsEvents:"場次與活動",guestDatabase:"賓客資料庫",pricingBilling:"方案與帳務",settingsPermissions:"設定與權限",troubleshooting:"疑難排解",topic1Title:"發送您的第一封邀請",topic1Description:"了解如何建立和發送您的第一封活動邀請函",topic2Title:"追蹤 RSVP 回覆",topic2Description:"即時監控賓客回覆並管理參與人數",topic3Title:"管理賓客標籤",topic3Description:"使用標籤分類和整理您的賓客資料",topic4Title:"匯入 CSV 檔案",topic4Description:"快速批次匯入賓客名單與聯絡資訊",topic5Title:"自訂邀請函範本",topic5Description:"打造符合品牌形象的精美邀請函",topic6Title:"設定活動提醒",topic6Description:"自動化提醒確保賓客不會錯過您的活動",tagBilling:"帳務",tagDataSources:"資料來源",tagRestoring:"還原內容",tagMembers:"新增成員"},footer:{company:"公司",resources:"資源",invitiFor:"INVITI，適用於",aboutUs:"關於我們",termsAndPrivacy:"條款和隱私權",helpCenter:"幫助中心",pricing:"定價",blog:"部落格",enterprise:"企業",teams:"團隊",individuals:"個人",copyright:"© 2025 藝氣股份有限公司 Inviti All rights reserved."},demoBooking:{title:"預約展示",subtitle:"我們會安排一場約30分鐘的線上會議，了解貴單位目前使用的公關名單管理工具、流程與痛點。",ctaButton:"在 Google 行事曆預約時間",coverTitle:"會議內容",card1Title:"了解現況",card1Description:"貴單位目前使用的公關名單管理工具、流程以及活動規模、頻率等",card2Title:"釐清痛點",card2Description:"目前使用工具或流程上遇到的問題",card3Title:"下一步",card3Description:"若確認貴單位的使用情境符合，我們將會為您開通帳號並協助創建第一個活動",agendaTitle:"30 分鐘議程",agendaTimeline:"0–5′ 需求簡述｜5–15′ 現況/痛點｜15–25′ 功能示範｜25–30′ Q&A/下一步",getTitle:"會後收穫",get1:"客製化流程建議",get2:"功能對應清單",get3:"試用與下一步",privacyNote:"只做需求理解，不會存取或保留你的名單資料。",bookingTitle:"立即預約",fallbackEmail:"若行事曆沒有合適時段，請來信 contact@inviti.vip"},banner:{message:"🎉 新功能上線！立即體驗 INVITI 的智能賓客管理系統",cta:"了解更多"},cookieBanner:{message:"我們使用 Cookie 來增強功能、分析流量並個人化內容。請參閱我們的",cookiePolicy:"Cookie 政策",acceptAll:"接受全部",managePreferences:"管理偏好",rejectNonEssential:"拒絕非必要"},payment:{title:"升級至所選方案",subtitle:"完成付款以啟用方案功能",close:"關閉",planSummaryTitle:"方案摘要",monthly:"月付",yearly:"年付",seats:"座席數（使用者數）",contactSalesForSeats:"Contact sales",accountBillingTitle:"帳號與帳單資訊",email:"Email",emailPlaceholder:"your@email.com",companyName:"公司名稱（選填）",companyNamePlaceholder:"輸入公司名稱",taxId:"統編 / VAT（選填）",taxIdPlaceholder:"輸入統一編號",billingAddress:"帳單地址",street:"街道地址",streetPlaceholder:"輸入街道地址",city:"城市",cityPlaceholder:"輸入城市",postalCode:"郵遞區號",postalCodePlaceholder:"輸入郵遞區號",country:"國家",countryPlaceholder:"選擇國家",paymentMethodTitle:"付款方式",creditCard:"信用卡",bankTransfer:"Bank transfer / 電匯",cardNumber:"卡號",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"到期日",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"持卡人姓名",nameOnCardPlaceholder:"輸入持卡人姓名",verificationTitle:"身份驗證（選填）",sendCode:"傳送驗證碼至 Email",couponTitle:"優惠券（選填）",couponPlaceholder:"輸入優惠券代碼",apply:"Apply",agreeTerms:"我同意",termsLink:"服務條款",privacyLink:"隱私權政策",autoRenewNote:"到期後將自動續約，可於任何時候取消。",totalAmount:"應付金額",effectiveImmediately:"立即生效，按比例計算。",upgradeNow:"立即升級",contactSales:"Contact sales",backToPricing:"返回定價",freePlan:"免費版",basicPlan:"入門版",proPlan:"專業版",enterprisePlan:"企業版"},about:{title:"關於我們",subtitle:"",section1Body:"藝氣股份有限公司 ARTSIE INC. 以成為「中文娛樂的整合者」為目標，打造下一個世代多元且有層次的娛樂場景。",section2Body:"從現場喜劇、綜藝節目到 DJ 派對，藝氣與各領域的指標品牌締結策略合作，一起擴大華語娛樂市場，讓台灣成為中文娛樂的重要基地。",section3Body:"同時，我們也專注於開發專屬娛樂產業的後勤管理工具，例如報帳系統、合約管理系統、公關名單管理系統等，期望成為中文娛樂市場最可靠的後勤夥伴。"},terms:{title:"隱私權政策",subtitle:""},enterpriseInquiry:{title:"聯繫我們了解企業方案",close:"關閉",companyName:"公司名稱",companyNamePlaceholder:"",companyWebsite:"公司網站 / 社群",companyWebsitePlaceholder:"選填：www.example.com 或社群帳號",contactName:"聯絡人姓名",contactNamePlaceholder:"請輸入您的姓名",jobTitle:"職稱（必填）",jobTitlePlaceholder:"",email:"Email",emailPlaceholder:"your@email.com",phone:"聯絡電話（必填）",phonePlaceholder:"+886 912-345-678",currentTool:"貴單位目前使用的公關名單管理工具（必填）",currentToolPlaceholder:"請選擇",currentToolOptions:{spreadsheet:"Google表單、試算表",crm:"CRM系統",selfBuilt:"自建系統",other:"其他",none:"無"},currentToolOther:"若選擇「其他」，請簡述工具名稱或作法",currentToolOtherPlaceholder:"請輸入說明",selectOption:"請選擇一個選項",enterDescription:"請輸入說明",eventsPerQuarter:"每季活動數量",eventsPerQuarterOptions:{range1:"0–1 場",range2:"2–5 場",range3:"6–10 場",range4:"10 場以上"},guestListSize:"單場貴賓名單規模",guestListSizeOptions:{small:"少於 100 人",medium:"100–500 人",large:"500–2,000 人",extraLarge:"2,000 人以上"},integrationNeeds:"是否需要與既有系統整合",integrationOptions:{ticketing:"售票系統",crm:"CRM 系統",email:"Email 平台",other:"其他"},consent:"我同意將以上資訊用於後續聯繫與方案評估，並寄送一份副本至我的 Email。",consentError:"請同意資訊使用條款",submit:"送出需求",submitting:"送出中...",orEmail:"或直接來信 contact@inviti.vip",required:"此欄位為必填",invalidEmail:"請輸入有效的 Email 地址",successMessage:"已送出，我們將儘快與您聯繫。",viewInbox:"查看收件匣"}},o0={nav:{home:"Home",features:"Features",blog:"Blog",pricing:"Pricing",helpCenter:"Help Center",login:"Log in",tryForFree:"Book a Demo"},hero:{title:"Simplify Your Guest Invitations with INVITI",subtitle:"A complete PR guest list management system for event organizers",tryForFree:"Book a Demo",bookDemo:"Book a Demo"},features:{sectionTitle:"Product Features",card1Title:"Event & Session Management",card1Description:"Multi-session setup, time and venue all in one place, linked with email variables.",card2Title:"Automated Invitations & Tracking",card2Description:"Batch sending, reply mapping, real-time status updates.",card3Title:"Centralized Guest Database",card3Description:"Tags, deduplication, cross-event reuse.",card4Title:"Roles & Permissions",card4Description:"Collaboration, access control, audit trails.",card5Title:"Email Templates",card5Description:"Multi-version management, quick variable application.",viewDetails:"View Details",viewAllFeatures:"View All Features"},blog:{sectionTitle:"Latest from Our Blog",readMore:"Read More",viewAll:"View All",post1Meta:"Case Study • 5 min read",post1Title:"How Agency X Streamlined 50+ Events",post1Description:"Learn how a leading PR agency reduced invitation time by 70% using INVITI.",post2Meta:"Product Update • 3 min read",post2Title:"Introducing Custom Branding",post2Description:"New white-label features let you customize invitations with your brand identity.",post3Meta:"Industry Insight • 7 min read",post3Title:"The Future of Event Management",post3Description:"Trends and predictions for digital event coordination in 2025 and beyond."},blogPage:{title:"Blogs",subtitle:"Explore product updates, customer stories, and industry insights",searchPlaceholder:"Search articles…",allPosts:"All",productUpdates:"Product Updates",caseStudies:"Case Studies",industryInsights:"Industry Insights",events:"Events",by:"By",readTime:"min read",previousPost:"Previous",nextPost:"Next",backToBlog:"Back to Blog"},pricing:{sectionTitle:"Pricing Plans",freeTitle:"Free",freePrice:"$0",freeDescription:"Start exploring INVITI core features",basicTitle:"Basic",basicPrice:"$20",basicDescription:"Perfect for small events and startups",basicBadge:"For individuals",proTitle:"Pro",proPrice:"$100",proDescription:"For growing businesses and regular events",proBadge:"For teams",enterpriseTitle:"Enterprise",enterprisePrice:"Custom",enterpriseDescription:"Tailored solutions for large organizations",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / Year",guestDatabaseLimit:"Guest database",monthlyEmails:"Monthly email sends",emailTemplates:"Email templates",eventsAndSessions:"Events / Sessions",userLimit:"User limit"},helpCenter:{sectionTitle:"Help Center",searchPlaceholder:"Search help articles...",browseTopics:"Browse Topics",gettingStarted:"Getting Started",accountManagement:"Account Management",eventCreation:"Event Creation",guestManagement:"Guest Management",technicalSupport:"Technical Support",billing:"Billing"},helpCenterPage:{title:"How can we help?",searchPlaceholder:"Search for anything...",popularTopics:"Popular topics",stillNeedHelp:"Still need help?",emailUs:"Email us",joinCommunity:"Join our community",talkToSupport:"Talk to support",gettingStarted:"Getting started",productOverview:"Product overview & roles",invitationsRSVP:"Invitations & RSVP",sessionsEvents:"Sessions & events",guestDatabase:"Guest database",pricingBilling:"Pricing & billing",settingsPermissions:"Settings & permissions",troubleshooting:"Troubleshooting",topic1Title:"Send your first invitation",topic1Description:"Learn how to create and send your first event invitation",topic2Title:"Track RSVPs",topic2Description:"Monitor guest responses and manage attendance in real-time",topic3Title:"Manage guest tags",topic3Description:"Use tags to categorize and organize your guest data",topic4Title:"Import a CSV",topic4Description:"Quickly bulk import guest lists and contact information",topic5Title:"Customize invitation templates",topic5Description:"Create beautiful invitations that match your brand",topic6Title:"Set up event reminders",topic6Description:"Automate reminders to ensure guests don't miss your event",tagBilling:"Billing",tagDataSources:"Data sources",tagRestoring:"Restoring content",tagMembers:"Adding members"},footer:{company:"Company",resources:"Resources",invitiFor:"INVITI for",aboutUs:"About Us",termsAndPrivacy:"Terms & Privacy",helpCenter:"Help Center",pricing:"Pricing",blog:"Blog",enterprise:"Enterprise",teams:"Teams",individuals:"Individuals",copyright:"© 2025 Inviti All rights reserved."},demoBooking:{title:"Book a Demo",subtitle:"We'll set up a ~30-minute online meeting to understand your PR list tools, workflows, and pain points, then demonstrate how INVITI can help.",ctaButton:"Book on Google Calendar",coverTitle:"What We'll Cover",card1Title:"Current Setup",card1Description:"Your existing list tools, collaboration methods, email workflows",card2Title:"Pain Points",card2Description:"Data duplication, response tracking, handoff issues between team members",card3Title:"Product Demo",card3Description:"See invitations, RSVP tracking, and database management in action",agendaTitle:"30-Minute Agenda",agendaTimeline:"0-5' Overview | 5-15' Current State/Pain Points | 15-25' Feature Demo | 25-30' Q&A/Next Steps",getTitle:"What You'll Get",get1:"Customized workflow recommendations",get2:"Feature compatibility checklist",get3:"Trial access and next steps",privacyNote:"We only discuss requirements—no access to or storage of your guest data.",bookingTitle:"Book Now",fallbackEmail:"If no suitable time slots, email us at contact@inviti.vip"},banner:{message:"🎉 New Feature Launch! Experience INVITI's Smart Guest Management System",cta:"Learn More"},cookieBanner:{message:"We use cookies to enhance functionality, analyze traffic, and personalize content. See our",cookiePolicy:"Cookie Policy",acceptAll:"Accept all",managePreferences:"Manage preferences",rejectNonEssential:"Reject non-essential"},payment:{title:"Upgrade to Selected Plan",subtitle:"Complete payment to activate plan features",close:"Close",planSummaryTitle:"Plan Summary",monthly:"Monthly",yearly:"Yearly",seats:"Seats (Users)",contactSalesForSeats:"Contact sales",accountBillingTitle:"Account & Billing Information",email:"Email",emailPlaceholder:"your@email.com",companyName:"Company Name (Optional)",companyNamePlaceholder:"Enter company name",taxId:"Tax ID / VAT (Optional)",taxIdPlaceholder:"Enter tax ID",billingAddress:"Billing Address",street:"Street Address",streetPlaceholder:"Enter street address",city:"City",cityPlaceholder:"Enter city",postalCode:"Postal Code",postalCodePlaceholder:"Enter postal code",country:"Country",countryPlaceholder:"Select country",paymentMethodTitle:"Payment Method",creditCard:"Credit Card",bankTransfer:"Bank Transfer",cardNumber:"Card Number",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"Expiration",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"Name on Card",nameOnCardPlaceholder:"Enter cardholder name",verificationTitle:"Verification (Optional)",sendCode:"Send verification code to Email",couponTitle:"Coupon (Optional)",couponPlaceholder:"Enter coupon code",apply:"Apply",agreeTerms:"I agree to the",termsLink:"Terms of Service",privacyLink:"Privacy Policy",autoRenewNote:"Auto-renews after expiration. Cancel anytime.",totalAmount:"Total Amount",effectiveImmediately:"Effective immediately, prorated.",upgradeNow:"Upgrade Now",contactSales:"Contact sales",backToPricing:"Back to Pricing",freePlan:"Free",basicPlan:"Basic",proPlan:"Pro",enterprisePlan:"Enterprise"},about:{title:"About Us",subtitle:"",section1Body:'ARTSIE INC. aims to become the "Integrator of Chinese Entertainment," creating diverse and multi-layered entertainment experiences for the next generation.',section2Body:"From live comedy and variety shows to DJ parties, ARTSIE forms strategic partnerships with leading brands across various fields to expand the Chinese-language entertainment market, making Taiwan an important hub for Chinese entertainment.",section3Body:"At the same time, we focus on developing specialized backend management tools for the entertainment industry, such as expense management systems, contract management systems, and PR guest list management systems, with the goal of becoming the most reliable backend partner in the Chinese entertainment market."},terms:{title:"Privacy Policy",subtitle:""},enterpriseInquiry:{title:"Contact Us for Enterprise Plan",close:"Close",companyName:"Company Name",companyNamePlaceholder:"",companyWebsite:"Company Website / Social",companyWebsitePlaceholder:"Optional: www.example.com or social handle",contactName:"Contact Name",contactNamePlaceholder:"Enter your name",jobTitle:"Job Title (Required)",jobTitlePlaceholder:"",email:"Email",emailPlaceholder:"your@email.com",phone:"Phone Number (Required)",phonePlaceholder:"+1 234-567-8900",currentTool:"Current PR Guest List Management Tool (Required)",currentToolPlaceholder:"Please select",currentToolOptions:{spreadsheet:"Google Forms / Spreadsheets",crm:"CRM System",selfBuilt:"Self-built System",other:"Other",none:"None"},currentToolOther:'If you selected "Other", please describe the tool or method',currentToolOtherPlaceholder:"Please enter description",selectOption:"Please select an option",enterDescription:"Please enter description",eventsPerQuarter:"Events per Quarter",eventsPerQuarterOptions:{range1:"0–1 events",range2:"2–5 events",range3:"6–10 events",range4:"10+ events"},guestListSize:"Guest List Size per Event",guestListSizeOptions:{small:"Under 100",medium:"100–500",large:"500–2,000",extraLarge:"2,000+"},integrationNeeds:"Integration Requirements",integrationOptions:{ticketing:"Ticketing System",crm:"CRM System",email:"Email Platform",other:"Other"},consent:"I agree to the use of this information for follow-up contact and plan evaluation, and to receive a copy via email.",consentError:"Please agree to the terms",submit:"Submit Inquiry",submitting:"Submitting...",orEmail:"Or email us at contact@inviti.vip",required:"This field is required",invalidEmail:"Please enter a valid email address",successMessage:"Submitted! We'll get back to you soon.",viewInbox:"View Inbox"}},s0={nav:{home:"ホーム",features:"機能",blog:"ブログ",pricing:"料金",helpCenter:"ヘルプセンター",login:"ログイン",tryForFree:"デモを予約"},hero:{title:"INVITI でゲスト招待を簡素化",subtitle:"イベント主催者のための完全な PR ゲストリスト管理システム",tryForFree:"デモを予約",bookDemo:"デモを予約"},features:{sectionTitle:"製品機能",card1Title:"イベント・セッション管理",card1Description:"マルチセッション設定、時間と会場を一元管理、メール変数と連動。",card2Title:"自動招待状と追跡",card2Description:"一括送信、返信対応、リアルタイムステータス更新。",card3Title:"一元化されたゲストデータベース",card3Description:"タグ、重複排除、イベント間再利用。",card4Title:"役割と権限",card4Description:"コラボレーション、アクセス制御、監査証跡。",card5Title:"メールテンプレート",card5Description:"マルチバージョン管理、変数の迅速な適用。",viewDetails:"詳細を見る",viewAllFeatures:"すべての機能を見る"},blog:{sectionTitle:"ブログの最新情報",readMore:"続きを読む",viewAll:"すべて表示",post1Meta:"事例研究 • 5 分で読む",post1Title:"Agency X が 50 以上のイベントを効率化",post1Description:"大手 PR エージェンシーが INVITI を使用して招待時間を 70% 削減した方法をご覧ください。",post2Meta:"製品アップデート • 3 分で読む",post2Title:"カスタムブランディングの導入",post2Description:"新しいホワイトラベル機能で、ブランドアイデンティティに合わせて招待状をカスタマイズできます。",post3Meta:"業界インサイト • 7 分で読む",post3Title:"イベント管理の未来",post3Description:"2025 年以降のデジタルイベントコーディネーションのトレンドと予測。"},blogPage:{title:"Blogs",subtitle:"製品アップデート、顧客事例、業界インサイトを探索",searchPlaceholder:"記事を検索…",allPosts:"すべて",productUpdates:"製品アップデート",caseStudies:"顧客事例",industryInsights:"業界インサイト",events:"イベント",by:"作成者",readTime:"分で読む",previousPost:"前へ",nextPost:"次へ",backToBlog:"ブログに戻る"},pricing:{sectionTitle:"料金プラン",freeTitle:"無料版",freePrice:"¥0",freeDescription:"INVITIの主要機能を体験",basicTitle:"ベーシック",basicPrice:"¥2,200",basicDescription:"小規模イベントやスタートアップに最適",basicBadge:"個人向け",proTitle:"プロ",proPrice:"¥11,000",proDescription:"成長企業や定期イベント向け",proBadge:"チーム向け",enterpriseTitle:"エンタープライズ",enterprisePrice:"カスタム",enterpriseDescription:"大規模組織向けカスタマイズソリューション",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / 年",guestDatabaseLimit:"ゲストデータベース",monthlyEmails:"月間メール送信数",emailTemplates:"メールテンプレート",eventsAndSessions:"イベント／セッション",userLimit:"ユーザー上限"},helpCenter:{sectionTitle:"ヘルプセンター",searchPlaceholder:"ヘルプ記事を検索...",browseTopics:"トピックを閲覧",gettingStarted:"はじめに",accountManagement:"アカウント管理",eventCreation:"イベント作成",guestManagement:"ゲスト管理",technicalSupport:"技術サポート",billing:"請求"},helpCenterPage:{title:"どのようにお手伝いできますか？",searchPlaceholder:"何でも検索...",popularTopics:"人気のトピック",stillNeedHelp:"まだヘルプが必要ですか？",emailUs:"メールでお問い合わせ",joinCommunity:"コミュニティに参加",talkToSupport:"サポートに連絡",gettingStarted:"はじめに",productOverview:"製品概要と役割",invitationsRSVP:"招待状と出欠確認",sessionsEvents:"セッションとイベント",guestDatabase:"ゲストデータベース",pricingBilling:"料金と請求",settingsPermissions:"設定と権限",troubleshooting:"トラブルシューティング",topic1Title:"最初の招待状を送信",topic1Description:"イベント招待状の作成と送信方法を学ぶ",topic2Title:"出欠確認を追跡",topic2Description:"ゲストの返信をリアルタイムで監視・管理",topic3Title:"ゲストタグを管理",topic3Description:"タグを使用してゲストデータを分類・整理",topic4Title:"CSVをインポート",topic4Description:"ゲストリストと連絡先情報を一括インポート",topic5Title:"招待状テンプレートをカスタマイズ",topic5Description:"ブランドに合った美しい招待状を作成",topic6Title:"イベントリマインダーを設定",topic6Description:"自動リマインダーでゲストの出席を確保",tagBilling:"請求",tagDataSources:"データソース",tagRestoring:"コンテンツの復元",tagMembers:"メンバーの追加"},footer:{company:"会社",resources:"リソース",invitiFor:"INVITIの対象",aboutUs:"会社概要",termsAndPrivacy:"利用規約とプライバシー",helpCenter:"ヘルプセンター",pricing:"料金",blog:"ブログ",enterprise:"企業",teams:"チーム",individuals:"個人",copyright:"© 2025 Inviti All rights reserved."},demoBooking:{title:"デモを予約",subtitle:"約30分のオンラインミーティングを設定しPRリストツール、ワークフロー、課題を把握した後、INVITIがどのように支援できるかをデモンストレーションします。",ctaButton:"Google カレンダーで予約",coverTitle:"会議内容",card1Title:"現状の把握",card1Description:"現在お使いのリストツール、協業方法、メール送信フロー",card2Title:"課題の特定",card2Description:"データ重複、返信追跡、チーム間の引継ぎなどの問題",card3Title:"製品デモ",card3Description:"招待状、RSVP追跡、データベース管理を実際の状況で確認",agendaTitle:"30分間のアジェンダ",agendaTimeline:"0-5分 概要説明｜5-15分 現状/課題｜15-25分 機能デモ｜25-30分 質疑応答/次のステップ",getTitle:"得られるもの",get1:"カスタマイズされたワークフロー提案",get2:"機能対応チェックリスト",get3:"トライアルアクセスと次のステップ",privacyNote:"要件の把握のみを行います。ゲストデータへのアクセスや保存は行いません。",bookingTitle:"今すぐ予約",fallbackEmail:"適切な時間帯がない場合は、contact@inviti.vip までメールでご連絡ください"},banner:{message:"🎉 新機能リリース！INVITI のスマートゲスト管理システムを体験",cta:"詳細を見る"},cookieBanner:{message:"機能の強化、トラフィックの分析、コンテンツのパーソナライズのために Cookie を使用しています。詳細については、",cookiePolicy:"Cookie ポリシー",acceptAll:"すべて承認",managePreferences:"設定を管理",rejectNonEssential:"必須以外を拒否"},payment:{title:"選択したプランにアップグレード",subtitle:"お支払いを完了してプラン機能を有効化",close:"閉じる",planSummaryTitle:"プラン概要",monthly:"月払い",yearly:"年払い",seats:"座席数（ユーザー数）",contactSalesForSeats:"営業担当にお問い合わせ",accountBillingTitle:"アカウント・請求情報",email:"メールアドレス",emailPlaceholder:"your@email.com",companyName:"会社名（任意）",companyNamePlaceholder:"会社名を入力",taxId:"税番号 / VAT（任意）",taxIdPlaceholder:"税番号を入力",billingAddress:"請求先住所",street:"番地",streetPlaceholder:"番地を入力",city:"市区町村",cityPlaceholder:"市区町村を入力",postalCode:"郵便番号",postalCodePlaceholder:"郵便番号を入力",country:"国",countryPlaceholder:"国を選択",paymentMethodTitle:"お支払い方法",creditCard:"クレジットカード",bankTransfer:"銀行振込",cardNumber:"カード番号",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"有効期限",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"カード名義",nameOnCardPlaceholder:"カード名義を入力",verificationTitle:"本人確認（任意）",sendCode:"メールに確認コードを送信",couponTitle:"クーポン（任意）",couponPlaceholder:"クーポンコードを入力",apply:"適用",agreeTerms:"同意します",termsLink:"利用規約",privacyLink:"プライバシーポリシー",autoRenewNote:"有効期限後に自動更新されます。いつでもキャンセル可能。",totalAmount:"合計金額",effectiveImmediately:"即時有効、日割り計算。",upgradeNow:"今すぐアップグレード",contactSales:"営業担当にお問い合わせ",backToPricing:"プランに戻る",freePlan:"無料版",basicPlan:"ベーシック",proPlan:"プロ",enterprisePlan:"エンタープライズ"},about:{title:"私たちについて",subtitle:"",section1Body:"藝氣股份有限公司 ARTSIE INC. は「中国語エンターテインメントの統合者」となることを目標に、次世代の多様で多層的なエンターテインメントシーンを創造しています。",section2Body:"ライブコメディ、バラエティ番組から DJ パーティーまで、藝氣は各分野のリーディングブランドと戦略的パートナーシップを結び、中国語エンターテインメント市場を拡大し、台湾を中国語エンターテインメントの重要な拠点にしています。",section3Body:"同時に、経費管理システム、契約管理システム、PR ゲストリスト管理システムなど、エンターテインメント産業専用のバックエンド管理ツールの開発にも注力し、中国語エンターテインメント市場で最も信頼できるバックエンドパートナーとなることを目指しています。"},terms:{title:"プライバシーポリシー",subtitle:""},enterpriseInquiry:{title:"エンタープライズプランについてお問い合わせ",close:"閉じる",companyName:"会社名",companyNamePlaceholder:"",companyWebsite:"会社のウェブサイト / SNS",companyWebsitePlaceholder:"任意：www.example.com または SNS アカウント",contactName:"担当者名",contactNamePlaceholder:"お名前を入力してください",jobTitle:"役職（必須）",jobTitlePlaceholder:"",email:"メールアドレス",emailPlaceholder:"your@email.com",phone:"電話番号（必須）",phonePlaceholder:"+81 90-1234-5678",currentTool:"貴社が現在使用している PR ゲストリスト管理ツール（必須）",currentToolPlaceholder:"選択してください",currentToolOptions:{spreadsheet:"Google フォーム・スプレッドシート",crm:"CRM システム",selfBuilt:"自社開発システム",other:"その他",none:"なし"},currentToolOther:"「その他」を選択した場合、ツール名または方法を簡単に説明してください",currentToolOtherPlaceholder:"説明を入力してください",selectOption:"オプションを選択してください",enterDescription:"説明を入力してください",eventsPerQuarter:"四半期ごとのイベント数",eventsPerQuarterOptions:{range1:"0–1 回",range2:"2–5 回",range3:"6–10 回",range4:"10 回以上"},guestListSize:"イベントごとのゲストリスト規模",guestListSizeOptions:{small:"100 人未満",medium:"100–500 人",large:"500–2,000 人",extraLarge:"2,000 人以上"},integrationNeeds:"既存システムとの連携の必要性",integrationOptions:{ticketing:"チケットシステム",crm:"CRM システム",email:"メールプラットフォーム",other:"その他"},consent:"上記の情報を後続の連絡とプラン評価に使用し、メールでコピーを受け取ることに同意します。",consentError:"規約に同意してください",submit:"お問い合わせ送信",submitting:"送信中...",orEmail:"または contact@inviti.vip までメールで",required:"この項目は必須です",invalidEmail:"有効なメールアドレスを入力してください",successMessage:"送信されました！すぐにご連絡いたします。",viewInbox:"受信トレイを見る"}},i0={nav:{home:"首页",features:"功能特色",blog:"博客",pricing:"方案价格",helpCenter:"帮助中心",login:"登录",tryForFree:"预约展示"},hero:{title:"INVITI 让您将宝贵的时间花在关系维护，而非重复的复制贴上",subtitle:"为活动主办方设计的公关名单管理系统",tryForFree:"免费试用",bookDemo:"预约展示"},features:{sectionTitle:"产品功能",card1Title:"活动管理／场次管理",card1Description:"一站整合活动名单与寄信流程。",card2Title:"一键邀请与追踪出席状况",card2Description:"一键寄信、即时掌握贵宾出席状况。",card3Title:"贵宾资料库",card3Description:"集中管理贵宾资料，累积关系资产。",card4Title:"角色与权限",card4Description:"协作、权限控管、稽核轨迹。",card5Title:"邮件模板",card5Description:"多版本管理，快速套用变量。",viewDetails:"查看详情",viewAllFeatures:"查看所有功能"},blog:{sectionTitle:"最新文章",readMore:"阅读更多",viewAll:"查看全部",post1Meta:"客户故事 • 5 分钟阅读",post1Title:"Agency X 如何优化 50+ 场活动",post1Description:"了解一家领先的公关公司如何使用 INVITI 将邀请时间减少 70%。",post2Meta:"产品更新 • 3 分钟阅读",post2Title:"推出定制品牌功能",post2Description:"全新白标功能让您使用品牌识别自定义邀请函。",post3Meta:"产业观点 • 7 分钟阅读",post3Title:"活动管理的未来",post3Description:"2025 年及未来数字活动协调的趋势与预测。"},blogPage:{title:"Blogs",subtitle:"探索产品更新、客户故事与产业观点",searchPlaceholder:"搜索文章…",allPosts:"最新",productUpdates:"产品更新",caseStudies:"客户故事",industryInsights:"产业观点",events:"活动花絮",by:"作者",readTime:"分钟阅读",previousPost:"上一篇",nextPost:"下一篇",backToBlog:"返回博客"},pricing:{sectionTitle:"方案价格",freeTitle:"免费版",freePrice:"¥0",freeDescription:"开始探索 INVITI 的核心功能",basicTitle:"入门版",basicPrice:"¥99",basicDescription:"适合小型活动与初创团队",basicBadge:"适合个人工作者",proTitle:"专业版",proPrice:"¥499",proDescription:"适合成长中的企业与定期活动",proBadge:"适合团队",enterpriseTitle:"企业版",enterprisePrice:"Custom",enterpriseDescription:"为大型组织量身打造的解决方案",getStarted:"Get Started",tryBasic:"Try Basic",upgradeToPro:"Upgrade to Pro",contactSales:"Contact Sales",month:"month",monthly:"Monthly",yearly:"Yearly",perYear:" / 年",guestDatabaseLimit:"宾客资料库人数",monthlyEmails:"每月发送邮件数量",emailTemplates:"邮件模板",eventsAndSessions:"活动／场次",userLimit:"用户上限"},helpCenter:{sectionTitle:"帮助中心",searchPlaceholder:"搜索帮助文章...",browseTopics:"浏览主题",gettingStarted:"入门指南",accountManagement:"账号管理",eventCreation:"创建活动",guestManagement:"宾客管理",technicalSupport:"技术支持",billing:"账务问题"},helpCenterPage:{title:"我们能如何帮助您？",searchPlaceholder:"搜索任何内容...",popularTopics:"热门主题",stillNeedHelp:"仍需要协助？",emailUs:"发送电子邮件",joinCommunity:"加入社群",talkToSupport:"联系客服",gettingStarted:"开始使用",productOverview:"产品概览与角色",invitationsRSVP:"邀请与回复确认",sessionsEvents:"场次与活动",guestDatabase:"宾客资料库",pricingBilling:"方案与账务",settingsPermissions:"设置与权限",troubleshooting:"疑难排解",topic1Title:"发送您的第一封邀请",topic1Description:"了解如何创建和发送您的第一封活动邀请函",topic2Title:"追踪 RSVP 回复",topic2Description:"实时监控宾客回复并管理参与人数",topic3Title:"管理宾客标签",topic3Description:"使用标签分类和整理您的宾客资料",topic4Title:"导入 CSV 文件",topic4Description:"快速批次导入宾客名单与联系信息",topic5Title:"自定义邀请函模板",topic5Description:"打造符合品牌形象的精美邀请函",topic6Title:"设置活动提醒",topic6Description:"自动化提醒确保宾客不会错过您的活动",tagBilling:"账务",tagDataSources:"数据来源",tagRestoring:"还原内容",tagMembers:"添加成员"},footer:{company:"公司",resources:"资源",invitiFor:"INVITI，适用于",aboutUs:"关于我们",termsAndPrivacy:"条款和隐私权",helpCenter:"帮助中心",pricing:"定价",blog:"博客",enterprise:"企业",teams:"团队",individuals:"个人",copyright:"© 2025 艺气股份有限公司 Inviti All rights reserved."},demoBooking:{title:"预约展示",subtitle:"我们会安排一场约 30 分钟的线上会议，先了解你的公关名单工具、流程与痛点，再示范 INVITI 如何解决。",ctaButton:"在 Google 日历预约时间",coverTitle:"会议内容",card1Title:"了解现况",card1Description:"你目前使用的名单工具、协作方式、寄信流程",card2Title:"厘清痛点",card2Description:"数据重复、回复追踪、跨同事交接等问题",card3Title:"产品示范",card3Description:"用你的情境展示：邀请、RSVP 追踪、数据库管理",agendaTitle:"30 分钟议程",agendaTimeline:"0–5′ 需求简述｜5–15′ 现况/痛点｜15–25′ 功能示范｜25–30′ Q&A/下一步",getTitle:"会后收获",get1:"客制化流程建议",get2:"功能对应清单",get3:"试用与下一步",privacyNote:"只做需求理解，不会存取或保留你的名单数据。",bookingTitle:"立即预约",fallbackEmail:"若日历没有合适时段，请来信 contact@inviti.vip"},banner:{message:"🎉 新功能上线！立即体验 INVITI 的智能宾客管理系统",cta:"了解更多"},cookieBanner:{message:"我们使用 Cookie 来增强功能、分析流量并个性化内容。请参阅我们的",cookiePolicy:"Cookie 政策",acceptAll:"接受全部",managePreferences:"管理偏好",rejectNonEssential:"拒绝非必要"},payment:{title:"升级至所选方案",subtitle:"完成付款以启用方案功能",close:"关闭",planSummaryTitle:"方案摘要",monthly:"月付",yearly:"年付",seats:"座席数（使用者数）",contactSalesForSeats:"Contact sales",accountBillingTitle:"账号与账单信息",email:"Email",emailPlaceholder:"your@email.com",companyName:"公司名称（选填）",companyNamePlaceholder:"输入公司名称",taxId:"统编 / VAT（选填）",taxIdPlaceholder:"输入统一编号",billingAddress:"账单地址",street:"街道地址",streetPlaceholder:"输入街道地址",city:"城市",cityPlaceholder:"输入城市",postalCode:"邮递区号",postalCodePlaceholder:"输入邮递区号",country:"国家",countryPlaceholder:"选择国家",paymentMethodTitle:"付款方式",creditCard:"信用卡",bankTransfer:"Bank transfer / 电汇",cardNumber:"卡号",cardNumberPlaceholder:"1234 5678 9012 3456",expiration:"到期日",expirationPlaceholder:"MM/YY",cvc:"CVC",cvcPlaceholder:"123",nameOnCard:"持卡人姓名",nameOnCardPlaceholder:"输入持卡人姓名",verificationTitle:"身份验证（选填）",sendCode:"传送验证码至 Email",couponTitle:"优惠券（选填）",couponPlaceholder:"输入优惠券代码",apply:"Apply",agreeTerms:"我同意",termsLink:"服务条款",privacyLink:"隐私权政策",autoRenewNote:"到期后将自动续约，可于任何时候取消。",totalAmount:"应付金额",effectiveImmediately:"立即生效，按比例计算。",upgradeNow:"立即升级",contactSales:"Contact sales",backToPricing:"返回定价",freePlan:"免费版",basicPlan:"入门版",proPlan:"专业版",enterprisePlan:"企业版"},about:{title:"关于我们",subtitle:"",section1Body:"艺气股份有限公司 ARTSIE INC. 以成为「中文娱乐的整合者」为目标，打造下一个世代多元且有层次的娱乐场景。",section2Body:"从现场喜剧、综艺节目到 DJ 派对，艺气与各领域的指标品牌缔结策略合作，一起扩大华语娱乐市场，让台湾成为中文娱乐的重要基地。",section3Body:"同时，我们也专注于开发专属娱乐产业的后勤管理工具，例如报帐系统、合约管理系统、公关名单管理系统等，期望成为中文娱乐市场最可靠的后勤伙伴。"},terms:{title:"隐私权政策",subtitle:""},enterpriseInquiry:{title:"联系我们了解企业方案",close:"关闭",companyName:"公司名称",companyNamePlaceholder:"",companyWebsite:"公司网站 / 社交媒体",companyWebsitePlaceholder:"选填：www.example.com 或社交账号",contactName:"联络人姓名",contactNamePlaceholder:"请输入您的姓名",jobTitle:"职称（必填）",jobTitlePlaceholder:"",email:"Email",emailPlaceholder:"your@email.com",phone:"联络电话（必填）",phonePlaceholder:"+86 138-1234-5678",currentTool:"贵单位目前使用的公关名单管理工具（必填）",currentToolPlaceholder:"请选择",currentToolOptions:{spreadsheet:"Google表单、电子表格",crm:"CRM系统",selfBuilt:"自建系统",other:"其他",none:"无"},currentToolOther:'若选择"其他"，请简述工具名称或做法',currentToolOtherPlaceholder:"请输入说明",selectOption:"请选择一个选项",enterDescription:"请输入说明",eventsPerQuarter:"每季活动数量",eventsPerQuarterOptions:{range1:"0–1 场",range2:"2–5 场",range3:"6–10 场",range4:"10 场以上"},guestListSize:"单场宾客名单规模",guestListSizeOptions:{small:"少于 100 人",medium:"100–500 人",large:"500–2,000 人",extraLarge:"2,000 人以上"},integrationNeeds:"是否需要与既有系统整合",integrationOptions:{ticketing:"票务系统",crm:"CRM 系统",email:"Email 平台",other:"其他"},consent:"我同意将以上信息用于后续联系与方案评估，并发送一份副本至我的 Email。",consentError:"请同意信息使用条款",submit:"提交需求",submitting:"提交中...",orEmail:"或直接来信 contact@inviti.vip",required:"此字段为必填",invalidEmail:"请输入有效的 Email 地址",successMessage:"已提交，我们将尽快与您联系。",viewInbox:"查看收件箱"}},a0={tc:$p,en:o0,ja:s0,"zh-hans":i0};function Ge(n){return a0[n]||$p}const Yf=({isOpen:n,onClose:s,currentLocale:o,onSelectLocale:l,isMobile:c=!1})=>{if(!n)return null;const d=f=>{l(f),s()};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"language-dropdown-backdrop",onClick:s,"aria-hidden":"true"}),a.jsx("div",{className:`dropdown-menu show language-dropdown-menu ${c?"w-100":""}`,style:{position:"absolute",top:c?"calc(78% + 8px)":"calc(100% + 8px)",right:c?void 0:0,left:c?0:void 0,minWidth:c?"100%":"120px"},children:hc.map(f=>a.jsxs("button",{onClick:()=>d(f.code),className:`dropdown-item d-flex align-items-center justify-content-between ${o===f.code?"active":""}`,type:"button",children:[a.jsx("span",{className:"text-dark",children:f.label}),o===f.code&&a.jsx(Mc,{size:16,className:"text-dark"})]},f.code))})]})},Oc="/INVITI-Website/assets/INVITI_Logo-gZkC19gw.webp",l0="/INVITI-Website/assets/INVITI-Chrx_lWW.webp",c0=({isMobile:n=!1,locale:s="tc",onLocaleChange:o,onNavigateToHelpCenter:l,onNavigate:c,onSetScrollTarget:d,enableResponsive:f=!0})=>{const[p,h]=y.useState(!1),[g,w]=y.useState(!1),[v,N]=y.useState(n);y.useEffect(()=>{if(!f){N(n);return}const j=()=>{const M=window.innerWidth<992;N(M),M||h(!1)};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[f,n]);const k=f?v:n,T=Ge(s),b=hc.find(j=>j.code===s)||hc[0],C=j=>{const M=document.getElementById(j);if(M){const z=n?56:48,F=localStorage.getItem("banner-dismissed")==="true"?64:64+z,ae=M.getBoundingClientRect().top+window.pageYOffset-F;window.scrollTo({top:ae,behavior:"smooth"})}else d&&c&&(d(j),c("/"))},I=()=>{document.getElementById("home")?window.scrollTo({top:0,behavior:"smooth"}):c?.("/")},S=[{label:T.nav.home,url:"/",isExternal:!1,action:I},{label:T.nav.features,url:"#features",isExternal:!1,action:()=>C("features")},{label:T.nav.blog,url:"/blog",isExternal:!1,action:()=>c?.("/blog")},{label:T.nav.helpCenter,url:"#help-center",isExternal:!1,action:l}];return a.jsx("nav",{className:"bg-light",children:a.jsxs("div",{className:k?"container-fluid px-3 py-2":"container py-3",children:[a.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[a.jsx("button",{onClick:I,className:"btn btn-link text-dark p-0 border-0 opacity-hover",children:a.jsxs("div",{className:"d-flex align-items-center gap-2",children:[a.jsx("img",{src:Oc,alt:"INVITI Logo",style:{height:"30px",width:"auto",marginRight:"6px"}}),a.jsx("img",{src:l0,alt:"INVITI",style:{height:"16px",width:"auto"}})]})}),!k&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"d-none d-md-flex align-items-center gap-4",children:S.map(j=>j.action?a.jsx("button",{onClick:j.action,className:"btn btn-link text-dark text-decoration-none px-0",children:j.label},j.label):a.jsx("a",{href:j.url,className:"text-dark text-decoration-none",children:j.label},j.label))}),a.jsxs("div",{className:"d-none d-md-flex align-items-center gap-3",children:[a.jsxs("div",{className:"position-relative",children:[a.jsxs("button",{onClick:()=>w(!g),className:"btn btn-outline-dark d-flex align-items-center gap-2","aria-label":"Select language",children:[a.jsx(Gf,{size:16}),a.jsx("span",{className:"small",children:b.shortLabel}),a.jsx(ho,{size:14,className:g?"rotate-180":""})]}),a.jsx(Yf,{isOpen:g,onClose:()=>w(!1),currentLocale:s,onSelectLocale:j=>o?.(j),isMobile:!1})]}),a.jsx("a",{href:"https://app.inviti.vip",target:"_blank",rel:"noopener noreferrer",children:a.jsx(st,{variant:"secondary",size:"sm",children:T.nav.login})}),a.jsx(st,{variant:"primary",size:"sm",onClick:()=>c?.("/booking"),children:T.nav.tryForFree})]})]}),k&&a.jsx("button",{className:"btn d-flex align-items-center justify-content-center",onClick:()=>h(!p),"aria-label":p?"Close menu":"Open menu",children:p?a.jsx(Or,{size:20}):a.jsx(Wy,{size:20})})]}),k&&p&&a.jsx("div",{className:"border-top mt-3 pt-3 bg-light",children:a.jsxs("div",{className:"d-flex flex-column gap-3",children:[S.map(j=>j.action?a.jsx("button",{onClick:()=>{j.action?.(),h(!1)},className:"btn btn-link text-start text-dark text-decoration-none",children:j.label},j.label):a.jsx("a",{href:j.url,className:"text-dark text-decoration-none",onClick:()=>h(!1),children:j.label},j.label)),a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>w(!g),className:"btn btn-outline-dark w-100 d-flex align-items-center justify-content-between",children:[a.jsxs("div",{className:"d-flex align-items-center gap-2",children:[a.jsx(Gf,{size:16}),a.jsx("span",{className:"small",children:b.label})]}),a.jsx(ho,{size:14,className:g?"rotate-180":""})]}),a.jsx(Yf,{isOpen:g,onClose:()=>w(!1),currentLocale:s,onSelectLocale:j=>{o?.(j),w(!1)},isMobile:!0})]}),a.jsxs("div",{className:"d-flex flex-column gap-2",children:[a.jsx("a",{href:"https://app.inviti.vip",target:"_blank",rel:"noopener noreferrer",className:"w-100",children:a.jsx(st,{variant:"secondary",size:"sm",className:"w-100",children:T.nav.login})}),a.jsx(st,{variant:"primary",size:"sm",className:"w-100",onClick:()=>{c?.("/booking"),h(!1)},children:T.nav.tryForFree})]})]})})]})})},dn=({isMobile:n=!1,locale:s="tc",onLocaleChange:o,onNavigateToHelpCenter:l,onNavigate:c,onSetScrollTarget:d})=>a.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 w-full",children:a.jsx(c0,{isMobile:n,locale:s,onLocaleChange:o,onNavigateToHelpCenter:l,onNavigate:c,onSetScrollTarget:d})}),u0=({isMobile:n=!1,locale:s="tc",onNavigate:o})=>{const l=Ge(s);return a.jsx("section",{id:"home",className:"bg-white section-padding",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"row align-items-center gy-5",children:[a.jsx("div",{className:"col-12 col-lg-6",children:a.jsxs("div",{className:"d-flex flex-column gap-3",children:[a.jsx("h1",{className:"display-6 fw-medium",children:l.hero.title}),a.jsx("p",{className:"text-muted lead",children:l.hero.subtitle}),a.jsx("div",{className:"d-flex flex-column flex-sm-row gap-3 pt-2",children:a.jsx(st,{variant:"primary",className:"w-100",onClick:()=>o?.("/booking"),children:l.hero.bookDemo})})]})}),a.jsx("div",{className:"col-12 col-lg-6",children:a.jsx("div",{className:"bg-light border rounded d-flex align-items-center justify-content-center",style:{minHeight:n?"240px":"320px"},children:a.jsx("span",{className:"text-secondary",children:"Hero Illustration"})})})]})})})},d0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Ir(n){const[s,o]=y.useState(!1),l=()=>{o(!0)},{src:c,alt:d,style:f,className:p,...h}=n;return s?a.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${p??""}`,style:f,children:a.jsx("div",{className:"flex items-center justify-center w-full h-full",children:a.jsx("img",{src:d0,alt:"Error loading image",...h,"data-original-url":c})})}):a.jsx("img",{src:c,alt:d,className:p,style:f,...h,onError:l})}const Fp=({icon:n,title:s,description:o,screenshot:l,onClick:c,onScreenshotClick:d,isMobile:f=!1,disabled:p=!1,learnMoreText:h="Learn more"})=>{const[g,w]=y.useState(!1),v=k=>{p||d&&k.target.closest(".screenshot-container")||c?.()},N=k=>{k.stopPropagation(),d?.()};return a.jsx("div",{onClick:v,className:`
        card h-100
        ${p?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${p?"":"shadow-sm hover-shadow"}
      `,style:{transition:"box-shadow 0.2s"},children:a.jsxs("div",{className:`card-body d-flex flex-column ${f?"p-3":"p-4"}`,children:[l&&a.jsxs("div",{className:"screenshot-container position-relative mb-3 bg-light border rounded overflow-hidden flex-shrink-0 cursor-pointer",onClick:d?N:void 0,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),style:{aspectRatio:"16/9"},children:[a.jsx(Ir,{src:l,alt:`${s} screenshot`,className:"w-100 h-100 object-fit-cover transition-transform",style:{transform:g?"scale(1.05)":"scale(1)",transition:"transform 0.2s"}}),d&&a.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",style:{backgroundColor:g?"rgba(0,0,0,0.2)":"transparent",transition:"background-color 0.2s"},children:a.jsx("div",{className:"bg-white rounded-circle p-2 shadow transition-all",style:{opacity:g?1:0,transform:g?"scale(1)":"scale(0.9)"},children:a.jsx(zp,{size:20,className:"text-dark"})})})]}),a.jsx("div",{className:"d-inline-flex align-items-center justify-content-center rounded-circle bg-light mb-3 flex-shrink-0",style:{width:"28px",height:"28px"},children:n}),a.jsx("h5",{className:"card-title mb-2 text-truncate-2-lines",children:s}),a.jsx("p",{className:"card-text text-muted mb-3 small flex-grow-1 text-truncate-2-lines",children:o}),!p&&a.jsxs("div",{className:"d-flex align-items-center gap-1 text-muted small mt-auto",children:[a.jsx("span",{children:h}),a.jsx(Rc,{size:14})]})]})})},f0=({isMobile:n=!1,onNavigate:s,locale:o="tc"})=>{const l=Ge(o),c=[{id:"event-session-management",icon:a.jsx(Ac,{size:22,className:"text-dark"}),title:l.features.card1Title,description:l.features.card1Description,screenshot:"https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4MTI4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"},{id:"automated-invitations",icon:a.jsx(Lp,{size:22,className:"text-dark"}),title:l.features.card2Title,description:l.features.card2Description,screenshot:"https://images.unsplash.com/photo-1584543515885-b8981dbf0b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGF1dG9tYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080"},{id:"guest-database",icon:a.jsx(Dp,{size:22,className:"text-dark"}),title:l.features.card3Title,description:l.features.card3Description,screenshot:"https://images.unsplash.com/photo-1740560051533-3acef26ace95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGNvbnRhY3RzJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjE4MTI4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"}];return a.jsx(a.Fragment,{children:a.jsx("section",{id:"features",className:"section-padding bg-light border-top border-bottom",children:a.jsxs("div",{className:n?"container-fluid px-4":"container",children:[a.jsx("div",{className:"mb-5",children:a.jsx("h2",{className:`mb-3 ${n?"text-start":"text-center"}`,children:l.features.sectionTitle})}),a.jsx("div",{className:"row g-4",children:c.map(d=>a.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:a.jsx(Fp,{icon:d.icon,title:d.title,description:d.description,screenshot:d.screenshot,onClick:()=>s?.(`/features/${d.id}`),isMobile:n,learnMoreText:l.features.viewDetails})},d.id))})]})})})},gc=({thumbnail:n,title:s,excerpt:o,category:l,date:c,author:d,readTime:f,onClick:p})=>a.jsxs("div",{onClick:p,className:"group cursor-pointer border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm active:opacity-90",style:{borderRadius:"8px"},children:[n&&a.jsx("div",{className:"w-full overflow-hidden",style:{borderRadius:"8px 8px 0 0"},children:a.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:a.jsx(Ir,{src:n,alt:s,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"})})}),a.jsxs("div",{className:"p-4 sm:p-4",children:[a.jsx("h5",{className:"mb-2 leading-[140%] text-gray-900 group-hover:text-gray-700 transition-colors text-sm sm:text-base",children:s}),a.jsx("p",{className:"text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-[150%] line-clamp-2",children:o}),a.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-gray-100",children:[d.avatar&&a.jsx("div",{className:"blog-card-avatar bg-gray-100 flex items-center justify-center",style:{padding:"4px"},children:a.jsx(Ir,{src:d.avatar,alt:d.name,className:"w-full h-full object-contain",loading:"lazy"})}),!d.avatar&&a.jsx("div",{className:"blog-card-avatar bg-gray-200 flex items-center justify-center",children:a.jsx("span",{className:"text-[10px] sm:text-xs text-gray-600",children:d.name[0]})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"text-xs sm:text-sm text-gray-900 truncate",children:d.name}),a.jsx("div",{className:"text-xs text-gray-500 truncate",children:d.role})]})]}),a.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500 flex-wrap sm:flex-nowrap pt-1",children:[a.jsx("span",{className:"px-2 py-1 bg-gray-50 border border-gray-200",style:{borderRadius:"4px"},children:l}),a.jsx("span",{children:"•"}),a.jsx("span",{children:c}),a.jsx("span",{children:"•"}),a.jsx("span",{children:f})]})]})]}),p0=`# 什麼是「禮賓」？為什麼活動一定要有人專門負責招待？

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
`,m0=`# 公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則

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

與其到最後才尷尬地看著空位，不如在一開始就把目標、角色、歷史成效和場地條件納入考量，讓每一張公關票都被當成一份「要被好好交代的責任」。`,h0=`# 活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟

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

雖然還是很忙、還是很累，但至少，這不再是一場沒有結構的混戰，而是一段可以一步一步走完的流程。`,g0=`# 活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了

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

當你開始把這幾件事當成禮賓流程中「必做的最後一步」，前面那些辛苦邀約、設計配票、站在禮賓桌撐場的每一刻，才會真的在下一場活動裡，看得出它留下了什麼。`,v0=`# 演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法

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

當動線、人員分工、活動前 Brief、取票名單和現場應變都被好好設計過，禮賓桌就不只是「發票的地方」，而會變成整場活動第一個、也是最重要的一個「品牌接觸點」。`,y0=`# 為什麼公關名單不能只放在一份 Excel？從資料庫開始的邀約流程

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

而真正被累積下來的，不再是一堆分散的檔案，而是一份能跨活動檢索、可以被新人接手的**關係資產**。`,x0=`# 為什麼在發出第一張公關票之前，要先想清楚邀約目標？

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


當這個答案被寫下來，才算是真正啟動了禮賓流程。`,w0=`\uFEFF名稱,撰寫人,撰寫時間,種類,閱讀時間（分鐘）\r
什麼是「禮賓」？為什麼活動一定要有人專門負責招待？,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
為什麼在發出第一張公關票之前，要先想清楚邀約目標？,游幃傑 Jerry Yu,2025年11月27日,產業觀點,5\r
公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則,游幃傑 Jerry Yu,2025年11月27日,產業觀點,5\r
為什麼公關名單不能只放在一份 Excel？從資料庫開始的邀約流程,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4\r
活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了,游幃傑 Jerry Yu,2025年11月27日,產業觀點,4`,uo=Object.assign({"../assets/Blog/什麼是「禮賓」？為什麼活動一定要有人專門負責招待？ 2b81854591d78069989dc42bbe16564b.md":p0,"../assets/Blog/公關票要怎麼分配才不會吵架？從角色分工開始設計配票規則 2b81854591d780aea136f3928e709a71.md":m0,"../assets/Blog/活動前一週最崩潰的票券整理，其實可以拆成幾個固定步驟 2b81854591d78083a7fbce5a721eebdd.md":h0,"../assets/Blog/活動結束如果沒做這幾件事，前面所有禮賓的辛苦都白費了 2b81854591d78023ac9de3b5467e8016.md":g0,"../assets/Blog/演出當天禮賓桌在忙什麼？從排隊動線到現場應變的心法 2b81854591d780ba8437d8902268a0e0.md":v0,"../assets/Blog/為什麼公關名單不能只放在一份 Excel？從資料庫開始的邀約流程 2b81854591d7805c93b1d4ce1ce45cf7.md":y0,"../assets/Blog/為什麼在發出第一張公關票之前，要先想清楚邀約目標？ 2b81854591d780b8a455f2a2c41d990b.md":x0});function b0(n){const s=n.trim().split(`
`),o=s[0].split(","),l=o.findIndex(g=>g.includes("名稱")),c=o.findIndex(g=>g.includes("撰寫人")),d=o.findIndex(g=>g.includes("撰寫時間")),f=o.findIndex(g=>g.includes("種類")),p=o.findIndex(g=>g.includes("閱讀時間")),h=[];for(let g=1;g<s.length;g++){const w=s[g];if(!w.trim())continue;const v=[];let N="",k=!1;for(let I=0;I<w.length;I++){const S=w[I];S==='"'?k=!k:S===","&&!k?(v.push(N.trim()),N=""):N+=S}v.push(N.trim());const T=v[l]?.trim()||"";if(!T)continue;let b=T.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100);(!b||b.length<3)&&(b=`post-${g}`);const C=Object.keys(uo).find(I=>{try{const S=decodeURIComponent(I);return S.replace(/\.md$/,"").replace(/\s+[a-f0-9]+$/i,"").includes(T)||S.includes(T)}catch{return I.includes(encodeURIComponent(T))}})||"";h.push({id:b,title:T,author:v[c]?.trim()||"",date:v[d]?.trim()||"",category:v[f]?.trim()||"",readTime:parseInt(v[p]?.trim()||"0",10),markdownPath:C})}return h}function ys(){return b0(w0)}function N0(n){return ys().find(o=>o.id===n)}function Dc(n){if(!n)return"";if(uo[n]){const o=uo[n];return typeof o=="string"?o:o?.default||""}const s=Object.keys(uo).find(o=>{try{const l=decodeURIComponent(o),c=decodeURIComponent(n);return o===n||l===c||l.includes(c)||c.includes(l)||o.includes(n.split("/").pop()||"")}catch{return o.includes(n)||n.includes(o)}});if(s&&uo[s]){const o=uo[s];return typeof o=="string"?o:o?.default||""}return""}function yo(n){const s=n.split(`
`),o={};let l=0,c=!1;for(let h=0;h<Math.min(10,s.length);h++){const g=s[h];if(g.includes("撰寫人:"))o.author=g.split("撰寫人:")[1]?.trim()||"",c=!0;else if(g.includes("撰寫時間:"))o.date=g.split("撰寫時間:")[1]?.trim()||"",c=!0;else if(g.includes("種類:"))o.category=g.split("種類:")[1]?.trim()||"",c=!0;else if(g.includes("閱讀時間（分鐘）:")){const w=g.split("閱讀時間（分鐘）:")[1]?.trim()||"0";o.readTime=parseInt(w,10),c=!0}else if(g.startsWith("#")&&c){l=h;break}}let d=c&&l>0?s.slice(l):s;d.length>0&&d[0].trim().startsWith("# ")&&(d=d.slice(1));const f=C0(d.join(`
`)),p=k0(d.join(`
`));return{frontmatter:o,content:f,excerpt:p}}function k0(n){let s=n.replace(/^#+\s+/gm,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\[([^\]]+)\]\([^\)]+\)/g,"$1").replace(/^[-*+]\s+/gm,"").replace(/^>\s+/gm,"").trim();const o=s.split(`

`)[0]||s;return o.length>200?o.substring(0,200)+"...":o}function C0(n){let s=n;s=s.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g,(g,w,v)=>{let N="";try{const k=decodeURIComponent(v);N=k.split("/").pop()||k.split("\\").pop()||"",N=N.split("?")[0].split("#")[0]}catch{N=v.split("/").pop()||v.split("\\").pop()||"",N=N.split("?")[0].split("#")[0]}return N=N.replace(/\s+\d+(?=\.(png|jpg|jpeg|gif|webp|svg)$)/i,""),!N||!N.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)?g:`<img data-instruction-image="${N}" alt="${w||""}" style="max-width: 100%; height: auto;" />`}),s=s.replace(/^### (.*$)/gim,(g,w)=>{const v=w.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");return`<h3 id="${v}" data-anchor="${v}">${w}</h3>`}),s=s.replace(/^## (.*$)/gim,(g,w)=>{const v=w.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");return`<h2 id="${v}" data-anchor="${v}">${w}</h2>`}),s=s.replace(/^# (.*$)/gim,(g,w)=>{const v=w.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");return`<h1 id="${v}" data-anchor="${v}">${w}</h1>`}),s=s.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),s=s.replace(/\*(.*?)\*/g,"<em>$1</em>"),s=s.replace(/\[([^\]]+)\]\(([^\)]+)\)/g,(g,w,v)=>`<a href="${v}" target="_blank" rel="noopener noreferrer">${w}</a>`),s=s.replace(/^---$/gim,"<hr/>"),s=s.replace(/^>\s+(.*$)/gim,"<blockquote>$1</blockquote>");const o=s.split(`
`),l=[],c=[];let d=null;function f(g){const w=g.match(/^(\s*)/);return w?w[1].length:0}function p(g){for(d!==null&&d>=g&&(l.push("</li>"),d=null);c.length>0&&c[c.length-1].level>=g;){const w=c.pop();w.type==="ul"?l.push("</ul>"):w.type==="ol"&&l.push("</ol>")}}function h(g){const w=g.trim();return/^[-*+]\s+/.test(w)||/^\d+\.\s+/.test(w)}for(let g=0;g<o.length;g++){const w=o[g],v=w.trim(),N=f(w),k=g+1<o.length?o[g+1]:null,T=k?f(k):-1,C=(k?h(k):!1)&&T>N;if(!v){d!==null&&(l.push("</li>"),d=null),p(0),l.push("");continue}const I=v.match(/^[-*+]\s+(.+)$/);if(I){d!==null&&d>=N&&(l.push("</li>"),d=null);const j=c.length>0?c[c.length-1]:null;(!j||j.level!==N||j.type!=="ul")&&(p(N),c.push({type:"ul",level:N}),l.push("<ul>")),C?(l.push(`<li>${I[1]}`),d=N):l.push(`<li>${I[1]}</li>`);continue}const S=v.match(/^(\d+)\.\s+(.+)$/);if(S){const j=S[1],M=S[2];d!==null&&d>=N&&(l.push("</li>"),d=null);const $=c.length>0?c[c.length-1]:null;(!$||$.level!==N||$.type!=="ol")&&(p(N),c.push({type:"ol",level:N}),l.push("<ol>")),C?(l.push(`<li value="${j}">${M}`),d=N):l.push(`<li value="${j}">${M}</li>`);continue}d!==null&&(l.push("</li>"),d=null),p(0),l.push(w)}return d!==null&&l.push("</li>"),p(0),s=l.join(`
`),s=s.split(`
`).map(g=>{const w=g.trim();return w?w.startsWith("<")?w:"<p>"+w+"</p>":""}).join(`
`),s=s.replace(/<p><\/p>/g,""),s=s.replace(/<p>\s*<\/p>/g,""),s=s.replace(/<\/ul>\s*<ul>/g,""),s=s.replace(/<\/ol>\s*<ol>/g,""),s=s.replace(/<p>(<img[^>]*>)<\/p>/g,"$1"),s}function S0(n){const s=[],o=n.split(`
`);for(const l of o){const d=l.trim().match(/^##\s+(.+)$/);if(d){const f=d[1].replace(/\*\*/g,"").trim(),p=f.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");s.push({id:p,text:f,level:2})}}return s}const E0=({isMobile:n=!1,locale:s="tc",onNavigate:o})=>{const l=Ge(s),c={產品更新:l.blogPage.productUpdates,客戶故事:l.blogPage.caseStudies,產業觀點:l.blogPage.industryInsights,活動花絮:l.blogPage.events},d=y.useMemo(()=>{const g=[...ys()].sort((v,N)=>{const k=new Date(v.date||"").getTime();return new Date(N.date||"").getTime()-k}).slice(0,3),w=["https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800","https://images.unsplash.com/photo-1519741497674-611481863552?w=800","https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800","https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800","https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800","https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"];return g.map((v,N)=>{const k=v.markdownPath?Dc(v.markdownPath):"",T=k?yo(k):null,b=w[N%w.length],C=v.author||"INVITI 團隊";return{id:v.id,thumbnail:b,title:v.title,excerpt:T?.excerpt||"閱讀完整文章...",category:c[v.category]||v.category,date:v.date,author:{name:C,role:"產品與營運",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"},readTime:`${v.readTime} ${l.blogPage.readTime}`}})},[l,c]),f=p=>{if(o){const h=encodeURIComponent(p);o(`/blog/${h}`)}};return a.jsx("section",{id:"blog",className:"section-padding bg-white",children:a.jsxs("div",{className:n?"container-fluid px-4":"container",children:[a.jsxs("div",{className:`d-flex ${n?"flex-column mb-4":"align-items-center justify-content-between mb-5"}`,children:[a.jsx("h2",{className:`mb-3 ${n?"text-start":"mb-0"}`,children:l.blog.sectionTitle}),!n&&a.jsx("button",{onClick:()=>o?.("/blog"),className:"btn btn-link text-decoration-none text-dark px-0",children:l.blog.viewAll})]}),a.jsx("div",{className:`row g-4 ${n?"":"row-cols-1 row-cols-md-3"}`,children:d.map(p=>a.jsx("div",{className:n?"":"col",children:a.jsx(gc,{...p,onClick:()=>f(p.id)})},p.id))}),n&&a.jsx("div",{className:"mt-4",children:a.jsx("button",{onClick:()=>o?.("/blog"),className:"btn btn-link text-decoration-none text-dark px-0",children:l.blog.viewAll})})]})})},j0="/INVITI-Website/assets/logo-C1WJA3NS.webp",fn=({isMobile:n=!1,locale:s="tc",onNavigate:o,onNavigateToHelpCenter:l})=>{const c=Ge(s),d=()=>{o?o("/"):window.scrollTo({top:0,behavior:"smooth"})};return a.jsx("footer",{className:"bg-dark text-white border-0",children:a.jsxs("div",{className:n?"container-fluid px-4 py-5":"container py-5",children:[a.jsxs("div",{className:"row g-5",children:[a.jsx("div",{className:`col-12 ${n?"text-center mb-4":"col-lg-3 mb-0 d-flex justify-content-center"}`,children:a.jsx("button",{onClick:d,className:"btn btn-link text-white p-0 border-0 focus-ring text-decoration-none opacity-hover d-flex justify-content-center",style:{transition:"opacity 0.2s"},children:a.jsx("img",{src:j0,alt:"INVITI",style:{height:n?"48px":"114px",width:"auto",display:"flex",justifyContent:"center",alignItems:"center",filter:"brightness(0) invert(1)"},className:"img-fluid"})})}),a.jsx("div",{className:"col-10 col-lg-9 mx-auto",children:a.jsxs("div",{className:"row g-4",children:[a.jsxs("div",{className:"col-12 col-md-4",children:[a.jsx("h6",{className:"text-white mb-3 fw-bold",children:c.footer.company}),a.jsxs("div",{className:"d-flex flex-column gap-2",children:[a.jsx("button",{onClick:()=>o?.("/about"),className:"text-white-50 text-decoration-none small text-start bg-transparent border-0 p-0",children:c.footer.aboutUs}),a.jsx("button",{onClick:()=>o?.("/terms"),className:"text-white-50 text-decoration-none small text-start bg-transparent border-0 p-0",children:c.footer.termsAndPrivacy})]})]}),a.jsxs("div",{className:"col-12 col-md-4",children:[a.jsx("h6",{className:"text-white mb-3 fw-bold",children:c.footer.resources}),a.jsxs("div",{className:"d-flex flex-column gap-2",children:[a.jsx("button",{onClick:l,className:"text-white-50 text-decoration-none small text-left",children:c.footer.helpCenter}),a.jsx("button",{onClick:()=>o?.("/blog"),className:"text-white-50 text-decoration-none small text-left",children:c.footer.blog})]})]}),a.jsxs("div",{className:"col-12 col-md-4",children:[a.jsx("h6",{className:"text-white mb-3 fw-bold",children:c.footer.invitiFor}),a.jsxs("div",{className:"d-flex flex-column gap-2 text-white-50 small",children:[a.jsx("span",{children:c.footer.enterprise}),a.jsx("span",{children:c.footer.teams}),a.jsx("span",{className:"mb-0",children:c.footer.individuals})]})]})]})})]}),a.jsx("hr",{className:"my-4 text-white opacity-25"}),a.jsx("div",{className:"text-center",children:a.jsx("p",{className:"text-white-50 small mb-0",children:c.footer.copyright})})]})})},rc=768;function xo(){const[n,s]=y.useState(void 0);return y.useEffect(()=>{const o=window.matchMedia(`(max-width: ${rc-1}px)`),l=()=>{s(window.innerWidth<rc)};return o.addEventListener("change",l),s(window.innerWidth<rc),()=>o.removeEventListener("change",l)},[]),!!n}const T0=({isMobile:n=!1,onAcceptAll:s,onRejectNonEssential:o,onManagePreferences:l,onViewPolicy:c,locale:d="tc"})=>{const f=Ge(d),p=xo(),h=n===!0?!0:p;return a.jsx("div",{className:`fixed-banner bg-white border-top shadow-sm ${h?"px-4 py-4":""}`,children:a.jsx("div",{className:h?"w-full":"container py-4",children:a.jsxs("div",{className:`${h?"flex flex-col gap-3":"d-flex align-items-center justify-content-between gap-4"}`,children:[a.jsxs("p",{className:`mb-0 text-secondary ${h?"text-sm text-center":""}`,children:[f.cookieBanner.message," ",a.jsx("button",{onClick:c,className:`btn btn-link p-0 text-dark text-decoration-underline ${h?"text-sm":""}`,children:f.cookieBanner.cookiePolicy})]}),a.jsxs("div",{className:`${h?"flex flex-col w-full gap-2":"d-flex align-items-center gap-2"}`,children:[a.jsx(st,{variant:"primary",size:"sm",onClick:s,className:h?"w-full":"",children:f.cookieBanner.acceptAll}),a.jsx(st,{variant:"secondary",size:"sm",onClick:l,className:h?"w-full":"",children:f.cookieBanner.managePreferences}),a.jsx(st,{variant:"secondary",size:"sm",onClick:o,className:h?"w-full":"",children:f.cookieBanner.rejectNonEssential})]})]})})})};function Vp(n){var s,o,l="";if(typeof n=="string"||typeof n=="number")l+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(s=0;s<c;s++)n[s]&&(o=Vp(n[s]))&&(l&&(l+=" "),l+=o)}else for(o in n)n[o]&&(l&&(l+=" "),l+=o);return l}function Hp(){for(var n,s,o=0,l="",c=arguments.length;o<c;o++)(n=arguments[o])&&(s=Vp(n))&&(l&&(l+=" "),l+=s);return l}const I0=(n,s)=>{const o=new Array(n.length+s.length);for(let l=0;l<n.length;l++)o[l]=n[l];for(let l=0;l<s.length;l++)o[n.length+l]=s[l];return o},P0=(n,s)=>({classGroupId:n,validator:s}),Wp=(n=new Map,s=null,o)=>({nextPart:n,validators:s,classGroupId:o}),Xi="-",qf=[],_0="arbitrary..",R0=n=>{const s=M0(n),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=n;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return A0(f);const p=f.split(Xi),h=p[0]===""&&p.length>1?1:0;return Up(p,h,s)},getConflictingClassGroupIds:(f,p)=>{if(p){const h=l[f],g=o[f];return h?g?I0(g,h):h:g||qf}return o[f]||qf}}},Up=(n,s,o)=>{if(n.length-s===0)return o.classGroupId;const c=n[s],d=o.nextPart.get(c);if(d){const g=Up(n,s+1,d);if(g)return g}const f=o.validators;if(f===null)return;const p=s===0?n.join(Xi):n.slice(s).join(Xi),h=f.length;for(let g=0;g<h;g++){const w=f[g];if(w.validator(p))return w.classGroupId}},A0=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const s=n.slice(1,-1),o=s.indexOf(":"),l=s.slice(0,o);return l?_0+l:void 0})(),M0=n=>{const{theme:s,classGroups:o}=n;return O0(o,s)},O0=(n,s)=>{const o=Wp();for(const l in n){const c=n[l];Lc(c,o,l,s)}return o},Lc=(n,s,o,l)=>{const c=n.length;for(let d=0;d<c;d++){const f=n[d];D0(f,s,o,l)}},D0=(n,s,o,l)=>{if(typeof n=="string"){L0(n,s,o);return}if(typeof n=="function"){B0(n,s,o,l);return}z0(n,s,o,l)},L0=(n,s,o)=>{const l=n===""?s:Gp(s,n);l.classGroupId=o},B0=(n,s,o,l)=>{if($0(n)){Lc(n(l),s,o,l);return}s.validators===null&&(s.validators=[]),s.validators.push(P0(o,n))},z0=(n,s,o,l)=>{const c=Object.entries(n),d=c.length;for(let f=0;f<d;f++){const[p,h]=c[f];Lc(h,Gp(s,p),o,l)}},Gp=(n,s)=>{let o=n;const l=s.split(Xi),c=l.length;for(let d=0;d<c;d++){const f=l[d];let p=o.nextPart.get(f);p||(p=Wp(),o.nextPart.set(f,p)),o=p}return o},$0=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,F0=n=>{if(n<1)return{get:()=>{},set:()=>{}};let s=0,o=Object.create(null),l=Object.create(null);const c=(d,f)=>{o[d]=f,s++,s>n&&(s=0,l=o,o=Object.create(null))};return{get(d){let f=o[d];if(f!==void 0)return f;if((f=l[d])!==void 0)return c(d,f),f},set(d,f){d in o?o[d]=f:c(d,f)}}},vc="!",Qf=":",V0=[],Kf=(n,s,o,l,c)=>({modifiers:n,hasImportantModifier:s,baseClassName:o,maybePostfixModifierPosition:l,isExternal:c}),H0=n=>{const{prefix:s,experimentalParseClassName:o}=n;let l=c=>{const d=[];let f=0,p=0,h=0,g;const w=c.length;for(let b=0;b<w;b++){const C=c[b];if(f===0&&p===0){if(C===Qf){d.push(c.slice(h,b)),h=b+1;continue}if(C==="/"){g=b;continue}}C==="["?f++:C==="]"?f--:C==="("?p++:C===")"&&p--}const v=d.length===0?c:c.slice(h);let N=v,k=!1;v.endsWith(vc)?(N=v.slice(0,-1),k=!0):v.startsWith(vc)&&(N=v.slice(1),k=!0);const T=g&&g>h?g-h:void 0;return Kf(d,k,N,T)};if(s){const c=s+Qf,d=l;l=f=>f.startsWith(c)?d(f.slice(c.length)):Kf(V0,!1,f,void 0,!0)}if(o){const c=l;l=d=>o({className:d,parseClassName:c})}return l},W0=n=>{const s=new Map;return n.orderSensitiveModifiers.forEach((o,l)=>{s.set(o,1e6+l)}),o=>{const l=[];let c=[];for(let d=0;d<o.length;d++){const f=o[d],p=f[0]==="[",h=s.has(f);p||h?(c.length>0&&(c.sort(),l.push(...c),c=[]),l.push(f)):c.push(f)}return c.length>0&&(c.sort(),l.push(...c)),l}},U0=n=>({cache:F0(n.cacheSize),parseClassName:H0(n),sortModifiers:W0(n),...R0(n)}),G0=/\s+/,Y0=(n,s)=>{const{parseClassName:o,getClassGroupId:l,getConflictingClassGroupIds:c,sortModifiers:d}=s,f=[],p=n.trim().split(G0);let h="";for(let g=p.length-1;g>=0;g-=1){const w=p[g],{isExternal:v,modifiers:N,hasImportantModifier:k,baseClassName:T,maybePostfixModifierPosition:b}=o(w);if(v){h=w+(h.length>0?" "+h:h);continue}let C=!!b,I=l(C?T.substring(0,b):T);if(!I){if(!C){h=w+(h.length>0?" "+h:h);continue}if(I=l(T),!I){h=w+(h.length>0?" "+h:h);continue}C=!1}const S=N.length===0?"":N.length===1?N[0]:d(N).join(":"),j=k?S+vc:S,M=j+I;if(f.indexOf(M)>-1)continue;f.push(M);const $=c(I,C);for(let z=0;z<$.length;++z){const L=$[z];f.push(j+L)}h=w+(h.length>0?" "+h:h)}return h},q0=(...n)=>{let s=0,o,l,c="";for(;s<n.length;)(o=n[s++])&&(l=Yp(o))&&(c&&(c+=" "),c+=l);return c},Yp=n=>{if(typeof n=="string")return n;let s,o="";for(let l=0;l<n.length;l++)n[l]&&(s=Yp(n[l]))&&(o&&(o+=" "),o+=s);return o},Q0=(n,...s)=>{let o,l,c,d;const f=h=>{const g=s.reduce((w,v)=>v(w),n());return o=U0(g),l=o.cache.get,c=o.cache.set,d=p,p(h)},p=h=>{const g=l(h);if(g)return g;const w=Y0(h,o);return c(h,w),w};return d=f,(...h)=>d(q0(...h))},K0=[],Je=n=>{const s=o=>o[n]||K0;return s.isThemeGetter=!0,s},qp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Qp=/^\((?:(\w[\w-]*):)?(.+)\)$/i,X0=/^\d+\/\d+$/,Z0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,J0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ex=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,tx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,nx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,io=n=>X0.test(n),Ee=n=>!!n&&!Number.isNaN(Number(n)),rr=n=>!!n&&Number.isInteger(Number(n)),oc=n=>n.endsWith("%")&&Ee(n.slice(0,-1)),jn=n=>Z0.test(n),rx=()=>!0,ox=n=>J0.test(n)&&!ex.test(n),Kp=()=>!1,sx=n=>tx.test(n),ix=n=>nx.test(n),ax=n=>!me(n)&&!he(n),lx=n=>wo(n,Jp,Kp),me=n=>qp.test(n),jr=n=>wo(n,em,ox),sc=n=>wo(n,px,Ee),Xf=n=>wo(n,Xp,Kp),cx=n=>wo(n,Zp,ix),Oi=n=>wo(n,tm,sx),he=n=>Qp.test(n),ms=n=>bo(n,em),ux=n=>bo(n,mx),Zf=n=>bo(n,Xp),dx=n=>bo(n,Jp),fx=n=>bo(n,Zp),Di=n=>bo(n,tm,!0),wo=(n,s,o)=>{const l=qp.exec(n);return l?l[1]?s(l[1]):o(l[2]):!1},bo=(n,s,o=!1)=>{const l=Qp.exec(n);return l?l[1]?s(l[1]):o:!1},Xp=n=>n==="position"||n==="percentage",Zp=n=>n==="image"||n==="url",Jp=n=>n==="length"||n==="size"||n==="bg-size",em=n=>n==="length",px=n=>n==="number",mx=n=>n==="family-name",tm=n=>n==="shadow",hx=()=>{const n=Je("color"),s=Je("font"),o=Je("text"),l=Je("font-weight"),c=Je("tracking"),d=Je("leading"),f=Je("breakpoint"),p=Je("container"),h=Je("spacing"),g=Je("radius"),w=Je("shadow"),v=Je("inset-shadow"),N=Je("text-shadow"),k=Je("drop-shadow"),T=Je("blur"),b=Je("perspective"),C=Je("aspect"),I=Je("ease"),S=Je("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...M(),he,me],z=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto","contain","none"],F=()=>[he,me,h],oe=()=>[io,"full","auto",...F()],ae=()=>[rr,"none","subgrid",he,me],be=()=>["auto",{span:["full",rr,he,me]},rr,he,me],le=()=>[rr,"auto",he,me],ce=()=>["auto","min","max","fr",he,me],ge=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],re=()=>["start","end","center","stretch","center-safe","end-safe"],X=()=>["auto",...F()],ne=()=>[io,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],A=()=>[n,he,me],Z=()=>[...M(),Zf,Xf,{position:[he,me]}],Y=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",dx,lx,{size:[he,me]}],V=()=>[oc,ms,jr],q=()=>["","none","full",g,he,me],K=()=>["",Ee,ms,jr],se=()=>["solid","dashed","dotted","double"],de=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>[Ee,oc,Zf,Xf],H=()=>["","none",T,he,me],te=()=>["none",Ee,he,me],ue=()=>["none",Ee,he,me],Ne=()=>[Ee,he,me],Se=()=>[io,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[jn],breakpoint:[jn],color:[rx],container:[jn],"drop-shadow":[jn],ease:["in","out","in-out"],font:[ax],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[jn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[jn],shadow:[jn],spacing:["px",Ee],text:[jn],"text-shadow":[jn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",io,me,he,C]}],container:["container"],columns:[{columns:[Ee,me,he,p]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:oe()}],"inset-x":[{"inset-x":oe()}],"inset-y":[{"inset-y":oe()}],start:[{start:oe()}],end:[{end:oe()}],top:[{top:oe()}],right:[{right:oe()}],bottom:[{bottom:oe()}],left:[{left:oe()}],visibility:["visible","invisible","collapse"],z:[{z:[rr,"auto",he,me]}],basis:[{basis:[io,"full","auto",p,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ee,io,"auto","initial","none",me]}],grow:[{grow:["",Ee,he,me]}],shrink:[{shrink:["",Ee,he,me]}],order:[{order:[rr,"first","last","none",he,me]}],"grid-cols":[{"grid-cols":ae()}],"col-start-end":[{col:be()}],"col-start":[{"col-start":le()}],"col-end":[{"col-end":le()}],"grid-rows":[{"grid-rows":ae()}],"row-start-end":[{row:be()}],"row-start":[{"row-start":le()}],"row-end":[{"row-end":le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ce()}],"auto-rows":[{"auto-rows":ce()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...ge(),"normal"]}],"justify-items":[{"justify-items":[...re(),"normal"]}],"justify-self":[{"justify-self":["auto",...re()]}],"align-content":[{content:["normal",...ge()]}],"align-items":[{items:[...re(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...re(),{baseline:["","last"]}]}],"place-content":[{"place-content":ge()}],"place-items":[{"place-items":[...re(),"baseline"]}],"place-self":[{"place-self":["auto",...re()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:X()}],mx:[{mx:X()}],my:[{my:X()}],ms:[{ms:X()}],me:[{me:X()}],mt:[{mt:X()}],mr:[{mr:X()}],mb:[{mb:X()}],ml:[{ml:X()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:ne()}],w:[{w:[p,"screen",...ne()]}],"min-w":[{"min-w":[p,"screen","none",...ne()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[f]},...ne()]}],h:[{h:["screen","lh",...ne()]}],"min-h":[{"min-h":["screen","lh","none",...ne()]}],"max-h":[{"max-h":["screen","lh",...ne()]}],"font-size":[{text:["base",o,ms,jr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,he,sc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",oc,me]}],"font-family":[{font:[ux,me,s]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,he,me]}],"line-clamp":[{"line-clamp":[Ee,"none",he,sc]}],leading:[{leading:[d,...F()]}],"list-image":[{"list-image":["none",he,me]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",he,me]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...se(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ee,"from-font","auto",he,jr]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[Ee,"auto",he,me]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",he,me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",he,me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Z()}],"bg-repeat":[{bg:Y()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},rr,he,me],radial:["",he,me],conic:[rr,he,me]},fx,cx]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:q()}],"rounded-s":[{"rounded-s":q()}],"rounded-e":[{"rounded-e":q()}],"rounded-t":[{"rounded-t":q()}],"rounded-r":[{"rounded-r":q()}],"rounded-b":[{"rounded-b":q()}],"rounded-l":[{"rounded-l":q()}],"rounded-ss":[{"rounded-ss":q()}],"rounded-se":[{"rounded-se":q()}],"rounded-ee":[{"rounded-ee":q()}],"rounded-es":[{"rounded-es":q()}],"rounded-tl":[{"rounded-tl":q()}],"rounded-tr":[{"rounded-tr":q()}],"rounded-br":[{"rounded-br":q()}],"rounded-bl":[{"rounded-bl":q()}],"border-w":[{border:K()}],"border-w-x":[{"border-x":K()}],"border-w-y":[{"border-y":K()}],"border-w-s":[{"border-s":K()}],"border-w-e":[{"border-e":K()}],"border-w-t":[{"border-t":K()}],"border-w-r":[{"border-r":K()}],"border-w-b":[{"border-b":K()}],"border-w-l":[{"border-l":K()}],"divide-x":[{"divide-x":K()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":K()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...se(),"hidden","none"]}],"divide-style":[{divide:[...se(),"hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ee,he,me]}],"outline-w":[{outline:["",Ee,ms,jr]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",w,Di,Oi]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",v,Di,Oi]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[Ee,jr]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":K()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",N,Di,Oi]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[Ee,he,me]}],"mix-blend":[{"mix-blend":[...de(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":de()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ee]}],"mask-image-linear-from-pos":[{"mask-linear-from":W()}],"mask-image-linear-to-pos":[{"mask-linear-to":W()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":W()}],"mask-image-t-to-pos":[{"mask-t-to":W()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":W()}],"mask-image-r-to-pos":[{"mask-r-to":W()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":W()}],"mask-image-b-to-pos":[{"mask-b-to":W()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":W()}],"mask-image-l-to-pos":[{"mask-l-to":W()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":W()}],"mask-image-x-to-pos":[{"mask-x-to":W()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":W()}],"mask-image-y-to-pos":[{"mask-y-to":W()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[he,me]}],"mask-image-radial-from-pos":[{"mask-radial-from":W()}],"mask-image-radial-to-pos":[{"mask-radial-to":W()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[Ee]}],"mask-image-conic-from-pos":[{"mask-conic-from":W()}],"mask-image-conic-to-pos":[{"mask-conic-to":W()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Z()}],"mask-repeat":[{mask:Y()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",he,me]}],filter:[{filter:["","none",he,me]}],blur:[{blur:H()}],brightness:[{brightness:[Ee,he,me]}],contrast:[{contrast:[Ee,he,me]}],"drop-shadow":[{"drop-shadow":["","none",k,Di,Oi]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",Ee,he,me]}],"hue-rotate":[{"hue-rotate":[Ee,he,me]}],invert:[{invert:["",Ee,he,me]}],saturate:[{saturate:[Ee,he,me]}],sepia:[{sepia:["",Ee,he,me]}],"backdrop-filter":[{"backdrop-filter":["","none",he,me]}],"backdrop-blur":[{"backdrop-blur":H()}],"backdrop-brightness":[{"backdrop-brightness":[Ee,he,me]}],"backdrop-contrast":[{"backdrop-contrast":[Ee,he,me]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ee,he,me]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ee,he,me]}],"backdrop-invert":[{"backdrop-invert":["",Ee,he,me]}],"backdrop-opacity":[{"backdrop-opacity":[Ee,he,me]}],"backdrop-saturate":[{"backdrop-saturate":[Ee,he,me]}],"backdrop-sepia":[{"backdrop-sepia":["",Ee,he,me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",he,me]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ee,"initial",he,me]}],ease:[{ease:["linear","initial",I,he,me]}],delay:[{delay:[Ee,he,me]}],animate:[{animate:["none",S,he,me]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,he,me]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:te()}],"rotate-x":[{"rotate-x":te()}],"rotate-y":[{"rotate-y":te()}],"rotate-z":[{"rotate-z":te()}],scale:[{scale:ue()}],"scale-x":[{"scale-x":ue()}],"scale-y":[{"scale-y":ue()}],"scale-z":[{"scale-z":ue()}],"scale-3d":["scale-3d"],skew:[{skew:Ne()}],"skew-x":[{"skew-x":Ne()}],"skew-y":[{"skew-y":Ne()}],transform:[{transform:[he,me,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Se()}],"translate-x":[{"translate-x":Se()}],"translate-y":[{"translate-y":Se()}],"translate-z":[{"translate-z":Se()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",he,me]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",he,me]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[Ee,ms,jr,sc]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},gx=Q0(hx);function Qe(...n){return gx(Hp(n))}function vx({checked:n=!1,onCheckedChange:s,disabled:o=!1,className:l}){const c=()=>{!o&&s&&s(!n)};return a.jsx("button",{type:"button",role:"switch","aria-checked":n,disabled:o,onClick:c,className:Qe("relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full","border-2 border-transparent transition-colors duration-200 ease-in-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",n?"bg-[#030213]":"bg-[#cbced4]",o&&"cursor-not-allowed opacity-30",l),style:{width:"44px",height:"26px",backgroundColor:"#000000",borderRadius:"12px"},children:a.jsx("span",{className:Qe("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg","transition-transform duration-200 ease-in-out"),style:{width:"20px",height:"20px",backgroundColor:"#ffffff",transform:n?"translateX(18px)":"translateX(2px)"}})})}const yx=({isOpen:n,onClose:s,preferences:o,onSave:l,isMobile:c=!1})=>{const[d,f]=y.useState(o),p=xo(),h=c===!0?!0:p;if(y.useEffect(()=>{f(o)},[o]),y.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]),y.useEffect(()=>{const k=T=>{T.key==="Escape"&&s()};return n&&window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[n,s]),!n)return null;const g=()=>{const k={strictlyNecessary:!0,functional:!0,analytics:!0,marketing:!0};f(k),l(k),s()},w=()=>{const k={strictlyNecessary:!0,functional:!1,analytics:!1,marketing:!1};f(k),l(k),s()},v=()=>{l(d),s()},N=[{id:"strictlyNecessary",icon:a.jsx(Ay,{size:22,className:"text-gray-700"}),title:"嚴格必要 Cookie",titleEn:"Strictly Necessary Cookies",purpose:"支撐網站核心功能與安全性，例如登入、權限驗證、工作階段維護。",example:"維持您在不同頁面之間的登入狀態，防止未授權的存取。",canDisable:!1,required:!0},{id:"functional",icon:a.jsx(Bp,{size:22,className:"text-gray-700"}),title:"功能性 Cookie",titleEn:"Functional Cookies",purpose:"記住您的個人偏好，讓網站依您的使用習慣呈現適合的內容與介面。",example:"記住您選擇的語言、顯示方式或部分功能設定。",canDisable:!0,required:!1},{id:"analytics",icon:a.jsx(Ey,{size:22,className:"text-gray-700"}),title:"分析 Cookie",titleEn:"Analytics / Performance Cookies",purpose:"協助我們以統計方式了解網站使用情況，作為改善產品與內容的參考，不用於直接辨識個人身分。",example:"統計頁面瀏覽次數、停留時間、瀏覽路徑等。",canDisable:!0,required:!1},{id:"marketing",icon:a.jsx(t0,{size:22,className:"text-gray-700"}),title:"行銷 Cookie",titleEn:"Marketing Cookies",purpose:"衡量行銷活動與宣傳素材的成效，在適用情況下，調整我們在自有管道上的溝通方式與推薦內容。",example:"分析不同活動頁、電子報或宣傳連結帶來的註冊與使用情形。",canDisable:!0,required:!1}];return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",onClick:s,children:a.jsxs("div",{className:`bg-white rounded-xl shadow-2xl ${h?"w-full max-w-[343px] mx-4":"w-full max-w-[640px] md:max-w-[560px] lg:max-w-[640px]"} max-h-[90vh] overflow-hidden flex flex-col`,onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:`flex items-center justify-between border-b border-[#E6E6E6] ${h?"p-4":"p-6"}`,children:[a.jsxs("div",{children:[a.jsx("h3",{className:"leading-[140%] mb-1",children:"Cookie 偏好設定"}),a.jsx("p",{className:"text-sm text-gray-600",children:"Cookie Preferences"})]}),a.jsx("button",{onClick:s,className:"p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400","aria-label":"Close modal",children:a.jsx(Or,{size:20,className:"text-gray-700"})})]}),a.jsx("div",{className:`flex-1 overflow-y-auto ${h?"p-4":"p-6"}`,children:a.jsx("div",{className:"space-y-6",children:N.map(k=>{const T=d[k.id];return a.jsx("div",{className:"pb-6 border-b border-[#E6E6E6] last:border-0 last:pb-0",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:`flex-shrink-0 mt-1 ${T?"opacity-100":"opacity-70"}`,children:k.icon}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("h4",{className:`font-medium ${h?"text-sm":"text-base"}`,children:k.title}),k.required&&a.jsx("span",{className:"text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded",children:"必要"}),!k.required&&a.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${T?"bg-green-100 text-green-700":"bg-gray-100 text-gray-600"}`,children:T?"已啟用":"已停用"})]}),a.jsx("p",{className:"text-xs text-gray-500 mb-1",children:k.titleEn}),a.jsxs("div",{className:"space-y-2 mt-3",children:[a.jsx("div",{children:a.jsxs("p",{className:`text-gray-700 leading-relaxed ${h?"text-xs":"text-sm"} mb-1`,children:[a.jsx("span",{className:"font-medium",children:"用途："}),k.purpose]})}),a.jsx("div",{children:a.jsxs("p",{className:`text-gray-600 leading-relaxed ${h?"text-xs":"text-sm"}`,children:[a.jsx("span",{className:"font-medium",children:"範例："}),k.example]})}),!k.required&&a.jsx("p",{className:`text-gray-500 italic ${h?"text-xs":"text-sm"} mt-2`,children:k.canDisable?"可以關閉。關閉後網站仍可使用，但部分功能可能會受到影響。":"無法關閉。若您在瀏覽器中完全停用 Cookie，本網站部分功能可能無法正常使用。"})]})]}),a.jsxs("div",{className:"flex-shrink-0 flex flex-col items-center gap-2",children:[a.jsx(vx,{checked:T,onCheckedChange:b=>f({...d,[k.id]:b}),disabled:k.required,className:T?"opacity-100":"opacity-70"}),!k.required&&a.jsx("span",{className:`text-xs font-medium ${T?"text-green-600":"text-gray-400"}`,children:T?"ON":"OFF"})]})]})},k.id)})})}),a.jsx("div",{className:`border-t border-[#E6E6E6] bg-gray-50 ${h?"p-4":"p-6"}`,children:a.jsxs("div",{className:h?"flex flex-wrap gap-2":"flex items-center justify-between gap-3",children:[a.jsx(st,{variant:"primary",size:h?"sm":"md",onClick:v,className:h?"w-full":"",children:"儲存偏好設定"}),a.jsxs("div",{className:h?"flex flex-col gap-2 w-full":"flex gap-3",children:[a.jsx(st,{variant:"secondary",size:h?"sm":"md",onClick:g,className:h?"w-full":"",children:"全部接受"}),a.jsx(st,{variant:"secondary",size:h?"sm":"md",onClick:w,className:h?"w-full":"",children:"全部拒絕"})]})]})})]})})},xx=`# Cookie Policy

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

我們會儘速回覆您的需求。`,wx=({onBack:n,onManagePreferences:s,isMobile:o=!1})=>{const l=y.useMemo(()=>yo(xx),[]);return a.jsx("div",{className:`bg-white min-h-screen ${o?"p-3":"py-16 px-20"}`,children:a.jsxs("div",{className:o?"max-w-[343px]":"max-w-3xl mx-auto",children:[a.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-2 py-1 -ml-2",children:[a.jsx(Ki,{size:o?18:20,className:"group-hover:-translate-x-1 transition-transform"}),a.jsx("span",{className:o?"text-sm":"",children:"Back"})]}),a.jsx("div",{className:"mb-8"}),a.jsx("div",{className:"prose prose-gray max-w-none blog-content cookie-content",dangerouslySetInnerHTML:{__html:l.content}}),a.jsx("style",{children:`
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
            color: #030213;
            text-decoration: underline;
            transition: color 200ms;
          }
          .cookie-content a:hover {
            color: #525252;
          }
          .cookie-content hr {
            border: none;
            border-top: 1px solid rgb(162, 162, 162);
            margin: 2rem 0;
          }
        `}),a.jsx("div",{className:"mt-12 pt-8 border-t-2 border-gray-300",children:a.jsx(st,{variant:"secondary",size:o?"sm":"md",onClick:s,children:"Manage cookie preferences"})})]})})},bx=({placeholder:n,isMobile:s=!1,onSearch:o,value:l,onChange:c})=>{const[d,f]=y.useState(""),[p,h]=y.useState(!1),g=l!==void 0?l:d,w=N=>{const k=N.target.value;l===void 0&&f(k),c?.(k),o?.(k)},v=N=>{N.preventDefault(),o?.(g)};return a.jsx("form",{onSubmit:v,className:"relative w-full",children:a.jsxs("div",{className:"relative ",children:[a.jsx(qy,{className:`absolute text-gray-400 ${s?"left-3 top-1/2 -translate-y-1/2":"left-4 top-1/2 -translate-y-1/2"}`,size:20}),a.jsx("input",{type:"text",value:g,onChange:w,onFocus:()=>h(!0),onBlur:()=>h(!1),placeholder:n,className:`w-full bg-white border transition-colors outline-none leading-[150%] ${p?"border-gray-400":"border-gray-300"} ${s?"h-12 pl-10 pr-4 text-base":"h-12 pl-12 pr-4"}`,style:{borderRadius:"var(--radius-btn, 8px)"}})]})})},Li=({label:n,hasChildren:s=!1,isActive:o=!1,onClick:l,children:c,defaultExpanded:d=!1})=>{const[f,p]=y.useState(d);y.useEffect(()=>{d&&p(!0)},[d]);const h=()=>{s&&p(!f),l?.()};return a.jsxs("div",{className:"w-full",children:[a.jsxs("button",{onClick:h,className:`w-full flex items-center justify-between px-3 py-2 text-left text-sm transition-colors leading-[140%] ${o?"text-gray-900 bg-gray-100":"text-gray-700 hover:text-gray-900 hover:bg-gray-50"}`,children:[a.jsx("span",{className:"text-sm",children:n}),s&&a.jsx(Op,{size:16,className:`text-gray-400 transition-transform ${f?"rotate-90":""}`})]}),s&&f&&c&&a.jsx("div",{className:"ml-3 mt-1 border-l border-gray-200 pl-3 space-y-1",children:c})]})},Nx=`# 信件模板管理

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
2. 儲存成功後即可在模板列表中查看`,kx=`# 名詞定義

## 頁面

- 活動相關
    - 全部活動頁
        
        ![全部活動頁.png](./img/全部活動頁.png)
        
    - 全部場次頁
        
        ![全部場次頁.png](./img/全部場次頁.png)
        
    - 地區出席名單頁：該地區中所有場次出席名單總覽，主要用於寄發邀請信
        
        ![地區出席名單頁＿入口.png](./img/地區出席名單頁＿入口.png)
        
        ![地區出席名單頁.png](./img/地區出席名單頁.png)
        
    - 場次出席名單頁：該場次的所有出席名單，可以編輯貴賓資訊、參與資訊及寄發其他信件
        
        ![場次出席名單頁＿入口.png](./img/場次出席名單頁＿入口.png)
        
        ![場次出席名單頁.png](./img/場次出席名單頁.png)
        
- 票務相關
    - 角色分派頁：在單一活動中，分派給使用者角色。一位使用者在同一個活動中只能對應到一個角色
        
        ![角色分派頁＿入口.png](./img/角色分派頁＿入口.png)
        
        ![角色分派頁.png](./img/角色分派頁.png)
        
    - 票務分派頁：在單一場次中，分派給角色票數。角色被分派到的票數，不能超過場次「總邀請票數」
        
        ![票務分派頁＿入口.png](./img/票務分派頁＿入口.png)
        
        ![票務分派頁.png](./img/票務分派頁.png)
        
- 設定相關
    - 角色管理頁
        
        ![角色管理頁.png](./img/角色管理頁.png)
        
    - 標籤管理頁
        
        ![標籤管理頁.png](./img/標籤管理頁.png)
        
    - 信件模板管理頁
        
        ![信件模板管理頁.png](./img/信件模板管理頁.png)
        
    - 個人資料頁
        
        ![個人資料頁.png](./img/個人資料頁.png)
        
- 其他
    - 貴賓資料庫頁
        
        ![貴賓資料庫頁.png](./img/貴賓資料庫頁.png)
        

## 邀請表單

- 地區邀請表單
    
    ![場次邀請表單.png](./img/場次邀請表單.png)
    
- 場次邀請表單
    
    ![場次邀請表單 1.png](./img/場次邀請表單 1.png)`,Cx=`# 基礎操作

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
    - Email: contact@invitiip`,Sx=`# 標籤管理

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

貴賓可以沒有標籤或擁有多個標籤，依據實際需求選擇合適的標籤組合，沒有數量限制。`,Ex=`# 活動及場次管理

## **如何新增／編輯／刪除活動？**

- 進入「所有活動」頁，點擊右上方新增活動
- 輸入活動資訊（* 為必填資訊）
    1. 活動名稱*
    2. 活動說明
    3. 禮賓統籌*
        1. 活動管理員，可以編輯活動、場次資訊，並作角色及票數分派
    4. 確認信模板*
        1. 當貴賓填寫完邀請表單後，系統會自動寄出的確認信件，可於「信件模板管理」頁修改內容
    5. 活動圖照
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
    - 高雄 3/29`,jx=`# 票務分派

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
    - 各組剩餘票數`,Tx=`# 角色管理及角色分派

## **為什麼要做角色管理？**

本系統採用 RBAC（Role-Based Access Control，以角色為基礎的存取控制）的設計概念。這是一種被廣泛使用的權限管理機制，透過角色來管理權限，而不是直接賦予個人權限。

在實務應用中：

- 不同部門的同仁會需要不同的操作權限
- 相同職務的同仁通常需要相同的權限
- 人員異動時只需調整角色，不需重新設定權限

以現場活動舉例：

- 公關組負責管理整體公關工作，需要設定為「管理者」角色，擁有建立活動、票券分配、信件模板編輯等完整權限
- 業務組負責邀約貴賓，設定為「操作者」角色，擁有邀約相關功能
- 製作組需要了解現場出席狀況，設定為「檢視者」角色，僅能查看名單
    - 目前系統未開放檢視者的角色設定

透過角色管理，可以：

- 確保資料安全：每個人只能存取其職責所需的功能
- 提升管理效率：快速為新進人員設定適當權限
- 減少人為疏失：避免未經授權的操作
- 方便權限調整：人員職務異動時，只需更換角色即可
- 範例圖示：
    
    ![貴賓系統.png](./img/貴賓系統.png)
    

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
        - 選擇權限等級
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
    1. 若您沒有將編輯模式切換回檢視模式，系統不會儲存您的變更

## **角色權限的差異**

系統提供三種權限等級：

1. 管理者權限：
    - 編輯活動
    - 編輯場次
    - 角色分派
    - 票數分派
    - 貴賓邀約
2. 操作者權限：
    - 貴賓邀約
3. 檢視者權限：（目前系統尚未開放）
    - 檢視各場次的貴賓出席名單

若您在使用系統時，沒有看到編輯活動或場次的按鈕時，有可能是因為您沒有該活動的**管理者權限**，請先檢查您在該活動被指派的角色，再進入角色管理中確認該角色是否有管理者權限。`,Ix=`# 貴賓出席名單管理及邀約

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

![貴賓邀請名單＿新增單一貴賓.png](./img/貴賓邀請名單＿新增單一貴賓.png)

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
- 建議先做小規模測試`,Px=`# 貴賓資料庫管理

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
4. 點選「儲存變更」`,fo=Object.assign({"../assets/Instruction/操作說明＿信件模板管理 2b61854591d78099a8e6fe1f4101fe3b.md":Nx,"../assets/Instruction/操作說明＿名詞定義 2b61854591d780a2964df6c56b30a138.md":kx,"../assets/Instruction/操作說明＿基礎操作 2b61854591d78088be23f962238f5153.md":Cx,"../assets/Instruction/操作說明＿標籤管理 2b61854591d780098a1fecb1420056ac.md":Sx,"../assets/Instruction/操作說明＿活動及場次管理 2b61854591d780b594edc085d8215019.md":Ex,"../assets/Instruction/操作說明＿票務分派 2b61854591d78037a529f2805477b3c6.md":jx,"../assets/Instruction/操作說明＿角色管理及角色分派 2b61854591d7800b9795e11cd55195d1.md":Tx,"../assets/Instruction/操作說明＿貴賓出席名單管理及邀約 2b61854591d780889401e937125c5f97.md":Ix,"../assets/Instruction/操作說明＿貴賓資料庫管理 2b61854591d780c8a7b2cd5015fbdc04.md":Px});function _x(n,s){let o="";const l=s.split(`
`);for(let p=0;p<Math.min(20,l.length);p++){const h=l[p].trim();if(h.startsWith("# ")){o=h.replace(/^#\s+/,"").trim();break}}return o||(o=(n.split("/").pop()||"").replace(/\.md$/,""),o=o.replace(/\s+[a-f0-9]{8,}$/i,"")),o||(o=(n.split("/").pop()||"").replace(/\.md$/,"").replace(/[_-]/g," ")),o?{id:(n.split("/").pop()||"").replace(/\.md$/,"").replace(/\s+[a-f0-9]{8,}$/i,"").toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100)||n,title:o,markdownPath:n}:null}function sa(){const n=[];for(const[s,o]of Object.entries(fo)){const l=_x(s,o);l&&n.push(l)}return n}function Rx(n){return sa().find(o=>o.id===n)}function nm(n){if(!n)return"";if(fo[n]){const o=fo[n];return typeof o=="string"?o:o?.default||""}const s=Object.keys(fo).find(o=>{try{const l=decodeURIComponent(o),c=decodeURIComponent(n);return o===n||l===c||l.includes(c)||c.includes(l)||o.includes(n.split("/").pop()||"")}catch{return o.includes(n)||n.includes(o)}});if(s&&fo[s]){const o=fo[s];return typeof o=="string"?o:o?.default||""}return""}function Ax(n){if(!n||n.trim().length===0)return[];const s=n.trim().toLowerCase(),o=[],l=sa();for(const c of l){const d=nm(c.markdownPath);if(!d)continue;const f=d.split(`
`),p=[];for(let h=0;h<f.length;h++){const g=f[h],w=g.toLowerCase();if(w.includes(s)){let v=0;for(;(v=w.indexOf(s,v))!==-1;){const N=[];for(let C=Math.max(0,h-1);C<=Math.min(f.length-1,h+1);C++)C!==h&&N.push(f[C].trim());const T=Math.max(0,v-50),b=Math.min(g.length,v+s.length+50);g.substring(T,b),p.push({line:h+1,text:g.trim(),context:N.join(" | ")}),v+=s.length}}}if(p.length>0){let h=p.length;c.title.toLowerCase().includes(s)&&(h+=10);for(const w of p)w.text.startsWith("#")&&(h+=5);const g=p.reduce((w,v)=>w+v.line,0)/p.length;h+=Math.max(0,10-Math.floor(g/10)),o.push({instruction:c,matches:p.slice(0,5),score:h})}}return o.sort((c,d)=>d.score-c.score),o}const yc=({locale:n="tc",isMobile:s=!1,onNavigate:o,currentInstructionId:l,headings:c})=>{const[d,f]=y.useState(!1),[p,h]=y.useState("");y.useEffect(()=>{if(!c||c.length===0)return;const j=()=>{const z=64+(s?48:72),L=window.pageYOffset+z+100;let F="";for(let oe=c.length-1;oe>=0;oe--){const ae=c[oe],be=document.getElementById(ae.id)||document.querySelector(`[data-anchor="${ae.id}"]`);if(be&&be.getBoundingClientRect().top+window.pageYOffset<=L){F=ae.id;break}}F&&F!==p&&h(F)};return j(),window.addEventListener("scroll",j,{passive:!0}),()=>window.removeEventListener("scroll",j)},[c,s,p]);const g=j=>{o&&o(`/instruction/${encodeURIComponent(j)}`)},w=j=>{h(j),setTimeout(()=>{const M=document.getElementById(j)||document.querySelector(`[data-anchor="${j}"]`);if(M){const L=64+(s?48:72),oe=M.getBoundingClientRect().top+window.pageYOffset-L-20;window.scrollTo({top:oe,behavior:"smooth"})}},100),s&&f(!1)},v=sa(),k=["操作說明＿名詞定義","操作說明＿基礎操作","操作說明＿活動及場次管理","操作說明＿貴賓出席名單管理及邀約","操作說明＿信件模板管理","操作說明＿角色管理及角色分派","操作說明＿票務分派","操作說明＿貴賓資料庫管理","操作說明＿標籤管理"].map(j=>j.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100)).map(j=>{const M=v.find(z=>z.id===j);return M?{label:M.title,title:M.title,id:M.id,hasChildren:!1}:null}).filter(j=>j!==null),T=!!(c&&c.length>0&&l);if(s)return a.jsxs("div",{className:"w-full bg-white",children:[a.jsx("div",{className:"px-4 pt-2 pb-4",children:a.jsxs("button",{onClick:()=>f(!d),className:"flex items-center justify-between w-full p-3 border border-gray-200 bg-white rounded-md",style:{borderRadius:"8px"},children:[a.jsx("span",{className:"text-sm font-medium text-gray-900",children:"操作說明"}),a.jsx(ho,{size:16,className:`text-gray-400 transition-transform ${d?"rotate-180":""}`})]})}),d&&a.jsx("div",{className:"px-4 pb-4",children:a.jsx("div",{className:"p-3 border border-gray-200 bg-white rounded-md",children:a.jsx("div",{className:"space-y-1",children:k.map((j,M)=>{const $=l===j.id,z=$&&T;return a.jsx(Li,{label:j.label,hasChildren:z,isActive:$&&!T,defaultExpanded:z,onClick:()=>g(j.id),children:z&&c&&c.map((L,F)=>a.jsx(Li,{label:L.text,hasChildren:!1,isActive:p===L.id,onClick:()=>w(L.id)},F))},M)})})})})]});const b=!!(c&&c.length>0),S=64+72+40;return a.jsx("aside",{className:"w-60 flex-shrink-0",children:a.jsxs("div",{className:b?"fixed space-y-1 overflow-y-auto":"sticky top-6 space-y-1",style:b?{width:"240px",top:`${S}px`,maxHeight:`calc(100vh - ${S}px)`}:void 0,children:[a.jsx("div",{className:"mb-3 px-3",children:a.jsx("h5",{className:"text-xs text-gray-500 uppercase tracking-wider leading-[140%]",children:"操作說明"})}),k.map((j,M)=>{const $=l===j.id,z=$&&T;return a.jsx(Li,{label:j.label,hasChildren:z,isActive:$&&!T,defaultExpanded:z,onClick:()=>g(j.id),children:z&&c&&c.map((L,F)=>a.jsx(Li,{label:L.text,hasChildren:!1,isActive:p===L.id,onClick:()=>w(L.id)},F))},M)})]})})},Mx=({icon:n,title:s,description:o,onClick:l,isMobile:c=!1})=>a.jsx("button",{onClick:l,className:"w-full h-full text-left bg-white rounded hover:bg-gray-50 transition-all group p-6",children:a.jsxs("div",{className:"flex flex-col items-start text-left h-full",children:[a.jsx("div",{className:"mb-4",children:a.jsx(n,{size:36,className:"text-gray-900",strokeWidth:1.5})}),a.jsx("h5",{className:"mb-2 text-gray-900 font-semibold text-base leading-[140%] group-hover:text-gray-700 transition-colors",children:s}),a.jsx("p",{className:"text-sm text-gray-600 leading-[150%] mb-3",children:o}),a.jsxs("div",{className:"flex justify-start items-center text-left gap-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors mt-auto",children:[a.jsx("span",{children:"Learn more"}),a.jsx(Rc,{size:14,className:"group-hover:translate-x-0.5 transition-transform"})]})]})}),Ox=({results:n,query:s,isMobile:o=!1,onResultClick:l})=>{if(n.length===0)return a.jsx("div",{className:"py-12 text-center",children:a.jsx("p",{className:"text-gray-500 text-sm",children:"沒有找到相關結果"})});const c=(d,f)=>f?d.split(new RegExp(`(${f})`,"gi")).map((h,g)=>h.toLowerCase()===f.toLowerCase()?a.jsx("mark",{className:"bg-yellow-200",children:h},g):h):d;return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:o?"mb-4":"mb-6",children:a.jsxs("p",{className:"text-gray-600 text-sm",children:["找到 ",a.jsx("span",{className:"font-medium text-gray-900",children:n.length})," 個相關結果"]})}),a.jsx("div",{className:`space-y-4 ${o?"space-y-3":""}`,children:n.map((d,f)=>a.jsx("div",{className:`border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer ${o?"p-3":"p-4"}`,onClick:()=>l(d.instruction.id),children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx($y,{className:`text-gray-400 mt-1 flex-shrink-0 ${o?"hidden":""}`,size:20}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h3",{className:`font-medium text-gray-900 mb-2 hover:text-gray-700 ${o?"text-sm":"text-base"}`,children:d.instruction.title}),a.jsxs("div",{className:o?"space-y-1.5":"space-y-2",children:[d.matches.slice(0,3).map((p,h)=>a.jsx("div",{className:`text-gray-600 ${o?"text-xs":"text-sm"}`,children:a.jsx("div",{className:"flex items-start gap-2",children:a.jsx("p",{className:"line-clamp-2",children:c(p.text,s)})})},h)),d.matches.length>3&&a.jsxs("p",{className:"text-gray-400 mt-1 text-xs",children:["還有 ",d.matches.length-3," 個相關結果..."]})]})]}),a.jsx(Op,{className:"text-gray-400 flex-shrink-0 mt-1",size:o?16:20})]})},`${d.instruction.id}-${f}`))})]})};function Dx(n){return n.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").substring(0,100)}function Lx(n,s){const o=sa(),l=Dx(n),c=o.find(f=>f.id===l);if(!c){const f=o.find(p=>p.title.includes(n.replace(/^操作說明＿/,""))||n.includes(p.title));if(f){let p=`/instruction/${encodeURIComponent(f.id)}`;if(s){const h=s.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");p+=`#${h}`}return p}return"/help-center"}let d=`/instruction/${encodeURIComponent(c.id)}`;if(s){const f=s.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\u4e00-\u9fff-]/g,"").replace(/[？?！!。，,]/g,"");d+=`#${f}`}return d}const Bx=({locale:n="tc",isMobile:s=!1,onBack:o,onNavigate:l,onLocaleChange:c,onScrollToPricing:d,onSetScrollTarget:f})=>{const p=Ge(n),h=xo(),g=s===!0?!0:h,[w,v]=y.useState(""),N=y.useMemo(()=>!w||w.trim().length===0?[]:Ax(w),[w]),k=I=>{v(I)},T=(I,S)=>{const j=`/instruction/${encodeURIComponent(I)}`;l?.(j)},b=[{icon:Ky,title:"發送您的第一封邀請",description:"了解如何建立和發送您的第一封活動邀請信",instructionTitle:"操作說明＿貴賓出席名單管理及邀約",anchor:"如何進行邀約"},{icon:By,title:"匯入貴賓名單",description:"快速批量匯入貴賓名單與聯絡資訊",instructionTitle:"操作說明＿貴賓資料庫管理",anchor:"如何批量匯入貴賓資料？"},{icon:Jy,title:"自訂信件範本",description:"建立客製化的信件內容",instructionTitle:"操作說明＿信件模板管理",anchor:"如何建立信件模板？"}],C=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx(dn,{isMobile:g,locale:n,onLocaleChange:c,onNavigateToHelpCenter:C,onNavigate:l,onSetScrollTarget:f,showBanner:!0}),a.jsx("div",{className:`bg-white ${g?"pt-12 pb-6":"px-6 py-6 pt-[112px]"}`,children:a.jsxs("div",{className:`max-w-[1120px] mx-auto ${g?"px-6":""}`,children:[a.jsx("h1",{className:`mb-6 text-gray-900 ${g?"text-2xl":"text-3xl"}`,children:p.helpCenterPage.title}),a.jsx("div",{className:g?"my-3":"my-4",children:a.jsx(bx,{placeholder:p.helpCenterPage.searchPlaceholder,isMobile:g,onSearch:k,value:w,onChange:k})})]})}),a.jsx("div",{className:g?"pb-8":"px-6 pt-2 pb-5",children:a.jsx("div",{className:"max-w-[1120px] mx-auto",children:a.jsxs("div",{className:g?"flex flex-col":"flex gap-12",children:[!g&&a.jsx(yc,{locale:n,isMobile:g,onNavigate:l}),g&&a.jsx("div",{className:"border-b border-gray-200",children:a.jsx(yc,{locale:n,isMobile:g,onNavigate:l})}),a.jsx("main",{className:`flex-1 ${g?"px-6 pt-6":""}`,children:w.trim().length>0?a.jsx("div",{className:g?"mt-0":"",children:a.jsx(Ox,{results:N,query:w,isMobile:g,onResultClick:T})}):a.jsxs("div",{className:g?"mb-8 mt-4":"mb-12",children:[a.jsx("h2",{className:`text-gray-900 leading-[140%] ${g?"mb-4 text-xl":"mb-6 text-2xl"}`,children:p.helpCenterPage.popularTopics}),a.jsx("div",{className:`grid gap-4 items-start ${g?"grid-cols-1":"mt-6 md:grid-cols-2 lg:grid-cols-3"}`,children:b.map((I,S)=>a.jsx(Mx,{icon:I.icon,title:I.title,description:I.description,isMobile:g,onClick:()=>{const j=Lx(I.instructionTitle,I.anchor);l?.(j)}},S))})]})})]})})}),a.jsx(fn,{locale:n,isMobile:g,onNavigate:l,onNavigateToHelpCenter:C})]})},zx="/INVITI-Website/assets/%E4%BF%A1%E4%BB%B6%E6%A8%A1%E6%9D%BF%E7%AE%A1%E7%90%86%E9%A0%81-B2wFCrUN.png",$x="/INVITI-Website/assets/%E5%80%8B%E4%BA%BA%E8%B3%87%E6%96%99%E9%A0%81-RXOo4e0F.png",Fx="/INVITI-Website/assets/%E5%85%A8%E9%83%A8%E5%A0%B4%E6%AC%A1%E9%A0%81-5lolYcco.png",Vx="/INVITI-Website/assets/%E5%85%A8%E9%83%A8%E6%B4%BB%E5%8B%95%E9%A0%81-BTUfJG5z.png",Hx="/INVITI-Website/assets/%E5%9C%B0%E5%8D%80%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81-DTAfWEOb.png",Wx="/INVITI-Website/assets/%E5%9C%B0%E5%8D%80%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-u2H-exzD.png",Ux="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81-C8zgdhtu.png",Gx="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E5%87%BA%E5%B8%AD%E5%90%8D%E5%96%AE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-D1Za1b1N.png",Yx="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E9%82%80%E8%AB%8B%E8%A1%A8%E5%96%AE-CfQJd12Z.png",qx="/INVITI-Website/assets/%E5%A0%B4%E6%AC%A1%E9%82%80%E8%AB%8B%E8%A1%A8%E5%96%AE-CfQJd12Z.png",Qx="/INVITI-Website/assets/%E6%A8%99%E7%B1%A4%E7%AE%A1%E7%90%86%E9%A0%81-iLydvUrv.png",Kx="/INVITI-Website/assets/%E7%A5%A8%E5%8B%99%E5%88%86%E6%B4%BE%E9%A0%81-DVFs500h.png",Xx="/INVITI-Website/assets/%E7%A5%A8%E5%8B%99%E5%88%86%E6%B4%BE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-1skfJwX9.png",Zx="/INVITI-Website/assets/%E8%A7%92%E8%89%B2%E5%88%86%E6%B4%BE%E9%A0%81-CQeBnL3U.png",Jx="/INVITI-Website/assets/%E8%A7%92%E8%89%B2%E5%88%86%E6%B4%BE%E9%A0%81%EF%BC%BF%E5%85%A5%E5%8F%A3-CXQuNG9P.png",ew="/INVITI-Website/assets/%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86%E9%A0%81-DZljSpmU.png",tw="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E7%B3%BB%E7%B5%B1-Cksm_Ang.png",nw="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E8%B3%87%E6%96%99%E5%BA%AB%E9%A0%81-CuR5Dz7e.png",rw="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E9%82%80%E8%AB%8B%E5%90%8D%E5%96%AE%EF%BC%BF%E6%96%B0%E5%A2%9E%E5%96%AE%E4%B8%80%E8%B2%B4%E8%B3%93-66Mk59IN.png",vs="/INVITI-Website";function go(n){return n?n.startsWith(vs)?n.slice(vs.length)||"/":n:"/"}function ow(n){if(n==="/")return vs+"/";const s=n.startsWith("/")?n:"/"+n;return s.startsWith(vs)?s:vs+s}function Jf(){return go(window.location.pathname)}const Bi=Object.assign({"../../assets/Instruction/img/信件模板管理頁.png":zx,"../../assets/Instruction/img/個人資料頁.png":$x,"../../assets/Instruction/img/全部場次頁.png":Fx,"../../assets/Instruction/img/全部活動頁.png":Vx,"../../assets/Instruction/img/地區出席名單頁.png":Hx,"../../assets/Instruction/img/地區出席名單頁＿入口.png":Wx,"../../assets/Instruction/img/場次出席名單頁.png":Ux,"../../assets/Instruction/img/場次出席名單頁＿入口.png":Gx,"../../assets/Instruction/img/場次邀請表單 1.png":Yx,"../../assets/Instruction/img/場次邀請表單.png":qx,"../../assets/Instruction/img/標籤管理頁.png":Qx,"../../assets/Instruction/img/票務分派頁.png":Kx,"../../assets/Instruction/img/票務分派頁＿入口.png":Xx,"../../assets/Instruction/img/角色分派頁.png":Zx,"../../assets/Instruction/img/角色分派頁＿入口.png":Jx,"../../assets/Instruction/img/角色管理頁.png":ew,"../../assets/Instruction/img/貴賓系統.png":tw,"../../assets/Instruction/img/貴賓資料庫頁.png":nw,"../../assets/Instruction/img/貴賓邀請名單＿新增單一貴賓.png":rw}),sw=({locale:n="tc",isMobile:s=!1,onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=xo(),p=s===!0?!0:f,[h,g]=y.useState(()=>{const C=go(window.location.pathname).match(/\/instruction\/(.+)/);if(!C)return"";const I=C[1];try{return decodeURIComponent(I)}catch{return I}}),[w,v]=y.useState(()=>window.location.hash.slice(1));y.useEffect(()=>{const b=()=>{const M=go(window.location.pathname).match(/\/instruction\/(.+)/);if(!M){g("");return}const $=M[1];try{const L=decodeURIComponent($);g(L)}catch{g($)}const z=window.location.hash.slice(1);v(z)};window.addEventListener("popstate",b),window.addEventListener("hashchange",b);let C=window.location.pathname;const S=setInterval(()=>{const j=window.location.pathname,M=window.location.hash;(j!==C||M!==window.location.hash)&&(C=j,b())},50);return()=>{window.removeEventListener("popstate",b),window.removeEventListener("hashchange",b),clearInterval(S)}},[]),y.useEffect(()=>{if(h){const b=window.location.hash.slice(1);v(b),b?setTimeout(()=>{const C=document.getElementById(b)||document.querySelector(`[data-anchor="${b}"]`);if(C){const j=64+(p?48:72),$=C.getBoundingClientRect().top+window.pageYOffset-j-20;window.scrollTo({top:$,behavior:"smooth"})}},300):window.scrollTo({top:0,behavior:"smooth"})}},[h,p]);const N=y.useMemo(()=>{if(!h)return null;const b=Rx(h);if(!b)return null;const C=nm(b.markdownPath);if(!C)return null;const I=yo(C),S=S0(C);let j=I.content;return j=j.replace(/<img data-instruction-image="([^"]+)"[^>]*>/g,(M,$)=>{let z,L;const F=oe=>{const ae=Bi[oe];if(typeof ae=="string")return ae};if(z=Object.keys(Bi).find(oe=>(oe.split("/").pop()||"")===$),z&&(L=F(z)),L||(z=Object.keys(Bi).find(oe=>(oe.split("/").pop()||"").toLowerCase()===$.toLowerCase()),z&&(L=F(z))),!L){const oe=$.replace(/\.(png|jpg|jpeg|gif|webp|svg)$/i,"");z=Object.keys(Bi).find(ae=>{const le=(ae.split("/").pop()||"").replace(/\.(png|jpg|jpeg|gif|webp|svg)$/i,""),ce=le.replace(/\s+\d+$/,"").trim(),ge=oe.replace(/\s+\d+$/,"").trim();return ce===ge||le.includes(oe)||oe.includes(le)}),z&&(L=F(z))}return L?M.includes("src=")?M.replace(/src="[^"]+"/,`src="${L}"`):M.replace(/>/,` src="${L}">`):(console.warn(`Image not found in glob: ${$}`),M.replace(/>/,` src="" alt="Image not found: ${$}">`))}),{id:b.id,title:b.title,content:j,headings:S}},[h]);if(!N)return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col items-center justify-center",children:[a.jsx("p",{className:"text-gray-600",children:"操作說明未找到"}),a.jsx("button",{onClick:()=>o?.("/help-center"),className:"mt-4 text-sm text-gray-900 hover:text-gray-700",children:"返回操作說明"})]});const k=N,T=()=>{o&&o("/help-center")};return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[a.jsx(dn,{locale:n,isMobile:p,onNavigate:o,onLocaleChange:l,onNavigateToHelpCenter:T,onSetScrollTarget:d,showBanner:!0}),a.jsxs("main",{className:p?"flex-1 pt-2":"flex-1 pt-8",children:[a.jsx("div",{className:`border-b border-gray-200 ${p?"py-3 px-4":"py-6"}`,children:a.jsx("div",{className:`${p?"":"max-w-[1280px] mx-auto px-6"}`,children:a.jsxs("button",{onClick:()=>o?.("/help-center"),className:"flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors active:opacity-70",children:[a.jsx(Ki,{size:p?12:16}),a.jsx("span",{className:"text-sm sm:text-base",children:"返回操作說明"})]})})}),a.jsx("div",{className:p?"py-6":"py-12",children:a.jsx("div",{className:`${p?"":"max-w-[1280px] mx-auto px-6"}`,children:a.jsxs("div",{className:p?"flex flex-col":"flex gap-12",children:[a.jsx(yc,{locale:n,isMobile:p,onNavigate:o,currentInstructionId:h,headings:N.headings}),a.jsx("article",{className:`flex-1 ${p?"px-4":""}`,children:a.jsxs("div",{className:p?"":"max-w-[800px]",children:[a.jsx("h1",{className:p?"mt-4 mb-4 text-2xl leading-tight":"mb-6",children:k.title}),a.jsx("div",{className:`prose prose-gray max-w-none blog-content ${p?"prose-sm":""}`,dangerouslySetInnerHTML:{__html:k.content}})]})})]})})})]}),a.jsx(fn,{locale:n,isMobile:p,onNavigate:o,onNavigateToHelpCenter:T})]})};function Re(n,s,{checkForDefaultPrevented:o=!0}={}){return function(c){if(n?.(c),o===!1||!c.defaultPrevented)return s?.(c)}}function iw(n,s){const o=y.createContext(s),l=d=>{const{children:f,...p}=d,h=y.useMemo(()=>p,Object.values(p));return a.jsx(o.Provider,{value:h,children:f})};l.displayName=n+"Provider";function c(d){const f=y.useContext(o);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${n}\``)}return[l,c]}function No(n,s=[]){let o=[];function l(d,f){const p=y.createContext(f),h=o.length;o=[...o,f];const g=v=>{const{scope:N,children:k,...T}=v,b=N?.[n]?.[h]||p,C=y.useMemo(()=>T,Object.values(T));return a.jsx(b.Provider,{value:C,children:k})};g.displayName=d+"Provider";function w(v,N){const k=N?.[n]?.[h]||p,T=y.useContext(k);if(T)return T;if(f!==void 0)return f;throw new Error(`\`${v}\` must be used within \`${d}\``)}return[g,w]}const c=()=>{const d=o.map(f=>y.createContext(f));return function(p){const h=p?.[n]||d;return y.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return c.scopeName=n,[l,aw(c,...s)]}function aw(...n){const s=n[0];if(n.length===1)return s;const o=()=>{const l=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const f=l.reduce((p,{useScope:h,scopeName:g})=>{const v=h(d)[`__scope${g}`];return{...p,...v}},{});return y.useMemo(()=>({[`__scope${s.scopeName}`]:f}),[f])}};return o.scopeName=s.scopeName,o}var dt=globalThis?.document?y.useLayoutEffect:()=>{},lw=_c[" useInsertionEffect ".trim().toString()]||dt;function xs({prop:n,defaultProp:s,onChange:o=()=>{},caller:l}){const[c,d,f]=cw({defaultProp:s,onChange:o}),p=n!==void 0,h=p?n:c;{const w=y.useRef(n!==void 0);y.useEffect(()=>{const v=w.current;v!==p&&console.warn(`${l} is changing from ${v?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),w.current=p},[p,l])}const g=y.useCallback(w=>{if(p){const v=uw(w)?w(n):w;v!==n&&f.current?.(v)}else d(w)},[p,n,d,f]);return[h,g]}function cw({defaultProp:n,onChange:s}){const[o,l]=y.useState(n),c=y.useRef(o),d=y.useRef(s);return lw(()=>{d.current=s},[s]),y.useEffect(()=>{c.current!==o&&(d.current?.(o),c.current=o)},[o,c]),[o,l,d]}function uw(n){return typeof n=="function"}function ep(n,s){if(typeof n=="function")return n(s);n!=null&&(n.current=s)}function ko(...n){return s=>{let o=!1;const l=n.map(c=>{const d=ep(c,s);return!o&&typeof d=="function"&&(o=!0),d});if(o)return()=>{for(let c=0;c<l.length;c++){const d=l[c];typeof d=="function"?d():ep(n[c],null)}}}}function Be(...n){return y.useCallback(ko(...n),n)}var Ns=Ap();const rm=Rp(Ns);function dw(n){const s=fw(n),o=y.forwardRef((l,c)=>{const{children:d,...f}=l,p=y.Children.toArray(d),h=p.find(mw);if(h){const g=h.props.children,w=p.map(v=>v===h?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:v);return a.jsx(s,{...f,ref:c,children:y.isValidElement(g)?y.cloneElement(g,void 0,w):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function fw(n){const s=y.forwardRef((o,l)=>{const{children:c,...d}=o;if(y.isValidElement(c)){const f=gw(c),p=hw(d,c.props);return c.type!==y.Fragment&&(p.ref=l?ko(l,f):f),y.cloneElement(c,p)}return y.Children.count(c)>1?y.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var pw=Symbol("radix.slottable");function mw(n){return y.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===pw}function hw(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function gw(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var vw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pe=vw.reduce((n,s)=>{const o=dw(`Primitive.${s}`),l=y.forwardRef((c,d)=>{const{asChild:f,...p}=c,h=f?o:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(h,{...p,ref:d})});return l.displayName=`Primitive.${s}`,{...n,[s]:l}},{});function yw(n,s){n&&Ns.flushSync(()=>n.dispatchEvent(s))}function xw(n,s){return y.useReducer((o,l)=>s[o][l]??o,n)}var Co=n=>{const{present:s,children:o}=n,l=ww(s),c=typeof o=="function"?o({present:l.isPresent}):y.Children.only(o),d=Be(l.ref,bw(c));return typeof o=="function"||l.isPresent?y.cloneElement(c,{ref:d}):null};Co.displayName="Presence";function ww(n){const[s,o]=y.useState(),l=y.useRef(null),c=y.useRef(n),d=y.useRef("none"),f=n?"mounted":"unmounted",[p,h]=xw(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const g=zi(l.current);d.current=p==="mounted"?g:"none"},[p]),dt(()=>{const g=l.current,w=c.current;if(w!==n){const N=d.current,k=zi(g);n?h("MOUNT"):k==="none"||g?.display==="none"?h("UNMOUNT"):h(w&&N!==k?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,h]),dt(()=>{if(s){let g;const w=s.ownerDocument.defaultView??window,v=k=>{const b=zi(l.current).includes(CSS.escape(k.animationName));if(k.target===s&&b&&(h("ANIMATION_END"),!c.current)){const C=s.style.animationFillMode;s.style.animationFillMode="forwards",g=w.setTimeout(()=>{s.style.animationFillMode==="forwards"&&(s.style.animationFillMode=C)})}},N=k=>{k.target===s&&(d.current=zi(l.current))};return s.addEventListener("animationstart",N),s.addEventListener("animationcancel",v),s.addEventListener("animationend",v),()=>{w.clearTimeout(g),s.removeEventListener("animationstart",N),s.removeEventListener("animationcancel",v),s.removeEventListener("animationend",v)}}else h("ANIMATION_END")},[s,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:y.useCallback(g=>{l.current=g?getComputedStyle(g):null,o(g)},[])}}function zi(n){return n?.animationName||"none"}function bw(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var Nw=_c[" useId ".trim().toString()]||(()=>{}),kw=0;function Tr(n){const[s,o]=y.useState(Nw());return dt(()=>{o(l=>l??String(kw++))},[n]),n||(s?`radix-${s}`:"")}var ia="Collapsible",[Cw]=No(ia),[Sw,Bc]=Cw(ia),om=y.forwardRef((n,s)=>{const{__scopeCollapsible:o,open:l,defaultOpen:c,disabled:d,onOpenChange:f,...p}=n,[h,g]=xs({prop:l,defaultProp:c??!1,onChange:f,caller:ia});return a.jsx(Sw,{scope:o,disabled:d,contentId:Tr(),open:h,onOpenToggle:y.useCallback(()=>g(w=>!w),[g]),children:a.jsx(Pe.div,{"data-state":$c(h),"data-disabled":d?"":void 0,...p,ref:s})})});om.displayName=ia;var sm="CollapsibleTrigger",im=y.forwardRef((n,s)=>{const{__scopeCollapsible:o,...l}=n,c=Bc(sm,o);return a.jsx(Pe.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":$c(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...l,ref:s,onClick:Re(n.onClick,c.onOpenToggle)})});im.displayName=sm;var zc="CollapsibleContent",am=y.forwardRef((n,s)=>{const{forceMount:o,...l}=n,c=Bc(zc,n.__scopeCollapsible);return a.jsx(Co,{present:o||c.open,children:({present:d})=>a.jsx(Ew,{...l,ref:s,present:d})})});am.displayName=zc;var Ew=y.forwardRef((n,s)=>{const{__scopeCollapsible:o,present:l,children:c,...d}=n,f=Bc(zc,o),[p,h]=y.useState(l),g=y.useRef(null),w=Be(s,g),v=y.useRef(0),N=v.current,k=y.useRef(0),T=k.current,b=f.open||p,C=y.useRef(b),I=y.useRef(void 0);return y.useEffect(()=>{const S=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(S)},[]),dt(()=>{const S=g.current;if(S){I.current=I.current||{transitionDuration:S.style.transitionDuration,animationName:S.style.animationName},S.style.transitionDuration="0s",S.style.animationName="none";const j=S.getBoundingClientRect();v.current=j.height,k.current=j.width,C.current||(S.style.transitionDuration=I.current.transitionDuration,S.style.animationName=I.current.animationName),h(l)}},[f.open,l]),a.jsx(Pe.div,{"data-state":$c(f.open),"data-disabled":f.disabled?"":void 0,id:f.contentId,hidden:!b,...d,ref:w,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":T?`${T}px`:void 0,...n.style},children:b&&c})});function $c(n){return n?"open":"closed"}var jw=om;function Tw({...n}){return a.jsx(jw,{"data-slot":"collapsible",...n})}function Iw({...n}){return a.jsx(im,{"data-slot":"collapsible-trigger",...n})}function Pw({...n}){return a.jsx(am,{"data-slot":"collapsible-content",...n})}const tp="/INVITI-Website/assets/dead-BbMhUthx.webp",lm="/INVITI-Website/assets/blog1.jpeg-47Eksu7y.webp",cm="/INVITI-Website/assets/blog2.jpeg-CqhtwzmW.webp",um="/INVITI-Website/assets/blog3.jpeg-PFqK9jhN.webp",dm="/INVITI-Website/assets/blog4.jpeg-DtoBIkYr.webp",fm="/INVITI-Website/assets/blog1.jpeg-47Eksu7y.webp",pm="/INVITI-Website/assets/blog6.jpeg-xRd2ClIv.webp",mm="/INVITI-Website/assets/blog7.jpeg-DzQyTbk4.webp",_w=({locale:n="tc",isMobile:s=!1,onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=Ge(n),p=xo(),h=s===!0?!0:p,[g,w]=y.useState("all"),[v,N]=y.useState(!1);y.useEffect(()=>{},[p,s,h]);const k=[{id:"all",label:f.blogPage.allPosts},{id:"product",label:f.blogPage.productUpdates},{id:"case",label:f.blogPage.caseStudies},{id:"industry",label:f.blogPage.industryInsights},{id:"events",label:f.blogPage.events}],T={產品更新:f.blogPage.productUpdates,客戶故事:f.blogPage.caseStudies,產業觀點:f.blogPage.industryInsights,活動花絮:f.blogPage.events},b={product:"產品更新",case:"客戶故事",industry:"產業觀點",events:"活動花絮"},C=[lm,cm,um,dm,fm,pm,mm],I=y.useMemo(()=>ys().map((L,F)=>{const oe=L.markdownPath?Dc(L.markdownPath):"",ae=oe?yo(oe):null,be=C[F]||"",le=L.author||"INVITI 團隊";return{id:L.id,thumbnail:be,title:L.title,excerpt:ae?.excerpt||"閱讀完整文章...",category:T[L.category]||L.category,date:L.date,author:{name:le,role:"產品與營運",avatar:Oc},readTime:`${L.readTime} ${f.blogPage.readTime}`,originalCategory:L.category}}),[f,T,C]),S=y.useMemo(()=>{if(g==="all")return I;const z=b[g];return z?I.filter(L=>L.originalCategory===z):I},[I,g,b]),j=z=>{if(o){const L=encodeURIComponent(z);o(`/blog/${L}`)}},M=()=>{o&&o("/help-center")},$=()=>a.jsx("nav",{className:"space-y-1",children:k.map(z=>a.jsx("button",{onClick:()=>{w(z.id),h&&N(!1)},className:`w-full text-left px-3 py-2 text-sm transition-colors leading-[140%] ${g===z.id?"bg-gray-100 text-gray-900 font-medium":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,style:{borderRadius:"4px"},children:z.label},z.id))});return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[a.jsx(dn,{locale:n,isMobile:h,onNavigate:o,onLocaleChange:l,onNavigateToHelpCenter:M,onSetScrollTarget:d,showBanner:!0}),a.jsxs("main",{className:"flex-1",children:[a.jsx("div",{className:`border-b border-gray-200 bg-gray-50 ${h?"pt-12 pb-6 px-4":"py-12"}`,children:a.jsxs("div",{className:`${h?"":"max-w-[1120px] mx-auto px-6"}`,children:[a.jsx("h1",{className:`mb-2 ${h?"text-left text-2xl":"text-center"}`,children:f.blogPage.title}),a.jsx("p",{className:`text-gray-600 leading-[150%] ${h?"text-left text-sm":"text-center"}`,children:f.blogPage.subtitle})]})}),a.jsx("div",{className:h?"py-4":"py-12",children:a.jsx("div",{className:`${h?"":"max-w-[1120px] mx-auto px-6"}`,children:h?a.jsxs("div",{children:[a.jsx("div",{className:"px-4 mb-4",children:a.jsxs(Tw,{open:v,onOpenChange:N,children:[a.jsxs(Iw,{className:"flex items-center justify-between w-full p-3 border border-gray-200 bg-white rounded-md",style:{borderRadius:"8px"},children:[a.jsx("span",{className:"text-sm font-medium text-gray-900",children:k.find(z=>z.id===g)?.label}),a.jsx(ho,{size:16,className:`text-gray-400 transition-transform ${v?"rotate-180":""}`})]}),a.jsx(Pw,{className:"mt-2 p-3 border border-gray-200 bg-white rounded-md",children:a.jsx($,{})})]})}),a.jsx("div",{className:"px-4 space-y-4",children:S.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-12 px-4",children:[a.jsx("div",{className:`${h?"w-14 h-auto":"w-12 h-auto"} mb-3`,children:a.jsx(Ir,{src:tp,alt:"Empty state",className:"w-full h-auto object-contain"})}),a.jsx("p",{className:"text-sm text-gray-500 text-center",children:"此分類暫無文章"})]}):S.map(z=>a.jsx("div",{className:"w-full",children:a.jsx(gc,{...z,onClick:()=>j(z.id)})},z.id))})]}):a.jsxs("div",{className:"flex gap-8",children:[a.jsx("aside",{className:"flex-shrink-0",style:{width:"240px",position:"sticky",top:"96px",height:"fit-content"},children:a.jsx($,{})}),a.jsx("div",{className:"flex-1",children:S.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-24",children:[a.jsx("div",{className:"w-12 h-12 mb-6",children:a.jsx(Ir,{src:tp,alt:"Empty state",className:"w-full h-full object-contain"})}),a.jsx("p",{className:"text-base text-gray-500",children:"此分類暫無文章"})]}):a.jsx("div",{className:"grid grid-cols-2 gap-6",children:S.map(z=>a.jsx(gc,{...z,onClick:()=>j(z.id)},z.id))})})]})})})]}),a.jsx(fn,{locale:n,isMobile:h,onNavigate:o,onNavigateToHelpCenter:M})]})},Rw=({locale:n="tc",isMobile:s=!1,onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=Ge(n),p=xo(),h=s===!0?!0:p;y.useEffect(()=>{},[p,s,h]);const[g,w]=y.useState(()=>{const j=go(window.location.pathname).match(/\/blog\/(.+)/);if(!j)return"";const M=j[1];try{return decodeURIComponent(M)}catch{return M}});y.useEffect(()=>{const S=()=>{const L=go(window.location.pathname).match(/\/blog\/(.+)/);if(!L){w("");return}const F=L[1];try{const oe=decodeURIComponent(F);w(oe)}catch{w(F)}};window.addEventListener("popstate",S);let j=window.location.pathname;const $=setInterval(()=>{const z=window.location.pathname;z!==j&&(j=z,S())},50);return()=>{window.removeEventListener("popstate",S),clearInterval($)}},[]),y.useEffect(()=>{g&&window.scrollTo({top:0,behavior:"smooth"})},[g]);const v=[lm,cm,um,dm,fm,pm,mm],N={產品更新:f.blogPage.productUpdates,客戶故事:f.blogPage.caseStudies,產業觀點:f.blogPage.industryInsights,活動花絮:f.blogPage.events},k=y.useMemo(()=>{if(!g)return null;const S=N0(g);if(!S)return null;const j=S.markdownPath?Dc(S.markdownPath):"";if(!j)return null;const M=yo(j),z=ys().findIndex(F=>F.id===g),L=z>=0&&v[z]||"";return{id:S.id,title:S.title,category:N[S.category]||S.category,date:S.date,readTime:`${S.readTime} ${f.blogPage.readTime}`,author:{name:S.author||"INVITI 團隊",role:"產品與營運",avatar:Oc},heroImage:L,content:M.content}},[g,f,N,v]),{prevPost:T,nextPost:b}=y.useMemo(()=>{const S=ys(),j=S.findIndex(z=>z.id===g),M=j>0?S[j-1]:null,$=j<S.length-1?S[j+1]:null;return{prevPost:M?{id:M.id,title:M.title}:null,nextPost:$?{id:$.id,title:$.title}:null}},[g]);if(!k)return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col items-center justify-center",children:[a.jsx("p",{className:"text-gray-600",children:"文章未找到"}),a.jsx("button",{onClick:()=>o?.("/blog"),className:"mt-4 text-sm text-gray-900 hover:text-gray-700",children:"返回部落格"})]});const C=k,I=()=>{o&&o("/help-center")};return a.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[a.jsx(dn,{locale:n,isMobile:h,onNavigate:o,onLocaleChange:l,onNavigateToHelpCenter:I,onSetScrollTarget:d,showBanner:!0}),a.jsxs("main",{className:h?"flex-1 pt-2":"flex-1 pt-8",children:[a.jsx("div",{className:`border-b border-gray-200 ${h?"py-3 px-4":"py-6"}`,children:a.jsx("div",{className:`${h?"":"max-w-[800px] mx-auto px-6"}`,children:a.jsxs("button",{onClick:()=>o?.("/blog"),className:"flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors active:opacity-70",children:[a.jsx(Ki,{size:h?12:16}),a.jsx("span",{className:"text-sm sm:text-base",children:f.blogPage.backToBlog})]})})}),a.jsx("article",{className:h?"py-6":"py-12",children:a.jsxs("div",{className:`${h?"px-4":"max-w-[800px] mx-auto px-6"}`,children:[a.jsxs("div",{className:`flex items-center gap-2 text-xs text-gray-500 mb-3 ${h?"flex-wrap":""}`,children:[a.jsx("span",{className:"px-2 py-1 bg-gray-50 border border-gray-200",style:{borderRadius:"4px"},children:C.category}),a.jsx("span",{children:"•"}),a.jsx("span",{children:C.date}),a.jsx("span",{children:"•"}),a.jsx("span",{children:C.readTime})]}),a.jsx("h1",{className:h?"mb-4 text-2xl leading-tight":"mb-6",children:C.title}),a.jsxs("div",{className:`flex items-center gap-3 mb-6 pb-6 ${h?"":"my-8"}`,children:[a.jsx("div",{className:"rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center",style:{width:h?"40px":"48px",height:h?"40px":"48px",minWidth:h?"40px":"48px",minHeight:h?"40px":"48px",padding:h?"6px":"8px"},children:a.jsx(Ir,{src:C.author.avatar,alt:C.author.name,className:"w-full h-full object-contain",loading:"lazy"})}),a.jsxs("div",{children:[a.jsx("div",{className:`text-gray-900 ${h?"text-xs":"text-sm"}`,children:C.author.name}),a.jsx("div",{className:`text-gray-500 ${h?"text-[10px]":"text-xs"}`,children:C.author.role})]})]}),C.heroImage&&a.jsx("div",{className:`overflow-hidden ${h?"mb-6 -mx-4":"mb-8"}`,style:{borderRadius:h?"0":"8px"},children:a.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:a.jsx(Ir,{src:C.heroImage,alt:C.title,className:"absolute inset-0 w-full h-full object-cover",loading:"lazy"})})}),a.jsx("div",{className:`prose prose-gray max-w-none blog-content ${h?"prose-sm":""}`,dangerouslySetInnerHTML:{__html:C.content}})]})}),a.jsx("div",{className:`border-t-2 border-gray-200 bg-gray-50 ${h?"py-4 px-4":"py-8"}`,children:a.jsx("div",{className:`${h?"":"max-w-[800px] mx-auto px-6"}`,children:a.jsxs("div",{className:`flex ${h?"flex-col gap-3":"justify-between items-center gap-6"}`,children:[T?a.jsxs("button",{onClick:()=>{const S=`/blog/${encodeURIComponent(T.id)}`;o?.(S),w(T.id),window.scrollTo({top:0,behavior:"smooth"})},className:`flex items-center gap-3 text-left flex-1 group ${h?"active:opacity-70":""}`,children:[a.jsx(Ki,{size:h?18:20,className:"text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0"}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:`text-gray-500 mb-1 ${h?"text-[10px]":"text-xs"}`,children:f.blogPage.previousPost}),a.jsx("div",{className:`text-gray-900 group-hover:text-gray-700 transition-colors truncate ${h?"text-xs":"text-sm"}`,children:T.title})]})]}):a.jsx("div",{className:"flex-1"}),b?a.jsxs("button",{onClick:()=>{const S=`/blog/${encodeURIComponent(b.id)}`;o?.(S),w(b.id),window.scrollTo({top:0,behavior:"smooth"})},className:`flex items-center gap-3 text-right flex-1 group justify-end ${h?"active:opacity-70":""}`,children:[a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:`text-gray-500 mb-1 ${h?"text-[10px]":"text-xs"}`,children:f.blogPage.nextPost}),a.jsx("div",{className:`text-gray-900 group-hover:text-gray-700 transition-colors truncate ${h?"text-xs":"text-sm"}`,children:b.title})]}),a.jsx(Rc,{size:h?18:20,className:"text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0"})]}):a.jsx("div",{className:"flex-1"})]})})})]}),a.jsx(fn,{locale:n,isMobile:h,onNavigate:o,onNavigateToHelpCenter:I})]})};function Pr(n){const s=y.useRef(n);return y.useEffect(()=>{s.current=n}),y.useMemo(()=>(...o)=>s.current?.(...o),[])}function Aw(n,s=globalThis?.document){const o=Pr(n);y.useEffect(()=>{const l=c=>{c.key==="Escape"&&o(c)};return s.addEventListener("keydown",l,{capture:!0}),()=>s.removeEventListener("keydown",l,{capture:!0})},[o,s])}var Mw="DismissableLayer",xc="dismissableLayer.update",Ow="dismissableLayer.pointerDownOutside",Dw="dismissableLayer.focusOutside",np,hm=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Fc=y.forwardRef((n,s)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:p,...h}=n,g=y.useContext(hm),[w,v]=y.useState(null),N=w?.ownerDocument??globalThis?.document,[,k]=y.useState({}),T=Be(s,L=>v(L)),b=Array.from(g.layers),[C]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),I=b.indexOf(C),S=w?b.indexOf(w):-1,j=g.layersWithOutsidePointerEventsDisabled.size>0,M=S>=I,$=zw(L=>{const F=L.target,oe=[...g.branches].some(ae=>ae.contains(F));!M||oe||(c?.(L),f?.(L),L.defaultPrevented||p?.())},N),z=$w(L=>{const F=L.target;[...g.branches].some(ae=>ae.contains(F))||(d?.(L),f?.(L),L.defaultPrevented||p?.())},N);return Aw(L=>{S===g.layers.size-1&&(l?.(L),!L.defaultPrevented&&p&&(L.preventDefault(),p()))},N),y.useEffect(()=>{if(w)return o&&(g.layersWithOutsidePointerEventsDisabled.size===0&&(np=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(w)),g.layers.add(w),rp(),()=>{o&&g.layersWithOutsidePointerEventsDisabled.size===1&&(N.body.style.pointerEvents=np)}},[w,N,o,g]),y.useEffect(()=>()=>{w&&(g.layers.delete(w),g.layersWithOutsidePointerEventsDisabled.delete(w),rp())},[w,g]),y.useEffect(()=>{const L=()=>k({});return document.addEventListener(xc,L),()=>document.removeEventListener(xc,L)},[]),a.jsx(Pe.div,{...h,ref:T,style:{pointerEvents:j?M?"auto":"none":void 0,...n.style},onFocusCapture:Re(n.onFocusCapture,z.onFocusCapture),onBlurCapture:Re(n.onBlurCapture,z.onBlurCapture),onPointerDownCapture:Re(n.onPointerDownCapture,$.onPointerDownCapture)})});Fc.displayName=Mw;var Lw="DismissableLayerBranch",Bw=y.forwardRef((n,s)=>{const o=y.useContext(hm),l=y.useRef(null),c=Be(s,l);return y.useEffect(()=>{const d=l.current;if(d)return o.branches.add(d),()=>{o.branches.delete(d)}},[o.branches]),a.jsx(Pe.div,{...n,ref:c})});Bw.displayName=Lw;function zw(n,s=globalThis?.document){const o=Pr(n),l=y.useRef(!1),c=y.useRef(()=>{});return y.useEffect(()=>{const d=p=>{if(p.target&&!l.current){let h=function(){gm(Ow,o,g,{discrete:!0})};const g={originalEvent:p};p.pointerType==="touch"?(s.removeEventListener("click",c.current),c.current=h,s.addEventListener("click",c.current,{once:!0})):h()}else s.removeEventListener("click",c.current);l.current=!1},f=window.setTimeout(()=>{s.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(f),s.removeEventListener("pointerdown",d),s.removeEventListener("click",c.current)}},[s,o]),{onPointerDownCapture:()=>l.current=!0}}function $w(n,s=globalThis?.document){const o=Pr(n),l=y.useRef(!1);return y.useEffect(()=>{const c=d=>{d.target&&!l.current&&gm(Dw,o,{originalEvent:d},{discrete:!1})};return s.addEventListener("focusin",c),()=>s.removeEventListener("focusin",c)},[s,o]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function rp(){const n=new CustomEvent(xc);document.dispatchEvent(n)}function gm(n,s,o,{discrete:l}){const c=o.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:o});s&&c.addEventListener(n,s,{once:!0}),l?yw(c,d):c.dispatchEvent(d)}var ic="focusScope.autoFocusOnMount",ac="focusScope.autoFocusOnUnmount",op={bubbles:!1,cancelable:!0},Fw="FocusScope",Vc=y.forwardRef((n,s)=>{const{loop:o=!1,trapped:l=!1,onMountAutoFocus:c,onUnmountAutoFocus:d,...f}=n,[p,h]=y.useState(null),g=Pr(c),w=Pr(d),v=y.useRef(null),N=Be(s,b=>h(b)),k=y.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.useEffect(()=>{if(l){let b=function(j){if(k.paused||!p)return;const M=j.target;p.contains(M)?v.current=M:or(v.current,{select:!0})},C=function(j){if(k.paused||!p)return;const M=j.relatedTarget;M!==null&&(p.contains(M)||or(v.current,{select:!0}))},I=function(j){if(document.activeElement===document.body)for(const $ of j)$.removedNodes.length>0&&or(p)};document.addEventListener("focusin",b),document.addEventListener("focusout",C);const S=new MutationObserver(I);return p&&S.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",C),S.disconnect()}}},[l,p,k.paused]),y.useEffect(()=>{if(p){ip.add(k);const b=document.activeElement;if(!p.contains(b)){const I=new CustomEvent(ic,op);p.addEventListener(ic,g),p.dispatchEvent(I),I.defaultPrevented||(Vw(Yw(vm(p)),{select:!0}),document.activeElement===b&&or(p))}return()=>{p.removeEventListener(ic,g),setTimeout(()=>{const I=new CustomEvent(ac,op);p.addEventListener(ac,w),p.dispatchEvent(I),I.defaultPrevented||or(b??document.body,{select:!0}),p.removeEventListener(ac,w),ip.remove(k)},0)}}},[p,g,w,k]);const T=y.useCallback(b=>{if(!o&&!l||k.paused)return;const C=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,I=document.activeElement;if(C&&I){const S=b.currentTarget,[j,M]=Hw(S);j&&M?!b.shiftKey&&I===M?(b.preventDefault(),o&&or(j,{select:!0})):b.shiftKey&&I===j&&(b.preventDefault(),o&&or(M,{select:!0})):I===S&&b.preventDefault()}},[o,l,k.paused]);return a.jsx(Pe.div,{tabIndex:-1,...f,ref:N,onKeyDown:T})});Vc.displayName=Fw;function Vw(n,{select:s=!1}={}){const o=document.activeElement;for(const l of n)if(or(l,{select:s}),document.activeElement!==o)return}function Hw(n){const s=vm(n),o=sp(s,n),l=sp(s.reverse(),n);return[o,l]}function vm(n){const s=[],o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:l=>{const c=l.tagName==="INPUT"&&l.type==="hidden";return l.disabled||l.hidden||c?NodeFilter.FILTER_SKIP:l.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)s.push(o.currentNode);return s}function sp(n,s){for(const o of n)if(!Ww(o,{upTo:s}))return o}function Ww(n,{upTo:s}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(s!==void 0&&n===s)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Uw(n){return n instanceof HTMLInputElement&&"select"in n}function or(n,{select:s=!1}={}){if(n&&n.focus){const o=document.activeElement;n.focus({preventScroll:!0}),n!==o&&Uw(n)&&s&&n.select()}}var ip=Gw();function Gw(){let n=[];return{add(s){const o=n[0];s!==o&&o?.pause(),n=ap(n,s),n.unshift(s)},remove(s){n=ap(n,s),n[0]?.resume()}}}function ap(n,s){const o=[...n],l=o.indexOf(s);return l!==-1&&o.splice(l,1),o}function Yw(n){return n.filter(s=>s.tagName!=="A")}var qw="Portal",Hc=y.forwardRef((n,s)=>{const{container:o,...l}=n,[c,d]=y.useState(!1);dt(()=>d(!0),[]);const f=o||c&&globalThis?.document?.body;return f?rm.createPortal(a.jsx(Pe.div,{...l,ref:s}),f):null});Hc.displayName=qw;var lc=0;function ym(){y.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??lp()),document.body.insertAdjacentElement("beforeend",n[1]??lp()),lc++,()=>{lc===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(s=>s.remove()),lc--}},[])}function lp(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var un=function(){return un=Object.assign||function(s){for(var o,l=1,c=arguments.length;l<c;l++){o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},un.apply(this,arguments)};function xm(n,s){var o={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&s.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(n);c<l.length;c++)s.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(n,l[c])&&(o[l[c]]=n[l[c]]);return o}function Qw(n,s,o){if(o||arguments.length===2)for(var l=0,c=s.length,d;l<c;l++)(d||!(l in s))&&(d||(d=Array.prototype.slice.call(s,0,l)),d[l]=s[l]);return n.concat(d||Array.prototype.slice.call(s))}var Gi="right-scroll-bar-position",Yi="width-before-scroll-bar",Kw="with-scroll-bars-hidden",Xw="--removed-body-scroll-bar-size";function cc(n,s){return typeof n=="function"?n(s):n&&(n.current=s),n}function Zw(n,s){var o=y.useState(function(){return{value:n,callback:s,facade:{get current(){return o.value},set current(l){var c=o.value;c!==l&&(o.value=l,o.callback(l,c))}}}})[0];return o.callback=s,o.facade}var Jw=typeof window<"u"?y.useLayoutEffect:y.useEffect,cp=new WeakMap;function e1(n,s){var o=Zw(null,function(l){return n.forEach(function(c){return cc(c,l)})});return Jw(function(){var l=cp.get(o);if(l){var c=new Set(l),d=new Set(n),f=o.current;c.forEach(function(p){d.has(p)||cc(p,null)}),d.forEach(function(p){c.has(p)||cc(p,f)})}cp.set(o,n)},[n]),o}function t1(n){return n}function n1(n,s){s===void 0&&(s=t1);var o=[],l=!1,c={read:function(){if(l)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:n},useMedium:function(d){var f=s(d,l);return o.push(f),function(){o=o.filter(function(p){return p!==f})}},assignSyncMedium:function(d){for(l=!0;o.length;){var f=o;o=[],f.forEach(d)}o={push:function(p){return d(p)},filter:function(){return o}}},assignMedium:function(d){l=!0;var f=[];if(o.length){var p=o;o=[],p.forEach(d),f=o}var h=function(){var w=f;f=[],w.forEach(d)},g=function(){return Promise.resolve().then(h)};g(),o={push:function(w){f.push(w),g()},filter:function(w){return f=f.filter(w),o}}}};return c}function r1(n){n===void 0&&(n={});var s=n1(null);return s.options=un({async:!0,ssr:!1},n),s}var wm=function(n){var s=n.sideCar,o=xm(n,["sideCar"]);if(!s)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var l=s.read();if(!l)throw new Error("Sidecar medium not found");return y.createElement(l,un({},o))};wm.isSideCarExport=!0;function o1(n,s){return n.useMedium(s),wm}var bm=r1(),uc=function(){},aa=y.forwardRef(function(n,s){var o=y.useRef(null),l=y.useState({onScrollCapture:uc,onWheelCapture:uc,onTouchMoveCapture:uc}),c=l[0],d=l[1],f=n.forwardProps,p=n.children,h=n.className,g=n.removeScrollBar,w=n.enabled,v=n.shards,N=n.sideCar,k=n.noRelative,T=n.noIsolation,b=n.inert,C=n.allowPinchZoom,I=n.as,S=I===void 0?"div":I,j=n.gapMode,M=xm(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),$=N,z=e1([o,s]),L=un(un({},M),c);return y.createElement(y.Fragment,null,w&&y.createElement($,{sideCar:bm,removeScrollBar:g,shards:v,noRelative:k,noIsolation:T,inert:b,setCallbacks:d,allowPinchZoom:!!C,lockRef:o,gapMode:j}),f?y.cloneElement(y.Children.only(p),un(un({},L),{ref:z})):y.createElement(S,un({},L,{className:h,ref:z}),p))});aa.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};aa.classNames={fullWidth:Yi,zeroRight:Gi};var s1=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function i1(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var s=s1();return s&&n.setAttribute("nonce",s),n}function a1(n,s){n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s))}function l1(n){var s=document.head||document.getElementsByTagName("head")[0];s.appendChild(n)}var c1=function(){var n=0,s=null;return{add:function(o){n==0&&(s=i1())&&(a1(s,o),l1(s)),n++},remove:function(){n--,!n&&s&&(s.parentNode&&s.parentNode.removeChild(s),s=null)}}},u1=function(){var n=c1();return function(s,o){y.useEffect(function(){return n.add(s),function(){n.remove()}},[s&&o])}},Nm=function(){var n=u1(),s=function(o){var l=o.styles,c=o.dynamic;return n(l,c),null};return s},d1={left:0,top:0,right:0,gap:0},dc=function(n){return parseInt(n||"",10)||0},f1=function(n){var s=window.getComputedStyle(document.body),o=s[n==="padding"?"paddingLeft":"marginLeft"],l=s[n==="padding"?"paddingTop":"marginTop"],c=s[n==="padding"?"paddingRight":"marginRight"];return[dc(o),dc(l),dc(c)]},p1=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return d1;var s=f1(n),o=document.documentElement.clientWidth,l=window.innerWidth;return{left:s[0],top:s[1],right:s[2],gap:Math.max(0,l-o+s[2]-s[0])}},m1=Nm(),po="data-scroll-locked",h1=function(n,s,o,l){var c=n.left,d=n.top,f=n.right,p=n.gap;return o===void 0&&(o="margin"),`
  .`.concat(Kw,` {
   overflow: hidden `).concat(l,`;
   padding-right: `).concat(p,"px ").concat(l,`;
  }
  body[`).concat(po,`] {
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
  
  .`).concat(Gi,` {
    right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(Yi,` {
    margin-right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(Gi," .").concat(Gi,` {
    right: 0 `).concat(l,`;
  }
  
  .`).concat(Yi," .").concat(Yi,` {
    margin-right: 0 `).concat(l,`;
  }
  
  body[`).concat(po,`] {
    `).concat(Xw,": ").concat(p,`px;
  }
`)},up=function(){var n=parseInt(document.body.getAttribute(po)||"0",10);return isFinite(n)?n:0},g1=function(){y.useEffect(function(){return document.body.setAttribute(po,(up()+1).toString()),function(){var n=up()-1;n<=0?document.body.removeAttribute(po):document.body.setAttribute(po,n.toString())}},[])},v1=function(n){var s=n.noRelative,o=n.noImportant,l=n.gapMode,c=l===void 0?"margin":l;g1();var d=y.useMemo(function(){return p1(c)},[c]);return y.createElement(m1,{styles:h1(d,!s,c,o?"":"!important")})},wc=!1;if(typeof window<"u")try{var $i=Object.defineProperty({},"passive",{get:function(){return wc=!0,!0}});window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{wc=!1}var ao=wc?{passive:!1}:!1,y1=function(n){return n.tagName==="TEXTAREA"},km=function(n,s){if(!(n instanceof Element))return!1;var o=window.getComputedStyle(n);return o[s]!=="hidden"&&!(o.overflowY===o.overflowX&&!y1(n)&&o[s]==="visible")},x1=function(n){return km(n,"overflowY")},w1=function(n){return km(n,"overflowX")},dp=function(n,s){var o=s.ownerDocument,l=s;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var c=Cm(n,l);if(c){var d=Sm(n,l),f=d[1],p=d[2];if(f>p)return!0}l=l.parentNode}while(l&&l!==o.body);return!1},b1=function(n){var s=n.scrollTop,o=n.scrollHeight,l=n.clientHeight;return[s,o,l]},N1=function(n){var s=n.scrollLeft,o=n.scrollWidth,l=n.clientWidth;return[s,o,l]},Cm=function(n,s){return n==="v"?x1(s):w1(s)},Sm=function(n,s){return n==="v"?b1(s):N1(s)},k1=function(n,s){return n==="h"&&s==="rtl"?-1:1},C1=function(n,s,o,l,c){var d=k1(n,window.getComputedStyle(s).direction),f=d*l,p=o.target,h=s.contains(p),g=!1,w=f>0,v=0,N=0;do{if(!p)break;var k=Sm(n,p),T=k[0],b=k[1],C=k[2],I=b-C-d*T;(T||I)&&Cm(n,p)&&(v+=I,N+=T);var S=p.parentNode;p=S&&S.nodeType===Node.DOCUMENT_FRAGMENT_NODE?S.host:S}while(!h&&p!==document.body||h&&(s.contains(p)||s===p));return(w&&Math.abs(v)<1||!w&&Math.abs(N)<1)&&(g=!0),g},Fi=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},fp=function(n){return[n.deltaX,n.deltaY]},pp=function(n){return n&&"current"in n?n.current:n},S1=function(n,s){return n[0]===s[0]&&n[1]===s[1]},E1=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},j1=0,lo=[];function T1(n){var s=y.useRef([]),o=y.useRef([0,0]),l=y.useRef(),c=y.useState(j1++)[0],d=y.useState(Nm)[0],f=y.useRef(n);y.useEffect(function(){f.current=n},[n]),y.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(c));var b=Qw([n.lockRef.current],(n.shards||[]).map(pp),!0).filter(Boolean);return b.forEach(function(C){return C.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),b.forEach(function(C){return C.classList.remove("allow-interactivity-".concat(c))})}}},[n.inert,n.lockRef.current,n.shards]);var p=y.useCallback(function(b,C){if("touches"in b&&b.touches.length===2||b.type==="wheel"&&b.ctrlKey)return!f.current.allowPinchZoom;var I=Fi(b),S=o.current,j="deltaX"in b?b.deltaX:S[0]-I[0],M="deltaY"in b?b.deltaY:S[1]-I[1],$,z=b.target,L=Math.abs(j)>Math.abs(M)?"h":"v";if("touches"in b&&L==="h"&&z.type==="range")return!1;var F=dp(L,z);if(!F)return!0;if(F?$=L:($=L==="v"?"h":"v",F=dp(L,z)),!F)return!1;if(!l.current&&"changedTouches"in b&&(j||M)&&(l.current=$),!$)return!0;var oe=l.current||$;return C1(oe,C,b,oe==="h"?j:M)},[]),h=y.useCallback(function(b){var C=b;if(!(!lo.length||lo[lo.length-1]!==d)){var I="deltaY"in C?fp(C):Fi(C),S=s.current.filter(function($){return $.name===C.type&&($.target===C.target||C.target===$.shadowParent)&&S1($.delta,I)})[0];if(S&&S.should){C.cancelable&&C.preventDefault();return}if(!S){var j=(f.current.shards||[]).map(pp).filter(Boolean).filter(function($){return $.contains(C.target)}),M=j.length>0?p(C,j[0]):!f.current.noIsolation;M&&C.cancelable&&C.preventDefault()}}},[]),g=y.useCallback(function(b,C,I,S){var j={name:b,delta:C,target:I,should:S,shadowParent:I1(I)};s.current.push(j),setTimeout(function(){s.current=s.current.filter(function(M){return M!==j})},1)},[]),w=y.useCallback(function(b){o.current=Fi(b),l.current=void 0},[]),v=y.useCallback(function(b){g(b.type,fp(b),b.target,p(b,n.lockRef.current))},[]),N=y.useCallback(function(b){g(b.type,Fi(b),b.target,p(b,n.lockRef.current))},[]);y.useEffect(function(){return lo.push(d),n.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:N}),document.addEventListener("wheel",h,ao),document.addEventListener("touchmove",h,ao),document.addEventListener("touchstart",w,ao),function(){lo=lo.filter(function(b){return b!==d}),document.removeEventListener("wheel",h,ao),document.removeEventListener("touchmove",h,ao),document.removeEventListener("touchstart",w,ao)}},[]);var k=n.removeScrollBar,T=n.inert;return y.createElement(y.Fragment,null,T?y.createElement(d,{styles:E1(c)}):null,k?y.createElement(v1,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function I1(n){for(var s=null;n!==null;)n instanceof ShadowRoot&&(s=n.host,n=n.host),n=n.parentNode;return s}const P1=o1(bm,T1);var Wc=y.forwardRef(function(n,s){return y.createElement(aa,un({},n,{ref:s,sideCar:P1}))});Wc.classNames=aa.classNames;var _1=function(n){if(typeof document>"u")return null;var s=Array.isArray(n)?n[0]:n;return s.ownerDocument.body},co=new WeakMap,Vi=new WeakMap,Hi={},fc=0,Em=function(n){return n&&(n.host||Em(n.parentNode))},R1=function(n,s){return s.map(function(o){if(n.contains(o))return o;var l=Em(o);return l&&n.contains(l)?l:(console.error("aria-hidden",o,"in not contained inside",n,". Doing nothing"),null)}).filter(function(o){return!!o})},A1=function(n,s,o,l){var c=R1(s,Array.isArray(n)?n:[n]);Hi[o]||(Hi[o]=new WeakMap);var d=Hi[o],f=[],p=new Set,h=new Set(c),g=function(v){!v||p.has(v)||(p.add(v),g(v.parentNode))};c.forEach(g);var w=function(v){!v||h.has(v)||Array.prototype.forEach.call(v.children,function(N){if(p.has(N))w(N);else try{var k=N.getAttribute(l),T=k!==null&&k!=="false",b=(co.get(N)||0)+1,C=(d.get(N)||0)+1;co.set(N,b),d.set(N,C),f.push(N),b===1&&T&&Vi.set(N,!0),C===1&&N.setAttribute(o,"true"),T||N.setAttribute(l,"true")}catch(I){console.error("aria-hidden: cannot operate on ",N,I)}})};return w(s),p.clear(),fc++,function(){f.forEach(function(v){var N=co.get(v)-1,k=d.get(v)-1;co.set(v,N),d.set(v,k),N||(Vi.has(v)||v.removeAttribute(l),Vi.delete(v)),k||v.removeAttribute(o)}),fc--,fc||(co=new WeakMap,co=new WeakMap,Vi=new WeakMap,Hi={})}},jm=function(n,s,o){o===void 0&&(o="data-aria-hidden");var l=Array.from(Array.isArray(n)?n:[n]),c=_1(n);return c?(l.push.apply(l,Array.from(c.querySelectorAll("[aria-live], script"))),A1(l,c,o,"aria-hidden")):function(){return null}};function M1(n){const s=O1(n),o=y.forwardRef((l,c)=>{const{children:d,...f}=l,p=y.Children.toArray(d),h=p.find(L1);if(h){const g=h.props.children,w=p.map(v=>v===h?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:v);return a.jsx(s,{...f,ref:c,children:y.isValidElement(g)?y.cloneElement(g,void 0,w):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function O1(n){const s=y.forwardRef((o,l)=>{const{children:c,...d}=o;if(y.isValidElement(c)){const f=z1(c),p=B1(d,c.props);return c.type!==y.Fragment&&(p.ref=l?ko(l,f):f),y.cloneElement(c,p)}return y.Children.count(c)>1?y.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var D1=Symbol("radix.slottable");function L1(n){return y.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===D1}function B1(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function z1(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var la="Dialog",[Tm]=No(la),[$1,nn]=Tm(la),Im=n=>{const{__scopeDialog:s,children:o,open:l,defaultOpen:c,onOpenChange:d,modal:f=!0}=n,p=y.useRef(null),h=y.useRef(null),[g,w]=xs({prop:l,defaultProp:c??!1,onChange:d,caller:la});return a.jsx($1,{scope:s,triggerRef:p,contentRef:h,contentId:Tr(),titleId:Tr(),descriptionId:Tr(),open:g,onOpenChange:w,onOpenToggle:y.useCallback(()=>w(v=>!v),[w]),modal:f,children:o})};Im.displayName=la;var Pm="DialogTrigger",F1=y.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(Pm,o),d=Be(s,c.triggerRef);return a.jsx(Pe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":Yc(c.open),...l,ref:d,onClick:Re(n.onClick,c.onOpenToggle)})});F1.displayName=Pm;var Uc="DialogPortal",[V1,_m]=Tm(Uc,{forceMount:void 0}),Rm=n=>{const{__scopeDialog:s,forceMount:o,children:l,container:c}=n,d=nn(Uc,s);return a.jsx(V1,{scope:s,forceMount:o,children:y.Children.map(l,f=>a.jsx(Co,{present:o||d.open,children:a.jsx(Hc,{asChild:!0,container:c,children:f})}))})};Rm.displayName=Uc;var Zi="DialogOverlay",Am=y.forwardRef((n,s)=>{const o=_m(Zi,n.__scopeDialog),{forceMount:l=o.forceMount,...c}=n,d=nn(Zi,n.__scopeDialog);return d.modal?a.jsx(Co,{present:l||d.open,children:a.jsx(W1,{...c,ref:s})}):null});Am.displayName=Zi;var H1=M1("DialogOverlay.RemoveScroll"),W1=y.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(Zi,o);return a.jsx(Wc,{as:H1,allowPinchZoom:!0,shards:[c.contentRef],children:a.jsx(Pe.div,{"data-state":Yc(c.open),...l,ref:s,style:{pointerEvents:"auto",...l.style}})})}),_r="DialogContent",Mm=y.forwardRef((n,s)=>{const o=_m(_r,n.__scopeDialog),{forceMount:l=o.forceMount,...c}=n,d=nn(_r,n.__scopeDialog);return a.jsx(Co,{present:l||d.open,children:d.modal?a.jsx(U1,{...c,ref:s}):a.jsx(G1,{...c,ref:s})})});Mm.displayName=_r;var U1=y.forwardRef((n,s)=>{const o=nn(_r,n.__scopeDialog),l=y.useRef(null),c=Be(s,o.contentRef,l);return y.useEffect(()=>{const d=l.current;if(d)return jm(d)},[]),a.jsx(Om,{...n,ref:c,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Re(n.onCloseAutoFocus,d=>{d.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:Re(n.onPointerDownOutside,d=>{const f=d.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0;(f.button===2||p)&&d.preventDefault()}),onFocusOutside:Re(n.onFocusOutside,d=>d.preventDefault())})}),G1=y.forwardRef((n,s)=>{const o=nn(_r,n.__scopeDialog),l=y.useRef(!1),c=y.useRef(!1);return a.jsx(Om,{...n,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{n.onCloseAutoFocus?.(d),d.defaultPrevented||(l.current||o.triggerRef.current?.focus(),d.preventDefault()),l.current=!1,c.current=!1},onInteractOutside:d=>{n.onInteractOutside?.(d),d.defaultPrevented||(l.current=!0,d.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=d.target;o.triggerRef.current?.contains(f)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&c.current&&d.preventDefault()}})}),Om=y.forwardRef((n,s)=>{const{__scopeDialog:o,trapFocus:l,onOpenAutoFocus:c,onCloseAutoFocus:d,...f}=n,p=nn(_r,o),h=y.useRef(null),g=Be(s,h);return ym(),a.jsxs(a.Fragment,{children:[a.jsx(Vc,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:c,onUnmountAutoFocus:d,children:a.jsx(Fc,{role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":Yc(p.open),...f,ref:g,onDismiss:()=>p.onOpenChange(!1)})}),a.jsxs(a.Fragment,{children:[a.jsx(Y1,{titleId:p.titleId}),a.jsx(Q1,{contentRef:h,descriptionId:p.descriptionId})]})]})}),Gc="DialogTitle",Dm=y.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(Gc,o);return a.jsx(Pe.h2,{id:c.titleId,...l,ref:s})});Dm.displayName=Gc;var Lm="DialogDescription",Bm=y.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(Lm,o);return a.jsx(Pe.p,{id:c.descriptionId,...l,ref:s})});Bm.displayName=Lm;var zm="DialogClose",$m=y.forwardRef((n,s)=>{const{__scopeDialog:o,...l}=n,c=nn(zm,o);return a.jsx(Pe.button,{type:"button",...l,ref:s,onClick:Re(n.onClick,()=>c.onOpenChange(!1))})});$m.displayName=zm;function Yc(n){return n?"open":"closed"}var Fm="DialogTitleWarning",[Rk,Vm]=iw(Fm,{contentName:_r,titleName:Gc,docsSlug:"dialog"}),Y1=({titleId:n})=>{const s=Vm(Fm),o=`\`${s.contentName}\` requires a \`${s.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${s.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${s.docsSlug}`;return y.useEffect(()=>{n&&(document.getElementById(n)||console.error(o))},[o,n]),null},q1="DialogDescriptionWarning",Q1=({contentRef:n,descriptionId:s})=>{const l=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Vm(q1).contentName}}.`;return y.useEffect(()=>{const c=n.current?.getAttribute("aria-describedby");s&&c&&(document.getElementById(s)||console.warn(l))},[l,n,s]),null},Hm=Im,Wm=Rm,Um=Am,Gm=Mm,Ym=Dm,qm=Bm,Qm=$m;function Km({...n}){return a.jsx(Hm,{"data-slot":"dialog",...n})}function K1({...n}){return a.jsx(Wm,{"data-slot":"dialog-portal",...n})}const Xm=y.forwardRef(({className:n,...s},o)=>a.jsx(Um,{ref:o,"data-slot":"dialog-overlay",className:Qe("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...s}));Xm.displayName="DialogOverlay";function Zm({className:n,children:s,...o}){return a.jsxs(K1,{"data-slot":"dialog-portal",children:[a.jsx(Xm,{}),a.jsxs(Gm,{"data-slot":"dialog-content",className:Qe("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...o,children:[s,a.jsxs(Qm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[a.jsx(Or,{}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function Jm({className:n,...s}){return a.jsx(Ym,{"data-slot":"dialog-title",className:Qe("text-lg leading-none font-semibold",n),...s})}function eh({className:n,...s}){return a.jsx(qm,{"data-slot":"dialog-description",className:Qe("text-muted-foreground text-sm",n),...s})}function th({...n}){return a.jsx(Hm,{"data-slot":"sheet",...n})}function X1({...n}){return a.jsx(Wm,{"data-slot":"sheet-portal",...n})}const nh=y.forwardRef(({className:n,...s},o)=>a.jsx(Um,{ref:o,"data-slot":"sheet-overlay",className:Qe("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...s}));nh.displayName="SheetOverlay";function rh({className:n,children:s,side:o="right",...l}){return a.jsxs(X1,{children:[a.jsx(nh,{}),a.jsxs(Gm,{"data-slot":"sheet-content",className:Qe("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",o==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",o==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",o==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",o==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",n),...l,children:[s,a.jsxs(Qm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[a.jsx(Or,{className:"size-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function oh({className:n,...s}){return a.jsx(Ym,{"data-slot":"sheet-title",className:Qe("text-foreground font-semibold",n),...s})}function sh({className:n,...s}){return a.jsx(qm,{"data-slot":"sheet-description",className:Qe("text-muted-foreground text-sm",n),...s})}function St({className:n,type:s,...o}){return a.jsx("input",{type:s,"data-slot":"input",className:Qe("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...o})}var Z1=Symbol.for("react.lazy"),Ji=_c[" use ".trim().toString()];function J1(n){return typeof n=="object"&&n!==null&&"then"in n}function ih(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===Z1&&"_payload"in n&&J1(n._payload)}function ah(n){const s=tb(n),o=y.forwardRef((l,c)=>{let{children:d,...f}=l;ih(d)&&typeof Ji=="function"&&(d=Ji(d._payload));const p=y.Children.toArray(d),h=p.find(rb);if(h){const g=h.props.children,w=p.map(v=>v===h?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:v);return a.jsx(s,{...f,ref:c,children:y.isValidElement(g)?y.cloneElement(g,void 0,w):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}var eb=ah("Slot");function tb(n){const s=y.forwardRef((o,l)=>{let{children:c,...d}=o;if(ih(c)&&typeof Ji=="function"&&(c=Ji(c._payload)),y.isValidElement(c)){const f=sb(c),p=ob(d,c.props);return c.type!==y.Fragment&&(p.ref=l?ko(l,f):f),y.cloneElement(c,p)}return y.Children.count(c)>1?y.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var nb=Symbol("radix.slottable");function rb(n){return y.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===nb}function ob(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function sb(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var ib=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ab=ib.reduce((n,s)=>{const o=ah(`Primitive.${s}`),l=y.forwardRef((c,d)=>{const{asChild:f,...p}=c,h=f?o:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(h,{...p,ref:d})});return l.displayName=`Primitive.${s}`,{...n,[s]:l}},{}),lb="Label",lh=y.forwardRef((n,s)=>a.jsx(ab.label,{...n,ref:s,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(n.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}}));lh.displayName=lb;var cb=lh;function Tn({className:n,...s}){return a.jsx(cb,{"data-slot":"label",className:Qe("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...s})}function ch(n){const s=y.useRef({value:n,previous:n});return y.useMemo(()=>(s.current.value!==n&&(s.current.previous=s.current.value,s.current.value=n),s.current.previous),[n])}function uh(n){const[s,o]=y.useState(void 0);return dt(()=>{if(n){o({width:n.offsetWidth,height:n.offsetHeight});const l=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let f,p;if("borderBoxSize"in d){const h=d.borderBoxSize,g=Array.isArray(h)?h[0]:h;f=g.inlineSize,p=g.blockSize}else f=n.offsetWidth,p=n.offsetHeight;o({width:f,height:p})});return l.observe(n,{box:"border-box"}),()=>l.unobserve(n)}else o(void 0)},[n]),s}var ca="Checkbox",[ub]=No(ca),[db,qc]=ub(ca);function fb(n){const{__scopeCheckbox:s,checked:o,children:l,defaultChecked:c,disabled:d,form:f,name:p,onCheckedChange:h,required:g,value:w="on",internal_do_not_use_render:v}=n,[N,k]=xs({prop:o,defaultProp:c??!1,onChange:h,caller:ca}),[T,b]=y.useState(null),[C,I]=y.useState(null),S=y.useRef(!1),j=T?!!f||!!T.closest("form"):!0,M={checked:N,disabled:d,setChecked:k,control:T,setControl:b,name:p,form:f,value:w,hasConsumerStoppedPropagationRef:S,required:g,defaultChecked:sr(c)?!1:c,isFormControl:j,bubbleInput:C,setBubbleInput:I};return a.jsx(db,{scope:s,...M,children:pb(v)?v(M):l})}var dh="CheckboxTrigger",fh=y.forwardRef(({__scopeCheckbox:n,onKeyDown:s,onClick:o,...l},c)=>{const{control:d,value:f,disabled:p,checked:h,required:g,setControl:w,setChecked:v,hasConsumerStoppedPropagationRef:N,isFormControl:k,bubbleInput:T}=qc(dh,n),b=Be(c,w),C=y.useRef(h);return y.useEffect(()=>{const I=d?.form;if(I){const S=()=>v(C.current);return I.addEventListener("reset",S),()=>I.removeEventListener("reset",S)}},[d,v]),a.jsx(Pe.button,{type:"button",role:"checkbox","aria-checked":sr(h)?"mixed":h,"aria-required":g,"data-state":yh(h),"data-disabled":p?"":void 0,disabled:p,value:f,...l,ref:b,onKeyDown:Re(s,I=>{I.key==="Enter"&&I.preventDefault()}),onClick:Re(o,I=>{v(S=>sr(S)?!0:!S),T&&k&&(N.current=I.isPropagationStopped(),N.current||I.stopPropagation())})})});fh.displayName=dh;var ph=y.forwardRef((n,s)=>{const{__scopeCheckbox:o,name:l,checked:c,defaultChecked:d,required:f,disabled:p,value:h,onCheckedChange:g,form:w,...v}=n;return a.jsx(fb,{__scopeCheckbox:o,checked:c,defaultChecked:d,disabled:p,required:f,onCheckedChange:g,name:l,form:w,value:h,internal_do_not_use_render:({isFormControl:N})=>a.jsxs(a.Fragment,{children:[a.jsx(fh,{...v,ref:s,__scopeCheckbox:o}),N&&a.jsx(vh,{__scopeCheckbox:o})]})})});ph.displayName=ca;var mh="CheckboxIndicator",hh=y.forwardRef((n,s)=>{const{__scopeCheckbox:o,forceMount:l,...c}=n,d=qc(mh,o);return a.jsx(Co,{present:l||sr(d.checked)||d.checked===!0,children:a.jsx(Pe.span,{"data-state":yh(d.checked),"data-disabled":d.disabled?"":void 0,...c,ref:s,style:{pointerEvents:"none",...n.style}})})});hh.displayName=mh;var gh="CheckboxBubbleInput",vh=y.forwardRef(({__scopeCheckbox:n,...s},o)=>{const{control:l,hasConsumerStoppedPropagationRef:c,checked:d,defaultChecked:f,required:p,disabled:h,name:g,value:w,form:v,bubbleInput:N,setBubbleInput:k}=qc(gh,n),T=Be(o,k),b=ch(d),C=uh(l);y.useEffect(()=>{const S=N;if(!S)return;const j=window.HTMLInputElement.prototype,$=Object.getOwnPropertyDescriptor(j,"checked").set,z=!c.current;if(b!==d&&$){const L=new Event("click",{bubbles:z});S.indeterminate=sr(d),$.call(S,sr(d)?!1:d),S.dispatchEvent(L)}},[N,b,d,c]);const I=y.useRef(sr(d)?!1:d);return a.jsx(Pe.input,{type:"checkbox","aria-hidden":!0,defaultChecked:f??I.current,required:p,disabled:h,name:g,value:w,form:v,...s,tabIndex:-1,ref:T,style:{...s.style,...C,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});vh.displayName=gh;function pb(n){return typeof n=="function"}function sr(n){return n==="indeterminate"}function yh(n){return sr(n)?"indeterminate":n?"checked":"unchecked"}function mb({className:n,...s}){return a.jsx(ph,{"data-slot":"checkbox",className:Qe("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...s,children:a.jsx(hh,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:a.jsx(Mc,{className:"size-3.5"})})})}const mp=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,hp=Hp,hb=(n,s)=>o=>{var l;if(s?.variants==null)return hp(n,o?.class,o?.className);const{variants:c,defaultVariants:d}=s,f=Object.keys(c).map(g=>{const w=o?.[g],v=d?.[g];if(w===null)return null;const N=mp(w)||mp(v);return c[g][N]}),p=o&&Object.entries(o).reduce((g,w)=>{let[v,N]=w;return N===void 0||(g[v]=N),g},{}),h=s==null||(l=s.compoundVariants)===null||l===void 0?void 0:l.reduce((g,w)=>{let{class:v,className:N,...k}=w;return Object.entries(k).every(T=>{let[b,C]=T;return Array.isArray(C)?C.includes({...d,...p}[b]):{...d,...p}[b]===C})?[...g,v,N]:g},[]);return hp(n,f,h,o?.class,o?.className)},gb=hb("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function vb({className:n,variant:s,asChild:o=!1,...l}){const c=o?eb:"span";return a.jsx(c,{"data-slot":"badge",className:Qe(gb({variant:s}),n),...l})}const yb=({isOpen:n,onClose:s,selectedPlan:o,isMobile:l=!1,locale:c="tc",onNavigate:d,onScrollToPricing:f})=>{const p=Ge(c),[h,g]=y.useState("monthly"),[w,v]=y.useState("credit-card"),[N,k]=y.useState(!1),[T,b]=y.useState(""),[C,I]=y.useState(""),j={free:{monthly:0,yearly:0,seats:1},basic:{monthly:600,yearly:6e3,seats:1},pro:{monthly:3e3,yearly:3e4,seats:3},enterprise:{monthly:0,yearly:0,seats:null}}[o],M=h==="monthly"?j.monthly:j.yearly,$=j.monthly*12,z=j.seats||1,L=M*z,F=ce=>({free:p.payment.freePlan,basic:p.payment.basicPlan,pro:p.payment.proPlan,enterprise:p.payment.enterprisePlan})[ce],oe=()=>{s(),f?f():d&&(d("/"),setTimeout(()=>{const ce=document.getElementById("pricing");ce&&ce.scrollIntoView({behavior:"smooth"})},100))},ae=()=>{window.location.href="mailto:contact@inviti.vip"},be=()=>{o==="enterprise"?ae():console.log("Processing payment...",{plan:o,billingCycle:h,seats:z,totalAmount:L,email:C})},le=({TitleComponent:ce,DescriptionComponent:ge})=>a.jsxs("div",{className:"flex flex-col h-full max-h-full overflow-hidden",children:[a.jsxs("div",{className:"flex-shrink-0 flex items-start justify-between pb-4 border-b border-gray-200",children:[a.jsxs("div",{children:[a.jsx(ce,{className:"text-gray-900 mb-1",children:p.payment.title}),a.jsx(ge,{className:"text-sm text-gray-600",children:p.payment.subtitle})]}),a.jsx("button",{onClick:s,className:"min-w-[32px] min-h-[32px] p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2","aria-label":p.payment.close,children:a.jsx(Or,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden",style:{minHeight:"40vh"},children:a.jsxs("div",{className:`space-y-6 ${l?"py-4":"py-6"}`,children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.planSummaryTitle}),a.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded space-y-3",children:[a.jsx(vb,{className:"bg-gray-900 text-white hover:bg-gray-800",children:F(o)}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:()=>g("monthly"),className:`flex-1 px-3 py-2 text-sm border rounded transition-colors ${h==="monthly"?"bg-gray-900 text-white border-gray-900":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`,children:p.payment.monthly}),a.jsx("button",{onClick:()=>g("yearly"),className:`flex-1 px-3 py-2 text-sm border rounded transition-colors ${h==="yearly"?"bg-gray-900 text-white border-gray-900":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`,children:p.payment.yearly})]}),o!=="free"&&o!=="enterprise"&&a.jsx("div",{className:"text-sm",children:h==="yearly"?a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"text-gray-900",children:["NT$",M.toLocaleString()," / Year"]}),a.jsxs("p",{className:"text-gray-500 line-through text-xs",children:["NT$",$.toLocaleString()," / Year"]})]}):a.jsxs("p",{className:"text-gray-900",children:["NT$",M.toLocaleString()," / month"]})}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.seats}),o==="enterprise"?a.jsx("div",{className:"px-3 py-2 bg-gray-100 border border-gray-200 rounded text-sm text-gray-600",children:p.payment.contactSalesForSeats}):a.jsx(St,{type:"text",value:z,readOnly:!0,disabled:!0,className:"bg-gray-100 text-gray-900 cursor-default",tabIndex:-1})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.accountBillingTitle}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.email}),a.jsx(St,{type:"email",placeholder:p.payment.emailPlaceholder,value:C,onChange:re=>I(re.target.value),className:"mt-1"})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.companyName}),a.jsx(St,{type:"text",placeholder:p.payment.companyNamePlaceholder,className:"mt-1"})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.taxId}),a.jsx(St,{type:"text",placeholder:p.payment.taxIdPlaceholder,className:"mt-1"})]}),a.jsxs("div",{className:"space-y-3 pt-2",children:[a.jsx(Tn,{className:"text-sm text-gray-900",children:p.payment.billingAddress}),a.jsx(St,{type:"text",placeholder:p.payment.streetPlaceholder,className:"mt-1"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx(St,{type:"text",placeholder:p.payment.cityPlaceholder}),a.jsx(St,{type:"text",placeholder:p.payment.postalCodePlaceholder})]}),a.jsx(St,{type:"text",placeholder:p.payment.countryPlaceholder,className:"mt-1"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.paymentMethodTitle}),a.jsxs("div",{className:"flex gap-2 border-b border-gray-200",children:[a.jsxs("button",{onClick:()=>v("credit-card"),className:`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${w==="credit-card"?"border-gray-900 text-gray-900":"border-transparent text-gray-600 hover:text-gray-900"}`,children:[a.jsx(Oy,{className:"w-4 h-4"}),p.payment.creditCard]}),a.jsxs("button",{onClick:()=>v("bank-transfer"),disabled:o!=="enterprise",className:`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${w==="bank-transfer"?"border-gray-900 text-gray-900":"border-transparent text-gray-600 hover:text-gray-900"} ${o!=="enterprise"?"opacity-50 cursor-not-allowed":""}`,children:[a.jsx(ky,{className:"w-4 h-4"}),p.payment.bankTransfer]})]}),w==="credit-card"&&a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.cardNumber}),a.jsx(St,{type:"text",placeholder:p.payment.cardNumberPlaceholder,className:"mt-1",maxLength:19}),a.jsxs("div",{className:"flex gap-2 mt-2",children:[a.jsx("span",{className:"text-xs text-gray-400",children:"VISA"}),a.jsx("span",{className:"text-xs text-gray-400",children:"MasterCard"}),a.jsx("span",{className:"text-xs text-gray-400",children:"AMEX"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.expiration}),a.jsx(St,{type:"text",placeholder:p.payment.expirationPlaceholder,className:"mt-1",maxLength:5})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.cvc}),a.jsx(St,{type:"text",placeholder:p.payment.cvcPlaceholder,className:"mt-1",maxLength:4})]})]}),a.jsxs("div",{children:[a.jsx(Tn,{className:"text-sm text-gray-700",children:p.payment.nameOnCard}),a.jsx(St,{type:"text",placeholder:p.payment.nameOnCardPlaceholder,className:"mt-1"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.verificationTitle}),a.jsx("button",{className:"text-sm text-gray-600 hover:text-gray-900 underline",children:p.payment.sendCode}),a.jsx("div",{className:"flex gap-2",children:[...Array(6)].map((re,X)=>a.jsx(St,{type:"text",maxLength:1,className:"w-12 h-12 text-center"},X))})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:p.payment.couponTitle}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(St,{type:"text",placeholder:p.payment.couponPlaceholder,value:T,onChange:re=>b(re.target.value),className:"flex-1"}),a.jsx(st,{variant:"secondary",children:p.payment.apply})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(mb,{id:"agree-terms",checked:N,onCheckedChange:re=>k(re)}),a.jsxs("label",{htmlFor:"agree-terms",className:"text-sm text-gray-700 leading-tight cursor-pointer",children:[p.payment.agreeTerms," ",a.jsx("a",{href:"#terms",className:"text-gray-900 underline hover:text-gray-700",children:p.payment.termsLink})," ","&"," ",a.jsx("a",{href:"#privacy",className:"text-gray-900 underline hover:text-gray-700",children:p.payment.privacyLink})]})]}),a.jsx("p",{className:"text-xs text-gray-500",children:p.payment.autoRenewNote})]})]})}),a.jsxs("div",{className:"flex-shrink-0 border-t border-gray-200 pt-4 space-y-4 bg-white",style:{paddingBottom:l?"16px":"0"},children:[o!=="free"&&o!=="enterprise"&&a.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded space-y-2",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsxs("span",{className:"text-sm text-gray-700",children:[p.payment.totalAmount,":"]}),a.jsxs("span",{className:"text-gray-900",children:["NT$",L.toLocaleString()," / ",h==="yearly"?"Year":"month"]})]}),a.jsx("p",{className:"text-xs text-gray-600",children:p.payment.effectiveImmediately})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[o==="enterprise"?a.jsx(st,{variant:"primary",onClick:ae,className:"w-full",children:p.payment.contactSales}):a.jsx(st,{variant:"primary",onClick:be,disabled:!N||!C,className:"w-full",children:p.payment.upgradeNow}),a.jsx("button",{onClick:oe,className:"text-sm text-gray-600 hover:text-gray-900 underline py-2",children:p.payment.backToPricing})]})]})]});return l?a.jsx(th,{open:n,onOpenChange:s,children:a.jsx(rh,{side:"bottom",className:"h-[88vh] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(le,{TitleComponent:oh,DescriptionComponent:sh})})}):a.jsx(Km,{open:n,onOpenChange:s,children:a.jsx(Zm,{className:"max-w-[720px] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(le,{TitleComponent:Jm,DescriptionComponent:eh})})})};function xb(n){if(typeof document>"u")return;let s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",s.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}const wb=n=>{switch(n){case"success":return kb;case"info":return Sb;case"warning":return Cb;case"error":return Eb;default:return null}},bb=Array(12).fill(0),Nb=({visible:n,className:s})=>ee.createElement("div",{className:["sonner-loading-wrapper",s].filter(Boolean).join(" "),"data-visible":n},ee.createElement("div",{className:"sonner-spinner"},bb.map((o,l)=>ee.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${l}`})))),kb=ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ee.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Cb=ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},ee.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Sb=ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ee.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Eb=ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ee.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),jb=ee.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},ee.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ee.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Tb=()=>{const[n,s]=ee.useState(document.hidden);return ee.useEffect(()=>{const o=()=>{s(document.hidden)};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)},[]),n};let bc=1;class Ib{constructor(){this.subscribe=s=>(this.subscribers.push(s),()=>{const o=this.subscribers.indexOf(s);this.subscribers.splice(o,1)}),this.publish=s=>{this.subscribers.forEach(o=>o(s))},this.addToast=s=>{this.publish(s),this.toasts=[...this.toasts,s]},this.create=s=>{var o;const{message:l,...c}=s,d=typeof s?.id=="number"||((o=s.id)==null?void 0:o.length)>0?s.id:bc++,f=this.toasts.find(h=>h.id===d),p=s.dismissible===void 0?!0:s.dismissible;return this.dismissedToasts.has(d)&&this.dismissedToasts.delete(d),f?this.toasts=this.toasts.map(h=>h.id===d?(this.publish({...h,...s,id:d,title:l}),{...h,...s,id:d,dismissible:p,title:l}):h):this.addToast({title:l,...c,dismissible:p,id:d}),d},this.dismiss=s=>(s?(this.dismissedToasts.add(s),requestAnimationFrame(()=>this.subscribers.forEach(o=>o({id:s,dismiss:!0})))):this.toasts.forEach(o=>{this.subscribers.forEach(l=>l({id:o.id,dismiss:!0}))}),s),this.message=(s,o)=>this.create({...o,message:s}),this.error=(s,o)=>this.create({...o,message:s,type:"error"}),this.success=(s,o)=>this.create({...o,type:"success",message:s}),this.info=(s,o)=>this.create({...o,type:"info",message:s}),this.warning=(s,o)=>this.create({...o,type:"warning",message:s}),this.loading=(s,o)=>this.create({...o,type:"loading",message:s}),this.promise=(s,o)=>{if(!o)return;let l;o.loading!==void 0&&(l=this.create({...o,promise:s,type:"loading",message:o.loading,description:typeof o.description!="function"?o.description:void 0}));const c=Promise.resolve(s instanceof Function?s():s);let d=l!==void 0,f;const p=c.then(async g=>{if(f=["resolve",g],ee.isValidElement(g))d=!1,this.create({id:l,type:"default",message:g});else if(_b(g)&&!g.ok){d=!1;const v=typeof o.error=="function"?await o.error(`HTTP error! status: ${g.status}`):o.error,N=typeof o.description=="function"?await o.description(`HTTP error! status: ${g.status}`):o.description,T=typeof v=="object"&&!ee.isValidElement(v)?v:{message:v};this.create({id:l,type:"error",description:N,...T})}else if(g instanceof Error){d=!1;const v=typeof o.error=="function"?await o.error(g):o.error,N=typeof o.description=="function"?await o.description(g):o.description,T=typeof v=="object"&&!ee.isValidElement(v)?v:{message:v};this.create({id:l,type:"error",description:N,...T})}else if(o.success!==void 0){d=!1;const v=typeof o.success=="function"?await o.success(g):o.success,N=typeof o.description=="function"?await o.description(g):o.description,T=typeof v=="object"&&!ee.isValidElement(v)?v:{message:v};this.create({id:l,type:"success",description:N,...T})}}).catch(async g=>{if(f=["reject",g],o.error!==void 0){d=!1;const w=typeof o.error=="function"?await o.error(g):o.error,v=typeof o.description=="function"?await o.description(g):o.description,k=typeof w=="object"&&!ee.isValidElement(w)?w:{message:w};this.create({id:l,type:"error",description:v,...k})}}).finally(()=>{d&&(this.dismiss(l),l=void 0),o.finally==null||o.finally.call(o)}),h=()=>new Promise((g,w)=>p.then(()=>f[0]==="reject"?w(f[1]):g(f[1])).catch(w));return typeof l!="string"&&typeof l!="number"?{unwrap:h}:Object.assign(l,{unwrap:h})},this.custom=(s,o)=>{const l=o?.id||bc++;return this.create({jsx:s(l),id:l,...o}),l},this.getActiveToasts=()=>this.toasts.filter(s=>!this.dismissedToasts.has(s.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Et=new Ib,Pb=(n,s)=>{const o=s?.id||bc++;return Et.addToast({title:n,...s,id:o}),o},_b=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",Rb=Pb,Ab=()=>Et.toasts,Mb=()=>Et.getActiveToasts(),qi=Object.assign(Rb,{success:Et.success,info:Et.info,warning:Et.warning,error:Et.error,custom:Et.custom,message:Et.message,promise:Et.promise,dismiss:Et.dismiss,loading:Et.loading},{getHistory:Ab,getToasts:Mb});xb("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Wi(n){return n.label!==void 0}const Ob=3,Db="24px",Lb="16px",gp=4e3,Bb=356,zb=14,$b=45,Fb=200;function cn(...n){return n.filter(Boolean).join(" ")}function Vb(n){const[s,o]=n.split("-"),l=[];return s&&l.push(s),o&&l.push(o),l}const Hb=n=>{var s,o,l,c,d,f,p,h,g;const{invert:w,toast:v,unstyled:N,interacting:k,setHeights:T,visibleToasts:b,heights:C,index:I,toasts:S,expanded:j,removeToast:M,defaultRichColors:$,closeButton:z,style:L,cancelButtonStyle:F,actionButtonStyle:oe,className:ae="",descriptionClassName:be="",duration:le,position:ce,gap:ge,expandByDefault:re,classNames:X,icons:ne,closeButtonAriaLabel:A="Close toast"}=n,[Z,Y]=ee.useState(null),[R,V]=ee.useState(null),[q,K]=ee.useState(!1),[se,de]=ee.useState(!1),[W,H]=ee.useState(!1),[te,ue]=ee.useState(!1),[Ne,Se]=ee.useState(!1),[Fe,et]=ee.useState(0),[Wt,Ut]=ee.useState(0),it=ee.useRef(v.duration||le||gp),To=ee.useRef(null),jt=ee.useRef(null),ur=I===0,_n=I+1<=b,at=v.type,vn=v.dismissible!==!1,Cs=v.className||"",Ss=v.descriptionClassName||"",dr=ee.useMemo(()=>C.findIndex(Ce=>Ce.toastId===v.id)||0,[C,v.id]),Io=ee.useMemo(()=>{var Ce;return(Ce=v.closeButton)!=null?Ce:z},[v.closeButton,z]),fr=ee.useMemo(()=>v.duration||le||gp,[v.duration,le]),Dr=ee.useRef(0),Ot=ee.useRef(0),Rn=ee.useRef(0),An=ee.useRef(null),[Es,js]=ce.split("-"),Ts=ee.useMemo(()=>C.reduce((Ce,He,Ke)=>Ke>=dr?Ce:Ce+He.height,0),[C,dr]),Lr=Tb(),Po=v.invert||w,pr=at==="loading";Ot.current=ee.useMemo(()=>dr*ge+Ts,[dr,Ts]),ee.useEffect(()=>{it.current=fr},[fr]),ee.useEffect(()=>{K(!0)},[]),ee.useEffect(()=>{const Ce=jt.current;if(Ce){const He=Ce.getBoundingClientRect().height;return Ut(He),T(Ke=>[{toastId:v.id,height:He,position:v.position},...Ke]),()=>T(Ke=>Ke.filter(ft=>ft.toastId!==v.id))}},[T,v.id]),ee.useLayoutEffect(()=>{if(!q)return;const Ce=jt.current,He=Ce.style.height;Ce.style.height="auto";const Ke=Ce.getBoundingClientRect().height;Ce.style.height=He,Ut(Ke),T(ft=>ft.find(Ye=>Ye.toastId===v.id)?ft.map(Ye=>Ye.toastId===v.id?{...Ye,height:Ke}:Ye):[{toastId:v.id,height:Ke,position:v.position},...ft])},[q,v.title,v.description,T,v.id,v.jsx,v.action,v.cancel]);const Dt=ee.useCallback(()=>{de(!0),et(Ot.current),T(Ce=>Ce.filter(He=>He.toastId!==v.id)),setTimeout(()=>{M(v)},Fb)},[v,M,T,Ot]);ee.useEffect(()=>{if(v.promise&&at==="loading"||v.duration===1/0||v.type==="loading")return;let Ce;return j||k||Lr?(()=>{if(Rn.current<Dr.current){const ft=new Date().getTime()-Dr.current;it.current=it.current-ft}Rn.current=new Date().getTime()})():(()=>{it.current!==1/0&&(Dr.current=new Date().getTime(),Ce=setTimeout(()=>{v.onAutoClose==null||v.onAutoClose.call(v,v),Dt()},it.current))})(),()=>clearTimeout(Ce)},[j,k,v,at,Lr,Dt]),ee.useEffect(()=>{v.delete&&(Dt(),v.onDismiss==null||v.onDismiss.call(v,v))},[Dt,v.delete]);function _o(){var Ce;if(ne?.loading){var He;return ee.createElement("div",{className:cn(X?.loader,v==null||(He=v.classNames)==null?void 0:He.loader,"sonner-loader"),"data-visible":at==="loading"},ne.loading)}return ee.createElement(Nb,{className:cn(X?.loader,v==null||(Ce=v.classNames)==null?void 0:Ce.loader),visible:at==="loading"})}const Mn=v.icon||ne?.[at]||wb(at);var yn,Ro;return ee.createElement("li",{tabIndex:0,ref:jt,className:cn(ae,Cs,X?.toast,v==null||(s=v.classNames)==null?void 0:s.toast,X?.default,X?.[at],v==null||(o=v.classNames)==null?void 0:o[at]),"data-sonner-toast":"","data-rich-colors":(yn=v.richColors)!=null?yn:$,"data-styled":!(v.jsx||v.unstyled||N),"data-mounted":q,"data-promise":!!v.promise,"data-swiped":Ne,"data-removed":se,"data-visible":_n,"data-y-position":Es,"data-x-position":js,"data-index":I,"data-front":ur,"data-swiping":W,"data-dismissible":vn,"data-type":at,"data-invert":Po,"data-swipe-out":te,"data-swipe-direction":R,"data-expanded":!!(j||re&&q),"data-testid":v.testId,style:{"--index":I,"--toasts-before":I,"--z-index":S.length-I,"--offset":`${se?Fe:Ot.current}px`,"--initial-height":re?"auto":`${Wt}px`,...L,...v.style},onDragEnd:()=>{H(!1),Y(null),An.current=null},onPointerDown:Ce=>{Ce.button!==2&&(pr||!vn||(To.current=new Date,et(Ot.current),Ce.target.setPointerCapture(Ce.pointerId),Ce.target.tagName!=="BUTTON"&&(H(!0),An.current={x:Ce.clientX,y:Ce.clientY})))},onPointerUp:()=>{var Ce,He,Ke;if(te||!vn)return;An.current=null;const ft=Number(((Ce=jt.current)==null?void 0:Ce.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),On=Number(((He=jt.current)==null?void 0:He.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ye=new Date().getTime()-((Ke=To.current)==null?void 0:Ke.getTime()),tt=Z==="x"?ft:On,Dn=Math.abs(tt)/Ye;if(Math.abs(tt)>=$b||Dn>.11){et(Ot.current),v.onDismiss==null||v.onDismiss.call(v,v),V(Z==="x"?ft>0?"right":"left":On>0?"down":"up"),Dt(),ue(!0);return}else{var lt,Tt;(lt=jt.current)==null||lt.style.setProperty("--swipe-amount-x","0px"),(Tt=jt.current)==null||Tt.style.setProperty("--swipe-amount-y","0px")}Se(!1),H(!1),Y(null)},onPointerMove:Ce=>{var He,Ke,ft;if(!An.current||!vn||((He=window.getSelection())==null?void 0:He.toString().length)>0)return;const Ye=Ce.clientY-An.current.y,tt=Ce.clientX-An.current.x;var Dn;const lt=(Dn=n.swipeDirections)!=null?Dn:Vb(ce);!Z&&(Math.abs(tt)>1||Math.abs(Ye)>1)&&Y(Math.abs(tt)>Math.abs(Ye)?"x":"y");let Tt={x:0,y:0};const Ln=Lt=>1/(1.5+Math.abs(Lt)/20);if(Z==="y"){if(lt.includes("top")||lt.includes("bottom"))if(lt.includes("top")&&Ye<0||lt.includes("bottom")&&Ye>0)Tt.y=Ye;else{const Lt=Ye*Ln(Ye);Tt.y=Math.abs(Lt)<Math.abs(Ye)?Lt:Ye}}else if(Z==="x"&&(lt.includes("left")||lt.includes("right")))if(lt.includes("left")&&tt<0||lt.includes("right")&&tt>0)Tt.x=tt;else{const Lt=tt*Ln(tt);Tt.x=Math.abs(Lt)<Math.abs(tt)?Lt:tt}(Math.abs(Tt.x)>0||Math.abs(Tt.y)>0)&&Se(!0),(Ke=jt.current)==null||Ke.style.setProperty("--swipe-amount-x",`${Tt.x}px`),(ft=jt.current)==null||ft.style.setProperty("--swipe-amount-y",`${Tt.y}px`)}},Io&&!v.jsx&&at!=="loading"?ee.createElement("button",{"aria-label":A,"data-disabled":pr,"data-close-button":!0,onClick:pr||!vn?()=>{}:()=>{Dt(),v.onDismiss==null||v.onDismiss.call(v,v)},className:cn(X?.closeButton,v==null||(l=v.classNames)==null?void 0:l.closeButton)},(Ro=ne?.close)!=null?Ro:jb):null,(at||v.icon||v.promise)&&v.icon!==null&&(ne?.[at]!==null||v.icon)?ee.createElement("div",{"data-icon":"",className:cn(X?.icon,v==null||(c=v.classNames)==null?void 0:c.icon)},v.promise||v.type==="loading"&&!v.icon?v.icon||_o():null,v.type!=="loading"?Mn:null):null,ee.createElement("div",{"data-content":"",className:cn(X?.content,v==null||(d=v.classNames)==null?void 0:d.content)},ee.createElement("div",{"data-title":"",className:cn(X?.title,v==null||(f=v.classNames)==null?void 0:f.title)},v.jsx?v.jsx:typeof v.title=="function"?v.title():v.title),v.description?ee.createElement("div",{"data-description":"",className:cn(be,Ss,X?.description,v==null||(p=v.classNames)==null?void 0:p.description)},typeof v.description=="function"?v.description():v.description):null),ee.isValidElement(v.cancel)?v.cancel:v.cancel&&Wi(v.cancel)?ee.createElement("button",{"data-button":!0,"data-cancel":!0,style:v.cancelButtonStyle||F,onClick:Ce=>{Wi(v.cancel)&&vn&&(v.cancel.onClick==null||v.cancel.onClick.call(v.cancel,Ce),Dt())},className:cn(X?.cancelButton,v==null||(h=v.classNames)==null?void 0:h.cancelButton)},v.cancel.label):null,ee.isValidElement(v.action)?v.action:v.action&&Wi(v.action)?ee.createElement("button",{"data-button":!0,"data-action":!0,style:v.actionButtonStyle||oe,onClick:Ce=>{Wi(v.action)&&(v.action.onClick==null||v.action.onClick.call(v.action,Ce),!Ce.defaultPrevented&&Dt())},className:cn(X?.actionButton,v==null||(g=v.classNames)==null?void 0:g.actionButton)},v.action.label):null)};function vp(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function Wb(n,s){const o={};return[n,s].forEach((l,c)=>{const d=c===1,f=d?"--mobile-offset":"--offset",p=d?Lb:Db;function h(g){["top","right","bottom","left"].forEach(w=>{o[`${f}-${w}`]=typeof g=="number"?`${g}px`:g})}typeof l=="number"||typeof l=="string"?h(l):typeof l=="object"?["top","right","bottom","left"].forEach(g=>{l[g]===void 0?o[`${f}-${g}`]=p:o[`${f}-${g}`]=typeof l[g]=="number"?`${l[g]}px`:l[g]}):h(p)}),o}const Ub=ee.forwardRef(function(s,o){const{id:l,invert:c,position:d="bottom-right",hotkey:f=["altKey","KeyT"],expand:p,closeButton:h,className:g,offset:w,mobileOffset:v,theme:N="light",richColors:k,duration:T,style:b,visibleToasts:C=Ob,toastOptions:I,dir:S=vp(),gap:j=zb,icons:M,containerAriaLabel:$="Notifications"}=s,[z,L]=ee.useState([]),F=ee.useMemo(()=>l?z.filter(q=>q.toasterId===l):z.filter(q=>!q.toasterId),[z,l]),oe=ee.useMemo(()=>Array.from(new Set([d].concat(F.filter(q=>q.position).map(q=>q.position)))),[F,d]),[ae,be]=ee.useState([]),[le,ce]=ee.useState(!1),[ge,re]=ee.useState(!1),[X,ne]=ee.useState(N!=="system"?N:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),A=ee.useRef(null),Z=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),Y=ee.useRef(null),R=ee.useRef(!1),V=ee.useCallback(q=>{L(K=>{var se;return(se=K.find(de=>de.id===q.id))!=null&&se.delete||Et.dismiss(q.id),K.filter(({id:de})=>de!==q.id)})},[]);return ee.useEffect(()=>Et.subscribe(q=>{if(q.dismiss){requestAnimationFrame(()=>{L(K=>K.map(se=>se.id===q.id?{...se,delete:!0}:se))});return}setTimeout(()=>{rm.flushSync(()=>{L(K=>{const se=K.findIndex(de=>de.id===q.id);return se!==-1?[...K.slice(0,se),{...K[se],...q},...K.slice(se+1)]:[q,...K]})})})}),[z]),ee.useEffect(()=>{if(N!=="system"){ne(N);return}if(N==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ne("dark"):ne("light")),typeof window>"u")return;const q=window.matchMedia("(prefers-color-scheme: dark)");try{q.addEventListener("change",({matches:K})=>{ne(K?"dark":"light")})}catch{q.addListener(({matches:se})=>{try{ne(se?"dark":"light")}catch(de){console.error(de)}})}},[N]),ee.useEffect(()=>{z.length<=1&&ce(!1)},[z]),ee.useEffect(()=>{const q=K=>{var se;if(f.every(H=>K[H]||K.code===H)){var W;ce(!0),(W=A.current)==null||W.focus()}K.code==="Escape"&&(document.activeElement===A.current||(se=A.current)!=null&&se.contains(document.activeElement))&&ce(!1)};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[f]),ee.useEffect(()=>{if(A.current)return()=>{Y.current&&(Y.current.focus({preventScroll:!0}),Y.current=null,R.current=!1)}},[A.current]),ee.createElement("section",{ref:o,"aria-label":`${$} ${Z}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},oe.map((q,K)=>{var se;const[de,W]=q.split("-");return F.length?ee.createElement("ol",{key:q,dir:S==="auto"?vp():S,tabIndex:-1,ref:A,className:g,"data-sonner-toaster":!0,"data-sonner-theme":X,"data-y-position":de,"data-x-position":W,style:{"--front-toast-height":`${((se=ae[0])==null?void 0:se.height)||0}px`,"--width":`${Bb}px`,"--gap":`${j}px`,...b,...Wb(w,v)},onBlur:H=>{R.current&&!H.currentTarget.contains(H.relatedTarget)&&(R.current=!1,Y.current&&(Y.current.focus({preventScroll:!0}),Y.current=null))},onFocus:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||R.current||(R.current=!0,Y.current=H.relatedTarget)},onMouseEnter:()=>ce(!0),onMouseMove:()=>ce(!0),onMouseLeave:()=>{ge||ce(!1)},onDragEnd:()=>ce(!1),onPointerDown:H=>{H.target instanceof HTMLElement&&H.target.dataset.dismissible==="false"||re(!0)},onPointerUp:()=>re(!1)},F.filter(H=>!H.position&&K===0||H.position===q).map((H,te)=>{var ue,Ne;return ee.createElement(Hb,{key:H.id,icons:M,index:te,toast:H,defaultRichColors:k,duration:(ue=I?.duration)!=null?ue:T,className:I?.className,descriptionClassName:I?.descriptionClassName,invert:c,visibleToasts:C,closeButton:(Ne=I?.closeButton)!=null?Ne:h,interacting:ge,position:q,style:I?.style,unstyled:I?.unstyled,classNames:I?.classNames,cancelButtonStyle:I?.cancelButtonStyle,actionButtonStyle:I?.actionButtonStyle,closeButtonAriaLabel:I?.closeButtonAriaLabel,removeToast:V,toasts:F.filter(Se=>Se.position==H.position),heights:ae.filter(Se=>Se.position==H.position),setHeights:be,expandByDefault:p,gap:j,expanded:le,swipeDirections:s.swipeDirections})})):null}))});function yp(n,[s,o]){return Math.min(o,Math.max(s,n))}function xp(n){const s=Gb(n),o=y.forwardRef((l,c)=>{const{children:d,...f}=l,p=y.Children.toArray(d),h=p.find(qb);if(h){const g=h.props.children,w=p.map(v=>v===h?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:v);return a.jsx(s,{...f,ref:c,children:y.isValidElement(g)?y.cloneElement(g,void 0,w):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function Gb(n){const s=y.forwardRef((o,l)=>{const{children:c,...d}=o;if(y.isValidElement(c)){const f=Kb(c),p=Qb(d,c.props);return c.type!==y.Fragment&&(p.ref=l?ko(l,f):f),y.cloneElement(c,p)}return y.Children.count(c)>1?y.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var Yb=Symbol("radix.slottable");function qb(n){return y.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Yb}function Qb(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function Kb(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}function Xb(n){const s=n+"CollectionProvider",[o,l]=No(s),[c,d]=o(s,{collectionRef:{current:null},itemMap:new Map}),f=b=>{const{scope:C,children:I}=b,S=ee.useRef(null),j=ee.useRef(new Map).current;return a.jsx(c,{scope:C,itemMap:j,collectionRef:S,children:I})};f.displayName=s;const p=n+"CollectionSlot",h=xp(p),g=ee.forwardRef((b,C)=>{const{scope:I,children:S}=b,j=d(p,I),M=Be(C,j.collectionRef);return a.jsx(h,{ref:M,children:S})});g.displayName=p;const w=n+"CollectionItemSlot",v="data-radix-collection-item",N=xp(w),k=ee.forwardRef((b,C)=>{const{scope:I,children:S,...j}=b,M=ee.useRef(null),$=Be(C,M),z=d(w,I);return ee.useEffect(()=>(z.itemMap.set(M,{ref:M,...j}),()=>void z.itemMap.delete(M))),a.jsx(N,{[v]:"",ref:$,children:S})});k.displayName=w;function T(b){const C=d(n+"CollectionConsumer",b);return ee.useCallback(()=>{const S=C.collectionRef.current;if(!S)return[];const j=Array.from(S.querySelectorAll(`[${v}]`));return Array.from(C.itemMap.values()).sort((z,L)=>j.indexOf(z.ref.current)-j.indexOf(L.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:f,Slot:g,ItemSlot:k},T,l]}var Zb=y.createContext(void 0);function Jb(n){const s=y.useContext(Zb);return n||s||"ltr"}const eN=["top","right","bottom","left"],ir=Math.min,At=Math.max,ea=Math.round,Ui=Math.floor,mn=n=>({x:n,y:n}),tN={left:"right",right:"left",bottom:"top",top:"bottom"},nN={start:"end",end:"start"};function Nc(n,s,o){return At(n,ir(s,o))}function In(n,s){return typeof n=="function"?n(s):n}function Pn(n){return n.split("-")[0]}function So(n){return n.split("-")[1]}function Qc(n){return n==="x"?"y":"x"}function Kc(n){return n==="y"?"height":"width"}const rN=new Set(["top","bottom"]);function pn(n){return rN.has(Pn(n))?"y":"x"}function Xc(n){return Qc(pn(n))}function oN(n,s,o){o===void 0&&(o=!1);const l=So(n),c=Xc(n),d=Kc(c);let f=c==="x"?l===(o?"end":"start")?"right":"left":l==="start"?"bottom":"top";return s.reference[d]>s.floating[d]&&(f=ta(f)),[f,ta(f)]}function sN(n){const s=ta(n);return[kc(n),s,kc(s)]}function kc(n){return n.replace(/start|end/g,s=>nN[s])}const wp=["left","right"],bp=["right","left"],iN=["top","bottom"],aN=["bottom","top"];function lN(n,s,o){switch(n){case"top":case"bottom":return o?s?bp:wp:s?wp:bp;case"left":case"right":return s?iN:aN;default:return[]}}function cN(n,s,o,l){const c=So(n);let d=lN(Pn(n),o==="start",l);return c&&(d=d.map(f=>f+"-"+c),s&&(d=d.concat(d.map(kc)))),d}function ta(n){return n.replace(/left|right|bottom|top/g,s=>tN[s])}function uN(n){return{top:0,right:0,bottom:0,left:0,...n}}function xh(n){return typeof n!="number"?uN(n):{top:n,right:n,bottom:n,left:n}}function na(n){const{x:s,y:o,width:l,height:c}=n;return{width:l,height:c,top:o,left:s,right:s+l,bottom:o+c,x:s,y:o}}function Np(n,s,o){let{reference:l,floating:c}=n;const d=pn(s),f=Xc(s),p=Kc(f),h=Pn(s),g=d==="y",w=l.x+l.width/2-c.width/2,v=l.y+l.height/2-c.height/2,N=l[p]/2-c[p]/2;let k;switch(h){case"top":k={x:w,y:l.y-c.height};break;case"bottom":k={x:w,y:l.y+l.height};break;case"right":k={x:l.x+l.width,y:v};break;case"left":k={x:l.x-c.width,y:v};break;default:k={x:l.x,y:l.y}}switch(So(s)){case"start":k[f]-=N*(o&&g?-1:1);break;case"end":k[f]+=N*(o&&g?-1:1);break}return k}const dN=async(n,s,o)=>{const{placement:l="bottom",strategy:c="absolute",middleware:d=[],platform:f}=o,p=d.filter(Boolean),h=await(f.isRTL==null?void 0:f.isRTL(s));let g=await f.getElementRects({reference:n,floating:s,strategy:c}),{x:w,y:v}=Np(g,l,h),N=l,k={},T=0;for(let b=0;b<p.length;b++){const{name:C,fn:I}=p[b],{x:S,y:j,data:M,reset:$}=await I({x:w,y:v,initialPlacement:l,placement:N,strategy:c,middlewareData:k,rects:g,platform:f,elements:{reference:n,floating:s}});w=S??w,v=j??v,k={...k,[C]:{...k[C],...M}},$&&T<=50&&(T++,typeof $=="object"&&($.placement&&(N=$.placement),$.rects&&(g=$.rects===!0?await f.getElementRects({reference:n,floating:s,strategy:c}):$.rects),{x:w,y:v}=Np(g,N,h)),b=-1)}return{x:w,y:v,placement:N,strategy:c,middlewareData:k}};async function ws(n,s){var o;s===void 0&&(s={});const{x:l,y:c,platform:d,rects:f,elements:p,strategy:h}=n,{boundary:g="clippingAncestors",rootBoundary:w="viewport",elementContext:v="floating",altBoundary:N=!1,padding:k=0}=In(s,n),T=xh(k),C=p[N?v==="floating"?"reference":"floating":v],I=na(await d.getClippingRect({element:(o=await(d.isElement==null?void 0:d.isElement(C)))==null||o?C:C.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(p.floating)),boundary:g,rootBoundary:w,strategy:h})),S=v==="floating"?{x:l,y:c,width:f.floating.width,height:f.floating.height}:f.reference,j=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p.floating)),M=await(d.isElement==null?void 0:d.isElement(j))?await(d.getScale==null?void 0:d.getScale(j))||{x:1,y:1}:{x:1,y:1},$=na(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:S,offsetParent:j,strategy:h}):S);return{top:(I.top-$.top+T.top)/M.y,bottom:($.bottom-I.bottom+T.bottom)/M.y,left:(I.left-$.left+T.left)/M.x,right:($.right-I.right+T.right)/M.x}}const fN=n=>({name:"arrow",options:n,async fn(s){const{x:o,y:l,placement:c,rects:d,platform:f,elements:p,middlewareData:h}=s,{element:g,padding:w=0}=In(n,s)||{};if(g==null)return{};const v=xh(w),N={x:o,y:l},k=Xc(c),T=Kc(k),b=await f.getDimensions(g),C=k==="y",I=C?"top":"left",S=C?"bottom":"right",j=C?"clientHeight":"clientWidth",M=d.reference[T]+d.reference[k]-N[k]-d.floating[T],$=N[k]-d.reference[k],z=await(f.getOffsetParent==null?void 0:f.getOffsetParent(g));let L=z?z[j]:0;(!L||!await(f.isElement==null?void 0:f.isElement(z)))&&(L=p.floating[j]||d.floating[T]);const F=M/2-$/2,oe=L/2-b[T]/2-1,ae=ir(v[I],oe),be=ir(v[S],oe),le=ae,ce=L-b[T]-be,ge=L/2-b[T]/2+F,re=Nc(le,ge,ce),X=!h.arrow&&So(c)!=null&&ge!==re&&d.reference[T]/2-(ge<le?ae:be)-b[T]/2<0,ne=X?ge<le?ge-le:ge-ce:0;return{[k]:N[k]+ne,data:{[k]:re,centerOffset:ge-re-ne,...X&&{alignmentOffset:ne}},reset:X}}}),pN=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(s){var o,l;const{placement:c,middlewareData:d,rects:f,initialPlacement:p,platform:h,elements:g}=s,{mainAxis:w=!0,crossAxis:v=!0,fallbackPlacements:N,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:b=!0,...C}=In(n,s);if((o=d.arrow)!=null&&o.alignmentOffset)return{};const I=Pn(c),S=pn(p),j=Pn(p)===p,M=await(h.isRTL==null?void 0:h.isRTL(g.floating)),$=N||(j||!b?[ta(p)]:sN(p)),z=T!=="none";!N&&z&&$.push(...cN(p,b,T,M));const L=[p,...$],F=await ws(s,C),oe=[];let ae=((l=d.flip)==null?void 0:l.overflows)||[];if(w&&oe.push(F[I]),v){const ge=oN(c,f,M);oe.push(F[ge[0]],F[ge[1]])}if(ae=[...ae,{placement:c,overflows:oe}],!oe.every(ge=>ge<=0)){var be,le;const ge=(((be=d.flip)==null?void 0:be.index)||0)+1,re=L[ge];if(re&&(!(v==="alignment"?S!==pn(re):!1)||ae.every(A=>pn(A.placement)===S?A.overflows[0]>0:!0)))return{data:{index:ge,overflows:ae},reset:{placement:re}};let X=(le=ae.filter(ne=>ne.overflows[0]<=0).sort((ne,A)=>ne.overflows[1]-A.overflows[1])[0])==null?void 0:le.placement;if(!X)switch(k){case"bestFit":{var ce;const ne=(ce=ae.filter(A=>{if(z){const Z=pn(A.placement);return Z===S||Z==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(Z=>Z>0).reduce((Z,Y)=>Z+Y,0)]).sort((A,Z)=>A[1]-Z[1])[0])==null?void 0:ce[0];ne&&(X=ne);break}case"initialPlacement":X=p;break}if(c!==X)return{reset:{placement:X}}}return{}}}};function kp(n,s){return{top:n.top-s.height,right:n.right-s.width,bottom:n.bottom-s.height,left:n.left-s.width}}function Cp(n){return eN.some(s=>n[s]>=0)}const mN=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(s){const{rects:o}=s,{strategy:l="referenceHidden",...c}=In(n,s);switch(l){case"referenceHidden":{const d=await ws(s,{...c,elementContext:"reference"}),f=kp(d,o.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:Cp(f)}}}case"escaped":{const d=await ws(s,{...c,altBoundary:!0}),f=kp(d,o.floating);return{data:{escapedOffsets:f,escaped:Cp(f)}}}default:return{}}}}},wh=new Set(["left","top"]);async function hN(n,s){const{placement:o,platform:l,elements:c}=n,d=await(l.isRTL==null?void 0:l.isRTL(c.floating)),f=Pn(o),p=So(o),h=pn(o)==="y",g=wh.has(f)?-1:1,w=d&&h?-1:1,v=In(s,n);let{mainAxis:N,crossAxis:k,alignmentAxis:T}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return p&&typeof T=="number"&&(k=p==="end"?T*-1:T),h?{x:k*w,y:N*g}:{x:N*g,y:k*w}}const gN=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(s){var o,l;const{x:c,y:d,placement:f,middlewareData:p}=s,h=await hN(s,n);return f===((o=p.offset)==null?void 0:o.placement)&&(l=p.arrow)!=null&&l.alignmentOffset?{}:{x:c+h.x,y:d+h.y,data:{...h,placement:f}}}}},vN=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(s){const{x:o,y:l,placement:c}=s,{mainAxis:d=!0,crossAxis:f=!1,limiter:p={fn:C=>{let{x:I,y:S}=C;return{x:I,y:S}}},...h}=In(n,s),g={x:o,y:l},w=await ws(s,h),v=pn(Pn(c)),N=Qc(v);let k=g[N],T=g[v];if(d){const C=N==="y"?"top":"left",I=N==="y"?"bottom":"right",S=k+w[C],j=k-w[I];k=Nc(S,k,j)}if(f){const C=v==="y"?"top":"left",I=v==="y"?"bottom":"right",S=T+w[C],j=T-w[I];T=Nc(S,T,j)}const b=p.fn({...s,[N]:k,[v]:T});return{...b,data:{x:b.x-o,y:b.y-l,enabled:{[N]:d,[v]:f}}}}}},yN=function(n){return n===void 0&&(n={}),{options:n,fn(s){const{x:o,y:l,placement:c,rects:d,middlewareData:f}=s,{offset:p=0,mainAxis:h=!0,crossAxis:g=!0}=In(n,s),w={x:o,y:l},v=pn(c),N=Qc(v);let k=w[N],T=w[v];const b=In(p,s),C=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(h){const j=N==="y"?"height":"width",M=d.reference[N]-d.floating[j]+C.mainAxis,$=d.reference[N]+d.reference[j]-C.mainAxis;k<M?k=M:k>$&&(k=$)}if(g){var I,S;const j=N==="y"?"width":"height",M=wh.has(Pn(c)),$=d.reference[v]-d.floating[j]+(M&&((I=f.offset)==null?void 0:I[v])||0)+(M?0:C.crossAxis),z=d.reference[v]+d.reference[j]+(M?0:((S=f.offset)==null?void 0:S[v])||0)-(M?C.crossAxis:0);T<$?T=$:T>z&&(T=z)}return{[N]:k,[v]:T}}}},xN=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(s){var o,l;const{placement:c,rects:d,platform:f,elements:p}=s,{apply:h=()=>{},...g}=In(n,s),w=await ws(s,g),v=Pn(c),N=So(c),k=pn(c)==="y",{width:T,height:b}=d.floating;let C,I;v==="top"||v==="bottom"?(C=v,I=N===(await(f.isRTL==null?void 0:f.isRTL(p.floating))?"start":"end")?"left":"right"):(I=v,C=N==="end"?"top":"bottom");const S=b-w.top-w.bottom,j=T-w.left-w.right,M=ir(b-w[C],S),$=ir(T-w[I],j),z=!s.middlewareData.shift;let L=M,F=$;if((o=s.middlewareData.shift)!=null&&o.enabled.x&&(F=j),(l=s.middlewareData.shift)!=null&&l.enabled.y&&(L=S),z&&!N){const ae=At(w.left,0),be=At(w.right,0),le=At(w.top,0),ce=At(w.bottom,0);k?F=T-2*(ae!==0||be!==0?ae+be:At(w.left,w.right)):L=b-2*(le!==0||ce!==0?le+ce:At(w.top,w.bottom))}await h({...s,availableWidth:F,availableHeight:L});const oe=await f.getDimensions(p.floating);return T!==oe.width||b!==oe.height?{reset:{rects:!0}}:{}}}};function ua(){return typeof window<"u"}function Eo(n){return bh(n)?(n.nodeName||"").toLowerCase():"#document"}function Mt(n){var s;return(n==null||(s=n.ownerDocument)==null?void 0:s.defaultView)||window}function gn(n){var s;return(s=(bh(n)?n.ownerDocument:n.document)||window.document)==null?void 0:s.documentElement}function bh(n){return ua()?n instanceof Node||n instanceof Mt(n).Node:!1}function en(n){return ua()?n instanceof Element||n instanceof Mt(n).Element:!1}function hn(n){return ua()?n instanceof HTMLElement||n instanceof Mt(n).HTMLElement:!1}function Sp(n){return!ua()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Mt(n).ShadowRoot}const wN=new Set(["inline","contents"]);function ks(n){const{overflow:s,overflowX:o,overflowY:l,display:c}=tn(n);return/auto|scroll|overlay|hidden|clip/.test(s+l+o)&&!wN.has(c)}const bN=new Set(["table","td","th"]);function NN(n){return bN.has(Eo(n))}const kN=[":popover-open",":modal"];function da(n){return kN.some(s=>{try{return n.matches(s)}catch{return!1}})}const CN=["transform","translate","scale","rotate","perspective"],SN=["transform","translate","scale","rotate","perspective","filter"],EN=["paint","layout","strict","content"];function Zc(n){const s=Jc(),o=en(n)?tn(n):n;return CN.some(l=>o[l]?o[l]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!s&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!s&&(o.filter?o.filter!=="none":!1)||SN.some(l=>(o.willChange||"").includes(l))||EN.some(l=>(o.contain||"").includes(l))}function jN(n){let s=ar(n);for(;hn(s)&&!vo(s);){if(Zc(s))return s;if(da(s))return null;s=ar(s)}return null}function Jc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const TN=new Set(["html","body","#document"]);function vo(n){return TN.has(Eo(n))}function tn(n){return Mt(n).getComputedStyle(n)}function fa(n){return en(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function ar(n){if(Eo(n)==="html")return n;const s=n.assignedSlot||n.parentNode||Sp(n)&&n.host||gn(n);return Sp(s)?s.host:s}function Nh(n){const s=ar(n);return vo(s)?n.ownerDocument?n.ownerDocument.body:n.body:hn(s)&&ks(s)?s:Nh(s)}function bs(n,s,o){var l;s===void 0&&(s=[]),o===void 0&&(o=!0);const c=Nh(n),d=c===((l=n.ownerDocument)==null?void 0:l.body),f=Mt(c);if(d){const p=Cc(f);return s.concat(f,f.visualViewport||[],ks(c)?c:[],p&&o?bs(p):[])}return s.concat(c,bs(c,[],o))}function Cc(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function kh(n){const s=tn(n);let o=parseFloat(s.width)||0,l=parseFloat(s.height)||0;const c=hn(n),d=c?n.offsetWidth:o,f=c?n.offsetHeight:l,p=ea(o)!==d||ea(l)!==f;return p&&(o=d,l=f),{width:o,height:l,$:p}}function eu(n){return en(n)?n:n.contextElement}function mo(n){const s=eu(n);if(!hn(s))return mn(1);const o=s.getBoundingClientRect(),{width:l,height:c,$:d}=kh(s);let f=(d?ea(o.width):o.width)/l,p=(d?ea(o.height):o.height)/c;return(!f||!Number.isFinite(f))&&(f=1),(!p||!Number.isFinite(p))&&(p=1),{x:f,y:p}}const IN=mn(0);function Ch(n){const s=Mt(n);return!Jc()||!s.visualViewport?IN:{x:s.visualViewport.offsetLeft,y:s.visualViewport.offsetTop}}function PN(n,s,o){return s===void 0&&(s=!1),!o||s&&o!==Mt(n)?!1:s}function Rr(n,s,o,l){s===void 0&&(s=!1),o===void 0&&(o=!1);const c=n.getBoundingClientRect(),d=eu(n);let f=mn(1);s&&(l?en(l)&&(f=mo(l)):f=mo(n));const p=PN(d,o,l)?Ch(d):mn(0);let h=(c.left+p.x)/f.x,g=(c.top+p.y)/f.y,w=c.width/f.x,v=c.height/f.y;if(d){const N=Mt(d),k=l&&en(l)?Mt(l):l;let T=N,b=Cc(T);for(;b&&l&&k!==T;){const C=mo(b),I=b.getBoundingClientRect(),S=tn(b),j=I.left+(b.clientLeft+parseFloat(S.paddingLeft))*C.x,M=I.top+(b.clientTop+parseFloat(S.paddingTop))*C.y;h*=C.x,g*=C.y,w*=C.x,v*=C.y,h+=j,g+=M,T=Mt(b),b=Cc(T)}}return na({width:w,height:v,x:h,y:g})}function pa(n,s){const o=fa(n).scrollLeft;return s?s.left+o:Rr(gn(n)).left+o}function Sh(n,s){const o=n.getBoundingClientRect(),l=o.left+s.scrollLeft-pa(n,o),c=o.top+s.scrollTop;return{x:l,y:c}}function _N(n){let{elements:s,rect:o,offsetParent:l,strategy:c}=n;const d=c==="fixed",f=gn(l),p=s?da(s.floating):!1;if(l===f||p&&d)return o;let h={scrollLeft:0,scrollTop:0},g=mn(1);const w=mn(0),v=hn(l);if((v||!v&&!d)&&((Eo(l)!=="body"||ks(f))&&(h=fa(l)),hn(l))){const k=Rr(l);g=mo(l),w.x=k.x+l.clientLeft,w.y=k.y+l.clientTop}const N=f&&!v&&!d?Sh(f,h):mn(0);return{width:o.width*g.x,height:o.height*g.y,x:o.x*g.x-h.scrollLeft*g.x+w.x+N.x,y:o.y*g.y-h.scrollTop*g.y+w.y+N.y}}function RN(n){return Array.from(n.getClientRects())}function AN(n){const s=gn(n),o=fa(n),l=n.ownerDocument.body,c=At(s.scrollWidth,s.clientWidth,l.scrollWidth,l.clientWidth),d=At(s.scrollHeight,s.clientHeight,l.scrollHeight,l.clientHeight);let f=-o.scrollLeft+pa(n);const p=-o.scrollTop;return tn(l).direction==="rtl"&&(f+=At(s.clientWidth,l.clientWidth)-c),{width:c,height:d,x:f,y:p}}const Ep=25;function MN(n,s){const o=Mt(n),l=gn(n),c=o.visualViewport;let d=l.clientWidth,f=l.clientHeight,p=0,h=0;if(c){d=c.width,f=c.height;const w=Jc();(!w||w&&s==="fixed")&&(p=c.offsetLeft,h=c.offsetTop)}const g=pa(l);if(g<=0){const w=l.ownerDocument,v=w.body,N=getComputedStyle(v),k=w.compatMode==="CSS1Compat"&&parseFloat(N.marginLeft)+parseFloat(N.marginRight)||0,T=Math.abs(l.clientWidth-v.clientWidth-k);T<=Ep&&(d-=T)}else g<=Ep&&(d+=g);return{width:d,height:f,x:p,y:h}}const ON=new Set(["absolute","fixed"]);function DN(n,s){const o=Rr(n,!0,s==="fixed"),l=o.top+n.clientTop,c=o.left+n.clientLeft,d=hn(n)?mo(n):mn(1),f=n.clientWidth*d.x,p=n.clientHeight*d.y,h=c*d.x,g=l*d.y;return{width:f,height:p,x:h,y:g}}function jp(n,s,o){let l;if(s==="viewport")l=MN(n,o);else if(s==="document")l=AN(gn(n));else if(en(s))l=DN(s,o);else{const c=Ch(n);l={x:s.x-c.x,y:s.y-c.y,width:s.width,height:s.height}}return na(l)}function Eh(n,s){const o=ar(n);return o===s||!en(o)||vo(o)?!1:tn(o).position==="fixed"||Eh(o,s)}function LN(n,s){const o=s.get(n);if(o)return o;let l=bs(n,[],!1).filter(p=>en(p)&&Eo(p)!=="body"),c=null;const d=tn(n).position==="fixed";let f=d?ar(n):n;for(;en(f)&&!vo(f);){const p=tn(f),h=Zc(f);!h&&p.position==="fixed"&&(c=null),(d?!h&&!c:!h&&p.position==="static"&&!!c&&ON.has(c.position)||ks(f)&&!h&&Eh(n,f))?l=l.filter(w=>w!==f):c=p,f=ar(f)}return s.set(n,l),l}function BN(n){let{element:s,boundary:o,rootBoundary:l,strategy:c}=n;const f=[...o==="clippingAncestors"?da(s)?[]:LN(s,this._c):[].concat(o),l],p=f[0],h=f.reduce((g,w)=>{const v=jp(s,w,c);return g.top=At(v.top,g.top),g.right=ir(v.right,g.right),g.bottom=ir(v.bottom,g.bottom),g.left=At(v.left,g.left),g},jp(s,p,c));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function zN(n){const{width:s,height:o}=kh(n);return{width:s,height:o}}function $N(n,s,o){const l=hn(s),c=gn(s),d=o==="fixed",f=Rr(n,!0,d,s);let p={scrollLeft:0,scrollTop:0};const h=mn(0);function g(){h.x=pa(c)}if(l||!l&&!d)if((Eo(s)!=="body"||ks(c))&&(p=fa(s)),l){const k=Rr(s,!0,d,s);h.x=k.x+s.clientLeft,h.y=k.y+s.clientTop}else c&&g();d&&!l&&c&&g();const w=c&&!l&&!d?Sh(c,p):mn(0),v=f.left+p.scrollLeft-h.x-w.x,N=f.top+p.scrollTop-h.y-w.y;return{x:v,y:N,width:f.width,height:f.height}}function pc(n){return tn(n).position==="static"}function Tp(n,s){if(!hn(n)||tn(n).position==="fixed")return null;if(s)return s(n);let o=n.offsetParent;return gn(n)===o&&(o=o.ownerDocument.body),o}function jh(n,s){const o=Mt(n);if(da(n))return o;if(!hn(n)){let c=ar(n);for(;c&&!vo(c);){if(en(c)&&!pc(c))return c;c=ar(c)}return o}let l=Tp(n,s);for(;l&&NN(l)&&pc(l);)l=Tp(l,s);return l&&vo(l)&&pc(l)&&!Zc(l)?o:l||jN(n)||o}const FN=async function(n){const s=this.getOffsetParent||jh,o=this.getDimensions,l=await o(n.floating);return{reference:$N(n.reference,await s(n.floating),n.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function VN(n){return tn(n).direction==="rtl"}const HN={convertOffsetParentRelativeRectToViewportRelativeRect:_N,getDocumentElement:gn,getClippingRect:BN,getOffsetParent:jh,getElementRects:FN,getClientRects:RN,getDimensions:zN,getScale:mo,isElement:en,isRTL:VN};function Th(n,s){return n.x===s.x&&n.y===s.y&&n.width===s.width&&n.height===s.height}function WN(n,s){let o=null,l;const c=gn(n);function d(){var p;clearTimeout(l),(p=o)==null||p.disconnect(),o=null}function f(p,h){p===void 0&&(p=!1),h===void 0&&(h=1),d();const g=n.getBoundingClientRect(),{left:w,top:v,width:N,height:k}=g;if(p||s(),!N||!k)return;const T=Ui(v),b=Ui(c.clientWidth-(w+N)),C=Ui(c.clientHeight-(v+k)),I=Ui(w),j={rootMargin:-T+"px "+-b+"px "+-C+"px "+-I+"px",threshold:At(0,ir(1,h))||1};let M=!0;function $(z){const L=z[0].intersectionRatio;if(L!==h){if(!M)return f();L?f(!1,L):l=setTimeout(()=>{f(!1,1e-7)},1e3)}L===1&&!Th(g,n.getBoundingClientRect())&&f(),M=!1}try{o=new IntersectionObserver($,{...j,root:c.ownerDocument})}catch{o=new IntersectionObserver($,j)}o.observe(n)}return f(!0),d}function UN(n,s,o,l){l===void 0&&(l={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:h=!1}=l,g=eu(n),w=c||d?[...g?bs(g):[],...bs(s)]:[];w.forEach(I=>{c&&I.addEventListener("scroll",o,{passive:!0}),d&&I.addEventListener("resize",o)});const v=g&&p?WN(g,o):null;let N=-1,k=null;f&&(k=new ResizeObserver(I=>{let[S]=I;S&&S.target===g&&k&&(k.unobserve(s),cancelAnimationFrame(N),N=requestAnimationFrame(()=>{var j;(j=k)==null||j.observe(s)})),o()}),g&&!h&&k.observe(g),k.observe(s));let T,b=h?Rr(n):null;h&&C();function C(){const I=Rr(n);b&&!Th(b,I)&&o(),b=I,T=requestAnimationFrame(C)}return o(),()=>{var I;w.forEach(S=>{c&&S.removeEventListener("scroll",o),d&&S.removeEventListener("resize",o)}),v?.(),(I=k)==null||I.disconnect(),k=null,h&&cancelAnimationFrame(T)}}const GN=gN,YN=vN,qN=pN,QN=xN,KN=mN,Ip=fN,XN=yN,ZN=(n,s,o)=>{const l=new Map,c={platform:HN,...o},d={...c.platform,_c:l};return dN(n,s,{...c,platform:d})};var JN=typeof document<"u",e2=function(){},Qi=JN?y.useLayoutEffect:e2;function ra(n,s){if(n===s)return!0;if(typeof n!=typeof s)return!1;if(typeof n=="function"&&n.toString()===s.toString())return!0;let o,l,c;if(n&&s&&typeof n=="object"){if(Array.isArray(n)){if(o=n.length,o!==s.length)return!1;for(l=o;l--!==0;)if(!ra(n[l],s[l]))return!1;return!0}if(c=Object.keys(n),o=c.length,o!==Object.keys(s).length)return!1;for(l=o;l--!==0;)if(!{}.hasOwnProperty.call(s,c[l]))return!1;for(l=o;l--!==0;){const d=c[l];if(!(d==="_owner"&&n.$$typeof)&&!ra(n[d],s[d]))return!1}return!0}return n!==n&&s!==s}function Ih(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function Pp(n,s){const o=Ih(n);return Math.round(s*o)/o}function mc(n){const s=y.useRef(n);return Qi(()=>{s.current=n}),s}function t2(n){n===void 0&&(n={});const{placement:s="bottom",strategy:o="absolute",middleware:l=[],platform:c,elements:{reference:d,floating:f}={},transform:p=!0,whileElementsMounted:h,open:g}=n,[w,v]=y.useState({x:0,y:0,strategy:o,placement:s,middlewareData:{},isPositioned:!1}),[N,k]=y.useState(l);ra(N,l)||k(l);const[T,b]=y.useState(null),[C,I]=y.useState(null),S=y.useCallback(A=>{A!==z.current&&(z.current=A,b(A))},[]),j=y.useCallback(A=>{A!==L.current&&(L.current=A,I(A))},[]),M=d||T,$=f||C,z=y.useRef(null),L=y.useRef(null),F=y.useRef(w),oe=h!=null,ae=mc(h),be=mc(c),le=mc(g),ce=y.useCallback(()=>{if(!z.current||!L.current)return;const A={placement:s,strategy:o,middleware:N};be.current&&(A.platform=be.current),ZN(z.current,L.current,A).then(Z=>{const Y={...Z,isPositioned:le.current!==!1};ge.current&&!ra(F.current,Y)&&(F.current=Y,Ns.flushSync(()=>{v(Y)}))})},[N,s,o,be,le]);Qi(()=>{g===!1&&F.current.isPositioned&&(F.current.isPositioned=!1,v(A=>({...A,isPositioned:!1})))},[g]);const ge=y.useRef(!1);Qi(()=>(ge.current=!0,()=>{ge.current=!1}),[]),Qi(()=>{if(M&&(z.current=M),$&&(L.current=$),M&&$){if(ae.current)return ae.current(M,$,ce);ce()}},[M,$,ce,ae,oe]);const re=y.useMemo(()=>({reference:z,floating:L,setReference:S,setFloating:j}),[S,j]),X=y.useMemo(()=>({reference:M,floating:$}),[M,$]),ne=y.useMemo(()=>{const A={position:o,left:0,top:0};if(!X.floating)return A;const Z=Pp(X.floating,w.x),Y=Pp(X.floating,w.y);return p?{...A,transform:"translate("+Z+"px, "+Y+"px)",...Ih(X.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:Z,top:Y}},[o,p,X.floating,w.x,w.y]);return y.useMemo(()=>({...w,update:ce,refs:re,elements:X,floatingStyles:ne}),[w,ce,re,X,ne])}const n2=n=>{function s(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:n,fn(o){const{element:l,padding:c}=typeof n=="function"?n(o):n;return l&&s(l)?l.current!=null?Ip({element:l.current,padding:c}).fn(o):{}:l?Ip({element:l,padding:c}).fn(o):{}}}},r2=(n,s)=>({...GN(n),options:[n,s]}),o2=(n,s)=>({...YN(n),options:[n,s]}),s2=(n,s)=>({...XN(n),options:[n,s]}),i2=(n,s)=>({...qN(n),options:[n,s]}),a2=(n,s)=>({...QN(n),options:[n,s]}),l2=(n,s)=>({...KN(n),options:[n,s]}),c2=(n,s)=>({...n2(n),options:[n,s]});var u2="Arrow",Ph=y.forwardRef((n,s)=>{const{children:o,width:l=10,height:c=5,...d}=n;return a.jsx(Pe.svg,{...d,ref:s,width:l,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?o:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ph.displayName=u2;var d2=Ph,tu="Popper",[_h,Rh]=No(tu),[f2,Ah]=_h(tu),Mh=n=>{const{__scopePopper:s,children:o}=n,[l,c]=y.useState(null);return a.jsx(f2,{scope:s,anchor:l,onAnchorChange:c,children:o})};Mh.displayName=tu;var Oh="PopperAnchor",Dh=y.forwardRef((n,s)=>{const{__scopePopper:o,virtualRef:l,...c}=n,d=Ah(Oh,o),f=y.useRef(null),p=Be(s,f),h=y.useRef(null);return y.useEffect(()=>{const g=h.current;h.current=l?.current||f.current,g!==h.current&&d.onAnchorChange(h.current)}),l?null:a.jsx(Pe.div,{...c,ref:p})});Dh.displayName=Oh;var nu="PopperContent",[p2,m2]=_h(nu),Lh=y.forwardRef((n,s)=>{const{__scopePopper:o,side:l="bottom",sideOffset:c=0,align:d="center",alignOffset:f=0,arrowPadding:p=0,avoidCollisions:h=!0,collisionBoundary:g=[],collisionPadding:w=0,sticky:v="partial",hideWhenDetached:N=!1,updatePositionStrategy:k="optimized",onPlaced:T,...b}=n,C=Ah(nu,o),[I,S]=y.useState(null),j=Be(s,W=>S(W)),[M,$]=y.useState(null),z=uh(M),L=z?.width??0,F=z?.height??0,oe=l+(d!=="center"?"-"+d:""),ae=typeof w=="number"?w:{top:0,right:0,bottom:0,left:0,...w},be=Array.isArray(g)?g:[g],le=be.length>0,ce={padding:ae,boundary:be.filter(g2),altBoundary:le},{refs:ge,floatingStyles:re,placement:X,isPositioned:ne,middlewareData:A}=t2({strategy:"fixed",placement:oe,whileElementsMounted:(...W)=>UN(...W,{animationFrame:k==="always"}),elements:{reference:C.anchor},middleware:[r2({mainAxis:c+F,alignmentAxis:f}),h&&o2({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?s2():void 0,...ce}),h&&i2({...ce}),a2({...ce,apply:({elements:W,rects:H,availableWidth:te,availableHeight:ue})=>{const{width:Ne,height:Se}=H.reference,Fe=W.floating.style;Fe.setProperty("--radix-popper-available-width",`${te}px`),Fe.setProperty("--radix-popper-available-height",`${ue}px`),Fe.setProperty("--radix-popper-anchor-width",`${Ne}px`),Fe.setProperty("--radix-popper-anchor-height",`${Se}px`)}}),M&&c2({element:M,padding:p}),v2({arrowWidth:L,arrowHeight:F}),N&&l2({strategy:"referenceHidden",...ce})]}),[Z,Y]=$h(X),R=Pr(T);dt(()=>{ne&&R?.()},[ne,R]);const V=A.arrow?.x,q=A.arrow?.y,K=A.arrow?.centerOffset!==0,[se,de]=y.useState();return dt(()=>{I&&de(window.getComputedStyle(I).zIndex)},[I]),a.jsx("div",{ref:ge.setFloating,"data-radix-popper-content-wrapper":"",style:{...re,transform:ne?re.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:se,"--radix-popper-transform-origin":[A.transformOrigin?.x,A.transformOrigin?.y].join(" "),...A.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:a.jsx(p2,{scope:o,placedSide:Z,onArrowChange:$,arrowX:V,arrowY:q,shouldHideArrow:K,children:a.jsx(Pe.div,{"data-side":Z,"data-align":Y,...b,ref:j,style:{...b.style,animation:ne?void 0:"none"}})})})});Lh.displayName=nu;var Bh="PopperArrow",h2={top:"bottom",right:"left",bottom:"top",left:"right"},zh=y.forwardRef(function(s,o){const{__scopePopper:l,...c}=s,d=m2(Bh,l),f=h2[d.placedSide];return a.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:a.jsx(d2,{...c,ref:o,style:{...c.style,display:"block"}})})});zh.displayName=Bh;function g2(n){return n!==null}var v2=n=>({name:"transformOrigin",options:n,fn(s){const{placement:o,rects:l,middlewareData:c}=s,f=c.arrow?.centerOffset!==0,p=f?0:n.arrowWidth,h=f?0:n.arrowHeight,[g,w]=$h(o),v={start:"0%",center:"50%",end:"100%"}[w],N=(c.arrow?.x??0)+p/2,k=(c.arrow?.y??0)+h/2;let T="",b="";return g==="bottom"?(T=f?v:`${N}px`,b=`${-h}px`):g==="top"?(T=f?v:`${N}px`,b=`${l.floating.height+h}px`):g==="right"?(T=`${-h}px`,b=f?v:`${k}px`):g==="left"&&(T=`${l.floating.width+h}px`,b=f?v:`${k}px`),{data:{x:T,y:b}}}});function $h(n){const[s,o="center"]=n.split("-");return[s,o]}var y2=Mh,x2=Dh,w2=Lh,b2=zh;function N2(n){const s=k2(n),o=y.forwardRef((l,c)=>{const{children:d,...f}=l,p=y.Children.toArray(d),h=p.find(S2);if(h){const g=h.props.children,w=p.map(v=>v===h?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:v);return a.jsx(s,{...f,ref:c,children:y.isValidElement(g)?y.cloneElement(g,void 0,w):null})}return a.jsx(s,{...f,ref:c,children:d})});return o.displayName=`${n}.Slot`,o}function k2(n){const s=y.forwardRef((o,l)=>{const{children:c,...d}=o;if(y.isValidElement(c)){const f=j2(c),p=E2(d,c.props);return c.type!==y.Fragment&&(p.ref=l?ko(l,f):f),y.cloneElement(c,p)}return y.Children.count(c)>1?y.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var C2=Symbol("radix.slottable");function S2(n){return y.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===C2}function E2(n,s){const o={...s};for(const l in s){const c=n[l],d=s[l];/^on[A-Z]/.test(l)?c&&d?o[l]=(...p)=>{const h=d(...p);return c(...p),h}:c&&(o[l]=c):l==="style"?o[l]={...c,...d}:l==="className"&&(o[l]=[c,d].filter(Boolean).join(" "))}return{...n,...o}}function j2(n){let s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning;return o?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,o=s&&"isReactWarning"in s&&s.isReactWarning,o?n.props.ref:n.props.ref||n.ref)}var Fh=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),T2="VisuallyHidden",I2=y.forwardRef((n,s)=>a.jsx(Pe.span,{...n,ref:s,style:{...Fh,...n.style}}));I2.displayName=T2;var P2=[" ","Enter","ArrowUp","ArrowDown"],_2=[" ","Enter"],Ar="Select",[ma,ha,R2]=Xb(Ar),[jo]=No(Ar,[R2,Rh]),ga=Rh(),[A2,lr]=jo(Ar),[M2,O2]=jo(Ar),Vh=n=>{const{__scopeSelect:s,children:o,open:l,defaultOpen:c,onOpenChange:d,value:f,defaultValue:p,onValueChange:h,dir:g,name:w,autoComplete:v,disabled:N,required:k,form:T}=n,b=ga(s),[C,I]=y.useState(null),[S,j]=y.useState(null),[M,$]=y.useState(!1),z=Jb(g),[L,F]=xs({prop:l,defaultProp:c??!1,onChange:d,caller:Ar}),[oe,ae]=xs({prop:f,defaultProp:p,onChange:h,caller:Ar}),be=y.useRef(null),le=C?T||!!C.closest("form"):!0,[ce,ge]=y.useState(new Set),re=Array.from(ce).map(X=>X.props.value).join(";");return a.jsx(y2,{...b,children:a.jsxs(A2,{required:k,scope:s,trigger:C,onTriggerChange:I,valueNode:S,onValueNodeChange:j,valueNodeHasChildren:M,onValueNodeHasChildrenChange:$,contentId:Tr(),value:oe,onValueChange:ae,open:L,onOpenChange:F,dir:z,triggerPointerDownPosRef:be,disabled:N,children:[a.jsx(ma.Provider,{scope:s,children:a.jsx(M2,{scope:n.__scopeSelect,onNativeOptionAdd:y.useCallback(X=>{ge(ne=>new Set(ne).add(X))},[]),onNativeOptionRemove:y.useCallback(X=>{ge(ne=>{const A=new Set(ne);return A.delete(X),A})},[]),children:o})}),le?a.jsxs(ug,{"aria-hidden":!0,required:k,tabIndex:-1,name:w,autoComplete:v,value:oe,onChange:X=>ae(X.target.value),disabled:N,form:T,children:[oe===void 0?a.jsx("option",{value:""}):null,Array.from(ce)]},re):null]})})};Vh.displayName=Ar;var Hh="SelectTrigger",Wh=y.forwardRef((n,s)=>{const{__scopeSelect:o,disabled:l=!1,...c}=n,d=ga(o),f=lr(Hh,o),p=f.disabled||l,h=Be(s,f.onTriggerChange),g=ha(o),w=y.useRef("touch"),[v,N,k]=fg(b=>{const C=g().filter(j=>!j.disabled),I=C.find(j=>j.value===f.value),S=pg(C,b,I);S!==void 0&&f.onValueChange(S.value)}),T=b=>{p||(f.onOpenChange(!0),k()),b&&(f.triggerPointerDownPosRef.current={x:Math.round(b.pageX),y:Math.round(b.pageY)})};return a.jsx(x2,{asChild:!0,...d,children:a.jsx(Pe.button,{type:"button",role:"combobox","aria-controls":f.contentId,"aria-expanded":f.open,"aria-required":f.required,"aria-autocomplete":"none",dir:f.dir,"data-state":f.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":dg(f.value)?"":void 0,...c,ref:h,onClick:Re(c.onClick,b=>{b.currentTarget.focus(),w.current!=="mouse"&&T(b)}),onPointerDown:Re(c.onPointerDown,b=>{w.current=b.pointerType;const C=b.target;C.hasPointerCapture(b.pointerId)&&C.releasePointerCapture(b.pointerId),b.button===0&&b.ctrlKey===!1&&b.pointerType==="mouse"&&(T(b),b.preventDefault())}),onKeyDown:Re(c.onKeyDown,b=>{const C=v.current!=="";!(b.ctrlKey||b.altKey||b.metaKey)&&b.key.length===1&&N(b.key),!(C&&b.key===" ")&&P2.includes(b.key)&&(T(),b.preventDefault())})})})});Wh.displayName=Hh;var Uh="SelectValue",Gh=y.forwardRef((n,s)=>{const{__scopeSelect:o,className:l,style:c,children:d,placeholder:f="",...p}=n,h=lr(Uh,o),{onValueNodeHasChildrenChange:g}=h,w=d!==void 0,v=Be(s,h.onValueNodeChange);return dt(()=>{g(w)},[g,w]),a.jsx(Pe.span,{...p,ref:v,style:{pointerEvents:"none"},children:dg(h.value)?a.jsx(a.Fragment,{children:f}):d})});Gh.displayName=Uh;var D2="SelectIcon",Yh=y.forwardRef((n,s)=>{const{__scopeSelect:o,children:l,...c}=n;return a.jsx(Pe.span,{"aria-hidden":!0,...c,ref:s,children:l||"▼"})});Yh.displayName=D2;var L2="SelectPortal",qh=n=>a.jsx(Hc,{asChild:!0,...n});qh.displayName=L2;var Mr="SelectContent",Qh=y.forwardRef((n,s)=>{const o=lr(Mr,n.__scopeSelect),[l,c]=y.useState();if(dt(()=>{c(new DocumentFragment)},[]),!o.open){const d=l;return d?Ns.createPortal(a.jsx(Kh,{scope:n.__scopeSelect,children:a.jsx(ma.Slot,{scope:n.__scopeSelect,children:a.jsx("div",{children:n.children})})}),d):null}return a.jsx(Xh,{...n,ref:s})});Qh.displayName=Mr;var Jt=10,[Kh,cr]=jo(Mr),B2="SelectContentImpl",z2=N2("SelectContent.RemoveScroll"),Xh=y.forwardRef((n,s)=>{const{__scopeSelect:o,position:l="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:f,side:p,sideOffset:h,align:g,alignOffset:w,arrowPadding:v,collisionBoundary:N,collisionPadding:k,sticky:T,hideWhenDetached:b,avoidCollisions:C,...I}=n,S=lr(Mr,o),[j,M]=y.useState(null),[$,z]=y.useState(null),L=Be(s,W=>M(W)),[F,oe]=y.useState(null),[ae,be]=y.useState(null),le=ha(o),[ce,ge]=y.useState(!1),re=y.useRef(!1);y.useEffect(()=>{if(j)return jm(j)},[j]),ym();const X=y.useCallback(W=>{const[H,...te]=le().map(Se=>Se.ref.current),[ue]=te.slice(-1),Ne=document.activeElement;for(const Se of W)if(Se===Ne||(Se?.scrollIntoView({block:"nearest"}),Se===H&&$&&($.scrollTop=0),Se===ue&&$&&($.scrollTop=$.scrollHeight),Se?.focus(),document.activeElement!==Ne))return},[le,$]),ne=y.useCallback(()=>X([F,j]),[X,F,j]);y.useEffect(()=>{ce&&ne()},[ce,ne]);const{onOpenChange:A,triggerPointerDownPosRef:Z}=S;y.useEffect(()=>{if(j){let W={x:0,y:0};const H=ue=>{W={x:Math.abs(Math.round(ue.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(ue.pageY)-(Z.current?.y??0))}},te=ue=>{W.x<=10&&W.y<=10?ue.preventDefault():j.contains(ue.target)||A(!1),document.removeEventListener("pointermove",H),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",H),document.addEventListener("pointerup",te,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",H),document.removeEventListener("pointerup",te,{capture:!0})}}},[j,A,Z]),y.useEffect(()=>{const W=()=>A(!1);return window.addEventListener("blur",W),window.addEventListener("resize",W),()=>{window.removeEventListener("blur",W),window.removeEventListener("resize",W)}},[A]);const[Y,R]=fg(W=>{const H=le().filter(Ne=>!Ne.disabled),te=H.find(Ne=>Ne.ref.current===document.activeElement),ue=pg(H,W,te);ue&&setTimeout(()=>ue.ref.current.focus())}),V=y.useCallback((W,H,te)=>{const ue=!re.current&&!te;(S.value!==void 0&&S.value===H||ue)&&(oe(W),ue&&(re.current=!0))},[S.value]),q=y.useCallback(()=>j?.focus(),[j]),K=y.useCallback((W,H,te)=>{const ue=!re.current&&!te;(S.value!==void 0&&S.value===H||ue)&&be(W)},[S.value]),se=l==="popper"?Sc:Zh,de=se===Sc?{side:p,sideOffset:h,align:g,alignOffset:w,arrowPadding:v,collisionBoundary:N,collisionPadding:k,sticky:T,hideWhenDetached:b,avoidCollisions:C}:{};return a.jsx(Kh,{scope:o,content:j,viewport:$,onViewportChange:z,itemRefCallback:V,selectedItem:F,onItemLeave:q,itemTextRefCallback:K,focusSelectedItem:ne,selectedItemText:ae,position:l,isPositioned:ce,searchRef:Y,children:a.jsx(Wc,{as:z2,allowPinchZoom:!0,children:a.jsx(Vc,{asChild:!0,trapped:S.open,onMountAutoFocus:W=>{W.preventDefault()},onUnmountAutoFocus:Re(c,W=>{S.trigger?.focus({preventScroll:!0}),W.preventDefault()}),children:a.jsx(Fc,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:W=>W.preventDefault(),onDismiss:()=>S.onOpenChange(!1),children:a.jsx(se,{role:"listbox",id:S.contentId,"data-state":S.open?"open":"closed",dir:S.dir,onContextMenu:W=>W.preventDefault(),...I,...de,onPlaced:()=>ge(!0),ref:L,style:{display:"flex",flexDirection:"column",outline:"none",...I.style},onKeyDown:Re(I.onKeyDown,W=>{const H=W.ctrlKey||W.altKey||W.metaKey;if(W.key==="Tab"&&W.preventDefault(),!H&&W.key.length===1&&R(W.key),["ArrowUp","ArrowDown","Home","End"].includes(W.key)){let ue=le().filter(Ne=>!Ne.disabled).map(Ne=>Ne.ref.current);if(["ArrowUp","End"].includes(W.key)&&(ue=ue.slice().reverse()),["ArrowUp","ArrowDown"].includes(W.key)){const Ne=W.target,Se=ue.indexOf(Ne);ue=ue.slice(Se+1)}setTimeout(()=>X(ue)),W.preventDefault()}})})})})})})});Xh.displayName=B2;var $2="SelectItemAlignedPosition",Zh=y.forwardRef((n,s)=>{const{__scopeSelect:o,onPlaced:l,...c}=n,d=lr(Mr,o),f=cr(Mr,o),[p,h]=y.useState(null),[g,w]=y.useState(null),v=Be(s,L=>w(L)),N=ha(o),k=y.useRef(!1),T=y.useRef(!0),{viewport:b,selectedItem:C,selectedItemText:I,focusSelectedItem:S}=f,j=y.useCallback(()=>{if(d.trigger&&d.valueNode&&p&&g&&b&&C&&I){const L=d.trigger.getBoundingClientRect(),F=g.getBoundingClientRect(),oe=d.valueNode.getBoundingClientRect(),ae=I.getBoundingClientRect();if(d.dir!=="rtl"){const Ne=ae.left-F.left,Se=oe.left-Ne,Fe=L.left-Se,et=L.width+Fe,Wt=Math.max(et,F.width),Ut=window.innerWidth-Jt,it=yp(Se,[Jt,Math.max(Jt,Ut-Wt)]);p.style.minWidth=et+"px",p.style.left=it+"px"}else{const Ne=F.right-ae.right,Se=window.innerWidth-oe.right-Ne,Fe=window.innerWidth-L.right-Se,et=L.width+Fe,Wt=Math.max(et,F.width),Ut=window.innerWidth-Jt,it=yp(Se,[Jt,Math.max(Jt,Ut-Wt)]);p.style.minWidth=et+"px",p.style.right=it+"px"}const be=N(),le=window.innerHeight-Jt*2,ce=b.scrollHeight,ge=window.getComputedStyle(g),re=parseInt(ge.borderTopWidth,10),X=parseInt(ge.paddingTop,10),ne=parseInt(ge.borderBottomWidth,10),A=parseInt(ge.paddingBottom,10),Z=re+X+ce+A+ne,Y=Math.min(C.offsetHeight*5,Z),R=window.getComputedStyle(b),V=parseInt(R.paddingTop,10),q=parseInt(R.paddingBottom,10),K=L.top+L.height/2-Jt,se=le-K,de=C.offsetHeight/2,W=C.offsetTop+de,H=re+X+W,te=Z-H;if(H<=K){const Ne=be.length>0&&C===be[be.length-1].ref.current;p.style.bottom="0px";const Se=g.clientHeight-b.offsetTop-b.offsetHeight,Fe=Math.max(se,de+(Ne?q:0)+Se+ne),et=H+Fe;p.style.height=et+"px"}else{const Ne=be.length>0&&C===be[0].ref.current;p.style.top="0px";const Fe=Math.max(K,re+b.offsetTop+(Ne?V:0)+de)+te;p.style.height=Fe+"px",b.scrollTop=H-K+b.offsetTop}p.style.margin=`${Jt}px 0`,p.style.minHeight=Y+"px",p.style.maxHeight=le+"px",l?.(),requestAnimationFrame(()=>k.current=!0)}},[N,d.trigger,d.valueNode,p,g,b,C,I,d.dir,l]);dt(()=>j(),[j]);const[M,$]=y.useState();dt(()=>{g&&$(window.getComputedStyle(g).zIndex)},[g]);const z=y.useCallback(L=>{L&&T.current===!0&&(j(),S?.(),T.current=!1)},[j,S]);return a.jsx(V2,{scope:o,contentWrapper:p,shouldExpandOnScrollRef:k,onScrollButtonChange:z,children:a.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:M},children:a.jsx(Pe.div,{...c,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});Zh.displayName=$2;var F2="SelectPopperPosition",Sc=y.forwardRef((n,s)=>{const{__scopeSelect:o,align:l="start",collisionPadding:c=Jt,...d}=n,f=ga(o);return a.jsx(w2,{...f,...d,ref:s,align:l,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Sc.displayName=F2;var[V2,ru]=jo(Mr,{}),Ec="SelectViewport",Jh=y.forwardRef((n,s)=>{const{__scopeSelect:o,nonce:l,...c}=n,d=cr(Ec,o),f=ru(Ec,o),p=Be(s,d.onViewportChange),h=y.useRef(0);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),a.jsx(ma.Slot,{scope:o,children:a.jsx(Pe.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:Re(c.onScroll,g=>{const w=g.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:N}=f;if(N?.current&&v){const k=Math.abs(h.current-w.scrollTop);if(k>0){const T=window.innerHeight-Jt*2,b=parseFloat(v.style.minHeight),C=parseFloat(v.style.height),I=Math.max(b,C);if(I<T){const S=I+k,j=Math.min(T,S),M=S-j;v.style.height=j+"px",v.style.bottom==="0px"&&(w.scrollTop=M>0?M:0,v.style.justifyContent="flex-end")}}}h.current=w.scrollTop})})})]})});Jh.displayName=Ec;var eg="SelectGroup",[H2,W2]=jo(eg),U2=y.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n,c=Tr();return a.jsx(H2,{scope:o,id:c,children:a.jsx(Pe.div,{role:"group","aria-labelledby":c,...l,ref:s})})});U2.displayName=eg;var tg="SelectLabel",G2=y.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n,c=W2(tg,o);return a.jsx(Pe.div,{id:c.id,...l,ref:s})});G2.displayName=tg;var oa="SelectItem",[Y2,ng]=jo(oa),rg=y.forwardRef((n,s)=>{const{__scopeSelect:o,value:l,disabled:c=!1,textValue:d,...f}=n,p=lr(oa,o),h=cr(oa,o),g=p.value===l,[w,v]=y.useState(d??""),[N,k]=y.useState(!1),T=Be(s,S=>h.itemRefCallback?.(S,l,c)),b=Tr(),C=y.useRef("touch"),I=()=>{c||(p.onValueChange(l),p.onOpenChange(!1))};if(l==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return a.jsx(Y2,{scope:o,value:l,disabled:c,textId:b,isSelected:g,onItemTextChange:y.useCallback(S=>{v(j=>j||(S?.textContent??"").trim())},[]),children:a.jsx(ma.ItemSlot,{scope:o,value:l,disabled:c,textValue:w,children:a.jsx(Pe.div,{role:"option","aria-labelledby":b,"data-highlighted":N?"":void 0,"aria-selected":g&&N,"data-state":g?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...f,ref:T,onFocus:Re(f.onFocus,()=>k(!0)),onBlur:Re(f.onBlur,()=>k(!1)),onClick:Re(f.onClick,()=>{C.current!=="mouse"&&I()}),onPointerUp:Re(f.onPointerUp,()=>{C.current==="mouse"&&I()}),onPointerDown:Re(f.onPointerDown,S=>{C.current=S.pointerType}),onPointerMove:Re(f.onPointerMove,S=>{C.current=S.pointerType,c?h.onItemLeave?.():C.current==="mouse"&&S.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Re(f.onPointerLeave,S=>{S.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:Re(f.onKeyDown,S=>{h.searchRef?.current!==""&&S.key===" "||(_2.includes(S.key)&&I(),S.key===" "&&S.preventDefault())})})})})});rg.displayName=oa;var gs="SelectItemText",og=y.forwardRef((n,s)=>{const{__scopeSelect:o,className:l,style:c,...d}=n,f=lr(gs,o),p=cr(gs,o),h=ng(gs,o),g=O2(gs,o),[w,v]=y.useState(null),N=Be(s,I=>v(I),h.onItemTextChange,I=>p.itemTextRefCallback?.(I,h.value,h.disabled)),k=w?.textContent,T=y.useMemo(()=>a.jsx("option",{value:h.value,disabled:h.disabled,children:k},h.value),[h.disabled,h.value,k]),{onNativeOptionAdd:b,onNativeOptionRemove:C}=g;return dt(()=>(b(T),()=>C(T)),[b,C,T]),a.jsxs(a.Fragment,{children:[a.jsx(Pe.span,{id:h.textId,...d,ref:N}),h.isSelected&&f.valueNode&&!f.valueNodeHasChildren?Ns.createPortal(d.children,f.valueNode):null]})});og.displayName=gs;var sg="SelectItemIndicator",ig=y.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n;return ng(sg,o).isSelected?a.jsx(Pe.span,{"aria-hidden":!0,...l,ref:s}):null});ig.displayName=sg;var jc="SelectScrollUpButton",ag=y.forwardRef((n,s)=>{const o=cr(jc,n.__scopeSelect),l=ru(jc,n.__scopeSelect),[c,d]=y.useState(!1),f=Be(s,l.onScrollButtonChange);return dt(()=>{if(o.viewport&&o.isPositioned){let p=function(){const g=h.scrollTop>0;d(g)};const h=o.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[o.viewport,o.isPositioned]),c?a.jsx(cg,{...n,ref:f,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=o;p&&h&&(p.scrollTop=p.scrollTop-h.offsetHeight)}}):null});ag.displayName=jc;var Tc="SelectScrollDownButton",lg=y.forwardRef((n,s)=>{const o=cr(Tc,n.__scopeSelect),l=ru(Tc,n.__scopeSelect),[c,d]=y.useState(!1),f=Be(s,l.onScrollButtonChange);return dt(()=>{if(o.viewport&&o.isPositioned){let p=function(){const g=h.scrollHeight-h.clientHeight,w=Math.ceil(h.scrollTop)<g;d(w)};const h=o.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[o.viewport,o.isPositioned]),c?a.jsx(cg,{...n,ref:f,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=o;p&&h&&(p.scrollTop=p.scrollTop+h.offsetHeight)}}):null});lg.displayName=Tc;var cg=y.forwardRef((n,s)=>{const{__scopeSelect:o,onAutoScroll:l,...c}=n,d=cr("SelectScrollButton",o),f=y.useRef(null),p=ha(o),h=y.useCallback(()=>{f.current!==null&&(window.clearInterval(f.current),f.current=null)},[]);return y.useEffect(()=>()=>h(),[h]),dt(()=>{p().find(w=>w.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[p]),a.jsx(Pe.div,{"aria-hidden":!0,...c,ref:s,style:{flexShrink:0,...c.style},onPointerDown:Re(c.onPointerDown,()=>{f.current===null&&(f.current=window.setInterval(l,50))}),onPointerMove:Re(c.onPointerMove,()=>{d.onItemLeave?.(),f.current===null&&(f.current=window.setInterval(l,50))}),onPointerLeave:Re(c.onPointerLeave,()=>{h()})})}),q2="SelectSeparator",Q2=y.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n;return a.jsx(Pe.div,{"aria-hidden":!0,...l,ref:s})});Q2.displayName=q2;var Ic="SelectArrow",K2=y.forwardRef((n,s)=>{const{__scopeSelect:o,...l}=n,c=ga(o),d=lr(Ic,o),f=cr(Ic,o);return d.open&&f.position==="popper"?a.jsx(b2,{...c,...l,ref:s}):null});K2.displayName=Ic;var X2="SelectBubbleInput",ug=y.forwardRef(({__scopeSelect:n,value:s,...o},l)=>{const c=y.useRef(null),d=Be(l,c),f=ch(s);return y.useEffect(()=>{const p=c.current;if(!p)return;const h=window.HTMLSelectElement.prototype,w=Object.getOwnPropertyDescriptor(h,"value").set;if(f!==s&&w){const v=new Event("change",{bubbles:!0});w.call(p,s),p.dispatchEvent(v)}},[f,s]),a.jsx(Pe.select,{...o,style:{...Fh,...o.style},ref:d,defaultValue:s})});ug.displayName=X2;function dg(n){return n===""||n===void 0}function fg(n){const s=Pr(n),o=y.useRef(""),l=y.useRef(0),c=y.useCallback(f=>{const p=o.current+f;s(p),(function h(g){o.current=g,window.clearTimeout(l.current),g!==""&&(l.current=window.setTimeout(()=>h(""),1e3))})(p)},[s]),d=y.useCallback(()=>{o.current="",window.clearTimeout(l.current)},[]);return y.useEffect(()=>()=>window.clearTimeout(l.current),[]),[o,c,d]}function pg(n,s,o){const c=s.length>1&&Array.from(s).every(g=>g===s[0])?s[0]:s,d=o?n.indexOf(o):-1;let f=Z2(n,Math.max(d,0));c.length===1&&(f=f.filter(g=>g!==o));const h=f.find(g=>g.textValue.toLowerCase().startsWith(c.toLowerCase()));return h!==o?h:void 0}function Z2(n,s){return n.map((o,l)=>n[(s+l)%n.length])}var J2=Vh,ek=Wh,tk=Gh,nk=Yh,rk=qh,ok=Qh,sk=Jh,ik=rg,ak=og,lk=ig,ck=ag,uk=lg;function dk({...n}){return a.jsx(J2,{"data-slot":"select",...n})}function fk({...n}){return a.jsx(tk,{"data-slot":"select-value",...n})}function pk({className:n,size:s="default",children:o,...l}){return a.jsxs(ek,{"data-slot":"select-trigger","data-size":s,className:Qe("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...l,children:[o,a.jsx(nk,{asChild:!0,children:a.jsx(ho,{className:"size-4 opacity-50"})})]})}function mk({className:n,children:s,position:o="popper",...l}){return a.jsx(rk,{children:a.jsxs(ok,{"data-slot":"select-content",className:Qe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",o==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:o,...l,children:[a.jsx(hk,{}),a.jsx(sk,{className:Qe("p-1",o==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:s}),a.jsx(gk,{})]})})}function hs({className:n,children:s,...o}){return a.jsxs(ik,{"data-slot":"select-item",className:Qe("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...o,children:[a.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:a.jsx(lk,{children:a.jsx(Mc,{className:"size-4"})})}),a.jsx(ak,{children:s})]})}function hk({className:n,...s}){return a.jsx(ck,{"data-slot":"select-scroll-up-button",className:Qe("flex cursor-default items-center justify-center py-1",n),...s,children:a.jsx(_y,{className:"size-4"})})}function gk({className:n,...s}){return a.jsx(uk,{"data-slot":"select-scroll-down-button",className:Qe("flex cursor-default items-center justify-center py-1",n),...s,children:a.jsx(ho,{className:"size-4"})})}const vk=({isOpen:n,onClose:s,locale:o="tc",isMobile:l=!1})=>{const c=Ge(o),[d,f]=y.useState({companyName:"",companyWebsite:"",contactName:"",jobTitle:"",email:"",phone:"",currentTool:"",currentToolOther:"",eventsPerQuarter:"",guestListSize:"",integrationNeeds:[],consent:!1}),[p,h]=y.useState({}),[g,w]=y.useState(!1);y.useEffect(()=>{n&&(f({companyName:"",companyWebsite:"",contactName:"",jobTitle:"",email:"",phone:"",currentTool:"",currentToolOther:"",eventsPerQuarter:"",guestListSize:"",integrationNeeds:[],consent:!1}),h({}))},[n]);const v=C=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C),N=()=>{const C={};return d.companyName.trim()||(C.companyName=c.enterpriseInquiry.required),d.contactName.trim()||(C.contactName=c.enterpriseInquiry.required),d.jobTitle.trim()||(C.jobTitle=c.enterpriseInquiry.required),d.email.trim()?v(d.email)||(C.email=c.enterpriseInquiry.invalidEmail):C.email=c.enterpriseInquiry.required,d.phone.trim()||(C.phone=c.enterpriseInquiry.required),d.currentTool||(C.currentTool=c.enterpriseInquiry.selectOption),d.currentTool==="other"&&!d.currentToolOther.trim()&&(C.currentToolOther=c.enterpriseInquiry.enterDescription),d.consent||(C.consent=c.enterpriseInquiry.consentError),h(C),Object.keys(C).length===0},k=async C=>{C.preventDefault(),N()&&(w(!0),setTimeout(()=>{let I="";d.currentTool==="other"?I=`${c.enterpriseInquiry.currentToolOptions.other}：${d.currentToolOther}`:I={spreadsheet:c.enterpriseInquiry.currentToolOptions.spreadsheet,crm:c.enterpriseInquiry.currentToolOptions.crm,selfBuilt:c.enterpriseInquiry.currentToolOptions.selfBuilt,none:c.enterpriseInquiry.currentToolOptions.none}[d.currentTool]||d.currentTool;const S=`INVITI 企業方案詢問｜${d.companyName}`,j=`
公司名稱：${d.companyName}
公司網站/社群：${d.companyWebsite||"N/A"}

聯絡人姓名：${d.contactName}
職稱：${d.jobTitle}
Email：${d.email}
聯絡電話：${d.phone}

貴單位目前使用的公關名單管理工具：${I}
每季活動數量：${d.eventsPerQuarter||"N/A"}
單場貴賓名單規模：${d.guestListSize||"N/A"}
系統整合需求：${d.integrationNeeds.length>0?d.integrationNeeds.join(", "):"N/A"}

提交時間：${new Date().toLocaleString(o==="tc"?"zh-TW":o==="en"?"en-US":o==="ja"?"ja-JP":"zh-CN")}
      `.trim();console.log("Enterprise Inquiry Submitted:",{subject:S,body:j,to:"contact@inviti.vip",cc:d.email}),w(!1),s(),qi.success(c.enterpriseInquiry.successMessage,{duration:5e3,action:{label:c.enterpriseInquiry.viewInbox,onClick:()=>window.open(`mailto:${d.email}`,"_blank")}})},1e3))},T=C=>{f(I=>({...I,integrationNeeds:I.integrationNeeds.includes(C)?I.integrationNeeds.filter(S=>S!==C):[...I.integrationNeeds,C]}))},b=({TitleComponent:C,DescriptionComponent:I})=>a.jsxs("div",{className:"flex flex-col h-full max-h-full overflow-hidden",children:[a.jsxs("div",{className:"flex-shrink-0 flex items-start justify-between pb-4 border-b border-gray-200",children:[a.jsxs("div",{children:[a.jsx(C,{className:"text-gray-900 mb-1",children:c.enterpriseInquiry.title}),a.jsx(I,{className:"text-sm text-gray-600",children:c.enterpriseInquiry.subtitle||"填寫以下資料，我們的團隊將盡快與您聯繫"})]}),a.jsx("button",{onClick:s,className:"min-w-[32px] min-h-[32px] p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2","aria-label":c.enterpriseInquiry.close,children:a.jsx(Or,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden",style:{minHeight:"40vh"},children:a.jsx("div",{className:`space-y-6 ${l?"py-4":"py-6"}`,children:a.jsxs("form",{onSubmit:k,className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:c.enterpriseInquiry.companyInfoTitle||"公司資訊"}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.companyName," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.companyName,onChange:S=>{f({...d,companyName:S.target.value}),p.companyName&&h({...p,companyName:void 0})},placeholder:c.enterpriseInquiry.companyNamePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.companyName?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.companyName&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.companyName})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.companyWebsite}),a.jsx("input",{type:"text",value:d.companyWebsite,onChange:S=>f({...d,companyWebsite:S.target.value}),placeholder:c.enterpriseInquiry.companyWebsitePlaceholder,className:"w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.contactName," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.contactName,onChange:S=>{f({...d,contactName:S.target.value}),p.contactName&&h({...p,contactName:void 0})},placeholder:c.enterpriseInquiry.contactNamePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.contactName?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.contactName&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.contactName})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.jobTitle," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.jobTitle,onChange:S=>{f({...d,jobTitle:S.target.value}),p.jobTitle&&h({...p,jobTitle:void 0})},placeholder:c.enterpriseInquiry.jobTitlePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.jobTitle?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.jobTitle&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.jobTitle})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.email," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"email",value:d.email,onChange:S=>{f({...d,email:S.target.value}),p.email&&h({...p,email:void 0})},placeholder:c.enterpriseInquiry.emailPlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.email?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.email&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.email})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.phone," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"tel",value:d.phone,onChange:S=>{f({...d,phone:S.target.value}),p.phone&&h({...p,phone:void 0})},placeholder:c.enterpriseInquiry.phonePlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.phone?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.phone&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.phone})]})]}),a.jsxs("div",{className:"space-y-4 pt-4 border-t border-gray-200",children:[a.jsx("h3",{className:"text-sm text-gray-900",children:c.enterpriseInquiry.useCaseTitle||"使用情境"}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.currentTool," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsxs(dk,{value:d.currentTool,onValueChange:S=>{f({...d,currentTool:S,currentToolOther:""}),p.currentTool&&h({...p,currentTool:void 0,currentToolOther:void 0})},children:[a.jsx(pk,{className:`w-full ${p.currentTool?"border-red-500":""}`,children:a.jsx(fk,{placeholder:c.enterpriseInquiry.currentToolPlaceholder})}),a.jsxs(mk,{children:[a.jsx(hs,{value:"spreadsheet",children:c.enterpriseInquiry.currentToolOptions.spreadsheet}),a.jsx(hs,{value:"crm",children:c.enterpriseInquiry.currentToolOptions.crm}),a.jsx(hs,{value:"selfBuilt",children:c.enterpriseInquiry.currentToolOptions.selfBuilt}),a.jsx(hs,{value:"other",children:c.enterpriseInquiry.currentToolOptions.other}),a.jsx(hs,{value:"none",children:c.enterpriseInquiry.currentToolOptions.none})]})]}),p.currentTool&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.currentTool})]}),d.currentTool==="other"&&a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm mb-1.5 text-gray-700",children:[c.enterpriseInquiry.currentToolOther," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:d.currentToolOther,onChange:S=>{f({...d,currentToolOther:S.target.value}),p.currentToolOther&&h({...p,currentToolOther:void 0})},placeholder:c.enterpriseInquiry.currentToolOtherPlaceholder,className:`w-full px-3 py-2 border rounded text-sm ${p.currentToolOther?"border-red-500":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-gray-300`}),p.currentToolOther&&a.jsx("p",{className:"text-xs text-red-500 mt-1",children:p.currentToolOther})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.eventsPerQuarter}),a.jsx("div",{className:"space-y-2",children:["range1","range2","range3","range4"].map(S=>a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[a.jsx("input",{type:"radio",name:"eventsPerQuarter",value:S,checked:d.eventsPerQuarter===S,onChange:j=>f({...d,eventsPerQuarter:j.target.value}),className:"w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-300"}),a.jsx("span",{className:"text-sm text-gray-700",children:c.enterpriseInquiry.eventsPerQuarterOptions[S]})]},S))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.guestListSize}),a.jsx("div",{className:"space-y-2",children:["small","medium","large","extraLarge"].map(S=>a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[a.jsx("input",{type:"radio",name:"guestListSize",value:S,checked:d.guestListSize===S,onChange:j=>f({...d,guestListSize:j.target.value}),className:"w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-300"}),a.jsx("span",{className:"text-sm text-gray-700",children:c.enterpriseInquiry.guestListSizeOptions[S]})]},S))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm mb-1.5 text-gray-700",children:c.enterpriseInquiry.integrationNeeds}),a.jsx("div",{className:"space-y-2",children:["ticketing","crm","email","other"].map(S=>a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:d.integrationNeeds.includes(S),onChange:()=>T(S),className:"w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-300"}),a.jsx("span",{className:"text-sm text-gray-700",children:c.enterpriseInquiry.integrationOptions[S]})]},S))})]})]}),a.jsxs("div",{className:"pt-4 border-t border-gray-200",children:[a.jsxs("label",{className:"flex items-start gap-2 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:d.consent,onChange:S=>{f({...d,consent:S.target.checked}),p.consent&&h({...p,consent:void 0})},className:`w-4 h-4 mt-0.5 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-300 ${p.consent?"border-red-500":""}`}),a.jsxs("span",{className:`text-sm ${p.consent?"text-red-500":"text-gray-700"}`,children:[c.enterpriseInquiry.consent," ",a.jsx("span",{className:"text-red-500",children:"*"})]})]}),p.consent&&a.jsx("p",{className:"text-xs text-red-500 mt-1 ml-6",children:p.consent})]})]})})}),a.jsxs("div",{className:"flex-shrink-0 border-t border-gray-200 pt-4 space-y-3 bg-white",style:{paddingBottom:l?"16px":"0"},children:[a.jsx(st,{variant:"primary",size:l?"sm":"md",className:"w-full",onClick:k,disabled:g,children:g?c.enterpriseInquiry.submitting:c.enterpriseInquiry.submit}),a.jsx("p",{className:"text-xs text-center text-gray-500",children:c.enterpriseInquiry.orEmail})]})]});return l?a.jsx(th,{open:n,onOpenChange:s,children:a.jsx(rh,{side:"bottom",className:"h-[88vh] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(b,{TitleComponent:oh,DescriptionComponent:sh})})}):a.jsx(Km,{open:n,onOpenChange:s,children:a.jsx(Zm,{className:"max-w-[720px] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden",children:a.jsx(b,{TitleComponent:Jm,DescriptionComponent:eh})})})},yk="https://calendar.app.google/tYrJgzbLhGuS5cjC8",xk=({isMobile:n=!1,locale:s="tc",onNavigate:o,onLocaleChange:l,onScrollToPricing:c,onSetScrollTarget:d})=>{const f=Ge(s),p=()=>{window.open(yk,"_blank","noopener,noreferrer")},h=()=>{o&&o("/help-center")},g=[{icon:Bp,title:f.demoBooking.card1Title,description:f.demoBooking.card1Description},{icon:Gy,title:f.demoBooking.card2Title,description:f.demoBooking.card2Description},{icon:Ac,title:f.demoBooking.card3Title,description:f.demoBooking.card3Description}];return n?a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx(dn,{isMobile:n,locale:s,onLocaleChange:l,onNavigateToHelpCenter:h,onNavigate:o,onSetScrollTarget:d,showBanner:!0}),a.jsx("section",{className:"pt-[120px] pb-8 px-6 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-[343px] mx-auto space-y-4",children:[a.jsx("h1",{className:"leading-[140%]",children:f.demoBooking.title}),a.jsx("p",{className:"text-gray-600 leading-[150%]",children:f.demoBooking.subtitle}),a.jsx(st,{variant:"primary",className:"w-full",onClick:p,children:f.demoBooking.ctaButton}),a.jsx("p",{className:"text-sm text-gray-500 text-center leading-[150%]",children:f.demoBooking.fallbackEmail})]})}),a.jsx("section",{className:"py-8 px-6",children:a.jsxs("div",{className:"max-w-[343px] mx-auto space-y-4",children:[a.jsx("h3",{className:"leading-[140%]",children:f.demoBooking.coverTitle}),a.jsx("div",{className:"space-y-3",children:g.map((w,v)=>{const N=w.icon;return a.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(N,{className:"w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"}),a.jsxs("div",{className:"space-y-1 flex-1",children:[a.jsx("h4",{className:"text-gray-900 leading-[140%]",children:w.title}),a.jsx("p",{className:"text-sm text-gray-600 leading-[150%]",children:w.description})]})]})},v)})})]})}),a.jsx(fn,{isMobile:n,locale:s,onNavigate:o,onNavigateToHelpCenter:h})]}):a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx(dn,{isMobile:n,locale:s,onLocaleChange:l,onNavigateToHelpCenter:h,onNavigate:o,onSetScrollTarget:d,showBanner:!0}),a.jsx("section",{className:"pt-[112px] pb-16 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-[960px] mx-auto px-20 text-center space-y-6",children:[a.jsx("h1",{className:"leading-[140%]",children:f.demoBooking.title}),a.jsx("p",{className:"text-gray-600 leading-[150%] max-w-[720px] mx-auto",children:f.demoBooking.subtitle}),a.jsx("div",{className:"pt-4",children:a.jsx(st,{variant:"primary",className:"min-w-[240px]",onClick:p,children:f.demoBooking.ctaButton})}),a.jsx("p",{className:"text-sm text-gray-500 leading-[150%]",children:f.demoBooking.fallbackEmail})]})}),a.jsx("section",{className:"py-16 px-20",children:a.jsxs("div",{className:"max-w-[1120px] mx-auto space-y-8",children:[a.jsx("h2",{className:"text-center leading-[140%]",children:f.demoBooking.coverTitle}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6 pt-4",children:g.map((w,v)=>{const N=w.icon;return a.jsx("div",{className:"p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all",children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(N,{className:"w-6 h-6 text-gray-600"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"leading-[140%]",children:w.title}),a.jsx("p",{className:"text-gray-600 leading-[150%]",children:w.description})]})]})},v)})})]})}),a.jsx(fn,{isMobile:n,locale:s,onNavigate:o,onNavigateToHelpCenter:h})]})},wk=({title:n,subtitle:s,sections:o=[],placeholder:l="內容即將更新，敬請期待。",onBack:c,isMobile:d=!1})=>{const f=o.length>0;return a.jsx("div",{className:`min-h-screen bg-white ${d?"p-3":"py-16 px-20"}`,children:a.jsxs("div",{className:d?"max-w-[343px]":"max-w-3xl mx-auto",children:[c&&a.jsx("button",{onClick:c,className:"text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center gap-2",children:"← 返回首頁"}),a.jsxs("header",{className:"mb-10",children:[a.jsx("h1",{className:"text-3xl font-semibold text-gray-900 mb-4",children:n}),s&&a.jsx("p",{className:"text-gray-600 leading-relaxed",children:s})]}),f?a.jsx("div",{className:"space-y-6",children:o.map((p,h)=>a.jsx("p",{className:"text-gray-600 leading-relaxed whitespace-pre-line",children:p.body},`paragraph-${h}`))}):a.jsx("div",{className:"bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500",children:l})]})})},bk=`# 隱私權政策

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

我們將依適用法令與內部流程，在合理期間內回覆您的詢問。`,Nk=({title:n="隱私權政策",subtitle:s,onBack:o,isMobile:l=!1})=>{const c=y.useMemo(()=>yo(bk),[]);return a.jsx("div",{className:`min-h-screen bg-white ${l?"p-3":"py-16 px-20"}`,children:a.jsxs("div",{className:l?"max-w-[343px]":"max-w-3xl mx-auto",children:[o&&a.jsx("button",{onClick:o,className:"text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center gap-2",children:"← 返回首頁"}),a.jsxs("header",{className:"mb-10",children:[a.jsx("h1",{className:"text-3xl font-semibold text-gray-900 mb-4",children:n}),s&&a.jsx("p",{className:"text-gray-600 leading-relaxed",children:s})]}),a.jsx("div",{className:"prose prose-gray max-w-none blog-content terms-content",dangerouslySetInnerHTML:{__html:c.content}}),a.jsx("style",{children:`
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
            color: #030213;
            text-decoration: underline;
            transition: color 200ms;
          }
          .terms-content a:hover {
            color: #525252;
          }
          .terms-content hr {
            border: none;
            border-top: 1px solid rgb(162, 162, 162);
            margin: 2rem 0;
          }
        `})]})})},kk="/INVITI-Website/assets/%E5%89%B5%E5%BB%BA%E6%B4%BB%E5%8B%95_Gif%E7%89%88-CJBhqJF2.gif",Ck="/INVITI-Website/assets/%E4%B8%80%E9%8D%B5%E9%82%80%E8%AB%8B%E8%88%87%E8%BF%BD%E8%B9%A4%E5%87%BA%E5%B8%AD%E7%8B%80%E6%B3%81.png-DSS0jKoh.webp",Sk="/INVITI-Website/assets/%E8%B2%B4%E8%B3%93%E8%B3%87%E6%96%99%E5%BA%AB.png-0Ook9JvC.webp",Ek=({imageUrl:n,alt:s,isOpen:o,onClose:l})=>(y.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[o]),y.useEffect(()=>{const c=d=>{d.key==="Escape"&&l()};return o&&window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[o,l]),o?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",onClick:l,children:a.jsxs("div",{className:"relative max-w-[960px] w-full mx-8",children:[a.jsx("button",{onClick:l,className:"absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded","aria-label":"Close lightbox",children:a.jsx(Or,{size:24})}),a.jsx("div",{className:"bg-white rounded-lg overflow-hidden shadow-2xl",onClick:c=>c.stopPropagation(),children:a.jsx("img",{src:n,alt:s,className:"w-full h-auto"})})]})}):null),_p={"event-session-management":kk,"automated-invitations":Ck,"guest-database":Sk},jk="4QObyx7sDhI",Tk={"event-session-management":"https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4MTI4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080","automated-invitations":"https://images.unsplash.com/photo-1584543515885-b8981dbf0b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGF1dG9tYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080","guest-database":"https://images.unsplash.com/photo-1740560051533-3acef26ace95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGNvbnRhY3RzJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjE4MTI4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"};function Ik(n,s){const o=n;return o==="en"?s==="event-session-management"?{title:"Event & Session Management",intro:["INVITI treats every event as a dedicated project. When you create an event, you can configure all key details at once — date, venue, doors-open and show time, invitation artwork, and more. At the same time, the system automatically generates the corresponding RSVP form so your invitation workflow is ready to go."],sections:[{heading:"Challenges when managing events with Google Forms & spreadsheets",bullets:["Each event ends up with multiple guest lists, RSVP forms, and invitation images scattered across different folders, making it hard to manage and even harder to know which version is the latest.","After collecting RSVPs in Google Forms, you still need to move data elsewhere to clean it up and send emails. The workflow is fragmented and time‑consuming.","Know‑how and rules are often locked in one person’s head, making it difficult to share workload and forcing a single coordinator to handle everything."]},{heading:"INVITI gives you true end‑to‑end event management",body:"INVITI links guest lists and RSVP forms under the same event/session, so organizers can manage guests and email flows from a single interface. Once email templates are set up, you can batch‑send invitations and confirmations without copying and pasting names one by one, greatly reducing human error and making the entire process clearer and easier to hand over."}],backLabel:"Back to Product Features",moreFeaturesLabel:"Other product features"}:s==="automated-invitations"?{title:"One‑Click Invitations & Attendance Tracking",intro:["With INVITI, you can select the guests you want to invite directly from the attendance list and send invitation, confirmation, or reminder emails with a single click, using predefined templates. The system automatically includes the correct RSVP form link. Email content is prepared in “Email Templates”, and variables pull in guest and event details automatically to avoid manual errors. When a guest submits the form—or when the inviter sends a confirmation—the system updates status and headcount automatically so every invitation has a clear trace."],sections:[{heading:"Challenges when inviting guests with regular email tools",bullets:["Guest lists live in Google Sheets, RSVP forms in Google Forms, and emails in your inbox. The process is fragmented and it’s hard to see who has been invited and who hasn’t.","After guests confirm attendance, someone has to manually update status and headcount one by one, which makes tracking total confirmed seats very time‑consuming.","Sending reminder emails before the event is tedious and error‑prone, increasing the risk of sending the wrong content to the wrong people."]},{heading:"INVITI makes invitations and attendance tracking straightforward",body:"In INVITI, you can handle invitation, confirmation, and reminder flows directly from the “Guest Attendance List” and see live changes in status and ticket counts. From the first invitation to the final headcount before the event, everything happens in one interface, so your team can always see the latest attendance progress."}],backLabel:"Back to Product Features",moreFeaturesLabel:"Other product features"}:{title:"Guest Database",intro:["INVITI turns all of your PR guests into a long‑term “Guest Database”, using email as the unique identifier to avoid duplicate records. You can add guests one by one, bulk import them, or sync new contacts automatically from RSVP forms.","Fields are pre‑designed for PR workflows (name, organization, title, contact info, account owner, tags, etc.), and combined with tags and internal owner settings so each guest’s background, relationship, and interaction history can be captured instead of living only in a few colleagues’ memory."],sections:[{heading:"Challenges when managing a master guest list in Google Sheets or Excel",bullets:["The same guest is duplicated across multiple events with inconsistent names, titles, or contact details, making it hard to know which record is the most up‑to‑date.","Lists are scattered across Excel files, Google Sheets, and email attachments, so new teammates struggle to quickly understand existing relationships.","When you want to target by industry, importance, owner, or region, you have to filter and tag sheet by sheet, spending time on data cleanup instead of relationship‑building.","After an event, it’s hard to see a guest’s full “participation history” from one place, which makes follow‑up and analysis difficult."]},{heading:"INVITI turns guest information into a long‑term relationship asset",body:"With the Guest Database, all contacts live in a single system. Email prevents duplicate records, and you can quickly search and segment by tags, industry, importance, owner, and more. Each invitation and attendance record writes back to the same guest, building a clear interaction history. Whether someone new takes over, PR ownership changes, or multiple teams need to share lists, everyone can see a complete and up‑to‑date view of each relationship."}],backLabel:"Back to Product Features",moreFeaturesLabel:"Other product features"}:o==="zh-hans"?s==="event-session-management"?{title:"活动／场次管理",intro:["INVITI 把每一场活动当成一个专案来管理。建立活动时，可以一次设定好活动资讯，例如：日期、地点、进场及演出时间、电子邀请函图片⋯⋯等。在活动建立完成的同时，系统也会自动产生对应的邀请表单，让后续邀请流程接上。"],sections:[{heading:"使用 Google 表单管理活动时，你可能会遇到以下问题",bullets:["一个活动有多个出席名单、邀请表单、邀请函图片，分散在不同云端资料夹中，难以管理，也难以追踪最新版本","使用 Google 表单搜集贵宾出席意愿后，还需要再把资料转移到其他地方整理、寄信，流程零碎又花时间","经验与规则都锁在同一个人身上，工作负担难以分担，只能由单一窗口一人作业"]},{heading:"INVITI 做到了一站式的管理",body:"INVITI 将出席名单与邀请表单勾稽在同一个活动／场次下，主办方可以在同一个介面，一站式管理贵宾名单与寄信流程。只要事先设定好信件模板，就能批次寄出邀请与确认信，不必再一笔一笔复制贴上名单，大幅减少人工错误，也让整体流程更清楚、更好交接。"}],backLabel:"返回产品功能",moreFeaturesLabel:"其他产品功能"}:s==="automated-invitations"?{title:"一键邀请与追踪出席状况",intro:["INVITI 让你在同一个出席名单页面，选好要邀请的贵宾后，就能用信件模板「一键寄出」邀请信、确认信或提醒信，并自动附上对应的邀请表单连结。信件内容可事先在「信件模板管理」设定，并利用内容变数自动带入贵宾与活动资讯，避免手动输入出错。贵宾填完表单，或由邀请人直接寄出确认信后，系统会自动更新出席状态与出席人数，让每一笔邀请都有清楚的纪录。"],sections:[{heading:"用一般寄信工具邀请贵宾，你可能会遇到以下问题",bullets:["名单在 Google Sheet、邀请表单在 Google Form、寄信在信箱，流程分散又难以回溯谁已寄出、谁尚未邀请","贵宾回覆出席后，需要人工逐笔更新出席状态与人数，统计目前确认人数相当费时","活动前想发提醒信，既耗时、寄错信的风险高"]},{heading:"INVITI 让邀请与出席追踪不再困难",body:"透过 INVITI，你可以在「贵宾出席名单」中直接完成邀请、确认与提醒三个步骤，并即时看到出席状态与票数变化。从寄出第一封邀请信，到活动前夕确认最终人数，都在同一个介面完成，让团队随时掌握活动最新出席进度。"}],backLabel:"返回产品功能",moreFeaturesLabel:"其他产品功能"}:{title:"贵宾资料库",intro:["INVITI 把所有公关贵宾整理成一个可以长期累积的「贵宾资料库」，用 Email 当作唯一识别，避免重复建档。你可以用单笔新增、批量汇入，或透过邀请表单自动同步活动中的新贵宾资料。","栏位已预先依照公关情境设计（姓名、单位、职称、联络方式、联络人、标签等），再搭配标签与内部窗口设定，让每一位贵宾的背景、关系与互动脉络都能被记录下来，而不是只存在某一两位同事的记忆里。"],sections:[{heading:"如果在 Google Sheet 或 Excel 管理贵宾总表，你可能会遇到以下问题",bullets:["同一位贵宾在不同活动被重复建立多笔资料，名称、职称或联络方式不一致，难以判断哪一笔才是最新","名单散落在各种 Excel、Google 试算表与信箱附件中，新加入的同事很难快速掌握既有关係","想依产业别、重要程度、邀请人或地区分组邀请时，只能一张张表格筛选、贴标记，时间花在整理资料，而不是经营关係","活动结束后，无法从单一视角回头查看这位贵宾「历年参与纪录」，也难以做后续关係维护与资料分析"]},{heading:"INVITI 让贵宾资料变成可以长期累积的资产",body:"透过贵宾资料库，所有贵宾资讯被集中在同一套系统中，由 Email 自动避免重复建档，并可透过标签、产业别、重要程度、邀请人等条件快速搜寻与分组。每次邀请与出席状况也会回写到同一笔贵宾资料，形成清楚的互动历史。无论是新人接手、公关换人，或是跨部门需要共用名单，都能在同一个画面看到完整且最新的贵宾关係全貌。"}],backLabel:"返回产品功能",moreFeaturesLabel:"其他产品功能"}:o==="ja"?s==="event-session-management"?{title:"イベント／セッション管理",intro:["INVITI は、1 つ 1 つのイベントを「プロジェクト」として管理します。イベント作成時に、日付・会場・開場／開演時間・デジタル招待状の画像など、必要な情報をまとめて設定できます。イベントを作成すると同時に、対応する招待フォームも自動生成され、そのまま招待フローにつなげることができます。"],sections:[{heading:"Google フォームでイベントを管理すると、こんな課題が起こりがちです",bullets:["1 つのイベントに対して、出席リスト・招待フォーム・招待状の画像が複数存在し、それぞれが別々のクラウドフォルダに散らばっているため、管理が煩雑で最新版も分かりにくい","Google フォームで出席可否を集めたあと、別の場所にデータを移して整え、メール配信する必要があり、プロセスが分断されて時間も手間もかかる","ノウハウやルールが 1 人の担当者に属人化しており、作業を分担しにくく、いつも同じ窓口がすべてを抱え込んでしまう"]},{heading:"INVITI ならイベント情報を 1 か所にまとめて管理",body:"INVITI では、出席リストと招待フォームを同じイベント／セッション単位でひも付けて管理できます。主催者は 1 つの画面で、ゲストリストとメール送信フローを一元的に扱えます。あらかじめメールテンプレートを用意しておけば、招待メールや確認メールを一括送信でき、名簿を 1 件ずつコピー＆ペーストする必要はありません。ヒューマンエラーを大幅に減らし、プロセス全体がもっと分かりやすく、引き継ぎもしやすくなります。"}],backLabel:"機能一覧に戻る",moreFeaturesLabel:"その他の製品機能"}:s==="automated-invitations"?{title:"ワンクリック招待と出席状況トラッキング",intro:["INVITI なら、同じ出席リスト画面上で招待したいゲストを選び、テンプレートを使って「ワンクリック」で招待メール・確認メール・リマインドメールを送信できます。適切な招待フォームのリンクも自動で挿入されます。メール本文は「メールテンプレート管理」で事前に用意し、変数を使ってゲスト情報やイベント情報を自動差し込みできるので、手入力ミスを防げます。ゲストがフォームに回答したり、担当者が確認メールを送信すると、システムが出席ステータスと人数を自動更新し、1 件 1 件の招待に明確な履歴が残ります。"],sections:[{heading:"一般的なメールツールで招待するときの課題",bullets:["ゲストリストはスプレッドシート、招待フォームは Google フォーム、送信はメールクライアントと、プロセスがバラバラで「誰に送ったか／まだ送っていないか」を追いにくい","出席の返信をもらったあと、担当者が手作業で出席ステータスや人数を更新する必要があり、現在の確定人数を集計するのに時間がかかる","イベント直前にリマインドメールを送りたいが、工数も多く、宛先や内容を間違えるリスクも高い"]},{heading:"INVITI なら招待と出席管理を同じ画面で完結",body:"INVITI では、「ゲスト出席リスト」からそのまま招待・出席確認・リマインドの 3 ステップを完了でき、ステータスやチケット枚数の変化をリアルタイムに確認できます。最初の招待メール送信からイベント前日の最終人数確認まで、すべてを 1 つの画面で行えるため、チーム全員が常に最新の出席状況を把握できます。"}],backLabel:"機能一覧に戻る",moreFeaturesLabel:"その他の製品機能"}:{title:"ゲストデータベース",intro:["INVITI は、すべての PR ゲストを長期的に蓄積できる「ゲストデータベース」として整理し、Email を一意の識別子として重複登録を防ぎます。1 件ずつの追加、CSV などからの一括インポート、招待フォームからの自動同期など、さまざまな方法でゲスト情報を集約できます。","項目は PR の実務に合わせて事前設計されており（氏名、所属、役職、連絡先、担当者、タグなど）、タグや社内の担当設定と組み合わせることで、各ゲストの背景や関係性、これまでのやり取りの文脈を記録として残せます。特定のメンバーの記憶にだけ依存しない状態をつくることができます。"],sections:[{heading:"Google シートや Excel で「ゲスト一覧」を管理すると起こりがちな問題",bullets:["同じゲストがイベントごとに別レコードとして重複登録され、名前・役職・連絡先がバラバラになり、どれが最新情報なのか分かりにくい","名簿が複数の Excel ファイルや Google シート、メール添付などに散在しており、新しく入ったメンバーが既存の関係性を素早く把握しにくい","業種・重要度・担当者・地域別などでセグメントして招待したいとき、各シートをフィルタ・タグ付けしながら作業する必要があり、時間の多くをデータ整備に取られてしまう","イベント終了後に、そのゲストの「過去の参加履歴」を 1 つのビューで振り返ることが難しく、フォローアップや分析に活かしにくい"]},{heading:"INVITI ならゲスト情報を長期的な「関係資産」に変えられる",body:"ゲストデータベースでは、すべてのゲスト情報が 1 つのシステムに集約され、Email によって重複登録が自動的に防がれます。タグ・業種・重要度・担当者などの条件で素早く検索・絞り込みができ、各イベントでの招待や出席状況も同じレコードに書き戻されます。こうして明確なインタラクション履歴が蓄積されるため、新人の引き継ぎや担当変更、部門間での名簿共有が必要なときも、常に最新かつ全体像の見える関係管理が可能になります。"}],backLabel:"機能一覧に戻る",moreFeaturesLabel:"その他の製品機能"}:s==="event-session-management"?{title:"活動／場次管理",intro:["INVITI 把每一場活動當成一個專案來管理。建立活動時，可以一次設定好活動資訊，例如：日期、地點、進場及演出時間、電子邀請函圖片⋯⋯等。在活動建立完成的同時，系統也會自動產生對應的邀請表單，讓後續邀請流程接上。"],sections:[{heading:"使用 Google 表單管理活動時，你可能會遇到以下問題",bullets:["一個活動有多個出席名單、邀請表單、邀請函圖片，分散在不同雲端資料夾中，難以管理，也難以追蹤最新版本","使用 Google 表單蒐集貴賓出席意願後，還需要再把資料轉移到其他地方整理、寄信，流程零碎又花時間","經驗與規則都鎖在同一個人身上，工作負擔難以分擔，只能由單一窗口一人作業"]},{heading:"INVITI 做到了一站式的管理",body:"INVITI 將出席名單與邀請表單勾稽在同一個活動／場次下，主辦方可以在同一個介面，一站式管理貴賓名單與寄信流程。只要事先設定好信件模板，就能批次寄出邀請與確認信，不必再一筆一筆複製貼上名單，大幅減少人工錯誤，也讓整體流程更清楚、更好交接。"}],backLabel:"← 返回產品功能",moreFeaturesLabel:"其他產品功能"}:s==="automated-invitations"?{title:"一鍵邀請與追蹤出席狀況",intro:["INVITI 讓你在同一個出席名單頁面，選好要邀請的貴賓後，就能用信件模板「一鍵寄出」邀請信、確認信或提醒信，並自動附上對應的邀請表單連結。信件內容可事先在「信件模板管理」設定，並利用內容變數自動帶入貴賓與活動資訊，避免手動輸入出錯。貴賓填完表單，或由邀請人直接寄出確認信後，系統會自動更新出席狀態與出席人數，讓每一筆邀請都有清楚的紀錄。"],sections:[{heading:"用一般寄信工具邀請貴賓，你可能會遇到以下問題",bullets:["名單在 Google Sheet、邀請表單在 Google Form、寄信在信箱，流程分散又難以回溯誰已寄出、誰尚未邀請","貴賓回覆出席後，需要人工逐筆更新出席狀態與人數，統計目前確認人數相當費時","活動前想發提醒信，既耗時、寄錯信的風險高"]},{heading:"INVITI 讓邀請與出席追蹤不再困難",body:"透過 INVITI，你可以在「貴賓出席名單」中直接完成邀請、確認與提醒三個步驟，並即時看到出席狀態與票數變化。從寄出第一封邀請信，到活動前夕確認最終人數，都在同一個介面完成，讓團隊隨時掌握活動最新出席進度。"}],backLabel:"← 返回產品功能",moreFeaturesLabel:"其他產品功能"}:{title:"貴賓資料庫",intro:["INVITI 把所有公關貴賓整理成一個可以長期累積的「貴賓資料庫」，用「Email」當作唯一識別，避免重複建檔。你可以用單筆新增、批量匯入，或透過邀請表單自動同步活動中的新貴賓資料。","欄位已預先依照公關情境設計（姓名、單位、職稱、聯絡方式、聯絡人、標籤等），再搭配標籤與內部窗口設定，讓每一位貴賓的背景、關係與互動脈絡都能被記錄下來，而不是只存在某一兩個同事的記憶裡。"],sections:[{heading:"如果在Google Sheet或Excel管理貴賓總表，你可能會遇到以下問題",bullets:["同一位貴賓在不同活動被重複建立多筆資料，名稱、職稱或聯絡方式不一致，難以判斷哪一筆才是最新","名單散落在各種 Excel、Google 試算表與信箱附件中，新加入的同事很難快速掌握既有關係","想依產業別、重要程度、邀請人或地區分組邀請時，只能一張張表格篩選、貼標記，時間花在整理資料，而不是經營關係","活動結束後，無法從單一視角回頭查看這位貴賓「歷年參與紀錄」，也難以做後續關係維護與資料分析"]},{heading:"INVITI 讓貴賓資料變成可以長期累積的資產",body:"透過貴賓資料庫，所有貴賓資訊被集中在同一套系統中，由 Email 自動避免重複建檔，並可透過標籤、產業別、重要程度、邀請人等條件快速搜尋與分組。每次邀請與出席狀況也會回寫到同一筆貴賓資料，形成清楚的互動歷史。無論是新人接手、公關換人，或是跨部門需要共用名單，都能在同一個畫面看到完整且最新的貴賓關係全貌。"}],backLabel:"← 返回產品功能",moreFeaturesLabel:"其他產品功能"}}const Pk=({featureId:n,isMobile:s=!1,locale:o="tc",onBack:l,onNavigate:c})=>{const d=Ge(o),f=Ik(o,n),p=s?"container-fluid px-4":"container",[h,g]=y.useState(!1),[w,v]=y.useState(!1),k=[{id:"event-session-management",icon:a.jsx(Ac,{size:22,className:"text-dark"}),title:d.features.card1Title,description:d.features.card1Description},{id:"automated-invitations",icon:a.jsx(Lp,{size:22,className:"text-dark"}),title:d.features.card2Title,description:d.features.card2Description},{id:"guest-database",icon:a.jsx(Dp,{size:22,className:"text-dark"}),title:d.features.card3Title,description:d.features.card3Description}].filter(T=>T.id!==n);return y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[n]),a.jsxs("section",{className:"section-padding bg-white border-top border-bottom",children:[a.jsxs("div",{className:p,children:[l&&a.jsx("button",{onClick:l,className:"btn btn-link px-0 mb-4 text-muted small text-decoration-none",children:f.backLabel}),a.jsxs("div",{className:"row g-4 mb-5",children:[a.jsx("div",{className:"col-12 col-lg-6",children:a.jsx("div",{className:"bg-light border rounded overflow-hidden position-relative",children:n==="automated-invitations"?a.jsx("div",{className:"position-relative",style:{paddingBottom:"56.25%",height:0},children:a.jsx("iframe",{src:`https://www.youtube.com/embed/${jk}`,title:f.title,className:"position-absolute top-0 start-0 w-100 h-100",style:{border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):a.jsxs("div",{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[a.jsx("img",{src:_p[n],alt:f.title,className:"img-fluid w-100",style:{objectFit:"cover"}}),a.jsx("button",{type:"button",onClick:()=>v(!0),className:"btn btn-light btn-sm d-flex align-items-center gap-1 position-absolute",style:{right:"0.75rem",bottom:"0.75rem",opacity:h?1:0,transition:"opacity 0.2s"},children:a.jsx(zp,{size:16})})]})})}),a.jsx("div",{className:"col-12 col-lg-6",children:a.jsxs("div",{className:"d-flex flex-column",children:[a.jsx("h1",{className:"mb-4",children:f.title}),f.intro.map(T=>a.jsx("p",{className:"text-muted mb-3",children:T},T)),f.sections.map((T,b)=>a.jsxs("div",{className:"mt-3",children:[a.jsx("h2",{className:"h6 mb-2",children:T.heading}),T.body&&a.jsx("p",{className:"text-muted mb-2",children:T.body}),T.bullets&&a.jsx("ul",{className:"text-muted mb-2 ps-3",style:{listStyleType:"disc"},children:T.bullets.map(C=>a.jsx("li",{className:"mb-1",children:C},C))})]},`${T.heading}-${b}`))]})})]}),a.jsxs("div",{className:"border-top pt-4",children:[a.jsx("h3",{className:s?"h6 mb-3":"h5 mb-4",children:f.moreFeaturesLabel}),a.jsx("div",{className:"row g-4",children:k.map(T=>a.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:a.jsx(Fp,{icon:T.icon,title:T.title,description:T.description,screenshot:Tk[T.id],onClick:()=>c?.(`/features/${T.id}`),isMobile:s,learnMoreText:d.features.viewDetails})},T.id))})]})]}),w&&n!=="automated-invitations"&&a.jsx(Ek,{imageUrl:_p[n],alt:f.title,isOpen:w,onClose:()=>v(!1)})]})};function _k(){const[n,s]=y.useState("wireframe"),[o,l]=y.useState("wireframe"),[c,d]=y.useState("idle"),[f,p]=y.useState("desktop"),[h,g]=y.useState(null),[w,v]=y.useState("tc"),[N,k]=y.useState(""),T=y.useRef(""),b=y.useRef(!0),[C,I]=y.useState(!1),[S,j]=y.useState(!1),[M,$]=y.useState({strictlyNecessary:!0,functional:!1,analytics:!1,marketing:!1}),[z,L]=y.useState(!1),[F,oe]=y.useState("free"),[ae,be]=y.useState(!1);y.useEffect(()=>{const H=localStorage.getItem("locale");H&&["tc","en","ja","zh-hans"].includes(H)&&v(H)},[]),y.useEffect(()=>{const H=localStorage.getItem("cookieConsent");if(H)try{const te=JSON.parse(H);$(te)}catch{console.error("Failed to parse cookie preferences")}else{const te=setTimeout(()=>{I(!0)},1e3);return()=>clearTimeout(te)}},[]);const le={desktop:"w-full",tablet:"w-full",mobile:"w-full"},ce={"event-session-management":{title:"Event & Session Management",description:"Streamline your event planning process with powerful management tools designed for PR professionals and event organizers. Create, organize, and track multiple events and sessions all in one centralized platform.",screenshot:"https://images.unsplash.com/photo-1517857612127-f33b2b246bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxNzQ4MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Create and manage unlimited events with custom timelines and schedules","Organize multiple sessions within each event with detailed agenda planning","Track venue details, capacity limits, and location information","Set up recurring events and template sessions for faster planning","Real-time dashboard showing all upcoming events and session status","Manage event staff, vendors, and resource allocation","Generate comprehensive event reports and analytics"]},"automated-invitations":{title:"Automated Invitations & Tracking",description:"Send beautiful, branded invitations and track every interaction automatically. Our intelligent tracking system keeps you informed of RSVPs, opens, clicks, and engagement in real-time.",screenshot:"https://images.unsplash.com/photo-1586957960362-65815d739527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGludml0YXRpb24lMjB0cmFja2luZ3xlbnwxfHx8fDE3NjE3OTgyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Automated email invitations with customizable templates and branding","Real-time RSVP tracking with instant notifications","Track email opens, clicks, and engagement metrics","Automated follow-up reminders for non-responders","Personalized invitation messages with merge fields","QR code generation for easy check-in at events","Integration with calendar apps for automatic scheduling","Waitlist management and automated seat allocation"]},"guest-database":{title:"Centralized Guest Database",description:"Build and maintain a comprehensive database of your contacts and guests. Advanced segmentation and filtering tools help you target the right audience for every event.",screenshot:"https://images.unsplash.com/photo-1740560051533-3acef26ace95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwZGF0YWJhc2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNzk4MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Store unlimited contacts with detailed profiles and history","Advanced segmentation by industry, location, interests, and custom tags","Import contacts from CSV, Excel, or integrate with CRM systems","Track guest attendance history and engagement patterns","Create custom fields and categories for your specific needs","Duplicate detection and automatic contact merging","Export guest lists and reports in multiple formats","GDPR-compliant data management and privacy controls"]},"roles-permissions":{title:"Roles & Permissions",description:"Collaborate with your team securely with granular access control and comprehensive audit trails. Manage who can do what in your organization.",screenshot:"https://images.unsplash.com/photo-1602343457842-a98feacd5cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcGVybWlzc2lvbnMlMjBhY2Nlc3N8ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Define custom roles with specific permission sets","Granular access control for events, guests, and data","Team collaboration with shared workspaces","Comprehensive audit logs tracking all user actions","Two-factor authentication for enhanced security","SSO integration for enterprise customers","Activity monitoring and user session management","Role-based email sending and approval workflows"]},"email-templates":{title:"Email Templates",description:"Create, manage, and deploy professional email templates with ease. Multi-version support and variable system for personalized communications.",screenshot:"https://images.unsplash.com/photo-1576859933856-c07ec7ddfe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHRlbXBsYXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTgxMjg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",capabilities:["Drag-and-drop template builder with rich formatting","Multi-language template support for global events","Version control and template history tracking","Dynamic variable insertion for personalization","Pre-built templates for common event types","A/B testing capabilities for optimization","Mobile-responsive email design","Template analytics and performance tracking"]}},ge=y.useCallback(H=>{const te=go(H||"/");let ue="wireframe",Ne=null;if(te==="/help-center")ue="help-center";else if(te.startsWith("/instruction/"))ue="instruction";else if(te==="/cookie-policy")ue="cookie-policy";else if(te==="/blog")ue="blog";else if(te.startsWith("/blog/"))ue="blog-post";else if(te==="/booking"||te==="/demo-booking")ue="booking";else if(te.startsWith("/features/")){const Se=te.replace("/features/","");ce[Se]?(Ne=Se,ue="feature"):ue="wireframe"}else te==="/about"?ue="about":te==="/terms"?ue="terms":ue="wireframe";g(Ne),s(ue)},[]),re=y.useCallback((H,te={})=>{const Ne=ow(H||"/");te.replace?window.history.replaceState(null,"",Ne):window.history.pushState(null,"",Ne),ge(Ne)},[ge]),X=()=>{k("features"),re("/",{replace:!0})},ne=()=>{const H={strictlyNecessary:!0,functional:!0,analytics:!0,marketing:!0};$(H),localStorage.setItem("cookieConsent",JSON.stringify(H)),I(!1),qi.success("Cookie preferences saved")},A=()=>{const H={strictlyNecessary:!0,functional:!1,analytics:!1,marketing:!1};$(H),localStorage.setItem("cookieConsent",JSON.stringify(H)),I(!1),qi.success("Cookie preferences saved")},Z=()=>{I(!1),j(!0)},Y=H=>{$(H),localStorage.setItem("cookieConsent",JSON.stringify(H)),qi.success("Cookie preferences saved")},R=()=>{I(!1),re("/cookie-policy")},V=()=>{re("/",{replace:!0})},q=()=>{re("/",{replace:!0})},K=()=>{re("/help-center")},se=H=>{const te=n!=="wireframe";te&&re("/"),setTimeout(()=>{const ue=document.getElementById("pricing");if(ue){const Se=f==="mobile"?56:48,et=localStorage.getItem("banner-dismissed")==="true"?64:64+Se,Ut=ue.getBoundingClientRect().top+window.pageYOffset-et;window.scrollTo({top:Ut,behavior:"smooth"}),H&&setTimeout(()=>{const it=document.querySelector(`[data-pricing-card="${H}"]`);it&&(it.classList.add("pricing-card-highlight"),setTimeout(()=>{it.classList.remove("pricing-card-highlight")},1500))},300)}},te?150:0)},de=H=>{v(H),localStorage.setItem("locale",H)};y.useEffect(()=>{T.current=N},[N]),y.useEffect(()=>{document.title=`INVITI - ${Ge(w).hero.title}`;const H=new URL("/INVITI-Website/assets/favicon-D7u1khlg.webp",import.meta.url).href;let te=document.querySelector("link[rel='icon']");te||(te=document.createElement("link"),te.setAttribute("rel","icon"),document.head.appendChild(te)),te.setAttribute("type","image/svg+xml"),te.setAttribute("href",H)},[w]),y.useEffect(()=>{ge(Jf()||"/");const H=()=>ge(Jf()||"/");return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[ge]),y.useEffect(()=>{if(b.current){b.current=!1,l(n);return}d("fading-out");const H=setTimeout(()=>{l(n),T.current||window.scrollTo({top:0,behavior:"smooth"}),d("fading-in")},200),te=setTimeout(()=>{d("idle")},400);return()=>{clearTimeout(H),clearTimeout(te)}},[n]),y.useEffect(()=>{if(N&&n==="wireframe"){const H=setTimeout(()=>{const te=document.getElementById(N);if(te){const Ne=f==="mobile"?56:48,Fe=localStorage.getItem("banner-dismissed")==="true"?64:64+Ne,Wt=te.getBoundingClientRect().top+window.pageYOffset-Fe;window.scrollTo({top:Wt,behavior:"smooth"}),k("")}else console.warn(`Section ${N} not found`),k("")},350);return()=>clearTimeout(H)}},[N,n,f]);const W=o;return a.jsxs("div",{className:`min-h-screen page-transition ${c}`,children:[W==="help-center"?a.jsx("div",{className:"flex justify-center pt-8",children:a.jsx("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:a.jsx(Bx,{locale:w,isMobile:f==="mobile",onBack:q,onNavigate:re,onLocaleChange:de,onScrollToPricing:se,onSetScrollTarget:k})})}):W==="instruction"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:a.jsx(sw,{locale:w,isMobile:f==="mobile",onNavigate:re,onLocaleChange:de,onScrollToPricing:se,onSetScrollTarget:k})})}):W==="cookie-policy"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:a.jsx(wx,{onBack:V,onManagePreferences:Z,isMobile:f==="mobile"})})}):W==="blog"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:a.jsx(_w,{locale:w,isMobile:f==="mobile",onNavigate:re,onLocaleChange:de,onScrollToPricing:se,onSetScrollTarget:k})})}):W==="blog-post"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:a.jsx(Rw,{locale:w,isMobile:f==="mobile",onNavigate:re,onLocaleChange:de,onScrollToPricing:se,onSetScrollTarget:k})})}):W==="booking"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsx("div",{className:`${le[f]} w-full transition-all duration-300 bg-white border-2 border-gray-400 shadow-lg overflow-hidden`,children:a.jsx(xk,{locale:w,isMobile:f==="mobile",onNavigate:re,onLocaleChange:de,onScrollToPricing:se,onSetScrollTarget:k})})}):W==="feature"&&h?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:[a.jsx(dn,{isMobile:f==="mobile",locale:w,onLocaleChange:de,onNavigateToHelpCenter:K,onNavigate:re,onSetScrollTarget:k,showBanner:!1}),a.jsx("div",{className:"mt-32",children:a.jsx(Pk,{featureId:h,isMobile:f==="mobile",locale:w,onBack:X,onNavigate:re})}),a.jsx(fn,{isMobile:f==="mobile",locale:w,onNavigate:re,onNavigateToHelpCenter:K})]})}):W==="about"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:[a.jsx(dn,{isMobile:f==="mobile",locale:w,onLocaleChange:de,onNavigateToHelpCenter:K,onNavigate:re,onSetScrollTarget:k,showBanner:!1}),a.jsx("div",{className:"mt-32",children:a.jsx(wk,{title:Ge(w).about.title,subtitle:Ge(w).about.subtitle,sections:[{body:Ge(w).about.section1Body},{body:Ge(w).about.section2Body},{body:Ge(w).about.section3Body}],isMobile:f==="mobile"})}),a.jsx(fn,{isMobile:f==="mobile",locale:w,onNavigate:re,onNavigateToHelpCenter:K})]})}):W==="terms"?a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:[a.jsx(dn,{isMobile:f==="mobile",locale:w,onLocaleChange:de,onNavigateToHelpCenter:K,onNavigate:re,onSetScrollTarget:k,showBanner:!1}),a.jsx("div",{className:"mt-32",children:a.jsx(Nk,{title:Ge(w).terms.title,subtitle:Ge(w).terms.subtitle,isMobile:f==="mobile"})}),a.jsx(fn,{isMobile:f==="mobile",locale:w,onNavigate:re,onNavigateToHelpCenter:K})]})}):a.jsx("div",{className:"flex justify-center pt-12",children:a.jsxs("div",{className:`${le[f]} w-full transition-all duration-300 bg-white overflow-hidden`,children:[f==="mobile"&&a.jsx("div",{className:"bg-yellow-50 border-b-2 border-yellow-300 px-6 py-3",children:a.jsxs("p",{className:"text-xs text-gray-700",children:[a.jsx("strong",{children:"Mobile rules applied:"})," Fixed width text (343px), auto height, no clipping, 1-col stacks, 24px side padding."]})}),a.jsxs("div",{className:"locale-transition",children:[a.jsx(dn,{isMobile:f==="mobile",locale:w,onLocaleChange:de,onNavigateToHelpCenter:K,onNavigate:re,onSetScrollTarget:k,showBanner:!0,onBannerAction:()=>re("/booking")}),a.jsx(u0,{isMobile:f==="mobile",locale:w,onNavigate:re}),a.jsx(f0,{isMobile:f==="mobile",onNavigate:re,locale:w}),a.jsx(E0,{isMobile:f==="mobile",locale:w,onNavigate:re}),a.jsx(fn,{isMobile:f==="mobile",locale:w,onNavigate:re,onNavigateToHelpCenter:K})]},w)]})}),W==="wireframe"&&C&&a.jsx(T0,{isMobile:f==="mobile",onAcceptAll:ne,onRejectNonEssential:A,onManagePreferences:Z,onViewPolicy:R,locale:w}),a.jsx(yx,{isOpen:S,onClose:()=>j(!1),preferences:M,onSave:Y,isMobile:f==="mobile"}),a.jsx(yb,{isOpen:z,onClose:()=>L(!1),selectedPlan:F,isMobile:f==="mobile",locale:w,onNavigate:re,onScrollToPricing:()=>se()}),a.jsx(vk,{isOpen:ae,onClose:()=>be(!1),locale:w,isMobile:f==="mobile"}),a.jsx(Ub,{position:"top-center"})]})}hy.createRoot(document.getElementById("root")).render(a.jsx(_k,{}));
