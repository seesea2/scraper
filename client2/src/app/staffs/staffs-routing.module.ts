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
        loadChildren:
          '../staffs-inventory/staffs-inventory.module#StaffsInventoryModule'
      },
      {
        path: 'inventory',
        loadChildren:
          '../staffs-inventory/staffs-inventory.module#StaffsInventoryModule'
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule {}
