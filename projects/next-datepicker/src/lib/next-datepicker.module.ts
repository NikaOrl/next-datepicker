import { NgModule } from '@angular/core';
import { NextDatepickerComponent } from './next-datepicker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  declarations: [NextDatepickerComponent]
})
export class NextDatepickerModule {}
