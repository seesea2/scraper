import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../staffs-inventory/staffs-inventory.module').then(
            m => m.StaffsInventoryModule
          )
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('../staffs-inventory/staffs-inventory.module').then(
            m => m.StaffsInventoryModule
          )
      },
      {
        path: 'registerLogin',
        loadChildren: () =>
          import('../register-login/register-login.module').then(
            m => m.RegisterLoginModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule {}
