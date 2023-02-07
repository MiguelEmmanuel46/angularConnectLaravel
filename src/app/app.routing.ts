import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';


//definir rutas
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'inicio', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'registro', component: RegisterComponent },
	{ path: '**', component: ErrorComponent }
];


//exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);