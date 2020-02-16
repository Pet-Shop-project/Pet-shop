import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbirdsAdminComponent } from './allbirds-admin.component';

describe('AllbirdsAdminComponent', () => {
  let component: AllbirdsAdminComponent;
  let fixture: ComponentFixture<AllbirdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbirdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbirdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
