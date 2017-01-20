import { Component, OnDestroy } from '@angular/core';
import { KeyboardManager } from './KeyboardManager';
import { Buzzer } from './buzzer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  private gameStarted: boolean = false;

  private buzzer1: Buzzer;
  private buzzer2: Buzzer;
  private buzzers: Buzzer[];

  constructor(private keyboardManager: KeyboardManager) {
    this.buzzer1 = new Buzzer();
    this.buzzer2 = new Buzzer();

    this.buzzers = [this.buzzer1, this.buzzer1];

    keyboardManager.keyDown.subscribe(bzrs => this.buzzers = bzrs);
    keyboardManager.keyUp.subscribe(bzrs => this.buzzers = bzrs);

    this.start();
  }

  start(): void {

  }

  ngOnDestroy(): void {
    this.keyboardManager.keyDown.unsubscribe();
    this.keyboardManager.keyUp.unsubscribe();
  }
}
