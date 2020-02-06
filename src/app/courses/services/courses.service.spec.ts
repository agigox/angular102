import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
    // const http = jasmine.createSpyObj('HttpClient', ['get']);
    // const service: CoursesService = new CoursesService(http);
    expect(service).toBeTruthy();
  });
});
