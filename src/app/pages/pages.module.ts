import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

// components module
import { ComponentsModule } from '../components/components.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class PagesModule { }
