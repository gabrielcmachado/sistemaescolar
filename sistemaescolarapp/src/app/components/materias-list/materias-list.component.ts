import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias-list',
  templateUrl: './materias-list.component.html',
  styleUrls: ['./materias-list.component.css']
})
export class MateriasListComponent implements OnInit {
  materias:any;
  constructor(private MateriasService: MateriasService,
    private routes: Router,
    private route: ActivatedRoute,) { }

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
  onEdit(id:any) {
    this.routes.navigate(['materias/edit', id]);
  }
  
  onDelete(id:any) {
      this.MateriasService.onDelete(id).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }

}
