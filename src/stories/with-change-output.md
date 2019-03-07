## The datepicker with different themes

You can set @Output 'change' to the datepicker to bind some function that will be called by onChange.

Try to change date in the datepicker.

### The template for this example looks like the code below

```
<style>
  // bootstrap styles
  ...
</style>
<form>
  <div class="container">
    <label for="date">Date:</label>
    <next-datepicker
      [(ngModel)]="someDate"
      (change)="onSomeTh()"
      id="date"
      name="date"
    ></next-datepicker>
  </div>
</form>
```

### And the function looks like the code below

```
onSomeTh: () => {
  alert('Date was changed');
}
```
