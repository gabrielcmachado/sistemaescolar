import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresNewComponent } from './professores-new.component';

describe('ProfessoresNewComponent', () => {
  let component: ProfessoresNewComponent;
  let fixture: ComponentFixture<ProfessoresNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
