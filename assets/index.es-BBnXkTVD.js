import{r as Y,i as En,y as In,j as G,b as Ht,f as Gt,c as je,g as Cn,o as Tn,N as Nn,M as De}from"./index-Bng6fhKM.js";function _n(t){return Y.Children.toArray(t).filter(e=>Y.isValidElement(e))}const Fn=Object.freeze(["base","sm","md","lg","xl","2xl"]);function Mn(t,e){return Array.isArray(t)?t.map(n=>n===null?null:e(n)):En(t)?Object.keys(t).reduce((n,a)=>(n[a]=e(t[a]),n),{}):t!=null?e(t):null}function ai(t,e=Fn){const n={};return t.forEach((a,r)=>{const i=e[r];a!=null&&(n[i]=a)}),n}var gt={exports:{}},ht,re;function Ln(){if(re)return ht;re=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ht=t,ht}var yt,ie;function Rn(){if(ie)return yt;ie=1;var t=Ln();function e(){}function n(){}return n.resetWarningCache=e,yt=function(){function a(o,s,c,f,d,p){if(p!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},yt}var oe;function jn(){return oe||(oe=1,gt.exports=Rn()()),gt.exports}var Dn=jn();const g=In(Dn),ze=t=>G.jsx(Ht.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});ze.displayName="StackItem";function zn(t){const{spacing:e,direction:n}=t,a={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Mn(n,r=>a[r])}}const We=Gt((t,e)=>{const{isInline:n,direction:a,align:r,justify:i,spacing:o="0.5rem",wrap:s,children:c,divider:f,className:d,shouldWrapChildren:p,...m}=t,b=n?"row":a??"column",k=Y.useMemo(()=>zn({spacing:o,direction:b}),[o,b]),w=!!f,y=!p&&!w,x=Y.useMemo(()=>{const A=_n(c);return y?A:A.map((P,S)=>{const nt=typeof P.key<"u"?P.key:S,V=S+1===A.length,ae=p?G.jsx(ze,{children:P},nt):P;if(!w)return ae;const Pn=Y.cloneElement(f,{__css:k}),Sn=V?null:Pn;return G.jsxs(Y.Fragment,{children:[ae,Sn]},nt)})},[f,k,w,y,p,c]),v=je("chakra-stack",d);return G.jsx(Ht.div,{ref:e,display:"flex",alignItems:r,justifyContent:i,flexDirection:b,flexWrap:s,gap:w?void 0:o,className:v,...m,children:x})});We.displayName="Stack";const Wn=Gt((t,e)=>G.jsx(We,{align:"center",...t,direction:"row",ref:e}));Wn.displayName="HStack";const Yn=Gt(function(e,n){const a=Cn("Text",e),{className:r,align:i,decoration:o,casing:s,...c}=Tn(e),f=Nn({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return G.jsx(Ht.p,{ref:n,className:je("chakra-text",e.className),...f,...c,__css:a})});Yn.displayName="Text";/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Un(t,e,n){return(e=Gn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?se(Object(n),!0).forEach(function(a){Un(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Hn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Gn(t){var e=Hn(t,"string");return typeof e=="symbol"?e:e+""}const le=()=>{};let Xt={},Ye={},Ue=null,He={mark:le,measure:le};try{typeof window<"u"&&(Xt=window),typeof document<"u"&&(Ye=document),typeof MutationObserver<"u"&&(Ue=MutationObserver),typeof performance<"u"&&(He=performance)}catch{}const{userAgent:fe=""}=Xt.navigator||{},L=Xt,h=Ye,ce=Ue,at=He;L.document;const F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ge=~fe.indexOf("MSIE")||~fe.indexOf("Trident/");var Xn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,$n=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Bn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],O="classic",ct="duotone",Vn="sharp",qn="sharp-duotone",Be=[O,ct,Vn,qn],Kn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Qn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Jn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Zn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ta=["fak","fa-kit","fakd","fa-kit-duotone"],ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ea=["kit"],na={kit:{"fa-kit":"fak"}},aa=["fak","fakd"],ra={kit:{fak:"fa-kit"}},de={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ia=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],oa=["fak","fa-kit","fakd","fa-kit-duotone"],sa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},la={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},fa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ot={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ca=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Pt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ia,...ca],ua=["solid","regular","light","thin","duotone","brands"],Ve=[1,2,3,4,5,6,7,8,9,10],da=Ve.concat([11,12,13,14,15,16,17,18,19,20]),ma=[...Object.keys(fa),...ua,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY].concat(Ve.map(t=>"".concat(t,"x"))).concat(da.map(t=>"w-".concat(t))),pa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const N="___FONT_AWESOME___",St=16,qe="fa",Ke="svg-inline--fa",z="data-fa-i2svg",Et="data-fa-pseudo-element",ga="data-fa-pseudo-element-pending",$t="data-prefix",Bt="data-icon",me="fontawesome-i2svg",ha="async",ya=["HTML","HEAD","STYLE","SCRIPT"],Qe=(()=>{try{return!0}catch{return!1}})();function tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const Je=l({},Xe);Je[O]=l(l(l(l({},{"fa-duotone":"duotone"}),Xe[O]),ue.kit),ue["kit-duotone"]);const ba=tt(Je),It=l({},Zn);It[O]=l(l(l(l({},{duotone:"fad"}),It[O]),de.kit),de["kit-duotone"]);const pe=tt(It),Ct=l({},Ot);Ct[O]=l(l({},Ct[O]),ra.kit);const Vt=tt(Ct),Tt=l({},la);Tt[O]=l(l({},Tt[O]),na.kit);tt(Tt);const va=Xn,Ze="fa-layers-text",xa=$n,Aa=l({},Kn);tt(Aa);const ka=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt=Bn,wa=[...ea,...ma],K=L.FontAwesomeConfig||{};function Oa(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Pa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Pa(Oa(n));r!=null&&(K[a]=r)});const tn={styleDefault:"solid",familyDefault:O,cssPrefix:qe,replacementClass:Ke,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);const $=l(l({},tn),K);$.autoReplaceSvg||($.observeMutations=!1);const u={};Object.keys(tn).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){$[t]=e,Q.forEach(n=>n(u))},get:function(){return $[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){$.cssPrefix=t,Q.forEach(e=>e(u))},get:function(){return $.cssPrefix}});L.FontAwesomeConfig=u;const Q=[];function Sa(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}const M=St,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ea(t){if(!t||!F)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}const Ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let t=12,e="";for(;t-- >0;)e+=Ia[Math.random()*62|0];return e}function B(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function qt(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function en(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ca(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(en(t[n]),'" '),"").trim()}function ut(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Kt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function Ta(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Na(t){let{transform:e,width:n=St,height:a=St,startCentered:r=!1}=t,i="";return r&&Ge?i+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):i+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),i+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var _a=`:root, :host {
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
}`;function nn(){const t=qe,e=Ke,n=u.cssPrefix,a=u.replacementClass;let r=_a;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ge=!1;function vt(){u.autoAddCss&&!ge&&(Ea(nn()),ge=!0)}var Fa={mixout(){return{dom:{css:nn,insertCss:vt}}},hooks(){return{beforeDOMElementCreation(){vt()},beforeI2svg(){vt()}}}};const _=L||{};_[N]||(_[N]={});_[N].styles||(_[N].styles={});_[N].hooks||(_[N].hooks={});_[N].shims||(_[N].shims=[]);var T=_[N];const an=[],rn=function(){h.removeEventListener("DOMContentLoaded",rn),st=1,an.map(t=>t())};let st=!1;F&&(st=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),st||h.addEventListener("DOMContentLoaded",rn));function Ma(t){F&&(st?setTimeout(t,0):an.push(t))}function et(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?en(t):"<".concat(e," ").concat(Ca(n),">").concat(a.map(et).join(""),"</").concat(e,">")}function he(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var xt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,c,f,d;for(a===void 0?(c=1,d=e[i[0]]):(c=0,d=a);c<o;c++)f=i[c],d=s(d,e[f],f,e);return d};function La(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Nt(t){const e=La(t);return e.length===1?e[0].toString(16):null}function Ra(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ye(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function _t(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ye(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,ye(e)):T.styles[t]=l(l({},T.styles[t]||{}),r),t==="fas"&&_t("fa",e)}const{styles:Z,shims:ja}=T,on=Object.keys(Vt),Da=on.reduce((t,e)=>(t[e]=Object.keys(Vt[e]),t),{});let Qt=null,sn={},ln={},fn={},cn={},un={};function za(t){return~wa.indexOf(t)}function Wa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!za(r)?r:null}const dn=()=>{const t=a=>xt(Z,(r,i,o)=>(r[o]=xt(i,a,{}),r),{});sn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),ln=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),un=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in Z||u.autoFetchSvg,n=xt(ja,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});fn=n.names,cn=n.unicodes,Qt=dt(u.styleDefault,{family:u.familyDefault})};Sa(t=>{Qt=dt(t.styleDefault,{family:u.familyDefault})});dn();function Jt(t,e){return(sn[t]||{})[e]}function Ya(t,e){return(ln[t]||{})[e]}function D(t,e){return(un[t]||{})[e]}function mn(t){return fn[t]||{prefix:null,iconName:null}}function Ua(t){const e=cn[t],n=Jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Qt}const pn=()=>({prefix:null,iconName:null,rest:[]});function Ha(t){let e=O;const n=on.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return Be.forEach(a=>{(t.includes(n[a])||t.some(r=>Da[a].includes(r)))&&(e=a)}),e}function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,a=ba[n][t];if(n===ct&&!t)return"fad";const r=pe[n][t]||pe[n][a],i=t in T.styles?t:null;return r||i||null}function Ga(t){let e=[],n=null;return t.forEach(a=>{const r=Wa(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function be(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Pt.concat(oa),i=be(t.filter(p=>r.includes(p))),o=be(t.filter(p=>!Pt.includes(p))),s=i.filter(p=>(a=p,!$e.includes(p))),[c=null]=s,f=Ha(i),d=l(l({},Ga(o)),{},{prefix:dt(c,{family:f})});return l(l(l({},d),Va({values:t,family:f,styles:Z,config:u,canonical:d,givenPrefix:a})),Xa(n,a,d))}function Xa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?mn(r):{},o=D(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!Z.far&&Z.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const $a=Be.filter(t=>t!==O||t!==ct),Ba=Object.keys(Ot).filter(t=>t!==O).map(t=>Object.keys(Ot[t])).flat();function Va(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===ct,c=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(c||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&$a.includes(n)&&(Object.keys(i).find(m=>Ba.includes(m))||o.autoFetchSvg)){const m=Jn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=D(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class qa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),_t(i,r[i]);const o=Vt[O][i];o&&_t(o,r[i]),dn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],c=s[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}}let ve=[],U={};const X={},Ka=Object.keys(X);function Qa(t,e){let{mixoutsTo:n}=e;return ve=t,U={},Object.keys(X).forEach(a=>{Ka.indexOf(a)===-1&&delete X[a]}),ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{U[o]||(U[o]=[]),U[o].push(i[o])})}a.provides&&a.provides(X)}),n}function Ft(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(U[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(U[t]||[]).forEach(i=>{i.apply(null,n)})}function j(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,e):void 0}function Mt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=D(n,e)||e,he(gn.definitions,n,e)||he(T.styles,n,e)}const gn=new qa,Ja=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,W("noAuto")},Za={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(W("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Ma(()=>{er({autoReplaceSvgRoot:e}),W("watch",t)})}},tr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=dt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(va))){const e=mt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:D(e,t)||t}}}},E={noAuto:Ja,config:u,dom:Za,parse:tr,library:gn,findIconDefinition:Mt,toHtml:et},er=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(T.styles).length>0||u.autoFetchSvg)&&F&&u.autoReplaceSvg&&E.dom.i2svg({node:e})};function pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>et(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function nr(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Kt(o)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};r.style=ut(l(l({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ar(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Zt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:f,extra:d,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,k=aa.includes(a),w=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(S=>d.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(d.classes).join(" ");let y={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const x=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(y.attributes[z]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||J())},children:[s]}),delete y.attributes.title);const v=l(l({},y),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:l(l({},x),d.styles)}),{children:A,attributes:P}=n.found&&e.found?j("generateAbstractMask",v)||{children:[],attributes:{}}:j("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=P,o?ar(v):nr(v)}function xe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,c=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[z]="");const f=l({},o.styles);Kt(r)&&(f.transform=Na({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=ut(f);d.length>0&&(c.style=d);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function rr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ut(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:At}=T;function Lt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const ir={found:!1,width:512,height:512};function or(t,e){!Qe&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=mn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&At[e]&&At[e][t]){const i=At[e][t];return a(Lt(i))}or(t,e),a(l(l({},ir),{},{icon:u.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}const Ae=()=>{},jt=u.measurePerformance&&at&&at.mark&&at.measure?at:{mark:Ae,measure:Ae},q='FA "6.7.1"',sr=t=>(jt.mark("".concat(q," ").concat(t," begins")),()=>hn(t)),hn=t=>{jt.mark("".concat(q," ").concat(t," ends")),jt.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))};var te={begin:sr,end:hn};const it=()=>{};function ke(t){return typeof(t.getAttribute?t.getAttribute(z):null)=="string"}function lr(t){const e=t.getAttribute?t.getAttribute($t):null,n=t.getAttribute?t.getAttribute(Bt):null;return e&&n}function fr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function cr(){return u.autoReplaceSvg===!0?ot.replace:ot[u.autoReplaceSvg]||ot.replace}function ur(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function dr(t){return h.createElement(t)}function yn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ur:dr}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(yn(i,{ceFn:n}))}),a}function mr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ot={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yn(n),e)}),e.getAttribute(z)===null&&u.keepOriginalSource){let n=h.createComment(mr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~qt(e).indexOf(u.replacementClass))return ot.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===u.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>et(i)).join(`
`);e.setAttribute(z,""),e.innerHTML=r}};function we(t){t()}function bn(t,e){const n=typeof e=="function"?e:it;if(t.length===0)n();else{let a=we;u.mutateApproach===ha&&(a=L.requestAnimationFrame||we),a(()=>{const r=cr(),i=te.begin("mutate");t.map(r),i(),n()})}}let ee=!1;function vn(){ee=!0}function Dt(){ee=!1}let lt=null;function Oe(t){if(!ce||!u.observeMutations)return;const{treeCallback:e=it,nodeCallback:n=it,pseudoElementsCallback:a=it,observeMutationsRoot:r=h}=t;lt=new ce(i=>{if(ee)return;const o=R();B(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!ke(s.addedNodes[0])&&(u.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&ke(s.target)&&~ka.indexOf(s.attributeName))if(s.attributeName==="class"&&lr(s.target)){const{prefix:c,iconName:f}=mt(qt(s.target));s.target.setAttribute($t,c||o),f&&s.target.setAttribute(Bt,f)}else fr(s.target)&&n(s.target)})}),F&&lt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function pr(){lt&&lt.disconnect()}function gr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function hr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=mt(qt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ya(r.prefix,t.innerText)||Jt(r.prefix,Nt(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function yr(t){const e=B(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||J()):(e["aria-hidden"]="true",e.focusable="false")),e}function br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=hr(t),i=yr(t),o=Ft("parseNodeAttributes",{},t);let s=e.styleParser?gr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:vr}=T;function xn(t){const e=u.autoReplaceSvg==="nest"?Pe(t,{styleParser:!1}):Pe(t);return~e.extra.classes.indexOf(Ze)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}function xr(){return[...ta,...Pt]}function Se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=h.documentElement.classList,a=d=>n.add("".concat(me,"-").concat(d)),r=d=>n.remove("".concat(me,"-").concat(d)),i=u.autoFetchSvg?xr():$e.concat(Object.keys(vr));i.includes("fa")||i.push("fa");const o=[".".concat(Ze,":not([").concat(z,"])")].concat(i.map(d=>".".concat(d,":not([").concat(z,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=B(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=te.begin("onTree"),f=s.reduce((d,p)=>{try{const m=xn(p);m&&d.push(m)}catch(m){Qe||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{bn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),d()})}).catch(m=>{c(),p(m)})})}function Ar(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xn(t).then(n=>{n&&bn([n],e)})}function kr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Mt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Mt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const wr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:b}=t;return pt(l({type:"icon"},t),()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(o?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||J()):(f["aria-hidden"]="true",f.focusable="false")),Zt({icons:{main:Lt(b),mask:r?Lt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},C),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:d,classes:c}})))};var Or={mixout(){return{icon:kr(wr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Se,t.nodeCallback=Ar,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return Se(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:c,mask:f,maskId:d,extra:p}=n;return new Promise((m,b)=>{Promise.all([Rt(a,o),f.iconName?Rt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[w,y]=k;m([e,Zt({icons:{main:w,mask:y},prefix:o,iconName:a,transform:s,symbol:c,maskId:d,title:r,titleId:i,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ut(o);s.length>0&&(a.style=s);let c;return Kt(i)&&(c=j("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Pr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pt({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Sr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return pt({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),rr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},Er={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return pt({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),xe({content:t,transform:l(l({},C),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(Ge){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,s=f.height/c}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,xe({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Ir=new RegExp('"',"ug"),Ee=[1105920,1112319],Ie=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Qn),pa),sa),zt=Object.keys(Ie).reduce((t,e)=>(t[e.toLowerCase()]=Ie[e],t),{}),Cr=Object.keys(zt).reduce((t,e)=>{const n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Tr(t){const e=t.replace(Ir,""),n=Ra(e,0),a=n>=Ee[0]&&n<=Ee[1],r=e.length===2?e[0]===e[1]:!1;return{value:Nt(r?e[0]:e),isSecondary:a||r}}function Nr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(zt[n]||{})[r]||Cr[n]}function Ce(t,e){const n="".concat(ga).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=B(t.children).filter(m=>m.getAttribute(Et)===e)[0],s=L.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(xa),d=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){const m=s.getPropertyValue("content");let b=Nr(c,d);const{value:k,isSecondary:w}=Tr(m),y=f[0].startsWith("FontAwesome");let x=Jt(b,k),v=x;if(y){const A=Ua(k);A.iconName&&A.prefix&&(x=A.iconName,b=A.prefix)}if(x&&!w&&(!o||o.getAttribute($t)!==b||o.getAttribute(Bt)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const A=br(),{extra:P}=A;P.attributes[Et]=e,Rt(x,b).then(S=>{const nt=Zt(l(l({},A),{},{icons:{main:S,mask:pn()},prefix:b,iconName:v,extra:P,watchable:!0})),V=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=nt.map(ne=>et(ne)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function _r(t){return Promise.all([Ce(t,"::before"),Ce(t,"::after")])}function Fr(t){return t.parentNode!==document.head&&!~ya.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Te(t){if(F)return new Promise((e,n)=>{const a=B(t.querySelectorAll("*")).filter(Fr).map(_r),r=te.begin("searchPseudoElements");vn(),Promise.all(a).then(()=>{r(),Dt(),e()}).catch(()=>{r(),Dt(),n()})})}var Mr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Te,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;u.searchPseudoElements&&Te(n)}}};let Ne=!1;var Lr={mixout(){return{dom:{unwatch(){vn(),Ne=!0}}}},hooks(){return{bootstrap(){Oe(Ft("mutationObserverCallbacks",{}))},noAuto(){pr()},watch(t){const{observeMutationsRoot:e}=t;Ne?Dt():Oe(Ft("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const _e=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Rr={mixout(){return{parse:{transform:t=>_e(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=_e(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(c," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const kt={x:0,y:0,width:"100%",height:"100%"};function Fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jr(t){return t.tag==="g"?t.children:[t]}var Dr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?mt(n.split(" ").map(r=>r.trim())):pn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:c,icon:f}=r,{width:d,icon:p}=i,m=Ta({transform:s,containerWidth:d,iconWidth:c}),b={tag:"rect",attributes:l(l({},kt),{},{fill:"white"})},k=f.children?{children:f.children.map(Fe)}:{},w={tag:"g",attributes:l({},m.inner),children:[Fe(l({tag:f.tag,attributes:l(l({},f.attributes),m.path)},k))]},y={tag:"g",attributes:l({},m.outer),children:[w]},x="mask-".concat(o||J()),v="clip-".concat(o||J()),A={tag:"mask",attributes:l(l({},kt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,y]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:jr(p)},A]};return n.push(P,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},kt)}),{children:n,attributes:a}}}},zr={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Wr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Yr=[Fa,Or,Pr,Sr,Er,Mr,Lr,Rr,Dr,zr,Wr];Qa(Yr,{mixoutsTo:E});E.noAuto;E.config;E.library;E.dom;const Wt=E.parse;E.findIconDefinition;E.toHtml;const Ur=E.icon;E.layer;E.text;E.counter;function Me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Me(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(t)}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Gr(t,e){if(t==null)return{};var n=Hr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Yt(t){return Xr(t)||$r(t)||Br(t)||Vr()}function Xr(t){if(Array.isArray(t))return Ut(t)}function $r(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Br(t,e){if(t){if(typeof t=="string")return Ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(t,e)}}function Ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,c=t.spin,f=t.spinPulse,d=t.spinReverse,p=t.pulse,m=t.fixedWidth,b=t.inverse,k=t.border,w=t.listItem,y=t.flip,x=t.size,v=t.rotation,A=t.pull,P=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":m,"fa-inverse":b,"fa-border":k,"fa-li":w,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},H(e,"fa-".concat(x),typeof x<"u"&&x!==null),H(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),H(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),H(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(P).map(function(S){return P[S]?S:null}).filter(function(S){return S})}function Kr(t){return t=t-0,t===t}function An(t){return Kr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Qr=["style"];function Jr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Zr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=An(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Jr(r)]=i:e[r]=i,e},{})}function kn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return kn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var d=e.attributes[f];switch(f){case"class":c.attrs.className=d,delete e.attributes.class;break;case"style":c.attrs.style=Zr(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=d:c.attrs[An(f)]=d}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Gr(n,Qr);return r.attrs.style=I(I({},r.attrs.style),o),t.apply(void 0,[e.tag,I(I({},r.attrs),s)].concat(Yt(a)))}var wn=!1;try{wn=!0}catch{}function ti(){if(!wn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Le(t){if(t&&ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wt.icon)return Wt.icon(t);if(t===null)return null;if(t&&ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function wt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}var Re={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},On=De.forwardRef(function(t,e){var n=I(I({},Re),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,f=n.maskId,d=Le(a),p=wt("classes",[].concat(Yt(qr(n)),Yt((o||"").split(" ")))),m=wt("transform",typeof n.transform=="string"?Wt.transform(n.transform):n.transform),b=wt("mask",Le(r)),k=Ur(d,I(I(I(I({},p),m),b),{},{symbol:i,title:s,titleId:c,maskId:f}));if(!k)return ti("Could not find icon",d),null;var w=k.abstract,y={ref:e};return Object.keys(n).forEach(function(x){Re.hasOwnProperty(x)||(y[x]=n[x])}),ei(w[0],y)});On.displayName="FontAwesomeIcon";On.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var ei=kn.bind(null,De.createElement);export{On as F,Wn as H,We as S,Yn as T,ai as a,Fn as b,Mn as m};
