import{Q as b}from"./QBanner.8d4e80f1.js";import{a as O,b as g,c as C,d as Q}from"./QTable.867e19ae.js";import{ax as y,u as t,v as o,x as r,j as n,ay as l,az as _,F as f,y as x,z as p,A as m,Q as u}from"./index.0ba0a602.js";import{Q as h}from"./QBadge.95c89f71.js";import{Q as B}from"./QPage.97d5ba31.js";import{u as q}from"./cart.0df06dd0.js";import{u as P}from"./preference.10bd4b95.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.130920d5.js";import"./QMarkupTable.f7e639e0.js";import"./QItem.b3093e1c.js";import"./QItemLabel.d7802e99.js";import"./QMenu.aa4589b9.js";import"./axios.839dab69.js";import"./auth.a57d1293.js";const i=q(),k=i.productOptions,H=P(),N={name:"OrderHistoryPage",setup(){return H.loaderTrigger("pageLoader"),{columns:[{name:"no",label:"Order No.",align:"left",field:"no"},{name:"status",align:"left",label:"Status",field:"status",sortable:!0},{name:"location",align:"left",label:"Warehouse",field:"location",sortable:!0},{name:"contact",align:"left",label:"Contact Info.",field:"contact"},{name:"remark",align:"left",label:"Remark",field:"remark"},{name:"method",align:"right",label:"Operation",field:"method"}],cart:i,initialPagination:{sortBy:"desc",rowsPerPage:50}}},data(){return{state:k.state,status:{reserve:"Reserve",cancel:"Cancel",sale:"Sale",sent:"Quoted",inquiry:"Inquiry"},location:k.location}},mounted(){i.initOrderHistory()},methods:{stateBadge(a){return i.colorSchema.type.state},convertMessage(a){return a.field==="state"?this.state[a.value]:a.field==="status"?this.status[a.value]:a.field==="location"?this.location[a.value]:this.checkEmpty(a.value)},convertColor(a){return a.value===1?"text-red":"text-blue"},cancelOrder(a){i.cancelOrder(a),y.create({message:"Order Canceled",color:"red"})},confirmedOrder(a){i.confirmOrder(a),y.create({message:"Order Comfirmed",color:"blue"})},checkEmpty(a){return a?`${a}`:"--"}}},S=x("div",{class:"q-pa-md"},"No order history",-1),T={key:3},D={key:4},E={key:5};function M(a,V,z,d,F,c){return t(),o(B,{padding:"",class:"q-pb-none"},{default:r(()=>[d.cart.orderHistory.length===0?(t(),o(b,{key:0,rounded:"",class:"bg-red text-white text-center"},{default:r(()=>[S]),_:1})):(t(),o(O,{key:1,flat:"",rows:d.cart.orderHistory,columns:d.columns,"row-key":"name",pagination:d.initialPagination,class:"my-sticky-header-table"},{header:r(s=>[n(g,{props:s},{default:r(()=>[(t(!0),l(f,null,_(s.cols,e=>(t(),o(C,{key:e.name,props:s},{default:r(()=>[p(m(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(s=>[n(g,{props:s},{default:r(()=>[(t(!0),l(f,null,_(s.cols,e=>(t(),o(Q,{key:e.name,props:s},{default:r(()=>[e.name==="method"&&e.value.status==="reserve"?(t(),l(f,{key:0},[n(u,{color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"]),n(u,{color:"pink",label:"Cancel",class:"q-ma-sm",onClick:v=>c.cancelOrder(e.value.id)},null,8,["onClick"]),n(u,{color:"blue-9",label:"Confirm",class:"q-ma-sm",onClick:v=>c.confirmedOrder(e.value.id)},null,8,["onClick"])],64)):e.name==="method"&&e.value.status!=="reserve"?(t(),o(u,{key:1,color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"])):e.name==="state"?(t(),o(h,{key:2,class:"q-pa-sm",color:c.stateBadge(e.value)},{default:r(()=>[p(m(c.convertMessage(e)),1)]),_:2},1032,["color"])):e.name==="no"?(t(),l("span",T,"#"+m(e.value),1)):e.name==="status"?(t(),l("span",D,[n(h,{class:"q-pa-sm",color:d.cart.statusBadgeColor[e.value]},{default:r(()=>[p(m(e.value),1)]),_:2},1032,["color"])])):(t(),l("span",E,m(c.convertMessage(e)),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]))]),_:1})}var ae=w(N,[["render",M]]);export{ae as default};
