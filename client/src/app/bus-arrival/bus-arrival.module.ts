import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
// import { SharedModule } from '../shared/shared.module';

import { BusArrivalRoutingModule } from './bus-arrival-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

// liych testing
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, BusArrivalRoutingModule,MatSnackBarModule,MatListModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
  exports: [HomePageComponent]
})
export class BusArrivalModule { }
