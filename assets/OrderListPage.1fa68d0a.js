import{k as I,G as j,I as H,c as A,h as g,l as k,g as U,r as w,ag as z,aW as Y,aX as G,o as W,aD as K,L as R,N as X,ac as $,bc as J,bd as Z,ax as ee,u as h,v as T,x as S,ay as b,j as c,Q as _,y as t,z as L,A as y,F as M,az as E,C as te,aG as V,aF as se,be as oe}from"./index.e5e2f855.js";import{Q as re}from"./QMarkupTable.480eb9d7.js";import{Q as ae}from"./QPage.91b9de98.js";import{u as ne,d as le}from"./cart.c6f1160b.js";import{u as ie}from"./auth.acdb2ef2.js";import{u as ce}from"./preference.a37f88d4.js";import{_ as de}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.171c60b1.js";var ue=I({name:"QBanner",props:{...j,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:r}){const{proxy:{$q:p}}=U(),d=H(s,p),a=A(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(d.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),l=A(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const e=[g("div",{class:"q-banner__avatar col-auto row items-center self-start"},k(r.avatar)),g("div",{class:"q-banner__content col text-body2"},k(r.default))],m=k(r.action);return m!==void 0&&e.push(g("div",{class:l.value},m)),g("div",{class:a.value+(s.inlineActions===!1&&m!==void 0?" q-banner--top-padding":""),role:"alert"},e)}}}),me=I({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(s,{slots:r,emit:p}){const d=U(),a=w(null);let l=0;const e=[];function m(o){const v=typeof o=="boolean"?o:s.noErrorFocus!==!0,q=++l,B=(n,i)=>{p(`validation${n===!0?"Success":"Error"}`,i)},F=n=>{const i=n.validate();return typeof i.then=="function"?i.then(f=>({valid:f,comp:n}),f=>({valid:!1,comp:n,err:f})):Promise.resolve({valid:i,comp:n})};return(s.greedy===!0?Promise.all(e.map(F)).then(n=>n.filter(i=>i.valid!==!0)):e.reduce((n,i)=>n.then(()=>F(i).then(f=>{if(f.valid===!1)return Promise.reject(f)})),Promise.resolve()).catch(n=>[n])).then(n=>{if(n===void 0||n.length===0)return q===l&&B(!0),!0;if(q===l){const{comp:i,err:f}=n[0];if(f!==void 0&&console.error(f),B(!1,i),v===!0){const Q=n.find(({comp:O})=>typeof O.focus=="function"&&K(O.$)===!1);Q!==void 0&&Q.comp.focus()}}return!1})}function C(){l++,e.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function D(o){o!==void 0&&R(o);const v=l+1;m().then(q=>{v===l&&q===!0&&(s.onSubmit!==void 0?p("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function P(o){o!==void 0&&R(o),p("reset"),X(()=>{C(),s.autofocus===!0&&s.noResetFocus!==!0&&x()})}function x(){$(()=>{if(a.value===null)return;const o=a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"),v=>v.tabIndex!==-1);o!=null&&o.focus({preventScroll:!0})})}z(J,{bindComponent(o){e.push(o)},unbindComponent(o){const v=e.indexOf(o);v!==-1&&e.splice(v,1)}});let N=!1;return Y(()=>{N=!0}),G(()=>{N===!0&&s.autofocus===!0&&x()}),W(()=>{s.autofocus===!0&&x()}),Object.assign(d.proxy,{validate:m,resetValidation:C,submit:D,reset:P,focus:x,getValidationComponents:()=>e}),()=>g("form",{class:"q-form",ref:a,onSubmit:D,onReset:P},k(r.default))}});const u=ne(),{lists:fe,total:he}=Z(u);ie();const ve=ce(),ye={name:"OrderListPage",setup(){return ve.loaderTrigger("pageLoader"),{type:w("inquiry"),cart:u,lists:fe,total:he}},data(){return{orderType:"",message:"",contactName:w(null),contactTel:w(null),success:!1}},mounted(){setTimeout(()=>{u.initCartLists(),this.orderType=u.defaultOrderType},500)},methods:{availableAmount(s){return u.availableAmount(s)},arriveDate(s){return u.arriveDate(s)},onReset(){this.$refs.myForm.resetValidation(),this.reset(),u.clearLists()},onSubmit(){this.$refs.myForm.validate().then(s=>{if(s)return this.submitOrder()}).then(s=>{this.success=!0,ee.create({message:"Order Created",color:"blue"})})},reset(){this.orderType=u.defaultOrderType,this.message="",this.contactName="",this.contactTel=""},submitOrder(){let s=`${le.formatDate(Date.now(),"YYYYMMDDHHmmss")}`;return u.saveOrder({no:s,state:0,type:this.orderType,location:1,contact:`${this.contactName}/${this.contactTel}`,method:s,date:{order:this.getTimestamp()},contactDetail:{name:this.contactName,tel:this.contactTel,message:this.message},order:u.lists})},getTimestamp(){return Math.round(+new Date/1e3)},checkPrice(s){return s?`USD$${s}`:"--"},errorMessages(){this.$refs.contact_name.validate(),this.$refs.contact_phone.validate()}}},pe={key:0},_e=t("h3",null,"Success",-1),be={key:1,class:"full-width",style:{"max-width":"1200px"}},ge=t("h2",null,"Order List",-1),xe={class:"text-center flex flex-center q-my-xl"},qe={class:"q-gutter-md full-width text-left"},Te=t("strong",{class:"q-pa-sm"},"Warehouse:",-1),Se=t("strong",{class:"q-pa-sm"},"Type:",-1),ke=t("thead",null,[t("tr",null,[t("th",{class:"text-left",width:"100"},"SN"),t("th",{class:"text-left",width:"200"},"Name"),t("th",{class:"text-left"},"description"),t("th",{class:"text-right",width:"150"},"Price (USD)"),t("th",{class:"text-right",width:"150"},"Scheduled Date"),t("th",{class:"text-right",width:"100"},"Qty."),t("th",{class:"text-right",width:"20"},"Delete")])],-1),we={class:"text-left"},Ve={class:"text-left"},Ce={class:"text-left"},De=["innerHTML"],Pe={class:"text-right"},Ne={class:"text-right"},Be={class:"text-right"},Fe={class:"text-right"},Qe=t("div",{class:"q-pa-md"}," No products have been added yet. Please select a product to add. ",-1),Oe={class:"text-center flex flex-center q-my-xl"},Ae={class:"q-pa-md flex"},Re=t("strong",{class:"q-pa-sm"},"Type:",-1),Le={class:"q-gutter-sm"},Me={class:"row q-gutter-md q-my-md"};function Ee(s,r,p,d,a,l){return h(),T(ae,{padding:"",class:"flex justify-center items-center"},{default:S(()=>[a.success?(h(),b("div",pe,[_e,c(_,{to:"order_history",label:"Go to Order History"})])):(h(),b("div",be,[ge,t("div",xe,[t("div",qe,[Te,L(" "+y(d.cart.warehouse_name)+" ",1),Se,L(" "+y(d.cart.warehouse_type),1)])]),d.cart.lists.length>0?(h(),T(re,{key:0,bordered:"",separator:"cell"},{default:S(()=>[ke,t("tbody",null,[(h(!0),b(M,null,E(d.lists,e=>(h(),b("tr",{key:e},[t("td",we,"#"+y(e.sn),1),t("td",Ve,y(e.name),1),t("td",Ce,[t("div",{innerHTML:e.description},null,8,De)]),t("td",Pe,y(l.checkPrice(e.price)),1),t("td",Ne,y(l.arriveDate(e.sn)),1),t("td",Be,y(e.amount),1),t("td",Fe,[c(_,{color:"grey",round:"",icon:"delete",onClick:se(m=>d.cart.removeItem(e.id),["prevent"])},null,8,["onClick"])])]))),128))])]),_:1})):(h(),T(ue,{key:1,rounded:"",class:"bg-red text-white text-center"},{default:S(()=>[Qe,c(_,{color:"primary",to:"/products",label:"choose products"})]),_:1})),c(te,{color:"primary",class:"q-mt-xl"}),t("div",Oe,[c(me,{ref:"myForm",class:"q-gutter-md full-width text-left",onSubmit:r[4]||(r[4]=e=>l.onSubmit()),onReset:r[5]||(r[5]=e=>l.onReset()),onValidationError:r[6]||(r[6]=e=>l.errorMessages())},{default:S(()=>[t("div",Ae,[Re,t("div",null,[t("div",Le,[(h(!0),b(M,null,E(d.cart.typeOption,e=>(h(),T(oe,{modelValue:a.orderType,"onUpdate:modelValue":r[0]||(r[0]=m=>a.orderType=m),val:e.value,label:e.label,key:e},null,8,["modelValue","val","label"]))),128))])])]),c(V,{ref:"contact_name",outlined:"",modelValue:a.contactName,"onUpdate:modelValue":r[1]||(r[1]=e=>a.contactName=e),label:"Contact Name:","lazy-rules":"",rules:[e=>e&&e.length>0||"Required"]},null,8,["modelValue","rules"]),c(V,{ref:"contact_phone",outlined:"",modelValue:a.contactTel,"onUpdate:modelValue":r[2]||(r[2]=e=>a.contactTel=e),label:"Contact Phone:","lazy-rules":"",rules:[e=>e&&e.length>0||"Required"]},null,8,["modelValue","rules"]),c(V,{modelValue:a.message,"onUpdate:modelValue":r[3]||(r[3]=e=>a.message=e),outlined:"",label:"Note:",type:"textarea"},null,8,["modelValue"]),t("div",Me,[c(_,{class:"col",label:"Clear Cart",color:"grey",type:"reset"}),c(_,{class:"col",label:"Choose Products",color:"teal",to:"products"}),c(_,{class:"col",label:"Submit",color:"blue",type:"submit"})])]),_:1},512)])]))]),_:1})}var Xe=de(ye,[["render",Ee]]);export{Xe as default};
