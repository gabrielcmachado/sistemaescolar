import { Component, OnInit } from '@angular/core';
import { PeriodosService } from 'src/app/services/periodos.service'

@Component({
  selector: 'app-periodos-list',
  templateUrl: './periodos-list.component.html',
  styleUrls: ['./periodos-list.component.css']
})
export class PeriodosListComponent implements OnInit {
periodos:any;
  constructor(private PeriodosService: PeriodosService) { }

  ngOnInit(): void {
    this.listPeriodos();
  }

  listPeriodos(): void{
    this.PeriodosService.list()
    .subscribe(
      data => {
        this.periodos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  } 


}
