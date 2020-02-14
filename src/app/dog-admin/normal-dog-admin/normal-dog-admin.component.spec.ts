import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDogAdminComponent } from './normal-dog-admin.component';

describe('NormalDogAdminComponent', () => {
  let component: NormalDogAdminComponent;
  let fixture: ComponentFixture<NormalDogAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalDogAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalDogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
