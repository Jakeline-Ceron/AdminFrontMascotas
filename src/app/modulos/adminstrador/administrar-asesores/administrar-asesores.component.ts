import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/shared/services/form-error.service';
import Swal from 'sweetalert2';
import { AsesorService } from '../services/asesor.service';

@Component({
  selector: 'app-administrar-asesores',
  templateUrl: './administrar-asesores.component.html',
  styleUrls: ['./administrar-asesores.component.scss']
})
export class AdministrarAsesoresComponent implements OnInit {

  // Variable con el grupo de campos del Form
  public formRegistroA: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private asesorService: AsesorService,
    public errorFormService: FormErrorService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  /**Función que inicializa el formulario */
  private inicializarFormulario(): void {
    this.formRegistroA = this.fb.group({
        nombres: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
        apellidos: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
        documento: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^([0-9])*$/)]],
        correo: ["", [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        telefono: ["", [Validators.required, Validators.minLength(7), Validators.pattern(/^([0-9])*$/)]]
    })
  }

  // Función que recolecta los datos, los valida y almacena
  public registrarAsesor({ value, valid }: { value: any, valid: boolean }): void {
    console.log(value, valid)
    this.formRegistroA.get('nombres')?.invalid
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

    this.asesorService.registrarAsesor(value)
        .subscribe(resp => {
            Swal.fire({
                html: "El asesor ha sido registrado con éxito",
                icon: "success",
                allowEscapeKey: false,
                allowOutsideClick: false,
                confirmButtonText: "Aceptar"
            })
            this.formRegistroA.reset();
        })


}





}
