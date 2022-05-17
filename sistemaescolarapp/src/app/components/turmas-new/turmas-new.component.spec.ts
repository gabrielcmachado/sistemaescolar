import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasNewComponent } from './turmas-new.component';

describe('TurmasNewComponent', () => {
  let component: TurmasNewComponent;
  let fixture: ComponentFixture<TurmasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmasNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
