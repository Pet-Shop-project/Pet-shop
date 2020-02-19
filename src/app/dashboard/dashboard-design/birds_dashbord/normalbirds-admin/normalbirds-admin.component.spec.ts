import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalbirdsAdminComponent } from './normalbirds-admin.component';

describe('NormalbirdsAdminComponent', () => {
  let component: NormalbirdsAdminComponent;
  let fixture: ComponentFixture<NormalbirdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalbirdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalbirdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
