import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsmallpetsearchComponent } from './allsmallpetsearch.component';

describe('AllsmallpetsearchComponent', () => {
  let component: AllsmallpetsearchComponent;
  let fixture: ComponentFixture<AllsmallpetsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsmallpetsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsmallpetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
