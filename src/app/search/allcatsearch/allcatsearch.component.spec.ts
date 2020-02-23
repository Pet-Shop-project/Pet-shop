import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcatsearchComponent } from './allcatsearch.component';

describe('AllcatsearchComponent', () => {
  let component: AllcatsearchComponent;
  let fixture: ComponentFixture<AllcatsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcatsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcatsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
