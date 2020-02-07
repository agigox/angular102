import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { COURSES } from 'backend/database';

fdescribe('CoursesService', () => {

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
      console.log(course);
      expect(course.name).toBe('Tooltip Issue');
    });
    const req = httpTestingController.expectOne('http://localhost:3000/courses/2');
    expect(req.request.method).toEqual('GET');
    req.flush(COURSES[1]);
  });



});
