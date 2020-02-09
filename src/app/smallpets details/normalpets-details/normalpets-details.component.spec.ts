import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalpetsDetailsComponent } from './normalpets-details.component';

describe('NormalpetsDetailsComponent', () => {
  let component: NormalpetsDetailsComponent;
  let fixture: ComponentFixture<NormalpetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalpetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalpetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
