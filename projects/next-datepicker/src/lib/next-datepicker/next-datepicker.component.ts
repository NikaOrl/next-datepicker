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
  FormControl = 'form-control',
  Inline = 'inline',
}

export enum DatePickerAlignment {
  left = 'left-aligned',
  right = 'right-aligned',
}

let uniqueId = 0;

const noop = function(val?: any) {};

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
    {
      provide: NgbDateParserFormatter,
      useClass: NextDateFormatter,
      deps: [NextDateDisplay],
    },
  ],
})
export class NextDatepickerComponent implements ControlValueAccessor, OnInit {
  onChangeCallback = noop;
  onTouchedCallback = noop;
  model: NgbDateStruct;
  @Input() id = `next-datepicker-${++uniqueId}`;
  @Input() placement = 'bottom-left';
  @Input() container = ''; // 'body' or null
  @Input() theme = DatePickerThemes.FormControl;
  @Input() alignment = DatePickerAlignment.left;
  @ViewChild(NgbInputDatepicker) d: NgbInputDatepicker;
  @ViewChild('input') input: ElementRef;
  @Output() change = new EventEmitter<number>();

  get cssClasses(): string {
    return `${this.theme} ${this.alignment}`;
  }

  @HostListener('keyup.esc')
  closeFromEsc() {
    if (this.d.isOpen()) {
      this.d.close();
    }
  }

  @HostListener('document:click', ['$event'])
  closeFromClick($event) {
    if (!this.d.isOpen()) {
      return;
    }
    const offset = $event.target.offsetParent;
    if (offset && offset.tagName !== 'NGB-DATEPICKER' && !this.elementRef.nativeElement.contains($event.target)) {
      this.d.close();
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'id');
  }

  parseTimestamp(value: number): NgbDateStruct {
    const date = new Date(value);
    return {
      month: date.getMonth() + 1,
      day: date.getDate(),
      year: date.getFullYear(),
    };
  }

  parseDateObject(value: NgbDateStruct): number {
    return new Date(value.year, value.month - 1, value.day).getTime();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (!value) {
      // this.model = '';
      return;
    }
    const newModel = this.parseTimestamp(value);
    if (newModel !== this.model) {
      this.model = newModel;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled) {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  setModel(value: NgbDateStruct) {
    this.model = value;
    const valueNumber = this.parseDateObject(value);
    this.change.emit(valueNumber);
    this.onChangeCallback(valueNumber);
    this.onTouchedCallback();
  }
}
