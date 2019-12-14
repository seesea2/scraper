import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgBootstrapModule } from './ng-bootstrap.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    NgBootstrapModule,
    // FontAwesomeModule
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    NgBootstrapModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
