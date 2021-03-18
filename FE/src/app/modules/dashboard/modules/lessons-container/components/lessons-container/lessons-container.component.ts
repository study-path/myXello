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
      name:'lesson 1111111111111111 1111111111111111111111111 1111111111111111111 1111111111111111111111111111 11111111111111111111111111111111 1111111111111111111 1111111111111111',
      isLessonCompleted: true,
      iconName:'/assets/img/univer.jpg',
      isLessonCore:true
    },
    {
      name:'lesson 2',
      isLessonCompleted: false,
      iconName:'/assets/img/bag.jpg',
      isLessonCore:false
    },
    {
      name:'lesson 3',
      isLessonCompleted: true,
      iconName:'/assets/img/fm.jpg',
      isLessonCore:true
    },
    {
      name:'lesson 4',
      isLessonCompleted: false,
      iconName:'/assets/img/career.jpg',
      isLessonCore:true
    },
    {
      name:'lesson 44',
      isLessonCompleted: true,
      iconName:'/assets/img/univer.jpg',
      isLessonCore:true
    },
    {
      name:'lesson 5',
      isLessonCompleted: false,
      iconName:'/assets/img/bag.jpg',
      isLessonCore:false
    },
    {
      name:'lesson 6',
      isLessonCompleted: true,
      iconName:'/assets/img/fm.jpg',
      isLessonCore:false
    },
    {
      name:'lesson 7',
      isLessonCompleted: false,
      iconName:'/assets/img/career.jpg',
      isLessonCore:true
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
