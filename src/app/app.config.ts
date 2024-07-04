import {ApplicationConfig} from '@angular/core';
import {MAIN_AREA, provideWorkbench} from '@scion/workbench';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideWorkbench({
      layout: factory => factory
        .addPart(MAIN_AREA)
        .addPart('left', {relativeTo: MAIN_AREA, align: 'left', ratio: .25})
        .addPart('right', {relativeTo: MAIN_AREA, align: 'right', ratio: .25})
        .addView('orders', {partId: 'left'})
        .navigateView('orders', ['orders']),
    }),
  ],
};
