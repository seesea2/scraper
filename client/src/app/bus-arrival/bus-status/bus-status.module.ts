import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { BusStatusComponent } from './bus-status.component';

const routes: Routes = [
  { path: '', component: BusStatusComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [BusStatusComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusStatusModule {}
