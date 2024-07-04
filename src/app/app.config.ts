import {ApplicationConfig} from '@angular/core';
import {provideWorkbench} from '@scion/workbench';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideWorkbench(),
  ],
};
