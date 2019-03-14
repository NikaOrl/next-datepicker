import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

import {storiesOf} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';
import {withKnobs} from '@storybook/addon-knobs';
import {setConsoleOptions} from '@storybook/addon-console';

import * as marked from 'marked';
import defaultText from './default.md';
import dateData from './date-data.md';
import withDifferentAlignments from './with-different-alignments.md';
import withDifferentPlacements from './with-different-placements.md';
import withDifferentThemes from './with-different-themes.md';
import withChangeOutput from './with-change-output.md';
import withDifferentFormats from './with-different-formats.md';

import {
  NextDatepickerComponent,
  DatePickerAlignment,
  DatePickerThemes,
} from '../../projects/next-datepicker/src/public_api';

import {NextDatepickerFormatYyyyMmmDdComponent} from '../app/next-datepicker-format-yyyy-mmm-dd/next-datepicker-format-yyyy-mmm-dd.component';
import {NextDatepickerFormatDdmmyyComponent} from '../app/next-datepicker-format-ddmmyy/next-datepicker-format-ddmmyy.component';
import {NextDatepickerFormatDdMmmYyyyComponent} from '../app/next-datepicker-format-dd-mmm-yyyy/next-datepicker-format-dd-mmm-yyyy.component';

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
    'Date data',
    withNotes({text: marked(dateData)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date">someDate1 = {{someDate1}}:</label>
          <next-datepicker [(ngModel)]="someDate1"
              id="date1" name="date1"></next-datepicker>
        </div>
        <div class="container">
          <label for="date">someDate2 = {{someDate2}}:</label>
          <next-datepicker [(ngModel)]="someDate2"
              id="date2" name="date2"></next-datepicker>
        </div>
        <div class="container">
          <label for="date">someDate3 = {{someDate3}} (the current date):</label>
          <next-datepicker [(ngModel)]="someDate3"
              id="date3" name="date3"></next-datepicker>
        </div>
      </form>
    `,
      props: {
        someDate1: 1234440000,
        someDate2: 18525584160000,
        someDate3: new Date().getTime(),
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
    'With different date formats',
    withNotes({text: marked(withDifferentFormats)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [
          NextDatepickerFormatYyyyMmmDdComponent,
          NextDatepickerFormatDdmmyyComponent,
          NextDatepickerFormatDdMmmYyyyComponent,
          NextDatepickerComponent,
        ],
        providers: [DatePipe],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date0">Default date format (yyyy-MM-dd):</label>
          <next-datepicker [(ngModel)]="someDate"
              id="date0" name="date" ></next-datepicker>
        </div>
        <div class="container">
          <label for="date1">The dd-MMM-yyyy format using a component nextDateDisplay pipe:</label>
          <next-datepicker-format-dd-mmm-yyyy [(ngModel)]="someDate"
              id="date1" name="date" ></next-datepicker-format-dd-mmm-yyyy>
        </div>
        <div class="container">
          <label for="date3">The yyyy-MMM-dd format using a custom pipe:</label>
          <next-datepicker-format-yyyy-mmm-dd [(ngModel)]="someDate"
              id="date3" name="date" ></next-datepicker-format-yyyy-mmm-dd>
        </div>
        <div class="container">
          <label for="date2">The dd/MM/yy format using a custom pipe:</label>
          <next-datepicker-format-ddmmyy [(ngModel)]="someDate"
              id="date2" name="date" ></next-datepicker-format-ddmmyy>
        </div>
      </form>
    `,
      props: {
        someDate: 12344400000,
      },
    })),
  );
