import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  public  qtMaterias:any;
  public  pesoProvaf1:any;
  public  pesoProvaf2:any;
  public  pesoProvaf3:any;

  constructor(private MateriasService:MateriasService,
    private route: ActivatedRoute,
    private routes: Router,) { }

  ngOnInit(): void {
    this.idMateria = this.route.snapshot.paramMap.get('id');
    this.loadById();
  }

  loadById() {
    this.MateriasService.loadById(this.idMateria).subscribe(
      (response: any) => {
        this.nomeMateria= response.nomeMateria;
        this.pesoProva1= response.pesoProva1;
        this.pesoProva2= response.pesoProva2;
        this.pesoProva3= response.pesoProva3;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMateriasAuto() {

    const qtMaterias = this.qtMaterias;
    const pesoProvaf1 = this.pesoProvaf1;
    const pesoProvaf2 = this.pesoProvaf2;
    const pesoProvaf3 = this.pesoProvaf3;
    let materias = {
      nomeMateria:this.nomeMateria,
      pesoProva1:this.pesoProva1,
      pesoProva2:this.pesoProva2,
      pesoProva3:this.pesoProva3
    };
    for (let index = 1; index <= qtMaterias; index++) {
    
      materias.nomeMateria = (`Materia Auto - ${index}`);
      materias.pesoProva1 = pesoProvaf1;
      materias.pesoProva2 = pesoProvaf2;
      materias.pesoProva3 = pesoProvaf3;
    
      this.MateriasService.create(materias).subscribe(
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
    const materias = {
      nomeMateria:this.nomeMateria,
      pesoProva1:this.pesoProva1,
      pesoProva2:this.pesoProva2,
      pesoProva3:this.pesoProva3
    };
    const materiasEdit = {
      nomeMateria:this.nomeMateria,
      pesoProva1:this.pesoProva1,
      pesoProva2:this.pesoProva2,
      pesoProva3:this.pesoProva3,
      idMateria: this.idMateria,
    };

    if (this.route.snapshot.paramMap.get('id') == undefined) {
    this.MateriasService.create(materias)
      .subscribe(
        response => {
          alert('Materia criada com sucesso!');
          this.routes.navigate(['materias']);
          console.log(response);
        },
        error => {
          alert('Erro ao criar matéria, tente novamente!');
          console.log(error);
        });
      } else {
        this.MateriasService.update(this.idMateria, materiasEdit).subscribe(
        (response) => {
          alert('Materia Editada com sucesso!');
          this.routes.navigate(['materias']);
          console.log(response);
        },
        (error) => {
          alert('Erro ao Editar matéria, tente novamente!');
          console.log(error);
        });
      }
    }

}
