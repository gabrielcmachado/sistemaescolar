import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularalunosturmaComponent } from './vincularalunosturma.component';

describe('VincularalunosturmaComponent', () => {
  let component: VincularalunosturmaComponent;
  let fixture: ComponentFixture<VincularalunosturmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VincularalunosturmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularalunosturmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
