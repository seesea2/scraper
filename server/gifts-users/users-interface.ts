import { Product } from '../gifts-products/products-interface';

export interface CartItem {
  product: Product;
  qty: number;
}

export interface Cart {
  customer: {
    name: string;
    mobile: number;
    address: string;
  };
  cartItems: CartItem[];
  total: number;
}
