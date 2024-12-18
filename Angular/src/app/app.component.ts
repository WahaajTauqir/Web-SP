import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './authlogin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo
})
export class AppComponent {
  title = 'Angular';
  username: string | null = null;

  constructor(private authService: AuthService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      console.log('Current user in AppComponent:', user); // Debug log
      this.username = user?.username || null;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login-signup']);
  }
}
