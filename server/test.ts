const http = "https://google.com.sg/yc/";

let a = http.indexOf("//");
let b = http.indexOf("/");
console.log(a, b);

let c = http.split("/");
console.log(JSON.stringify(c));
