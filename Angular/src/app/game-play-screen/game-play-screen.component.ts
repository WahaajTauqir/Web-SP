import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-game-play-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-play-screen.component.html',
  styleUrl: './game-play-screen.component.css'
})
export class GamePlayScreenComponent implements OnInit {
  currentGame: any;
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    
    const gameId = +this.route.snapshot.paramMap.get('id')!;
    this.loadGame(gameId);
  }

  loadGame(gameId: number): void {
    
    const games = [
      { id: 1, name: 'Game 1', link: 'app-builds-test/JCL_WebGL_V1/index.html' },
      { id: 2, name: 'Game 2', link: 'app-builds-test/JCL_WebGL_V1/index.html' },
      { id: 3, name: 'Game 3', link: 'app-builds-test/JCL_WebGL_V1/index.html' },
      
    ];


    this.currentGame = games.find(game => game.id === gameId);

    if (this.currentGame) {
     
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentGame.link);
    }
  }

}
