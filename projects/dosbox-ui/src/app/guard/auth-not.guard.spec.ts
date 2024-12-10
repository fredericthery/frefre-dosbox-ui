import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authNotGuard } from './auth-not.guard';

describe('authNotGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authNotGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
