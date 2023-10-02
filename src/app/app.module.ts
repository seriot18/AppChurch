import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMiembrosComponent } from './components/agregar-editar-miembros/agregar-editar-miembros.component';
import ListadoMiembrosComponent from './components/listado-miembros/listado-miembros.component';
import { VerMiembrosComponent } from './components/ver-miembros/ver-miembros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//@angular material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



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
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
