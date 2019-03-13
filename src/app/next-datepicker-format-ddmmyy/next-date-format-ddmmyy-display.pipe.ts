import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({name: 'NextDateDisplayFormaDdMmYy', pure: true})
@Injectable({
  providedIn: 'root',
})
export class NextDateDisplayFormaDdMmYy implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  public transform(input: any, addTime: boolean = false): string {
    if (input && (input > 0 || input.length === 10 || input instanceof Date)) {
      const newDate = new Date(input);
      return this.datePipe.transform(newDate, `dd/MM/yy ${addTime ? 'HH:mm' : ''}`).trim();
    } else {
      return '';
    }
  }
}
