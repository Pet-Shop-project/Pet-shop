import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaldogsComponent } from './normaldogs.component';

describe('NormaldogsComponent', () => {
  let component: NormaldogsComponent;
  let fixture: ComponentFixture<NormaldogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaldogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaldogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
