import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  httpOptions: object;
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }

  consulta(pedido:string,cedula:string): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/visitasTerreno/api/public/${pedido}/${cedula}`);
  }
}