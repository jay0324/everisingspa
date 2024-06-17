import{Q as T}from"./QBtn.3f8e3f20.js";import{o as N,u as z,Q as K,a as U}from"./option-sizes.cb23ae5e.js";import{a as $,b as W,Q as X}from"./QIcon.b97d19f6.js";import{u as Y,a as G}from"./use-dark.460eb9fd.js";import{a as H,i as J,h as Z}from"./use-key-composition.ddb5aaca.js";import{h as v,k as j,r as R,c as k,a8 as E,g as L,A as Q,L as ee,a1 as te,a2 as oe,o as ae,K as re,ae as ne,ai as se,p as V,q as le,t as w,j as i,z as o,W as O,X as ie,F as ce,x as _,v as A,Y as de}from"./index.52d4ff07.js";import{a as ue,h as M}from"./render.fd5a9047.js";import{Q as P}from"./QInput.13b05aa2.js";import{c as fe}from"./use-router-link.e703f44f.js";import{Q as me}from"./QPage.89a89695.js";import{u as ve}from"./cart.0f8b8a60.js";import{_ as he}from"./plugin-vue_export-helper.21dcd24c.js";import"./dom.1327562a.js";const be=v("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[v("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),v("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var D=j({name:"QRadio",props:{...Y,...$,...H,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(t,{slots:c,emit:h}){const{proxy:d}=L(),s=G(t,d.$q),m=W(t,N),r=R(null),{refocusTargetEl:b,refocusTarget:q}=z(t,r),u=k(()=>E(t.modelValue)===E(t.val)),C=k(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(t.disable===!0?" disabled":"")+(s.value===!0?" q-radio--dark":"")+(t.dense===!0?" q-radio--dense":"")+(t.leftLabel===!0?" reverse":"")),y=k(()=>{const e=t.color!==void 0&&(t.keepColor===!0||u.value===!0)?` text-${t.color}`:"";return`q-radio__inner relative-position q-radio__inner--${u.value===!0?"truthy":"falsy"}${e}`}),p=k(()=>(u.value===!0?t.checkedIcon:t.uncheckedIcon)||null),a=k(()=>t.disable===!0?-1:t.tabindex||0),f=k(()=>{const e={type:"radio"};return t.name!==void 0&&Object.assign(e,{".checked":u.value===!0,"^checked":u.value===!0?"checked":void 0,name:t.name,value:t.val}),e}),x=J(f);function g(e){e!==void 0&&(Q(e),q(e)),t.disable!==!0&&u.value!==!0&&h("update:modelValue",t.val,e)}function S(e){(e.keyCode===13||e.keyCode===32)&&Q(e)}function B(e){(e.keyCode===13||e.keyCode===32)&&g(e)}return Object.assign(d,{set:g}),()=>{const e=p.value!==null?[v("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[v(X,{class:"q-radio__icon",name:p.value})])]:[be];t.disable!==!0&&x(e,"unshift"," q-radio__native q-ma-none q-pa-none");const n=[v("div",{class:y.value,style:m.value,"aria-hidden":"true"},e)];b.value!==null&&n.push(b.value);const l=t.label!==void 0?ue(c.default,[t.label]):M(c.default);return l!==void 0&&n.push(v("div",{class:"q-radio__label q-anchor--skip"},l)),v("div",{ref:r,class:C.value,tabindex:a.value,role:"radio","aria-label":t.label,"aria-checked":u.value===!0?"true":"false","aria-disabled":t.disable===!0?"true":void 0,onClick:g,onKeydown:S,onKeyup:B},n)}}}),_e=j({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:c,emit:h}){const d=L(),s=R(null);let m=0;const r=[];function b(a){const f=typeof a=="boolean"?a:t.noErrorFocus!==!0,x=++m,g=(e,n)=>{h(`validation${e===!0?"Success":"Error"}`,n)},S=e=>{const n=e.validate();return typeof n.then=="function"?n.then(l=>({valid:l,comp:e}),l=>({valid:!1,comp:e,err:l})):Promise.resolve({valid:n,comp:e})};return(t.greedy===!0?Promise.all(r.map(S)).then(e=>e.filter(n=>n.valid!==!0)):r.reduce((e,n)=>e.then(()=>S(n).then(l=>{if(l.valid===!1)return Promise.reject(l)})),Promise.resolve()).catch(e=>[e])).then(e=>{if(e===void 0||e.length===0)return x===m&&g(!0),!0;if(x===m){const{comp:n,err:l}=e[0];if(l!==void 0&&console.error(l),g(!1,n),f===!0){const F=e.find(({comp:I})=>typeof I.focus=="function"&&fe(I.$)===!1);F!==void 0&&F.comp.focus()}}return!1})}function q(){m++,r.forEach(a=>{typeof a.resetValidation=="function"&&a.resetValidation()})}function u(a){a!==void 0&&Q(a);const f=m+1;b().then(x=>{f===m&&x===!0&&(t.onSubmit!==void 0?h("submit",a):a!==void 0&&a.target!==void 0&&typeof a.target.submit=="function"&&a.target.submit())})}function C(a){a!==void 0&&Q(a),h("reset"),re(()=>{q(),t.autofocus===!0&&t.noResetFocus!==!0&&y()})}function y(){Z(()=>{if(s.value===null)return;const a=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),f=>f.tabIndex!==-1);a!=null&&a.focus({preventScroll:!0})})}ee(ne,{bindComponent(a){r.push(a)},unbindComponent(a){const f=r.indexOf(a);f!==-1&&r.splice(f,1)}});let p=!1;return te(()=>{p=!0}),oe(()=>{p===!0&&t.autofocus===!0&&y()}),ae(()=>{t.autofocus===!0&&y()}),Object.assign(d.proxy,{validate:b,resetValidation:q,submit:u,reset:C,focus:y,getValidationComponents:()=>r}),()=>v("form",{class:"q-form",ref:s,onSubmit:u,onReset:C},M(c.default))}});const ye={name:"OrderListPage",setup(){const t=ve(),{lists:c,total:h}=se(t);return{type:R("reserved"),cart:t,lists:c,total:h}},data(){return{orderType:"reserved"}}},xe=o("h2",null,"Order List",-1),ge=o("thead",null,[o("tr",null,[o("th",{class:"text-left",width:"100"},"Name"),o("th",{class:"text-left"},"Description"),o("th",{class:"text-right",width:"100"},"Price (EUR)"),o("th",{class:"text-center",width:"200"},"Qty."),o("th",{class:"text-right",width:"100"},"Sub Total (EUR)"),o("th",{class:"text-right",width:"20"},"Delete")])],-1),ke={class:"text-left"},pe={class:"text-left"},qe={class:"text-right"},Ce={class:"text-center"},Se={class:"q-pa-md inline"},Te={class:"text-right"},Qe={class:"text-right"},Ve={class:"text-right"},we={colspan:"6"},Pe={class:"text-center flex flex-center q-my-xl"},Re={class:"q-pa-md flex"},Be=o("strong",{class:"q-pa-sm"},"Type:",-1),Fe={class:"q-gutter-sm"},Ie=o("div",{class:"q-px-sm"},[A(" Reserved Order: The inventory will be reserved for you for 7 days."),o("br"),A(" Confirmed Order: Will be shipped immediately. ")],-1);function Ee(t,c,h,d,s,m){return V(),le(me,{padding:""},{default:w(()=>[xe,i(K,{bordered:"",separator:"cell"},{default:w(()=>[ge,o("tbody",null,[(V(!0),O(ce,null,ie(d.lists,r=>(V(),O("tr",{key:r},[o("td",ke,_(r.name),1),o("td",pe,_(r.description),1),o("td",qe,"\u20AC"+_(r.price),1),o("td",Ce,[i(T,{icon:"add",color:"grey",round:"",onClick:b=>d.cart.increaseAmount(r)},null,8,["onClick"]),o("span",Se,_(r.amount),1),i(T,{icon:"remove",color:"grey",round:"",onClick:b=>d.cart.decreaseAmount(r)},null,8,["onClick"])]),o("td",Te,"\u20AC"+_(r.price*r.amount),1),o("td",Qe,[i(T,{color:"grey",round:"",icon:"delete",onClick:de(b=>d.cart.removeItem(r.name),["prevent"])},null,8,["onClick"])])]))),128)),o("tr",Ve,[o("td",we,[o("div",null,"Total Qty.: "+_(d.cart.total.qty),1),o("div",null,"Total Price: \u20AC"+_(d.cart.total.price),1)])])])]),_:1}),i(U,{color:"primary"}),o("div",Pe,[i(_e,{class:"q-gutter-md full-width text-left",style:{"max-width":"600px"}},{default:w(()=>[o("div",Re,[Be,o("div",null,[o("div",Fe,[i(D,{modelValue:s.orderType,"onUpdate:modelValue":c[0]||(c[0]=r=>s.orderType=r),val:"reserved",label:"Reserved Order"},null,8,["modelValue"]),i(D,{modelValue:s.orderType,"onUpdate:modelValue":c[1]||(c[1]=r=>s.orderType=r),val:"confirmed",label:"Confirmed Order"},null,8,["modelValue"])]),Ie])]),i(P,{outlined:"",label:"Contact Name:"}),i(P,{outlined:"",label:"Contact Phone:"}),i(P,{outlined:"",label:"Remark:",type:"textarea"}),i(T,{label:"submit"})]),_:1})])]),_:1})}var Ye=he(ye,[["render",Ee]]);export{Ye as default};
