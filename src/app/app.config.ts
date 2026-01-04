import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),  // Enables change detection without Zone.js (stable in v21)
    provideRouter(routes),  // Provides the router configuration
    provideHttpClient()     // Provides the HTTP client
  ]
};
