import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@nx-ws/web/core';
import { AuthInterceptor } from '@nx-ws/web/shared/interceptors/auth-interceptor';
import { getAppConfigProvider } from '@nx-ws/web/shared/config';
import { environment } from '../environments/environment';
import { LangInterceptor } from '@nx-ws/web/shared/interceptors/lang-interceptor';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, TranslocoRootModule],
  providers: [
    getAppConfigProvider(environment),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LangInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
