import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from 'src/app/services/professores.service'

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.css']
})
export class ProfessoresListComponent implements OnInit {
  professores:any;
  constructor(private ProfessoresService: ProfessoresService) { }

  ngOnInit(): void {
    this.listProfessores();
  }

  listProfessores(): void{
    this.ProfessoresService.list()
    .subscribe(
      data => {
        this.professores = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  } 


}
