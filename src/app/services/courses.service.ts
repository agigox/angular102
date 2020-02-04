import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
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
  saveCourse(courseId: number, changes: Partial<Course>): Observable<Course> {
    return this.http.post<Course>(`${this.baseurl}/courses`, changes);
  }
  displayCoursesByCategory(category: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseurl}/courses`, {params: new HttpParams().set('category', category)});
  }
}
