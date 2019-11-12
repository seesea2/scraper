import { Router } from 'express';

import { Request, Response } from '../interface';
import { newStaff } from '../gifts-staffs/staff-administrator';

const giftsStaffsRouter = Router();

giftsStaffsRouter.post('/admin/newStaff', (req: Request, res: Response) => {
  newStaff(req, res);
});
giftsStaffsRouter.delete('/deleteuser', (req: Request, res: Response) => {
  // DeleteUser(req, res);
});

export default giftsStaffsRouter;
