import{d as u,u as c,f as e,bf as g,I as m,_ as p,N as d,bN as h,a2 as o,bg as f,aP as a,aj as s,B as l,V as $}from"./index.4fe23003.js";import{a as b}from"./Layout.9d199b74.js";import{L as k}from"./index.9604ee51.js";import"./index.ad704f2c.js";import"./Markdown.cc4f6117.js";import"./api.7d6dd8da.js";import"./useUtil.2cf4934f.js";import"./index.d87b26f0.js";import"./FolderTree.15e98cae.js";const B=()=>{const t=u(),{refresh:n}=b(),{back:i}=c();return e($,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(g,{get children(){return t("home.input_password")}}),e(m,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>h(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(f,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:k,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return["/*",s(()=>t("global.go_login")),"*/",s(()=>t("\u4F60\u5728\u5E72\u4EC0\u4E48"))]}})]}}),e(o,{spacing:"$2",get children(){return[e(l,{colorScheme:"neutral",onClick:i,get children(){return t("global.back")}}),e(l,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{B as default};
