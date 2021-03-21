import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

import { LessonModel } from './../models/lesson-model';


@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getAll$(userId): Observable<LessonModel[]> {
    return this.http.get<LessonModel[]>(`${environment.xelloApiUrl}/api/users/${userId}/lessons`);
  }

  getLesson$(userId, lessonId): Observable<LessonModel> {
    return this.http.get<LessonModel>(`${environment.xelloApiUrl}/api/users/${userId}/lessons/${lessonId}`);
  }
}
