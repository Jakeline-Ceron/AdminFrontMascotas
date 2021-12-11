import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/shared/services/form-error.service';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.scss']
})
export class RecuperarClaveComponent implements OnInit {

  public formRecuperar: FormGroup;
   
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private errorFormService: FormErrorService,
    private authService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  // Función que inicializa el formulario
  private inicializarFormulario(): void {
    this.formRecuperar = this.fb.group({
        correo: ["", [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    })
  }

  // Función que solicita una nueva contraseña
  public solicitarClave({ value, valid }: { value: any, valid: boolean }): void{
    console.log(value, valid)

    this.authService.recuperarClave(value).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['app'])
    })

  }


}
