import Axios from 'axios';
import { Response } from '../interface';
import { OxfordLemmas } from './oxford-interface';

const app_id: string = '0314e9e2';
const app_key: string = '5a6c2589474a2f83ccd69f397bfec7a2';
const config = {
  headers: {
    app_id: app_id,
    app_key: app_key
  }
};

async function CheckOxfordDictionary(word: string, res: Response) {
  if (!word || !word.trim()) {
    return res.status(400).send('Invalid word.');
  }

  const url =
    'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + word;

  Axios(url, config).then(resp => {
    console.log(resp.data);
  });
}

async function CheckOdLemmas(word: string) {
  if (!word || !word.trim()) {
    return 'Invalid word.';
  }
  const url =
    'https://od-api.oxforddictionaries.com/api/v2/lemmas/en-gb/' + word;

  try {
    let resp;
    Axios(url, config).catch(e => {
      console.log(JSON.stringify(e.message));
    });
    // let resp = await Axios(url, config);
    const lemmas: OxfordLemmas = resp.data;
    let return_result = [];
    lemmas.results.forEach(result => {
      result.lexicalEntries.forEach(lexicalEntry => {
        lexicalEntry.inflectionOf.forEach(inflection => {
          return_result.push(inflection);
        });
      });
    });
    // console.log(return_result)
    return return_result;
  } catch (e) {
    // console.log(e);

    console.log(e.response);
  }
}

CheckOdLemmas('Ships');
// CheckOxfordDictionary('book', null);

export default CheckOxfordDictionary;
