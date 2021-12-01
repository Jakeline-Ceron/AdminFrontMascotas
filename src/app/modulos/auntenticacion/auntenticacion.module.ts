import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuntenticacionRoutingModule } from './auntenticacion-routing.module';
import { AuntenticacionComponent } from './auntenticacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuntenticacionComponent,
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuntenticacionRoutingModule
    ]
})
export class AuntenticacionModule {
}
