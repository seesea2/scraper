import { Router } from 'express';

import { Request, Response } from '../interface';

const giftsStaffsRouter = Router();

giftsStaffsRouter.post('/login', (req: Request, res: Response) => {
  // Login(req, res);
});
giftsStaffsRouter.get('/logout', (req: Request, res: Response) => {
  // Logout(req, res);
});
giftsStaffsRouter.post('/register', (req: Request, res: Response) => {
  // Register(req, res);
});
giftsStaffsRouter.delete('/deleteuser', (req: Request, res: Response) => {
  // DeleteUser(req, res);
});

export default giftsStaffsRouter;
