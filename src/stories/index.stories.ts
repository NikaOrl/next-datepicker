import {storiesOf} from '@storybook/angular';
import {NextDatepickerComponent, NextDateDisplay} from 'next-datepicker';
import {withNotes} from '@storybook/addon-notes';
import {withKnobs} from '@storybook/addon-knobs';
import * as marked from 'marked';
import defaultText from './default.md';

import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

export const defaultDate = {
  someDate: 12344400000,
};

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
      <form>
        <div class="form-input">
          <label for="date">Date</label>
          <next-datepicker class="form-control" [(ngModel)]="defaultDate.someDate"
              id="'date'" name="date"></next-datepicker>
        </div>
      </form>
    `,
      props: {defaultDate},
    })),
  );
