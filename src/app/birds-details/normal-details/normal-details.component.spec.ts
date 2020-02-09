import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDetailsComponent } from './normal-details.component';

describe('NormalDetailsComponent', () => {
  let component: NormalDetailsComponent;
  let fixture: ComponentFixture<NormalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
