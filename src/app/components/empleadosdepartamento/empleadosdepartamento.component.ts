import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute, Params, Route } from '@angular/router';
@Component({
  selector: 'app-empleadosdepartamento',
  templateUrl: './empleadosdepartamento.component.html',
  styleUrls: ['./empleadosdepartamento.component.css']
})
export class EmpleadosdepartamentoComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(
    private _service:ServiceEmpleados,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      var iddepartamento = params['iddepartamento'];
      this._service.getEmpleadosDepartamento(iddepartamento).subscribe(response=>{
        this.empleados = response;
      });
    })
  }

}
