!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ltaAccountKey="6sVzf9zXRaCgkJUdjxIw2A==",t.oxford_app_id="0314e9e2",t.oxford_app_key="5a6c2589474a2f83ccd69f397bfec7a2"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.busArrivalUrl="http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2";t.busStopsUrl="http://datamall2.mytransport.sg/ltaodataservice/BusStops";var o={headers:{AccountKey:r.ltaAccountKey}};t.headerConfig=o},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=n(3),a=[];function u(e){return r(this,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=i.busStopsUrl,e&&(t+="?$skip="+e),[4,s.default.get(t,i.headerConfig)];case 1:if(200!=(n=r.sent()).status)throw{status:n.status};return[2,n.data.value];case 2:throw r.sent();case 3:return[2]}}))}))}function c(e){if(e)for(var t=0;t<a.length;t++)if(e===a[t].BusStopCode)return a[t]}t.busStops=a,function e(){return r(this,void 0,void 0,(function(){var n,r,s;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,,6]),n=0,r=[],o.label=1;case 1:return[4,u(n)];case 2:r=o.sent(),s=a,t.busStops=a=s.concat(r),n+=500,o.label=3;case 3:if(500===r.length)return[3,1];o.label=4;case 4:return[3,6];case 5:return o.sent(),t.busStops=a=[],e(),[3,6];case 6:return[2]}}))}))}(),t.checkBusStopLocally=c,t.getBusStop=function(e,t){if(!e)return t.status(400).send({message:"Invalid Bus Stop Code."});var n=c(e);return n?t.status(200).send(n):t.status(400).send({message:"Bus Stop info not found."})},t.getNearbyBusStops=function(e,t,n){if(void 0===e||void 0===t)return n.status(400).send({message:"Invalid coordinates."});for(var r=[],o=0;o<a.length;o++){var s=(a[o].Latitude-e)*Math.PI/180,i=(a[o].Longitude-t)*Math.PI/180,u=Math.sin(s/2)*Math.sin(s/2)+Math.cos(a[o].Latitude*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),c=6371e3*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)));Math.abs(c)<280&&r.push({dist:c,busStop:a[o]})}r=r.sort((function(e,t){return e.dist>t.dist?1:e.dist<t.dist?-1:0})),n.status(200).send(r)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=n(1),s=n(7),i=n(8),a=n(9),u=n(10),c=n(4),l=n(11),f=r();f.use(s()),f.use(i.json()),f.use(i.urlencoded({extended:!1})),f.get("/api/dictionary/oxford/:word",(function(e,t){a.default(e.params.word,t)})),f.get("/api/lta/bus/busArrival/:busStopCode",(function(e,t){u.default(e.params.busStopCode,t)})),f.get("/api/lta/bus/busStop/:busStopCode",(function(e,t){c.getBusStop(e.params.busStopCode,t)})),f.get("/api/lta/bus/nearbyBusStops",(function(e,t){c.getNearbyBusStops(e.query.latitude,e.query.longitude,t)})),f.get("/api/scraper/words",(function(e,t){l.wordFrequence(e.query,t)})),f.get("/",(function(e,t){return t.status(200).sendFile(o.join(__dirname,"/client/index.html"))})),f.use(r.static(o.join(__dirname,"/client"))),f.all("/*",(function(e,t){return t.status(200).sendFile(o.join(__dirname,"/client/index.html"))})),f.all("/*",(function(e,t){return t.status(404).send({message:"Page not found."})})),f.use((function(e,t,n){return t.status(500).send({message:"Issue happened. Please retry later!"})})),f.listen(8080,(function(){console.log("Listening HTTP on port 8080.")}))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=n(2),a={headers:{app_id:i.oxford_app_id,app_key:i.oxford_app_key}};t.default=function(e,t){return r(this,void 0,void 0,(function(){var n,r,i,u,c,l,f,d,p,h,b,v,y,g,w,_,x,m,S,M,P,C,j,q,k,O,D,R,B;return o(this,(function(o){switch(o.label){case 0:if(!e||!e.trim())return[2,t.status(400).send({message:"Invalid word."})];e=e.trim().toLowerCase(),n="https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/"+e+"?fields=definitions%2Cpronunciations",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,s.default(n,a)];case 2:for(r=o.sent(),i=r.data,u={lexicalEntries:[]},c=0,l=i.results||[];c<l.length;c++)for(f=l[c],d=0,p=f.lexicalEntries||[];d<p.length;d++){for(h=p[d],b={entries:[],lexicalCategory:"",pronunciations:[]},u.lexicalEntries.push(b),h.lexicalCategory&&(b.lexicalCategory=h.lexicalCategory.text),v=0,y=h.entries||[];v<y.length;v++)for(g=y[v],w=0,_=g.senses||[];w<_.length;w++){for(x=_[w],m=0,S=x.definitions||[];m<S.length;m++)k=S[m],b.entries.push(k);for(M=0,P=x.subsenses||[];M<P.length;M++)for(C=P[M],j=0,q=C.definitions||[];j<q.length;j++)k=q[j],b.entries.push(k)}for(O=0,D=h.pronunciations||[];O<D.length;O++)R=D[O],b.pronunciations.push({audioFile:R.audioFile,phoneticSpelling:R.phoneticSpelling})}return[2,t.status(200).send(u)];case 3:return B=o.sent(),[2,t.status(400).send(B)];case 4:return[2]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3),s=n(4);t.default=function(e,t){if(!(e=e.trim()))return t.status(400).send({message:"Invalid BusStopCode."});var n=s.checkBusStopLocally(e);if(!n)return t.status(400).send({message:"Bus Stop not found."});var i=o.busArrivalUrl+"?BusStopCode="+e;r.default.get(i,o.headerConfig).then((function(e){t.status(200).send({busStop:n,busArrival:e.data})})).catch((function(e){t.status(400).send(e)}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=n(12),a=n(13),u=n(14);function c(e){return r(this,void 0,void 0,(function(){var t,n,r,a,c,l;return o(this,(function(o){switch(o.label){case 0:if(!e)return[2];e.includes("//")||(e="https://"+e),o.label=1;case 1:return o.trys.push([1,3,,4]),console.log(new Date,"scraping: ",e),t=(new Date).toLocaleString(),n=Date.now(),r='insert into urls(url,scanDateStr,scanDate) \n      values("'+e+'","'+t+'",'+n+')\n      on conflict(url) do update set scanDateStr="'+t+'",scanDate='+n,u.dbWrite().run(r,(function(e){e&&(console.error(new Date,e),console.error(new Date,r),u.dbReset())})),a={headers:{"Content-Length":0,"Content-Type":"text/plain"}},[4,s.default(e,a)];case 2:return c=o.sent(),l=i.load(c.data),function(e,t){if(e&&t){"/"===e[e.length-1]&&(e=e.substring(0,length-1));var n=t("title").text()||"";t("html *").each((function(){if("tag"==this.type){var r=t(this).attr("href");if(r&&!r.includes("http:")&&!r.includes("#")&&!(r.includes(".css")||r.includes(".pdf")||r.includes("resources")||r.includes("?"))){"/"===r?r="":"/"===r[r.length-1]&&(r=r.substring(0,r.length-1));var o="";o=r.includes("//")?'insert or ignore into urls(web,url) values("'+n+'","'+r+'")':r&&"/"!==r[0]?'insert or ignore into urls(web,url) values("'+n+'","'+e+"/"+r+'")':'insert or ignore into urls(web,url) values("'+n+'","'+e+r+'")';try{u.dbWrite().run(o,(function(e){e&&u.dbReset()}))}catch(e){u.dbReset()}}}}))}}(e,l),function(e,t){e&&t&&t("body *").each((function(){if("tag"==this.type){var e=t(this);if(-1==e.html().indexOf("<")){var n=e.text();if(n)n.split(" ").forEach((function(e){if((e=e.trim())&&e.match(/^[a-zA-Z]+$/)){var t='insert into words(word,frequence) values("'+(e=e.toLocaleLowerCase())+'",1)\n        on conflict(word) do update set frequence=frequence+1';try{u.dbWrite().run(t,(function(e){e&&u.dbReset()}))}catch(e){u.dbReset()}}}))}}}))}(e,l),[2];case 3:return o.sent(),console.error(new Date,"scrape function error"),[3,4];case 4:return[2]}}))}))}new a.CronJob("0 */2 * * * *",(function(){u.dbRead().get("select url from urls where scanDate is null;",(function(e,t){if(e)return console.error(new Date,e),void u.dbReset();c(t.url)}))}),null,!0,"Asia/Singapore"),t.wordFrequence=function(e,t){var n=0;e&&e.offset&&e.offset>0&&(n=e.offset);var r="select * from words order by frequence limit 200 offset "+n+";";try{u.dbRead().all(r,(function(e,n){if(e)return u.dbReset(),void t.send([]);t.send(n)}))}catch(e){console.log(new Date,e)}}},function(e,t){e.exports=require("cheerio")},function(e,t){e.exports=require("cron")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(15),s=r.join(__dirname,"/../db.db3"),i=o.verbose(),a=void 0,u=void 0;t.dbReset=function(){a&&(a.close(),a=void 0),u&&(u.close(),u=void 0)},t.dbRead=function(){if(!a)try{a=new i.Database(s,o.OPEN_READONLY)}catch(e){console.log("dbRead:",e)}return a},t.dbWrite=function(){if(!u)try{u=new i.Database(s,o.OPEN_READWRITE)}catch(e){console.log("dbWrite:",e)}return u}},function(e,t){e.exports=require("sqlite3")}]);
//# sourceMappingURL=server.js.map