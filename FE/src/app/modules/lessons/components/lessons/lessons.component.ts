import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessonId: string;
  
  constructor(private route: ActivatedRoute) {
    this.lessonId = this.route.snapshot.paramMap.get('lessonId');    
}

  ngOnInit(): void {
  }

}
