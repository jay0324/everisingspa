import{Q as i,a as p}from"./QItem.0fc96797.js";import{Q as m}from"./QList.c0dcc6ad.js";import{Q as _}from"./QPage.91b9de98.js";import{t as u,u as o,v as n,x as t,y as s,j as r,ay as f,az as h,F as v,D as w,z as g,A as k,aA as x}from"./index.e5e2f855.js";import{api as Q}from"./axios.171c60b1.js";import{u as y}from"./preference.a37f88d4.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";const D=y(),N={name:"NewsPage",setup(){D.loaderTrigger("pageLoader")},data(){return{downloads:null,src:"./pdf/test.pdf"}},mounted(){Q.get("/api/v1/news").then(e=>{this.downloads=e.data.data,this.src=this.downloads[0].url})},methods:{openPDF(e){this.src=e}}},B={class:"row"},C={class:"col-3 col-md-2"},F={class:"q-pa-md"},q={class:"col-9 col-md-10"};function L(e,S,V,z,c,l){const d=u("q-pdfviewer");return o(),n(_,{padding:""},{default:t(()=>[s("div",B,[s("div",C,[s("div",F,[r(m,null,{default:t(()=>[(o(!0),f(v,null,h(c.downloads,a=>w((o(),n(i,{clickable:"",key:a,onClick:A=>l.openPDF(a.url)},{default:t(()=>[r(p,null,{default:t(()=>[g(k(a.name),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})])]),s("div",q,[r(d,{type:"html5",src:c.src,style:{height:"calc(100vh - 100px)"}},null,8,["src"])])])]),_:1})}var G=P(N,[["render",L]]);export{G as default};
