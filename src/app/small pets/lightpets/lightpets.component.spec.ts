import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightpetsComponent } from './lightpets.component';

describe('LightpetsComponent', () => {
  let component: LightpetsComponent;
  let fixture: ComponentFixture<LightpetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
