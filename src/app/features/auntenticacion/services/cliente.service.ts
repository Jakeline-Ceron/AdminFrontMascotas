import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CLiente } from '../models/Cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    private api = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    public registrarCliente(datos: CLiente): Observable<CLiente> {
        const url = this.api + "/clientes";
        return this.http.post<CLiente>(url, datos);
    }


}
