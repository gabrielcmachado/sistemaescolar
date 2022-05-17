import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

const baseUrl = 'https://localhost:7106/api';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/alunos`);
  }

  create(alunos:any): Observable<any> {
    return this.http.post(`${baseUrl}/alunos`,alunos);
   }

   loadById(id:any){
    return this.http.get(`${baseUrl}/alunos/${id}`).pipe(take(1));
   }

   update(alunos:any){
    return this.http.put(`${baseUrl}/alunos/${alunos.id}`, alunos).pipe(take(1));
   }
}
