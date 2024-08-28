import{as as q,at as A,au as P,aq as R,ar as D,av as f,aw as w,ax as M}from"./index.f0d09a56.js";import{api as _}from"./axios.6183a692.js";import{u as g}from"./auth.2ed62e56.js";import{u as h}from"./preference.36aa02f6.js";function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Le(e,t,r){if(r<=t)return t;const a=r-t+1;let s=t+(e-t)%a;return s<t&&(s=a+s),s===0?0:s}function l(e,t=2,r="0"){if(e==null)return e;const a=""+e;return a.length>=t?a:new Array(t-a.length+1).join(r)+a}const S=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function W(e){return B(e)===0}function J(e,t){return t<=6?31:t<=11||W(e)?30:29}function B(e){const t=S.length;let r=S[0],a,s,n,i,o;if(e<r||e>=S[t-1])throw new Error("Invalid Jalaali year "+e);for(o=1;o<t&&(a=S[o],s=a-r,!(e<a));o+=1)r=a;return i=e-r,s-i<6&&(i=i-s+V(s+4,33)*33),n=E(E(i+1,33)-1,4),n===-1&&(n=4),n}function V(e,t){return~~(e/t)}function E(e,t){return e-~~(e/t)*t}const Z=864e5,G=36e5,$=6e4,N="YYYY-MM-DDTHH:mm:ss.SSSZ",K=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ee=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,L={};function te(e,t){const r="("+t.days.join("|")+")",a=e+r;if(L[a]!==void 0)return L[a];const s="("+t.daysShort.join("|")+")",n="("+t.months.join("|")+")",i="("+t.monthsShort.join("|")+")",o={};let d=0;const O=e.replace(ee,c=>{switch(d++,c){case"YY":return o.YY=d,"(-?\\d{1,2})";case"YYYY":return o.YYYY=d,"(-?\\d{1,4})";case"M":return o.M=d,"(\\d{1,2})";case"MM":return o.M=d,"(\\d{2})";case"MMM":return o.MMM=d,i;case"MMMM":return o.MMMM=d,n;case"D":return o.D=d,"(\\d{1,2})";case"Do":return o.D=d++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return o.D=d,"(\\d{2})";case"H":return o.H=d,"(\\d{1,2})";case"HH":return o.H=d,"(\\d{2})";case"h":return o.h=d,"(\\d{1,2})";case"hh":return o.h=d,"(\\d{2})";case"m":return o.m=d,"(\\d{1,2})";case"mm":return o.m=d,"(\\d{2})";case"s":return o.s=d,"(\\d{1,2})";case"ss":return o.s=d,"(\\d{2})";case"S":return o.S=d,"(\\d{1})";case"SS":return o.S=d,"(\\d{2})";case"SSS":return o.S=d,"(\\d{3})";case"A":return o.A=d,"(AM|PM)";case"a":return o.a=d,"(am|pm)";case"aa":return o.aa=d,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return r;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return o.Z=d,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return o.ZZ=d,"(Z|[+-]\\d{2}\\d{2})";case"X":return o.X=d,"(-?\\d+)";case"x":return o.x=d,"(-?\\d{4,})";default:return d--,c[0]==="["&&(c=c.substring(1,c.length-1)),c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),u={map:o,regex:new RegExp("^"+O)};return L[a]=u,u}function z(e,t){return e!==void 0?e:t!==void 0?t.date:P.date}function F(e,t=""){const r=e>0?"-":"+",a=Math.abs(e),s=Math.floor(a/60),n=a%60;return r+l(s)+t+l(n)}function re(e,t,r){let a=e.getFullYear(),s=e.getMonth();const n=e.getDate();return t.year!==void 0&&(a+=r*t.year,delete t.year),t.month!==void 0&&(s+=r*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(a),e.setMonth(s),e.setDate(Math.min(n,k(e))),t.date!==void 0&&(e.setDate(e.getDate()+r*t.date),delete t.date),e}function ae(e,t,r){const a=t.year!==void 0?t.year:e[`get${r}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${r}Month`](),n=new Date(a,s+1,0).getDate(),i=Math.min(n,t.date!==void 0?t.date:e[`get${r}Date`]());return e[`set${r}Date`](1),e[`set${r}Month`](2),e[`set${r}FullYear`](a),e[`set${r}Month`](s),e[`set${r}Date`](i),delete t.year,delete t.month,delete t.date,e}function C(e,t,r){const a=U(t),s=new Date(e),n=a.year!==void 0||a.month!==void 0||a.date!==void 0?re(s,a,r):s;for(const i in a){const o=j(i);n[`set${o}`](n[`get${o}`]()+r*a[i])}return n}function U(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function X(e,t,r){const a=U(t),s=r===!0?"UTC":"",n=new Date(e),i=a.year!==void 0||a.month!==void 0||a.date!==void 0?ae(n,a,s):n;for(const o in a){const d=o.charAt(0).toUpperCase()+o.slice(1);i[`set${s}${d}`](a[o])}return i}function se(e,t,r){const a=ne(e,t,r),s=new Date(a.year,a.month===null?null:a.month-1,a.day===null?1:a.day,a.hour,a.minute,a.second,a.millisecond),n=s.getTimezoneOffset();return a.timezoneOffset===null||a.timezoneOffset===n?s:C(s,{minutes:a.timezoneOffset-n},1)}function ne(e,t,r,a,s){const n={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(n,s),e==null||e===""||typeof e!="string")return n;t===void 0&&(t=N);const i=z(r,q.props),o=i.months,d=i.monthsShort,{regex:O,map:u}=te(t,i),c=e.match(O);if(c===null)return n;let v="";if(u.X!==void 0||u.x!==void 0){const m=parseInt(c[u.X!==void 0?u.X:u.x],10);if(isNaN(m)===!0||m<0)return n;const y=new Date(m*(u.X!==void 0?1e3:1));n.year=y.getFullYear(),n.month=y.getMonth()+1,n.day=y.getDate(),n.hour=y.getHours(),n.minute=y.getMinutes(),n.second=y.getSeconds(),n.millisecond=y.getMilliseconds()}else{if(u.YYYY!==void 0)n.year=parseInt(c[u.YYYY],10);else if(u.YY!==void 0){const m=parseInt(c[u.YY],10);n.year=m<0?m:2e3+m}if(u.M!==void 0){if(n.month=parseInt(c[u.M],10),n.month<1||n.month>12)return n}else u.MMM!==void 0?n.month=d.indexOf(c[u.MMM])+1:u.MMMM!==void 0&&(n.month=o.indexOf(c[u.MMMM])+1);if(u.D!==void 0){if(n.day=parseInt(c[u.D],10),n.year===null||n.month===null||n.day<1)return n;const m=a!=="persian"?new Date(n.year,n.month,0).getDate():J(n.year,n.month);if(n.day>m)return n}u.H!==void 0?n.hour=parseInt(c[u.H],10)%24:u.h!==void 0&&(n.hour=parseInt(c[u.h],10)%12,(u.A&&c[u.A]==="PM"||u.a&&c[u.a]==="pm"||u.aa&&c[u.aa]==="p.m.")&&(n.hour+=12),n.hour=n.hour%24),u.m!==void 0&&(n.minute=parseInt(c[u.m],10)%60),u.s!==void 0&&(n.second=parseInt(c[u.s],10)%60),u.S!==void 0&&(n.millisecond=parseInt(c[u.S],10)*10**(3-c[u.S].length)),(u.Z!==void 0||u.ZZ!==void 0)&&(v=u.Z!==void 0?c[u.Z].replace(":",""):c[u.ZZ],n.timezoneOffset=(v[0]==="+"?-1:1)*(60*v.slice(1,3)+1*v.slice(3,5)))}return n.dateHash=l(n.year,6)+"/"+l(n.month)+"/"+l(n.day),n.timeHash=l(n.hour)+":"+l(n.minute)+":"+l(n.second)+v,n}function ie(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function oe(e,t){return X(new Date,e,t)}function ue(e){const t=new Date(e).getDay();return t===0?7:t}function I(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const r=new Date(t.getFullYear(),0,4);r.setDate(r.getDate()-(r.getDay()+6)%7+3);const a=t.getTimezoneOffset()-r.getTimezoneOffset();t.setHours(t.getHours()-a);const s=(t-r)/(Z*7);return 1+Math.floor(s)}function de(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function H(e,t){const r=new Date(e);return t===!0?de(r):r.getTime()}function ce(e,t,r,a={}){const s=H(t,a.onlyDate),n=H(r,a.onlyDate),i=H(e,a.onlyDate);return(i>s||a.inclusiveFrom===!0&&i===s)&&(i<n||a.inclusiveTo===!0&&i===n)}function le(e,t){return C(e,t,1)}function he(e,t){return C(e,t,-1)}function p(e,t,r){const a=new Date(e),s=`set${r===!0?"UTC":""}`;switch(t){case"year":case"years":a[`${s}Month`](0);case"month":case"months":a[`${s}Date`](1);case"day":case"days":case"date":a[`${s}Hours`](0);case"hour":case"hours":a[`${s}Minutes`](0);case"minute":case"minutes":a[`${s}Seconds`](0);case"second":case"seconds":a[`${s}Milliseconds`](0)}return a}function fe(e,t,r){const a=new Date(e),s=`set${r===!0?"UTC":""}`;switch(t){case"year":case"years":a[`${s}Month`](11);case"month":case"months":a[`${s}Date`](k(a));case"day":case"days":case"date":a[`${s}Hours`](23);case"hour":case"hours":a[`${s}Minutes`](59);case"minute":case"minutes":a[`${s}Seconds`](59);case"second":case"seconds":a[`${s}Milliseconds`](999)}return a}function pe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(r=>{t=Math.max(t,new Date(r))}),t}function me(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(r=>{t=Math.min(t,new Date(r))}),t}function Y(e,t,r){return(e.getTime()-e.getTimezoneOffset()*$-(t.getTime()-t.getTimezoneOffset()*$))/r}function Q(e,t,r="days"){const a=new Date(e),s=new Date(t);switch(r){case"years":case"year":return a.getFullYear()-s.getFullYear();case"months":case"month":return(a.getFullYear()-s.getFullYear())*12+a.getMonth()-s.getMonth();case"days":case"day":case"date":return Y(p(a,"day"),p(s,"day"),Z);case"hours":case"hour":return Y(p(a,"hour"),p(s,"hour"),G);case"minutes":case"minute":return Y(p(a,"minute"),p(s,"minute"),$);case"seconds":case"second":return Y(p(a,"second"),p(s,"second"),1e3)}}function T(e){return Q(e,p(e,"year"),"days")+1}function ge(e){return A(e)===!0?"date":typeof e=="number"?"number":"string"}function ye(e,t,r){const a=new Date(e);if(t){const s=new Date(t);if(a<s)return s}if(r){const s=new Date(r);if(a>s)return s}return a}function De(e,t,r){const a=new Date(e),s=new Date(t);if(r===void 0)return a.getTime()===s.getTime();switch(r){case"second":case"seconds":if(a.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(a.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(a.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(a.getDate()!==s.getDate())return!1;case"month":case"months":if(a.getMonth()!==s.getMonth())return!1;case"year":case"years":if(a.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${r}`)}return!0}function k(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function x(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const b={YY(e,t,r){const a=this.YYYY(e,t,r)%100;return a>=0?l(a):"-"+l(Math.abs(a))},YYYY(e,t,r){return r!=null?r:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return l(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return x(this.Q(e))},D(e){return e.getDate()},Do(e){return x(e.getDate())},DD(e){return l(e.getDate())},DDD(e){return T(e)},DDDD(e){return l(T(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return I(e)},ww(e){return l(I(e))},H(e){return e.getHours()},HH(e){return l(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return l(this.h(e))},m(e){return e.getMinutes()},mm(e){return l(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return l(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return l(Math.floor(e.getMilliseconds()/10))},SSS(e){return l(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,r,a){const s=a==null?e.getTimezoneOffset():a;return F(s,":")},ZZ(e,t,r,a){const s=a==null?e.getTimezoneOffset():a;return F(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function we(e,t,r,a,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const n=new Date(e);if(isNaN(n))return;t===void 0&&(t=N);const i=z(r,q.props);return t.replace(K,(o,d)=>o in b?b[o](n,i,a,s):d===void 0?o:d.split("\\]").join("]"))}function _e(e){return A(e)===!0?new Date(e.getTime()):e}var Me={isValid:ie,extractDate:se,buildDate:oe,getDayOfWeek:ue,getWeekOfYear:I,isBetweenDates:ce,addToDate:le,subtractFromDate:he,adjustDate:X,startOfDate:p,endOfDate:fe,getMaxDate:pe,getMinDate:me,getDateDiff:Q,getDayOfYear:T,inferDateFormat:ge,getDateBetween:ye,isSameDate:De,daysInMonth:k,formatDate:we,clone:_e};const He=R("cart",{state:()=>({store:{},products:[{sn:"000001",name:"S-300HB",description:"XXXXXX",price:15820,stockQty:2,requireQty:0,remainQty:1,state:1,releaseDate:"",arriveDate:"2024/06/01",method:{sn:"000001",inList:!1}}],lists:[],total:{qty:0,price:0},productFilter:{warehouses:null,search:null},productOptions:{state:{0:"wait",1:"Cancel",2:"Confirmed",3:"Reserved"},warehouseType:{list:{reserve:"Reserved",inquiry:"Inquiries",sale:"Sale"},options:{stock:{reserve:"Reserved",sale:"Sale"},inquiry:{inquiry:"Inquiries"}},defaultValue:{currentSet:"inquiry",defaultSet:"reserve",stock:"reserve",inquiry:"inquiry"}},location:{0:"Europe",1:"Taiwan",2:"Other"},productState:{available:"Available",reserved:"Reserved",inquiry:"Inquiry"}},colorSchema:{type:{reserve:"red",inquiry:"orange",sale:"blue"}},orderHistory:[],orderDetail:[],typeCollection:[],defaultType:"inquiry",warehouse_id:null,statusBadgeColor:{sale:"primary",sent:"orange"},addCartDialog:!1}),getters:{countList:e=>e.lists.length,locationOption:e=>{let t=[];for(let r in e.productOptions.location)t.push({label:e.productOptions.location[r],value:r});return t},typeOption:e=>{let t=[];try{e.store.cart.warehouse_type==="stock"?(t={reserve:"Reserved",sale:"Sale"},e.defaultType="reserve"):t={inquiry:"Inquiries"},e.typeCollection=t}catch(a){console.log(a)}let r=[];for(let a in t)r.push({label:t[a],value:a});return r},defaultOrderType:e=>e.defaultType},actions:{init(){this.initStore()},async getWarehouseList(){await this.connectStore("stock","/api/v1/warehouses").then(()=>{if(this.store.stock.length>0){this.productOptions.location={};for(let e of this.store.stock)this.productOptions.location[e.id]=e.name}})},async getProductList(){h().loaderStart("apiLoader");let e="/api/v1/products";const t=new URLSearchParams;this.productFilter.warehouses&&t.append("warehouses",this.productFilter.warehouses.value),this.productFilter.search&&t.append("search",this.productFilter.search),t.toString()&&(e+=`?${t.toString()}`),await this.connectStore("product",e).then(()=>{var r,a,s,n;if(this.store.product.length>0){this.products=[];for(let i of this.store.product)this.products.push({sn:(r=i.sn)!=null?r:i.product_id,sn_id:(a=i.sn_id)!=null?a:i.product_id,name:i.product_name,description:i.product_description,price:i.price,stockQty:i.product_qty,state:(s=i.state)!=null?s:"inquiry",releaseDate:i.release_date,arriveDate:i.scheduled_date,specUrl:i.spec_url,thumb:i.product_image_url,type:i.type,stock:{id:i.warehouse_id,name:i.warehouse_name},method:{sn_id:(n=i.sn_id)!=null?n:i.product_id,id:!1,inList:!1,released:this.checkReleasedDate(i.release_date)}})}else this.products=[];return this.initCartLists()}).then(r=>{this.initProductList(),h().loaderEnd("apiLoader")})},checkReleasedDate(e){return!e||Me.extractDate(e,"YYYY-MM-DD")<new Date},async initStore(){await this.getWarehouseList(),await this.getProductList(),await this.initOrderHistory()},async connectStore(e,t){try{D.show({group:"api-loader"}),await _.get(t).then(r=>{h().loaderEnd("apiLoader"),r.status===200&&r.data.error?f.create({title:"error",message:"error"}):r.data.data==="error"&&e==="cart"?this.store[e]=[]:(this.store[e]=r.data.data,e==="cart"&&(this.store.cart.warehouse_id=r.data.warehouse_id,this.store.cart.warehouse_name=r.data.warehouse_name,this.store.cart.warehouse_type=r.data.warehouse_type))})}catch(r){if(h().loaderEnd("apiLoader"),f.create({title:r.name,message:r.message}),r)throw r}},async initCartLists(){await this.connectStore("cart",`/api/v1/get_cart?user_id=${g().getUid}`).then(e=>{if(this.store.cart.length>0){this.warehouse_id=this.store.cart.warehouse_id,this.warehouse_name=this.store.cart.warehouse_name,this.warehouse_type=this.store.cart.warehouse_type,this.lists=[];for(let t of this.store.cart)t.lot_id===!1?this.products.find(r=>r.sn_id===t.product_id):this.products.find(r=>r.sn_id===t.lot_id),this.lists.push({id:t.id,sn_id:t.lot_id?t.lot_id:t.product_id,sn:t.lot_id?t.lot_id:t.product_id,name:t.lot_name?t.lot_name:t.product_name,description:t.product_description,price:t.price_unit,amount:t.product_qty,warehouse_id:t.warehouse_id,warehouse_name:t.warehouse_name,warehouse_type:t.warehouse_type})}})},async initOrderHistory(){await this.connectStore("orderHistory",`/api/v1/get_order?user_id=${g().getUid}`).then(()=>{var e;if(this.store.orderHistory.length>0){this.orderHistory=[];for(let t of this.store.orderHistory)this.orderHistory.push({id:t.order_id,no:t.name,state:(e=t.state)!=null?e:0,status:t.status,location:t.warehouse_id,contact:`${t.contact_name}/${t.contact_phone}`,remark:t.remark,method:{id:t.order_id,status:t.status},date:{order:t.create_date},contactDetail:{name:t.contact_name,tel:t.contact_phone,message:t.remark},order:null})}})},initStorage(e,t){return this.checkStorage(e,t),JSON.parse(w.getItem(e))},checkStorage(e,t){w.getItem(e)===null&&w.set(e,JSON.stringify(t))},checkWarehouse(e,t){console.log("checkWarehouse"),this.lists=this.lists.filter(r=>r.sn_id!==e),this.products.find(r=>r.sn_id===e),console.log("400"),console.log(t.value),console.log(this.warehouse_id),console.log(this.warehouse_id),this.warehouse_id&&t.value!=this.warehouse_id?f.create({title:"Warehouse Conflict",message:"The warehouse from cart products conflict to the current product, would you like to clear cart with the current product?",cancel:!0,persistent:!0}).onOk(()=>{this.clearLists(),this.updateList(e),this.addCartDialog=!0}):(this.updateList(e),this.addCartDialog=!0)},async updateList(e){try{D.show({group:"api-loader"});const t=this.products.find(a=>a.sn_id===e),r={user_id:g().getUid,warehouse_id:this.productFilter.warehouses.value};t.type==="S/N"?r.sn_id=e:r.product_id=e,console.log(r),await _.post("/api/v1/add_cart",r).then(a=>{if(h().loaderEnd("apiLoader"),a.status===200&&a.data.error)f.create({title:a.data.error.data.name,message:a.data.error.data.message});else{M.create({message:"Item Added",color:"blue"});const s=a.data.result;this.lists=this.lists.filter(i=>i.sn_id!==e);let n=this.products.find(i=>i.sn_id===e);this.lists.push({id:s.id,sn_id:s.lot_id?s.lot_id:s.product_id,sn:s.lot_id?s.lot_id:s.product_id,amount:s.product_qty,name:s.lot_name?s.lot_name:s.product_name,description:s.product_description,price:s.price_unit,warehouse_id:n.stock.id}),this.products.map(i=>{i.sn_id===e&&(i.method.inList=!0,i.method.id=s.id)}),this.updateTotal(),this.initCartLists()}})}catch(t){if(h().loaderEnd("apiLoader"),f.create({title:t.name,message:t.message}),t)throw t}},async removeItem(e){try{D.show({group:"api-loader"}),await _.post("/api/v1/remove_cart",{id:e,user_id:g().getUid}).then(t=>{h().loaderEnd("apiLoader"),t.status===200&&t.data.error?f.create({title:"error",message:t.data.error.message}):(M.create({message:"Item removed",color:"green"}),this.lists=this.lists.filter(r=>r.id!==e),this.products.map(r=>{r.method.id===e&&(r.method.inList=!1,r.method.id=!1)}),this.updateTotal())})}catch(t){if(h().loaderEnd("apiLoader"),f.create({title:t.name,message:t.message}),t)throw t}},async clearCartFromStore(){try{D.show({group:"api-loader"}),await _.post("/api/v1/clear_cart",{user_id:g().getUid}).then(e=>{h().loaderEnd("apiLoader"),e.status===200&&e.data.error?f.create({title:"error",message:e.data.error.message}):M.create({message:"Cart Clear",color:"green"})})}catch(e){if(h().loaderEnd("apiLoader"),f.create({title:e.name,message:e.message}),e)throw e}},increaseAmount(e){this.lists.map(t=>{t.sn===e.sn&&t.amount++}),this.updateTotal()},decreaseAmount(e){this.lists.map(r=>{r.sn===e.sn&&r.amount--});let t=this.lists.find(r=>r.amount===0);t&&this.removeItem(t.name),this.updateTotal()},updateTotal(){let e={qty:0,price:0};for(let t of this.lists)e.qty+=t.amount,e.price+=t.amount*t.price;this.total=e,w.set("products",JSON.stringify(this.products))},initProductList(){this.checkStorage("products",this.products);let e=[];this.products.map(t=>{let r=this.lists.find(a=>a.sn_id===t.sn_id);r&&(t.method.inList=!0,t.method.id=r.id,e.push(r))}),this.lists=e,this.updateTotal()},availableAmount(e){let t=this.products.find(r=>r.sn===e);return t?t.stockQty:0},arriveDate(e){let t=this.products.find(r=>r.sn===e);return t?this.formateDate(t.arriveDate):"--"},formateDate(e){return e===void 0||e===!1?"--":e},clearLists(){this.lists=[],this.products.map(e=>e.method.inList=!1),this.clearCartFromStore(),this.updateTotal()},async updateOrderStorage(e){try{D.show({group:"api-loader"});const t={user_id:g().getUid,status:e.type,contract_name:e.contactDetail.name,contract_phone:e.contactDetail.tel,remark:e.contactDetail.message};await _.post("/api/v1/post_order",t).then(r=>{h().loaderEnd("apiLoader"),r.status===200&&r.data.result.data==="error"?f.create({title:"error",message:r.data.result.message}):(M.create({message:"Order Create Successfully",color:"blue"}),this.initOrderHistory())})}catch(t){if(h().loaderEnd("apiLoader"),f.create({title:t.name,message:t.message}),t)throw t}},saveOrder(e){return this.updateOrderStorage(e),this.clearLists(),!0},async confirmOrder(e){this.orderHistory.map(t=>{t.no===e&&(t.state=2)});try{D.show({group:"api-loader"});const t={user_id:g().getUid,order_id:e};await _.post("/api/v1/confirm_order",t).then(r=>{h().loaderEnd("apiLoader"),r.status===200&&r.data.result.data==="error"?f.create({title:"error",message:r.data.result.message}):(M.create({message:"Order Confirmed",color:"blue"}),this.initOrderHistory())})}catch(t){if(h().loaderEnd("apiLoader"),f.create({title:t.name,message:t.message}),t)throw t}},async cancelOrder(e){this.orderHistory.map(t=>{t.no===e&&(t.state=1)});try{D.show({group:"api-loader"});const t={user_id:g().getUid,order_id:e};await _.post("/api/v1/cancel_order",t).then(r=>{h().loaderEnd("apiLoader"),r.status===200&&r.data.result.data==="error"?f.create({title:"error",message:r.data.result.message}):(M.create({message:"Order Canceled",color:"blue"}),this.initOrderHistory())})}catch(t){if(h().loaderEnd("apiLoader"),f.create({title:t.name,message:t.message}),t)throw t}},updateOrder(e,t){this.orderHistory.map(r=>{r.no===e&&(r=t)}),this.updateOrderStorage()},removeStorage(){w.remove("cart"),w.remove("products"),w.remove("order-history")}}});export{Me as d,Le as n,He as u};
