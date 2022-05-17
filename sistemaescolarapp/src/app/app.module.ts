import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { AlunosNewComponent } from './components/alunos-new/alunos-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProfessoresListComponent } from './components/professores-list/professores-list.component';
import { ProfessoresNewComponent } from './components/professores-new/professores-new.component';
import { TurmasListComponent } from './components/turmas-list/turmas-list.component';
import { TurmasNewComponent } from './components/turmas-new/turmas-new.component';
import { MateriasNewComponent } from './components/materias-new/materias-new.component';
import { MateriasListComponent } from './components/materias-list/materias-list.component';
import { PeriodosListComponent } from './components/periodos-list/periodos-list.component';
import { PeriodosNewComponent } from './components/periodos-new/periodos-new.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AlunosListComponent,
    AlunosNewComponent,
    ProfessoresListComponent,
    ProfessoresNewComponent,
    TurmasListComponent,
    TurmasNewComponent,
    MateriasNewComponent,
    MateriasListComponent,
    PeriodosListComponent,
    PeriodosNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
