## The datepicker with different placements

You can set different placements to the datepicker.
There are four options:

- 'bottom-left' (by default)
- 'bottom-right'
- 'top-left'
- 'top-right'

### The template for this example looks like the code below

```
<style>
  // bootstrap styles
  ...
</style>
<form>
  <div class="container">
    <label for="date1">
      Bottom-right datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate"
      id="date1"
      name="date"
      [placement]="'bottom-right'"
    ></next-datepicker>
  </div>
  <div class="container">
    <label for="date2">
      Bottom-left datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate"
      id="date2"
      name="date"
      [placement]="'bottom-left'"
    ></next-datepicker>
  </div>
  <div class="container">
    <label for="date3">
      Top-left datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate"
      id="date3"
      name="date"
      [placement]="'top-left'"
    ></next-datepicker>
  </div>
  <div class="container">
    <label for="date4">
      Top-right datepicker:
    </label>
    <next-datepicker
      [(ngModel)]="someDate"
      id="date4"
      name="date"
      [placement]="'top-right'"
    ></next-datepicker>
  </div>
</form>
```
