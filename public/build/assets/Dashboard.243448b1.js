import{A as h}from"./AuthenticatedLayout.fbe2c24f.js";import{o as e,g as o,a as i,b as u,w as r,F as n,H as g,d as s,e as l,x as c,t as a,B as _}from"./app.f4e73141.js";import"./ApplicationLogo.85261849.js";import"./DropdownLink.5cd47ec4.js";const m=s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1),v={class:"py-12"},x=s("div",{class:"max-w-2xl mx-auto sm:px-6 lg:px-8"},null,-1),w={class:"grid gap-4 grid-cols-2 max-w-7xl mx-auto lg:px-8"},b={class:"border border-gray-300 mb-5 rounded-lg shadow-lg bg-white p-4"},p={class:"text-xl mb-2"},y={style:{display:"inline"},class:"w-7 h-7",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1),k=[f],B=s("hr",{class:"mb-2"},null,-1),V={class:"div-invoice"},z={class:"w-full"},D={class:"w-full bg-gray-200 rounded-full"},H={class:"border border-gray-300 mb-5 rounded-lg shadow-lg bg-white p-4"},C={class:"text-xl mb-2"},N={style:{display:"inline"},class:"w-7 h-7",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},j=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},null,-1),q=[j],A=s("hr",{class:"mb-2"},null,-1),F={class:"div-invoice"},L={class:"w-full"},M={class:"w-full bg-gray-200 rounded-full"},J={__name:"Dashboard",props:["products_by_stock","products_by_sale"],setup(d){return(R,S)=>(e(),o(n,null,[i(u(g),{title:"Dashboard"}),i(h,null,{header:r(()=>[m]),default:r(()=>[s("div",v,[x,s("div",w,[s("div",b,[s("h1",p,[(e(),o("svg",y,k)),l(" Ranking stock de productos ")]),B,s("div",V,[s("div",z,[(e(!0),o(n,null,c(d.products_by_stock,t=>(e(),o("div",{key:t.id,class:"mb-4"},[l(a(t.name)+" ",1),s("div",D,[s("div",{class:"bg-orange-400 text-xs font-medium text-gray-800 text-center p-0.5 leading-none rounded-l-full",style:_("width:"+t.stock+"%")},[s("strong",null,a(t.stock)+"%",1)],4)])]))),128))])])]),s("div",H,[s("h1",C,[(e(),o("svg",N,q)),l(" Ranking productos m\xE1s vendidos ")]),A,s("div",F,[s("div",L,[(e(!0),o(n,null,c(d.products_by_sale,t=>(e(),o("div",{key:t.id,class:"mb-4"},[l(a(t.product_name)+" ",1),s("div",M,[s("div",{class:"bg-indigo-400 text-xs font-medium text-gray-700 text-center p-0.5 leading-none rounded-l-full",style:_("width:"+t.quantity+"%")},[s("strong",null,a(t.quantity),1)],4)])]))),128))])])])])])]),_:1})],64))}};export{J as default};
