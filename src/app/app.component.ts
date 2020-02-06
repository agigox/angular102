import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoursesService } from './courses/services/courses.service';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ANGULAR 102';
  courses: Course[];
  constructor(private coursesService: CoursesService) {
  }
  ngOnInit(): void {
    of(1, 2, 3).pipe(map(x => x * 2));
    fromEvent(document, 'click').pipe(
      // restart counter on every click
      switchMap(() => interval(1000))
    ).subscribe(console.log);

    this.coursesService.findAllCourses().subscribe(
      data => this.courses = data
    );
  }
}
