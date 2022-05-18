import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from 'src/app/services/professores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.css'],
})
export class ProfessoresListComponent implements OnInit {
  professores: any;
  constructor(
    private ProfessoresService: ProfessoresService,
    private routes: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listProfessores();
  }

  listProfessores(): void {
    this.ProfessoresService.list().subscribe(
      (data) => {
        this.professores = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEdit(id: any) {
    this.routes.navigate(['professores/edit', id]);
  }

  onDelete(id: any) {
    this.ProfessoresService.onDelete(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
