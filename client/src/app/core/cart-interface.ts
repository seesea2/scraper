import { Product } from './products-interface';

export interface CartItem {
  product: Product;
  qty: number;
}

export class Cart {
  customer: {
    name: string;
    mobile: number;
    address: string;
    message: string;
  };
  cartItems: CartItem[];
  total: number;
  constructor() {
    this.customer = { name: null, mobile: null, address: null, message: null };
    this.cartItems = [];
    this.total = 0;
  }
}
