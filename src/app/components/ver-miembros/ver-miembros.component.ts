import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { miembros } from 'src/app/interfaces/miembros';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-ver-miembros',
  templateUrl: './ver-miembros.component.html',
  styleUrls: ['./ver-miembros.component.css']
})

export class VerMiembrosComponent implements OnInit {

  id:number;
  miembro!: miembros;
  
     
  constructor(private _miembroService:MiembrosService, 
    private aRoute: ActivatedRoute){  
    this.id = Number(this.aRoute.snapshot.paramMap.get('id')!);
    
  }

  ngOnInit(): void{
    this.obtenermiembro();

  }

  

  obtenermiembro() {

    this._miembroService.getMiembro(this.id).subscribe(data => {
      this.miembro = data;
      console.log(data)
    })
  }


}
