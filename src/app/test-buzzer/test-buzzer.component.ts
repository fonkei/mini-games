import { Component, OnDestroy } from '@angular/core';
import { KeyboardManager } from '../KeyboardManager';
import { Buzzer } from '../buzzer';


@Component({
  selector: 'app-test-buzzer',
  templateUrl: './test-buzzer.component.html',
  styleUrls: ['./test-buzzer.component.css']
})
export class TestBuzzerComponent implements OnDestroy {
  private buzzer1: Buzzer;
  private buzzer2: Buzzer;

  constructor(private keyboardManager: KeyboardManager) {
    this.buzzer1 = new Buzzer();
    this.buzzer2 = new Buzzer();

    keyboardManager.keyDown.subscribe(bzrs => {
      this.buzzer1 = bzrs[0];
      this.buzzer2 = bzrs[1];
    });
    keyboardManager.keyUp.subscribe(bzrs => {
      this.buzzer1 = bzrs[0];
      this.buzzer2 = bzrs[1];
    });
  }

  ngOnDestroy(): void {
    this.keyboardManager.keyDown.unsubscribe();
    this.keyboardManager.keyUp.unsubscribe();
  }
}
