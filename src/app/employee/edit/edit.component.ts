import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  id!: number;
  employee!: Employee;
  form!: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.get(this.id).subscribe((data: Employee) => {
      this.employee = data;
      this.form.get('empNumber')?.setValue(this.employee.empNumber);
      this.form.get('name')?.setValue(this.employee.name);
      console.log(this.employee);
    });

    this.form = new FormGroup({
      empNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.employeeService.update(this.form.value, this.id).subscribe((res: any) => {
      console.log('Employee updated successfully!');
      console.log(this.form.value);
      this.router.navigateByUrl('employee/index');
    })
  }
}
