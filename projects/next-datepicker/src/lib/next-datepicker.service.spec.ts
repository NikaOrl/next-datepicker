import { TestBed } from '@angular/core/testing';

import { NextDatepickerService } from './next-datepicker.service';

describe('NextDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextDatepickerService = TestBed.get(NextDatepickerService);
    expect(service).toBeTruthy();
  });
});
