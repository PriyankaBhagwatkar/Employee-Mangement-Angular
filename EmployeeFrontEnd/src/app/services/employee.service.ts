import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../components/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'YOUR_API_URL'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }
   // Method to get employee details by ID
   getEmployeeById(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<{ status: string, message: string, data: Employee}>(`http://localhost:8080/employeeDetail`, employee, { headers })
    .pipe(map(response => response.data));
  }

  // Method to edit an existing employee
  editEmployee(employee: Employee): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>('http://localhost:8080/updateEmployeesDetails', employee, { headers });
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<{ status: string, message: string, data: Employee[] }>(`http://localhost:8080/ListOfAllEmployeeDetails`)
      .pipe(map(response => response.data));
  }
}
