import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({name: 'NextDateDisplayFormatYyyyMmmDd', pure: true})
@Injectable({
  providedIn: 'root',
})
export class NextDateDisplayFormatYyyyMmmDd implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  public transform(input: any, addTime: boolean = false): string {
    if (input && (input > 0 || input.length === 10 || input instanceof Date)) {
      const newDate = new Date(input);
      return this.datePipe.transform(newDate, `yyyy-MMM-dd ${addTime ? 'HH:mm' : ''}`).trim();
    } else {
      return '';
    }
  }
}
