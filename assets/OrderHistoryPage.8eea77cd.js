import{Q as b}from"./QBanner.4b9da8f2.js";import{a as C,b as g,c as O,d as Q}from"./QTable.09d15b87.js";import{ax as y,x as t,y as o,z as r,l as n,ay as l,az as _,F as f,A as x,B as p,C as m,Q as u}from"./index.1f5286ed.js";import{Q as h}from"./QBadge.13615ff0.js";import{Q as B}from"./QPage.5162f531.js";import{u as q}from"./cart.5402cc7e.js";import{u as P}from"./preference.07cb40f5.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.87b70711.js";import"./QMarkupTable.670ba71e.js";import"./QItem.f374faa7.js";import"./QItemLabel.a268c350.js";import"./QMenu.71131b7f.js";import"./axios.a6636192.js";const i=q(),k=i.productOptions,H=P(),N={name:"OrderHistoryPage",setup(){return H.loaderTrigger("pageLoader"),{columns:[{name:"no",label:"Order No.",align:"left",field:"no"},{name:"status",align:"left",label:"Status",field:"status",sortable:!0},{name:"location",align:"left",label:"Warehouse",field:"location",sortable:!0},{name:"contact",align:"left",label:"Contact Info.",field:"contact"},{name:"remark",align:"left",label:"Remark",field:"remark"},{name:"method",align:"right",label:"Operation",field:"method"}],cart:i,initialPagination:{sortBy:"desc",rowsPerPage:50}}},data(){return{state:k.state,status:{reserve:"Reserve",cancel:"Cancel",sale:"Sale",sent:"Quoted",inquiry:"Inquiry"},location:k.location}},mounted(){i.initOrderHistory()},methods:{stateBadge(a){return i.colorSchema.type.state},convertMessage(a){return a.field==="state"?this.state[a.value]:a.field==="status"?this.status[a.value]:a.field==="location"?this.location[a.value]:this.checkEmpty(a.value)},convertColor(a){return a.value===1?"text-red":"text-blue"},cancelOrder(a){i.cancelOrder(a),y.create({message:"Order Canceled",color:"red"})},confirmedOrder(a){i.confirmOrder(a),y.create({message:"Order Comfirmed",color:"blue"})},checkEmpty(a){return a?`${a}`:"--"}}},S=x("div",{class:"q-pa-md"},"No order history",-1),T={key:3},D={key:4},E={key:5};function M(a,V,z,d,F,c){return t(),o(B,{padding:"",class:"q-pb-none"},{default:r(()=>[d.cart.orderHistory.length===0?(t(),o(b,{key:0,rounded:"",class:"bg-red text-white text-center"},{default:r(()=>[S]),_:1})):(t(),o(C,{key:1,flat:"",rows:d.cart.orderHistory,columns:d.columns,"row-key":"name",pagination:d.initialPagination,class:"my-sticky-header-table"},{header:r(s=>[n(g,{props:s},{default:r(()=>[(t(!0),l(f,null,_(s.cols,e=>(t(),o(O,{key:e.name,props:s},{default:r(()=>[p(m(e.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(s=>[n(g,{props:s},{default:r(()=>[(t(!0),l(f,null,_(s.cols,e=>(t(),o(Q,{key:e.name,props:s},{default:r(()=>[e.name==="method"&&e.value.status==="reserve"?(t(),l(f,{key:0},[n(u,{color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"]),n(u,{color:"pink",label:"Cancel",class:"q-ma-sm",onClick:v=>c.cancelOrder(e.value.id)},null,8,["onClick"]),n(u,{color:"blue-9",label:"Confirm",class:"q-ma-sm",onClick:v=>c.confirmedOrder(e.value.id)},null,8,["onClick"])],64)):e.name==="method"&&e.value.status!=="reserve"?(t(),o(u,{key:1,color:"grey",label:"Detail",class:"q-ma-sm",to:`order_detail/${e.value.id}`},null,8,["to"])):e.name==="state"?(t(),o(h,{key:2,class:"q-pa-sm",color:c.stateBadge(e.value)},{default:r(()=>[p(m(c.convertMessage(e)),1)]),_:2},1032,["color"])):e.name==="no"?(t(),l("span",T,"#"+m(e.value),1)):e.name==="status"?(t(),l("span",D,[n(h,{class:"q-pa-sm",color:d.cart.statusBadgeColor[e.value]},{default:r(()=>[p(m(e.value),1)]),_:2},1032,["color"])])):(t(),l("span",E,m(c.convertMessage(e)),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]))]),_:1})}var ee=w(N,[["render",M]]);export{ee as default};
