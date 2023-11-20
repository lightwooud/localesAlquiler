import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubcategoriasService } from '../subcategorias.service';
import { Subcategorias } from '../subcategorias';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})

export class CreateComponent implements OnInit{

  form: FormGroup;
  categoriasSelect: any[];

  constructor(
    public subcategoriasService: SubcategoriasService,
    private router: Router) { }

    ngOnInit(): void {
     
    //validar formulario
    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      descripcion:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      estado: new FormControl('', [Validators.required]),
      categorias_id: new FormControl('', [Validators.required]),
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
    this.subcategoriasService.store(this.form.value).subscribe(res => {
        console.log('Person created successfully!',res);

        this.router.navigateByUrl('subcategorias/index');
    })
  }
  
}
