(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7n+g":function(l,n,t){"use strict";t.r(n);var i=t("8Y7J");class a{}var u=t("yWMr"),r=t("t68o"),e=t("NcP4"),c=t("xYTU"),o=t("fNgX"),b=t("pMnS"),s=t("NvT6"),d=t("W5yJ"),m=t("/HVE"),p=t("SVse"),g=t("omvX"),f=t("Nv++"),h=t("cUpR"),C=t("HsOI"),x=t("lzlj"),v=t("igqZ"),y=t("wHSu"),w=t("IheW");let k=(()=>{class l{constructor(l){this.httpClient=l}getOxfordDefinition(l){return this.httpClient.get(`/api/dictionary/oxford/${l}`)}}return l.ngInjectableDef=i.Rb({factory:function(){return new l(i.Sb(w.c))},token:l,providedIn:"root"}),l})();class E{constructor(l){this.dictionaryService=l,this.faPlay=y.u}ngOnInit(){this.checkEntriesResult={lexicalEntries:[]},this.errMsg="",this.inquiring=!1}getOxfordDefinition(l){if(this.errMsg="",this.checkEntriesResult={lexicalEntries:[]},!(l||"").trim())return this.errMsg="Please input a word.";this.inquiring=!0,this.dictionaryService.getOxfordDefinition(l.trim().toLowerCase()).subscribe(l=>{this.checkEntriesResult=l,this.inquiring=!1},l=>{this.checkEntriesResult={lexicalEntries:[]},this.errMsg=l.result,this.inquiring=!1})}playAudio(l){let n=new Audio;n.src=l,n.load(),n.play()}}var L=i.qb({encapsulation:0,styles:[[""]],data:{}});function O(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"mat-spinner",[["class","ml-auto mr-auto mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,s.b,s.a)),i.rb(2,114688,null,0,d.d,[i.k,m.a,[2,p.d],[2,g.a],d.a],null,null)],(function(l,n){l(n,2,0)}),(function(l,n){l(n,1,0,i.Eb(n,2)._noopAnimations,i.Eb(n,2).diameter,i.Eb(n,2).diameter)}))}function I(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),i.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function N(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.Lb(2,null,["",""])),(l()(),i.Lb(-1,null,[" ["])),(l()(),i.sb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.Lb(5,null,["",""])),(l()(),i.Lb(-1,null,["] "])),(l()(),i.sb(7,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.playAudio(null==l.context.$implicit?null:null==l.context.$implicit.pronunciations[0]?null:l.context.$implicit.pronunciations[0].audioFile)&&i),i}),o.d,o.c)),i.rb(8,573440,null,0,f.c,[h.b,f.a,f.d,[2,f.i]],{icon:[0,"icon"]},null),(l()(),i.sb(9,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),i.hb(16777216,null,null,1,null,I)),i.rb(11,278528,null,0,p.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,8,0,n.component.faPlay),l(n,11,0,n.context.$implicit.entries)}),(function(l,n){l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.lexicalCategory),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.pronunciations[0].phoneticSpelling),l(n,7,0,i.Eb(n,8).title,i.Eb(n,8).renderedIconHTML)}))}function j(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Lb(-1,null,["Definitions:"])),(l()(),i.hb(16777216,null,null,1,null,N)),i.rb(4,278528,null,0,p.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.checkEntriesResult.lexicalEntries)}),null)}function q(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.hb(16777216,null,null,1,null,j)),i.rb(2,16384,null,0,p.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,null==t.checkEntriesResult?null:null==t.checkEntriesResult.lexicalEntries?null:t.checkEntriesResult.lexicalEntries.length)}),null)}function M(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),i.rb(1,16384,null,0,C.b,[],null,null),(l()(),i.Lb(2,null,["",""]))],null,(function(l,n){var t=n.component;l(n,0,0,i.Eb(n,1).id),l(n,2,0,t.errMsg)}))}function z(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,23,"div",[["class","bg-light"]],null,null,null,null,null)),(l()(),i.sb(1,0,null,null,22,"section",[["class","container py-4"]],null,null,null,null,null)),(l()(),i.sb(2,0,null,null,21,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,x.b,x.a)),i.rb(3,49152,null,0,v.a,[[2,g.a]],null,null),(l()(),i.sb(4,0,null,0,3,"mat-card-title",[["class","mt-3 mb-4 row d-flex justify-content-center mat-card-title"]],null,null,null,null,null)),i.rb(5,16384,null,0,v.h,[],null,null),(l()(),i.sb(6,0,null,null,1,"div",[["class","col-sm-12 col-md-6 col-lg-4"]],null,null,null,null,null)),(l()(),i.sb(7,0,null,null,0,"img",[["class","w-100"],["src","/assets/oxford/PBO_blue-10359bc2ad64e89d.png"]],null,null,null,null,null)),(l()(),i.sb(8,0,null,0,15,"mat-card-content",[["class","container mat-card-content"]],null,null,null,null,null)),i.rb(9,16384,null,0,v.c,[],null,null),(l()(),i.sb(10,0,null,null,6,"div",[["class","mb-4 row d-flex justify-content-center"]],null,null,null,null,null)),(l()(),i.sb(11,0,null,null,5,"div",[["class","col-sm-12 col-md-6 col-lg-4 input-group"]],null,null,null,null,null)),(l()(),i.sb(12,0,[["oxfordInput",1]],null,0,"input",[["class","form-control"],["placeholder","word to check"],["type","text"]],null,[[null,"keyup.enter"]],(function(l,n,t){var a=!0;return"keyup.enter"===n&&(a=!1!==l.component.getOxfordDefinition(i.Eb(l,12).value)&&a),a}),null,null)),(l()(),i.sb(13,0,null,null,3,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),i.sb(14,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.getOxfordDefinition(i.Eb(l,12).value)&&a),a}),null,null)),(l()(),i.sb(15,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","search"]],[[1,"title",0],[8,"innerHTML",1]],null,null,o.d,o.c)),i.rb(16,573440,null,0,f.c,[h.b,f.a,f.d,[2,f.i]],{icon:[0,"icon"]},null),(l()(),i.hb(16777216,null,null,1,null,O)),i.rb(18,16384,null,0,p.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.hb(16777216,null,null,1,null,q)),i.rb(20,16384,null,0,p.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.sb(21,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),i.hb(16777216,null,null,1,null,M)),i.rb(23,16384,null,0,p.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,16,0,"search"),l(n,18,0,t.inquiring),l(n,20,0,!t.inquiring),l(n,23,0,t.errMsg)}),(function(l,n){l(n,2,0,"NoopAnimations"===i.Eb(n,3)._animationMode),l(n,15,0,i.Eb(n,16).title,i.Eb(n,16).renderedIconHTML)}))}function D(l){return i.Nb(0,[(l()(),i.sb(0,0,null,null,1,"app-oxford",[],null,null,null,z,L)),i.rb(1,114688,null,0,E,[k],null,null)],(function(l,n){l(n,1,0)}),null)}var P=i.ob("app-oxford",E,D,{},{},[]),R=t("s7LF"),F=t("QQfA"),A=t("IP0z"),H=t("/Co4"),$=t("POq0"),J=t("Xd0L"),T=t("qJ5m"),S=t("s6ns"),V=t("gavF"),Z=t("JjoW"),B=t("Mz6y"),W=t("OIZN"),_=t("7kcP"),Q=t("5GAg"),U=t("DkaU"),X=t("zMNK"),G=t("hOhj"),K=t("KPQW"),Y=t("lwm9"),ll=t("Fwaw"),nl=t("mkRZ"),tl=t("r0V8"),il=t("kNGD"),al=t("qJ50"),ul=t("Gi4r"),rl=t("02hT"),el=t("5Bek"),cl=t("c9fC"),ol=t("FVPZ"),bl=t("oapL"),sl=t("ZwOa"),dl=t("Q+lL"),ml=t("8P0U"),pl=t("elxJ"),gl=t("BV1i"),fl=t("lT8R"),hl=t("pBi1"),Cl=t("dFDH"),xl=t("zQui"),vl=t("8rEH"),yl=t("rWV4"),wl=t("BzsH"),kl=t("AaDx"),El=t("5dmV"),Ll=t("iInd"),Ol=t("PCNd");class Il{}var Nl=t("dvZr");t.d(n,"DictionaryModuleNgFactory",(function(){return jl}));var jl=i.pb(a,[],(function(l){return i.Bb([i.Cb(512,i.j,i.ab,[[8,[u.a,r.a,e.a,c.a,c.b,o.b,o.a,b.a,P]],[3,i.j],i.w]),i.Cb(4608,p.n,p.m,[i.t,[2,p.F]]),i.Cb(4608,R.x,R.x,[]),i.Cb(4608,R.e,R.e,[]),i.Cb(4608,F.a,F.a,[F.g,F.c,i.j,F.f,F.d,i.q,i.y,p.d,A.b,[2,p.h]]),i.Cb(5120,F.h,F.i,[F.a]),i.Cb(5120,H.a,H.b,[F.a]),i.Cb(4608,$.c,$.c,[]),i.Cb(4608,J.d,J.d,[]),i.Cb(5120,T.h,T.a,[[3,T.h]]),i.Cb(5120,S.b,S.c,[F.a]),i.Cb(135680,S.d,S.d,[F.a,i.q,[2,p.h],[2,S.a],S.b,[3,S.d],F.c]),i.Cb(5120,V.c,V.j,[F.a]),i.Cb(4608,J.c,J.z,[[2,J.h],m.a]),i.Cb(5120,Z.a,Z.b,[F.a]),i.Cb(5120,B.b,B.c,[F.a]),i.Cb(4608,h.e,J.e,[[2,J.i],[2,J.n]]),i.Cb(5120,W.b,W.a,[[3,W.b]]),i.Cb(5120,_.b,_.a,[[3,_.b]]),i.Cb(135680,Q.e,Q.e,[i.y,m.a]),i.Cb(4608,U.f,U.f,[i.L]),i.Cb(1073742336,p.c,p.c,[]),i.Cb(1073742336,R.w,R.w,[]),i.Cb(1073742336,R.j,R.j,[]),i.Cb(1073742336,R.t,R.t,[]),i.Cb(1073742336,A.a,A.a,[]),i.Cb(1073742336,J.n,J.n,[[2,J.f],[2,h.f]]),i.Cb(1073742336,m.b,m.b,[]),i.Cb(1073742336,J.y,J.y,[]),i.Cb(1073742336,J.w,J.w,[]),i.Cb(1073742336,J.t,J.t,[]),i.Cb(1073742336,X.g,X.g,[]),i.Cb(1073742336,G.c,G.c,[]),i.Cb(1073742336,F.e,F.e,[]),i.Cb(1073742336,H.c,H.c,[]),i.Cb(1073742336,$.d,$.d,[]),i.Cb(1073742336,Q.a,Q.a,[]),i.Cb(1073742336,K.b,K.b,[]),i.Cb(1073742336,Y.c,Y.c,[]),i.Cb(1073742336,ll.c,ll.c,[]),i.Cb(1073742336,nl.a,nl.a,[]),i.Cb(1073742336,v.f,v.f,[]),i.Cb(1073742336,tl.b,tl.b,[]),i.Cb(1073742336,tl.a,tl.a,[]),i.Cb(1073742336,il.b,il.b,[]),i.Cb(1073742336,al.e,al.e,[]),i.Cb(1073742336,ul.c,ul.c,[]),i.Cb(1073742336,T.i,T.i,[]),i.Cb(1073742336,S.g,S.g,[]),i.Cb(1073742336,rl.b,rl.b,[]),i.Cb(1073742336,el.c,el.c,[]),i.Cb(1073742336,cl.d,cl.d,[]),i.Cb(1073742336,C.e,C.e,[]),i.Cb(1073742336,J.p,J.p,[]),i.Cb(1073742336,ol.a,ol.a,[]),i.Cb(1073742336,bl.c,bl.c,[]),i.Cb(1073742336,sl.b,sl.b,[]),i.Cb(1073742336,dl.d,dl.d,[]),i.Cb(1073742336,V.i,V.i,[]),i.Cb(1073742336,V.f,V.f,[]),i.Cb(1073742336,J.A,J.A,[]),i.Cb(1073742336,J.q,J.q,[]),i.Cb(1073742336,Z.c,Z.c,[]),i.Cb(1073742336,B.e,B.e,[]),i.Cb(1073742336,W.c,W.c,[]),i.Cb(1073742336,ml.a,ml.a,[]),i.Cb(1073742336,d.c,d.c,[]),i.Cb(1073742336,pl.a,pl.a,[]),i.Cb(1073742336,gl.h,gl.h,[]),i.Cb(1073742336,fl.a,fl.a,[]),i.Cb(1073742336,hl.b,hl.b,[]),i.Cb(1073742336,hl.a,hl.a,[]),i.Cb(1073742336,Cl.e,Cl.e,[]),i.Cb(1073742336,_.c,_.c,[]),i.Cb(1073742336,xl.p,xl.p,[]),i.Cb(1073742336,vl.l,vl.l,[]),i.Cb(1073742336,yl.a,yl.a,[]),i.Cb(1073742336,wl.b,wl.b,[]),i.Cb(1073742336,U.d,U.d,[]),i.Cb(1073742336,kl.d,kl.d,[]),i.Cb(1073742336,El.a,El.a,[]),i.Cb(1073742336,f.j,f.j,[]),i.Cb(1073742336,Ll.n,Ll.n,[[2,Ll.s],[2,Ll.k]]),i.Cb(1073742336,Ol.a,Ol.a,[f.d]),i.Cb(1073742336,Il,Il,[]),i.Cb(1073742336,a,a,[]),i.Cb(256,il.a,{separatorKeyCodes:[Nl.f]},[]),i.Cb(256,J.g,J.k,[]),i.Cb(1024,Ll.i,(function(){return[[{path:"",component:E}]]}),[])])}))},lzlj:function(l,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return u}));var i=t("8Y7J"),a=(t("igqZ"),t("IP0z"),t("Xd0L"),t("cUpR"),t("omvX"),i.qb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function u(l){return i.Nb(2,[i.Db(null,0),i.Db(null,1)],null,null)}}}]);