import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './administrar/administrar.component';
import { FormularioMascotaComponent } from './formulario-mascota/formulario-mascota.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "administrar"
    },
    { path: 'administrar', component: AdministrarComponent },
    { path: 'lista-solicitudes', component: ListaSolicitudesComponent },
    { path: 'registrar-mascota', component: FormularioMascotaComponent },
    { path: 'lista-mascotas', component:  ListaMascotasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }
