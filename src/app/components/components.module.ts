import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StarServicesComponent } from './star-services/star-services.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    StarServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    StarServicesComponent
  ]
})
export class ComponentsModule { }
