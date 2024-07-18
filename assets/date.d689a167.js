import{b6 as Z,aY as F,b7 as C}from"./index.7b943df6.js";import{p as d,c as L}from"./QMarkupTable.cca1ab89.js";const M=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Q(e){return k(e)===0}function X(e,t){return t<=6?31:t<=11||Q(e)?30:29}function k(e){const t=M.length;let a=M[0],n,s,r,c,o;if(e<a||e>=M[t-1])throw new Error("Invalid Jalaali year "+e);for(o=1;o<t&&(n=M[o],s=n-a,!(e<n));o+=1)a=n;return c=e-a,s-c<6&&(c=c-s+j(s+4,33)*33),r=I(I(c+1,33)-1,4),r===-1&&(r=4),r}function j(e,t){return~~(e/t)}function I(e,t){return e-~~(e/t)*t}const b=864e5,U=36e5,v=6e4,z="YYYY-MM-DDTHH:mm:ss.SSSZ",P=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,R=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Y={};function B(e,t){const a="("+t.days.join("|")+")",n=e+a;if(Y[n]!==void 0)return Y[n];const s="("+t.daysShort.join("|")+")",r="("+t.months.join("|")+")",c="("+t.monthsShort.join("|")+")",o={};let i=0;const m=e.replace(R,l=>{switch(i++,l){case"YY":return o.YY=i,"(-?\\d{1,2})";case"YYYY":return o.YYYY=i,"(-?\\d{1,4})";case"M":return o.M=i,"(\\d{1,2})";case"MM":return o.M=i,"(\\d{2})";case"MMM":return o.MMM=i,c;case"MMMM":return o.MMMM=i,r;case"D":return o.D=i,"(\\d{1,2})";case"Do":return o.D=i++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return o.D=i,"(\\d{2})";case"H":return o.H=i,"(\\d{1,2})";case"HH":return o.H=i,"(\\d{2})";case"h":return o.h=i,"(\\d{1,2})";case"hh":return o.h=i,"(\\d{2})";case"m":return o.m=i,"(\\d{1,2})";case"mm":return o.m=i,"(\\d{2})";case"s":return o.s=i,"(\\d{1,2})";case"ss":return o.s=i,"(\\d{2})";case"S":return o.S=i,"(\\d{1})";case"SS":return o.S=i,"(\\d{2})";case"SSS":return o.S=i,"(\\d{3})";case"A":return o.A=i,"(AM|PM)";case"a":return o.a=i,"(am|pm)";case"aa":return o.aa=i,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return a;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return o.Z=i,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return o.ZZ=i,"(Z|[+-]\\d{2}\\d{2})";case"X":return o.X=i,"(-?\\d+)";case"x":return o.x=i,"(-?\\d{4,})";default:return i--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),u={map:o,regex:new RegExp("^"+m)};return Y[n]=u,u}function A(e,t){return e!==void 0?e:t!==void 0?t.date:C.date}function O(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),s=Math.floor(n/60),r=n%60;return a+d(s)+t+d(r)}function J(e,t,a){let n=e.getFullYear(),s=e.getMonth();const r=e.getDate();return t.year!==void 0&&(n+=a*t.year,delete t.year),t.month!==void 0&&(s+=a*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(s),e.setDate(Math.min(r,H(e))),t.date!==void 0&&(e.setDate(e.getDate()+a*t.date),delete t.date),e}function W(e,t,a){const n=t.year!==void 0?t.year:e[`get${a}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${a}Month`](),r=new Date(n,s+1,0).getDate(),c=Math.min(r,t.date!==void 0?t.date:e[`get${a}Date`]());return e[`set${a}Date`](1),e[`set${a}Month`](2),e[`set${a}FullYear`](n),e[`set${a}Month`](s),e[`set${a}Date`](c),delete t.year,delete t.month,delete t.date,e}function $(e,t,a){const n=E(t),s=new Date(e),r=n.year!==void 0||n.month!==void 0||n.date!==void 0?J(s,n,a):s;for(const c in n){const o=L(c);r[`set${o}`](r[`get${o}`]()+a*n[c])}return r}function E(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function N(e,t,a){const n=E(t),s=a===!0?"UTC":"",r=new Date(e),c=n.year!==void 0||n.month!==void 0||n.date!==void 0?W(r,n,s):r;for(const o in n){const i=o.charAt(0).toUpperCase()+o.slice(1);c[`set${s}${i}`](n[o])}return c}function V(e,t,a){const n=q(e,t,a),s=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),r=s.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===r?s:$(s,{minutes:n.timezoneOffset-r},1)}function q(e,t,a,n,s){const r={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(r,s),e==null||e===""||typeof e!="string")return r;t===void 0&&(t=z);const c=A(a,Z.props),o=c.months,i=c.monthsShort,{regex:m,map:u}=B(t,c),l=e.match(m);if(l===null)return r;let g="";if(u.X!==void 0||u.x!==void 0){const h=parseInt(l[u.X!==void 0?u.X:u.x],10);if(isNaN(h)===!0||h<0)return r;const D=new Date(h*(u.X!==void 0?1e3:1));r.year=D.getFullYear(),r.month=D.getMonth()+1,r.day=D.getDate(),r.hour=D.getHours(),r.minute=D.getMinutes(),r.second=D.getSeconds(),r.millisecond=D.getMilliseconds()}else{if(u.YYYY!==void 0)r.year=parseInt(l[u.YYYY],10);else if(u.YY!==void 0){const h=parseInt(l[u.YY],10);r.year=h<0?h:2e3+h}if(u.M!==void 0){if(r.month=parseInt(l[u.M],10),r.month<1||r.month>12)return r}else u.MMM!==void 0?r.month=i.indexOf(l[u.MMM])+1:u.MMMM!==void 0&&(r.month=o.indexOf(l[u.MMMM])+1);if(u.D!==void 0){if(r.day=parseInt(l[u.D],10),r.year===null||r.month===null||r.day<1)return r;const h=n!=="persian"?new Date(r.year,r.month,0).getDate():X(r.year,r.month);if(r.day>h)return r}u.H!==void 0?r.hour=parseInt(l[u.H],10)%24:u.h!==void 0&&(r.hour=parseInt(l[u.h],10)%12,(u.A&&l[u.A]==="PM"||u.a&&l[u.a]==="pm"||u.aa&&l[u.aa]==="p.m.")&&(r.hour+=12),r.hour=r.hour%24),u.m!==void 0&&(r.minute=parseInt(l[u.m],10)%60),u.s!==void 0&&(r.second=parseInt(l[u.s],10)%60),u.S!==void 0&&(r.millisecond=parseInt(l[u.S],10)*10**(3-l[u.S].length)),(u.Z!==void 0||u.ZZ!==void 0)&&(g=u.Z!==void 0?l[u.Z].replace(":",""):l[u.ZZ],r.timezoneOffset=(g[0]==="+"?-1:1)*(60*g.slice(1,3)+1*g.slice(3,5)))}return r.dateHash=d(r.year,6)+"/"+d(r.month)+"/"+d(r.day),r.timeHash=d(r.hour)+":"+d(r.minute)+":"+d(r.second)+g,r}function G(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function K(e,t){return N(new Date,e,t)}function ee(e){const t=new Date(e).getDay();return t===0?7:t}function w(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);const n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);const s=(t-a)/(b*7);return 1+Math.floor(s)}function te(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function p(e,t){const a=new Date(e);return t===!0?te(a):a.getTime()}function ne(e,t,a,n={}){const s=p(t,n.onlyDate),r=p(a,n.onlyDate),c=p(e,n.onlyDate);return(c>s||n.inclusiveFrom===!0&&c===s)&&(c<r||n.inclusiveTo===!0&&c===r)}function re(e,t){return $(e,t,1)}function se(e,t){return $(e,t,-1)}function f(e,t,a){const n=new Date(e),s=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](0);case"month":case"months":n[`${s}Date`](1);case"day":case"days":case"date":n[`${s}Hours`](0);case"hour":case"hours":n[`${s}Minutes`](0);case"minute":case"minutes":n[`${s}Seconds`](0);case"second":case"seconds":n[`${s}Milliseconds`](0)}return n}function ae(e,t,a){const n=new Date(e),s=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](11);case"month":case"months":n[`${s}Date`](H(n));case"day":case"days":case"date":n[`${s}Hours`](23);case"hour":case"hours":n[`${s}Minutes`](59);case"minute":case"minutes":n[`${s}Seconds`](59);case"second":case"seconds":n[`${s}Milliseconds`](999)}return n}function oe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(a=>{t=Math.max(t,new Date(a))}),t}function ue(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(a=>{t=Math.min(t,new Date(a))}),t}function y(e,t,a){return(e.getTime()-e.getTimezoneOffset()*v-(t.getTime()-t.getTimezoneOffset()*v))/a}function _(e,t,a="days"){const n=new Date(e),s=new Date(t);switch(a){case"years":case"year":return n.getFullYear()-s.getFullYear();case"months":case"month":return(n.getFullYear()-s.getFullYear())*12+n.getMonth()-s.getMonth();case"days":case"day":case"date":return y(f(n,"day"),f(s,"day"),b);case"hours":case"hour":return y(f(n,"hour"),f(s,"hour"),U);case"minutes":case"minute":return y(f(n,"minute"),f(s,"minute"),v);case"seconds":case"second":return y(f(n,"second"),f(s,"second"),1e3)}}function S(e){return _(e,f(e,"year"),"days")+1}function ie(e){return F(e)===!0?"date":typeof e=="number"?"number":"string"}function ce(e,t,a){const n=new Date(e);if(t){const s=new Date(t);if(n<s)return s}if(a){const s=new Date(a);if(n>s)return s}return n}function le(e,t,a){const n=new Date(e),s=new Date(t);if(a===void 0)return n.getTime()===s.getTime();switch(a){case"second":case"seconds":if(n.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==s.getDate())return!1;case"month":case"months":if(n.getMonth()!==s.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${a}`)}return!0}function H(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function x(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const T={YY(e,t,a){const n=this.YYYY(e,t,a)%100;return n>=0?d(n):"-"+d(Math.abs(n))},YYYY(e,t,a){return a!=null?a:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return d(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return x(this.Q(e))},D(e){return e.getDate()},Do(e){return x(e.getDate())},DD(e){return d(e.getDate())},DDD(e){return S(e)},DDDD(e){return d(S(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return w(e)},ww(e){return d(w(e))},H(e){return e.getHours()},HH(e){return d(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return d(this.h(e))},m(e){return e.getMinutes()},mm(e){return d(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return d(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return d(Math.floor(e.getMilliseconds()/10))},SSS(e){return d(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,a,n){const s=n==null?e.getTimezoneOffset():n;return O(s,":")},ZZ(e,t,a,n){const s=n==null?e.getTimezoneOffset():n;return O(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function de(e,t,a,n,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const r=new Date(e);if(isNaN(r))return;t===void 0&&(t=z);const c=A(a,Z.props);return t.replace(P,(o,i)=>o in T?T[o](r,c,n,s):i===void 0?o:i.split("\\]").join("]"))}function fe(e){return F(e)===!0?new Date(e.getTime()):e}var ge={isValid:G,extractDate:V,buildDate:K,getDayOfWeek:ee,getWeekOfYear:w,isBetweenDates:ne,addToDate:re,subtractFromDate:se,adjustDate:N,startOfDate:f,endOfDate:ae,getMaxDate:oe,getMinDate:ue,getDateDiff:_,getDayOfYear:S,inferDateFormat:ie,getDateBetween:ce,isSameDate:le,daysInMonth:H,formatDate:de,clone:fe};export{ge as d};
