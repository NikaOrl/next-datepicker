import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

import {storiesOf} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';
import {withKnobs} from '@storybook/addon-knobs';
import {setConsoleOptions} from '@storybook/addon-console';
// import {action} from '@storybook/addon-actions';

import * as marked from 'marked';
import defaultText from './default.md';
import withDifferentAlignments from './with-different-alignments.md';
import withDifferentPlacements from './with-different-placements.md';
import withDifferentThemes from './with-different-themes.md';

import {NextDatepickerComponent, NextDateDisplay} from '../../projects/next-datepicker/src/public_api';

import './nibr-bootstrap.css';

export const defaultDate = {
  someDate: 12344400000,
};

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
        providers: [DatePipe, NextDateDisplay],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date">Date:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate" (change)="onSomeTh()"
              id="date" name="date" ></next-datepicker>
        </div>
      </form>
    `,
      props: {
        defaultDate,
        onClick: (e) => {
          console.log(e);
          // e.preventDefault();
          // action('log2')(e.target);
        },
      },
    })),
  )
  .add(
    'With different alignments',
    withNotes({text: marked(withDifferentAlignments)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe, NextDateDisplay],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date1">Left-aligned datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date1" name="date" [alignment]="'left-aligned'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date2">Right-aligned datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date2" name="date" [alignment]="'right-aligned'"></next-datepicker>
        </div>
      </form>
    `,
      props: {defaultDate},
    })),
  )
  .add(
    'With different placements',
    withNotes({text: marked(withDifferentPlacements)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe, NextDateDisplay],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date1">Bottom-right datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date1" name="date" [placement]="'bottom-right'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date2">Bottom-left datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date2" name="date" [placement]="'bottom-left'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date3">Top-left datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date3" name="date" [placement]="'top-left'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date4">Top-right datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date4" name="date" [placement]="'top-right'"></next-datepicker>
        </div>
      </form>
    `,
      props: {defaultDate},
    })),
  )
  .add(
    'With different themes',
    withNotes({text: marked(withDifferentThemes)})(() => ({
      moduleMetadata: {
        imports: [NgbDatepickerModule],
        declarations: [NextDatepickerComponent],
        providers: [DatePipe, NextDateDisplay],
      },
      template: `
      ${styles}
      <form>
        <div class="container">
          <label for="date1">Form-control datepicker:</label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date1" name="date" [theme]="'form-control'"></next-datepicker>
        </div>
        <div class="container">
          <label for="date2" class="label-for-inline-datepicker">Inline datepicker: </label>
          <next-datepicker [(ngModel)]="defaultDate.someDate"
              id="date2" name="date" [theme]="'inline'"></next-datepicker>
        </div>
      </form>
    `,
      props: {defaultDate},
    })),
  );
