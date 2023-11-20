import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalesService } from '../locales.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})

export class CreateComponent implements OnInit{

  form: FormGroup;

  constructor(
    public localesService: LocalesService,
    private router: Router) { }

    ngOnInit(): void {
      console.log('Hola')
    //validar formulario
    this.form = new FormGroup({
      nombre_negocio:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      nombre_replegal:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_replegal:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      estado: new FormControl('', [Validators.required]),
      //subcategoria_id: new FormControl('', [Validators.required]),
      //categoria: new FormControl('', [Validators.required]),
      ubicacion:  new FormControl('', [ Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$') ]),
      subcategorias_id:  new FormControl('', [ Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$') ]),
      telefono: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form)
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: false,
      timer: 1200
    })
    console.log(this.form.value);
    this.localesService.store(this.form.value).subscribe(res => {
        console.log('Person created successfully!',res);
        //Swal.fire('¡Hola!', 'Este es un mensaje de alerta', 'warning');
        this.router.navigateByUrl('locales/index');
    })
  }
  
}
