import { Routes } from '@angular/router';

export const HOME_ROUTS: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  {
    path: 'lifecycle',
    loadComponent: () => import('../lifecycle/lifecycle.component').then(m => m.LifecycleComponent)
  }
];