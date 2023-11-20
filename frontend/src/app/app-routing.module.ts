import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import {UsuariosComponent} from './pages/usuarios/usuarios.component'
import { HomeComponent } from './pages/home/home.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
export const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
