import { Router } from 'express';

import { giftsProductsRouter } from './gifts-products/gifts-products-router';
import { giftsOrdersRouter } from './gifts-orders/gifts-orders-router';
import { giftsUsersRouter } from './gifts-users/gifts-users-router';
import { giftsStaffsRouter } from './gifts-staffs/gifts-staffs-router';

const giftsRouter = Router();

// url: /api/gifts
giftsRouter.use('/products', giftsProductsRouter);
giftsRouter.use('/orders', giftsOrdersRouter);
giftsRouter.use('/users', giftsUsersRouter);
giftsRouter.use('/staffs', giftsStaffsRouter);

export { giftsRouter };
