import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalsmallAdminComponent } from './normalsmall-admin.component';

describe('NormalsmallAdminComponent', () => {
  let component: NormalsmallAdminComponent;
  let fixture: ComponentFixture<NormalsmallAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalsmallAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalsmallAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
