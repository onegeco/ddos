import{j as p,p as _,o as h,c as f,w as n,a as t,b as l,H as u,d as s,L as d,e as b,n as g,f as o}from"./app.579930ab.js";import{_ as v}from"./Button.d212846d.js";import{_ as w}from"./Auth.22f99aee.js";import{_ as c,a as m}from"./Label.a40ec09e.js";import{_ as y}from"./ValidationErrors.38d0f11b.js";import"./vue-recaptcha.es.343f198d.js";const x={class:"row mt-5"},E={class:"col-lg-12"},V={class:"text-center mt-sm-5"},S=s("span",{class:"fs-22 fw-medium"},"Ecommerce Store",-1),$={class:"col-md-8 col-lg-6 col-xl-5"},k={class:"card mt-4"},A={class:"card-body p-4"},B=s("div",{class:"text-center mt-2"},[s("h5",{class:"text-primary"},"Sign In")],-1),C={class:"p-2 mt-4"},L={class:"mb-3"},N=o(),z=s("span",{class:"text-danger"},"*",-1),I={class:"mb-3"},U=o(),j=s("span",{class:"text-danger"},"*",-1),q={class:"position-relative auth-pass-inputgroup"},F=s("div",{class:"mb-3 text-center mx-auto"},null,-1),H={class:"mt-4"},M=o(" Sign In "),Q={class:"mt-4 text-center"},T={class:"mb-0"},Z=o("Don't have an account ? "),D=o(" Sign Up "),G=o(),O=s("span",{class:"px-2"},"\u2022",-1),P=o(" Back to home "),W={data(){return{form:{email:"",password:"",remember:!1,recaptcha:"",processing:!1}}},methods:{async submit(){this.form.processing=!0,await axios.post(route("login"),this.form).then(a=>{this.toast.success(a.data.message),this.$inertia.visit("/account/dashboard")}).catch(a=>{this.form.processing=!1,this.onCaptchaExpired(),this.toast.error(a.response.data.message)})},onCaptchaExpired(){this.$refs.recaptcha.reset()},handleError(){},handleSuccess(a){this.form.recaptcha=a}}},es=Object.assign(W,{__name:"Login",setup(a){return p(()=>"6LchQ48hAAAAAEsyZl3EQhkGFzWm-pMNSFvis-w2"),_(),(e,r)=>(h(),f(w,null,{default:n(()=>[t(l(u),{title:"Sign in"}),s("div",x,[s("div",E,[s("div",V,[s("div",null,[t(l(d),{href:e.route("home"),class:"d-inline-block auth-logo"},{default:n(()=>[S]),_:1},8,["href"])])])])]),s("div",$,[s("div",k,[s("div",A,[B,s("div",C,[s("form",{class:"needs-validation",novalidate:"",onSubmit:r[2]||(r[2]=b((...i)=>e.submit&&e.submit(...i),["prevent"]))},[t(y,{class:"mb-4"}),s("div",L,[t(c,{for:"email",value:"Email",class:"form-label"}),N,z,t(m,{id:"email",type:"email",class:"form-control form-control-lg",modelValue:e.form.email,"onUpdate:modelValue":r[0]||(r[0]=i=>e.form.email=i),required:"",placeholder:"Enter email address"},null,8,["modelValue"])]),s("div",I,[t(c,{for:"password-input",value:"Password",class:"form-label"}),U,j,s("div",q,[t(m,{id:"password-input",type:"password",class:"form-control pe-5 password-input form-control-lg",onpaste:"return false",placeholder:"Enter password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",modelValue:e.form.password,"onUpdate:modelValue":r[1]||(r[1]=i=>e.form.password=i),required:"","aria-describedby":"passwordInput",autocomplete:"new-password"},null,8,["modelValue"])])]),F,s("div",H,[t(v,{class:g(["btn btn-primary btn-lg w-100",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:n(()=>[M]),_:1},8,["class","disabled"])])],32)])])]),s("div",Q,[s("p",T,[Z,t(l(d),{href:e.route("register"),class:"fw-semibold text-primary text-decoration-underline"},{default:n(()=>[D]),_:1},8,["href"]),G,O,t(l(d),{href:e.route("home"),class:"fw-semibold text-primary text-decoration-underline"},{default:n(()=>[P]),_:1},8,["href"])])])])]),_:1}))}});export{es as default};
