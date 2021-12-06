import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AutenticacionService } from '../../auntenticacion/services/autenticacion.service';
import { MascotaService } from '../services/mascota.service';

@Component({
    selector: 'app-formulario-mascota',
    templateUrl: './formulario-mascota.component.html',
    styleUrls: ['./formulario-mascota.component.scss']
})
export class FormularioMascotaComponent implements OnInit {

    /**Variable que maneja el grupo de campos del formulario de mascota */
    public formRegistroMascota!: FormGroup;

    constructor(
        private fgValidador: FormBuilder,
        private mascotaService: MascotaService,
        private autenticacionService: AutenticacionService
    ) { }

    ngOnInit(): void {
        this.inicializarFormulario()
    }

    inicializarFormulario() {
        this.formRegistroMascota = this.fgValidador.group({
            nombre: ["", Validators.required],
            especie: ["", Validators.required],
            sexo: ["", Validators.required],
            edad: ["", Validators.required],
            raza: ["", Validators.required],
            peso: ["", Validators.required],
            observaciones: ["", Validators.minLength(10)],
            enfermedades: ["", Validators.minLength(5)],
            foto: ["foto"],
            planActivo: [false],
            clienteId: [this.autenticacionService.datosUsuario.id, Validators.required]
        })
    }

    /** Funcion que prmite recoger los datos del formulario, validar y enviar a guardar la mascota */
    public registrarCliente({ value, valid }: { value: any, valid: boolean }): void {
        console.log(value, valid)

        if (!valid) {
            Swal.fire({
                html: "Existen campos invalidos",
                icon: "warning",
                allowEscapeKey: false,
                allowOutsideClick: false,
                confirmButtonText: "Aceptar"
            })
            return;
        }

        this.mascotaService.guardarMascota(value)
            .subscribe((resp: any) => {
                Swal.fire({
                    html: "Se ha registrado la mascota",
                    icon: "success",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    confirmButtonText: "Aceptar"
                })

                this.crearSolicitud(resp.id, resp.clienteId)

                this.formRegistroMascota.reset();

            })


    }

    private crearSolicitud(mascotaId, clienteId) {
        let solicitud = {
            fechaSolicitud: new Date(),
            estado: "pendiente",
            //fechaActualizacion: "",
            //comentario: "",
            clienteId: clienteId,
            mascotaId: mascotaId
        }

        this.mascotaService.crearSolicitud(solicitud)
            .subscribe(resp => {
                Swal.fire({
                    html: "Su solicitud esta en proceso",
                    icon: "success",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    confirmButtonText: "Aceptar"
                })
            })
    }

}
