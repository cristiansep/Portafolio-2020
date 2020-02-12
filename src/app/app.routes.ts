import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: '/home' , pathMatch: 'full' }
        ]
    },
     { path: 'login', component: LoginComponent },
     { path: 'admin', component: AdminComponent },
     { path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });