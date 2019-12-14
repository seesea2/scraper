import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { StaffsOrdersRoutingModule } from './staffs-orders-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, StaffsOrdersRoutingModule]
})
export class StaffsOrdersModule {}
