(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{bvQO:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},o=u("9AJC"),a=u("fNgX"),r=u("yWMr"),b=u("t68o"),i=u("zbXB"),s=u("NcP4"),c=u("xYTU"),d=u("pMnS"),p=u("NvT6"),m=u("W5yJ"),f=u("/HVE"),h=u("SVse"),C=u("omvX"),g=u("HsOI"),k=u("8rEH"),S=u("zQui"),B=u("IP0z"),v=u("Xd0L"),y=u("cUpR"),E=t.qb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function w(l){return t.Nb(0,[t.Jb(402653184,1,{_rowOutlet:0}),t.Jb(402653184,2,{_headerRowOutlet:0}),t.Jb(402653184,3,{_footerRowOutlet:0}),t.Db(null,0),(l()(),t.sb(4,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(5,16384,[[2,4]],0,S.t,[t.O,t.k],null,null),(l()(),t.sb(6,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(7,16384,[[1,4]],0,S.r,[t.O,t.k],null,null),(l()(),t.sb(8,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(9,16384,[[3,4]],0,S.s,[t.O,t.k],null,null)],null,null)}var _=t.qb({encapsulation:2,styles:[],data:{}});function N(l){return t.Nb(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,S.c,[t.O],null,null)],null,null)}var x=t.qb({encapsulation:2,styles:[],data:{}});function L(l){return t.Nb(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,S.c,[t.O],null,null)],null,null)}var I,O=u("bujt"),A=u("Fwaw"),J=u("5GAg"),T=u("vRYr"),D=u("pHhM"),F=u("2Vo4"),j=u("ZNab"),R=u("IheW"),M=((I=function(){function l(l,n){var u=this;this.cookieService=l,this.httpClient=n,this.busStopBookmarkSubject=new F.a([]),this.busStopBookmark$=this.busStopBookmarkSubject.asObservable(),this.busStopBookmark$.subscribe((function(l){u.busStopBookmark=l})),this.getCookieBusStopBookmark()}return l.prototype.getCookieBusStopBookmark=function(){var l=this.cookieService.get("InSgBusStopBookmark");l&&this.busStopBookmarkSubject.next(JSON.parse(l))},l.prototype.getBusStopInfo=function(l){return this.httpClient.get("/api/lta/bus/busStop/"+l)},l.prototype.getBusArrival=function(l){return this.httpClient.get("/api/lta/bus/busArrival/"+l)},l.prototype.addBusStopBookmark=function(l){this.existingBookmark(l)||(this.busStopBookmark.push(l),this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set("InSgBusStopBookmark",JSON.stringify(this.busStopBookmark),3650,"/"))},l.prototype.deleteBusStopBookmark=function(l){for(var n=0;n<this.busStopBookmark.length;n++)if(this.busStopBookmark[n].BusStopCode===l.BusStopCode){this.busStopBookmark.splice(n,1);break}this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set("InSgBusStopBookmark",JSON.stringify(this.busStopBookmark),3650,"/")},l.prototype.existingBookmark=function(l){for(var n=0;n<this.busStopBookmark.length;n++)if(l.BusStopCode===this.busStopBookmark[n].BusStopCode)return!0;return!1},l.prototype.getNearbyBusStops=function(l){return this.httpClient.get("/api/lta/bus/nearbyBusStops?latitude="+l.latitude+"&longitude="+l.longitude)},l}()).ngInjectableDef=t.Rb({factory:function(){return new I(t.Sb(j.a),t.Sb(R.c))},token:I,providedIn:"root"}),I),q=function(){function l(l,n,u){this.route=l,this.busSvc=n,this.snackBar=u,this.busTableColumn=["service","bus1","bus2","bus3","load"]}return l.prototype.ngOnInit=function(){this.loading=!0,this.busStopCode="",this.busTable=[],this.bExistingBookmark=!1,this.busStopCode=this.route.snapshot.paramMap.get("BusStopCode"),this.err_msg="",this.getBusArrival()},l.prototype.addBusStopBookmark=function(){this.bExistingBookmark=!0,this.busSvc.addBusStopBookmark(this.busStopInfo)},l.prototype.getBusArrival=function(){var l=this;if(this.busTable=[],this.busStopCode=this.busStopCode.trim(),!this.busStopCode)return this.err_msg="Invalid Bus Stop Code.",void this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:3e3});this.loading=!0,this.busSvc.getBusArrival(this.busStopCode).subscribe((function(n){if(l.loading=!1,n.busArrival.Services.length<=0)return l.err_msg="Bus service unavailable at the Bus Stop.",void l.snackBar.open("Bus service unavailable at the Bus Stop.","warn",{duration:3e3});l.err_msg="",n.busArrival.Services.forEach((function(n){var u={service:n.ServiceNo,bus1:P(n.NextBus),bus2:P(n.NextBus2),bus3:P(n.NextBus3),load:n.NextBus.Load};l.busTable.push(u)})),l.busStopInfo=n.busStopInfo,l.bExistingBookmark=l.busSvc.existingBookmark(l.busStopInfo)}),(function(n){l.loading=!1,l.err_msg=n,l.snackBar.open(n,"Error",{duration:4e3})}))},l}();function P(l){if(!l||!l.EstimatedArrival)return"NA";var n=new Date(l.EstimatedArrival);if(n.valueOf()-Date.now()<0)return"Arrived";var u=(n.valueOf()-Date.now())/1e3/60;return u<1?"1 min":u.toFixed(0)+" mins"}var $=u("iInd"),U=u("dFDH"),z=t.qb({encapsulation:0,styles:[[""]],data:{}});function H(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"mat-spinner",[["class","ml-auto mr-auto my-4 mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,p.b,p.a)),t.rb(1,114688,null,0,m.d,[t.k,f.a,[2,h.d],[2,C.a],m.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t.Eb(n,1)._noopAnimations,t.Eb(n,1).diameter,t.Eb(n,1).diameter)}))}function V(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,3,"div",[["class","text-center my-5"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.rb(2,16384,null,0,g.b,[],null,null),(l()(),t.Lb(3,null,["",""]))],null,(function(l,n){var u=n.component;l(n,1,0,t.Eb(n,2).id),l(n,3,0,u.err_msg)}))}function K(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["Service"]))],null,null)}function W(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.service)}))}function Q(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["1st-Bus"]))],null,null)}function X(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus1)}))}function Z(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["2nd-Bus"]))],null,null)}function G(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus2)}))}function Y(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["3rd-Bus"]))],null,null)}function ll(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bus3)}))}function nl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.e,[S.d,t.k],null,null),(l()(),t.Lb(-1,null,["Load"]))],null,null)}function ul(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,k.a,[S.d,t.k],null,null),(l()(),t.Lb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.load)}))}function tl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,N,_)),t.Ib(6144,null,S.k,null,[k.g]),t.rb(2,49152,null,0,k.g,[],null,null)],null,null)}function el(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,L,x)),t.Ib(6144,null,S.m,null,[k.i]),t.rb(2,49152,null,0,k.i,[],null,null)],null,null)}function ol(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addBusStopBookmark()&&t),t}),O.b,O.a)),t.rb(1,180224,null,0,A.b,[t.k,J.h,[2,C.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Bookmark this Bus Stop "]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){l(n,0,0,t.Eb(n,1).disabled||null,"NoopAnimations"===t.Eb(n,1)._animationMode)}))}function al(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,97,"div",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.sb(3,0,null,null,77,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""],["width","100%"]],null,null,null,w,E)),t.Ib(6144,null,S.o,null,[k.k]),t.rb(5,2342912,null,4,k.k,[t.r,t.h,t.k,[8,null],[2,B.b],h.d,f.a],{dataSource:[0,"dataSource"]},null),t.Jb(603979776,1,{_contentColumnDefs:1}),t.Jb(603979776,2,{_contentRowDefs:1}),t.Jb(603979776,3,{_contentHeaderRowDefs:1}),t.Jb(603979776,4,{_contentFooterRowDefs:1}),(l()(),t.sb(10,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(12,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,5,{cell:0}),t.Jb(603979776,6,{headerCell:0}),t.Jb(603979776,7,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,K)),t.rb(18,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[6,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,W)),t.rb(21,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[5,4]],S.b,null,[k.b]),(l()(),t.sb(23,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(25,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,8,{cell:0}),t.Jb(603979776,9,{headerCell:0}),t.Jb(603979776,10,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,Q)),t.rb(31,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[9,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,X)),t.rb(34,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[8,4]],S.b,null,[k.b]),(l()(),t.sb(36,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(38,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,11,{cell:0}),t.Jb(603979776,12,{headerCell:0}),t.Jb(603979776,13,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,Z)),t.rb(44,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[12,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,G)),t.rb(47,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[11,4]],S.b,null,[k.b]),(l()(),t.sb(49,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(51,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,14,{cell:0}),t.Jb(603979776,15,{headerCell:0}),t.Jb(603979776,16,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,Y)),t.rb(57,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[15,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,ll)),t.rb(60,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[14,4]],S.b,null,[k.b]),(l()(),t.sb(62,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[k.c]),t.rb(64,16384,null,3,k.c,[],{name:[0,"name"]},null),t.Jb(603979776,17,{cell:0}),t.Jb(603979776,18,{headerCell:0}),t.Jb(603979776,19,{footerCell:0}),t.Ib(2048,[[1,4]],S.d,null,[k.c]),(l()(),t.hb(0,null,null,2,null,nl)),t.rb(70,16384,null,0,k.f,[t.L],null,null),t.Ib(2048,[[18,4]],S.j,null,[k.f]),(l()(),t.hb(0,null,null,2,null,ul)),t.rb(73,16384,null,0,k.b,[t.L],null,null),t.Ib(2048,[[17,4]],S.b,null,[k.b]),(l()(),t.hb(0,null,null,2,null,tl)),t.rb(76,540672,null,0,k.h,[t.L,t.r],{columns:[0,"columns"]},null),t.Ib(2048,[[3,4]],S.l,null,[k.h]),(l()(),t.hb(0,null,null,2,null,el)),t.rb(79,540672,null,0,k.j,[t.L,t.r],{columns:[0,"columns"]},null),t.Ib(2048,[[2,4]],S.n,null,[k.j]),(l()(),t.sb(81,0,null,null,8,"div",[["class","small mt-1"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Bus Load "])),(l()(),t.sb(83,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t.sb(84,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SEA: seats available"])),(l()(),t.sb(86,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SDA: standing available"])),(l()(),t.sb(88,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["LSD: limited standing"])),(l()(),t.sb(90,0,null,null,7,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.sb(91,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,ol)),t.rb(93,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(94,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.sb(95,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getBusArrival()&&t),t}),O.b,O.a)),t.rb(96,180224,null,0,A.b,[t.k,J.h,[2,C.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Refresh "]))],(function(l,n){var u=n.component;l(n,5,0,u.busTable),l(n,12,0,"service"),l(n,25,0,"bus1"),l(n,38,0,"bus2"),l(n,51,0,"bus3"),l(n,64,0,"load"),l(n,76,0,u.busTableColumn),l(n,79,0,u.busTableColumn),l(n,93,0,!u.bExistingBookmark),l(n,96,0,"primary")}),(function(l,n){l(n,2,0,n.component.busStopInfo.Description),l(n,95,0,t.Eb(n,96).disabled||null,"NoopAnimations"===t.Eb(n,96)._animationMode)}))}function rl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-go-back-button",[],null,null,null,T.b,T.a)),t.rb(1,114688,null,0,D.a,[h.h],null,null),(l()(),t.hb(16777216,null,null,1,null,H)),t.rb(3,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(4,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,V)),t.rb(6,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,al)),t.rb(8,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0),l(n,3,0,u.loading),l(n,6,0,u.err_msg&&!(null!=u.busTable&&u.busTable.length)),l(n,8,0,null==u.busTable?null:u.busTable.length)}),null)}var bl=t.ob("app-status",q,(function(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-status",[],null,null,null,rl,z)),t.rb(1,114688,null,0,q,[$.a,M,U.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),il=u("6UMx"),sl=u("Q+lL"),cl=u("Mz6y"),dl=u("QQfA"),pl=u("hOhj"),ml=u("s7LF"),fl=u("dJrM"),hl=u("ZwOa"),Cl=u("oapL"),gl=function(){function l(l,n,u){var t=this;this.busArrivalService=l,this.snackBar=n,this.router=u,this.busTableColumn=["service","bus1","bus2","bus3","load"],this.bSpinnerShowNearbyBusStops=!1,this.busStopBookmark=[],l.busStopBookmark$.subscribe((function(l){t.busStopBookmark=l}))}return l.prototype.ngOnInit=function(){this.busTable=[],this.nearbyBusStops=[],this.busStopInfo=void 0,this.bExistingBookmark=!1,this.bSpinnerShowNearbyBusStops=!1,this.currentBusStopCode=""},l.prototype.addBusStopBookmark=function(){this.bExistingBookmark=!0,this.busArrivalService.addBusStopBookmark(this.busStopInfo)},l.prototype.deleteBusStopBookmark=function(l){this.bExistingBookmark=!1,this.busArrivalService.deleteBusStopBookmark(l)},l.prototype.submit=function(l){this.nearbyBusStops=[],(l=l.trim())?this.router.navigate(["/bus",l]):this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:2e3})},l.prototype.getNearbyBusStops=function(l){var n=this;this.busArrivalService.getNearbyBusStops(l).subscribe((function(l){n.nearbyBusStops=l,n.bSpinnerShowNearbyBusStops=!1}),(function(l){n.nearbyBusStops=[],n.bSpinnerShowNearbyBusStops=!1,n.snackBar.open("No Nearby Bus Stop.","warn",{duration:2e3})}))},l.prototype.toggleNearbyBusStops=function(){var l=this;if(this.nearbyBusStops.length)return this.nearbyBusStops=[];this.bSpinnerShowNearbyBusStops=!0,navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){n&&n.coords?l.getNearbyBusStops(n.coords):l.bSpinnerShowNearbyBusStops=!1})):(this.bSpinnerShowNearbyBusStops=!1,this.snackBar.open("Please enable the location access.","warn",{duration:2e3}))},l}(),kl=t.qb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}"]],data:{}});function Sl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,9,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,il.e,il.a)),t.rb(1,704512,null,0,sl.a,[t.k],null,null),(l()(),t.sb(2,0,null,0,7,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.rb(4,671744,null,0,$.m,[$.k,$.a,h.i],{routerLink:[0,"routerLink"]},null),t.Fb(5,2),(l()(),t.Lb(6,null,[" (",") "," "])),(l()(),t.sb(7,16777216,null,null,2,"button",[["matTooltip","delete"]],null,[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,u){var e=!0,o=l.component;return"longpress"===n&&(e=!1!==t.Eb(l,8).show()&&e),"keydown"===n&&(e=!1!==t.Eb(l,8)._handleKeydown(u)&&e),"touchend"===n&&(e=!1!==t.Eb(l,8)._handleTouchend()&&e),"click"===n&&(e=!1!==o.deleteBusStopBookmark(l.context.$implicit)&&e),e}),null,null)),t.rb(8,212992,null,0,cl.d,[dl.a,t.k,pl.b,t.O,t.y,f.a,J.c,J.h,cl.b,[2,B.b],[2,cl.a],[2,y.f]],{message:[0,"message"]},null),(l()(),t.Lb(-1,null,["x"]))],(function(l,n){var u=l(n,5,0,"./",n.context.$implicit.BusStopCode);l(n,4,0,u),l(n,8,0,"delete")}),(function(l,n){l(n,3,0,t.Eb(n,4).target,t.Eb(n,4).href),l(n,6,0,n.context.$implicit.BusStopCode,n.context.$implicit.Description)}))}function Bl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,4,"div",[["class","pt-3 text-center"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bus Stop Bookmark"])),(l()(),t.hb(16777216,null,null,1,null,Sl)),t.rb(4,278528,null,0,h.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.busStopBookmark)}),null)}function vl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"mat-spinner",[["class","ml-auto mr-auto mt-3 mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,p.b,p.a)),t.rb(1,114688,null,0,m.d,[t.k,f.a,[2,h.d],[2,C.a],m.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,t.Eb(n,1)._noopAnimations,t.Eb(n,1).diameter,t.Eb(n,1).diameter)}))}function yl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,6,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,il.e,il.a)),t.rb(1,704512,null,0,sl.a,[t.k],null,null),(l()(),t.sb(2,0,null,0,4,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,3,"button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,4).onClick()&&e),e}),null,null)),t.rb(4,16384,null,0,$.l,[$.k,$.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Fb(5,2),(l()(),t.Lb(6,null,[" "," @ "," "]))],(function(l,n){var u=l(n,5,0,"./",n.context.$implicit.BusStopCode);l(n,4,0,u)}),(function(l,n){l(n,6,0,n.context.$implicit.Description,n.context.$implicit.RoadName)}))}function El(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,yl)),t.rb(2,278528,null,0,h.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.nearbyBusStops)}),null)}function wl(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,45,"div",[["class","container py-4"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,4,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bus Arrival Time"])),(l()(),t.sb(4,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Get bus arrival time by bus stop code."])),(l()(),t.sb(6,0,null,null,25,"form",[["class","pt-4 text-center"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.Eb(l,8).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Eb(l,8).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submit(t.Eb(l,25).value)&&e),e}),null,null)),t.rb(7,16384,null,0,ml.A,[],null,null),t.rb(8,4210688,null,0,ml.p,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Ib(2048,null,ml.c,null,[ml.p]),t.rb(10,16384,null,0,ml.o,[[4,ml.c]],null,null),(l()(),t.sb(11,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,fl.b,fl.a)),t.rb(12,7520256,null,9,g.c,[t.k,t.h,[2,v.j],[2,B.b],[2,g.a],f.a,t.y,[2,C.a]],null,null),t.Jb(603979776,1,{_controlNonStatic:0}),t.Jb(335544320,2,{_controlStatic:0}),t.Jb(603979776,3,{_labelChildNonStatic:0}),t.Jb(335544320,4,{_labelChildStatic:0}),t.Jb(603979776,5,{_placeholderChild:0}),t.Jb(603979776,6,{_errorChildren:1}),t.Jb(603979776,7,{_hintChildren:1}),t.Jb(603979776,8,{_prefixChildren:1}),t.Jb(603979776,9,{_suffixChildren:1}),(l()(),t.sb(22,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.rb(23,16384,[[3,4],[4,4]],0,g.g,[],null,null),(l()(),t.Lb(-1,null,["Bus Stop Code"])),(l()(),t.sb(25,0,[["busStopCode",1]],1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"]],(function(l,n,u){var e=!0;return"blur"===n&&(e=!1!==t.Eb(l,26)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==t.Eb(l,26)._focusChanged(!0)&&e),"input"===n&&(e=!1!==t.Eb(l,26)._onInput()&&e),e}),null,null)),t.rb(26,999424,null,0,hl.a,[t.k,f.a,[8,null],[2,ml.p],[2,ml.i],v.d,[8,null],Cl.a,t.y],{type:[0,"type"]},null),t.Ib(2048,[[1,4],[2,4]],g.d,null,[hl.a]),(l()(),t.sb(28,0,null,4,3,"button",[["color","primary"],["mat-flat-button",""],["matSuffix",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,O.b,O.a)),t.rb(29,180224,null,0,A.b,[t.k,J.h,[2,C.a]],{color:[0,"color"]},null),t.rb(30,16384,[[9,4]],0,g.h,[],null,null),(l()(),t.Lb(-1,0,[" Get "])),(l()(),t.hb(16777216,null,null,1,null,Bl)),t.rb(33,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(34,0,null,null,7,"div",[["class","text-center pt-3"]],null,null,null,null,null)),(l()(),t.sb(35,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleNearbyBusStops()&&t),t}),O.b,O.a)),t.rb(36,180224,null,0,A.b,[t.k,J.h,[2,C.a]],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,[" Toggle Nearby Bus Stops "])),(l()(),t.hb(16777216,null,null,1,null,vl)),t.rb(39,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,El)),t.rb(41,16384,null,0,h.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(42,0,null,null,3,"div",[["class","mt-4 small text-center"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Powered by "])),(l()(),t.sb(44,0,null,null,1,"a",[["href","https://data.gov.sg"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Data.gov.sg"]))],(function(l,n){var u=n.component;l(n,26,0,"text"),l(n,29,0,"primary"),l(n,33,0,u.busStopBookmark.length),l(n,36,0,"primary"),l(n,39,0,u.bSpinnerShowNearbyBusStops),l(n,41,0,u.nearbyBusStops.length)}),(function(l,n){l(n,6,0,t.Eb(n,10).ngClassUntouched,t.Eb(n,10).ngClassTouched,t.Eb(n,10).ngClassPristine,t.Eb(n,10).ngClassDirty,t.Eb(n,10).ngClassValid,t.Eb(n,10).ngClassInvalid,t.Eb(n,10).ngClassPending),l(n,11,1,["standard"==t.Eb(n,12).appearance,"fill"==t.Eb(n,12).appearance,"outline"==t.Eb(n,12).appearance,"legacy"==t.Eb(n,12).appearance,t.Eb(n,12)._control.errorState,t.Eb(n,12)._canLabelFloat,t.Eb(n,12)._shouldLabelFloat(),t.Eb(n,12)._hasFloatingLabel(),t.Eb(n,12)._hideControlPlaceholder(),t.Eb(n,12)._control.disabled,t.Eb(n,12)._control.autofilled,t.Eb(n,12)._control.focused,"accent"==t.Eb(n,12).color,"warn"==t.Eb(n,12).color,t.Eb(n,12)._shouldForward("untouched"),t.Eb(n,12)._shouldForward("touched"),t.Eb(n,12)._shouldForward("pristine"),t.Eb(n,12)._shouldForward("dirty"),t.Eb(n,12)._shouldForward("valid"),t.Eb(n,12)._shouldForward("invalid"),t.Eb(n,12)._shouldForward("pending"),!t.Eb(n,12)._animationsEnabled]),l(n,25,0,t.Eb(n,26)._isServer,t.Eb(n,26).id,t.Eb(n,26).placeholder,t.Eb(n,26).disabled,t.Eb(n,26).required,t.Eb(n,26).readonly&&!t.Eb(n,26)._isNativeSelect||null,t.Eb(n,26)._ariaDescribedby||null,t.Eb(n,26).errorState,t.Eb(n,26).required.toString()),l(n,28,0,t.Eb(n,29).disabled||null,"NoopAnimations"===t.Eb(n,29)._animationMode),l(n,35,0,t.Eb(n,36).disabled||null,"NoopAnimations"===t.Eb(n,36)._animationMode)}))}var _l=t.ob("bus-arrival-home",gl,(function(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"bus-arrival-home",[],null,null,null,wl,kl)),t.rb(1,114688,null,0,gl,[M,U.b,$.k],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),Nl=u("G0yt"),xl=u("DkaU"),Ll=u("/Co4"),Il=u("POq0"),Ol=u("qJ5m"),Al=u("s6ns"),Jl=u("821u"),Tl=u("gavF"),Dl=u("JjoW"),Fl=u("OIZN"),jl=u("7kcP"),Rl=u("/q54"),Ml=u("QRvN"),ql=u("Nv++"),Pl=u("zMNK"),$l=u("KPQW"),Ul=u("lwm9"),zl=u("mkRZ"),Hl=u("igqZ"),Vl=u("r0V8"),Kl=u("kNGD"),Wl=u("qJ50"),Ql=u("Gi4r"),Xl=u("02hT"),Zl=u("5Bek"),Gl=u("c9fC"),Yl=u("FVPZ"),ln=u("8P0U"),nn=u("elxJ"),un=u("BV1i"),tn=u("lT8R"),en=u("pBi1"),on=u("rWV4"),an=u("BzsH"),rn=u("AaDx"),bn=u("5dmV"),sn=u("VDRc"),cn=u("ura0"),dn=u("Nhcz"),pn=u("u9T3"),mn=u("PCNd"),fn=function(){},hn=u("dvZr");u.d(n,"BusArrivalModuleNgFactory",(function(){return Cn}));var Cn=t.pb(e,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.a,o.b,o.h,o.i,o.e,o.f,o.g,a.b,a.a,r.a,b.a,i.b,i.a,s.a,c.a,c.b,d.a,bl,_l]],[3,t.j],t.w]),t.Cb(4608,h.n,h.m,[t.t,[2,h.I]]),t.Cb(4608,ml.x,ml.x,[]),t.Cb(4608,R.j,R.p,[h.d,t.A,R.n]),t.Cb(4608,R.q,R.q,[R.j,R.o]),t.Cb(5120,R.a,(function(l){return[l]}),[R.q]),t.Cb(4608,R.m,R.m,[]),t.Cb(6144,R.k,null,[R.m]),t.Cb(4608,R.i,R.i,[R.k]),t.Cb(6144,R.b,null,[R.i]),t.Cb(4608,R.f,R.l,[R.b,t.q]),t.Cb(4608,R.c,R.c,[R.f]),t.Cb(4608,ml.e,ml.e,[]),t.Cb(4608,Nl.t,Nl.t,[t.j,t.q,Nl.ib,Nl.u]),t.Cb(135680,J.h,J.h,[t.y,f.a]),t.Cb(4608,xl.f,xl.f,[t.L]),t.Cb(4608,dl.a,dl.a,[dl.g,dl.c,t.j,dl.f,dl.d,t.q,t.y,h.d,B.b,[2,h.h]]),t.Cb(5120,dl.h,dl.i,[dl.a]),t.Cb(5120,Ll.a,Ll.b,[dl.a]),t.Cb(4608,Il.c,Il.c,[]),t.Cb(4608,v.d,v.d,[]),t.Cb(5120,Ol.h,Ol.a,[[3,Ol.h]]),t.Cb(5120,Al.b,Al.c,[dl.a]),t.Cb(135680,Al.d,Al.d,[dl.a,t.q,[2,h.h],[2,Al.a],Al.b,[3,Al.d],dl.c]),t.Cb(4608,Jl.h,Jl.h,[]),t.Cb(5120,Jl.a,Jl.b,[dl.a]),t.Cb(5120,Tl.c,Tl.j,[dl.a]),t.Cb(4608,v.c,v.z,[[2,v.h],f.a]),t.Cb(5120,Dl.a,Dl.b,[dl.a]),t.Cb(5120,cl.b,cl.c,[dl.a]),t.Cb(4608,y.e,v.e,[[2,v.i],[2,v.n]]),t.Cb(5120,Fl.b,Fl.a,[[3,Fl.b]]),t.Cb(5120,jl.b,jl.a,[[3,jl.b]]),t.Cb(5120,t.b,(function(l,n){return[Rl.j(l,n)]}),[h.d,t.A]),t.Cb(1073742336,h.c,h.c,[]),t.Cb(1073742336,ml.w,ml.w,[]),t.Cb(1073742336,ml.j,ml.j,[]),t.Cb(1073742336,R.e,R.e,[]),t.Cb(1073742336,R.d,R.d,[]),t.Cb(1073742336,ml.t,ml.t,[]),t.Cb(1073742336,Nl.c,Nl.c,[]),t.Cb(1073742336,Nl.f,Nl.f,[]),t.Cb(1073742336,Nl.g,Nl.g,[]),t.Cb(1073742336,Nl.k,Nl.k,[]),t.Cb(1073742336,Nl.l,Nl.l,[]),t.Cb(1073742336,Nl.q,Nl.q,[]),t.Cb(1073742336,Nl.r,Nl.r,[]),t.Cb(1073742336,Nl.v,Nl.v,[]),t.Cb(1073742336,Nl.z,Nl.z,[]),t.Cb(1073742336,Nl.C,Nl.C,[]),t.Cb(1073742336,Nl.F,Nl.F,[]),t.Cb(1073742336,Nl.I,Nl.I,[]),t.Cb(1073742336,Nl.M,Nl.M,[]),t.Cb(1073742336,Nl.R,Nl.R,[]),t.Cb(1073742336,Nl.U,Nl.U,[]),t.Cb(1073742336,Nl.V,Nl.V,[]),t.Cb(1073742336,Nl.W,Nl.W,[]),t.Cb(1073742336,Nl.w,Nl.w,[]),t.Cb(1073742336,Ml.a,Ml.a,[]),t.Cb(1073742336,ql.j,ql.j,[]),t.Cb(1073742336,S.p,S.p,[]),t.Cb(1073742336,xl.d,xl.d,[]),t.Cb(1073742336,B.a,B.a,[]),t.Cb(1073742336,v.n,v.n,[[2,v.f],[2,y.f]]),t.Cb(1073742336,f.b,f.b,[]),t.Cb(1073742336,v.y,v.y,[]),t.Cb(1073742336,v.w,v.w,[]),t.Cb(1073742336,v.t,v.t,[]),t.Cb(1073742336,Pl.g,Pl.g,[]),t.Cb(1073742336,pl.c,pl.c,[]),t.Cb(1073742336,dl.e,dl.e,[]),t.Cb(1073742336,Ll.c,Ll.c,[]),t.Cb(1073742336,Il.d,Il.d,[]),t.Cb(1073742336,J.a,J.a,[]),t.Cb(1073742336,$l.b,$l.b,[]),t.Cb(1073742336,Ul.c,Ul.c,[]),t.Cb(1073742336,A.c,A.c,[]),t.Cb(1073742336,zl.a,zl.a,[]),t.Cb(1073742336,Hl.f,Hl.f,[]),t.Cb(1073742336,Vl.b,Vl.b,[]),t.Cb(1073742336,Vl.a,Vl.a,[]),t.Cb(1073742336,Kl.b,Kl.b,[]),t.Cb(1073742336,Wl.e,Wl.e,[]),t.Cb(1073742336,Ql.c,Ql.c,[]),t.Cb(1073742336,Ol.i,Ol.i,[]),t.Cb(1073742336,Al.g,Al.g,[]),t.Cb(1073742336,Jl.i,Jl.i,[]),t.Cb(1073742336,Xl.b,Xl.b,[]),t.Cb(1073742336,Zl.c,Zl.c,[]),t.Cb(1073742336,Gl.d,Gl.d,[]),t.Cb(1073742336,g.e,g.e,[]),t.Cb(1073742336,v.p,v.p,[]),t.Cb(1073742336,Yl.a,Yl.a,[]),t.Cb(1073742336,Cl.c,Cl.c,[]),t.Cb(1073742336,hl.b,hl.b,[]),t.Cb(1073742336,sl.d,sl.d,[]),t.Cb(1073742336,Tl.i,Tl.i,[]),t.Cb(1073742336,Tl.f,Tl.f,[]),t.Cb(1073742336,v.A,v.A,[]),t.Cb(1073742336,v.q,v.q,[]),t.Cb(1073742336,Dl.c,Dl.c,[]),t.Cb(1073742336,cl.e,cl.e,[]),t.Cb(1073742336,Fl.c,Fl.c,[]),t.Cb(1073742336,ln.a,ln.a,[]),t.Cb(1073742336,m.c,m.c,[]),t.Cb(1073742336,nn.a,nn.a,[]),t.Cb(1073742336,un.h,un.h,[]),t.Cb(1073742336,tn.a,tn.a,[]),t.Cb(1073742336,en.b,en.b,[]),t.Cb(1073742336,en.a,en.a,[]),t.Cb(1073742336,U.e,U.e,[]),t.Cb(1073742336,jl.c,jl.c,[]),t.Cb(1073742336,k.l,k.l,[]),t.Cb(1073742336,on.a,on.a,[]),t.Cb(1073742336,an.b,an.b,[]),t.Cb(1073742336,rn.d,rn.d,[]),t.Cb(1073742336,bn.a,bn.a,[]),t.Cb(1073742336,$.n,$.n,[[2,$.s],[2,$.k]]),t.Cb(1073742336,Rl.c,Rl.c,[]),t.Cb(1073742336,sn.a,sn.a,[]),t.Cb(1073742336,cn.b,cn.b,[]),t.Cb(1073742336,dn.a,dn.a,[]),t.Cb(1073742336,pn.a,pn.a,[[2,Rl.g],t.A]),t.Cb(1073742336,mn.a,mn.a,[ql.d]),t.Cb(1073742336,fn,fn,[]),t.Cb(1073742336,e,e,[]),t.Cb(256,R.n,"XSRF-TOKEN",[]),t.Cb(256,R.o,"X-XSRF-TOKEN",[]),t.Cb(256,Kl.a,{separatorKeyCodes:[hn.f]},[]),t.Cb(256,v.g,v.k,[]),t.Cb(1024,$.i,(function(){return[[{path:":BusStopCode",component:q},{path:"",component:gl}]]}),[])])}))}}]);