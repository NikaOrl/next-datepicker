## The datepicker with different alignments

You can set different alignments to the datepicker.
There are two options:

- 'left-aligned' (by default)
- 'right-aligned'

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
      [alignment]="'left-aligned'"
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
      [alignment]="'right-aligned'"
    ></next-datepicker>
  </div>
</form>
```
