import * as crypto from 'crypto';

const algorithm = 'aes-192-cbc';
const password = 'inSGyc83';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);

function encrypt(text: string): string {
  try {
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let crypted: string = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  } catch (e) {
    // console.log('encrypt => ', e);
  }
}

function decrypt(text: string): string {
  try {
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let dec: string = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  } catch (e) {
    // console.log('decrypt => ', e);
  }
}

console.log(encrypt('aa'));

export { encrypt, decrypt };
