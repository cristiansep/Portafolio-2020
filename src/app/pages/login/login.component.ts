import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { UsuarioModel } from 'src/app/models/usuario.model';
// import { AuthService } from '../../services/auth.service';
// import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

  // login(form: NgForm) {

  //   if (form.invalid) { return; }

  //   Swal.fire({
  //     allowOutsideClick: false,
  //     icon: 'info',
  //     text: 'Espere por favor'
  //   });
  //   Swal.showLoading();

  //   this.auth.login(this.usuario)
  //     .subscribe(resp => {
  //       console.log(resp);
  //       Swal.close();

  //       if (this.recordarme) {
  //           localStorage.setItem('email', this.usuario.email);
  //       }

  //       this.router.navigateByUrl('/home');
  //     }, (err) => {
  //       console.log(err.error.error.message);

  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error de Autenticacion',
  //         text: err.error.error.message
  //       });
  //     });

  // }

}
