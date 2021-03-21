import { Component, OnInit } from '@angular/core';
import { LessonModel } from '@models/lesson-model';
import { LessonsService } from '@services/lessons.service';

@Component({
  selector: 'app-lessons-container',
  templateUrl: './lessons-container.component.html',
  styleUrls: ['./lessons-container.component.scss']
})
export class LessonsContainerComponent implements OnInit {
  isAllLessonsClicked = false;
  lessons: LessonModel[] = [];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.lessonsService
      .getAll$(1)
      .subscribe(
        lessons => this.lessons = lessons,
        err => alert(err.message));
  }

  getLessons(){
    if(this.isAllLessonsClicked){
      return this.lessons;
    } else {
      return this.lessons.filter(lesson => lesson.isCore);  
    }     
  }

  viewAllLessonsClick(){
    this.isAllLessonsClicked = true;
  }
}
