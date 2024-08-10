import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  editEmployee(id: number): void {
    this.router.navigate(['/edit-employee', id]);
  }

}
