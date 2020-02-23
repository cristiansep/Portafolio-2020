import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';

declare function init_admin();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public usuarioService: UsuarioService,

  ) { }

  ngOnInit(): void {
    init_admin();
  }


  ingresar(forma: NgForm) {

    if (forma.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      });
      return;
    }


    const usuario = new Usuario(null, null, null, forma.value.email, forma.value.pass);
    this.usuarioService.login(usuario)
                        .subscribe(ok => this.router.navigate(['/admin/list']));
  }
  

}
