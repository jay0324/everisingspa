import{aq as o,aw as e,ar as s,av as h}from"./index.b42505c5.js";import{api as r}from"./axios.3320bca6.js";const n=o("auth",{state:()=>({email:null,isLogin:!1,authData:null}),getters:{getEmail:t=>t.email,getIsLogin:t=>t.isLogin,getAuthData:t=>t.authData,getUid:t=>t.authData.result.uid},actions:{init(){e.getItem("auth")===null&&e.set("auth",JSON.stringify({email:this.email,isLogin:this.isLogin,authData:this.authData})),this.restoreStorage()},checkLogin(){this.init(),this.isLogin||this.router.push({path:"/auth/login"})},logout(){s.show(),this.clearData(),this.removeStorage(),setTimeout(()=>{s.hide(),this.router.push({path:"/auth/login"})},1e3)},async login(t){try{const a={params:t};s.show(),await r.post("/web/session/authenticate",a).then(i=>{s.hide(),i.status===200&&i.data.error?h.create({title:i.data.error.data.message,message:i.data.error.data.message}):(this.isLogin=!0,this.authData=i.data,this.updateStorage(),this.loginSuccess())})}catch(a){if(s.hide(),h.create({title:a.name,message:a.message}),a)throw a}},clearData(){this.email=null,this.isLogin=!1,this.authData=null},removeStorage(){e.remove("auth")},updateStorage(){this.isLogin?e.set("auth",JSON.stringify({email:this.email,isLogin:this.isLogin,authData:this.authData})):this.removeStorage()},restoreStorage(){const t=JSON.parse(e.getItem("auth"));t.isLogin&&this.restoreState(t)},restoreState(t){this.email=t.email,this.isLogin=t.isLogin,this.authData=t.authData},loginSuccess(){this.isLogin&&this.router.push({path:"/"})}}});export{n as u};
