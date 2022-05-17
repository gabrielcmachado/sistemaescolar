import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from 'src/app/services/professores.service'

@Component({
  selector: 'app-professores-new',
  templateUrl: './professores-new.component.html',
  styleUrls: ['./professores-new.component.css']
})
export class ProfessoresNewComponent implements OnInit {
  idProfessor:any;
  nomeProfessor:any;
  dtCadastro:any;
  stAtivo:any;

  constructor(private ProfessoresService:ProfessoresService) { }

  ngOnInit(): void {
  }

  save(): void {
    const professores = {
      nomeProfessor:this.nomeProfessor,
      dtCadastro:this.dtCadastro,
      stAtivo:this.stAtivo
    };
    console.log(professores);
    this.ProfessoresService.create(professores)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
