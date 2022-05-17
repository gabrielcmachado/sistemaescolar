import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/services/turmas.service'

@Component({
  selector: 'app-turmas-new',
  templateUrl: './turmas-new.component.html',
  styleUrls: ['./turmas-new.component.css']
})
export class TurmasNewComponent implements OnInit {
  idTurma:any;
  nmTurma:any;
  qtAlunos:any;
  stAtivo:any;
  dtCadastro:any;

  constructor(private TurmasService:TurmasService ) { }

  ngOnInit(): void {
  }

  save(): void {
    const turmas = {
      nmTurma:this.nmTurma,
      qtAlunos:this.qtAlunos,
      stAtivo:this.stAtivo,
      dtCadastro:this.dtCadastro
    };
    console.log(turmas);
    this.TurmasService.create(turmas)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
