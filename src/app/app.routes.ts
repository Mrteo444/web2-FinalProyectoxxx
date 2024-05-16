import { Routes } from '@angular/router';
import { loginGuard, registroGuard } from './guards/login.guard';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { AdminComponent } from './page/admin/admin.component';
import { Registro2Component } from './page/registro2/registro2.component';
import { adminGuard } from './guards/admin.guard';
import { EditaradminComponent } from './page/editaradmin/editaradmin.component';
import { RestauranteComponent } from './page/restaurante/restaurante.component';
import { AddRestauranteComponent } from './page/add-restaurante/add-restaurante.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent ,canActivate:[adminGuard]},
    { path: 'registro', component: RegistroComponent,canMatch:[registroGuard]},
    { path: 'admin', component: AdminComponent,canActivate:[loginGuard]},
    { path: 'restaurante', component: RestauranteComponent,canActivate:[loginGuard]},
    { path: 'registro', component: Registro2Component},

    { path: 'add', component: AddRestauranteComponent,canMatch:[registroGuard]},
    

    { path: 'editar/:idNosotros', component: EditaradminComponent},
];
