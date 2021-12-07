import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MascotaService {

    private api = environment.host;
    constructor(
        private http: HttpClient
    ) { }

    public guardarMascota(datosMascota) {
        return this.http.post(`${this.api}/mascotas`, datosMascota);
    }

    public crearSolicitud(datosSolicitud) {
        return this.http.post(`${this.api}/solicituds`, datosSolicitud);
    }

    public obtenerMascotas(clienteId: string) {
        return this.http.get<Array<any>>(`${this.api}/clientes/${clienteId}/mascotas`);
    }


}
