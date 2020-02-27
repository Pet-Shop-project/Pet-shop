import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalcatsearchComponent } from './normalcatsearch.component';

describe('NormalcatsearchComponent', () => {
  let component: NormalcatsearchComponent;
  let fixture: ComponentFixture<NormalcatsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalcatsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalcatsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
