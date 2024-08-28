import{k as Q,c as u,h as p,l as z,i as F,m as b,n as I,r as w,w as h,p as $,q as j,g as M,t as R,u as k,v as B,x as r,j as a,Q as d,y as D,z as y,A as C,B as U,C as K,D as E}from"./index.e5e2f855.js";import{Q as G}from"./QBadge.f2304aab.js";import{Q as L,a as V}from"./QItem.0fc96797.js";import{Q as J}from"./QList.c0dcc6ad.js";import{Q as W}from"./QMenu.2ead0301.js";import{Q as X,a as Y,b as Z}from"./QLayout.6c0c2fe2.js";import{C as ee}from"./ClosePopup.a1892703.js";import{_ as te}from"./logo.d9db43ed.js";import{u as ae}from"./preference.a37f88d4.js";import{u as S}from"./cart.c6f1160b.js";import{u as O}from"./auth.acdb2ef2.js";import"./axios.171c60b1.js";var oe=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:i}){const l=u(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>p("div",{class:l.value},z(i.default))}}),re=Q({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:i}){const l=u(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>p("div",{class:l.value,role:"toolbar"},z(i.default))}}),le=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:i,emit:l}){const{proxy:{$q:m}}=M(),o=F(I,b);if(o===b)return console.error("QHeader needs to be child of QLayout"),b;const f=w(parseInt(t.heightHint,10)),s=w(!0),_=u(()=>t.reveal===!0||o.view.value.indexOf("H")!==-1||m.platform.is.ios&&o.isContainer.value===!0),g=u(()=>{if(t.modelValue!==!0)return 0;if(_.value===!0)return s.value===!0?f.value:0;const e=f.value-o.scroll.value.position;return e>0?e:0}),x=u(()=>t.modelValue!==!0||_.value===!0&&s.value!==!0),H=u(()=>t.modelValue===!0&&x.value===!0&&t.reveal===!0),T=u(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(x.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),N=u(()=>{const e=o.rows.value.top,c={};return e[0]==="l"&&o.left.space===!0&&(c[m.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),e[2]==="r"&&o.right.space===!0&&(c[m.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),c});function n(e,c){o.update("header",e,c)}function v(e,c){e.value!==c&&(e.value=c)}function P({height:e}){v(f,e),n("size",e)}function A(e){H.value===!0&&v(s,!0),l("focusin",e)}h(()=>t.modelValue,e=>{n("space",e),v(s,!0),o.animate()}),h(g,e=>{n("offset",e)}),h(()=>t.reveal,e=>{e===!1&&v(s,t.modelValue)}),h(s,e=>{o.animate(),l("reveal",e)}),h(o.scroll,e=>{t.reveal===!0&&v(s,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const q={};return o.instances.header=q,t.modelValue===!0&&n("size",f.value),n("space",t.modelValue),n("offset",g.value),$(()=>{o.instances.header===q&&(o.instances.header=void 0,n("size",0),n("offset",0),n("space",!1))}),()=>{const e=j(i.default,[]);return t.elevated===!0&&e.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(p(X,{debounce:0,onResize:P})),p("header",{class:T.value,style:N.value,onFocusin:A},e)}}});const se=D("img",{class:"q-my-md",alt:"Quasar logo",src:te},null,-1),ne={class:"flex flex-end"},ye=Object.assign({name:"MainLayout",data(){return{leftDrawerOpen:w(!1)}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){O().logout(),S().removeStorage()}}},{__name:"MainLayout",setup(t){const i=S(),l=O();l.checkLogin();const m=l.getAuthData;i.init(),ae().setupLoading();const f=u(()=>i.countList);return(s,_)=>{const g=R("router-view");return k(),B(Y,{view:"hHh Lpr lFf"},{default:r(()=>[a(le,{elevated:"",class:"bg-white"},{default:r(()=>[a(re,{class:"container"},{default:r(()=>[a(oe,{style:{width:"auto"},class:"flex flex-start"},{default:r(()=>[a(d,{flat:"",to:"/"},{default:r(()=>[se]),_:1})]),_:1}),D("div",ne,[a(d,{color:"white","text-color":"black",label:"News",flat:"","no-caps":"",class:"q-mr-sm",to:"/news"}),a(d,{color:"white","text-color":"black",label:"Products",flat:"","no-caps":"",class:"q-mr-sm",to:"/products"}),a(d,{color:"white","text-color":"black",label:"Order History",flat:"","no-caps":"",class:"q-mr-sm",to:"/order_history"}),a(d,{color:"primary",icon:"shopping_cart",class:"q-mr-sm",to:"/order_list"},{default:r(()=>[a(G,{color:"red",floating:""},{default:r(()=>[y(C(f.value),1)]),_:1})]),_:1}),a(d,{color:"primary",label:"Account","no-caps":""},{default:r(()=>[a(W,null,{default:r(()=>[a(J,{style:{"min-width":"100px"}},{default:r(()=>[a(L,null,{default:r(()=>[a(V,null,{default:r(()=>[y("Hello, "+C(U(m).result.name),1)]),_:1})]),_:1}),a(K),E((k(),B(L,{clickable:"",onClick:s.logout},{default:r(()=>[a(V,null,{default:r(()=>[y("Logout")]),_:1})]),_:1},8,["onClick"])),[[ee]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),a(Z,null,{default:r(()=>[a(g)]),_:1})]),_:1})}}});export{ye as default};
