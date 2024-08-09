/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var rough=function(){"use strict";function t(t,e,s){if(t&&t.length){const[n,o]=e,a=Math.PI/180*s,r=Math.cos(a),h=Math.sin(a);t.forEach(t=>{const[e,s]=t;t[0]=(e-n)*r-(s-o)*h+n,t[1]=(e-n)*h+(s-o)*r+o})}}function e(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function s(t,e,s,n){const o=e[1]-t[1],a=t[0]-e[0],r=o*t[0]+a*t[1],h=n[1]-s[1],i=s[0]-n[0],c=h*s[0]+i*s[1],l=o*i-h*a;return l?[(i*r-a*c)/l,(o*c-h*r)/l]:null}function n(t,e,s){const n=t.length;if(n<3)return!1;const h=[Number.MAX_SAFE_INTEGER,s],i=[e,s];let c=0;for(let e=0;e<n;e++){const s=t[e],l=t[(e+1)%n];if(r(s,l,i,h)){if(0===a(s,i,l))return o(s,i,l);c++}}return c%2==1}function o(t,e,s){return e[0]<=Math.max(t[0],s[0])&&e[0]>=Math.min(t[0],s[0])&&e[1]<=Math.max(t[1],s[1])&&e[1]>=Math.min(t[1],s[1])}function a(t,e,s){const n=(e[1]-t[1])*(s[0]-e[0])-(e[0]-t[0])*(s[1]-e[1]);return 0===n?0:n>0?1:2}function r(t,e,s,n){const r=a(t,e,s),h=a(t,e,n),i=a(s,n,t),c=a(s,n,e);return r!==h&&i!==c||(!(0!==r||!o(t,s,e))||(!(0!==h||!o(t,n,e))||(!(0!==i||!o(s,t,n))||!(0!==c||!o(s,e,n)))))}function h(e,s){const n=[0,0],o=Math.round(s.hachureAngle+90);o&&t(e,n,o);const a=function(t,e){const s=[...t];s[0].join(",")!==s[s.length-1].join(",")&&s.push([s[0][0],s[0][1]]);const n=[];if(s&&s.length>2){let t=e.hachureGap;t<0&&(t=4*e.strokeWidth),t=Math.max(t,.1);const o=[];for(let t=0;t<s.length-1;t++){const e=s[t],n=s[t+1];if(e[1]!==n[1]){const t=Math.min(e[1],n[1]);o.push({ymin:t,ymax:Math.max(e[1],n[1]),x:t===e[1]?e[0]:n[0],islope:(n[0]-e[0])/(n[1]-e[1])})}}if(o.sort((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax)),!o.length)return n;let a=[],r=o[0].ymin;for(;a.length||o.length;){if(o.length){let t=-1;for(let e=0;e<o.length&&!(o[e].ymin>r);e++)t=e;o.splice(0,t+1).forEach(t=>{a.push({s:r,edge:t})})}if(a=a.filter(t=>!(t.edge.ymax<=r)),a.sort((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x)),a.length>1)for(let t=0;t<a.length;t+=2){const e=t+1;if(e>=a.length)break;const s=a[t].edge,o=a[e].edge;n.push([[Math.round(s.x),r],[Math.round(o.x),r]])}r+=t,a.forEach(e=>{e.edge.x=e.edge.x+t*e.edge.islope})}}return n}(e,s);return o&&(t(e,n,-o),function(e,s,n){const o=[];e.forEach(t=>o.push(...t)),t(o,s,n)}(a,n,-o)),a}class i{constructor(t){this.helper=t}fillPolygon(t,e){return this._fillPolygon(t,e)}_fillPolygon(t,e,s=!1){let n=h(t,e);if(s){const e=this.connectingLines(t,n);n=n.concat(e)}return{type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const s=[];for(const n of t)s.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}connectingLines(t,s){const n=[];if(s.length>1)for(let o=1;o<s.length;o++){const a=s[o-1];if(e(a)<3)continue;const r=[s[o][0],a[1]];if(e(r)>3){const e=this.splitOnIntersections(t,r);n.push(...e)}}return n}midPointInPolygon(t,e){return n(t,(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2)}splitOnIntersections(t,o){const a=Math.max(5,.1*e(o)),h=[];for(let n=0;n<t.length;n++){const i=t[n],c=t[(n+1)%t.length];if(r(i,c,...o)){const t=s(i,c,o[0],o[1]);if(t){const s=e([t,o[0]]),n=e([t,o[1]]);s>a&&n>a&&h.push({point:t,distance:s})}}}if(h.length>1){const e=h.sort((t,e)=>t.distance-e.distance).map(t=>t.point);if(n(t,...o[0])||e.shift(),n(t,...o[1])||e.pop(),e.length<=1)return this.midPointInPolygon(t,o)?[o]:[];const s=[o[0],...e,o[1]],a=[];for(let e=0;e<s.length-1;e+=2){const n=[s[e],s[e+1]];this.midPointInPolygon(t,n)&&a.push(n)}return a}return this.midPointInPolygon(t,o)?[o]:[]}}class c extends i{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}}class l extends i{fillPolygon(t,e){const s=this._fillPolygon(t,e),n=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),o=this._fillPolygon(t,n);return s.ops=s.ops.concat(o.ops),s}}class u{constructor(t){this.helper=t}fillPolygon(t,e){const s=h(t,e=Object.assign({},e,{curveStepCount:4,hachureAngle:0,roughness:1}));return this.dotsOnLines(s,e)}dotsOnLines(t,s){const n=[];let o=s.hachureGap;o<0&&(o=4*s.strokeWidth),o=Math.max(o,.1);let a=s.fillWeight;a<0&&(a=s.strokeWidth/2);const r=o/4;for(const h of t){const t=e(h),i=t/o,c=Math.ceil(i)-1,l=t-c*o,u=(h[0][0]+h[1][0])/2-o/4,f=Math.min(h[0][1],h[1][1]);for(let t=0;t<c;t++){const e=f+l+t*o,h=this.helper.randOffsetWithRange(u-r,u+r,s),i=this.helper.randOffsetWithRange(e-r,e+r,s),c=this.helper.ellipse(h,i,a,a,s);n.push(...c.ops)}}return{type:"fillSketch",ops:n}}}class f{constructor(t){this.helper=t}fillPolygon(t,e){const s=h(t,e);return{type:"fillSketch",ops:this.dashedLine(s,e)}}dashedLine(t,s){const n=s.dashOffset<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashOffset,o=s.dashGap<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashGap,a=[];return t.forEach(t=>{const r=e(t),h=Math.floor(r/(n+o)),i=(r+o-h*(n+o))/2;let c=t[0],l=t[1];c[0]>l[0]&&(c=t[1],l=t[0]);const u=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let t=0;t<h;t++){const e=t*(n+o),r=e+n,h=[c[0]+e*Math.cos(u)+i*Math.cos(u),c[1]+e*Math.sin(u)+i*Math.sin(u)],l=[c[0]+r*Math.cos(u)+i*Math.cos(u),c[1]+r*Math.sin(u)+i*Math.sin(u)];a.push(...this.helper.doubleLineOps(h[0],h[1],l[0],l[1],s))}}),a}}class p{constructor(t){this.helper=t}fillPolygon(t,e){const s=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,n=e.zigzagOffset<0?s:e.zigzagOffset,o=h(t,e=Object.assign({},e,{hachureGap:s+n}));return{type:"fillSketch",ops:this.zigzagLines(o,n,e)}}zigzagLines(t,s,n){const o=[];return t.forEach(t=>{const a=e(t),r=Math.round(a/(2*s));let h=t[0],i=t[1];h[0]>i[0]&&(h=t[1],i=t[0]);const c=Math.atan((i[1]-h[1])/(i[0]-h[0]));for(let t=0;t<r;t++){const e=2*t*s,a=2*(t+1)*s,r=Math.sqrt(2*Math.pow(s,2)),i=[h[0]+e*Math.cos(c),h[1]+e*Math.sin(c)],l=[h[0]+a*Math.cos(c),h[1]+a*Math.sin(c)],u=[i[0]+r*Math.cos(c+Math.PI/4),i[1]+r*Math.sin(c+Math.PI/4)];o.push(...this.helper.doubleLineOps(i[0],i[1],u[0],u[1],n),...this.helper.doubleLineOps(u[0],u[1],l[0],l[1],n))}}),o}}const d={};class g{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const M={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function k(t,e){return t.type===e}function b(t){const e=[],s=function(t){const e=new Array;for(;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:0,text:RegExp.$1},t=t.substr(RegExp.$1.length);else{if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];e[e.length]={type:1,text:""+parseFloat(RegExp.$1)},t=t.substr(RegExp.$1.length)}return e[e.length]={type:2,text:""},e}(t);let n="BOD",o=0,a=s[o];for(;!k(a,2);){let r=0;const h=[];if("BOD"===n){if("M"!==a.text&&"m"!==a.text)return b("M0,0"+t);o++,r=M[a.text],n=a.text}else k(a,1)?r=M[n]:(o++,r=M[a.text],n=a.text);if(!(o+r<s.length))throw new Error("Path data ended short");for(let t=o;t<o+r;t++){const e=s[t];if(!k(e,1))throw new Error("Param not a number: "+n+","+e.text);h[h.length]=+e.text}if("number"!=typeof M[n])throw new Error("Bad segment: "+n);{const t={key:n,data:h};e.push(t),o+=r,a=s[o],"M"===n&&(n="L"),"m"===n&&(n="l")}}return e}function y(t){let e=0,s=0,n=0,o=0;const a=[];for(const{key:r,data:h}of t)switch(r){case"M":a.push({key:"M",data:[...h]}),[e,s]=h,[n,o]=h;break;case"m":e+=h[0],s+=h[1],a.push({key:"M",data:[e,s]}),n=e,o=s;break;case"L":a.push({key:"L",data:[...h]}),[e,s]=h;break;case"l":e+=h[0],s+=h[1],a.push({key:"L",data:[e,s]});break;case"C":a.push({key:"C",data:[...h]}),e=h[4],s=h[5];break;case"c":{const t=h.map((t,n)=>n%2?t+s:t+e);a.push({key:"C",data:t}),e=t[4],s=t[5];break}case"Q":a.push({key:"Q",data:[...h]}),e=h[2],s=h[3];break;case"q":{const t=h.map((t,n)=>n%2?t+s:t+e);a.push({key:"Q",data:t}),e=t[2],s=t[3];break}case"A":a.push({key:"A",data:[...h]}),e=h[5],s=h[6];break;case"a":e+=h[5],s+=h[6],a.push({key:"A",data:[h[0],h[1],h[2],h[3],h[4],e,s]});break;case"H":a.push({key:"H",data:[...h]}),e=h[0];break;case"h":e+=h[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...h]}),s=h[0];break;case"v":s+=h[0],a.push({key:"V",data:[s]});break;case"S":a.push({key:"S",data:[...h]}),e=h[2],s=h[3];break;case"s":{const t=h.map((t,n)=>n%2?t+s:t+e);a.push({key:"S",data:t}),e=t[2],s=t[3];break}case"T":a.push({key:"T",data:[...h]}),e=h[0],s=h[1];break;case"t":e+=h[0],s+=h[1],a.push({key:"T",data:[e,s]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=n,s=o}return a}function m(t){const e=[];let s="",n=0,o=0,a=0,r=0,h=0,i=0;for(const{key:c,data:l}of t){switch(c){case"M":e.push({key:"M",data:[...l]}),[n,o]=l,[a,r]=l;break;case"C":e.push({key:"C",data:[...l]}),n=l[4],o=l[5],h=l[2],i=l[3];break;case"L":e.push({key:"L",data:[...l]}),[n,o]=l;break;case"H":n=l[0],e.push({key:"L",data:[n,o]});break;case"V":o=l[0],e.push({key:"L",data:[n,o]});break;case"S":{let t=0,a=0;"C"===s||"S"===s?(t=n+(n-h),a=o+(o-i)):(t=n,a=o),e.push({key:"C",data:[t,a,...l]}),h=l[0],i=l[1],n=l[2],o=l[3];break}case"T":{const[t,a]=l;let r=0,c=0;"Q"===s||"T"===s?(r=n+(n-h),c=o+(o-i)):(r=n,c=o);const u=n+2*(r-n)/3,f=o+2*(c-o)/3,p=t+2*(r-t)/3,d=a+2*(c-a)/3;e.push({key:"C",data:[u,f,p,d,t,a]}),h=r,i=c,n=t,o=a;break}case"Q":{const[t,s,a,r]=l,c=n+2*(t-n)/3,u=o+2*(s-o)/3,f=a+2*(t-a)/3,p=r+2*(s-r)/3;e.push({key:"C",data:[c,u,f,p,a,r]}),h=t,i=s,n=a,o=r;break}case"A":{const t=Math.abs(l[0]),s=Math.abs(l[1]),a=l[2],r=l[3],h=l[4],i=l[5],c=l[6];if(0===t||0===s)e.push({key:"C",data:[n,o,i,c,i,c]}),n=i,o=c;else if(n!==i||o!==c){P(n,o,i,c,t,s,a,r,h).forEach((function(t){e.push({key:"C",data:t})})),n=i,o=c}break}case"Z":e.push({key:"Z",data:[]}),n=a,o=r}s=c}return e}function w(t,e,s){return[t*Math.cos(s)-e*Math.sin(s),t*Math.sin(s)+e*Math.cos(s)]}function P(t,e,s,n,o,a,r,h,i,c){const l=(u=r,Math.PI*u/180);var u;let f=[],p=0,d=0,g=0,M=0;if(c)[p,d,g,M]=c;else{[t,e]=w(t,e,-l),[s,n]=w(s,n,-l);const r=(t-s)/2,c=(e-n)/2;let u=r*r/(o*o)+c*c/(a*a);u>1&&(u=Math.sqrt(u),o*=u,a*=u);const f=o*o,k=a*a,b=f*k-f*c*c-k*r*r,y=f*c*c+k*r*r,m=(h===i?-1:1)*Math.sqrt(Math.abs(b/y));g=m*o*c/a+(t+s)/2,M=m*-a*r/o+(e+n)/2,p=Math.asin(parseFloat(((e-M)/a).toFixed(9))),d=Math.asin(parseFloat(((n-M)/a).toFixed(9))),t<g&&(p=Math.PI-p),s<g&&(d=Math.PI-d),p<0&&(p=2*Math.PI+p),d<0&&(d=2*Math.PI+d),i&&p>d&&(p-=2*Math.PI),!i&&d>p&&(d-=2*Math.PI)}let k=d-p;if(Math.abs(k)>120*Math.PI/180){const t=d,e=s,h=n;d=i&&d>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,f=P(s=g+o*Math.cos(d),n=M+a*Math.sin(d),e,h,o,a,r,0,i,[d,t,g,M])}k=d-p;const b=Math.cos(p),y=Math.sin(p),m=Math.cos(d),x=Math.sin(d),v=Math.tan(k/4),O=4/3*o*v,S=4/3*a*v,L=[t,e],T=[t+O*y,e-S*b],I=[s+O*x,n-S*m],A=[s,n];if(T[0]=2*L[0]-T[0],T[1]=2*L[1]-T[1],c)return[T,I,A].concat(f);{f=[T,I,A].concat(f);const t=[];for(let e=0;e<f.length;e+=3){const s=w(f[e][0],f[e][1],l),n=w(f[e+1][0],f[e+1][1],l),o=w(f[e+2][0],f[e+2][1],l);t.push([s[0],s[1],n[0],n[1],o[0],o[1]])}return t}}const x={randOffset:function(t,e){return W(t,e)},randOffsetWithRange:function(t,e,s){return E(t,e,s)},ellipse:function(t,e,s,n,o){const a=T(s,n,o);return I(t,e,o,a).opset},doubleLineOps:function(t,e,s,n,o){return z(t,e,s,n,o,!0)}};function v(t,e,s,n,o){return{type:"path",ops:z(t,e,s,n,o)}}function O(t,e,s){const n=(t||[]).length;if(n>2){const o=[];for(let e=0;e<n-1;e++)o.push(...z(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&o.push(...z(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:o}}return 2===n?v(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function S(t,e,s,n,o){return function(t,e){return O(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],o)}function L(t,e){let s=$(t,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){const n=$(t,1.5*(1+.22*e.roughness),function(t){const e=Object.assign({},t);e.randomizer=void 0,t.seed&&(e.seed=t.seed+1);return e}(e));s=s.concat(n)}return{type:"path",ops:s}}function T(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),o=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),a=2*Math.PI/o;let r=Math.abs(t/2),h=Math.abs(e/2);const i=1-s.curveFitting;return r+=W(r*i,s),h+=W(h*i,s),{increment:a,rx:r,ry:h}}function I(t,e,s,n){const[o,a]=q(n.increment,t,e,n.rx,n.ry,1,n.increment*E(.1,E(.4,1,s),s),s);let r=G(o,null,s);if(!s.disableMultiStroke){const[o]=q(n.increment,t,e,n.rx,n.ry,1.5,0,s),a=G(o,null,s);r=r.concat(a)}return{estimatedPoints:a,opset:{type:"path",ops:r}}}function A(t,e,s,n,o,a,r,h,i){const c=t,l=e;let u=Math.abs(s/2),f=Math.abs(n/2);u+=W(.01*u,i),f+=W(.01*f,i);let p=o,d=a;for(;p<0;)p+=2*Math.PI,d+=2*Math.PI;d-p>2*Math.PI&&(p=0,d=2*Math.PI);const g=2*Math.PI/i.curveStepCount,M=Math.min(g/2,(d-p)/2),k=F(M,c,l,u,f,p,d,1,i);if(!i.disableMultiStroke){const t=F(M,c,l,u,f,p,d,1.5,i);k.push(...t)}return r&&(h?k.push(...z(c,l,c+u*Math.cos(p),l+f*Math.sin(p),i),...z(c,l,c+u*Math.cos(d),l+f*Math.sin(d),i)):k.push({op:"lineTo",data:[c,l]},{op:"lineTo",data:[c+u*Math.cos(p),l+f*Math.sin(p)]})),{type:"path",ops:k}}function _(t,e){const s=[];if(t.length){const n=e.maxRandomnessOffset||0,o=t.length;if(o>2){s.push({op:"move",data:[t[0][0]+W(n,e),t[0][1]+W(n,e)]});for(let a=1;a<o;a++)s.push({op:"lineTo",data:[t[a][0]+W(n,e),t[a][1]+W(n,e)]})}}return{type:"fillPath",ops:s}}function C(t,e){return function(t,e){let s=t.fillStyle||"hachure";if(!d[s])switch(s){case"zigzag":d[s]||(d[s]=new c(e));break;case"cross-hatch":d[s]||(d[s]=new l(e));break;case"dots":d[s]||(d[s]=new u(e));break;case"dashed":d[s]||(d[s]=new f(e));break;case"zigzag-line":d[s]||(d[s]=new p(e));break;case"hachure":default:s="hachure",d[s]||(d[s]=new i(e))}return d[s]}(e,x).fillPolygon(t,e)}function D(t){return t.randomizer||(t.randomizer=new g(t.seed||0)),t.randomizer.next()}function E(t,e,s,n=1){return s.roughness*n*(D(s)*(e-t)+t)}function W(t,e,s=1){return E(-t,t,e,s)}function z(t,e,s,n,o,a=!1){const r=a?o.disableMultiStrokeFill:o.disableMultiStroke,h=R(t,e,s,n,o,!0,!1);if(r)return h;const i=R(t,e,s,n,o,!0,!0);return h.concat(i)}function R(t,e,s,n,o,a,r){const h=Math.pow(t-s,2)+Math.pow(e-n,2),i=Math.sqrt(h);let c=1;c=i<200?1:i>500?.4:-.0016668*i+1.233334;let l=o.maxRandomnessOffset||0;l*l*100>h&&(l=i/10);const u=l/2,f=.2+.2*D(o);let p=o.bowing*o.maxRandomnessOffset*(n-e)/200,d=o.bowing*o.maxRandomnessOffset*(t-s)/200;p=W(p,o,c),d=W(d,o,c);const g=[],M=()=>W(u,o,c),k=()=>W(l,o,c);return a&&(r?g.push({op:"move",data:[t+M(),e+M()]}):g.push({op:"move",data:[t+W(l,o,c),e+W(l,o,c)]})),r?g.push({op:"bcurveTo",data:[p+t+(s-t)*f+M(),d+e+(n-e)*f+M(),p+t+2*(s-t)*f+M(),d+e+2*(n-e)*f+M(),s+M(),n+M()]}):g.push({op:"bcurveTo",data:[p+t+(s-t)*f+k(),d+e+(n-e)*f+k(),p+t+2*(s-t)*f+k(),d+e+2*(n-e)*f+k(),s+k(),n+k()]}),g}function $(t,e,s){const n=[];n.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]),n.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]);for(let o=1;o<t.length;o++)n.push([t[o][0]+W(e,s),t[o][1]+W(e,s)]),o===t.length-1&&n.push([t[o][0]+W(e,s),t[o][1]+W(e,s)]);return G(n,null,s)}function G(t,e,s){const n=t.length,o=[];if(n>3){const a=[],r=1-s.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];a[0]=[s[0],s[1]],a[1]=[s[0]+(r*t[e+1][0]-r*t[e-1][0])/6,s[1]+(r*t[e+1][1]-r*t[e-1][1])/6],a[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],a[3]=[t[e+1][0],t[e+1][1]],o.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+W(t,s),e[1]+W(t,s)]})}}else 3===n?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&o.push(...z(t[0][0],t[0][1],t[1][0],t[1][1],s));return o}function q(t,e,s,n,o,a,r,h){const i=[],c=[],l=W(.5,h)-Math.PI/2;c.push([W(a,h)+e+.9*n*Math.cos(l-t),W(a,h)+s+.9*o*Math.sin(l-t)]);for(let r=l;r<2*Math.PI+l-.01;r+=t){const t=[W(a,h)+e+n*Math.cos(r),W(a,h)+s+o*Math.sin(r)];i.push(t),c.push(t)}return c.push([W(a,h)+e+n*Math.cos(l+2*Math.PI+.5*r),W(a,h)+s+o*Math.sin(l+2*Math.PI+.5*r)]),c.push([W(a,h)+e+.98*n*Math.cos(l+r),W(a,h)+s+.98*o*Math.sin(l+r)]),c.push([W(a,h)+e+.9*n*Math.cos(l+.5*r),W(a,h)+s+.9*o*Math.sin(l+.5*r)]),[c,i]}function F(t,e,s,n,o,a,r,h,i){const c=a+W(.1,i),l=[];l.push([W(h,i)+e+.9*n*Math.cos(c-t),W(h,i)+s+.9*o*Math.sin(c-t)]);for(let a=c;a<=r;a+=t)l.push([W(h,i)+e+n*Math.cos(a),W(h,i)+s+o*Math.sin(a)]);return l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),G(l,null,i)}function j(t,e,s,n,o,a,r,h){const i=[],c=[h.maxRandomnessOffset||1,(h.maxRandomnessOffset||1)+.3];let l=[0,0];const u=h.disableMultiStroke?1:2;for(let f=0;f<u;f++)0===f?i.push({op:"move",data:[r[0],r[1]]}):i.push({op:"move",data:[r[0]+W(c[0],h),r[1]+W(c[0],h)]}),l=[o+W(c[f],h),a+W(c[f],h)],i.push({op:"bcurveTo",data:[t+W(c[f],h),e+W(c[f],h),s+W(c[f],h),n+W(c[f],h),l[0],l[1]]});return i}function N(t){return[...t]}function Z(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function Q(t,e,s){const n=Z(e,s);if(0===n)return Z(t,e);let o=((t[0]-e[0])*(s[0]-e[0])+(t[1]-e[1])*(s[1]-e[1]))/n;return o=Math.max(0,Math.min(1,o)),Z(t,H(e,s,o))}function H(t,e,s){return[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}function V(t,e,s,n){const o=n||[];if(function(t,e){const s=t[e+0],n=t[e+1],o=t[e+2],a=t[e+3];let r=3*n[0]-2*s[0]-a[0];r*=r;let h=3*n[1]-2*s[1]-a[1];h*=h;let i=3*o[0]-2*a[0]-s[0];i*=i;let c=3*o[1]-2*a[1]-s[1];return c*=c,r<i&&(r=i),h<c&&(h=c),r+h}(t,e)<s){const s=t[e+0];if(o.length){(a=o[o.length-1],r=s,Math.sqrt(Z(a,r)))>1&&o.push(s)}else o.push(s);o.push(t[e+3])}else{const n=.5,a=t[e+0],r=t[e+1],h=t[e+2],i=t[e+3],c=H(a,r,n),l=H(r,h,n),u=H(h,i,n),f=H(c,l,n),p=H(l,u,n),d=H(f,p,n);V([a,c,f,d],0,s,o),V([d,p,u,i],0,s,o)}var a,r;return o}function B(t,e){return X(t,0,t.length,e)}function X(t,e,s,n,o){const a=o||[],r=t[e],h=t[s-1];let i=0,c=1;for(let n=e+1;n<s-1;++n){const e=Q(t[n],r,h);e>i&&(i=e,c=n)}return Math.sqrt(i)>n?(X(t,e,c+1,n,a),X(t,c,s,n,a)):(a.length||a.push(r),a.push(h)),a}function J(t,e=.15,s){const n=[],o=(t.length-1)/3;for(let s=0;s<o;s++){V(t,3*s,e,n)}return s&&s>0?X(n,0,n.length,s):n}const K="none";class U{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,s){return{shape:t,sets:e||[],options:s||this.defaultOptions}}line(t,e,s,n,o){const a=this._o(o);return this._d("line",[v(t,e,s,n,a)],a)}rectangle(t,e,s,n,o){const a=this._o(o),r=[],h=S(t,e,s,n,a);if(a.fill){const o=[[t,e],[t+s,e],[t+s,e+n],[t,e+n]];"solid"===a.fillStyle?r.push(_(o,a)):r.push(C(o,a))}return a.stroke!==K&&r.push(h),this._d("rectangle",r,a)}ellipse(t,e,s,n,o){const a=this._o(o),r=[],h=T(s,n,a),i=I(t,e,a,h);if(a.fill)if("solid"===a.fillStyle){const s=I(t,e,a,h).opset;s.type="fillPath",r.push(s)}else r.push(C(i.estimatedPoints,a));return a.stroke!==K&&r.push(i.opset),this._d("ellipse",r,a)}circle(t,e,s,n){const o=this.ellipse(t,e,s,s,n);return o.shape="circle",o}linearPath(t,e){const s=this._o(e);return this._d("linearPath",[O(t,!1,s)],s)}arc(t,e,s,n,o,a,r=!1,h){const i=this._o(h),c=[],l=A(t,e,s,n,o,a,r,!0,i);if(r&&i.fill)if("solid"===i.fillStyle){const r=A(t,e,s,n,o,a,!0,!1,i);r.type="fillPath",c.push(r)}else c.push(function(t,e,s,n,o,a,r){const h=t,i=e;let c=Math.abs(s/2),l=Math.abs(n/2);c+=W(.01*c,r),l+=W(.01*l,r);let u=o,f=a;for(;u<0;)u+=2*Math.PI,f+=2*Math.PI;f-u>2*Math.PI&&(u=0,f=2*Math.PI);const p=(f-u)/r.curveStepCount,d=[];for(let t=u;t<=f;t+=p)d.push([h+c*Math.cos(t),i+l*Math.sin(t)]);return d.push([h+c*Math.cos(f),i+l*Math.sin(f)]),d.push([h,i]),C(d,r)}(t,e,s,n,o,a,i));return i.stroke!==K&&c.push(l),this._d("arc",c,i)}curve(t,e){const s=this._o(e),n=[],o=L(t,s);if(s.fill&&s.fill!==K&&t.length>=3){const e=J(function(t,e=0){const s=t.length;if(s<3)throw new Error("A curve must have at least three points.");const n=[];if(3===s)n.push(N(t[0]),N(t[1]),N(t[2]),N(t[2]));else{const s=[];s.push(t[0],t[0]);for(let e=1;e<t.length;e++)s.push(t[e]),e===t.length-1&&s.push(t[e]);const o=[],a=1-e;n.push(N(s[0]));for(let t=1;t+2<s.length;t++){const e=s[t];o[0]=[e[0],e[1]],o[1]=[e[0]+(a*s[t+1][0]-a*s[t-1][0])/6,e[1]+(a*s[t+1][1]-a*s[t-1][1])/6],o[2]=[s[t+1][0]+(a*s[t][0]-a*s[t+2][0])/6,s[t+1][1]+(a*s[t][1]-a*s[t+2][1])/6],o[3]=[s[t+1][0],s[t+1][1]],n.push(o[1],o[2],o[3])}}return n}(t),10,(1+s.roughness)/2);"solid"===s.fillStyle?n.push(_(e,s)):n.push(C(e,s))}return s.stroke!==K&&n.push(o),this._d("curve",n,s)}polygon(t,e){const s=this._o(e),n=[],o=O(t,!0,s);return s.fill&&("solid"===s.fillStyle?n.push(_(t,s)):n.push(C(t,s))),s.stroke!==K&&n.push(o),this._d("polygon",n,s)}path(t,e){const s=this._o(e),n=[];if(!t)return this._d("path",n,s);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=s.fill&&"transparent"!==s.fill&&s.fill!==K,a=s.stroke!==K,r=!!(s.simplification&&s.simplification<1),h=function(t,e,s){const n=m(y(b(t))),o=[];let a=[],r=[0,0],h=[];const i=()=>{h.length>=4&&a.push(...J(h,e)),h=[]},c=()=>{i(),a.length&&(o.push(a),a=[])};for(const{key:t,data:e}of n)switch(t){case"M":c(),r=[e[0],e[1]],a.push(r);break;case"L":i(),a.push([e[0],e[1]]);break;case"C":if(!h.length){const t=a.length?a[a.length-1]:r;h.push([t[0],t[1]])}h.push([e[0],e[1]]),h.push([e[2],e[3]]),h.push([e[4],e[5]]);break;case"Z":i(),a.push([r[0],r[1]])}if(c(),!s)return o;const l=[];for(const t of o){const e=B(t,s);e.length&&l.push(e)}return l}(t,1,r?4-4*s.simplification:(1+s.roughness)/2);if(o)if(s.combineNestedSvgPaths){const t=[];h.forEach(e=>t.push(...e)),"solid"===s.fillStyle?n.push(_(t,s)):n.push(C(t,s))}else h.forEach(t=>{"solid"===s.fillStyle?n.push(_(t,s)):n.push(C(t,s))});return a&&(r?h.forEach(t=>{n.push(O(t,!1,s))}):n.push(function(t,e){const s=m(y(b(t))),n=[];let o=[0,0],a=[0,0];for(const{key:t,data:r}of s)switch(t){case"M":{const t=1*(e.maxRandomnessOffset||0);n.push({op:"move",data:r.map(s=>s+W(t,e))}),a=[r[0],r[1]],o=[r[0],r[1]];break}case"L":n.push(...z(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break;case"C":{const[t,s,o,h,i,c]=r;n.push(...j(t,s,o,h,i,c,a,e)),a=[i,c];break}case"Z":n.push(...z(a[0],a[1],o[0],o[1],e)),a=[o[0],o[1]]}return{type:"path",ops:n}}(t,s))),this._d("path",n,s)}opsToPath(t){let e="";for(const s of t.ops){const t=s.data;switch(s.op){case"move":e+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":e+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"lineTo":e+=`L${t[0]} ${t[1]} `}}return e.trim()}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,n=[];for(const t of e){let e=null;switch(t.type){case"path":e={d:this.opsToPath(t),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:K};break;case"fillPath":e={d:this.opsToPath(t),stroke:K,strokeWidth:0,fill:s.fill||K};break;case"fillSketch":e=this.fillSketch(t,s)}e&&n.push(e)}return n}fillSketch(t,e){let s=e.fillWeight;return s<0&&(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||K,strokeWidth:s,fill:K}}}class Y{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new U(e)}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.ctx;for(const o of e)switch(o.type){case"path":n.save(),n.strokeStyle="none"===s.stroke?"transparent":s.stroke,n.lineWidth=s.strokeWidth,s.strokeLineDash&&n.setLineDash(s.strokeLineDash),s.strokeLineDashOffset&&(n.lineDashOffset=s.strokeLineDashOffset),this._drawToContext(n,o),n.restore();break;case"fillPath":n.save(),n.fillStyle=s.fill||"";const e="curve"===t.shape||"polygon"===t.shape?"evenodd":"nonzero";this._drawToContext(n,o,e),n.restore();break;case"fillSketch":this.fillSketch(n,o,s)}}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2),t.save(),s.fillLineDash&&t.setLineDash(s.fillLineDash),s.fillLineDashOffset&&(t.lineDashOffset=s.fillLineDashOffset),t.strokeStyle=s.fill||"",t.lineWidth=n,this._drawToContext(t,e),t.restore()}_drawToContext(t,e,s="nonzero"){t.beginPath();for(const s of e.ops){const e=s.data;switch(s.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"lineTo":t.lineTo(e[0],e[1])}}"fillPath"===e.type?t.fill(s):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a),a}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a),a}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a),a}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o),o}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i),i}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const tt="http://www.w3.org/2000/svg";class et{constructor(t,e){this.svg=t,this.gen=new U(e)}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,o=n.createElementNS(tt,"g");for(const a of e){let e=null;switch(a.type){case"path":e=n.createElementNS(tt,"path"),e.setAttribute("d",this.opsToPath(a)),e.setAttribute("stroke",s.stroke),e.setAttribute("stroke-width",s.strokeWidth+""),e.setAttribute("fill","none"),s.strokeLineDash&&e.setAttribute("stroke-dasharray",s.strokeLineDash.join(" ").trim()),s.strokeLineDashOffset&&e.setAttribute("stroke-dashoffset",""+s.strokeLineDashOffset);break;case"fillPath":e=n.createElementNS(tt,"path"),e.setAttribute("d",this.opsToPath(a)),e.setAttribute("stroke","none"),e.setAttribute("stroke-width","0"),e.setAttribute("fill",s.fill||""),"curve"!==t.shape&&"polygon"!==t.shape||e.setAttribute("fill-rule","evenodd");break;case"fillSketch":e=this.fillSketch(n,a,s)}e&&o.appendChild(e)}return o}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2);const o=t.createElementNS(tt,"path");return o.setAttribute("d",this.opsToPath(e)),o.setAttribute("stroke",s.fill||""),o.setAttribute("stroke-width",n+""),o.setAttribute("fill","none"),s.fillLineDash&&o.setAttribute("stroke-dasharray",s.fillLineDash.join(" ").trim()),s.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",""+s.fillLineDashOffset),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t){return this.gen.opsToPath(t)}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a)}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a)}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a)}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}return{canvas:(t,e)=>new Y(t,e),svg:(t,e)=>new et(t,e),generator:t=>new U(t),newSeed:()=>U.newSeed()}}();

/*!
  Highlight.js v11.9.0 (git: f47103d4f1)
  (c) 2006-2023 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(n){
        return n instanceof Map?n.clear=n.delete=n.set=()=>{
            throw Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=()=>{
            throw Error("set is read-only")
        }),Object.freeze(n),Object.getOwnPropertyNames(n).forEach((t=>{
            const a=n[t],i=typeof a;"object"!==i&&"function"!==i||Object.isFrozen(a)||e(a)
        })),n}class n{constructor(e){
        void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
        ignoreMatch(){this.isMatchIgnored=!0}}function t(e){
        return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
    }function a(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n]
    ;return n.forEach((e=>{for(const n in e)t[n]=e[n]})),t}const i=e=>!!e.scope
    ;class r{constructor(e,n){
        this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
        this.buffer+=t(e)}openNode(e){if(!i(e))return;const n=((e,{prefix:n})=>{
        if(e.startsWith("language:"))return e.replace("language:","language-")
            ;if(e.includes(".")){const t=e.split(".")
        ;return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")
        }return`${n}${e}`})(e.scope,{prefix:this.classPrefix});this.span(n)}
        closeNode(e){i(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
            this.buffer+=`<span class="${e}">`}}const s=(e={})=>{const n={children:[]}
    ;return Object.assign(n,e),n};class o{constructor(){
        this.rootNode=s(),this.stack=[this.rootNode]}get top(){
        return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
        this.top.children.push(e)}openNode(e){const n=s({scope:e})
    ;this.add(n),this.stack.push(n)}closeNode(){
        if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
        for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
        walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
            return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
                n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
            "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
                o._collapse(e)})))}}class l extends o{constructor(e){super(),this.options=e}
        addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
            this.closeNode()}__addSublanguage(e,n){const t=e.root
        ;n&&(t.scope="language:"+n),this.add(t)}toHTML(){
            return new r(this,this.options).value()}finalize(){
            return this.closeAllNodes(),!0}}function c(e){
        return e?"string"==typeof e?e:e.source:null}function d(e){return b("(?=",e,")")}
        function g(e){return b("(?:",e,")*")}function u(e){return b("(?:",e,")?")}
        function b(...e){return e.map((e=>c(e))).join("")}function m(...e){const n=(e=>{
            const n=e[e.length-1]
            ;return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}
        })(e);return"("+(n.capture?"":"?:")+e.map((e=>c(e))).join("|")+")"}
        function p(e){return RegExp(e.toString()+"|").exec("").length-1}
        const _=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
        ;function h(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t
        ;let a=c(e),i="";for(;a.length>0;){const e=_.exec(a);if(!e){i+=a;break}
            i+=a.substring(0,e.index),
                a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+(Number(e[1])+n):(i+=e[0],
            "("===e[0]&&t++)}return i})).map((e=>`(${e})`)).join(n)}
        const f="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",N="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",v={
            begin:"\\\\[\\s\\S]",relevance:0},O={scope:"string",begin:"'",end:"'",
            illegal:"\\n",contains:[v]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",
            contains:[v]},x=(e,n,t={})=>{const i=a({scope:"comment",begin:e,end:n,
            contains:[]},t);i.contains.push({scope:"doctag",
            begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
        ;const r=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
        ;return i.contains.push({begin:b(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
        },M=x("//","$"),S=x("/\\*","\\*/"),A=x("#","$");var C=Object.freeze({
            __proto__:null,APOS_STRING_MODE:O,BACKSLASH_ESCAPE:v,BINARY_NUMBER_MODE:{
                scope:"number",begin:w,relevance:0},BINARY_NUMBER_RE:w,COMMENT:x,
            C_BLOCK_COMMENT_MODE:S,C_LINE_COMMENT_MODE:M,C_NUMBER_MODE:{scope:"number",
                begin:N,relevance:0},C_NUMBER_RE:N,END_SAME_AS_BEGIN:e=>Object.assign(e,{
                "on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{
                    n.data._beginMatch!==e[1]&&n.ignoreMatch()}}),HASH_COMMENT_MODE:A,IDENT_RE:f,
            MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+E,relevance:0},
            NUMBER_MODE:{scope:"number",begin:y,relevance:0},NUMBER_RE:y,
            PHRASAL_WORDS_MODE:{
                begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },QUOTE_STRING_MODE:k,REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,
                end:/\/[gimuy]*/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]},
            RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG:(e={})=>{const n=/^#![ ]*\//
            ;return e.binary&&(e.begin=b(n,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:n,
                end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},
            TITLE_MODE:{scope:"title",begin:f,relevance:0},UNDERSCORE_IDENT_RE:E,
            UNDERSCORE_TITLE_MODE:{scope:"title",begin:E,relevance:0}});function T(e,n){
            "."===e.input[e.index-1]&&n.ignoreMatch()}function R(e,n){
            void 0!==e.className&&(e.scope=e.className,delete e.className)}function D(e,n){
            n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
                e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
            void 0===e.relevance&&(e.relevance=0))}function I(e,n){
            Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function L(e,n){
            if(e.match){
                if(e.begin||e.end)throw Error("begin & end are not supported with match")
                    ;e.begin=e.match,delete e.match}}function B(e,n){
            void 0===e.relevance&&(e.relevance=1)}const $=(e,n)=>{if(!e.beforeMatch)return
                ;if(e.starts)throw Error("beforeMatch cannot be used with starts")
                ;const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]
            })),e.keywords=t.keywords,e.begin=b(t.beforeMatch,d(t.begin)),e.starts={
                relevance:0,contains:[Object.assign(t,{endsParent:!0})]
            },e.relevance=0,delete t.beforeMatch
            },z=["of","and","for","in","not","or","if","then","parent","list","value"],F="keyword"
        ;function U(e,n,t=F){const a=Object.create(null)
        ;return"string"==typeof e?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach((t=>{
            Object.assign(a,U(e[t],n,t))})),a;function i(e,t){
            n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((n=>{const t=n.split("|")
            ;a[t[0]]=[e,j(t[0],t[1])]}))}}function j(e,n){
            return n?Number(n):(e=>z.includes(e.toLowerCase()))(e)?0:1}const P={},K=e=>{
            console.error(e)},H=(e,...n)=>{console.log("WARN: "+e,...n)},q=(e,n)=>{
            P[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),P[`${e}/${n}`]=!0)
        },G=Error();function Z(e,n,{key:t}){let a=0;const i=e[t],r={},s={}
        ;for(let e=1;e<=n.length;e++)s[e+a]=i[e],r[e+a]=!0,a+=p(n[e-1])
        ;e[t]=s,e[t]._emit=r,e[t]._multi=!0}function W(e){(e=>{
            e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
                delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
            _wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
        }),(e=>{if(Array.isArray(e.begin)){
            if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
                G
                ;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),
                G;Z(e,e.begin,{key:"beginScope"}),e.begin=h(e.begin,{joinWith:""})}})(e),(e=>{
            if(Array.isArray(e.end)){
                if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                    G
                    ;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),
                    G;Z(e,e.end,{key:"endScope"}),e.end=h(e.end,{joinWith:""})}})(e)}function Q(e){
            function n(n,t){
                return RegExp(c(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))
            }class t{constructor(){
                this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
                addRule(e,n){
                    n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
                        this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
                ;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(h(e,{joinWith:"|"
                }),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
                ;const n=this.matcherRe.exec(e);if(!n)return null
                    ;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t]
                ;return n.splice(0,t),Object.assign(n,a)}}class i{constructor(){
                this.rules=[],this.multiRegexes=[],
                    this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
                if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
                ;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
                    n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
                return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
                this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
                const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
                ;let t=n.exec(e)
                ;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
                    const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
                return t&&(this.regexIndex+=t.position+1,
                this.regexIndex===this.count&&this.considerAll()),t}}
            if(e.compilerExtensions||(e.compilerExtensions=[]),
            e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
                ;return e.classNameAliases=a(e.classNameAliases||{}),function t(r,s){const o=r
            ;if(r.isCompiled)return o
                ;[R,L,W,$].forEach((e=>e(r,s))),e.compilerExtensions.forEach((e=>e(r,s))),
                r.__beforeBegin=null,[D,I,B].forEach((e=>e(r,s))),r.isCompiled=!0;let l=null
            ;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),
                l=r.keywords.$pattern,
                delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=U(r.keywords,e.case_insensitive)),
                o.keywordPatternRe=n(l,!0),
            s&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(o.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),
            r.end&&(o.endRe=n(o.end)),
                o.terminatorEnd=c(o.end)||"",r.endsWithParent&&s.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+s.terminatorEnd)),
            r.illegal&&(o.illegalRe=n(r.illegal)),
            r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((n=>a(e,{
                variants:null},n)))),e.cachedVariants?e.cachedVariants:X(e)?a(e,{
                starts:e.starts?a(e.starts):null
            }):Object.isFrozen(e)?a(e):e))("self"===e?r:e)))),r.contains.forEach((e=>{t(e,o)
            })),r.starts&&t(r.starts,s),o.matcher=(e=>{const n=new i
            ;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
            }))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"
            }),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n})(o),o}(e)}function X(e){
            return!!e&&(e.endsWithParent||X(e.starts))}class V extends Error{
            constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}
        const J=t,Y=a,ee=Symbol("nomatch"),ne=t=>{
            const a=Object.create(null),i=Object.create(null),r=[];let s=!0
            ;const o="Could not find the language '{}', did you forget to load/include a language module?",c={
                disableAutodetect:!0,name:"Plain text",contains:[]};let p={
                ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
                languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
                cssSelector:"pre code",languages:null,__emitter:l};function _(e){
                return p.noHighlightRe.test(e)}function h(e,n,t){let a="",i=""
            ;"object"==typeof n?(a=e,
                t=n.ignoreIllegals,i=n.language):(q("10.7.0","highlight(lang, code, ...args) has been deprecated."),
                q("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
                i=e,a=n),void 0===t&&(t=!0);const r={code:a,language:i};x("before:highlight",r)
            ;const s=r.result?r.result:f(r.language,r.code,t)
            ;return s.code=r.code,x("after:highlight",s),s}function f(e,t,i,r){
                const l=Object.create(null);function c(){if(!x.keywords)return void S.addText(A)
                    ;let e=0;x.keywordPatternRe.lastIndex=0;let n=x.keywordPatternRe.exec(A),t=""
                ;for(;n;){t+=A.substring(e,n.index)
                ;const i=w.case_insensitive?n[0].toLowerCase():n[0],r=(a=i,x.keywords[a]);if(r){
                    const[e,a]=r
                    ;if(S.addText(t),t="",l[i]=(l[i]||0)+1,l[i]<=7&&(C+=a),e.startsWith("_"))t+=n[0];else{
                        const t=w.classNameAliases[e]||e;g(n[0],t)}}else t+=n[0]
                ;e=x.keywordPatternRe.lastIndex,n=x.keywordPatternRe.exec(A)}var a
                ;t+=A.substring(e),S.addText(t)}function d(){null!=x.subLanguage?(()=>{
                    if(""===A)return;let e=null;if("string"==typeof x.subLanguage){
                        if(!a[x.subLanguage])return void S.addText(A)
                            ;e=f(x.subLanguage,A,!0,M[x.subLanguage]),M[x.subLanguage]=e._top
                    }else e=E(A,x.subLanguage.length?x.subLanguage:null)
                    ;x.relevance>0&&(C+=e.relevance),S.__addSublanguage(e._emitter,e.language)
                })():c(),A=""}function g(e,n){
                    ""!==e&&(S.startScope(n),S.addText(e),S.endScope())}function u(e,n){let t=1
                ;const a=n.length-1;for(;t<=a;){if(!e._emit[t]){t++;continue}
                    const a=w.classNameAliases[e[t]]||e[t],i=n[t];a?g(i,a):(A=i,c(),A=""),t++}}
                function b(e,n){
                    return e.scope&&"string"==typeof e.scope&&S.openNode(w.classNameAliases[e.scope]||e.scope),
                    e.beginScope&&(e.beginScope._wrap?(g(A,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
                        A=""):e.beginScope._multi&&(u(e.beginScope,n),A="")),x=Object.create(e,{parent:{
                            value:x}}),x}function m(e,t,a){let i=((e,n)=>{const t=e&&e.exec(n)
                ;return t&&0===t.index})(e.endRe,a);if(i){if(e["on:end"]){const a=new n(e)
                ;e["on:end"](t,a),a.isMatchIgnored&&(i=!1)}if(i){
                    for(;e.endsParent&&e.parent;)e=e.parent;return e}}
                    if(e.endsWithParent)return m(e.parent,t,a)}function _(e){
                    return 0===x.matcher.regexIndex?(A+=e[0],1):(D=!0,0)}function h(e){
                    const n=e[0],a=t.substring(e.index),i=m(x,e,a);if(!i)return ee;const r=x
                    ;x.endScope&&x.endScope._wrap?(d(),
                        g(n,x.endScope._wrap)):x.endScope&&x.endScope._multi?(d(),
                        u(x.endScope,e)):r.skip?A+=n:(r.returnEnd||r.excludeEnd||(A+=n),
                        d(),r.excludeEnd&&(A=n));do{
                        x.scope&&S.closeNode(),x.skip||x.subLanguage||(C+=x.relevance),x=x.parent
                    }while(x!==i.parent);return i.starts&&b(i.starts,e),r.returnEnd?0:n.length}
                let y={};function N(a,r){const o=r&&r[0];if(A+=a,null==o)return d(),0
                    ;if("begin"===y.type&&"end"===r.type&&y.index===r.index&&""===o){
                    if(A+=t.slice(r.index,r.index+1),!s){const n=Error(`0 width match regex (${e})`)
                    ;throw n.languageName=e,n.badRule=y.rule,n}return 1}
                    if(y=r,"begin"===r.type)return(e=>{
                        const t=e[0],a=e.rule,i=new n(a),r=[a.__beforeBegin,a["on:begin"]]
                        ;for(const n of r)if(n&&(n(e,i),i.isMatchIgnored))return _(t)
                            ;return a.skip?A+=t:(a.excludeBegin&&(A+=t),
                            d(),a.returnBegin||a.excludeBegin||(A=t)),b(a,e),a.returnBegin?0:t.length})(r)
                        ;if("illegal"===r.type&&!i){
                        const e=Error('Illegal lexeme "'+o+'" for mode "'+(x.scope||"<unnamed>")+'"')
                        ;throw e.mode=x,e}if("end"===r.type){const e=h(r);if(e!==ee)return e}
                    if("illegal"===r.type&&""===o)return 1
                        ;if(R>1e5&&R>3*r.index)throw Error("potential infinite loop, way more iterations than matches")
                        ;return A+=o,o.length}const w=v(e)
                ;if(!w)throw K(o.replace("{}",e)),Error('Unknown language: "'+e+'"')
                    ;const O=Q(w);let k="",x=r||O;const M={},S=new p.__emitter(p);(()=>{const e=[]
                ;for(let n=x;n!==w;n=n.parent)n.scope&&e.unshift(n.scope)
                ;e.forEach((e=>S.openNode(e)))})();let A="",C=0,T=0,R=0,D=!1;try{
                    if(w.__emitTokens)w.__emitTokens(t,S);else{for(x.matcher.considerAll();;){
                        R++,D?D=!1:x.matcher.considerAll(),x.matcher.lastIndex=T
                        ;const e=x.matcher.exec(t);if(!e)break;const n=N(t.substring(T,e.index),e)
                        ;T=e.index+n}N(t.substring(T))}return S.finalize(),k=S.toHTML(),{language:e,
                        value:k,relevance:C,illegal:!1,_emitter:S,_top:x}}catch(n){
                    if(n.message&&n.message.includes("Illegal"))return{language:e,value:J(t),
                        illegal:!0,relevance:0,_illegalBy:{message:n.message,index:T,
                            context:t.slice(T-100,T+100),mode:n.mode,resultSoFar:k},_emitter:S};if(s)return{
                        language:e,value:J(t),illegal:!1,relevance:0,errorRaised:n,_emitter:S,_top:x}
                        ;throw n}}function E(e,n){n=n||p.languages||Object.keys(a);const t=(e=>{
                const n={value:J(e),illegal:!1,relevance:0,_top:c,_emitter:new p.__emitter(p)}
                ;return n._emitter.addText(e),n})(e),i=n.filter(v).filter(k).map((n=>f(n,e,!1)))
            ;i.unshift(t);const r=i.sort(((e,n)=>{
                if(e.relevance!==n.relevance)return n.relevance-e.relevance
                    ;if(e.language&&n.language){if(v(e.language).supersetOf===n.language)return 1
                    ;if(v(n.language).supersetOf===e.language)return-1}return 0})),[s,o]=r,l=s
            ;return l.secondBest=o,l}function y(e){let n=null;const t=(e=>{
                let n=e.className+" ";n+=e.parentNode?e.parentNode.className:""
                ;const t=p.languageDetectRe.exec(n);if(t){const n=v(t[1])
                ;return n||(H(o.replace("{}",t[1])),
                    H("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}
                return n.split(/\s+/).find((e=>_(e)||v(e)))})(e);if(_(t))return
                ;if(x("before:highlightElement",{el:e,language:t
            }),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
                ;if(e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
                console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                console.warn("The element with unescaped HTML:"),
                console.warn(e)),p.throwUnescapedHTML))throw new V("One of your code blocks includes unescaped HTML.",e.innerHTML)
                ;n=e;const a=n.textContent,r=t?h(a,{language:t,ignoreIllegals:!0}):E(a)
            ;e.innerHTML=r.value,e.dataset.highlighted="yes",((e,n,t)=>{const a=n&&i[n]||t
            ;e.classList.add("hljs"),e.classList.add("language-"+a)
            })(e,t,r.language),e.result={language:r.language,re:r.relevance,
                relevance:r.relevance},r.secondBest&&(e.secondBest={
                language:r.secondBest.language,relevance:r.secondBest.relevance
            }),x("after:highlightElement",{el:e,result:r,text:a})}let N=!1;function w(){
                "loading"!==document.readyState?document.querySelectorAll(p.cssSelector).forEach(y):N=!0
            }function v(e){return e=(e||"").toLowerCase(),a[e]||a[i[e]]}
            function O(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
                i[e.toLowerCase()]=n}))}function k(e){const n=v(e)
            ;return n&&!n.disableAutodetect}function x(e,n){const t=e;r.forEach((e=>{
                e[t]&&e[t](n)}))}
            "undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
                N&&w()}),!1),Object.assign(t,{highlight:h,highlightAuto:E,highlightAll:w,
                highlightElement:y,
                highlightBlock:e=>(q("10.7.0","highlightBlock will be removed entirely in v12.0"),
                    q("10.7.0","Please use highlightElement now."),y(e)),configure:e=>{p=Y(p,e)},
                initHighlighting:()=>{
                    w(),q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
                initHighlightingOnLoad:()=>{
                    w(),q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                },registerLanguage:(e,n)=>{let i=null;try{i=n(t)}catch(n){
                    if(K("Language definition for '{}' could not be registered.".replace("{}",e)),
                        !s)throw n;K(n),i=c}
                    i.name||(i.name=e),a[e]=i,i.rawDefinition=n.bind(null,t),i.aliases&&O(i.aliases,{
                        languageName:e})},unregisterLanguage:e=>{delete a[e]
                ;for(const n of Object.keys(i))i[n]===e&&delete i[n]},
                listLanguages:()=>Object.keys(a),getLanguage:v,registerAliases:O,
                autoDetection:k,inherit:Y,addPlugin:e=>{(e=>{
                    e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{
                        e["before:highlightBlock"](Object.assign({block:n.el},n))
                    }),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{
                        e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),r.push(e)},
                removePlugin:e=>{const n=r.indexOf(e);-1!==n&&r.splice(n,1)}}),t.debugMode=()=>{
                s=!1},t.safeMode=()=>{s=!0},t.versionString="11.9.0",t.regex={concat:b,
                lookahead:d,either:m,optional:u,anyNumberOfTimes:g}
            ;for(const n in C)"object"==typeof C[n]&&e(C[n]);return Object.assign(t,C),t
        },te=ne({});te.newInstance=()=>ne({});var ae=te;const ie=e=>({IMPORTANT:{
                    scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{
                    scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},
                FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},
                ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
                    contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
                    scope:"number",
                    begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
            }),re=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],se=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],oe=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],le=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],ce=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse(),de=oe.concat(le)
        ;var ge="[0-9](_*[0-9])*",ue=`\\.(${ge})`,be="[0-9a-fA-F](_*[0-9a-fA-F])*",me={
            className:"number",variants:[{
                begin:`(\\b(${ge})((${ue})|\\.)?|(${ue}))[eE][+-]?(${ge})[fFdD]?\\b`},{
                begin:`\\b(${ge})((${ue})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
                begin:`(${ue})[fFdD]?\\b`},{begin:`\\b(${ge})[fFdD]\\b`},{
                begin:`\\b0[xX]((${be})\\.?|(${be})?\\.(${be}))[pP][+-]?(${ge})[fFdD]?\\b`},{
                begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${be})[lL]?\\b`},{
                begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
            relevance:0};function pe(e,n,t){return-1===t?"":e.replace(n,(a=>pe(e,n,t-1)))}
        const _e="[A-Za-z$_][0-9A-Za-z$_]*",he=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],fe=["true","false","null","undefined","NaN","Infinity"],Ee=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ye=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ne=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],we=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ve=[].concat(Ne,Ee,ye)
        ;function Oe(e){const n=e.regex,t=_e,a={begin:/<[A-Za-z0-9\\._:-]+/,
                end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
                    const t=e[0].length+e.index,a=e.input[t]
                    ;if("<"===a||","===a)return void n.ignoreMatch();let i
                    ;">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1)
                    ;return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch())
                    ;const r=e.input.substring(t)
                    ;((i=r.match(/^\s*=/))||(i=r.match(/^\s+extends\s+/))&&0===i.index)&&n.ignoreMatch()
                }},i={$pattern:_e,keyword:he,literal:fe,built_in:ve,"variable.language":we
            },r="[0-9](_?[0-9])*",s=`\\.(${r})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",l={
                className:"number",variants:[{
                    begin:`(\\b(${o})((${s})|\\.)?|(${s}))[eE][+-]?(${r})\\b`},{
                    begin:`\\b(${o})\\b((${s})\\b|\\.)?|(${s})\\b`},{
                    begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
                    begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
                    begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
                    begin:"\\b0[0-7]+n?\\b"}],relevance:0},c={className:"subst",begin:"\\$\\{",
                end:"\\}",keywords:i,contains:[]},d={begin:"html`",end:"",starts:{end:"`",
                    returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,c],subLanguage:"xml"}},g={
                begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
                    contains:[e.BACKSLASH_ESCAPE,c],subLanguage:"css"}},u={begin:"gql`",end:"",
                starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,c],
                    subLanguage:"graphql"}},b={className:"string",begin:"`",end:"`",
                contains:[e.BACKSLASH_ESCAPE,c]},m={className:"comment",
                variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
                        begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
                            begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
                            excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",
                            endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
                }),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]
            },p=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,d,g,u,b,{match:/\$\d+/},l]
        ;c.contains=p.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(p)
        });const _=[].concat(m,c.contains),h=_.concat([{begin:/\(/,end:/\)/,keywords:i,
            contains:["self"].concat(_)}]),f={className:"params",begin:/\(/,end:/\)/,
            excludeBegin:!0,excludeEnd:!0,keywords:i,contains:h},E={variants:[{
                match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],
                scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
                match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},y={relevance:0,
            match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
            className:"title.class",keywords:{_:[...Ee,...ye]}},N={variants:[{
                match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
            className:{1:"keyword",3:"title.function"},label:"func.def",contains:[f],
            illegal:/%/},w={
            match:n.concat(/\b/,(v=[...Ne,"super","import"],n.concat("(?!",v.join("|"),")")),t,n.lookahead(/\(/)),
            className:"title.function",relevance:0};var v;const O={
                begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,
                excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},k={
                match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},
                contains:[{begin:/\(\)/},f]
            },x="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={
                match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(x)],
                keywords:"async",className:{1:"keyword",3:"title.function"},contains:[f]}
        ;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{
                PARAMS_CONTAINS:h,CLASS_REFERENCE:y},illegal:/#(?![$_A-z])/,
            contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
                label:"use_strict",className:"meta",relevance:10,
                begin:/^\s*['"]use (strict|asm)['"]/
            },e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,d,g,u,b,m,{match:/\$\d+/},l,y,{
                className:"attr",begin:t+n.lookahead(":"),relevance:0},M,{
                begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
                keywords:"return throw case",relevance:0,contains:[m,e.REGEXP_MODE,{
                    className:"function",begin:x,returnBegin:!0,end:"\\s*=>",contains:[{
                        className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{
                            className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
                            excludeEnd:!0,keywords:i,contains:h}]}]},{begin:/,/,relevance:0},{match:/\s+/,
                    relevance:0},{variants:[{begin:"<>",end:"</>"},{
                        match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:a.begin,
                        "on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{
                        begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},N,{
                beginKeywords:"while if switch catch for"},{
                begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin:!0,label:"func.def",contains:[f,e.inherit(e.TITLE_MODE,{begin:t,
                    className:"title.function"})]},{match:/\.\.\./,relevance:0},O,{match:"\\$"+t,
                relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
                contains:[f]},w,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
                className:"variable.constant"},E,k,{match:/\$[(.]/}]}}
        const ke=e=>b(/\b/,e,/\w$/.test(e)?/\b/:/\B/),xe=["Protocol","Type"].map(ke),Me=["init","self"].map(ke),Se=["Any","Self"],Ae=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Ce=["false","nil","true"],Te=["assignment","associativity","higherThan","left","lowerThan","none","right"],Re=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],De=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],Ie=m(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),Le=m(Ie,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Be=b(Ie,Le,"*"),$e=m(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),ze=m($e,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Fe=b($e,ze,"*"),Ue=b(/[A-Z]/,ze,"*"),je=["attached","autoclosure",b(/convention\(/,m("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",b(/objc\(/,Fe,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],Pe=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
        ;var Ke=Object.freeze({__proto__:null,grmr_bash:e=>{const n=e.regex,t={},a={
                begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]}
            ;Object.assign(t,{className:"variable",variants:[{
                    begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const i={
                className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},r={
                begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
                        end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,
                contains:[e.BACKSLASH_ESCAPE,t,i]};i.contains.push(s);const o={begin:/\$?\(\(/,
                end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
            },l=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
            }),c={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
                contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
                name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
                    keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],
                    literal:["true","false"],
                    built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
                },contains:[l,e.SHEBANG(),c,o,e.HASH_COMMENT_MODE,r,{match:/(\/[a-z._-]+)+/},s,{
                    match:/\\"/},{className:"string",begin:/'/,end:/'/},{match:/\\'/},t]}},
            grmr_c:e=>{const n=e.regex,t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]
            }),a="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",r="("+a+"|"+n.optional(i)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",s={
                className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
                    match:/\batomic_[a-z]{3,6}\b/}]},o={className:"string",variants:[{
                    begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
                    begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
                    begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={
                className:"number",variants:[{begin:"\\b(0b[01']+)"},{
                    begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                },{
                    begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
                    keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                },contains:[{begin:/\\\n/,relevance:0},e.inherit(o,{className:"string"}),{
                    className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},d={
                className:"title",begin:n.optional(i)+e.IDENT_RE,relevance:0
            },g=n.optional(i)+e.IDENT_RE+"\\s*\\(",u={
                keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
                type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],
                literal:"true false NULL",
                built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
            },b=[c,s,t,e.C_BLOCK_COMMENT_MODE,l,o],m={variants:[{begin:/=/,end:/;/},{
                    begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
                keywords:u,contains:b.concat([{begin:/\(/,end:/\)/,keywords:u,
                    contains:b.concat(["self"]),relevance:0}]),relevance:0},p={
                begin:"("+r+"[\\*&\\s]+)+"+g,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
                keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:u,relevance:0},{
                    begin:g,returnBegin:!0,contains:[e.inherit(d,{className:"title.function"})],
                    relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,
                    keywords:u,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,o,l,s,{begin:/\(/,
                        end:/\)/,keywords:u,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,o,l,s]
                    }]},s,t,e.C_BLOCK_COMMENT_MODE,c]};return{name:"C",aliases:["h"],keywords:u,
                disableAutodetect:!0,illegal:"</",contains:[].concat(m,p,b,[c,{
                    begin:e.IDENT_RE+"::",keywords:u},{className:"class",
                    beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
                        beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:c,
                    strings:o,keywords:u}}},grmr_cpp:e=>{const n=e.regex,t=e.COMMENT("//","$",{
                contains:[{begin:/\\\n/}]
            }),a="decltype\\(auto\\)",i="[a-zA-Z_]\\w*::",r="(?!struct)("+a+"|"+n.optional(i)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",s={
                className:"type",begin:"\\b[a-z\\d_]*_t\\b"},o={className:"string",variants:[{
                    begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
                    begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
                    begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={
                className:"number",variants:[{begin:"\\b(0b[01']+)"},{
                    begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                },{
                    begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
                    keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                },contains:[{begin:/\\\n/,relevance:0},e.inherit(o,{className:"string"}),{
                    className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},d={
                className:"title",begin:n.optional(i)+e.IDENT_RE,relevance:0
            },g=n.optional(i)+e.IDENT_RE+"\\s*\\(",u={
                type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
                keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
                literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
                _type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
            },b={className:"function.dispatch",relevance:0,keywords:{
                    _hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
                },
                begin:n.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,n.lookahead(/(<[^<>]+>|)\s*\(/))
            },m=[b,c,s,t,e.C_BLOCK_COMMENT_MODE,l,o],p={variants:[{begin:/=/,end:/;/},{
                    begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
                keywords:u,contains:m.concat([{begin:/\(/,end:/\)/,keywords:u,
                    contains:m.concat(["self"]),relevance:0}]),relevance:0},_={className:"function",
                begin:"("+r+"[\\*&\\s]+)+"+g,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
                keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:u,relevance:0},{
                    begin:g,returnBegin:!0,contains:[d],relevance:0},{begin:/::/,relevance:0},{
                    begin:/:/,endsWithParent:!0,contains:[o,l]},{relevance:0,match:/,/},{
                    className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,
                    contains:[t,e.C_BLOCK_COMMENT_MODE,o,l,s,{begin:/\(/,end:/\)/,keywords:u,
                        relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,o,l,s]}]
                },s,t,e.C_BLOCK_COMMENT_MODE,c]};return{name:"C++",
                aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:u,illegal:"</",
                classNameAliases:{"function.dispatch":"built_in"},
                contains:[].concat(p,_,b,m,[c,{
                    begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                    end:">",keywords:u,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:u},{
                    match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
                    className:{1:"keyword",3:"title.class"}}])}},grmr_csharp:e=>{const n={
                    keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),
                    built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],
                    literal:["default","false","null","true"]},t=e.inherit(e.TITLE_MODE,{
                    begin:"[a-zA-Z](\\.?\\w)*"}),a={className:"number",variants:[{
                        begin:"\\b(0b[01']+)"},{
                        begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
                        begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }],relevance:0},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
                },r=e.inherit(i,{illegal:/\n/}),s={className:"subst",begin:/\{/,end:/\}/,
                    keywords:n},o=e.inherit(s,{illegal:/\n/}),l={className:"string",begin:/\$"/,
                    end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/
                    },e.BACKSLASH_ESCAPE,o]},c={className:"string",begin:/\$@"/,end:'"',contains:[{
                        begin:/\{\{/},{begin:/\}\}/},{begin:'""'},s]},d=e.inherit(c,{illegal:/\n/,
                    contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},o]})
            ;s.contains=[c,l,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_BLOCK_COMMENT_MODE],
                o.contains=[d,l,r,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.inherit(e.C_BLOCK_COMMENT_MODE,{
                    illegal:/\n/})];const g={variants:[c,l,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
            },u={begin:"<",end:">",contains:[{beginKeywords:"in out"},t]
            },b=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",m={
                begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
                keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
                    contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
                            begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
                }),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
                    end:"$",keywords:{
                        keyword:"if else elif endif define undef warning error line region endregion pragma checksum"
                    }},g,a,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,
                    illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"
                    },t,u,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
                    relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
                    contains:[t,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
                    beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
                    contains:[t,u,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
                    begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
                        className:"string",begin:/"/,end:/"/}]},{
                    beginKeywords:"new return throw await else",relevance:0},{className:"function",
                    begin:"("+b+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
                    end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
                        beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                        relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
                        contains:[e.TITLE_MODE,u],relevance:0},{match:/\(\)/},{className:"params",
                        begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
                        contains:[g,a,e.C_BLOCK_COMMENT_MODE]
                    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},m]}},grmr_css:e=>{
                const n=e.regex,t=ie(e),a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{
                    name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{
                        keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},
                    contains:[t.BLOCK_COMMENT,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/
                    },t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0
                    },{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
                    },t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
                            begin:":("+oe.join("|")+")"},{begin:":(:)?("+le.join("|")+")"}]
                    },t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ce.join("|")+")\\b"},{
                        begin:/:/,end:/[;}{]/,
                        contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...a,{
                            begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
                            },contains:[...a,{className:"string",begin:/[^)]/,endsWithParent:!0,
                                excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",
                        relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/
                        },{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
                                $pattern:/[a-z-]+/,keyword:"and or not only",attribute:se.join(" ")},contains:[{
                                begin:/[a-z-]+(?=:)/,className:"attribute"},...a,t.CSS_NUMBER_MODE]}]},{
                        className:"selector-tag",begin:"\\b("+re.join("|")+")\\b"}]}},grmr_diff:e=>{
                const n=e.regex;return{name:"Diff",aliases:["patch"],contains:[{
                        className:"meta",relevance:10,
                        match:n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)
                    },{className:"comment",variants:[{
                            begin:n.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),
                            end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{
                        className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,
                        end:/$/}]}},grmr_go:e=>{const n={
                keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],
                type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
                literal:["true","false","iota","nil"],
                built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
            };return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
                contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
                    variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
                    className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
                    },e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
                    end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
                        begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}},
            grmr_graphql:e=>{const n=e.regex;return{name:"GraphQL",aliases:["gql"],
                case_insensitive:!0,disableAutodetect:!1,keywords:{
                    keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],
                    literal:["true","false","null"]},
                contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{
                    scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",
                    begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,
                    end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{
                    scope:"symbol",begin:n.concat(/[_A-Za-z][_0-9A-Za-z]*/,n.lookahead(/\s*:/)),
                    relevance:0}],illegal:[/[;<']/,/BEGIN/]}},grmr_ini:e=>{const n=e.regex,t={
                className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{
                    begin:e.NUMBER_RE}]},a=e.COMMENT();a.variants=[{begin:/;/,end:/$/},{begin:/#/,
                end:/$/}];const i={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{
                    begin:/\$\{(.*?)\}/}]},r={className:"literal",
                begin:/\bon|off|true|false|yes|no\b/},s={className:"string",
                contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{
                    begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]
            },o={begin:/\[/,end:/\]/,contains:[a,r,i,s,t,"self"],relevance:0
            },l=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{
                name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
                contains:[a,{className:"section",begin:/\[+/,end:/\]+/},{
                    begin:n.concat(l,"(\\s*\\.\\s*",l,")*",n.lookahead(/\s*=\s*[^#\s]/)),
                    className:"attr",starts:{end:/$/,contains:[a,o,r,i,s,t]}}]}},grmr_java:e=>{
                const n=e.regex,t="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",a=t+pe("(?:<"+t+"~~~(?:\\s*,\\s*"+t+"~~~)*>)?",/~~~/g,2),i={
                    keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],
                    literal:["false","true","null"],
                    type:["char","boolean","long","float","int","byte","short","double"],
                    built_in:["super","this"]},r={className:"meta",begin:"@"+t,contains:[{
                        begin:/\(/,end:/\)/,contains:["self"]}]},s={className:"params",begin:/\(/,
                    end:/\)/,keywords:i,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
                ;return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,
                    contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
                            relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
                        begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
                    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
                        className:"string",contains:[e.BACKSLASH_ESCAPE]
                    },e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
                        match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,t],className:{
                            1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
                        begin:[n.concat(/(?!else)/,t),/\s+/,t,/\s+/,/=(?!=)/],className:{1:"type",
                            3:"variable",5:"operator"}},{begin:[/record/,/\s+/,t],className:{1:"keyword",
                            3:"title.class"},contains:[s,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
                        beginKeywords:"new throw return else",relevance:0},{
                        begin:["(?:"+a+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
                            2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,
                            end:/\)/,keywords:i,relevance:0,
                            contains:[r,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,me,e.C_BLOCK_COMMENT_MODE]
                        },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},me,r]}},grmr_javascript:Oe,
            grmr_json:e=>{const n=["true","false","null"],t={scope:"literal",
                beginKeywords:n.join(" ")};return{name:"JSON",keywords:{literal:n},contains:[{
                    className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{
                    match:/[{}[\],:]/,className:"punctuation",relevance:0
                },e.QUOTE_STRING_MODE,t,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
                illegal:"\\S"}},grmr_kotlin:e=>{const n={
                keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                literal:"true false null"},t={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
            },a={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},i={
                className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},r={className:"string",
                variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,a]},{begin:"'",end:"'",
                    illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
                    contains:[e.BACKSLASH_ESCAPE,i,a]}]};a.contains.push(r);const s={
                className:"meta",
                begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
            },o={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
                    end:/\)/,contains:[e.inherit(r,{className:"string"}),"self"]}]
            },l=me,c=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),d={
                variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
                    contains:[]}]},g=d;return g.variants[1].contains=[d],d.variants[1].contains=[g],
                {name:"Kotlin",aliases:["kt","kts"],keywords:n,
                    contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
                            begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,c,{className:"keyword",
                        begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
                                begin:/@\w+/}]}},t,s,o,{className:"function",beginKeywords:"fun",end:"[(]|$",
                        returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
                            begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
                            contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
                            keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
                            endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
                                endsWithParent:!0,contains:[d,e.C_LINE_COMMENT_MODE,c],relevance:0
                            },e.C_LINE_COMMENT_MODE,c,s,o,r,e.C_NUMBER_MODE]},c]},{
                        begin:[/class|interface|trait/,/\s+/,e.UNDERSCORE_IDENT_RE],beginScope:{
                            3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
                        illegal:"extends implements",contains:[{
                            beginKeywords:"public protected internal private constructor"
                        },e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
                            excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,
                            excludeBegin:!0,returnEnd:!0},s,o]},r,{className:"meta",begin:"^#!/usr/bin/env",
                        end:"$",illegal:"\n"},l]}},grmr_less:e=>{
                const n=ie(e),t=de,a="[\\w-]+",i="("+a+"|@\\{"+a+"\\})",r=[],s=[],o=e=>({
                    className:"string",begin:"~?"+e+".*?"+e}),l=(e,n,t)=>({className:e,begin:n,
                    relevance:t}),c={$pattern:/[a-z-]+/,keyword:"and or not only",
                    attribute:se.join(" ")},d={begin:"\\(",end:"\\)",contains:s,keywords:c,
                    relevance:0}
                ;s.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,o("'"),o('"'),n.CSS_NUMBER_MODE,{
                    begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
                        excludeEnd:!0}
                },n.HEXCOLOR,d,l("variable","@@?"+a,10),l("variable","@\\{"+a+"\\}"),l("built_in","~?`[^`]*?`"),{
                    className:"attribute",begin:a+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0
                },n.IMPORTANT,{beginKeywords:"and not"},n.FUNCTION_DISPATCH);const g=s.concat({
                        begin:/\{/,end:/\}/,contains:r}),u={beginKeywords:"when",endsWithParent:!0,
                        contains:[{beginKeywords:"and not"}].concat(s)},b={begin:i+"\\s*:",
                        returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/
                        },n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ce.join("|")+")\\b",
                            end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:s}}]
                    },m={className:"keyword",
                        begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                        starts:{end:"[;{}]",keywords:c,returnEnd:!0,contains:s,relevance:0}},p={
                        className:"variable",variants:[{begin:"@"+a+"\\s*:",relevance:15},{begin:"@"+a
                        }],starts:{end:"[;}]",returnEnd:!0,contains:g}},_={variants:[{
                            begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:i,end:/\{/}],returnBegin:!0,
                        returnEnd:!0,illegal:"[<='$\"]",relevance:0,
                        contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,u,l("keyword","all\\b"),l("variable","@\\{"+a+"\\}"),{
                            begin:"\\b("+re.join("|")+")\\b",className:"selector-tag"
                        },n.CSS_NUMBER_MODE,l("selector-tag",i,0),l("selector-id","#"+i),l("selector-class","\\."+i,0),l("selector-tag","&",0),n.ATTRIBUTE_SELECTOR_MODE,{
                            className:"selector-pseudo",begin:":("+oe.join("|")+")"},{
                            className:"selector-pseudo",begin:":(:)?("+le.join("|")+")"},{begin:/\(/,
                            end:/\)/,relevance:0,contains:g},{begin:"!important"},n.FUNCTION_DISPATCH]},h={
                        begin:a+":(:)?"+`(${t.join("|")})`,returnBegin:!0,contains:[_]}
                ;return r.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,m,p,h,b,_,u,n.FUNCTION_DISPATCH),
                    {name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:r}},
            grmr_lua:e=>{const n="\\[=*\\[",t="\\]=*\\]",a={begin:n,end:t,contains:["self"]
            },i=[e.COMMENT("--(?!"+n+")","$"),e.COMMENT("--"+n,t,{contains:[a],relevance:10
            })];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
                    literal:"true false nil",
                    keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
                    built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
                },contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",
                    contains:[e.inherit(e.TITLE_MODE,{
                        begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
                        begin:"\\(",endsWithParent:!0,contains:i}].concat(i)
                },e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
                    begin:n,end:t,contains:[a],relevance:5}])}},grmr_makefile:e=>{const n={
                className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",
                    contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},t={className:"string",
                begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},a={className:"variable",
                begin:/\$\([\w-]+\s/,end:/\)/,keywords:{
                    built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
                },contains:[n]},i={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},r={
                className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{
                name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,
                    keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
                },contains:[e.HASH_COMMENT_MODE,n,t,a,i,{className:"meta",begin:/^\.PHONY:/,
                    end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},r]}},grmr_markdown:e=>{
                const n={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},t={
                    variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{
                        begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                        relevance:2},{
                        begin:e.regex.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
                        relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
                        begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/
                    },{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
                        returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
                        excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
                        end:"\\]",excludeBegin:!0,excludeEnd:!0}]},a={className:"strong",contains:[],
                    variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]
                },i={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{
                        begin:/_(?![_\s])/,end:/_/,relevance:0}]},r=e.inherit(a,{contains:[]
                }),s=e.inherit(i,{contains:[]});a.contains.push(s),i.contains.push(r)
                ;let o=[n,t];return[a,i,r,s].forEach((e=>{e.contains=e.contains.concat(o)
                })),o=o.concat(a,i),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
                        className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:o},{
                            begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
                                contains:o}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                        end:"\\s+",excludeEnd:!0},a,i,{className:"quote",begin:"^>\\s+",contains:o,
                        end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
                            begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
                            begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
                            contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
                        begin:"^[-\\*]{3,}",end:"$"},t,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
                            className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
                            className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}},grmr_objectivec:e=>{
                const n=/[a-zA-Z@][a-zA-Z0-9_]*/,t={$pattern:n,
                    keyword:["@interface","@class","@protocol","@implementation"]};return{
                    name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],
                    keywords:{"variable.language":["this","super"],$pattern:n,
                        keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],
                        literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],
                        built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],
                        type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]
                    },illegal:"</",contains:[{className:"built_in",
                        begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
                        className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
                            contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
                        keywords:{
                            keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"
                        },contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
                            className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"
                        },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",
                        begin:"("+t.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:t,
                        contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,
                        relevance:0}]}},grmr_perl:e=>{const n=e.regex,t=/[dualxmsipngr]{0,12}/,a={
                $pattern:/[\w.]+/,
                keyword:"abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
            },i={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:a},r={begin:/->\{/,
                end:/\}/},s={variants:[{begin:/\$\d/},{
                    begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")
                },{begin:/[$%@][^\s\w{]/,relevance:0}]
            },o=[e.BACKSLASH_ESCAPE,i,s],l=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],c=(e,a,i="\\1")=>{
                const r="\\1"===i?i:n.concat(i,a)
                ;return n.concat(n.concat("(?:",e,")"),a,/(?:\\.|[^\\\/])*?/,r,/(?:\\.|[^\\\/])*?/,i,t)
            },d=(e,a,i)=>n.concat(n.concat("(?:",e,")"),a,/(?:\\.|[^\\\/])*?/,i,t),g=[s,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{
                endsWithParent:!0}),r,{className:"string",contains:o,variants:[{
                    begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
                    end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
                    begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",
                    relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
                    contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
                    contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{
                    begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",
                begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                relevance:0},{
                begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
                keywords:"split return print reverse grep",relevance:0,
                contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{
                        begin:c("s|tr|y",n.either(...l,{capture:!0}))},{begin:c("s|tr|y","\\(","\\)")},{
                        begin:c("s|tr|y","\\[","\\]")},{begin:c("s|tr|y","\\{","\\}")}],relevance:2},{
                    className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{
                        begin:d("(?:m|qr)?",/\//,/\//)},{begin:d("m|qr",n.either(...l,{capture:!0
                        }),/\1/)},{begin:d("m|qr",/\(/,/\)/)},{begin:d("m|qr",/\[/,/\]/)},{
                        begin:d("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",
                end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{
                begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",
                subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]
            }];return i.contains=g,r.contains=g,{name:"Perl",aliases:["pl","pm"],keywords:a,
                contains:g}},grmr_php:e=>{
                const n=e.regex,t=/(?![A-Za-z0-9])(?![$])/,a=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,t),i=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,t),r={
                    scope:"variable",match:"\\$+"+a},s={scope:"subst",variants:[{begin:/\$\w+/},{
                        begin:/\{\$/,end:/\}/}]},o=e.inherit(e.APOS_STRING_MODE,{illegal:null
                }),l="[ \t\n]",c={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
                        illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(s)}),o,{
                        begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,
                        contains:e.QUOTE_STRING_MODE.contains.concat(s),"on:begin":(e,n)=>{
                            n.data._beginMatch=e[1]||e[2]},"on:end":(e,n)=>{
                            n.data._beginMatch!==e[1]&&n.ignoreMatch()}},e.END_SAME_AS_BEGIN({
                        begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},d={scope:"number",variants:[{
                        begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
                        begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
                        begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                    }],relevance:0
                },g=["false","null","true"],u=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],b=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],m={
                    keyword:u,literal:(e=>{const n=[];return e.forEach((e=>{
                        n.push(e),e.toLowerCase()===e?n.push(e.toUpperCase()):n.push(e.toLowerCase())
                    })),n})(g),built_in:b},p=e=>e.map((e=>e.replace(/\|\d+$/,""))),_={variants:[{
                        match:[/new/,n.concat(l,"+"),n.concat("(?!",p(b).join("\\b|"),"\\b)"),i],scope:{
                            1:"keyword",4:"title.class"}}]},h=n.concat(a,"\\b(?!\\()"),f={variants:[{
                        match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),h],scope:{2:"variable.constant"
                        }},{match:[/::/,/class/],scope:{2:"variable.language"}},{
                        match:[i,n.concat(/::/,n.lookahead(/(?!class\b)/)),h],scope:{1:"title.class",
                            3:"variable.constant"}},{match:[i,n.concat("::",n.lookahead(/(?!class\b)/))],
                        scope:{1:"title.class"}},{match:[i,/::/,/class/],scope:{1:"title.class",
                            3:"variable.language"}}]},E={scope:"attr",
                    match:n.concat(a,n.lookahead(":"),n.lookahead(/(?!::)/))},y={relevance:0,
                    begin:/\(/,end:/\)/,keywords:m,contains:[E,r,f,e.C_BLOCK_COMMENT_MODE,c,d,_]
                },N={relevance:0,
                    match:[/\b/,n.concat("(?!fn\\b|function\\b|",p(u).join("\\b|"),"|",p(b).join("\\b|"),"\\b)"),a,n.concat(l,"*"),n.lookahead(/(?=\()/)],
                    scope:{3:"title.function.invoke"},contains:[y]};y.contains.push(N)
                ;const w=[E,f,e.C_BLOCK_COMMENT_MODE,c,d,_];return{case_insensitive:!1,
                    keywords:m,contains:[{begin:n.concat(/#\[\s*/,i),beginScope:"meta",end:/]/,
                        endScope:"meta",keywords:{literal:g,keyword:["new","array"]},contains:[{
                            begin:/\[/,end:/]/,keywords:{literal:g,keyword:["new","array"]},
                            contains:["self",...w]},...w,{scope:"meta",match:i}]
                    },e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{
                            scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
                        keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
                            contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
                            begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{
                            begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},r,N,f,{
                        match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},_,{
                        scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
                        excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
                        },e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
                            begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:m,
                            contains:["self",r,f,e.C_BLOCK_COMMENT_MODE,c,d]}]},{scope:"class",variants:[{
                            beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
                            illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
                            beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
                        beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
                        contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{
                        beginKeywords:"use",relevance:0,end:";",contains:[{
                            match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},c,d]}
            },grmr_php_template:e=>({name:"PHP template",subLanguage:"xml",contains:[{
                    begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",
                        end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0
                    },e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,
                        skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,
                        contains:null,skip:!0})]}]}),grmr_plaintext:e=>({name:"Plain text",
                aliases:["text","txt"],disableAutodetect:!0}),grmr_python:e=>{
                const n=e.regex,t=/[\p{XID_Start}_]\p{XID_Continue}*/u,a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={
                    $pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,
                    built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
                    literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],
                    type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]
                },r={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,
                    end:/\}/,keywords:i,illegal:/#/},o={begin:/\{\{/,relevance:0},l={
                    className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
                        begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
                        contains:[e.BACKSLASH_ESCAPE,r],relevance:10},{
                        begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
                        contains:[e.BACKSLASH_ESCAPE,r],relevance:10},{
                        begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
                        contains:[e.BACKSLASH_ESCAPE,r,o,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
                        end:/"""/,contains:[e.BACKSLASH_ESCAPE,r,o,s]},{begin:/([uU]|[rR])'/,end:/'/,
                        relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
                        begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
                        end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
                        contains:[e.BACKSLASH_ESCAPE,o,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
                        contains:[e.BACKSLASH_ESCAPE,o,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
                },c="[0-9](_?[0-9])*",d=`(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,g="\\b|"+a.join("|"),u={
                    className:"number",relevance:0,variants:[{
                        begin:`(\\b(${c})|(${d}))[eE][+-]?(${c})[jJ]?(?=${g})`},{begin:`(${d})[jJ]?`},{
                        begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`},{
                        begin:`\\b0[bB](_?[01])+[lL]?(?=${g})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${g})`
                    },{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`},{begin:`\\b(${c})[jJ](?=${g})`
                    }]},b={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:i,
                    contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={
                    className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,
                        end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,
                        contains:["self",r,u,l,e.HASH_COMMENT_MODE]}]};return s.contains=[l,u,r],{
                    name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,
                    illegal:/(<\/|\?)|=>/,contains:[r,u,{begin:/\bself\b/},{beginKeywords:"if",
                        relevance:0},l,b,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{
                            1:"keyword",3:"title.function"},contains:[m]},{variants:[{
                            match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],
                        scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{
                        className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[u,m,l]}]}},
            grmr_python_repl:e=>({aliases:["pycon"],contains:[{className:"meta.prompt",
                    starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{
                        begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}),grmr_r:e=>{
                const n=e.regex,t=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,a=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,r=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/)
                ;return{name:"R",keywords:{$pattern:t,
                        keyword:"function if in break next repeat else for while",
                        literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                        built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
                    },contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,
                            starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),
                                endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{
                                scope:"variable",variants:[{match:t},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0
                            }]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]
                    }),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],
                        variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/
                        }),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/
                        }),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
                        }),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
                        }),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
                        }),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
                            relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{
                                1:"operator",2:"number"},match:[i,a]},{scope:{1:"operator",2:"number"},
                            match:[/%[^%]*%/,a]},{scope:{1:"punctuation",2:"number"},match:[r,a]},{scope:{
                                2:"number"},match:[/[^a-zA-Z0-9._]|^/,a]}]},{scope:{3:"operator"},
                        match:[t,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{
                            match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:r},{begin:"`",end:"`",
                        contains:[{begin:/\\./}]}]}},grmr_ruby:e=>{
                const n=e.regex,t="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",a=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=n.concat(a,/(::\w+)*/),r={
                        "variable.constant":["__FILE__","__LINE__","__ENCODING__"],
                        "variable.language":["self","super"],
                        keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],
                        built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],
                        literal:["true","false","nil"]},s={className:"doctag",begin:"@[A-Za-z]+"},o={
                        begin:"#<",end:">"},l=[e.COMMENT("#","$",{contains:[s]
                    }),e.COMMENT("^=begin","^=end",{contains:[s],relevance:10
                    }),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],c={className:"subst",begin:/#\{/,
                        end:/\}/,keywords:r},d={className:"string",contains:[e.BACKSLASH_ESCAPE,c],
                        variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{
                            begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{
                            begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,
                            end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{
                            begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{
                            begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{
                            begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{
                            begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{
                            begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                            contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
                                contains:[e.BACKSLASH_ESCAPE,c]})]}]},g="[0-9](_?[0-9])*",u={className:"number",
                        relevance:0,variants:[{
                            begin:`\\b([1-9](_?[0-9])*|0)(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`},{
                            begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                        },{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
                            begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
                            begin:"\\b0(_?[0-7])+r?i?\\b"}]},b={variants:[{match:/\(\)/},{
                            className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,
                            keywords:r}]},m=[d,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{
                            match:[/\b(class|module)\s+/,i]}],scope:{2:"title.class",
                            4:"title.class.inherited"},keywords:r},{match:[/(include|extend)\s+/,i],scope:{
                            2:"title.class"},keywords:r},{relevance:0,match:[i,/\.new[. (]/],scope:{
                            1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
                        className:"variable.constant"},{relevance:0,match:a,scope:"title.class"},{
                        match:[/def/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[b]},{
                        begin:e.IDENT_RE+"::"},{className:"symbol",
                        begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",
                        begin:":(?!\\s)",contains:[d,{begin:t}],relevance:0},u,{className:"variable",
                        begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
                        className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,
                        relevance:0,keywords:r},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",
                        keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,c],
                            illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{
                                begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",
                                end:"\\][a-z]*"}]}].concat(o,l),relevance:0}].concat(o,l)
                ;c.contains=m,b.contains=m;const p=[{begin:/^\s*=>/,starts:{end:"$",contains:m}
                },{className:"meta.prompt",
                    begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                    starts:{end:"$",keywords:r,contains:m}}];return l.unshift(o),{name:"Ruby",
                    aliases:["rb","gemspec","podspec","thor","irb"],keywords:r,illegal:/\/\*/,
                    contains:[e.SHEBANG({binary:"ruby"})].concat(p).concat(l).concat(m)}},
            grmr_rust:e=>{const n=e.regex,t={className:"title.function.invoke",relevance:0,
                    begin:n.concat(/\b/,/(?!let|for|while|if|else|match\b)/,e.IDENT_RE,n.lookahead(/\s*\(/))
                },a="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],r=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"]
            ;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:r,
                    keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],
                    literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",
                contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
                }),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
                    className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{
                        begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
                    begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
                        begin:"\\b0b([01_]+)"+a},{begin:"\\b0o([0-7_]+)"+a},{
                        begin:"\\b0x([A-Fa-f0-9_]+)"+a},{
                        begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+a}],relevance:0},{
                    begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
                        3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{
                        className:"string",begin:/"/,end:/"/}]},{
                    begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
                        3:"keyword",4:"variable"}},{
                    begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",
                        3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],
                    className:{1:"keyword",3:"title.class"}},{
                    begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],
                    className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{
                        keyword:"Self",built_in:i,type:r}},{className:"punctuation",begin:"->"},t]}},
            grmr_scss:e=>{const n=ie(e),t=le,a=oe,i="@[a-z-]+",r={className:"variable",
                begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",relevance:0};return{name:"SCSS",
                case_insensitive:!0,illegal:"[=/|']",
                contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n.CSS_NUMBER_MODE,{
                    className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
                    className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0
                },n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",
                    begin:"\\b("+re.join("|")+")\\b",relevance:0},{className:"selector-pseudo",
                    begin:":("+a.join("|")+")"},{className:"selector-pseudo",
                    begin:":(:)?("+t.join("|")+")"},r,{begin:/\(/,end:/\)/,
                    contains:[n.CSS_NUMBER_MODE]},n.CSS_VARIABLE,{className:"attribute",
                    begin:"\\b("+ce.join("|")+")\\b"},{
                    begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
                },{begin:/:/,end:/[;}{]/,relevance:0,
                    contains:[n.BLOCK_COMMENT,r,n.HEXCOLOR,n.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n.IMPORTANT,n.FUNCTION_DISPATCH]
                },{begin:"@(page|font-face)",keywords:{$pattern:i,keyword:"@page @font-face"}},{
                    begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,
                        keyword:"and or not only",attribute:se.join(" ")},contains:[{begin:i,
                        className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"
                    },r,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n.HEXCOLOR,n.CSS_NUMBER_MODE]
                },n.FUNCTION_DISPATCH]}},grmr_shell:e=>({name:"Shell Session",
                aliases:["console","shellsession"],contains:[{className:"meta.prompt",
                    begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,
                        subLanguage:"bash"}}]}),grmr_sql:e=>{
                const n=e.regex,t=e.COMMENT("--","$"),a=["true","false","unknown"],i=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],r=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=r,l=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!r.includes(e))),c={
                    begin:n.concat(/\b/,n.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}}
                ;return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
                        $pattern:/\b[\w\.]+/,keyword:((e,{exceptions:n,when:t}={})=>{const a=t
                        ;return n=n||[],e.map((e=>e.match(/\|\d+$/)||n.includes(e)?e:a(e)?e+"|0":e))
                        })(l,{when:e=>e.length<3}),literal:a,type:i,
                        built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
                    },contains:[{begin:n.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
                            keyword:l.concat(s),literal:a,type:i}},{className:"type",
                        begin:n.either("double precision","large object","with timezone","without timezone")
                    },c,{className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},{className:"string",
                        variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,
                        contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,{
                        className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                        relevance:0}]}},grmr_swift:e=>{const n={match:/\s+/,relevance:0
            },t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,t],i={
                match:[/\./,m(...xe,...Me)],className:{2:"keyword"}},r={match:b(/\./,m(...Ae)),
                relevance:0},s=Ae.filter((e=>"string"==typeof e)).concat(["_|0"]),o={variants:[{
                    className:"keyword",
                    match:m(...Ae.filter((e=>"string"!=typeof e)).concat(Se).map(ke),...Me)}]},l={
                $pattern:m(/\b\w+/,/#\w+/),keyword:s.concat(Re),literal:Ce},c=[i,r,o],g=[{
                match:b(/\./,m(...De)),relevance:0},{className:"built_in",
                match:b(/\b/,m(...De),/(?=\()/)}],u={match:/->/,relevance:0},p=[u,{
                className:"operator",relevance:0,variants:[{match:Be},{match:`\\.(\\.|${Le})+`}]
            }],_="([0-9]_*)+",h="([0-9a-fA-F]_*)+",f={className:"number",relevance:0,
                variants:[{match:`\\b(${_})(\\.(${_}))?([eE][+-]?(${_}))?\\b`},{
                    match:`\\b0x(${h})(\\.(${h}))?([pP][+-]?(${_}))?\\b`},{match:/\b0o([0-7]_*)+\b/
                },{match:/\b0b([01]_*)+\b/}]},E=(e="")=>({className:"subst",variants:[{
                    match:b(/\\/,e,/[0\\tnr"']/)},{match:b(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]
            }),y=(e="")=>({className:"subst",match:b(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)
            }),N=(e="")=>({className:"subst",label:"interpol",begin:b(/\\/,e,/\(/),end:/\)/
            }),w=(e="")=>({begin:b(e,/"""/),end:b(/"""/,e),contains:[E(e),y(e),N(e)]
            }),v=(e="")=>({begin:b(e,/"/),end:b(/"/,e),contains:[E(e),N(e)]}),O={
                className:"string",
                variants:[w(),w("#"),w("##"),w("###"),v(),v("#"),v("##"),v("###")]
            },k=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,
                contains:[e.BACKSLASH_ESCAPE]}],x={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,
                contains:k},M=e=>{const n=b(e,/\//),t=b(/\//,e);return{begin:n,end:t,
                contains:[...k,{scope:"comment",begin:`#(?!.*${t})`,end:/$/}]}},S={
                scope:"regexp",variants:[M("###"),M("##"),M("#"),x]},A={match:b(/`/,Fe,/`/)
            },C=[A,{className:"variable",match:/\$\d+/},{className:"variable",
                match:`\\$${ze}+`}],T=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{
                    contains:[{begin:/\(/,end:/\)/,keywords:Pe,contains:[...p,f,O]}]}},{
                scope:"keyword",match:b(/@/,m(...je))},{scope:"meta",match:b(/@/,Fe)}],R={
                match:d(/\b[A-Z]/),relevance:0,contains:[{className:"type",
                    match:b(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,ze,"+")
                },{className:"type",match:Ue,relevance:0},{match:/[?!]+/,relevance:0},{
                    match:/\.\.\./,relevance:0},{match:b(/\s+&\s+/,d(Ue)),relevance:0}]},D={
                begin:/</,end:/>/,keywords:l,contains:[...a,...c,...T,u,R]};R.contains.push(D)
            ;const I={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",{
                    match:b(Fe,/\s*:/),keywords:"_|0",relevance:0
                },...a,S,...c,...g,...p,f,O,...C,...T,R]},L={begin:/</,end:/>/,
                keywords:"repeat each",contains:[...a,R]},B={begin:/\(/,end:/\)/,keywords:l,
                contains:[{begin:m(d(b(Fe,/\s*:/)),d(b(Fe,/\s+/,Fe,/\s*:/))),end:/:/,
                    relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",
                        match:Fe}]},...a,...c,...p,f,O,...T,R,I],endsParent:!0,illegal:/["']/},$={
                match:[/(func|macro)/,/\s+/,m(A.match,Fe,Be)],className:{1:"keyword",
                    3:"title.function"},contains:[L,B,n],illegal:[/\[/,/%/]},z={
                match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},
                contains:[L,B,n],illegal:/\[|%/},F={match:[/operator/,/\s+/,Be],className:{
                    1:"keyword",3:"title"}},U={begin:[/precedencegroup/,/\s+/,Ue],className:{
                    1:"keyword",3:"title"},contains:[R],keywords:[...Te,...Ce],end:/}/}
            ;for(const e of O.variants){const n=e.contains.find((e=>"interpol"===e.label))
            ;n.keywords=l;const t=[...c,...g,...p,f,O,...C];n.contains=[...t,{begin:/\(/,
                end:/\)/,contains:["self",...t]}]}return{name:"Swift",keywords:l,
                contains:[...a,$,z,{beginKeywords:"struct protocol class extension enum actor",
                    end:"\\{",excludeEnd:!0,keywords:l,contains:[e.inherit(e.TITLE_MODE,{
                        className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...c]
                },F,U,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0
                },S,...c,...g,...p,f,O,...C,...T,R,I]}},grmr_typescript:e=>{
                const n=Oe(e),t=_e,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],i={
                        beginKeywords:"namespace",end:/\{/,excludeEnd:!0,
                        contains:[n.exports.CLASS_REFERENCE]},r={beginKeywords:"interface",end:/\{/,
                        excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},
                        contains:[n.exports.CLASS_REFERENCE]},s={$pattern:_e,
                        keyword:he.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),
                        literal:fe,built_in:ve.concat(a),"variable.language":we},o={className:"meta",
                        begin:"@"+t},l=(e,n,t)=>{const a=e.contains.findIndex((e=>e.label===n))
                    ;if(-1===a)throw Error("can not find mode to replace");e.contains.splice(a,1,t)}
                ;return Object.assign(n.keywords,s),
                    n.exports.PARAMS_CONTAINS.push(o),n.contains=n.contains.concat([o,i,r]),
                    l(n,"shebang",e.SHEBANG()),l(n,"use_strict",{className:"meta",relevance:10,
                    begin:/^\s*['"]use strict['"]/
                }),n.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(n,{
                    name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n},grmr_vbnet:e=>{
                const n=e.regex,t=/\d{1,2}\/\d{1,2}\/\d{4}/,a=/\d{4}-\d{1,2}-\d{1,2}/,i=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,r=/\d{1,2}(:\d{1,2}){1,2}/,s={
                        className:"literal",variants:[{begin:n.concat(/# */,n.either(a,t),/ *#/)},{
                            begin:n.concat(/# */,r,/ *#/)},{begin:n.concat(/# */,i,/ *#/)},{
                            begin:n.concat(/# */,n.either(a,t),/ +/,n.either(i,r),/ *#/)}]
                    },o=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]
                    }),l=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]})
                ;return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,
                    classNameAliases:{label:"symbol"},keywords:{
                        keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                        built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                        type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                        literal:"true false nothing"},
                    illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{
                        className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,
                        end:/"/,illegal:/\n/,contains:[{begin:/""/}]},s,{className:"number",relevance:0,
                        variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
                        },{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{
                            begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{
                        className:"label",begin:/^\w+:/},o,l,{className:"meta",
                        begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                        end:/$/,keywords:{
                            keyword:"const disable else elseif enable end externalsource if region then"},
                        contains:[l]}]}},grmr_wasm:e=>{e.regex;const n=e.COMMENT(/\(;/,/;\)/)
            ;return n.contains.push("self"),{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,
                    keyword:["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"]
                },contains:[e.COMMENT(/;;/,/$/),n,{match:[/(?:offset|align)/,/\s*/,/=/],
                    className:{1:"keyword",3:"operator"}},{className:"variable",begin:/\$[\w_]+/},{
                    match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},{
                    begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",
                        3:"title.function"}},e.QUOTE_STRING_MODE,{match:/(i32|i64|f32|f64)(?!\.)/,
                    className:"type"},{className:"keyword",
                    match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
                },{className:"number",relevance:0,
                    match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
                }]}},grmr_xml:e=>{
                const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a={
                    className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,
                    contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
                },r=e.inherit(i,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{
                    className:"string"}),o=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={
                    endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
                        begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
                            className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{
                                begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
                    name:"HTML, XML",
                    aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
                    case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,
                        end:/>/,relevance:10,contains:[i,o,s,r,{begin:/\[/,end:/\]/,contains:[{
                                className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,r,o,s]}]}]
                    },e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,
                        relevance:10},a,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,
                            relevance:10,contains:[o]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",
                        begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{
                            end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
                        begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{
                            end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
                        className:"tag",begin:/<>|<\/>/},{className:"tag",
                        begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),
                        end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{
                        className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{
                            className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}
            },grmr_yaml:e=>{
                const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={
                        className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
                        },{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
                            variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(a,{
                        variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),r={
                        end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},s={begin:/\{/,
                        end:/\}/,contains:[r],illegal:"\\n",relevance:0},o={begin:"\\[",end:"\\]",
                        contains:[r],illegal:"\\n",relevance:0},l=[{className:"attr",variants:[{
                            begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{
                            begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",
                        relevance:10},{className:"string",
                        begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
                        begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
                        relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",
                        begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t
                    },{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
                        begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
                        relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
                        className:"number",
                        begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
                    },{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},s,o,a],c=[...l]
                ;return c.pop(),c.push(i),r.contains=c,{name:"YAML",case_insensitive:!0,
                    aliases:["yml"],contains:l}}});const He=ae;for(const e of Object.keys(Ke)){
            const n=e.replace("grmr_","").replace("_","-");He.registerLanguage(n,Ke[e])}
        return He}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);

/*! `go` grammar compiled for Highlight.js 11.9.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
        keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],
        type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
        literal:["true","false","iota","nil"],
        built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
    };return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
        contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
            variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
            className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
            },e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
            end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
                begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}}})()
;hljs.registerLanguage("go",e)})();

hljs.highlightAll();
