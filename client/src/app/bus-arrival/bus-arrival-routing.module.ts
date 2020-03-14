import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusArrivalComponent } from './bus-arrival.component';

const routes: Routes = [
  {
    path: ':BusStopCode',
    loadChildren: () =>
      import('./bus-status/bus-status.module').then(m => m.BusStatusModule)
  },
  {
    path: '',
    component: BusArrivalComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusArrivalRoutingModule {}
