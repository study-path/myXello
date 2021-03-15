import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FeaturedLessonComponent } from './components/featured-lesson/featured-lesson.component';
import { LessonItemComponent } from './components/lesson-item/lesson-item.component';
import { LessonsContainerComponent } from './components/lessons-container/lessons-container.component';
import { LessonsHeaderComponent } from './components/lessons-header/lessons-header.component';


@NgModule({
  declarations: [
    LessonsContainerComponent,
    LessonItemComponent,
    LessonsHeaderComponent,
    FeaturedLessonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    LessonsContainerComponent
  ]
})
export class LessonsContainerModule { }
