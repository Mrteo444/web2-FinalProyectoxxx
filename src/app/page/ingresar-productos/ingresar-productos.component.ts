import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XxxService } from '../../service/xxx.service';
import { ProductosServiciosComponent } from '../productos-servicios/productos-servicios.component';


@Component({
  selector: 'app-ingresar-productos',
  standalone: true,
  imports: [FormsModule,ProductosServiciosComponent],
  templateUrl: './ingresar-productos.component.html',
  styleUrl: './ingresar-productos.component.css'
})
export class IngresarProductosComponent {
  constructor(private servicio: XxxService){}

  nombre:any
  precio:any
  id:any
  categoria:any

  cargar(form: any) {


    this.servicio.postProducto(form.value).subscribe()
    //window.location.reload()

  }

}
