import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IngresarProductosComponent } from '../ingresar-productos/ingresar-productos.component';
import { CommonModule } from '@angular/common';
import { XxxService } from '../../service/xxx.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterLink,IngresarProductosComponent,FormsModule,CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  servicio = inject(XxxService)
  personas : any

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
    
  }
  productosAgregados: any[] = [];

  agregarProducto(producto: any) {
    let nuevoProducto = { ...producto };
    // Asegurémonos de que el precio sea un número antes de agregarlo
    nuevoProducto.precio = parseFloat(nuevoProducto.precio);
    if (!isNaN(nuevoProducto.precio)) {
      this.productosAgregados.push(nuevoProducto);
    } else {
      console.error('El producto no tiene un precio válido:', nuevoProducto);
    }
  }

  // Método para calcular el total de los productos agregados
  ccalcularTotalProductos(): number {
    let total = 0;
    for (let producto of this.productosAgregados) {
      total += producto.precio;
    }
    return total;
  }
  eliminarProducto(index: number) {
    this.productosAgregados.splice(index, 1); // Elimina el producto del arreglo
}
limpiarCarrito() {
  this.productosAgregados = []; // Vacía el arreglo de productos
}
///
servici  =inject(LoginService) 
token: any;

logaut(){
  localStorage.removeItem('token')
  if (this.token !== '') {
    localStorage.setItem('token','false');
    //this.router.navigate(['privado']); 

    window.location.href=('login')
  }
}

}

  


