import{f as t,a2 as l,C as $,aE as h,aH as b,cl as u,m as f,aF as w,bv as j,ai as k,a8 as y,ah as A,aP as a,by as p,bH as C,d as v,e as d,P,cm as S,cn as O,co as z,aq as m,x as I,o as M,V as E}from"./index.4fe23003.js";import{b as H}from"./Folder.d47fa5b4.js";import{a as L,M as B}from"./Layout.9d199b74.js";import{c as F}from"./useUtil.2cf4934f.js";import{o as T}from"./index.9604ee51.js";import{g as D,O as V}from"./icon.071425e5.js";import"./Paginator.1df7133e.js";import"./index.ad704f2c.js";import"./api.7d6dd8da.js";import"./Markdown.cc4f6117.js";import"./index.d87b26f0.js";import"./FolderTree.15e98cae.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],W=e=>{const{isHide:o}=F();if(o(e.obj))return null;const{setPathAs:c}=L(),{show:s}=H({id:1});return t(B.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:T,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),u(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{u(e.index,r.target.checked)}})}}),t(k,{class:"icon",boxSize:"$6",get color(){return y()},get as(){return D(e.obj)},mr:"$1","on:click":r=>{e.obj.type===V.IMAGE&&(r.stopPropagation(),r.preventDefault(),A.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return p(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},ee=()=>{const e=v(),[o,c]=d(),[s,r]=d(!1);P(()=>{o()&&S(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(E,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return O()},get indeterminate(){return z()},onChange:i=>{b(i.target.checked)}})}}),t(a,m(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,m({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,m({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(I,{get each(){return M.objs},children:(i,x)=>t(W,{obj:i,get index(){return x()}})})]}})};export{ee as default};
