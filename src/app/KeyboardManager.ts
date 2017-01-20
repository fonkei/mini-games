import { Observable } from 'rxjs/Rx'
import { Injectable } from '@angular/core';
import { Buzzer } from './buzzer';

@Injectable()
export class KeyboardManager {
  public static readonly BZ1_RED = 49;
  public static readonly BZ1_ORANGE = 50;
  public static readonly BZ1_BLUE = 51;
  public static readonly BZ1_GREEN = 52;
  public static readonly BZ1_YELLOW = 53;

  public static readonly BZ2_RED = 54;
  public static readonly BZ2_ORANGE = 55;
  public static readonly BZ2_BLUE = 56;
  public static readonly BZ2_GREEN = 57;
  public static readonly BZ2_YELLOW = 48;

  private buzzer1: Buzzer;
  private buzzer2: Buzzer;
  private buzzers: Buzzer[];
  public keyDown: any;
  public keyUp: any;

  constructor() {
    this.buzzer1 = new Buzzer();
    this.buzzer2 = new Buzzer();
    this.buzzers = [this.buzzer1, this.buzzer2];

    this.keyDown = Observable.fromEvent(window, 'keydown')
      .filter((k: any) => k.which >= 48 && k.which <= 57)
      .map((k: any) => this.handleKeys(k));

    this.keyUp = Observable.fromEvent(window, 'keyup')
      .filter((k: any) => k.which >= 48 && k.which <= 57)
      .map((k: any) => this.handleKeys(k));

  }

  handleKeys(event) {
    switch (event.keyCode) {
      case KeyboardManager.BZ1_RED:
        this.buzzer1.red = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_ORANGE:
        this.buzzer1.orange = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_BLUE:
        this.buzzer1.blue = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_GREEN:
        this.buzzer1.green = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_YELLOW:
        this.buzzer1.yellow = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_RED:
        this.buzzer2.red = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_ORANGE:
        this.buzzer2.orange = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_BLUE:
        this.buzzer2.blue = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_GREEN:
        this.buzzer2.green = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_YELLOW:
        this.buzzer2.yellow = event.type === "keydown";
        break;
      default:
        break;
    }

    return this.buzzers;
  }
}
