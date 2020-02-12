import { TestBed } from '@angular/core/testing';

import { SmallpetServiceService } from './smallpet-service.service';

describe('SmallpetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmallpetServiceService = TestBed.get(SmallpetServiceService);
    expect(service).toBeTruthy();
  });
});
