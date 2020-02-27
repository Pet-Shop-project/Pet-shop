import { TestBed } from '@angular/core/testing';

import { RegisteradminService } from './registeradmin.service';

describe('RegisteradminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisteradminService = TestBed.get(RegisteradminService);
    expect(service).toBeTruthy();
  });
});
