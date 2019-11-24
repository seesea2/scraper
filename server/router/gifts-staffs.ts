import { Router } from 'express';

import { Request, Response } from '../interface';
import {
  deleteStaff,
  disableStaff,
  newStaff
} from '../gifts-staffs/administrator';

const giftsStaffsRouter = Router();

giftsStaffsRouter.post('/admin/newStaff', (req: Request, res: Response) => {
  newStaff(req, res);
});
giftsStaffsRouter.post('/admin/disableStaff', (req: Request, res: Response) => {
  disableStaff(req, res);
});
giftsStaffsRouter.delete(
  '/admin/deleteStaff',
  (req: Request, res: Response) => {
    deleteStaff(req, res);
  }
);

export default giftsStaffsRouter;
