import { Component, OnInit } from '@angular/core';

import { Cart } from '@core/cart-interface';
import { CartApiService } from '@core/services/cart-api.service';
// import { ProductsApiService } from '@core/services/products-api.service';
// import { Product } from '@core/products-interface';

@Component({
  selector: 'cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit {
  cart: Cart;

  constructor(private cartApi: CartApiService) {}

  ngOnInit() {
    this.cartApi.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  removeFromCart(_id: string) {
    this.cartApi.removeFromCart(_id);
  }

  clearCart() {
    this.cartApi.clearCart();
  }
}
