## The datepicker with different date formats

You can set different date formats to the datepicker.
By default @ng-bootstrap/ng-bootstrap settings the date format is yyyy-MM-dd.
To change it use pipes.
The next-datepicker has a pipe called nextDateDisplay that changes date format to dd-MMM-yyyy.

### To use this format add the provider into the module:

```
...
import {
  NextDatepickerModule,
  NextDateFormatter,
  NextDateDisplay
} from 'next-datepicker';
import {NgbDateParserFormatter}
  from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [...,
    NextDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    DatePipe,
    {
      provide: NgbDateParserFormatter,
      useClass: NextDateFormatter,
      deps: [NextDateDisplay],
    },
  ],
})
export class AppModule {}
```

### Or you can create a new component that will have the next-datepicker component and add it the provider:

For example

#### The template for the component

```
<next-datepicker [(ngModel)]="model"></next-datepicker>
```

#### The code of the component

```
import ...
import {DatePipe} from '@angular/common';


@Component({
  ...
  providers: [
    DatePipe,
    {
      provide: NgbDateParserFormatter,
      useClass: NextDateFormatter,
      deps: [NextDateFormatYyyyMmmDdDisplay],
    },
  ],
})
export class someComponent {
  ...
}
```

### To use some other formats create a custom pipe with this format and add it into the module or the component as shown earlier

The example of the pipe:

```
import {Pipe, PipeTransform, Injectable, Input}
  from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({name: 'somePipe', pure: true})
@Injectable({
  providedIn: 'root',
})
export class somePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  public transform(input: any,
    addTime: boolean = false): string {
    if (input && (input > 0
      || input.length === 10 || input instanceof Date)) {
      const newDate = new Date(input);
      return this.datePipe
        .transform(newDate,
          `yyyy-MMM-dd ${addTime ? 'HH:mm' : ''}`)
        .trim();
    } else {
      return '';
    }
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
    <label for="date0">
      Default date format (yyyy-MM-dd):
    </label>
    <next-datepicker [(ngModel)]="someDate"
        id="date0" name="date" ></next-datepicker>
  </div>
  <div class="container">
    <label for="date1">
      The dd-MMM-yyyy format using
      a component nextDateDisplay pipe:
    </label>
    <some-custom-component-container
      [(ngModel)]="someDate"
      id="date1" name="date"
    ></some-custom-component-container>
  </div>
  ...
</form>
```
