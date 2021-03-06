import {Component, OnInit, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NextDateFormatter} from '../../../projects/next-datepicker/src/public_api';
import {NextDateDisplay} from '../../../projects/next-datepicker/src/public_api';

@Component({
  selector: 'next-datepicker-format-dd-mmm-yyyy',
  templateUrl: './next-datepicker-format-dd-mmm-yyyy.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextDatepickerFormatDdMmmYyyyComponent),
      multi: true,
    },
    {
      provide: NgbDateParserFormatter,
      useClass: NextDateFormatter,
      deps: [NextDateDisplay],
    },
  ],
})
export class NextDatepickerFormatDdMmmYyyyComponent implements ControlValueAccessor {
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
