import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCatAdminComponent } from './normal-cat-admin.component';

describe('NormalCatAdminComponent', () => {
  let component: NormalCatAdminComponent;
  let fixture: ComponentFixture<NormalCatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
