## The datepicker with different themes

You can set different themes to the datepicker.
There are two options in the special enum DatePickerThemes:

- 'form-control' (by default)
- 'inline'

## To use this enum import it into the component:

```
import {DatePickerThemes} from 'next-datepicker';

export class AppComponent {
...
  public get DatePickerThemes() {
    return DatePickerThemes;
  }
}
```

### The template for this example looks like the code below

```
<style>
  // bootstrap styles
  ...
</style>
<form>
  <div class="container">
    <label for="date1">
      Form-control datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate1"
      id="date1"
      name="date"
      [theme]="DatePickerThemes.formControl"
    ></next-datepicker>
  </div>
  <div class="container">
    <label
      for="date2"
      class="label-for-inline-datepicker"
    >Inline datepicker: </label>
    <next-datepicker
      [(ngModel)]="someDate2"
      id="date2"
      name="date"
      [theme]="DatePickerThemes.inline"
    ></next-datepicker>
  </div>
</form>
```
