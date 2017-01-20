import { Observable } from 'rxjs/Rx'
import { Injectable } from '@angular/core';

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

  private buzzers: any;
  public keyDown: any;
  public keyUp: any;

  constructor() {
    this.buzzers = [
      [{ red: false }, { orange: false }, { blue: false }, { green: false }, { yellow: false }],
      [{ red: false }, { orange: false }, { blue: false }, { green: false }, { yellow: false }],
    ];

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
        this.buzzers[0].red = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_ORANGE:
        this.buzzers[0].orange = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_BLUE:
        this.buzzers[0].blue = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_GREEN:
        this.buzzers[0].green = event.type === "keydown";
        break;
      case KeyboardManager.BZ1_YELLOW:
        this.buzzers[0].yellow = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_RED:
        this.buzzers[1].red = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_ORANGE:
        this.buzzers[1].orange = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_BLUE:
        this.buzzers[1].blue = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_GREEN:
        this.buzzers[1].green = event.type === "keydown";
        break;
      case KeyboardManager.BZ2_YELLOW:
        this.buzzers[1].yellow = event.type === "keydown";
        break;
      default:
        break;
    }

    return this.buzzers;
  }
}
