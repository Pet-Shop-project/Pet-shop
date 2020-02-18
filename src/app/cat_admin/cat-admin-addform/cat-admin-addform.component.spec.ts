import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdminAddformComponent } from './cat-admin-addform.component';

describe('CatAdminAddformComponent', () => {
  let component: CatAdminAddformComponent;
  let fixture: ComponentFixture<CatAdminAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAdminAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAdminAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
