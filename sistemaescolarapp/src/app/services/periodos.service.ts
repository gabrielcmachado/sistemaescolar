import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

const baseUrl = 'https://localhost:7106/api';
@Injectable({
  providedIn: 'root',
})
export class PeriodosService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/periodosacademicos`);
  }

  create(periodos: any): Observable<any> {
    return this.http.post(`${baseUrl}/periodosacademicos`, periodos);
  }
  loadById(id: any) {
    return this.http.get(`${baseUrl}/periodosacademicos/${id}`).pipe(take(1));
  }

  update(id: any, periodos: any) {
    return this.http.put(`${baseUrl}/periodosacademicos/${id}`, periodos);
  }

  onDelete(id: any) {
    return this.http.delete(`${baseUrl}/periodosacademicos/${id}`);
  }
}
