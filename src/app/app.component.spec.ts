import { AddCourseComponent } from './components/add-course/add-course.component';
import { TestBed, async, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { cold, hot } from 'jasmine-marbles';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const setupCourses = () => {
  return [{
      name: 'Table Improvement',
      author: 'Issue tracking is awesome because of collaboration',
      category: 'BIGNNER',
      id: 1
    },
    {
      name: 'Tooltip Issue',
      author: 'Issue tracking is awesome because of collaboration',
      category: 'ADVANCED',
      id: 2
    }
  ];
};

const advancedCourses = () => setupCourses().filter(course => course.category === 'ADVANCED');

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let courseService: any;

  beforeEach(async(() => {
    const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses', 'displayCoursesByCategory']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        AddCourseComponent
      ],
      providers: [
        {provide: CoursesService, useValue: coursesServiceSpy}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      courseService = TestBed.get(CoursesService);
    });
  }));

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one as title 'ANGULAR 102'`, () => {
    expect(component.title).toEqual('ANGULAR 102');
    const titles = el.queryAll(By.css('.app-title'));
    expect(titles.length).toBe(1, 'There is more than title in the page');
  });

  it('should display the courses list', () => {
    courseService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const courses = el.queryAll(By.css('.course-item'));
    expect(courses.length).toBe(2, 'Expected to find 2 courses');
  });

  it('should display advanced courses when button see only advanced clicked', fakeAsync(() => {
    courseService.displayCoursesByCategory.and.returnValue(of(advancedCourses()));
    fixture.detectChanges();
    const button = el.query(By.css('.advanced-courses'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    flush();
    const courses = el.queryAll(By.css('.course-item'));
    expect(courses.length).toBe(1, 'Expected to find 1 courses');
  }));

});
