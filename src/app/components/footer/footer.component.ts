import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  usuarios: Usuario[] = [];

  fecha: Date = new Date();

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
