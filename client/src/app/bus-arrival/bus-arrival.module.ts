import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BusArrivalRoutingModule } from './bus-arrival-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    MatSnackBarModule,
    BusArrivalRoutingModule
  ]
})
export class BusArrivalModule {}
