import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employee = {
    fullName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    contactNo: '',
    designation: '',
    department: '',
    leaveStatus: 1,
    status: 'active',
    salary: null,
    documents: '',
    joiningDate: ''
  };
  successMessage: any;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8080/saveEmployeesDetails', this.employee).subscribe(response => {
      // Handle the response here
      if (response && response.status === 'success') {
        this.successMessage = response.message;
        // Reset form or perform other actions
      }
    }, error => {
      console.error('Error occurred:');
      this.successMessage = null; // Reset success message in case of error
    });
  }
}
