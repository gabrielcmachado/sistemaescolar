import { Component, OnInit } from '@angular/core';
import { PeriodosService } from 'src/app/services/periodos.service'

@Component({
  selector: 'app-periodos-new',
  templateUrl: './periodos-new.component.html',
  styleUrls: ['./periodos-new.component.css']
})
export class PeriodosNewComponent implements OnInit {
  idPeriodo:any;
  nomePeriodo:any;
  dtCadastro:any;

  constructor(private PeriodosService:PeriodosService  ) { }

  ngOnInit(): void {
  }

  save(): void {
    const periodos = {
      nomePeriodo:this.nomePeriodo,
      dtCadastro:this.dtCadastro,
    };
    console.log(periodos);
    this.PeriodosService.create(periodos)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }


}
