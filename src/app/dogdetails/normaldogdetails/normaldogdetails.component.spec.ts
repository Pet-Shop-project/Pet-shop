import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaldogdetailsComponent } from './normaldogdetails.component';

describe('NormaldogdetailsComponent', () => {
  let component: NormaldogdetailsComponent;
  let fixture: ComponentFixture<NormaldogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaldogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaldogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
