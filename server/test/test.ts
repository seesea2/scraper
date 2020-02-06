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

import * as crypto from 'crypto';
try {
  // const algorithm = 'aes-192-cbc';
  // const password = 'inSGyc83';
  // const key = crypto.scryptSync(password, 'salt', 24);
  // const iv = Buffer.alloc(16, 0);

  // let cipher = crypto.createCipheriv(algorithm, key, iv);
  // let crypted: string = cipher.update('yc@insg.xyz', 'utf8', 'hex');
  // crypted += cipher.final('hex');

  // console.log(crypted);
  // // console.log(cipher.getAuthTag());

  // const decipher = crypto.createDecipheriv(algorithm, key, iv);
  // let dec = decipher.update('413e0d295a542b39864ba62fdb0ad096', 'hex', 'utf8');
  // dec += decipher.final('utf8');
  // console.log(dec);

  // const hash = crypto.createHash('sha512');
  // let hashCode = hash.update('aa').digest('hex');
  // console.log(hashCode);

  // const hmac = crypto.createHmac('sha256', '');
  // let hmacCode = hmac.update('aa').digest('hex');
  // console.log(hmacCode);

  // console.log(crypto.getHashes());

  crypto.randomBytes(10, (err, data) => {
    console.log(data.length);
    console.log(data.toString('ascii'));
    console.log(data.toString('hex'));
  });
} catch (err) {
  console.log('error: ', err);
}
