import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

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
  imports: [SharedModule, RouterModule.forChild(giftsCartRoutes)]
})
export class GiftsCartModule {}
