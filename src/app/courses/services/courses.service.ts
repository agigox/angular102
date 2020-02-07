import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../course.model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseurl}/courses/${courseId}`);
  }
  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseurl}/courses`);
  }
/*
  saveCourse(courseId: number, changes: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.baseurl}/courses/${courseId}`, changes);
  }
  */
  /*
  findLessons(courseId: number, filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
    const params = new HttpParams();
    params.set('courseId', courseId.toString());
    params.set('filter', filter);
    params.set('sortOrder', sortOrder);
    params.set('pageNumber', pageNumber.toString());
    params.set('pageSize', pageSize.toString());
    return this.http.get('/api/lessons', { params });
  }
  */
}
