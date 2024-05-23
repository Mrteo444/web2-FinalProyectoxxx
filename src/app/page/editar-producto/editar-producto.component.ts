import { Component, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { XxxService } from '../../service/xxx.service';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  id: any;
  nombre: any;
  precio: any;
  categoria: any;
  ruta=inject(Router)
  router=inject(ActivatedRoute)
  servicio = inject(XxxService)

  ngOnInit() {
    this.router.params.subscribe(r =>{
      this.servicio.getNosotrosId(r['idNosotros']).subscribe(p =>{
        this.id = p.id,
        this.nombre=p.nombre,
        this.precio=p.precio,
        this.categoria=p.categoria
      })
    })
   
  }



  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()

    this.ruta.navigateByUrl("productos")
  }


}
