import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

const baseUrl = 'https://localhost:7106/api';
@Injectable({
  providedIn: 'root',
})
export class ProfessoresService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/professores`);
  }

  create(professores: any): Observable<any> {
    return this.http.post(`${baseUrl}/professores`, professores);
  }

  loadById(id: any) {
    return this.http.get(`${baseUrl}/professores/${id}`).pipe(take(1));
  }

  update(id: any, professores: any) {
    return this.http.put(`${baseUrl}/professores/${id}`, professores);
  }

  onDelete(id: any) {
    return this.http.delete(`${baseUrl}/professores/${id}`);
  }
}
