import { NgModule } from '@angular/core';

import { StaffsAdminService } from '@core/services/staffs-admin.service';
import { SharedModule } from '@shared/shared.module';
import { StaffsNewStaffRoutingModule } from './staffs-new-staff-routing.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, StaffsNewStaffRoutingModule],
  providers: [StaffsAdminService]
})
export class StaffsNewStaffModule {}
