import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//sets up Angular’s routing system
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = { //configures providers for application
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes) //add routersupport
  ]
};
