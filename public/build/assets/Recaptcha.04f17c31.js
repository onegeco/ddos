import{j as k,p as w,o as c,g as d,a,b as h,d as s,w as p,e as _,t as l,n as u,F as f,B as y,f as n,H as A,L as q,l as T}from"./app.ce26b702.js";import{_ as V}from"./Header.a37b31c8.js";import{a as g,_ as v}from"./Label.b096c67b.js";import{_ as b}from"./Button.c1ef7664.js";import{R as x}from"./vue-recaptcha.es.16924f88.js";const E={class:"layout-wrapper"},R={class:"auth-page-wrapper"},$={class:"auth-page-content"},B={class:"container"},C={class:"pt-5"},F={class:"row mt-5"},S={class:"col-lg-12"},I={class:"mt-sm-5"},O=s("span",{class:"fs-22 fw-medium"},"Test HTTP flood attack | Approach 1: Google reCaptcha ",-1),j=s("div",{class:"mt-3 fs-14"},[s("p",null,"To reduce the action of BOTs on our server we have added google recaptcha challenge to requests on our server. Each request made to our server requires a valid recaptcha token that expires after every request. Since we are stimulating a BOT action on our server only the first reqeust to our server is validated, any subsequent request made to our server gets regected due to invalid recaptcha and is logged on our system for admins. This way we can prevent the action of BOTs (HTTP flooding) on our server. ")],-1),L={class:"row"},P={class:"col-md-9 col-lg-6 col-xl-5"},K={class:"card mt-4"},N={class:"card-body p-md-4"},U={class:"p-2"},H={class:"mb-4"},z=n(),D=s("span",{class:"text-danger"},"*",-1),X={class:"input-group"},Y={class:"input-group-text text-nowrap",id:"basic-addon3",style:{width:"15.4rem"}},G={class:"mb-4"},M=n(),J=s("span",{class:"text-danger"},"*",-1),Q={class:"position-relative auth-pass-inputgroup"},W={class:"mb-3 text-center mx-auto"},Z={class:"row"},ss={class:"col-md-6 mb-3"},es=n(" Initiate "),ts={class:"col-md-6"},os=n(" Reset Request "),as={class:"col-md-9 col-lg-6 col-xl-7"},is={class:"card bg-dark mt-4"},ns={class:"card-body p-4 overflow-auto"},rs={class:"fs-12 w-100 overflow-auto",id:"code_view",style:{height:"350px"}},cs={key:0},ds={class:"text-white"},ls=n(),hs=n(),ps=s("small",{class:"text-muted text-xs"},"----",-1),us=n(),ms={class:"text-warning"},_s=n(),fs={key:0,class:"text-warning"},gs={key:1},vs=s("span",{class:"text-white"},"[root ~ $]",-1),bs=n(),ks=s("span",{class:"text-muted"},"click on Initiate button to start attack",-1),ws=[vs,bs,ks],ys={data(){return{isfetching:!1,responses:[],isdoneFetching:!1,form:{domain_url:this.domain_url+"/api/",endpoint:"all-products",packets:"",recaptcha:""}}},methods:{async submit(){this.form.processing=!0;for(let i=0;i<this.form.packets;i++)await axios.post("/api/"+this.form.endpoint,this.form).then(r=>{let e=r.data;this.responses.push(e)}).catch(r=>{if(r.response.status==404){let o={message:"Api resource not found on this server",status:404};this.responses.push(o),i=this.form.packets}let e={message:r.response.data.message,status:422,ip:"blocked"};this.responses.push(e),this.isfetching=!1,this.isdoneFetching=!0}),i+1>=this.form.packets&&(this.isdoneFetching=!0),i<=this.form.packets&&(this.isfetching=!0);this.$refs.recaptcha.reset()},onCaptchaExpired(){this.$refs.recaptcha.reset()},handleError(){},handleSuccess(i){this.form.recaptcha=i}},mounted(){console.log("6Lf_vAwjAAAAAO2pfIzKw1Fjxl6_kPCKeXiEoUpY"),document.getElementById("code_view").scrollIntoView(!1)}},Es=Object.assign(ys,{__name:"Recaptcha",props:["domain_url"],setup(i){const r=k(()=>"6Lf_vAwjAAAAAO2pfIzKw1Fjxl6_kPCKeXiEoUpY");return w(),(e,o)=>(c(),d(f,null,[a(h(A),{title:"Testing DDOS Attack"}),s("div",E,[a(V),s("div",R,[s("div",$,[s("div",B,[s("div",C,[s("div",F,[s("div",S,[s("div",I,[s("div",null,[a(h(q),{href:e.route("test.recaptcha"),class:"d-inline-block auth-logo"},{default:p(()=>[O]),_:1},8,["href"])])]),j])]),s("div",L,[s("div",P,[s("div",K,[s("div",N,[s("div",U,[s("form",{class:"needs-validation",onSubmit:o[3]||(o[3]=_((...t)=>e.submit&&e.submit(...t),["prevent"]))},[s("div",H,[a(v,{for:"url",value:"Request URL",class:"form-label fs-16 text-muted"}),z,D,s("div",X,[s("span",Y,l(e.form.domain_url),1),a(g,{type:"text",class:"form-control form-control-lg",required:"",id:"url",modelValue:e.form.endpoint,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.endpoint=t),placeholder:"all-products","aria-describedby":"basic-addon3"},null,8,["modelValue"])])]),s("div",G,[a(v,{for:"packets",value:"Number of Requests/Packets to be sent",class:"form-label fs-16 text-muted"}),M,J,s("div",Q,[a(g,{id:"packets",type:"number",min:"1",class:"form-control form-control-lg",modelValue:e.form.packets,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.packets=t),required:""},null,8,["modelValue"])])]),s("div",W,[a(h(x),{ref:"recaptcha",sitekey:h(r),loadRecaptchaScript:!0,onVerify:e.handleSuccess,onError:e.handleError},null,8,["sitekey","onVerify","onError"])]),s("div",Z,[s("div",ss,[a(b,{class:u(["fs-15 form-control form-control-lg",{"opacity-25":e.isfetching}]),type:"submit",disabled:e.isfetching},{default:p(()=>[es]),_:1},8,["class","disabled"])]),s("div",ts,[a(b,{class:u(["fs-15 bg-danger form-control form-control-lg",{"opacity-25":!e.isfetching}]),type:"button",disabled:!e.isfetching,onClick:o[2]||(o[2]=_(t=>{e.responses=[],e.isfetching=!1,e.form.packets="",e.isdoneFetching=!1},["prevent"]))},{default:p(()=>[os]),_:1},8,["class","disabled"])])])],32)])])])]),s("div",as,[s("div",is,[s("div",ns,[s("div",rs,[e.responses.length>0?(c(),d("div",cs,[(c(!0),d(f,null,y(e.responses,(t,m)=>(c(),d("div",{key:m,class:"mb-2"},[s("span",ds,"[root ~ #"+l(m+1)+" $]",1),ls,s("span",{class:u(t.status==200?"text-success":"text-danger")},l(t.message),3),hs,ps,us,s("span",ms,'["Status" => '+l(t.status)+"]",1),_s,t.ip?(c(),d("span",fs,'["Request IP Address" => '+l(t.ip)+"]",1)):T("",!0)]))),128))])):(c(),d("div",gs,ws))])])])])])])])])])])],64))}});export{Es as default};
