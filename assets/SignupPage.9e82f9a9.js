import{t as b,u as y,v as a,C as r,j as s,z as m,aC as n,b9 as i,B as u,y as d,ba as f,bd as g,be as w,G as V,aY as v}from"./index.3fd10e45.js";import{Q as C}from"./QSpinnerOval.ab5f5ad5.js";import{Q as k}from"./QPage.fc19e27d.js";import{C as c}from"./ClosePopup.7e9603ef.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const Q={name:"SignupPage",data(){return{loading:!1,error_notice_visible:!1,error_msg:"",form:{email:"",password:"",username:""},showSuccessDialog:!1}},methods:{handleSubmitClick(){},registerClick(){}}},$={class:"full-width",style:{"max-width":"500px"}},z={class:"register-page-form"},K={class:"register-page-form__content"},U={style:{"font-size":"26px","font-weight":"bold","text-align":"center"}},h=r("br",null,null,-1),j={class:"text-center"},x={style:{"margin-top":"36px","margin-bottom":"0px","font-family":"'Open Sans', 'Helvetica', 'Arial', sans-serif","letter-spacing":"1px"}},D=r("div",{class:"text-h6"},"Thank you",-1);function B(o,e,P,_,t,p){return b(),y(k,{class:"flex flex-center"},{default:a(()=>[r("div",$,[s(f,{ref:"form",class:"register-page-card shadow-6 q-pa-xl",color:"white"},{default:a(()=>[r("div",z,[r("div",K,[r("p",U,m(o.$t("register.title")),1),s(n,{ref:"username",modelValue:t.form.username,"onUpdate:modelValue":e[0]||(e[0]=l=>t.form.username=l),"stack-label":"",onKeyup:e[1]||(e[1]=i(l=>o.$refs.email.focus(),["enter"])),label:o.$t("register.account")+" *",type:"email",size:"10"},null,8,["modelValue","label"]),s(n,{ref:"name",modelValue:t.form.name,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.name=l),"stack-label":"",onKeyup:e[3]||(e[3]=i(l=>o.$refs.company_name.focus(),["enter"])),label:o.$t("username")+" *",type:"name",size:"10"},null,8,["modelValue","label"]),s(n,{ref:"password",modelValue:t.form.password,"onUpdate:modelValue":e[4]||(e[4]=l=>t.form.password=l),"stack-label":"",onKeyup:e[5]||(e[5]=i(l=>o.$refs.name.focus(),["enter"])),label:o.$t("password")+" *",type:"password",size:"10"},null,8,["modelValue","label"]),s(n,{ref:"email",modelValue:t.form.email,"onUpdate:modelValue":e[6]||(e[6]=l=>t.form.email=l),"stack-label":"",onKeyup:e[7]||(e[7]=i(l=>o.$refs.password.focus(),["enter"])),label:o.$t("email")+" *",type:"email",size:"10"},null,8,["modelValue","label"]),s(n,{ref:"company_name",modelValue:t.form.company_name,"onUpdate:modelValue":e[8]||(e[8]=l=>t.form.company_name=l),"stack-label":"",onKeyup:e[9]||(e[9]=i(l=>o.$refs.job_title.focus(),["enter"])),label:o.$t("register.company"),type:"name",size:"10"},null,8,["modelValue","label"]),s(n,{ref:"job_title",modelValue:t.form.job_title,"onUpdate:modelValue":e[10]||(e[10]=l=>t.form.job_title=l),"stack-label":"",onKeyup:i(p.handleSubmitClick,["enter"]),label:o.$t("register.job"),type:"name",size:"10",class:"q-input-register"},null,8,["modelValue","onKeyup","label"])]),h,s(u,{ref:"send",class:"full-width",loading:t.loading,color:"primary",onClick:p.handleSubmitClick},{loading:a(()=>[s(C)]),default:a(()=>[d(m(o.$t("send"))+" ",1)]),_:1},8,["loading","onClick"]),r("div",j,[r("p",x,m(o.$t("forgotPwd.remember")),1),s(u,{flat:"",class:"forgot-login-text","text-color":"primary",to:"login"},{default:a(()=>[d(m(o.$t("login.title")),1)]),_:1})])])]),_:1},512),s(v,{modelValue:t.showSuccessDialog,"onUpdate:modelValue":e[12]||(e[12]=l=>t.showSuccessDialog=l),persistent:""},{default:a(()=>[s(f,{style:{width:"400px","max-width":"80vw"}},{default:a(()=>[s(g,null,{default:a(()=>[D]),_:1}),s(g,{class:"q-pt-none"},{default:a(()=>[d(" CMI team will review your signup promptly. ")]),_:1}),s(w,{align:"right",class:"bg-white text-teal"},{default:a(()=>[V(s(u,{flat:"",label:"Close",color:"primary",onClick:e[11]||(e[11]=l=>o.$router.push("/login"))},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var T=S(Q,[["render",B]]);export{T as default};
