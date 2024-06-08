import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login.component').then((a) => a.LoginComponent),
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./page/browse/browse.component').then((a) => a.BrowserComponent),
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
