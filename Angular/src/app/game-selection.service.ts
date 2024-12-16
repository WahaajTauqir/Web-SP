import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameSelectionService {
  private playedGamesSubject = new BehaviorSubject<any[]>([]); 
  playedGames$ = this.playedGamesSubject.asObservable(); 

  // Add a game to the played games list
  addGameToPlayedList(game: any) {
    const currentGames = this.playedGamesSubject.value; 
    this.playedGamesSubject.next([...currentGames, game]); 
  }
}
