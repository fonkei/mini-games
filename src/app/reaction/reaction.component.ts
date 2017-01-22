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
  private game: Game = new Game("Reaction", 3, 10000);

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

    this.gameService.loadGame(this.game);
  }

  ngOnDestroy(): void {
    this.keyDownSub.unsubscribe();
    this.keyUpSub.unsubscribe();
  }
}
