import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
//importante el httheaders para enviar el json
import { Global } from "../global";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos{

    //la inyeccion va en el constructor para poder recuperar las peticiones
    constructor(private _http:HttpClient){}

    deleteDepartamento(id: number): Observable<any>{
        var request = "/api/departamentos/" + id;
        var url = Global.urldepartamentos + request;
        return this._http.delete(url);
    }

    getDepartamentos(): Observable<any>{
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.get(url);
    }

    //debe ser un observable aunqeu no consuma nada 
    insertarDepartamento(departamento: Departamento): Observable<any>{
        //debemos convertir el objeto a Json
        var json = JSON.stringify(departamento);
        //DEBEMOS INDICAR QUE TIPO DE OBJETO VAMOS A ENVIAR 
        //POR DEFECTO LOS SERVICIOS ESTAN ESTIPULADOS PARA JSON 
        //PERO NO TODOS .
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.post(url,json,{headers: header});
    }

    updateDepartamento(departamento: Departamento): Observable<any>{
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        return this._http.put(url,json,{headers: header});
    }
    
}