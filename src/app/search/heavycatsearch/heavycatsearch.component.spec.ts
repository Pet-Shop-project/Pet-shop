import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavycatsearchComponent } from './heavycatsearch.component';

describe('HeavycatsearchComponent', () => {
  let component: HeavycatsearchComponent;
  let fixture: ComponentFixture<HeavycatsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavycatsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavycatsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
