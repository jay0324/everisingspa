import{Q as f}from"./QBtn.b00f8f9a.js";import{k as B,c as s,h as g,i as T,l as k,m as U,r as x,w as p,n as J,g as M,p as A,q as _,t as l,j as a,u as P,v,x as w,y as X,z as j,A as G,B as C}from"./index.760df02b.js";import{h as R,a as E,b as W}from"./render.534b20dc.js";import{Q,a as y}from"./QItem.9383b1da.js";import{Q as V}from"./QSeparator.b06993c1.js";import{Q as Z}from"./QList.35d1e962.js";import{Q as $}from"./QMenu.f0a52689.js";import{Q as Y,a as ee,b as te}from"./QLayout.65ae6313.js";import{C as D}from"./ClosePopup.1eead2c7.js";import{Q as ae}from"./QIcon.6bbda3df.js";import{Q as H}from"./QItemLabel.6b56bb07.js";import{u as le}from"./cart.d99f0778.js";import{u as I}from"./auth.4cc3005c.js";import"./use-router-link.afc56f77.js";import"./dom.5d6100f0.js";import"./use-dark.9361df5f.js";import"./focusout.4a1238be.js";import"./focus-manager.7cc6c8df.js";import"./scroll.3be453e3.js";import"./axios.57b779d5.js";var oe=B({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const n=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:n.value},R(r.default))}});const re=["top","middle","bottom"];var ne=B({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>re.includes(e)}},setup(e,{slots:r}){const n=s(()=>e.align!==void 0?{verticalAlign:e.align}:null),i=s(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>g("div",{class:i.value,style:n.value,role:"status","aria-label":e.label},E(r.default,e.label!==void 0?[e.label]:[]))}}),se=B({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const n=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:n.value,role:"toolbar"},R(r.default))}}),ue=B({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:n}){const{proxy:{$q:i}}=M(),o=T(U,k);if(o===k)return console.error("QHeader needs to be child of QLayout"),k;const m=x(parseInt(e.heightHint,10)),c=x(!0),h=s(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||i.platform.is.ios&&o.isContainer.value===!0),q=s(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return c.value===!0?m.value:0;const t=m.value-o.scroll.value.position;return t>0?t:0}),L=s(()=>e.modelValue!==!0||h.value===!0&&c.value!==!0),N=s(()=>e.modelValue===!0&&L.value===!0&&e.reveal===!0),O=s(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(L.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),F=s(()=>{const t=o.rows.value.top,d={};return t[0]==="l"&&o.left.space===!0&&(d[i.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),t[2]==="r"&&o.right.space===!0&&(d[i.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),d});function u(t,d){o.update("header",t,d)}function b(t,d){t.value!==d&&(t.value=d)}function K({height:t}){b(m,t),u("size",t)}function z(t){N.value===!0&&b(c,!0),n("focusin",t)}p(()=>e.modelValue,t=>{u("space",t),b(c,!0),o.animate()}),p(q,t=>{u("offset",t)}),p(()=>e.reveal,t=>{t===!1&&b(c,e.modelValue)}),p(c,t=>{o.animate(),n("reveal",t)}),p(o.scroll,t=>{e.reveal===!0&&b(c,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const S={};return o.instances.header=S,e.modelValue===!0&&u("size",m.value),u("space",e.modelValue),u("offset",q.value),J(()=>{o.instances.header===S&&(o.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const t=W(r.default,[]);return e.elevated===!0&&t.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(g(Y,{debounce:0,onResize:K})),g("header",{class:O.value,style:F.value,onFocusin:z},t)}}}),ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAnCAMAAADzYnzCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF8vLy5eXl19fX+Pj4/Pz86+vr29vb9fX10dHR1NTUzc3N7u7u39/f////ysrK////80sLoQAAABB0Uk5T////////////////////AOAjXRkAAAGrSURBVHja7JjJtoMgDEATBBQ1+v9/+wLBllRaXbT4FrJgODFcQsIgsK5glsbJA1NXt1yQ3AqwXJIA/DVgf5HBbPINvsE3+CdgJKI57WhcCef0ieALFndEPRejJcKlJXhmS00q7NgUHE12KZ+XtmDDJg+eqIt115GdjJwlMD8Kzhe0UAEXGjxtPVk0ALiTVKOaO8Jpm++U4nlN4nMpYv7AleBSI8UnR4yIlaQOZpO79DGbTYAgcf4KtjWw0phTo6N9X+/W8USylPJYIU37K5jQhB1YacjoRxmhkrwDDzIjIxc+mzHswK4SXEpjyI0k1n293bmkdyMLK5c7H1fASmNrJLHu6wAcio+HU2ClEUqLdV8H4MXKhLrkF3FV+AiuaWQfK8kRGFMIobRixDm0dbCFmFBruDKqleQIPPZ57U05LGRVVsCSQGvkRja8lByBeZzRwk7qM9ftjB/BWmNkc3u/eaKUnDiPgxmeO8upH51SI+/9WJf87CLgh+dp1/QGwhMNMbb6xlefsLl+bH3nCjjxGvP3LfMfgM01XH/di8BlbyDr2v41Ir76/AkwAK807wnC1rl4AAAAAElFTkSuQmCC";Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const r=e;return(n,i)=>(A(),_(Q,{clickable:"",tag:"a",target:"_blank",href:r.link},{default:l(()=>[r.icon?(A(),_(y,{key:0,avatar:""},{default:l(()=>[a(ae,{name:r.icon},null,8,["name"])]),_:1})):P("",!0),a(y,null,{default:l(()=>[a(H,null,{default:l(()=>[v(w(r.title),1)]),_:1}),a(H,{caption:""},{default:l(()=>[v(w(r.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});const ce=j("img",{alt:"Quasar logo",src:ie},null,-1),de={class:"flex flex-end"},De=Object.assign({name:"MainLayout",data(){return{leftDrawerOpen:x(!1)}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){I().logout()}}},{__name:"MainLayout",setup(e){const r=le(),n=I();n.checkLogin();const i=n.getAuthData;r.init();const o=s(()=>r.countList);return(m,c)=>{const h=X("router-view");return A(),_(ee,{view:"hHh Lpr lFf"},{default:l(()=>[a(ue,{elevated:"",class:"bg-white"},{default:l(()=>[a(se,{class:"container"},{default:l(()=>[a(oe,{style:{width:"auto"},class:"flex flex-start"},{default:l(()=>[a(f,{flat:"",to:"/"},{default:l(()=>[ce]),_:1})]),_:1}),j("div",de,[a(f,{color:"white","text-color":"black",label:"News",flat:"","no-caps":"",class:"q-mr-sm",to:"news"}),a(f,{color:"white","text-color":"black",label:"Products",flat:"","no-caps":"",class:"q-mr-sm",to:"products"}),a(f,{color:"white","text-color":"black",label:"Inventory",flat:"","no-caps":"",class:"q-mr-sm",to:"inventory"}),a(f,{color:"white","text-color":"black",label:"Order History",flat:"","no-caps":"",class:"q-mr-sm",to:"order_history"}),a(f,{color:"primary",icon:"shopping_cart",class:"q-mr-sm",to:"order_list"},{default:l(()=>[a(ne,{color:"red",floating:""},{default:l(()=>[v(w(o.value),1)]),_:1})]),_:1}),a(f,{color:"primary",label:"Account","no-caps":""},{default:l(()=>[a($,null,{default:l(()=>[a(Z,{style:{"min-width":"100px"}},{default:l(()=>[a(Q,null,{default:l(()=>[a(y,null,{default:l(()=>[v("Hello, "+w(G(i).result.name),1)]),_:1})]),_:1}),a(V),C((A(),_(Q,{clickable:""},{default:l(()=>[a(y,null,{default:l(()=>[v("Profile")]),_:1})]),_:1})),[[D]]),a(V),C((A(),_(Q,{clickable:"",onClick:m.logout},{default:l(()=>[a(y,null,{default:l(()=>[v("Logout")]),_:1})]),_:1},8,["onClick"])),[[D]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),a(te,null,{default:l(()=>[a(h)]),_:1})]),_:1})}}});export{De as default};
