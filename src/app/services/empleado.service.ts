import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Global } from "../global";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http:HttpClient){}


    getEmpleadosDepartamento(iddepartamento: string):Observable<any>{
        var request = "/api/empleados/empleadosdepartamento/" + iddepartamento;
        var url = Global.urlempleadosfullstack + request;
        return this._http.get(url);
    }

    getDetallesEmpleado(idempleados: string): Observable<any>{
        var request = "/api/empleados/" + idempleados;
        var url = Global.urlempleadosaction + request;
        return this._http.get(url);
    }

    incrementarSalarioEmpleado(idempleado:string,incremento:string):Observable<any>{
        var request = "/api/empleados/incrementarsalario" + idempleado + "/" + incremento;
        var url = Global.urlempleadosaction + request;
        //enviaremos headers con POST y con PUT 
        var header = new Headers().set("Content-Type","application/json");
        return this._http.put(url,{headers:header});
    }
}