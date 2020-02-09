import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavypetsDetailsComponent } from './heavypets-details.component';

describe('HeavypetsDetailsComponent', () => {
  let component: HeavypetsDetailsComponent;
  let fixture: ComponentFixture<HeavypetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavypetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavypetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
