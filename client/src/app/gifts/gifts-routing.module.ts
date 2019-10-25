import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftsRootComponent } from './root.component';

const giftsRoutes: Routes = [
  {
    path: '',
    component: GiftsRootComponent,
    children: [
      {
        path: 'browse',
        loadChildren: () =>
          import('../gifts-browse/gifts-browse.module').then(
            m => m.GiftsBrowseModule
          )
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../gifts-cart/gifts-cart.module').then(m => m.GiftsCartModule)
      },
      {
        path: 'trackOrder',
        loadChildren: () =>
          import('../gifts-track-order/gifts-track-order.module').then(
            m => m.GiftsTrackOrderModule
          )
      },
      {
        path: 'view',
        loadChildren: () =>
          import('../gifts-view-product/gifts-view-product.module').then(
            m => m.GiftsViewProductModule
          )
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../gifts-home/gifts-home.module').then(m => m.GiftsHomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(giftsRoutes)],
  exports: [RouterModule]
})
export class GiftsRoutingModule {}
