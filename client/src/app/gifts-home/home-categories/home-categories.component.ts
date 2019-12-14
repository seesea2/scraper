import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsApiService } from '../../core/services/products-api.service';
import { CategoryWithSamples, Product } from '../../core/products-interface';

@Component({
  selector: 'home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent implements OnInit {
  sampleProducts: Product[];
  samplesOfCategories: CategoryWithSamples[];
  loading: boolean;

  constructor(
    private productsApi: ProductsApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.samplesOfCategories = null;
    this.productsApi.getSampleProducts().subscribe(
      samples => {
        console.log('sample products: ', samples)
        this.sampleProducts = samples;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  getCategoryName(categoryWithSamples: CategoryWithSamples) {
    const split = categoryWithSamples._id.category.split('/');
    return split[split.length - 1];
  }

  browseCategory(category: string) {
    return this.router.navigate(['/gifts/browse', { category: category }]);
  }
}
