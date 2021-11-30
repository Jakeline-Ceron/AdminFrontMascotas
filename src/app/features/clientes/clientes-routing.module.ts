import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './administrar/administrar.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

const routes: Routes = [
    { path: 'clientes', component: AdministrarComponent },
    { path: 'lista-solicitudes', component: ListaSolicitudesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }
