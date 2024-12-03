import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '', loadChildren: () => import('./features/home/home.routes').then(r => r.HOME_ROUTS)
  }
];