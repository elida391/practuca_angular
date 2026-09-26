import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistroAcceso} from '../interface/acceso-model';

@Injectable({
  providedIn: 'root',
})
export class ValidarAccesoService {
  url :string = 'http://localhost:8080/api/evento/validarAcceso';
  constructor(private http: HttpClient) { }
  validarAcceso(datos: RespuestaAcceso): Observable<RespuestaAceso>{
    return this.http.post<RespuestaAcceso>(this.url, datos);
  }
}
