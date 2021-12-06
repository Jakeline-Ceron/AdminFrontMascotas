import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from 'src/app/modelos/UsuarioAutenticado';
import Swal from 'sweetalert2';
import { AutenticacionService } from '../../auntenticacion/services/autenticacion.service';
import { SolicitudService } from '../services/solicitud.service';

@Component({
    selector: 'app-lista-solicitudes',
    templateUrl: './lista-solicitudes.component.html',
    styleUrls: ['./lista-solicitudes.component.scss']
})
export class ListaSolicitudesComponent implements OnInit {

    public listaSolicitudes = []
    public datosUsuario: DatosUsuario

    constructor(
        private solicitudServicio: SolicitudService,
        private autenticacionService: AutenticacionService
    ) { }

    ngOnInit(): void {

        this.cargarSolicitudes();
    }

    //61a59ddec1125a0e80be8a05
    //61a59428bc4d7e34c4427d7e
    //619e81fcb3921c27c4a0c111
    //619c238ed675343408f4d73f
    private cargarSolicitudes() {
        this.solicitudServicio.obtenerSolicitudes(this.autenticacionService.datosUsuario.id)
            .subscribe(resp => {
                this.listaSolicitudes = resp
            })
    }

    public cancelarSolicitud(solicitudId: string) {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Este proceso es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Continuar!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.solicitudServicio.eliminarSolicitud(solicitudId)
                    .subscribe(resp => {
                        Swal.fire(
                            'Eliminado!',
                            'Su registro ha sido eliminado.',
                            'success'
                        )
                        this.cargarSolicitudes();
                    })

            }
        })
    }


}
