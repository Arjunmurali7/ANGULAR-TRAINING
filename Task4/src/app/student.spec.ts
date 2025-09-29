import { TestBed } from '@angular/core/testing'; //TestBed is Angular’s main testing utility

import { StudentService } from './student'; //imports the StudentService that you want to test.

describe('Student', () => { //describe is a Jasmine testing function
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
