import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasNewComponent } from './materias-new.component';

describe('MateriasNewComponent', () => {
  let component: MateriasNewComponent;
  let fixture: ComponentFixture<MateriasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
