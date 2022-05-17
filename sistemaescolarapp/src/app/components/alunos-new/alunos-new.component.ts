import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-alunos-new',
  templateUrl: './alunos-new.component.html',
  styleUrls: ['./alunos-new.component.css']
})
export class AlunosNewComponent implements OnInit {
  idAluno: any;
  nomeAluno:any;
  dtCadastro:any;
  stAtivo:any;

  constructor(
    private AlunosService: AlunosService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(){
  this.idAluno = this.route.snapshot.paramMap.get('id');
  this.loadById();
  }

  loadById() {
    this.AlunosService.loadById(this.idAluno).subscribe(
      (response:any) => {
        this.nomeAluno = response.nomeAluno;
        this.idAluno = response.idAluno;
        this.dtCadastro = response.dtCadastro;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  save(): void {
    const alunos = {
      nomeAluno:this.nomeAluno,
      dtCadastro:this.dtCadastro,
      stAtivo:this.stAtivo
    };
    console.log(alunos);

if ((this.route.snapshot.paramMap.get('id'))==undefined){
    this.AlunosService.create(alunos)
      .subscribe(
        response => {
          alert('Curso criado com sucesso!');
          console.log(response);
        },
        error => {
          alert('Erro ao criar curso, tente novamente!')
          console.log(error);
        });

      }else{

      this.AlunosService.update(this.idAluno)
        .subscribe(
          response => {
            alert('Curso criado com sucesso!');
            console.log(response);
          },
          error => {
            alert('Erro ao criar curso, tente novamente!')
            console.log(error);
          });
        }
  };
}
