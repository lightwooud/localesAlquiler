import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'categorias/index', component: IndexComponent },
  { path: 'categorias/create', component: CreateComponent },

  {
    path: 'categorias/edit/:idCategorias',
    component: EditComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
