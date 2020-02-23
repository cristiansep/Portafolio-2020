import { Component, OnInit, Input } from '@angular/core';
import { ProjectModalService } from './project-modal.service';
import { Proyecto } from '../../models/proyecto.model';
import Swal from 'sweetalert2';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { ActivatedRoute } from '@angular/router';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProyectosComponent } from '../../pages/proyectos/proyectos.component';



@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {


  constructor(
    public projectModalService: ProjectModalService,
    public proyectoService: ProyectoService,
    public activatedRoute: ActivatedRoute

  ) {

  }

  ngOnInit(): void {
  }


  cerrarModal() {
    this.projectModalService.ocultarModal();
  }


}

