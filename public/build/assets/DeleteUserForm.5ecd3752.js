import{o as f,g as _,r as g,i as m,u as h,a as t,w as n,d as s,I as x,e as c,b as a,J as b,n as v}from"./app.f4e73141.js";import{_ as k}from"./InputError.e81a94cc.js";import{_ as $,a as C}from"./TextInput.9cade03a.js";import{_ as D}from"./Modal.6345275e.js";import{_ as V}from"./SecondaryButton.cb69abeb.js";const B=["type"],p={__name:"DangerButton",props:{type:{type:String,default:"submit"}},setup(d){return(o,r)=>(f(),_("button",{type:d.type,class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"},[g(o.$slots,"default")],8,B))}},U={class:"space-y-6"},A=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),S={class:"p-6"},F=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure your want to delete your account? ",-1),I=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),K={class:"mt-6"},N={class:"mt-6 flex justify-end"},J={__name:"DeleteUserForm",setup(d){const o=m(!1),r=m(null),e=h({password:""}),y=()=>{o.value=!0,x(()=>r.value.focus())},i=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>r.value.focus(),onFinish:()=>e.reset()})},l=()=>{o.value=!1,e.reset()};return(P,u)=>(f(),_("section",U,[A,t(p,{onClick:y},{default:n(()=>[c("Delete Account")]),_:1}),t(D,{show:o.value,onClose:l},{default:n(()=>[s("div",S,[F,I,s("div",K,[t($,{for:"password",value:"Password",class:"sr-only"}),t(C,{id:"password",ref_key:"passwordInput",ref:r,modelValue:a(e).password,"onUpdate:modelValue":u[0]||(u[0]=w=>a(e).password=w),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:b(i,["enter"])},null,8,["modelValue","onKeyup"]),t(k,{message:a(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",N,[t(V,{onClick:l},{default:n(()=>[c(" Cancel ")]),_:1}),t(p,{class:v(["ml-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:i},{default:n(()=>[c(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{J as default};
