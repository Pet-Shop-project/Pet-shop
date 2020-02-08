import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCatsComponent } from './normal-cats.component';

describe('NormalCatsComponent', () => {
  let component: NormalCatsComponent;
  let fixture: ComponentFixture<NormalCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
