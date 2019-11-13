import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private productApi: ProductsApiService
  ) {}

  ngOnInit() {
    this.result = '';
    this.productForm = this.formBuilder.group({
      name: [''],
      price: 0,
      qty: 0,
      category: [''],
      img: [''],
      note: ['']
    });
  }

  submit() {
    this.productApi.newProduct(this.productForm).subscribe(
      data => {
        console.log(data);
        this.result = 'Add product successfully.';
      },
      err => {
        this.result = `Failed: ${err}.`;
        console.log(err);
      }
    );
  }
}
