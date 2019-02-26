import { async, TestBed } from '@angular/core/testing';
import { DateDisplay } from './date-display.pipe';
import { DatePipe } from '@angular/common';

describe('Pipe: DateDisplay', () => {
  let dateDisplay: DateDisplay;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      providers: [DatePipe, DateDisplay]
    })));

  beforeEach(() => {
    dateDisplay = TestBed.get(DateDisplay);
  });

  it(`transforms Date object to 'h:mm a MM-dd-yyyy' form`, () => {
    const morning = Date.parse('1995-12-17T03:24:00');
    const afternoon = Date.parse('1995-12-17T15:24:00');
    const midnight = Date.parse('1995-12-17T00:00:00');
    expect(dateDisplay.transform(morning, true)).toBe('17-Dec-1995 03:24');
    expect(dateDisplay.transform(afternoon, true)).toBe('17-Dec-1995 15:24');
    expect(dateDisplay.transform(midnight, true)).toBe('17-Dec-1995 00:00');
    expect(dateDisplay.transform(morning, false)).toBe('17-Dec-1995');
    expect(dateDisplay.transform(afternoon)).toBe('17-Dec-1995');
    expect(dateDisplay.transform(midnight)).toBe('17-Dec-1995');
  });

  it('returns an empty string if passed value is not valid', () => {
    expect(dateDisplay.transform('')).toBe('');
    expect(dateDisplay.transform(-2)).toBe('');
    expect(dateDisplay.transform(NaN)).toBe('');
    expect(dateDisplay.transform(null)).toBe('');
    expect(dateDisplay.transform(undefined)).toBe('');
    expect(dateDisplay.transform({})).toBe('');
    expect(dateDisplay.transform([])).toBe('');
  });
});
