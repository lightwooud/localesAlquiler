import { Component } from '@angular/core';
import { AuthService } from '../authService';

@Component({
  selector: 'app-logout',
  template: '<p>Cerrando sesión...</p>',
})
export class LogoutComponent {
  constructor(private authService: AuthService) {
    this.logout();
  }

  logout(): void {
    this.authService.logout().subscribe(
      response => {
        console.log('Cierre de sesión exitoso', response);
        // Redirige o realiza otras acciones según tu aplicación
      },
      error => {
        console.error('Error en el cierre de sesión', error);
        // Maneja el error según tu aplicación
      }
    );
  }
}
