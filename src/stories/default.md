## Project setup

```
npm i next-datepicker
```

## Basic usage example with NgModel

### Add module into your app

```
import { NextDatepickerModule } from 'next-datepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    ..., NextDatepickerModule, FormsModule
  ],
  providers: []
})
export class AppModule {
}

```

### Add code to the component file

```
@Component({
  export class AppComponent {
    ...
    someDate = 12344400000;
  }
  ...
```

### Add markup to the template file

```
<form>
  <div class="form-input">
    <label for="date">Date</label>
    <next-datepicker
      class="form-control"
      [(ngModel)]="someDate"
      id="'date'"
      name="date"
    ></next-datepicker>
  </div>
</form>
```

## Basic usage example with Reactive Forms

### Add module into your app

```
import { NextDatepickerModule } from 'next-datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [...,
    NextDatepickerModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule {
}

```

### Add code to the component file

```
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  export class AppComponent {
    ...
    public appFormGroup = new FormGroup({
      someDate: new FormControl(12344400000),
    });
  }
  ...
```

### Add markup to the template file

```
<form [formGroup]="appFormGroup">
  <div class="form-input">
    <label for="shippingDate">Shipping Date</label>
    <next-datepicker
      class="form-control"
      formControlName="someDate"
      id="'date'"
    ></next-datepicker>
  </div>
</form>
```

## The checkbox has:

### 5 inputs: ADD THE DESCRIPTION

- placement: string;
- container: string;
- theme: string;
- alignment: string;
- id: string.

(In case of missing the id, it will be automatically generated)

### 1 output: ADD THE DESCRIPTION

- change.

### The template for this example looks like the code below

```
<form>
  <div class="form-input">
    <label for="date">Date</label>
    <next-datepicker
      class="form-control"
      [(ngModel)]="someDate"
      id="'date'"
      name="date"
    ></next-datepicker>
  </div>
</form>
```
