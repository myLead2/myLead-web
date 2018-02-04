import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { componentFactoryName } from '@angular/compiler';
import { AuthComponent } from './components/defaults/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';
import { SendCsvComponent } from './components/dashboard/send-csv/send-csv.component';

const APP_ROUTS: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'perfil',
        component: UserProfileComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'enviar',
        component: SendCsvComponent
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTS);

