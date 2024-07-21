import{k as L,c as u,h as g,l as T,i as E,m as x,n as M,r as q,w as _,p as R,q as U,g as G,t as b,u as y,v as l,j as t,Q as K,x as J,y as v,z as k,A as W,B as m,C as I,D as X,E as V,G as O}from"./index.e2d4a23c.js";import{Q as Y,a as Z}from"./QMenu.eab8e3ca.js";import{Q as w,a as Q}from"./QItem.351d7c69.js";import{Q as ee}from"./QList.95af0c5e.js";import{Q as te,a as ae,b as le}from"./QLayout.2d3f710e.js";import{C as z}from"./ClosePopup.d0648036.js";import{Q as D}from"./QItemLabel.a2f59cca.js";import{u as H}from"./cart.7330fa57.js";import{u as N}from"./auth.4817aac0.js";import"./axios.51180271.js";var oe=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(a,{slots:r}){const s=u(()=>"q-toolbar__title ellipsis"+(a.shrink===!0?" col-shrink":""));return()=>g("div",{class:s.value},T(r.default))}}),re=L({name:"QToolbar",props:{inset:Boolean},setup(a,{slots:r}){const s=u(()=>"q-toolbar row no-wrap items-center"+(a.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:s.value,role:"toolbar"},T(r.default))}}),se=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:r,emit:s}){const{proxy:{$q:d}}=G(),o=E(M,x);if(o===x)return console.error("QHeader needs to be child of QLayout"),x;const f=q(parseInt(a.heightHint,10)),i=q(!0),p=u(()=>a.reveal===!0||o.view.value.indexOf("H")!==-1||d.platform.is.ios&&o.isContainer.value===!0),C=u(()=>{if(a.modelValue!==!0)return 0;if(p.value===!0)return i.value===!0?f.value:0;const e=f.value-o.scroll.value.position;return e>0?e:0}),S=u(()=>a.modelValue!==!0||p.value===!0&&i.value!==!0),P=u(()=>a.modelValue===!0&&S.value===!0&&a.reveal===!0),j=u(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(a.bordered===!0?" q-header--bordered":"")+(S.value===!0?" q-header--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus":"")),A=u(()=>{const e=o.rows.value.top,c={};return e[0]==="l"&&o.left.space===!0&&(c[d.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),e[2]==="r"&&o.right.space===!0&&(c[d.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),c});function n(e,c){o.update("header",e,c)}function h(e,c){e.value!==c&&(e.value=c)}function F({height:e}){h(f,e),n("size",e)}function $(e){P.value===!0&&h(i,!0),s("focusin",e)}_(()=>a.modelValue,e=>{n("space",e),h(i,!0),o.animate()}),_(C,e=>{n("offset",e)}),_(()=>a.reveal,e=>{e===!1&&h(i,a.modelValue)}),_(i,e=>{o.animate(),s("reveal",e)}),_(o.scroll,e=>{a.reveal===!0&&h(i,e.direction==="up"||e.position<=a.revealOffset||e.position-e.inflectionPoint<100)});const B={};return o.instances.header=B,a.modelValue===!0&&n("size",f.value),n("space",a.modelValue),n("offset",C.value),R(()=>{o.instances.header===B&&(o.instances.header=void 0,n("size",0),n("offset",0),n("space",!1))}),()=>{const e=U(r.default,[]);return a.elevated===!0&&e.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(g(te,{debounce:0,onResize:F})),g("header",{class:j.value,style:A.value,onFocusin:$},e)}}}),ne="/everisingspa/assets/logo.87ca7e95.png";Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(a){const r=a;return(s,d)=>(b(),y(w,{clickable:"",tag:"a",target:"_blank",href:r.link},{default:l(()=>[r.icon?(b(),y(Q,{key:0,avatar:""},{default:l(()=>[t(K,{name:r.icon},null,8,["name"])]),_:1})):J("",!0),t(Q,null,{default:l(()=>[t(D,null,{default:l(()=>[v(k(r.title),1)]),_:1}),t(D,{caption:""},{default:l(()=>[v(k(r.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});const ue=I("img",{class:"q-my-md",alt:"Quasar logo",src:ne},null,-1),ie={class:"flex flex-end"},ye=Object.assign({name:"MainLayout",data(){return{leftDrawerOpen:q(!1)}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){N().logout(),H().removeStorage()}}},{__name:"MainLayout",setup(a){const r=H(),s=N();s.checkLogin();const d=s.getAuthData;r.init();const o=u(()=>r.countList);return(f,i)=>{const p=W("router-view");return b(),y(ae,{view:"hHh Lpr lFf"},{default:l(()=>[t(se,{elevated:"",class:"bg-white"},{default:l(()=>[t(re,{class:"container"},{default:l(()=>[t(oe,{style:{width:"auto"},class:"flex flex-start"},{default:l(()=>[t(m,{flat:"",to:"/"},{default:l(()=>[ue]),_:1})]),_:1}),I("div",ie,[t(m,{color:"white","text-color":"black",label:"News",flat:"","no-caps":"",class:"q-mr-sm",to:"/news"}),t(m,{color:"white","text-color":"black",label:"Products",flat:"","no-caps":"",class:"q-mr-sm",to:"/products"}),t(m,{color:"white","text-color":"black",label:"Order History",flat:"","no-caps":"",class:"q-mr-sm",to:"/order_history"}),t(m,{color:"primary",icon:"shopping_cart",class:"q-mr-sm",to:"/order_list"},{default:l(()=>[t(Y,{color:"red",floating:""},{default:l(()=>[v(k(o.value),1)]),_:1})]),_:1}),t(m,{color:"primary",label:"Account","no-caps":""},{default:l(()=>[t(Z,null,{default:l(()=>[t(ee,{style:{"min-width":"100px"}},{default:l(()=>[t(w,null,{default:l(()=>[t(Q,null,{default:l(()=>[v("Hello, "+k(X(d).result.name),1)]),_:1})]),_:1}),t(V),O((b(),y(w,{clickable:""},{default:l(()=>[t(Q,null,{default:l(()=>[v("Profile")]),_:1})]),_:1})),[[z]]),t(V),O((b(),y(w,{clickable:"",onClick:f.logout},{default:l(()=>[t(Q,null,{default:l(()=>[v("Logout")]),_:1})]),_:1},8,["onClick"])),[[z]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),t(le,null,{default:l(()=>[t(p)]),_:1})]),_:1})}}});export{ye as default};
