import{S as Q,i as U,s as Z,e as w,t as z,a as O,b as r,c as C,d as m,f as oe,l as M,g as G,n as j,h as L,r as ie,j as ue,k as de,m as H,o as ge,p as N,q as S,u as me,v as q,w as B,x as P,y as he,z as K,A as ve,B as $,C as _e,D as we}from"./vendor.bf15f734.js";const be=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};be();const X=360;function ae(...t){return t.reduce((e,s)=>e+s,0)}function pe(...t){return ae(...t)/t.length}function ke(t,e,s,l){const n=t-s,i=e-l;let u=Math.atan2(i,n);return u=ye(u),u+=90,u>180&&(u-=360),u<0&&(u+=360),u}function ye(t){return t*180/Math.PI}function Oe(t){let e,s,l,n,i,u;return{c(){e=w("label"),s=z(t[0]),l=O(),n=w("input"),r(e,"for",t[1]),r(n,"id",t[1]),r(n,"type","range"),r(n,"step","0.01"),r(n,"min",-X/2),r(n,"max",X/2)},m(o,a){C(o,e,a),m(e,s),C(o,l,a),C(o,n,a),oe(n,t[3].direction),i||(u=[M(n,"change",t[4]),M(n,"input",t[4])],i=!0)},p(o,[a]){a&1&&G(s,o[0]),a&2&&r(e,"for",o[1]),a&2&&r(n,"id",o[1]),a&8&&oe(n,o[3].direction)},i:j,o:j,d(o){o&&L(e),o&&L(l),o&&L(n),i=!1,ie(u)}}}function Ce(t,e,s){let l,n=j,i=()=>(n(),n=ue(a,g=>s(3,l=g)),a);t.$$.on_destroy.push(()=>n());let{label:u}=e,{id:o}=e,{vector:a}=e;i();function b(){l.direction=de(this.value),a.set(l)}return t.$$set=g=>{"label"in g&&s(0,u=g.label),"id"in g&&s(1,o=g.id),"vector"in g&&i(s(2,a=g.vector))},[u,o,a,l,b]}class x extends Q{constructor(e){super();U(this,e,Ce,Oe,Z,{label:0,id:1,vector:2})}}function Le(t){let e,s,l,n,i,u;return{c(){e=H("circle"),s=O(),l=H("line"),r(e,"cx","50%"),r(e,"cy","50%"),r(e,"r",t[1]),r(e,"fill",t[3]),r(l,"x1","50%"),r(l,"y1","50%"),r(l,"x2","50%"),r(l,"y2",t[2]),r(l,"stroke",t[4]),r(l,"stroke-width","3px"),r(l,"transform",n=`rotate(${t[5].direction})`)},m(o,a){C(o,e,a),C(o,s,a),C(o,l,a),i||(u=[M(window,"mouseup",t[8]),M(window,"blur",t[8]),M(e,"mousedown",t[7]),M(e,"mousemove",t[6])],i=!0)},p(o,[a]){a&2&&r(e,"r",o[1]),a&8&&r(e,"fill",o[3]),a&4&&r(l,"y2",o[2]),a&16&&r(l,"stroke",o[4]),a&32&&n!==(n=`rotate(${o[5].direction})`)&&r(l,"transform",n)},i:j,o:j,d(o){o&&L(e),o&&L(s),o&&L(l),i=!1,ie(u)}}}function Me(t,e,s){let l,n=j,i=()=>(n(),n=ue(u,d=>s(5,l=d)),u);t.$$.on_destroy.push(()=>n());let{vector:u}=e;i();let{radius:o}=e,{length:a}=e,{background:b="white"}=e,{foreground:g="black"}=e,p=!1;function h(d){if(p){const{offsetX:v,offsetY:F}=d;ge(u,l.direction=ke(v,F,60,60),l)}}function y(){p=!0}function f(){p=!1}return t.$$set=d=>{"vector"in d&&i(s(0,u=d.vector)),"radius"in d&&s(1,o=d.radius),"length"in d&&s(2,a=d.length),"background"in d&&s(3,b=d.background),"foreground"in d&&s(4,g=d.foreground)},[u,o,a,b,g,l,h,y,f]}class ee extends Q{constructor(e){super();U(this,e,Me,Le,Z,{vector:0,radius:1,length:2,background:3,foreground:4})}}class Y{constructor(e=0,s=0){this.direction=e,this.magnitude=s}}function ce(t,e,s){const l=t.slice();return l[11]=e[s][0],l[12]=e[s][1],l}function fe(t){let e,s,l=t[11]+"",n,i,u,o=(t[12].direction%X).toFixed(2)+"",a,b,g,p=t[12].magnitude.toFixed(2)+"",h,y;return{c(){e=w("tr"),s=w("td"),n=z(l),i=O(),u=w("td"),a=z(o),b=O(),g=w("td"),h=z(p),y=O(),r(s,"class","svelte-u2w0n4"),r(u,"class","svelte-u2w0n4"),r(g,"class","svelte-u2w0n4"),r(e,"class","svelte-u2w0n4")},m(f,d){C(f,e,d),m(e,s),m(s,n),m(e,i),m(e,u),m(u,a),m(e,b),m(e,g),m(g,h),m(e,y)},p(f,d){d&30&&l!==(l=f[11]+"")&&G(n,l),d&30&&o!==(o=(f[12].direction%X).toFixed(2)+"")&&G(a,o),d&30&&p!==(p=f[12].magnitude.toFixed(2)+"")&&G(h,p)},d(f){f&&L(e)}}}function Fe(t){let e,s,l,n,i,u,o,a,b,g,p,h,y,f,d,v,F,te,I,V,ne,A,W,re,R,D,J,se;u=new x({props:{id:"wind",label:"Wind",vector:t[5]}}),a=new x({props:{id:"water",label:"Water",vector:t[6]}}),g=new x({props:{id:"rudder",label:"Rudder",vector:t[7]}}),y=new ee({props:{vector:t[5],radius:60,length:0,background:"red",foreground:"white"}}),f=new ee({props:{vector:t[6],radius:40,length:20,background:"green",foreground:"black"}}),d=new ee({props:{vector:t[7],radius:20,length:40,background:"blue",foreground:"orange"}});let T=Object.entries({wind:t[2],water:t[3],rudder:t[4],ship:t[1]}),k=[];for(let c=0;c<T.length;c+=1)k[c]=fe(ce(t,T,c));return{c(){e=w("main"),s=w("section"),l=w("h1"),l.textContent="Controls",n=O(),i=w("form"),N(u.$$.fragment),o=O(),N(a.$$.fragment),b=O(),N(g.$$.fragment),p=O(),h=H("svg"),N(y.$$.fragment),N(f.$$.fragment),N(d.$$.fragment),v=H("line"),te=O(),I=w("section"),V=w("h1"),V.textContent="Output",ne=O(),A=w("table"),W=w("thead"),W.innerHTML=`<tr class="svelte-u2w0n4"><th class="svelte-u2w0n4">index</th> 
          <th class="svelte-u2w0n4">direction</th> 
          <th class="svelte-u2w0n4">magnitude</th></tr>`,re=O(),R=w("tbody");for(let c=0;c<k.length;c+=1)k[c].c();r(l,"class","svelte-u2w0n4"),r(i,"class","svelte-u2w0n4"),r(v,"x1","50%"),r(v,"y1","50%"),r(v,"x2","50%"),r(v,"y2","0%"),r(v,"stroke","yellow"),r(v,"stroke-width","3px"),r(v,"transform",F=`rotate(${t[1].direction})`),r(v,"class","svelte-u2w0n4"),r(h,"width","120"),r(h,"height","120"),r(h,"version","1.1"),r(h,"xmlns","http://www.w3.org/2000/svg"),r(h,"class","svelte-u2w0n4"),r(s,"class","svelte-u2w0n4"),r(V,"class","svelte-u2w0n4"),r(W,"class","svelte-u2w0n4"),r(R,"class","svelte-u2w0n4"),r(A,"class","svelte-u2w0n4"),r(I,"class","svelte-u2w0n4"),r(e,"class","svelte-u2w0n4")},m(c,E){C(c,e,E),m(e,s),m(s,l),m(s,n),m(s,i),S(u,i,null),m(i,o),S(a,i,null),m(i,b),S(g,i,null),m(s,p),m(s,h),S(y,h,null),S(f,h,null),S(d,h,null),m(h,v),t[10](h),m(e,te),m(e,I),m(I,V),m(I,ne),m(I,A),m(A,W),m(A,re),m(A,R);for(let _=0;_<k.length;_+=1)k[_].m(R,null);D=!0,J||(se=M(i,"submit",me(t[9])),J=!0)},p(c,[E]){if((!D||E&2&&F!==(F=`rotate(${c[1].direction})`))&&r(v,"transform",F),E&30){T=Object.entries({wind:c[2],water:c[3],rudder:c[4],ship:c[1]});let _;for(_=0;_<T.length;_+=1){const le=ce(c,T,_);k[_]?k[_].p(le,E):(k[_]=fe(le),k[_].c(),k[_].m(R,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=T.length}},i(c){D||(q(u.$$.fragment,c),q(a.$$.fragment,c),q(g.$$.fragment,c),q(y.$$.fragment,c),q(f.$$.fragment,c),q(d.$$.fragment,c),D=!0)},o(c){B(u.$$.fragment,c),B(a.$$.fragment,c),B(g.$$.fragment,c),B(y.$$.fragment,c),B(f.$$.fragment,c),B(d.$$.fragment,c),D=!1},d(c){c&&L(e),P(u),P(a),P(g),P(y),P(f),P(d),t[10](null),he(k,c),J=!1,se()}}}function Ie(t,e,s){let l,n,i,u,o;const a=$(new Y(15,1));K(t,a,f=>s(2,n=f));const b=$(new Y(30,1));K(t,b,f=>s(3,i=f));const g=$(new Y(45,1));K(t,g,f=>s(4,u=f));const p=ve([a,b,g],([f,d,v])=>new Y(pe(f.direction,d.direction,v.direction),ae(f.magnitude,d.magnitude,v.magnitude)));K(t,p,f=>s(1,l=f));function h(f){_e.call(this,t,f)}function y(f){we[f?"unshift":"push"](()=>{o=f,s(0,o)})}return[o,l,n,i,u,a,b,g,p,h,y]}class Ae extends Q{constructor(e){super();U(this,e,Ie,Fe,Z,{})}}new Ae({target:document.getElementById("app")});
