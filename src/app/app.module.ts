import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { MenuLateralComponent } from './plantilla/menu-lateral/menu-lateral.component';


@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        HeaderComponent,
        MenuLateralComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ModalModule.forRoot()
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ModalModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
