## The data that is bound to next-datepicker component

To bind a variable using NgModel or Reactive Forms the variable should be the number of milliseconds since 1 January 1970 00:00:00. For examle on this page we use:

- someDate1: 1234440000 - 1234440000 milliseconds since 1 January 1970 00:00:00 = 15.01.1970
- someDate2: 18525584160000 = 19.01.2577
- someDate3: new Date().getTime() = the current date

To get the number of milliseconds since 1 January 1970 00:00:00 use method .getTime() for any Date-type variable.
For example to get the current date use new Date().getTime() as it has been shown earlier.

### The template for this example looks like the code below

```
<style>
  // bootstrap styles
  ...
</style>
<form>
  <div class="container">
    <label for="date">
      someDate1 = {{someDate1}}:
    </label>
    <next-datepicker
      [(ngModel)]="someDate1"
      id="date1" name="date1"
    ></next-datepicker>
  </div>
  <div class="container">
    <label for="date">
      someDate2 = {{someDate2}}:
    </label>
    <next-datepicker
      [(ngModel)]="someDate2"
      id="date2" name="date2"
    ></next-datepicker>
  </div>
  <div class="container">
    <label for="date">
      someDate3 = {{someDate3}} (current date):
    </label>
    <next-datepicker
      [(ngModel)]="someDate3"
      id="date3" name="date3"
    ></next-datepicker>
  </div>
</form>
```

### And the props looks like the code below

```
props: {
  someDate1: 1234440000,
  someDate2: 18525584160000,
  someDate3: new Date().getTime(),
},
```
