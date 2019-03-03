import {NgModule} from '@angular/core';
import {NextDatepickerComponent} from './next-datepicker.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {NextDateDisplay} from '../next-date-display/next-date-display.pipe';
// import { DirectivesModule } from '../directives/directives.module';
// import { PipesModule } from '../pipes/pipes.module';
// not sure about these imports so let them be commented for a while

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    // DirectivesModule,
    // PipesModule
  ],
  exports: [NextDatepickerComponent],
  declarations: [NextDatepickerComponent, NextDateDisplay],
  providers: [DatePipe, NextDateDisplay],
})
export class NextDatepickerModule {}
