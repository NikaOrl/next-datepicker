import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangeDetectorRef, Component, DebugElement, NO_ERRORS_SCHEMA, Pipe, PipeTransform} from '@angular/core';
import {DatePickerAlignment, DatePickerThemes, NextDatepickerComponent} from './next-datepicker.component';
import {By} from '@angular/platform-browser';
import {CommonModule, DOCUMENT} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NextDateDisplay} from '../next-date-display/next-date-display.pipe';
import {NextDateFormatter} from '../next-date-formatter/next-date-formatter.service';

describe(`NextDatepickerComponent`, () => {
  @Pipe({name: 'NextDateDisplay'})
  class NextDateDisplayMock implements PipeTransform {
    public transform(i): any {
      return i;
    }
  }

  @Component({
    template: `
      <next-datepicker [id]="id" (change)="onChange($event)"></next-datepicker>
    `,
  })
  class NextDatepickerHostComponent {
    public id = 'id';
    public onChange = (value: number) => null;
  }

  let hostComponent: NextDatepickerHostComponent;
  let component: NextDatepickerComponent;
  let componentDebug: DebugElement;
  let fixture: ComponentFixture<NextDatepickerHostComponent>;
  let instance: any;
  let document;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, NgbDatepickerModule],
      declarations: [NextDatepickerHostComponent, NextDatepickerComponent],
      providers: [
        {provide: ChangeDetectorRef, useValue: {detectChanges: () => null}},
        {provide: NextDateDisplay, useValue: NextDateDisplayMock},
        {
          provide: NextDateFormatter,
          useValue: {parse: () => null, format: () => ''},
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDatepickerHostComponent);
    hostComponent = fixture.componentInstance;
    document = TestBed.get(DOCUMENT);
    componentDebug = fixture.debugElement.query(By.directive(NextDatepickerComponent));
    component = componentDebug.componentInstance;
    instance = component;
  });

  afterEach(() => fixture.destroy());

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });

  it(`should check default state of input component properties`, () => {
    expect(component.placement).toBe('bottom-left');
    expect(component.container).toBe('');
    expect(component.theme).toBe(DatePickerThemes.FormControl);
    expect(component.alignment).toBe(DatePickerAlignment.left);
    expect(component.onChangeCallback()).toBeUndefined();
    expect(component.onTouchedCallback()).toBeUndefined();
  });

  it(`should close datepicker on ESC when it's opened`, () => {
    const isOpenSpy = spyOn(component.d, 'isOpen').and.returnValue(true);
    const closeSpy = spyOn(component.d, 'close');
    const event = {};

    componentDebug.triggerEventHandler('keyup.esc', event);
    expect(isOpenSpy).toHaveBeenCalled();
    expect(closeSpy).toHaveBeenCalled();
  });

  it(`should not close datepicker on ESC when it's not opened`, () => {
    const isOpenSpy = spyOn(component.d, 'isOpen').and.returnValue(false);
    const closeSpy = spyOn(component.d, 'close');
    const event = {};

    componentDebug.triggerEventHandler('keyup.esc', event);
    expect(isOpenSpy).toHaveBeenCalled();
    expect(closeSpy).not.toHaveBeenCalled();
  });

  it(`should not close datepicker on on clicking on document when it's not opened`, () => {
    const isOpenSpy = spyOn(component.d, 'isOpen').and.returnValue(false);
    const closeSpy = spyOn(component.d, 'close');

    document.dispatchEvent(new MouseEvent('click'));
    expect(isOpenSpy).toHaveBeenCalled();
    expect(closeSpy).not.toHaveBeenCalled();
  });

  it(`should not close datepicker when it's click on the picker itself`, () => {
    const isOpenSpy = spyOn(component.d, 'isOpen').and.returnValue(true);
    const closeSpy = spyOn(component.d, 'close');
    instance.elementRef.nativeElement = {contains: () => null};
    const event = {target: {offsetParent: {tagName: 'NGB-DATEPICKER'}}};

    component.closeFromClick(event);

    expect(isOpenSpy).toHaveBeenCalled();
    expect(closeSpy).not.toHaveBeenCalled();
  });

  it(`should not close datepicker when event target is nested into the component`, () => {
    const isOpenSpy = spyOn(component.d, 'isOpen').and.returnValue(true);
    const closeSpy = spyOn(component.d, 'close');
    instance.elementRef.nativeElement = {contains: () => null};
    const containsSpy = spyOn(instance.elementRef.nativeElement, 'contains').and.returnValue(true);
    const event = {target: {offsetParent: {tagName: 'tagName'}}};

    component.closeFromClick(event);

    expect(isOpenSpy).toHaveBeenCalled();
    expect(containsSpy).toHaveBeenCalledWith(event.target);
    expect(closeSpy).not.toHaveBeenCalled();
  });

  it(`should not close datepicker when event target is not nested into the component`, () => {
    const isOpenSpy = spyOn(component.d, 'isOpen').and.returnValue(true);
    const closeSpy = spyOn(component.d, 'close');
    instance.elementRef.nativeElement = {contains: () => null};
    const containsSpy = spyOn(instance.elementRef.nativeElement, 'contains').and.returnValue(false);
    const event = {target: {offsetParent: {tagName: 'tagName'}}};

    component.closeFromClick(event);

    expect(isOpenSpy).toHaveBeenCalled();
    expect(containsSpy).toHaveBeenCalledWith(event.target);
    expect(closeSpy).toHaveBeenCalled();
  });

  it(`should remove Id attribute when component initializing`, async () => {
    const removeAttributeSpy = spyOn(instance.renderer, 'removeAttribute');
    instance.elementRef.nativeElement = {};
    fixture.detectChanges();
    await fixture.detectChanges();
    expect(removeAttributeSpy).toHaveBeenCalledWith({}, 'id');
  });

  it(`should parse timestamp to object`, () => {
    const getMonthSpy = jasmine.createSpy('getMonth').and.returnValue(4);
    const getDateSpy = jasmine.createSpy('getDate').and.returnValue(24);
    const getFullYearSpy = jasmine.createSpy('getFullYear').and.returnValue(1970);
    const dateSpy = spyOn(window as any, 'Date').and.returnValue({
      getMonth: getMonthSpy,
      getDate: getDateSpy,
      getFullYear: getFullYearSpy,
    });
    const result = component.parseTimestamp(12345678910);
    expect(result).toEqual({month: 5, day: 24, year: 1970});
    expect(getMonthSpy).toHaveBeenCalled();
    expect(getDateSpy).toHaveBeenCalled();
    expect(getFullYearSpy).toHaveBeenCalled();
    expect(dateSpy).toHaveBeenCalledWith(12345678910);
  });

  it(`should parse date object`, () => {
    const getTimeSpy = jasmine.createSpy('getTime').and.returnValue(1);
    const dateSpy = spyOn(window as any, 'Date').and.returnValue({
      getTime: getTimeSpy,
    });
    const value = {month: 6, day: 24, year: 1970};
    const result = component.parseDateObject(value as any);
    expect(result).toEqual(1);
    expect(getTimeSpy).toHaveBeenCalled();
    expect(dateSpy).toHaveBeenCalledWith(1970, 5, 24);
  });

  it(`should reset model when no value passed`, () => {
    const date = new Date();
    const ngbDateStruct = {
      day: date.getUTCDay(),
      month: date.getUTCMonth(),
      year: date.getUTCFullYear(),
    };
    component.model = ngbDateStruct;
    component.writeValue(null);
    expect(component.model).toBe(null);
  });

  it(`should not change model when value already existed`, () => {
    const date = new Date();
    const ngbDateStruct = {
      day: date.getUTCDay(),
      month: date.getUTCMonth(),
      year: date.getUTCFullYear(),
    };
    const spy = spyOn(component, 'parseTimestamp').and.returnValue(ngbDateStruct);
    component.model = ngbDateStruct;
    component.writeValue(ngbDateStruct);
    expect(component.model).toBe(ngbDateStruct);
    expect(spy).toHaveBeenCalledWith(ngbDateStruct);
  });

  it(`should change model when value is not equal to model`, () => {
    const date = new Date();
    const ngbDateStruct = {
      day: date.getUTCDay(),
      month: date.getUTCMonth(),
      year: date.getUTCFullYear(),
    };
    const spy = spyOn(component, 'parseTimestamp').and.returnValue(ngbDateStruct);
    component.model = {
      day: date.getUTCDay(),
      month: date.getUTCMonth(),
      year: date.getUTCFullYear(),
    };
    component.writeValue(ngbDateStruct);
    expect(component.model).toBe(ngbDateStruct);
    expect(spy).toHaveBeenCalledWith(ngbDateStruct);
  });

  it(`should register on changed callback`, () => {
    const spy = jasmine.createSpy('onChanged');
    component.registerOnChange(spy);
    expect(spy).not.toHaveBeenCalled();
    component.onChangeCallback({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it(`should register on touched callback`, () => {
    const spy = jasmine.createSpy('onTouched');
    component.registerOnTouched(spy);
    expect(spy).not.toHaveBeenCalled();
    component.onTouchedCallback({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it(`should set disabled state of the component`, () => {
    const spy = spyOn(instance.renderer, 'setProperty');
    component.input.nativeElement = {};
    component.setDisabledState(true);
    expect(spy).toHaveBeenCalledWith({}, 'disabled', true);
  });

  it(`should set model`, () => {
    const value = {month: 5, day: 24, year: 1970};
    const spy = spyOn(component, 'parseDateObject').and.returnValue(12344400000);
    const changeSpy = spyOn(hostComponent, 'onChange');
    component.onChangeCallback = () => null;
    component.onTouchedCallback = () => null;
    const onChangeCallbackSpy = spyOn(component, 'onChangeCallback');
    const onTouchedCallbackSpy = spyOn(component, 'onTouchedCallback');
    component.setModel(value);
    expect(spy).toHaveBeenCalledWith(value);
    expect(changeSpy).toHaveBeenCalledWith(12344400000);
    expect(onChangeCallbackSpy).toHaveBeenCalledWith(12344400000);
    expect(onTouchedCallbackSpy).toHaveBeenCalled();
  });

  it(`should get css classes for the component`, () => {
    expect(component.cssClasses).toBe(`${DatePickerThemes.FormControl} ${DatePickerAlignment.left}`);
  });
});
