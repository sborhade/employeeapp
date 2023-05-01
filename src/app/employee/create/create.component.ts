import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    private router: Router
  ) {
    
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      empNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required)
    });
  }

  submit() {
    console.log(this.form.value);
    let employee = {} as Employee;

    this.employeeService.create(this.form.value).subscribe((res: any) => {
      console.log('employee record created successfully!');
      this.router.navigateByUrl('employee/index');
    })
  }
}
