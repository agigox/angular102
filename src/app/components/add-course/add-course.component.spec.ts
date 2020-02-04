import { CoursesService } from './../../services/courses.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ],
      imports: [ FormsModule, ReactiveFormsModule],
      providers: [
        {provide: CoursesService, useValue: jasmine.createSpy('CoursesService')}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    // component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create the AddCourse component', () => {
    expect(component).toBeTruthy();
  });

  it('should check form invalid when empty', () => {
    expect(component.formCourse.valid).toBeFalsy();
  });

  it('should check the name validity required', () => {
    const name = component.formCourse.controls['name'];
    expect(name.valid).toBeFalsy();
    expect(name.errors['required']).toBeTruthy();
  });

  it('should check the id validity required and min number equal to zero', () => {
    let id = component.formCourse.controls['id'];
    id.setValue(-12);
    expect(id.errors['min']).toBeTruthy();
    expect(id.errors['min'].min).toBe(1);
    expect(id.errors['min'].actual).toBe(-12);
    expect(id.errors['required']).toBeFalsy();
    id.setValue(2);
    expect(id.errors).toBeNull();
  });

  it('should test that when submiting the form we save the course', () => {
    expect(component.formCourse.valid).toBeFalsy();
    component.formCourse.controls['id'].setValue(2);
    expect(component.formCourse.valid).toBeFalsy();
    component.formCourse.controls['name'].setValue('amine');
    expect(component.formCourse.valid).toBeTruthy();
  });
});
