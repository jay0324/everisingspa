import{t as d,u as c,v as l,C as r,j as o,Q as a,ax as n,B as i}from"./index.d3f0208d.js";import{Q as u}from"./QPage.41f80791.js";import{u as f}from"./auth.30e71d25.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.a1315800.js";const p=f();p.getIsLogin;const w={name:"LoginPage",data(){return{form:{db:"demo-portal.gtmc.app",login:"salesd@gtmc.com.tw",password:"123"},isPwd:!0}},methods:{async userLogin(){await p.login(this.form)}}},_={class:"full-width",style:{"max-width":"500px"}},x=r("h4",{class:"text-center q-my-md"},"\u4EE3\u7406\u5546\u767B\u5165",-1),b={class:"q-pb-sm full-width text-right"},h={class:"q-mt-lg q-pb-sm text-primary full-width text-center"};function y(v,s,P,V,e,m){return d(),c(u,{class:"flex flex-center"},{default:l(()=>[r("div",_,[x,o(n,{ref:"email",class:"q-pb-sm",outlined:"",modelValue:e.form.login,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form.login=t),label:"\u5E33\u865F"},{prepend:l(()=>[o(a,{name:"people"})]),_:1},8,["modelValue"]),o(n,{ref:"password",class:"q-pb-sm",outlined:"",label:"\u5BC6\u78BC",type:e.isPwd?"password":"text",modelValue:e.form.password,"onUpdate:modelValue":s[2]||(s[2]=t=>e.form.password=t)},{prepend:l(()=>[o(a,{name:"lock"})]),append:l(()=>[o(a,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[1]||(s[1]=t=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue"]),r("div",b,[o(i,{flat:"",label:"Forgot password?","no-caps":"",to:"forgot"})]),o(i,{class:"full-width",color:"primary",label:"\u767B\u5165",onClick:m.userLogin},null,8,["onClick"]),r("div",h,[o(i,{flat:"",label:"Sign Up","no-caps":"",to:"signup"})])])]),_:1})}var L=g(w,[["render",y]]);export{L as default};
