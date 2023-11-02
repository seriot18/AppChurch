import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { miembros } from '../interfaces/miembros';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Miembros/';

  constructor(private http: HttpClient) { }

  getMiembros(): Observable<miembros[]>{
    return this.http.get<miembros[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getMiembro(id: number): Observable<miembros> {
    return this.http.get<miembros>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deletemiembro(id: number){
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }


  addmiembro(miembro:miembros): Observable<miembros> {
    return this.http.post<miembros>(`${this.myAppUrl}${this.myApiUrl}`,miembro);

  }

  updatemiembro(id: number, miembro:miembros):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,miembro);

  }



}
