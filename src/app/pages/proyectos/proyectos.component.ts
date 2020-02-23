import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare function init_admin();


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  proyectos: Proyecto[] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public proyectoService: ProyectoService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit(): void {
    init_admin();
    this.cargarProyectos();

    this.modalUploadService.notificacion
        .subscribe(resp => this.cargarProyectos());

  }


  cargarProyectos() {

    this.cargando = true;
    this.proyectoService.cargarProyectos(this.desde)
      .subscribe((resp: any) => {
        this.totalRegistros = resp.total;
        this.proyectos = resp.proyectos;
        this.cargando = false;
      });
  }


  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarProyectos();

  }

  guardarProyecto( proyecto: Proyecto ) {
    this.proyectoService.actualizarProyecto(proyecto)
                        .subscribe();
  }

  borrarProyecto( proyecto: Proyecto ) {
      this.proyectoService.borrarProyecto(proyecto._id)
                          .subscribe(() => this.cargarProyectos());
  }

  // crearProyecto() {
  //   Swal
  //     .fire({
  //       icon: 'info',
  //       title: 'Crear proyecto',
  //       text: 'Ingrese el nombre del proyecto',
  //       input: 'text',
  //       showCancelButton: true,
  //       confirmButtonText: 'Guardar',
  //       cancelButtonText: 'Cancelar',
  //       inputValidator: nombre => {
  //         if (!nombre) {
  //           return 'Por favor ingrese un nombre de un proyecto';
  //         } else {
  //           return;
  //         }
  //       }
  //     })
  //     .then(resultado => {
  //       if (resultado.value) {
  //         const nombre = resultado.value;
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Proyecto creado',
  //           text: nombre
  //         });
  //         this.proyectoService.crearProyecto(nombre)
  //         .subscribe(() => this.cargarProyectos());
  //       }
  //     });
  // }

  actualizarImagen(id: string) {
    this.modalUploadService.mostrarModal('proyectos', id);
  }

}
