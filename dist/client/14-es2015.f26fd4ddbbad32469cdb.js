(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{bvQO:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var a=u("9AJC"),o=u("fNgX"),r=u("yWMr"),b=u("t68o"),i=u("zbXB"),s=u("NcP4"),c=u("xYTU"),d=u("pMnS"),m=u("NvT6"),p=u("W5yJ"),h=u("/HVE"),f=u("SVse"),C=u("omvX"),g=u("HsOI"),k=u("8rEH"),S=u("zQui"),B=u("IP0z"),v=u("Xd0L"),y=u("cUpR"),E=t.qb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function w(l){return t.Nb(0,[t.Jb(402653184,1,{_rowOutlet:0}),t.Jb(402653184,2,{_headerRowOutlet:0}),t.Jb(402653184,3,{_footerRowOutlet:0}),t.Db(null,0),(l()(),t.sb(4,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(5,16384,[[2,4]],0,S.t,[t.O,t.k],null,null),(l()(),t.sb(6,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(7,16384,[[1,4]],0,S.r,[t.O,t.k],null,null),(l()(),t.sb(8,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(9,16384,[[3,4]],0,S.s,[t.O,t.k],null,null)],null,null)}var _=t.qb({encapsulation:2,styles:[],data:{}});function N(l){return t.Nb(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,S.c,[t.O],null,null)],null,null)}var x=t.qb({encapsulation:2,styles:[],data:{}});function L(l){return t.Nb(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,S.c,[t.O],null,null)],null,null)}var I=u("bujt"),O=u("Fwaw"),A=u("5GAg"),J=u("vRYr"),T=u("pHhM"),D=u("2Vo4"),F=(u("JQBr"),u("jmvC")),j=u("IheW");const R="InSgBusStopBookmark";let M=(()=>{class l{constructor(l,n){this.cookieService=l,this.httpClient=n,this.busStopBookmarkSubject=new D.a([]),this.busStopBookmark$=this.busStopBookmarkSubject.asObservable(),this.busStopBookmark$.subscribe(l=>{this.busStopBookmark=l}),this.getCookieBusStopBookmark()}getCookieBusStopBookmark(){let l=this.cookieService.get(R);l&&this.busStopBookmarkSubject.next(JSON.parse(l))}getBusStopInfo(l){return this.httpClient.get(`/api/lta/bus/busStop/${l}`)}getBusArrival(l){return this.httpClient.get(`/api/lta/bus/busArrival/${l}`)}addBusStopBookmark(l){this.existingBookmark(l)||(this.busStopBookmark.push(l),this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set(R,JSON.stringify(this.busStopBookmark),3650,"/"))}deleteBusStopBookmark(l){for(let n=0;n<this.busStopBookmark.length;n++)if(this.busStopBookmark[n].BusStopCode===l.BusStopCode){this.busStopBookmark.splice(n,1);break}this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set(R,JSON.stringify(this.busStopBookmark),3650,"/")}existingBookmark(l){for(let n=0;n<this.busStopBookmark.length;n++)if(l.BusStopCode===this.busStopBookmark[n].BusStopCode)return!0;return!1}getNearbyBusStops(l){return this.httpClient.get("/api/lta/bus/nearbyBusStops?"+`latitude=${l.latitude}`+`&longitude=${l.longitude}`)}}return l.ngInjectableDef=t.Rb({factory:function(){return new l(t.Sb(F.a),t.Sb(j.c))},token:l,providedIn:"root"}),l})();class q{constructor(l,n,u){this.route=l,this.busSvc=n,this.snackBar=u,this.busTableColumn=["service","bus1","bus2","bus3","load"]}ngOnInit(){this.loading=!0,this.busStopCode="",this.busTable=[],this.bExistingBookmark=!1,this.busStopCode=this.route.snapshot.paramMap.get("BusStopCode"),this.err_msg="",this.getBusArrival()}addBusStopBookmark(){this.bExistingBookmark=!0,this.busSvc.addBusStopBookmark(this.busStopInfo)}getBusArrival(){if(this.busTable=[],this.busStopCode=this.busStopCode.trim(),!this.busStopCode)return this.err_msg="Invalid Bus Stop Code.",void this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:3e3});this.busSvc.getBusArrival(this.busStopCode).subscribe(l=>{if(this.loading=!1,l.busArrival.Services.length<=0)return this.err_msg="Bus service unavailable at the Bus Stop.",void this.snackBar.open("Bus service unavailable at the Bus Stop.","warn",{duration:3e3});this.err_msg="",l.busArrival.Services.forEach(l=>{let n={service:l.ServiceNo,bus1:$(l.NextBus),bus2:$(l.NextBus2),bus3:$(l.NextBus3),load:l.NextBus.Load};this.busTable.push(n)}),this.busStopInfo=l.busStopInfo,this.bExistingBookmark=this.busSvc.existingBookmark(this.busStopInfo)},l=>{this.loading=!1,this.err_msg=l,this.snackBar.open(l,"Error",{duration:4e3})})}}function $(l){if(!l||!l.EstimatedArrival)return"NA";const n=new Date(l.EstimatedArrival);if(n.valueOf()-Date.now()<0)return"Arrived";const u=(n.valueOf()-Date.now())/1e3/60;return u<1?"1 min":u.toFixed(0)+" mins"}var P=u("iInd"),U=u("dFDH"),z=t.qb({encapsulation:0,styles:[[""]],data:{}});function H(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"mat-spinner",[["class","ml-auto mr-auto mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,m.b,m.a)),t.rb(1,114688,null,0,p.d,[t.k,h.a,[2,f.d],[2,C.a],p.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t.Eb(n,1)._noopAnimations,t.Eb(n,1).diameter,t.Eb(n,1).diameter)}))}function V(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,3,"div",[["class","text-center my-5"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.rb(2,16384,null,0,g.b,[],null,null),(l()(),t.Lb(3,null,["",""]))],null,(function(l,n){var u=n.component;l(n,1,0,t.Eb(n,2).id),l(n,3,0,u.err_msg)}))}function K(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["Service"]))],null,null)}function Q(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.service)}))}function W(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["1st-Bus"]))],null,null)}function X(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus1)}))}function G(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["2nd-Bus"]))],null,null)}function Z(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus2)}))}function Y(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["3rd-Bus"]))],null,null)}function ll(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus3)}))}function nl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["Load"]))],null,null)}function ul(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.load)}))}function tl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,N,_)),t.Ib(6144,null,S.k,null,[k.g]),t.rb(2,49152,null,0,k.g,[],null,null)],null,null)}function el(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,L,x)),t.Ib(6144,null,S.m,null,[k.i]),t.rb(2,49152,null,0,k.i,[],null,null)],null,null)}function al(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addBusStopBookmark()&&t),t}),I.b,I.a)),t.rb(1,180224,null,0,O.b,[t.k,A.h,[2,C.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Bookmark this Bus Stop "]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){l(n,0,0,t.Eb(n,1).disabled||null,"NoopAnimations"===t.Eb(n,1)._animationMode)}))}function ol(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,97,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.sb(3,0,null,null,77,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""],["width","100%"]],null,null,null,w,E)),t.Ib(6144,null,S.o,null,[k.k]),t.rb(5,2342912,null,4,k.k,[t.r,t.h,t.k,[8,null],[2,B.b],f.d,h.a],{dataSource:[0,"dataSource"]},null),t.Jb(603979776,1,{_contentColumnDefs:1}),t.Jb(603979776,2,{_contentRowDefs:1}),t.Jb(603979776,3,{_contentHeaderRowDefs:1}),t.Jb(603979776,4,{_contentFooterRowDefs:1}),(l()(),t.sb(10,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(12,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,5,{cell:0}),t.Jb(603979776,6,{headerCell:0}),t.Jb(603979776,7,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,K)),t.rb(18,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[6,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,Q)),t.rb(21,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[5,4]],S.b,null,[k.b]),(l()(),t.sb(23,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(25,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,8,{cell:0}),t.Jb(603979776,9,{headerCell:0}),t.Jb(603979776,10,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,W)),t.rb(31,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[9,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,X)),t.rb(34,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[8,4]],S.b,null,[k.b]),(l()(),t.sb(36,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(38,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,11,{cell:0}),t.Jb(603979776,12,{headerCell:0}),t.Jb(603979776,13,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,G)),t.rb(44,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[12,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,Z)),t.rb(47,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[11,4]],S.b,null,[k.b]),(l()(),t.sb(49,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(51,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,14,{cell:0}),t.Jb(603979776,15,{headerCell:0}),t.Jb(603979776,16,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,Y)),t.rb(57,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[15,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,ll)),t.rb(60,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[14,4]],S.b,null,[k.b]),(l()(),t.sb(62,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(64,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,17,{cell:0}),t.Jb(603979776,18,{headerCell:0}),t.Jb(603979776,19,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,nl)),t.rb(70,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[18,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,ul)),t.rb(73,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[17,4]],S.b,null,[k.b]),(l()(),t.hb(0,null,null,2,null,tl)),t.rb(76,540672,null,0,k.h,[t.L,t.r],{columns:[0,"columns"]},null),t.Ib(2048,[[3,4]],S.l,null,[k.h]),(l()(),t.hb(0,null,null,2,null,el)),t.rb(79,540672,null,0,k.j,[t.L,t.r],{columns:[0,"columns"]},null),t.Ib(2048,[[2,4]],S.n,null,[k.j]),(l()(),t.sb(81,0,null,null,8,"div",[["class","small mt-1"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Bus Load "])),(l()(),t.sb(83,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t.sb(84,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SEA: seats available"])),(l()(),t.sb(86,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SDA: standing available"])),(l()(),t.sb(88,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["LSD: limited standing"])),(l()(),t.sb(90,0,null,null,7,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.sb(91,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,al)),t.rb(93,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(94,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(95,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getBusArrival()&&t),t}),I.b,I.a)),t.rb(96,180224,null,0,O.b,[t.k,A.h,[2,C.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Refresh "]))],(function(l,n){var u=n.component;l(n,5,0,u.busTable),l(n,12,0,"service"),l(n,25,0,"bus1"),l(n,38,0,"bus2"),l(n,51,0,"bus3"),l(n,64,0,"load"),l(n,76,0,u.busTableColumn),l(n,79,0,u.busTableColumn),l(n,93,0,!u.bExistingBookmark),l(n,96,0,"primary")}),(function(l,n){l(n,2,0,n.component.busStopInfo.Description),l(n,95,0,t.Eb(n,96).disabled||null,"NoopAnimations"===t.Eb(n,96)._animationMode)}))}function rl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-go-back-button",[],null,null,null,J.b,J.a)),t.rb(1,114688,null,0,T.a,[f.h],null,null),(l()(),t.hb(16777216,null,null,1,null,H)),t.rb(3,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(4,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,V)),t.rb(6,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,ol)),t.rb(8,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0),l(n,3,0,u.loading),l(n,6,0,u.err_msg&&!(null!=u.busTable&&u.busTable.length)),l(n,8,0,null==u.busTable?null:u.busTable.length)}),null)}function bl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-status",[],null,null,null,rl,z)),t.rb(1,114688,null,0,q,[P.a,M,U.b],null,null)],(function(l,n){l(n,1,0)}),null)}var il=t.ob("app-status",q,bl,{},{},[]),sl=u("6UMx"),cl=u("Q+lL"),dl=u("Mz6y"),ml=u("QQfA"),pl=u("hOhj"),hl=u("s7LF"),fl=u("dJrM"),Cl=u("ZwOa"),gl=u("oapL");class kl{constructor(l,n,u){this.busArrivalService=l,this.snackBar=n,this.router=u,this.busTableColumn=["service","bus1","bus2","bus3","load"],this.bSpinnerShowNearbyBusStops=!1,this.busStopBookmark=[],l.busStopBookmark$.subscribe(l=>{this.busStopBookmark=l})}ngOnInit(){this.busTable=[],this.nearbyBusStops=[],this.busStopInfo=void 0,this.bExistingBookmark=!1,this.bSpinnerShowNearbyBusStops=!1,this.currentBusStopCode=""}addBusStopBookmark(){this.bExistingBookmark=!0,this.busArrivalService.addBusStopBookmark(this.busStopInfo)}deleteBusStopBookmark(l){this.bExistingBookmark=!1,this.busArrivalService.deleteBusStopBookmark(l)}submit(l){this.nearbyBusStops=[],(l=l.trim())?this.router.navigate(["/bus",l]):this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:2e3})}getNearbyBusStops(l){this.busArrivalService.getNearbyBusStops(l).subscribe(l=>{this.nearbyBusStops=l,this.bSpinnerShowNearbyBusStops=!1},l=>{this.nearbyBusStops=[],this.bSpinnerShowNearbyBusStops=!1,this.snackBar.open("No Nearby Bus Stop.","warn",{duration:2e3})})}toggleNearbyBusStops(){if(this.nearbyBusStops.length)return this.nearbyBusStops=[];this.bSpinnerShowNearbyBusStops=!0,navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{l&&l.coords?this.getNearbyBusStops(l.coords):this.bSpinnerShowNearbyBusStops=!1}):(this.bSpinnerShowNearbyBusStops=!1,this.snackBar.open("Please enable the location access.","warn",{duration:2e3}))}}var Sl=t.qb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}"]],data:{}});function Bl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,9,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,sl.e,sl.a)),t.rb(1,704512,null,0,cl.a,[t.k],null,null),(l()(),t.sb(2,0,null,0,7,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.rb(4,671744,null,0,P.m,[P.k,P.a,f.i],{routerLink:[0,"routerLink"]},null),t.Fb(5,2),(l()(),t.Lb(6,null,[" (",") "," "])),(l()(),t.sb(7,16777216,null,null,2,"button",[["matTooltip","delete"]],null,[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,u){var e=!0,a=l.component;return"longpress"===n&&(e=!1!==t.Eb(l,8).show()&&e),"keydown"===n&&(e=!1!==t.Eb(l,8)._handleKeydown(u)&&e),"touchend"===n&&(e=!1!==t.Eb(l,8)._handleTouchend()&&e),"click"===n&&(e=!1!==a.deleteBusStopBookmark(l.context.$implicit)&&e),e}),null,null)),t.rb(8,212992,null,0,dl.d,[ml.a,t.k,pl.b,t.O,t.y,h.a,A.c,A.h,dl.b,[2,B.b],[2,dl.a],[2,y.f]],{message:[0,"message"]},null),(l()(),t.Lb(-1,null,["x"]))],(function(l,n){var u=l(n,5,0,"./",n.context.$implicit.BusStopCode);l(n,4,0,u),l(n,8,0,"delete")}),(function(l,n){l(n,3,0,t.Eb(n,4).target,t.Eb(n,4).href),l(n,6,0,n.context.$implicit.BusStopCode,n.context.$implicit.Description)}))}function vl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,4,"div",[["class","pt-3 text-center"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bus Stop Bookmark"])),(l()(),t.hb(16777216,null,null,1,null,Bl)),t.rb(4,278528,null,0,f.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.busStopBookmark)}),null)}function yl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"mat-spinner",[["class","ml-auto mr-auto mt-3 mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,m.b,m.a)),t.rb(1,114688,null,0,p.d,[t.k,h.a,[2,f.d],[2,C.a],p.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t.Eb(n,1)._noopAnimations,t.Eb(n,1).diameter,t.Eb(n,1).diameter)}))}function El(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,6,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,sl.e,sl.a)),t.rb(1,704512,null,0,cl.a,[t.k],null,null),(l()(),t.sb(2,0,null,0,4,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,3,"button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,4).onClick()&&e),e}),null,null)),t.rb(4,16384,null,0,P.l,[P.k,P.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Fb(5,2),(l()(),t.Lb(6,null,[" "," @ "," "]))],(function(l,n){var u=l(n,5,0,"./",n.context.$implicit.BusStopCode);l(n,4,0,u)}),(function(l,n){l(n,6,0,n.context.$implicit.Description,n.context.$implicit.RoadName)}))}function wl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,El)),t.rb(2,278528,null,0,f.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.nearbyBusStops)}),null)}function _l(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,45,"div",[["class","container py-4"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,4,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bus Arrival Time"])),(l()(),t.sb(4,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Get bus arrival time by bus stop code."])),(l()(),t.sb(6,0,null,null,25,"form",[["class","pt-4 text-center"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,a=l.component;return"submit"===n&&(e=!1!==t.Eb(l,8).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Eb(l,8).onReset()&&e),"ngSubmit"===n&&(e=!1!==a.submit(t.Eb(l,25).value)&&e),e}),null,null)),t.rb(7,16384,null,0,hl.A,[],null,null),t.rb(8,4210688,null,0,hl.p,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Ib(2048,null,hl.c,null,[hl.p]),t.rb(10,16384,null,0,hl.o,[[4,hl.c]],null,null),(l()(),t.sb(11,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,fl.b,fl.a)),t.rb(12,7520256,null,9,g.c,[t.k,t.h,[2,v.j],[2,B.b],[2,g.a],h.a,t.y,[2,C.a]],null,null),t.Jb(603979776,1,{_controlNonStatic:0}),t.Jb(335544320,2,{_controlStatic:0}),t.Jb(603979776,3,{_labelChildNonStatic:0}),t.Jb(335544320,4,{_labelChildStatic:0}),t.Jb(603979776,5,{_placeholderChild:0}),t.Jb(603979776,6,{_errorChildren:1}),t.Jb(603979776,7,{_hintChildren:1}),t.Jb(603979776,8,{_prefixChildren:1}),t.Jb(603979776,9,{_suffixChildren:1}),(l()(),t.sb(22,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.rb(23,16384,[[3,4],[4,4]],0,g.g,[],null,null),(l()(),t.Lb(-1,null,["Bus Stop Code"])),(l()(),t.sb(25,0,[["busStopCode",1]],1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"]],(function(l,n,u){var e=!0;return"blur"===n&&(e=!1!==t.Eb(l,26)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==t.Eb(l,26)._focusChanged(!0)&&e),"input"===n&&(e=!1!==t.Eb(l,26)._onInput()&&e),e}),null,null)),t.rb(26,999424,null,0,Cl.a,[t.k,h.a,[8,null],[2,hl.p],[2,hl.i],v.d,[8,null],gl.a,t.y],{type:[0,"type"]},null),t.Ib(2048,[[1,4],[2,4]],g.d,null,[Cl.a]),(l()(),t.sb(28,0,null,4,3,"button",[["color","primary"],["mat-flat-button",""],["matSuffix",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,I.b,I.a)),t.rb(29,180224,null,0,O.b,[t.k,A.h,[2,C.a]],{color:[0,"color"]},null),t.rb(30,16384,[[9,4]],0,g.h,[],null,null),(l()(),t.Lb(-1,0,[" Get "])),(l()(),t.hb(16777216,null,null,1,null,vl)),t.rb(33,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(34,0,null,null,7,"div",[["class","text-center pt-3"]],null,null,null,null,null)),(l()(),t.sb(35,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleNearbyBusStops()&&t),t}),I.b,I.a)),t.rb(36,180224,null,0,O.b,[t.k,A.h,[2,C.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Toggle Nearby Bus Stops "])),(l()(),t.hb(16777216,null,null,1,null,yl)),t.rb(39,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,wl)),t.rb(41,16384,null,0,f.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(42,0,null,null,3,"div",[["class","mt-4 small text-center"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Powered by "])),(l()(),t.sb(44,0,null,null,1,"a",[["href","https://data.gov.sg"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Data.gov.sg"]))],(function(l,n){var u=n.component;l(n,26,0,"text"),l(n,29,0,"primary"),l(n,33,0,u.busStopBookmark.length),l(n,36,0,"primary"),l(n,39,0,u.bSpinnerShowNearbyBusStops),l(n,41,0,u.nearbyBusStops.length)}),(function(l,n){l(n,6,0,t.Eb(n,10).ngClassUntouched,t.Eb(n,10).ngClassTouched,t.Eb(n,10).ngClassPristine,t.Eb(n,10).ngClassDirty,t.Eb(n,10).ngClassValid,t.Eb(n,10).ngClassInvalid,t.Eb(n,10).ngClassPending),l(n,11,1,["standard"==t.Eb(n,12).appearance,"fill"==t.Eb(n,12).appearance,"outline"==t.Eb(n,12).appearance,"legacy"==t.Eb(n,12).appearance,t.Eb(n,12)._control.errorState,t.Eb(n,12)._canLabelFloat,t.Eb(n,12)._shouldLabelFloat(),t.Eb(n,12)._hasFloatingLabel(),t.Eb(n,12)._hideControlPlaceholder(),t.Eb(n,12)._control.disabled,t.Eb(n,12)._control.autofilled,t.Eb(n,12)._control.focused,"accent"==t.Eb(n,12).color,"warn"==t.Eb(n,12).color,t.Eb(n,12)._shouldForward("untouched"),t.Eb(n,12)._shouldForward("touched"),t.Eb(n,12)._shouldForward("pristine"),t.Eb(n,12)._shouldForward("dirty"),t.Eb(n,12)._shouldForward("valid"),t.Eb(n,12)._shouldForward("invalid"),t.Eb(n,12)._shouldForward("pending"),!t.Eb(n,12)._animationsEnabled]),l(n,25,0,t.Eb(n,26)._isServer,t.Eb(n,26).id,t.Eb(n,26).placeholder,t.Eb(n,26).disabled,t.Eb(n,26).required,t.Eb(n,26).readonly&&!t.Eb(n,26)._isNativeSelect||null,t.Eb(n,26)._ariaDescribedby||null,t.Eb(n,26).errorState,t.Eb(n,26).required.toString()),l(n,28,0,t.Eb(n,29).disabled||null,"NoopAnimations"===t.Eb(n,29)._animationMode),l(n,35,0,t.Eb(n,36).disabled||null,"NoopAnimations"===t.Eb(n,36)._animationMode)}))}function Nl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"bus-arrival-home",[],null,null,null,_l,Sl)),t.rb(1,114688,null,0,kl,[M,U.b,P.k],null,null)],(function(l,n){l(n,1,0)}),null)}var xl=t.ob("bus-arrival-home",kl,Nl,{},{},[]),Ll=u("G0yt"),Il=u("DkaU"),Ol=u("/Co4"),Al=u("POq0"),Jl=u("qJ5m"),Tl=u("s6ns"),Dl=u("821u"),Fl=u("gavF"),jl=u("JjoW"),Rl=u("OIZN"),Ml=u("7kcP"),ql=u("/q54"),$l=u("QRvN"),Pl=u("Nv++"),Ul=u("zMNK"),zl=u("KPQW"),Hl=u("lwm9"),Vl=u("mkRZ"),Kl=u("igqZ"),Ql=u("r0V8"),Wl=u("kNGD"),Xl=u("qJ50"),Gl=u("Gi4r"),Zl=u("02hT"),Yl=u("5Bek"),ln=u("c9fC"),nn=u("FVPZ"),un=u("8P0U"),tn=u("elxJ"),en=u("BV1i"),an=u("lT8R"),on=u("pBi1"),rn=u("rWV4"),bn=u("BzsH"),sn=u("AaDx"),cn=u("5dmV"),dn=u("VDRc"),mn=u("ura0"),pn=u("Nhcz"),hn=u("u9T3"),fn=u("PCNd");class Cn{}var gn=u("dvZr");u.d(n,"BusArrivalModuleNgFactory",(function(){return kn}));var kn=t.pb(e,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[a.a,a.b,a.h,a.i,a.e,a.f,a.g,o.b,o.a,r.a,b.a,i.b,i.a,s.a,c.a,c.b,d.a,il,xl]],[3,t.j],t.w]),t.Cb(4608,f.n,f.m,[t.t,[2,f.I]]),t.Cb(4608,hl.x,hl.x,[]),t.Cb(4608,j.j,j.p,[f.d,t.A,j.n]),t.Cb(4608,j.q,j.q,[j.j,j.o]),t.Cb(5120,j.a,(function(l){return[l]}),[j.q]),t.Cb(4608,j.m,j.m,[]),t.Cb(6144,j.k,null,[j.m]),t.Cb(4608,j.i,j.i,[j.k]),t.Cb(6144,j.b,null,[j.i]),t.Cb(4608,j.f,j.l,[j.b,t.q]),t.Cb(4608,j.c,j.c,[j.f]),t.Cb(4608,hl.e,hl.e,[]),t.Cb(4608,Ll.t,Ll.t,[t.j,t.q,Ll.ib,Ll.u]),t.Cb(135680,A.h,A.h,[t.y,h.a]),t.Cb(4608,Il.f,Il.f,[t.L]),t.Cb(4608,ml.a,ml.a,[ml.g,ml.c,t.j,ml.f,ml.d,t.q,t.y,f.d,B.b,[2,f.h]]),t.Cb(5120,ml.h,ml.i,[ml.a]),t.Cb(5120,Ol.a,Ol.b,[ml.a]),t.Cb(4608,Al.c,Al.c,[]),t.Cb(4608,v.d,v.d,[]),t.Cb(5120,Jl.h,Jl.a,[[3,Jl.h]]),t.Cb(5120,Tl.b,Tl.c,[ml.a]),t.Cb(135680,Tl.d,Tl.d,[ml.a,t.q,[2,f.h],[2,Tl.a],Tl.b,[3,Tl.d],ml.c]),t.Cb(4608,Dl.h,Dl.h,[]),t.Cb(5120,Dl.a,Dl.b,[ml.a]),t.Cb(5120,Fl.c,Fl.j,[ml.a]),t.Cb(4608,v.c,v.z,[[2,v.h],h.a]),t.Cb(5120,jl.a,jl.b,[ml.a]),t.Cb(5120,dl.b,dl.c,[ml.a]),t.Cb(4608,y.e,v.e,[[2,v.i],[2,v.n]]),t.Cb(5120,Rl.b,Rl.a,[[3,Rl.b]]),t.Cb(5120,Ml.b,Ml.a,[[3,Ml.b]]),t.Cb(5120,t.b,(function(l,n){return[ql.j(l,n)]}),[f.d,t.A]),t.Cb(1073742336,f.c,f.c,[]),t.Cb(1073742336,hl.w,hl.w,[]),t.Cb(1073742336,hl.j,hl.j,[]),t.Cb(1073742336,j.e,j.e,[]),t.Cb(1073742336,j.d,j.d,[]),t.Cb(1073742336,hl.t,hl.t,[]),t.Cb(1073742336,Ll.c,Ll.c,[]),t.Cb(1073742336,Ll.f,Ll.f,[]),t.Cb(1073742336,Ll.g,Ll.g,[]),t.Cb(1073742336,Ll.k,Ll.k,[]),t.Cb(1073742336,Ll.l,Ll.l,[]),t.Cb(1073742336,Ll.q,Ll.q,[]),t.Cb(1073742336,Ll.r,Ll.r,[]),t.Cb(1073742336,Ll.v,Ll.v,[]),t.Cb(1073742336,Ll.z,Ll.z,[]),t.Cb(1073742336,Ll.C,Ll.C,[]),t.Cb(1073742336,Ll.F,Ll.F,[]),t.Cb(1073742336,Ll.I,Ll.I,[]),t.Cb(1073742336,Ll.M,Ll.M,[]),t.Cb(1073742336,Ll.R,Ll.R,[]),t.Cb(1073742336,Ll.U,Ll.U,[]),t.Cb(1073742336,Ll.V,Ll.V,[]),t.Cb(1073742336,Ll.W,Ll.W,[]),t.Cb(1073742336,Ll.w,Ll.w,[]),t.Cb(1073742336,$l.a,$l.a,[]),t.Cb(1073742336,Pl.j,Pl.j,[]),t.Cb(1073742336,S.p,S.p,[]),t.Cb(1073742336,Il.d,Il.d,[]),t.Cb(1073742336,B.a,B.a,[]),t.Cb(1073742336,v.n,v.n,[[2,v.f],[2,y.f]]),t.Cb(1073742336,h.b,h.b,[]),t.Cb(1073742336,v.y,v.y,[]),t.Cb(1073742336,v.w,v.w,[]),t.Cb(1073742336,v.t,v.t,[]),t.Cb(1073742336,Ul.g,Ul.g,[]),t.Cb(1073742336,pl.c,pl.c,[]),t.Cb(1073742336,ml.e,ml.e,[]),t.Cb(1073742336,Ol.c,Ol.c,[]),t.Cb(1073742336,Al.d,Al.d,[]),t.Cb(1073742336,A.a,A.a,[]),t.Cb(1073742336,zl.b,zl.b,[]),t.Cb(1073742336,Hl.c,Hl.c,[]),t.Cb(1073742336,O.c,O.c,[]),t.Cb(1073742336,Vl.a,Vl.a,[]),t.Cb(1073742336,Kl.f,Kl.f,[]),t.Cb(1073742336,Ql.b,Ql.b,[]),t.Cb(1073742336,Ql.a,Ql.a,[]),t.Cb(1073742336,Wl.b,Wl.b,[]),t.Cb(1073742336,Xl.e,Xl.e,[]),t.Cb(1073742336,Gl.c,Gl.c,[]),t.Cb(1073742336,Jl.i,Jl.i,[]),t.Cb(1073742336,Tl.g,Tl.g,[]),t.Cb(1073742336,Dl.i,Dl.i,[]),t.Cb(1073742336,Zl.b,Zl.b,[]),t.Cb(1073742336,Yl.c,Yl.c,[]),t.Cb(1073742336,ln.d,ln.d,[]),t.Cb(1073742336,g.e,g.e,[]),t.Cb(1073742336,v.p,v.p,[]),t.Cb(1073742336,nn.a,nn.a,[]),t.Cb(1073742336,gl.c,gl.c,[]),t.Cb(1073742336,Cl.b,Cl.b,[]),t.Cb(1073742336,cl.d,cl.d,[]),t.Cb(1073742336,Fl.i,Fl.i,[]),t.Cb(1073742336,Fl.f,Fl.f,[]),t.Cb(1073742336,v.A,v.A,[]),t.Cb(1073742336,v.q,v.q,[]),t.Cb(1073742336,jl.c,jl.c,[]),t.Cb(1073742336,dl.e,dl.e,[]),t.Cb(1073742336,Rl.c,Rl.c,[]),t.Cb(1073742336,un.a,un.a,[]),t.Cb(1073742336,p.c,p.c,[]),t.Cb(1073742336,tn.a,tn.a,[]),t.Cb(1073742336,en.h,en.h,[]),t.Cb(1073742336,an.a,an.a,[]),t.Cb(1073742336,on.b,on.b,[]),t.Cb(1073742336,on.a,on.a,[]),t.Cb(1073742336,U.e,U.e,[]),t.Cb(1073742336,Ml.c,Ml.c,[]),t.Cb(1073742336,k.l,k.l,[]),t.Cb(1073742336,rn.a,rn.a,[]),t.Cb(1073742336,bn.b,bn.b,[]),t.Cb(1073742336,sn.d,sn.d,[]),t.Cb(1073742336,cn.a,cn.a,[]),t.Cb(1073742336,P.n,P.n,[[2,P.s],[2,P.k]]),t.Cb(1073742336,ql.c,ql.c,[]),t.Cb(1073742336,dn.a,dn.a,[]),t.Cb(1073742336,mn.b,mn.b,[]),t.Cb(1073742336,pn.a,pn.a,[]),t.Cb(1073742336,hn.a,hn.a,[[2,ql.g],t.A]),t.Cb(1073742336,fn.a,fn.a,[Pl.d]),t.Cb(1073742336,Cn,Cn,[]),t.Cb(1073742336,e,e,[]),t.Cb(256,j.n,"XSRF-TOKEN",[]),t.Cb(256,j.o,"X-XSRF-TOKEN",[]),t.Cb(256,Wl.a,{separatorKeyCodes:[gn.f]},[]),t.Cb(256,v.g,v.k,[]),t.Cb(1024,P.i,(function(){return[[{path:":BusStopCode",component:q},{path:"",component:kl}]]}),[])])}))}}]);