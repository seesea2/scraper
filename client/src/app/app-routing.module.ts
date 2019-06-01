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
    loadChildren: () => import('./gifts/gifts.module').then(m => m.GiftsModule)
  },
  {
    path: 'dict',
    loadChildren: () =>
      import('./dictionary/dictionary.module').then(m => m.DictionaryModule)
  },
  {
    path: 'lunch',
    loadChildren: () =>
      import('./lunchfun/lunchfun.module').then(m => m.LunchfunModule)
  },
  {
    path: 'staffs',
    loadChildren: () =>
      import('./staffs/staffs.module').then(m => m.StaffsModule)
  },
  {
    path: 'webdev',
    loadChildren: () =>
      import('./web-dev/web-dev.module').then(m => m.WebDevModule)
  }
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
