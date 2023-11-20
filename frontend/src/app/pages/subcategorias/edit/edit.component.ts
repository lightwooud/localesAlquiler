import { Component, OnInit } from '@angular/core';
import { SubcategoriasService } from '../subcategorias.service';
import { Subcategorias } from '../subcategorias';
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
  subcategorias: Subcategorias;
  form: FormGroup;

  constructor(
    public subcategoriasService: SubcategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['idSubcategorias'];
    console.log('id:', this.id)
    this.subcategoriasService.find(this.id).subscribe((data: Subcategorias) => {
        this.subcategorias = data;
        console.log('data:',data)
    });

    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      descripcion:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      estado: new FormControl('', [Validators.required]),
      categorias_id:  new FormControl('', [ Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$') ]),
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
    this.subcategoriasService.update(this.id, this.form.value).subscribe(res => {
        console.log('Person updated successfully!',res);
        this.router.navigateByUrl('subcategorias/index');
    })
  }

}
