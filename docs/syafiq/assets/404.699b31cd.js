import{r as c,o as a,c as r,a as s,t as u,u as d,b as _,w as h,d as m}from"./index.76e020ec.js";const p={class:"columns is-multiline mx-6 my-6 px-6 py-6"},f={class:"column is-full"},b=s("p",{class:"title is-3"},"Page Not Found",-1),k=s("br",null,null,-1),v={class:"subtitle"},w=s("div",{class:"column"},[s("p",{class:"subtitle"}," The page you tried to look for does not exists! ")],-1),g=s("div",{class:"column is-full"},[s("hr")],-1),x={class:"column is-half"},y={class:"column is-half"},B=m(" Home "),V={setup(C){const i=window.location.toString();async function e(){alert("Error reported!")}return(t,o)=>{const l=c("router-link");return a(),r("div",p,[s("div",f,[b,k,s("p",v,'"'+u(d(i))+'"',1),s("div",{class:"columns is-vcentered"},[w,s("div",{class:"column is-narrow"},[s("button",{class:"button is-light is-warning is-fullwidth",onClick:e}," report issue ")])])]),g,s("div",x,[s("button",{class:"button is-light is-warning is-fullwidth",onClick:o[0]||(o[0]=(...n)=>t.$router.back&&t.$router.back(...n))}," Back ")]),s("div",y,[_(l,{class:"button is-light is-success is-fullwidth",to:{name:"home"}},{default:h(()=>[B]),_:1})])])}}};export{V as default};
