import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';
import {NgFor, AsyncPipe, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-agregar-editar-miembros',
  templateUrl: './agregar-editar-miembros.component.html',
  styleUrls: ['./agregar-editar-miembros.component.css']
})





export class AgregarEditarMiembrosComponent implements OnInit {
   loading:boolean=false;

  control = new FormControl('');
  Cargos: string[] = ['ANCIANO', 'DIACONO', 'DIACONISA', 'SECRETARIA'];
  filteredStreets!: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.Cargos.filter(Cargos => this._normalizeValue(Cargos).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


   constructor(){

   }

  //  ngOnInit(){

  //  }

}
