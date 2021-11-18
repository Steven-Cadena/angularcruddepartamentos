import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
//importante 
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild("cajanmero") cajanumero!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _service: ServiceDepartamentos,
  ) { }

  updateDepartamento(): void{
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    this.departamento.nombre = nombre;
    this.departamento.localidad = localidad;
    this._service.updateDepartamento(this.departamento).subscribe(response=>{
      this._router.navigate(["/"]);
    });
  }

  ngOnInit(): void {
    //para recibir los parametros desde la url 
    this._route.params.subscribe((params:Params) =>{
      var numero = parseInt(params['numero']);
      //creamos el departamento con los parametros recibidos
      this.departamento = new Departamento(numero,params['nombre'],params['localidad']);
    });
  }

}
