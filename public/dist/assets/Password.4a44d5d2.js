import{d as i,u,f as e,bf as c,I as g,_ as p,N as d,bO as m,a2 as o,bg as h,aP as a,B as s,V as f}from"./index.53bebe35.js";import{a as $}from"./Layout.addada71.js";import{L as b}from"./index.8bb018db.js";import"./index.2426ae2e.js";import"./Markdown.88bdcbde.js";import"./api.c302eb14.js";import"./useUtil.75a0c660.js";import"./index.b1054844.js";import"./FolderTree.71a36acf.js";const x=()=>{const t=i(),{refresh:n}=$(),{back:l}=u();return e(f,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{x as default};
