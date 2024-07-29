import{k as I,I as U,K as j,c as R,h as p,l as k,g as M,r as L,ai as H,aN as z,aO as Y,o as K,b4 as G,N as A,R as J,ae as W,b5 as X,b6 as Z,ax as $,t as m,u as S,v as T,ay as x,j as c,B as _,C as t,F as Q,az as E,y as ee,E as te,aC as C,z as y,aB as se,b7 as oe}from"./index.2867131f.js";import{Q as ae}from"./QMarkupTable.8ff42f9e.js";import{Q as re}from"./QPage.707a3e00.js";import{u as ne,d as le}from"./cart.ee816eed.js";import{u as ie}from"./auth.d67a04fa.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.780e8d47.js";var ue=I({name:"QBanner",props:{...U,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:n}){const{proxy:{$q:b}}=M(),h=j(s,b),a=R(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(h.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),l=R(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const e=[p("div",{class:"q-banner__avatar col-auto row items-center self-start"},k(n.avatar)),p("div",{class:"q-banner__content col text-body2"},k(n.default))],u=k(n.action);return u!==void 0&&e.push(p("div",{class:l.value},u)),p("div",{class:a.value+(s.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},e)}}}),de=I({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(s,{slots:n,emit:b}){const h=M(),a=L(null);let l=0;const e=[];function u(o){const v=typeof o=="boolean"?o:s.noErrorFocus!==!0,q=++l,B=(r,i)=>{b(`validation${r===!0?"Success":"Error"}`,i)},P=r=>{const i=r.validate();return typeof i.then=="function"?i.then(d=>({valid:d,comp:r}),d=>({valid:!1,comp:r,err:d})):Promise.resolve({valid:i,comp:r})};return(s.greedy===!0?Promise.all(e.map(P)).then(r=>r.filter(i=>i.valid!==!0)):e.reduce((r,i)=>r.then(()=>P(i).then(d=>{if(d.valid===!1)return Promise.reject(d)})),Promise.resolve()).catch(r=>[r])).then(r=>{if(r===void 0||r.length===0)return q===l&&B(!0),!0;if(q===l){const{comp:i,err:d}=r[0];if(d!==void 0&&console.error(d),B(!1,i),v===!0){const O=r.find(({comp:F})=>typeof F.focus=="function"&&G(F.$)===!1);O!==void 0&&O.comp.focus()}}return!1})}function V(){l++,e.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function w(o){o!==void 0&&A(o);const v=l+1;u().then(q=>{v===l&&q===!0&&(s.onSubmit!==void 0?b("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function D(o){o!==void 0&&A(o),b("reset"),J(()=>{V(),s.autofocus===!0&&s.noResetFocus!==!0&&g()})}function g(){W(()=>{if(a.value===null)return;const o=a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"),v=>v.tabIndex!==-1);o!=null&&o.focus({preventScroll:!0})})}H(X,{bindComponent(o){e.push(o)},unbindComponent(o){const v=e.indexOf(o);v!==-1&&e.splice(v,1)}});let N=!1;return z(()=>{N=!0}),Y(()=>{N===!0&&s.autofocus===!0&&g()}),K(()=>{s.autofocus===!0&&g()}),Object.assign(h.proxy,{validate:u,resetValidation:V,submit:w,reset:D,focus:g,getValidationComponents:()=>e}),()=>p("form",{class:"q-form",ref:a,onSubmit:w,onReset:D},k(n.default))}});const f=ne(),{lists:me,total:fe}=Z(f);ie();const he={name:"OrderListPage",setup(){return{type:L("reserved"),cart:f,lists:me,total:fe}},data(){return{orderType:f.defaultOrderType,message:"",contactName:"",contactTel:"",success:!1}},methods:{availableAmount(s){return f.availableAmount(s)},arriveDate(s){return f.arriveDate(s)},onReset(){this.$refs.myForm.resetValidation(),this.reset(),f.clearLists()},onSubmit(){this.$refs.myForm.validate().then(s=>this.submitOrder()).then(s=>{this.success=!0,$.create({message:"Order Created",color:"blue"})})},reset(){this.orderType=f.defaultOrderType,this.message="",this.contactName="",this.contactTel=""},submitOrder(){let s=`${le.formatDate(Date.now(),"YYYYMMDDHHmmss")}`;return f.saveOrder({no:s,state:0,type:this.orderType,location:1,contact:`${this.contactName}/${this.contactTel}`,method:s,date:{order:this.getTimestamp()},contactDetail:{name:this.contactName,tel:this.contactTel,message:this.message},order:f.lists})},getTimestamp(){return Math.round(+new Date/1e3)},checkPrice(s){return s?`USD$${s}`:"--"}}},ve={key:0},be=t("h3",null,"Success",-1),ye={key:1,class:"full-width",style:{"max-width":"1200px"}},xe=t("h2",null,"Order List",-1),_e=t("thead",null,[t("tr",null,[t("th",{class:"text-left",width:"100"},"\u7522\u54C1SN"),t("th",{class:"text-left",width:"200"},"\u7522\u54C1\u540D\u7A31"),t("th",{class:"text-left"},"\u7522\u54C1\u63CF\u8FF0"),t("th",{class:"text-right",width:"150"},"\u7522\u54C1\u50F9\u683C (USD)"),t("th",{class:"text-right",width:"100"},"\u53EF\u4E0B\u55AE\u6578\u91CF"),t("th",{class:"text-right",width:"150"},"\u6700\u5FEB\u5230\u6E2F\u65E5\u671F"),t("th",{class:"text-right",width:"100"},"\u6578\u91CF"),t("th",{class:"text-right",width:"20"},"\u522A\u9664")])],-1),pe={class:"text-left"},ge={class:"text-left"},qe={class:"text-left"},Se=["innerHTML"],Te={class:"text-right"},ke={class:"text-right"},Ce={class:"text-right"},Ve={class:"text-right"},we={class:"text-right"},De={class:"text-center flex flex-center q-my-xl"},Ne={class:"q-pa-md flex"},Be=t("strong",{class:"q-pa-sm"},"Type:",-1),Pe={class:"q-gutter-sm"},Oe={class:"row q-gutter-md q-my-md"};function Fe(s,n,b,h,a,l){return m(),S(re,{padding:"",class:"flex justify-center items-center"},{default:T(()=>[a.success?(m(),x("div",ve,[be,c(_,{to:"order_history",label:"Go to Order History"})])):(m(),x("div",ye,[xe,h.cart.lists.length>0?(m(),S(ae,{key:0,bordered:"",separator:"cell"},{default:T(()=>[_e,t("tbody",null,[(m(!0),x(Q,null,E(h.lists,e=>(m(),x("tr",{key:e},[t("td",pe,"#"+y(e.sn),1),t("td",ge,y(e.name),1),t("td",qe,[t("div",{innerHTML:e.description},null,8,Se)]),t("td",Te,y(l.checkPrice(e.price)),1),t("td",ke,y(l.availableAmount(e.sn)),1),t("td",Ce,y(l.arriveDate(e.sn)),1),t("td",Ve,y(e.amount),1),t("td",we,[c(_,{color:"grey",round:"",icon:"delete",onClick:se(u=>h.cart.removeItem(e.id),["prevent"])},null,8,["onClick"])])]))),128))])]),_:1})):(m(),S(ue,{key:1,rounded:"",class:"bg-red text-white text-center"},{default:T(()=>[ee(" No Items ")]),_:1})),c(te,{color:"primary",class:"q-mt-xl"}),t("div",De,[c(de,{ref:"myForm",class:"q-gutter-md full-width text-left",onSubmit:l.onSubmit,onReset:l.onReset},{default:T(()=>[t("div",Ne,[Be,t("div",null,[t("div",Pe,[(m(!0),x(Q,null,E(h.cart.typeOption,e=>(m(),S(oe,{modelValue:a.orderType,"onUpdate:modelValue":n[0]||(n[0]=u=>a.orderType=u),val:e.value,label:e.label,key:e},null,8,["modelValue","val","label"]))),128))])])]),c(C,{outlined:"",modelValue:a.contactName,"onUpdate:modelValue":n[1]||(n[1]=e=>a.contactName=e),label:"Contact Name:","lazy-rules":"",rules:[e=>e&&e.length>0||"Required"]},null,8,["modelValue","rules"]),c(C,{outlined:"",modelValue:a.contactTel,"onUpdate:modelValue":n[2]||(n[2]=e=>a.contactTel=e),label:"Contact Phone:","lazy-rules":"",rules:[e=>e&&e.length>0||"Required"]},null,8,["modelValue","rules"]),c(C,{modelValue:a.message,"onUpdate:modelValue":n[3]||(n[3]=e=>a.message=e),outlined:"",label:"Note:",type:"textarea"},null,8,["modelValue"]),t("div",Oe,[c(_,{class:"col",label:"Clear Cart",color:"grey",type:"reset"}),c(_,{class:"col",label:"Choose Products",color:"teal",to:"products"}),c(_,{class:"col",label:"Submit",color:"blue",type:"submit"})])]),_:1},8,["onSubmit","onReset"])])]))]),_:1})}var je=ce(he,[["render",Fe]]);export{je as default};
