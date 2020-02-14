import { TestBed } from '@angular/core/testing';

import { HeavtCatsService } from './heavt-cats.service';

describe('HeavtCatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeavtCatsService = TestBed.get(HeavtCatsService);
    expect(service).toBeTruthy();
  });
});
