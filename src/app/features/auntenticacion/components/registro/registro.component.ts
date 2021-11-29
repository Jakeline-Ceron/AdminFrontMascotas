import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/shared/services/form-error.service';
import Swal from 'sweetalert2';
import { ClienteService } from '../../services/cliente.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

    /**Variable que maneja el grupo de campos del formulario */
    public formRegistro!: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private clienteService: ClienteService,
        public errorsFormService: FormErrorService,
    ) { }

    ngOnInit(): void {
        this.inicializarFormulario();
    }

    /**Funion que inicializa el formulario */
    private inicializarFormulario(): void {
        this.formRegistro = this.fb.group({
            nombres: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
            apellidos: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
            documento: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^([0-9])*$/)]],
            correo: ["", [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            telefono: ["", [Validators.required, Validators.minLength(7), Validators.pattern(/^([0-9])*$/)]],
            ciudad: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
            direccion: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z 0-9]*$')]],
        })
    }

    /** Funcion que prmite recoger los datos del formulario, validar y enviar a guardar */
    public registrarCliente({ value, valid }: { value: any, valid: boolean }): void {
        console.log(value, valid)
        this.formRegistro.get('nombres')?.invalid
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
        value['estadoRegistro'] = "activo";

        this.clienteService.registrarCliente(value)
            .subscribe(resp => {
                Swal.fire({
                    html: "Su registro a sido exitoso",
                    icon: "success",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    confirmButtonText: "Aceptar"
                })
                this.formRegistro.reset();
                this.router.navigate(['login'])
            })


    }

}
