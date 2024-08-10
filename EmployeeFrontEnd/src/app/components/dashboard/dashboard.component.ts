import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  totalEmployees: number = 0;
  totalSalary: number = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getActiveUsers();
    this.getInactiveUsers();
    this.getCountTotalEmployee();
    this.getTotalSumSalary();
  }

  getActiveUsers(): void {
    this.dashboardService.getActiveUsers().subscribe(data => {
      this.activeUsers = data.data; // Assuming data.data contains the number of active users
    });
  }

  getInactiveUsers(): void {
    this.dashboardService.getInactiveUsers().subscribe(data => {
      this.inactiveUsers = data.data; // Assuming data.data contains the number of inactive users
    });
  }

  getCountTotalEmployee(): void {
    this.dashboardService.getCountTotalEmployee().subscribe(data => {
      this.totalEmployees = data.data; // Assuming data.data contains the total number of employees
    });
  }

  getTotalSumSalary(): void {
    this.dashboardService.getTotalSumSalary().subscribe(data => {
      this.totalSalary = data.data; // Assuming data.data contains the total sum of salaries
    });
  }
}

