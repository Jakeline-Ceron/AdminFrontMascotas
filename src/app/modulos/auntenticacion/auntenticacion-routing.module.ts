import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuntenticacionComponent } from './auntenticacion.component';
import { LoginComponent } from './login/login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    { path: 'login', component: LoginComponent },
    { path: 'registrese', component: RegistroComponent },
    { path: 'recuperar-clave', component: RecuperarClaveComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuntenticacionRoutingModule { }
