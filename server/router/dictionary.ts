import { Router } from 'express';

import { Request, Response } from '../interface';
import CheckOxfordEntries from '../dictionary/dictionary';

const dictionaryRouter = Router();

dictionaryRouter.get('/oxford/:word', (req: Request, res: Response) => {
  CheckOxfordEntries(req.params.word, res);
});

export default dictionaryRouter;
