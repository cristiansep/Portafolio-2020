import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { ProjectModalService } from '../components/project-modal/project-modal.service';
import { ResumeService } from '../components/resume/resume.service';

import {
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService,
  ClienteService
} from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService,
    ProjectModalService,
    ClienteService,
    ResumeService
  ]
})
export class ServiceModule { }
