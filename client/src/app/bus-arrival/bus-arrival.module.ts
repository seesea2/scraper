import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '@shared/shared.module';
import { SharedModule } from '../shared/shared.module';

import { BusArrivalRoutingModule } from './bus-arrival-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, BusArrivalRoutingModule]
})
export class BusArrivalModule {}
