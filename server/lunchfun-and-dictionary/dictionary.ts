import * as OxfordDictionary from 'oxford-dictionary-api'; // tslint:disable-line

import { Response } from '../interface';

const app_id: string = '0314e9e2';
const app_key: string = '5a6c2589474a2f83ccd69f397bfec7a2';
const DICT = new OxfordDictionary(app_id, app_key);

async function CheckOxfordDictionary(word: string, res: Response) {
  if (!word || !word.trim()) {
    return res.status(400).send('Invalid word.');
  }

  DICT.find(word.trim(), (err, data) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(data);
  });
}

export default CheckOxfordDictionary;
