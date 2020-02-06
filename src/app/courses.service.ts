import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseurl}/courses`);
  }
}
src/docs/asciidoc/release_notes/0.15.1.RELEASE.adoc
