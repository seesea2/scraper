(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7n+g":function(l,n,t){"use strict";t.r(n);var i,a=t("8Y7J"),u=t("IheW"),r=((i=function(){function l(l){this.httpClient=l}return l.prototype.getOxfordDefinition=function(l){return this.httpClient.get("/api/dictionary/oxford/"+l)},l}()).ngInjectableDef=a.Rb({factory:function(){return new i(a.Sb(u.c))},token:i,providedIn:"root"}),i),c=function(){function l(l){this.dictionaryService=l}return l.prototype.ngOnInit=function(){this.checkEntriesResult={lexicalEntries:[]},this.errMsg="",this.bChecking=!1},l.prototype.getOxfordDefinition=function(l){var n=this;if(!(l||"").trim())return this.errMsg="Please input a word.";this.bChecking=!0,this.dictionaryService.getOxfordDefinition(l.trim().toLowerCase()).subscribe((function(l){n.checkEntriesResult=l,n.errMsg="",n.bChecking=!1}),(function(l){n.checkEntriesResult={lexicalEntries:[]},n.errMsg=l,n.bChecking=!1}))},l.prototype.playAudio=function(l){var n=new Audio;n.src=l,n.load(),n.play()},l}(),e=function(){},b=t("9AJC"),o=t("yWMr"),d=t("t68o"),s=t("zbXB"),m=t("NcP4"),p=t("xYTU"),C=t("pMnS"),f=t("NvT6"),g=t("W5yJ"),h=t("/HVE"),x=t("SVse"),k=t("omvX"),v=t("HsOI"),y=t("lzlj"),w=t("igqZ"),O=a.qb({encapsulation:0,styles:[[""]],data:{}});function E(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,f.b,f.a)),a.rb(2,114688,null,0,g.d,[a.k,h.a,[2,x.d],[2,k.a],g.a],null,null)],(function(l,n){l(n,2,0)}),(function(l,n){l(n,1,0,a.Eb(n,2)._noopAnimations,a.Eb(n,2).diameter,a.Eb(n,2).diameter)}))}function I(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function L(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.Lb(2,null,["",""])),(l()(),a.Lb(-1,null,[" ["])),(l()(),a.sb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.Lb(5,null,["",""])),(l()(),a.Lb(-1,null,["] "])),(l()(),a.sb(7,0,null,null,0,"i",[["class","fa fa-play"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.playAudio(null==l.context.$implicit?null:null==l.context.$implicit.pronunciations[0]?null:l.context.$implicit.pronunciations[0].audioFile)&&i),i}),null,null)),(l()(),a.sb(8,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),a.hb(16777216,null,null,1,null,I)),a.rb(10,278528,null,0,x.k,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.context.$implicit.entries)}),(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.lexicalCategory),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.pronunciations[0].phoneticSpelling)}))}function N(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Lb(-1,null,["Definitions:"])),(l()(),a.hb(16777216,null,null,1,null,L)),a.rb(4,278528,null,0,x.k,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.checkEntriesResult.lexicalEntries)}),null)}function j(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,null,0,v.b,[],null,null),(l()(),a.Lb(2,null,["",""]))],null,(function(l,n){var t=n.component;l(n,0,0,a.Eb(n,1).id),l(n,2,0,t.errMsg)}))}function q(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),a.hb(16777216,null,null,1,null,N)),a.rb(2,16384,null,0,x.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,j)),a.rb(4,16384,null,0,x.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,null==t.checkEntriesResult?null:null==t.checkEntriesResult.lexicalEntries?null:t.checkEntriesResult.lexicalEntries.length),l(n,4,0,t.errMsg)}),null)}function z(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,18,"div",[["class","bg-light"]],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,17,"section",[["class","container py-4 "]],null,null,null,null,null)),(l()(),a.sb(2,0,null,null,16,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,y.b,y.a)),a.rb(3,49152,null,0,w.a,[[2,k.a]],null,null),(l()(),a.sb(4,0,null,0,3,"mat-card-title",[["class","mt-3 mb-4 mat-card-title"]],null,null,null,null,null)),a.rb(5,16384,null,0,w.h,[],null,null),(l()(),a.sb(6,0,null,null,1,"div",[["class","col-sm-12 col-md-4"]],null,null,null,null,null)),(l()(),a.sb(7,0,null,null,0,"img",[["class","w-100"],["src","/assets/oxford/PBO_blue-10359bc2ad64e89d.png"]],null,null,null,null,null)),(l()(),a.sb(8,0,null,0,10,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.rb(9,16384,null,0,w.c,[],null,null),(l()(),a.sb(10,0,null,null,4,"div",[["class","col-sm-12 col-md-4 mb-4"]],null,null,null,null,null)),(l()(),a.sb(11,0,null,null,3,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),a.sb(12,0,[["oxfordInput",1]],null,0,"input",[["class","form-control"],["placeholder","word to check"],["type","text"]],null,[[null,"keyup.enter"]],(function(l,n,t){var i=!0;return"keyup.enter"===n&&(i=!1!==l.component.getOxfordDefinition(a.Eb(l,12).value)&&i),i}),null,null)),(l()(),a.sb(13,0,null,null,1,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),a.sb(14,0,null,null,0,"button",[["class","btn btn-primary fa fa-search"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.getOxfordDefinition(a.Eb(l,12).value)&&i),i}),null,null)),(l()(),a.hb(16777216,null,null,1,null,E)),a.rb(16,16384,null,0,x.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,q)),a.rb(18,16384,null,0,x.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,16,0,t.bChecking),l(n,18,0,!t.bChecking)}),(function(l,n){l(n,2,0,"NoopAnimations"===a.Eb(n,3)._animationMode)}))}var R=a.ob("app-oxford",c,(function(l){return a.Nb(0,[(l()(),a.sb(0,0,null,null,1,"app-oxford",[],null,null,null,z,O)),a.rb(1,114688,null,0,c,[r],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),F=t("s7LF"),D=t("G0yt"),M=t("5GAg"),A=t("DkaU"),P=t("QQfA"),J=t("IP0z"),V=t("/Co4"),$=t("POq0"),S=t("Xd0L"),W=t("qJ5m"),X=t("s6ns"),B=t("821u"),U=t("gavF"),Z=t("JjoW"),Q=t("Mz6y"),T=t("cUpR"),_=t("OIZN"),H=t("7kcP"),K=t("jmvC"),G=t("QRvN"),Y=t("zQui"),ll=t("zMNK"),nl=t("hOhj"),tl=t("KPQW"),il=t("lwm9"),al=t("Fwaw"),ul=t("mkRZ"),rl=t("r0V8"),cl=t("kNGD"),el=t("qJ50"),bl=t("Gi4r"),ol=t("02hT"),dl=t("5Bek"),sl=t("c9fC"),ml=t("FVPZ"),pl=t("oapL"),Cl=t("ZwOa"),fl=t("Q+lL"),gl=t("8P0U"),hl=t("elxJ"),xl=t("BV1i"),kl=t("lT8R"),vl=t("pBi1"),yl=t("dFDH"),wl=t("8rEH"),Ol=t("rWV4"),El=t("BzsH"),Il=t("AaDx"),Ll=t("5dmV"),Nl=t("PCNd"),jl=t("iInd"),ql=t("dvZr");t.d(n,"DictionaryModuleNgFactory",(function(){return zl}));var zl=a.pb(e,[],(function(l){return a.Bb([a.Cb(512,a.j,a.ab,[[8,[b.a,b.b,b.h,b.i,b.e,b.f,b.g,o.a,d.a,s.b,s.a,m.a,p.a,p.b,C.a,R]],[3,a.j],a.w]),a.Cb(4608,x.n,x.m,[a.t,[2,x.F]]),a.Cb(4608,F.x,F.x,[]),a.Cb(4608,u.j,u.p,[x.d,a.A,u.n]),a.Cb(4608,u.q,u.q,[u.j,u.o]),a.Cb(5120,u.a,(function(l){return[l]}),[u.q]),a.Cb(4608,u.m,u.m,[]),a.Cb(6144,u.k,null,[u.m]),a.Cb(4608,u.i,u.i,[u.k]),a.Cb(6144,u.b,null,[u.i]),a.Cb(4608,u.f,u.l,[u.b,a.q]),a.Cb(4608,u.c,u.c,[u.f]),a.Cb(4608,F.e,F.e,[]),a.Cb(4608,D.t,D.t,[a.j,a.q,D.jb,D.u]),a.Cb(135680,M.h,M.h,[a.y,h.a]),a.Cb(4608,A.f,A.f,[a.L]),a.Cb(4608,P.c,P.c,[P.i,P.e,a.j,P.h,P.f,a.q,a.y,x.d,J.b,[2,x.h]]),a.Cb(5120,P.j,P.k,[P.c]),a.Cb(5120,V.a,V.b,[P.c]),a.Cb(4608,$.c,$.c,[]),a.Cb(4608,S.d,S.d,[]),a.Cb(5120,W.h,W.a,[[3,W.h]]),a.Cb(5120,X.b,X.c,[P.c]),a.Cb(135680,X.d,X.d,[P.c,a.q,[2,x.h],[2,X.a],X.b,[3,X.d],P.e]),a.Cb(4608,B.h,B.h,[]),a.Cb(5120,B.a,B.b,[P.c]),a.Cb(5120,U.a,U.d,[P.c]),a.Cb(4608,S.c,S.z,[[2,S.h],h.a]),a.Cb(5120,Z.a,Z.b,[P.c]),a.Cb(5120,Q.b,Q.c,[P.c]),a.Cb(4608,T.e,S.e,[[2,S.i],[2,S.n]]),a.Cb(5120,_.b,_.a,[[3,_.b]]),a.Cb(5120,H.b,H.a,[[3,H.b]]),a.Cb(4608,K.a,K.a,[x.d,a.A]),a.Cb(1073742336,x.c,x.c,[]),a.Cb(1073742336,F.w,F.w,[]),a.Cb(1073742336,F.j,F.j,[]),a.Cb(1073742336,u.e,u.e,[]),a.Cb(1073742336,u.d,u.d,[]),a.Cb(1073742336,F.t,F.t,[]),a.Cb(1073742336,D.c,D.c,[]),a.Cb(1073742336,D.f,D.f,[]),a.Cb(1073742336,D.g,D.g,[]),a.Cb(1073742336,D.k,D.k,[]),a.Cb(1073742336,D.l,D.l,[]),a.Cb(1073742336,D.q,D.q,[]),a.Cb(1073742336,D.r,D.r,[]),a.Cb(1073742336,D.v,D.v,[]),a.Cb(1073742336,D.z,D.z,[]),a.Cb(1073742336,D.C,D.C,[]),a.Cb(1073742336,D.F,D.F,[]),a.Cb(1073742336,D.I,D.I,[]),a.Cb(1073742336,D.M,D.M,[]),a.Cb(1073742336,D.R,D.R,[]),a.Cb(1073742336,D.U,D.U,[]),a.Cb(1073742336,D.V,D.V,[]),a.Cb(1073742336,D.W,D.W,[]),a.Cb(1073742336,D.w,D.w,[]),a.Cb(1073742336,G.a,G.a,[]),a.Cb(1073742336,Y.p,Y.p,[]),a.Cb(1073742336,A.d,A.d,[]),a.Cb(1073742336,J.a,J.a,[]),a.Cb(1073742336,S.n,S.n,[[2,S.f],[2,T.f]]),a.Cb(1073742336,h.b,h.b,[]),a.Cb(1073742336,S.y,S.y,[]),a.Cb(1073742336,S.w,S.w,[]),a.Cb(1073742336,S.t,S.t,[]),a.Cb(1073742336,ll.g,ll.g,[]),a.Cb(1073742336,nl.c,nl.c,[]),a.Cb(1073742336,P.g,P.g,[]),a.Cb(1073742336,V.c,V.c,[]),a.Cb(1073742336,$.d,$.d,[]),a.Cb(1073742336,M.a,M.a,[]),a.Cb(1073742336,tl.b,tl.b,[]),a.Cb(1073742336,il.c,il.c,[]),a.Cb(1073742336,al.c,al.c,[]),a.Cb(1073742336,ul.a,ul.a,[]),a.Cb(1073742336,w.f,w.f,[]),a.Cb(1073742336,rl.d,rl.d,[]),a.Cb(1073742336,rl.c,rl.c,[]),a.Cb(1073742336,cl.b,cl.b,[]),a.Cb(1073742336,el.e,el.e,[]),a.Cb(1073742336,bl.c,bl.c,[]),a.Cb(1073742336,W.i,W.i,[]),a.Cb(1073742336,X.g,X.g,[]),a.Cb(1073742336,B.i,B.i,[]),a.Cb(1073742336,ol.b,ol.b,[]),a.Cb(1073742336,dl.c,dl.c,[]),a.Cb(1073742336,sl.a,sl.a,[]),a.Cb(1073742336,v.e,v.e,[]),a.Cb(1073742336,S.p,S.p,[]),a.Cb(1073742336,ml.a,ml.a,[]),a.Cb(1073742336,pl.c,pl.c,[]),a.Cb(1073742336,Cl.b,Cl.b,[]),a.Cb(1073742336,fl.d,fl.d,[]),a.Cb(1073742336,U.c,U.c,[]),a.Cb(1073742336,U.b,U.b,[]),a.Cb(1073742336,S.A,S.A,[]),a.Cb(1073742336,S.q,S.q,[]),a.Cb(1073742336,Z.d,Z.d,[]),a.Cb(1073742336,Q.e,Q.e,[]),a.Cb(1073742336,_.c,_.c,[]),a.Cb(1073742336,gl.a,gl.a,[]),a.Cb(1073742336,g.c,g.c,[]),a.Cb(1073742336,hl.a,hl.a,[]),a.Cb(1073742336,xl.h,xl.h,[]),a.Cb(1073742336,kl.a,kl.a,[]),a.Cb(1073742336,vl.b,vl.b,[]),a.Cb(1073742336,vl.a,vl.a,[]),a.Cb(1073742336,yl.e,yl.e,[]),a.Cb(1073742336,H.c,H.c,[]),a.Cb(1073742336,wl.l,wl.l,[]),a.Cb(1073742336,Ol.a,Ol.a,[]),a.Cb(1073742336,El.b,El.b,[]),a.Cb(1073742336,Il.d,Il.d,[]),a.Cb(1073742336,Ll.a,Ll.a,[]),a.Cb(1073742336,Nl.a,Nl.a,[]),a.Cb(1073742336,jl.n,jl.n,[[2,jl.s],[2,jl.k]]),a.Cb(1073742336,e,e,[]),a.Cb(256,u.n,"XSRF-TOKEN",[]),a.Cb(256,u.o,"X-XSRF-TOKEN",[]),a.Cb(256,cl.a,{separatorKeyCodes:[ql.f]},[]),a.Cb(256,S.g,S.k,[]),a.Cb(1024,jl.i,(function(){return[[{path:"",component:c}]]}),[])])}))},lzlj:function(l,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return u}));var i=t("8Y7J"),a=(t("igqZ"),t("IP0z"),t("Xd0L"),t("cUpR"),t("omvX"),i.qb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function u(l){return i.Nb(2,[i.Db(null,0),i.Db(null,1)],null,null)}}}]);