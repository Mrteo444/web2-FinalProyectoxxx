import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XxxService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS= 'http://localhost:9090/autores'

  //GET 

  getNosotros():Observable <any>{
    return this.http.get(this. API_PRODUCTOS)
  }


  getPersonal():Observable <any>{
    return this.http.get(this. API_PRODUCTOS)
  }

  getPersonalUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
    
  }
  //get auto completado 

  getNosotrosId(id:any):Observable <any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
  }

  ////post 

  postNosotros(persona:JSON):Observable <any>{
    return this.http.post(this.API_PRODUCTOS,persona)
  }

  //Actualizar 


  putNosotros(persona:any):Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/${persona.id}`,persona)
  }
  //elimar

  deleteNosotrosID(id:any):Observable<any>{
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`)
  }

  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_PRODUCTOS, producto)
  }
}


