import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { PagesComponent } from './pages/pages.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ProyectoProfileComponent } from './pages/proyecto-profile/proyecto-profile.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'admin',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'list', component: AdminComponent },
            { path: 'project', component: ProyectosComponent },
            { path: 'proyecto/:id', component: ProyectoProfileComponent },
            { path: 'profile', component: ProfileComponent, data: {titulo: 'Perfil de usuario'} }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

