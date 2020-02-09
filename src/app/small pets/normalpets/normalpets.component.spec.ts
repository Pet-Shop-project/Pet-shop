import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalpetsComponent } from './normalpets.component';

describe('NormalpetsComponent', () => {
  let component: NormalpetsComponent;
  let fixture: ComponentFixture<NormalpetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
