import{u as r,v as o,x as t,D as s,j as l,Q as c,ax as y,au as i,av as f,F as _,z as k,A as m,C as b,ay as g}from"./index.a8250b65.js";import{Q as D,a as h,b as x,c as C,d as L}from"./QTable.44f61f97.js";import{Q as T}from"./QPage.21d3761b.js";import{u as w}from"./cart.823e2e1f.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.6b6266c1.js";import"./QMarkupTable.e4e2c248.js";import"./QItem.c6d0b23e.js";import"./QItemLabel.124449a6.js";import"./QMenu.94eed4f7.js";const u=w(),V=u.products,B={name:"ProductPage",setup(){return{columns:[{name:"sn",label:"\u7522\u54C1SN",align:"left",field:"sn",sortable:!0},{name:"name",label:"\u7522\u54C1\u540D\u7A31",align:"left",field:"name",sortable:!0},{name:"description",align:"left",label:"\u7522\u54C1\u63CF\u8FF0",field:"description",sortable:!0},{name:"price",align:"right",label:"\u7522\u54C1\u50F9\u683C(USD)",field:"price",sortable:!0},{name:"stockQty",align:"right",label:"\u5BE6\u969B\u5EAB\u5B58",field:"stockQty",sortable:!0},{name:"requireQty",align:"right",label:"\u9810\u5B9A\u6578\u91CF",field:"requireQty",sortable:!0},{name:"remainQty",align:"right",label:"\u5269\u9918\u6578\u91CF",field:"remainQty",sortable:!0},{name:"releaseDate",align:"right",label:"\u6700\u5FEB\u91CB\u653E\u65E5\u671F",field:"releaseDate",sortable:!0},{name:"arriveDate",align:"right",label:"\u6700\u5FEB\u5230\u6E2F\u65E5\u671F",field:"arriveDate",sortable:!0},{name:"method",align:"right",label:"\u64CD\u4F5C",field:"method",sortable:!1}],cart:u,products:V}},data(){return{selectLocation:"\u6B50\u6D32\u5009\u5EAB",location:u.locationOption}}},P={class:"row q-mb-md q-gutter-md"},q={class:"col-5"},N={class:"col-3"},A=s("div",{class:"text-center"},"ADD TO CART",-1),I=s("div",{class:"text-center"},"Cancel",-1),U={key:2},F={key:3};function O(v,p,j,n,d,z){return r(),o(T,{padding:""},{default:t(()=>[s("div",P,[s("div",q,[l(y,{filled:"",type:"search",label:"search"},{prepend:t(()=>[l(c,{name:"search"})]),_:1})]),s("div",N,[l(D,{color:"orange",filled:"",options:d.location,label:"Label",modelValue:d.selectLocation,"onUpdate:modelValue":p[0]||(p[0]=a=>d.selectLocation=a)},null,8,["options","modelValue"])])]),l(x,{flat:"",rows:n.products,columns:n.columns,"row-key":"sn"},{header:t(a=>[l(h,{props:a},{default:t(()=>[(r(!0),i(_,null,f(a.cols,e=>(r(),o(C,{key:e.name,props:a},{default:t(()=>[k(m(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:t(a=>[l(h,{props:a},{default:t(()=>[(r(!0),i(_,null,f(a.cols,e=>(r(),o(L,{key:e.name,props:a},{default:t(()=>[e.name==="method"&&!e.value.inList?(r(),o(b,{key:0,color:"red",onClick:g(Q=>n.cart.updateList(e.value.sn),["prevent"])},{default:t(()=>[l(c,{left:"",name:"add"}),A]),_:2},1032,["onClick"])):e.name==="method"&&e.value.inList?(r(),o(b,{key:1,color:"red",outline:"",onClick:g(Q=>n.cart.removeItem(e.value.sn),["prevent"])},{default:t(()=>[l(c,{left:"",name:"delete"}),I]),_:2},1032,["onClick"])):e.name==="price"?(r(),i("span",U,"USD$"+m(e.value),1)):(r(),i("span",F,m(e.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var Z=S(B,[["render",O]]);export{Z as default};
