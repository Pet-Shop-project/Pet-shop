import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavydogsearchComponent } from './heavydogsearch.component';

describe('HeavydogsearchComponent', () => {
  let component: HeavydogsearchComponent;
  let fixture: ComponentFixture<HeavydogsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavydogsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavydogsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
