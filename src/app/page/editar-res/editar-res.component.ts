import { Component, inject } from '@angular/core';
import { NosotrosService } from '../../service/nosotros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-res',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-res.component.html',
  styleUrl: './editar-res.component.css'
})
export class EditarResComponent {

  servicio =inject(NosotrosService) 

  mesa: any;
  tipo_de_comida: any;
  id:any;
  

  registro(datos: any) {
    this.servicio.postNosotros(datos.value).subscribe()
    window.location.href=('restaurante')
    
  }


}
