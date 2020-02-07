import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightdogsComponent } from './lightdogs.component';

describe('LightdogsComponent', () => {
  let component: LightdogsComponent;
  let fixture: ComponentFixture<LightdogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightdogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightdogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
