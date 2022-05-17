import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodosNewComponent } from './periodos-new.component';

describe('PeriodosNewComponent', () => {
  let component: PeriodosNewComponent;
  let fixture: ComponentFixture<PeriodosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodosNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
