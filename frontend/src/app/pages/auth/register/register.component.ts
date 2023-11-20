// register.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'] // Asegúrate de que la ruta sea correcta
})

export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      const userData = {
        name: registerForm.value.name,
        apellido: registerForm.value.apellido,
        local_id: registerForm.value.local_id,
        cargo: registerForm.value.cargo,
        email: registerForm.value.email,
        password: registerForm.value.password
      };

      this.authService.register(userData).subscribe(
        response => {
          // Maneja la respuesta del servidor después del registro exitoso
          console.log(response);
        },
        error => {
          // Maneja errores en el registro
          console.error(error);
        }
      );
    }
  }
}
