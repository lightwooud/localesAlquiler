import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'subcategorias/index', component: IndexComponent },
  { path: 'subcategorias/create', component: CreateComponent },

  {
    path: 'subcategorias/edit/:idSubcategorias',
    component: EditComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriasRoutingModule { }
