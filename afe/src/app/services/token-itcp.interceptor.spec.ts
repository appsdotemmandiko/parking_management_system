import { TestBed } from '@angular/core/testing';

import { TokenItcpInterceptor } from './token-itcp.interceptor';

describe('TokenItcpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenItcpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenItcpInterceptor = TestBed.inject(TokenItcpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
