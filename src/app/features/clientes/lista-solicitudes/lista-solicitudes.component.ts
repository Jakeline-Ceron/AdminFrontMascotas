import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../services/solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.scss']
})
export class ListaSolicitudesComponent implements OnInit {

  public listaSolicitudes=[]

  constructor(
    private solicitudServicio: SolicitudService
  ) { }

  ngOnInit(): void {
    this.cargarSolicitudes();
  }
//61a59ddec1125a0e80be8a05
//61a59428bc4d7e34c4427d7e
  private cargarSolicitudes() {
    this.solicitudServicio.obtenerSolicitudes("61a59428bc4d7e34c4427d7e")
      .subscribe(resp => {
        this.listaSolicitudes=resp
      })
  }


}
