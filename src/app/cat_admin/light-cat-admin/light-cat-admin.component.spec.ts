import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCatAdminComponent } from './light-cat-admin.component';

describe('LightCatAdminComponent', () => {
  let component: LightCatAdminComponent;
  let fixture: ComponentFixture<LightCatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
