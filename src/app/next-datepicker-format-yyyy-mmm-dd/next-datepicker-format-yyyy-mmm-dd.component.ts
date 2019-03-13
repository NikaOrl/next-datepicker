import {Component, OnInit, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop = (val?: any) => null;

@Component({
  selector: 'next-datepicker-format-yyyy-mmm-dd',
  templateUrl: './next-datepicker-format-yyyy-mmm-dd.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextDatepickerFormatYyyyMmmDdComponent),
      multi: true,
    },
  ],
})
export class NextDatepickerFormatYyyyMmmDdComponent implements ControlValueAccessor {
  public onChangeCallback = noop;
  public onTouchedCallback = noop;
  public model: number;

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
