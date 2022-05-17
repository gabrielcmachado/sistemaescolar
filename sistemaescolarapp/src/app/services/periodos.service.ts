import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:7106/api';
@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/periodosacademicos`);
  }

  create(periodosacademicos:any): Observable<any> {
    return this.http.post(`${baseUrl}/periodosacademicos`,periodosacademicos);
   }
}
