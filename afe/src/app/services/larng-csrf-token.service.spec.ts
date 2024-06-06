import { TestBed } from '@angular/core/testing';

import { LarngCsrfTokenService } from './larng-csrf-token.service';

describe('LarngCsrfTokenService', () => {
  let service: LarngCsrfTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LarngCsrfTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
