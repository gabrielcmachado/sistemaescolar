import { TestBed } from '@angular/core/testing';

import { VincularalunosturmaService } from './vincularalunosturma.service';

describe('VincularalunosturmaService', () => {
  let service: VincularalunosturmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VincularalunosturmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
