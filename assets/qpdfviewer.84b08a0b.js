import{d as c,h as t}from"./index.6cda5a95.js";var f=c({name:"QPdfviewer",props:{src:String,type:{type:String,default:"html5",validator:e=>["html5","pdfjs"].indexOf(e)!==-1},errorString:{type:String,default:"This browser does not support PDFs. Download the PDF to view it:"},contentStyle:[String,Object,Array],contentClass:[String,Object,Array],innerContentStyle:[String,Object,Array],innerContentClass:[String,Object,Array]},emits:[],setup(e){const n="q-pdfviewer-"+Math.random().toString(36).substr(2,9);function i(){return t("object",{class:[e.innerContentClass],style:[e.innerContentStyle],id:n,data:e.src,type:"application/pdf",width:"100%",height:"100%"},[a()])}function a(){return t("iframe",{class:["q-pdfviewer__iframe"],src:e.src,width:"100%",height:"100%"},[r()])}function d(){return t("iframe",{class:["q-pdfviewer__iframe"],src:"/pdfjs/web/viewer.html?file="+encodeURIComponent(e.src),width:"100%",height:"100%"},[r()])}function r(){return t("a",{href:e.src,target:"_blank"})}function s(){if(e.src!==void 0&&e.src.length>0)return t("div",{class:["q-pdfviewer",e.contentClass],style:[e.contentStyle]},[e.type==="pdfjs"?d():i()])}return()=>s()}}),l=({app:e})=>{e.component("QPdfviewer",f)};export{l as default};
