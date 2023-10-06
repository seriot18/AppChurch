import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgregarEditarMiembrosComponent} from './components/agregar-editar-miembros/agregar-editar-miembros.component';
import  ListadoMiembrosComponent from './components/listado-miembros/listado-miembros.component';
import { VerMiembrosComponent } from './components/ver-miembros/ver-miembros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

//Modulos
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    ListadoMiembrosComponent,
    VerMiembrosComponent,
    AgregarEditarMiembrosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
