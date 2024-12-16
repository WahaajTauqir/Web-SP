import { Component } from '@angular/core';
import { GameSelectionService } from '../game-selection.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games = [
    { id: 1, name: 'Game 1', link: 'app-builds-test/JCL_WebGL_V1/index.html' ,image: 'assets/images.jpeg' },
    { id: 2, name: 'Game 2', link: 'app-builds-test/JCL_WebGL_V1/index.html' ,image: 'assets/images2.png'},
    { id: 3, name: 'Game 3', link: 'app-builds-test/JCL_WebGL_V1/index.html' ,image: 'assets/image3.jpeg' },
  ];

  constructor(
    private router: Router,
    private gameSelectionService: GameSelectionService
  ) {}
  onGameSelect(game: any) {
    this.gameSelectionService.addGameToPlayedList(game);
    this.router.navigate(['/game-play', game.id]);
  }
}
