import {Injectable} from '@angular/core';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

@Injectable({
  providedIn: 'root',
})
export class NextDateFormatter extends NgbDateParserFormatter {
  constructor(private datePipe: DatePipe) {
    super();
  }

  public parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split(/\D/);
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {month: null, day: null, year: toInteger(dateParts[0])};
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          month: toInteger(dateParts[1]),
          day: null,
          year: toInteger(dateParts[0]),
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2]),
          year: toInteger(dateParts[0]),
        };
      }
    }
    return null;
  }

  public format(dateStruct: NgbDateStruct): string {
    if (!dateStruct) {
      return '';
    }
    const date = new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
    return this.datePipe.transform(date);
  }
}
