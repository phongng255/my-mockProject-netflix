import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'browse',
    loadComponent: () =>
      import('./page/browse/browse.component').then((a) => a.BrowserComponent),
  },
  {
    path: '**',
    redirectTo: 'browse',
  },
];
