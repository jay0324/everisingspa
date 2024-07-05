import{a as b,b as v,c as Q,d as B}from"./QTable.d1605f69.js";import{b1 as y,t as a,u as c,v as r,j as l,au as n,av as _,F as d,y as k,z as i,B as m}from"./index.dcdafb4c.js";import{Q as O}from"./QBadge.9cc74ed1.js";import{Q as x}from"./QPage.cfd9720b.js";import{u as C}from"./cart.9161b938.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.f0e04d48.js";import"./QMarkupTable.1828c1eb.js";import"./QItem.a6f9898c.js";import"./QItemLabel.36cd9a23.js";import"./QMenu.025ac6c8.js";const f=C(),u=f.productOptions,T={name:"OrderHistoryPage",setup(){const e=[{name:"no",label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:"no"},{name:"state",align:"left",label:"\u8A02\u55AE\u72C0\u614B",field:"state",sortable:!0},{name:"type",align:"left",label:"\u8A02\u55AE\u985E\u578B",field:"type",sortable:!0},{name:"location",align:"left",label:"\u4E0B\u5B9A\u5009\u5EAB",field:"location",sortable:!0},{name:"contact",align:"left",label:"\u806F\u7E6B\u7A97\u53E3",field:"contact"},{name:"method",align:"right",label:"\u64CD\u4F5C",field:"method"}],p=f.orderHistory;return{columns:e,rows:p}},data(){return{state:u.state,type:u.type,location:u.location}},methods:{stateBadge(e){return e===1?"red":"blue"},convertMessage(e){return e.field==="state"?this.state[e.value]:e.field==="type"?this.type[e.value]:e.field==="location"?this.location[e.value]:e.value},convertColor(e){return e.value===1?"text-red":"text-blue"},cancelOrder(e){f.cancelOrder(e),y.create({message:"\u8A02\u55AE\u5DF2\u53D6\u6D88",color:"red"})},confirmedOrder(e){y.create({message:"\u78BA\u8A8D\u4E0B\u8A02\u5B8C\u6210",color:"blue"})}}},q={key:2},H={key:3};function M(e,p,N,g,P,s){return a(),c(x,{padding:""},{default:r(()=>[l(v,{flat:"",rows:g.rows,columns:g.columns,"row-key":"name"},{header:r(o=>[l(b,{props:o},{default:r(()=>[(a(!0),n(d,null,_(o.cols,t=>(a(),c(Q,{key:t.name,props:o},{default:r(()=>[k(i(t.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(o=>[l(b,{props:o},{default:r(()=>[(a(!0),n(d,null,_(o.cols,t=>(a(),c(B,{key:t.name,props:o},{default:r(()=>[t.name==="method"?(a(),n(d,{key:0},[l(m,{color:"grey",label:"\u67E5\u770B\u660E\u7D30",class:"q-ma-sm",to:`order_detail/${t.value}`},null,8,["to"]),l(m,{color:"pink",label:"\u53D6\u6D88\u8A02\u55AE",class:"q-ma-sm",onClick:h=>s.cancelOrder(t.value)},null,8,["onClick"]),l(m,{color:"blue-9",label:"\u78BA\u8A8D\u4E0B\u8A02",class:"q-ma-sm",onClick:h=>s.confirmedOrder(t.value)},null,8,["onClick"])],64)):t.name==="state"?(a(),c(O,{key:1,class:"q-pa-sm",color:s.stateBadge(t.value)},{default:r(()=>[k(i(s.convertMessage(t)),1)]),_:2},1032,["color"])):t.name==="no"?(a(),n("span",q,"#"+i(t.value),1)):(a(),n("span",H,i(s.convertMessage(t)),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})}var J=w(T,[["render",M]]);export{J as default};
