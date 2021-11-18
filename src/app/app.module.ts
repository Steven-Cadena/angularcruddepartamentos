import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

//importamos para la navegacion
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//importamos forms para los formularios 
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

//import del servicio muy importante para la conexion del servicio api
import { ServiceDepartamentos } from './services/departamento.service';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { ServiceEmpleados } from './services/empleado.service';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component'; 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent,
    EditardepartamentoComponent,
    EmpleadosdepartamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServiceDepartamentos, ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
