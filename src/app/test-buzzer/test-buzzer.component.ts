import { Component, OnDestroy } from '@angular/core';
import { KeyboardManager } from '../KeyboardManager';


@Component({
  selector: 'app-test-buzzer',
  templateUrl: './test-buzzer.component.html',
  styleUrls: ['./test-buzzer.component.css']
})
export class TestBuzzerComponent implements OnDestroy {
  buzzers: any;

  constructor(private keyboardManager: KeyboardManager) {
    this.buzzers = [
      [{ red: false }, { orange: false }, { blue: false }, { green: false }, { yellow: false }],
      [{ red: false }, { orange: false }, { blue: false }, { green: false }, { yellow: false }],
    ];

    keyboardManager.keyDown.subscribe(bzrs => this.buzzers = bzrs);
    keyboardManager.keyUp.subscribe(bzrs => this.buzzers = bzrs);
  }

  ngOnDestroy(): void {
    this.keyboardManager.keyDown.unsubscribe();
    this.keyboardManager.keyUp.unsubscribe();
  }
}
