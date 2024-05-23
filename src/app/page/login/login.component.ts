import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  servicio =inject(LoginService) 

  email: any;
  password: any;
  token: any;
  rol:any;
  admin:any;

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken;
      if (this.token !== '') {
        localStorage.setItem('token', 'true');
        this.admin = p.user.rol;
        console.log(this.admin);
  
        if (this.admin === "admin") {
          window.location.href = ('admin');
        } else {
          window.location.href = ('cliente');
        }
      }
    });
  }

}
