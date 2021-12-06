import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from 'src/app/modelos/UsuarioAutenticado';
import { AutenticacionService } from 'src/app/modulos/auntenticacion/services/autenticacion.service';

@Component({
    selector: 'app-menu-lateral',
    templateUrl: './menu-lateral.component.html',
    styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

    public datosUsuario: DatosUsuario

    constructor(
        private autenticacionService: AutenticacionService
    ) { }

    ngOnInit(): void {
        this.datosUsuario = this.autenticacionService.datosUsuario;
    }

}
