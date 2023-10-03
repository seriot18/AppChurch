import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMiembrosComponent } from './components/agregar-editar-miembros/agregar-editar-miembros.component';
import ListadoMiembrosComponent from './components/listado-miembros/listado-miembros.component';
import { VerMiembrosComponent } from './components/ver-miembros/ver-miembros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { SharedModule } from './shared/shared.module';









@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMiembrosComponent,
    ListadoMiembrosComponent,
    VerMiembrosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
