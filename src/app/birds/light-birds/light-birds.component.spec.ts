import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBirdsComponent } from './light-birds.component';

describe('LightBirdsComponent', () => {
  let component: LightBirdsComponent;
  let fixture: ComponentFixture<LightBirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
