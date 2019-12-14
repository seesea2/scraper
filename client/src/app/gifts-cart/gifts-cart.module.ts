import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';

import { SharedModule } from '@shared/shared.module';

import { CartHomeComponent } from './cart-home.component';
import { CartCheckoutComponent } from './checkout/checkout.component';

const giftsCartRoutes: Routes = [
  {
    path: '',
    component: CartHomeComponent
  },
  { path: 'checkout', component: CartCheckoutComponent }
];

@NgModule({
  declarations: [CartHomeComponent, CartCheckoutComponent],
  imports: [
    SharedModule,
    MatStepperModule,
    RouterModule.forChild(giftsCartRoutes)
  ]
})
export class GiftsCartModule {}
