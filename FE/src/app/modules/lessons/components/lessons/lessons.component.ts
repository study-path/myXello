import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonModel } from '@models/lesson-model';
import { LessonsService } from '@services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessonId: string;
  lesson: LessonModel;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonsService:LessonsService)
  {
    this.lessonId = this.route.snapshot.paramMap.get('lessonId');    
  }

  ngOnInit(): void {
    this.lessonsService
      .getLesson$(1, this.lessonId)    
      .subscribe(
        lesson => this.lesson = lesson,
        err => alert(err.message));
  }

  completeLesson(){
    this.router.navigate(["/dashboard"]);
  }

}
