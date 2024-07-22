import{ax as u,t as o,u as h,v as _,C as t,j as l,B as n,z as d,ay as f,az as x,F as y,x as g}from"./index.3fd10e45.js";import{Q as b}from"./QList.45b5912f.js";import{Q as v}from"./QMarkupTable.d6369d49.js";import{Q as w}from"./QPage.fc19e27d.js";import{u as O,d as k}from"./cart.25ee2ad0.js";import{u as C}from"./auth.70420f97.js";import{api as $}from"./axios.b4f34255.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const i=O(),B={name:"OrderDetailPage",data(){return{data:[],options:null,editable:null,detail:null}},async mounted(){await i.initOrderHistory().then(()=>{$.get(`/api/v1/get_order_detail?user_id=${C().getUid}&order_id=${this.$route.params.no}`).then(s=>{this.formateList(this.$route.params.no,s.data),this.data=i.orderHistory.find(e=>e.id==this.$route.params.no),this.data.order=this.formateList(this.$route.params.no,s.data),this.editable=this.data.contactDetail})})},methods:{formateList(s,e){const p=e.data,c=[];for(let a of p)c.push({sn_id:a.lot_id,sn:a.lot_name,pid:a.product_id,amount:a.product_qty,name:a.product_name,description:a.product_description,price:a.price_unit,warehouse_id:e.warehouse_id,warehouse_name:e.warehouse_name});return c},stateBadge(s){return s===1?"red":"blue"},convertTimestamp(s){return k.formatDate(s*1e3,"YYYY/MM/DD")},confirmedOrder(){i.confirmOrder(this.data.no),u.create({message:"Order Confirmed",color:"blue"})},cancelOrder(){i.cancelOrder(this.data.no),u.create({message:"Order Canceled",color:"red"})},updateOrder(){this.data.contactDetail=this.editable,this.data.contact=`${this.editable.name}/${this.editable.tel}`,i.updateOrder(this.data.no,this.data),u.create({message:"Detail Updated",color:"green"})}}},Q={class:"full-width",style:{"max-width":"1200px"}},L={class:"q-my-md flex"},N={class:"text-h4 q-ml-md"},q=t("thead",null,[t("tr",null,[t("th",{class:"text-left",width:"100"},"SN No."),t("th",{class:"text-left",width:"200"},"Name"),t("th",{class:"text-left"},"Description"),t("th",{class:"text-right",width:"150"},"Price (USD)"),t("th",{class:"text-right",width:"100"},"Qty.")])],-1),S={class:"text-left"},M={class:"text-left"},U={class:"text-left"},H=["innerHTML"],P={class:"text-right"},T={class:"text-right"},Y={class:"row q-gutter-md q-my-md"};function V(s,e,p,c,a,m){return o(),h(w,{padding:"",class:"flex justify-center"},{default:_(()=>[t("div",Q,[t("div",L,[l(n,{icon:"arrow_back_ios",color:"primary",label:"Back",onClick:e[0]||(e[0]=r=>s.$router.go(-1))}),t("span",N,"#"+d(a.data.no),1)]),l(b,{bordered:"",separator:""}),l(v,{flat:"",bordered:"",separator:"cell",class:"q-my-md"},{default:_(()=>[q,t("tbody",null,[(o(!0),f(y,null,x(a.data.order,r=>(o(),f("tr",{key:r},[t("td",S,"#"+d(r.sn),1),t("td",M,d(r.name),1),t("td",U,[t("div",{innerHTML:r.description},null,8,H)]),t("td",P,"USD$"+d(r.price),1),t("td",T,d(r.amount),1)]))),128))])]),_:1}),t("div",Y,[a.data.status==="reserve"?(o(),h(n,{key:0,class:"col",color:"blue",label:"Confirm",onClick:e[1]||(e[1]=r=>m.confirmedOrder())})):g("",!0),a.data.status==="reserve"?(o(),h(n,{key:1,class:"col",color:"red",label:"Cancel",onClick:e[2]||(e[2]=r=>m.cancelOrder())})):g("",!0),l(n,{class:"col",color:"green",label:"Update",onClick:e[3]||(e[3]=r=>m.updateOrder())})])])]),_:1})}var K=D(B,[["render",V]]);export{K as default};
