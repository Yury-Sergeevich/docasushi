import{f}from"./CxYJgpPD.js";import{d as l,X as i,G as d,K as a,a8 as c}from"./CgmZwutg.js";const p=l({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=c(),{default:n}=i(),r=d(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:n,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:n,tags:r,parent:e}){var u;try{let o=t;return typeof t=="string"&&(o=(e==null?void 0:e.slots[t])||((u=e==null?void 0:e.parent)==null?void 0:u.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?f(o(),r):[o()]:n?n():a("div")}catch{return a("div")}}}),g=l({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return a(p,t)}});export{g as default};
