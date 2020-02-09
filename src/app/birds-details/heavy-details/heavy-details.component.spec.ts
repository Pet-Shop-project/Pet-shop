import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyDetailsComponent } from './heavy-details.component';

describe('HeavyDetailsComponent', () => {
  let component: HeavyDetailsComponent;
  let fixture: ComponentFixture<HeavyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
