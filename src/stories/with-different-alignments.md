## The datepicker with different alignments

You can set different alignments to the datepicker.
There are two options in the special enum DatePickerAlignment:

- 'left-aligned' (by default)
- 'right-aligned'

## To use this enum import it into the component:

```
import {DatePickerAlignment} from 'next-datepicker';

export class AppComponent {
...
  public get DatePickerAlignment() {
    return DatePickerAlignment;
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
      Left-aligned datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate"
      id="date1"
      name="date"
      [alignment]="DatePickerAlignment.left"
    ></next-datepicker>
  </div>
  <div class="container">
    <label for="date2">
      Right-aligned datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate"
      id="date2"
      name="date"
      [alignment]="DatePickerAlignment.right"
    ></next-datepicker>
  </div>
</form>
```
