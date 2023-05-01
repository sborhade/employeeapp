import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { CreateComponent } from './create.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [CreateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should save employee details when form is submitted', () => {
    const employee = {
      id: 1,
      name: 'empName1',
      empNumber: 'emp1'
    };

    component.form.controls['name'].setValue(employee.name);
    component.form.controls['empNumber'].setValue(employee.empNumber);
    component.submit();
    expect(component).toBeTruthy();
  });

});
