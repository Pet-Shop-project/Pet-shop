import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightdogdetailsComponent } from './lightdogdetails.component';

describe('LightdogdetailsComponent', () => {
  let component: LightdogdetailsComponent;
  let fixture: ComponentFixture<LightdogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightdogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightdogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
