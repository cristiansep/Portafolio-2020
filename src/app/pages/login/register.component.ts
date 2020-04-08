import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { Router } from '@angular/router';

declare function init_admin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    init_admin();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      nick: new FormControl(null, Validators.required),
      perfil: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)

    });
  }


  registrarUsuario() {

    if (this.forma.invalid) {
      return;
    }

    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.nick,
      this.forma.value.perfil,
      this.forma.value.email,
      this.forma.value.password
    );

    this.usuarioService.crearUsuario(usuario)
                       .subscribe(resp => {
                          this.router.navigate(['/login']);
                       });
  }

}
