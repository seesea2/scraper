import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { SharedModule } from '@shared/shared.module';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { FooterComponent } from './footer/footer.component';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAnchor, faHeart } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [CommonModule, FooterComponent, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    CookieService
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    library: FaIconLibrary
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
    library.addIcons(faAnchor, faHeart);
  }
}
