"use strict";(self["webpackChunkmenupage"]=self["webpackChunkmenupage"]||[]).push([[45],{2045:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var l=s(6252),a=s(3577);const n={class:"container p-0"},i={class:"row g-1"},o={class:"col-12 col-lg-8"},c={class:"bg-white rounded-bottom p-3 overflow-scroll number-rounded",style:{height:"85vh"}},r={class:"d-flex flex-column-reverse"},d=["onClick"],u={class:"card-title"},p={class:"card-subtitle mb-2"},g={key:0,class:"text-danger"},m={key:1,class:"text-muted"},h={class:"text-muted"},w={class:"list-group list-group-flush"},f={class:"m-0 fs-4"},_={class:"m-0"},v={class:"m-0 float-end"},b={class:"m-0 fs-3 float-end"},k={class:"col-12 col-lg-4 d-flex flex-column justify-content-end"},D={class:"bg-white rounded mt-1 mt-lg-0 p-3"},y={class:"fs-3 m-0"};function x(e,t,s,x,$,z){return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",i,[(0,l._)("div",o,[(0,l._)("div",c,[(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)($.main,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(["card mb-3",{"border-danger":e.paid,"text-danger":e.paid}]),key:t},[(0,l._)("div",{class:"card-body",onClick:t=>z.paidToggle(e)},[(0,l._)("h5",u,[(0,l._)("span",null,"單號："+(0,a.zw)(e.number),1)]),(0,l._)("h6",p,[e.paid?((0,l.wg)(),(0,l.iD)("span",g,"已結帳 ")):((0,l.wg)(),(0,l.iD)("span",m,"未結帳 ")),(0,l._)("span",h,(0,a.zw)(this.getTimeId(e.id)),1)]),(0,l._)("ul",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.products,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{class:"list-group-item",key:`${t}_product`},[(0,l._)("div",null,[(0,l._)("p",f,(0,a.zw)(e.title+" "+e.count+" 份"),1),(0,l._)("p",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.addToppings,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{key:t},(0,a.zw)(`+ ${e} `),1)))),128))])]),(0,l._)("p",v,"單價："+(0,a.zw)(e.price)+"元",1)])))),128))]),(0,l._)("p",b,"總計："+(0,a.zw)(e.total)+"元",1)],8,d)],2)))),128))])])]),(0,l._)("div",k,[(0,l._)("div",D,[(0,l._)("p",y," 今日營業額："+(0,a.zw)(z.Turnover)+"元 ",1)])])])])}var $={data(){return{main:[]}},computed:{Turnover:function(){let e=0;return this.main.forEach((t=>{t.paid&&(e+=t.total)})),e}},methods:{paidToggle(e){e.paid=!e.paid},getTimeId(e){let t=new Date(e);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`},getNumber(){let e="https://cors-product.herokuapp.com/https://yueh-menu.herokuapp.com/numberapi/number";fetch(e).then((e=>e.json())).then((e=>{this.main=e.data.main,console.log(this.main)})).catch((e=>{console.log("err",e)}))}},created(){this.getNumber()}},z=s(3744);const T=(0,z.Z)($,[["render",x]]);var C=T}}]);
//# sourceMappingURL=45.9a145aec.js.map