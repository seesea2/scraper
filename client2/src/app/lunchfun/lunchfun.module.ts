import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PalsComponent } from './pals/pals.component';
import { RecordsComponent } from './records/records.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    RecordsComponent,
    StatsComponent,
    PalsComponent,
    HomeComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class LunchfunModule {}
