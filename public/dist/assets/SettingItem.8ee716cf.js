import{d as h,f as t,m as c,a$ as d,aj as i,ai as m,W as y,al as b,X as g,I as f,bR as S,T,bS as C,bT as k,bU as w,bV as x,bW as O,bX as v,bY as $,x as D,bZ as I,b_ as o,b$ as E,F,b1 as L}from"./index.53bebe35.js";import{F as u}from"./index.de7b813a.js";import{T as a}from"./item_type.be442da4.js";import{n as A}from"./index.8bb018db.js";const V=e=>{const l=h();return t(L,{get w(){var n;return(n=e.w)!=null?n:"100%"},display:"flex",flexDirection:"column",get children(){return[t(c,{get when(){return!e.hideLabel},get children(){return t(d,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[i(()=>l(`settings.${e.key}`)),t(c,{get when(){return e.flag===u.DEPRECATED},get children(){return t(m,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}})}}),t(y,{get fallback(){return t(b,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(f,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(S,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(T,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(C,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(k,{get children(){return[t(w,{get children(){return l("global.choose")}}),t(x,{}),t(O,{})]}}),t(v,{get children(){return t($,{get children(){return t(D,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(I,{value:n,get children(){return[t(o,{get children(){return l(`settings.${e.key}s.${n}`)}}),t(E,{})]}})})}})}})]}})}})]}}),t(F,{get children(){return i(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{V as I};
