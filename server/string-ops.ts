import * as crypto from 'crypto';

const algorithm = 'aes-192-cbc';
const password = 'inSGyc83';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);

export function encrypt(text: string) {
  try {
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  } catch (e) {
    console.log('encrypt => ', e);
  }
}

export function decrypt(text: string) {
  let decipher = crypto.createDecipheriv(algorithm, key, iv);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

/*
 * string operation
 */

// Adjust string to better display. Capital first character of each word.
function trimToFirstCapital(org_string: string): string {
  if (!org_string) {
    return '';
  }
  let output_str = '';
  const str_split = org_string.trim().split(' ');
  str_split.forEach(org => {
    org = org.trim();
    if (!org) {
      return;
    } else if (output_str) {
      output_str +=
        ' ' + org.charAt(0).toUpperCase() + org.substring(1).toLowerCase();
    } else {
      output_str = org.charAt(0).toUpperCase() + org.substring(1).toLowerCase();
    }
  });
  return output_str;
}

const randomTypes = { capital: 'capital', number: 'number', string: 'string' };

// return string of random numbers with specified length.
function randomNumber(length: number): string {
  return random(randomTypes.number, length);
}

// return string of random capital characters with specified length.
function randomCapitals(length: number): string {
  return random(randomTypes.capital, length);
}

// return string of random characters or numbers with specified length.
function randomString(length: number): string {
  return random(randomTypes.string, length);
}

function random(type: string, length: number): string {
  let rString: string = '';
  if (type === randomTypes.string) {
    rString = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (type === randomTypes.number) {
    rString = '0123456789';
  } else if (type === randomTypes.capital) {
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
  randomTypes
};
