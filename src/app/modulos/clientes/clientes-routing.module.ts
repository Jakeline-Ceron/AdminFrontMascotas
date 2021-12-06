import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './administrar/administrar.component';
import { FormularioMascotaComponent } from './formulario-mascota/formulario-mascota.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { RegistrarSolicitudComponent } from './registrar-solicitud/registrar-solicitud.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "administrar"
    },
    { path: 'administrar', component: AdministrarComponent },
    { path: 'lista-solicitudes', component: ListaSolicitudesComponent },
    { path: 'registrar-mascota', component: FormularioMascotaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }
