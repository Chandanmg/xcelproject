import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofiledailogComponent } from './addprofiledailog.component';

describe('AddprofiledailogComponent', () => {
  let component: AddprofiledailogComponent;
  let fixture: ComponentFixture<AddprofiledailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprofiledailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofiledailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
