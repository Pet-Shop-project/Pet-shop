import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldogsComponent } from './alldogs.component';

describe('AlldogsComponent', () => {
  let component: AlldogsComponent;
  let fixture: ComponentFixture<AlldogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
