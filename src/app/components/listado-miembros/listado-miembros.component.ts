import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { miembros } from 'src/app/interfaces/miembros';


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

const listaMiembros: miembros[] = [
  {id: 1, nombre: 'Jose Ramon', apellido: 'Fernandez', fechanac:'1991-08-18', fechabautismo:"2018-03-16"},
  {id: 2, nombre: 'Brandy', apellido: 'De La Cruz', fechanac: '1991-08-18', fechabautismo:'1991-08-18'},
  {id: 3, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  {id: 4, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  {id: 5, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  {id: 6, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  {id: 7, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  {id: 8, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  {id: 9, nombre: 'Auris Idelisa', apellido: 'Defillo', fechanac: '1991-08-18' , fechabautismo:'1991-08-18'},
  
];


@Component({
  selector: 'app-listado-miembros',
  templateUrl: './listado-miembros.component.html',
  styleUrls: ['./listado-miembros.component.css']
})


export default class ListadoMiembrosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'fechanac', 'fechabautismo', 'acciones'];
  //dataSource = listaMiembros;
  dataSource = new MatTableDataSource<miembros>(listaMiembros);
  loading:boolean=false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar){

  }

  ngOnInit(): void{

  }


   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel='Elementos por Página';
    this.dataSource.sort = this.sort;
  }

  eliminarmiembro(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
      this._snackBar.open("Miembro Eliminado con Exito","Cerrar", {
        duration:4000,
        horizontalPosition:'right'
        
      });
    },3000);


    

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
}