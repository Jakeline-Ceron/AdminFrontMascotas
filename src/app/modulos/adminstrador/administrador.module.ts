import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministrarSolicitudesComponent } from './administrar-solicitudes/administrar-solicitudes.component';
import { AdministrarAsesoresComponent } from './administrar-asesores/administrar-asesores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrarProductosComponent } from './administrar-productos/administrar-productos.component';


@NgModule({
    declarations: [
        AdministrarSolicitudesComponent,
        AdministrarAsesoresComponent,
        AdministrarProductosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdministradorRoutingModule 
        
    ]
})
export class AdministradorModule { }
