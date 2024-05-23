import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { IngresarProductosComponent } from '../ingresar-productos/ingresar-productos.component';
import { XxxService } from '../../service/xxx.service';

@Component({
  selector: 'app-productos-servicios',
  standalone: true,
  imports: [RouterLink,IngresarProductosComponent],
  templateUrl: './productos-servicios.component.html',
  styleUrl: './productos-servicios.component.css'
})
export class ProductosServiciosComponent {
  servicio = inject(XxxService)
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

}
