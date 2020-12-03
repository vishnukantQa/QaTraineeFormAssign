import { TestBed } from '@angular/core/testing';

import { PspaService } from './pspa.service';

describe('PspaService', () => {
  let service: PspaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PspaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
