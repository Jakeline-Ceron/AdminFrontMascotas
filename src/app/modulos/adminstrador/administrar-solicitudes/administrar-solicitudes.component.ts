import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AutenticacionService } from '../../auntenticacion/services/autenticacion.service';
import { SolicitudAdminService } from '../services/solicitudAdmin.service';

@Component({
    selector: 'app-administrar-solicitudes',
    templateUrl: './administrar-solicitudes.component.html',
    styleUrls: ['./administrar-solicitudes.component.scss']
})
export class AdministrarSolicitudesComponent implements OnInit {
    public listaSolicitudes = []
    listaAsesores = [];
    modalRef: BsModalRef;

    solicitudSeleccionada = "";

    constructor(
        private modalService: BsModalService,
        private solicitudService: SolicitudAdminService,
        private autenticacionService: AutenticacionService,

    ) { }

    ngOnInit(): void {
        this.cargarSolicitudes();
        this.cargarAsesores();
    }


    private cargarAsesores() {
        this.solicitudService.obtenerAsesores()
            .subscribe(resp => {
                this.listaAsesores = resp;
            })
    }

    private cargarSolicitudes() {
        this.solicitudService.obtenerSolicitudes()
            .subscribe(resp => {
                this.listaSolicitudes = resp
            })
    }

    agregarAsesor(template: TemplateRef<any>, solicitudId: string) {
        this.solicitudSeleccionada = solicitudId;
        this.modalRef = this.modalService.show(template, { class: "modal-lg", ignoreBackdropClick: true });
    }

    guardarSolicitudAsesor() {

    }

    cancelar() {
        this.modalRef.hide();
    }

}

