import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyCatsDetailsComponent } from './heavy-cats-details.component';

describe('HeavyCatsDetailsComponent', () => {
  let component: HeavyCatsDetailsComponent;
  let fixture: ComponentFixture<HeavyCatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyCatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyCatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
