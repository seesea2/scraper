import { Router } from 'express';

import { Request, Response } from '../interface';
import {
  AddCategory,
  DeleteCategory,
  GetCategories,
  GetSamplesOfCategories,
  UpdateCategory
} from '../gifts-products/gifts-products-categories.ops';
import {
  AddProduct,
  DeleteProduct,
  GetProduct,
  GetProducts,
  GetProductsByCategory,
  UpdateProduct
} from '../gifts-products/gifts-products.ops';
// import {
//   AdjustInventory,
//   GetInventory
// } from '../gifts-products/gifts-products-inventory.ops';
// import { bStaff } from '../gifts-staffs/gifts-staffs.ops';

const giftsProductsRouter = Router();

/*
 * inquiry: /api/gifts/products
 */
// giftsProductsRouter.get('/view/:product_id', (req, res) => {
//   GetProduct(req.params, res);
// });
giftsProductsRouter.get('/categories', (req: Request, res: Response) => {
  GetCategories(res);
});
giftsProductsRouter.post('/category', (req: Request, res: Response) => {
  // liych
  // if (!bStaff(req.session)) {
  //   return res.status(403).send({ result: 'forbiddent' });
  // }
  AddCategory(req.body, res);
});
giftsProductsRouter.put('/category', (req: Request, res: Response) => {
  UpdateCategory(req.body, res);
});
giftsProductsRouter.delete('/category', (req: Request, res: Response) => {
  DeleteCategory(req.query, res);
});

giftsProductsRouter.get('/samples', (req: Request, res: Response) => {
  GetSamplesOfCategories(res);
});
giftsProductsRouter.get('', (req: Request, res: Response) => {
  GetProducts(req.query, res);
});
giftsProductsRouter.get('/product', (req: Request, res: Response) => {
  GetProduct(req.query, res);
});
giftsProductsRouter.post('/product', (req: Request, res: Response) => {
  AddProduct(req.body, res);
});
giftsProductsRouter.put('/product', (req: Request, res: Response) => {
  UpdateProduct(req.body, res);
});
giftsProductsRouter.delete('/product', (req: Request, res: Response) => {
  DeleteProduct(req.query, res);
});

// giftsProductsRouter.get('/inventory', (req, res) => {
//   GetInventory(res);
// });
// giftsProductsRouter.put('/inventory', (req, res) => {
//   AdjustInventory(req.body._id, req.body.qty, res);
// });

export default giftsProductsRouter;
