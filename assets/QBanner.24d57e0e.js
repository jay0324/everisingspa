import{k as u,G as v,I as b,c as o,h as n,l as r,g as q}from"./index.637eb394.js";var k=u({name:"QBanner",props:{...v,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:a}){const{proxy:{$q:c}}=q(),i=b(e,c),l=o(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),d=o(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const s=[n("div",{class:"q-banner__avatar col-auto row items-center self-start"},r(a.avatar)),n("div",{class:"q-banner__content col text-body2"},r(a.default))],t=r(a.action);return t!==void 0&&s.push(n("div",{class:d.value},t)),n("div",{class:l.value+(e.inlineActions===!1&&t!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});export{k as Q};
