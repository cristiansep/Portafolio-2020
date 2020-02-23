import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  forma: FormGroup;
  usuarios: Usuario[] = [];


  constructor(
    public clienteService: ClienteService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarUsuario();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      asunto: new FormControl(null, Validators.required),
      mensaje: new FormControl(null, Validators.required)
    });
  }


  registrarCliente() {

    if (this.forma.invalid) {
      return;
    }

    const cliente = new Cliente(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.asunto,
      this.forma.value.mensaje
    );

    this.clienteService.crearUsuario(cliente)
                       .subscribe(resp => {
                         this.forma.reset();
                         return;
                     });
  }

  cargarUsuario() {

    this.usuarioService.cargarUsuario()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
      });
  }

}
