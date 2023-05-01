import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Employee } from './employee';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        EmployeeService
      ],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('service should be created', () => {

    const employee: Employee = {
      empNumber: '123456789',
      name: 'emp1',
      id: 1
    };

    expect(service).toBeTruthy();
    service.create(employee).subscribe((data) => {
      expect(data).toEqual(employee);
    });
  });
});
