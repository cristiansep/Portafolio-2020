import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  usuarios: Usuario[] = [];

  constructor(public usuarioService: UsuarioService) { }

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
