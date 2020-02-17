import { TestBed } from '@angular/core/testing';

import { NavbarDashboardService } from './navbar-dashboard.service';

describe('NavbarDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarDashboardService = TestBed.get(NavbarDashboardService);
    expect(service).toBeTruthy();
  });
});
