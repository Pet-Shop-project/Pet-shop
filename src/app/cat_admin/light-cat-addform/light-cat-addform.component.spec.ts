import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCatAddformComponent } from './light-cat-addform.component';

describe('LightCatAddformComponent', () => {
  let component: LightCatAddformComponent;
  let fixture: ComponentFixture<LightCatAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCatAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCatAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
