import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/services/turmas.service'

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.css']
})
export class TurmasListComponent implements OnInit {
  turmas:any;
  constructor(private TurmasService: TurmasService) { }

  ngOnInit(): void {
    this.listTurmas();
  }

  listTurmas(): void{
    this.TurmasService.list()
    .subscribe(
      data => {
        this.turmas = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  } 


}
