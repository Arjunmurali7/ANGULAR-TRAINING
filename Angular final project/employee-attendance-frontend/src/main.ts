import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes'; // your routes file

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // allow HTTP calls
    provideRouter(routes) // enable routing
  ]
});
