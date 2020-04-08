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
import { RegisterComponent } from './pages/login/register.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { titulo: 'Home | Cristian Sepúlveda' } },
    { path: 'login', component: LoginComponent, data: { titulo: 'Login | Cristian Sepúlveda' } },
    // { path: 'register', component: RegisterComponent },
    {
        path: 'admin',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'list', component: AdminComponent, data: { titulo: 'Mensajes' } },
            { path: 'project', component: ProyectosComponent, data: { titulo: 'Proyectos' } },
            { path: 'proyecto/:id', component: ProyectoProfileComponent, data: { titulo: 'Mantenimiento proyectos' } },
            { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

