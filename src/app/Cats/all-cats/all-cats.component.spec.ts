import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatsComponent } from './all-cats.component';

describe('AllCatsComponent', () => {
  let component: AllCatsComponent;
  let fixture: ComponentFixture<AllCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
