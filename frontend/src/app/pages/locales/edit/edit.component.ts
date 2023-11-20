import { Component, OnInit } from '@angular/core';
import { Locales } from '../locales';
import { LocalesService } from '../locales.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  id: number;
  locales: Locales;
  form: FormGroup;

  constructor(
    public localesService: LocalesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['idLocales'];
    console.log('id:', this.id)
    this.localesService.find(this.id).subscribe((data: Locales) => {
        this.locales = data;
        console.log('data:',data)
    });

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
    console.log(this.form.value)
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: false,
      timer: 1200
    })
    console.log(this.id, this.form.value);
    this.localesService.update(this.id, this.form.value).subscribe(res => {
        console.log('Person updated successfully!',res);
        this.router.navigateByUrl('locales/index');
    })
  }

}
