import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavydogsComponent } from './heavydogs.component';

describe('HeavydogsComponent', () => {
  let component: HeavydogsComponent;
  let fixture: ComponentFixture<HeavydogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavydogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavydogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
