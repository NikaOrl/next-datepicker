import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NextDatepickerModule, NextDateFormatter, NextDateDisplay} from 'next-datepicker';
import {NextDatepickerFormatYyyyMmmDdComponent} from './next-datepicker-format-yyyy-mmm-dd/next-datepicker-format-yyyy-mmm-dd.component';
import {NextDatepickerFormatDdMmmYyyyComponent} from './next-datepicker-format-dd-mmm-yyyy/next-datepicker-format-dd-mmm-yyyy.component';
import {NextDatepickerFormatDdmmyyComponent} from './next-datepicker-format-ddmmyy/next-datepicker-format-ddmmyy.component';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NextDatepickerFormatYyyyMmmDdComponent,
    NextDatepickerFormatDdMmmYyyyComponent,
    NextDatepickerFormatDdmmyyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NextDatepickerModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [
    DatePipe,
    {
      provide: NgbDateParserFormatter,
      useClass: NextDateFormatter,
      deps: [NextDateDisplay],
    },
  ],
})
export class AppModule {}
