import{u,b as d}from"./QBtn.440b8892.js";import{h as e,k as s,c as l,g as c}from"./index.b598a929.js";import{u as i,a as m}from"./use-dark.18156b08.js";import{h as p}from"./render.35e06d23.js";const f=[e("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[e("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),e("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])];var k=s({name:"QSpinnerOval",props:u,setup(r){const{cSize:a,classes:t}=d(r);return()=>e("svg",{class:t.value,stroke:"currentColor",width:a.value,height:a.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"},f)}}),w=s({name:"QCard",props:{...i,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(r,{slots:a}){const{proxy:{$q:t}}=c(),o=m(r,t),n=l(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(r.bordered===!0?" q-card--bordered":"")+(r.square===!0?" q-card--square no-border-radius":"")+(r.flat===!0?" q-card--flat no-shadow":""));return()=>e(r.tag,{class:n.value},p(a.default))}});export{k as Q,w as a};
