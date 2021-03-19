import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-container',
  templateUrl: './lessons-container.component.html',
  styleUrls: ['./lessons-container.component.scss']
})
export class LessonsContainerComponent implements OnInit {


  isAllLessonsClicked = false;
  lessons = [
    {
      id: 1,
      name: 'lesson 1111111111111111 1111111111111111111111111 1111111111111111111 1111111111111111111111111111 11111111111111111111111111111111 1111111111111111111 1111111111111111',
      isLessonCompleted: true,
      iconName: '/assets/img/univer.jpg',
      isLessonCore: true
    },
    {
      id: 2,
      name: 'lesson 2',
      isLessonCompleted: false,
      iconName: '/assets/img/bag.jpg',
      isLessonCore: false
    },
    {
      id: 3,
      name: 'lesson 3',
      isLessonCompleted: true,
      iconName: '/assets/img/fm.jpg',
      isLessonCore: true
    },
    { 
      id: 4, 
      name: 'lesson 4',
      isLessonCompleted: false,
      iconName: '/assets/img/career.jpg',
      isLessonCore: true
    },
    {
      id: 5,
      name: 'lesson 5',
      isLessonCompleted: true,
      iconName: '/assets/img/univer.jpg',
      isLessonCore: true
    },
    {id: 6,
      name: 'lesson 6',
      isLessonCompleted: false,
      iconName: '/assets/img/bag.jpg',
      isLessonCore: false
    },
    {
      id: 7,
      name: 'lesson 7',
      isLessonCompleted: true,
      iconName: '/assets/img/fm.jpg',
      isLessonCore: false
    },
    {
      id:8, 
      name: 'lesson 7',
      isLessonCompleted: false,
      iconName: '/assets/img/career.jpg',
      isLessonCore: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getLessons(){
    if(this.isAllLessonsClicked){
      return this.lessons;
    } else {
      return this.lessons.filter(lesson => lesson.isLessonCore);  
    }     
  }

  viewAllLessonsClick(){
    this.isAllLessonsClicked = true;
  }
}
