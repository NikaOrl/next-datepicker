import {async, TestBed} from '@angular/core/testing';
import {NextDateDisplay} from './next-date-display.pipe';
import {DatePipe} from '@angular/common';

describe('Pipe: NextDateDisplay', () => {
  let nextDateDisplay: NextDateDisplay;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      providers: [DatePipe, NextDateDisplay],
    })));

  beforeEach(() => {
    nextDateDisplay = TestBed.get(NextDateDisplay);
  });

  it(`transforms Date object to 'h:mm a MM-dd-yyyy' form`, () => {
    const morning = Date.parse('1995-12-17T03:24:00');
    const afternoon = Date.parse('1995-12-17T15:24:00');
    const midnight = Date.parse('1995-12-17T00:00:00');
    expect(nextDateDisplay.transform(morning, true)).toBe('17-Dec-1995 03:24');
    expect(nextDateDisplay.transform(afternoon, true)).toBe('17-Dec-1995 15:24');
    expect(nextDateDisplay.transform(midnight, true)).toBe('17-Dec-1995 00:00');
    expect(nextDateDisplay.transform(morning, false)).toBe('17-Dec-1995');
    expect(nextDateDisplay.transform(afternoon)).toBe('17-Dec-1995');
    expect(nextDateDisplay.transform(midnight)).toBe('17-Dec-1995');
  });

  it('returns an empty string if passed value is not valid', () => {
    expect(nextDateDisplay.transform('')).toBe('');
    expect(nextDateDisplay.transform(-2)).toBe('');
    expect(nextDateDisplay.transform(NaN)).toBe('');
    expect(nextDateDisplay.transform(null)).toBe('');
    expect(nextDateDisplay.transform(undefined)).toBe('');
    expect(nextDateDisplay.transform({})).toBe('');
    expect(nextDateDisplay.transform([])).toBe('');
  });
});
