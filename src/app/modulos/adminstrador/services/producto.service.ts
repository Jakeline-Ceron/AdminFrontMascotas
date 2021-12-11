import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos/Producto';
import { environment } from 'src/environments/environment';
import { Asesor } from '../../../modelos/Asesor';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    private api = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    public registrarProducto(datos: Producto): Observable<Producto> {
        const url = this.api + "/productos";
        return this.http.post<Producto>(url, datos);
    }


}
