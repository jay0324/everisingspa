import{Q as i,a as m}from"./QItem.5a5d7627.js";import{A as p,t as r,u as l,v as s,C as t,j as a,ay as _,az as f,F as u,G as h,y as v,z as w,Q,aA as g}from"./index.3fd10e45.js";import{Q as k}from"./QList.45b5912f.js";import{Q as y}from"./QPage.fc19e27d.js";import{api as x}from"./axios.b4f34255.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const N={name:"NewsPage",data(){return{downloads:null,src:"./pdf/test.pdf"}},mounted(){x.get("/api/v1/news").then(e=>{this.downloads=e.data.data,this.src=this.downloads[0].url})},methods:{openPDF(e){this.src=e}}},P={class:"row"},q={class:"col-3 col-md-2"},B={class:"q-pa-md"},D={class:"col-9 col-md-10"};function F(e,z,I,V,c,n){const d=p("q-pdfviewer");return r(),l(y,{padding:""},{default:s(()=>[t("div",P,[t("div",q,[t("div",B,[a(k,null,{default:s(()=>[(r(!0),_(u,null,f(c.downloads,o=>h((r(),l(i,{clickable:"",key:o,onClick:A=>n.openPDF(o.url)},{default:s(()=>[a(m,null,{default:s(()=>[v(w(o.name),1)]),_:2},1024),a(Q,{name:"file_download",class:"q-pa-sm",color:"primary",size:"2em"})]),_:2},1032,["onClick"])),[[g]])),128))]),_:1})])]),t("div",D,[a(d,{type:"html5",src:c.src,style:{height:"calc(100vh - 100px)"}},null,8,["src"])])])]),_:1})}var G=C(N,[["render",F]]);export{G as default};
