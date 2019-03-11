import {NgModule} from '@angular/core';
import {NextDatepickerComponent} from './next-datepicker.component';
import {NextDateDisplay} from '../next-date-display/next-date-display.pipe';

@NgModule({
  exports: [NextDatepickerComponent],
  declarations: [NextDatepickerComponent, NextDateDisplay],
})
export class NextDatepickerModule {}
