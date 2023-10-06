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
  styleUrls: ['./agregar-editar-miembros.component.css'],
  //  standalone: true,
  // imports: [FormsModule, MatAutocompleteModule, ReactiveFormsModule, NgFor, AsyncPipe],
  // imports: [
  //   FormsModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatAutocompleteModule,
  //   ReactiveFormsModule,
  //   NgFor,
  //   AsyncPipe,
  // ],
})


// export interface User {
//   name: string;
// }


export class AgregarEditarMiembrosComponent implements OnInit {
   loading:boolean=false;
   
  //  control = new FormControl('');
  //  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  //  filteredStreets!: Observable<string[]>;
 
  //  ngOnInit() {
  //    this.filteredStreets = this.control.valueChanges.pipe(
  //      startWith(''),
  //      map(value => this._filter(value || '')),
  //    );
  //  }
 
  //  private _filter(value: string): string[] {
  //    const filterValue = this._normalizeValue(value);
  //    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  //  }
 
  //  private _normalizeValue(value: string): string {
  //    return value.toLowerCase().replace(/\s/g, '');
  //  }

  Cargos:string[]=['']

   ngOnInit(){

   }


   constructor(){

   }


}


// myControl = new FormControl('');
// options: string[] = ['One', 'Two', 'Three'];
// filteredOptions: Observable<string[]>;

// ngOnInit() {
//   this.filteredOptions = this.myControl.valueChanges.pipe(
//     startWith(''),
//     map(value => this._filter(value || '')),
//   );
// }

// private _filter(value: string): string[] {
//   const filterValue = value.toLowerCase();

//   return this.options.filter(option => option.toLowerCase().includes(filterValue));
// }
