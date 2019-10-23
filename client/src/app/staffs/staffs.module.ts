import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StaffsRoutingModule } from './staffs-routing.module';

import { ProductsApiService } from '../core/services/products-api.service';

import { HomeComponent } from './home/home.component';
import { StaffsNavbarComponent } from './staffs-navbar/staffs-navbar.component';

@NgModule({
  declarations: [HomeComponent, StaffsNavbarComponent],
  imports: [SharedModule, StaffsRoutingModule],
  providers: [ProductsApiService]
})
export class StaffsModule {}
