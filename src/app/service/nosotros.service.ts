import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private http: HttpClient) { }

  private API_NOSOTROS= 'http://localhost:3000/nostros'

  //get 

  getNosotros():Observable <any>{
    return this.http.get(this. API_NOSOTROS)
  }

  //get auto completado 

  getNosotrosId(id:any):Observable <any>{
    return this.http.get(`${this.API_NOSOTROS}/${id}`)
  }

  ////post 

  postNosotros(persona:JSON):Observable <any>{
    return this.http.post(this.API_NOSOTROS,persona)
  }

  //Actualizar 


  putNosotros(persona:any):Observable<any>{
    return this.http.put(`${this.API_NOSOTROS}/${persona.id}`,persona)
  }
  //elimar

  deleteNosotrosID(id:any):Observable<any>{
    return this.http.delete(`${this.API_NOSOTROS}/${id}`)
  }
}
