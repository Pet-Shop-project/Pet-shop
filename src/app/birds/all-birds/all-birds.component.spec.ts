import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBirdsComponent } from './all-birds.component';

describe('AllBirdsComponent', () => {
  let component: AllBirdsComponent;
  let fixture: ComponentFixture<AllBirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
