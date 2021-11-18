import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  public id!: string;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _service:ServiceDepartamentos) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
   //para recibir parametros es un codigo aislado y asincrono
   //ESTO SERIA PARA ELIMINAR CON ROUTER LINK ENLACE **************************************
   this._route.params.subscribe((params:Params)=>{
     //AQUI CUANDO UN PARAMETRO CAMBIE EN UNA RUTA
    if(params['iddepartamento'] != null){
      var id = parseInt(params['iddepartamento']);
      this.eliminarDepartamento(id);
    }
    })
  }

  cargarDepartamentos(): void{
    this._service.getDepartamentos().subscribe(response=>{
      this.departamentos = response;
    });
  }

  eliminarDepartamento(id:number):void{
    this._service.deleteDepartamento(id).subscribe(response =>{
      this.cargarDepartamentos();
    })
  }
}
