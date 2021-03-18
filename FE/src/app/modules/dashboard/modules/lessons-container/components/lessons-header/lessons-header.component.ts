import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-header',
  templateUrl: './lessons-header.component.html',
  styleUrls: ['./lessons-header.component.scss']
})
export class LessonsHeaderComponent implements OnInit {
  @Input() progress: number; 
  @Input() grade: number;
  @Input() coreLessons: number;
  @Input() allLessons: number;

  isLessonsExpanded= false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onLessonExpandClick(){
    this.isLessonsExpanded = !this.isLessonsExpanded;
  }

}
