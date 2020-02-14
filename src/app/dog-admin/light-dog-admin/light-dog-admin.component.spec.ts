import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDogAdminComponent } from './light-dog-admin.component';

describe('LightDogAdminComponent', () => {
  let component: LightDogAdminComponent;
  let fixture: ComponentFixture<LightDogAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDogAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
