import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
  @Input() isLessonCompleted: boolean;
  @Input() lessonName: string;
  @Input() iconName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
