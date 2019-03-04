import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appFormGroup = new FormGroup({
    shippingDate: new FormControl(12344400000)
  });
  someDate = 12344400000;
}
