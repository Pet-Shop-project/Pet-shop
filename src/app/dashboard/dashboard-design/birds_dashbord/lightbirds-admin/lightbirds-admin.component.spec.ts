import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightbirdsAdminComponent } from './lightbirds-admin.component';

describe('LightbirdsAdminComponent', () => {
  let component: LightbirdsAdminComponent;
  let fixture: ComponentFixture<LightbirdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightbirdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightbirdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
