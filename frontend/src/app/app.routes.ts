import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadComponent: () => import('./features/shell/shell.page').then((m) => m.ShellPage),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'game',
        loadComponent: () => import('./features/game/game.page').then((m) => m.GamePage),
      },
      {
        path: 'ranking',
        loadComponent: () => import('./features/ranking/ranking.page').then((m) => m.RankingPage),
      },
    ],
  },
  { path: '**', redirectTo: 'app' },
];
