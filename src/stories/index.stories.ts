import {NgbDatepickerModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

import {storiesOf} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';
import {withKnobs} from '@storybook/addon-knobs';
import {setConsoleOptions} from '@storybook/addon-console';

import * as marked from 'marked';
import defaultText from './default.md';
import withDifferentAlignments from './with-different-alignments.md';
import withDifferentPlacements from './with-different-placements.md';
import withDifferentThemes from './with-different-themes.md';
import withChangeOutput from './with-change-output.md';

import {
  NextDatepickerComponent,
  NextDateDisplay,
  DatePickerAlignment,
  DatePickerThemes,
  NextDateFormatter,
} from '../../projects/next-datepicker/src/public_api';
import {PipeTransform, Pipe, Component, NO_ERRORS_SCHEMA, NgModule, forwardRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {NextDatepickerFormatYyyyMmmDdComponent} from '../app/next-datepicker-format-yyyy-mmm-dd/next-datepicker-format-yyyy-mmm-dd.component';
import {NextDateDisplayFormatYyyyMmmDd} from '../app/next-datepicker-format-yyyy-mmm-dd/next-date-format-yyyy-mmm-dd-display.pipe';

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

const styles = `
  <style>
  .container \{
    margin-top: 30px;
  \}
  .label-for-inline-datepicker \{
    margin-right: 10px;
  \}
  </style>
`;

storiesOf('next-datepicker', module)
  .addDecorator(withKnobs)
  .add(
    'Install',
    withNotes({text: marked(defaultText)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date">Date:</label>
          <next-datepicker [(ngModel)]="someDate"
              id="date" name="date"></next-datepicker
              >
        </div>
      </form>
    `,
      props: {
        someDate: 12344400000,
      },
    })),
  )
  .add(
    'With different alignments',
    withNotes({text: marked(withDifferentAlignments)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date1">Left-aligned datepicker:</label>
          <next-datepicker [(ngModel)]="someDate1"
              id="date1" name="date" [alignment]="DatePickerAlignment.left"></next-datepicker>
        </div>
        <div class="container">
          <label for="date2">Right-aligned datepicker:</label>
          <next-datepicker [(ngModel)]="someDate2"
              id="date2" name="date" [alignment]="DatePickerAlignment.right"></next-datepicker>
        </div>
      </form>
    `,
      props: {
        someDate1: 12344400000,
        someDate2: 12344400000,
        DatePickerAlignment,
      },
    })),
  )
  .add(
    'With different placements',
    withNotes({text: marked(withDifferentPlacements)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date1">Bottom-right datepicker:</label>
          <next-datepicker [(ngModel)]="someDate1"
              id="date1" name="date" [placement]="'bottom-right'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date2">Bottom-left datepicker:</label>
          <next-datepicker [(ngModel)]="someDate2"
              id="date2" name="date" [placement]="'bottom-left'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date3">Top-left datepicker:</label>
          <next-datepicker [(ngModel)]="someDate3"
              id="date3" name="date" [placement]="'top-left'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date4">Top-right datepicker:</label>
          <next-datepicker [(ngModel)]="someDate4"
              id="date4" name="date" [placement]="'top-right'"></next-datepicker>
        </div>
      </form>
    `,
      props: {
        someDate1: 12344400000,
        someDate2: 12344400000,
        someDate3: 12344400000,
        someDate4: 12344400000,
      },
    })),
  )
  .add(
    'With different themes',
    withNotes({text: marked(withDifferentThemes)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date1">Form-control datepicker:</label>
          <next-datepicker [(ngModel)]="someDate1"
              id="date1" name="date" [theme]="DatePickerThemes.formControl"></next-datepicker>
        </div>
        <div class="container">
          <label for="date2" class="label-for-inline-datepicker">Inline datepicker: </label>
          <next-datepicker [(ngModel)]="someDate2"
              id="date2" name="date" [theme]="DatePickerThemes.inline"></next-datepicker>
        </div>
      </form>
    `,
      props: {
        someDate1: 12344400000,
        someDate2: 12344400000,
        DatePickerThemes,
      },
    })),
  )
  .add(
    'With change output',
    withNotes({text: marked(withChangeOutput)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date">Date:</label>
          <next-datepicker [(ngModel)]="someDate" (change)="onSomeTh()"
              id="date" name="date" ></next-datepicker>
        </div>
      </form>
    `,
      props: {
        someDate: 12344400000,
        onSomeTh: () => {
          alert('Date was changed');
        },
      },
    })),
  )
  .add(
    'with different date formats',
    withNotes({text: marked(defaultText)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent, NextDatepickerFormatYyyyMmmDdComponent, NextDateDisplay],
        providers: [
          DatePipe,
          {
            provide: NgbDateParserFormatter,
            useClass: NextDateFormatter,
            deps: [NextDateDisplayFormatYyyyMmmDd],
          },
        ],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date">Date:</label>
          <next-datepicker-format-yyyy-mmm-dd [(ngModel)]="someDate"
              id="date" name="date" ></next-datepicker-format-yyyy-mmm-dd>
        </div>
      </form>
    `,
      props: {
        someDate: 12344400000,
      },
    })),
  );
