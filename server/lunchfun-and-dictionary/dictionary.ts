import Axios from 'axios';
import { Response } from '../interface';
import {
  CheckEntriesResult,
  OxfordEntries,
  OxfordLemmas
} from './oxford-interface';

const app_id: string = '0314e9e2';
const app_key: string = '5a6c2589474a2f83ccd69f397bfec7a2';
const config = {
  headers: {
    app_id: app_id,
    app_key: app_key
  }
};

async function CheckOxfordEntries(word: string, res: Response) {
  if (!word || !word.trim()) {
    return res.status(400).send('Invalid word.');
  }

  const url =
    'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' +
    word +
    '?fields=definitions%2Cpronunciations';

  try {
    let resp = await Axios(url, config);
    let entries: OxfordEntries = resp.data;
    let return_result: CheckEntriesResult = { entries: [], pronunciations: [] };
    entries.results.forEach(result => {
      if (!result.lexicalEntries) return;
      result.lexicalEntries.forEach(lexicalEntry => {
        lexicalEntry.entries.forEach(entry => {
          if (!entry.senses) return;
          entry.senses.forEach(sense => {
            if (sense.definitions) {
              sense.definitions.forEach(definition => {
                return_result.entries.push(definition);
              });
            }
            if (sense.subsenses) {
              sense.subsenses.forEach(subsense => {
                subsense.definitions.forEach(definition => {
                  return_result.entries.push(definition);
                });
              });
            }
          });
        });
        if (lexicalEntry.pronunciations) {
          lexicalEntry.pronunciations.forEach(pronunciation => {
            return_result.pronunciations.push({
              audioFile: pronunciation.audioFile,
              phoneticSpelling: pronunciation.phoneticSpelling
            });
          });
        }
      });
    });
    console.log(return_result);
    return return_result;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
}

async function CheckOxfordLemmas(word: string) {
  if (!word || !word.trim()) {
    return 'Invalid word.';
  }
  const url =
    'https://od-api.oxforddictionaries.com/api/v2/lemmas/en-gb/' + word;

  try {
    let resp = await Axios(url, config);
    const lemmas: OxfordLemmas = resp.data;
    let return_result = [];
    lemmas.results.forEach(result => {
      result.lexicalEntries.forEach(lexicalEntry => {
        lexicalEntry.inflectionOf.forEach(inflection => {
          return_result.push(inflection);
        });
      });
    });
    console.log(return_result);
    return return_result;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
}

CheckOxfordLemmas('monkeys');
CheckOxfordEntries('monkey', null);

export default CheckOxfordEntries;
