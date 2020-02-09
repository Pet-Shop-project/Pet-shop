import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightpetsDetailsComponent } from './lightpets-details.component';

describe('LightpetsDetailsComponent', () => {
  let component: LightpetsDetailsComponent;
  let fixture: ComponentFixture<LightpetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightpetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightpetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
