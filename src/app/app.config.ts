import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig,provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),  // Enables change detection without Zone.js
    provideRouter(routes),  // Provides the router configuration
    provideHttpClient()     // Provides the HTTP client
  ]
};