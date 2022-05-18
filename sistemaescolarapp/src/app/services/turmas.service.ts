import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

const baseUrl = 'https://localhost:7106/api';
@Injectable({
  providedIn: 'root',
})
export class TurmasService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/turmas`);
  }

  create(turmas: any): Observable<any> {
    return this.http.post(`${baseUrl}/turmas`, turmas);
  }
  loadById(id: any) {
    return this.http.get(`${baseUrl}/turmas/${id}`).pipe(take(1));
  }

  update(id: any, turmas: any) {
    return this.http.put(`${baseUrl}/turmas/${id}`, turmas);
  }

  onDelete(id: any) {
    return this.http.delete(`${baseUrl}/turmas/${id}`);
  }
}
