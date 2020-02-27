import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbirdsearchComponent } from './allbirdsearch.component';

describe('AllbirdsearchComponent', () => {
  let component: AllbirdsearchComponent;
  let fixture: ComponentFixture<AllbirdsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbirdsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbirdsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
