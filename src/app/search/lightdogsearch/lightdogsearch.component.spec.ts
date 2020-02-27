import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightdogsearchComponent } from './lightdogsearch.component';

describe('LightdogsearchComponent', () => {
  let component: LightdogsearchComponent;
  let fixture: ComponentFixture<LightdogsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightdogsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightdogsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
