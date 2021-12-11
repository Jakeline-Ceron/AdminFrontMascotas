import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/shared/services/form-error.service';
import Swal from 'sweetalert2';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.scss']
})
export class AdministrarProductosComponent implements OnInit {

  public formProducto: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productoService: ProductoService,
    public errorFormService: FormErrorService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  /**Función que inicializa el formulario */
  private inicializarFormulario(): void {
    this.formProducto = this.fb.group({
        nombre: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
        precio: ["", [Validators.required, Validators.minLength(3) ]],
        cantidad: ["", [Validators.required, Validators.minLength(1)  ]],
        
      })
  }

   // Función que recolecta los datos, los valida y almacena
   public registrarProducto({ value, valid }: { value: any, valid: boolean }): void {
    console.log(value, valid)
    this.formProducto.get('nombre')?.invalid
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
    this.productoService.registrarProducto(value)
        .subscribe(resp => {
            Swal.fire({
                html: "El producto ha sido registrado con éxito",
                icon: "success",
                allowEscapeKey: false,
                allowOutsideClick: false,
                confirmButtonText: "Aceptar"
            })
            this.formProducto.reset();
        })
  } 






}
