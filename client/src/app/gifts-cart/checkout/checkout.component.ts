import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Cart } from '../../core/cart-interface';
import { CartApiService } from '../../core/services/cart-api.service';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'cart-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  cart: Cart;
  firstFormGroup: FormGroup;
  processing: boolean;
  secondFormGroup: FormGroup;
  submitDone: boolean;
  submitMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private cartApi: CartApiService,
    private usersService: UsersService
  ) {
    cartApi.cart$.subscribe(data => {
      this.cart = data;
    });
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.processing = false;
    this.secondFormGroup = this.formBuilder.group({
      message: ['']
    });
    this.submitDone = false;
    this.submitMsg = '';
  }

  onSubmit() {
    console.log(this.firstFormGroup.controls);
    console.log(this.secondFormGroup.controls);

    if(this.cart.cartItems.length <= 0) {
      return this.submitMsg = "No product in cart to checkout."
    }

    this.cart.customer = {
      name: this.firstFormGroup.controls.name.value,
      mobile: this.firstFormGroup.controls.mobile.value,
      address: this.firstFormGroup.controls.address.value,
      message: this.secondFormGroup.controls.message.value
    };
    console.log('this.cart.customer: ', this.cart.customer);

    this.processing = true;
    this.cartApi.checkout(this.cart).subscribe(
      data => {
        this.submitDone = true;
        this.cartApi.clearCart();
        console.log('checkout successfully.', data);
        this.submitMsg = `Order submitted; order no: ${data.orderId}.`;
        this.processing = false;
      },
      err => {
        this.submitMsg = JSON.stringify(err);
        console.log('checkout failed.', err);
        this.processing = false;
      }
    );
  }
}
