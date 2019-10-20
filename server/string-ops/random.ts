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
  switch (type) {
    case RandomTypes.String: {
      rString =
        'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
    }
    case RandomTypes.Number: {
      rString = '0123456789';
      break;
    }
    case RandomTypes.Capital: {
      rString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
    }
    default: {
      return '';
    }
  }

  let result: string = '';
  for (let i = length; i > 0; --i) {
    result += rString[Math.floor(Math.random() * rString.length)];
  }
  return result;
}

export { randomCapitals, randomNumber, randomString };
