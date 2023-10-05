import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-agregar-editar-miembros',
  templateUrl: './agregar-editar-miembros.component.html',
  styleUrls: ['./agregar-editar-miembros.component.css'],
})





export class AgregarEditarMiembrosComponent implements OnInit {
   loading:boolean=false;



   ngOnInit(){

   }


   constructor(){

   }


}
