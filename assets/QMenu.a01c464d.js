import{P as ye,r as P,M as be,O as _,R as pe,S as U,w as C,o as we,p as O,g as ae,U as Te,V as K,W as Z,X as Ee,Y as Se,k as Ce,Z as He,I as ke,_ as Me,$ as We,a0 as Pe,c as S,K as qe,a1 as Be,a2 as Le,a3 as Ae,a4 as Re,a5 as ze,a6 as $e,a7 as Fe,a8 as Ke,a9 as G,aa as De,ab as Oe,h as J,l as je,ac as Qe,ad as Ve,ae as Ie,af as Ne,N as Xe}from"./index.3fbf0e5b.js";function Ye(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ye.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const _e={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Ue={..._e,contextMenu:Boolean};function Ze({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:c}=ae(),i=P(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),_(a),pe(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:_,mobileTouch(a){if(s.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const r=a.target;U(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Ye()}}),o=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let r;a===!0?l.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],U(s,"anchor",r)});function d(){Te(s,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)g(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,a=>{i.value!==null&&(d(),o(a))}),C(()=>t.target,()=>{i.value!==null&&d(),x()}),C(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),we(()=>{x(),n!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),O(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:s}}function Ge(e,n){const o=P(null);let t;function l(f,h){const s=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[s]("scroll",d,K.passive),window[s]("scroll",d,K.passive),t=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=C(()=>e.noParentEvent,()=>{o.value!==null&&(c(),n())});return O(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:q}=K,T=[];function B(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=Z.length-1;for(;o>=0;){const t=Z[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=T.length-1;t>=0;t--){const l=T[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Je(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",B,q),document.addEventListener("touchstart",B,q))}function ee(e){const n=T.findIndex(o=>o===e);n!==-1&&(T.splice(n,1),T.length===0&&(document.removeEventListener("mousedown",B,q),document.removeEventListener("touchstart",B,q)))}let te,ne;function oe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const D={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{D[`${e}#ltr`]=e,D[`${e}#rtl`]=e});function le(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:D[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function tt(e,n){let{top:o,left:t,right:l,bottom:c,width:i,height:f}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],c+=n[1],l+=n[0],i+=n[0],f+=n[1]),{top:o,bottom:c,height:f,left:t,right:l,width:i,middle:t+(l-t)/2,center:o+(c-o)/2}}function nt(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function ot(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ie(e,n,o,t){return{top:e[o.vertical]-n[t.vertical],left:e[o.horizontal]-n[t.horizontal]}}function ue(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ue(e,n+1)},10);return}const{targetEl:o,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:s,maxHeight:d,maxWidth:g}=e;if(Ee.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:y,offsetTop:b}=window.visualViewport;y!==te&&(E.setProperty("--q-pe-left",y+"px"),te=y),b!==ne&&(E.setProperty("--q-pe-top",b+"px"),ne=b)}const{scrollLeft:x,scrollTop:a}=o,r=f===void 0?tt(l,s===!0?[0,0]:t):nt(l,f,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:M,offsetHeight:H}=o,{elWidth:W,elHeight:L}=h===!0||s===!0?{elWidth:Math.max(r.width,M),elHeight:s===!0?Math.max(r.height,H):H}:{elWidth:M,elHeight:H};let v={maxWidth:g,maxHeight:d};(h===!0||s===!0)&&(v.minWidth=r.width+"px",s===!0&&(v.minHeight=r.height+"px")),Object.assign(o.style,v);const p=ot(W,L);let m=ie(r,p,c,i);if(f===void 0||t===void 0)F(m,r,p,c,i);else{const{top:E,left:y}=m;F(m,r,p,c,i);let b=!1;if(m.top!==E){b=!0;const w=2*t[1];r.center=r.top-=w,r.bottom-=w+2}if(m.left!==y){b=!0;const w=2*t[0];r.middle=r.left-=w,r.right-=w+2}b===!0&&(m=ie(r,p,c,i),F(m,r,p,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(o.style,v),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==x&&(o.scrollLeft=x)}function F(e,n,o,t,l){const c=o.bottom,i=o.right,f=Se(),h=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(n[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),l.horizontal==="middle")e.left=n[t.horizontal]>s/2?Math.max(0,s-i):0;else if(n[t.horizontal]>s/2){const d=Math.min(s,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,s-e.left)}var it=Ce({name:"QMenu",inheritAttrs:!1,props:{...Ue,...He,...ke,...Me,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:et},scrollTarget:We,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pe,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let l=null,c,i,f;const h=ae(),{proxy:s}=h,{$q:d}=s,g=P(null),x=P(!1),a=S(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=qe(e,d),{registerTick:M,removeTick:H}=Be(),{registerTimeout:W}=Le(),{transitionProps:L,transitionStyle:v}=Ae(e),{localScrollTarget:p,changeScrollEvent:m,unconfigureScrollTarget:E}=Ge(e,X),{anchorEl:y,canShow:b}=Ze({showing:x}),{hide:w}=Re({showing:x,canShow:b,handleShow:fe,handleHide:he,hideOnRouteChange:a,processOnMount:!0}),{showPortal:j,hidePortal:Q,renderPortal:re}=ze(h,g,ve,"menu"),A={anchorEl:y,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Xe(u),!0}},V=S(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),se=S(()=>e.cover===!0?V.value:le(e.self||"top start",d.lang.rtl)),ce=S(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),de=S(()=>e.autoClose===!0?{onClick:me}:{}),I=S(()=>x.value===!0&&e.persistent!==!0);C(I,u=>{u===!0?(Ve(z),Je(A)):(G(z),ee(A))});function R(){Ie(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function fe(u){if(l=e.noRefocus===!1?document.activeElement:null,$e(Y),j(),X(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const $=Fe(u);if($.left!==void 0){const{top:ge,left:xe}=y.value.getBoundingClientRect();c={left:$.left-xe,top:$.top-ge}}}i===void 0&&(i=C(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{k(),e.noFocus!==!0&&R()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),k(),j(!0),o("show",u)},e.transitionDuration)}function he(u){H(),Q(),N(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),W(()=>{Q(!0),o("hide",u)},e.transitionDuration)}function N(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(Ke(Y),E(),ee(A),G(z)),u!==!0&&(l=null)}function X(){(y.value!==null||e.scrollTarget!==void 0)&&(p.value=De(y.value,e.scrollTarget),m(p.value,k))}function me(u){f!==!0?(Oe(s,u),o("click",u)):f=!1}function Y(u){I.value===!0&&e.noFocus!==!0&&Ne(g.value,u.target)!==!0&&R()}function z(u){o("escapeKey"),w(u)}function k(){ue({targetEl:g.value,offset:e.offset,anchorEl:y.value,anchorOrigin:V.value,selfOrigin:se.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(){return J(Qe,L.value,()=>x.value===!0?J("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,t.class],style:[t.style,v.value],...de.value},je(n.default)):null)}return O(N),Object.assign(s,{focus:R,updatePosition:k}),re}});export{it as Q};
