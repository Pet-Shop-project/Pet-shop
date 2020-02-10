import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCatsDetailsComponent } from './light-cats-details.component';

describe('LightCatsDetailsComponent', () => {
  let component: LightCatsDetailsComponent;
  let fixture: ComponentFixture<LightCatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
