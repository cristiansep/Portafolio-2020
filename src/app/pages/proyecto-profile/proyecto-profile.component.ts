import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Proyecto } from '../../models/proyecto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare function init_admin();

@Component({
  selector: 'app-proyecto-profile',
  templateUrl: './proyecto-profile.component.html',
  styleUrls: ['./proyecto-profile.component.css']
})
export class ProyectoProfileComponent implements OnInit {

  proyecto: Proyecto = new Proyecto('', '', '', '');

  constructor(
    public proyectoService: ProyectoService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public modalUploadService: ModalUploadService
  ) 
  { 
    activatedRoute.params.subscribe(params => {
      let id = params[`id`];

      if (id !== 'nuevo') {
        this.obtenerProyecto(id);
      }

});
  }

  ngOnInit(): void {
    init_admin();
    this.modalUploadService.notificacion.subscribe(resp => {
      this.proyecto.img = resp.proyecto.img;
    });

  }

  guardarProyecto(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.proyectoService.guardarProyecto(this.proyecto)
      .subscribe(proyecto => {
        this.proyecto._id = proyecto._id;
        this.router.navigate(['/admin/proyecto', proyecto._id]);
      });
  }


    obtenerProyecto(id: string) {
    this.proyectoService.obtenerProyecto(id)
                      .subscribe(proyecto => {
                        this.proyecto = proyecto;
                      });
  }


  cambiarFoto() {
    this.modalUploadService.mostrarModal('proyectos', this.proyecto._id);
  }

}
