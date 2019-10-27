import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inventory',
        loadChildren: () =>
          import('../staffs-inventory/staffs-inventory.module').then(
            m => m.StaffsInventoryModule
          )
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'new-staff',
        loadChildren: () =>
          import('../staffs-new-staff/staffs-new-staff.module').then(
            m => m.StaffsNewStaffModule
          )
      },
      {
        path: '',
        loadChildren: () =>
          import('../staffs-inventory/staffs-inventory.module').then(
            m => m.StaffsInventoryModule
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
