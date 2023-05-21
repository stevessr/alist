import{d as L,f as t,a$ as M,W as G,al as H,X as s,I as x,bR as J,T as P,bS as W,bT as X,bU as U,bV as Y,bW as Z,bX as z,bY as K,x as S,bZ as Q,b_ as p,b$ as ee,m as $,F as te,b1 as ne,u as re,a as f,b7 as v,e as ae,bw as k,w as ie,bf as de,V as ue,cl as ge,c1 as le,c2 as ce,aj as oe,aq as O,B as se,n as _,D as me,bd as y,a0 as he}from"./index.8753a1cf.js";import{T as g}from"./item_type.be442da4.js";import{R as fe}from"./ResponsiveGrid.6209886e.js";const b=e=>{const d=L();return t(ne,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(M,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var a;return d(((a=e.full_name_path)!=null?a:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(G,{get fallback(){return t(H,{get children(){return d("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===g.String},get children(){return t(x,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===g.String?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===g.Number},get children(){return t(x,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===g.Number?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,parseInt(a.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===g.Bool},get children(){return t(J,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===g.Bool?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===g.Text},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===g.Text?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===g.Select},get children(){return t(W,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===g.Select?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a)}:void 0},get children(){return[t(X,{get children(){return[t(U,{get children(){return d("global.choose")}}),t(Y,{}),t(Z,{})]}}),t(z,{get children(){return t(K,{get children(){return t(S,{get each(){var a;return(a=e.options)==null?void 0:a.split(",")},children:a=>t(Q,{value:a,get children(){return[t(p,{get children(){var i;return d(((i=e.options_prefix)!=null?i:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${a}`)}}),t(ee,{})]}})})}})}})]}})}})]}}),t($,{get when(){return e.help},get children(){return t(te,{get children(){return d(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function I(e,d){switch(e){case g.Bool:return d?d==="true":!1;case g.Number:return d?parseInt(d):0;default:return d||""}}const $e=()=>{const e=L(),{params:d,back:a,to:i}=re(),{id:l}=d,[R,B]=f(()=>v.get("/admin/driver/list"),!0),[c,w]=ae({}),F=async()=>{const n=await B();y(n,w)},[V,A]=f(()=>v.get(`/admin/storage/get?id=${l}`),!0),[D,N]=f(()=>v.get(`/admin/driver/info?driver=${u.driver}`),!0);l?(async()=>{const n=await A();y(n,async r=>{o(r),m(JSON.parse(r.addition));const h=await N();y(h,E=>w({[u.driver]:E}))})})():F();const[u,o]=k({}),[C,m]=k({}),[j,q]=f(()=>(o("addition",JSON.stringify(C)),v.post(`/admin/storage/${l?"update":"create"}`,u))),T=ie(()=>{var r;const n=(r=c()[u.driver])==null?void 0:r.config.alert;if(console.log(n),n)return n.split("|")[0]});return t(he,{get loading(){return l?V()||D():R()},get children(){return[t(de,{mb:"$2",get children(){return e(`global.${l?"edit":"add"}`)}}),t(ue,{mb:"$2",spacing:"$2",get children(){return[t(b,{name:"driver",default:"",readonly:l!==void 0,required:!0,get type(){return g.Select},get options(){return l?u.driver:Object.keys(c()).join(",")},get value(){return u.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:n=>{for(const r of c()[n].common)o(r.name,I(r.type,r.default));m(ge(r=>{for(const h in r)delete r[h]}));for(const r of c()[n].additional)m(r.name,I(r.type,r.default));o("driver",n)}}),t($,{get when(){return T()},get children(){return t(le,{get status(){return T()},w:"$full",get children(){return[t(ce,{}),oe(()=>e(`drivers.config.${u.driver}.alert`))]}})}})]}}),t(fe,{get children(){return t($,{get when(){return c()[u.driver]},get children(){return[t(S,{get each(){return c()[u.driver].common},children:n=>t(b,O(n,{driver:"common",get value(){return u[n.name]},onChange:r=>{o(n.name,r)}}))}),t(S,{get each(){return c()[u.driver].additional},children:n=>t(b,O(n,{get driver(){return u.driver},get value(){return C[n.name]},onChange:r=>{m(n.name,r)}}))})]}})}}),t(se,{mt:"$2",get loading(){return j()},onClick:async()=>{c()[u.driver].config.need_ms&&(_.info(e("manage.add_storage-tips")),window.open(me("/@management/messenger"),"_blank"));const n=await q();y(n,()=>{_.success(e("global.save_success")),a()},(r,h)=>{n.data.id&&i(`/@management/storages/edit/${n.data.id}`)})},get children(){return e(`global.${l?"save":"add"}`)}})]}})};export{$e as default};
