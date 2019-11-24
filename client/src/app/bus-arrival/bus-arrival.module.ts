import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BusArrivalRoutingModule } from './bus-arrival-routing.module';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [HomeComponent, StatusComponent],
  imports: [SharedModule, BusArrivalRoutingModule]
})
export class BusArrivalModule {}
