import{f as t,a8 as n,ai as m,e as b,w as h,aF as f,V as j,aE as x,aH as $,cm as s,al as w,m as p,bv as k,ag as y,ah as C,x as I,o as v,bg as M}from"./index.5df27305.js";import{b as E}from"./Folder.72153522.js";import{a as L,M as S}from"./Layout.3cd7cf63.js";import{c as F,a as O}from"./useUtil.23188733.js";import{I as z}from"./ImageWithError.89afaf72.js";import{O as A,g as H}from"./icon.66a31307.js";import"./Paginator.5ff495d9.js";import"./index.eb661ec7.js";import"./index.df4d49c2.js";import"./api.b87e2436.js";import"./Markdown.32df295c.js";import"./index.12ca0286.js";import"./FolderTree.b90add0f.js";const G=e=>{const{isHide:r}=F();if(r(e.obj)||e.obj.type!==A.IMAGE)return null;const{setPathAs:i}=L(),l=t(m,{get color(){return n()},boxSize:"$12",get as(){return H(e.obj)}}),[c,o]=b(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:g}=E({id:1}),{rawLink:d}=O();return t(S.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(j,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${n()}`}},onMouseEnter:()=>{o(!0),i(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{o(!1)},onContextMenu:a=>{x(()=>{$(!1),s(e.index,!0,!0)}),g(a,{props:e.obj})},get children(){return t(w,{w:"$full",pos:"relative",get children(){return[t(p,{get when(){return u()},get children(){return t(k,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:a=>{s(e.index,a.target.checked)}})}}),t(z,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:l,get src(){return d(e.obj)},loading:"lazy",onClick:()=>{C.emit("gallery",e.obj.name)}})]}})}})}})},R=()=>t(M,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(I,{get each(){return v.objs},children:(e,r)=>t(G,{obj:e,get index(){return r()}})})}});export{R as default};
