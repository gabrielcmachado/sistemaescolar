import { Component, OnInit } from '@angular/core';
import { PeriodosService } from 'src/app/services/periodos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-periodos-new',
  templateUrl: './periodos-new.component.html',
  styleUrls: ['./periodos-new.component.css'],
})
export class PeriodosNewComponent implements OnInit {
  idPeriodo: any;
  nomePeriodo: any;
  dtCadastro: any;
  public qtPeriodos:any;

  constructor(
    private PeriodosService: PeriodosService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.idPeriodo = this.route.snapshot.paramMap.get('id');
    this.loadById();
  }

  loadById() {
    this.PeriodosService.loadById(this.idPeriodo).subscribe(
      (response: any) => {
        this.nomePeriodo = response.nomePeriodo;
        this.idPeriodo = response.idPeriodo;
        this.dtCadastro = response.dtCadastro;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPeriodosAuto() {
    const qtPeriodos = this.qtPeriodos
    let now  = new Date()
    let periodos = {
      nomePeriodo: this.nomePeriodo,
      dtCadastro: this.dtCadastro,
    };
    for (let index = 1; index <= qtPeriodos; index++) {
    
      periodos.nomePeriodo = (`2022.${qtPeriodos}.${index}.Auto`);
      periodos.dtCadastro = now.toISOString()
    
      this.PeriodosService.create(periodos).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

    }
  }

  save(): void {
    const periodos = {
      nomePeriodo: this.nomePeriodo,
      dtCadastro: this.dtCadastro,
    };
    const periodosEdit = {
      nomePeriodo: this.nomePeriodo,
      dtCadastro: this.dtCadastro,
      idPeriodo: this.idPeriodo,
    };

    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.PeriodosService.create(periodos).subscribe(
        (response) => {
          alert('Perído criado com sucesso!');
          this.routes.navigate(['periodos']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao criar Período, tente novamente!');
          console.log(error);
        }
      );
    } else {
      this.PeriodosService.update(this.idPeriodo, periodosEdit).subscribe(
        (response) => {
          alert('Perído editado com sucesso!');
          this.routes.navigate(['periodos']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao editar Período, tente novamente!');
          console.log(error);
        }
      );
    }
  }
}
