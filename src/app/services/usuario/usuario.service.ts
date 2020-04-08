import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import Swal from 'sweetalert2';

import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {throwError } from 'rxjs';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public subirArchivoService: SubirArchivoService
  ) {
    this.cargarStorage();
   }




  estaLogeado() {
    return (this.token.length > 5) ? true : false;
  }


  cargarStorage() {
    if (localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }




  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }


  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/home']);

  }


  login(usuario: Usuario) {
    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
      .pipe(map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      }), catchError(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: err.error.mensaje
        });
        return throwError(err);
      }));
  }


  cargarUsuario() {
    let url = URL_SERVICIOS + '/usuario';

    return this.http.get(url);
  }


  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post(url , usuario )
                    .pipe(map((resp: any) => {
                      Swal.fire({
                        icon: 'success',
                        title: usuario.email
                      });
                      return resp.usuario;
                    }), catchError(err => {
                      Swal.fire({
                        icon: 'error',
                        title: err.error.mensaje,
                        text: err.error.errors.message
                      });
                      return throwError(err);
                    }));
  }



  actualizarUsuario(usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;


    return this.http.put(url, usuario)
      .pipe(map((resp: any) => {

        if (usuario._id === this.usuario._id) {
          this.guardarStorage(resp.id, resp.token, resp.usuario);
        }

        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',
          text: usuario.nombre
        });
        return true;
      }), catchError(err => {
        Swal.fire({
          icon: 'error',
          title: err.error.mensaje
        });
        return throwError(err);
      }));

  }


  cambiarImagen(archivo: File, id: string) {
    this.subirArchivoService.subirArchivo(archivo, 'usuarios', id)
                            .then((resp: any) => {
                                this.usuario.img = resp.usuario.img;
                                Swal.fire({
                                  icon: 'success',
                                  title: 'Imagen actualizada',
                                  text: this.usuario.nombre
                                });
                                this.guardarStorage(resp.id, resp.token, resp.usuario);
                            })
                            .catch(resp => {
                              console.log(resp);
                            });
  }



}
