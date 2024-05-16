import { Component, inject } from '@angular/core';
import { NosotrosService } from '../../service/nosotros.service';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css'
})
export class RestauranteComponent {
  servicio = inject(NosotrosService)
  personas : any
  numeroMesa: number | undefined;

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
  

}
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

filtrarPorMesa() {
  if (this.numeroMesa !== undefined) {
    this.personas = this.personas.filter((item: any) => item.mesa === this.numeroMesa);
  }
}


}
