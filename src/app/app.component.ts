import { Component, OnDestroy } from '@angular/core';
import { KeyboardManager } from './KeyboardManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  private gameStarted: boolean = false;
  private buzzers: any;

  constructor(private keyboardManager: KeyboardManager) {
    this.buzzers = [
      [{ red: false }, { orange: false }, { blue: false }, { green: false }, { yellow: false }],
      [{ red: false }, { orange: false }, { blue: false }, { green: false }, { yellow: false }],
    ];

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
