import{_ as p,a as x}from"./DropdownLink.5cd47ec4.js";import{_ as b}from"./Modal.6345275e.js";import v from"./EditProductForm.2879c220.js";import{i as n,o as g,g as d,d as e,F as u,x as k,a as t,w as s,D as w,t as a,e as c}from"./app.f4e73141.js";import"./TextInput.9cade03a.js";import"./PrimaryButton.f4423edd.js";import"./SecondaryButton.cb69abeb.js";const f={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},_=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"py-3 px-6"},"Nombre"),e("th",{scope:"col",class:"py-3 px-6"},"Referencia"),e("th",{scope:"col",class:"py-3 px-6"},"Precio"),e("th",{scope:"col",class:"py-3 px-6"},"Peso"),e("th",{scope:"col",class:"py-3 px-6"},"Categor\xEDa"),e("th",{scope:"col",class:"py-3 px-6"},"Acciones")])],-1),m={scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},C={class:"text-orange-300"},z={class:"py-4 px-6"},B={class:"py-4 px-6"},M={class:"py-4 px-6"},N={class:"py-4 px-6"},$={class:"py-4 px-6",align:"center"},E=e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})])],-1),P=["onClick"],V=w('<nav class="flex justify-between items-center pt-4" aria-label="Table navigation"><span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span><ul class="inline-flex items-center -space-x-px"><li><a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Previous</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a></li><li><a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a></li><li><a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a></li><li><a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a></li><li><a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a></li><li><a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a></li><li><a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Next</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></li></ul></nav>',1),L={class:"p-6"},G={__name:"ProductsTable",props:["products"],setup(h){const o=n(!1),l=n({}),i=()=>{o.value=!1,l.value={}};return(y,S)=>(g(),d("section",null,[e("table",f,[_,e("tbody",null,[(g(!0),d(u,null,k(h.products.data,r=>(g(),d("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",key:r.id},[e("th",m,[e("small",C,"\xAB"+a(r.id)+"\xBB",1),c(" "+a(r.name),1)]),e("td",z,a(r.reference),1),e("td",B," $"+a(r.price),1),e("td",M,a(r.weight),1),e("td",N,a(r.category),1),e("td",$,[t(x,null,{trigger:s(()=>[E]),content:s(()=>[e("button",{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:T=>{l.value=r,o.value=!0}}," Editar ",8,P),t(p,{as:"button",href:y.route("products.destroy",r.id),method:"delete"},{default:s(()=>[c(" Eliminar ")]),_:2},1032,["href"])]),_:2},1024)])]))),128))])]),V,t(b,{show:o.value},{default:s(()=>[e("div",L,[t(v,{product:l.value,onCancelEdit:i,onProductUpdated:i},null,8,["product"])])]),_:1},8,["show"])]))}};export{G as default};
