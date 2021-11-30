import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuario } from 'src/app/features/auntenticacion/models/UsuarioAutenticado';
import { AutenticacionService } from 'src/app/features/auntenticacion/services/autenticacion.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public datosUsuario: DatosUsuario;
    constructor(
        private router: Router,
        public authService: AutenticacionService
    ) {
         this.datosUsuario = authService.datosUsuario;
    }

    ngOnInit(): void {
    }


    public cerrarSesion(): void {
        this.authService.salirSistema();
        this.router.navigate(['login'])
    }

}
