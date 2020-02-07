import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { cold, hot } from 'jasmine-marbles';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


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
      category: 'BIGNNER',
      id: 2
    }
  ];
};

const bignnerCourses = setupCourses().filter(course => course.category === 'BIGNNER');
const advancedCourses = setupCourses().filter(course => course.category === 'ADVANCED');

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ANGULAR 102'`, () => {
    expect(component.title).toEqual('ANGULAR 102');
  });
/*
  it('should display the course list', () => {
    component.courses = setupCourses();
    fixture.detectChanges();
    const cards = el.queryAll(By.css('.course-card'));
    expect(cards).toBeTruthy('Could not find cards');
    expect(cards.length).toBe(2, 'Unexpected number of courses');
  });
  */
/*
  it('should test example of asynchronous operation', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      console.log('running assertion');
      test = true;
      expect(test).toBeTruthy();
    }, 1000);
  }));
  */
});
/*
describe('Marble testing basics', () => {
  it('should understand marble diagram', () => {
    const source = cold('--');
    console.log(source);
    const expected = cold('--');
    expect(source).toBeObservable(expected);

  });
});

describe('cold observable', () => {
  it('should understand marble diagram', () => {
    const source = cold('-a-|', {a: {key: 'value'}});
    const expected = cold('-f-|', {f: {key: 'value'}});
    expect(source).toBeObservable(expected);

  });

  it('should support custom errors', () => {
    const source = cold('--#', null, new Error('Ooops!'));
    const expected = cold('--#', null, new Error('Ooops!'));
    expect(source).toBeObservable(expected);
  });

  it('should support multiple emission in the same time frame', () => {
    const source = of(1, 2, 3);
    const expected = cold('(abc|)', {a: 1, b: 2, c: 3 });

    expect(source).toBeObservable(expected);

    const result = source.pipe(map(x => x + 2));
    const expectedResult = cold('(ijk|)', {i: 3, j: 4, k: 5});
    expect(result).toBeObservable(expectedResult);


  });
});
*/
