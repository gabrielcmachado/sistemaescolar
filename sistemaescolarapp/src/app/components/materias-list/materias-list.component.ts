import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service'

@Component({
  selector: 'app-materias-list',
  templateUrl: './materias-list.component.html',
  styleUrls: ['./materias-list.component.css']
})
export class MateriasListComponent implements OnInit {
  materias:any;
  constructor(private MateriasService: MateriasService) { }

  ngOnInit(): void {
    this.listMaterias();
  }

  listMaterias(): void{
    this.MateriasService.list()
    .subscribe(
      data => {
        this.materias = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  } 


}
