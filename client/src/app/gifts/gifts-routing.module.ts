import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftsRootComponent } from './root.component';

const giftsRoutes: Routes = [
  {
    path: '',
    component: GiftsRootComponent,
    children: [
      {
        path: '',
        loadChildren: '../gifts-home/gifts-home.module#GiftsHomeModule'
      },
      {
        path: 'browse',
        loadChildren: '../gifts-browse/gifts-browse.module#GiftsBrowseModule'
      },
      {
        path: 'cart',
        loadChildren: '../gifts-cart/gifts-cart.module#GiftsCartModule'
      },
      {
        path: 'trackOrder',
        loadChildren:
          '../gifts-track-order/gifts-track-order.module#GiftsTrackOrderModule'
      },
      {
        path: 'view',
        loadChildren:
          '../gifts-view-product/gifts-view-product.module#GiftsViewProductModule'
      },
      {
        path: 'registerLogin',
        loadChildren:
          '../register-login/register-login.module#RegisterLoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(giftsRoutes)],
  exports: [RouterModule]
})
export class GiftsRoutingModule {}
