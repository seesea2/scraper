import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgBootstrapModule } from './ng-bootstrap.module';
import { MaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';

import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [CategoriesTreeComponent, SendMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBootstrapModule,
    MaterialModule
  ],
  providers: [CookieService],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgBootstrapModule,
    ReactiveFormsModule,
    CategoriesTreeComponent,
    SendMessageComponent
  ]
})
export class SharedModule {}
