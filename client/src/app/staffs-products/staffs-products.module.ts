import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StaffsProductsRoutingModule } from './staffs-products-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [NewProductComponent, ProductListComponent],
  imports: [SharedModule, StaffsProductsRoutingModule]
})
export class StaffsProductsModule {}
