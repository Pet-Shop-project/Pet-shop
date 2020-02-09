import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyBirdsComponent } from './heavy-birds.component';

describe('HeavyBirdsComponent', () => {
  let component: HeavyBirdsComponent;
  let fixture: ComponentFixture<HeavyBirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyBirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
