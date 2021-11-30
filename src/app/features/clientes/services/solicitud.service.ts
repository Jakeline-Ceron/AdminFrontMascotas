import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private api = environment.host;
  constructor(
    private http:HttpClient
  ) { }


  public obtenerSolicitudes(clienteId:string){
    return this.http.get<Array<any>>(`${this.api}/clientes/${clienteId}/solicituds`);
  }

}
