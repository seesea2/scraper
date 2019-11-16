import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { ProductsApiService } from 'src/app/core/services/products-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  result: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private productApi: ProductsApiService
  ) {}

  ngOnInit() {
    this.result = '';
    this.productForm = this.formBuilder.group({
      name: [this.route.snapshot.paramMap.get('name') || ''],
      price: this.route.snapshot.paramMap.get('price') || 0,
      qty: this.route.snapshot.paramMap.get('qty') || 0,
      category: [this.route.snapshot.paramMap.get('category') || ''],
      img: [this.route.snapshot.paramMap.get('img') || ''],
      note: [this.route.snapshot.paramMap.get('note') || '']
    });
  }

  submit() {
    this.productApi.newProduct(this.productForm).subscribe(
      data => {
        console.log(data);
        this.result = 'Add product successfully.';
        this.location.back();
      },
      err => {
        this.result = `Failed: ${err}.`;
        console.log(err.result);
      }
    );
  }
  delete() {
    this.productApi
      .deleteOneProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        data => {
          this.location.back();
        },
        err => {
          this.result = err.result;
        }
      );
  }

  cancel() {
    this.location.back();
  }
}
