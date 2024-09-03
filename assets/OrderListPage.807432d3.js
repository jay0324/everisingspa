import{m as M,r as q,ak as E,aX as I,aY as U,o as H,h as Y,n as z,g as j,aD as G,O,U as W,ag as K,bd as X,be as J,ax as Z,x as m,y as T,z as k,ay as p,l as c,Q as y,A as t,B as Q,C as v,aL as L,F as B,az as R,G as $,aG as C,aF as ee,bf as te}from"./index.48cc6014.js";import{Q as oe}from"./QMarkupTable.b058f320.js";import{Q as se}from"./QBanner.1646b5ab.js";import{Q as re}from"./QPage.8977173c.js";import{u as ae,d as ne}from"./cart.fd896eee.js";import{u as le}from"./axios.d6d5a143.js";import{u as ie}from"./preference.121050bc.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";var de=M({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(o,{slots:a,emit:g}){const d=j(),n=q(null);let i=0;const e=[];function _(s){const h=typeof s=="boolean"?s:o.noErrorFocus!==!0,b=++i,N=(r,u)=>{g(`validation${r===!0?"Success":"Error"}`,u)},P=r=>{const u=r.validate();return typeof u.then=="function"?u.then(f=>({valid:f,comp:r}),f=>({valid:!1,comp:r,err:f})):Promise.resolve({valid:u,comp:r})};return(o.greedy===!0?Promise.all(e.map(P)).then(r=>r.filter(u=>u.valid!==!0)):e.reduce((r,u)=>r.then(()=>P(u).then(f=>{if(f.valid===!1)return Promise.reject(f)})),Promise.resolve()).catch(r=>[r])).then(r=>{if(r===void 0||r.length===0)return b===i&&N(!0),!0;if(b===i){const{comp:u,err:f}=r[0];if(f!==void 0&&console.error(f),N(!1,u),h===!0){const F=r.find(({comp:A})=>typeof A.focus=="function"&&G(A.$)===!1);F!==void 0&&F.comp.focus()}}return!1})}function S(){i++,e.forEach(s=>{typeof s.resetValidation=="function"&&s.resetValidation()})}function w(s){s!==void 0&&O(s);const h=i+1;_().then(b=>{h===i&&b===!0&&(o.onSubmit!==void 0?g("submit",s):s!==void 0&&s.target!==void 0&&typeof s.target.submit=="function"&&s.target.submit())})}function V(s){s!==void 0&&O(s),g("reset"),W(()=>{S(),o.autofocus===!0&&o.noResetFocus!==!0&&x()})}function x(){K(()=>{if(n.value===null)return;const s=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),h=>h.tabIndex!==-1);s!=null&&s.focus({preventScroll:!0})})}E(X,{bindComponent(s){e.push(s)},unbindComponent(s){const h=e.indexOf(s);h!==-1&&e.splice(h,1)}});let D=!1;return I(()=>{D=!0}),U(()=>{D===!0&&o.autofocus===!0&&x()}),H(()=>{o.autofocus===!0&&x()}),Object.assign(d.proxy,{validate:_,resetValidation:S,submit:w,reset:V,focus:x,getValidationComponents:()=>e}),()=>Y("form",{class:"q-form",ref:n,onSubmit:w,onReset:V},z(a.default))}});const l=ae(),{lists:et,total:ue}=J(l);le();const me=ie(),fe={name:"OrderListPage",setup(){return me.loaderTrigger("pageLoader"),{type:q("inquiry"),cart:l,total:ue}},data(){return{orderType:"",message:"",contactName:q(null),contactTel:q(null),success:!1}},mounted(){setTimeout(()=>{l.initCartLists(),this.orderType=l.defaultOrderType},500)},methods:{availableAmount(o){return l.availableAmount(o)},arriveDate(o){return l.arriveDate(o)},onReset(){this.$refs.myForm.resetValidation(),this.reset(),l.clearLists()},onSubmit(){this.$refs.myForm.validate().then(o=>{if(o)return this.submitOrder()}).then(o=>{this.success=!0,Z.create({message:"Order Created",color:"blue"})})},reset(){this.orderType=l.defaultOrderType,this.message="",this.contactName="",this.contactTel=""},submitOrder(){let o=`${ne.formatDate(Date.now(),"YYYYMMDDHHmmss")}`;return l.saveOrder({no:o,state:0,type:this.orderType,location:1,contact:`${this.contactName}/${this.contactTel}`,method:o,date:{order:this.getTimestamp()},contactDetail:{name:this.contactName,tel:this.contactTel,message:this.message},order:l.lists})},getTimestamp(){return Math.round(+new Date/1e3)},checkPrice(o){return o?`USD$${o}`:"--"},errorMessages(){this.$refs.contact_name.validate(),this.$refs.contact_phone.validate()},checkSn(o){return o?`#${o}`:"--"},showAmt(){return l.warehouse_id===l.inquiryWarehouseId||l.warehouse_id!==l.inquiryWarehouseId&&(l.firstFromListToCheckType()==="stock_consu"||l.firstFromListToCheckType()==="inq_consu")}}},he={key:0},ye=t("h3",null,"Success",-1),_e={key:1,class:"full-width",style:{"max-width":"1200px"}},pe=t("h2",null,"Order List",-1),ve={class:"text-center flex flex-center q-my-xl"},ge={class:"q-gutter-md full-width text-left"},xe=t("strong",{class:"q-pa-sm"},"Warehouse:",-1),be=t("strong",{class:"q-pa-sm"},"Type:",-1),Te=t("th",{class:"text-left",width:"100"},"SN",-1),ke=t("th",{class:"text-left",width:"200"},"Name",-1),qe=t("th",{class:"text-left"},"description",-1),Ce=t("th",{class:"text-right",width:"150"},"Price (USD)",-1),Se=t("th",{class:"text-right",width:"150"},"Arrival Date",-1),we={key:0,class:"text-right",width:"100"},Ve=t("th",{class:"text-right",width:"20"},"Delete",-1),De={class:"text-left"},Ne={class:"text-left"},Pe={class:"text-left"},Fe=["innerHTML"],Ae={class:"text-right"},Oe={class:"text-right"},Qe={key:0,class:"text-center"},Le={class:"q-pa-md inline"},Be={class:"text-right"},Re=t("div",{class:"q-pa-md"}," No products have been added yet. Please select a product to add. ",-1),Me={class:"text-center flex flex-center q-my-xl"},Ee={class:"q-pa-md flex"},Ie=t("strong",{class:"q-pa-sm"},"Type:",-1),Ue={class:"q-gutter-sm"},He={class:"row q-gutter-md q-my-md"};function Ye(o,a,g,d,n,i){return m(),T(re,{padding:"",class:"flex justify-center items-center"},{default:k(()=>[n.success?(m(),p("div",he,[ye,c(y,{to:"order_history",label:"Go to Order History"})])):(m(),p("div",_e,[pe,t("div",ve,[t("div",ge,[xe,Q(" "+v(d.cart.warehouse_name)+" ",1),be,Q(" "+v(d.cart.warehouse_type),1)])]),d.cart.lists.length>0?(m(),T(oe,{key:0,bordered:"",separator:"cell"},{default:k(()=>[t("thead",null,[t("tr",null,[Te,ke,qe,Ce,Se,i.showAmt()?(m(),p("th",we,"Qty.")):L("",!0),Ve])]),t("tbody",null,[(m(!0),p(B,null,R(d.cart.lists,e=>(m(),p("tr",{key:e},[t("td",De,v(i.checkSn(e.sn)),1),t("td",Ne,v(e.name),1),t("td",Pe,[t("div",{innerHTML:e.description},null,8,Fe)]),t("td",Ae,v(i.checkPrice(e.price)),1),t("td",Oe,v(i.arriveDate(e.sn)),1),d.cart.checkType(e.type)==="stock_consu"||d.cart.checkType(e.type)==="inq_consu"?(m(),p("td",Qe,[c(y,{icon:"add",color:"grey",round:"",onClick:_=>d.cart.increaseAmount(e)},null,8,["onClick"]),t("span",Le,v(e.amount),1),c(y,{icon:"remove",color:"grey",round:"",onClick:_=>d.cart.decreaseAmount(e)},null,8,["onClick"])])):L("",!0),t("td",Be,[c(y,{color:"grey",round:"",icon:"delete",onClick:ee(_=>d.cart.removeItem(e.id),["prevent"])},null,8,["onClick"])])]))),128))])]),_:1})):(m(),T(se,{key:1,rounded:"",class:"bg-red text-white text-center"},{default:k(()=>[Re,c(y,{color:"primary",to:"/products",label:"choose products"})]),_:1})),c($,{color:"primary",class:"q-mt-xl"}),t("div",Me,[c(de,{ref:"myForm",class:"q-gutter-md full-width text-left",onSubmit:a[4]||(a[4]=e=>i.onSubmit()),onReset:a[5]||(a[5]=e=>i.onReset()),onValidationError:a[6]||(a[6]=e=>i.errorMessages())},{default:k(()=>[t("div",Ee,[Ie,t("div",null,[t("div",Ue,[(m(!0),p(B,null,R(d.cart.typeOption,e=>(m(),T(te,{modelValue:n.orderType,"onUpdate:modelValue":a[0]||(a[0]=_=>n.orderType=_),val:e.value,label:e.label,key:e},null,8,["modelValue","val","label"]))),128))])])]),c(C,{ref:"contact_name",outlined:"",modelValue:n.contactName,"onUpdate:modelValue":a[1]||(a[1]=e=>n.contactName=e),label:"Contact Name:","lazy-rules":"",rules:[e=>e&&e.length>0||"Required"]},null,8,["modelValue","rules"]),c(C,{ref:"contact_phone",outlined:"",modelValue:n.contactTel,"onUpdate:modelValue":a[2]||(a[2]=e=>n.contactTel=e),label:"Contact Phone:","lazy-rules":"",rules:[e=>e&&e.length>0||"Required"]},null,8,["modelValue","rules"]),c(C,{modelValue:n.message,"onUpdate:modelValue":a[3]||(a[3]=e=>n.message=e),outlined:"",label:"Note:",type:"textarea"},null,8,["modelValue"]),t("div",He,[c(y,{class:"col",label:"Clear Cart",color:"grey",type:"reset"}),c(y,{class:"col",label:"Choose Products",color:"teal",to:"products"}),c(y,{class:"col",label:"Submit",color:"blue",type:"submit"})])]),_:1},512)])]))]),_:1})}var tt=ce(fe,[["render",Ye]]);export{tt as default};
