import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  hotkeys(event) {
    console.log(event.keyCode);
  }
}
