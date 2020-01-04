import { Router } from 'express';

import { Request, Response } from '../interface';
import {
  Login,
  Logout,
  Register,
  DisableAccount,
  UserInfo
} from '../gifts-users/gifts-users.ops';
// import {
//   AddToCart,
//   CartCheckout,
//   DeleteCart,
//   DeleteInCart,
//   GetCart,
//   UpdateCartQty
// } from '../gifts-users/gifts-carts.ops';

const giftsUsersRouter = Router();

// url: /api/gifts/users/
giftsUsersRouter.post('/login', (req: Request, res: Response) => {
  Login(req, res);
});
giftsUsersRouter.get('/', (req: Request, res: Response) => {
  UserInfo(req.session, res);
});
giftsUsersRouter.get('/logout', (req: Request, res: Response) => {
  Logout(req, res);
});
giftsUsersRouter.post('/', (req: Request, res: Response) => {
  Register(req.body, res);
});
giftsUsersRouter.put('/', (req: Request, res: Response) => {
  console.log(req.body.disable)
  if(req.body.disable) {
  DisableAccount(req.session, res);
  }
});
// giftsUsersRouter.get('/cart', (req: Request, res: Response) => {
//   GetCart(req.session, res);
// });
// giftsUsersRouter.post('/cart', (req: Request, res: Response) => {
//   AddToCart(req.session, req.body, res);
// });
// giftsUsersRouter.delete('/cart', (req: Request, res: Response) => {
//   DeleteCart(req.session, res);
// });
// giftsUsersRouter.put('/cart', (req: Request, res: Response) => {
//   UpdateCartQty(req, res);
// });
// giftsUsersRouter.delete('/cart/product', (req: Request, res: Response) => {
//   DeleteInCart(req.session, req.query._id, res);
// });
// giftsUsersRouter.post('/cart/checkout', (req: Request, res: Response) => {
//   CartCheckout(req, res);
// });

export default giftsUsersRouter;
