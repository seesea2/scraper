(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QYyN:function(t,c,n){"use strict";n.r(c),n.d(c,"BusStatusModule",(function(){return P}));var o=n("ofXK"),i=n("tyNb"),s=n("PCNd"),e=n("fXoL"),a=n("gPZu"),b=n("dNgK"),r=n("wHSu"),u=n("bTqV"),l=n("Qu3c"),f=n("6NWb");function m(t,c){if(1&t){const t=e.Vb();e.Ub(0,"button",2),e.cc("click",(function(){return e.sc(t),e.gc().goBack()})),e.Ac(1),e.Tb()}if(2&t){const t=e.gc();e.Cb(1),e.Bc(t.word)}}function d(t,c){if(1&t){const t=e.Vb();e.Ub(0,"button",3),e.cc("click",(function(){return e.sc(t),e.gc().goBack()})),e.Pb(1,"fa-icon",4),e.Tb()}}let h=(()=>{class t{constructor(t){this.location=t,this.faChevronLeft=r.b}ngOnInit(){}goBack(){this.location.back()}}return t.\u0275fac=function(c){return new(c||t)(e.Ob(o.g))},t.\u0275cmp=e.Ib({type:t,selectors:[["go-back-button"]],inputs:{word:"word"},decls:2,vars:2,consts:[["mat-flat-button","",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Go back","color","primary","class","px-3",3,"click",4,"ngIf"],["mat-flat-button","",3,"click"],["mat-icon-button","","matTooltip","Go back","color","primary",1,"px-3",3,"click"],["icon","chevron-left"]],template:function(t,c){1&t&&(e.zc(0,m,2,1,"button",0),e.zc(1,d,2,0,"button",1)),2&t&&(e.lc("ngIf",c.word),e.Cb(1),e.lc("ngIf",!c.word))},directives:[o.k,u.a,l.a,f.a],styles:[""]}),t})();var g=n("Xa2L"),p=n("kmnG"),v=n("+0xr");function B(t,c){1&t&&e.Pb(0,"mat-spinner",7)}function k(t,c){if(1&t&&(e.Ub(0,"div",8),e.Ub(1,"mat-error"),e.Ac(2),e.Tb(),e.Tb()),2&t){const t=e.gc();e.Cb(2),e.Bc(t.errMsg)}}function T(t,c){1&t&&(e.Ub(0,"th",21),e.Ac(1,"Service"),e.Tb())}function S(t,c){if(1&t&&(e.Ub(0,"td",22),e.Ac(1),e.Tb()),2&t){const t=c.$implicit;e.Cb(1),e.Bc(t.service)}}function C(t,c){1&t&&(e.Ub(0,"th",21),e.Ac(1,"1st-Bus"),e.Tb())}function w(t,c){if(1&t&&(e.Ub(0,"td",22),e.Ac(1),e.Tb()),2&t){const t=c.$implicit;e.Cb(1),e.Bc(t.bus1)}}function A(t,c){1&t&&(e.Ub(0,"th",21),e.Ac(1,"2nd-Bus"),e.Tb())}function U(t,c){if(1&t&&(e.Ub(0,"td",22),e.Ac(1),e.Tb()),2&t){const t=c.$implicit;e.Cb(1),e.Bc(t.bus2)}}function z(t,c){1&t&&(e.Ub(0,"th",21),e.Ac(1,"3rd-Bus"),e.Tb())}function y(t,c){if(1&t&&(e.Ub(0,"td",22),e.Ac(1),e.Tb()),2&t){const t=c.$implicit;e.Cb(1),e.Bc(t.bus3)}}function D(t,c){1&t&&(e.Ub(0,"th",21),e.Ac(1,"Load"),e.Tb())}function I(t,c){if(1&t&&(e.Ub(0,"td",22),e.Ac(1),e.Tb()),2&t){const t=c.$implicit;e.Cb(1),e.Bc(t.load)}}function x(t,c){1&t&&e.Pb(0,"tr",23)}function M(t,c){1&t&&e.Pb(0,"tr",24)}function N(t,c){if(1&t){const t=e.Vb();e.Ub(0,"button",5),e.cc("click",(function(){return e.sc(t),e.gc(2).addBusStopBookmark()})),e.Ac(1," Bookmark this Bus Stop "),e.Tb()}}function R(t,c){if(1&t&&(e.Ub(0,"div"),e.Ub(1,"h3",4),e.Ac(2),e.Tb(),e.Ub(3,"table",9),e.Sb(4,10),e.zc(5,T,2,0,"th",11),e.zc(6,S,2,1,"td",12),e.Rb(),e.Sb(7,13),e.zc(8,C,2,0,"th",11),e.zc(9,w,2,1,"td",12),e.Rb(),e.Sb(10,14),e.zc(11,A,2,0,"th",11),e.zc(12,U,2,1,"td",12),e.Rb(),e.Sb(13,15),e.zc(14,z,2,0,"th",11),e.zc(15,y,2,1,"td",12),e.Rb(),e.Sb(16,16),e.zc(17,D,2,0,"th",11),e.zc(18,I,2,1,"td",12),e.Rb(),e.zc(19,x,1,0,"tr",17),e.zc(20,M,1,0,"tr",18),e.Tb(),e.Ub(21,"div",19),e.Ac(22," Bus Load "),e.Ub(23,"ul"),e.Ub(24,"li"),e.Ac(25,"SEA: seats available"),e.Tb(),e.Ub(26,"li"),e.Ac(27,"SDA: standing available"),e.Tb(),e.Ub(28,"li"),e.Ac(29,"LSD: limited standing"),e.Tb(),e.Tb(),e.Tb(),e.Ub(30,"div",4),e.Ub(31,"div"),e.zc(32,N,2,0,"button",20),e.Tb(),e.Tb(),e.Tb()),2&t){const t=e.gc();e.Cb(2),e.Bc(t.busStop.Description),e.Cb(1),e.lc("dataSource",t.busTable),e.Cb(16),e.lc("matHeaderRowDef",t.busTableColumn),e.Cb(1),e.lc("matRowDefColumns",t.busTableColumn),e.Cb(12),e.lc("ngIf",!t.errMsg&&!t.existingBookmark)}}function L(t){if(!t||!t.EstimatedArrival)return"NA";const c=new Date(t.EstimatedArrival);if(c.valueOf()-Date.now()<0)return"Arrived";const n=(c.valueOf()-Date.now())/1e3/60;return n<1?"1 min":n.toFixed(0)+" mins"}const O=[{path:"",component:(()=>{class t{constructor(t,c,n){this.route=t,this.busSvc=c,this.snackBar=n,this.busTableColumn=["service","bus1","bus2","bus3","load"]}ngOnInit(){this.loading=!0,this.busTable=[],this.existingBookmark=!1,this.errMsg="",this.getBusArrival()}addBusStopBookmark(){this.existingBookmark=!0,this.busSvc.addBusStopBookmark(this.busStop)}getBusArrival(){this.busTable=[];let t=this.route.snapshot.paramMap.get("BusStopCode");if(t=t.trim(),!t)return this.errMsg="Invalid Bus Stop Code.",void this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:3e3});this.loading=!0,this.busSvc.getBusArrival(t).subscribe(t=>{if(this.loading=!1,t.busArrival.Services.length<=0)return this.errMsg="Bus service unavailable at the Bus Stop.",void this.snackBar.open("Bus service unavailable at the Bus Stop.","warn",{duration:3e3});this.errMsg="",t.busArrival.Services.forEach(t=>{let c={service:t.ServiceNo,bus1:L(t.NextBus),bus2:L(t.NextBus2),bus3:L(t.NextBus3),load:t.NextBus.Load};this.busTable.push(c)}),this.busStop=t.busStop,this.existingBookmark=this.busSvc.existingBusStopBookmark(this.busStop)},t=>{this.loading=!1,this.errMsg=t.message,this.snackBar.open(this.errMsg,"Error",{duration:4e3})})}}return t.\u0275fac=function(c){return new(c||t)(e.Ob(i.a),e.Ob(a.a),e.Ob(b.a))},t.\u0275cmp=e.Ib({type:t,selectors:[["bus-status"]],decls:10,vars:3,consts:[["class","ml-auto mr-auto my-4",4,"ngIf"],[1,"container"],["class","text-center my-5",4,"ngIf"],[4,"ngIf"],[1,"text-center"],["mat-flat-button","","color","primary",1,"my-3",3,"click"],["word","Back"],[1,"ml-auto","mr-auto","my-4"],[1,"text-center","my-5"],["mat-table","","width","100%",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","service"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","bus1"],["matColumnDef","bus2"],["matColumnDef","bus3"],["matColumnDef","load"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"small","mt-1"],["mat-flat-button","","color","primary","class","my-3",3,"click",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,c){1&t&&(e.Pb(0,"go-back-button"),e.zc(1,B,1,0,"mat-spinner",0),e.Ub(2,"div",1),e.zc(3,k,3,1,"div",2),e.zc(4,R,33,5,"div",3),e.Ub(5,"div",4),e.Ub(6,"div"),e.Ub(7,"button",5),e.cc("click",(function(){return c.getBusArrival()})),e.Ac(8," Refresh "),e.Tb(),e.Pb(9,"go-back-button",6),e.Tb(),e.Tb(),e.Tb()),2&t&&(e.Cb(1),e.lc("ngIf",c.loading),e.Cb(2),e.lc("ngIf",c.errMsg&&!(null!=c.busTable&&c.busTable.length)),e.Cb(1),e.lc("ngIf",null==c.busTable?null:c.busTable.length))},directives:[h,o.k,u.a,g.b,p.a,v.j,v.c,v.e,v.b,v.g,v.i,v.d,v.a,v.f,v.h],styles:[""]}),t})(),pathMatch:"full"}];let P=(()=>{class t{}return t.\u0275mod=e.Mb({type:t}),t.\u0275inj=e.Lb({factory:function(c){return new(c||t)},imports:[[o.c,s.a,i.e.forChild(O)],i.e]}),t})()}}]);