
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  message: string = '';

  constructor(private loginService: LoginService,private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        this.loading = false;
        if (response.status === 'success') {
          this.message = 'Login successful!';
          this.router.navigate(['/dashboard']);
          // Handle successful login, e.g., navigate to another page
        } else {
          this.message = 'Login failed: ' + response.message;
        }
      },
      (error) => {
        this.loading = false;
        this.message = 'An error occurred during login';
      }
    );
  }
}
