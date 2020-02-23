import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../service.index';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Proyecto } from '../../models/proyecto.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {


  constructor(
    public http: HttpClient,
    public usuarioService: UsuarioService
  ) { }

  cargarProyectos(desde: number = 0) {
    let url = URL_SERVICIOS + '/proyecto?desde=' + desde;
    return this.http.get(url);
  }


  obtenerProyecto(id: string) {
    let url = URL_SERVICIOS + '/proyecto/' + id;
    return this.http.get(url)
      .pipe(map((resp: any) => resp.proyecto));
  }


  borrarProyecto(id: string) {
    let url = URL_SERVICIOS + '/proyecto/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.http.delete(url)
                    .pipe(map(resp => {
                      console.log(resp);
                      Swal.fire(
                        'Eliminado!',
                        'Proyecto eliminado correctamente.',
                        'success'
                      );
                      return true;
                    }));
  }


  crearProyecto(nombre: string) {
    let url = URL_SERVICIOS + '/proyecto';
    url += '?token=' + this.usuarioService.token;

    return this.http.post(url , { nombre } )
                    .pipe(map((resp: any) => {
                      return resp.Proyecto;
                    }));
  }


  guardarProyecto(proyecto: Proyecto) {
    let url = URL_SERVICIOS + '/proyecto';

    if (proyecto._id) {
      // Actualizando
      url += '/' + proyecto._id;
      url += '?token=' + this.usuarioService.token;

      return this.http.put(url, proyecto)
        .pipe(map((resp: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Proyecto Actualizado',
            text: proyecto.nombre
          });
          return resp.proyecto;
        }));
    } else {
      // Creando
      url += '?token=' + this.usuarioService.token;
      return this.http.post(url, proyecto)
        .pipe(map((resp: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Proyecto Creado',
            text: proyecto.nombre
          });
          return resp.proyecto;
        }));
    }


  }



  
  actualizarProyecto(proyecto: Proyecto) {

    let url = URL_SERVICIOS + '/proyecto/' + proyecto._id;
    url += '?token=' + this.usuarioService.token;


    return this.http.put(url, proyecto)
      .pipe(map((resp: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Proyecto actualizado',
          text: proyecto.nombre
        });
        return resp.proyecto;
      }));

  }




}
