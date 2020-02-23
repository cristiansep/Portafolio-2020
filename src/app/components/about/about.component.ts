import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  usuarios: Usuario[] = [];

  constructor(
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }


  cargarUsuario() {

    this.usuarioService.cargarUsuario()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
      });
  }

}
