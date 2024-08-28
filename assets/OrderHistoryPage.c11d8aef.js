import{a as g,b,c as C,d as O}from"./QTable.0f70920f.js";import{ax as y,u as t,v as c,x as r,j as o,ay as n,az as _,F as f,z as p,A as d,Q as u}from"./index.e5e2f855.js";import{Q as k}from"./QBadge.f2304aab.js";import{Q}from"./QPage.91b9de98.js";import{u as x}from"./cart.c6f1160b.js";import{u as B}from"./preference.a37f88d4.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.c0dcc6ad.js";import"./QMarkupTable.480eb9d7.js";import"./QItem.0fc96797.js";import"./QItemLabel.6f8164f6.js";import"./QMenu.2ead0301.js";import"./axios.171c60b1.js";import"./auth.acdb2ef2.js";const l=x(),h=l.productOptions,P=B(),S={name:"OrderHistoryPage",setup(){return P.loaderTrigger("pageLoader"),{columns:[{name:"no",label:"Order No.",align:"left",field:"no"},{name:"status",align:"left",label:"Status",field:"status",sortable:!0},{name:"location",align:"left",label:"Warehouse",field:"location",sortable:!0},{name:"contact",align:"left",label:"Contact Info.",field:"contact"},{name:"remark",align:"left",label:"Remark",field:"remark"},{name:"method",align:"right",label:"Operation",field:"method"}],cart:l,initialPagination:{sortBy:"desc",rowsPerPage:50}}},data(){return{state:h.state,status:{reserve:"Reserve",cancel:"Cancel",sale:"Sale",sent:"Quoted",inquiry:"Inquiry"},location:h.location}},mounted(){l.initOrderHistory()},methods:{stateBadge(a){return l.colorSchema.type.state},convertMessage(a){return a.field==="state"?this.state[a.value]:a.field==="status"?this.status[a.value]:a.field==="location"?this.location[a.value]:this.checkEmpty(a.value)},convertColor(a){return a.value===1?"text-red":"text-blue"},cancelOrder(a){l.cancelOrder(a),y.create({message:"Order Canceled",color:"red"})},confirmedOrder(a){l.confirmOrder(a),y.create({message:"Order Comfirmed",color:"blue"})},checkEmpty(a){return a?`${a}`:"--"}}},T={key:3},w={key:4},H={key:5};function N(a,D,E,m,M,i){return t(),c(Q,{padding:""},{default:r(()=>[o(b,{flat:"",rows:m.cart.orderHistory,columns:m.columns,"row-key":"name",pagination:m.initialPagination},{header:r(s=>[o(g,{props:s},{default:r(()=>[(t(!0),n(f,null,_(s.cols,e=>(t(),c(C,{key:e.name,props:s},{default:r(()=>[p(d(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(s=>[o(g,{props:s},{default:r(()=>[(t(!0),n(f,null,_(s.cols,e=>(t(),c(O,{key:e.name,props:s},{default:r(()=>[e.name==="method"&&e.value.status==="reserve"?(t(),n(f,{key:0},[o(u,{color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"]),o(u,{color:"pink",label:"Cancel",class:"q-ma-sm",onClick:v=>i.cancelOrder(e.value.id)},null,8,["onClick"]),o(u,{color:"blue-9",label:"Confirm",class:"q-ma-sm",onClick:v=>i.confirmedOrder(e.value.id)},null,8,["onClick"])],64)):e.name==="method"&&e.value.status!=="reserve"?(t(),c(u,{key:1,color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"])):e.name==="state"?(t(),c(k,{key:2,class:"q-pa-sm",color:i.stateBadge(e.value)},{default:r(()=>[p(d(i.convertMessage(e)),1)]),_:2},1032,["color"])):e.name==="no"?(t(),n("span",T,"#"+d(e.value),1)):e.name==="status"?(t(),n("span",w,[o(k,{class:"q-pa-sm",color:m.cart.statusBadgeColor[e.value]},{default:r(()=>[p(d(e.value),1)]),_:2},1032,["color"])])):(t(),n("span",H,d(i.convertMessage(e)),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])]),_:1})}var Y=q(S,[["render",N]]);export{Y as default};
