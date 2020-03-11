import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackButtonComponent } from './go-back-button/go-back-button.component';



@NgModule({
  declarations: [GoBackButtonComponent],
  imports: [CommonModule],
  exports: [GoBackButtonComponent]
})
export class SharedModule { }
