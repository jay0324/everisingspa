import{u as c,a as i}from"./use-dark.18156b08.js";import{k as d,c as u,h as s,g as f,r as b}from"./index.b598a929.js";import{h as m}from"./render.35e06d23.js";const q=["horizontal","vertical","cell","none"];var g=d({name:"QMarkupTable",props:{...c,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>q.includes(e)}},setup(e,{slots:l}){const t=f(),o=i(e,t.proxy.$q),n=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(o.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>s("div",{class:n.value},[s("table",{class:"q-table"},m(l.default))])}});function x(e,l){const t=b(null),o=u(()=>e.disable===!0?null:s("span",{ref:t,class:"no-outline",tabindex:-1}));function n(r){const a=l.value;r!==void 0&&r.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():t.value!==null&&(r===void 0||a!==null&&a.contains(r.target)===!0)&&t.value.focus()}return{refocusTargetEl:o,refocusTarget:n}}var _={xs:30,sm:35,md:40,lg:50,xl:60};export{g as Q,_ as o,x as u};
