import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StarServicesComponent } from './star-services/star-services.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { PipesModule } from '../pipes/pipes.module';
import { MostradorComponent } from './mostrador/mostrador.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ResumeComponent } from './resume/resume.component';





@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    StarServicesComponent,
    AdminHeaderComponent,
    MostradorComponent,
    ModalUploadComponent,
    ProjectModalComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    StarServicesComponent,
    AdminHeaderComponent,
    MostradorComponent,
    ModalUploadComponent,
    ProjectModalComponent,
    ResumeComponent
  ]
})
export class ComponentsModule { }
