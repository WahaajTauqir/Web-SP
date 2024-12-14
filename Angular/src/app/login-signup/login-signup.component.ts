import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  isSignUp = true;
  email = '';
  username = '';
  password = '';

  togglePanel() {
    this.isSignUp = !this.isSignUp;
  }
  validateEmail(email: string): boolean {
    return email.trim().includes('@gmail.com');
  }

  validatePassword(password: string): boolean {
    return password.trim().length >= 6;
  }

  validateUsername(username: string): boolean {
    return username.trim().length > 0;
  }

  signup() {
    const userData = { email: this.email, username: this.username, password: this.password };
  
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
  }
  
  login() {
    const userData = { email: this.email, password: this.password };
  
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
  }
  

  // signup() {
  //   this.email = this.email.trim();
  //   this.username = this.username.trim();
  //   this.password = this.password.trim();

  //   if (!this.validateEmail(this.email)) {
  //     alert('Please enter a valid address for Sign Up.');
  //     return;
  //   }
  //   if (!this.validateUsername(this.username)) {
  //     alert('Please enter a valid username for Sign Up.');
  //     return;
  //   }
  //   if (!this.validatePassword(this.password)) {
  //     alert('Password must be at least 6 characters long for Sign Up.');
  //     return;
  //   }
  //   console.log('Sign Up:', { email: this.email, username: this.username, password: this.password });
  //   alert('Sign Up Successful!');
  // }
  // login() {
  //   this.email = this.email.trim();
  //   this.password = this.password.trim();

  //   if (!this.validateEmail(this.email)) {
  //     alert('Please enter a valid address for Login.');
  //     return;
  //   }
  //   if (!this.validatePassword(this.password)) {
  //     alert('Password must be at least 6 characters long for Login.');
  //     return;
  //   }
  //   console.log('Login:', { email: this.email, password: this.password });
  //   alert('Login Successful!');
  // }
}
