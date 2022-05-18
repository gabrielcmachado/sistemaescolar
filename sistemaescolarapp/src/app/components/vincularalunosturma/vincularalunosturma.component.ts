import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/services/turmas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PeriodosService } from 'src/app/services/periodos.service';
import { MateriasService } from 'src/app/services/materias.service';
import { AlunosService } from 'src/app/services/alunos.service';
import { VincularalunosturmaService } from 'src/app/services/vincularalunosturma.service';

@Component({
  selector: 'app-vincularalunosturma',
  templateUrl: './vincularalunosturma.component.html',
  styleUrls: ['./vincularalunosturma.component.css'],
})
export class VincularalunosturmaComponent implements OnInit {
  public qtTurmas: any;
  public qtAlunosSelect: any;
  public qtMaterias: any;
  public pesoProvaf1: any;
  public pesoProvaf2: any;
  public pesoProvaf3: any;
  public qtPeriodos: any;

  constructor(
    private AlunosService: AlunosService,
    private TurmasService: TurmasService,
    private PeriodosService: PeriodosService,
    private MateriasService: MateriasService,
    private VincularalunosturmaService: VincularalunosturmaService
  ) {}

  ngOnInit(): void {}

  getValores() {
    const valores = {
      qtTurmas: this.qtTurmas,
      qtAlunosSelect: this.qtAlunosSelect,
      qtMaterias: this.qtMaterias,
      pesoProvaf1: this.pesoProvaf1,
      pesoProvaf2: this.pesoProvaf2,
      pesoProvaf3: this.pesoProvaf3,
      qtPeriodos: this.qtPeriodos,
    };

    for (let index = 1; index <= valores.qtPeriodos; index++) {
      console.log(` Periodo ${index}`);
      for (let index = 1; index <= valores.qtTurmas; index++) {
        console.log(` Turma ${index}`);
        for (let index = 1; index <= valores.qtAlunosSelect; index++) {
          console.log(` Alunos ${index}`);
        }
      }
    }
    for (let index = 1; index <= valores.qtMaterias; index++) {
      console.log(` Materia ${index}`)
      
    }
    console.log(valores);
  }
}
