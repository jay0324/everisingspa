import{A as _e,r as T,B as ae,w as D,a as y,Q as Ve,g as X,i as Fe,o as re,R as Ae,S as Be,U as Se,u as Ee,D as Y,V as $e,W as Oe,h as M,y as J,T as Te,X as Pe,Y as Ie,c as De,z as ve,d as je,f as ze,j as Ne,q as se,k as G}from"./index.d0c97c9f.js";import{Q as me,b as Le,a as ge}from"./QBtn.b389c96b.js";import{a as Ke,u as Ue}from"./use-dark.13cfd569.js";import{h as ee}from"./render.f1930b0f.js";import{Q as Ze}from"./QPage.28152482.js";import"./use-router-link.115e9e2d.js";import"./dom.05802315.js";let ue,te=0;const O=new Array(256);for(let e=0;e<256;e++)O[e]=(e+256).toString(16).substring(1);const He=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let u=t;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),he=4096;function de(){(ue===void 0||te+16>he)&&(te=0,ue=He(he));const e=Array.prototype.slice.call(ue,te,te+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,O[e[0]]+O[e[1]]+O[e[2]]+O[e[3]]+"-"+O[e[4]]+O[e[5]]+"-"+O[e[6]]+O[e[7]]+"-"+O[e[8]]+O[e[9]]+"-"+O[e[10]]+O[e[11]]+O[e[12]]+O[e[13]]+O[e[14]]+O[e[15]]}function Qe(e){return e==null?null:e}function pe(e,t){return e==null?t===!0?`f_${de()}`:null:e}function Ye({getValue:e,required:t=!0}={}){if(_e.value===!0){const r=e!==void 0?T(Qe(e())):T(null);return t===!0&&r.value===null&&ae(()=>{r.value=`f_${de()}`}),e!==void 0&&D(e,u=>{r.value=pe(u,t)}),r}return e!==void 0?y(()=>pe(e(),t)):T(`f_${de()}`)}const be=/^on[A-Z]/;function We(){const{attrs:e,vnode:t}=X(),r={listeners:T({}),attributes:T({})};function u(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&be.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)be.test(v)===!0&&(d[v]=t.props[v]);r.attributes.value=f,r.listeners.value=d}return Ve(u),u(),r}function Xe({validate:e,resetValidation:t,requiresQForm:r}){const u=Fe(Ae,!1);if(u!==!1){const{props:f,proxy:d}=X();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),ae(()=>{f.disable!==!0&&u.bindComponent(d)}),re(()=>{f.disable!==!0&&u.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ie={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>le.test(e)||ne.test(e),hexOrRgbColor:e=>ye.test(e)||le.test(e),hexaOrRgbaColor:e=>ke.test(e)||ne.test(e),anyColor:e=>xe.test(e)||le.test(e)||ne.test(e)},Je=[!0,!1,"ondemand"],Ge={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Je.includes(e)}};function et(e,t){const{props:r,proxy:u}=X(),f=T(!1),d=T(null),v=T(!1);Xe({validate:z,resetValidation:j});let x=0,B;const R=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),w=y(()=>r.disable!==!0&&R.value===!0&&t.value===!1),p=y(()=>r.error===!0||f.value===!0),H=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);D(()=>r.modelValue,()=>{v.value=!0,w.value===!0&&r.lazyRules===!1&&P()});function $(){r.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&P()}D(()=>r.reactiveRules,L=>{L===!0?B===void 0&&(B=D(()=>r.rules,$,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),D(()=>r.lazyRules,$),D(e,L=>{L===!0?v.value=!0:w.value===!0&&r.lazyRules!=="ondemand"&&P()});function j(){x++,t.value=!1,v.value=!1,f.value=!1,d.value=null,P.cancel()}function z(L=r.modelValue){if(r.disable===!0||R.value===!1)return!0;const F=++x,Q=t.value!==!0?()=>{v.value=!0}:()=>{},K=(S,C)=>{S===!0&&Q(),f.value=S,d.value=C||null,t.value=!1},N=[];for(let S=0;S<r.rules.length;S++){const C=r.rules[S];let E;if(typeof C=="function"?E=C(L,ie):typeof C=="string"&&ie[C]!==void 0&&(E=ie[C](L)),E===!1||typeof E=="string")return K(!0,E),!1;E!==!0&&E!==void 0&&N.push(E)}return N.length===0?(K(!1),!0):(t.value=!0,Promise.all(N).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return F===x&&K(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return F===x&&K(C!==void 0,C),C===void 0},S=>(F===x&&(console.error(S),K(!0)),!1)))}const P=Be(z,0);return re(()=>{B!==void 0&&B(),P.cancel()}),Object.assign(u,{resetValidation:j,validate:z}),Se(u,"hasError",()=>p.value),{isDirtyModel:v,hasRules:R,hasError:p,errorMessage:H,validate:z,resetValidation:j}}let fe=[],tt=[];function Re(e){tt.length===0?e():fe.push(e)}function lt(e){fe=fe.filter(t=>t!==e)}function ce(e){return e!=null&&(""+e).length!==0}const nt={...Ue,...Ge,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},ot={...nt,maxlength:[Number,String]},at=["update:modelValue","clear","focus","blur"];function rt({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:u,proxy:f}=X(),d=Ke(u,f.$q),v=Ye({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?y(()=>u.tag):{value:"label"},isDark:d,editable:y(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:We(),targetUid:v,rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function ut(e){const{props:t,emit:r,slots:u,attrs:f,proxy:d}=X(),{$q:v}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>ce(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{r("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:n,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:B,hasRules:R,hasError:w,errorMessage:p,resetValidation:H}=et(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),j=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),P=y(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&j.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),L=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),K=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),N=y(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function S(){const i=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(i===null||i.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==i&&c.focus({preventScroll:!0}))}function C(){Re(S)}function E(){lt(S);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function o(i){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",i))}function n(i,c){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",i)),c!==void 0&&c())})}function s(i){Ee(i),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),Y(()=>{const c=B.value;H(),B.value=c})}function a(i){[13,32].includes(i.keyCode)&&s(i)}function h(){const i=[];return u.prepend!==void 0&&i.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},u.prepend())),i.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),w.value===!0&&t.noErrorIcon===!1&&i.push(g("error",[M(me,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(g("inner-loading-append",u.loading!==void 0?u.loading():[M(Le,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(g("inner-clearable-append",[M(me,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-label":v.lang.label.clear,onKeyup:a,onClick:s})])),u.append!==void 0&&i.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},u.append())),e.getInnerAppend!==void 0&&i.push(g("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function m(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(K.value))),F.value===!0&&i.push(M("div",{class:Q.value},ee(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(ee(u.default))}function q(){let i,c;w.value===!0?p.value!==null?(i=[M("div",{role:"alert"},p.value)],c=`q--slot-error-${p.value}`):(i=ee(u.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[M("div",t.hint)],c=`q--slot-hint-${t.hint}`):(i=ee(u.hint),c="q--slot-hint"));const k=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&i===void 0)return;const _=M("div",{key:c,class:"q-field__messages col"},i);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?_:M(Te,{name:"q-transition--field-message"},()=>_),k===!0?M("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function g(i,c){return c===null?null:M("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let b=!1;return $e(()=>{b=!0}),Oe(()=>{b===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ae(()=>{d.focus()}),re(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:C,blur:E}),function(){const c=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...N.value}:N.value;return M(e.tag.value,{ref:e.rootRef,class:[P.value,f.class],style:f.style,...c},[u.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},u.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:L.value,tabindex:-1,...e.controlEvents},h()),j.value===!0?q():null]),u.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},u.after()):null])}}const we={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},oe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},qe=Object.keys(oe);qe.forEach(e=>{oe[e].regex=new RegExp(oe[e].pattern)});const it=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+qe.join("")+"])|(.)","g"),Ce=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),st={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function dt(e,t,r,u){let f,d,v,x,B,R;const w=T(null),p=T($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,z),D(()=>e.mask,o=>{if(o!==void 0)P(p.value,!0);else{const n=C(p.value);z(),e.modelValue!==n&&t("update:modelValue",n)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&P(p.value,!0)}),D(()=>e.unmaskedValue,()=>{w.value===!0&&P(p.value)});function $(){if(z(),w.value===!0){const o=N(C(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function j(o){if(o<f.length)return f.slice(-o);let n="",s=f;const a=s.indexOf(A);if(a!==-1){for(let h=o-s.length;h>0;h--)n+=A;s=s.slice(0,a)+n+s.slice(a)}return s}function z(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){x=void 0,f="",d="";return}const o=we[e.mask]===void 0?e.mask:we[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(Ce,"\\$&"),a=[],h=[],m=[];let q=e.reverseFillMask===!0,g="",b="";o.replace(it,(_,l,V,Z,U)=>{if(Z!==void 0){const I=oe[Z];m.push(I),b=I.negate,q===!0&&(h.push("(?:"+b+"+)?("+I.pattern+"+)?(?:"+b+"+)?("+I.pattern+"+)?"),q=!1),h.push("(?:"+b+"+)?("+I.pattern+")?")}else if(V!==void 0)g="\\"+(V==="\\"?"":V),m.push(V),a.push("([^"+g+"]+)?"+g+"?");else{const I=l!==void 0?l:U;g=I==="\\"?"\\\\\\\\":I.replace(Ce,"\\\\$&"),m.push(I),a.push("([^"+g+"]+)?"+g+"?")}});const i=new RegExp("^"+a.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?"+(g===""?"":"["+g+"]*")+"$"),c=h.length-1,k=h.map((_,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+_):l===c?new RegExp("^"+_+"("+(b===""?".":b)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+_));v=m,x=_=>{const l=i.exec(e.reverseFillMask===!0?_:_.slice(0,m.length+1));l!==null&&(_=l.slice(1).join(""));const V=[],Z=k.length;for(let U=0,I=_;U<Z;U++){const W=k[U].exec(I);if(W===null)break;I=I.slice(W.shift().length),V.push(...W)}return V.length!==0?V.join(""):_},f=m.map(_=>typeof _=="string"?_:A).join(""),d=f.split(A).join(n)}function P(o,n,s){const a=u.value,h=a.selectionEnd,m=a.value.length-h,q=C(o);n===!0&&z();const g=N(q),b=e.fillMask!==!1?E(g):g,i=p.value!==b;a.value!==b&&(a.value=b),i===!0&&(p.value=b),document.activeElement===a&&Y(()=>{if(b===d){const k=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=a.selectionEnd;let _=h-1;for(let l=B;l<=_&&l<k;l++)f[l]!==A&&_++;F.right(a,_);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?h===0?b.length>g.length?1:0:Math.max(0,b.length-(b===d?0:Math.min(g.length,m)+1))+1:h;a.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const k=Math.max(0,b.length-(b===d?0:Math.min(g.length,m+1)));k===1&&h===1?a.setSelectionRange(k,k,"forward"):F.rightReverse(a,k)}else{const k=b.length-m;a.setSelectionRange(k,k,"backward")}else if(i===!0){const k=Math.max(0,f.indexOf(A),Math.min(g.length,h)-1);F.right(a,k)}else{const k=h-1;F.right(a,k)}});const c=e.unmaskedValue===!0?C(b):b;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&r(c,!0)}function L(o,n,s){const a=N(C(o.value));n=Math.max(0,f.indexOf(A),Math.min(a.length,n)),B=n,o.setSelectionRange(n,s,"forward")}const F={left(o,n){const s=f.slice(n-1).indexOf(A)===-1;let a=Math.max(0,n-1);for(;a>=0;a--)if(f[a]===A){n=a,s===!0&&n++;break}if(a<0&&f[n]!==void 0&&f[n]!==A)return F.right(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},right(o,n){const s=o.value.length;let a=Math.min(s,n+1);for(;a<=s;a++)if(f[a]===A){n=a;break}else f[a-1]===A&&(n=a);if(a>s&&f[n-1]!==void 0&&f[n-1]!==A)return F.left(o,s);o.setSelectionRange(n,n,"forward")},leftReverse(o,n){const s=j(o.value.length);let a=Math.max(0,n-1);for(;a>=0;a--)if(s[a-1]===A){n=a;break}else if(s[a]===A&&(n=a,a===0))break;if(a<0&&s[n]!==void 0&&s[n]!==A)return F.rightReverse(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},rightReverse(o,n){const s=o.value.length,a=j(s),h=a.slice(0,n+1).indexOf(A)===-1;let m=Math.min(s,n+1);for(;m<=s;m++)if(a[m-1]===A){n=m,n>0&&h===!0&&n--;break}if(m>s&&a[n-1]!==void 0&&a[n-1]!==A)return F.leftReverse(o,s);o.setSelectionRange(n,n,"forward")}};function Q(o){t("click",o),R=void 0}function K(o){if(t("keydown",o),Pe(o)===!0||o.altKey===!0)return;const n=u.value,s=n.selectionStart,a=n.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=n.selectionDirection==="forward"?s:a);const h=F[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),h(n,R===s?a:s),o.shiftKey){const m=n.selectionStart;n.setSelectionRange(Math.min(R,m),Math.max(R,m),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===a?(F.left(n,s),n.setSelectionRange(n.selectionStart,a,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===a&&(F.rightReverse(n,a),n.setSelectionRange(s,n.selectionEnd,"forward"))}function N(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const n=v;let s=0,a="";for(let h=0;h<n.length;h++){const m=o[s],q=n[h];if(typeof q=="string")a+=q,m===q&&s++;else if(m!==void 0&&q.regex.test(m))a+=q.transform!==void 0?q.transform(m):m,s++;else return a}return a}function S(o){const n=v,s=f.indexOf(A);let a=o.length-1,h="";for(let m=n.length-1;m>=0&&a!==-1;m--){const q=n[m];let g=o[a];if(typeof q=="string")h=q+h,g===q&&a--;else if(g!==void 0&&q.regex.test(g))do h=(q.transform!==void 0?q.transform(g):g)+h,a--,g=o[a];while(s===m&&g!==void 0&&q.regex.test(g));else return h}return h}function C(o){return typeof o!="string"||x===void 0?typeof o=="number"?x(""+o):o:x(o)}function E(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:L,updateMaskValue:P,onMaskedKeydown:K,onMaskedClick:Q}}const ft={name:String};function ct(e){return y(()=>e.name||e.for)}function vt(e,t){function r(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return r()}):y(r)}const mt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,gt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ht=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,pt=/[a-z0-9_ -]$/i;function bt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Ie.is.firefox===!0?pt.test(r.data)===!1:mt.test(r.data)===!0||gt.test(r.data)===!0||ht.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}var Me=De({name:"QInput",inheritAttrs:!1,props:{...ot,...st,...ft,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...at,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:u}=X(),{$q:f}=u,d={};let v=NaN,x,B,R=null,w;const p=T(null),H=ct(e),{innerValue:$,hasMask:j,moveCursorForPaste:z,updateMaskValue:P,onMaskedKeydown:L,onMaskedClick:F}=dt(e,t,g,p),Q=vt(e,!0),K=y(()=>ce($.value)),N=bt(m),S=rt({changeEvent:!0}),C=y(()=>e.type==="textarea"||e.autogrow===!0),E=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const l={...S.splitAttrs.listeners.value,onInput:m,onPaste:h,onChange:i,onBlur:c,onFocus:ve};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=N,j.value===!0&&(l.onKeydown=L,l.onClick=F),e.autogrow===!0&&(l.onAnimationend=q),l}),n=y(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});D(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),D(()=>e.modelValue,l=>{if(j.value===!0){if(B===!0&&(B=!1,String(l)===v))return;P(l)}else $.value!==l&&($.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(b)}),D(()=>e.autogrow,l=>{l===!0?Y(b):p.value!==null&&r.rows>0&&(p.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Y(b)});function s(){Re(()=>{const l=document.activeElement;p.value!==null&&p.value!==l&&(l===null||l.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function a(){p.value!==null&&p.value.select()}function h(l){if(j.value===!0&&e.reverseFillMask!==!0){const V=l.target;z(V,V.selectionStart,V.selectionEnd)}t("paste",l)}function m(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const V=l.target.value;if(l.target.qComposing===!0){d.value=V;return}if(j.value===!0)P(V,!1,l.inputType);else if(g(V),E.value===!0&&l.target===document.activeElement){const{selectionStart:Z,selectionEnd:U}=l.target;Z!==void 0&&U!==void 0&&Y(()=>{l.target===document.activeElement&&V.indexOf(l.target.value)===0&&l.target.setSelectionRange(Z,U)})}e.autogrow===!0&&b()}function q(l){t("animationend",l),b()}function g(l,V){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&v!==l&&(v=l,V===!0&&(B=!0),t("update:modelValue",l),Y(()=>{v===l&&(v=NaN)})),w=void 0},e.type==="number"&&(x=!0,d.value=l),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=l,R=setTimeout(w,e.debounce)):w()}function b(){requestAnimationFrame(()=>{const l=p.value;if(l!==null){const V=l.parentNode.style,{scrollTop:Z}=l,{overflowY:U,maxHeight:I}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),W=U!==void 0&&U!=="scroll";W===!0&&(l.style.overflowY="hidden"),V.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",W===!0&&(l.style.overflowY=parseInt(I,10)<l.scrollHeight?"auto":"hidden"),V.marginBottom="",l.scrollTop=Z}})}function i(l){N(l),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",l.target.value)}function c(l){l!==void 0&&ve(l),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),x=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=$.value!==void 0?$.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}re(()=>{c()}),ae(()=>{e.autogrow===!0&&b()}),Object.assign(S,{innerValue:$,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:g,hasValue:K,floatingLabel:y(()=>K.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||ce(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...o.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},k()),M("span",e.shadowText)])});const _=ut(S);return Object.assign(u,{focus:s,select:a,getNativeElement:()=>p.value}),Se(u,"nativeEl",()=>p.value),_}});const yt={class:"full-width",style:{"max-width":"500px"}},kt=se("h4",{class:"text-center q-my-md"},"\u4EE3\u7406\u5546\u767B\u5165",-1),xt={class:"q-pb-sm full-width text-right"},Vt=Object.assign({name:"LoginPage"},{__name:"LoginPage",setup(e){return(t,r)=>(je(),ze(Ze,{class:"flex flex-center"},{default:Ne(()=>[se("div",yt,[kt,G(Me,{class:"q-pb-sm",outlined:"",modelValue:t.text,"onUpdate:modelValue":r[0]||(r[0]=u=>t.text=u),label:"\u5E33\u865F"},null,8,["modelValue"]),G(Me,{class:"q-pb-sm",outlined:"",type:"password",label:"\u5BC6\u78BC"}),se("div",xt,[G(ge,{flat:"",label:"Forgot password?","no-caps":""})]),G(ge,{class:"full-width",color:"primary",label:"\u767B\u5165"})])]),_:1}))}});export{Vt as default};
