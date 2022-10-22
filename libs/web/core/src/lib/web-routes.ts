import { Route } from '@angular/router';
import { WebLayoutComponent } from '@nx-ws/web/shared/ui/web-layout';

export const webRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: async () => (await import('@nx-ws/web/feat/landing-page')).LandingPageModule
  },
  {
    path: 'login',
    loadChildren: async () => (await import('@nx-ws/web/feat/login-page')).LoginPageModule
  },
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: async () => (await import('@nx-ws/web/feat/home-page')).HomePageModule
      }
    ]
  }
];
