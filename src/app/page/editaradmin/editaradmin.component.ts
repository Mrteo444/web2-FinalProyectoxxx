import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editaradmin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editaradmin.component.html',
  styleUrl: './editaradmin.component.css'
})
export class EditaradminComponent {
  id: any;
  email: any;
  password: any;
  roll: any;
  ruta=inject(Router)
  router=inject(ActivatedRoute)

  ngOnInit() {
    this.router.params.subscribe(r =>{
      this.servicio.getNosotrosId(r['idNosotros']).subscribe(p =>{
        this.id = p.id,
        this.email=p.nombre,
        this.password=p.edad,
        this.roll=p.edad
      })
    })
   
  }

  servicio=inject(LoginService)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()

    this.ruta.navigateByUrl("admin")
  }

}
