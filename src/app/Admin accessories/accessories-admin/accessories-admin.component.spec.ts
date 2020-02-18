import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesAdminComponent } from './accessories-admin.component';

describe('AccessoriesAdminComponent', () => {
  let component: AccessoriesAdminComponent;
  let fixture: ComponentFixture<AccessoriesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
