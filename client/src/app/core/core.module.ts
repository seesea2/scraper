import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, CommonModule, HttpClientModule, RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    CookieService
  ],
  exports: [HttpClientModule, RouterModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
