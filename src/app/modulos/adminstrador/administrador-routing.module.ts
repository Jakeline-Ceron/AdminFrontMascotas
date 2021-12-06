import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarAsesoresComponent } from './administrar-asesores/administrar-asesores.component';
import { AdministrarSolicitudesComponent } from './administrar-solicitudes/administrar-solicitudes.component';

const routes: Routes = [
    { path: 'solicitudes', component: AdministrarSolicitudesComponent },
    { path: 'registro-asesor', component: AdministrarAsesoresComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }
