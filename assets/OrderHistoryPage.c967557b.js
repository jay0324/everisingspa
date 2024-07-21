import{a as g,b as h,c as v,d as O}from"./QTable.f367bc72.js";import{ax as _,t,u as n,v as r,j as s,ay as i,az as y,F as f,y as b,z as m,B as c}from"./index.bfc13977.js";import{Q as C}from"./QMenu.3a78d0f4.js";import{Q as B}from"./QPage.1054e81c.js";import{u as Q}from"./cart.f4082c78.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.546616b0.js";import"./QMarkupTable.e444b494.js";import"./QItem.7f82554c.js";import"./QItemLabel.cb97459a.js";import"./axios.bec6b5a5.js";import"./auth.2eb78e2d.js";const d=Q(),p=d.productOptions,P={name:"OrderHistoryPage",setup(){return{columns:[{name:"no",label:"Order No.",align:"left",field:"no"},{name:"status",align:"left",label:"Status",field:"status",sortable:!0},{name:"location",align:"left",label:"Warehouse",field:"location",sortable:!0},{name:"contact",align:"left",label:"Contact Info.",field:"contact"},{name:"remark",align:"left",label:"Remark",field:"remark"},{name:"method",align:"right",label:"Operation",field:"method"}],cart:d,initialPagination:{sortBy:"desc",rowsPerPage:50}}},data(){return{state:p.state,status:p.warehouseType.list,location:p.location}},methods:{stateBadge(a){return d.colorSchema.type.state},convertMessage(a){return a.field==="state"?this.state[a.value]:a.field==="status"?this.status[a.value]:a.field==="location"?this.location[a.value]:a.value},convertColor(a){return a.value===1?"text-red":"text-blue"},cancelOrder(a){d.cancelOrder(a),_.create({message:"Order Canceled",color:"red"})},confirmedOrder(a){d.confirmOrder(a),_.create({message:"Order Comfirmed",color:"blue"})}}},w={key:3},T={key:4};function q(a,N,S,u,D,l){return t(),n(B,{padding:""},{default:r(()=>[s(h,{flat:"",rows:u.cart.orderHistory,columns:u.columns,"row-key":"name",pagination:u.initialPagination},{header:r(o=>[s(g,{props:o},{default:r(()=>[(t(!0),i(f,null,y(o.cols,e=>(t(),n(v,{key:e.name,props:o},{default:r(()=>[b(m(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(o=>[s(g,{props:o},{default:r(()=>[(t(!0),i(f,null,y(o.cols,e=>(t(),n(O,{key:e.name,props:o},{default:r(()=>[e.name==="method"&&e.value.status==="reserve"?(t(),i(f,{key:0},[s(c,{color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"]),s(c,{color:"pink",label:"Cancel",class:"q-ma-sm",onClick:k=>l.cancelOrder(e.value.id)},null,8,["onClick"]),s(c,{color:"blue-9",label:"Confirm",class:"q-ma-sm",onClick:k=>l.confirmedOrder(e.value.id)},null,8,["onClick"])],64)):e.name==="method"&&e.value.status!=="reserve"?(t(),n(c,{key:1,color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"])):e.name==="state"?(t(),n(C,{key:2,class:"q-pa-sm",color:l.stateBadge(e.value)},{default:r(()=>[b(m(l.convertMessage(e)),1)]),_:2},1032,["color"])):e.name==="no"?(t(),i("span",w,"#"+m(e.value),1)):(t(),i("span",T,m(l.convertMessage(e)),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])]),_:1})}var G=x(P,[["render",q]]);export{G as default};
