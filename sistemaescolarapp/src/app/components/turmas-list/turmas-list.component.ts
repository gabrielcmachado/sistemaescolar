import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/services/turmas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.css'],
})
export class TurmasListComponent implements OnInit {
  turmas: any;
  constructor(
    private TurmasService: TurmasService,
    private routes: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listTurmas();
  }

  listTurmas(): void {
    this.TurmasService.list().subscribe(
      (data) => {
        this.turmas = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEdit(id: any) {
    this.routes.navigate(['turmas/edit', id]);
  }
  onDelete(id: any) {
    this.TurmasService.onDelete(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
