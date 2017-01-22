import { Component, OnDestroy } from '@angular/core';
import { KeyboardManager } from '../KeyboardManager';
import { Buzzer } from '../buzzer';
import { Subscription } from "rxjs";
import { Game } from "../game";
import { GameService } from "../game.service";


@Component({
  selector: 'app-test-buzzer',
  templateUrl: './test-buzzer.component.html',
  styleUrls: ['./test-buzzer.component.css']
})
export class TestBuzzerComponent implements OnDestroy {
  private buzzer1: Buzzer;
  private buzzer2: Buzzer;
  private keyDownSub: Subscription;
  private keyUpSub: Subscription;
  private game: Game = new Game("TestBuzzer", 3, 10000);

  constructor(private keyboardManager: KeyboardManager, private gameService: GameService) {
    this.buzzer1 = new Buzzer();
    this.buzzer2 = new Buzzer();

    this.keyDownSub = keyboardManager.keyDown.subscribe(bzrs => {
      this.buzzer1 = bzrs[0];
      this.buzzer2 = bzrs[1];
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
