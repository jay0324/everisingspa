import{m as n,J as o,L as d,j as l,h as i,n as u,g as c}from"./index.becb7b7f.js";var m=n({name:"QList",props:{...o,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=c(),s=d(e,t.proxy.$q),r=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:r.value},u(a.default))}});export{m as Q};
