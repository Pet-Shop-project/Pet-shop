import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyCatAdminComponent } from './heavy-cat-admin.component';

describe('HeavyCatAdminComponent', () => {
  let component: HeavyCatAdminComponent;
  let fixture: ComponentFixture<HeavyCatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyCatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyCatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
