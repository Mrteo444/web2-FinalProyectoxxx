import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { NosotrosService } from '../../service/nosotros.service';
import { RouterLink } from '@angular/router';
import { ProductosServiciosComponent } from '../productos-servicios/productos-servicios.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,ProductosServiciosComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  servicio =inject(LoginService) 
  token: any;

  logaut(){
    localStorage.removeItem('token')
    if (this.token !== '') {
      localStorage.setItem('token','false');
      //this.router.navigate(['privado']); 

      window.location.href=('login')
    }
  }

  
  
  personas : any

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
    
  }
  
  eliminar(id:any){
    this.servicio.deleteNosotrosID(id).subscribe()
    window.location.reload()
  }

  registro(datos: any) {
    this.servicio.postUsers2(datos.value).subscribe()
    window.location.href=('login')
    
  }

}

