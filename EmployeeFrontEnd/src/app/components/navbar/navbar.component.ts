import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropdownOpen = false;

  constructor(private router: Router) {}

  logout(): void {
    // Implement any logout logic here, such as clearing authentication tokens
    // For example: this.authService.logout();

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
