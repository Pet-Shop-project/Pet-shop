import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavydogdetailsComponent } from './heavydogdetails.component';

describe('HeavydogdetailsComponent', () => {
  let component: HeavydogdetailsComponent;
  let fixture: ComponentFixture<HeavydogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavydogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavydogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
