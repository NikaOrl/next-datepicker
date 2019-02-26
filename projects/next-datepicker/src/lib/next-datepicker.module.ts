import { NgModule } from '@angular/core';
import { NextDatepickerComponent } from './next-datepicker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { DateDisplay } from './date-display.pipe';
// import { DirectivesModule } from '../directives/directives.module';
// import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule
    // DirectivesModule,
    // PipesModule
  ],
  exports: [NextDatepickerComponent],
  declarations: [NextDatepickerComponent, DateDisplay],
  providers: [DatePipe, DateDisplay]
})
export class NextDatepickerModule {}
