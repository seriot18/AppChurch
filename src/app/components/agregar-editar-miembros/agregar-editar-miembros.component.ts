import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, throwError} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

// import * as LR from "@uploadcare/blocks";

// LR.registerBlocks(LR);


@Component({
  selector: 'app-agregar-editar-miembros',
  templateUrl: './agregar-editar-miembros.component.html',
  styleUrls: ['./agregar-editar-miembros.component.css']
})





export class AgregarEditarMiembrosComponent implements OnInit {
   loading:boolean=false;

  control = new FormControl('');
  Cargos: string[] = ['ANCIANO', 'DIACONO', 'DIACONISA', 'SECRETARIA'];
  filtrocargos!: Observable<string[]>;



  ngOnInit() {
    this.filtrocargos = this.control.valueChanges.pipe(
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

  url="./assets/image.jpg";


  onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  


   constructor(){

   }


 


}

