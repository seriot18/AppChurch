import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMiembrosComponent } from './components/agregar-editar-miembros/agregar-editar-miembros.component';
import { ListadoMiembrosComponent } from './components/listado-miembros/listado-miembros.component';
import { VerMiembrosComponent } from './components/ver-miembros/ver-miembros.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMiembrosComponent,
    ListadoMiembrosComponent,
    VerMiembrosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
