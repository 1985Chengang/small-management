import { TestBed } from '@angular/core/testing';

import { AuthJwtService } from './auth-jwt.service';

describe('AuthJwtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthJwtService = TestBed.get(AuthJwtService);
    expect(service).toBeTruthy();
  });
});
