(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{bvQO:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("9AJC"),a=u("yWMr"),b=u("t68o"),r=u("zbXB"),i=u("NcP4"),s=u("xYTU"),c=u("pMnS"),d=u("8rEH"),m=u("zQui"),p=u("SVse"),h=u("IP0z"),f=u("Xd0L"),B=u("cUpR"),g=u("/HVE"),k=t.pb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function S(l){return t.Kb(0,[t.Gb(402653184,1,{_rowOutlet:0}),t.Gb(402653184,2,{_headerRowOutlet:0}),t.Gb(402653184,3,{_footerRowOutlet:0}),t.Ab(null,0),(l()(),t.rb(4,16777216,null,null,1,null,null,null,null,null,null,null)),t.qb(5,16384,[[2,4]],0,m.t,[t.O,t.k],null,null),(l()(),t.rb(6,16777216,null,null,1,null,null,null,null,null,null,null)),t.qb(7,16384,[[1,4]],0,m.r,[t.O,t.k],null,null),(l()(),t.rb(8,16777216,null,null,1,null,null,null,null,null,null,null)),t.qb(9,16384,[[3,4]],0,m.s,[t.O,t.k],null,null)],null,null)}var z=t.pb({encapsulation:2,styles:[],data:{}});function v(l){return t.Kb(0,[(l()(),t.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.qb(1,147456,null,0,m.c,[t.O],null,null)],null,null)}var y=t.pb({encapsulation:2,styles:[],data:{}});function w(l){return t.Kb(0,[(l()(),t.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.qb(1,147456,null,0,m.c,[t.O],null,null)],null,null)}var q=u("bujt"),_=u("Fwaw"),C=u("5GAg"),x=u("omvX"),I=u("6UMx"),F=u("Q+lL"),N=u("NvT6"),A=u("W5yJ"),O=u("s7LF"),G=u("dJrM"),L=u("HsOI"),E=u("ZwOa"),D=u("oapL"),K=u("2Vo4"),j=(u("JQBr"),u("jmvC")),T=u("IheW");class M{constructor(l,n){this.cookieService=l,this.httpClient=n,this.busStopBookmarkSubject=new K.a([]),this.busStopBookmark$=this.busStopBookmarkSubject.asObservable(),this.busStopBookmark$.subscribe(l=>{this.busStopBookmark=l}),this.getCookieBusStopBookmark()}getCookieBusStopBookmark(){let l=this.cookieService.get("InSgBusStopBookmark");l&&this.busStopBookmarkSubject.next(JSON.parse(l))}getBusStopInfo(l){return this.httpClient.get(`/api/lta/bus/busStop/${l}`)}getBusArrival(l){return this.httpClient.get(`/api/lta/bus/busArrival/${l}`)}addBusStopBookmark(l){this.existingBookmark(l)||(this.busStopBookmark.push(l),this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set("InSgBusStopBookmark",JSON.stringify(this.busStopBookmark),3650,"/"))}deleteBusStopBookmark(l){for(let n=0;n<this.busStopBookmark.length;n++)if(this.busStopBookmark[n].BusStopCode===l.BusStopCode){this.busStopBookmark.splice(n,1);break}this.busStopBookmarkSubject.next(this.busStopBookmark),this.cookieService.set("InSgBusStopBookmark",JSON.stringify(this.busStopBookmark),3650,"/")}existingBookmark(l){for(let n=0;n<this.busStopBookmark.length;n++)if(l.BusStopCode===this.busStopBookmark[n].BusStopCode)return!0;return!1}getNearbyBusStops(l){return this.httpClient.get("/api/lta/bus/nearbyBusStops?"+`latitude=${l.latitude}`+`&longitude=${l.longitude}`)}}M.ngInjectableDef=t.Mb({factory:function(){return new M(t.Qb(j.a),t.Qb(T.c))},token:M,providedIn:"root"});class R{constructor(l,n){this.busArrivalService=l,this.snackBar=n,this.busTableColumn=["service","bus1","bus2","bus3","load"],this.bSpinnerShowNearbyBusStops=!1,this.busStopBookmark=[],l.busStopBookmark$.subscribe(l=>{this.busStopBookmark=l})}ngOnInit(){this.busTable=[],this.nearbyBusStops=[],this.bShowNearbyBusStops=!1,this.busStopInfo=void 0,this.bExistingBookmark=!1,this.bSpinnerShowNearbyBusStops=!1,this.currentBusStopCode=""}addBusStopBookmark(){this.bExistingBookmark=!0,this.busArrivalService.addBusStopBookmark(this.busStopInfo)}deleteBusStopBookmark(l){this.bExistingBookmark=!1,this.busArrivalService.deleteBusStopBookmark(l)}getBusArrival(l){this.busTable=[],this.bExistingBookmark=!1,this.bShowNearbyBusStops=!1,(l=l.trim())?(this.currentBusStopCode=l,this.busArrivalService.getBusArrival(l).subscribe(l=>{l.busArrival.Services.length<=0?this.snackBar.open("Bus service unavailable at the Bus Stop.","warn",{duration:2e3}):(l.busArrival.Services.forEach(l=>{let n={service:l.ServiceNo,bus1:$(l.NextBus),bus2:$(l.NextBus2),bus3:$(l.NextBus3),load:l.NextBus.Load};this.busTable.push(n)}),this.busStopInfo=l.busStopInfo,this.bExistingBookmark=this.busArrivalService.existingBookmark(l.busStopInfo))},l=>{this.snackBar.open(l,"Error",{duration:4e3})})):this.snackBar.open("Invalid Bus Stop Code.","warn",{duration:2e3})}getNearbyBusStops(l){this.busArrivalService.getNearbyBusStops(l).subscribe(l=>{this.nearbyBusStops=l,this.bSpinnerShowNearbyBusStops=!1,this.bShowNearbyBusStops=!0},l=>{this.nearbyBusStops=[],this.bSpinnerShowNearbyBusStops=!1,this.snackBar.open("No Nearby Bus Stop.","warn",{duration:2e3})})}toggleNearbyBusStops(){this.bShowNearbyBusStops?this.bShowNearbyBusStops=!this.bShowNearbyBusStops:(this.bSpinnerShowNearbyBusStops=!0,navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{l&&l.coords?this.getNearbyBusStops(l.coords):this.bSpinnerShowNearbyBusStops=!1}):(this.bSpinnerShowNearbyBusStops=!1,this.snackBar.open("Please enable the location access.","warn",{duration:2e3})))}}function $(l){if(!l||!l.EstimatedArrival)return"NA";const n=(new Date(l.EstimatedArrival).valueOf()-Date.now())/1e3/60;return n<1?"Arriving":n.toFixed(0)+" mins"}var P=u("dFDH"),J=t.pb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}"]],data:{}});function Q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.e,[m.d,t.k],null,null),(l()(),t.Ib(-1,null,["Service"]))],null,null)}function H(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.a,[m.d,t.k],null,null),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.service)})}function U(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.e,[m.d,t.k],null,null),(l()(),t.Ib(-1,null,["1st-Bus"]))],null,null)}function V(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.a,[m.d,t.k],null,null),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.bus1)})}function W(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.e,[m.d,t.k],null,null),(l()(),t.Ib(-1,null,["2nd-Bus"]))],null,null)}function X(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.a,[m.d,t.k],null,null),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.bus2)})}function Z(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.e,[m.d,t.k],null,null),(l()(),t.Ib(-1,null,["3rd-Bus"]))],null,null)}function Y(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.a,[m.d,t.k],null,null),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.bus3)})}function ll(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.e,[m.d,t.k],null,null),(l()(),t.Ib(-1,null,["Load"]))],null,null)}function nl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.qb(1,16384,null,0,d.a,[m.d,t.k],null,null),(l()(),t.Ib(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.load)})}function ul(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,v,z)),t.Fb(6144,null,m.k,null,[d.g]),t.qb(2,49152,null,0,d.g,[],null,null)],null,null)}function tl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,w,y)),t.Fb(6144,null,m.m,null,[d.i]),t.qb(2,49152,null,0,d.i,[],null,null)],null,null)}function el(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addBusStopBookmark()&&t),t},q.b,q.a)),t.qb(1,180224,null,0,_.b,[t.k,C.h,[2,x.a]],{color:[0,"color"]},null),(l()(),t.Ib(-1,0,[" Bookmark this Bus Stop "]))],function(l,n){l(n,1,0,"primary")},function(l,n){l(n,0,0,t.Bb(n,1).disabled||null,"NoopAnimations"===t.Bb(n,1)._animationMode)})}function ol(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,94,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.rb(3,0,null,null,77,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""],["width","100"]],null,null,null,S,k)),t.Fb(6144,null,m.o,null,[d.k]),t.qb(5,2342912,null,4,d.k,[t.r,t.h,t.k,[8,null],[2,h.b],p.d,g.a],{dataSource:[0,"dataSource"]},null),t.Gb(603979776,10,{_contentColumnDefs:1}),t.Gb(603979776,11,{_contentRowDefs:1}),t.Gb(603979776,12,{_contentHeaderRowDefs:1}),t.Gb(603979776,13,{_contentFooterRowDefs:1}),(l()(),t.rb(10,0,null,null,12,null,null,null,null,null,null,null)),t.Fb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.qb(12,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Gb(603979776,14,{cell:0}),t.Gb(603979776,15,{headerCell:0}),t.Gb(603979776,16,{footerCell:0}),t.Fb(2048,[[10,4]],m.d,null,[d.c]),(l()(),t.gb(0,null,null,2,null,Q)),t.qb(18,16384,null,0,d.f,[t.L],null,null),t.Fb(2048,[[15,4]],m.j,null,[d.f]),(l()(),t.gb(0,null,null,2,null,H)),t.qb(21,16384,null,0,d.b,[t.L],null,null),t.Fb(2048,[[14,4]],m.b,null,[d.b]),(l()(),t.rb(23,0,null,null,12,null,null,null,null,null,null,null)),t.Fb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.qb(25,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Gb(603979776,17,{cell:0}),t.Gb(603979776,18,{headerCell:0}),t.Gb(603979776,19,{footerCell:0}),t.Fb(2048,[[10,4]],m.d,null,[d.c]),(l()(),t.gb(0,null,null,2,null,U)),t.qb(31,16384,null,0,d.f,[t.L],null,null),t.Fb(2048,[[18,4]],m.j,null,[d.f]),(l()(),t.gb(0,null,null,2,null,V)),t.qb(34,16384,null,0,d.b,[t.L],null,null),t.Fb(2048,[[17,4]],m.b,null,[d.b]),(l()(),t.rb(36,0,null,null,12,null,null,null,null,null,null,null)),t.Fb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.qb(38,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Gb(603979776,20,{cell:0}),t.Gb(603979776,21,{headerCell:0}),t.Gb(603979776,22,{footerCell:0}),t.Fb(2048,[[10,4]],m.d,null,[d.c]),(l()(),t.gb(0,null,null,2,null,W)),t.qb(44,16384,null,0,d.f,[t.L],null,null),t.Fb(2048,[[21,4]],m.j,null,[d.f]),(l()(),t.gb(0,null,null,2,null,X)),t.qb(47,16384,null,0,d.b,[t.L],null,null),t.Fb(2048,[[20,4]],m.b,null,[d.b]),(l()(),t.rb(49,0,null,null,12,null,null,null,null,null,null,null)),t.Fb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.qb(51,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Gb(603979776,23,{cell:0}),t.Gb(603979776,24,{headerCell:0}),t.Gb(603979776,25,{footerCell:0}),t.Fb(2048,[[10,4]],m.d,null,[d.c]),(l()(),t.gb(0,null,null,2,null,Z)),t.qb(57,16384,null,0,d.f,[t.L],null,null),t.Fb(2048,[[24,4]],m.j,null,[d.f]),(l()(),t.gb(0,null,null,2,null,Y)),t.qb(60,16384,null,0,d.b,[t.L],null,null),t.Fb(2048,[[23,4]],m.b,null,[d.b]),(l()(),t.rb(62,0,null,null,12,null,null,null,null,null,null,null)),t.Fb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[d.c]),t.qb(64,16384,null,3,d.c,[],{name:[0,"name"]},null),t.Gb(603979776,26,{cell:0}),t.Gb(603979776,27,{headerCell:0}),t.Gb(603979776,28,{footerCell:0}),t.Fb(2048,[[10,4]],m.d,null,[d.c]),(l()(),t.gb(0,null,null,2,null,ll)),t.qb(70,16384,null,0,d.f,[t.L],null,null),t.Fb(2048,[[27,4]],m.j,null,[d.f]),(l()(),t.gb(0,null,null,2,null,nl)),t.qb(73,16384,null,0,d.b,[t.L],null,null),t.Fb(2048,[[26,4]],m.b,null,[d.b]),(l()(),t.gb(0,null,null,2,null,ul)),t.qb(76,540672,null,0,d.h,[t.L,t.r],{columns:[0,"columns"]},null),t.Fb(2048,[[12,4]],m.l,null,[d.h]),(l()(),t.gb(0,null,null,2,null,tl)),t.qb(79,540672,null,0,d.j,[t.L,t.r],{columns:[0,"columns"]},null),t.Fb(2048,[[11,4]],m.n,null,[d.j]),(l()(),t.rb(81,0,null,null,8,"div",[["class","small mt-1"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Bus Load "])),(l()(),t.rb(83,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),t.rb(84,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["SEA: seats available"])),(l()(),t.rb(86,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["SDA: standing available"])),(l()(),t.rb(88,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["LSD: limited standing"])),(l()(),t.gb(16777216,null,null,1,null,el)),t.qb(91,16384,null,0,p.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(92,0,null,null,2,"button",[["class","my-3"],["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.getBusArrival(e.currentBusStopCode)&&t),t},q.b,q.a)),t.qb(93,180224,null,0,_.b,[t.k,C.h,[2,x.a]],{color:[0,"color"]},null),(l()(),t.Ib(-1,0,[" Refresh "]))],function(l,n){var u=n.component;l(n,5,0,u.busTable),l(n,12,0,"service"),l(n,25,0,"bus1"),l(n,38,0,"bus2"),l(n,51,0,"bus3"),l(n,64,0,"load"),l(n,76,0,u.busTableColumn),l(n,79,0,u.busTableColumn),l(n,91,0,!u.bExistingBookmark),l(n,93,0,"primary")},function(l,n){l(n,2,0,n.component.busStopInfo.Description),l(n,92,0,t.Bb(n,93).disabled||null,"NoopAnimations"===t.Bb(n,93)._animationMode)})}function al(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,7,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,I.d,I.a)),t.qb(1,704512,null,0,F.a,[t.k],null,null),(l()(),t.rb(2,0,null,0,5,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getBusArrival(l.context.$implicit.BusStopCode)&&t),t},q.b,q.a)),t.qb(4,180224,null,0,_.b,[t.k,C.h,[2,x.a]],null,null),(l()(),t.Ib(5,0,[" (",") "," "])),(l()(),t.rb(6,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteBusStopBookmark(l.context.$implicit)&&t),t},null,null)),(l()(),t.Ib(-1,null,["x"]))],null,function(l,n){l(n,3,0,t.Bb(n,4).disabled||null,"NoopAnimations"===t.Bb(n,4)._animationMode),l(n,5,0,n.context.$implicit.BusStopCode,n.context.$implicit.Description)})}function bl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","py-4"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Bus Stop Bookmark"])),(l()(),t.gb(16777216,null,null,1,null,al)),t.qb(4,278528,null,0,p.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.busStopBookmark)},null)}function rl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"mat-spinner",[["class","small mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,N.b,N.a)),t.qb(1,49152,null,0,A.d,[t.k,g.a,[2,p.d],[2,x.a],A.a],null,null)],null,function(l,n){l(n,0,0,t.Bb(n,1)._noopAnimations,t.Bb(n,1).diameter,t.Bb(n,1).diameter)})}function il(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,4,"mat-action-list",[["class","mat-list mat-list-base"],["dense",""]],null,null,null,I.d,I.a)),t.qb(1,704512,null,0,F.a,[t.k],null,null),(l()(),t.rb(2,0,null,0,2,"div",[["mat-list-item",""]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getBusArrival(l.context.$implicit.BusStopCode)&&t),t},null,null)),(l()(),t.Ib(4,null,[" (",") "," @ "," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.BusStopCode,n.context.$implicit.Description,n.context.$implicit.RoadName)})}function sl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,il)),t.qb(2,278528,null,0,p.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.nearbyBusStops)},null)}function cl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,46,"div",[["class","container py-4"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Bus Arrival Time"])),(l()(),t.rb(3,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Get bus arrival time by bus stop code."])),(l()(),t.rb(5,0,null,null,25,"form",[["class","py-4"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Bb(l,7).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Bb(l,7).onReset()&&e),e},null,null)),t.qb(6,16384,null,0,O.A,[],null,null),t.qb(7,4210688,null,0,O.p,[[8,null],[8,null]],null,null),t.Fb(2048,null,O.c,null,[O.p]),t.qb(9,16384,null,0,O.o,[[4,O.c]],null,null),(l()(),t.rb(10,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,G.b,G.a)),t.qb(11,7520256,null,9,L.c,[t.k,t.h,[2,f.j],[2,h.b],[2,L.a],g.a,t.y,[2,x.a]],null,null),t.Gb(603979776,1,{_controlNonStatic:0}),t.Gb(335544320,2,{_controlStatic:0}),t.Gb(603979776,3,{_labelChildNonStatic:0}),t.Gb(335544320,4,{_labelChildStatic:0}),t.Gb(603979776,5,{_placeholderChild:0}),t.Gb(603979776,6,{_errorChildren:1}),t.Gb(603979776,7,{_hintChildren:1}),t.Gb(603979776,8,{_prefixChildren:1}),t.Gb(603979776,9,{_suffixChildren:1}),(l()(),t.rb(21,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.qb(22,16384,[[3,4],[4,4]],0,L.g,[],null,null),(l()(),t.Ib(-1,null,["Bus Stop Code"])),(l()(),t.rb(24,0,[["busStopCode",1]],1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"]],function(l,n,u){var e=!0;return"blur"===n&&(e=!1!==t.Bb(l,25)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==t.Bb(l,25)._focusChanged(!0)&&e),"input"===n&&(e=!1!==t.Bb(l,25)._onInput()&&e),e},null,null)),t.qb(25,999424,null,0,E.a,[t.k,g.a,[8,null],[2,O.p],[2,O.i],f.d,[8,null],D.a,t.y],{type:[0,"type"]},null),t.Fb(2048,[[1,4],[2,4]],L.d,null,[E.a]),(l()(),t.rb(27,0,null,4,3,"button",[["color","primary"],["mat-raised-button",""],["matSuffix",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getBusArrival(t.Bb(l,24).value)&&e),e},q.b,q.a)),t.qb(28,180224,null,0,_.b,[t.k,C.h,[2,x.a]],{color:[0,"color"]},null),t.qb(29,16384,[[9,4]],0,L.h,[],null,null),(l()(),t.Ib(-1,0,[" Get "])),(l()(),t.gb(16777216,null,null,1,null,ol)),t.qb(32,16384,null,0,p.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,bl)),t.qb(34,16384,null,0,p.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(35,0,null,null,3,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleNearbyBusStops()&&t),t},q.b,q.a)),t.qb(36,180224,null,0,_.b,[t.k,C.h,[2,x.a]],{color:[0,"color"]},null),(l()(),t.rb(37,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Toggle nearby Bus Stops"])),(l()(),t.gb(16777216,null,null,1,null,rl)),t.qb(40,16384,null,0,p.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,sl)),t.qb(42,16384,null,0,p.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(43,0,null,null,3,"div",[["class","mt-5 small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Powered by "])),(l()(),t.rb(45,0,null,null,1,"a",[["href","https://data.gov.sg"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Data.gov.sg"]))],function(l,n){var u=n.component;l(n,25,0,"text"),l(n,28,0,"primary"),l(n,32,0,u.busTable.length>0),l(n,34,0,u.busStopBookmark.length),l(n,36,0,"primary"),l(n,40,0,u.bSpinnerShowNearbyBusStops),l(n,42,0,u.bShowNearbyBusStops&&u.nearbyBusStops.length)},function(l,n){l(n,5,0,t.Bb(n,9).ngClassUntouched,t.Bb(n,9).ngClassTouched,t.Bb(n,9).ngClassPristine,t.Bb(n,9).ngClassDirty,t.Bb(n,9).ngClassValid,t.Bb(n,9).ngClassInvalid,t.Bb(n,9).ngClassPending),l(n,10,1,["standard"==t.Bb(n,11).appearance,"fill"==t.Bb(n,11).appearance,"outline"==t.Bb(n,11).appearance,"legacy"==t.Bb(n,11).appearance,t.Bb(n,11)._control.errorState,t.Bb(n,11)._canLabelFloat,t.Bb(n,11)._shouldLabelFloat(),t.Bb(n,11)._hasFloatingLabel(),t.Bb(n,11)._hideControlPlaceholder(),t.Bb(n,11)._control.disabled,t.Bb(n,11)._control.autofilled,t.Bb(n,11)._control.focused,"accent"==t.Bb(n,11).color,"warn"==t.Bb(n,11).color,t.Bb(n,11)._shouldForward("untouched"),t.Bb(n,11)._shouldForward("touched"),t.Bb(n,11)._shouldForward("pristine"),t.Bb(n,11)._shouldForward("dirty"),t.Bb(n,11)._shouldForward("valid"),t.Bb(n,11)._shouldForward("invalid"),t.Bb(n,11)._shouldForward("pending"),!t.Bb(n,11)._animationsEnabled]),l(n,24,0,t.Bb(n,25)._isServer,t.Bb(n,25).id,t.Bb(n,25).placeholder,t.Bb(n,25).disabled,t.Bb(n,25).required,t.Bb(n,25).readonly&&!t.Bb(n,25)._isNativeSelect||null,t.Bb(n,25)._ariaDescribedby||null,t.Bb(n,25).errorState,t.Bb(n,25).required.toString()),l(n,27,0,t.Bb(n,28).disabled||null,"NoopAnimations"===t.Bb(n,28)._animationMode),l(n,35,0,t.Bb(n,36).disabled||null,"NoopAnimations"===t.Bb(n,36)._animationMode)})}function dl(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"bus-arrival-home",[],null,null,null,cl,J)),t.qb(1,114688,null,0,R,[M,P.b],null,null)],function(l,n){l(n,1,0)},null)}var ml=t.nb("bus-arrival-home",R,dl,{},{},[]),pl=u("G0yt"),hl=u("DkaU"),fl=u("QQfA"),Bl=u("/Co4"),gl=u("POq0"),kl=u("qJ5m"),Sl=u("s6ns"),zl=u("821u"),vl=u("gavF"),yl=u("JjoW"),wl=u("Mz6y"),ql=u("OIZN"),_l=u("7kcP"),Cl=u("QRvN"),xl=u("zMNK"),Il=u("hOhj"),Fl=u("KPQW"),Nl=u("lwm9"),Al=u("mkRZ"),Ol=u("igqZ"),Gl=u("r0V8"),Ll=u("kNGD"),El=u("qJ50"),Dl=u("Gi4r"),Kl=u("02hT"),jl=u("5Bek"),Tl=u("c9fC"),Ml=u("FVPZ"),Rl=u("8P0U"),$l=u("elxJ"),Pl=u("BV1i"),Jl=u("lT8R"),Ql=u("pBi1"),Hl=u("rWV4"),Ul=u("BzsH"),Vl=u("AaDx"),Wl=u("5dmV"),Xl=u("PCNd"),Zl=u("iInd");class Yl{}var ln=u("dvZr");u.d(n,"BusArrivalModuleNgFactory",function(){return nn});var nn=t.ob(e,[],function(l){return t.yb([t.zb(512,t.j,t.bb,[[8,[o.a,o.b,o.h,o.i,o.e,o.f,o.g,a.a,b.a,r.b,r.a,i.a,s.a,s.b,c.a,ml]],[3,t.j],t.w]),t.zb(4608,p.n,p.m,[t.t,[2,p.E]]),t.zb(4608,O.x,O.x,[]),t.zb(4608,T.j,T.p,[p.d,t.A,T.n]),t.zb(4608,T.q,T.q,[T.j,T.o]),t.zb(5120,T.a,function(l){return[l]},[T.q]),t.zb(4608,T.m,T.m,[]),t.zb(6144,T.k,null,[T.m]),t.zb(4608,T.i,T.i,[T.k]),t.zb(6144,T.b,null,[T.i]),t.zb(4608,T.f,T.l,[T.b,t.q]),t.zb(4608,T.c,T.c,[T.f]),t.zb(4608,O.e,O.e,[]),t.zb(4608,pl.t,pl.t,[t.j,t.q,pl.fb,pl.u]),t.zb(135680,C.h,C.h,[t.y,g.a]),t.zb(4608,hl.f,hl.f,[t.L]),t.zb(4608,fl.c,fl.c,[fl.i,fl.e,t.j,fl.h,fl.f,t.q,t.y,p.d,h.b,[2,p.h]]),t.zb(5120,fl.j,fl.k,[fl.c]),t.zb(5120,Bl.a,Bl.b,[fl.c]),t.zb(4608,gl.c,gl.c,[]),t.zb(4608,f.d,f.d,[]),t.zb(5120,kl.h,kl.a,[[3,kl.h]]),t.zb(5120,Sl.b,Sl.c,[fl.c]),t.zb(135680,Sl.d,Sl.d,[fl.c,t.q,[2,p.h],[2,Sl.a],Sl.b,[3,Sl.d],fl.e]),t.zb(4608,zl.h,zl.h,[]),t.zb(5120,zl.a,zl.b,[fl.c]),t.zb(5120,vl.a,vl.d,[fl.c]),t.zb(4608,f.c,f.z,[[2,f.h],g.a]),t.zb(5120,yl.a,yl.b,[fl.c]),t.zb(5120,wl.b,wl.c,[fl.c]),t.zb(4608,B.e,f.e,[[2,f.i],[2,f.n]]),t.zb(5120,ql.b,ql.a,[[3,ql.b]]),t.zb(5120,_l.b,_l.a,[[3,_l.b]]),t.zb(4608,j.a,j.a,[p.d,t.A]),t.zb(1073742336,p.c,p.c,[]),t.zb(1073742336,O.w,O.w,[]),t.zb(1073742336,O.j,O.j,[]),t.zb(1073742336,T.e,T.e,[]),t.zb(1073742336,T.d,T.d,[]),t.zb(1073742336,O.t,O.t,[]),t.zb(1073742336,pl.c,pl.c,[]),t.zb(1073742336,pl.f,pl.f,[]),t.zb(1073742336,pl.g,pl.g,[]),t.zb(1073742336,pl.k,pl.k,[]),t.zb(1073742336,pl.l,pl.l,[]),t.zb(1073742336,pl.q,pl.q,[]),t.zb(1073742336,pl.r,pl.r,[]),t.zb(1073742336,pl.v,pl.v,[]),t.zb(1073742336,pl.z,pl.z,[]),t.zb(1073742336,pl.C,pl.C,[]),t.zb(1073742336,pl.F,pl.F,[]),t.zb(1073742336,pl.I,pl.I,[]),t.zb(1073742336,pl.M,pl.M,[]),t.zb(1073742336,pl.Q,pl.Q,[]),t.zb(1073742336,pl.R,pl.R,[]),t.zb(1073742336,pl.S,pl.S,[]),t.zb(1073742336,pl.w,pl.w,[]),t.zb(1073742336,Cl.a,Cl.a,[]),t.zb(1073742336,m.p,m.p,[]),t.zb(1073742336,hl.d,hl.d,[]),t.zb(1073742336,h.a,h.a,[]),t.zb(1073742336,f.n,f.n,[[2,f.f],[2,B.f]]),t.zb(1073742336,g.b,g.b,[]),t.zb(1073742336,f.y,f.y,[]),t.zb(1073742336,f.w,f.w,[]),t.zb(1073742336,f.t,f.t,[]),t.zb(1073742336,xl.g,xl.g,[]),t.zb(1073742336,Il.c,Il.c,[]),t.zb(1073742336,fl.g,fl.g,[]),t.zb(1073742336,Bl.c,Bl.c,[]),t.zb(1073742336,gl.d,gl.d,[]),t.zb(1073742336,C.a,C.a,[]),t.zb(1073742336,Fl.b,Fl.b,[]),t.zb(1073742336,Nl.c,Nl.c,[]),t.zb(1073742336,_.c,_.c,[]),t.zb(1073742336,Al.a,Al.a,[]),t.zb(1073742336,Ol.f,Ol.f,[]),t.zb(1073742336,Gl.d,Gl.d,[]),t.zb(1073742336,Gl.c,Gl.c,[]),t.zb(1073742336,Ll.b,Ll.b,[]),t.zb(1073742336,El.e,El.e,[]),t.zb(1073742336,Dl.c,Dl.c,[]),t.zb(1073742336,kl.i,kl.i,[]),t.zb(1073742336,Sl.g,Sl.g,[]),t.zb(1073742336,zl.i,zl.i,[]),t.zb(1073742336,Kl.b,Kl.b,[]),t.zb(1073742336,jl.c,jl.c,[]),t.zb(1073742336,Tl.a,Tl.a,[]),t.zb(1073742336,L.e,L.e,[]),t.zb(1073742336,f.p,f.p,[]),t.zb(1073742336,Ml.a,Ml.a,[]),t.zb(1073742336,D.c,D.c,[]),t.zb(1073742336,E.b,E.b,[]),t.zb(1073742336,F.d,F.d,[]),t.zb(1073742336,vl.c,vl.c,[]),t.zb(1073742336,vl.b,vl.b,[]),t.zb(1073742336,f.A,f.A,[]),t.zb(1073742336,f.q,f.q,[]),t.zb(1073742336,yl.d,yl.d,[]),t.zb(1073742336,wl.e,wl.e,[]),t.zb(1073742336,ql.c,ql.c,[]),t.zb(1073742336,Rl.a,Rl.a,[]),t.zb(1073742336,A.c,A.c,[]),t.zb(1073742336,$l.a,$l.a,[]),t.zb(1073742336,Pl.h,Pl.h,[]),t.zb(1073742336,Jl.a,Jl.a,[]),t.zb(1073742336,Ql.a,Ql.a,[]),t.zb(1073742336,P.e,P.e,[]),t.zb(1073742336,_l.c,_l.c,[]),t.zb(1073742336,d.l,d.l,[]),t.zb(1073742336,Hl.a,Hl.a,[]),t.zb(1073742336,Ul.b,Ul.b,[]),t.zb(1073742336,Vl.d,Vl.d,[]),t.zb(1073742336,Wl.a,Wl.a,[]),t.zb(1073742336,Xl.a,Xl.a,[]),t.zb(1073742336,Zl.n,Zl.n,[[2,Zl.s],[2,Zl.k]]),t.zb(1073742336,Yl,Yl,[]),t.zb(1073742336,e,e,[]),t.zb(256,T.n,"XSRF-TOKEN",[]),t.zb(256,T.o,"X-XSRF-TOKEN",[]),t.zb(256,Ll.a,{separatorKeyCodes:[ln.f]},[]),t.zb(256,f.g,f.k,[]),t.zb(1024,Zl.i,function(){return[[{path:"",component:R}]]},[])])})}}]);