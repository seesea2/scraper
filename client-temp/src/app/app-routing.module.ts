import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

import { HomeComponent } from './bus-arrival/home/home.component';

const routes: Routes = [
  {
    path: 'gifts',
    loadChildren: () => import('./gifts/gifts.module').then(m => m.GiftsModule)
  },
  {
    path: 'dict',
    loadChildren: () =>
      import('./dictionary/dictionary.module').then(m => m.DictionaryModule)
  },
  {
    path: 'bus',
    loadChildren: () =>
      import('./bus-arrival/bus-arrival.module').then(m => m.BusArrivalModule)
  },
  {
    path: 'staffs',
    loadChildren: () =>
      import('./staffs/staffs.module').then(m => m.StaffsModule)
  },
  // {
  //   path: 'webdev',
  //   loadChildren: () =>
  //     import('./web-dev/web-dev.module').then(m => m.WebDevModule)
  // },
  {
    path: '',
    // redirectTo: 'bus',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(
      routes,
      // { preloadingStrategy: PreloadAllModules, enableTracing: false } // liych true for debugging
      { preloadingStrategy: QuicklinkStrategy } // liych true for debugging
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
