!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("express")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.busArrivalUrl="http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2";t.busStopsUrl="http://datamall2.mytransport.sg/ltaodataservice/BusStops";var r={headers:{AccountKey:"6sVzf9zXRaCgkJUdjxIw2A=="}};t.headerConfig=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{i(r.next(e))}catch(e){u(e)}}function a(e){try{i(r.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}i((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,u,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&u[0]?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[2&u[0],s.value]),u[0]){case 0:case 1:s=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){o.label=u[1];break}if(6===u[0]&&o.label<s[1]){o.label=s[1],s=u;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(u);break}s[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),o=n(2),a=[];function i(e){return r(this,void 0,void 0,(function(){var t,n;return s(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=o.busStopsUrl,e&&(t+="?$skip="+e),[4,u.default.get(t,o.headerConfig)];case 1:if(200!=(n=r.sent()).status)throw{status:n.status};return[2,n.data.value];case 2:throw r.sent();case 3:return[2]}}))}))}function c(e){if(e)for(var t=0;t<a.length;t++)if(e===a[t].BusStopCode)return a[t]}t.busStops=a,function e(){return r(this,void 0,void 0,(function(){var n,r,u;return s(this,(function(s){switch(s.label){case 0:s.trys.push([0,5,,6]),n=0,r=[],s.label=1;case 1:return[4,i(n)];case 2:r=s.sent(),u=a,t.busStops=a=u.concat(r),n+=500,s.label=3;case 3:if(500===r.length)return[3,1];s.label=4;case 4:return[3,6];case 5:return s.sent(),t.busStops=a=[],e(),[3,6];case 6:return[2]}}))}))}(),t.checkBusStopLocally=c,t.getBusStopInfo=function(e,t){if(!e)return t.status(400).send("Invalid Bus Stop Code.");var n=c(e);return n?t.status(200).send(n):t.status(400).send("Bus Stop Info not found.")},t.getNearbyBusStops=function(e,t,n){if(void 0===e||void 0===t)return n.status(400).send("Invalid coordinates.");for(var r=[],s=0;s<a.length;s++){var u=(a[s].Latitude-e)*Math.PI/180,o=(a[s].Longitude-t)*Math.PI/180,i=Math.sin(u/2)*Math.sin(u/2)+Math.cos(a[s].Latitude*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2),c=6371e3*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)));Math.abs(c)<280&&r.push(a[s])}n.status(200).send(r)}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{i(r.next(e))}catch(e){u(e)}}function a(e){try{i(r.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}i((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,u,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&u[0]?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[2&u[0],s.value]),u[0]){case 0:case 1:s=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){o.label=u[1];break}if(6===u[0]&&o.label<s[1]){o.label=s[1],s=u;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(u);break}s[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(18);t.ObjectID=u.ObjectID;var o,a="mongodb+srv://admin:admin@cluster0-dxwkg.mongodb.net/insg?retryWrites=true";function i(){return r(this,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u.MongoClient.connect(a,{useNewUrlParser:!0})];case 1:return e=t.sent(),[2,o=e.db("insg")];case 2:throw t.sent(),"Database connection failed.";case 3:return[2]}}))}))}t.MongoDb=function(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:if(o)return[2,o];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,i()];case 2:return e.sent(),[2,o];case 3:throw e.sent();case 4:return[2]}}))}))},t.DbCollection=function(e){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:if(o)return[2,o.collection(e)];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,i()];case 2:return t.sent(),[2,o.collection(e)];case 3:throw t.sent();case 4:return[2]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(6),u=n(7),o=n(8),a=n(9),i=n(10),c=r();c.use(o()),c.use(a.json()),c.use(a.urlencoded({extended:!1})),c.use(s({secret:"insg-yc-ly-17",resave:!1,saveUninitialized:!0,cookie:{maxAge:864e5}})),c.use("/api",i.default),c.get("/",(function(e,t){return t.status(200).sendFile(u.join(__dirname,"/client/index.html"))})),c.use(r.static(u.join(__dirname,"/client"))),c.use(r.static(u.join(__dirname,"/client/assets"),{dotfiles:"allow"})),c.all("/*",(function(e,t){return t.status(200).sendFile(u.join(__dirname,"/client/index.html"))})),c.use((function(e,t,n){return t.status(500).send("Issue happened. Please retry later!")})),c.listen(8080,(function(){console.log("app listening on port 8080.")}))},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(11),u=n(13),o=n(15),a=n(20),i=r.Router();i.use("/dictionary",o.dictionaryRouter),i.use("/http",u.default),i.use("/lunchfun",o.lunchfunRouter),i.use("/lta/bus",s.busRouter),i.post("/msg",(function(e,t){a.default(e.body,t)})),i.all("/*",(function(e,t){return t.status(400).send("Invalid Request")})),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(12),u=n(3),o=r.Router();t.busRouter=o,o.get("/busArrival/:busStopCode",(function(e,t){s.default(e.params.busStopCode,t)})),o.get("/busStop/:busStopCode",(function(e,t){u.getBusStopInfo(e.params.busStopCode,t)})),o.get("/nearbyBusStops",(function(e,t){u.getNearbyBusStops(e.query.latitude,e.query.longitude,t)}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n(2),u=n(3);t.default=function(e,t){if(!(e=e.trim()))return t.status(400).send("Invalid BusStopCode.");var n=u.checkBusStopLocally(e);if(!n)return t.status(400).send("Bus Stop not found.");var o=s.busArrivalUrl+"?BusStopCode="+e;r.default.get(o,s.headerConfig).then((function(e){t.status(200).send({busStopInfo:n,busArrival:e.data})})).catch((function(e){t.status(400).send(e)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(14),u=r.Router();u.post("",(function(e,t){"DELETE"===e.body.type?s.Delete(e.body,t):"GET"===e.body.type?s.Get(e.body,t):"POST"===e.body.type?s.Post(e.body,t):"PUT"===e.body.type&&s.Put(e.body,t)})),t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.Delete=function(e,t){var n=e.url;if(e.querys&&e.querys.length>0){n+="?";for(var s=0;s<e.querys.length;++s)n+=e.query[s],n+="=",n+=e.queryValue[s]}r.default.delete(n).then((function(e){t.status(200).send(e)})).catch((function(e){t.status(400).send(e)}))},t.Post=function(e,t){return t.status(200).send(e)},t.Put=function(e,t){r.default.put(e.body.url).then((function(e){t.send(e.data)}))},t.Get=function(e,t){r.default.post(e.body.url).then((function(e){t.send(e.data)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(16),u=n(17),o=n(19),a=r.Router();t.dictionaryRouter=a;var i=r.Router();t.lunchfunRouter=i,a.get("/oxford/:word",(function(e,t){s.default(e.params.word,t)})),i.get("/pals",(function(e,t){u.GetPals(t)})),i.post("/pal",(function(e,t){u.AddPal(e.body.name,t)})),i.delete("/pal",(function(e,t){u.DeletePal(e.query,t)})),i.get("/records",(function(e,t){o.GetRecords(t)})),i.post("/record",(function(e,t){o.AddRecord(e.body.payer,e.body.attendees,t)})),i.delete("/record",(function(e,t){o.DeleteRecord(e.query._id,t)})),i.get("/stats/attendance",(function(e,t){u.GetPalsAttendance(t)}))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{i(r.next(e))}catch(e){u(e)}}function a(e){try{i(r.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}i((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,u,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&u[0]?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[2&u[0],s.value]),u[0]){case 0:case 1:s=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){o.label=u[1];break}if(6===u[0]&&o.label<s[1]){o.label=s[1],s=u;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(u);break}s[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),o={headers:{app_id:"0314e9e2",app_key:"5a6c2589474a2f83ccd69f397bfec7a2"}};!function(e){r(this,void 0,void 0,(function(){var t,n,r,a;return s(this,(function(s){switch(s.label){case 0:if(!e||!e.trim())return[2,"Invalid word."];t="https://od-api.oxforddictionaries.com/api/v2/lemmas/en-gb/"+e,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,u.default(t,o)];case 2:return n=s.sent(),r=n.data,a=[],r.results.forEach((function(e){e.lexicalEntries.forEach((function(e){e.inflectionOf.forEach((function(e){a.push(e)}))}))})),[2,a];case 3:return[2,s.sent().message];case 4:return[2]}}))}))}("shops"),t.default=function(e,t){return r(this,void 0,void 0,(function(){var n,r,a,i,c,l,f,d,h,p,b,y,v,g,w,m,_,x,P,S,M,j,O,k,C,I,D,q,R;return s(this,(function(s){switch(s.label){case 0:if(!e||!e.trim())return[2,t.status(400).send("Invalid word.")];e=e.trim().toLowerCase(),n="https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/"+e+"?fields=definitions%2Cpronunciations",s.label=1;case 1:return s.trys.push([1,3,,4]),[4,u.default(n,o)];case 2:for(r=s.sent(),a=r.data,i={lexicalEntries:[]},c=0,l=a.results;c<l.length;c++)for(f=l[c],d=0,h=f.lexicalEntries;d<h.length;d++){for(p=h[d],b={entries:[],lexicalCategory:"",pronunciations:[]},i.lexicalEntries.push(b),p.lexicalCategory&&(b.lexicalCategory=p.lexicalCategory.text),y=0,v=p.entries;y<v.length;y++)for(g=v[y],w=0,m=g.senses;w<m.length;w++){for(_=m[w],x=0,P=_.definitions;x<P.length;x++)C=P[x],b.entries.push(C);for(S=0,M=_.subsenses||[];S<M.length;S++)for(j=M[S],O=0,k=j.definitions;O<k.length;O++)C=k[O],b.entries.push(C)}for(I=0,D=p.pronunciations;I<D.length;I++)q=D[I],b.pronunciations.push({audioFile:q.audioFile,phoneticSpelling:q.phoneticSpelling})}return[2,t.status(200).send(i)];case 3:return R=s.sent(),[2,t.status(400).send(R.message)];case 4:return[2]}}))}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{i(r.next(e))}catch(e){u(e)}}function a(e){try{i(r.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}i((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,u,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&u[0]?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[2&u[0],s.value]),u[0]){case 0:case 1:s=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){o.label=u[1];break}if(6===u[0]&&o.label<s[1]){o.label=s[1],s=u;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(u);break}s[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(4),o=[];function a(){return r(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,u.DbCollection("lunchfun-pals")];case 1:return[4,e.sent().find().sort({name:1}).toArray()];case 2:return o=e.sent(),[3,4];case 3:throw e.sent();case 4:return[2]}}))}))}t.GetPals=function(e){return r(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:if(o.length>0)return[2,e.status(200).send(o)];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,a()];case 2:return n.sent(),[2,e.status(200).send(o)];case 3:return t=n.sent(),[2,e.status(500).send(t)];case 4:return[2]}}))}))},t.AddPal=function(e,t){return r(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:if(!e)return[2,t.status(400).send("Invalid input.")];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,u.DbCollection("lunchfun-pals")];case 2:return r.sent().insertOne({name:e}),a(),[2,t.status(200).send({result:"ok"})];case 3:return n=r.sent(),[2,t.status(500).send(n)];case 4:return[2]}}))}))},t.DeletePal=function(e,t){return r(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:if(!e)return[2,t.status(400).send("Invalid name to delete.")];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,u.DbCollection("lunchfun-pals")];case 2:return r.sent().deleteOne({name:e}),a(),[2,t.status(200).send({result:"ok"})];case 3:return n=r.sent(),[2,t.status(500).send(n)];case 4:return[2]}}))}))},t.GetPalsAttendance=function(e){return r(this,void 0,void 0,(function(){var t,n;return s(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,u.DbCollection("lunchfun-records")];case 1:return[4,r.sent().aggregate([{$unwind:"$attendees"},{$group:{_id:"$attendees",attendance:{$sum:1}}},{$project:{name:"$_id",attendance:"$attendance"}}]).toArray()];case 2:return t=r.sent(),[2,e.status(200).send(t)];case 3:return n=r.sent(),[2,e.status(500).send(n)];case 4:return[2]}}))}))}},function(e,t){e.exports=require("mongodb")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,u){function o(e){try{i(r.next(e))}catch(e){u(e)}}function a(e){try{i(r.throw(e))}catch(e){u(e)}}function i(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}i((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,u,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&u[0]?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[2&u[0],s.value]),u[0]){case 0:case 1:s=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){o.label=u[1];break}if(6===u[0]&&o.label<s[1]){o.label=s[1],s=u;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(u);break}s[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(4);t.GetRecords=function(e,t){return r(this,void 0,void 0,(function(){var n,r;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,u.DbCollection("lunchfun-records")];case 1:return[4,s.sent().find({}).sort({createdOn:-1}).limit(30|t).toArray()];case 2:return n=s.sent(),[2,e.status(200).send(n)];case 3:return r=s.sent(),[2,e.status(500).send(r)];case 4:return[2]}}))}))},t.AddRecord=function(e,t,n){return r(this,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:if(!e||!t||t.length<=0)return[2,n.status(400).send("Invalid params to add.")];r.label=1;case 1:return r.trys.push([1,4,,5]),[4,u.DbCollection("lunchfun-records")];case 2:return[4,r.sent().insertOne({payer:e,attendees:t,createdOn:new Date})];case 3:return r.sent(),[2,n.status(200).send({result:"ok"})];case 4:return r.sent(),[2,n.status(500).send("Error at server. Please try again later.")];case 5:return[2]}}))}))},t.DeleteRecord=function(e,t){return r(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:if(!e)return[2,t.status(400).send("Invalid record to delete.")];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,u.DbCollection("lunchfun-records")];case 2:return r.sent().deleteOne({_id:new u.ObjectID(e)}),[2,t.status(200).send({result:"ok"})];case 3:return n=r.sent(),[2,t.status(500).send(n)];case 4:return[2]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21).createTransport({host:"mail.insg.xyz",secure:!0,auth:{user:"i@insg.xyz",pass:"pass1234"}}),s={from:"i@insg.xyz",to:"seesea2@gmail.com",subject:"Hello",text:"This is email from InSG.xyz",html:"<b>this is email from InSG.xyz</b>"};t.default=function(e,t){r.sendMail(s)}},function(e,t){e.exports=require("nodemailer")}]);
//# sourceMappingURL=server.js.map