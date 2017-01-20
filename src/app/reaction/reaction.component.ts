import {Component, OnDestroy} from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import {KeyboardManager} from "../KeyboardManager";
import {Buzzer} from "../buzzer";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnDestroy {
  private buzzer1: Buzzer;
  private buzzer2: Buzzer;
  private keyDownSub: Subscription;
  private keyUpSub: Subscription;
  private gameStarted: boolean = false;
  private timeout: any;
  private game: Game = new Game("Reaction");

  constructor(private gameService: GameService, private keyboardManager: KeyboardManager,) {
    this.keyDownSub = keyboardManager.keyDown.subscribe(bzrs => {
      this.buzzer1 = bzrs[0];
      this.buzzer2 = bzrs[1];

      if(this.buzzer1.red) {
        this.gameService.stopGame();
      }
    });
    this.keyUpSub = keyboardManager.keyUp.subscribe(bzrs => {
      this.buzzer1 = bzrs[0];
      this.buzzer2 = bzrs[1];
    });

    this.gameStarted = true;
    this.start();
  }

  private start(): void {
    this.gameService.loadGame(this.game);
    this.timeout = setTimeout(() => {
      this.gameService.stopGame();
      this.gameStarted = false;
    }, 10000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
    this.keyDownSub.unsubscribe();
    this.keyUpSub.unsubscribe();
  }
}
