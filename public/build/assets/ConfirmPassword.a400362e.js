import{u as m,o as d,c,w as t,a as o,b as a,H as l,d as e,n as f,e as p,f as u}from"./app.38b8c228.js";import{_}from"./Button.158529ca.js";import{_ as w}from"./Guest.31d706d5.js";import{_ as b,a as h}from"./Label.18d2b126.js";import{_ as x}from"./ValidationErrors.966290d1.js";import"./Header.fe906a28.js";const V=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),v=["onSubmit"],y={class:"flex justify-end mt-4"},C=u(" Confirm "),S={__name:"ConfirmPassword",setup($){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(g,r)=>(d(),c(w,null,{default:t(()=>[o(a(l),{title:"Confirm Password"}),V,o(x,{class:"mb-4"}),e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",y,[o(_,{class:f(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[C]),_:1},8,["class","disabled"])])],40,v)]),_:1}))}};export{S as default};