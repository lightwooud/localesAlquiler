import { Component, OnInit  } from '@angular/core';
import Swal from 'sweetalert2';
import { LocalesService } from '../locales.service';
import { Locales } from '../locales';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  locals: Locales[] = [];

    constructor(public localesService: LocalesService) { }

    ngOnInit(): void {

      this.localesService.index().subscribe((data: Locales[])=>{
        this.locals = data;
        console.log(this.locals);
      })
    }

    deleteLocal(id:any){

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
      
      this.localesService.delete(id).subscribe(res => {
          this.locals = this.locals.filter(item => item.id !== id);
          console.log('Person deleted successfully!');
      })
    }
}
