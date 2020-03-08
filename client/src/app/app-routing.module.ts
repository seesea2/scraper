import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

import { HomePageComponent } from './bus-arrival/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
