import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesAdminAddformComponent } from './accessories-admin-addform.component';

describe('AccessoriesAdminAddformComponent', () => {
  let component: AccessoriesAdminAddformComponent;
  let fixture: ComponentFixture<AccessoriesAdminAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesAdminAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesAdminAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
