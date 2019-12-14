import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, Category } from '@core/products-interface';
import { ProductsApiService } from '@core/services/products-api.service';
import { CartApiService } from '@core/services/cart-api.service';

@Component({
  selector: 'gifts-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  categoryBreadcrumb: string[];
  products: Product[];
  loadingProduct: boolean;
  productCurrentQty: number[];

  constructor(
    private productsApiService: ProductsApiService,
    private cartApiService: CartApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryBreadcrumb = null;
    this.products = null;
    this.loadingProduct = true;
    this.productCurrentQty = [];

    this.activatedRoute.params.subscribe(p => {
      this.refresh(p.category);
    });
  }

  getProducts(category: string) {
    this.productsApiService.getProducts(category).subscribe(
      data => {
        this.products = data;
        this.productCurrentQty = [];
        data.forEach(d => {
          this.productCurrentQty.push(1);
        });
      },
      err => {
        console.log(err.error);
      }
    );
  }

  refresh(category: string) {
    this.loadingProduct = true;
    this.getProducts(category);
    if (category) {
      this.categoryBreadcrumb = category.split('/');
      if (!this.categoryBreadcrumb[0]) {
        this.categoryBreadcrumb.splice(0, 1);
      }
    }
    this.loadingProduct = false;
  }

  onBreadcrumb(ind: number) {
    let newCategory = '';
    for (let i = 0; i <= ind; ++i) {
      newCategory += '/' + this.categoryBreadcrumb[i];
    }
    console.log(newCategory);
    return this.router.navigate(['/gifts/browse', { category: newCategory }]);
  }

  addToCart(i: number) {
    this.cartApiService.addToCart(this.products[i], this.productCurrentQty[i]);
  }

  updateInCart(i: number) {
    this.cartApiService.updateInCart(
      this.products[i],
      this.productCurrentQty[i]
    );
  }

  ScrollToTop() {}
}
