import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StaffsProductsRoutingModule } from './staffs-products-routing.module';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [NewProductComponent],
  imports: [SharedModule, StaffsProductsRoutingModule]
})
export class StaffsProductsModule {}
