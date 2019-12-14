import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '@shared/shared-components.module';

import { StaffsProductsRoutingModule } from './staffs-products-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [NewProductComponent, ProductListComponent],
  imports: [SharedComponentsModule, StaffsProductsRoutingModule]
})
export class StaffsProductsModule {}
