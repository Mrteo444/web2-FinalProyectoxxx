import { Component, inject } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { XxxService } from '../../service/xxx.service';

@Component({
  selector: 'app-infoproductos',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './infoproductos.component.html',
  styleUrl: './infoproductos.component.css'
})
export class InfoproductosComponent {
  service = inject(XxxService)

  servicios = inject(XxxService)
  ruta = inject(ActivatedRoute)
 
  id:any
  producto:any
 
  ngOnInit(): void {
    this.ruta.params.subscribe(p =>{
      this.id = p['idProducto'],
      console.log(p['idProducto']);
     
      this.servicios.getPersonalUnico(this.id).subscribe(producto=>{
        this.producto = producto
      });
    })
  }


  
 
  
    
  
}
