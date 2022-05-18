import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/services/turmas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-turmas-new',
  templateUrl: './turmas-new.component.html',
  styleUrls: ['./turmas-new.component.css'],
})
export class TurmasNewComponent implements OnInit {
  idTurma: any;
  nmTurma: any;
  qtAlunos: any;
  stAtivo: any;
  dtCadastro: any;
  public qtTurmas: any;
  public qtAlunosSelect: any

  constructor(
    private TurmasService: TurmasService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.idTurma = this.route.snapshot.paramMap.get('id');
    this.loadById();
  }

  loadById() {
    this.TurmasService.loadById(this.idTurma).subscribe(
      (response: any) => {
        this.nmTurma = response.nmTurma;
        this.idTurma = response.idTurma;
        this.qtAlunos = response.qtAlunos;
        this.stAtivo = response.stAtivo;
        this.dtCadastro = response.dtCadastro;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTurmasAuto() {
    const qtTurmas = this.qtTurmas;
    const qtAlunosSelect = this.qtAlunosSelect;
    let now  = new Date()
    let turmas = {
      nmTurma: this.nmTurma,
      qtAlunos: this.qtAlunos,
      stAtivo: this.stAtivo,
      dtCadastro: this.dtCadastro,
    };
    for (let index = 1; index <= qtTurmas; index++) {
    
      turmas.nmTurma = (`Turma  (${index+100}) - Auto`);
      turmas.dtCadastro = now.toISOString();
      turmas.stAtivo = true;
      turmas.qtAlunos = qtAlunosSelect;
    
      this.TurmasService.create(turmas).subscribe(
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
    const turmas = {
      nmTurma: this.nmTurma,
      qtAlunos: this.qtAlunos,
      stAtivo: this.stAtivo,
      dtCadastro: this.dtCadastro,
    };
    const turmasEdit = {
      nmTurma: this.nmTurma,
      qtAlunos: this.qtAlunos,
      stAtivo: this.stAtivo,
      dtCadastro: this.dtCadastro,
      idTurma: this.idTurma,
    };
    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.TurmasService.create(turmas).subscribe(
        (response) => {
          alert('Turma Criada com sucesso!');
          this.routes.navigate(['turmas']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao criar turma, tente novamente!');
          console.log(error);
        }
      );
    } else {
      this.TurmasService.update(this.idTurma, turmasEdit).subscribe(
        (response) => {
          alert('Turma Editada com sucesso!');
          this.routes.navigate(['turmas']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao editar turma, tente novamente!');
          console.log(error);
        }
      );
    }
  }
}
