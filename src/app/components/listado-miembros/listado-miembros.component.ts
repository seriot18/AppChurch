import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { miembros } from 'src/app/interfaces/miembros';
import { MiembrosService } from 'src/app/services/miembros.service';
import { DatePipe } from '@angular/common';


 //export interface PeriodicElement {
  //name: string;
  //position: number;
  //weight: number;
  //symbol: string;


    // id:number;
    // nombre:string;
    // apellido:string;
    // fechanac:string;
    // fechabautismo:string;
 //}


@Component({
  selector: 'app-listado-miembros',
  templateUrl: './listado-miembros.component.html',
  styleUrls: ['./listado-miembros.component.css']
})


export default class ListadoMiembrosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [ 'nombre', 'apellido', 'fechanac', 'fechaba', 'acciones'];
  //dataSource = listaMiembros;
  dataSource = new MatTableDataSource<miembros>();
  loading:boolean=false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private _snackBar: MatSnackBar, private _miembrosServices:MiembrosService, private datePipe: DatePipe){

  }



  ngOnInit(): void{
    this.obtenerMiembros();

  }


   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel='Elementos por Página';
    this.dataSource.sort = this.sort;
  }

  eliminarmiembro(id:number){
    this.loading=true;

    this._miembrosServices.deletemiembro(id).subscribe(() =>{
      this.mensajeExito();
      this.loading=false;
      this.obtenerMiembros();


    });




  }

  mensajeExito(){
    this.loading=false;
    this._snackBar.open("Miembro Eliminado con Exito","X", {
      duration:4000,
      horizontalPosition:'right'
      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  obtenerMiembros(){
    this._miembrosServices.getMiembros().subscribe({
        next: (data) => {
          this.loading= false;
          this.dataSource.data=data;
        },
        error: (e) => this.loading =false,
        complete: () => console.log("complete")
        

      }
    )
  }
}
