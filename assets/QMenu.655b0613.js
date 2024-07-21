import{k as ae,c as S,h as K,H as ye,P as we,r as P,I as Te,J as U,K as Se,L as J,w as H,o as Ee,p as Q,g as ue,M as Ce,N as D,O as Z,R as He,S as ke,U as Me,V as qe,W as We,X as Pe,Y as Be,Z as pe,_ as Le,$ as Ae,a0 as Re,a1 as $e,a2 as ze,a3 as Fe,a4 as Ke,a5 as De,a6 as G,a7 as Oe,a8 as Qe,l as Ve,a9 as je,aa as Ie,ab as Ne,ac as Xe,ad as Ye}from"./index.dd2a86c8.js";const _e=["top","middle","bottom"];var ut=ae({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>_e.includes(e)}},setup(e,{slots:n}){const l=S(()=>e.align!==void 0?{verticalAlign:e.align}:null),t=S(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>K("div",{class:t.value,style:l.value,role:"status","aria-label":e.label},ye(n.default,e.label!==void 0?[e.label]:[]))}});function Ue(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),we.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Je={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Ze={...Je,contextMenu:Boolean};function Ge({showing:e,avoidEmit:n,configureAnchorEl:l}){const{props:t,proxy:o,emit:c}=ue(),i=P(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};l===void 0&&(Object.assign(s,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Te(a,13)===!0&&s.toggle(a)},contextClick(a){o.hide(a),U(a),Se(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:U,mobileTouch(a){if(s.mobileCleanup(a),h(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const r=a.target;J(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Ue()}}),l=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let r;a===!0?o.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],J(s,"anchor",r)});function d(){Ce(s,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function x(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)g(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return H(()=>t.contextMenu,a=>{i.value!==null&&(d(),l(a))}),H(()=>t.target,()=>{i.value!==null&&d(),x()}),H(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():l())}),Ee(()=>{x(),n!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),Q(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:s}}function et(e,n){const l=P(null);let t;function o(f,h){const s=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[s]("scroll",d,D.passive),window[s]("scroll",d,D.passive),t=h}function c(){l.value!==null&&(o(l.value),l.value=null)}const i=H(()=>e.noParentEvent,()=>{l.value!==null&&(c(),n())});return Q(i),{localScrollTarget:l,unconfigureScrollTarget:c,changeScrollEvent:o}}const{notPassiveCapture:B}=D,E=[];function p(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let l=Z.length-1;for(;l>=0;){const t=Z[l].$;if(t.type.name==="QTooltip"){l--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=E.length-1;t>=0;t--){const o=E[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(n)===!1)&&(n===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(n)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function tt(e){E.push(e),E.length===1&&(document.addEventListener("mousedown",p,B),document.addEventListener("touchstart",p,B))}function ee(e){const n=E.findIndex(l=>l===e);n!==-1&&(E.splice(n,1),E.length===0&&(document.removeEventListener("mousedown",p,B),document.removeEventListener("touchstart",p,B)))}let te,ne;function le(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function nt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const O={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{O[`${e}#ltr`]=e,O[`${e}#rtl`]=e});function oe(e,n){const l=e.split(" ");return{vertical:l[0],horizontal:O[`${l[1]}#${n===!0?"rtl":"ltr"}`]}}function lt(e,n){let{top:l,left:t,right:o,bottom:c,width:i,height:f}=e.getBoundingClientRect();return n!==void 0&&(l-=n[1],t-=n[0],c+=n[1],o+=n[0],i+=n[0],f+=n[1]),{top:l,bottom:c,height:f,left:t,right:o,width:i,middle:t+(o-t)/2,center:l+(c-l)/2}}function ot(e,n,l){let{top:t,left:o}=e.getBoundingClientRect();return t+=n.top,o+=n.left,l!==void 0&&(t+=l[1],o+=l[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function it(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ie(e,n,l,t){return{top:e[l.vertical]-n[t.vertical],left:e[l.horizontal]-n[t.horizontal]}}function re(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{re(e,n+1)},10);return}const{targetEl:l,offset:t,anchorEl:o,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:s,maxHeight:d,maxWidth:g}=e;if(He.is.ios===!0&&window.visualViewport!==void 0){const C=document.body.style,{offsetLeft:b,offsetTop:y}=window.visualViewport;b!==te&&(C.setProperty("--q-pe-left",b+"px"),te=b),y!==ne&&(C.setProperty("--q-pe-top",y+"px"),ne=y)}const{scrollLeft:x,scrollTop:a}=l,r=f===void 0?lt(o,s===!0?[0,0]:t):ot(o,f,t);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:k}=l,{elWidth:W,elHeight:L}=h===!0||s===!0?{elWidth:Math.max(r.width,q),elHeight:s===!0?Math.max(r.height,k):k}:{elWidth:q,elHeight:k};let v={maxWidth:g,maxHeight:d};(h===!0||s===!0)&&(v.minWidth=r.width+"px",s===!0&&(v.minHeight=r.height+"px")),Object.assign(l.style,v);const w=it(W,L);let m=ie(r,w,c,i);if(f===void 0||t===void 0)F(m,r,w,c,i);else{const{top:C,left:b}=m;F(m,r,w,c,i);let y=!1;if(m.top!==C){y=!0;const T=2*t[1];r.center=r.top-=T,r.bottom-=T+2}if(m.left!==b){y=!0;const T=2*t[0];r.middle=r.left-=T,r.right-=T+2}y===!0&&(m=ie(r,w,c,i),F(m,r,w,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==x&&(l.scrollLeft=x)}function F(e,n,l,t,o){const c=l.bottom,i=l.right,f=ke(),h=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+c>h)if(o.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(n[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?n.center:t.vertical===o.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===o.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),o.horizontal==="middle")e.left=n[t.horizontal]>s/2?Math.max(0,s-i):0;else if(n[t.horizontal]>s/2){const d=Math.min(s,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.left:n.right),e.maxWidth=Math.min(i,s-e.left)}var rt=ae({name:"QMenu",inheritAttrs:!1,props:{...Ze,...Me,...qe,...We,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:le},self:{type:String,validator:le},offset:{type:Array,validator:nt},scrollTarget:Pe,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Be,"click","escapeKey"],setup(e,{slots:n,emit:l,attrs:t}){let o=null,c,i,f;const h=ue(),{proxy:s}=h,{$q:d}=s,g=P(null),x=P(!1),a=S(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=pe(e,d),{registerTick:q,removeTick:k}=Le(),{registerTimeout:W}=Ae(),{transitionProps:L,transitionStyle:v}=Re(e),{localScrollTarget:w,changeScrollEvent:m,unconfigureScrollTarget:C}=et(e,Y),{anchorEl:b,canShow:y}=Ge({showing:x}),{hide:T}=$e({showing:x,canShow:y,handleShow:he,handleHide:me,hideOnRouteChange:a,processOnMount:!0}),{showPortal:V,hidePortal:j,renderPortal:se}=ze(h,g,ge,"menu"),A={anchorEl:b,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return T(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ye(u),!0}},I=S(()=>oe(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),ce=S(()=>e.cover===!0?I.value:oe(e.self||"top start",d.lang.rtl)),de=S(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),fe=S(()=>e.autoClose===!0?{onClick:ve}:{}),N=S(()=>x.value===!0&&e.persistent!==!0);H(N,u=>{u===!0?(Ie($),tt(A)):(G($),ee(A))});function R(){Ne(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function he(u){if(o=e.noRefocus===!1?document.activeElement:null,Fe(_),V(),Y(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const z=Ke(u);if(z.left!==void 0){const{top:xe,left:be}=b.value.getBoundingClientRect();c={left:z.left-be,top:z.top-xe}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,M)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{M(),e.noFocus!==!0&&R()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),M(),V(!0),l("show",u)},e.transitionDuration)}function me(u){k(),j(),X(!0),o!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),W(()=>{j(!0),l("hide",u)},e.transitionDuration)}function X(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(De(_),C(),ee(A),G($)),u!==!0&&(o=null)}function Y(){(b.value!==null||e.scrollTarget!==void 0)&&(w.value=Oe(b.value,e.scrollTarget),m(w.value,M))}function ve(u){f!==!0?(Qe(s,u),l("click",u)):f=!1}function _(u){N.value===!0&&e.noFocus!==!0&&Xe(g.value,u.target)!==!0&&R()}function $(u){l("escapeKey"),T(u)}function M(){re({targetEl:g.value,offset:e.offset,anchorEl:b.value,anchorOrigin:I.value,selfOrigin:ce.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ge(){return K(je,L.value,()=>x.value===!0?K("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+de.value,t.class],style:[t.style,v.value],...fe.value},Ve(n.default)):null)}return Q(X),Object.assign(s,{focus:R,updatePosition:M}),se}});export{ut as Q,rt as a};
