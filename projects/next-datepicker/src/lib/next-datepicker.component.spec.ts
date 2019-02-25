import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDatepickerComponent } from './next-datepicker.component';

describe('NextDatepickerComponent', () => {
  let component: NextDatepickerComponent;
  let fixture: ComponentFixture<NextDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextDatepickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
