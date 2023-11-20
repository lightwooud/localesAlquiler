import { Component, OnInit  } from '@angular/core';
import Swal from 'sweetalert2';
import { SubcategoriasService } from '../subcategorias.service';
import { Subcategorias } from '../subcategorias';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit  {

  subcategorials: Subcategorias[] = [];

    constructor(public subcategoriasService: SubcategoriasService) { }

    ngOnInit(): void {

      this.subcategoriasService.index().subscribe((data: Subcategorias[])=>{
        this.subcategorials = data;
        console.log(this.subcategorials);
      })
    }

    deleteSubcategorias(id:any){

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
      
      this.subcategoriasService.delete(id).subscribe(res => {
          this.subcategorials = this.subcategorials.filter(item => item.id !== id);
          console.log('Person deleted successfully!');
      })
    }

}
