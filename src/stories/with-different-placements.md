## The datepicker with different placements

You can set different placements to the datepicker.
There are following options:

- 'top';
- 'top-left' (by default);
- 'top-right';
- 'bottom';
- 'bottom-left';
- 'bottom-right';
- 'left';
- 'left-top';
- 'left-bottom';
- 'right';
- 'right-top';
- 'right-bottom'.

### The template for this example looks like the code below

```
<style>
  // bootstrap styles
  ...
  .container-for-placements {
    margin-top: 10px;
    width: 50%;
  }
</style>
<form>
  <div class="container container-for-placements">
    <label for="date1">Bottom datepicker:</label>
    <next-datepicker [(ngModel)]="someDate1"
        id="date1" name="date" [placement]="'bottom'"></next-datepicker>
  </div>
  ...
</form>
```
