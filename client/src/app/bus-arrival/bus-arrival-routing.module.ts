import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: ':BusStopCode', component: StatusComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusArrivalRoutingModule {}
