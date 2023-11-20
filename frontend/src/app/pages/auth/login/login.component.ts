import { Component } from '@angular/core';
import { AuthService } from '../authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'] // Asegúrate de que la ruta sea correcta
})

export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(data: any): void {
    this.authService.login(data).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
        // Redirige o realiza otras acciones según tu aplicación
      },
      error => {
        console.error('Error en el inicio de sesión', error);
        // Maneja el error según tu aplicación
      }
    );
  }
}
