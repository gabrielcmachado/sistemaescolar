import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosNewComponent } from './components/alunos-new/alunos-new.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { MateriasListComponent } from './components/materias-list/materias-list.component';
import { PeriodosListComponent } from './components/periodos-list/periodos-list.component';
import { ProfessoresListComponent } from './components/professores-list/professores-list.component';
import { TurmasListComponent } from './components/turmas-list/turmas-list.component';
import { MateriasNewComponent } from './components/materias-new/materias-new.component';
import { PeriodosNewComponent } from './components/periodos-new/periodos-new.component';
import { ProfessoresNewComponent } from './components/professores-new/professores-new.component';
import { TurmasNewComponent } from './components/turmas-new/turmas-new.component';
import { VincularalunosturmaComponent } from './components/vincularalunosturma/vincularalunosturma.component';

const routes: Routes = [
  { path: 'alunos/novo', component: AlunosNewComponent },
  { path: 'alunos/edit/:id', component: AlunosNewComponent },
  { path: 'alunos', component: AlunosListComponent },
  { path: 'materias', component: MateriasListComponent },
  { path: 'periodos', component: PeriodosListComponent },
  { path: 'professores', component: ProfessoresListComponent },
  { path: 'turmas', component: TurmasListComponent },
  { path: 'materias/novo', component: MateriasNewComponent },
  { path: 'materias/edit/:id', component: MateriasNewComponent },
  { path: 'periodos/novo', component: PeriodosNewComponent },
  { path: 'periodos/edit/:id', component: PeriodosNewComponent },
  { path: 'professores/novo', component: ProfessoresNewComponent },
  { path: 'professores/edit/:id', component: ProfessoresNewComponent },
  { path: 'turmas/novo', component: TurmasNewComponent },
  { path: 'turmas/edit/:id', component: TurmasNewComponent },
  { path: 'vincularturmasauto', component: VincularalunosturmaComponent},
  { path: '', redirectTo: 'alunos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
