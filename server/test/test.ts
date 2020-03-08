// import * as os from 'os';
// console.log(os.cpus().length)

// Download a file from url
// import { get } from 'http';
// import { createWriteStream } from 'fs';
// function downloadUrl() {
//   const url = 'http://pan.baidu.com/s/14UZhnKhCcM3-GyYmOOwtzg';

//   let file = createWriteStream('./outputfile');
//   get(url, response => {
//     response.on('data', chunk => {
//       file.write(chunk);
//     });
//     response.on('error', err => {
//       console.error(err);
//     });
//     response.on('end', () => {
//       console.log('finished');
//     });
//   });
// }
// downloadUrl();

import { hash } from '../string-ops/crypto';
import { randomPassword } from '../string-ops/random';

try {
  let str = randomPassword(8);
  console.info(str)//, hash(str), hash(str, 256), hash(str, 512));
} catch (err) {
  console.log('error: ', err);
}
