import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
    private API_USERS='http://localhost:3000/login';

    ////para registrar 
    private API_USERS2='http://localhost:3000/users';

    postUsers(usuario:any):Observable<any>{
      return this.http.post(this.API_USERS,usuario)
    }

    postUsers2(usuario:any):Observable<any>{
      return this.http.post(this.API_USERS2,usuario)
    }
    ////////////////////
    //get 

  getNosotros():Observable <any>{
    return this.http.get(this. API_USERS2)
  }

  //get auto completado 

  getNosotrosId(id:any):Observable <any>{
    return this.http.get(`${this.API_USERS2}/${id}`)
  }

  ////post 

  postNosotros(persona:JSON):Observable <any>{
    return this.http.post(this.API_USERS2,persona)
  }

  //Actualizar 


  putNosotros(persona:any):Observable<any>{
    return this.http.put(`${this.API_USERS2}/${persona.id}`,persona)
  }
  //elimar

  deleteNosotrosID(id:any):Observable<any>{
    return this.http.delete(`${this.API_USERS2}/${id}`)
  }
}
