import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePickerAlignment} from 'next-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appFormGroup = new FormGroup({
    shippingDate: new FormControl(12344400000),
  });
  public someDate = 12344400000;

  public get DatePickerAlignment() {
    return DatePickerAlignment;
  }
}
