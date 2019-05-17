import { Router } from 'express';

import { Request, Response } from '../interface';
import {
  AddCategory,
  DeleteCategory,
  GetCategories,
  GetSamplesOfCategories
} from './gifts-products-categories.ops';
import {
  AddProduct,
  DeleteProduct,
  GetProduct,
  GetProductsByCategory,
  UpdateProduct
} from './gifts-products.ops';
import { AdjustInventory, GetInventory } from './gifts-products-inventory.ops';

const giftsProductsRouter = Router();

giftsProductsRouter.get('/view/:product_no', (req, res) => {
  GetProduct(req.params, res);
});

/*
 * inquiry: /api/gifts/products
 */
giftsProductsRouter.get('/categories', (req: Request, res: Response) => {
  GetCategories(res);
});
giftsProductsRouter.post('/category', (req: Request, res: Response) => {
  AddCategory(req.body, res);
});
giftsProductsRouter.delete('/category', (req: Request, res: Response) => {
  DeleteCategory(req.query, res);
});

giftsProductsRouter.get('/samples', (req: Request, res: Response) => {
  GetSamplesOfCategories(res);
});
giftsProductsRouter.get('', (req: Request, res: Response) => {
  GetProductsByCategory(req, res);
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

giftsProductsRouter.get('/inventory', (req, res) => {
  GetInventory(res);
});
giftsProductsRouter.put('/inventory', (req, res) => {
  AdjustInventory(req.body._id, req.body.qty, res);
});

export { giftsProductsRouter };
