import { Component } from '@angular/core';
import { AuthService } from '../authlogin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  isSignUp = true;
  email = '';
  username = '';
  password = '';

  constructor(private authService: AuthService ,private router: Router)  {}

  togglePanel() {
    this.isSignUp = !this.isSignUp;
  }
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email.trim());
  }
  validatePassword(password: string): boolean {
    return password.trim().length >= 6;
  }
  validateUsername(username: string): boolean {
    return username.trim().length >= 3 && username.trim().length <= 16;
  }
  signup() {
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!this.validateUsername(this.username)) {
      alert('Username cannot be empty.');
      return;
    }
    if (!this.validatePassword(this.password)) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    const userData = { email: this.email, username: this.username, password: this.password };
    fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'User signed up successfully.') {
          this.authService.setCurrentUser(userData);
          alert('Signup successful.');
          this.router.navigate(['/home']);
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
      
  }
  login() {
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!this.validatePassword(this.password)) {
      alert('Password must be at least 6 characters long.');
      return;
    }
      const userData = { email: this.email,user: this.username ,password: this.password };
      fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.token) {
            this.authService.setCurrentUser(data.userData);
            alert('Login successful.');
            this.router.navigate(['/home']);
          } else {
            alert(data.message);
          }
        })
        .catch(error => console.error('Error:', error));
    }
}
