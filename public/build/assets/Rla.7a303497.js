import{j as b,p as k,o as r,g as l,a as n,b as u,d as s,w as d,e as m,t as c,n as p,F as _,B as y,f as a,H as w,L as A,l as T}from"./app.ce26b702.js";import{_ as V}from"./Header.a37b31c8.js";import{a as f,_ as g}from"./Label.b096c67b.js";import{_ as v}from"./Button.c1ef7664.js";import"./vue-recaptcha.es.16924f88.js";const q={class:"layout-wrapper"},x={class:"auth-page-wrapper"},L={class:"auth-page-content"},R={class:"container"},$={class:"pt-5"},P={class:"row mt-5"},F={class:"col-lg-12"},I={class:"mt-sm-5"},C=s("span",{class:"fs-22 fw-medium"},"Test HTTP flood attack | Approach 2: Rate Limiting Algorithm ",-1),H=s("div",{class:"mt-3 fs-14"},[s("p",null," Rate Limiting helps to protect our services against abusive behaviours targeting an application layer like denial of service attacks, brute-force login attempts or transactions etc. These attacks are usually carried out through HTTP/HTTPS requests which may look like they are coming from real users, but are typically generated by bots or some kind of scripts. As a result, these attacks can easily bring down a service or application and often harder to detect it. "),s("p",null,[s("b",null,"Note:"),a(),s("span",{class:"textmuted"},"This software program is used to test HTTP flooding attack on server, which is a type of Application Layer Attack (Layer 7 attack). With the use of Rate Limiting Algorithm we are able to prevent flooding of requests on our server.")]),s("p",null,[a(" The server is set to accept only "),s("b",null,"10 requests"),a(" on our API per miniute, any extra requests sent to the server will be blocked from reaching the server. ")])],-1),N={class:"row"},S={class:"col-md-9 col-lg-6 col-xl-5"},B={class:"card mt-4"},E={class:"card-body p-md-4"},j={class:"p-2"},U={class:"mb-4"},D=a(),O=s("span",{class:"text-danger"},"*",-1),z={class:"input-group"},K={class:"input-group-text text-nowrap",id:"basic-addon3",style:{width:"15.4rem"}},M={class:"mb-4"},W=a(),X=s("span",{class:"text-danger"},"*",-1),Y={class:"position-relative auth-pass-inputgroup"},G={class:"row"},J={class:"col-md-6 mb-3"},Q=a(" Initiate "),Z={class:"col-md-6"},ss=a(" Reset Request "),ts={class:"col-md-9 col-lg-6 col-xl-7"},es={class:"card bg-dark mt-4"},os={class:"card-body p-4 overflow-auto"},as={class:"fs-12 w-100 overflow-auto",id:"code_view",style:{height:"350px"}},is={key:0},ns={class:"text-white"},rs=a(),ls=a(),cs=s("small",{class:"text-muted text-xs"},"----",-1),ds=a(),ps={class:"text-warning"},hs=a(),us={key:0,class:"text-warning"},ms={key:1},_s=s("span",{class:"text-white"},"[root ~ $]",-1),fs=a(),gs=s("span",{class:"text-muted"},"click on Initiate button to start attack",-1),vs=[_s,fs,gs],bs={data(){return{isfetching:!1,responses:[],isdoneFetching:!1,form:{domain_url:this.domain_url+"/api/",endpoint:"all-products",packets:"",recaptcha:""}}},methods:{async submit(){this.form.processing=!0;for(let i=0;i<this.form.packets;i++)await axios.post("/api/"+this.form.endpoint+"/v2",this.form).then(t=>{let o=t.data;this.responses.push(o)}).catch(t=>{if(t.response.status==404){let e={message:"Api resource not found on this server",status:404};this.responses.push(e),i=this.form.packets}let o={message:t.response.data.message,status:422,ip:"blocked"};this.responses.push(o),this.isfetching=!1,this.isdoneFetching=!0}),i+1>=this.form.packets&&(this.isdoneFetching=!0),i<=this.form.packets&&(this.isfetching=!0);this.$refs.recaptcha.reset()},onCaptchaExpired(){this.$refs.recaptcha.reset()},handleError(){},handleSuccess(i){this.form.recaptcha=i}},mounted(){document.getElementById("code_view").scrollIntoView(!1)}},Vs=Object.assign(bs,{__name:"Rla",props:["domain_url"],setup(i){return b(()=>"6Lf_vAwjAAAAAO2pfIzKw1Fjxl6_kPCKeXiEoUpY"),k(),(t,o)=>(r(),l(_,null,[n(u(w),{title:"Testing DDOS Attack"}),s("div",q,[n(V),s("div",x,[s("div",L,[s("div",R,[s("div",$,[s("div",P,[s("div",F,[s("div",I,[s("div",null,[n(u(A),{href:t.route("test.recaptcha"),class:"d-inline-block auth-logo"},{default:d(()=>[C]),_:1},8,["href"])])]),H])]),s("div",N,[s("div",S,[s("div",B,[s("div",E,[s("div",j,[s("form",{class:"needs-validation",onSubmit:o[3]||(o[3]=m((...e)=>t.submit&&t.submit(...e),["prevent"]))},[s("div",U,[n(g,{for:"url",value:"Request URL",class:"form-label fs-16 text-muted"}),D,O,s("div",z,[s("span",K,c(t.form.domain_url),1),n(f,{type:"text",class:"form-control form-control-lg",required:"",id:"url",modelValue:t.form.endpoint,"onUpdate:modelValue":o[0]||(o[0]=e=>t.form.endpoint=e),placeholder:"all-products","aria-describedby":"basic-addon3"},null,8,["modelValue"])])]),s("div",M,[n(g,{for:"packets",value:"Number of Requests/Packets to be sent",class:"form-label fs-16 text-muted"}),W,X,s("div",Y,[n(f,{id:"packets",type:"number",min:"1",class:"form-control form-control-lg",modelValue:t.form.packets,"onUpdate:modelValue":o[1]||(o[1]=e=>t.form.packets=e),required:""},null,8,["modelValue"])])]),s("div",G,[s("div",J,[n(v,{class:p(["fs-15 form-control form-control-lg",{"opacity-25":t.isfetching}]),type:"submit",disabled:t.isfetching},{default:d(()=>[Q]),_:1},8,["class","disabled"])]),s("div",Z,[n(v,{class:p(["fs-15 bg-danger form-control form-control-lg",{"opacity-25":!t.isfetching}]),type:"button",disabled:!t.isfetching,onClick:o[2]||(o[2]=m(e=>{t.responses=[],t.isfetching=!1,t.form.packets="",t.isdoneFetching=!1},["prevent"]))},{default:d(()=>[ss]),_:1},8,["class","disabled"])])])],32)])])])]),s("div",ts,[s("div",es,[s("div",os,[s("div",as,[t.responses.length>0?(r(),l("div",is,[(r(!0),l(_,null,y(t.responses,(e,h)=>(r(),l("div",{key:h,class:"mb-2"},[s("span",ns,"[root ~ #"+c(h+1)+" $]",1),rs,s("span",{class:p(e.status==200?"text-success":"text-danger")},c(e.message),3),ls,cs,ds,s("span",ps,'["Status" => '+c(e.status)+"]",1),hs,e.ip?(r(),l("span",us,'["Request IP Address" => '+c(e.ip)+"]",1)):T("",!0)]))),128))])):(r(),l("div",ms,vs))])])])])])])])])])])],64))}});export{Vs as default};