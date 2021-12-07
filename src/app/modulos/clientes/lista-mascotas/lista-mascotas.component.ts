import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from 'src/app/modelos/UsuarioAutenticado';
import { AutenticacionService } from '../../auntenticacion/services/autenticacion.service';
import { MascotaService } from '../services/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.scss']
})
export class ListaMascotasComponent implements OnInit {

  public listaMascotas = []
  public datosUsuario: DatosUsuario

  constructor(
    private mascotaServicio: MascotaService,
    private autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  private cargarMascotas(){
    this.mascotaServicio.obtenerMascotas(this.autenticacionService.datosUsuario.id)
      .subscribe(resp => {
          this.listaMascotas= resp
      })
  }









}
