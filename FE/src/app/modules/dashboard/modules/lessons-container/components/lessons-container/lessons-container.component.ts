import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-container',
  templateUrl: './lessons-container.component.html',
  styleUrls: ['./lessons-container.component.scss']
})
export class LessonsContainerComponent implements OnInit {

  lessons = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
