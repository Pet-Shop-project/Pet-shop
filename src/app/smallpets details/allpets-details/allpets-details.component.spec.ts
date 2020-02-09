import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpetsDetailsComponent } from './allpets-details.component';

describe('AllpetsDetailsComponent', () => {
  let component: AllpetsDetailsComponent;
  let fixture: ComponentFixture<AllpetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
