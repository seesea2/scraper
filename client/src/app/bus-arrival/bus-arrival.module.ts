import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BusArrivalRoutingModule } from './bus-arrival-routing.module';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [HomeComponent, StatusComponent],
  imports: [
    SharedModule,
    MatSnackBarModule,
    MatTableModule,
    BusArrivalRoutingModule
  ]
})
export class BusArrivalModule {}
