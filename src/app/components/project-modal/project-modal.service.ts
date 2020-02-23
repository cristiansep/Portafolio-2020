import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto/proyecto.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectModalService {

  proyecto: Proyecto = new Proyecto('', '', '', '');

  public tipo: string;
  public id: string;
  public oculto: string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor(public proyectoService: ProyectoService) { }

  ocultarModal() {
    this.oculto = 'oculto';
    this.id = null;
  }

  mostrarModal(id: string) {
    this.oculto = '';
    this.id = id;

    this.proyectoService.obtenerProyecto(this.id)
      .subscribe(proyecto => {
        this.proyecto = proyecto;
       } );
  }


}






