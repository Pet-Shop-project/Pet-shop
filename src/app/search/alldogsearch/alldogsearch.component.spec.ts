import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldogsearchComponent } from './alldogsearch.component';

describe('AlldogsearchComponent', () => {
  let component: AlldogsearchComponent;
  let fixture: ComponentFixture<AlldogsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldogsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldogsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
