import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NextDatepickerModule} from 'next-datepicker';
import { NextDatepickerFormatYyyyMmmDdComponent } from './next-datepicker-format-yyyy-mmm-dd/next-datepicker-format-yyyy-mmm-dd.component';

@NgModule({
  declarations: [AppComponent, NextDatepickerFormatYyyyMmmDdComponent],
  imports: [BrowserModule, AppRoutingModule, NextDatepickerModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
