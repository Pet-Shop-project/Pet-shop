import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalBirdsComponent } from './normal-birds.component';

describe('NormalBirdsComponent', () => {
  let component: NormalBirdsComponent;
  let fixture: ComponentFixture<NormalBirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalBirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
