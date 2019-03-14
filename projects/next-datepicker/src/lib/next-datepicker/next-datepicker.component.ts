import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgbDateParserFormatter, NgbDateStruct, NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {NextDateFormatter} from '../next-date-formatter/next-date-formatter.service';
import {NextDateDisplay} from '../next-date-display/next-date-display.pipe';

export enum DatePickerThemes {
  formControl = 'form-control',
  inline = 'inline',
}

export enum DatePickerAlignment {
  left = 'left-aligned',
  right = 'right-aligned',
}

let uniqueId = 0;

const noop = (val?: any) => null;

@Component({
  selector: 'next-datepicker',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './next-datepicker.component.html',
  styleUrls: ['./next-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextDatepickerComponent),
      multi: true,
    },
  ],
})
export class NextDatepickerComponent implements ControlValueAccessor, OnInit {
  get cssClasses(): string {
    return `${this.theme} ${this.alignment}`;
  }
  public onChangeCallback = noop;
  public onTouchedCallback = noop;
  public model: NgbDateStruct;
  @Input() public id = `next-datepicker-${++uniqueId}`;
  @Input() public placement = 'bottom-left';
  @Input() public container = '';
  @Input() public theme = DatePickerThemes.formControl;
  @Input() public alignment = DatePickerAlignment.left;
  @ViewChild(NgbInputDatepicker) public d: NgbInputDatepicker;
  @ViewChild('input') public input: ElementRef;
  @Output() public change = new EventEmitter<number>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('keyup.esc')
  public closeFromEsc() {
    if (this.d.isOpen()) {
      this.d.close();
    }
  }

  @HostListener('document:click', ['$event'])
  public closeFromClick($event) {
    if (!this.d.isOpen()) {
      return;
    }
    const offset = $event.target.offsetParent;
    if (offset && offset.tagName !== 'NGB-DATEPICKER' && !this.elementRef.nativeElement.contains($event.target)) {
      this.d.close();
    }
  }

  public ngOnInit() {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'id');
  }

  public parseTimestamp(value: number): NgbDateStruct {
    const date = new Date(value);
    return {
      month: date.getMonth() + 1,
      day: date.getDate(),
      year: date.getFullYear(),
    };
  }

  public parseDateObject(value: NgbDateStruct): number {
    return new Date(value.year, value.month - 1, value.day).getTime();
  }

  // From ControlValueAccessor interface
  public writeValue(value: number | null) {
    if (!value) {
      this.model = null;
      return;
    }
    const newModel = this.parseTimestamp(value);
    if (newModel !== this.model) {
      this.model = newModel;
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

  public setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  public setModel(value: NgbDateStruct) {
    this.model = value;
    const valueNumber = this.parseDateObject(value);
    this.change.emit(valueNumber);
    this.onChangeCallback(valueNumber);
    this.onTouchedCallback();
  }
}
