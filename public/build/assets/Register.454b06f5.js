import{j as f,p as u,o as _,c as h,w as n,a as o,b as i,H as w,d as s,L as m,e as b,n as v,f as t}from"./app.76219c11.js";import{_ as g}from"./Button.45fe2ab4.js";import{_ as y}from"./Auth.867066a5.js";import{_ as d,a as c}from"./Label.0a5e96e0.js";import{_ as V}from"./ValidationErrors.e65038ed.js";import{R as E}from"./vue-recaptcha.es.9de7a7cc.js";const A={class:"row"},k={class:"col-lg-12"},$={class:"text-center mt-sm-5"},x=s("span",{class:"fs-22 fw-medium"},"Ecommerce Store",-1),C={class:"col-md-8 col-lg-6 col-xl-5"},S={class:"card mt-4"},q={class:"card-body p-4"},N=s("div",{class:"text-center mt-2"},[s("h5",{class:"text-primary"},"Create New Account")],-1),U={class:"p-2 mt-4"},R={class:"mb-3"},j=t(),B=s("span",{class:"text-danger"},"*",-1),z={class:"mb-3"},K=t(),L=s("span",{class:"text-danger"},"*",-1),T={class:"mb-3"},F=t(),G=s("span",{class:"text-danger"},"*",-1),H={class:"position-relative auth-pass-inputgroup"},I={class:"mb-3"},O=t(),P=s("span",{class:"text-danger"},"*",-1),Y={class:"mb-3 text-center mx-auto"},Z={class:"mt-4"},J=t(" Sign Up "),M={class:"mt-4 text-center"},Q={class:"mb-0"},W=t("Already have an account ? "),D=t(" Signin "),X=t(),ss=s("span",{class:"px-2"},"\u2022",-1),es=t(),os=t(" Back to home "),as={data(){return{form:{name:"",email:"",password:"",password_confirmation:"",terms:!1,recaptcha:""}}},methods:{async submit(){this.form.processing=!0,this.$refs.recaptcha.reset(),await axios.post(route("register"),this.form).then(l=>{this.toast.success(l.data.message),this.$inertia.visit("/account/dashboard")}).catch(l=>{this.form.processing=!1,this.onCaptchaExpired()})},onCaptchaExpired(){this.$refs.recaptcha.reset()},handleError(){},async handleSuccess(l){this.form.recaptcha=l}}},cs=Object.assign(as,{__name:"Register",setup(l){const p=f(()=>"6LcfKw0jAAAAAGNrTEUGAYq-qWjcO9motYKJQF1k");return u(),(e,a)=>(_(),h(y,null,{default:n(()=>[o(i(w),{title:"Register"}),s("div",A,[s("div",k,[s("div",$,[s("div",null,[o(i(m),{href:e.route("home"),class:"d-inline-block auth-logo"},{default:n(()=>[x]),_:1},8,["href"])])])])]),s("div",C,[s("div",S,[s("div",q,[N,s("div",U,[s("form",{class:"needs-validation",novalidate:"",onSubmit:a[4]||(a[4]=b((...r)=>e.submit&&e.submit(...r),["prevent"]))},[o(V,{class:"mb-4"}),s("div",R,[o(d,{for:"name",value:"Full Name",class:"form-label"}),j,B,o(c,{id:"name",type:"text",class:"form-control form-control-lg",modelValue:e.form.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e.form.name=r),required:"",placeholder:"Enter full name"},null,8,["modelValue"])]),s("div",z,[o(d,{for:"email",value:"Email",class:"form-label"}),K,L,o(c,{id:"email",type:"email",class:"form-control form-control-lg",modelValue:e.form.email,"onUpdate:modelValue":a[1]||(a[1]=r=>e.form.email=r),required:"",placeholder:"Enter email address"},null,8,["modelValue"])]),s("div",T,[o(d,{for:"password-input",value:"Password",class:"form-label"}),F,G,s("div",H,[o(c,{id:"password-input",type:"password",class:"form-control pe-5 password-input form-control-lg",onpaste:"return false",placeholder:"Enter password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",modelValue:e.form.password,"onUpdate:modelValue":a[2]||(a[2]=r=>e.form.password=r),required:"","aria-describedby":"passwordInput",autocomplete:"new-password"},null,8,["modelValue"])])]),s("div",I,[o(d,{for:"password_confirmation",value:"Confirm Password",class:"form-label"}),O,P,o(c,{id:"password_confirmation",type:"password",class:"form-control pe-5 password-input form-control-lg",onpaste:"return false",placeholder:"Confirm password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",modelValue:e.form.password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>e.form.password_confirmation=r),required:"","aria-describedby":"passwordInput",autocomplete:"new-password"},null,8,["modelValue"])]),s("div",Y,[o(i(E),{ref:"recaptcha",sitekey:i(p),loadRecaptchaScript:!0,onVerify:e.handleSuccess,onError:e.handleError},null,8,["sitekey","onVerify","onError"])]),s("div",Z,[o(g,{class:v(["btn btn-primary btn-lg w-100",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:n(()=>[J]),_:1},8,["class","disabled"])])],32)])])]),s("div",M,[s("p",Q,[W,o(i(m),{href:e.route("login"),class:"fw-semibold text-primary text-decoration-underline"},{default:n(()=>[D]),_:1},8,["href"]),X,ss,es,o(i(m),{href:e.route("home"),class:"fw-semibold text-primary text-decoration-underline"},{default:n(()=>[os]),_:1},8,["href"])])])])]),_:1}))}});export{cs as default};