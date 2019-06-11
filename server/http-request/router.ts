import { Router } from 'express';

import { Request, Response } from '../interface';
import { Delete, Get, Post, Put } from './http-request';

const httpRouter = Router();

httpRouter.get('', (req: Request, res: Response) => {
  Get(req, res);
});
httpRouter.post('', (req: Request, res: Response) => {
  Post(req, res);
});
httpRouter.put('', (req: Request, res: Response) => {
  Put(req, res);
});
httpRouter.delete('', (req: Request, res: Response) => {
  Delete(req, res);
});

export { httpRouter };
