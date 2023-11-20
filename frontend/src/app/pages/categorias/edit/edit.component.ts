import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categorias } from '../categorias';
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
  categorias: Categorias;
  form: FormGroup;

  constructor(
    public categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['idCategorias'];
    console.log('id:', this.id)
    this.categoriasService.find(this.id).subscribe((data: Categorias) => {
        this.categorias = data;
        console.log('data:',data)
    });

    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      descripcion:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      estado: new FormControl('', [Validators.required]),
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
    this.categoriasService.update(this.id, this.form.value).subscribe(res => {
        console.log('Person updated successfully!',res);
        this.router.navigateByUrl('categorias/index');
    })
  }

}
