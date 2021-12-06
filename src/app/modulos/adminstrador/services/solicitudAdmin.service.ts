import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SolicitudAdminService {
    private api = environment.host;
    constructor(
        private http: HttpClient
    ) { }

    public obtenerSolicitudes() {
        return this.http.get<Array<any>>(`${this.api}/solicituds`);
    }

    public obtenerAsesores() {
        return this.http.get<Array<any>>(`${this.api}/asesors`);
    }

    public eliminarSolicitud(solicitudId: string) {
        return this.http.delete(`${this.api}/solicituds/${solicitudId}`)
    }

}
