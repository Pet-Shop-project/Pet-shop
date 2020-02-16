import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsmallAdminComponent } from './lightsmall-admin.component';

describe('LightsmallAdminComponent', () => {
  let component: LightsmallAdminComponent;
  let fixture: ComponentFixture<LightsmallAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsmallAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsmallAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
