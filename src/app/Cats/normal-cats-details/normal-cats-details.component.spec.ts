import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCatsDetailsComponent } from './normal-cats-details.component';

describe('NormalCatsDetailsComponent', () => {
  let component: NormalCatsDetailsComponent;
  let fixture: ComponentFixture<NormalCatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
