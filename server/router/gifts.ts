import { Router } from 'express';

import giftsProductsRouter from './gifts-products';
import giftsOrdersRouter from './gifts-orders';
import giftsUsersRouter from './gifts-users';
import giftsStaffsRouter from './gifts-staffs';

const giftsRouter = Router();

// url: /api/gifts
giftsRouter.use('/products', giftsProductsRouter);
giftsRouter.use('/orders', giftsOrdersRouter);
giftsRouter.use('/users', giftsUsersRouter);
giftsRouter.use('/staffs', giftsStaffsRouter);

export default giftsRouter;
