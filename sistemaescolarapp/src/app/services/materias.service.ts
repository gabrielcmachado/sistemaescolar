import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:7106/api';
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private http: HttpClient) { }
 
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/materias`);
  }

  create(materias:any): Observable<any> {
    return this.http.post(`${baseUrl}/materias`,materias);
   }
}
