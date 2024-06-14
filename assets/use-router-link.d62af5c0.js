import{K as j,x as E,L as I,M as K,z as M,N as T,a as i,g as D}from"./index.6cda5a95.js";import{c as N}from"./dom.072ba594.js";function B(e,t=250){let a=!1,r;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),r=e.apply(this,arguments)),r}}function L(e,t,a,r){a.modifiers.stop===!0&&M(e);const n=a.modifiers.color;let c=a.modifiers.center;c=c===!0||r===!0;const u=document.createElement("span"),o=document.createElement("span"),R=T(e),{left:f,top:p,width:h,height:k}=t.getBoundingClientRect(),d=Math.sqrt(h*h+k*k),$=d/2,y=`${(h-d)/2}px`,q=c?y:`${R.left-f-$}px`,C=`${(k-d)/2}px`,_=c?C:`${R.top-p-$}px`;o.className="q-ripple__inner",N(o,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${q},${_},0) scale3d(.2,.2,1)`,opacity:0}),u.className=`q-ripple${n?" text-"+n:""}`,u.setAttribute("dir","ltr"),u.appendChild(o),t.appendChild(u);const x=()=>{u.remove(),clearTimeout(b)};a.abort.push(x);let b=setTimeout(()=>{o.classList.add("q-ripple__inner--enter"),o.style.transform=`translate3d(${y},${C},0) scale3d(1,1,1)`,o.style.opacity=.2,b=setTimeout(()=>{o.classList.remove("q-ripple__inner--enter"),o.classList.add("q-ripple__inner--leave"),o.style.opacity=0,b=setTimeout(()=>{u.remove(),a.abort.splice(a.abort.indexOf(x),1)},275)},250)},50)}function O(e,{modifiers:t,value:a,arg:r}){const n=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:n.early===!0,stop:n.stop===!0,center:n.center===!0,color:n.color||r,keyCodes:[].concat(n.keyCodes||13)}}var G=j({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const r={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(n){r.enabled===!0&&n.qSkipRipple!==!0&&n.type===(r.modifiers.early===!0?"pointerdown":"click")&&L(n,e,r,n.qKeyEvent===!0)},keystart:B(n=>{r.enabled===!0&&n.qSkipRipple!==!0&&E(n,r.modifiers.keyCodes)===!0&&n.type===`key${r.modifiers.early===!0?"down":"up"}`&&L(n,e,r,!0)},300)};O(r,t),e.__qripple=r,I(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&O(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),K(t,"main"),delete e._qripple)}});function J(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function V(e){return e.appContext.config.globalProperties.$router!==void 0}function Q(e){return e.isUnmounted===!0||e.isDeactivated===!0}function P(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function S(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function H(e,t){for(const a in t){const r=t[a],n=e[a];if(typeof r=="string"){if(r!==n)return!1}else if(Array.isArray(n)===!1||n.length!==r.length||r.some((c,u)=>c!==n[u]))return!1}return!0}function w(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,r)=>a===t[r]):e.length===1&&e[0]===t}function U(e,t){return Array.isArray(e)===!0?w(e,t):Array.isArray(t)===!0?w(t,e):e===t}function z(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(U(e[a],t[a])===!1)return!1;return!0}const X={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},W={...X,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Z({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=D(),{props:r,proxy:n,emit:c}=a,u=V(a),o=i(()=>r.disable!==!0&&r.href!==void 0),R=t===!0?i(()=>u===!0&&r.disable!==!0&&o.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):i(()=>u===!0&&o.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),f=i(()=>R.value===!0?_(r.to):null),p=i(()=>f.value!==null),h=i(()=>o.value===!0||p.value===!0),k=i(()=>r.type==="a"||h.value===!0?"a":r.tag||e||"div"),d=i(()=>o.value===!0?{href:r.href,target:r.target}:p.value===!0?{href:f.value.href,target:r.target}:{}),$=i(()=>{if(p.value===!1)return-1;const{matched:s}=f.value,{length:l}=s,v=s[l-1];if(v===void 0)return-1;const m=n.$route.matched;if(m.length===0)return-1;const g=m.findIndex(S.bind(null,v));if(g!==-1)return g;const A=P(s[l-2]);return l>1&&P(v)===A&&m[m.length-1].path!==A?m.findIndex(S.bind(null,s[l-2])):g}),y=i(()=>p.value===!0&&$.value!==-1&&H(n.$route.params,f.value.params)),q=i(()=>y.value===!0&&$.value===n.$route.matched.length-1&&z(n.$route.params,f.value.params)),C=i(()=>p.value===!0?q.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":y.value===!0?` ${r.activeClass}`:"":"");function _(s){try{return n.$router.resolve(s)}catch{}return null}function x(s,{returnRouterError:l,to:v=r.to,replace:m=r.replace}={}){if(r.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||r.target==="_blank")return Promise.resolve(!1);s.preventDefault();const g=n.$router[m===!0?"replace":"push"](v);return l===!0?g:g.then(()=>{}).catch(()=>{})}function b(s){if(p.value===!0){const l=v=>x(s,v);c("click",s,l),s.defaultPrevented!==!0&&l()}else c("click",s)}return{hasRouterLink:p,hasHrefLink:o,hasLink:h,linkTag:k,resolvedLink:f,linkIsActive:y,linkIsExactActive:q,linkClass:C,linkAttrs:d,getLink:_,navigateToRouterLink:x,navigateOnClick:b}}export{G as R,Z as a,W as b,Q as c,J as g,X as u,V as v};
