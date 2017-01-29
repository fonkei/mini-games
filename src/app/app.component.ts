import { Component, OnDestroy } from '@angular/core';
import { KeyboardManager } from './KeyboardManager';
import { Buzzer } from './buzzer';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { GameService } from "./game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  private gameStarted: boolean = false;

  private keyDownSub: Subscription;
  private keyUpSub: Subscription;

  private buzzer1: Buzzer;
  private buzzer2: Buzzer;
  private buzzers: Buzzer[];

  //private gameRoutes: string[] = ["/test-buzzer", "/shape-counter", "/reaction"];
  private gameRoutes: string[] = ["/shape-counter"];

  constructor(private keyboardManager: KeyboardManager, private router: Router, private gameService: GameService) {
    this.buzzer1 = new Buzzer();
    this.buzzer2 = new Buzzer();
    this.buzzers = [this.buzzer1, this.buzzer1];

    this.keyDownSub = keyboardManager.keyDown.subscribe(bzrs => this.buzzers = bzrs);
    this.keyUpSub = keyboardManager.keyUp.subscribe(bzrs => this.buzzers = bzrs);

    this.start();
  }

  private start(): void {
    this.gameStarted = true;
    let gameIndex = -1;

    setInterval(() => {
      if(!this.gameService.isGameLoaded()) {
        gameIndex++;
        gameIndex = gameIndex > this.gameRoutes.length - 1 ? 0 : gameIndex;
        console.log(gameIndex, this.gameRoutes[gameIndex]);

        this.router.navigate([this.gameRoutes[gameIndex]]);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.keyDownSub.unsubscribe();
    this.keyUpSub.unsubscribe();
  }
}
