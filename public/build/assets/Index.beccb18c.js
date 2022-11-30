import{i as k,u as P,C,o as r,g as c,a as _,w as h,F as m,d as e,e as u,t as l,b as x,f as S,T as I,k as M,x as y,y as B,z as $}from"./app.f4e73141.js";import{A as q}from"./AuthenticatedLayout.fbe2c24f.js";import{_ as N}from"./PrimaryButton.f4423edd.js";import{_ as V}from"./ApplicationLogo.85261849.js";import"./DropdownLink.5cd47ec4.js";const n=d=>(B("data-v-5def34c1"),d=d(),$(),d),j=n(()=>e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Ventas",-1)),F={class:"py-12"},H={class:"max-w-7xl lg:px-8 mx-auto"},T={class:"border border-gray-300 mb-5 rounded-lg shadow-lg bg-white p-4"},D={class:"text-xl mb-2"},E={style:{display:"inline"},class:"w-7 h-7",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},K=n(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),z=[K],A={class:"text-gray-400"},L={class:"float-right"},G={key:0,class:"text-sm text-gray-600"},R=n(()=>e("hr",{class:"mb-2"},null,-1)),J={class:"div-invoice"},O={class:"w-full"},Q=n(()=>e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"py-3 px-6"},"Descripci\xF3n"),e("th",{scope:"col",class:"py-3 px-6"},"Precio"),e("th",{scope:"col",class:"py-3 px-6"},"Cantidad"),e("th",{scope:"col",class:"py-3 px-6"},"Total")])],-1)),U={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},W={class:""},X={class:"w-3 h-3 text-orange-400",fill:"none",style:{display:"inline"},stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Y=n(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},null,-1)),Z=[Y],ee={align:"center"},te={align:"center"},oe={align:"center"},se={class:"max-w-7xl lg:px-6 mx-auto"},ne={class:"grid grid-cols-3 gap-4"},le={class:"block p-6 rounded-lg shadow-lg bg-white max-w-sm"},ie={class:"text-gray-900 text-xl leading-tight font-medium mb-2"},ae={class:"text-orange-400"},re=["onClick"],ce=n(()=>e("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)),de=[ce],ue=["onClick"],_e=n(()=>e("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1)),he=[_e],ge=n(()=>e("hr",null,null,-1)),pe={class:"text-gray-700 text-base mb-4"},me={class:"product_detail"},ve=n(()=>e("th",null,"Referencia",-1)),xe=n(()=>e("th",null,"Precio",-1)),ye=n(()=>e("th",null,"Peso",-1)),fe=n(()=>e("small",null,"gr.",-1)),be={class:"w-full text-right"},we={class:"text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full"},ke={__name:"Index",props:["products"],setup(d){const i=k([]),g=P({invoice:i,invoiceSerial:Math.floor(Date.now()/1e3)}),f=()=>{g.post(route("sales.store"),{preserveScroll:!0,onSuccess:()=>{i.value=[]},onError:o=>{console.log(o);const s=o.message?o.message:"Error generando la factura!";alert(s)}})},v=o=>{let s=null;return{element:i.value.find((t,p)=>(s=p,t.productId===o.id)),key:s}},b=o=>{const s=v(o);let a=s.key,t=s.element;if(o.stock<1)return null;t?(t.quantity++,i.value[a]=t):(t={productId:o.id,productName:o.name,productPrice:o.price,quantity:1},i.value.push(t)),o.stock--},w=o=>{const s=v(o);let a=s.key,t=s.element;if(a==null)return null;t.quantity--,t.quantity<1?i.value.splice(a,1):i.value[a]=t,o.stock++};return(o,s)=>{const a=C("Head");return r(),c(m,null,[_(a,{title:"Products"}),_(q,null,{header:h(()=>[j]),default:h(()=>[e("div",F,[e("div",H,[e("div",T,[e("h1",D,[(r(),c("svg",E,z)),u(" Factura "),e("small",A,"#"+l(x(g).invoiceSerial),1),e("div",L,[e("form",{onSubmit:s[0]||(s[0]=S(t=>f(),["prevent"]))},[_(N,null,{default:h(()=>[u("Confirmar")]),_:1}),_(I,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:h(()=>[x(g).recentlySuccessful?(r(),c("p",G,"Guardando...")):M("",!0)]),_:1})],32)])]),R,e("div",J,[e("table",O,[Q,e("tbody",null,[(r(!0),c(m,null,y(i.value,t=>(r(),c("tr",U,[e("td",W,[(r(),c("svg",X,Z)),u(" "+l(t.productName),1)]),e("td",ee,"$"+l(t.productPrice),1),e("td",te,l(t.quantity),1),e("td",oe,"$"+l(t.productPrice*t.quantity),1)]))),256))])])])])]),e("div",se,[e("div",ne,[(r(!0),c(m,null,y(d.products,t=>(r(),c("div",{key:t.id,class:"flex justify-center"},[e("div",le,[e("h5",ie,[e("strong",ae,l(t.name),1),u(" / "+l(t.category)+" ",1),e("button",{type:"button",onClick:p=>w(t),class:"btn-add-product inline-block px-6 py-2 border-2 border-gray-300 text-gray-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"},de,8,re),e("button",{type:"button",onClick:p=>b(t),class:"btn-add-product mr-1 inline-block px-6 py-2 border-2 border-orange-300 text-orange-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"},he,8,ue)]),ge,e("div",pe,[e("table",me,[e("tr",null,[ve,e("td",null,l(t.reference),1)]),e("tr",null,[xe,e("td",null,"$"+l(t.price),1)]),e("tr",null,[ye,e("td",null,[u(l(t.weight),1),fe])])])]),e("div",be,[e("span",we," Cant. "+l(t.stock),1)])])]))),128))])])])]),_:1})],64)}}},Be=V(ke,[["__scopeId","data-v-5def34c1"]]);export{Be as default};