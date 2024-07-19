import{k as L,I as U,K as j,c as P,h as x,l as V,g as M,r as I,ai as H,aK as z,aL as Y,o as K,b2 as G,N as R,R as J,ae as W,b3 as X,b4 as Z,au as $,t as m,u as q,v as w,av as _,j as c,B as p,C as t,F as O,aw as E,y as ee,E as te,az as k,z as y,ay as se,b5 as oe}from"./index.e0359fcf.js";import{Q as ae}from"./QMarkupTable.cbb41fda.js";import{Q as re}from"./QPage.94a64a73.js";import{u as ne}from"./cart.f38c6ce6.js";import{u as le}from"./auth.7f592d45.js";import{d as ie}from"./date.dec8cba3.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.b71c7ddf.js";var ue=L({name:"QBanner",props:{...U,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(o,{slots:n}){const{proxy:{$q:b}}=M(),f=j(o,b),a=P(()=>"q-banner row items-center"+(o.dense===!0?" q-banner--dense":"")+(f.value===!0?" q-banner--dark q-dark":"")+(o.rounded===!0?" rounded-borders":"")),l=P(()=>`q-banner__actions row items-center justify-end col-${o.inlineActions===!0?"auto":"all"}`);return()=>{const e=[x("div",{class:"q-banner__avatar col-auto row items-center self-start"},V(n.avatar)),x("div",{class:"q-banner__content col text-body2"},V(n.default))],u=V(n.action);return u!==void 0&&e.push(x("div",{class:l.value},u)),x("div",{class:a.value+(o.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},e)}}}),de=L({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(o,{slots:n,emit:b}){const f=M(),a=I(null);let l=0;const e=[];function u(s){const h=typeof s=="boolean"?s:o.noErrorFocus!==!0,S=++l,F=(r,i)=>{b(`validation${r===!0?"Success":"Error"}`,i)},N=r=>{const i=r.validate();return typeof i.then=="function"?i.then(d=>({valid:d,comp:r}),d=>({valid:!1,comp:r,err:d})):Promise.resolve({valid:i,comp:r})};return(o.greedy===!0?Promise.all(e.map(N)).then(r=>r.filter(i=>i.valid!==!0)):e.reduce((r,i)=>r.then(()=>N(i).then(d=>{if(d.valid===!1)return Promise.reject(d)})),Promise.resolve()).catch(r=>[r])).then(r=>{if(r===void 0||r.length===0)return S===l&&F(!0),!0;if(S===l){const{comp:i,err:d}=r[0];if(d!==void 0&&console.error(d),F(!1,i),h===!0){const A=r.find(({comp:Q})=>typeof Q.focus=="function"&&G(Q.$)===!1);A!==void 0&&A.comp.focus()}}return!1})}function T(){l++,e.forEach(s=>{typeof s.resetValidation=="function"&&s.resetValidation()})}function D(s){s!==void 0&&R(s);const h=l+1;u().then(S=>{h===l&&S===!0&&(o.onSubmit!==void 0?b("submit",s):s!==void 0&&s.target!==void 0&&typeof s.target.submit=="function"&&s.target.submit())})}function B(s){s!==void 0&&R(s),b("reset"),J(()=>{T(),o.autofocus===!0&&o.noResetFocus!==!0&&g()})}function g(){W(()=>{if(a.value===null)return;const s=a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"),h=>h.tabIndex!==-1);s!=null&&s.focus({preventScroll:!0})})}H(X,{bindComponent(s){e.push(s)},unbindComponent(s){const h=e.indexOf(s);h!==-1&&e.splice(h,1)}});let C=!1;return z(()=>{C=!0}),Y(()=>{C===!0&&o.autofocus===!0&&g()}),K(()=>{o.autofocus===!0&&g()}),Object.assign(f.proxy,{validate:u,resetValidation:T,submit:D,reset:B,focus:g,getValidationComponents:()=>e}),()=>x("form",{class:"q-form",ref:a,onSubmit:D,onReset:B},V(n.default))}});const v=ne(),{lists:me,total:fe}=Z(v);le();const he={name:"OrderListPage",setup(){return{type:I("reserved"),cart:v,lists:me,total:fe}},data(){return{orderType:"2",message:"",contactName:"",contactTel:"",success:!1}},methods:{availableAmount(o){return v.availableAmount(o)},arriveDate(o){return v.arriveDate(o)},onReset(){this.$refs.myForm.resetValidation(),this.reset(),v.clearLists()},onSubmit(){this.$refs.myForm.validate().then(o=>this.submitOrder()).then(o=>{this.success=!0,$.create({message:"\u8A02\u55AE\u5EFA\u7ACB\u5B8C\u6210",color:"blue"})})},reset(){this.orderType="0",this.message="",this.contactName="",this.contactTel=""},submitOrder(){let o=`${ie.formatDate(Date.now(),"YYYYMMDDHHmmss")}`;return v.saveOrder({no:o,state:0,type:this.orderType,location:1,contact:`${this.contactName}/${this.contactTel}`,method:o,date:{order:this.getTimestamp()},contactDetail:{name:this.contactName,tel:this.contactTel,message:this.message},order:v.lists})},getTimestamp(){return Math.round(+new Date/1e3)}}},ve={key:0},be=t("h3",null,"Success",-1),ye={key:1,class:"full-width",style:{"max-width":"1200px"}},_e=t("h2",null,"Order List",-1),pe=t("thead",null,[t("tr",null,[t("th",{class:"text-left",width:"100"},"\u7522\u54C1SN"),t("th",{class:"text-left",width:"200"},"\u7522\u54C1\u540D\u7A31"),t("th",{class:"text-left"},"\u7522\u54C1\u63CF\u8FF0"),t("th",{class:"text-right",width:"150"},"\u7522\u54C1\u50F9\u683C (USD)"),t("th",{class:"text-right",width:"100"},"\u53EF\u4E0B\u55AE\u6578\u91CF"),t("th",{class:"text-right",width:"150"},"\u6700\u5FEB\u5230\u6E2F\u65E5\u671F"),t("th",{class:"text-right",width:"100"},"\u6578\u91CF"),t("th",{class:"text-right",width:"20"},"\u522A\u9664")])],-1),xe={class:"text-left"},ge={class:"text-left"},Se={class:"text-left"},qe=["innerHTML"],we={class:"text-right"},Ve={class:"text-right"},ke={class:"text-right"},Te={class:"text-right"},De={class:"text-right"},Be={class:"text-center flex flex-center q-my-xl"},Ce={class:"q-pa-md flex"},Fe=t("strong",{class:"q-pa-sm"},"\u8A02\u55AE\u985E\u578B:",-1),Ne={class:"q-gutter-sm"},Ae={class:"row q-gutter-md q-my-md"};function Qe(o,n,b,f,a,l){return m(),q(re,{padding:"",class:"flex justify-center items-center"},{default:w(()=>[a.success?(m(),_("div",ve,[be,c(p,{to:"order_history",label:"Go to Order History"})])):(m(),_("div",ye,[_e,f.cart.lists.length>0?(m(),q(ae,{key:0,bordered:"",separator:"cell"},{default:w(()=>[pe,t("tbody",null,[(m(!0),_(O,null,E(f.lists,e=>(m(),_("tr",{key:e},[t("td",xe,"#"+y(e.sn),1),t("td",ge,y(e.name),1),t("td",Se,[t("div",{innerHTML:e.description},null,8,qe)]),t("td",we,"USD$"+y(e.price),1),t("td",Ve,y(l.availableAmount(e.sn)),1),t("td",ke,y(l.arriveDate(e.sn)),1),t("td",Te,y(e.amount),1),t("td",De,[c(p,{color:"grey",round:"",icon:"delete",onClick:se(u=>f.cart.removeItem(e.sn_id),["prevent"])},null,8,["onClick"])])]))),128))])]),_:1})):(m(),q(ue,{key:1,rounded:"",class:"bg-red text-white text-center"},{default:w(()=>[ee(" \u76EE\u524D\u7121\u6E05\u55AE ")]),_:1})),c(te,{color:"primary",class:"q-mt-xl"}),t("div",Be,[c(de,{ref:"myForm",class:"q-gutter-md full-width text-left",onSubmit:l.onSubmit,onReset:l.onReset},{default:w(()=>[t("div",Ce,[Fe,t("div",null,[t("div",Ne,[(m(!0),_(O,null,E(f.cart.typeOption,e=>(m(),q(oe,{modelValue:a.orderType,"onUpdate:modelValue":n[0]||(n[0]=u=>a.orderType=u),val:e.value,label:e.label,key:e},null,8,["modelValue","val","label"]))),128))])])]),c(k,{outlined:"",modelValue:a.contactName,"onUpdate:modelValue":n[1]||(n[1]=e=>a.contactName=e),label:"\u806F\u7D61\u4EBA\u540D\u7A31:","lazy-rules":"",rules:[e=>e&&e.length>0||"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D"]},null,8,["modelValue","rules"]),c(k,{outlined:"",modelValue:a.contactTel,"onUpdate:modelValue":n[2]||(n[2]=e=>a.contactTel=e),label:"\u806F\u7D61\u4EBA\u96FB\u8A71:","lazy-rules":"",rules:[e=>e&&e.length>0||"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D"]},null,8,["modelValue","rules"]),c(k,{modelValue:a.message,"onUpdate:modelValue":n[3]||(n[3]=e=>a.message=e),outlined:"",label:"\u5099\u8A3B:",type:"textarea"},null,8,["modelValue"]),t("div",Ae,[c(p,{class:"col",label:"\u6E05\u7A7A\u8CFC\u7269\u8ECA",color:"grey",type:"reset"}),c(p,{class:"col",label:"\u7E7C\u7E8C\u8CFC\u7269",color:"teal",to:"products"}),c(p,{class:"col",label:"\u78BA\u8A8D",color:"blue",type:"submit"})])]),_:1},8,["onSubmit","onReset"])])]))]),_:1})}var He=ce(he,[["render",Qe]]);export{He as default};
