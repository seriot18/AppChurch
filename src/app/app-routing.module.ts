import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ListadoMiembrosComponent from './components/listado-miembros/listado-miembros.component';
import { VerMiembrosComponent } from './components/ver-miembros/ver-miembros.component';
import { AgregarEditarMiembrosComponent } from './components/agregar-editar-miembros/agregar-editar-miembros.component';
import { StandaloneComponent } from './components/standalone/standalone.component';

const routes: Routes = [
  {path:'', redirectTo: 'ListadoMiembros',pathMatch:'full'},
  {path:'ListadoMiembros', component:ListadoMiembrosComponent},
  {path:'VerMiembro/:id', component:VerMiembrosComponent},
  {path:'EditarMiembro/:id', component:AgregarEditarMiembrosComponent},
  {path:'AgregarMiembro', component:AgregarEditarMiembrosComponent},
  {path:'Standalone', component:StandaloneComponent},
  {path:'**', redirectTo: 'ListadoMiembros',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
