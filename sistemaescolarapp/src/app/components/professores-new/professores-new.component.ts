import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from 'src/app/services/professores.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-professores-new',
  templateUrl: './professores-new.component.html',
  styleUrls: ['./professores-new.component.css'],
})
export class ProfessoresNewComponent implements OnInit {
  idProfessor: any;
  nomeProfessor: any;
  dtCadastro: any;
  stAtivo: any;
  public qtProfessores:any

  constructor(
    private ProfessoresService: ProfessoresService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.idProfessor = this.route.snapshot.paramMap.get('id');
    this.loadById();
  }

  loadById() {
    this.ProfessoresService.loadById(this.idProfessor).subscribe(
      (response: any) => {
        this.nomeProfessor = response.nomeProfessor;
        this.idProfessor = response.idProfessor;
        this.dtCadastro = response.dtCadastro;
        this.stAtivo = response.stAtivo;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProfessoresAuto() {
    const qtProfessores = this.qtProfessores
    let now  = new Date()
    let professores = {
      nomeProfessor: this.nomeProfessor,
      dtCadastro: this.dtCadastro,
      stAtivo: this.stAtivo,
    };
    for (let index = 1; index <= qtProfessores; index++) {
    
      professores.nomeProfessor = (`Professor (${index}) - Auto`);
      professores.dtCadastro = now.toISOString();
      professores.stAtivo = true;
    
      this.ProfessoresService.create(professores).subscribe(
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
    const professores = {
      nomeProfessor: this.nomeProfessor,
      dtCadastro: this.dtCadastro,
      stAtivo: this.stAtivo,
    };
    const professoresEdit = {
      nomeProfessor: this.nomeProfessor,
      dtCadastro: this.dtCadastro,
      stAtivo: this.stAtivo,
      idProfessor: this.idProfessor,
    };

    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.ProfessoresService.create(professores).subscribe(
        (response) => {
          alert('Professor criado com sucesso!');
          this.routes.navigate(['professores']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao criar Professor, tente novamente!');
          console.log(error);
        }
      );
    } else {
      this.ProfessoresService.update(
        this.idProfessor,
        professoresEdit
      ).subscribe(
        (response) => {
          alert('Professor Editado com sucesso!');
          this.routes.navigate(['professores']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao Editar Professor, tente novamente!');
          console.log(error);
        }
      );
    }
  }
}
