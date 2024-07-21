import{t as a,u as i,v as s,C as p,j as n,Q as c,aB as v,aC as F,ay as o,az as g,F as h,y as _,z as m,B as k}from"./index.bfc13977.js";import{Q as P,a as b,b as Q,c as w,d as S}from"./QTable.f367bc72.js";import{Q as y}from"./QMenu.3a78d0f4.js";import{Q as B}from"./QPage.1054e81c.js";import{u as T}from"./cart.f4082c78.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.546616b0.js";import"./QMarkupTable.e444b494.js";import"./QItem.7f82554c.js";import"./QItemLabel.cb97459a.js";import"./axios.bec6b5a5.js";import"./auth.2eb78e2d.js";const f=T(),L={name:"ProductPage",setup(){return{columns:[{name:"sn",label:"SN No.",align:"left",field:"sn",sortable:!0},{name:"name",label:"Name",align:"left",field:"name",sortable:!0},{name:"description",align:"left",label:"Description",field:"description",sortable:!0},{name:"price",align:"right",label:"Price (USD)",field:"price",sortable:!0},{name:"state",align:"right",label:"State",field:"state",sortable:!0},{name:"releaseDate",align:"right",label:"Release Date",field:"releaseDate",sortable:!0},{name:"arriveDate",align:"right",label:"Arrived Date",field:"arriveDate",sortable:!0},{name:"method",align:"right",label:"Operation",field:"method",sortable:!1}],cart:f,initialPagination:{sortBy:"desc",rowsPerPage:50}}},data(){return{defaultLocation:0,productStateColor:{available:"blue",reserved:"orange"}}},methods:{setFilter(){f.getProductList()},resetFilter(d){f.productFilter[d]=null,f.getProductList()},checkPrice(d){return d?`USD$${d}`:"--"}}},x={class:"row q-mb-md q-gutter-md"},N={class:"col-3"},U={class:"col-3"},q=p("div",{class:"text-center"},"ADD TO CART",-1),O=p("div",{class:"text-center"},"Cancel",-1),A={key:2},I={key:3},M={key:4},z=["innerHTML"],H={key:6},R={key:7},W={key:8};function j(d,r,E,l,C,u){return a(),i(B,{padding:""},{default:s(()=>[p("div",x,[p("div",N,[n(F,{filled:"",type:"search",label:"Search",modelValue:l.cart.productFilter.search,"onUpdate:modelValue":[r[1]||(r[1]=t=>l.cart.productFilter.search=t),r[2]||(r[2]=t=>u.setFilter())],onClear:r[3]||(r[3]=t=>u.resetFilter("search"))},{prepend:s(()=>[n(c,{name:"search"})]),append:s(()=>[n(c,{name:"close",onClick:r[0]||(r[0]=v(t=>u.resetFilter("search"),["stop","prevent"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),p("div",U,[n(P,{color:"orange",filled:"",options:l.cart.locationOption,label:"Warehouses",modelValue:l.cart.productFilter.warehouses,"onUpdate:modelValue":[r[5]||(r[5]=t=>l.cart.productFilter.warehouses=t),r[6]||(r[6]=t=>u.setFilter())]},{append:s(()=>[n(c,{name:"close",onClick:r[4]||(r[4]=v(t=>u.resetFilter("warehouses"),["stop","prevent"])),class:"cursor-pointer"})]),_:1},8,["options","modelValue"])])]),n(Q,{flat:"",rows:l.cart.products,columns:l.columns,"row-key":"sn",pagination:l.initialPagination},{header:s(t=>[n(b,{props:t},{default:s(()=>[(a(!0),o(h,null,g(t.cols,e=>(a(),i(w,{key:e.name,props:t},{default:s(()=>[_(m(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:s(t=>[n(b,{props:t},{default:s(()=>[(a(!0),o(h,null,g(t.cols,e=>(a(),i(S,{key:e.name,props:t},{default:s(()=>[e.name==="method"&&!e.value.inList&&e.value.released?(a(),i(k,{key:0,color:"red",onClick:v(D=>l.cart.checkWarehouse(e.value.sn_id),["prevent"])},{default:s(()=>[n(c,{left:"",name:"add"}),q]),_:2},1032,["onClick"])):e.name==="method"&&e.value.inList&&e.value.released?(a(),i(k,{key:1,color:"red",outline:"",onClick:v(D=>l.cart.removeItem(e.value.sn_id),["prevent"])},{default:s(()=>[n(c,{left:"",name:"delete"}),O]),_:2},1032,["onClick"])):e.name==="method"&&!e.value.released?(a(),o("span",A," -- ")):e.name==="sn"?(a(),o("span",I,"#"+m(e.value),1)):e.name==="price"?(a(),o("span",M,m(u.checkPrice(e.value)),1)):e.name==="description"?(a(),o("div",{key:5,innerHTML:e.value},null,8,z)):e.name==="state"?(a(),o("div",H,[e.value!==void 0?(a(),i(y,{key:0,color:C.productStateColor[e.value],class:"q-pa-sm"},{default:s(()=>[_(m(l.cart.productOptions.productState[e.value]),1)]),_:2},1032,["color"])):(a(),i(y,{key:1,color:"grey",class:"q-pa-sm"},{default:s(()=>[_("Unknow")]),_:1}))])):e.name==="releaseDate"||e.name==="arriveDate"?(a(),o("span",R,m(l.cart.formateDate(e.value)),1)):(a(),o("span",W,m(e.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])]),_:1})}var le=V(L,[["render",j]]);export{le as default};
