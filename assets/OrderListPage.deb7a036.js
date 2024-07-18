import{k as M,I as U,K as j,c as P,h as p,l as k,g as I,r as L,ai as H,aJ as Y,aK as z,o as K,b2 as G,N as R,R as J,ae as W,b3 as X,b4 as Z,b1 as $,t as m,u as q,v as V,au as x,j as c,B as _,C as t,F as O,av as E,y as ee,E as te,ay as w,z as y,ax as se,b5 as oe}from"./index.7b943df6.js";import{Q as ae}from"./QMarkupTable.cca1ab89.js";import{Q as re}from"./QPage.129efe71.js";import{u as ne}from"./cart.d29c6492.js";import{u as le}from"./auth.28940af3.js";import{d as ie}from"./date.d689a167.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.9ba805d2.js";var ue=M({name:"QBanner",props:{...U,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(o,{slots:n}){const{proxy:{$q:b}}=I(),f=j(o,b),a=P(()=>"q-banner row items-center"+(o.dense===!0?" q-banner--dense":"")+(f.value===!0?" q-banner--dark q-dark":"")+(o.rounded===!0?" rounded-borders":"")),l=P(()=>`q-banner__actions row items-center justify-end col-${o.inlineActions===!0?"auto":"all"}`);return()=>{const e=[p("div",{class:"q-banner__avatar col-auto row items-center self-start"},k(n.avatar)),p("div",{class:"q-banner__content col text-body2"},k(n.default))],u=k(n.action);return u!==void 0&&e.push(p("div",{class:l.value},u)),p("div",{class:a.value+(o.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},e)}}}),de=M({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(o,{slots:n,emit:b}){const f=I(),a=L(null);let l=0;const e=[];function u(s){const h=typeof s=="boolean"?s:o.noErrorFocus!==!0,S=++l,F=(r,i)=>{b(`validation${r===!0?"Success":"Error"}`,i)},N=r=>{const i=r.validate();return typeof i.then=="function"?i.then(d=>({valid:d,comp:r}),d=>({valid:!1,comp:r,err:d})):Promise.resolve({valid:i,comp:r})};return(o.greedy===!0?Promise.all(e.map(N)).then(r=>r.filter(i=>i.valid!==!0)):e.reduce((r,i)=>r.then(()=>N(i).then(d=>{if(d.valid===!1)return Promise.reject(d)})),Promise.resolve()).catch(r=>[r])).then(r=>{if(r===void 0||r.length===0)return S===l&&F(!0),!0;if(S===l){const{comp:i,err:d}=r[0];if(d!==void 0&&console.error(d),F(!1,i),h===!0){const A=r.find(({comp:Q})=>typeof Q.focus=="function"&&G(Q.$)===!1);A!==void 0&&A.comp.focus()}}return!1})}function T(){l++,e.forEach(s=>{typeof s.resetValidation=="function"&&s.resetValidation()})}function D(s){s!==void 0&&R(s);const h=l+1;u().then(S=>{h===l&&S===!0&&(o.onSubmit!==void 0?b("submit",s):s!==void 0&&s.target!==void 0&&typeof s.target.submit=="function"&&s.target.submit())})}function B(s){s!==void 0&&R(s),b("reset"),J(()=>{T(),o.autofocus===!0&&o.noResetFocus!==!0&&g()})}function g(){W(()=>{if(a.value===null)return;const s=a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"),h=>h.tabIndex!==-1);s!=null&&s.focus({preventScroll:!0})})}H(X,{bindComponent(s){e.push(s)},unbindComponent(s){const h=e.indexOf(s);h!==-1&&e.splice(h,1)}});let C=!1;return Y(()=>{C=!0}),z(()=>{C===!0&&o.autofocus===!0&&g()}),K(()=>{o.autofocus===!0&&g()}),Object.assign(f.proxy,{validate:u,resetValidation:T,submit:D,reset:B,focus:g,getValidationComponents:()=>e}),()=>p("form",{class:"q-form",ref:a,onSubmit:D,onReset:B},k(n.default))}});const v=ne(),{lists:me,total:fe}=Z(v);le();const he={name:"OrderListPage",setup(){return{type:L("reserved"),cart:v,lists:me,total:fe}},data(){return{orderType:"2",message:"",contactName:"",contactTel:"",success:!1}},methods:{availableAmount(o){return v.availableAmount(o)},arriveDate(o){return v.arriveDate(o)},onReset(){this.$refs.myForm.resetValidation(),this.reset(),v.clearLists()},onSubmit(){this.$refs.myForm.validate().then(o=>this.submitOrder()).then(o=>{this.success=!0,$.create({message:"\u8A02\u55AE\u5EFA\u7ACB\u5B8C\u6210",color:"blue"})})},reset(){this.orderType="0",this.message="",this.contactName="",this.contactTel=""},submitOrder(){let o=`${ie.formatDate(Date.now(),"YYYYMMDDHHmmss")}`;return v.saveOrder({no:o,state:0,type:this.orderType,location:1,contact:`${this.contactName}/${this.contactTel}`,method:o,date:{order:this.getTimestamp()},contactDetail:{name:this.contactName,tel:this.contactTel,message:this.message},order:v.lists})},getTimestamp(){return Math.round(+new Date/1e3)}}},ve={key:0},be=t("h3",null,"Success",-1),ye={key:1,class:"full-width",style:{"max-width":"1200px"}},xe=t("h2",null,"Order List",-1),_e=t("thead",null,[t("tr",null,[t("th",{class:"text-left",width:"100"},"\u7522\u54C1SN"),t("th",{class:"text-left",width:"200"},"\u7522\u54C1\u540D\u7A31"),t("th",{class:"text-left"},"\u7522\u54C1\u63CF\u8FF0"),t("th",{class:"text-right",width:"150"},"\u7522\u54C1\u50F9\u683C (USD)"),t("th",{class:"text-right",width:"100"},"\u53EF\u4E0B\u55AE\u6578\u91CF"),t("th",{class:"text-right",width:"150"},"\u6700\u5FEB\u5230\u6E2F\u65E5\u671F"),t("th",{class:"text-right",width:"100"},"\u6578\u91CF"),t("th",{class:"text-right",width:"20"},"\u522A\u9664")])],-1),pe={class:"text-left"},ge={class:"text-left"},Se={class:"text-left"},qe=["innerHTML"],Ve={class:"text-right"},ke={class:"text-right"},we={class:"text-right"},Te={class:"text-right"},De={class:"text-right"},Be={class:"text-center flex flex-center q-my-xl"},Ce={class:"q-pa-md flex"},Fe=t("strong",{class:"q-pa-sm"},"\u8A02\u55AE\u985E\u578B:",-1),Ne={class:"q-gutter-sm"},Ae={class:"row q-gutter-md q-my-md"};function Qe(o,n,b,f,a,l){return m(),q(re,{padding:"",class:"flex justify-center items-center"},{default:V(()=>[a.success?(m(),x("div",ve,[be,c(_,{to:"order_history",label:"Go to Order History"})])):(m(),x("div",ye,[xe,f.cart.lists.length>0?(m(),q(ae,{key:0,bordered:"",separator:"cell"},{default:V(()=>[_e,t("tbody",null,[(m(!0),x(O,null,E(f.lists,e=>(m(),x("tr",{key:e},[t("td",pe,"#"+y(e.sn),1),t("td",ge,y(e.name),1),t("td",Se,[t("div",{innerHTML:e.description},null,8,qe)]),t("td",Ve,"USD$"+y(e.price),1),t("td",ke,y(l.availableAmount(e.sn)),1),t("td",we,y(l.arriveDate(e.sn)),1),t("td",Te,y(e.amount),1),t("td",De,[c(_,{color:"grey",round:"",icon:"delete",onClick:se(u=>f.cart.removeItem(e.sn),["prevent"])},null,8,["onClick"])])]))),128))])]),_:1})):(m(),q(ue,{key:1,rounded:"",class:"bg-red text-white text-center"},{default:V(()=>[ee(" \u76EE\u524D\u7121\u6E05\u55AE ")]),_:1})),c(te,{color:"primary",class:"q-mt-xl"}),t("div",Be,[c(de,{ref:"myForm",class:"q-gutter-md full-width text-left",onSubmit:l.onSubmit,onReset:l.onReset},{default:V(()=>[t("div",Ce,[Fe,t("div",null,[t("div",Ne,[(m(!0),x(O,null,E(f.cart.typeOption,e=>(m(),q(oe,{modelValue:a.orderType,"onUpdate:modelValue":n[0]||(n[0]=u=>a.orderType=u),val:e.value,label:e.label,key:e},null,8,["modelValue","val","label"]))),128))])])]),c(w,{outlined:"",modelValue:a.contactName,"onUpdate:modelValue":n[1]||(n[1]=e=>a.contactName=e),label:"\u806F\u7D61\u4EBA\u540D\u7A31:","lazy-rules":"",rules:[e=>e&&e.length>0||"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D"]},null,8,["modelValue","rules"]),c(w,{outlined:"",modelValue:a.contactTel,"onUpdate:modelValue":n[2]||(n[2]=e=>a.contactTel=e),label:"\u806F\u7D61\u4EBA\u96FB\u8A71:","lazy-rules":"",rules:[e=>e&&e.length>0||"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D"]},null,8,["modelValue","rules"]),c(w,{modelValue:a.message,"onUpdate:modelValue":n[3]||(n[3]=e=>a.message=e),outlined:"",label:"\u5099\u8A3B:",type:"textarea"},null,8,["modelValue"]),t("div",Ae,[c(_,{class:"col",label:"\u6E05\u7A7A\u8CFC\u7269\u8ECA",color:"grey",type:"reset"}),c(_,{class:"col",label:"\u7E7C\u7E8C\u8CFC\u7269",color:"teal",to:"products"}),c(_,{class:"col",label:"\u78BA\u8A8D",color:"blue",type:"submit"})])]),_:1},8,["onSubmit","onReset"])])]))]),_:1})}var He=ce(he,[["render",Qe]]);export{He as default};
