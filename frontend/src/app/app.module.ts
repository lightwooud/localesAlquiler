import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalesModule } from './pages/locales/locales.module';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { HomeComponent } from './pages/home/home.component';
import { SubcategoriasModule } from './pages/subcategorias/subcategorias.module';
import { AuthModule } from './pages/auth/auth.module';
import { ReportesComponent } from './pages/reportes/reportes.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportesComponent,
  
  
   /* SubcategoriasComponent,
    UsuariosComponent,
    LocalesComponent,
    CreateComponent,
    EditComponent,
    IndexComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LocalesModule,
    AuthModule,
    CategoriasModule,
    SubcategoriasModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
