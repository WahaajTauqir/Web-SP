import { Component, OnInit } from '@angular/core';
import { GameSelectionService } from '../game-selection.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../authlogin.service';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games = [
    { id: 1, name: 'Game 1', link: 'app-builds-test/JCL_WebGL_V1/index.html', image: 'assets/images.jpeg' },
    { id: 2, name: 'Game 2', link: 'app-builds-test/JCL_WebGL_V1/index.html', image: 'assets/images2.png' },
    { id: 3, name: 'Game 3', link: 'app-builds-test/JCL_WebGL_V1/index.html', image: 'assets/image3.jpeg' },
  ];

  currentUser: { username: string | null; email: string | null } | null = null;

  constructor(
    private router: Router,
    private gameSelectionService: GameSelectionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void 
  {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  onGameSelect(game: any) 
  {
    if (this.currentUser) 
    {
      
      console.log('User email:', this.currentUser.email);

      this.gameSelectionService.addGameToPlayedList(game);
      this.router.navigate(['/game-play-screen']);
    } 
    else 
    {
      this.router.navigate(['/login-signup']);
    }
  }
}
