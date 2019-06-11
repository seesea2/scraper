import Product from '../gifts-products/products-interface';

interface CartItem {
  product: Product;
  qty: number;
}

interface Cart {
  customer: {
    name: string;
    mobile: number;
    address: string;
  };
  cartItems: CartItem[];
  total: number;
}

export { Cart, CartItem };
