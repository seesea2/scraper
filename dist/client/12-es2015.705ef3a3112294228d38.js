(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7n+g":function(l,n,t){"use strict";t.r(n);var i=t("8Y7J"),a=t("IheW");class u{constructor(l){this.httpClient=l}getOxfordDefinition(l){return this.httpClient.get(`/api/dictionary/oxford/${l}`)}}u.ngInjectableDef=i.Mb({factory:function(){return new u(i.Qb(a.c))},token:u,providedIn:"root"});class r{constructor(l){this.dictionaryService=l}ngOnInit(){this.checkEntriesResult={lexicalEntries:[]},this.errMsg="",this.bChecking=!1}getOxfordDefinition(l){if(!(l||"").trim())return this.errMsg="Please input a word.";this.bChecking=!0,this.dictionaryService.getOxfordDefinition(l.trim().toLowerCase()).subscribe(l=>{this.checkEntriesResult=l,this.errMsg="",this.bChecking=!1},l=>{this.checkEntriesResult={lexicalEntries:[]},this.errMsg=l,this.bChecking=!1})}playAudio(l){let n=new Audio;n.src=l,n.load(),n.play()}}class c{}var b=t("9AJC"),e=t("yWMr"),o=t("t68o"),d=t("zbXB"),s=t("NcP4"),m=t("xYTU"),p=t("pMnS"),z=t("NvT6"),g=t("W5yJ"),f=t("/HVE"),h=t("SVse"),x=t("omvX"),v=t("HsOI"),k=t("lzlj"),y=t("igqZ"),w=i.pb({encapsulation:0,styles:[[""]],data:{}});function q(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,z.b,z.a)),i.qb(2,49152,null,0,g.d,[i.k,f.a,[2,h.d],[2,x.a],g.a],null,null)],null,function(l,n){l(n,1,0,i.Bb(n,2)._noopAnimations,i.Bb(n,2).diameter,i.Bb(n,2).diameter)})}function I(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i.Ib(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function O(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.Ib(2,null,["",""])),(l()(),i.Ib(-1,null,[" ["])),(l()(),i.rb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.Ib(5,null,["",""])),(l()(),i.Ib(-1,null,["] "])),(l()(),i.rb(7,0,null,null,0,"i",[["class","fa fa-play"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.playAudio(null==l.context.$implicit?null:null==l.context.$implicit.pronunciations[0]?null:l.context.$implicit.pronunciations[0].audioFile)&&i),i},null,null)),(l()(),i.rb(8,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,I)),i.qb(10,278528,null,0,h.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.context.$implicit.entries)},function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.lexicalCategory),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.pronunciations[0].phoneticSpelling)})}function j(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Definitions:"])),(l()(),i.gb(16777216,null,null,1,null,O)),i.qb(4,278528,null,0,h.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.checkEntriesResult.lexicalEntries)},null)}function C(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),i.qb(1,16384,null,0,v.b,[],null,null),(l()(),i.Ib(2,null,["",""]))],null,function(l,n){var t=n.component;l(n,0,0,i.Bb(n,1).id),l(n,2,0,t.errMsg)})}function E(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,j)),i.qb(2,16384,null,0,h.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,null,1,null,C)),i.qb(4,16384,null,0,h.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,(null==t.checkEntriesResult.lexicalEntries?null:t.checkEntriesResult.lexicalEntries.length)>0),l(n,4,0,t.errMsg)},null)}function F(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,18,"div",[["class","bg-light"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,17,"section",[["class","container py-4 "]],null,null,null,null,null)),(l()(),i.rb(2,0,null,null,16,"mat-card",[["class","mat-card"]],null,null,null,k.b,k.a)),i.qb(3,49152,null,0,y.a,[],null,null),(l()(),i.rb(4,0,null,0,3,"mat-card-title",[["class","mt-3 mb-4 mat-card-title"]],null,null,null,null,null)),i.qb(5,16384,null,0,y.h,[],null,null),(l()(),i.rb(6,0,null,null,1,"div",[["class","col-sm-12 col-md-4"]],null,null,null,null,null)),(l()(),i.rb(7,0,null,null,0,"img",[["class","w-100"],["src","/assets/oxford/PBO_blue-10359bc2ad64e89d.png"]],null,null,null,null,null)),(l()(),i.rb(8,0,null,0,10,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.qb(9,16384,null,0,y.c,[],null,null),(l()(),i.rb(10,0,null,null,4,"div",[["class","col-sm-12 col-md-4 mb-4"]],null,null,null,null,null)),(l()(),i.rb(11,0,null,null,3,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),i.rb(12,0,[["oxfordInput",1]],null,0,"input",[["class","form-control"],["placeholder","word to check"],["type","text"]],null,[[null,"keyup.enter"]],function(l,n,t){var a=!0;return"keyup.enter"===n&&(a=!1!==l.component.getOxfordDefinition(i.Bb(l,12).value)&&a),a},null,null)),(l()(),i.rb(13,0,null,null,1,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),i.rb(14,0,null,null,0,"button",[["class","btn btn-primary fa fa-search"],["type","button"]],null,[[null,"click"]],function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.getOxfordDefinition(i.Bb(l,12).value)&&a),a},null,null)),(l()(),i.gb(16777216,null,null,1,null,q)),i.qb(16,16384,null,0,h.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,null,1,null,E)),i.qb(18,16384,null,0,h.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,16,0,t.bChecking),l(n,18,0,!t.bChecking)},null)}function R(l){return i.Kb(0,[(l()(),i.rb(0,0,null,null,1,"app-oxford",[],null,null,null,F,w)),i.qb(1,114688,null,0,r,[u],null,null)],function(l,n){l(n,1,0)},null)}var A=i.nb("app-oxford",r,R,{},{},[]),K=t("s7LF"),M=t("G0yt"),L=t("5GAg"),B=t("DkaU"),D=t("QQfA"),P=t("IP0z"),J=t("/Co4"),N=t("POq0"),$=t("Xd0L"),Q=t("qJ5m"),S=t("s6ns"),V=t("821u"),X=t("gavF"),Z=t("JjoW"),T=t("Mz6y"),W=t("cUpR"),H=t("OIZN"),U=t("7kcP"),G=t("jmvC"),Y=t("QRvN"),_=t("zQui"),ll=t("zMNK"),nl=t("hOhj"),tl=t("KPQW"),il=t("lwm9"),al=t("Fwaw"),ul=t("mkRZ"),rl=t("r0V8"),cl=t("kNGD"),bl=t("qJ50"),el=t("Gi4r"),ol=t("02hT"),dl=t("5Bek"),sl=t("c9fC"),ml=t("FVPZ"),pl=t("oapL"),zl=t("ZwOa"),gl=t("Q+lL"),fl=t("8P0U"),hl=t("elxJ"),xl=t("BV1i"),vl=t("lT8R"),kl=t("pBi1"),yl=t("dFDH"),wl=t("8rEH"),ql=t("rWV4"),Il=t("BzsH"),Ol=t("AaDx"),jl=t("5dmV"),Cl=t("PCNd"),El=t("iInd"),Fl=t("dvZr");t.d(n,"DictionaryModuleNgFactory",function(){return Rl});var Rl=i.ob(c,[],function(l){return i.yb([i.zb(512,i.j,i.bb,[[8,[b.a,b.b,b.h,b.i,b.e,b.f,b.g,e.a,o.a,d.b,d.a,s.a,m.a,m.b,p.a,A]],[3,i.j],i.w]),i.zb(4608,h.n,h.m,[i.t,[2,h.E]]),i.zb(4608,K.x,K.x,[]),i.zb(4608,a.j,a.p,[h.d,i.A,a.n]),i.zb(4608,a.q,a.q,[a.j,a.o]),i.zb(5120,a.a,function(l){return[l]},[a.q]),i.zb(4608,a.m,a.m,[]),i.zb(6144,a.k,null,[a.m]),i.zb(4608,a.i,a.i,[a.k]),i.zb(6144,a.b,null,[a.i]),i.zb(4608,a.f,a.l,[a.b,i.q]),i.zb(4608,a.c,a.c,[a.f]),i.zb(4608,K.e,K.e,[]),i.zb(4608,M.t,M.t,[i.j,i.q,M.fb,M.u]),i.zb(135680,L.h,L.h,[i.y,f.a]),i.zb(4608,B.f,B.f,[i.L]),i.zb(4608,D.c,D.c,[D.i,D.e,i.j,D.h,D.f,i.q,i.y,h.d,P.b,[2,h.h]]),i.zb(5120,D.j,D.k,[D.c]),i.zb(5120,J.a,J.b,[D.c]),i.zb(4608,N.c,N.c,[]),i.zb(4608,$.d,$.d,[]),i.zb(5120,Q.h,Q.a,[[3,Q.h]]),i.zb(5120,S.b,S.c,[D.c]),i.zb(135680,S.d,S.d,[D.c,i.q,[2,h.h],[2,S.a],S.b,[3,S.d],D.e]),i.zb(4608,V.h,V.h,[]),i.zb(5120,V.a,V.b,[D.c]),i.zb(5120,X.a,X.d,[D.c]),i.zb(4608,$.c,$.z,[[2,$.h],f.a]),i.zb(5120,Z.a,Z.b,[D.c]),i.zb(5120,T.b,T.c,[D.c]),i.zb(4608,W.e,$.e,[[2,$.i],[2,$.n]]),i.zb(5120,H.b,H.a,[[3,H.b]]),i.zb(5120,U.b,U.a,[[3,U.b]]),i.zb(4608,G.a,G.a,[h.d,i.A]),i.zb(1073742336,h.c,h.c,[]),i.zb(1073742336,K.w,K.w,[]),i.zb(1073742336,K.j,K.j,[]),i.zb(1073742336,a.e,a.e,[]),i.zb(1073742336,a.d,a.d,[]),i.zb(1073742336,K.t,K.t,[]),i.zb(1073742336,M.c,M.c,[]),i.zb(1073742336,M.f,M.f,[]),i.zb(1073742336,M.g,M.g,[]),i.zb(1073742336,M.k,M.k,[]),i.zb(1073742336,M.l,M.l,[]),i.zb(1073742336,M.q,M.q,[]),i.zb(1073742336,M.r,M.r,[]),i.zb(1073742336,M.v,M.v,[]),i.zb(1073742336,M.z,M.z,[]),i.zb(1073742336,M.C,M.C,[]),i.zb(1073742336,M.F,M.F,[]),i.zb(1073742336,M.I,M.I,[]),i.zb(1073742336,M.M,M.M,[]),i.zb(1073742336,M.Q,M.Q,[]),i.zb(1073742336,M.R,M.R,[]),i.zb(1073742336,M.S,M.S,[]),i.zb(1073742336,M.w,M.w,[]),i.zb(1073742336,Y.a,Y.a,[]),i.zb(1073742336,_.p,_.p,[]),i.zb(1073742336,B.d,B.d,[]),i.zb(1073742336,P.a,P.a,[]),i.zb(1073742336,$.n,$.n,[[2,$.f],[2,W.f]]),i.zb(1073742336,f.b,f.b,[]),i.zb(1073742336,$.y,$.y,[]),i.zb(1073742336,$.w,$.w,[]),i.zb(1073742336,$.t,$.t,[]),i.zb(1073742336,ll.g,ll.g,[]),i.zb(1073742336,nl.c,nl.c,[]),i.zb(1073742336,D.g,D.g,[]),i.zb(1073742336,J.c,J.c,[]),i.zb(1073742336,N.d,N.d,[]),i.zb(1073742336,L.a,L.a,[]),i.zb(1073742336,tl.b,tl.b,[]),i.zb(1073742336,il.c,il.c,[]),i.zb(1073742336,al.c,al.c,[]),i.zb(1073742336,ul.a,ul.a,[]),i.zb(1073742336,y.f,y.f,[]),i.zb(1073742336,rl.d,rl.d,[]),i.zb(1073742336,rl.c,rl.c,[]),i.zb(1073742336,cl.b,cl.b,[]),i.zb(1073742336,bl.e,bl.e,[]),i.zb(1073742336,el.c,el.c,[]),i.zb(1073742336,Q.i,Q.i,[]),i.zb(1073742336,S.g,S.g,[]),i.zb(1073742336,V.i,V.i,[]),i.zb(1073742336,ol.b,ol.b,[]),i.zb(1073742336,dl.c,dl.c,[]),i.zb(1073742336,sl.a,sl.a,[]),i.zb(1073742336,v.e,v.e,[]),i.zb(1073742336,$.p,$.p,[]),i.zb(1073742336,ml.a,ml.a,[]),i.zb(1073742336,pl.c,pl.c,[]),i.zb(1073742336,zl.b,zl.b,[]),i.zb(1073742336,gl.d,gl.d,[]),i.zb(1073742336,X.c,X.c,[]),i.zb(1073742336,X.b,X.b,[]),i.zb(1073742336,$.A,$.A,[]),i.zb(1073742336,$.q,$.q,[]),i.zb(1073742336,Z.d,Z.d,[]),i.zb(1073742336,T.e,T.e,[]),i.zb(1073742336,H.c,H.c,[]),i.zb(1073742336,fl.a,fl.a,[]),i.zb(1073742336,g.c,g.c,[]),i.zb(1073742336,hl.a,hl.a,[]),i.zb(1073742336,xl.h,xl.h,[]),i.zb(1073742336,vl.a,vl.a,[]),i.zb(1073742336,kl.a,kl.a,[]),i.zb(1073742336,yl.e,yl.e,[]),i.zb(1073742336,U.c,U.c,[]),i.zb(1073742336,wl.l,wl.l,[]),i.zb(1073742336,ql.a,ql.a,[]),i.zb(1073742336,Il.b,Il.b,[]),i.zb(1073742336,Ol.d,Ol.d,[]),i.zb(1073742336,jl.a,jl.a,[]),i.zb(1073742336,Cl.a,Cl.a,[]),i.zb(1073742336,El.n,El.n,[[2,El.s],[2,El.k]]),i.zb(1073742336,c,c,[]),i.zb(256,a.n,"XSRF-TOKEN",[]),i.zb(256,a.o,"X-XSRF-TOKEN",[]),i.zb(256,cl.a,{separatorKeyCodes:[Fl.f]},[]),i.zb(256,$.g,$.k,[]),i.zb(1024,El.i,function(){return[[{path:"",component:r}]]},[])])})},lzlj:function(l,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u});var i=t("8Y7J"),a=(t("igqZ"),t("IP0z"),t("Xd0L"),t("cUpR"),i.pb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function u(l){return i.Kb(2,[i.Ab(null,0),i.Ab(null,1)],null,null)}}}]);