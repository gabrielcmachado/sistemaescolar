import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service'

@Component({
  selector: 'app-materias-new',
  templateUrl: './materias-new.component.html',
  styleUrls: ['./materias-new.component.css']
})
export class MateriasNewComponent implements OnInit {
  idMateria:any;
  nomeMateria:any;
  pesoProva1:any;
  pesoProva2:any;
  pesoProva3:any;

  constructor(private MateriasService:MateriasService ) { }

  ngOnInit(): void {
  }

  save(): void {
    const materias = {
      nomeMateria:this.nomeMateria,
      pesoProva1:this.pesoProva1,
      pesoProva2:this.pesoProva2,
      pesoProva3:this.pesoProva3
    };
    console.log(materias);
    this.MateriasService.create(materias)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
