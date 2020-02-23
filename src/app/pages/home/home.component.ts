import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

declare function init_plugins();


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public usuarioService: UsuarioService
  ) {
    this.usuarioService.cargarStorage();
  }

  ngOnInit(): void {
    init_plugins();
  }

}
