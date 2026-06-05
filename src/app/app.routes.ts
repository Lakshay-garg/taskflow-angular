import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskList } from './pages/task-list/task-list';
import { Login } from './pages/login/login';
import { LoginLayout } from './layout/login-layout/login-layout';
import { Layout } from './layout/layout/layout';
import { SignUp } from './pages/sign-up/sign-up';
import { authGuard } from './guards/auth-guard-guard';
import { TaskDetailPage } from './pages/task-detail-page/task-detail-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'sign-up', component: SignUp },
    ],
  },
  {
    path: 'auth',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'task-list', component: TaskList },
      { path: 'task-detail/:id', component: TaskDetailPage },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
