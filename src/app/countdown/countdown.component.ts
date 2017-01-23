import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription, Observable } from "rxjs/Rx";

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  public showTimer: boolean = false;
  public count = 5;
  private timer: any;
  private timerSub: Subscription;
  @Output() countDownEnded = new EventEmitter();

  startTimer(seconds: number): void {
    this.count = seconds;
    this.showTimer = true;
    this.timer = Observable.timer(1000,1000);
    this.timerSub = this.timer.subscribe(t => {
      this.count = seconds - t;
      if(t == seconds) {
        this.showTimer = false;
        this.countDownEnded.emit();
        this.timerSub.unsubscribe();
      }
    });
  }
}
