import { TestBed } from '@angular/core/testing';

import { ApihhtpInterceptor } from './apihhtp.interceptor';

describe('ApihhtpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApihhtpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApihhtpInterceptor = TestBed.inject(ApihhtpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
