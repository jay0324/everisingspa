import{u as t,v as n,x as a,j as s,Q as d,aw as k,at as l,au as p,F as u,z as y,A as c,C as f,ax as _,D as b}from"./index.9f70dbca.js";import{Q as h,a as g,b as Q,c as x}from"./QTable.5a4452b6.js";import{Q as C}from"./QPage.31cadc35.js";import{u as w}from"./cart.56009389.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.d755c9c5.js";import"./QMarkupTable.301be474.js";import"./QItem.b5fe2df1.js";import"./QItemLabel.2989dea5.js";import"./QMenu.880f1631.js";const P=[{name:"name",label:"Name",align:"left",field:"name",sortable:!0},{name:"description",align:"left",label:"Description",field:"description",sortable:!0},{name:"price",align:"center",label:"Price",field:"price",sortable:!0},{name:"qty",align:"right",label:"Qty",field:"qty",sortable:!0},{name:"method",align:"right",label:"Method",field:"method",sortable:!1}],B={name:"ProductPage",setup(){const i=w(),m=i.products;return{columns:P,cart:i,products:m}}},D=b("div",{class:"text-center"},"ADD TO CART",-1),L=b("div",{class:"text-center"},"Cancel",-1),N={key:2},q={key:3};function A(i,m,I,o,V,F){return t(),n(C,{padding:""},{default:a(()=>[s(k,{filled:"",type:"search",label:"search",style:{"max-width":"50%"},class:"q-mb-md"},{prepend:a(()=>[s(d,{name:"search"})]),_:1}),s(g,{flat:"",rows:o.products,columns:o.columns,"row-key":"name"},{header:a(r=>[s(h,{props:r},{default:a(()=>[(t(!0),l(u,null,p(r.cols,e=>(t(),n(Q,{key:e.name,props:r},{default:a(()=>[y(c(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:a(r=>[s(h,{props:r},{default:a(()=>[(t(!0),l(u,null,p(r.cols,e=>(t(),n(x,{key:e.name,props:r},{default:a(()=>[e.name==="method"&&!e.value.inList?(t(),n(f,{key:0,color:"red",onClick:_(v=>o.cart.updateList(e.value.name),["prevent"])},{default:a(()=>[s(d,{left:"",name:"add"}),D]),_:2},1032,["onClick"])):e.name==="method"&&e.value.inList?(t(),n(f,{key:1,color:"red",outline:"",onClick:_(v=>o.cart.removeItem(e.value.name),["prevent"])},{default:a(()=>[s(d,{left:"",name:"delete"}),L]),_:2},1032,["onClick"])):e.name==="price"?(t(),l("span",N,"\u20AC"+c(e.value),1)):(t(),l("span",q,c(e.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var J=T(B,[["render",A]]);export{J as default};
