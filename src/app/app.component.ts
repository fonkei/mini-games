import { Component } from '@angular/core';
import { KeyboardManager } from './KeyboardManager';

@Component({
  selector: 'app-root',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private keyboardManager: KeyboardManager) {

  }

  hotkeys(event) {
    console.log(event.keyCode);

    console.log("KEYS", this.keyboardManager.getKeys());
  }
}
