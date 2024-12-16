import { Component } from '@angular/core';
import { AuthService } from '../authlogin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  isSignUp = true;
  email = '';
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  togglePanel(): void {
    this.isSignUp = !this.isSignUp;
  }

  signup(): void {
    // Add validation logic if needed
    const userData = { email: this.email, username: this.username, password: this.password };
    fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'User signed up successfully.') {
          this.authService.setCurrentUser({ username: this.username, email: this.email });
          alert('Signup successful.');
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }

  login(): void {
    const userData = { email: this.email, password: this.password };
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          this.authService.setCurrentUser({ username: data.username, email: this.email });
          alert('Login successful.');
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }
}
