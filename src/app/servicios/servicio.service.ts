import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url:string = "localhost:8080/persona/1";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("el servicio esta corriendo");
    return this.http.get(this.url);
  }
}
