import { Routes } from '@angular/router';
import { EmpleadosComponent } from './models/empleado/empleados.component';
import { ServiciosComponent } from './models/servicio/servicio';

export const routes: Routes = [
    { path: '', redirectTo: 'empleados', pathMatch: 'full' }, 
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'servicios', component: ServiciosComponent },
];