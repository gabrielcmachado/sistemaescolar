import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css'],
})
export class AlunosListComponent implements OnInit {
  alunos: any;
  constructor(
    private AlunosService: AlunosService,
    private routes: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.listAlunos();
  }

  listAlunos(): void {
    this.AlunosService.list().subscribe(
      (data) => {
        this.alunos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onEdit(id:any) {
    this.routes.navigate(['alunos/edit', id]);
  }

  onDelete(id:any) {
      this.AlunosService.onDelete(id).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
