import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuntenticacionComponent } from './auntenticacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrese', component: RegistroComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuntenticacionRoutingModule { }
