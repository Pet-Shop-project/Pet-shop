import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavybirdsAdminComponent } from './heavybirds-admin.component';

describe('HeavybirdsAdminComponent', () => {
  let component: HeavybirdsAdminComponent;
  let fixture: ComponentFixture<HeavybirdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavybirdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavybirdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
