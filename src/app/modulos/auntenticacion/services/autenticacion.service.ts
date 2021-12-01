import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosUsuario, UsuarioAutenticado } from '../../../modelos/UsuarioAutenticado';

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {
    private host = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    ingresar(datosCredenciales: any) {
        return this.http.post<UsuarioAutenticado>(`${this.host}/identificarUsuario`, { usuario: datosCredenciales.usuario, clave: datosCredenciales.contrasenia })
            .pipe(
                tap(resp => {
                    sessionStorage.setItem("token", resp.tk);
                    sessionStorage.setItem("datosUsuario", JSON.stringify(resp.datos))
                })
            );
    }

    /**Obtemer el token del usuario autenticado */
    get tokenUsuario() {
        return sessionStorage.getItem("token")
    }

    /**Verificar si el usuario esta autenticado */
    get estaAutenticado(): boolean {
        return this.tokenUsuario != null;
    }

    /** Obtner los datos del usuario */
    get datosUsuario() {
        const datosUsuario = sessionStorage.getItem('datosUsuario') || ""
        return JSON.parse(datosUsuario) as DatosUsuario
    }

    private eliminarSession() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("datosUsuario");

    }

    /**Funcion para cerrar la sesion y salir del sistema */
    public salirSistema() {
        this.eliminarSession();
    }

}
