import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
import { miembros } from 'src/app/interfaces/miembros';
import { MiembrosService } from 'src/app/services/miembros.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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
  form:FormGroup
  id:number;
  operacion:string="Agregar"




  constructor(private fb: FormBuilder,
    private _miembroServices:MiembrosService, private _snackBar: MatSnackBar, 
    private router:Router,
    private aRoute:ActivatedRoute){
    
    
      this.form=this.fb.group({
       Nombres:['', Validators.required],
       Apellidos:['', Validators.required],
       FechaNac:[''],
       FechaBa:[''],
      //  Cargo:['']
       
    })
    

    this.id=Number(this.aRoute.snapshot.paramMap.get('id'));
  
   }


  ngOnInit() {

    this.filtrocargos = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    if(this.id != 0){
      this.operacion="Editar"
      this.obternermiembro(this.id)
    }


  }




  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.Cargos.filter(Cargos => this._normalizeValue(Cargos).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  // url="./assets/image.jpg";


  // onselectFile(e:any){
  //   if(e.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //     }
  //   }
  // }
  


  



  agregarEditarMiembro(){
    //this.form.value.Cargo=this.control.value
    

    const miembros:miembros = {
      nombres:this.form.value.Nombres,
      apellidos:this.form.value.Apellidos,
      fechaNac:this.form.value.FechaNac,
      fechaBa:this.form.value.FechaBa

    }
    
    // console.log(miembros)
   

    // this._miembroServices.addmiembro(miembros).subscribe(data =>{
    //   console.log(data)
    // })



    if(this.id != 0 ) {

      miembros.id = this.id;
      this.editarmiembro(this.id, miembros);

    } else {
      this.agregarmiembro(miembros);

    }


  }

  editarmiembro(id:number, miembros:miembros){
    this.loading=true;
    this.mensajeExito('actualizado')
    this._miembroServices.updatemiembro(id,miembros).subscribe(() => {
      this.loading=false;
    })

  }


  
  agregarmiembro(miembros:miembros){
    this._miembroServices.addmiembro(miembros).subscribe(data => {
      console.log(data)
      this.mensajeExito('registrada');
      this.router.navigate(["/ListadoMiembros"]);

    });
  }
  


  obternermiembro(id:number){
    this.loading=true;
    this._miembroServices.getMiembro(id).subscribe(data => {
      // console.log(data)
      this.form.setValue({
        Nombres: data.nombres,
        Apellidos:data.apellidos,
        FechaNac:data.fechaNac,
        FechaBa:data.fechaBa
      })
      this.loading=false;
    })
  }


  mensajeExito(text:string){
    this.loading=false;
    this._snackBar.open(`Miembro ${text} con Exito`,"X", {
      duration:4000,
      horizontalPosition:'right'
      
    });
  }


 


}

