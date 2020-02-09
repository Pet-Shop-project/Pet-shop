import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyCatsComponent } from './heavy-cats.component';

describe('HeavyCatsComponent', () => {
  let component: HeavyCatsComponent;
  let fixture: ComponentFixture<HeavyCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
