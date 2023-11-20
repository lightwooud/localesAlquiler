import { Component, OnInit  } from '@angular/core';
import Swal from 'sweetalert2';

import { CategoriasService } from '../categorias.service';
import {Categorias} from '../categorias';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit  {

  categorials: Categorias[] = [];

    constructor(public categoriasService: CategoriasService) { }

    ngOnInit(): void {

      this.categoriasService.index().subscribe((data: Categorias[])=>{
        this.categorials = data;
        console.log(this.categorials);
      })
    }

    deleteCategorias(id:any){

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      
      this.categoriasService.delete(id).subscribe(res => {
          this.categorials = this.categorials.filter(item => item.id !== id);
          console.log('Person deleted successfully!');
      })
    }

}
