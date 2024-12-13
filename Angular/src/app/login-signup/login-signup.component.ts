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
  password = '';

  ngOnInit() {
    this.togglePanel();
  }

  togglePanel() {
    this.isSignUp = !this.isSignUp;
  }

  signup() {
    console.log('Sign Up:', { email: this.email, password: this.password });
  }

  login() {
    console.log('Login:', { email: this.email, password: this.password });
  }
}