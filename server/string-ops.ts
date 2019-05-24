import * as crypto from 'crypto';

const algorithm = 'aes-192-cbc';
const password = 'inSGyc83';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);

export function encrypt(text: string): string {
  try {
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let crypted: string = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  } catch (e) {
    console.log('encrypt => ', e);
  }
}

export function decrypt(text: string): string {
  try {
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let dec: string = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  } catch (e) {
    console.log('decrypt => ', e);
  }
}

/*
 * string operation
 */
enum RandomTypes {
  Capital,
  Number,
  String
}

// return string of random numbers with specified length.
function randomNumber(length: number): string {
  return random(RandomTypes.Number, length);
}

// return string of random capital characters with specified length.
function randomCapitals(length: number): string {
  return random(RandomTypes.Capital, length);
}

// return string of random characters or numbers with specified length.
function randomString(length: number): string {
  return random(RandomTypes.String, length);
}

function random(type: RandomTypes, length: number): string {
  let rString: string = '';
  if (type === RandomTypes.String) {
    rString = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (type === RandomTypes.Number) {
    rString = '0123456789';
  } else if (type === RandomTypes.Capital) {
    rString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    return '';
  }

  let result: string = '';
  for (let i = length; i > 0; --i) {
    result += rString[Math.floor(Math.random() * rString.length)];
  }
  return result;
}

export {
  trimToFirstCapital,
  randomCapitals,
  randomNumber,
  randomString,
  RandomTypes
};
