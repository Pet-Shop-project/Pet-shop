import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyDogAdminComponent } from './heavy-dog-admin.component';

describe('HeavyDogAdminComponent', () => {
  let component: HeavyDogAdminComponent;
  let fixture: ComponentFixture<HeavyDogAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyDogAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyDogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
