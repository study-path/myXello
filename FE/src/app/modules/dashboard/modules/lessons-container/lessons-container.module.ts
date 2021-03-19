import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

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
    MatButtonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    LessonsContainerComponent
  ]
})
export class LessonsContainerModule { }
