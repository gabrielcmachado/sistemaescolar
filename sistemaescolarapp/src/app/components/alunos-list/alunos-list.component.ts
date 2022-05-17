import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent implements OnInit {
  alunos:any
  constructor(
    private AlunosService: AlunosService,
    private router:Router,
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listAlunos();
  }

  listAlunos(): void{
    this.AlunosService.list()
    .subscribe(
      data => {
        this.alunos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  } 

  onEdit(idAluno:any){
    this.router.navigate(['editar',idAluno], {relativeTo:this.ActivatedRoute});
  }

}
