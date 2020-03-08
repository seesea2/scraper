import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { ServiceWorkerModule } from '@angular/service-worker';

// import { CoreModule } from '@core/core.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production
    // })
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: true
    // })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
