import { Component, OnInit } from '@angular/core';
import { GameSelectionService } from '../game-selection.service'; // Import the service
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  popularGames: any[] = [
    { id: 1, name: 'Game 1', image: 'assets/images.jpeg', link: 'app-builds-test/JCL_WebGL_V1/index.html' },
    { id: 2, name: 'Game 2', image: 'assets/image3.jpeg', link: 'app-builds-test/JCL_WebGL_V2/index.html' },
    { id: 3, name: 'Game 3', image: 'assets/images2.png', link: 'app-builds-test/JCL_WebGL_V3/index.html' },
  ];

  multiplayerGames: any[] = [
    { id: 1, name: 'Multiplayer Game 1', image: 'assets/mult1.jpeg', link: 'app-builds-test/JCL_WebGL_MP1/index.html' },
  ]
  recentGames: any[] = []; 
  constructor(private gameService: GameSelectionService, private router: Router) {}

  ngOnInit(): void {
    
    this.gameService.playedGames$.subscribe((games: any[]) => {
      this.recentGames = games; // Update recent games list
    });
  }
  onGameSelect(game: any): void {
   
    this.gameService.addGameToPlayedList(game);
    this.router.navigate([`/game-play`, game.id]); 
  }
}
