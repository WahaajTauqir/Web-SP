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
    if (!this.validateEmail(this.email) || !this.validatePassword(this.password)) {
      alert('Invalid email or password.');
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
        if (data.token) {
          localStorage.setItem('token', data.token); // Save token
          this.authService.setCurrentUser(userData); // Save user
          alert('Signup successful.');
          this.router.navigate(['/home']);
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }
  

  login() {
    if (!this.validateEmail(this.email) || !this.validatePassword(this.password)) {
      alert('Invalid email or password.');
      return;
    }
  
    const userData = { email: this.email, password: this.password };
  
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
  
        if (data.message === 'Login successful.' && data.user) {
          console.log('User:', data.user);
  
          // Save token and user data
          localStorage.setItem('token', data.token);
          this.authService.setCurrentUser(data.user);
  
          alert('Login successful.');
          this.router.navigate(['/home']);
        } else {
          alert(data.message || 'Login failed.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login.');
      });
  }
  
  logout() {
    this.authService.clearCurrentUser();
    localStorage.removeItem('token');
    alert('You have been logged out.');
    this.router.navigate(['/login-signup']);
  }
  
}
