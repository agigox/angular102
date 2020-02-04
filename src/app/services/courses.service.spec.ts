import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { COURSES } from 'backend/database';
import { Course } from '../models/course.model';

describe('CoursesService', () => {

  let service: CoursesService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService]
    });
    service = TestBed.get(CoursesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find all courses', () => {
    service.findAllCourses().subscribe(courses => {
      expect(courses).toBeTruthy('No courses returned');
      expect(courses.length).toBe(2, 'incorrect number of courses');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toEqual('GET');
    req.flush(COURSES);
  });

  it('should find a course by ID', () => {

    service.findCourseById(2).subscribe(course => {
      expect(course.name).toBe('Tooltip Issue');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/courses/2');
    expect(req.request.method).toEqual('GET');
    req.flush(COURSES[1]);
  });

  it('should save a course', () => {
    const changes: Partial<Course> = {name: 'Java in Action'};
    service.saveCourse(3, changes).subscribe(course => {
      expect(course.name).toBe('Java in Action');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toEqual('POST');
    debugger;
    req.flush({
      name: 'Java in Action',
      author: '',
      id: ''
    });
  });

  it('should display course by given category', () => {
    service.displayCoursesByCategory('ADVANCED').subscribe(courses => {
      expect(courses).toBeTruthy('No courses returned');
      expect(courses.length).toBe(1, 'incorrect number of courses');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/courses?category=ADVANCED');
    console.log(req.request.params.toString());
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.toString()).toEqual('category=ADVANCED');
    req.flush([{
      name: 'Java in Action',
      author: '',
      category: 'ADVANCED',
      id: ''
    }]);
  });



});
