import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StaffsRoutingModule } from './staffs-routing.module';

import { ProductsApiService } from '../core/services/products-api.service';

import { StaffsNavbarComponent } from './staffs-navbar/staffs-navbar.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';

@NgModule({
  declarations: [StaffsNavbarComponent, RouterOutletComponent],
  imports: [SharedModule, StaffsRoutingModule],
  providers: [ProductsApiService]
})
export class StaffsModule {}
