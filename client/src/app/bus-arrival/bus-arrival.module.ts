import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BusArrivalRoutingModule } from './bus-arrival-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, BusArrivalRoutingModule]
})
export class BusArrivalModule {}
