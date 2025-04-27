import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about-page').then((c) => c.AboutPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact-page').then((c) => c.ContactPage),
  },
  {
    path: 'user/:userId',
    loadComponent: () =>
      import('./pages/user/user-page').then((c) => c.UserPage),
  },
];
