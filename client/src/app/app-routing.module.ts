import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gifts',
    pathMatch: 'full'
  },
  {
    path: 'gifts',
    loadChildren: './gifts/gifts.module#GiftsModule'
  },
  {
    path: 'dict',
    loadChildren: './dictionary/dictionary.module#DictionaryModule'
  },
  {
    path: 'lunch',
    loadChildren: './lunchfun/lunchfun.module#LunchfunModule'
  },
  { path: 'staffs', loadChildren: './staffs/staffs.module#StaffsModule' },
  { path: 'webdev', loadChildren: './web-dev/web-dev.module#WebDevModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules, enableTracing: false } // true for debugging
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
