import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AdministrarComponent } from './administrar/administrar.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';


@NgModule({
  declarations: [
    AdministrarComponent,
    ListaSolicitudesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
