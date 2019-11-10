import Product from '../gifts-products/products-interface';

interface CartItem {
  product: Product;
  qty: number;
}

interface Customer {
  name: string;
  fname: string;
  lname: string;
  mobile: number;
  address: string;
  message: string;
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

export { Cart, CartItem, Customer };
