// import * as os from 'os';
// console.log(os.cpus().length)

// Download a file from url
// import { get } from 'http';
// import { createWriteStream } from 'fs';
// function downloadUrl() {
//   const url = 'http://audio.oxforddictionaries.com/en/mp3/wonderful_gb_2.mp3';

//   let file = createWriteStream('./outputfile2.mp3');
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
// downloadFile();
