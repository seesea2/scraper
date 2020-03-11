import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'go-back',
    loadChildren: () =>
      import('./shared/shared.module').then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
