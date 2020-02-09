import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCatsComponent } from './light-cats.component';

describe('LightCatsComponent', () => {
  let component: LightCatsComponent;
  let fixture: ComponentFixture<LightCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
