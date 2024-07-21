import{a as g,b as h,c as v,d as O}from"./QTable.3bda038e.js";import{ax as _,t,u as n,v as r,j as s,ay as i,az as y,F as f,y as b,z as m,B as c}from"./index.dd2a86c8.js";import{Q as C}from"./QMenu.655b0613.js";import{Q as B}from"./QPage.2f00427b.js";import{u as Q}from"./cart.199b95c8.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.2dba8909.js";import"./QMarkupTable.c5da655c.js";import"./QItem.45e92af4.js";import"./QItemLabel.e0a92f79.js";import"./axios.4a94f97f.js";import"./auth.9fef6d99.js";const d=Q(),p=d.productOptions,P={name:"OrderHistoryPage",setup(){return{columns:[{name:"no",label:"Order No.",align:"left",field:"no"},{name:"status",align:"left",label:"Status",field:"status",sortable:!0},{name:"location",align:"left",label:"Warehouse",field:"location",sortable:!0},{name:"contact",align:"left",label:"Contact Info.",field:"contact"},{name:"remark",align:"left",label:"Remark",field:"remark"},{name:"method",align:"right",label:"Operation",field:"method"}],cart:d,initialPagination:{sortBy:"desc",rowsPerPage:50}}},data(){return{state:p.state,status:p.warehouseType.list,location:p.location}},methods:{stateBadge(a){return d.colorSchema.type.state},convertMessage(a){return a.field==="state"?this.state[a.value]:a.field==="status"?this.status[a.value]:a.field==="location"?this.location[a.value]:a.value},convertColor(a){return a.value===1?"text-red":"text-blue"},cancelOrder(a){d.cancelOrder(a),_.create({message:"Order Canceled",color:"red"})},confirmedOrder(a){d.confirmOrder(a),_.create({message:"Order Comfirmed",color:"blue"})}}},w={key:3},T={key:4};function q(a,N,S,u,D,l){return t(),n(B,{padding:""},{default:r(()=>[s(h,{flat:"",rows:u.cart.orderHistory,columns:u.columns,"row-key":"name",pagination:u.initialPagination},{header:r(o=>[s(g,{props:o},{default:r(()=>[(t(!0),i(f,null,y(o.cols,e=>(t(),n(v,{key:e.name,props:o},{default:r(()=>[b(m(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(o=>[s(g,{props:o},{default:r(()=>[(t(!0),i(f,null,y(o.cols,e=>(t(),n(O,{key:e.name,props:o},{default:r(()=>[e.name==="method"&&e.value.status==="reserve"?(t(),i(f,{key:0},[s(c,{color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"]),s(c,{color:"pink",label:"Cancel",class:"q-ma-sm",onClick:k=>l.cancelOrder(e.value.id)},null,8,["onClick"]),s(c,{color:"blue-9",label:"Confirm",class:"q-ma-sm",onClick:k=>l.confirmedOrder(e.value.id)},null,8,["onClick"])],64)):e.name==="method"&&e.value.status!=="reserve"?(t(),n(c,{key:1,color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"])):e.name==="state"?(t(),n(C,{key:2,class:"q-pa-sm",color:l.stateBadge(e.value)},{default:r(()=>[b(m(l.convertMessage(e)),1)]),_:2},1032,["color"])):e.name==="no"?(t(),i("span",w,"#"+m(e.value),1)):(t(),i("span",T,m(l.convertMessage(e)),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])]),_:1})}var G=x(P,[["render",q]]);export{G as default};
