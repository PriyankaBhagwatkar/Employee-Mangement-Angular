import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8080'; // Update with your actual API URL

  constructor(private http: HttpClient) { }



  getActiveUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getInactiveUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/inactive`);
  }

  getCountTotalEmployee(): Observable<any> {
    return this.http.get(`${this.apiUrl}/CountTotalEmployee`);
  }

  getTotalSumSalary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sumOfSalaries`);
  }
}

