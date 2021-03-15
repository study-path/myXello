import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AssignmentsContainerComponent } from './components/assignments-container/assignments-container.component';

@NgModule({
  declarations: [
    AssignmentsContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AssignmentsContainerComponent
  ]
})
export class AssigmentsContainerModule { }
