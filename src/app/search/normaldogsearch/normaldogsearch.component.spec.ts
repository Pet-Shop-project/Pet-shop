import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaldogsearchComponent } from './normaldogsearch.component';

describe('NormaldogsearchComponent', () => {
  let component: NormaldogsearchComponent;
  let fixture: ComponentFixture<NormaldogsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaldogsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaldogsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
