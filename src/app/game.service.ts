import { Injectable, OnDestroy } from '@angular/core';
import { Game } from './game';

@Injectable()
export class GameService implements OnDestroy {
  loadedGame: Game;
  private timeout: any;

  constructor() {
    this.loadedGame = null;
  }

  start(): void {
    if (this.loadedGame.timeout && this.loadedGame.timeout > 0) {
      this.timeout = setTimeout(() => {
        this.stopGame();
      }, this.loadedGame.timeout);
    }
  }

  loadGame(game: Game): void {
    this.loadedGame = game;
    this.start();
  }

  stopGame(): void {
    clearTimeout(this.timeout);
    this.loadedGame = null;
  }

  isGameLoaded(): boolean {
    return this.loadedGame != null;
  }

  addPlayer1Point(): void {
    this.loadedGame.addPlayer1Point();
  }

  addPlayer2Point(): void {
    this.loadedGame.addPlayer2Point();
  }

  reducePlayer1Point(): void {
    this.loadedGame.reducePlayer1Point();
  }

  reducePlayer2Point(): void {
    this.loadedGame.reducePlayer2Point();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
