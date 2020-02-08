import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldogdetailsComponent } from './alldogdetails.component';

describe('AlldogdetailsComponent', () => {
  let component: AlldogdetailsComponent;
  let fixture: ComponentFixture<AlldogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
