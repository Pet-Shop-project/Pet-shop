import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatDetailsComponent } from './all-cat-details.component';

describe('AllCatDetailsComponent', () => {
  let component: AllCatDetailsComponent;
  let fixture: ComponentFixture<AllCatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
