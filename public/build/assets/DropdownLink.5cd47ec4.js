import{j as y,A as k,l as d,i as h,o as p,g as C,d as n,r,h as u,v as f,a as _,w as g,n as v,b as i,T as b,c as $,L as x}from"./app.f4e73141.js";const E={class:"relative"},B={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(o){const s=o,l=a=>{e.value&&a.key==="Escape"&&(e.value=!1)};y(()=>document.addEventListener("keydown",l)),k(()=>document.removeEventListener("keydown",l));const m=d(()=>({48:"w-48"})[s.width.toString()]),w=d(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),e=h(!1);return(a,t)=>(p(),C("div",E,[n("div",{onClick:t[0]||(t[0]=c=>e.value=!e.value)},[r(a.$slots,"trigger")]),u(n("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=c=>e.value=!1)},null,512),[[f,e.value]]),_(b,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:g(()=>[u(n("div",{class:v(["absolute z-50 mt-2 rounded-md shadow-lg",[i(m),i(w)]]),style:{display:"none"},onClick:t[2]||(t[2]=c=>e.value=!1)},[n("div",{class:v(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[r(a.$slots,"content")],2)],2),[[f,e.value]])]),_:3})]))}},z={__name:"DropdownLink",setup(o){return(s,l)=>(p(),$(i(x),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:g(()=>[r(s.$slots,"default")]),_:3}))}};export{z as _,B as a};