import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  formCourse: FormGroup;
  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.formCourse = new FormGroup({
      // the name is required
      name: new FormControl('', {
        validators: Validators.required
      }),
      author: new FormControl(''),
      category: new FormControl(''),
      id: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  addCourse() {
    let changes: Partial<Course>;
    changes = this.formCourse.value;
    this.courseService.saveCourse(this.formCourse.value.id, changes).subscribe((d) => console.log(d));
  }

}
