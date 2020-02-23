import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    public http: HttpClient
  ) { }



  
  cargarClientes( desde: number = 0) {
    let url = URL_SERVICIOS + '/cliente?desde=' + desde;

    return this.http.get(url);
  }



  crearUsuario(cliente: Cliente) {
    const url = URL_SERVICIOS + '/cliente';
    return this.http.post(url , cliente )
                    .pipe(map((resp: any) => {
                      Swal.fire({
                        icon: 'success',
                        title: 'Gracias por contactarte ' + cliente.nombre
                      });
                      return resp.cliente;
                    }), catchError(err => {
                      Swal.fire({
                        icon: 'error',
                        title: err.error.mensaje,
                        text: err.error.errors.message
                      });
                      return throwError(err);
                    }));
  }



}
