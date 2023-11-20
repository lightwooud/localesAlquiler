// src/app/auth/auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    // Otros componentes...
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Otros módulos...
  ],
})
export class AuthModule {}
