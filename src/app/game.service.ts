import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class GameService {
  loadedGame: Game;
  constructor() {
    this.loadedGame = null;
  }

  loadGame(game: Game) : void {
    this.loadedGame = game;
  }

  stopGame() :void {
    this.loadedGame = null;
  }

  isGameLoaded(): boolean {
    return this.loadedGame != null;
  }
}
