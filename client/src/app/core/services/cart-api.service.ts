import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { UsersService } from './users.service';

import { Product } from '../products-interface';
import { Cart } from '../cart-interface';
import { httpOptions } from '../http-interface';

const cookieExpireDays: number = 90;

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  private cartSubject = new BehaviorSubject<Cart>(new Cart());
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  bLogin: boolean;
  cart$ = this.cartSubject.asObservable();
  cart: Cart;
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private usersService: UsersService
  ) {
    usersService.bLogin$.subscribe(data => {
      this.bLogin = data;
      if (data === true) {
        this.initCart();
      }
    });
    this.cart$.subscribe(data => {
      this.cart = data;
      this.cartItemCountSubject.next(data.cartItems.length);
    });

    this.initCart();
  }

  initCart() {
    let cookie = this.cookieService.get('InSgCart');
    let cookie_cart: Cart;
    if (!cookie) {
      cookie_cart = new Cart();
    } else {
      cookie_cart = JSON.parse(cookie);
    }
    this.cartSubject.next(cookie_cart);
    this.cartItemCountSubject.next(cookie_cart.cartItems.length);

    if (this.bLogin) {
      this.httpClient
        .get<Cart>('/api/gifts/users/cart')
        .subscribe(serverCart => {
          if (
            serverCart &&
            serverCart.cartItems &&
            serverCart.cartItems.length > 0
          ) {
            serverCart.cartItems.forEach(cartItem => {
              let i = 0;
              for (i = 0; i < cookie_cart.cartItems.length; ++i) {
                if (
                  cookie_cart.cartItems[i].product._id === cartItem.product._id
                ) {
                  cookie_cart.cartItems[i].qty += cartItem.qty;
                  break;
                }
              }
              if (i >= cookie_cart.cartItems.length) {
                cookie_cart.cartItems.push({
                  product: cartItem.product,
                  qty: cartItem.qty
                });
              }
              cookie_cart.total += cartItem.product.price * cartItem.qty;
            });

            this.cartSubject.next(cookie_cart);
            this.cartItemCountSubject.next(cookie_cart.cartItems.length);
          }

          this.cookieService.set(
            'InSgCart',
            JSON.stringify(cookie_cart),
            cookieExpireDays,
            '/'
          );
        });
    }
  }

  addToCart(product: Product, qty: number) {
    let i = 0;
    for (i = 0; i < this.cart.cartItems.length; i++) {
      if (this.cart.cartItems[i].product._id === product._id) {
        this.cart.cartItems[i].qty += qty;
        break;
      }
    }
    if (i >= this.cart.cartItems.length) {
      this.cart.cartItems.push({ product: product, qty: qty });
    }
    this.cart.total += product.price * qty;
    this.cartSubject.next(this.cart);
    this.cartItemCountSubject.next(this.cart.cartItems.length);
    this.cookieService.set(
      'InSgCart',
      JSON.stringify(this.cart),
      cookieExpireDays,
      '/'
    );

    console.log('addToCart this.bLogin: ', this.bLogin);
    if (this.bLogin) {
      this.httpClient
        .post('/api/gifts/users/cart', { product: product, qty: qty })
        .subscribe(r => {
          console.log('addToCart result: ', r);
        });
    }
  }

  updateInCart(product: Product, qty: number) {
    for (let i = 0; i < this.cart.cartItems.length; ++i) {
      if (this.cart.cartItems[i].product._id === product._id) {
        this.cart.total -=
          this.cart.cartItems[i].product.price * this.cart.cartItems[i].qty;
        this.cart.cartItems[i].qty = qty;
        this.cart.total += product.price * qty;
        break;
      }
    }
    this.cartSubject.next(this.cart);
    this.cartItemCountSubject.next(this.cart.cartItems.length);

    this.cookieService.set(
      'InSgCart',
      JSON.stringify(this.cart),
      cookieExpireDays,
      '/'
    );

    if (this.bLogin) {
      return this.httpClient
        .put('/api/gifts/users/cart', { cart: this.cart })
        .subscribe(r => {
          console.log('updateInCart rslt: ', r);
        });
    }
  }

  removeFromCart(_id: string) {
    for (let i = 0; i < this.cart.cartItems.length; i++) {
      if (this.cart.cartItems[i].product._id === _id) {
        this.cart.total -=
          this.cart.cartItems[i].product.price * this.cart.cartItems[i].qty;
        this.cart.cartItems.splice(i, 1);
        this.cartSubject.next(this.cart);
        this.cartItemCountSubject.next(this.cart.cartItems.length);

        this.cookieService.set(
          'InSgCart',
          JSON.stringify(this.cart),
          cookieExpireDays,
          '/'
        );

        if (this.bLogin) {
          this.httpClient
            .delete('/api/gifts/users/cart/product', {
              headers: new HttpHeaders().set(
                'Content-Type',
                'application/json'
              ),
              params: new HttpParams().set('_id', _id)
            })
            .subscribe(r => {
              console.log('removeFromCart rslt: ', r);
            });
        }

        break;
      }
    }
    // this.cart.cartItems.filter(h => h.product._id != product._id);
    // this.cookieService.set('InSgCart', JSON.stringify(this.cart));
    // this.cart.total -= this.cart.cartItems[i].product.price  * this.cart.cartItems[i].product.qty;
    console.log('removeFromCart : ', this.cart);
  }

  clearCart() {
    this.cart.total = 0;
    this.cart.cartItems = [];
    this.cartSubject.next(this.cart);
    this.cartItemCountSubject.next(this.cart.cartItems.length);
    this.cookieService.set(
      'InSgCart',
      JSON.stringify(this.cart),
      cookieExpireDays,
      '/'
    );
    if (this.bLogin) {
      this.httpClient.delete('/api/gifts/users/cart').subscribe(r => {
        console.log('clearCart rslt: ', r);
      });
    }
  }

  checkout(cart: Cart) {
    if (
      !cart ||
      !cart.customer ||
      !cart.customer.name ||
      !cart.customer.mobile ||
      !cart.customer.address
    ) {
      return throwError('Name, mobile and address are required.');
    }
    return this.httpClient.post<{ orderId: string }>(
      '/api/gifts/users/cart/checkout',
      { cart: this.cart },
      httpOptions
    );
  }
}
