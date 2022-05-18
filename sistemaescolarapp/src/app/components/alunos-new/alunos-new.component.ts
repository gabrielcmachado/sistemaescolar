import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-alunos-new',
  templateUrl: './alunos-new.component.html',
  styleUrls: ['./alunos-new.component.css'],
})
export class AlunosNewComponent implements OnInit {
  idAluno: any;
  nomeAluno: any;
  dtCadastro: any;
  stAtivo: any;
  public qtAlunosAuto: any;

  constructor(
    private AlunosService: AlunosService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit() {
    this.idAluno = this.route.snapshot.paramMap.get('id');
    this.loadById();
  }

  getQtAlunos() {
    const qtAlunos = this.qtAlunosAuto
    let now  = new Date()
    let alunos = {
      nomeAluno: this.nomeAluno,
      dtCadastro: this.dtCadastro,
      stAtivo: this.stAtivo,
    };
    for (let index = 1; index <= qtAlunos; index++) {
    
      alunos.nomeAluno = (`Aluno (${index}) Auto`);
      alunos.dtCadastro = now.toISOString()
      console.log(now)
      alunos.stAtivo = true;
        
      this.AlunosService.create(alunos).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

    }
  }

  loadById() {
    this.AlunosService.loadById(this.idAluno).subscribe(
      (response: any) => {
        this.nomeAluno = response.nomeAluno;
        this.idAluno = response.idAluno;
        this.stAtivo = response.stAtivo;
        this.dtCadastro = response.dtCadastro;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  save(): void {
    const alunos = {
      nomeAluno: this.nomeAluno,
      dtCadastro: this.dtCadastro,
      stAtivo: this.stAtivo,
    };

    const alunosEdit = {
      nomeAluno: this.nomeAluno,
      dtCadastro: this.dtCadastro,
      stAtivo: this.stAtivo,
      idAluno: this.idAluno,
    };

    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.AlunosService.create(alunos).subscribe(
        (response) => {
          alert('Aluno criado com sucesso!');
          this.routes.navigate(['alunos']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao criar aluno, tente novamente!');
          console.log(error);
        }
      );
    } else {
      this.AlunosService.update(this.idAluno, alunosEdit).subscribe(
        (response) => {
          alert('Aluno Editado com sucesso!');
          this.routes.navigate(['alunos']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao Editar Aluno, tente novamente!');
          console.log(error);
        }
      );
    }
  }
}
