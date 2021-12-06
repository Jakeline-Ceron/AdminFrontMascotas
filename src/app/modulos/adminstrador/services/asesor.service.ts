import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asesor } from '../../../modelos/Asesor';

@Injectable({
    providedIn: 'root'
})
export class AsesorService {

    private api = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    public registrarAsesor(datos: Asesor): Observable<Asesor> {
        const url = this.api + "/asesors";
        return this.http.post<Asesor>(url, datos);
    }


}
