import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirection par défaut
  { path: 'login', component: AuthComponent, data: { mode: 'login' } }, // Route pour le mode Login
  { path: 'signup', component: AuthComponent, data: { mode: 'signup' } }, // Route pour le mode Signup
  { path: 'dashboard', component: DashboardComponent }  
];
