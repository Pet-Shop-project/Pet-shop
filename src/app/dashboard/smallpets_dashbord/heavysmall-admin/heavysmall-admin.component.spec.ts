import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavysmallAdminComponent } from './heavysmall-admin.component';

describe('HeavysmallAdminComponent', () => {
  let component: HeavysmallAdminComponent;
  let fixture: ComponentFixture<HeavysmallAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavysmallAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavysmallAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
