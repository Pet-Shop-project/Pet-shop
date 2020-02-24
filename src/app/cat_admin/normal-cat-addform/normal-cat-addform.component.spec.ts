import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCatAddformComponent } from './normal-cat-addform.component';

describe('NormalCatAddformComponent', () => {
  let component: NormalCatAddformComponent;
  let fixture: ComponentFixture<NormalCatAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCatAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCatAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
