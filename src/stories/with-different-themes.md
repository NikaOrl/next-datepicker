## The datepicker with different themes

You can set different themes to the datepicker.
There are two options:

- 'form-control' (by default)
- 'inline'

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
      [theme]="'form-control'"
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
      [theme]="'inline'"
    ></next-datepicker>
  </div>
</form>
```
