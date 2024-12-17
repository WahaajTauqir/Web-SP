import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './authlogin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  username: string | null = null;

  constructor(private authService: AuthService) {}

ngOnInit(): void {
  this.authService.getCurrentUser().subscribe(user => {
    console.log('Current user in AppComponent:', user); // Debug log
    this.username = user?.username || null;
  });
}

  logout(): void {
    this.authService.clearCurrentUser();
    this.username = null;
    alert('Logged out successfully.');
  }
  
}