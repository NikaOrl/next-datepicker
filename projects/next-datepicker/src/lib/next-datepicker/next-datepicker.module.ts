import {NgModule} from '@angular/core';
import {NextDatepickerComponent} from './next-datepicker.component';
import {NextDateDisplay} from '../next-date-display/next-date-display.pipe';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [FormsModule, NgbDatepickerModule],
  exports: [NextDatepickerComponent],
  declarations: [NextDatepickerComponent, NextDateDisplay],
})
export class NextDatepickerModule {}
