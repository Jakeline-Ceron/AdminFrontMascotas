import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public formLogin!: FormGroup;

    public errores = {};

    constructor(
        private formBuilder: FormBuilder,
        private authService: AutenticacionService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.iniciarFormulario();
    }
/**
 * c444cd0bdb0c4d353b780107810baf86
 * ajceron03@misena.edu.co
 */
    private iniciarFormulario(): void {
        this.formLogin = this.formBuilder.group({
            usuario: ['kiqicafa@ryteto.me', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            contrasenia: ['10b91c2b633e322101446edf46f2e2b7', [Validators.required]]
        })
    }

    public ingresar({ value, valid }: { value: any, valid: boolean }): void {
        console.log(value, valid)

        this.authService.ingresar(value).subscribe(resp => {
            console.log(resp);
            this.router.navigate(['app'])
        }, error => this.errores = error.error)
    }

}
