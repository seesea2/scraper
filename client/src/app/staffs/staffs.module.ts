import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '@shared/shared-components.module';
import { StaffsRoutingModule } from './staffs-routing.module';

import { ProductsApiService } from '@core/services/products-api.service';

import { StaffsNavbarComponent } from './staffs-navbar/staffs-navbar.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';

@NgModule({
  declarations: [StaffsNavbarComponent, RouterOutletComponent],
  imports: [SharedComponentsModule, StaffsRoutingModule],
  providers: [ProductsApiService]
})
export class StaffsModule {}
