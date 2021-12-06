import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AdministrarComponent } from './administrar/administrar.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarSolicitudComponent } from './registrar-solicitud/registrar-solicitud.component';
import { FormularioMascotaComponent } from './formulario-mascota/formulario-mascota.component';


@NgModule({
    declarations: [
        AdministrarComponent,
        ListaSolicitudesComponent,
        RegistrarSolicitudComponent,
        FormularioMascotaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClientesRoutingModule
    ]
})
export class ClientesModule {
}
