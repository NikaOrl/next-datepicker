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
  TemplateRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgbDateStruct, NgbInputDatepicker, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {DayTemplateContext} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context';

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
  @Input() public theme = DatePickerThemes.formControl;
  @Input() public alignment = DatePickerAlignment.left;

  @Input() public placement = 'top-left';
  @Input() public container = '';

  @Input() public autoClose = true;
  @Input() public dayTemplate: TemplateRef<DayTemplateContext>;
  @Input() public dayTemplateData: (date: NgbDate, current: {year: number; month: number}) => any;
  @Input() public disabled: boolean;
  @Input() public displayMonths: number;
  @Input() public firstDayOfWeek: number;
  @Input() public footerTemplate: TemplateRef<any>;
  @Input() public markDisabled: (date: NgbDate, current: {year: number; month: number}) => boolean;
  @Input() public maxDate: NgbDateStruct;
  @Input() public minDate: NgbDateStruct;
  @Input() public navigation: 'select' | 'arrows' | 'none';
  @Input() public outsideDays: 'visible' | 'collapsed' | 'hidden';
  @Input() public showWeekdays: boolean;
  @Input() public showWeekNumbers: boolean;
  @Input() public startDate: {year: number; month: number; day?: number};

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
