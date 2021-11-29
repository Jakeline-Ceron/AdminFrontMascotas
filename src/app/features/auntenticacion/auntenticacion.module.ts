import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuntenticacionRoutingModule } from './auntenticacion-routing.module';
import { AuntenticacionComponent } from './auntenticacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
    declarations: [
        AuntenticacionComponent,
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuntenticacionRoutingModule
    ]
})
export class AuntenticacionModule { }
