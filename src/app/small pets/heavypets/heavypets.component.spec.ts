import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavypetsComponent } from './heavypets.component';

describe('HeavypetsComponent', () => {
  let component: HeavypetsComponent;
  let fixture: ComponentFixture<HeavypetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavypetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavypetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
