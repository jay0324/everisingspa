import{u as d,v as u,x as l,y as r,j as e,aE as a,aG as i,Q as n}from"./index.f0d09a56.js";import{Q as c}from"./QPage.68fb3bdb.js";import{u as f}from"./auth.2ed62e56.js";import{_ as g}from"./logo.d9db43ed.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import"./axios.6183a692.js";const m=f();m.getIsLogin;const w={name:"LoginPage",data(){return{form:{db:"demo-thomas.gtmc.app",login:"",password:""},isPwd:!0}},methods:{async userLogin(){await m.login(this.form)}}},x={class:"full-width q-pa-md",style:{"max-width":"500px"}},y=r("h4",{class:"text-center q-my-md"},[r("img",{class:"q-my-md",alt:"Quasar logo",src:g})],-1),b={class:"q-pb-sm full-width text-right"};function h(v,s,P,V,o,p){return d(),u(c,{id:"login-page",class:"flex flex-center"},{default:l(()=>[r("div",x,[y,e(i,{ref:"email",class:"q-pb-sm",outlined:"",modelValue:o.form.login,"onUpdate:modelValue":s[0]||(s[0]=t=>o.form.login=t),label:"Account"},{prepend:l(()=>[e(a,{name:"people"})]),_:1},8,["modelValue"]),e(i,{ref:"password",class:"q-pb-sm",outlined:"",label:"Password",type:o.isPwd?"password":"text",modelValue:o.form.password,"onUpdate:modelValue":s[2]||(s[2]=t=>o.form.password=t)},{prepend:l(()=>[e(a,{name:"lock"})]),append:l(()=>[e(a,{name:o.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[1]||(s[1]=t=>o.isPwd=!o.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue"]),r("div",b,[e(n,{flat:"",label:"Forgot password?","no-caps":"",to:"forgot"})]),e(n,{class:"full-width",color:"primary",label:"Login",onClick:p.userLogin},null,8,["onClick"])])]),_:1})}var I=_(w,[["render",h]]);export{I as default};
