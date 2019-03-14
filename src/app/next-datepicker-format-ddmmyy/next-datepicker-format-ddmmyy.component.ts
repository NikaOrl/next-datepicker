import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NextDateFormatter} from '../../../projects/next-datepicker/src/public_api';
import {NextDateDisplayFormaDdMmYy} from './next-date-format-ddmmyy-display.pipe';

@Component({
  selector: 'next-datepicker-format-ddmmyy',
  templateUrl: './next-datepicker-format-ddmmyy.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextDatepickerFormatDdmmyyComponent),
      multi: true,
    },
    {
      provide: NgbDateParserFormatter,
      useClass: NextDateFormatter,
      deps: [NextDateDisplayFormaDdMmYy],
    },
  ],
})
export class NextDatepickerFormatDdmmyyComponent implements ControlValueAccessor {
  public model: number;
  public onChangeCallback = () => null;
  public onTouchedCallback = () => null;

  public writeValue(value: number | null) {
    if (!value) {
      this.model = null;
      return;
    } else {
      this.model = value;
    }
  }

  // From ControlValueAccessor interface
  public registerOnChange(fn: (val?: any) => void) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  public registerOnTouched(fn: (val?: any) => void) {
    this.onTouchedCallback = fn;
  }
}
