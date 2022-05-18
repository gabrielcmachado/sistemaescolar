import { Component, OnInit } from '@angular/core';
import { PeriodosService } from 'src/app/services/periodos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-periodos-list',
  templateUrl: './periodos-list.component.html',
  styleUrls: ['./periodos-list.component.css'],
})
export class PeriodosListComponent implements OnInit {
  periodos: any;
  constructor(
    private PeriodosService: PeriodosService,
    private routes: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listPeriodos();
  }

  listPeriodos(): void {
    this.PeriodosService.list().subscribe(
      (data) => {
        this.periodos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEdit(id: any) {
    this.routes.navigate(['periodos/edit', id]);
  }

  onDelete(id: any) {
    this.PeriodosService.onDelete(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
