import {Component, OnDestroy} from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-shape-counter',
  templateUrl: './shape-counter.component.html',
  styleUrls: ['./shape-counter.component.css']
})
export class ShapeCounterComponent implements OnDestroy {
  private gameStarted: boolean = false;
  private timeout: any;
  private game: Game = new Game("ShapeCounter");

  constructor(private gameService: GameService) {
    this.gameStarted = true;
    this.start();
  }

  private start(): void {
    this.gameService.loadGame(this.game);
    this.timeout = setTimeout(() => {
      this.gameService.stopGame();
    }, 10000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
