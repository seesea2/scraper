import { Router } from 'express';

import { Request, Response } from '../interface';
import {
  Login,
  Logout,
  Register,
  DeleteUser,
  UserInfo
} from './gifts-users.ops';
import {
  AddToCart,
  CartCheckout,
  DeleteCart,
  DeleteInCart,
  GetCart,
  UpdateCartQty
} from './gifts-carts.ops';

const giftsUsersRouter = Router();

// url: /api/gifts/users/
giftsUsersRouter.post('/login', (req: Request, res: Response) => {
  Login(req, res);
});
giftsUsersRouter.get('/info', (req: Request, res: Response) => {
  UserInfo(req.session, res);
});
giftsUsersRouter.get('/logout', (req: Request, res: Response) => {
  Logout(req, res);
});
giftsUsersRouter.post('/register', (req: Request, res: Response) => {
  Register(req, res);
});
giftsUsersRouter.delete('/deleteuser', (req: Request, res: Response) => {
  DeleteUser(req.session, res);
});
giftsUsersRouter.get('/cart', (req: Request, res: Response) => {
  GetCart(req.session, res);
});
giftsUsersRouter.post('/cart', (req: Request, res: Response) => {
  AddToCart(req.session, req.body, res);
});
giftsUsersRouter.delete('/cart', (req: Request, res: Response) => {
  DeleteCart(req.session, res);
});
giftsUsersRouter.put('/cart', (req: Request, res: Response) => {
  UpdateCartQty(req, res);
});
giftsUsersRouter.delete('/cart/product', (req: Request, res: Response) => {
  DeleteInCart(req.session, req.query._id, res);
});
giftsUsersRouter.post('/cart/checkout', (req: Request, res: Response) => {
  CartCheckout(req, res);
});

export default giftsUsersRouter;
