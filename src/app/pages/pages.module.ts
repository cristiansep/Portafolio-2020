import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components module
import { ComponentsModule } from '../components/components.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';
import { ProyectoProfileComponent } from './proyecto-profile/proyecto-profile.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UsuarioComponent,
    AdminComponent,
    ProyectosComponent,
    ProfileComponent,
    PagesComponent,
    ProyectoProfileComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
