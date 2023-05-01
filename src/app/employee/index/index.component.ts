import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    })
  }

  deleteEmployee(id: number) {
    this.employeeService.delete(id).subscribe(res => {
      this.employees = this.employees.filter(employee => employee.id !== id);
      console.log('Employee deleted successfully!');
    })
  }

}
