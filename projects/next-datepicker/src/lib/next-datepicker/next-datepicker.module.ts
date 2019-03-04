import {NgModule} from '@angular/core';
import {NextDatepickerComponent} from './next-datepicker.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {NextDateDisplay} from '../next-date-display/next-date-display.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  exports: [NextDatepickerComponent],
  declarations: [NextDatepickerComponent, NextDateDisplay],
  providers: [DatePipe, NextDateDisplay],
})
export class NextDatepickerModule {}
