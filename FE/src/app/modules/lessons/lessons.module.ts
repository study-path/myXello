import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { LessonsComponent } from './components/lessons/lessons.component';
import { LessonsRoutingModule } from './lessons-routing.module';

@NgModule({
  declarations: [LessonsComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    MatButtonModule
  ]
})
export class LessonsModule { }
