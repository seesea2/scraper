import * as OxfordDictionary from 'oxford-dictionary'; // tslint:disable-line

import { Response } from '../interface';

const DICT = new OxfordDictionary({
  app_id: '0314e9e2',
  app_key: '5a6c2589474a2f83ccd69f397bfec7a2',
  source_lang: 'en'
});

async function CheckOxfordDictionary(word: string, res: Response) {
  if (!word || !word.trim()) {
    return res.status(400).send('Invalid word.');
  }

  DICT.definitions(word.trim()).then(
    definitions => {
      return res.status(200).send(definitions);
    },
    err => {
      return res.status(400).send(err);
    }
  );
}

export { CheckOxfordDictionary };
