import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RegisterLoginModule } from '../register-login/register-login.module';
import { StaffsRoutingModule } from './staffs-routing.module';

import { ProductsApiService } from '../core/services/products-api.service';

import { HomeComponent } from './home/home.component';
import { StaffsNavbarComponent } from './staffs-navbar/staffs-navbar.component';

@NgModule({
  declarations: [HomeComponent, StaffsNavbarComponent],
  imports: [SharedModule, StaffsRoutingModule, RegisterLoginModule],
  providers: [ProductsApiService]
})
export class StaffsModule {}
