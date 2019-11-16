import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../core/products-interface';
import { ProductsApiService } from '../core/services/products-api.service';
import { CartApiService } from '../core/services/cart-api.service';

@Component({
  selector: 'gifts-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  qtyInput: number;
  currentProduct: Product;
  rslt: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsApi: ProductsApiService,
    private cartApi: CartApiService
  ) {}

  ngOnInit() {
    this.qtyInput = 5;
    this.currentProduct = null;
    this.activatedRoute.params.subscribe(p => {
      console.log('p._id : ', p._id);
      this.productsApi.getOneProduct(p._id).subscribe(
        product => {
          console.log('product : ', product);
          this.currentProduct = product;
        },
        err => {
          this.rslt = err.result;
        }
      );
    });
  }

  addToCart() {
    this.cartApi.addToCart(this.currentProduct, this.qtyInput);
  }
}
