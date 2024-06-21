import{P as ye,r as P,D as pe,E as _,J as be,K as J,w as H,o as we,n as j,g as ae,L as Te,I as D,M as Ee,k as Ce,c as C,N as He,h as U,H as Se,C as ke}from"./index.b598a929.js";import{p as G,u as Me,a as We,b as Pe,c as qe,d as Le,e as Be,f as Ae,g as Re,h as ze,r as Z,i as Fe,j as $e,k as De}from"./focusout.d4592de6.js";import{u as Ke,a as je}from"./use-dark.18156b08.js";import{g as Oe,s as Qe,a as Ie}from"./scroll.f6a52fca.js";import{h as Ve}from"./render.35e06d23.js";import{c as Ne}from"./dom.095c4699.js";import{a as Xe}from"./focus-manager.7cc6c8df.js";function Ye(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ye.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const _e={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Je={..._e,contextMenu:Boolean};function Ue({showing:e,avoidEmit:o,configureAnchorEl:n}){const{props:t,proxy:l,emit:c}=ae(),i=P(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){pe(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),_(a),be(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:_,mobileTouch(a){if(s.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const r=a.target;J(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Ye()}}),n=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let r;a===!0?l.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],J(s,"anchor",r)});function d(){Te(s,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)g(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return H(()=>t.contextMenu,a=>{i.value!==null&&(d(),n(a))}),H(()=>t.target,()=>{i.value!==null&&d(),x()}),H(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():n())}),we(()=>{x(),o!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),j(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:s}}function Ge(e,o){const n=P(null);let t;function l(f,h){const s=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[s]("scroll",d,D.passive),window[s]("scroll",d,D.passive),t=h}function c(){n.value!==null&&(l(n.value),n.value=null)}const i=H(()=>e.noParentEvent,()=>{n.value!==null&&(c(),o())});return j(i),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:q}=D,T=[];function L(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let n=G.length-1;for(;n>=0;){const t=G[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=T.length-1;t>=0;t--){const l=T[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(o)===!1)&&(o===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(o)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ze(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",L,q),document.addEventListener("touchstart",L,q))}function ee(e){const o=T.findIndex(n=>n===e);o!==-1&&(T.splice(o,1),T.length===0&&(document.removeEventListener("mousedown",L,q),document.removeEventListener("touchstart",L,q)))}let te,oe;function ne(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const K={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{K[`${e}#ltr`]=e,K[`${e}#rtl`]=e});function le(e,o){const n=e.split(" ");return{vertical:n[0],horizontal:K[`${n[1]}#${o===!0?"rtl":"ltr"}`]}}function tt(e,o){let{top:n,left:t,right:l,bottom:c,width:i,height:f}=e.getBoundingClientRect();return o!==void 0&&(n-=o[1],t-=o[0],c+=o[1],l+=o[0],i+=o[0],f+=o[1]),{top:n,bottom:c,height:f,left:t,right:l,width:i,middle:t+(l-t)/2,center:n+(c-n)/2}}function ot(e,o,n){let{top:t,left:l}=e.getBoundingClientRect();return t+=o.top,l+=o.left,n!==void 0&&(t+=n[1],l+=n[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function nt(e,o){return{top:0,center:o/2,bottom:o,left:0,middle:e/2,right:e}}function ie(e,o,n,t){return{top:e[n.vertical]-o[t.vertical],left:e[n.horizontal]-o[t.horizontal]}}function ue(e,o=0){if(e.targetEl===null||e.anchorEl===null||o>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ue(e,o+1)},10);return}const{targetEl:n,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:s,maxHeight:d,maxWidth:g}=e;if(Ee.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:y,offsetTop:p}=window.visualViewport;y!==te&&(E.setProperty("--q-pe-left",y+"px"),te=y),p!==oe&&(E.setProperty("--q-pe-top",p+"px"),oe=p)}const{scrollLeft:x,scrollTop:a}=n,r=f===void 0?tt(l,s===!0?[0,0]:t):ot(l,f,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:M,offsetHeight:S}=n,{elWidth:W,elHeight:B}=h===!0||s===!0?{elWidth:Math.max(r.width,M),elHeight:s===!0?Math.max(r.height,S):S}:{elWidth:M,elHeight:S};let v={maxWidth:g,maxHeight:d};(h===!0||s===!0)&&(v.minWidth=r.width+"px",s===!0&&(v.minHeight=r.height+"px")),Object.assign(n.style,v);const b=nt(W,B);let m=ie(r,b,c,i);if(f===void 0||t===void 0)$(m,r,b,c,i);else{const{top:E,left:y}=m;$(m,r,b,c,i);let p=!1;if(m.top!==E){p=!0;const w=2*t[1];r.center=r.top-=w,r.bottom-=w+2}if(m.left!==y){p=!0;const w=2*t[0];r.middle=r.left-=w,r.right-=w+2}p===!0&&(m=ie(r,b,c,i),$(m,r,b,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==x&&(n.scrollLeft=x)}function $(e,o,n,t,l){const c=n.bottom,i=n.right,f=Oe(),h=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=o[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(o[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?o.center:t.vertical===l.vertical?o.bottom:o.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===l.vertical?o.top:o.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),l.horizontal==="middle")e.left=o[t.horizontal]>s/2?Math.max(0,s-i):0;else if(o[t.horizontal]>s/2){const d=Math.min(s,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.right:o.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.left:o.right),e.maxWidth=Math.min(i,s-e.left)}var dt=Ce({name:"QMenu",inheritAttrs:!1,props:{...Je,...Me,...Ke,...We,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ne},self:{type:String,validator:ne},offset:{type:Array,validator:et},scrollTarget:Qe,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pe,"click","escapeKey"],setup(e,{slots:o,emit:n,attrs:t}){let l=null,c,i,f;const h=ae(),{proxy:s}=h,{$q:d}=s,g=P(null),x=P(!1),a=C(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=je(e,d),{registerTick:M,removeTick:S}=qe(),{registerTimeout:W}=Le(),{transitionProps:B,transitionStyle:v}=Be(e),{localScrollTarget:b,changeScrollEvent:m,unconfigureScrollTarget:E}=Ge(e,X),{anchorEl:y,canShow:p}=Ue({showing:x}),{hide:w}=Ae({showing:x,canShow:p,handleShow:fe,handleHide:he,hideOnRouteChange:a,processOnMount:!0}),{showPortal:O,hidePortal:Q,renderPortal:re}=Re(h,g,ve,"menu"),A={anchorEl:y,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&ke(u),!0}},I=C(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),se=C(()=>e.cover===!0?I.value:le(e.self||"top start",d.lang.rtl)),ce=C(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),de=C(()=>e.autoClose===!0?{onClick:me}:{}),V=C(()=>x.value===!0&&e.persistent!==!0);H(V,u=>{u===!0?(ze(z),Ze(A)):(Z(z),ee(A))});function R(){Xe(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function fe(u){if(l=e.noRefocus===!1?document.activeElement:null,Fe(Y),O(),X(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=He(u);if(F.left!==void 0){const{top:ge,left:xe}=y.value.getBoundingClientRect();c={left:F.left-xe,top:F.top-ge}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{k(),e.noFocus!==!0&&R()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),k(),O(!0),n("show",u)},e.transitionDuration)}function he(u){S(),Q(),N(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),W(()=>{Q(!0),n("hide",u)},e.transitionDuration)}function N(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&($e(Y),E(),ee(A),Z(z)),u!==!0&&(l=null)}function X(){(y.value!==null||e.scrollTarget!==void 0)&&(b.value=Ie(y.value,e.scrollTarget),m(b.value,k))}function me(u){f!==!0?(De(s,u),n("click",u)):f=!1}function Y(u){V.value===!0&&e.noFocus!==!0&&Ne(g.value,u.target)!==!0&&R()}function z(u){n("escapeKey"),w(u)}function k(){ue({targetEl:g.value,offset:e.offset,anchorEl:y.value,anchorOrigin:I.value,selfOrigin:se.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(){return U(Se,B.value,()=>x.value===!0?U("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,t.class],style:[t.style,v.value],...de.value},Ve(o.default)):null)}return j(N),Object.assign(s,{focus:R,updatePosition:k}),re}});export{dt as Q};
