import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service';
import { Cliente } from '../../models/cliente.model';

declare function init_admin();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  clientes: Cliente[] = [];
  desde: number = 0;

  totalRegistros: number = 0;

  constructor(
    public clienteService: ClienteService)
     { }

  ngOnInit(): void {
    init_admin();
    this.cargarClientes();
  }


  cargarClientes() {
    this.clienteService.cargarClientes(this.desde)
      .subscribe((resp: any) => {
        this.totalRegistros = resp.total;
        this.clientes = resp.clientes;
      });
  }

}
