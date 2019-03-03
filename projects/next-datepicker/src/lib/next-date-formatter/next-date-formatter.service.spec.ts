import {NextDateFormatter} from './next-date-formatter.service';
import {async, TestBed} from '@angular/core/testing';
import {DatePipe} from '@angular/common';

describe(`NextDateFormatter`, () => {
  let serviceForTest: NextDateFormatter;
  let instance: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: DatePipe, useValue: {transform: () => ''}}, NextDateFormatter],
    });
  }));

  beforeEach(() => {
    serviceForTest = TestBed.get(NextDateFormatter);
    instance = serviceForTest as any;
  });

  it(`should be instantiated`, () => {
    expect(serviceForTest).toBeDefined();
  });

  it(`should not parse when no value`, () => {
    const value = '';
    expect(serviceForTest.parse(value)).toBeNull();
  });

  it(`should not parse when no value`, () => {
    const value = '';
    expect(serviceForTest.parse(value)).toBeNull();
  });

  it(`should parse year`, () => {
    const value = ' 2019 ';
    const result = {month: null, day: null, year: 2019};
    expect(serviceForTest.parse(value)).toEqual(result);
  });

  it(`should parse year, month`, () => {
    const value = ' 2019 4 ';
    const result = {month: 4, day: null, year: 2019};
    expect(serviceForTest.parse(value)).toEqual(result);
  });

  it(`should parse year, month, day`, () => {
    const value = ' 2019 4 7 ';
    const result = {month: 4, day: 7, year: 2019};
    expect(serviceForTest.parse(value)).toEqual(result);
  });

  it(`should not parse value when passed value is incorrect`, () => {
    let value = ' 2019 4 7 6 ';
    expect(serviceForTest.parse(value)).toBeNull();

    value = 'some text without numbers';
    expect(serviceForTest.parse(value)).toBeNull();
  });

  it(`should not format value when no value`, () => {
    const spy = spyOn(instance.datePipe, 'transform');
    const value = null;
    expect(serviceForTest.format(value)).toBe('');
    expect(spy).not.toHaveBeenCalled();
  });

  it(`should not format value when no value`, () => {
    const spy = spyOn(instance.datePipe, 'transform').and.returnValue('2019 4 7');
    const value = {month: 4, day: 7, year: 2019};
    const date = new Date(value.year, value.month - 1, value.day);
    expect(serviceForTest.format(value as any)).toBe('2019 4 7');
    expect(spy).toHaveBeenCalledWith(date);
  });
});
