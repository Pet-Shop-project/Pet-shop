import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformAdminComponent } from './addform-admin.component';

describe('AddformAdminComponent', () => {
  let component: AddformAdminComponent;
  let fixture: ComponentFixture<AddformAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
