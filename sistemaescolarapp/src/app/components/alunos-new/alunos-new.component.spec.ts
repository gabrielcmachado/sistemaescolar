import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosNewComponent } from './alunos-new.component';

describe('AlunosNewComponent', () => {
  let component: AlunosNewComponent;
  let fixture: ComponentFixture<AlunosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
