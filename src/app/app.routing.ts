import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component';
import { IncrementarsalariocomponentComponent } from './components/incrementarsalariocomponent/incrementarsalariocomponent.component';
const appRoutes: Routes = [
    {path:"",component: HomeComponent},
    {path:"eliminar/:iddepartamento", component: HomeComponent},
    {path:"empleados/:iddepartamento",component:EmpleadosdepartamentoComponent},
    {path:"incrementarsalario/:idempleado", component: IncrementarsalariocomponentComponent},
    {path:"insertardepartamento", component: InsertardepartamentoComponent},
    {path:"editar/:numero/:nombre/:localidad", component:EditardepartamentoComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);