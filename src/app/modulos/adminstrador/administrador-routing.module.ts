import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarAsesoresComponent } from './administrar-asesores/administrar-asesores.component';
import { AdministrarProductosComponent } from './administrar-productos/administrar-productos.component';
import { AdministrarSolicitudesComponent } from './administrar-solicitudes/administrar-solicitudes.component';

const routes: Routes = [
    { path: 'solicitudes', component: AdministrarSolicitudesComponent },
    { path: 'registro-asesor', component: AdministrarAsesoresComponent},
    { path: 'registro-producto', component: AdministrarProductosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }
