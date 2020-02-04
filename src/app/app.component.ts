import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { Course } from './models/course.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ANGULAR 102';
  courses$: Observable<Course[]>;
  constructor(private coursesService: CoursesService) {
  }
  ngOnInit(): void {
    this.courses$ = this.coursesService.findAllCourses();
  }
  displayAdvanced(): void {
    this.courses$ = this.coursesService.displayCoursesByCategory('ADVANCED');
  }
}
