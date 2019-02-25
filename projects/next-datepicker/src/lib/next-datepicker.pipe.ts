import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'dateDisplay', pure: true })
export class DateDisplay implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(input: any, addTime: boolean = false): string {
    if (input && (input > 0 || input.length === 10 || input instanceof Date)) {
      const newDate = new Date(input);
      return this.datePipe
        .transform(newDate, `dd-MMM-yyyy ${addTime ? 'HH:mm' : ''}`)
        .trim();
    } else {
      return '';
    }
  }
}
