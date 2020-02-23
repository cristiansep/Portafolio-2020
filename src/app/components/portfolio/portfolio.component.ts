import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { ProjectModalService } from '../project-modal/project-modal.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(
    public proyectoService: ProyectoService,
    public projectModalService: ProjectModalService
  ) { }

  ngOnInit(): void {
    this.cargarProyectos();
    
    this.projectModalService.notificacion
        .subscribe(resp => this.cargarProyectos());
  }



  cargarProyectos() {
    this.proyectoService.cargarProyectos()
      .subscribe((resp: any) => {
        this.proyectos = resp.proyectos;
      });
  }


  generarModal(id: string) {
    this.projectModalService.mostrarModal(id);
    
  }

}
