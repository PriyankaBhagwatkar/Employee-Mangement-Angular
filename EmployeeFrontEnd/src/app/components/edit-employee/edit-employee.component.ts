import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee'; // Ensure the path is correct

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'] // Corrected to styleUrls
})
export class EditEmployeeComponent implements OnInit {
  successMessage: any;
  employee: Employee = {
    id:0,
    empId: 0,
    fullName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    contactNo: 0,
    designation: '',
    department: '',
    leaveStatus: 1,
    status: 'active',
    salary: 0,
    documents: '',
    joiningDate: ''
  };
 

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    
  ) { }
  
  ngOnInit(): void {
    const empId = this.route.snapshot.paramMap.get('id'); // Get employee ID from route
    let num = Number(empId);
    this.employee.id = num
   // let num = Number(empId);
    //this.employee.id = num;
    this.employeeService.getEmployeeById(this.employee).subscribe(employee => {
      this.employee = employee;
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.employeeService.editEmployee(this.employee).subscribe(response => {
        console.log(response)
        if (response.status === 'success') {
          this.successMessage = response.message;
        }
      });
    }
  }
}
