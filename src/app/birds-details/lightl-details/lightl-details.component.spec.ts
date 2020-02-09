import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightlDetailsComponent } from './lightl-details.component';

describe('LightlDetailsComponent', () => {
  let component: LightlDetailsComponent;
  let fixture: ComponentFixture<LightlDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightlDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
