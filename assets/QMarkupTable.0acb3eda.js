import{k as o,I as s,K as u,c,h as n,l as d,g as i}from"./index.bafb7138.js";function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e,a,l){if(l<=a)return a;const t=l-a+1;let r=a+(e-a)%t;return r<a&&(r=t+r),r===0?0:r}function k(e,a=2,l="0"){if(e==null)return e;const t=""+e;return t.length>=a?t:new Array(a-t.length+1).join(l)+t}const b=["horizontal","vertical","cell","none"];var v=o({name:"QMarkupTable",props:{...s,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>b.includes(e)}},setup(e,{slots:a}){const l=i(),t=u(e,l.proxy.$q),r=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(t.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:r.value},[n("table",{class:"q-table"},d(a.default))])}});export{v as Q,f as c,p as n,k as p};
